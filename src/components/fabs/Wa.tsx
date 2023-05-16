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
            className={`w-12 rounded-full bg-white shadow-dark p-2 fill-[#2AC660]`}
        >
            <a
                href="https://wa.me/+526182590909"
                target="_blank"
                rel="noreferrer"
            >
                <WaIcon />
            </a>
        </motion.div>
    )
}
