function getUser(id)
{
    return new Promise((res,rej)=>{
        if(id<=10)
        {
            res("User Found"+id);
        }
        else
        {
            rej("user not found ");
        }
    })
}
console.log(start);


async function fetchData()
{
    try
    {
        const data=await getUser(30);
    }
    catch(err)
    {
        console.log(data);
    }
}