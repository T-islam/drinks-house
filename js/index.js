const fetchCatagory=()=>{
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then(res=>res.json())
    .then(data => showCatagory(data.drinks))
}
fetchCatagory()


const showCatagory=(data)=>{
    const itemsList = document.getElementById('item-list');
data.slice(0,7).forEach(catagory =>{ 
    
    const {strCategory} = catagory;
    itemsList.innerHTML += `
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#" onclick="itemsDetails('${strCategory}',this)">${strCategory}</a>
        </li>
    `

})
}

const itemsDetails = (strCategory,link) =>{
    const navItmes = document.querySelectorAll('.nav-link');
    navItmes.forEach(navItem => {
        navItem.classList.remove('active')
    })
    link.classList.add('active')
    
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`
    
    fetch(URL)
    .then(res=>res.json())
    .then(data => showItems(data.drinks))
    
}

const showItems = (data)=>{
    
    
    const showId = document.getElementById('show-items');
    showId.innerHTML = '';
    data.forEach(item => {
        const {strDrinkThumb,strDrink,idDrink} =item
        showId.innerHTML += `<div class="col">
        <div class="card">
          <img src="${strDrinkThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${strDrink}</h5>
            <p class="card-text"><a href="#" class="btn btn-primary" onclick="showDetails('${idDrink}')" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Details</a></p>
          </div>
        </div>
      </div>`
    })


}



const showDetails =(id)=>{
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(URL)
    .then(res=>res.json())
    .then(data => {
        console.log(data?.drinks[0])
        const {strDrinkThumb,strDrink,strInstructions} = data?.drinks[0];
        const modalId = document.getElementById('modal-body')
        modalId.innerHTML = `<div class="col">
        <div class="card">
          <img src="${strDrinkThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${strDrink}</h5>
            <p class="card-text">${strInstructions}</p>
          </div>
        </div>
      </div>`
    })
}


const mainShow = ()=>{
fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Coffee / Tea')
.then(res=>res.json())
.then(data => showItems(data.drinks))
}
mainShow()





document.getElementById('search-btn').addEventListener('click', ()=>{
    
    const inputValue = document.getElementById('search-input').value;
    console.log(inputValue)
    
})

const fetchSearchItem = ()=>{
    const URL = ''
}