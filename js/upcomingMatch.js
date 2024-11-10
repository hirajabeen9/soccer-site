document.addEventListener("DOMContentLoaded", () => {
    // Display matches on load
    displayMatches();

    // Attach event listeners for sorting and reversing
    document.getElementById("sort-button").addEventListener("click", sortMatches);
    document.getElementById("reverse-button").addEventListener("click", reverseMatches);
});

// Array of matches with date information
let matches = [
    { teams: "Team A vs Team B", date: "2024-11-15" },
    { teams: "Team C vs Team D", date: "2024-11-18" },
    { teams: "Team E vs Team F", date: "2024-11-12" },
    { teams: "Team G vs Team H", date: "2024-11-11" },
    { teams: "Team I vs Team J", date: "2024-11-10" },
    { teams: "Team K vs Team L", date: "2024-11-16" },
];

// Function to format date
function formatDate(dateStr) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
}

// Function to display matches
function displayMatches() {
    const matchList = document.getElementById("matches-list");
    matchList.innerHTML = "";
    matches.forEach((match) => {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `${match.teams} - ${formatDate(match.date)}`;
        matchList.appendChild(li);
    });
}

// Function to sort matches by date
function sortMatches() {
    matches.sort((a, b) => new Date(a.date) - new Date(b.date));
    displayMatches();
}

// Function to reverse match order
function reverseMatches() {
    matches.reverse();
    displayMatches();
}
