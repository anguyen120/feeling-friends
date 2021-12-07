(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"FeelingFriends_Neutral_atlas_1", frames: [[0,0,1661,2022]]},
		{name:"FeelingFriends_Neutral_atlas_2", frames: [[0,0,1208,1023],[1210,0,588,1450],[0,1025,1208,1023]]},
		{name:"FeelingFriends_Neutral_atlas_3", frames: [[568,0,604,954],[0,0,566,1086],[584,1308,226,167],[917,1748,906,208],[0,1658,915,350],[584,956,915,350],[1174,795,408,157],[0,1088,582,568],[917,1308,528,438],[1174,0,613,793]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Body_ArmLower_Back = function() {
	this.initialize(ss["FeelingFriends_Neutral_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Body_ArmUpper = function() {
	this.initialize(ss["FeelingFriends_Neutral_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Body_Base = function() {
	this.initialize(ss["FeelingFriends_Neutral_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Body_Face_Base = function() {
	this.initialize(ss["FeelingFriends_Neutral_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Body_Face_Eyebrow = function() {
	this.initialize(ss["FeelingFriends_Neutral_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Body_Face_EyesClosed = function() {
	this.initialize(ss["FeelingFriends_Neutral_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Body_Face_EyesOpen_Base = function() {
	this.initialize(ss["FeelingFriends_Neutral_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Body_Face_EyesOpen_Pupils = function() {
	this.initialize(ss["FeelingFriends_Neutral_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Body_Face_MouthClosed = function() {
	this.initialize(ss["FeelingFriends_Neutral_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Body_Face_Whiskers = function() {
	this.initialize(ss["FeelingFriends_Neutral_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Body_Leg = function() {
	this.initialize(ss["FeelingFriends_Neutral_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Body_Tail = function() {
	this.initialize(ss["FeelingFriends_Neutral_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Feelings_FriendsLogo = function() {
	this.initialize(ss["FeelingFriends_Neutral_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.StarterScreenBackground = function() {
	this.initialize(ss["FeelingFriends_Neutral_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.WaitingScreenText1 = function() {
	this.initialize(img.WaitingScreenText1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2034,2122);


(lib.Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Feelings_FriendsLogo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,528,438);


(lib.Body_Tail_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Body_Tail();
	this.instance.setTransform(0,0,0.4875,0.4875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,588.9,498.7);


(lib.Body_LArm_Top = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Body_ArmUpper();
	this.instance.setTransform(10.2,0,0.4288,0.4288,1.258);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252.9,471);


(lib.Body_LArm_Bottom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Body_ArmLower_Back();
	this.instance.setTransform(0,63.8,0.4449,0.4449,-13.7365);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,361.9,476.1);


(lib.Body_Face_Whiskers_R = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Body_Face_Whiskers();
	this.instance.setTransform(248.5,0,0.4269,0.4269,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.5,242.5);


(lib.Body_Face_Whiskers_L = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Body_Face_Whiskers();
	this.instance.setTransform(0,0,0.4269,0.4269);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.5,242.5);


(lib.Body_Face_MouthClosed_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Body_Face_MouthClosed();
	this.instance.setTransform(0,0,0.4275,0.4275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,174.5,67.1);


(lib.Body_Face_EyesOpen_Pupils_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Body_Face_EyesOpen_Pupils();
	this.instance.setTransform(0,0,0.4444,0.4444);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,406.6,155.6);


(lib.Body_Face_EyesOpen_Base_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Body_Face_EyesOpen_Base();
	this.instance.setTransform(0,0,0.4089,0.4089);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,374.2,143.2);


(lib.Body_Face_EyesClosed_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Body_Face_EyesClosed();
	this.instance.setTransform(0,0,0.403,0.403);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,365.1,83.8);


(lib.Body_Face_Eyebrow_R = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Body_Face_Eyebrow();
	this.instance.setTransform(106.6,0,0.4718,0.4718,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.6,78.8);


(lib.Body_Face_Eyebrow_L = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Body_Face_Eyebrow();
	this.instance.setTransform(0,0,0.4718,0.4718);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.6,78.8);


(lib.Body_Face_Base_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Body_Face_Base();
	this.instance.setTransform(0,0,0.4172,0.4172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,504,426.8);


(lib.Body_Base_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Body_Base();
	this.instance.setTransform(0,0,0.4393,0.4393);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,729.7,888.3);


(lib.Body_Arm_R_Top = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Body_ArmUpper();
	this.instance.setTransform(241.05,0,0.4288,0.4288,0,-6.7148,173.2852);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,295.5,490.9);


(lib.Body_Arm_R_Bottom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Body_ArmLower_Back();
	this.instance.setTransform(327.1,38.7,0.4449,0.4449,0,8.2815,-171.7184);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,327.1,458.8);


// stage content:
(lib.FeelingFriends_Neutral = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Logo
	this.instance = new lib.Logo("synched",0);
	this.instance.setTransform(920.25,1338.45,0.5975,0.5975,0,0,0,264,219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(210));

	// Text
	this.instance_1 = new lib.WaitingScreenText1();
	this.instance_1.setTransform(26,1341,0.5062,0.5062);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(210));

	// R_Eyebrow
	this.instance_2 = new lib.Body_Face_Eyebrow_R("synched",0);
	this.instance_2.setTransform(458.3,240.4,1,1,0,0,0,53.3,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-5.7167,x:421.8,y:226.2},13).wait(66).to({startPosition:0},0).to({rotation:-2.2484,x:436.4,y:226.5},12).wait(28).to({startPosition:0},0).to({rotation:0,x:458.3,y:240.4},9).wait(82));

	// L_Eyebrow
	this.instance_3 = new lib.Body_Face_Eyebrow_L("synched",0);
	this.instance_3.setTransform(323.3,240.4,1,1,0,0,0,53.3,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:53.4,rotation:-5.7167,x:287.55,y:243.65},13).wait(66).to({startPosition:0},0).to({rotation:-2.2484,x:301.3,y:227.8},12).wait(28).to({startPosition:0},0).to({regX:53.3,rotation:0,x:323.3,y:240.4},9).wait(82));

	// R_Whiskers
	this.instance_4 = new lib.Body_Face_Whiskers_R("synched",0);
	this.instance_4.setTransform(658.2,547.2,1,1,0,0,0,124.2,121.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:124.3,regY:121.5,rotation:-27.6975,x:668.15,y:477.75},13).wait(66).to({startPosition:0},0).to({regX:124.4,rotation:-9.2298,x:659.2,y:516.5},12).wait(28).to({rotation:-9.2298},0).to({regX:124.2,regY:121.2,rotation:0,x:658.2,y:547.2},9).wait(82));

	// L_Whiskers
	this.instance_5 = new lib.Body_Face_Whiskers_L("synched",0);
	this.instance_5.setTransform(132.2,547.2,1,1,0,0,0,124.2,121.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:121.3,rotation:-20.722,x:171.95,y:622.3},13).wait(66).to({startPosition:0},0).to({regX:124.3,rotation:-2.2545,x:123.15,y:570.8},12).wait(28).to({startPosition:0},0).to({regX:124.2,regY:121.2,rotation:0,x:132.2,y:547.2},9).wait(82));

	// Mouth
	this.instance_6 = new lib.Body_Face_MouthClosed_1("synched",0);
	this.instance_6.setTransform(397.2,481.5,1,1,0,0,0,87.2,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:33.6,rotation:-5.7167,x:385,y:482.25},13).wait(66).to({startPosition:0},0).to({rotation:-2.2484,x:384.15,y:479.85},12).wait(28).to({startPosition:0},0).to({regY:33.5,rotation:0,x:397.2,y:481.5},9).wait(82));

	// Eyes_Pupils
	this.instance_7 = new lib.Body_Face_EyesOpen_Pupils_1("synched",0);
	this.instance_7.setTransform(396.3,390.8,1,1,0,0,0,203.3,77.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-5.7167,x:373.1,y:392},9).to({_off:true},30).wait(5).to({_off:false},0).wait(37).to({startPosition:0},0).to({rotation:-2.2484,x:393.7,y:377.55},8).wait(34).to({startPosition:0},0).to({x:377.7},7).wait(8).to({startPosition:0},0).to({rotation:0,x:396.3,y:390.8},13).to({_off:true},16).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).wait(28));

	// Eyes_Base
	this.instance_8 = new lib.Body_Face_EyesOpen_Base_1("synched",0);
	this.instance_8.setTransform(394.1,384.5,1,1,0,0,0,187.1,71.5);

	this.instance_9 = new lib.Body_Face_EyesClosed_1("synched",0);
	this.instance_9.setTransform(374.35,408.05,1,1,-5.7167,0,0,187.2,71.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_8}]},13).to({state:[{t:this.instance_9,p:{regX:187.2,regY:71.6,rotation:-5.7167,x:374.35,y:408.05}}]},26).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_8}]},35).to({state:[{t:this.instance_8}]},12).to({state:[{t:this.instance_8}]},28).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_9,p:{regX:182.6,regY:41.9,rotation:0,x:392.6,y:386.9}}]},39).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_9,p:{regX:182.6,regY:41.9,rotation:0,x:392.6,y:386.9}}]},5).to({state:[{t:this.instance_8}]},5).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:187.2,regY:71.6,rotation:-5.7167,x:372.35,y:386.05},13).to({_off:true},26).wait(5).to({_off:false},0).wait(35).to({startPosition:0},0).to({rotation:-2.2484,x:377.35,y:383.1},12).wait(28).to({startPosition:0},0).to({regX:187.1,regY:71.5,rotation:0,x:394.1,y:384.5},9).to({_off:true},39).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).wait(28));

	// Head_Base
	this.instance_10 = new lib.Body_Face_Base_1("synched",0);
	this.instance_10.setTransform(398,390.4,1,1,0,0,0,252,213.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-5.7167,x:376.75,y:391.45},13).wait(66).to({startPosition:0},0).to({regY:213.5,rotation:-2.2484,x:381.45,y:388.85},12).wait(28).to({startPosition:0},0).to({regY:213.4,rotation:0,x:398,y:390.4},9).wait(82));

	// R_ArmBottom_copy
	this.instance_11 = new lib.Body_Arm_R_Bottom("synched",0);
	this.instance_11.setTransform(494.7,1008.9,1,1,0,0,0,163.6,229.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({startPosition:0},0).wait(65).to({startPosition:0},0).to({regY:229.4,rotation:5.8152,x:552.5,y:985.35},22).wait(46).to({startPosition:0},0).to({regY:229.3,rotation:0,x:494.7,y:1008.9},11).wait(52));

	// R_ArmTop_copy
	this.instance_12 = new lib.Body_Arm_R_Top("synched",0);
	this.instance_12.setTransform(598.5,780.65,1,1,0,0,0,147.8,245.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({startPosition:0},0).wait(65).to({startPosition:0},0).to({regY:245.6,rotation:-9.1823,x:626.55,y:751.45},18).wait(50).to({startPosition:0},0).to({regY:245.5,rotation:0,x:598.5,y:780.65},11).wait(52));

	// L_ArmBottom
	this.instance_13 = new lib.Body_ArmLower_Back();
	this.instance_13.setTransform(191.65,858.15,0.4449,0.4449,-13.7365);

	this.instance_14 = new lib.Body_LArm_Bottom("synched",0);
	this.instance_14.setTransform(372.55,1032.45,1,1,0,0,0,180.9,238.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_14}]},14).to({state:[{t:this.instance_14}]},65).to({state:[{t:this.instance_14}]},22).to({state:[{t:this.instance_14}]},46).to({state:[{t:this.instance_14}]},11).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(14).to({_off:false},0).wait(65).to({startPosition:0},0).to({regX:181,rotation:1.2827,x:374.6,y:1045.95},22).wait(46).to({startPosition:0},0).to({regX:180.9,rotation:0,x:372.55,y:1032.45},11).wait(52));

	// L_ArmTop
	this.instance_15 = new lib.Body_ArmUpper();
	this.instance_15.setTransform(134.3,573.6,0.4288,0.4288,1.258);

	this.instance_16 = new lib.Body_LArm_Top("synched",0);
	this.instance_16.setTransform(250.5,809.1,1,1,0,0,0,126.4,235.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_16}]},14).to({state:[{t:this.instance_16}]},65).to({state:[{t:this.instance_16}]},18).to({state:[{t:this.instance_16}]},50).to({state:[{t:this.instance_16}]},11).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(14).to({_off:false},0).wait(65).to({startPosition:0},0).to({regX:126.5,rotation:1.2827,x:257.55,y:820},18).wait(50).to({startPosition:0},0).to({regX:126.4,rotation:0,x:250.5,y:809.1},11).wait(52));

	// Body
	this.instance_17 = new lib.Body_Base();
	this.instance_17.setTransform(158,465,0.4393,0.4393);

	this.instance_18 = new lib.Body_Base_1("synched",0);
	this.instance_18.setTransform(522.9,909.1,1,1,0,0,0,364.9,444.1);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17}]}).to({state:[{t:this.instance_18}]},14).to({state:[{t:this.instance_18}]},65).to({state:[{t:this.instance_18}]},18).to({state:[{t:this.instance_18}]},50).to({state:[{t:this.instance_18}]},11).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(14).to({_off:false},0).wait(65).to({startPosition:0},0).to({rotation:-4.7167,x:570.05,y:895.95},18).wait(50).to({startPosition:0},0).to({rotation:0,x:522.9,y:909.1},11).wait(52));

	// R_Leg
	this.instance_19 = new lib.Body_Leg();
	this.instance_19.setTransform(701.95,1055,0.3996,0.3996,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(210));

	// L_Leg
	this.instance_20 = new lib.Body_Leg();
	this.instance_20.setTransform(258,1055,0.3996,0.3996);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(210));

	// Tail
	this.instance_21 = new lib.Body_Tail();
	this.instance_21.setTransform(467,872,0.4875,0.4875);

	this.instance_22 = new lib.Body_Tail_1("synched",0);
	this.instance_22.setTransform(761.4,1121.3,1,1,0,0,0,294.4,249.3);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21}]}).to({state:[{t:this.instance_22}]},14).to({state:[{t:this.instance_22}]},20).to({state:[{t:this.instance_22}]},4).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_22}]},36).to({state:[{t:this.instance_22}]},16).to({state:[{t:this.instance_22}]},11).to({state:[{t:this.instance_22}]},4).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_22}]},27).to({state:[{t:this.instance_22}]},11).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(14).to({_off:false},0).wait(20).to({startPosition:0},0).to({regX:294.5,regY:249.4,rotation:-6.9526,x:761.55,y:1113.4},4).to({regX:294.4,regY:249.3,rotation:0,x:761.4,y:1121.3},3).to({regX:294.5,regY:249.4,rotation:-6.9526,x:761.55,y:1113.4},3).to({regX:294.4,regY:249.3,rotation:0,x:761.4,y:1121.3},3).wait(36).to({startPosition:0},0).to({regX:294.5,rotation:-8.4533,x:801.5,y:1105.3},16).wait(11).to({startPosition:0},0).to({regX:294.6,regY:249.4,rotation:6.5451,x:801.65,y:1105.35},4).to({regX:294.5,regY:249.3,rotation:-8.4533,x:801.5,y:1105.3},3).to({regX:294.6,regY:249.4,rotation:6.5451,x:801.65,y:1105.35},3).wait(27).to({startPosition:0},0).to({regX:294.4,regY:249.3,rotation:0,x:761.4,y:1121.3},11).wait(52));

	// Background2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,102,0.149)").s().p("EhLACFyMAAAkLjMCWBAAAMAAAELjg");
	this.shape.setTransform(544.2,924.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(210));

	// Background
	this.instance_23 = new lib.StarterScreenBackground();
	this.instance_23.setTransform(0,0,1.7886,2.465);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(210));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(534.2,960,595.0999999999999,1455.1999999999998);
// library properties:
lib.properties = {
	id: 'EAE122DDC70D4B8198BB05F620676744',
	width: 1080,
	height: 1920,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/WaitingScreenText1.png", id:"WaitingScreenText1"},
		{src:"images/FeelingFriends_Neutral_atlas_1.png", id:"FeelingFriends_Neutral_atlas_1"},
		{src:"images/FeelingFriends_Neutral_atlas_2.png", id:"FeelingFriends_Neutral_atlas_2"},
		{src:"images/FeelingFriends_Neutral_atlas_3.png", id:"FeelingFriends_Neutral_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['EAE122DDC70D4B8198BB05F620676744'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;