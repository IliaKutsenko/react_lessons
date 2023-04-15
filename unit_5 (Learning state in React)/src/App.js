import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  function randomInt(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }


  let [st1, setSt1] = useState();
  let ref1 = React.createRef();
  function task1() {
    setSt1(ref1.current.value);
  }

  let [st2, setSt2] = useState(0);
  function task2() {
    let currentSt2 = st2;
    currentSt2++;
    setSt2(currentSt2);
  }

  let [st3, setSt3] = useState();
  function task3(event) {
    setSt3(event.target.value);
  }

  let [st4, setSt4] = useState(0);
  function task4() {
    let currentSt4 = st4;
    currentSt4++;
    setSt4(currentSt4);
  }

  let [st5, setSt5] = useState();
  let ref5 = React.createRef();
  function task5() {
    if (ref5.current.checked) {
      setSt5(ref5.current.value);
    }
    else {
      setSt5(0);
    }
  }

  let [st6, setSt6] = useState();
  let ref6 = React.createRef();
  function task6() {
    setSt6(ref6.current.value);
  }

  let [st7, setSt7] = useState();
  let ref7 = React.createRef();
  function task7() {
    let r = randomInt(0, 255);
    let g = randomInt(0, 255);
    let b = randomInt(0, 255);
    let currentBgColor = `rgb(${r},${g},${b})`;
    ref7.current.style.backgroundColor = currentBgColor;
    setSt7(currentBgColor);
  }

  let [st8, setSt8] = useState();
  let ref8 = React.createRef();
  function task8(event) {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
      ref8.current.innerHTML += 1;
      setSt8(ref8.current.innerHTML);
    }
    else {
      ref8.current.innerHTML += 0;
      setSt8(ref8.current.innerHTML);
    }
  }

  let [st9, setSt9] = useState();
  let ref9 = React.createRef();
  function task9() {
    setSt9(ref9.current.value);
  }

  let [st10, setSt10] = useState([]);
  let ref10 = React.createRef();
  function task10() {
    let ref10Value = ref10.current.value;
    let array10 = [...st10, ref10Value];
    if (ref10Value != '') {
      setSt10(array10);
    }
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input type="text" ref={ref1} />
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" onChange={task5} ref={ref5} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={ref6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={ref7}></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyDown={task8}></input>
        <div ref={ref8}>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9} ref={ref9}></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={ref10}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div>{st10}</div>
      </section>
    </>
  );
}

export default App;
