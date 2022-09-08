import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Alguito_Property1Component493 } from './Alguito_Property1Component493/Alguito_Property1Component493';
import { Bajada } from './Bajada/Bajada';
import { Button_TypePrimaryStateEnabled } from './Button_TypePrimaryStateEnabled/Button_TypePrimaryStateEnabled';
import { CollabCuate1 } from './CollabCuate1/CollabCuate1';
import classes from './Con_cambios.module.css';
import { Frame1 } from './Frame1/Frame1';
import { Frame2 } from './Frame2/Frame2';
import { Frame5Icon } from './Frame5Icon';
import { Frame13 } from './Frame13/Frame13';
import { Frame14 } from './Frame14/Frame14';
import { Frame15 } from './Frame15/Frame15';
import { Frame16 } from './Frame16/Frame16';
import { Frame17 } from './Frame17/Frame17';
import { Frame18 } from './Frame18/Frame18';
import { Frame19 } from './Frame19/Frame19';
import { Frame20 } from './Frame20/Frame20';
import { Frame3940 } from './Frame3940/Frame3940';
import { Group3896 } from './Group3896/Group3896';

interface Props {
  className?: string;
}
/* @figmaId 1:2544 */
export const Con_cambios: FC<Props> = memo(function Con_cambios(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Frame20 />
      <CollabCuate1 />
      <div className={classes.rol}>Rol</div>
      <div className={classes.rectangle633}></div>
      <div className={classes.nuestrosValores}>Nuestros valores</div>
      <div className={classes.rectangle663}></div>
      <div className={classes.QueresUnEquipoMasParticipativo}>
        <div className={classes.textBlock}>¿Querés un equipo </div>
        <div className={classes.textBlock2}>más participativo?</div>
      </div>
      <div className={classes.frame5}>
        <Frame5Icon className={classes.icon} />
      </div>
      <Button_TypePrimaryStateEnabled
        className={classes.button}
        text={{
          potenciaTuGestion: <div className={classes.potenciaTuGestion}>Elevá tus resultados</div>,
        }}
      />
      <div className={classes.rectangle666}></div>
      <div className={classes.NecesitasUnAumentoDeProductivi}>
        <div className={classes.textBlock3}>¿Necesitás un aumento </div>
        <div className={classes.textBlock4}>de productividad?</div>
      </div>
      <div className={classes.rectangle6632}></div>
      <div className={classes.QueresUnEquipoMasParticipativo2}>
        <div className={classes.textBlock5}>¿Querés un equipo </div>
        <div className={classes.textBlock6}>más participativo?</div>
      </div>
      <Alguito_Property1Component493 className={classes.alguito} />
      <div className={classes.soluciones}>Soluciones</div>
      <div className={classes.frame6}>
        <div className={classes.dN}>D&amp;N</div>
      </div>
      <div className={classes._2022DNTodosLosDerechosReservad}>© 2022 D&amp;N. Todos los derechos reservados.</div>
      <Frame17 />
      <Frame16 />
      <Frame15 />
      <Frame19 />
      <Frame18 />
      <Bajada />
      <Frame1 />
      <Frame2 />
      <Frame13 />
      <Frame14 />
      <div className={classes.nosotros}>Nosotros</div>
      <Frame3940 />
      <Group3896 />
    </div>
  );
});
