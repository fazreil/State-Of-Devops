import React from 'react';
import nom from 'nomnoml'

class CICD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.generateSvg = this.generateSvg.bind(this)
  }

  generateSvg() {
   const src = "[Jenkins]->[Artifactory]";
   const svg = nom.renderSvg(src)

   return  {
     __html: svg
   }
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={this.generateSvg()} />
    )
  }
}

export default CICD;
