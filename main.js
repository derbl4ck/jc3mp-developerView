/**
 * @overview package-developerview Main
 * @author Lukas 'derbl4ck' Berwanger
 * @copyright (c) derbl4ck
 * @version 0.0.3
 * @license
 */

'use strict';

let boxes = [];

jcmp.events.AddRemoteCallable('developerview_addDrawcall', (pkg, title, value) => {
  if(pkg == '' || title == '') {
    console.log(`[developerview]\x1b[31mA Package requested to add a Drawcall without giving correct Informations!\x1b[0m`);
  } else {
      boxes[`${pkg}_${title}`] = {
        pkg: pkg,
        title: title,
        value: value
      };

      let playersLength = jcmp.players.length;

      for (let i = 0; i < playersLength; i++) {
          jcmp.events.CallRemote('developerview_draw', jcmp.players[i], boxes);
      }
  }
});