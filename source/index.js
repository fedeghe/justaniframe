var justaniframe = (function () {
    $$MsgHub.js$$



    function generateEncodedContent(scriptSrc) { 
        return "data:text/html;charset=utf-8," + encodeURI('<!DOCTYPE html>' +
            '<html>' +
                '<head>' +
                    '<meta charset="UTF-8" />' +
                    '<meta http-equiv="X-UA-Compatible" content="IE=9" />' +
                    '<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />' +
                    '<script src="' + scriptSrc + '"></script>' +
                '</head>' +
                '<body></body>' +
            '</html>'
        );
    }


	function iframe0(width, height, src, options) {
        options = options || {}
        var iframe = document.createElement('iframe');
        iframe.setAttribute('width', width);
        iframe.setAttribute('height', height);
        iframe.setAttribute('frameBorder', 0);
        if ('allowFullscreen' in options) {
            iframe.setAttribute('allowfullscreen', 'true');
            iframe.setAttribute('webkitallowfullscreen', 'true');
            iframe.setAttribute('mozallowfullscreen', 'true');
        }
        if ('onload' in options) {
            iframe.onload = options.onload
        }
        iframe.setAttribute('src', src)
        return iframe;
    }

    return {
        iframe0: iframe0
    }
})();

(typeof exports === 'object') && (module.exports = justaniframe);