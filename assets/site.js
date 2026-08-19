(function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var form = document.getElementById("estimate-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (form.name.value || "").trim();
      var phone = (form.phone.value || "").trim();
      var kind = (form.kind.value || "").trim();
      var note = (form.note.value || "").trim();
      var body = "Name: " + name + "\nPhone: " + phone + "\nClean: " + kind + "\n\n" + note;
      window.location.href = "mailto:tidynestcleanings@gmail.com"
        + "?subject=" + encodeURIComponent("Estimate — Tidy Nest LLC")
        + "&body=" + encodeURIComponent(body);
    });
  }
})();
