const Mock = require('mockjs');

function rankData() {
  let obj = Mock.mock({
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

module.exports = [
  {
    url: "/bar/selectTypeData",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        data: [
          {
            name: "电脑",
            value: (Math.random() * 1500).toFixed(2),
          },
          {
            name: "手机",
            value: (Math.random() * 1500).toFixed(2),
          },
          {
            name: "汽车",
            value: (Math.random() * 1500).toFixed(2),
          },
          {
            name: "空调",
            value: (Math.random() * 1500).toFixed(2),
          },
          {
            name: "冰箱",
            value: (Math.random() * 1500).toFixed(2),
          },
          {
            name: "电视",
            value: (Math.random() * 1500).toFixed(2),
          },
        ],
      };
    },
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
    url: "/word/selectWordData",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        data: [
          {
            name: "小米",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "联想",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "华为",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "格力",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "海尔",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "华硕",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "法拉利",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "苹果",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "三星",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "索尼",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "劳斯莱斯",
            value: (Math.random() * 1000).toFixed(2),
          },
          {
            name: "保时捷",
            value: (Math.random() * 1000).toFixed(2),
          },
        ],
      };
    },
  },
  {
    url: "/box/selectBoxData",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        data: [
          {
            name: "18岁以下",
            value: parseInt(Math.random() * 1200),
          },
          {
            name: "18-25",
            value: parseInt(Math.random() * 2000),
          },
          {
            name: "25-35",
            value: parseInt(Math.random() * 1800),
          },
          {
            name: "35-50",
            value: parseInt(Math.random() * 1700),
          },
          {
            name: "50-65",
            value: parseInt(Math.random() * 1500),
          },
          {
            name: "65以上",
            value: parseInt(Math.random() * 1400),
          },
        ],
      };
    },
  },
  {
    url: "/line/selectOtherData",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        data: [
          {
            name: "1月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "2月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "3月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "4月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "5月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "6月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "7月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "8月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "9月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "10月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "11月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
          {
            name: "12月",
            value: (Math.random() * 70 + 20).toFixed(2),
            other: (Math.random() * 50).toFixed(2),
          },
        ],
      };
    },
  },
  {
    url: "/liquid/selectYearValue",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        data: {
          value: (Math.random() * 5000 + 300).toFixed(1),
        },
      };
    },
  },
];
