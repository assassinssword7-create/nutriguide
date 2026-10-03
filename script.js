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
{
    id: 31,
    title: "🍓 Strawberry Oat Bowl",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["Oats", "Milk", "Strawberries", "Honey"],
    steps: ["Cook oats with milk.", "Add strawberries.", "Drizzle with a little honey."]
},

{
    id: 32,
    title: "🥚 Spinach Egg Wrap",
    category: "breakfast",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["Eggs", "Spinach", "Whole-wheat wrap", "Cheese"],
    steps: ["Cook the spinach.", "Add beaten eggs.", "Place the mixture in the wrap and add cheese."]
},

{
    id: 33,
    title: "🍌 Peanut Butter Banana Toast",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["Bread", "Banana", "Peanut butter"],
    steps: ["Toast the bread.", "Spread peanut butter.", "Top with sliced banana."]
},

{
    id: 34,
    title: "🍎 Apple Yogurt Bowl",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["Yogurt", "Apple", "Oats", "Cinnamon"],
    steps: ["Cut the apple.", "Add yogurt to a bowl.", "Top with apple, oats and cinnamon."]
},

{
    id: 35,
    title: "🥣 Blueberry Overnight Oats",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["Oats", "Milk", "Blueberries", "Yogurt"],
    steps: ["Mix oats, milk and yogurt.", "Add blueberries.", "Refrigerate overnight."]
},

{
    id: 36,
    title: "🍳 Tomato Scrambled Eggs",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["Eggs", "Tomato", "Cheese", "Black pepper"],
    steps: ["Dice the tomato.", "Cook the tomato briefly.", "Add beaten eggs and stir until cooked."]
},

{
    id: 37,
    title: "🥑 Egg Avocado Toast",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["Bread", "Avocado", "Egg", "Tomato"],
    steps: ["Toast the bread.", "Mash avocado onto the toast.", "Add a cooked egg and tomato."]
},

{
    id: 38,
    title: "🥞 Blueberry Pancakes",
    category: "breakfast",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["Flour", "Milk", "Egg", "Blueberries"],
    steps: ["Mix the batter.", "Fold in blueberries.", "Cook pancakes on a lightly greased pan."]
},

{
    id: 39,
    title: "🍯 Honey Banana Oats",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["Oats", "Milk", "Banana", "Honey"],
    steps: ["Cook oats with milk.", "Add banana slices.", "Top with a small amount of honey."]
},

{
    id: 40,
    title: "🥪 Egg Cheese Breakfast Sandwich",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["Bread", "Egg", "Cheese", "Tomato"],
    steps: ["Cook the egg.", "Toast the bread.", "Layer egg, cheese and tomato."]
},

{
    id: 41,
    title: "🥗 Mediterranean Chicken Salad",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["Cooked chicken", "Lettuce", "Tomato", "Cucumber", "Olives"],
    steps: ["Chop the vegetables.", "Add cooked chicken.", "Mix together and serve."]
},

{
    id: 42,
    title: "🌯 Turkey Veggie Wrap",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["Wrap", "Turkey", "Lettuce", "Tomato", "Cucumber"],
    steps: ["Place ingredients on the wrap.", "Roll tightly.", "Cut in half and serve."]
},

{
    id: 43,
    title: "🍚 Tuna Rice Bowl",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["Cooked rice", "Tuna", "Cucumber", "Carrot"],
    steps: ["Add rice to a bowl.", "Add tuna and chopped vegetables.", "Mix gently and serve."]
},

{
    id: 44,
    title: "🥙 Chicken Hummus Pita",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["Pita bread", "Cooked chicken", "Hummus", "Lettuce", "Tomato"],
    steps: ["Spread hummus inside the pita.", "Add chicken.", "Add vegetables and serve."]
},

{
    id: 45,
    title: "🥗 Chickpea Rice Bowl",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["Cooked rice", "Chickpeas", "Cucumber", "Tomato"],
    steps: ["Add rice to a bowl.", "Add chickpeas.", "Top with chopped vegetables."]
},

{
    id: 46,
    title: "🍝 Chicken Tomato Pasta",
    category: "lunch",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["Pasta", "Chicken", "Tomato sauce", "Onion"],
    steps: ["Cook the pasta.", "Cook chicken and onion.", "Add tomato sauce and pasta."]
},

{
    id: 47,
    title: "🥔 Chicken Potato Bowl",
    category: "lunch",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["Potatoes", "Chicken", "Carrot", "Peas"],
    steps: ["Cook the potatoes.", "Cook the chicken.", "Combine with vegetables and serve."]
},

