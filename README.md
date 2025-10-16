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
   2. Skapar ett DOM-träd (Document Object Model), där varje HTML-tagg blir ett objekt
   3. När den kommer till -link- hämtas och appliceras CSS-filen.
   4. När den når -script src="js/app.js"></script- laddas och körs JavaScript-filen.
5. JavaScript startar
   6. const parisDate = new Date('2025-11-08T00:00:00'); //Sparar datumet för resan
   7. updateCountdown() // Räknar ut tiden som återstår
   8. setInterval(updateCountdown, 1000); // Kör funktionen varje sekund för att uppdatera tiden på sidan
   9. timerElement.textContent = ... // Ändrar texten i -p id="timer"- direkt i HTML:en.

Resultat: användaren ser en pågående nedräkning som tickar ned i realtid.

3. När användaren klickar på knappen "Kommande resemål"
   4. Användaren klickar på knappen -button id="showDestinations"-.
   5. addEventListener('click', ...) fångar klicket.
   6. JavaScript skapar en ny lista (ul) i minnet.
   7. Loopar genom arrayen destinations = ['London', 'Edinburgh', 'Amsterdam'].
   8. För varje destination:
      9. Skapas ett -li-element.
      10. Text sätts till destinationens namn.
      10. -li-läggs till i -ul-.
      11. När alla -li- är skapade, läggs listan in i -div id="destinationsList"-.

Resultat: användaren ser en ny lista med destinationer som inte fanns i original-HTML.








