import { Routes, Route } from 'react-router-dom';
import NavBar from './routes/nav-bar/nav-bar';
import Home from './routes/home/home';

const Shop = () => {
  return <div>Shop Placeholder</div>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
