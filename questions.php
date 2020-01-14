<?php

$userName = $_POST['userName'];
$userQuestion = $_POST['userQuestion'];
$userPhone = $_POST['userPhone'];

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function


// Load Composer's autoloader
require 'php.mailer/Exception.php';
require 'php.mailer/PHPMailer.php';
require 'php.mailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

$mail->CharSet = 'UTF-8';

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'ssl://smtp.mail.ru';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'test_tester_2001@mail.ru';                     // SMTP username
    $mail->Password   = 'Dovile030291';                         // SMTP password
    $mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('test_tester_2001@mail.ru', 'Заявка с сайта');
    $mail->addAddress('398393@mail.ru');


    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = "Новая заявка с сайта";
    $mail->Body    = "Имя пользователя: ${userName}, его телефон: ${userPhone}, вопрос: ${userQuestion}";


    $mail->send();
    header('Location: thanks.html');
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>