function grandFather(){
    var x = 1;

    function Parent(){
        x++;

        function Child(){
            x++;
            console.log(x);
        }
        return Child;
    }

    return Parent;
}

let fun = grandFather();

let f1 = fun(); 
let f2 = fun();


f1(); // 4
f1(); // 5
f2(); // 6
f2(); // 7

// let fun = grandFather()
// jab grandFather function call hota hai toh uska x=1 variable create hota hai or
// parent function return karta hai jse fun k ander store krwa dia

// let f1 = fun();
// jab fun() call hota hai (yani Parent() call hota hai), toh x++ hoke x=2 ho jata hai
// aur Child function return hota hai jo f1 mein store hota hai
// f1 ab Child function ka closure hai jo same x variable ko access kar sakta hai

// let f2 = fun();
// phir se fun() call hota hai (yani dubara same Parent() call hota hai), ab x++ hoke x=3 ho jata hai
// aur ek naya Child function return hota hai jo f2 mein store hota hai
// f2 bhi apna closure hai jo same x variable ko share karta hai (abhi x=3)

