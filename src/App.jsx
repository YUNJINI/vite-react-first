import Avatar from "./components/Avatar";

function App() {
  
  const greet = 'Hello World';
  const footerMessage = 'Copyright 2023 by kim';

  return (
    <>
      <h1>{greet}</h1>
      <hr />
      <Avatar />
      <h3>{footerMessage}</h3>
    </>
  );
};

export default App
