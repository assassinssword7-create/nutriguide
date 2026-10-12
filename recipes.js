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
    title: "🍌 Banana Berry Oat Bowl",
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
    title: "🥚 Cheese Egg Toast",
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
    title: "🍎 Apple Oat Breakfast Bowl",
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
    title: "🍳 Spinach Cheese Omelet",
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
    title: "🍑 Peach Yogurt Bowl",
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
    title: "🌯 Chicken Corn Wrap",
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
    title: "🥑 Tuna Avocado Rice Bowl",
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
    title: "🌯 Chickpea Veggie Wrap",
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
    title: "🍗 Chicken Vegetable Couscous",
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
    title: "🥗 Bean Avocado Salad",
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
},
{
    id: 111,
    title: "🍓 Strawberry Yogurt Toast",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["2 slices whole-grain bread", "1/2 cup yogurt", "5 strawberries"],
    steps: ["Toast the bread.", "Spread yogurt over the toast.", "Top with sliced strawberries."]
},
{
    id: 112,
    title: "🥣 Cinnamon Apple Oats",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup oats", "1 apple", "1 cup milk", "1/2 teaspoon cinnamon"],
    steps: ["Cook oats with milk.", "Chop the apple.", "Add apple and cinnamon to the oats."]
},
{
    id: 113,
    title: "🥑 Avocado Egg Toast",
    category: "breakfast",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["2 eggs", "2 slices bread", "1/2 avocado"],
    steps: ["Toast the bread.", "Mash the avocado.", "Cook the eggs.", "Spread avocado on toast and top with egg."]
},
{
    id: 114,
    title: "🫐 Blueberry Yogurt Toast",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["2 slices bread", "1/2 cup yogurt", "1/2 cup blueberries"],
    steps: ["Toast the bread.", "Spread yogurt over the toast.", "Add blueberries."]
},
{
    id: 115,
    title: "🍌 Banana Cinnamon Toast",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["2 slices bread", "1 banana", "1/2 teaspoon cinnamon"],
    steps: ["Toast the bread.", "Slice the banana.", "Place banana slices on toast and sprinkle with cinnamon."]
},
{
    id: 116,
    title: "🍅 Tomato Egg Breakfast Bowl",
    category: "breakfast",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["2 eggs", "1 tomato", "1/2 cup cooked rice", "Spinach"],
    steps: ["Cook the eggs.", "Chop the tomato.", "Add rice to a bowl.", "Top with eggs, tomato and spinach."]
},
{
    id: 117,
    title: "🥭 Mango Yogurt Bowl",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cup yogurt", "1/2 mango", "2 tablespoons oats"],
    steps: ["Chop the mango.", "Add yogurt to a bowl.", "Top with mango and oats."]
},
{
    id: 118,
    title: "🥞 Banana Oat Pancakes",
    category: "breakfast",
    time: "20 min",
    difficulty: "Medium",
    ingredients: ["1 banana", "1 egg", "1/2 cup oats", "1/4 cup milk"],
    steps: ["Mash the banana.", "Mix with egg, oats and milk.", "Cook small pancakes in a pan until set.", "Serve with fruit."]
},
{
    id: 119,
    title: "🥚 Veggie Breakfast Wrap",
    category: "breakfast",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 whole-grain wrap", "2 eggs", "Spinach", "Tomato"],
    steps: ["Cook the eggs.", "Add spinach and tomato.", "Place everything inside the wrap.", "Roll and serve."]
},
{
    id: 120,
    title: "🍐 Pear Yogurt Bowl",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 pear", "1 cup yogurt", "2 tablespoons oats"],
    steps: ["Slice the pear.", "Add yogurt to a bowl.", "Top with pear and oats."]
},
{
    id: 121,
    title: "🥗 Chicken Garden Salad",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup cooked chicken", "Lettuce", "1 tomato", "1/2 cucumber"],
    steps: ["Chop the vegetables.", "Add chicken and vegetables to a bowl.", "Mix gently and serve."]
},
{
    id: 122,
    title: "🌯 Turkey Avocado Wrap",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 whole-grain wrap", "Turkey slices", "1/2 avocado", "Lettuce"],
    steps: ["Place turkey and vegetables on the wrap.", "Add avocado.", "Roll tightly and serve."]
},
{
    id: 123,
    title: "🍚 Chicken Vegetable Rice",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked rice", "1/2 cup chicken", "1/2 cup mixed vegetables"],
    steps: ["Heat the cooked rice.", "Add chicken and vegetables.", "Mix together and serve."]
},
{
    id: 124,
    title: "🥙 Hummus Chicken Pita",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 pita", "1/2 cup cooked chicken", "3 tablespoons hummus", "Lettuce"],
    steps: ["Warm the pita.", "Spread hummus inside.", "Add chicken and lettuce.", "Fold and serve."]
},
{
    id: 125,
    title: "🥗 Tuna Garden Salad",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup tuna", "Lettuce", "1 tomato", "1/2 cucumber"],
    steps: ["Chop the vegetables.", "Add tuna and vegetables to a bowl.", "Mix gently and serve."]
},
{
    id: 126,
    title: "🌽 Chicken Corn Rice Bowl",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 cup rice", "1/2 cup chicken", "1/4 cup corn", "Lettuce"],
    steps: ["Add rice to a bowl.", "Top with chicken and corn.", "Add lettuce and serve."]
},
{
    id: 127,
    title: "🥕 Veggie Hummus Sandwich",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["2 slices bread", "3 tablespoons hummus", "Carrot", "Cucumber", "Lettuce"],
    steps: ["Spread hummus on bread.", "Add sliced vegetables.", "Close the sandwich and serve."]
},
{
    id: 128,
    title: "🍝 Tuna Vegetable Pasta",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked pasta", "1/2 cup tuna", "1/2 cup vegetables"],
    steps: ["Cook the pasta.", "Add tuna and vegetables.", "Mix together and serve."]
},
{
    id: 129,
    title: "🥔 Chicken Potato Salad",
    category: "lunch",
    time: "25 min",
    difficulty: "Medium",
    ingredients: ["1 potato", "1/2 cup chicken", "1/2 cucumber", "Lettuce"],
    steps: ["Cook the potato until tender.", "Chop the potato and vegetables.", "Add chicken and mix."]
},
{
    id: 130,
    title: "🫘 Chickpea Tomato Bowl",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup chickpeas", "1 tomato", "1/2 cucumber", "1/2 cup rice"],
    steps: ["Chop the vegetables.", "Add rice and chickpeas to a bowl.", "Top with vegetables and serve."]
},
{
    id: 131,
    title: "🍋 Lemon Chicken Couscous",
    category: "lunch",
    time: "20 min",
    difficulty: "Medium",
    ingredients: ["1 cup couscous", "1/2 cup chicken", "1/2 lemon", "Mixed vegetables"],
    steps: ["Prepare the couscous.", "Add cooked chicken and vegetables.", "Add a little lemon juice and mix."]
},
{
    id: 132,
    title: "🥒 Cucumber Tuna Wrap",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 wrap", "1/2 cup tuna", "1/2 cucumber", "Lettuce"],
    steps: ["Place tuna on the wrap.", "Add cucumber and lettuce.", "Roll and serve."]
},
{
    id: 133,
    title: "🥑 Chicken Avocado Rice",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 cup rice", "1/2 cup chicken", "1/2 avocado"],
    steps: ["Add rice to a bowl.", "Top with chicken.", "Add sliced avocado and serve."]
},
{
    id: 134,
    title: "🥬 Turkey Lettuce Wraps",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["Turkey slices", "Lettuce leaves", "Tomato", "Cucumber"],
    steps: ["Lay out lettuce leaves.", "Add turkey and vegetables.", "Roll the lettuce around the filling."]
},
{
    id: 135,
    title: "🍅 Tomato Chickpea Bowl",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup chickpeas", "1 tomato", "1/2 cup rice", "Spinach"],
    steps: ["Add rice to a bowl.", "Add chickpeas and chopped tomato.", "Top with spinach."]
},
{
    id: 136,
    title: "🥦 Chicken Broccoli Bowl",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup chicken", "1/2 cup broccoli", "1 cup rice"],
    steps: ["Steam or cook the broccoli.", "Add rice to a bowl.", "Top with chicken and broccoli."]
},
{
    id: 137,
    title: "🌱 Lentil Veggie Wrap",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 wrap", "1/2 cup cooked lentils", "Tomato", "Lettuce"],
    steps: ["Place lentils on the wrap.", "Add chopped vegetables.", "Roll and serve."]
},
{
    id: 138,
    title: "🥕 Roasted Veggie Couscous",
    category: "lunch",
    time: "25 min",
    difficulty: "Medium",
    ingredients: ["1 cup couscous", "Carrot", "Zucchini", "Bell pepper"],
    steps: ["Cook the vegetables until tender.", "Prepare the couscous.", "Mix vegetables with couscous."]
},
{
    id: 139,
    title: "🧀 Cheese Veggie Pita",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 pita", "Cheese", "Tomato", "Cucumber", "Lettuce"],
    steps: ["Open the pita.", "Add cheese and vegetables.", "Warm briefly and serve."]
},
{
    id: 140,
    title: "🍚 Bean Rice Lunch Bowl",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 cup rice", "1/2 cup beans", "Tomato", "Corn"],
    steps: ["Add rice to a bowl.", "Top with beans, tomato and corn.", "Mix and serve."]
},
{
    id: 141,
    title: "🍝 Chicken Spinach Pasta",
    category: "dinner",
    time: "25 min",
    difficulty: "Medium",
    ingredients: ["1 cup pasta", "1/2 cup chicken", "1 handful spinach"],
    steps: ["Cook the pasta.", "Add chicken and spinach.", "Mix together and serve."]
},
{
    id: 142,
    title: "🍋 Lemon Vegetable Rice",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup rice", "1/2 cup vegetables", "1/2 lemon"],
    steps: ["Cook the vegetables.", "Add cooked rice.", "Add a little lemon juice and mix."]
},
{
    id: 143,
    title: "🥔 Chicken Potato Dinner",
    category: "dinner",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["1 potato", "1/2 cup chicken", "Carrot", "Peas"],
    steps: ["Cook the potato until tender.", "Cook the chicken and vegetables.", "Combine and serve."]
},
{
    id: 144,
    title: "🍅 Tomato Lentil Pasta",
    category: "dinner",
    time: "25 min",
    difficulty: "Medium",
    ingredients: ["1 cup pasta", "1/2 cup lentils", "1 tomato", "Spinach"],
    steps: ["Cook the pasta.", "Cook the tomato and spinach.", "Add lentils and pasta.", "Mix and serve."]
},
{
    id: 145,
    title: "🥦 Broccoli Chicken Noodles",
    category: "dinner",
    time: "20 min",
    difficulty: "Medium",
    ingredients: ["1 cup noodles", "1/2 cup chicken", "1/2 cup broccoli"],
    steps: ["Cook the noodles.", "Cook the broccoli and chicken.", "Combine everything and serve."]
},
{
    id: 146,
    title: "🍚 Vegetable Egg Rice",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup rice", "2 eggs", "1/2 cup mixed vegetables"],
    steps: ["Cook the vegetables.", "Add cooked rice.", "Add cooked eggs and mix."]
},
{
    id: 147,
    title: "🫘 Bean Tomato Rice",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup rice", "1/2 cup beans", "1 tomato", "Spinach"],
    steps: ["Cook the tomato and spinach.", "Add beans and rice.", "Mix and serve."]
},
{
    id: 148,
    title: "🍝 Vegetable Cheese Pasta",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup pasta", "1/2 cup vegetables", "2 tablespoons cheese"],
    steps: ["Cook the pasta.", "Cook the vegetables.", "Combine pasta and vegetables.", "Add cheese and serve."]
},
{
    id: 149,
    title: "🥕 Chicken Carrot Rice",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup rice", "1/2 cup chicken", "1 carrot", "Peas"],
    steps: ["Cook the carrot and peas.", "Add chicken.", "Mix with cooked rice and serve."]
},
{
    id: 150,
    title: "🍲 Vegetable Chickpea Stew",
    category: "dinner",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["1/2 cup chickpeas", "Carrot", "Tomato", "Potato", "Spinach"],
    steps: ["Cook the vegetables until tender.", "Add chickpeas and tomato.", "Simmer until everything is cooked.", "Serve warm."]
},
{
    id: 151,
    title: "🥣 Lentil Tomato Soup",
    category: "dinner",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["1/2 cup lentils", "2 tomatoes", "Carrot", "Spinach"],
    steps: ["Cook lentils until tender.", "Add chopped vegetables.", "Simmer until vegetables are soft.", "Serve warm."]
},
{
    id: 152,
    title: "🍗 Chicken Vegetable Soup",
    category: "dinner",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["1/2 cup chicken", "Carrot", "Celery", "Potato"],
    steps: ["Cook chicken.", "Add chopped vegetables and water.", "Simmer until vegetables are tender.", "Serve warm."]
},
{
    id: 153,
    title: "🥬 Spinach Rice Bowl",
    category: "dinner",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 cup rice", "1 handful spinach", "1 egg", "Tomato"],
    steps: ["Cook the spinach.", "Add cooked rice.", "Top with cooked egg and tomato."]
},
{
    id: 154,
    title: "🍅 Tomato Vegetable Couscous",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup couscous", "Tomato", "Zucchini", "Carrot"],
    steps: ["Cook the vegetables.", "Prepare the couscous.", "Mix everything together."]
},
{
    id: 155,
    title: "🥔 Potato Bean Bowl",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["1 potato", "1/2 cup beans", "Tomato", "Spinach"],
    steps: ["Cook the potato until tender.", "Add beans and vegetables.", "Mix and serve."]
},
{
    id: 156,
    title: "🍜 Chicken Vegetable Noodle Bowl",
    category: "dinner",
    time: "20 min",
    difficulty: "Medium",
    ingredients: ["1 cup noodles", "1/2 cup chicken", "Carrot", "Broccoli"],
    steps: ["Cook the noodles.", "Cook chicken and vegetables.", "Combine and serve."]
},
{
    id: 157,
    title: "🌽 Corn Bean Rice",
    category: "dinner",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 cup rice", "1/2 cup beans", "1/4 cup corn", "Tomato"],
    steps: ["Add cooked rice to a bowl.", "Add beans and corn.", "Top with tomato and serve."]
},
{
    id: 158,
    title: "🍝 Lentil Vegetable Pasta",
    category: "dinner",
    time: "25 min",
    difficulty: "Medium",
    ingredients: ["1 cup pasta", "1/2 cup lentils", "Tomato", "Spinach"],
    steps: ["Cook the pasta.", "Cook vegetables and lentils.", "Combine with pasta and serve."]
},
{
    id: 159,
    title: "🥦 Broccoli Rice Bowl",
    category: "dinner",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 cup rice", "1/2 cup broccoli", "1 egg", "Carrot"],
    steps: ["Cook the broccoli and carrot.", "Add rice.", "Top with cooked egg."]
},
{
    id: 160,
    title: "🍲 Bean Vegetable Stew",
    category: "dinner",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["1/2 cup beans", "Tomato", "Carrot", "Potato"],
    steps: ["Cook the vegetables.", "Add beans and tomato.", "Simmer until tender.", "Serve warm."]
},
{
    id: 161,
    title: "🍓 Strawberry Banana Yogurt",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup strawberries", "1 banana", "1 cup yogurt"],
    steps: ["Slice the fruit.", "Add yogurt to a bowl.", "Top with fruit."]
},
{
    id: 162,
    title: "🍎 Apple Cinnamon Bites",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 apple", "1/2 teaspoon cinnamon", "2 tablespoons yogurt"],
    steps: ["Slice the apple.", "Add yogurt.", "Sprinkle with cinnamon."]
},
{
    id: 163,
    title: "🍌 Banana Oat Bites",
    category: "snacks",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 banana", "1/2 cup oats", "1 tablespoon yogurt"],
    steps: ["Mash the banana.", "Mix with oats and yogurt.", "Form small bites and chill."]
},
{
    id: 164,
    title: "🥕 Carrot Hummus Cups",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 carrot", "1/2 cucumber", "3 tablespoons hummus"],
    steps: ["Slice carrot and cucumber.", "Place hummus in a small bowl.", "Serve vegetables with hummus."]
},
{
    id: 165,
    title: "🍇 Grape Yogurt Cup",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup grapes", "1 cup yogurt", "2 tablespoons oats"],
    steps: ["Cut grapes if desired.", "Add yogurt to a cup.", "Top with grapes and oats."]
},
{
    id: 166,
    title: "🍐 Pear Cheese Bites",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 pear", "Cheese slices"],
    steps: ["Slice the pear.", "Cut cheese into small pieces.", "Serve together."]
},
{
    id: 167,
    title: "🍉 Watermelon Fruit Cup",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cup watermelon", "1/2 cup strawberries", "1/2 banana"],
    steps: ["Cut all fruit into small pieces.", "Add fruit to a bowl.", "Mix gently and serve."]
},
{
    id: 168,
    title: "🥒 Cucumber Hummus Bites",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cucumber", "3 tablespoons hummus", "Tomato"],
    steps: ["Slice the cucumber.", "Add a small amount of hummus.", "Top with tomato."]
},
{
    id: 169,
    title: "🫐 Blueberry Oat Cup",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup blueberries", "1/2 cup yogurt", "2 tablespoons oats"],
    steps: ["Add yogurt to a cup.", "Top with blueberries and oats."]
},
{
    id: 170,
    title: "🍓 Berry Banana Cup",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup berries", "1 banana", "1/2 cup yogurt"],
    steps: ["Slice the banana.", "Add yogurt to a cup.", "Top with berries and banana."]
},
{
    id: 171,
    title: "🍑 Peach Oat Yogurt",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 peach", "1/2 cup yogurt", "2 tablespoons oats"],
    steps: ["Slice the peach.", "Add yogurt to a bowl.", "Top with peach and oats."]
},
{
    id: 172,
    title: "🍌 Banana Apple Cup",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 banana", "1 apple", "1/2 cup yogurt"],
    steps: ["Chop the fruit.", "Add yogurt to a bowl.", "Mix gently and serve."]
},
{
    id: 173,
    title: "🥝 Kiwi Yogurt Bowl",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["2 kiwis", "1 cup yogurt", "2 tablespoons oats"],
    steps: ["Peel and slice the kiwi.", "Add yogurt to a bowl.", "Top with kiwi and oats."]
},
{
    id: 174,
    title: "🍊 Orange Yogurt Cup",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 orange", "1 cup yogurt"],
    steps: ["Peel and separate the orange.", "Add yogurt to a cup.", "Top with orange pieces."]
},
{
    id: 175,
    title: "🥜 Peanut Butter Banana Toast",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["2 slices bread", "1 banana", "2 tablespoons peanut butter"],
    steps: ["Toast the bread.", "Spread peanut butter.", "Top with banana slices."]
},
{
    id: 176,
    title: "🍅 Tomato Cheese Bites",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 tomato", "Cheese slices", "Lettuce"],
    steps: ["Slice the tomato.", "Add cheese.", "Serve with lettuce."]
},
{
    id: 177,
    title: "🥑 Avocado Cucumber Toast",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["2 slices bread", "1/2 avocado", "1/2 cucumber"],
    steps: ["Toast the bread.", "Mash avocado over the toast.", "Add cucumber slices."]
},
{
    id: 178,
    title: "🍓 Strawberry Oat Cup",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup strawberries", "1/2 cup yogurt", "2 tablespoons oats"],
    steps: ["Slice strawberries.", "Add yogurt to a cup.", "Top with strawberries and oats."]
},
{
    id: 179,
    title: "🍏 Green Apple Yogurt",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 green apple", "1 cup yogurt", "Cinnamon"],
    steps: ["Chop the apple.", "Add yogurt to a bowl.", "Top with apple and cinnamon."]
},
{
    id: 180,
    title: "🍇 Mixed Fruit Bowl",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["Grapes", "Strawberries", "Banana", "Apple"],
    steps: ["Chop the fruit.", "Add everything to a bowl.", "Mix gently and serve."]
},
{
    id: 181,
    title: "🌱 Chickpea Avocado Salad",
    category: "vegetarian",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup chickpeas", "1/2 avocado", "Tomato", "Cucumber"],
    steps: ["Chop the vegetables.", "Add chickpeas and avocado.", "Mix gently and serve."]
},
{
    id: 182,
    title: "🥕 Carrot Chickpea Bowl",
    category: "vegetarian",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup chickpeas", "1 carrot", "1/2 cup rice", "Spinach"],
    steps: ["Cook the carrot.", "Add rice and chickpeas to a bowl.", "Top with carrot and spinach."]
},
{
    id: 183,
    title: "🥦 Broccoli Cheese Pasta",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup pasta", "1/2 cup broccoli", "2 tablespoons cheese"],
    steps: ["Cook the pasta.", "Cook the broccoli.", "Mix pasta and broccoli.", "Add cheese and serve."]
},
{
    id: 184,
    title: "🍅 Tomato Lentil Bowl",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup lentils", "1 tomato", "1/2 cup rice", "Spinach"],
    steps: ["Cook the lentils.", "Add rice and chopped tomato.", "Top with spinach."]
},
{
    id: 185,
    title: "🌽 Corn Bean Salad",
    category: "vegetarian",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup beans", "1/4 cup corn", "Tomato", "Cucumber"],
    steps: ["Chop the vegetables.", "Add beans and corn.", "Mix and serve."]
},
{
    id: 186,
    title: "🥔 Potato Spinach Bowl",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 potato", "Spinach", "Tomato", "1/2 cup beans"],
    steps: ["Cook the potato.", "Cook the spinach briefly.", "Add beans and tomato.", "Combine and serve."]
},
{
    id: 187,
    title: "🍝 Vegetable Tomato Pasta",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup pasta", "Tomato", "Zucchini", "Carrot"],
    steps: ["Cook the pasta.", "Cook the vegetables.", "Combine vegetables with pasta and serve."]
},
{
    id: 188,
    title: "🥒 Cucumber Chickpea Salad",
    category: "vegetarian",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup chickpeas", "1 cucumber", "Tomato", "Lettuce"],
    steps: ["Chop the vegetables.", "Add chickpeas.", "Mix everything together."]
},
{
    id: 189,
    title: "🍚 Vegetable Rice Bowl",
    category: "vegetarian",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 cup rice", "Carrot", "Broccoli", "Corn"],
    steps: ["Cook the vegetables.", "Add rice.", "Mix together and serve."]
},
{
    id: 190,
    title: "🥗 Mediterranean Veggie Bowl",
    category: "vegetarian",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["Chickpeas", "Tomato", "Cucumber", "Lettuce", "Olives"],
    steps: ["Chop the vegetables.", "Add chickpeas and vegetables to a bowl.", "Mix gently and serve."]
},
{
    id: 191,
    title: "🍆 Roasted Vegetable Bowl",
    category: "vegetarian",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["Eggplant", "Zucchini", "Carrot", "Rice"],
    steps: ["Chop the vegetables.", "Roast until tender.", "Serve over cooked rice."]
},
{
    id: 192,
    title: "🥬 Spinach Chickpea Pasta",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup pasta", "1/2 cup chickpeas", "Spinach", "Tomato"],
    steps: ["Cook the pasta.", "Cook spinach and tomato.", "Add chickpeas and pasta.", "Mix and serve."]
},
{
    id: 193,
    title: "🌽 Sweetcorn Rice Bowl",
    category: "vegetarian",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 cup rice", "1/2 cup corn", "Tomato", "Cucumber"],
    steps: ["Add rice to a bowl.", "Top with corn.", "Add chopped tomato and cucumber."]
},
{
    id: 194,
    title: "🫘 Bean Avocado Toast",
    category: "vegetarian",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["2 slices bread", "1/2 avocado", "1/2 cup beans", "Tomato"],
    steps: ["Toast the bread.", "Mash avocado onto the toast.", "Add beans and tomato."]
},
{
    id: 195,
    title: "🥕 Carrot Hummus Rice",
    category: "vegetarian",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 cup rice", "1 carrot", "3 tablespoons hummus", "Cucumber"],
    steps: ["Cook the carrot.", "Add rice to a bowl.", "Top with carrot, cucumber and hummus."]
},
{
    id: 196,
    title: "🍅 Tomato Bean Pasta",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup pasta", "1/2 cup beans", "Tomato", "Spinach"],
    steps: ["Cook the pasta.", "Cook tomato and spinach.", "Add beans and pasta.", "Mix and serve."]
},
{
    id: 197,
    title: "🥦 Broccoli Chickpea Bowl",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup chickpeas", "1/2 cup broccoli", "1 cup rice"],
    steps: ["Cook the broccoli.", "Add rice and chickpeas to a bowl.", "Top with broccoli."]
},
{
    id: 198,
    title: "🥔 Potato Vegetable Wrap",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 wrap", "1 potato", "Carrot", "Lettuce"],
    steps: ["Cook the potato until tender.", "Mash it lightly.", "Add vegetables and potato to the wrap.", "Roll and serve."]
},
{
    id: 199,
    title: "🌱 Lentil Avocado Salad",
    category: "vegetarian",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup lentils", "1/2 avocado", "Tomato", "Cucumber"],
    steps: ["Cook the lentils.", "Chop the vegetables.", "Combine lentils, avocado and vegetables."]
},
{
    id: 200,
    title: "🥗 Rainbow Veggie Rice Bowl",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup rice", "Carrot", "Broccoli", "Corn", "Tomato", "Cucumber"],
    steps: ["Cook the vegetables.", "Add rice to a bowl.", "Arrange the vegetables on top.", "Mix and serve."]
},
{
    id: 201,
    title: "🥞 Blueberry Oat Pancakes",
    category: "breakfast",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup oats", "1 banana", "1 egg", "1/2 cup milk", "1/2 cup blueberries"],
    steps: ["Blend oats, banana, egg and milk.", "Fold in blueberries.", "Cook small pancakes on a lightly heated pan.", "Serve warm."]
},
{
    id: 202,
    title: "🍳 Tomato Herb Omelet",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["2 eggs", "1 tomato", "1 tbsp chopped herbs", "1 tsp olive oil"],
    steps: ["Whisk the eggs.", "Chop the tomato and herbs.", "Cook the mixture in a lightly oiled pan.", "Fold and serve."]
},
{
    id: 203,
    title: "🥣 Apple Cinnamon Oatmeal",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup oats", "1 apple", "1 cup milk", "1/2 tsp cinnamon"],
    steps: ["Dice the apple.", "Cook oats with milk.", "Add apple and cinnamon.", "Cook until creamy."]
},
{
    id: 204,
    title: "🥑 Avocado Egg Toast",
    category: "breakfast",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["2 slices whole-grain bread", "1 avocado", "2 eggs", "Lemon juice"],
    steps: ["Toast the bread.", "Mash avocado with a little lemon juice.", "Cook the eggs.", "Spread avocado over toast and top with eggs."]
},
{
    id: 205,
    title: "🍓 Strawberry Yogurt Bowl",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cup yogurt", "1/2 cup strawberries", "2 tbsp oats", "1 tbsp honey"],
    steps: ["Slice strawberries.", "Add yogurt to a bowl.", "Top with strawberries and oats.", "Drizzle with honey."]
},
{
    id: 206,
    title: "🍌 Banana Peanut Butter Toast",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["2 slices bread", "1 banana", "2 tbsp peanut butter"],
    steps: ["Toast the bread.", "Spread peanut butter.", "Slice banana.", "Arrange banana slices on top."]
},
{
    id: 207,
    title: "🥚 Spinach Scrambled Eggs",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["2 eggs", "1 handful spinach", "1 tsp olive oil"],
    steps: ["Whisk the eggs.", "Cook spinach briefly.", "Add eggs.", "Stir gently until cooked."]
},
{
    id: 208,
    title: "🍯 Honey Granola Bowl",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cup yogurt", "1/2 cup granola", "1 banana", "1 tsp honey"],
    steps: ["Add yogurt to a bowl.", "Top with granola.", "Slice the banana.", "Add banana and honey."]
},
{
    id: 209,
    title: "🌽 Corn Breakfast Wrap",
    category: "breakfast",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 tortilla", "1/2 cup corn", "1 egg", "1/4 cup cheese"],
    steps: ["Cook the egg.", "Warm the tortilla.", "Add corn, egg and cheese.", "Roll the tortilla tightly."]
},
{
    id: 210,
    title: "🥭 Mango Yogurt Parfait",
    category: "breakfast",
    time: "7 min",
    difficulty: "Easy",
    ingredients: ["1 cup yogurt", "1/2 mango", "1/4 cup oats", "1 tsp honey"],
    steps: ["Dice the mango.", "Layer yogurt and oats.", "Add mango.", "Drizzle with honey."]
},

