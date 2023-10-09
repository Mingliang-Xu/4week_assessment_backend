const movieDatabase = [];

let movieId = 1;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },
    getFortunes: (req, res) => {
        const fortunes = [
            'A lifetime friend shall soon be made.',
            'Believe in yourself and others will too.',
            'Change is happening in your life, so go with the flow!',
            'Distance yourself from the vain.',
            'Embrace this love relationship you have!'
        ];

        let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

        res.status(200).send(randomFortune);
    },

    postWishList: (req, res) => {

        let { id, name, rating } = req.body;

        movieDatabase.push({ id: movieId, name, rating });

        movieId++

        res.status(200).send(movieDatabase);

        console.log(movieDatabase);

    },

    deleteFromWishList: (req, res) => {
        let existingMovieId = +req.params.id
        for (i = 0; i < movieDatabase.length; i++) {
            if (movieDatabase[i].id === existingMovieId) {
                movieDatabase.splice(i, 1);
                break
            }
        }

        res.status(200).send(movieDatabase);
        console.log(movieDatabase)
    },

    putWishList: (req, res) => {

        // let existingMovieId = +req.params.id;
        // for (i = 0; i < movieDatabase.length; i++) {
        //     if (movieDatabase[i].id === existingMovieId) {
        //         movieDatabase[i].name = req.body.name
        //         movieDatabase[i].rating = req.body.rating


        //         break
        //     }
        // }
        let index = movieDatabase.findIndex((element) => element.id === +req.params.id)
        movieDatabase[index].name = req.body.name;
        movieDatabase[index].rating = req.body.rating;

        res.status(200).send(movieDatabase);
        console.log(movieDatabase)

    },
    getWishList: (req, res) => {

        res.status(200).send(movieDatabase);

        console.log(movieDatabase);

    },

}
