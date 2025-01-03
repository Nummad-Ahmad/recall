import React from 'react';
import DialogflowMessenger from './dialogue';
import style from './app.module.css';
function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to My App</h1> */}
      {/* Include the Dialogflow Widget */}
      <DialogflowMessenger />
    </div>
  );
}

export default App;
