import { BsPatchCheckFill } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import skills from './skills.json'
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
export default function Experience() {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        var w = window.innerWidth;
        if (w < 1024) {
            setIsMobile(true)
        }

    })
    const skillarray: any = skills
    return (
        <motion.section 
            initial={{
                x: -200,
                opacity:0
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            viewport= {{
                once: true
            }}
            transition={{
                duration: 1.2
            }}
            id="experience"
        >
            <h5>What skills i have</h5>
            <h2>My Skills</h2>

            <motion.div 
                className="container experience__container"
                initial = {{ opacity: 0 }}
                whileInView = {{ opacity: 1}}
                transition = {{ duration: 2 }}
            >    
                {
                    !isMobile ? <>
                    {
                        skillarray.map((skill: any, index: number) => 
                        <div key={'experience_' + index} className="experience__frontend">
                                <h3>{skill.title}</h3>
                                {
                                    skill.skills.map((e: string, i: number) =>  
                                    <div key={'skill_' + i} className="experience__content">
                                        <article className="experience__details">
                                            <BsPatchCheckFill className="experience__details__icon " />
                                            <h4>{e}</h4>
                                        </article>
                                    </div>
                                    )
                                }
                            
                        </div>
                        )
                    } </>: <>
                    {
                        skillarray.map((skill: any, index: number) => 
                        <details key={'experience_mobile_' + index} className="experience__frontend">
                                <summary>{skill.title}</summary>
                                {
                                    skill.skills.map((e: string, i: number) =>  
                                    <div key={'skill_' + i} className="experience__content">
                                        <article className="experience__details">
                                            <BsPatchCheckFill className="experience__details__icon " />
                                            <h4>{e}</h4>
                                        </article>
                                    </div>
                                    )
                                }
                            
                        </details>
                        )
                    }
                    </>
                }        
            </motion.div>
        </motion.section>
    )
}