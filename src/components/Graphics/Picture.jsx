import { Component } from "react";

export default class Picture extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (

      <div>
        {
          this.props.data.map(i => <img src={i.image} alt="" width={i.width} height={i.height} />)
        }
      </div>
    )
  }
}