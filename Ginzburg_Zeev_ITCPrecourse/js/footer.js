
          const usedLang = [
            "HTML",
            "CSS",
            "JavaScript",
            "python"
          ];
          numlengs = usedLang.length;
          lastlang = usedLang[numlengs-1];
          let langs = "";
          for (let i = 0; i < usedLang.length-1; i++){
            langs = langs + usedLang[i] + ", "};
          const langsToAdd = document.querySelectorAll('.jslangA');
          for (let i = 0; i < langsToAdd.length; i++) {
          const currentElement = langsToAdd[i];
          currentElement.innerText = langs;
      }
      const langsLast = document.querySelectorAll('.jslangLast');
          for (let i = 0; i < langsLast.length; i++) {
          const currentElement = langsLast[i];
          currentElement.innerText = lastlang;
      }