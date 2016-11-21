var answer;

function calculator(x,y,z){
  if (x == "add"){
	answer = (y + z);
    console.log(answer);
  } else if (x == "subtract") {
  	answer = (x - z);
  	console.log(answer);
  } else if (x == "multiply") {
  	answer = (x * z);
  	console.log(answer);
  } else if (x == "divide") {
  	answer = (x / z);
  	console.log(answer);
  } else {
  	console.log ("you failed math")
  }
}

calculator ("multiply", 7,9);