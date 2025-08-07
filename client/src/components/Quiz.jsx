import React, { useState } from 'react';

const questions = [
  { text: '¿Cómo te sientes hoy?', example: '1 = Mal, 5 = Bien' },
  { text: '¿Te sientes amado/a?', example: '1 = Nada, 5 = Mucho' },
  { text: '¿Te preocupa el futuro?', example: '1 = Mucho, 5 = Nada' },
  { text: '¿Te cuesta perdonar?', example: '1 = Mucho, 5 = Fácil' },
  { text: '¿Sientes que necesitas ayuda espiritual?', example: '1 = Mucho, 5 = Nada' },
  { text: '¿Te sientes solo/a?', example: '1 = Mucho, 5 = Nunca' },
  { text: '¿Sientes paz interior?', example: '1 = Nada, 5 = Mucha' },
  { text: '¿Oras con frecuencia?', example: '1 = Nunca, 5 = Siempre' },
  { text: '¿Confías en los planes de Dios?', example: '1 = Nada, 5 = Totalmente' },
  { text: '¿Te sientes motivado/a para seguir adelante?', example: '1 = Nada, 5 = Mucho' },
];

const styles = {
  container: {
    maxWidth: 600,
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#f7f1e1', // crema claro
    borderRadius: 12,
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    fontFamily: "'Georgia', serif",
    color: '#4a3c31', // marrón suave
  },
  questionBlock: {
    marginBottom: '1.5rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #d9cbbf',
  },
  questionText: {
    fontSize: '1.15rem',
    fontWeight: '600',
    marginBottom: '0.25rem',
  },
  exampleText: {
    fontSize: '0.9rem',
    fontStyle: 'italic',
    color: '#9a8f7f',
    marginBottom: '0.5rem',
  },
  select: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: 6,
    border: '1px solid #c1b799',
    backgroundColor: '#fffaf0',
    color: '#4a3c31',
    cursor: 'pointer',
  },
  button: {
    marginTop: '1.5rem',
    padding: '0.75rem 2rem',
    backgroundColor: '#927e65', // dorado apagado
    color: '#fffaf0',
    fontSize: '1.1rem',
    fontWeight: '700',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#b39c72',
  },
};

function Quiz({ setVerse }) {
  const [answers, setAnswers] = useState(Array(10).fill(0));
  const [hover, setHover] = useState(false);

  const handleChange = (index, value) => {
    const updated = [...answers];
    updated[index] = parseInt(value);
    setAnswers(updated);
  };

  const handleSubmit = async () => {
    const total = answers.reduce((acc, val) => acc + val, 0);
    const res = await fetch('http://localhost:5000/api/verse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ score: total }),
    });
    const data = await res.json();
    setVerse(data.verse);
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Encuesta de Bienestar Espiritual 🙏
      </h2>
      {questions.map(({ text, example }, i) => (
        <div key={i} style={styles.questionBlock}>
          <p style={styles.questionText}>{text}</p>
          <p style={styles.exampleText}>{example}</p>
          <select
            style={styles.select}
            value={answers[i]}
            onChange={(e) => handleChange(i, e.target.value)}
          >
            <option value={0}>Selecciona</option>
            {[1, 2, 3, 4, 5].map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button
        style={hover ? { ...styles.button, ...styles.buttonHover } : styles.button}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleSubmit}
      >
        Enviar
      </button>
    </div>
  );
}

export default Quiz;
