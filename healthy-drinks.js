
const healthyDrinkData = [
    {
        id: 1001,
        title: "🍋 Lemon Mint Cooler",
        country: "International",
        category: "Hydration",
        keywords: ["hydration", "lemon", "mint", "vitamin c"],
        time: "5 min",
        difficulty: "Easy",
        ingredients: [
            "1 cup cold water",
            "1 tbsp lemon juice",
            "6 fresh mint leaves",
            "Ice cubes",
            "Optional: 1 tsp honey"
        ],
        steps: [
            "Gently crush the mint leaves.",
            "Mix lemon juice with cold water.",
            "Add mint and ice, then stir.",
            "Add honey if desired and serve."
        ],
        benefits: [
            "Provides fluids to support hydration.",
            "Lemon adds flavor and some vitamin C."
        ]
    },
    {
        id: 1002,
        title: "🍓 Strawberry Yogurt Smoothie",
        country: "International",
        category: "Skin Health",
        keywords: ["face", "skin", "strawberry", "vitamin c", "smoothie"],
        time: "5 min",
        difficulty: "Easy",
        ingredients: [
            "1 cup strawberries",
            "3/4 cup plain yogurt",
            "1/2 banana",
            "1/4 cup milk or water"
        ],
        steps: [
            "Wash the strawberries and remove their stems.",
            "Add all ingredients to a blender.",
            "Blend until smooth.",
            "Serve immediately."
        ],
        benefits: [
            "Strawberries provide vitamin C, which supports normal collagen formation.",
            "Yogurt contributes protein and calcium."
        ]
    },
    {
        id: 1003,
        title: "🥭 Homemade Mango Lassi",
        country: "South Asia",
        category: "Everyday Nutrition",
        keywords: ["india", "mango", "yogurt", "calcium", "smoothie"],
        time: "5 min",
        difficulty: "Easy",
        ingredients: [
            "1 cup ripe mango pieces",
            "3/4 cup plain yogurt",
            "1/4 cup cold water",
            "Optional: a pinch of cardamom"
        ],
        steps: [
            "Add mango, yogurt, and water to a blender.",
            "Blend until creamy.",
            "Add cardamom if desired.",
            "Serve chilled."
        ],
        benefits: [
            "Mango provides vitamin C and other nutrients.",
            "Yogurt provides protein and calcium."
        ]
    },
    {
        id: 1004,
        title: "🥕 Orange Carrot Smoothie",
        country: "International",
        category: "Skin Health",
        keywords: ["face", "skin", "carrot", "orange", "vitamin a", "vitamin c"],
        time: "7 min",
        difficulty: "Easy",
        ingredients: [
            "1 small orange, peeled",
            "1 small carrot, washed and chopped",
            "1/2 banana",
            "1/2 cup cold water"
        ],
        steps: [
            "Wash and chop the carrot.",
            "Peel the orange and remove any seeds.",
            "Blend everything with water until smooth.",
            "Add more water if needed and serve."
        ],
        benefits: [
            "Carrots provide beta-carotene, which the body can convert into vitamin A.",
            "Oranges provide vitamin C."
        ]
    },
    {
        id: 1005,
        title: "🍌 Banana Oat Smoothie",
        country: "International",
        category: "Energy & Nutrition",
        keywords: ["energy", "breakfast", "oats", "banana", "fiber"],
        time: "5 min",
        difficulty: "Easy",
        ingredients: [
            "1 ripe banana",
            "1 cup milk or fortified soy milk",
            "2 tbsp rolled oats",
            "1/4 tsp cinnamon",
            "Optional: 1 tsp peanut butter"
        ],
        steps: [
            "Add banana, milk, oats, and cinnamon to a blender.",
            "Blend until smooth.",
            "Add more milk for a thinner texture.",
            "Add peanut butter if desired and blend again."
        ],
        benefits: [
            "Oats provide fiber.",
            "Banana provides carbohydrates and potassium.",
            "Milk or fortified soy milk can provide protein and calcium."
        ]
    },
    {
        id: 1006,
        title: "🍉 Watermelon Lime Refresher",
        country: "International",
        category: "Hydration",
        keywords: ["hydration", "watermelon", "lime", "summer"],
        time: "5 min",
        difficulty: "Easy",
        ingredients: [
            "2 cups seedless watermelon",
            "1 tbsp lime juice",
            "4 mint leaves",
            "Ice cubes"
        ],
        steps: [
            "Cut the watermelon into small cubes.",
            "Blend with lime juice and mint.",
            "Strain if you prefer a smoother drink.",
            "Pour over ice and serve."
        ],
        benefits: [
            "Watermelon contributes fluids.",
            "Lime adds refreshing flavor and some vitamin C."
        ]
    },
    {
        id: 1007,
        title: "🫐 Blueberry Banana Smoothie",
        country: "International",
        category: "Everyday Nutrition",
        keywords: ["blueberry", "banana", "fiber", "smoothie"],
        time: "5 min",
        difficulty: "Easy",
        ingredients: [
            "3/4 cup blueberries",
            "1 banana",
            "3/4 cup plain yogurt",
            "1/4 cup water or milk"
        ],
        steps: [
            "Rinse the blueberries.",
            "Add all ingredients to a blender.",
            "Blend until smooth.",
            "Adjust the consistency with more water or milk."
        ],
        benefits: [
            "Blueberries provide fiber and plant compounds.",
            "Banana provides potassium.",
            "Yogurt contributes protein and calcium."
        ]
    },
    {
        id: 1008,
        title: "🫚 Ginger Lemon Tea",
        country: "International",
        category: "Warm Drinks",
        keywords: ["ginger", "lemon", "tea", "warm drink"],
        time: "10 min",
        difficulty: "Easy",
        ingredients: [
            "1 cup water",
            "3–4 thin slices fresh ginger",
            "1 tbsp lemon juice",
            "Optional: 1 tsp honey"
        ],
        steps: [
            "Bring water to a gentle boil.",
            "Add ginger and simmer for 5–7 minutes.",
            "Strain into a cup and allow it to cool slightly.",
            "Stir in lemon juice and honey if desired."
        ],
        benefits: [
            "Provides fluid.",
            "Ginger gives the tea a warming flavor."
        ]
    },
    {
        id: 1009,
        title: "🥒 Cucumber Mint Water",
        country: "International",
        category: "Hydration",
        keywords: ["hydration", "cucumber", "mint", "water"],
        time: "5 min",
        difficulty: "Easy",
        ingredients: [
            "1 cup cold water",
            "6 cucumber slices",
            "5 mint leaves",
            "1 lemon slice"
        ],
        steps: [
            "Wash the cucumber, mint, and lemon.",
            "Place them in a glass or jug of water.",
            "Chill for 5–10 minutes to let the flavors infuse.",
            "Serve cold."
        ],
        benefits: [
            "Makes water more flavorful.",
            "Helps support everyday hydration."
        ]
    },
    {
        id: 1010,
        title: "🍍 Pineapple Yogurt Smoothie",
        country: "International",
        category: "Everyday Nutrition",
        keywords: ["pineapple", "vitamin c", "yogurt", "smoothie"],
        time: "5 min",
        difficulty: "Easy",
        ingredients: [
            "1 cup pineapple chunks",
            "1/2 cup plain yogurt",
            "1/2 banana",
            "1/4 cup cold water"
        ],
        steps: [
            "Add pineapple, yogurt, banana, and water to a blender.",
            "Blend until smooth.",
            "Add extra water if needed.",
            "Serve immediately."
        ],
        benefits: [
            "Pineapple provides vitamin C.",
            "Yogurt contributes protein and calcium."
        ]
    }
];
