import Link from 'next/link';
import db from '../utils/db';
import styles from '../styles/Home.module.css';
import CategoryCard from '../components/CategoryCard';

const Home = () => {
  return (
    <div className={styles.content}>
        <CategoryCard name={"Kategorien"} url={"/category"} />
        <CategoryCard name={"Alle Spiele"} url={"/games"} />
    </div>
  )
}

export const getStaticProps = async () => {
    const topGames = await db.collection('games').orderBy('likes', 'desc').get();
    const topGamesData = topGames.docs.map(entry => ({
        id: entry.id,
        ...entry.data(),
    }));

    return {
        props: { topGamesData },
        revalidate: 10
    }
}

export default Home;