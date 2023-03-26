   var modal = document.getElementById('modal');
    var bgImg = document.getElementById('bgImg');
    var thumImg = document.getElementById('thum-img')

  thumImg.onclick = function(){
        showBgImg(this);
    }

    function showBgImg(e) {
        thumImg.style.display='none';
		modal.style.display = 'block';
		bgImg.src = e.src;
	}

	bgImg.onclick = function() {
		modal.style.display = 'none';
        thumImg.style.display = 'block';
	}
