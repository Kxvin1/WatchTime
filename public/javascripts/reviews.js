const movieLink = window.location.href.split("/");
const movieId = movieLink[2];

const reviewForm = document.querySelector("#reviewSubBtn");
reviewForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const formData = new FormData(reviewForm);
    const review = formData.get("review")
    const body = { review };
    
    if (!review.length) {
        return; 
    }
    const oldReviews = await fetch(`/movies/${movieId}/reviews`, {
        method: 'POST',
        body: JSON.stringify(body),
        header: {
            "Content-type": "application/json"
        },
    })
})