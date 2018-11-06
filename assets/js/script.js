function rectangle()
{
  var canvas1 = document.getElementById("canvas1");
  var ctx1 = canvas1.getContext("2d");
  ctx1.beginPath();
  ctx1.rect(100,95,202,202);
  ctx1.strokeStyle="blue";

  ctx1.lineWidth="2";
  ctx1.fillStyle="yellow";
  ctx1.fill();



  ctx1.beginPath();
  ctx1.rect(240,150,40,40);
  ctx1.lineWidth="2";
  ctx1.fillStyle="blue";
  ctx1.fill();

  ctx1.beginPath();
  ctx1.rect(120,150,40,40);
  ctx1.fill();


  ctx1.beginPath();
  ctx1.rect(180,240,40,60);
  ctx1.fill();

  ctx1.globalCompositeOperation = "destination-over";
  ctx1.beginPath();
  ctx1.fillStyle="pink";
  ctx1.rotate(45*Math.PI/180);
  ctx1.fillRect(140,-145 ,140,140);

  ctx1.lineWidth="2";

  ctx1.fill();

}

window.onload=rectangle;
