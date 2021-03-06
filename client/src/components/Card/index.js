import React from "react";

function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header text-white bg-dark">
        <h3>
          <strong>
            {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
