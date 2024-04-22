import React from 'react';

import "./AcercaMi.scss";
import { skills } from '../../util/skills.jsx';

import keyboard from "../../assets/keyboard.webp";


const AboutMe = () => {


  
  const skill = [
    {title :"HTML5", image : "html.png"}

  ];

  return (
    <section id="about-me" className="sectiona">
      <div className="container-a">
          <div className="col-md-6">
            <h2 className="section-titlea">Acerca de mí</h2>
            <p className="p" >
              Como desarrollador web especializado en tecnologías como React.js y Next.js, ofrezco servicios de desarrollo de aplicaciones web personalizadas y de alto rendimiento. Con una experiencia de cuatro años en el campo, incluyendo dos años trabajando en proyectos clave, he liderado la creación de soluciones tecnológicas innovadoras.

Mi enfoque se centra en la construcción de aplicaciones web dinámicas y receptivas que satisfacen las necesidades específicas de mis clientes. He colaborado en proyectos donde utilicé Next.js para desarrollar interfaces modernas y escalables, integrando con éxito sistemas de gestión de contenidos como Contentful para una administración eficiente del contenido.

Además, me destaco en la inspección regular y mantenimiento de estas aplicaciones, garantizando su funcionamiento óptimo mes tras mes. Algunos de los proyectos destacados en los que he participado incluyen [menciona aquí uno o dos proyectos relevantes], donde mi experiencia y habilidades fueron fundamentales para el éxito del proyecto.

Si estás buscando desarrollar una aplicación web de calidad, adaptada a tus necesidades específicas y con un enfoque en la eficiencia y la innovación tecnológica, no dudes en contactarme.
            </p>
          </div>
          <div className="col-md-5">
            <img src={keyboard} />
          </div>  
      </div>
    </section>
  );
};

export default AboutMe;