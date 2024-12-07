import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style.js';
import { services } from '../constants/index.js';
import { fadeIn, textVariant } from '../utils/motion.js';
import SectionWrapper from '../hoc/index.js';

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className={'xs:w-[250px] w-full'}>
            <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className={
                    'w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                }
            >
                <div
                    option={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className={
                        'bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                    }
                >
                    <img
                        src={icon}
                        alt={title}
                        className={'w-16 h-16 object-contain'}
                    />
                    <h3
                        className={
                            'text-white text-[20px] font-bold text-center'
                        }
                    >
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};
const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>
                    Introduction
                    <h2 className={styles.sectionHeadText}>Overview.</h2>
                </p>
            </motion.div>
            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className={
                    'mt-4 text-secondary text-[17px] leading-[30px] text-justify'
                }
            >
                Passionate Full Stack JavaScript Developer with over 3 years of
                experience specializing in Angular, Node.js, and
                JavaScript-related technologies. Proven track record of
                delivering high-quality, user-centric web applications using the
                MEAN stack, TypeScript, HTML5, and CSS3. Experienced in building
                dynamic SPAs, designing RESTful APIs, and implementing robust
                backend solutions with Express and Nest.js. Adept at state
                management (NgRx, Ngxs), reactive programming (RxJS), and modern
                frontend architectures. Skilled in cloud deployments (AWS),
                automated testing, and Agile/Scrum methodologies. Committed to
                creating engaging, responsive user interfaces and maintainable
                codebases, while actively contributing to team success and
                continuous improvement.
            </motion.p>
            <div className={'mt-20 flex flex-wrap gap-10'}>
                {services.map((service, index) => {
                    return (
                        <ServiceCard
                            key={service.title}
                            index={index}
                            {...service}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default SectionWrapper(About, 'about');
