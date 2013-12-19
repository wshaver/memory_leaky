var global = this;
$(function(){
    //$.expr.cacheLength = 1;
    var elements = $('.buttons .elements');
    var listeners = $('.buttons .listeners');
    var animate = $('.buttons .animate');
    var remove = $('.buttons .remove');
    var everything = $('.buttons .everything');
    var process = $('.buttons .process');

    process.click(function(){
        var i = 0;
        function process(){
            setTimeout(function(){
                if(i < 1000){
                    process();
                }
                i++;
                for(var x = 0; x < 100; x++){
                   $('.asdf' + i + x).html('hi');
                }
                console.log('processed', i);
            }, 0);
        }
        process();
    });


    elements.click(function(){
        var div = $('<div class="box">load some data</div>');
        $('.content').append(div);
    });

    listeners.click(function(){
        $('.content div.box').click(function(el){
            global.dl = new DataLoader(el.target);
            global.dl.load();
        });
    });

    animate.click(function(){
        var boxes = $('.content .box');
        boxes.animate({height:'400px'},{duration:1000, done:function(){
            console.log('animate done', elements);
        } } );
    });

    remove.click(function(){
        $('.content').empty();
    });

    everything.click(function(){
        $('body').empty();
    });
});

var DataLoader = function(el){
    this.el = el;
};
DataLoader.prototype.load = function() {
    var self = this;
    var $el = $(self.el);
    $el.html('loading');
    $.ajax('dummy.txt').always(function(value){
        setTimeout(function(){
            $el.html(value.responseText);
            console.log('done loading');
        },2000);
    });
};