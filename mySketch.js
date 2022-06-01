var bgColor ="black"
var randomValue =0
var radioElement
function setup() {

	createCanvas(windowWidth, windowHeight);
	background(100);
	inputElement =createInput("410730658")
	inputElement.position(50,50)
	sliderElement= createSlider(10,50,20,0.01)
	sliderElement.position(50,100)
	
	btnElement =createButton("瘋狂")
	btnElement.mousePressed(goCrazy)
	btnElement.position(250,100)
	btnElement.style("border-color",'blue')
	btnElement.style("border-width",'8px')
	btnElement.style("color",'green')
	btnElement.style("font-size",'15px')
	
	colorPicker = createColorPicker('#ed225d');
  colorPicker.position(350, 100);
	
	radioElement=createRadio();
	radioElement.position(50, 200);
	radioElement.option("一般")
	radioElement.option("旋轉(rotate)")
	radioElement.option("大小(scale)")
	radioElement.style("background-color",'white')//設定為CSS格式
	
}

function goCrazy() {
 if(randomValue>0){
	 randomValue=0
	 
 }
	else
	{
		randomValue=10
		
	}
}

function draw() {
	background(bgColor)
	fill(255)
	textSize(50)
	textStyle(BOLD)
	var txts = inputElement.value();
	var txts = inputElement.value();
	if(txts=="dog"){
		txts="🐶"
	}
	textSize(sliderElement.value())
  var textLength = textWidth(txts)+10
	var mode = radioElement.value()
	for(var j=0;j<height;j+=60){
		push()
		if (int(j/60)%2==0){
			fill(colorPicker.value())
			translate(-50,0)
		}
		else
		{
			fill(255)
		}
		for(var i=0;i<width;i+=textLength){
			push()			
				translate(i+random(-randomValue,randomValue),j+random(-randomValue,randomValue))
				if(mode=="旋轉(rotate)"){
					// rotate(PI/4)
					// rotate(sin(frameCount/20))
					// rotate(sin(frameCount/20)+j/10)
                    rotate(sin(frameCount/20+j/10))
				}else if(mode=="大小(scale)"){
					scale(sin(frameCount/20+j/10)+1)
				}
				text(txts,0,0)		
			pop()
		}
		pop()
	}
}