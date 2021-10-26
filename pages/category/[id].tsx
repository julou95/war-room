import Link from 'next/link';
import db from '../../utils/db';
import CategoryCard from '../../components/CategoryCard';
import BackLink from "../../components/BackLink";
import styles from './category.module.css';

type Props = {
    games: object[],
    categoryName: string,
}

type StaticContext = {
    params: {
        id: string,
    },
}

type Game = {
    name: string,
    id: string,
}

const Category = ({ games = [], categoryName = '' }: Props) => {
  return (
    <div className={styles.container}>
        <BackLink href={"/category"} text={"Kategorieübersicht"} />
        <h1>{categoryName}</h1>
        {games.length ?
            games.map((game: any) => {
                return <CategoryCard key={game.id} url={`/games/${game.id}`} name={game.name} />
            }) :
            <div>Keine Spiele gefunden...</div>
        }
    </div>
  );
}

export const getStaticPaths = async () => {
    const entries = await db.collection("games").get()
    const paths = entries.docs.map(entry => ({
        params: {
            id: entry.data().id
        }
    }));
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async (context: StaticContext) => {
    const { id } = context.params;
    const res = await db.collection("games").where("categoryID", "==", id).get();
    const games = res.docs.map(entry => entry.data());
    const categories = await db.collection("categories").where("id", "==", id).get();
    const categoryName = categories.docs.map(category => category.data())[0].name;
    return {
        props: {
            games,
            categoryName,
        }
    }
}

export default Category;