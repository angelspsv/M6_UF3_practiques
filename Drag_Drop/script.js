document.addEventListener('DOMContentLoaded', () => {
    // Array per emmagatzemar els fitxers arrastrats
    let files = [];

    // Declaració dels objectes
    const dropArea = document.querySelector('.drop-area');
    const dragDropText = document.querySelector('.drop-area h2');
    const button = document.querySelector('.drop-area button');
    const input = document.getElementById('input-file');
    const preview = document.getElementById('preview');

    // Desactivem l'acció per defecte de drag & drop
    dropArea.addEventListener('dragover', (event) => {
        event.preventDefault();
        dropArea.classList.add('active');
        dragDropText.textContent = 'Drop files here';
    });

    dropArea.addEventListener('dragleave', () => {
        dropArea.classList.remove('active');
        dragDropText.textContent = 'Drag & Drop files';
    });

    // Acció drop per recollir els fitxers
    dropArea.addEventListener('drop', (event) => {
        event.preventDefault();
        dropArea.classList.remove('active');
        dragDropText.textContent = 'Drag & Drop files';

        // Concatenar els fitxers arrastrats amb els existents
        files = files.concat(Array.from(event.dataTransfer.files));

        // funció per mostrar els fitxers
        
    });






});
