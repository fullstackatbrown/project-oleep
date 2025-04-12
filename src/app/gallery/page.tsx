"use client";

import React, { useState, useEffect } from 'react';
import { createBucketClient } from '@cosmicjs/sdk';
import PhotoAlbum from 'react-photo-album';

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
  const [photos, setPhotos] = React.useState<Array<{
    src: string;
    width: number;
    height: number;
    alt: string;
  }>>([]);

  React.useEffect(() => {
    const cosmic = createBucketClient({
      bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG!,
      readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY!,
    });

    cosmic.objects.find({ type: 'gallery-images' })
      .props('metadata,title')
      .then(({ objects }) => {
        setPhotos(objects.map((img: CosmicImage) => ({
          src: img.metadata.image?.imgix_url 
            ? `${img.metadata.image.imgix_url}?w=300&auto=format`  // imgix resize
            : img.metadata.image?.url || '',
          width: 2,    
          height: 1,
          alt: img.title,
        })).filter(photo => photo.src));
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <PhotoAlbum 
        photos={photos} 
        layout="rows" 
        targetRowHeight={100}  
      />
    </div>
  );
};
  
export default Gallery;