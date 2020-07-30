<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';




// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // проверка на ошибку
    $mail->SMTPDebug = 2; 
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'ijojo1703@gmail.com'; // Логин на почте
    $mail->Password   = 'пароль'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('ijojo1703@gmail.com', 'Имя отправителя'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('catawasu9@gmail.com');  

    if (isset($_POST['submit_1'])){
    $email = $_POST['email'];
    
    // отправка почты
    $title_1 = "Новое обращение Best Tour Plan";
    $body_1 = "
    <h2>New subscriber</h2>
    <b>Message:</b><br>$email
    ";

    $mail->isHTML(true);
    $mail->Subject = $title_1;
    $mail->Body = $body_1;

    header('Location: thank_you_subscribe.html');
    }

    if(isset($_POST['submit_2'])) {
    // Переменные, которые отправляет пользователь
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Формирование самого письма
    $title_2 = "Новое обращение Best Tour Plan";
    $body_2 = "
    <h2>New appeal</h2>
    <b>Name:</br> $name<br>
    <b>Phone:</br> $phone<br><br>
    <b>Message:</b><br>$message
    ";
    
    $mail->isHTML(true);
    $mail->Subject = $title_2;
    $mail->Body = $body_2;
    
    header('Location: thank_you_feedback.html');
    }

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);

