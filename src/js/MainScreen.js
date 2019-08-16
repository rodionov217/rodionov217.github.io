import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const MainScreen = () => (
  <main id="home">
  <h1 class="lg-heading">Elena <span class="text-secondary">Rodionova</span></h1>
  <h2 class="sm-heading">
    Frontend Developer
  </h2>
  <div class="icons">
    <a href="https://github.com/rodionov217">
    <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
    </a>
    <a href="https://t.me/elenaRodionova217">
    <FontAwesomeIcon icon={['fab', 'telegram']} size="2x"/>
    </a>
    <a href="https://www.linkedin.com/in/elena-rodionova-2952b0191/">
    <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/>
    </a>
    <a href="/">
    <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
    </a>
    <a href="mailto:rodionova217@gmail.com">
    <FontAwesomeIcon icon={['fa', 'envelope']} size="2x"/>
    </a>
  </div>
</main>
)

export { MainScreen }