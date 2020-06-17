// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

const twofer = who => {
  if (typeof who === 'string') {
  return `Two for me and one for ${who}`;
} else if ( who === undefined ){
  return `Two for me and one for you`;
}
};

console.log(twofer("Fran")); // -> "Two for me and one for Fran"
console.log(twofer()); // -> "Two for me and one for you"


const twofer = (who = "Two for me and one for you") => {
  
  return `Two for me and one for ${who}`;
};
console.log(twofer("Fran")); // -> "Two for me and one for Fran"
console.log(twofer()); // -> "Two for me and one for you"


