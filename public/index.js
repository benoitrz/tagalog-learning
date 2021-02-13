const googleTranslateUrl = 'https://translate.google.com/?hl=en#view=home&op=translate&sl=tl&tl=en&text=';
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomWord = dictionnary[randomInt(0, dictionnary.length-1)];
if (randomWord.ta && randomWord.en) {
	const taDiv = document.getElementById('source');
	const enDiv = document.getElementById('translation');
	if (taDiv && enDiv) {
		taDiv.innerHTML = randomWord.ta;
		enDiv.innerHTML = randomWord.en;
		const translateDiv = document.getElementById('g-translate-link');
		const translateUrl = googleTranslateUrl + randomWord.ta;
		const translateLink = document.createElement('a');
		translateLink.setAttribute('href', translateUrl);
		translateLink.innerText = 'Audio';
		translateDiv.appendChild(translateLink);
	}
}