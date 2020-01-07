// ★初期化
function load() {
if(!localStorage.getItem('mydata')) {
mydata = 0;
localStorage.setItem('mydata', mydata);
}
//死体数処理
mydata = localStorage.getItem('mydata');
document.getElementById("mydata_out").innerHTML ="合計" + mydata + "人が死亡";
//レベル処理
if(!localStorage.getItem('mylevel')) {
level = 1;
localStorage.setItem('mylevel', level);
}
level=localStorage.getItem('mylevel');
document.getElementById("level").innerHTML ="レベル" + level;
//HP処理
maxhpE = Math.floor(Math.random() * 100)+100+(level*5);
nowhpE = maxhpE;
maxhpMe=100+(level*10);
nowhpMe =maxhpMe;
//表示処理
N = document.getElementById("nowEnemy");
NMe = document.getElementById("nowMe");
T = document.getElementById("txt");
T2 = document.getElementById("txt2");
B1 = document.getElementById("btn1");
B2 = document.getElementById("btn2");

power=1;
MAO=0;
enemyKind=0;
N.innerHTML =nowhpE + "/" + maxhpE;
NMe.innerHTML = nowhpMe + "/" + maxhpMe;

yourname.innerHTML = "ゆうしゃ";
nameE.innerHTML ="スライム";

}

// ★ゲージ減少
function attack() {
random = Math.floor(Math.random() * 10);
damage=Number(level)+5+random;
damage*=power;
nowhpE-=damage;

if(enemyKind==0)enemyname="スライム";
if(MAO==1)enemyname="魔王";
if(enemyKind==1)enemyname="オーク";
if(enemyKind==2)enemyname="太田ジョンソン";
if(MAO==2)enemyname="真魔王";

nameE.innerHTML=enemyname;
if (nowhpE > 0) {
  if (random == 0) {
    str = enemyname +"に攻撃をかわされた";
  } else {
    str = enemyname +"に" + damage + "のダメージを与えた";
  }
}

if(nowhpE<=0){
  nowhpE = 0;
  str = enemyname+"は力尽きた";
  if(MAO==1&&nowhpE<=0)str="魔王は死に、世界に平和が訪れた。";
  if(MAO==2)str="真魔王は死に、世界には光が戻った。"
  B1.style.display = "none";
  B2.style.display = "block";
}
T.value = str;
N.innerHTML =nowhpE + "/" + maxhpE;
N.style.width = 200 / maxhpE * nowhpE + "px";

//ＴＥＫＩＮＯｋｏｕＫＩＧＥ
if(MAO==0){
random = Math.floor(Math.random() * 30);
damage=random;
nowhpMe-=damage;
if (nowhpMe > 0) {
if (random == 0) {
str = "あなたは攻撃をかわした";
} else {
str = "あなたは" + damage + "のダメージを与えられた";
}
} else {
nowhpMe = 0;
str = "あなたはは力尽きた";
if(nowhpE<=0){
  str="あなたは勝利した";
}
B1.style.display = "none";
B2.style.display = "block";
}
T2.value=str;
NMe.innerHTML = nowhpMe + "/" + maxhpMe;
NMe.style.width = 200 / maxhpMe * nowhpMe + "px";
}
//MAO
if(MAO>0){
  random = Math.floor(Math.random() * 30);
  random+=15;
  random*=power;
  if(MAO==2)random+=100;
nowhpMe-=random;
if (nowhpMe > 0) {
if (random == 0) {
str = "あなたは攻撃をかわした";
} else {
str = "あなたは" + random + "のダメージを与えられた";
}
} else {
nowhpMe = 0;
str = "あなたはは力尽きた";
if(nowhpE<=0)str="あなたの死と共に...";
B1.style.display = "none";
B2.style.display = "block";
}
T2.value=str;
NMe.innerHTML = nowhpMe + "/" + maxhpMe;
NMe.style.width = 200 / maxhpMe * nowhpMe + "px";
}
power=1;

}

//★ためる
function tameru(){
  power+=1;
  T.value ="あなたは力をためた！";
  if(MAO==1||MAO==2){
  T2.value= enemyname+"「ならば私もそうさせていただこう」";
  }
}

// ★リロード
function reload() {
if(nowhpE<=0){
  level=localStorage.getItem('mylevel');
  level++; 
  localStorage.setItem('mylevel',level);
  document.getElementById("level").innerHTML = "レベル"+level;
}
//HP回復
maxhpE = Math.floor(Math.random() * 100)+100+(level*5);
nowhpE = maxhpE;
maxhpMe=100+(level*10);
nowhpMe =maxhpMe;
//死体数カウント
mydataOld = localStorage.getItem('mydata');
mydata=parseInt(mydataOld);
mydata +=1;
localStorage.setItem('mydata', mydata);
document.getElementById("mydata_out").innerHTML ="合計" + mydata + "人が死亡";

//敵フラグ
if(level>9){
random = Math.floor(Math.random() * 30);
if(random>14){
  enemyKind=1;
}else if(random<3){
  enemyKind=2;
}else{
  enemyKind=0;
}
}
//魔王出現フラグ
if(MAO>0){
MAO=0;
}else if(level>=30&&random>24){
maxhpE = 1000
nowhpE = maxhpE;
MAO=1;
enemyKind=0;
}else if(level>100){
  MAO=2;
  maxhpE=10000
  nowhpE=maxhpE;
  enemyKind=0;
}
enemyname="スライム";
if(MAO==1)enemyname="魔王";
if(MAO==2)enemyname="真魔王";
if(enemyKind==1)enemyname="オーク"
if(enemyKind==2)enemyname="太田ジョンソン"
nameE.innerHTML=enemyname;

//その他フラグ、表示回復
T.value = enemyname+"を見つけた";
T2.value = "あなたは"+enemyname+"に見つけられた";
if(MAO==1)T2.value = "あなたは恐怖し、慄く";
if(MAO==2)T2.value = "あなたは絶望する";
if(enemyKind==2)T2.value="バンボンほにゃほにゃ";
B1.style.display = "block";
B2.style.display = "none";
N.innerHTML = nowhpE + "/" + maxhpE;
N.style.width = 200 / maxhpE * nowhpE + "px";
NMe.innerHTML = nowhpMe + "/" + maxhpMe;
NMe.style.width = 200 / maxhpMe * nowhpMe + "px";
}


//★死体数初期化
function save() {
mydata=0;
localStorage.setItem('mydata', mydata);
document.getElementById("mydata_out").innerHTML ="合計" + mydata + "人が死亡";
}
