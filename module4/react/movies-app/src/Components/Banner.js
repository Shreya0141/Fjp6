import { Component } from "react";
import {movies} from "../movieData"
import axios from "axios"


class Banner extends Component{
    constructor(){
        super();
        this.state={
            movie:""
        }
    }
    async componentDidMount(){
        let res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=04bbb1c64d1607df45fae2c79a4f56d1');
        console.log("Banner");
        console.log(res);
        this.setState({
            movie:res.data.results[0]
        })
    }
    render(){
       
        let backdrop_path = this.state.movie.backdrop_path;
        return(
            <div className="card banner-card">
            <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} className="card-img-top banner-img" alt="..."/>
               
                    <h1 className="card-title banner-title">{this.state.movie.title}</h1>
                    <p className="card-text banner-text">{this.state.movie.overview}</p>
                   
                

            </div>
            
        )
    }
}

export default Banner