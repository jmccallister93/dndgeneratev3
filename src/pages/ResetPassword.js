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
    const handlePasswordRecovery = async () => {
      const url = window.location.href;
      const index = url.indexOf("#access_token=");
      if (index !== -1) {
        const token = url.substring(index);
        if (isMounted.current) {
          setAccessToken(token);
          setIsResetLinkClicked(true);
        }
      }
    };

    handlePasswordRecovery();

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

  // Handle Reset
  const handlePasswordReset = async (event) => {
    event.preventDefault();
    const newPassword = event.target.password.value;

    const { data: user, error: getUserError } =
      await supabase.auth.api.getUser(accessToken);
    if (getUserError) {
      console.log(getUserError);
      return;
    }
    console.log("This is user " + user)

    const { error: updateUserError } = await supabase.auth.api.updateUser(
      accessToken,
      {
        id: user.id,
        email: user.email,
        password: newPassword,
      }
    );

    if (updateUserError) {
      console.log(updateUserError);
    } else {
      setIsPasswordReset(true);
    }
  };

  useEffect(() => {
    console.log("this is email " + email)
    console.log("this is access token " + accessToken)
    
  }, [email, accessToken])


  return (
    <>
      <div className={style.mainWrapper}>
        {isPasswordReset ? (
          <h3 className={style.formHeader}>Your password has been reset.</h3>
        ) : accessToken ? (
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
