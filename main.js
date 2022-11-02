// list of arrays
const mealProtein = ['Chicken', 'Salmon', 'Beef', 'Turkey', 'Lamb', 'Pork', 'Tuna', 'Cod']
const mealSides = ['Rice', 'Salad', 'Pasta', 'Noodles', 'Roast Vegetables', 'Bread', 'Risotto' ]
const mealCuisine = ['Italian', 'Chinese', 'French', 'Southern', 'Spanish', 'Jamaican', 'Japanse', 'Greek']

const chooseMeat = arr => {
    let i = Math.floor(Math.random() * arr.length)
    console.log(`The protein for this meal will be ${arr[i]}!`)
};