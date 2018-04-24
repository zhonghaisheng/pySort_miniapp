//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '国家通讯录',
    userInfo: {},
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    countrys: [
      "安哥拉",
      "阿富汗",
      "阿尔巴尼亚",
      "阿尔及利亚",
      "安道尔共和国",
      "安圭拉岛",
      "安提瓜和巴布达",
      "阿根廷",
      "亚美尼亚",
      "阿森松",
      "澳大利亚",
      "奥地利",
      "阿塞拜疆",
      "巴哈马",
      "巴林",
      "孟加拉国",
      "巴巴多斯",
      "白俄罗斯",
      "比利时",
      "伯利兹",
      "贝宁",
      "百慕大群岛",
      "玻利维亚",
      "博茨瓦纳",
      "巴西",
      "文莱",
      "保加利亚",
      "布基纳法索",
      "缅甸",
      "布隆迪",
      "喀麦隆",
      "加拿大",
      "开曼群岛",
      "中非共和国",
      "乍得",
      "智利",
      "中国",
      "哥伦比亚",
      "刚果",
      "库克群岛",
      "哥斯达黎加",
      "古巴",
      "塞浦路斯",
      "捷克",
      "丹麦",
      "吉布提",
      "多米尼加共和国",
      "厄瓜多尔",
      "埃及",
      "萨尔瓦多",
      "爱沙尼亚",
      "埃塞俄比亚",
      "斐济",
      "芬兰",
      "法国",
      "法属圭亚那",
      "加蓬",
      "冈比亚",
      "格鲁吉亚",
      "德国",
      "加纳",
      "直布罗陀",
      "希腊",
      "格林纳达",
      "关岛",
      "危地马拉",
      "几内亚",
      "圭亚那",
      "海地",
      "洪都拉斯",
      "香港",
      "匈牙利",
      "冰岛",
      "印度",
      "印度尼西亚",
      "伊朗",
      "伊拉克",
      "爱尔兰",
      "以色列",
      "意大利",
      "科特迪瓦",
      "牙买加",
      "日本",
      "约旦",
      "柬埔寨",
      "哈萨克斯坦",
      "肯尼亚",
      "韩国",
      "科威特",
      "吉尔吉斯坦",
      "老挝",
      "拉脱维亚",
      "黎巴嫩",
      "莱索托",
      "利比里亚",
      "利比亚",
      "列支敦士登",
      "立陶宛",
      "卢森堡",
      "澳门",
      "马达加斯加",
      "马拉维",
      "马来西亚",
      "马尔代夫",
      "马里",
      "马耳他",
      "马里亚那群岛",
      "马提尼克",
      "毛里求斯",
      "墨西哥",
      "摩尔多瓦",
      "摩纳哥",
      "蒙古",
      "蒙特塞拉特岛",
      "摩洛哥",
      "莫桑比克",
      "纳米比亚",
      "瑙鲁",
      "尼泊尔",
      "荷属安的列斯",
      "荷兰",
      "新西兰",
      "尼加拉瓜",
      "尼日尔",
      "尼日利亚",
      "朝鲜",
      "挪威",
      "阿曼",
      "巴基斯坦",
      "巴拿马",
      "巴布亚新几内亚",
      "巴拉圭",
      "秘鲁",
      "菲律宾",
      "波兰",
      "法属玻利尼西亚",
      "葡萄牙",
      "波多黎各",
      "卡塔尔",
      "留尼旺",
      "罗马尼亚",
      "俄罗斯",
      "圣卢西亚",
      "圣文森特岛",
      "东萨摩亚(美)",
      "西萨摩亚",
      "圣马力诺",
      "圣多美和普林西比",
      "沙特阿拉伯",
      "塞内加尔",
      "塞舌尔",
      "塞拉利昂",
      "新加坡",
      "斯洛伐克",
      "斯洛文尼亚",
      "所罗门群岛",
      "索马里",
      "南非",
      "西班牙",
      "斯里兰卡",
      "圣卢西亚",
      "圣文森特",
      "苏丹",
      "苏里南",
      "斯威士兰",
      "瑞典",
      "瑞士",
      "叙利亚",
      "台湾省",
      "塔吉克斯坦",
      "坦桑尼亚",
      "泰国",
      "多哥",
      "汤加",
      "特立尼达和多巴哥",
      "突尼斯",
      "土耳其",
      "土库曼斯坦",
      "乌干达",
      "乌克兰",
      "阿拉伯联合酋长国",
      "英国",
      "美国",
      "乌拉圭",
      "乌兹别克斯坦",
      "委内瑞拉",
      "越南",
      "也门",
      "南斯拉夫",
      "津巴布韦",
      "扎伊尔",
      "赞比亚"
    ],
    countryJson: [],
    activeIndex: 0,
    isTouching: false,
    currentChar: 'A',
    scrollTop: 0,
    scrollList: [],
    charHeight: 0
  },
  onLoad: function () {
    console.log('onLoad');
    //countrys
    var that = this;
    that.setData({
      countryJson: that.pySegSort(that.data.countrys)
    })
    var query = wx.createSelectorQuery();
    var _num = 1;
    query.selectAll('.country-item').boundingClientRect((res) => {
      //执行了两次，特殊处理执行一次即可
      if (_num == 1) {
        var _scrollList = [];
        res.forEach(function (rect) {
          _scrollList.push(rect.top);
        })
        that.setData({
          scrollList: _scrollList
        })
        _num++;
      } else {
        _num = null;
      }
    }).exec()
    query.select('.char-box').boundingClientRect((res) => {
      that.setData({
        charHeight: res.height / that.data.chars.length
      })
    }).exec()
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  // 通过字面量方式实现的函数each  
  each: function (object, callback) {
    var type = (function () {
      switch (object.constructor) {
        case Object:
          return 'Object';
          break;
        case Array:
          return 'Array';
          break;
        case NodeList:
          return 'NodeList';
          break;
        default:
          return 'null';
          break;
      }
    })();
    // 为数组或类数组时, 返回: index, value  
    if (type === 'Array' || type === 'NodeList') {
      // 由于存在类数组NodeList, 所以不能直接调用every方法  
      [].every.call(object, function (v, i) {
        return callback.call(v, i, v) === false ? false : true;
      });
    }
    // 为对象格式时,返回:key, value  
    else if (type === 'Object') {
      for (var i in object) {
        if (callback.call(object[i], i, object[i]) === false) {
          break;
        }
      }
    }
  },
  pySegSort: function (arr) {
    var Pinyin = require('../../utils/ChinesePY.js');
    if (!String.prototype.localeCompare)
      return null;

    var letters = this.data.chars.split('');

    var segs = [];
    var curr;
    var that = this;
    that.each(letters, function (i) {
      var _letter = this;
      curr = {
        letter: this,
        data: []
      };
      that.each(arr, function (i2) {
        if (Pinyin.Pinyin.GetHP(arr[i2]).toLocaleUpperCase()[0] == _letter.toString()) {
          curr.data.push(arr[i2]);
        }
      });
      if (curr.data.length) {
        segs.push(curr);
        curr.data.sort(function (a, b) {
          return a.localeCompare(b);
        });
      } else {
        curr.data.push('空');
        segs.push(curr);
      }
    });
    return segs;
  },
  onTouchStart: function (e) {
    var _index = e.target.dataset.index;
    this.setData({
      activeIndex: _index,
      isTouching: true,
      currentChar: this.data.chars[_index]
    })
    var char = this.data.chars[_index];
    this.gotoChar(char);
  },
  onTouchMove: function (e) {
    var that = this;
    var _index = Math.floor(e.touches[0].clientY / that.data.charHeight);
    if (_index < 0) {
      _index = 0;
    } else if (_index > that.data.chars.length - 1) {
      _index = that.data.chars.length - 1;
    }
    this.setData({
      activeIndex: _index,
      isTouching: true,
      currentChar: this.data.chars[_index]
    })
    this.gotoChar(this.data.activeIndex);
  },
  onTouchEnd: function (e) {
    this.setData({
      isTouching: false
    })
  },
  gotoChar: function (char) {
    var that = this;
    var query = wx.createSelectorQuery().in(this);
    query.select('.country-list').boundingClientRect((res) => {
      that.setData({
        scrollTop: that.data.scrollList[that.data.activeIndex]
      })
    }).exec()
  },
  scroll: function (e) {
    if (!this.data.isTouching) {
      for (var i = 0, len = this.data.scrollList.length; i < len; i++) {
        if (e.detail.scrollTop - this.data.scrollList[i] >= -10 && e.detail.scrollTop - this.data.scrollList[i + 1] < -10) {
          this.setData({
            activeIndex: i
          })
          break;
        }
      }
    }
  }
})
