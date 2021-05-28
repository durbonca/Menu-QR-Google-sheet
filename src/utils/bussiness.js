const transformStringToObject = (str: string) => {
    let productPriorities = JSON.parse("{}")
    if (
      str !== "" &&
      str !== undefined &&
      str !== null &&
      typeof str !== "object"
    ) {
      const tmp = JSON.parse(str)
      // JSON.parse needs to be called twice depending on how the string is formated
      if (typeof tmp === "string") {
        productPriorities = JSON.parse(tmp)
      } else {
        productPriorities = tmp
      }
    }
    return productPriorities
  }

export const sanitizedFatherCategories = allCat => {
  const sortedProducts = allCat.map(cat => {
    let product_priorities = transformStringToObject(cat.product_priorities)
    
    if (product_priorities === null) product_priorities = {}

    const sortedProductArray = cat.products.sort((a, b) => {
      let tmp_a = product_priorities[a.product_id]
      let tmp_b = product_priorities[b.product_id]
      if (tmp_a === undefined) tmp_a = 0
      if (tmp_b === undefined) tmp_b = 0
      return tmp_b - tmp_a
    }, product_priorities)
    return { ...cat, products: sortedProductArray, product_priorities }
  })

  const sortedCat = sortedProducts.sort((a, b) => {
    return b.priority - a.priority
  })

  const allParents = sortedCat.filter(category => {
    if (category.parent_category === null) {
      // replace child_cats for the one in sorted (with products)
      // eslint-disable-next-line
      category.child_categories = sortedCat.filter(cat => {
        if (cat.parent_category && cat.parent_category.slug === category.slug)
          return cat
      })
      return category
    } else return null
  })
  return allParents
}

export const sanitizedCategories = Items => {

    const categories = []
    const arrayItemsByCat = []

    // Check if the categories is active
    const activeItems = Items.filter( item => item.activo === "TRUE")

    //extract all the categories with active items
    activeItems.map( item => {
      return categories.includes(item.categoria) ? null : categories.push(item.categoria)
    })
    
    //fill all the array by category
    categories.map( categoryName => {
       let itemsGroup = activeItems.filter(item => categoryName === item.categoria)
       let objectArray = {categoryName: categoryName, items: itemsGroup}
       arrayItemsByCat.push(objectArray)
       return null
      })

    return arrayItemsByCat
  }