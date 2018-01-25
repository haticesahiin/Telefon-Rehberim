<?php
	$json = file_get_contents("php://input");

	if(isset($json)) {

		$json = json_decode($json);

		require "conn.php";	//Doğrulama burada güncelleniyor veya eklenmekte olup olmadığını kontrol eder
		@$isUpdating = $json->{'id'} > 0;// guncelleme sorgusu
		if ($isUpdating) {
			$query = "update iletisim set ad = :name, tel = :phone_number, tarih = :reg_date where id = :id";
		}
		//create sorgusu
		else {
			$query = "insert into iletisim (ad, tel, tarih) values (:name, :phone_number, :reg_date)";
		}

		try {
			$yukleme = $db->prepare($query);
			$yukleme->bindParam(':name', $json->{'name'});
			$yukleme->bindParam(':phone_number', $json->{'phone_number'});
			$yukleme->bindParam(':reg_date', $json->{'reg_date'});

			if ($isUpdating) {
				$yukleme->bindParam(':id', $json->{'id'});
			}

			$yukleme->execute();

			$veri = array('durum' => true, 'message' => "Kayıt başarılı");

			echo json_encode($veri);

		} catch(PDOException $e) {
			
			$veri = array('durum' => false, 'message' => $e->getMessage());

			echo json_encode($veri);
		}
	}
?>