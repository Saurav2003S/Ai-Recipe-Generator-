
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RecipeCard from '@/components/RecipeCard';
import RecipeForm from '@/components/RecipeForm';
import { sampleRecipes } from '@/lib/sampleRecipes';
import { Recipe } from '@/lib/types';
import { ChefHat, Utensils, BookOpen, Clock } from 'lucide-react';

const Index = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(sampleRecipes);
  const [showGeneratedRecipes, setShowGeneratedRecipes] = useState(false);

  const handleGenerateRecipe = () => {
    // In a real implementation, this would call an API
    // For now, we'll just show the recipes we already have
    setShowGeneratedRecipes(true);
    // Scroll to recipes section
    document.getElementById('recipes-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-recipe-cream py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-recipe-dark mb-6">
                  AI-Powered <span className="text-recipe-orange">Recipe</span> Generator
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Transform your ingredients into delicious meals with our AI recipe generator. 
                  Just tell us what you have, and we'll create personalized recipes just for you.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <ChefHat className="text-recipe-orange h-5 w-5" />
                    <span>Custom recipes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Utensils className="text-recipe-orange h-5 w-5" />
                    <span>Use any ingredients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="text-recipe-orange h-5 w-5" />
                    <span>Dietary options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-recipe-orange h-5 w-5" />
                    <span>Quick preparation</span>
                  </div>
                </div>
                <a 
                  href="#generate-section" 
                  className="inline-block bg-recipe-orange hover:bg-recipe-orange/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  Generate Recipe Now
                </a>
              </div>
              
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-recipe-orange rounded-full opacity-20 animate-pulse-slow"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-recipe-green rounded-full opacity-20 animate-pulse-slow"></div>
                <img 
                  src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=800&auto=format&fit=crop" 
                  alt="Delicious Food" 
                  className="rounded-lg shadow-xl relative z-10 w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Generate Section */}
        <section id="generate-section" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-recipe-dark mb-4">Generate Your Recipe</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tell us what ingredients you have on hand, your dietary preferences, and how much time you want to spend cooking.
                Our AI will create the perfect recipe for you.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <RecipeForm onGenerateRecipe={handleGenerateRecipe} />
            </div>
          </div>
        </section>

        {/* Recipes Section */}
        <section id="recipes-section" className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-recipe-dark mb-4">
                {showGeneratedRecipes ? 'Your Generated Recipes' : 'Popular Recipes'}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {showGeneratedRecipes 
                  ? 'Based on your preferences, our AI has created these delicious recipe suggestions for you.' 
                  : 'Check out some of our most popular recipes loved by the TastyBot community.'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-recipe-dark mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our AI-powered recipe generator creates personalized recipes in just three simple steps.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-recipe-orange text-white rounded-full mb-4">
                  1
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Enter Ingredients</h3>
                <p className="text-gray-600">
                  Tell us what ingredients you have available in your kitchen.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-recipe-orange text-white rounded-full mb-4">
                  2
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Set Preferences</h3>
                <p className="text-gray-600">
                  Choose your dietary preferences and how much time you want to spend cooking.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-recipe-orange text-white rounded-full mb-4">
                  3
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Get Recipes</h3>
                <p className="text-gray-600">
                  Our AI will generate personalized recipes based on your inputs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
