var t  = [
    {
        win: W1,
        out: ['aaa', 'bbb'],
        in: ['eee', 'rrr', 'ttt']
    },
    {
        win: W2,
        out: ['eee', 'rrr'],
        in: ['aaa', 'bbb']
    }
]





window.MsgHub = window.MsgHub || (function (){
    function setListener(win, action, cb) {
        win.addEventListener('message', function (e) {
            e.data && e.data.action && e.data.action === action && cb()
        })
    }
    function setMessager(win, action, cb) {

        
    }
    function setup(config) {
        for (var i  = 0, l = config.length; i < l; i++) {

        }
    }
    return {
        setup: setup
    }
})();

/*
if (!('MsgHub' in window)){
    window.MsgHub = {
        receiver : function (trgWin) {
            return function (o) {
                var	eventMethod = trgWin.addEventListener ? "addEventListener" : "attachEvent",
                    eventer = trgWin[eventMethod],
                    messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
                for (var evLabel in o) {
                    (function (obj, funcName) {
                        eventer(messageEvent, function(e) {
                            if (e.data && e.data.action && (e.data.action) == funcName){
                                console.log('RECEIVED : ' + funcName + ' by: ');
                                console.log(trgWin.location);
                                obj[funcName]();
                            }

                        }, false);
                    })(o, evLabel);
                }
            }
        },
        sender : function (trgWin) {
            return function () {
                var a = [].slice.call(arguments, 0),
                    l = a.length,
                    i = 0;
                
                for (null; i < l; i++) {
                    console.log('SENDED : ' + a[i] + ' from: ');
                    console.log(trgWin.location);
                    trgWin.postMessage({action : a[i]}, '*');
                }
            };
        }
    };
}
*/