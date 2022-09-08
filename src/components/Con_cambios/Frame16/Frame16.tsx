import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame16.module.css';
import { NounCompassion19093091Icon } from './NounCompassion19093091Icon';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 11:222 */
export const Frame16: FC<Props> = memo(function Frame16(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.group3931}>
        <div className={classes.vector}>
          <VectorIcon className={classes.icon} />
        </div>
        <div className={classes.rectangle664}></div>
        <div className={classes.empatia}>Empatía</div>
        <div className={classes.reconocemosAlOtroComoLegitimoY}>
          Reconocemos al otro como legítimo y desde esa comprensión operamos.
        </div>
        <div className={classes.nounCompassion19093091}>
          <NounCompassion19093091Icon className={classes.icon2} />
        </div>
      </div>
    </div>
  );
});
