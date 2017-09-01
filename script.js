'use strict';

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
