$(document).ready(function() {
	var blogStaticUrl = "./blog/";
	var imgStaticUrl="./lib/"
	function addBlog() {
		$.ajax({
			url:"./blog/data/index.json",
			dataType:"json",
			success:function(data) {
				var newsHtml,blogurl;
				for (var i = data.news.length - 1; i >= 0; i--) {
					blogurl = blogStaticUrl+data.news[i].year+"/"+data.news[i].month+"/"+data.news[i].day+"/"+data.news[i].filename;
					if(data.news[i].ishot == "true"){
						newsHtml='<li class="fl hot">\
									<a href="'+blogurl+'">\
										<img src="'+imgStaticUrl+data.news[i].blogimg+'" alt="文章插图">\
										<span class="hot-close"></span>\
									</a>\
								</li>';
						$(".news").prepend(newsHtml);
					}else{
						newsHtml= '<li class="fl item">\
								<a href="'+blogurl+'">\
									<span class="imgbox">\
										<img src="'+imgStaticUrl+data.news[i].blogimg+'" alt="文章配图">\
									</span>\
									<div class="authorinfo">\
										<img width="62" height="62" src="'+imgStaticUrl+data.news[i].authotphoto+'" alt="作者头像">\
										<p class="nickname">\
											<span>'+data.news[i].author+'</span>\
										</p>\
										<p class="vote">\
											<span>被赞 '+data.news[i].like+' 次</span>\
											<span>|</span>\
											<span>评论 '+data.news[i].comment+' 次</span>\
										</p>\
									</div>\
									<div class="intro">\
										<h2 class="articletitle">'+data.news[i].title+'</h2>\
										<p class="articleintro">'+data.news[i].desc+'</p>\
									</div>\
								</a>\
							</li>';
						$(".news").append(newsHtml);
					}	
				};
			}
		});
	}
	function addLink() {
		$.ajax({
			url:"./blog/data/links.json",
			dataType:"json",
			success:function(data) {
				for (var i = data.length - 1; i >= 0; i--) {
					$(".links .navfri").append('<li><a href="'+data[i].title+'" target="_blank">'+data[i].link+'</a></li>');
				};
			}
		});
	}
	function init () {
		$(".news").empty();
		addBlog();
		addLink();
	}
});