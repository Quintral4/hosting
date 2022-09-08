import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Alguito_Property1Component493.module.css';
import { BusinessSolutionCuateIcon } from './BusinessSolutionCuateIcon';
import { Group3920Icon } from './Group3920Icon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1:24 */
export const Alguito_Property1Component493: FC<Props> = memo(function Alguito_Property1Component493(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.group3920}>
        <Group3920Icon className={classes.icon} />
      </div>
      <div className={classes.rectangle663}></div>
      <div className={classes.businessSolutionCuate}>
        <BusinessSolutionCuateIcon className={classes.icon2} />
      </div>
      <div className={classes.QueresAlcanzarNuevasMetas}>
        <div className={classes.textBlock}>¿Querés alcanzar </div>
        <div className={classes.textBlock2}>nuevas metas?</div>
        <div className={classes.textBlock3}>
          <p></p>
        </div>
      </div>
    </div>
  );
});
