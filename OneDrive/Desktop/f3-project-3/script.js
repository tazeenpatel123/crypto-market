document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const sortMarketCapButton = document.getElementById("sortMarketCap");
  const sortPercentageChangeButton = document.getElementById(
    "sortPercentageChange"
  );
  const cryptoTableBody = document.getElementById("cryptoTableBody");
  let cryptoData = [];

  // Fetching data from API using async/await
  async function fetchDataUsingAsyncAwait() {
    const apiUrl =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      cryptoData = data;
      renderCryptoTable(cryptoData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function renderCryptoTable(data) {
    cryptoTableBody.innerHTML = "";
    data.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td><img src="${item.image}" alt="${
        item.name
      } Logo" class="image"></td>
                <td>${item.name}</td>
                <td>${item.symbol}</td>
                <td>${"$ " + item.current_price}</td>
                <td>${item.total_volume}</td>
                <td class="percentage">${item.price_change_percentage_24h+"%"}</td>
                <td>mkt cap: ${item.market_cap}</td>
            `;
      cryptoTableBody.appendChild(row);
    });
  }

  function searchAndFilter() {
    const searchValue = searchInput.value.toLowerCase();
    const filteredData = cryptoData.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchValue) ||
        item.symbol.toLowerCase().includes(searchValue)
      );
    });

    const sortedData = filteredData.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    renderCryptoTable(sortedData);
  }

  searchButton.addEventListener("click", searchAndFilter);

  searchInput.addEventListener("input", searchAndFilter);

  sortMarketCapButton.addEventListener("click", function () {
    const sortedData = [...cryptoData].sort(
      (a, b) => b.market_cap - a.market_cap
    );
    renderCryptoTable(sortedData);
  });

  sortPercentageChangeButton.addEventListener("click", function () {
    const sortedData = [...cryptoData].sort(
      (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
    );
    renderCryptoTable(sortedData);
  });

  fetchDataUsingAsyncAwait();
});
