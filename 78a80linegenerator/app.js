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

//SE ESPECIFICAN COORDENADAS DE LOS PUNTOS
let data = [
    // { x: 100, y: 100 }, { x: 130, y: 260 }, { x: 300, y: 160 }, { x: 500, y: 250 }
    { point: 100 }, { point: 150 }, { point: 80 }, { point: 220 }, { point: 130 }
];
let width = 600,
    height = 500;

//SE ESPECIFICA LAS CARACTERÍSTICAS DEL SVG QUE CONTENDRA EL GRÁFICO
let svg = d3.select("body").append("svg")
    .attr("width", width).attr("height", height);

//SE DEFINE EL GENERADOR DE LINEAS DE D3
// let line = d3.line();
// svg.append("path").attr("d", line(points));

//SE DEFINE LÍNEA PARA PUNTOS DADAS LAS COORDENADAS
// let line = d3.line()
//     .x((d) => d.x)
//     .y((d) => d.y);

//SE DEFINE UNA LÍNEA CURVA DAOO LOS PUNTOS
let line = d3.line()
    .x((d) => d.point)
    .y((d, i) => (i + 1) * 50)
    .curve(d3.curveBundle);

svg.append("path").attr("d", line(data));