<?

$fields_names = array(
    "name"=>"Имя", "site"=>"Сайт", "phone"=>"Телефон", "phone_or_email"=>"Телефон или e-mail", "message"=>"Сообщение"
);

$fields = array();

$to = 'dimanne@list.ru';
$subj = isset($_POST['subject'])?$_POST['subject']:'Сообщение с сайта';
$msg = '';
$msg.= '<strong>Дата отправления</strong>: '. date('m.d.Y H:i:s') .'<br/><br/>';
$msg.= '<h1>'. $subj .'</h1>';
	
foreach ($fields_names as $name=>$title) {
    if(isset($_POST[$name])){
        $fields[$name] = $_POST[$name];
        $msg.= '<strong>'. $title .'</strong>: '. $fields[$name] .'<br/>';
    }
}

$msg = '
	<html>
		<head>
			<title>'.$subj.'</title>
		</head>
		<body>'.$msg.'</body>
	</html>';

$h  = 'MIME-Version: 1.0' . "\r\n";
$h .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$h .= 'From: no-reply@mopatech.com' . "\r\n";

$subj = "=?utf-8?B?" . base64_encode($subj) . "?=";


@mail($to, $subj, $msg, $h);

	

$result = array(
    "success" => true,
    "message" => '<div class="modal-info-content">'
        . '<i class="ico-airplane-disk ico-disk-red modal-info-ico"></i>'
        . '<div class="modal-info-header">'
        . 'Спасибо, ваше сообщение<br>'
        . 'успешно отправлено'
        . '</div>'
        . 'Мы свяжемся с вами в течение 1 часа, чтобы обсудить ваш проект'
        . '</div>',
    "fields" => $fields
);


/*$result = array(
    "success" => false,
    "message" => '<div class="modal-info-content modal-info-errors">'
        . '<i class="ico-minus-disk ico-disk-red modal-info-ico"></i>'
        . 'В форме обнаружены ошибки. Исправьте их и отправьте снова.<br>'
        . '</div>',
    "fields" => $fields
);*/

echo json_encode($result);