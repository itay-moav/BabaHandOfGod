jQuery.widget("ui.babaHandOfGod",{
    _init: function(){
        this.options = jQuery.extend({
            'dir': 'top',
            'PointTo': null,
            'deltaLeft:':0,
            'deltaHeight':0,
			'src': 'babafinger.gif''
        }, this.options);
        $(this.element).click($.proxy(this.showPoint, this));
    },

    showPoint: function(E){
        E.stopPropagation();
        $("#baba-god").remove();
        var Img = $("<img id='baba-god' src='" + this.options.src +"' style='display: block;position: absolute;' />");
                $(Img).click(function(){$(this).remove()});

        var pos = $(this.options.PointTo).offset();
        var width = window.innerWidth || document.body.clientWidth;
        var height = window.innerHeight || document.body.clientHeight;
        var speed=750;

            switch(this.options.dir){
                case 'top':
                        $(Img).css({
                                left: pos.left-220,
                                        top:  (height+100) + 'px',
                                        '-moz-transform': 'rotate(180deg)',
                                        '-webkit-transform': 'rotate(180deg)'
                        }).animate({top:(pos.top+$(this.options.PointTo).height()+15)},speed);
                    break;

                case 'right':
                        $(Img).css({
                                left:                           width+'px',
                                        top:                            pos.top-($(Img).height()-$(Img).width()) + 'px',
                                        '-moz-transform':       'rotate(90deg)',
                                        '-webkit-transform': 'rotate(90deg)'
                        }).animate({left:(pos.left +(($(Img).height()-$(Img).width())/2))+$(Img).width()+'px'},speed);
                    break;

                    case 'bottom':
                        $(Img).css({
                                left:                           (pos.left+($(this.options.PointTo).width()/2)-($(Img).width()/2)) + this.options.deltaLeft,
                                        top:                            height+this.options.deltaHeight,
                                        '-moz-transform':       'rotate(180deg)',
                                        '-webkit-transform': 'rotate(180deg)'
                        }).animate({top:(pos.top+$(this.options.PointTo).height())},speed);
                    break;

                case 'left':
                        $(Img).css({
                                left:                           '-' + $(Img).height() +'px',
                                        top:                            (pos.top-$(Img).height()/2) + 'px',
                                        '-moz-transform':'rotate(270deg)',
                                        '-webkit-transform': 'rotate(270deg)'
                        }).animate({left:(pos.left-($(Img).width())-$(Img).width()/2)+'px'},speed);
                    break;

                        default:
                    break;
 
            }
            $('body').append(Img);
            return false;
    }
});
:q                         