module.exports = [
  {
    url: "/bar/selectTypeData",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        data: [
          {
            name: "多媒体教室",
            value: (Math.random() * 1500).toFixed(2),
          },
          {
            name: "计算机",
            value: (Math.random() * 1500).toFixed(2),
          },
          {
            name: "普通教室",
            value: (Math.random() * 1500).toFixed(2),
          },
          {
            name: "平板",
            value: (Math.random() * 1500).toFixed(2),
          },
          {
            name: "图书",
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
    url: "/word/selectWordData",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        data: [
          {
            name: "双减政策",
            value: (Math.random() * 1000).toFixed(0),
          },
          {
            name: "教培机构转型",
            value: (Math.random() * 1000).toFixed(0),
          },
          {
            name: "美育进中考",
            value: (Math.random() * 1000).toFixed(0),
          },
          {
            name: "中考体育改革",
            value: (Math.random() * 1000).toFixed(0),
          },
          {
            name: " 家庭教育促进法",
            value: (Math.random() * 1000).toFixed(0),
          },
          {
            name: "职业教育",
            value: (Math.random() * 1000).toFixed(0),
          },
          {
            name: "教育扶贫",
            value: (Math.random() * 1000).toFixed(0),
          },
          {
            name: "双轨制",
            value: (Math.random() * 1000).toFixed(0),
          },
          {
            name: "停课不停学",
            value: (Math.random() * 1000).toFixed(0),
          },
          {
            name: "返校复课",
            value: (Math.random() * 1000).toFixed(0),
          },
          {
            name: "心理健康教育",
            value: (Math.random() * 1000).toFixed(0),
          },
          {
            name: "高考延期",
            value: (Math.random() * 1000).toFixed(0),
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
            name: "10岁及以下",
            value: parseInt(Math.random() * 1000),
          },
          {
            name: "11-15",
            value: parseInt(Math.random() * 1200),
          },
          {
            name: "16-20",
            value: parseInt(Math.random() * 1500),
          },
          {
            name: "21-25",
            value: parseInt(Math.random() * 1400),
          },
          {
            name: "26-30",
            value: parseInt(Math.random() * 1500),
          },
          {
            name: "30以上",
            value: parseInt(Math.random() * 1800),
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
