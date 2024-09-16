function upload() {
  const files = document.getElementById("file-input").files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      document.querySelector(".gallery").appendChild(img);
      localStorage.setItem(`image${i}`, e.target.result);
    };
    reader.readAsDataURL(file);
  }
}

window.onload = function () {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("image")) {
      const img = document.createElement("img");
      img.src = localStorage.getItem(key);
      document.querySelector(".gallery").appendChild(img);
    }
  }
};
