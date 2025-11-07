async function obtenerDatos() {
  const container = document.getElementById("cocktails-container")
  container.innerHTML = ``

  const loading = document.createElement("p");
  loading.classList.add("loading");
  loading.textContent = "Cargando cócteles...";
  container.appendChild(loading);
  try {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");
    const data = await response.json();

    loading.remove();


    data.drinks.forEach(drink => {
        const card = document.createElement("div");
        card.classList.add("cocktail");
        card.innerHTML =
         `
            <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" width="150">
            <h3>${drink.strDrink}</h3>
        
        `
        container.appendChild(card)
        console.log(drink.strDrink)
    }
    );
  } catch (error) {
    console.error("Error:", error);
  } 
}

obtenerDatos();

const hamburger = document.getElementById("hamburger");
const navContent = document.getElementById("nav-content");

hamburger.addEventListener("click", () => {
  navContent.classList.toggle("active");
});
