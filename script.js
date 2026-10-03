// =========================
// NUTRIGUIDE
// =========================


// =========================
// VITAMIN INFORMATION
// =========================

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


// =========================
// FOOD INFORMATION
// =========================

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


// =========================
// NUTRIGUIDE AI
// =========================

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


// =========================
// RECIPE DATABASE
// =========================

const recipeData = [

    {
        id: 1,
        title: "🥚 Veggie Egg Toast",
        category: "breakfast",
        time: "15 min",
        difficulty: "Easy",
        ingredients: [
            "2 eggs",
            "1–2 slices of bread",
            "Spinach",
            "1 small tomato",
            "A little olive oil"
        ],
        steps: [
            "Wash and chop the vegetables.",
            "Cook the spinach and tomato in a pan.",
            "Add the eggs and scramble gently.",
            "Toast the bread.",
            "Serve the eggs over the toast."
        ]
    },

    {
        id: 2,
        title: "🥗 Chicken & Rice Bowl",
        category: "lunch",
        time: "25 min",
        difficulty: "Easy",
        ingredients: [
            "Cooked rice",
            "Cooked chicken",
            "Cucumber",
            "Tomato",
            "Carrot"
        ],
        steps: [
            "Place the rice in a bowl.",
            "Add the cooked chicken.",
            "Add the chopped vegetables.",
            "Add a little yogurt or lemon dressing.",
            "Mix and serve."
        ]
    },

    {
        id: 3,
        title: "🍝 Easy Veggie Pasta",
        category: "dinner",
        time: "25 min",
        difficulty: "Easy",
        ingredients: [
            "Pasta",
            "Tomato",
            "Bell pepper",
            "Spinach",
            "A little cheese"
        ],
        steps: [
            "Cook the pasta according to the package instructions.",
            "Chop the vegetables.",
            "Cook the vegetables in a pan.",
            "Add the pasta.",
            "Mix and serve."
        ]
    },

    {
        id: 4,
        title: "🍓 Yogurt Fruit Bowl",
        category: "snacks",
        time: "5 min",
        difficulty: "Very Easy",
        ingredients: [
            "Plain yogurt",
            "Banana",
            "Strawberries",
            "Oats"
        ],
        steps: [
            "Add yogurt to a bowl.",
            "Slice the fruit.",
            "Add the fruit and oats.",
            "Mix and enjoy."
        ]
    },

    {
        id: 5,
        title: "🥞 Banana Pancakes",
        category: "breakfast",
        time: "20 min",
        difficulty: "Easy",
        ingredients: [
            "1 ripe banana",
            "1 egg",
            "1/2 cup flour",
            "1/2 teaspoon baking powder",
            "A little milk"
        ],
        steps: [
            "Mash the banana.",
            "Add the egg and mix.",
            "Add flour and baking powder.",
            "Add a little milk and mix.",
            "Cook small pancakes in a pan on both sides.",
            "Serve with fruit."
        ]
    },

    {
        id: 6,
        title: "🌯 Chicken Wrap",
        category: "lunch",
        time: "15 min",
        difficulty: "Easy",
        ingredients: [
            "1 tortilla wrap",
            "Cooked chicken",
            "Lettuce",
            "Tomato",
            "Cucumber",
            "Yogurt dressing"
        ],
        steps: [
            "Place the tortilla on a clean surface.",
            "Add the cooked chicken.",
            "Add lettuce, tomato and cucumber.",
            "Add a little yogurt dressing.",
            "Fold and roll the wrap.",
            "Serve."
        ]
    },

    {
        id: 7,
        title: "🍚 Vegetable Fried Rice",
        category: "vegetarian",
        time: "20 min",
        difficulty: "Easy",
        ingredients: [
            "Cooked rice",
            "Carrot",
            "Peas",
            "Bell pepper",
            "Spring onion",
            "A little cooking oil"
        ],
        steps: [
            "Chop the vegetables.",
            "Heat a pan with a little oil.",
            "Cook the vegetables.",
            "Add the cooked rice.",
            "Mix everything together.",
            "Cook for a few more minutes and serve."
        ]
    },

    {
        id: 8,
        title: "🥪 Cheese & Tomato Sandwich",
        category: "snacks",
        time: "5 min",
        difficulty: "Very Easy",
        ingredients: [
            "2 slices of bread",
            "Cheese",
            "Tomato slices",
            "Lettuce",
            "A little spread"
        ],
        steps: [
            "Spread a little spread on the bread.",
            "Add cheese.",
            "Add tomato and lettuce.",
            "Place the second slice of bread on top.",
            "Cut and serve."
        ]
    },

    {
        id: 9,
        title: "🍲 Chicken Vegetable Soup",
        category: "dinner",
        time: "35 min",
        difficulty: "Medium",
        ingredients: [
            "Cooked chicken",
            "Carrot",
            "Potato",
            "Peas",
            "Onion",
            "Water or broth"
        ],
        steps: [
            "Wash and chop the vegetables.",
            "Add vegetables and broth to a pot.",
            "Bring to a gentle boil.",
            "Cook until the vegetables are tender.",
            "Add the cooked chicken.",
            "Heat through and serve."
        ]
    },

    {
        id: 10,
        title: "🥑 Avocado Toast",
        category: "breakfast",
        time: "10 min",
        difficulty: "Very Easy",
        ingredients: [
            "1–2 slices of bread",
            "1 ripe avocado",
            "Tomato slices",
            "A little lemon juice",
            "A pinch of salt and pepper"
        ],
        steps: [
            "Toast the bread.",
            "Mash the avocado.",
            "Add a little lemon juice.",
            "Spread avocado over the toast.",
            "Add tomato slices.",
            "Season lightly and serve."
        ]
    },

    {
        id: 11,
        title: "🍅 Tomato Pasta",
        category: "vegetarian",
        time: "25 min",
        difficulty: "Easy",
        ingredients: [
            "Pasta",
            "Tomatoes",
            "Garlic",
            "Olive oil",
            "A little cheese"
        ],
        steps: [
            "Cook the pasta.",
            "Chop the tomatoes.",
            "Cook the tomatoes with a little olive oil.",
            "Add the cooked pasta.",
            "Mix everything together.",
            "Add a little cheese and serve."
        ]
    },

    {
        id: 12,
        title: "🍌 Banana Oat Bowl",
        category: "breakfast",
        time: "10 min",
        difficulty: "Very Easy",
        ingredients: [
            "Oats",
            "Milk",
            "1 banana",
            "Cinnamon",
            "A few nuts or seeds"
        ],
        steps: [
            "Add oats and milk to a bowl or saucepan.",
            "Prepare according to the oats package instructions.",
            "Slice the banana.",
            "Add banana and cinnamon.",
            "Top with nuts or seeds if desired.",
            "Serve."
        ]
    },

    {
        id: 13,
        title: "🍎 Apple Cinnamon Oats",
        category: "breakfast",
        time: "10 min",
        difficulty: "Easy",
        ingredients: [
            "Oats",
            "Milk",
            "1 apple",
            "Cinnamon",
            "A small handful of nuts"
        ],
        steps: [
            "Add oats and milk to a saucepan.",
            "Prepare according to the oats package instructions.",
            "Chop the apple.",
            "Add the apple and cinnamon.",
            "Top with nuts and serve."
        ]
    },

    {
        id: 14,
        title: "🍗 Chicken Rice Plate",
        category: "lunch",
        time: "30 min",
        difficulty: "Easy",
        ingredients: [
            "Cooked chicken",
            "Cooked rice",
            "Cucumber",
            "Tomato",
            "Carrot"
        ],
        steps: [
            "Prepare the cooked rice.",
            "Slice the vegetables.",
            "Place rice on a plate.",
            "Add the cooked chicken.",
            "Add the vegetables and serve."
        ]
    },

    {
        id: 15,
        title: "🌮 Chicken Tacos",
        category: "lunch",
        time: "20 min",
        difficulty: "Easy",
        ingredients: [
            "Tortillas",
            "Cooked chicken",
            "Lettuce",
            "Tomato",
            "Cheese",
            "Yogurt or mild sauce"
        ],
        steps: [
            "Warm the tortillas.",
            "Slice the cooked chicken.",
            "Chop the vegetables.",
            "Add chicken and vegetables to each tortilla.",
            "Add a little cheese and sauce.",
            "Fold and serve."
        ]
    },

    {
        id: 16,
        title: "🥔 Baked Potato Bowl",
        category: "vegetarian",
        time: "35 min",
        difficulty: "Easy",
        ingredients: [
            "Potatoes",
            "Yogurt",
            "Sweet corn",
            "Cucumber",
            "Cheese"
        ],
        steps: [
            "Wash the potatoes.",
            "Bake until tender.",
            "Cut the potatoes open.",
            "Add yogurt and vegetables.",
            "Top with a little cheese.",
            "Serve."
        ]
    },

    {
        id: 17,
        title: "🍜 Vegetable Noodles",
        category: "dinner",
        time: "20 min",
        difficulty: "Easy",
        ingredients: [
            "Noodles",
            "Carrot",
            "Bell pepper",
            "Cabbage",
            "Spring onion"
        ],
        steps: [
            "Cook the noodles according to the package instructions.",
            "Chop the vegetables.",
            "Cook the vegetables in a pan.",
            "Add the noodles.",
            "Mix everything together.",
            "Serve warm."
        ]
    },

    {
        id: 18,
        title: "🍉 Fruit Salad",
        category: "snacks",
        time: "10 min",
        difficulty: "Very Easy",
        ingredients: [
            "Watermelon",
            "Apple",
            "Banana",
            "Orange",
            "Strawberries"
        ],
        steps: [
            "Wash the fruits.",
            "Cut the fruits into small pieces.",
            "Place everything in a bowl.",
            "Mix gently.",
            "Serve."
        ]
    },

    {
        id: 19,
        title: "🥣 Berry Yogurt Bowl",
        category: "breakfast",
        time: "5 min",
        difficulty: "Very Easy",
        ingredients: [
            "Plain yogurt",
            "Strawberries",
            "Blueberries",
            "Oats",
            "Banana"
        ],
        steps: [
            "Add yogurt to a bowl.",
            "Wash the berries.",
            "Slice the banana.",
            "Add the fruits and oats.",
            "Mix and serve."
        ]
    },

    {
        id: 20,
        title: "🍛 Simple Chicken Curry",
        category: "dinner",
        time: "40 min",
        difficulty: "Medium",
        ingredients: [
            "Cooked chicken",
            "Tomato",
            "Onion",
            "Plain yogurt",
            "Mild curry spices",
            "A little cooking oil"
        ],
        steps: [
            "Chop the onion and tomato.",
            "Cook the onion in a little oil.",
            "Add the tomato and mild spices.",
            "Add the cooked chicken.",
            "Stir in a little yogurt.",
            "Cook gently until heated through.",
            "Serve with rice."
        ]
    },

    {
        id: 21,
        title: "🥕 Roasted Vegetable Bowl",
        category: "vegetarian",
        time: "35 min",
        difficulty: "Easy",
        ingredients: [
            "Carrot",
            "Potato",
            "Bell pepper",
            "Broccoli",
            "Olive oil"
        ],
        steps: [
            "Wash and chop the vegetables.",
            "Place them on a baking tray.",
            "Add a little olive oil.",
            "Roast until tender.",
            "Let them cool slightly.",
            "Serve."
        ]
    },

    {
        id: 22,
        title: "🍳 Vegetable Omelette",
        category: "breakfast",
        time: "15 min",
        difficulty: "Easy",
        ingredients: [
            "2 eggs",
            "Tomato",
            "Bell pepper",
            "Spinach",
            "A little cheese"
        ],
        steps: [
            "Chop the vegetables.",
            "Beat the eggs in a bowl.",
            "Cook the vegetables briefly in a pan.",
            "Pour in the eggs.",
            "Cook until set.",
            "Add a little cheese and fold."
        ]
    },

    {
        id: 23,
        title: "🥙 Hummus Veggie Wrap",
        category: "vegetarian",
        time: "10 min",
        difficulty: "Very Easy",
        ingredients: [
            "Flatbread or tortilla",
            "Hummus",
            "Cucumber",
            "Tomato",
            "Lettuce",
            "Carrot"
        ],
        steps: [
            "Spread hummus over the flatbread.",
            "Chop the vegetables.",
            "Add the vegetables.",
            "Roll the wrap.",
            "Cut in half and serve."
        ]
    },

    {
        id: 24,
        title: "🍲 Lentil Soup",
        category: "vegetarian",
        time: "40 min",
        difficulty: "Medium",
        ingredients: [
            "Lentils",
            "Carrot",
            "Onion",
            "Tomato",
            "Water or broth"
        ],
        steps: [
            "Wash the lentils.",
            "Chop the vegetables.",
            "Add everything to a pot with water or broth.",
            "Bring to a gentle boil.",
            "Cook until the lentils are tender.",
            "Serve warm."
        ]
    },

    {
        id: 25,
        title: "🥪 Chicken Cheese Toast",
        category: "snacks",
        time: "10 min",
        difficulty: "Very Easy",
        ingredients: [
            "Bread",
            "Cooked chicken",
            "Cheese",
            "Tomato",
            "Lettuce"
        ],
        steps: [
            "Place chicken and cheese between two slices of bread.",
            "Toast until the bread is crisp and the cheese melts.",
            "Add tomato and lettuce.",
            "Cut and serve."
        ]
    },

    {
        id: 26,
        title: "🍚 Egg Fried Rice",
        category: "lunch",
        time: "20 min",
        difficulty: "Easy",
        ingredients: [
            "Cooked rice",
            "2 eggs",
            "Carrot",
            "Peas",
            "Spring onion"
        ],
        steps: [
            "Chop the vegetables.",
            "Cook the vegetables in a pan.",
            "Add the eggs and scramble.",
            "Add the cooked rice.",
            "Mix everything together.",
            "Cook for a few minutes and serve."
        ]
    },

    {
        id: 27,
        title: "🥗 Chickpea Salad",
        category: "vegetarian",
        time: "10 min",
        difficulty: "Very Easy",
        ingredients: [
            "Cooked chickpeas",
            "Cucumber",
            "Tomato",
            "Lettuce",
            "Lemon juice"
        ],
        steps: [
            "Wash and chop the vegetables.",
            "Add chickpeas to a bowl.",
            "Add the vegetables.",
            "Add a little lemon juice.",
            "Mix and serve."
        ]
    },

    {
        id: 28,
        title: "🍝 Chicken Pasta",
        category: "dinner",
        time: "30 min",
        difficulty: "Easy",
        ingredients: [
            "Pasta",
            "Cooked chicken",
            "Tomato",
            "Spinach",
            "A little cheese"
        ],
        steps: [
            "Cook the pasta according to the package instructions.",
            "Chop the chicken and vegetables.",
            "Cook the vegetables in a pan.",
            "Add the cooked chicken.",
            "Add the pasta and mix.",
            "Top with a little cheese."
        ]
    },

    {
        id: 29,
        title: "🥞 Apple Oat Pancakes",
        category: "breakfast",
        time: "20 min",
        difficulty: "Easy",
        ingredients: [
            "Oats",
            "1 apple",
            "1 egg",
            "Milk",
            "Cinnamon"
        ],
        steps: [
            "Crush the oats into a coarse flour.",
            "Grate the apple.",
            "Mix oats, apple, egg, milk and cinnamon.",
            "Heat a pan.",
            "Cook small pancakes on both sides.",
            "Serve with fruit."
        ]
    },

    {
        id: 30,
        title: "🥦 Broccoli Rice Bowl",
        category: "vegetarian",
        time: "20 min",
        difficulty: "Easy",
        ingredients: [
            "Cooked rice",
            "Broccoli",
            "Carrot",
            "Corn",
            "A little yogurt dressing"
        ],
        steps: [
            "Steam or cook the broccoli until tender.",
            "Chop the carrot.",
            "Add rice to a bowl.",
            "Add broccoli, carrot and corn.",
            "Add a little yogurt dressing.",
            "Mix and serve."
        ]
    }

];


