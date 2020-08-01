(function contactValidate() {
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.getElementsByClassName('needs-validation')
        // Loop over them and prevent submission
        const validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        swal({
                            title: "Oops!",
                            text: "Please enter all the required data",
                            icon: "error",
                            button: "OK",
                        });
                        event.stopPropagation();
                        event.preventDefault()
                    } else {
                        swal({
                            title: '¡Thank you!',
                            text: 'I will answer you as soon as possible',
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



