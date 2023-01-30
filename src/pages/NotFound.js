import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Page not found!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        dolorum, repellat quod sequi illum, id quo incidunt fugit consectetur
        ullam deleniti. Ut quasi temporibus illo alias atque officiis
        perspiciatis pariatur?
      </p>

      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
}
