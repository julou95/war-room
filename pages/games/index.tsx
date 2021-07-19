import Link from 'next/link'
import db from '../../utils/db';

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
      <h1>Spiele</h1>
      {entriesData.map(entry => (
        <div key={entry.id}>
          <Link href={`/games/${entry.id}`}>
            <a>{entry.name}</a>
          </Link>
          <br />
        </div>
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