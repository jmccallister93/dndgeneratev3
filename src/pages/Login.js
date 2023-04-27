import style from "../stylesheets/PageStyle.module.scss";
import { supabase } from "../config/supabaseClient";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  // //login function
  // async function handleLogin() {
  //   const { data, error } = await supabase.auth.signInWithOAuth({
  //     provider: "google",
  //   });

  //   if (error) {
  //     console.log(error.message);
  //   } else {
  //     console.log(data);
  //   }
  // }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //login with email
  async function signInWithEmail(email, password) {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.log(error.message);
    } else {
      const lastUrl = sessionStorage.getItem("lastUrl");
      if (lastUrl) {
        window.location.href = lastUrl;
      } else {
        // Redirect the user to the default page after login
        window.location.href = "/";
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmail(email, password);
  };

  return (
    <>
      <div className={style.mainWrapper}>
        <div>
          <h1 className={style.mainHeader}>Login</h1>
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
          <h3 className={style.formHeader}>Email: </h3>
          <input
            className={style.formInput}
            type="email"
            value={email}
            placeholder="123abc@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className={style.formHeader}>Password: </h3>
          <input
            className={style.formInput}
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={style.formButton} type="submit">
            Sign In
          </button>
        </form>
        <h2 className={style.formHeader}>Forgot Password?</h2>
        <Link to="/resetPassword">
          <button className={style.formButton} type="submit">
            Password Reset
          </button>
        </Link>
        <h3 className={style.formHeader}>Don't have an account? </h3>
        <Link to="/signup">
          <button className={style.formButton} type="submit">
            Sign Up!
          </button>
        </Link>
      </div>
    </>
  );
};

export default Login;
