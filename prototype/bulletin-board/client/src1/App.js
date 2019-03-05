import React, {Component} from 'react';
import FusionCharts from 'fusioncharts';
import ReactFusioncharts from 'react-fusioncharts';
import Chart from 'fusioncharts/fusioncharts.zoomscatter';
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

// import dataCategories from './dataSource/categories.json';
import dataChart from './dataSource/chart.json';
import dataSet1 from './dataSource/dataset1.json';
import dataSet2 from './dataSource/dataset2.json';

// this method shows errors when deploy (but not on other chart type???)
// ReactFusioncharts.fcRoot(FusionCharts, Chart, CandyTheme);

// this method deploys the chart but does not define theme with it (theme can be copied and pasted in json format)
Chart(FusionCharts);

const dataSource = {
    "chart": dataChart,
    // "categories": dataCategories,
    "dataset": [
        {
            "seriesname": "Annual Mean",
            "drawLine": true,
            "color": "009900",
            "anchorsides": "3",
            "anchorradius": "3",
            "anchorbgcolor": "D5FFD5",
            // "showRegressionLine": true,
            "data": dataSet1
        },
        {
            "seriesname": "Lowess smoothing",
            "drawLine": true,
            "color": "0000FF",
            "anchorsides": "3",
            "anchorradius": "3",
            "anchorbgcolor": "C6C6FF",
            "data": dataSet2
        }
    ],
    // "vtrendlines": [
    //     {
    //         "line": [
    //             {
    //                 "startvalue": "20",
    //                 "endvalue": "65",
    //                 "alpha": "5",
    //                 "color": "00FF00"
    //             },
    //             {
    //                 "startvalue": "65",
    //                 "endvalue": "75",
    //                 "alpha": "15",
    //                 "color": "FFFF00"
    //             },
    //             {
    //                 "startvalue": "75",
    //                 "endvalue": "100",
    //                 "alpha": "15",
    //                 "color": "FF0000"
    //             }
    //         ]
    //     }
    // ],
}

class ZoomScatter extends Component {
   render() {
      return (
      <ReactFusioncharts
         type = "zoomscatter"
         width = '100%'
         height = '30%'
         dataFormat = "json"
         dataSource = {dataSource} />
      );
   }
}

export default ZoomScatter;
