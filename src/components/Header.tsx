
import React from 'react';
import { UtensilsCrossed, ChefHat } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-recipe-cream border-b border-recipe-orange/20 py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ChefHat className="h-8 w-8 text-recipe-orange" />
          <h1 className="text-2xl font-serif font-bold text-recipe-dark">
            <span className="text-recipe-orange">Tasty</span>Bot
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-recipe-dark hover:text-recipe-orange transition-colors font-medium">Home</a>
          <a href="#" className="text-recipe-dark hover:text-recipe-orange transition-colors font-medium">Recipes</a>
          <a href="#" className="text-recipe-dark hover:text-recipe-orange transition-colors font-medium">About</a>
          <a href="#" className="text-recipe-dark hover:text-recipe-orange transition-colors font-medium">Contact</a>
        </nav>

        <div className="md:hidden">
          <UtensilsCrossed className="h-6 w-6 text-recipe-orange" />
        </div>
      </div>
    </header>
  );
};

export default Header;
