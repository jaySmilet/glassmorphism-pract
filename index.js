// Import stylesheets
import './style.css';

// Write Javascript code!
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const root = am5.Root.new('chartDiv');

root.setThemes([am5themes_Animated.new(root)]);

let chart = root.container.children.push(
  am5percent.PieChart.new(root, {
    startAngle: 180,
    endAngle: 360,
    layout: root.verticalLayout,
    innerRadius: am5.percent(50),
  })
);

let series = chart.series.push(
  am5percent.PieSeries.new(root, {
    startAngle: 180,
    endAngle: 360,
    valueField: 'value',
    categoryField: 'category',
    alignLabels: false,
  })
);

series.states.create('hidden', {
  startAngle: 180,
  endAngle: 180,
});

series.slices.template.setAll({
  cornerRadius: 5,
});

series.ticks.template.setAll({
  forceHidden: true,
});

// Set data
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
series.data.setAll([
  { value: 10, category: 'One' },
  { value: 9, category: 'Two' },
  { value: 6, category: 'Three' },
  { value: 5, category: 'Four' },
  { value: 4, category: 'Five' },
  { value: 3, category: 'Six' },
  { value: 1, category: 'Seven' },
]);

series.appear(1000, 100);
