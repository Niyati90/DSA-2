function getdata()
{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=> res.json())
    .then((data)=> postdata(data))
}
function postdata(data)
{
    fetch("http://localhost:3000/a",{
        method:"POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}