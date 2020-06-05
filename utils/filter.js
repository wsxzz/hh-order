module.exports = {
	//去重
	unique:function(arr){
		return Array.from(new Set(arr))
	},
	//隐藏元素
	hide:function(el){
		return Array.from(el).forEach(e => (e.style.display = 'none'))
	},
	//
	// const hide = (el) => Array.from(el).forEach(e => (e.style.display = 'none'))
}