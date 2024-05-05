import ProductCategoryRow from "./ProductCategoryRow.jsx"
import ProductRow from "./ProductRow.jsx"

const ProductTable = ({searchText, isStockOnly, products}) => {

  // const filteredProducts = products.filter((product) => {
  //   if (isStockOnly && !product.stocked) {
  //     return false
  //   }
  //   if (searchText && !product.name.includes(searchText)) {
  //     return false
  //   }
  //   return true
  // })

  const rows=[];
  let lastCategory = null;
  products.forEach((product) => {
    if(product.name.toLowerCase().indexOf(searchText.toLowerCase())===-1){
      return;
    }
    if(isStockOnly && !product.stocked){
      return;
    }
    if(product.category !== lastCategory){
      rows.push(<ProductCategoryRow category={product.category}
         key={product.category}/>)
      }
    rows.push(<ProductRow product={product} key={product.name}/> );
    lastCategory = product.category;
    
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default ProductTable
