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
     let cl1 = ''
     let cl2 = ''
     if(categoryName.includes('|')){
       cl2 = categoryName.split('|')[3]
       cl1 = categoryName.split('|')[2]
       descripcion = categoryName.split('|')[1]
       categoryName = categoryName.split('|')[0]
     }

     let objectArray = {categoryName: categoryName, descripcion: descripcion, cl1: cl1, cl2: cl2 ,items: itemsGroup}
     arrayItemsByCat.push(objectArray)
     return null
    })
  return arrayItemsByCat
}