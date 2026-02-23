var d = new Date();
var n = d.getMilliseconds();
console.log('Start Customer JS ' + n);
var clip = null;



function body_sizer() {
    var bodyheight = $(window).height();
    var bodywidth = $(window).width();
    if (bodywidth > 992) {
        $("#sidebar").show();
    } else {
        $('#sidebar').hide();
    }
    $("#sidebar").height(bodyheight - 41);

}

function todo_items_loader(pratice_id, element_to_load, todo_type) {
    element_to_load.html('<h1>Loading All...Might take a minute</h1>');
    element_to_load.load("ajax/todo_items_loader.php", {'practice_id': practice_id, 'type': todo_type}, function () {
        $('.load_todo_item_single').each(function () {
            todo_id = $(this).attr('id');
            todo_id_id = "#" + todo_id;
//			$.get("ajax/todo_item_single.php",{'todo_id':todo_id,'practice_id':practice_id},function(data){
//				$(this).html(data);
//				$('.dropdown-toggle',this).dropdownHover();
//				$('.todo_item .panel-body').find("a").attr("target", "_blank");
//				console.log('From GET todo_items_loader');
//			});
            $(this).load("ajax/todo_item_single.php", {'todo_id': todo_id, 'practice_id': practice_id}, function () {
                $('.dropdown-toggle', this).dropdownHover();
                $('.todo_item .panel-body').find("a").attr("target", "_blank");
                console.log('From todo_items_loader');
            });
        })
    });
    $('.nonotes').show();
}

function need_items_loader(pratice_id, element_to_load) {
    element_to_load.html('<h1>Loading All...Might take a minute</h1>');
    element_to_load.load("ajax/need_items_loader.php", {'practice_id': practice_id}, function () {
        $('.load_need_item_single').each(function () {
            need_id = $(this).attr('id');
            need_id_id = "#" + need_id;
            $(this).load("ajax/need_item_single.php", {'need_id': need_id, 'practice_id': practice_id}, function () {
                $('.dropdown-toggle', this).dropdownHover();
            });
        })
    });
    $('.nonotes').show();
}


$(".load_todo_item_single").initialize(function () {
    console.log('jquery.initialize');
    let todo_id = $(this).attr('id');
    $(this).load("ajax/todo_item_single.php", {'todo_id': todo_id, 'practice_id': practice_id}, function () {
        $('.dropdown-toggle', this).dropdownHover();
        $('.todo_item .panel-body').find("a").attr("target", "_blank");
    });
});

$(function () {
    // $.ajax('/ca/intercom/ajax_update_customer.php',{data:{'practice_id':practice_id}});
    $.ajax({
        url: '/ca/ajax/groundhogg_users_update.php',
        data: {'practice_id': practice_id},
        success: function (result) {
            console.log("Groundhogg update: "+result);
        }
    });
    body_sizer();
    $(window).resize(body_sizer);
    $.ajaxSetup({
        complete: function () {
            $('.todo_item .panel-body').find("a").attr("target", "_blank");
            console.log("Add target blank");
        }
    });
    $('.todo_item .panel-body').find("a").attr("target", "_blank");
    $('.sidebar-toggle').click(function () {
        // $('#sidebar').animate({width: 'toggle',duration:3000});
        $('#sidebar').toggle("slow");
    })
    $('.get_ajax').each(function (index) {
        var ajaxpage = $(this).attr('id');
        ajaxpage = "/ca/ajax/" + ajaxpage + ".php?practice_id=" + practice_id;
        console.log("Ajaxpage is " + ajaxpage);
        $(this).load(ajaxpage);
    });
    $('.parsleyvalidate').parsley({
        successClass: "has-success",
        errorClass: "has-error",
        classHandler: function (el) {
            return el.$element.closest(".form-group");
        },
        errorsContainer: function (el) {
            return el.$element.closest(".form-group");
        },
        errorsWrapper: "<div class='help-block'>",
        errorTemplate: "<div></div>"
    });


    (function () {

        $('body').append('\
	<div class="scroll_container" style="position:fixed; right:20px; bottom:20px;">\
		<a href="#" id="scroll_to_the_top">\
			<i class="fa fa-arrow-up" aria-hidden="true"></i></a>\
		<a href="#" id="scroll_to_the_bottom">\
			<i class="fa fa-arrow-down" aria-hidden="true"></i></a>\
	</div>');
    })()

    $('body').on('mouseenter', '.scroll_container', function (e) {
        e.preventDefault();
        console.log('waaassss')
        $(this).prepend(`\
		<a href="<?php echo BASE_URL; ?>/ca/customer.php?page=home&practice_id=${practice_id}" id="scroll_menu_home">\
			<i class="fa fa-home" aria-hidden="true"></i></a>\
		<a href="<?php echo BASE_URL; ?>/ca/customer.php?page=edit_practice&practice_id=${practice_id}" id="scroll_menu_edit">\
			<i class="fa fa-sliders" aria-hidden="true"></i></a>`);

    });
    $('body').on('mouseleave', '.scroll_container', function (e) {
        e.preventDefault();
        $('#scroll_menu_home,#scroll_menu_edit').remove()
    })


    $('#scroll_to_the_top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    $('#scroll_to_the_bottom').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(document).height()
        }, 1000);
    });

