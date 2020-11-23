import React from 'react';
import './App.sass';

const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

function App() {
  return (<div className="container">
    <section className="hero is-primary is-bold" style={{ height: "100vh" }}>
      <div className="hero-body" style={style}>
          <h1 className="title is-1 is-spaced" style={{textAlign:"center"}}>
            Malinali Becerril Bernal
          </h1>
          <h2 className="subtitle ">
            Software Engineer
          </h2>
      </div>
    </section>
  </div>);
}

export default App;
