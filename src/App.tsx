import { memo } from "react";
import type { FC } from "react";

import classes from "./App.module.css";
import resets from "./components/_resets.module.css";
import { Con_cambios } from "./components/Con_cambios/Con_cambios";

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Con_cambios />
    </div>
  );
});
