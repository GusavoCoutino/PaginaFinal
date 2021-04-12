async function tabla5(){
    const result = await fetch('https://api.airtable.com/v0/appzKexSFKJXeZPBy/Casa%20Hogar%205?maxRecords=30&view=Grid%20view'
    ,{headers:{
        "Authorization": "Bearer keyijfshbHKclSMLS"
    }})
    const myJson = await result.json()
    let table5 = "<table><thead><tr><th>Producto</th><th>Estado</th></tr></thead>"
        for(let i=0; i<myJson?.records?.length; i++){
            console.log(myJson?.records[i])
            table5 += "<tr><td>"+myJson?.records[i]?.fields?.Producto+"</td>"
            table5 += "<td>"+myJson?.records[i].fields.Estado+"</td></tr>"
        }
        table5 += "</table>"
        console.log(table5);
        document.getElementById('Tabla5').innerHTML=table5
}