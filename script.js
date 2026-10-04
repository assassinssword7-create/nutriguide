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

    const response =
        document.getElementById("aiResponse");


    if (input === "") {

        response.innerHTML =
            "<p>Ask me a nutrition question and I'll try to help.</p>";

        return;
    }


    let answer = "";


    /* =========================
       BREAKFAST
    ========================= */

    if (
        input.includes("breakfast") ||
        input.includes("morning meal")
    ) {

        answer =
            "<h3>Breakfast Ideas 🍳</h3>" +
            "<p>A balanced breakfast can include a source of carbohydrates, protein and fruit or vegetables.</p>" +
            "<p>Examples include eggs with toast and fruit, yogurt with oats and berries, or a banana oat bowl.</p>";

    }


    /* =========================
       SNACKS
    ========================= */

    else if (
        input.includes("snack") ||
        input.includes("snacks")
    ) {

        answer =
            "<h3>Healthy Snack Ideas 🍓</h3>" +
            "<p>Simple snack options include fruit with yogurt, a cheese and tomato sandwich, hummus with vegetables, or a handful of nuts if appropriate for you.</p>";

    }


    /* =========================
       FRUIT
    ========================= */

    else if (
        input.includes("fruit") ||
        input.includes("fruits")
    ) {

        answer =
            "<h3>Fruits 🍎</h3>" +
            "<p>Fruits provide nutrients such as vitamins, minerals, fiber and carbohydrates. Examples include apples, bananas, oranges, berries, kiwi and watermelon.</p>";

    }


    /* =========================
       VEGETABLES
    ========================= */

    else if (
        input.includes("vegetable") ||
        input.includes("vegetables")
    ) {

        answer =
            "<h3>Vegetables 🥦</h3>" +
            "<p>Vegetables provide a variety of vitamins, minerals and fiber. Try including different colors such as broccoli, carrots, peppers, tomatoes and leafy greens.</p>";

    }


    /* =========================
       CALCIUM
    ========================= */

    else if (
        input.includes("calcium") ||
        input.includes("milk")
    ) {

        answer =
            "<h3>Calcium 🥛</h3>" +
            "<p>Calcium is important for normal bones and teeth and also plays roles in muscle function. Food sources include milk, yogurt, cheese and some fortified foods.</p>";

    }


    /* =========================
       FIBER
    ========================= */

    else if (
        input.includes("fiber") ||
        input.includes("fibre")
    ) {

        answer =
            "<h3>Fiber 🌾</h3>" +
            "<p>Fiber is found in plant foods and supports normal digestive health. Good sources include fruits, vegetables, oats, whole grains, beans and lentils.</p>";

    }


    /* =========================
       WATER
    ========================= */

    else if (
        input.includes("water") ||
        input.includes("hydration") ||
        input.includes("thirsty")
    ) {

        answer =
            "<h3>Hydration 💧</h3>" +
            "<p>Water is essential for normal body functions. Drinking regularly throughout the day and having water with meals can help maintain hydration.</p>";

    }


    /* =========================
       ENERGY
    ========================= */

    else if (
        input.includes("tired") ||
        input.includes("energy") ||
        input.includes("fatigue")
    ) {

        answer =
            "<h3>Energy & Nutrition ⚡</h3>" +
            "<p>Energy levels can be affected by food, hydration, sleep and activity. A varied diet provides carbohydrates, protein, fats, vitamins and minerals needed for normal body functions.</p>";

    }


    /* =========================
       IRON
    ========================= */

    else if (
        input.includes("iron") ||
        input.includes("blood")
    ) {

        answer =
            "<h3>Iron 🩸</h3>" +
            "<p>Iron is an important mineral involved in normal red blood cell formation and oxygen transport. Food sources include meat, beans, lentils, spinach and fortified cereals.</p>";

    }


    /* =========================
       VITAMIN D
    ========================= */

    else if (
        input.includes("vitamin d") ||
        input.includes("bones")
    ) {

        answer =
            "<h3>Vitamin D ☀️</h3>" +
            "<p>Vitamin D helps the body absorb calcium and supports normal bones and muscles. Sources include fortified foods, eggs and oily fish.</p>";

    }


    /* =========================
       VITAMIN C
    ========================= */

    else if (
        input.includes("vitamin c") ||
        input.includes("immune")
    ) {

        answer =
            "<h3>Vitamin C 🍊</h3>" +
            "<p>Vitamin C contributes to normal immune function and collagen formation. Sources include oranges, strawberries, kiwi, tomatoes and peppers.</p>";

    }


    /* =========================
       PROTEIN
    ========================= */

    else if (
        input.includes("protein") ||
        input.includes("muscle")
    ) {

        answer =
            "<h3>Protein 💪</h3>" +
            "<p>Protein is an important nutrient used by the body for growth and maintenance. Sources include eggs, dairy, fish, meat, beans, lentils and nuts.</p>";

    }


    /* =========================
       CARBOHYDRATES
    ========================= */

    else if (
        input.includes("carb") ||
        input.includes("carbohydrate") ||
        input.includes("carbohydrates")
    ) {

        answer =
            "<h3>Carbohydrates 🍚</h3>" +
            "<p>Carbohydrates are an important source of energy. Foods such as rice, potatoes, oats, bread, pasta and fruit contain carbohydrates.</p>";

    }


    /* =========================
       GENERAL
    ========================= */

    else {

        answer =
            "<h3>Let's explore nutrition 🌱</h3>" +
            "<p>I can help explain topics such as vitamins, minerals, protein, carbohydrates, fiber, hydration, fruits, vegetables, breakfast ideas and snacks.</p>" +
            "<p>Try asking something like: <strong>What foods contain vitamin C?</strong></p>";

    }


    response.innerHTML = answer;

}


// =========================
// RECIPE DATABASE
// =========================


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

    const showLessButton =
        document.getElementById("showLessButton");


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

        if (showLessButton) {
            showLessButton.style.display = "none";
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


    if (showLessButton) {

        if (
            visibleRecipeCount >
            recipesPerLoad
        ) {

            showLessButton.style.display =
                "block";

        } else {

            showLessButton.style.display =
                "none";

        }

    }

}


function loadMoreRecipes() {

    visibleRecipeCount += recipesPerLoad;

    renderVisibleRecipes();

}
function showLessRecipes() {

    visibleRecipeCount -= recipesPerLoad;

    if (visibleRecipeCount < recipesPerLoad) {
        visibleRecipeCount = recipesPerLoad;
    }

    renderVisibleRecipes();

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

const loadMoreContainer =
    document.querySelector(".load-more-container");

if (loadMoreContainer) {
    loadMoreContainer.style.display = "none";
}

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

    const gallery =
        document.getElementById("recipeGallery");

    const details =
        document.getElementById("recipeDetails");

    const loadMoreContainer =
        document.querySelector(".load-more-container");

    if (!gallery || !details) {
        return;
    }

    details.style.display = "none";

    gallery.style.display = "grid";

    if (loadMoreContainer) {
        loadMoreContainer.style.display = "flex";
    }

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