// kyle scroll to top


//This expands the email messages in the to-do items
    $('.emaillink').on('click', function (e) {
        console.log(this);
        var emailmsgnum = $(this).attr('title');
        emailmsgnum = emailmsgnum.substr(11);
        console.log(emailmsgnum);
        $(this).parent().load("ajax/getemailmsg.php", {'ce_id': emailmsgnum});
        return false;
    });
    $('.ajaxchange').on('click', function (event) {
        event.stopPropagation();
        href = $(this).attr('href');
        console.log(href);
        $('#ajaxmsgarea').load(href, function () {
            setTimeout(function () {
                window.location.href = window.location.href;
            }, 1200);
        });
        return false;
    });
    $('.filelink').linktype();
    $('.withtip').tooltip();

    $('#showpresets').on('click', function () {
        console.log('Loading...Presets');
        $('#todopresets1').load('/ca/ajax/todopresets.php?practice_id=' + practice_id);
        return false;
    });

    $('#fullshowpresets').on('click', function () {
        console.log('Loading...Presets');
        $('#todopresets1').load('/ca/ajax/todopresetsfull.php?practice_id=' + practice_id);
        return false;
    });

    $("#donetodoall").on('click', function (e) {
        console.log('All Dones');
        var practice_id = $(this).attr('title');
        doat = $("#donetodoall");
        todo_items_loader(practice_id, doat, 'done');
        $(this).blur();
        doat.unbind();
    });


    $("#doneneedall").on('click', function (e) {
        console.log('All Needs');
        var practice_id = $(this).attr('title');
        doat = $("#doneneedall");
        need_items_loader(practice_id, doat, 'done');
        $(this).blur();
        doat.unbind();
    });

    $(document).on('click', '#showcalendartodos', function (e) {
        $("#showcalendartodos").unbind().on('click', function () {
            $('#calendartodos').toggle();
            $('#showcalendartodos').unbind().addClass('disabled');
            $(this).blur();
        });
    });

    $(document).on('click', '#showeventtodos', function (e) {
        console.log('Event Todos');
        var practice_id = $(this).attr('title');
        doat = $("#eventtodos");
        todo_items_loader(practice_id, doat, 'event');
        $(this).blur();
        $("#showeventtodos").unbind().on('click', function () {
            $('#eventtodos').toggle();
            $('#showeventtodos').unbind().addClass('disabled');
            $(this).blur();
        });
    });

    $(document).on('click', '#showalltodos', function () {
        // $('#showcalendartodos').trigger('click');
        $('#showeventtodos').trigger('click');
        $('#donetodoall').trigger('click');
        $(this).blur();
        $('#showalltodos').unbind().addClass('disabled');
    });

    $(document).on('click', '.hide_nonotes', function () {
        console.log('Toggle No Notes');
        $('.nonotes').toggle();
        $(this).blur();
    });

    $(document).on('click', '.todo_toggle', function () {
        if ($(this).data('compressed') == 1) {
            $(this).parents('.todo_item').find('.panel-body').show();
            $(this).parents('.todo_item').find('.panel-footer').show();
            $(this).data('compressed', 0).find('i').first().removeClass('fa-caret-right').addClass('fa-caret-down');
        } else {
            $(this).parents('.todo_item').find('.panel-body').hide();
            $(this).parents('.todo_item').find('.panel-footer').hide();
            $(this).data('compressed', 1).find('i').first().removeClass('fa-caret-down').addClass('fa-caret-right');
        }
        return false;
    });

    $(document).on('click', '.campaign_toggle', function () {
        if ($(this).data('compressed') == 1) {
            $(this).parents('.campaign_item').find('.panel-body').show();
            $(this).parents('.campaign_item').find('.panel-footer').show();
            $(this).data('compressed', 0).find('i').first().removeClass('fa-caret-right').addClass('fa-caret-down');
        } else {
            $(this).parents('.campaign_item').find('.panel-body').hide();
            $(this).parents('.campaign_item').find('.panel-footer').hide();
            $(this).data('compressed', 1).find('i').first().removeClass('fa-caret-down').addClass('fa-caret-right');
        }
        return false;
    });

    $(document).on('click', '.distribution_toggle', function () {
        if ($(this).data('compressed') == 1) {
            $(this).parents('.distribution_item').find('.panel-body').show();
            $(this).parents('.distribution_item').find('.panel-footer').show();
            $(this).data('compressed', 0).find('i').first().removeClass('fa-caret-right').addClass('fa-caret-down');
        } else {
            $(this).parents('.distribution_item').find('.panel-body').hide();
            $(this).parents('.distribution_item').find('.panel-footer').hide();
            $(this).data('compressed', 1).find('i').first().removeClass('fa-caret-down').addClass('fa-caret-right');
        }
        return false;
    });

    if ($(window).width() <= 480) {
        $(document).on('click', '.dropdown-toggle', function () {
            $(this).dropdown();
            console.log('small toggle')
        })
    }

    $(document).on('click', '.need_toggle', function () {
        if ($(this).data('compressed') == 1) {
            $(this).parents('.need_item').find('.panel-body').show();
            $(this).parents('.need_item').find('.panel-footer').show();
            $(this).data('compressed', 0).find('i').first().removeClass('fa-caret-right').addClass('fa-caret-down');
        } else {
            $(this).parents('.need_item').find('.panel-body').hide();
            $(this).parents('.need_item').find('.panel-footer').hide();
            $(this).data('compressed', 1).find('i').first().removeClass('fa-caret-down').addClass('fa-caret-right');
        }
        return false;
    });

    $(document).on('click', '.todo_compress', function () {
        $('.todo_toggle').data('compressed', 0).trigger('click');
    });

    $(document).on('click', '.need_compress', function () {
        $('.need_toggle').data('compressed', 0).trigger('click');
    });

    $(document).on('click', '.campaign_compress', function () {
        $('.campaign_toggle').data('compressed', 0).trigger('click');
    });

    $(document).on('click', '.distribution_compress', function () {
        $('.distribution_toggle').data('compressed', 0).trigger('click');
    });

    $(document).on('click', '.todo_expand', function () {
        $('.todo_toggle').data('compressed', 1).trigger('click');
    });

    $(document).on('click', '.need_expand', function () {
        $('.need_toggle').data('compressed', 1).trigger('click');
    });

    $(document).on('click', '.campaign_expand', function () {
        $('.campaign_toggle').data('compressed', 1).trigger('click');
    });

    $(document).on('click', '.distribution_expand', function () {
        $('.distribution_toggle').data('compressed', 1).trigger('click');
    });

    $(document).on('click', '.note_toggle', function () {
        if ($(this).data('compressed') == 1) {
            $(this).parents('.note_item').find('.panel-body').show();
            $(this).parents('.note_item').find('.panel-footer').show();
            $(this).data('compressed', 0).find('i').first().removeClass('fa-caret-right').addClass('fa-caret-down');
        } else {
            $(this).parents('.note_item').find('.panel-body').hide();
            $(this).parents('.note_item').find('.panel-footer').hide();
            $(this).data('compressed', 1).find('i').first().removeClass('fa-caret-down').addClass('fa-caret-right');
        }
        return false;
    });

    $(document).on('click', '.note_compress', function () {
        $('.note_toggle').data('compressed', 0).trigger('click');
    });

    $(document).on('click', '.note_expand', function () {
        $('.note_toggle').data('compressed', 1).trigger('click');
    });

    $(document).on('click', '#showallnotes', function () {
        console.log("Get All Notes");
        var practice_id = $(this).attr('title');
        $('.noteitems').load('/ca/ajax/notes_all.php?practice_id=' + practice_id);
    });

    $(document).on('click', '.hidenote', function () {
        noteid = $(this).attr('noteid');
        console.log(noteid);
        $.get("/ca/ajax/note_done.php", {noteid: noteid});
        $(this).parents('.note_item').hide();
        return false;
    });

    $(document).on('click', '.need_change a', function () {
        need_id = $(this).attr('title');
        need_change = $(this).attr('data-change');
        replace_item = $(this).parents('.need_item');
        console.log('Need Change ' + need_change);
        $.ajax({
            url: "/ca/ajax/need_change.php",
            data: {need_id: need_id, need_change: need_change}
        }).done(function (data) {
            replace_item.replaceWith(data);
            $('.dropdown-toggle').dropdownHover();
        });
        return false;
    });

    $(document).on('click', '.need_change button', function () {
        need_id = $(this).attr('title');
        window.location = '/ca/customer.php?page=needitem&practice_id=' + practice_id + '&edit=' + need_id;
    });
