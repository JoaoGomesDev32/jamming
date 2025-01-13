import React from 'react';
import './SearchBar.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = () => {
    console.log(`Buscando por: ${searchTerm}`);
  };

  return (
    <div className="SearchBar">
      <input 
        type="text" 
        placeholder="Digite uma música, artista ou álbum" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default SearchBar;
