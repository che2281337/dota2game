let troika = document.querySelector(".lesone");
let location2 = document.querySelector(".loc2");
let mortra = document.querySelector(".pa");
let body = document.querySelector(".b");
let mainblock = document.querySelector(".main");
let bigles = document.querySelector(".lestwo");
let mainmap = document.querySelector(".map");
let location1 = document.querySelector(".loc1")
let timer = document.querySelector(".time");
let scores = document.querySelector(".scor");
let middle = document.querySelector(".mid");
let scorestwo = document.querySelector(".scortwo");
let magaz = document.querySelector(".mgz");
let powert = document.querySelector(".pt");
let desolator = document.querySelector(".desol");
let blackb = document.querySelector(".bkb");
let basher = document.querySelector(".bash");
let agshard = document.querySelector(".shard");
let satan = document.querySelector(".satanic");
let powertext = document.querySelector(".ptext");
let nazad = document.querySelector(".back");
let desoltext = document.querySelector(".dtext");
let bkbtext = document.querySelector(".btext");
let bashertext = document.querySelector(".batext");
let shardtext = document.querySelector(".stext");
let satantext = document.querySelector(".satext");
let location3 = document.querySelector(".loc3");
let bossnazad = document.querySelector(".bossback");
let bossfight = document.querySelector(".bossplay");
let questiontab = document.querySelector(".question");
let questiontext = document.querySelector(".qtext");
let questionbtone = document.querySelector(".qbtnone");
let questionbttwo = document.querySelector(".qbtntwo");
let int = document.querySelector(".intro");
let intinf = document.querySelector(".info");
let introbt = document.querySelector(".introbtn");
let int1;

function getRandom(num){
	let rand = Math.random() * num;
	let round = Math.round(rand);
	return round;
}

introbt.onclick = function(){
	intinf.innerHTML = "Уверены?"
	introbt.innerHTML = "да"

	introbt.onclick = function(){
		intinf.innerHTML = "Точно?"
		introbt.innerHTML = "ДА"

		introbt.onclick = function(){
			intinf.innerHTML = "ок начинаем?"
			introbt.innerHTML = "да"

			introbt.onclick = function(){
				int.style.display = "none";
				mainblock.style.display = "block";
			}
		}
	}
}

let y = [250, 500, 750];
let images = ["cripone.png", "criptwo.png", "cripthree.png"];
let money = 0;
let item = 0;

troika.onclick = function(){
	mortra.style.left = "41%"
	mortra.style.top = "46%"
	if(item >= 3){
		alert("У вас 3 вещи, вы получаете в 4 раза больше голды.")
	}
	function changeLocation1(){
		let time = 30;
		mainblock.style.display = "none";
		timer.style.display = "block";
		location1.style.backgroundImage = "url(loc1/troika.png)"
		scores.style.display = "block";
		location1.style.display = "block";
		int1 = setInterval(create, 500)
		int2 = setInterval(timeout, 1000);
		function timeout(){
			time = time - 1;
			timer.innerHTML = "Время: " + time;
			if(time == 0){
				clearInterval(int2);
				clearInterval(int1);
				alert("Вы нафармили " + money + " голды.")
				timer.style.display = "none";
				scores.style.display = "none";
				location1.style.display = "none";
				mainblock.style.display = "block";
			}
		}
	}

	setTimeout(changeLocation1, 1000);
		
}

bigles.onclick = function(){
	mortra.style.left = "54%"
	mortra.style.top = "63%"
	if(item >= 3){
		alert("У вас 3 вещи, вы получаете в 4 раза больше голды.")
	}
	function changeLocation2(){
		let time = 30;
		mainblock.style.display = "none";
		location1.style.display = "block";
		location1.style.backgroundImage = "url(loc2/bigles.png)"
		timer.style.display = "block";
		scores.style.display = "block";
		int1 = setInterval(create, 500)
		int2 = setInterval(timeout, 1000);
		function timeout(){
			time = time - 1;
			timer.innerHTML = "Время: " + time;
			if(time == 0){
				clearInterval(int2);
				clearInterval(int1);
				alert("Вы нафармили " + money + " голды.")
				timer.style.display = "none";
				scores.style.display = "none";
				location1.style.display = "none";
				mainblock.style.display = "block";
			}
		}
	}

	setTimeout(changeLocation2, 1000);
	
}

