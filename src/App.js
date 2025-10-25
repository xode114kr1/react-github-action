import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="contanier">
      <section className="count_section">
        <h1 data-testid="counter">{count}</h1>
      </section>
      <section>
        <button
          disabled={disabled}
          data-testid="plus-button"
          onClick={() => setCount(count + 1)}
          style={{ marginRight: '20px' }}
        >
          +
        </button>
        <button
          disabled={disabled}
          data-testid="minus-button"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '5px',
          }}
        >
          <button
            data-testid="on/off-button"
            style={{ backgroundColor: 'blue' }}
            onClick={() => setDisabled(!disabled)}
          >
            on/off
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
