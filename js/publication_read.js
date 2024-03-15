fetch('https://raw.githubusercontent.com/gw-jung/gw-jung.github.io/main/src/publication_list.json')
    .then(response => response.json())
    .then(data => {
    const groupedData = {};
    data.forEach(item => {
        const year = item.year;
        if(!(year in groupedData)) {
            groupedData[year] = [];
        }
        groupedData[year].push(item);
    })

    const yearConv = Object.keys(groupedData).sort((a,b)=>(b-a));

    const tableContainer = document.getElementById('table-container');

    yearConv.forEach(year => {
        const yearData = groupedData[year];
        const yearShow = document.createElement('h5');
        yearShow.innerText = year;
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        yearData.forEach(item => {
            const tr = document.createElement('tr');
            const td = document.createElement('td');

            const title = document.createElement('a');
            title.textContent = item.title;
            title.href=item.doi;

            const authors = document.createElement('span');
            authors.textContent = item.authors;
            authors.classList.add('authors');

            const journal = document.createElement('em');
            journal.textContent = item.journal;
            journal.classList.add('journal');
            
            td.appendChild(title);
            td.appendChild(document.createElement('br'));
            td.appendChild(authors);
            td.appendChild(document.createElement('br'));
            td.appendChild(journal);
            tr.appendChild(td);
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        tableContainer.appendChild(yearShow);
        tableContainer.appendChild(table);
    });

    highlightName('Gyuwon Jung');

});

const compareNumbers = (a, b) => {
    return a - b;
};

const highlightName = (name) => {
    document.querySelectorAll('span.authors').forEach(node =>{
        let text = node.textContent;

        const regex = new RegExp(name, 'gi');
        text = text.replace(regex, `<strong>${name}</strong>`);

        node.innerHTML = text;
    });
};