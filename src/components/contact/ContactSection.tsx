import { FC } from "react"
import { Card } from "../card/Card"
import { CallIcon, InstagramIcon, WaIcon } from "../icons"
import { Form } from "./Form"

const socialMedia = [
    {
        Icon: WaIcon,
        to: 'https://wa.me/+526181340926',
        text: '618 134 0926'
    },
    {
        Icon: InstagramIcon,
        to: '#insta',
        text: '@dr.nicolasrgz'
    },
    {
        Icon: CallIcon,
        to: '#facebook',
        text: '618 134 0926'
    },
]

export const ContactSection = () => {
    return (
        <section
            id="contacto"
            className="bg-gradient-to-t from-primary to-secondary relative -top-48 pb-10"
        >

            <Card
                className="flex flex-wrap gap-20 xl:gap-52 justify-between max-w-[95%] mb-20 mx-auto"
            >
                <div className="max-w-[500px]" >
                    <h2 className="font-medium text-4xl uppercase mb-5 text-black">solicita tu cita</h2>
                    <p className="text-primary">
                        ¡Llámanos o solicita una cita con nuestro equipo de expertos en ginecología! Completa el siguiente <a href="#formulario"><u><strong>formulario</strong></u> </a>y nos pondremos en contacto contigo para revisar nuestra disponibilidad de horarios y agendar tu cita.
                    </p>
                    <ul className="mt-12 flex flex-col gap-4">
                        {
                            socialMedia.map((link, i) => (
                                <li key={i} className="">
                                    <SocialLink {...link} />
                                </li>
                            ))
                        }
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
            className="flex items-center transition-all fill-primary text-primary bg-white rounded-xl py-2 px-3 pr-5 gap-2 w-80 max-w-[95%] shadow-sm-light border-2 hover:bg-secondary hover:text-white hover:fill-white hover:border-white"
        >
            <div className="h-8 w-8">
                <Icon />
            </div>
            <p>{text}</p>
        </a>
    )
}