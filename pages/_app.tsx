import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import initAuth from '../utils/initAuth';
import { AppWrapper } from '../utils/context/state';
import {AuthAction, useAuthUser, withAuthUser, withAuthUserTokenSSR} from "next-firebase-auth";

initAuth();

const MyApp = ({ Component, pageProps }: AppProps) => {
    const AuthUser = useAuthUser();
    return (
      <AppWrapper userData={AuthUser}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
  )
}
export const getServerSideProps = withAuthUserTokenSSR()()

// @ts-ignore
export default withAuthUser()(MyApp)
