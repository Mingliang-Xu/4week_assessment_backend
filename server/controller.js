const movieDatabase = [];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortunes: (req, res) => {
        const fortunes =[
        'A lifetime friend shall soon be made.',
        'Believe in yourself and others will too.',
        'Change is happening in your life, so go with the flow!',
        'Distance yourself from the vain.',
        'Embrace this love relationship you have!'
    ];

    let randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];

    res.status(200).send(randomFortune);
    },

    postWishList: (req, res) =>{

        let{name, rating} = req.body;

        movieDatabase.push({name, rating});

        res.status(200).send(movieDatabase);

        console.log(movieDatabase);

    },

    deleteWishList: (req, res) => {
        let index = movieDatabase.findIndex(element => element.name === req.params.value)
        movieDatabase.splice(index, 1);
        res.status(200).send(movieDatabase);
        console.log(movieDatabase)
    },

    putWishList: (req, res) => {

        let index = movieDatabase.findIndex(element => element.name === req.params.value)
        movieDatabase.splice(index, 1, req.body);
        res.status(200).send(movieDatabase);
        console.log(movieDatabase);

    }

}
