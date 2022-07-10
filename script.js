const endpoint = "https://script.googleusercontent.com/macros/echo?user_content_key=QgvKdfRIRfybjjPJk6wD1rzT1JmdyOrU2F4AnCj9f1ohitlPdtfPTtd6FN-2rdWtPgLHpIIaCFeuc4JjS7V8cqCJRko0XjiXm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDLJBiGF79Gw9Nhd5ftv4jYYPPMtKpxqV3xQzWTBten7HlLOfQLssMu80p6dmva2tl-C1VJXhPLUczCiYPccWTiYa6RN0tzjKQ&lib=M3A4-qig1mryOMYkUweSwNX2l86n1Hj67"
const bible_data = []

wave()

fetch(endpoint)
.then(response => response.json())
.then(data=>{
	const datalists = []
	data.forEach(element => { datalists.push(element) })
	// console.log(datalists)
	datalists.map( (obj,index) => {
		bible_data[index] = [
			obj["ch_info"], obj["ch"], obj["jp_info"], obj["jp"]
		]	
	})
	document.getElementById("wrap_load").remove()
	// console.log(bible_data)
	names.forEach( (value,index) => {
		const section = document.querySelector(".section")
		const chapter = document.querySelector(".chapter")
		const letter  = document.querySelector(".letter")
		let button = document.createElement("button")
		button.innerHTML = value
		button.onclick = ()=> {
			if( chapter.hasChildNodes ) {
				while(chapter.firstChild)
					chapter.innerHTML = ""
			}
			for(let i=1;i<=syou[index];i++){
				const syou_button = document.createElement("button")
				syou_button.innerHTML = i
				syou_button.id = `chapter${i}`
				
				chapter.appendChild(syou_button)
			}
			window.location.href = "#chapter1"
		}
		letter.appendChild(button)
	})
	
})


document.querySelector(".Toggle").addEventListener('click',()=> {
    document.querySelector(".Toggle").classList.toggle("active")
    document.querySelector(".letter").classList.toggle("closed")
    document.querySelector(".chapter").classList.toggle("closed")
    document.querySelector(".section").classList.toggle("closed")
})

function wave() {
	var maxSize  = 30,   // 要素の広がる最大の大きさ
	    addSize  = 2,    // 増加する大きさ
	    duration = 200, // 1つの波の表示時間
	    delay    = 0;   // 次の波が出るまでの待機時間

	var ratio = addSize / maxSize,
		speed = ratio * duration;

	window.addEventListener('DOMContentLoaded', function() {
		/**
		 * 波を表示
		 * @param {object} event イベントオブジェクト
		 */
		var renderWave = function(event) {
			var elem = document.createElement('div');
			elem.classList.add('wave');
			elem = document.body.appendChild(elem);

			var size    = 0,
			    x       = event.clientX,
			    y       = event.clientY,
			    opacity = 1;

			elem.style.top  = y + 'px';
			elem.style.left = x + 'px';

			var sid = setInterval(function() {
				size    += addSize;
				x       -= addSize / 2;
				y       -= addSize / 2;
				opacity -= ratio;

				elem.style.width   = size + 'px';
				elem.style.height  = size + 'px';
				elem.style.top     = y + 'px';
				elem.style.left    = x + 'px';
				elem.style.opacity = opacity;

				if (size >= maxSize) {
					clearInterval(sid);
					elem.parentNode.removeChild(elem);
				}
			}, speed);
            elem.p
		};

		var wait = false;

		window.addEventListener('click', function(event) {
			renderWave(event);
		}, false);
	});
}

//事前に記憶しておく配列
let syou =  ["50", "40", "27", "36", "34", "24", "21", "4", "31", "24", "22", "25", "29", "36", "10", "13", "10", "42", "150", "31", "12", "8", "66", "52", "5", "1", "12", "14", "3", "9", "1", "4", "7", "3", "3", "3", "2", "14", "4", "28", "16", "24", "21", "28", "16", "16", "13", "6", "6", "4", "4", "5", "3", "6", "4", "3", "1", "13", "5", "5", "3", "5", "1", "1", "1", "22"]
let Abbre = ["創", "出エジ", "レビ", "民", "申", "ヨシュ", "士", "ルツ", "サム上", "サム下", "列王上", "列王下", "歴代上", "歴代下", "エズ", "ネヘ", "エス", "ヨブ", "詩", "箴", "伝", "雅", "イザ", "エレ", "哀", "エゼ", "ダニ", "ホセ", "ヨエ", "アモ", "オバ", "ヨナ", "ミカ", "ナホ", "ハバ", "ゼパ", "ハガ", "ゼカ", "マラ", "マタ", "マル", "ルカ", "ヨハ", "使徒", "ロマ", "Ⅰコリ", "Ⅱコリ", "ガラ", "エペ", "ピリ", "コロ", "Ⅰテサ", "Ⅱテサ", "Ⅰテモ", "Ⅱテモ", "テト", "ピレ", "ヘブ", "ヤコ", "Ⅰペテ", "Ⅱペテ", "Ⅰヨハ", "Ⅱヨハ", "Ⅲヨハ", "ユダ", "黙"]
let names = ["01 創世記", "02 出エジプト記", "03 レビ記", "04 民数記", "05 申命記", "06 ヨシュア記", "07 士師記", "08 ルツ記", "09 サムエル記上", "10 サムエル記下", "11 列王記上", "12 列王記下", "13 歴代志上", "14 歴代志下", "15 エズラ記", "16 ネヘミヤ記", "17 エステル記", "18 ヨブ記", "19 詩篇", "20 箴言", "21 伝道の書", "22 雅歌", "23 イザヤ書", "24 エレミヤ書", "25 哀歌", "26 エゼキエル書", "27 ダニエル書", "28 ホセア書", "29 ヨエル書", "30 アモス書", "31 オバデア書", "32 ヨナ書", "33 ミカ書", "34 ナホム書", "35 ハバクク書", "36 ゼパニヤ書", "37 ハガイ書", "38 ゼカリヤ書", "39 マラキ書", "40 マタイによる福音書", "41 マルコによる福音書", "42 ルカによる福音書", "43 ヨハネによる福音書", "44 使徒行伝", "45 ローマ人への手紙", "46 コリント人への第一の手紙", "47 コリント人への第二の手紙", "48 ガラテヤ人への手紙", "49 エペソ人への手紙", "50 ピリピ人への手紙", "51 コロサイ人への手紙", "52 テサロニケ人への第一の手紙", "53 テサロニケ人への第二の手紙", "54 テモテへの第一の手紙", "55 テモテへの第二の手紙", "56 テトスへの手紙", "57 ピレモンへの手紙", "58 ヘブル人への手紙", "59 ヤコブの手紙", "60 ペテロの第一の手紙", "61 ペテロの第二の手紙", "62 ヨハネの第一の手紙", "63 ヨハネの第二の手紙", "64 ヨハネの第三の手紙", "65 ユダの手紙", "66 ヨハネの黙示録"]