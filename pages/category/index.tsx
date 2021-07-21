import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import db from '../../utils/db';
import CategoryCard from "../../components/CategoryCard";

type Categories = {
    categoriesData: Category[],
}

type Category = {
    id: string,
    name: string,
}

const Home = ({ categoriesData }: Categories) => {
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <h1>Kategorien</h1>
                {categoriesData.map(entry => (
                    <CategoryCard key={entry.id} {...entry} />
                ))}
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const categories = await db.collection('categories').orderBy('name').get();
    const categoriesData = categories.docs.map(entry => ({
        id: entry.id,
        ...entry.data(),
    }));
    return {
        props: { categoriesData },
        revalidate: 10
    }
}

export default Home;