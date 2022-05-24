!(function () {
  for (
    var e = document.querySelectorAll(".vplayer"), t = 0;
    t < e.length;
    t++
  ) {
    console.log(e[t].dataset.v);
    var a = "https://img.youtube.com/vi/" + e[t].dataset.v + "/sddefault.jpg",
      r = new Image();
    (r.src = a),
      r.addEventListener("load", void e[t].appendChild(r)),
      e[t].addEventListener("click", function () {
        var e = document.createElement("iframe");
        e.setAttribute("allowfullscreen", ""),
          e.setAttribute("frameborder", "0"),
          e.setAttribute(
            "src",
            "https://www.youtube.com/embed/" +
              this.dataset.v +
              "?rel=0&showinfo=0&autoplay=1"
          ),
          (this.innerHTML = ""),
          this.appendChild(e);
      });
  }
})();
