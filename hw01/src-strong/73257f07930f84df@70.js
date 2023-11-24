function _1(md){return(
md`# HW01 strong baseline`
)}

function _apple(FileAttachment){return(
FileAttachment("data (1).csv").csv()
)}

function _data(apple)
{
  return apple.columns.slice(5).flatMap((columns) => apple.map((d) => ({
    index:d.序號,
    class:d.班級,
    id:d.學號,
    name: d.姓名,
    github: d.GitHub,
    columns,
    hw:d[columns]
  })));
}


function _selectedSeries(Inputs){return(
Inputs.checkbox(["作業一", "作業二", "作業三", "作業四", "作業五", "作業六", "作業七", "作業八", "作業九", "作業十"], {label: "作業", value: ["作業一", "作業二", "作業三", "作業四", "作業五", "作業六", "作業七", "作業八", "作業九", "作業十"]})
)}

function _chart(data,selectedSeries,d3)
{
  // 定義邊界大小，以及圖形的寬度和高度
  const margin = {top: 20, right: 12, bottom: 30, left: 20};
  const width = 950 - margin.left - margin.right;
  const height = 600 - margin.top - margin.bottom;

  // 取得所有的系列名稱（無重複）
  const keys = Array.from(new Set(data.map(d => d.columns)));
  
  // 根據選擇的系列過濾數據
  const filteredData = data.filter(d => selectedSeries.includes(d.columns));

  // 對過濾後的數據進行分組處理
  let grouped = Array.from(d3.group(filteredData, d => d.id), ([key, value]) => {
    return {id: key, ...Object.fromEntries(value.map(obj => [obj.columns, obj.hw]))};
  });

  // 定義堆疊方式並計算
  const stack = d3.stack().keys(keys);
  const columns = stack(grouped);
  
  // 定義x軸的比例尺
  const xScale = d3.scaleBand()
    .domain(data.map(d => d.id))
    .range([0, width])
    .padding(0.1);

  // 定義y軸的比例尺
  const yMax = d3.max(columns, serie => d3.max(serie, d => d[1]));
  const yScale = d3.scaleLinear()
      .domain([0, yMax]).nice()
      .range([height, 0]);

  // 定義顏色的比例尺
  const colorScale = d3.scaleOrdinal()
    .domain(keys)
    .range(["#778FA8","#ecf9ff","#7799a8","#daf4ff","#536b76","#F2D6AE", "#A58E80", "#91b5d0", "#e2f6ff", "#aaa99d"]);


  // 創建SVG元素
  const svg = d3.create("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

  // 在SVG中添加一個包含所有內容的g元素(對它進行一個平移變換，以便為接下來的元素提供一個留白的區域)
  const g = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // 繪製每一個系列的柱子
  columns.forEach((serie) => {
      let bars = g.append("g")
          .attr("fill", colorScale(serie.key))
          .selectAll("rect")
          .data(serie);
  
      bars.enter().append("rect")
          .attr("x", d => xScale(d.data.id))
          .attr("y", height)
          .attr("width", xScale.bandwidth())
          .attr("height", 0)
        //新增以下兩行可新增出過渡效果
          .transition() 
          .duration(1000) //改為0可以呈現無過度效果
        //新增到這兩行可新增出過渡效果
          .attr("y", d => yScale(d[1]))
          .attr("height", d => yScale(d[0]) - yScale(d[1]));
  });

  // 繪製x軸
  g.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xScale));

  // 繪製y軸
  g.append("g")
    .call(d3.axisLeft(yScale));

  return svg.node();
}


export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["data (1).csv", {url: new URL("./files/5ad0b1ec03a1f02fe5c6a962cf3939650e0315f27971d9e39dd4ae287561108d6fb94b145d37501a7eb59003c21c8f8985d4c697d89ad140e7786ef271fdbd71.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("apple")).define("apple", ["FileAttachment"], _apple);
  main.variable(observer("data")).define("data", ["apple"], _data);
  main.variable(observer("viewof selectedSeries")).define("viewof selectedSeries", ["Inputs"], _selectedSeries);
  main.variable(observer("selectedSeries")).define("selectedSeries", ["Generators", "viewof selectedSeries"], (G, _) => G.input(_));
  main.variable(observer("chart")).define("chart", ["data","selectedSeries","d3"], _chart);
  return main;
}
