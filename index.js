async function fetchData() {
    try {
        const apodResponse = await fetch('http://localhost:3000/apod');
        const apodData = await apodResponse.json();

        const imageContainer = document.getElementById('image-container');
        const image = document.createElement('img');
        image.src = apodData.url;
        image.alt = apodData.title;
        imageContainer.appendChild(image);

        const captionContainer = document.getElementById('caption-container');
        const date = document.createElement('div');
        date.innerHTML = `<strong>${apodData.date}</strong>`;
        const title = document.createElement('div');
        const explanation = document.createElement('div')
        title.innerHTML = apodData.title;
        explanation.innerHTML = apodData.explanation;
        captionContainer.appendChild(date);
        captionContainer.appendChild(title);
        captionContainer.appendChild(explanation);

        const jokeResponse = await fetch('http://localhost:3000/jotd');
        const jokeData = await jokeResponse.json();

        const jokeContainer = document.getElementById('astro-joke-of-the-day');
        const joke = document.createElement('div');
        joke.textContent = jokeData.joke;
        jokeContainer.appendChild(joke);
    } catch (error) {
        console.error('Error fetching data:', error);
        const errorMessage = document.createElement('div');
        errorMessage.textContent = 'An error occurred while fetching data.';
        document.body.appendChild(errorMessage);
    }
}

fetchData();
