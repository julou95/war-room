import db from '../../utils/db';
import GameCard from '../../components/GameCard';

type Props = {
  entriesData: Entry[],
}

type Entry = {
  id: string,
  name: string,
}

const Posts = (props: Props) => {
  const { entriesData } = props;
  return (
    <div>
      <h1>Alle Spiele</h1>
      {entriesData.map(entry => (
        <GameCard entry={entry} key={entry.id} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const entries = await db.collection('games').get();
  const entriesData = entries.docs.map(entry => ({
    id: entry.id,
    ...entry.data()
  }));
  return {
    props: { entriesData },
    revalidate: 10
  }
}

export default Posts;