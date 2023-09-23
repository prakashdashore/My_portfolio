import React, {useEffect} from "react";
import "./portfolio.css";
import IMG1 from "../../assets/todo.png";
import IMG2 from "../../assets/unsplash.png";
import IMG3 from "../../assets/tmdb.png";
import IMG4 from "../../assets/learnorama.png";
import IMG5 from "../../assets/home-delivery.png";
import IMG6 from "../../assets/photo-lab.png";
import AOS from 'aos'
import "aos/dist/aos.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Notes Taking Web App",
    github: "https://github.com/prakashdashore/Nots_keeping_webapp_NEXT-JS",
    demo: "https://nots-keeping-webapp-next-js-git-master-prakashdashore.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Unsplash Web App ( Images finder )",
    github: "https://github.com/prakashdashore/Unsplash_clone_NEXT-JS",
    demo: "https://unsplash-clone-next-js-q9aj-git-master-prakashdashore.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Cimena Web App ( Movies finder )",
    github: "https://github.com/prakashdashore/Cinema_Moviefinder_Webapp_NEXT-JS",
    demo: "https://cenema-moviefinder-webapp-next-js-git-master-prakashdashore.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Educatonal Website",
    github: "https://github.com/prakashdashore/Educational_Website",
    demo: "https://learnorama-edu-praksh-dashore.netlify.app",
  },
 
  {
    id: 5,
    image: IMG5,
    title: "Home-Delivery Website",
    github: "https://github.com/prakashdashore/Home-Delivery-Website",
    demo: "https://prakashdashore.github.io/Home-Delivery-Website/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Photo Editing Web App ",
    github: "https://github.com/prakashdashore/photo-editor",
    demo: "https://prakashdashore.github.io/photo-editor/",
  }
  
];

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
    });
  }, []);
  

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, title, image, github, demo }) => {
          return (
            <article key={id} className="portfolio__item" data-aos="slide-up">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3 style={{textAlign:'center'}}>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank"> Github </a>
                <a href={demo} className="btn btn-primary" target="_blank" > Live Demo </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
