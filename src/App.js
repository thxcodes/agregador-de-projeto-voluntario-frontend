import './App.css';
import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';

function App() {

  const [organization, setOrganization] = useState({})

  useEffect(() => {
    fetch("http://localhost:8080/api/organization")
      .then((response) => response.json())
      .then(result => setOrganization(result));
  }, []);

  return (
    <div className="wrapper">

      {organization && organization.length > 0 && organization.map((item) =>
        <Card
          img={item.imagem}
          title={item.nomefantasia}
          description={item.missao}
        />
      )}

    </div>
  );
}

export default App;
