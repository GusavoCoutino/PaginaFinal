async function tabla(){
    const result = await fetch('https://api.airtable.com/v0/appzKexSFKJXeZPBy/Casa%20Hogar%201?maxRecords=3&view=Grid%20view'
    ,{headers:{
        "Authorization": "Bearer keyijfshbHKclSMLS"
    }})
    const myJson = await result.json()
    var table1 = "<table><thead><tr><th>Producto</th><th>Estado</th></tr></thead>"
        for(var i=0; i<myJson?.records?.length; i++){
            console.log(myJson?.records[i])
            table1 += "<tr><td>"+myJson?.records[i]?.fields?.Producto+"</td>"
            table1 += "<td>"+myJson?.records[i].fields.Estado+"</td></tr>"
        }
        table1 += "</table>"
        console.log(table1);
        document.getElementById('Tabla').innerHTML=table1
}