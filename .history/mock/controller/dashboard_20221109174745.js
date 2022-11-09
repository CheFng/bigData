const Mock = require('mockjs');

function rankData() {
  let obj = mock({
    'name|10': {
      东湖店: '@natural(20,2000)',
      江汉路店: '@natural(20,2000)',
      欢乐谷店: '@natural(20,2000)',
      楚河汉街店: '@natural(20,2000)',
      黄鹤楼店: '@natural(20,2000)',
      木兰草原店: '@natural(20,2000)',
      户部巷店: '@natural(20,2000)',
      长江大桥店: '@natural(20,2000)',
      汉口江滩店: '@natural(20,2000)',
      中山公园店: '@natural(20,2000)',
      光谷店: '@natural(20,2000)',
      晴川阁店: '@natural(20,2000)'
    }
  });
  let list = [];
  for (let i in obj.name) {
    list.push({
      area: i,
      value: obj.name[i]
    });
  }
  return list.sort((a, b) => {
    return b.value - a.value;
  });
}

export default [
  {
    url: '/dashboard/lineChart',
    type: 'post',
    response: config => {
      const { type } = config.body;
      return {
        data: {
          xData: xDataList[type],
          yData: lineData(type),
          lastData: lineData(type)
        },
        code: 200,
        message: '数据获取成功'
      };
    }
  },
  {
    url: '/dashboard/rankData',
    type: 'post',
    response: config => {
      return {
        data: rankData(),
        code: 200,
        message: '数据获取成功'
      };
    }
  },
  {
    url: '/dashboard/pieTypeData',
    type: 'post',
    response: config => {
      return {
        data: pieData(),
        code: 200,
        message: '数据获取成功'
      };
    }
  },
  {
    url: '/dashboard/hotSearchData',
    type: 'post',
    response: config => {
      return {
        data: hotData(),
        code: 200,
        message: '数据获取成功'
      };
    }
  },
  {
    url: '/dashboard/moreData',
    type: 'post',
    response: config => {
      return {
        data: moreData(),
        code: 200,
        message: '数据获取成功'
      };
    }
  }
];
