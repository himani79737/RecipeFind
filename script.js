async function searchRecipe() {

let input = document.getElementById("searchInput").value;
localStorage.setItem("lastRecipeSearch", input);
let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;

let response = await fetch(url);
let data = await response.json();

let container = document.getElementById("recipeContainer");

container.innerHTML = "";

if (!data.meals) {
container.innerHTML = "<h2>No recipe found</h2>";
return;
}

data.meals.forEach(recipe => {

container.innerHTML += `
<div class="recipe">
<img src="${recipe.strMealThumb}">
<h3>${recipe.strMeal}</h3>
<p>${recipe.strCategory}</p>
</div>
`;

});

}