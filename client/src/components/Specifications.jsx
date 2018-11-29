import React from 'react';
import style from '../css/Specifications.css';

const Specifications = function(props) {

  return (
    <div className={style.mainSpec}>
      <div className={style.specParent}>
        <div className={style.specWrapper}>
          <ul className={style.ul1}>
            
              <li className={style.item}>{props.specs}</li>
         
          </ul>
          <ul className={style.ul2}>
            
              <li className={style.item}>{props.specs}</li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Specifications;