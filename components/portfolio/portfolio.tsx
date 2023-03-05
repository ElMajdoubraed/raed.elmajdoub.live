export default function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                <article className="portfolio__item">
                    <div className="portfolio__item__image">
                        <img src="/images/portfolio-1.jpg" alt="alt portfolio" /> 
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item__cta">
                        <a className="btn btn-primary" target="_blank">Github</a>
                        <a className="btn" target="_blank">Live demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}