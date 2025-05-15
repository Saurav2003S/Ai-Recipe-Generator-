
import { Recipe } from './types';

export const sampleRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Creamy Garlic Parmesan Pasta',
    description: 'A rich and creamy pasta dish that comes together in just 20 minutes.',
    ingredients: [
      '8 oz fettuccine pasta',
      '2 tbsp butter',
      '4 cloves garlic, minced',
      '1 cup heavy cream',
      '1 cup grated Parmesan cheese',
      'Salt and pepper to taste',
      'Fresh parsley, chopped (for garnish)'
    ],
    instructions: [
      'Cook pasta according to package directions. Reserve 1/2 cup of pasta water before draining.',
      'In a large skillet, melt butter over medium heat. Add garlic and sauté until fragrant, about 1 minute.',
      'Add heavy cream and bring to a simmer. Cook for 2 minutes.',
      'Reduce heat to low and gradually whisk in Parmesan cheese until melted and smooth.',
      'Add cooked pasta to the sauce and toss to coat. If sauce is too thick, add some reserved pasta water.',
      'Season with salt and pepper to taste. Garnish with chopped parsley before serving.'
    ],
    cookingTime: 20,
    servings: 4,
    dietaryInfo: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Roasted Vegetable Buddha Bowl',
    description: 'A nutritious bowl packed with roasted veggies, quinoa, and a tahini dressing.',
    ingredients: [
      '1 cup quinoa, rinsed',
      '2 cups water',
      '1 sweet potato, cubed',
      '1 red bell pepper, sliced',
      '1 zucchini, sliced',
      '1 red onion, sliced',
      '2 tbsp olive oil',
      '1 tsp cumin',
      '1/2 tsp paprika',
      'Salt and pepper to taste',
      '1 avocado, sliced',
      '2 tbsp tahini',
      '1 tbsp lemon juice',
      '1 tbsp water',
      '1 garlic clove, minced'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C).',
      'Combine quinoa and water in a saucepan. Bring to a boil, reduce heat, cover and simmer for 15 minutes until water is absorbed.',
      'Toss sweet potato, bell pepper, zucchini, and red onion with olive oil, cumin, paprika, salt, and pepper on a baking sheet.',
      'Roast vegetables for 20-25 minutes, stirring halfway through.',
      'For the dressing, whisk together tahini, lemon juice, water, and garlic.',
      'Assemble bowls with quinoa, roasted vegetables, and sliced avocado. Drizzle with tahini dressing.'
    ],
    cookingTime: 35,
    servings: 2,
    dietaryInfo: ['Vegan', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Spicy Thai Basil Chicken',
    description: 'A quick and flavorful Thai stir-fry with chicken and plenty of basil.',
    ingredients: [
      '1 lb ground chicken',
      '4 cloves garlic, minced',
      '3 Thai chilies, finely chopped',
      '1 shallot, thinly sliced',
      '2 tbsp vegetable oil',
      '1 tbsp fish sauce',
      '1 tbsp soy sauce',
      '1 tsp brown sugar',
      '1 cup Thai basil leaves',
      'Steamed rice for serving'
    ],
    instructions: [
      'Heat oil in a wok or large skillet over high heat.',
      'Add garlic, chilies, and shallots. Stir-fry for 30 seconds until fragrant.',
      'Add ground chicken and cook, breaking it up with a spatula, until no longer pink (about 3-4 minutes).',
      'Mix fish sauce, soy sauce, and brown sugar in a small bowl, then add to the wok.',
      'Cook for another minute, then turn off the heat and stir in the Thai basil leaves until wilted.',
      'Serve immediately over steamed rice.'
    ],
    cookingTime: 15,
    servings: 3,
    dietaryInfo: ['High-Protein', 'Dairy-Free'],
    image: 'https://images.unsplash.com/photo-1627308595171-d1b5d95d0e11?q=80&w=800&auto=format&fit=crop'
  }
];
