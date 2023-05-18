
import { createContext } from 'react';
import { IGalleryS } from '.';

export interface GalleryContextProps {
    isFullScreen: boolean;
    activeGallery: string[] | null;
    currentImage: string;

    // Methods
    setActiveGallery: (gallery: string[], image?: string) => void;
    toggleIsFullScreen: () => void;
    nextImage: (prev?: boolean) => void;
}

export const GalleryContext = createContext({} as GalleryContextProps);