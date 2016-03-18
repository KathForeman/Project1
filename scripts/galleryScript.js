

//***  Thumbnail Navigation  *****

 i=0;
 position=0;
$('#eyred').click(function() {
position=1;
if($('#mainImage').attr('src')!='images/viewer/Early_Years_Red_Belt.jpg'){
	$('#mainImage').attr('src',"images/viewer/Early_Years_Red_Belt.jpg").hide().fadeIn(2000);
}
});

$('#eyspar').click(function() {
position=2;
if($('#mainImage').attr('src')!='images/viewer/Early_Years_BB_Sparring.jpg'){
	$('#mainImage').attr('src',"images/viewer/Early_Years_BB_Sparring.jpg").hide().fadeIn(2000);
}
});


$('#eybb').click(function() {
position=3;
if($('#mainImage').attr('src')!='images/viewer/Early_Years_BB_Achieved.jpg'){
	$('#mainImage').attr('src',"images/viewer/Early_Years_BB_Achieved.jpg").hide().fadeIn(2000);
}
});

$('#eycomp').click(function() {
position=4;
if($('#mainImage').attr('src')!='images/viewer/Early_Years_Competition.jpg'){
	$('#mainImage').attr('src',"images/viewer/Early_Years_Competition.jpg").hide().fadeIn(2000);
}
});

$('#mydemo').click(function() {
position=5;
if($('#mainImage').attr('src')!='images/viewer/Middle_Years_Demo_Team.jpg'){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Demo_Team.jpg").hide().fadeIn(2000);
}
});

$('#mytrip').click(function() {
position=6;
if($('#mainImage').attr('src')!='images/viewer/Middle_Years_Korea_Trip_01.jpg'){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Korea_Trip_01.jpg").hide().fadeIn(2000);
}
});

$('#mygroup').click(function() {
position=7;
if($('#mainImage').attr('src')!='images/viewer/Middle_Years_Korea_Sippahlki_Group.jpg'){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Korea_Sippahlki_Group.jpg").hide().fadeIn(2000);
}
});

$('#mybcomp').click(function() {
position=8;
if($('#mainImage').attr('src')!='images/viewer/Middle_Years_Bridgeport_Competition.jpg'){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Bridgeport_Competition.jpg").hide().fadeIn(2000);
}
});

$('#mytest').click(function() {
position=9;
if($('#mainImage').attr('src')!='images/viewer/Middle_Years_2nd_Dan_Test.jpg'){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_2nd_Dan_Test.jpg").hide().fadeIn(2000);
}
});

$('#myicomp').click(function() {
position=10;
if($('#mainImage').attr('src')!='images/viewer/Middle_Years_Interschool_Competition.jpg'){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Interschool_Competition.jpg").hide().fadeIn(2000);
}
});

$('#mytrain').click(function() {
position=11;
if($('#mainImage').attr('src')!='images/viewer/Middle_Years_Korea_Training_2010.jpg'){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Korea_Training_2010.jpg").hide().fadeIn(2000);
}
});

$('#eyred a:first').click();

//***  Next Button Navigation  ****

$('#next').click(function(){
if (position==1){
	$('#mainImage').attr('src',"images/viewer/Early_Years_BB_Sparring.jpg").hide().fadeIn(2000);
	position=2;
}else
if (position==2){
	$('#mainImage').attr('src',"images/viewer/Early_Years_BB_Achieved.jpg").hide().fadeIn(2000);
	position=3;
}else
if (position==3){
	$('#mainImage').attr('src',"images/viewer/Early_Years_Competition.jpg").hide().fadeIn(2000);
	position=4;
}else
if (position==4){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Demo_Team.jpg").hide().fadeIn(2000);
	position=5;
}else
if (position==5){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Korea_Trip_01.jpg").hide().fadeIn(2000);
	position=6;
}else
if (position==6){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Korea_Sippahlki_Group.jpg").hide().fadeIn(2000);
	position=7;
}else
if (position==7){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Bridgeport_Competition.jpg").hide().fadeIn(2000);
	position=8;
}else
if (position==8){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_2nd_Dan_Test.jpg").hide().fadeIn(2000);
	position=9;
}else
if (position==9){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Interschool_Competition.jpg").hide().fadeIn(2000);
	position=10;
}else
if (position==10){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Korea_Training_2010.jpg").hide().fadeIn(2000);
	position=11;
	}else
if (position==11){
	$('#mainImage').attr('src',"images/viewer/Early_Years_Red_Belt.jpg").hide().fadeIn(2000);
	position=1;
}
});

//*** Back Button Navigation  *****

$('#back').click(function(){
if (position==1){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Korea_Training_2010.jpg").hide().fadeIn(2000);
	position=11;
}else
if (position==2){
	$('#mainImage').attr('src',"images/viewer/Early_Years_Red_Belt.jpg").hide().fadeIn(2000);
	position=1;
}else
if (position==3){
	$('#mainImage').attr('src',"images/viewer/Early_Years_BB_Sparring.jpg").hide().fadeIn(2000);
	position=2;
}else
if (position==4){
	$('#mainImage').attr('src',"images/viewer/Early_Years_BB_Achieved.jpg").hide().fadeIn(2000);
	position=3;
}else
if (position==5){
	$('#mainImage').attr('src',"images/viewer/Early_Years_Competition.jpg").hide().fadeIn(2000);
	position=4;
}else
if (position==6){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Demo_Team.jpg").hide().fadeIn(2000);
	position=5;
}else
if (position==7){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Korea_Trip_01.jpg").hide().fadeIn(2000);
	position=6;
}else
if (position==8){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Korea_Sippahlki_Group.jpg").hide().fadeIn(2000);
	position=7;
}else
if (position==9){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Bridgeport_Competition.jpg").hide().fadeIn(2000);
	position=8;
}else
if (position==10){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_2nd_Dan_Test.jpg").hide().fadeIn(2000);
	position=9;
}else
if (position==11){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Interschool_Competition.jpg").hide().fadeIn(2000);
	position=10;
}
});

