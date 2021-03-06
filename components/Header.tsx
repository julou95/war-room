import Link from 'next/link';
import styles from './Header.module.css';
import { useAppContext } from '../utils/context/state';

const Header = () => {
    const { user } = useAppContext();
    return (
    <div className={styles.headerContainer}>
      <div className={styles.headerInner}>
          <Link href={"/"}>
            <a className={styles.homeLink}>
              <svg className={styles.logo} height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg" fill="#f5f5f5">
                <path d="m476.927 124.764-215.965-123.446c-3.074-1.758-6.851-1.758-9.925 0l-215.964 123.446c-3.115 1.78-5.038 5.094-5.038 8.682v241.944c0 3.549 1.881 6.832 4.942 8.627l215.965 126.61c1.562.916 3.31 1.373 5.058 1.373s3.496-.458 5.058-1.373l215.965-126.61c3.062-1.795 4.942-5.078 4.942-8.627v-241.945c0-3.588-1.923-6.901-5.038-8.681zm-426.892 25.861 73.205 41.573-73.205 141.976zm250.965 47.619h57.15l-102.15 176.929-102.15-176.929h57.15c5.523 0 10-4.477 10-10s-4.477-10-10-10h-55.729l100.729-150.283 100.729 150.283h-55.729c-5.523 0-10 4.477-10 10s4.477 10 10 10zm-63.313 185.21-181.964-16.669 81.302-157.681zm137.287-174.351 81.303 157.682-181.964 16.669zm3.633-34.141-90.576-135.135 163.734 93.59zm-245.214.001-73.157-41.546 163.734-93.59zm112.607 229.336v80.247l-162.23-95.108zm20 0 162.23-14.861-162.23 95.108zm122.76-212.102 73.205-41.573v183.55z"/>
                <circle cx="256" cy="188.244" r="10"/>
              </svg>
              <div className={styles.logoText}>
                PicoBellum
              </div>
            </a>
          </Link>
          <Link href={'/user'}>
              <a className={styles.profileLink}>
                  {user.loggedIn ?
                    <div>{user.username}</div> :
                    <div>Login</div>
                  }
                  <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px">
                      {user.loggedIn ?
                        <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z" fill="#f5f5f5"/>:
                        <path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z" fill="#f5f5f5" />
                      }
                  </svg>
              </a>
          </Link>
      </div>
    </div>
  )
}

export default Header