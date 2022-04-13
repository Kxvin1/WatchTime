// const movieLink = window.location.href.split("/");
// console.log("movielink++", movieLink)
// const movieId = movieLink[4];

window.addEventListener("DOMContentLoaded", () => {
  // edit button
  const reviewForm = document.querySelector(".review-edit-btn");

  reviewForm.addEventListener("click", async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const formData = new FormData(reviewForm);
    const review = formData.get("review");
    const body = { review };

    if (!review.length) {
      return;
    }
    const oldReviews = await fetch(`http://localhost:8080/movies`, {
      method: "POST",
      body: JSON.stringify(body),
      header: {
        "Content-type": "application/json",
      },
    });
  });

  // delete button
  const deleteButton = document.querySelectorAll(".delete");

  deleteButton.forEach((btn) => {
    btn.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();

      // const btnId = btn.getAttribute("id");

      //   console.log(btn.id);

      const reviewId = btn.id; // => gets the reviewId of current delete button

      //   try {
      //     await fetch(`http://localhost:8080/movies/${reviewId}`, {
      //       method: "DELETE",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     });
      //   } catch (error) {
      //     console.error(error);
      //   }
    });
  });

  //   const deleteButton = document.querySelector(".delete");

  //   deleteButton.addEventListener("click", async (event) => {
  //     event.stopPropagation();
  //     event.preventDefault();

  //     console.log(deleteButton.parentElement);

  // try {
  //   await fetch(`http://localhost:8080/movies/1/reviews`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // } catch (error) {
  //   console.error(error);
  // }
  //   });
});
