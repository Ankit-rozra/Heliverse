import './App.css';
import { useState } from 'react';
import MyComponent from './screens/Home';
import Cart from './screens/Cart';
function App() {
  const [currentPage, setCurrentPage] = useState('MyComponent');
  const renderPage = () => {
    if (currentPage === 'MyComponent') {
      return <MyComponent />;
    } else if (currentPage === 'cart') {
      return <Cart />;
    }
    // Add more conditions for other pages
  };
  return (
    <div>
      <button className="pager" onClick={() => setCurrentPage('MyComponent')}>
        Select Members
      </button>
      <button className="pager" onClick={() => setCurrentPage('cart')}>
        View Team
      </button>

      {renderPage()}
    </div>
  );
}

export default App;
