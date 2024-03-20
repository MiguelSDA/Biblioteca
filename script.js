document.addEventListener('DOMContentLoaded', () => {
    // Manejo de Libros
    const bookForm = document.getElementById('book-form');
    const bookTableBody = document.getElementById('book-list');

    bookForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('Titulo').value;
        const author = document.getElementById('Autor').value;
        const editorial = document.getElementById('Editorial').value;
        const category = document.getElementById('categoria').value;
        const publicationDate = document.getElementById('publication-date').value;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${editorial}</td>
            <td>${category}</td>
            <td>${publicationDate}</td>
            <td><button type="button" class="delete-button">Eliminar</button></td>
        `;

        bookTableBody.appendChild(newRow);

        // Asignar evento click después de crear la fila
        const deleteButton = newRow.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            if (confirm('¿Seguro que quieres eliminar este libro?')) {
                newRow.remove();
            }
        });

        // Limpiar campos del formulario
        bookForm.reset();
    });

    // Manejo de Usuarios
    const userForm = document.getElementById('user-form');
    const userTableBody = document.getElementById('user-list');

    userForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('Nombre').value;
        const email = document.getElementById('Email').value;
        const birthDate = document.getElementById('FechaNacimiento').value;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${birthDate}</td>
            <td><button type="button" class="delete-button">Eliminar</button></td>
        `;

        userTableBody.appendChild(newRow);

        // Asignar evento click después de crear la fila
        const deleteButton = newRow.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            if (confirm('¿Seguro que quieres eliminar este usuario?')) {
                newRow.remove();
            }
        });

        // Limpiar campos del formulario
        userForm.reset();
    });
});
