import { MagnifyIcon } from '@/components/icons'
import { IPatient } from '@/interfaces'
import Link from 'next/link';
import React, { useState } from 'react'

export const PatientsList = ({ patients: propsPatients }: { patients: IPatient[] }) => {

    const [allPatients, setAllPatients] = useState(propsPatients);
    const [patients, setPatients] = useState(propsPatients);
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            return setPatients(allPatients);
        }
        setPatients(allPatients.filter(patient => patient.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }

    return (
        <>
            <div className='w-full flex justify-end items-center px-2 relative' >
                <input
                    className='rounded-full border-2 border-primary text-black py-1 px-3 dark:bg-white'
                    placeholder='Buscar'
                    onChange={handleSearch} />
                <div className='w-8 p-1 absolute right-3' >
                    <MagnifyIcon />
                </div>
            </div>
            <h1 className='text-3xl font-bold my-5' >Pacientes</h1>
            <ul className='grid grid-cols-auto-fill grid-rows-22 gap-4 ' >
                {patients.map(({ _id, name, phoneNumber }) => (
                    <Link href={`/admin/pacientes/${_id}`} className='dark:bg-secondary px-5 shadow-light rounded-lg h-24 flex flex-col  justify-center transition-all hover:shadow-dark hover:scale-[1.01] ' key={_id}>
                        <h2 className='text-black dark:text-white font-bold text-md' >{name}</h2>
                        <p className='text-xl'>{
                            phoneNumber.slice(0, 3)
                            + ' '
                            + phoneNumber.slice(3, 6)
                            + ' '
                            + phoneNumber.slice(6)
                        }</p>
                    </Link>
                ))}
            </ul>
        </>
    )
}
