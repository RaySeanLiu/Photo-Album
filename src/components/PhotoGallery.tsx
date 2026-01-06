import { useState } from 'react';

interface Photo {
  id: number;
  beforeUrl: string;
  afterUrl: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
}

const PhotoGallery = () => {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  // Get the base URL for proper path resolution
  const baseUrl = import.meta.env.BASE_URL;

  // Photos with before and after images
  const photos: Photo[] = [
    {
      id: 1,
      beforeUrl: `${baseUrl}cat-before.png`,
      afterUrl: `${baseUrl}cat-after.png`,
      aspectRatio: 'square'
    },
    // Placeholder images for demonstration
    { id: 2, beforeUrl: `${baseUrl}cave-before.png`, afterUrl: `${baseUrl}cave-after.JPG`, aspectRatio: 'portrait' },
    { id: 3, beforeUrl: `${baseUrl}beach.png`, afterUrl: `${baseUrl}beach_photo_in_cancun.webp`, aspectRatio: 'square' },
    { id: 4, beforeUrl: `${baseUrl}restaurant_in_cancun.png`, afterUrl: `${baseUrl}restaurant_in_cancun.webp`, aspectRatio: 'landscape' },
    { id: 5, beforeUrl: `${baseUrl}hat_icon.png`, afterUrl: `${baseUrl}beach_pic.webp`, aspectRatio: 'landscape' },
    { id: 6, beforeUrl: 'https://picsum.photos/380/300?9', afterUrl: 'https://picsum.photos/380/300?10', aspectRatio: 'landscape' },
    { id: 7, beforeUrl: 'https://picsum.photos/300/420?11', afterUrl: 'https://picsum.photos/300/420?12', aspectRatio: 'portrait' },
    { id: 8, beforeUrl: 'https://picsum.photos/360/360?13', afterUrl: 'https://picsum.photos/360/360?14', aspectRatio: 'square' },
    { id: 9, beforeUrl: 'https://picsum.photos/420/320?15', afterUrl: 'https://picsum.photos/420/320?16', aspectRatio: 'landscape' },
  ];

  const getAspectRatioClass = (aspectRatio: string) => {
    switch (aspectRatio) {
      case 'landscape':
        return 'aspect-[4/3]';
      case 'portrait':
        return 'aspect-[3/4]';
      case 'square':
        return 'aspect-square';
      default:
        return 'aspect-[4/3]';
    }
  };

  return (
    <div className="w-full px-4 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-16">
      <div
        className="grid gap-6 sm:gap-10 md:gap-12 lg:gap-16"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))',
        }}
      >
        {photos.map((photo) => {
          const isActive = activePhoto === photo.id;

          return (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(isActive ? null : photo.id)}
              onMouseEnter={() => setActivePhoto(photo.id)}
              onMouseLeave={() => setActivePhoto(null)}
              className={`
                relative overflow-hidden
                ${getAspectRatioClass(photo.aspectRatio)}
                rounded-sm
                transition-all duration-300 ease-out
                ${isActive ? '-translate-y-2' : ''}
                cursor-pointer
                touch-manipulation
              `}
            >
              {/* Before image (grayscale) */}
              <img
                src={photo.beforeUrl}
                alt={`Photo ${photo.id} - before`}
                className={`
                  absolute inset-0 w-full h-full object-cover
                  transition-opacity duration-500 ease-out
                  ${isActive ? 'opacity-0' : 'opacity-100'}
                `}
              />
              {/* After image (color) */}
              <img
                src={photo.afterUrl}
                alt={`Photo ${photo.id} - after`}
                className={`
                  absolute inset-0 w-full h-full object-cover
                  transition-opacity duration-500 ease-out
                  ${isActive ? 'opacity-100' : 'opacity-0'}
                `}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoGallery;