{
    id: 211,
    title: "🍚 Cinnamon Raisin Rice Bowl",
    category: "breakfast",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked rice", "1/2 cup milk", "1 tbsp raisins", "1/2 tsp cinnamon"],
    steps: ["Heat rice with milk.", "Add raisins.", "Sprinkle with cinnamon.", "Serve warm."]
},
{
    id: 212,
    title: "🥪 Egg Cheese Breakfast Sandwich",
    category: "breakfast",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["2 bread rolls", "2 eggs", "2 cheese slices", "1 tomato"],
    steps: ["Cook the eggs.", "Toast the rolls.", "Add cheese and egg.", "Top with tomato and serve."]
},
{
    id: 213,
    title: "🍐 Pear Walnut Oat Bowl",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup oats", "1 pear", "1 tbsp walnuts", "1 cup milk"],
    steps: ["Cook oats with milk.", "Dice the pear.", "Add pear and walnuts.", "Serve warm."]
},
{
    id: 214,
    title: "🥝 Kiwi Yogurt Bowl",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cup yogurt", "2 kiwis", "2 tbsp granola"],
    steps: ["Peel and slice kiwis.", "Add yogurt to a bowl.", "Top with kiwi and granola."]
},
{
    id: 215,
    title: "🧇 Banana Oat Waffles",
    category: "breakfast",
    time: "20 min",
    difficulty: "Medium",
    ingredients: ["1 banana", "1 egg", "1 cup oats", "1/2 cup milk"],
    steps: ["Blend ingredients into a batter.", "Preheat the waffle maker.", "Pour in batter.", "Cook until golden."]
},
{
    id: 216,
    title: "🍅 Tomato Cheese Toast",
    category: "breakfast",
    time: "8 min",
    difficulty: "Easy",
    ingredients: ["2 slices bread", "1 tomato", "1/4 cup shredded cheese"],
    steps: ["Toast the bread.", "Slice tomato.", "Add tomato and cheese.", "Toast until cheese melts."]
},
{
    id: 217,
    title: "🥜 Nutty Banana Oatmeal",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup oats", "1 banana", "1 cup milk", "1 tbsp mixed nuts"],
    steps: ["Cook oats with milk.", "Slice the banana.", "Add banana and nuts.", "Serve warm."]
},
{
    id: 218,
    title: "🍑 Peach Yogurt Bowl",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cup yogurt", "1 peach", "2 tbsp oats"],
    steps: ["Slice the peach.", "Add yogurt to a bowl.", "Top with peach and oats."]
},
{
    id: 219,
    title: "🌱 Green Breakfast Wrap",
    category: "breakfast",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["1 tortilla", "1 egg", "1/2 cup spinach", "1/4 avocado"],
    steps: ["Cook the egg and spinach.", "Warm the tortilla.", "Add avocado.", "Add egg mixture and roll."]
},
{
    id: 220,
    title: "🍇 Grape Yogurt Crunch",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cup yogurt", "1/2 cup grapes", "1/4 cup granola"],
    steps: ["Wash and halve grapes.", "Add yogurt to a bowl.", "Top with grapes and granola."]
},

{
    id: 221,
    title: "🍗 Lemon Herb Chicken Bowl",
    category: "lunch",
    time: "25 min",
    difficulty: "Medium",
    ingredients: ["1 chicken breast", "1 cup cooked rice", "1/2 cucumber", "Lemon juice", "Mixed herbs"],
    steps: ["Season chicken with lemon and herbs.", "Cook chicken thoroughly.", "Slice the chicken.", "Serve with rice and cucumber."]
},
{
    id: 222,
    title: "🥗 Crunchy Chickpea Salad",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 cup chickpeas", "1 cucumber", "1 tomato", "Lemon juice"],
    steps: ["Drain chickpeas.", "Chop cucumber and tomato.", "Combine ingredients.", "Add lemon juice and mix."]
},
{
    id: 223,
    title: "🌯 Chicken Veggie Wrap",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 tortilla", "1/2 cup cooked chicken", "Lettuce", "Tomato", "Cucumber"],
    steps: ["Slice chicken and vegetables.", "Place everything on tortilla.", "Roll tightly.", "Slice and serve."]
},
{
    id: 224,
    title: "🍚 Vegetable Rice Bowl",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked rice", "1/2 carrot", "1/2 bell pepper", "1/2 cup peas"],
    steps: ["Chop vegetables.", "Cook vegetables until tender.", "Add cooked rice.", "Mix and serve."]
},
{
    id: 225,
    title: "🥔 Herb Potato Salad",
    category: "lunch",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["3 potatoes", "1 tbsp olive oil", "Parsley", "Lemon juice"],
    steps: ["Boil potatoes until tender.", "Cut into pieces.", "Add parsley and olive oil.", "Finish with lemon juice."]
},
{
    id: 226,
    title: "🍅 Mediterranean Tomato Bowl",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["2 tomatoes", "1 cucumber", "1/4 cup olives", "1/4 cup feta cheese"],
    steps: ["Chop tomatoes and cucumber.", "Add olives.", "Crumble feta over the bowl.", "Mix gently."]
},
{
    id: 227,
    title: "🌽 Corn Bean Salad",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 cup beans", "1/2 cup corn", "1 tomato", "Lime juice"],
    steps: ["Drain beans.", "Chop tomato.", "Combine beans, corn and tomato.", "Add lime juice."]
},
{
    id: 228,
    title: "🥬 Turkey Lettuce Wraps",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup cooked turkey", "Lettuce leaves", "1 tomato", "1/2 cucumber"],
    steps: ["Slice turkey and vegetables.", "Place them inside lettuce leaves.", "Roll carefully.", "Serve fresh."]
},
{
    id: 229,
    title: "🍝 Tomato Basil Pasta",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["150g pasta", "2 tomatoes", "Fresh basil", "1 tsp olive oil"],
    steps: ["Cook pasta according to package directions.", "Chop tomatoes.", "Warm tomatoes with olive oil.", "Mix with pasta and basil."]
},
{
    id: 230,
    title: "🥦 Broccoli Rice Bowl",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked rice", "1 cup broccoli", "1 carrot", "1 tsp olive oil"],
    steps: ["Steam broccoli and carrot.", "Add cooked rice.", "Drizzle with olive oil.", "Mix and serve."]
},

{
    id: 231,
    title: "🥕 Carrot Lentil Bowl",
    category: "lunch",
    time: "25 min",
    difficulty: "Medium",
    ingredients: ["1 cup cooked lentils", "1 carrot", "1 tomato", "Parsley"],
    steps: ["Chop carrot and tomato.", "Cook carrot until tender.", "Add lentils.", "Top with tomato and parsley."]
},
{
    id: 232,
    title: "🥙 Hummus Veggie Pita",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 pita", "1/3 cup hummus", "Cucumber", "Tomato", "Lettuce"],
    steps: ["Cut pita open.", "Spread hummus inside.", "Add vegetables.", "Serve immediately."]
},
{
    id: 233,
    title: "🍳 Egg Vegetable Rice",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked rice", "2 eggs", "1/2 carrot", "1/2 cup peas"],
    steps: ["Cook vegetables.", "Add rice.", "Push rice aside and cook eggs.", "Mix everything together."]
},
{
    id: 234,
    title: "🐟 Lemon Fish Rice Bowl",
    category: "lunch",
    time: "25 min",
    difficulty: "Medium",
    ingredients: ["1 fish fillet", "1 cup cooked rice", "Lemon juice", "Cucumber"],
    steps: ["Season fish with lemon.", "Cook fish thoroughly.", "Serve with rice.", "Add sliced cucumber."]
},
{
    id: 235,
    title: "🫘 Bean Tomato Wrap",
    category: "lunch",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["1 tortilla", "1/2 cup beans", "1 tomato", "Lettuce"],
    steps: ["Mash beans lightly.", "Chop tomato and lettuce.", "Place ingredients on tortilla.", "Roll and serve."]
},
{
    id: 236,
    title: "🥒 Cucumber Yogurt Bowl",
    category: "lunch",
    time: "8 min",
    difficulty: "Easy",
    ingredients: ["1 cucumber", "1 cup yogurt", "Mint", "Lemon juice"],
    steps: ["Dice cucumber.", "Mix with yogurt.", "Add mint.", "Finish with lemon juice."]
},
{
    id: 237,
    title: "🍠 Sweet Potato Chickpea Bowl",
    category: "lunch",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["1 sweet potato", "1 cup chickpeas", "Spinach", "Olive oil"],
    steps: ["Bake or cook sweet potato until tender.", "Warm chickpeas.", "Add spinach.", "Combine and serve."]
},
{
    id: 238,
    title: "🥑 Avocado Bean Salad",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 avocado", "1 cup beans", "1 tomato", "Lime juice"],
    steps: ["Dice avocado and tomato.", "Add beans.", "Drizzle with lime juice.", "Mix gently."]
},
{
    id: 239,
    title: "🌶️ Pepper Chicken Bowl",
    category: "lunch",
    time: "25 min",
    difficulty: "Medium",
    ingredients: ["1 chicken breast", "1 bell pepper", "1 cup rice", "Mixed herbs"],
    steps: ["Slice pepper and chicken.", "Cook chicken thoroughly.", "Add bell pepper.", "Serve with rice."]
},
{
    id: 240,
    title: "🥗 Apple Walnut Salad",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 apple", "1 cup lettuce", "1 tbsp walnuts", "1/4 cup cheese"],
    steps: ["Slice apple.", "Add lettuce.", "Add walnuts and cheese.", "Mix gently."]
},

{
    id: 241,
    title: "🍝 Garlic Vegetable Pasta",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["150g pasta", "1 zucchini", "1 bell pepper", "1 garlic clove", "Olive oil"],
    steps: ["Cook pasta.", "Chop vegetables.", "Cook vegetables with garlic.", "Mix with pasta and serve."]
},
{
    id: 242,
    title: "🍗 Herb Chicken Potatoes",
    category: "dinner",
    time: "35 min",
    difficulty: "Medium",
    ingredients: ["1 chicken breast", "2 potatoes", "Mixed herbs", "Olive oil"],
    steps: ["Cut potatoes.", "Season chicken and potatoes.", "Cook until chicken is fully cooked and potatoes are tender.", "Serve together."]
},
{
    id: 243,
    title: "🍚 Vegetable Curry Rice",
    category: "dinner",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["1 cup cooked rice", "1 carrot", "1 bell pepper", "1 cup peas", "Mild curry powder"],
    steps: ["Cook vegetables.", "Add mild curry powder.", "Add cooked rice.", "Mix and heat through."]
},
{
    id: 244,
    title: "🐟 Herb Baked Fish",
    category: "dinner",
    time: "25 min",
    difficulty: "Medium",
    ingredients: ["1 fish fillet", "Lemon", "Mixed herbs", "1 tsp olive oil"],
    steps: ["Place fish in a baking dish.", "Add lemon and herbs.", "Bake until fully cooked.", "Serve warm."]
},
{
    id: 245,
    title: "🥘 Lentil Vegetable Stew",
    category: "dinner",
    time: "35 min",
    difficulty: "Medium",
    ingredients: ["1 cup lentils", "1 carrot", "1 tomato", "1/2 zucchini", "Water"],
    steps: ["Chop vegetables.", "Add lentils and vegetables to a pot.", "Cover with water.", "Simmer until tender."]
},
{
    id: 246,
    title: "🍅 Tomato Chickpea Pasta",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["150g pasta", "1 cup chickpeas", "2 tomatoes", "Basil"],
    steps: ["Cook pasta.", "Chop tomatoes.", "Warm tomatoes and chickpeas.", "Mix with pasta and basil."]
},
{
    id: 247,
    title: "🥦 Broccoli Cheese Rice",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked rice", "1 cup broccoli", "1/4 cup shredded cheese"],
    steps: ["Steam broccoli.", "Add rice.", "Sprinkle with cheese.", "Heat until cheese melts."]
},
{
    id: 248,
    title: "🌯 Chicken Avocado Burrito",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 tortilla", "1/2 cup cooked chicken", "1/2 avocado", "1/4 cup beans"],
    steps: ["Slice avocado.", "Add chicken and beans to tortilla.", "Add avocado.", "Fold and serve."]
},
{
    id: 249,
    title: "🍲 Vegetable Noodle Soup",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["1 cup noodles", "1 carrot", "1/2 zucchini", "Vegetable broth"],
    steps: ["Chop vegetables.", "Simmer vegetables in broth.", "Add noodles.", "Cook until noodles are tender."]
},
{
    id: 250,
    title: "🥔 Potato Chickpea Curry",
    category: "dinner",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["2 potatoes", "1 cup chickpeas", "1 tomato", "Mild curry powder"],
    steps: ["Cut potatoes.", "Cook potatoes until tender.", "Add tomato and chickpeas.", "Add mild curry powder and simmer."]
},

