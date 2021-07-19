import Link from 'next/link';
import styles from './BackLink.module.css';

type Props = {
    href: string,
    text: string,
}

const BackLink = (props: Props) => {
  return (
    <Link href={props.href}>
      <a className={styles.backLink}>
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000">
            <path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"/>
        </svg>
        {props.text}
      </a>
    </Link>
  );
}

export default BackLink;