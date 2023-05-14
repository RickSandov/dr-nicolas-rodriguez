import { FC } from "react";
import { DeteccionVPH, Gine, Obstetricia, TratamientoVPH } from "../icons/";

export interface IServiceItem {
  title: string;
  text: string;
}

export interface IService {
  title: string;
  description: string[];
  Icon: FC;
  items: IServiceItem[];
}

export const services: IService[] = [
  {
    title: "Ginecología",
    Icon: Gine,
    description: [
      // "Ofrecemos una amplia gama de servicios, desde exámenes de rutina y asesoramiento sobre planificación familiar hasta diagnóstico y tratamiento de enfermedades ginecológicas.",
      // "Nuestro equipo de profesionales altamente capacitados se dedica a brindarle el mejor cuidado posible para ayudarla a mantenerse saludable y prevenir enfermedades.",
      "Nuestro departamento de ginecología está dedicado a proporcionar la mejor atención médica para la salud femenina. Desde exámenes de rutina hasta tratamientos especializados, nuestro equipo de expertos está altamente capacitado para manejar cualquier problema de salud ginecológica que pueda enfrentar.",
      "Nos esforzamos por brindar a cada paciente una experiencia personalizada y acogedora, enfocándonos en la prevención y el tratamiento de enfermedades ginecológicas, así como en la educación y el asesoramiento en materia de salud sexual y reproductiva.",
      "En nuestro centro, creemos que una buena salud ginecológica es fundamental para el bienestar general de nuestras pacientes, y estamos comprometidos en brindar la mejor atención posible en un ambiente seguro y confidencial.",
    ],
    items: [
      {
        title: "climaterior y menopausia",
        text: "Manejo integral de los síntomas, prevención de osteoporosis, trastornos circulatorios, cardiovasculares y emocionales.",
      },
      {
        title: "infertilidad",
        text: "Valoración integral de la pareja con dificultad para lograr un embarazo posterior a un año de relaciones sexuales sin protección anticonceptiva.",
      },
      {
        title: "incontinencia urinaria",
        text: "Manejo en la mujer de la perdida de orina con el esfuerzo o de urgencia con medicamento o cirugía.",
      },
      {
        title: "orientación en planificación familiar",
        text: "Asesoramiento del mejor método anticonceptivo a utilizar de acuerdo a la edad de la paciente, desde hormonales combinados, así como DIU de Cobre, de palta y Mirena, o definitivo como Oclusión Tubaria Bilateral (cirugía para cerrar las trompas de Falopio) o Vasectomías",
      },
    ],
  },
  {
    title: "Obstetricia",
    Icon: Obstetricia,
    description: [
      // "Estamos comprometidos en brindarle a usted y su familia la mejor atención prenatal, durante el parto y postparto.",
      // "En nuestro centro, creemos en el parto seguro y respetuoso con la madre y el bebé, y nos esforzamos por proporcionar un ambiente cómodo y acogedor durante todo el proceso. Estamos comprometidos en ayudar a que su experiencia de embarazo y parto sea lo más positiva y satisfactoria posible.",
      "En nuestro departamento de obstetricia, nos enfocamos en brindar a las futuras madres la mejor atención prenatal, durante el parto y postparto. Nuestro equipo de expertos en obstetricia está altamente capacitado en el manejo de cualquier situación durante el embarazo y parto, desde exámenes de rutina hasta partos de alto riesgo. ",
      "Nos esforzamos por proporcionar un ambiente seguro y respetuoso con la madre y el bebé, enfocándonos en el parto seguro y cómodo para ambas partes. Además, nuestro equipo está altamente comprometido en brindar asesoramiento y orientación a las madres y sus familias durante todo el proceso.",
      "En nuestro centro, creemos en la importancia de una experiencia positiva de embarazo y parto, y estamos comprometidos en brindar la mejor atención obstétrica posible en un ambiente acogedor y familiar.",
    ],
    items: [],
  },
  {
    title: "Detección VPH",
    Icon: DeteccionVPH,
    description: [
      "En nuestro departamento de detección de VPH, nos enfocamos en ofrecer a nuestras pacientes una detección temprana y precisa del virus del papiloma humano (VPH), un virus comúnmente relacionado con el cáncer cervicouterino.",
      "Nos esforzamos por proporcionar un ambiente seguro y confidencial para todas nuestras pacientes, y utilizamos tecnologías avanzadas y métodos de detección altamente efectivos para asegurar la exactitud de nuestros resultados.",
      "Además, nuestro equipo de expertos en salud femenina está altamente capacitado para brindar asesoramiento y orientación a nuestras pacientes en cada paso del proceso, desde la detección hasta el tratamiento, si es necesario.",
      "En nuestro centro, creemos que la detección temprana del VPH es fundamental para mantener una buena salud reproductiva, y estamos comprometidos en ayudar a nuestras pacientes a mantenerse informadas y cuidadas en todo momento.",
    ],
    items: [],
  },
  {
    title: "Tratamiento VPH",
    Icon: TratamientoVPH,
    description: [
      "En nuestro departamento de tratamiento de VPH, nos enfocamos en proporcionar a nuestras pacientes un tratamiento efectivo y personalizado para el virus del papiloma humano (VPH), un virus comúnmente relacionado con el cáncer cervicouterino.",
      "Nuestro equipo de expertos en salud femenina está altamente capacitado en el manejo de todas las etapas del tratamiento del VPH, desde la eliminación de las lesiones cervicales hasta la prevención de la recurrencia del virus.",
      "Utilizamos tecnologías avanzadas y técnicas de tratamiento de última generación para asegurar la mejor atención posible a nuestras pacientes, y nos aseguramos de que cada paciente reciba un tratamiento personalizado y adecuado a sus necesidades.",
      "Además, nuestro equipo está altamente comprometido en ayudar a nuestras pacientes a mantener una buena salud reproductiva, brindando asesoramiento y orientación en todo momento.",
      "En nuestro centro, creemos que el tratamiento efectivo del VPH es fundamental para mantener una buena salud reproductiva, y estamos comprometidos en ayudar a nuestras pacientes a lograr este objetivo en un ambiente seguro y acogedor.",
    ],
    items: [],
  },
];
