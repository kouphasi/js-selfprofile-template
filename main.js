//命令通りに動いて、自由度が高い！！
const display = document.getElementById("list");
const button = document.getElementById("button");
let count = 0;
const profile = [
  "大学:",
  "趣味:",
  "好きな食べ物：",
  "好きな歌手:",
  "座右の銘:",
];

button.onclick = () => {
  //中身の部分を変えよう！！
  const li = document.createElement("li");
  li.textContent = profile[count];

  display.appendChild(li);
  count += 1;
};
