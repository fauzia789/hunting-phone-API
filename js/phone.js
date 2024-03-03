const loadPhone = async(searchText) =>{
    const res = await fetch(`
    https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones =data.data;
   displaPhones(phones);
}

const displaPhones = phones =>{
    const phoneContainer = document.getElementById('card-container');
    phoneContainer.textContent='';
    const showAll = document.getElementById('show-All');
if(phones.length > 12){
showAll.classList.remove('hidden');
}
else{
    showAll.classList.add('hidden');
}


    phones=phones.slice(0,12);
    // console.log(phones);
    phones.forEach(phone =>{
        console.log(phone);

        const phoneCard =document.createElement('div');
        phoneCard.classList=`card p-4 bg-base-100 shadow-xl `;
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `;
       phoneContainer.appendChild(phoneCard);
        

    })
}


// const handleSearch2 =()=>{
//     const search = document.getElementById('seatrch-filed2');
//     const serchValue = search.value;
//    loadPhone(serchValue);
    
// }

const handleSearch =()=>{
    const secrchField =  document.getElementById('seatrch-filed');
    const seaxcxrhValue =secrchField.value;

    loadPhone(seaxcxrhValue);
}

