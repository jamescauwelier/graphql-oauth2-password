
// external imports

import React from "react";
import { GraphiQL } from 'graphiql/dist/components/GraphiQL';
import '../../node_modules/graphiql/graphiql.css';

// internal imports

import connection from "../connection/Connection";

// component

class Browser extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    return (
      <GraphiQL
        fetcher={ connection.getFetcher } />
    );
  }
}

export default Browser;
