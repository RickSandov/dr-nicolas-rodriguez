import { motion } from 'framer-motion';
import { fabsVariants } from '@/utils/motion';
import { WaIcon } from '../icons';

export const WaFab = () => {
    return (
        <motion.div
            variants={fabsVariants(1.5)}
            initial='hidden'
            whileInView='show'
            viewport={{
                once: true
            }}
            className={`w-14 rounded-full bg-white shadow-dark p-2`}
        >
            <a
                href="https://wa.me/+526181340926"
                target="_blank"
                rel="noreferrer"
                className='fill-[#2AC660]'
            >
                <WaIcon />
            </a>
        </motion.div>
    )
}
