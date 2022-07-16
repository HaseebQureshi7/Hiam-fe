import { motion } from 'framer-motion'


const animations = {
    initial: {
        // scaleX:'50%',
        // scaleY:'50%',
        opacity: 0,
        y: "10vh"
    },

    animate: {
        // scaleX:'100%',
        // scaleY:'100%',
        opacity: 1,
        y: 0
    },

    exit: {
        // scaleX:'50%',
        // scaleY:'50%',
        opacity: 0,
        y: "-10vh"
    }
}

const AnimatedPage = ({ children }) => {
    return (
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit" transition={{duration:0.5}}>
            {children}
        </motion.div>
    )
}

export default AnimatedPage