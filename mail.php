<?php
$name         = strip_tags( trim( $_POST['name'] ) );
$email        = strip_tags( trim( $_POST['email'] ) );
$phone        = strip_tags( trim( $_POST['phone'] ) );
$message_text = strip_tags( trim( $_POST['message'] ) );

$to      = 'contact@cugambit.com'; /* Your email address */
$subject = 'From Contact Form';
$message = "From: $name \nEmail: $email \nPhone $phone \nMessage: $message_text";
$headers = 'From: http://codepure.co.za' . "\r\n";


if(mail( $to, $subject, $message, $headers )){
	echo 'Sended';
}else{
	echo 'Failder';
}

?>
