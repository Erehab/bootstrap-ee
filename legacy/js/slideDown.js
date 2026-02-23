function eSlideDown(c, getUrl,fixed="na"){
	if(document.URL.search(/customer/i)>=0){
		$(c).on('click', function(event) {
			event.preventDefault();
			// console.log($('#main-content')["0"].firstElementChild.children["0"].firstElementChild)
			if(document.documentElement.childNodes[2].children[1].children[1].children[0].className == 'topPusher'){
				$('.topPusher').css('top', '-1000px')
				setTimeout(function(){$('.topPusher').remove()},1400);
				// $('#main-content nav').css('top', '0px');
				// $('#main-content').css('margin-top',40+'px');
			}else{
					$.ajax({
							url: getUrl,
							type: 'GET',
							dataType:'html',
							complete:function(s){
								console.log(s)
								$('#main-content').prepend('<div class="topPusher" style="transition:1.4s ease; padding:15px 0px; background:#F3EEE3; top:-1000px; position:relative; width:100%; height:auto;">'+s.responseText+'<a class="hider" style="position: absolute; top: 20px; right: 20px;"><i class="fa fa-times" style="font-size:25px;" aria-hidden="true"></i></a></div>')
								var h = document.documentElement.childNodes[2].firstChild.clientHeight;
								// $('#main-content nav').css({
								// 	transition: '1s ease',
								// 	// top: h+'px'
								// });
								// $('#main-content').css({
								// 	'transition': '.8s ease',
								// 	'margin-top': h+40+'px'
								// });
								$('.topPusher').css({
									position: 'relative',
									top:'0px'
								});

								$('.hider').on('click', function(event) {
									event.preventDefault();
									$('.topPusher').css('top', '-1000px')
									setTimeout(function(){$('.topPusher').remove()},1400);
									$('nav').css('top', '0px');
									// $('#main-content').css('margin-top',40+'px');
									
								});
								$("html, body").animate({ scrollTop: 0 }, "slow");

							}
						})
			}
			// console.log(event)
		});
	}else{
		$(c).on('click', function(event) {
				event.preventDefault();

			if(fixed!=='fixed'){
				if(document.documentElement.childNodes[2].firstChild.nextSibling.className !== "navbar navbar-default navbar-fixed-top"){
					$('.topPusher').css('top', '-1000px')
					setTimeout(function(){$('.topPusher').remove()},1400);
					$('nav').css('top', '0px');
					$('body').css('margin-top',40+'px');
				}else{
					$.ajax({
						url: getUrl,
						type: 'GET',
						dataType:'html',
						complete:function(s){
							console.log(s)
							$('body').prepend('<div class="navbar-fixed-top topPusher" style="transition:1.4s ease; padding:10px; background:#F3EEE3; position:relative; top:-1000px; left:0px; width:100%; height:auto;">'+s.responseText+'<a class="hider" style="position: absolute; display: inline-block; top: 20px; right: 20px;"><i class="fa fa-times" style="font-size:25px;" aria-hidden="true"></i></a></div>')
							var h = document.documentElement.childNodes[2].firstChild.clientHeight;
							// $('nav').css({
							// 	transition: '1s ease',
							// 	top: h+'px'
							// });
							// $('body').css({
							// 	'transition': '.8s ease',
							// 	'margin-top': 
							// 	h+40+'px'
							// });
							$('.topPusher').css({
								// display: 'fixed',
								top:'0px'
							});
							$("html, body").animate({ scrollTop: 0 }, "slow");
							$('.hider').on('click', function(event) {
								event.preventDefault();
								$('.topPusher').css('top', '-1000px')
								setTimeout(function(){$('.topPusher').remove()},1400);
								$('nav').css('top', '0px');
								$('body').css('margin-top',40+'px');
								
							});
						}
					})
				}
			}else{
				if(document.documentElement.childNodes[2].firstChild.nextSibling.className !== "navbar navbar-default navbar-fixed-top"){
					$('.topPusher').css('top', '-1000px')
					setTimeout(function(){$('.topPusher').remove()},1400);
					$('nav').css('top', '0px');
					$('body').css('margin-top',40+'px');
				}else{
					$.ajax({
						url: getUrl,
						type: 'GET',
						dataType:'html',
						complete:function(s){
							console.log(s)
							$('body').prepend('<div class="navbar-fixed-top topPusher" style="transition:1.4s ease; padding:10px; background:#F3EEE3; display:fixed; top:-1000px; left:0px; width:100%; height:auto;">'+s.responseText+'<a class="hider" style="position: fixed; display: inline-block; top: 20px; right: 20px;"><i class="fa fa-times" style="font-size:25px;" aria-hidden="true"></i></a></div>')
							var h = document.documentElement.childNodes[2].firstChild.clientHeight;
							$('nav').css({
								transition: '1s ease',
								top: h+'px'
							});
							$('body').css({
								'transition': '.8s ease',
								'margin-top': 
								h+40+'px'
							});
							$('.topPusher').css({
								display: 'fixed',
								top:'0px'
							});
							$("html, body").animate({ scrollTop: 0 }, "slow");
							$('.hider').on('click', function(event) {
								event.preventDefault();
								$('.topPusher').css('top', '-1000px')
								setTimeout(function(){$('.topPusher').remove()},1400);
								$('nav').css('top', '0px');
								$('body').css('margin-top',40+'px');
								
							});
						}
						})
				}
			}
		});
	}

}