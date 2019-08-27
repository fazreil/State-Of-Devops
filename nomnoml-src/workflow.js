import React from 'react';
import nom from 'nomnoml'

class Workflow extends React.Component {
  constructor(props) {
    super(props);

    this.generateSvg = this.generateSvg.bind(this)
  }

  generateSvg(src) {
   const svg = nom.renderSvg(src);

   return  {
     __html: svg
   }
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={this.generateSvg(this.props.src)} />
    )
  }
}

export default Workflow;
