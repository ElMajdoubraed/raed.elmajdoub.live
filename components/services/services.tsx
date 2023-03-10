import { BiCheck } from "react-icons/bi"
export default function Services() {
  return (
    <section id="services">
        <h5>Experience i have gained</h5>
        <h2>Experience</h2>

        <div className="container services__container">
        <article className="service">
            <div className="service__head">
                <h3>UI/UX design</h3>
            </div>

            <ul className="service__list">
                <li>
                    <BiCheck className="service__list__icon"/>
                    <p>task name</p>
                </li>
                <li>
                    <BiCheck className="service__list__icon"/>
                    <p>task name</p>
                </li>
            </ul>
        </article>

        <article className="service">
            <div className="service__head">
            <h3>UI/UX design</h3>
            </div>

            <ul className="service__list">
                <li>
                    <BiCheck className="service__list__icon"/>
                    <p>task name</p>
                </li>
                <li>
                    <BiCheck className="service__list__icon"/>
                    <p>task name</p>
                </li>
            </ul>
        </article>

        </div>
    </section>
  )
}
