
import React, { useState } from 'react';
import { RecipeFormData } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface RecipeFormProps {
  onGenerateRecipe: () => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ onGenerateRecipe }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<RecipeFormData>({
    ingredients: '',
    dietary: [],
    cookingTime: 30,
    servingSize: 2
  });

  const dietaryOptions = [
    'Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 
    'Keto', 'Paleo', 'Low-Carb', 'High-Protein'
  ];

  const handleDietaryChange = (option: string) => {
    setFormData(prev => {
      if (prev.dietary.includes(option)) {
        return {
          ...prev,
          dietary: prev.dietary.filter(item => item !== option)
        };
      } else {
        return {
          ...prev,
          dietary: [...prev.dietary, option]
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.ingredients.trim()) {
      toast({
        title: "Ingredients required",
        description: "Please enter at least one ingredient",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    
    // Simulating API call
    setTimeout(() => {
      onGenerateRecipe();
      setLoading(false);
      toast({
        title: "Recipe Generated!",
        description: "Your AI-generated recipe is ready.",
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="mb-6">
        <label htmlFor="ingredients" className="block font-medium text-gray-700 mb-2">
          What ingredients do you have?
        </label>
        <textarea
          id="ingredients"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-recipe-orange min-h-[100px]"
          placeholder="Enter ingredients separated by commas (e.g., chicken, rice, bell peppers)"
          value={formData.ingredients}
          onChange={(e) => setFormData({...formData, ingredients: e.target.value})}
        />
      </div>

      <div className="mb-6">
        <p className="font-medium text-gray-700 mb-2">Dietary Preferences</p>
        <div className="flex flex-wrap gap-2">
          {dietaryOptions.map(option => (
            <button
              key={option}
              type="button"
              className={`px-3 py-1.5 rounded-full text-sm ${
                formData.dietary.includes(option)
                  ? 'bg-recipe-green text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleDietaryChange(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2">
          Cooking Time: <span className="text-recipe-orange">{formData.cookingTime} minutes</span>
        </label>
        <Slider
          value={[formData.cookingTime]}
          min={5}
          max={120}
          step={5}
          onValueChange={(value) => setFormData({...formData, cookingTime: value[0]})}
          className="my-4"
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>5 min</span>
          <span>2 hours</span>
        </div>
      </div>

      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2">
          Servings: <span className="text-recipe-orange">{formData.servingSize}</span>
        </label>
        <Slider
          value={[formData.servingSize]}
          min={1}
          max={12}
          step={1}
          onValueChange={(value) => setFormData({...formData, servingSize: value[0]})}
          className="my-4"
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>1</span>
          <span>12</span>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-recipe-orange hover:bg-recipe-orange/90 text-white py-3 rounded-md"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating Recipe...
          </>
        ) : (
          <>Generate AI Recipe</>
        )}
      </Button>
    </form>
  );
};

export default RecipeForm;
