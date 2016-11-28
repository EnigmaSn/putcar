<?

$fields_names = array(
    "name"=>"Имя", 
    "last-name"=>"Фамилия", 
    "first-name"=>"Имя", 
    "middle-name"=>"Отчество", 
    "mobile-phone"=>"Мобильный телефон",     
    "email"=>"E-mail", 
    "phone"=>"Телефон", 
    "check-place"=>"Место регистрации", 
    "living-place"=>"Адрес проживания", 
    "birthday"=>"Дата рождения", 
    "brand"=>"Марка автомобиля", 
    "model"=>"Модель автомобиля", 
    "year"=>"Год выпуска", 
    "vin"=>"VIN номер", 
    "gov-nam"=>"Гос. номер", 
    "news"=>"Я хочу получать информацию об акция и спецпредложениях", 
    "agreement-1"=>"Я даю свое согласи на хранение, обработку и использование моих пресональных данных", 
    "agreement-2"=>"Я подтверждаю свое согласие на передачу информации в электронной фоме (в том числе персональных данных) по откртым каналам связи",  
    "site"=>"Сайт", 
    "phone_or_email"=>"Телефон или e-mail", 
    "message"=>"Сообщение",
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
$h .= 'From: no-reply@putcar.ru' . "\r\n";

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