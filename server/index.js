const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortunes, postWishList, putWishList, deleteWishList } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get('/api/fortune', getFortunes);
app.post('/api/movie',postWishList);
app.delete('/api/movie', deleteWishList);
app.put('/api/movie', putWishList);

app.listen(4000, () => console.log("Server running on 4000"));
