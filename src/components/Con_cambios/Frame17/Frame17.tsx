import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame17.module.css';
import { NounAchievement40441461Icon } from './NounAchievement40441461Icon';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 11:223 */
export const Frame17: FC<Props> = memo(function Frame17(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.group3932}>
        <div className={classes.rectangle666}></div>
        <div className={classes.vector}>
          <VectorIcon className={classes.icon} />
        </div>
        <div className={classes.nounAchievement40441461}>
          <NounAchievement40441461Icon className={classes.icon2} />
        </div>
        <div className={classes.innovacion}>Innovación</div>
        <div className={classes.creatividadEnAccionYMovimiento}>
          <div className={classes.textBlock}>
            Creatividad en acción y movimiento constante, para encontrar el cambio en el hacer. No hay innovación sin
            evolución.
          </div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
});
