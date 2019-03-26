google.load("visualization", "1", {packages: ["corechart"]});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['День', 'Настроение'],
        [24, -0.5],
        [25, 0.1],
        [26, 0.7]
    ]);
    var options = {
        title: 'Настроение в Екатеринбурге',
        hAxis: {title: 'День'},
        vAxis: {title: 'Уровень настроения'}
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('level_mood'));
    chart.draw(data, options);
}
