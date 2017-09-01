'use strict';

let spc = {};

Object.defineProperty(spc, 'namespace', {
  value: function(names) {
    let parts = names.split('\.'),
    current = spc;
    for (let i = 0; i < parts.length; i++) {
      if (!current[parts[i]])
      	current[parts[i]] = {};
      current = current[parts[i]];
    }
  }
});

spc.namespace('DOM.table');
console.log(JSON.stringify(spc));

let ajax = {
  getXHR() {
    let req;
    if (window.XMLHttpRequest) {
      req = new XMLHttpRequest();
    } else {
      req = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return req;
  },
  request(reqType, url, cb, postBody) {
    let req = this.getXHR();
    req.addEventListener('load', cb, false);
    req.open(reqType.toUpperCase(), url, true);
    req.send(postBody || '');
  }
}

function mycb(evt) {
  console.log(this.responseText);
  console.log(evt.type);
}

ajax.request('get', 'somefile.txt', mycb);