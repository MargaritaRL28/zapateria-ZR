var datos = {};
var misDatos = (info) => {
    console.log(info);
    datos.productos = info;
    var html = "";
    html += "<h2>Productos</h2>";
    html += "<table border='1'>";
    html += "<thead>";
    html += "<tr>";
    html += "<th>Folio</th>";
    html += "<th>Descripción</th>";
    html += "<th>Talla</th>";
    html += "<th>Precio</th>";
    html += "</tr>";
    html += "</thead>";
    
    html += "<tbody>";
    datos.productos.map(producto => {
        html += "<tr>";
        html += "<td>" + producto.Folio + "</td>";       
        html += "<td>" + producto.Descripcion + "</td>";  
        html += "<td>" + producto.Talla + "</td>";        
        html += "<td>" + producto.Precio + "</td>";      
        html += "</tr>";
    });
    html += "</tbody>";
    html += "</table>";
    document.getElementById("resultados").innerHTML = html;
}

