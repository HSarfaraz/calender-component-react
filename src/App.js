import React from 'react';
import Calender from './component/Calender/Calender';
import './App.css';

function App() {
  const onChange = (ranges) => {
    console.log(ranges);
  };
  return (
    <div className='App'>
      <Calender onChange={onChange} />
    </div>
  );
}

export default App;