{
    id: 48,
    title: "🥗 Tuna Cucumber Salad",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["Tuna", "Cucumber", "Tomato", "Lettuce"],
    steps: ["Chop the vegetables.", "Add tuna.", "Mix and serve."]
},

{
    id: 49,
    title: "🍛 Vegetable Rice Bowl",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["Rice", "Carrot", "Peas", "Corn", "Broccoli"],
    steps: ["Cook the vegetables.", "Add cooked rice.", "Mix together and serve."]
},

{
    id: 50,
    title: "🥪 Chicken Avocado Sandwich",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["Bread", "Chicken", "Avocado", "Lettuce"],
    steps: ["Mash the avocado.", "Spread it on bread.", "Add chicken and lettuce."]
},

{
    id: 51,
    title: "🍝 Creamy Vegetable Pasta",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["Pasta", "Broccoli", "Carrot", "Milk", "Cheese"],
    steps: ["Cook the pasta.", "Cook the vegetables.", "Combine with a simple milk and cheese sauce."]
},

{
    id: 52,
    title: "🍗 Lemon Chicken Rice",
    category: "dinner",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["Chicken", "Rice", "Lemon", "Carrot"],
    steps: ["Cook the rice.", "Cook the chicken thoroughly.", "Serve with rice, carrot and lemon."]
},

{
    id: 53,
    title: "🍲 Vegetable Lentil Stew",
    category: "dinner",
    time: "35 min",
    difficulty: "Easy",
    ingredients: ["Lentils", "Carrot", "Tomato", "Potato", "Onion"],
    steps: ["Cook onion and vegetables.", "Add lentils and water.", "Simmer until everything is tender."]
},

{
    id: 54,
    title: "🍝 Spinach Cheese Pasta",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["Pasta", "Spinach", "Cheese", "Tomato"],
    steps: ["Cook the pasta.", "Wilt the spinach.", "Mix with pasta, tomato and cheese."]
},

{
    id: 55,
    title: "🍛 Chicken Vegetable Rice",
    category: "dinner",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["Chicken", "Rice", "Carrot", "Peas", "Corn"],
    steps: ["Cook chicken.", "Add vegetables.", "Mix with cooked rice and serve."]
},

{
    id: 56,
    title: "🥘 Bean Tomato Stew",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["Beans", "Tomatoes", "Onion", "Carrot"],
    steps: ["Cook onion and carrot.", "Add tomatoes and beans.", "Simmer until warm and tender."]
},

{
    id: 57,
    title: "🍜 Chicken Vegetable Noodles",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["Noodles", "Chicken", "Carrot", "Broccoli"],
    steps: ["Cook noodles.", "Cook chicken and vegetables.", "Combine everything and serve."]
},

{
    id: 58,
    title: "🥔 Cheesy Vegetable Potato",
    category: "dinner",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["Potato", "Broccoli", "Corn", "Cheese"],
    steps: ["Bake or boil the potato.", "Add cooked vegetables.", "Top with cheese and serve."]
},

{
    id: 59,
    title: "🍅 Tomato Chickpea Pasta",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["Pasta", "Chickpeas", "Tomato sauce", "Spinach"],
    steps: ["Cook pasta.", "Heat chickpeas with tomato sauce.", "Combine with pasta and spinach."]
},

{
    id: 60,
    title: "🥦 Broccoli Cheese Rice",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["Rice", "Broccoli", "Cheese", "Carrot"],
    steps: ["Cook broccoli and carrot.", "Add cooked rice.", "Stir in cheese and serve."]
},

{
    id: 61,
    title: "🍓 Strawberry Yogurt Cup",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["Yogurt", "Strawberries", "Oats"],
    steps: ["Add yogurt to a cup.", "Add sliced strawberries.", "Top with oats."]
},

{
    id: 62,
    title: "🍌 Banana Yogurt Bites",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["Banana", "Yogurt", "Oats"],
    steps: ["Slice the banana.", "Dip pieces in yogurt.", "Sprinkle with oats and chill."]
},

{
    id: 63,
    title: "🍎 Apple Peanut Butter Slices",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["Apple", "Peanut butter"],
    steps: ["Slice the apple.", "Spread a little peanut butter on each slice.", "Serve."]
},

{
    id: 64,
    title: "🥕 Hummus Veggie Cups",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["Hummus", "Carrot", "Cucumber", "Bell pepper"],
    steps: ["Cut vegetables into sticks.", "Add hummus to small cups.", "Serve together."]
},

