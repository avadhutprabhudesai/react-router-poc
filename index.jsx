import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './src/App';
import './style.css';
import List from './routes/List';
import Info from './routes/Info';
import Edit from './routes/Edit';
import Create from './routes/Create';
import Layout from './routes/Layout';
import Contact from './routes/Contact';
import About from './routes/About';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<List />}></Route>
        <Route path="dogs" element={<List />}>
          <Route path=":id" element={<Info />}></Route>
          <Route path=":id/edit" element={<Edit />}></Route>
        </Route>
        <Route path="/dogs/new" element={<Create />}></Route>
        <Route element={<Layout />}>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
