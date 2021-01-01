async function helloWorld(){
    const result = await fetch('https://api.airtable.com/v0/appzKexSFKJXeZPBy/Casa%20Hogar%201?maxRecords=3&view=Grid%20view'
    ,{headers:{
        "Authorization": "Bearer keyijfshbHKclSMLS"
    }})

    const myJson = await result.json()
    console.log(myJson)
    console.log(result?.json())
    /*const page=myJson?.page
    const data=myJson?.data
    const perPage= myJson?.perPage
    const support= myJson?.support
    console.log(myJson)
    console.log(page)
    console.log(data)*/
    /*let table = "<table>"
    for(let i=0; i<data.length; i++){
        console.log(data[i].color)
        table += "<tr><td>"+data[i].color+"</td>"
        table += "<td>"+data[i].name+"</tr></td>" 
    }
        table += "</table>"
        console.log(table)
        document.getElementById('hola').innerHTML=table*/
        
        let table2 = "<table>"
        for(let i=0; i<myJson?.records?.length; i++){
            console.log(myJson?.records[i])
            table2 += "<tr><td>"+myJson?.records[i]?.fields?.Cantidad+"</td>"
            table2 += "<td>"+myJson?.records[i]?.fields?.Descripcion+"</td>" 
            table2 += "<td>"+myJson?.records[i]?.fields.Estado+"</td>"
            table2 += "<td>"+myJson?.records[i].fields.Producto+"</td></tr>"
        }
        table2 += "</table>"
        console.log(table2);
        document.getElementById('hola').innerHTML=table2
}