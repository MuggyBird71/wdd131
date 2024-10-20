const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
];

function displayBooks(filteredArticles = articles) {
    const reviewSection = document.querySelector(".book-review");
    reviewSection.innerHTML = ''; // Clear previous content

    filteredArticles.forEach(article => {
        const articleElement = document.createElement("article");

        const bookDetails = `
            <div class="book-details">
                <p>${article.date}</p>
                <p>${article.ages}</p>
                <p>${article.genre}</p>
                <p>${article.stars}</p>
            </div>
        `;

        const bookContent = `
            <div class="book-content">
                <h2>${article.title}</h2>
                <img src="${article.imgSrc}" alt="${article.imgAlt}">
                <p>${article.description} <a href="#">Read More...</a></p>
            </div>
        `;

        articleElement.innerHTML = bookDetails + bookContent;
        reviewSection.appendChild(articleElement);
    });
}

function filterBooks() {
    const selectedAge = document.getElementById("age").value;
    const selectedGenre = document.getElementById("genre").value;
    const selectedRating = document.getElementById("rating").value;

    const filteredArticles = articles.filter(article => {
        let ageMatch = selectedAge === "all" || article.ages === selectedAge;
        let genreMatch = selectedGenre === "all" || article.genre === selectedGenre;
        let ratingMatch = selectedRating === "all" || article.stars === selectedRating;

        return ageMatch && genreMatch && ratingMatch;
    });

    displayBooks(filteredArticles);
}

// Initial display of books on page load
window.onload = () => {
    displayBooks();
};
