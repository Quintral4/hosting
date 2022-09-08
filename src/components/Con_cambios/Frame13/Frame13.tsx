import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame13.module.css';

interface Props {
  className?: string;
}
/* @figmaId 11:234 */
export const Frame13: FC<Props> = memo(function Frame13(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.QueHacemos}>¿Qué hacemos?</div>
      <div className={classes.facilitamosEspaciosDeAprendiza}>
        Facilitamos espacios de aprendizaje y transformación para líderes y equipos de trabajo.
      </div>
      <div className={classes.ComoLoHacemos}>¿Cómo lo hacemos?</div>
      <div className={classes.conversamosConVosParaEntenderL}>
        <div className={classes.textBlock}>Conversamos con vos para entender la dolencia a resolver.</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
        <div className={classes.textBlock3}>
          Desarrollamos espacios (fisicos o virtuales) contemplando el contexto y las necesidades particulares de tu
          equipo.
        </div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
        <div className={classes.textBlock5}>
          Elaboramos un reporte en base a nuestra pericia y lo validamos con vos.
        </div>
        <div className={classes.textBlock6}>
          <p></p>
        </div>
      </div>
    </div>
  );
});
