import React from 'react';

import Button from './Button'

function Categories(props){
    return(
        <div className="categories">
          <Button ClickB={()=>{console.log("Click")}}/>
          <button onClick={()=>{console.log("clickB")}}>Click</button>
        <ul>
          <li className="active">Все</li>
          <li>Мясные</li>
          <li>Вегетарианская</li>
          <li>Гриль</li>
          <li>Острые</li>
          <li>Закрытые</li>
        </ul>
      </div>
    );
}

export default Categories;