<form id="anaForm">
    <fieldset>
        <legend><b>Yeni Kişi</b></legend>
        <input type="hidden" id="id" />
        <div>
            <label for="ad">Adı Soyadı</label>
            <input type="text" id="ad" class="txt" required />
        </div>
        <div>
            <label for="tel">Telefon Numarası</label>
            <input type="number" id="tel" class="txt" required />
        </div>
        <div>
            <label for="tarih">Kayıt Tarihi</label>
            <input type="date" id="tarih" class="txt" required />
        </div>
    </fieldset>
    <div>
        <button  id="btnSave"><b>Kaydet/Güncelle<b></button>
        <button style="margin-left: 75px; color:#00008B;" id="btnNew"><b>Yenile<b></button>
    </div>
</form>