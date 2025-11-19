const murgiBirth = require('./murgiBirth');
const andaBirth = require('./andaBirth');

console.log(murgiBirth);
console.log(andaBirth);


// script.js ne murgiBirth.js ko call kiya, dependency map me entry nahi thi to empty object ban 
// gaya aur murgiBirth.js execute hona shuru hua. Uski first line ne andaBirth.js ko call kiya, 
// vo bhi map me nahi tha to uska bhi empty object ban gaya aur execution start ho gayi. 
// andaBirth.js ki first line ne wapas murgiBirth.js ko require kiya, par murgiBirth.js abhi 
// half-executed tha isliye uska temporary empty export return hua. Fir andaBirth.js ne apna 
// export bana diya aur return kar diya. Wapas murgiBirth.js complete hua aur apna export return 
// kiya. Aakhir me script.js ko dono modules mil gaye.
