
// external imports

import fetch from "isomorphic-fetch";

// component

class Connection
{
  constructor() {
    this.location = 'http://saveclanapi-staging.us-east-2.elasticbeanstalk.com';
    //this.location = null;
    this.token = null;

    this.getFetcher = this.getFetcher.bind(this);
  }

  getFetcher(graphQLParams) {

    var connection = this;

    if (connection.location == null) {
      throw new Error('GraphQL location is unknown');
    }

    return fetch(
      connection.location + '/graphql',
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(graphQLParams),
      }).
    catch(connection.onFetchingError).
    then(response => response.json());
  }

  onFetchingError (reason) {
    console.log("GRAPHQL failed: " + reason);
  }
}

const connection = new Connection();

export default connection;