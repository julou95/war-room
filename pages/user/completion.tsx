import { useRef } from 'react';
import db from '../../utils/db';
import styles from "./login.module.css";

const Completion = ({}) => {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    // console.log('router', router);

    const submitForm = () => {
        db.collection('users').doc().set({
            // @ts-ignore
            firstName: firstNameRef.current.value,
            // @ts-ignore
            lastName: lastNameRef.current.value,
        }).then(res => {
            console.log('LJ - res:', res);
        })
    }
  return (
      <div className={styles.loginContainer}>
          <h1>Registrierung abschliessen:</h1>
          <div className={styles.inputContainer}>
              <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <input className={styles.email} type="text" ref={firstNameRef} placeholder="Vorname" />
          </div>
          <div className={styles.inputContainer}>
              <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
              <input className={styles.password} type="text" ref={lastNameRef} placeholder="Nachname" />
          </div>
          <button className={styles.button} onClick={submitForm}>Absenden</button>
      </div>
  );
}

export default Completion;