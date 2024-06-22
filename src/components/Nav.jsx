import Search from "./Search";

export default function Nav({ getQuery, query, onSearch }) {
  return (
    <nav className="navbar">
      <Search getQuery={getQuery} query={query} onSearch={onSearch} />
    </nav>
  );
}
