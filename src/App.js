import React, { useState } from 'react';
import Card from './Card';
import './App.css';

function App() {

  const [info, setInfo] = useState({
    name: "deepak",
    address: "Nasik"
  });


  return (
    <div>

      <Card>
        <div>
          <p>Name:{info.name}</p>
          <p>Address:{info.address}</p>
        </div>
      </Card>

      <Card>
        <p>Add new records</p>
      </Card>

    </div>
  );
}

export default App;
