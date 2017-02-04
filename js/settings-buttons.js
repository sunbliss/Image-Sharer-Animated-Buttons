 /* Bottom Settings Buttons */
$(".btn").on("click", function() {
  $this = $(this);
  $(".img-sharer").attr('class', 'img-sharer ' + $this.attr("data-classes"));
  $(".active").removeClass("active");
  $this.addClass("active");
});

