'use client'
import { FC, useEffect, useCallback, useRef, useState } from "react";
import { IService, services } from "./data";
import { AnimatePresence, motion } from "framer-motion";
import { Mom } from "../icons";
import { itemVariants, parentVariants } from "@/utils/motion";
import { FullService } from "./FullService";

export function Services() {
    const [activeService, setActiveService] = useState(services[0]);

    return (
        <main id='servicios' className='relative -top-24 rounded-2xl bg-primary max-w-[100%] mx-auto md:flex transition-all shadow-dark' >
            <aside className={`py-14 px-4 md:px-16 min-h-[300px] md:min-h-[400px] relative`} >
                <div className="md:sticky md:top-[180px]">
                    <div>
                        <h3 className='uppercase text-4xl text-secondary-light text-bold' >
                            Servicios
                        </h3>
                        <span className='block w-24 h-1 bg-white' ></span>
                    </div>
                    <ul
                        id='lista-servicios'
                        className="departments-list mt-12 flex gap-12 overflow-x-scroll md:overflow-visible pb-6 md:flex-col md:gap-10 md:mt-24" >
                        {
                            services.map((service) => (
                                <ServicesNavItem title={service.title} Icon={service.Icon} key={service.title} isActive={activeService.title === service.title} setIsActive={() => setActiveService(service)} />
                            ))
                        }
                    </ul>
                </div>
                <div className="absolute hidden md:block bottom-0 left-0 pointer-events-none transition-all opacity-60 z-10" >
                    <Mom />
                </div>
            </aside>
            <div className="w-[95%] mx-auto md:max-w-[75%] relative -translate-y-16 md:-translate-y-12" >
                <AnimatePresence>
                    <FullService service={activeService} />
                </AnimatePresence>
            </div>
        </main>
    )
}

function ServicesNavItem({ title, Icon, isActive, setIsActive }: { title: string, Icon: FC, isActive: boolean, setIsActive: () => void }) {

    const ref = useRef<HTMLLIElement>(null)
    useEffect(() => {
        if (isActive) {
            const listElement = document.getElementById('lista-servicios');
            const position = ref.current?.getBoundingClientRect().left || 0;
            const containerScrollLeft = listElement?.scrollLeft || 0;
            const adjustedPosition = containerScrollLeft + position;
            listElement?.scrollTo({
                left: adjustedPosition - 16,
                behavior: 'smooth'
            });
        }
    }, [isActive])

    return (
        <li
            ref={ref}
            onClick={setIsActive}
            className={`fill-white text-white transition-all flex items-center justify-left gap-2 cursor-default relative md:hover:-translate-x-2 ${isActive ? 'opacity-100 md:-translate-x-5 md:hover:-translate-x-5' : 'opacity-40'} `} >
            <div className="w-10 flex max-h-10 h-10 justify-center" >
                <Icon />
            </div>
            <h3 className="leading-tight" >{title}</h3>
        </li>
    )
}