
'use client'

import { WaFab } from './Wa'
import { CallFab } from './CallUs'
import { FbFab } from './Fb'
import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/motion';

export const FabIcons = () => {
    return (
        <motion.div
            variants={staggerContainer(.5, .2)}
            initial='hidden'
            whileInView='show'
            className={`fixed right-2 bottom-2 flex flex-col fill-white gap-2`}>
            {/* <FbFab /> */}
            <WaFab />
            <CallFab />
        </motion.div>
    )
}

