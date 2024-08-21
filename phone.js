const loadPhone = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    const data = await res.json();
    displayPhones(data.data)
    
}

const displayPhones = phones =>{
    console.log(phones)
}

loadPhone()