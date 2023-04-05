// var fileInput = document.getElementById('myfile');
//  var   info = document.getElementById('info');
    // preview = document.getElementById('blur');
    var preview = document.querySelector('.preview1');
    var clearPreview = document.querySelector('.preview2');
    var imageblur = document.getElementById('blur-image');
    var trans = document.getElementById('transfer');
    var clearname = "";
    var download = document.getElementById('download');
    var getBlurImg = document.getElementById('selectblurimg');

    var blurLists = ["","blur1","blur2","blur3"];


window.addEventListener("load",initialization,false)

function initialization() {
  createblurList();

    // fileInput.addEventListener('change', function () {
    
    //     while(preview.firstChild) {
    //         preview.removeChild(preview.firstChild);
    //       }
        
    //       const curFiles = fileInput.files;
    //       if (curFiles.length === 0) {
    //         info.innerHTML = 'No files currently selected for upload';
    //       } else {
    //         var para = "";
    //         const file = curFiles[0];
    //         if (validFileType(file)) {
    //           para = `File name: ${file.name}<br> File size: ${returnFileSize(file.size)}.`;
    //           const image = document.createElement('img');
    //           image.src = URL.createObjectURL(file);
    //           image.id = "blur";
    //           preview.appendChild(image);
              
    //           info.innerHTML = para;
    //           trans.style.pointerEvents = "auto";
    //           download.style.pointerEvents="none";
    //         } else {
    //           para = `File name: ${file.name} not a valid file type`;
    //          info.innerHTML=para;
    //         }
      
    //       }
    //     })

        trans.addEventListener('click',function(){
          var nodeblur = true;
            while(clearPreview.firstChild) {
                clearPreview.removeChild(clearPreview.firstChild);
              }
              // const curFiles = fileInput.files;
            var image = document.createElement('img');
            // if(curFiles[0].name =="blur1.png")
            for(var i=1;i<blurLists.length;i++){
              if(getBlurImg.value == blurLists[i]){
                image.src = "assets/img/" + "de" + blurLists[i] +".png";
                clearname = "de" + blurLists[i];
                download.style.pointerEvents="auto";
                nodeblur = false;
              }
            }
            if(nodeblur){
              image.src = "assets/img/no.png";
              download.style.pointerEvents="none";
            }

            // if(getBlurImg.value == "blur1")
            //   {
            //     // alert("one");
            //     image.src = "assets/img/deblur1.png";
            //     clearname = "deblur1";
            //     download.style.pointerEvents="auto";
            //   }
            //     else if(getBlurImg.value =="blur2"){
            //       image.src = "assets/img/deblur2.png";
            //       clearname = "deblur2";
            //       download.style.pointerEvents="auto";
            //     }
            //     else if(getBlurImg.value =="blur3"){
            //       image.src = "assets/img/deblur3.png";
            //       clearname = "deblur3";
            //       download.style.pointerEvents="auto";
            //     }
            //     else{
            //       image.src = "assets/img/no.png";
            //       download.style.pointerEvents="none";
            //     }
              image.id = "clear";
              

              // var word = document.createElement('p');
              // word.textContent = "clear";
              clearPreview.appendChild(image);
              // clearPreview.appendChild(word);
              // trans.style.pointerEvents = "none";
        })

        // 添加download功能
        download.addEventListener('click',function(){
          var img = document.getElementById('clear');
          var url = img.src;
          var a = document.createElement('a');
          var event = new MouseEvent('click');
          a.download = clearname;
          a.href = url;
          a.dispatchEvent(event);
        }) 
          
 
    }

const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/jpg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon"
  ];
  
  function validFileType(file) {
    return fileTypes.includes(file.type);
  }

  function returnFileSize(number) {
    if (number < 1024) {
      return `${number} bytes`;
    } else if (number >= 1024 && number < 1048576) {
      return `${(number / 1024).toFixed(1)} KB`;
    } else if (number >= 1048576) {
      return `${(number / 1048576).toFixed(1)} MB`;
    }
  }
  
  function createblurList(){
    for(var i=0;i<blurLists.length;i++){       
      var item = document.createElement('option')
      item.className = "blurLists";
      item.value = blurLists[i];
      item.innerHTML = blurLists[i];
      // item.addEventListener('change',blurClicked)
      getBlurImg.appendChild(item);
  }
  }
  
  function blurClicked(){
    while(preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }
    const image = document.createElement('img');
    if(getBlurImg.value != ""){
      image.src = "assets/img/blur/" + getBlurImg.value + ".png";
      image.id = "blur";
      preview.appendChild(image);
    }
  }
