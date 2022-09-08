import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame2.module.css';

interface Props {
  className?: string;
}
/* @figmaId 11:232 */
export const Frame2: FC<Props> = memo(function Frame2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.dN}>D&amp;N</div>
    </div>
  );
});
