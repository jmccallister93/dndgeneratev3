import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
import { supabase } from "../config/supabaseClient";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isResetLinkClicked, setIsResetLinkClicked] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [, setIsPasswordReset ] = useState(false);

  // Handle password reset flow
  useEffect(() => {
    const handlePasswordRecovery = async (event, session) => {
      if (event === "PASSWORD_RECOVERY") {
        setIsResetLinkClicked(true);
        const url = window.location.href;
        const index = url.indexOf("#access_token=");
        if (index !== -1) {
          const token = url.substring(index + 14);
          setAccessToken(token);
        }
      }
    };

    // Add the following line to register the auth change handler
    supabase.auth.onAuthStateChange(handlePasswordRecovery);

    // Add a cleanup function to unregister the auth change handler
    return () => {
      supabase.auth.offAuthStateChange(handlePasswordRecovery);
    };
  }, []);

  // Handle form submission
  const handleSendEmail = async (event) => {
    event.preventDefault();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo:
        "https://dndgenerate.netlify.app/resetPassword",
        // "http://localhost:3000/resetPassword",
    });
  
    if (error) {
      console.log(error);
    } else {
      setIsEmailSent(true);
    }
  };

  const handlePasswordReset = async (event) => {
    const { error } = await supabase.auth.api.updateUser(accessToken, {
        password: event.target.password.value,
      });
        if (error) {
            console.log(error);
        } else {
            setIsPasswordReset(true);
        }
    }

  return (
    <>
      <div className={style.mainWrapper}>
        {isResetLinkClicked ? (
          <form className={style.form} onSubmit={handlePasswordReset}>
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
          <form className={style.form} onSubmit={handleSendEmail}>
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
