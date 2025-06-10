document.addEventListener('DOMContentLoaded', function() {
    const formRegistro = document.getElementById('form-registro');

    if (formRegistro) {
        formRegistro.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe

            const passwordInput = document.getElementById('password');
            const passwordFeedback = document.getElementById('password-feedback');
            const password = passwordInput.value;
            let errores = [];

            // 1. Validación de Longitud Mínima
            if (password.length < 8) {
                errores.push("Debe tener al menos 8 caracteres.");
            }
            // 2. Validación de Uso de Números
            if (!/\d/.test(password)) {
                errores.push("Debe contener al menos un número.");
            }
            // 3. Validación de Uso de Letras
            if (!/[a-zA-Z]/.test(password)) {
                errores.push("Debe contener al menos una letra.");
            }
            // 4. Validación de Caracteres Especiales
            if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
                errores.push("Debe contener al menos un caracter especial.");
            }

            if (errores.length > 0) {
                passwordInput.classList.add('is-invalid');
                passwordFeedback.textContent = errores.join(' ');
            } else {
                passwordInput.classList.remove('is-invalid');
                passwordInput.classList.add('is-valid');
                document.getElementById('registro-exitoso').classList.remove('d-none');
            }
        });
    }
});