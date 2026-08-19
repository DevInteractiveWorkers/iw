import { motion } from 'framer-motion'
import React from 'react'

const SomeComponent = ({isVisible}:{isVisible:boolean}) => {
  return (
    <motion.div animate={{ opacity: isVisible ? 1 : 0 }}>
        <h1>Hello world</h1>
    </motion.div>
  )
}

export default SomeComponent