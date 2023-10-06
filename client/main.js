const complimentBtn = document.getElementById("complimentButton")

const fortuneBtn = document.querySelector('#fortuneButton')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () =>{

    axios.get('http://localhost:4000/api/fortune/')
    .then((res) => {
    
        alert(res.data)

    })

    .catch((err) => {})

}

complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', getFortune)