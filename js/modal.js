function modalJs(i) {
    var modal = document.getElementById(`fitu-modal-${i}`);
    var btn = document.getElementById(`fitu-img-${i}`);
    var span = document.getElementById(`fitu-modal-close-${i}`);

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    modal.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
};

function modalJsMembers(i) {
    var modal = document.getElementById(`member-modal-${i}`);
    var btn = document.getElementById(`member-card-${i}`);
    var span = document.getElementById(`member-modal-close-${i}`);

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    modal.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
};
