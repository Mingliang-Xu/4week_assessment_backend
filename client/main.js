const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector('#fortuneButton')
const movieInput = document.getElementById('movie-input')
const ratinginput = document.getElementById('rating-input')
const myDiv = document.querySelector('#my-div')
const addToWishForm= document.getElementById('my-form')
// const addToWishBtn = document.getElementById('wishButton')
const deleteBtn = document.getElementById('delete-button')
const editBtn = document.getElementById('edit-button')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = (event) =>{

    axios.get('http://localhost:4000/api/fortune/')
    .then((res) => {   
        alert(res.data)
    })
    .catch((err) => {})
}

complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', getFortune)

const postWishList = (event) =>{
    event.preventDefault();
    
    let newWish = {
        name: movieInput.value,
        rating: ratinginput.value
    }
    axios.post('http://localhost:4000/api/movie/', newWish)
    .then((res)=>{
        // console.log(res.data);
        myDiv.textContent = '';
        for(let i = 0; i < res.data.length; i++){
            let movieP = document.createElement('p')
            let ratingP = document.createElement('p')
            movieP.textContent = res.data[i].name;
            ratingP.textContent = res.data[i].rating;
            movieP.appendChild(ratingP);
            myDiv.appendChild(movieP, ratingP);
        }

    })
    .catch(()=>{})

}


const deleteWishList = (name) => {

    axios.delete('http://localhost:4000/api/movie/')
    .then((res) => {
        console.log(res.data)
        myDiv.textContent = '';
        for(let i = 0; i < res.data.length; i++){
            let movieP = document.createElement('p')
            let ratingP = document.createElement('p')
            movieP.textContent = res.data[i].name;
            ratingP.textContent = res.data[i].rating;
            movieP.appendChild(ratingP);
            myDiv.appendChild(movieP, ratingP);
        }

    })
    .catch(() => {})

}

const editWishList = (event) => {
    event.preventDefault();

    let editWish = {
        name: movieInput.value,
        rating: ratinginput.value
    }
    axios.put('http://localhost:4000/api/movie/', editWish)
    .then((res)=>{
        // console.log(res.data);
        myDiv.textContent = '';
        for(let i = 0; i < res.data.length; i++){
            let movieP = document.createElement('p')
            let ratingP = document.createElement('p')
            movieP.textContent = res.data[i].name;
            ratingP.textContent = res.data[i].rating;
            movieP.appendChild(ratingP);
            myDiv.appendChild(movieP, ratingP);
        }

    })
    .catch(()=>{})

}

addToWishForm.addEventListener('submit', postWishList);
deleteBtn.addEventListener('click', deleteWishList);
editBtn.addEventListener('click', editWishList);






