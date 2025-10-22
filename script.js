$(document).ready(function () {
    const user = [
        { Name: 'Rafi', Age: 25, Adress: 'Tangail' },
        { Name: 'Rafi', Age: 25, Adress: 'Tangail' },
        { Name: 'Rafi', Age: 25, Adress: 'Tangail' },
        { Name: 'Rafi', Age: 25, Adress: 'Tangail' },
        { Name: 'Rafi', Age: 25, Adress: 'Tangail' },
        { Name: 'Rafi', Age: 25, Adress: 'Tangail' },
        { Name: 'Rafi', Age: 25, Adress: 'Tangail' },
        { Name: 'Rafi', Age: 25, Adress: 'Tangail' },
        { Name: 'Rafi', Age: 25, Adress: 'Tangail' },
        { Name: 'Rafi', Age: 25, Adress: 'Tangail' },
    ];

    const tableBody = $('#tableBody');

    user.forEach(u => {
        const row = `<tr>
            <td>${u.Name}</td>
            <td>${u.Age}</td>
            <td>${u.Adress}</td>
        </tr>`;
        tableBody.append(row);
    });

    function renderTable(data) {
        const $tbody = $('#tableBody').empty();
        data.forEach(row => {
            $tbody.append(`<tr><td>${row.Name}</td><td>${row.Age}</td><td>${row.Adress}</td></tr>`);
        });
    }





});
