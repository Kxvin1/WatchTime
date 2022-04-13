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
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            // const currWatchlist = ;
            currWatchlist.remove();
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
    })
})
