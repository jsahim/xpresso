import supplementData from "./moreDrinkData"

const cleanDrinkData = (hotData, coldData) => {
  let cleanHotData, cleanIcedData
  if(hotData){
    cleanHotData = hotData.map(drink => {
      const foundHotDrink = supplementData.find(bev => bev.name === drink.title)
      return {
                name: drink.title,
                description: drink.description, 
                ingredients: drink.ingredients,
                type: "hot", 
                image: foundHotDrink.image,
                oneSize: foundHotDrink.oneSize,
                small: foundHotDrink.small,
                medium: foundHotDrink.medium,
                large: foundHotDrink.large
              }
    })
  } 
  if(coldData){
    cleanIcedData = coldData.map(drink => {
      const foundColdDrink = supplementData.find(bev => bev.name === drink.title)
      return {
                name: drink.title,
                description: drink.description, 
                ingredients: drink.ingredients,
                type: "iced", 
                image: foundColdDrink.image,
                oneSize: foundColdDrink.oneSize,
                small: foundColdDrink.small,
                medium: foundColdDrink.medium,
                large: foundColdDrink.large
              }
    })
  }
  const joinedData = cleanHotData.concat(cleanIcedData)
  joinedData.forEach(datum => {
    datum['id'] = joinedData.indexOf(datum) + 1
  })
  return joinedData
}

export default cleanDrinkData