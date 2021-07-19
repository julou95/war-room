import Header from './Header';
import styles from './Layout.module.css';

type Props = {
  children:
    | React.ReactChild
    | React.ReactChild[],
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}

export default Layout;