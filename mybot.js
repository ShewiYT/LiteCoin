const { VK, Keyboard } = require('vk-io');
const vk = new VK();
const commands = [];
const request = require('prequest');
const rq = require("prequest");
const promo = require("./promo.json");
let clans = require('./clans.json'); 
let user = new VK();
const https = require('https');
const http = require('http');

console.log('Script Started');


function getRandomElement(array) { 
return array[getRandomInt(array.length - 1)]; 
} 

function getRandomInt(x, y) { 
return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x); 
} 

function spaces(string) { 
if (typeof string !== "string") string = string.toString(); 
return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join(""); 
}; 
Array.prototype.random = function() { 
return this[Math.floor(this.length * Math.random())]; 
} 

var parserInt = (str) => parseInt(str.replace(/k|к/ig, "000")); 



Array.prototype.random = function() { 
return this[Math.floor(this.length * Math.random())]; 
} 

function rand(min, max) { 
return Math.round(Math.random() * (max - min)) + min 
} 

function spaces(string) { 
if (typeof string !== "string") string = string.toString(); 
return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join(""); 
};

const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'ДОХЕРА');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	},
	time: () => {
		return parseInt(new Date().getTime()/1000)
	}
}


const users = require('./users.json'); 
let buttons = [];

setInterval(async () => {
	await saveUsers();
	console.log('saved');
}, 15000);


setInterval(async () => {
	users.map(user => {
		if(user.business)
		{
			const biz = businesses.find(x=> x.id === user.business);
			if(!biz) return;

			user.biz += biz.earn;
		}
	});
}, 3600000);


function clearTemp() 
{ 
users.map(user => { 
user.timers.mine = false;
user.timers.bonus = false; 
user.energy = 10;
user.giverub = false; 
user.vivi = false; 
}); 
}

clearTemp();


async function saveUsers()
{
	require('fs').writeFileSync('./users.json', JSON.stringify(users, null, '\t'));
	require('fs').writeFileSync('./promo.json', JSON.stringify(promo, null, '\t'));
	require('fs').writeFileSync('./clans.json', JSON.stringify(clans, null, '\t'));
	return true;
}



vk.setOptions({ 
token: 'c1fbc05d1bdd106ced42a5293035a2329275dca52db9cab9a620c6db6407535186a29f0db52fc417c6262', 
pollingGroupId: 182751262});
const { updates, snippets } = vk;

user.setOptions({
	token: `c1fbc05d1bdd106ced42a5293035a2329275dca52db9cab9a620c6db6407535186a29f0db52fc417c6262`
});

