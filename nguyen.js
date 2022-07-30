const arrName = ['Phượng', 'Phương', 'Sang', 'Nguyên'];
document.getElementById("start").onclick=()=>{
  let randomIndex=Math.floor(Math.random()*arrName.length);
  document.getElementById("title").textContent="Bạn "+arrName[randomIndex]+" là người cute nhất nhóm nhé <3";
}