
// spred

const obj =  function(a,b, ...rest) {
	console.log(rest);
};

obj('eeeeee','tt', 'yy', 'uu','j');     
// [ 'yy', 'uu', 'j' ]

function calc(num, basis) {
	console.log(num*basis);
}
calc(3,6);




// rest!

const fr = ['apple', 'orange', 'banana'];

const [g, ...rest] = fr;
console.log(g);   /* apple */
console.log(rest);   /* [ 'orange', 'banana' ] */

const [first, second, ...rest2] = 'string!!!!';
console.log(rest2);
/* [
  'r', 'i', 'n',
  'g', '!', '!',
  '!', '!'
] */

