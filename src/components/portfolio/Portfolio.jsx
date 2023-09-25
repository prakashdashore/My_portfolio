import React, { useEffect } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/todo.png";
import IMG2 from "../../assets/unsplash.png";
import IMG3 from "../../assets/tmdb.png";
import IMG4 from "../../assets/learnorama.png";
import IMG5 from "../../assets/home-delivery.png";
import IMG6 from "../../assets/photo-lab.png";
import IMG7 from "../../assets/g-drive-api.png";
import IMG8 from "../../assets/tele-bot.png";
import IMG9 from "../../assets/internshala.png";

import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Notes Taking Web App",
    github: "https://github.com/prakashdashore/Nots_keeping_webapp_NEXT-JS",
    demo: "https://nots-keeping-webapp-next-js-git-master-prakashdashore.vercel.app/",
    desc: " Developed using Next.js, showcasing proficiency in modern web development.Implemented robust task management features, including task creation, editing, deletion, and completion.",
  },
  {
    id: 2,
    image: IMG2,
    title: "Unsplash Web App ( Images finder )",
    github: "https://github.com/prakashdashore/Unsplash_clone_NEXT-JS",
    demo: "https://unsplash-clone-next-js-q9aj-git-master-prakashdashore.vercel.app/",
    desc: "Utilized the Unsplash API to provide real-time access to a vast collection of high-quality images.Implemented a robust search feature enabling users to discover images based on keywords or categories.",
  },
  {
    id: 3,
    image: IMG3,
    title: "Cimena Web App ( Movies finder )",
    github:
      "https://github.com/prakashdashore/Cinema_Moviefinder_Webapp_NEXT-JS",
    demo: "https://cenema-moviefinder-webapp-next-js-git-master-prakashdashore.vercel.app/",
    desc: "Developed using React with Next.js, showcasing proficiency in modern web development.Included features to view detailed information about movies, including cast, crew, ratings, and trailers.",
  },
  {
    id: 4,
    image: IMG4,
    title: "Educatonal Website",
    github: "https://github.com/prakashdashore/Educational_Website",
    demo: "https://learnorama-edu-praksh-dashore.netlify.app",
    desc: "A static educational platform website developed using HTML, CSS, and JavaScript.",
  },

  {
    id: 5,
    image: IMG5,
    title: "Home-Delivery Website",
    github: "https://github.com/prakashdashore/Home-Delivery-Website",
    demo: "https://prakashdashore.github.io/Home-Delivery-Website/",
    desc: "A static Home-Delivery platform website developed using HTML, CSS, and JavaScript.",
  },
  {
    id: 6,
    image: IMG6,
    title: "Photo Editing Web App ",
    github: "https://github.com/prakashdashore/photo-editor",
    demo: "https://prakashdashore.github.io/photo-editor/",
    desc: "This web application allows users to upload and edit their photos directly in the browser and performing various image editing operations.",
  },
  {
    id: 7,
    image: IMG7,
    title: "G-Drive Backend Api ",
    github: "https://github.com/prakashdashore/G_Drive_Backend_Api_Node",
    demo: "No",
    desc: "Project serves as a clone of Google Drive, providing users with a secure and efficient platform for storing, managing, and sharing their files and documents.",
  },
  {
    id: 8,
    image: IMG8,
    title: "Real-Time Weather Telegram Bot ",
    github: "https://github.com/prakashdashore/Telegram-bot-waether",
    demo: "No",
    desc: "Telegram bot that provides real-time weather information to users based on their location requests.Using OpenWeather API to fetch accurate weather data",
  },
  {
    id: 9,
    image: IMG9,
    title: "Job Finder Webapp (Internshala clone)",
    github: "https://github.com/prakashdashore/JobFinder_MERN_STACK",
    demo: "No",
    desc: "Jobfinder is a web application designed to bridge the gap between students seeking internships and employers offering job opportunities.",
  },
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
        {data.map(({ id, title, image, github, demo, desc }) => {
          return (
            <article key={id} className="portfolio__item" data-aos="slide-up">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3 style={{ textAlign: "center" }}>{title}</h3>
              <h4 style={{ textAlign: "center" }}>Description :</h4>
              <p className="desc">{desc}</p>
              <br />

              <div className="portfolio__item-cta ">
                <a href={github} className="btn" target="_blank">
                  {" "}
                  Github{" "}
                </a>

                {demo === "No" ? (
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Not available{" "}
                  </a>
                ) : (
                  <a href={demo} className="btn btn-primary" target="_blank">
                    {" "}
                    Live Demo{" "}
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
