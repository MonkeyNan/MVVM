import san, {DataTypes} from 'san';

var MyApp = san.defineComponent({
    template: ''
    	+ '<div id="info" style="margin-top:50px;margin-left:100px;">'
    	+ 	'<div class="top">'
    	+ 		'<input type="text" placeholder="姓名（string）" value="{= list.name =}">'
    	+ 		'<input type="text" placeholder="年龄（number）" value="{= list.age =}">'
    	+ 		'<input type="text" placeholder="简介（string）" value="{= list.summary =}">'
    	+ 	'</div>'
    	+ 	'<div class="mid">'
    	+ 		'<span style="border:none;min-width:50px;">信息：</span><input type="button" value="移除信息" on-click="clear" style="width:70px;height:27px;">'
    	+ 	'</div>'
    	+ 	'<div class="buttom">'
    	+ 		'<p>姓名：<span>{{list.name}}</span></p>'
    	+ 		'<p>年龄：<span>{{list.age}}</span></p>'
    	+ 		'<p>简介：<span>{{list.summary}}</span></p>'
    	+ 	'</div>'
    	+ '</div>'
    ,

    // 没起作用
    dataTypes: {
    	name: DataTypes.string,
    	age: DataTypes.number,
    	summary: DataTypes.string
    },

    clear: function(list) {
    	this.data.set('list', null);
    }
});

var myApp = new MyApp();
myApp.attach(document.body);