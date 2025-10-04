import React from "react";
import Card from "./cart.jsx";
import "./index.css"

function App() {
  return (
    <div>
      <Card
        name="Sanae Seradni"
        img="/images.jpeg"
        lien="https://github.com/sanae255"
        description="Développeuse web passionnée par React."
        post="Stagiaire"
      />
    </div>
  );
}

export default App;

