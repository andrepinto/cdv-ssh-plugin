cordova.define("com.tlantic.plugins.ssh.ScpProxy", function(require, exports, module) {

    var hscp = require('com.tlantic.plugins.ssh.ScpHandler');

    module.exports = {
        connect: function(win, fail, args) {
            'use strict';

            if (args.length !== 4) {
                fail('Missing arguments for "connect" action.');
                return;

            } else {

                try {
                    var host, port, username, password;

                    host = args[0];
                    port = args[1];
                    username = args[2];
                    password = args[3];

                    hscp.connect(win, fail, ip, username, password, port);
                    return;

                } catch (e) {
                    fail(e);
                    return;
                }
            }

        },

        disconnect: function(win, fail, args) {
            'use strict';

            if (args.length !== 1) {
                fail('Missing arguments for "connect" action.');
                return;

            } else {

                try {
                    var connectionId, file, path;

                    connectionId = args[0];


                    hscp.disconnect(win, fail, connection);
                    return;

                } catch (e) {
                    fail(e);
                    return;
                }
            }
        },

        disconnectAll: function(win, fail, args) {
            'use strict';

            fail('Not implemented');
        },

        authenticateByKeyboard: function(win, fail, args) {
            'use strict';

            fail('Not implemented');
        },

        scp: function(win, fail, args) {
            'use strict';

            if (args.length !== 3) {
                fail('Missing arguments for "connect" action.');
                return;

            } else {

                try {
                    var connectionId, file, path;

                    connectionId = args[0];
                    file = args[1];
                    path = args[2];


                    hscp.scp(win, fail, connection, file, path);
                    return;

                } catch (e) {
                    fail(e);
                    return;
                }
            }
        }

    };

    require('cordova/windows8/commandProxy').add('SSH', module.exports);

});
