function FilterBar({ options, active, onSelect }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter by technology">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          className={opt === active ? 'filter-btn active' : 'filter-btn'}
          aria-pressed={opt === active}
          onClick={() => onSelect(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