{
    id: 65,
    title: "🍇 Fruit Yogurt Bowl",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["Yogurt", "Grapes", "Apple", "Banana"],
    steps: ["Chop the fruit.", "Add yogurt to a bowl.", "Mix gently and serve."]
},

{
    id: 66,
    title: "🥪 Mini Cheese Toast",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["Bread", "Cheese", "Tomato"],
    steps: ["Add cheese and tomato to bread.", "Toast until the cheese melts.", "Cut into small pieces."]
},

{
    id: 67,
    title: "🍉 Watermelon Yogurt Bowl",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["Watermelon", "Yogurt", "Mint"],
    steps: ["Cut watermelon into pieces.", "Add yogurt.", "Top with a little mint."]
},

{
    id: 68,
    title: "🍐 Pear Oat Snack",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["Pear", "Oats", "Yogurt"],
    steps: ["Slice the pear.", "Add yogurt.", "Top with oats."]
},

{
    id: 69,
    title: "🥒 Cucumber Hummus Toast",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["Bread", "Hummus", "Cucumber"],
    steps: ["Toast the bread.", "Spread hummus.", "Top with cucumber slices."]
},

{
    id: 70,
    title: "🍓 Berry Oat Yogurt Cup",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["Yogurt", "Mixed berries", "Oats"],
    steps: ["Add yogurt to a cup.", "Add berries.", "Top with oats."]
},

{
    id: 71,
    title: "🥗 Mediterranean Bean Salad",
    category: "vegetarian",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["Beans", "Tomato", "Cucumber", "Lettuce"],
    steps: ["Chop vegetables.", "Add beans.", "Mix everything together."]
},

{
    id: 72,
    title: "🍚 Vegetable Egg Rice",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["Rice", "Eggs", "Carrot", "Peas"],
    steps: ["Cook vegetables.", "Add cooked rice.", "Stir in cooked egg and serve."]
},

{
    id: 73,
    title: "🥙 Falafel Veggie Pita",
    category: "vegetarian",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["Pita", "Falafel", "Lettuce", "Tomato", "Cucumber"],
    steps: ["Warm the pita.", "Add falafel.", "Fill with vegetables and serve."]
},

{
    id: 74,
    title: "🍝 Spinach Tomato Pasta",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["Pasta", "Spinach", "Tomato sauce", "Onion"],
    steps: ["Cook pasta.", "Cook onion and spinach.", "Add tomato sauce and pasta."]
},

{
    id: 75,
    title: "🥕 Roasted Carrot Rice Bowl",
    category: "vegetarian",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["Rice", "Carrot", "Chickpeas", "Broccoli"],
    steps: ["Cook the vegetables.", "Add cooked rice.", "Top with chickpeas and serve."]
},

{
    id: 76,
    title: "🥦 Broccoli Pasta Bowl",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["Pasta", "Broccoli", "Cheese", "Tomato"],
    steps: ["Cook pasta.", "Steam broccoli.", "Combine with cheese and tomato."]
},

{
    id: 77,
    title: "🍅 Tomato Bean Toast",
    category: "vegetarian",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["Bread", "Beans", "Tomato", "Cheese"],
    steps: ["Toast the bread.", "Add beans and tomato.", "Top with cheese."]
},

{
    id: 78,
    title: "🥔 Potato Chickpea Bowl",
    category: "vegetarian",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["Potatoes", "Chickpeas", "Cucumber", "Tomato"],
    steps: ["Cook potatoes.", "Add chickpeas.", "Top with cucumber and tomato."]
},

{
    id: 79,
    title: "🌽 Sweetcorn Veggie Rice",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["Rice", "Sweetcorn", "Peas", "Carrot"],
    steps: ["Cook vegetables.", "Add cooked rice.", "Mix and serve."]
},

{
    id: 80,
    title: "🍆 Vegetable Pasta Bake",
    category: "vegetarian",
    time: "35 min",
    difficulty: "Easy",
    ingredients: ["Pasta", "Tomato sauce", "Zucchini", "Cheese"],
    steps: ["Cook pasta.", "Mix with vegetables and sauce.", "Top with cheese and bake until hot."]
},

{
    id: 81,
    title: "🥣 Apple Cinnamon Yogurt",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["Yogurt", "Apple", "Cinnamon", "Oats"],
    steps: ["Chop apple.", "Add yogurt.", "Top with apple, oats and cinnamon."]
},

{
    id: 82,
    title: "🍞 Tomato Cheese Toast",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["Bread", "Tomato", "Cheese"],
    steps: ["Place tomato and cheese on bread.", "Toast until cheese melts.", "Serve warm."]
},

