// scorll line navbar
const scrollLine = document.querySelector(".scroll-line");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  const percent = (scrollTop / docHeight) * 100;

  scrollLine.style.width = `${percent}%`;
});

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

// angka random dari 0
const counters = document.querySelectorAll(".counter");

function animateCounter(counter) {
  const target = Number(counter.dataset.target);
  let current = 0;

  const increment = target / 250;

  function update() {
    current += increment;

    if (current < target) {
      counter.textContent = Math.floor(current);
      requestAnimationFrame(update);
    } else {
      // Angka akhir
      if (target >= 1000) {
        counter.textContent = `${target / 1000}K+`;
      } else if (target === 98) {
        counter.textContent = `${target}%`;
      } else {
        counter.textContent = `${target}+`;
      }
    }
  }

  update();
}

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);

        // Supaya animasi cuma sekali
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.9,
  },
);

counters.forEach((counter) => {
  observer.observe(counter);
});
