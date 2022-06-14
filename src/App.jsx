import { Routes, Route } from 'react-router-dom';
import NavBar from './routes/nav-bar/nav-bar';
import Home from './routes/home/home';
import SignIn from './routes/sign-in/sign-in';

const Shop = () => {
  return <div>Shop Placeholder</div>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
