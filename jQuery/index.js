// $("h1").css("color","red");
//
// // $("button").text("HEY"); Changes text
// $("button").html("<em>Don't Click Me</em>");
//
// $("button").click(function()
// {
//   $("h1").css("color","Purple");
// })
$(document).keydown(function(event)
{
  $("h1").text(event.key);
});
