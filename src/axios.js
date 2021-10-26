//      >>>>>>>>>>>>> Axios is a promise based library used for making http requests <<<<<<<<<<<<

// similar like ajax

import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;
