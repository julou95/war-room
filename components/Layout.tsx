import Header from './Header';
import styles from './Layout.module.css';
import AddGameButton from './AddGameButton';

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
      <AddGameButton />
    </div>
  )
}

export default Layout;