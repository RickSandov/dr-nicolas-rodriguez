'use client'

import { IParsedContactForm, contactFormStatusType } from "@/interfaces"
import { PlusIcon } from "../icons"
import { useMemo } from "react"
import { cn } from "@/lib/utils"
import { CallPopOver } from "./CallPopOver"
import { format, parseISO } from "date-fns"
import { useTheme } from "next-themes"
import { StatusPopOver } from "./StatusPopOver"

interface Props extends IParsedContactForm {
    onClick: () => void
}

export const ContactFormCard = ({ name, phoneNumber, message, receivedAt, status, onClick }: Props) => {

    const statusClassName = useMemo(() => {
        const styles = {
            status: 'border-yellow-400 bg-yellow-100 text-yellow-800',
            icon: 'bg-slate-400 hover:bg-slate-600 hover:cursor-pointer',
            accent: 'text-slate-500 dark:text-white',
            text: 'text-slate-400 dark:text-slate-300',
            item: 'opacity-80'
        }

        if (status === contactFormStatusType.pending) {
            styles.status = 'border-primary bg-secondary-light text-primary';
            styles.accent = "text-secondary dark:text-secondary-light";
            styles.icon = "bg-secondary hover:cursor-pointer hover:bg-primary";
            styles.text = 'text-black dark:text-white';
            styles.item = 'opacity-100'
        }

        if (status === contactFormStatusType.success) {
            styles.status = 'border-green-400 bg-green-100 text-green-700'
        }

        if (status === contactFormStatusType.fail) {
            styles.status = 'border-slate-400 bg-slate-100 text-slate-700'
        }

        return styles;
    }, [status]);

    return (
        <li
            key={phoneNumber}
            className={`rounded-lg p-3 pt-4 shadow-light cursor-default relative transition-all hover:opacity-100 hover:shadow-dark dark:bg-primary  ${statusClassName.item}`}
        >

            <StatusPopOver currentStatus={status} statusClassName={statusClassName.status} />
            <h2 className={`mt-7 font-bold ${statusClassName.accent}`} >{name}</h2>
            <p className={statusClassName.text}>{message}</p>
            <div className="flex items-center justify-between mt-5">
                <div className="flex gap-1">
                    <CallPopOver className={statusClassName.icon} phoneNumber={phoneNumber} />
                    <button onClick={onClick} >
                        <PlusIcon className={`w-9 h-9 p-2 rounded-full fill-white stroke-white transition-all ${statusClassName.icon}`} />
                    </button>
                </div>
                <p className={`text-right font-bold ${statusClassName.accent}`} >{receivedAt}</p>
            </div>
        </li>
    )
}