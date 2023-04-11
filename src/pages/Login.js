import Navbar from "../components/Navbar";
import style from "../stylesheets/PageStyle.module.scss";
import { supabase } from "../config/supabaseClient";
import { useState } from "react";

const Login = () => {


  //login function
  async function handleLogin(email, password) {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log(error.message);
    } else {
      console.log(user);
    }
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className={style.mainWrapper}>
      <Navbar />
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
