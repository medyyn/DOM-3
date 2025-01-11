const array = [
    {
        "name": "Leanne",
        "surname": "Graham",
        "email": "leanne@example.com",
        "phonenumber": "1-770-736-8031",
        "city": "Gwenborough"
    },
    {
        "name": "Ervin",
        "surname": "Howell",
        "email": "ervin@example.com",
        "phonenumber": "010-692-6593",
        "city": "Wisokyburgh"
    },
    {
        "name": "Carmen",
        "surname": "Beck",
        "email": "carmen@example.com",
        "phonenumber": "781-329-8637",
        "city": "Meyersville"
    },
    {
        "name": "Anna",
        "surname": "Smith",
        "email": "anna.smith@example.com",
        "phonenumber": "1-800-555-1234",
        "city": "Springfield"
    },
    {
        "name": "John",
        "surname": "Doe",
        "email": "john.doe@example.com",
        "phonenumber": "1-800-555-5678",
        "city": "Centerville"
    },
    {
        "name": "Olivia",
        "surname": "Johnson",
        "email": "olivia.johnson@example.com",
        "phonenumber": "1-800-555-2345",
        "city": "Lakeside"
    },
    {
        "name": "Lucas",
        "surname": "Miller",
        "email": "lucas.miller@example.com",
        "phonenumber": "1-800-555-6789",
        "city": "Riverside"
    },
    {
        "name": "Sophia",
        "surname": "Davis",
        "email": "sophia.davis@example.com",
        "phonenumber": "1-800-555-7890",
        "city": "Oakwood"
    },
    {
        "name": "Michael",
        "surname": "Wilson",
        "email": "michael.wilson@example.com",
        "phonenumber": "1-800-555-9876",
        "city": "Greendale"
    },
    {
        "name": "Emma",
        "surname": "Taylor",
        "email": "emma.taylor@example.com",
        "phonenumber": "1-800-555-5432",
        "city": "Mapleton"
    }
]
const container = document.querySelector("#cardContainer");
function renderCards(array, container) {
    container.innerHTML = ""; 
    array.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h1>${item.name}</h1>
            <h2>${item.surname}</h2>
            <p><strong>Email:</strong> ${item.email}</p>
            <p><strong>Phone Number:</strong> ${item.phonenumber}</p>
            <p><strong>City:</strong> ${item.city}</p>
        `;
        container.appendChild(card);
    });
}

const searchName = document.querySelector("#searchName");
searchName.oninput = (event) => {
    const val = event.target.value.toLowerCase();
    const filteredArr = array.filter(a =>
        a.name.toLowerCase().includes(val)
    );
    renderCards(filteredArr, container);
};
renderCards(array, container);

const searchSurname = document.querySelector("#searchSurname");
searchSurname.oninput = (event) => {
    const val = event.target.value.toLowerCase();
    const filteredArr = array.filter(a =>
        a.surname.toLowerCase().includes(val)
    );
    renderCards(filteredArr, container);
};
renderCards(array, container);

const searchEmail = document.querySelector("#searchEmail");
searchEmail.oninput = (event) => {
    const val = event.target.value.toLowerCase();
    const filteredArr = array.filter(a =>
        a.email.toLowerCase().includes(val)
    );
    renderCards(filteredArr, container);
};
renderCards(array, container);

const searchNumber = document.querySelector("#searchNumber");
searchNumber.oninput = (event) => {
    const val = event.target.value.toLowerCase();
    const filteredArr = array.filter(a =>
        a.phonenumber.toLowerCase().includes(val)
    );
    renderCards(filteredArr, container);
};
renderCards(array, container);


const searchCity = document.querySelector("#searchCity");
searchCity.oninput = (event) => {
    const val = event.target.value.toLowerCase();
    const filteredArr = array.filter(a =>
        a.city.toLowerCase().includes(val)
    );
    renderCards(filteredArr, container);
};
renderCards(array, container);


const searchAll = document.querySelector("#searchAll");
searchAll.oninput = (event) => {
    const val = event.target.value.toLowerCase();
    const filteredArr = array.filter(a =>
        a.name.toLowerCase().includes(val) ||
        a.surname.toLowerCase().includes(val) ||
        a.email.toLowerCase().includes(val) ||
        a.phonenumber.toLowerCase().includes(val) ||
        a.city.toLowerCase().includes(val)
    );
    renderCards(filteredArr, container);
};
renderCards(array, container);