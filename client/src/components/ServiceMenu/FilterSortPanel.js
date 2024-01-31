import React from "react"

const FilterSortPanel = ({ onFilterChange, onSortChange }) => {
  return (
    <div>
      <h3>Filter & Sort</h3>
      <div>
        <label htmlFor="filter">Filter by Category:</label>
        <input
          type="text"
          id="filter"
          name="filter"
          placeholder="Enter category name"
          onChange={(e) => onFilterChange(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          name="sort"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="duration-asc">Duration: Short to Long</option>
          <option value="duration-desc">Duration: Long to Short</option>
        </select>
      </div>
    </div>
  )
}

export default FilterSortPanel
