let currentPage = 1;
const rowsPerPage = 10;

function populateTable(forecastData) {
    const paginatedData = forecastData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
    forecastTable.innerHTML = paginatedData.map(item => `
        <tr>
            <td class="border p-2">${new Date(item.dt_txt).toLocaleDateString()}</td>
            <td class="border p-2">${item.main.temp}°C</td>
        </tr>
    `).join('');
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        populateTable(forecastData);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage < Math.ceil(forecastData.length / rowsPerPage)) {
        currentPage++;
        populateTable(forecastData);
    }
});
