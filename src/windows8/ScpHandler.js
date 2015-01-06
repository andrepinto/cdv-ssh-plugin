exports.connect = function(win, fail, ip, username, password, port) {
    console.log('Connect SSH...');

    try {
        var instance = TlantSSH.TlanticSsh.instance;
        instance.connect(ip, username, password, port);
        win(instance);
        return;
    } catch (e) {
        fail(e);
        return;
    }

};

exports.scp = function(win, fail, connection, file, path) {
    try {
        if (connection.isConnect()) {
            connection.scp("/tlanBiS/loadinfo/our_output/mrs/", "xmlfile.xml");
            win('FILED_SEND_WITH_SUCCESS');
            return;
        } else {
            fail('NOT_CONNECTED');
            return;
        }

    } catch (e) {
        fail(e);
        return;
    }

};

exports.disconnect = function(win, fail, connection) {
    try {
        connection.disconnect();
        win('DISCONNECTED');
        return;
    } catch (e) {
        fail(e);
        return;
    }
};


require('cordova/windows8/commandProxy').add('ScpHandler', exports);
