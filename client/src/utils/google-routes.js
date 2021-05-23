import axios from "axios";


export default {
  searchGames: function(query) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query.search}+intitle:${query.search}&key=AIzaSyBb9kQN1iJxuTk6ozxPqWNswxeJLOrIMpg`
    );
  }
};