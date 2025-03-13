import supplementData from "./moreDrinkData"

const cleanDrinkData = (hotData, coldData) => {
  let cleanHotData, cleanIcedData
  if(hotData){
    cleanHotData = hotData.map(drink => {
      let finalHotDrink
      const foundHotDrink = supplementData.find(bev => bev.name === drink.title)
      const defaultHotDrink = supplementData.find(bev => bev.name === "default")
      foundHotDrink ? finalHotDrink = foundHotDrink : finalHotDrink = defaultHotDrink
      return {
                name: drink.title,
                description: drink.description, 
                ingredients: drink.ingredients.toString().split(",").join(" | "),
                type: "hot", 
                image: finalHotDrink.image,
                oneSize: finalHotDrink.oneSize,
                small: finalHotDrink.small,
                medium: finalHotDrink.medium,
                large: finalHotDrink.large
              }
    })
  } 
  if(coldData){
    cleanIcedData = coldData.map(drink => {
      let finalcedDrink
      const foundIcedDrink = supplementData.find(bev => bev.name === drink.title)
      const defaultIcedDrink = supplementData.find(bev => bev.name === "default")
      foundIcedDrink ? finalcedDrink = foundIcedDrink : finalcedDrink = defaultIcedDrink
      return {
                name: drink.title,
                description: drink.description, 
                ingredients: drink.ingredients.toString().split(",").join(" | "),
                type: "iced", 
                image: finalcedDrink.image,
                oneSize: finalcedDrink.oneSize,
                small: finalcedDrink.small,
                medium: finalcedDrink.medium,
                large: finalcedDrink.large
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