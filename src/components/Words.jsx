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

  const  animals = [
      "Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Monkey", "Kangaroo", "Panda", "Koala", "Bear",
      "Cheetah", "Crocodile", "Dolphin", "Eagle", "Flamingo", "Fox", "Goat", "Hippopotamus", "Horse", "Jaguar",
      "Lemur", "Lizard", "Mole", "Narwhal", "Ostrich", "Otter", "Owl", "Parrot", "Peacock", "Penguin",
      "Polar Bear", "Porcupine", "Rabbit", "Raccoon", "Rhinoceros", "Scorpion", "Shark", "Sloth", "Snake", "Squirrel",
      "Starfish", "Swan", "Tarantula", "Tortoise", "Toucan", "Vulture", "Walrus", "Whale", "Wolf", "Yak",
      "Alpaca", "Armadillo", "Beetle", "Bison", "Buffalo", "Butterfly", "Camel", "Caribou", "Chameleon", "Chimpanzee",
      "Clownfish", "Crab", "Deer", "Dragonfly", "Eel", "Elk", "Ferret", "Gazelle", "Gorilla", "Grasshopper",
      "Hedgehog", "Hyena", "Jellyfish", "Ladybug", "Lobster", "Mantis", "Meerkat", "Mosquito", "Newt", "Ocelot",
      "Orangutan", "Pufferfish", "Quail", "Rattlesnake", "Seahorse", "Skunk", "Snail", "Squid", "Stingray", "Tapir",
      "Tuna", "Turkey", "Urchin", "Viper", "Warthog", "Woodpecker", "Zebu"
    ];
    
    const professions = [
      "Doctor", "Nurse", "Teacher", "Police Officer", "Firefighter", "Pilot", "Astronaut", "Artist", "Musician", "Chef",
      "Engineer", "Scientist", "Carpenter", "Electrician", "Mechanic", "Architect", "Farmer", "Dentist", "Veterinarian", "Librarian",
      "Judge", "Lawyer", "Soldier", "Bartender", "Plumber", "Fisherman", "Tailor", "Barber", "Photographer", "Journalist",
      "Actor", "Director", "Banker", "Cashier", "Secretary", "Receptionist", "Baker", "Butcher", "Blacksmith", "Magician",
      "Dancer", "Fashion Designer", "Tour Guide", "Athlete", "Coach", "Referee", "News Anchor", "Writer", "Editor", "Software Developer",
      "Graphic Designer", "Game Developer", "Scientist", "Meteorologist", "Zookeeper", "Florist", "Construction Worker", "Truck Driver", "Security Guard", "Paramedic",
      "Psychologist", "Social Worker", "Real Estate Agent", "Jeweler", "Postman", "Radio Host", "Animator", "Biologist", "Botanist", "Geologist",
      "Physicist", "Surgeon", "Therapist", "Dietitian", "Archaeologist", "Marine Biologist", "Forensic Scientist", "Fire Investigator", "Event Planner", "Entrepreneur",
      "Interior Designer", "Data Analyst", "Cybersecurity Expert", "Astronomer", "Park Ranger", "Sports Commentator", "Sound Engineer", "Flight Attendant", "Tattoo Artist", "Drone Operator"
    ];
    
    const objects = [
      "Chair", "Table", "Lamp", "Sofa", "Couch", "Bed", "Pillow", "Blanket", "Clock", "Mirror",
      "Book", "Notebook", "Pencil", "Pen", "Scissors", "Eraser", "Stapler", "Paperclip", "Backpack", "Suitcase",
      "Sunglasses", "Watch", "Hat", "Shoes", "Gloves", "Belt", "Tie", "Jacket", "Umbrella", "Wallet",
      "Phone", "Laptop", "Tablet", "Remote", "Headphones", "Charger", "Flashlight", "Keyboard", "Mouse", "Television",
      "Fan", "Refrigerator", "Microwave", "Toaster", "Blender", "Dishwasher", "Stove", "Oven", "Washing Machine", "Iron",
      "Towel", "Shampoo", "Soap", "Toothbrush", "Toothpaste", "Comb", "Hairbrush", "Perfume", "Deodorant", "Lotion",
      "Camera", "Tripod", "Drone", "Screwdriver", "Hammer", "Wrench", "Drill", "Nail", "Saw", "Paintbrush",
      "Bicycle", "Motorcycle", "Helmet", "Car", "Bus", "Truck", "Train", "Airplane", "Boat", "Submarine",
      "Ball", "Bat", "Glove", "Hula Hoop", "Yo-Yo", "Kite", "Puzzle", "Board Game", "Dominoes", "Chess"
    ];
    
    const places = [
      "School", "Hospital", "Police Station", "Fire Station", "Library", "Mall", "Restaurant", "Cafe", "Airport", "Train Station",
      "Amusement Park", "Zoo", "Museum", "Cinema", "Theater", "Church", "Temple", "Mosque", "Park", "Playground",
      "Beach", "Mountain", "Lake", "River", "Island", "Cave", "Forest", "Jungle", "Waterfall", "Desert",
      "Village", "Town", "City", "Market", "Farm", "Factory", "Warehouse", "Bus Stop", "Bridge", "Tunnel",
      "Skyscraper", "Bank", "Post Office", "Gym", "Stadium", "Swimming Pool", "Parking Lot", "Gas Station", "Barbershop", "Salon",
      "Hotel", "Resort", "Casino", "Ferry Terminal", "Highway", "Subway Station", "Cruise Ship", "Tower", "Palace", "Castle",
      "Fortress", "Monument", "Plaza", "Square", "Embassy", "Consulate", "Harbor", "Lighthouse", "Observatory", "Arena",
      "Cemetery", "Campsite", "Bakery", "Butcher Shop", "Grocery Store", "Flower Shop", "Toy Store", "Music Store", "Art Gallery", "Courthouse"
    ];

    const collegeLife = [
      "Lecture", "Professor", "Dormitory", "Library", "Textbook", "Notebook", "Highlighter", "Exam", "Quiz", "Assignment",
      "Thesis", "Group Project", "Presentation", "Midterms", "Finals", "Syllabus", "Lecture Hall", "Laboratory", "Internship", "Scholarship",
      "Tuition", "Campus", "Backpack", "Cafeteria", "Meal Plan", "Coffee", "Energy Drink", "Student ID", "Registration", "Transcript",
      "Commute", "Bicycle", "Bus Pass", "Online Class", "Laptop", "Printer", "Wi-Fi", "Dorm Room", "Roommate", "Student Lounge",
      "Study Group", "Tutor", "Whiteboard", "Planner", "Flashcards", "Library Card", "Break Time", "Stress", "All-Nighter", "Curfew",
      "Part-time Job", "Budget", "Savings", "Allowance", "Rent", "Bills", "Graduation", "Diploma", "Gown", "Cap and Tassel",
      "Career Fair", "Job Interview", "Resume", "Cover Letter", "Networking", "LinkedIn", "Student Organization", "Club", "Sports Team", "Gym",
      "Orientation", "Freshman", "Sophomore", "Junior", "Senior", "Alumni", "Dean’s List", "Honor Roll", "Valedictorian", "Salutatorian",
      "Greek Life", "Fraternity", "Sorority", "Event Ticket", "Concert", "Study Abroad", "Exchange Student", "Lecture Notes", "E-Learning", "Coding Bootcamp",
      "Research Paper", "Citation", "Plagiarism", "Lab Report", "Essay", "Debate", "Case Study", "Field Trip", "Extracurricular", "Self-Study"
    ];

    const asianNovelas = [
      "Boys Over Flowers", "Meteor Garden", "Full House", "Autumn in My Heart", "Winter Sonata", "My Love from the Star", "Descendants of the Sun", "Crash Landing on You", "The Heirs", "Goblin",
      "Strong Woman Do Bong Soon", "Weightlifting Fairy Kim Bok Joo", "Hotel Del Luna", "Vincenzo", "It's Okay to Not Be Okay", "Business Proposal", "True Beauty", "Start-Up", "Twenty-Five Twenty-One", "Extraordinary Attorney Woo",
      "Reborn Rich", "Hometown Cha-Cha-Cha", "While You Were Sleeping", "Legend of the Blue Sea", "The King: Eternal Monarch", "Pinocchio", "W: Two Worlds", "Secret Garden", "Itaewon Class", "A Love So Beautiful",
      "Love O2O", "The Untamed", "Ashes of Love", "Eternal Love: Ten Miles of Peach Blossoms", "Put Your Head on My Shoulder", "Go Ahead", "You Are My Glory", "Hidden Love", "Meteor Garden (2018)", "My Girlfriend is an Alien",
      "Skate Into Love", "Le Coup de Foudre", "Intense Love", "My Little Happiness", "Unforgettable Love", "Word of Honor", "Who Rules the World", "Love Between Fairy and Devil", "Meet Yourself", "Royal Nirvana",
      "Moon Lovers: Scarlet Heart Ryeo", "Love in the Moonlight", "Queen Seondeok", "The Princess' Man", "Jewel in the Palace", "Dong Yi", "Mr. Queen", "Empress Ki", "Moon Embracing the Sun", "The Red Sleeve",
      "Nodame Cantabile", "Hana Yori Dango", "1 Litre of Tears", "Good Morning Call", "Rich Man, Poor Woman", "You're My Pet", "My Boss, My Hero", "Zettai Kareshi", "Love Lasts Forever", "Alice in Borderland",
      "Marimar", "Pangako Sa’Yo", "Sana Maulit Muli", "Tayong Dalawa", "On the Wings of Love", "Forevermore", "Wildflower", "The Legal Wife", "Walang Hanggan", "The Killer Bride",
      "Kadenang Ginto", "Lobo", "Imortal", "La Luna Sangre", "Ang Probinsyano", "Mara Clara", "Maria Clara at Ibarra", "The General’s Daughter", "Dahil May Isang Ikaw", "Halik",
      "Gulong ng Palad", "Ikaw Lang Ang Iibigin", "Maging Sino Ka Man", "Ika-6 na Utos", "My Husband’s Lover", "Amaya", "Encantadia", "Mulawin", "Majika", "Sugo"
    ];

    const famousAnime = [
      "Naruto", "Naruto Shippuden", "Boruto: Naruto Next Generations", "One Piece", "Dragon Ball", "Dragon Ball Z", "Dragon Ball Super", "Attack on Titan", "Demon Slayer", "Jujutsu Kaisen",
      "My Hero Academia", "Hunter x Hunter", "Bleach", "Black Clover", "Fullmetal Alchemist: Brotherhood", "Death Note", "Tokyo Revengers", "Chainsaw Man", "Sword Art Online", "Re:Zero - Starting Life in Another World",
      "No Game No Life", "Code Geass", "Steins;Gate", "Neon Genesis Evangelion", "Cowboy Bebop", "Trigun", "Rurouni Kenshin", "Fairy Tail", "Blue Exorcist", "Noragami",
      "The Seven Deadly Sins", "One Punch Man", "Mob Psycho 100", "Dr. Stone", "The Rising of the Shield Hero", "That Time I Got Reincarnated as a Slime", "Overlord", "Fate/stay night: Unlimited Blade Works", "Fate/Zero", "Claymore",
      "Erased", "Your Lie in April", "Clannad", "Toradora!", "Kimi ni Todoke", "Fruits Basket", "Nana", "Ouran High School Host Club", "Lovely★Complex", "Rent-A-Girlfriend",
      "The Quintessential Quintuplets", "Horimiya", "Kaguya-sama: Love is War", "Oshi no Ko", "Spy x Family", "Welcome to Demon School! Iruma-kun", "Assassination Classroom", "Haikyuu!!", "Kuroko no Basket", "Yuri on Ice",
      "Inuyasha", "Spirited Away", "Howl’s Moving Castle", "My Neighbor Totoro", "Princess Mononoke", "Ponyo", "Weathering With You", "Your Name", "Vivy: Fluorite Eye’s Song", "The Garden of Words",
      "Parasyte", "Hellsing", "Devilman Crybaby", "Akame ga Kill!", "High School DxD", "Gantz", "Elfen Lied", "Mirai Nikki", "Higurashi no Naku Koro Ni", "Tokyo Ghoul",
      "Psycho-Pass", "Monster", "Vivy: Fluorite Eye's Song", "Made in Abyss", "The Promised Neverland", "Revolutionary Girl Utena", "Berserk", "Ghost in the Shell: Stand Alone Complex", "Serial Experiments Lain", "Texhnolyze",
      "Samurai Champloo", "The Great Pretender", "Baccano!", "Durarara!!", "Barakamon", "Mushoku Tensei", "Summertime Render", "Zom 100: Bucket List of the Dead", "Hyouka", "March Comes in Like a Lion"
    ];

    const famousCartoons = [
      "Tom and Jerry", "Scooby-Doo, Where Are You!", "Looney Tunes", "The Flintstones", "The Jetsons", "Popeye the Sailor", "Felix the Cat", "Mickey Mouse", "Donald Duck", "Goofy",
      "DuckTales", "Chip 'n Dale: Rescue Rangers", "Darkwing Duck", "TaleSpin", "Gargoyles", "The Simpsons", "Family Guy", "American Dad!", "Futurama", "King of the Hill",
      "The Powerpuff Girls", "Dexter’s Laboratory", "Johnny Bravo", "Ed, Edd n Eddy", "Courage the Cowardly Dog", "Codename: Kids Next Door", "Samurai Jack", "Teen Titans", "Justice League", "Batman: The Animated Series",
      "Superman: The Animated Series", "Static Shock", "X-Men: The Animated Series", "Spider-Man: The Animated Series", "Ben 10", "Ben 10: Alien Force", "The Amazing World of Gumball", "Regular Show", "Adventure Time", "Steven Universe",
      "Gravity Falls", "Rick and Morty", "BoJack Horseman", "The Boondocks", "South Park", "Beavis and Butt-Head", "Animaniacs", "Pinky and the Brain", "Tiny Toon Adventures", "Freakazoid!",
      "Avatar: The Last Airbender", "The Legend of Korra", "Voltron: Legendary Defender", "She-Ra and the Princesses of Power", "He-Man and the Masters of the Universe", "ThunderCats", "Teenage Mutant Ninja Turtles", "Inspector Gadget", "Transformers: Prime", "Beetlejuice",
      "The Mask: Animated Series", "The Real Ghostbusters", "Scooby-Doo! Mystery Incorporated", "The New Scooby-Doo Movies", "What's New, Scooby-Doo?", "SpongeBob SquarePants", "Rugrats", "Hey Arnold!", "Rocket Power", "The Wild Thornberrys",
      "Doug", "Rocko’s Modern Life", "CatDog", "As Told by Ginger", "The Fairly OddParents", "Danny Phantom", "Jimmy Neutron: Boy Genius", "My Life as a Teenage Robot", "The Loud House", "Big City Greens",
      "Phineas and Ferb", "Gravity Falls", "Recess", "Kim Possible", "Lilo & Stitch: The Series", "House of Mouse", "Chip 'n' Dale: Park Life", "The Emperor’s New School", "Fish Hooks", "Amphibia",
      "The Owl House", "Bluey", "Peppa Pig", "Shaun the Sheep", "Larva", "Oggy and the Cockroaches", "Zig & Sharko", "Mr. Bean: The Animated Series", "Pocoyo", "Oswald"
    ];
    
    
  
  export { 
    filipinoTVShows, 
    filipinoMovies, 
    filipinoIdiomsSayings, 
    ecosystem,
    animals,
    professions,
    places,
    collegeLife,
    famousAnime,
    famousCartoons,
    asianNovelas 
  };
  