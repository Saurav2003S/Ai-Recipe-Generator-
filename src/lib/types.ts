
export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: number; // in minutes
  servings: number;
  dietaryInfo: string[];
  image: string;
}

export interface RecipeFormData {
  ingredients: string;
  dietary: string[];
  cookingTime: number;
  servingSize: number;
}
