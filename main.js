/**
 * @overview package-developerview Main
 * @author Lukas 'derbl4ck' Berwanger
 * @copyright (c) derbl4ck
 * @license
 */

'use strict';

let boxes = [];

events.AddRemoteCallable('developerview_addDrawcall', (pkg, title, value) => {
  if(pkg == '' || title == '') {
    console.log(`[developerview]\x1b[31mA Package requested to add a Drawcall without giving correct Informations!\x1b[0m`);
  } else {
      boxes[`${pkg}_${title}`] = {
        pkg: pkg,
        title: title,
        value: value
      };

      events.Call('developerview_draw', boxes);
  }
});