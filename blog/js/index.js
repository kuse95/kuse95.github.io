$(document).ready(function () {
  var blogStaticUrl = "./blog-text/",
    imgStaticUrl = "./lib/",
    currentTag = null;
  function addBlog() {
    $.ajax({
      url: "./blog/data/index.json",
      dataType: "json",
      success: function (data) {
        data.news.sort(function (a, b) {
          var aTime = new Date(a.year + '-' + a.month + '-' + a.day),
            bTime = new Date(b.year + '-' + b.month + '-' + b.day);
          return aTime - bTime;
        })
        var newsHtml, blogurl;
        for (var i = data.news.length - 1; i >= 0; i--) {
          blogurl = blogStaticUrl + data.news[i].year + "/" + data.news[i].month + "/" + data.news[i].day + "/" + data.news[i].filename;
          if (data.news[i].ishot == "true") {
            newsHtml = '<li class="fl hide hot" data-tags="' + data.news[i].tags.join() + '">\
									<a data-src="'+ blogurl + '">\
										<img src="'+ imgStaticUrl + data.news[i].blogimg + '" alt="文章插图">\
										<span class="hot-close"></span>\
									</a>\
								</li>';
            $(".blogs .news").prepend(newsHtml);
          } else {
            newsHtml = '<li class="fl hide item" data-tags="' + data.news[i].tags.join() + '">\
								<a data-src="'+ blogurl + '">\
									<span class="imgbox">\
										<img src="'+ imgStaticUrl + data.news[i].blogimg + '" alt="文章配图">\
									</span>\
									<div class="authorinfo">\
										<img width="62" height="62" src="'+ imgStaticUrl + data.news[i].authotphoto + '" alt="作者头像">\
										<p class="nickname">\
											<span>'+ data.news[i].author + '</span>\
										</p>\
										<p class="vote">\
											<span>被赞 '+ data.news[i].like + ' 次</span>\
											<span>|</span>\
											<span>评论 '+ data.news[i].comment + ' 次</span>\
										</p>\
									</div>\
									<div class="intro">\
										<h2 class="articletitle">'+ data.news[i].title + '</h2>\
										<p class="articleintro">'+ data.news[i].desc + '</p>\
									</div>\
								</a>\
							</li>';
            $(".blogs .news").append(newsHtml);
          }
        };
        hideOtherBlog();
      }
    });
  }
  function addLink() {
    $.ajax({
      url: "./blog/data/links.json",
      dataType: "json",
      success: function (data) {
        $(".links .navfri").empty();
        for (var i = data.length - 1; i >= 0; i--) {
          $(".links .navfri").append('<li><a href="' + data[i].link + '" target="_blank">' + data[i].title + '</a></li>');
        };
      }
    });
  }
  function addTags() {
    $.ajax({
      url: "./blog/data/tags.json",
      dataType: "json",
      success: function (data) {
        $("nav .tags").empty();
        for (var i = data.length - 1; i >= 0; i--) {
          $("nav .tags").append('<li><a data-tag="' + data[i] + '">' + data[i] + '</a></li>');
        };
      }
    });
  }
  function hideOtherBlog() {
    var lilist = $(".news li"),
      itemTags = null;
    if (currentTag === null) {
      lilist.removeClass("hide");
      return;
    };
    for (var i = 0; i < lilist.length; i++) {
      itemTags = lilist.eq(i).attr('data-tags').split(',');
      if (itemTags.indexOf(currentTag) !== -1 && lilist.eq(i).hasClass("hide")) {
        lilist.eq(i).removeClass("hide");
      } else if (itemTags.indexOf(currentTag) === -1 && !lilist.eq(i).hasClass("hide")) {
        lilist.eq(i).addClass("hide");
      }
    }
  }
  function addEvent() {
    //菜单点击事件
    $(".menu").on("click", function (e) {
      if ($(".menu-close").css("display") == "none") {
        $(".menu-open").css("display", "none");
        $(".menu-close").css("display", "block");
        $(".navmain").addClass("expan");
      } else {
        $(".menu-close").css("display", "none");
        $(".menu-open").css("display", "block");
        $(".navmain").removeClass("expan");
      }
    });
    //标签选择
    $(".tags").on("click", "li", function (e) {
      if ($(this).hasClass("action")) {
        $(this).removeClass();
        currentTag = null;
      } else {
        $(this).siblings().removeClass();
        $(this).addClass("action");
        currentTag = $(this).find("a").attr("data-tag");
      }
      hideOtherBlog();
    });
    //查看文章
    $(".blogs .news").on("click", "li", function () {
      var bloglink = $(this).find("a").attr("data-src") + '.md';
      $.ajax({
        type: 'GET',
        url: bloglink,
        success: function (data) {
          $(".article .content").html(markdownit().render(data));
          $(".article").addClass("show");
          var setMainHeight = setTimeout(function () {
            $(".main").addClass("hide");
          }, 600);
        }
      })
    });
    //关闭文章
    $(".article-close").on("click", function (e) {
      $(".main").removeClass("hide");
      $(".article").removeClass("show");
    });
    //路由变化
    $(window).on("hashchange", function () {
      laodPage(getHash());
    });
  }
  function getHash() {
    return location.hash.split('?')[0].split('#')[1];
  }
  function laodPage(page) {
    var pageDom = $('.' + (page ? page : 'home')),
      pageStatus = pageDom.attr('data-status');
    pageDom.siblings().addClass('hide');
    pageDom.removeClass('hide');
    if (pageStatus === 'loaded') {
      return;
    }
    switch (page) {
      case 'blogs':
        addTags();
        addBlog();
        break;
      default:
    }
    pageDom.attr('data-status', 'loaded');
  }
  function init() {
    addLink();
    addEvent();
    laodPage(getHash());
  }
  init();
});