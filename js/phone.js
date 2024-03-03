const loadPhone = async(searchText,isShowAll) =>{
    const res = await fetch(`
    https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones =data.data;
   displaPhones(phones,isShowAll);
}

const displaPhones = (phones,isShowAll) =>{
    const phoneContainer = document.getElementById('card-container');
    phoneContainer.textContent='';
    const showAll = document.getElementById('show-All');
if(phones.length > 12 && !isShowAll ){
showAll.classList.remove('hidden');
}
else{
    showAll.classList.add('hidden');
}


 if(!isShowAll){
    phones=phones.slice(0,12);
    
 }

    // console.log(phones);
    phones.forEach(phone =>{
        // console.log(phone);

        const phoneCard =document.createElement('div');
        phoneCard.classList=`card p-4 bg-base-100 shadow-xl `;
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-center">
            <button onclick="showDetails('${phone.slug}')" class="btn btn-primary">Show details</button>
          </div>
        </div>
        `;
       phoneContainer.appendChild(phoneCard);
        

    })
    loadSpinner(false)
}

const showDetails =async(id) =>{
   const res =await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
   const data =await res.json();
  const phone =data.data;
   phonDetail(phone);
}

const phonDetail =(phone)=>{
    console.log(phone);
    const phoneName =document.getElementById('phone-detail');
    phoneName.innerText = phone.name;
    const showContaoiner =document.getElementById('show-detail-container');
    showContaoiner.innerHTML=`
    <figure><img src="${phone.image}" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.brand}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-center">
        <button onclick="showDetails('${phone.mainFeatures
            }')" class="btn btn-primary">Show details</button>
      </div>
    </div>
    `;
    show_modal.showModal();

}

// const handleSearch2 =()=>{
//     const search = document.getElementById('seatrch-filed2');
//     const serchValue = search.value;
//    loadPhone(serchValue);
    
// }

const handleSearch =(isShowAll)=>{
    loadSpinner(true);
    const secrchField =  document.getElementById('seatrch-filed');
    const seaxcxrhValue =secrchField.value;

    loadPhone(seaxcxrhValue ,isShowAll);
}

const loadSpinner =(isLoading)=>{
    const loadSpinner =document.getElementById('load-spinner');
  if(isLoading){
    loadSpinner.classList.remove('hidden');
  }
  else{
    loadSpinner.classList.add('hidden');
  }
}

const isShowALl =()=>{
    handleSearch(true);
}
