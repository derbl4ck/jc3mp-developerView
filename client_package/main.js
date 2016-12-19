/**
 * @overview package-developerview Main
 * @author Lukas 'derbl4ck' Berwanger
 * @copyright (c) derbl4ck
 * @license
 */

'use strict';

const ui = new WebUIWindow('developerview', 'package://jc3mp-developerview/ui/index.html', new Vector2(viewportSize.x, viewportSize.y));
ui.autoResize = true;

jcmp.ui.AddEventHandler('developerview_GETupdateCore', msg => {
  const posi = [];
  
  posi[0] = localPlayer.GetRenderTransform(0.0).position.x;
  posi[1] = localPlayer.GetRenderTransform(0.0).position.y;
  posi[2] = localPlayer.GetRenderTransform(0.0).position.z;
  posi[3] = localPlayer.rotation.x;
  posi[4] = localPlayer.rotation.y;
  posi[5] = localPlayer.rotation.z;

  jcmp.ui.BroadcastEvent('developerview_updateCore', JSON.stringify(posi));
});

jcmp.ui.AddEventHandler('developerview_draw', boxes => {
  jcmp.ui.BroadcastEvent('developerview_clear', 'clear that shit');
  jcmp.ui.BroadcastEvent('developerview_inner', 'build');
  for (let box in boxes) {
    jcmp.ui.BroadcastEvent('developerview_addBox', JSON.stringify(box));
  }
});