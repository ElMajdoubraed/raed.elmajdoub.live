import projects from "./portfolio.json";
import { Project } from "./Project";
export default function Portfolio() {
  const _projects: Project[] = projects;
  return _projects && _projects.length > 0 ? (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {_projects.map((project: Project, index: number) => (
            <article className="portfolio__item">
              <div className="portfolio__item__image">
                <img
                  className="portfolio__img"
                  src={project.img_path}
                  alt={"Raed elmajdoub project : " + project.title}
                />
              </div>
              <h3>{project.title}</h3>
              <div className="portfolio__item__cta">
                <a
                  className="btn btn-primary"
                  target="_blank"
                  href={project.github}
                >
                  Github
                </a>
                {project.demo ? (
                  <a className="btn" target="_blank" href={project.demo}>
                    Live demo
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  ) : (
    <></>
  );
}
