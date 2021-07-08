(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{258:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("输出: 3")]),t._v(" "),a("p",[t._v('解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。')]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("输出: 1")]),t._v(" "),a("p",[t._v('解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。')]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("输出: 3")]),t._v(" "),a("p",[t._v('解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。')]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("输出: 3")]),t._v(" "),a("p",[t._v('解释: 因为无重复字符的最长子串是 "vdf"，所以其长度为 3。')]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("输出: 6")]),t._v(" "),a("p",[t._v('解释: 因为无重复字符的最长子串是 "sjrgap"，所以其长度为 6。')]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("输出: 3")]),t._v(" "),a("p",[t._v('解释: 因为无重复字符的最长子串是 "ab!"，所以其长度为 3。')]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("输出: 3")]),t._v(" "),a("p",[t._v('解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。')]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("输出: 4")]),t._v(" "),a("p",[t._v('解释: 因为无重复字符的最长子串是 "aslj"，所以其长度为 4。')]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("输出: 8")]),t._v(" "),a("p",[t._v('解释: 因为无重复字符的最长子串是 "fenpglqd"，所以其长度为 8。')]),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("关键在于在出现重复字符时，如何更新不重复字符的index")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._v(" "),a("h3",{attrs:{id:"点个star支持我一下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点个star支持我一下","aria-hidden":"true"}},[t._v("#")]),t._v(" 点个"),a("a",{attrs:{href:"https://github.com/OBKoro1/Brush_algorithm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Star"),a("OutboundLink")],1),t._v("支持我一下~")]),t._v(" "),a("comment-comment")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"无重复字符的最长子串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无重复字符的最长子串","aria-hidden":"true"}},[this._v("#")]),this._v(" 无重复字符的最长子串")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"难度：中等"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#难度：中等","aria-hidden":"true"}},[this._v("#")]),this._v(" 难度：中等")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"描述："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述：","aria-hidden":"true"}},[this._v("#")]),this._v(" 描述：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"样例："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样例：","aria-hidden":"true"}},[this._v("#")]),this._v(" 样例：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v('输入: "abcabcbb"')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v('输入: "bbbbb"')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v('输入: "pwwkew"')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v('输入: "dvdf"')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v('输入: "asjrgapa"')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v('输入: "aabaab!bb"')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v('输入: "abcb"')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v('输入: "asljlj"')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v('输入: "qwnfenpglqdq"')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"思路分析："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路分析：","aria-hidden":"true"}},[this._v("#")]),this._v(" 思路分析：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"代码模板："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码模板：","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码模板：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {string} s\n * @return {number}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("lengthOfLongestSubstring")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"想"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#想","aria-hidden":"true"}},[this._v("#")]),this._v(" 想")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一","aria-hidden":"true"}},[this._v("#")]),this._v(" 一")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"想-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#想-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 想")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"再"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#再","aria-hidden":"true"}},[this._v("#")]),this._v(" 再")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"看"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#看","aria-hidden":"true"}},[this._v("#")]),this._v(" 看")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#答","aria-hidden":"true"}},[this._v("#")]),this._v(" 答")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#案","aria-hidden":"true"}},[this._v("#")]),this._v(" 案")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"代码："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码：","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("用对象储存字符的位置, 出现重复字符时更新不重复字符的index。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("lengthOfLongestSubstring")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于储存字符出现的位置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最大值")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不重复字符的index")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前值是否在对象中存储过")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新上一次重复值的index")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// value + 1 跳过之前重复的字符")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// j: 之前不重复的index 重复字符 需要全部跳过")]),t._v("\n            j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每个字符都计算一下最长不重复值 保存最大值")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不重复最长长度 = 当前index - 上一次重复值的index + index从0开始 长度从1开始")]),t._v("\n        res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存/更新 字符串index")]),t._v("\n        obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("从左到右，一个字符一个字符搜索，看是否重复。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("lengthOfLongestSubstring")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不重复字符的index")]),t._v("\n        res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新无重复字符的长度")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查找：不重复字符-当前index之间 有没有出现当前字符")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新无重复字符的长度：当前index-不重复字符的index + 长度从1开始算")]),t._v("\n            res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新i = 不重复字符的index")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不重复字符的index = 原不重复的字符index + i-j中出现重复字符的index + 跳过该重复字符")]),t._v("\n            i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])])}],!1,null,null,null);e.options.__file="无重复字符的最长子串.md";s.default=e.exports}}]);