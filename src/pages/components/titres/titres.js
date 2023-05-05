import styles from '../../../styles/secondPageArticle.module.scss';

export default function Titres(props) {
    return (
        <div>
            <span className={styles.fancy}>{props.text}</span>
        </div>
    );}