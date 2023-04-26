import { useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
import ns from "../stylesheets/Note.module.scss";
import { supabase, auth } from "../config/supabaseClient";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  //signup function
  async function handleSignup(email, password) {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setSuccess(false);
    } else {
      setSuccess(true);
    }
  }
 

  //handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignup(email, password);
  };

  return (
    <div className={style.mainWrapper}>
      <div>
        <h1 className={style.mainHeader}>Signup</h1>
      </div>
      {success ? (
        <div className={style.formHeader}>
          An email has been sent to your inbox, please follow the link to verify
        </div>
      ) : (
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
        <p className={style.passwordHint}>*must be at least 6 characters</p>
      </form>
      )}
    </div>
  );
};

export default SignUp;
