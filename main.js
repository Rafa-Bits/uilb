function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('model.json', modelReady);
}
function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('Cruzeiro') 
    img1 = document.getElementById('Flamengo')
    img2 = document.getElementById('SaoPaulo')
    img3 = document.getElementById('Fortaleza')

    if (results[0].label == "Cruzeiro") {
      img.src = 'Cruzeiro.gif';
      img1.src = 'Flamengo.jpg';
      img2.src = 'SaoPaulo.jpeg';
      img3.src = 'Fortaleza.png';
    } else if (results[0].label == "Flamengo") {
      img.src = 'Cruzeiro.png';
      img1.src = 'Flamengo.gif';
      img2.src = 'SaoPaulo.jpeg';
      img3.src = 'Fortaleza.png';
    } else if (results[0].label == "São Paulo") {
      img.src = 'Cruzeiro.png';
      img1.src = 'Flamengo.jpg';
      img2.src = 'SaoPaulo.gif';
      img3.src = 'Fortaleza.png';
    }else if (results[0].label== "Fortaleza") {
      img.src =  'Cruzeiro.png';
      img1.src = 'Flamengo.jpg';
      img2.src = 'SaoPaulo.jpeg';
      img3.src = 'Fortaleza.gif';
    }
  }
}