function create(){
	let elem = document.createElement('div');
	let randomImg = getRandom(2);
	location1.appendChild(elem);
	elem.classList.add("box");
	elem.style.left = getRandom(1790) + "px";
	elem.style.top = y[getRandom(2)] + "px";
	elem.style.backgroundImage = "url(" + images[randomImg] + ")";
		
	elem.onclick = function(){
		if(item >= 3){
			money = money + 4;
		}else{
			money = money + 1;
		}
		elem.style.display = "none";
		scores.innerHTML = "Деньги: " + money;
	}
			
	setTimeout(hide, 1000)

	function hide(){
		elem.style.display = "none";
	}
}

magaz.onclick = function(){
	mortra.style.left = "36%"
	mortra.style.top = "72%"

	function changeLocation3(){
		scorestwo.style.display = "block";
		scorestwo.innerHTML = "Деньги: " + money;
		mainblock.style.display = "none";
		location2.style.display = "block";
		powert.style.display = "block";
		desolator.style.display = "block";
		blackb.style.display = "block";
		basher.style.display = "block";
		agshard.style.display = "block";
		satan.style.display = "block";

		powert.onclick = function(){
			if(money >= 30){
				powert.style.display = "none";
				powertext.style.color = "red";
				powertext.style.border = "1px solid red";
				powertext.innerHTML = "SOLD";
				money = money - 30;
				scorestwo.innerHTML = "Деньги: " + money;
				scores.innerHTML = "Деньги: " + money;
				item = item + 1;
			}else{
				alert("У вас недостаточно денег");
			}
		}

		desolator.onclick = function(){
			if(money >= 50){
				desolator.style.display = "none";
				desoltext.style.color = "red";
				desoltext.style.border = "1px solid red";
				desoltext.innerHTML = "SOLD";
				money = money - 50;
				scorestwo.innerHTML = "Деньги: " + money;
				scores.innerHTML = "Деньги: " + money;
				item = item + 1;
			}else{
				alert("У вас недостаточно денег");
			}
		}

		blackb.onclick = function(){
			if(money >= 70){
				blackb.style.display = "none";
				bkbtext.style.color = "red";
				bkbtext.style.border = "1px solid red";
				bkbtext.innerHTML = "SOLD";
				money = money - 70;
				scorestwo.innerHTML = "Деньги: " + money;
				scores.innerHTML = "Деньги: " + money;
				item = item + 1;
			}else{
				alert("У вас недостаточно денег");
			}
		}

		basher.onclick = function(){
			if(money >= 50){
				basher.style.display = "none";
				bashertext.style.color = "red";
				bashertext.style.border = "1px solid red";
				bashertext.innerHTML = "SOLD";
				money = money - 50;
				scorestwo.innerHTML = "Деньги: " + money;
				scores.innerHTML = "Деньги: " + money;
				item = item + 1;
			}else{
				alert("У вас недостаточно денег");
			}
		}

		agshard.onclick = function(){
			if(money >= 100){
				agshard.style.display = "none";
				shardtext.style.color = "red";
				shardtext.style.border = "1px solid red";
				shardtext.innerHTML = "SOLD";
				money = money - 100;
				scorestwo.innerHTML = "Деньги: " + money;
				scores.innerHTML = "Деньги: " + money;
				item = item + 1;
			}else{
				alert("У вас недостаточно денег");
			}
		}

		satan.onclick = function(){
			if(money >= 150){
				satan.style.display = "none";
				satantext.style.color = "red";
				satantext.style.border = "1px solid red";
				satantext.innerHTML = "SOLD";
				money = money - 150;
				scorestwo.innerHTML = "Деньги: " + money;
				scores.innerHTML = "Деньги: " + money;
				item = item + 1;
			}else{
				alert("У вас недостаточно денег");
			}
		}

		nazad.onclick = function(){
			mainblock.style.display = "block";
			location2.style.display = "none";
			powert.style.display = "none";
			desolator.style.display = "none";
			blackb.style.display = "none";
			basher.style.display = "none";
			agshard.style.display = "none";
			satan.style.display = "none";
		}
	}

	setTimeout(changeLocation3, 1000);

}

