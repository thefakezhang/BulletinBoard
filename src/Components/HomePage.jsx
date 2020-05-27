import React from 'react';
import {Link} from 'react-router-dom';

import Bulletin from './Bulletin';

export default () => {
    return(
        <div>
            <Link to = "/home">BB</Link>
            <p>This is the home page!</p>
        </div>
    );
}