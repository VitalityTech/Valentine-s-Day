document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const card = document.querySelector(".card");
  const body = document.querySelector("body");
  const trigger = document.getElementById("trigger");

  container.addEventListener("mouseenter", () => {
    card.style.transition = "top 0.5s";
    card.style.top = "-90px";
  });

  container.addEventListener("mouseleave", () => {
    card.style.transition = "top 0.5s";
    card.style.top = "5px";
  });

  container.addEventListener("click", () => {
    card.style.transition = "top 0.5s";
    card.style.top = "-90px";
  });

  body.addEventListener(
    "click",
    () => {
      card.style.transition = "top 0.5s";
      card.style.top = "5px";
    },
    true
  );

  trigger.addEventListener("change", () => {
    if (trigger.checked) {
      card.style.top = "-90px";
    } else {
      card.style.top = "5px";
    }
  });
});