// =========================
// DISPLAY RECIPES
// =========================

let currentRecipeList = recipeData;
let visibleRecipeCount = 20;
const recipesPerLoad = 20;

function displayRecipes(recipes) {

    currentRecipeList = recipes;
    visibleRecipeCount = 20;

    renderVisibleRecipes();
}


function renderVisibleRecipes() {

    const gallery =
        document.getElementById("recipeGallery");

    const loadMoreButton =
        document.getElementById("loadMoreButton");

    if (!gallery) {
        return;
    }

    gallery.innerHTML = "";

    if (currentRecipeList.length === 0) {

        gallery.innerHTML =
            "<p>No recipes found. Try another search.</p>";

        if (loadMoreButton) {
            loadMoreButton.style.display = "none";
        }

        return;
    }

    const recipesToShow =
        currentRecipeList.slice(
            0,
            visibleRecipeCount
        );


    recipesToShow.forEach(function(recipe) {

        const card =
            document.createElement("div");

        card.className = "recipe-card";

        const emoji =
            recipe.title.split(" ")[0];

        card.innerHTML =

            "<div class='recipe-card-image'>" +
            emoji +
            "</div>" +

            "<div class='recipe-card-content'>" +

            "<span class='recipe-category'>" +
            recipe.category.toUpperCase() +
            "</span>" +

            "<h3>" +
            recipe.title +
            "</h3>" +

            "<div class='recipe-meta'>" +
            "<span>⏱ " + recipe.time + "</span>" +
            "<span>⭐ " + recipe.difficulty + "</span>" +
            "</div>" +

            "<button onclick='openRecipe(" +
            recipe.id +
            ")'>" +
            "View Recipe →" +
            "</button>" +

            "</div>";

        gallery.appendChild(card);

    });


    if (loadMoreButton) {

        if (
            visibleRecipeCount >=
            currentRecipeList.length
        ) {

            loadMoreButton.style.display =
                "none";

        } else {

            loadMoreButton.style.display =
                "block";

        }

    }

}


