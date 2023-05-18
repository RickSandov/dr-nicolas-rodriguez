import { CallIcon } from '../icons'
import { motion } from 'framer-motion';
import { fabsVariants } from '@/utils/motion';

export const CallFab = () => {
    return (
        <motion.div
            variants={fabsVariants(1.6)}
            initial='hidden'
            whileInView='show'
            viewport={{
                once: true
            }}
            className={`w-14 rounded-full bg-primary shadow-dark p-3`}
        >
            <a
                href="tel:6181340926"
                target="_blank"
                rel="noopener noreferrer"
            >
                <CallIcon />
            </a>
        </motion.div>
    )
}
