import { Platform, Dimensions, PixelRatio } from 'react-native';

export default {
    mainDark: '#020844', //
    mainDarkMiddle: '#252E83', //dark blue
    mainMiddle: '#4855CC', // 4855CC
    mainLightMiddle: '#FFBA40', // FFBA40
    mainLight: '#FFCB40', //FFCB40
    white: '#fff',


    get mainDarkColor() {
      return this.mainDark;
    },
    get mainDarkMiddleColor() {
      return this.mainDarkMiddle;
    },
    get mainMiddleColor() {
      return this.mainMiddle;
    },
    get mainLightMiddleColor() {
      return this.mainLightMiddle;
    },
    get mainLightColor() {
      return this.mainLight;
    },
    get whiteColor() {
      return this.white;
    },
};

/*
.color-primary-0 { color: #4855CC }	Main Primary color 
.color-primary-1 { color: #4855CC }
.color-primary-2 { color: #4855CC }
.color-primary-3 { color: #26308F }
.color-primary-4 { color: #252E83 }

.color-secondary-1-0 { color: #FFBA40 }	Main Secondary color (1) 
.color-secondary-1-1 { color: #FFBA40 }
.color-secondary-1-2 { color: #FFBA40 }
.color-secondary-1-3 { color: #CF8F1F }
.color-secondary-1-4 { color: #BE8520 }

.color-secondary-2-0 { color: #FFDB40 }	 Main Secondary color (2) 
.color-secondary-2-1 { color: #FFDB40 }
.color-secondary-2-2 { color: #FFDB40 }
.color-secondary-2-3 { color: #CFAE1F }
.color-secondary-2-4 { color: #BEA120 }

.color-complement-0 { color: #FFCB40 }	 Main Complement color 
.color-complement-1 { color: #FFCB40 }
.color-complement-2 { color: #FFCB40 }
.color-complement-3 { color: #CF9F1F }
.color-complement-4 { color: #BE9320 }
*/

/*

--black-chocolate: #100b00;
--yellow-green: #85cb33;
--nyanza: #efffc8;
--opal: #a5cbc3;
--olive-drab-7: #3b341f;

$black-chocolate: rgba(16, 11, 0, 1);
$yellow-green: rgba(133, 203, 51, 1);
$nyanza: rgba(239, 255, 200, 1);
$opal: rgba(165, 203, 195, 1);
$olive-drab-7: rgba(59, 52, 31, 1);


$gradient-top: linear-gradient(0deg, #100b00ff, #85cb33ff, #efffc8ff, #a5cbc3ff, #3b341fff);
$gradient-right: linear-gradient(90deg, #100b00ff, #85cb33ff, #efffc8ff, #a5cbc3ff, #3b341fff);
$gradient-bottom: linear-gradient(180deg, #100b00ff, #85cb33ff, #efffc8ff, #a5cbc3ff, #3b341fff);
$gradient-left: linear-gradient(270deg, #100b00ff, #85cb33ff, #efffc8ff, #a5cbc3ff, #3b341fff);
$gradient-top-right: linear-gradient(45deg, #100b00ff, #85cb33ff, #efffc8ff, #a5cbc3ff, #3b341fff);
$gradient-bottom-right: linear-gradient(135deg, #100b00ff, #85cb33ff, #efffc8ff, #a5cbc3ff, #3b341fff);
$gradient-top-left: linear-gradient(225deg, #100b00ff, #85cb33ff, #efffc8ff, #a5cbc3ff, #3b341fff);
$gradient-bottom-left: linear-gradient(315deg, #100b00ff, #85cb33ff, #efffc8ff, #a5cbc3ff, #3b341fff);
$gradient-radial: radial-gradient(#100b00ff, #85cb33ff, #efffc8ff, #a5cbc3ff, #3b341fff);

*/