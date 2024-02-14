class Node 
{
    constructor(v)
    {
        this.value=v;
        this.next=null;
        this.prev=null;
    }
}

class Linkedlist
{
    constructor()
    {
        this.head=null;
        this.size=0;
    }
    isempty()
    {
        if(this.size==0)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    push(v)
    {
        var n=new node(v)
        if(this.isempty())
        {
            this.head=n;
            this.size++;
        }
        else
        {
            n.next=this.head;
            this.head=n;
            this.size++;
        }
    }
    pushE(v)
    {
        var n=new node(v)
        if(this.isempty())
        {
            alert("linkedlist is empty")
        }
        else
        {
            var c=this.head
            while(n.next != null)
            {
                c=c.next;
            }
            c.next=n;
        }
        this.size++;
    }
    pushSPC(v,pos)
    {
        var n=new node (v)
        if(pos==1)
        {
            this.push(v)
        }
        else if(pos==this.size)
        {
            this.pushE(v)
        }else
        {
            if(pos>size)
            {
                alert("not possible");
            }
            else
            {
                var i=1;
                var c=this.head
                while(i<pos-1)
                {
                    i++;
                    c=c.next;

                }
                var temp=c.next;
                n.next=temp;
                c.next=n;
                this.size++;

            }
        }
    }
}

    pop(v)
    {
        if(this.isempty())
        {
            alert("empty")
        }
        else{
        var c=this.head;
        this.head=c.next;
        this.head.prev=null;
        this.size--;
        }
    }
    popE(v)
    {
        if(this.isempty())
        {
            alert("empty")
        }
        else
        {
            var c=this.head;
            while(c.next != null)
            {
                var temp=c;
                c=c.next;
            }
            temp.next=c.next;
            this.size--;
        }

    }
    popSPC()
    {
            if(pos==1)
            {
                this.popB()
            }else if(pos==this.size)
            {
                this.popE()
            }else{
                if(pos>this.size || pos<1)
                {
                    print("not possible")
                }else{
                    var i=1;
                    var c=this.head
                    while(i<pos)
                    {
                        var temp=c;
                        c=c.next;
                        i++;
                    }
                    temp.next=c.next;
                    c=c.next;
                    c.prev=temp;
                    this.size--;
                }
            }
        
        print()
        {
            var c=this.head
            while(c.next!=null)
            {
                console.log(c.value);
                c=c.next;
            }
            console.log(c.value);
        }
    }
   


var z=new linkedlist()
    z.push(100)
    z.push(200)
    z.push(300)
    z.pushE(400)
    z.pushE(500)
    z.pushE(600)
    z.pushSPC(0,3)
    z.print()
    z.popSPC(4)
z.popB()
z.popE()
z.pushSPC(21,1)
z.popSPC(2)
z.print()