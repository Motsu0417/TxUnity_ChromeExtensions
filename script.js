let Data = {"Title": "", "URL": ""}

chrome.tabs.getSelected(tab=>{
    Data.Title = tab.title;
    Data.URL = tab.url;
    console.log(`Title: ${Data.Title}`);
    console.log(`URL: ${Data.URL}`);
});

window.addEventListener('load',()=>{
    const input_Txname = document.querySelector('input.txname');
    const input_id = document.querySelector('input.pageId');
    //txtBox.value = Data.URL;
    var str_index_start;
    var str_index_end;
    if(Data.URL.match(/unityBase/)){
        str_index_start = Data.URL.indexOf('unityBase');
    }else{
        str_index_start = Data.URL.indexOf('unityTips');
    }
    str_index_end = Data.URL.indexOf('&step_id')
    // var str_index_start = Data.URL.indexOf('unityBase');
    let txName = (Data.URL.substr(str_index_start,str_index_end-str_index_start));
    let id = Data.URL.substr(str_index_end+6);
    input_Txname.value = txName;
    input_id.value = id;
})