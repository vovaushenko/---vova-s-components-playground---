/**
 * Interface of dev.to article
 */
export interface IDevToArticle {
  id: number;
  title: string;
  description: string;
  published_at: string;
  slug: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  positive_reactions_count: number;
  page_views_count: number;
  cover_image: string;
  tag_list: string[];
  body_markdown: string;
}
