function Search({ getQuery, query, onSubmit }) {
  return (
    <form className="search-form">
      <input className="form-control" type="text" />
      <button className="searchButton" type="submit">
        SEARCH
      </button>
    </form>
  );
}

export default Search;
