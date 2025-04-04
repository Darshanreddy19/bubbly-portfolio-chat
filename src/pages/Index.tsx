
import React from 'react';
import ChatBubble from '@/components/ChatBubble';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="text-center px-4 max-w-3xl">
        <h1 className="text-5xl font-bold mb-6 text-slate-900">Welcome to My Portfolio</h1>
        <p className="text-xl text-slate-700 mb-8">
          I'm a developer passionate about creating beautiful and functional web experiences.
          Feel free to explore my work or chat with me using the chat bubble in the corner!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://darshanreddy19.github.io/portfolio/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-800 hover:bg-slate-900 text-white font-medium py-3 px-6 rounded-lg transition-all"
          >
            Visit My Portfolio
          </a>
          <button 
            className="bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-medium py-3 px-6 rounded-lg transition-all"
          >
            Learn More
          </button>
        </div>
      </div>
      <ChatBubble />
    </div>
  );
};

export default Index;
