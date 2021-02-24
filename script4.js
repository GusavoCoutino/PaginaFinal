async function tabla3(){
    const result = await fetch('https://api.airtable.com/v0/appzKexSFKJXeZPBy/Casa%20Hogar%203?maxRecords=20&view=Grid%20view'
    ,{headers:{
        "Authorization": "Bearer keyijfshbHKclSMLS"
    }})
    const myJson = await result.json()
    let table3 = "<table><thead><tr><th>Producto</th><th>Estado</th></tr></thead>"
        for(let i=0; i<myJson?.records?.length; i++){
            console.log(myJson?.records[i])
            table3 += "<tr><td>"+myJson?.records[i]?.fields?.Producto+"</td>"
            table3 += "<td>"+myJson?.records[i].fields.Estado+"</td></tr>"
        }
        table3 += "</table>"
        console.log(table3);
        document.getElementById('Tabla3').innerHTML=table3
}