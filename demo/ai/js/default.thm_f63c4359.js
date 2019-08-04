window.skins=window.skins||{};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/custom/skins/all-courses/AllCoursesSkin.exml'] = window.AllCoursesSkin = (function (_super) {
	__extends(AllCoursesSkin, _super);
	function AllCoursesSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 750;
		this.minWidth = 1334;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = AllCoursesSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x4194ca;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1000;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 72;
		t.text = "暂未开放";
		t.x = 356;
		t.y = 339;
		return t;
	};
	return AllCoursesSkin;
})(eui.Skin);generateEUI.paths['resource/custom/skins/brain-competition/BrainCompetitionSkin.exml'] = window.BrainCompetitionSkin = (function (_super) {
	__extends(BrainCompetitionSkin, _super);
	function BrainCompetitionSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 750;
		this.minWidth = 1334;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = BrainCompetitionSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x4194ca;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1000;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 72;
		t.text = "暂未开放";
		t.x = 356;
		t.y = 339;
		return t;
	};
	return BrainCompetitionSkin;
})(eui.Skin);generateEUI.paths['resource/custom/skins/buy-courses/BuyCoursesSkin.exml'] = window.BuyCoursesSkin = (function (_super) {
	__extends(BuyCoursesSkin, _super);
	function BuyCoursesSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 750;
		this.minWidth = 1334;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = BuyCoursesSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x4194ca;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1000;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 72;
		t.text = "暂未开放";
		t.x = 356;
		t.y = 339;
		return t;
	};
	return BuyCoursesSkin;
})(eui.Skin);generateEUI.paths['resource/custom/skins/comein/ComeInSkin.exml'] = window.ComeInSkin = (function (_super) {
	__extends(ComeInSkin, _super);
	function ComeInSkin() {
		_super.call(this);
		this.skinParts = ["btn"];
		
		this.currentState = "step1";
		this.minHeight = 750;
		this.minWidth = 1334;
		this.elementsContent = [this._Rect1_i(),this._Group2_i()];
		this.states = [
			new eui.State ("step1",
				[
				])
			,
			new eui.State ("step2",
				[
					new eui.SetProperty("_TextInput1","prompt","验证码"),
					new eui.SetProperty("_Rect3","x",0),
					new eui.SetProperty("_Rect3","y",0),
					new eui.SetProperty("_Label2","text","40s后重新获取验证码"),
					new eui.SetProperty("_Label2","x",15),
					new eui.SetProperty("_Label2","y",29),
					new eui.SetProperty("_Label2","size",24)
				])
		];
	}
	var _proto = ComeInSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x4194ca;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1000;
		t.elementsContent = [this._Group1_i(),this._TextInput1_i(),this.btn_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 160;
		t.width = 240;
		t.x = 380;
		t.y = 198;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x75d8b7;
		t.height = 160;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 240;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "LOGO";
		t.x = 77;
		t.y = 65;
		return t;
	};
	_proto._TextInput1_i = function () {
		var t = new eui.TextInput();
		this._TextInput1 = t;
		t.height = 62;
		t.prompt = "请输入手机号登录/注册";
		t.width = 320;
		t.x = 340;
		t.y = 398;
		return t;
	};
	_proto.btn_i = function () {
		var t = new eui.Group();
		this.btn = t;
		t.height = 82;
		t.width = 260;
		t.x = 370;
		t.y = 564;
		t.elementsContent = [this._Rect3_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		this._Rect3 = t;
		t.ellipseHeight = 82;
		t.ellipseWidth = 82;
		t.fillColor = 0x75D8B7;
		t.height = 82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 260;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "获取验证码";
		t.x = 55;
		t.y = 26;
		return t;
	};
	return ComeInSkin;
})(eui.Skin);generateEUI.paths['resource/custom/skins/common/DefaultSkin.exml'] = window.DefaultSkin = (function (_super) {
	__extends(DefaultSkin, _super);
	function DefaultSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 750;
		this.minWidth = 1334;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = DefaultSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x4194ca;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1000;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 72;
		t.text = "暂未开放";
		t.x = 356;
		t.y = 339;
		return t;
	};
	return DefaultSkin;
})(eui.Skin);generateEUI.paths['resource/custom/skins/exchange/ExchangeSkin.exml'] = window.ExchangeSkin = (function (_super) {
	__extends(ExchangeSkin, _super);
	function ExchangeSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 750;
		this.minWidth = 1334;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = ExchangeSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x4194ca;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1000;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 72;
		t.text = "暂未开放";
		t.x = 356;
		t.y = 339;
		return t;
	};
	return ExchangeSkin;
})(eui.Skin);generateEUI.paths['resource/custom/skins/guide/GuideSkin.exml'] = window.GuideSkin = (function (_super) {
	__extends(GuideSkin, _super);
	function GuideSkin() {
		_super.call(this);
		this.skinParts = ["btn","btn1","btn2","btn3"];
		
		this.currentState = "step1";
		this.minHeight = 750;
		this.minWidth = 1334;
		this.elementsContent = [this._Rect1_i()];
		this._Group1_i();
		
		this._Group2_i();
		
		this._Group3_i();
		
		this.states = [
			new eui.State ("step1",
				[
					new eui.AddItems("_Group1","",1,"")
				])
			,
			new eui.State ("step2",
				[
					new eui.AddItems("_Group2","",1,"")
				])
			,
			new eui.State ("step3",
				[
					new eui.AddItems("_Group3","",1,"")
				])
		];
	}
	var _proto = GuideSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x4194ca;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1000;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this.btn_i(),this._TextInput1_i(),this._RadioButton1_i(),this._RadioButton2_i(),this._TextInput2_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 42;
		t.text = "请输入学员信息";
		t.x = 350;
		t.y = 58;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 42;
		t.text = "姓名";
		t.x = 130;
		t.y = 206;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 42;
		t.text = "性别";
		t.x = 130;
		t.y = 320;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 42;
		t.text = "年龄";
		t.x = 130;
		t.y = 434;
		return t;
	};
	_proto.btn_i = function () {
		var t = new eui.Group();
		this.btn = t;
		t.height = 82;
		t.width = 260;
		t.x = 690;
		t.y = 604;
		t.elementsContent = [this._Rect2_i(),this._Label5_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 82;
		t.ellipseWidth = 82;
		t.fillColor = 0x75D8B7;
		t.height = 82;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 260;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "下一步";
		t.verticalCenter = 0;
		return t;
	};
	_proto._TextInput1_i = function () {
		var t = new eui.TextInput();
		t.height = 48;
		t.width = 470;
		t.x = 303;
		t.y = 203;
		return t;
	};
	_proto._RadioButton1_i = function () {
		var t = new eui.RadioButton();
		t.label = "男同学";
		t.x = 303;
		t.y = 336;
		return t;
	};
	_proto._RadioButton2_i = function () {
		var t = new eui.RadioButton();
		t.label = "女同学";
		t.x = 556;
		t.y = 336;
		return t;
	};
	_proto._TextInput2_i = function () {
		var t = new eui.TextInput();
		t.height = 48;
		t.prompt = "假装这是个下拉列表之类的";
		t.width = 470;
		t.x = 303;
		t.y = 428;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		this._Group2 = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1000;
		t.elementsContent = [this._Label6_i(),this.btn1_i(),this.btn2_i()];
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 42;
		t.text = "请选择学员头像";
		t.x = 350;
		t.y = 58;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Group();
		this.btn1 = t;
		t.height = 42;
		t.width = 120;
		t.x = 45.45;
		t.y = 45.45;
		t.elementsContent = [this._Rect3_i(),this._Label7_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 52;
		t.ellipseWidth = 52;
		t.fillColor = 0x75D8B7;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "返回";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Group();
		this.btn2 = t;
		t.height = 82;
		t.width = 260;
		t.x = 690;
		t.y = 604;
		t.elementsContent = [this._Rect4_i(),this._Label8_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 82;
		t.ellipseWidth = 82;
		t.fillColor = 0x75D8B7;
		t.height = 82;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 260;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "完成";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		this._Group3 = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1000;
		t.elementsContent = [this._Label9_i(),this._Label10_i(),this.btn3_i()];
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 42;
		t.text = "小明同学";
		t.x = 414;
		t.y = 183.15;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 42;
		t.text = "欢迎来到光速思维的奇妙世界";
		t.x = 222;
		t.y = 263.45;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Group();
		this.btn3 = t;
		t.height = 82;
		t.width = 260;
		t.x = 370;
		t.y = 404;
		t.elementsContent = [this._Rect5_i(),this._Label11_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 82;
		t.ellipseWidth = 82;
		t.fillColor = 0x75D8B7;
		t.height = 82;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 260;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "立即体验";
		t.verticalCenter = 0;
		return t;
	};
	return GuideSkin;
})(eui.Skin);generateEUI.paths['resource/custom/skins/home/HomeCourseItemSkin.exml'] = window.HomeCourseItemSkin = (function (_super) {
	__extends(HomeCourseItemSkin, _super);
	function HomeCourseItemSkin() {
		_super.call(this);
		this.skinParts = ["btn"];
		
		this.currentState = "locked";
		this.height = 240;
		this.width = 300;
		this.elementsContent = [this._Rect1_i(),this.btn_i()];
		this.states = [
			new eui.State ("unlock",
				[
				])
			,
			new eui.State ("locked",
				[
					new eui.SetProperty("_Rect2","fillColor",0x8c8c8c),
					new eui.SetProperty("_Label1","text","解锁"),
					new eui.SetProperty("_Label1","textColor",0xcecece)
				])
		];
	}
	var _proto = HomeCourseItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 80;
		t.ellipseWidth = 80;
		t.fillColor = 0xbbe2c3;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.btn_i = function () {
		var t = new eui.Group();
		this.btn = t;
		t.bottom = 32;
		t.height = 42;
		t.horizontalCenter = 0;
		t.width = 160;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		this._Rect2 = t;
		t.bottom = 0;
		t.ellipseHeight = 42;
		t.ellipseWidth = 42;
		t.fillColor = 0x75D8B7;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "立即上课";
		t.verticalCenter = 0;
		return t;
	};
	return HomeCourseItemSkin;
})(eui.Skin);generateEUI.paths['resource/custom/skins/home/HomePopupSkin.exml'] = window.HomePopupSkin = (function (_super) {
	__extends(HomePopupSkin, _super);
	function HomePopupSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 750;
		this.minWidth = 1334;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = HomePopupSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.3;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 280;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 850;
		t.elementsContent = [this._Rect2_i(),this._RouterLink1_i(),this._RouterLink2_i(),this._RouterLink3_i(),this._RouterLink4_i(),this._Rect7_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 84;
		t.ellipseWidth = 84;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._RouterLink1_i = function () {
		var t = new Ray.RouterLink();
		t.height = 200;
		t.width = 180;
		t.x = 40;
		t.y = 40;
		t.elementsContent = [this._Rect3_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0x75d8b7;
		t.height = 160;
		t.left = 10;
		t.top = 0;
		t.width = 160;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 6;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "预习";
		t.textColor = 0x000000;
		return t;
	};
	_proto._RouterLink2_i = function () {
		var t = new Ray.RouterLink();
		t.height = 200;
		t.width = 180;
		t.x = 237;
		t.y = 40;
		t.elementsContent = [this._Rect4_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0x75D8B7;
		t.height = 160;
		t.left = 10;
		t.top = 0;
		t.width = 160;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 6;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "上课";
		t.textColor = 0x000000;
		return t;
	};
	_proto._RouterLink3_i = function () {
		var t = new Ray.RouterLink();
		t.height = 200;
		t.width = 180;
		t.x = 433;
		t.y = 40;
		t.elementsContent = [this._Rect5_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0x75D8B7;
		t.height = 160;
		t.left = 10;
		t.top = 0;
		t.width = 160;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 6;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "报告";
		t.textColor = 0x000000;
		return t;
	};
	_proto._RouterLink4_i = function () {
		var t = new Ray.RouterLink();
		t.height = 200;
		t.width = 180;
		t.x = 630;
		t.y = 40;
		t.elementsContent = [this._Rect6_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0x75D8B7;
		t.height = 160;
		t.left = 10;
		t.top = 0;
		t.width = 160;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bottom = 6;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "复习";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 60;
		t.ellipseWidth = 60;
		t.fillColor = 0xfa6c5f;
		t.height = 60;
		t.right = -24;
		t.top = -24;
		t.width = 60;
		return t;
	};
	return HomePopupSkin;
})(eui.Skin);generateEUI.paths['resource/custom/skins/home/HomeSkin.exml'] = window.HomeSkin = (function (_super) {
	__extends(HomeSkin, _super);
	function HomeSkin() {
		_super.call(this);
		this.skinParts = ["coursesGroup","callmeBtn","callmeGroup","popupGroup"];
		
		this.minHeight = 750;
		this.minWidth = 1334;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Scroller1_i(),this._RouterLink5_i(),this._RouterLink6_i(),this.callmeGroup_i(),this.popupGroup_i()];
	}
	var _proto = HomeSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x4194ca;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1000;
		t.elementsContent = [this._RouterLink1_i(),this._RouterLink2_i(),this._RouterLink3_i(),this._RouterLink4_i()];
		return t;
	};
	_proto._RouterLink1_i = function () {
		var t = new Ray.RouterLink();
		t.height = 180;
		t.to = "all-courses";
		t.width = 180;
		t.x = 71;
		t.y = 544;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 140;
		t.ellipseWidth = 140;
		t.fillColor = 0xF0FED0;
		t.height = 140;
		t.width = 140;
		t.x = 20;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "全部课程";
		t.x = 30;
		t.y = 150;
		return t;
	};
	_proto._RouterLink2_i = function () {
		var t = new Ray.RouterLink();
		t.height = 180;
		t.to = "brain-competition";
		t.width = 180;
		t.x = 294;
		t.y = 544;
		t.elementsContent = [this._Rect3_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 140;
		t.ellipseWidth = 140;
		t.fillColor = 0xf0fed0;
		t.height = 140;
		t.width = 140;
		t.x = 20;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "脑力大赛";
		t.x = 30;
		t.y = 150;
		return t;
	};
	_proto._RouterLink3_i = function () {
		var t = new Ray.RouterLink();
		t.height = 180;
		t.to = "exchange";
		t.width = 180;
		t.x = 517;
		t.y = 544;
		t.elementsContent = [this._Rect4_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 140;
		t.ellipseWidth = 140;
		t.fillColor = 0xF0FED0;
		t.height = 140;
		t.width = 140;
		t.x = 20;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "积分兑换";
		t.x = 30;
		t.y = 150;
		return t;
	};
	_proto._RouterLink4_i = function () {
		var t = new Ray.RouterLink();
		t.height = 180;
		t.to = "buy-courses";
		t.width = 180;
		t.x = 740;
		t.y = 544;
		t.elementsContent = [this._Rect5_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 140;
		t.ellipseWidth = 140;
		t.fillColor = 0xF0FED0;
		t.height = 140;
		t.width = 140;
		t.x = 20;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "购买课时";
		t.x = 30;
		t.y = 150;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 260;
		t.left = 120;
		t.right = 120;
		t.y = 195;
		t.viewport = this.coursesGroup_i();
		return t;
	};
	_proto.coursesGroup_i = function () {
		var t = new eui.Group();
		this.coursesGroup = t;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.horizontalAlign = "left";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._RouterLink5_i = function () {
		var t = new Ray.RouterLink();
		t.height = 82;
		t.left = 82;
		t.top = 42;
		t.width = 200;
		t.elementsContent = [this._Rect6_i(),this._Rect7_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.bottom = 6;
		t.ellipseHeight = 56;
		t.ellipseWidth = 56;
		t.fillColor = 0x30adbc;
		t.left = 0;
		t.right = 0;
		t.top = 6;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 72;
		t.ellipseWidth = 72;
		t.fillColor = 0xbbe2c3;
		t.height = 72;
		t.width = 72;
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "小明";
		t.x = 75;
		t.y = 12;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "课时：2节";
		t.x = 75;
		t.y = 48;
		return t;
	};
	_proto._RouterLink6_i = function () {
		var t = new Ray.RouterLink();
		t.height = 82;
		t.right = 120;
		t.top = 42;
		t.width = 260;
		t.elementsContent = [this._Rect8_i(),this._Label7_i(),this._Rect9_i(),this._Label8_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.bottom = 6;
		t.ellipseHeight = 56;
		t.ellipseWidth = 56;
		t.fillColor = 0x30ADBC;
		t.left = 0;
		t.right = 0;
		t.top = 6;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "青铜战士";
		t.x = 15.15;
		t.y = 28;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 56;
		t.ellipseWidth = 56;
		t.fillColor = 0xffffff;
		t.height = 26;
		t.width = 2;
		t.x = 129;
		t.y = 28;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "3322积分";
		t.x = 145.77;
		t.y = 30;
		return t;
	};
	_proto.callmeGroup_i = function () {
		var t = new eui.Group();
		this.callmeGroup = t;
		t.height = 500;
		t.right = -840;
		t.verticalCenter = 0;
		t.width = 880;
		t.elementsContent = [this.callmeBtn_i(),this._Rect11_i(),this._Rect12_i(),this._Label10_i(),this._Label11_i(),this._Label12_i()];
		return t;
	};
	_proto.callmeBtn_i = function () {
		var t = new eui.Group();
		this.callmeBtn = t;
		t.height = 200;
		t.width = 40;
		t.x = 0;
		t.y = 150;
		t.elementsContent = [this._Rect10_i(),this._Label9_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x30adbc;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0x000000;
		t.width = 40;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "联系老师";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 40;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2;
		t.width = 840;
		t.x = 40;
		t.y = 0;
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xc1c1c1;
		t.height = 420;
		t.strokeColor = 0x000000;
		t.strokeWeight = 0;
		t.width = 420;
		t.x = 80;
		t.y = 40;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.size = 42;
		t.text = "我是二维码";
		t.x = 185;
		t.y = 229;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.size = 42;
		t.text = "联系老师方法";
		t.textColor = 0x000000;
		t.x = 555;
		t.y = 49;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 326;
		t.size = 24;
		t.text = "文案xxxxxxxxxxx\n文案xxxxxxxxxxx";
		t.textColor = 0x000000;
		t.width = 306;
		t.x = 555;
		t.y = 129;
		return t;
	};
	_proto.popupGroup_i = function () {
		var t = new HomePopup();
		this.popupGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	return HomeSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);