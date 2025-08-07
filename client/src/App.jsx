import React, { useState } from 'react';
import Quiz from './components/Quiz';

function App() {
  const [verse, setVerse] = useState(null);

  return (
    <div className="app-container">
      <h1>Encuesta Bíblica de Ánimo</h1>
      {verse ? (
        <div className="verse">
          <h2>Tu versículo del día:</h2>
          <p>{verse}</p>
        </div>
      ) : (
        <Quiz setVerse={setVerse} />
      )}
    </div>
  );
}

export default App;
