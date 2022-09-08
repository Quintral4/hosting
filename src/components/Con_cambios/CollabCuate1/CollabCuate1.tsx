import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './CollabCuate1.module.css';
import { FreepikChairsInject3Icon } from './FreepikChairsInject3Icon';
import { FreepikCharacter1Inject3Icon } from './FreepikCharacter1Inject3Icon';
import { FreepikCharacter2Inject3Icon } from './FreepikCharacter2Inject3Icon';
import { FreepikCharacter3Inject3Icon } from './FreepikCharacter3Inject3Icon';
import { FreepikDevicesInject3Icon } from './FreepikDevicesInject3Icon';
import { FreepikPlantInject3Icon } from './FreepikPlantInject3Icon';
import { FreepikSpeechBubblesInject3Ico } from './FreepikSpeechBubblesInject3Ico';
import { FreepikTableInject3Icon } from './FreepikTableInject3Icon';

interface Props {
  className?: string;
}
/* @figmaId 11:227 */
export const CollabCuate1: FC<Props> = memo(function CollabCuate1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.freepikChairsInject3}>
        <FreepikChairsInject3Icon className={classes.icon} />
      </div>
      <div className={classes.freepikTableInject3}>
        <FreepikTableInject3Icon className={classes.icon2} />
      </div>
      <div className={classes.freepikCharacter1Inject3}>
        <FreepikCharacter1Inject3Icon className={classes.icon3} />
      </div>
      <div className={classes.freepikCharacter2Inject3}>
        <FreepikCharacter2Inject3Icon className={classes.icon4} />
      </div>
      <div className={classes.freepikCharacter3Inject3}>
        <FreepikCharacter3Inject3Icon className={classes.icon5} />
      </div>
      <div className={classes.freepikDevicesInject3}>
        <FreepikDevicesInject3Icon className={classes.icon6} />
      </div>
      <div className={classes.freepikSpeechBubblesInject3}>
        <FreepikSpeechBubblesInject3Ico className={classes.icon7} />
      </div>
      <div className={classes.freepikPlantInject3}>
        <FreepikPlantInject3Icon className={classes.icon8} />
      </div>
    </div>
  );
});
