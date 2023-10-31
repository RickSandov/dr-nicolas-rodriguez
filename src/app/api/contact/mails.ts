import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { ISimpleContactForm } from "@/interfaces";
import { ContactInfoEmail } from "./contact-email";

export async function sendShippingInfoEmail(contactInfo: ISimpleContactForm) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "i.s.ricardo.sandoval@gmail.com", // development
      pass: "qdfoxvhgjvrkvfch", // development
    },
  });

  const emailHtml = render(ContactInfoEmail(contactInfo));

  const options = {
    from: "i.s.ricardo.sandoval@gmail.com",
    to: "rldrnicolas@gmail.com",
    subject: `Solicitud de consulta ${contactInfo.name}`,
    html: emailHtml,
  };

  try {
    const send = await transporter.sendMail(options);
    return "ok";
  } catch (error) {
    console.log("this is the error: ", { error });
  }
}
