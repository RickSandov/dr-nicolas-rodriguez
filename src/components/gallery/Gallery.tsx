'use client'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import { useContext } from "react";
import { GalleryContext } from "@/contexts/gallery";
import { GalleryFullScreen } from "../galleryFullScreen/GalleryFullScreen";


const galleryItem = [
    'fachada-dr.jpg',
    'dr-nicolas.jpg',
]

export const Gallery = () => {
    const { setActiveGallery, isFullScreen } = useContext(GalleryContext);
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="flex-1 w-[500px] h-[500px] md:h-[400px] md:min-w-[500px] min-w-[200px] max-w-full"
            >
                {
                    galleryItem.map((url, i) => (
                        <SwiperSlide
                            className="flex justify-center items-center"
                            key={i}
                            onClick={() => setActiveGallery(galleryItem, url)}
                        >
                            <Image
                                src={`/${url}`}
                                alt={url}
                                fill
                                className="object-cover" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {
                isFullScreen && <GalleryFullScreen />
            }
        </>
    )
}