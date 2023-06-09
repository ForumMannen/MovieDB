/* eslint-disable react/prop-types */
function FilterDropdown({ filter, setFilter }) {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter({ filter: e.target.value })}
    >
      <option value="popular">Popular</option>
      <option value="top_rated">Top Rated</option>
      <option value="upcoming">Upcoming</option>
    </select>
  );
}

export default FilterDropdown;
