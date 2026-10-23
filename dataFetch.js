const display = document.getElementById('display');
async function getData() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((result) => result.json())
    //     .then((data) => {
    //         display.innerHTML = data.map((info) => (
    //             `<li>
    //             ${info.id}.
    //             ${info.name}
    //             </>`
    //         )).join('')
    //     })

    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const getFetchedData = await response.json()
    display.innerHTML = getFetchedData.map((info) => (
                `<li>
                ${info.id}.
                ${info.name}
                </>`
            )).join('');
}
