import React from 'react';
import Axios from 'axios';
import config from '../config';
import Spinner from './Spinner';

class SingleMovie extends React.Component{
    constructor(){
        super();
        this.state={
            movieData:{}
        }
    }
    async componentDidMount(){
        const movieId = this.props.match.params.movieId
        const thisMovieDetailUrl = `https://api.themoviedb.org/3/movie/${movieId}d?api_key=${config.api_key}`;
        const resp = await Axios.get(thisMovieDetailUrl)
        console.log(resp.data);
        this.setState({
            movieData: resp.data
        })
    }

    render(){
        console.log(this.state.movieData)
        if(this.state.movieData.tagline === undefined){
            return(<Spinner />)
        }
        return(
            <img src={`http://image.tmdb.org/t/p/w300${this.state.movieData.poster_path}`} />
        )
    }
}

export default SingleMovie;