//import logo from './logo.svg';
import './App.css';
import Landing from './Pages/landing'
import Info from './Pages/info';
import Form from './Pages/form';
import Headshot from './Pages/headshot';
import WaistUp from './Pages/waistUp';
import FullBody from './Pages/fullBody';
import Illustration from './Pages/illustration';
import ItemList from './Pages/itemList';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/itemList" element={<ItemList />} />
            <Route path="/info" element={<Info />} />
            <Route path="/form" element={<Form />} />
            <Route path="/headshot" element={<Headshot />} />
            <Route path="/waistUp" element={<WaistUp />} />
            <Route path="/fullBody" element={<FullBody />} />
            <Route path="/illustration" element={<Illustration />} />
          </Routes>
    </div>
  );
}

export default App;
