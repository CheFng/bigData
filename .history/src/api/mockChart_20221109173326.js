import request from "@/utils/request";
//这里用mock数据

/**
 *  获取销售种类    模拟数据，这里year属性就不用了
 *  @param {string}  abcode  城市code
 *  @param {number}  year    年份
 *  @returns {Array}
 */

export function selectTypeData(params) {
  return request.post("/bar/selectTypeData", params);
}

/**
 *  获取销售品牌  模拟数据，这里year属性就不用了
 *  @param {string}  abcode  城市code
 *  @param {number}  year    年份
 *  @returns {Array}
 */

export function selectWordData(params) {
  return request.post("/word/selectWordData", params);
}

/**
 *  获取客户年龄
 *  @param {string}  abcode  城市code
 *  @param {number}  year    年份
 *  @returns {Array}
 */

export function selectBoxChartData(params) {
  return request.post("/box/selectBoxData", params);
}

/**
 *  获取同行业销售额度对比对比
 *  @param {string}  abcode  城市code
 *  @param {number}  year    年份
 *  @returns {Array}
 */

export function selectOtherData(params) {
  return request.post("/line/selectOtherData", params);
}

/**
 *  获取公司市值
 *  @param {number}  year    年份
 *  @returns {number}
 */

export function selectYearValue(params) {
  return request.post("/liquid/selectYearValue", params);
}

/**
 * @description  获取card 排行榜
 * @param {string} type  类型
 * @param {currentKey}   销售或访问量等类型
 * @param {string} startTime 开始时间  可选
 * @param {string} endTime  结束时间  可选
 * @returns {Object}
 */

export function getRankShopData(data) {
  return request.post('/dashboard/rankData', data);
}
