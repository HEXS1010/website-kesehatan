// logic input
const input = document.getElementById("search");
const clearBtn = document.querySelector(".clear-btn");

// Tampilkan/sembunyikan tombol ×
input.addEventListener("input", () => {
  if (input.value.trim() !== "") {
    clearBtn.style.display = "block";
  } else {
    clearBtn.style.display = "none";
  }
});

// Hapus isi input
clearBtn.addEventListener("click", () => {
  input.value = "";
  clearBtn.style.display = "none";
  input.focus();
});