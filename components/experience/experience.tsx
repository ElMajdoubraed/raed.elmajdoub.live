import { BsPatchCheckFill } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import skills from './skills.json'
export default function Experience() {
    const skillarray: any = skills
    console.log(skills)
    return (
        <section id="experience">
            <h5>What skills i have</h5>
            <h2>My Skills</h2>

            <div className="container experience__container">            
            <Carousel>
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
                }
            </Carousel>
            </div>
        </section>
    )
}