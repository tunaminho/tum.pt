(function ($) {
    "use strict";

    var contactForm = function () {
        if ($('#contactForm').length > 0) {
            $("#contactForm").validate({
                rules: {
                    name: "required",
                    subject: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 5
                    }
                },
                messages: {
                    name: "Por favor introduza um nome válido.",
                    subject: "Por favor introduza um assunto.",
                    email: "Por favor introduza um email válido.",
                    message: "Por favor introduza uma mensagem."
                }
            });
        }
    };
    contactForm();
})(jQuery);
