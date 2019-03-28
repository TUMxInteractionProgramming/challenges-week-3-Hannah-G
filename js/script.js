
console.log("App is alive");

// writes the name of the clicked channel on the app bar
function switchChannel(channelName) {
    //Log to  switch
    console.log("Tuning in to channel", channelName);
    //new channel to right appbar
    document.getElementById('channel-name').innerHTML = channelName;
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>upgrading.never.helps</strong></a>';
    //star when clicking
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
    // active state for channel
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName + ')').addClass('selected');
}

//star when clicking
function star() {
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}

// switches between the tab buttons: add and remove .selected
function selectTab(tabId) {

    $('#tab-bar button').removeClass('selected');

    console.log('Changing to tab', tabId);

    $(tabId).addClass('selected');
}

//switching/toggling emojis
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}
