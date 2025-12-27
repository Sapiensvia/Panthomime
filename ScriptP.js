// Data for all 15 categories and difficulty levels
const categories = {
    "Food & Drink": {
        easy: ["Apple", "Bread", "Milk", "Egg", "Rice", "Sugar", "Salt", "Water", "Tea", "Coffee", "Juice", "Cake", "Pizza", "Burger", "Salad", "Soup", "Ice cream", "Chocolate", "Cheese", "Butter", "Honey", "Jam", "Peanut butter", "French fries"],
        normal: ["Olive oil", "Spicy curry", "Grilled chicken", "Fresh herbs", "Dark chocolate", "Green tea", "Red wine", "White bread", "Whole grain", "Baked potatoes", "Fried rice", "Iced coffee", "Sushi roll", "Caesar salad", "BBQ ribs", "Mashed potatoes", "Chocolate cake", "Vanilla ice cream", "Black pepper", "Garlic bread", "Lemonade", "Breakfast cereal", "Vegetable stir-fry", "Fruit salad"],
        hard: ["Sous-vide steak", "Artisanal cheese", "Gluten-free pasta", "Cold-pressed juice", "Fair-trade coffee", "Organic spinach", "Balsamic vinegar", "Extra virgin olive oil", "Slow-cooked brisket", "Molecular gastronomy", "Farm-to-table dining", "Heirloom tomatoes", "Bone broth", "Matcha latte", "Chia pudding", "Quinoa bowl", "Kimchi fermented", "Truffle-infused oil", "Sourdough starter", "Acai berry smoothie", "Habanero hot sauce", "Gourmet cupcakes", "Vegan protein powder", "Deconstructed dessert"]
    },
    "Technology & Gadgets": {
        easy: ["Phone", "Computer", "Laptop", "Tablet", "Keyboard", "Mouse", "Screen", "Battery", "Charger", "USB drive", "Headphones", "Speaker", "Camera", "Printer", "Router", "Wi-Fi", "App", "Email", "Password", "Software", "Hardware", "Cloud", "Virus", "Bluetooth"],
        normal: ["Smartphone app", "Wireless charger", "Virtual reality", "Artificial intelligence", "Data encryption", "High-definition", "Touch screen", "Social media", "Streaming service", "Smartwatch", "Fitness tracker", "Gaming console", "3D printer", "Augmented reality", "Blockchain technology", "Quantum computing", "Internet of Things", "Machine learning", "Cybersecurity", "Biometric scanner", "Solar-powered", "Electric vehicle", "Drone footage", "Voice assistant"],
        hard: ["Neural network algorithms", "MagSafe cable", "OLED display", "Cryptocurrency mining", "Edge computing", "Haptic feedback", "LiDAR sensor", "5G network", "Quantum cryptography", "Natural language processing", "Autonomous vehicles", "Augmented reality glasses", "Solid-state drive", "Graphene battery", "Neural interface", "Deepfake detection", "Biometric authentication", "Nanotechnology applications", "Robotics process automation", "AI-driven analytics", "Decentralized finance", "Virtual private network", "Machine vision systems", "Cyber-physical systems"]
    },
    "Nature & Environment": {
        easy: ["Tree", "Flower", "River", "Mountain", "Ocean", "Forest", "Rain", "Sun", "Moon", "Sky", "Cloud", "Wind", "Snow", "Beach", "Desert", "Lake", "Grass", "Bird", "Fish", "Air", "Soil", "Rock", "Fire", "Earth"],
        normal: ["Climate change", "Global warming", "Renewable energy", "Solar panel", "Wind turbine", "Carbon footprint", "Endangered species", "Biodiversity", "Ecosystem", "Sustainable development", "Deforestation", "Ocean acidification", "Air pollution", "Water conservation", "Recycling program", "Greenhouse gases", "Natural disaster", "Wildfire", "Hurricane", "Drought", "Flood", "Coral reef", "Polar ice cap", "Urban sprawl"],
        hard: ["Anthropogenic climate change", "Carbon sequestration", "Keystone species", "Trophic cascade", "Eutrophication", "Microplastic pollution", "Algal bloom", "Permafrost thaw", "Desertification", "Invasive species", "Habitat fragmentation", "Ocean current patterns", "Atmospheric circulation", "Geothermal energy", "Hydrological cycle", "Ecological footprint", "Bioremediation", "Sustainable agriculture", "Circular economy", "Climate resilience", "Ecosystem services", "Environmental degradation", "Renewable resource management", "Carbon neutral city"]
    },
    "Business & Finance": {
        easy: ["Money", "Bank", "Job", "Salary", "Bill", "Cash", "Loan", "Debt", "Profit", "Loss", "Market", "Shop", "Price", "Sale", "Tax", "Budget", "Investment", "Stock", "Trade", "Customer", "Product", "Service", "Contract", "Income"],
        normal: ["Stock market", "Annual report", "Credit card", "Interest rate", "Supply chain", "Startup company", "Venture capital", "Cash flow", "Revenue stream", "Market share", "Mergers and acquisitions", "Corporate governance", "Financial statement", "Risk management", "Economic growth", "Inflation rate", "Unemployment rate", "Consumer demand", "Fiscal policy", "Monetary policy", "Trade deficit", "Foreign exchange", "Intellectual property", "Business model"],
        hard: ["Quantitative easing", "Derivative trading", "Hedge fund", "Private equity", "Initial public offering", "Corporate social responsibility", "Stakeholder capitalism", "Disruptive innovation", "Blue ocean strategy", "Porter’s five forces", "SWOT analysis", "Cost-benefit analysis", "Economies of scale", "Market segmentation", "Brand equity", "Supply chain resilience", "Circular business model", "Impact investing", "Behavioral economics", "Game theory", "Antitrust regulation", "Macroeconomic indicators", "Microfinance", "Financial inclusion"]
    },
    "Health & Medicine": {
        easy: ["Doctor", "Nurse", "Hospital", "Medicine", "Pill", "Pain", "Fever", "Cold", "Flu", "Cough", "Headache", "Broken bone", "Bandage", "Thermometer", "Vaccine", "Surgery", "Dentist", "Pharmacy", "Health", "Exercise", "Diet", "Sleep", "Stress", "Virus"],
        normal: ["Mental health", "Chronic illness", "Blood pressure", "Diabetes", "Cancer treatment", "Immune system", "Antibiotics", "Physical therapy", "Emergency room", "Medical insurance", "Clinical trial", "Preventive care", "Holistic medicine", "Telemedicine", "Pandemic", "Epidemic", "Quarantine", "Sanitizer", "Nutritional supplement", "Cardiovascular health", "Neurological disorder", "Respiratory system", "Digestive health", "Skin care"],
        hard: ["Neuroplasticity", "Epigenetics", "Pharmacokinetics", "Immunotherapy", "Genomic sequencing", "Personalized medicine", "Stem cell research", "Antimicrobial resistance", "Metabolic syndrome", "Autoimmune disease", "Cognitive behavioral therapy", "Psychoneuroimmunology", "Gut-brain axis", "Inflammatory response", "Oxidative stress", "Mitochondrial dysfunction", "Telomere shortening", "Placebo effect", "Evidence-based practice", "Public health policy", "Health disparities", "Social determinants of health", "One Health approach", "Precision oncology"]
    },
    "Travel & Transportation": {
        easy: ["Car", "Bus", "Train", "Plane", "Bike", "Road", "Map", "Ticket", "Hotel", "Suitcase", "Airport", "Station", "Taxi", "Luggage", "Passport", "Visa", "Tourist", "Journey", "Destination", "Flight", "Cruise", "Highway", "Traffic", "GPS"],
        normal: ["Public transport", "Round trip", "Travel agency", "Boarding pass", "First class", "Economy seat", "Layover", "Jet lag", "Backpacking", "Road trip", "Car rental", "Travel insurance", "Hotel reservation", "Sightseeing tour", "Local cuisine", "Cultural exchange", "Business trip", "Commute", "Rush hour", "Subway system", "Bicycle lane", "Pedestrian zone", "Scenic route", "Travel blog"],
        hard: ["Sustainable tourism", "Carbon offset flights", "High-speed rail network", "Autonomous vehicle fleet", "Urban mobility solutions", "Last-mile logistics", "Multimodal transportation", "Eco-friendly accommodations", "Digital nomad visa", "Overland expedition", "Cruise terminal operations", "Airport security protocols", "Travel restrictions", "Visa-free travel", "Cultural heritage tourism", "Adventure travel", "Luxury travel experiences", "Medical tourism", "Space tourism", "Smart city transportation", "Mobility as a Service (MaaS)", "Transportation infrastructure", "Travel technology innovations", "Geotourism"]
    },
    "Education & Learning": {
        easy: ["School", "Teacher", "Student", "Book", "Class", "Homework", "Exam", "Grade", "University", "College", "Lesson", "Test", "Library", "Notebook", "Pencil", "Desk", "Science", "Math", "History", "Art", "Language", "Degree", "Lecture", "Study"],
        normal: ["Distance learning", "Online course", "Homework assignment", "Standardized test", "Extracurricular activities", "Higher education", "Scholarship", "Student loan", "Academic research", "Teaching method", "Classroom management", "Educational technology", "Critical thinking", "Lifelong learning", "Vocational training", "Study abroad", "Academic integrity", "Curriculum development", "Special education", "Early childhood education", "STEM education", "Liberal arts", "Graduate school", "Professional development"],
        hard: ["Pedagogical innovation", "Competency-based education", "Neuroeducation", "Cognitive load theory", "Metacognition strategies", "Differentiated instruction", "Flipped classroom", "Project-based learning", "Multilingual education", "Inclusive education", "Digital literacy", "Open educational resources", "Blended learning", "Gamification in education", "Artificial intelligence in education", "Personalized learning", "Educational psychology", "Assessment literacy", "Culturally responsive teaching", "Global citizenship education", "Education policy reform", "Evidence-based teaching", "Social-emotional learning", "Experiential learning"]
    },
    "Work & Employment": {
        easy: ["Job", "Office", "Boss", "Coworker", "Salary", "Meeting", "Interview", "Resume", "Promotion", "Career", "Hours", "Break", "Uniform", "Task", "Deadline", "Overtime", "Contract", "Benefits", "Retirement", "Internship", "Part-time", "Full-time", "Remote work", "Teamwork"],
        normal: ["Job interview", "Performance review", "Work-life balance", "Professional network", "Career path", "Skill development", "Employee engagement", "Workplace culture", "Labor union", "Minimum wage", "Unemployment benefits", "Freelance work", "Gig economy", "Job satisfaction", "Office politics", "Corporate ladder", "Workplace diversity", "Leadership skills", "Time management", "Productivity tools", "Burnout", "Workplace safety", "Professional ethics", "Networking event"],
        hard: ["Organizational behavior", "Talent management", "Employee retention strategies", "Change management", "Agile methodology", "Remote collaboration tools", "Workplace automation", "Future of work", "Gig workforce regulations", "Psychological safety at work", "Inclusive hiring practices", "Corporate social responsibility", "Workplace well-being programs", "Digital transformation in HR", "Cross-cultural management", "Emotional intelligence in leadership", "Workplace innovation", "Job crafting", "Flexible work arrangements", "Workplace mental health", "Diversity and inclusion initiatives", "Labor market trends", "Economic inequality in employment", "Universal basic income"]
    },
    "Sports & Recreation": {
        easy: ["Ball", "Game", "Team", "Player", "Coach", "Field", "Court", "Goal", "Win", "Lose", "Run", "Jump", "Swim", "Bike", "Gym", "Yoga", "Soccer", "Basketball", "Tennis", "Golf", "Hiking", "Camping", "Fitness", "Medal"],
        normal: ["Football match", "Yoga class", "Tennis court", "Marathon training", "Team spirit", "Sportsmanship", "Personal trainer", "Fitness routine", "Outdoor adventure", "Extreme sports", "Olympic Games", "World Cup", "Sports injury", "Physical endurance", "Mental toughness", "Sports psychology", "Nutrition for athletes", "Sports equipment", "Fan culture", "Esports", "Recreational league", "Sports analytics", "Sports marketing", "Sports medicine"],
        hard: ["Biomechanics in sports", "Sports neuroscience", "Performance-enhancing drugs", "Concussion protocol", "Sports diplomacy", "Adaptive sports", "Sports governance", "Athlete branding", "Sports sponsorship", "Sports law", "Sports economics", "Sports and social change", "Sports technology innovations", "Sports and mental health", "Sports and gender equality", "Sports and climate change", "Sports and urban planning", "Sports tourism", "Sports and media rights", "Sports and nationalism", "Sports and human rights", "Sports and sustainability", "Sports and artificial intelligence", "Sports and virtual reality"]
    },
    "Arts & Entertainment": {
        easy: ["Movie", "Music", "Book", "Painting", "Theater", "Concert", "Dance", "Singer", "Actor", "Artist", "Gallery", "Museum", "Camera", "Film", "Song", "Band", "Play", "Poem", "Novel", "Sculpture", "Photography", "Festival", "Comedy", "Drama"],
        normal: ["Box office", "Streaming service", "Art gallery", "Live concert", "Film festival", "Music video", "Stage performance", "Public art", "Street art", "Classical music", "Jazz festival", "Indie film", "Virtual reality art", "Interactive installation", "Art therapy", "Cultural heritage", "Creative writing", "Art criticism", "Art history", "Performing arts", "Digital art", "Art market", "Art conservation", "Art education"],
        hard: ["Postmodern art", "Avant-garde cinema", "Experimental theater", "Multimedia performance", "Art and activism", "Art and technology", "Art and artificial intelligence", "Art and neuroscience", "Art and philosophy", "Art and politics", "Art and identity", "Art and globalization", "Art and sustainability", "Art and social justice", "Art and cognitive science", "Art and psychology", "Art and urban regeneration", "Art and memory", "Art and trauma", "Art and well-being", "Art and virtual reality", "Art and augmented reality", "Art and blockchain", "Art and cultural diplomacy"]
    },
    "Law & Governance": {
        easy: ["Law", "Police", "Court", "Judge", "Lawyer", "Crime", "Prison", "Rights", "Justice", "Constitution", "Government", "President", "Vote", "Election", "Citizen", "Tax", "Contract", "Legal", "Rule", "Order", "Freedom", "Equality", "Human rights", "Democracy"],
        normal: ["Supreme Court", "Legal advice", "Civil rights", "Criminal law", "International law", "Human rights law", "Environmental law", "Labor law", "Family law", "Immigration law", "Intellectual property", "Corporate law", "Public policy", "Social justice", "Rule of law", "Legal system", "Judicial review", "Legislative process", "Executive branch", "Local government", "Public administration", "Legal reform", "Legal ethics", "Legal aid"],
        hard: ["Constitutional law", "Administrative law", "Jurisprudence", "Comparative law", "Legal pluralism", "Legal anthropology", "Legal sociology", "Critical legal studies", "Feminist legal theory", "Legal realism", "Legal positivism", "Natural law", "Legal interpretation", "Legal reasoning", "Legal institutions", "Legal culture", "Legal globalization", "Legal and political theory", "Legal and economic analysis", "Legal and social change", "Legal and human rights", "Legal and environmental justice", "Legal and technology", "Legal and artificial intelligence"]
    },
    "Relationships & Social Life": {
        easy: ["Friend", "Family", "Love", "Marriage", "Parent", "Child", "Sibling", "Couple", "Date", "Party", "Gift", "Hug", "Kiss", "Smile", "Laugh", "Talk", "Share", "Trust", "Help", "Kindness", "Respect", "Apology", "Forgiveness", "Team"],
        normal: ["Close friend", "Family gathering", "Social media", "Romantic relationship", "Long-distance relationship", "Social support", "Emotional intelligence", "Conflict resolution", "Communication skills", "Social norms", "Cultural differences", "Social identity", "Social network", "Social capital", "Social exclusion", "Social integration", "Social mobility", "Social justice", "Social change", "Social movements", "Social cohesion", "Social inequality", "Social policy", "Social work"],
        hard: ["Interpersonal neurobiology", "Attachment theory", "Social cognition", "Social influence", "Social perception", "Social psychology", "Social neuroscience", "Social and emotional learning", "Social and cultural psychology", "Social and political psychology", "Social and economic psychology", "Social and environmental psychology", "Social and health psychology", "Social and developmental psychology", "Social and clinical psychology", "Social and organizational psychology", "Social and community psychology", "Social and cross-cultural psychology", "Social and evolutionary psychology", "Social and personality psychology", "Social and positive psychology", "Social and cognitive psychology", "Social and affective neuroscience", "Social and behavioral economics"]
    },
    "Clothing & Fashion": {
        easy: ["Shirt", "Pants", "Dress", "Shoes", "Hat", "Coat", "Sock", "Belt", "Scarf", "Gloves", "Jeans", "T-shirt", "Jacket", "Skirt", "Shorts", "Sweater", "Suit", "Tie", "Bag", "Watch", "Sunglasses", "Jewelry", "Perfume", "Makeup"],
        normal: ["Designer dress", "Winter coat", "High heels", "Casual wear", "Formal wear", "Streetwear", "Athleisure", "Sustainable fashion", "Fast fashion", "Vintage clothing", "Fashion trend", "Fashion show", "Fashion designer", "Fashion industry", "Fashion magazine", "Fashion blogger", "Fashion photography", "Fashion marketing", "Fashion retail", "Fashion and identity", "Fashion and culture", "Fashion and technology", "Fashion and sustainability", "Fashion and body image"],
        hard: ["Haute couture", "Fashion anthropology", "Fashion sociology", "Fashion psychology", "Fashion and gender", "Fashion and politics", "Fashion and globalization", "Fashion and consumer behavior", "Fashion and social media", "Fashion and artificial intelligence", "Fashion and virtual reality", "Fashion and augmented reality", "Fashion and blockchain", "Fashion and circular economy", "Fashion and ethical consumption", "Fashion and labor rights", "Fashion and environmental impact", "Fashion and cultural appropriation", "Fashion and body positivity", "Fashion and mental health", "Fashion and well-being", "Fashion and innovation", "Fashion and digital transformation", "Fashion and cultural heritage"]
    },
    "Housing & Domestic Life": {
        easy: ["House", "Apartment", "Room", "Kitchen", "Bathroom", "Bedroom", "Living room", "Furniture", "Bed", "Table", "Chair", "Sofa", "Lamp", "Curtain", "Carpet", "Garden", "Yard", "Garage", "Balcony", "Roof", "Wall", "Floor", "Door", "Window"],
        normal: ["Real estate", "Rental agreement", "Mortgage", "Home ownership", "Interior design", "Home improvement", "Smart home", "Energy efficiency", "Home security", "Home automation", "Home office", "Home theater", "Home gym", "Home garden", "Home cleaning", "Home organization", "Home maintenance", "Home insurance", "Home decor", "Home appliances", "Home cooking", "Home entertainment", "Home safety", "Home comfort"],
        hard: ["Sustainable architecture", "Passive house design", "Tiny house movement", "Co-housing communities", "Universal design", "Aging in place", "Home and urban planning", "Home and technology", "Home and energy efficiency", "Home and water conservation", "Home and waste management", "Home and indoor air quality", "Home and mental health", "Home and well-being", "Home and social isolation", "Home and community", "Home and cultural identity", "Home and economic inequality", "Home and gentrification", "Home and housing policy", "Home and smart cities", "Home and climate change", "Home and disaster resilience", "Home and future trends"]
    },
    "Abstract Concepts & Idioms": {
        easy: ["Time", "Space", "Idea", "Thought", "Dream", "Hope", "Fear", "Love", "Hate", "Joy", "Sadness", "Anger", "Truth", "Lie", "Success", "Failure", "Luck", "Chance", "Change", "Peace", "War", "Freedom", "Justice", "Equality"],
        normal: ["Strong argument", "Deep thought", "Hard evidence", "Break the ice", "Hit the books", "Piece of cake", "Cost an arm and a leg", "Under the weather", "Burn the midnight oil", "Bite the bullet", "Spill the beans", "Pull someone’s leg", "Barking up the wrong tree", "The ball is in your court", "Don’t cry over spilt milk", "Every cloud has a silver lining", "Kill two birds with one stone", "Let the cat out of the bag", "Once in a blue moon", "The early bird catches the worm", "Actions speak louder than words", "Don’t count your chickens before they hatch", "The grass is always greener on the other side", "You can’t judge a book by its cover"],
        hard: ["Cognitive dissonance", "Existential crisis", "Paradigm shift", "Epistemic injustice", "Ontological security", "Hermeneutics of suspicion", "Dialectical materialism", "Poststructuralism", "Deconstruction", "Hegemony", "Intersectionality", "Structural violence", "Symbolic interactionism", "Social construction of reality", "Cultural hegemony", "False consciousness", "Ideological state apparatuses", "The banality of evil", "The veil of ignorance", "The tragedy of the commons", "The butterfly effect", "The paradox of tolerance", "The social contract", "The panopticon"]
    }
};

let currentCategory = "";
let currentDifficulty = "";

window.onload = function() {
    const categoriesDiv = document.getElementById("categories");
    for (const category in categories) {
        const button = document.createElement("button");
        button.textContent = category;
        button.onclick = () => selectCategory(category);
        categoriesDiv.appendChild(button);
    }
};

function selectCategory(category) {
    currentCategory = category;
    document.getElementById("categories").classList.add("hidden");
    document.getElementById("difficulty-selector").classList.remove("hidden");
    document.getElementById("category-title").textContent = category;
}

function selectDifficulty(difficulty) {
    currentDifficulty = difficulty;
    document.getElementById("difficulty-selector").classList.add("hidden");
    document.getElementById("word-display").classList.remove("hidden");
    showNewWord();
}

function showNewWord() {
    const words = categories[currentCategory][currentDifficulty];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById("word").textContent = randomWord;
}

function backToCategories() {
    document.getElementById("word-display").classList.add("hidden");
    document.getElementById("categories").classList.remove("hidden");
}
