import React from 'react'
import { AuthAction, useAuthUser, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import { useAppContext } from '../../utils/context/state';

const User = () => {
    const AuthUser = useAuthUser();
    const { storeUser } = useAppContext();
    const logout = () => {
        storeUser();
        firebase.auth().signOut();
    }

    return (
        <div>
            <p>Your email is {AuthUser.email ? AuthUser.email : "unknown"}.</p>
            {AuthUser.email &&
                <button onClick={logout}>
                  LOGOUT
                </button>
            }
        </div>
    )
}

// Note that this is a higher-order function.
export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
    authPageURL: '/user/login',
})(User)