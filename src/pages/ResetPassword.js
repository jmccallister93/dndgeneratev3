import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
import ns from "../stylesheets/Note.module.scss";
import { supabase } from "../config/supabaseClient";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isResetLinkClicked, setIsResetLinkClicked] = useState(false);

  // Handle password reset flow
  useEffect(() => {
    // const handlePasswordRecovery = async (event, session) => {
    //   if (event === "PASSWORD_RECOVERY") {
    //     setIsResetLinkClicked(true);
    //   }
    // };

    const handlePasswordRecovery = async (event, session) => {
        if (event === "PASSWORD_RECOVERY" && window.location.pathname === "/resetPassword") {
          const newPassword = prompt("What would you like your new password to be?");
          const { data, error } = await supabase.auth.update({
            password: newPassword,
          });
          if (data) alert("Password updated successfully!");
          if (error) alert("There was an error updating your password.");
        }
      };
    // {
    //   if (event === "PASSWORD_RECOVERY") {
    //     const newPassword = prompt(
    //       "What would you like your new password to be?"
    //     );
    //     const { data, error } = await supabase.auth.update({
    //       password: newPassword,
    //     });
    //     if (data) alert("Password updated successfully!");
    //     if (error) alert("There was an error updating your password.");
    //   }
    // };

    supabase.auth.onAuthStateChange(handlePasswordRecovery);

  }, []);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo:
        // "https://jmccallister93.github.io/dndgeneratev3/resetPassword",
        "http://localhost:3000/resetPassword",
    });
    if (error) {
      console.log(error);
    } else {
      setIsEmailSent(true);
    }
  };

  return (
    <>
      <div className={style.mainWrapper}>
        {isResetLinkClicked ? (
          <form className={style.form} onSubmit={handleSubmit}>
            <h3 className={style.formHeader}>Reset Password for {email}</h3>
            <input
              className={style.formInput}
              type="password"
              placeholder="New password"
            />
            <button className={style.formButton} type="submit">
              Set New Password
            </button>
          </form>
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
            <button className={style.formButton} type="submit">
              Send Reset Email
            </button>
          </form>
        )}
        {isEmailSent && (
          <h3 className={style.formHeader}>
            Please check your email for the password reset link.
          </h3>
        )}
      </div>
    </>
  );
};

export default ResetPassword;
