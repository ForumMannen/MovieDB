const FilterDropdown = () => {
  return (
    <div>
      <select name="filterDropdown" id="filterDropdown">
        <option value="popular">Popular</option>
        <option value="toprated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
      </select>
    </div>
  );
};

export default FilterDropdown;
