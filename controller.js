const { debug } = require('console');
const { get } = require('http');
const url = require('url');

// exports.plus = function(nb1,nb2){
//   return(parseInt(nb1)+parseInt(nb2));
// };

// exporsts.moins = function(nb1,nb2){
//   return(parseInt(nb1)-parseInt(nb2));
// };

function plus(nb1,nb2)
{
  return(parseInt(nb1)+parseInt(nb2));
}

function moins(nb1,nb2)
{
  return(parseInt(nb1)-parseInt(nb2));
}

function multiplication(nb1,nb2)
{
  return(parseInt(nb1)*parseInt(nb2));
}

function division(nb1,nb2)
{
  return(parseInt(nb1)/parseInt(nb2));
}

function modulo(nb1,nb2){
  return(parseInt(nb1)%parseInt(nb2));
}

function negative(nb1){
    return(-1*parseInt(nb1));
  }

function prime(nb1)
{
  for(var i = 2; i < nb1; i++)
  if(nb1 % i === 0) return false;
  return nb1 > 1;
}

function Niemprime(nb1)
{
  var value;
  for (var i = 0; i < nb1; i++) {
      value = nextPrime(value);
  }
  return value
}

function nextPrime(value) {
  if (value > 2) {
      var i, q;
      do {
          i = 3;
          value += 2;
          q = Math.floor(Math.sqrt(value));
          while (i <= q && value % i) {
              i += 2;
          }
      } while (i <= q);
      return value;
  }
  return value === 2 ? 3 : 2;
}


module.exports={plus,moins,multiplication,division,modulo,negative,prime,Niemprime};