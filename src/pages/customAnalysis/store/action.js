/*
 * action 类型
 */
export const CHANGE_DATA = 'CHANGE_DATA';

/*
 * 其它的常量
 */

export const Options = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
}

/*
 * action 创建函数
 */

export function changeData(text) {
    return {
        type: CHANGE_DATA,
        text
    }
}