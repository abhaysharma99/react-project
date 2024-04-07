
function CheckEvenorOdd(num){
    if(num % 2 === 0){
      return <div>Even</div>
    }
    else{
      return <div>Odd</div>
    }
}
function switchcase(alpha){
  switch (alpha) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return <div>{alpha} is Vowel</div>
    default:
      return <div>{alpha} is consonant</div>
  }
}
let number = 6;

const users = [
    {name: 'mohan',age:25},
    {name: 'ram',age:29},
    {name:'rohit',age:19}
]
function Jsx() {
  return (
    <div> 
    <h2>Hello React 18</h2>
    <div>
    {
      CheckEvenorOdd(5)
    }
    {
      ((num) => {
        if(num%2===0){
          return<div>even</div>
        }
        else{
          return <div>odd</div>
        }
      })(number)
    }
    {
      number % 2 === 0 
      ? <h3>Even Number</h3>
      :<div>Odd NUmber</div>
    }
  {
    number % 2 ===0 && <p>even number</p> /* this is a logical end operator*/
  }
    </div>
    <h3>Loop</h3>
    {
      users.map((item,index) => {
        return <div key={index}> 
          {item.name} - {item.age}
        </div>
      })
    }
    <h2>switch</h2>
    {
      switchcase('o')
    }
  
    </div>
  );
}

export default Jsx;
