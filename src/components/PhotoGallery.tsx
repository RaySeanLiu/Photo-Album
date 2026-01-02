interface Photo {
  id: number;
  beforeUrl: string;
  afterUrl: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
}

const PhotoGallery = () => {
  // Photos with before and after images
  const photos: Photo[] = [
    {
      id: 1,
      beforeUrl: '/cat-before.png',
      afterUrl: '/cat-after.png',
      aspectRatio: 'square'
    },
    // Placeholder images for demonstration
    { id: 2, beforeUrl: '/cave-before.png', afterUrl: '/cave-after.JPG', aspectRatio: 'portrait' },
    { id: 3, beforeUrl: 'https://picsum.photos/350/350?3', afterUrl: 'https://picsum.photos/350/350?4', aspectRatio: 'square' },
    { id: 4, beforeUrl: 'https://picsum.photos/400/280?5', afterUrl: 'https://picsum.photos/400/280?6', aspectRatio: 'landscape' },
    { id: 5, beforeUrl: 'https://picsum.photos/320/450?7', afterUrl: 'https://picsum.photos/320/450?8', aspectRatio: 'portrait' },
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
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={`
              relative overflow-hidden
              ${getAspectRatioClass(photo.aspectRatio)}
              rounded-sm
              transition-all duration-300 ease-out
              hover:-translate-y-2
              active:-translate-y-2
              group
              cursor-pointer
              touch-manipulation
            `}
          >
            {/* Before image (grayscale) */}
            <img
              src={photo.beforeUrl}
              alt={`Photo ${photo.id} - before`}
              className="
                absolute inset-0 w-full h-full object-cover
                transition-opacity duration-500 ease-out
                group-hover:opacity-0
                group-active:opacity-0
              "
            />
            {/* After image (color) */}
            <img
              src={photo.afterUrl}
              alt={`Photo ${photo.id} - after`}
              className="
                absolute inset-0 w-full h-full object-cover
                opacity-0
                transition-opacity duration-500 ease-out
                group-hover:opacity-100
                group-active:opacity-100
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
