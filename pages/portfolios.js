import Axios from "axios";
import React, { Component } from "react";
import BaseLayout from "../components/layout/BaseLayout";
import Link from "next/link";

export default class Portfolios extends Component {
  static async getInitialProps() {
    let posts = [];
    try {
      const response = await Axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts = response.data;
    } catch (error) {
      console.log(error);
    }
    return { posts: posts.splice(0, 10) };
  }

  renderPosts(posts) {
    return posts.map((p) => {
      return (
        <li key={p.id}>
          <Link as={`/portfolio/${p.id}`} href="/portfolio/[id]">
            <a style={{ fontSize: "20px" }}>{p.title}</a>
          </Link>
        </li>
      );
    });
  }
  render() {
    const { posts } = this.props;
    return (
      <BaseLayout>
        <h1> I am Portfolios Page</h1>
        <ul>{this.renderPosts(posts)}</ul>
      </BaseLayout>
    );
  }
}
