
onQuickResponseLoad = function(event) {
    var url = gDocument.location.toString();
    var canvas = document.getElementById("qrCodeCanvas");
    var context = canvas.getContext('2d');

    var qr;
    try {
	    qr = new QRCode(QRMode.MODE_KANJI,
                        QRErrorCorrectLevel.L);
	    qr.addData(url);
	    qr.make();
    }
    catch (ex) {
	    qr = new QRCode(QRMode.MODE_KANJI,
                        QRErrorCorrectLevel.L);
	    qr.addData(ex.toString());
	    qr.make();
    }
	
    var qrBlockSize = 5;
    var qrSize = qr.getModuleCount();
    canvas.setAttribute('width', qrSize * qrBlockSize); 
    canvas.setAttribute('height', qrSize * qrBlockSize); 

	for (var r = 0; r < qrSize; r++) {
	    for (var c = 0; c < qrSize; c++) {
    	    if (qr.isDark(r, c) ) {
                context.fillRect(c * qrBlockSize,
                                 r * qrBlockSize,
                                 qrBlockSize,
                                 qrBlockSize);
	        }
	    }
	}
};

window.addEventListener("load", function () { onQuickResponseLoad(); }, false);
