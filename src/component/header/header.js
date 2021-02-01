import "./style.scss";
const element = document.createElement("header");

element.innerHTML = "this is webpack demo";
element.classList.add('info')
document.body.appendChild(element);

class Person {
    
    constructor(fname, lname) {
       this.fname = fname;
       this.lname = lname;
    }
 
    get fullname() {
       return this.fname +" "+this.lname;
    }
 }

 console.log(new Person("sals","hussien"));



