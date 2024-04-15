const pastReviewsData = [
    { movieName: "The Shawshank Redemption", rating: 4.5, review: "Excellent movie!" },
    { movieName: "The Dark Knight", rating: 4.8, review: "Amazing!" }
];
function displayPastReviews(movieName) {
    const pastReviewsDiv = document.getElementById("pastReviews");
    pastReviewsDiv.innerHTML = "<h2>Past Reviews</h2>";
    pastReviewsData.forEach(review => {
        if (review.movieName === movieName) {
            const reviewElement = document.createElement("div");
            reviewElement.classList.add("review");
            reviewElement.innerHTML = `
            <p class="movie-name">${review.personName}</p>
                <p class="movie-name">${review.movieName}</p>
                <p class="movie-name">${review.reviewText}</p>
                <p><span class="rating">${review.rating}</p>`;
            pastReviewsDiv.appendChild(reviewElement);
        }
    });
}
document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const movieName = document.getElementById("movieName").value;
    const rating = document.getElementById("rating").value;
    const personName = document.getElementById("personName").value;
    const reviewText = document.getElementById("reviewText").value;
    pastReviewsData.push({ personName, movieName, rating, reviewText });
    displayPastReviews(movieName);
    document.getElementById("rating").value = "";
    document.getElementById("personName").value = "";
    document.getElementById("reviewText").value = "";
});
const urlParams = new URLSearchParams(window.location.search);
const selectedMovieName = urlParams.get('movieName');
document.getElementById("movieName").value = selectedMovieName;
displayPastReviews(selectedMovieName);




function toggleWatchlist(link) {
    link.textContent = " ✔ added to watchlist";
}