$(document).ready(function () {
    const users = [
        { Name: 'John', Age: 25, Address: 'Canada' },
        { Name: 'Emma', Age: 30, Address: 'United States' },
        { Name: 'Liam', Age: 22, Address: 'Australia' },
        { Name: 'Olivia', Age: 28, Address: 'United Kingdom' },
        { Name: 'Noah', Age: 35, Address: 'Germany' },
        { Name: 'Ava', Age: 27, Address: 'France' },
        { Name: 'Ethan', Age: 24, Address: 'New Zealand' },
        { Name: 'Sophia', Age: 31, Address: 'Italy' },
        { Name: 'Mason', Age: 29, Address: 'Brazil' },
        { Name: 'Isabella', Age: 26, Address: 'Japan' }
    ];

    const tableBody = $('#tableBody');

    function insertData(data) {
        tableBody.empty();
        data.forEach(user => {
            const row = `<tr>
                <td>${user.Name}</td>
                <td>${user.Age}</td>
                <td>${user.Address}</td>
            </tr>`;
            tableBody.append(row);
        });
    }

    insertData(users);

    const sortColumn = {
        column: null,
        ascending: true
    };

    $('#userTable th').on('click', function () {
        const column = $(this).data('column');

        if (sortColumn.column === column) {
            sortColumn.ascending = !sortColumn.ascending;
        } else {
            sortColumn.column = column;
            sortColumn.ascending = true;
        }

        const sortedData = [...users].sort((a, b) => {
            const valA = a[column];
            const valB = b[column];

            if (typeof valA === 'number' && typeof valB === 'number') {
                return sortColumn.ascending ? valA - valB : valB - valA;
            } else {
                return sortColumn.ascending
                    ? valA.toString().localeCompare(valB.toString())
                    : valB.toString().localeCompare(valA.toString());
            }
        });

        insertData(sortedData);

    });

});
