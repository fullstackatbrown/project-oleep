"use client";

import React, { useState, useEffect } from 'react';
import { createBucketClient } from '@cosmicjs/sdk';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

interface CosmicImage {
  id: string;
  title: string;
  slug: string;
  metadata: {
    image?: {
      imgix_url?: string;
      url?: string;
    };
    description?: string;
  };
}

const Gallery = () => {
  const [photos, setPhotos] = useState<Array<{ src: string; alt: string }>>([]);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const cosmic = createBucketClient({
          bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG!,
          readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY!,
        });

        const { objects } = await cosmic.objects
          .find({ type: 'gallery-images' })
          .props('metadata,title');

        const photosData = objects
          .map((img: CosmicImage) => {
            const imageUrl = img.metadata.image?.imgix_url
              ? `${img.metadata.image.imgix_url}?w=300&auto=format`
              : img.metadata.image?.url || '';
            return {
              src: imageUrl,
              alt: img.title,
            };
          })
          .filter(photo => photo.src);

        setPhotos(photosData);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }
    fetchPhotos();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-100">
      <ResponsiveMasonry columnsCountBreakPoints={{ 0: 4 }}>
        <Masonry gutter="10px">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo.src}
              alt={photo.alt}
              style={{ width: "100%", display: "block", borderRadius: "8px" }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Gallery;