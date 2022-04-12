window.addEventListener('DOMContentLoaded', () => {
    // const editBtn = document.getElementsByClassName('edit');
    const editBtn = document.querySelectorAll('.edit');
    const select = document.querySelectorAll('.dropdown');

    console.log(editBtn);
    console.log(select);
    editBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            select.forEach(ele => {
                ele.setAttribute('class', 'dropdown displayed');
            })
        })
    })
})
