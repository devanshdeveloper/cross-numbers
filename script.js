const box = document.getElementById("box");
let currentNum = 1;
let numData = Array(15)
  .fill()
  .map((_, i) => {
    return {
      value: i + 1,
    };
  })
  .sort(() => Math.random() - 0.5);

numData.forEach((e, i) => {
  const pad = document.createElement("button");
  pad.innerHTML = e.value;
  pad.classList.add("pad");
  pad.addEventListener("click", () => {
    console.log(currentNum);
    if (currentNum === e.value) {
      if (currentNum === 15) {
        setTimeout(() => {
          location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }, 1000);
      } 
      pad.classList.add("green");
      currentNum++;
    } else {
      console.log(currentNum, e.value);
      pad.classList.add("red");
      setTimeout(() => {
        pad.classList.remove("red");
        currentNum = 1;
        numData.forEach((e) => {
          e.pad.classList.remove("green");
        });
      }, 1000);
    }
  });
  box.append(pad);
  numData[i].pad = pad;
});
