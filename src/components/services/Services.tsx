'use client'
import { FC, useEffect, useCallback, useRef, useState } from "react";
import { IService, services } from "./data";
import { AnimatePresence, motion } from "framer-motion";

export function Services() {
    const [activeService, setActiveService] = useState(services[0]);

    // const ServiceToShow = useCallback(
    //     () => {
    //         return <FullService service={activeService} />
    //     },
    //     [activeService],
    // )


    return (
        <main id='servicios' className='relative -top-24 rounded-2xl bg-primary w-[1600px] max-w-[100%] mx-auto md:flex' >
            <aside className={`py-14 px-4 md:px-16 min-h-[300px]`} >
                <div>
                    <h3 className='uppercase text-4xl text-secondary-light text-bold' >
                        Servicios
                    </h3>
                    <span className='block w-24 h-1 bg-white' ></span>
                </div>
                <ul id='lista-servicios' className="departments-list mt-12 flex gap-12 overflow-x-scroll pb-6 md:flex-col md:gap-10 md:mt-24" >
                    {
                        services.map((service) => (
                            <ServicesNavItem title={service.title} Icon={service.Icon} key={service.title} isActive={activeService.title === service.title} setIsActive={() => setActiveService(service)} />
                        ))
                    }
                </ul>
            </aside>
            <div className="w-[95%] mx-auto relative -translate-y-16 md:-translate-y-12" >
                <AnimatePresence>
                    <FullService service={activeService} />
                </AnimatePresence>
            </div>
        </main>
    )
}

function FullService({ service }: { service: IService }) {
    const { title, Icon, description, items } = service;

    return (
        <motion.article
            key={service.title}
            initial={{ y: '20%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '20%', opacity: 0 }}
            transition={{
                delay: 0,
                duration: .4
            }}
            className="rounded-xl bg-white px-6 py-8 md:px-14 md:py-12 lg:px-16 shadow-dark relative"
        >
            <header className="mb-8">
                <div className="fill-primary w-20" >
                    <Icon />
                </div>
                <h2 className="text-2xl mt-4 md:mt-6 font-medium" >{`Departamento de ${title}`}</h2>
            </header>
            {
                description.map((text, index) => (
                    <p
                        key={index}
                        className="text-primary text-justify leading-relaxed mb-6"
                    >{text}</p>
                ))
            }
            <ul className="mt-12 flex flex-col gap-8" >
                {
                    items.map(({ text, title }) => (
                        <li
                            key={text}
                            className="shadow-light py-4 px-4 rounded-xl w-[100%]"
                        >
                            <h3 className="uppercase font-bold mb-4" >{title}</h3>
                            <p className="text-primary leading-relaxed ">{text}</p>
                        </li>
                    ))
                }
            </ul>
        </motion.article>
    )
}


function ServicesNavItem({ title, Icon, isActive, setIsActive }: { title: string, Icon: FC, isActive: boolean, setIsActive: () => void }) {

    // console.log({ title, isActive })

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
        <li ref={ref} onClick={setIsActive} className={`fill-white text-white transition-all flex items-center justify-left gap-2 cursor-default opacity-60 ${isActive ? 'opacity-100' : ''}`} >
            <div className="w-10 flex justify-center" >
                <Icon />
            </div>
            <h3 className="leading-tight" >{title}</h3>
        </li>
    )
}