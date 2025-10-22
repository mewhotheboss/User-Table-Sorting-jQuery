$(document).ready(function () {
    const users = [
        { Name: 'A', Age: 20, Adress: 'Oangail' },
        { Name: 'B', Age: 22, Adress: 'Uangail' },
        { Name: 'D', Age: 24, Adress: 'Tangail' },
        { Name: 'G', Age: 26, Adress: 'Qangail' },
        { Name: 'W', Age: 28, Adress: 'Hangail' },
        { Name: 'X', Age: 21, Adress: 'Bangail' },
        { Name: 'O', Age: 30, Adress: 'Pangail' },
        { Name: 'Q', Age: 36, Adress: 'Zangail' },
        { Name: 'T', Age: 60, Adress: 'Vangail' },
        { Name: 'M', Age: 99, Adress: 'Wangail' },
    ];

    const tableBody = $('#tableBody');

    function insertData(data) {
        // tableBody.empty();
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

    $('userTable th').on('click', function(){
        const column  = $(this).data('column');

        if (sortColumn.column === column) {
            sortColumn.ascending = !sortColumn.ascending;
        } else {
            sortColumn.column = column;
            sortColumn.ascending = true;
        }

    });

});
