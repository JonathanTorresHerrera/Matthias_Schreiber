/** code for search effect **/
const clearInput = () => {
  const input = document.getElementsByTagName("input")[0];
  input.value = "";
};

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);

/** code for testimonials effect **/

$(".hover").mouseleave(function () {
  $(this).removeClass("hover");
});
