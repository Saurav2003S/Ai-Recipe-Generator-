
import React from 'react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-recipe-dark text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">
              <span className="text-recipe-orange">Tasty</span>Bot
            </h3>
            <p className="text-gray-300 mb-4">
              AI-powered recipe generator that creates delicious, personalized recipes based on your preferences and available ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-recipe-orange">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-recipe-orange">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-recipe-orange">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-recipe-orange">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-recipe-orange">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-recipe-orange">Generate Recipe</a></li>
              <li><a href="#" className="text-gray-300 hover:text-recipe-orange">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-recipe-orange">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Subscribe</h4>
            <p className="text-gray-300 mb-4">Get the latest recipes and tips delivered to your inbox.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md flex-1 bg-gray-700 text-white border-0 focus:outline-none focus:ring-2 focus:ring-recipe-orange"
              />
              <button className="bg-recipe-orange text-white px-4 py-2 rounded-r-md hover:bg-recipe-orange/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TastyBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
