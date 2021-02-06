async function tabla(){
    const result = await fetch('https://api.airtable.com/v0/appzKexSFKJXeZPBy/Casa%20Hogar%201?maxRecords=3&view=Grid%20view'
    ,{headers:{
        "Authorization": "Bearer keyijfshbHKclSMLS"
    }})
    const myJson = await result.json()
    let table1 = "<table><thead><tr><th>Producto</th><th >Cantidad</th><th>Descripción</th><th>Estado</th></tr></thead>"
        for(let i=0; i<myJson?.records?.length; i++){
            console.log(myJson?.records[i])
            table1 += "<tr><td>"+myJson?.records[i]?.fields?.Producto+"</td>"
            table1 += "<td>"+myJson?.records[i]?.fields?.Cantidad+"</td>" 
            table1 += "<td>"+myJson?.records[i]?.fields.Descripcion+"</td>"
            table1 += "<td>"+myJson?.records[i].fields.Estado+"</td></tr>"
        }
        table1 += "</table>"
        console.log(table1);
        document.getElementById('Tabla').innerHTML=table1
}