middle.onclick = function(){
	mortra.style.top = "51%"
	mortra.style.left = "47%"

	function changeLocation4(){
		mainblock.style.display = "none";
		location3.style.display = "block";
		bossfight.onclick = function(){
			if(item == 6){
				bossfight.style.display = "none";
				bossnazad.style.display = "none";
				questiontab.style.display = "block";

				questionbtone.onclick = function(){
					questiontext.innerHTML = "Вы прожали бкб. Праймл бьет вас с руки."
					questionbtone.innerHTML = "Ничего не прожимать и бить дальше"
					questionbttwo.innerHTML = "Прожать сатаник"

					questionbtone.onclick = function(){
						questiontext.innerHTML = "Вы не стали ничего прожимать. Вы остались лоу хп"
						questionbtone.innerHTML = "Надеяться на удачу"
						questionbttwo.innerHTML = "Прожать сатаник"

						questionbttwo.onclick = function(){
							questiontext.innerHTML = "Вы снова фулл хп. У праймла тараска"
							questionbtone.innerHTML = "Прожать шарды"
							questionbttwo.innerHTML = "Прожать пт(хз зачем)"

							questionbtone.onclick = function(){
								questiontext.innerHTML = "Вы снова лоу хп. Праймл тоже лоу"
								questionbtone.innerHTML = "Надеяться на удачу"
								questionbtone.style.left = "37%"
								questionbttwo.style.display = "none"

								questionbtone.onclick = function(){
									bossfight.style.display = "none";
									bossnazad.style.display = "none";
									int.style.display = "block";
									mainblock.style.display = "none";
									questiontab.style.display = "none";
									location3.style.display = "none";
									intinf.innerHTML = "Вам прокнул крит в последний миг. Победа!"
									introbt.innerHTML = "Начать сначала"
									introbt.onclick = function(){
										location.reload()
									}
								}	
							}

							questionbttwo.onclick = function(){
								bossfight.style.display = "none";
								bossnazad.style.display = "none";
								int.style.display = "block";
								mainblock.style.display = "none";
								questiontab.style.display = "none";
								intinf.innerHTML = "Вы зачем то прожали пт конечно это вам ничего не дало."
								introbt.innerHTML = "Начать сначала"
								introbt.onclick = function(){
									location.reload()
								}
							}
						}

						questionbtone.onclick = function(){
							bossfight.style.display = "none";
							bossnazad.style.display = "none";
							int.style.display = "block";
							mainblock.style.display = "none";
							questiontab.style.display = "none";
							intinf.innerHTML = "Вы понадеялись на удачу, вам это ничего не дало."
							introbt.innerHTML = "Начать сначала"
							introbt.onclick = function(){
								location.reload()
							}
						}
					}

					questionbttwo.onclick = function(){
						bossfight.style.display = "none";
						bossnazad.style.display = "none";
						int.style.display = "block";
						mainblock.style.display = "none";
						questiontab.style.display = "none";
						intinf.innerHTML = "Вы прожали сатаник при фулл хп следующие несколько ударов вы не выдержали."
						introbt.innerHTML = "Начать сначала"
						introbt.onclick = function(){
							location.reload()
						}
					}
				}

				questionbttwo.onclick = function(){
					bossfight.style.display = "none";
					bossnazad.style.display = "none";
					int.style.display = "block";
					mainblock.style.display = "none";
					questiontab.style.display = "none";
					intinf.innerHTML = "Вы прожали не ту вещь, праймл убил вас скиллами."
					introbt.innerHTML = "Начать сначала"
					introbt.onclick = function(){
						location.reload()
					}
				}
			}else{
				bossfight.style.display = "none";
				bossnazad.style.display = "none";
				int.style.display = "block";
				mainblock.style.display = "none";
				questiontab.style.display = "none";
				intinf.innerHTML = "Перефармленный праймл вас налегке убил. Тильт?"
				introbt.innerHTML = "Начать сначала"
				introbt.onclick = function(){
					location.reload()
				}
			}
		}

		bossnazad.onclick = function(){
			mainblock.style.display = "block";
			location3.style.display = "none";
		}
	}

	setTimeout(changeLocation4, 1000);

}
