import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


class Chart extends Component {
    state = {
        chartData:{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets:[
              {
                label:'Average Transaction',
                data:[
                    882732,
                    910502,
                    1077386,
                    1109308,
                    1193598,
                    1248859,
                    1318009
                ],
                backgroundColor:
                  'rgba(0, 128, 0, 0.7)'
              }
            ]
          }
    }
    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{}}
                />
            </div>
        );
    }
}

export default Chart;