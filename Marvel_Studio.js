let tl = gsap.timeline();
tl.from(".section_01", {
  duration: 2,
  y: 1200,
  scale: 0,
});
tl.from(".nav_bar", {
  opacity: 0,
  duration: 2,
});

tl.to(".nav_bar", {
  style: "sticky",
});

// ----------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(
    ".espe_hover_kraungasbka_sec4ke"
  );

  containers.forEach((container, index) => {
    const video = container.querySelector(".pika_video");

    if (video) {
      console.log(`Adding listeners to container #${index + 1}`);

      container.addEventListener("mouseenter", () => {
        console.log(`Mouse entered container #${index + 1}`);
        video.play();
      });

      container.addEventListener("mouseleave", () => {
        console.log(`Mouse left container #${index + 1}`);
        video.pause();
        video.currentTime = 0;
      });
    } else {
      console.error("No video found in container #", index + 1);
    }
  });
});

const mysong = document.querySelector(".audio_hai");
const icon = document.querySelector(".play");

icon.onclick = function () {
  if (mysong.paused) {
    mysong.play();
    icon.src = "/Lazarev_img_video/pause-button.png";
  } else {
    mysong.pause();
    icon.src = "/Lazarev_img_video/play-button.png";
  }
};

// corsor_effect
document
  .querySelectorAll(".container_section_video_s4r2")
  .forEach((container) => {
    const coursorDiv = container.querySelector(".coursor");

    container.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      coursorDiv.style.display = "flex";

      gsap.to(coursorDiv, {
        x: x,
        y: y,
        duration: 1,
        ease: "power3.out",
      });
    });

    container.addEventListener("mouseout", () => {
      coursorDiv.style.display = "none";
    });
  });

//-----------------------------------------------------------------

const mainDiv = document.querySelector(".row_03_thor");
const video = document.querySelector(".thor_2video");

mainDiv.addEventListener("mouseenter", () => {
  video.play();
});

mainDiv.addEventListener("mouseleave", () => {
  video.pause();
});
