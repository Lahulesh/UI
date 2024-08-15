document.getElementById('imageUpload').onchange = function(event) {
    const [file] = event.target.files;
    const preview = document.getElementById('imagePreview');
    const dragAndDrop = document.getElementById('Draganddrop');

    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.style.display = 'block';
        dragAndDrop.style.display = 'none';
    } else {
        preview.style.display = 'none';
        dragAndDrop.style.display = 'block';
    }
};