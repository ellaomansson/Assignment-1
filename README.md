# Assignment-1

Detta projekt består av en webbsida med en nedräknare tills min resa till Paris,
samt och en knapp som visar kommande resmål.

HTML strukturerar innehållet på webbsidan, och innehåller en header, main-content, och footer.
I HTML finns länkar till CSS- och JavaScript-filerna:

CSS: link rel="stylesheet" href="css/style.css" (inom head)

JS: script src="js/app.js"></script (längst ner i body)

CSS påverkar webbsidans utseende (färger, typsnitt, layout,etc), och körs efter att HTML har laddats.
JavaScript påverkar funktionalitetet och interaktiviteten på webbsidan, och körs efter att HTML har laddats och skapat ett dokumentobjekt (DOM).

I detta projekt används JavaScript för att:
* räkna ner till ett datum (min resa till Paris)
* visa en destinationslista när när användaren klickar på knappet "Kommande resemål."

Vad som händer när sidan laddas:
1. Webbläsaren läser index.html från toppen
- Skapar ett DOM-träd (Document Object Model), där varje HTML-tagg blir ett objekt
- När den kommer till -link- hämtas och appliceras CSS-filen.
- När den når -script src="js/app.js"></script- laddas och körs JavaScript-filen.
2. JavaScript startar
- const parisDate = new Date('2025-11-08T00:00:00'); //Sparar datumet för resan
- updateCountdown() // Räknar ut tiden som återstår
- setInterval(updateCountdown, 1000); // Kör funktionen varje sekund för att uppdatera tiden på sidan
- timerElement.textContent = ... // Ändrar texten i -p id="timer"- direkt i HTML:en.

Resultat: användaren ser en pågående nedräkning som tickar ned i realtid.

3. När användaren klickar på knappen "Kommande resemål"
- Användaren klickar på knappen -button id="showDestinations"-.
- addEventListener('click', ...) fångar klicket.
- JavaScript skapar en ny lista (ul) i minnet.
- Loopar genom arrayen destinations = ['London', 'Edinburgh', 'Amsterdam'].
- För varje destination:
- Skapas ett -li-element.
- Text sätts till destinationens namn.
- -li-läggs till i -ul-.
- När alla -li- är skapade, läggs listan in i -div id="destinationsList"-.

Resultat: användaren ser en ny lista med destinationer som inte fanns i original-HTML.








