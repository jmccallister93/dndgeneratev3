import { useEffect, useState, useRef } from "react";
import style from "../stylesheets/PageStyle.module.scss";
import { supabase } from "../config/supabaseClient";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isResetLinkClicked, setIsResetLinkClicked] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const isMounted = useRef(true);

  // Handle password reset flow
  useEffect(() => {
    const handlePasswordRecovery = async (event, session) => {
      if (event === "USER_UPDATED") {
        if (isMounted.current) setIsResetLinkClicked(true);
        const url = window.location.href;
        const index = url.indexOf("#access_token=");
        if (index !== -1) {
          const token = url.substring(index + 14);
          if (isMounted.current) setAccessToken(token);
        }
      }
    };

    supabase.auth.onAuthStateChange(handlePasswordRecovery);

    return () => {
      isMounted.current = false;
    };
  }, []);

  // Handle form submission
  const handleSendEmail = async (event) => {
    event.preventDefault();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://dndgenerate.netlify.app/resetPassword",
    });

    if (error) {
      console.log(error);
    } else {
      setIsEmailSent(true);
    }
  };

  //Hanlde Reset
  const handlePasswordReset = async (event) => {
    event.preventDefault();
    const newPassword = event.target.password.value;

    const { data: user, error: getUserError } = await supabase.auth.api.getUser(accessToken);
    if (getUserError) {
      console.log(getUserError);
      return;
    }

    const { error: updateUserError } = await supabase.auth.api.updateUser(accessToken, {
      id: user.id,
      email: user.email,
      password: newPassword,
    });

    if (updateUserError) {
      console.log(updateUserError);
    } else {
      setIsPasswordReset(true);
    }
  };

  return (
    <>
    <div className={style.mainWrapper}>
      {isPasswordReset ? (
        <h3 className={style.formHeader}>Your password has been reset.</h3>
      ) : isResetLinkClicked ? (
        <form className={style.form} onSubmit={handlePasswordReset}>
          <h3 className={style.formHeader}>Reset Password for {email}</h3>
          <input
            className={style.formInput}
            type="password"
            name="password"
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
