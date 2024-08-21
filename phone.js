const loadPhone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    displayPhones(data.data)
    
}

const displayPhones = phones =>{
    const container = document.getElementById('phone-container')
    // clear phone container cards before adding new cards
    container.textContent = '';

    // display show all button if there are more than 12 
    const showAll = document.getElementById('show-all');
    if(phones.length > 12){
        showAll.classList.remove('hidden')
    }else{
        showAll.classList.add('hidden')
    }

    // display only first 10 
    phones = phones.slice(0, 12);

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

    });
    // hide toggle spinner
    toggleSpinner(false)
}

// search handle 
const searchHandle = ()=>{
    toggleSpinner(true)

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
    // searchField.value = ''

    loadPhone(searchText)
}

// spinner 
const toggleSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner')
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    } else{
        loadingSpinner.classList.add('hidden')
    }

}

loadPhone('iphone')