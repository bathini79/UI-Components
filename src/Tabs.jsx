import { useState } from 'react';
import './App.css';

function Tabs() {
  const buttons = [{ value: "Tab1", data: "loreal" }, { value: "Tab2", data: "espsum" }, { value: "Tab3", data: "go" }]
  const [valueIndex, setValueIndex] = useState(0)
  return (
    
        <div className='container'>
          <div className='tabs-header'>
            {buttons.map((button, index) => {
              return (
                <div className='tabs-index' onClick={() => {
                  setValueIndex(index)
                }} >{button.value}</div>
              )
            })}
          </div>
          <div>
            {buttons[valueIndex]?.data}
          </div>
        </div>
  );
}

export default Tabs;
