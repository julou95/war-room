import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.content}>
        <Link href={"/games"}>
            <a className={styles.card}>
                <Image src="https://via.placeholder.com/500x200" width={500} height={200} alt="Talisman" />
                <div className={styles.cardContent}>
                    <h3>Brettspiele</h3>
                    <div className={styles.arrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                        </svg>
                    </div>
                </div>
            </a>
        </Link>
        {/*<Link href={"/games"}>*/}
        {/*    <a className={styles.card}>*/}
        {/*        <Image src="https://via.placeholder.com/500x200" width={500} height={200} alt="Talisman" />*/}
        {/*        <div className={styles.cardContent}>*/}
        {/*            <h3>Brettspiele</h3>*/}
        {/*            <div className={styles.arrow}>*/}
        {/*                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">*/}
        {/*                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>*/}
        {/*                </svg>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </a>*/}
        {/*</Link>*/}
    </div>
  )
}
