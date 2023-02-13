import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { SearchWrap, SearchForm, SearchFormInput } from './Searchbar.styled';

function Searchbar({ onSubmit }) {
  const [searchImg, setSearchImg] = useState('');

  function handleChange(e) {
    setSearchImg(e.target.value.toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (searchImg.trim() === '') {
      toast.warn('Sorry, the field is empty, please try again.', {
        theme: 'colored',
      });
      setSearchImg('');
      e.target.reset();
      return;
    }
    onSubmit(searchImg);
  }

  return (
    <SearchWrap>
      <SearchForm onSubmit={handleSubmit}>
        <IconButton aria-label="search" type="submit">
          <SearchIcon />
        </IconButton>

        <SearchFormInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchImg}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchWrap>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
