import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  let count4 = 0;


  function randomInt(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }

  function task1() {
    console.log('task2');
  }

  function task2() {
    document.querySelector('.task-2').classList.add('active');
  }

  function task3(event) {
    console.log(event.target.value);
  }

  function task4() {
    count4++;
    console.log(count4);
  }

  let task5ref = React.createRef();
  function task5() {
    if (task5ref.current.checked) {
      document.querySelector('.out-5').innerHTML = task5ref.current.value;
    }
    else {
      document.querySelector('.out-5').innerHTML = 0;
    }
  }

  let task6ref = React.createRef();
  let [state6, setState6] = useState();
  function task6() {
    setState6(task6ref.current.value);
  }

  let ref7 = React.createRef();
  let [state7, setState7] = useState('rgb(255, 255, 255)');
  function task7() {
    let r = randomInt(0, 255);
    let g = randomInt(0, 255);
    let b = randomInt(0, 255);
    let newBgColor = `rgb(${r}, ${g}, ${b})`;
    setState7(newBgColor);
    ref7.current.style.backgroundColor = newBgColor;
  }

  let ref8 = React.createRef();
  let [state8, setState8] = useState();
  function task8(event) {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
      ref8.current.innerHTML += 1;
      setState8(ref8.current.innerHTML);
    }
    else {
      ref8.current.innerHTML += 0;
      setState8(ref8.current.innerHTML);
    }
  }

  let ref9_in = React.createRef();
  let ref9_out = React.createRef();
  function task9() {
    ref9_out.current.innerHTML = ref9_in.current.value;
  }

  let ref10 = React.createRef();
  let ar10 = [5, 6, 7];
  function task10() {
    if (ref10.current.value != '') {
      ar10.push(+ref10.current.value);
      console.log(ar10);
    }
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" ref={task5ref} onChange={task5} />
        <div className="out-5"></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" ref={task6ref} onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6">{state6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" style={{ backgroundColor: state7 }} ref={ref7}></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyDown={task8}></input>
        <div className="out-8" ref={ref8}>{state8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9} ref={ref9_in}></input>
        <div className="out-9" ref={ref9_out}></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={ref10}></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;
