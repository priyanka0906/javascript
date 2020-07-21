class User{
    constructor(name,age,email)
    {
        this.name=name
        this.age=age
        this.email=email
    }
    login(){
        console.log(`${this.name} is logged in`);
    }
    logout()
    {
        console.log(`${this.name} is logged out`);
    }
}

class Moderator extends User{
    constructor(name,age,email,coins)
    {
        super(name,age,email);
        this.coins=0;
    }

    addCoins()
    {
        this.coins+=2;
        console.log("inside");
    }

    removeCoins()
    {
        this.coins-=1;
    }

}

// mod= new Moderator("pihu",18,"pihu02amb@gmail.com");
// mod.addCoins();
// console.log(mod.coins);
// mod.removeCoins();
// console.log(mod.coins);

class Admin extends Moderator{
    constructor(name,age,email,courses)
    {
        super(name,age,email);
        this.courses=[];
    }

    addCourse(course)
    { 
       this.courses.push(course);
      
    }

    removeCourse(course)
    {
       this.courses= this.courses.filter((item)=>{
          return item!==course;
       });
    }
}

ad=new Admin("pihu",18,"pihu02amb@gmail.com");
 ad.addCoins()
console.log(ad.coins);
ad.addCourse("java");
ad.addCourse("c++");
ad.addCourse("python");
console.log(ad.courses);
ad.removeCourse('java');
console.log(ad.courses);
