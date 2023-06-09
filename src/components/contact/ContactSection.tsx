'use client'

import { FC } from "react"
import { Card } from "../card/Card"
import { CallIcon, FacebookIcon, InstagramIcon, Navigate, WaIcon } from "../icons"
import { Form } from "./Form"
import { motion } from 'framer-motion';
import { fadeIn } from "@/utils/motion";

const socialMedia = [
    {
        Icon: CallIcon,
        to: 'tel:6188177741',
        text: '618 817 7741'
    },
    {
        Icon: WaIcon,
        to: 'https://wa.me/+526181340926',
        text: '618 134 0926'
    },
    {
        Icon: FacebookIcon,
        to: '#facebook',
        text: 'Dr. Nicolás Rodriguez'
    },
    {
        Icon: InstagramIcon,
        to: '#insta',
        text: '@dr.nicolasrgz'
    },
]

export const ContactSection = () => {
    return (
        // <section
        //     id="contacto"
        //     className="bg-gradient-to-t from-primary to-secondary relative -top-48 pb-10"
        // >
        <section
            id="contacto"
            className="bg-gradient-to-t from-primary to-secondary relative"
        >

            <Card
                className="relative -top-14 flex flex-wrap gap-10 sm:gap-20 xl:gap-52 justify-between max-w-[95%] mx-auto"
            >
                <div className="max-w-[100%] flex xl:flex-col gap-4 flex-wrap" >
                    <div className="max-w-[500px] text-black">
                        <h2 className="font-medium text-4xl uppercase mb-6 text-secondary">solicita tu cita</h2>
                        <p>
                            ¡Llámanos o solicita una cita con nuestro equipo de expertos en ginecología!
                        </p>
                        <p className="mt-2">
                            Completa el siguiente <a href="#formulario"><u><strong>formulario</strong></u> </a>y nos pondremos en contacto contigo para revisar nuestra disponibilidad de horarios y agendar tu cita.
                        </p>
                    </div>
                    <ul
                        className="mt-6 flex flex-col gap-4 max-w-[500px]">
                        {
                            socialMedia.map((link, i) => (
                                <motion.li
                                    variants={fadeIn('up', 'spring', (.2 * i), 1)}
                                    initial='hidden'
                                    whileInView='show'
                                    viewport={{
                                        once: true,
                                        margin: '50px'
                                    }}
                                    key={i} className="">
                                    <SocialLink {...link} />
                                </motion.li>
                            ))
                        }
                        <motion.li
                            variants={fadeIn('up', 'spring', (.2 * 4), 1)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{
                                once: true,
                                margin: '50px'
                            }}
                        >
                            <a
                                href='https://www.google.com/maps/place/Dr.+Nicol%C3%A1s+Rodr%C3%ADguez+Luna/@24.003196,-104.660713,14z/data=!4m6!3m5!1s0x869bb7e755fe45dd:0xf0487e7b94a6e217!8m2!3d24.0031958!4d-104.6607134!16s%2Fg%2F11btlzdvjb?hl=es'
                                target="_blank"
                                className="flex items-center transition-all fill-primary text-black bg-white rounded-xl py-2 px-3 pr-5 gap-2 w-80 max-w-[95%] shadow-sm-light hover:bg-secondary hover:text-white hover:fill-white"
                            >
                                <div className="h-8 w-8">
                                    <Navigate />
                                </div>
                                <p>Punta Mita 213, Jalisco, 34170 Durango, Dgo.</p>
                            </a>
                        </motion.li>
                    </ul>
                </div>
                <Form />
            </Card>
        </section>
    )
}

function SocialLink({
    to, Icon, text
}: {
    Icon: FC,
    to: string,
    text: string
}) {
    return (
        <a
            href={to}
            target="_blank"
            className="flex items-center transition-all fill-primary text-black rounded-lg py-2 px-3 pr-5 gap-2 w-80 max-w-[95%] shadow-sm-light hover:bg-secondary hover:text-white hover:fill-white"
        >
            {/* <a
            href={to}
            target="_blank"
            className="flex items-center transition-all fill-primary text-primary bg-white rounded-xl py-2 px-3 pr-5 gap-2 w-80 max-w-[95%] shadow-sm-light border-2 hover:bg-secondary hover:text-white hover:fill-white hover:border-white"
        > */}
            <div className="h-8 w-8">
                <Icon />
            </div>
            <p>{text}</p>
        </a>
    )
}