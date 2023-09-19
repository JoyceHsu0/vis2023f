function _1(md){return(
md`# HW2 Simple baseline (3pt)`
)}

function _data(){return(
[{name:"a", year: 1997, sign:4, gender:"female"},
        {name:"#", year: 1997, sign:2, gender:"male"},
       {name:"b", year: 1998, sign:4, gender:"female"},
       {name:"c", year: 1998, sign:2, gender:"male"},
       {name:"d", year: 1998, sign:7, gender:"male"},
       {name:"e", year: 1999, sign:0, gender:"male"},
       {name:"f", year: 1999, sign:7, gender:"female"},
       {name:"g", year: 1999, sign:11, gender:"male"},
       {name:"h", year: 1999, sign:9, gender:"female"},
       {name:"i", year: 2000, sign:7, gender:"male"},
       {name:"j", year: 2000, sign:7, gender:"male"},
       {name:"k", year: 2000, sign:11, gender:"female"},
       {name:"l", year: 2000, sign:5, gender:"female"},
       {name:"m", year: 2000, sign:5, gender:"male"},
       {name:"n", year: 2000, sign:11, gender:"male"},
       {name:"o", year: 2000, sign:11, gender:"male"},
       {name:"p", year: 2000, sign:11, gender:"male"},
       {name:"q", year: 2001, sign:11, gender:"female"},
       {name:"@", year: 2001, sign:0, gender:"female"},
       {name:"r", year: 2001, sign:11, gender:"male"},
       {name:"s", year: 2001, sign:5, gender:"female"},
       {name:"t", year: 2001, sign:5, gender:"female"},
       {name:"u", year: 2001, sign:11, gender:"male"},
       {name:"v", year: 2001, sign:6, gender:"male"},
       {name:"w", year: 2001, sign:7, gender:"female"},
       {name:"x", year: 2001, sign:5, gender:"female"},
       {name:"y", year: 2001, sign:5, gender:"male"},
       {name:"z", year: 2001, sign:4, gender:"female"},
       {name:"!", year: 2002, sign:0, gender:"male"},
       {name:"$", year: 2002, sign:9, gender:"male"},]
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
  main.variable(observer("data")).define("data", _data);
  main.variable(observer()).define(["Plot","data"], _3);
  main.variable(observer("viewof plot1")).define("viewof plot1", ["Inputs"], _plot1);
  main.variable(observer("plot1")).define("plot1", ["Generators", "viewof plot1"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","plot1","data"], _5);
  return main;
}
