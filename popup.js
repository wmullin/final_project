/*
 *Had to look this part up but basically whe you click a button
 *the background is set to the links I  provided for the corresponding
 *part of the image variable
 */
function click(colorButton) {
    chrome.tabs.executeScript(null, {code: "document.body.style.backgroundImage='url(" +  images[colorButton.target.id] + "'"});
    window.close();
}

//Starts by waiting for the entire page to be loaded, waits for  a click
document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('button');
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', click);
    }
});
var images = { //Found links on the internet for base colors and USA/Nova
    yellow: 'https://moondecorative.com/wp-content/uploads/product_images/product-19239-1538598790-SS-VC-YELLOW-Q-400x400.jpg',
    red: 'https://colourlex.com/wp-content/uploads/2017/03/Chrome-red-painted-swatch-203-FB.jpg',
    blue: 'https://i.ytimg.com/vi/aPZ2-RCnhaQ/maxresdefault.jpg',
    green: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9GlVKL0ubrDTyJnaxmzQVaUbHUC5WBbZg22ehg4TUF3CT0NNYaA&s',
    white: 'https://i5.walmartimages.com/asr/6d1014f4-682b-4720-818a-615f754e923d_1.ee2acf1cc97d6ac3258af5453afac656.jpeg',
    usa: 'https://previews.123rf.com/images/sharpner/sharpner1702/sharpner170200005/71130029-waving-american-flag.jpg',
    nova: 'https://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fncaa%2F500%2F222.png'
}