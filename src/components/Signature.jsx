import React from "react"
import styled from "styled-components"

const Line = styled.div`
  background: #333;
  height: 2px;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`

const Background = styled.div`
  background: white;
  padding: 0 1rem;
  height: 64px;
  z-index: 1;

  svg {
    height: 100%;
  }

  @media (max-width: 600px) {
    height: 30px;
  }
`

const Root = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`

export const Signature = () => {
  return (
    <Root>
      <Background>
        <svg
          viewBox="0 0 243 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M167 1.27262C167 3.46853 164.633 6.33817 159.899 9.88156C155.165 13.425 148.435 17.7419 139.709 22.8324C134.405 29.0708 129.899 35.0346 126.192 40.724C122.542 46.4134 120.717 50.3561 120.717 52.552C120.717 54.7479 121.43 55.8458 122.856 55.8458C123.882 55.8458 125.279 55.3717 127.048 54.4235C128.873 53.4752 130.413 52.527 131.667 51.5788L133.549 50.1564C133.892 49.8071 134.205 49.6324 134.49 49.6324C134.776 49.6324 134.918 49.7322 134.918 49.9318C134.918 51.2294 133.093 52.8264 129.443 54.7229C125.793 56.6194 123.055 57.5676 121.23 57.5676C117.751 57.5676 116.011 56.3948 116.011 54.0492C116.011 51.6536 117.38 48.0853 120.118 43.3441C122.856 38.603 126.392 33.5125 130.726 28.0726C121.316 33.4127 114.272 37.4551 109.595 40.2C103.549 47.4365 97.5323 53.6998 91.5437 58.9899C85.5551 64.33 81.3631 67 78.9677 67C77.6559 67 77 66.5758 77 65.7274C77 62.9326 79.424 59.514 84.2719 55.4715C89.1768 51.4291 95.9639 46.7628 104.633 41.4726C109.994 34.7851 114.471 28.4469 118.065 22.4581C121.715 16.4194 123.54 12.0276 123.54 9.28268C123.54 6.13855 121.743 4.21713 118.15 3.51843C115.356 2.91955 112.418 2.62011 109.338 2.62011C106.316 2.62011 103.892 2.69497 102.067 2.84469C100.298 2.99441 98.3308 3.29385 96.1635 3.74301C93.9962 4.14227 92.2281 4.81601 90.8593 5.76424C89.5475 6.71247 88.8916 7.86033 88.8916 9.20782C88.8916 10.7549 90.4316 11.9777 93.5114 12.876C96.6483 13.7743 100.127 14.6726 103.949 15.5709C107.827 16.4693 110.308 17.5672 111.392 18.8648C111.848 19.314 112.162 20.1374 112.333 21.3352C112.333 21.6845 112.19 21.8592 111.905 21.8592C111.677 21.8592 111.449 21.6845 111.221 21.3352C110.707 20.2872 109.053 19.3639 106.259 18.5654C103.521 17.7169 100.641 17.0682 97.6179 16.619C94.6521 16.1199 91.943 15.3464 89.4905 14.2983C87.0951 13.2004 85.8973 11.8529 85.8973 10.2559C85.8973 8.65884 86.4962 7.2864 87.6939 6.13854C88.8916 4.94078 90.289 4.04246 91.8859 3.44358C93.5399 2.84469 95.6217 2.37057 98.1312 2.02123C101.895 1.57207 106.287 1.34749 111.306 1.34749C116.382 1.34749 120.317 2.07114 123.112 3.51843C125.964 4.96573 127.39 6.98696 127.39 9.58212C127.39 15.1218 122.314 24.2547 112.162 36.981C114.899 35.384 118.778 33.1631 123.797 30.3184C128.816 27.4238 132.038 25.5523 133.464 24.7039C139.338 17.7169 145.213 11.8529 151.087 7.11173C157.019 2.37058 161.81 0 165.46 0C166.487 0 167 0.424208 167 1.27262ZM79.9943 65.2782C81.5913 65.2782 84.443 63.3069 88.5494 59.3642C92.7129 55.4715 97.2186 50.5806 102.067 44.6916C86.9525 53.9743 79.3954 60.6119 79.3954 64.6045C79.3954 65.0536 79.5951 65.2782 79.9943 65.2782ZM163.407 1.72179C161.81 1.72179 159.129 3.36871 155.365 6.66257C151.601 9.90652 147.437 14.0987 142.875 19.2391C156.905 10.8547 163.92 5.16536 163.92 2.17095C163.92 1.87151 163.749 1.72179 163.407 1.72179Z"
            fill="#333333"
          />
          <path
            d="M15.6277 51.0138C32.1277 51.0138 29.6277 33.0138 19.6277 33.0138C19.6277 33.0138 13.1277 32.0138 11.6277 37.0138C11.6277 37.0138 11.3483 35.6378 11.6277 34.5C12.4824 31.0189 16.0598 29.6547 19.6277 30C34 31.391 32.5 53.3383 15.6277 52.5C-4.49959 51.5 -4.99995 16.5 21.0001 14.5C45.926 12.5825 56 48.5001 102 52.5C110.5 53.2391 108 54.5327 104.628 54.5327C52.6278 47.0327 48.6269 15.5138 20.6282 15.5139C-1.46311 15.5139 -5.37044 51.0138 15.6277 51.0138Z"
            fill="#333333"
            stroke="#333333"
          />
          <path
            d="M226.944 50.5869C210.444 50.5869 212.944 32.5869 222.944 32.5869C222.944 32.5869 229.444 31.5869 230.944 36.5869C230.944 36.5869 231.223 34.7247 230.944 33.5869C230.089 30.1058 226.511 29.2279 222.944 29.5732C208.571 30.9641 210.071 52.9114 226.944 52.0731C247.071 51.0731 247.571 16.0732 221.571 14.0731C196.645 12.1557 186.5 48.0001 140.5 52C132 52.7391 134.571 54.1058 137.944 54.1058C189.944 46.6058 193.944 15.0869 221.943 15.087C244.034 15.087 247.942 50.5869 226.944 50.5869Z"
            fill="#333333"
            stroke="#333333"
          />
        </svg>
      </Background>
      <Line />
    </Root>
  )
}
