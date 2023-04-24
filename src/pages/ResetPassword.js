import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
import ns from "../stylesheets/Note.module.scss";
import { supabase } from "../config/supabaseClient";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Reset password function
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase.auth.api.resetPasswordForEmail(
      email,
      { redirectTo: "localhost:3000/" }
    );
  };

  //Verify user email exists
  useEffect(() => {
    const getUsers = async () => {
        const { data: users, error } = await supabase.auth.api.listUsers();
        console.log(users);
    }
    getUsers();
    
  }, []);

  return (
    <>
      <div className={style.mainWrapper}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h3 className={style.formHeader}>Email: </h3>
          <input
            className={style.formInput}
            type="email"
            value={email}
            placeholder="123abc@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className={style.formButton} type="submit">
            Send Reset Email
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
