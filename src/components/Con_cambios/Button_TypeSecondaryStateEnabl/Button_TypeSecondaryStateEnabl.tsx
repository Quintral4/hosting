import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_TypeSecondaryStateEnabl.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    potenciaTuGestion?: ReactNode;
  };
}
/* @figmaId 1:6 */
export const Button_TypeSecondaryStateEnabl: FC<Props> = memo(function Button_TypeSecondaryStateEnabl(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.potenciaTuGestion != null ? (
        props.text?.potenciaTuGestion
      ) : (
        <div className={classes.potenciaTuGestion}>Potenciá tu gestión</div>
      )}
    </button>
  );
});
