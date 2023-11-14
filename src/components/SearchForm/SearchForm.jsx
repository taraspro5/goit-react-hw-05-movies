import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [setParams] = useSearchParams();

  const handleSubmit = value => {
    setParams({ toSeach: value });
  };

  return (
    <form>
      <input
        name="toSearch"
        type="text"
        className="input SearchForm-input"
        autoComplete="off"
        autoFocus
        placeholder="Search movie by name..."
        required
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};
