"use strict";
const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },
  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg' 
  },
  { name: 'llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },
  {
    name: 'Merge',
    skill: 'Kill concatenation',
    imgUrl: '/static/img/merge.jpg'
  },


  {
    name: 'off-by-one',
    skill: 'skps by one',
    imgUrl: '/static/img/off-by-one.jpg'
  }
]
function TradingCardContainer(){
  return (
  <div>
    Success!
  </div>
);
}
ReactDOM.render(
    <TradingCardContainer/>
    document.querySelector('#container')


)




for (const currentCard of tradingCardData) {
  console.log(currentCard.name, currentCard.skill);
}


function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} />
      <h2>Skill:{props.skill} </h2>
    </div>
  );
}

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Balloonicorn"
//       skill="video games"
//       imgUrl="/static/img/balloonicorn.jpg"
//     />
//   ),
//   document.querySelector('#balloonicorn')
// );

