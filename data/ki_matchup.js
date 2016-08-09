// This file exists because I want to avoid paying for a NO-SQL instance for
// a relatively small set of data
(function() {
    var AGANOS = "Aganos",
        ARBITER = "Arbiter",
        ARIA = "Aria",
        CINDER = "Cinder",
        FULGORE = "Fulgore",
        GARGOS = "Gargos",
        GLACIUS = "Glacius",
        HISAKO = "Hisako",
        JAGO = "Jago",
        KANRA = "Kan-Ra",
        KIMWU = "Kim Wu",
        MAYA = "Maya",
        MIRA = "Mira",
        OMEN = "Omen",
        ORCHID = "Orchid",
        RAAM = "Raam",
        RASH = "Rash",
        RIPTOR = "Riptor",
        SABREWULF = "Sabrewulf",
        SADIRA = "Sadira",
        SHADOW_JAGO = "Shadow Jago",
        SPINAL = "Spinal",
        THUNDER = "Thunder",
        TJ_COMBO = "TJ Combo",
        TUSK = "Tusk";

    window.characters = {};

    characters[AGANOS] = {
        matchups: [
            { name: ARBITER,     score: 4.5 },
            { name: ARIA,        score: 4.5 },
            { name: CINDER,      score: 5.5 },
            { name: FULGORE,     score: 4 },
            { name: GARGOS,      score: 5.5 },
            { name: GLACIUS,     score: 6 },
            { name: HISAKO,      score: 4 },
            { name: JAGO,        score: 5.5 },
            { name: KANRA,       score: 5 },
            { name: KIMWU,       score: 7 },
            { name: MAYA,        score: 4 },
            { name: MIRA,        score: 5 },
            { name: OMEN,        score: 4.5 },
            { name: ORCHID,      score: 6 },
            { name: RAAM,        score: 6 },
            { name: RASH,        score: 5 },
            { name: RIPTOR,      score: 4 },
            { name: SABREWULF,   score: 6 },
            { name: SADIRA,      score: 5 },
            { name: SHADOW_JAGO, score: 4.5 },
            { name: SPINAL,      score: 5 },
            { name: THUNDER,     score: 4 },
            { name: TJ_COMBO,    score: 6 },
            { name: TUSK,        score: 5 }
        ],
        reference: "@Zerg_Killer"
    };

    characters[ARBITER] = {
        matchups: [
            { name: AGANOS,      score: 6 },
            { name: ARIA,        score: 5 },
            { name: CINDER,      score: 4 },
            { name: FULGORE,     score: 4.5 },
            { name: GARGOS,      score: 5 },
            { name: GLACIUS,     score: 5 },
            { name: HISAKO,      score: 6 },
            { name: JAGO,        score: 4 },
            { name: KANRA,       score: 6 },
            { name: KIMWU,       score: 5 },
            { name: MAYA,        score: 4 },
            { name: MIRA,        score: 5 },
            { name: OMEN,        score: 6 },
            { name: ORCHID,      score: 5 },
            { name: RAAM,        score: 5 },
            { name: RASH,        score: 4 },
            { name: RIPTOR,      score: 5 },
            { name: SABREWULF,   score: 5 },
            { name: SADIRA,      score: 4 },
            { name: SHADOW_JAGO, score: 4 },
            { name: SPINAL,      score: 4 },
            { name: THUNDER,     score: 5.5 },
            { name: TJ_COMBO,    score: 4.5 },
            { name: TUSK,        score: 5 }
        ],
        reference: "@F3Sleep"
    };

    characters[ARIA] = {
        matchups: [
            { name: AGANOS,      score: 5 },
            { name: ARBITER,     score: 3 },
            { name: CINDER,      score: 4 },
            { name: FULGORE,     score: 5 },
            { name: GARGOS,      score: 5 },
            { name: GLACIUS,     score: 5.5 },
            { name: HISAKO,      score: 6 },
            { name: JAGO,        score: 5 },
            { name: KANRA,       score: 6 },
            { name: KIMWU,       score: 6 },
            { name: MAYA,        score: 5 },
            { name: MIRA,        score: 6 },
            { name: OMEN,        score: 6 },
            { name: ORCHID,      score: 5.5 },
            { name: RAAM,        score: 6 },
            { name: RASH,        score: 6 },
            { name: RIPTOR,      score: 5 },
            { name: SABREWULF,   score: 6 },
            { name: SADIRA,      score: 4.5 },
            { name: SHADOW_JAGO, score: 5 },
            { name: SPINAL,      score: 5 },
            { name: THUNDER,     score: 6 },
            { name: TJ_COMBO,    score: 6 },
            { name: TUSK,        score: 6 }
        ],
        reference: "@SeaDragonKI",
    };

    characters[CINDER] = {
        matchups: [
            { name: AGANOS,      score: 6 },
            { name: ARBITER,     score: 6 },
            { name: ARIA,        score: 5 },
            { name: FULGORE,     score: 5 },
            { name: GARGOS,      score: 4 },
            { name: GLACIUS,     score: 5 },
            { name: HISAKO,      score: 5 },
            { name: JAGO,        score: 4 },
            { name: KANRA,       score: 6 },
            { name: KIMWU,       score: 6 },
            { name: MAYA,        score: 5 },
            { name: MIRA,        score: 6 },
            { name: OMEN,        score: 5 },
            { name: ORCHID,      score: 5 },
            { name: RAAM,        score: 5 },
            { name: RASH,        score: 5 },
            { name: RIPTOR,      score: 5 },
            { name: SABREWULF,   score: 4 },
            { name: SADIRA,      score: 6 },
            { name: SHADOW_JAGO, score: 5 },
            { name: SPINAL,      score: 5 },
            { name: THUNDER,     score: 5 },
            { name: TJ_COMBO,    score: 5.5 },
            { name: TUSK,        score: 5 }
        ],
        reference: "@swordsman09",
    };

    characters[FULGORE] = {
        matchups: [
            { name: AGANOS,      score: 6 },
            { name: ARBITER,     score: 5.5 },
            { name: ARIA,        score: 5 },
            { name: CINDER,      score: 6 },
            { name: GARGOS,      score: 6 },
            { name: GLACIUS,     score: 6 },
            { name: HISAKO,      score: 5 },
            { name: JAGO,        score: 5 },
            { name: KANRA,       score: 6 },
            { name: KIMWU,       score: 5.5 },
            { name: MAYA,        score: 5 },
            { name: MIRA,        score: 5 },
            { name: OMEN,        score: 5 },
            { name: ORCHID,      score: 5.5 },
            { name: RAAM,        score: 6 },
            { name: RASH,        score: 5.5 },
            { name: RIPTOR,      score: 6 },
            { name: SABREWULF,   score: 6 },
            { name: SADIRA,      score: 6 },
            { name: SHADOW_JAGO, score: 6 },
            { name: SPINAL,      score: 5.5 },
            { name: THUNDER,     score: 5.5 },
            { name: TJ_COMBO,    score: 6 },
            { name: TUSK,        score: 5.5 }
        ],
        reference: "@CircaNicky",
    };

    characters[GLACIUS] = {
        matchups: [
            { name: AGANOS,      score: 6 },
            { name: ARBITER,     score: 5 },
            { name: ARIA,        score: 4 },
            { name: CINDER,      score: 6 },
            { name: FULGORE,     score: 4 },
            { name: GARGOS,      score: 5.5 },
            { name: HISAKO,      score: 4 },
            { name: JAGO,        score: 5 },
            { name: KANRA,       score: 5 },
            { name: KIMWU,       score: 6 },
            { name: MAYA,        score: 5.5 },
            { name: MIRA,        score: 5 },
            { name: OMEN,        score: 4 },
            { name: ORCHID,      score: 6 },
            { name: RAAM,        score: 7 },
            { name: RASH,        score: 4 },
            { name: RIPTOR,      score: 5 },
            { name: SABREWULF,   score: 5.5 },
            { name: SADIRA,      score: 5 },
            { name: SHADOW_JAGO, score: 4 },
            { name: SPINAL,      score: 5 },
            { name: THUNDER,     score: 5.5 },
            { name: TJ_COMBO,    score: 6 },
            { name: TUSK,        score: 6 }
        ],
        reference: "@TheWaterhorses",
    };

    characters[GARGOS] = {
        matchups: [
            { name: AGANOS,      score: 4.5 },
            { name: ARBITER,     score: 4.5 },
            { name: ARIA,        score: 4 },
            { name: CINDER,      score: 5 },
            { name: FULGORE,     score: 4 },
            { name: GLACIUS,     score: 5 },
            { name: HISAKO,      score: 4 },
            { name: JAGO,        score: 5 },
            { name: KANRA,       score: 5 },
            { name: KIMWU,       score: 5 },
            { name: MAYA,        score: 5 },
            { name: MIRA,        score: 5 },
            { name: OMEN,        score: 5 },
            { name: ORCHID,      score: 5 },
            { name: RAAM,        score: 6 },
            { name: RASH,        score: 4.5 },
            { name: RIPTOR,      score: 5 },
            { name: SABREWULF,   score: 5.5 },
            { name: SADIRA,      score: 6 },
            { name: SHADOW_JAGO, score: 4.5 },
            { name: SPINAL,      score: 4.5 },
            { name: THUNDER,     score: 5 },
            { name: TJ_COMBO,    score: 6 },
            { name: TUSK,        score: 4 }
        ],
        reference: "@llRicoSuavell",
    };
        
    characters[HISAKO] = {
        matchups: [
            { name: AGANOS,      score: 6 },
            { name: ARBITER,     score: 6 },
            { name: ARIA,        score: 3 },
            { name: CINDER,      score: 5 },
            { name: FULGORE,     score: 4 },
            { name: GARGOS,      score: 5 },
            { name: GLACIUS,     score: 6 },
            { name: JAGO,        score: 4.5 },
            { name: KANRA,       score: 6 },
            { name: KIMWU,       score: 6 },
            { name: MAYA,        score: 5 },
            { name: MIRA,        score: 6 },
            { name: OMEN,        score: 5 },
            { name: ORCHID,      score: 5 },
            { name: RAAM,        score: 5 },
            { name: RASH,        score: 5 },
            { name: RIPTOR,      score: 4 },
            { name: SABREWULF,   score: 5 },
            { name: SADIRA,      score: 4 },
            { name: SHADOW_JAGO, score: 5 },
            { name: SPINAL,      score: 5 },
            { name: THUNDER,     score: 4 },
            { name: TJ_COMBO,    score: 6 },
            { name: TUSK,        score: 5 }
        ],
        reference: "@yofrankthehuman",
    };

    characters[JAGO] = {
        matchups: [
            { name: AGANOS,      score: 5 },
            { name: ARBITER,     score: 5 },
            { name: ARIA,        score: 4.5 },
            { name: CINDER,      score: 5 },
            { name: GARGOS,      score: 4.5 },
            { name: GLACIUS,     score: 5 },
            { name: FULGORE,     score: 4.5 },
            { name: HISAKO,      score: 5 },
            { name: KANRA,       score: 5 },
            { name: KIMWU,       score: 5 },
            { name: MAYA,        score: 5 },
            { name: MIRA,        score: 5 },
            { name: OMEN,        score: 4.5 },
            { name: ORCHID,      score: 5 },
            { name: RAAM,        score: 5 },
            { name: RASH,        score: 5 },
            { name: RIPTOR,      score: 5.5 },
            { name: SABREWULF,   score: 5 },
            { name: SADIRA,      score: 5 },
            { name: SHADOW_JAGO, score: 5 },
            { name: SPINAL,      score: 5 },
            { name: THUNDER,     score: 5 },
            { name: TJ_COMBO,    score: 5 },
            { name: TUSK,        score: 5 }
        ],
        reference: "@Thompxsonn",
    };

    characters[KANRA] = {
        matchups: [
            { name: AGANOS,      score: 4 },
            { name: ARBITER,     score: 5 },
            { name: ARIA,        score: 4 },
            { name: CINDER,      score: 5 },
            { name: GARGOS,      score: 1 },
            { name: GLACIUS,     score: 7 },
            { name: FULGORE,     score: 2 },
            { name: HISAKO,      score: 5 },
            { name: JAGO,        score: 4 },
            { name: KIMWU,       score: 7 },
            { name: MAYA,        score: 3 },
            { name: MIRA,        score: 5 },
            { name: OMEN,        score: 6 },
            { name: ORCHID,      score: 7 },
            { name: RAAM,        score: 8 },
            { name: RASH,        score: 3 },
            { name: RIPTOR,      score: 7 },
            { name: SABREWULF,   score: 8 },
            { name: SADIRA,      score: 6 },
            { name: SHADOW_JAGO, score: 5 },
            { name: SPINAL,      score: 5 },
            { name: THUNDER,     score: 5 },
            { name: TJ_COMBO,    score: 6 },
            { name: TUSK,        score: 7 }
        ],
        reference: "@Fubuki142",
    };

    characters[KIMWU] = {
        matchups: [
            { name: AGANOS,      score: 2 },
            { name: ARBITER,     score: 5 },
            { name: ARIA,        score: 4 },
            { name: CINDER,      score: 5 },
            { name: GARGOS,      score: 5 },
            { name: GLACIUS,     score: 3 },
            { name: FULGORE,     score: 3 },
            { name: HISAKO,      score: 4 },
            { name: JAGO,        score: 4 },
            { name: KANRA,       score: 6 },
            { name: MAYA,        score: 4 },
            { name: MIRA,        score: 5 },
            { name: OMEN,        score: 6 },
            { name: ORCHID,      score: 4 },
            { name: RAAM,        score: 5 },
            { name: RASH,        score: 4 },
            { name: RIPTOR,      score: 4 },
            { name: SABREWULF,   score: 4 },
            { name: SADIRA,      score: 5 },
            { name: SHADOW_JAGO, score: 5 },
            { name: SPINAL,      score: 6 },
            { name: THUNDER,     score: 4 },
            { name: TJ_COMBO,    score: 6 },
            { name: TUSK,        score: 4 }
        ],
        reference: "@CrazyLCD",
    };  

    characters[MAYA] = {
        matchups: [
            { name: AGANOS,      score: 6 },
            { name: ARBITER,     score: 5 },
            { name: ARIA,        score: 5 },
            { name: CINDER,      score: 5 },
            { name: GARGOS,      score: 4 },
            { name: GLACIUS,     score: 5 },
            { name: FULGORE,     score: 5 },
            { name: HISAKO,      score: 5 },
            { name: JAGO,        score: 5 },
            { name: KANRA,       score: 5 },
            { name: KIMWU,       score: 5 },
            { name: MIRA,        score: 5 },
            { name: OMEN,        score: 5 },
            { name: ORCHID,      score: 5 },
            { name: RAAM,        score: 5 },
            { name: RASH,        score: 5 },
            { name: RIPTOR,      score: 5 },
            { name: SABREWULF,   score: 5 },
            { name: SADIRA,      score: 5 },
            { name: SHADOW_JAGO, score: 5 },
            { name: SPINAL,      score: 5 },
            { name: THUNDER,     score: 5 },
            { name: TJ_COMBO,    score: 5 },
            { name: TUSK,        score: 5 }
        ],
        reference: "@c88pinkdiamond",
    };  

    characters[MIRA] = {
        matchups: [
            { name: AGANOS,      score: 6 },
            { name: ARBITER,     score: 4 },
            { name: ARIA,        score: 5 },
            { name: CINDER,      score: 4 },
            { name: GARGOS,      score: 6 },
            { name: GLACIUS,     score: 6 },
            { name: FULGORE,     score: 4.5 },
            { name: HISAKO,      score: 5 },
            { name: JAGO,        score: 4.5 },
            { name: KANRA,       score: 6 },
            { name: KIMWU,       score: 6 },
            { name: MAYA,        score: 4 },
            { name: OMEN,        score: 5 },
            { name: ORCHID,      score: 5 },
            { name: RAAM,        score: 6 },
            { name: RASH,        score: 4 },
            { name: RIPTOR,      score: 6 },
            { name: SABREWULF,   score: 6 },
            { name: SADIRA,      score: 4 },
            { name: SHADOW_JAGO, score: 5 },
            { name: SPINAL,      score: 6 },
            { name: THUNDER,     score: 6 },
            { name: TJ_COMBO,    score: 6 },
            { name: TUSK,        score: 4 }
        ],
        reference: "@TheAmenty",
    };    
        
    
    characters[OMEN] = {
        matchups: [
            { name: AGANOS,      score: 5 },
            { name: ARBITER,     score: 4 },
            { name: ARIA,        score: 5 },
            { name: CINDER,      score: 5 },
            { name: GARGOS,      score: 5 },
            { name: GLACIUS,     score: 5 },
            { name: FULGORE,     score: 5 },
            { name: HISAKO,      score: 5 },
            { name: JAGO,        score: 6 },
            { name: KANRA,       score: 6 },
            { name: KIMWU,       score: 6 },
            { name: MAYA,        score: 6 },
            { name: MIRA,        score: 6 },
            { name: ORCHID,      score: 6 },
            { name: RAAM,        score: 6 },
            { name: RASH,        score: 6 },
            { name: RIPTOR,      score: 5 },
            { name: SABREWULF,   score: 6 },
            { name: SADIRA,      score: 7 },
            { name: SHADOW_JAGO, score: 5 },
            { name: SPINAL,      score: 7 },
            { name: THUNDER,     score: 5 },
            { name: TJ_COMBO,    score: 6 },
            { name: TUSK,        score: 5 }
        ],
        reference: "@Skate_KI",
    };    
        
    characters[ORCHID] = {
        matchups: [
            { name: AGANOS,      score: 4 },
            { name: ARBITER,     score: 4 },
            { name: ARIA,        score: 3 },
            { name: CINDER,      score: 5 },
            { name: GARGOS,      score: 4 },
            { name: GLACIUS,     score: 3 },
            { name: FULGORE,     score: 3 },
            { name: HISAKO,      score: 5 },
            { name: JAGO,        score: 4 },
            { name: KANRA,       score: 3 },
            { name: KIMWU,       score: 5 },
            { name: MAYA,        score: 5 },
            { name: MIRA,        score: 5.5 },
            { name: OMEN,        score: 3 },
            { name: RAAM,        score: 5 },
            { name: RASH,        score: 5 },
            { name: RIPTOR,      score: 5 },
            { name: SABREWULF,   score: 4 },
            { name: SADIRA,      score: 4 },
            { name: SHADOW_JAGO, score: 6 },
            { name: SPINAL,      score: 4 },
            { name: THUNDER,     score: 5 },
            { name: TJ_COMBO,    score: 7 },
            { name: TUSK,        score: 5 }
        ],
        reference: "@GnarlyFeats",
    };    

    characters[RAAM] = {
        matchups: [
            { name: AGANOS,      score: 4 },
            { name: ARBITER,     score: 5 },
            { name: ARIA,        score: 4 },
            { name: CINDER,      score: 4.5 },
            { name: GARGOS,      score: 4 },
            { name: GLACIUS,     score: 4 },
            { name: FULGORE,     score: 5 },
            { name: HISAKO,      score: 6 },
            { name: JAGO,        score: 5 },
            { name: KANRA,       score: 4 },
            { name: KIMWU,       score: 4 },
            { name: MAYA,        score: 5 },
            { name: MIRA,        score: 5 },
            { name: OMEN,        score: 5 },
            { name: ORCHID,      score: 6 },
            { name: RASH,        score: 6 },
            { name: RIPTOR,      score: 5 },
            { name: SABREWULF,   score: 5.5 },
            { name: SADIRA,      score: 6 },
            { name: SHADOW_JAGO, score: 5 },
            { name: SPINAL,      score: 6 },
            { name: THUNDER,     score: 5 },
            { name: TJ_COMBO,    score: 6 },
            { name: TUSK,        score: 4 }
        ],
        reference: "@LetalisVenator",
    };

    characters[RASH] = {
        matchups: [
            { name: AGANOS,      score: 6 },
            { name: ARBITER,     score: 5 },
            { name: ARIA,        score: 5 },
            { name: CINDER,      score: 5 },
            { name: GARGOS,      score: 5 },
            { name: GLACIUS,     score: 5 },
            { name: FULGORE,     score: 5 },
            { name: HISAKO,      score: 5 },
            { name: JAGO,        score: 5 },
            { name: KANRA,       score: 6 },
            { name: KIMWU,       score: 6 },
            { name: MAYA,        score: 5 },
            { name: MIRA,        score: 5 },
            { name: OMEN,        score: 5 },
            { name: ORCHID,      score: 6 },
            { name: RAAM,        score: 5 },
            { name: RIPTOR,      score: 5 },
            { name: SABREWULF,   score: 5 },
            { name: SADIRA,      score: 6 },
            { name: SHADOW_JAGO, score: 5 },
            { name: SPINAL,      score: 5 },
            { name: THUNDER,     score: 5 },
            { name: TJ_COMBO,    score: 6 },
            { name: TUSK,        score: 5 }
        ],
        reference: "@menzokombat",
    };

     characters[RIPTOR] = {
        matchups: [
            { name: AGANOS,      score: 5 },
            { name: ARBITER,     score: 5 },
            { name: ARIA,        score: 4 },
            { name: CINDER,      score: 4.5 },
            { name: GARGOS,      score: 5 },
            { name: GLACIUS,     score: 5 },
            { name: FULGORE,     score: 4 },
            { name: HISAKO,      score: 5.5 },
            { name: JAGO,        score: 4.5 },
            { name: KANRA,       score: 6 },
            { name: KIMWU,       score: 6 },
            { name: MAYA,        score: 4 },
            { name: MIRA,        score: 4 },
            { name: OMEN,        score: 5 },
            { name: ORCHID,      score: 5 },
            { name: RAAM,        score: 6 },
            { name: RASH,        score: 5 },
            { name: SABREWULF,   score: 4.5 },
            { name: SADIRA,      score: 5.5 },
            { name: SHADOW_JAGO, score: 5 },
            { name: SPINAL,      score: 5.5 },
            { name: THUNDER,     score: 4 },
            { name: TJ_COMBO,    score: 5 },
            { name: TUSK,        score: 6 }
        ],
        reference: "@Fiyah_Liger",
    };

    characters[SADIRA] = {
        matchups: [
            { name: AGANOS,      score: 5 },
            { name: ARBITER,     score: 5 },
            { name: ARIA,        score: 5 },
            { name: CINDER,      score: 4 },
            { name: GARGOS,      score: 4 },
            { name: GLACIUS,     score: 6 },
            { name: FULGORE,     score: 4 },
            { name: HISAKO,      score: 6 },
            { name: JAGO,        score: 4 },
            { name: KANRA,       score: 5 },
            { name: KIMWU,       score: 5 },
            { name: MAYA,        score: 4 },
            { name: MIRA,        score: 5 },
            { name: OMEN,        score: 4 },
            { name: ORCHID,      score: 5 },
            { name: RAAM,        score: 5 },
            { name: RASH,        score: 4 },
            { name: SABREWULF,   score: 5 },
            { name: RIPTOR,      score: 5 },
            { name: SHADOW_JAGO, score: 5 },
            { name: SPINAL,      score: 5 },
            { name: THUNDER,     score: 4 },
            { name: TJ_COMBO,    score: 5 },
            { name: TUSK,        score: 3 }
        ],
        reference: "@mutinygrief",
    };

    characters[SABREWULF] = {
        matchups: [
            { name: AGANOS,      score: 6 },
            { name: ARBITER,     score: 5 },
            { name: ARIA,        score: 4 },
            { name: CINDER,      score: 6 },
            { name: GARGOS,      score: 3 },
            { name: GLACIUS,     score: 3 },
            { name: FULGORE,     score: 4 },
            { name: HISAKO,      score: 5 },
            { name: JAGO,        score: 4 },
            { name: KANRA,       score: 4 },
            { name: KIMWU,       score: 5 },
            { name: MAYA,        score: 5 },
            { name: MIRA,        score: 4 },
            { name: OMEN,        score: 4 },
            { name: ORCHID,      score: 4 },
            { name: RAAM,        score: 6 },
            { name: RASH,        score: 5 },
            { name: RIPTOR,      score: 5 },
            { name: SADIRA,      score: 6 },
            { name: SHADOW_JAGO, score: 4 },
            { name: SPINAL,      score: 5 },
            { name: THUNDER,     score: 4 },
            { name: TJ_COMBO,    score: 6 },
            { name: TUSK,        score: 5 }
        ],
        reference: "@xCupcakeNS",
    };

    characters[SHADOW_JAGO] = {
        matchups: [
            { name: AGANOS,      score: 5 },
            { name: ARBITER,     score: 5 },
            { name: ARIA,        score: 5 },
            { name: CINDER,      score: 5 },
            { name: GARGOS,      score: 5 },
            { name: GLACIUS,     score: 5 },
            { name: FULGORE,     score: 5 },
            { name: HISAKO,      score: 5 },
            { name: JAGO,        score: 5 },
            { name: KANRA,       score: 5 },
            { name: KIMWU,       score: 5 },
            { name: MAYA,        score: 5 },
            { name: MIRA,        score: 5 },
            { name: OMEN,        score: 5 },
            { name: ORCHID,      score: 5 },
            { name: RAAM,        score: 5 },
            { name: RASH,        score: 5 },
            { name: RIPTOR,      score: 5 },
            { name: SABREWULF,   score: 5 },
            { name: SADIRA,      score: 5 },
            { name: SPINAL,      score: 5 },
            { name: THUNDER,     score: 5 },
            { name: TJ_COMBO,    score: 5 },
            { name: TUSK,        score: 5 }
        ],
        reference: "@YiffyShonryu",
    };  

    characters[SPINAL] = {
        matchups: [
            { name: AGANOS,      score: 5 },
            { name: ARBITER,     score: 5 },
            { name: ARIA,        score: 4 },
            { name: CINDER,      score: 5 },
            { name: GARGOS,      score: 4 },
            { name: GLACIUS,     score: 5 },
            { name: FULGORE,     score: 4 },
            { name: HISAKO,      score: 4 },
            { name: JAGO,        score: 5 },
            { name: KANRA,       score: 6 },
            { name: KIMWU,       score: 4 },
            { name: MAYA,        score: 5 },
            { name: MIRA,        score: 4 },
            { name: OMEN,        score: 4 },
            { name: ORCHID,      score: 4 },
            { name: RAAM,        score: 4 },
            { name: RASH,        score: 5 },
            { name: RIPTOR,      score: 4 },
            { name: SABREWULF,   score: 4 },
            { name: SADIRA,      score: 4 },
            { name: SHADOW_JAGO, score: 5 },
            { name: THUNDER,     score: 4 },
            { name: TJ_COMBO,    score: 6 },
            { name: TUSK,        score: 5 }
        ],
        reference: "@XiBassiX",
    }; 

    characters[THUNDER] = {
        matchups: [
            { name: AGANOS,      score: 5 },
            { name: ARBITER,     score: 5 },
            { name: ARIA,        score: 4 },
            { name: CINDER,      score: 5 },
            { name: GARGOS,      score: 4 },
            { name: GLACIUS,     score: 5 },
            { name: FULGORE,     score: 4 },
            { name: HISAKO,      score: 5 },
            { name: JAGO,        score: 5 },
            { name: KANRA,       score: 5 },
            { name: KIMWU,       score: 6 },
            { name: MAYA,        score: 6 },
            { name: MIRA,        score: 5 },
            { name: OMEN,        score: 4 },
            { name: ORCHID,      score: 5 },
            { name: RAAM,        score: 5 },
            { name: RASH,        score: 5 },
            { name: RIPTOR,      score: 6 },
            { name: SABREWULF,   score: 5 },
            { name: SADIRA,      score: 5 },
            { name: SHADOW_JAGO, score: 4 },
            { name: SPINAL,      score: 6 },
            { name: TJ_COMBO,    score: 5 },
            { name: TUSK,        score: 5 }
        ],
        reference: "@_shintristan",
    };

    characters[TJ_COMBO] = {
        matchups: [
            { name: AGANOS,      score: 6 },
            { name: ARBITER,     score: 4 },
            { name: ARIA,        score: 4 },
            { name: CINDER,      score: 6 },
            { name: GARGOS,      score: 4 },
            { name: GLACIUS,     score: 4 },
            { name: FULGORE,     score: 3 },
            { name: HISAKO,      score: 3 },
            { name: JAGO,        score: 5 },
            { name: KANRA,       score: 6 },
            { name: KIMWU,       score: 5 },
            { name: MAYA,        score: 5 },
            { name: MIRA,        score: 5 },
            { name: OMEN,        score: 4 },
            { name: ORCHID,      score: 4 },
            { name: RAAM,        score: 5 },
            { name: RASH,        score: 5 },
            { name: RIPTOR,      score: 5 },            
            { name: SABREWULF,   score: 4 },
            { name: SADIRA,      score: 5 },
            { name: SHADOW_JAGO, score: 5 },
            { name: SPINAL,      score: 3 },
            { name: THUNDER,     score: 4 },
            { name: TUSK,        score: 5 }
        ],
        reference: "@DevilMayCare4",
    };      

    characters[TUSK] = {
        matchups: [
            { name: AGANOS,      score: 5 },
            { name: ARBITER,     score: 5 },
            { name: ARIA,        score: 4 },
            { name: CINDER,      score: 5 },
            { name: GARGOS,      score: 5 },
            { name: GLACIUS,     score: 4 },
            { name: FULGORE,     score: 5 },
            { name: HISAKO,      score: 5 },
            { name: JAGO,        score: 5 },
            { name: KANRA,       score: 4 },
            { name: KIMWU,       score: 6 },
            { name: MAYA,        score: 5 },
            { name: MIRA,        score: 5 },
            { name: OMEN,        score: 5 },
            { name: ORCHID,      score: 5 },
            { name: RAAM,        score: 5 },
            { name: RASH,        score: 5 },
            { name: SADIRA,      score: 6 },
            { name: RIPTOR,      score: 3 },
            { name: SABREWULF,   score: 5 },
            { name: SHADOW_JAGO, score: 5 },
            { name: SPINAL,      score: 5 },
            { name: THUNDER,     score: 5 },
            { name: TJ_COMBO,    score: 5 }
        ],
        reference: "@TheDaytonJ",
    }; 

// Hey man! Can you give me your MU chart for Character? Just provide number of winning, losing, and even match-ups. I'm building a community-based MU chart and reaching out to best character specialist for each char. I'm happy to keep your input anonymous if you'd like. Thanks!
})();