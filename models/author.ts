export class Author {
  private name: string;
  private position: string;
  private bio: string;
  private avatar: string;
  private slug: string;

  constructor(data: any) {
    this.name = data.name || "";
    this.position = data.position || "Full Stack Developer";
    this.bio = data.bio || "";
    this.avatar = data.avatar || "";
    this.slug = data.slug || "";
  }

  getName(): string {
    return this.name;
  }

  getPosition(): string {
    return this.position;
  }

  getBio(): string {
    return this.bio;
  }

  getAvatar(): string {
    return this.avatar;
  }

  getSlug(): string {
    return this.slug;
  }
}
