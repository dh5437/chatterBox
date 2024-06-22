function Search({ getQuery, query, onSearch }) {
  return (
    <form className="search-form" onSubmit={onSearch}>
      <input
        className="form-control"
        type="text"
        value={query}
        onChange={getQuery}
        placeholder="Search room"
      />
      <button className="searchButton" type="submit">
        SEARCH
      </button>
    </form>
  );
}

export default Search;
