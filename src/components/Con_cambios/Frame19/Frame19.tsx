import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame19.module.css';

interface Props {
  className?: string;
}
/* @figmaId 11:247 */
export const Frame19: FC<Props> = memo(function Frame19(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.nuestraVisionEsSerYHacertePart}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Nuestra visión es </span>
          <span className={classes.label2}>ser y hacerte parte de la revolución cultural</span>
          <span className={classes.label3}> que ya se está dando.</span>
        </p>
        <div className={classes.textBlock}>
          <p></p>
        </div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
    </div>
  );
});
