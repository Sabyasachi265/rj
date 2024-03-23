img = "";
noseX = 0;
noseY = 0;
pingX = 325;
pongY = 300;

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(pingpong);
    video = createCapture(VIDEO);
  	video.size(600,400);

  poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

}

function draw() {
  background(220);
  if(noseX < 300 && marioX >= 0)
  { 
    pingX = pongX - 1;
  }

  if(noseX > 300)
  {
    pingX = pongX + 1;
  }

  
  image(img,pingX, pongY, 40,70);
}

function modelLoaded() {
	console.log('Model Loaded!');
  }

  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	  console.log("noseX = " + noseX +", noseY = " + noseY);
	}
  }
