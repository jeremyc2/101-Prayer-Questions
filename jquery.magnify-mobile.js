document.addEventListener("DOMContentLoaded", () => {
  if("ontouchstart" in window) {
    var link = document.createElement("a");
    link.href = "101 Prayer Questions.svg";
    document.body.appendChild(link);
    link.click();
  }
});