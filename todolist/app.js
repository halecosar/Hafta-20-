document.addEventListener("DOMContentLoaded", function () {
    const liveToastBtn = document.getElementById("liveToastBtn");

    liveToastBtn.addEventListener("click", function () {
        addNewElement();
    });
})


function addNewElement() {
    const value = document.getElementById("task").value;
    const list = document.getElementById("list");

    if (value != null && value.trim() != "") {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(value));

        const removeBtn = document.createElement("button")
        removeBtn.textContent = "Sil";
        removeBtn.style.marginLeft = "auto";

        removeBtn.addEventListener("click", function () {
            this.parentElement.remove();
        });

        var x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");


        li.appendChild(x);
        li.appendChild(removeBtn);
        list.appendChild(li);

        document.getElementById("task").value = "";
    }
    else {
        alert("Listeye boş eleman eklenemez!")
    }

    
}

