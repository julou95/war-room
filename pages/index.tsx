import Link from 'next/link';
import db from '../utils/db';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.content}>
        HOLA FROM DEV!
        <Link href={'/category'}><a>Kategorien</a></Link>
        <Link href={'/games'}><a>Alle Spiele</a></Link>
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