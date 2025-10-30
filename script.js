document.addEventListener("DOMContentLoaded", function () {
    const users = [
        { Name: 'Rafi Saheb', Age: 25, Address: 'Tangail' },
        { Name: 'Tanvir Saheb', Age: 23, Address: 'Thonthonia' },
        { Name: 'Alamin Saheb', Age: 24, Address: 'Bogura' },
        { Name: 'Roni Saheb', Age: 26, Address: 'Satmatha' },
        { Name: 'Soron Saheb', Age: 25, Address: 'Rahman Nagar' },
        { Name: 'Mahinur Saheb', Age: 27, Address: 'Bogura' },
        { Name: 'Robbani Saheb', Age: 30, Address: 'Sariyakandi' },
        { Name: 'Niamul Saheb', Age: 30, Address: 'Sariyakandi' },
        { Name: 'Nazrul Saheb', Age: 28, Address: 'Satmatha' },
        { Name: 'Biplop Saheb', Age: 26, Address: 'Thonthonia' },
    ];

    const tableBody = document.getElementById('tableBody');

    function insertData(data) {
        tableBody.innerHTML = '';
        data.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.Name}</td>
                <td>${user.Age}</td>
                <td>${user.Address}</td>
            `;
            tableBody.append(row);
        });
    }

    insertData(users);

    const sortColumn = {
        column: null,
        ascending: true
    };
});




// $(document).ready(function () {
//     const users = [
//         { Name: 'Rafi Saheb', Age: 25, Adress: 'Tangail' },
//         { Name: 'Tanvir Saheb', Age: 23, Adress: 'Thonthonia' },
//         { Name: 'Alamin Saheb', Age: 24, Adress: 'Bogura' },
//         { Name: 'Roni Saheb', Age: 26, Adress: 'Satmatha' },
//         { Name: 'Soron Saheb', Age: 25, Adress: 'Rahman Nagar' },
//         { Name: 'Mahinur Saheb', Age: 27, Adress: 'Bogura' },
//         { Name: 'Robbani Saheb', Age: 30, Adress: 'Sariyakandi' },
//         { Name: 'Niamul Saheb', Age: 30, Adress: 'Sariyakandi' },
//         { Name: 'Nazrul Saheb', Age: 28, Adress: 'Satmatha' },
//         { Name: 'Biplop Saheb', Age: 26, Adress: 'Thonthonia' },
//     ];

//     const tableBody = $('#tableBody');

//     function insertData(data) {
//         tableBody.empty();
//         data.forEach(user => {
//             const row = `<tr>
//                 <td>${user.Name}</td>
//                 <td>${user.Age}</td>
//                 <td>${user.Adress}</td>
//              </tr>`;
//             tableBody.append(row);
//         });
//     }

//     insertData(users);

//     const sortColumn = {
//         column: null,
//         ascending: true
//     };

//     $('#userTable th').on('click', function () {
//         const column = $(this).data('column');

//         if (sortColumn.column === column) {
//             sortColumn.ascending = !sortColumn.ascending;
//         } else {
//             sortColumn.column = column;
//             sortColumn.ascending = true;
//         }

//         const sortedData = [...users].sort((a, b) => {
//             const valA = a[column];
//             const valB = b[column];

//             if (typeof valA === 'number' && typeof valB === 'number') {
//                 return sortColumn.ascending ? valA - valB : valB - valA;
//             } else {
//                 return sortColumn.ascending
//                     ? valA.toString().localeCompare(valB.toString())
//                     : valB.toString().localeCompare(valA.toString());
//             }
//         });

//         insertData(sortedData);

//     });

// });
