$(document).ready(function () {
   
   var xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function () {
      if (xhr.status == 200 && xhr.readyState == 4) {
         var data = JSON.parse(xhr.responseText);

         for ( var i=0; i < data.length; i++) {
            $("#picture_" + i + " img").attr("src", "./images/" + data[i].photoname);
            $("#picture_" + i + " h3").text(data[i].name);
            $("#picture_" + i + " p").text(data[i].info);            
         }
      }
   }

   xhr.open("GET", "data.php", true);
   xhr.send();
});