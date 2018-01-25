
// Ana olaylar


// Sayfa yuklenirken
$(document).ready(function () {
	loadForm();
	loadGrid();
});


//Yardımcı olaylar


function bindFormData(id) {

	$.ajax({
		url: backendURL + '/read.php?id=' + id,
		type: 'GET',
		success: function (veri) {

			veri = $.parseJSON(veri);

			$.each(veri, function (key, item) {
				$('#id').val(id);
				$('#ad').val(item.ad);
				$('#tel').val(item.tel);
				$('#tarih').val(item.tarih);
			});
		}
	});
};

function loadForm(id) {

	$('#formRegion').html('').load('front-end/templates/form.tpl', function () {

		// Yuklendikten sonra
		registerFormEvents();

		if (id > 0) {
			bindFormData(id);
		}
	});
};

function loadGrid() {

	$('#gridRegion').load('front-end/templates/grid.tpl', function () {

		// Yuklendikten sonra
		
	});

	okumaKayit();
};

function registerFormEvents(argument) {

	$("#anaForm").on("submit", function (e) {
		e.preventDefault();

		// Formu json da okudum
		var json = {
			id: $('#id').val(),
			name: $('#ad').val(),
			phone_number: $('#tel').val(),
			reg_date: $('#tarih').val()
		};

		// Kontrol methodlarımı çağırdım
		createUpdateKayit(json, function (veri) {

			veri = JSON.parse(veri);

			if (veri.durum) {

				// Sistemi yeniledim
				okumaKayit();

				// formu çağırıp sıfırladım
				loadForm();
			}
			else {
				$('#messages').html(veri.message).fadeIn().delay(2000).fadeOut();
			}
		});
	});

	$("#btnNew").on("click", function (e) {
		e.preventDefault();

		loadForm();
	});
}