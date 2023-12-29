// imports axios to make requests to the server
import axios from 'axios';


const search = {
    
     getMovieByTitle: async (title, page) => {
        try {
            const response = await axios.get(`/api/movies/${title}/${page}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    getMoviesTest: async () => {
        try {
            const movies = await axios.get('/api/test');
            console.log(movies.data);
            return movies.data
    } catch (error) {
        console.log(error);
        throw error;
    }
}
};

export default search;