<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';


// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
// $email = $_POST['sendemail'];

// Отправка емайла
// $title_2 = "Новая подписка из Best Tour Plan";
// $body_2 = "
// <h2>Новая подписка пользователя</h2>
// <b>Почта:</b> $email
// ";

// Формирование самого письма
$title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</br> $name<br>
<b>Телефон:</br> $phone<br><br>
<b>Сообщение:</b><br>$message
";


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
    $mail->Password   = 'kweezE$4'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('ijojo1703@gmail.com', 'Имя отправителя'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('catawasu9@gmail.com');  

    // Отправка почты
    // $mail->isHTML(true);
    // $mail->Subject = $title_2;
    // $mail->Body = $body_2;  
    
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body; 

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);

// header('Location: thankyou.html');