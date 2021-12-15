import PropTypes from "prop-types";
import styles from "./Contacts.module.css";

import ContactItem from "../ContactItem/ContactItem";

function Contacts({ listContacts = [], onDelete }) {
  return (
    <ul className={styles.list}>
      {listContacts.map((el) => (
        <li className={styles.item} key={el.id}>
          <ContactItem
            id={el.id}
            name={el.name}
            number={el.number}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  listContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
