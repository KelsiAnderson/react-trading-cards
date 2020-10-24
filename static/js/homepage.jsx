"use strict";

function Homepage() {
  return (
    <div>
      <h1>"welcome!!! lets play"</h1>
      <a href="/cards">Click here to view the trading cards.</a>
      <img src="/static/img/balloonicorn.jpg" />
    </div>
  );
}
// requirements = rednering from component above && 
//query selector for the id or class you want to render it to 
ReactDOM.render(<Homepage />, document.querySelector('#app'));
