import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={searchValue} />
    </form>
  );
};
