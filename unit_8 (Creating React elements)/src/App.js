import './App.css';
import React, { useState } from 'react';




function App() {

  const h1 = React.createElement('h1', {}, 'unit_8');
  const h2 = React.createElement('h2', {
    className: 'text-orange',
  }, 'header 2');
  const p = React.createElement('p', {
    'style': {
      'color': 'red',
    }
  }, 'this is p');
  const input = React.createElement('input', {
    'value': 55,
  });

  const p1 = React.createElement('p', {}, 'hi');
  const p2 = React.createElement('p', {}, 'world');
  const div = React.createElement('div', {
    'className': 'text-grey',
  }, p1, p2);

  const ref1 = React.createRef();

  const [s1, setS1] = useState([]);
  const iFunc = () => {
    if (ref1.current.value !== '') {
      let a = ref1.current.value;
      let b = [...s1, a];
      setS1(b);
    }
  };


  return (
    <>
      {h1}
      {h2}
      {p}
      {input}
      {div}
      <input type="text" ref={ref1} />
      <button onClick={iFunc}>Push</button>
      <ul>
        {s1.map(item => React.createElement('li', {}, item))}
      </ul>
    </>
  );
}

export default App;
