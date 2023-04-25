import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
import ns from "../stylesheets/Note.module.scss";
import { supabase } from "../config/supabaseClient";

const ResetPasswordRedirect = (props) => {
//     const [email, setEmail] = useState("");

//     // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const { data, error } = await supabase.auth.api.updateUser(email, {
//       password: event.target.password.value,
//     }, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     });
//     if (error) {
//       console.log(error);
//     } else {
//       setIsEmailSent(true);
//     }
//   };
//     return ( <> 
//         <div className={style.mainWrapper}>
          
//             <form className={style.form} onSubmit={handleSubmit}>
//               <h3 className={style.formHeader}>Reset Password for {email}</h3>
//               <input
//                 className={style.formInput}
//                 type="password"
//                 placeholder="New password"
//               />
//               <button className={style.formButton} type="submit">
//                 Set New Password
//               </button>
//             </form>
//             </div>
//             </> );
}
 
export default ResetPasswordRedirect;