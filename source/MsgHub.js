var t  = [
    {
        win: W,
        out: [{ toward: A, actions: ['reset']}],// set an emitter
        in: [{ from: A, actions: ['done']}]   // set a listener
    },
    {
        win: A,
        out: [{ toward: W, actions: ['done']}],// set an emitter
        in: [{ from: W, actions: ['reset']}] // set a listener
    }
]


// W.addEventListener('message', function (e) {
//     if (e.data.action === 'done') 
// })



window.MsgHub = window.MsgHub || (function (){

    function setListener(win, action, cb) {
        win.addEventListener('message', function (e) {
            e.data && e.data.action && e.data.action === action && cb()
        })
    }
    function setEmitter(win, action, cb) {
        win[action] = function (data) {}
    }
    function setup(config) {
        for (var i  = 0, l = config.length; i < l; i++) (function (entry) {
            var win  = entry.win,
                j, k;
            for (j = 0, k = entry.out.length; j < k; j++) {
                
            }
            for (j = 0, k = entry.in.length; j < k; j++) {

            }
        })(config[i])
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