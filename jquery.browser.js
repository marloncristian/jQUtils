jQuery.browser = {

    //retorna a versao atual 
    get: function () {
        var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (M[1] === 'Chrome') {
            tem = ua.match(/\bOPR\/(\d+)/);
            if (tem != null) return { name: 'opera', version: parseInt(tem[1]) };
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) { M.splice(1, 1, tem[1]); }

        return { name: M[0].toLowerCase(), version: parseInt(M[1]) };
    },

    //verifica a versao minima
    checkBrowserVersion: function (B) {
        var c = this.get();
        var v = true;
        $.each(B, function (i, b) {
            if (b.name == c.name && b.minVersion > c.version)
                v = false;
        });
        return v;
    }
};