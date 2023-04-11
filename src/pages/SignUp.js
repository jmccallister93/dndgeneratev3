import Navbar from "../components/Navbar";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
import ns from "../stylesheets/Note.module.scss";
import { supabase, auth } from "../config/supabaseClient";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //signup function
  async function handleSignup(email, password) {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.log(error.message);
    } else {
      console.log(user);
    }
  }
 

  //handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignup(email, password);
  };

  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div>
        <h1 className={style.mainHeader}>Signup</h1>
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
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
