class UtilServices {
  _queryTreeSort(options) {
    let cfi, e, i, id, o, pid, rfi, ri, thisid, _i, _j, _len, _len1, _ref, _ref1;
    id = options.id || "id";
    pid = options.parentMemberId || "parentMemberId";
    ri = [];
    rfi = {};
    cfi = {};
    o = [];
    _ref = options.q;
    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
      e = _ref[i];
      rfi[e[id]] = i;
      if (cfi[e[pid]] == null) {
        cfi[e[pid]] = [];
      }
      cfi[e[pid]].push(options.q[i][id]);
    }
    _ref1 = options.q;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      e = _ref1[_j];
      if (rfi[e[pid]] == null) {
        ri.push(e[id]);
      }
    }
    while (ri.length) {
      thisid = ri.splice(0, 1);
      o.push(options.q[rfi[thisid]]);
      if (cfi[thisid] != null) {
        ri = cfi[thisid].concat(ri);
      }
    }
    return o;
  }

  _makeTree(options) {
    let children, e, id, o, pid, temp, _i, _len, _ref;
    id = options.memberId || "memberId";
    pid = options.parentMemberId || "parentMemberId";
    children = options.children || "children";
    temp = {};
    o = [];
    _ref = options.q;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      e = _ref[_i];
      e[children] = [];
      temp[e[id]] = e;
      if (temp[e[pid]] != null) {
        temp[e[pid]][children].push(e);
      } else {
        o.push(e);
      }
    }
    return o;
  }
  processData(data) {
    return this._makeTree({ q: this._queryTreeSort({ q: data }) });
  }
}

export default new UtilServices();
