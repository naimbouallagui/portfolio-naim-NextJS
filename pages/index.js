import Axios from "axios";
import React from "react";
import BaseLayout from "../components/layout/BaseLayout";
import Header from "../components/shared/Header";

class Index extends React.Component {


    static async getInitialProps() {
        let userData = {}
        try {
            const response = await Axios.get('https://jsonplaceholder.typicode.com/todos/1')
             userData = response.data;
        } catch (error) {
            console.log(error);
        }
        return { initialData: [1,2,3], userData}
      }

    handleClick = () => {
        console.log('testss');
    }

  render() {
      const { initialData, userData } = this.props
    //   console.log({ response});
    return (
      <BaseLayout>
        <h1> I am Index Page from Class Component </h1>
        <h2>{userData.title}</h2>
        <button onClick={this.handleClick}>Click me!</button>
      </BaseLayout>
    );
  }
}

export default Index;


{/* <Header title={"azeazeaz"}>
<h1>I am a header subtitle</h1>
</Header> */}