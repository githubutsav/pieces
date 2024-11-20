const facts = [
    "At 20, I've already explored several mountain ranges and plan to visit many more.",
    "I find peace and inspiration in the mountains, making them my favorite getaway.",
    "Hiking in the mountains is my go-to activity for staying fit and connected with nature.",
    "I love capturing the breathtaking views of mountains through photography.",
    "The mountains have taught me resilience and the beauty of solitude."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById('fact-display').textContent = randomFact;
});
