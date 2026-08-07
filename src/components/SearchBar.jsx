export default function SearchBar({ className = '' }) {
  return (
    <form action="/search/" method="get" role="search" className={`search-bar ${className}`}>
      <span aria-hidden="true" className="search-bar-icon">🔍</span>
      <label htmlFor="header-search-input" className="sr-only">
        Search products
      </label>
      <input
        id="header-search-input"
        type="search"
        name="q"
        placeholder="Search grills, smokers, accessories…"
        autoComplete="off"
      />
      <button type="submit" className="search-bar-submit">
        Search
      </button>
    </form>
  )
}
