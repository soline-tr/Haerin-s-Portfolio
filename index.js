$(".btn").click(function(event)
{
  var button = this.innerHTML;
  buttonClicked(button)
});

function buttonClicked(button)
{
  location.href= "images/webpage/" + button + ".html";
}