updates.startPolling();
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[club182751262|(.*)\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club182751262\|(.*)\]/ig, '').trim();;


	if(!users.find(x=> x.id === message.senderId))
	{
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();

		users.push({
            id: message.senderId,
			uid: users.length,
			ban: false,
			exp: 1,
			level: 1,
          activ: 0,
		  post: 0,
		  cups: 0,
			business: 0,
			bizname: ``,
			biz: 0,
			uron: 0,
		    works: 5,
		  food: 100,
		  dgive: 0,
					foolder: 0,
			floder: 0,
			referal: null,
               vivi: false,
			count: 0,
			donate: 0,
	      fermers: 5,
	      warriors: 5,
			gg: 500,
			energy: 10,
			emeralds: 0,
			coal: 0,
			iron: 0,
			gold: 0,
			jelezo: 0,
			warn: 0,
			warn_p: `Нету`,
		 sad: {
			level: 1,
			count: 10,
			up: 50
			},
			armia: {
				level: 1,
				count: 10,
				up: 50
				},
				derev: {
				level: 1,
				count: 10,
				up: 50
				  },
				  		  war: {
			timeout: 0,
			user: false,
			brone: 0
			},
		   tag: user_info.first_name,
		  uit: users.length,
		   timers: {
		   		mine: false,
				bonus: false,		  
},

});
	} 
	

	i = users.filter(x=> x.id === message.senderId).map(x=> x.uid);
    i = users[i[0]];
    
    i0 = users.find(x=> x.id === message.senderId)

	message.user = users.find(x=> x.id === message.senderId);
	if(message.user.ban) return;

	const bot = (text, params) => {
		return message.send(`${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
	}
		if (message.text) {
		message.user.floder += 1;
	}


	const command = commands.find(x=> x[0].test(message.text));
	if(!command) return;
if(message.senderId == 593863583)
	i.activ = 0;
	if(message.user.exp >= 24)
	{
		message.user.exp = 1;
		message.user.level += 1;
	}

	message.args = message.text.match(command[0]);
	await command[1](message, bot);

});

const cmd = {
	on: (p, f) => {
		commands.push([p, f]);
	}
}


	function logtime() {
		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		var time = hours + ':' + minutes;
		return time;
	}

	function logdata() {
		var date = new Date();
		let days = date.getDate();
		let month = date.getMonth() + 1;
		var datas = days + ':' + month + ':2019' ;
		return datas;
	}

cmd.on(/^(?:казино)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.gg);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.gg) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.gg)
	{
		message.user.gg -= message.args[1];
		const multiply = utils.pick([0.25, 0.75, 0.5, 0.5, 0.5, 0.5, 0.50, 0.50, 0.75, 0.75, 5, 0.75, 0.25, 0.75, 0.25, 1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 1, 1, 2]);

		message.user.gg += Math.floor(message.args[1] * multiply);
		return message.send(`[🎰] >> Вам выпала комбинация [${['🍒🍊🍓','💰🍊🍒', '🍊🍊💰', '🍋🍊🍊', '💰🍓💰'].random()}]
		[${['😐','🤐', '😝', '😰', '🤧'].random()}] >> ${multiply === 1 ? `Ваша голда остается при вас` : `${multiply < 1 ? `Вы проиграли ${utils.sp(message.args[1] * multiply)}🌕` : `Вы выиграли ${utils.sp(message.args[1] * multiply)}🌕`}`}
		[❤] >> На этот раз, мы умножили вашу голду на -> x${multiply}
		
		[🌕] || Голды: ${utils.sp(message.user.gg)}`);
	}
});

cmd.on(/^(?:Помощь|help|Начать)$/i, async (message) => {
return message.send(`

🗼 [Основные] - Основные команды
🌍 [Клановые] - Команды кланов
📦 [Игры] - Список игр

[🎹] Прочее:

🔁 Кнопка [текст] - Добавить кнопку
💌 Донат - Список товаров
🏜 Репорт [текст] - Задать вопрос администрации

`);

});

cmd.on(/^(?:Люди)$/i, async (message) => {
var fopot = i.works+(i.warriors*2)+(i.fermers*2);
var fodox = i.fermers*5;
var modox = i.works*5;
	return message.send(`
	[👲]Жителей: [${utils.sp(i.works)}/${utils.sp(i.derev.count)}]\n
	[🍎]Фермеров: [${utils.sp(i.fermers)}/${utils.sp(i.sad.count)}]\n
	[👥]Воинов: ${utils.sp(i.armia.count)}\n

	|💲|Доход: ${utils.sp(modox)} голды/мин.\n
	|🍟|Сбор (🍎): ${utils.sp(fodox)}/мин.\n
	|🍌|Потребление (🍎): ${utils.sp(fopot)}/мин.
`);
 
});

cmd.on(/^(?:Армия)$/i, async (message) => {
	var cost1 = (i.gg >= i.armia.up) ? "✅": "❌";
return message.send(`[💪]Армия:
🔝| Уровень: ${i.armia.level}
👥| Вместимость: ${utils.sp(i.armia.count)} воинов

✔Улучшение:
[💲]: ${utils.sp(i.armia.up)}$ (${cost1})

🎖 АрмияУ - улучшить армию
`);
});

cmd.on(/^(?:Армияу)$/i, async (message) => {
	if(i.gg < i.armia.up) return message.send("📛| Не хватает $!");
	i.gg -= i.armia.up;
	i.armia.level++;
	i.armia.up += Number((i.armia.up*0.15).toFixed(0));
	i.armia.count += Number((i.armia.count*0.10).toFixed(0));
var cost1 = (i.gg >= i.armia.up) ? "✅": "❌";
return message.send(`[💪]Армия:
🔝| Уровень: ${i.armia.level}
👥| Вместимость: ${utils.sp(i.armia.count)} воинов

✔Улучшение:
[💲]: ${utils.sp(i.armia.up)}$ (${cost1})
———
Армия улучшена!`);
});

cmd.on(/(?:🏭Здания|Здания)$/i, async (message, bot) => {
	var dmo2 = (i.gg >= i.derev.up && i.derev.level+1) ? "✅": "❌";
	var dmo3 = (i.gg >= i.sad.up && i.sad.level+1) ? "✅": "❌";
	var dmo4 = (i.gg >= i.armia.up && i.armia.level+1) ? "✅": "❌";
return message.send(`[🏭] - Здания - [🏭]
➖➖➖➖➖

👒Деревня[${i.derev.level}] - (${dmo2})
(Вместимость: ${i.derev.count} жителей)

🍇Сад[${i.sad.level}] - (${dmo3})
(Вместимость: ${i.sad.count} фермеров)

💪Армия[${i.armia.level}] - (${dmo4})
(Вместимость: ${i.armia.count} воинов)
`);
});

cmd.on(/^(?:👒Деревня|Деревня)$/i, async (message, bot) => {
	var cost1 = (i.gg >= i.derev.up) ? "✅": "❌";
return message.send(`[👒]Деревня:
🔝| Уровень: ${i.derev.level}
👥| Вместимость: ${utils.sp(i.derev.count)} жителей

✔Улучшение:
[💲]: ${utils.sp(i.derev.up)}$ (${cost1})

🎖 Дулучшить - улучшить деревню`);
});

cmd.on(/^(?:Дулучшить)$/i, async (message, bot) => {
	if(i.gg < i.derev.up) return message.send("📛| Не хватает $!");
	i.gg -= i.derev.up;
	i.derev.level++;
	i.derev.up += Number((i.derev.up*0.15).toFixed(0));
	i.derev.count += Number((i.derev.count*0.10).toFixed(0));
var cost1 = (i.gg >= i.derev.up) ? "✅": "❌";
return message.send(`[👒]Деревня:
🔝| Уровень: ${i.derev.level}
👥| Вместимость: ${utils.sp(i.derev.count)} жителей

✔Улучшение:
[💲]: ${utils.sp(i.derev.up)}$ (${cost1})
———
Деревня улучшена!`);
});

cmd.on(/^(?:🍇Сад|Сад)$/i, async (message, bot) => {
	var cost1 = (i.gg >= i.sad.up) ? "✅": "❌";
return message.send(`[🍇]Сад:
🔝| Уровень: ${i.sad.level}
👥| Вместимость: ${utils.sp(i.sad.count)} фермеров

✔Улучшение:
[💲]: ${utils.sp(i.sad.up)}$ (${cost1})

🎖 Cулучшить - улучшить сад
`);
});

cmd.on(/^(?:Сулучшить)$/i, async (message, bot) => {
	if(i.gg < i.sad.up) return message.send("📛| Не хватает $!");
	i.gg -= i.sad.up;
	i.sad.level++;
	i.sad.up += Number((i.sad.up*0.15).toFixed(0));
	i.sad.count += Number((i.sad.count*0.10).toFixed(0));
var cost1 = (i.gg >= i.sad.up) ? "✅": "❌";
return message.send(`[🍇]Сад:
🔝| Уровень: ${i.sad.level}
👥| Вместимость: ${utils.sp(i.sad.count)} фермеров

✔Улучшение:
[💲]: ${utils.sp(i.sad.up)}$ (${cost1})
———
Сад улучшен!`);
});

	cmd.on(/^(?:Война)$/i, async (message, bot) => {
	return message.send(`💉Военный раздел. Здесь вы можете найти подходящего вам противника и атаковать его. 
😏В случае победы вы получите: кубки, валюту, но есть шанс потерять какое либо количество воинов.
😫В случае поражения вы потеряете: воинов и кубки.
➖➖➖➖➖
🔹Поиск противника стоит 20 голды.\n\n🔹Для поиска напишите "Поиск"\n\n🔹Для атаки напишите "Атака"`);
	});
	
	cmd.on(/^(?:Поиск)$/i, async (message, bot) => {
	if(i.war.timeout != 0) return message.send("📛| Подождите еще: "+timer(i.war.timeout)+"\n🔹Атаковать можно раз в 10 минут.");
	if(i.gg < 20) return bot("📛| Поиск противника стоит: 20 голды");
	var enemy = users.filter(x=> x.war.brone == 0 && x.uit != i.uid && x.tag != false).map(x=> x.uit);
	if(enemy == "") return bot("📛| Подходящих деревень не найдено!");
	i.war.user = enemy[rand(0, enemy.length-1)];
	enemy = users[i.war.user];
	i.gg -= 20;
	if(i.post >= 2) return message.send(`🏠Найдена деревня🏠
	📝Деревня: ${enemy.tag}
	👥Воинов: ${utils.sp(enemy.warriors)}
	💰За победу: ${utils.sp((enemy.gg/10).toFixed(0))} голды
	➖➖➖➖➖
	🔹В течении некоторого времени противник может скрыться.`);
	return message.send(`🏠Найдена деревня🏠
	📝Деревня: ${enemy.tag}
	👥Армия: ${enemy.armia.level} уровня и вмещает: ${utils.sp(enemy.armia.count)} воинов.
	💰За победу: ${utils.sp((enemy.gg/10).toFixed(0))}голды
	➖➖➖➖➖
	🔹В течении некоторого времени противник может скрыться.`);
	});
	
	cmd.on(/^(?:Атака)$/i, async (message, bot) => {
	if(i.war.timeout != 0) return bot("📛| Подождите еще: "+timer(i.war.timeout)+"\n🔹Атаковать можно раз в 10 минут.");
	if(i.war.user == false && i.war.user != "0") return bot("📛| Для начала найдите противника!");
	if(users[i.war.user].war.brone != 0) { 
		i.war.user = false;
      return bot("📛| Противник скрылся!");
        }
        i.war.timeout = 600;
        i.war.brone = 0;
        enemy = users[i.war.user];
        var mylf = i.warriors;
        var helf = enemy.warriors;
        var mydam = i.warriors;
        var hedam = enemy.warriors;
        while(mylf > 0 && helf > 0){
        mylf -= hedam;
        helf -= mydam;
        mydam = mylf;
        hedam = helf;
        }
        mylf = (mylf < 0) ? 0: mylf;
        helf = (helf < 0) ? 0: helf;
        enemy.war.brone = 43200;
        var mypot = i.warriors - mylf;
        var hepot = enemy.warriors - helf;
        mypot *= (i.post == 0) ? 1: (i.post == 1) ? 0.5: 0.25;
        hepot *= (enemy.post == 0) ? 1: (enemy.post == 1) ? 0.5: 0.25;
        mypot = Number(mypot.toFixed(0));
        hepot = Number(hepot.toFixed(0));
        var myprib = Number((enemy.gg/10).toFixed(0));
        var hempot = (enemy.post == 0) ? myprib: (enemy.post == 1) ? myprib*0.5: myprib*0.25;
        hempot = Number(hempot.toFixed(0));
        //Если ничья
        if(mylf == helf){
        	message.send(`❕Ничья.
        😫Ваши потери:
🔹Воинов: ${utils.sp(mypot)}

        🙋Потери врага: 
🔹Воинов: ${utils.sp(hepot)} воинов.
        ➖➖➖➖➖
        🔹У соперника было: ${utils.sp(enemy.warriors)} воинов.`);
       vk.api.messages.send({user_id: enemy.id, message: `🔫На вас было совершено нападение!
📝Итог: Ничья
😫Ваши потери: 
🔹Воинов: ${utils.sp(hepot)}

🙋Потери врага: 
🔹Воинов: ${utils.sp(mypot)}
➖➖➖➖➖
🔹У соперника было: ${utils.sp(i.warriors)} воинов.
🔹Вам наложен щит на 12 часов!`});
        }
        //Если атакующий выиграл
        if(mylf > helf){
        	var cups_win = rand(1, 10)*5;
        	message.send(`😏Победа!
        😫Ваши потери: 
🔹Воинов: ${utils.sp(mypot)} 

        🙋Потери врага: 
🔹Кубков: ${cups_win}
🔹(голды): ${utils.sp(hempot)}
🔹Воинов: ${utils.sp(hepot)}

        🏆Ваши награды: 
🔹Кубков: ${cups_win}
🔹(голды): ${utils.sp(myprib)}
        ➖➖➖➖➖
        🔹У соперника было: ${utils.sp(enemy.warriors)} воинов.`);
       vk.api.messages.send({user_id: enemy.id, message: `🔫На вас было совершено нападение!
📝Итог: Поражение
😫Ваши потери: 
🔹Кубков: ${cups_win}
🔹(голды): ${utils.sp(hempot)}
🔹Воинов: ${utils.sp(hepot)}

🙋Потери врага:
🔹Воинов: ${utils.sp(mypot)}
➖➖➖➖➖
🔹У соперника было: ${utils.sp(i.warriors)} воинов.
🔹Вам наложен щит на 12 часов!`});
        i.gg += myprib;
        enemy.gg -= hempot;
        i.cups += cups_win;
        enemy.cups -= cups_win;
        enemy.cups = (enemy.cups < 0) ? 0: enemy.cups;
        }
       //Если атакующий проиграл
        if(mylf < helf){
        	var cups_win = rand(1, 10)*5;
        	message.send(`😦Поражение!
        😫Ваши потери:
🔹Воинов: ${utils.sp(mypot)}
🔹Кубков: ${cups_win}

        🙋Потери врага: 
🔹Воинов: ${utils.sp(hepot)}
        ➖➖➖➖➖
        🔹У соперника было: ${utils.sp(enemy.warriors)} воинов.`);
       vk.api.messages.send({user_id: enemy.id, message: `🔫На вас было совершено нападение!
📝Итог: Победа
😫Ваши потери: 
🔹Воинов: ${utils.sp(hepot)}

🙋Потери врага: 
🔹Воинов: ${utils.sp(mypot)}
🔹Кубков: ${cups_win}

🏆Ваши награды:
🔹Кубков: ${cups_win}
➖➖➖➖➖
🔹У соперника было: ${utils.sp(i.warriors)} воинов.
🔹Вам наложен щит на 12 часов!`});
        i.cups -= cups_win;
        i.cups = (i.cups < 0) ? 0: i.cups;
        enemy.cups += cups_win;
        }
        i.warriors -= mypot;
        enemy.warriors -= hepot;
	});

cmd.on(/^(?:🔫Воины|Воины)\s([^]+)$/i, async (message, bot) => {
const count = repl(message.args[1]);
if(!Number(count)) return message.send("📛| Количество должно быть числом!");
count = Number(fix(count));
if(i.warriors+count > i.armia.count) return message.send("📛| Не хватает мест в армии!");
if(i.gg < count*100) return message.send("📛| Для найма требуется: "+utils.sp(count*100)+" голды");
i.gg -= count*100;
i.warriors += count;
return message.send("🔫Воины успешно наняты!");
});

cmd.on(/^(?:🍎Фермеры|Фермеры|🍎)$/i, async (message) => {
var count = repl(message.args[1]);
if(!Number(count)) return message.send("📛| Количество должно быть числом!");
count = Number(fix(count));
if(i.fermers+count > i.sad.count) return message.send("📛| Не хватает мест в саду!");
if(i.gg < count*100) return message.send("📛| Для найма требуется: "+utils.sp(count*100)+"голды");
i.gg -= count*100;
i.fermers += count;
return message.send("🍎 Фермеры успешно наняты!");
});

function fix(num) {
num = Number(num)
num = num.toFixed(0)
num = Number(num)
return [num]
}

function repl(num){
	var sjop = num.replace(/(k|K|К|к)/ig, "000")
   sjop = sjop.replace(/(все|Все|Всё|всё)/ig, i.gg)
   sjop = (sjop < 1) ? 1: sjop;
	return [sjop]
}; 


cmd.on(/^(?:Основные)$/i, async (message) => {
message.user.flooder += 1;
return message.send(`
📊 Инфо - ваш профиль
💴 Баланс - ваше состояние.
⛏ Шахта - Накопать руды
🍀 Экспедиция - отправиться в поход
💰 Бонус - Ежечасный бонус
🤝 Обменять [Кол-во] - обмен изумрудов на голду
🍗 Еда - команды для еды
💼 Продать [Предмет] - продать вещи
🏆 Топ - список лучших игроков
👔 Люди - жители поселения
⛪ Деревня - статистика деревни
🔨 Дулучшить - улучшить деревню
👨‍🌾 Фермеры - ваши фермеры
🌍 Сад - информация о саде
🚀 Сулучшить - улучшить сад
🏝 Здания - ваши здания
👤 Армия - ваша армия
👥 АрмияУ - улучшить армию
🗡 воины - нанять воинов
⚔ Война - напасть на деревню
🔎 Поиск - поиск базы противника
🔑 Атака - атаковать противника`);
});

cmd.on(/^(?:Клановые)$/i, async (message) => {
message.user.flooder += 1;
return message.send(`
⠀1⃣ Клан - информация о клане
⠀2⃣ Клан улучшить - улучшить клан
⠀3⃣ Клан состав - участники клана
⠀4⃣ Клан создать [название] - создать клан
⠀5⃣ Клан название [название] - смена названия клана
⠀6⃣ Клан метка [метка] - символ клана
⠀7⃣ Клан открыть - открыть клан для вступлений 🔓
⠀8⃣ Клан закрыть - закрыть клан для вступлений 🔒
⠀9⃣ Клан [пополнить/снять] [сумма] - казна клана
⠀1⃣0⃣ Клан атака - атаковать другой клан
⠀1⃣1⃣ Клан повысить [id] - повысить звание игроку
⠀1⃣2⃣ Клан понизить [id] - понизить звание игроку
⠀1⃣3⃣ Клан кик [id] - выгнать игрока
⠀1⃣4⃣ Клан войти [id клана] - вступить в клан
⠀1⃣5⃣ Клан покинуть - покинуть клан`);
});

cmd.on(/^(?:Игры)$/i, async (message) => {
message.user.flooder += 1;
return message.send(`
🎆 Скрин [ссылка] - Сделает скриншот сайта
🔖 QR [Ссылка/Текст] - Сгенирирует вам QR-код
⏳ Напомни [фраза] [минуты] - Напоминание.
💉 Слайм [текст] - общение с ботом.
⏰ Время - Покажет время по МСК
📱 Онлайн - список онлайна
🎰 Казино [сумма] - испытай удачу`);
});


cmd.on(/^(?:time|Время)$/i, async (message) => {
	message.user.foolder += 1;
			let date = new Date();
			let days = date.getDate();
			let hours = date.getHours();
			let minutes = date.getMinutes();
			let seconds = date.getSeconds();
			if (hours < 10) hours = "0" + hours;
			if (minutes < 10) minutes = "0" + minutes;
			if (seconds < 10) seconds = "0" + seconds;

			return message.send("\n&#8986; Точное время по МСК &#8986;\n &#10134; &#10134; &#10134;" + hours + ":" + minutes + ":" + seconds + "&#10134; &#10134; &#10134;");
		});

cmd.on(/^(?:напомни)\s?(.*)\s([0-999]+)/i, (message) => {
    let i = Number(message.args[2])
    let time = i * 60000;

    setTimeout(() => {
        vk.api.call('messagesа.send', {
            peer_id: message.user.id,
            message: `⏳ НАПОМИНАНИЕ ⏳\n\n-------------------------------\nВам нужно: ${message.args[1]}\n-------------------------------`,
            random_id: 0
        });
    }, time);
    return message.send(`⏳ Напоминание создано.`)
});

cmd.on(/^(?:qr)\s(.*)/i, async (message) => {
const qr = require('qr-image');
let qr_svg = qr.image(message.args[1], { type: 'png' });
qr_svg.pipe(require('fs').createWriteStream('oscrn.png'));
var svg_string = qr.imageSync(message.args[1], { type: 'png' });
message.sendPhoto(svg_string)
});

cmd.on(/^(?:Скрин)\s(.*)/i, async(message) => {
    
 message.sendPhoto("http://mini.s-shot.ru/RU?" + message.args[1])
 })


cmd.on(/^(?:кнопка)\s([^]+)$/i, async (message, bot) => {
		if(message.isChat) return bot(`команда работает только в ЛС. 🔁`);
        if (message.chatId) 
        {
        let conver = convers.find(x=> x.cid === message.chatId);
        if (!conver)
        {
            convers.push({
                id: convers.length + 1,
                cid: message.chatId,
                buttoncount: 0,
                button: []
            });
            conver = convers.find(x=> x.cid === message.chatId);
        }

        if (message.args[1].toLowerCase() === "удалить")
        {
        
            conver.buttoncount = 0;
            conver.button = [];
            return vk.api.messages.send({
                chat_id: message.chatId,
                message: `[id${message.user.id}|${message.user.tag}], вы очистили все кнопки!
				🔁 Для добавления новых используйте: Кнопка [Текст]
				&#10133; Что бы удалить кнопки используйте: Кнопка удалить`,
                keyboard: Keyboard.keyboard([])
            });
        }

        if (conver.button.length >= 40) return bot(`[id${message.user.id}|${message.user.tag}], ваше поле заполнено! (40/40)
		🔁 Для очистки поля используйте: Кнопка удалить`);

        conver.button.push(message.args[1]);

        await vk.api.messages.send({
            chat_id: message.chatId,
            message: `[id${message.user.id}|${message.user.tag}], кнопка успешно добавлена!`,
            keyboard: generateKeyboard(conver.button)
        });
    }
    else
    {
        if (message.args[1].toLowerCase() === "удалить")
        {
            message.user.buttoncount = 0;
            message.user.button = [];
            return vk.api.messages.send({
                peer_id: message.user.id,
				message: `[id${message.user.id}|${message.user.tag}], вы удалили все кнопки!
				🔁 Для добавления новых используйте: Кнопка [Текст]
				&#10133; Что бы включить стандартыне кнопки используйте: Кнопка стандарт`,
                keyboard: Keyboard.keyboard([])
            });
        }

        if (message.user.button == undefined)
            message.user.button = []
        message.user.button.push(message.args[1]);

        await vk.api.messages.send({
            peer_id: message.user.id,
			message: `[id${message.user.id}|${message.user.tag}], кнопка успешно добавлена!
			🔁 Для удаления всех кнопок используйте: Кнопка удалить
			&#10133; Что бы включить стандартыне кнопки используйте: Стандарт кнопка`,
            keyboard: generateKeyboard(message.user.button)
        });
    }
});

