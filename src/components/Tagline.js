import React from 'react';
import {motion} from "framer-motion"
import { taglineVariants } from '../Motion';

const Tagline = (props) => {
    const text= props.text
  return (
    <div>
      <motion.span
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        style={{ whiteSpace: 'pre' }}
        aria-hidden
      >
        {text.split("").map((char) => (
          <motion.p
            className="taglineText inline-block"
            variants={taglineVariants}
          >
            {char}
          </motion.p>
        ))}
      </motion.span>
    </div>
  )
}

export default Tagline
