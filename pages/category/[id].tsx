import Link from 'next/link';
import db from '../../utils/db';
import GameCard from '../../components/GameCard';
import BackLink from "../../components/BackLink";

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
    ID: string,
}

const Category = ({ games, categoryName }: Props) => {
  return (
    <div>
        <BackLink href={"/category"} text={"Kategorieübersicht"} />
        <h1>{categoryName}</h1>
        {games.length ?
            games.map((game: any) => {
                return <GameCard key={game.id} entry={{ name: game.name, id: game.ID }} />
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
            id: entry.data().ID
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
    console.log('games', games);
    return {
        props: {
            games,
            categoryName,
        }
    }
}

export default Category;