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
    },
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
},

{
    id: 101,
    title: "Banana Berry Oat Bowl",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: [
        "1 banana",
        "1/2 cup oats",
        "1/2 cup yogurt",
        "1/2 cup mixed berries"
    ],
    steps: [
        "Add oats and yogurt to a bowl.",
        "Slice the banana and add the berries.",
        "Mix gently and serve."
    ]
},
{
    id: 102,
    title: "Cheese Egg Toast",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: [
        "2 eggs",
        "2 slices whole-grain bread",
        "2 tablespoons grated cheese"
    ],
    steps: [
        "Toast the bread.",
        "Cook the eggs until set.",
        "Place the eggs on the toast and add cheese."
    ]
},
{
    id: 103,
    title: "Apple Oat Breakfast Bowl",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: [
        "1 apple",
        "1/2 cup oats",
        "1/2 cup yogurt",
        "1 teaspoon cinnamon"
    ],
    steps: [
        "Chop the apple into small pieces.",
        "Combine oats and yogurt in a bowl.",
        "Add the apple and cinnamon."
    ]
},
{
    id: 104,
    title: "Spinach Cheese Omelet",
    category: "breakfast",
    time: "15 min",
    difficulty: "Easy",
    ingredients: [
        "2 eggs",
        "1 handful spinach",
        "2 tablespoons grated cheese"
    ],
    steps: [
        "Whisk the eggs.",
        "Cook the spinach briefly in a pan.",
        "Add the eggs and cheese.",
        "Fold the omelet and serve."
    ]
},
{
    id: 105,
    title: "Peach Yogurt Bowl",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: [
        "1 peach",
        "1 cup yogurt",
        "2 tablespoons oats"
    ],
    steps: [
        "Slice the peach.",
        "Add yogurt to a bowl.",
        "Top with peach slices and oats."
    ]
},
{
    id: 106,
    title: "Chicken Corn Wrap",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: [
        "1 whole-grain wrap",
        "1/2 cup cooked chicken",
        "1/4 cup corn",
        "1/4 cup lettuce"
    ],
    steps: [
        "Place the chicken, corn and lettuce on the wrap.",
        "Roll the wrap tightly.",
        "Slice and serve."
    ]
},
{
    id: 107,
    title: "Tuna Avocado Rice Bowl",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: [
        "1 cup cooked rice",
        "1/2 cup tuna",
        "1/2 avocado",
        "1/4 cup cucumber"
    ],
    steps: [
        "Add rice to a bowl.",
        "Top with tuna, avocado and cucumber.",
        "Mix gently and serve."
    ]
},
{
    id: 108,
    title: "Chickpea Veggie Wrap",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: [
        "1 whole-grain wrap",
        "1/2 cup chickpeas",
        "1/4 cup cucumber",
        "1/4 cup tomato",
        "Lettuce"
    ],
    steps: [
        "Mash the chickpeas lightly.",
        "Add the vegetables and lettuce to the wrap.",
        "Add the chickpeas.",
        "Roll and serve."
    ]
},
{
    id: 109,
    title: "Chicken Vegetable Couscous",
    category: "lunch",
    time: "20 min",
    difficulty: "Medium",
    ingredients: [
        "1 cup cooked couscous",
        "1/2 cup cooked chicken",
        "1/2 cup mixed vegetables"
    ],
    steps: [
        "Prepare the couscous.",
        "Add cooked chicken and vegetables.",
        "Mix together and serve."
    ]
},
{
    id: 110,
    title: "Bean Avocado Salad",
    category: "vegetarian",
    time: "10 min",
    difficulty: "Easy",
    ingredients: [
        "1/2 cup beans",
        "1/2 avocado",
        "1/2 tomato",
        "1/4 cucumber",
        "Lettuce"
    ],
    steps: [
        "Chop the vegetables.",
        "Add beans and vegetables to a bowl.",
        "Mix gently and serve."
    ]
}
];
