import React from "react";

const Card = ({ fact, user }) => {
  if (!fact || !user) {
    return (
      <div className="border p-4 rounded-lg shadow-lg max-w-lg">
        <p>Loading...</p> {/* Muestra texto mientras se cargan los datos */}
      </div>
    );
  }

  return (
    /* Informacion de las tarjetas*/
    <div className="border p-4 rounded-lg shadow-lg max-w-lg">
      <div className="flex items-center">
        <img
          src={user?.picture.medium}
          alt="User Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <p className="font-bold">
          {user?.name.first} {user?.name.last}
        </p>
      </div>
      <p className="pt-4">{fact.fact}</p>
    </div>
  );
};

export default Card;
