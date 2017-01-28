/**
 * @overview package-developerview Main
 * @author Lukas 'derbl4ck' Berwanger
 * @copyright (c) derbl4ck
 * @version 0.0.2
 * @license
 */

'use strict';

const ui = new WebUIWindow('developerview', 'package://jc3mp-developerview/ui/index.html', new Vector2(viewportSize.x, viewportSize.y));
ui.autoResize = true;

jcmp.ui.AddEvent('developerview_GETupdateCore', () => {
  const posi = [];
  
  posi[0] = localPlayer.GetRenderTransform(0.0).position.x;
  posi[1] = localPlayer.GetRenderTransform(0.0).position.y;
  posi[2] = localPlayer.GetRenderTransform(0.0).position.z;
  posi[3] = localPlayer.rotation.x;
  posi[4] = localPlayer.rotation.y;
  posi[5] = localPlayer.rotation.z;
  posi[6] = localPlayer.camera.rotation.x;
  posi[7] = localPlayer.camera.rotation.y;
  posi[8] = localPlayer.camera.rotation.z;
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