function loadMoreRecipes() {

    visibleRecipeCount += recipesPerLoad;

    renderVisibleRecipes();

}

}


// =========================
// OPEN RECIPE
// =========================

function openRecipe(id) {

    const recipe = recipeData.find(function(item) {

        return item.id === id;

    });

    if (!recipe) {
        return;
    }

    const gallery = document.getElementById("recipeGallery");

    const details = document.getElementById("recipeDetails");

    if (!gallery || !details) {
        return;
    }

    gallery.style.display = "none";

    details.style.display = "block";


    let ingredientsHTML = "<ul>";

    recipe.ingredients.forEach(function(item) {

        ingredientsHTML +=
            "<li>" + item + "</li>";

    });

    ingredientsHTML += "</ul>";


    let stepsHTML = "<ol>";

    recipe.steps.forEach(function(step) {

        stepsHTML +=
            "<li>" + step + "</li>";

    });

    stepsHTML += "</ol>";


    details.innerHTML =

        "<button class='back-button' onclick='backToRecipes()'>" +
        "← Back to Recipes" +
        "</button>" +

        "<div class='recipe-detail-card'>" +

        "<span class='recipe-category'>" +
        recipe.category.toUpperCase() +
        "</span>" +

        "<h2>" +
        recipe.title +
        "</h2>" +

        "<div class='recipe-meta'>" +
        "<span>⏱ " + recipe.time + "</span>" +
        "<span>⭐ " + recipe.difficulty + "</span>" +
        "</div>" +

        "<h3>Ingredients</h3>" +

        ingredientsHTML +

        "<h3>How to Make It</h3>" +

        stepsHTML +

        "</div>";


    details.scrollIntoView({
        behavior: "smooth"
    });

}


