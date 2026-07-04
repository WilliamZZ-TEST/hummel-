// hummel 品牌重新定位与增长策略报告 — 全部图表渲染（扩展版）
(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var accent3 = style.getPropertyValue('--accent3').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var bg = style.getPropertyValue('--bg').trim();
  var gold = '#9A6B1F';
  var palette = [accent, accent2, gold, accent3, muted];

  // 初始化 Mermaid
  if (window.mermaid) {
    mermaid.initialize({ startOnLoad: true, theme: 'neutral', securityLevel: 'loose' });
  }

  function baseGrid() {
    return { left: '3%', right: '5%', top: 50, bottom: 30, containLabel: true };
  }
  function axisStyle() {
    return {
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, fontSize: 11 },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } }
    };
  }

  // ========== 图1：2026 世界幸福指数排名 Top 10 ==========
  var el1 = document.getElementById('chart-happiness');
  if (el1) {
    var ch1 = echarts.init(el1, null, { renderer: 'svg' });
    var nordic = ['芬兰', '冰岛', '丹麦', '瑞典', '挪威'];
    var happinessData = [
      { name: '芬兰', value: 7.74 },
      { name: '冰岛', value: 7.68 },
      { name: '丹麦', value: 7.66 },
      { name: '哥斯达黎加', value: 7.61 },
      { name: '瑞典', value: 7.44 },
      { name: '挪威', value: 7.37 },
      { name: '荷兰', value: 7.33 },
      { name: '以色列', value: 7.28 },
      { name: '卢森堡', value: 7.24 },
      { name: '瑞士', value: 7.23 }
    ];
    ch1.setOption({
      animation: false,
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, appendToBody: true },
      grid: { left: '3%', right: '8%', top: 20, bottom: 10, containLabel: true },
      xAxis: { type: 'value', max: 8, ...axisStyle(), axisLine: { lineStyle: { color: ink } } },
      yAxis: {
        type: 'category', data: happinessData.map(function(d){ return d.name; }).reverse(),
        axisLine: { lineStyle: { color: ink } },
        axisLabel: { color: ink, fontSize: 12, fontWeight: 600 }
      },
      series: [{
        type: 'bar',
        data: happinessData.map(function(d) {
          return {
            value: d.value,
            itemStyle: { color: nordic.indexOf(d.name) >= 0 ? accent : accent2, borderRadius: [0,4,4,0] }
          };
        }).reverse(),
        barWidth: '55%',
        label: { show: true, position: 'right', color: ink, fontWeight: 700, formatter: '{c}' }
      }]
    });
    window.addEventListener('resize', function(){ ch1.resize(); });
  }

  // ========== 图2：哥本哈根自行车文化 ==========
  var el2 = document.getElementById('chart-cycling');
  if (el2) {
    var ch2 = echarts.init(el2, null, { renderer: 'svg' });
    ch2.setOption({
      animation: false,
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, appendToBody: true },
      grid: { left: '3%', right: '5%', top: 30, bottom: 20, containLabel: true },
      xAxis: { type: 'category', data: ['通勤/上学占比', '自行车拥有率', '全国出行占比', '骑行满意度'], ...axisStyle(), axisLine: { lineStyle: { color: ink } }, axisLabel: { color: ink, fontSize: 11, fontWeight: 600 } },
      yAxis: { type: 'value', max: 100, name: '%', ...axisStyle() },
      series: [{
        type: 'bar',
        data: [
          { value: 49, itemStyle: { color: accent } },
          { value: 90, itemStyle: { color: accent2 } },
          { value: 17, itemStyle: { color: accent3 } },
          { value: 97, itemStyle: { color: gold } }
        ],
        barWidth: '48%',
        label: { show: true, position: 'top', color: ink, fontWeight: 700, formatter: '{c}%' },
        markLine: {
          symbol: 'none', silent: true,
          data: [{ yAxis: 50, lineStyle: { color: muted, type: 'dashed' }, label: { formatter: '日均骑行 144 万公里', color: muted, fontSize: 10, position: 'insideEndTop' } }]
        }
      }]
    });
    window.addEventListener('resize', function(){ ch2.resize(); });
  }

  // ========== 图3：丹麦气候减排进展 ==========
  var el3 = document.getElementById('chart-climate');
  if (el3) {
    var ch3 = echarts.init(el3, null, { renderer: 'svg' });
    ch3.setOption({
      animation: false,
      tooltip: { trigger: 'axis', appendToBody: true },
      legend: { data: ['实际减排', '目标路径'], top: 5, textStyle: { color: ink } },
      grid: { left: '3%', right: '5%', top: 40, bottom: 20, containLabel: true },
      xAxis: { type: 'category', data: ['1990', '2005', '2023', '2030', '2050'], ...axisStyle(), axisLine: { lineStyle: { color: ink } } },
      yAxis: { type: 'value', name: '减排比例(%)', max: 100, ...axisStyle() },
      series: [
        {
          name: '实际减排', type: 'line', data: [0, 18, 44.7, null, null],
          itemStyle: { color: accent3 }, lineStyle: { width: 3 }, symbol: 'circle', symbolSize: 9,
          areaStyle: { color: accent3 + '33' },
          label: { show: true, color: accent3, fontWeight: 700, formatter: '{c}%' }
        },
        {
          name: '目标路径', type: 'line', data: [null, null, 44.7, 70, 100],
          itemStyle: { color: accent }, lineStyle: { width: 3, type: 'dashed' }, symbol: 'circle', symbolSize: 9,
          label: { show: true, color: accent, fontWeight: 700, formatter: '{c}%' }
        }
      ]
    });
    window.addEventListener('resize', function(){ ch3.resize(); });
  }

  // ========== 图4：北欧文化维度转化潜力评估 ==========
  var el4 = document.getElementById('chart-conversion');
  if (el4) {
    var ch4 = echarts.init(el4, null, { renderer: 'svg' });
    var dims = ['自行车文化', '慢生活/工作平衡', '哥本哈根生活方式', '可持续设计', 'Hygge', '丹麦设计', '斯堪的纳维亚时尚', '北欧建筑', '功能主义', '北欧极简主义', '丹麦家具'];
    var scores = [9, 9, 9, 9, 6, 6, 6, 6, 6, 4, 4];
    var tiers = ['高', '高', '高', '高', '中', '中', '中', '中', '中', '低-中', '低-中'];
    ch4.setOption({
      animation: false,
      tooltip: {
        trigger: 'axis', axisPointer: { type: 'shadow' }, appendToBody: true,
        formatter: function(p) {
          return p[0].name + '<br/>转化潜力：' + tiers[p[0].dataIndex] + '<br/>评分：' + p[0].value + '/10';
        }
      },
      grid: { left: '3%', right: '8%', top: 15, bottom: 10, containLabel: true },
      xAxis: { type: 'value', max: 10, ...axisStyle(), axisLine: { lineStyle: { color: ink } } },
      yAxis: {
        type: 'category', data: dims.slice().reverse(),
        axisLine: { lineStyle: { color: ink } },
        axisLabel: { color: ink, fontSize: 11, fontWeight: 600 }
      },
      series: [{
        type: 'bar',
        data: scores.map(function(s, i) {
          var c = s >= 9 ? accent3 : (s >= 6 ? accent2 : accent);
          return { value: s, itemStyle: { color: c, borderRadius: [0,4,4,0] } };
        }).reverse(),
        barWidth: '55%',
        label: { show: true, position: 'right', color: ink, fontWeight: 600, formatter: function(p) { return tiers[dims.length - 1 - p.dataIndex]; } }
      }]
    });
    window.addEventListener('resize', function(){ ch4.resize(); });
  }

  // ========== 图5：中国运动鞋服 vs 运动休闲市场规模 ==========
  var el5 = document.getElementById('chart-market');
  if (el5) {
    var ch5 = echarts.init(el5, null, { renderer: 'svg' });
    ch5.setOption({
      animation: false,
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, appendToBody: true },
      legend: { data: ['运动鞋服市场', '运动休闲市场', '鞋服增速(%)', '休闲增速(%)'], top: 5, textStyle: { color: ink, fontSize: 10 } },
      grid: baseGrid(),
      xAxis: { type: 'category', data: ['2023', '2024', '2025(预测)'], ...axisStyle(), axisLine: { lineStyle: { color: ink } } },
      yAxis: [
        { type: 'value', name: '亿元', ...axisStyle() },
        { type: 'value', name: '增速%', ...axisStyle(), splitLine: { show: false } }
      ],
      series: [
        { name: '运动鞋服市场', type: 'bar', data: [4928, 5425, 5989], itemStyle: { color: accent2, borderRadius: [4,4,0,0] }, barWidth: '22%', label: { show: true, position: 'top', color: ink, fontSize: 10, fontWeight: 700 } },
        { name: '运动休闲市场', type: 'bar', data: [3291, 3850, 4563], itemStyle: { color: accent3, borderRadius: [4,4,0,0] }, barWidth: '22%', label: { show: true, position: 'top', color: ink, fontSize: 10, fontWeight: 700 } },
        { name: '鞋服增速(%)', type: 'line', yAxisIndex: 1, data: [9.8, 10.1, 10.4], itemStyle: { color: accent }, lineStyle: { width: 2.5 }, symbol: 'circle', symbolSize: 7 },
        { name: '休闲增速(%)', type: 'line', yAxisIndex: 1, data: [null, 17.0, 18.5], itemStyle: { color: gold }, lineStyle: { width: 2.5, type: 'dashed' }, symbol: 'circle', symbolSize: 7 }
      ]
    });
    window.addEventListener('resize', function(){ ch5.resize(); });
  }

  // ========== 图6：四大细分趋势热度与增长指标 ==========
  var el6 = document.getElementById('chart-trends');
  if (el6) {
    var ch6 = echarts.init(el6, null, { renderer: 'svg' });
    ch6.setOption({
      animation: false,
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, appendToBody: true },
      legend: { data: ['增长/占比指标', 'hummel契合度(1-10)'], top: 5, textStyle: { color: ink, fontSize: 10 } },
      grid: baseGrid(),
      xAxis: { type: 'category', data: ['Citywalk\n热度增长', '复古跑鞋\nASICS增速', '薄底鞋\nPANE复购率', 'Clean Fit\n基础色占比'], ...axisStyle(), axisLine: { lineStyle: { color: ink } }, axisLabel: { color: ink, fontSize: 11, fontWeight: 600, interval: 0 } },
      yAxis: [
        { type: 'value', name: '百分比(%)', ...axisStyle() },
        { type: 'value', name: '契合度', max: 10, ...axisStyle(), splitLine: { show: false } }
      ],
      series: [
        {
          name: '增长/占比指标', type: 'bar',
          data: [
            { value: 320, itemStyle: { color: accent } },
            { value: 66.1, itemStyle: { color: accent2 } },
            { value: 40, itemStyle: { color: accent3 } },
            { value: 54, itemStyle: { color: gold } }
          ],
          barWidth: '45%',
          label: { show: true, position: 'top', color: ink, fontWeight: 700, formatter: '{c}%' }
        },
        {
          name: 'hummel契合度(1-10)', type: 'line', yAxisIndex: 1,
          data: [9, 8, 7, 8],
          itemStyle: { color: muted }, lineStyle: { width: 2, type: 'dashed' },
          symbol: 'diamond', symbolSize: 10,
          label: { show: true, color: muted, fontWeight: 700 }
        }
      ]
    });
    window.addEventListener('resize', function(){ ch6.resize(); });
  }

  // ========== 图7：小红书运动户外内容生态 ==========
  var el7 = document.getElementById('chart-xhs');
  if (el7) {
    var ch7 = echarts.init(el7, null, { renderer: 'svg' });
    ch7.setOption({
      animation: false,
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, appendToBody: true, formatter: function(p) { return p[0].name + '<br/>搜索增长：+' + p[0].value + '%'; } },
      grid: { left: '3%', right: '5%', top: 30, bottom: 20, containLabel: true },
      xAxis: { type: 'value', ...axisStyle(), axisLine: { lineStyle: { color: ink } } },
      yAxis: {
        type: 'category', data: ['疗愈相关词', '城市轻户外', '解压释放词', '轻量化徒步鞋', '超轻跑鞋'].reverse(),
        axisLine: { lineStyle: { color: ink } },
        axisLabel: { color: ink, fontSize: 11, fontWeight: 600 }
      },
      series: [{
        type: 'bar',
        data: [
          { value: 538, itemStyle: { color: accent } },
          { value: 126, itemStyle: { color: accent2 } },
          { value: 80, itemStyle: { color: accent3 } },
          { value: 90, itemStyle: { color: gold } },
          { value: 90, itemStyle: { color: muted } }
        ].reverse(),
        barWidth: '52%',
        label: { show: true, position: 'right', color: ink, fontWeight: 700, formatter: '+{c}%' }
      }],
      graphic: [
        { type: 'text', left: '3%', top: 3, style: { text: '阅读量 2968亿 · 搜索 2.3亿 · 3000+ 细分社群', fill: muted, fontSize: 11 } }
      ]
    });
    window.addEventListener('resize', function(){ ch7.resize(); });
  }

  // ========== 图8：九大竞品全球营收对比 ==========
  var el8 = document.getElementById('chart-comp-revenue');
  if (el8) {
    var ch8 = echarts.init(el8, null, { renderer: 'svg' });
    var compData = [
      { name: 'adidas', rev: 1947, growth: 13, orig: '€248亿' },
      { name: 'UNIQLO(迅销)', rev: 1598, growth: 9.6, orig: '¥3.4万亿' },
      { name: 'New Balance', rev: 667, growth: 19, orig: '$92亿' },
      { name: 'PUMA', rev: 573, growth: -8.1, orig: '€73亿' },
      { name: 'ASICS', rev: 381, growth: 19.5, orig: '¥8109亿' },
      { name: 'On昂跑', rev: 244, growth: 30, orig: 'CHF30亿' },
      { name: 'HOKA', rev: 181, growth: 24, orig: '$25亿' },
      { name: 'Salomon', rev: 145, growth: 35, orig: '$20亿' },
      { name: 'MUJI(中国)', rev: 66, growth: 18.3, orig: '¥1398亿' }
    ];
    ch8.setOption({
      animation: false,
      tooltip: {
        trigger: 'axis', axisPointer: { type: 'shadow' }, appendToBody: true,
        formatter: function(p) {
          var d = compData[p[0].dataIndex];
          return d.name + '<br/>换算营收：' + d.rev + ' 亿RMB<br/>原始营收：' + d.orig + '<br/>同比增长：' + (d.growth > 0 ? '+' : '') + d.growth + '%';
        }
      },
      grid: { left: '3%', right: '12%', top: 40, bottom: 20, containLabel: true },
      xAxis: { type: 'value', name: '亿元(人民币换算)', ...axisStyle(), axisLine: { lineStyle: { color: ink } } },
      yAxis: {
        type: 'category', data: compData.map(function(d){ return d.name; }).reverse(),
        axisLine: { lineStyle: { color: ink } },
        axisLabel: { color: ink, fontSize: 11, fontWeight: 600 }
      },
      series: [{
        type: 'bar',
        data: compData.map(function(d) {
          return {
            value: d.rev,
            itemStyle: { color: d.growth > 15 ? accent3 : (d.growth < 0 ? accent : accent2), borderRadius: [0,4,4,0] }
          };
        }).reverse(),
        barWidth: '55%',
        label: { show: true, position: 'right', color: ink, fontWeight: 700, formatter: '{c}亿' }
      }]
    });
    window.addEventListener('resize', function(){ ch8.resize(); });
  }

  // ========== 图9：竞品价格带分布与定位象限 ==========
  var el9 = document.getElementById('chart-comp-price');
  if (el9) {
    var ch9 = echarts.init(el9, null, { renderer: 'svg' });
    ch9.setOption({
      animation: false,
      tooltip: { appendToBody: true, formatter: function(p) { return p.data.name + '<br/>均价：¥' + p.data.value[0] + '<br/>设计调性：' + p.data.value[1] + '/10'; } },
      grid: { left: '5%', right: '5%', top: 30, bottom: 40, containLabel: true },
      xAxis: { type: 'value', name: '平均价格(元)', nameLocation: 'middle', nameGap: 30, max: 1400, ...axisStyle(), axisLine: { lineStyle: { color: ink } } },
      yAxis: { type: 'value', name: '设计调性(1=功能→10=生活方式)', nameLocation: 'middle', nameGap: 50, min: 0, max: 10, ...axisStyle() },
      series: [{
        type: 'scatter',
        symbolSize: function(d) { return d[2] || 20; },
        data: [
          { name: 'MUJI', value: [150, 9, 18] },
          { name: 'UNIQLO U', value: [199, 8, 18] },
          { name: 'hummel(目标)', value: [399, 9, 28] },
          { name: 'adidas', value: [400, 8, 30] },
          { name: 'ASICS', value: [500, 6, 22] },
          { name: 'PUMA', value: [600, 7, 22] },
          { name: 'New Balance', value: [800, 7, 26] },
          { name: 'On昂跑', value: [1000, 5, 22] },
          { name: 'HOKA', value: [1000, 5, 20] },
          { name: 'Salomon', value: [1200, 6, 24] }
        ],
        itemStyle: {
          color: function(p) { return p.data.name === 'hummel(目标)' ? accent : accent2 + 'AA'; },
          shadowBlur: 10, shadowColor: 'rgba(0,0,0,0.15)'
        },
        label: { show: true, formatter: function(p) { return p.data.name; }, color: ink, fontSize: 10, fontWeight: 600, position: 'top' }
      }]
    });
    window.addEventListener('resize', function(){ ch9.resize(); });
  }

  // ========== 图10：hummel 品牌资产强度评估 ==========
  var el10 = document.getElementById('chart-asset-radar');
  if (el10) {
    var ch10 = echarts.init(el10, null, { renderer: 'svg' });
    ch10.setOption({
      animation: false,
      tooltip: { appendToBody: true },
      radar: {
        indicator: [
          { name: '遗产 Heritage', max: 10 },
          { name: '视觉识别 Visual ID', max: 10 },
          { name: '品牌故事 Brand Story', max: 10 },
          { name: '产品设计 Product Design', max: 10 },
          { name: '文化共鸣 Cultural Resonance', max: 10 }
        ],
        radius: '62%', center: ['50%', '52%'],
        axisName: { color: ink, fontSize: 12 },
        splitLine: { lineStyle: { color: rule } },
        splitArea: { areaStyle: { color: [bg2, '#FBF9F4'] } },
        axisLine: { lineStyle: { color: rule } }
      },
      series: [{
        type: 'radar',
        data: [{
          value: [9, 9, 9, 7, 6],
          name: 'hummel 品牌资产',
          itemStyle: { color: accent },
          areaStyle: { color: accent + '44' },
          lineStyle: { width: 3 }
        }]
      }]
    });
    window.addEventListener('resize', function(){ ch10.resize(); });
  }

  // ========== 图11：蓝海价值曲线 ==========
  var el11 = document.getElementById('chart-blueocean');
  if (el11) {
    var ch11 = echarts.init(el11, null, { renderer: 'svg' });
    ch11.setOption({
      animation: false,
      tooltip: { trigger: 'axis', appendToBody: true },
      legend: { data: ['耐克/李宁(红海)', 'PANE(高端)', 'hummel(蓝海)'], top: 5, textStyle: { color: ink } },
      radar: {
        indicator: [
          { name: 'Logo/符号强度', max: 10 },
          { name: '专业竞技叙事', max: 10 },
          { name: '重资产渠道', max: 10 },
          { name: '北欧设计叙事', max: 10 },
          { name: '简约视觉质感', max: 10 },
          { name: '生活方式内容', max: 10 },
          { name: '可及价格带', max: 10 }
        ],
        radius: '62%', center: ['50%', '55%'],
        axisName: { color: ink, fontSize: 11 },
        splitLine: { lineStyle: { color: rule } },
        splitArea: { areaStyle: { color: [bg2, '#FBF9F4'] } },
        axisLine: { lineStyle: { color: rule } }
      },
      series: [{
        type: 'radar',
        data: [
          { value: [9, 9, 8, 2, 4, 3, 5], name: '耐克/李宁(红海)', itemStyle: { color: muted }, areaStyle: { color: muted + '33' }, lineStyle: { width: 2 } },
          { value: [2, 2, 4, 9, 9, 8, 3], name: 'PANE(高端)', itemStyle: { color: accent3 }, areaStyle: { color: accent3 + '33' }, lineStyle: { width: 2 } },
          { value: [3, 3, 3, 9, 9, 9, 9], name: 'hummel(蓝海)', itemStyle: { color: accent }, areaStyle: { color: accent + '44' }, lineStyle: { width: 3 } }
        ]
      }]
    });
    window.addEventListener('resize', function(){ ch11.resize(); });
  }

  // ========== 图12：三大社交平台能力维度对比 ==========
  var el12 = document.getElementById('chart-platform');
  if (el12) {
    var ch12 = echarts.init(el12, null, { renderer: 'svg' });
    ch12.setOption({
      animation: false,
      tooltip: { appendToBody: true },
      legend: { data: ['小红书', '抖音', 'B站'], top: 5, textStyle: { color: ink } },
      radar: {
        indicator: [
          { name: '目标客群契合度', max: 10 },
          { name: '种草/心智建立', max: 10 },
          { name: '直接转化能力', max: 10 },
          { name: '内容长尾价值', max: 10 },
          { name: '低成本启动友好', max: 10 },
          { name: '品牌资产沉淀', max: 10 }
        ],
        radius: '62%', center: ['50%', '55%'],
        axisName: { color: ink, fontSize: 11 },
        splitLine: { lineStyle: { color: rule } },
        splitArea: { areaStyle: { color: [bg2, '#FBF9F4'] } },
        axisLine: { lineStyle: { color: rule } }
      },
      series: [{
        type: 'radar',
        data: [
          { value: [9, 10, 6, 7, 9, 7], name: '小红书', itemStyle: { color: accent }, areaStyle: { color: accent + '33' }, lineStyle: { width: 2 } },
          { value: [7, 7, 10, 5, 6, 5], name: '抖音', itemStyle: { color: accent2 }, areaStyle: { color: accent2 + '33' }, lineStyle: { width: 2 } },
          { value: [8, 6, 3, 10, 7, 10], name: 'B站', itemStyle: { color: gold }, areaStyle: { color: gold + '33' }, lineStyle: { width: 2 } }
        ]
      }]
    });
    window.addEventListener('resize', function(){ ch12.resize(); });
  }

  // ========== 图13：年度营销预算分配 ==========
  var el13 = document.getElementById('chart-budget');
  if (el13) {
    var ch13 = echarts.init(el13, null, { renderer: 'svg' });
    ch13.setOption({
      animation: false,
      tooltip: { trigger: 'item', formatter: '{b}<br/>{d}%', appendToBody: true },
      legend: { bottom: 5, textStyle: { color: ink } },
      series: [{
        type: 'pie',
        radius: ['40%', '68%'],
        center: ['50%', '45%'],
        avoidLabelOverlap: true,
        itemStyle: { borderColor: bg2, borderWidth: 3 },
        label: { show: true, formatter: '{b}\n{d}%', color: ink, fontWeight: 600, fontSize: 12 },
        data: [
          { value: 40, name: '小红书种草', itemStyle: { color: accent } },
          { value: 35, name: '抖音(分销+千川)', itemStyle: { color: accent2 } },
          { value: 15, name: '天猫承接', itemStyle: { color: gold } },
          { value: 10, name: 'B站品牌建设', itemStyle: { color: accent3 } }
        ]
      }]
    });
    window.addEventListener('resize', function(){ ch13.resize(); });
  }

  // ========== 图14：KOL/KOC 分层矩阵 ==========
  var el14 = document.getElementById('chart-kol');
  if (el14) {
    var ch14 = echarts.init(el14, null, { renderer: 'svg' });
    ch14.setOption({
      animation: false,
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, appendToBody: true },
      legend: { data: ['数量(位)', '预算占比(%)'], top: 5, textStyle: { color: ink } },
      grid: baseGrid(),
      xAxis: { type: 'category', data: ['头部KOL', '腰部达人', '素人KOC'], ...axisStyle(), axisLine: { lineStyle: { color: ink } }, axisLabel: { color: ink, fontSize: 12, fontWeight: 600 } },
      yAxis: [
        { type: 'value', name: '数量(位)', ...axisStyle() },
        { type: 'value', name: '预算占比(%)', max: 100, ...axisStyle(), splitLine: { show: false } }
      ],
      series: [
        {
          name: '数量(位)', type: 'bar',
          data: [
            { value: 2, itemStyle: { color: accent } },
            { value: 25, itemStyle: { color: accent2 } },
            { value: 100, itemStyle: { color: accent3 } }
          ],
          barWidth: '35%',
          label: { show: true, position: 'top', color: ink, fontWeight: 700, formatter: '{c}位' }
        },
        {
          name: '预算占比(%)', type: 'line', yAxisIndex: 1,
          data: [35, 35, 30],
          itemStyle: { color: gold }, lineStyle: { width: 3 },
          symbol: 'circle', symbolSize: 9,
          label: { show: true, color: gold, fontWeight: 700, formatter: '{c}%' }
        }
      ]
    });
    window.addEventListener('resize', function(){ ch14.resize(); });
  }

  // ========== 图15：1000万目标渠道拆解 ==========
  var el15 = document.getElementById('chart-sales');
  if (el15) {
    var ch15 = echarts.init(el15, null, { renderer: 'svg' });
    ch15.setOption({
      animation: false,
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, appendToBody: true, formatter: function(p){ return p[0].name + '<br/>贡献：' + p[0].value + ' 万元'; } },
      grid: baseGrid(),
      xAxis: { type: 'category', data: ['抖音电商', '天猫/淘宝', '线下门店', '小红书外溢', '私域/其他'], ...axisStyle(), axisLine: { lineStyle: { color: ink } } },
      yAxis: { type: 'value', name: '万元', ...axisStyle() },
      series: [{
        type: 'bar',
        data: [
          { value: 350, itemStyle: { color: accent2 } },
          { value: 300, itemStyle: { color: accent2 } },
          { value: 150, itemStyle: { color: accent3 } },
          { value: 100, itemStyle: { color: accent } },
          { value: 100, itemStyle: { color: gold } }
        ],
        barWidth: '50%',
        label: { show: true, position: 'top', color: ink, fontWeight: 700, formatter: '{c}万' }
      }]
    });
    window.addEventListener('resize', function(){ ch15.resize(); });
  }

  // ========== 图16：销售转化漏斗 ==========
  var el16 = document.getElementById('chart-funnel');
  if (el16) {
    var ch16 = echarts.init(el16, null, { renderer: 'svg' });
    ch16.setOption({
      animation: false,
      tooltip: { trigger: 'item', appendToBody: true, formatter: function(p) {
        var rates = ['100%', '4.8% CTR', '3.84%', '0.48%', '0.175% CVR'];
        return p.name + '<br/>数量：' + p.value.toLocaleString() + '<br/>转化率：' + rates[p.dataIndex];
      }},
      legend: { bottom: 0, textStyle: { color: ink, fontSize: 10 } },
      series: [{
        type: 'funnel',
        left: '10%', right: '10%', top: 20, bottom: 40,
        minSize: '12%',
        gap: 3,
        label: { show: true, color: ink, fontWeight: 600, formatter: function(p) { return p.name + '\n' + p.value.toLocaleString(); } },
        itemStyle: { borderWidth: 0 },
        data: [
          { value: 10000000, name: '曝光', itemStyle: { color: accent2 } },
          { value: 480000, name: '点击', itemStyle: { color: accent3 } },
          { value: 384000, name: '商品详情', itemStyle: { color: gold } },
          { value: 48000, name: '加购物车', itemStyle: { color: accent } },
          { value: 8400, name: '成交订单', itemStyle: { color: accent } }
        ]
      }]
    });
    window.addEventListener('resize', function(){ ch16.resize(); });
  }

  // ========== 图17：三年品牌路线图 ==========
  var el17 = document.getElementById('chart-roadmap');
  if (el17) {
    var ch17 = echarts.init(el17, null, { renderer: 'svg' });
    ch17.setOption({
      animation: false,
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, appendToBody: true },
      legend: { data: ['目标GMV(万元)', '毛利率(%)'], top: 5, textStyle: { color: ink } },
      grid: baseGrid(),
      xAxis: { type: 'category', data: ['Year 1\n品牌基建', 'Year 2\n品类扩张', 'Year 3\n生态构建'], ...axisStyle(), axisLine: { lineStyle: { color: ink } }, axisLabel: { color: ink, fontSize: 12, fontWeight: 600 } },
      yAxis: [
        { type: 'value', name: '万元', ...axisStyle() },
        { type: 'value', name: '毛利率%', max: 60, ...axisStyle(), splitLine: { show: false } }
      ],
      series: [
        {
          name: '目标GMV(万元)', type: 'bar',
          data: [
            { value: 1000, itemStyle: { color: accent } },
            { value: 3000, itemStyle: { color: accent2 } },
            { value: 6000, itemStyle: { color: accent3 } }
          ],
          barWidth: '45%',
          label: { show: true, position: 'top', color: ink, fontWeight: 700, formatter: '{c}万' }
        },
        {
          name: '毛利率(%)', type: 'line', yAxisIndex: 1,
          data: [42, 45, 48],
          itemStyle: { color: gold }, lineStyle: { width: 3 },
          symbol: 'circle', symbolSize: 9,
          label: { show: true, color: gold, fontWeight: 700, formatter: '{c}%' }
        }
      ]
    });
    window.addEventListener('resize', function(){ ch17.resize(); });
  }

})();
