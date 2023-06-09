import React from 'react';
import ReactDOM from 'react-dom/client';
import AnimalFactCard from './components/AnimalFactCard';

import './styles/style.css';

function App() {
  const [animal, setAnimal] = React.useState('cat');

  const genderChangeHandler = (event) => setAnimal(event.target.value);

  return (
    <>
      <select onChange={genderChangeHandler}>
        <option value='cat'>Cat Fact</option>
        <option value='dog'>Dog Fact</option>
      </select>
      <AnimalFactCard animal={animal} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
