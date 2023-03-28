new Chart(document.getElementById("doughnut-chart"), {
  type: "doughnut",
  data: {
    labels: ["Bronx", "Brooklyn", "Manhattan", "Queens", "State Island"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [1446788, 2648452, 1638281, 2330295, 487155],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "New York City Population by Borough",
    },
  },
});

new Chart(document.getElementById("bar-chart-horizontal"), {
  type: "horizontalBar",
  data: {
    labels: ["Bronx", "Brooklyn", "Manhattan", "Queens", "State Island"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [1446788, 2648452, 1638281, 2330295, 487155],
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "New York City Population by Borough",
    },
  },
});
