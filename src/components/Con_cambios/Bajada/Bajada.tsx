import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Bajada.module.css';

interface Props {
  className?: string;
}
/* @figmaId 11:226 */
export const Bajada: FC<Props> = memo(function Bajada(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.transformaLaFormaEnLaQueTuEqui}>Transformá la forma en la que tu equipo se relaciona</div>
      <div className={classes.trabajemosEnElCambioQueEstasBu}>
        <div className={classes.textBlock}>Trabajemos en el cambio que estás buscando.</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
    </div>
  );
});
