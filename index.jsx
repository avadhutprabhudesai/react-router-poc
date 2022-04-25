import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import App from './src/App';
import './style.css';
import List from './src/routes/List';
import Info from './src/routes/Info';
import Edit from './src/routes/Edit';
import Layout from './src/routes/Layout';
import Contact from './src/routes/Contact';
import About from './src/routes/About';

const style = {
  flex: 1,
};

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="pets" element={<List />}>
          <Route path=":id" element={<Info style={style} />}></Route>
          <Route path=":id/edit" element={<Edit style={style} />}></Route>
          <Route
            index
            element={
              <div style={{ flex: 1, textAlign: 'center' }}>
                <h1>Select a dog to view details !!!!</h1>
              </div>
            }
          ></Route>
        </Route>
        <Route element={<Layout />}>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
        <Route index element={<List />}></Route>
      </Route>
      <Route
        path="*"
        element={
          <>
            <h1>No matching route found !!!!</h1>
            <Link to="/">Go back</Link>
          </>
        }
      ></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
