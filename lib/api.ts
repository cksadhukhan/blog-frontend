import client, { previewClient } from "./sanity";

const getUniquePosts = (posts: any) => {
  const slugs = new Set();
  return posts.filter((post: any) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const postFields = `
  _id,
  title,
  'date': publishedAt,
  description,
  'slug': slug.current,
  'coverImage': mainImage,
  "tag": categories[]->title,
  'author': author->{name, 'picture': image.asset->url, position, 'slug': slug.current},
`;

const getClient = (preview: any) => (preview ? previewClient : client);

export async function getPreviewPostBySlug(slug: any) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body
    }`,
    { slug }
  );
  return data[0];
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
  return data;
}

export async function getAllAuthorsWithSlug() {
  const data = await client.fetch(
    `*[_type == "author"]{ 'slug': slug.current }`
  );
  return data;
}

export async function getAuthorAndPosts(slug: string, preview: boolean) {
  const curClient = getClient(preview);
  const [author, posts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "author" && slug.current == $slug]{
        _id,
        name,
        position,
        bio,
        'picture': image.asset->url, 
        'posts': *[_type == 'post' && author._ref == ^._id ]
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == 'post' && slug.current != $slug]{
        ${postFields}
      }[0...3]`,
      { slug }
    ),
  ]);
  return { author, posts: getUniquePosts(posts) };
}

export async function getPostCount() {
  const data = await client.fetch(`count(*[_type == "post"])`);
  return data;
}

export async function getAllPostsForHome(preview: any) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }[0...6]`);
  return getUniquePosts(results);
}

export async function getAllPostsForNextPage(offset: number, preview: any) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }[${(offset - 1) * 6}...${(offset - 1) * 6 + 6}]`);
  return getUniquePosts(results);
}

export async function getPostAndMorePosts(slug: any, preview: any) {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
      }[0...3]`,
      { slug }
    ),
  ]);
  return { post, morePosts: getUniquePosts(morePosts) };
}
