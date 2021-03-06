//start表格数据获取
setTable($('#start-table'),'/problem/stage/1',15);
//practice表格数据获取
setTable($('#practice-table'),'/problem/stage/1',15);
//master表格数据获取
setTable($('#master-table'),'/problem/stage/1',15);
//获取目录下题目
var $cate = $("#cate-table");
setTable($cate, '/problem/catelog/' + $cate.attr("data-id"), 15);
//获取用户判题记录
setTable($("#submit-table"),"/judge/list",40);
//获取用户排名
setTableClient($("#rank-table"),"/static/json/rank.json",20);



//表格数据获取
function setTable(obj,url,pageSize) {
  obj.bootstrapTable({
    url: projectName+url,//这里配置请求链接
    method: 'get',
    cache: true,					   //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
    pagination: true,				   //是否显示分页（*）
    queryParams: queryParams,//传递参数（*）
    sidePagination: 'server',		   //分页方式：client客户端分页，server服务端分页（*）
    search: !0,
    striped: true,
    showRefresh: !0,
    pageNumber:1,					   //初始化加载第一页，默认第一页
    pageSize:pageSize,
    pageList:[15, 25, 50, 100],
    showColumns: !0,
    iconSize: 'outline',
    iconsPrefix:'fa',   //图标前缀
    icons: {refresh: 'fa-refresh', columns: 'fa-th-list'},
    undefinedText:'-_-',
    uniqueId: 'id'
  });
}
//表格数据获取,获取本地json
function setTableClient(obj,url,pageSize) {
  obj.bootstrapTable({
    url: projectName+url,//这里配置请求链接
    method: 'get',
    cache: true,					   //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
    pagination: true,				   //是否显示分页（*）
    queryParams: queryParams,//传递参数（*）
    sidePagination: 'client',	   //分页方式：client客户端分页，server服务端分页（*）
    search: !0,
    striped: true,
    showRefresh: !0,
    pageNumber:1,					   //初始化加载第一页，默认第一页
    pageSize:pageSize,
    pageList:[20, 30, 50, 100],
    showColumns: !0,
    iconSize: 'outline',
    iconsPrefix:'fa',   //图标前缀
    icons: {refresh: 'fa-refresh', columns: 'fa-th-list'},
    undefinedText:'-_-',
    uniqueId: 'id'
  });
}


function queryParams(params) {
  return {
    limit:params.limit,
    offset:params.offset,
    order:params.order,
    ordername:params.sort,
    search:params.search
  };
}

//设置内存显示
function setMemory(value, row, index) {
  return [
    '<div>',
    '<span>' + toDecimal(value/1000) + '</span>',
    '</div>'
  ].join('');
}
//点击查看功能
function setContest(value, row, index) {
  if (value === 0){
    value = '无';
  }
  return [
    '<div>',
    '<span>'+value+'</span>',
    '</div>'
  ].join('');
}
//增加题目title点击功能
function setTitle(value, row, index) {
  return [
    '<div>',
    '<a href="problem/'+row.id+'" target="_blank">' + value + '</a>',
    '</div>'
  ].join('');
}
//增加题目title点击功能
var acList = getCookie('acList');
function setProblemId(value, row, index) {
  var textcss = '';
  if (acList !== null && acList.indexOf(row.id) >= 0){
    textcss = 'text-success';
  }
  return [
    '<span class="'+textcss+'">' +row.id+ '</span>'
  ].join('');
}
//增加题目title点击功能
function setTitleWithid(value, row, index) {
  if (row.contest_id === null || row.contest_id < 0){
    return [
      '<div>',
      '<a href="'+projectName+'/problem/'+row.problem_id+'" target="_blank">' + value + '</a>',
      '</div>'
    ].join('');
  } else{
    return [
      '<div>',
      '<a href="'+projectName+'/contest/problem/'+row.problem_id+'" target="_blank">' + value + '</a>',
      '</div>'
    ].join('');
  }
}

//更改题目acsubmit
function setAcSubmit(value, row, index) {
  var submit = 0;
  if (row.submit <=0){
    submit =  1;
  }else {
    submit =  row.submit;
  }
  return [
    '<div>',
    '<span>('+row.solved+'/'+row.submit+ ')'+toDecimal(row.solved/submit)+'%</span>',
    '</div>'
  ].join('');
}
//更改题目用户的radio
function setUserRadio(value, row, index) {
  var submit = row.submit;
  if (submit === 0){
    submit = 1;
  }
  return [
    '<div>',
    '<span>' + toDecimal(row.solved/submit) + '%</span>',
    '</div>'
  ].join('');
}
//排名id自增功能
function setId(value, row, index) {
  return [
    '<div>',
    '<span>'+(index+1)+'</span>',
    '</div>'
  ].join('');
}
//用户名点击功能
function setUsername(value, row, index) {

  if(value === null){
    value = row.username;
  }
  return [
    '<div>',
    '<a href="/user/'+row.id+'" target="_blank">' + value + '</a>',
    '</div>'
  ].join('');
}
//用户博客点击功能
function setUserBlog(value, row, index) {
  if(value === null){
    return [
      '<div>',
      '<a target="_blank" style="color: gray" title="无博客">无</a>',
      '</div>'
    ].join('');
  }else {
    return [
      '<div>',
      '<a href="'+row.blog+'" target="_blank" title="'+value+'">博客</a>',
      '</div>'
    ].join('');
  }

}
//讨论按钮
function setDiscuss(value, row, index) {
  return [
    '<div>',
    '<a href="comment/pro/'+row.id+'">'+'讨论'+'</a>',
    '</div>'
  ].join('');
}


//功能：将浮点数四舍五入，取小数点后2位
function toDecimal(x) {
  var f = parseFloat(x);
  if (isNaN(f)) {
    return;
  }
  f = Math.round(x*100);
  return f;
}
