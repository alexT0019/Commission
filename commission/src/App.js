//import logo from './logo.svg';
import './App.css';
import Landing from './landing';
import Info from './info';
import Form from './form';
import Items from './Pages/items';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/items" element={<Items />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route path="/form" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>

      {/* Default App testing */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
