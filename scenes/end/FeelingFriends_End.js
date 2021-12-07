(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"FeelingFriends_End_atlas_1", frames: [[0,0,1661,2022]]},
		{name:"FeelingFriends_End_atlas_2", frames: [[0,0,1208,1023],[1210,0,588,1450],[0,1025,1208,1023]]},
		{name:"FeelingFriends_End_atlas_3", frames: [[568,0,582,951],[0,0,566,1086],[584,1305,226,167],[917,1745,906,208],[0,1658,915,350],[584,953,915,350],[1501,795,412,271],[0,1088,582,568],[917,1305,528,438],[1152,0,613,793]]}
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



(lib.Body_ArmLower_Front = function() {
	this.initialize(ss["FeelingFriends_End_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Body_ArmUpper = function() {
	this.initialize(ss["FeelingFriends_End_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Body_Base = function() {
	this.initialize(ss["FeelingFriends_End_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Body_Face_Base = function() {
	this.initialize(ss["FeelingFriends_End_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Body_Face_Eyebrow = function() {
	this.initialize(ss["FeelingFriends_End_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Body_Face_EyesClosed = function() {
	this.initialize(ss["FeelingFriends_End_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Body_Face_EyesOpen_Base = function() {
	this.initialize(ss["FeelingFriends_End_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Body_Face_EyesOpen_Pupils = function() {
	this.initialize(ss["FeelingFriends_End_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Body_Face_MouthOpen = function() {
	this.initialize(ss["FeelingFriends_End_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Body_Face_Whiskers = function() {
	this.initialize(ss["FeelingFriends_End_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Body_Leg = function() {
	this.initialize(ss["FeelingFriends_End_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Body_Tail = function() {
	this.initialize(ss["FeelingFriends_End_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.EndScreenText1 = function() {
	this.initialize(img.EndScreenText1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2034,2214);


(lib.EndScreenText2 = function() {
	this.initialize(img.EndScreenText2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2034,2214);


(lib.Feelings_FriendsLogo = function() {
	this.initialize(ss["FeelingFriends_End_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.StarterScreenBackground = function() {
	this.initialize(ss["FeelingFriends_End_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Tail = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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
	this.instance.setTransform(0,0,0.5093,0.5093);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,615.2,521);


(lib.Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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


(lib.legright = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Body_Leg();
	this.instance.setTransform(234.95,0,0.3996,0.3996,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,235,579.4);


(lib.legleft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Body_Leg();
	this.instance.setTransform(0,0,0.3996,0.3996);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,235,579.4);


(lib.endtext2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.EndScreenText2();
	this.instance.setTransform(0,0,0.5062,0.5062);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1029.7,1120.8);


(lib.Body_Face_Whiskers_R = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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
if (loop == null) { loop = false; }
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


(lib.Body_Face_MouthOpen_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Body_Face_MouthOpen();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,412,271);


(lib.Body_Face_EyesOpen_Pupils_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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
if (loop == null) { loop = false; }
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
if (loop == null) { loop = false; }
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
if (loop == null) { loop = false; }
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
if (loop == null) { loop = false; }
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
if (loop == null) { loop = false; }
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


(lib.Body_Arm_R_Top = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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


(lib.Body_Arm_Front = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Body_ArmLower_Front();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,582,951);


(lib.Body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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


// stage content:
(lib.FeelingFriends_End = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// R_Eyebrow
	this.instance = new lib.Body_Face_Eyebrow_R("synched",0);
	this.instance.setTransform(555.05,785.55,1,1,0,0,0,53.3,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({startPosition:0},0).to({rotation:-5.202,x:530.2,y:763.55},4).to({regX:53.4,regY:39.5,rotation:4.794,x:575.15,y:790.7},6).to({regX:53.3,regY:39.4,rotation:-5.202,x:530.2,y:779.55},5).to({rotation:0,x:555.05,y:785.55},5).wait(11).to({startPosition:0},0).to({y:797.55},4).wait(79).to({startPosition:0},0).to({y:865.55},7).to({startPosition:0},1).wait(8).to({x:554.65,y:785.7},0).to({regY:39.5,scaleY:1.0989,x:553.6,y:289.9},5).to({regY:39.4,scaleY:1,y:586.15},6).to({y:1994.15},12).wait(136));

	// L_Eyebrow
	this.instance_1 = new lib.Body_Face_Eyebrow_L("synched",0);
	this.instance_1.setTransform(420.05,785.55,1,1,0,0,0,53.3,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({startPosition:0},0).to({rotation:-5.202,x:395.75,y:775.8},4).to({regX:53.4,regY:39.5,rotation:4.794,x:440.6,y:779.45},6).to({regX:53.3,regY:39.4,rotation:-5.202,x:395.75,y:791.8},5).to({rotation:0,x:420.05,y:785.55},5).wait(11).to({startPosition:0},0).to({y:797.55},4).wait(79).to({startPosition:0},0).to({y:873.55},7).to({startPosition:0},1).wait(8).to({x:419.65,y:797.15},0).to({regY:39.5,scaleY:1.0989,x:418.6,y:311.9},5).to({regY:39.4,scaleY:1,y:606.15},6).to({y:2014.15},12).wait(136));

	// R_Whiskers
	this.instance_2 = new lib.Body_Face_Whiskers_R("synched",0);
	this.instance_2.setTransform(732.55,1076.5,1,1,0,0,0,124.2,121.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({startPosition:0},0).to({regY:121.3,rotation:-20.2008,x:769.4,y:1041.35},4).to({rotation:4.794,x:727.6,y:1095.5},6).to({regY:121.2,rotation:-5.202,x:733.4,y:1053.25},5).to({rotation:0,x:732.55,y:1076.5},5).wait(11).to({startPosition:0},0).to({rotation:-14.9992,x:760.5,y:1068.5},4).wait(79).to({startPosition:0},0).to({y:1116.5},7).to({startPosition:0},1).wait(8).to({regX:124.3,rotation:-10.7131,x:760.25,y:1069.85},0).to({scaleY:1.0989,rotation:0,x:759.15,y:693.1},5).to({scaleY:1.0965,y:915.8},4).to({scaleY:1,y:2281.15},12).wait(138));

	// L_Whiskers
	this.instance_3 = new lib.Body_Face_Whiskers_L("synched",0);
	this.instance_3.setTransform(228.95,1092.35,1,1,0,0,0,124.2,121.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({startPosition:0},0).to({rotation:-20.2008,x:265.3,y:1138.7},4).to({regY:121.3,rotation:4.794,x:224.45,y:1069.25},6).to({regY:121.2,rotation:-5.202,x:233.3,y:1114.7},5).to({rotation:0,x:228.95,y:1092.35},5).wait(11).to({startPosition:0},0).to({regX:124.3,rotation:14.9992,x:217,y:1076.35},4).wait(79).to({startPosition:0},0).to({y:1124.35},7).to({startPosition:0},1).wait(8).to({regX:124.4,regY:121.3,rotation:10.7131,x:220.15,y:1078.95},0).to({scaleY:1.0989,rotation:0,x:227.65,y:706.25},5).to({regY:121.4,scaleY:1.0965,y:928.95},4).to({scaleY:1.0563,y:1497.4},5).to({regY:121.2,scaleY:1,y:2293},7).wait(138));

	// Mouth
	this.instance_4 = new lib.Body_Face_MouthOpen_1("synched",0);
	this.instance_4.setTransform(448,996.7,0.3875,0.3875,0,0,0,87.2,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({startPosition:0},0).to({regY:33.8,rotation:-5.2014,x:442.75,y:999.65},4).to({regX:87.4,regY:33.7,rotation:4.7938,x:450.8,y:992.15},6).to({regX:87.2,regY:33.8,rotation:-5.2014,x:442.75,y:999.65},5).to({regY:33.5,rotation:0,x:448,y:996.7},5).wait(94).to({startPosition:0},0).to({y:1044.7},7).to({startPosition:0},1).wait(8).to({regX:87.4,regY:33.7,x:447.6,y:990.05},0).to({regX:87.2,regY:33.6,scaleY:0.4258,x:446.55,y:583.4},5).to({regY:33.8,scaleY:0.4249,y:806.35},4).to({regY:33.5,scaleY:0.3875,y:2181.3},12).wait(138));

	// Eyes_Pupils
	this.instance_5 = new lib.Body_Face_EyesOpen_Pupils_1("synched",0);
	this.instance_5.setTransform(493.05,935.95,1,1,0,0,0,203.3,77.8);

	this.instance_6 = new lib.Body_Face_EyesClosed_1("synched",0);
	this.instance_6.setTransform(513.05,971.95,1,1,0,0,0,203.3,77.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({startPosition:0},0).to({rotation:-5.202,x:498.1,y:918.95},4).to({regY:77.9,rotation:4.794,x:504.75,y:911.45},6).to({regY:77.8,rotation:-5.202,x:482.1,y:914.95},5).to({rotation:0,x:493.05,y:911.95},5).wait(11).to({startPosition:0},0).to({y:935.95},4).to({_off:true},79).wait(6).to({_off:false,y:983.95},1).to({startPosition:0},1).wait(8).to({x:492.65,y:928.1},0).to({scaleY:1.0989,x:491.6,y:512.25},5).to({y:676.25},3).to({_off:true},1).wait(150));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(125).to({_off:false},0).to({x:515.25,y:1022.6},6).to({_off:true,x:493.05,y:983.95},1).wait(18).to({_off:false,scaleY:1.0966,x:511.6,y:766},0).to({scaleY:1,y:2144.55},12).wait(138));

	// Eyes_Base
	this.instance_7 = new lib.Body_Face_EyesOpen_Base_1("synched",0);
	this.instance_7.setTransform(490.85,929.65,1,1,0,0,0,187.1,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({startPosition:0},0).to({regX:187.2,rotation:-5.202,x:479.5,y:928.9},4).to({rotation:4.794,x:499.15},6).to({rotation:-5.202,x:479.5},5).to({regX:187.1,rotation:0,x:490.85,y:929.65},5).to({_off:true},94).wait(7).to({_off:false,y:977.65},0).to({startPosition:0},1).wait(8).to({x:490.45,y:924.1},0).to({scaleY:1.0989,x:489.4,y:514.1},5).to({y:678.1},3).to({_off:true},1).wait(150));

	// Head_Base
	this.instance_8 = new lib.Body_Face_Base_1("synched",0);
	this.instance_8.setTransform(494.75,935.55,1,1,0,0,0,252,213.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({startPosition:0},0).to({regY:213.5,rotation:-5.202,x:483.75,y:934.5},4).to({rotation:4.794,x:502.4,y:935.15},6).to({rotation:-5.202,x:483.75,y:934.5},5).to({regY:213.4,rotation:0,x:494.75,y:935.55},5).wait(94).to({startPosition:0},0).to({y:983.55},7).to({startPosition:0},1).wait(8).to({x:494.35,y:932.3},0).to({regY:213.5,scaleY:1.0989,x:493.3,y:529.5},5).to({scaleY:1.0966,y:752.5},4).to({regY:213.4,scaleY:1,y:2132.15},12).wait(138));

	// R_ArmBottom_copy
	this.instance_9 = new lib.Body_Arm_Front("synched",0);
	this.instance_9.setTransform(811.65,1380.15,0.4995,0.4995,0,174.5658,-5.4342,163.2,229);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(11).to({startPosition:0},0).to({regX:163.3,regY:228.8,skewX:159.5665,skewY:-20.4335,x:878.75,y:1332.3},4).to({skewX:144.5687,skewY:-35.4313},6).to({scaleX:0.4994,scaleY:0.4994,skewX:174.5688,skewY:-5.4312,x:894.85,y:1332.35},5).to({regY:228.6,skewX:137.3761,skewY:-42.6239,y:1332.5},4).to({regY:228.8,skewX:174.5688,skewY:-5.4312,y:1332.35},4).to({regY:228.6,skewX:137.3761,skewY:-42.6239,y:1332.5},4).to({regY:228.8,skewX:174.5688,skewY:-5.4312,y:1332.35},3).to({scaleX:0.4995,scaleY:0.4995,skewX:159.5665,skewY:-20.4335,x:878.75,y:1332.3},4).wait(80).to({startPosition:0},0).to({regX:163.4,scaleX:0.4994,scaleY:0.4994,skewX:144.5667,skewY:-35.4333,x:843.4,y:1348.05},7).to({startPosition:0},1).wait(8).to({regX:163.3,regY:228.7,skewX:148.8519,skewY:-31.1481,x:853.05,y:1306.05},0).to({regY:228.8,scaleX:0.5058,scaleY:0.5431,skewX:161.2708,skewY:-22.2643,x:877.3,y:965.4},5).to({regY:228.7,scaleX:0.5056,scaleY:0.542,skewX:161.234,skewY:-22.2195,y:1187.55},4).to({regY:228.8,scaleX:0.4995,scaleY:0.4995,skewX:159.5665,skewY:-20.4335,x:897.3,y:2524.9},12).wait(138));

	// R_ArmTop_copy
	this.instance_10 = new lib.Body_Arm_R_Top("synched",0);
	this.instance_10.setTransform(771.3,1287.75,1,1,-29.9992,0,0,147.8,245.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(11).to({startPosition:0},0).to({regY:245.6,rotation:-44.9988,x:815.8,y:1253.5},4).wait(110).to({startPosition:0},0).to({rotation:-29.9993,x:807.85,y:1269.5},7).to({startPosition:0},1).wait(8).to({regY:245.7,scaleX:0.9999,scaleY:0.9999,rotation:-34.2849,x:809.75,y:1227.45},0).to({regY:245.6,scaleX:1.0506,scaleY:1.0506,rotation:0,skewX:-42.3016,skewY:-47.696,x:814.35,y:878.8},5).to({scaleX:1.0494,scaleY:1.0494,skewX:-42.3622,skewY:-47.6355,y:1101.1},4).to({scaleX:1,scaleY:1,rotation:-59.998,skewX:0,skewY:0,x:794.4,y:2466.1},12).wait(138));

	// Body
	this.instance_11 = new lib.Body_Base();
	this.instance_11.setTransform(255,1011,0.4393,0.4393);

	this.instance_12 = new lib.Body("synched",0);
	this.instance_12.setTransform(619.9,1455.1,1,1,0,0,0,364.9,444.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},125).to({state:[{t:this.instance_12}]},7).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},8).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_12}]},12).wait(138));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(125).to({_off:false},0).to({y:1487.1},7).to({startPosition:0},1).wait(8).to({y:1448.25},0).to({regY:444.2,scaleY:1.0989,y:1098.5},5).to({scaleY:1.0966,y:1320.25},4).to({regY:444.1,scaleY:1,y:2759.1},12).wait(138));

	// R_Leg
	this.instance_13 = new lib.Body_Leg();
	this.instance_13.setTransform(798.95,1601,0.3996,0.3996,0,0,180);

	this.instance_14 = new lib.legright("synched",0);
	this.instance_14.setTransform(681.5,1890.7,1,1,0,0,0,117.5,289.7);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_14}]},125).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},8).to({state:[{t:this.instance_14}]},5).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_14}]},12).wait(138));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(125).to({_off:false},0).to({regY:289.8,rotation:-14.9992,x:693.5,y:1890.75},7).to({startPosition:0},1).wait(8).to({rotation:-6.4273,x:681,y:1858.75},0).to({scaleX:1.0069,scaleY:1.0925,rotation:0,skewX:13.7028,skewY:16.4058,x:649.5,y:1600.35},5).to({scaleX:1.0068,scaleY:1.0904,skewX:13.7305,skewY:16.3724,y:1821.15},4).to({regY:289.7,scaleX:1,scaleY:1,rotation:14.9992,skewX:0,skewY:0,x:649.55,y:3186.65},12).wait(138));

	// L_Leg
	this.instance_15 = new lib.Body_Leg();
	this.instance_15.setTransform(355,1601,0.3996,0.3996);

	this.instance_16 = new lib.legleft("synched",0);
	this.instance_16.setTransform(472.5,1890.7,1,1,0,0,0,117.5,289.7);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_16}]},125).to({state:[{t:this.instance_16}]},7).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},8).to({state:[{t:this.instance_16}]},5).to({state:[{t:this.instance_16}]},4).to({state:[{t:this.instance_16}]},12).wait(138));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(125).to({_off:false},0).to({rotation:14.9992,x:456.5,y:1890.65},7).to({startPosition:0},1).wait(8).to({rotation:6.4273,x:462.2,y:1858.65},0).to({regY:289.9,scaleX:1.0069,scaleY:1.0925,rotation:0,skewX:-13.7028,skewY:-16.4058,x:476.55,y:1600.45},5).to({scaleX:1.0068,scaleY:1.0904,skewX:-13.7305,skewY:-16.3724,y:1821.2},4).to({regY:289.8,scaleX:1,scaleY:1,rotation:-14.9992,skewX:0,skewY:0,y:3186.75},12).wait(138));

	// Tail
	this.instance_17 = new lib.Tail("synched",0);
	this.instance_17.setTransform(840.6,1659.5,1,1,0,0,0,307.6,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(63).to({startPosition:0},0).to({rotation:14.9992,y:1659.45},4).to({regX:307.7,regY:260.6,rotation:0,x:840.7,y:1647.55},5).to({regX:307.6,regY:260.5,rotation:14.9992,x:840.6,y:1659.45},5).to({regX:307.7,regY:260.6,rotation:0,x:840.7,y:1647.55},5).wait(43).to({startPosition:0},0).to({rotation:-7.7126,x:840.65},7).to({startPosition:0},1).wait(8).to({rotation:-5.5087,x:840.25,y:1610},0).to({regX:307.8,scaleX:1.0925,scaleY:1.0069,rotation:0,skewX:73.5927,skewY:76.2958,x:871.15,y:1404.2},5).to({regX:307.9,scaleX:1.0903,scaleY:1.0067,skewX:73.626,skewY:76.2679,x:871.2,y:1625.45},4).to({regX:307.8,regY:260.5,scaleX:0.9999,scaleY:0.9999,skewX:0,skewY:0,x:871.4,y:2984.15},12).wait(138));

	// Layer_27
	this.instance_18 = new lib.Logo("synched",0);
	this.instance_18.setTransform(539.75,1566.55,1,1,0,0,0,264,219);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(151).to({_off:false},0).to({alpha:1},28).wait(121));

	// Text_copy
	this.instance_19 = new lib.endtext2("synched",0);
	this.instance_19.setTransform(541.8,1304.4,1,1,0,0,0,514.8,560.4);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(151).to({_off:false},0).to({alpha:1},28).wait(121));

	// Text
	this.instance_20 = new lib.EndScreenText1();
	this.instance_20.setTransform(27,124,0.5062,0.5062);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(300));

	// Background2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,102,0.149)").s().p("EhLACMqMAAAkZTMCWBAAAMAAAEZTg");
	this.shape.setTransform(544.2,964.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

	// Background
	this.instance_21 = new lib.StarterScreenBackground();
	this.instance_21.setTransform(0,0,1.7886,2.465);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(300));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(540,960,740.5999999999999,2536.9);
// library properties:
lib.properties = {
	id: 'C933A12CC41D4494AA82177805AD82C2',
	width: 1080,
	height: 1920,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/EndScreenText1.png", id:"EndScreenText1"},
		{src:"images/EndScreenText2.png", id:"EndScreenText2"},
		{src:"images/FeelingFriends_End_atlas_1.png", id:"FeelingFriends_End_atlas_1"},
		{src:"images/FeelingFriends_End_atlas_2.png", id:"FeelingFriends_End_atlas_2"},
		{src:"images/FeelingFriends_End_atlas_3.png", id:"FeelingFriends_End_atlas_3"}
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
an.compositions['C933A12CC41D4494AA82177805AD82C2'] = {
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