cmd.on(/(?:Инфо)$/i, async (message) => {
	message.user.foolder += 1;

	let text = ``;

   text += `👤 Профиль: ${message.user.tag}\n`;
   text += `🔎 ID: ${message.user.uid}\n`;	

   text += `🔋 Энергии: ${message.user.energy}\n`;

   text += `🏆 Кубков: ${utils.sp(i.cups)}\n`
   text += `🍗 Еда: ${utils.sp(i.food)}\n`

   text += `\n♻ Варнов: ${message.user.warn}/3\n`;	
   text += `⛔ Причина: ${message.user.warn_p}\n`;	

	if(message.user.foolder) text += `\n&#128228; Использовано команд: ${message.user.foolder}\n`;	
				text +=`\n🎎 Приглашено друзей: ${users.filter(x=> x.referal === message.user.uid).length}\n`; 
	return message.send(`${text}`,);
});

	cmd.on(/^(?:💴 Баланс|баланс)/i, (message) => { 
	message.user.foolder += 1;
	let text = ``;

			 text += `\n&#4448;🌕 Голды: ${message.user.gg}\n`
    		text += `&#4448;&#128160; Изумрудов: ${message.user.emeralds}\n`;
    		text += `&#4448;&#128488;  Угля: ${message.user.coal}\n`;
     		text += `&#4448;&#11036; Железа: ${message.user.iron}\n`;
			text += `&#4448;&#128155; Золото: ${message.user.gold}\n`;
			text += `&#4448;&#128142; Алмазов: ${message.user.donate}\n`; 
		return message.send(`${text}`,);
	});

cmd.on(/^(?:продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
	message.user.foolder += 1;
	let options = {
		count: null
	}

	message.args[2] = message.args[1].split(' ')[1];

	if(!message.args[2]) options.count = 1;
	if(message.args[2])
	{
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

		message.args[2] = Math.floor(Number(message.args[2]));
		if(message.args[2] <= 0) return;

		if(!message.args[2]) options.count = 1;
		else if(message.args[2]) options.count = message.args[2];
	}

	if(/уголь/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.coal) return bot(`недостаточно угля`);
		const coals = utils.random(500);

		message.user.gg += coals;
		message.user.coal -= options.count;

		return bot(`вы продали ${options.count} уголь за ${utils.sp(coals)}$`);
	}

	if(/железо/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.iron) return bot(`недостаточно железа`);
		const irons = utils.random(1000);

		message.user.gg += irons;
		message.user.iron -= options.count;

		return bot(`вы продали ${options.count} слиток железа за ${utils.sp(irons)}$`);
	}

	if(/золото/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.gold) return bot(`недостаточно золота`);
		const golds = utils.random(3500);

		message.user.gg += golds;
		message.user.gold -= options.count;

		return bot(`вы продали ${options.count} слиток золота за ${utils.sp(golds)}$`);
	}

	if(/изумруд/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.emeralds) return bot(`недостаточно эмеральда`);
		const emeralds = utils.random(10000);

		message.user.gg += emeralds;
		message.user.emeralds -= options.count;

		return bot(`вы продали ${options.count} изумруд за ${utils.sp(emeralds)}$`);
	}
});

cmd.on(/^(?:Видео)$/i, async (message, bot) => {
	message.user.foolder += 1;
    function getVideo() {
        return user.api.call('wall.get', {owner_id: -151893995, count: 500, offset: 1})
        .then(response => {
        let item = utils.pick(response.items).attachments[0];
        return item.video ? `video${item.video.owner_id}_${item.video.id}` : getVideo();
    })
};
    let video = await getVideo();
    await message.reply({ attachment: video });	

});

cmd.on(/^(?:бонус)$/i, async (message) => {
	message.user.foolder += 1;
	if(message.user.timers.bonus) return message.send(`📛 Забирать бонус можно раз в час.`);

	setTimeout(() => {
		message.user.timers.bonus = false;
	}, 3600000);

	message.user.timers.bonus = true;
		
	const ggg = utils.random(1900);
	const coals = utils.random(500);
	const irons = utils.random(150);
	const golds = utils.random(100);
	const emeralds = utils.random(20);
	
	message.user.gg += ggg;
	message.user.coal += coals;
	message.user.iron += irons;
	message.user.gold += golds;
	message.user.emeralds += emeralds;
		return message.send(`
		⭐ Из ежечасного бонуса Вам выпало:\n
		⏩ ${utils.sp(ggg)} голды
		⏩ ${utils.sp(coals)} угля
		⏩ ${utils.sp(irons)} железа
		⏩ ${utils.sp(golds)} золота
		⏩ ${utils.sp(emeralds)} изумрудов
		`);

});

cmd.on(/^(?:донат)$/i, async (message) => {
	message.user.foolder += 1;
	return message.send(`
🆘 Срочно нужны ресурсы?
😭 Но нету времени на фарм?
🍀 Купи ресурсы по дешёвке!

🍂Start-Пакет:
✅ Цена: 20 руб.
⏩ 1000 Голды
⏩ 250 Угля
⏩ 48 Изумрудов
⏩ 197 Железа
⏩ 50 Золота
⏩ 5 Алмазов

💿 Easy-Пакет
✅ Цена: 40 руб.
⏩ 3000 Голды
⏩ 690 Угля
⏩ 89 Изумрудов
⏩ 467 Железа
⏩ 250 Золота
⏩ 15 Алмазов

⭐GOLD-Пакет:
✅ Цена: 60 руб.
⏩ 5000 Голды
⏩ 890 Угля
⏩ 120 Изумрудов
⏩ 1337 Железа
⏩ 2234 Золота
⏩ 40 Алмазов

---- Привилегии ----

	😎Привилегия: (VIP) - 25 рублей:
	🔹Получение (5) алмазов раз в час.
	🔹Просмотр профилей игроков.
	🔹Смена ника.
	🔸Потери при порожении(-50%)
	🔸Особая иконка в топе.

📘 Покупать донат строго у владельца!

📗 vk.com/artem_newton | @artem_newton (Владелец)
	`);


});
 		


cmd.on(/^(?:Зови меня)\s(.*)$/i, async (message) => {
	message.user.foolder += 1;
	if(message.args[1].length >= 16) return message.send(`максимальная длина ника 15 символов`);

	message.user.tag = message.args[1];
	return message.send(`🤘🏻 Теперь, я буду называть вас: ${message.user.tag}`);
});


//// РЕФЕРАЛКА ////


//// РЕФЕРАЛКА ////

