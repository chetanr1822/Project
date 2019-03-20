import React, {Component} from 'react';
import {fetch} from 'whatwg-fetch';
import {fetchSearchData} from '../actions/action';

class ExploreView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        exploreViewItems: props.items,
        searchValue: ''
      }
    }

    componentDidMount() {
        console.log('ExploreViewItems' + this.state.exploreViewItems);
    }

    componentWillReceiveProps(nextProps) {
      if(nextProps.items && nextProps.items.Title) {
        this.setState({exploreViewItems: nextProps.items});
      }
    }

    renderResultedValue() {
      const { exploreViewItems } = this.state;
      if (this.state.exploreViewItems) {
        return(
          <div className="card">
            <img src={exploreViewItems.Poster} className="movie-image" alt={exploreViewItems.Title} />
            <div className="container">
              <h4 className="card-property">Title: <b>{exploreViewItems.Title}</b></h4>
              <h4 className="card-property">Year: {exploreViewItems.Year}</h4>
              <h4 className="card-property">Type: {exploreViewItems.Type}</h4>
            </div>
          </div>
        );
      }
    }

    onBlurValue(event) {
      this.setState({searchValue: event.target.value});
    }

    onSearchMovie() {
      if(this.state.searchValue === '') {
        alert('Please enter value');
      } else {
        var url = `http://www.omdbapi.com/?t=${this.state.searchValue}&apikey=BanMePlz`;
        fetch(url)
            .then((response) => {
              const responseCopy = response.clone();
              return responseCopy.json().catch(_ => response.text());
            })
            .then(data => {
              console.log(data);
              if(data && data.Error) {
                alert('Movie not found!');
              } else {
                let reviewedMovies = JSON.parse(localStorage.getItem('reviewedMovies'));
                if (reviewedMovies) {
                    reviewedMovies.movies.push(data);
                    localStorage.setItem('reviewedMovies', JSON.stringify(reviewedMovies));
                } else {
                  let reviewedMovies = {
                  	movies: []
                  };
                  reviewedMovies.movies.push(data);
                  localStorage.setItem('reviewedMovies', JSON.stringify(reviewedMovies));
                }
                this.props.fetchSearchData(data);
              }
            }).catch((e) => alert(e.message));
      }
    }

    render () {
        return (
            <div>
              <div className="wrap-input100 validate-input" data-validate = "">
                <input className="input100" type="text" name="email" placeholder="Enter Movie Name" onBlur={(e) => this.onBlurValue(e)}/>
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>

              <div className="container-login100-form-btn m-t-20">
                <button className="login100-form-btn" onClick={() => this.onSearchMovie()}>
                  Search
                </button>
              </div>
              { this.state.exploreViewItems && this.state.exploreViewItems.Title ? this.renderResultedValue() : null }
            </div>
        )
    }
}

export default ExploreView;
