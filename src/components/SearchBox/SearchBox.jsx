import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.searchBox}>
      <label>Find contacts by name</label>
      <input
        className={styles.search}
        type="text"
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default SearchBox;
