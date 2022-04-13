// const movieLink = window.location.href.split("/");
// console.log("movielink++", movieLink)
// const movieId = movieLink[4];

window.addEventListener("DOMContentLoaded", () => {
  // edit button
  const reviewFormBtn = document.querySelectorAll(".review-edit-btn");

  reviewFormBtn.forEach(btn => {
    btn.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const editForm = document.getElementById(`edit-form-${btn.parentElement.id}`)
      editForm.setAttribute('class', 'displayed')
      })

  });

  // delete button
  const deleteButton = document.querySelectorAll(".delete");

  deleteButton.forEach((btn) => {
    btn.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const currReview = btn.parentElement;
      currReview.remove();
        try {
          await fetch(`/movies/review/${currReview.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
        } catch (error) {
          console.error(error);
        }
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
