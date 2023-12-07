function _1(md){return(
md`# Hw03 Strong`
)}

function _colorSet(){return(
Object({
  民主進步黨: [
    "#BFF7E5",
    "#93EEC7",
    "#6CE5A8",
    "#4DD68E",
    "#2DC46E",
    "#25A55C",
    "#19854C",
    "#0E6837"
  ],
  中國國民黨: [
    "#CDE6FC",
    "#A1C9F5",
    "#84BAEF",
    "#67A4EB",
    "#4A8FE7",
    "#3C79CF",
    "#1F4E9F",
    "#14438E"
  ],
  民國黨: [
    "#FEF9E6",
    "#FDECB3",
    "#FEDF7C",
    "#FACB34",
    "#F9BE01",
    "#C79801",
    "#957201",
    "#644C00"
  ],
  無黨籍: [
    "#D2D6D8",
    "#B0B5B9",
    "#8D959B",
    "#6B747C",
    "#48545D",
    "#3A434A",
    "#2B3238",
    "#1D2225"
  ]
})
)}

function _thresholdDomain(){return(
[40, 45, 50, 55, 60, 65, 70]
)}

function _bgColor(Inputs){return(
Inputs.color({ label: "background color", value: "#dde6ee" })
)}

function _strokeColor(Inputs){return(
Inputs.color({ label: "stroke color", value: "#FFFFFF" })
)}

function _strokeOpacity(Inputs){return(
Inputs.range([0, 1], {
  step: 0.01,
  label: "stroke opacity"
})
)}

function _taiwan(taiwanMap){return(
taiwanMap(800, 600, -0.0, -0.6, 8000)
)}

function _taiwanMap(d3,topojson,tw,DOM,bgColor,strokeColor,strokeOpacity,minidata){return(
(width, height, offsetX, offsetY, scale) => {
  offsetX = offsetX + 0.75;

  const bboxCenter = (bbox) => [
    (bbox[0] + bbox[2]) / 2 + offsetX,
    (bbox[1] + bbox[3]) / 2 + offsetY
  ];
  const projection = d3
    .geoMercator()
    .center(bboxCenter(topojson.bbox(tw)))
    .translate([width / 2, height / 2])
    .scale(scale);

  const path = d3.geoPath().projection(projection);

  const svg = d3
    .select(DOM.svg(width, height))
    .style("width", "auto")
    .style("height", "auto")
    .style("background-color", bgColor);

  const details = svg
    .append("g")
    .selectAll("path")
    .data(topojson.feature(tw, tw.objects.counties).features);

  svg
    .append("path")
    .datum(topojson.mesh(tw, tw.objects.counties, (a, b) => a !== b))
    .attr("fill", "none")
    .attr("stroke", strokeColor)
    .attr("stroke-linejoin", "round")
    .attr("stroke-width", 0.5)
    .attr("opacity", strokeOpacity)
    .attr("d", path);

  const maxValue = 42;
  const thresholds = d3.range(0, maxValue + 1);
  const colorRange = thresholds.map(value => d3.interpolateReds(value / maxValue));
  const thresholdScale = d3.scaleThreshold().domain(thresholds).range(colorRange);
  
  details
    .enter()
    .append("path")
    .attr("fill", (d) => {
      const foundData = minidata.find(
        (t) =>
          t.value === d.properties.COUNTYNAME ||
          t.value.replace("臺", "台") === d.properties.COUNTYNAME
      );
      return foundData ? thresholdScale(foundData.count) : thresholdScale(0);
    })
    .attr("stroke", "gray")
    .attr("d", path)
    .append("title")
    .text((d) => {
      const foundData = minidata.find(
        (t) =>
          t.value === d.properties.COUNTYNAME ||
          t.value.replace("臺", "台") === d.properties.COUNTYNAME
      );
      return `${d.properties.COUNTYNAME} ${foundData ? foundData.count : 0}人`;
    });
  

  svg.append("g");
 
  return svg.node();
}
)}

function _tw(d3){return(
d3.json("https://cdn.jsdelivr.net/npm/taiwan-atlas/towns-10t.json")
)}

function _coloredParty(colorSet){return(
Object.keys(colorSet).filter((d) => d !== "無黨籍")
)}

function _d3(require){return(
require("d3@5")
)}

function _topojson(require){return(
require("topojson-client@3")
)}

function _data(FileAttachment){return(
FileAttachment("UserData-1.json").json()
)}

function _LivePlace(data){return(
Object.keys(data[0])[0]
)}

function _LivePlace_column(data,LivePlace){return(
data.map(row => row[LivePlace])
)}

function _LivePlace_uniqueValues(LivePlace_column){return(
[...new Set(LivePlace_column)].sort()
)}

function _LivePlace_counts(LivePlace_uniqueValues,LivePlace_column){return(
LivePlace_uniqueValues.map(val => ({
  value: val,
  count: LivePlace_column.filter(v => v === val).length
}))
)}

function _minidata(LivePlace_counts){return(
LivePlace_counts.flatMap((item, index) => ([
  {
    value: item.value,
    count: item.count,
    series: 'LivePlace'
  }
]))
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["UserData-1.json", {url: new URL("./files/37a09ac7213b196f8dfc9f01c6e2cdf63bf5bf446fedded78b4ce6a9a636a2745ecacb45a6d689d3d21c8e215c76b37380cd8dbf847d839f753f6b8e4e0d4bed.json", import.meta.url), mimeType: "application/json", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("colorSet")).define("colorSet", _colorSet);
  main.variable(observer("thresholdDomain")).define("thresholdDomain", _thresholdDomain);
  main.variable(observer("viewof bgColor")).define("viewof bgColor", ["Inputs"], _bgColor);
  main.variable(observer("bgColor")).define("bgColor", ["Generators", "viewof bgColor"], (G, _) => G.input(_));
  main.variable(observer("viewof strokeColor")).define("viewof strokeColor", ["Inputs"], _strokeColor);
  main.variable(observer("strokeColor")).define("strokeColor", ["Generators", "viewof strokeColor"], (G, _) => G.input(_));
  main.variable(observer("viewof strokeOpacity")).define("viewof strokeOpacity", ["Inputs"], _strokeOpacity);
  main.variable(observer("strokeOpacity")).define("strokeOpacity", ["Generators", "viewof strokeOpacity"], (G, _) => G.input(_));
  main.variable(observer("taiwan")).define("taiwan", ["taiwanMap"], _taiwan);
  main.variable(observer("taiwanMap")).define("taiwanMap", ["d3","topojson","tw","DOM","bgColor","strokeColor","strokeOpacity","minidata"], _taiwanMap);
  main.variable(observer("tw")).define("tw", ["d3"], _tw);
  main.variable(observer("coloredParty")).define("coloredParty", ["colorSet"], _coloredParty);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("topojson")).define("topojson", ["require"], _topojson);
  main.variable(observer("data")).define("data", ["FileAttachment"], _data);
  main.variable(observer("LivePlace")).define("LivePlace", ["data"], _LivePlace);
  main.variable(observer("LivePlace_column")).define("LivePlace_column", ["data","LivePlace"], _LivePlace_column);
  main.variable(observer("LivePlace_uniqueValues")).define("LivePlace_uniqueValues", ["LivePlace_column"], _LivePlace_uniqueValues);
  main.variable(observer("LivePlace_counts")).define("LivePlace_counts", ["LivePlace_uniqueValues","LivePlace_column"], _LivePlace_counts);
  main.variable(observer("minidata")).define("minidata", ["LivePlace_counts"], _minidata);
  return main;
}
