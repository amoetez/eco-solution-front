import styles from './Service.module.css';

export default function Service({ title, description, image }) {
  console.log(title);
  return (
    <div className={styles.cardBlog }>
      <div className="card-body ">
       
        <img className={styles.cards_img} src={image} />
        <h4 className={styles.card_title}>{title}</h4>
        <p className={styles.card_text} >{description}</p>
       
       
      </div>
      
   
    </div>
  );
}
