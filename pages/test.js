import React, { Component } from "react";
import { withRouter } from "next/router";
import Axios from "axios";
import BaseLayout from "../components/layout/BaseLayout";

class Test extends Component {

    static async getInitialProps(context) {
       const testId = context.query.id
        return { testId };
      }

  render() {
      const { testId } = this.props;
    return (
      <BaseLayout>
        <h1> I am a test pages with id of { testId }</h1>
    
      </BaseLayout>
    );
  }
}

export default withRouter(Test);
