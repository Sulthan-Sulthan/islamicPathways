
// search animation 
  const searchBar = document.getElementById("search-input");
  const placeholders = ["Search eg: Kahf", "Search eg: Dukhan", "Search eg:Fathiha", "Search eg:Baqara", "Search eg:Anfal"];
  let i = 0;

  setInterval(() => {
    searchBar.setAttribute("placeholder", placeholders[i]);
    i = (i + 1) % placeholders.length;
  }, 2000);

function handleSearch() {
  const searchInput = document.getElementById("search-input");
  const searchValue = searchInput.value.trim().toLowerCase();

  // Filter the surahs based on the partial search value
  const filteredSurahs = surahs.filter((surah) =>
    surah.toLowerCase().includes(searchValue)
  );

  // Display the filtered surahs or a message if no surahs match the search
  const surahList = document.getElementById("surahList");
  surahList.innerHTML = ""; // Clear previous results

  if (filteredSurahs.length > 0) {
    filteredSurahs.forEach((surah) => {
      const li = document.createElement("li");
      li.textContent = surah;
      surahList.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "No matching surahs found.";
    surahList.appendChild(li);
  }
}

