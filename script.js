function swapLanguages() {
  const sourceLang = document.getElementById("sourceLang");
  const targetLang = document.getElementById("targetLang");

  // Swap selected values
  const temp = sourceLang.value;
  sourceLang.value = targetLang.value;
  targetLang.value = temp;

  // Optionally swap text too
  const sourceText = document.getElementById("sourceText");
  const translatedText = document.getElementById("translatedText");

  const tempText = sourceText.value;
  sourceText.value = translatedText.value;
  translatedText.value = tempText;
}

function mockTranslate() {
  const sourceText = document.getElementById("sourceText").value;
  const translated = sourceText.split("").reverse().join(""); // Just reversing for demo
  document.getElementById("translatedText").value = translated;
}
