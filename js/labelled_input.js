let inputs = document.querySelectorAll(".labelled-input");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", function () {
        addLabel(this);
        changeColor(this, true);
    });
    inputs[i].addEventListener("blur", function () {
        changeColor(this, false);
        removeLabel(this);
    });

}

function toggleLabel(element) {
    if (element.value == null || element.value.trim() === "") {
        removeLabel(element);
    } else {
        addLabel(element);
    }
}

function changeColor(element, hasFocus) {
    let label = element.parentElement.getElementsByTagName("LABEL");

    if (label.length > 0) {
        if (hasFocus)
            label[0].style.color = "#3CA2E4";
        else {
            label[0].style.color = "grey";
        }
    }
}

function addLabel(element) {
    var hasLabel = element.parentElement.getElementsByTagName("LABEL").length > 0;
    if (hasLabel) return;
    let label = document.createElement("LABEL");
    label.classList.add("floating-label");

    label.innerHTML = element.placeholder;
    let hint = element.getAttribute("hint");
    if (hint != null)
        element.placeholder = hint;
    element.parentElement.insertBefore(label, element);
}

function removeLabel(element) {
    if (element.value == null || element.value.trim() === "") {
        let label = element.parentElement.getElementsByTagName("LABEL");
        if (label.length > 0) {
            element.placeholder = label[0].innerHTML;
            label[0].remove();
        }
    }
}