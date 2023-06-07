'use client'

import { itemVariants, parentVariants } from "@/utils/motion";
import { IService } from "./data";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Button from "../button/Button";

export function FullService({ service }: { service: IService }) {
    const { title, Icon, description, items } = service;
    const [isListOpen, setIsListOpen] = useState(false);
    const [listContainerRef] = useAutoAnimate()
    const toggleIsListOpen = () => setIsListOpen(ps => !ps);

    useEffect(() => {
        setIsListOpen(false);
    }, [service.title])


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
            className="rounded-3xl bg-white px-6 py-8 md:px-14 md:py-12 lg:px-16 shadow-dark md:mr-6"
        >
            <header className="mb-8">
                <div className="fill-primary w-20" >
                    <Icon />
                </div>
                <h2 className="text-2xl mt-4 md:mt-6 font-bold text-black" >{`${title}`}</h2>
            </header>
            <div ref={listContainerRef}>
                <Button
                    onClick={() => toggleIsListOpen()}
                    className={`animate-pulse block w-full border-2 border-secondary text-secondary hover:translate-y-0 hover:bg-white hover:text-secondary ${isListOpen ? 'border-secondary-light bg-secondary-light text-primary hover:bg-secondary-light hover:text-primary animate-none' : ''} `}
                >
                    {isListOpen ? 'Ocultar servicios' : 'Mostrar servicios'}
                </Button>
                {
                    isListOpen && (
                        <motion.ul
                            variants={parentVariants}
                            whileInView='open'
                            viewport={{
                                once: true
                            }}
                            initial='closed'
                            className="mt-12 flex flex-col gap-8" >
                            {
                                items.map(({ text, title }, i) => (
                                    <motion.li
                                        variants={itemVariants}
                                        key={i}
                                        className="shadow-light py-4 px-4 rounded-xl w-[100%]"
                                    >
                                        <h3 className="uppercase font-bold mb-4 text-primary" >{title}</h3>
                                        <p className="text-black leading-relaxed ">{text}</p>
                                    </motion.li>
                                ))
                            }
                        </motion.ul>
                    )
                }
            </div>
            <h4
                className="font-bold text-primary mt-6 mb-2"
            >Te ofrecemos</h4>
            {
                description.map((text, index) => (
                    <p
                        key={index}
                        className="text-black text-justify leading-relaxed mb-6"
                    >{text}</p>
                ))
            }
        </motion.article>
    )
}
