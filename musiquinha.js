let musica;

function preload(){
  musica = loadSound("C418 Minecraft.mp3")
}

function setup(){
  musica.play();
  musica.loop();
}