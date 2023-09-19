function _1(md){return(
md`# HW2 Simple baseline (3pt)`
)}

function _observable_data3(__query,FileAttachment,invalidation){return(
__query(FileAttachment("Observable_data@3.csv"),{select:{columns:null},from:{table:"Observable_data"},filter:[],sort:[],slice:{from:null,to:null}},invalidation)
)}

function _3(observable_data3){return(
observable_data3
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

function _5(Plot,observable_data3){return(
Plot.plot({
  y: {grid: true, label: "count"},
  marks: [
    Plot.rectY(observable_data3, Plot.binX({y:"count"}, { x:"year", interval: 1 })),
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

function _7(Plot,plot1,observable_data3){return(
Plot.plot({
  /*---- 2. start ----*/
  marginTop: plot1.mt,
  marginRight: plot1.mr,
  marginBottom: plot1.mb,
  marginLeft: plot1.ml,
  /*---- 2. end ----*/
  
  y: {grid: true, label: "count"},
  marks: [
    Plot.rectY(observable_data3, Plot.binX({y:"count"}, { x:"year", interval:1, fill:"gender", tip: true })),
    Plot.gridY({ interval: 1, stroke: "white", strokeOpacity: 0.5 }),
    ]
})
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["Observable_data@3.csv", {url: new URL("./files/933d17de9687d3bd14d255af66b9f9f4167175776d0acab9b75cc40bbe1f72870581f63eb49e227a695b3cb46a8247505085e92ad7d4acd7a3cae0f0305b4d3c.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("observable_data3")).define("observable_data3", ["__query","FileAttachment","invalidation"], _observable_data3);
  main.variable(observer()).define(["observable_data3"], _3);
  main.variable(observer("data")).define("data", _data);
  main.variable(observer()).define(["Plot","observable_data3"], _5);
  main.variable(observer("viewof plot1")).define("viewof plot1", ["Inputs"], _plot1);
  main.variable(observer("plot1")).define("plot1", ["Generators", "viewof plot1"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","plot1","observable_data3"], _7);
  return main;
}
