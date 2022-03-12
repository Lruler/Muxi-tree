import { Routes, Route } from "react-router";
import Login from './pages/login/login'
import Request from "./pages/request/request";
import Xie from "./pages/write/xie";
import Tree from "./pages/tree/tree";
import "./App.css";


function App() {
  return (
    <Routes>
      <Route  path="/" element={<Login />}></Route>
      <Route  path="/request" element={<Request />}></Route>
      <Route  path="/xie" element={<Xie />}></Route>
      <Route  path="/tree" element={<Tree />}></Route>
    </Routes>
  );
}

export default App;
