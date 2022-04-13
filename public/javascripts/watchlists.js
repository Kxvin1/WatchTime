window.addEventListener('DOMContentLoaded', () => {
    // const editBtn = document.getElementsByClassName('edit');
    const editBtn = document.querySelectorAll('.edit');

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
})
