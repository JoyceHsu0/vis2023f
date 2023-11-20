function _1(md){return(
md`# HW2 Strong baseline (2pt)`
)}

function _data(FileAttachment){return(
FileAttachment("data.json").json()
)}

function _sCounts(){return(
[]
)}

function _4(sCounts,data)
{
  sCounts.length = 0;
  for (var s=0; s<=11; s++) {
    sCounts.push({constellation:s, gender:"male", count:0});
    sCounts.push({constellation:s, gender:"female", count:0});   
  }
  data.forEach (x=> {
    var i = (x.Constellation)*2 + (x.Gender=="男" ? 0 : 1); 
    sCounts[i].count++;
  })
  return sCounts
}


function _constellationlist(){return(
[
  "牡羊座",
  "金牛座",
  "雙子座",
  "巨蟹座",
  "獅子座",
  "處女座",
  "天秤座",
  "天蠍座",
  "射手座",
  "摩羯座",
  "水瓶座",
  "雙魚座 "
]
)}

function _6(Plot,sCounts,constellationlist){return(
Plot.plot({
  grid: true,
  y: {
    grid: true,
    label: "count"
  },
  marks: [
    Plot.ruleY([0]),
    Plot.barY(sCounts, {
      x: "constellation",
      y: "count", 
      fill:"gender",
      tip:true,
      title: (d) =>
        `count: ${d.count} \nConstellation: ${constellationlist[d.constellation]}\ngender: ${d.gender}`
    }),
    Plot.axisX({
      tickFormat: d => {
        return constellationlist[d]; 
      },
    }),
    
  ]
})
)}

function _7(Plot,data,constellationlist){return(
Plot.plot({
  width:800,
  grid: true,
  x: { domain: [0, 12]},
  y: {grid: true, label: "count"},

  marks: [
    // 創建了一個直方圖，並將數據中的 value 屬性映射到 x 軸
    Plot.rectY(data, Plot.binX({y: "count"  }, {x: "Constellation", interval:1, fill:"Gender", tip: true,
       title: (d) =>
            `Constellation: ${constellationlist[d.Constellation]}
            \ngender: ${d.Gender}
            \nCount: `},)),
    Plot.axisX({
      tickFormat: d => {
        return constellationlist[d]; 
      },
    }),
    Plot.ruleY([0]),
    
  ]
})
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["data.json", {url: new URL("../data.json", import.meta.url), mimeType: "application/json", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("data")).define("data", ["FileAttachment"], _data);
  main.variable(observer("sCounts")).define("sCounts", _sCounts);
  main.variable(observer()).define(["sCounts","data"], _4);
  main.variable(observer("constellationlist")).define("constellationlist", _constellationlist);
  main.variable(observer()).define(["Plot","sCounts","constellationlist"], _6);
  main.variable(observer()).define(["Plot","data","constellationlist"], _7);
  return main;
}
