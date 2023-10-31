import { ISimpleContactForm } from "@/interfaces";
import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';
import * as React from 'react';

export function ContactInfoEmail({ name, message, phoneNumber }: ISimpleContactForm) {
    const previewText = `Solicitud de consulta ${name}, ${phoneNumber}.`

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="mx-auto my-auto font-sans bg-white">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                        <Section className="mt-[32px]">
                            <Img
                                src="https://www.drnicolasrodriguez.com/icons/icon-256x256.png"
                                width="100"
                                height="100"
                                alt="Dr Nicolás Rodriguez"
                                className="mx-auto my-0"
                            />
                        </Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            Solicitud de consulta <Text className="text-[#BA5B80]" >{name}</Text>
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong className="text-[#BA5B80]" >Número de contacto: </strong> {phoneNumber}
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong className="text-[#BA5B80]" >Mensaje: </strong>
                            {message}
                        </Text>
                        <Section className="w-full" >
                            <Link
                                href="https://www.drnicolasrodriguez.com/admin"
                                className="text-center no-underline text-[14px] py-3 px-5 mt-[30px] bg-[#BA5B80] text-white rounded block"
                            >
                                Ir al sistema
                            </Link>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
