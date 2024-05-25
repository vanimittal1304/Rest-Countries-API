const countriesContainer = document.querySelector(".countriesContainer")


fetch('https://restcountries.com/v3.1/all ')
.then((res) => res.json())
.then((data) => {
    // console.log(data)
    data.forEach(country => {
        // console.log(country)
        const countryCard = document.createElement('a');
        countryCard.href = `country.html?name=${country.name.common}`;
        countryCard.classList.add('country');

        // const cardImage = document.createElement('img');
        // cardImage.src = 'https://flagcdn.com/is.svg';
        // countryCard.append(cardImage);

        countryCard.innerHTML = `
            <img src="${country.flags.svg}">
            <div class="cardText">
                <h3 class="cardTitle">${country.name.common}</h3>
                <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital}</p>
            </div>
        `;

        countriesContainer.append(countryCard)


    });
})


