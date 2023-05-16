import { FacebookIcon } from '../icons'
import { motion } from 'framer-motion';
import { fabsVariants } from '@/utils/motion';

export const FbFab = () => {
    return (
        <motion.div
            variants={fabsVariants(1.7)}
            initial='hidden'
            whileInView='show'
            viewport={{
                once: true
            }}
            className={`w-12`}
        >
            <a
                href="https://www.facebook.com/RealCampestreResidencial"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FacebookIcon />
            </a>
        </motion.div>
    )
}
