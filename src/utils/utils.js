import React from 'react'

export const importAll = (path, regExp) => {
    r = require.context(path, false, regExp)
    let files = {};
    r.keys().map((item, index) => { files[item.replace('./', '')] = r(item); });
    console.log(r.keys())
    return files;
}

