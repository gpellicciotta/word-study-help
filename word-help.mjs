window.addEventListener("load", fireDomReady, false);

function fireDomReady() {
  let wordBox = document.getElementById("word-box");  
  wordBox.addEventListener("keydown", searchWord);
  wordBox.value = "parola";
  wordBox.focus();
  wordBox.select(); // Select all
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
      if (openTabs[target]) {
        openTabs[target].close();      
      }
      let newWindow = window.open(href, target);
      if (newWindow) {
        openTabs[target] = newWindow;
        newWindow.addEventListener('load', function() {
          newWindow.document.title = windowTitle;
        });
        newWindow.focus();
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
  
  let wordEl = document.getElementById("word");
  wordEl.innerHTML = word;

  let googleTranslate = document.getElementById("google-translate");
  let dictionary = document.getElementById("dictionary");
  let pronunciation = document.getElementById("pronunciation");
  let uses = document.getElementById("uses");
  let images = document.getElementById("images");

  // https://translate.google.com/?op=translate&hl=en%20&sl=it&tl=en&text=prigo
  let googleTranslateLink = "https://translate.google.com?op=translate&hl=" + dl + " &sl=" + sl + "&tl=" + dl + "&text=" + word;
  googleTranslate.innerHTML = "";
  googleTranslate.appendChild(createLink(googleTranslateLink, destinationLanguage + " translation of '" + word + "'", "Translation"));	
  let dictionaryLink = "https://" + sl + ".thefreedictionary.com/" + word;
  dictionary.innerHTML = "";
  dictionary.appendChild(createLink(dictionaryLink, "dictionary", "Dictionary"));
  let pronunciationLink = "https://www.forvo.com/word/" + word + "/#" + sl;
  pronunciation.innerHTML = "";
  pronunciation.appendChild(createLink(pronunciationLink, "pronunciation", "Pronunciation"));
  let usesLink = "https://context.reverso.net/translation/" + sourceLanguage + "-" + destinationLanguage + "/" + word;	
  uses.innerHTML = "";
  uses.appendChild(createLink(usesLink, "uses", "Uses"));		
  let imagesLink = "https://www.google.com/search?hl=" + sl + "&sclient=img&udm=2&q=" + word;
  images.innerHTML = "";
  images.appendChild(createLink(imagesLink, "images", "Images"));
  wordBox.value = "";
}