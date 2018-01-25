<?php
	require 'conn.php';

	if ( isset($_GET['id']) ) {

		$query = "DELETE from iletisim where id = :id";

		try {
			
			$sil = $db->prepare($query);

			$sil->bindParam(':id', $_GET['id']);

			$sil->execute();

			$veri = array('durum' => true, 'message' => "Silme Başarılı!");

			echo json_encode($veri);

		} catch(PDOException $e) {

			$veri = array('durum' => false, 'message' => $e->getMessage());

			echo json_encode($veri);
		}
	}
	else {

		$veri = array('durum' => false, 'message' => "Missing ID value");

		echo json_encode($veri);
	}
?>