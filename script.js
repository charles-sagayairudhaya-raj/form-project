document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("data-form");
    const tableBody = document.getElementById("table-body");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const address = document.getElementById("address").value;
        const pincode = document.getElementById("pincode").value;
        const gender = document.getElementById("gender").value;
        const food = document.getElementById("food").value;
        const state = "YourState"; 
        const country = "YourCountry"; 

        const newRow = tableBody.insertRow();
        const cells = [firstName, lastName, address, pincode, gender, food, state, country];

        for (let i = 0; i < cells.length; i++) {
            const cell = newRow.insertCell(i);
            cell.textContent = cells[i];
        }

        form.reset();
    });
});
