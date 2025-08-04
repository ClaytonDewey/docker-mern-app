import { Routes, Route } from 'react-router-dom';

export const Home = () => {
  return <div>Home</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
};
export default App;
