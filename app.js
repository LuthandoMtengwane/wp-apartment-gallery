const imageGallery = () => {
  const highlight = document.querySelector(".gallery-highlight");
  const previews = document.querySelectorAll(".small-image img");
  const nextButton = document.querySelectorAll(".next-btn");
  const prevButton = document.querySelectorAll(".previous-btn");

  previews.forEach((preview) => {
    preview.addEventListener("click", function () {
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace("small", "big");
      highlight.src = bigSrc;
      preview.classList.add("image-active");
    });
  });

  //counter
  let counter = 1;
  const size = previews[0].clientWidth;

  this.style.transform = "translateX(" + -size * counter + "px)";

  //button listners

  nextButton.addEventListener("click", () => {
    this.style.transition = "transform 0.4s ease-in-out";
    counter++;
    this.style.transform = "translateX(" + -size * counter + "px)";
  });
};

imageGallery();
