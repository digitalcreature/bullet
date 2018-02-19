$(function() {

  var dayoftheweek = ["M", "T", "W", "R", "F", "A", "S"]

  $(".day .title").each(function() {
    $(this).text(dayoftheweek[parseInt($(this).parent(".day").attr("day"))])
  })

  var add$item = function($day, title) {
    $day.append('<input class="item" type="checkbox">' + title + '<br>')
    $day.append($day.find("form#newitem"))
  }

  $("form#newitem").submit(function(e) {
    event.preventDefault();
    var $day = $(this).parent(".day")
    var $itemtitle = $(this).find("input#title")
    var title = $itemtitle.val()
    if (title) {
      add$item($day, title)
      $itemtitle.val("")
      $itemtitle.focus()
    }
  })

})