//***  Next Arrow Navigation  *****

$('#btnNext').click(function(){
if (position==1){
	$('#mainImage').attr('src',"images/viewer/Early_Years_BB_Sparring.jpg").hide().fadeIn(2000);
	position=2;
}else
if (position==2){
	$('#mainImage').attr('src',"images/viewer/Early_Years_BB_Achieved.jpg").hide().fadeIn(2000);
	position=3;
}else
if (position==3){
	$('#mainImage').attr('src',"images/viewer/Early_Years_Competition.jpg").hide().fadeIn(2000);
	position=4;
}else
if (position==4){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Demo_Team.jpg").hide().fadeIn(2000);
	position=5;
}else
if (position==5){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Korea_Trip_01.jpg").hide().fadeIn(2000);
	position=6;
}else
if (position==6){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Korea_Sippahlki_Group.jpg").hide().fadeIn(2000);
	position=7;
}else
if (position==7){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Bridgeport_Competition.jpg").hide().fadeIn(2000);
	position=8;
}else
if (position==8){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_2nd_Dan_Test.jpg").hide().fadeIn(2000);
	position=9;
}else
if (position==9){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Interschool_Competition.jpg").hide().fadeIn(2000);
	position=10;
}else
if (position==10){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Korea_Training_2010.jpg").hide().fadeIn(2000);
	position=11;
}else
if (position==11){
	$('#mainImage').attr('src',"images/viewer/Early_Years_Red_Belt.jpg").hide().fadeIn(2000);
	position=1;
}
});
//***  Back Arrow nagivation  *******

$('#btnBack').click(function(){
if (position==1){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Korea_Training_2010.jpg").hide().fadeIn(2000);
	position=9;
}else
if (position==2){
	$('#mainImage').attr('src',"images/viewer/Early_Years_Red_Belt.jpg").hide().fadeIn(2000);
	position=1;
}else
if (position==3){
	$('#mainImage').attr('src',"images/viewer/Early_Years_BB_Sparring.jpg").hide().fadeIn(2000);
	position=2;
}else
if (position==4){
	$('#mainImage').attr('src',"images/viewer/Early_Years_BB_Achieved.jpg").hide().fadeIn(2000);
	position=3;
}else
if (position==5){
	$('#mainImage').attr('src',"images/viewer/Early_Years_Competition.jpg").hide().fadeIn(2000);
	position=4;
}else
if (position==6){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Demo_Team.jpg").hide().fadeIn(2000);
	position=5;
}else
if (position==7){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Korea_Trip_01.jpg").hide().fadeIn(2000);
	position=6;
}else
if (position==8){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Korea_Sippahlki_Group.jpg").hide().fadeIn(2000);
	position=7;
}else
if (position==9){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Bridgeport_Competition.jpg").hide().fadeIn(2000);
	position=8;
}else
if (position==10){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_2nd_Dan_Test.jpg").hide().fadeIn(2000);
	position=9;
}else
if (position==11){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Interschool_Competition.jpg").hide().fadeIn(2000);
	position=10;
}
});

//*** Play Slideshow Function  ****

function play(){
window.status=i=i+1;
if (position==1){
	$('#mainImage').attr('src',"images/viewer/Early_Years_BB_Sparring.jpg").hide().fadeIn(2000);
	position=2;
}else
if (position==2){
	$('#mainImage').attr('src',"images/viewer/Early_Years_BB_Achieved.jpg").hide().fadeIn(2000);
	position=3;
}else
if (position==3){
	$('#mainImage').attr('src',"images/viewer/Early_Years_Competition.jpg").hide().fadeIn(2000);
	position=4;
}else
if (position==4){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Demo_Team.jpg").hide().fadeIn(2000);
	position=5;
}else
if (position==5){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Korea_Trip_01.jpg").hide().fadeIn(2000);
	position=6;
}else
if (position==6){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Korea_Sippahlki_Group.jpg").hide().fadeIn(2000);
	position=7;
}else
if (position==7){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Bridgeport_Competition.jpg").hide().fadeIn(2000);
	position=8;
}else
if (position==8){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_2nd_Dan_Test.jpg").hide().fadeIn(2000);
	position=9;
}else
if (position==9){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Interschool_Competition.jpg").hide().fadeIn(2000);
	position=10;
}else
if (position==10){
	$('#mainImage').attr('src',"images/viewer/Middle_Years_Korea_Training_2010.jpg").hide().fadeIn(2000);
	position=11;
}else
if (position==11){
	$('#mainImage').attr('src',"images/viewer/Early_Years_Red_Belt.jpg").hide().fadeIn(2000);
	position=1;
}
}; //end play



