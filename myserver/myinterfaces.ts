export interface vproperties {
  wheels: number;
  engine: string;
  model: string;
  bhp: number;
  fuel?: string;
  autofeatures: Automatic;
}

interface Automatic {
  autopilot: boolean;
  autostop: boolean;
  autoclean?: boolean;
}
export const title = "my title";