{
    id: 251,
    title: "🍆 Eggplant Tomato Rice",
    category: "dinner",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["1 eggplant", "2 tomatoes", "1 cup cooked rice", "Olive oil"],
    steps: ["Dice eggplant.", "Cook eggplant until tender.", "Add tomatoes.", "Serve with rice."]
},
{
    id: 252,
    title: "🥕 Carrot Pea Pasta",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["150g pasta", "1 carrot", "1/2 cup peas", "Olive oil"],
    steps: ["Cook pasta.", "Cook chopped carrot and peas.", "Add pasta.", "Mix and serve."]
},
{
    id: 253,
    title: "🍳 Vegetable Egg Fried Rice",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked rice", "2 eggs", "1 carrot", "1/2 cup peas"],
    steps: ["Cook vegetables.", "Add rice.", "Cook eggs separately in the pan.", "Mix everything together."]
},
{
    id: 254,
    title: "🌱 Spinach Bean Pasta",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["150g pasta", "1 cup beans", "1 cup spinach", "1 tomato"],
    steps: ["Cook pasta.", "Cook tomato and spinach.", "Add beans.", "Mix with pasta."]
},
{
    id: 255,
    title: "🍗 Chicken Tomato Couscous",
    category: "dinner",
    time: "25 min",
    difficulty: "Medium",
    ingredients: ["1/2 cup couscous", "1 chicken breast", "1 tomato", "Parsley"],
    steps: ["Prepare couscous according to package directions.", "Cook chicken thoroughly.", "Chop tomato.", "Serve chicken and tomato over couscous."]
},
{
    id: 256,
    title: "🥬 Vegetable Couscous Bowl",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup couscous", "1 carrot", "1 zucchini", "1/2 bell pepper"],
    steps: ["Prepare couscous.", "Chop vegetables.", "Cook vegetables until tender.", "Combine with couscous."]
},
{
    id: 257,
    title: "🐟 Fish Vegetable Wrap",
    category: "dinner",
    time: "20 min",
    difficulty: "Medium",
    ingredients: ["1 tortilla", "1 cooked fish fillet", "Lettuce", "Tomato", "Cucumber"],
    steps: ["Flake cooked fish.", "Chop vegetables.", "Place everything on tortilla.", "Roll and serve."]
},
{
    id: 258,
    title: "🍅 Tomato Lentil Rice",
    category: "dinner",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked lentils", "2 tomatoes", "1 cup rice", "Parsley"],
    steps: ["Chop tomatoes.", "Warm tomatoes and lentils.", "Add parsley.", "Serve with rice."]
},
{
    id: 259,
    title: "🥦 Broccoli Potato Bowl",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["2 potatoes", "1 cup broccoli", "1 tsp olive oil", "Herbs"],
    steps: ["Cook potatoes until tender.", "Steam broccoli.", "Combine vegetables.", "Add olive oil and herbs."]
},
{
    id: 260,
    title: "🍚 Chickpea Vegetable Rice",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["1 cup rice", "1 cup chickpeas", "1 carrot", "1/2 bell pepper"],
    steps: ["Cook vegetables.", "Add chickpeas.", "Mix with cooked rice.", "Heat and serve."]
},

{
    id: 261,
    title: "🍌 Frozen Banana Bites",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 banana", "2 tbsp yogurt"],
    steps: ["Slice banana.", "Dip pieces in yogurt.", "Place on a plate.", "Freeze until firm."]
},
{
    id: 262,
    title: "🍎 Apple Cinnamon Bites",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 apple", "1/2 tsp cinnamon"],
    steps: ["Slice apple.", "Arrange on a plate.", "Sprinkle with cinnamon.", "Serve."]
},
{
    id: 263,
    title: "🥕 Carrot Hummus Cups",
    category: "snacks",
    time: "7 min",
    difficulty: "Easy",
    ingredients: ["2 carrots", "1/3 cup hummus"],
    steps: ["Cut carrots into sticks.", "Place hummus in a small bowl.", "Serve carrot sticks with hummus."]
},
{
    id: 264,
    title: "🍓 Strawberry Oat Cups",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup oats", "1/2 cup strawberries", "1/2 cup yogurt"],
    steps: ["Slice strawberries.", "Layer oats and yogurt.", "Add strawberries.", "Serve chilled."]
},
{
    id: 265,
    title: "🥒 Cucumber Cheese Bites",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cucumber", "1/4 cup cheese"],
    steps: ["Slice cucumber.", "Cut cheese into small pieces.", "Place cheese on cucumber slices.", "Serve."]
},
{
    id: 266,
    title: "🍐 Pear Yogurt Dip",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 pear", "1/2 cup yogurt", "1 tsp honey"],
    steps: ["Slice pear.", "Mix yogurt with honey.", "Serve pear with yogurt dip."]
},
{
    id: 267,
    title: "🌽 Sweet Corn Cups",
    category: "snacks",
    time: "8 min",
    difficulty: "Easy",
    ingredients: ["1 cup corn", "1 tsp lemon juice", "Parsley"],
    steps: ["Warm corn.", "Add lemon juice.", "Top with parsley.", "Serve in small cups."]
},
{
    id: 268,
    title: "🍇 Grape Yogurt Skewers",
    category: "snacks",
    time: "8 min",
    difficulty: "Easy",
    ingredients: ["1 cup grapes", "1/2 cup yogurt"],
    steps: ["Wash grapes.", "Thread grapes carefully onto food-safe skewers.", "Serve with yogurt for dipping."]
},
{
    id: 269,
    title: "🥜 Nutty Apple Slices",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 apple", "1 tbsp peanut butter", "1 tbsp chopped nuts"],
    steps: ["Slice apple.", "Spread a small amount of peanut butter.", "Sprinkle with chopped nuts."]
},
{
    id: 270,
    title: "🍊 Orange Yogurt Cup",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 orange", "1/2 cup yogurt"],
    steps: ["Peel and separate orange segments.", "Add yogurt to a cup.", "Top with orange segments."]
},

{
    id: 271,
    title: "🍉 Watermelon Mint Cups",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["2 cups watermelon", "Fresh mint"],
    steps: ["Cut watermelon into cubes.", "Add mint.", "Chill briefly and serve."]
},
{
    id: 272,
    title: "🥭 Mango Coconut Bowl",
    category: "snacks",
    time: "7 min",
    difficulty: "Easy",
    ingredients: ["1 mango", "2 tbsp shredded coconut"],
    steps: ["Dice mango.", "Add coconut.", "Mix gently and serve."]
},
{
    id: 273,
    title: "🍌 Banana Oat Bites",
    category: "snacks",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 banana", "1 cup oats", "1/2 tsp cinnamon"],
    steps: ["Mash banana.", "Mix with oats and cinnamon.", "Form small bites.", "Bake until firm."]
},
{
    id: 274,
    title: "🥝 Kiwi Berry Cup",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 kiwi", "1/2 cup berries", "1/2 cup yogurt"],
    steps: ["Peel and slice kiwi.", "Add yogurt to a cup.", "Top with kiwi and berries."]
},
{
    id: 275,
    title: "🍿 Herb Popcorn",
    category: "snacks",
    time: "8 min",
    difficulty: "Easy",
    ingredients: ["3 cups plain popcorn", "1/2 tsp dried herbs"],
    steps: ["Prepare plain popcorn.", "Sprinkle with dried herbs.", "Toss gently and serve."]
},
{
    id: 276,
    title: "🥣 Berry Oat Yogurt Cup",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup yogurt", "1/2 cup berries", "2 tbsp oats"],
    steps: ["Add yogurt to a cup.", "Add oats.", "Top with berries."]
},
{
    id: 277,
    title: "🍅 Tomato Cucumber Cups",
    category: "snacks",
    time: "7 min",
    difficulty: "Easy",
    ingredients: ["1 tomato", "1 cucumber", "1 tbsp cheese"],
    steps: ["Slice tomato and cucumber.", "Arrange together.", "Top with crumbled cheese."]
},
{
    id: 278,
    title: "🥥 Coconut Banana Bowl",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 banana", "2 tbsp shredded coconut", "1/2 cup yogurt"],
    steps: ["Slice banana.", "Add yogurt.", "Top with banana and coconut."]
},
{
    id: 279,
    title: "🍑 Peach Oat Yogurt",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 peach", "1/2 cup yogurt", "2 tbsp oats"],
    steps: ["Slice peach.", "Add yogurt to a bowl.", "Top with peach and oats."]
},
{
    id: 280,
    title: "🫐 Blueberry Banana Cup",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 banana", "1/2 cup blueberries", "1/2 cup yogurt"],
    steps: ["Slice banana.", "Add yogurt.", "Top with banana and blueberries."]
},

{
    id: 281,
    title: "🌱 Spinach Feta Omelet",
    category: "vegetarian",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["2 eggs", "1/2 cup spinach", "2 tbsp feta cheese"],
    steps: ["Whisk eggs.", "Cook spinach briefly.", "Add eggs.", "Top with feta and fold."]
},
{
    id: 282,
    title: "🥦 Broccoli Cheese Bites",
    category: "vegetarian",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked broccoli", "1 egg", "1/4 cup shredded cheese"],
    steps: ["Chop broccoli.", "Mix with egg and cheese.", "Form small bites.", "Bake until firm."]
},
{
    id: 283,
    title: "🍅 Caprese Toast",
    category: "vegetarian",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["2 slices bread", "1 tomato", "1/4 cup mozzarella", "Fresh basil"],
    steps: ["Toast bread.", "Slice tomato and mozzarella.", "Place on toast.", "Add basil."]
},
{
    id: 284,
    title: "🥑 Avocado Tomato Salad",
    category: "vegetarian",
    time: "8 min",
    difficulty: "Easy",
    ingredients: ["1 avocado", "2 tomatoes", "Lemon juice"],
    steps: ["Dice avocado and tomatoes.", "Add lemon juice.", "Mix gently."]
},
{
    id: 285,
    title: "🌽 Corn Cheese Quesadilla",
    category: "vegetarian",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["2 tortillas", "1/2 cup corn", "1/2 cup shredded cheese"],
    steps: ["Place corn and cheese on one tortilla.", "Cover with the second tortilla.", "Cook on a pan until cheese melts.", "Slice and serve."]
},
{
    id: 286,
    title: "🥕 Roasted Vegetable Wrap",
    category: "vegetarian",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["1 tortilla", "1 carrot", "1 zucchini", "1 bell pepper"],
    steps: ["Chop vegetables.", "Cook until tender.", "Place vegetables on tortilla.", "Roll and serve."]
},
{
    id: 287,
    title: "🍆 Eggplant Hummus Bowl",
    category: "vegetarian",
    time: "25 min",
    difficulty: "Medium",
    ingredients: ["1 eggplant", "1/3 cup hummus", "Tomato", "Parsley"],
    steps: ["Cook eggplant until tender.", "Place hummus in a bowl.", "Add eggplant and tomato.", "Top with parsley."]
},
{
    id: 288,
    title: "🥔 Herbed Potato Wedges",
    category: "vegetarian",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["3 potatoes", "Olive oil", "Mixed herbs"],
    steps: ["Cut potatoes into wedges.", "Toss with olive oil and herbs.", "Bake until tender and lightly browned.", "Serve warm."]
},
{
    id: 289,
    title: "🍚 Vegetable Couscous Salad",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup couscous", "Cucumber", "Tomato", "Parsley"],
    steps: ["Prepare couscous.", "Chop vegetables.", "Combine all ingredients.", "Add parsley and serve."]
},
{
    id: 290,
    title: "🥬 Spinach Chickpea Wrap",
    category: "vegetarian",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["1 tortilla", "1/2 cup chickpeas", "1 cup spinach", "Tomato"],
    steps: ["Mash chickpeas lightly.", "Add spinach and tomato.", "Place mixture on tortilla.", "Roll and serve."]
},

{
    id: 291,
    title: "🍠 Sweet Potato Bean Bowl",
    category: "vegetarian",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["1 sweet potato", "1/2 cup beans", "1/2 avocado"],
    steps: ["Cook sweet potato until tender.", "Warm beans.", "Slice avocado.", "Serve together in a bowl."]
},
{
    id: 292,
    title: "🥒 Cucumber Hummus Toast",
    category: "vegetarian",
    time: "7 min",
    difficulty: "Easy",
    ingredients: ["2 slices bread", "1/3 cup hummus", "1/2 cucumber"],
    steps: ["Toast bread.", "Spread hummus.", "Slice cucumber.", "Arrange cucumber on toast."]
},
{
    id: 293,
    title: "🍅 Tomato Lentil Salad",
    category: "vegetarian",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked lentils", "2 tomatoes", "Parsley", "Lemon juice"],
    steps: ["Chop tomatoes.", "Combine with lentils.", "Add parsley.", "Finish with lemon juice."]
},
{
    id: 294,
    title: "🥦 Broccoli Chickpea Salad",
    category: "vegetarian",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["1 cup broccoli", "1 cup chickpeas", "1 tomato", "Lemon juice"],
    steps: ["Steam broccoli until tender.", "Add chickpeas and tomato.", "Add lemon juice.", "Mix gently."]
},
{
    id: 295,
    title: "🌱 Green Pea Pasta",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["150g pasta", "1 cup peas", "1/2 cup spinach", "Olive oil"],
    steps: ["Cook pasta.", "Cook peas and spinach.", "Add pasta.", "Mix with olive oil."]
},
{
    id: 296,
    title: "🥕 Carrot Hummus Wrap",
    category: "vegetarian",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 tortilla", "1/3 cup hummus", "1 carrot", "Lettuce"],
    steps: ["Spread hummus on tortilla.", "Grate carrot.", "Add lettuce and carrot.", "Roll tightly."]
},
{
    id: 297,
    title: "🍄 Mushroom Rice Bowl",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked rice", "1 cup mushrooms", "1/2 bell pepper", "Olive oil"],
    steps: ["Slice mushrooms and pepper.", "Cook until tender.", "Add cooked rice.", "Mix and serve."]
},
{
    id: 298,
    title: "🥗 Rainbow Bean Salad",
    category: "vegetarian",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["1 cup mixed beans", "1/2 bell pepper", "1 tomato", "1/2 cucumber"],
    steps: ["Chop vegetables.", "Add beans.", "Mix all ingredients.", "Serve chilled."]
},
{
    id: 299,
    title: "🍠 Sweet Potato Avocado Toast",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 slice whole-grain bread", "1/2 sweet potato", "1/2 avocado"],
    steps: ["Cook sweet potato until tender.", "Toast bread.", "Mash avocado.", "Top toast with avocado and sweet potato."]
},
{
    id: 300,
    title: "🌈 Rainbow Vegetable Bowl",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1/2 carrot", "1/2 cucumber", "1/2 bell pepper", "1/2 cup corn", "1 cup cooked rice"],
    steps: ["Chop all vegetables.", "Arrange rice in a bowl.", "Add vegetables in sections.", "Serve fresh."]
},
{
    id: 301,
    title: "🥣 Peach Cinnamon Oatmeal",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup oats", "1 peach", "1 cup milk", "1/2 tsp cinnamon"],
    steps: ["Slice peach.", "Cook oats with milk.", "Add peach and cinnamon.", "Serve warm."]
},
{
    id: 302,
    title: "🍓 Berry Banana Toast",
    category: "breakfast",
    time: "7 min",
    difficulty: "Easy",
    ingredients: ["2 slices bread", "1 banana", "1/2 cup berries", "2 tbsp yogurt"],
    steps: ["Toast bread.", "Spread yogurt.", "Add sliced banana and berries.", "Serve."]
},
{
    id: 303,
    title: "🥚 Mushroom Egg Toast",
    category: "breakfast",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["2 eggs", "1/2 cup mushrooms", "2 slices bread"],
    steps: ["Slice mushrooms.", "Cook mushrooms.", "Add beaten eggs.", "Serve over toast."]
},
{
    id: 304,
    title: "🍎 Apple Walnut Yogurt",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 apple", "1 cup yogurt", "1 tbsp walnuts", "1 tsp honey"],
    steps: ["Dice apple.", "Add yogurt.", "Top with walnuts.", "Drizzle with honey."]
},
{
    id: 305,
    title: "🥞 Banana Cinnamon Pancakes",
    category: "breakfast",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 banana", "1 egg", "1/2 cup oats", "1/2 tsp cinnamon"],
    steps: ["Mash banana.", "Mix all ingredients.", "Cook small pancakes.", "Serve warm."]
},
{
    id: 306,
    title: "🥭 Mango Oat Bowl",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup oats", "1/2 mango", "1 cup milk"],
    steps: ["Cook oats with milk.", "Dice mango.", "Top oats with mango.", "Serve."]
},
{
    id: 307,
    title: "🥑 Avocado Tomato Egg Toast",
    category: "breakfast",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["2 slices bread", "1/2 avocado", "1 tomato", "2 eggs"],
    steps: ["Toast bread.", "Mash avocado.", "Cook eggs.", "Top toast with avocado, tomato and egg."]
},
{
    id: 308,
    title: "🫐 Blueberry Yogurt Crunch",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cup yogurt", "1/2 cup blueberries", "1/4 cup granola"],
    steps: ["Add yogurt to a bowl.", "Add blueberries.", "Top with granola."]
},
{
    id: 309,
    title: "🍐 Pear Honey Oatmeal",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup oats", "1 pear", "1 cup milk", "1 tsp honey"],
    steps: ["Cook oats with milk.", "Dice pear.", "Add pear.", "Drizzle with honey."]
},
{
    id: 310,
    title: "🌽 Corn Egg Breakfast Bowl",
    category: "breakfast",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["2 eggs", "1/2 cup corn", "1/2 cup cooked rice"],
    steps: ["Cook eggs.", "Warm corn and rice.", "Combine ingredients.", "Serve warm."]
},

{
    id: 311,
    title: "🍌 Banana Berry Smoothie Bowl",
    category: "breakfast",
    time: "8 min",
    difficulty: "Easy",
    ingredients: ["1 banana", "1/2 cup berries", "1/2 cup yogurt", "2 tbsp oats"],
    steps: ["Blend banana, berries and yogurt.", "Pour into a bowl.", "Top with oats."]
},
{
    id: 312,
    title: "🍅 Tomato Spinach Egg Wrap",
    category: "breakfast",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["1 tortilla", "2 eggs", "1/2 tomato", "1/2 cup spinach"],
    steps: ["Cook spinach and eggs.", "Warm tortilla.", "Add tomato.", "Add egg mixture and roll."]
},
{
    id: 313,
    title: "🥝 Kiwi Oat Yogurt Bowl",
    category: "breakfast",
    time: "6 min",
    difficulty: "Easy",
    ingredients: ["1 kiwi", "1 cup yogurt", "2 tbsp oats"],
    steps: ["Slice kiwi.", "Add yogurt.", "Top with kiwi and oats."]
},
{
    id: 314,
    title: "🍯 Honey Apple Toast",
    category: "breakfast",
    time: "7 min",
    difficulty: "Easy",
    ingredients: ["2 slices bread", "1 apple", "1 tsp honey", "1/2 tsp cinnamon"],
    steps: ["Toast bread.", "Thinly slice apple.", "Arrange apple on toast.", "Add honey and cinnamon."]
},
{
    id: 315,
    title: "🥣 Strawberry Chia Yogurt",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cup yogurt", "1/2 cup strawberries", "1 tsp chia seeds"],
    steps: ["Slice strawberries.", "Add yogurt to a bowl.", "Top with strawberries and chia seeds."]
},
{
    id: 316,
    title: "🍑 Peach Banana Oat Bowl",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup oats", "1/2 peach", "1 banana", "1 cup milk"],
    steps: ["Cook oats with milk.", "Slice fruit.", "Add fruit to oats.", "Serve."]
},
{
    id: 317,
    title: "🧀 Cheese Vegetable Omelet",
    category: "breakfast",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["2 eggs", "1/4 cup cheese", "1/2 bell pepper", "1 tomato"],
    steps: ["Chop vegetables.", "Cook vegetables briefly.", "Add beaten eggs.", "Add cheese and fold."]
},
{
    id: 318,
    title: "🍇 Grape Banana Yogurt Bowl",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cup yogurt", "1/2 cup grapes", "1 banana"],
    steps: ["Slice banana.", "Halve grapes.", "Add yogurt.", "Top with fruit."]
},
{
    id: 319,
    title: "🥜 Peanut Butter Oat Bowl",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup oats", "1 cup milk", "1 tbsp peanut butter", "1 banana"],
    steps: ["Cook oats with milk.", "Stir in peanut butter.", "Slice banana.", "Top with banana."]
},
{
    id: 320,
    title: "🍊 Orange Berry Yogurt",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 orange", "1/2 cup berries", "1 cup yogurt"],
    steps: ["Peel orange.", "Separate segments.", "Add yogurt.", "Top with fruit."]
},

{
    id: 321,
    title: "🥗 Mediterranean Chickpea Bowl",
    category: "lunch",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["1 cup chickpeas", "1 cucumber", "1 tomato", "1/4 cup feta"],
    steps: ["Chop vegetables.", "Add chickpeas.", "Add feta.", "Mix gently."]
},
{
    id: 322,
    title: "🍗 Chicken Cucumber Rice Bowl",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 chicken breast", "1 cup cooked rice", "1/2 cucumber", "Lemon juice"],
    steps: ["Cook chicken thoroughly.", "Slice chicken.", "Add rice and cucumber.", "Finish with lemon juice."]
},
{
    id: 323,
    title: "🥙 Hummus Chicken Pita",
    category: "lunch",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["1 pita", "1/3 cup hummus", "1/2 cup cooked chicken", "Lettuce"],
    steps: ["Open pita.", "Spread hummus.", "Add chicken and lettuce.", "Serve."]
},
{
    id: 324,
    title: "🥕 Carrot Couscous Salad",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup couscous", "1 carrot", "1 cucumber", "Parsley"],
    steps: ["Prepare couscous.", "Chop vegetables.", "Combine ingredients.", "Add parsley."]
},
{
    id: 325,
    title: "🐟 Tuna Tomato Rice Bowl",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked rice", "1 small can tuna", "1 tomato", "Cucumber"],
    steps: ["Drain tuna.", "Chop vegetables.", "Add rice and tuna.", "Top with vegetables."]
},
{
    id: 326,
    title: "🥬 Turkey Vegetable Sandwich",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["2 bread slices", "1/2 cup cooked turkey", "Lettuce", "Tomato"],
    steps: ["Toast bread if desired.", "Add turkey.", "Add lettuce and tomato.", "Close sandwich."]
},
{
    id: 327,
    title: "🍚 Chickpea Tomato Rice",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked rice", "1 cup chickpeas", "1 tomato", "Parsley"],
    steps: ["Chop tomato.", "Warm chickpeas.", "Combine with rice.", "Add parsley."]
},
{
    id: 328,
    title: "🥒 Cucumber Bean Salad",
    category: "lunch",
    time: "8 min",
    difficulty: "Easy",
    ingredients: ["1 cucumber", "1 cup beans", "1 tomato", "Lemon juice"],
    steps: ["Dice cucumber and tomato.", "Add beans.", "Add lemon juice.", "Mix."]
},
{
    id: 329,
    title: "🍝 Spinach Tomato Pasta",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["150g pasta", "1 cup spinach", "2 tomatoes", "Olive oil"],
    steps: ["Cook pasta.", "Cook tomatoes and spinach.", "Add pasta.", "Mix with olive oil."]
},
{
    id: 330,
    title: "🌽 Bean Corn Wrap",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 tortilla", "1/2 cup beans", "1/2 cup corn", "Lettuce"],
    steps: ["Add beans and corn to tortilla.", "Add lettuce.", "Roll tightly.", "Serve."]
},

