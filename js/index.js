$(function(){
//物流切换
$(".xm-tab li").click(function(){
    $(this).find("a").addClass("current").parent().siblings().find("a").removeClass("current");
	$(".xm-nr>div").eq($(this).index()).show().siblings('div').hide();
});

//修改登录密码切换

//选择默认地址
	$('.xm-pointall').click(function(){
		$(this).find("i").toggle();
		if($(this).find("i").css("display")=="block"){
			$('.xm-point i').css("display","block");
		}else{
			$('.xm-point i').css("display","none");
		}
	})
	$('.xm-add0 .xm-point').click(function(){
		$(this).find("i").toggle();
		$('.xm-pointall').find("i").css("display","block");

		$('.xm-add0 .xm-point').each(function(i){
			if($(this).find("i").css("display")=="none"){
				$('.xm-pointall').find("i").css("display","none");

			}
		})
	});
	$(".xm-clear").click(function(){

		$('.xm-add0 .xm-point').each(function(i){
			if($(this).find("i").css("display")=="block"){
				$(this).parent('.xm-add0').css("display","none");
			}
		});
		$('.xm-pointall').find("i").css("display","none");
	})



$(document).ready(function(e) {
	// 设定每一行的宽度=屏幕宽度+按钮宽度
	$(".line-scroll-wrapper").width($(".line-wrapper").width() + $(".xm-add-clear").width()+20);
	// 设定常规信息区域宽度=屏幕宽度
	$(".xm-add0").width($(".line-wrapper").width());
	// 设定文字部分宽度（为了实现文字过长时在末尾显示...）
//        $(".xm-add0-r").width($(".xm-add0").width() -100);
	// 获取所有行，对每一行设置监听
	var lines = $(".xm-add0");
	var len = lines.length;
	var lastX, lastXForMobile;
	// 用于记录被按下的对象
	var pressedObj;  // 当前左滑的对象
	var lastLeftObj; // 上一个左滑的对象
	// 用于记录按下的点
	var start;
	// 网页在移动端运行时的监听
	for (var i = 0; i < len; ++i) {
		lines[i].addEventListener('touchstart', function(e){
			lastXForMobile = e.changedTouches[0].pageX;
			pressedObj = this; // 记录被按下的对象
			// 记录开始按下时的点
			var touches = event.touches[0];
			start = {
				x: touches.pageX, // 横坐标
				y: touches.pageY  // 纵坐标
			};
		});
		lines[i].addEventListener('touchmove',function(e){
			// 计算划动过程中x和y的变化量
			var touches = event.touches[0];
			delta = {
				x: touches.pageX - start.x,
				y: touches.pageY - start.y
			};
			// 横向位移大于纵向位移，阻止纵向滚动
			if (Math.abs(delta.x) > Math.abs(delta.y)) {
				event.preventDefault();
			}
		});
		lines[i].addEventListener('touchend', function(e){
			if (lastLeftObj && pressedObj != lastLeftObj) { // 点击除当前左滑对象之外的任意其他位置
				$(lastLeftObj).animate({marginLeft:"0"}, 500); // 右滑
				lastLeftObj = null; // 清空上一个左滑的对象
			}
			var diffX = e.changedTouches[0].pageX - lastXForMobile;
			if (diffX < -150) {
				$(pressedObj).animate({marginLeft:"-80px"}, 500); // 左滑
				lastLeftObj && lastLeftObj != pressedObj &&
				$(lastLeftObj).animate({marginLeft:"0"}, 500); // 已经左滑状态的按钮右滑
				lastLeftObj = pressedObj; // 记录上一个左滑的对象
			} else if (diffX > 150) {
				if (pressedObj == lastLeftObj) {
					$(pressedObj).animate({marginLeft:"0"}, 500); // 右滑
					lastLeftObj = null; // 清空上一个左滑的对象
				}
			}
		});
	}

});


//我的订单切换
	$(".help-question").focus(function () {
		$(".help-cover").show();
		$(".help-block3").hide();
		$(".help-icon").css("left","28px");
		$(this).css({ textAlign: "left", width: "250" });
		$(this).siblings("#help-cancel").show();
	});
	$("#help-cancel").click(function () {
		$(".help-cover").hide();
		$(".help-block3").hide();
		$(".help-icon").css("left","114px");
		$(this).siblings(".help-question").css({ textAlign: "center", width: "290" });
		$(this).hide();
	});

//tanchu
	$(".buy").click(function(){
		$(".cartwrap").show();
		return false;
	});
	$(".category-detail p").click(function(){
		$(".cartwrap").show();
		return false;
	});
	$(".close").click(function(){
		$(".cartwrap").hide();
		return false;
	});

	$(".cart-color li").click(function(){
		$(this).find("a").addClass("current").parent().siblings().find("a").removeClass("current");
		$(".xm-nr>div").eq($(this).index()).show().siblings('div').hide();
	});
	//购物车输入
	$(".text_box").on('keyup',function(e){
		$(this).val($(this).val().replace(/\D/g,''));

	});
	$(".text_box").blur(function(){
		if($(this).val()==""){
			$(this).val(1);
		}
	})
	//购物车减
	$(".jian").on('click',function(e){
		var t=$(this).parent().find('input[class*=text_box]');
		t.val(parseInt(t.val())-1)
		if(parseInt(t.val())<1){
			t.val(1);
		}
	})
	//购物车加
	$(".jia_01").on('click',function(e){
		var t=$(this).parent().find('input[class*=text_box]');
		t.val(parseInt(t.val())+1);
	});

});