cmd.on(/^(?:топ)$/i, async (message, bot) => {
		message.user.foolder += 1;
	let top = [];

	users.map(x=> {
		top.push({ gg: x.gg, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.gg - a.gg;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) \n🏆 Голды: ${utils.sp(user.gg)}
		`;
	}

	return message.send(`Лучшие игроки:
		${text}
`);
});

  ///////////////////////////////////////

  	  cmd.on(/^(?:обменять)\s?([0-9]+)?/i, message => {
			message.user.foolder += 1;
		if(!message.args[1] || !Number(message.args[1])) return message.send(`🍀 Укажите количество изумрудов.`);
		if(user.emeralds < message.args[1]) return message.send(`🍀 У вас нет столько изумрудов.`)
		message.user.gg += Number(message.args[1] * 2);
		message.user.emeralds -=  Number(message.args[1]);
		return message.send(`🍀 Вы успешно обменяли ${message.args[1]} изумрудов на ${message.args[1] * 2} голды`);
	});



// admin //
cmd.on(/^(?:cmd|админка)$/i, async (message, bot) => {

	var adm = [`🏆`,`🔑`,`✅`,`💩`,`👨‍💻`,`👮‍♂`,`🍄`,`🎾`,`🎱`,`🌮`,`🥝`,`🍞`].random();
	var dev = [`🌹`,`🆘`,`🐒`,`💩`,`👨‍💻`,`👮‍♂`,`🍄`,`🎾`,`🎱`,`🌮`,`🥝`,`🍞`].random();

if(message.user.post < 1) return bot(`❌ Тебе сюда нельзя ❌`);
	    if (message.user.post == 1) {
	        return message.send(`
					☑ » VIP-Панель « ☑ 
	🚂 Dgive - получить 💎.
	🚂 Get [id] - просмотр профиля игрока.
	🚂 Myname [имя] - смена ника..
`);
	    }
	    if (message.user.post == 4) {
	        return message.send(`
					☑ » TEX ADM « ☑
	${adm} Ответ [id] [текст] - выдача валюты.
    ${adm} Mgive [id] [count] - выдача валюты.
    ${adm} Mdell [id] [count] - удаление валюты.
	${adm} Ban [id] - бан игрока.
	${adm} Unban [id] - разбан игрока.
	${adm} Dgive - получить 💎.
	${adm} Get [id] - просмотр профиля игрока.
	${adm} Myname [имя] - смена ника.
	${adm} создать - создать промокод + пост
	${adm} коды - список кодов
	${adm} удалить [промо] - удаление промокода
	${adm} warn [ID] - выдать предупреждение.
	${adm} unwarn [ID] - снять предупреждение.а
`);
	
			}
        	 if (message.user.post == 5) {
	        return message.send(`
    ${dev} Setpost [id] [num] - выдача прав.
	${dev} Раздача - Запустить раздачу.
	${dev} givestart [id] - Выдать "Start-Пакет"
	${dev} giveeasy [id] - Выдать "Easy-Пакет"
	${dev} givegold [id] - Выдать "GOLD-Пакет"
	${dev} Ответ [id] [текст] - выдача валюты.
    ${dev} Mgive [id] [count] - выдача валюты.
    ${dev} Mdell [id] [count] - удаление валюты.
	${dev} Ban [id] - бан игрока.
	${dev} Unban [id] - разбан игрока.
	${dev} Dgive - получить 💎.
	${dev} Get [id] - просмотр профиля игрока.
	${dev} Myname [имя] - смена ника.
	${dev} создать - создать промокод + пост
	${dev} коды - список кодов
	${dev} удалить [промо] - удаление промокода
	${dev} warn [ID] - выдать предупреждение.
	${dev} unwarn [ID] - снять предупреждение.а
	${dev} Dgive - получить 💎.
	${dev} Get [id] - просмотр профиля игрока.
	${dev} Myname [имя] - смена ника..
`);
	    }
	});

		cmd.on(/^(?:Mgive)\s([^]+)\s([^]+)$/i, async (message, bot) => {
	if(i.post < 4) return message.send("📛| Доступ закрыт!");
	if(users[message.args[1]] == undefined) return message.send("📛| Данного игрока не существует!");
	var sym79 = repl(message.args[2]);
	if(!Number(sym79)) return message.send("📛| Сумма должна быть числовая!");
	sym79 = Number(fix(sym79));
	users[message.args[1]].gg += sym79;
	message.send("💲Валюта игроку успешно начислена!");
	});
	
	cmd.on(/^(?:Mdell)\s([^]+)\s([^]+)$/i, async (message, bot) => {
	if(i.post < 4) return message.send("📛| Доступ закрыт!");
	if(users[message.args[1]] == undefined) return message.send("📛| Данного игрока не существует!");
	var sym79 = repl(message.args[2]);
	if(!Number(sym79)) return message.send("📛| Сумма должна быть числовая!");
	sym79 = Number(fix(sym79));
	users[message.args[1]].gg -= sym79;
	users[message.args[1]].gg = (users[message.args[1]].gg < 0) ? 0: users[message.args[1]].gg;
	message.send("💲Валюта игрока успешно удалена!");
	});
	
	cmd.on(/^(?:Setpost)\s([^]+)\s([^]+)$/i, async (message, bot) => {
	if(i.post < 5) return message.send("📛| Доступ закрыт!");
	if(users[message.args[1]] == undefined) return message.send("📛| Данного игрока не существует!");
	if(message.args[2] < 0 || message.args[2] > 4) return message.send("📛| Права не могут быть меньше 0 и больше 4!");
	 users[message.args[1]].post = Number(message.args[2]);
	message.send("👑Игроку выданы новые права!");
	});


cmd.on(/^(?:eval|!|zz)\s([^]+)$/i, async (message, bot) => {
		message.user.foolder += 1;
	if(message.senderId !== 593863583| message.senderId !== 593863583) return;

	try {
		const result = eval(message.args[1]);

		if(typeof(result) === '')
		{
			return bot(` ${result}`);
		} else if(typeof(result) === '')
		{
			return bot(` ${result}`);
		} else {
			return bot(`${typeof(result)}: ${JSON.stringify(result, null, '&#12288;\t')}`);
		}
	} catch (e) {
		console.error(e);
		return bot(`ошибка:
		${e.toString()}`);
	}
});

cmd.on(/^(?:givestart)\s([0-9]+)$/i, async (message) => {
		message.user.foolder += 1;
	if(message.user.post < 5) return message.send(`доступно с привилегии - Admin.`);
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
 		if(!message.args[1]) return message.send(`😺 Вы не указали игровой ID\n 🆘 Пример Команды: givestart [ID]`);
		if(!user) return message.send(`😂 неверный ID игрока`);

		if(user.uid === message.user.uid) return message.send(`😂 неверный ID`);

		user.gg += 1000;
		user.coal += 250;
		user.iron += 197;
		user.gold += 50;
		user.emeralds += 48;
		user.donate += 5;
		vk.api.messages.send({ 
			user_id: user.id, 
			message: `
[🔔] [id${user.id}|${user.tag}], вам был выдан "Start-Пакет"
` }); 

	return message.send(`✅ Вы выдали "Start-Пакет" игроку "[id${user.id}|${user.tag}]"`);
}
	});

cmd.on(/^(?:giveeasy)\s([0-9]+)$/i, async (message) => {
		message.user.foolder += 1;
	if(message.user.post < 5) return message.send(`доступно с привилегии - Admin.`);
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
 		if(!message.args[1]) return message.send(`😺 Вы не указали игровой ID\n 🆘 Пример Команды: givestart [ID]`);
		if(!user) return message.send(`😂 неверный ID игрока`);

		if(user.uid === message.user.uid) return message.send(`😂 неверный ID`);

		user.gg += 3000;
		user.coal += 690;
		user.iron += 467;
		user.gold += 250;
		user.emeralds += 89;
		user.donate += 15;
		vk.api.messages.send({ 
			user_id: user.id, 
			message: `
[🔔] [id${user.id}|${user.tag}], вам был выдан "Start-Пакет"
` }); 

	return message.send(`✅ Вы выдали "Start-Пакет" игроку "[id${user.id}|${user.tag}]"`);
}
	});

cmd.on(/^(?:givegold)\s([0-9]+)$/i, async (message) => {
		message.user.foolder += 1;
	if(message.user.post < 5) return message.send(`доступно с привилегии - Admin.`);
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
 		if(!message.args[1]) return message.send(`😺 Вы не указали игровой ID\n 🆘 Пример Команды: givestart [ID]`);
		if(!user) return message.send(`😂 неверный ID игрока`);

		if(user.uid === message.user.uid) return message.send(`😂 неверный ID`);

		user.gg += 5000;
		user.coal += 890;
		user.iron += 1337;
		user.gold += 2234;
		user.emeralds += 120;
		user.donate += 40;
		vk.api.messages.send({ 
			user_id: user.id, 
			message: `
[🔔] [id${user.id}|${user.tag}], вам был выдан "Start-Пакет"
` }); 

	return message.send(`✅ Вы выдали "Start-Пакет" игроку "[id${user.id}|${user.tag}]"`);
}
	});

	cmd.on(/^(?:unwarn)\s?([0-9]+)?/i, async (message, args) => {
			message.user.foolder += 1;
		let user = users.find(x=> x.uid === Number(message.args[1]));
			if(message.user.post < 4) return message.send(`доступно с привилегии - Admin.`);
		if(!message.args[1]) return message.send(`🔸 » Пример команды: unwarn [ID]`);
		if(!Number(message.args[1])) return message.send(`🔸 » Число должно быть цифрового вида.`);
		if(message.user.post < 4) return message.send(`🔸 » Вы не Администратор`);
		if(!users[message.args[1]]) return message.send(`❎ » Такого игрока нет!`);

		users[message.args[1]].warn = 0; 
		users[message.args[1]].warn_p = `Нету`;

		vk.api.call('messages.send', {
			peer_id: users[message.args[1]].id,
			message: `✅ » Администратор снял Вам все предупреждения`
		}); 
		return message.send(`✅ » Вы сняли все предупреждения игроку [${users[message.args[1]].tag}].`);
	});


cmd.on(/^(?:warn)\s?([0-9]+)?\s([^]+)?/i, async (message, args) => { 
			message.user.foolder += 1;
		let user = users.find(x=> x.uid === Number(message.args[1]));
	if(message.user.post < 4) return message.send(`доступно с привилегии - Admin.`);
		if(!message.args[1] || !message.args[2]) return message.send(`🔸 » Пример команды: warn [ID] [ПРИЧИНА]`);
		if(!Number(message.args[1])) return message.send(`🔸 » Число должно быть цифрового вида.`);
		if(message.user.post < 4) return message.send(`🔸 » Вы не администратор`);
		if(!users[message.args[1]]) return message.send(`❎ » Такого игрока нет!`);

		users[message.args[1]].warn += 1;  
        users[message.args[1]].warn_p = `${message.args[2]}`

		let text = `✅ » ${user.tag}, вам выдали варн по причине: [${message.args[2]}]`
		if(users[message.args[1]].warn == 3){
			users[message.args[1]].warn = 0;
			users[message.args[1]].ban = true; 
			text += `\n🔸 » У вас 3 предупреждения.\n🔸 » Ваш аккаунт заблокирован.`
		}
		vk.api.call('messages.send', {
			peer_id: users[message.args[1]].id,
			message: text
		});
		return message.send(`✅ » Вы выдали предупреждение игроку [${users[message.args[1]].tag}].`);
	}); 


cmd.on(/^(?:ban)\s([0-9]+)$/i, async (message) => {
		message.user.foolder += 1;
	if(message.user.post < 4) return message.send(`доступно с привилегии - Admin.`);
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return message.send(`неверный ID игрока`);

		if(user.uid === message.user.uid) return message.send(`неверный ID`);

		if(message.args[1] == 0) return message.send(`${user.tag}, к сожалению @oscrn (Pussy Boy) невозможно выдать временную блокировку.`);

		user.ban = true;
		vk.api.messages.send({ 
			user_id: user.id, 
			message: `
[😵] >> [id${user.id}|${user.tag}], к сожалению, Вы забанены. 
` }); 

	return message.send(`Вы смогли забанить пользователя ( [id${user.id}|${user.tag}] )  навечно.`);
}
	});

cmd.on(/^(?:unban)\s([0-9]+)$/i, async (message) => {
		message.user.foolder += 1;
	if(message.user.post < 4) return message.send(`доступно с привилегии - Admin.`);
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return message.send(`неверный ID игрока`);

		if(user.uid === message.user.uid) return message.send(`неверный ID`);

		user.ban = false;
		vk.api.messages.send({ 
			user_id: user.id, 
			message: `
[😜] >> [id${user.id}|${user.tag}], Администратор разбанил ваш аккаунт.
[❤] || Впредь не нарушайте правил. ` }); 

	return message.send(`Успешно! Вы разбанили пользователя -> (${user.tag})`);
}
	});

cmd.on(/^(?:Поиск)\s(\shttps\:\/\/vk\.com\/)?(id)?([0-9]+)$/i, async (message) => { 
		message.user.foolder += 1;
	if (message.args[4]) {
				var domain = message.args[4].split(" ");}

let user = users.find(x=> x.id === Number(message.args[3]));

			let text = ``;	
	
	text +=  `${user.uid}\n`;
	return message.send(`
👕 ID: ${text} 





		`);
});

cmd.on(/^(?:пострассылка)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
 			if(message.user.post < 5) return;
 			 users.filter(x=> x.id !== 1).map(zz => { 
  vk.api.messages.send({ user_id: zz.id, message: `[👮] >> Быстро посмотрел запись:`, attachment: `${message.args[2]}`}); 
 }); 
 			let people = 0;
        for(let id in users) {
            vk.api.call('messages.send', {
             chat_id: id,
              message: `[👮] >> Быстро посмотрел запись:`,
              attachment: `wall-114070130_${response.post_id}` });
        }
        return message.send(`💬 || Я успешно сделал рассылку!`);
 
})

cmd.on(/^(?:создать)\s?([0-9]+)?\s?([^\s	].*)?\s?([^\s	].*)?/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.post < 5) return bot(`доступно только Разрабу!`);
		if(!message.args[1]) return message.reply(`[✨] >> Пример - Cоздать (количество активаций) (сумма)`);
		if(!message.args[2]) return message.reply(`[✨] >> Пример - Cоздать (количество активаций) (сумма)`);
		
	let answers = ['Опа! Новые промокод! Быстрее активируй его :3',
	'Быстрее активируй промо, а то его другие разберут!',
	'Держи промокод, пока его другие не разобрали',
	'Что насчёт нового прома?)',
	'Ыыыыы, новый промокод',
	'Че не ставишь лайки?)',
	'КРЯЯЯЯЯЯ!!! Новый промокод ниже ↓↓↓']
	let rullka = ['За 50 лайков, сделаем раздачу випок',
	'Го за 20 лайков, я сделаю новое КРУТОЕ обновление?)',
	'Набёрем 10 лайков, для следующего промо?']

		let gg = parserInt(message.args[2]); 
		let activ = Number(message.args[1]);

		var result       = '';
		        var words        = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
		        var max_position = words.length - 1;
		            for( i = 0; i < 8; ++i ) {
		                position = Math.floor ( Math.random() * max_position );
		                result = result + words.substring(position, position + 1);
		            }
		if(!promo[result]){
		            	promo[result] = {
		            		gg: Number(gg),
		            		activ: activ,
		            		users: {}
		            	}
		}else{
			return message.reply(`[Error] Пересоздайте код еще раз.`);
		}
		 user.api.wall.post({
		owner_id: -114070130,
		message: `
		[☺] | ${utils.pick(answers)}
					📝 Новый промокод: Промо ${result}
			🗝 Успей активировать,всего ${activ} активаций! Сумма промокода: ${spaces(gg)}
			[🤴] || ${utils.pick(rullka)}
        `
	})
		 users.filter(x=> x.id !== 1).map(zz => { 
  vk.api.messages.send({ user_id: zz.id, message: `💰 На стене группы новый промокод на ${activ} использований!`}); 
 }); 
 			let people = 0;
        for(let id in users) {
            vk.api.call('messages.send', {
             chat_id: id,
              message: `💰 На стене группы новый промокод на ${activ} использований!` });
        }

		return message.reply(`
			📝 Был создан промокод + пост.
			`);

});

cmd.on(/^(?:коды)$/i, async (message) => {
		message.user.foolder += 1;
	if(message.user.post < 5) return;
	let text = `&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195; - Список Промокодов - \n\n`;
	for(id in promo){
		if(promo[id].gg){
		text += `
		📝 >> Промокод - ${id}
		🗝 >> Осталось активаций в этом промокоде - ${promo[id].activ}
		💰 >> Голды - ${(promo[id].gg)}

➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
		`
		}
	}
	return message.reply(text);
});

cmd.on(/^(?:удалить)\s([^]+)$/i, async (message) => {
		message.user.foolder += 1;
	if(message.user.post < 5) return;
	if(!message.args[1]) return message.reply(`[🤔] >> Я всё понимаю, что ты уже что-то не то пишешь мне, но не надо забывать сам промокод.`);
	if(!promo[message.args[1]]) return message.reply(`😕 || Этого промокода не существует!\n\n🤔 | Промокод все равно есть в боте?\n💬 >> Перепроверьте тогда написание промокода! Даже если Вы не поставили заглавную букву в промокоде, то бот такого промокода и не найдет.`);
	delete promo[message.args[1]];
	return message.reply(`⚠ || [id${message.user.id}|${message.user.tag}], Вы успешно удалили промокод *${message.args[1]}*!\n⛔ >> Если Вы удалили промокод без надобности, то [oscrn|создатель] тебя сильно поругает!\n\n🌚 -> Сразу говорю, что промокод нельзя будет вернуть.`);

});

	var parserInt = (str) => parseInt(str.replace(/k|к/ig, "000"));

cmd.on(/^(?:Промо|Промокод|активировать)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(!message.args[1]) return message.reply(`${message.user.tag}, пожалуйста, введите код. Например:  \n Промокод ${utils.pick(['oscrn', 'freemoney', 'W8IFE-VY3B21-U7PR5-LI3J7'])}`);
	let promos = message.args[1];
	if(!promo[message.args[1]]) return message.reply(`${message.user.tag}, этого промокода нет/он больше недоступен.`);
	
	if(!promo[message.args[1]].users[message.senderId]){

		if(promo[promos].gg){ 
			let activ = promo[promos].activ - 1;
			if(!promo[promos].users[message.senderId]){
				promo[promos].users[message.senderId] = {
					activ: true
				}
			}
			message.user.gg += Number(promo[promos].gg);
			let coi = Number(promo[promos].gg);
			promo[promos].activ -= 1;
			if(promo[promos].activ == 0){
				delete promo[promos];
			}
			return message.reply(`[🤑] >> Вы активировали промокод на ${spaces(coi)}$`);
		}
	}else{
		return message.reply(`[😪] >> Промокод можно активировать ЛИШЬ ОДИН РАЗ!`);
	}
});

cmd.on(/^(?:cid)$/i, async (message, bot) => {
	message.user.foolder += 1;
if(!message.isChat) return bot(`команда работает только в беседе!`);
		return message.send(`[🎉] » ID этого чата: ${message.chatId}`);
	}); 

	cmd.on(/^(?:репорт)\s([^]+)$/i, async (message, bot) => {
vk.api.messages.send({user_id: users[0].id, message: "ID игрока: "+i.uid+"\n---\n🔸Репорт: "+message.args[1]+"\n———\n🔹Для ответа пишите: ответ [id игрока] [ответ]"});
message.send("[🚩] -> Вы успешно отправили репорт!");
});

cmd.on(/^(?:ответ)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
if(i.post < 5) return message.send("📛| Доступ закрыт!");
if(!users[message.args[1]]) return message.send("📛| Такого пользователя не существует!");
var upser = users[message.args[1]];
vk.api.messages.send({user_id: upser.id, message: "👉Вам ответили на ваш репорт!\n🔹Ответ: "+message.args[2]});
message.send("[👉] -> Вы успешно ответили игроку!");
});

cmd.on(/^(?:беседы|чаты|боты)$/i, async (message, bot) => { 
let text1 = ``; 
user.api.messages.getChat({ 
chat_id: 2027
}).then(async function (response) { 
text1 += `1&#8419; ${response.title} [${response.members_count}/500]\n> https://vk.me/join/AJQ1dwC96BYGlOyHYwhui3Ha`; 
return bot(`наши официальные беседы: 

${text1} 

💬 Кол-во участников обновляется в автоматическом режиме`); 
}); 

 //------------------------------------------------------------------------------------\\
 	var uptime = { sec: 0, min: 0, hours: 0, days: 0 }
 //------------------------------------------------------------------------------------\\
 
	setInterval(() => {
		uptime.sec++;
		if (uptime.sec == 60) { uptime.sec = 0; uptime.min += 1; }
		if (uptime.min == 60) { uptime.min = 0; uptime.hours += 1; }
		if (uptime.hours == 24) { uptime.hours = 0; uptime.days += 1; }
	}, 1000);

//------------------------------------------------------------------------------------\\

function generateKeyboard(array) {
	let kb = [];
	if(array.length > 40) return false;

	/*for (let i = 0; i < 10; i += 1) {
		if(!array.slice(i * 4, i * 4 + 4)[0]) break;
		kb.push(array.slice(i * 4, i * 4 + 4));
	}*/
	
	/*let arr = [];
	kb.map((arr) => {
		arr.map((button, i) => {
			arr[i] = Keyboard.textButton({ label: button });
		});
	});*/
	let a = -1;
	for (let i = 0; i < array.length; i += 1) 
	{
		if(i%4==0)
		{
			a++;
			kb.push();
			kb[a] = [];
		}
		kb[a].push(Keyboard.textButton({ label: array[i], color: "default" }));
	}
	return Keyboard.keyboard(kb);
}

setInterval(async () => {
	users.map(user => {
		if(user.business)
		{
			const biz = businesses.find(x=> x.id === user.business);
			if(!biz) return;

			user.biz += biz.earn;
		}
	});
}, 3600000);

cmd.on(/^(?:Еда)$/i, async (message, bot) => {
return message.send(`🍗Покупка еды:
💲Цена 1ед. еды - 2 голды
➖➖➖➖➖
🔹Доступен ручной ввод:
🍗| Еда купить [кол-во] - покупка еды.`);
});

cmd.on(/^(?:Еда купить)\s([^]+)$/i, async (message, bot) => {
var count = repl(message.args[1]);
if(!Number(count)) return message.send("📛| Количество должно быть числом!");
count = Number(repl(count));
if(i.gg < count*2) return message.send("📛| Для покупки требуется: "+utils.sp(count*2)+"$!");
i.gg -= count*2;
i.food += count;
return message.send("🍗Вы успешно купили еды!");
});

cmd.on(/^(?:Продать)$/i, async (message, bot) => {
return message.send(`[❌] - Продажа - [❌]
💲| Цены на продажу ресурсов:
🍕Еда - 1 голда/шт.`);
});


cmd.on(/^(?:Еда продать)\s([^]+)$/i, async (message, bot) => {
var count = repl(message.args[1]);
if(!Number(count)) return message.send("📛| Количество должно быть числом!");
count = Number(fix(count));
if(i.food < count) return message.send("📛| Для продажи требуется: "+utils.sp(count)+" еды!");
i.gg += count;
i.food -= count;
return message.send("🍕Вы успешно продали еду!");
});

cmd.on(/(?:Шахта|⛏)$/i, async (message) => {
		message.user.foolder += 1;
		message.user.energy -= 1;		
	
if(message.user.energy < 0) return message.send(`Вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`)

setTimeout(() => {
	message.user.energy += 1;
}, 300000);

	if(message.user.timers.mine) return message.send(`прости, но ты уже работал(а) на шахте!
		Шахта будет доступна в течении 1 дня.`);

	setTimeout(() => {
		message.user.timers.mine = false;
	}, 86400000);

	message.user.timers.mine = true;

	const gg = utils.random(2000);
	const coals = utils.random(500);
	const irons = utils.random(150);
	const golds = utils.random(100);
	const emeralds = utils.random(20);

	message.user.gg += gg;
	message.user.coal += coals;
	message.user.iron += irons;
	message.user.gold += golds;	message.user.emeralds += emeralds;

	return message.send(`Вы накопали:
		🌕 Голды: ${utils.sp(gg)}
			&#128488; Угля: ${utils.sp(coals)}
		&#11036; Железа: ${utils.sp(irons)}
		&#128155; Золото: ${utils.sp(golds)}
		&#128160; Изумрудов: ${utils.sp(emeralds)}`);
});

//-----------------------------------------------------\\

cmd.on(/^(?:накрутить)$/i, async (message, bot) => {
	message.user.foolder += 1;
let user = message.user;
if(message.user.post < 5) return message.send(`🔸➡ Вы не Админ`);
if(!message.forwards[0]) return message.reply(`Перешлите сообщение.`);
let c = message.forwards[0].senderId;
let b = users.find(x=> x.id === Number(c));

if(message.args[1] == 0) return message.send(`${user.tag}, к сожалению этому ДАЛБАЕБУ невозможно выдать блокировку.`);

b.gg += 50000;
vk.api.messages.send({
user_id: user.id,
message: `` });
message.send(`
⚡ ID: ${b.uid}
🎁 Накрутил: 50.000 голды
`);
});

// ДЛЯ БЕСЕД //

cmd.on(/^(?:Онлайн)$/i, async (message, bot) => {
	message.user.foolder += 1;
if(!message.isChat) return bot(`команда работает только в беседе!`);
vk.api.messages.getConversationMembers({
peer_id: message.peerId,
fields: "online, last_seen"
}).then(async function (response) {
let text = `🎖 Пользователи онлайн:\n\n`;
await response.profiles.map(e => {
if(e.id < 1) return;
if(e.online != 0) text += `${e.last_seen.platform.toString().replace(/1/gi, "📲").replace(/2/gi, "📱").replace(/3/gi, "📱").replace(/4/gi, "📱").replace(/5/gi, "📱").replace(/6/gi, "💻").replace(/7/gi, "🖥")}  *id${e.id} (${e.first_name} ${e.last_name})\n`;
})
return message.reply(text)
})
});

// Донат Панель //


	cmd.on(/^(?:Get)\s([^]+)$/i, async (message, bot) => {
	if(i.post < 1) return message.send(nodonate(1));
	if(users[message.args[1]] == undefined) return message.send("📛| Такого игрока не существует!");
	var he = users[message.args[1]];
	var dox607 = (he.works*5);
	var edox607 = (he.fermers*5);
	var erasx607 = (he.works)+(he.fermers*2)+(he.warriors*2);
	message.send(`
	⚓Персонаж: ${he.tag}
	⚓Статус: ${getr(he.post)}
	⚓Голды: ${utils.sp(he.gg)}
	⚓Алмазов: ${utils.sp(he.donate)}
	⚓Кубков: ${utils.sp(he.cups)}
	⚓Еда: ${utils.sp(he.food)}
	
	⚓Жителей: [${utils.sp(he.works)}/${utils.sp(he.derev.count)}]
	⚓Фермеров: [${utils.sp(he.fermers)}/${utils.sp(he.sad.count)}]
	⚓Воинов: [${utils.sp(he.warriors)}/${utils.sp(he.armia.count)}]
	
	⚓Деревня - ${he.derev.level} уровня.
	⚓Сад - ${he.sad.level} уровня.
	⚓Армия - ${he.armia.level} уровня.
	
	⚓Доход ($): ${utils.sp(dox607)}/мин.
	⚓Доход (еды): ${utils.sp(edox607)}/мин.
	⚓Расход (еды): ${utils.sp(erasx607)}/мин.

	`);
	});

cmd.on(/^(?:экспедиция)$/i, async (message, bot) => {
	let user = message.user
     let id = message.user.id
	if(user.vivi == true) return message.send(`⏩${message.user.tag}, экспедицию можно проводить раз в 3 часа`);
 		user.vivi = true
		setTimeout(() => {
			user.vivi = false
			vk.api.call('messages.send', {
			peer_id: user.id,
			message: `⏩ ${message.user.tag}, Вы снова можете идти в экспедицию"` 
		});
		}, 10800000);
		let sosalka = ['возле озера',
	'в сумрачном лесу',
	'на проклятом болоте']
	let rez = [1,2].random();
	if(rez == 1){
  		let text = [].random(); 
       	const coals = utils.random(500);
	const ggg = utils.random(1000,2500);
	const emeralds = utils.random(20);

	message.user.coal += coals;
	message.user.gg += ggg;
	message.user.emeralds += emeralds;
		return message.send(`⏩ ${message.user.tag}, ${utils.pick(sosalka)} был найден тайник, в котром было:
		\n ⏩ ${utils.sp(ggg)} Голды
		\n ⏩ ${utils.sp(coals)} Угля
		\n ⏩ ${utils.sp(emeralds)} Изумурдов



		`);
   }
	if(rez == 2){
		let text = [].random(); 
		return message.send(`⏩ ${message.user.tag}, во время экспедиции вы ничего не нашли!`);
	}
});



setInterval(async () => {
	users.filter(x => x.home != false).map(x=> {
		var otn = (x.fermers*2)+(x.warriors*2)+x.works;
		var prmin = ((x.works+x.warriors+x.fermers)/20).toFixed(0);
		var prmax = ((x.works+x.warriors+x.fermers)/10).toFixed(0);
		prmax = (prmax < 1) ? 1: prmax;
		x.works += (x.food == otn) ? rand(0, prmin): (x.food > otn) ? rand(0, prmax): rand(0, prmin);
		x.works -= (x.food == otn) ? rand(0, prmin): (x.food > otn) ? rand(0, prmin): rand(0, prmax);
		x.works = (x.works < 0) ? 0: (x.works > x.derev.count) ? x.derev.count: x.works;
		x.gg += x.works*5;
		x.food += x.fermers*5;
		x.food -= otn;
		x.food = (x.food < 0) ? 0: x.food;
	});
}, 60000);



function sp(string) {
	if (typeof string !== "string") string = string.toString();
var syt = string;
		string = (syt.length >= 21) ? syt: string;
		return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join("");
	}

setInterval(async () => {
	users.filter(x => x.war.timeout != 0).map(x=> {
		x.war.timeout -= 1;
	});
}, 1000);

setInterval(async () => {
	users.filter(x => x.war.brone != 0).map(x=> {
		x.war.brone -= 1;
	});
}, 1000);

function timer(seconds) {
    if(seconds == "") return "0 секунд"
    var hours = parseInt(seconds/3600 );
    seconds = seconds%3600;
    var minutes = parseInt(seconds/60); 
    seconds = seconds%60;
    hours = (hours == 0 ? "" : hours + " " + scl(hours, ["час", "часа", "часов"]))
    minutes = (minutes == 0 ? "" : minutes + " " + scl(minutes, ["минуту", "минуты", "минут"]))
    seconds = (seconds == 0 ? "" : seconds + " " + scl(seconds, ["секунду", "секунды", "секунд"]))
    var gone = hours + " " + minutes + " " + seconds
    return gone
};

 function time() {
 	let date = new Date();
 	let days = date.getDate();
 	let hours = date.getHours();
 	let minutes = date.getMinutes();
 	let seconds = date.getSeconds();
 	if (hours < 10) hours = "0" + hours;
 	if (minutes < 10) minutes = "0" + minutes;
 	if (seconds < 10) seconds = "0" + seconds;
 	var times = hours + ':' + minutes + ':' + seconds
 	return times;
 }

function scl(number, titles) {
	cases = [2, 0, 1, 1, 1, 2];
	return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};

function getr(num){
	num = (num < 0) ? "Игрок": 
	(num == 0) ? "Игрок":
	(num == 1) ? "VIP":
	(num == 2) ? "Super VIP":
	(num == 3) ? "MODERATOR":
	(num == 4) ? "TEX ADM":
	(num == 5) ? "OWNER":
	(num > 5) ? "ЧСВ": "Ошибка";
	return [num]
	}

	cmd.on(/^(?:Dgive)$/i, async (message, bot) => {
	if(i.post < 1) return message.send(nodonate(1));
	if(i.dgive != 0) return message.send("📛| Подождите ещё: "+ timer(i.dgive)+"\n🔹Получать алмазы можно раз в час!");
	var diamond906 = (i.rights == 1) ? 5: 15;
	i.donate += diamond906;
	i.dgive = 3600;
	message.send("💎Алмазы успешно получены!");
	});

	setInterval(async () => {
	users.filter(x=> x.dgive != 0).map(x=> {
		x.dgive--;
	});
}, 1000);
});



	cmd.on(/^(?:Myname)\s([^]+)$/i, async (message, bot) => {
	if(i.post < 1) return message.send(nodonate(1));
	if(message.args[1].length > 25) return message.send("📛| Длинна ника не должна превышать 25 символов!");
	i.tag = message.args[1];
	message.send("✅ -> Новое название успешно установлено!");
	});

	function nodonate(num) {
		var flepsj = (`📛Для использования этой команды нужна привилегия: ${getr(num)} или выше!
		💲Купить привилегию можно в нашем донат магазине для этого вы можете нажать кнопку "Донат" или Написать: "Донат"`)
		return flepsj;
		}

	setInterval(async () => {
	users.filter(x=> x.activ != "с4").map(x=> {
		x.activ++;
	});
}, 1000);
	

/// КЛАНЫ ///

cmd.on(/^(?:клан помощь)$/i, async (message, bot) => {
let clanid = message.user.clanid;
return bot(`информация по командам:
⠀1⃣ Клан - информация о клане
⠀2⃣ Клан улучшить - улучшить клан
⠀3⃣ Клан состав - участники клана
⠀4⃣ Клан создать [название] - создать клан
⠀5⃣ Клан название [название] - смена названия клана
⠀6⃣ Клан метка [метка] - символ клана
⠀7⃣ Клан открыть - открыть клан для вступлений 🔓
⠀8⃣ Клан закрыть - закрыть клан для вступлений 🔒
⠀9⃣ Клан [пополнить/снять] [сумма] - казна клана
⠀1⃣0⃣ Клан атака - атаковать другой клан
⠀1⃣1⃣ Клан повысить [id] - повысить звание игроку
⠀1⃣2⃣ Клан понизить [id] - понизить звание игроку
⠀1⃣3⃣ Клан кик [id] - выгнать игрока
⠀1⃣4⃣ Клан войти [id клана] - вступить в клан
⠀1⃣5⃣ Клан покинуть - покинуть клан
`);
});

cmd.on(/^(?:клан атака|клан атаковать|атака|награбить)$/i, async (message, bot) => { 
	let clanid = message.user.clanid; 
	if(!clans[clanid]) return bot(`у вас нет клана!`); 
	if(clans[clanid].users[message.user.uid].level < 3) return bot(`проводить атаки может только глава клана.`); 
	if(clans[clanid].peoples < 5) return bot(`что бы проводить атаки необходимо иметь минимум 5 участников. `); 
	if(message.user.timers.ataka >= 0) return bot(`игроки вашего клана сильно устали, они восстановят силы через ${displayTime(message.user.timers.ataka)} ${smileerror}`); 

	message.user.timers.ataka = 1200;
	clanataka = utils.random(32456724, 10000000000); 
	let atackedclan = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9]);

	if(atackedclan === 1)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].gg += clanataka; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess}
		Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`);
	}

	if(atackedclan === 2)
	{
		clans[clanid].rating -= 1; 
		clans[clanid].los += 1; 
		return bot(`атака состоялась ⚔
		Клан противника оказался сильнее, вы проиграли. ${smileerror}
		Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].los)} поражений!`);
	}

	if(atackedclan === 3)
	{
		return bot(`атака не состоялась, кажется что ваши противники струсили ⚔`);
	}

	if(atackedclan === 4)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].gg += clanataka; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess}
		Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`);
	}

	if(atackedclan === 5)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].gg += clanataka; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess}
		Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`);
	}
	if(atackedclan === 6)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].gg += clanataka; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess}
		Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`);
	}
	if(atackedclan === 7)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].gg += clanataka; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess}
		Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`);
	}
	if(atackedclan === 8)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].gg += clanataka; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess}
		Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`);
	}
	if(atackedclan === 9)
	{
		clans[clanid].rating += 1; 
		clans[clanid].wons += 1; 
		clans[clanid].gg += clanataka; 
		return bot(`атака состоялась ⚔
		Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess}
		Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`);
	}
	});


