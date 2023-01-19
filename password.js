let sword = document.querySelector("#sword");
let check = prompt("Сколько будет 7 умножить на 7? Чтобы пройти, нужно ответить правильно. Иначе, вращающийся меч вас не пропустит. Будьте осторожны!")
if (check == 49) {
	alert("Ответ верный. Можете пройти")
	sword.style.display = "none";
}
else {
	sword.style.display = "block";
}


