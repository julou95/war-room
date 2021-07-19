import Link from 'next/link';
import styles from './GameCard.module.css';

type Entry = {
  entry: {
    name: string,
    id: string,
  }
}

const GameCard = ({ entry }: Entry) => {
    console.log('entry', entry)
  return (
      <Link href={`/games/${entry.id}`}>
          <a className={styles.link}>
              {entry.name}
              <div className={styles.arrow}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
              </div>
          </a>
      </Link>
  );
}

export default GameCard;