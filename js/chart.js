const ctx = document.getElementById('deforestationChart').getContext('2d');

const data = {
  labels: [
    '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011',
    '2012', '2013', '2014', '2015', '2016', '2017', '2018',
    '2019', '2020', '2021', '2022', '2023'
  ],
  datasets: [{
    label: 'km² disboscati in Amazzonia',
    data: [
      27772, 19014, 14286, 11651, 12911, 7464, 7000, 6418,
      4571, 5891, 5012, 6207, 7989, 6947, 7536,
      10012, 10851, 13038, 11611, 7665
    ],
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 2,
    fill: true,
    tension: 0.3
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Superficie disboscata (km²)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Anno'
        }
      }
    }
  }
};

new Chart(ctx, config);
