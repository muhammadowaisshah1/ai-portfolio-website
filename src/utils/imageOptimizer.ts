/**
 * Utility functions for image optimization
 */

/**
 * Get optimized image URL with WebP format if supported
 * Falls back to original format if WebP is not supported
 */
export const getOptimizedImageUrl = (
  originalUrl: string,
  options?: {
    width?: number;
    quality?: number;
  }
): string => {
  // For now, return original URL
  // In production, you would integrate with an image optimization service
  // like Cloudinary, imgix, or use Next.js Image Optimization
  return originalUrl;
};

/**
 * Preload critical images for better performance
 */
export const preloadImage = (src: string): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

/**
 * Lazy load images with Intersection Observer
 */
export const lazyLoadImage = (img: HTMLImageElement): void => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target as HTMLImageElement;
        if (image.dataset.src) {
          image.src = image.dataset.src;
          image.removeAttribute('data-src');
          observer.unobserve(image);
        }
      }
    });
  });

  observer.observe(img);
};

/**
 * Check if browser supports WebP format
 */
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};
