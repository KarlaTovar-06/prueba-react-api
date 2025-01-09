export const fetchCatFactsAndUsers = async () => {  /* Consumimos las APIs con Promise*/
  const [catFactsRes, randomUserRes] = await Promise.all([
    fetch("https://catfact.ninja/facts"),
    fetch("https://randomuser.me/api/?results=20"),
  ]);

  if (!catFactsRes.ok || !randomUserRes.ok) {
    throw new Error("Error al obtener datos de las APIs.");
  }

  const catFacts = await catFactsRes.json();
  const randomUsers = await randomUserRes.json();

  return { catFacts: catFacts.data, randomUsers: randomUsers.results };
};
