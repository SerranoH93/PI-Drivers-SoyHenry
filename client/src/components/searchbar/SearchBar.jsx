import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar() {

  
  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder='Escribe un nombre'        
      />
      <button>Buscar</button>     
    </div>
  );
}