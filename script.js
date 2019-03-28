console.log('app is alive');

// writes the name of the clicked channel on the app bar
function switchChannel(channelName) {
    console.log('Tuning into channel' + channelName);
    document.getElementById('#chat').innerHTML=channelName;
}

// changes star from filled to empty
function starChange(){
    $.('#star').html(src="http://ip.lfe.mw.tum.de/sections/star-o.png");
}

// changes star from empty to filled
function starChangeBack(){
    $.('#star').html(src="http://ip.lfe.mw.tum.de/sections/star.png");
}

// switches between the tab buttons: add and remove .selected
function selectTab(tabId){

}
