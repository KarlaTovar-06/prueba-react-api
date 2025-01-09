import React from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "./components/Card.tsx"; // componente Card
import { fetchCatFactsAndUsers } from "./utils/useAPI.ts"; // Importa la función de API

export default function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["catFactsAndUsers"],
    queryFn: fetchCatFactsAndUsers, // Usamos la función importada
  });

  if (isLoading) {
    /* Mapeamos las APIs a las Cards*/
    return (
      <div className="p-4">
        <div className=" justify-center grid gap-4">
          {[...Array(10)].map((_, index) => (
            <Card key={index} isLoading={true} />
          ))}
        </div>
      </div>
    );
  }

  if (error) return <p>An error has occurred: {error.message}</p>;

  return (
    /* Retornamos por cada dato a las tajretas*/
    <div className="p-4">
      <div className="justify-center grid gap-4">
        {data.catFacts.map((fact, index) => (
          <Card key={index} isLoading={false} fact={fact} user={data.randomUsers[index]} />
        ))}
      </div>
    </div>
  );
}
