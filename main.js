// list of arrays
const mealProtein = ['Chicken', 'Salmon', 'Beef', 'Turkey', 'Lamb', 'Pork', 'Tuna', 'Cod']
const mealSides = ['Rice', 'Salad', 'Pasta', 'Noodles', 'Roast Vegetables', 'Bread', 'Risotto' ]
const mealCuisine = ['Italian', 'Chinese', 'French', 'Southern', 'Spanish', 'Jamaican', 'Japanse', 'Greek']

const chooseMeat = arr => {
    let i = Math.floor(Math.random() * arr.length)
    console.log(`The protein for this meal will be ${arr[i]}!`)
};

const chooseSides = arr => {
    let i = Math.floor(Math.random() * arr.length)
    console.log(`This should be accompanied by ${arr[i]}!`)
};

const chooseCuisine = arr => {
    let i = Math.floor(Math.random() * arr.length)
    console.log(`Your meal should be inspired by ${arr[i]} cuisine!`)
};

generateNewMeal = () => {
    chooseMeat(mealProtein);
    chooseSides(mealSides);
    chooseCuisine(mealCuisine);
}

generateNewMeal();