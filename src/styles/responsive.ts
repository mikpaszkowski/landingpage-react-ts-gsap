import { breakPoints } from "./styleConstants";

interface DeviceResponsive {
  mobileMedium: string;
  laptopSmall: string;
  laptopLarge: string;
}

export const device: DeviceResponsive = {
  mobileMedium: `(max-width: ${breakPoints.mobileMedium})`,
  laptopSmall: `(max-width: ${breakPoints.laptopSmall})`,
  laptopLarge: `(max-width: ${breakPoints.laptopLarge})`,
};
