import React from 'react';


module.exports = class HTML extends React.Component {

  render() {
    return (
      <html style={{height: '100%'}}>
        <head>
          <meta charSet="utf-8" />
        </head>
        <body style={{height: '100%', padding: '0px', margin: '0px'}}>
          <span style={{display: 'none'}} dangerouslySetInnerHTML={{__html: this.props.css_injections}}></span>
          <style dangerouslySetInnerHTML={{__html:this.props.css}} id="jss-server-side"></style>
          <div style={{width:'100%', height:'100%'}} id="root" dangerouslySetInnerHTML={{__html: this.props.main_html}}>
            
          </div>        
          <span style={{display: 'none'}}  dangerouslySetInnerHTML={{__html: this.props.js_injections}}>
          </span>
          <script dangerouslySetInnerHTML={{__html: this.props.redux_state}}></script>
        </body>
      </html>
    )
  }
}
