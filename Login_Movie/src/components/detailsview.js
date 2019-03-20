import React, {Component} from 'react'

class DetailsView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        detailsViewItems: props.items
      }
    }

    componentDidMount() {
        console.log('DetailsViewItems' + this.state.detailsViewItems);
    }

    componentWillReceiveProps(nextProps) {
      if(nextProps.items && nextProps.items.length > 0) {
        this.setState({detailsViewItems: nextProps.items});
      }
    }

    renderReviewedMovies(reviewedMovies) {
      return(
        <div>
          { reviewedMovies.map((items) => {
            return(<div className="card">
              <img src={items.Poster} className="movie-image" alt={items.Title} />
              <div className="container">
                <h4 className="card-property">Title: <b>{items.Title}</b></h4>
                <h4 className="card-property">Year: {items.Year}</h4>
                <h4 className="card-property">Type: {items.Type}</h4>
                <h4 className="card-property">Imdb Rating: {items.imdbRating}</h4>
                <h4 className="card-property">User Rating: {items.imdbRating}</h4>
              </div>
            </div>)
          }) }
        </div>
      );
    }

    render () {
        const reviewedMovies = JSON.parse(localStorage.getItem('reviewedMovies'));
        if(this.state.detailsViewItems && this.state.detailsViewItems.length === 0 && reviewedMovies === null) {
          return (
            <h4 className="login100-form-title p-b-33 alert alert-info"> {'Explore & Review'} </h4>
          )
        }
        return (
            <div>
                { reviewedMovies && reviewedMovies.movies.length > 0 ? this.renderReviewedMovies(reviewedMovies.movies) : null }
            </div>
        )
    }
}

export default DetailsView;
