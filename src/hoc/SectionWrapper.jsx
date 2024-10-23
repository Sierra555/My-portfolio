import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';
import { textVariant, fadeIn } from "../utils/motion";

const SectionWrapper = (Component, idName, {title, subTitle, text}, customStyles) => 
    function HOC() {
        return (
            <motion.section
                className={`relative z-0 ${styles.section} ${styles.row} ${customStyles ? customStyles : ''}`}
                id={idName}
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{once: true, amount: .25}}
                aria-labelledby={title ? `${idName}-title` : undefined}
             >
                <motion.div variants={textVariant()}>
                    {subTitle && ( <p className={`${styles.sectionSubTitle}`}>{subTitle}</p>)}
                    {title && ( <h2 className={`${styles.sectionHeadTitle}`}>{title}</h2>)}
                </motion.div>
                {text && ( 
                    <motion.p variants={fadeIn('', '', '', 1)} className={`${styles.sectionSubText}`}>
                    {text}
                </motion.p>)}

                <Component />
            </motion.section>
        )
    }

export default SectionWrapper;