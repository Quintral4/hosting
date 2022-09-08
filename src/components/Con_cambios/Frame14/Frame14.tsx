import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Button_TypePrimaryStateEnabled } from '../Button_TypePrimaryStateEnabled/Button_TypePrimaryStateEnabled';
import { ContactUsCuateIcon } from './ContactUsCuateIcon';
import classes from './Frame14.module.css';

interface Props {
  className?: string;
}
/* @figmaId 11:235 */
export const Frame14: FC<Props> = memo(function Frame14(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.contamosConAlgunasTitulaciones}>
        <div className={classes.textBlock}>
          Contamos con algunas titulaciones, pero nos apalancamos de nuestra experiencia como formadores y gestores del
          cambio.
        </div>
        <div className={classes.textBlock2}>
          Nuestra mejor validación son las devoluciones que recibimos de las personas con las que interactuamos.
        </div>
        <div className={classes.textBlock3}>
          <p className={classes.labelWrapper}></p>
        </div>
        <div className={classes.textBlock4}>¿Tenés dudas? </div>
        <div className={classes.textBlock5}>¡Agendemos un espacio y conversemos para conocernos! </div>
      </div>
      <Button_TypePrimaryStateEnabled
        className={classes.button}
        text={{
          potenciaTuGestion: <div className={classes.potenciaTuGestion}>Contacto</div>,
        }}
      />
      <div className={classes.contactUsCuate}>
        <ContactUsCuateIcon className={classes.icon} />
      </div>
    </div>
  );
});
