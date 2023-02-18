import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <h4>Input masking in React - <a href="https://www.cluemediator.com">Clue Mediator</a></h4>

      <MaskedInput
        mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="___-__-____"
        guide={true}
        showMask={true}
      />
    </div>
  );
}

export default App;