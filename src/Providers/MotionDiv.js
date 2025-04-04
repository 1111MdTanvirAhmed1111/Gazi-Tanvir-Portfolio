'use client'
import {motion} from "framer-motion";

function MotionDiv({children,props}) {
  return (
    <motion.div {...props}>
      {children} 
    </motion.div>
  )
}

export default MotionDiv
 