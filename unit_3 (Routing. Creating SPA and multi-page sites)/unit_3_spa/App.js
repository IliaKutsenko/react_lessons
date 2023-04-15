import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
import Error from './Error';
import Footer from './Footer';
import './App.css';
import CategoryDescription from './CategoryDescription';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const dataHeader = [
  { "link": "/", "text": "Главная" },
  { "link": "/about", "text": "О сайте" },
  { "link": "/cat", "text": "Категории" },
];
const dataCategory = [
  { "link": "/cat/notebook", "text": "Ноутбуки" },
  { "link": "/cat/monitor", "text": "Мониторы" },
  { "link": "/cat/cellphone", "text": "Мобильные телефоны" },
]

function App() {
  return (
    <>
      <Router>
        <Header dataH={dataHeader} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route exact path='/cat' element={<Category dataC={dataCategory} />} />
          <Route path='/cat/:catName' element={<CategoryDescription />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
