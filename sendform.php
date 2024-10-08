<?php


if (!empty($_POST)) {
	if (isset($_POST['phone'])){
		$mail_str = "Заявка от ". $_POST['name'] . ". Телефон: "  . $_POST['phone'] . PHP_EOL . PHP_EOL;
		$mail_str.= "-----------------------------------". PHP_EOL;
		$mail_str.= "Тип (форма) кухни:" . $_POST['type_kitchen'] . PHP_EOL;
		$mail_str.= "Используемый материал:" . $_POST['material_kitchen'] . PHP_EOL;
		$mail_str.= "Размер кухни:" . $_POST['size_kitchen'] . PHP_EOL;
		$mail_str.= "-----------------------------------". PHP_EOL;

		mail("style-kitchen@bk.ru", "Заказ на сайте стиль-кухни.рф", $mail_str);
	};
};