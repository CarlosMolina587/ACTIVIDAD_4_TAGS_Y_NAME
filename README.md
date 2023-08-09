<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <title>Selección de Bebidas</title>
</head>

<body>

    <h2>Selecciona una bebida:</h2>

    <ol>
        <li>Café</li>
        <li>Te</li>
        <li>Leche</li>
        <li>Malteada</li>
        <li>Jugo</li>

        <input type="number" id="numero" placeholder="Bebida">
        <input type="number" id="cantidad" placeholder="Cantidad">
        <button id="btnBebidas" onclick="bebidas()">calcular</button>
        <p id="resultado"></p>


    </ol>
    <script src ="clase.js"></script>
</body>

</html>
 
