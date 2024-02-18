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
        showPreview();
    });

    // carega els fitxers al fer clic en el botó
    button.addEventListener('click', () => {
        input.click();
    });

    // per caregar els fitxers quan es seleccionen des del botó de selecció
    input.addEventListener('change', () => {
        // concatenar els fitxers seleccionats amb els ja existents
        files = files.concat(Array.from(input.files));

        // Mostrar la vista previa dels fitxers
        showPreview();
    });

    // Funció per mostrar la vista previa dels fitxers
    function showPreview() {
        preview.innerHTML = '';
        files.forEach((file, index) => {
            const reader = new FileReader();

            reader.onload = () => {
                const imgContainer = document.createElement('div');
                imgContainer.classList.add('previewImage');

                const img = document.createElement('img');
                img.src = reader.result;

                const removeBtn = document.createElement('button');
                removeBtn.classList.add('removeBtn');
                removeBtn.textContent = 'x';
                removeBtn.addEventListener('click', () => {
                    files.splice(index, 1);
                    showPreview();
                });

                imgContainer.appendChild(img);
                imgContainer.appendChild(removeBtn);
                preview.appendChild(imgContainer);
            };

            reader.readAsDataURL(file);
        });
    }

});
