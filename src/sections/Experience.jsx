import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { AvatarCanvas } from '../components';
import { FlashLight } from '../components';
import { SectionWrapper } from "../hoc";


const experienceContent = {
  title: "Work Experience.",
  subTitle: "What I have done so far in Frontend"
}

const ExperienceCard = ({ experience, setAnimationName, setIsPointerOver })  => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        backgroundColor: "rgb(29, 26, 48)",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='rounded-full'
          />
        </div>
      }
    >
      <div 
        onPointerOver={() => {
          setAnimationName('salute');
          setIsPointerOver(true);
          }}
         onPointerOut={() => {
          setAnimationName('idle');
          setIsPointerOver(false);
          }}>
        <div>
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
          <p
            className='text-secondary font-semibold'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
          <span className='text-secondary text-[12px] font-semibold'>{experience.date}</span>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
        <div className='flex flex-wrap gap-2 items-center mt-6'>{experience.tags.map((name) => (<span className="tag border border-green-100 bg-green-200" key={name}>{name}</span>))}</div>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [animationName, setAnimationName] = React.useState('idle');
  const [isPointerOver, setIsPointerOver]  = React.useState(false); 
  const containerRef = React.useRef(null);

  return (
    <>
        <div className="sm:flex gap-1 mt-20 relative" ref={containerRef}>
            <div className='hidden lg:block lg:w-1/2'>
               <AvatarCanvas animationName={animationName}/>
            </div>
              <div className='flex flex-col'>
              <VerticalTimeline layout='1-column-left'>
                {experiences.map((experience, index) => (
                  <ExperienceCard
                    key={`experience-${index}`}
                    experience={experience}
                    setAnimationName={setAnimationName}
                    setIsPointerOver={setIsPointerOver}
                  />
                ))}
              </VerticalTimeline>
          </div>
          {isPointerOver && <FlashLight containerRef={containerRef} />}
        </div>
     </>
  )
}

export default SectionWrapper(Experience, "experience", experienceContent);
