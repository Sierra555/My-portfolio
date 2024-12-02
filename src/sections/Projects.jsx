import React from 'react';
import { SectionWrapper } from '../hoc';
import { projects } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';
import { fadeIn } from "../utils/motion";
import VisuallyHidden from '../components/VisuallyHidden/VisuallyHidden';
import { Slider } from '../components';
import useIsMobile from "../hooks/useIsMobile";

const projectsContent = {
  title:  "Projects",
  subTitle: "My works",
  text: "The following projects highlight my skills and experience through practical examples of my work. Each project includes a brief description, along with links to the code repositories. They demonstrate my capacity to tackle complex challenges, collaborate with various technologies, and effectively manage projects."
}

const Projects = () => {
  const { isMobile, isTablet, isDesktop } = useIsMobile();

const cardParam = {
  width: isMobile ? 282 : (isTablet ? 600 : 362),
  cardsToDisplay: isDesktop ? 3 : 1,
  gap: 30,
}

const sliderParam = {
 width: cardParam.width * cardParam.cardsToDisplay + (cardParam.gap * (cardParam.cardsToDisplay + 1)),
}

  return (
    <>
      <Slider cards={projects} Component={ProjectCard} sliderParam={sliderParam} cardParam={cardParam} />
    </>
  )
}

const ProjectCard = ({ index, name, description, tags, image, imageWebp, source_code_link, app_link, cardWidth}) => {
  return (
    <Tilt options={{max: 40, scale: 1, speed: 500}} style={{ width: cardWidth }}>
      <motion.div 
          variants={fadeIn('right', 'spring', index * .25, .75)}
          className='rounded-2xl p-[1px] bg-secondary relative'
      >
        <div 
          onClick={() => app_link && window.open(app_link, '_blank')}
          className={`bg-tertiary rounded-2xl p-5 h-[550px] flex justify-between flex-col gap-5 cursor-pointer`}
          role="link"
          tabIndex={0}
          aria-label={app_link ? 'View the demo of the project' : ''}
        >
          <picture>
            <source srcSet={imageWebp} type='image/webp'/>
            <img className='w-full h-[230px] rounded-2xl object-cover' src={image} alt="project preview" loading="lazy"/>
          </picture>
          
          <div className='flex gap-2 items-center'>
            <h3 className='text-white font-bold sm:text-[24px] text-[20px]'>{name}</h3>
            {source_code_link && (
              <a className="link-icon link-icon-github" href={source_code_link} target="_blank" rel="noopener noreferrer">
                <VisuallyHidden>The link to the project on github</VisuallyHidden>
              </a>
            )}
          </div>

          <p className='text-secondary text-[14px]'>{description}</p>
          <div className='flex gap-2 items-center'>
            {tags.map(({name}) => (
              <p className="tag border border-green-100 bg-green-200" key={name}>{name}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};


export default SectionWrapper(Projects, "projects", projectsContent )