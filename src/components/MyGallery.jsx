import React, { Component } from "react";
import { Row } from "react-bootstrap";
import SingleCard from "./SingleCard"; // 

class MyGallery extends Component{
  state={
    movie:[],
    isLoading:true,
    isErrror:false,
}  
componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=a861c87&s=harry%20potter')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then(data => {
        console.log(data);
        this.setState({ movie: data.Search, isLoading: false });
      })
      .catch(error => {
        console.error(error);
        this.setState({ isError: true, isLoading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <p>Caricamento...</p>
        ) : this.state.isError ? (
          <p>C'è stato un errore durante il recupero dei dati.</p>
        ) : (
          <div>
            <h1>Film di Harry Potter:</h1>
            <Row>
              {this.state.movie.map(movie => (
                <SingleCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} />
              ))}
            </Row>
          </div>
        )}
      </div>
    );
  }
}

export default MyGallery;