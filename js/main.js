// Everything in this file, because really there isn't much to this app,
// so I'm not going overboard with it.
(function() {

    console.log("Starting up...");

    var tierTemplate, infoTemplate, avg, stdDev,
        sTierChars = [], aTierChars = [], bTierChars = [], cTierChars = [], dTierChars = [], fTierChars =[],
        characters = window.characters,
        tierOutlet = document.getElementById("tier-outlet");

    // load templates,
    loadTemplate("tpl/tier.tpl").done(function(data) {
        console.log("Done loading tier template");
        tierTemplate = Handlebars.compile(data);
        loadTemplate("tpl/info.tpl").done(function() {
            console.log("Done loading info template");
            infoTemplate = Handlebars.compile(data);
            main();
        });
    });

    function main() {
        console.log("Executing main ...");
        calculateTiers();

        // console.log("average", avg);
        // console.log("std dev", stdDev);

        console.log("s", sTierChars, "a", aTierChars, "b", bTierChars, "c", cTierChars, "f", fTierChars);

        renderTier("S", sTierChars);
        renderTier("A", aTierChars);
        renderTier("B", bTierChars);
        renderTier("C", cTierChars);
        renderTier("D", dTierChars);
        renderTier("F", fTierChars);

        $(".char-image").on("click", function(e) {
            var name = $(e.target).data("name");
            renderInfo(name);
        });
    }

    function loadTemplate(templateName) {
        return $.get("tpl/tier.tpl");
    }

    // trust me, I'm sure this can be optimized, but it doesn't matter.
    // just trying to get this out the door at the moment.
    function calculateTiers() {
        var values = [];
        // iterate through characters
        for (var charName in characters) {
            var char = characters[charName],
                matchups = char.matchups,
                winning = 0,
                losing = 0,
                even = 0,
                calculatedScore = 0;

            // iterate through character's matchups
            for (var i in matchups) {
                var matchup = matchups[i];
                
                // ex. 10 - x < 5  == winning matchup
                //     10 - x == 5 == even matchup
                //     10 - x > 5  == losing
                var baseScore = 10 - matchup.score;
                //console.log(charName, baseScore);
                calculatedScore += matchup.score;
                if ((baseScore) < 5) {
                    winning++;
                }
                else if ((baseScore) > 5) {
                    losing++;
                }
                else if ((baseScore) == 5) {
                    even++;
                }
            }

            // console.log(charName, winning, losing, even, calculatedScore);
            char.winning = winning;
            char.losing = losing;
            char.even = even;
            char.name = charName;
            char.calculatedScore = calculatedScore;
            values.push(calculatedScore);
        }

        // sort by calculated score
        // convert to array for sortability
        var charArray = $.map(characters, function(value, index) {
            return [value];
        });

        charArray.sort(function(a, b) {
            return b.calculatedScore - a.calculatedScore;
        });


        avg = average(values);
        stdDev = standardDeviation(values);

        // now that we have an averagea and standard deviation we can
        // define the actual tiers... this might not be perfect, but for now
        // 2x stdDev = S Tier
        // 1-2x stdDev = A Tier
        // within 1 stdDev of average = B Tier (Average)
        // -1-2x stdDev = C Tier
        // -2x stdDev = F Tier
        charArray.map(function(char) {
            // set bounds for tiers to compare
            var sTier = (2 * stdDev) + avg,
                aTier = stdDev + avg,
                bTier = avg,
                cTier = avg - (stdDev),
                fTier = avg - (2 * stdDev);
            
            if (char.calculatedScore >= sTier) {
                sTierChars.push(char);
            }
            else if (char.calculatedScore < sTier && char.calculatedScore >= aTier) {
                aTierChars.push(char);
            }
            else if (char.calculatedScore < aTier && char.calculatedScore >= bTier) {
                bTierChars.push(char);
            }
            else if (char.calculatedScore < bTier && char.calculatedScore >= cTier) {
                cTierChars.push(char);
            }
            else if (char.calculatedScore < cTier && char.calculatedScore >= fTier) {
                dTierChars.push(char);
            }
            else if (char.calculatedScore <= fTier) {
                fTierChars.push(char);
            }
        });
        console.log(charArray);
    }

    function renderTier(name, tier) {
        $("#tier-outlet").append(
            tierTemplate({
                name: name,
                chars: tier
            })
        );
    }

    Handlebars.registerHelper("toLower", function(value) {
        console.log(value);
        return value.toLowerCase().replace(" ", "_");
    });

    Handlebars.registerHelper("tierColor", function(tierName) {
        switch (tierName) {
            case "S":
                return "ff7f7f";
            case "A":
                return "ffbf7f";
            case "B":
                return "ffff7f";
            case "C":
                return "7fff7f";
            case "D":
                return "7fbfff";
            case "F":
                return "7f7fff";
        }
    });

    function renderInfo(name) {
        console.log(characters[name]);
    }

    // source https://derickbailey.com/2014/09/21/calculating-standard-deviation-with-array-map-and-array-reduce-in-javascript/
    function standardDeviation(values){
      var avg = average(values);
      
      var squareDiffs = values.map(function(value){
        var diff = value - avg;
        var sqrDiff = diff * diff;
        return sqrDiff;
      });
      
      var avgSquareDiff = average(squareDiffs);

      var stdDev = Math.sqrt(avgSquareDiff);
      return stdDev;
    }

    // source https://derickbailey.com/2014/09/21/calculating-standard-deviation-with-array-map-and-array-reduce-in-javascript/
    function average(data){
      var sum = data.reduce(function(sum, value){
        return sum + value;
      }, 0);

      var avg = sum / data.length;
      return avg;
    }

})();