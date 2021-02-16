let points = [
    // [0, 20],
    // [100, 250],
    // [260, 90],
    // [450, 40],
    // [450, 140]
    [100, 300],
    [250, 50],
    [400, 300],
    [100, 150],
    [400, 150],
    [100, 300]
];

let width = 600,
    height = 500;

//SE ESPECIFICA LAS CARACTERÍSTICAS DEL SVG QUE CONTENDRA EL GRÁFICO
let svg = d3.select("body").append("svg")
    .attr("width", width).attr("height", height)
    .style("background", "pink");

//SE DEFINE EL GENERADOR DE LINEAS DE D3
let line = d3.line();

svg.append("path").attr("d", line(points));