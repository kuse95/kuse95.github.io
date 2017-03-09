/**
 * Created by lilin on 2017/1/20.
 */
$(function(){
    var app = {};
    app.Router = function(){
        function Router(){
        }
        Router.prototype.setup = function(routemap, defaultFunc){
            var that = this, rule, func;
            this.routemap = [];
            this.defaultFunc = defaultFunc;
            for (var rule in routemap) {
                if (!routemap.hasOwnProperty(rule)) continue;
                that.routemap.push({
                    rule: new RegExp(rule, 'i'),
                    func: routemap[rule]
                });
            }
        };
        Router.prototype.start = function(){
            var hash = location.hash, route, matchResult;
            for (var routeIndex in this.routemap){
                route = this.routemap[routeIndex];
                matchResult = hash.match(route.rule);
                if (matchResult){
                    route.func.apply(window, matchResult.slice(1));
                    return;
                }
            }
            this.defaultFunc();
        };
        return Router;
    }();
    var router = new app.Router();
    router.setup({
        '#/list/(.*)/(.*)': function(cate, id){
            console.log('list', cate, id);
        },
        '#/show/(.*)': function(id){
            console.log('show'+id);
            $('div').hide();
            $('#'+id).show();
        }
    }, function(){
        console.log('default router');
    });
    app.operate=(function(){
        var btns=[$('#open-page1'),$('#open-page2'),$('#open-page3')];
        $.each(btns,function(idx,item){
            var pageIdx=idx+1;
            item.on('click',function(){
                var oldUrl=location.href.split('#')[0];
                location.replace(oldUrl+"#/show/page"+pageIdx);
                router.start();
            });
        });
    })();
});