import Link from 'next/link';
import styles from '../../styles/Games.module.css';
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
        <Link href={`/games/${entry.id}`} key={entry.id}>
          <a className={styles.link}>
            {entry.name}
            <div className={styles.arrow}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </div>
          </a>
        </Link>
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