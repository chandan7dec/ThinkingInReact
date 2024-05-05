

const SearchBar = ({searchText, inStockOnly,onSearchTextChange, onInStockChange}) => {
  return (
    <form>
      <input type="text" placeholder="Serach ..." 
      value={searchText} onChange={e => onSearchTextChange(e.target.value)} />
      <div>
        <input  id="checkbox" type="checkbox" 
        value={inStockOnly}
        onChange={e => onInStockChange(e.target.checked)}
        />
        <label htmlFor="checkbox">Show only in Stock</label>
      </div>
      
    </form>
  )
}

export default SearchBar
