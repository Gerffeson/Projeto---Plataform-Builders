/* globals fetch */
var update = document.getElementById('update')
var del = document.getElementById('delete')


update.addEventListener('click', function() {
    fetch('quotes', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => {
            if (response.ok) return response.json()
        })
        .then(data => {
            console.log(data)
        })
})

del.addEventListener('click', function() {
    fetch('quotesdelete', {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(function(response) {
            window.location.reload()
        })
})

function Deletar() {
    const elements = document.getElementsByClassName("quotes");

    while (elements.length > 0) elements[0].remove();
}