# ionic项目 环境搭建及基本操作

### 一、安装

+ 1.安装node.js  
+ 3.安装ionic & cordova:  
    + 命令行输入:`npm install –g cordova ionic`  

* > 注:-g表示全局安装,也可以进入指定的目录安装,但这里推荐全局安装,安装后的目录为C:/users/Administrator/AppData/Roaming/npm/node_modules

+ 4.安装Java JDK  
+ 5.安装Apache Ant  
+ 6.安装Android SDK（从这里开始后面基本以android为例,ios类似）  
+ 7.设置环境变量:  
    + ① 打开计算机->系统属性->高级系统设置->环境变量
    + ② 在系统变量中新建ANDROID_HOME变量,变量值为sdk所在目录
    + ③ 新建CLASSPATH变量,变量值为.  
    `%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;`
    + ④ 新建JAVA_HOME变量,变量值为jdk所在目录
    + ⑤ 编辑系统变量中的path变量,不要删原来的变量值,在原值后面添加  
    `%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;%ANDROID_HOME%\tools;%ANDROID_HOME%\build-tools;%ANDROID_HOME%\platform-tools`

+ > 注:这里是添加了jdk\bin、jdk\jre\bin、sdk\tools 、sdk\build-tools、sdk\platform-tools的路径,互相以英文分号隔开

+ 8.创建项目:  
    + 命令行cd进入任何你喜欢的目录, `ionic start` 项目所在文件夹名称 ionic示例(blank 空,tabs 带选项卡,sidemeun 带侧边栏),如果一切顺利,就会在你指定的目录新建一个你喜欢的名字的文件夹,并在里面初始化一个ionic项目。
+ 9.添加平台:  
    + 进入刚才新建的项目的目录,命令行输入`ionic platform add android(/ios)`

### 二、在项目目录中有一个www的文件夹,里面的文件有html,js,css等,可随意编写,在platform中的www文件最好不要动它。

### 三、测试项目
+ 1.进入项目目录，ionic build android(/ios)编译项目
+ 2.测试项目的方法：
    + 桌面浏览器测试法：ionic serve
    + 模拟器测试法：android 需avd创建虚拟机，执行ionic run andriod  
        + &nbsp;&nbsp;&nbsp;ios  直需在xcode中选择虚拟机，执行ionic run ios
    + 手机测试法：连上数据线，打开开发者选项，执行ionic run android

### 四、编写项目
+ 建议使用angularjs + sass 编写  
使用gulp自动化工具编译，压缩sass js等  
sass安装依赖ruby  安装命令 `gem install sass`  使用参考：[这里](http://www.w3cplus.com/sassguide/)  
gulp安装全局 `npm install -g gulp`　　使用参考：[这里](http://www.gulpjs.com.cn/)  
运行 `ionic serve` 启动gulp需要在ionic.project中配置  
```
    {
      "name": "",
      "app_id": "",
      "gulpStartupTasks":[
            ”task模块名称“ 
      ]
    }
```

### 五、发布app,前面的准备就是为了这一步了
+ 1.执行`cordova plugin rm cordova-plugin-console`，这一步是移除调试插件
+ 2.执行`cordova build --release android`，在platforms/android/build/outputs/apk，中会出现***-release-unsigned.apk，最前面取决于取了什么名字。此命令生成的是未添加签名的apk需自行签名
+ 3.使用keytool打包私有密钥：执行`keytool -genkey -alias 签名的文件名称.keystore -keyalg RSA -validity 20000 -keystore 签名的别名.keystore`
+ 4.给没有签名的apk签名：执行`jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore 签名的文件名称.keystore 未签名文件名称.apk alias_name`
+ 5.最后一步，执行`zipalign -v 4 已签名的文件名(未优化).apk 已签名的文件名(已优化).apk  `这一步能够对打包的应用程序进行优化

### 六、基本步骤到此结束,可能会出现各种报错的情况,只能具体问题具体分析了

优秀参考网站:  

> [Ionic中文文档教程](http://www.ionic.wang/js_doc-index.html)  
  [项目参考](http://www.phonegap100.com/themes.html)