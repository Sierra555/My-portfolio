import React from 'react';
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';
import { fadeIn } from "../utils/motion";

const aboutContnet = {
  title:  "Overview",
  subTitle: "Introduction",
  text: "I’m a skilled software developer proficient in TypeScript and JavaScript, with a strong focus on React.js. I’m a fast learner who works closely with clients to deliver efficient, scalable, and intuitive solutions that address real-world challenges. Let’s collaborate to turn your vision into reality!"
}

const ServiceCard = ({ index, title, icon, webpIcon}) => (
    <Tilt className='sm:w-[250px] w-full' options={{max: 40, scale: 1, speed: 500}}>
        <motion.div 
          variants={fadeIn('right', 'spring', index * .5, .75)}
          className='rounded-[20px] p-[1px] green-violet-gradient'
        >
          <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex gap-5 justify-center items-center flex-col'
          >
            <picture>
                <source srcSet={webpIcon} type="image/webp" />
                <img 
                  src={icon} 
                  alt='web-development'
                  className='w-16 h-16 object-contain' />
              </picture>
             <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
    </Tilt>
)
  
const About = () => {
  return (
    <>
       <div className='mt-5 flex flex-col items-center sm:flex-row flex-wrap gap-10'>
        {services.map((services, index) => (  
            <ServiceCard key={services.title} index={index} {...services}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about", aboutContnet);
