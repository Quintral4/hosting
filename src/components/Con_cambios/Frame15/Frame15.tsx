import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame15.module.css';
import { Group3933Icon } from './Group3933Icon';

interface Props {
  className?: string;
}
/* @figmaId 11:221 */
export const Frame15: FC<Props> = memo(function Frame15(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.group3933}>
        <Group3933Icon className={classes.icon} />
      </div>
      <div className={classes.calidez}>Calidez</div>
      <div className={classes.elContextoFacilitaODetraeElCam}>
        <div className={classes.textBlock}>
          El contexto facilita o detrae el cambio, velamos por crear un espacio de confianza donde la tranformación
          tenga lugar.
        </div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
    </div>
  );
});
