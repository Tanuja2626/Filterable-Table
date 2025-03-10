function addStudent(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const college = document.getElementById("college").value;
    const course = document.getElementById("course").value;
    const age = document.getElementById("age").value;

    const table = document.getElementById("studentTableBody");
    const row = table.insertRow();
    row.innerHTML = `<td>${name}</td><td>${email}</td><td>${college}</td><td>${course}</td><td>${age}</td>`;

    document.getElementById("studentForm").reset();
}

function sortTable(columnIndex) {
    const table = document.getElementById("studentTable");
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));

    const sortedRows = rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].innerText.toLowerCase();
        const cellB = rowB.cells[columnIndex].innerText.toLowerCase();

        return cellA.localeCompare(cellB, undefined, { numeric: true });
    });

    tbody.innerHTML = "";
    sortedRows.forEach(row => tbody.appendChild(row));
}

function filterTable() {
    const filter = document.getElementById("filter").value.toLowerCase();
    const rows = document.querySelectorAll("#studentTableBody tr");

    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(filter) ? "" : "none";
    });
}
