// Data: Replace with your 15 categories and words
const categories = {
    "Food & Drink": {
        easy: ["Apple", "Bread", "Milk", "Egg"],
        normal: ["Olive oil", "Spicy curry", "Grilled chicken"],
        hard: ["Sous-vide steak", "Artisanal cheese", "Gluten-free pasta"]
    },
    "Technology & Gadgets": {
        easy: ["Phone", "Computer", "Laptop"],
        normal: ["Smartphone app", "Wireless charger"],
        hard: ["Neural network", "MagSafe cable"]
    }
    // Add all 15 categories here...
};

// Show categories on load
window.onload = function() {
    const categoriesDiv = document.getElementById("categories");
    for (const category in categories) {
        const button = document.createElement("button");
        button.textContent = category;
        button.onclick = () => selectCategory(category);
        categoriesDiv.appendChild(button);
    }
};

// Show difficulty buttons for selected category
function selectCategory(category) {
    document.getElementById("categories").classList.add("hidden");
    document.getElementById("difficulty").classList.remove("hidden");
    document.getElementById("category-title").textContent = category;
    currentCategory = category;
}

// Show random word from selected difficulty
function selectDifficulty(difficulty) {
    const words = categories[currentCategory][difficulty];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById("word").textContent = randomWord;
    document.getElementById("difficulty").classList.add("hidden");
    document.getElementById("word-display").classList.remove("hidden");
}

// Return to category selection
function backToCategories() {
    document.getElementById("word-display").classList.add("hidden");
    document.getElementById("categories").classList.remove("hidden");
}
