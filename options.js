

function save_options() {
    const my_style = document.getElementById('style').value;
    chrome.storage.sync.set({
        fav_style: my_style
    }, function () {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 600);
        setTimeout(function () {
            window.close();
        }, 600);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        fav_style: 'hide'
    }, function (items) {
        document.getElementById('style').value = items.fav_style;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
