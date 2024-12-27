class Cake{
    constructor(name, price, currency){
    this.name = name;
    this.price = price;
    this.currency = currency;
    }
}
const cake1 = new Cake("Chocolate Cake", 300,"грн")
const cake2 = new Cake("Napoleon", 210,"грн")
const cake3 = new Cake("Medovik", 195,"грн")
const cake4 = new Cake("Cheesecake", 300,"грн")
const cake5 = new Cake("Tiramisu", 178,"грн")

const cakeSelect = document.getElementById("cake-select");
const addCakeBtn = document.getElementById("add-cake-btn");
const selectedCakesList = document.getElementById("selected-cakes");
const defaultOption = document.createElement("option");

defaultOption.textContent = "Choose a cake...";
defaultOption.disabled = true;
defaultOption.selected = true;
cakeSelect.appendChild(defaultOption);

const cakes = [cake1, cake2, cake3, cake4, cake5];
    cakes.forEach(cake => {
    const option = document.createElement("option");
    option.value = cake.name;
    option.textContent = `${cake.name} - ${cake.price} ${cake.currency}`;
    cakeSelect.appendChild(option);});

addCakeBtn.addEventListener("click", () => {
                const selectedOption = cakeSelect.options[cakeSelect.selectedIndex];

                if (selectedOption && !selectedOption.disabled) {
                    const listItem = document.createElement("li");
                    listItem.textContent = selectedOption.textContent;
                    selectedCakesList.appendChild(listItem);
                    cakeSelect.selectedIndex = 0;
                } else {
                    alert("Please select a valid cake before adding.");
                }
            });

document.getElementById("payment_button").addEventListener("click", () => {
    const ulElement = document.getElementById("selected-cakes");
    ulElement.innerHTML = "";

    const messageElement = document.getElementById("message");
    messageElement.textContent = "Оплата успішна";
    messageElement.classList.remove("hidden");
});