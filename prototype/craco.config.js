module.exports = {
    babel: {
      presets: ["@emotion/babel-preset-css-prop"],
    },
  };


//   Styled Components 사용
//   yarn add @emotion/react
//   yarn add --dev @emotion/babel-plugin
//   yarn add @emotion/styled
//   yarn add -D @craco/craco
//   최상위 폴더에서 craco.config.js 만들기
//   module.exports = {
//     babel: {
//       presets: ["@emotion/babel-preset-css-prop"],
//     },
//   };
//   yarn add -D @emotion/babel-preset-css-prop
  
//   package.json에서 scripts 부분
//   react-scripts 전부 craco로 수정 (3개)
//   eject 지우기