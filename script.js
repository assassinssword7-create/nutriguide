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
// RECIPE GALLERY
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
            "A handful of spinach",
            "1 small tomato",
            "A little olive oil",
            "A pinch of salt and pepper"
        ],
        steps: [
            "Wash and chop the spinach and tomato.",
            "Heat a pan with a little olive oil.",
            "Cook the spinach and tomato for a few minutes.",
            "Add the eggs and gently scramble everything together.",
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
            "Carrot",
            "A little yogurt or lemon dressing"
        ],
        steps: [
            "Place the cooked rice in a bowl.",
            "Add the cooked chicken.",
            "Chop the vegetables.",
            "Add the vegetables to the bowl.",
            "Add a small amount of yogurt or lemon dressing.",
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
            "1 tomato",
            "1 bell pepper",
            "A handful of spinach",
            "A little olive oil",
            "A little cheese"
        ],
        steps: [
            "Cook the pasta according to the package instructions.",
            "Chop the vegetables.",
            "Heat a pan with a little olive oil.",
            "Cook the vegetables until softened.",
            "Add the cooked pasta and mix.",
            "Top with a little cheese and serve."
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
            "1 banana",
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
            "Mash the banana in a bowl.",
            "Add the egg and mix.",
            "Add flour and baking powder.",
            "Add a little milk and mix into a batter.",
            "Heat a pan.",
            "Cook small pancakes on both sides until done.",
            "Serve with sliced fruit."
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
            "Fold the sides of the tortilla.",
            "Roll the wrap tightly and serve."
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
            "Cook the vegetables until slightly soft.",
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
            "A little butter or spread"
        ],
        steps: [
            "Spread a small amount of butter or spread on the bread.",
            "Add cheese.",
            "Add tomato and lettuce.",
            "Place the second slice of bread on top.",
            "Cut the sandwich and serve."
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
            "Add the vegetables and broth to a pot.",
            "Bring the mixture to a gentle boil.",
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
            "Mash the avocado in a bowl.",
            "Add a little lemon juice.",
            "Spread the avocado over the toast.",
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
            "Cook the pasta according to the package instructions.",
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
            "Cook or prepare according to the oats package instructions.",
            "Slice the banana.",
            "Add banana and cinnamon.",
            "Top with nuts or seeds if desired.",
            "Serve."
        ]
    }

];


// =========================
// DISPLAY RECIPES
// =========================

function displayRecipes(recipes) {

    const gallery = document.getElementById("recipeGallery");

    if (!gallery) {
        return;
    }

    gallery.innerHTML = "";

    if (recipes.length === 0) {

        gallery.innerHTML =
            "<p>No recipes found. Try another search.</p>";

        return;
    }

    recipes.forEach(function(recipe) {

        const card = document.createElement("div");

        card.className = "recipe-card";

       card.innerHTML =

    "<div class='recipe-card-image'>" +
recipe.title.split(" ")[0] +
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

const recipeSearch = document.getElementById("recipeSearch");

if (recipeSearch) {

    recipeSearch.addEventListener("input", function() {

        const searchTerm =
            recipeSearch.value.toLowerCase().trim();

        const filtered = recipeData.filter(function(recipe) {

            return (
                recipe.title.toLowerCase().includes(searchTerm) ||
                recipe.category.toLowerCase().includes(searchTerm) ||
                recipe.ingredients.some(function(ingredient) {

                    return ingredient
                        .toLowerCase()
                        .includes(searchTerm);

                })
            );

        });

        displayRecipes(filtered);

    });

}


// =========================
// INITIAL LOAD
// =========================

displayRecipes(recipeData);

console.log(
    "NutriGuide Recipe Gallery loaded successfully."
);
