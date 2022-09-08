import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_TypePrimaryStateEnabled.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    potenciaTuGestion?: boolean;
  };
  text?: {
    potenciaTuGestion?: ReactNode;
  };
}
/* @figmaId 1:4 */
export const Button_TypePrimaryStateEnabled: FC<Props> = memo(function Button_TypePrimaryStateEnabled(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.potenciaTuGestion &&
        (props.text?.potenciaTuGestion != null ? (
          props.text?.potenciaTuGestion
        ) : (
          <div className={classes.potenciaTuGestion}>Potenciá tu gestión</div>
        ))}
    </button>
  );
});
