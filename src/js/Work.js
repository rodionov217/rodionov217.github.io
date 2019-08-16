import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import project1 from '../img/projects/trainbooking.jpg';
import project2 from '../img/projects/drawing.jpg';
import project3 from '../img/projects/shop.jpg';
import project4 from '../img/projects/project4.jpg';
import project5 from '../img/projects/project5.jpg';

const Work = () => {
  const projects = [
    {
      github: 'https://github.com/rodionov217/train',
      demo: 'https://rodionov217.github.io/train/',
      description: 'Система бронирования жд билетов (React)',
      img: project1
    },
    {
      github: 'https://github.com/rodionov217/collaborate-drawing',
      demo: 'https://rodionov217.github.io/collaborate-drawing/',
      description: 'Приложение для совместного рецензирования изображений (JavaScript)',
      img: project2
    },
    {
      github: 'https://github.com/rodionov217/shoe-shop',
      demo: 'https://rodionov217.github.io/shoe-shop/',
      description: 'Интернет-магазин обуви (React)',
      img: project3
    },
    /* {
      github:
      demo:
      description
    },
    {
      github:
      demo:
      description
    } */
  ]
  return (
    <main id="work">
      <h1 class="lg-heading">Мои <span class="text-secondary">Работы</span></h1>
      <h2 class="sm-heading">
        Здесь Вы можете посмотреть некоторые из моих работ
      </h2>
    <div class="projects">
      {projects.map((project, i) =><ProjectCard {...project} key={i}/> )}
    </div>
    </main>
  )
  }

export { Work }

const ProjectCard = (props) => {
  const {github, demo, description, img} = props;
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  return (
    <div class="item">
      <Link onMouseOver={() => setDescriptionVisible(true)} onMouseOut={() => setDescriptionVisible(false)} className="project-image" to='/'>
        <img src={img} alt="project"/>
        <div className={`project-description ${descriptionVisible ? "visible" : ""}`}>
          <span>{description}</span>
        </div>
      </Link>npm 
      <a  href={demo} class="btn-light">
        <span>Перейти к проекту</span>
        <FontAwesomeIcon icon={faEye}/>
      </a>
      <Link to={github} class="btn-dark">
        <span>Посмотреть код</span>
        />
      </Link>
    </div>
  )
}