"use client";
import { useState, useEffect } from "react";
import { createBucketClient } from '@cosmicjs/sdk';

const cosmic = createBucketClient({
  bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG || '',
  readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY || '',
  writeKey: process.env.NEXT_PUBLIC_COSMIC_WRITE_KEY || '',
});

export default function TestImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function handleSubmit() {
      try {
        // Fetch the object of type 'test'
        const { objects } = await cosmic.objects.find({ type: 'test' }).limit(1);
        const object = objects[0]; // Get the first object

        if (object.metadata && object.metadata.fun_images) {
          // Access the image URL
          const imageUrl = object.metadata.fun_images.url;
          console.log("Image URL:", imageUrl);

          // Update the state with the image URL
          setImageUrl(imageUrl);
        }
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setIsLoading(false); // Stop loading once data is fetched
      }
    }

    handleSubmit();
  }, []); // Empty dependency array ensures this runs only once on the client-side

  if (isLoading) {
    return <div>Loading...</div>; // Show loading indicator while data is being fetched
  }

  return (
    <div>
      <h1>CosmicJS Image</h1>
      {imageUrl ? (
        <div>
          <h3>Image from CosmicJS:</h3>
          <img src={imageUrl} alt="Fetched from CosmicJS" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      ) : (
        <p>No image found</p>
      )}
    </div>
  );
}
