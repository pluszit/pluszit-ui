import React from 'react';
import './App.css';
import MDEditor from '@uiw/react-md-editor';

function App() {
  const [value, setValue] = React.useState("");

  const changeText = (value: any) => {
    setValue(value)
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <MDEditor height={200} value={value} onChange={changeText} />
    </div>
  );
}

export default App;
