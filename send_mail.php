<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['name'], $data['email'], $data['message'])) {
    $name = htmlspecialchars(trim($data['name']));
    $email = filter_var(trim($data['email']), FILTER_VALIDATE_EMAIL);
    $messageContent = htmlspecialchars(trim($data['message']));

    if (!$email) {
        echo json_encode(["success" => false, "error" => "Niepoprawny adres e-mail."]);
        exit;
    }

    $to = "prathnow@gmail.com"; 
    $subject = "Nowa wiadomość od " . $name;
    $message = "Imię: " . $name . "\nEmail: " . $email . "\n\n" . $messageContent;
    
    $headers = "From: kontakt@twojadomena.com\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => "Błąd wysyłania e-maila."]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Niepoprawne dane."]);
}
?>
