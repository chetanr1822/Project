import React, {
  Component,
} from 'react';
import { Link } from 'react-router';

import {Login} from './login';
export class App extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

}
