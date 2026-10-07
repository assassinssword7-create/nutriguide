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
}
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
];
