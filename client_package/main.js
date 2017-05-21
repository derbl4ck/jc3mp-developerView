/**
 * @overview package-developerview Main
 * @author Lukas 'derbl4ck' Berwanger
 * @copyright (c) derbl4ck
 * @version 0.0.3
 * @license
 */

'use strict';

const ui = new WebUIWindow('developerview', 'package://jc3mp-developerview/ui/index.html', new Vector2(jcmp.viewportSize.x, jcmp.viewportSize.y));
ui.autoResize = true;

jcmp.ui.AddEvent('developerview_GETupdateCore', () => {
  const posi = [];
  
  posi[0] = jcmp.localPlayer.position.x;
  posi[1] = jcmp.localPlayer.position.y;
  posi[2] = jcmp.localPlayer.position.z;
  posi[3] = jcmp.localPlayer.rotation.x;
  posi[4] = jcmp.localPlayer.rotation.y;
  posi[5] = jcmp.localPlayer.rotation.z;
  posi[6] = jcmp.localPlayer.camera.rotation.x;
  posi[7] = jcmp.localPlayer.camera.rotation.y;
  posi[8] = jcmp.localPlayer.camera.rotation.z;
  posi[9] = jcmp.players.length;
  jcmp.ui.CallEvent('developerview_updateCore', JSON.stringify(posi));
});

jcmp.events.AddRemoteCallable('developerview_draw', boxes => {
  jcmp.ui.CallEvent('developerview_clear', 'clear that shit');
  jcmp.ui.CallEvent('developerview_inner', 'build');
  for (let box in boxes) {
    jcmp.ui.CallEvent('developerview_addBox', JSON.stringify(box));
  }
});

jcmp.events.Add('ScriptError', (file, line, err, trace) => {
  jcmp.ui.CallEvent('developerview_addLog', JSON.stringify({ file: file, line: line, err: err, trace: trace }));
});
