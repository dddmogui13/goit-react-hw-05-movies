import { useState } from 'react';
import css from './Form.module.css';

const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
    setQuery('');
  };
  const handleChange = e => {
    setQuery(e.target.value);
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        <input
          className={css.input}
          type="text"
          placeholder="Name movie"
          autoFocus
          onChange={handleChange}
          value={query}
        />
      </label>
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
