import { Card } from "../card/Card"
import { Form } from "./Form"

export const ContactSection = () => {
    return (
        <Card
            element="section"
            id="contacto"
            className="flex flex-wrap gap-20 md:gap-52 justify-between"
        >
            <div className="max-w-[500px]" >
                <h2 className="font-medium text-4xl uppercase mb-5">solicita tu cita</h2>
                <p className="text-primary">
                    Llámanos o déjanos tu información de contacto y nosotros te contactaremos lo antes posible para agendarte una cita.
                </p>
            </div>
            <Form />
        </Card>
    )
}