{
    id: 331,
    title: "🥔 Potato Bean Salad",
    category: "lunch",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["2 potatoes", "1/2 cup beans", "Parsley", "Lemon juice"],
    steps: ["Boil potatoes until tender.", "Cut potatoes.", "Add beans and parsley.", "Add lemon juice."]
},
{
    id: 332,
    title: "🥦 Broccoli Chicken Salad",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup broccoli", "1/2 cup cooked chicken", "1 tomato", "Lemon juice"],
    steps: ["Steam broccoli.", "Slice chicken.", "Add tomato.", "Mix with lemon juice."]
},
{
    id: 333,
    title: "🍠 Sweet Potato Lentil Bowl",
    category: "lunch",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["1 sweet potato", "1 cup lentils", "Spinach"],
    steps: ["Cook sweet potato until tender.", "Warm lentils.", "Add spinach.", "Serve together."]
},
{
    id: 334,
    title: "🥑 Avocado Chickpea Wrap",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 tortilla", "1/2 avocado", "1/2 cup chickpeas", "Lettuce"],
    steps: ["Mash avocado.", "Add chickpeas and lettuce.", "Place on tortilla.", "Roll and serve."]
},
{
    id: 335,
    title: "🍅 Feta Tomato Couscous",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup couscous", "1 tomato", "1/4 cup feta", "Parsley"],
    steps: ["Prepare couscous.", "Dice tomato.", "Add feta.", "Mix with parsley."]
},
{
    id: 336,
    title: "🥗 Rainbow Chicken Salad",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup chicken", "Lettuce", "Carrot", "Cucumber", "Tomato"],
    steps: ["Slice chicken.", "Chop vegetables.", "Add lettuce.", "Combine everything."]
},
{
    id: 337,
    title: "🍲 Lentil Tomato Soup",
    category: "lunch",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["1 cup lentils", "2 tomatoes", "1 carrot", "Water"],
    steps: ["Chop vegetables.", "Add ingredients to a pot.", "Cover with water.", "Simmer until lentils are tender."]
},
{
    id: 338,
    title: "🌯 Egg Salad Wrap",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 tortilla", "2 boiled eggs", "Lettuce", "Tomato"],
    steps: ["Chop boiled eggs.", "Add vegetables.", "Place mixture on tortilla.", "Roll and serve."]
},
{
    id: 339,
    title: "🍚 Green Vegetable Rice",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked rice", "1 cup peas", "1/2 cup spinach", "1/2 cucumber"],
    steps: ["Warm peas and spinach.", "Add rice.", "Mix together.", "Serve with cucumber."]
},
{
    id: 340,
    title: "🥙 Falafel Vegetable Pita",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 pita", "3 falafel pieces", "Tomato", "Cucumber", "Lettuce"],
    steps: ["Warm falafel.", "Open pita.", "Add vegetables and falafel.", "Serve."]
},

{
    id: 341,
    title: "🍗 Garlic Herb Chicken Pasta",
    category: "dinner",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["150g pasta", "1 chicken breast", "1 garlic clove", "Mixed herbs"],
    steps: ["Cook pasta.", "Cook chicken thoroughly.", "Slice chicken.", "Combine pasta, chicken, garlic and herbs."]
},
{
    id: 342,
    title: "🥦 Broccoli Tomato Pasta Bake",
    category: "dinner",
    time: "35 min",
    difficulty: "Medium",
    ingredients: ["150g pasta", "1 cup broccoli", "1 cup tomato sauce", "1/4 cup cheese"],
    steps: ["Cook pasta.", "Steam broccoli.", "Combine pasta, broccoli and sauce.", "Top with cheese and bake."]
},
{
    id: 343,
    title: "🍚 Chicken Vegetable Rice",
    category: "dinner",
    time: "25 min",
    difficulty: "Medium",
    ingredients: ["1 chicken breast", "1 cup rice", "1 carrot", "1/2 bell pepper"],
    steps: ["Cook chicken thoroughly.", "Cook vegetables.", "Add cooked rice.", "Serve with sliced chicken."]
},
{
    id: 344,
    title: "🐟 Lemon Herb Rice Fish",
    category: "dinner",
    time: "25 min",
    difficulty: "Medium",
    ingredients: ["1 fish fillet", "1 cup cooked rice", "Lemon", "Herbs"],
    steps: ["Season fish.", "Cook fish thoroughly.", "Prepare rice.", "Serve fish with rice and lemon."]
},
{
    id: 345,
    title: "🥘 Chickpea Vegetable Stew",
    category: "dinner",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["1 cup chickpeas", "1 carrot", "1 zucchini", "1 tomato"],
    steps: ["Chop vegetables.", "Cook vegetables until tender.", "Add chickpeas.", "Simmer and serve."]
},
{
    id: 346,
    title: "🍝 Mushroom Tomato Pasta",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["150g pasta", "1 cup mushrooms", "2 tomatoes", "Basil"],
    steps: ["Cook pasta.", "Cook mushrooms and tomatoes.", "Add pasta.", "Finish with basil."]
},
{
    id: 347,
    title: "🥔 Chicken Potato Bowl",
    category: "dinner",
    time: "35 min",
    difficulty: "Medium",
    ingredients: ["1 chicken breast", "2 potatoes", "1 carrot", "Herbs"],
    steps: ["Cut potatoes and carrot.", "Cook vegetables until tender.", "Cook chicken thoroughly.", "Serve together."]
},
{
    id: 348,
    title: "🌱 Spinach Lentil Curry",
    category: "dinner",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["1 cup lentils", "1 cup spinach", "1 tomato", "Mild curry powder"],
    steps: ["Cook lentils.", "Add tomato.", "Add spinach and curry powder.", "Simmer gently."]
},
{
    id: 349,
    title: "🌽 Vegetable Bean Tacos",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["3 tortillas", "1/2 cup beans", "1/2 cup corn", "Tomato", "Lettuce"],
    steps: ["Warm beans and corn.", "Chop vegetables.", "Fill tortillas.", "Serve."]
},
{
    id: 350,
    title: "🍅 Tomato Vegetable Couscous",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup couscous", "1 tomato", "1 zucchini", "1 carrot"],
    steps: ["Prepare couscous.", "Cook vegetables.", "Add tomato.", "Mix vegetables with couscous."]
},

{
    id: 351,
    title: "🥬 Cabbage Chickpea Stir Fry",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["2 cups cabbage", "1 cup chickpeas", "1 carrot", "Olive oil"],
    steps: ["Slice cabbage and carrot.", "Cook vegetables.", "Add chickpeas.", "Stir and serve."]
},
{
    id: 352,
    title: "🍆 Eggplant Chickpea Stew",
    category: "dinner",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["1 eggplant", "1 cup chickpeas", "2 tomatoes", "Herbs"],
    steps: ["Dice eggplant.", "Cook eggplant until tender.", "Add tomatoes and chickpeas.", "Simmer with herbs."]
},
{
    id: 353,
    title: "🥕 Carrot Pea Rice Bowl",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup rice", "1 carrot", "1 cup peas", "Herbs"],
    steps: ["Cook carrot and peas.", "Add cooked rice.", "Season with herbs.", "Serve."]
},
{
    id: 354,
    title: "🍗 Tomato Chicken Wrap",
    category: "dinner",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 tortilla", "1/2 cup cooked chicken", "1 tomato", "Lettuce"],
    steps: ["Slice chicken and tomato.", "Add ingredients to tortilla.", "Add lettuce.", "Roll tightly."]
},
{
    id: 355,
    title: "🥦 Broccoli Lentil Bowl",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["1 cup lentils", "1 cup broccoli", "1/2 cup rice"],
    steps: ["Cook broccoli.", "Warm lentils.", "Add rice.", "Combine and serve."]
},
{
    id: 356,
    title: "🍠 Sweet Potato Chickpea Curry",
    category: "dinner",
    time: "35 min",
    difficulty: "Medium",
    ingredients: ["1 sweet potato", "1 cup chickpeas", "1 tomato", "Mild curry powder"],
    steps: ["Dice sweet potato.", "Cook until tender.", "Add chickpeas and tomato.", "Add mild curry powder and simmer."]
},
{
    id: 357,
    title: "🐟 Fish Tomato Couscous",
    category: "dinner",
    time: "25 min",
    difficulty: "Medium",
    ingredients: ["1 fish fillet", "1/2 cup couscous", "1 tomato", "Parsley"],
    steps: ["Prepare couscous.", "Cook fish thoroughly.", "Dice tomato.", "Serve together with parsley."]
},
{
    id: 358,
    title: "🍄 Mushroom Vegetable Rice",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked rice", "1 cup mushrooms", "1/2 bell pepper", "1 carrot"],
    steps: ["Slice vegetables.", "Cook mushrooms and vegetables.", "Add rice.", "Mix and serve."]
},
{
    id: 359,
    title: "🥒 Zucchini Tomato Pasta",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["150g pasta", "1 zucchini", "2 tomatoes", "Basil"],
    steps: ["Cook pasta.", "Cook zucchini and tomatoes.", "Add pasta.", "Finish with basil."]
},
{
    id: 360,
    title: "🫘 Bean Vegetable Chili Bowl",
    category: "dinner",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["1 cup beans", "1 tomato", "1 bell pepper", "Corn", "Mild spices"],
    steps: ["Chop vegetables.", "Cook vegetables.", "Add beans and corn.", "Simmer with mild spices."]
},

{
    id: 361,
    title: "🍓 Strawberry Banana Bites",
    category: "snacks",
    time: "7 min",
    difficulty: "Easy",
    ingredients: ["1 banana", "1/2 cup strawberries", "2 tbsp yogurt"],
    steps: ["Slice banana and strawberries.", "Add a little yogurt.", "Arrange together.", "Serve chilled."]
},
{
    id: 362,
    title: "🥒 Cucumber Hummus Boats",
    category: "snacks",
    time: "8 min",
    difficulty: "Easy",
    ingredients: ["1 cucumber", "1/3 cup hummus"],
    steps: ["Cut cucumber lengthwise.", "Scoop a shallow center.", "Fill with hummus.", "Slice into pieces."]
},
{
    id: 363,
    title: "🍎 Apple Oat Snack Cups",
    category: "snacks",
    time: "8 min",
    difficulty: "Easy",
    ingredients: ["1 apple", "1/4 cup oats", "1/2 cup yogurt"],
    steps: ["Dice apple.", "Add yogurt.", "Top with oats and apple."]
},
{
    id: 364,
    title: "🍌 Banana Coconut Bites",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 banana", "2 tbsp shredded coconut"],
    steps: ["Slice banana.", "Roll pieces lightly in coconut.", "Serve."]
},
{
    id: 365,
    title: "🍊 Citrus Fruit Cup",
    category: "snacks",
    time: "7 min",
    difficulty: "Easy",
    ingredients: ["1 orange", "1/2 grapefruit", "1/2 cup grapes"],
    steps: ["Peel orange and grapefruit.", "Separate segments.", "Add grapes.", "Serve chilled."]
},
{
    id: 366,
    title: "🥜 Peanut Butter Pear Toast",
    category: "snacks",
    time: "7 min",
    difficulty: "Easy",
    ingredients: ["1 slice bread", "1/2 pear", "1 tbsp peanut butter"],
    steps: ["Toast bread.", "Spread peanut butter.", "Slice pear.", "Arrange pear on toast."]
},
{
    id: 367,
    title: "🫐 Blueberry Oat Cups",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup blueberries", "1/2 cup yogurt", "2 tbsp oats"],
    steps: ["Add yogurt.", "Add oats.", "Top with blueberries."]
},
{
    id: 368,
    title: "🥭 Mango Yogurt Bites",
    category: "snacks",
    time: "8 min",
    difficulty: "Easy",
    ingredients: ["1/2 mango", "1/2 cup yogurt"],
    steps: ["Dice mango.", "Spoon yogurt onto small portions.", "Top with mango.", "Chill and serve."]
},
{
    id: 369,
    title: "🍿 Cinnamon Popcorn",
    category: "snacks",
    time: "8 min",
    difficulty: "Easy",
    ingredients: ["3 cups plain popcorn", "1/2 tsp cinnamon"],
    steps: ["Prepare popcorn.", "Sprinkle with cinnamon.", "Toss gently."]
},
{
    id: 370,
    title: "🥝 Kiwi Banana Cup",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 kiwi", "1 banana", "1/2 cup yogurt"],
    steps: ["Slice fruit.", "Add yogurt to a cup.", "Top with fruit."]
},

{
    id: 371,
    title: "🍉 Melon Berry Bowl",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cup melon", "1/2 cup berries"],
    steps: ["Dice melon.", "Add berries.", "Mix and serve chilled."]
},
{
    id: 372,
    title: "🍑 Peach Banana Bites",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 peach", "1 banana"],
    steps: ["Slice both fruits.", "Arrange together.", "Serve chilled."]
},
{
    id: 373,
    title: "🥕 Carrot Cucumber Crunch",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 carrot", "1 cucumber", "1/3 cup hummus"],
    steps: ["Cut vegetables into sticks.", "Place hummus in a bowl.", "Serve together."]
},
{
    id: 374,
    title: "🍇 Grape Apple Bowl",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup grapes", "1 apple"],
    steps: ["Halve grapes.", "Dice apple.", "Combine and serve."]
},
{
    id: 375,
    title: "🥥 Coconut Berry Yogurt",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup yogurt", "1/2 cup berries", "2 tbsp coconut"],
    steps: ["Add yogurt.", "Add berries.", "Top with coconut."]
},
{
    id: 376,
    title: "🍐 Pear Cinnamon Bites",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 pear", "1/2 tsp cinnamon"],
    steps: ["Slice pear.", "Sprinkle with cinnamon.", "Serve."]
},
{
    id: 377,
    title: "🍅 Tomato Feta Bites",
    category: "snacks",
    time: "7 min",
    difficulty: "Easy",
    ingredients: ["1 tomato", "1/4 cup feta", "Basil"],
    steps: ["Slice tomato.", "Top with feta.", "Add basil.", "Serve."]
},
{
    id: 378,
    title: "🥣 Oat Berry Parfait",
    category: "snacks",
    time: "7 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup yogurt", "1/2 cup berries", "1/4 cup oats"],
    steps: ["Layer yogurt and oats.", "Add berries.", "Serve chilled."]
},
{
    id: 379,
    title: "🍌 Banana Date Bites",
    category: "snacks",
    time: "7 min",
    difficulty: "Easy",
    ingredients: ["1 banana", "3 dates", "1 tbsp chopped nuts"],
    steps: ["Slice banana.", "Chop dates.", "Arrange together.", "Top with nuts."]
},
{
    id: 380,
    title: "🍓 Strawberry Apple Cup",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 apple", "1/2 cup strawberries"],
    steps: ["Dice apple.", "Slice strawberries.", "Combine and serve."]
},

{
    id: 381,
    title: "🌱 Spinach Cheese Quesadilla",
    category: "vegetarian",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["2 tortillas", "1 cup spinach", "1/2 cup cheese"],
    steps: ["Cook spinach briefly.", "Add spinach and cheese to tortilla.", "Cover with second tortilla.", "Cook until cheese melts."]
},
{
    id: 382,
    title: "🥦 Broccoli Hummus Bowl",
    category: "vegetarian",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["1 cup broccoli", "1/3 cup hummus", "1 carrot"],
    steps: ["Steam broccoli.", "Slice carrot.", "Add hummus.", "Serve vegetables with hummus."]
},
{
    id: 383,
    title: "🍅 Tomato Basil Rice",
    category: "vegetarian",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked rice", "2 tomatoes", "Fresh basil"],
    steps: ["Dice tomatoes.", "Warm tomatoes.", "Add rice.", "Finish with basil."]
},
{
    id: 384,
    title: "🥔 Potato Pea Bowl",
    category: "vegetarian",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["2 potatoes", "1 cup peas", "Parsley"],
    steps: ["Cook potatoes until tender.", "Warm peas.", "Combine.", "Add parsley."]
},
{
    id: 385,
    title: "🍄 Mushroom Cheese Toast",
    category: "vegetarian",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["2 slices bread", "1 cup mushrooms", "1/4 cup cheese"],
    steps: ["Cook mushrooms.", "Toast bread.", "Add mushrooms and cheese.", "Heat until cheese melts."]
},
{
    id: 386,
    title: "🥕 Carrot Lentil Wrap",
    category: "vegetarian",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["1 tortilla", "1/2 cup cooked lentils", "1 carrot", "Lettuce"],
    steps: ["Grate carrot.", "Add lentils and lettuce.", "Place on tortilla.", "Roll tightly."]
},
{
    id: 387,
    title: "🌽 Corn Avocado Salad",
    category: "vegetarian",
    time: "8 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup corn", "1 avocado", "1 tomato", "Lime juice"],
    steps: ["Dice avocado and tomato.", "Add corn.", "Add lime juice.", "Mix gently."]
},
{
    id: 388,
    title: "🥒 Cucumber Feta Pita",
    category: "vegetarian",
    time: "8 min",
    difficulty: "Easy",
    ingredients: ["1 pita", "1 cucumber", "1/4 cup feta", "Lettuce"],
    steps: ["Slice cucumber.", "Open pita.", "Add lettuce and cucumber.", "Top with feta."]
},
{
    id: 389,
    title: "🍆 Eggplant Tomato Pasta",
    category: "vegetarian",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["150g pasta", "1 eggplant", "2 tomatoes", "Basil"],
    steps: ["Cook pasta.", "Cook diced eggplant.", "Add tomatoes.", "Mix with pasta and basil."]
},
{
    id: 390,
    title: "🥗 Lentil Cucumber Salad",
    category: "vegetarian",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 cup lentils", "1 cucumber", "1 tomato", "Lemon juice"],
    steps: ["Dice cucumber and tomato.", "Add lentils.", "Add lemon juice.", "Mix."]
},

{
    id: 391,
    title: "🍠 Sweet Potato Hummus Toast",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 slice bread", "1/2 sweet potato", "2 tbsp hummus"],
    steps: ["Cook sweet potato until tender.", "Toast bread.", "Spread hummus.", "Top with sweet potato."]
},
{
    id: 392,
    title: "🥬 Spinach Chickpea Salad",
    category: "vegetarian",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["2 cups spinach", "1 cup chickpeas", "1 tomato", "Lemon juice"],
    steps: ["Wash spinach.", "Dice tomato.", "Add chickpeas.", "Finish with lemon juice."]
},
{
    id: 393,
    title: "🍚 Vegetable Lentil Rice",
    category: "vegetarian",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["1 cup rice", "1/2 cup lentils", "1 carrot", "1/2 cup peas"],
    steps: ["Cook vegetables.", "Add cooked rice.", "Add lentils.", "Mix and serve."]
},
{
    id: 394,
    title: "🥦 Broccoli Corn Bowl",
    category: "vegetarian",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 cup broccoli", "1/2 cup corn", "1 cup cooked rice"],
    steps: ["Steam broccoli.", "Warm corn.", "Add rice.", "Combine and serve."]
},
{
    id: 395,
    title: "🍅 Tomato Avocado Toast",
    category: "vegetarian",
    time: "7 min",
    difficulty: "Easy",
    ingredients: ["2 slices bread", "1/2 avocado", "1 tomato"],
    steps: ["Toast bread.", "Mash avocado.", "Slice tomato.", "Top toast with avocado and tomato."]
},
{
    id: 396,
    title: "🌱 Green Bean Potato Bowl",
    category: "vegetarian",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["2 potatoes", "1 cup green beans", "Olive oil", "Herbs"],
    steps: ["Cook potatoes until tender.", "Steam green beans.", "Combine vegetables.", "Add olive oil and herbs."]
},
{
    id: 397,
    title: "🥕 Carrot Broccoli Couscous",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup couscous", "1 carrot", "1 cup broccoli"],
    steps: ["Prepare couscous.", "Cook vegetables until tender.", "Combine vegetables with couscous."]
},
{
    id: 398,
    title: "🫘 Bean Avocado Rice Bowl",
    category: "vegetarian",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked rice", "1/2 cup beans", "1/2 avocado", "Tomato"],
    steps: ["Warm beans.", "Dice avocado and tomato.", "Add rice.", "Top with beans and vegetables."]
},
{
    id: 399,
    title: "🍄 Mushroom Spinach Wrap",
    category: "vegetarian",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 tortilla", "1 cup mushrooms", "1 cup spinach", "1/4 cup cheese"],
    steps: ["Cook mushrooms and spinach.", "Add cheese.", "Place mixture on tortilla.", "Roll and serve."]
},
{
    id: 400,
    title: "🌈 Rainbow Hummus Bowl",
    category: "vegetarian",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["1/3 cup hummus", "1 carrot", "1/2 cucumber", "1/2 bell pepper", "1/2 cup chickpeas"],
    steps: ["Slice vegetables.", "Add hummus to a bowl.", "Arrange vegetables and chickpeas around it.", "Serve fresh."]
},

