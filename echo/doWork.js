"use strict";

/**
 * Created by maxim on 04.02.17.
 */

self.addEventListener('message', function(e) {
	self.postMessage(e.data);
}, false);