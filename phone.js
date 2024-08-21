const loadPhone = async (searchText, isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    displayPhones(data.data, isShowAll)
    
}

const displayPhones = (phones, isShowAll) =>{
    const container = document.getElementById('phone-container')
    // clear phone container cards before adding new cards
    container.textContent = '';

    // display show all button if there are more than 12 
    const showAll = document.getElementById('show-all');
    if(phones.length > 12 && !isShowAll){
        showAll.classList.remove('hidden')
    }else{
        showAll.classList.add('hidden')
    }

    // display only first 10 
    if(!isShowAll){
        phones = phones.slice(0, 12);
    }

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
                <div class="card-actions justify-center">
                <button onclick="showDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
                </div>
            </div>
        `;
        container.appendChild(div)

    });
    // hide toggle spinner
    toggleSpinner(false)
}

// show details
const showDetails = async(id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data =await res.json()
    console.log(data)

}

// search handle 
const searchHandle = (isShowAll)=>{
    toggleSpinner(true)

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
    // searchField.value = ''

    loadPhone(searchText, isShowAll)
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

// handle show all
const handleShowAll = () =>{
    searchHandle(true)

}


// loadPhone('iphone')