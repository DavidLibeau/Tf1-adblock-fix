/*Made by David Libeau (DavidLibeau.fr). Under CC-BY*/

$(".iframe_player").mousemove(function(){
    $(".iframe_player>div:not(.playerVideo) p:first-child").html("");
    $(".iframe_player>div:not(.playerVideo) p:last-child").html('<a target="_blank" href="'+$(this).attr("data-src")+'">Play this video in a new tab</a>');
});
