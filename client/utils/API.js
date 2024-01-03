// imports axios to make requests to the server
import axios from 'axios';


const search = {
    
     getMovieByTitle: async (title, page) => {
        let finalResult = [];   
        try {
            const response = await axios.get(`/api/movies/${title}/${page}`);
            for (let i = 0; i < response.data.total_pages; i++) {
                const page = await axios.get(`/api/movies/${title}/${i + 1}`);
                finalResult.push(page.data.results);
            }
            const result = finalResult.flat();
            return result;
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