window.addEventListener('DOMContentLoaded', () => {
    // const editBtn = document.getElementsByClassName('edit');
    const editBtn = document.querySelectorAll('.edit');
    const deleteBtn = document.querySelectorAll('.delete')

    editBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const btnId = btn.getAttribute('id');
            const select = document.getElementById(`select-${btnId}`)
            console.log(btnId);
            console.log(select);

            select.setAttribute('class', 'dropdown displayed')

        })
    })

    deleteBtn.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            const currWatchlistEle = btn.parentElement.parentElement;
            const shelfId = currWatchlistEle.previousElementSibling.value;
            const movieId = currWatchlistEle.previousElementSibling.previousElementSibling.value;
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
