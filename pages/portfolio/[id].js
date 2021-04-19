import React, { Component } from "react";
import { withRouter } from "next/router";
import BaseLayout from "../../components/layout/BaseLayout";
import Axios from "axios";

class Portfolio extends Component {

    static async getInitialProps(context) {
        let post = {};
        const postId = context.query.id
        try {
          const response = await Axios.get(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
          );
          post = response.data;
        } catch (error) {
          console.log(error);
        }
        return { post };
      }

  render() {
      const { post } = this.props
    return (
      <BaseLayout>
        <h1> {post.title}</h1>
        <h2>{post.body}</h2>
        <p>{post.id}</p>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
