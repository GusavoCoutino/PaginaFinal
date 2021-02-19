async function tabla2(){
    const result = await fetch('https://api.airtable.com/v0/appzKexSFKJXeZPBy/Casa%20Hogar%202?maxRecords=3&view=Grid%20view'
    ,{headers:{
        "Authorization": "Bearer keyijfshbHKclSMLS"
    }})
    const myJson = await result.json()
    let table2 = "<table><thead><tr><th>Producto</th><th>Estado</th></tr></thead>"
        for(let i=0; i<myJson?.records?.length; i++){
            console.log(myJson?.records[i])
            table2 += "<tr><td>"+myJson?.records[i]?.fields?.Producto+"</td>"
            table2 += "<td>"+myJson?.records[i].fields.Estado+"</td></tr>"
        }
        table2 += "</table>"
        console.log(table2);
        document.getElementById('Tabla2').innerHTML=table2
}