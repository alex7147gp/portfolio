import React from 'react';

import "./ProyectosD.scss";

import shop from "../../assets/shop-1.png";
import iricher from "../../assets/iricher-1.png";


const FeaturedProjects = () => {
  // Array de objetos que representa los proyectos destacados
  const featuredProjects = [
    {
      title: "JCshop",
      description: "Este proyecto es una aplicación desarrollada con Next.js y Sass, que se conecta con un distribuidor de datos como Contentful mediante GraphQL. La aplicación ha sido internacionalizada para admitir contenido en español e inglés.",
      imageUrl: shop,
      projectUrl: "https://www.ejemplo.com/proyecto1"
    },
    {
      title: "IRicher",
      description: "Este proyecto es una plataforma en línea enfocada en proporcionar información y consejos sobre finanzas personales, desarrollada utilizando Next.js y Sass. La aplicación está conectada a una API que entrega información financiera a través de MongoDB.",
      imageUrl: iricher,
      projectUrl: "https://www.ejemplo.com/proyecto2"
    }
    // Puedes agregar más objetos de proyecto según sea necesario
  ];

  return (
    <section id="featured-projects" className="section">
      <div className="container">
        <h2 className="section-titlep">Proyectos Destacados</h2>
        <div className="featured-projects">
          {/* Mapeo de proyectos para renderizar cada uno */}
          {featuredProjects.map((project, index) => (
            <div className="project" key={index}>

              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;