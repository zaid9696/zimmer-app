
import React from 'react';

import aboutBG from '../../assets/imgs/about-bg.png';

import './about.styles.scss';


const About = () => (

    <div className="about">
        <div className="about__bg" style={{
            backgroundImage: `url(${aboutBG})`
          }}>
          <div className="about__content">
              <h1>Hans Florian Zimmer</h1>
              <div className="about__info">
                <p>is a German film score composer and record producer. Zimmer's works are notable for integrating electronic music sounds with traditional orchestral arrangements. Since the 1980s, he has composed music for over 150 films. His works include The Lion King, for which he won the Academy Award for Best Original Score in 1995, the Pirates of the Caribbean series, Interstellar, Gladiator, Crimson Tide, Inception, Dunkirk, and The Dark Knight Trilogy. He has received four Grammy Awards, three Classical BRIT Awards, two Golden Globes, and an Academy Award. He was also named on the list of Top 100 Living Geniuses, published by The Daily Telegraph.</p>
                <p>
                  Zimmer spent the early part of his career in the United Kingdom before moving to the United States. He is the head of the film music division at DreamWorks studios and works with other composers through the company that he founded, Remote Control Productions,formerly known as Media Ventures. His studio in Santa Monica, California has an extensive range of computer equipment and keyboards, allowing demo versions of film scores to be created quickly.

  Zimmer has collaborated on multiple projects with directors including Ridley Scott, Ron Howard, Gore Verbinski, Michael Bay, Guy Ritchie and Christopher Nolan.</p>
              </div>
          </div>
        </div>
    </div>
);


export default About;
