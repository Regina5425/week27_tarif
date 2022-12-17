import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      error: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.setState({
        error: "Field should not be empty",
      });
    } else {
      alert("Sended");
      this.setState({
        text: "",
        error: "",
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button>Click</button>
          <div>{this.state.error}</div>
        </form>
        <div>Value: {this.state.text}</div>
      </div>
    );
  }
}

export default Form;
