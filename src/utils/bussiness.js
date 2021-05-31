export const sanitizedCategories = Items => {
  const categories = []
  const arrayItemsByCat = []

  // Check if the categories is active
  const activeItems = Items.filter( item => item.activo === "VERDADERO")

  //extract all the categories with active items
  activeItems.map( item => {
    return categories.includes(item.categoria) ? null : categories.push(item.categoria)
  })

  //fill all the array by category
  categories.map( categoryName => {
    
     let itemsGroup = activeItems.filter(item => categoryName === item.categoria)

     let descripcion = ''
     if(categoryName.includes('|')){
       descripcion = categoryName.split('|')[1]
       categoryName = categoryName.split('|')[0]
     }

     let objectArray = {categoryName: categoryName, descripcion: descripcion, items: itemsGroup}
     arrayItemsByCat.push(objectArray)
     return null
    })
  return arrayItemsByCat
}