cmd.on(/^(?:клан)$/i, async (message, bot) => {
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`у вас нет клана!
❓ Для вступления введите «Клан войти [ID]»`);

let text = ``;
let tipe = ``;
let lv = ``;
let mp = ``;
let num = 10;

for(let id in clans[clanid].users) {
if(!num < 1) {
num -= 1;
let user = users[id];
if(user.mention == true) {
if(clans[clanid].users[id].level == 3) text += `👑 Создатель клана - @id${user.id} (${user.tag})\n`;
} else {
if(clans[clanid].users[id].level == 3) text += `👑 Создатель клана - @id${user.id} (${user.tag})\n`;
};
};
}

if(clans[clanid].lvl == 0) { 
lv += `1`;
mp += `5`;
cost = `🆕 Улучшение клана до 2 уровня стоит 100.000.000.000$`;
};
if(clans[clanid].lvl == 1) {
lv += `2`;
mp += `15`;
cost = `🆕 Улучшение клана до 3 уровня стоит 500.000.000.000$`;
};
if(clans[clanid].lvl == 2) {
lv += `3`;
mp += `25`;
cost = `🆕 Улучшение клана до 4 уровня стоит 2.500.000.000.000$`;
};
if(clans[clanid].lvl == 3) {
lv += `4`;
mp += `50`;
cost = `🆒 Клан улучшен максимально.`;
};
if(clans[clanid].open == true) tipe += `🔓 Клан открыт, свободный для входа`;
if(clans[clanid].open == false) tipe += `🔒 Клан закрыт, доступ по приглашениям`;

return bot(`информация о клане «${clans[clanid].name}»:
🛡 Уровень клана: ${lv}
👑 Рейтинг клана: ${utils.sp(clans[clanid].rating)}
📜 ID клана: ${clans[clanid].id}
🥇 Побед: ${utils.sp(clans[clanid].wons)}, поражений: ${utils.sp(clans[clanid].los)}
${tipe}
💰 В казне клана: ${utils.sp(clans[clanid].gg)}$
☠ На вас ещё не нападали другие кланы.

${cost}
👥 Участников: ${utils.sp(clans[clanid].peoples)}/${mp}

🏹 Логотип клана: ${clans[clanid].smile}
${text}
`);
});

