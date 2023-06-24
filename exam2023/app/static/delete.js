
const deleteModalEl = document.getElementById('deleteModal');
deleteModalEl.addEventListener('show.bs.modal', function (event) {
    let url = event.relatedTarget.dataset.id;
    let form = this.querySelector('form');
    form.action = url; 
    let span = this.querySelector('.delete-user-name');
    span.textContent = event.relatedTarget.dataset.name;
});