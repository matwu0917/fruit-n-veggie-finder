// Data for fruits and vegetables: color and image/GIF URL
const produceData = {
  apple: { color: "red or green", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80", type: "fruit" },
  banana: { color: "yellow", image: "https://images.unsplash.com/photo-1574226516831-e1dff420e8c8?auto=format&fit=crop&w=400&q=80", type: "fruit" },
  orange: { color: "orange", image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80", type: "fruit" },
  carrot: { color: "orange", image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80", type: "vegetable" },
  broccoli: { color: "green", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80", type: "vegetable" },
  tomato: { color: "red", image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80", type: "fruit" },
  cucumber: { color: "green", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", type: "vegetable" },
  potato: { color: "brown (outside), white/yellow (inside)", image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=400&q=80", type: "vegetable" },
  grape: { color: "purple or green", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80", type: "fruit" },
  lemon: { color: "yellow", image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80", type: "fruit" },
  spinach: { color: "green", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", type: "vegetable" },
  eggplant: { color: "purple", image: "https://images.unsplash.com/photo-1524594154908-eddc3b3a81ad?auto=format&fit=crop&w=400&q=80", type: "vegetable" }
  // ...add more as needed!
};

// Levenshtein distance function to measure similarity between two strings
function levenshtein(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

// Function to find the closest match in produceData
function findClosestProduce(input) {
  let closest = null;
  let minDistance = Infinity;
  for (const key in produceData) {
    const distance = levenshtein(input, key);
    if (distance < minDistance) {
      minDistance = distance;
      closest = key;
    }
  }
  // Accept as a suggestion if the distance is reasonable (e.g., 2 or less)
  return minDistance <= 2 ? closest : null;
}

function findColor() {
  const input = document.getElementById("fruitInput").value.trim().toLowerCase();
  const resultDiv = document.getElementById("result");
  if (!input) {
    resultDiv.innerHTML = "Please enter a fruit or vegetable name.";
    return;
  }
  let produce = produceData[input];
  if (produce) {
    resultDiv.innerHTML = `
      <div>
        The color of a <b>${input}</b> (${produce.type}) is: ${produce.color}.
      </div>
      <img src="${produce.image}" alt="${input}" style="margin-top:15px;max-width:200px;border-radius:12px;">
    `;
  } else {
    // Try to find the closest match
    const suggestion = findClosestProduce(input);
    if (suggestion) {
      const suggestedProduce = produceData[suggestion];
      resultDiv.innerHTML = `
        <div>
          Did you mean <b>${suggestion}</b>?<br>
          The color of a <b>${suggestion}</b> (${suggestedProduce.type}) is: ${suggestedProduce.color}.
        </div>
        <img src="${suggestedProduce.image}" alt="${suggestion}" style="margin-top:15px;max-width:200px;border-radius:12px;">
      `;
    } else {
      resultDiv.innerHTML = `Sorry, I don't know the color of "<b>${input}</b>".`;
    }
  }
}

// Allow pressing Enter to trigger the search
document.getElementById('fruitInput').addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    findColor();
  }
});