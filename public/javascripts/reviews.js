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
      const deleteConfirmationDiv = document.getElementById(`delete-review-${currReview.id}`);

      deleteConfirmationDiv.setAttribute('class', 'displayed')

      const deleteConfirmationConfirm = document.getElementById(`delete-review-button-${currReview.id}`);
      const deleteConfirmationCancel = document.getElementById(`delete-review-cancel-${currReview.id}`);

      deleteConfirmationCancel.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        deleteConfirmationDiv.setAttribute('class', 'hidden')
      });

      deleteConfirmationConfirm.addEventListener('click', async (e) => {
        e.stopPropagation();
        e.preventDefault();
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
      })

    });
  });

  // Add to Watchlist
  const watchlistAddBtn = document.getElementById(`add-btn`);

  watchlistAddBtn.addEventListener("click", async (e) => {
    const watchlistSelection = document.getElementById(`watchlist-selection`);
    const movieId = watchlistSelection.nextElementSibling.nextElementSibling;
    const movieTitle = watchlistSelection.nextElementSibling;
    const body = {
      movieId: movieId.value,
      watchStatus: watchlistSelection.value,
    };
    console.log(body);
    // if(watchlistSelection.value !== '') {
      try{
        await fetch('/watchlist', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        })
        // .then(res => {
          alert(`${movieTitle.value} added to your ${watchlistSelection.value} List`)
        // })
      } catch (error) {
        console.error(error);
      }
    // }
  })
});
