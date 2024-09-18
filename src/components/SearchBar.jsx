export default function SearchBar() {
  return (
    <div className="search">
      <input type="search" placeholder="search for user" className="searchb" />
      <select className="searchb">
        <option>
          <p>filter</p>
        </option>
        <option>
          <p>filter by name</p>
        </option>
      </select>
    </div>
  );
}
