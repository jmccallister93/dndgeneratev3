import Navbar from "../components/Navbar";
import style from "../stylesheets/PageStyle.module.scss";
import { supabase } from "../config/supabaseClient";
import { useState } from "react";

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
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'example@email.com',
      password: 'example-password',
    })
  }

  async function signout() {
    const { error } = await supabase.auth.signOut();
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
      <h3 className={style.formHeader}>Don't have an account? </h3>
      <button className={style.formButton} type="submit">
          Sign Up!
        </button>
    </div>
    </>
  );
};

export default Login;