// $('#showcalendartodos').trigger('click');
    $('#showeventtodos').trigger('click');

    $(document).bind('keydown', 'a', function () {
        $('#donetodoall').trigger('click');
        $('#showallnotess').trigger('click');
        $('#doneneedall').trigger('click');
    });
    $(document).bind('keydown', 'b', function (evt) {
        window.location = '/ca/customer.php?page=hydra&practice_id=' + practice_id;
    });
    $(document).bind('keydown', 'c', function () {
        $('.todo_compress').trigger('click');
        $('.need_compress').trigger('click');
        $('.note_compress').trigger('click');
    });
    $(document).bind('keydown', 'd', function (evt) {
        window.location = '/ca/customer.php?page=domain&practice_id=' + practice_id;
    });
    $(document).bind('keydown', 'e', function (evt) {
        window.location = '/ca/customer.php?page=edit_practice&practice_id=' + practice_id;
    });
    $(document).bind('keydown', 'f', function (evt) {
        $('#filter').focus();
        evt.preventDefault()
    });
    // No G
    $(document).bind('keydown', 'h', function (evt) {
        window.location = '/ca/customer.php?page=home&practice_id=' + practice_id;
    });
    $(document).bind('keydown', 'i', function (evt) {
        window.location = '/ca/customer.php?page=ir&practice_id=' + practice_id;
    });
    // No J
    // No K
    $(document).bind('keydown', 'l', function (evt) {
        window.location = '/ca/customer.php?page=local&practice_id=' + practice_id;
    });
    $(document).bind('keydown', 'm', function () {
        $('.nonotes').toggle();
    });
    $(document).bind('keydown', 'n', function (evt) {
        window.location = '/ca/customer.php?page=needitem&practice_id=' + practice_id;
    });
    // No O
    $(document).bind('keydown', 'p', function (evt) {
        window.location = '/ca/customer.php?page=review_edit&practice_id=' + practice_id;
    });
    $(document).bind('keydown', 'q', function (evt) {
        window.location = '/ca/customer.php?page=todoitem&practice_id=' + practice_id;
    });
    $(document).bind('keydown', 'r', function () {
        location.reload(true);
    });
    $(document).bind('keydown', 's', function (evt) {
        window.location = '/ca/customer.php?page=calendar&practice_id=' + practice_id;
    });
    // No T
    $(document).bind('keydown', 'u', function (evt) {
        window.location = '/ca/customer.php?page=customer&practice_id=' + practice_id;
    });
    $(document).bind('keydown', 'v', function (evt) {
        window.location = '/ca/customer.php?page=sample_video&practice_id=' + practice_id;
    });
    $(document).bind('keydown', 'w', function (evt) {
        window.location = '/ca/customer.php?page=review_options&practice_id=' + practice_id;
    });

    $(document).bind('keydown', 'x', function () {
        $('.todo_expand').trigger('click');
        $('.need_expand').trigger('click');
        $('.note_expand').trigger('click');
    });
    // No Y
    $(document).bind('keydown', 'z', function (evt) {
        window.open("/ca/bugherd_redirect.php?practice_id=" + practice_id, '_blank');
    });

    $(document).bind('keydown', '$', function (evt) {
        window.location = '/ca/customer.php?page=finance&practice_id=' + practice_id;
    });
    // Other characters?

    var d = new Date();
    var n = d.getMilliseconds();
    console.log('End Customer JS ' + n);

})
;
