"use client";

import React, { useState, useEffect } from 'react';
import { createBucketClient } from '@cosmicjs/sdk';
import Image from 'next/image';

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
              ? `${img.metadata.image.imgix_url}?w=300&h=300&fit=crop&auto=format`
              : img.metadata.image?.url || '';
            return {
              src: imageUrl,
              alt: img.title,
            };
          })
          .filter(photo => photo.src);

        const repeatedPhotos = Array(5)
          .fill(photosData)
          .flat();

        setPhotos(repeatedPhotos);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchPhotos();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-300">
        {photos.map((photo, index) => {
          const isHovered = hoveredIndex === index;
          const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative overflow-hidden rounded-xl border border-gray-300 transition-all duration-300 ${
                isHovered ? "z-10 scale-[1.2]" : "scale-100"
              } ${isDimmed ? "blur-sm brightness-75" : ""}`}
            >
              <Image
                width={250}
                height={250}
                src={photo.src}
                alt={photo.alt}
                className="w-full h-[250px] object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
