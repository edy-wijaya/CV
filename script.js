// Mengambil semua link menu dengan kelas "menu-link"
var menuLinks = document.querySelectorAll(".hd-link");

// Loop melalui setiap link menu dan menambahkan event listener
menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("click", function (e) {
    // Mencegah tindakan default dari link yang di klik
    e.preventDefault();

    // Mengambil target konten dari atribut data-target pada link
    var target = this.dataset.target;

    // Menggunakan teknologi AJAX untuk memuat konten baru
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Mengganti konten lama dengan konten baru
        document.getElementById("content").innerHTML = this.responseText;
      }
    };
    xhr.open("GET", target, true);
    xhr.send();
  });
});
