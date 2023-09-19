import define1 from "./ca3f573d4b28bb8a@9.js";

function _1(md){return(
md`# HW2 Simple baseline (3pt)`
)}

function _3(Plot,data){return(
Plot.plot({
  width:400,   
  y: {grid: true, label: "count"},
  marks: [
    Plot.rectY(data, Plot.binX({y:"count"}, { x:"year", interval: 1 })),
    Plot.gridY({ interval: 1, stroke: "white", strokeOpacity: 0.5 }),
  ]
})
)}

function _plot1(Inputs){return(
Inputs.form({
  mt:  Inputs.range([0, 100], {label: "marginTop", step: 1}),
  mr:  Inputs.range([0, 100], {label: "marginRight", step: 1}),
  mb:  Inputs.range([0, 100], {label: "marginBottom", step: 1}),
  ml:  Inputs.range([0, 100], {label: "marginLeft", step: 1}),
})
)}

function _5(Plot,plot1,data){return(
Plot.plot({

  width:400,
  /*---- 2. start ----*/
  marginTop: plot1.mt,
  marginRight: plot1.mr,
  marginBottom: plot1.mb,
  marginLeft: plot1.ml,
  /*---- 2. end ----*/
  
  y: {grid: true, label: "count"},
  marks: [
    Plot.rectY(data, Plot.binX({y:"count"}, { x:"year", interval:1, fill:"gender", tip: true })),
    Plot.gridY({ interval: 1, stroke: "white", strokeOpacity: 0.5 }),
    ]
})
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  const child1 = runtime.module(define1);
  main.import("data", child1);
  main.variable(observer()).define(["Plot","data"], _3);
  main.variable(observer("viewof plot1")).define("viewof plot1", ["Inputs"], _plot1);
  main.variable(observer("plot1")).define("plot1", ["Generators", "viewof plot1"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","plot1","data"], _5);
  return main;
}
