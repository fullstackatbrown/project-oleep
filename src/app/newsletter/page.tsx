import NewsletterClient from "./NewsletterClient";
import { createBucketClient } from "@cosmicjs/sdk";
import { RecentNewsletters } from "./NewsletterClient";
const cosmic = createBucketClient({
  bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG || "",
  readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY || "",
});

type CosmicNewsletterResponse = {
  objects: Array<{
    slug: string;
    title: string;
    type: string;
    metadata: {
      title: string;
      date: string;
      image: {
        url: string;
        imgix_url: string;
      };
      content: {
        url: string;
        imgix_url: string;
      };
      description: string;
    };
  }>;
  total: number;
};

export async function fetchNewsletters() {
  try {
    const { objects } = await cosmic.objects
      .find({ type: "newsletters" })
      .props("slug,title,metadata,type")
      .depth(1);
    const newsletters = objects as CosmicNewsletterResponse["objects"];
    return newsletters.map((obj) => ({
      id: obj.slug,
      title: obj.metadata.title,
      date: obj.metadata.date,
      imageUrl:
        obj.metadata.image?.url ||
        obj.metadata.image?.imgix_url ||
        "/noMentorImage.jpg",
      contentURL: obj.metadata.content,
      contentURL:
        obj.metadata.content?.url ||
        obj.metadata.content?.imgix_url ||
        "/noMentorImage.jpg",
      description: obj.metadata.description,
    }));
  } catch (error) {
    console.error("Error fetching newsletter:", error);
    return [];
  }
}

/* The newsletter*/

export default async function Newsletter() {
  const newsletters = await fetchNewsletters();
  return <NewsletterClient newsletters={newsletters} />;
}

/* Recent newsletters for homepage */
export async function RecentNewsletter() {
  const newsletters = await fetchNewsletters();
  return <RecentNewsletters newsletters={newsletters} />;
}
