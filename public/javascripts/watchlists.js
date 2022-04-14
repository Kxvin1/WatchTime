window.addEventListener('DOMContentLoaded', () => {
    // const editBtn = document.getElementsByClassName('edit');
    const editBtn = document.querySelectorAll('.edit');
    const deleteBtn = document.querySelectorAll('.delete')
    const options = document.querySelectorAll('.watchlist-option');


    editBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const btnId = btn.getAttribute('id');
            const select = document.getElementById(`select-${btnId}`)
            select.setAttribute('class', 'dropdown displayed')

        })
    })

    options.forEach(option => {
      option.addEventListener('input', async (e) => {
        const currWatchlistEle = option.parentElement.parentElement;
        const shelfId = currWatchlistEle.previousElementSibling.value;
        const movieId = currWatchlistEle.previousElementSibling.previousElementSibling.value;
        const body = {watchStatus: option.value}
        try{
            await fetch(`/watchlist/${movieId}/${shelfId}`, {
              method: "POST",
              headers:{
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body)
            })
            window.location.href = '/watchlist'
          } catch (error) {
            console.error(error);
          }
      })
    })

    deleteBtn.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            const currWatchlistEle = btn.parentElement.parentElement;
            const shelfId = currWatchlistEle.previousElementSibling.value;
            const movieId = currWatchlistEle.previousElementSibling.previousElementSibling.value;

            const deleteConfirmationDiv = document.getElementById(`delete-watchlist-${movieId}`)

            deleteConfirmationDiv.setAttribute('class', 'displayed');

            const deleteConfirmationConfirm = document.getElementById(`delete-watchlist-button-${movieId}`);
            const deleteConfirmationCancel = document.getElementById(`delete-watchlist-cancel-${movieId}`);

            deleteConfirmationCancel.addEventListener('click', (e) => {
              deleteConfirmationDiv.setAttribute('class', 'hidden')
            });

            deleteConfirmationConfirm.addEventListener('click', async (e) => {
              currWatchlistEle.remove();
                try {
                  await fetch(`/watchlist/${movieId}/${shelfId}`, {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });
                } catch (error) {
                  console.error(error);
                }
            })




        })
    })
})
