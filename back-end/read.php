<?php
    require 'conn.php';

    $query = "SELECT * from iletisim";

    if ( isset($_GET['id']) ) {
        $query .= " where id = " . $_GET['id'];
    }

    try {
        
        $oku = $db->prepare($query);
        $oku->execute();
        $sonuc = $oku->fetchAll(PDO::FETCH_ASSOC);
      
        $json = json_encode($sonuc);

    } catch(PDOException $e) {
        
        echo 'Bir Hata Oluştu... '.$e->getMessage();
    }
    
    echo $json;
?>