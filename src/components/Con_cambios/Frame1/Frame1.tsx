import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 11:231 */
export const Frame1: FC<Props> = memo(function Frame1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.group3936}>
        <div className={classes.buttonContact}></div>
        <div className={classes.inicio}>Inicio</div>
        <div className={classes.line15}></div>
        <div className={classes.soluciones}>Soluciones</div>
        <div className={classes.line16}></div>
        <div className={classes.nosotros}>Nosotros</div>
        <div className={classes.line17}></div>
        <div className={classes.contacto}>Contacto</div>
      </div>
    </div>
  );
});
