import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Button_TypePrimaryStateEnabled } from '../Button_TypePrimaryStateEnabled/Button_TypePrimaryStateEnabled';
import classes from './Frame3940.module.css';
import { PathIcon } from './PathIcon';
import { PathIcon2 } from './PathIcon2';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';

interface Props {
  className?: string;
  hide?: {
    potenciaTuGestion?: boolean;
    potenciaTuGestion2?: boolean;
  };
}
/* @figmaId 11:245 */
export const Frame3940: FC<Props> = memo(function Frame3940(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame23}>
        <div className={classes.rectangle660}></div>
        <div className={classes.unsplashPGdW_bHDbpI}></div>
        <div className={classes.frame21}>
          <div className={classes.group3938}>
            <div className={classes.rectangle675}></div>
            <div className={classes.vector}>
              <VectorIcon className={classes.icon} />
            </div>
            <div className={classes.unnamed1}></div>
            <div className={classes.daianaDeza}>Daiana Deza</div>
            <div className={classes.amorosaSimpaticaSinceraEmocion}>
              Amorosa, simpática, sincera, emocional, divertida y observadora.
            </div>
            <div className={classes.meMotivanLosDesafiosYElConstan}>
              <div className={classes.textBlock}>
                Me motivan los desafíos y el constante desarrollo personal y profesional. Esto me impulsa a seguir
                capacitándome y a explorar nuevas vías de ser para trabajar en mi mejor versión.{' '}
              </div>
              <div className={classes.textBlock2}>
                <p></p>
              </div>
              <div className={classes.textBlock3}>
                Actualmente disfruto mucho analizar organizaciones, a fin de aportar soluciones en pos de un equilibrio
                entre la visión y misión de la empresa y las personas que hacen parte de ella.
              </div>
              <div className={classes.textBlock4}>
                <p></p>
              </div>
            </div>
            <Button_TypePrimaryStateEnabled
              className={classes.button}
              hide={{
                potenciaTuGestion: true,
              }}
            />
            <div className={classes.path}>
              <PathIcon className={classes.icon2} />
            </div>
          </div>
        </div>
        <div className={classes.frame22}>
          <div className={classes.group3939}>
            <div className={classes.rectangle6752}></div>
            <div className={classes.vector2}>
              <VectorIcon2 className={classes.icon3} />
            </div>
            <div className={classes.unnamed}></div>
            <div className={classes.nicolasGabrielGomez}>Nicolás Gabriel Gómez</div>
            <div className={classes.meGustaDetenermeAObservarDetec}>
              <div className={classes.textBlock5}>
                Me gusta detenerme a observar, detectar oportunidades de mejora y hacer preguntas poderosas, que
                despierten reflexión.
              </div>
              <div className={classes.textBlock6}>
                <p></p>
              </div>
              <div className={classes.textBlock7}>
                El fortalecimiento de personas en equipos, la comunicación y el desarrollo de la cultura organizacional
                son mis motivadores profesionales, aunque también podés encontrarme trabajando en mi huerta o cocinando
                para amigos.
              </div>
              <div className={classes.textBlock8}>
                <p></p>
              </div>
            </div>
            <div className={classes.estudianteEternoFanaticoDelCre}>
              Estudiante eterno, fanático del crecimiento y el desarrollo humano.
            </div>
            <Button_TypePrimaryStateEnabled
              className={classes.button2}
              hide={{
                potenciaTuGestion: true,
              }}
            />
            <div className={classes.path2}>
              <PathIcon2 className={classes.icon4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
