
const facts = [
    "At 20, I've already explored several mountain ranges and plan to visit many more.",
    "I find peace and inspiration in the mountains, making them my favorite getaway.",
    "Hiking in the mountains is my go-to activity for staying fit and connected with nature.",
    "I love capturing the breathtaking views of mountains through photography.",
    "The mountains have taught me resilience and the beauty of solitude.",
    "I’ve camped under the stars in some of the highest peaks in the world.",
    "The sound of a flowing mountain stream is my ultimate stress reliever.",
    "I believe the best way to explore mountains is by trekking off the beaten path.",
    "Every mountain hike teaches me something new about myself.",
    "I enjoy meeting fellow adventurers who share a passion for the mountains.",
    "My favorite season to explore the mountains is autumn when the colors are vibrant.",
    "I once spent an entire month living in a mountain cabin to disconnect and recharge.",
    "I’m fascinated by the unique wildlife and plants found in mountain ecosystems.",
    "The crisp, fresh air in the mountains is unmatched by any other place.",
    "I’ve always dreamed of climbing one of the Seven Summits.",
    "Whenever I feel overwhelmed, I revisit my mountain photographs for a sense of calm.",
    "Mountains symbolize strength and perseverance to me.",
    "My longest mountain trek lasted over two weeks and was an unforgettable experience.",
    "I love learning about the history and cultures of mountain-dwelling communities.",
    "Some of my closest friendships were formed on mountain expeditions.",
    "The thrill of watching a sunrise from a mountain peak is incomparable.",
    "I’ve encountered snowstorms and learned to adapt to extreme conditions in the mountains.",
    "The quiet of the mountains is the perfect escape from the hustle of daily life.",
    "I’ve collected souvenirs like rocks and postcards from every mountain I visit.",
    "One of my proudest achievements is conquering a summit after hours of tough climbing.",
    "The journey through mountain trails often matters more than reaching the peak.",
    "I’ve joined online communities of mountain enthusiasts to share experiences.",
    "I love discovering hidden waterfalls and streams while exploring mountain trails.",
    "Mountaineering has improved both my physical endurance and mental toughness.",
    "Every mountain holds its own unique charm and challenges.",
    "I find inspiration for my writing and artwork in the mountains.",
    "Winter hikes in snowy mountains are some of the most magical experiences.",
    "The call of distant peaks often fuels my adventurous spirit.",
    "I always carry a journal to document my mountain adventures.",
    "Sharing campfire stories with fellow hikers is one of my favorite pastimes.",
    "I've learned valuable survival skills from my time in the mountains.",
    "There’s a special kind of joy in watching clouds drift below you from a summit.",
    "I make it a point to leave no trace and preserve the beauty of mountain trails.",
    "The feeling of accomplishment after a challenging hike is indescribable.",
    "I dream of one day building a cabin in the mountains to call my own."
];

document.getElementById('generate-fact').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').textContent = facts[randomIndex];
});