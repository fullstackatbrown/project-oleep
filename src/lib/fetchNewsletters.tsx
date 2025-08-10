// src/lib/fetchNewsletters.ts
import { createBucketClient } from "@cosmicjs/sdk";

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
  // Initialize the Cosmic client using env vars at call time so CI/runtime-injected
  // values from GitHub/Vercel are correctly picked up.
  const bucketSlug = process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG;
  const readKey = process.env.NEXT_PUBLIC_COSMIC_READ_KEY;

  if (!bucketSlug || !readKey) {
    // Surface a clear error on the server (and return empty list in prod usage)
    console.error(
      "Missing Cosmic env vars: NEXT_PUBLIC_COSMIC_BUCKET_SLUG and/or NEXT_PUBLIC_COSMIC_READ_KEY"
    );
  }

  const cosmic = createBucketClient({
    bucketSlug: bucketSlug || "",
    readKey: readKey || "",
  });
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
      // contentURL: obj.metadata.content,
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