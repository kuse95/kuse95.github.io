var __reflect=this&&this.__reflect||function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n},__extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);n.prototype=t.prototype,e.prototype=new n},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{u(r.next(e))}catch(t){o(t)}}function s(e){try{u(r["throw"](e))}catch(t){o(t)}}function u(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,s)}u((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(a)throw new TypeError("Generator is already executing.");for(;u;)try{if(a=1,o&&(i=o[2&n[0]?"return":n[0]?"throw":"next"])&&!(i=i.call(o,n[1])).done)return i;switch(o=0,i&&(n=[0,i.value]),n[0]){case 0:case 1:i=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,o=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(i=u.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){u.label=n[1];break}if(6===n[0]&&u.label<i[1]){u.label=i[1],i=n;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(n);break}i[2]&&u.ops.pop(),u.trys.pop();continue}n=t.call(e,u)}catch(r){n=[6,r],o=0}finally{a=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var a,o,i,s,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},Ray;!function(e){var t=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.getInstance=function(){return this.instance||(this.instance=new this),this.instance},t}(egret.HashObject);e.Singleton=t,__reflect(t.prototype,"Ray.Singleton")}(Ray||(Ray={}));var Ray;!function(e){var t=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return __extends(n,t),n.prototype.createChildren=function(){t.prototype.createChildren.call(this),this.width=e.LayerManager.stageWidth,this.height=e.LayerManager.stageHeight},n}(eui.Component);e.RouteView=t,__reflect(t.prototype,"Ray.RouteView")}(Ray||(Ray={}));var LayerEnum;!function(e){e[e.BG=0]="BG",e[e.UI=1]="UI",e[e.POPUP=2]="POPUP",e[e.LOADING=3]="LOADING",e[e.TOP=4]="TOP"}(LayerEnum||(LayerEnum={}));var AllCourses=function(e){function t(){var t=e.call(this)||this;return t.skinName=AllCoursesSkin,t}return __extends(t,e),t}(Ray.RouteView);__reflect(AllCourses.prototype,"AllCourses");var BrainCompetition=function(e){function t(){var t=e.call(this)||this;return t.skinName=BrainCompetitionSkin,t}return __extends(t,e),t}(Ray.RouteView);__reflect(BrainCompetition.prototype,"BrainCompetition");var BuyCourses=function(e){function t(){var t=e.call(this)||this;return t.skinName=BuyCoursesSkin,t}return __extends(t,e),t}(Ray.RouteView);__reflect(BuyCourses.prototype,"BuyCourses");var ComeIn=function(e){function t(){var t=e.call(this)||this;return t.skinName=ComeInSkin,t.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,t.chageState,t),t}return __extends(t,e),t.prototype.chageState=function(e){"step2"!==this.currentState?this.currentState="step2":Ray.RouterManager.push("guide")},t}(Ray.RouteView);__reflect(ComeIn.prototype,"ComeIn");var Exchange=function(e){function t(){var t=e.call(this)||this;return t.skinName=ExchangeSkin,t}return __extends(t,e),t}(Ray.RouteView);__reflect(Exchange.prototype,"Exchange");var Guide=function(e){function t(){var t=e.call(this)||this;return t.skinName=GuideSkin,t.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,t.chageState,t),t.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP,t.chageState,t),t.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP,t.chageState,t),t.btn3.addEventListener(egret.TouchEvent.TOUCH_TAP,t.chageState,t),t}return __extends(t,e),t.prototype.chageState=function(e){e.target===this.btn1?this.currentState="step1":"step1"===this.currentState||""===this.currentState?this.currentState="step2":"step2"===this.currentState?this.currentState="step3":"step3"===this.currentState&&Ray.RouterManager.push("home")},t}(Ray.RouteView);__reflect(Guide.prototype,"Guide");var HomeCourseItem=function(e){function t(){var t=e.call(this)||this;return t.skinName=HomeCourseItemSkin,t}return __extends(t,e),t}(eui.Component);__reflect(HomeCourseItem.prototype,"HomeCourseItem");var HomePopup=function(e){function t(){var t=e.call(this)||this;return t.skinName=HomePopupSkin,t.addEventListener(egret.TouchEvent.TOUCH_TAP,t.hide,t),t}return __extends(t,e),t.prototype.hide=function(){this.visible=!1},t.prototype.show=function(){this.visible=!0},t}(eui.Component);__reflect(HomePopup.prototype,"HomePopup");var Home=function(e){function t(){var t=e.call(this)||this;return t.courses=[],t.skinName=HomeSkin,t.courses=[{state:"unlock"},{state:"unlock"},{state:""},{state:""},{state:""}],t}return __extends(t,e),t.prototype.createChildren=function(){if(e.prototype.createChildren.call(this),this.courses.length){this.coursesGroup.removeChildren();for(var t=0;t<this.courses.length;t++){var n=this.courses[t],r=new HomeCourseItem;r.currentState=n.state,this.coursesGroup.addChild(r),r.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showPopup,this)}}this.callmeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.switchCallGroup,this)},t.prototype.switchCallGroup=function(){var e=this;this.callMeAnimation&&this.callMeAnimation.setPosition(750);var t=0;-840!==this.callmeGroup.right&&(t=-840),this.callMeAnimation=egret.Tween.get(this.callmeGroup).to({right:t},750).call(function(){egret.Tween.removeTweens(e.callmeGroup),e.callMeAnimation=null})},t.prototype.showPopup=function(e){e.currentTarget instanceof HomeCourseItem&&"unlock"===e.currentTarget.currentState&&this.popupGroup.show()},t}(Ray.RouteView);__reflect(Home.prototype,"Home");var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),Ray.init(this.stage),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return Ray.LayerManager.getInstance().addLayer(LayerEnum.BG,new Ray.Layer),Ray.LayerManager.getInstance().addLayer(LayerEnum.UI,new Ray.EUILayer),Ray.LayerManager.getInstance().addLayer(LayerEnum.POPUP,new Ray.Layer),Ray.LayerManager.getInstance().addLayer(LayerEnum.LOADING,new Ray.EUILayer),Ray.LayerManager.getInstance().addLayer(LayerEnum.TOP,new Ray.Layer),[4,this.loadResource()];case 1:return t.sent(),e=[{path:"comein",component:new ComeIn},{path:"guide",component:new Guide},{path:"home",component:new Home},{path:"exchange",component:new Exchange},{path:"all-courses",component:new AllCourses},{path:"buy-courses",component:new BuyCourses},{path:"brain-competition",component:new BrainCompetition}],Ray.RouterManager.init({routes:e,container:Ray.LayerManager.getInstance().getLayer(LayerEnum.UI)}),Ray.RouterManager.push("comein"),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),e=new LoadingUI,Ray.LayerManager.getInstance().getLayer(LayerEnum.LOADING).addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return n.sent(),Ray.LayerManager.getInstance().getLayer(LayerEnum.LOADING).removeChild(e),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var r=new eui.Theme("resource/default.thm.json",e.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t}(eui.UILayer);__reflect(Main.prototype,"Main");var Ray;!function(e){function t(t){e.LayerManager.getInstance().init(t),e.RouterManager=new e.Router}e.RouterManager=null,e.init=t}(Ray||(Ray={}));var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function r(r){t.call(n,r,e)}if(RES.hasRes(e)){var a=RES.getRes(e);a?r(a):RES.getResAsync(e,r,this)}else RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,n,r){function a(e){t.call(r,e)}function o(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),n.call(r))}var i=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(r,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,n){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(r,generateEUI2)},i)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var s=e.split("/");s.pop();var u=s.join("/")+"_EUI.json";generateJSON.paths[e]?egret.callLater(function(){t.call(r,generateJSON.paths[e])},this):RES.getResByUrl(u,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){t.call(r,generateJSON.paths[e])},i)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(r,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(e,a,this,RES.ResourceItem.TYPE_TEXT)},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var Ray;!function(e){var t=function(e){function t(){var t=e.call(this)||this;return t.percentWidth=100,t.percentHeight=100,t.touchEnabled=!1,t.touchChildren=!0,t}return __extends(t,e),t}(eui.UILayer);e.EUILayer=t,__reflect(t.prototype,"Ray.EUILayer")}(Ray||(Ray={}));var Ray;!function(e){var t=function(e){function t(){var t=e.call(this)||this;return t.touchEnabled=!1,t.touchChildren=!0,t.addEventListener(egret.Event.ADDED_TO_STAGE,t.addToStage,t),t}return __extends(t,e),t.prototype.addToStage=function(){this.width=this.stage.stageWidth,this.height=this.stage.stageHeight},t}(egret.DisplayObjectContainer);e.Layer=t,__reflect(t.prototype,"Ray.Layer")}(Ray||(Ray={}));var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Ray;!function(e){var t=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._layerList=[],t}return __extends(t,e),t.prototype.init=function(e){e&&(this.stage=e,e.addEventListener(egret.Event.RESIZE,this.onStageResize,this),t.stageWidth=e.stageWidth,t.stageHeight=e.stageHeight)},t.prototype.onStageResize=function(e){t.stageWidth=this.stage.stageWidth,t.stageHeight=this.stage.stageHeight},t.prototype.updateLayer=function(){for(var e=0,t=this._layerList.length;t>e;e++){var n=this._layerList[e];n&&this.stage.addChild(n)}},t.prototype.addLayer=function(e,t){e=0>e?0:e,this._layerList[e]?egret.error("索引为"+e+"的层已存在"):(this._layerList[e]=t,egret.callLater(this.updateLayer,this))},t.prototype.getLayer=function(e){return this._layerList[e]},t.prototype.removeLayer=function(e){var t=this._layerList[e];return delete this._layerList[e],this.updateLayer(),t},t}(e.Singleton);e.LayerManager=t,__reflect(t.prototype,"Ray.LayerManager")}(Ray||(Ray={}));var Ray;!function(e){var t=function(e){function t(t){var n=e.call(this)||this;return n._config=t,n}return __extends(t,e),Object.defineProperty(t.prototype,"path",{get:function(){return this._config.path},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this._config.name},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"component",{get:function(){return this._config.component},enumerable:!0,configurable:!0}),t}(egret.HashObject);e.Route=t,__reflect(t.prototype,"Ray.Route");var n=function(n){function r(e){var t=n.call(this)||this;return t.init(e),t}return __extends(r,n),r.prototype.init=function(t){t&&(t.container?(this._options=t,this._container=t.container,this._history=new e.History,this._routerMap={},this.createRoterMap(t.routes||[]),this._history.addEventListener(egret.Event.CHANGE,this.historyChage,this)):console.warn("请为路由添加一个容器，否则将无法渲染路由！"))},r.prototype.historyChage=function(t){if(t.data&&t.data instanceof e.HistoryEventData){switch(t.data.type){case e.HistoryChageType.forward:break;case e.HistoryChageType.back:}this._container.removeChildren();var n=t.data.to;this._container.addChild(this._routerMap[n].component)}},r.prototype.createRoterMap=function(e){for(var n=0;n<e.length;n++){var r=new t(e[n]);this._routerMap[r.path]=r}},r.prototype.push=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(!this._routerMap[e]||!this._routerMap[e].component)return void console.warn("path:"+e+" 未注册！");(r=this._history).push.apply(r,[e].concat(t));var r},r.prototype.go=function(e){this._history.go(e)},r.prototype.back=function(){this._history.back()},r.prototype.forward=function(){this._history.forward()},r}(egret.EventDispatcher);e.Router=n,__reflect(n.prototype,"Ray.Router")}(Ray||(Ray={}));var Ray;!function(e){var t=function(t){function n(){var e=t.call(this)||this;return e.to=null,e.touchEnabled=!0,e.touchChildren=!1,e.addEventListener(egret.TouchEvent.TOUCH_TAP,e.linkTo,e),e}return __extends(n,t),n.prototype.linkTo=function(){this.to&&e.RouterManager&&e.RouterManager.push(this.to)},n}(eui.Group);e.RouterLink=t,__reflect(t.prototype,"Ray.RouterLink")}(Ray||(Ray={}));var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e.prototype.getSystemInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,wx.getSystemInfoSync()]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var Ray;!function(e){var t=function(e){function t(t,n,r){var a=e.call(this)||this;return a.type=t,a.to=n,a.from=r,a}return __extends(t,e),t}(egret.HashObject);e.HistoryEventData=t,__reflect(t.prototype,"Ray.HistoryEventData");var n=function(n){function r(){var e=null!==n&&n.apply(this,arguments)||this;return e._history=[],e._index=-1,e}return __extends(r,n),r.prototype.push=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];this._history.push(new e.HistoryItem(t,n)),this.forward()},r.prototype.go=function(n){var r=this._index+n;if(!(0===n||0>r||r>=this._history.length)){var a=new egret.Event(egret.Event.CHANGE),o=n>0?e.HistoryChageType.forward:e.HistoryChageType.back,i=this._history[this._index]&&this._history[this._index].path,s=this._history[r]&&this._history[r].path;a.data=new t(o,s,i),this._index=r,this.dispatchEvent(a)}},Object.defineProperty(r.prototype,"length",{get:function(){return this._history.length},enumerable:!0,configurable:!0}),r.prototype.back=function(){this.go(-1)},r.prototype.forward=function(){this.go(1)},r}(egret.EventDispatcher);e.History=n,__reflect(n.prototype,"Ray.History")}(Ray||(Ray={}));var Ray;!function(e){var t;!function(e){e.back="back",e.forward="forward"}(t=e.HistoryChageType||(e.HistoryChageType={}));var n=function(e){function t(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var a=e.call(this)||this;return a.path="",a.path=t,a.time=Date.now(),a.args=n,a}return __extends(t,e),t}(egret.HashObject);e.HistoryItem=n,__reflect(n.prototype,"Ray.HistoryItem")}(Ray||(Ray={}));