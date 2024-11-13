import { useState } from 'react';
import BlogList from './components/BlogList';
import Navbar from './components/Navbar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <BlogList searchQuery={searchQuery} />
      </main>
    </div>
  );
}

export default App;