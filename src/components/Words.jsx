const filipinoTVShows = [
    "Ang Probinsyano", "Eat Bulaga", "Maalaala Mo Kaya", "Bubble Gang", "Goin' Bulilit",
    "Wowowin", "Kapuso Mo, Jessica Soho", "Rated K", "TV Patrol", "Magandang Buhay",
    "It’s Showtime", "Walang Hanggan", "Bagani", "Darna", "Encantadia",
    "Super Inggo", "Marimar", "Be Careful With My Heart", "La Luna Sangre", "Forevermore",
    "Halik", "Lolong", "The General's Daughter", "Onanay", "Kadenang Ginto",
    "The Killer Bride", "Love Thy Woman", "FPJ’s Batang Quiapo", "Alyas Robin Hood", "Mulawin vs. Ravena",
    "Imbestigador", "24 Oras", "Front Row", "S.O.C.O.", "Wish Ko Lang",
    "Pinoy Big Brother", "StarStruck", "The Clash", "Idol Philippines", "Talentadong Pinoy",
    "Protégé", "The Voice Philippines", "X Factor Philippines", "Little Big Shots", "Pilipinas Got Talent",
    "Face to Face", "Barangay Love Stories", "Maynila", "Eat... Bulaga!", "Tropang Trumpo",
    "Palibhasa Lalake", "Home Along Da Riles", "OK Ka, Fairy Ko!", "Hiram Na Mukha", "Flordeluna",
    "Anna Luna", "Marina", "Kay Tagal Kang Hinintay", "Pangako Sa’Yo", "Maging Sino Ka Man",
    "Hanggang Saan", "A Love to Last", "Ang Dalawang Mrs. Real", "My Husband’s Lover", "The Rich Man’s Daughter",
    "My Special Tatay", "Anak ni Waray vs. Anak ni Biday", "Prima Donnas", "Rosalinda", "Mga Anghel Na Walang Langit",
    "Anna Karenina", "Rubi", "Kapamilya Deal or No Deal", "Family Feud Philippines", "Who Wants to Be a Millionaire? (Philippines)",
    "Laban o Bawi", "Game KNB?", "The Singing Bee", "Kap’s Amazing Stories", "Pepito Manaloto",
    "Meant To Be", "My Love from the Star (PH)", "The Good Son", "Asintado", "Doble Kara",
    "Haplos", "Carmela", "Inday Will Always Love You", "Mga Batang Poz", "Owe My Love",
    "My Destiny", "With A Smile", "Ikaw Lang Ang Iibigin", "Bridges of Love", "Nasaan Ka Nang Kailangan Kita",
    "Love You Stranger", "Paraiso Ko'y Ikaw", "Because of You", "Hindi Ka Na Mag-iisa", "Makapiling Kang Muli"
  ];
  
  const filipinoMovies = [
    "Heneral Luna", "Goyo: Ang Batang Heneral", "Four Sisters and a Wedding", "One More Chance", "Starting Over Again",
    "Hello, Love, Goodbye", "Barcelona: A Love Untold", "The Hows of Us", "Seven Sundays", "She's Dating the Gangster",
    "No Other Woman", "A Second Chance", "Kita Kita", "Crazy Beautiful You", "Die Beautiful",
    "Ang Tanging Ina", "Sukob", "The Super Parental Guardians", "Praybeyt Benjamin", "Ang Babae sa Septic Tank",
    "That Thing Called Tadhana", "Isa Pa with Feelings", "Love You to the Stars and Back", "Babae at Baril", "Pisay",
    "Smaller and Smaller Circles", "Metro Manila", "Patay na si Hesus", "Buy Bust", "Oro, Plata, Mata",
    "One More Try", "The Mistress", "It Takes a Man and a Woman", "Till My Heartaches End", "My Amnesia Girl",
    "Feng Shui", "Sukob", "Dalaw", "The Healing", "Shake Rattle & Roll",
    "Baler", "Rosario", "Anak", "Magnifico", "Jose Rizal",
    "Bonifacio: Ang Unang Pangulo", "El Presidente", "Dekada '70", "Mano Po", "Tanging Yaman",
    "Batang PX", "Cry No Fear", "Clarita", "Aurora", "Eerie",
    "Sunod", "Pagpag: Siyam na Buhay", "Segunda Mano", "The Road", "T2",
    "Ang Darling Kong Aswang", "Temptation Island", "My Ex and Whys", "I’m Drunk, I Love You", "Falling Into You",
    "The Third Party", "Starting Over Again", "Can’t Help Falling in Love", "Unbreakable", "Alone/Together",
    "Love is Color Blind", "James & Pat & Dave", "The House of Us", "Vince & Kath & James", "Everything About Her",
    "Sid & Aya: Not a Love Story", "My Bebe Love", "Fantastica", "This Time", "Maybe This Time",
    "Till There Was You", "Love Me Tomorrow", "All You Need Is Pag-Ibig", "Bakit Hindi Ka Crush ng Crush Mo?", "Must Be... Love",
    "Crazy Little Thing Called Love", "My Fairy Tail Love Story", "Biyaheng Lupa", "Dinig Sana Kita", "Senior Year",
    "Kubrador", "Ang Pagdadalaga ni Maximo Oliveros", "Ligo na Ü, Lapit na Me", "Blue Bustamante", "That Boy in the Dark"
  ];
  
  const filipinoIdiomsSayings = [
    "Itaga mo sa bato", "Maitim ang budhi", "Kapit sa patalim", "Balat sibuyas", "Nagbibilang ng poste",
    "Mahaba ang pisi", "Kumukulo ang dugo", "Magsunog ng kilay", "Kapus sa palad", "Halang ang bituka",
    "Bilog ang mundo", "Malakas ang loob", "Naglalaway sa pagkain", "Mabigat ang kamay", "Nagbukas ng dibdib",
    "Dahil sa pag-ibig", "May gatas pa sa labi", "Dugong bughaw", "Utang na loob", "Tinik sa lalamunan",
    "Pagputi ng uwak", "Hampas lupa", "Nagbukas ng puso", "Agaw buhay", "Di mahulugang karayom",
    "Nag-aapoy sa galit", "May tinik sa dibdib", "Isang kahig, isang tuka", "Malayo sa bituka", "Hinog sa pilit",
    "Kapag maiksi ang kumot, matutong mamaluktot", "Ang hindi marunong lumingon sa pinanggalingan...", "Daig ng maagap ang masipag",
    "Ang buhay ay parang gulong", "Tumatanda ng paurong", "Walang himala!", "Makapal ang mukha", "Parang sardinas",
    "Nagpapanggap na mahirap", "Mataas ang lipad", "Walang pakpak pero lumilipad", "Magbiro ka na sa lasing, huwag lang sa bagong gising",
    "Kapag ang puno ay hitik sa bunga...", "Ang isda ay nahuhuli sa sarili niyang bibig", "Madaling maging tao, mahirap magpakatao",
    "Walang matimtimang birhen sa matiyagang manalangin", "Ang lumalakad ng matulin, kung matinik ay malalim", "Mahirap gisingin ang nagtutulog-tulugan",
    "Habang may buhay, may pag-asa", "May pakpak ang balita", "Matalino man ang matsing, napaglalalangan din", "Ang hindi marunong magmahal sa sariling wika...",
    "Matigas ang ulo", "Butas ang bulsa", "Nagpapanggap na mabait", "Pasan ang daigdig", "Mataas ang pangarap",
    "Nasa Diyos ang awa, nasa tao ang gawa", "Kung walang tiyaga, walang nilaga", "Kung hindi ukol, hindi bubukol", "Ang taong walang kibo, nasa loob ang kulo",
    "Walang permanenteng bagay sa mundo", "Aanhin pa ang damo kung patay na ang kabayo", "Buhay alamang, paglukso’y patay"
  ];

  const ecosystem = [
    "Ecosystem", "Biodiversity", "Habitat", "Food Chain", "Food Web",
    "Producers", "Consumers", "Decomposers", "Trophic Levels", "Energy Flow",
    "Photosynthesis", "Nutrient Cycle", "Carbon Cycle", "Nitrogen Cycle", "Water Cycle",
    "Ecological Balance", "Symbiosis", "Mutualism", "Commensalism", "Parasitism",
    "Predation", "Competition", "Keystone Species", "Indicator Species", "Endemic Species",
    "Invasive Species", "Primary Succession", "Secondary Succession", "Climax Community", "Biome",
    "Tundra", "Taiga", "Temperate Forest", "Tropical Rainforest", "Grassland",
    "Desert", "Savanna", "Coral Reef", "Marine Ecosystem", "Freshwater Ecosystem",
    "Estuary", "Wetlands", "Mangrove", "Pond", "Lake",
    "River", "Ocean", "Canopy", "Understory", "Forest Floor",
    "Niche", "Adaptation", "Carrying Capacity", "Population Dynamics", "Ecological Footprint",
    "Decomposition", "Scavenger", "Herbivore", "Carnivore", "Omnivore",
    "Pollination", "Seed Dispersal", "Microorganisms", "Fungi", "Algae",
    "Plankton", "Zooplankton", "Phytoplankton", "Detritivores", "Soil Erosion",
    "Deforestation", "Afforestation", "Reforestation", "Pollution", "Climate Change",
    "Sustainable Practices", "Conservation", "Ecotourism", "Greenhouse Effect", "Ozone Layer",
    "Carbon Sequestration", "Bioaccumulation", "Biomagnification", "Bioremediation", "Eutrophication",
    "Hydrological Cycle", "Permafrost", "Trophic Cascade", "Ecological Niche", "Natural Selection",
    "Population Growth", "Habitat Fragmentation", "Ecological Succession", "Biosphere", "Genetic Diversity",
    "Soil Microbes", "Aquatic Plants", "Territorial Behavior", "Fossil Fuels", "Energy Pyramid",
    "Leaf Litter", "Microhabitat", "Climatic Factors", "Anthropogenic Effects", "Biotic and Abiotic Factors"
  ];
  
  export { filipinoTVShows, filipinoMovies, filipinoIdiomsSayings, ecosystem };
  