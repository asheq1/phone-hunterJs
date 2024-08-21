const loadPhone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    displayPhones(data.data)
    
}

const displayPhones = phones =>{
    const container = document.getElementById('phone-container')
    // clear phone container cards before adding new cards
    container.textContent = '';

    phones.forEach(phone => {
        console.log(phone)
        const div = document.createElement('div');
        div.classList = `card bg-gray-100 p-4 shadow-xl`
        div.innerHTML = `
            <figure>
            <img
            src="${phone.image}"
            alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `;
        container.appendChild(div)

    })
}

// search handle 
const searchHandle = ()=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
    // searchField.value = ''

    loadPhone(searchText)
}

loadPhone()