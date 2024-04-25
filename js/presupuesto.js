document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('presupuesto-form');
    const productoSelect = document.getElementById('producto');
    const plazoInput = document.getElementById('plazo');
    const extrasCheckboxes = document.querySelectorAll('input[name="extras"]');
    const presupuestoOutput = document.getElementById('presupuesto');

    // Función para calcular el presupuesto en vivo
    function calcularPresupuesto() {
        let total = parseInt(productoSelect.value) * parseInt(plazoInput.value);

        extrasCheckboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                total += parseInt(checkbox.value);
            }
        });

        presupuestoOutput.textContent = total;
    }

    // Calcular presupuesto cuando hay cambios en el formulario
    form.addEventListener('input', calcularPresupuesto);

    // Validar formulario antes de enviar
    form.addEventListener('submit', function(event) {
        if (!this.checkValidity()) {
            event.preventDefault();
            alert('Por favor, completa correctamente todos los campos.');
        }
    });

    // Calcular presupuesto inicial
    calcularPresupuesto();


    form.addEventListener('submit', function(event) {
        if (!validarNombre(nombreInput.value)) {
            alert('Por favor, introduzca un nombre válido (solo letras y máximo 15 caracteres).');
            event.preventDefault();
        }

        if (!validarApellidos(apellidosInput.value)) {
            alert('Por favor, introduzca apellidos válidos (solo letras y máximo 40 caracteres).');
            event.preventDefault();
        }

        if (!validarTelefono(telefonoInput.value)) {
            alert('Por favor, introduzca un número de teléfono válido (solo números y máximo 9 dígitos).');
            event.preventDefault();
        }

        if (!validarEmail(emailInput.value)) {
            alert('Por favor, introduzca un correo electrónico válido.');
            event.preventDefault();
        }
    });

    function validarNombre(nombre) {
        return /^[a-zA-ZÁ-ú\s]{1,15}$/.test(nombre);
    }

    function validarApellidos(apellidos) {
        return /^[a-zA-ZÁ-ú\s]{1,40}$/.test(apellidos);
    }

    function validarTelefono(telefono) {
        return /^\d{1,9}$/.test(telefono);
    }

    function validarEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

  
    // Calcular presupuesto
    form.addEventListener('input', function() {
        let total = parseInt(productoSelect.value) * parseInt(plazoInput.value);

        extrasCheckboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                total += parseInt(checkbox.value);
            }
        });

        presupuestoOutput.textContent = total;
    });

    // Envío del formulario
    form.addEventListener('submit', function(event) {
        if (!this.checkValidity()) {
            event.preventDefault();
            alert('Por favor, completa correctamente todos los campos.');
        }
    });

});
