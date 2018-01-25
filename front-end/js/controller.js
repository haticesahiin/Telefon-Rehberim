
// CRUD methodlarını yazdığım yer
// Yukleme ve guncelleme
function createUpdateKayit(jsonData, callback) {
	$.ajax({
		type: "POST",
		url: backendURL + '/createUpdate.php',
		data: JSON.stringify(jsonData),
		contentType: 'application/json',
		success: callback
	});
};

// Okuma İçin
function okumaKayit () {
	$.ajax({
		url: backendURL + '/read.php',
		type: 'GET',
		success: function (veri) {

			veri = $.parseJSON(veri);

			var satirlar = '';

			$('#dataRow').html('');

			setTimeout(function () {

				$.each(veri, function (key, item) {

					satirlar +=
						'<tr id="trGrid" value="' + item.id + '">' +
						'<td>' + item.id + '</td>' +
						'<td>' + item.ad + '</td>' +
						'<td>' + item.tel + '</td>' +
						'<td>' + item.tarih + '</td>' +
						'<td>' +
						'<button class="btnDelete" value="' + item.id + '"><b>Sil</b></button>' +
						'</td>' +
						'</tr>';

					$('#dataRow').html('').append(satirlar);

					var satir = $('#trGrid td');

					satir.on('click', function (e) {
						e.preventDefault();

						var id = $(e.currentTarget).parent().attr('value');

						loadForm(id);
					});

					$(".btnDelete").on("click", function (e) {
						e.preventDefault();

						var id = e.currentTarget.value;

						silKayit(id, function (veri) {

							veri = JSON.parse(veri);

							if (veri.durum) {

								okumaKayit();

								loadForm();
							}
							else {
								$('#messages').html(veri.message).fadeIn().delay(2000).fadeOut();
							}
						});
						
					});
				});

			}, 100);
		}
	});
};

// DELETE
function silKayit(id, callback) {
	$.ajax({
		type: "DELETE",
		url: backendURL + '/delete.php?id=' + id,
		success: callback
	});
};