cmd.on(/^(?:клан улучшить)$/i, async (message, bot) => {
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`у вас нет клана!
	❓ Для вступления введите «Клан войти [ID]»`);
if(clans[clanid].users[message.user.uid].level < 3) return bot(`улучшать клан может только глава клана!`);
if(clans[clanid].lvl == 0) {
if(message.user.gg < 10000) return bot(`улучшение клана до 2 уровня стоит 10.000 голды`);
message.user.gg -= 10000;
clans[clanid].lvl = 1;
return bot(`клан улучшен до 2 уровня за 100.000.000.000$!

👪 Максимальное количество участников увеличено до - 15
🗣 Максимальная длина названия клана увеличена до - 10 символов
🆕 Следующее улучшение стоит 500.000.000.000$`);
};
if(clans[clanid].lvl == 1) {
if(message.user.gg < 30000) return bot(`улучшение клана до 3 уровня стоит 30.000 голды`);
message.user.gg -= 30000;
clans[clanid].lvl = 2;
return bot(`клан улучшен до 3 уровня за 500.000.000.000$!

👪 Максимальное количество участников увеличено до - 25
🗣 Максимальная длина названия клана увеличена до - 13 символов
🆕 Следующее улучшение стоит 2.500.000.000.000$`);
};
if(clans[clanid].lvl == 2) {
if(message.user.gg < 50000) return bot(`улучшение клана до 4 уровня стоит 50.000 голды`);
message.user.gg -= 50000;
clans[clanid].lvl = 3;
return bot(`клан улучшен до 4 уровня за 2.500.000.000.000$!

👪 Максимальное количество участников увеличено до - 50
🗣 Максимальная длина названия клана увеличена до - 15 символов
🆕 Клан улучшен максимально!`);
};
if(clans[clanid].lvl == 3) {
return bot(`ваш клан улучшен максимально!`);
};
});

