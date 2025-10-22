$(document).ready(function () {
    const users = [
        { Name: 'Rafi Shaheb', Age: 25, Adress: 'Tangail' },
        { Name: 'Tanvir Shaheb', Age: 23, Adress: 'Thonthonia' },
        { Name: 'Alamin Shaheb', Age: 24, Adress: 'Bogura' },
        { Name: 'Roni Shaheb', Age: 26, Adress: 'Satmatha' },
        { Name: 'Soron Shaheb', Age: 25, Adress: 'Rahman Nagar' },
        { Name: 'Mahinur Shaheb', Age: 27, Adress: 'Bogura' },
        { Name: 'Robbani Shaheb', Age: 30, Adress: 'Sariyakandi' },
        { Name: 'Niamul Shaheb', Age: 30, Adress: 'Sariyakandi' },
        { Name: 'Nazrul Shaheb', Age: 28, Adress: 'Satmatha' },
        { Name: 'Biplop Shaheb', Age: 26, Adress: 'Thonthonia' },
    ];

    const tableBody = $('#tableBody');

    function insertData(data) {
        tableBody.empty();
        data.forEach(user => {
            const row = `<tr>
                <td>${user.Name}</td>
                <td>${user.Age}</td>
                <td>${user.Adress}</td>
            </tr>`;
            tableBody.append(row);
        });
    }

    insertData(users);

    let sortColumn = {
        column: null,
        ascending: true
    };

    $('#userTable th').on('click', function(){
        const column  = $(this).data('column');

        if (sortColumn.column === column) {
            sortColumn.ascending = !sortColumn.ascending;
        } else {
            sortColumn.column = column;
            sortColumn.ascending = true;
        }

        const sortedData = [...users].sort((a,b) =>{
            const valA = a[column];
            const valB = b[column];

            if(typeof valA === 'number' && typeof valB === 'number' ){
                return sortColumn.ascending ? valA-valB : valB-valA;
            }else {
                return sortColumn.ascending
                    ? valA.toString().localeCompare(valB.toString())
                    : valB.toString().localeCompare(valA.toString());
            }
        });

        insertData(sortedData);

    });

});
