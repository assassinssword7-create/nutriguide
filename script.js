// =========================
// NUTRIGUIDE
// =========================

// VITAMIN INFORMATION

const vitaminInfo = {

    "Vitamin A": {
        title: "Vitamin A",
        text: "Vitamin A supports normal vision, immune function and growth. Food sources include carrots, sweet potatoes, spinach, eggs and dairy products."
    },

    "Vitamin B12": {
        title: "Vitamin B12",
        text: "Vitamin B12 helps support normal blood cells and nervous-system function. It is naturally found in foods such as fish, meat, eggs and dairy products."
    },

    "Vitamin C": {
        title: "Vitamin C",
        text: "Vitamin C supports normal immune function and collagen formation. Common sources include oranges, strawberries, kiwi, peppers and broccoli."
    },

    "Vitamin D": {
        title: "Vitamin D",
        text: "Vitamin D helps the body absorb calcium and supports normal bones and muscles. Sources include some fortified foods, eggs and oily fish."
    },

    "Vitamin E": {
        title: "Vitamin E",
        text: "Vitamin E acts as an antioxidant that helps protect cells from oxidative stress. Sources include almonds, sunflower seeds, peanuts and vegetable oils."
    },

    "Vitamin K": {
        title: "Vitamin K",
        text: "Vitamin K contributes to normal blood clotting and bone metabolism. Green leafy vegetables such as spinach, kale and broccoli are common sources."
    }

};


// SHOW VITAMIN INFORMATION

function showVitamin(vitamin) {

    const info = vitaminInfo[vitamin];

    if (!info) {
        return;
    }

    alert(
        info.title +
        "\n\n" +
        info.text
    );
}


// FOOD INFORMATION

const foodInfo = {

    eggs: "Eggs provide protein and contain nutrients such as vitamin B12, vitamin D and choline.",

    spinach: "Spinach contains nutrients including vitamin K, vitamin A, folate and vitamin C.",

    milk: "Milk provides protein and can provide calcium, vitamin B12 and vitamin D when fortified.",

    orange: "Oranges are well known as a source of vitamin C and also provide folate and potassium.",

    oranges: "Oranges are well known as a source of vitamin C and also provide folate and potassium.",

    almonds: "Almonds provide vitamin E, magnesium and healthy unsaturated fats.",

    banana: "Bananas provide carbohydrates and contain potassium and vitamin B6.",

    broccoli: "Broccoli contains vitamin C, vitamin K, folate and fiber.",

    salmon: "Salmon provides protein and is a source of vitamin D and vitamin B12.",

    yogurt: "Yogurt provides protein and calcium and may also contain vitamin B12."
};


// SEARCH FOOD

function searchFood() {

    const input = document
        .getElementById("foodSearch")
        .value
        .toLowerCase()
        .trim();

    const result = document.getElementById("foodResult");

    if (input === "") {

        result.innerHTML =
            "<p>Please enter a food to search.</p>";

        return;
    }

    if (foodInfo[input]) {

        result.innerHTML =
            "<h3>" +
            input.charAt(0).toUpperCase() +
            input.slice(1) +
            "</h3>" +
            "<p>" +
            foodInfo[input] +
            "</p>";

        return;
    }

    result.innerHTML =
        "<h3>Food not found</h3>" +
        "<p>Try searching for eggs, spinach, milk, oranges, almonds, banana, broccoli, salmon or yogurt.</p>";
}


// NUTRIGUIDE AI

