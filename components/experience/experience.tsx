import { BsPatchCheckFill } from "react-icons/bs";

export default function Experience() {
    return (
        <section id="experience">
            <h5>What skills i have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Devlopment</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details__icon " />
                            <h4>Html</h4>
                        </article>
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>Backend Devlopment</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details__icon " />
                            <h4>Nodejs</h4>
                        </article>
                     </div>
                </div>
            </div>
        </section>
    )
}