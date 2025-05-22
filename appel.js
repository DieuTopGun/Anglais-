document.querySelectorAll('.answer').forEach(btn => {
    btn.addEventListener('click', function() {
        if (btn.classList.contains('correct')) {
            btn.classList.add('good'); // Vert si correct
        } else {
            btn.classList.add('bad');  // Rouge si incorrect
        }
        // Désactive toutes les réponses
        btn.closest('.question').querySelectorAll('.answer').forEach(a => {
            a.disabled = true;
        });
    });
});