function askNutriGuide() {

    const input = document
        .getElementById("aiInput")
        .value
        .toLowerCase()
        .trim();

    const response = document.getElementById("aiResponse");

    if (input === "") {

        response.innerHTML =
            "<p>Tell me what nutrition topic you want to learn about.</p>";

        return;
    }


    let answer = "";


    if (
        input.includes("tired") ||
        input.includes("energy") ||
        input.includes("fatigue")
    ) {

        answer =
            "<h3>Energy & Nutrition</h3>" +
            "<p>Energy levels can be influenced by many factors. " +
            "A balanced diet provides carbohydrates, protein, fats, vitamins and minerals that support normal body functions. " +
            "Foods such as whole grains, fruits, vegetables, eggs, dairy and beans can contribute to a balanced diet.</p>";

    }

    else if (
        input.includes("iron") ||
        input.includes("blood")
    ) {

        answer =
            "<h3>Iron</h3>" +
            "<p>Iron is an important mineral involved in normal red blood cell formation and oxygen transport. " +
            "Food sources include meat, beans, lentils, spinach and fortified cereals.</p>";

    }

    else if (
        input.includes("vitamin d") ||
        input.includes("bones")
    ) {

        answer =
            "<h3>Vitamin D & Bones</h3>" +
            "<p>Vitamin D helps the body absorb calcium and supports normal bones and muscles. " +
            "Some sources include fortified foods, eggs and oily fish.</p>";

    }

    else if (
        input.includes("vitamin c") ||
        input.includes("immune")
    ) {

        answer =
            "<h3>Vitamin C</h3>" +
            "<p>Vitamin C contributes to normal immune function and collagen formation. " +
            "Fruits and vegetables such as oranges, strawberries, kiwi and peppers are common sources.</p>";

    }

    else if (
        input.includes("protein") ||
        input.includes("muscle")
    ) {

        answer =
            "<h3>Protein</h3>" +
            "<p>Protein is an important nutrient used by the body for growth and maintenance. " +
            "Food sources include eggs, dairy, fish, meat, beans, lentils and nuts.</p>";

    }

    else {

        answer =
            "<h3>General Nutrition</h3>" +
            "<p>A balanced diet usually includes a variety of fruits, vegetables, grains, protein foods and healthy fats. " +
            "Different foods provide different nutrients, so variety is important.</p>";
    }


    response.innerHTML = answer;
}


// ENTER KEY FOR FOOD SEARCH

document
    .getElementById("foodSearch")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            searchFood();

        }

    });


// PAGE LOADED

console.log(
    "NutriGuide loaded successfully."
);
// =========================
// MEAL RECIPE GENERATOR
// =========================

const recipes = {

    breakfast: {
        title: "🥚 Veggie Egg Toast",
        ingredients: [
            "2 eggs",
            "1–2 slices of bread",
            "A handful of spinach",
            "1 small tomato",
            "A little olive oil",
            "A pinch of salt and pepper"
        ],
        steps: [
            "Wash and chop the vegetables.",
            "Cook the spinach and tomato in a pan with a little oil.",
            "Add the eggs and gently scramble everything together.",
            "Toast the bread.",
            "Serve the eggs over the toast."
        ]
    },

    lunch: {
        title: "🥗 Chicken & Rice Bowl",
        ingredients: [
            "Cooked rice",
            "Cooked chicken",
            "Cucumber",
            "Tomato",
            "Carrot",
            "A little yogurt or lemon dressing"
        ],
        steps: [
            "Place the cooked rice in a bowl.",
            "Add the cooked chicken.",
            "Chop the vegetables and add them.",
            "Add a small amount of yogurt or lemon dressing.",
            "Mix and serve."
        ]
    },

    dinner: {
        title: "🍝 Easy Veggie Pasta",
        ingredients: [
            "Pasta",
            "Tomato",
            "Bell pepper",
            "Spinach",
            "Olive oil",
            "A little cheese"
        ],
        steps: [
            "Cook the pasta according to the package instructions.",
            "Chop the vegetables.",
            "Cook the vegetables in a pan with a little oil.",
            "Add the cooked pasta and mix.",
            "Top with a little cheese and serve."
        ]
    },

    snack: {
        title: "🍓 Yogurt Fruit Bowl",
        ingredients: [
            "Plain yogurt",
            "Banana",
            "Strawberries",
            "A small handful of oats",
            "Nuts or seeds, if desired"
        ],
        steps: [
            "Add yogurt to a bowl.",
            "Slice the fruit.",
            "Add the fruit and oats.",
            "Add nuts or seeds if desired.",
            "Mix and enjoy."
        ]
    }

};


function showRecipe(mealType) {

    const recipe = recipes[mealType];

    if (!recipe) {
        return;
    }

    const result = document.getElementById("recipeResult");

    let ingredientsHTML = "<ul>";

    recipe.ingredients.forEach(function(item) {

        ingredientsHTML += "<li>" + item + "</li>";

    });

    ingredientsHTML += "</ul>";


    let stepsHTML = "<ol>";

    recipe.steps.forEach(function(step) {

        stepsHTML += "<li>" + step + "</li>";

    });

    stepsHTML += "</ol>";


    result.innerHTML =

        "<h3>" +
        recipe.title +
        "</h3>" +

        "<h4>Ingredients</h4>" +

        ingredientsHTML +

        "<h4>How to make it</h4>" +

        stepsHTML;

}
