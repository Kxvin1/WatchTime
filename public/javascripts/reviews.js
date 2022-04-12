const movieLink = window.location.href.split("/");
console.log("movielink++", movieLink)
const movieId = movieLink[4];

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
    const oldReviews = await fetch(`http://localhost:8080/movies`, {
        method: 'POST',
        body: JSON.stringify(body),
        header: {
            "Content-type": "application/json"
        },
    })
})