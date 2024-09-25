import ReactEcharts from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/lib/echarts';
import {GridComponent} from 'echarts/components';
import 'echarts/lib/chart/bar';
import {useMemo} from 'react';

echarts.use([GridComponent]);
const data = [
    {name: '1', value: 10}, 
    {name: '2', value: 20}, 
    {name: '3', value: 15}
];
const yAxisData = ['1', '2', '3']
export default function Age() {
    const option = useMemo(() => ({
        graphic: {
            elements: [
                {
                    type: 'text',
                    left: 'center',
                    top: '40%',
                    silent: true,
                    invisible: data.length,
                    style: {
                        font: '13px PingFang SC',
                        text: '暂无数据'
                    }
                }
            ]
        },
        'grid': {
            'top': 50,
            'left': 10,
            'right': 0,
            'width': '100%',
            'height': '145px',
            'containLabel': true
        },
        'xAxis': {
            show: false
        },
        'yAxis': {
            'type': 'category',
            'data': yAxisData,
            'splitLine': {'show': false},
            'axisLine': {'show': false},
            'axisTick': {'show': false},
            'axisLabel': {
                'textStyle': {
                    'color': '#848b99',
                    'fontSize': 14,
                    'align': 'right'
                },
                'margin': 14
            }
        },
        'series': [
            {
                'type': 'bar',
                data,
                'barWidth': 12,
                'smooth': true,
                'itemStyle': {'normal': {'color': '#2975e5'}}
            }
        ],
        tooltip: {
            valueFormatter: value => value
        }
    }), []);
    return (
        <>
            <ReactEcharts
                className="main-charts"
                echarts={echarts}
                lazyUpdate
                option={option}
            />
        </>
    );
}
