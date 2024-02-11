import React from 'react'; 
import Flower from '../assets/Img/flower.jpg'

import classes from '../modules/HalfPart.module.scss';

export const HalfPart = () => {
  return (
      <div className={classes['Half']}>
          <div className= {classes['container']}>
            <h1>Grow your skills, <br /> define your future</h1>
            <p>Presenting academy, the tech school of the future. we teach you <br />
             the right skills to be prepeared for tomorrow.
               <div className={classes['buttons']}>
                  <button>
                    EXPLORE COURSES
                  </button>
                  <button>
                    LEARN MORE
                  </button>
               </div>
            </p>
          </div>
    <img src={Flower} alt="" />
          
      </div>

  );
};
