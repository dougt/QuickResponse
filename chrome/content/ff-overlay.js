
onQuickResponseLoad = function(event) {
    let url = gDocument.location.toString();
    let canvas = document.getElementById("qrCodeCanvas");
    let context = canvas.getContext('2d');

    let qr;
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
	
    let qrBlockSize = 5;
    let qrSize = qr.getModuleCount();
    canvas.setAttribute('width', qrSize * qrBlockSize); 
    canvas.setAttribute('height', qrSize * qrBlockSize); 

	for (let r = 0; r < qrSize; r++) {
	    for (let c = 0; c < qrSize; c++) {
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
