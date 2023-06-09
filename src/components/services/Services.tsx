'use client'
import { FC, useEffect, useCallback, useRef, useState } from "react";
import { IService, services } from "./data";
import { AnimatePresence, motion } from "framer-motion";
import { Mom } from "../icons";
import { fadeIn, itemVariants, parentVariants } from "@/utils/motion";
import { FullService } from "./FullService";

export function Services() {
    const [activeService, setActiveService] = useState(services[0]);
    const [isNavVisible, setIsNavVisible] = useState(false);

    useEffect(() => {
        const nav = document.getElementById('nav');
        const checker = (e: Event) => {
            if (nav) {
                setIsNavVisible(nav.getBoundingClientRect().top > 0)
            }
        }
        document.addEventListener('scroll', checker);
        return () => {
            document.removeEventListener('scroll', checker);
        }
    }, [])

    return (
        <main id='servicios' className='relative bg-primary max-w-[100%] mx-auto md:flex transition-all' >
            {/* <main id='servicios' className='relative -top-24 rounded-2xl bg-primary max-w-[100%] mx-auto md:flex transition-all shadow-dark' > */}
            <aside className={`pt-14 md:py-14 md:px-16 md:min-h-[400px] relative`} >
                <motion.div
                    variants={fadeIn('up', 'spring', .2, 1)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{
                        once: true,
                        margin: '50px'
                    }}
                    className="hidden md:block md:sticky md:top-[180px]">
                    <div>
                        <motion.h3
                            variants={fadeIn('up', 'spring', .2, 1)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{
                                once: true,
                            }}
                            className='uppercase text-4xl text-secondary-light text-bold' >
                            {/* Servicios */}
                            Áreas de atención
                        </motion.h3>
                        <span className='block w-24 h-1 bg-white' ></span>
                    </div>
                    <ul
                        id='lista-servicios'
                        className="departments-list mt-12 flex gap-12 overflow-x-scroll md:overflow-visible pb-6 md:flex-col md:gap-10 md:mt-24" >
                        {
                            services.map((service) => (
                                <ServicesNavItem title={service.title} Icon={service.Icon} key={service.title} isActive={activeService.title === service.title} setIsActive={() => {
                                    setActiveService(service);
                                    const serviceContainer = document.getElementById('servicio');
                                    console.log({ serviceContainer })
                                    if (serviceContainer?.getBoundingClientRect()) {
                                        window.scroll({
                                            top: serviceContainer?.getBoundingClientRect().top + window.scrollY - 110
                                        })
                                    }
                                }

                                } />
                            ))
                        }
                    </ul>
                </motion.div>
                <div className="absolute hidden md:block bottom-0 left-0 pointer-events-none transition-all opacity-60" >
                    <Mom />
                </div>
            </aside>

            {/* Mobile */}
            <motion.div
                variants={fadeIn('up', 'spring', .2, 1)}
                initial='hidden'
                whileInView='show'
                viewport={{
                    once: true,
                    margin: '50px'
                }}
                className="px-4 block md:hidden" >
                <h3
                    className='uppercase text-4xl text-secondary-light text-bold' >
                    {/* Servicios */}
                    Áreas de atención
                </h3>
                <span className='block w-24 h-1 bg-white' ></span>
            </motion.div>
            <motion.ul
                variants={fadeIn('up', 'spring', .2, 1)}
                initial='hidden'
                whileInView='show'
                viewport={{
                    once: true,
                }}
                id='lista-servicios'
                className={`sticky transition-all duration-100 ${isNavVisible ? 'top-20' : 'top-0'} z-10 flex md:hidden px-4 mb-20 shadow-b-dark departments-list mt-8 gap-12 overflow-x-scroll md:overflow-visible py-6 bg-primary`} >
                {
                    services.map((service) => (
                        <ServicesNavItem title={service.title} Icon={service.Icon} key={service.title} isActive={activeService.title === service.title} setIsActive={() => {
                            setActiveService(service);
                            const serviceContainer = document.getElementById('servicio');
                            console.log({ serviceContainer })
                            if (serviceContainer?.getBoundingClientRect()) {
                                window.scroll({
                                    top: serviceContainer?.getBoundingClientRect().top + window.scrollY - (window.innerHeight >= 769 ? 110 : 170)
                                })
                            }
                        }

                        } />
                    ))
                }
            </motion.ul>
            {/* Mobile */}

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