{
    id: 83,
    title: "🥚 Egg Potato Breakfast Bowl",
    category: "breakfast",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["Potato", "Eggs", "Spinach", "Tomato"],
    steps: ["Cook the potato.", "Cook eggs and spinach.", "Combine with tomato and serve."]
},

{
    id: 84,
    title: "🍓 Berry Banana Smoothie Bowl",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["Banana", "Berries", "Yogurt", "Oats"],
    steps: ["Blend banana, berries and yogurt.", "Pour into a bowl.", "Top with oats."]
},

{
    id: 85,
    title: "🥞 Apple Cinnamon Pancakes",
    category: "breakfast",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["Flour", "Apple", "Milk", "Egg", "Cinnamon"],
    steps: ["Mix pancake batter.", "Add finely chopped apple.", "Cook pancakes until done."]
},

{
    id: 86,
    title: "🥗 Chicken Corn Salad",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["Chicken", "Corn", "Lettuce", "Cucumber"],
    steps: ["Chop vegetables.", "Add cooked chicken.", "Add corn and mix."]
},

{
    id: 87,
    title: "🍚 Chicken Pea Rice Bowl",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["Chicken", "Rice", "Peas", "Carrot"],
    steps: ["Cook chicken.", "Add vegetables.", "Serve with cooked rice."]
},

{
    id: 88,
    title: "🥙 Egg Hummus Wrap",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["Wrap", "Egg", "Hummus", "Lettuce"],
    steps: ["Spread hummus on the wrap.", "Add cooked egg.", "Add lettuce and roll."]
},

{
    id: 89,
    title: "🍝 Tuna Tomato Pasta",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["Pasta", "Tuna", "Tomato sauce", "Spinach"],
    steps: ["Cook pasta.", "Warm tomato sauce and tuna.", "Mix with pasta and spinach."]
},

{
    id: 90,
    title: "🥗 Lentil Vegetable Bowl",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["Lentils", "Cucumber", "Tomato", "Carrot"],
    steps: ["Cook lentils.", "Chop vegetables.", "Combine and serve."]
},

{
    id: 91,
    title: "🍲 Tomato Vegetable Soup",
    category: "dinner",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["Tomatoes", "Carrot", "Potato", "Onion"],
    steps: ["Cook onion.", "Add vegetables and water.", "Simmer until vegetables are tender."]
},

{
    id: 92,
    title: "🍗 Chicken Broccoli Pasta",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["Pasta", "Chicken", "Broccoli", "Cheese"],
    steps: ["Cook pasta.", "Cook chicken and broccoli.", "Combine with pasta and cheese."]
},

{
    id: 93,
    title: "🍚 Vegetable Chickpea Rice",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["Rice", "Chickpeas", "Carrot", "Peas"],
    steps: ["Cook vegetables.", "Add chickpeas.", "Mix with cooked rice."]
},

{
    id: 94,
    title: "🥘 Bean Vegetable Pasta",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["Pasta", "Beans", "Tomato sauce", "Spinach"],
    steps: ["Cook pasta.", "Heat beans with tomato sauce.", "Combine with pasta and spinach."]
},

{
    id: 95,
    title: "🥦 Chicken Broccoli Rice",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["Chicken", "Rice", "Broccoli", "Carrot"],
    steps: ["Cook chicken thoroughly.", "Cook vegetables.", "Serve with cooked rice."]
},

{
    id: 96,
    title: "🍓 Fruit Oat Yogurt Parfait",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["Yogurt", "Strawberries", "Banana", "Oats"],
    steps: ["Add yogurt to a glass.", "Layer fruit.", "Top with oats."]
},

{
    id: 97,
    title: "🥒 Cucumber Cheese Sandwich",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["Bread", "Cheese", "Cucumber"],
    steps: ["Place cheese on bread.", "Add cucumber slices.", "Close the sandwich and serve."]
},

{
    id: 98,
    title: "🍌 Banana Oat Yogurt Cup",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["Banana", "Yogurt", "Oats"],
    steps: ["Slice banana.", "Add yogurt.", "Top with oats."]
},

{
    id: 99,
    title: "🍎 Apple Berry Fruit Cup",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["Apple", "Strawberries", "Blueberries"],
    steps: ["Wash the fruit.", "Cut the apple and strawberries.", "Mix together and serve."]
},

{
    id: 100,
    title: "🥕 Crunchy Veggie Hummus Plate",
    category: "vegetarian",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["Carrot", "Cucumber", "Bell pepper", "Hummus"],
    steps: ["Cut the vegetables into sticks.", "Place hummus in a bowl.", "Serve vegetables with hummus."]
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
