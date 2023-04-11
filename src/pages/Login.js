import Navbar from "../components/Navbar";
import style from "../stylesheets/PageStyle.module.scss";
import { supabase } from "../config/supabaseClient";
import { useState } from "react";

const Login = (props) => {
  //login function
  async function handleLogin() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.log(error.message);
    } else {
      console.log(data);
    }
  }

  async function signout() {
    const { error } = await supabase.auth.signOut();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <>
      <div>
        <button
          className={style.formButton}
          type="submit"
          onClick={handleSubmit}
        >
          Login with Google <i className="pi pi-google"></i>
        </button>
      </div>
    </>
  );
};

export default Login;
