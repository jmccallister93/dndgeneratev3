import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NpcGen from "./pages/NpcGen";
import ItemGen from "./pages/ItemGen";
import MonsterGen from "./pages/MonsterGen";
import LocationGen from "./pages/LocationGen";
import FactionGen from "./pages/FactionGen";
import QuestGen from "./pages/QuestGen";
import VillainGen from "./pages/VillainGen";
import PantheonGen from "./pages/PantheonGen";
import NotePage from "./notes/pages/NotePage";
import CollectionPage from "./collections/CollectionPage";
import { useState, useEffect } from "react";
import { SessionContext } from "./config/SessionContext";
import { supabase } from "./config/supabaseClient";
import Navbar from "./components/Navbar";
import ResetPassword from "./pages/ResetPassword";
import style from "./App.module.scss";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Check for session data in cookie or local storage
    const storedSession = localStorage.getItem("session");
    if (storedSession) {
      setSession(JSON.parse(storedSession));
    }

    // Listen for changes to session state and update the context and storage
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        setSession(newSession);

        if (event === "SIGNED_IN") {
          localStorage.setItem("session", JSON.stringify(newSession));
        } else if (event === "SIGNED_OUT") {
          localStorage.removeItem("session");
        }
      }
    );

    // Clean up the listener when the component unmounts
    return () => {
      if (authListener && authListener.unsubscribe) {
        authListener.unsubscribe();
      }
    };
  }, []);

  const [, setRedirectPath] = useState("");

  function updateRedirectPath(path) {
    // console.log(path)
    setRedirectPath(path);
  }

  return (
    <div className={style.appWrapper}>
      <SessionContext.Provider value={session}>
        {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
        <BrowserRouter>
          <Navbar session={session} updateRedirectPath={updateRedirectPath} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/dndgeneratev3" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/collectionpage" element={<CollectionPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/npcgen" element={<NpcGen />} />
            <Route path="/itemgen" element={<ItemGen />} />
            <Route path="/monstergen" element={<MonsterGen />} />
            <Route path="/locationgen" element={<LocationGen />} />
            <Route path="/factiongen" element={<FactionGen />} />
            <Route path="/questgen" element={<QuestGen />} />
            <Route path="/villaingen" element={<VillainGen />} />
            <Route path="/pantheongen" element={<PantheonGen />} />
            <Route path="/notes" element={<NotePage />} />
          </Routes>
        </BrowserRouter>
      </SessionContext.Provider>
    </div>
  );
}

export default App;
