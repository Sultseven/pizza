import './scss/app.scss';

import Header from './components/Header'
import Categories from './components/Categories';
import SortPopup from './components/SortPopup';
import CartItem from './components/CartItem';

function App() {
  return (
    <div className="wrapper">
    <Header/>
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories/>
          <SortPopup/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
