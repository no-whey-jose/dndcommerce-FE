import { Routes, Route } from 'react-router-dom';
import NavBar from './components/nav-bar/nav-bar';
import Home from './routes/home/home';
import Authentication from './routes/authentication/authentication';

const Shop = () => {
  return <div>Shop Placeholder</div>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
