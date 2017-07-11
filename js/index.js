/***********显示登录********/
var header_login=document.getElementById("header-login");
header_login.onclick=function(e){
	e.preventDefault()
	var login=document.getElementsByClassName("login")[0];
	login.className="login";
}
/**************去掉登录界面*******/
var close_button=document.getElementById("close-button");
close_button.onclick=function(){
	var loginDiv=document.getElementsByClassName("login")[0];
	loginDiv.className="login hide";
}
/***************左侧导航ul*************/
    $('.site-category .j-category li a').mouseover(function(){
      //被点击a的父元素li添加.active
      //$(this).parent().addClass('active').siblings('.active').removeClass('active');

      //获取a的href属性值
      var h = $(this).attr('href');
      //根据ID选择器选中要操作的div
      $(h).addClass('show').siblings('.show').removeClass('show');
	  $(this).css('background','#646464').parent().siblings().children().css('background','#112D5E');
    });
	$('.site-category').mouseout(function(){
		$('.site-category .show').removeClass('show');
	});
	$('#show-box div').mouseover(function(){
		$(this).addClass('show');
		var h=$(this).attr('id');
		$("a[href=#"+h+']').css('background','#646464')	;
		$("a[href=#"+h+']').parent().siblings().children().css('background','#112D5E');
	});
/********小图遮罩层************/




/********验证登录信息*********/

$('#login-btn').click(function(e){
	e.preventDefault();
  //表单序列化	
  var requestData = $('.login-form').serialize();
  //异步提交：$.post  $.ajax
  $.post('data/login.php',requestData,function(data,msg,xhr){
    console.log('开始处理登录结果..');
    if(data.msg!=='succ'){  //登录失败
	  $('.login-info').html(data.reason);
	}else{  //登录成功
	  loginUserName = $('[name="user_name"]').val();  
	  $('.welcome').html('欢迎回来：');
	  $('.header-login').css('border-right','0');
	  $('.user-name a').html(loginUserName);
	  $('.login').fadeOut(); 
	  //loadOrders(loginUserName,1);//加载用户的订单信息
	}
  })
}); 

