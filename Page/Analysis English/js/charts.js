!(function(MainApp) {
    "use strict";

    var usageOverview = {
        labels: [
            "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand", "Farvardin", "Ordibehesht", "Khordad",
        ],
        dataUnit: 'Score',
        lineTension: .4,
        datasets: [{
            fill: true,
            label: "Word Used",
            data: [
                19.5, 11, 19.5, 18, 8, 20, 13, 15, 20,
            ],
            color: "rgb(37,99,235)",
            background: "rgba(37,99,235, 0.5)",
        }]
    };
    MainApp.Chart.Line = function(selector, set_data) {
        let elm = document.querySelectorAll(selector);
        elm.forEach(item => {
            let _get_data = (typeof set_data === 'undefined') ? eval(item.id) : set_data;
            const selectCanvas = document.getElementById(item.id).getContext("2d");

            const chart_data = [];
            for (let i = 0; i < _get_data.datasets.length; i++) {
                chart_data.push({
                    label: _get_data.datasets[i].label,
                    tension: _get_data.lineTension,
                    backgroundColor: _get_data.datasets[i].background,
                    fill: true,
                    borderWidth: 2,
                    borderDash: _get_data.datasets[i].dash,
                    borderColor: _get_data.datasets[i].color,
                    pointBorderColor: "transparent",
                    pointBackgroundColor: "transparent",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: _get_data.datasets[i].color,
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 4,
                    data: _get_data.datasets[i].data,
                });
            }
            const chart = new Chart(selectCanvas, {
                type: 'line',
                data: {
                    labels: _get_data.labels,
                    datasets: chart_data,
                },
                options: {
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            enabled: true,
                            displayColors: false,
                            callbacks: {
                                label: function(context) {
                                    return `${context.parsed.y} ${_get_data.dataUnit}`;
                                },
                            },
                            backgroundColor: "rgb(30 41 59)",
                            borderColor: "rgb(30 41 59)",
                            borderWidth: 2,
                            titleFont: {
                                size: 13,
                            },
                            titleColor: '#6783b8',
                            titleMarginBottom: 6,
                            bodyColor: '#9eaecf',
                            bodyFont: {
                                size: 12
                            },
                            bodySpacing: 4,
                            padding: 10,
                            footerMarginTop: 0,
                            displayColors: false
                        },
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            display: true,
                            beginAtZero: true,
                            ticks: {
                                color: "rgb(100 116 139)",
                                font: {
                                    size: "11px",
                                },
                                padding: 5,
                            },
                            grid: {
                                color: "rgb(226,232,240,.5)",
                                tickLength: 0,
                            },
                        },
                        x: {
                            display: true,
                            ticks: {
                                color: "rgb(100 116 139)",
                                font: {
                                    size: "9px",
                                },
                                source: "auto",
                                padding: 5,
                                reverse: MainApp.State.isRTL
                            },
                            grid: {
                                color: "transparent",
                                tickMarkLength: 0,
                                zeroLineColor: "transparent",
                            }
                        }
                    }
                }
            });
        })
    }

    MainApp.Chart.init = function() {
        MainApp.Chart.Line('.line-chart');
    }
    MainApp.docReady(MainApp.Chart.init);

})(MainApp);