const loadData = async (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    const response = await fetch(url);
    const data = await response.json()
    displayData(data.meals)
}

const displayData = meat => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meat.forEach(meat => {
        const cresteDiv = document.createElement('div')
        cresteDiv.classList.add('col')
        cresteDiv.innerHTML = `
        <div class="card">
                        <img src="${meat.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meat.strMeal}</h5>
                <p class="card-text">${meat.strInstructions.slice(0, 300)}</p>
                <a href="${meat.strYoutube}">${meat.strYoutube}</a>
            </div>
        </div>
        `
        mealsContainer.appendChild(cresteDiv)
    })
}

document.getElementById('search-btn').addEventListener('click', function () {
    const inputField = document.getElementById('floatingInput');
    const inputValue = inputField.value;
    loadData(inputValue)
})