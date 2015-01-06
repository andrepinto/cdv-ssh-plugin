var hscp = require('com.tlantic.plugins.ssh.ScpHandler');

module.exports = {
    connect: function(win, fail) {
        'use strict';

        fail('Not implemented');

    },

    disconnect: function(win, fail) {
        'use strict';

        fail('Not implemented');
    },

    disconnectAll: function(win, fail) {
        'use strict';

        fail('Not implemented');
    },

    authenticateByKeyboard: function(win, fail) {
        'use strict';

        fail('Not implemented');
    },

    scp: function(win, fail) {
        'use strict';

        fail('Not implemented');
    }

};

require('cordova/windows8/commandProxy').add('SSH', module.exports);
