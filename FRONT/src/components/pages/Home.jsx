import React, { useState } from 'react';
import { Search } from '../Search-bar/Search';
import { Lista, Name } from '../Search-bar/styled';

export const Home = () => {

//resultados da search bar
const [results, setResults] = useState([]);

return (
    <div>
      <Search setResults={setResults} />
      <Lista>
          {results.map((user) => (
              <Name key={user.id}>{user.name}</Name>
          ))}
      </Lista>
    </div>
  );
};
