const flavors = ["Vanilla", "Chocolate", "Strawberry", "Mint Chocolate Chip"];

function displayFlavors() {
    const flavorsDiv = document.getElementById("flavors");
    flavors.forEach((flavor, index) => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "flavor";
        checkbox.value = flavor;
        flavorsDiv.appendChild(checkbox);

        const label = document.createElement("label");
        label.innerHTML = flavor;
        flavorsDiv.appendChild(label);

        if (index < flavors.length - 1) {
            flavorsDiv.appendChild(document.createElement("br"));
        }
    });
}

function orderIceCream() {
    const selectedFlavors = Array.from(document.querySelectorAll('input[name="flavor"]:checked'))
        .map(checkbox => checkbox.value);

    if (selectedFlavors.length > 0) {
        const resultMessage = `You ordered ${selectedFlavors.join(", ")} ice cream! Enjoy!`;
        document.getElementById("orderResult").innerHTML = resultMessage;
    } else {
        document.getElementById("orderResult").innerHTML = "Please select at least one flavor.";
    }
}

document.addEventListener("DOMContentLoaded", displayFlavors);
