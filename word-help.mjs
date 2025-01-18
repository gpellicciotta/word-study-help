window.addEventListener("load", fireDomReady, false);

function fireDomReady() {
  let wordBox = document.getElementById("word-box");
  wordBox.addEventListener("keydown", searchWord);
}

let openTabs = { };

function createLink(href, text, target = null) {
  let a = Object.assign(document.createElement("a"), { 
    href: href, 
    textContent: text 
  });
  if (target) {
    a.target = target;
    a.onclick = function(event) {
      event.preventDefault();
      if (!openTabs[target]) {
        let newWindow = window.open(href, target);
        newWindow.document.title = target;
        openTabs[target] = newWindow;
        openTabs[target].focus(); 
      }
      else {
        openTabs[target].location.href = href;
        openTabs[target].focus();
      }
    };        
  }
  return a;
}

function searchWord(e) {
  if (e.which !== 13) { return ; }

  let wordBox = document.getElementById("word-box");
  let word = wordBox.value;
  const sl = "it";
  const sourceLanguage = "italian";	
  const dl = "en";
  const destinationLanguage = "english";
  
  let googleTranslate = document.getElementById("google-translate");
  let dictionary = document.getElementById("dictionary");
  let pronunciation = document.getElementById("pronunciation");
  let uses = document.getElementById("uses");
  // Mela --> ?sl=it&tl=en&text=mela&op=translate
  let googleTranslateLink = "http://translate.google.com?op=translate&hl=" + dl + " &sl=" + sl + "&tl=" + dl + "&text=" + word;
  googleTranslate.innerHTML = "";
  googleTranslate.appendChild(createLink(googleTranslateLink, destinationLanguage + " translation of '" + word + "'", "Translation"));	
  let dictionaryLink = "http://" + sl + ".thefreedictionary.com/" + word;
  dictionary.innerHTML = "";
  dictionary.appendChild(createLink(dictionaryLink, "dictionary", "Dictionary"));
  let pronunciationLink = "http://www.forvo.com/word/" + word + "/#" + sl;
  pronunciation.innerHTML = "";
  pronunciation.appendChild(createLink(pronunciationLink, "pronunciation", "Pronunciation"));
  let usesLink = "https://context.reverso.net/translation/" + sourceLanguage + "-" + destinationLanguage + "/" + word;	
  uses.innerHTML = "";
  uses.appendChild(createLink(usesLink, "uses", "Uses"));		

  wordBox.value = "";
}