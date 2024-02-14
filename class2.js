class demo
{
    constructor(hour,min,sec)
    {
        this.a=hour;
        this.b=min;
        this.c=sec;
    }
    add(z)
    {
        this.a=this.a + z.a
        this.b=this.b + z.b
        this.c=this.c + z.c
    }
    display(){
        console.log(this.a )
        console.log(this.b)
        console.log(this.c)
    }
}
let t1=new demo(2,55,22);
console.log("t1 : ");
t1.display()
let t2=new demo(12,40,60);
console.log("t2 : ");
t2.display()
t1.add(t2)
console.log("sum of t1 and t2 is: ");
t1.display()

