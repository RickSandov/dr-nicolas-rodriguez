import { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import { GalleryContext } from '@/contexts/gallery';
import Image from 'next/image';

export const GalleryFullScreen = () => {

    const { toggleIsFullScreen, activeGallery, currentImage } = useContext(GalleryContext);

    return (
        <div className={'fixed inset-0 z-40 bg-[#00000037]'}>
            <button className={'fixed right-3 top-2 z-40 text-4xl'} onClick={toggleIsFullScreen} type='button'>&times;</button>
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    768: {
                        // navigation: false
                    }
                }}
                navigation={true}
                modules={[Navigation,]}
                className={'w-full h-full max-w-full'}
                spaceBetween={30}
                centeredSlides={true}
                initialSlide={activeGallery?.indexOf(currentImage) || 0}
            >
                {
                    activeGallery?.map((image) => {
                        return (
                            <SwiperSlide key={image} className={'bg-black h-full'} >
                                <Image src={`/${image}`} alt={image} fill className='object-contain' />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div >
    )
}
