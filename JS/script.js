const form = document.getElementById('form-associacao');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Você se associou com sucesso!');
    });

    function uncheckOthers(checkbox) {
        var checkboxes = document.getElementsByName(checkbox.name);
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkbox) {
                checkboxes[i].checked = false;
            }
        }
    }
    