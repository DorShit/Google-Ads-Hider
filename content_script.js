
var upperDivToHide = document.querySelector('#atvcap')
var lowerDivToHide = document.querySelector('#tvcap')
var sideDivToHide = document.querySelector('#tads')
var bigSideDivToHide = document.querySelector('#wp-tabs-container')
console.log("I did it")
chrome.storage.sync.get('fav_style', function (res) {
    if (res.fav_style == 'hide') {
        if (sideDivToHide != null) {
            sideDivToHide.classList.add('hider')
            sideDivToHide.classList.remove('colorChanger')
        }
        if (upperDivToHide != null) {
            upperDivToHide.classList.add('hider')
            upperDivToHide.classList.remove('colorChanger')
        }
        if (lowerDivToHide != null) {
            lowerDivToHide.classList.add('hider')
            lowerDivToHide.classList.remove('colorChanger')
        }
        if (bigSideDivToHide != null) {
            bigSideDivToHide.classList.add('hider')
            bigSideDivToHide.classList.remove('colorChanger')
        }
    }
    if (res.fav_style == 'mark') {
        if (sideDivToHide != null) {
            sideDivToHide.classList.add('colorChanger')
            sideDivToHide.classList.remove('hider')
            sideDivToHide.classList.remove('blurer')
        }
        if (upperDivToHide != null) {
            upperDivToHide.classList.add('colorChanger')
            upperDivToHide.classList.remove('hider')
            upperDivToHide.classList.remove('blurer')

        }
        if (lowerDivToHide != null) {
            lowerDivToHide.classList.add('colorChanger')
            lowerDivToHide.classList.remove('hider')
            lowerDivToHide.classList.remove('blurer')
        }
        if (bigSideDivToHide != null) {
            bigSideDivToHide.classList.add('colorChanger')
            bigSideDivToHide.classList.remove('hider')
            bigSideDivToHide.classList.remove('blurer')
        }

    }
    if (res.fav_style == 'blur') {
        if (sideDivToHide != null) {
            sideDivToHide.classList.add('blurer')
            sideDivToHide.classList.remove('hider')
            sideDivToHide.classList.remove('colorChanger')
        }
        if (upperDivToHide != null) {
            upperDivToHide.classList.add('blurer')
            upperDivToHide.classList.remove('hider')
            upperDivToHide.classList.remove('colorChanger')
        }
        if (lowerDivToHide != null) {
            lowerDivToHide.classList.add('blurer')
            lowerDivToHide.classList.remove('hider')
            lowerDivToHide.classList.remove('colorChanger')
        }
        if (bigSideDivToHide != null) {
            bigSideDivToHide.classList.add('blurer')
            bigSideDivToHide.classList.remove('hider')
            bigSideDivToHide.classList.remove('colorChanger')
        }

    }
    if (res.fav_style == 'show') {
        if (sideDivToHide != null) {
            sideDivToHide.classList.remove('blurer')
            sideDivToHide.classList.remove('hider')
            sideDivToHide.classList.remove('colorChanger')
        }
        if (upperDivToHide != null) {
            upperDivToHide.classList.remove('blurer')
            upperDivToHide.classList.remove('hider')
            upperDivToHide.classList.remove('colorChanger')
        }
        if (lowerDivToHide != null) {
            lowerDivToHide.classList.remove('blurer')
            lowerDivToHide.classList.remove('hider')
            lowerDivToHide.classList.remove('colorChanger')
        }
        if (bigSideDivToHide != null) {
            bigSideDivToHide.classList.remove('blurer')
            bigSideDivToHide.classList.remove('hider')
            bigSideDivToHide.classList.remove('colorChanger')
        }


    }
});
