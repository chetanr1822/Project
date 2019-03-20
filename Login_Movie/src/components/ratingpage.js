import React, {Component} from 'react';

class RatingPage extends Component {

    constructor(props) {
      super(props);
    }

    onSelectCatagary(event) {
      if (event.target.classList.contains('catagary-box-select')) {
      	  event.target.classList.remove('catagary-box-select');
      } else {
        event.target.classList.add('catagary-box-select');
      }
    }

    render () {
        return (
            <div className="">
               <h3 className="rating-header">{'Please select catagary box and rate'}</h3>
               <input className="range-bar" type="range" name="points" min="0" max="10" />
               <div className="catagary">
                 <div id="actionMovie" className="catagary-box" onClick={(event) => this.onSelectCatagary(event)}>
                    {'Action Movies'}
                 </div>
                 <div id="thrillMovie" className="catagary-box" onClick={(event) => this.onSelectCatagary(event)}>
                    {'Thriller Movies'}
                 </div>
                 <div id="romanticMovie" className="catagary-box" onClick={(event) => this.onSelectCatagary(event)}>
                    {'Romantic Movies'}
                 </div>
               </div>
            </div>
        )
    }
}

export default RatingPage;
