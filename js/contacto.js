(function contact() {
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.getElementsByClassName('needs-validation')
        // Loop over them and prevent submission
        const validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        swal({
                            title: "Datos incompletos",
                            text: "Por favor completa todos los datos requeridos",
                            icon: "error",
                            button: "OK",
                        });
                        event.stopPropagation();
                        event.preventDefault()
                    } else {
                        swal({
                            title: '¡Gracias por contactarme!',
                            text: 'Te respondere lo antes posible',
                            icon: 'success',
                            buttons: false,
                            timer: 2000
                        })
                    }
                    form.classList.add('was-validated')
                }, false);
            }
        );

    }, false);
})();



