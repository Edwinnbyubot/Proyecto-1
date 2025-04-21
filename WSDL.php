<?php
// filepath: c:\laragon\www\Consumo Soap\WSDL.php

require_once 'lib/nusoap.php';

// URL del servicio SOAP
$wsdl = "https://apps.learnwebservices.com/services/hello?wsdl";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los parámetros enviados desde el formulario
    $param1 = $_POST['param1'] ?? '';

    try {
        // Crear un cliente SOAP
        $cliente = new nusoap_client($wsdl, true);

        // Configurar los parámetros para la solicitud SOAP
        $params = array('HelloRequest' => array('Name' => $param1));

        // Llamar al método SayHello
        $respuesta = $cliente->call("SayHello", $params);

        // Devolver la respuesta como JSON
        header('Content-Type: application/json');
        echo json_encode($respuesta);
    } catch (Exception $e) {
        // Manejar errores
        header('Content-Type: application/json');
        echo json_encode(['error' => $e->getMessage()]);
    }
} else {
    echo "Método no permitido.";
}
?>
