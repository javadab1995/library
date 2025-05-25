import styles from './OtherBooks.module.css'
function OtherBooks({ book }) {
  
  return (
    <div className={styles.cart}>
      <div className={styles.bookProfile}>
       
      </div>
      <div>
        <HighlightText text={book.description} keyword={book.name} />
      </div>
    </div>
  );
     
      
}



const HighlightText = ({ text, keyword }) => {
  const parts = text.split(new RegExp(`(${keyword})`, "gi"));
  return (
    <p>
      {parts.map((part, index) =>
        part === keyword ? (
          <strong key={index}>{part}</strong>
        ) : (
          part
        )
      )}
    </p>
  );
};

export default OtherBooks
