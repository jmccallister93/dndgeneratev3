import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NpcGen from "./pages/NpcGen";
import ItemGen from "./pages/ItemGen"
import MonsterGen from "./pages/MonsterGen"

function App() {
  return (
    <div className="app">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/npcgen" element={<NpcGen />}/>
          <Route path="/itemgen" element={<ItemGen />} />
          <Route path="/monstergen" element={<MonsterGen/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
