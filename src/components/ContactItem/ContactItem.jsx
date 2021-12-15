import PropTypes from "prop-types";
import styles from "./ContactItem.module.css";

function ContactItem({ id, name, number, onDelete }) {
  return (
    <>
      <span className={styles.itemText}>{name}</span>
      <span className={styles.itemText}>{number}</span>
      <button
        type="button"
        className={styles.button}
        data-id={id}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
