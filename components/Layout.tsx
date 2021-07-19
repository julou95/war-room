import Header from './Header';

type Props = {
  children:
    | React.ReactChild
    | React.ReactChild[],
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Layout;