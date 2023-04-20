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
                smallPrice: foundHotDrink.smallPrice,
                mediumPrice: foundHotDrink.mediumPrice,
                largePrice: foundHotDrink.largePrice
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
                smallPrice: foundColdDrink.smallPrice,
                mediumPrice: foundColdDrink.mediumPrice,
                largePrice: foundColdDrink.largePrice
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