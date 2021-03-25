//declare all variables first

let groundHeight;
let mountain1;
let mountain2;

let tree;

let moon;
let sun;
let darkness;
let flight;

function setup() {
	createCanvas(800, 600);
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;

	//initalise the mountain objects with properties to help draw them to the canvas
	mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
	};
	mountain2 = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 230
	};

	//initalise the tree object
	tree = {
		x: 150,
		y: groundHeight + 20,
		trunkWidth: 40,
		trunkHeight: 150,
		canopyWidth: 120,
		canopyHeight: 100
	};

	//initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 80,
	};

	//TASK: intialise a moon object with an extra property for brightness
	moon = {
		x: 650,
		y: 60,
		diameter: 70,
		brightness: 0,
	}

	//set the initial darkness
	darkness = 0;

	//sets Bird flight
	flight = mouseX * 5;
}



function draw() {
	//TASK: update the values for the moons brightness, the sun's position and the darkness.

	//creates sun motion downward
	sun.y = max(mouseX, 75);
	// creates moon transition down
	moon.y = min(mouseX - width / 3, 60);
	// controls the alpha for moon's opacity 
	moon.brigtness = mouseX - 175;
	// controls the darkness of scene (color of rectangle) - never exceeds 160
	darkness = min(mouseX - width / 2.2, 160);

	//initialize flight pattern
	flight = mouseX * 4;

	//draw the sky
	background(150, 200, 255);
	noStroke();

	//draw the sun
	fill(255, 255, 0);
	ellipse(sun.x, sun.y, sun.diameter);


	//draw the ground and make it green
	fill(70, 200, 0);
	rect(0, groundHeight, width, height - groundHeight);

	//draw the mountains
	fill(120);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);

	//TASK: You can draw the tree yourself

	// Tree Trunk
	fill(210, 105, 30);
	rect(tree.x, tree.y - tree.trunkHeight, tree.trunkWidth, tree.trunkHeight);
	//Canopy
	fill(60, 190, 0);
	ellipse(tree.x + tree.trunkWidth / 2, tree.y - tree.trunkHeight, tree.canopyWidth, tree.canopyHeight);

	//ADDING SOME BIRDS

	fill(0);
	ellipse(min(300, width - flight), 85, 25, 7);
	ellipse(min(350, width - flight + 15), 110, 25, 7);
	ellipse(min(600, width - flight + 40), 85, 25, 7);
	ellipse(min(750, width - flight + 60), 110, 25, 7);

	//TASK: make the scene dark by drawing a rectangle that covers the whole canvas.
	//Use the alpha value of fill to determine how dark to make it. darkness = min(160, mouseX- width /2.2)
	fill(0, 0, 0, darkness);
	rect(0, 0, width, height);


	//TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour
	//Moon fill, gets brighter as cursor moves across the screen
	fill(255, 255, 255, moon.brigtness);
	//moon slides down the screen when sun sets
	ellipse(moon.x, moon.y, moon.diameter);

	//NORTH STAR SHAPE. TWINKLE & LARGER 
	stroke(255, 255, 255, moon.brigtness);
	strokeWeight(random(5, 10, 15));
	beginShape(POINTS);
	vertex(25, 45);
	vertex(35, 70);
	vertex(45, 45);
	vertex(70, 35);
	vertex(45, 27);
	vertex(35, 5);
	vertex(25, 27);
	vertex(5, 35);
	endShape();
	//LITTLE SCATTERED STARS
	stroke(255, 255, 255, moon.brigtness);
	strokeWeight(random(2, 4, 8));
	point(100, 90);
	point(150, 60);
	point(400, 90);
	point(600, 60);
	point(775, 90);
	point(500, 60);
	point(350, 90);
	point(450, 60);
}