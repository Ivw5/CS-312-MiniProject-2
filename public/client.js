document.getElementById("myButton").addEventListener("click", () => {
    fetch("/drinks/margarita")
        .then(response => response.json())
        .then(data => {

            const drinksDiv = document.getElementById("drinks");

             drinksDiv.innerHTML = "";

            data.drinks.forEach(drink => {
                const card = document.createElement("button");
                card.classList.add("card");

                const image = document.createElement("img");
                image.src = drink.strDrinkThumb;

                const drinkName = document.createElement("p");
                drinkName.textContent = drink.strDrink;

                card.appendChild(image);
                card.appendChild(drinkName);

                card.addEventListener("click", () => {
                    const instructionsDiv = document.getElementById("instructions");

                    // Clears the previous drink
                    instructionsDiv.innerHTML = "";

                    // Drink name
                    const title = document.createElement("h2");
                    title.textContent = drink.strDrink;

                    // Ingredients heading
                    const ingredientTitle = document.createElement("h3");
                    ingredientTitle.textContent = "Ingredients";

                    // Ingredient list
                    const ingredientList = document.createElement("ul");

                    for (let i = 1; i <= 15; i++) {

                        const ingredient = drink[`strIngredient${i}`];
                        const measurement = drink[`strMeasure${i}`];

                        if (ingredient) {
                            const listItem = document.createElement("li");

                            listItem.textContent =
                                `${measurement || ""} ${ingredient}`;

                            ingredientList.appendChild(listItem);
                        }
                    }

                    // Instructions heading
                    const instructionsTitle = document.createElement("h3");
                    instructionsTitle.textContent = "Instructions";

                    // Instructions
                    const instructions = document.createElement("p");
                    instructions.textContent = drink.strInstructions;

                    // Add everything to the page
                    instructionsDiv.appendChild(title);
                    instructionsDiv.appendChild(ingredientTitle);
                    instructionsDiv.appendChild(ingredientList);
                    instructionsDiv.appendChild(instructionsTitle);
                    instructionsDiv.appendChild(instructions);
                });

                drinksDiv.appendChild(card);
            });

        })
        .catch(error => {
            console.error("Error:", error);
        });
});


