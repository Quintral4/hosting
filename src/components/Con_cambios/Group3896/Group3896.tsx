import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Button_TypeSecondaryStateEnabl } from '../Button_TypeSecondaryStateEnabl/Button_TypeSecondaryStateEnabl';
import classes from './Group3896.module.css';
import { Group3928Icon } from './Group3928Icon';
import { PathIcon } from './PathIcon';
import { PathIcon2 } from './PathIcon2';
import { Rectangle2Icon } from './Rectangle2Icon';

interface Props {
  className?: string;
}
/* @figmaId 11:246 */
export const Group3896: FC<Props> = memo(function Group3896(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.contactoForm}>
        <div className={classes.Hablemos}>¡Hablemos!</div>
        <div className={classes.rectangle16}></div>
        <div className={classes.conocenosMas}>Conocenos más</div>
        <div className={classes.nosEncantanLasPreguntasYLasPro}>
          <div className={classes.textBlock}>
            Nos encantan las preguntas y las propuestas desafiantes, ¡contanos la tuya!
          </div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
        </div>
        <div className={classes.linkedIn}>
          <div className={classes.path}>
            <PathIcon className={classes.icon} />
          </div>
          <div className={classes.linkedIn2}>LinkedIn</div>
        </div>
        <div className={classes.instagram}>
          <div className={classes.path2}>
            <PathIcon2 className={classes.icon2} />
          </div>
          <div className={classes.instagram2}>Instagram</div>
        </div>
        <Button_TypeSecondaryStateEnabl
          className={classes.button}
          text={{
            potenciaTuGestion: <div className={classes.potenciaTuGestion}>Enviar</div>,
          }}
        />
        <div className={classes.form}>
          <div className={classes.nombreCompleto}>
            <div className={classes.nombreCompleto2}>Nombre completo</div>
            <div className={classes.rectangle2}></div>
          </div>
          <div className={classes.correoElectronico}>
            <div className={classes.correoElectronico2}>Correo electrónico</div>
            <div className={classes.rectangle22}></div>
          </div>
          <div className={classes.quieroSaberMasSobre}>
            <div className={classes.numeroDeTelefono}>Número de teléfono</div>
            <div className={classes.rectangle23}></div>
          </div>
          <div className={classes.mensaje}>
            <div className={classes.mensaje2}>Mensaje</div>
            <div className={classes.rectangle24}>
              <Rectangle2Icon className={classes.icon3} />
            </div>
          </div>
        </div>
        <div className={classes.group3928}>
          <Group3928Icon className={classes.icon4} />
        </div>
      </div>
    </div>
  );
});
