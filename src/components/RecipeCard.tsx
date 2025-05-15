
import React from 'react';
import { Recipe } from '@/lib/types';
import { Clock, Users, ChefHat } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex gap-1 flex-wrap">
          {recipe.dietaryInfo.map((info, index) => (
            <span 
              key={index}
              className="bg-recipe-orange text-white text-xs px-2 py-1 rounded-full"
            >
              {info}
            </span>
          ))}
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-xl font-serif font-bold mb-2 text-recipe-dark">{recipe.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{recipe.description}</p>
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{recipe.cookingTime} mins</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{recipe.servings} servings</span>
          </div>
          
          <div className="flex items-center gap-1">
            <ChefHat className="h-4 w-4" />
            <span>{recipe.ingredients.length} ingredients</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