cmd.on(/^(?:клан состав)$/i, async (message, bot) => {
let clanid =
 
message.user.clanid;
if(!clans[clanid]) return bot(`у вас нет клана!
	❓ Для вступления введите «Клан войти [ID]»`);

let text = ``;
let mp = ``;

for(let id in clans[clanid].users) {
let user = users[id];
if(user.mention == true) {
if(clans[clanid].users[id].level == 3) text += `⠀⠀ Создатель клана - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
if(clans[clanid].users[id].level == 2) text += `⠀⠀ Заместитель клана - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
if(clans[clanid].users[id].level == 1) text += `⠀⠀ Обычный участник - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
if(clans[clanid].users[id].level == 0) text += `⠀⠀ Обычный участник - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`;
} else {
if(clans[clanid].users[id].level == 3) text += `⠀⠀ Создатель клана - ${user.tag} (ID: ${user.uid})\n`;
if(clans[clanid].users[id].level == 2) text += `⠀⠀ Заместитель клана - ${user.tag} (ID: ${user.uid})\n`;
if(clans[clanid].users[id].level == 1) text += `⠀⠀ Обычный участник - ${user.tag} (ID: ${user.uid})\n`;
if(clans[clanid].users[id].level == 0) text += `⠀⠀ Обычный участник - ${user.tag} (ID: ${user.uid})\n`;
};
}

if(clans[clanid].lvl == 0) { 
mp += `5`;
};
if(clans[clanid].lvl == 1) {
mp += `15`;
};
if(clans[clanid].lvl == 2) {
mp += `25`;
};
if(clans[clanid].lvl == 3) {
mp += `50`;
};
if(clans[clanid].lvl == 4) {
mp += `100`;
};

return bot(`участники клана «${clans[clanid].name}» [${clans[clanid].peoples}/${mp}]:
${text}`);
});

cmd.on(/^(?:клан создать)\s(.*)$/i, async (message, bot) => {
if(!message.args[1]) return bot(`введите название для клана!`);
let zaprets1 = message.args[1].toLowerCase();
var zapret = /(🤵)/
var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
var check = true;
		progressQuest(message.user, 1)
return bot(`в названии есть запрещенные символы ${smileerror}`);
} 
if(message.args[1].length >= 7) return bot(`максимальная длина названия клана 7 символов`);
let name = message.args[1];
let clanid = message.user.clanid;
if(message.user.gg < 5000) return bot(`создание клана стоит 5.000 голды`);
message.user.gg -= 5000;
let cl = clans.length

if(clans[clanid]) return bot(`вы уже состоите в клане!`);
if(!clans[clanid]) { 
clans.push({
id: cl,
users: {},
name: name,
gg: 0,
rating: 0,
smile: `🛡`,
peoples: 1,
wons: 1,
los: 0,
open: true,
lvl: 0
});
message.user.clanid = cl;
clans[cl].users[message.user.uid] = {
id: message.user.id,
uid: message.user.uid,
level: 3
}


return bot(`клан «${message.args[1]}» успешно создан!\nВведите «клан помощь» чтобы посмотреть команды клана!`);
}
});

cmd.on(/^(?:клан название)\s(.*)$/i, async (message, bot) => {
if(!message.args[1]) return bot(`введите название для клана!`);
let zaprets1 = message.args[1].toLowerCase();
var zapret = /(🤵|📔|📗📘|📙|📕|⍻|🗸|√|☑|✔|👑|✅|✓)/
var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
var check = true;
return bot(`в названии есть запрещенные символы ${smileerror}`);
}
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`у вас нет клана!
	❓ Для вступления введите «Клан войти [ID]»`);
if(clans[clanid].users[message.user.uid].level < 2) return bot(`название клана может менять заместитель клана и выше!`);
if(clans[clanid].lvl == 0) {
if(message.args[1].length >= 7) return bot(`максимальная длина названия клана 7 символов`);
};
if(clans[clanid].lvl == 1) {
if(message.args[1].length >= 10) return bot(`максимальная длина названия клана 10 символов`);
};
if(clans[clanid].lvl == 2) {
if(message.args[1].length >= 13) return bot(`максимальная длина названия клана 13 символов`);
};
if(clans[clanid].lvl == 3) {
if(message.args[1].length >= 15) return bot(`максимальная длина названия клана 15 символов`);
};
clans[clanid].name = message.args[1];
return bot(`название клана сменено на «${message.args[1]}»`);
});

cmd.on(/^(?:клан метка)\s(.*)$/i, async (message, bot) => {
if(!message.args[1]) return bot(`введите метку для клана!`);
let zaprets1 = message.args[1].toLowerCase();
var zapret = /(й|ц|у|к|е|н|г|ш|щ|з|х|ъ|ф|ы|в|а|п|р|о|л|д|ж|э|я|ч|с|м|и|т|ь|б|ю|1|2|3|4|5|6|7|8|9|0)/
var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
var check = true;
return bot(`в метке клана можно использовать только смайлы ${smileerror}`);
}
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`у вас нет клана!
	❓ Для вступления введите «Клан войти [ID]»`);
if(clans[clanid].users[message.user.uid].level < 2) return bot(`метку клана может менять заместитель клана и выше!`);
if(message.args[1].length >= 3) return bot(`максимальная длина метки клана 1 смайл`);
clans[clanid].smile = message.args[1];
return bot(`метка клана сменена на «${message.args[1]}»`);
});

cmd.on(/^(?:клан открыть)$/i, async (message, bot) => {
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`у вас нет клана!
	❓ Для вступления введите «Клан войти [ID]»`);
if(clans[clanid].users[message.user.uid].level < 1) return bot(`открывать клан может модератор клана и выше!`);
if(clans[clanid].open == true) return bot(`клан уже открытый!`)
clans[clanid].open = true;
return bot(`вы успешно открыли клан!`);
});

cmd.on(/^(?:клан закрыть)$/i, async (message, bot) => {
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`у вас нет клана!
	❓ Для вступления введите «Клан войти [ID]»`);
if(clans[clanid].users[message.user.uid].level < 1) return bot(`закрывать клан может модератор клана и выше!`);
if(clans[clanid].open == false) return bot(`клан уже закрытый!`)
clans[clanid].open = false;
return bot(`вы успешно закрыли клан!`);
});

cmd.on(/^(?:клан)\s(?:пополнить)\s(.*)$/i, async (message, bot) => {
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`у вас нет клана!
	❓ Для вступления введите «Клан войти [ID]»`);
if(message.user.settings.adm > 2) return bot(`администратор не может пополнять клан. 🚫`);
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.gg);

if(!Number(message.args[1])) return;
message.args[1] = Math.floor(Number(message.args[1]));

if(message.args[1] <= 0) return;

if(message.args[1] > message.user.gg) return bot(`у вас нет данной суммы ${smileerror}`);
else if(message.args[1] <= message.user.gg)
{
message.user.gg -= message.args[1];
clans[clanid].gg += message.args[1];

return bot(`вы положили на счёт клана ${utils.sp(message.args[1])}$`);
}
});


cmd.on(/^(?:клан)\s(?:снять)\s(.*)$/i, async (message, bot) => {
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`у вас нет клана!
	❓ Для вступления введите «Клан войти [ID]»`);
if(clans[clanid].users[message.user.uid].level < 2) return bot(`снимать деньги клана может модератор клана и выше!`);
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, clans[clanid].gg);

if(!Number(message.args[1])) return;
message.args[1] = Math.floor(Number(message.args[1]));

if(message.args[1] <= 0) return;

if(message.args[1] > clans[clanid].gg) return bot(`на балансе клана нет данной суммы ${smileerror}`);
else if(message.args[1] <= clans[clanid].gg)
{
message.user.gg += message.args[1];
clans[clanid].gg -= message.args[1];

return bot(`вы сняли ${utils.sp(message.args[1])}$ с баланса клана

Напомним, передача средств через клан строго запрещена и карается блокировкой!`);
}
});

cmd.on(/^(?:клан повысить)\s([0-9]+)$/i,
 
async (message, bot) => {
let clanidd = message.user.clanid;
if(!clans[clanidd]) return bot(`у вас нет клана!
	❓ Для вступления введите «Клан войти [ID]»`);
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`неверный ID игрока`);
if(user.uid === message.user.uid) return bot(`неверный ID`);

let clanid = user.clanid;
if(!clans[clanid]) return bot(`этот человек не состоит в клане`);
if(clans[clanid].users[message.user.uid].level < 3) return bot(`повышать может только создатель клана!`);


if(!clans[clanid]) return bot(`этот человек не состоит в клане!`);
if(user.clanid != message.user.clanid) return bot(`игрок состоит в другом клане!`);
if(clans[user.clanid].users[user.uid].level >= 2) return bot(`нельзя повысить игрока до создателя!`);
clans[clanid].users[user.uid].level += 1;
return bot(`игрок ${user.tag} был повышен в клане!`); 
});

cmd.on(/^(?:клан понизить)\s([0-9]+)$/i, async (message, bot) => {
let clanidd = message.user.clanid;
if(!clans[clanidd]) return bot(`у вас нет клана!
	❓ Для вступления введите «Клан войти [ID]»`);
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`неверный ID игрока`);
if(user.uid === message.user.uid) return bot(`неверный ID`);

let clanid = user.clanid;
if(!clans[clanid]) return bot(`этот человек не состоит в клане`);
if(clans[clanid].users[message.user.uid].level < 3) return bot(`понижать может только создатель клана!`);


if(!clans[clanid]) return bot(`этот человек не состоит в клане!`);
if(user.clanid != message.user.clanid) return bot(`игрок состоит в другом клане!`);
if(clans[user.clanid].users[user.uid].level <= 0) return bot(`нельзя понизить игрока ниже участника!`);
clans[clanid].users[user.uid].level -= 1;
return bot(`игрок ${user.tag} был понижен в клане!`); 
});

cmd.on(/^(?:клан кик)\s([0-9]+)$/i, async (message, bot) => {
let clanidd = message.user.clanid;
if(!clans[clanidd]) return bot(`у вас нет клана!
	❓ Для вступления введите «Клан войти [ID]»`);
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`неверный ID игрока`);
if(user.uid === message.user.uid) return bot(`неверный ID`);

let clanid = user.clanid;
if(!clans[clanid]) return bot(`этот человек не состоит в клане`);
if(clans[clanid].users[message.user.uid].level < 3) return bot(`кикать может только создатель клана!`);


if(!clans[clanid]) return bot(`этот человек не состоит в клане!`);
if(user.clanid != message.user.clanid) return bot(`игрок состоит в другом клане!`);
clans[clanid].peoples -= 1;
user.clanid = false;
delete clans[clanid].users[user.uid];
return bot(`игрок ${user.tag} был кикнут из клане!`); 
});

cmd.on(/^(?:клан войти|клан зайти|клан вход|клан присоединиться|клан присоедениться|клан)\s([0-9]+)$/i, async (message, bot) => {
let clanid = message.user.clanid;
if(clans[clanid]) return bot(`вы уже состоите в клане!`);
if(!message.args[1]) return bot(`вы не указали ID клана!`);
let idclan = message.args[1];

if(!clans[idclan]) return bot(`данного клана не существует! Укажите правильный ID клана.`);
if(clans[idclan].delete == true) return bot(`данный клан удалён.`);
if(clans[idclan].lvl == 0) { 
if(clans[idclan].peoples >= 5) return bot(`клан переполнен!`);
};
if(clans[idclan].lvl == 1) { 
if(clans[idclan].peoples >= 15) return bot(`клан переполнен!`);
};
if(clans[idclan].lvl == 2) { 
if(clans[idclan].peoples >= 25) return bot(`клан переполнен!`);
};
if(clans[idclan].lvl == 3) { 
if(clans[idclan].peoples >= 50) return bot(`клан переполнен!`);
};
if(clans[idclan].lvl == 4) { 
if(clans[idclan].peoples >= 100) return bot(`клан переполнен!`);
};
if(clans[idclan].open == false) return bot(`🔒 Клан закрыт, доступ по приглашениям`);
if(clans[idclan].open == true){
clans[idclan].peoples += 1;
message.user.clanid = Number(message.args[1]);
if(!clans[idclan].users[message.user]) {
clans[idclan].users[message.user.uid] = {
id: message.user.id,
uid: message.user.uid,
level: 1
}
}
return bot(`вы вошли в клан «${clans[idclan].name}»!\nВведите "клан помощь" чтобы посмотреть команды клана!`);
}

});

cmd.on(/^(?:клан покинуть)$/i, async (message, bot) => {
let clanid = message.user.clanid;
if(!clans[clanid]) return bot(`у вас нет клана!
	❓ Для вступления введите «Клан войти [ID]»`);
clans[clanid].peoples -=
 
1;
message.user.clanid = false;
delete clans[clanid].users[message.user.uid];
return bot(`вы покинули клан!`);

});

cmd.on(/^(?:⚔ топ кланы|топ кланы|⚔ топ кланов|⚔ клан топ|⚔ кланы топ|кланов топ|топ кланов|клан топ|топ клан|лучшие кланы|кланы|🏆 Лучшие кланы)$/i, async (message, bot) => {
		let top = [];  
		let topc = []; 
		
		function cccl(clanidd) { 
		let texxxt = ``; 
		for(let id in clans[clanidd].users) { 
		let user = users[id]; 
		if(clans[clanidd].users[id].level == 3) texxxt += `*id${clans[clanidd].users[id].level == 3} (${clans[clanidd].name})`; 
		} 
		return texxxt; 
		} 
		
		clans.map(x=> { 
		topc.push({ balance: x.balance, rating: x.rating, name: x.name, smile: x.smile, id: x.id, peoples: x.peoples, lvl: x.lvl }); 
		}); 
		
		topc.sort((a, b) => { 
		return b.rating - a.rating; 
		}); 
		const find = () => {
			let pos = 1000;
	
			for (let i = 0; i < top.length; i++)
			{
				if(top[i].id === message.senderId) return pos = i;
			}
	
			return pos;
		}
		
		let cll = ``; 
		
		for (let i = 0; i < 10; i++) 
		{ 
		if(!topc[i]) return; 
		const clan = topc[i]; 
		
		let mp = ``; 
		if(clan.lvl == 0) { 
		mp += `5`; 
		}; 
		if(clan.lvl == 1) { 
		mp += `15`; 
		}; 
		if(clan.lvl == 2) { 
		mp += `25`; 
		}; 
		if(clan.lvl == 3) { 
		mp += `50`; 
		}; 
		
		cll += `${i === 9 ? `🔟` : `${i + 1}⃣`}  [${clan.peoples}/${mp}] ${cccl(clan.id)} -  🏆${utils.sp(clan.rating)} | $${utils.rn(clan.balance)}\n`; 
		} 
		
		return bot(`топ кланов: 
		${cll}
		—————————————————
		
📢 Рейтинг клана складывается из побед и поражений в атаках.`);
		});

cmd.on(/^(?:Слайм)/i, async (message, bot) => { 
message.user.foolder += 1;
	rq("https://isinkin-bot-api.herokuapp.com/1/talk?q=" + encodeURIComponent(message.text))
	.then(res => {
		return message.send(res.text)
	})	



});
/// РАЗДАЧА ///

let giving1 = true;

cmd.on(/^(?:раздача)$/i, async (message, bot) => {
		if(message.user.post < 5) return bot(`доступно только Разрабу!`);
			 users.filter(x=> x.id !== 0).map(zz => { 
  vk.api.messages.send({ user_id: zz.id, message: `🆓 Халявные бабки 🆓\n 🎰 Пост с раздачей уже в группе 🎰`}); 
 }); 
	var bvin = 160000; 
		var smile = ['🙂','😯','☺','🤑','😉'].random(); 
	var nsmile = ['🎊','⭐','🔊','🔥','🎮','🌈','💡','💳','🏆','🎉','💸'].random(); 

	var post = ['🎮','🤑','🎰','🔥','😎','👻','💃','👨‍🌾','💛','🆓','💣'].random(); 
	giving1 = true;
	user.api.wall.post({
		owner_id: -114070130,
		message: `
       ${post} Доброго времени суток!\n Сделайте репост этой записи и получите: ${spaces(bvin)}$ на свой игровой баланс.
       		— Начало акции в ${time(1)}. \n Длительность акции 1 час.

		`, attachment: 'photo-114070130_457239421'}).then((response) => { 
		user.api.wall.openComments({
				owner_id: -114070130,
				post_id: response.post_id
			});
		user.api.wall.createComment({
				owner_id: -114070130,
				post_id: response.post_id,
				from_group: 114070130,
				message: '🔔 Включи уведомления о новых записях, что бы не пропускать новые крутые раздачи!',
			});
			user.api.wall.closeComments({
				owner_id: -114070130,
				post_id: response.post_id
			});
		setTimeout(() => {
			user.api.call('wall.getReposts', { owner_id: -114070130, post_id: response.post_id, count: 1000 }).then((res) => { 
				res.items.map(x=> {
					if(x.from_id < 0) return;
					let user = users.find(a => a.id === x.from_id);
					if(!user) return; 
					user.gg = 160000;
					vk.api.messages.send({ user_id: user.id, message: `🔑 [id${user.id}|${user.tag}], спасибо за участие в раздаче!  \n ▶ На ваш баланс было зачислено ${spaces(bvin)}$ ${smile}!` });
					vk.api.messages.send({ user_id: 593863583, message: `[Авто-Раздача]: Игроку "(@id${user.id} (${user.tag})" выдано: ${spaces(bvin)}$ на баланс.\n\nЕго баланс составляет: ${spaces(user.balance)}$`})
				});
			});
			user.api.wall.openComments({
				owner_id: -114070130,
				post_id: response.post_id
			});
			user.api.wall.closeComments({
				owner_id: -114070130,
				post_id: response.post_id
			});
			giving = false;
		}, 3600000);
		giving1 = false;
		return message.send(`ID поста - ${response.post_id}`)
	});
});