{
    id: 401,
    title: "🥞 Banana Oat Pancakes",
    category: "breakfast",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 banana", "1 egg", "1/2 cup oats", "1/4 cup milk", "1/2 tsp baking powder"],
    steps: ["Mash the banana in a bowl.", "Mix in the egg, oats, milk, and baking powder.", "Pour small portions onto a lightly greased pan.", "Cook both sides until golden and serve."]
},
{
    id: 402,
    title: "🥑 Avocado Toast",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["2 slices whole-grain bread", "1 ripe avocado", "1 tsp lemon juice", "Salt", "Black pepper"],
    steps: ["Toast the bread until crisp.", "Mash the avocado with lemon juice, salt, and pepper.", "Spread the mixture over the toast.", "Serve immediately."]
},
{
    id: 403,
    title: "🍓 Strawberry Yogurt Bowl",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cup plain yogurt", "1/2 cup strawberries", "2 tbsp granola", "1 tsp honey"],
    steps: ["Wash and slice the strawberries.", "Add yogurt to a serving bowl.", "Top with strawberries and granola.", "Drizzle with honey and enjoy."]
},
{
    id: 404,
    title: "🍳 Spinach Scrambled Eggs",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["2 eggs", "1 cup spinach", "1 tbsp milk", "1 tsp olive oil", "Salt and pepper"],
    steps: ["Whisk the eggs with milk, salt, and pepper.", "Heat oil in a pan and wilt the spinach.", "Pour in the eggs and stir gently.", "Cook until the eggs are fully set."]
},
{
    id: 405,
    title: "🥣 Apple Cinnamon Oatmeal",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup oats", "1 cup milk or water", "1 apple", "1/2 tsp cinnamon", "1 tsp honey"],
    steps: ["Dice the apple.", "Simmer oats with milk or water for 5 minutes.", "Stir in the apple and cinnamon.", "Cook until creamy and add honey if desired."]
},
{
    id: 406,
    title: "🧀 Cheese Veggie Omelette",
    category: "breakfast",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["2 eggs", "2 tbsp grated cheese", "2 tbsp diced bell pepper", "2 tbsp chopped onion", "1 tsp oil"],
    steps: ["Beat the eggs in a bowl.", "Cook the onion and pepper in a lightly oiled pan.", "Pour in the eggs and sprinkle with cheese.", "Fold when set and cook until the eggs are fully cooked."]
},
{
    id: 407,
    title: "🍌 Peanut Butter Banana Wrap",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 whole-wheat tortilla", "1 banana", "2 tbsp peanut butter", "1 tsp honey"],
    steps: ["Spread peanut butter over the tortilla.", "Place the banana near one edge.", "Drizzle with honey.", "Roll tightly and slice in half."]
},
{
    id: 408,
    title: "🥔 Breakfast Potato Hash",
    category: "breakfast",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["2 potatoes", "1/2 bell pepper", "1/2 onion", "1 tbsp olive oil", "Paprika and salt"],
    steps: ["Dice the potatoes and vegetables.", "Boil the potatoes for 5 minutes and drain.", "Cook everything in oil with paprika.", "Stir occasionally until the potatoes are tender and golden."]
},
{
    id: 409,
    title: "🥛 Mango Lassi",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cup mango pieces", "1 cup plain yogurt", "1/2 cup milk", "1 tsp honey"],
    steps: ["Add mango, yogurt, milk, and honey to a blender.", "Blend until smooth.", "Add a little more milk if needed.", "Serve chilled."]
},
{
    id: 410,
    title: "🫐 Blueberry Overnight Oats",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup oats", "1/2 cup milk", "1/4 cup yogurt", "1/2 cup blueberries", "1 tsp chia seeds"],
    steps: ["Combine oats, milk, yogurt, and chia seeds in a jar.", "Stir well and cover.", "Refrigerate overnight.", "Top with blueberries before serving."]
},
{
    id: 411,
    title: "🥪 Egg Salad Sandwich",
    category: "breakfast",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["2 hard-boiled eggs", "2 slices bread", "1 tbsp yogurt or mayonnaise", "1 tsp mustard", "Lettuce"],
    steps: ["Chop the cooked eggs.", "Mix with yogurt or mayonnaise and mustard.", "Season to taste.", "Spread onto bread with lettuce and serve."]
},
{
    id: 412,
    title: "🌽 Corn Cheese Toast",
    category: "breakfast",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["2 bread slices", "1/3 cup sweet corn", "1/4 cup grated cheese", "1 tbsp chopped bell pepper", "Black pepper"],
    steps: ["Mix corn, cheese, bell pepper, and pepper.", "Spread the mixture over the bread.", "Place on a baking tray.", "Bake at 180°C until the cheese melts and the bread turns crisp."]
},
{
    id: 413,
    title: "🥞 Fluffy Yogurt Pancakes",
    category: "breakfast",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup flour", "1 egg", "1/2 cup yogurt", "1/4 cup milk", "1 tsp baking powder"],
    steps: ["Whisk the egg, yogurt, and milk.", "Fold in flour and baking powder.", "Pour small portions into a warm greased pan.", "Flip when bubbles appear and cook through."]
},
{
    id: 414,
    title: "🍠 Sweet Potato Breakfast Bowl",
    category: "breakfast",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["1 medium sweet potato", "1/2 cup yogurt", "1 tbsp pumpkin seeds", "1/2 tsp cinnamon"],
    steps: ["Pierce the sweet potato with a fork.", "Bake at 200°C until soft, about 20–30 minutes.", "Split open and add yogurt.", "Sprinkle with pumpkin seeds and cinnamon."]
},
{
    id: 415,
    title: "🥒 Cucumber Cream Cheese Bagel",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 bagel", "2 tbsp cream cheese", "1/2 cucumber", "Dill", "Black pepper"],
    steps: ["Slice the bagel and toast if desired.", "Spread cream cheese on both halves.", "Thinly slice the cucumber.", "Arrange cucumber on top and season with dill and pepper."]
},
{
    id: 416,
    title: "🍅 Tomato Basil Eggs",
    category: "breakfast",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["2 eggs", "1 tomato", "4 basil leaves", "1 tsp olive oil", "Salt and pepper"],
    steps: ["Dice the tomato and chop the basil.", "Warm oil in a pan and cook the tomato for 3 minutes.", "Add the eggs.", "Cook until fully set and finish with basil."]
},
{
    id: 417,
    title: "🍫 Chocolate Banana Oats",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup oats", "1 cup milk", "1 banana", "1 tsp cocoa powder", "1 tsp peanut butter"],
    steps: ["Simmer oats and milk in a saucepan.", "Stir in cocoa powder and half the mashed banana.", "Cook until creamy.", "Serve with remaining banana and peanut butter."]
},
{
    id: 418,
    title: "🫓 Masala Egg Paratha",
    category: "breakfast",
    time: "20 min",
    difficulty: "Medium",
    ingredients: ["1 whole-wheat paratha", "2 eggs", "2 tbsp chopped onion", "1 tbsp chopped coriander", "Pinch of cumin"],
    steps: ["Beat the eggs with onion, coriander, and cumin.", "Cook the paratha in a pan until lightly golden.", "Pour the egg mixture over it.", "Flip carefully and cook until the egg is fully set."]
},
{
    id: 419,
    title: "🍐 Pear Walnut Yogurt",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cup plain yogurt", "1 pear", "2 tbsp chopped walnuts", "1/2 tsp cinnamon"],
    steps: ["Dice the pear.", "Spoon yogurt into a bowl.", "Add pear and walnuts.", "Finish with cinnamon and serve."]
},
{
    id: 420,
    title: "🧇 Whole-Wheat Waffles",
    category: "breakfast",
    time: "20 min",
    difficulty: "Medium",
    ingredients: ["1 cup whole-wheat flour", "1 egg", "3/4 cup milk", "1 tbsp oil", "1 tsp baking powder"],
    steps: ["Whisk egg, milk, and oil.", "Mix in flour and baking powder until just combined.", "Preheat and lightly grease a waffle maker.", "Cook the batter according to the waffle maker instructions."]
},
{
    id: 421,
    title: "🍗 Lemon Herb Chicken",
    category: "lunch",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["2 chicken breasts", "1 lemon", "1 tbsp olive oil", "1 tsp dried oregano", "Garlic, salt, and pepper"],
    steps: ["Mix lemon juice, oil, oregano, garlic, salt, and pepper.", "Coat the chicken with the mixture.", "Cook in a skillet over medium heat, turning as needed.", "Check that the thickest part reaches 74°C before serving."]
},
{
    id: 422,
    title: "🍚 Vegetable Fried Rice",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["2 cups cooked chilled rice", "1 cup mixed vegetables", "1 egg", "1 tbsp soy sauce", "1 tsp oil"],
    steps: ["Heat oil in a large pan.", "Scramble the egg and add the vegetables.", "Add the rice and soy sauce.", "Stir-fry until everything is steaming hot."]
},
{
    id: 423,
    title: "🌯 Chicken Fajita Wrap",
    category: "lunch",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["1 chicken breast", "2 tortillas", "1 bell pepper", "1 onion", "Fajita seasoning"],
    steps: ["Slice the chicken and vegetables.", "Cook the chicken with seasoning until fully cooked.", "Add peppers and onion and cook until tender.", "Fill the tortillas and roll into wraps."]
},
{
    id: 424,
    title: "🥗 Chickpea Garden Salad",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked chickpeas", "1 cucumber", "2 tomatoes", "1 tbsp lemon juice", "1 tbsp olive oil"],
    steps: ["Rinse and drain the chickpeas.", "Chop the cucumber and tomatoes.", "Combine everything in a bowl.", "Dress with lemon juice, olive oil, and seasoning."]
},
{
    id: 425,
    title: "🍝 Creamy Mushroom Pasta",
    category: "lunch",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["200 g pasta", "1 cup sliced mushrooms", "1/2 cup milk", "2 tbsp grated Parmesan", "2 garlic cloves"],
    steps: ["Boil pasta according to the package instructions.", "Sauté garlic and mushrooms in a pan.", "Add milk and simmer gently.", "Stir in Parmesan and drained pasta, then serve."]
},
{
    id: 426,
    title: "🐟 Garlic Lemon Fish",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["2 fish fillets", "1 lemon", "2 garlic cloves", "1 tbsp olive oil", "Parsley"],
    steps: ["Season the fish with lemon juice, garlic, and pepper.", "Heat olive oil in a skillet.", "Cook the fish, turning carefully once.", "Ensure it reaches 63°C or flakes easily, then garnish with parsley."]
},
{
    id: 427,
    title: "🌮 Black Bean Tacos",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 cup black beans", "4 small tortillas", "1 tomato", "1/2 avocado", "Cumin and paprika"],
    steps: ["Warm the beans with cumin and paprika.", "Dice the tomato and avocado.", "Heat the tortillas in a dry pan.", "Fill with beans and vegetables."]
},
{
    id: 428,
    title: "🥙 Hummus Veggie Pita",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["2 pita breads", "1/2 cup hummus", "1 cucumber", "1 tomato", "Lettuce"],
    steps: ["Cut the pita breads in half to form pockets.", "Spread hummus inside each pocket.", "Slice the cucumber and tomato.", "Fill with vegetables and serve."]
},
{
    id: 429,
    title: "🍲 Red Lentil Soup",
    category: "lunch",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["1 cup red lentils", "1 carrot", "1 onion", "4 cups vegetable stock", "Cumin"],
    steps: ["Rinse the lentils.", "Sauté chopped onion and carrot in a pot.", "Add lentils, stock, and cumin.", "Simmer for 20 minutes until soft, then blend if desired."]
},
{
    id: 430,
    title: "🍛 Vegetable Coconut Curry",
    category: "lunch",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["2 cups mixed vegetables", "1 cup coconut milk", "1 tbsp curry paste", "1 onion", "1 cup cooked rice"],
    steps: ["Sauté chopped onion in a saucepan.", "Stir in the curry paste.", "Add vegetables and coconut milk.", "Simmer until tender and serve with rice."]
},
{
    id: 431,
    title: "🥪 Tuna Sweetcorn Sandwich",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 can tuna, drained", "1/3 cup sweetcorn", "2 tbsp yogurt", "4 bread slices", "Lettuce"],
    steps: ["Flake the drained tuna into a bowl.", "Mix with sweetcorn and yogurt.", "Season with pepper.", "Spread over bread, add lettuce, and assemble sandwiches."]
},
{
    id: 432,
    title: "🍅 Caprese Pasta Salad",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["200 g pasta", "1 cup cherry tomatoes", "100 g mozzarella", "Fresh basil", "1 tbsp olive oil"],
    steps: ["Cook the pasta and rinse briefly under cool water.", "Halve the tomatoes and dice the mozzarella.", "Combine pasta, tomatoes, cheese, and basil.", "Toss with olive oil and seasoning."]
},
{
    id: 433,
    title: "🍗 Chicken Burrito Bowl",
    category: "lunch",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["1 chicken breast", "1 cup cooked rice", "1/2 cup black beans", "1/2 cup corn", "Salsa"],
    steps: ["Season and cook the chicken until it reaches 74°C.", "Slice the cooked chicken.", "Arrange rice, beans, corn, and chicken in a bowl.", "Add salsa and serve."]
},
{
    id: 434,
    title: "🥦 Broccoli Cheese Pasta",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["200 g pasta", "1 cup broccoli florets", "1/2 cup grated cheddar", "1/2 cup milk", "Black pepper"],
    steps: ["Cook the pasta and add broccoli during the last 4 minutes.", "Drain, reserving a little pasta water.", "Warm the milk and melt in the cheese.", "Mix the sauce with pasta and broccoli."]
},
{
    id: 435,
    title: "🫓 Paneer Tikka Wrap",
    category: "lunch",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["200 g paneer", "2 rotis", "1/4 cup yogurt", "1 tsp tikka spice", "Sliced onion"],
    steps: ["Mix yogurt and tikka spice.", "Coat paneer cubes and let them sit for 10 minutes.", "Pan-cook until lightly browned and hot throughout.", "Wrap in rotis with onion and your preferred chutney."]
},
{
    id: 436,
    title: "🍜 Sesame Vegetable Noodles",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["200 g noodles", "1 cup shredded cabbage", "1 carrot", "1 tbsp soy sauce", "1 tsp sesame oil"],
    steps: ["Cook the noodles according to the package.", "Stir-fry cabbage and carrot in sesame oil.", "Add the drained noodles and soy sauce.", "Toss until hot and serve."]
},
{
    id: 437,
    title: "🥔 Baked Potato with Beans",
    category: "lunch",
    time: "50 min",
    difficulty: "Easy",
    ingredients: ["2 large potatoes", "1 cup baked beans", "1/4 cup grated cheese", "Black pepper"],
    steps: ["Pierce the potatoes with a fork.", "Bake at 200°C for 40–50 minutes until tender.", "Warm the beans in a saucepan.", "Split the potatoes, fill with beans, and add cheese."]
},
{
    id: 438,
    title: "🥗 Greek Chickpea Bowl",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 cup chickpeas", "1 cucumber", "1 tomato", "40 g feta cheese", "Lemon juice and olive oil"],
    steps: ["Rinse and drain the chickpeas.", "Chop cucumber and tomato.", "Combine the vegetables and chickpeas.", "Add feta and drizzle with lemon juice and olive oil."]
},
{
    id: 439,
    title: "🍳 Egg Fried Quinoa",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["2 cups cooked quinoa", "2 eggs", "1 cup peas and carrots", "1 tbsp soy sauce", "1 tsp oil"],
    steps: ["Heat oil in a skillet.", "Scramble the eggs and add the vegetables.", "Stir in the cooked quinoa and soy sauce.", "Cook until steaming hot and serve."]
},
{
    id: 440,
    title: "🌮 Paneer Street Tacos",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["200 g paneer", "6 small tortillas", "1 tomato", "1/2 onion", "Cumin and paprika"],
    steps: ["Dice and season the paneer.", "Pan-fry until golden on several sides.", "Warm the tortillas.", "Fill with paneer, diced tomato, and onion."]
},
{
    id: 441,
    title: "🍗 Honey Garlic Chicken",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["2 chicken breasts", "1 tbsp honey", "2 garlic cloves", "2 tbsp soy sauce", "1 tsp oil"],
    steps: ["Mix honey, garlic, and soy sauce.", "Cut chicken into bite-sized pieces.", "Cook chicken in oil until nearly done.", "Add the sauce and simmer until sticky and the chicken reaches 74°C."]
},
{
    id: 442,
    title: "🍝 Tomato Basil Spaghetti",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["200 g spaghetti", "2 cups chopped tomatoes", "2 garlic cloves", "Fresh basil", "1 tbsp olive oil"],
    steps: ["Cook spaghetti according to the package.", "Sauté garlic in olive oil.", "Add tomatoes and simmer for 10–12 minutes.", "Toss with spaghetti and fresh basil."]
},
{
    id: 443,
    title: "🍛 Chickpea Spinach Curry",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["1 can chickpeas, drained", "2 cups spinach", "1 cup chopped tomatoes", "1 onion", "1 tsp curry powder"],
    steps: ["Sauté chopped onion until soft.", "Add curry powder and tomatoes.", "Stir in chickpeas and simmer for 10 minutes.", "Add spinach and cook until wilted. Serve with rice."]
},
{
    id: 444,
    title: "🥘 Chicken Vegetable Stew",
    category: "dinner",
    time: "40 min",
    difficulty: "Easy",
    ingredients: ["300 g chicken pieces", "2 carrots", "2 potatoes", "1 onion", "3 cups chicken stock"],
    steps: ["Brown the chicken pieces in a pot.", "Add chopped onion, carrots, and potatoes.", "Pour in stock and bring to a simmer.", "Cook until vegetables are tender and chicken reaches 74°C."]
},
{
    id: 445,
    title: "🍕 Homemade Veggie Pizza",
    category: "dinner",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["1 pizza base", "1/2 cup tomato sauce", "1 cup mozzarella", "1/2 bell pepper", "1/4 cup sliced olives"],
    steps: ["Preheat the oven according to the pizza base instructions.", "Spread tomato sauce over the base.", "Add cheese, sliced pepper, and olives.", "Bake until the crust is golden and the cheese bubbles."]
},
{
    id: 446,
    title: "🐟 Baked Herb Salmon",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["2 salmon fillets", "1 lemon", "1 tbsp olive oil", "1 tsp dried herbs", "Black pepper"],
    steps: ["Preheat the oven to 200°C.", "Place salmon on a lined baking tray.", "Brush with oil, lemon juice, herbs, and pepper.", "Bake until the fish reaches 63°C and flakes easily."]
},
{
    id: 447,
    title: "🍲 Creamy Pumpkin Soup",
    category: "dinner",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["3 cups pumpkin cubes", "1 onion", "3 cups vegetable stock", "1/2 cup milk", "Nutmeg"],
    steps: ["Sauté chopped onion in a pot.", "Add pumpkin and vegetable stock.", "Simmer until the pumpkin is soft.", "Blend until smooth, stir in milk, and season with nutmeg."]
},
{
    id: 448,
    title: "🥩 Beef and Pepper Stir-Fry",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["300 g thinly sliced beef", "2 bell peppers", "1 onion", "2 tbsp soy sauce", "1 tsp oil"],
    steps: ["Slice the vegetables into strips.", "Heat oil in a large pan.", "Cook the beef in batches until browned and safely cooked.", "Add vegetables and soy sauce, then stir-fry until tender-crisp."]
},
{
    id: 449,
    title: "🍆 Roasted Eggplant Pasta",
    category: "dinner",
    time: "35 min",
    difficulty: "Easy",
    ingredients: ["200 g pasta", "1 eggplant", "1 cup tomato sauce", "2 garlic cloves", "Grated Parmesan"],
    steps: ["Cube the eggplant and toss with a little oil.", "Roast at 200°C for 20 minutes.", "Cook pasta according to the package.", "Warm tomato sauce with garlic, add eggplant and pasta, and top with Parmesan."]
},
{
    id: 450,
    title: "🍚 Chicken Pulao",
    category: "dinner",
    time: "40 min",
    difficulty: "Medium",
    ingredients: ["1 cup basmati rice", "300 g chicken pieces", "1 onion", "2 cups chicken stock", "Cumin, cardamom, and cinnamon"],
    steps: ["Rinse the rice and set aside.", "Brown onion and spices in a pot.", "Add chicken and cook the outside.", "Add rice and stock, cover, and simmer until rice is tender and chicken reaches 74°C."]
},
{
    id: 451,
    title: "🌶️ Stuffed Bell Peppers",
    category: "dinner",
    time: "45 min",
    difficulty: "Medium",
    ingredients: ["3 bell peppers", "1 cup cooked rice", "1 cup cooked beans", "1 cup tomato sauce", "1/2 cup grated cheese"],
    steps: ["Halve the peppers and remove the seeds.", "Mix rice, beans, and half the tomato sauce.", "Fill the pepper halves and top with remaining sauce and cheese.", "Bake at 190°C until the peppers soften."]
},
{
    id: 452,
    title: "🍜 Chicken Noodle Soup",
    category: "dinner",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["200 g cooked chicken", "100 g noodles", "1 carrot", "1 celery stalk", "4 cups chicken stock"],
    steps: ["Bring stock to a gentle boil.", "Add chopped carrot and celery.", "Simmer until the vegetables soften.", "Add noodles and cooked chicken, then cook until the noodles are tender and the soup is hot."]
},
{
    id: 453,
    title: "🫘 Three-Bean Chili",
    category: "dinner",
    time: "35 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup kidney beans", "1/2 cup black beans", "1/2 cup chickpeas", "1 can chopped tomatoes", "1 onion and chili powder"],
    steps: ["Sauté chopped onion in a pot.", "Add chili powder and chopped tomatoes.", "Stir in the drained beans and chickpeas.", "Simmer for 20 minutes, stirring occasionally."]
},
{
    id: 454,
    title: "🍗 Oven-Baked Chicken Drumsticks",
    category: "dinner",
    time: "45 min",
    difficulty: "Easy",
    ingredients: ["6 chicken drumsticks", "1 tbsp olive oil", "1 tsp paprika", "1 tsp garlic powder", "Salt and pepper"],
    steps: ["Preheat the oven to 200°C.", "Coat drumsticks with oil and seasonings.", "Arrange on a lined baking tray.", "Bake, turning once, until the thickest part reaches 74°C."]
},
{
    id: 455,
    title: "🧀 Spinach Ricotta Lasagna",
    category: "dinner",
    time: "55 min",
    difficulty: "Medium",
    ingredients: ["6 lasagna sheets", "1 cup ricotta", "2 cups spinach", "2 cups tomato sauce", "1 cup mozzarella"],
    steps: ["Mix ricotta with chopped spinach.", "Spread tomato sauce in a baking dish.", "Layer pasta sheets, ricotta mixture, sauce, and mozzarella.", "Bake at 180°C until bubbling and the pasta is tender."]
},
{
    id: 456,
    title: "🍤 Garlic Shrimp Rice",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["250 g peeled shrimp", "2 cups cooked rice", "3 garlic cloves", "1 tbsp olive oil", "Lemon juice"],
    steps: ["Heat oil and sauté minced garlic briefly.", "Add shrimp and cook until opaque and safely cooked.", "Stir in cooked rice and lemon juice.", "Heat through and serve."]
},
{
    id: 457,
    title: "🥬 Cabbage Potato Curry",
    category: "dinner",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["2 cups shredded cabbage", "2 potatoes", "1 onion", "1 tsp turmeric", "1 tsp cumin"],
    steps: ["Dice the potatoes and chop the onion.", "Cook onion with cumin and turmeric.", "Add potatoes, cabbage, and a splash of water.", "Cover and cook, stirring occasionally, until everything is tender."]
},
{
    id: 458,
    title: "🍝 Baked Mac and Cheese",
    category: "dinner",
    time: "35 min",
    difficulty: "Easy",
    ingredients: ["200 g macaroni", "2 tbsp butter", "2 tbsp flour", "2 cups milk", "1 cup cheddar"],
    steps: ["Cook macaroni and drain.", "Melt butter and stir in flour.", "Gradually whisk in milk and cook until thickened.", "Melt in cheddar, mix with pasta, and bake at 190°C until golden."]
},
{
    id: 459,
    title: "🌯 Black Bean Rice Burritos",
    category: "dinner",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["4 tortillas", "1 cup cooked rice", "1 cup black beans", "1/2 cup salsa", "1/2 cup grated cheese"],
    steps: ["Warm the rice and beans.", "Lay tortillas flat and divide the filling among them.", "Add salsa and cheese.", "Fold in the sides, roll tightly, and toast seam-side down in a pan."]
},
{
    id: 460,
    title: "🥘 Vegetable Biryani",
    category: "dinner",
    time: "45 min",
    difficulty: "Medium",
    ingredients: ["1 cup basmati rice", "2 cups mixed vegetables", "1 onion", "2 cups water", "Biryani spices"],
    steps: ["Rinse and soak the rice for 15 minutes.", "Brown sliced onion and add biryani spices.", "Stir in vegetables, rice, and water.", "Cover and cook on low heat until the rice is tender."]
},
{
    id: 461,
    title: "🍎 Cinnamon Apple Slices",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 apple", "1 tbsp peanut butter", "1/4 tsp cinnamon"],
    steps: ["Wash and core the apple.", "Slice into wedges.", "Arrange on a plate.", "Serve with peanut butter and a sprinkle of cinnamon."]
},
{
    id: 462,
    title: "🥕 Crunchy Carrot Sticks",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["2 carrots", "2 tbsp hummus", "Lemon juice"],
    steps: ["Wash and peel the carrots.", "Cut into sticks.", "Add a squeeze of lemon if desired.", "Serve with hummus for dipping."]
},
{
    id: 463,
    title: "🍿 Paprika Popcorn",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/4 cup popcorn kernels", "1 tsp olive oil", "1/2 tsp paprika", "Pinch of salt"],
    steps: ["Heat oil in a covered pot.", "Add kernels and cover, leaving a small vent if safe.", "Shake the pot occasionally until popping slows.", "Sprinkle with paprika and salt."]
},
{
    id: 464,
    title: "🍌 Frozen Banana Bites",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["2 bananas", "2 tbsp peanut butter", "2 tbsp melted chocolate"],
    steps: ["Slice bananas into thick rounds.", "Spread a little peanut butter between pairs of slices.", "Drizzle with melted chocolate.", "Freeze on a lined tray until firm."]
},
{
    id: 465,
    title: "🥒 Cucumber Yogurt Dip",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 cup plain yogurt", "1/2 cucumber", "1 garlic clove", "Mint", "Lemon juice"],
    steps: ["Grate the cucumber and squeeze out excess liquid.", "Mix cucumber with yogurt.", "Add crushed garlic, chopped mint, and lemon juice.", "Chill briefly and serve with bread or vegetable sticks."]
},
{
    id: 466,
    title: "🧀 Cheesy Potato Wedges",
    category: "snacks",
    time: "35 min",
    difficulty: "Easy",
    ingredients: ["3 potatoes", "1 tbsp olive oil", "1/2 tsp paprika", "1/3 cup grated cheese"],
    steps: ["Cut potatoes into wedges.", "Toss with oil and paprika.", "Bake at 200°C for 25–30 minutes, turning once.", "Sprinkle with cheese and bake until melted."]
},
{
    id: 467,
    title: "🍓 Strawberry Banana Smoothie",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 banana", "1 cup strawberries", "1 cup milk", "1/4 cup yogurt"],
    steps: ["Wash and hull the strawberries.", "Add all ingredients to a blender.", "Blend until smooth.", "Pour into a glass and serve."]
},
{
    id: 468,
    title: "🥜 Roasted Spiced Chickpeas",
    category: "snacks",
    time: "35 min",
    difficulty: "Easy",
    ingredients: ["1 can chickpeas", "1 tbsp olive oil", "1/2 tsp cumin", "1/2 tsp paprika", "Salt"],
    steps: ["Drain, rinse, and dry the chickpeas thoroughly.", "Toss with oil and spices.", "Spread on a baking tray.", "Roast at 200°C for 25–35 minutes, shaking the tray occasionally."]
},
{
    id: 469,
    title: "🍫 Cocoa Date Balls",
    category: "snacks",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 cup pitted dates", "1/2 cup oats", "2 tbsp cocoa powder", "2 tbsp peanut butter"],
    steps: ["Blend the dates, oats, cocoa, and peanut butter.", "Add a teaspoon of water if the mixture is too dry.", "Roll into small balls.", "Refrigerate until firm."]
},
{
    id: 470,
    title: "🥚 Deviled Eggs",
    category: "snacks",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["4 eggs", "2 tbsp yogurt or mayonnaise", "1/2 tsp mustard", "Paprika", "Salt and pepper"],
    steps: ["Hard-boil the eggs and cool them.", "Peel and halve each egg lengthwise.", "Mash the yolks with yogurt or mayonnaise and mustard.", "Spoon the mixture into the whites and dust with paprika."]
},
{
    id: 471,
    title: "🍞 Garlic Cheese Toast",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["4 bread slices", "2 tbsp softened butter", "2 garlic cloves", "1/2 cup grated mozzarella", "Parsley"],
    steps: ["Mix butter with crushed garlic and chopped parsley.", "Spread over the bread.", "Sprinkle with mozzarella.", "Bake at 190°C until the cheese melts and the edges are crisp."]
},
{
    id: 472,
    title: "🍉 Watermelon Mint Cups",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["2 cups watermelon", "Fresh mint", "1 tsp lime juice"],
    steps: ["Remove watermelon seeds if needed.", "Cut the watermelon into bite-sized cubes.", "Toss with lime juice.", "Garnish with chopped mint and serve chilled."]
},
{
    id: 473,
    title: "🥨 Homemade Soft Pretzels",
    category: "snacks",
    time: "45 min",
    difficulty: "Medium",
    ingredients: ["2 cups flour", "3/4 cup warm water", "1 tsp instant yeast", "1 tbsp sugar", "Coarse salt"],
    steps: ["Mix flour, water, yeast, and sugar into a dough.", "Knead until smooth and let rise for 20 minutes.", "Shape into pretzels and brush with water.", "Sprinkle with salt and bake at 200°C until golden."]
},
{
    id: 474,
    title: "🍇 Fruit and Cheese Skewers",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 cup grapes", "1 apple", "100 g cheese cubes", "1 cup strawberries"],
    steps: ["Wash all fruit thoroughly.", "Cut the apple into bite-sized pieces.", "Thread fruit and cheese onto short skewers.", "Serve chilled, using age-appropriate skewers safely."]
},
{
    id: 475,
    title: "🥑 Avocado Yogurt Dip",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 ripe avocado", "1/3 cup plain yogurt", "1 tbsp lime juice", "Coriander", "Salt"],
    steps: ["Scoop the avocado into a bowl.", "Mash with yogurt and lime juice.", "Stir in chopped coriander and salt.", "Serve with crackers, toast, or vegetable sticks."]
},
{
    id: 476,
    title: "🍠 Sweet Potato Chips",
    category: "snacks",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["1 large sweet potato", "1 tbsp olive oil", "Paprika", "Salt"],
    steps: ["Preheat the oven to 200°C.", "Slice the sweet potato thinly and evenly.", "Toss with olive oil and paprika.", "Arrange in a single layer and bake until crisp at the edges, checking frequently."]
},
{
    id: 477,
    title: "🥣 Granola Yogurt Parfait",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cup yogurt", "1/2 cup granola", "1/2 cup mixed berries", "1 tsp honey"],
    steps: ["Spoon yogurt into a glass.", "Add a layer of granola.", "Top with berries.", "Repeat the layers and drizzle with honey."]
},
{
    id: 478,
    title: "🌽 Spiced Corn Cups",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 cup sweet corn", "1 tsp butter", "1 tbsp lime juice", "Paprika", "Chopped coriander"],
    steps: ["Cook the corn until tender and hot.", "Stir in butter until melted.", "Add lime juice and paprika.", "Finish with chopped coriander and serve."]
},
{
    id: 479,
    title: "🍪 Peanut Butter Oat Cookies",
    category: "snacks",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup oats", "1 ripe banana", "2 tbsp peanut butter", "1 tbsp chocolate chips"],
    steps: ["Preheat the oven to 180°C.", "Mash the banana and mix with oats and peanut butter.", "Fold in chocolate chips and shape into small cookies.", "Bake for 12–15 minutes until set."]
},
{
    id: 480,
    title: "🫓 Mini Cheese Quesadillas",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["2 small tortillas", "1/2 cup grated cheese", "2 tbsp sweetcorn", "2 tbsp diced bell pepper"],
    steps: ["Sprinkle cheese, corn, and pepper over one tortilla.", "Place the second tortilla on top.", "Cook in a lightly greased pan, turning once.", "Slice into wedges when the cheese has melted."]
},
{
    id: 481,
    title: "🥗 Quinoa Avocado Salad",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked quinoa", "1 avocado", "1 cucumber", "1 tomato", "Lemon juice and olive oil"],
    steps: ["Allow the cooked quinoa to cool slightly.", "Dice the avocado, cucumber, and tomato.", "Combine everything in a bowl.", "Dress with lemon juice, olive oil, and seasoning."]
},
{
    id: 482,
    title: "🍆 Eggplant Parmesan",
    category: "vegetarian",
    time: "45 min",
    difficulty: "Medium",
    ingredients: ["1 large eggplant", "1 cup tomato sauce", "1 cup mozzarella", "1/4 cup Parmesan", "Breadcrumbs"],
    steps: ["Slice the eggplant into rounds.", "Coat lightly with breadcrumbs and arrange on a baking tray.", "Bake at 200°C until tender, turning once.", "Layer with tomato sauce and cheeses, then bake until bubbling."]
},
{
    id: 483,
    title: "🥦 Broccoli Almond Stir-Fry",
    category: "vegetarian",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["2 cups broccoli florets", "1 carrot", "2 tbsp sliced almonds", "1 tbsp soy sauce", "1 tsp sesame oil"],
    steps: ["Toast the almonds in a dry pan and set aside.", "Heat sesame oil and stir-fry the broccoli and carrot.", "Add a splash of water and cover briefly to soften.", "Stir in soy sauce and top with almonds."]
},
{
    id: 484,
    title: "🍅 Tomato Mozzarella Bake",
    category: "vegetarian",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["3 tomatoes", "150 g mozzarella", "Fresh basil", "1 tbsp olive oil", "Black pepper"],
    steps: ["Preheat the oven to 190°C.", "Slice tomatoes and mozzarella.", "Arrange in alternating layers in a baking dish.", "Drizzle with oil, season, and bake until the cheese softens. Finish with basil."]
},
{
    id: 485,
    title: "🫘 Lentil Stuffed Zucchini",
    category: "vegetarian",
    time: "40 min",
    difficulty: "Medium",
    ingredients: ["2 zucchini", "1 cup cooked lentils", "1/2 cup tomato sauce", "1/4 cup grated cheese", "Italian herbs"],
    steps: ["Halve the zucchini lengthwise and scoop out the centers.", "Mix cooked lentils with tomato sauce and herbs.", "Fill the zucchini halves and add cheese.", "Bake at 190°C until the zucchini is tender."]
},
{
    id: 486,
    title: "🥕 Carrot Ginger Soup",
    category: "vegetarian",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["4 carrots", "1 onion", "1 tsp grated ginger", "3 cups vegetable stock", "1/4 cup milk"],
    steps: ["Chop carrots and onion.", "Sauté onion and ginger in a pot.", "Add carrots and stock, then simmer until soft.", "Blend until smooth and stir in milk."]
},
{
    id: 487,
    title: "🍄 Stuffed Mushroom Caps",
    category: "vegetarian",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["8 large mushrooms", "1/3 cup breadcrumbs", "1/4 cup grated cheese", "1 garlic clove", "Parsley"],
    steps: ["Preheat the oven to 190°C.", "Remove mushroom stems and chop them finely.", "Mix chopped stems with breadcrumbs, cheese, garlic, and parsley.", "Fill the caps and bake until tender and golden."]
},
{
    id: 488,
    title: "🥬 Spinach Chickpea Sauté",
    category: "vegetarian",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 can chickpeas", "3 cups spinach", "2 garlic cloves", "1 tbsp olive oil", "Lemon juice"],
    steps: ["Drain and rinse the chickpeas.", "Sauté garlic in olive oil.", "Add chickpeas and warm through.", "Stir in spinach until wilted and finish with lemon juice."]
},
{
    id: 489,
    title: "🫑 Rainbow Vegetable Skewers",
    category: "vegetarian",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["1 bell pepper", "1 zucchini", "1 red onion", "8 cherry tomatoes", "1 tbsp olive oil"],
    steps: ["Cut the pepper, zucchini, and onion into chunks.", "Thread the vegetables onto skewers.", "Brush with olive oil and season.", "Grill or roast at 200°C, turning occasionally, until tender."]
},
{
    id: 490,
    title: "🍠 Sweet Potato Chickpea Bowl",
    category: "vegetarian",
    time: "35 min",
    difficulty: "Easy",
    ingredients: ["1 sweet potato", "1 cup chickpeas", "1 cup spinach", "2 tbsp yogurt", "Paprika and cumin"],
    steps: ["Cube the sweet potato and toss with oil and spices.", "Roast at 200°C until tender.", "Warm chickpeas in a pan and wilt the spinach.", "Serve together in a bowl with yogurt."]
},
{
    id: 491,
    title: "🍚 Vegetable Stuffed Tomatoes",
    category: "vegetarian",
    time: "35 min",
    difficulty: "Medium",
    ingredients: ["4 large tomatoes", "1 cup cooked rice", "1/2 cup peas", "1/2 onion", "1 tbsp chopped herbs"],
    steps: ["Slice the tops off the tomatoes and scoop out the centers.", "Sauté onion and peas, then mix with rice and herbs.", "Fill the tomatoes and place them in a baking dish.", "Bake at 180°C until the tomatoes soften."]
},
{
    id: 492,
    title: "🥔 Crispy Herb Potatoes",
    category: "vegetarian",
    time: "40 min",
    difficulty: "Easy",
    ingredients: ["4 potatoes", "2 tbsp olive oil", "1 tsp rosemary", "1 tsp garlic powder", "Salt and pepper"],
    steps: ["Preheat the oven to 200°C.", "Cut potatoes into bite-sized chunks.", "Toss with oil, rosemary, garlic powder, salt, and pepper.", "Roast for 30–35 minutes, turning halfway through."]
},
{
    id: 493,
    title: "🥒 Zucchini Fritters",
    category: "vegetarian",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["2 zucchini", "1 egg", "1/3 cup flour", "1/4 cup grated cheese", "Black pepper"],
    steps: ["Grate the zucchini and squeeze out excess liquid.", "Mix with egg, flour, cheese, and pepper.", "Spoon small portions into a lightly oiled pan.", "Cook both sides until golden and the centers are cooked."]
},
{
    id: 494,
    title: "🍛 Tofu Coconut Curry",
    category: "vegetarian",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["250 g firm tofu", "1 cup coconut milk", "1 bell pepper", "1 tbsp curry paste", "1 cup cooked rice"],
    steps: ["Pat tofu dry and cut into cubes.", "Pan-sear the tofu until lightly golden.", "Add curry paste, bell pepper, and coconut milk.", "Simmer until the pepper softens and serve with rice."]
},
{
    id: 495,
    title: "🥗 Roasted Beetroot Salad",
    category: "vegetarian",
    time: "45 min",
    difficulty: "Easy",
    ingredients: ["2 beetroot", "2 cups salad greens", "40 g feta", "2 tbsp walnuts", "Balsamic dressing"],
    steps: ["Wrap beetroot in foil and roast at 200°C until tender.", "Cool, peel, and cut into wedges.", "Arrange greens and beetroot on a plate.", "Top with feta, walnuts, and dressing."]
},
{
    id: 496,
    title: "🍲 White Bean Vegetable Soup",
    category: "vegetarian",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["1 can white beans", "1 carrot", "1 celery stalk", "1 can chopped tomatoes", "3 cups vegetable stock"],
    steps: ["Chop the carrot and celery.", "Sauté the vegetables in a pot until slightly softened.", "Add tomatoes, drained beans, and stock.", "Simmer for 20 minutes and season to taste."]
},
{
    id: 497,
    title: "🧀 Halloumi Vegetable Bowl",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["150 g halloumi", "1 zucchini", "1 bell pepper", "1 cup cooked couscous", "Lemon juice"],
    steps: ["Slice the halloumi and vegetables.", "Grill or pan-cook the vegetables until tender.", "Cook the halloumi until golden on both sides.", "Serve over couscous with lemon juice."]
},
{
    id: 498,
    title: "🍝 Pesto Pea Pasta",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["200 g pasta", "1/2 cup green peas", "3 tbsp pesto", "1/4 cup grated Parmesan", "Lemon zest"],
    steps: ["Cook pasta according to the package instructions.", "Add peas during the final 3 minutes.", "Reserve a little pasta water, then drain.", "Toss with pesto, Parmesan, a splash of pasta water, and lemon zest."]
},
{
    id: 499,
    title: "🥣 Creamy Cauliflower Soup",
    category: "vegetarian",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["1 cauliflower", "1 onion", "3 cups vegetable stock", "1/2 cup milk", "Black pepper"],
    steps: ["Cut cauliflower into florets and chop the onion.", "Sauté onion in a pot until soft.", "Add cauliflower and stock, then simmer until tender.", "Blend until smooth, stir in milk, and season with pepper."]
},
{
    id: 500,
    title: "🍋 Lemon Herb Couscous",
    category: "vegetarian",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 cup couscous", "1 cup hot vegetable stock", "1/2 cucumber", "2 tbsp chopped parsley", "1 lemon"],
    steps: ["Place couscous in a heatproof bowl.", "Pour over hot stock, cover, and leave for 5 minutes.", "Fluff with a fork and stir in diced cucumber and parsley.", "Add lemon juice, a little olive oil, and seasoning."]
},