// =========================
// BACK TO RECIPES
// =========================

function backToRecipes() {

    const gallery = document.getElementById("recipeGallery");

    const details = document.getElementById("recipeDetails");

    if (!gallery || !details) {
        return;
    }

    details.style.display = "none";

    gallery.style.display = "grid";

    document
        .getElementById("meals")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// =========================
// FILTER RECIPES
// =========================

function filterRecipes(category) {

    if (category === "all") {

        displayRecipes(recipeData);

        return;
    }

    const filtered = recipeData.filter(function(recipe) {

        return recipe.category === category;

    });

    displayRecipes(filtered);

}


// =========================
// SEARCH RECIPES
// =========================

const recipeSearch =
    document.getElementById("recipeSearch");

if (recipeSearch) {

    recipeSearch.addEventListener(
        "input",
        function() {

            const searchTerm =
                recipeSearch.value
                    .toLowerCase()
                    .trim();

            const filtered =
                recipeData.filter(function(recipe) {

                    return (

                        recipe.title
                            .toLowerCase()
                            .includes(searchTerm)

                        ||

                        recipe.category
                            .toLowerCase()
                            .includes(searchTerm)

                        ||

                        recipe.ingredients.some(
                            function(ingredient) {

                                return ingredient
                                    .toLowerCase()
                                    .includes(searchTerm);

                            }
                        )

                    );

                });

            displayRecipes(filtered);

        }
    );

}


// =========================
// FOOD SEARCH ENTER KEY
// =========================

const foodSearch =
    document.getElementById("foodSearch");

if (foodSearch) {

    foodSearch.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                searchFood();

            }

        }
    );

}


// =========================
// INITIAL LOAD
// =========================

displayRecipes(recipeData);


console.log(
    "NutriGuide loaded successfully with 30 recipes."
);
