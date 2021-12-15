import PropTypes from "prop-types";
import styles from "./Filter.module.css";

function Filter({ filter = "", onFilter }) {
  return (
    <label htmlFor="name" className={styles.label}>
      Find contact by name
      <input
        type="text"
        name="name"
        className={styles.input}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={filter}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onInput={(e) => {
          onFilter(e.target.value);
        }}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
