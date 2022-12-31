import { useState } from 'react';
import css from './SearchMovie.module.css';

export const SearchMovie = ({ nameSaver }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = event => {
    setSearchValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchValue.trim() === '') {
      return alert('Put something for search');
    }
    nameSaver(searchValue);
    reset();
  };

  const reset = () => {
    setSearchValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.searchForm}>
      <input type="text" onChange={handleChange} value={searchValue} className={css.searchInput}/>
    </form>
  );
};
