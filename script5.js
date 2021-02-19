async function tabla4(){
    const result = await fetch('https://api.airtable.com/v0/appzKexSFKJXeZPBy/Casa%20Hogar%204?maxRecords=3&view=Grid%20view'
    ,{headers:{
        "Authorization": "Bearer keyijfshbHKclSMLS"
    }})
    const myJson = await result.json()
    let table4 = "<table><thead><tr><th>Producto</th><th>Estado</th></tr></thead>"
        for(let i=0; i<myJson?.records?.length; i++){
            console.log(myJson?.records[i])
            table4 += "<tr><td>"+myJson?.records[i]?.fields?.Producto+"</td>"
            table4 += "<td>"+myJson?.records[i].fields.Estado+"</td></tr>"
        }
        table4 += "</table>"
        console.log(table4);
        document.getElementById('Tabla4').innerHTML=table4
}