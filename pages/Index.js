import React from 'react';
import { Link } from '../routes';

const index = () => (
  <div>
    <h1>Home</h1>
    <Link route="about">
      <a>About</a>
    </Link>
  </div>
);

export default index;
