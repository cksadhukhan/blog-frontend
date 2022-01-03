import {
  groq,
  createClient,
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
} from "next-sanity";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "b1rsx8gb",
  useCdn: process.env.NODE_ENV === "production",
};

export const imageBuilder = (source: any) =>
  createImageUrlBuilder(config).image(source);
export const usePreviewSubscription = createPreviewSubscriptionHook(config);
export const client = createClient(config);
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export const getClient = (usePreview: any) =>
  usePreview ? previewClient : client;
export default client;
