import React, { Component } from 'react';
import { Line, defaults } from 'react-chartjs-2';

interface LineGraphProps {
  queries: {}[];
  queryStatistics: number[];
}

class LineGraph extends Component<LineGraphProps> {
  constructor(props: LineGraphProps) {
    super(props);
  }

  // componentDidUpdate() {
  //   // const labelData = () => {};
  //   const execTimeArr: number[] = [];
  //   const runtimeData = (results: any) => {
  //     const newData: any = this.props.queries[execTime];
  //     execTimeArr.push(newData);
  //   };
  //   this.setState({
  //     queryStatistics: execTimeArr,
  //   });
  // }
  const execTime: any = 'Execution Time';
  
  render() {
    const { queries } = this.props;
  
    //  const labelData = () => queries.map((query) => query.queryLabel);
    // const runtimeData = () => queries.map((query) => queries);
    const data = {
      labels: ['Query1', 'Query2', 'Query3', 'Query4'],
      datasets: [
        {
          label: 'Runtime',
          fill: true,
          lineTension: 0.5,
          backgroundColor: '#399cff',
          borderColor: 'rgba(247,247,247,247)',
          borderWidth: 2,
          data: [queries.execution],
        },
      ],
    };

    return (
      <div id='line-graph' className='LineGraph'>
        console.log('here lies queries', queries)
        <Line
          data={data}
          options={{
            title: {
              display: true,
              text: 'QUERY REQUEST VS RUNTIME (ms)',
              fontSize: 16,
              fontColor: '#ffffff',
            },
            legend: {
              display: false,
            },
          }}
        />
      </div>
    );
  }
}

export default LineGraph;
