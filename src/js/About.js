import React, {useState} from 'react'

const About = () => {
  const [visible, setVisible] = useState(false);
  return (
  <main >
  <h1 class="lg-heading">Обо <span class="text-secondary">Мне</span></h1>
  <h2 class="sm-heading">
    Мои профессиональны навыки
  </h2>
 <div class="about-info">
    <img src="img/portrait_small.jpg" alt="John  Doe" class="bio-image"/>
    <div class="bio">
      <h3 class="text-secondary">BIO</h3>
      <p>Я являюсь начинающим frontend-разработчиком. Больше всего в мире frontend меня вдохновляет библиотека React. Я пишу сложные приложения на React и хочу дальше развиваться именно в этом направлении. <button onClick={() => setVisible(!visible)} class="show-more">Подробнее</button>
    </p>
    </div>
</div>
<div className="jobs">
      <div class={`job job-1 ${visible ? "job-visible" : ""}`}>
        <h3>HTML5 & CSS3</h3>
        <h6>Fullstack developer</h6>
        <p>Разбираюсь в семантике HTML5,</p>
      </div>
      <div class={`job job-2 ${visible ? "job-visible" : ""}`}>
        <h3>JAVASCRIPT</h3>
        <h6>Frontend developer</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam modi quod velit aliquid consectetur tenetur sequi reprehenderit at nostrum recusandae.</p>
      </div>
      <div class={`job job-3 ${visible ? "job-visible" : ""}`}>
        <h3>REACT</h3>
        <h6>Graphic Designer</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam modi quod velit aliquid consectetur tenetur sequi reprehenderit at nostrum recusandae.</p>
      </div>
      <div class={`job job-4 ${visible ? "job-visible" : ""}`}>
        <h3>REACT</h3>
        <h6>Graphic Designer</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam modi quod velit aliquid consectetur tenetur sequi reprehenderit at nostrum recusandae.</p>
      </div>

  </div>
</main>
)
  }

export { About }