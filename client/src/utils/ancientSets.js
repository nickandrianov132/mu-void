import ancientSetTypes from './muItems/item_set_types.json';

export const ANCIENT_DATA = {
    1: { // Warrior Leather Set
        cat: "dk",
        name: "Warrior",
        levels: [
            { req: 2, text:  ["Increase Strength +240"] },
            { req: 3, text:  ["Increase Min. Dmg +30"] }
        ],
        full: [
            "Increase Strength +240",
            "Increase Min. Dmg +30",
            "Increase Max. Dmg +40",
            "Increase Damage +30",
            "Increase Skill Damage +30",
            "Increase Defence +120",
            "Critical Damage Rate +15%",
            "Excellent Damage Rate +15%",
            "Increase Critical Damage +60",
        ],
        img: ["warrior_armor", "warrior_helm", "warrior_gloves", "warrior_pants", "warrior_boots", "warrior_star", "warrior_ring"]
    },
    2: { // Anonymous Leather Set
        cat: "dk",
        name: "Anonymous",
        levels: [
            { req: 2, text:  ["Increase Defence +100"] },
            { req: 3, text:  [] }
        ],
        full: [
            "Increase Defence +100",
            "Increase Stamina +240",
            "Ignore Enemy`s Defence +6%",
            "Increase Defence Using Shield +30%",
        ],
        img: ["anonymous_helm", "anonymous_pants", "anonymous_boots", "anonymous_shield"]
    },
    3: { // Hyperion Bronz Set
        cat: "dk",
        name: "Hyperion",
        levels: [
            { req: 2, text:  ["Ignore Enemy`s Defence +3%"] },
            { req: 3, text:  [] }
        ],
        full: [
            "Ignore Enemy`s Defence +3%",
            "Excellent Damage Rate +10%",
            "Increase Excellent Damage +60",
            "Increase Life +250",
        ],
        img: ["hyperion_armor", "hyperion_pants", "hyperion_boots"]
    },
    4: { // Mist`s Bronze Set
        cat: "dk",
        name: "Mist",
        levels: [
            { req: 2, text:  ["Critical Damage Rate +15%"] },
            { req: 3, text:  ["Increase Skill Damage +50"] }
        ],
        full: [
            "Critical Damage Rate +15%",
            "Increase Skill Damage +50",
            "Double Damage Chance +10%",
            "Increase Stamina +250"
        ],
        img: ["mist_helm", "mist_gloves", "mist_pants"]
    },
    5: { // Eplete Scale Set
        cat: "dk",
        name: "Eplete",
        levels: [
            { req: 2, text:  ["Increase Skill Damage +40"] },
            { req: 3, text:  ["Increase Max. Damage +35"] },
            { req: 4, text:  ["Increase Min. Damage +30"] },
        ],
        full: [
            "Increase Skill Damage +40",
            "Increase Max. Damage +35",
            "Increase Min. Damage +30",
            "Increase Defence when using shield +20%",
            "Increase Stamina +200",
            "Critical Damage Rate +20%",
            "Excellent Damage Rate +12%",
        ],
        img: ["eplete_helm", "eplete_armor", "eplete_pants", "eplete_shield", "eplete_pendant"]
    },
    6: { // Berserker`s Set
        cat: "dk",
        name: "Berserker",
        levels: [
            { req: 2, text:  ["Increase Max. Damage +30"] },
            { req: 3, text:  ["Increase Max. Damage +40"] }
        ],
        full: [
            "Increase Max. Damage +30",
            "Increase Max. Damage +40",
            "Increase Max. Damage +50",
            "Increase Max. Damage +50",
            "Increase Max. Damage +50",
            "Increase Skill Damage +100",
        ], 
        img: ["berserker_helm", "berserker_armor", "berserker_pants", "berserker_boots", "berserker_gloves"]
    },
    7: { // Garuda Brass Set
        cat: "dk",
        name: "Garuda",
        levels: [
            { req: 2, text: ["Increase Max. Damage +40"] },
            { req: 3, text: ["Double Damage Chance +5%"] }
        ],
        full: [
            "Increase Max. Damage +40",
            "Double Damage Chance +7%",
            "Critical Damage Rate +10%",
            "Excellent Damage Rate +7%",
            "Increase Skill Damage +35",
            "Increase Wizardy Damage +15%",
        ],
        img: ["garuda_armor", "garuda_gloves", "garuda_pants", "garuda_boots", "garuda_pendant"]
    },
    8: { // Cloud`s Brass Set
        cat: "dk",
        name: "Cloud",
        levels: [
            { req: 2, text: ["Critical Damage Rate +30%"] },
            { req: 3, text: [] }
        ],
        full: [
            "Critical Damage Rate +30%",
            "Increase damage when using two handed weapons +25%",
            "Increase Critical Damage +60",
        ],
        img: ["cloud_helm", "cloud_pants"]
    },
    9: { // Kantata`s Plate Set
        cat: "dk",
        name: "Kantata",
        levels: [
            { req: 2, text: ["Increase Defence +150"] },
            { req: 3, text: ["Increase Damage +35"] }
        ],
        full: [
            "Increase Defence +150",
            "Increase Damage +35",
            "Increase Stamina +220",
            "Increase Max. Dmg +25",
            "Ignore Enemy`s Defence +7%",
            "Increase Critical Chance +15%",
            "Double Damage Chance +3%",
        ],
        img: ["kantata_armor", "kantata_gloves", "kantata_boots", "kantata_ring1", "kantata_ring2"]
    },
    10: { // Rave`s Plate Set
        cat: "dk",
        name: "Rave",
        levels: [
            { req: 2, text: ["Increase Skill Damage +50"] },
            { req: 3, text: [] }
        ],
        full: [
            "Increase Skill Damage +40",
            "Double Damage Chance +10%",
            "Increase damage when using two handed weapons +40%",
            "Ignore Enemy`s Defence +5%",
        ],
        img: ["rave_helm", "rave_armor", "rave_pants"]
    },
    11: { // Hyon`s Set
        cat: "dk",
        name: "Hyon",
        levels: [
            { req: 2, text: ["Increase Damage +50"] },
            { req: 3, text: ["Increse Skill Damage +40"] }
        ],
        full: [
            "Increase Damage +50",
            "Increse Skill Damage +40",
            "Double Damage Chance +10%",
            "Critical Damage Rate +15%",
            "Excellent Damage Rate +15%",
            "Increase Critical Damage +80",
            "Increase Excellent Damage  +80"
        ],
        img: ["hyon_helm", "hyon_boots", "hyon_gloves", "hyon_sword"]
    },
    12: { // Vicious`s Set
        cat: "dk",
        name: "Vicious",
        levels: [
            { req: 2, text: ["Increase Skill Damage +50"] },
            { req: 3, text: ["Critical Damage Rate +15%"] }
        ],
        full: [
            "Increase Skill Damage +50",
            "Critical Damage Rate +15%",
            "Double Damage Chance +10%",
            "Increase Min. Damage +40",
            "Increase Max. Damage +50",
            "Increase Critical Damage +80",
            "Ignore Enemy`s Defence +5%"
        ],
        img: ["vicious_armor", "vicious_helm", "vicious_pants", "vicious_ring"]
    },
    50: { // Mahe`s Set
        cat: "dk",
        name: "Mahes",
        levels: [
            { req: 2, text: [] },
            { req: 3, text: [] }
        ],
        full: [
            "Increase Excellent Damage  +100",
            "Excellent Damage Rate +10%",
            "Critical Damage Rate +15%",
        ],
        img: ["mahes_pants", "mahes_shield"]
    },
    57: { // Bragi`s Dark Phoenix Set
        cat: "dk",
        name: "Bragi`s",
        levels: [
            { req: 2, text:  ["Increase Skill Damage +140"] },
            { req: 3, text:  ["Increase Excellent Damage +160"] }
        ],
        full: [
            "Increase Skill Damage +140",
            "Increase Excellent Damage +160",
            "Critical Damage Rate +25%",
            "Excellent Damage Rate +25%",
            "Increase damage when using two handed weapons +70%",
            "Double Damage Rate +15%",
            "Ignore Enemy`s Defence +12%",
        ],
        img: ["bragi_armor", "bragi_pants", "bragi_helm", "bragi_boots", "bragi_sword"]
    },

    13: { // Apollo`s Set
        cat: "dw",
        name: "Apollo",
        levels: [
            { req: 2, text:  ["Increase Defence +200"] },
            { req: 3, text:  ["Increase Skill Damage +30"] }
        ],
        full: [
            "Increase Defence +200",
            "Increase Skill Damage +30",
            "Increase Max. Dmg +40",
            "Increase Min. Dmg +40",
            "Increase Excellent Damage +60",
            "Excellent Damage Rate +12%",
            "Critical Damage Rate +20%",
            "Increase Wizardy Damage +40%",
            "Increase Stamina +220",
        ],
        img: ["apollo_armor", "apollo_helm", "apollo_gloves", "apollo_pants", "apollo_staff", "apollo_pendant", "apollo_ring"]
    },
    14: { // Barnake`s Set
        cat: "dw",
        name: "Barnake",
        levels: [
            { req: 2, text:  ["Increase Wizardy Damage +10%"] },
            { req: 3, text:  ["Increase Energy +200"] }
        ],
        full: [
            "Increase Wizardy Damage +10%",
            "Increase Energy +200",
            "Increase Skill Damage +40",
            "Critical Damage Rate +10%",
        ],
        img: ["barnake_helm", "barnake_pants", "barnake_boots"]
    },
    15: { // Evis`s Set
        cat: "dw",
        name: "Evis",
        levels: [
            { req: 2, text:  ["Increase Skill Damage +35"] },
            { req: 3, text:  ["Increase Min. Damage +40"] }
        ],
        full: [
            "Increase Skill Damage +35",
            "Increase Min. Damage +40",
            "Critical Damage Rate +10%",
            "Double Damage Chance +5%",
            "Excellent Damage Rate +7%",
            "Increase Excellent Damage +40",
        ],
        img: ["evis_armor", "evis_pants", "evis_boots", "evis_pendant"]
    },
    16: { // Sylion`s Set
        cat: "dw",
        name: "Sylion",
        levels: [
            { req: 2, text:  ["Double Damage Chance +5%"] },
            { req: 3, text:  ["Critical Damage Rate +10%"] }
        ],
        full: [
            "Double Damage Chance +5%",
            "Critical Damage Rate +10%",
            "Excellent Damage Rate +5%",
            "Increase Max. Life +250",
            "Increase Stamina +250",
            "Increase Wizardy Damage +10%",
            "Increase Skill Damage +35",
        ],
        img: ["sylion_armor", "sylion_helm", "sylion_gloves", "sylion_boots"]
    },
    17: { // Heras`s Set
        cat: "dw",
        name: "Heras",
        levels: [
            { req: 2, text: ["Increase Skill Damage +40"] },
            { req: 3, text: ["Increase Wizardy Damage +15%"] }
        ],
        full: [
            "Increase Skill Damage +30",
            "Increase Wizardy Damage +15%",
            "Increase Defence when using shield +20%",
            "Increase Energy +250",
            "Increase Attack Rate +250",
            "Critical Damage Rate +10%",
            "Excellent Damage Rate +10%",
            "Increase Max. Life +250",
            "Increase Defence +80"
        ],
        img: ["hera_armor", "hera_helm", "hera_gloves", "hera_boots", "hera_pants", "hera_shield"]
    },
    18: { // Minet Set
        cat: "dw",
        name: "Minet",
        levels: [
            { req: 2, text: ["Increase Skill Damage +35"] },
            { req: 3, text: [] }
        ],
        full: [
            "Increase Skill Damage +35",
            "Increase Min. Dmg +50",
            "Excellent Damage Rate +12%",
            "Increase Excellent Damage +70",
        ],
        img: ["minet_armor", "minet_pants", "minet_boots"]
    },
    19: { // Anubis Set
        cat: "dw",
        name: "Anubis",
        levels: [
            { req: 2, text:  ["Increase Wizardy Damage +10%"] },
            { req: 3, text:  ["Double Damage Chance +10%"] }
        ],
        full: [
            "Increase Wizardy Damage +10%",
            "Double Damage Chance +10%",
            "Increase Skill Damage +50",
            "Critical Damage Rate +15%",
            "Excellent Damage Rate +15%",
            "Increase Critical Damage +100",
            "Increase Excellent Damage +100"
        ],
        img: ["anubis_armor", "anubis_helm", "anubis_gloves", "anubis_ring"]
    },
    20: { // Enis Set
        cat: "dw",
        name: "Enis",
        levels: [
            { req: 2, text: ["Increase Skill Damage +60"] },
            { req: 3, text: ["Double Damage Chance +10%"] }
        ],
        full: [
            "Increase Skill Damage +60",
            "Double Damage Chance +10%",
            "Critical Damage Rate +15%",
            "Increase Critical Damage +120",
            "Ignore Enemy`s Defence +5%",
            "Increase Wizardy Damage +15%"
        ],
        img: ["enis_armor", "enis_helm", "enis_pants", "enis_boots"]
    },
    51: { // Bes`s Eclipse Set
        cat: "dw",
        name: "Bes`s",
        levels: [
            { req: 2, text:  ["Excellent Damage Rate +15%"] },
            { req: 3, text:  [] }
        ],
        full: [
            "Excellent Damage Rate +15%",
            "Increase Wizardy Damage +20%",
            "Increase Skill Damage +120",

        ],
        img: ["bes_pants", "bes_staff"]
    },
    58: { // Alvis`s Grand Soul Set
        cat: "dw",
        name: "Alvis",
        levels: [
            { req: 2, text:  ["Double Damage Rate +3%"] },
            { req: 3, text:  ["Double Damage Rate +5%"] }
        ],
        full: [
            "Double Damage Rate +3%",
            "Double Damage Rate +5%",
            "Double Damage Rate +7%",
            "Ignore Enemy`s Defence +10%",
            "Critical Damage Rate +25%",
            "Excellent Damage Rate +25%",
            "Increase Wizardy Damage +25%",
        ],
        img: ["alvis_armor", "alvis_gloves", "alvis_boots", "alvis_staff"]
    },


    21: { // Ceto Vine Set
        cat: "elf",
        name: "Ceto",
        levels: [
            { req: 2, text:  ["Increase Damage +40"] },
            { req: 3, text:  ["Increase Max. Damage +30"] }
        ],
        full: [
            "Increase Damage +40",
            "Increase Max. Damage +40",
            "Ignore Enemy`s Defence +5%",
            "Excellent Damage Rate +7%",
            "Critical Damage Rate +10%",
            "Increase Excellent Damage +40",
            "Increase Stamina +250",
            "Increase Defence +60"
        ],
        img: ["ceto_helm", "ceto_gloves", "ceto_pants", "ceto_boots", "ceto_sword", "ceto_ring"]
    },
    22: { // Drake`s Vine Set
        cat: "elf",
        name: "Drake",
        levels: [
            { req: 2, text:  ["Increase Skill Damage +80"] },
            { req: 3, text:  ["Increase Damage +25"] }
        ],
        full: [
            "Increase Skill Damage +80",
            "Increase Damage +80",
            "Double Damage Chance +15%",
            "Increase Defence +200",
            "Critical Damage Rate +15%"
        ],
        img: ["drake_armor", "drake_helm", "drake_pants", "drake_boots"]
    },
    23: { // Gaia Silk Set
        cat: "elf",
        name: "Gaia",
        levels: [
            { req: 2, text:  ["Excellent Damage Rate +12%"] },
            { req: 3, text:  ["Increase Excellent Damage +100"] }
        ],
        full: [
            "Excellent Damage Rate +12%",
            "Increase Excellent Damage +100",
            "Increase Defence +100",
            "Double Damage Chance +5%",
            "Increase Min. Dmg +50",
            "Increase Max. Dmg +50",
            "Increase Excellent Damage +110"
        ],
        img: ["gaia_armor", "gaia_helm", "gaia_gloves", "gaia_pants", "gaia_crossbow"]
    },
    24: { // Fase Silk Set
        cat: "elf",
        name: "Fase",
        levels: [
            { req: 2, text:  ["Increase Skill Damage +70"] },
            { req: 3, text:  ["Increase Damage +60"] }
        ],
        full: [
            "Increase Skill Damage +60",
            "Increase Damage +50",
            "Double Damage Chance +7%",
        ],
        img: ["fase_gloves", "fase_pants", "fase_boots",]
    },
    25: { // Odin`s Set
        cat: "elf",
        name: "Odin`s",
        levels: [
            { req: 2, text:  ["Increase Damage +40"] },
            { req: 3, text:  ["Increase Max. Damage +30"] }
        ],
        full: [
            "Increase Damage +40",
            "Increase Max. Damage +40",
            "Ignore Enemy`s Defence +5%",
            "Excellent Damage Rate +7%",
            "Critical Damage Rate +10%",
            "Increase Excellent Damage +40",
            "Increase Stamina +250",
            "Increase Defence +60"
        ],
        img: ["odin_armor", "odin_helm", "odin_pants", "odin_gloves", "odin_boots",]
    },
    26: { // Elvian`s Wind Set
        cat: "elf",
        name: "Elvian",
        levels: [
            { req: 2, text:  [] },
            { req: 3, text:  [] }
        ],
        full: [
            "Critical Damage Rate +20%",
            "Excellent Damage Rate +7%",
        ],
        img: ["elvian_pants", "elvian_boots"]
    },
    27: { // Argo Spirit Set
        cat: "elf",
        name: "Argo`s",
        levels: [
            { req: 2, text: ["Increase Skill Damage +50"] },
            { req: 3, text: [] }
        ],
        full: [
            "Increase Max. Damage +50",
            "Critical Damage Rate +10%",
            "Excellent Damage Rate +10%",
            "Increase Excellent Damage +150"
        ],
        img: ["argo_armor", "argo_gloves", "argo_pants"]
    },
    28: { // Karis Spirit Set
        cat: "elf",
        name: "Karis`s",
        levels: [
            { req: 2, text: ["Increase Damage +40"] },
            { req: 3, text: [] }
        ],
        full: [
            "Increase Damage +40",
            "Critical Damage Rate +10%",
            "Excellent Damage Rate +10%",
            "Increase Critical Damage +150"
        ],
        img: ["karis_helm", "karis_pants", "karis_boots"]
    },
    29: { // Gywen`s Set
        cat: "elf",
        name: "Gywen",
        levels: [
            { req: 2, text:  ["Increase Skill Damage +50"] },
            { req: 3, text:  ["Increase Min. Dmg +40"] }
        ],
        full: [
            "Increase Skill Damage +50",
            "Increase Min. Dmg +40",
            "Increase Max. Dmg +50",
            "Increase Defence +120",
            "Critical Damage Rate +15%",
            "Excellent Damage Rate +20%",
            "Increase Critical Damage +150",
            "Increase Excellent Damage +150"
        ],
        img: ["gywen_armor", "gywen_gloves", "gywen_boots", "gywen_bow", "gywen_pendant",]
    },
    30: { // Aruan`s Set
        cat: "elf",
        name: "Aruan",
        levels: [
            { req: 2, text:  ["Increase Damage +100"] },
            { req: 3, text:  ["Double Damage Chance +10%"] }
        ],
        full: [
            "Increase Damage +100",
            "Double Damage Chance +10%",
            "Increase Skill Damage +100",
            "Critical Damage Rate +15%",
            "Excellent Damage Rate +15%",
            "Ignore Enemy`s Defence +5%",
        ],
        img: ["aruan_armor", "aruan_helm", "aruan_pants", "aruan_boots"]
    },
    52: { // Serket's Iris Set
        cat: "elf",
        name: "Serket",
        levels: [
            { req: 2, text:  [] },
            { req: 3, text:  [] }
        ],
        full: [
            "Excellent Damage Rate +10%",
            "Critical Damage Rate +15%",
            "Increase Excellent Damage +200",

        ],
        img: ["serket_helm", "serket_pants"]
    },
    59: { // Frigg`s Grand Soul Set
        cat: "elf",
        name: "Frigg",
        levels: [
            { req: 2, text:  ["Increase Skill Damage +200"] },
            { req: 3, text:  ["Increase Excellent Damage +250"] }
        ],
        full: [
            "Increase Skill Damage +200",
            "Increase Excellent Damage +250",
            "Increase Max. Damage +200",
            "Critical Damage Rate +25%",
            "Excellent Damage Rate +25%",
            "Double Damage Rate +15%",
            "Ignore Enemy`s Defence +10%",
        ],
        img: ["frigg_armor", "frigg_pants", "frigg_boots", "frigg_bow", "frigg_pendant"]
    },
    31: { // Gaion`s Set
        cat: "mg",
        name: "Gaion",
        levels: [
            { req: 2, text:  ["Ignore Enemy`s Defence +5%"] },
            { req: 3, text:  ["Double Damage Chance +10%"] }
        ],
        full: [
            "Ignore Enemy`s Defence +5%",
            "Double Damage Chance +10%",
            "Increase Skill Damage +50",
            "Excellent Damage Rate +15%",
            "Increase Excellent Damage +80",
            "Increase Wizardy Damage +15%",
            "Increase Max. Damage +40"
        ],
        img: ["gaion_armor", "gaion_pants", "gaion_boots", "gaion_pendant"]
    },
    32: { // Muren`s Set
        cat: "mg",
        name: "Muren",
        levels: [
            { req: 2, text:  ["Increase Skill Damage +60"] },
            { req: 3, text:  ["Double Damage Chance +10%"] }
        ],
        full: [
            "Increase Skill Damage +60",
            "Double Damage Chance +10%",
            "Increase Min. Damage +50",
            "Increase Max. Damage +60",
            "Critical Damage Rate +15%",
            "Excellent Damage Rate +15%",
            "Increase damage when using two handed weapons +40%",
        ],
        img: ["muren_armor", "muren_gloves", "muren_pants", "muren_ring"]
    },
    53: { // Apis`s Valiant Set
        cat: "mg",
        name: "Apis",
        levels: [
            { req: 2, text:  [] },
            { req: 3, text:  [] }
        ],
        full: [
            "Increase Excellent Damage +100",
            "Excellent Damage Rate +10%",
            "Critical Damage Rate +15%",

        ],
        img: ["apis_boots", "apis_pendant"]
    },
    60: { // Tyr`s Thunder Hawk Set
        cat: "mg",
        name: "Tyr`s",
        levels: [
            { req: 2, text:  ["Increase Skill Damage +120"] },
            { req: 3, text:  ["Increase damage when using two handed weapons +70%"] }
        ],
        full: [
            "Increase Skill Damage +120",
            "Increase damage when using two handed weapons +70%",
            "Increase Max. Damage +150",
            "Double Damage Rate +16%",
            "Ignore Enemy`s Defence +10%",
            "Critical Damage Rate +25%",
            "Excellent Damage Rate +25%",
        ],
        img: ["tyr_gloves", "tyr_pants", "tyr_boots", "tyr_sword", "tyr_pendant"]
    },
    33: { // Agnis`s Adamantine Set
        cat: "dl",
        name: "Agnis",
        levels: [
            { req: 2, text:  ["Increase Defence +200"] },
            { req: 3, text:  ["Double Damage Chance +10%"] }
        ],
        full: [
            "Increase Defence +200",
            "Double Damage Chance +10%",
            "Increase Skill Damage +50",
            "Critical Damage Rate +15%",
            "Excellent Damage Rate +15%",
            "Increase Critical Damage +80",
            "Increase Excellent Damage +80"
        ],
        img: ["agnis_armor", "agnis_helm", "agnis_pants", "agnis_ring"]
    },
    34: { // Broy`s Adamantine Set
        cat: "dl",
        name: "Broy`s",
        levels: [
            { req: 2, text:  ["Increase Damage +60"] },
            { req: 3, text:  ["Increase Skill Damage +50"] }
        ],
        full: [
            "Increase Damage +60",
            "Increase Skill Damage +50",
            "Increase Min. Damage +40",
            "Increase Max. Damage +50",
            "Critical Damage Rate +15%",
            "Excellent Damage Rate +15%",
            "Ignore Enemy`s Defence +5%",
        ],
        img: ["broy_gloves", "broy_pants", "broy_boots", "broy_pendant"]
    },
    54: { // Khon`s Dark Steel Set
        cat: "dl",
        name: "Khon`s",
        levels: [
            { req: 2, text:  [] },
            { req: 3, text:  [] }
        ],
        full: [
            "Increase Excellent Damage +100",
            "Excellent Damage Rate +10%",
            "Critical Damage Rate +15%",

        ],
        img: ["khon_gloves", "khon_boots"]
    },
    61: { // Surt`s Glorius  Set
        cat: "dl",
        name: "Surt`s",
        levels: [
            { req: 2, text:  ["Increase Defence when using shield +35%"] },
            { req: 3, text:  ["Increase Skill Damage +150"] }
        ],
        full: [
            "Increase Defence when using shield +35%",
            "Increase Skill Damage +150",
            "Ignore Enemy`s Defence +10%",
            "Increase Excelent Damage +150",
            "Critical Damage Rate +25%",
            "Excellent Damage Rate +25%",
            "Double Damage Rate +15%",
        ],
        img: ["surt_armor", "surt_helm", "surt_gloves", "surt_boots", "surt_scepter"]
    },
    35: { // Semeden`s Set
        cat: "sum",
        name: "Semeden",
        levels: [
            { req: 2, text:  ["Increase Wizardy Damage +15%"] },
            { req: 3, text:  ["Increase Skill Damage +60"] }
        ],
        full: [
            "Increase Wizardy Damage +15%",
            "Increase Skill Damage +60",
            "Increase Excellent Damage +120",
            "Critical Damage Rate +15%",
            "Excellent Damage Rate +15%",
            "Ignore Enemy`s Defence +5%",
        ],
        img: ["semeden_armor", "semeden_helm", "semeden_gloves", "semeden_boots"]
    },
    36: { // Chrono`s Set
        cat: "sum",
        name: "Chrono",
        levels: [
            { req: 2, text:  ["Increase Defence +200"] },
            { req: 3, text:  ["Double Damage Chance +15%"] }
        ],
        full: [
            "Increase Defence +200",
            "Double Damage Chance +15%",
            "Increase Skill Damage +60",
            "Excellent Damage Rate +15%",
            "Critical Damage Rate +15%",
            "Increase Critical Damage +80",
            "Increase Excellent Damage +80"
        ],
        img: ["chrono_helm", "chrono_gloves", "chrono_pants", "chrono_ring"]
    },
    55: { // Hapy`s Ancient Set
        cat: "sum",
        name: "Harpy`s",
        levels: [
            { req: 2, text:  [] },
            { req: 3, text:  [] }
        ],
        full: [
            "Increase Critical Damage +150",
            "Critical Damage Rate +15%",
            "Ignore Enemy`s Defence +11%",

        ],
        img: ["harpy_armor", "harpy_boots"]
    },
    62: { // Elune`s Demonic Set
        cat: "sum",
        name: "Elune`s",
        levels: [
            { req: 2, text:  ["Excellent Damage Rate +8%"] },
            { req: 3, text:  ["Excellent Damage Rate +9%"] }
        ],
        full: [
            "Excellent Damage Rate +8%",
            "Excellent Damage Rate +9%",
            "Excellent Damage Rate +16%",
            "Double Damage Rate +15%",
            "Increase Skill Damage +150",
            "Ignore Enemy`s Defence +10%",
            "Increase Wizardy Damage +25%",
        ],
        img: ["elune_armor", "elune_pants", "elune_gloves", "elune_stick", "elune_ring"]
    },

    37: { // Vega`s Set
        cat: "rf",
        name: "Vega`s",
        levels: [
            { req: 2, text: ["Increase Skill Damage +60"] },
            { req: 3, text: ["Increase Max. Dmamge +50"] }
        ],
        full: [
            "Increase Skill Damage +50",
            "Increase Max. Dmamge +50",
            "Increase Min. Dmamge +50",
            "Excellent Damage Rate +15%",
            "Increase Excellent Damage +80",
            "Double Damage Chance +7%",
            "Ignore Enemy`s Defence +5%"
        ]
    },
    38: { // Chamer`s Set
        cat: "rf",
        name: "Chamer`s",
        levels: [
            { req: 2, text: ["Increase Skill Damage +120"] },
            { req: 3, text: ["Double Damage Chance +12%"] }
        ],
        full: [
            "Increase Skill Damage +120",
            "Double Damage Chance +12%",
            "Increase Dmamge +100",
            "Critical Damage Rate +25%",
            "Excellent Damage Rate +25%",
            "Increase Critical Damage +120",
            "Increase Excellent Damage +120",
            "Ignore Enemy`s Defence +10%"
        ]
    },
    56: { // Horus Set
        cat: "rf",
        name: "Horus",
        levels: [
            { req: 2, text: [] },
            { req: 3, text: [] }
        ],
        full: [
            "Increase Min. Dmg +80",
            "Increase Skill Damage +60",
            "Double Damage Chance +4%",
        ],
        img: ["horus_glove", "horus_pendant"]
    },
}
export const ancSets = [
    // { // Warrior Leather Set
    //     cat: "dk",
    //     name: "Warrior",
    //     levels: [
    //         { req: 2, text:  ["Increase Strength +240"] },
    //         { req: 3, text:  ["Increase Min. Dmg +30"] }
    //     ],
    //     full: [
    //         "Increase Strength +240",
    //         "Increase Min. Dmg +30",
    //         "Increase Max. Dmg +40",
    //         "Increase Damage +30",
    //         "Increase Skill Damage +30",
    //         "Increase Defence +120",
    //         "Critical Damage Rate +15%",
    //         "Excellent Damage Rate +15%",
    //         "Increase Critical Damage +60",
    //     ],
    //     img: ["warrior_armor", "warrior_helm", "warrior_gloves", "warrior_pants", "warrior_boots", "warrior_star", "warrior_ring"]
    // },
    { // Anonymous Leather Set
        cat: "dk",
        name: "Anonymous",
        levels: [
            { req: 2, text:  ["Increase Defence +100"] },
            { req: 3, text:  [] }
        ],
        full: [
            "Increase Defence +100",
            "Increase Stamina +240",
            "Ignore Enemy`s Defence +6%",
            "Increase Defence Using Shield +30%",
        ],
        img: ["anonymous_helm", "anonymous_pants", "anonymous_boots", "anonymous_shield"]
    },
    { // Hyperion Bronz Set
        cat: "dk",
        name: "Hyperion",
        levels: [
            { req: 2, text:  ["Ignore Enemy`s Defence +3%"] },
            { req: 3, text:  [] }
        ],
        full: [
            "Ignore Enemy`s Defence +3%",
            "Excellent Damage Rate +10%",
            "Increase Excellent Damage +60",
            "Increase Life +250",
        ],
        img: ["hyperion_armor", "hyperion_pants", "hyperion_boots"]
    },
    { // Mist`s Bronze Set
        cat: "dk",
        name: "Mist",
        levels: [
            { req: 2, text:  ["Critical Damage Rate +15%"] },
            { req: 3, text:  ["Increase Skill Damage +50"] }
        ],
        full: [
            "Critical Damage Rate +15%",
            "Increase Skill Damage +50",
            "Double Damage Chance +10%",
            "Increase Stamina +250"
        ],
        img: ["mist_helm", "mist_gloves", "mist_pants"]
    },
    { // Eplete Scale Set
        cat: "dk",
        name: "Eplete",
        levels: [
            { req: 2, text:  ["Increase Skill Damage +40"] },
            { req: 3, text:  ["Increase Max. Damage +35"] },
            { req: 4, text:  ["Increase Min. Damage +30"] },
        ],
        full: [
            "Increase Skill Damage +40",
            "Increase Max. Damage +35",
            "Increase Min. Damage +30",
            "Increase Defence when using shield +20%",
            "Increase Stamina +200",
            "Critical Damage Rate +20%",
            "Excellent Damage Rate +12%",
        ],
        img: ["eplete_helm", "eplete_armor", "eplete_pants", "eplete_shield", "eplete_pendant"]
    },
    { // Berserker`s Set
        cat: "dk",
        name: "Berserker",
        levels: [
            { req: 2, text:  ["Increase Max. Damage +30"] },
            { req: 3, text:  ["Increase Max. Damage +40"] }
        ],
        full: [
            "Increase Max. Damage +30",
            "Increase Max. Damage +40",
            "Increase Max. Damage +50",
            "Increase Max. Damage +50",
            "Increase Max. Damage +50",
            "Increase Skill Damage +100",
        ], 
        img: ["berserker_helm", "berserker_armor", "berserker_pants", "berserker_boots", "berserker_gloves"]
    },
    { // Garuda Brass Set
        cat: "dk",
        name: "Garuda",
        levels: [
            { req: 2, text: ["Increase Max. Damage +40"] },
            { req: 3, text: ["Double Damage Chance +5%"] }
        ],
        full: [
            "Increase Max. Damage +40",
            "Double Damage Chance +7%",
            "Critical Damage Rate +10%",
            "Excellent Damage Rate +7%",
            "Increase Skill Damage +35",
            "Increase Wizardy Damage +15%",
        ],
        img: ["garuda_armor", "garuda_gloves", "garuda_pants", "garuda_boots", "garuda_pendant"]
    },
    { // Cloud`s Brass Set
        cat: "dk",
        name: "Cloud",
        levels: [
            { req: 2, text: ["Critical Damage Rate +30%"] },
            { req: 3, text: [] }
        ],
        full: [
            "Critical Damage Rate +30%",
            "Increase damage when using two handed weapons +25%",
            "Increase Critical Damage +60",
        ],
        img: ["cloud_helm", "cloud_pants"]
    },
    // { // Kantata`s Plate Set
    //     cat: "dk",
    //     name: "Kantata",
    //     levels: [
    //         { req: 2, text: ["Increase Defence +150"] },
    //         { req: 3, text: ["Increase Damage +35"] }
    //     ],
    //     full: [
    //         "Increase Defence +150",
    //         "Increase Damage +35",
    //         "Increase Stamina +220",
    //         "Increase Max. Dmg +25",
    //         "Ignore Enemy`s Defence +7%",
    //         "Increase Critical Chance +15%",
    //         "Double Damage Chance +3%",
    //     ],
    //     img: ["kantata_armor", "kantata_gloves", "kantata_boots", "kantata_ring1", "kantata_ring2"]
    // },
    { // Rave`s Plate Set
        cat: "dk",
        name: "Rave",
        levels: [
            { req: 2, text: ["Increase Skill Damage +50"] },
            { req: 3, text: [] }
        ],
        full: [
            "Increase Skill Damage +40",
            "Double Damage Chance +10%",
            "Increase damage when using two handed weapons +40%",
            "Ignore Enemy`s Defence +5%",
        ],
        img: ["rave_helm", "rave_armor", "rave_pants"]
    },
    { // Hyon`s Set
        cat: "dk",
        name: "Hyon",
        levels: [
            { req: 2, text: ["Increase Damage +50"] },
            { req: 3, text: ["Increse Skill Damage +40"] }
        ],
        full: [
            "Increase Damage +50",
            "Increse Skill Damage +40",
            "Double Damage Chance +10%",
            "Critical Damage Rate +15%",
            "Excellent Damage Rate +15%",
            "Increase Critical Damage +80",
            "Increase Excellent Damage  +80"
        ],
        img: ["hyon_helm", "hyon_boots", "hyon_gloves", "hyon_sword"]
    },
    { // Vicious`s Set
        cat: "dk",
        name: "Vicious",
        levels: [
            { req: 2, text: ["Increase Skill Damage +50"] },
            { req: 3, text: ["Critical Damage Rate +15%"] }
        ],
        full: [
            "Increase Skill Damage +50",
            "Critical Damage Rate +15%",
            "Double Damage Chance +10%",
            "Increase Min. Damage +40",
            "Increase Max. Damage +50",
            "Increase Critical Damage +80",
            "Ignore Enemy`s Defence +5%"
        ],
        img: ["vicious_armor", "vicious_helm", "vicious_pants", "vicious_ring"]
    },
    { // Mahe`s Set
        cat: "dk",
        name: "Mahes",
        levels: [
            { req: 2, text: [] },
            { req: 3, text: [] }
        ],
        full: [
            "Increase Excellent Damage  +100",
            "Excellent Damage Rate +10%",
            "Critical Damage Rate +15%",
        ],
        img: ["mahes_pants", "mahes_shield"]
    },
    { // Bragi`s Dark Phoenix Set
        cat: "dk",
        name: "Bragi",
        levels: [
            { req: 2, text:  ["Increase Skill Damage +120"] },
            { req: 3, text:  ["Increase Excellent Damage +160"] }
        ],
        full: [
            "Increase Skill Damage +140",
            "Increase Excellent Damage +160",
            "Critical Damage Rate +25%",
            "Excellent Damage Rate +25%",
            "Increase damage when using two handed weapons +70%",
            "Double Damage Rate +15%",
            "Ignore Enemy`s Defence +12%",
        ],
        img: ["bragi_armor", "bragi_pants", "bragi_helm", "bragi_boots", "bragi_sword"]
    },

    // { // Apollo`s Set
    //     cat: "dw",
    //     name: "Apollo",
    //     levels: [
    //         { req: 2, text:  ["Increase Defence +200"] },
    //         { req: 3, text:  ["Increase Skill Damage +30"] }
    //     ],
    //     full: [
    //         "Increase Defence +200",
    //         "Increase Skill Damage +30",
    //         "Increase Max. Dmg +40",
    //         "Increase Min. Dmg +40",
    //         "Increase Excellent Damage +60",
    //         "Excellent Damage Rate +12%",
    //         "Critical Damage Rate +20%",
    //         "Increase Wizardy Damage +40%",
    //         "Increase Stamina +220",
    //     ],
    //     img: ["apollo_armor", "apollo_helm", "apollo_gloves", "apollo_pants", "apollo_staff", "apollo_pendant", "apollo_ring"]
    // },
    { // Barnake`s Set
        cat: "dw",
        name: "Barnake",
        levels: [
            { req: 2, text:  ["Increase Wizardy Damage +10%"] },
            { req: 3, text:  ["Increase Energy +200"] }
        ],
        full: [
            "Increase Wizardy Damage +10%",
            "Increase Energy +200",
            "Increase Skill Damage +40",
            "Critical Damage Rate +10%",
        ],
        img: ["barnake_helm", "barnake_pants", "barnake_boots"]
    },
    { // Evis`s Set
        cat: "dw",
        name: "Evis",
        levels: [
            { req: 2, text:  ["Increase Skill Damage +35"] },
            { req: 3, text:  ["Increase Min. Damage +40"] }
        ],
        full: [
            "Increase Skill Damage +35",
            "Increase Min. Damage +40",
            "Critical Damage Rate +10%",
            "Double Damage Chance +5%",
            "Excellent Damage Rate +7%",
            "Increase Excellent Damage +40",
        ],
        img: ["evis_armor", "evis_pants", "evis_boots", "evis_pendant"]
    },
    { // Sylion`s Set
        cat: "dw",
        name: "Sylion",
        levels: [
            { req: 2, text:  ["Double Damage Chance +5%"] },
            { req: 3, text:  ["Critical Damage Rate +10%"] }
        ],
        full: [
            "Double Damage Chance +5%",
            "Critical Damage Rate +10%",
            "Excellent Damage Rate +5%",
            "Increase Max. Life +250",
            "Increase Stamina +250",
            "Increase Wizardy Damage +10%",
            "Increase Skill Damage +35",
        ],
        img: ["sylion_armor", "sylion_helm", "sylion_gloves", "sylion_boots"]
    },
    { // Heras`s Set
        cat: "dw",
        name: "Heras",
        levels: [
            { req: 2, text: ["Increase Skill Damage +40"] },
            { req: 3, text: ["Increase Wizardy Damage +15%"] }
        ],
        full: [
            "Increase Skill Damage +30",
            "Increase Wizardy Damage +15%",
            "Increase Defence when using shield +20%",
            "Increase Energy +250",
            "Increase Attack Rate +250",
            "Critical Damage Rate +10%",
            "Excellent Damage Rate +10%",
            "Increase Max. Life +250",
            "Increase Defence +80"
        ],
        img: ["hera_armor", "hera_helm", "hera_gloves", "hera_boots", "hera_pants", "hera_shield"]
    },
    { // Minet Set
        cat: "dw",
        name: "Minet",
        levels: [
            { req: 2, text: ["Increase Skill Damage +35"] },
            { req: 3, text: [] }
        ],
        full: [
            "Increase Skill Damage +35",
            "Increase Min. Dmg +50",
            "Excellent Damage Rate +12%",
            "Increase Excellent Damage +70",
        ],
        img: ["minet_armor", "minet_pants", "minet_boots"]
    },
    { // Anubis Set
        cat: "dw",
        name: "Anubis",
        levels: [
            { req: 2, text:  ["Increase Wizardy Damage +10%"] },
            { req: 3, text:  ["Double Damage Chance +10%"] }
        ],
        full: [
            "Increase Wizardy Damage +10%",
            "Double Damage Chance +10%",
            "Increase Skill Damage +50",
            "Critical Damage Rate +15%",
            "Excellent Damage Rate +15%",
            "Increase Critical Damage +100",
            "Increase Excellent Damage +100"
        ],
        img: ["anubis_armor", "anubis_helm", "anubis_gloves", "anubis_ring"]
    },
    { // Enis Set
        cat: "dw",
        name: "Enis",
        levels: [
            { req: 2, text: ["Increase Skill Damage +60"] },
            { req: 3, text: ["Double Damage Chance +10%"] }
        ],
        full: [
            "Increase Skill Damage +60",
            "Double Damage Chance +10%",
            "Critical Damage Rate +15%",
            "Increase Critical Damage +120",
            "Ignore Enemy`s Defence +5%",
            "Increase Wizardy Damage +15%"
        ],
        img: ["enis_armor", "enis_helm", "enis_pants", "enis_boots"]
    },
    { // Bes`s Eclipse Set
        cat: "dw",
        name: "Bes`s",
        levels: [
            { req: 2, text:  ["Excellent Damage Rate +15%"] },
            { req: 3, text:  [] }
        ],
        full: [
            "Excellent Damage Rate +15%",
            "Increase Wizardy Damage +20%",
            "Increase Skill Damage +120",

        ],
        img: ["bes_pants", "bes_staff"]
    },
    { // Alvis`s Grand Soul Set
        cat: "dw",
        name: "Alvis",
        levels: [
            { req: 2, text:  ["Double Damage Rate +3%"] },
            { req: 3, text:  ["Double Damage Rate +5%"] }
        ],
        full: [
            "Double Damage Rate +3%",
            "Double Damage Rate +5%",
            "Double Damage Rate +7%",
            "Ignore Enemy`s Defence +10%",
            "Critical Damage Rate +25%",
            "Excellent Damage Rate +25%",
            "Increase Wizardy Damage +25%",
        ],
        img: ["alvis_armor", "alvis_gloves", "alvis_boots", "alvis_staff"]
    },


    // { // Ceto Vine Set
    //     cat: "elf",
    //     name: "Ceto",
    //     levels: [
    //         { req: 2, text:  ["Increase Damage +40"] },
    //         { req: 3, text:  ["Increase Max. Damage +30"] }
    //     ],
    //     full: [
    //         "Increase Damage +40",
    //         "Increase Max. Damage +40",
    //         "Ignore Enemy`s Defence +5%",
    //         "Excellent Damage Rate +7%",
    //         "Critical Damage Rate +10%",
    //         "Increase Excellent Damage +40",
    //         "Increase Stamina +250",
    //         "Increase Defence +60"
    //     ],
    //     img: ["ceto_helm", "ceto_gloves", "ceto_pants", "ceto_boots", "ceto_sword", "ceto_ring"]
    // },
    { // Drake`s Vine Set
        cat: "elf",
        name: "Drake",
        levels: [
            { req: 2, text:  ["Increase Skill Damage +80"] },
            { req: 3, text:  ["Increase Damage +25"] }
        ],
        full: [
            "Increase Skill Damage +80",
            "Increase Damage +80",
            "Double Damage Chance +15%",
            "Increase Defence +200",
            "Critical Damage Rate +15%"
        ],
        img: ["drake_armor", "drake_helm", "drake_pants", "drake_boots"]
    },
    { // Gaia Silk Set
        cat: "elf",
        name: "Gaia",
        levels: [
            { req: 2, text:  ["Excellent Damage Rate +12%"] },
            { req: 3, text:  ["Increase Excellent Damage +100"] }
        ],
        full: [
            "Excellent Damage Rate +12%",
            "Increase Excellent Damage +100",
            "Increase Defence +100",
            "Double Damage Chance +5%",
            "Increase Min. Dmg +50",
            "Increase Max. Dmg +50",
            "Increase Excellent Damage +110"
        ],
        img: ["gaia_armor", "gaia_helm", "gaia_gloves", "gaia_pants", "gaia_crossbow"]
    },
    { // Fase Silk Set
        cat: "elf",
        name: "Fase",
        levels: [
            { req: 2, text:  ["Increase Skill Damage +70"] },
            { req: 3, text:  ["Increase Damage +60"] }
        ],
        full: [
            "Increase Skill Damage +60",
            "Increase Damage +50",
            "Double Damage Chance +7%",
        ],
        img: ["fase_gloves", "fase_pants", "fase_boots",]
    },
    { // Odin`s Set
        cat: "elf",
        name: "Odin`s",
        levels: [
            { req: 2, text:  ["Increase Damage +40"] },
            { req: 3, text:  ["Increase Max. Damage +30"] }
        ],
        full: [
            "Increase Damage +40",
            "Increase Max. Damage +40",
            "Ignore Enemy`s Defence +5%",
            "Excellent Damage Rate +7%",
            "Critical Damage Rate +10%",
            "Increase Excellent Damage +40",
            "Increase Stamina +250",
            "Increase Defence +60"
        ],
        img: ["odin_armor", "odin_helm", "odin_pants", "odin_gloves", "odin_boots",]
    },
    { // Elvian`s Wind Set
        cat: "elf",
        name: "Elvian",
        levels: [
            { req: 2, text:  [] },
            { req: 3, text:  [] }
        ],
        full: [
            "Critical Damage Rate +20%",
            "Excellent Damage Rate +7%",
        ],
        img: ["elvian_pants", "elvian_boots"]
    },
    { // Argo Spirit Set
        cat: "elf",
        name: "Argo`s",
        levels: [
            { req: 2, text: ["Increase Skill Damage +50"] },
            { req: 3, text: [] }
        ],
        full: [
            "Increase Max. Damage +50",
            "Critical Damage Rate +10%",
            "Excellent Damage Rate +10%",
            "Increase Excellent Damage +150"
        ],
        img: ["argo_armor", "argo_gloves", "argo_pants"]
    },
    { // Karis Spirit Set
        cat: "elf",
        name: "Karis`s",
        levels: [
            { req: 2, text: ["Increase Damage +40"] },
            { req: 3, text: [] }
        ],
        full: [
            "Increase Damage +40",
            "Critical Damage Rate +10%",
            "Excellent Damage Rate +10%",
            "Increase Critical Damage +150"
        ],
        img: ["karis_helm", "karis_pants", "karis_boots"]
    },
    { // Gywen`s Set
        cat: "elf",
        name: "Gywen",
        levels: [
            { req: 2, text:  ["Increase Skill Damage +50"] },
            { req: 3, text:  ["Increase Min. Dmg +40"] }
        ],
        full: [
            "Increase Skill Damage +50",
            "Increase Min. Dmg +40",
            "Increase Max. Dmg +50",
            "Increase Defence +120",
            "Critical Damage Rate +15%",
            "Excellent Damage Rate +20%",
            "Increase Critical Damage +150",
            "Increase Excellent Damage +150"
        ],
        img: ["gywen_armor", "gywen_gloves", "gywen_boots", "gywen_bow", "gywen_pendant",]
    },
    { // Aruan`s Set
        cat: "elf",
        name: "Aruan",
        levels: [
            { req: 2, text:  ["Increase Damage +100"] },
            { req: 3, text:  ["Double Damage Chance +10%"] }
        ],
        full: [
            "Increase Damage +100",
            "Double Damage Chance +10%",
            "Increase Skill Damage +100",
            "Critical Damage Rate +15%",
            "Excellent Damage Rate +15%",
            "Ignore Enemy`s Defence +5%",
        ],
        img: ["aruan_armor", "aruan_helm", "aruan_pants", "aruan_boots"]
    },
    { // Serket's Iris Set
        cat: "elf",
        name: "Serket",
        levels: [
            { req: 2, text:  [] },
            { req: 3, text:  [] }
        ],
        full: [
            "Excellent Damage Rate +10%",
            "Critical Damage Rate +15%",
            "Increase Excellent Damage +200",

        ],
        img: ["serket_helm", "serket_pants"]
    },
    { // Frigg`s Grand Soul Set
        cat: "elf",
        name: "Frigg",
        levels: [
            { req: 2, text:  ["Increase Skill Damage +200"] },
            { req: 3, text:  ["Increase Excellent Damage +250"] }
        ],
        full: [
            "Increase Skill Damage +200",
            "Increase Excellent Damage +250",
            "Increase Max. Damage +200",
            "Critical Damage Rate +25%",
            "Excellent Damage Rate +25%",
            "Double Damage Rate +15%",
            "Ignore Enemy`s Defence +10%",
        ],
        img: ["frigg_armor", "frigg_pants", "frigg_boots", "frigg_bow", "frigg_pendant"]
    },
    { // Gaion`s Set
        cat: "mg",
        name: "Gaion",
        levels: [
            { req: 2, text:  ["Ignore Enemy`s Defence +5%"] },
            { req: 3, text:  ["Double Damage Chance +10%"] }
        ],
        full: [
            "Ignore Enemy`s Defence +5%",
            "Double Damage Chance +10%",
            "Increase Skill Damage +50",
            "Excellent Damage Rate +15%",
            "Increase Excellent Damage +80",
            "Increase Wizardy Damage +15%",
            "Increase Max. Damage +40"
        ],
        img: ["gaion_armor", "gaion_pants", "gaion_boots", "gaion_pendant"]
    },
    { // Muren`s Set
        cat: "mg",
        name: "Muren",
        levels: [
            { req: 2, text:  ["Increase Skill Damage +60"] },
            { req: 3, text:  ["Double Damage Chance +10%"] }
        ],
        full: [
            "Increase Skill Damage +60",
            "Double Damage Chance +10%",
            "Increase Min. Damage +50",
            "Increase Max. Damage +60",
            "Critical Damage Rate +15%",
            "Excellent Damage Rate +15%",
            "Increase damage when using two handed weapons +40%",
        ],
        img: ["muren_armor", "muren_gloves", "muren_pants", "muren_ring"]
    },
    { // Apis`s Valiant Set
        cat: "mg",
        name: "Apis",
        levels: [
            { req: 2, text:  [] },
            { req: 3, text:  [] }
        ],
        full: [
            "Increase Excellent Damage +100",
            "Excellent Damage Rate +10%",
            "Critical Damage Rate +15%",

        ],
        img: ["apis_boots", "apis_pendant"]
    },
    { // Tyr`s Thunder Hawk Set
        cat: "mg",
        name: "Tyr",
        levels: [
            { req: 2, text:  ["Increase Skill Damage +120"] },
            { req: 3, text:  ["Increase damage when using two handed weapons +70%"] }
        ],
        full: [
            "Increase Skill Damage +120",
            "Increase damage when using two handed weapons +70%",
            "Increase Max. Damage +150",
            "Double Damage Rate +16%",
            "Ignore Enemy`s Defence +10%",
            "Critical Damage Rate +25%",
            "Excellent Damage Rate +25%",
        ],
        img: ["tyr_gloves", "tyr_pants", "tyr_boots", "tyr_sword", "tyr_pendant"]
    },
    { // Agnis`s Adamantine Set
        cat: "dl",
        name: "Agnis",
        levels: [
            { req: 2, text:  ["Increase Defence +200"] },
            { req: 3, text:  ["Double Damage Chance +10%"] }
        ],
        full: [
            "Increase Defence +200",
            "Double Damage Chance +10%",
            "Increase Skill Damage +50",
            "Critical Damage Rate +15%",
            "Excellent Damage Rate +15%",
            "Increase Critical Damage +80",
            "Increase Excellent Damage +80"
        ],
        img: ["agnis_armor", "agnis_helm", "agnis_pants", "agnis_ring"]
    },
    { // Broy`s Adamantine Set
        cat: "dl",
        name: "Broy",
        levels: [
            { req: 2, text:  ["Increase Damage +60"] },
            { req: 3, text:  ["Increase Skill Damage +50"] }
        ],
        full: [
            "Increase Damage +60",
            "Increase Skill Damage +50",
            "Increase Min. Damage +40",
            "Increase Max. Damage +50",
            "Critical Damage Rate +15%",
            "Excellent Damage Rate +15%",
            "Ignore Enemy`s Defence +5%",
        ],
        img: ["broy_gloves", "broy_pants", "broy_boots", "broy_pendant"]
    },
    { // Khon`s Dark Steel Set
        cat: "dl",
        name: "Khon",
        levels: [
            { req: 2, text:  [] },
            { req: 3, text:  [] }
        ],
        full: [
            "Increase Excellent Damage +100",
            "Excellent Damage Rate +10%",
            "Critical Damage Rate +15%",

        ],
        img: ["khon_gloves", "khon_boots"]
    },
    { // Surt`s Glorius  Set
        cat: "dl",
        name: "Surt",
        levels: [
            { req: 2, text:  ["Increase Defence when using shield +35%"] },
            { req: 3, text:  ["Increase Skill Damage +150"] }
        ],
        full: [
            "Increase Defence when using shield +35%",
            "Increase Skill Damage +150",
            "Ignore Enemy`s Defence +10%",
            "Increase Excelent Damage +150",
            "Critical Damage Rate +25%",
            "Excellent Damage Rate +25%",
            "Double Damage Rate +15%",
        ],
        img: ["surt_armor", "surt_helm", "surt_gloves", "surt_boots", "surt_scepter"]
    },
    { // Semeden`s Set
        cat: "sum",
        name: "Semeden",
        levels: [
            { req: 2, text:  ["Increase Wizardy Damage +15%"] },
            { req: 3, text:  ["Increase Skill Damage +60"] }
        ],
        full: [
            "Increase Wizardy Damage +15%",
            "Increase Skill Damage +60",
            "Increase Excellent Damage +120",
            "Critical Damage Rate +15%",
            "Excellent Damage Rate +15%",
            "Ignore Enemy`s Defence +5%",
        ],
        img: ["semeden_armor", "semeden_helm", "semeden_gloves", "semeden_boots"]
    },
    { // Chrono`s Set
        cat: "sum",
        name: "Chrono",
        levels: [
            { req: 2, text:  ["Increase Defence +200"] },
            { req: 3, text:  ["Double Damage Chance +15%"] }
        ],
        full: [
            "Increase Defence +200",
            "Double Damage Chance +15%",
            "Increase Skill Damage +60",
            "Excellent Damage Rate +15%",
            "Critical Damage Rate +15%",
            "Increase Critical Damage +80",
            "Increase Excellent Damage +80"
        ],
        img: ["chrono_helm", "chrono_gloves", "chrono_pants", "chrono_ring"]
    },
    { // Hapy`s Ancient Set
        cat: "sum",
        name: "Harpy",
        levels: [
            { req: 2, text:  [] },
            { req: 3, text:  [] }
        ],
        full: [
            "Increase Critical Damage +150",
            "Critical Damage Rate +15%",
            "Ignore Enemy`s Defence +11%",

        ],
        img: ["harpy_armor", "harpy_boots"]
    },
    { // Elune`s Demonic Set
        cat: "sum",
        name: "Elune",
        levels: [
            { req: 2, text:  ["Excellent Damage Rate +8%"] },
            { req: 3, text:  ["Excellent Damage Rate +9%"] }
        ],
        full: [
            "Excellent Damage Rate +8%",
            "Excellent Damage Rate +9%",
            "Excellent Damage Rate +16%",
            "Double Damage Rate +15%",
            "Increase Skill Damage +150",
            "Ignore Enemy`s Defence +10%",
            "Increase Wizardy Damage +25%",
        ],
        img: ["elune_armor", "elune_pants", "elune_gloves", "elune_stick", "elune_ring"]
    },

    { // Vega`s Set
        cat: "rf",
        name: "Vega",
        levels: [
            { req: 2, text: ["Increase Skill Damage +60"] },
            { req: 3, text: ["Increase Max. Dmamge +50"] }
        ],
        full: [
            "Increase Skill Damage +50",
            "Increase Max. Dmamge +50",
            "Increase Min. Dmamge +50",
            "Excellent Damage Rate +15%",
            "Increase Excellent Damage +80",
            "Double Damage Chance +7%",
            "Ignore Enemy`s Defence +5%"
        ],
        img: ["vega_armor", "vega_helm", "vega_pants", "vega_glove"]
    },
    { // Chamer`s Set
        cat: "rf",
        name: "Chamer",
        levels: [
            { req: 2, text: ["Increase Skill Damage +120"] },
            { req: 3, text: ["Double Damage Chance +12%"] }
        ],
        full: [
            "Increase Skill Damage +120",
            "Double Damage Chance +12%",
            "Increase Dmamge +100",
            "Critical Damage Rate +25%",
            "Excellent Damage Rate +25%",
            "Increase Critical Damage +120",
            "Increase Excellent Damage +120",
            "Ignore Enemy`s Defence +10%"
        ],
        img: ["chamer_armor","chamer_pants", "chamer_boots", "chamer_glove"]
    },
    // { // Horus Set
    //     cat: "rf",
    //     name: "Horus",
    //     levels: [
    //         { req: 2, text: [] },
    //         { req: 3, text: [] }
    //     ],
    //     full: [
    //         "Increase Min. Dmg +80",
    //         "Increase Skill Damage +60",
    //         "Double Damage Chance +4%",
    //     ],
    //     img: ["horus_glove", "horus_pendant"]
    // },
]

// Функция помощник:
export const getAncientSetInfo = (setIndex) => {
    return setIndex ? ANCIENT_DATA[setIndex] : null;
};

export function getAncSetOpt(cat, id, type) {
        const searchStr = `${cat}_${id}`
        if ( type === 5 || type === 9) {
            return getAncientSetInfo(ancientSetTypes[searchStr].tier1) 
        }
        else if ( type === 6 || type === 10) {
            return getAncientSetInfo(ancientSetTypes[searchStr].tier2) 
        } else return null

}

