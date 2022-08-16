var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4a2ff87e-b97e-4785-859c-7a27c2d2a1d3","763451bf-bf2f-4545-bfdd-25cfec7f5f27","86da9948-66b4-4023-9d6e-b2fcd9ba5cd2","eb2be667-eacd-4390-b0d4-74816800bdd0","1b38f031-309a-4359-a2cb-b2fbbcf63afa","a9161437-8497-42a8-826e-1824d6ade98e","f40fbf2d-e738-42ef-82d2-1df15d9593ba","916fdb35-2361-4af0-8cac-9eb937e28d7f","f812c882-6f03-44f3-9a0b-c0a9f7e3c641","fa9681d1-cda9-4d48-8169-6cfe0880d3e6"],"propsByKey":{"4a2ff87e-b97e-4785-859c-7a27c2d2a1d3":{"name":"back","sourceUrl":"assets/api/v1/animation-library/gamelab/liip36Uzd.UEskze8YUtuWMvk3veS2QD/category_backgrounds/background_underwater_11.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"liip36Uzd.UEskze8YUtuWMvk3veS2QD","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/liip36Uzd.UEskze8YUtuWMvk3veS2QD/category_backgrounds/background_underwater_11.png"},"763451bf-bf2f-4545-bfdd-25cfec7f5f27":{"name":"dani","sourceUrl":"assets/api/v1/animation-library/gamelab/zH1WSj3ukBEBbatiuMBpuxn_.oiNUOym/category_animals/creature_03.png","frameSize":{"x":394,"y":371},"frameCount":1,"looping":true,"frameDelay":2,"version":"zH1WSj3ukBEBbatiuMBpuxn_.oiNUOym","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":371},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zH1WSj3ukBEBbatiuMBpuxn_.oiNUOym/category_animals/creature_03.png"},"86da9948-66b4-4023-9d6e-b2fcd9ba5cd2":{"name":"caramguejo","sourceUrl":"assets/api/v1/animation-library/gamelab/oz2OJAGcoLtvdLyCLYNAKEkeSSEc3t18/category_animals/crab_1.png","frameSize":{"x":398,"y":329},"frameCount":1,"looping":true,"frameDelay":2,"version":"oz2OJAGcoLtvdLyCLYNAKEkeSSEc3t18","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":329},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oz2OJAGcoLtvdLyCLYNAKEkeSSEc3t18/category_animals/crab_1.png"},"eb2be667-eacd-4390-b0d4-74816800bdd0":{"name":"peixe","sourceUrl":"assets/api/v1/animation-library/gamelab/o_467KxJ2wouBcmgyZqJOaqUxWSaVwBQ/category_animals/clownfish.png","frameSize":{"x":396,"y":250},"frameCount":1,"looping":true,"frameDelay":2,"version":"o_467KxJ2wouBcmgyZqJOaqUxWSaVwBQ","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":250},"rootRelativePath":"assets/api/v1/animation-library/gamelab/o_467KxJ2wouBcmgyZqJOaqUxWSaVwBQ/category_animals/clownfish.png"},"1b38f031-309a-4359-a2cb-b2fbbcf63afa":{"name":"pouvo","sourceUrl":"assets/api/v1/animation-library/gamelab/bSOGc_6K1AzUCU97lwX2eXS8xVVlsHo5/category_animals/cuteanimals_jellyfish.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"bSOGc_6K1AzUCU97lwX2eXS8xVVlsHo5","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bSOGc_6K1AzUCU97lwX2eXS8xVVlsHo5/category_animals/cuteanimals_jellyfish.png"},"a9161437-8497-42a8-826e-1824d6ade98e":{"name":"cavalo marinho","sourceUrl":"assets/api/v1/animation-library/gamelab/o8LwxJbbewZ07cG3pSqTAWnJG.b1HCIb/category_animals/cuteanimals_seahorse.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"o8LwxJbbewZ07cG3pSqTAWnJG.b1HCIb","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/o8LwxJbbewZ07cG3pSqTAWnJG.b1HCIb/category_animals/cuteanimals_seahorse.png"},"f40fbf2d-e738-42ef-82d2-1df15d9593ba":{"name":"peixin","sourceUrl":"assets/api/v1/animation-library/gamelab/RM7yPw5pJscI7t43CQVawj4yzr7_tKC1/category_animals/cuteanimals_tuna.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"RM7yPw5pJscI7t43CQVawj4yzr7_tKC1","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RM7yPw5pJscI7t43CQVawj4yzr7_tKC1/category_animals/cuteanimals_tuna.png"},"916fdb35-2361-4af0-8cac-9eb937e28d7f":{"name":"tartaruga","sourceUrl":"assets/api/v1/animation-library/gamelab/6ouXq4uNHs.GatlrdN52bUa6fxcByx9R/category_animals/cuteanimals_tortoise.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"6ouXq4uNHs.GatlrdN52bUa6fxcByx9R","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6ouXq4uNHs.GatlrdN52bUa6fxcByx9R/category_animals/cuteanimals_tortoise.png"},"f812c882-6f03-44f3-9a0b-c0a9f7e3c641":{"name":"bloco1","sourceUrl":"assets/api/v1/animation-library/gamelab/e.6xNPt5a_kEuBdPMBg9C7S6G72alGtj/category_aquatic_objects/shell_16.png","frameSize":{"x":393,"y":311},"frameCount":1,"looping":true,"frameDelay":2,"version":"e.6xNPt5a_kEuBdPMBg9C7S6G72alGtj","categories":["aquatic_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":311},"rootRelativePath":"assets/api/v1/animation-library/gamelab/e.6xNPt5a_kEuBdPMBg9C7S6G72alGtj/category_aquatic_objects/shell_16.png"},"fa9681d1-cda9-4d48-8169-6cfe0880d3e6":{"name":"bloco2","sourceUrl":"assets/api/v1/animation-library/gamelab/qM99_t.UaynpR28Cc0s8S18uwveKWoGN/category_aquatic_objects/shell_06.png","frameSize":{"x":398,"y":387},"frameCount":1,"looping":true,"frameDelay":2,"version":"qM99_t.UaynpR28Cc0s8S18uwveKWoGN","categories":["aquatic_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":387},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qM99_t.UaynpR28Cc0s8S18uwveKWoGN/category_aquatic_objects/shell_06.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// placar
var placar = 0;

// grupo
var grupo = createGroup();

//estado de jogo
var estadoJogo = "iniciar";


 //fundo
var fundo = createSprite(200, 200);
  fundo.setAnimation("back");
  
  
  //personagem
var f1 = createSprite(200, 300, 15, 15);
f1.setAnimation("dani");
f1.scale=0.2;


//blocos de cima

var bc1 = createSprite(24, 74, 50, 50);
//b1.shapeColor="green";
bc1.setAnimation("bloco1");
bc1.scale=0.1;
grupo.add(bc1);

var bc2 = createSprite(74, 74, 50, 50);
//b2.shapeColor="yellow";
bc2.setAnimation("bloco2");
bc2.scale=0.1;
grupo.add(bc2);

var bc3 = createSprite(124,74, 50, 50);
//b3.shapeColor="green";
bc3.setAnimation("bloco1");
bc3.scale=0.1;
grupo.add(bc3);

var bc4 = createSprite(174, 74, 50, 50);
//b4.shapeColor="yellow";
bc4.setAnimation("bloco2");
bc4.scale=0.1;
grupo.add(bc4);

var bc5 = createSprite(224, 74, 50, 50);
//b5.shapeColor="green";
bc5.setAnimation("bloco1");
bc5.scale=0.1;
grupo.add(bc5);

var bc6 = createSprite(274, 74, 50, 50);
//b6.shapeColor="yellow";
 bc6.setAnimation("bloco2");
 bc6.scale=0.1;
grupo.add(bc6);

var bc7 = createSprite(324,74, 50, 50);
//b7.shapeColor="green";
bc7.setAnimation("bloco1");
bc7.scale=0.1;
grupo.add(bc7);

var bc8 = createSprite(374, 74, 50, 50);
//b8.shapeColor="yellow";
bc8.setAnimation("bloco2");
bc8.scale=0.1;
grupo.add(bc8);

//blocos de baixo

var bb1 = createSprite(24, 126, 50, 50);
bb1.setAnimation("bloco2");
bb1.scale=0.1;
grupo.add(bb1);

var bb2 = createSprite(74,126,50,50);
bb2.setAnimation("bloco1");
bb2.scale=0.1;
grupo.add(bb2);

var bb3 = createSprite(124, 126, 50, 50);
bb3.setAnimation("bloco2");
bb3.scale=0.1;
grupo.add(bb3);

var bb4 = createSprite(174, 126, 50, 50);
bb4.setAnimation("bloco1");
bb4.scale=0.1;
grupo.add(bb4);

var bb5 = createSprite(224, 126, 50, 50);
bb5.setAnimation("bloco2");
bb5.scale=0.1;
grupo.add(bb5);

var bb6 = createSprite(274, 126, 50, 50);
bb6.setAnimation("bloco1");
bb6.scale=0.1;
grupo.add(bb6);

var bb7 = createSprite(324, 126, 50, 50);
bb7.setAnimation("bloco2");
bb7.scale=0.1;
grupo.add(bb7);

var bb8 = createSprite(374, 126, 50, 50);
bb8.setAnimation("bloco1");
bb8.scale=0.1;
grupo.add(bb8);

//raquete
var r1 = createSprite(197, 354, 120,10);
r1.shapeColor="black";


  function draw() {
   // console.log(estadoJogo);
    
    
    //começa o jogo
   if (keyDown("space")) {
     f1.velocityX = 2;
     f1.velocityY = -4;
     estadoJogo = "play";
   }
   
    //bordas
    
    createEdgeSprites();
    
    
    //dani e a raquete
    f1.bounceOff(r1);
    
    
   // dani e as bordas
    
   f1.bounceOff(rightEdge);
   f1.bounceOff(topEdge);
   f1.bounceOff(leftEdge);
   //f1.bounceOff(bottomEdge);
    
    //movimento da raquete
    
if (keyDown("RIGHT_ARROW")){
r1.x= r1.x+5;
}
if (keyDown("LEFT_ARROW")){
r1.x= r1.x-5;
}

f1.bounceOff(grupo, hit);

drawSprites();


 //texto
    textSize(25);
    text("pontuação:" +placar,247, 28);
   
   
    if (estadoJogo == "iniciar") {
      text("aperte espaço para começar",40,200);
    }
    
if (placar == 16) {
  text("Parabens, you won!",80,200);
  estadoJogo=="venceu";
  f1.velocityX = 0;
  f1.velocityY = 0;
}

if (f1.isTouching(bottomEdge)) {
  text("voce perdeu!",120, 200);
  estadoJogo == "perdeu";
  f1.velocityX = 0;
  f1.velocityY = 0;
}

}
function hit(f1,bc) {
  bc.remove();
  placar= placar + 1;
  console.log(placar);
}





// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
