import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface YouTubeLazyProps {
    videoId: string;
    title?: string;
    className?: string;
    thumbnailQuality?: 'default' | 'hqdefault' | 'mqdefault' | 'sddefault' | 'maxresdefault';
}

export function YouTubeLazy({
    videoId,
    title = 'YouTube video',
    className = 'w-full h-full',
    thumbnailQuality = 'maxresdefault'
}: YouTubeLazyProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isLoaded) {
                    // Load when near viewport
                    // But don't auto-play; wait for click
                }
            },
            { rootMargin: '200px' } // Start loading when within 200px of viewport
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [isLoaded]);

    const handleThumbnailClick = () => {
        setIsLoaded(true);
    };

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;

    return (
        <div ref={containerRef} className={`relative aspect-video ${className}`}>
            {!isLoaded ? (
                <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black"
                    onClick={handleThumbnailClick}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={thumbnailUrl}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full transition-opacity hover:opacity-90"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 text-white fill-current"
                                >
                                    <path d="M8 5.14v14l11-7-11-7z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="absolute bottom-2 left-2 right-2 text-white bg-black bg-opacity-60 px-2 py-1 text-sm rounded">
                            {title}
                            <div className="text-xs opacity-80">Click to play - Load YouTube</div>
                        </div>
                    </div>
                </div>
            ) : (
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute w-full h-full"
                ></iframe>
            )}
        </div>
    );
}