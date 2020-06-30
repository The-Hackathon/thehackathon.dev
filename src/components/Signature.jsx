import React from "react"
import styled from "styled-components"

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
          width="364"
          height="67"
          viewBox="0 0 364 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M227 1.27262C227 3.46853 224.633 6.33817 219.899 9.88156C215.165 13.425 208.435 17.7419 199.709 22.8324C194.405 29.0708 189.899 35.0346 186.192 40.724C182.542 46.4134 180.717 50.3561 180.717 52.552C180.717 54.7479 181.43 55.8458 182.856 55.8458C183.882 55.8458 185.279 55.3717 187.048 54.4235C188.873 53.4752 190.413 52.527 191.667 51.5788L193.549 50.1564C193.892 49.8071 194.205 49.6324 194.49 49.6324C194.776 49.6324 194.918 49.7322 194.918 49.9318C194.918 51.2294 193.093 52.8264 189.443 54.7229C185.793 56.6194 183.055 57.5676 181.23 57.5676C177.751 57.5676 176.011 56.3948 176.011 54.0492C176.011 51.6536 177.38 48.0853 180.118 43.3441C182.856 38.603 186.392 33.5125 190.726 28.0726C181.316 33.4127 174.272 37.4551 169.595 40.2C163.549 47.4365 157.532 53.6998 151.544 58.9899C145.555 64.33 141.363 67 138.968 67C137.656 67 137 66.5758 137 65.7274C137 62.9326 139.424 59.514 144.272 55.4715C149.177 51.4291 155.964 46.7628 164.633 41.4726C169.994 34.7851 174.471 28.4469 178.065 22.4581C181.715 16.4194 183.54 12.0276 183.54 9.28268C183.54 6.13855 181.743 4.21713 178.15 3.51843C175.356 2.91955 172.418 2.62011 169.338 2.62011C166.316 2.62011 163.892 2.69497 162.067 2.84469C160.298 2.99441 158.331 3.29385 156.163 3.74301C153.996 4.14227 152.228 4.81601 150.859 5.76424C149.548 6.71247 148.892 7.86033 148.892 9.20782C148.892 10.7549 150.432 11.9777 153.511 12.876C156.648 13.7743 160.127 14.6726 163.949 15.5709C167.827 16.4693 170.308 17.5672 171.392 18.8648C171.848 19.314 172.162 20.1374 172.333 21.3352C172.333 21.6845 172.19 21.8592 171.905 21.8592C171.677 21.8592 171.449 21.6845 171.221 21.3352C170.707 20.2872 169.053 19.3639 166.259 18.5654C163.521 17.7169 160.641 17.0682 157.618 16.619C154.652 16.1199 151.943 15.3464 149.49 14.2983C147.095 13.2004 145.897 11.8529 145.897 10.2559C145.897 8.65884 146.496 7.2864 147.694 6.13854C148.892 4.94078 150.289 4.04246 151.886 3.44358C153.54 2.84469 155.622 2.37057 158.131 2.02123C161.895 1.57207 166.287 1.34749 171.306 1.34749C176.382 1.34749 180.317 2.07114 183.112 3.51843C185.964 4.96573 187.39 6.98696 187.39 9.58212C187.39 15.1218 182.314 24.2547 172.162 36.981C174.899 35.384 178.778 33.1631 183.797 30.3184C188.816 27.4238 192.038 25.5523 193.464 24.7039C199.338 17.7169 205.213 11.8529 211.087 7.11173C217.019 2.37058 221.81 0 225.46 0C226.487 0 227 0.424208 227 1.27262ZM139.994 65.2782C141.591 65.2782 144.443 63.3069 148.549 59.3642C152.713 55.4715 157.219 50.5806 162.067 44.6916C146.952 53.9743 139.395 60.6119 139.395 64.6045C139.395 65.0536 139.595 65.2782 139.994 65.2782ZM223.407 1.72179C221.81 1.72179 219.129 3.36871 215.365 6.66257C211.601 9.90652 207.437 14.0987 202.875 19.2391C216.905 10.8547 223.92 5.16536 223.92 2.17095C223.92 1.87151 223.749 1.72179 223.407 1.72179Z"
            fill="#333333"
          />
          <path
            d="M15.6277 54.0138C32.1277 54.0138 29.6277 36.0138 19.6277 36.0138C19.6277 36.0138 13.1277 35.0138 11.6277 40.0138C11.6277 40.0138 11.3483 38.6378 11.6277 37.5C12.4824 34.0189 16.0598 32.6547 19.6277 33C34 34.391 32.5 56.3383 15.6277 55.5C-4.49959 54.5 -4.99995 19.5 21.0001 17.5C45.926 15.5825 56 51.5001 102 55.5C110.5 56.2391 108 57.5327 104.628 57.5327C52.6278 50.0327 48.6269 18.5138 20.6282 18.5139C-1.46311 18.5139 -5.37044 54.0138 15.6277 54.0138Z"
            fill="#333333"
            stroke="#333333"
          />
          <path
            d="M347.944 53.5869C331.444 53.5869 333.944 35.5869 343.944 35.5869C343.944 35.5869 350.444 34.5869 351.944 39.5869C351.944 39.5869 352.223 37.7247 351.944 36.5869C351.089 33.1058 347.511 32.2279 343.944 32.5732C329.571 33.9641 331.071 55.9114 347.944 55.0731C368.071 54.0731 368.571 19.0732 342.571 17.0731C317.645 15.1557 307.5 51.0001 261.5 55C253 55.7391 255.571 57.1058 258.944 57.1058C310.944 49.6058 314.944 18.0869 342.943 18.087C365.034 18.087 368.942 53.5869 347.944 53.5869Z"
            fill="#333333"
            stroke="#333333"
          />
        </svg>
      </Background>
    </Root>
  )
}
