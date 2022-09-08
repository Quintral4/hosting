import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame18.module.css';

interface Props {
  className?: string;
}
/* @figmaId 11:248 */
export const Frame18: FC<Props> = memo(function Frame18(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.ParaQueLoHacemos}>¿Para qué lo hacemos?</div>
      <div className={classes.creemosEnLaPersonaComoFuenteDe}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Creemos en la </span>
          <span className={classes.label2}>persona como fuente de poder </span>
          <span className={classes.label3}>y también </span>
          <span className={classes.label4}>creemos que el acompañamiento es clave</span>
          <span className={classes.label5}> para que la evolución sea sostenida.</span>
        </p>
        <div className={classes.textBlock}>
          <p></p>
        </div>
        <div className={classes.textBlock2}>
          Basados en la escucha profunda, nos enfocamos en comprender la inquietud que subyace al contexto, para aportar
          soluciones innovadoras.
        </div>
      </div>
    </div>
  );
});
