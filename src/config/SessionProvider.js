import { createContext, useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export const SessionContext = createContext(null);

const SessionProvider = (props) => {
  const [session, setSession] = useState(null);

  // Restores the user's session from local storage when the component mounts
  useEffect(() => {
    const session = localStorage.getItem("supabaseSession");
    if (session) {
      setSession(JSON.parse(session));
    }
  }, []);

  //Reset password
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == "PASSWORD_RECOVERY") {
        const newPassword = prompt("What would you like your new password to be?");
        const { data, error } = await supabase.auth.update({
          password: newPassword,
        })
  
        if (data) alert("Password updated successfully!")
        if (error) alert("There was an error updating your password.")
      }
    })
  }, [])

  // Updates the session state and stores the session in local storage
  function updateSession(newSession) {
    setSession(newSession);
    localStorage.setItem("supabaseSession", JSON.stringify(newSession));
  }

  // Signs the user out and removes the session from local storage
  async function signOut() {
    await supabase.auth.signOut();
    setSession(null);
    localStorage.removeItem("supabaseSession");
  }

  return (
    <SessionContext.Provider value={{ session, updateSession, signOut }}>
      {props.children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
