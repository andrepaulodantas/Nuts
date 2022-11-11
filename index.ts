import express from 'express';
import cors from 'cors';
const app = express();

const port = 3000; // default port to listen


app.use(cors());

app.get("/", function (req, res) {
  res.send("<h1>Servidor rodando com ExpressJS</h1>");
});

app.get("/sum", function (req, res) {
  //print number 1 to 100
  function count() {
    for (let i = 1; i <= 100; i++) {     
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("Visual Nuts");
        } else if (i % 3 == 0) {
            console.log("Visual");
        } else if (i % 5 == 0) {
            console.log("Nuts");
        } else {
            console.log(i);
        }
    }
  }    
    //call function
    count();
    res.send("<h1>Teste</h1>");
});

//safebugs print number 1 to 100
app.get("/makingSmallFeatures", function (req, res) {
    //print number 1 to 100
    var multipliers = [        
        [3, "Visual"],
        [5, "Nuts"]
      ]
      
      for (let i = 1; i <= 500; i++) {
        let output = "";
      
        multipliers.forEach(function(item : any) {
           if (i % item[0] === 0) {
             output += item[1];
           }
        }); 
      
        console.log(output || i);
      }
    res.send("<h1>Teste</h1>");
});
      
app.use("/coutries", function (req, res) {
    const countries = [
        { name: "US", languages: ["English"] },
        { name: "Germany", languages: ["German"] },
        { name: "Belgium", languages: ["Dutch", "French", "German"] },
        { name: "Brazil", languages: ["Portuguese"] },
        { name: "France", languages: ["French"] },
        { name: "Spain", languages: ["Spanish"] },
        { name: "Italy", languages: ["Italian"] },
        { name: "Portugal", languages: ["Portuguese"] },
        { name: "Poland", languages: ["Polish"] },
        { name: "Romania", languages: ["Romanian"] },
        { name: "Netherlands", languages: ["Dutch"] },
        { name: "Greece", languages: ["Greek"] },
        { name: "Ireland", languages: ["English"] },
        { name: "Sweden", languages: ["Swedish"] },
        { name: "Hungary", languages: ["Hungarian"] },
        { name: "Austria", languages: ["German"] },
        { name: "Serbia", languages: ["Serbian"] },
        { name: "Slovakia", languages: ["Slovak"] },
        { name: "Bulgaria", languages: ["Bulgarian"] },
        { name: "Croatia", languages: ["Croatian"] },
        { name: "Denmark", languages: ["Danish"] },
        { name: "Finland", languages: ["Finnish"] },
        { name: "Slovenia", languages: ["Slovenian"] },
        { name: "Estonia", languages: ["Estonian"] },
        { name: "Lithuania", languages: ["Lithuanian"] },
        { name: "Czechia", languages: ["Czech"] },
        { name: "Luxembourg", languages: ["Luxembourgish", "French", "German"] },
        { name: "Slovenia", languages: ["Slovenian"] },
        { name: "Latvia", languages: ["Latvian"] },
        { name: "Malta", languages: ["Maltese"] },
        { name: "Cyprus", languages: ["Greek", "Turkish"] },
        { name: "Albania", languages: ["Albanian"] },
        { name: "North Macedonia", languages: ["Macedonian"] },
        { name: "Bosnia and Herzegovina", languages: ["Bosnian", "Croatian", "Serbian"] },
        { name: "Kosovo", languages: ["Albanian", "Serbian"] },
        { name: "Montenegro", languages: ["Montenegrin", "Serbian"] },
        { name: "Andorra", languages: ["Catalan"] },
        { name: "Monaco", languages: ["French"] },
        { name: "San Marino", languages: ["Italian"] },
        { name: "Vatican City", languages: ["Italian", "Latin"] },
        { name: "Liechtenstein", languages: ["German"] },
        { name: "Gibraltar", languages: ["English"] },      
      
    ]; 
    
   // returns the number of countries in the world

    function countCountries() {
        return countries.length;
    }

    // returns the number of countries that speak German

    function countGermanSpeakingCountries() {
        let count = 0;
        for (let i = 0; i < countries.length; i++) {
            if (countries[i].languages.includes("English")) {
                count++;
            }
        }
        return count;
    }

    console.log("Number of countries in the world: " + countCountries());
    const result = countries.filter((country) => country.languages.includes("German"));
    console.log(result);
    res.send(result);

   function countHighestNumberOfLanguages() {
        let max = 0;
        for (let i = 0; i < countries.length; i++) {
            if (countries[i].languages.length > max) {
                max = countries[i].languages.length;
            }
        }
        return max;
    }

    console.log("Country with the highest number of official languages: " + countHighestNumberOfLanguages());

    function mostCommonLanguage() {
        let languages : any = [{}];
        for (let i = 0; i < countries.length; i++) {
            for (let j = 0; j < countries[i].languages.length; j++) {
                languages.push(countries[i].languages[j]);
            }
        }
        let languageCount : any = [{}];
        for (let i = 0; i < languages.length; i++) {
            if (languageCount[languages[i]] === undefined) {
                languageCount[languages[i]] = 1;
            } else {
                languageCount[languages[i]]++;
            }
        }
        let max = 0;
        let maxLanguage = "";
        for (let language in languageCount) {
            if (languageCount[language] > max) {
                max = languageCount[language];
                maxLanguage = language;
            }
        }
        return maxLanguage;
    }

    console.log("Most common language: " + mostCommonLanguage());

     /*  for (let i = 0; i < countries.length; i++) {
        console.log(countries[i].name);
        for (let j = 0; j < countries[i].languages.length; j++) {
            console.log(countries[i].languages[j]);
        }
    }
 */
      
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});