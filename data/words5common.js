const strList = [
	"ABBAS",
	"ABBEY",
	"ABIDE",
	"ABORT",
	"ABOUT",
	"ABOVE",
	"ABUSE",
	"ACIDS",
	"ACORN",
	"ACRES",
	"ACTED",
	"ACTOR",
	"ACUTE",
	"ADAPT",
	"ADDED",
	"ADEPT",
	"ADMIN",
	"ADMIT",
	"ADOBE",
	"ADOPT",
	"ADULT",
	"AFTER",
	"AGAIN",
	"AGENT",
	"AGILE",
	"AGING",
	"AGONY",
	"AGREE",
	"AHEAD",
	"AIDED",
	"AIDES",
	"AIMED",
	"AIRED",
	"AISLE",
	"ALAMO",
	"ALARM",
	"ALBUM",
	"ALERT",
	"ALGAE",
	"ALIAS",
	"ALIEN",
	"ALIGN",
	"ALIKE",
	"ALIVE",
	"ALLEY",
	"ALLOW",
	"ALLOY",
	"ALOHA",
	"ALONE",
	"ALONG",
	"ALOUD",
	"ALPHA",
	"ALTAR",
	"ALTER",
	"AMBER",
	"AMEND",
	"AMIGA",
	"AMINO",
	"AMONG",
	"AMPLE",
	"ANGEL",
	"ANGER",
	"ANGLE",
	"ANGLO",
	"ANGRY",
	"ANIME",
	"ANKLE",
	"ANNEX",
	"ANNOY",
	"APART",
	"APPLE",
	"APPLY",
	"APRON",
	"ARBOR",
	"AREAS",
	"ARENA",
	"ARGUE",
	"ARGUS",
	"ARIEL",
	"ARISE",
	"ARMED",
	"ARMOR",
	"AROMA",
	"AROSE",
	"ARRAY",
	"ARROW",
	"ASHES",
	"ASIDE",
	"ASKED",
	"ASPEN",
	"ASSAY",
	"ASSES",
	"ASSET",
	"ATLAS",
	"ATOMS",
	"ATTIC",
	"AUDIO",
	"AUDIT",
	"AUTOS",
	"AVAIL",
	"AVANT",
	"AVIAN",
	"AVOID",
	"AWAIT",
	"AWAKE",
	"AWARD",
	"AWARE",
	"AWFUL",
	"AXIAL",
	"AXIOM",
	"BABES",
	"BACKS",
	"BACON",
	"BADGE",
	"BADLY",
	"BAKED",
	"BAKER",
	"BALLS",
	"BANDS",
	"BANJO",
	"BANKS",
	"BARON",
	"BARRE",
	"BARRY",
	"BASAL",
	"BASED",
	"BASES",
	"BASIC",
	"BASIL",
	"BASIN",
	"BASIS",
	"BATCH",
	"BATES",
	"BATHS",
	"BATON",
	"BAYER",
	"BEACH",
	"BEADS",
	"BEAMS",
	"BEANS",
	"BEARD",
	"BEARS",
	"BEAST",
	"BEATS",
	"BEECH",
	"BEERS",
	"BEGAN",
	"BEGIN",
	"BEGUN",
	"BEIGE",
	"BEING",
	"BELLE",
	"BELLS",
	"BELLY",
	"BELOW",
	"BELTS",
	"BENCH",
	"BENNY",
	"BERRY",
	"BETTY",
	"BEZEL",
	"BIBLE",
	"BIKER",
	"BIKES",
	"BILLS",
	"BILLY",
	"BINDS",
	"BINGO",
	"BIRCH",
	"BIRDS",
	"BIRTH",
	"BISON",
	"BITCH",
	"BITES",
	"BLACK",
	"BLADE",
	"BLAME",
	"BLAND",
	"BLANK",
	"BLAST",
	"BLAZE",
	"BLEED",
	"BLEND",
	"BLESS",
	"BLIND",
	"BLING",
	"BLINK",
	"BLISS",
	"BLITZ",
	"BLOCK",
	"BLOGS",
	"BLOND",
	"BLOOD",
	"BLOOM",
	"BLOWN",
	"BLOWS",
	"BLUES",
	"BLUFF",
	"BLUNT",
	"BLUSH",
	"BOARD",
	"BOATS",
	"BOBBY",
	"BOGUS",
	"BOING",
	"BOLTS",
	"BOMBS",
	"BONDS",
	"BONES",
	"BONUS",
	"BOOBS",
	"BOOKS",
	"BOOST",
	"BOOTH",
	"BOOTS",
	"BOOTY",
	"BORED",
	"BORNE",
	"BOUND",
	"BOWEL",
	"BOWIE",
	"BOWLS",
	"BOXED",
	"BOXER",
	"BOXES",
	"BRACE",
	"BRAIN",
	"BRAKE",
	"BRAND",
	"BRASS",
	"BRAVE",
	"BRAVO",
	"BREAD",
	"BREAK",
	"BREED",
	"BRENT",
	"BRICK",
	"BRIDE",
	"BRIEF",
	"BRING",
	"BRINK",
	"BROAD",
	"BROCK",
	"BROKE",
	"BROOK",
	"BROWN",
	"BRUSH",
	"BUCKS",
	"BUDDY",
	"BUFFY",
	"BUGGY",
	"BUILD",
	"BUILT",
	"BULBS",
	"BULLS",
	"BULLY",
	"BUMPS",
	"BUNCH",
	"BUNNY",
	"BURKE",
	"BURNS",
	"BURNT",
	"BURST",
	"BUSES",
	"BUSTY",
	"BUTTE",
	"BUTTS",
	"BUYER",
	"BYTES",
	"CABIN",
	"CABLE",
	"CACHE",
	"CADET",
	"CAFES",
	"CAGES",
	"CAJUN",
	"CAKES",
	"CALLS",
	"CAMEL",
	"CAMEO",
	"CAMPS",
	"CANAL",
	"CANDY",
	"CANOE",
	"CANON",
	"CAPRI",
	"CARAT",
	"CARBS",
	"CARDS",
	"CARED",
	"CARES",
	"CARGO",
	"CAROL",
	"CARRY",
	"CARTE",
	"CARTS",
	"CASES",
	"CASTS",
	"CATCH",
	"CATER",
	"CAUSE",
	"CAVES",
	"CEASE",
	"CEDAR",
	"CELEB",
	"CELLO",
	"CELLS",
	"CENTS",
	"CHAIN",
	"CHAIR",
	"CHALK",
	"CHAMP",
	"CHANG",
	"CHAOS",
	"CHARM",
	"CHARS",
	"CHART",
	"CHASE",
	"CHATS",
	"CHEAP",
	"CHEAT",
	"CHECK",
	"CHEEK",
	"CHEER",
	"CHEFS",
	"CHESS",
	"CHEST",
	"CHEVY",
	"CHICK",
	"CHICO",
	"CHIEF",
	"CHILD",
	"CHILE",
	"CHILI",
	"CHILL",
	"CHINA",
	"CHING",
	"CHIPS",
	"CHOIR",
	"CHOKE",
	"CHORD",
	"CHOSE",
	"CHUCK",
	"CHUNK",
	"CIDER",
	"CIGAR",
	"CIRCA",
	"CISCO",
	"CITED",
	"CITES",
	"CIVIC",
	"CIVIL",
	"CLAIM",
	"CLAMP",
	"CLANS",
	"CLASH",
	"CLASS",
	"CLEAN",
	"CLEAR",
	"CLERK",
	"CLICK",
	"CLIFF",
	"CLIMB",
	"CLINT",
	"CLIPS",
	"CLOAK",
	"CLOCK",
	"CLONE",
	"CLOSE",
	"CLOTH",
	"CLOUD",
	"CLOWN",
	"CLUBS",
	"CLUES",
	"COACH",
	"COAST",
	"COATS",
	"COBRA",
	"COCKS",
	"COCOA",
	"COCOS",
	"CODEC",
	"CODED",
	"CODES",
	"COHEN",
	"COILS",
	"COINS",
	"COLIN",
	"COLON",
	"COLOR",
	"COLTS",
	"COMBI",
	"COMBO",
	"COMBS",
	"COMES",
	"COMET",
	"COMIC",
	"COMMA",
	"CONDO",
	"CONES",
	"CONGO",
	"COOKS",
	"CORAL",
	"CORDS",
	"CORES",
	"COREY",
	"CORPS",
	"COSTA",
	"COSTS",
	"COUCH",
	"COUGH",
	"COULD",
	"COUNT",
	"COUPE",
	"COURT",
	"COVER",
	"COWAN",
	"CRACK",
	"CRAFT",
	"CRAIG",
	"CRANE",
	"CRANK",
	"CRAPS",
	"CRASH",
	"CRATE",
	"CRAWL",
	"CRAZY",
	"CREAM",
	"CREED",
	"CREEK",
	"CREEP",
	"CREME",
	"CREST",
	"CREWS",
	"CRIBS",
	"CRIED",
	"CRIES",
	"CRIME",
	"CRISP",
	"CROFT",
	"CROPS",
	"CROSS",
	"CROWD",
	"CROWN",
	"CRUDE",
	"CRUEL",
	"CRUSH",
	"CRUST",
	"CRYPT",
	"CUBES",
	"CUBIC",
	"CURED",
	"CURES",
	"CURLY",
	"CURRY",
	"CURSE",
	"CURVE",
	"CUTIE",
	"CYBER",
	"CYCLE",
	"DADDY",
	"DAILY",
	"DAIRY",
	"DAISY",
	"DANCE",
	"DANNY",
	"DARTS",
	"DATED",
	"DATES",
	"DATUM",
	"DEALS",
	"DEALT",
	"DEATH",
	"DEBIT",
	"DEBTS",
	"DEBUG",
	"DEBUT",
	"DECAL",
	"DECAY",
	"DECKS",
	"DECOR",
	"DEEDS",
	"DEERE",
	"DELAY",
	"DELTA",
	"DEMON",
	"DEMOS",
	"DENIM",
	"DENIS",
	"DENSE",
	"DEPOT",
	"DEPTH",
	"DERBY",
	"DESKS",
	"DETER",
	"DETOX",
	"DEVEL",
	"DEVIL",
	"DEVON",
	"DIANE",
	"DIARY",
	"DICKS",
	"DIETS",
	"DIFFS",
	"DIGIT",
	"DILDO",
	"DINAR",
	"DINER",
	"DIODE",
	"DIRTY",
	"DISCO",
	"DISCS",
	"DISKS",
	"DITCH",
	"DIVER",
	"DIXIE",
	"DIZZY",
	"DOCKS",
	"DODGE",
	"DOING",
	"DOLCE",
	"DOLLS",
	"DOLLY",
	"DONNA",
	"DONOR",
	"DOORS",
	"DORIS",
	"DOSES",
	"DOUBT",
	"DOUGH",
	"DOVER",
	"DOWNS",
	"DOZEN",
	"DRAFT",
	"DRAIN",
	"DRAKE",
	"DRAMA",
	"DRANK",
	"DRAWN",
	"DRAWS",
	"DREAD",
	"DREAM",
	"DRESS",
	"DRIED",
	"DRIFT",
	"DRILL",
	"DRINK",
	"DRIVE",
	"DROPS",
	"DROVE",
	"DRUGS",
	"DRUMS",
	"DRUNK",
	"DRYER",
	"DUCKS",
	"DUKES",
	"DUMMY",
	"DUNES",
	"DUNNO",
	"DUSTY",
	"DUTCH",
	"DUVET",
	"DWARF",
	"DWELL",
	"DYING",
	"EAGER",
	"EAGLE",
	"EARLY",
	"EARNS",
	"EARTH",
	"EATEN",
	"EATER",
	"EBONY",
	"EBOOK",
	"EDGED",
	"EDGES",
	"EDITS",
	"EIGHT",
	"ELBOW",
	"ELDER",
	"ELECT",
	"ELITE",
	"EMACS",
	"EMAIL",
	"EMPTY",
	"EMULE",
	"ENDED",
	"ENEMY",
	"ENJOY",
	"ENTER",
	"ENTRY",
	"ENVOY",
	"EPOCH",
	"EPOXY",
	"EQUAL",
	"EQUIP",
	"ERASE",
	"ERECT",
	"ERICA",
	"ERROR",
	"ESSAY",
	"ESTER",
	"ETHER",
	"EUROS",
	"EVENT",
	"EVERY",
	"EVITE",
	"EXACT",
	"EXAMS",
	"EXCEL",
	"EXILE",
	"EXIST",
	"EXITS",
	"EXPAT",
	"EXTRA",
	"EZINE",
	"FABLE",
	"FACED",
	"FACES",
	"FACTS",
	"FADED",
	"FAILS",
	"FAINT",
	"FAIRS",
	"FAIRY",
	"FAITH",
	"FAKES",
	"FALLS",
	"FALSE",
	"FANCY",
	"FANNY",
	"FARES",
	"FARMS",
	"FATAL",
	"FATTY",
	"FAULT",
	"FAUNA",
	"FAVOR",
	"FAXES",
	"FEARS",
	"FEAST",
	"FEDEX",
	"FEEDS",
	"FEELS",
	"FEMME",
	"FENCE",
	"FERRY",
	"FETAL",
	"FETCH",
	"FETUS",
	"FEVER",
	"FEWER",
	"FIBER",
	"FIBRE",
	"FIELD",
	"FIERY",
	"FIFTH",
	"FIFTY",
	"FIGHT",
	"FILED",
	"FILES",
	"FILLS",
	"FILMS",
	"FILTH",
	"FINAL",
	"FINCH",
	"FINDS",
	"FINED",
	"FINER",
	"FINES",
	"FIRED",
	"FIRES",
	"FIRMS",
	"FIRST",
	"FITCH",
	"FIXED",
	"FIXES",
	"FLAGS",
	"FLAIR",
	"FLAME",
	"FLARE",
	"FLASH",
	"FLATS",
	"FLAWS",
	"FLEET",
	"FLESH",
	"FLICK",
	"FLIES",
	"FLINT",
	"FLIRT",
	"FLOAT",
	"FLOCK",
	"FLOOD",
	"FLOOR",
	"FLORA",
	"FLOUR",
	"FLOWN",
	"FLOWS",
	"FLUID",
	"FLUSH",
	"FLUTE",
	"FLYER",
	"FOCAL",
	"FOCUS",
	"FOLDS",
	"FOLEY",
	"FOLIO",
	"FOLKS",
	"FONTS",
	"FOODS",
	"FOOLS",
	"FORCE",
	"FOREX",
	"FORGE",
	"FORKS",
	"FORMS",
	"FORTE",
	"FORTH",
	"FORTY",
	"FORUM",
	"FOUND",
	"FRAME",
	"FRANC",
	"FRANK",
	"FRAUD",
	"FREAK",
	"FREED",
	"FRESH",
	"FRIED",
	"FRIES",
	"FRITZ",
	"FROGS",
	"FRONT",
	"FROST",
	"FRUIT",
	"FUCKS",
	"FUDGE",
	"FUELS",
	"FULLY",
	"FUNDS",
	"FUNGI",
	"FUNKY",
	"FUNNY",
	"FURRY",
	"FUZZY",
	"GAINS",
	"GAMER",
	"GAMES",
	"GAMMA",
	"GANGS",
	"GARTH",
	"GASES",
	"GATED",
	"GATES",
	"GATOR",
	"GAUGE",
	"GEARS",
	"GEEKS",
	"GENES",
	"GENIE",
	"GENOA",
	"GENRE",
	"GENUS",
	"GHOST",
	"GIANT",
	"GIFTS",
	"GIMME",
	"GIRLS",
	"GIVEN",
	"GIVES",
	"GLAND",
	"GLARE",
	"GLASS",
	"GLAZE",
	"GLIDE",
	"GLOBE",
	"GLORY",
	"GLOSS",
	"GLOVE",
	"GNOME",
	"GOALS",
	"GOATS",
	"GOING",
	"GONNA",
	"GOODS",
	"GOOSE",
	"GORGE",
	"GOTTA",
	"GOWNS",
	"GRABS",
	"GRACE",
	"GRADE",
	"GRAFT",
	"GRAIN",
	"GRAMS",
	"GRAND",
	"GRANT",
	"GRAPE",
	"GRAPH",
	"GRASP",
	"GRASS",
	"GRAVE",
	"GRAVY",
	"GREAT",
	"GREED",
	"GREEK",
	"GREEN",
	"GREET",
	"GRIDS",
	"GRIEF",
	"GRILL",
	"GRIND",
	"GRIPS",
	"GROOM",
	"GROSS",
	"GROUP",
	"GROVE",
	"GROWN",
	"GROWS",
	"GUARD",
	"GUESS",
	"GUEST",
	"GUIDE",
	"GUILD",
	"GUILT",
	"GYPSY",
	"HABIT",
	"HACKS",
	"HAIKU",
	"HAIRY",
	"HALLS",
	"HANDS",
	"HANDY",
	"HANGS",
	"HAPPY",
	"HARDY",
	"HARRY",
	"HARSH",
	"HATCH",
	"HATED",
	"HATES",
	"HAUTE",
	"HAVEN",
	"HAVOC",
	"HAWKS",
	"HAZEL",
	"HEADS",
	"HEARD",
	"HEARS",
	"HEART",
	"HEATH",
	"HEAVY",
	"HEDGE",
	"HEELS",
	"HEIRS",
	"HELIX",
	"HELLO",
	"HELPS",
	"HENCE",
	"HENRY",
	"HERBS",
	"HERON",
	"HERTZ",
	"HICKS",
	"HIDES",
	"HIGHS",
	"HIKES",
	"HILLS",
	"HINGE",
	"HINTS",
	"HIRED",
	"HIRES",
	"HITCH",
	"HOBBY",
	"HOGAN",
	"HOLDS",
	"HOLES",
	"HOLLY",
	"HOMER",
	"HOMES",
	"HOMME",
	"HONDA",
	"HONEY",
	"HONOR",
	"HOODS",
	"HOOKS",
	"HOOPS",
	"HOPED",
	"HOPES",
	"HORDE",
	"HORNS",
	"HORNY",
	"HORSE",
	"HOSTS",
	"HOTEL",
	"HOUND",
	"HOURS",
	"HOUSE",
	"HOVER",
	"HUMAN",
	"HUMOR",
	"HUMPS",
	"HUNKS",
	"HURRY",
	"HURST",
	"HURTS",
	"HUSKY",
	"HYDRO",
	"HYPER",
	"ICONS",
	"IDEAL",
	"IDEAS",
	"IDIOT",
	"IMAGE",
	"IMPLY",
	"INBOX",
	"INCUR",
	"INDEX",
	"INDIA",
	"INDIE",
	"INFOS",
	"INFRA",
	"INLET",
	"INNER",
	"INPUT",
	"INTEL",
	"INTER",
	"INTRA",
	"INTRO",
	"IONIC",
	"IRONS",
	"IRONY",
	"ISLES",
	"ISSUE",
	"ITEMS",
	"IVORY",
	"JACKS",
	"JAMES",
	"JAPAN",
	"JEANS",
	"JELLY",
	"JENNY",
	"JERRY",
	"JESSE",
	"JESUS",
	"JEWEL",
	"JIHAD",
	"JIMMY",
	"JOHNS",
	"JOINS",
	"JOINT",
	"JOKER",
	"JOKES",
	"JOLLY",
	"JONES",
	"JUDGE",
	"JUICE",
	"JUICY",
	"JUMBO",
	"JUMPS",
	"KAPPA",
	"KARMA",
	"KAYAK",
	"KEEPS",
	"KELLY",
	"KERRY",
	"KHAKI",
	"KICKS",
	"KILLS",
	"KINDA",
	"KINDS",
	"KINGS",
	"KINKY",
	"KIOSK",
	"KIRBY",
	"KITTY",
	"KNEES",
	"KNIFE",
	"KNOBS",
	"KNOCK",
	"KNOTS",
	"KNOWN",
	"KNOWS",
	"KRAFT",
	"KRONA",
	"KUDOS",
	"KYLIE",
	"LABEL",
	"LABOR",
	"LACEY",
	"LACKS",
	"LADEN",
	"LAKES",
	"LAMPS",
	"LANCE",
	"LANDS",
	"LANES",
	"LAPSE",
	"LARGE",
	"LARGO",
	"LASER",
	"LASTS",
	"LATCH",
	"LATER",
	"LATEX",
	"LAUGH",
	"LAURA",
	"LAYER",
	"LAYUP",
	"LEACH",
	"LEADS",
	"LEAFS",
	"LEAKS",
	"LEARN",
	"LEASE",
	"LEAST",
	"LEAVE",
	"LEGAL",
	"LEMMA",
	"LEMON",
	"LEONE",
	"LESBO",
	"LEVEL",
	"LEVER",
	"LEVIN",
	"LEWIS",
	"LIENS",
	"LIFTS",
	"LIGHT",
	"LIKED",
	"LIKES",
	"LILAC",
	"LIMBS",
	"LIMIT",
	"LINED",
	"LINEN",
	"LINER",
	"LINES",
	"LINKS",
	"LINUX",
	"LIONS",
	"LIPID",
	"LISTS",
	"LITER",
	"LITRE",
	"LIVED",
	"LIVER",
	"LIVES",
	"LOADS",
	"LOANS",
	"LOBBY",
	"LOCAL",
	"LOCKS",
	"LOCUS",
	"LODGE",
	"LOGAN",
	"LOGIC",
	"LOGIN",
	"LOGON",
	"LOGOS",
	"LOHAN",
	"LOOKS",
	"LOOPS",
	"LOOSE",
	"LORDS",
	"LOSER",
	"LOSES",
	"LOTTO",
	"LOTUS",
	"LOUIS",
	"LOVED",
	"LOVER",
	"LOVES",
	"LOWER",
	"LOYAL",
	"LUCKY",
	"LUNAR",
	"LUNCH",
	"LUNGS",
	"LUPUS",
	"LYING",
	"LYMPH",
	"LYNCH",
	"LYRIC",
	"MACON",
	"MACRO",
	"MADAM",
	"MAFIA",
	"MAGIC",
	"MAILS",
	"MAINS",
	"MAIZE",
	"MAJOR",
	"MAKER",
	"MAKES",
	"MALES",
	"MALLS",
	"MAMBO",
	"MANGA",
	"MANGO",
	"MANIA",
	"MANIC",
	"MANOR",
	"MAPLE",
	"MARCH",
	"MARIA",
	"MARKS",
	"MARRY",
	"MARSH",
	"MASKS",
	"MASON",
	"MATCH",
	"MATER",
	"MATES",
	"MATHS",
	"MATTE",
	"MAVEN",
	"MAXIM",
	"MAYBE",
	"MAYOR",
	"MEALS",
	"MEANS",
	"MEANT",
	"MEATS",
	"MEDAL",
	"MEDIA",
	"MEETS",
	"MENUS",
	"MERCY",
	"MERGE",
	"MERIT",
	"MERRY",
	"MESSY",
	"METAL",
	"METER",
	"METRE",
	"METRO",
	"MICRO",
	"MIDST",
	"MIGHT",
	"MIKES",
	"MILES",
	"MILFS",
	"MILKY",
	"MILLS",
	"MINDS",
	"MINER",
	"MINES",
	"MINOR",
	"MINUS",
	"MISSY",
	"MISTY",
	"MITCH",
	"MIXED",
	"MIXER",
	"MIXES",
	"MODAL",
	"MODEL",
	"MODEM",
	"MODES",
	"MOIST",
	"MOLDS",
	"MOLLY",
	"MOMMA",
	"MOMMY",
	"MONDE",
	"MONDO",
	"MONEY",
	"MONKS",
	"MONTE",
	"MONTH",
	"MONTY",
	"MOODS",
	"MOODY",
	"MOOSE",
	"MORAL",
	"MORSE",
	"MOSES",
	"MOTEL",
	"MOTIF",
	"MOTOR",
	"MOTTO",
	"MOULD",
	"MOUND",
	"MOUNT",
	"MOUSE",
	"MOUTH",
	"MOVED",
	"MOVER",
	"MOVES",
	"MOVIE",
	"MOWER",
	"MUDDY",
	"MUMMY",
	"MUSIC",
	"MYTHS",
	"NAILS",
	"NAIVE",
	"NAKED",
	"NAMED",
	"NAMES",
	"NANCY",
	"NANNY",
	"NASAL",
	"NASTY",
	"NATAL",
	"NAVAL",
	"NAVEL",
	"NAZIS",
	"NEEDS",
	"NEEDY",
	"NEGRO",
	"NELLY",
	"NERVE",
	"NEVER",
	"NEWER",
	"NEWLY",
	"NEXUS",
	"NICHE",
	"NICHT",
	"NIFTY",
	"NIGER",
	"NIGHT",
	"NINJA",
	"NINTH",
	"NITRO",
	"NOBLE",
	"NODES",
	"NOISE",
	"NOISY",
	"NOMAD",
	"NORMA",
	"NORMS",
	"NORTH",
	"NOTCH",
	"NOTED",
	"NOTES",
	"NOVEL",
	"NUDES",
	"NURSE",
	"NYLON",
	"OASIS",
	"OBESE",
	"OCCUR",
	"OCEAN",
	"OCTET",
	"OFFER",
	"OFTEN",
	"OLDER",
	"OLIVE",
	"OMEGA",
	"ONION",
	"ONSET",
	"OPENS",
	"OPERA",
	"OPTED",
	"OPTIC",
	"ORBIT",
	"ORDER",
	"ORGAN",
	"ORTHO",
	"OSCAR",
	"OTHER",
	"OTTER",
	"OUGHT",
	"OUNCE",
	"OUTER",
	"OVENS",
	"OWING",
	"OWNED",
	"OWNER",
	"OXIDE",
	"OZONE",
	"PACED",
	"PACKS",
	"PADDY",
	"PAGAN",
	"PAGER",
	"PAGES",
	"PAINS",
	"PAINT",
	"PAIRS",
	"PALMS",
	"PANDA",
	"PANEL",
	"PANIC",
	"PANTS",
	"PANTY",
	"PAOLO",
	"PAPER",
	"PARIS",
	"PARKS",
	"PARSE",
	"PARTS",
	"PARTY",
	"PASTA",
	"PASTE",
	"PATCH",
	"PATHS",
	"PATIO",
	"PATTY",
	"PAUSE",
	"PAVED",
	"PAYER",
	"PEACE",
	"PEACH",
	"PEAKS",
	"PEARL",
	"PEDAL",
	"PEDRO",
	"PEERS",
	"PEGGY",
	"PENAL",
	"PENIS",
	"PENNY",
	"PEPSI",
	"PERRY",
	"PESOS",
	"PESTS",
	"PETER",
	"PETIT",
	"PETTY",
	"PHASE",
	"PHONE",
	"PHONO",
	"PHOTO",
	"PIANO",
	"PICKS",
	"PIECE",
	"PILES",
	"PILLS",
	"PILOT",
	"PINCH",
	"PINES",
	"PINOT",
	"PIPER",
	"PIPES",
	"PITCH",
	"PIVOT",
	"PIXEL",
	"PIZZA",
	"PLACE",
	"PLAID",
	"PLAIN",
	"PLANE",
	"PLANS",
	"PLANT",
	"PLATE",
	"PLAYA",
	"PLAYS",
	"PLAZA",
	"PLOTS",
	"PLUGS",
	"PLUMP",
	"PLUSH",
	"PLUTO",
	"POEMS",
	"POETS",
	"POINT",
	"POKER",
	"POLAR",
	"POLES",
	"POLLS",
	"POLLY",
	"PONDS",
	"POOLS",
	"POPPY",
	"PORCH",
	"PORNO",
	"PORTS",
	"POSED",
	"POSES",
	"POSTS",
	"POUCH",
	"POUND",
	"POWER",
	"PRATT",
	"PRESS",
	"PRICE",
	"PRIDE",
	"PRIMA",
	"PRIME",
	"PRINT",
	"PRIOR",
	"PRISM",
	"PRIZE",
	"PROBE",
	"PROMO",
	"PRONE",
	"PROOF",
	"PROPS",
	"PROSE",
	"PROTO",
	"PROUD",
	"PROVE",
	"PROXY",
	"PSALM",
	"PSYCH",
	"PUFFY",
	"PULLS",
	"PULSE",
	"PUMPS",
	"PUNCH",
	"PUPIL",
	"PUPPY",
	"PURSE",
	"PUSSY",
	"QUAKE",
	"QUARK",
	"QUART",
	"QUASI",
	"QUEEN",
	"QUEER",
	"QUERY",
	"QUEST",
	"QUEUE",
	"QUICK",
	"QUIET",
	"QUILT",
	"QUITE",
	"QUOTA",
	"QUOTE",
	"RABBI",
	"RACER",
	"RACES",
	"RACKS",
	"RADAR",
	"RADIO",
	"RAILS",
	"RAINS",
	"RAINY",
	"RAISE",
	"RALLY",
	"RALPH",
	"RAMPS",
	"RANCH",
	"RANDY",
	"RANGE",
	"RANKS",
	"RANTS",
	"RAPED",
	"RAPID",
	"RATED",
	"RATES",
	"RATIO",
	"RAVEN",
	"RAZOR",
	"REACH",
	"REACT",
	"READS",
	"READY",
	"REALM",
	"REBEL",
	"RECAP",
	"RECON",
	"REEFS",
	"REELS",
	"REFER",
	"REGAL",
	"REHAB",
	"REIGN",
	"REIKI",
	"RELAX",
	"RELAY",
	"REMIX",
	"RENAL",
	"RENEW",
	"RENTS",
	"REPAY",
	"REPLY",
	"RESET",
	"RESIN",
	"RESTS",
	"RETRO",
	"REUSE",
	"RHINO",
	"RHYME",
	"RIDER",
	"RIDES",
	"RIDGE",
	"RIFLE",
	"RIGHT",
	"RIGID",
	"RILEY",
	"RINGS",
	"RINSE",
	"RIOTS",
	"RISEN",
	"RISES",
	"RISKS",
	"RISKY",
	"RIVAL",
	"RIVER",
	"ROACH",
	"ROADS",
	"ROAST",
	"ROBES",
	"ROBIN",
	"ROBOT",
	"ROCKS",
	"ROCKY",
	"RODEO",
	"ROGER",
	"ROGUE",
	"ROLES",
	"ROLLS",
	"ROMAN",
	"ROMEO",
	"ROOFS",
	"ROOMS",
	"ROOTS",
	"ROPES",
	"ROSES",
	"ROTOR",
	"ROUGE",
	"ROUGH",
	"ROUND",
	"ROUTE",
	"ROVER",
	"ROWAN",
	"ROYAL",
	"RUBIN",
	"RUGBY",
	"RUINS",
	"RULED",
	"RULER",
	"RULES",
	"RUMOR",
	"RUPEE",
	"RURAL",
	"RUSTY",
	"SABLE",
	"SACKS",
	"SADLY",
	"SAFER",
	"SAILS",
	"SAINT",
	"SAKAI",
	"SALAD",
	"SALES",
	"SALLE",
	"SALLY",
	"SALON",
	"SALSA",
	"SALTS",
	"SAMBA",
	"SAMMY",
	"SANDS",
	"SANDY",
	"SANTO",
	"SASSY",
	"SATIN",
	"SAUCE",
	"SAUNA",
	"SAVED",
	"SAVER",
	"SAVES",
	"SAVVY",
	"SCALE",
	"SCAMS",
	"SCANS",
	"SCARE",
	"SCARF",
	"SCARS",
	"SCARY",
	"SCENE",
	"SCENT",
	"SCION",
	"SCOOP",
	"SCOPE",
	"SCORE",
	"SCOTS",
	"SCOUT",
	"SCRAP",
	"SCREW",
	"SCRUB",
	"SCUBA",
	"SEALS",
	"SEARS",
	"SEATS",
	"SEDAN",
	"SEEDS",
	"SEEKS",
	"SEEMS",
	"SEIZE",
	"SELLS",
	"SEMEN",
	"SENDS",
	"SENSE",
	"SERIF",
	"SERUM",
	"SERVE",
	"SERVO",
	"SETUP",
	"SEVEN",
	"SEWER",
	"SEXES",
	"SHACK",
	"SHADE",
	"SHADY",
	"SHAFT",
	"SHAKE",
	"SHALL",
	"SHALT",
	"SHAME",
	"SHAPE",
	"SHARE",
	"SHARK",
	"SHARP",
	"SHAVE",
	"SHAWN",
	"SHEAR",
	"SHEDS",
	"SHEEP",
	"SHEER",
	"SHEET",
	"SHELF",
	"SHELL",
	"SHIFT",
	"SHINE",
	"SHINY",
	"SHIPS",
	"SHIRE",
	"SHIRT",
	"SHOCK",
	"SHOES",
	"SHOOK",
	"SHOOT",
	"SHOPS",
	"SHORE",
	"SHORT",
	"SHOTS",
	"SHOUT",
	"SHOWN",
	"SHOWS",
	"SHRUB",
	"SIDED",
	"SIDES",
	"SIEGE",
	"SIGHT",
	"SIGMA",
	"SIGNS",
	"SILKY",
	"SILLY",
	"SILVA",
	"SINCE",
	"SINGS",
	"SINKS",
	"SINUS",
	"SITES",
	"SIXTH",
	"SIXTY",
	"SIZED",
	"SIZES",
	"SKATE",
	"SKIES",
	"SKILL",
	"SKINS",
	"SKIRT",
	"SKULL",
	"SLACK",
	"SLANG",
	"SLASH",
	"SLATE",
	"SLAVE",
	"SLEEK",
	"SLEEP",
	"SLEPT",
	"SLICE",
	"SLICK",
	"SLIDE",
	"SLING",
	"SLIPS",
	"SLOAN",
	"SLOPE",
	"SLOTS",
	"SLUTS",
	"SMACK",
	"SMALL",
	"SMART",
	"SMASH",
	"SMELL",
	"SMILE",
	"SMITH",
	"SMOKE",
	"SMOKY",
	"SNACK",
	"SNAIL",
	"SNAKE",
	"SNAPS",
	"SNEAK",
	"SNOOP",
	"SNORT",
	"SNOWY",
	"SOAPS",
	"SOBER",
	"SOCKS",
	"SOFAS",
	"SOILS",
	"SOLAR",
	"SOLID",
	"SOLVE",
	"SONGS",
	"SONIC",
	"SONNY",
	"SORRY",
	"SORTS",
	"SOULS",
	"SOUND",
	"SOUPS",
	"SOUTH",
	"SPACE",
	"SPADE",
	"SPAIN",
	"SPANK",
	"SPANS",
	"SPARE",
	"SPARK",
	"SPAWN",
	"SPEAK",
	"SPEAR",
	"SPECS",
	"SPEED",
	"SPELL",
	"SPEND",
	"SPENT",
	"SPERM",
	"SPICE",
	"SPICY",
	"SPIES",
	"SPIKE",
	"SPILL",
	"SPINE",
	"SPINS",
	"SPITE",
	"SPLIT",
	"SPOIL",
	"SPOKE",
	"SPOOL",
	"SPOON",
	"SPORT",
	"SPOTS",
	"SPRAY",
	"SPURS",
	"SQUAD",
	"SQUID",
	"STACK",
	"STAFF",
	"STAGE",
	"STAIN",
	"STAIR",
	"STAKE",
	"STALL",
	"STAMP",
	"STAND",
	"STARE",
	"STARK",
	"STARR",
	"STARS",
	"START",
	"STASH",
	"STATE",
	"STATS",
	"STAYS",
	"STEAK",
	"STEAL",
	"STEAM",
	"STEEL",
	"STEEP",
	"STEER",
	"STEIN",
	"STEMS",
	"STEPS",
	"STERN",
	"STICK",
	"STIFF",
	"STILL",
	"STING",
	"STOCK",
	"STOKE",
	"STOLE",
	"STONE",
	"STONY",
	"STOOD",
	"STOOL",
	"STOPS",
	"STORE",
	"STORM",
	"STORY",
	"STOUT",
	"STOVE",
	"STRAP",
	"STRAW",
	"STRAY",
	"STRIP",
	"STUCK",
	"STUDS",
	"STUDY",
	"STUFF",
	"STUNT",
	"STYLE",
	"SUCKS",
	"SUEDE",
	"SUGAR",
	"SUITE",
	"SUITS",
	"SUNNY",
	"SUPER",
	"SUPRA",
	"SURGE",
	"SUSHI",
	"SUTRA",
	"SWAMP",
	"SWEAR",
	"SWEAT",
	"SWEEP",
	"SWEET",
	"SWELL",
	"SWEPT",
	"SWIFT",
	"SWINE",
	"SWING",
	"SWISS",
	"SWORD",
	"SWORN",
	"SYNTH",
	"SYRUP",
	"TABLE",
	"TABOO",
	"TAILS",
	"TAKEN",
	"TAKES",
	"TALES",
	"TALKS",
	"TALLY",
	"TAMMY",
	"TANGO",
	"TANKS",
	"TAPED",
	"TAPES",
	"TAROT",
	"TASKS",
	"TASTE",
	"TASTY",
	"TAXED",
	"TAXES",
	"TAXIS",
	"TEACH",
	"TEAMS",
	"TEARS",
	"TEASE",
	"TECHS",
	"TEDDY",
	"TEENS",
	"TEETH",
	"TELLS",
	"TEMPO",
	"TEMPS",
	"TENDS",
	"TENOR",
	"TENSE",
	"TENTH",
	"TENTS",
	"TERMS",
	"TERRA",
	"TERRY",
	"TESTS",
	"TEXAS",
	"TEXTS",
	"THANK",
	"THANX",
	"THEFT",
	"THEIR",
	"THEME",
	"THERE",
	"THESE",
	"THETA",
	"THICK",
	"THIEF",
	"THIGH",
	"THING",
	"THINK",
	"THIRD",
	"THONG",
	"THORN",
	"THOSE",
	"THREE",
	"THREW",
	"THROW",
	"THUMB",
	"TIDAL",
	"TIDES",
	"TIGER",
	"TIGHT",
	"TILES",
	"TIMED",
	"TIMER",
	"TIMES",
	"TIRED",
	"TIRES",
	"TITAN",
	"TITLE",
	"TOAST",
	"TODAY",
	"TOKEN",
	"TOMMY",
	"TONER",
	"TONES",
	"TONGA",
	"TOOLS",
	"TOONS",
	"TOOTH",
	"TOPAZ",
	"TOPIC",
	"TORAH",
	"TORCH",
	"TORSO",
	"TOTAL",
	"TOUCH",
	"TOUGH",
	"TOURS",
	"TOWEL",
	"TOWER",
	"TOWNS",
	"TOXIC",
	"TOXIN",
	"TRACE",
	"TRACK",
	"TRACT",
	"TRADE",
	"TRAIL",
	"TRAIN",
	"TRAIT",
	"TRANS",
	"TRAPS",
	"TRASH",
	"TRAYS",
	"TREAD",
	"TREAT",
	"TREES",
	"TREND",
	"TRIAD",
	"TRIAL",
	"TRIBE",
	"TRICK",
	"TRIED",
	"TRIES",
	"TRIPS",
	"TROLL",
	"TROOP",
	"TROUT",
	"TRUCK",
	"TRULY",
	"TRUMP",
	"TRUNK",
	"TRUSS",
	"TRUST",
	"TRUTH",
	"TUBES",
	"TULIP",
	"TUMMY",
	"TUMOR",
	"TUNED",
	"TUNER",
	"TUNES",
	"TURBO",
	"TURKS",
	"TURNS",
	"TUTOR",
	"TWAIN",
	"TWEAK",
	"TWEED",
	"TWICE",
	"TWILL",
	"TWINK",
	"TWINS",
	"TWIST",
	"TYING",
	"TYLER",
	"TYPED",
	"TYPES",
	"TYRES",
	"ULTRA",
	"UNCLE",
	"UNCUT",
	"UNDER",
	"UNION",
	"UNITE",
	"UNITS",
	"UNITY",
	"UNTIL",
	"UPPER",
	"UPSET",
	"URBAN",
	"URGED",
	"URGES",
	"URINE",
	"USAGE",
	"USERS",
	"USHER",
	"USING",
	"USUAL",
	"UTTER",
	"VAGUE",
	"VALET",
	"VALID",
	"VALUE",
	"VALVE",
	"VAPOR",
	"VASES",
	"VAULT",
	"VEGAN",
	"VEGAS",
	"VEINS",
	"VENOM",
	"VENTS",
	"VENUE",
	"VENUS",
	"VERBS",
	"VERGE",
	"VERSE",
	"VESTS",
	"VIDEO",
	"VIEWS",
	"VILLA",
	"VINES",
	"VINYL",
	"VIOLA",
	"VIPER",
	"VIRAL",
	"VIRUS",
	"VISAS",
	"VISIT",
	"VISOR",
	"VISTA",
	"VITAE",
	"VITAL",
	"VITRO",
	"VIVID",
	"VOCAL",
	"VODKA",
	"VOGUE",
	"VOICE",
	"VOLTS",
	"VOTED",
	"VOTER",
	"VOTES",
	"WACKY",
	"WAFER",
	"WAGES",
	"WAGON",
	"WAIST",
	"WAITS",
	"WAIVE",
	"WALES",
	"WALKS",
	"WALLA",
	"WALLS",
	"WALLY",
	"WALTZ",
	"WANNA",
	"WANTS",
	"WARDS",
	"WAREZ",
	"WARNS",
	"WASTE",
	"WATCH",
	"WATER",
	"WATTS",
	"WAVES",
	"WEARS",
	"WEARY",
	"WEAVE",
	"WEBER",
	"WEDGE",
	"WEEDS",
	"WEEKS",
	"WEIGH",
	"WEIRD",
	"WELCH",
	"WELLS",
	"WELSH",
	"WHALE",
	"WHARF",
	"WHATS",
	"WHEAT",
	"WHEEL",
	"WHERE",
	"WHICH",
	"WHILE",
	"WHITE",
	"WHOLE",
	"WHORE",
	"WHOSE",
	"WIDER",
	"WIDOW",
	"WIDTH",
	"WIGAN",
	"WIGHT",
	"WILLS",
	"WILLY",
	"WINDS",
	"WINDY",
	"WINES",
	"WINGS",
	"WIPED",
	"WIRED",
	"WIRES",
	"WITCH",
	"WITTY",
	"WIVES",
	"WOMAN",
	"WOMEN",
	"WOODS",
	"WOODY",
	"WORDS",
	"WORKS",
	"WORLD",
	"WORMS",
	"WORRY",
	"WORSE",
	"WORST",
	"WORTH",
	"WOULD",
	"WOUND",
	"WOVEN",
	"WRAPS",
	"WRATH",
	"WRECK",
	"WRIST",
	"WRITE",
	"WRONG",
	"WROTE",
	"XEROX",
	"YACHT",
	"YAHOO",
	"YARDS",
	"YATES",
	"YEARS",
	"YEAST",
	"YIELD",
	"YOUNG",
	"YOURS",
	"YOUTH",
	"YUMMY",
	"ZAIRE",
	"ZEBRA",
	"ZONES"];