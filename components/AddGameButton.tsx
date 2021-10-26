import {useRouter} from "next/router";
import styles from './AddGameButton.module.css'
const AddGameButton = () => {
    const router = useRouter();
    return (
    <div className={styles.button} onClick={() => router.push('/admin/post')}>
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#ffffff">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
    </div>
  );
}

export default AddGameButton;