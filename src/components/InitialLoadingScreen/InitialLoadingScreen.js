import {
  InitialLoadingScreenStyle,
  LogoContainerStyle,
  BackgroundDecorationStyle,
} from './InitialLoadingScreen.style';
import { useContext, useEffect } from 'react';
import AppContext from '../../contexts/AppContext';

const AnimationDuration = 4;

function SVGLogo() {
  return (
    <svg version="1.1" id="svg2" width="410" height="410" viewBox="0 0 410 410">
      <defs>
        <bxGrid x="0" y="0" width="147.782" height="120.478" />
      </defs>
      <g
        id="g8"
        transform="matrix(0.383323, 0, 0, -0.321622, -749.241333, 681.874207)"
      >
        <g id="g24" transform="scale(0.182836)">
          <path
            d="M 13261.312 5028.943 L 13261.312 6099.81 C 13369.483 6087.256 13479.495 6080.924 13591.56 6080.924 C 13632.991 6080.924 13674.205 6081.812 13715.417 6083.652 L 13715.417 5028.943 L 13261.312 5028.943 Z M 12607.843 6493.917 C 12300.525 6626.926 12031.069 6809.365 11799.472 7041.1 C 11620.447 7220.224 11470.845 7422.186 11350.774 7646.648 L 13048.104 9344.786 L 13048.104 6351.858 C 12896.878 6384.879 12750.089 6432.239 12607.843 6493.917 Z M 11053.084 8834.064 C 11053.084 9182.771 11119.5 9510.882 11252.553 9818.395 C 11385.604 10125.726 11567.876 10395.384 11799.472 10627.096 C 12031.069 10858.701 12300.525 11041.172 12607.843 11174.288 C 12915.051 11307.3 13243.029 11373.859 13591.56 11373.859 C 13761.284 11373.859 13920.621 11358.924 14069.682 11329.162 C 14218.634 11299.291 14359.692 11256.866 14492.744 11201.778 C 14518.381 11191.281 14543.801 11180.026 14569.329 11168.553 L 11252.553 7850.091 C 11119.5 8157.368 11053.084 8485.414 11053.084 8834.064 Z M 13715.417 6297.042 C 13674.637 6295.202 13633.315 6294.315 13591.56 6294.315 C 13479.387 6294.315 13369.266 6301.241 13261.312 6315.04 L 13261.312 9558.175 L 13715.417 10012.425 L 13715.417 6297.042 Z M 16412.152 5028.943 L 13928.625 5028.943 L 13928.625 6101.054 C 14143.888 6126.856 14357.204 6177.474 14568.572 6253.005 C 14889.411 6367.66 15173.903 6542.1 15421.51 6776.095 C 15449.094 6803.672 15462.832 6831.203 15462.832 6858.727 C 15462.832 6886.249 15451.258 6912.59 15428.433 6937.873 C 15405.392 6963.026 15380.297 6975.751 15352.713 6975.751 C 15325.236 6975.751 15299.924 6964.215 15277.1 6941.305 C 15024.842 6734.84 14763.391 6575.314 14492.744 6462.965 C 14317.288 6389.976 14129.177 6340.906 13928.625 6315.278 L 13928.625 10211.831 C 13928.625 10216.485 13928.085 10220.598 13927.76 10225.035 L 14769.448 11067.037 C 14808.173 11045.392 14846.683 11022.664 14884.976 10998.746 C 15013.267 10918.441 15144.049 10827.748 15277.1 10726.881 C 15295.381 10708.483 15318.313 10699.391 15345.898 10699.391 C 15373.373 10699.391 15399.658 10710.756 15424.971 10733.807 C 15450.067 10756.753 15462.832 10781.969 15462.832 10809.565 C 15462.832 10837.055 15449.094 10864.545 15421.51 10892.144 C 15302.195 11006.755 15170.442 11106.539 15025.926 11191.497 C 14881.515 11276.347 14730.182 11348.641 14571.925 11408.275 C 14413.778 11467.907 14250.869 11512.606 14083.528 11542.475 C 13915.969 11572.346 13752.088 11587.282 13591.56 11587.282 C 13210.903 11587.282 12853.177 11514.987 12518.384 11370.504 C 12183.591 11225.914 11892.392 11029.698 11644.678 10781.969 C 11397.072 10534.13 11200.956 10242.784 11056.546 9907.834 C 10912.136 9572.864 10839.875 9214.914 10839.875 8834.064 C 10839.875 8453.162 10912.136 8095.278 11056.546 7760.361 C 11200.956 7425.324 11397.072 7134.034 11644.678 6886.249 C 11892.392 6638.464 12183.591 6442.303 12518.384 6297.756 C 12688.973 6224.12 12865.51 6169.238 13048.104 6133.133 L 13048.104 4918.779 C 13048.104 4849.947 13082.178 4815.552 13150.436 4815.552 L 16412.152 4815.552 C 16485.383 4815.552 16522.162 4851.061 16522.162 4922.221 C 16522.162 4993.369 16485.383 5028.943 16412.152 5028.943"
            style={{
              fill: 'none',
              fillRule: 'evenodd',
              stroke: 'var(--color-palette-3)',
            }}
            id="path26"
          />
        </g>
      </g>
    </svg>
  );
}

function BackgroundDecoration() {
  return (
    <BackgroundDecorationStyle>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </BackgroundDecorationStyle>
  );
}

export default function InitialLoadingScreen() {
  const { state, setState } = useContext(AppContext);

  useEffect(() => {
    const initialAnimationTimer = setTimeout(
      () => setState({ ...state, page: 'HomePage' }),
      AnimationDuration * 1000 + 100
    );
    return () => {
      clearTimeout(initialAnimationTimer);
    };
  }, []);

  return (
    <>
      <InitialLoadingScreenStyle>
        <LogoContainerStyle>
          <SVGLogo />
        </LogoContainerStyle>
        <BackgroundDecoration />
      </InitialLoadingScreenStyle>
    </>
  );
}
