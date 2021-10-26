import db from '../../utils/db';
import CategoryCard from '../../components/CategoryCard';
import styles from './games.module.css';
type Props = {
  entriesData: Entry[],
}

type Entry = {
  id: string,
  name: string,
  url: string,
}

const Posts = (props: Props) => {
  const { entriesData } = props;
  return (
    <div className={styles.container}>
      <h1>Alle Spiele</h1>
      {entriesData.map(entry => (
        <CategoryCard name={entry.name} url={entry.url} key={entry.id} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const entries = await db.collection('games').get();
  const entriesData = entries.docs.map(entry => ({
    id: entry.id,
    ...entry.data(),
    url: `/games/${entry.id}`
  }));
  return {
    props: { entriesData },
    revalidate: 10
  }
}

export default Posts;