{
    id: 501,
    title: "🥣 Berry Overnight Oats",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup oats", "1/2 cup milk", "1/4 cup plain yogurt", "1/2 cup mixed berries", "1 tsp chia seeds"],
    steps: ["Combine oats, milk, yogurt, and chia seeds in a jar.", "Stir thoroughly and cover.", "Refrigerate overnight.", "Top with berries before serving."]
},
{
    id: 502,
    title: "🍳 Spinach Mushroom Omelette",
    category: "breakfast",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["2 eggs", "1/2 cup sliced mushrooms", "1 cup spinach", "2 tbsp grated cheese", "1 tsp olive oil"],
    steps: ["Whisk the eggs in a bowl.", "Cook mushrooms in olive oil until softened.", "Add spinach and cook until wilted.", "Pour in eggs, add cheese, and cook until fully set."]
},
{
    id: 503,
    title: "🍌 Banana Peanut Butter Oatmeal",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup oats", "1 cup milk", "1 banana", "1 tbsp peanut butter", "Pinch of cinnamon"],
    steps: ["Bring milk to a gentle simmer.", "Stir in oats and cook until creamy.", "Mash half the banana into the oats.", "Top with remaining banana, peanut butter, and cinnamon."]
},
{
    id: 504,
    title: "🥑 Avocado Egg Toast",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["2 slices whole-grain bread", "1 avocado", "2 eggs", "1 tsp lemon juice", "Black pepper"],
    steps: ["Toast the bread.", "Mash avocado with lemon juice and pepper.", "Cook the eggs until the whites and yolks are set.", "Spread avocado on toast and top with eggs."]
},
{
    id: 505,
    title: "🍓 Strawberry Yogurt Parfait",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cup plain yogurt", "1/2 cup strawberries", "1/3 cup oats or granola", "1 tsp honey"],
    steps: ["Wash and slice the strawberries.", "Add a layer of yogurt to a glass.", "Layer strawberries and oats or granola.", "Repeat the layers and drizzle with honey."]
},
{
    id: 506,
    title: "🫓 Whole-Wheat Paneer Wrap",
    category: "breakfast",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 whole-wheat tortilla", "100 g paneer", "1/4 cucumber", "1 tomato", "2 tbsp plain yogurt"],
    steps: ["Crumble the paneer and warm it in a pan.", "Chop the cucumber and tomato.", "Spread yogurt over the tortilla.", "Add paneer and vegetables, then roll tightly."]
},
{
    id: 507,
    title: "🍎 Apple Cinnamon Porridge",
    category: "breakfast",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup oats", "1 cup milk", "1 apple", "1/2 tsp cinnamon", "1 tbsp chopped walnuts"],
    steps: ["Dice the apple.", "Cook oats with milk over medium-low heat.", "Stir in half the apple and cinnamon.", "Serve with the remaining apple and walnuts."]
},
{
    id: 508,
    title: "🥞 Whole-Wheat Banana Pancakes",
    category: "breakfast",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 banana", "1 egg", "3/4 cup whole-wheat flour", "1/2 cup milk", "1 tsp baking powder"],
    steps: ["Mash the banana and whisk with the egg and milk.", "Fold in flour and baking powder.", "Pour small portions onto a lightly greased pan.", "Flip when bubbles appear and cook until the centers are done."]
},
{
    id: 509,
    title: "🥚 Veggie Breakfast Muffins",
    category: "breakfast",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["4 eggs", "1/2 bell pepper", "1/2 cup spinach", "1/4 cup grated cheese", "Black pepper"],
    steps: ["Preheat the oven to 180°C.", "Whisk eggs with pepper and black pepper.", "Stir in chopped vegetables and cheese.", "Pour into greased muffin cups and bake until fully set."]
},
{
    id: 510,
    title: "🥛 Mango Yogurt Smoothie",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cup mango pieces", "3/4 cup plain yogurt", "1/2 cup milk", "2 tbsp oats"],
    steps: ["Place mango, yogurt, milk, and oats in a blender.", "Blend until smooth.", "Add more milk if needed.", "Pour into a glass and serve."]
},
{
    id: 511,
    title: "🥪 Hummus Breakfast Sandwich",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["2 whole-grain bread slices", "3 tbsp hummus", "1 boiled egg", "Cucumber slices", "Lettuce"],
    steps: ["Toast the bread if desired.", "Spread hummus over both slices.", "Slice the boiled egg.", "Layer egg, cucumber, and lettuce onto the bread and assemble."]
},
{
    id: 512,
    title: "🧀 Cottage Cheese Toast",
    category: "breakfast",
    time: "8 min",
    difficulty: "Easy",
    ingredients: ["2 whole-grain bread slices", "1/2 cup cottage cheese", "1 tomato", "Fresh herbs", "Black pepper"],
    steps: ["Toast the bread.", "Spread cottage cheese over each slice.", "Slice the tomato and arrange on top.", "Finish with herbs and black pepper."]
},
{
    id: 513,
    title: "🍠 Sweet Potato Egg Hash",
    category: "breakfast",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["1 medium sweet potato", "2 eggs", "1/2 bell pepper", "1 tsp olive oil", "Paprika"],
    steps: ["Dice the sweet potato and bell pepper.", "Cook the sweet potato in oil with a splash of water until tender.", "Add bell pepper and paprika.", "Add eggs and cook until completely set."]
},
{
    id: 514,
    title: "🌯 Breakfast Bean Burrito",
    category: "breakfast",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 whole-wheat tortilla", "2 eggs", "1/3 cup black beans", "1/4 cup salsa", "2 tbsp grated cheese"],
    steps: ["Warm and drain the beans.", "Scramble the eggs until fully cooked.", "Place eggs and beans on the tortilla.", "Add salsa and cheese, then fold into a burrito."]
},
{
    id: 515,
    title: "🫐 Blueberry Chia Pudding",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["3 tbsp chia seeds", "1 cup milk", "1/2 cup blueberries", "1 tsp honey", "1/4 tsp vanilla"],
    steps: ["Whisk chia seeds, milk, honey, and vanilla.", "Let stand for 5 minutes and stir again.", "Cover and refrigerate for at least 2 hours.", "Top with blueberries before serving."]
},
{
    id: 516,
    title: "🍞 Tomato Cheese Breakfast Toast",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["2 whole-grain bread slices", "1 tomato", "1/4 cup mozzarella", "Dried oregano", "Black pepper"],
    steps: ["Preheat the oven grill or toaster oven.", "Place tomato slices on the bread.", "Sprinkle with mozzarella and oregano.", "Toast until the cheese melts and the bread is crisp."]
},
{
    id: 517,
    title: "🥜 Date Walnut Oat Bowl",
    category: "breakfast",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup oats", "1 cup milk", "2 dates", "1 tbsp walnuts", "Pinch of cinnamon"],
    steps: ["Chop the dates.", "Cook oats in milk until creamy.", "Stir in the dates and cinnamon.", "Top with walnuts and serve."]
},
{
    id: 518,
    title: "🥒 Savory Yogurt Cucumber Bowl",
    category: "breakfast",
    time: "8 min",
    difficulty: "Easy",
    ingredients: ["1 cup plain yogurt", "1/2 cucumber", "1 whole-wheat pita", "Fresh mint", "Lemon juice"],
    steps: ["Dice the cucumber.", "Mix cucumber with yogurt, mint, and lemon juice.", "Toast or warm the pita.", "Serve the yogurt bowl with pita wedges."]
},
{
    id: 519,
    title: "🌽 Corn Spinach Egg Scramble",
    category: "breakfast",
    time: "12 min",
    difficulty: "Easy",
    ingredients: ["2 eggs", "1/4 cup sweetcorn", "1 cup spinach", "1 tsp olive oil", "Black pepper"],
    steps: ["Whisk the eggs.", "Warm the oil and cook the corn for 2 minutes.", "Add spinach and stir until wilted.", "Add eggs and stir gently until fully cooked."]
},
{
    id: 520,
    title: "🍐 Pear Almond Overnight Oats",
    category: "breakfast",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup oats", "1/2 cup milk", "1/4 cup yogurt", "1 pear", "1 tbsp sliced almonds"],
    steps: ["Mix oats, milk, and yogurt in a jar.", "Cover and refrigerate overnight.", "Dice the pear.", "Top with pear and almonds before serving."]
},
{
    id: 521,
    title: "🍗 Grilled Chicken Rice Bowl",
    category: "lunch",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["1 chicken breast", "1 cup cooked rice", "1 cup broccoli", "1 tbsp olive oil", "Lemon and paprika"],
    steps: ["Season chicken with lemon, paprika, and a little oil.", "Grill or pan-cook until the center reaches 74°C.", "Steam broccoli until tender.", "Serve chicken and broccoli over rice."]
},
{
    id: 522,
    title: "🥗 Mediterranean Chickpea Bowl",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 cup chickpeas", "1 cucumber", "1 tomato", "1/4 cup feta", "Lemon juice and olive oil"],
    steps: ["Rinse and drain the chickpeas.", "Dice cucumber and tomato.", "Combine the vegetables and chickpeas.", "Top with feta and a lemon-olive oil dressing."]
},
{
    id: 523,
    title: "🍚 Chicken Vegetable Fried Rice",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["2 cups cooked rice", "150 g cooked chicken", "1 cup mixed vegetables", "1 egg", "1 tbsp soy sauce"],
    steps: ["Heat a little oil in a large pan.", "Scramble the egg and add mixed vegetables.", "Stir in chicken and cooked rice.", "Add soy sauce and heat everything until steaming hot."]
},
{
    id: 524,
    title: "🌯 Grilled Chicken Hummus Wrap",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 whole-wheat tortilla", "150 g chicken breast", "3 tbsp hummus", "Lettuce", "1 tomato"],
    steps: ["Season and cook chicken until it reaches 74°C.", "Slice the cooked chicken.", "Spread hummus over the tortilla.", "Add chicken, lettuce, and tomato, then roll."]
},
{
    id: 525,
    title: "🍝 Whole-Wheat Tomato Pasta",
    category: "lunch",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["200 g whole-wheat pasta", "2 cups chopped tomatoes", "2 garlic cloves", "1 tbsp olive oil", "Fresh basil"],
    steps: ["Cook pasta according to package instructions.", "Sauté minced garlic in olive oil.", "Add tomatoes and simmer until softened.", "Toss with drained pasta and basil."]
},
{
    id: 526,
    title: "🫘 Black Bean Avocado Bowl",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 cup black beans", "1 cup cooked rice", "1/2 avocado", "1/2 cup corn", "Lime juice"],
    steps: ["Warm the black beans and corn.", "Dice the avocado.", "Arrange rice, beans, and corn in a bowl.", "Top with avocado and lime juice."]
},
{
    id: 527,
    title: "🐟 Lemon Baked Fish with Potatoes",
    category: "lunch",
    time: "35 min",
    difficulty: "Easy",
    ingredients: ["2 fish fillets", "2 potatoes", "1 lemon", "1 tbsp olive oil", "Dried herbs"],
    steps: ["Preheat the oven to 200°C.", "Dice potatoes and roast with oil for 15 minutes.", "Add seasoned fish and lemon slices to the tray.", "Bake until the fish reaches 63°C and the potatoes are tender."]
},
{
    id: 528,
    title: "🍲 Red Lentil Vegetable Soup",
    category: "lunch",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["1 cup red lentils", "1 carrot", "1 onion", "1 tomato", "4 cups vegetable stock"],
    steps: ["Rinse the lentils and chop the vegetables.", "Sauté onion and carrot in a pot.", "Add lentils, tomato, and stock.", "Simmer until the lentils are soft and season to taste."]
},
{
    id: 529,
    title: "🥙 Falafel Pita Pocket",
    category: "lunch",
    time: "15 min",
    difficulty: "Easy",
    ingredients: ["1 whole-wheat pita", "4 cooked falafel", "2 tbsp hummus", "Cucumber", "Tomato"],
    steps: ["Warm the falafel according to its package instructions.", "Cut the pita to make a pocket.", "Spread hummus inside.", "Fill with falafel, cucumber, and tomato."]
},
{
    id: 530,
    title: "🍛 Chickpea Spinach Rice Bowl",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup chickpeas", "2 cups spinach", "1 cup cooked rice", "1/2 cup chopped tomatoes", "1 tsp curry powder"],
    steps: ["Sauté tomatoes with curry powder.", "Add chickpeas and a splash of water.", "Stir in spinach until wilted.", "Serve the curry over cooked rice."]
},
{
    id: 531,
    title: "🥪 Tuna Cucumber Sandwich",
    category: "lunch",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 can tuna, drained", "4 bread slices", "2 tbsp plain yogurt", "1/2 cucumber", "Lettuce"],
    steps: ["Flake the tuna into a bowl.", "Mix with yogurt and black pepper.", "Slice the cucumber.", "Spread tuna on bread, add cucumber and lettuce, and assemble."]
},
{
    id: 532,
    title: "🌮 Chicken and Bean Tacos",
    category: "lunch",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["200 g chicken breast", "6 small tortillas", "1/2 cup black beans", "1 tomato", "Cumin and paprika"],
    steps: ["Season and cook chicken until it reaches 74°C.", "Slice the chicken and warm the beans.", "Heat tortillas in a dry pan.", "Fill with chicken, beans, and diced tomato."]
},
{
    id: 533,
    title: "🥦 Broccoli Cheddar Grain Bowl",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked brown rice", "1 cup broccoli", "1/3 cup grated cheddar", "1/2 cup chickpeas", "Black pepper"],
    steps: ["Steam broccoli until tender.", "Warm the chickpeas and rice.", "Combine them in a bowl.", "Sprinkle with cheddar and black pepper."]
},
{
    id: 534,
    title: "🍜 Vegetable Soba Noodles",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["200 g soba noodles", "1 carrot", "1 cup cabbage", "1 tbsp soy sauce", "1 tsp sesame oil"],
    steps: ["Cook soba noodles according to the package.", "Slice carrot and cabbage thinly.", "Stir-fry vegetables in sesame oil.", "Add drained noodles and soy sauce, then toss until hot."]
},
{
    id: 535,
    title: "🫓 Paneer Vegetable Roti Roll",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["2 whole-wheat rotis", "150 g paneer", "1/2 bell pepper", "1/2 onion", "2 tbsp plain yogurt"],
    steps: ["Slice paneer and vegetables.", "Cook onion, pepper, and paneer in a lightly oiled pan.", "Spread yogurt over each roti.", "Add the filling and roll tightly."]
},
{
    id: 536,
    title: "🥔 Jacket Potato with Chickpeas",
    category: "lunch",
    time: "50 min",
    difficulty: "Easy",
    ingredients: ["2 large potatoes", "1 cup chickpeas", "1/2 cup plain yogurt", "1/2 tsp paprika", "Lemon juice"],
    steps: ["Pierce potatoes with a fork.", "Bake at 200°C until tender.", "Warm chickpeas with paprika and lemon juice.", "Split the potatoes and top with chickpeas and yogurt."]
},
{
    id: 537,
    title: "🥗 Quinoa Black Bean Salad",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked quinoa", "1 cup black beans", "1/2 bell pepper", "1/2 cup corn", "Lime juice"],
    steps: ["Allow cooked quinoa to cool slightly.", "Dice the bell pepper.", "Combine quinoa, beans, pepper, and corn.", "Dress with lime juice and olive oil."]
},
{
    id: 538,
    title: "🍗 Chicken Vegetable Couscous",
    category: "lunch",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["150 g chicken breast", "1 cup couscous", "1 carrot", "1 zucchini", "1 cup chicken stock"],
    steps: ["Cook chicken until the center reaches 74°C, then slice.", "Prepare couscous with hot stock according to its package.", "Sauté diced carrot and zucchini until tender.", "Serve vegetables and chicken over couscous."]
},
{
    id: 539,
    title: "🥙 Greek Yogurt Chicken Pita",
    category: "lunch",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 whole-wheat pita", "150 g chicken", "1/4 cup plain yogurt", "1/2 cucumber", "Lemon and oregano"],
    steps: ["Season chicken with lemon and oregano.", "Cook until it reaches 74°C and slice.", "Mix yogurt with diced cucumber.", "Fill the pita with chicken and cucumber yogurt."]
},
{
    id: 540,
    title: "🍅 Lentil Tomato Pasta",
    category: "lunch",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["200 g pasta", "1 cup cooked lentils", "1 can chopped tomatoes", "2 garlic cloves", "Dried oregano"],
    steps: ["Cook pasta according to the package.", "Sauté garlic in a little olive oil.", "Add tomatoes, lentils, and oregano and simmer.", "Toss with drained pasta and serve."]
},
{
    id: 541,
    title: "🍗 Sheet-Pan Chicken and Vegetables",
    category: "dinner",
    time: "40 min",
    difficulty: "Easy",
    ingredients: ["2 chicken breasts", "2 carrots", "1 zucchini", "1 red onion", "Olive oil and dried herbs"],
    steps: ["Preheat the oven to 200°C.", "Chop the vegetables and place them on a tray with chicken.", "Drizzle with oil and season with herbs.", "Roast until vegetables are tender and chicken reaches 74°C."]
},
{
    id: 542,
    title: "🍛 Homemade Chicken Biryani",
    category: "dinner",
    time: "50 min",
    difficulty: "Medium",
    ingredients: ["300 g chicken", "1 cup basmati rice", "1 onion", "1/2 cup plain yogurt", "Biryani spices"],
    steps: ["Rinse and soak the rice for 15 minutes.", "Mix chicken with yogurt and biryani spices.", "Cook onion until golden, then add chicken and cook thoroughly.", "Add rice and the appropriate amount of water, cover, and cook until the rice is tender."]
},
{
    id: 543,
    title: "🍲 Vegetable and Bean Chili",
    category: "dinner",
    time: "35 min",
    difficulty: "Easy",
    ingredients: ["1 cup kidney beans", "1 cup black beans", "1 bell pepper", "1 can chopped tomatoes", "Chili powder"],
    steps: ["Dice the bell pepper.", "Sauté it in a pot until softened.", "Add drained beans, tomatoes, and chili powder.", "Simmer for 20 minutes, stirring occasionally."]
},
{
    id: 544,
    title: "🐟 Salmon with Brown Rice",
    category: "dinner",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["2 salmon fillets", "1 cup cooked brown rice", "1 lemon", "1 cup green beans", "Olive oil"],
    steps: ["Season salmon with lemon and a little olive oil.", "Bake at 200°C until it reaches 63°C.", "Steam green beans until tender.", "Serve salmon with brown rice and green beans."]
},
{
    id: 545,
    title: "🍝 Chicken and Spinach Pasta",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["200 g pasta", "200 g chicken breast", "2 cups spinach", "2 garlic cloves", "1/4 cup grated Parmesan"],
    steps: ["Cook pasta according to the package.", "Cut chicken into small pieces and cook until it reaches 74°C.", "Add garlic and spinach and cook until wilted.", "Toss with drained pasta and Parmesan."]
},
{
    id: 546,
    title: "🥘 Tofu Vegetable Stir-Fry",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["250 g firm tofu", "1 bell pepper", "1 carrot", "1 cup broccoli", "2 tbsp soy sauce"],
    steps: ["Press tofu gently and cut into cubes.", "Pan-sear tofu until golden.", "Add sliced vegetables and stir-fry until tender-crisp.", "Stir in soy sauce and serve with rice if desired."]
},
{
    id: 547,
    title: "🍗 Chicken Kofta with Rice",
    category: "dinner",
    time: "30 min",
    difficulty: "Medium",
    ingredients: ["300 g ground chicken", "1/2 onion", "2 tbsp chopped parsley", "1 tsp cumin", "1 cup cooked rice"],
    steps: ["Mix ground chicken with grated onion, parsley, and cumin.", "Shape into small kofta logs.", "Bake or pan-cook until the center reaches 74°C.", "Serve with rice and a side salad."]
},
{
    id: 548,
    title: "🥣 Creamy Lentil Coconut Curry",
    category: "dinner",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["1 cup red lentils", "1/2 cup coconut milk", "1 onion", "1 can chopped tomatoes", "Curry powder"],
    steps: ["Rinse the lentils.", "Sauté onion with curry powder.", "Add tomatoes, lentils, and water to cover.", "Simmer until lentils soften, then stir in coconut milk."]
},
{
    id: 549,
    title: "🌮 Baked Fish Tacos",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["300 g white fish", "6 small tortillas", "2 cups shredded cabbage", "1/4 cup plain yogurt", "Lime juice"],
    steps: ["Season fish with lime juice and pepper.", "Bake at 200°C until the fish reaches 63°C.", "Mix yogurt with a little lime juice for dressing.", "Flake fish into warm tortillas and add cabbage and dressing."]
},
{
    id: 550,
    title: "🍲 Chicken Vegetable Barley Soup",
    category: "dinner",
    time: "45 min",
    difficulty: "Easy",
    ingredients: ["200 g chicken", "1/2 cup pearl barley", "1 carrot", "1 celery stalk", "5 cups chicken stock"],
    steps: ["Dice the carrot and celery.", "Place stock, barley, and vegetables in a pot.", "Add chicken and simmer until cooked through.", "Check chicken reaches 74°C and barley is tender before serving."]
},
{
    id: 551,
    title: "🥘 Stuffed Bell Peppers with Lentils",
    category: "dinner",
    time: "40 min",
    difficulty: "Easy",
    ingredients: ["3 bell peppers", "1 cup cooked lentils", "1 cup cooked rice", "1 cup tomato sauce", "1/3 cup grated cheese"],
    steps: ["Halve peppers and remove seeds.", "Mix lentils with rice and half the tomato sauce.", "Fill peppers and top with remaining sauce and cheese.", "Bake at 190°C until the peppers soften."]
},
{
    id: 552,
    title: "🍗 Yogurt Herb Chicken",
    category: "dinner",
    time: "35 min",
    difficulty: "Easy",
    ingredients: ["2 chicken breasts", "1/2 cup plain yogurt", "1 garlic clove", "1 tsp dried oregano", "Lemon juice"],
    steps: ["Mix yogurt, garlic, oregano, and lemon juice.", "Coat chicken and marinate in the refrigerator for at least 15 minutes.", "Place chicken in a baking dish.", "Bake at 200°C until the center reaches 74°C."]
},
{
    id: 553,
    title: "🍆 Baked Eggplant Chickpea Stew",
    category: "dinner",
    time: "40 min",
    difficulty: "Easy",
    ingredients: ["1 large eggplant", "1 can chickpeas", "1 can chopped tomatoes", "1 onion", "Cumin and paprika"],
    steps: ["Cube eggplant and chop onion.", "Roast eggplant at 200°C until lightly browned.", "Simmer onion, tomatoes, chickpeas, and spices in a pot.", "Stir in roasted eggplant and simmer for another 10 minutes."]
},
{
    id: 554,
    title: "🍚 Salmon Vegetable Rice Bowl",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["2 salmon fillets", "1 cup cooked rice", "1 cucumber", "1 carrot", "Soy sauce and lemon"],
    steps: ["Bake salmon until it reaches 63°C.", "Prepare the cooked rice.", "Slice cucumber and grate carrot.", "Serve salmon over rice with vegetables and a little soy sauce and lemon."]
},
{
    id: 555,
    title: "🍛 Paneer Pea Curry",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["200 g paneer", "1 cup peas", "1 cup tomato puree", "1/2 onion", "1 tsp garam masala"],
    steps: ["Dice paneer and chop onion.", "Cook onion until soft and stir in garam masala.", "Add tomato puree and simmer for 5 minutes.", "Add peas and paneer and cook until hot. Serve with rice or roti."]
},
{
    id: 556,
    title: "🍝 Lentil Bolognese",
    category: "dinner",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["200 g spaghetti", "1 cup cooked lentils", "1 can chopped tomatoes", "1 carrot", "2 garlic cloves"],
    steps: ["Cook spaghetti according to the package.", "Finely chop carrot and garlic.", "Sauté vegetables, then add lentils and tomatoes.", "Simmer for 15 minutes and serve over spaghetti."]
},
{
    id: 557,
    title: "🥔 Chickpea Potato Tray Bake",
    category: "dinner",
    time: "40 min",
    difficulty: "Easy",
    ingredients: ["2 potatoes", "1 can chickpeas", "1 red onion", "1 bell pepper", "Paprika and olive oil"],
    steps: ["Preheat the oven to 200°C.", "Dice potatoes and vegetables.", "Toss with drained chickpeas, olive oil, and paprika.", "Spread on a tray and roast until potatoes are tender, turning halfway."]
},
{
    id: 558,
    title: "🍜 Chicken Ginger Noodle Soup",
    category: "dinner",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["200 g chicken breast", "100 g noodles", "1 carrot", "1 tsp grated ginger", "4 cups chicken stock"],
    steps: ["Bring stock and ginger to a simmer.", "Add sliced chicken and cook until it reaches 74°C.", "Add carrot and noodles.", "Cook until noodles are tender and serve hot."]
},
{
    id: 559,
    title: "🌯 Black Bean Sweet Potato Burrito",
    category: "dinner",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["2 tortillas", "1 sweet potato", "1 cup black beans", "1/2 cup cooked rice", "Lime juice"],
    steps: ["Dice sweet potato and roast at 200°C until tender.", "Warm black beans and rice.", "Divide the filling between tortillas.", "Add lime juice, fold, and toast the burritos in a pan."]
},
{
    id: 560,
    title: "🥦 Broccoli Tofu Rice Bowl",
    category: "dinner",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["250 g firm tofu", "2 cups broccoli", "1 cup cooked rice", "1 tbsp soy sauce", "1 tsp sesame oil"],
    steps: ["Cut tofu into cubes and pat dry.", "Pan-cook tofu in sesame oil until golden.", "Steam broccoli until tender.", "Serve tofu and broccoli over rice with soy sauce."]
},
{
    id: 561,
    title: "🍎 Apple Peanut Butter Bites",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 apple", "2 tbsp peanut butter", "1 tbsp oats", "Pinch of cinnamon"],
    steps: ["Wash and core the apple.", "Cut into round slices or wedges.", "Spread peanut butter over the pieces.", "Sprinkle with oats and cinnamon."]
},
{
    id: 562,
    title: "🥕 Carrot Hummus Snack Box",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["2 carrots", "1/2 cucumber", "1/3 cup hummus", "Whole-grain crackers"],
    steps: ["Wash and cut carrots and cucumber into sticks.", "Spoon hummus into a small container.", "Arrange vegetables and crackers beside it.", "Serve immediately or refrigerate in a sealed container."]
},
{
    id: 563,
    title: "🍓 Frozen Yogurt Berry Bites",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 cup plain yogurt", "1/2 cup chopped strawberries", "1/4 cup blueberries", "1 tsp honey"],
    steps: ["Mix yogurt with honey.", "Fold in the chopped berries.", "Spoon small portions onto a lined tray.", "Freeze until firm and store in a freezer-safe container."]
},
{
    id: 564,
    title: "🌽 Homemade Corn Chaat",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked sweetcorn", "1 tomato", "1/4 onion", "Lemon juice", "Chaat masala"],
    steps: ["Cook the corn until tender.", "Dice the tomato and onion.", "Mix corn with the vegetables.", "Add lemon juice and chaat masala and serve."]
},
{
    id: 565,
    title: "🥚 Egg and Avocado Snack Toast",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 slice whole-grain bread", "1 egg", "1/4 avocado", "Lemon juice", "Black pepper"],
    steps: ["Toast the bread.", "Cook the egg until fully set.", "Mash avocado with lemon juice.", "Spread avocado on toast and top with egg and pepper."]
},
{
    id: 566,
    title: "🥣 Roasted Chickpea Snack",
    category: "snacks",
    time: "35 min",
    difficulty: "Easy",
    ingredients: ["1 can chickpeas", "1 tbsp olive oil", "1/2 tsp cumin", "1/2 tsp paprika"],
    steps: ["Drain, rinse, and dry chickpeas.", "Toss with olive oil and spices.", "Spread in a single layer on a baking tray.", "Roast at 200°C for 25–35 minutes, stirring occasionally."]
},
{
    id: 567,
    title: "🍌 Banana Oat Snack Cookies",
    category: "snacks",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["2 ripe bananas", "1 cup oats", "1 tbsp peanut butter", "2 tbsp raisins"],
    steps: ["Preheat the oven to 180°C.", "Mash bananas and mix with oats and peanut butter.", "Fold in raisins and shape into small cookies.", "Bake for 12–15 minutes until set."]
},
{
    id: 568,
    title: "🥒 Cucumber Cheese Bites",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cucumber", "1/2 cup cottage cheese", "Fresh dill", "Black pepper"],
    steps: ["Wash the cucumber and cut into thick rounds.", "Mix cottage cheese with dill and pepper.", "Spoon the mixture onto cucumber rounds.", "Serve chilled."]
},
{
    id: 569,
    title: "🥛 Banana Date Smoothie",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 banana", "2 pitted dates", "1 cup milk", "2 tbsp plain yogurt", "Pinch of cinnamon"],
    steps: ["Remove the date pits.", "Add banana, dates, milk, yogurt, and cinnamon to a blender.", "Blend until smooth.", "Pour into a glass and serve."]
},
{
    id: 570,
    title: "🧀 Baked Zucchini Cheese Sticks",
    category: "snacks",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["2 zucchini", "1/3 cup breadcrumbs", "1/4 cup grated Parmesan", "1 egg", "Dried oregano"],
    steps: ["Preheat the oven to 200°C.", "Cut zucchini into sticks.", "Mix breadcrumbs, Parmesan, and oregano.", "Dip sticks in beaten egg, coat with crumbs, and bake until golden and tender."]
},
{
    id: 571,
    title: "🍉 Watermelon Yogurt Smoothie",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["2 cups seedless watermelon", "1/2 cup plain yogurt", "1 tsp lime juice", "Ice cubes"],
    steps: ["Cut watermelon into chunks.", "Add watermelon, yogurt, lime juice, and ice to a blender.", "Blend until smooth.", "Serve immediately."]
},
{
    id: 572,
    title: "🥜 Homemade Trail Mix",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1/2 cup unsalted nuts", "1/4 cup raisins", "1/4 cup pumpkin seeds", "2 tbsp dark chocolate chips"],
    steps: ["Check that the nuts and seeds are suitable for anyone eating the mix.", "Combine nuts, raisins, pumpkin seeds, and chocolate chips.", "Mix thoroughly.", "Store in an airtight container."]
},
{
    id: 573,
    title: "🍿 Olive Oil Herb Popcorn",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/4 cup popcorn kernels", "1 tsp olive oil", "1/2 tsp dried herbs", "Pinch of salt"],
    steps: ["Heat oil in a covered pot.", "Add kernels and cover securely.", "Shake occasionally until popping slows.", "Season with herbs and salt."]
},
{
    id: 574,
    title: "🍐 Pear Yogurt Snack Bowl",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 pear", "3/4 cup plain yogurt", "1 tbsp sunflower seeds", "Pinch of cinnamon"],
    steps: ["Wash and dice the pear.", "Spoon yogurt into a bowl.", "Add the pear and sunflower seeds.", "Sprinkle with cinnamon and serve."]
},
{
    id: 575,
    title: "🫓 Whole-Wheat Hummus Pinwheels",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1 whole-wheat tortilla", "3 tbsp hummus", "1/2 carrot", "1/4 cucumber", "Lettuce"],
    steps: ["Spread hummus evenly over the tortilla.", "Grate carrot and slice cucumber thinly.", "Add vegetables and lettuce in a thin layer.", "Roll tightly and slice into pinwheels."]
},
{
    id: 576,
    title: "🍓 Strawberry Chia Yogurt",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 cup plain yogurt", "1/2 cup strawberries", "1 tsp chia seeds", "1 tsp honey"],
    steps: ["Wash and chop the strawberries.", "Stir chia seeds into yogurt.", "Fold in the strawberries.", "Add honey if desired and serve."]
},
{
    id: 577,
    title: "🥔 Oven-Baked Potato Wedges",
    category: "snacks",
    time: "35 min",
    difficulty: "Easy",
    ingredients: ["3 potatoes", "1 tbsp olive oil", "1/2 tsp paprika", "1/2 tsp garlic powder"],
    steps: ["Preheat the oven to 200°C.", "Cut potatoes into wedges.", "Toss with olive oil, paprika, and garlic powder.", "Bake for 30–35 minutes, turning halfway through."]
},
{
    id: 578,
    title: "🍫 Cocoa Banana Yogurt",
    category: "snacks",
    time: "5 min",
    difficulty: "Easy",
    ingredients: ["1 banana", "3/4 cup plain yogurt", "1 tsp cocoa powder", "1 tbsp chopped walnuts"],
    steps: ["Mash half the banana.", "Mix with yogurt and cocoa powder.", "Slice the remaining banana over the top.", "Finish with walnuts and serve."]
},
{
    id: 579,
    title: "🥑 Avocado Chickpea Dip",
    category: "snacks",
    time: "10 min",
    difficulty: "Easy",
    ingredients: ["1/2 avocado", "1/2 cup cooked chickpeas", "1 tbsp lemon juice", "1 garlic clove", "Cumin"],
    steps: ["Drain chickpeas if using canned ones.", "Mash chickpeas and avocado together.", "Add lemon juice, crushed garlic, and cumin.", "Mix until creamy and serve with vegetable sticks."]
},
{
    id: 580,
    title: "🍪 Oat Raisin Cookies",
    category: "snacks",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["1 cup oats", "1/2 cup flour", "1 egg", "1/4 cup raisins", "2 tbsp butter", "2 tbsp brown sugar"],
    steps: ["Preheat the oven to 180°C.", "Mix oats, flour, raisins, and sugar.", "Stir in egg and melted butter to form a dough.", "Shape cookies and bake for 12–15 minutes until set."]
},
{
    id: 581,
    title: "🥗 Roasted Vegetable Couscous",
    category: "vegetarian",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["1 cup couscous", "1 zucchini", "1 bell pepper", "1 red onion", "Lemon juice and olive oil"],
    steps: ["Preheat the oven to 200°C.", "Chop vegetables and toss with olive oil.", "Roast until tender and lightly browned.", "Prepare couscous with hot water according to the package and combine with vegetables and lemon juice."]
},
{
    id: 582,
    title: "🍛 Chickpea Spinach Curry",
    category: "vegetarian",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["1 can chickpeas", "2 cups spinach", "1 cup chopped tomatoes", "1 onion", "Curry powder"],
    steps: ["Sauté chopped onion until soft.", "Add curry powder and tomatoes.", "Stir in drained chickpeas and simmer for 10 minutes.", "Add spinach and cook until wilted."]
},
{
    id: 583,
    title: "🍆 Baked Eggplant Tomato Boats",
    category: "vegetarian",
    time: "35 min",
    difficulty: "Easy",
    ingredients: ["2 eggplants", "1 cup chopped tomatoes", "1/2 cup chickpeas", "1/4 cup grated mozzarella", "Dried oregano"],
    steps: ["Halve eggplants lengthwise and score the flesh.", "Bake at 200°C until beginning to soften.", "Mix tomatoes, chickpeas, and oregano.", "Spoon mixture over eggplant, add cheese, and bake until tender."]
},
{
    id: 584,
    title: "🥦 Broccoli Tofu Stir-Fry",
    category: "vegetarian",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["250 g firm tofu", "2 cups broccoli", "1 carrot", "1 tbsp soy sauce", "1 tsp sesame oil"],
    steps: ["Cut tofu into cubes and pat dry.", "Cook tofu in sesame oil until golden.", "Add broccoli and sliced carrot with a splash of water.", "Cover briefly until tender, then stir in soy sauce."]
},
{
    id: 585,
    title: "🍲 White Bean Vegetable Soup",
    category: "vegetarian",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["1 can white beans", "1 carrot", "1 celery stalk", "1 can chopped tomatoes", "3 cups vegetable stock"],
    steps: ["Chop carrot and celery.", "Sauté vegetables in a pot until slightly softened.", "Add tomatoes, drained beans, and stock.", "Simmer for 20 minutes and season to taste."]
},
{
    id: 586,
    title: "🫑 Stuffed Peppers with Quinoa",
    category: "vegetarian",
    time: "40 min",
    difficulty: "Medium",
    ingredients: ["3 bell peppers", "1 cup cooked quinoa", "1/2 cup black beans", "1/2 cup corn", "1/2 cup tomato sauce"],
    steps: ["Halve peppers and remove seeds.", "Mix quinoa, beans, corn, and half the tomato sauce.", "Fill peppers and spoon remaining sauce on top.", "Bake at 190°C until peppers soften."]
},
{
    id: 587,
    title: "🥕 Carrot Lentil Patties",
    category: "vegetarian",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked lentils", "1 carrot", "1 egg", "1/3 cup breadcrumbs", "Cumin"],
    steps: ["Mash lentils in a bowl.", "Grate carrot and add it with egg, breadcrumbs, and cumin.", "Shape into small patties.", "Pan-cook with a little oil until golden and cooked through."]
},
{
    id: 588,
    title: "🍅 Tomato White Bean Skillet",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 can white beans", "2 cups chopped tomatoes", "2 garlic cloves", "1 cup spinach", "Dried oregano"],
    steps: ["Sauté garlic in a little olive oil.", "Add tomatoes and oregano and simmer for 8 minutes.", "Stir in drained white beans.", "Add spinach and cook until wilted. Serve with whole-grain bread."]
},
{
    id: 589,
    title: "🥔 Sweet Potato Black Bean Hash",
    category: "vegetarian",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["1 sweet potato", "1 cup black beans", "1/2 bell pepper", "1/2 onion", "Paprika"],
    steps: ["Dice sweet potato and vegetables.", "Cook sweet potato in a lightly oiled pan with a splash of water until tender.", "Add onion, pepper, black beans, and paprika.", "Cook until hot and serve."]
},
{
    id: 590,
    title: "🍄 Mushroom Barley Risotto",
    category: "vegetarian",
    time: "40 min",
    difficulty: "Medium",
    ingredients: ["1 cup pearl barley", "2 cups mushrooms", "1 onion", "4 cups vegetable stock", "2 tbsp grated Parmesan"],
    steps: ["Chop onion and slice mushrooms.", "Sauté onion and mushrooms in a pot.", "Add barley and gradually add warm stock.", "Stir often and cook until barley is tender, then add Parmesan."]
},
{
    id: 591,
    title: "🥬 Spinach Ricotta Stuffed Shells",
    category: "vegetarian",
    time: "40 min",
    difficulty: "Medium",
    ingredients: ["12 pasta shells", "1 cup ricotta", "1 cup chopped spinach", "1 cup tomato sauce", "1/3 cup mozzarella"],
    steps: ["Cook pasta shells until just tender and drain.", "Mix ricotta with spinach.", "Fill shells and place in a baking dish over tomato sauce.", "Top with mozzarella and bake at 190°C until hot and bubbling."]
},
{
    id: 592,
    title: "🥒 Zucchini Chickpea Fritters",
    category: "vegetarian",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["1 zucchini", "1 cup cooked chickpeas", "1 egg", "1/4 cup flour", "Cumin"],
    steps: ["Grate zucchini and squeeze out excess liquid.", "Mash chickpeas and mix with zucchini, egg, flour, and cumin.", "Shape into small patties.", "Pan-cook until golden on both sides and cooked through."]
},
{
    id: 593,
    title: "🍠 Roasted Sweet Potato Lentil Bowl",
    category: "vegetarian",
    time: "35 min",
    difficulty: "Easy",
    ingredients: ["1 sweet potato", "1 cup cooked lentils", "2 cups spinach", "2 tbsp plain yogurt", "Paprika"],
    steps: ["Dice sweet potato and toss with paprika and oil.", "Roast at 200°C until tender.", "Warm lentils and wilt spinach in a pan.", "Serve together with yogurt."]
},
{
    id: 594,
    title: "🍝 Pesto Pea Whole-Wheat Pasta",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["200 g whole-wheat pasta", "1 cup peas", "3 tbsp pesto", "1/4 cup Parmesan", "Lemon zest"],
    steps: ["Cook pasta according to the package.", "Add peas during the last 3 minutes.", "Drain, reserving a little pasta water.", "Toss with pesto, Parmesan, lemon zest, and a splash of pasta water."]
},
{
    id: 595,
    title: "🥣 Pumpkin Red Lentil Soup",
    category: "vegetarian",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["2 cups pumpkin cubes", "1/2 cup red lentils", "1 onion", "4 cups vegetable stock", "Cumin"],
    steps: ["Chop onion and rinse lentils.", "Sauté onion with cumin.", "Add pumpkin, lentils, and stock.", "Simmer until soft and blend if desired."]
},
{
    id: 596,
    title: "🌮 Roasted Cauliflower Tacos",
    category: "vegetarian",
    time: "30 min",
    difficulty: "Easy",
    ingredients: ["1 cauliflower", "6 small tortillas", "1 tsp paprika", "1/2 cup plain yogurt", "Lime juice"],
    steps: ["Preheat the oven to 200°C.", "Break cauliflower into florets and toss with oil and paprika.", "Roast until tender and browned.", "Serve in warm tortillas with yogurt mixed with lime juice."]
},
{
    id: 597,
    title: "🫘 Red Kidney Bean Rice Bowl",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["1 cup cooked kidney beans", "1 cup cooked rice", "1/2 cup chopped tomatoes", "1/2 bell pepper", "Cumin"],
    steps: ["Dice the bell pepper.", "Cook pepper with cumin in a lightly oiled pan.", "Add beans and tomatoes and simmer until hot.", "Serve over rice."]
},
{
    id: 598,
    title: "🥦 Cauliflower Cheese Bake",
    category: "vegetarian",
    time: "35 min",
    difficulty: "Easy",
    ingredients: ["1 cauliflower", "1 cup milk", "1 tbsp flour", "1/2 cup grated cheddar", "Black pepper"],
    steps: ["Preheat the oven to 190°C.", "Steam cauliflower until just tender.", "Whisk milk and flour in a saucepan and heat until thickened.", "Stir in cheese, pour over cauliflower, and bake until golden."]
},
{
    id: 599,
    title: "🍅 Mediterranean Orzo Salad",
    category: "vegetarian",
    time: "20 min",
    difficulty: "Easy",
    ingredients: ["200 g orzo", "1 cucumber", "1 cup cherry tomatoes", "1/4 cup feta", "Lemon juice and olive oil"],
    steps: ["Cook orzo according to the package and drain.", "Halve tomatoes and dice cucumber.", "Combine orzo and vegetables.", "Add feta, lemon juice, olive oil, and seasoning."]
},
{
    id: 600,
    title: "🥙 Falafel Grain Bowl",
    category: "vegetarian",
    time: "25 min",
    difficulty: "Easy",
    ingredients: ["4 cooked falafel", "1 cup cooked bulgur or quinoa", "1/2 cucumber", "1 tomato", "3 tbsp hummus"],
    steps: ["Warm falafel according to the package instructions.", "Prepare bulgur or quinoa as directed.", "Chop cucumber and tomato.", "Arrange grains, vegetables, and falafel in a bowl and serve with hummus."]
},
];
