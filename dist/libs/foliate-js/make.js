(()=>{var bg=Object.defineProperty;var yg=(e,t)=>{for(var n in t)bg(e,n,{get:t[n],enumerable:!0})};var ee={BUILD_TIME:"2023-12-27T14:24:57.000Z",VERSION:"0.12.12",PROD:"1",REDIRECT_URL:"https://dash.immersivetranslate.com/auth-done/",PROD_API:"1",BETA:"0",IMMERSIVE_TRANSLATE_INJECTED_CSS:`:root {
  --immersive-translate-theme-underline-borderColor: #72ece9;
  --immersive-translate-theme-nativeUnderline-borderColor: #72ece9;
  --immersive-translate-theme-nativeDashed-borderColor: #72ece9;
  --immersive-translate-theme-nativeDotted-borderColor: #72ece9;
  --immersive-translate-theme-highlight-backgroundColor: #ffff00;
  --immersive-translate-theme-dashed-borderColor: #59c1bd;
  --immersive-translate-theme-blockquote-borderColor: #cc3355;
  --immersive-translate-theme-thinDashed-borderColor: #ff374f;
  --immersive-translate-theme-dashedBorder-borderColor: #94a3b8;
  --immersive-translate-theme-dashedBorder-borderRadius: 0;
  --immersive-translate-theme-solidBorder-borderColor: #94a3b8;
  --immersive-translate-theme-solidBorder-borderRadius: 0;
  --immersive-translate-theme-dotted-borderColor: #94a3b8;
  --immersive-translate-theme-wavy-borderColor: #72ece9;
  --immersive-translate-theme-dividingLine-borderColor: #94a3b8;
  --immersive-translate-theme-grey-textColor: #2f4f4f;
  --immersive-translate-theme-marker-backgroundColor: #fbda41;
  --immersive-translate-theme-marker-backgroundColor-rgb: 251, 218, 65;
  --immersive-translate-theme-marker2-backgroundColor: #ffff00;
  --immersive-translate-theme-opacity-opacity: 10;
}

.immersive-translate-target-translation-pre-whitespace {
  white-space: pre-wrap !important;
}

.immersive-translate-pdf-target-container {
  position: absolute;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    sans-serif;
  top: 0;
  width: 600px;
  height: 100%;
  z-index: 2;
  line-height: 1.3;
  font-size: 16px;
}

.immersive-translate-pdf-target-container .immersive-translate-target-wrapper {
  color: rgb(0, 0, 0);
  white-space: normal;
  position: absolute;
}

.immersive-translate-pdf-target-container .immersive-translate-target-wrapper font {
  color: inherit;
  white-space: inherit;
  position: unset;
}

.immersive-translate-state-dual>br {
  display: none;
}

.immersive-translate-target-translation-block-wrapper {
  margin: 8px 0 !important;
  display: inline-block;
}

.immersive-translate-target-translation-pdf-block-wrapper {
  margin: 0 !important;
  display: block;
}

.immersive-translate-target-translation-theme-grey-inner {
  color: var(--immersive-translate-theme-grey-textColor);
}


.immersive-translate-target-translation-theme-underline-inner {
  border-bottom: 1px solid var(--immersive-translate-theme-underline-borderColor) !important;
}

.immersive-translate-target-translation-theme-nativeUnderline-inner {
  text-decoration: underline var(--immersive-translate-theme-nativeUnderline-borderColor) !important;
}

.immersive-translate-target-translation-block-wrapper-theme-dashedBorder {
  border: 1px dashed var(--immersive-translate-theme-dashedBorder-borderColor) !important;
  border-radius: var(--immersive-translate-theme-dashedBorder-borderRadius) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-dashedBorder {
  border: 1px dashed var(--immersive-translate-theme-dashedBorder-borderColor) !important;
  border-radius: var(--immersive-translate-theme-dashedBorder-borderRadius) !important;
  padding: 2px;
}

.immersive-translate-target-translation-block-wrapper-theme-solidBorder {
  border: 1px solid var(--immersive-translate-theme-solidBorder-borderColor) !important;
  border-radius: var(--immersive-translate-theme-solidBorder-borderRadius) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-solidBorder {
  border: 1px solid var(--immersive-translate-theme-solidBorder-borderColor) !important;
  border-radius: var(--immersive-translate-theme-solidBorder-borderRadius) !important;
  padding: 2px;
}

.immersive-translate-target-translation-theme-nativeDashed-inner {
  text-decoration: dashed underline var(--immersive-translate-theme-nativeDashed-borderColor) !important;
}

.immersive-translate-target-translation-theme-thinDashed-inner {
  border-bottom: 1px dashed var(--immersive-translate-theme-thinDashed-borderColor) !important;
}

.immersive-translate-target-translation-theme-dotted-inner {
  background-image: linear-gradient(to right,
      var(--immersive-translate-theme-dotted-borderColor) 30%,
      rgba(255, 255, 255, 0) 0%);
  background-position: bottom;
  background-size: 5px 1px;
  background-repeat: repeat-x;
  padding-bottom: 3px;
}

.immersive-translate-target-translation-theme-nativeDotted-inner {
  text-decoration: dotted underline var(--immersive-translate-theme-nativeDotted-borderColor) !important;
}

.immersive-translate-target-translation-theme-wavy-inner {
  text-decoration: wavy underline var(--immersive-translate-theme-wavy-borderColor) !important;
}

.immersive-translate-target-translation-theme-dashed-inner {
  background: linear-gradient(to right,
      var(--immersive-translate-theme-dashed-borderColor) 0%,
      var(--immersive-translate-theme-dashed-borderColor) 50%,
      transparent 50%,
      transparent 100%) repeat-x left bottom;
  background-size: 8px 2px;
  padding-bottom: 2px;
}

.immersive-translate-target-translation-block-wrapper-theme-dividingLine::before {
  content: "";
  display: block;
  max-width: 80px;
  width: 10%;
  border-top: 1px dashed var(--immersive-translate-theme-dividingLine-borderColor);
  padding-top: 8px;
}

.immersive-translate-target-translation-inline-wrapper-theme-dividingLine::before {
  content: "";
  border-left: 1px dashed var(--immersive-translate-theme-dividingLine-borderColor);
  max-height: 16px;
  height: 16px;
  padding-left: 8px;
}

.immersive-translate-target-translation-theme-highlight-inner {
  background: var(--immersive-translate-theme-highlight-backgroundColor);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.immersive-translate-target-translation-block-wrapper-theme-marker {
  line-height: 1.5em;
}

.immersive-translate-target-translation-theme-marker2-inner {
  font-weight: bold;
  text-shadow: 10px 0px 3px var(--immersive-translate-theme-marker2-backgroundColor),
    16px 3px 9px var(--immersive-translate-theme-marker2-backgroundColor),
    2px 0px 6px var(--immersive-translate-theme-marker2-backgroundColor),
    -12px 0px 12px var(--immersive-translate-theme-marker2-backgroundColor) !important;
}

.immersive-translate-target-translation-theme-marker-inner {
  /* TODO: add more texture */
  background: linear-gradient(to right,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.1),
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 3%,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 35%,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.9) 70%,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.8) 95%,
      rgba(var(--immersive-translate-theme-marker-backgroundColor-rgb), 0.3));
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.immersive-translate-target-translation-theme-weakening {
  opacity: 0.618 !important;
}

.immersive-translate-target-translation-theme-italic {
  font-style: italic !important;
}

.immersive-translate-target-translation-theme-bold {
  font-weight: bold !important;
}

.immersive-translate-target-translation-block-wrapper-theme-paper {
  margin: 8px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 16px 32px;
  display: block;
}

.immersive-translate-target-translation-block-wrapper-theme-blockquote {
  border-left: 4px solid var(--immersive-translate-theme-blockquote-borderColor) !important;
  padding-left: 12px !important;
  margin-top: 4px;
  margin-bottom: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  display: block;
}

.immersive-translate-target-translation-theme-mask-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
  display: inline-block;
}

[data-immersive-translate-root-translation-theme="none"] .immersive-translate-target-translation-theme-mask-inner {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="mask"] .immersive-translate-target-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
  display: inline-block;
}


/* opacity theme start */

.immersive-translate-target-translation-theme-opacity-inner {
  filter: opacity(calc(var(--immersive-translate-theme-opacity-opacity) * 1%)) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
  display: inline-block;
}

[data-immersive-translate-root-translation-theme="none"] .immersive-translate-target-translation-theme-opacity-inner {
  filter: none !important;
}
[data-immersive-translate-root-translation-theme="opacity"] .immersive-translate-target-inner,.immersive-translate-target-translation-theme-opacity-inner:hover {
  filter: opacity(calc(var(--immersive-translate-theme-opacity-opacity) * 1%)) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
  display: inline-block;
}

.immersive-translate-target-translation-theme-opacity-inner:hover {
  filter: none !important;
}


.immersive-translate-target-translation-theme-mask-inner:hover {
  filter: none !important;
}
[data-immersive-translate-root-translation-theme="opacity"] .immersive-translate-target-inner:hover {
  filter: none !important;
}


[data-immersive-translate-root-translation-theme="mask"] .immersive-translate-target-inner:hover {
  filter: none !important;
}

/* opacity theme end */

/* vertical css , please remain it in the last one. */
.immersive-translate-target-translation-vertical-block-wrapper {
  margin: 0px 8px !important;
}

.immersive-translate-text {
  font-size: 15px !important;
}

.immersive-translate-error-toast {
  position: fixed;
  top: 5%;
  z-index: 99999999;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 300px;
  padding: 16px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media all and (min-width: 750px) {
  .immersive-translate-error-toast {
    max-width: 400px;
  }
}


.immersive-translate-clickable-button {
  cursor: pointer;
}

.immersive-translate-help-button {
  cursor: help;
}

.immersive-translate-loading-text:before {
  content: "...";
}


/* dark mode for loading */

@media only screen and (prefers-color-scheme: dark) {
  .immersive-translate-loading {
    border: 2px rgba(255, 255, 255, 0.25) solid !important;
    border-top: 2px rgba(255, 255, 255, 1) solid !important;
  }
}

.immersive-translate-error-wrapper {
  position: relative;
  display: inline-flex;
  padding: 6px;
  margin: 0 12px;
}

.immersive-translate-tooltip {
  position: relative;
  display: inline-flex;
  /* little indicater to indicate it's hoverable */
}

.immersive-translate-tooltip-content {
  /* here's the magic */
  position: absolute;
  z-index: 100000000000;

  left: 50%;
  bottom: 0;
  transform: translate(-50%, 110%);
  line-height: 1;
  /* and add a small left margin */

  /* basic styles */
  width: max-content;
  max-width: 250px;
  word-wrap: break-word;
  white-space: pre-line;
  padding: 10px;
  border-radius: 10px;
  background: #000C;
  color: #fff;
  text-align: center;
  font-size: 14px;
  display: none;
  /* hide by default */
}

.immersive-translate-tooltip:hover .immersive-translate-tooltip-content {
  display: block;
}

.immersive-translate-tooltip:hover+.immersive-translate-tooltip-content {
  display: block;
}

.immersive-translate-tooltip-content-table {
  left: unset !important;
  bottom: unset !important;
  transform: translate(-10%, 50%) !important;
}


.immersive-translate-tooltip:hover:before {
  display: block;
}



.immersive-translate-loading-spinner {
  vertical-align: middle !important;
  width: 10px !important;
  height: 10px !important;
  display: inline-block !important;
  margin: 0 4px !important;
  border: 2px rgba(221, 244, 255, 0.6) solid !important;
  border-top: 2px rgba(0, 0, 0, 0.375) solid !important;
  border-left: 2px rgba(0, 0, 0, 0.375) solid !important;
  border-radius: 50% !important;
  padding: 0 !important;
  -webkit-animation: immersive-translate-loading-animation 0.6s infinite linear !important;
  animation: immersive-translate-loading-animation 0.6s infinite linear !important;
}

@-webkit-keyframes immersive-translate-loading-animation {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(359deg);
  }
}

@keyframes immersive-translate-loading-animation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}
`,IMMERSIVE_TRANSLATE_INPUT_INJECTED_CSS:`.immersive-translate-input {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2147483647;
  display: flex;
  justify-content: center;
  align-items: center;
}

.immersive-translate-loading-spinner {
  vertical-align: middle !important;
  width: 10px !important;
  height: 10px !important;
  display: inline-block !important;
  margin: 0 4px !important;
  border: 2px rgba(221, 244, 255, 0.6) solid !important;
  border-top: 2px rgba(0, 0, 0, 0.375) solid !important;
  border-left: 2px rgba(0, 0, 0, 0.375) solid !important;
  border-radius: 50% !important;
  padding: 0 !important;
  -webkit-animation: immersive-translate-loading-animation 0.6s infinite linear !important;
  animation: immersive-translate-loading-animation 0.6s infinite linear !important;
}

@-webkit-keyframes immersive-translate-loading-animation {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(359deg);
  }
}

@keyframes immersive-translate-loading-animation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}


.immersive-translate-input-loading {
  --loading-color: #f78fb6;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: block;
  margin: 12px auto;
  position: relative;
  color: white;
  left: -100px;
  box-sizing: border-box;
  animation: immersiveTranslateShadowRolling 1.5s linear infinite;
}

@keyframes immersiveTranslateShadowRolling {
  0% {
    box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }

  12% {
    box-shadow: 100px 0 var(--loading-color), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }

  25% {
    box-shadow: 110px 0 var(--loading-color), 100px 0 var(--loading-color), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0);
  }

  36% {
    box-shadow: 120px 0 var(--loading-color), 110px 0 var(--loading-color), 100px 0 var(--loading-color), 0px 0 rgba(255, 255, 255, 0);
  }

  50% {
    box-shadow: 130px 0 var(--loading-color), 120px 0 var(--loading-color), 110px 0 var(--loading-color), 100px 0 var(--loading-color);
  }

  62% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 var(--loading-color), 120px 0 var(--loading-color), 110px 0 var(--loading-color);
  }

  75% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 var(--loading-color), 120px 0 var(--loading-color);
  }

  87% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 var(--loading-color);
  }

  100% {
    box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0);
  }
}


.immersive-translate-search-recomend {
  border: 1px solid #dadce0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  position: relative;
  font-size: 16px;
}
.immersive-translate-search-enhancement-en-title {
  color: #4d5156;
}
/* dark */
@media (prefers-color-scheme: dark) {
  .immersive-translate-search-recomend {
    border: 1px solid #3c4043;
  }
  .immersive-translate-close-action svg {
    fill: #bdc1c6;
  }

.immersive-translate-search-enhancement-en-title {
  color: #bdc1c6;
}
}


.immersive-translate-search-settings {
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
}

.immersive-translate-search-recomend::before {
  /* content: " "; */
  /* width: 20px; */
  /* height: 20px; */
  /* top: 16px; */
  /* position: absolute; */
  /* background: center / contain url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAxlBMVEUAAADpTInqTIjpSofnSIfqS4nfS4XqS4nqTIjsTYnrTInqTIroS4jvQIDqTIn////+/v7rSYjpTIn8/v7uaZzrTIr9/f3wfansWJL88/b85e73qc39+/v3xNnylrvrVI/98fb62Obva5/8+fr76vH4y9zpSIj74e353Oj1ocTzm77xhK/veKbtYpjsXJTqU47oTInxjrXyh7L99fj40eH2ttH1udD3sc31ssz1rMnykLXucqPtbqD85e/1xdn2u9DzqcXrUY6FaJb8AAAADnRSTlMA34BgIM8Q37/fz7+/EGOHcVQAAAGhSURBVDjLhZPncuowEEZFTW7bXVU7xsYYTO/p7bb3f6lICIOYJOT4h7/VnFmvrBFjrF3/CR/SajBHswafctG0Qg3O8O0Xa8BZ6uw7eLjqr30SofCDVSkemMinfL1ecy20r5ygR5zz3ArcAqJExPTPKhDENEmS30Q9+yo4lEQkqVTiIEAHCT10xWERRdH0Bq0aCOPZNDV3s0xaYce1lHEoDHU8wEh3qRJypNcTAeKUIjgKMeGLDoRCLVLTVf+Ownj8Kk6H9HM6QXPgYjQSB0F00EJEu10ILQrs/QeP77BSSr0MzLOyuJJQbnUoOOIUI/A8EeJk9E4YUHUWiRyTVKGgQUB8/3e/NpdGlfI+FMQyWsCBWyz4A/ZyHXyiiz0Ne5aGZssoxRmcChw8/EFKQ5JwwkUo3FRT5yXS7q+Y/rHDZmFktzpGMvO+5QofA4FPpEmGw+EWRCFvnaof7Zhe8NuYSLR0xErKLThUSs8gnODh87ssy6438yzbLzxl012HS19vfCf3CNhnbWOL1eEsDda+gDPUvri8tSZzNFrwIZf1NmNvqC1I/t8j7nYAAAAASUVORK5CYII='); */
}

.immersive-translate-search-title {}

.immersive-translate-search-title-wrapper {}

.immersive-translate-search-time {
  font-size: 12px;
  margin: 4px 0 24px;
  color: #70757a;
}

.immersive-translate-expand-items {
  display: none;
}

.immersive-translate-search-more {
  margin-top: 16px;
  font-size: 14px;
}

.immersive-translate-modal {
  display: none;
  position: fixed;
  z-index: 1000000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  font-size:15px;
}

.immersive-translate-modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}

.immersive-translate-modal-title {
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 20px;
  color: hsl(205, 20%, 32%);
}

.immersive-translate-modal-body {
  color: hsl(205, 20%, 32%)
}

.immersive-translate-close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.immersive-translate-close:hover,
.immersive-translate-close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.immersive-translate-modal-footer {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;
}

.immersive-translate-btn {
  width: fit-content;
  color: #fff;
  background-color: #ea4c89;
  border: none;
  font-size: 14px;
  margin: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.immersive-translate-btn:hover {
  background-color: #f082ac;
}
.immersive-translate-cancel-btn {
  /* gray color */
  background-color: rgb(89, 107, 120);
}


.immersive-translate-cancel-btn:hover {
  background-color: hsl(205, 20%, 32%);
}


.immersive-translate-btn svg {
  margin-right: 5px;
}

.immersive-translate-link {
  cursor: pointer;
  user-select: none;
  -webkit-user-drag: none;
  text-decoration: none;
  color: #007bff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, .1);
}

.immersive-translate-primary-link {
  cursor: pointer;
  user-select: none;
  -webkit-user-drag: none;
  text-decoration: none;
  color: #ea4c89;
  -webkit-tap-highlight-color: rgba(0, 0, 0, .1);
}

.immersive-translate-modal input[type="radio"] {
  margin: 0 6px;
  cursor: pointer;
}

.immersive-translate-modal label {
  cursor: pointer;
}

.immersive-translate-close-action {
  position: absolute;
  top: 2px;
  right: 0px;
  cursor: pointer;
}
`,IMMERSIVE_TRANSLATE_PICO_CSS:`@charset "UTF-8";
/*!
 * Pico.css v1.5.6 (https://picocss.com)
 * Copyright 2019-2022 - Licensed under MIT
 */
/**
 * Theme: default
 */
#mount {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 0.25rem;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 1rem;
  --typography-spacing-vertical: 1.5rem;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 0.75rem;
  --form-element-spacing-horizontal: 1rem;
  --nav-element-spacing-vertical: 1rem;
  --nav-element-spacing-horizontal: 0.5rem;
  --nav-link-spacing-vertical: 0.5rem;
  --nav-link-spacing-horizontal: 0.5rem;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
  --modal-overlay-backdrop-filter: blur(0.25rem);
}
@media (min-width: 576px) {
  #mount {
    --font-size: 17px;
  }
}
@media (min-width: 768px) {
  #mount {
    --font-size: 18px;
  }
}
@media (min-width: 992px) {
  #mount {
    --font-size: 19px;
  }
}
@media (min-width: 1200px) {
  #mount {
    --font-size: 20px;
  }
}

@media (min-width: 576px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
  }
}
@media (min-width: 768px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 3);
  }
}
@media (min-width: 992px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 3.5);
  }
}
@media (min-width: 1200px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 4);
  }
}

@media (min-width: 576px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}
@media (min-width: 992px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.75);
  }
}
@media (min-width: 1200px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 2);
  }
}

dialog > article {
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
}
@media (min-width: 576px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 3);
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}

a {
  --text-decoration: none;
}
a.secondary,
a.contrast {
  --text-decoration: underline;
}

small {
  --font-size: 0.875em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  --font-weight: 700;
}

h1 {
  --font-size: 2rem;
  --typography-spacing-vertical: 3rem;
}

h2 {
  --font-size: 1.75rem;
  --typography-spacing-vertical: 2.625rem;
}

h3 {
  --font-size: 1.5rem;
  --typography-spacing-vertical: 2.25rem;
}

h4 {
  --font-size: 1.25rem;
  --typography-spacing-vertical: 1.874rem;
}

h5 {
  --font-size: 1.125rem;
  --typography-spacing-vertical: 1.6875rem;
}

[type="checkbox"],
[type="radio"] {
  --border-width: 2px;
}

[type="checkbox"][role="switch"] {
  --border-width: 3px;
}

thead th,
thead td,
tfoot th,
tfoot td {
  --border-width: 3px;
}

:not(thead, tfoot) > * > td {
  --font-size: 0.875em;
}

pre,
code,
kbd,
samp {
  --font-family: "Menlo", "Consolas", "Roboto Mono", "Ubuntu Monospace",
    "Noto Mono", "Oxygen Mono", "Liberation Mono", monospace,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

kbd {
  --font-weight: bolder;
}

[data-theme="light"],
#mount:not([data-theme="dark"]) {
  --background-color: #fff;
  --background-light-green: #F5F7F9; 
  --color: hsl(205deg, 20%, 32%);
  --h1-color: hsl(205deg, 30%, 15%);
  --h2-color: #24333e;
  --h3-color: hsl(205deg, 25%, 23%);
  --h4-color: #374956;
  --h5-color: hsl(205deg, 20%, 32%);
  --h6-color: #4d606d;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: hsl(205deg, 20%, 94%);
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 90%, 32%);
  --primary-focus: rgba(16, 149, 193, 0.125);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 20%, 32%);
  --secondary-focus: rgba(89, 107, 120, 0.125);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 30%, 15%);
  --contrast-hover: #000;
  --contrast-focus: rgba(89, 107, 120, 0.125);
  --contrast-inverse: #fff;
  --mark-background-color: #fff2ca;
  --mark-color: #543a26;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: transparent;
  --form-element-border-color: hsl(205deg, 14%, 68%);
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: transparent;
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 18%, 86%);
  --form-element-disabled-border-color: hsl(205deg, 14%, 68%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #c62828;
  --form-element-invalid-active-border-color: #d32f2f;
  --form-element-invalid-focus-color: rgba(211, 47, 47, 0.125);
  --form-element-valid-border-color: #388e3c;
  --form-element-valid-active-border-color: #43a047;
  --form-element-valid-focus-color: rgba(67, 160, 71, 0.125);
  --switch-background-color: hsl(205deg, 16%, 77%);
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: hsl(205deg, 18%, 86%);
  --range-active-border-color: hsl(205deg, 16%, 77%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: #f6f8f9;
  --code-background-color: hsl(205deg, 20%, 94%);
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 40%, 50%);
  --code-property-color: hsl(185deg, 40%, 40%);
  --code-value-color: hsl(40deg, 20%, 50%);
  --code-comment-color: hsl(205deg, 14%, 68%);
  --accordion-border-color: var(--muted-border-color);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: var(--background-color);
  --card-border-color: var(--muted-border-color);
  --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(27, 40, 50, 0.01698),
    0.0335rem 0.067rem 0.402rem rgba(27, 40, 50, 0.024),
    0.0625rem 0.125rem 0.75rem rgba(27, 40, 50, 0.03),
    0.1125rem 0.225rem 1.35rem rgba(27, 40, 50, 0.036),
    0.2085rem 0.417rem 2.502rem rgba(27, 40, 50, 0.04302),
    0.5rem 1rem 6rem rgba(27, 40, 50, 0.06),
    0 0 0 0.0625rem rgba(27, 40, 50, 0.015);
  --card-sectionning-background-color: #fbfbfc;
  --dropdown-background-color: #fbfbfc;
  --dropdown-border-color: #e1e6eb;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: hsl(205deg, 20%, 94%);
  --modal-overlay-background-color: rgba(213, 220, 226, 0.7);
  --progress-background-color: hsl(205deg, 18%, 86%);
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(198, 40, 40)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(56, 142, 60)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-share: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTguOTM0OCA4LjY0ODQ0QzIwLjg5NDEgOC42NDg0NCAyMi40ODU1IDcuMDU0NjkgMjIuNDg1NSA1LjA5NzY2QzIyLjQ4NTUgMy4xNDA2MiAyMC44OTE4IDEuNTQ2ODggMTguOTM0OCAxLjU0Njg4QzE2Ljk3NTQgMS41NDY4OCAxNS4zODQgMy4xNDA2MiAxNS4zODQgNS4wOTc2NkMxNS4zODQgNS4yOTkyMiAxNS40MDA0IDUuNDkzNzUgMTUuNDMzMiA1LjY4NTk0TDcuMzIzODMgOS4zNTM5MUM2LjcwOTc3IDguODQ1MzEgNS45MjIyNyA4LjU0MDYyIDUuMDY0NDUgOC41NDA2MkMzLjEwNTA4IDguNTQwNjIgMS41MTM2NyAxMC4xMzQ0IDEuNTEzNjcgMTIuMDkxNEMxLjUxMzY3IDE0LjA0ODQgMy4xMDc0MiAxNS42NDIyIDUuMDY0NDUgMTUuNjQyMkM1LjgzMzIgMTUuNjQyMiA2LjU0NTcgMTUuMzk2MSA3LjEyNjk1IDE0Ljk4MTNMMTIuNDk0MSAxNy45OTUzQzEyLjQxNjggMTguMjg1OSAxMi4zNzcgMTguNTg4MyAxMi4zNzcgMTguOTAyM0MxMi4zNzcgMjAuODYxNyAxMy45NzA3IDIyLjQ1MzEgMTUuOTI3NyAyMi40NTMxQzE3Ljg4NzEgMjIuNDUzMSAxOS40Nzg1IDIwLjg1OTQgMTkuNDc4NSAxOC45MDIzQzE5LjQ3ODUgMTYuOTQzIDE3Ljg4NDggMTUuMzUxNiAxNS45Mjc3IDE1LjM1MTZDMTQuOTU3NCAxNS4zNTE2IDE0LjA3ODUgMTUuNzQzIDEzLjQzNjMgMTYuMzczNEw4LjMyMjI3IDEzLjUwNDdDOC41MDk3NyAxMy4wNzExIDguNjE1MjMgMTIuNTk1MyA4LjYxNTIzIDEyLjA5MzhDOC42MTUyMyAxMS42ODEyIDguNTQ0OTIgMTEuMjg3NSA4LjQxNjAyIDEwLjkxOTVMMTYuMjIzIDcuMzg3NUMxNi44NzQ2IDguMTU2MjUgMTcuODQ5NiA4LjY0ODQ0IDE4LjkzNDggOC42NDg0NFpNNS4wNjQ0NSAxMy43Njk1QzQuMTQxMDIgMTMuNzY5NSAzLjM4ODY3IDEzLjAxNzIgMy4zODg2NyAxMi4wOTM4QzMuMzg4NjcgMTEuMTcwMyA0LjE0MTAyIDEwLjQxOCA1LjA2NDQ1IDEwLjQxOEM1Ljk4Nzg5IDEwLjQxOCA2Ljc0MDIzIDExLjE3MDMgNi43NDAyMyAxMi4wOTM4QzYuNzQwMjMgMTMuMDE3MiA1Ljk4Nzg5IDEzLjc2OTUgNS4wNjQ0NSAxMy43Njk1Wk0xNS45Mjc3IDE3LjIyNjZDMTYuODUxMiAxNy4yMjY2IDE3LjYwMzUgMTcuOTc4OSAxNy42MDM1IDE4LjkwMjNDMTcuNjAzNSAxOS44MjU4IDE2Ljg1MTIgMjAuNTc4MSAxNS45Mjc3IDIwLjU3ODFDMTUuMDA0MyAyMC41NzgxIDE0LjI1MiAxOS44MjU4IDE0LjI1MiAxOC45MDIzQzE0LjI1MiAxNy45Nzg5IDE1LjAwMiAxNy4yMjY2IDE1LjkyNzcgMTcuMjI2NlpNMTguOTM0OCAzLjQxOTUzQzE5Ljg1ODIgMy40MTk1MyAyMC42MTA1IDQuMTcxODcgMjAuNjEwNSA1LjA5NTMxQzIwLjYxMDUgNi4wMTg3NSAxOS44NTgyIDYuNzcxMDkgMTguOTM0OCA2Ljc3MTA5QzE4LjAxMTMgNi43NzEwOSAxNy4yNTkgNi4wMTg3NSAxNy4yNTkgNS4wOTUzMUMxNy4yNTkgNC4xNzE4NyAxOC4wMTEzIDMuNDE5NTMgMTguOTM0OCAzLjQxOTUzWicgZmlsbD0nIzgzODM4MycvPjwvc3ZnPiA=");
  color-scheme: light;
}

@media only screen and (prefers-color-scheme: dark) {
  #mount:not([data-theme="light"]) {
    --background-color: #11191f;
    --background-light-green: #141e26; 
    --color: hsl(205deg, 16%, 77%);
    --h1-color: hsl(205deg, 20%, 94%);
    --h2-color: #e1e6eb;
    --h3-color: hsl(205deg, 18%, 86%);
    --h4-color: #c8d1d8;
    --h5-color: hsl(205deg, 16%, 77%);
    --h6-color: #afbbc4;
    --muted-color: hsl(205deg, 10%, 50%);
    --muted-border-color: #1f2d38;
    --primary: hsl(195deg, 85%, 41%);
    --primary-hover: hsl(195deg, 80%, 50%);
    --primary-focus: rgba(16, 149, 193, 0.25);
    --primary-inverse: #fff;
    --secondary: hsl(205deg, 15%, 41%);
    --secondary-hover: hsl(205deg, 10%, 50%);
    --secondary-focus: rgba(115, 130, 140, 0.25);
    --secondary-inverse: #fff;
    --contrast: hsl(205deg, 20%, 94%);
    --contrast-hover: #fff;
    --contrast-focus: rgba(115, 130, 140, 0.25);
    --contrast-inverse: #000;
    --mark-background-color: #d1c284;
    --mark-color: #11191f;
    --ins-color: #388e3c;
    --del-color: #c62828;
    --blockquote-border-color: var(--muted-border-color);
    --blockquote-footer-color: var(--muted-color);
    --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --form-element-background-color: #11191f;
    --form-element-border-color: #374956;
    --form-element-color: var(--color);
    --form-element-placeholder-color: var(--muted-color);
    --form-element-active-background-color: var(
      --form-element-background-color
    );
    --form-element-active-border-color: var(--primary);
    --form-element-focus-color: var(--primary-focus);
    --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
    --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
    --form-element-disabled-opacity: 0.5;
    --form-element-invalid-border-color: #b71c1c;
    --form-element-invalid-active-border-color: #c62828;
    --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
    --form-element-valid-border-color: #2e7d32;
    --form-element-valid-active-border-color: #388e3c;
    --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
    --switch-background-color: #374956;
    --switch-color: var(--primary-inverse);
    --switch-checked-background-color: var(--primary);
    --range-border-color: #24333e;
    --range-active-border-color: hsl(205deg, 25%, 23%);
    --range-thumb-border-color: var(--background-color);
    --range-thumb-color: var(--secondary);
    --range-thumb-hover-color: var(--secondary-hover);
    --range-thumb-active-color: var(--primary);
    --table-border-color: var(--muted-border-color);
    --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
    --code-background-color: #18232c;
    --code-color: var(--muted-color);
    --code-kbd-background-color: var(--contrast);
    --code-kbd-color: var(--contrast-inverse);
    --code-tag-color: hsl(330deg, 30%, 50%);
    --code-property-color: hsl(185deg, 30%, 50%);
    --code-value-color: hsl(40deg, 10%, 50%);
    --code-comment-color: #4d606d;
    --accordion-border-color: var(--muted-border-color);
    --accordion-active-summary-color: var(--primary);
    --accordion-close-summary-color: var(--color);
    --accordion-open-summary-color: var(--muted-color);
    --card-background-color: #141e26;
    --card-border-color: var(--card-background-color);
    --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(0, 0, 0, 0.01698),
      0.0335rem 0.067rem 0.402rem rgba(0, 0, 0, 0.024),
      0.0625rem 0.125rem 0.75rem rgba(0, 0, 0, 0.03),
      0.1125rem 0.225rem 1.35rem rgba(0, 0, 0, 0.036),
      0.2085rem 0.417rem 2.502rem rgba(0, 0, 0, 0.04302),
      0.5rem 1rem 6rem rgba(0, 0, 0, 0.06), 0 0 0 0.0625rem rgba(0, 0, 0, 0.015);
    --card-sectionning-background-color: #18232c;
    --dropdown-background-color: hsl(205deg, 30%, 15%);
    --dropdown-border-color: #24333e;
    --dropdown-box-shadow: var(--card-box-shadow);
    --dropdown-color: var(--color);
    --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
    --modal-overlay-background-color: rgba(36, 51, 62, 0.8);
    --progress-background-color: #24333e;
    --progress-color: var(--primary);
    --loading-spinner-opacity: 0.5;
    --tooltip-background-color: var(--contrast);
    --tooltip-color: var(--contrast-inverse);
    --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
    --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
    --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(183, 28, 28)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
    --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
    --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
    --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(46, 125, 50)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-share: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMjInIGhlaWdodD0nMjInIHZpZXdCb3g9JzAgMCAyMiAyMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTcuOTM0OCA3LjY0ODQ0QzE5Ljg5NDEgNy42NDg0NCAyMS40ODU1IDYuMDU0NjkgMjEuNDg1NSA0LjA5NzY2QzIxLjQ4NTUgMi4xNDA2MiAxOS44OTE4IDAuNTQ2ODc1IDE3LjkzNDggMC41NDY4NzVDMTUuOTc1NCAwLjU0Njg3NSAxNC4zODQgMi4xNDA2MiAxNC4zODQgNC4wOTc2NkMxNC4zODQgNC4yOTkyMiAxNC40MDA0IDQuNDkzNzUgMTQuNDMzMiA0LjY4NTk0TDYuMzIzODMgOC4zNTM5MUM1LjcwOTc3IDcuODQ1MzEgNC45MjIyNyA3LjU0MDYyIDQuMDY0NDUgNy41NDA2MkMyLjEwNTA4IDcuNTQwNjIgMC41MTM2NzIgOS4xMzQzOCAwLjUxMzY3MiAxMS4wOTE0QzAuNTEzNjcyIDEzLjA0ODQgMi4xMDc0MiAxNC42NDIyIDQuMDY0NDUgMTQuNjQyMkM0LjgzMzIgMTQuNjQyMiA1LjU0NTcgMTQuMzk2MSA2LjEyNjk1IDEzLjk4MTNMMTEuNDk0MSAxNi45OTUzQzExLjQxNjggMTcuMjg1OSAxMS4zNzcgMTcuNTg4MyAxMS4zNzcgMTcuOTAyM0MxMS4zNzcgMTkuODYxNyAxMi45NzA3IDIxLjQ1MzEgMTQuOTI3NyAyMS40NTMxQzE2Ljg4NzEgMjEuNDUzMSAxOC40Nzg1IDE5Ljg1OTQgMTguNDc4NSAxNy45MDIzQzE4LjQ3ODUgMTUuOTQzIDE2Ljg4NDggMTQuMzUxNiAxNC45Mjc3IDE0LjM1MTZDMTMuOTU3NCAxNC4zNTE2IDEzLjA3ODUgMTQuNzQzIDEyLjQzNjMgMTUuMzczNEw3LjMyMjI3IDEyLjUwNDdDNy41MDk3NyAxMi4wNzExIDcuNjE1MjMgMTEuNTk1MyA3LjYxNTIzIDExLjA5MzhDNy42MTUyMyAxMC42ODEyIDcuNTQ0OTIgMTAuMjg3NSA3LjQxNjAyIDkuOTE5NTNMMTUuMjIzIDYuMzg3NUMxNS44NzQ2IDcuMTU2MjUgMTYuODQ5NiA3LjY0ODQ0IDE3LjkzNDggNy42NDg0NFpNNC4wNjQ0NSAxMi43Njk1QzMuMTQxMDIgMTIuNzY5NSAyLjM4ODY3IDEyLjAxNzIgMi4zODg2NyAxMS4wOTM4QzIuMzg4NjcgMTAuMTcwMyAzLjE0MTAyIDkuNDE3OTcgNC4wNjQ0NSA5LjQxNzk3QzQuOTg3ODkgOS40MTc5NyA1Ljc0MDIzIDEwLjE3MDMgNS43NDAyMyAxMS4wOTM4QzUuNzQwMjMgMTIuMDE3MiA0Ljk4Nzg5IDEyLjc2OTUgNC4wNjQ0NSAxMi43Njk1Wk0xNC45Mjc3IDE2LjIyNjZDMTUuODUxMiAxNi4yMjY2IDE2LjYwMzUgMTYuOTc4OSAxNi42MDM1IDE3LjkwMjNDMTYuNjAzNSAxOC44MjU4IDE1Ljg1MTIgMTkuNTc4MSAxNC45Mjc3IDE5LjU3ODFDMTQuMDA0MyAxOS41NzgxIDEzLjI1MiAxOC44MjU4IDEzLjI1MiAxNy45MDIzQzEzLjI1MiAxNi45Nzg5IDE0LjAwMiAxNi4yMjY2IDE0LjkyNzcgMTYuMjI2NlpNMTcuOTM0OCAyLjQxOTUzQzE4Ljg1ODIgMi40MTk1MyAxOS42MTA1IDMuMTcxODcgMTkuNjEwNSA0LjA5NTMxQzE5LjYxMDUgNS4wMTg3NSAxOC44NTgyIDUuNzcxMDkgMTcuOTM0OCA1Ljc3MTA5QzE3LjAxMTMgNS43NzEwOSAxNi4yNTkgNS4wMTg3NSAxNi4yNTkgNC4wOTUzMUMxNi4yNTkgMy4xNzE4NyAxNy4wMTEzIDIuNDE5NTMgMTcuOTM0OCAyLjQxOTUzWicgZmlsbD0nI0I2QjZCNicvPjwvc3ZnPiA=");
    color-scheme: dark;
  }
}
[data-theme="dark"] {
  --background-color: #11191f;
  --background-light-green: #141e26; 
  --color: hsl(205deg, 16%, 77%);
  --h1-color: hsl(205deg, 20%, 94%);
  --h2-color: #e1e6eb;
  --h3-color: hsl(205deg, 18%, 86%);
  --h4-color: #c8d1d8;
  --h5-color: hsl(205deg, 16%, 77%);
  --h6-color: #afbbc4;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: #1f2d38;
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 80%, 50%);
  --primary-focus: rgba(16, 149, 193, 0.25);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 10%, 50%);
  --secondary-focus: rgba(115, 130, 140, 0.25);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 20%, 94%);
  --contrast-hover: #fff;
  --contrast-focus: rgba(115, 130, 140, 0.25);
  --contrast-inverse: #000;
  --mark-background-color: #d1c284;
  --mark-color: #11191f;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: #11191f;
  --form-element-border-color: #374956;
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: var(--form-element-background-color);
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
  --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #b71c1c;
  --form-element-invalid-active-border-color: #c62828;
  --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
  --form-element-valid-border-color: #2e7d32;
  --form-element-valid-active-border-color: #388e3c;
  --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
  --switch-background-color: #374956;
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: #24333e;
  --range-active-border-color: hsl(205deg, 25%, 23%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
  --code-background-color: #18232c;
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 30%, 50%);
  --code-property-color: hsl(185deg, 30%, 50%);
  --code-value-color: hsl(40deg, 10%, 50%);
  --code-comment-color: #4d606d;
  --accordion-border-color: var(--muted-border-color);
  --accordion-active-summary-color: var(--primary);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: #141e26;
  --card-border-color: var(--card-background-color);
  --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(0, 0, 0, 0.01698),
    0.0335rem 0.067rem 0.402rem rgba(0, 0, 0, 0.024),
    0.0625rem 0.125rem 0.75rem rgba(0, 0, 0, 0.03),
    0.1125rem 0.225rem 1.35rem rgba(0, 0, 0, 0.036),
    0.2085rem 0.417rem 2.502rem rgba(0, 0, 0, 0.04302),
    0.5rem 1rem 6rem rgba(0, 0, 0, 0.06), 0 0 0 0.0625rem rgba(0, 0, 0, 0.015);
  --card-sectionning-background-color: #18232c;
  --dropdown-background-color: hsl(205deg, 30%, 15%);
  --dropdown-border-color: #24333e;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
  --modal-overlay-background-color: rgba(36, 51, 62, 0.8);
  --progress-background-color: #24333e;
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(183, 28, 28)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(46, 125, 50)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-share: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMjInIGhlaWdodD0nMjInIHZpZXdCb3g9JzAgMCAyMiAyMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTcuOTM0OCA3LjY0ODQ0QzE5Ljg5NDEgNy42NDg0NCAyMS40ODU1IDYuMDU0NjkgMjEuNDg1NSA0LjA5NzY2QzIxLjQ4NTUgMi4xNDA2MiAxOS44OTE4IDAuNTQ2ODc1IDE3LjkzNDggMC41NDY4NzVDMTUuOTc1NCAwLjU0Njg3NSAxNC4zODQgMi4xNDA2MiAxNC4zODQgNC4wOTc2NkMxNC4zODQgNC4yOTkyMiAxNC40MDA0IDQuNDkzNzUgMTQuNDMzMiA0LjY4NTk0TDYuMzIzODMgOC4zNTM5MUM1LjcwOTc3IDcuODQ1MzEgNC45MjIyNyA3LjU0MDYyIDQuMDY0NDUgNy41NDA2MkMyLjEwNTA4IDcuNTQwNjIgMC41MTM2NzIgOS4xMzQzOCAwLjUxMzY3MiAxMS4wOTE0QzAuNTEzNjcyIDEzLjA0ODQgMi4xMDc0MiAxNC42NDIyIDQuMDY0NDUgMTQuNjQyMkM0LjgzMzIgMTQuNjQyMiA1LjU0NTcgMTQuMzk2MSA2LjEyNjk1IDEzLjk4MTNMMTEuNDk0MSAxNi45OTUzQzExLjQxNjggMTcuMjg1OSAxMS4zNzcgMTcuNTg4MyAxMS4zNzcgMTcuOTAyM0MxMS4zNzcgMTkuODYxNyAxMi45NzA3IDIxLjQ1MzEgMTQuOTI3NyAyMS40NTMxQzE2Ljg4NzEgMjEuNDUzMSAxOC40Nzg1IDE5Ljg1OTQgMTguNDc4NSAxNy45MDIzQzE4LjQ3ODUgMTUuOTQzIDE2Ljg4NDggMTQuMzUxNiAxNC45Mjc3IDE0LjM1MTZDMTMuOTU3NCAxNC4zNTE2IDEzLjA3ODUgMTQuNzQzIDEyLjQzNjMgMTUuMzczNEw3LjMyMjI3IDEyLjUwNDdDNy41MDk3NyAxMi4wNzExIDcuNjE1MjMgMTEuNTk1MyA3LjYxNTIzIDExLjA5MzhDNy42MTUyMyAxMC42ODEyIDcuNTQ0OTIgMTAuMjg3NSA3LjQxNjAyIDkuOTE5NTNMMTUuMjIzIDYuMzg3NUMxNS44NzQ2IDcuMTU2MjUgMTYuODQ5NiA3LjY0ODQ0IDE3LjkzNDggNy42NDg0NFpNNC4wNjQ0NSAxMi43Njk1QzMuMTQxMDIgMTIuNzY5NSAyLjM4ODY3IDEyLjAxNzIgMi4zODg2NyAxMS4wOTM4QzIuMzg4NjcgMTAuMTcwMyAzLjE0MTAyIDkuNDE3OTcgNC4wNjQ0NSA5LjQxNzk3QzQuOTg3ODkgOS40MTc5NyA1Ljc0MDIzIDEwLjE3MDMgNS43NDAyMyAxMS4wOTM4QzUuNzQwMjMgMTIuMDE3MiA0Ljk4Nzg5IDEyLjc2OTUgNC4wNjQ0NSAxMi43Njk1Wk0xNC45Mjc3IDE2LjIyNjZDMTUuODUxMiAxNi4yMjY2IDE2LjYwMzUgMTYuOTc4OSAxNi42MDM1IDE3LjkwMjNDMTYuNjAzNSAxOC44MjU4IDE1Ljg1MTIgMTkuNTc4MSAxNC45Mjc3IDE5LjU3ODFDMTQuMDA0MyAxOS41NzgxIDEzLjI1MiAxOC44MjU4IDEzLjI1MiAxNy45MDIzQzEzLjI1MiAxNi45Nzg5IDE0LjAwMiAxNi4yMjY2IDE0LjkyNzcgMTYuMjI2NlpNMTcuOTM0OCAyLjQxOTUzQzE4Ljg1ODIgMi40MTk1MyAxOS42MTA1IDMuMTcxODcgMTkuNjEwNSA0LjA5NTMxQzE5LjYxMDUgNS4wMTg3NSAxOC44NTgyIDUuNzcxMDkgMTcuOTM0OCA1Ljc3MTA5QzE3LjAxMTMgNS43NzEwOSAxNi4yNTkgNS4wMTg3NSAxNi4yNTkgNC4wOTUzMUMxNi4yNTkgMy4xNzE4NyAxNy4wMTEzIDIuNDE5NTMgMTcuOTM0OCAyLjQxOTUzWicgZmlsbD0nI0I2QjZCNicvPjwvc3ZnPiA=");
  color-scheme: dark;
}

progress,
[type="checkbox"],
[type="radio"],
[type="range"] {
  accent-color: var(--primary);
}

/**
 * Document
 * Content-box & Responsive typography
 */
*,
*::before,
*::after {
  box-sizing: border-box;
  background-repeat: no-repeat;
}

::before,
::after {
  text-decoration: inherit;
  vertical-align: inherit;
}

:where(#mount) {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  background-color: var(--background-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  line-height: var(--line-height);
  font-family: var(--font-family);
  text-rendering: optimizeLegibility;
  overflow-wrap: break-word;
  cursor: default;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}

/**
 * Sectioning
 * Container and responsive spacings for header, main, footer
 */
main {
  display: block;
}

#mount {
  width: 100%;
  margin: 0;
}
#mount > header,
#mount > main,
#mount > footer {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
}
@media (min-width: 576px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 1130px;
  }
}

/**
* Container
*/
.container,
.container-fluid {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--spacing);
  padding-left: var(--spacing);
}

@media (min-width: 576px) {
  .container {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1130px;
  }
}

/**
 * Section
 * Responsive spacings for section
 */
section {
  margin-bottom: var(--block-spacing-vertical);
}

/**
* Grid
* Minimal grid system with auto-layout columns
*/
.grid {
  grid-column-gap: var(--grid-spacing-horizontal);
  grid-row-gap: var(--grid-spacing-vertical);
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
}
@media (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(0%, 1fr));
  }
}
.grid > * {
  min-width: 0;
}

/**
 * Horizontal scroller (<figure>)
 */
figure {
  display: block;
  margin: 0;
  padding: 0;
  overflow-x: auto;
}
figure figcaption {
  padding: calc(var(--spacing) * 0.5) 0;
  color: var(--muted-color);
}

/**
 * Typography
 */
b,
strong {
  font-weight: bolder;
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

address,
blockquote,
dl,
figure,
form,
ol,
p,
pre,
table,
ul {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: var(--font-size);
}

a,
[role="link"] {
  --color: var(--primary);
  --background-color: transparent;
  outline: none;
  background-color: var(--background-color);
  color: var(--color);
  -webkit-text-decoration: var(--text-decoration);
  text-decoration: var(--text-decoration);
  transition: background-color var(--transition), color var(--transition),
    box-shadow var(--transition), -webkit-text-decoration var(--transition);
  transition: background-color var(--transition), color var(--transition),
    text-decoration var(--transition), box-shadow var(--transition);
  transition: background-color var(--transition), color var(--transition),
    text-decoration var(--transition), box-shadow var(--transition),
    -webkit-text-decoration var(--transition);
}
a:is([aria-current], :hover, :active, :focus),
[role="link"]:is([aria-current], :hover, :active, :focus) {
  --color: var(--primary-hover);
  --text-decoration: underline;
}
a:focus,
[role="link"]:focus {
  --background-color: var(--primary-focus);
}
a.secondary,
[role="link"].secondary {
  --color: var(--secondary);
}
a.secondary:is([aria-current], :hover, :active, :focus),
[role="link"].secondary:is([aria-current], :hover, :active, :focus) {
  --color: var(--secondary-hover);
}
a.secondary:focus,
[role="link"].secondary:focus {
  --background-color: var(--secondary-focus);
}
a.contrast,
[role="link"].contrast {
  --color: var(--contrast);
}
a.contrast:is([aria-current], :hover, :active, :focus),
[role="link"].contrast:is([aria-current], :hover, :active, :focus) {
  --color: var(--contrast-hover);
}
a.contrast:focus,
[role="link"].contrast:focus {
  --background-color: var(--contrast-focus);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  font-family: var(--font-family);
}

h1 {
  --color: var(--h1-color);
}

h2 {
  --color: var(--h2-color);
}

h3 {
  --color: var(--h3-color);
}

h4 {
  --color: var(--h4-color);
}

h5 {
  --color: var(--h5-color);
}

h6 {
  --color: var(--h6-color);
}

:where(address, blockquote, dl, figure, form, ol, p, pre, table, ul)
  ~ :is(h1, h2, h3, h4, h5, h6) {
  margin-top: var(--typography-spacing-vertical);
}

hgroup,
.headings {
  margin-bottom: var(--typography-spacing-vertical);
}
hgroup > *,
.headings > * {
  margin-bottom: 0;
}
hgroup > *:last-child,
.headings > *:last-child {
  --color: var(--muted-color);
  --font-weight: unset;
  font-size: 1rem;
  font-family: unset;
}

p {
  margin-bottom: var(--typography-spacing-vertical);
}

small {
  font-size: var(--font-size);
}

:where(dl, ol, ul) {
  padding-right: 0;
  padding-left: var(--spacing);
  -webkit-padding-start: var(--spacing);
  padding-inline-start: var(--spacing);
  -webkit-padding-end: 0;
  padding-inline-end: 0;
}
:where(dl, ol, ul) li {
  margin-bottom: calc(var(--typography-spacing-vertical) * 0.25);
}

:where(dl, ol, ul) :is(dl, ol, ul) {
  margin: 0;
  margin-top: calc(var(--typography-spacing-vertical) * 0.25);
}

ul li {
  list-style: square;
}

mark {
  padding: 0.125rem 0.25rem;
  background-color: var(--mark-background-color);
  color: var(--mark-color);
  vertical-align: baseline;
}

blockquote {
  display: block;
  margin: var(--typography-spacing-vertical) 0;
  padding: var(--spacing);
  border-right: none;
  border-left: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-start: 0.25rem solid var(--blockquote-border-color);
  border-inline-start: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-end: none;
  border-inline-end: none;
}
blockquote footer {
  margin-top: calc(var(--typography-spacing-vertical) * 0.5);
  color: var(--blockquote-footer-color);
}

abbr[title] {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}

ins {
  color: var(--ins-color);
  text-decoration: none;
}

del {
  color: var(--del-color);
}

::-moz-selection {
  background-color: var(--primary-focus);
}

::selection {
  background-color: var(--primary-focus);
}

/**
 * Embedded content
 */
:where(audio, canvas, iframe, img, svg, video) {
  vertical-align: middle;
}

audio,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

:where(iframe) {
  border-style: none;
}

img {
  max-width: 100%;
  height: auto;
  border-style: none;
}

:where(svg:not([fill])) {
  fill: currentColor;
}

svg:not(#mount) {
  overflow: hidden;
}

/**
 * Button
 */
button {
  margin: 0;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button {
  display: block;
  width: 100%;
  margin-bottom: var(--spacing);
}

[role="button"] {
  display: inline-block;
  text-decoration: none;
}

button,
input[type="submit"],
input[type="button"],
input[type="reset"],
[role="button"] {
  --background-color: var(--primary);
  --border-color: var(--primary);
  --color: var(--primary-inverse);
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
button:is([aria-current], :hover, :active, :focus),
input[type="submit"]:is([aria-current], :hover, :active, :focus),
input[type="button"]:is([aria-current], :hover, :active, :focus),
input[type="reset"]:is([aria-current], :hover, :active, :focus),
[role="button"]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--primary-hover);
  --border-color: var(--primary-hover);
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  --color: var(--primary-inverse);
}
button:focus,
input[type="submit"]:focus,
input[type="button"]:focus,
input[type="reset"]:focus,
[role="button"]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--primary-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary,
input[type="reset"] {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  cursor: pointer;
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary:is([aria-current], :hover, :active, :focus),
input[type="reset"]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary:focus,
input[type="reset"]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--secondary-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast {
  --background-color: var(--contrast);
  --border-color: var(--contrast);
  --color: var(--contrast-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--contrast-hover);
  --border-color: var(--contrast-hover);
  --color: var(--contrast-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--contrast-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline,
input[type="reset"].outline {
  --background-color: transparent;
  --color: var(--primary);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline:is([aria-current], :hover, :active, :focus),
input[type="reset"].outline:is([aria-current], :hover, :active, :focus) {
  --background-color: transparent;
  --color: var(--primary-hover);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.secondary,
input[type="reset"].outline {
  --color: var(--secondary);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.secondary:is([aria-current], :hover, :active, :focus),
input[type="reset"].outline:is([aria-current], :hover, :active, :focus) {
  --color: var(--secondary-hover);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.contrast {
  --color: var(--contrast);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.contrast:is([aria-current], :hover, :active, :focus) {
  --color: var(--contrast-hover);
}

:where(
    button,
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="button"]
  )[disabled],
:where(fieldset[disabled])
  :is(
    button,
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="button"]
  ),
a[role="button"]:not([href]) {
  opacity: 0.5;
  pointer-events: none;
}

/**
 * Form elements
 */
input,
optgroup,
select,
textarea {
  margin: 0;
  font-size: 1rem;
  line-height: var(--line-height);
  font-family: inherit;
  letter-spacing: inherit;
}

input {
  overflow: visible;
}

select {
  text-transform: none;
}

legend {
  max-width: 100%;
  padding: 0;
  color: inherit;
  white-space: normal;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  padding: 0;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

:-moz-focusring {
  outline: none;
}

:-moz-ui-invalid {
  box-shadow: none;
}

::-ms-expand {
  display: none;
}

[type="file"],
[type="range"] {
  padding: 0;
  border-width: 0;
}

input:not([type="checkbox"], [type="radio"], [type="range"]) {
  height: calc(
    1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 +
      var(--border-width) * 2
  );
}

fieldset {
  margin: 0;
  margin-bottom: var(--spacing);
  padding: 0;
  border: 0;
}

label,
fieldset legend {
  display: block;
  margin-bottom: calc(var(--spacing) * 0.25);
  font-weight: var(--form-label-font-weight, var(--font-weight));
}

input:not([type="checkbox"], [type="radio"]),
select,
textarea {
  width: 100%;
}

input:not([type="checkbox"], [type="radio"], [type="range"], [type="file"]),
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
}

input,
select,
textarea {
  --background-color: var(--form-element-background-color);
  --border-color: var(--form-element-border-color);
  --color: var(--form-element-color);
  --box-shadow: none;
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [type="checkbox"],
    [type="radio"],
    [readonly]
  ):is(:active, :focus),
:where(select, textarea):is(:active, :focus) {
  --background-color: var(--form-element-active-background-color);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="switch"],
    [readonly]
  ):is(:active, :focus),
:where(select, textarea):is(:active, :focus) {
  --border-color: var(--form-element-active-border-color);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [type="range"],
    [type="file"],
    [readonly]
  ):focus,
select:focus,
textarea:focus {
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}

input:not([type="submit"], [type="button"], [type="reset"])[disabled],
select[disabled],
textarea[disabled],
:where(fieldset[disabled])
  :is(
    input:not([type="submit"], [type="button"], [type="reset"]),
    select,
    textarea
  ) {
  --background-color: var(--form-element-disabled-background-color);
  --border-color: var(--form-element-disabled-border-color);
  opacity: var(--form-element-disabled-opacity);
  pointer-events: none;
}

:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid] {
  padding-right: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal) !important;
  padding-inline-start: var(--form-element-spacing-horizontal) !important;
  -webkit-padding-end: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  padding-inline-end: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid="false"] {
  background-image: var(--icon-valid);
}
:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid="true"] {
  background-image: var(--icon-invalid);
}
:where(input, select, textarea)[aria-invalid="false"] {
  --border-color: var(--form-element-valid-border-color);
}
:where(input, select, textarea)[aria-invalid="false"]:is(:active, :focus) {
  --border-color: var(--form-element-valid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-valid-focus-color) !important;
}
:where(input, select, textarea)[aria-invalid="true"] {
  --border-color: var(--form-element-invalid-border-color);
}
:where(input, select, textarea)[aria-invalid="true"]:is(:active, :focus) {
  --border-color: var(--form-element-invalid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width)
    var(--form-element-invalid-focus-color) !important;
}

[dir="rtl"]
  :where(input, select, textarea):not([type="checkbox"], [type="radio"]):is(
    [aria-invalid],
    [aria-invalid="true"],
    [aria-invalid="false"]
  ) {
  background-position: center left 0.75rem;
}

input::placeholder,
input::-webkit-input-placeholder,
textarea::placeholder,
textarea::-webkit-input-placeholder,
select:invalid {
  color: var(--form-element-placeholder-color);
  opacity: 1;
}

input:not([type="checkbox"], [type="radio"]),
select,
textarea {
  margin-bottom: var(--spacing);
}

select::-ms-expand {
  border: 0;
  background-color: transparent;
}
select:not([multiple], [size]) {
  padding-right: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal);
  padding-inline-start: var(--form-element-spacing-horizontal);
  -webkit-padding-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-inline-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  background-image: var(--icon-chevron);
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}

[dir="rtl"] select:not([multiple], [size]) {
  background-position: center left 0.75rem;
}

:where(input, select, textarea) + small {
  display: block;
  width: 100%;
  margin-top: calc(var(--spacing) * -0.75);
  margin-bottom: var(--spacing);
  color: var(--muted-color);
}

label > :where(input, select, textarea) {
  margin-top: calc(var(--spacing) * 0.25);
}

/**
 * Form elements
 * Checkboxes & Radios
 */
[type="checkbox"],
[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1.25em;
  height: 1.25em;
  margin-top: -0.125em;
  margin-right: 0.375em;
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: 0.375em;
  margin-inline-end: 0.375em;
  border-width: var(--border-width);
  font-size: inherit;
  vertical-align: middle;
  cursor: pointer;
}
[type="checkbox"]::-ms-check,
[type="radio"]::-ms-check {
  display: none;
}
[type="checkbox"]:checked,
[type="checkbox"]:checked:active,
[type="checkbox"]:checked:focus,
[type="radio"]:checked,
[type="radio"]:checked:active,
[type="radio"]:checked:focus {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-checkbox);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}
[type="checkbox"] ~ label,
[type="radio"] ~ label {
  display: inline-block;
  margin-right: 0.375em;
  margin-bottom: 0;
  cursor: pointer;
}

[type="checkbox"]:indeterminate {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-minus);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}

[type="radio"] {
  border-radius: 50%;
}
[type="radio"]:checked,
[type="radio"]:checked:active,
[type="radio"]:checked:focus {
  --background-color: var(--primary-inverse);
  border-width: 0.35em;
  background-image: none;
}

[type="checkbox"][role="switch"] {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
  --color: var(--switch-color);
  width: 2.25em;
  height: 1.25em;
  border: var(--border-width) solid var(--border-color);
  border-radius: 1.25em;
  background-color: var(--background-color);
  line-height: 1.25em;
}
[type="checkbox"][role="switch"]:focus {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
}
[type="checkbox"][role="switch"]:checked {
  --background-color: var(--switch-checked-background-color);
  --border-color: var(--switch-checked-background-color);
}
[type="checkbox"][role="switch"]:before {
  display: block;
  width: calc(1.25em - (var(--border-width) * 2));
  height: 100%;
  border-radius: 50%;
  background-color: var(--color);
  content: "";
  transition: margin 0.1s ease-in-out;
}
[type="checkbox"][role="switch"]:checked {
  background-image: none;
}
[type="checkbox"][role="switch"]:checked::before {
  margin-left: calc(1.125em - var(--border-width));
  -webkit-margin-start: calc(1.125em - var(--border-width));
  margin-inline-start: calc(1.125em - var(--border-width));
}

[type="checkbox"][aria-invalid="false"],
[type="checkbox"]:checked[aria-invalid="false"],
[type="radio"][aria-invalid="false"],
[type="radio"]:checked[aria-invalid="false"],
[type="checkbox"][role="switch"][aria-invalid="false"],
[type="checkbox"][role="switch"]:checked[aria-invalid="false"] {
  --border-color: var(--form-element-valid-border-color);
}
[type="checkbox"][aria-invalid="true"],
[type="checkbox"]:checked[aria-invalid="true"],
[type="radio"][aria-invalid="true"],
[type="radio"]:checked[aria-invalid="true"],
[type="checkbox"][role="switch"][aria-invalid="true"],
[type="checkbox"][role="switch"]:checked[aria-invalid="true"] {
  --border-color: var(--form-element-invalid-border-color);
}

/**
 * Form elements
 * Alternatives input types (Not Checkboxes & Radios)
 */
[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
[type="color"]::-moz-focus-inner {
  padding: 0;
}
[type="color"]::-webkit-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}
[type="color"]::-moz-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}

input:not([type="checkbox"], [type="radio"], [type="range"], [type="file"]):is(
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  ) {
  --icon-position: 0.75rem;
  --icon-width: 1rem;
  padding-right: calc(var(--icon-width) + var(--icon-position));
  background-image: var(--icon-date);
  background-position: center right var(--icon-position);
  background-size: var(--icon-width) auto;
  background-repeat: no-repeat;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="time"] {
  background-image: var(--icon-time);
}

[type="date"]::-webkit-calendar-picker-indicator,
[type="datetime-local"]::-webkit-calendar-picker-indicator,
[type="month"]::-webkit-calendar-picker-indicator,
[type="time"]::-webkit-calendar-picker-indicator,
[type="week"]::-webkit-calendar-picker-indicator {
  width: var(--icon-width);
  margin-right: calc(var(--icon-width) * -1);
  margin-left: var(--icon-position);
  opacity: 0;
}

[dir="rtl"]
  :is(
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  ) {
  text-align: right;
}

[type="file"] {
  --color: var(--muted-color);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) 0;
  border: 0;
  border-radius: 0;
  background: none;
}
[type="file"]::file-selector-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::file-selector-button:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type="file"]::-webkit-file-upload-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  -webkit-transition: background-color var(--transition),
    border-color var(--transition), color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::-webkit-file-upload-button:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type="file"]::-ms-browse {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  margin-inline-start: 0;
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  -ms-transition: background-color var(--transition),
    border-color var(--transition), color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::-ms-browse:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}

[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 1.25rem;
  background: none;
}
[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -webkit-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-moz-range-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -moz-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-ms-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -ms-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -webkit-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -moz-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -ms-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]:hover,
[type="range"]:focus {
  --range-border-color: var(--range-active-border-color);
  --range-thumb-color: var(--range-thumb-hover-color);
}
[type="range"]:active {
  --range-thumb-color: var(--range-thumb-active-color);
}
[type="range"]:active::-webkit-slider-thumb {
  transform: scale(1.25);
}
[type="range"]:active::-moz-range-thumb {
  transform: scale(1.25);
}
[type="range"]:active::-ms-thumb {
  transform: scale(1.25);
}

input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"] {
  -webkit-padding-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  padding-inline-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  border-radius: 5rem;
  background-image: var(--icon-search);
  background-position: center left 1.125rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid] {
  -webkit-padding-start: calc(
    var(--form-element-spacing-horizontal) + 1.75rem
  ) !important;
  padding-inline-start: calc(
    var(--form-element-spacing-horizontal) + 1.75rem
  ) !important;
  background-position: center left 1.125rem, center right 0.75rem;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid="false"] {
  background-image: var(--icon-search), var(--icon-valid);
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid="true"] {
  background-image: var(--icon-search), var(--icon-invalid);
}

[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  display: none;
}

[dir="rtl"]
  :where(input):not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"] {
  background-position: center right 1.125rem;
}
[dir="rtl"]
  :where(input):not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid] {
  background-position: center right 1.125rem, center left 0.75rem;
}

/**
 * Table
 */
:where(table) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  text-indent: 0;
}

th,
td {
  padding: calc(var(--spacing) / 2) var(--spacing);
  border-bottom: var(--border-width) solid var(--table-border-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  text-align: left;
  text-align: start;
}

tfoot th,
tfoot td {
  border-top: var(--border-width) solid var(--table-border-color);
  border-bottom: 0;
}

table[role="grid"] tbody tr:nth-child(odd) {
  background-color: var(--table-row-stripped-background-color);
}

/**
 * Code
 */
pre,
code,
kbd,
samp {
  font-size: 0.875em;
  font-family: var(--font-family);
}

pre {
  -ms-overflow-style: scrollbar;
  overflow: auto;
}

pre,
code,
kbd {
  border-radius: var(--border-radius);
  background: var(--code-background-color);
  color: var(--code-color);
  font-weight: var(--font-weight);
  line-height: initial;
}

code,
kbd {
  display: inline-block;
  padding: 0.375rem 0.5rem;
}

pre {
  display: block;
  margin-bottom: var(--spacing);
  overflow-x: auto;
}
pre > code {
  display: block;
  padding: var(--spacing);
  background: none;
  font-size: 14px;
  line-height: var(--line-height);
}

code b {
  color: var(--code-tag-color);
  font-weight: var(--font-weight);
}
code i {
  color: var(--code-property-color);
  font-style: normal;
}
code u {
  color: var(--code-value-color);
  text-decoration: none;
}
code em {
  color: var(--code-comment-color);
  font-style: normal;
}

kbd {
  background-color: var(--code-kbd-background-color);
  color: var(--code-kbd-color);
  vertical-align: baseline;
}

/**
 * Miscs
 */
hr {
  height: 0;
  border: 0;
  border-top: 1px solid var(--muted-border-color);
  color: inherit;
}

[hidden],
template {
  display: none !important;
}

canvas {
  display: inline-block;
}

/**
 * Accordion (<details>)
 */
details {
  display: block;
  margin-bottom: var(--spacing);
  padding-bottom: var(--spacing);
  border-bottom: var(--border-width) solid var(--accordion-border-color);
}
details summary {
  line-height: 1rem;
  list-style-type: none;
  cursor: pointer;
  transition: color var(--transition);
}
details summary:not([role]) {
  color: var(--accordion-close-summary-color);
}
details summary::-webkit-details-marker {
  display: none;
}
details summary::marker {
  display: none;
}
details summary::-moz-list-bullet {
  list-style-type: none;
}
details summary::after {
  display: block;
  width: 1rem;
  height: 1rem;
  -webkit-margin-start: calc(var(--spacing, 1rem) * 0.5);
  margin-inline-start: calc(var(--spacing, 1rem) * 0.5);
  float: right;
  transform: rotate(-90deg);
  background-image: var(--icon-chevron);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
  transition: transform var(--transition);
}
details summary:focus {
  outline: none;
}
details summary:focus:not([role="button"]) {
  color: var(--accordion-active-summary-color);
}
details summary[role="button"] {
  width: 100%;
  text-align: left;
}
details summary[role="button"]::after {
  height: calc(1rem * var(--line-height, 1.5));
  background-image: var(--icon-chevron-button);
}
details summary[role="button"]:not(.outline).contrast::after {
  background-image: var(--icon-chevron-button-inverse);
}
details[open] > summary {
  margin-bottom: calc(var(--spacing));
}
details[open] > summary:not([role]):not(:focus) {
  color: var(--accordion-open-summary-color);
}
details[open] > summary::after {
  transform: rotate(0);
}

[dir="rtl"] details summary {
  text-align: right;
}
[dir="rtl"] details summary::after {
  float: left;
  background-position: left center;
}

/**
 * Card (<article>)
 */
article {
  margin: var(--block-spacing-vertical) 0;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
  border-radius: var(--border-radius);
  background: var(--card-background-color);
  box-shadow: var(--card-box-shadow);
}
article > header,
article > footer {
  margin-right: calc(var(--block-spacing-horizontal) * -1);
  margin-left: calc(var(--block-spacing-horizontal) * -1);
  padding: calc(var(--block-spacing-vertical) * 0.66)
    var(--block-spacing-horizontal);
  background-color: var(--card-sectionning-background-color);
}
article > header {
  margin-top: calc(var(--block-spacing-vertical) * -1);
  margin-bottom: var(--block-spacing-vertical);
  border-bottom: var(--border-width) solid var(--card-border-color);
  border-top-right-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
}
article > footer {
  margin-top: var(--block-spacing-vertical);
  margin-bottom: calc(var(--block-spacing-vertical) * -1);
  border-top: var(--border-width) solid var(--card-border-color);
  border-bottom-right-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
}

/**
 * Modal (<dialog>)
 */
#mount {
  --scrollbar-width: 0px;
}

dialog {
  display: flex;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: inherit;
  min-width: 100%;
  height: inherit;
  min-height: 100%;
  padding: var(--spacing);
  border: 0;
  -webkit-backdrop-filter: var(--modal-overlay-backdrop-filter);
  backdrop-filter: var(--modal-overlay-backdrop-filter);
  background-color: var(--modal-overlay-background-color);
  color: var(--color);
}
dialog article {
  max-height: calc(100vh - var(--spacing) * 2);
  overflow: auto;
}
@media (min-width: 576px) {
  dialog article {
    max-width: 510px;
  }
}
@media (min-width: 768px) {
  dialog article {
    max-width: 700px;
  }
}
dialog article > header,
dialog article > footer {
  padding: calc(var(--block-spacing-vertical) * 0.5)
    var(--block-spacing-horizontal);
}
dialog article > header .close {
  margin: 0;
  margin-left: var(--spacing);
  float: right;
}
dialog article > footer {
  text-align: right;
}
dialog article > footer [role="button"] {
  margin-bottom: 0;
}
dialog article > footer [role="button"]:not(:first-of-type) {
  margin-left: calc(var(--spacing) * 0.5);
}
dialog article p:last-of-type {
  margin: 0;
}
dialog article .close {
  display: block;
  width: 1rem;
  height: 1rem;
  margin-top: calc(var(--block-spacing-vertical) * -0.5);
  margin-bottom: var(--typography-spacing-vertical);
  margin-left: auto;
  background-image: var(--icon-close);
  background-position: center;
  background-size: auto 1rem;
  background-repeat: no-repeat;
  opacity: 0.5;
  transition: opacity var(--transition);
}
dialog article .close:is([aria-current], :hover, :active, :focus) {
  opacity: 1;
}
dialog:not([open]),
dialog[open="false"] {
  display: none;
}

.modal-is-open {
  padding-right: var(--scrollbar-width, 0px);
  overflow: hidden;
  pointer-events: none;
}
.modal-is-open dialog {
  pointer-events: auto;
}

:where(.modal-is-opening, .modal-is-closing) dialog,
:where(.modal-is-opening, .modal-is-closing) dialog > article {
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
}
:where(.modal-is-opening, .modal-is-closing) dialog {
  animation-duration: 0.8s;
  animation-name: modal-overlay;
}
:where(.modal-is-opening, .modal-is-closing) dialog > article {
  animation-delay: 0.2s;
  animation-name: modal;
}

.modal-is-closing dialog,
.modal-is-closing dialog > article {
  animation-delay: 0s;
  animation-direction: reverse;
}

@keyframes modal-overlay {
  from {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background-color: transparent;
  }
}
@keyframes modal {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
}
/**
 * Nav
 */
:where(nav li)::before {
  float: left;
  content: "\u200B";
}

nav,
nav ul {
  display: flex;
}

nav {
  justify-content: space-between;
}
nav ol,
nav ul {
  align-items: center;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
}
nav ol:first-of-type,
nav ul:first-of-type {
  margin-left: calc(var(--nav-element-spacing-horizontal) * -1);
}
nav ol:last-of-type,
nav ul:last-of-type {
  margin-right: calc(var(--nav-element-spacing-horizontal) * -1);
}
nav li {
  display: inline-block;
  margin: 0;
  padding: var(--nav-element-spacing-vertical)
    var(--nav-element-spacing-horizontal);
}
nav li > * {
  --spacing: 0;
}
nav :where(a, [role="link"]) {
  display: inline-block;
  margin: calc(var(--nav-link-spacing-vertical) * -1)
    calc(var(--nav-link-spacing-horizontal) * -1);
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
  border-radius: var(--border-radius);
  text-decoration: none;
}
nav :where(a, [role="link"]):is([aria-current], :hover, :active, :focus) {
  text-decoration: none;
}
nav[aria-label="breadcrumb"] {
  align-items: center;
  justify-content: start;
}
nav[aria-label="breadcrumb"] ul li:not(:first-child) {
  -webkit-margin-start: var(--nav-link-spacing-horizontal);
  margin-inline-start: var(--nav-link-spacing-horizontal);
}
nav[aria-label="breadcrumb"] ul li:not(:last-child) ::after {
  position: absolute;
  width: calc(var(--nav-link-spacing-horizontal) * 2);
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) / 2);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) / 2);
  content: "/";
  color: var(--muted-color);
  text-align: center;
}
nav[aria-label="breadcrumb"] a[aria-current] {
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  pointer-events: none;
}
nav [role="button"] {
  margin-right: inherit;
  margin-left: inherit;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}

aside nav,
aside ol,
aside ul,
aside li {
  display: block;
}
aside li {
  padding: calc(var(--nav-element-spacing-vertical) * 0.5)
    var(--nav-element-spacing-horizontal);
}
aside li a {
  display: block;
}
aside li [role="button"] {
  margin: inherit;
}

[dir="rtl"] nav[aria-label="breadcrumb"] ul li:not(:last-child) ::after {
  content: "\\\\";
}

/**
 * Progress
 */
progress {
  display: inline-block;
  vertical-align: baseline;
}

progress {
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  appearance: none;
  width: 100%;
  height: 0.5rem;
  margin-bottom: calc(var(--spacing) * 0.5);
  overflow: hidden;
  border: 0;
  border-radius: var(--border-radius);
  background-color: var(--progress-background-color);
  color: var(--progress-color);
}
progress::-webkit-progress-bar {
  border-radius: var(--border-radius);
  background: none;
}
progress[value]::-webkit-progress-value {
  background-color: var(--progress-color);
}
progress::-moz-progress-bar {
  background-color: var(--progress-color);
}
@media (prefers-reduced-motion: no-preference) {
  progress:indeterminate {
    background: var(--progress-background-color)
      linear-gradient(
        to right,
        var(--progress-color) 30%,
        var(--progress-background-color) 30%
      )
      top left/150% 150% no-repeat;
    animation: progress-indeterminate 1s linear infinite;
  }
  progress:indeterminate[value]::-webkit-progress-value {
    background-color: transparent;
  }
  progress:indeterminate::-moz-progress-bar {
    background-color: transparent;
  }
}

@media (prefers-reduced-motion: no-preference) {
  [dir="rtl"] progress:indeterminate {
    animation-direction: reverse;
  }
}

@keyframes progress-indeterminate {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
/**
 * Dropdown ([role="list"])
 */
details[role="list"],
li[role="list"] {
  position: relative;
}

details[role="list"] summary + ul,
li[role="list"] > ul {
  display: flex;
  z-index: 99;
  position: absolute;
  top: auto;
  right: 0;
  left: 0;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: var(--border-width) solid var(--dropdown-border-color);
  border-radius: var(--border-radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  background-color: var(--dropdown-background-color);
  box-shadow: var(--card-box-shadow);
  color: var(--dropdown-color);
  white-space: nowrap;
}
details[role="list"] summary + ul li,
li[role="list"] > ul li {
  width: 100%;
  margin-bottom: 0;
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    var(--form-element-spacing-horizontal);
  list-style: none;
}
details[role="list"] summary + ul li:first-of-type,
li[role="list"] > ul li:first-of-type {
  margin-top: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role="list"] summary + ul li:last-of-type,
li[role="list"] > ul li:last-of-type {
  margin-bottom: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role="list"] summary + ul li a,
li[role="list"] > ul li a {
  display: block;
  margin: calc(var(--form-element-spacing-vertical) * -0.5)
    calc(var(--form-element-spacing-horizontal) * -1);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    var(--form-element-spacing-horizontal);
  overflow: hidden;
  color: var(--dropdown-color);
  text-decoration: none;
  text-overflow: ellipsis;
}
details[role="list"] summary + ul li a:hover,
li[role="list"] > ul li a:hover {
  background-color: var(--dropdown-hover-background-color);
}

details[role="list"] summary::after,
li[role="list"] > a::after {
  display: block;
  width: 1rem;
  height: calc(1rem * var(--line-height, 1.5));
  -webkit-margin-start: 0.5rem;
  margin-inline-start: 0.5rem;
  float: right;
  transform: rotate(0deg);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
}

details[role="list"] {
  padding: 0;
  border-bottom: none;
}
details[role="list"] summary {
  margin-bottom: 0;
}
details[role="list"] summary:not([role]) {
  height: calc(
    1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 +
      var(--border-width) * 2
  );
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--form-element-border-color);
  border-radius: var(--border-radius);
  background-color: var(--form-element-background-color);
  color: var(--form-element-placeholder-color);
  line-height: inherit;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
details[role="list"] summary:not([role]):active,
details[role="list"] summary:not([role]):focus {
  border-color: var(--form-element-active-border-color);
  background-color: var(--form-element-active-background-color);
}
details[role="list"] summary:not([role]):focus {
  box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}
details[role="list"][open] summary {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
details[role="list"][open] summary::before {
  display: block;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: none;
  content: "";
  cursor: default;
}

nav details[role="list"] summary,
nav li[role="list"] a {
  display: flex;
  direction: ltr;
}

nav details[role="list"] summary + ul,
nav li[role="list"] > ul {
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: var(--border-radius);
}
nav details[role="list"] summary + ul li a,
nav li[role="list"] > ul li a {
  border-radius: 0;
}

nav details[role="list"] summary,
nav details[role="list"] summary:not([role]) {
  height: auto;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}
nav details[role="list"][open] summary {
  border-radius: var(--border-radius);
}
nav details[role="list"] summary + ul {
  margin-top: var(--outline-width);
  -webkit-margin-start: 0;
  margin-inline-start: 0;
}
nav details[role="list"] summary[role="link"] {
  margin-bottom: calc(var(--nav-link-spacing-vertical) * -1);
  line-height: var(--line-height);
}
nav details[role="list"] summary[role="link"] + ul {
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) * -1);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) * -1);
}

li[role="list"]:hover > ul,
li[role="list"] a:active ~ ul,
li[role="list"] a:focus ~ ul {
  display: flex;
}
li[role="list"] > ul {
  display: none;
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(
    var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal)
  );
  margin-inline-start: calc(
    var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal)
  );
}
li[role="list"] > a::after {
  background-image: var(--icon-chevron);
}

/**
 * Loading ([aria-busy=true])
 */
[aria-busy="true"] {
  cursor: progress;
}

[aria-busy="true"]:not(input, select, textarea)::before {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 0.1875em solid currentColor;
  border-radius: 1em;
  border-right-color: transparent;
  content: "";
  vertical-align: text-bottom;
  vertical-align: -0.125em;
  animation: spinner 0.75s linear infinite;
  opacity: var(--loading-spinner-opacity);
}
[aria-busy="true"]:not(input, select, textarea):not(:empty)::before {
  margin-right: calc(var(--spacing) * 0.5);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) * 0.5);
  margin-inline-end: calc(var(--spacing) * 0.5);
}
[aria-busy="true"]:not(input, select, textarea):empty {
  text-align: center;
}

button[aria-busy="true"],
input[type="submit"][aria-busy="true"],
input[type="button"][aria-busy="true"],
input[type="reset"][aria-busy="true"],
a[aria-busy="true"] {
  pointer-events: none;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
/**
 * Tooltip ([data-tooltip])
 */
[data-tooltip] {
  position: relative;
}
[data-tooltip]:not(a, button, input) {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}
[data-tooltip][data-placement="top"]::before,
[data-tooltip][data-placement="top"]::after,
[data-tooltip]::before,
[data-tooltip]::after {
  display: block;
  z-index: 99;
  position: absolute;
  bottom: 100%;
  left: 50%;
  padding: 0.25rem 0.5rem;
  overflow: hidden;
  transform: translate(-50%, -0.25rem);
  border-radius: var(--border-radius);
  background: var(--tooltip-background-color);
  content: attr(data-tooltip);
  color: var(--tooltip-color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: 0.875rem;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
}
[data-tooltip][data-placement="top"]::after,
[data-tooltip]::after {
  padding: 0;
  transform: translate(-50%, 0rem);
  border-top: 0.3rem solid;
  border-right: 0.3rem solid transparent;
  border-left: 0.3rem solid transparent;
  border-radius: 0;
  background-color: transparent;
  content: "";
  color: var(--tooltip-background-color);
}
[data-tooltip][data-placement="bottom"]::before,
[data-tooltip][data-placement="bottom"]::after {
  top: 100%;
  bottom: auto;
  transform: translate(-50%, 0.25rem);
}
[data-tooltip][data-placement="bottom"]:after {
  transform: translate(-50%, -0.3rem);
  border: 0.3rem solid transparent;
  border-bottom: 0.3rem solid;
}
[data-tooltip][data-placement="left"]::before,
[data-tooltip][data-placement="left"]::after {
  top: 50%;
  right: 100%;
  bottom: auto;
  left: auto;
  transform: translate(-0.25rem, -50%);
}
[data-tooltip][data-placement="left"]:after {
  transform: translate(0.3rem, -50%);
  border: 0.3rem solid transparent;
  border-left: 0.3rem solid;
}
[data-tooltip][data-placement="right"]::before,
[data-tooltip][data-placement="right"]::after {
  top: 50%;
  right: auto;
  bottom: auto;
  left: 100%;
  transform: translate(0.25rem, -50%);
}
[data-tooltip][data-placement="right"]:after {
  transform: translate(-0.3rem, -50%);
  border: 0.3rem solid transparent;
  border-right: 0.3rem solid;
}
[data-tooltip]:focus::before,
[data-tooltip]:focus::after,
[data-tooltip]:hover::before,
[data-tooltip]:hover::after {
  opacity: 1;
}
@media (hover: hover) and (pointer: fine) {
  [data-tooltip][data-placement="bottom"]:focus::before,
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::before,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::after,
  [data-tooltip]:hover::before,
  [data-tooltip]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-top;
  }
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::after,
  [data-tooltip]:hover::after {
    animation-name: tooltip-caret-slide-top;
  }
  [data-tooltip][data-placement="bottom"]:focus::before,
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover::before,
  [data-tooltip][data-placement="bottom"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-bottom;
  }
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover::after {
    animation-name: tooltip-caret-slide-bottom;
  }
  [data-tooltip][data-placement="left"]:focus::before,
  [data-tooltip][data-placement="left"]:focus::after,
  [data-tooltip][data-placement="left"]:hover::before,
  [data-tooltip][data-placement="left"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-left;
  }
  [data-tooltip][data-placement="left"]:focus::after,
  [data-tooltip][data-placement="left"]:hover::after {
    animation-name: tooltip-caret-slide-left;
  }
  [data-tooltip][data-placement="right"]:focus::before,
  [data-tooltip][data-placement="right"]:focus::after,
  [data-tooltip][data-placement="right"]:hover::before,
  [data-tooltip][data-placement="right"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-right;
  }
  [data-tooltip][data-placement="right"]:focus::after,
  [data-tooltip][data-placement="right"]:hover::after {
    animation-name: tooltip-caret-slide-right;
  }
}
@keyframes tooltip-slide-top {
  from {
    transform: translate(-50%, 0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.25rem);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-top {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.25rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0rem);
    opacity: 1;
  }
}
@keyframes tooltip-slide-bottom {
  from {
    transform: translate(-50%, -0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0.25rem);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-bottom {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.5rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.3rem);
    opacity: 1;
  }
}
@keyframes tooltip-slide-left {
  from {
    transform: translate(0.75rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-0.25rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-left {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(0.05rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0.3rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-slide-right {
  from {
    transform: translate(-0.75rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0.25rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-right {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-0.05rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-0.3rem, -50%);
    opacity: 1;
  }
}

/**
 * Accessibility & User interaction
 */
[aria-controls] {
  cursor: pointer;
}

[aria-disabled="true"],
[disabled] {
  cursor: not-allowed;
}

[aria-hidden="false"][hidden] {
  display: initial;
}

[aria-hidden="false"][hidden]:not(:focus) {
  clip: rect(0, 0, 0, 0);
  position: absolute;
}

a,
area,
button,
input,
label,
select,
summary,
textarea,
[tabindex] {
  -ms-touch-action: manipulation;
}

[dir="rtl"] {
  direction: rtl;
}

/**
* Reduce Motion Features
*/
@media (prefers-reduced-motion: reduce) {
  *:not([aria-busy="true"]),
  :not([aria-busy="true"])::before,
  :not([aria-busy="true"])::after {
    background-attachment: initial !important;
    animation-duration: 1ms !important;
    animation-delay: -1ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-delay: 0s !important;
    transition-duration: 0s !important;
  }
}
`,IMMERSIVE_TRANSLATE_COMMON_CSS:`#mount#mount {
  /* --primary: rgb(227, 59, 126); */
  --primary: #ea4c89;
  --primary-hover: #f082ac;
  --icon-xia: url("data:image/svg+xml,%3Csvg%20width%3D%2222%22%20height%3D%2214%22%20viewBox%3D%220%200%2022%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9.4392%2013.1554L1.18789%203.96259C0.85064%203.5869%200.664086%203.09986%200.664062%202.59501C0.664062%201.46382%201.58164%200.546875%202.71353%200.546875H19.2161C19.7212%200.546847%2020.2085%200.733262%2020.5846%201.07037C21.4272%201.82567%2021.4976%203.12055%2020.7418%203.96256L12.4905%2013.1554C12.441%2013.2106%2012.3885%2013.263%2012.3333%2013.3124C11.4907%2014.0678%2010.195%2013.9974%209.4392%2013.1554Z%22%20fill%3D%22%23999999%22%2F%3E%3C%2Fsvg%3E");

}

li.select-link.select-link:hover > ul {
  display: none;
}
li.select-link.select-link > ul {
  display: none;
}
li.select-link.select-link a:focus ~ ul {
  display: none;
}

li.select-link.select-link a:active ~ ul {
  display: none;
}
li.select-link-active.select-link-active > ul {
  display: flex;
}
li.select-link-active.select-link-active:hover > ul {
  display: flex;
}

li.select-link-active.select-link-active a:focus ~ ul {
  display: flex;
}

li.select-link-active.select-link-active a:active ~ ul {
  display: flex;
}
ul.select-link-ul.select-link-ul {
  right: 0px;
  left: auto;
}

a.select-link-selected {
  background-color: var(--primary-focus);
}
.immersive-translate-no-select {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

/* li[role="list"].no-arrow > a::after { */
/*   background-image: none; */
/*   width: 0; */
/*   color: var(--color); */
/* } */
li[role="list"].no-arrow {
  margin-left: 8px;
  padding-right: 0;
}
li[role="list"] > a::after {
  -webkit-margin-start: 0.2rem;
  margin-inline-start: 0.2rem;
}

li[role="list"].no-arrow > a,
li[role="list"].no-arrow > a:link,
li[role="list"].no-arrow > a:visited {
  color: var(--secondary);
}

select.min-select {
  --form-element-spacing-horizontal: 0;
  margin-bottom: 4px;
  max-width: 128px;
  overflow: hidden;
  color: var(--primary);
  font-size: 14px;
  border: none;
  padding: 0;
  padding-right: 20px;
  padding-left: 8px;
  text-overflow: ellipsis;
  color: var(--color);

}
select.min-select-secondary {
  color: var(--color);
}
select.min-select:focus {
  outline: none;
  border: none;
  --box-shadow: none;
}
select.min-select-no-arrow {
  background-image: none;
  padding-right: 0;
}

select.min-select-left {
  padding-right: 0px;
  /* padding-left: 24px; */
  /* background-position: center left 0; */
  text-overflow: ellipsis;
  text-align: left;
}

.muted {
  color: var(--muted-color);
}

.select.button-select {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
  cursor: pointer;
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 16px;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
  -webkit-appearance: button;
  margin: 0;
  margin-bottom: 0px;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}
`,IMMERSIVE_TRANSLATE_POPUP_CSS:`html {
  font-size: 16px;
  --font-size: 16px;
}

body {
  padding: 0;
  margin: 0 auto;
  min-width: 268px;
  border-radius: 10px;
}

.popup-container {
  color: #666
}

.immersive-translate-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  touch-action: none;
}

.immersive-translate-popup-wrapper {
  background: var(--background-color);
  border-radius: 10px;
  border: 1px solid var(--muted-border-color);
}

#mount#mount {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 4px;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 16px;
  --typography-spacing-vertical: 24px;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 12px;
  --form-element-spacing-horizontal: 16px;
  --nav-element-spacing-vertical: 16px;
  --nav-element-spacing-horizontal: 8px;
  --nav-link-spacing-vertical: 8px;
  --nav-link-spacing-horizontal: 8px;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
  --modal-overlay-backdrop-filter: blur(4px);
}

#mount {
  min-width: 268px;
}

.main-button {
  font-size: 14px;
  vertical-align: middle;
  border-radius: 8px;
}

.pt-4 {
  padding-top: 24px;
}

.p-2 {
  padding: 8px;
}

.pl-5 {
  padding-left: 48px;
}

.p-0 {
  padding: 0;
}

.pl-2 {
  padding-left: 8px;
}

.pl-4 {
  padding-left: 24px;
}

.pt-2 {
  padding-top: 8px;
}

.pb-2 {
  padding-bottom: 8px;
}

.pr-5 {
  padding-right: 48px;
}

.text-sm {
  font-size: 14px;
}

.w-full {
  width: 100%;
}

.flex {
  display: flex;
}

.flex-row {
  flex-direction: row;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-end {
  justify-content: flex-end;
}

.flex-grow {
  flex-grow: 1;
}

.justify-between {
  justify-content: space-between;
}

.mb-2 {
  margin-bottom: 8px;
}

.mb-4 {
  margin-bottom: 16px;
}

.mb-3 {
  margin-bottom: 12px;
}

.inline-block {
  display: inline-block;
}

.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.py-2-5 {
  padding-top: 6px;
  padding-bottom: 6px;
}

.mt-2 {
  margin-top: 8px;
}

.mt-0 {
  margin-top: 0;
}

.mb-1 {
  margin-bottom: 4px;
}

.ml-4 {
  margin-left: 24px;
}

.ml-3 {
  margin-left: 16px;
}

.ml-2 {
  margin-left: 8px;
}

.ml-1 {
  margin-left: 4px;
}

.mr-1 {
  margin-right: 4px;
}

.mr-3 {
  margin-right: 16px;
}

.pl-3 {
  padding-left: 12px;
}

.pr-3 {
  padding-right: 12px;
}

.p-3 {
  padding: 12px;
}

.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}

.pt-3 {
  padding-top: 12px;
}

.px-6 {
  padding-left: 18px;
  padding-right: 18px;
}

.pt-6 {
  padding-top: 20px;
}

.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
}

.mt-4 {
  margin-top: 24px;
}

.py-0 {
  padding-top: 0;
  padding-bottom: 0;
}

.left-auto {
  left: auto !important;
}

.max-h-28 {
  max-height: 112px;
}

.max-h-30 {
  max-height: 120px;
}

.overflow-y-scroll {
  overflow-y: scroll;
}

.text-xs {
  font-size: 12px;
}

.flex-1 {
  flex: 1;
}

.flex-3 {
  flex: 3;
}

.flex-4 {
  flex: 4;
}

.flex-2 {
  flex: 2;
}

.mt-3 {
  margin-top: 16px;
}

.items-center {
  align-items: center;
}

.max-content {
  width: max-content;
}

.justify-center {
  justify-content: center;
}

.items-end {
  align-items: flex-end;
}

.items-baseline {
  align-items: baseline;
}

.my-5 {
  margin-top: 48px;
  margin-bottom: 48px;
}

.my-4 {
  margin-top: 24px;
  margin-bottom: 24px;
}

.my-3 {
  margin-top: 16px;
  margin-bottom: 16px;
}

.pt-3 {
  padding-top: 12px;
}

.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}

.pt-2 {
  padding-top: 8px;
}

.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}

.pt-1 {
  padding-top: 4px;
}

.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}

.pb-2 {
  padding-bottom: 8px;
}

.justify-end {
  justify-content: flex-end;
}

.w-auto {
  width: auto;
}


select.min-select {
  --form-element-spacing-horizontal: 0;
  margin-bottom: 0px;
  max-width: unset;
  flex: 1;
  overflow: hidden;
  color: var(--primary);
  font-size: 14px;
  border: none;
  border-radius: 8px;
  padding: 6px 24px 6px 16px;
  background-color: #F5F7F9;
  background-position: center right 12px;
  background-size: 8px auto;
  background-image: var(--icon-xia);
  text-overflow: ellipsis;
  color: var(--color);

}

.text-overflow-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
}

.max-w-20 {
  max-width: 180px;
  white-space: nowrap;
}

@media (prefers-color-scheme: dark) {
  select.min-select {
    background-color: #141e26;
  }
}

select.min-select-secondary {
  color: var(--color);
}

select.min-select:focus {
  outline: none;
  border: none;
  --box-shadow: none;
}

select.min-select-no-arrow {
  background-image: none;
  padding-right: 0;
}

select.min-select-left {
  padding-right: 0px;
  /* padding-left: 24px; */
  /* background-position: center left 0; */
  text-overflow: ellipsis;
  text-align: left;
}

.popup-footer {
  background-color: #F5F7F9;
}



.clickable {
  cursor: pointer;
}

.close {
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-image: var(--icon-close);
  background-position: center;
  background-size: auto 1rem;
  background-repeat: no-repeat;
  opacity: 0.5;
  transition: opacity var(--transition);
}

.padding-two-column {
  padding-left: 40px;
  padding-right: 40px;
}

.muted {
  color: #999;
}

.text-label {
  color: #666;
}




select.text-label {
  color: #666;
}

.display-none {
  display: none;
}


/* dark use #18232c */

@media (prefers-color-scheme: dark) {
  .popup-footer {
    background-color: #141e26;
  }

  .text-label {
    color: #9ca3af;
  }

  select.text-label {

    color: #9ca3af;
  }
}

.immersive-translate-share-button {
  border-radius: 8px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-light-green);
  background-image: var(--icon-share);
  background-size: 22px 22px;
  background-position: center center;
  cursor: pointer;
  margin-left: 8px;
  flex-shrink: 0;
}`,IMMERSIVE_TRANSLATE_PAGE_POPUP_CSS:`html {
  font-size: 17px;
}

#mount#mount {
  position: absolute;
  display: none;
  min-width: 250px;
  height: auto;
  --font-size: 17px;
  font-size: 17px;
}


/* float-ball */
.immersive-translate-float-ball-container {
  position: fixed;
  padding: 0;
  z-index: 2147483647;
  top: 335px;
  width: 56px;
  display: flex;
  flex-direction: column;
  display: none;
}

.immersive-translate-float-ball-container.left {
  align-items: flex-start;
  left: 0;
}

.immersive-translate-float-ball-container.right {
  align-items: flex-end;
  right: 0;
}

.immersive-translate-float-ball-btn {
  background: linear-gradient(320.9deg, #DB3B7B 26.47%, #FFCEE2 88.86%);
  height: 36px;
  width: 56px;
  box-shadow: 2px 6px 10px 0px #0E121629;
}

.immersive-translate-float-ball-btn.left {
  border-top-right-radius: 36px;
  border-bottom-right-radius: 36px;
}


.immersive-translate-float-ball-btn.right {
  border-top-left-radius: 36px;
  border-bottom-left-radius: 36px;
}



.immersive-translate-float-ball-btn div {
  background: linear-gradient(140.91deg, #FF87B7 12.61%, #EC4C8C 76.89%);
  height: 34px;
  width: 54px;
  margin: 1px;
  display: flex;
  align-items: center;
}


.immersive-translate-float-ball-btn.left div {
  border-top-right-radius: 34px;
  border-bottom-right-radius: 34px;
  justify-content: flex-end;
}

.immersive-translate-float-ball-btn.right div {
  border-top-left-radius: 34px;
  border-bottom-left-radius: 34px;
}


.immersive-translate-float-ball-logo-img {
  width: 20px;
  height: 20px;
  margin: 0 10px;
}

.immersive-translate-float-ball-translated-img {
  position: absolute;
  width: 11px;
  height: 11px;
  bottom: 4px;
  right: 20px;
}

.btn-animate {
  cursor: pointer;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition: -webkit-transform ease-out 250ms;
  transition: -webkit-transform ease-out 250ms;
  transition: transform ease-out 250ms;
  transition: transform ease-out 250ms, -webkit-transform ease-out 250ms;
}

.immersive-translate-float-ball-setting-btn {
  margin-top: 12px;
  margin-right: 18px;
  width: 28px;
  height: 28px;
}

.immersive-translate-popup-wrapper {
  background: var(--background-color);
  border-radius: 20px;
  box-shadow: 2px 10px 24px 0px #0E121614;
  border: none;
  overflow: hidden;
}

.immersive-translate-float-ball-close-content {
  padding: 22px;
  width: 320px;
}

.immersive-translate-float-ball-close-title {
  font-weight: 500;
  color: var(--h2-color);
}

.immersive-translate-float-ball-close-radio-content {
  background-color: var(--background-light-green);
  padding: 8px 20px;
}

.immersive-translate-float-ball-radio-sel,
.immersive-translate-float-ball-radio-nor {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  flex-shrink: 0;
}

.immersive-translate-float-ball-radio-sel {
  border: 2px solid var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.immersive-translate-float-ball-radio-sel div {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: var(--primary);
}

.immersive-translate-float-ball-radio-nor {
  border: 2px solid #D3D4D6;
}



.immersive-translate-float-ball-primary-btn {
  background-color: var(--primary);
  width: 72px;
  height: 32px;
  color: white;
  border-radius: 8px;
  text-align: center;
  line-height: 32px;
  font-size: 16px;
}

.immersive-translate-float-ball-default-btn {
  border: 1px solid var(--primary);
  width: 72px;
  height: 32px;
  border-radius: 8px;
  color: var(--primary);
  line-height: 32px;
  text-align: center;
  font-size: 16px;
}`,IMMERSIVE_TRANSLATE_POPUP_HTML:`<div
  id="immersive-translate-popup-container"
  class="immersive-translate-popup-container"
>
  <button
    id="immersive-translate-popup-btn"
    class="immersive-translate-popup-btn"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M5 15v2a2 2 0 0 0 1.85 1.995L7 19h3v2H7a4 4 0 0 1-4-4v-2h2zm13-5l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10h2zm-1 2.885L15.753 16h2.492L17 12.885zM8 2v2h4v7H8v3H6v-3H2V4h4V2h2zm9 1a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3h3zM6 6H4v3h2V6zm4 0H8v3h2V6z"
        fill="rgba(255,255,255,1)"
      />
    </svg>
  </button>
  <div class="immersive-translate-popup-mount" id="mount"></div>
</div>
`,IMMERSIVE_TRANSLATE_VIDEO_SUBTITLE_INJECT:'(()=>{var u="imt-subtitle-inject",c=class{from;to;constructor(e,s){this.from=e,this.to=s}sendMessages(e){globalThis.postMessage({type:u,to:this.to,from:this.from,action:e.action,data:e.data,id:e.id||new Date().getTime(),isAsync:!1})}getRandomId(){return(new Date().getTime()+Math.random())*Math.random()}sendAsyncMessages({action:e,data:s}){return new Promise(t=>{let n=this.getRandomId();globalThis.postMessage({type:u,to:this.to,from:this.from,action:e,data:s,id:n,isAsync:!0});let o=({data:a})=>{u===a.type&&a.id===n&&a.to===this.from&&(t(a.data),globalThis.removeEventListener("message",o))};globalThis.addEventListener("message",o)})}handleMessageOnce(e){return new Promise(s=>{let t=({data:n})=>{u===n.type&&n.action===e&&n.to===this.from&&(s(n.data),globalThis.removeEventListener("message",t))};globalThis.addEventListener("message",t)})}handleMessage(e,s){let t=({data:n})=>{u===n.type&&n.action===e&&n.to===this.from&&s(n)};return globalThis.addEventListener("message",t),()=>{globalThis.removeEventListener("message",t)}}handleMessages(e){let s=({data:t})=>{u===t.type&&t.to===this.from&&e(t)};return globalThis.addEventListener("message",s),()=>{globalThis.removeEventListener("message",s)}}},v=new c("content-script","inject"),l=new c("inject","content-script"),S={get(r,e,s){return e in r?(...t)=>{let n=r[e];return typeof n=="function"?n.apply(r,t):Reflect.get(r,e,s)}:t=>r.sendAsyncMessages({action:e,data:t})}},M=new Proxy(l,S),T=new Proxy(v,S);var i=class{content=M;config;constructor(e){this.config=e,l.handleMessages(async({action:s,id:t,data:n})=>{let o=this[s];if(!o)return;let a=o.apply(this,[n]);a instanceof Promise&&(a=await a),l.sendMessages({id:t,data:a})})}triggerSubtitle(e){}async translateSubtitle(e){let s=await this.content.requestSubtitle({url:e._url});if(s){if(this.config.responseType=="document"){let n=new DOMParser().parseFromString(s,"text/xml");Object.defineProperty(e,"responseXML",{value:n,writable:!1}),Object.defineProperty(e,"response",{value:n,writable:!1});return}let t;e.responseType=="arraybuffer"||this.config.responseType=="arraybuffer"?t=new TextEncoder().encode(s).buffer:t=s,Object.defineProperty(e,"responseText",{value:t,writable:!1}),Object.defineProperty(e,"response",{value:t,writable:!1})}}translateSubtitleWithFetch(e){return this.content.requestSubtitle({fetchInfo:e})}async getVideoMeta(e){}isSubtitleRequest(e){return!this.config||!this.config.subtitleUrlRegExp||!e?!1:new RegExp(this.config.subtitleUrlRegExp).test(e||"")}};var d=class extends i{timer=null;triggerSubtitle({force:e}){setTimeout(()=>{if(this.config?.subtitleButtonSelector){let s=document.querySelector(this.config.subtitleButtonSelector);if(s){let t=s.getAttribute("aria-pressed")==="true";t&&e?(s.click(),setTimeout(()=>{s.click()},100)):t||s.click();return}}if(this.config?.videoPlayerSelector){let s=document.querySelector(this.config.videoPlayerSelector);s.toggleSubtitles(),setTimeout(()=>{s.toggleSubtitles()},100)}},1e3)}async getVideoMeta(){try{let e=await fetch(globalThis.location.href);if(!e.ok)throw new Error("request subtitle error");let s=await e.text(),n=[...new window.DOMParser().parseFromString(s,"text/html").body.querySelectorAll(":scope > script")].find(o=>o.textContent?.includes("ytInitialPlayerResponse"));return new Function(`const window = {}; ${n?.textContent}; return ytInitialPlayerResponse;`)()}catch{return null}}};var f=class extends i{timer=null;videoMeta={};constructor(e){super(e),this.hookJSON()}hookJSON(){let e=JSON.parse;JSON.parse=s=>{let t=e(s);try{t&&t.result&&t.result.timedtexttracks&&t.result.movieId&&(this.videoMeta[t.result.movieId]=t.result)}catch(n){console.log(n)}return t}}getVideoMeta(e){return this.videoMeta[e]}};var g=class extends i{timer=null;videoMeta={};constructor(e){super(e),this.hookJSON()}hookJSON(){let e=JSON.parse;JSON.parse=s=>{let t=e(s);try{t?.asset?.captions?.length?this.videoMeta[t.id]=t?.asset:t?.previews&&t?.course&&t?.previews?.forEach(n=>{this.videoMeta[n.id]=n})}catch(n){console.error(n)}return t}}getVideoMeta(e){return this.videoMeta[e]}};var h=class extends i{timer=null;videoMeta={};constructor(e){super(e),this.hookJSON()}hookJSON(){let e=JSON.parse;JSON.parse=s=>{let t=e(s);try{if(t?.stream?.sources?.length&&t?.stream?.sources[0]?.complete?.url){let n=window.location.pathname.split("/");n.length>2&&n[n.length-2]==="video"&&(this.videoMeta[n[n.length-1]]=t.stream.sources[0].complete.url)}}catch(n){console.error(n)}return t}}getVideoMeta(e){return this.videoMeta[e]}};async function R(){let r=await l.sendAsyncMessages({action:"getConfig"});if(!r)return;let s={youtube:d,netflix:f,webvtt:i,khanacademy:i,bilibili:i,udemy:g,general:i,ebutt:i,disneyplus:h}[r.type||""];if(!s)return;let t=new s(r);x(t,r)}y();R();function x(r,e){if(e.hookType==="xhr"){let s=XMLHttpRequest.prototype.open,t=XMLHttpRequest.prototype.send,n=function(){return this._url=arguments[1],s.apply(this,arguments)},o=async function(){return r.isSubtitleRequest(this._url)?(await y(),await r.translateSubtitle(this),t.apply(this,arguments)):t.apply(this,arguments)};Object.defineProperty(XMLHttpRequest.prototype,"open",{value:n,writable:!0}),Object.defineProperty(XMLHttpRequest.prototype,"send",{value:o,writable:!0})}else if(e.hookType==="fetch"){let s=globalThis.fetch;globalThis.fetch=async function(t,n){let o=typeof t=="string"?t:t.url||t.href;if(!r.isSubtitleRequest(o))return s(t,n);await y();let m;typeof t=="string"?m={url:t,method:"GET",headers:{}}:m=await w(t);let b=await r.translateSubtitleWithFetch(JSON.stringify({input:m,options:n}));return b?new Response(b):s(t,n)}}}var p=!1;async function y(){return p||(await l.handleMessageOnce("contentReady"),p=!0),p}function w(r){if(r instanceof URL)return{url:r.href,method:"GET",headers:{}};let e={url:r.url,method:r.method,headers:Object.fromEntries(r.headers.entries())};if(r.body)if(r.body instanceof FormData){let s={};for(let[t,n]of r.body.entries())s[t]=n;e.body=s}else return r.text().then(s=>(e.body=s,e));return Promise.resolve(e)}})();\n',PDF_VIEWER_URL:"https://app.immersivetranslate.com/pdf/index.html",OPTIONS_URL:"https://dash.immersivetranslate.com/",EBOOK_VIEWER_URL:"https://app.immersivetranslate.com/ebook/",EBOOK_BUILDER_URL:"https://app.immersivetranslate.com/ebook/make/",SUBTITLE_BUILDER_URL:"https://app.immersivetranslate.com/subtitle/",HTML_VIEWER_URL:"https://app.immersivetranslate.com/html/",SHARE_DRAFT_URL:"https://immersivetranslate.com/preview",MOCK:"0",DEBUG:"0",IMMERSIVE_TRANSLATE_USERSCRIPT:"1",INSTALL_FROM:"official_userscript"};var vg=(e,t)=>e.map((n,r,i)=>t(n,r,i)?r:null).filter(n=>n!=null),Tc=(e,t)=>[-1,...t,e.length].reduce(({xs:n,a:r},i)=>({xs:n?.concat([e.slice(r+1,i)])??[],a:i}),{}).xs,xg=(e,t)=>e.slice(0,-1).concat([e[e.length-1].concat(t[0])]).concat(t.slice(1)),oo=/\d/,Ar=/^epubcfi\((.*)\)$/,xc=e=>e.replace(/[\^[\](),;=]/g,"^$&"),_g=e=>Ar.test(e)?e:`epubcfi(${e})`,Tg=e=>e.match(Ar)?.[1]??e,Sg=e=>(...t)=>`epubcfi(${e(...t.map(n=>n.match(Ar)?.[1]??n))})`,Sc=Sg((...e)=>e.join("!")),Ag=e=>{let t=[],n,r,i="",a=s=>(t.push(s),n=null,i=""),o=s=>(i+=s,r=!1);for(let s of Array.from(e.trim()).concat("")){if(s==="^"&&!r){r=!0;continue}if(n==="!")a(["!"]);else if(n===",")a([","]);else if(n==="/"||n===":")if(oo.test(s)){o(s);continue}else a([n,parseInt(i)]);else if(n==="~")if(oo.test(s)||s==="."){o(s);continue}else a(["~",parseFloat(i)]);else if(n==="@"){if(s===":"){a(["@",parseFloat(i)]),n="@";continue}if(oo.test(s)||s==="."){o(s);continue}else a(["@",parseFloat(i)])}else if(n==="["){s===";"&&!r?(a(["[",i]),n=";"):s===","&&!r?(a(["[",i]),n="["):s==="]"&&!r?a(["[",i]):o(s);continue}else if(n?.startsWith(";")){s==="="&&!r?(n=`;${i}`,i=""):s===";"&&!r?(a([n,i]),n=";"):s==="]"&&!r?a([n,i]):o(s);continue}(s==="/"||s===":"||s==="~"||s==="@"||s==="["||s==="!"||s===",")&&(n=s)}return t},Ac=(e,t)=>vg(e,([n])=>n===t),Eg=e=>{let t=[],n;for(let[r,i]of e){if(r==="/")t.push({index:i});else{let a=t[t.length-1];if(r===":")a.offset=i;else if(r==="~")a.temporal=i;else if(r==="@")a.spatial=(a.spatial??[]).concat(i);else if(r===";s")a.side=i;else if(r==="[")if(n==="/"&&i)a.id=i;else{a.text=(a.text??[]).concat(i);continue}}n=r}return t},_c=e=>Tc(e,Ac(e,"!")).map(Eg),an=e=>{let t=Ag(Tg(e)),n=Ac(t,",");if(!n.length)return _c(t);let[r,i,a]=Tc(t,n).map(_c);return{parent:r,start:i,end:a}},kg=({index:e,id:t,offset:n,temporal:r,spatial:i,text:a,side:o})=>{let s=o?`;s=${o}`:"";return`/${e}`+(t?`[${xc(t)}${s}]`:"")+(n!=null&&e%2?`:${n}`:"")+(r?`~${r}`:"")+(i?`@${i.join(":")}`:"")+(a||!t&&o?"["+(a?.map(xc)?.join(",")??"")+s+"]":"")},Ec=e=>e.parent?[e.parent,e.start,e.end].map(Ec).join(","):e.map(t=>t.map(kg).join("")).join("!"),vi=e=>_g(Ec(e)),Kt=(e,t)=>typeof e=="string"?vi(Kt(an(e),t)):e.parent?xg(e.parent,e[t?"end":"start"]):e,Cg=(e,t)=>{typeof e=="string"&&(e=an(e)),typeof t=="string"&&(t=an(t)),e=Kt(e),t=Kt(t,!0);let n=e[e.length-1],r=t[t.length-1],i=[],a=[],o=[],s=!0,l=Math.max(n.length,r.length);for(let u=0;u<l;u++){let p=n[u],d=r[u];s&&=p?.index===d?.index&&!p?.offset&&!d?.offset,s?i.push(p):(p&&a.push(p),d&&o.push(d))}let c=e.slice(0,-1).concat([i]);return vi({parent:c,start:[a],end:[o]})},Sr=(e,t)=>{if(typeof e=="string"&&(e=an(e)),typeof t=="string"&&(t=an(t)),e.start||t.start)return Sr(Kt(e),Kt(t))||Sr(Kt(e,!0),Kt(t,!0));for(let n=0;n<Math.max(e.length,t.length);n++){let r=e[n],i=t[n],a=Math.max(r.length,i.length)-1;for(let o=0;o<=a;o++){let s=r[o],l=i[o];if(!s)return-1;if(!l||s.index>l.index)return 1;if(s.index<l.index)return-1;if(o===a){if(s.offset>l.offset)return 1;if(s.offset<l.offset)return-1}}}return 0},so=({nodeType:e})=>e===3||e===4,yi=({nodeType:e})=>e===1,co=e=>{let t=Array.from(e.childNodes).filter(n=>so(n)||yi(n)).reduce((n,r)=>{let i=n[n.length-1];return i?so(r)?Array.isArray(i)?i.push(r):so(i)?n[n.length-1]=[i,r]:n.push(r):yi(i)?n.push(null,r):n.push(r):n.push(r),n},[]);return yi(t[0])&&t.unshift("first"),yi(t[t.length-1])&&t.push("last"),t.unshift("before"),t.push("after"),t},Lg=(e,t)=>e?co(e)[t]:null,lo=(e,t)=>{let{id:n}=t[t.length-1];if(n){let a=e.ownerDocument.getElementById(n);if(a)return{node:a,offset:0}}for(let{index:a}of t){let o=Lg(e,a);if(o==="first")return{node:e.firstChild??e};if(o==="last")return{node:e.lastChild??e};if(o==="before")return{node:e,before:!0};if(o==="after")return{node:e,after:!0};e=o}let{offset:r}=t[t.length-1];if(!Array.isArray(e))return{node:e,offset:r};let i=0;for(let a of e){let{length:o}=a.nodeValue;if(i+o>=r)return{node:a,offset:r-i};i+=o}},wi=(e,t)=>{let{parentNode:n,id:r}=e,i=co(n),a=i.findIndex(l=>Array.isArray(l)?l.some(c=>c===e):l===e),o=i[a];if(Array.isArray(o)){let l=0;for(let c of o)if(c===e){l+=t;break}else l+=c.nodeValue.length;t=l}let s={id:r,index:a,offset:t};return n!==e.ownerDocument.documentElement?wi(n).concat(s):[s]},kc=e=>{let{startContainer:t,startOffset:n,endContainer:r,endOffset:i}=e,a=wi(t,n);if(e.collapsed)return vi([a]);let o=wi(r,i);return Cg([a],[o])},xi=(e,t)=>{let n=Kt(t),r=Kt(t,!0),i=e.documentElement,a=lo(i,n[0]),o=lo(i,r[0]),s=e.createRange();return a.before?s.setStartBefore(a.node):a.after?s.setStartAfter(a.node):s.setStart(a.node,a.offset),o.before?s.setEndBefore(o.node):o.after?s.setEndAfter(o.node):s.setEnd(o.node,o.offset),s},Cc=e=>{let t=[],{parentNode:n}=e[0],r=wi(n);for(let[i,a]of co(n).entries()){let o=e[t.length];a===o&&t.push(vi([r.concat({id:o.id,index:i})]))}return t},uo=(e,t)=>lo(e.documentElement,Kt(t)).node,po={fromIndex:e=>`/6/${(e+1)*2}`,toIndex:e=>e?.at(-1).index/2-1};var Og=e=>{let t=0,n=r=>{if(r.id=t++,r.subitems)for(let i of r.subitems)n(i)};for(let r of e)n(r);return e},Oc=e=>e.map(t=>t.subitems?.length?[t,Oc(t.subitems)].flat():t).flat(),Er=class{constructor({toc:t,ids:n,splitHref:r,getFragment:i}){Og(t);let a=Oc(t),o=new Map;for(let[l,c]of a.entries()){let[u,p]=r(c?.href)??[],d={fragment:p,item:c};o.has(u)?o.get(u).items.push(d):o.set(u,{prev:a[l-1],items:[d]})}let s=new Map;for(let[l,c]of n.entries())o.has(c)?s.set(c,o.get(c)):s.set(c,s.get(n[l-1]));this.ids=n,this.map=s,this.getFragment=i}getProgress(t,n){let r=this.ids[t],i=this.map.get(r);if(!i)return null;let{prev:a,items:o}=i;if(!o)return a;if(!n||o.length===1&&!o[0].fragment)return o[0].item;let s=n.startContainer.getRootNode();for(let[l,{fragment:c}]of o.entries()){let u=this.getFragment(s,c);if(u&&n.comparePoint(u,0)>0)return o[l-1]?.item??a}return o[o.length-1].item}},_i=class{constructor(t,n,r){this.sizes=t.map(i=>i.linear==="no"?0:i.size),this.sizePerLoc=n,this.sizePerTimeUnit=r,this.sizeTotal=this.sizes.reduce((i,a)=>i+a,0)}getProgress(t,n){let{sizes:r,sizePerLoc:i,sizePerTimeUnit:a,sizeTotal:o}=this,s=r[t]??0,c=r.slice(0,t).reduce((d,f)=>d+f,0)+n*s,u=o-c,p=(1-n)*s;return{fraction:c/o,section:{current:t,total:r.length},location:{current:Math.floor(c/i),total:Math.ceil(o/i)},time:{section:p/a,total:u/a}}}getSection(t){let{sizes:n,sizeTotal:r}=this,i=t*r,a=-1,o=0,s=0;for(let[l,c]of n.entries()){let u=s+c;if(u>i){a=l,o=(i-s)/c;break}s=u}return[a,o]}};var Yn=e=>document.createElementNS("http://www.w3.org/2000/svg",e),Ti=class{#e=Yn("svg");#t=new Map;constructor(){Object.assign(this.#e.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none"});let t=matchMedia("(prefers-color-scheme: dark)"),n=()=>this.#e.style.mixBlendMode=t.matches?"normal":"multiply";t.addEventListener("change",n),n()}get element(){return this.#e}add(t,n,r,i){this.#t.has(t)&&this.remove(t),typeof n=="function"&&(n=n(this.#e.getRootNode()));let a=n.getClientRects(),o=r(a,i);this.#e.append(o),this.#t.set(t,{range:n,draw:r,options:i,element:o,rects:a})}remove(t){this.#t.has(t)&&(this.#e.removeChild(this.#t.get(t).element),this.#t.delete(t))}redraw(){for(let t of this.#t.values()){let{range:n,draw:r,options:i,element:a}=t;this.#e.removeChild(a);let o=n.getClientRects(),s=r(o,i);this.#e.append(s),t.element=s,t.rects=o}}hitTest({x:t,y:n}){let r=Array.from(this.#t.entries());for(let i=r.length-1;i>=0;i--){let[a,o]=r[i];for(let{left:s,top:l,right:c,bottom:u}of o.rects)if(l<=n&&s<=t&&u>n&&c>t)return[a,o.range]}return[]}static underline(t,n={}){let{color:r="red",width:i=2}=n,a=Yn("g");a.setAttribute("fill",r);for(let{left:o,bottom:s,width:l}of t){let c=Yn("rect");c.setAttribute("x",o),c.setAttribute("y",s-i),c.setAttribute("height",i),c.setAttribute("width",l),a.append(c)}return a}static highlight(t,n={}){let{color:r="red"}=n,i=Yn("g");i.setAttribute("fill",r),i.setAttribute("fill-opacity",.3);for(let{left:a,top:o,height:s,width:l}of t){let c=Yn("rect");c.setAttribute("x",a),c.setAttribute("y",o),c.setAttribute("height",s),c.setAttribute("width",l),i.append(c)}return i}static copyImage([t],n={}){let{src:r}=n,i=Yn("image"),{left:a,top:o,height:s,width:l}=t;return i.setAttribute("href",r),i.setAttribute("x",a),i.setAttribute("y",o),i.setAttribute("height",s),i.setAttribute("width",l),i}};var Si=class{#e=new Map;#t=new Map;#n=new Map;#r=new Map;constructor({resolve:t,compare:n,onAdd:r,onDelete:i,onUpdate:a}){this.resolve=t,this.compare=n,this.onAdd=r,this.onDelete=i,this.onUpdate=a}async add(t,n){let{value:r}=t;if(this.#t.has(r))return;let{index:i,anchor:a}=await this.resolve(r);if(this.#t.set(r,t),this.#r.set(r,i),this.#n.set(r,a),this.#e.has(i)){let o=this.#e.get(i);if(n)o.push(t),this.onAdd?.(t,i,o.length-1);else{let s=0;for(let l=0;l<o.length;l++){let c=o[l].value;if(this.compare(r,c)<=0)break;s=l+1}o.splice(s,0,t),this.onAdd?.(t,i,s)}}else this.#e.set(i,[t]),this.onAdd?.(t,i,0)}update(t){let n=this.#r.get(t.value),r=this.#t.get(t.value);Object.assign(r,t),this.onUpdate?.(t,n)}delete(t){let n=this.#r.get(t),r=this.#e.get(n),i=r.findIndex(a=>a.value===t);r.splice(i,1),this.#t.delete(t),this.#r.delete(t),this.#n.delete(t),this.onDelete?.(t,n,i)}getByIndex(t){return this.#e.get(t)??[]}getAnchor(t){return this.#n.get(t)}};var Dg=e=>new Promise(t=>setTimeout(t,e)),Pg=(e,t,n)=>{let r;return(...i)=>{let a=()=>{r=null,n||e(...i)},o=n&&!r;r&&clearTimeout(r),r=setTimeout(a,t),o&&e(...i)}},Rg=e=>{if(!e?.collapsed)return e;let{endOffset:t,endContainer:n}=e;if(n.nodeType===1)return n;if(t+1<n.length)e.setEnd(n,t+1);else if(t>1)e.setStart(n,t-1);else return n.parentNode;return e},Ai=(e,t,n,r=n)=>{let i=e.createRange();return i.setStart(t,n),i.setEnd(t,r),i},Ei=(e,t,n,r=0,i=t.nodeValue.length)=>{if(i-r===1)return n(Ai(e,t,r),Ai(e,t,i))<0?r:i;let a=Math.floor(r+(i-r)/2),o=n(Ai(e,t,r,a),Ai(e,t,a,i));return o<0?Ei(e,t,n,r,a):o>0?Ei(e,t,n,a,i):a},{SHOW_ELEMENT:Ng,SHOW_TEXT:Mg,SHOW_CDATA_SECTION:Ig,FILTER_ACCEPT:Dc,FILTER_REJECT:Pc,FILTER_SKIP:Rc}=NodeFilter,Fg=Ng|Mg|Ig,Bg=(e,t,n,r)=>{let i=d=>{let f=d.localName?.toLowerCase();if(f==="script"||f==="style")return Pc;if(d.nodeType===1){let{left:b,right:g}=r(d.getBoundingClientRect());if(g<t||b>n)return Pc;if(b>=t&&g<=n)return Dc}else{if(!d.nodeValue?.trim())return Rc;let b=e.createRange();b.selectNodeContents(d);let{left:g,right:m}=r(b.getBoundingClientRect());if(m>=t&&g<=n)return Dc}return Rc},a=e.createTreeWalker(e.body,Fg,{acceptNode:i}),o=[];for(let d=a.nextNode();d;d=a.nextNode())o.push(d);let s=o[0]??e.body,l=o[o.length-1]??s,c=s.nodeType===1?0:Ei(e,s,(d,f)=>{let b=r(d.getBoundingClientRect()),g=r(f.getBoundingClientRect());return b.right<t&&g.left>t?0:g.left>t?-1:1}),u=l.nodeType===1?0:Ei(e,l,(d,f)=>{let b=r(d.getBoundingClientRect()),g=r(f.getBoundingClientRect());return b.right<n&&g.left>n?0:g.left>n?-1:1}),p=e.createRange();return p.setStart(s,c),p.setEnd(l,u),p},zg=e=>{let{defaultView:t}=e,{writingMode:n,direction:r}=t.getComputedStyle(e.body),i=n==="vertical-rl"||n==="vertical-lr",a=e.body.dir==="rtl"||r==="rtl"||e.documentElement.dir==="rtl";return{vertical:i,rtl:a}},Ug=e=>{let t=e.defaultView.getComputedStyle(e.body);return t.backgroundColor==="rgba(0, 0, 0, 0)"&&t.backgroundImage==="none"?e.defaultView.getComputedStyle(e.documentElement).background:t.background},fo=class{#e=document.createElement("div");#t=document.createElement("iframe");#n=document.createRange();#r;#i=!1;#a=!1;#o=!0;#s;#l={};constructor({container:t}){this.container=t,this.#t.classList.add("filter"),this.#e.append(this.#t),Object.assign(this.#e.style,{position:"relative",overflow:"hidden",flex:"0 0 auto",width:"100%",height:"100%"}),Object.assign(this.#t.style,{overflow:"hidden",border:"0",display:"none",width:"100%",height:"100%"}),this.#t.setAttribute("sandbox","allow-same-origin allow-scripts"),this.#t.setAttribute("scrolling","no")}get element(){return this.#e}get document(){return this.#t.contentDocument}async load(t,n,r){if(typeof t!="string")throw new Error(`${t} is not string`);return new Promise(i=>{this.#t.addEventListener("load",()=>{let a=this.document;n?.(a),this.#t.style.display="block";let{vertical:o,rtl:s}=zg(a),l=Ug(a);this.#t.style.display="none",this.#i=o,this.#a=s,this.#n.selectNodeContents(a.body);let c=r?.({vertical:o,rtl:s,background:l});this.#t.style.display="block",this.render(c),new ResizeObserver(()=>this.expand()).observe(a.body),i()},{once:!0}),this.#t.src=t})}render(t){this.#o=t.flow!=="scrolled",this.#l=t,this.#o?this.columnize(t):this.scrolled(t)}scrolled({gap:t,columnWidth:n}){let r=this.#i,i=this.document;Object.assign(i.documentElement.style,{boxSizing:"border-box",padding:r?`${t}px 0`:`0 ${t}px`,columnWidth:"auto",height:"auto",width:"auto"}),Object.assign(i.body.style,{[r?"maxHeight":"maxWidth"]:`${n}px`,margin:"auto"}),this.setImageSize(),this.expand()}columnize({width:t,height:n,gap:r,columnWidth:i}){let a=this.#i;this.#s=a?n:t;let o=this.document;Object.assign(o.documentElement.style,{boxSizing:"border-box",columnWidth:`${i}px`,columnGap:`${r}px`,columnFill:"auto",...a?{width:`${t}px`}:{height:`${n}px`},padding:a?`${r/2}px 0`:`0 ${r/2}px`,overflow:"hidden",overflowWrap:"anywhere",position:"static",border:"0",margin:"0",maxHeight:"none",maxWidth:"none",minHeight:"none",minWidth:"none",webkitLineBoxContain:"block glyphs replaced"}),Object.assign(o.body.style,{maxHeight:"none",maxWidth:"none",margin:"0"}),this.setImageSize(),this.expand()}setImageSize(){let{width:t,height:n,margin:r}=this.#l,i=this.#i,a=this.document;for(let o of a.body.querySelectorAll("img, svg, video")){let{maxHeight:s,maxWidth:l}=a.defaultView.getComputedStyle(o);Object.assign(o.style,{maxHeight:i?s!=="none"&&s!=="0px"?s:"100%":`${n-r*2}px`,maxWidth:i?`${t-r*2}px`:l!=="none"&&l!=="0px"?l:"100%",objectFit:"contain",pageBreakInside:"avoid",breakInside:"avoid",boxSizing:"border-box"})}}expand(){if(this.#o){let t=this.#i?"height":"width",n=this.#i?"width":"height",r=this.#n.getBoundingClientRect()[t],a=Math.ceil(r/this.#s)*this.#s;this.#e.style.padding="0",this.#t.style[t]=`${a}px`,this.#e.style[t]=`${a}px`,this.#t.style[n]="100%",this.#e.style[n]="100%",this.document&&(this.document.documentElement.style[t]=`${a}px`),this.#r&&(this.#r.element.style.margin="0",this.#r.element.style[t]=`${a}px`,this.#r.redraw())}else{let t=this.#i?"width":"height",n=this.#i?"height":"width",a=this.document?.documentElement?.getBoundingClientRect()?.[t],{margin:o}=this.#l,s=this.#i?`0 ${o}px`:`${o}px 0`;this.#e.style.padding=s,this.#t.style[t]=`${a}px`,this.#e.style[t]=`${a}px`,this.#t.style[n]="100%",this.#e.style[n]="100%",this.#r&&(this.#r.element.style.margin=s,this.#r.element.style[t]=`${a}px`,this.#r.redraw())}}set overlayer(t){this.#r=t,this.#e.append(t.element)}get overlayer(){return this.#r}},ki=class{#e=document.createElement("div");#t=document.createElement("div");#n;#r=!1;#i=!1;#a=-1;#o=0;#s=!1;#l=new WeakMap;layout={margin:48,gap:40,maxColumnWidth:700};constructor({book:t,onLoad:n,onRelocated:r,createOverlayer:i}){this.sections=t.sections,this.onLoad=n,this.onRelocated=r,this.createOverlayer=i,Object.assign(this.#e.style,{boxSizing:"border-box",width:"100%",height:"100%",position:"absolute"}),this.#e.append(this.#t),Object.assign(this.#t.style,{width:"100%",height:"100%"}),new ResizeObserver(()=>this.render()).observe(this.#e),this.#t.addEventListener("scroll",Pg(()=>{this.scrolled&&this.#b("scroll")},250))}get element(){return this.#e}#d(){return this.#n&&this.#t.removeChild(this.#n.element),this.#n=new fo({container:this.#e}),this.#t.append(this.#n.element),this.#n}#c({vertical:t,rtl:n,background:r}){this.#r=t,this.#i=n,this.#e.style.background=r;let{flow:i,margin:a,gap:o,maxColumnWidth:s}=this.layout;if(i==="scrolled"){this.#e.setAttribute("dir",t?"rtl":"ltr"),this.#e.style.padding="0",this.#t.style.overflow="scroll";let g=this.layout.maxColumnWidth;return{flow:i,margin:a,gap:o,columnWidth:g}}let{width:l,height:c}=this.#t.getBoundingClientRect(),u=t?c:l,p=Math.ceil(u/s),d=u/p-o;this.#e.setAttribute("dir",n?"rtl":"ltr");let f=`${t?o:o/2}px`,b=`${t?a-o/2:a}px`;return this.#e.style.padding=`${b} ${f}`,this.#t.style.overflow="hidden",{height:c,width:l,margin:a,gap:o,columnWidth:d}}render(){this.#n&&(this.#n.render(this.#c({vertical:this.#r,rtl:this.#i})),this.#g())}get scrolled(){return this.layout.flow==="scrolled"}get scrollProp(){let{scrolled:t}=this;return this.#r?t?"scrollLeft":"scrollTop":t?"scrollTop":"scrollLeft"}get sideProp(){let{scrolled:t}=this;return this.#r?t?"width":"height":t?"height":"width"}get size(){return this.#t.getBoundingClientRect()[this.sideProp]}get viewSize(){return this.#n.element.getBoundingClientRect()[this.sideProp]}get start(){return Math.abs(this.#t[this.scrollProp])}get end(){return this.start+this.size}get page(){return Math.floor((this.start+this.end)/2/this.size)}get pages(){return Math.round(this.viewSize/this.size)}#u(){if(this.scrolled){let n=this.viewSize,r=this.layout.margin;return this.#r?({left:i,right:a})=>({left:n-a-r,right:n-i-r}):({top:i,bottom:a})=>({left:i+r,right:a+r})}let t=this.pages*this.size;return this.#i?({left:n,right:r})=>({left:t-r,right:t-n}):this.#r?({top:n,bottom:r})=>({left:n,right:r}):n=>n}async#f(t,n){if(this.scrolled){let i=this.#u()(t).left;return this.#p(i,n)}let r=this.#u()(t).left+this.layout.margin/2;return this.#h(Math.floor(r/this.size),n)}async#p(t,n){let r=this.#t,{scrollProp:i}=this;if(r[i]===t){this.#b(n);return}this.scrolled&&this.#r&&(t=-t),r[i]=t,this.#b(n)}async#h(t,n){let r=this.size*(this.#i?-t:t);return this.#p(r,n)}async#g(t){let n=Rg(this.#o).getBoundingClientRect?.();if(n){await this.#f(n,"anchor"),t&&this.#_();return}if(this.scrolled){await this.#p(this.#o*this.viewSize,"anchor");return}let{pages:r}=this;if(!r)return;let i=Math.round(this.#o*(r-1));await this.#h(i,"anchor")}#_(){let{defaultView:t}=this.#n.document;if(this.#o instanceof t.Range){let n=t.getSelection();n.removeAllRanges(),n.addRange(this.#o)}}#T(){return Bg(this.#n.document,this.start,this.end,this.#u(),this.scrolled)}#b(t){let n=this.#T();t!=="anchor"&&(this.#o=n);let r=this.#a;this.scrolled?this.onRelocated?.(n,r,this.end/this.viewSize):this.pages>0&&this.onRelocated?.(n,r,(this.page+1)/this.pages)}async#w(t){let{index:n,src:r,anchor:i,onLoad:a,select:o}=await t;if(this.#a=n,r){let s=this.#d(),l=p=>{if(p.head){let d=p.createElement("style");p.head.append(d),this.#l.set(p,d)}a?.(p,n)},c=this.#c.bind(this);await s.load(r,l,c);let u=this.createOverlayer?.(s.document,n);u&&(s.overlayer=u),this.#n=s}this.#o=(typeof i=="function"?i(this.#n.document):i)??0,await this.#g(o)}#v(t){return t>-1&&t<this.pages}scrollPrev(){if(!this.#n)return null;if(this.scrolled)return this.start>0?this.#p(Math.max(0,this.start-this.size)):null;let t=this.page-1;return this.#v(t)?this.#h(t):null}scrollNext(){if(!this.#n)return null;if(this.scrolled)return this.viewSize-this.end>60?this.#p(Math.min(this.viewSize,this.end)):null;let t=this.page+1;return this.#v(t)?this.#h(t):null}#x(t){return t>=0&&t<=this.sections.length-1}async#y(t,n,r){if(this.#s)return;r&&(this.#s=!0);let i=t?.();if(i)await i;else{let{index:a,anchor:o,select:s}=await n;if(!this.#x(a))return this.#s=!1,null;if(a===this.#a)await this.#w({index:a,anchor:o,select:s});else{let l=this.#a,c=(...u)=>{this.sections[l]?.unload?.(),this.onLoad?.(...u)};await this.#w(Promise.resolve(this.sections[a].load()).then(u=>({index:a,src:u,anchor:o,onLoad:c,select:s})).catch(u=>({})))}}r&&(await Dg(100),this.#s=!1)}async goTo(t){return this.#y(null,t)}#m(t){for(let n=this.#a+t;this.#x(n);n+=t)if(this.sections[n]?.linear!=="no")return n}prev(){let t=this.#m(-1);return this.#y(()=>this.scrollPrev(),{index:t,anchor:()=>1},!0)}next(){let t=this.#m(1);return this.#y(()=>this.scrollNext(),{index:t},!0)}prevSection(){return this.goTo({index:this.#m(-1)})}nextSection(){return this.goTo({index:this.#m(1)})}firstSection(){let t=this.sections.findIndex(n=>n.linear!=="no");return this.goTo({index:t})}lastSection(){let t=this.sections.findLastIndex(n=>n.linear!=="no");return this.goTo({index:t})}getOverlayer(){if(this.#n)return{index:this.#a,overlayer:this.#n.overlayer,doc:this.#n.document}}setStyle(t){let n=this.#l.get(this.#n?.document);n&&(n.textContent=t)}async#S(t,n){this.#o=t,await this.#g(n)}};var Nc=e=>e?.split(/[,;\s]/)?.filter(t=>t)?.map(t=>t.split("=").map(n=>n.trim())),$g=(e,t)=>{if(e.documentElement.nodeName==="svg"){let[,,i,a]=e.documentElement.getAttribute("viewBox")?.split(/\s/)??[];return{width:i,height:a}}let n=Nc(e.querySelector('meta[name="viewport"]')?.getAttribute("content"));if(n)return Object.fromEntries(n);if(typeof t=="string")return Nc(t);if(t)return t;let r=e.querySelector("img");return r?{width:r.naturalWidth,height:r.naturalHeight}:{width:1e3,height:2e3}},ho=class{#e=document.createElement("div");defaultViewport;spread;#t=!1;#n;#r;#i;#a;constructor(){Object.assign(this.#e.style,{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}),new ResizeObserver(()=>this.render()).observe(this.#e)}get element(){return this.#e}get side(){return this.#a}async#o(t){let n=document.createElement("div"),r=document.createElement("iframe");return n.append(r),Object.assign(r.style,{border:"0",display:"none",overflow:"hidden"}),r.setAttribute("scrolling","no"),r.classList.add("filter"),this.#e.append(n),t?new Promise(i=>{let a=()=>{r.removeEventListener("load",a),this.onLoad?.(r);let o=r.contentDocument,{width:s,height:l}=$g(o,this.defaultViewport);i({element:n,iframe:r,width:parseFloat(s),height:parseFloat(l)})};r.addEventListener("load",a),r.src=t}):{blank:!0,element:n,iframe:r}}render(t=this.#a){if(!t)return;let n=this.#n??{},r=this.#i??this.#r,i=t==="left"?n:r,{width:a,height:o}=this.#e.getBoundingClientRect(),s=this.spread!=="both"&&this.spread!=="portrait"&&o>a;this.#t=s;let l=n.width??r.width,c=n.height??r.height,u=s?Math.min(a/(i.width??l),o/(i.height??c)):Math.min(a/((n.width??l)+(r.width??l)),o/Math.max(n.height??c,r.height??c)),p=d=>{let{element:f,iframe:b,width:g,height:m}=d;Object.assign(b.style,{width:`${g}px`,height:`${m}px`,transform:`scale(${u})`,transformOrigin:"top left",display:"block"}),Object.assign(f.style,{width:`${(g??l)*u}px`,height:`${(m??c)*u}px`,overflow:"hidden",display:"block"}),s&&d!==i&&(f.style.display="none")};this.#i?p(this.#i):(p(n),p(r))}async showSpread({left:t,right:n,center:r,side:i}){this.#e.replaceChildren(),this.#n=null,this.#r=null,this.#i=null,r?(this.#i=await this.#o(r),this.#a="center",this.render()):(this.#n=await this.#o(t),this.#r=await this.#o(n),this.#a=i,this.render())}goLeft(){if(!this.#i){if(this.#n?.blank)return!0;if(this.#t&&this.#n?.element?.style?.display==="none")return this.#r.element.style.display="none",this.#n.element.style.display="block",this.#a="left",!0}}goRight(){if(!this.#i){if(this.#r?.blank)return!0;if(this.#t&&this.#r?.element?.style?.display==="none")return this.#n.element.style.display="none",this.#r.element.style.display="block",this.#a="right",!0}}},Ci=class{#e;#t=-1;#n=new ho;constructor({book:t,onLoad:n,onRelocated:r}){this.book=t,this.onLoad=n,this.onRelocated=r;let{rendition:i}=t;this.#n.spread=i?.spread,this.#n.defaultViewport=i?.viewport;let a=t.dir==="rtl",o=!a;this.rtl=a,i?.spread==="none"?this.#e=t.sections.map(s=>({center:s})):this.#e=t.sections.reduce((s,l)=>{let c=s[s.length-1],{linear:u,pageSpread:p}=l;if(u==="no")return s;let d=()=>{let f={};return s.push(f),f};if(p==="center")d().center=l;else if(p==="left"){let f=c.center||c.left||o?d():c;f.left=l}else if(p==="right"){let f=c.center||c.right||a?d():c;f.right=l}else o?c.center||c.right?d().left=l:c.left?c.right=l:c.left=l:c.center||c.left?d().right=l:c.right?c.left=l:c.right=l;return s},[{}])}get element(){return this.#n.element}get index(){let t=this.#e[this.#t],n=t?.center??(this.#n.side==="left"?t.left??t.right:t.right??t.left);return this.book.sections.indexOf(n)}getSpreadOf(t){let n=this.#e;for(let r=0;r<n.length;r++){let{left:i,right:a,center:o}=n[r];if(i===t)return{index:r,side:"left"};if(a===t)return{index:r,side:"right"};if(o===t)return{index:r,side:"center"}}}async goToSpread(t,n){if(t<0||t>this.#e.length-1)return;if(t===this.#t){this.#n.render(n);return}this.#t=t;let r=this.#e[t];if(r.center){let i=await r.center?.load?.();await this.#n.showSpread({center:i})}else{let i=await r.left?.load?.(),a=await r.right?.load?.();await this.#n.showSpread({left:i,right:a,side:n})}this.onRelocated?.(null,this.index,0,1)}async select(t){await this.goTo(t)}async goTo(t){let{book:n}=this,r=await t,i=n.sections[r.index];if(!i)return;let{index:a,side:o}=this.getSpreadOf(i);await this.goToSpread(a,o)}async next(){if(this.rtl?this.#n.goLeft():this.#n.goRight())this.onRelocated?.(null,this.index,0,1);else return this.goToSpread(this.#t+1,this.rtl?"right":"left")}async prev(){if(this.rtl?this.#n.goRight():this.#n.goLeft())this.onRelocated?.(null,this.index,0,1);else return this.goToSpread(this.#t-1,this.rtl?"left":"right")}};var Mc=e=>e.replace(/\s+/g," "),jg=(e,{startIndex:t,startOffset:n,endIndex:r,endOffset:i})=>{let a=e[t],o=e[r],s=a===o?a.slice(n,i):a.slice(n)+e.slice(a+1,o).join("")+o.slice(0,i),l=Mc(a.slice(0,n)).trimStart(),c=Mc(o.slice(i)).trimEnd(),u=l.length<50?"":"\u2026",p=c.length<50?"":"\u2026",d=`${u}${l.slice(-50)}`,f=`${c.slice(0,50)}${p}`;return{pre:d,match:s,post:f}},Hg=function*(e,t,n={}){let{locales:r="en",granularity:i="word",sensitivity:a="base"}=n,o,s;try{o=new Intl.Segmenter(r,{usage:"search",granularity:i}),s=new Intl.Collator(r,{sensitivity:a})}catch{o=new Intl.Segmenter("en",{usage:"search",granularity:i}),s=new Intl.Collator("en",{sensitivity:a})}let l=Array.from(o.segment(t)).length,c=[],u=0,p=o.segment(e[u])[Symbol.iterator]();e:for(;u<e.length;){for(;c.length<l;){let{done:f,value:b}=p.next();if(f)if(u++,u<e.length){p=o.segment(e[u])[Symbol.iterator]();continue}else break e;let{index:g,segment:m}=b;if(/[^\p{Format}]/u.test(m)){if(/\s/u.test(m)){/\s/u.test(c[c.length-1]?.segment)||c.push({strIndex:u,index:g,segment:" "});continue}b.strIndex=u,c.push(b)}}let d=c.map(f=>f.segment).join("");if(s.compare(t,d)===0){let f=u,b=c[c.length-1],g=b.index+b.segment.length,m=c[0].strIndex,h=c[0].index,y={startIndex:m,startOffset:h,endIndex:f,endOffset:g};yield{range:y,excerpt:jg(e,y)}}c.shift()}},Ic=(e,t)=>{let{defalutLocale:n,matchCase:r,matchDiacritics:i,matchWholeWords:a}=t;return function*(o,s){let l=e(o,function*(c,u){for(let p of Hg(c,s,{locales:o.body.lang||o.documentElement.lang||n||"en",granularity:a?"word":"grapheme",sensitivity:i&&r?"variant":i&&!r?"accent":!i&&r?"case":"base"})){let{startIndex:d,startOffset:f,endIndex:b,endOffset:g}=p.range;p.range=u(d,f,b,g),yield p}});for(let c of l)yield c}};var Wg=function*(e,t){let n=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT|NodeFilter.SHOW_CDATA_SECTION,{FILTER_ACCEPT:r,FILTER_REJECT:i,FILTER_SKIP:a}=NodeFilter,o=p=>{let d=p.localName?.toLowerCase();return d==="script"||d==="style"?i:p.nodeType===1?a:r},s=e.createTreeWalker(e.body,n,{acceptNode:o}),l=[];for(let p=s.nextNode();p;p=s.nextNode())l.push(p);let c=l.map(p=>p.nodeValue),u=(p,d,f,b)=>{let g=e.createRange();return g.setStart(l[p],d),g.setEnd(l[f],b),g};for(let p of t(c,u))yield p};var Fc=Object.fromEntries(Array.from(Object.entries({isRef:["annoref","biblioref","glossref","noteref"],isLink:["backlink"],isNote:["annotation","note","footnote","endnote","rearnote"]}),([e,t])=>[e,n=>n.getAttributeNS("http://www.idpf.org/2007/ops","type")?.split(/s/)?.some(r=>t.includes(r))])),Li=class{#e;#t;#n;#r;language="en";textDirection="";isCJK=!1;isFixedLayout=!1;annotations=new Si({resolve:t=>this.resolveCFI(t),compare:Sr,onAdd:(t,n,r)=>{let i=this.#s(n);i&&this.#o(i.doc,i.overlayer,t);let a=this.#t.getProgress(n)?.label??"";this?.emit({type:"add-annotation",annotation:t,label:a,index:n,position:r})},onDelete:(t,n,r)=>{this.#s(n)?.overlayer?.remove(t),this?.emit({type:"delete-annotation",index:n,position:r})},onUpdate:(t,n)=>{let r=this.#s(n);r&&(r.overlayer.remove(t.value),this.#o(r.doc,r.overlayer,t))}});constructor(t,n){if(this.book=t,this.emit=n,t.metadata?.language)try{let r=t.metadata.language;t.metadata.language=Intl.getCanonicalLocales(r)[0];let i=typeof r=="string"?r:r[0],a=new Intl.Locale(i);this.isCJK=["zh","ja","kr"].includes(a.language),a.textInfo&&a.textInfo.direction&&(this.textDirection=a.textInfo.direction)}catch{}if(t.splitTOCHref&&t.getTOCFragment){let r=t.sections.map(o=>o.id);this.#e=new _i(t.sections,150,1600);let i=t.splitTOCHref.bind(t),a=t.getTOCFragment.bind(t);this.#t=new Er({toc:t.toc??[],ids:r,splitHref:i,getFragment:a}),this.#n=new Er({toc:t.pageList??[],ids:r,splitHref:i,getFragment:a})}}async display(){let t={book:this.book,onLoad:this.#a.bind(this),onRelocated:this.#i.bind(this),createOverlayer:this.#l.bind(this)};return this.isFixedLayout=this.book.rendition?.layout==="pre-paginated",this.isFixedLayout?this.renderer=new Ci(t):this.renderer=new ki(t),this.renderer.element}async init({lastLocation:t,annotations:n}){if(t){let r=this.resolveNavigation(t);r?await this.renderer.goTo(r):await this.renderer.next()}else await this.renderer.next();if(n){n.sort((r,i)=>Sr(r.value,i.value));for(let r of n)await this.annotations.add(r,!0)}}#i(t,n,r){if(!this.#e)return;let i=this.#e.getProgress(n,r),a=this.#t.getProgress(n,t),o=this.#n.getProgress(n,t),s=this.getCFI(n,t);this.emit?.({type:"relocated",...i,tocItem:a,pageItem:o,cfi:s})}#a(t,n){let{book:r}=this;t.documentElement.lang||=this.language,t.documentElement.dir||=this.isCJK?"":this.textDirection,this.book&&this.book._hash&&t.documentElement.setAttribute("data-immersive-translate-hash",this.book._hash),this.renderer.setStyle(this.#r);let i=r.sections[n];for(let a of t.querySelectorAll("a[href]"))a.addEventListener("click",o=>{o.preventDefault();let s=a.getAttribute("href"),l=i?.resolveHref?.(s)??s;if(r?.isExternal?.(l))this.emit?.({type:"external-link",uri:l});else if(Fc.isRef(a)){let{index:c,anchor:u}=r.resolveHref(l);Promise.resolve(r.sections[c].createDocument()).then(p=>[u(p),p.contentType]).then(([p,d])=>[p?.innerHTML,d,Fc.isNote(p)]).then(([p,d,f])=>p?this.emit?.({type:"reference",href:f?null:l,content:p,contentType:d,element:a}):null).catch(p=>{});return}else this.goTo(l)});this.emit?.({type:"loaded",doc:t,index:n})}#o(t,n,r){let{value:i}=r,a=this.annotations.getAnchor(i),o=t?a(t):a,[s,l]=this.emit({type:"draw-annotation",annotation:r});n.add(i,o,s,l)}#s(t){let n=this.renderer.getOverlayer();if(n.index===t)return n}#l(t,n){let r=new Ti;for(let i of this.annotations.getByIndex(n))this.#o(t,r,i);return t.addEventListener("click",i=>{let[a,o]=r.hitTest(i);a&&this.emit?.({type:"show-annotation",value:a,range:o})},!1),r}async showAnnotation(t){let{value:n}=t,{index:r,anchor:i}=await this.goTo(n),{doc:a}=this.#s(r),o=i(a);this.emit?.({type:"show-annotation",value:n,range:o})}getCFI(t,n){if(!n)return"";let r=this.book.sections[t].cfi??po.fromIndex(t);return Sc(r,kc(n))}resolveCFI(t){if(this.book.resolveCFI)return this.book.resolveCFI(t);{let n=an(t);return{index:po.toIndex((n.parent??n).shift()),anchor:a=>xi(a,n)}}}resolveNavigation(t){try{return typeof t=="number"?{index:t}:Ar.test(t)?this.resolveCFI(t):this.book.resolveHref(t)}catch{}}async goTo(t){let n=this.resolveNavigation(t);try{return await this.renderer.goTo(n),n}catch{}}async goToFraction(t){let[n,r]=this.#e.getSection(t);return this.renderer.goTo({index:n,anchor:r})}async select(t){try{let n=await this.resolveNavigation(t);await this.renderer.goTo({...n,select:!0})}catch{}}goLeft(){return this.book.dir==="rtl"?this.renderer.next():this.renderer.prev()}goRight(){return this.book.dir==="rtl"?this.renderer.prev():this.renderer.next()}setAppearance({layout:t,css:n}){this.isFixedLayout||(Object.assign(this.renderer.layout,t),this.#r=n,this.renderer.setStyle(n),this.renderer.render())}async*#d(t,n,r){let i=await this.book.sections[r].createDocument();for(let{range:a,excerpt:o}of t(i,n))yield{cfi:this.getCFI(r,a),excerpt:o}}async*#c(t,n){let{sections:r}=this.book;for(let[i,{createDocument:a}]of r.entries()){if(!a)continue;let o=await a(),s=Array.from(t(o,n),({range:c,excerpt:u})=>({cfi:this.getCFI(i,c),excerpt:u}));yield{progress:(i+1)/r.length},s.length&&(yield{index:i,subitems:s})}}async*search(t){let{query:n,index:r}=t,i=Ic(Wg,{defaultLocale:this.language,...t}),a=r!=null?this.#d(i,n,r):this.#c(i,n);for await(let o of a)yield"subitems"in o?{label:this.#t.getProgress(o.index)?.label??"",subitems:o.subitems}:o}};var qg=(e,t,n)=>{let r=document.createElement("ul");r.setAttribute("role","group"),r.setAttribute("aria-label",e);let i=new Map,a=o=>{n(o);let s=i.get(o);for(let l of r.children)l.setAttribute("aria-checked",l===s?"true":"false")};for(let[o,s]of t){let l=document.createElement("li");l.setAttribute("role","menuitemradio"),l.innerText=o,l.onclick=()=>a(s),i.set(s,l),r.append(l)}return{element:r,select:a}},Bc=e=>{let t={},n=document.createElement("ul");n.setAttribute("role","menu");let r=()=>n.classList.remove("show"),i=a=>(...o)=>(r(),a(...o));for(let{name:a,label:o,type:s,items:l,onclick:c}of e){let u=s==="radio"?qg(o,l,i(c)):null;a&&(t[a]=u),n.append(u.element)}return window.addEventListener("blur",()=>r()),window.addEventListener("click",a=>{n.parentNode.contains(a.target)||r()}),{element:n,groups:t}};function kr(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():ee}var zc=kr();function mn(){return zc.PROD==="1"}function Nn(){return zc.PROD_API==="1"}var IT=kr().PROD==="1",FT=kr().PROD!=="1";var Uc=({entries:e,loadBlob:t,getSize:n},r)=>{let i=new Map,a=new Map,o=async p=>{if(i.has(p))return i.get(p);let d=URL.createObjectURL(await t(p)),f=URL.createObjectURL(new Blob([`<img src="${d}">`],{type:"text/html"}));return a.set(p,[d,f]),i.set(p,f),f},s=p=>{a.get(p)?.forEach?.(d=>URL.revokeObjectURL(d)),a.delete(p),i.delete(p)},l=[".jpg",".jpeg",".png",".gif",".bmp",".webp",".svg"],c=e.map(p=>p.filename).filter(p=>l.some(d=>p.endsWith(d))).sort(),u={};return u.getCover=()=>t(c[0]),u.metadata={title:r.name},u.sections=c.map(p=>({id:p,load:()=>o(p),unload:()=>s(p),size:n(p)})),u.toc=c.map(p=>({label:p,href:p})),u.rendition={layout:"pre-paginated"},u.resolveHref=p=>({index:u.sections.findIndex(d=>d.id===p)}),u.splitTOCHref=p=>[p,null],u.getTOCFragment=p=>p.documentElement,u};var $c=e=>e?.trim()?.replace(/\s{2,}/g," "),kt=e=>$c(e?.textContent),Oi={XLINK:"http://www.w3.org/1999/xlink",EPUB:"http://www.idpf.org/2007/ops"},Di={XML:"application/xml",XHTML:"application/xhtml+xml"},It={strong:["strong","self"],emphasis:["em","self"],style:["span","self"],a:"anchor",strikethrough:["s","self"],sub:["sub","self"],sup:["sup","self"],code:["code","self"],image:"image"},Kg={tr:["tr",["align"]],th:["th",["colspan","rowspan","align","valign"]],td:["td",["colspan","rowspan","align","valign"]]},jc={epigraph:["blockquote"],subtitle:["h2",It],"text-author":["p",It],date:["p",It],stanza:"stanza"},Pi={title:["header",{p:["h1",It],"empty-line":["br"]}],epigraph:["blockquote","self"],image:"image",annotation:["aside"],section:["section","self"],p:["p",It],poem:["blockquote",jc],subtitle:["h2",It],cite:["blockquote","self"],"empty-line":["br"],table:["table",Kg],"text-author":["p",It]};jc.epigraph.push(Pi);var Gg={image:"image",title:["section",{p:["h1",It],"empty-line":["br"]}],epigraph:["section",Pi],section:["section",Pi]},Hc=e=>{let t=e.getAttributeNS(Oi.XLINK,"href"),[,n]=t.split("#"),r=e.getRootNode().getElementById(n);return r?`data:${r.getAttribute("content-type")};base64,${r.textContent}`:t},go=class{constructor(t){this.fb2=t,this.doc=document.implementation.createDocument(Oi.XHTML,"html")}image(t){let n=this.doc.createElement("img");return n.alt=t.getAttribute("alt"),n.title=t.getAttribute("title"),n.setAttribute("src",Hc(t)),n}anchor(t){let n=this.convert(t,{a:["a",It]});return n.setAttribute("href",t.getAttributeNS(Oi.XLINK,"href")),t.getAttribute("type")==="note"&&n.setAttributeNS(Oi.EPUB,"epub:type","noteref"),n}stanza(t){let n=this.convert(t,{stanza:["p",{title:["header",{p:["strong",It],"empty-line":["br"]}],subtitle:["p",It]}]});for(let r of t.children)r.nodeName==="v"&&(n.append(this.doc.createTextNode(r.textContent)),n.append(this.doc.createElement("br")));return n}convert(t,n){if(t.nodeType===3)return this.doc.createTextNode(t.textContent);if(t.nodeType===4)return this.doc.createCDATASection(t.textContent);if(t.nodeType===8)return this.doc.createComment(t.textContent);let r=n?.[t.nodeName];if(!r)return null;if(typeof r=="string")return this[r](t);let[i,a]=r,o=this.doc.createElement(i);if(t.id&&(o.id=t.id),o.classList.add(t.nodeName),Array.isArray(a))for(let c of a)o.setAttribute(c,t.getAttribute(c));let s=a==="self"?n:Array.isArray(a)?null:a,l=t.firstChild;for(;l;){let c=this.convert(l,s);c&&o.append(c),l=l.nextSibling}return o}},Vg=async e=>{let t=await e.arrayBuffer(),n=new TextDecoder("utf-8").decode(t),r=new DOMParser,i=r.parseFromString(n,Di.XML),a=i.xmlEncoding||n.match(/^<\?xml\s+version\s*=\s*["']1.\d+"\s+encoding\s*=\s*["']([A-Za-z0-9._-]*)["']/)?.[1];if(a&&a.toLowerCase()!=="utf-8"){let o=new TextDecoder(a).decode(t);return r.parseFromString(o,Di.XML)}return i},Xg=URL.createObjectURL(new Blob([`
@namespace epub "http://www.idpf.org/2007/ops";
body > img, section > img {
    display: block;
    margin: auto;
}
.title {
    text-align: center;
}
body > section > .title, body.notesBodyType > .title {
    margin: 3em 0;
}
body.notesBodyType > section .title {
    text-align: left;
    margin: 1em 0;
}
p {
    text-indent: 1em;
    margin: 0;
}
:not(p) + p, p:first-child {
    text-indent: 0;
}
.poem p {
    text-indent: 0;
    margin: 1em 0;
}
.text-author, .date {
    text-align: end;
}
.text-author:before {
    content: "\u2014";
}
table {
    border-collapse: collapse;
}
td, th {
    padding: .25em;
}
a[epub|type~="noteref"] {
    font-size: .75em;
    vertical-align: super;
}
body:not(.notesBodyType) > .title, body:not(.notesBodyType) > .epigraph {
    margin: 3em 0;
}
`],{type:"text/css"})),Yg=e=>`<?xml version="1.0" encoding="utf-8"?>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head><link href="${Xg}" rel="stylesheet" type="text/css"/></head>
    <body>${e}</body>
</html>`,mo="data-foliate-id",bo=async e=>{let t={},n=await Vg(e),r=new go(n),i=d=>n.querySelector(d),a=d=>[...n.querySelectorAll(d)],o=d=>{let f=kt(d.querySelector("nickname"));if(f)return f;let b=kt(d.querySelector("first-name")),g=kt(d.querySelector("middle-name")),m=kt(d.querySelector("last-name")),h=[b,g,m].filter(w=>w).join(" "),y=m?[m,[b,g].filter(w=>w).join(" ")].join(", "):null;return{name:h,sortAs:y}},s=d=>d?.getAttribute("value")??kt(d),l=i("title-info annotation");t.metadata={title:kt(i("title-info book-title")),identifier:kt(i("document-info id")),language:kt(i("title-info lang")),author:a("title-info author").map(o),translator:a("title-info translator").map(o),producer:a("document-info author").map(o).concat(a("document-info program-used").map(kt)),publisher:kt(i("publish-info publisher")),published:s(i("title-info date")),modified:s(i("document-info date")),description:l?r.convert(l,{annotation:["div",Pi]}).innerHTML:null,subject:a("title-info genre").map(kt)},t.getCover=()=>fetch(Hc(i("coverpage image"))).then(d=>d.blob());let c=Array.from(n.querySelectorAll("body"),d=>{let f=r.convert(d,{body:["body",Gg]});return[Array.from(f.children,b=>{let g=[b,...b.querySelectorAll("[id]")].map(m=>m.id);return{el:b,ids:g}}),f]}),u=c[0][0].map(({el:d,ids:f})=>{let b=Array.from(d.querySelectorAll(":scope > section > .title"),(g,m)=>(g.setAttribute(mo,m),{title:kt(g),index:m}));return{ids:f,titles:b,el:d}}).concat(c.slice(1).map(([d,f])=>{let b=d.map(g=>g.ids).flat();return f.classList.add("notesBodyType"),{ids:b,el:f,linear:"no"}})).map(({ids:d,titles:f,el:b,linear:g})=>{let m=Yg(b.outerHTML),h=new Blob([m],{type:Di.XHTML}),y=URL.createObjectURL(h),w=$c(b.querySelector(".title, .subtitle, p")?.textContent??(b.classList.contains("title")?b.textContent:""));return{ids:d,title:w,titles:f,load:()=>y,createDocument:()=>new DOMParser().parseFromString(m,Di.XHTML),size:h.size-Array.from(b.querySelectorAll("[src]"),T=>T.getAttribute("src")?.length??0).reduce((T,S)=>T+S,0),linear:g}}),p=new Map;return t.sections=u.map((d,f)=>{let{ids:b,load:g,createDocument:m,size:h,linear:y}=d;for(let w of b)w&&p.set(w,f);return{id:f,load:g,createDocument:m,size:h,linear:y}}),t.toc=u.map(({title:d,titles:f},b)=>{let g=b.toString();return{label:d,href:g,subitems:f?.length?f.map(({title:m,index:h})=>({label:m,href:`${g}#${h}`})):null}}).filter(d=>d),t.resolveHref=d=>{let[f,b]=d.split("#");return f?{index:Number(f),anchor:g=>g.querySelector(`[${mo}="${b}"]`)}:{index:p.get(b),anchor:g=>g.getElementById(b)}},t.splitTOCHref=d=>d?.split("#")?.map(f=>Number(f))??[],t.getTOCFragment=(d,f)=>d.querySelector(`[${mo}="${f}"]`),t};var gn=e=>{if(!e)return"";let t=document.createElement("textarea");return t.innerHTML=e,t.value},Mn={XML:"application/xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml"},Zg={name:[0,32,"string"],type:[60,4,"string"],creator:[64,4,"string"],numRecords:[76,2,"uint"]},Qg={compression:[0,2,"uint"],numTextRecords:[8,2,"uint"],recordSize:[10,2,"uint"],encryption:[12,2,"uint"]},Jg={magic:[16,4,"string"],length:[20,4,"uint"],type:[24,4,"uint"],encoding:[28,4,"uint"],uid:[32,4,"uint"],version:[36,4,"uint"],titleOffset:[84,4,"uint"],titleLength:[88,4,"uint"],localeRegion:[94,1,"uint"],localeLanguage:[95,1,"uint"],resourceStart:[108,4,"uint"],huffcdic:[112,4,"uint"],numHuffcdic:[116,4,"uint"],exthFlag:[128,4,"uint"],trailingFlags:[240,4,"uint"],indx:[244,4,"uint"]},e0={resourceStart:[108,4,"uint"],fdst:[192,4,"uint"],numFdst:[196,4,"uint"],frag:[248,4,"uint"],skel:[252,4,"uint"],guide:[260,4,"uint"]},t0={magic:[0,4,"string"],length:[4,4,"uint"],count:[8,4,"uint"]},Wc={magic:[0,4,"string"],length:[4,4,"uint"],type:[8,4,"uint"],idxt:[20,4,"uint"],numRecords:[24,4,"uint"],encoding:[28,4,"uint"],language:[32,4,"uint"],total:[36,4,"uint"],ordt:[40,4,"uint"],ligt:[44,4,"uint"],numLigt:[48,4,"uint"],numCncx:[52,4,"uint"]},n0={magic:[0,4,"string"],length:[4,4,"uint"],numControlBytes:[8,4,"uint"]},r0={magic:[0,4,"string"],offset1:[8,4,"uint"],offset2:[12,4,"uint"]},i0={magic:[0,4,"string"],length:[4,4,"uint"],numEntries:[8,4,"uint"],codeLength:[12,4,"uint"]},a0={magic:[0,4,"string"],numEntries:[8,4,"uint"]},o0={flags:[8,4,"uint"],dataStart:[12,4,"uint"],keyLength:[16,4,"uint"],keyStart:[20,4,"uint"]},s0={1252:"windows-1252",65001:"utf-8"},qc={100:["creator","string",!0],101:["publisher"],103:["description"],104:["isbn"],105:["subject","string",!0],106:["date"],108:["contributor","string",!0],109:["rights"],110:["subjectCode","string",!0],112:["source","string",!0],113:["asin"],121:["boundary","uint"],122:["fixedLayout"],125:["numResources","uint"],126:["originalResolution"],127:["zeroGutter"],128:["zeroMargin"],129:["coverURI"],132:["regionMagnification"],201:["coverOffset","uint"],202:["thumbnailOffset","uint"],503:["title"],524:["language","string",!0],527:["pageProgressionDirection"]},l0={1:["ar","ar-SA","ar-IQ","ar-EG","ar-LY","ar-DZ","ar-MA","ar-TN","ar-OM","ar-YE","ar-SY","ar-JO","ar-LB","ar-KW","ar-AE","ar-BH","ar-QA"],2:["bg"],3:["ca"],4:["zh","zh-TW","zh-CN","zh-HK","zh-SG"],5:["cs"],6:["da"],7:["de","de-DE","de-CH","de-AT","de-LU","de-LI"],8:["el"],9:["en","en-US","en-GB","en-AU","en-CA","en-NZ","en-IE","en-ZA","en-JM",null,"en-BZ","en-TT","en-ZW","en-PH"],10:["es","es-ES","es-MX",null,"es-GT","es-CR","es-PA","es-DO","es-VE","es-CO","es-PE","es-AR","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"],11:["fi"],12:["fr","fr-FR","fr-BE","fr-CA","fr-CH","fr-LU","fr-MC"],13:["he"],14:["hu"],15:["is"],16:["it","it-IT","it-CH"],17:["ja"],18:["ko"],19:["nl","nl-NL","nl-BE"],20:["no","nb","nn"],21:["pl"],22:["pt","pt-BR","pt-PT"],23:["rm"],24:["ro"],25:["ru"],26:["hr",null,"sr"],27:["sk"],28:["sq"],29:["sv","sv-SE","sv-FI"],30:["th"],31:["tr"],32:["ur"],33:["id"],34:["uk"],35:["be"],36:["sl"],37:["et"],38:["lv"],39:["lt"],41:["fa"],42:["vi"],43:["hy"],44:["az"],45:["eu"],46:["hsb"],47:["mk"],48:["st"],49:["ts"],50:["tn"],52:["xh"],53:["zu"],54:["af"],55:["ka"],56:["fo"],57:["hi"],58:["mt"],59:["se"],62:["ms"],63:["kk"],65:["sw"],67:["uz",null,"uz-UZ"],68:["tt"],69:["bn"],70:["pa"],71:["gu"],72:["or"],73:["ta"],74:["te"],75:["kn"],76:["ml"],77:["as"],78:["mr"],79:["sa"],82:["cy","cy-GB"],83:["gl","gl-ES"],87:["kok"],97:["ne"],98:["fy"]},Mi=(e,t)=>{let n=new e.constructor(e.length+t.length);return n.set(e),n.set(t,e.length),n},Yc=(e,t,n)=>{let r=new e.constructor(e.length+t.length+n.length);return r.set(e),r.set(t,e.length),r.set(n,e.length+t.length),r},c0=new TextDecoder,Cr=e=>c0.decode(e),lt=e=>{if(!e)return;let t=e.byteLength,n=t===4?"getUint32":t===2?"getUint16":"getUint8";return new DataView(e)[n](0)},Ct=(e,t)=>Object.fromEntries(Array.from(Object.entries(e)).map(([n,[r,i,a]])=>[n,(a==="string"?Cr:lt)(t.slice(r,r+i))])),xo=e=>new TextDecoder(s0[e]),Ri=(e,t=0)=>{let n=0,r=0;for(let i of e.subarray(t,t+4))if(n=n<<7|(i&127)>>>0,r++,i&128)break;return{value:n,length:r}},u0=e=>{let t=0;for(let n of e.subarray(-4))n&128&&(t=0),t=t<<7|n&127;return t},Zc=e=>{let t=0;for(;e>0;e=e>>1)(e&1)===1&&t++;return t},d0=e=>{let t=0;for(;!(e&1);)e=e>>1,t++;return t},p0=e=>{let t=[];for(let n=0;n<e.length;n++){let r=e[n];if(r===0)t.push(0);else if(r<=8)for(let i of e.subarray(n+1,(n+=r)+1))t.push(i);else if(r<=127)t.push(r);else if(r<=191){let i=r<<8|e[n+++1],a=(i&16383)>>>3,o=(i&7)+3;for(let s=0;s<o;s++)t.push(t[t.length-a])}else t.push(32,r^128)}return Uint8Array.from(t)},f0=(e,t)=>{let n=t>>3,r=t+32,i=r>>3,a=0n;for(let o=n;o<=i;o++)a=a<<8n|BigInt(e[o]??0);return a>>8n-BigInt(r&7)&0xffffffffn},h0=async(e,t)=>{let n=await t(e.huffcdic),{magic:r,offset1:i,offset2:a}=Ct(r0,n);if(r!=="HUFF")throw new Error("Invalid HUFF record");let o=Array.from({length:256},(u,p)=>i+p*4).map(u=>lt(n.slice(u,u+4))).map(u=>[u&128,u&31,u>>>8]),s=[null].concat(Array.from({length:32},(u,p)=>a+p*8).map(u=>[lt(n.slice(u,u+4)),lt(n.slice(u+4,u+8))])),l=[];for(let u=1;u<e.numHuffcdic;u++){let p=await t(e.huffcdic+u),d=Ct(i0,p);if(d.magic!=="CDIC")throw new Error("Invalid CDIC record");let f=Math.min(1<<d.codeLength,d.numEntries-l.length),b=p.slice(d.length);for(let g=0;g<f;g++){let m=lt(b.slice(g*2,g*2+2)),h=lt(b.slice(m,m+2)),y=h&32767,w=h&32768,T=new Uint8Array(b.slice(m+2,m+2+y));l.push([T,w])}}let c=u=>{let p=new Uint8Array,d=u.byteLength*8;for(let f=0;f<d;){let b=Number(f0(u,f)),[g,m,h]=o[b>>>24];if(!g){for(;b>>>32-m<s[m][0];)m+=1;h=s[m][1]}if((f+=m)>d)break;let y=h-(b>>>32-m),[w,T]=l[y];T||(w=c(w),l[y]=[w,!0]),p=Mi(p,w)}return p};return c},Ni=async(e,t)=>{let n=await t(e),r=Ct(Wc,n);if(r.magic!=="INDX")throw new Error("Invalid INDX record");let i=xo(r.encoding),a=n.slice(r.length),o=Ct(n0,a);if(o.magic!=="TAGX")throw new Error("Invalid TAGX section");let s=(o.length-12)/4,l=Array.from({length:s},(d,f)=>new Uint8Array(a.slice(12+f*4,12+f*4+4))),c={},u=0;for(let d=0;d<r.numCncx;d++){let f=await t(e+r.numRecords+d+1),b=new Uint8Array(f);for(let g=0;g<b.byteLength;){let m=g,{value:h,length:y}=Ri(b,g);g+=y;let w=f.slice(g,g+h);g+=h,c[u+m]=i.decode(w)}u+=65536}let p=[];for(let d=0;d<r.numRecords;d++){let f=await t(e+1+d),b=new Uint8Array(f),g=Ct(Wc,f);if(g.magic!=="INDX")throw new Error("Invalid INDX record");for(let m=0;m<g.numRecords;m++){let h=g.idxt+4+2*m,y=lt(f.slice(h,h+2)),w=lt(f.slice(y,y+1)),T=Cr(f.slice(y+1,y+1+w)),S=[],_=y+1+w,v=0,x=_+o.numControlBytes;for(let[k,C,D,O]of l){if(O&1){v++;continue}let I=_+v,N=lt(f.slice(I,I+1))&D;if(N===D)if(Zc(D)>1){let{value:F,length:z}=Ri(b,x);S.push([k,null,F,C]),x+=z}else S.push([k,1,null,C]);else S.push([k,N>>d0(D),null,C])}let A={};for(let[k,C,D,O]of S){let I=[];if(C!=null)for(let N=0;N<C*O;N++){let{value:F,length:z}=Ri(b,x);I.push(F),x+=z}else{let N=0;for(;N<D;){let{value:F,length:z}=Ri(b,x);I.push(F),x+=z,N+=z}}A[k]=I}p.push({name:T,tagMap:A})}}return{table:p,cncx:c}},m0=async(e,t)=>{let{table:n,cncx:r}=await Ni(e,t),i=n.map(({tagMap:o},s)=>({index:s,offset:o[1]?.[0],size:o[2]?.[0],label:r[o[3]]??"",headingLevel:o[4]?.[0],pos:o[6],parent:o[21]?.[0],firstChild:o[22]?.[0],lastChild:o[23]?.[0]})),a=o=>(o.firstChild==null||(o.children=i.filter(s=>s.parent===o.index).map(a)),o);return i.filter(o=>o.headingLevel===0).map(a)},g0=(e,t)=>{let{magic:n,count:r}=Ct(t0,e);if(n!=="EXTH")throw new Error("Invalid EXTH header");let i=xo(t),a={},o=12;for(let s=0;s<r;s++){let l=lt(e.slice(o,o+4)),c=lt(e.slice(o+4,o+8));if(l in qc){let[u,p,d]=qc[l],f=e.slice(o+8,o+c),b=p==="uint"?lt(f):i.decode(f);d?(a[u]??=[],a[u].push(b)):a[u]=b}o+=c}return a},b0=async(e,t)=>{let{flags:n,dataStart:r,keyLength:i,keyStart:a}=Ct(o0,e),o=new Uint8Array(e.slice(r));if(n&2){let l=i===16?1024:1040,c=new Uint8Array(e.slice(a,a+i)),u=Math.min(l,o.length);for(var s=0;s<u;s++)o[s]=o[s]^c[s%c.length]}if(n&1)try{return await t(o)}catch{}return o},Qc=async e=>Cr(await e.slice(60,68).arrayBuffer())==="BOOKMOBI",yo=class{#e;#t;pdb;async open(t){this.#e=t;let n=Ct(Zg,await t.slice(0,78).arrayBuffer());this.pdb=n;let r=await t.slice(78,78+n.numRecords*8).arrayBuffer();this.#t=Array.from({length:n.numRecords},(i,a)=>lt(r.slice(a*8,a*8+4))).map((i,a,o)=>[i,o[a+1]])}loadRecord(t){let n=this.#t[t];if(!n)throw new RangeError("Record index out of bounds");return this.#e.slice(...n).arrayBuffer()}async loadMagic(t){let n=this.#t[t][0];return Cr(await this.#e.slice(n,n+4).arrayBuffer())}},Ii=class extends yo{#e=0;#t;#n;#r;#i;#a;constructor({unzlib:t}){super(),this.unzlib=t}async open(t){await super.open(t),this.headers=this.#o(await super.loadRecord(0)),this.#t=this.headers.mobi.resourceStart;let n=this.headers.mobi.version>=8;if(!n){let r=this.headers.exth?.boundary;if(r<4294967295)try{this.headers=this.#o(await super.loadRecord(r)),this.#e=r,n=!0}catch{}}return await this.#s(),n?new vo(this).init():new wo(this).init()}#o(t){let n=Ct(Qg,t),r=Ct(Jg,t);if(r.magic!=="MOBI")throw new Error("Missing MOBI header");let{titleOffset:i,titleLength:a,localeLanguage:o,localeRegion:s}=r;r.title=t.slice(i,i+a);let l=l0[o];r.language=l?.[s>>2]??l?.[0];let c=r.exthFlag&64?g0(t.slice(r.length+16),r.encoding):null,u=r.version>=8?Ct(e0,t):null;return{palmdoc:n,mobi:r,exth:c,kf8:u}}async#s(){let{palmdoc:t,mobi:n}=this.headers;this.#n=xo(n.encoding),this.#r=new TextEncoder;let{compression:r}=t;if(this.#i=r===1?s=>s:r===2?p0:r===17480?await h0(n,this.loadRecord.bind(this)):null,!this.#i)throw new Error("Unknown compression type");let{trailingFlags:i}=n,a=i&1,o=Zc(i>>>1);this.#a=s=>{for(let l=0;l<o;l++){let c=u0(s);s=s.subarray(0,-c)}if(a){let l=(s[s.length-1]&3)+1;s=s.subarray(0,-l)}return s}}decode(...t){return this.#n.decode(...t)}encode(...t){return this.#r.encode(...t)}loadRecord(t){return super.loadRecord(this.#e+t)}loadMagic(t){return super.loadMagic(this.#e+t)}loadText(t){return this.loadRecord(t+1).then(n=>new Uint8Array(n)).then(this.#a).then(this.#i)}async loadResource(t){let n=await super.loadRecord(this.#t+t),r=Cr(n.slice(0,4));return r==="FONT"?b0(n,this.unzlib):r==="VIDE"||r==="AUDI"?n.slice(12):n}getNCX(){let t=this.headers.mobi.indx;if(t<4294967295)return m0(t,this.loadRecord.bind(this))}getMetadata(){let{mobi:t,exth:n}=this.headers;return{identifier:t.uid.toString(),title:gn(n?.title||this.decode(t.title)),author:n?.creator?.map(gn),publisher:gn(n?.publisher),language:n?.language??t.language,published:n?.date,description:gn(n?.description),subject:n?.subject?.map(gn),rights:gn(n?.rights)}}async getCover(){let{exth:t}=this.headers,n=t?.coverOffset<4294967295?t?.coverOffset:t?.thumbnailOffset<4294967295?t?.thumbnailOffset:null;if(n!=null){let r=await this.loadResource(n);return new Blob([r])}}},Kc=/<\s*(?:mbp:)?pagebreak[^>]*>/gi,y0=/<[^<>]+filepos=['"]{0,1}(\d+)[^<>]*>/gi,wo=class{parser=new DOMParser;serializer=new XMLSerializer;#e=new Map;#t=new Map;#n=new Map;#r;#i=[];#a=Mn.HTML;constructor(t){this.mobi=t}async init(){let t=new Uint8Array;for(let i=0;i<this.mobi.headers.palmdoc.numTextRecords;i++)t=Mi(t,await this.mobi.loadText(i));let n=Array.from(new Uint8Array(t),i=>String.fromCharCode(i)).join("");this.#r=[0].concat(Array.from(n.matchAll(Kc),i=>i.index)).map((i,a,o)=>n.slice(i,o[a+1])).map(i=>Uint8Array.from(i,a=>a.charCodeAt(0))).map(i=>({book:this,raw:i})).reduce((i,a)=>{let o=i[i.length-1];return a.start=o?.end??0,a.end=a.start+a.raw.byteLength,i.concat(a)},[]),this.sections=this.#r.map((i,a)=>({id:a,load:()=>this.loadSection(i),createDocument:()=>this.createDocument(i),size:i.end-i.start}));let r=[];try{let i=await this.mobi.getNCX(),a=({label:o,offset:s,children:l})=>{let c=s.toString().padStart(10,"0"),u=`filepos:${c}`;return r.push(c),o=gn(o),{label:o,href:u,subitems:l?.map(a)}};if(this.toc=i?.map(a),this.landmarks=await this.getGuide(),!this.toc){let o=this.landmarks.find(({type:s})=>s?.includes("toc"))?.href;if(o){let{index:s}=this.resolveHref(o),l=await this.sections[s].createDocument();this.toc=Array.from(l.querySelectorAll("a[filepos]"),c=>({label:c.innerText?.trim(),href:`filepos:${c.getAttribute("filepos")}`}))}}}catch{}return this.#i=[...new Set(r.concat(Array.from(n.matchAll(y0),i=>i[1])))].map(i=>({filepos:i,number:Number(i)})).sort((i,a)=>i.number-a.number),this.metadata=this.mobi.getMetadata(),this.getCover=this.mobi.getCover.bind(this.mobi),this}async getGuide(){let t=await this.createDocument(this.#r[0]);return Array.from(t.getElementsByTagName("reference"),n=>({label:n.getAttribute("title"),type:n.getAttribute("type")?.split(/\s/),href:`filepos:${n.getAttribute("filepos")}`}))}async loadResource(t){if(this.#e.has(t))return this.#e.get(t);let n=await this.mobi.loadResource(t),r=URL.createObjectURL(new Blob([n]));return this.#e.set(t,r),r}async loadRecindex(t){return this.loadResource(Number(t)-1)}async replaceResources(t){for(let n of t.querySelectorAll("img[recindex]")){let r=n.getAttribute("recindex");try{n.src=await this.loadRecindex(r)}catch{}}for(let n of t.querySelectorAll("[mediarecindex]")){let r=n.getAttribute("mediarecindex"),i=n.getAttribute("recindex");try{n.src=await this.loadRecindex(r),i&&(n.poster=await this.loadRecindex(i))}catch{}}for(let n of t.querySelectorAll("[filepos]")){let r=n.getAttribute("filepos");n.href=`filepos:${r}`}}async loadText(t){if(this.#t.has(t))return this.#t.get(t);let{raw:n}=t,r=this.#i.filter(({number:o})=>o>=t.start&&o<t.end).map(o=>({...o,offset:o.number-t.start})),i=n;r.length&&(i=n.subarray(0,r[0].offset),r.forEach(({filepos:o,offset:s},l)=>{let c=r[l+1],u=this.mobi.encode(`<a id="filepos${o}"></a>`);i=Yc(i,u,n.subarray(s,c?.offset))}));let a=this.mobi.decode(i).replaceAll(Kc,"");return this.#t.set(t,a),a}async createDocument(t){let n=await this.loadText(t);return this.parser.parseFromString(n,this.#a)}async loadSection(t){if(this.#n.has(t))return this.#n.get(t);let n=await this.createDocument(t),r=n.createElement("style");n.head.append(r),r.append(n.createTextNode(`blockquote {
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 1em;
            margin-inline-end: 0;
        }`)),await this.replaceResources(n);let i=this.serializer.serializeToString(n),a=URL.createObjectURL(new Blob([i],{type:this.#a}));return this.#n.set(t,a),a}resolveHref(t){let n=t.match(/filepos:(.*)/)[1],r=Number(n);return{index:this.#r.findIndex(o=>o.end>r),anchor:o=>o.getElementById(`filepos${n}`)}}splitTOCHref(t){let n=t.match(/filepos:(.*)/)[1],r=Number(n);return[this.#r.findIndex(a=>a.end>r),`filepos${n}`]}getTOCFragment(t,n){return t.getElementById(n)}isExternal(t){return/^(?!blob|filepos)\w+:/i.test(t)}},Jc=/kindle:(flow|embed):(\w+)(?:\?mime=(\w+\/[-+.\w]+))?/,w0=/kindle:pos:fid:(\w+):off:(\w+)/,v0=e=>{let[t,n,r]=e.match(Jc).slice(1);return{resourceType:t,id:parseInt(n,32),type:r}},Gc=e=>{let[t,n]=e.match(w0).slice(1);return{fid:parseInt(t,32),off:parseInt(n,32)}},Vc=(e=0,t=0)=>`kindle:pos:fid:${e.toString(32).toUpperCase().padStart(4,"0")}:off:${t.toString(32).toUpperCase().padStart(10,"0")}`,Xc=e=>{let t=e.match(/\s(id|name|aid)\s*=\s*['"]([^'"]*)['"]/i);if(!t)return;let[,n,r]=t;return`[${n}="${CSS.escape(r)}"]`},x0=async(e,t,n)=>{let r=[];e.replace(t,(...a)=>(r.push(a),null));let i=[];for(let a of r)i.push(await n(...a));return e.replace(t,()=>i.shift())},vo=class{parser=new DOMParser;#e=new Map;#t=new Map;#n=new Map;#r={};#i;#a;#o=new Uint8Array;#s=new Uint8Array;#l=-1;#d=-1;#c=!0;#u=Mn.XHTML;constructor(t){this.mobi=t}async init(){let t=this.mobi.loadRecord.bind(this.mobi),{kf8:n}=this.mobi.headers;try{let s=await t(n.fdst),l=Ct(a0,s);if(l.magic!=="FDST")throw new Error("Missing FDST record");let c=Array.from({length:l.numEntries},(u,p)=>12+p*8).map(u=>[lt(s.slice(u,u+4)),lt(s.slice(u+4,u+8))]);this.#r.fdstTable=c,this.#a=c[c.length-1][1]}catch{}let r=(await Ni(n.skel,t)).table.map(({name:s,tagMap:l},c)=>({index:c,name:s,numFrag:l[1][0],offset:l[6][0],length:l[6][1]})),i=await Ni(n.frag,t),a=i.table.map(({name:s,tagMap:l})=>({insertOffset:parseInt(s),selector:i.cncx[l[2][0]],index:l[4][0],offset:l[6][0],length:l[6][1]}));this.#r.skelTable=r,this.#r.fragTable=a,this.#i=r.reduce((s,l)=>{let c=s[s.length-1],u=c?.fragEnd??0,p=u+l.numFrag,d=a.slice(u,p),f=l.length+d.map(g=>g.length).reduce((g,m)=>g+m),b=(c?.totalLength??0)+f;return s.concat({skel:l,frags:d,fragEnd:p,length:f,totalLength:b})},[]),this.#i.unshift({frags:[]}),this.sections=this.#i.map((s,l)=>s.frags.length?{id:l,load:()=>this.loadSection(s),createDocument:()=>this.createDocument(s),size:s.length}:{linear:"no"});try{let s=await this.mobi.getNCX(),l=({label:c,pos:u,children:p})=>{let[d,f]=u,b=Vc(d,f),g=this.#t.get(d);return g?g.push(f):this.#t.set(d,[f]),{label:gn(c),href:b,subitems:p?.map(l)}};this.toc=s?.map(l),this.landmarks=await this.getGuide()}catch{}let{exth:o}=this.mobi.headers;return this.dir=o.pageProgressionDirection,this.rendition={layout:o.fixedLayout==="true"?"pre-paginated":"reflowable",viewport:Object.fromEntries(o.originalResolution?.split("x")?.slice(0,2)?.map((s,l)=>[l?"height":"width",s])??[])},this.metadata=this.mobi.getMetadata(),this.getCover=this.mobi.getCover.bind(this.mobi),this}async getResourcesByMagic(t){let n={},r=this.mobi.headers.kf8.resourceStart,i=this.mobi.pdb.numRecords;for(let a=r;a<i;a++)try{let o=await this.mobi.loadMagic(a),s=t.find(l=>l===o);s&&(n[s]=a)}catch{}return n}async getGuide(){let t=this.mobi.headers.kf8.guide;if(t<4294967295){let n=this.mobi.loadRecord.bind(this.mobi),{table:r,cncx:i}=await Ni(t,n);return r.map(({name:a,tagMap:o})=>({label:i[o[1][0]]??"",type:a?.split(/\s/),href:Vc(o[6]?.[0]??o[3]?.[0])}))}}async loadResourceBlob(t){let{resourceType:n,id:r,type:i}=v0(t),a=n==="flow"?await this.loadFlow(r):await this.mobi.loadResource(r-1),o=[Mn.XHTML,Mn.HTML,Mn.CSS,Mn.SVG].includes(i)?await this.replaceResources(this.mobi.decode(a)):a;return new Blob([o],{type:i})}async loadResource(t){if(this.#e.has(t))return this.#e.get(t);let n=await this.loadResourceBlob(t),r=URL.createObjectURL(n);return this.#e.set(t,r),r}replaceResources(t){let n=new RegExp(Jc,"g");return x0(t,n,this.loadResource.bind(this))}async loadRaw(t,n){let r=n-this.#o.length,i=this.#a==null?1/0:this.#a-this.#s.length-t;if(r<0||r<i){for(;this.#o.length<n;){let o=++this.#l,s=await this.mobi.loadText(o);this.#o=Mi(this.#o,s)}return this.#o.slice(t,n)}for(;this.#a-this.#s.length>t;){let o=this.mobi.headers.palmdoc.numTextRecords-1-++this.#d,s=await this.mobi.loadText(o);this.#s=Mi(s,this.#s)}let a=this.#a-this.#s.length;return this.#s.slice(t-a,n-a)}loadFlow(t){if(t<4294967295)return this.loadRaw(...this.#r.fdstTable[t])}async loadText(t){let{skel:n,frags:r,length:i}=t,a=await this.loadRaw(n.offset,n.offset+i),o=a.slice(0,n.length);for(let s of r){let l=s.insertOffset-n.offset,c=n.length+s.offset,u=a.slice(c,c+s.length);o=Yc(o.slice(0,l),u,o.slice(l));let p=this.#t.get(s.index);if(p)for(let d of p){let f=this.mobi.decode(u).slice(d),b=Xc(f);this.#f(s.index,d,b)}}return this.mobi.decode(o)}async createDocument(t){let n=await this.loadText(t);return this.parser.parseFromString(n,this.#u)}async loadSection(t){if(this.#e.has(t))return this.#e.get(t);let n=await this.loadText(t);this.#c&&this.parser.parseFromString(n,this.#u).querySelector("parsererror")&&(this.#u=Mn.HTML),this.#c&&(this.#c=!1);let r=await this.replaceResources(n),i=URL.createObjectURL(new Blob([r],{type:this.#u}));return this.#e.set(t,i),i}getIndexByFID(t){return this.#i.findIndex(n=>n.frags.some(r=>r.index===t))}#f(t,n,r){let i=this.#n.get(t);if(i)i.set(n,r);else{let a=new Map;this.#n.set(t,a),a.set(n,r)}}async resolveHref(t){let{fid:n,off:r}=Gc(t),i=this.getIndexByFID(n);if(i<0)return;let a=this.#n.get(n)?.get(r);if(a)return{index:i,anchor:b=>b.querySelector(a)};let{skel:o,frags:s}=this.#i[i],l=s.find(b=>b.index===n),c=o.offset+o.length+l.offset,u=await this.loadRaw(c,c+l.length),p=this.mobi.decode(u).slice(r),d=Xc(p);return this.#f(n,r,d),{index:i,anchor:b=>b.querySelector(d)}}splitTOCHref(t){let n=Gc(t);return[this.getIndexByFID(n.fid),n]}getTOCFragment(t,{fid:n,off:r}){let i=this.#n.get(n)?.get(r);return t.querySelector(i)}isExternal(t){return/^(?!blob|kindle)\w+:/i.test(t)}};var Ze={CONTAINER:"urn:oasis:names:tc:opendocument:xmlns:container",XHTML:"http://www.w3.org/1999/xhtml",OPF:"http://www.idpf.org/2007/opf",EPUB:"http://www.idpf.org/2007/ops",DC:"http://purl.org/dc/elements/1.1/",DCTERMS:"http://purl.org/dc/terms/",ENC:"http://www.w3.org/2001/04/xmlenc#",NCX:"http://www.daisy.org/z3986/2005/ncx/",XLINK:"http://www.w3.org/1999/xlink",SMIL:"http://www.w3.org/ns/SMIL"},ct={XML:"application/xml",NCX:"application/x-dtbncx+xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml",JS:/\/(x-)?(javascript|ecmascript)/},Bi=e=>e.toLowerCase().replace(/[-:](.)/g,(t,n)=>n.toUpperCase()),_0=e=>e?e.trim().replace(/\s{2,}/g," "):"",Lr=(e,t,n)=>n?r=>r.getAttribute(e)?.split(/\s/)?.includes(t):typeof t=="function"?r=>t(r.getAttribute(e)):r=>r.getAttribute(e)===t,zi=(...e)=>t=>t?Object.fromEntries(e.map(n=>[Bi(n),t.getAttribute(n)])):null,yn=e=>_0(e?.textContent),Dr=(e,t)=>{let n=e.lookupNamespaceURI(null)===t||e.lookupPrefix(t),r=n?(i,a)=>o=>o.namespaceURI===t&&o.localName===a:(i,a)=>o=>o.localName===a;return{$:(i,a)=>[...i.children].find(r(i,a)),$$:(i,a)=>[...i.children].filter(r(i,a)),$$$:n?(i,a)=>[...i.getElementsByTagNameNS(t,a)]:(i,a)=>[...i.getElementsByTagName(t,a)]}},Zn=(e,t)=>{try{if(t.includes(":"))return new URL(e,t);let n="file:///";return decodeURI(new URL(e,n+t).href.replace(n,""))}catch{return e}},nu=e=>/^(?!blob)\w+:/i.test(e),T0=(e,t)=>{if(!e)return t;let n=e.replace(/\/$/,"").split("/"),r=t.replace(/\/$/,"").split("/"),i=(n.length>r.length?n:r).findIndex((a,o)=>n[o]!==r[o]);return i<0?"":Array(n.length-i).fill("..").concat(r.slice(i)).join("/")},S0=e=>e.slice(0,e.lastIndexOf("/")+1),Fi=async(e,t,n)=>{let r=[];e.replace(t,(...a)=>(r.push(a),null));let i=[];for(let a of r)i.push(await n(...a));return e.replace(t,()=>i.shift())},A0=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),bn={attrs:["dir","xml:lang"]},In={name:"alternate-script",many:!0,...bn,props:["file-as"]},eu={many:!0,...bn,props:[{name:"role",many:!0,attrs:["scheme"]},"file-as",In]},E0=[{name:"title",many:!0,...bn,props:["title-type","display-seq","file-as",In]},{name:"identifier",many:!0,props:[{name:"identifier-type",attrs:["scheme"]}]},{name:"language",many:!0},{name:"creator",...eu},{name:"contributor",...eu},{name:"publisher",...bn,props:["file-as",In]},{name:"description",...bn,props:[In]},{name:"rights",...bn,props:[In]},{name:"date"},{name:"dcterms:modified",type:"meta"},{name:"subject",many:!0,...bn,props:["term","authority",In]},{name:"belongs-to-collection",type:"meta",many:!0,...bn,props:["collection-type","group-position","dcterms:identifier","file-as",In,{name:"belongs-to-collection",recursive:!0}]}],k0=e=>{let{$:t,$$:n}=Dr(e,Ze.OPF),r=t(e.documentElement,"metadata"),i=Array.from(r.children),a=(p,d)=>{if(!d)return null;let{props:f=[],attrs:b=[]}=p,g=yn(d);if(!f.length&&!b.length)return g;let m=d.getAttribute("id"),h=m?i.filter(Lr("refines","#"+m)):[];return Object.fromEntries([["value",g]].concat(f.map(y=>{let{many:w,recursive:T}=y,S=typeof y=="string"?y:y.name,_=Lr("property",S),v=T?p:y;return[Bi(S),w?h.filter(_).map(x=>a(v,x)):a(v,h.find(_))]})).concat(b.map(y=>[Bi(y),d.getAttribute(y)])))},o=i.filter(Lr("refines",null)),s=Object.fromEntries(E0.map(p=>{let{type:d,name:f,many:b}=p,g=d==="meta"?m=>m.namespaceURI===Ze.OPF&&m.getAttribute("property")===f:m=>m.namespaceURI===Ze.DC&&m.localName===f;return[Bi(f),b?o.filter(g).map(m=>a(p,m)):a(p,o.find(g))]})),l=p=>Object.fromEntries(n(r,"meta").filter(Lr("property",d=>d?.startsWith(p))).map(d=>[d.getAttribute("property").replace(p,""),yn(d)])),c=l("rendition:"),u=l("media:");return{metadata:s,rendition:c,media:u}},C0=(e,t=n=>n)=>{let{$:n,$$:r,$$$:i}=Dr(e,Ze.XHTML),a=b=>b?decodeURI(t(b)):null,o=b=>g=>{let m=n(g,"a")??n(g,"span"),h=n(g,"ol"),y=a(m?.getAttribute("href")),T={label:yn(m)||m?.getAttribute("title"),href:y,subitems:s(h)};return b&&(T.type=m?.getAttributeNS(Ze.EPUB,"type")?.split(/\s/)),T},s=(b,g)=>b?r(b,"li").map(o(g)):null,l=(b,g)=>s(n(b,"ol"),g),c=i(e,"nav"),u=null,p=null,d=null,f=[];for(let b of c){let g=b.getAttributeNS(Ze.EPUB,"type")?.split(/\s/)??[];g.includes("toc")?u??=l(b):g.includes("page-list")?p??=l(b):g.includes("landmarks")?d??=l(b,!0):f.push({label:yn(b.firstElementChild),type:g,list:l(b)})}return{toc:u,pageList:p,landmarks:d,others:f}},L0=(e,t=n=>n)=>{let{$:n,$$:r}=Dr(e,Ze.NCX),i=l=>l?decodeURI(t(l)):null,a=l=>{let c=n(l,"navLabel"),u=n(l,"content"),p=yn(c),d=i(u.getAttribute("src"));if(l.localName==="navPoint"){let f=r(l,"navPoint");return{label:p,href:d,subitems:f.length?f.map(a):null}}return{label:p,href:d}},o=(l,c)=>r(l,c).map(a),s=(l,c)=>{let u=n(e.documentElement,l);return u?o(u,c):null};return{toc:s("navMap","navPoint"),pageList:s("pageList","pageTarget"),others:r(e.documentElement,"navList").map(l=>({label:yn(n(l,"navLabel")),list:o(l,"navTarget")}))}},_o=e=>{if(!e)return;let t=e.split(":").map(o=>parseFloat(o));if(t.length===3){let[o,s,l]=t;return o*60*60+s*60+l}if(t.length===2){let[o,s]=t;return o*60+s}let[n,r]=e.split(/(?=[^\d.])/),i=parseFloat(n),a=r==="h"?60*60:r==="min"?60:r==="ms"?.001:1;return i*a},O0=(e,t=n=>n)=>{let{$:n,$$$:r}=Dr(e,Ze.SMIL),i=a=>a?decodeURI(t(a)):null;return r(e,"par").map(a=>{let o=n(a,"text")?.getAttribute("src")?.split("#")?.[1],s=n(a,"audio");return s?{id:o,audio:{src:i(s.getAttribute("src")),clipBegin:_o(s.getAttribute("clipBegin")),clipEnd:_o(s.getAttribute("clipEnd"))}}:{id:o}})},D0=/([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})/,P0=e=>{for(let t of e.getElementsByTagNameNS(Ze.DC,"identifier")){let[n]=yn(t).split(":").slice(-1);if(D0.test(n))return n}return""},ru=e=>yn(e.getElementById(e.documentElement.getAttribute("unique-identifier"))??e.getElementsByTagNameNS(Ze.DC,"identifier")[0]),tu=async(e,t,n)=>{let r=new Uint8Array(await n.slice(0,t).arrayBuffer());t=Math.min(t,r.length);for(var i=0;i<t;i++)r[i]=r[i]^e[i%e.length];return new Blob([r,n.slice(t)],{type:n.type})},R0=async e=>{let t=new TextEncoder().encode(e),n=await globalThis.crypto.subtle.digest("SHA-1",t);return new Uint8Array(n)},N0=(e=R0)=>({"http://www.idpf.org/2008/embedding":{key:t=>e(ru(t).replaceAll(/[\u0020\u0009\u000d\u000a]/g,"")),decode:(t,n)=>tu(t,1040,n)},"http://ns.adobe.com/pdf/enc#RC":{key:t=>{let n=P0(t).replaceAll("-","");return Uint8Array.from({length:16},(r,i)=>parseInt(n.slice(i*2,i*2+2),16))},decode:(t,n)=>tu(t,1024,n)}}),To=class{#e=new Map;#t=new Map;#n;constructor(t){this.#n=t}async init(t,n){if(!t)return;let r=Array.from(t.getElementsByTagNameNS(Ze.ENC,"EncryptedData"),i=>({algorithm:i.getElementsByTagNameNS(Ze.ENC,"EncryptionMethod")[0]?.getAttribute("Algorithm"),uri:i.getElementsByTagNameNS(Ze.ENC,"CipherReference")[0]?.getAttribute("URI")}));for(let{algorithm:i,uri:a}of r){if(!this.#t.has(i)){let o=this.#n[i];if(!o)continue;let s=await o.key(n);this.#t.set(i,l=>o.decode(s,l))}this.#e.set(a,i)}}getDecoder(t){return this.#t.get(this.#e.get(t))??(n=>n)}},So=class{constructor({opf:t,resolveHref:n}){this.opf=t;let{$:r,$$:i,$$$:a}=Dr(t,Ze.OPF),o=r(t.documentElement,"manifest"),s=r(t.documentElement,"spine"),l=i(s,"itemref");this.manifest=i(o,"item").map(zi("href","id","media-type","properties","media-overlay")).map(u=>(u.href=n(u.href),u.properties=u.properties?.split(/\s/),u)),this.spine=l.map(zi("idref","id","linear","properties")).map(u=>(u.properties=u.properties?.split(/\s/),u)),this.pageProgressionDirection=s.getAttribute("page-progression-direction"),this.navPath=this.getItemByProperty("nav")?.href,this.ncxPath=(this.getItemByID(s.getAttribute("toc"))??this.manifest.find(u=>u.mediaType===ct.NCX))?.href;let c=r(t.documentElement,"guide");c&&(this.guide=i(c,"reference").map(zi("type","title","href")).map(({type:u,title:p,href:d})=>({label:p,type:u.split(/\s/),href:n(d)}))),this.cover=this.getItemByProperty("cover-image")??this.getItemByID(a(t,"meta").find(Lr("name","cover"))?.getAttribute("content"))??this.getItemByHref(this.guide?.find(u=>u.type.includes("cover"))?.href),this.cfis=Cc(l)}getItemByID(t){return this.manifest.find(n=>n.id===t)}getItemByHref(t){return this.manifest.find(n=>n.href===t)}getItemByProperty(t){return this.manifest.find(n=>n.properties?.includes(t))}resolveCFI(t){let n=an(t),r=(n.parent??n).shift(),i=uo(this.opf,r);i&&i.nodeName!=="idref"&&(r.at(-1).id=null,i=uo(this.opf,r));let a=i?.getAttribute("idref");return{index:this.spine.findIndex(l=>l.idref===a),anchor:l=>xi(l,n)}}},Ao=class{#e=new Map;#t=new Map;#n=new Map;allowScript=!1;constructor({loadText:t,loadBlob:n,resources:r}){this.loadText=t,this.loadBlob=n,this.manifest=r.manifest,this.assets=r.manifest}createURL(t,n,r,i){if(!n)return"";let a=URL.createObjectURL(new Blob([n],{type:r}));if(this.#e.set(t,a),this.#n.set(t,1),i){let o=this.#t.get(i);o?o.push(t):this.#t.set(i,[t])}return a}ref(t,n){let r=this.#t.get(n);return r?.includes(t)||(this.#n.set(t,this.#n.get(t)+1),r?r.push(t):this.#t.set(n,[t])),this.#e.get(t)}unref(t){if(!this.#n.has(t))return;let n=this.#n.get(t)-1;if(n<1){URL.revokeObjectURL(this.#e.get(t)),this.#e.delete(t),this.#n.delete(t);let r=this.#t.get(t);if(r)for(;r.length;)this.unref(r.pop());this.#t.delete(t)}else this.#n.set(t,n)}async loadItem(t,n=[]){if(!t)return null;let{href:r,mediaType:i}=t,a=ct.JS.test(t.mediaType);if(a&&!this.allowScript)return null;let o=n.at(-1);return this.#e.has(r)?this.ref(r,o):(a||[ct.XHTML,ct.HTML,ct.CSS,ct.SVG].includes(i))&&n.every(l=>l!==r)?this.loadReplaced(t,n):this.createURL(r,await this.loadBlob(r),i,o)}async loadHref(t,n,r=[]){if(nu(t))return t;let i=Zn(t,n),a=this.manifest.find(o=>o.href===i);return a?this.loadItem(a,r.concat(n)):t}async loadReplaced(t,n=[]){let{href:r,mediaType:i}=t,a=n.at(-1),o=await this.loadText(r);if(!o)return null;if([ct.XHTML,ct.HTML,ct.SVG].includes(i)){let l=new DOMParser().parseFromString(o,i);if(i===ct.XHTML&&l.querySelector("parsererror")&&(t.mediaType=ct.HTML,l=new DOMParser().parseFromString(o,t.mediaType)),[ct.XHTML,ct.SVG].includes(t.mediaType)){let p=l.firstChild;for(;p instanceof ProcessingInstruction;){if(p.data){let d=await Fi(p.data,/(?:^|\s*)(href\s*=\s*['"])([^'"]*)(['"])/i,(f,b,g,m)=>this.loadHref(g,r,n).then(h=>`${b}${h}${m}`));p.replaceWith(l.createProcessingInstruction(p.target,d))}p=p.nextSibling}}let c=async(p,d)=>p.setAttribute(d,await this.loadHref(p.getAttribute(d),r,n));for(let p of l.querySelectorAll("link[href]"))await c(p,"href");for(let p of l.querySelectorAll("[src]"))await c(p,"src");for(let p of l.querySelectorAll("[poster]"))await c(p,"poster");for(let p of l.querySelectorAll("object[data]"))await c(p,"data");for(let p of l.querySelectorAll("[*|href]:not([href]"))p.setAttributeNS(Ze.XLINK,"href",await this.loadHref(p.getAttributeNS(Ze.XLINK,"href"),r,n));for(let p of l.querySelectorAll("style"))p.textContent&&(p.textContent=await this.replaceCSS(p.textContent,r,n));for(let p of l.querySelectorAll("[style]"))p.setAttribute("style",await this.replaceCSS(p.getAttribute("style"),r,n));let u=new XMLSerializer().serializeToString(l);return this.createURL(r,u,t.mediaType,a)}let s=i===ct.CSS?await this.replaceCSS(o,r,n):await this.replaceString(o,r,n);return this.createURL(r,s,i,a)}async replaceCSS(t,n,r=[]){let i=await Fi(t,/url\(\s*["']?([^'"\n]*?)\s*["']?\s*\)/gi,(l,c)=>this.loadHref(c,n,r).then(u=>`url("${u}")`)),a=await Fi(i,/@import\s*["']([^"'\n]*?)["']/gi,(l,c)=>this.loadHref(c,n,r).then(u=>`@import "${u}"`)),o=window?.innerWidth??800,s=window?.innerHeight??600;return a.replace(/-epub-/gi,"").replace(/(\d*\.?\d+)vw/gi,(l,c)=>parseFloat(c)*o/100+"px").replace(/(\d*\.?\d+)vh/gi,(l,c)=>parseFloat(c)*s/100+"px").replace(/page-break-(after|before|inside)/gi,(l,c)=>`-webkit-column-break-${c}`)}replaceString(t,n,r=[]){let i=new Map,a=this.assets.map(s=>{if(s.href===n)return;let l=T0(S0(n),s.href),c=encodeURI(l),u="/"+s.href,p=encodeURI(u),d=new Set([l,c,u,p]);for(let f of d)i.set(f,s);return Array.from(d)}).flat().filter(s=>s);if(!a.length)return t;let o=new RegExp(a.map(A0).join("|"),"g");return Fi(t,o,async s=>this.loadItem(i.get(s.replace(/^\//,"")),r.concat(n)))}unloadItem(t){this.unref(t?.href)}},M0=(e,t)=>e.getElementById(t)??e.querySelector(`[name="${CSS.escape(t)}"]`),I0=e=>{for(let t of e){if(t==="page-spread-left"||t==="rendition:page-spread-left")return"left";if(t==="page-spread-right"||t==="rendition:page-spread-right")return"right";if(t==="rendition:page-spread-center")return"center"}},Or=class{parser=new DOMParser;#e;constructor({loadText:t,loadBlob:n,getSize:r,sha1:i}){this.loadText=t,this.loadBlob=n,this.getSize=r,this.#e=new To(N0(i))}#t(t){return t?this.parser.parseFromString(t,ct.XML):null}async#n(t){return this.#t(await this.loadText(t))}opfPath=null;async init(){let t=await this.#n("META-INF/container.xml");if(!t)throw new Error("Failed to load container file");let n=Array.from(t.getElementsByTagNameNS(Ze.CONTAINER,"rootfile"),zi("full-path","media-type")).filter(g=>g.mediaType==="application/oebps-package+xml");if(!n.length)throw new Error("No package document defined in container");let r=n[0].fullPath;this.opfPath=r;let i=await this.#n(r);if(!i)throw new Error("Failed to load package document");let a=await this.#n("META-INF/encryption.xml");await this.#e.init(a,i),this.resources=new So({opf:i,resolveHref:g=>Zn(g,r)});let o=new Ao({loadText:this.loadText,loadBlob:g=>Promise.resolve(this.loadBlob(g)).then(this.#e.getDecoder(g)),resources:this.resources});this.sections=this.resources.spine.map((g,m)=>{let{idref:h,linear:y,properties:w=[]}=g,T=this.resources.getItemByID(h);return T?{id:this.resources.getItemByID(h)?.href,load:()=>o.loadItem(T),unload:()=>o.unloadItem(T),createDocument:()=>this.loadDocument(T),size:this.getSize(T.href),cfi:this.resources.cfis[m],linear:y,pageSpread:I0(w),resolveHref:S=>Zn(S,T.href),loadMediaOverlay:()=>this.loadMediaOverlay(T)}:null}).filter(g=>g);let{navPath:s,ncxPath:l}=this.resources;if(s)try{let g=h=>Zn(h,s),m=C0(await this.#n(s),g);this.toc=m.toc,this.pageList=m.pageList,this.landmarks=m.landmarks}catch{}if(!this.toc&&l)try{let g=h=>Zn(h,l),m=L0(await this.#n(l),g);this.toc=m.toc,this.pageList=m.pageList}catch{}this.landmarks??=this.resources.guide;let{metadata:c,rendition:u,media:p}=k0(i);this.rendition=u,this.media=p,p.duration=_o(p.duration),this.dir=this.resources.pageProgressionDirection,this.rawMetadata=c;let d=c?.title?.[0];this.metadata={title:d?.value,sortAs:d?.fileAs,language:c?.language,identifier:ru(i),description:c?.description?.value,publisher:c?.publisher?.value,published:c?.date,modified:c?.dctermsModified,subject:c?.subject?.filter(({value:g,code:m})=>g||m)?.map(({value:g,code:m,scheme:h})=>({name:g,code:m,scheme:h})),rights:c?.rights?.value};let f={art:"artist",aut:"author",bkp:"producer",clr:"colorist",edt:"editor",ill:"illustrator",trl:"translator",pbl:"publisher"},b=g=>m=>{let h=[...new Set(m.role?.map(({value:w,scheme:T})=>(!T||T==="marc:relators"?f[w]:null)??g))],y={name:m.value,sortAs:m.fileAs};return[h?.length?h:[g],y]};return c?.creator?.map(b("author"))?.concat(c?.contributor?.map?.(b("contributor")))?.forEach(([g,m])=>g.forEach(h=>{this.metadata[h]?this.metadata[h].push(m):this.metadata[h]=[m]})),this}async loadDocument(t){let n=await this.loadText(t.href);return this.parser.parseFromString(n,t.mediaType)}async loadMediaOverlay(t){let n=t.mediaOverlay;if(!n)return null;let r=this.resources.getItemByID(n),i=await this.#n(r.href);return O0(i,o=>Zn(o,r.href))}resolveCFI(t){return this.resources.resolveCFI(t)}resolveHref(t){let[n,r]=t.split("#"),i=this.resources.getItemByHref(decodeURI(n));return i?{index:this.resources.spine.findIndex(({idref:s})=>s===i.id),anchor:r?s=>M0(s,r):()=>0}:null}splitTOCHref(t){return t?.split("#")??[]}getTOCFragment(t,n){return t.getElementById(n)??t.querySelector(`[name="${CSS.escape(n)}"]`)}isExternal(t){return nu(t)}async getCover(){let t=this.resources?.cover;return t?.href?new Blob([await this.loadBlob(t.href)],{type:t.mediaType}):null}async getCalibreBookmarks(){let t=await this.loadText("META-INF/calibre_bookmarks.txt"),n="encoding=json+base64:";if(t?.startsWith(n)){let r=atob(t.slice(n.length));return JSON.parse(r)}}};var fs={};yg(fs,{BlobReader:()=>is,BlobWriter:()=>as,Data64URIReader:()=>ly,Data64URIWriter:()=>cy,ERR_BAD_FORMAT:()=>Zi,ERR_CENTRAL_DIRECTORY_NOT_FOUND:()=>qd,ERR_DUPLICATED_NAME:()=>Qd,ERR_ENCRYPTED:()=>Vd,ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND:()=>Wd,ERR_EOCDR_NOT_FOUND:()=>jd,ERR_EOCDR_ZIP64_NOT_FOUND:()=>Hd,ERR_EXTRAFIELD_ZIP64_NOT_FOUND:()=>Gd,ERR_HTTP_RANGE:()=>$r,ERR_INVALID_COMMENT:()=>Jd,ERR_INVALID_ENCRYPTION_STRENGTH:()=>np,ERR_INVALID_ENTRY_COMMENT:()=>ep,ERR_INVALID_ENTRY_NAME:()=>tp,ERR_INVALID_EXTRAFIELD_DATA:()=>ip,ERR_INVALID_EXTRAFIELD_TYPE:()=>rp,ERR_INVALID_PASSWORD:()=>Zo,ERR_INVALID_SIGNATURE:()=>Qo,ERR_INVALID_VERSION:()=>Xo,ERR_ITERATOR_COMPLETED_TOO_SOON:()=>xd,ERR_LOCAL_FILE_HEADER_NOT_FOUND:()=>Kd,ERR_SPLIT_ZIP_FILE:()=>Vo,ERR_UNSUPPORTED_COMPRESSION:()=>Go,ERR_UNSUPPORTED_ENCRYPTION:()=>Xd,ERR_UNSUPPORTED_FORMAT:()=>ca,HttpRangeReader:()=>hy,HttpReader:()=>Cd,Reader:()=>An,SplitDataReader:()=>ss,SplitDataWriter:()=>zr,SplitZipReader:()=>yy,SplitZipWriter:()=>wy,TextReader:()=>uy,TextWriter:()=>dy,Uint8ArrayReader:()=>my,Uint8ArrayWriter:()=>gy,Writer:()=>rs,ZipReader:()=>ky,ZipWriter:()=>Iy,configure:()=>oa,getMimeType:()=>mb,initReader:()=>ls,initStream:()=>on,initWriter:()=>cs,readUint8Array:()=>rt,terminateWorkers:()=>Jb});function ia(e){return aa(e.map(([t,n])=>new Array(t).fill(n,0,t)))}function aa(e){return e.reduce((t,n)=>t.concat(Array.isArray(n)?aa(n):n),[])}var iu=[0,1,2,3].concat(...ia([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function Le(){let e=this;function t(i){let a=e.dyn_tree,o=e.stat_desc.static_tree,s=e.stat_desc.extra_bits,l=e.stat_desc.extra_base,c=e.stat_desc.max_length,u,p,d,f,b,g,m=0;for(f=0;f<=15;f++)i.bl_count[f]=0;for(a[i.heap[i.heap_max]*2+1]=0,u=i.heap_max+1;u<573;u++)p=i.heap[u],f=a[a[p*2+1]*2+1]+1,f>c&&(f=c,m++),a[p*2+1]=f,!(p>e.max_code)&&(i.bl_count[f]++,b=0,p>=l&&(b=s[p-l]),g=a[p*2],i.opt_len+=g*(f+b),o&&(i.static_len+=g*(o[p*2+1]+b)));if(m!==0){do{for(f=c-1;i.bl_count[f]===0;)f--;i.bl_count[f]--,i.bl_count[f+1]+=2,i.bl_count[c]--,m-=2}while(m>0);for(f=c;f!==0;f--)for(p=i.bl_count[f];p!==0;)d=i.heap[--u],!(d>e.max_code)&&(a[d*2+1]!=f&&(i.opt_len+=(f-a[d*2+1])*a[d*2],a[d*2+1]=f),p--)}}function n(i,a){let o=0;do o|=i&1,i>>>=1,o<<=1;while(--a>0);return o>>>1}function r(i,a,o){let s=[],l=0,c,u,p;for(c=1;c<=15;c++)s[c]=l=l+o[c-1]<<1;for(u=0;u<=a;u++)p=i[u*2+1],p!==0&&(i[u*2]=n(s[p]++,p))}e.build_tree=function(i){let a=e.dyn_tree,o=e.stat_desc.static_tree,s=e.stat_desc.elems,l,c,u=-1,p;for(i.heap_len=0,i.heap_max=573,l=0;l<s;l++)a[l*2]!==0?(i.heap[++i.heap_len]=u=l,i.depth[l]=0):a[l*2+1]=0;for(;i.heap_len<2;)p=i.heap[++i.heap_len]=u<2?++u:0,a[p*2]=1,i.depth[p]=0,i.opt_len--,o&&(i.static_len-=o[p*2+1]);for(e.max_code=u,l=Math.floor(i.heap_len/2);l>=1;l--)i.pqdownheap(a,l);p=s;do l=i.heap[1],i.heap[1]=i.heap[i.heap_len--],i.pqdownheap(a,1),c=i.heap[1],i.heap[--i.heap_max]=l,i.heap[--i.heap_max]=c,a[p*2]=a[l*2]+a[c*2],i.depth[p]=Math.max(i.depth[l],i.depth[c])+1,a[l*2+1]=a[c*2+1]=p,i.heap[1]=p++,i.pqdownheap(a,1);while(i.heap_len>=2);i.heap[--i.heap_max]=i.heap[1],t(i),r(a,e.max_code,i.bl_count)}}Le._length_code=[0,1,2,3,4,5,6,7].concat(...ia([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]]));Le.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0];Le.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576];Le.d_code=function(e){return e<256?iu[e]:iu[256+(e>>>7)]};Le.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];Le.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];Le.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];Le.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function Qe(e,t,n,r,i){let a=this;a.static_tree=e,a.extra_bits=t,a.extra_base=n,a.elems=r,a.max_length=i}var F0=[12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227],B0=ia([[144,8],[112,9],[24,7],[8,8]]);Qe.static_ltree=aa(F0.map((e,t)=>[e,B0[t]]));var z0=[0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23],U0=ia([[30,5]]);Qe.static_dtree=aa(z0.map((e,t)=>[e,U0[t]]));Qe.static_l_desc=new Qe(Qe.static_ltree,Le.extra_lbits,257,286,15);Qe.static_d_desc=new Qe(Qe.static_dtree,Le.extra_dbits,0,30,15);Qe.static_bl_desc=new Qe(null,Le.extra_blbits,0,19,7);var $0=9,j0=8;function Gt(e,t,n,r,i){let a=this;a.good_length=e,a.max_lazy=t,a.nice_length=n,a.max_chain=r,a.func=i}var Ku=0,Vi=1,Bn=2,Ft=[new Gt(0,0,0,0,Ku),new Gt(4,4,8,4,Vi),new Gt(4,5,16,8,Vi),new Gt(4,6,32,32,Vi),new Gt(4,4,16,16,Bn),new Gt(8,16,32,32,Bn),new Gt(8,16,128,128,Bn),new Gt(8,32,128,256,Bn),new Gt(32,128,258,1024,Bn),new Gt(32,258,258,4096,Bn)],Ui=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],Bt=0,$i=1,Pr=2,ji=3,H0=32,Eo=42,Hi=113,Rr=666,ko=8,W0=0,Co=1,q0=2,Pe=3,Xi=258,wt=Xi+Pe+1;function au(e,t,n,r){let i=e[t*2],a=e[n*2];return i<a||i==a&&r[t]<=r[n]}function K0(){let e=this,t,n,r,i,a,o,s,l,c,u,p,d,f,b,g,m,h,y,w,T,S,_,v,x,A,k,C,D,O,I,N,F,z,H=new Le,ae=new Le,X=new Le;e.depth=[];let te,L,P,$,Y,K;e.bl_count=[],e.heap=[],N=[],F=[],z=[];function ue(){c=2*a,p[f-1]=0;for(let R=0;R<f-1;R++)p[R]=0;k=Ft[C].max_lazy,O=Ft[C].good_length,I=Ft[C].nice_length,A=Ft[C].max_chain,S=0,h=0,v=0,y=x=Pe-1,T=0,d=0}function pe(){let R;for(R=0;R<286;R++)N[R*2]=0;for(R=0;R<30;R++)F[R*2]=0;for(R=0;R<19;R++)z[R*2]=0;N[256*2]=1,e.opt_len=e.static_len=0,L=P=0}function fe(){H.dyn_tree=N,H.stat_desc=Qe.static_l_desc,ae.dyn_tree=F,ae.stat_desc=Qe.static_d_desc,X.dyn_tree=z,X.stat_desc=Qe.static_bl_desc,Y=0,K=0,$=8,pe()}e.pqdownheap=function(R,B){let M=e.heap,U=M[B],j=B<<1;for(;j<=e.heap_len&&(j<e.heap_len&&au(R,M[j+1],M[j],e.depth)&&j++,!au(R,U,M[j],e.depth));)M[B]=M[j],B=j,j<<=1;M[B]=U};function Q(R,B){let M=-1,U,j=R[0*2+1],Z=0,le=7,Ye=4;j===0&&(le=138,Ye=3),R[(B+1)*2+1]=65535;for(let mt=0;mt<=B;mt++)U=j,j=R[(mt+1)*2+1],!(++Z<le&&U==j)&&(Z<Ye?z[U*2]+=Z:U!==0?(U!=M&&z[U*2]++,z[16*2]++):Z<=10?z[17*2]++:z[18*2]++,Z=0,M=U,j===0?(le=138,Ye=3):U==j?(le=6,Ye=3):(le=7,Ye=4))}function ie(){let R;for(Q(N,H.max_code),Q(F,ae.max_code),X.build_tree(e),R=18;R>=3&&z[Le.bl_order[R]*2+1]===0;R--);return e.opt_len+=3*(R+1)+5+5+4,R}function oe(R){e.pending_buf[e.pending++]=R}function se(R){oe(R&255),oe(R>>>8&255)}function V(R){oe(R>>8&255),oe(R&255&255)}function re(R,B){let M,U=B;K>16-U?(M=R,Y|=M<<K&65535,se(Y),Y=M>>>16-K,K+=U-16):(Y|=R<<K&65535,K+=U)}function de(R,B){let M=R*2;re(B[M]&65535,B[M+1]&65535)}function he(R,B){let M,U=-1,j,Z=R[0*2+1],le=0,Ye=7,mt=4;for(Z===0&&(Ye=138,mt=3),M=0;M<=B;M++)if(j=Z,Z=R[(M+1)*2+1],!(++le<Ye&&j==Z)){if(le<mt)do de(j,z);while(--le!==0);else j!==0?(j!=U&&(de(j,z),le--),de(16,z),re(le-3,2)):le<=10?(de(17,z),re(le-3,3)):(de(18,z),re(le-11,7));le=0,U=j,Z===0?(Ye=138,mt=3):j==Z?(Ye=6,mt=3):(Ye=7,mt=4)}}function ne(R,B,M){let U;for(re(R-257,5),re(B-1,5),re(M-4,4),U=0;U<M;U++)re(z[Le.bl_order[U]*2+1],3);he(N,R-1),he(F,B-1)}function Ee(){K==16?(se(Y),Y=0,K=0):K>=8&&(oe(Y&255),Y>>>=8,K-=8)}function Ne(){re(Co<<1,3),de(256,Qe.static_ltree),Ee(),1+$+10-K<9&&(re(Co<<1,3),de(256,Qe.static_ltree),Ee()),$=7}function ve(R,B){let M,U,j;if(e.dist_buf[L]=R,e.lc_buf[L]=B&255,L++,R===0?N[B*2]++:(P++,R--,N[(Le._length_code[B]+256+1)*2]++,F[Le.d_code(R)*2]++),!(L&8191)&&C>2){for(M=L*8,U=S-h,j=0;j<30;j++)M+=F[j*2]*(5+Le.extra_dbits[j]);if(M>>>=3,P<Math.floor(L/2)&&M<Math.floor(U/2))return!0}return L==te-1}function De(R,B){let M,U,j=0,Z,le;if(L!==0)do M=e.dist_buf[j],U=e.lc_buf[j],j++,M===0?de(U,R):(Z=Le._length_code[U],de(Z+256+1,R),le=Le.extra_lbits[Z],le!==0&&(U-=Le.base_length[Z],re(U,le)),M--,Z=Le.d_code(M),de(Z,B),le=Le.extra_dbits[Z],le!==0&&(M-=Le.base_dist[Z],re(M,le)));while(j<L);de(256,R),$=R[256*2+1]}function We(){K>8?se(Y):K>0&&oe(Y&255),Y=0,K=0}function ft(R,B,M){We(),$=8,M&&(se(B),se(~B)),e.pending_buf.set(l.subarray(R,R+B),e.pending),e.pending+=B}function hn(R,B,M){re((W0<<1)+(M?1:0),3),ft(R,B,!0)}function Et(R,B,M){let U,j,Z=0;C>0?(H.build_tree(e),ae.build_tree(e),Z=ie(),U=e.opt_len+3+7>>>3,j=e.static_len+3+7>>>3,j<=U&&(U=j)):U=j=B+5,B+4<=U&&R!=-1?hn(R,B,M):j==U?(re((Co<<1)+(M?1:0),3),De(Qe.static_ltree,Qe.static_dtree)):(re((q0<<1)+(M?1:0),3),ne(H.max_code+1,ae.max_code+1,Z+1),De(N,F)),pe(),M&&We()}function nt(R){Et(h>=0?h:-1,S-h,R),h=S,t.flush_pending()}function qt(){let R,B,M,U;do{if(U=c-v-S,U===0&&S===0&&v===0)U=a;else if(U==-1)U--;else if(S>=a+a-wt){l.set(l.subarray(a,a+a),0),_-=a,S-=a,h-=a,R=f,M=R;do B=p[--M]&65535,p[M]=B>=a?B-a:0;while(--R!==0);R=a,M=R;do B=u[--M]&65535,u[M]=B>=a?B-a:0;while(--R!==0);U+=a}if(t.avail_in===0)return;R=t.read_buf(l,S+v,U),v+=R,v>=Pe&&(d=l[S]&255,d=(d<<m^l[S+1]&255)&g)}while(v<wt&&t.avail_in!==0)}function qe(R){let B=65535,M;for(B>r-5&&(B=r-5);;){if(v<=1){if(qt(),v===0&&R==0)return Bt;if(v===0)break}if(S+=v,v=0,M=h+B,(S===0||S>=M)&&(v=S-M,S=M,nt(!1),t.avail_out===0)||S-h>=a-wt&&(nt(!1),t.avail_out===0))return Bt}return nt(R==4),t.avail_out===0?R==4?Pr:Bt:R==4?ji:$i}function ht(R){let B=A,M=S,U,j,Z=x,le=S>a-wt?S-(a-wt):0,Ye=I,mt=s,Rn=S+Xi,_r=l[M+Z-1],Tr=l[M+Z];x>=O&&(B>>=2),Ye>v&&(Ye=v);do if(U=R,!(l[U+Z]!=Tr||l[U+Z-1]!=_r||l[U]!=l[M]||l[++U]!=l[M+1])){M+=2,U++;do;while(l[++M]==l[++U]&&l[++M]==l[++U]&&l[++M]==l[++U]&&l[++M]==l[++U]&&l[++M]==l[++U]&&l[++M]==l[++U]&&l[++M]==l[++U]&&l[++M]==l[++U]&&M<Rn);if(j=Xi-(Rn-M),M=Rn-Xi,j>Z){if(_=R,Z=j,j>=Ye)break;_r=l[M+Z-1],Tr=l[M+Z]}}while((R=u[R&mt]&65535)>le&&--B!==0);return Z<=v?Z:v}function Ke(R){let B=0,M;for(;;){if(v<wt){if(qt(),v<wt&&R==0)return Bt;if(v===0)break}if(v>=Pe&&(d=(d<<m^l[S+(Pe-1)]&255)&g,B=p[d]&65535,u[S&s]=p[d],p[d]=S),B!==0&&(S-B&65535)<=a-wt&&D!=2&&(y=ht(B)),y>=Pe)if(M=ve(S-_,y-Pe),v-=y,y<=k&&v>=Pe){y--;do S++,d=(d<<m^l[S+(Pe-1)]&255)&g,B=p[d]&65535,u[S&s]=p[d],p[d]=S;while(--y!==0);S++}else S+=y,y=0,d=l[S]&255,d=(d<<m^l[S+1]&255)&g;else M=ve(0,l[S]&255),v--,S++;if(M&&(nt(!1),t.avail_out===0))return Bt}return nt(R==4),t.avail_out===0?R==4?Pr:Bt:R==4?ji:$i}function ot(R){let B=0,M,U;for(;;){if(v<wt){if(qt(),v<wt&&R==0)return Bt;if(v===0)break}if(v>=Pe&&(d=(d<<m^l[S+(Pe-1)]&255)&g,B=p[d]&65535,u[S&s]=p[d],p[d]=S),x=y,w=_,y=Pe-1,B!==0&&x<k&&(S-B&65535)<=a-wt&&(D!=2&&(y=ht(B)),y<=5&&(D==1||y==Pe&&S-_>4096)&&(y=Pe-1)),x>=Pe&&y<=x){U=S+v-Pe,M=ve(S-1-w,x-Pe),v-=x-1,x-=2;do++S<=U&&(d=(d<<m^l[S+(Pe-1)]&255)&g,B=p[d]&65535,u[S&s]=p[d],p[d]=S);while(--x!==0);if(T=0,y=Pe-1,S++,M&&(nt(!1),t.avail_out===0))return Bt}else if(T!==0){if(M=ve(0,l[S-1]&255),M&&nt(!1),S++,v--,t.avail_out===0)return Bt}else T=1,S++,v--}return T!==0&&(M=ve(0,l[S-1]&255),T=0),nt(R==4),t.avail_out===0?R==4?Pr:Bt:R==4?ji:$i}function Mt(R){return R.total_in=R.total_out=0,R.msg=null,e.pending=0,e.pending_out=0,n=Hi,i=0,fe(),ue(),0}e.deflateInit=function(R,B,M,U,j,Z){return U||(U=ko),j||(j=j0),Z||(Z=0),R.msg=null,B==-1&&(B=6),j<1||j>$0||U!=ko||M<9||M>15||B<0||B>9||Z<0||Z>2?-2:(R.dstate=e,o=M,a=1<<o,s=a-1,b=j+7,f=1<<b,g=f-1,m=Math.floor((b+Pe-1)/Pe),l=new Uint8Array(a*2),u=[],p=[],te=1<<j+6,e.pending_buf=new Uint8Array(te*4),r=te*4,e.dist_buf=new Uint16Array(te),e.lc_buf=new Uint8Array(te),C=B,D=Z,Mt(R))},e.deflateEnd=function(){return n!=Eo&&n!=Hi&&n!=Rr?-2:(e.lc_buf=null,e.dist_buf=null,e.pending_buf=null,p=null,u=null,l=null,e.dstate=null,n==Hi?-3:0)},e.deflateParams=function(R,B,M){let U=0;return B==-1&&(B=6),B<0||B>9||M<0||M>2?-2:(Ft[C].func!=Ft[B].func&&R.total_in!==0&&(U=R.deflate(1)),C!=B&&(C=B,k=Ft[C].max_lazy,O=Ft[C].good_length,I=Ft[C].nice_length,A=Ft[C].max_chain),D=M,U)},e.deflateSetDictionary=function(R,B,M){let U=M,j,Z=0;if(!B||n!=Eo)return-2;if(U<Pe)return 0;for(U>a-wt&&(U=a-wt,Z=M-U),l.set(B.subarray(Z,Z+U),0),S=U,h=U,d=l[0]&255,d=(d<<m^l[1]&255)&g,j=0;j<=U-Pe;j++)d=(d<<m^l[j+(Pe-1)]&255)&g,u[j&s]=p[d],p[d]=j;return 0},e.deflate=function(R,B){let M,U,j,Z,le;if(B>4||B<0)return-2;if(!R.next_out||!R.next_in&&R.avail_in!==0||n==Rr&&B!=4)return R.msg=Ui[4],-2;if(R.avail_out===0)return R.msg=Ui[7],-5;if(t=R,Z=i,i=B,n==Eo&&(U=ko+(o-8<<4)<<8,j=(C-1&255)>>1,j>3&&(j=3),U|=j<<6,S!==0&&(U|=H0),U+=31-U%31,n=Hi,V(U)),e.pending!==0){if(t.flush_pending(),t.avail_out===0)return i=-1,0}else if(t.avail_in===0&&B<=Z&&B!=4)return t.msg=Ui[7],-5;if(n==Rr&&t.avail_in!==0)return R.msg=Ui[7],-5;if(t.avail_in!==0||v!==0||B!=0&&n!=Rr){switch(le=-1,Ft[C].func){case Ku:le=qe(B);break;case Vi:le=Ke(B);break;case Bn:le=ot(B);break;default:}if((le==Pr||le==ji)&&(n=Rr),le==Bt||le==Pr)return t.avail_out===0&&(i=-1),0;if(le==$i){if(B==1)Ne();else if(hn(0,0,!1),B==3)for(M=0;M<f;M++)p[M]=0;if(t.flush_pending(),t.avail_out===0)return i=-1,0}}return B!=4?0:1}}function Gu(){let e=this;e.next_in_index=0,e.next_out_index=0,e.avail_in=0,e.total_in=0,e.avail_out=0,e.total_out=0}Gu.prototype={deflateInit(e,t){let n=this;return n.dstate=new K0,t||(t=15),n.dstate.deflateInit(n,e,t)},deflate(e){let t=this;return t.dstate?t.dstate.deflate(t,e):-2},deflateEnd(){let e=this;if(!e.dstate)return-2;let t=e.dstate.deflateEnd();return e.dstate=null,t},deflateParams(e,t){let n=this;return n.dstate?n.dstate.deflateParams(n,e,t):-2},deflateSetDictionary(e,t){let n=this;return n.dstate?n.dstate.deflateSetDictionary(n,e,t):-2},read_buf(e,t,n){let r=this,i=r.avail_in;return i>n&&(i=n),i===0?0:(r.avail_in-=i,e.set(r.next_in.subarray(r.next_in_index,r.next_in_index+i),t),r.next_in_index+=i,r.total_in+=i,i)},flush_pending(){let e=this,t=e.dstate.pending;t>e.avail_out&&(t=e.avail_out),t!==0&&(e.next_out.set(e.dstate.pending_buf.subarray(e.dstate.pending_out,e.dstate.pending_out+t),e.next_out_index),e.next_out_index+=t,e.dstate.pending_out+=t,e.total_out+=t,e.avail_out-=t,e.dstate.pending-=t,e.dstate.pending===0&&(e.dstate.pending_out=0))}};function G0(e){let t=this,n=new Gu,r=V0(e&&e.chunkSize?e.chunkSize:64*1024),i=0,a=new Uint8Array(r),o=e?e.level:-1;typeof o>"u"&&(o=-1),n.deflateInit(o),n.next_out=a,t.append=function(s,l){let c,u,p=0,d=0,f=0,b=[];if(s.length){n.next_in_index=0,n.next_in=s,n.avail_in=s.length;do{if(n.next_out_index=0,n.avail_out=r,c=n.deflate(i),c!=0)throw new Error("deflating: "+n.msg);n.next_out_index&&(n.next_out_index==r?b.push(new Uint8Array(a)):b.push(a.slice(0,n.next_out_index))),f+=n.next_out_index,l&&n.next_in_index>0&&n.next_in_index!=p&&(l(n.next_in_index),p=n.next_in_index)}while(n.avail_in>0||n.avail_out===0);return b.length>1?(u=new Uint8Array(f),b.forEach(function(g){u.set(g,d),d+=g.length})):u=b[0]||new Uint8Array,u}},t.flush=function(){let s,l,c=0,u=0,p=[];do{if(n.next_out_index=0,n.avail_out=r,s=n.deflate(4),s!=1&&s!=0)throw new Error("deflating: "+n.msg);r-n.avail_out>0&&p.push(a.slice(0,n.next_out_index)),u+=n.next_out_index}while(n.avail_in>0||n.avail_out===0);return n.deflateEnd(),l=new Uint8Array(u),p.forEach(function(d){l.set(d,c),c+=d.length}),l}}function V0(e){return e+5*(Math.floor(e/16383)+1)}var vt=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],Vu=1440,X0=0,Y0=4,Z0=9,Q0=5,J0=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],eb=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],tb=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],nb=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],rb=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],ib=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],wn=15;function Bo(){let e=this,t,n,r,i,a,o;function s(c,u,p,d,f,b,g,m,h,y,w){let T,S,_,v,x,A,k,C,D,O,I,N,F,z,H;O=0,x=p;do r[c[u+O]]++,O++,x--;while(x!==0);if(r[0]==p)return g[0]=-1,m[0]=0,0;for(C=m[0],A=1;A<=wn&&r[A]===0;A++);for(k=A,C<A&&(C=A),x=wn;x!==0&&r[x]===0;x--);for(_=x,C>x&&(C=x),m[0]=C,z=1<<A;A<x;A++,z<<=1)if((z-=r[A])<0)return-3;if((z-=r[x])<0)return-3;for(r[x]+=z,o[1]=A=0,O=1,F=2;--x!==0;)o[F]=A+=r[O],F++,O++;x=0,O=0;do(A=c[u+O])!==0&&(w[o[A]++]=x),O++;while(++x<p);for(p=o[_],o[0]=x=0,O=0,v=-1,N=-C,a[0]=0,I=0,H=0;k<=_;k++)for(T=r[k];T--!==0;){for(;k>N+C;){if(v++,N+=C,H=_-N,H=H>C?C:H,(S=1<<(A=k-N))>T+1&&(S-=T+1,F=k,A<H))for(;++A<H&&!((S<<=1)<=r[++F]);)S-=r[F];if(H=1<<A,y[0]+H>Vu)return-3;a[v]=I=y[0],y[0]+=H,v!==0?(o[v]=x,i[0]=A,i[1]=C,A=x>>>N-C,i[2]=I-a[v-1]-A,h.set(i,(a[v-1]+A)*3)):g[0]=I}for(i[1]=k-N,O>=p?i[0]=192:w[O]<d?(i[0]=w[O]<256?0:96,i[2]=w[O++]):(i[0]=b[w[O]-d]+16+64,i[2]=f[w[O++]-d]),S=1<<k-N,A=x>>>N;A<H;A+=S)h.set(i,(I+A)*3);for(A=1<<k-1;x&A;A>>>=1)x^=A;for(x^=A,D=(1<<N)-1;(x&D)!=o[v];)v--,N-=C,D=(1<<N)-1}return z!==0&&_!=1?-5:0}function l(c){let u;for(t||(t=[],n=[],r=new Int32Array(wn+1),i=[],a=new Int32Array(wn),o=new Int32Array(wn+1)),n.length<c&&(n=[]),u=0;u<c;u++)n[u]=0;for(u=0;u<wn+1;u++)r[u]=0;for(u=0;u<3;u++)i[u]=0;a.set(r.subarray(0,wn),0),o.set(r.subarray(0,wn+1),0)}e.inflate_trees_bits=function(c,u,p,d,f){let b;return l(19),t[0]=0,b=s(c,0,19,19,null,null,p,u,d,t,n),b==-3?f.msg="oversubscribed dynamic bit lengths tree":(b==-5||u[0]===0)&&(f.msg="incomplete dynamic bit lengths tree",b=-3),b},e.inflate_trees_dynamic=function(c,u,p,d,f,b,g,m,h){let y;return l(288),t[0]=0,y=s(p,0,c,257,tb,nb,b,d,m,t,n),y!=0||d[0]===0?(y==-3?h.msg="oversubscribed literal/length tree":y!=-4&&(h.msg="incomplete literal/length tree",y=-3),y):(l(288),y=s(p,c,u,0,rb,ib,g,f,m,t,n),y!=0||f[0]===0&&c>257?(y==-3?h.msg="oversubscribed distance tree":y==-5?(h.msg="incomplete distance tree",y=-3):y!=-4&&(h.msg="empty distance tree with lengths",y=-3),y):0)}}Bo.inflate_trees_fixed=function(e,t,n,r){return e[0]=Z0,t[0]=Q0,n[0]=J0,r[0]=eb,0};var Wi=0,ou=1,su=2,lu=3,cu=4,uu=5,du=6,Lo=7,pu=8,qi=9;function ab(){let e=this,t,n=0,r,i=0,a=0,o=0,s=0,l=0,c=0,u=0,p,d=0,f,b=0;function g(m,h,y,w,T,S,_,v){let x,A,k,C,D,O,I,N,F,z,H,ae,X,te,L,P;I=v.next_in_index,N=v.avail_in,D=_.bitb,O=_.bitk,F=_.write,z=F<_.read?_.read-F-1:_.end-F,H=vt[m],ae=vt[h];do{for(;O<20;)N--,D|=(v.read_byte(I++)&255)<<O,O+=8;if(x=D&H,A=y,k=w,P=(k+x)*3,(C=A[P])===0){D>>=A[P+1],O-=A[P+1],_.win[F++]=A[P+2],z--;continue}do{if(D>>=A[P+1],O-=A[P+1],C&16){for(C&=15,X=A[P+2]+(D&vt[C]),D>>=C,O-=C;O<15;)N--,D|=(v.read_byte(I++)&255)<<O,O+=8;x=D&ae,A=T,k=S,P=(k+x)*3,C=A[P];do if(D>>=A[P+1],O-=A[P+1],C&16){for(C&=15;O<C;)N--,D|=(v.read_byte(I++)&255)<<O,O+=8;if(te=A[P+2]+(D&vt[C]),D>>=C,O-=C,z-=X,F>=te)L=F-te,F-L>0&&2>F-L?(_.win[F++]=_.win[L++],_.win[F++]=_.win[L++],X-=2):(_.win.set(_.win.subarray(L,L+2),F),F+=2,L+=2,X-=2);else{L=F-te;do L+=_.end;while(L<0);if(C=_.end-L,X>C){if(X-=C,F-L>0&&C>F-L)do _.win[F++]=_.win[L++];while(--C!==0);else _.win.set(_.win.subarray(L,L+C),F),F+=C,L+=C,C=0;L=0}}if(F-L>0&&X>F-L)do _.win[F++]=_.win[L++];while(--X!==0);else _.win.set(_.win.subarray(L,L+X),F),F+=X,L+=X,X=0;break}else if(!(C&64))x+=A[P+2],x+=D&vt[C],P=(k+x)*3,C=A[P];else return v.msg="invalid distance code",X=v.avail_in-N,X=O>>3<X?O>>3:X,N+=X,I-=X,O-=X<<3,_.bitb=D,_.bitk=O,v.avail_in=N,v.total_in+=I-v.next_in_index,v.next_in_index=I,_.write=F,-3;while(!0);break}if(C&64)return C&32?(X=v.avail_in-N,X=O>>3<X?O>>3:X,N+=X,I-=X,O-=X<<3,_.bitb=D,_.bitk=O,v.avail_in=N,v.total_in+=I-v.next_in_index,v.next_in_index=I,_.write=F,1):(v.msg="invalid literal/length code",X=v.avail_in-N,X=O>>3<X?O>>3:X,N+=X,I-=X,O-=X<<3,_.bitb=D,_.bitk=O,v.avail_in=N,v.total_in+=I-v.next_in_index,v.next_in_index=I,_.write=F,-3);if(x+=A[P+2],x+=D&vt[C],P=(k+x)*3,(C=A[P])===0){D>>=A[P+1],O-=A[P+1],_.win[F++]=A[P+2],z--;break}}while(!0)}while(z>=258&&N>=10);return X=v.avail_in-N,X=O>>3<X?O>>3:X,N+=X,I-=X,O-=X<<3,_.bitb=D,_.bitk=O,v.avail_in=N,v.total_in+=I-v.next_in_index,v.next_in_index=I,_.write=F,0}e.init=function(m,h,y,w,T,S){t=Wi,c=m,u=h,p=y,d=w,f=T,b=S,r=null},e.proc=function(m,h,y){let w,T,S,_=0,v=0,x=0,A,k,C,D;for(x=h.next_in_index,A=h.avail_in,_=m.bitb,v=m.bitk,k=m.write,C=k<m.read?m.read-k-1:m.end-k;;)switch(t){case Wi:if(C>=258&&A>=10&&(m.bitb=_,m.bitk=v,h.avail_in=A,h.total_in+=x-h.next_in_index,h.next_in_index=x,m.write=k,y=g(c,u,p,d,f,b,m,h),x=h.next_in_index,A=h.avail_in,_=m.bitb,v=m.bitk,k=m.write,C=k<m.read?m.read-k-1:m.end-k,y!=0)){t=y==1?Lo:qi;break}a=c,r=p,i=d,t=ou;case ou:for(w=a;v<w;){if(A!==0)y=0;else return m.bitb=_,m.bitk=v,h.avail_in=A,h.total_in+=x-h.next_in_index,h.next_in_index=x,m.write=k,m.inflate_flush(h,y);A--,_|=(h.read_byte(x++)&255)<<v,v+=8}if(T=(i+(_&vt[w]))*3,_>>>=r[T+1],v-=r[T+1],S=r[T],S===0){o=r[T+2],t=du;break}if(S&16){s=S&15,n=r[T+2],t=su;break}if(!(S&64)){a=S,i=T/3+r[T+2];break}if(S&32){t=Lo;break}return t=qi,h.msg="invalid literal/length code",y=-3,m.bitb=_,m.bitk=v,h.avail_in=A,h.total_in+=x-h.next_in_index,h.next_in_index=x,m.write=k,m.inflate_flush(h,y);case su:for(w=s;v<w;){if(A!==0)y=0;else return m.bitb=_,m.bitk=v,h.avail_in=A,h.total_in+=x-h.next_in_index,h.next_in_index=x,m.write=k,m.inflate_flush(h,y);A--,_|=(h.read_byte(x++)&255)<<v,v+=8}n+=_&vt[w],_>>=w,v-=w,a=u,r=f,i=b,t=lu;case lu:for(w=a;v<w;){if(A!==0)y=0;else return m.bitb=_,m.bitk=v,h.avail_in=A,h.total_in+=x-h.next_in_index,h.next_in_index=x,m.write=k,m.inflate_flush(h,y);A--,_|=(h.read_byte(x++)&255)<<v,v+=8}if(T=(i+(_&vt[w]))*3,_>>=r[T+1],v-=r[T+1],S=r[T],S&16){s=S&15,l=r[T+2],t=cu;break}if(!(S&64)){a=S,i=T/3+r[T+2];break}return t=qi,h.msg="invalid distance code",y=-3,m.bitb=_,m.bitk=v,h.avail_in=A,h.total_in+=x-h.next_in_index,h.next_in_index=x,m.write=k,m.inflate_flush(h,y);case cu:for(w=s;v<w;){if(A!==0)y=0;else return m.bitb=_,m.bitk=v,h.avail_in=A,h.total_in+=x-h.next_in_index,h.next_in_index=x,m.write=k,m.inflate_flush(h,y);A--,_|=(h.read_byte(x++)&255)<<v,v+=8}l+=_&vt[w],_>>=w,v-=w,t=uu;case uu:for(D=k-l;D<0;)D+=m.end;for(;n!==0;){if(C===0&&(k==m.end&&m.read!==0&&(k=0,C=k<m.read?m.read-k-1:m.end-k),C===0&&(m.write=k,y=m.inflate_flush(h,y),k=m.write,C=k<m.read?m.read-k-1:m.end-k,k==m.end&&m.read!==0&&(k=0,C=k<m.read?m.read-k-1:m.end-k),C===0)))return m.bitb=_,m.bitk=v,h.avail_in=A,h.total_in+=x-h.next_in_index,h.next_in_index=x,m.write=k,m.inflate_flush(h,y);m.win[k++]=m.win[D++],C--,D==m.end&&(D=0),n--}t=Wi;break;case du:if(C===0&&(k==m.end&&m.read!==0&&(k=0,C=k<m.read?m.read-k-1:m.end-k),C===0&&(m.write=k,y=m.inflate_flush(h,y),k=m.write,C=k<m.read?m.read-k-1:m.end-k,k==m.end&&m.read!==0&&(k=0,C=k<m.read?m.read-k-1:m.end-k),C===0)))return m.bitb=_,m.bitk=v,h.avail_in=A,h.total_in+=x-h.next_in_index,h.next_in_index=x,m.write=k,m.inflate_flush(h,y);y=0,m.win[k++]=o,C--,t=Wi;break;case Lo:if(v>7&&(v-=8,A++,x--),m.write=k,y=m.inflate_flush(h,y),k=m.write,C=k<m.read?m.read-k-1:m.end-k,m.read!=m.write)return m.bitb=_,m.bitk=v,h.avail_in=A,h.total_in+=x-h.next_in_index,h.next_in_index=x,m.write=k,m.inflate_flush(h,y);t=pu;case pu:return y=1,m.bitb=_,m.bitk=v,h.avail_in=A,h.total_in+=x-h.next_in_index,h.next_in_index=x,m.write=k,m.inflate_flush(h,y);case qi:return y=-3,m.bitb=_,m.bitk=v,h.avail_in=A,h.total_in+=x-h.next_in_index,h.next_in_index=x,m.write=k,m.inflate_flush(h,y);default:return y=-2,m.bitb=_,m.bitk=v,h.avail_in=A,h.total_in+=x-h.next_in_index,h.next_in_index=x,m.write=k,m.inflate_flush(h,y)}},e.free=function(){}}var fu=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Qn=0,Oo=1,hu=2,mu=3,gu=4,bu=5,Ki=6,Gi=7,yu=8,Fn=9;function ob(e,t){let n=this,r=Qn,i=0,a=0,o=0,s,l=[0],c=[0],u=new ab,p=0,d=new Int32Array(Vu*3),f=0,b=new Bo;n.bitk=0,n.bitb=0,n.win=new Uint8Array(t),n.end=t,n.read=0,n.write=0,n.reset=function(g,m){m&&(m[0]=f),r==Ki&&u.free(g),r=Qn,n.bitk=0,n.bitb=0,n.read=n.write=0},n.reset(e,null),n.inflate_flush=function(g,m){let h,y,w;return y=g.next_out_index,w=n.read,h=(w<=n.write?n.write:n.end)-w,h>g.avail_out&&(h=g.avail_out),h!==0&&m==-5&&(m=0),g.avail_out-=h,g.total_out+=h,g.next_out.set(n.win.subarray(w,w+h),y),y+=h,w+=h,w==n.end&&(w=0,n.write==n.end&&(n.write=0),h=n.write-w,h>g.avail_out&&(h=g.avail_out),h!==0&&m==-5&&(m=0),g.avail_out-=h,g.total_out+=h,g.next_out.set(n.win.subarray(w,w+h),y),y+=h,w+=h),g.next_out_index=y,n.read=w,m},n.proc=function(g,m){let h,y,w,T,S,_,v,x;for(T=g.next_in_index,S=g.avail_in,y=n.bitb,w=n.bitk,_=n.write,v=_<n.read?n.read-_-1:n.end-_;;){let A,k,C,D,O,I,N,F;switch(r){case Qn:for(;w<3;){if(S!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=T-g.next_in_index,g.next_in_index=T,n.write=_,n.inflate_flush(g,m);S--,y|=(g.read_byte(T++)&255)<<w,w+=8}switch(h=y&7,p=h&1,h>>>1){case 0:y>>>=3,w-=3,h=w&7,y>>>=h,w-=h,r=Oo;break;case 1:A=[],k=[],C=[[]],D=[[]],Bo.inflate_trees_fixed(A,k,C,D),u.init(A[0],k[0],C[0],0,D[0],0),y>>>=3,w-=3,r=Ki;break;case 2:y>>>=3,w-=3,r=mu;break;case 3:return y>>>=3,w-=3,r=Fn,g.msg="invalid block type",m=-3,n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=T-g.next_in_index,g.next_in_index=T,n.write=_,n.inflate_flush(g,m)}break;case Oo:for(;w<32;){if(S!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=T-g.next_in_index,g.next_in_index=T,n.write=_,n.inflate_flush(g,m);S--,y|=(g.read_byte(T++)&255)<<w,w+=8}if((~y>>>16&65535)!=(y&65535))return r=Fn,g.msg="invalid stored block lengths",m=-3,n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=T-g.next_in_index,g.next_in_index=T,n.write=_,n.inflate_flush(g,m);i=y&65535,y=w=0,r=i!==0?hu:p!==0?Gi:Qn;break;case hu:if(S===0||v===0&&(_==n.end&&n.read!==0&&(_=0,v=_<n.read?n.read-_-1:n.end-_),v===0&&(n.write=_,m=n.inflate_flush(g,m),_=n.write,v=_<n.read?n.read-_-1:n.end-_,_==n.end&&n.read!==0&&(_=0,v=_<n.read?n.read-_-1:n.end-_),v===0)))return n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=T-g.next_in_index,g.next_in_index=T,n.write=_,n.inflate_flush(g,m);if(m=0,h=i,h>S&&(h=S),h>v&&(h=v),n.win.set(g.read_buf(T,h),_),T+=h,S-=h,_+=h,v-=h,(i-=h)!==0)break;r=p!==0?Gi:Qn;break;case mu:for(;w<14;){if(S!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=T-g.next_in_index,g.next_in_index=T,n.write=_,n.inflate_flush(g,m);S--,y|=(g.read_byte(T++)&255)<<w,w+=8}if(a=h=y&16383,(h&31)>29||(h>>5&31)>29)return r=Fn,g.msg="too many length or distance symbols",m=-3,n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=T-g.next_in_index,g.next_in_index=T,n.write=_,n.inflate_flush(g,m);if(h=258+(h&31)+(h>>5&31),!s||s.length<h)s=[];else for(x=0;x<h;x++)s[x]=0;y>>>=14,w-=14,o=0,r=gu;case gu:for(;o<4+(a>>>10);){for(;w<3;){if(S!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=T-g.next_in_index,g.next_in_index=T,n.write=_,n.inflate_flush(g,m);S--,y|=(g.read_byte(T++)&255)<<w,w+=8}s[fu[o++]]=y&7,y>>>=3,w-=3}for(;o<19;)s[fu[o++]]=0;if(l[0]=7,h=b.inflate_trees_bits(s,l,c,d,g),h!=0)return m=h,m==-3&&(s=null,r=Fn),n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=T-g.next_in_index,g.next_in_index=T,n.write=_,n.inflate_flush(g,m);o=0,r=bu;case bu:for(;h=a,!(o>=258+(h&31)+(h>>5&31));){let z,H;for(h=l[0];w<h;){if(S!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=T-g.next_in_index,g.next_in_index=T,n.write=_,n.inflate_flush(g,m);S--,y|=(g.read_byte(T++)&255)<<w,w+=8}if(h=d[(c[0]+(y&vt[h]))*3+1],H=d[(c[0]+(y&vt[h]))*3+2],H<16)y>>>=h,w-=h,s[o++]=H;else{for(x=H==18?7:H-14,z=H==18?11:3;w<h+x;){if(S!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=T-g.next_in_index,g.next_in_index=T,n.write=_,n.inflate_flush(g,m);S--,y|=(g.read_byte(T++)&255)<<w,w+=8}if(y>>>=h,w-=h,z+=y&vt[x],y>>>=x,w-=x,x=o,h=a,x+z>258+(h&31)+(h>>5&31)||H==16&&x<1)return s=null,r=Fn,g.msg="invalid bit length repeat",m=-3,n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=T-g.next_in_index,g.next_in_index=T,n.write=_,n.inflate_flush(g,m);H=H==16?s[x-1]:0;do s[x++]=H;while(--z!==0);o=x}}if(c[0]=-1,O=[],I=[],N=[],F=[],O[0]=9,I[0]=6,h=a,h=b.inflate_trees_dynamic(257+(h&31),1+(h>>5&31),s,O,I,N,F,d,g),h!=0)return h==-3&&(s=null,r=Fn),m=h,n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=T-g.next_in_index,g.next_in_index=T,n.write=_,n.inflate_flush(g,m);u.init(O[0],I[0],d,N[0],d,F[0]),r=Ki;case Ki:if(n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=T-g.next_in_index,g.next_in_index=T,n.write=_,(m=u.proc(n,g,m))!=1)return n.inflate_flush(g,m);if(m=0,u.free(g),T=g.next_in_index,S=g.avail_in,y=n.bitb,w=n.bitk,_=n.write,v=_<n.read?n.read-_-1:n.end-_,p===0){r=Qn;break}r=Gi;case Gi:if(n.write=_,m=n.inflate_flush(g,m),_=n.write,v=_<n.read?n.read-_-1:n.end-_,n.read!=n.write)return n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=T-g.next_in_index,g.next_in_index=T,n.write=_,n.inflate_flush(g,m);r=yu;case yu:return m=1,n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=T-g.next_in_index,g.next_in_index=T,n.write=_,n.inflate_flush(g,m);case Fn:return m=-3,n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=T-g.next_in_index,g.next_in_index=T,n.write=_,n.inflate_flush(g,m);default:return m=-2,n.bitb=y,n.bitk=w,g.avail_in=S,g.total_in+=T-g.next_in_index,g.next_in_index=T,n.write=_,n.inflate_flush(g,m)}}},n.free=function(g){n.reset(g,null),n.win=null,d=null},n.set_dictionary=function(g,m,h){n.win.set(g.subarray(m,m+h),0),n.read=n.write=h},n.sync_point=function(){return r==Oo?1:0}}var sb=32,lb=8,cb=0,wu=1,vu=2,xu=3,_u=4,Tu=5,Do=6,Nr=7,Su=12,vn=13,ub=[0,0,255,255];function db(){let e=this;e.mode=0,e.method=0,e.was=[0],e.need=0,e.marker=0,e.wbits=0;function t(n){return!n||!n.istate?-2:(n.total_in=n.total_out=0,n.msg=null,n.istate.mode=Nr,n.istate.blocks.reset(n,null),0)}e.inflateEnd=function(n){return e.blocks&&e.blocks.free(n),e.blocks=null,0},e.inflateInit=function(n,r){return n.msg=null,e.blocks=null,r<8||r>15?(e.inflateEnd(n),-2):(e.wbits=r,n.istate.blocks=new ob(n,1<<r),t(n),0)},e.inflate=function(n,r){let i,a;if(!n||!n.istate||!n.next_in)return-2;let o=n.istate;for(r=r==Y0?-5:0,i=-5;;)switch(o.mode){case cb:if(n.avail_in===0)return i;if(i=r,n.avail_in--,n.total_in++,((o.method=n.read_byte(n.next_in_index++))&15)!=lb){o.mode=vn,n.msg="unknown compression method",o.marker=5;break}if((o.method>>4)+8>o.wbits){o.mode=vn,n.msg="invalid win size",o.marker=5;break}o.mode=wu;case wu:if(n.avail_in===0)return i;if(i=r,n.avail_in--,n.total_in++,a=n.read_byte(n.next_in_index++)&255,((o.method<<8)+a)%31!==0){o.mode=vn,n.msg="incorrect header check",o.marker=5;break}if(!(a&sb)){o.mode=Nr;break}o.mode=vu;case vu:if(n.avail_in===0)return i;i=r,n.avail_in--,n.total_in++,o.need=(n.read_byte(n.next_in_index++)&255)<<24&4278190080,o.mode=xu;case xu:if(n.avail_in===0)return i;i=r,n.avail_in--,n.total_in++,o.need+=(n.read_byte(n.next_in_index++)&255)<<16&16711680,o.mode=_u;case _u:if(n.avail_in===0)return i;i=r,n.avail_in--,n.total_in++,o.need+=(n.read_byte(n.next_in_index++)&255)<<8&65280,o.mode=Tu;case Tu:return n.avail_in===0?i:(i=r,n.avail_in--,n.total_in++,o.need+=n.read_byte(n.next_in_index++)&255,o.mode=Do,2);case Do:return o.mode=vn,n.msg="need dictionary",o.marker=0,-2;case Nr:if(i=o.blocks.proc(n,i),i==-3){o.mode=vn,o.marker=0;break}if(i==0&&(i=r),i!=1)return i;i=r,o.blocks.reset(n,o.was),o.mode=Su;case Su:return n.avail_in=0,1;case vn:return-3;default:return-2}},e.inflateSetDictionary=function(n,r,i){let a=0,o=i;if(!n||!n.istate||n.istate.mode!=Do)return-2;let s=n.istate;return o>=1<<s.wbits&&(o=(1<<s.wbits)-1,a=i-o),s.blocks.set_dictionary(r,a,o),s.mode=Nr,0},e.inflateSync=function(n){let r,i,a,o,s;if(!n||!n.istate)return-2;let l=n.istate;if(l.mode!=vn&&(l.mode=vn,l.marker=0),(r=n.avail_in)===0)return-5;for(i=n.next_in_index,a=l.marker;r!==0&&a<4;)n.read_byte(i)==ub[a]?a++:n.read_byte(i)!==0?a=0:a=4-a,i++,r--;return n.total_in+=i-n.next_in_index,n.next_in_index=i,n.avail_in=r,l.marker=a,a!=4?-3:(o=n.total_in,s=n.total_out,t(n),n.total_in=o,n.total_out=s,l.mode=Nr,0)},e.inflateSyncPoint=function(n){return!n||!n.istate||!n.istate.blocks?-2:n.istate.blocks.sync_point()}}function Xu(){}Xu.prototype={inflateInit(e){let t=this;return t.istate=new db,e||(e=15),t.istate.inflateInit(t,e)},inflate(e){let t=this;return t.istate?t.istate.inflate(t,e):-2},inflateEnd(){let e=this;if(!e.istate)return-2;let t=e.istate.inflateEnd(e);return e.istate=null,t},inflateSync(){let e=this;return e.istate?e.istate.inflateSync(e):-2},inflateSetDictionary(e,t){let n=this;return n.istate?n.istate.inflateSetDictionary(n,e,t):-2},read_byte(e){return this.next_in[e]},read_buf(e,t){return this.next_in.subarray(e,e+t)}};function pb(e){let t=this,n=new Xu,r=e&&e.chunkSize?Math.floor(e.chunkSize*2):128*1024,i=X0,a=new Uint8Array(r),o=!1;n.inflateInit(),n.next_out=a,t.append=function(s,l){let c=[],u,p,d=0,f=0,b=0;if(s.length!==0){n.next_in_index=0,n.next_in=s,n.avail_in=s.length;do{if(n.next_out_index=0,n.avail_out=r,n.avail_in===0&&!o&&(n.next_in_index=0,o=!0),u=n.inflate(i),o&&u===-5){if(n.avail_in!==0)throw new Error("inflating: bad input")}else if(u!==0&&u!==1)throw new Error("inflating: "+n.msg);if((o||u===1)&&n.avail_in===s.length)throw new Error("inflating: bad input");n.next_out_index&&(n.next_out_index===r?c.push(new Uint8Array(a)):c.push(a.slice(0,n.next_out_index))),b+=n.next_out_index,l&&n.next_in_index>0&&n.next_in_index!=d&&(l(n.next_in_index),d=n.next_in_index)}while(n.avail_in>0||n.avail_out===0);return c.length>1?(p=new Uint8Array(b),c.forEach(function(g){p.set(g,f),f+=g.length})):p=c[0]||new Uint8Array,p}},t.flush=function(){n.inflateEnd()}}var Yi="/",Au=new Date(2107,11,31),Eu=new Date(1980,0,1),Ue=void 0,Ji="undefined",Yu="function",ku=class{constructor(e){return class extends TransformStream{constructor(t,n){let r=new e(n);super({transform(i,a){a.enqueue(r.append(i))},flush(i){let a=r.flush();a&&i.enqueue(a)}})}}}},fb=64,Zu=2;try{typeof navigator!=Ji&&navigator.hardwareConcurrency&&(Zu=navigator.hardwareConcurrency)}catch{}var hb={chunkSize:512*1024,maxWorkers:Zu,terminateWorkerTimeout:5e3,useWebWorkers:!0,useCompressionStream:!0,workerScripts:Ue,CompressionStreamNative:typeof CompressionStream!=Ji&&CompressionStream,DecompressionStreamNative:typeof DecompressionStream!=Ji&&DecompressionStream},Sn=Object.assign({},hb);function Yo(){return Sn}function Qu(e){return Math.max(e.chunkSize,fb)}function oa(e){let{baseURL:t,chunkSize:n,maxWorkers:r,terminateWorkerTimeout:i,useCompressionStream:a,useWebWorkers:o,Deflate:s,Inflate:l,CompressionStream:c,DecompressionStream:u,workerScripts:p}=e;if(xn("baseURL",t),xn("chunkSize",n),xn("maxWorkers",r),xn("terminateWorkerTimeout",i),xn("useCompressionStream",a),xn("useWebWorkers",o),s&&(Sn.CompressionStream=new ku(s)),l&&(Sn.DecompressionStream=new ku(l)),xn("CompressionStream",c),xn("DecompressionStream",u),p!==Ue){let{deflate:d,inflate:f}=p;if((d||f)&&(Sn.workerScripts||(Sn.workerScripts={})),d){if(!Array.isArray(d))throw new Error("workerScripts.deflate must be an array");Sn.workerScripts.deflate=d}if(f){if(!Array.isArray(f))throw new Error("workerScripts.inflate must be an array");Sn.workerScripts.inflate=f}}}function xn(e,t){t!==Ue&&(Sn[e]=t)}function mb(){return"application/octet-stream"}var Ju=[];for(let e=0;e<256;e++){let t=e;for(let n=0;n<8;n++)t&1?t=t>>>1^3988292384:t=t>>>1;Ju[e]=t}var ea=class{constructor(e){this.crc=e||-1}append(e){let t=this.crc|0;for(let n=0,r=e.length|0;n<r;n++)t=t>>>8^Ju[(t^e[n])&255];this.crc=t}get(){return~this.crc}},ed=class extends TransformStream{constructor(){let e=new ea;super({transform(t){e.append(t)},flush(t){let n=new Uint8Array(4);new DataView(n.buffer).setUint32(0,e.get()),t.enqueue(n)}})}};function zo(e){if(typeof TextEncoder>"u"){e=unescape(encodeURIComponent(e));let t=new Uint8Array(e.length);for(let n=0;n<t.length;n++)t[n]=e.charCodeAt(n);return t}else return new TextEncoder().encode(e)}var ut={concat(e,t){if(e.length===0||t.length===0)return e.concat(t);let n=e[e.length-1],r=ut.getPartial(n);return r===32?e.concat(t):ut._shiftRight(t,r,n|0,e.slice(0,e.length-1))},bitLength(e){let t=e.length;if(t===0)return 0;let n=e[t-1];return(t-1)*32+ut.getPartial(n)},clamp(e,t){if(e.length*32<t)return e;e=e.slice(0,Math.ceil(t/32));let n=e.length;return t=t&31,n>0&&t&&(e[n-1]=ut.partial(t,e[n-1]&2147483648>>t-1,1)),e},partial(e,t,n){return e===32?t:(n?t|0:t<<32-e)+e*1099511627776},getPartial(e){return Math.round(e/1099511627776)||32},_shiftRight(e,t,n,r){for(r===void 0&&(r=[]);t>=32;t-=32)r.push(n),n=0;if(t===0)return r.concat(e);for(let o=0;o<e.length;o++)r.push(n|e[o]>>>t),n=e[o]<<32-t;let i=e.length?e[e.length-1]:0,a=ut.getPartial(i);return r.push(ut.partial(t+a&31,t+a>32?n:r.pop(),1)),r}},ta={bytes:{fromBits(e){let t=ut.bitLength(e)/8,n=new Uint8Array(t),r;for(let i=0;i<t;i++)i&3||(r=e[i/4]),n[i]=r>>>24,r<<=8;return n},toBits(e){let t=[],n,r=0;for(n=0;n<e.length;n++)r=r<<8|e[n],(n&3)===3&&(t.push(r),r=0);return n&3&&t.push(ut.partial(8*(n&3),r)),t}}},td={};td.sha1=class{constructor(e){let t=this;t.blockSize=512,t._init=[1732584193,4023233417,2562383102,271733878,3285377520],t._key=[1518500249,1859775393,2400959708,3395469782],e?(t._h=e._h.slice(0),t._buffer=e._buffer.slice(0),t._length=e._length):t.reset()}reset(){let e=this;return e._h=e._init.slice(0),e._buffer=[],e._length=0,e}update(e){let t=this;typeof e=="string"&&(e=ta.utf8String.toBits(e));let n=t._buffer=ut.concat(t._buffer,e),r=t._length,i=t._length=r+ut.bitLength(e);if(i>9007199254740991)throw new Error("Cannot hash more than 2^53 - 1 bits");let a=new Uint32Array(n),o=0;for(let s=t.blockSize+r-(t.blockSize+r&t.blockSize-1);s<=i;s+=t.blockSize)t._block(a.subarray(16*o,16*(o+1))),o+=1;return n.splice(0,16*o),t}finalize(){let e=this,t=e._buffer,n=e._h;t=ut.concat(t,[ut.partial(1,1)]);for(let r=t.length+2;r&15;r++)t.push(0);for(t.push(Math.floor(e._length/4294967296)),t.push(e._length|0);t.length;)e._block(t.splice(0,16));return e.reset(),n}_f(e,t,n,r){if(e<=19)return t&n|~t&r;if(e<=39)return t^n^r;if(e<=59)return t&n|t&r|n&r;if(e<=79)return t^n^r}_S(e,t){return t<<e|t>>>32-e}_block(e){let t=this,n=t._h,r=Array(80);for(let c=0;c<16;c++)r[c]=e[c];let i=n[0],a=n[1],o=n[2],s=n[3],l=n[4];for(let c=0;c<=79;c++){c>=16&&(r[c]=t._S(1,r[c-3]^r[c-8]^r[c-14]^r[c-16]));let u=t._S(5,i)+t._f(c,a,o,s)+l+r[c]+t._key[Math.floor(c/20)]|0;l=s,s=o,o=t._S(30,a),a=i,i=u}n[0]=n[0]+i|0,n[1]=n[1]+a|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[4]+l|0}};var nd={};nd.aes=class{constructor(e){let t=this;t._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],t._tables[0][0][0]||t._precompute();let n=t._tables[0][4],r=t._tables[1],i=e.length,a,o,s,l=1;if(i!==4&&i!==6&&i!==8)throw new Error("invalid aes key size");for(t._key=[o=e.slice(0),s=[]],a=i;a<4*i+28;a++){let c=o[a-1];(a%i===0||i===8&&a%i===4)&&(c=n[c>>>24]<<24^n[c>>16&255]<<16^n[c>>8&255]<<8^n[c&255],a%i===0&&(c=c<<8^c>>>24^l<<24,l=l<<1^(l>>7)*283)),o[a]=o[a-i]^c}for(let c=0;a;c++,a--){let u=o[c&3?a:a-4];a<=4||c<4?s[c]=u:s[c]=r[0][n[u>>>24]]^r[1][n[u>>16&255]]^r[2][n[u>>8&255]]^r[3][n[u&255]]}}encrypt(e){return this._crypt(e,0)}decrypt(e){return this._crypt(e,1)}_precompute(){let e=this._tables[0],t=this._tables[1],n=e[4],r=t[4],i=[],a=[],o,s,l,c;for(let u=0;u<256;u++)a[(i[u]=u<<1^(u>>7)*283)^u]=u;for(let u=o=0;!n[u];u^=s||1,o=a[o]||1){let p=o^o<<1^o<<2^o<<3^o<<4;p=p>>8^p&255^99,n[u]=p,r[p]=u,c=i[l=i[s=i[u]]];let d=c*16843009^l*65537^s*257^u*16843008,f=i[p]*257^p*16843008;for(let b=0;b<4;b++)e[b][u]=f=f<<24^f>>>8,t[b][p]=d=d<<24^d>>>8}for(let u=0;u<5;u++)e[u]=e[u].slice(0),t[u]=t[u].slice(0)}_crypt(e,t){if(e.length!==4)throw new Error("invalid aes block size");let n=this._key[t],r=n.length/4-2,i=[0,0,0,0],a=this._tables[t],o=a[0],s=a[1],l=a[2],c=a[3],u=a[4],p=e[0]^n[0],d=e[t?3:1]^n[1],f=e[2]^n[2],b=e[t?1:3]^n[3],g=4,m,h,y;for(let w=0;w<r;w++)m=o[p>>>24]^s[d>>16&255]^l[f>>8&255]^c[b&255]^n[g],h=o[d>>>24]^s[f>>16&255]^l[b>>8&255]^c[p&255]^n[g+1],y=o[f>>>24]^s[b>>16&255]^l[p>>8&255]^c[d&255]^n[g+2],b=o[b>>>24]^s[p>>16&255]^l[d>>8&255]^c[f&255]^n[g+3],g+=4,p=m,d=h,f=y;for(let w=0;w<4;w++)i[t?3&-w:w]=u[p>>>24]<<24^u[d>>16&255]<<16^u[f>>8&255]<<8^u[b&255]^n[g++],m=p,p=d,d=f,f=b,b=m;return i}};var gb={getRandomValues(e){let t=new Uint32Array(e.buffer),n=r=>{let i=987654321,a=4294967295;return function(){return i=36969*(i&65535)+(i>>16)&a,r=18e3*(r&65535)+(r>>16)&a,(((i<<16)+r&a)/4294967296+.5)*(Math.random()>.5?1:-1)}};for(let r=0,i;r<e.length;r+=4){let a=n((i||Math.random())*4294967296);i=a()*987654071,t[r/4]=a()*4294967296|0}return e}},rd={};rd.ctrGladman=class{constructor(e,t){this._prf=e,this._initIv=t,this._iv=t}reset(){this._iv=this._initIv}update(e){return this.calculate(this._prf,e,this._iv)}incWord(e){if((e>>24&255)===255){let t=e>>16&255,n=e>>8&255,r=e&255;t===255?(t=0,n===255?(n=0,r===255?r=0:++r):++n):++t,e=0,e+=t<<16,e+=n<<8,e+=r}else e+=1<<24;return e}incCounter(e){(e[0]=this.incWord(e[0]))===0&&(e[1]=this.incWord(e[1]))}calculate(e,t,n){let r;if(!(r=t.length))return[];let i=ut.bitLength(t);for(let a=0;a<r;a+=4){this.incCounter(n);let o=e.encrypt(n);t[a]^=o[0],t[a+1]^=o[1],t[a+2]^=o[2],t[a+3]^=o[3]}return ut.clamp(t,i)}};var zn={importKey(e){return new zn.hmacSha1(ta.bytes.toBits(e))},pbkdf2(e,t,n,r){if(n=n||1e4,r<0||n<0)throw new Error("invalid params to pbkdf2");let i=(r>>5)+1<<2,a,o,s,l,c,u=new ArrayBuffer(i),p=new DataView(u),d=0,f=ut;for(t=ta.bytes.toBits(t),c=1;d<(i||1);c++){for(a=o=e.encrypt(f.concat(t,[c])),s=1;s<n;s++)for(o=e.encrypt(o),l=0;l<o.length;l++)a[l]^=o[l];for(s=0;d<(i||1)&&s<a.length;s++)p.setInt32(d,a[s]),d+=4}return u.slice(0,r/8)}};zn.hmacSha1=class{constructor(e){let t=this,n=t._hash=td.sha1,r=[[],[]];t._baseHash=[new n,new n];let i=t._baseHash[0].blockSize/32;e.length>i&&(e=new n().update(e).finalize());for(let a=0;a<i;a++)r[0][a]=e[a]^909522486,r[1][a]=e[a]^1549556828;t._baseHash[0].update(r[0]),t._baseHash[1].update(r[1]),t._resultHash=new n(t._baseHash[0])}reset(){let e=this;e._resultHash=new e._hash(e._baseHash[0]),e._updated=!1}update(e){let t=this;t._updated=!0,t._resultHash.update(e)}digest(){let e=this,t=e._resultHash.finalize(),n=new e._hash(e._baseHash[1]).update(t).finalize();return e.reset(),n}encrypt(e){if(this._updated)throw new Error("encrypt on already updated hmac called!");return this.update(e),this.digest(e)}};var bb=typeof crypto<"u"&&typeof crypto.getRandomValues=="function",Zo="Invalid password",Qo="Invalid signature";function id(e){return bb?crypto.getRandomValues(e):gb.getRandomValues(e)}var Jn=16,yb="raw",ad={name:"PBKDF2"},wb={name:"HMAC"},vb="SHA-1",xb=Object.assign({hash:wb},ad),Uo=Object.assign({iterations:1e3,hash:{name:vb}},ad),_b=["deriveBits"],Ir=[8,12,16],Mr=[16,24,32],_n=10,Tb=[0,0,0,0],od="undefined",sd="function",sa=typeof crypto!=od,Ur=sa&&crypto.subtle,ld=sa&&typeof Ur!=od,Xt=ta.bytes,Sb=nd.aes,Ab=rd.ctrGladman,Eb=zn.hmacSha1,Cu=sa&&ld&&typeof Ur.importKey==sd,Lu=sa&&ld&&typeof Ur.deriveBits==sd,kb=class extends TransformStream{constructor({password:e,signed:t,encryptionStrength:n}){super({start(){Object.assign(this,{ready:new Promise(r=>this.resolveReady=r),password:e,signed:t,strength:n-1,pending:new Uint8Array})},async transform(r,i){let a=this,{password:o,strength:s,resolveReady:l,ready:c}=a;o?(await Lb(a,s,o,Lt(r,0,Ir[s]+2)),r=Lt(r,Ir[s]+2),l()):await c;let u=new Uint8Array(r.length-_n-(r.length-_n)%Jn);i.enqueue(cd(a,r,u,0,_n,!0))},async flush(r){let{signed:i,ctr:a,hmac:o,pending:s,ready:l}=this;await l;let c=Lt(s,0,s.length-_n),u=Lt(s,s.length-_n),p=new Uint8Array;if(c.length){let d=Br(Xt,c);o.update(d);let f=a.update(d);p=Fr(Xt,f)}if(i){let d=Lt(Fr(Xt,o.digest()),0,_n);for(let f=0;f<_n;f++)if(d[f]!=u[f])throw new Error(Qo)}r.enqueue(p)}})}},Cb=class extends TransformStream{constructor({password:e,encryptionStrength:t}){let n;super({start(){Object.assign(this,{ready:new Promise(r=>this.resolveReady=r),password:e,strength:t-1,pending:new Uint8Array})},async transform(r,i){let a=this,{password:o,strength:s,resolveReady:l,ready:c}=a,u=new Uint8Array;o?(u=await Ob(a,s,o),l()):await c;let p=new Uint8Array(u.length+r.length-r.length%Jn);p.set(u,0),i.enqueue(cd(a,r,p,u.length,0))},async flush(r){let{ctr:i,hmac:a,pending:o,ready:s}=this;await s;let l=new Uint8Array;if(o.length){let c=i.update(Br(Xt,o));a.update(c),l=Fr(Xt,c)}n.signature=Fr(Xt,a.digest()).slice(0,_n),r.enqueue(Jo(l,n.signature))}}),n=this}};function cd(e,t,n,r,i,a){let{ctr:o,hmac:s,pending:l}=e,c=t.length-i;l.length&&(t=Jo(l,t),n=Rb(n,c-c%Jn));let u;for(u=0;u<=c-Jn;u+=Jn){let p=Br(Xt,Lt(t,u,u+Jn));a&&s.update(p);let d=o.update(p);a||s.update(d),n.set(Fr(Xt,d),u+r)}return e.pending=Lt(t,u),n}async function Lb(e,t,n,r){let i=await ud(e,t,n,Lt(r,0,Ir[t])),a=Lt(r,Ir[t]);if(i[0]!=a[0]||i[1]!=a[1])throw new Error(Zo)}async function Ob(e,t,n){let r=id(new Uint8Array(Ir[t])),i=await ud(e,t,n,r);return Jo(r,i)}async function ud(e,t,n,r){e.password=null;let i=zo(n),a=await Db(yb,i,xb,!1,_b),o=await Pb(Object.assign({salt:r},Uo),a,8*(Mr[t]*2+2)),s=new Uint8Array(o),l=Br(Xt,Lt(s,0,Mr[t])),c=Br(Xt,Lt(s,Mr[t],Mr[t]*2)),u=Lt(s,Mr[t]*2);return Object.assign(e,{keys:{key:l,authentication:c,passwordVerification:u},ctr:new Ab(new Sb(l),Array.from(Tb)),hmac:new Eb(c)}),u}async function Db(e,t,n,r,i){if(Cu)try{return await Ur.importKey(e,t,n,r,i)}catch{return Cu=!1,zn.importKey(t)}else return zn.importKey(t)}async function Pb(e,t,n){if(Lu)try{return await Ur.deriveBits(e,t,n)}catch{return Lu=!1,zn.pbkdf2(t,e.salt,Uo.iterations,n)}else return zn.pbkdf2(t,e.salt,Uo.iterations,n)}function Jo(e,t){let n=e;return e.length+t.length&&(n=new Uint8Array(e.length+t.length),n.set(e,0),n.set(t,e.length)),n}function Rb(e,t){if(t&&t>e.length){let n=e;e=new Uint8Array(t),e.set(n,0)}return e}function Lt(e,t,n){return e.subarray(t,n)}function Fr(e,t){return e.fromBits(t)}function Br(e,t){return e.toBits(t)}var er=12,Nb=class extends TransformStream{constructor({password:e,passwordVerification:t}){super({start(){Object.assign(this,{password:e,passwordVerification:t}),dd(this,e)},transform(n,r){let i=this;if(i.password){let a=Ou(i,n.subarray(0,er));if(i.password=null,a[er-1]!=i.passwordVerification)throw new Error(Zo);n=n.subarray(er)}r.enqueue(Ou(i,n))}})}},Mb=class extends TransformStream{constructor({password:e,passwordVerification:t}){super({start(){Object.assign(this,{password:e,passwordVerification:t}),dd(this,e)},transform(n,r){let i=this,a,o;if(i.password){i.password=null;let s=id(new Uint8Array(er));s[er-1]=i.passwordVerification,a=new Uint8Array(n.length+s.length),a.set(Du(i,s),0),o=er}else a=new Uint8Array(n.length),o=0;a.set(Du(i,n),o),r.enqueue(a)}})}};function Ou(e,t){let n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=pd(e)^t[r],es(e,n[r]);return n}function Du(e,t){let n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=pd(e)^t[r],es(e,t[r]);return n}function dd(e,t){let n=[305419896,591751049,878082192];Object.assign(e,{keys:n,crcKey0:new ea(n[0]),crcKey2:new ea(n[2])});for(let r=0;r<t.length;r++)es(e,t.charCodeAt(r))}function es(e,t){let[n,r,i]=e.keys;e.crcKey0.append([t]),n=~e.crcKey0.get(),r=Pu(Math.imul(Pu(r+fd(n)),134775813)+1),e.crcKey2.append([r>>>24]),i=~e.crcKey2.get(),e.keys=[n,r,i]}function pd(e){let t=e.keys[2]|2;return fd(Math.imul(t,t^1)>>>8)}function fd(e){return e&255}function Pu(e){return e&4294967295}var Ru="deflate-raw",Ib=class extends TransformStream{constructor(e,{chunkSize:t,CompressionStream:n,CompressionStreamNative:r}){super({});let{compressed:i,encrypted:a,useCompressionStream:o,zipCrypto:s,signed:l,level:c}=e,u=this,p,d,f=hd(super.readable);(!a||s)&&l&&([f,p]=f.tee(),p=Yt(p,new ed)),i&&(f=gd(f,o,{level:c,chunkSize:t},r,n)),a&&(s?f=Yt(f,new Mb(e)):(d=new Cb(e),f=Yt(f,d))),md(u,f,async()=>{let b;a&&!s&&(b=d.signature),(!a||s)&&l&&(b=await p.getReader().read(),b=new DataView(b.value.buffer).getUint32(0)),u.signature=b})}},Fb=class extends TransformStream{constructor(e,{chunkSize:t,DecompressionStream:n,DecompressionStreamNative:r}){super({});let{zipCrypto:i,encrypted:a,signed:o,signature:s,compressed:l,useCompressionStream:c}=e,u,p,d=hd(super.readable);a&&(i?d=Yt(d,new Nb(e)):(p=new kb(e),d=Yt(d,p))),l&&(d=gd(d,c,{chunkSize:t},r,n)),(!a||i)&&o&&([d,u]=d.tee(),u=Yt(u,new ed)),md(this,d,async()=>{if((!a||i)&&o){let f=await u.getReader().read(),b=new DataView(f.value.buffer);if(s!=b.getUint32(0,!1))throw new Error(Qo)}})}};function hd(e){return Yt(e,new TransformStream({transform(t,n){t&&t.length&&n.enqueue(t)}}))}function md(e,t,n){t=Yt(t,new TransformStream({flush:n})),Object.defineProperty(e,"readable",{get(){return t}})}function gd(e,t,n,r,i){try{let a=t&&r?r:i;e=Yt(e,new a(Ru,n))}catch(a){if(t)e=Yt(e,new i(Ru,n));else throw a}return e}function Yt(e,t){return e.pipeThrough(t)}var Bb="message",zb="start",Ub="pull",Nu="data",$b="ack",jb="close",bd="deflate",yd="inflate",Hb=class extends TransformStream{constructor(e,t){super({});let n=this,{codecType:r}=e,i;r.startsWith(bd)?i=Ib:r.startsWith(yd)&&(i=Fb);let a=0,o=new i(e,t),s=super.readable,l=new TransformStream({transform(c,u){c&&c.length&&(a+=c.length,u.enqueue(c))},flush(){let{signature:c}=o;Object.assign(n,{signature:c,size:a})}});Object.defineProperty(n,"readable",{get(){return s.pipeThrough(o).pipeThrough(l)}})}},Wb=typeof Worker!=Ji,Po=class{constructor(e,{readable:t,writable:n},{options:r,config:i,streamOptions:a,useWebWorkers:o,transferStreams:s,scripts:l},c){let{signal:u}=a;return Object.assign(e,{busy:!0,readable:t.pipeThrough(new qb(t,a,i),{signal:u}),writable:n,options:Object.assign({},r),scripts:l,transferStreams:s,terminate(){let{worker:p,busy:d}=e;p&&!d&&(p.terminate(),e.interface=null)},onTaskFinished(){e.busy=!1,c(e)}}),(o&&Wb?Gb:Kb)(e,i)}},qb=class extends TransformStream{constructor(e,{onstart:t,onprogress:n,size:r,onend:i},{chunkSize:a}){let o=0;super({start(){t&&Ro(t,r)},async transform(s,l){o+=s.length,n&&await Ro(n,o,r),l.enqueue(s)},flush(){e.size=o,i&&Ro(i,o)}},{highWaterMark:1,size:()=>a})}};async function Ro(e,...t){try{await e(...t)}catch{}}function Kb(e,t){return{run:()=>Vb(e,t)}}function Gb(e,{baseURL:t,chunkSize:n}){return e.interface||Object.assign(e,{worker:Zb(e.scripts[0],t,e),interface:{run:()=>Xb(e,{chunkSize:n})}}),e.interface}async function Vb({options:e,readable:t,writable:n,onTaskFinished:r},i){let a=new Hb(e,i);try{await t.pipeThrough(a).pipeTo(n,{preventClose:!0,preventAbort:!0});let{signature:o,size:s}=a;return{signature:o,size:s}}finally{r()}}async function Xb(e,t){let n,r,i=new Promise((p,d)=>{n=p,r=d});Object.assign(e,{reader:null,writer:null,resolveResult:n,rejectResult:r,result:i});let{readable:a,options:o,scripts:s}=e,{writable:l,closed:c}=Yb(e.writable);$o({type:zb,scripts:s.slice(1),options:o,config:t,readable:a,writable:l},e)||Object.assign(e,{reader:a.getReader(),writer:l.getWriter()});let u=await i;try{await l.close()}catch{}return await c,u}function Yb(e){let t=e.getWriter(),n,r=new Promise(i=>n=i);return{writable:new WritableStream({async write(i){await t.ready,await t.write(i)},close(){t.releaseLock(),n()},abort(i){return t.abort(i)}}),closed:r}}var Mu=!0,Iu=!0;function Zb(e,t,n){let r={type:"module"},i,a;typeof e==Yu&&(e=e());try{i=new URL(e,t)}catch{i=e}if(Mu)try{a=new Worker(i)}catch{Mu=!1,a=new Worker(i,r)}else a=new Worker(i,r);return a.addEventListener(Bb,o=>Qb(o,n)),a}function $o(e,{worker:t,writer:n,onTaskFinished:r,transferStreams:i}){try{let{value:a,readable:o,writable:s}=e,l=[];if(a){let{buffer:c,length:u}=a;u!=c.byteLength&&(a=new Uint8Array(a)),e.value=a.buffer,l.push(e.value)}if(i&&Iu?(o&&l.push(o),s&&l.push(s)):e.readable=e.writable=null,l.length)try{return t.postMessage(e,l),!0}catch{Iu=!1,e.readable=e.writable=null,t.postMessage(e)}else t.postMessage(e)}catch(a){throw n&&n.releaseLock(),r(),a}}async function Qb({data:e},t){let{type:n,value:r,messageId:i,result:a,error:o}=e,{reader:s,writer:l,resolveResult:c,rejectResult:u,onTaskFinished:p}=t;try{if(o){let{message:f,stack:b,code:g,name:m}=o,h=new Error(f);Object.assign(h,{stack:b,code:g,name:m}),d(h)}else{if(n==Ub){let{value:f,done:b}=await s.read();$o({type:Nu,value:f,done:b,messageId:i},t)}n==Nu&&(await l.ready,await l.write(new Uint8Array(r)),$o({type:$b,messageId:i},t)),n==jb&&d(null,a)}}catch(f){d(f)}function d(f,b){f?u(f):c(b),l&&l.releaseLock(),p()}}var Tn=[],No=[],Fu=0;async function wd(e,t){let{options:n,config:r}=t,{transferStreams:i,useWebWorkers:a,useCompressionStream:o,codecType:s,compressed:l,signed:c,encrypted:u}=n,{workerScripts:p,maxWorkers:d,terminateWorkerTimeout:f}=r;t.transferStreams=i||i===Ue;let b=!l&&!c&&!u&&!t.transferStreams;t.useWebWorkers=!b&&(a||a===Ue&&r.useWebWorkers),t.scripts=t.useWebWorkers&&p?p[s]:[],n.useCompressionStream=o||o===Ue&&r.useCompressionStream;let g,m=Tn.find(y=>!y.busy);if(m)jo(m),g=new Po(m,e,t,h);else if(Tn.length<d){let y={indexWorker:Fu};Fu++,Tn.push(y),g=new Po(y,e,t,h)}else g=await new Promise(y=>No.push({resolve:y,stream:e,workerOptions:t}));return g.run();function h(y){if(No.length){let[{resolve:w,stream:T,workerOptions:S}]=No.splice(0,1);w(new Po(y,T,S,h))}else y.worker?(jo(y),Number.isFinite(f)&&f>=0&&(y.terminateTimeout=setTimeout(()=>{Tn=Tn.filter(w=>w!=y),y.terminate()},f))):Tn=Tn.filter(w=>w!=y)}}function jo(e){let{terminateTimeout:t}=e;t&&(clearTimeout(t),e.terminateTimeout=null)}function Jb(){Tn.forEach(e=>{jo(e),e.terminate()})}var vd="HTTP error ",$r="HTTP Range not supported",xd="Writer iterator completed too soon",ey="text/plain",ty="Content-Length",ny="Content-Range",ry="Accept-Ranges",iy="Range",ay="Content-Type",oy="HEAD",ts="GET",_d="bytes",sy=64*1024,ns="writable",la=class{constructor(){this.size=0}init(){this.initialized=!0}},An=class extends la{get readable(){let e=this,{chunkSize:t=sy}=e,n=new ReadableStream({start(){this.chunkOffset=0},async pull(r){let{offset:i=0,size:a,diskNumberStart:o}=n,{chunkOffset:s}=this;r.enqueue(await rt(e,i+s,Math.min(t,a-s),o)),s+t>a?r.close():this.chunkOffset+=t}});return n}},rs=class extends la{constructor(){super();let e=this,t=new WritableStream({write(n){return e.writeUint8Array(n)}});Object.defineProperty(e,ns,{get(){return t}})}writeUint8Array(){}},ly=class extends An{constructor(e){super();let t=e.length;for(;e.charAt(t-1)=="=";)t--;let n=e.indexOf(",")+1;Object.assign(this,{dataURI:e,dataStart:n,size:Math.floor((t-n)*.75)})}readUint8Array(e,t){let{dataStart:n,dataURI:r}=this,i=new Uint8Array(t),a=Math.floor(e/3)*4,o=atob(r.substring(a+n,Math.ceil((e+t)/3)*4+n)),s=e-Math.floor(a/4)*3;for(let l=s;l<s+t;l++)i[l-s]=o.charCodeAt(l);return i}},cy=class extends rs{constructor(e){super(),Object.assign(this,{data:"data:"+(e||"")+";base64,",pending:[]})}writeUint8Array(e){let t=this,n=0,r=t.pending,i=t.pending.length;for(t.pending="",n=0;n<Math.floor((i+e.length)/3)*3-i;n++)r+=String.fromCharCode(e[n]);for(;n<e.length;n++)t.pending+=String.fromCharCode(e[n]);r.length>2?t.data+=btoa(r):t.pending=r}getData(){return this.data+btoa(this.pending)}},is=class extends An{constructor(e){super(),Object.assign(this,{blob:e,size:e.size})}async readUint8Array(e,t){let n=this,r=e+t,i=e||r<n.size?n.blob.slice(e,r):n.blob;return new Uint8Array(await i.arrayBuffer())}},as=class extends la{constructor(e){super();let t=this,n=new TransformStream,r=[];e&&r.push([ay,e]),Object.defineProperty(t,ns,{get(){return n.writable}}),t.blob=new Response(n.readable,{headers:r}).blob()}getData(){return this.blob}},uy=class extends is{constructor(e){super(new Blob([e],{type:ey}))}},dy=class extends as{constructor(e){super(e),Object.assign(this,{encoding:e,utf8:!e||e.toLowerCase()=="utf-8"})}async getData(){let{encoding:e,utf8:t}=this,n=await super.getData();if(n.text&&t)return n.text();{let r=new FileReader;return new Promise((i,a)=>{Object.assign(r,{onload:({target:o})=>i(o.result),onerror:()=>a(r.error)}),r.readAsText(n,e)})}}},py=class extends An{constructor(e,t){super(),Td(this,e,t)}async init(){await Sd(this,Ho,Bu),super.init()}readUint8Array(e,t){return Ad(this,e,t,Ho,Bu)}},fy=class extends An{constructor(e,t){super(),Td(this,e,t)}async init(){await Sd(this,Wo,zu),super.init()}readUint8Array(e,t){return Ad(this,e,t,Wo,zu)}};function Td(e,t,n){let{preventHeadRequest:r,useRangeHeader:i,forceRangeRequests:a}=n;n=Object.assign({},n),delete n.preventHeadRequest,delete n.useRangeHeader,delete n.forceRangeRequests,delete n.useXHR,Object.assign(e,{url:t,options:n,preventHeadRequest:r,useRangeHeader:i,forceRangeRequests:a})}async function Sd(e,t,n){let{url:r,useRangeHeader:i,forceRangeRequests:a}=e;if(by(r)&&(i||a)){let{headers:o}=await t(ts,e,Ed(e));if(!a&&o.get(ry)!=_d)throw new Error($r);{let s,l=o.get(ny);if(l){let c=l.trim().split(/\s*\/\s*/);if(c.length){let u=c[1];u&&u!="*"&&(s=Number(u))}}s===Ue?await Uu(e,t,n):e.size=s}}else await Uu(e,t,n)}async function Ad(e,t,n,r,i){let{useRangeHeader:a,forceRangeRequests:o,options:s}=e;if(a||o){let l=await r(ts,e,Ed(e,t,n));if(l.status!=206)throw new Error($r);return new Uint8Array(await l.arrayBuffer())}else{let{data:l}=e;return l||await i(e,s),new Uint8Array(e.data.subarray(t,t+n))}}function Ed(e,t=0,n=1){return Object.assign({},os(e),{[iy]:_d+"="+t+"-"+(t+n-1)})}function os({options:e}){let{headers:t}=e;if(t)return Symbol.iterator in t?Object.fromEntries(t):t}async function Bu(e){await kd(e,Ho)}async function zu(e){await kd(e,Wo)}async function kd(e,t){let n=await t(ts,e,os(e));e.data=new Uint8Array(await n.arrayBuffer()),e.size||(e.size=e.data.length)}async function Uu(e,t,n){if(e.preventHeadRequest)await n(e,e.options);else{let r=(await t(oy,e,os(e))).headers.get(ty);r?e.size=Number(r):await n(e,e.options)}}async function Ho(e,{options:t,url:n},r){let i=await fetch(n,Object.assign({},t,{method:e,headers:r}));if(i.status<400)return i;throw i.status==416?new Error($r):new Error(vd+(i.statusText||i.status))}function Wo(e,{url:t},n){return new Promise((r,i)=>{let a=new XMLHttpRequest;if(a.addEventListener("load",()=>{if(a.status<400){let o=[];a.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach(s=>{let l=s.trim().split(/\s*:\s*/);l[0]=l[0].trim().replace(/^[a-z]|-[a-z]/g,c=>c.toUpperCase()),o.push(l)}),r({status:a.status,arrayBuffer:()=>a.response,headers:new Map(o)})}else i(a.status==416?new Error($r):new Error(vd+(a.statusText||a.status)))},!1),a.addEventListener("error",o=>i(o.detail.error),!1),a.open(e,t),n)for(let o of Object.entries(n))a.setRequestHeader(o[0],o[1]);a.responseType="arraybuffer",a.send()})}var Cd=class extends An{constructor(e,t={}){super(),Object.assign(this,{url:e,reader:t.useXHR?new fy(e,t):new py(e,t)})}set size(e){}get size(){return this.reader.size}async init(){await this.reader.init(),super.init()}readUint8Array(e,t){return this.reader.readUint8Array(e,t)}},hy=class extends Cd{constructor(e,t={}){t.useRangeHeader=!0,super(e,t)}},my=class extends An{constructor(e){super(),Object.assign(this,{array:e,size:e.length})}readUint8Array(e,t){return this.array.slice(e,e+t)}},gy=class extends rs{init(e=0){Object.assign(this,{offset:0,array:new Uint8Array(e)}),super.init()}writeUint8Array(e){let t=this;if(t.offset+e.length>t.array.length){let n=t.array;t.array=new Uint8Array(n.length+e.length),t.array.set(n)}t.array.set(e,t.offset),t.offset+=e.length}getData(){return this.array}},ss=class extends An{constructor(e){super(),this.readers=e}async init(){let e=this,{readers:t}=e;e.lastDiskNumber=0,await Promise.all(t.map(async n=>{await n.init(),e.size+=n.size})),super.init()}async readUint8Array(e,t,n=0){let r=this,{readers:i}=this,a,o=n;o==-1&&(o=i.length-1);let s=e;for(;s>=i[o].size;)s-=i[o].size,o++;let l=i[o],c=l.size;if(s+t<=c)a=await rt(l,s,t);else{let u=c-s;a=new Uint8Array(t),a.set(await rt(l,s,u)),a.set(await r.readUint8Array(e+u,t-u,n),u)}return r.lastDiskNumber=Math.max(o,r.lastDiskNumber),a}},zr=class extends la{constructor(e,t=4294967295){super();let n=this;Object.assign(n,{diskNumber:0,diskOffset:0,size:0,maxSize:t,availableSize:t});let r,i,a,o=new WritableStream({async write(c){let{availableSize:u}=n;if(a)c.length>=u?(await s(c.slice(0,u)),await l(),n.diskOffset+=r.size,n.diskNumber++,a=null,await this.write(c.slice(u))):await s(c);else{let{value:p,done:d}=await e.next();if(d&&!p)throw new Error(xd);r=p,r.size=0,r.maxSize&&(n.maxSize=r.maxSize),n.availableSize=n.maxSize,await on(r),i=p.writable,a=i.getWriter(),await this.write(c)}},async close(){await a.ready,await l()}});Object.defineProperty(n,ns,{get(){return o}});async function s(c){let u=c.length;u&&(await a.ready,await a.write(c),r.size+=u,n.size+=u,n.availableSize-=u)}async function l(){i.size=r.size,await a.close()}}};function by(e){let{baseURL:t}=Yo(),{protocol:n}=new URL(e,t);return n=="http:"||n=="https:"}async function on(e,t){e.init&&!e.initialized&&await e.init(t)}function ls(e){return Array.isArray(e)&&(e=new ss(e)),e instanceof ReadableStream&&(e={readable:e}),e}function cs(e){e.writable===Ue&&typeof e.next==Yu&&(e=new zr(e)),e instanceof WritableStream&&(e={writable:e});let{writable:t}=e;return t.size===Ue&&(t.size=0),e instanceof zr||Object.assign(e,{diskNumber:0,diskOffset:0,availableSize:1/0,maxSize:1/0}),e}function rt(e,t,n,r){return e.readUint8Array(t,n,r)}var yy=ss,wy=zr,Ld="\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0 ".split(""),vy=Ld.length==256;function xy(e){if(vy){let t="";for(let n=0;n<e.length;n++)t+=Ld[e[n]];return t}else return new TextDecoder().decode(e)}function qo(e,t){return t&&t.trim().toLowerCase()=="cp437"?xy(e):new TextDecoder(t).decode(e)}var Od="filename",Dd="rawFilename",Pd="comment",Rd="rawComment",Nd="uncompressedSize",Md="compressedSize",Id="offset",Ko="diskNumberStart",us="lastModDate",Fd="rawLastModDate",ds="lastAccessDate",_y="rawLastAccessDate",ps="creationDate",Ty="rawCreationDate",Bd="internalFileAttribute",zd="externalFileAttribute",Ud="msDosCompatible",$d="zip64",Sy=[Od,Dd,Md,Nd,us,Fd,Pd,Rd,ds,ps,Id,Ko,Ko,Bd,zd,Ud,$d,"directory","bitFlag","encrypted","signature","filenameUTF8","commentUTF8","compressionMethod","version","versionMadeBy","extraField","rawExtraField","extraFieldZip64","extraFieldUnicodePath","extraFieldUnicodeComment","extraFieldAES","extraFieldNTFS","extraFieldExtendedTimestamp"],na=class{constructor(e){Sy.forEach(t=>this[t]=e[t])}},Zi="File format is not recognized",jd="End of central directory not found",Hd="End of Zip64 central directory not found",Wd="End of Zip64 central directory locator not found",qd="Central directory header not found",Kd="Local file header not found",Gd="Zip64 extra field not found",Vd="File contains encrypted entry",Xd="Encryption method not supported",Go="Compression method not supported",Vo="Split zip file",$u="utf-8",ju="cp437",Ay=[[Nd,4294967295],[Md,4294967295],[Id,4294967295],[Ko,65535]],Ey={65535:{getValue:Ie,bytes:4},4294967295:{getValue:Qi,bytes:8}},ky=class{constructor(e,t={}){Object.assign(this,{reader:ls(e),options:t,config:Yo()})}async*getEntriesGenerator(e={}){let t=this,{reader:n}=t,{config:r}=t;if(await on(n),(n.size===Ue||!n.readUint8Array)&&(n=new is(await new Response(n.readable).blob()),await on(n)),n.size<22)throw new Error(Zi);n.chunkSize=Qu(r);let i=await Ry(n,101010256,n.size,22,65535*16);if(!i){let x=await rt(n,0,4),A=Je(x);throw Ie(A)==134695760?new Error(Vo):new Error(jd)}let a=Je(i),o=Ie(a,12),s=Ie(a,16),l=i.offset,c=Ve(a,20),u=l+22+c,p=Ve(a,4),d=n.lastDiskNumber||0,f=Ve(a,6),b=Ve(a,8),g=0,m=0;if(s==4294967295||o==4294967295||b==65535||f==65535){let x=await rt(n,i.offset-20,20),A=Je(x);if(Ie(A,0)!=117853008)throw new Error(Hd);s=Qi(A,8);let k=await rt(n,s,56,-1),C=Je(k),D=i.offset-20-56;if(Ie(C,0)!=101075792&&s!=D){let O=s;s=D,g=s-O,k=await rt(n,s,56,-1),C=Je(k)}if(Ie(C,0)!=101075792)throw new Error(Wd);p==65535&&(p=Ie(C,16)),f==65535&&(f=Ie(C,20)),b==65535&&(b=Qi(C,32)),o==4294967295&&(o=Qi(C,40)),s-=o}if(d!=p)throw new Error(Vo);if(s<0||s>=n.size)throw new Error(Zi);let h=0,y=await rt(n,s,o,f),w=Je(y);if(o){let x=i.offset-o;if(Ie(w,h)!=33639248&&s!=x){let A=s;s=x,g=s-A,y=await rt(n,s,o,f),w=Je(y)}}if(s<0||s>=n.size)throw new Error(Zi);let T=zt(t,e,"filenameEncoding"),S=zt(t,e,"commentEncoding");for(let x=0;x<b;x++){let A=new Cy(n,r,t.options);if(Ie(w,h)!=33639248)throw new Error(qd);Yd(A,w,h+6);let k=!!A.bitFlag.languageEncodingFlag,C=h+46,D=C+A.filenameLength,O=D+A.extraFieldLength,I=Ve(w,h+4),N=(I&0)==0,F=y.subarray(C,D),z=Ve(w,h+32),H=O+z,ae=y.subarray(O,H),X=k,te=k,L=N&&(tr(w,h+38)&16)==16,P=Ie(w,h+42)+g;Object.assign(A,{versionMadeBy:I,msDosCompatible:N,compressedSize:0,uncompressedSize:0,commentLength:z,directory:L,offset:P,diskNumberStart:Ve(w,h+34),internalFileAttribute:Ve(w,h+36),externalFileAttribute:Ie(w,h+38),rawFilename:F,filenameUTF8:X,commentUTF8:te,rawExtraField:y.subarray(D,O)});let[$,Y]=await Promise.all([qo(F,X?$u:T||ju),qo(ae,te?$u:S||ju)]);Object.assign(A,{rawComment:ae,filename:$,comment:Y,directory:L||$.endsWith(Yi)}),m=Math.max(P,m),await Zd(A,A,w,h+6);let K=new na(A);K.getData=(pe,fe)=>A.getData(pe,K,fe),h=H;let{onprogress:ue}=e;if(ue)try{await ue(x+1,b,new na(A))}catch{}yield K}let _=zt(t,e,"extractPrependedData"),v=zt(t,e,"extractAppendedData");return _&&(t.prependedData=m>0?await rt(n,0,m):new Uint8Array),t.comment=c?await rt(n,l+22,c):new Uint8Array,v&&(t.appendedData=u<n.size?await rt(n,u,n.size-u):new Uint8Array),!0}async getEntries(e={}){let t=[];for await(let n of this.getEntriesGenerator(e))t.push(n);return t}async close(){}},Cy=class{constructor(e,t,n){Object.assign(this,{reader:e,config:t,options:n})}async getData(e,t,n={}){let r=this,{reader:i,offset:a,diskNumberStart:o,extraFieldAES:s,compressionMethod:l,config:c,bitFlag:u,signature:p,rawLastModDate:d,uncompressedSize:f,compressedSize:b}=r,g=r.localDirectory={},m=await rt(i,a,30,o),h=Je(m),y=zt(r,n,"password");if(y=y&&y.length&&y,s&&s.originalCompressionMethod!=99)throw new Error(Go);if(l!=0&&l!=8)throw new Error(Go);if(Ie(h,0)!=67324752)throw new Error(Kd);Yd(g,h,4),g.rawExtraField=g.extraFieldLength?await rt(i,a+30+g.filenameLength,g.extraFieldLength,o):new Uint8Array,await Zd(r,g,h,4),Object.assign(t,{lastAccessDate:g.lastAccessDate,creationDate:g.creationDate});let w=r.encrypted&&g.encrypted,T=w&&!s;if(w){if(!T&&s.strength===Ue)throw new Error(Xd);if(!y)throw new Error(Vd)}let S=a+30+g.filenameLength+g.extraFieldLength,_=i.readable;_.diskNumberStart=o,_.offset=S;let v=_.size=b,x=zt(r,n,"signal");e=cs(e),await on(e,f);let{writable:A}=e,{onstart:k,onprogress:C,onend:D}=n,O={options:{codecType:yd,password:y,zipCrypto:T,encryptionStrength:s&&s.strength,signed:zt(r,n,"checkSignature"),passwordVerification:T&&(u.dataDescriptor?d>>>8&255:p>>>24&255),signature:p,compressed:l!=0,encrypted:w,useWebWorkers:zt(r,n,"useWebWorkers"),useCompressionStream:zt(r,n,"useCompressionStream"),transferStreams:zt(r,n,"transferStreams")},config:c,streamOptions:{signal:x,size:v,onstart:k,onprogress:C,onend:D}};return A.size+=(await wd({readable:_,writable:A},O)).size,zt(r,n,"preventClose")||await A.close(),e.getData?e.getData():A}};function Yd(e,t,n){let r=e.rawBitFlag=Ve(t,n+2),i=(r&1)==1,a=Ie(t,n+6);Object.assign(e,{encrypted:i,version:Ve(t,n),bitFlag:{level:(r&6)>>1,dataDescriptor:(r&8)==8,languageEncodingFlag:(r&2048)==2048},rawLastModDate:a,lastModDate:Ny(a),filenameLength:Ve(t,n+22),extraFieldLength:Ve(t,n+24)})}async function Zd(e,t,n,r){let{rawExtraField:i}=t,a=t.extraField=new Map,o=Je(new Uint8Array(i)),s=0;try{for(;s<i.length;){let g=Ve(o,s),m=Ve(o,s+2);a.set(g,{type:g,data:i.slice(s+4,s+4+m)}),s+=4+m}}catch{}let l=Ve(n,r+4);Object.assign(t,{signature:Ie(n,r+10),uncompressedSize:Ie(n,r+18),compressedSize:Ie(n,r+14)});let c=a.get(1);c&&(Ly(c,t),t.extraFieldZip64=c);let u=a.get(28789);u&&(await Hu(u,Od,Dd,t,e),t.extraFieldUnicodePath=u);let p=a.get(25461);p&&(await Hu(p,Pd,Rd,t,e),t.extraFieldUnicodeComment=p);let d=a.get(39169);d?(Oy(d,t,l),t.extraFieldAES=d):t.compressionMethod=l;let f=a.get(10);f&&(Dy(f,t),t.extraFieldNTFS=f);let b=a.get(21589);b&&(Py(b,t),t.extraFieldExtendedTimestamp=b)}function Ly(e,t){t.zip64=!0;let n=Je(e.data),r=Ay.filter(([i,a])=>t[i]==a);for(let i=0,a=0;i<r.length;i++){let[o,s]=r[i];if(t[o]==s){let l=Ey[s];t[o]=e[o]=l.getValue(n,a),a+=l.bytes}else if(e[o])throw new Error(Gd)}}async function Hu(e,t,n,r,i){let a=Je(e.data),o=new ea;o.append(i[n]);let s=Je(new Uint8Array(4));s.setUint32(0,o.get(),!0),Object.assign(e,{version:tr(a,0),signature:Ie(a,1),[t]:await qo(e.data.subarray(5)),valid:!i.bitFlag.languageEncodingFlag&&e.signature==Ie(s,0)}),e.valid&&(r[t]=e[t],r[t+"UTF8"]=!0)}function Oy(e,t,n){let r=Je(e.data),i=tr(r,4);Object.assign(e,{vendorVersion:tr(r,0),vendorId:tr(r,2),strength:i,originalCompressionMethod:n,compressionMethod:Ve(r,5)}),t.compressionMethod=e.compressionMethod}function Dy(e,t){let n=Je(e.data),r=4,i;try{for(;r<e.data.length&&!i;){let a=Ve(n,r),o=Ve(n,r+2);a==1&&(i=e.data.slice(r+4,r+4+o)),r+=4+o}}catch{}try{if(i&&i.length==24){let a=Je(i),o=a.getBigUint64(0,!0),s=a.getBigUint64(8,!0),l=a.getBigUint64(16,!0);Object.assign(e,{rawLastModDate:o,rawLastAccessDate:s,rawCreationDate:l});let c=Mo(o),u=Mo(s),p=Mo(l),d={lastModDate:c,lastAccessDate:u,creationDate:p};Object.assign(e,d),Object.assign(t,d)}}catch{}}function Py(e,t){let n=Je(e.data),r=tr(n,0),i=[],a=[];(r&1)==1&&(i.push(us),a.push(Fd)),(r&2)==2&&(i.push(ds),a.push(_y)),(r&4)==4&&(i.push(ps),a.push(Ty));let o=1;i.forEach((s,l)=>{if(e.data.length>=o+4){let c=Ie(n,o);t[s]=e[s]=new Date(c*1e3);let u=a[l];e[u]=c}o+=4})}async function Ry(e,t,n,r,i){let a=new Uint8Array(4),o=Je(a);My(o,0,t);let s=r+i;return await l(r)||await l(Math.min(s,n));async function l(c){let u=n-c,p=await rt(e,u,c);for(let d=p.length-r;d>=0;d--)if(p[d]==a[0]&&p[d+1]==a[1]&&p[d+2]==a[2]&&p[d+3]==a[3])return{offset:u+d,buffer:p.slice(d,d+r).buffer}}}function zt(e,t,n){return t[n]===Ue?e.options[n]:t[n]}function Ny(e){let t=(e&4294901760)>>16,n=e&65535;try{return new Date(1980+((t&65024)>>9),((t&480)>>5)-1,t&31,(n&63488)>>11,(n&2016)>>5,(n&31)*2,0)}catch{}}function Mo(e){return new Date(Number(e/BigInt(1e4)-BigInt(116444736e5)))}function tr(e,t){return e.getUint8(t)}function Ve(e,t){return e.getUint16(t,!0)}function Ie(e,t){return e.getUint32(t,!0)}function Qi(e,t){return Number(e.getBigUint64(t,!0))}function My(e,t,n){e.setUint32(t,n,!0)}function Je(e){return new DataView(e.buffer)}var Qd="File already exists",Jd="Zip file comment exceeds 64KB",ep="File entry comment exceeds 64KB",tp="File entry name exceeds 64KB",Xo="Version exceeds 65535",np="The strength must equal 1, 2, or 3",rp="Extra field type exceeds 65535",ip="Extra field data exceeds 64KB",ca="Zip64 is not supported (make sure 'keepOrder' is set to 'true')",Wu=new Uint8Array([7,0,2,0,65,69,3,0,0]),Io=0,qu=[],Iy=class{constructor(e,t={}){e=cs(e),Object.assign(this,{writer:e,addSplitZipSignature:e instanceof zr,options:t,config:Yo(),files:new Map,filenames:new Set,offset:e.writable.size,pendingEntriesSize:0,pendingAddFileCalls:new Set,bufferedWrites:0})}async add(e="",t,n={}){let r=this,{pendingAddFileCalls:i,config:a}=r;Io<a.maxWorkers?Io++:await new Promise(s=>qu.push(s));let o;try{if(e=e.trim(),r.filenames.has(e))throw new Error(Qd);return r.filenames.add(e),o=Fy(r,e,t,n),i.add(o),await o}catch(s){throw r.filenames.delete(e),s}finally{i.delete(o);let s=qu.shift();s?s():Io--}}async close(e=new Uint8Array,t={}){let n=this,{pendingAddFileCalls:r,writer:i}=this,{writable:a}=i;for(;r.size;)await Promise.all(Array.from(r));return await qy(this,e,t),Ce(n,t,"preventClose")||await a.close(),i.getData?i.getData():a}};async function Fy(e,t,n,r){t=t.trim(),r.directory&&!t.endsWith(Yi)?t+=Yi:r.directory=t.endsWith(Yi);let i=zo(t);if(_e(i)>65535)throw new Error(tp);let a=r.comment||"",o=zo(a);if(_e(o)>65535)throw new Error(ep);let s=Ce(e,r,"version",20);if(s>65535)throw new Error(Xo);let l=Ce(e,r,"versionMadeBy",20);if(l>65535)throw new Error(Xo);let c=Ce(e,r,us,new Date),u=Ce(e,r,ds),p=Ce(e,r,ps),d=Ce(e,r,Ud,!0),f=Ce(e,r,Bd,0),b=Ce(e,r,zd,0),g=Ce(e,r,"password"),m=Ce(e,r,"encryptionStrength",3),h=Ce(e,r,"zipCrypto"),y=Ce(e,r,"extendedTimestamp",!0),w=Ce(e,r,"keepOrder",!0),T=Ce(e,r,"level"),S=Ce(e,r,"useWebWorkers"),_=Ce(e,r,"bufferedWrite"),v=Ce(e,r,"dataDescriptorSignature",!1),x=Ce(e,r,"signal"),A=Ce(e,r,"useCompressionStream"),k=Ce(e,r,"dataDescriptor",!0),C=Ce(e,r,$d);if(g!==Ue&&m!==Ue&&(m<1||m>3))throw new Error(np);let D=new Uint8Array,{extraField:O}=r;if(O){let pe=0,fe=0;O.forEach(Q=>pe+=4+_e(Q)),D=new Uint8Array(pe),O.forEach((Q,ie)=>{if(ie>65535)throw new Error(rp);if(_e(Q)>65535)throw new Error(ip);Xe(D,new Uint16Array([ie]),fe),Xe(D,new Uint16Array([_e(Q)]),fe+2),Xe(D,Q,fe+4),fe+=4+_e(Q)})}let I=0,N=0,F=0,z=C===!0;n&&(n=ls(n),await on(n),n.size===Ue?(k=!0,(C||C===Ue)&&(C=!0,I=4294967295)):(F=n.size,I=Gy(F)));let{diskOffset:H,diskNumber:ae,maxSize:X}=e.writer,te=z||F>=4294967295,L=z||I>=4294967295,P=z||e.offset+e.pendingEntriesSize-H>=4294967295,$=Ce(e,r,"supportZip64SplitFile",!0)&&z||ae+Math.ceil(e.pendingEntriesSize/X)>=65535;if(P||te||L||$){if(C===!1||!w)throw new Error(ca);C=!0}C=C||!1,r=Object.assign({},r,{rawFilename:i,rawComment:o,version:s,versionMadeBy:l,lastModDate:c,lastAccessDate:u,creationDate:p,rawExtraField:D,zip64:C,zip64UncompressedSize:te,zip64CompressedSize:L,zip64Offset:P,zip64DiskNumberStart:$,password:g,level:T,useWebWorkers:S,encryptionStrength:m,extendedTimestamp:y,zipCrypto:h,bufferedWrite:_,keepOrder:w,dataDescriptor:k,dataDescriptorSignature:v,signal:x,msDosCompatible:d,internalFileAttribute:f,externalFileAttribute:b,useCompressionStream:A});let Y=Uy(r),K=$y(r);N=_e(Y.localHeaderArray,K.dataDescriptorArray)+I,e.pendingEntriesSize+=N;let ue;try{ue=await By(e,t,n,{headerInfo:Y,dataDescriptorInfo:K},r)}finally{e.pendingEntriesSize-=N}return Object.assign(ue,{name:t,comment:a,extraField:O}),new na(ue)}async function By(e,t,n,r,i){let{files:a,writer:o}=e,{keepOrder:s,dataDescriptor:l,signal:c}=i,{headerInfo:u}=r,p=Array.from(a.values()).pop(),d={},f,b,g,m,h,y;a.set(t,d);try{let _;s&&(_=p&&p.lock,w()),i.bufferedWrite||e.writerLocked||e.bufferedWrites&&s||!l?(y=new as,y.writable.size=0,f=!0,e.bufferedWrites++,await on(o)):(y=o,await T()),await on(y);let{writable:v}=o,{diskOffset:x}=o;if(e.addSplitZipSignature){delete e.addSplitZipSignature;let k=new Uint8Array(4),C=yt(k);ye(C,0,134695760),await Vt(v,k),e.offset+=4}f||(await _,await S(v));let{diskNumber:A}=o;if(h=!0,d.diskNumberStart=A,d=await zy(n,y,d,r,e.config,i),h=!1,a.set(t,d),d.filename=t,f){await y.writable.close();let k=await y.getData();await _,await T(),m=!0,l||(k=await Hy(d,k,v,i)),await S(v),d.diskNumberStart=o.diskNumber,x=o.diskOffset,await k.stream().pipeTo(v,{preventClose:!0,preventAbort:!0,signal:c}),v.size+=k.size,m=!1}if(d.offset=e.offset-x,d.zip64)Wy(d,i);else if(d.offset>=4294967295)throw new Error(ca);return e.offset+=d.length,d}catch(_){if(f&&m||!f&&h){if(e.hasCorruptedEntries=!0,_)try{_.corruptedEntry=!0}catch{}f?e.offset+=y.writable.size:e.offset=y.writable.size}throw a.delete(t),_}finally{f&&e.bufferedWrites--,g&&g(),b&&b()}function w(){d.lock=new Promise(_=>g=_)}async function T(){e.writerLocked=!0;let{lockWriter:_}=e;e.lockWriter=new Promise(v=>b=()=>{e.writerLocked=!1,v()}),await _}async function S(_){u.localHeaderArray.length>o.availableSize&&(o.availableSize=0,await Vt(_,new Uint8Array))}}async function zy(e,t,{diskNumberStart:n,lock:r},i,a,o){let{headerInfo:s,dataDescriptorInfo:l}=i,{localHeaderArray:c,headerArray:u,lastModDate:p,rawLastModDate:d,encrypted:f,compressed:b,version:g,compressionMethod:m,rawExtraFieldExtendedTimestamp:h,rawExtraFieldNTFS:y,rawExtraFieldAES:w}=s,{dataDescriptorArray:T}=l,{rawFilename:S,lastAccessDate:_,creationDate:v,password:x,level:A,zip64:k,zip64UncompressedSize:C,zip64CompressedSize:D,zip64Offset:O,zip64DiskNumberStart:I,zipCrypto:N,dataDescriptor:F,directory:z,versionMadeBy:H,rawComment:ae,rawExtraField:X,useWebWorkers:te,onstart:L,onprogress:P,onend:$,signal:Y,encryptionStrength:K,extendedTimestamp:ue,msDosCompatible:pe,internalFileAttribute:fe,externalFileAttribute:Q,useCompressionStream:ie}=o,oe={lock:r,versionMadeBy:H,zip64:k,directory:!!z,filenameUTF8:!0,rawFilename:S,commentUTF8:!0,rawComment:ae,rawExtraFieldExtendedTimestamp:h,rawExtraFieldNTFS:y,rawExtraFieldAES:w,rawExtraField:X,extendedTimestamp:ue,msDosCompatible:pe,internalFileAttribute:fe,externalFileAttribute:Q,diskNumberStart:n},se=0,V=0,re,{writable:de}=t;if(e){e.chunkSize=Qu(a),await Vt(de,c);let ne=e.readable,Ee=ne.size=e.size,Ne={options:{codecType:bd,level:A,password:x,encryptionStrength:K,zipCrypto:f&&N,passwordVerification:f&&N&&d>>8&255,signed:!0,compressed:b,encrypted:f,useWebWorkers:te,useCompressionStream:ie,transferStreams:!1},config:a,streamOptions:{signal:Y,size:Ee,onstart:L,onprogress:P,onend:$}},ve=await wd({readable:ne,writable:de},Ne);de.size+=ve.size,re=ve.signature,V=e.size=ne.size,se=ve.size}else await Vt(de,c);let he;if(k){let ne=4;C&&(ne+=8),D&&(ne+=8),O&&(ne+=8),I&&(ne+=4),he=new Uint8Array(ne)}else he=new Uint8Array;return e&&jy({signature:re,rawExtraFieldZip64:he,compressedSize:se,uncompressedSize:V,headerInfo:s,dataDescriptorInfo:l},o),F&&await Vt(de,T),Object.assign(oe,{uncompressedSize:V,compressedSize:se,lastModDate:p,rawLastModDate:d,creationDate:v,lastAccessDate:_,encrypted:f,length:_e(c,T)+se,compressionMethod:m,version:g,headerArray:u,signature:re,rawExtraFieldZip64:he,zip64UncompressedSize:C,zip64CompressedSize:D,zip64Offset:O,zip64DiskNumberStart:I}),oe}function Uy(e){let{rawFilename:t,lastModDate:n,lastAccessDate:r,creationDate:i,password:a,level:o,zip64:s,zipCrypto:l,dataDescriptor:c,directory:u,rawExtraField:p,encryptionStrength:d,extendedTimestamp:f}=e,b=o!==0&&!u,g=!!(a&&_e(a)),m=e.version,h;if(g&&!l){h=new Uint8Array(_e(Wu)+2);let N=yt(h);Se(N,0,39169),Xe(h,Wu,2),ra(N,8,d)}else h=new Uint8Array;let y,w;if(f){w=new Uint8Array(9+(r?4:0)+(i?4:0));let N=yt(w);Se(N,0,21589),Se(N,2,_e(w)-4);let F=1+(r?2:0)+(i?4:0);ra(N,4,F),ye(N,5,Math.floor(n.getTime()/1e3)),r&&ye(N,9,Math.floor(r.getTime()/1e3)),i&&ye(N,13,Math.floor(i.getTime()/1e3));try{y=new Uint8Array(36);let z=yt(y),H=Fo(n);Se(z,0,10),Se(z,2,32),Se(z,8,1),Se(z,10,24),bt(z,12,H),bt(z,20,Fo(r)||H),bt(z,28,Fo(i)||H)}catch{y=new Uint8Array}}else y=w=new Uint8Array;let T=2048;c&&(T=T|8);let S=0;b&&(S=8),s&&(m=m>45?m:45),g&&(T=T|1,l||(m=m>51?m:51,S=99,b&&(h[9]=8)));let _=new Uint8Array(26),v=yt(_);Se(v,0,m),Se(v,2,T),Se(v,4,S);let x=new Uint32Array(1),A=yt(x),k;n<Eu?k=Eu:n>Au?k=Au:k=n,Se(A,0,(k.getHours()<<6|k.getMinutes())<<5|k.getSeconds()/2),Se(A,2,(k.getFullYear()-1980<<4|k.getMonth()+1)<<5|k.getDate());let C=x[0];ye(v,6,C),Se(v,22,_e(t));let D=_e(h,w,y,p);Se(v,24,D);let O=new Uint8Array(30+_e(t)+D),I=yt(O);return ye(I,0,67324752),Xe(O,_,4),Xe(O,t,30),Xe(O,h,30+_e(t)),Xe(O,w,30+_e(t,h)),Xe(O,y,30+_e(t,h,w)),Xe(O,p,30+_e(t,h,w,y)),{localHeaderArray:O,headerArray:_,headerView:v,lastModDate:n,rawLastModDate:C,encrypted:g,compressed:b,version:m,compressionMethod:S,rawExtraFieldExtendedTimestamp:w,rawExtraFieldNTFS:y,rawExtraFieldAES:h}}function $y(e){let{zip64:t,dataDescriptor:n,dataDescriptorSignature:r}=e,i=new Uint8Array,a,o=0;return n&&(i=new Uint8Array(t?r?24:20:r?16:12),a=yt(i),r&&(o=4,ye(a,0,134695760))),{dataDescriptorArray:i,dataDescriptorView:a,dataDescriptorOffset:o}}function jy(e,t){let{signature:n,rawExtraFieldZip64:r,compressedSize:i,uncompressedSize:a,headerInfo:o,dataDescriptorInfo:s}=e,{headerView:l,encrypted:c}=o,{dataDescriptorView:u,dataDescriptorOffset:p}=s,{zip64:d,zip64UncompressedSize:f,zip64CompressedSize:b,zipCrypto:g,dataDescriptor:m}=t;if((!c||g)&&n!==Ue&&(ye(l,10,n),m&&ye(u,p,n)),d){let h=yt(r);Se(h,0,1),Se(h,2,r.length-4);let y=4;f&&(ye(l,18,4294967295),bt(h,y,BigInt(a)),y+=8),b&&(ye(l,14,4294967295),bt(h,y,BigInt(i))),m&&(bt(u,p+4,BigInt(i)),bt(u,p+12,BigInt(a)))}else ye(l,14,i),ye(l,18,a),m&&(ye(u,p+4,i),ye(u,p+8,a))}async function Hy(e,t,n,{zipCrypto:r}){let i=await Ky(t,0,26),a=new DataView(i);return(!e.encrypted||r)&&ye(a,14,e.signature),e.zip64?(ye(a,18,4294967295),ye(a,22,4294967295)):(ye(a,18,e.compressedSize),ye(a,22,e.uncompressedSize)),await Vt(n,new Uint8Array(i)),t.slice(i.byteLength)}function Wy(e,t){let{rawExtraFieldZip64:n,offset:r,diskNumberStart:i}=e,{zip64UncompressedSize:a,zip64CompressedSize:o,zip64Offset:s,zip64DiskNumberStart:l}=t,c=yt(n),u=4;a&&(u+=8),o&&(u+=8),s&&(bt(c,u,BigInt(r)),u+=8),l&&ye(c,u,i)}async function qy(e,t,n){let{files:r,writer:i}=e,{diskOffset:a,writable:o}=i,{diskNumber:s}=i,l=0,c=0,u=e.offset-a,p=r.size;for(let[,{rawFilename:S,rawExtraFieldZip64:_,rawExtraFieldAES:v,rawExtraField:x,rawComment:A,rawExtraFieldExtendedTimestamp:k,rawExtraFieldNTFS:C}]of r)c+=46+_e(S,A,_,v,k,C,x);let d=new Uint8Array(c),f=yt(d);await on(i);let b=0;for(let[S,_]of Array.from(r.values()).entries()){let{offset:v,rawFilename:x,rawExtraFieldZip64:A,rawExtraFieldAES:k,rawExtraFieldNTFS:C,rawExtraField:D,rawComment:O,versionMadeBy:I,headerArray:N,directory:F,zip64:z,zip64UncompressedSize:H,zip64CompressedSize:ae,zip64DiskNumberStart:X,zip64Offset:te,msDosCompatible:L,internalFileAttribute:P,externalFileAttribute:$,extendedTimestamp:Y,lastModDate:K,diskNumberStart:ue,uncompressedSize:pe,compressedSize:fe}=_,Q;if(Y){Q=new Uint8Array(9);let V=yt(Q);Se(V,0,21589),Se(V,2,_e(Q)-4),ra(V,4,1),ye(V,5,Math.floor(K.getTime()/1e3))}else Q=new Uint8Array;let ie=_e(A,k,Q,C,D);ye(f,l,33639248),Se(f,l+4,I);let oe=yt(N);H||ye(oe,18,pe),ae||ye(oe,14,fe),Xe(d,N,l+6),Se(f,l+30,ie),Se(f,l+32,_e(O)),Se(f,l+34,z&&X?65535:ue),Se(f,l+36,P),$?ye(f,l+38,$):F&&L&&ra(f,l+38,16),ye(f,l+42,z&&te?4294967295:v),Xe(d,x,l+46),Xe(d,A,l+46+_e(x)),Xe(d,k,l+46+_e(x,A)),Xe(d,Q,l+46+_e(x,A,k)),Xe(d,C,l+46+_e(x,A,k,Q)),Xe(d,D,l+46+_e(x,A,k,Q,C)),Xe(d,O,l+46+_e(x)+ie);let se=46+_e(x,O)+ie;if(l-b>i.availableSize&&(i.availableSize=0,await Vt(o,d.slice(b,l)),b=l),l+=se,n.onprogress)try{await n.onprogress(S+1,r.size,new na(_))}catch{}}await Vt(o,b?d.slice(b):d);let g=i.diskNumber,{availableSize:m}=i;m<22&&g++;let h=Ce(e,n,"zip64");if(u>=4294967295||c>=4294967295||p>=65535||g>=65535){if(h===!1)throw new Error(ca);h=!0}let y=new Uint8Array(h?98:22),w=yt(y);l=0,h&&(ye(w,0,101075792),bt(w,4,BigInt(44)),Se(w,12,45),Se(w,14,45),ye(w,16,g),ye(w,20,s),bt(w,24,BigInt(p)),bt(w,32,BigInt(p)),bt(w,40,BigInt(c)),bt(w,48,BigInt(u)),ye(w,56,117853008),bt(w,64,BigInt(u)+BigInt(c)),ye(w,72,g+1),Ce(e,n,"supportZip64SplitFile",!0)&&(g=65535,s=65535),p=65535,u=4294967295,c=4294967295,l+=76),ye(w,l,101010256),Se(w,l+4,g),Se(w,l+6,s),Se(w,l+8,p),Se(w,l+10,p),ye(w,l+12,c),ye(w,l+16,u);let T=_e(t);if(T)if(T<=65535)Se(w,l+20,T);else throw new Error(Jd);await Vt(o,y),T&&await Vt(o,t)}function Ky(e,t,n){return t||n?e.slice(t,n).arrayBuffer():e.arrayBuffer()}async function Vt(e,t){let n=e.getWriter();await n.ready,e.size+=_e(t),await n.write(t),n.releaseLock()}function Fo(e){if(e)return(BigInt(e.getTime())+BigInt(116444736e5))*BigInt(1e4)}function Ce(e,t,n,r){let i=t[n]===Ue?e.options[n]:t[n];return i===Ue?r:i}function Gy(e){return e+5*(Math.floor(e/16383)+1)}function ra(e,t,n){e.setUint8(t,n)}function Se(e,t,n){e.setUint16(t,n,!0)}function ye(e,t,n){e.setUint32(t,n,!0)}function bt(e,t,n){e.setBigUint64(t,n,!0)}function Xe(e,t,n){e.set(t,n)}function yt(e){return new DataView(e.buffer)}function _e(...e){let t=0;return e.forEach(n=>n&&(t+=n.length)),t}oa({Deflate:G0,Inflate:pb});var ap={},Vy=function(e,t,n,r,i){var a=new Worker(ap[t]||(ap[t]=URL.createObjectURL(new Blob([e+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return a.onmessage=function(o){var s=o.data,l=s.$e$;if(l){var c=new Error(l[0]);c.code=l[1],c.stack=l[2],i(c,null)}else i(null,s)},a.postMessage(n,r),a},Ae=Uint8Array,it=Uint16Array,sr=Uint32Array,lr=new Ae([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),cr=new Ae([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),jr=new Ae([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),dp=function(e,t){for(var n=new it(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new sr(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return[n,i]},pp=dp(lr,2),_s=pp[0],ma=pp[1];_s[28]=258,ma[258]=28;var fp=dp(cr,0),hp=fp[0],ms=fp[1],Hr=new it(32768);for(Te=0;Te<32768;++Te)sn=(Te&43690)>>>1|(Te&21845)<<1,sn=(sn&52428)>>>2|(sn&13107)<<2,sn=(sn&61680)>>>4|(sn&3855)<<4,Hr[Te]=((sn&65280)>>>8|(sn&255)<<8)>>>1;var sn,Te,Dt=function(e,t,n){for(var r=e.length,i=0,a=new it(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new it(t);for(i=0;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new it(1<<t);var l=15-t;for(i=0;i<r;++i)if(e[i])for(var c=i<<4|e[i],u=t-e[i],p=o[e[i]-1]++<<u,d=p|(1<<u)-1;p<=d;++p)s[Hr[p]>>>l]=c}else for(s=new it(r),i=0;i<r;++i)e[i]&&(s[i]=Hr[o[e[i]-1]++]>>>15-e[i]);return s},cn=new Ae(288);for(Te=0;Te<144;++Te)cn[Te]=8;var Te;for(Te=144;Te<256;++Te)cn[Te]=9;var Te;for(Te=256;Te<280;++Te)cn[Te]=7;var Te;for(Te=280;Te<288;++Te)cn[Te]=8;var Te,or=new Ae(32);for(Te=0;Te<32;++Te)or[Te]=5;var Te,mp=Dt(cn,9,0),gp=Dt(cn,9,1),bp=Dt(or,5,0),yp=Dt(or,5,1),da=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},Ot=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},pa=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},Wr=function(e){return(e+7)/8|0},Qt=function(e,t,n){(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length);var r=new(e.BYTES_PER_ELEMENT==2?it:e.BYTES_PER_ELEMENT==4?sr:Ae)(n-t);return r.set(e.subarray(t,n)),r};var wp=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],me=function(e,t,n){var r=new Error(t||wp[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,me),!n)throw r;return r},wa=function(e,t,n){var r=e.length;if(!r||n&&n.f&&!n.l)return t||new Ae(0);var i=!t||n,a=!n||n.i;n||(n={}),t||(t=new Ae(r*3));var o=function(K){var ue=t.length;if(K>ue){var pe=new Ae(Math.max(ue*2,K));pe.set(t),t=pe}},s=n.f||0,l=n.p||0,c=n.b||0,u=n.l,p=n.d,d=n.m,f=n.n,b=r*8;do{if(!u){s=Ot(e,l,1);var g=Ot(e,l+1,3);if(l+=3,g)if(g==1)u=gp,p=yp,d=9,f=5;else if(g==2){var m=Ot(e,l,31)+257,h=Ot(e,l+10,15)+4,y=m+Ot(e,l+5,31)+1;l+=14;for(var w=new Ae(y),T=new Ae(19),S=0;S<h;++S)T[jr[S]]=Ot(e,l+S*3,7);l+=h*3;for(var _=da(T),v=(1<<_)-1,x=Dt(T,_,1),S=0;S<y;){var A=x[Ot(e,l,v)];l+=A&15;var k=A>>>4;if(k<16)w[S++]=k;else{var C=0,D=0;for(k==16?(D=3+Ot(e,l,3),l+=2,C=w[S-1]):k==17?(D=3+Ot(e,l,7),l+=3):k==18&&(D=11+Ot(e,l,127),l+=7);D--;)w[S++]=C}}var O=w.subarray(0,m),I=w.subarray(m);d=da(O),f=da(I),u=Dt(O,d,1),p=Dt(I,f,1)}else me(1);else{var k=Wr(l)+4,N=e[k-4]|e[k-3]<<8,F=k+N;if(F>r){a&&me(0);break}i&&o(c+N),t.set(e.subarray(k,F),c),n.b=c+=N,n.p=l=F*8,n.f=s;continue}if(l>b){a&&me(0);break}}i&&o(c+131072);for(var z=(1<<d)-1,H=(1<<f)-1,ae=l;;ae=l){var C=u[pa(e,l)&z],X=C>>>4;if(l+=C&15,l>b){a&&me(0);break}if(C||me(2),X<256)t[c++]=X;else if(X==256){ae=l,u=null;break}else{var te=X-254;if(X>264){var S=X-257,L=lr[S];te=Ot(e,l,(1<<L)-1)+_s[S],l+=L}var P=p[pa(e,l)&H],$=P>>>4;P||me(3),l+=P&15;var I=hp[$];if($>3){var L=cr[$];I+=pa(e,l)&(1<<L)-1,l+=L}if(l>b){a&&me(0);break}i&&o(c+131072);for(var Y=c+te;c<Y;c+=4)t[c]=t[c-I],t[c+1]=t[c+1-I],t[c+2]=t[c+2-I],t[c+3]=t[c+3-I];c=Y}}n.l=u,n.p=ae,n.b=c,n.f=s,u&&(s=1,n.m=d,n.d=p,n.n=f)}while(!s);return c==t.length?t:Qt(t,0,c)},Zt=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>>8},nr=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>>8,e[r+2]|=n>>>16},fa=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return[ln,0];if(i==1){var o=new Ae(n[0].s+1);return o[n[0].s]=1,[o,1]}n.sort(function(S,_){return S.f-_.f}),n.push({s:-1,f:25001});var s=n[0],l=n[1],c=0,u=1,p=2;for(n[0]={s:-1,f:s.f+l.f,l:s,r:l};u!=i-1;)s=n[n[c].f<n[p].f?c++:p++],l=n[c!=u&&n[c].f<n[p].f?c++:p++],n[u++]={s:-1,f:s.f+l.f,l:s,r:l};for(var d=a[0].s,r=1;r<i;++r)a[r].s>d&&(d=a[r].s);var f=new it(d+1),b=ga(n[u-1],f,0);if(b>t){var r=0,g=0,m=b-t,h=1<<m;for(a.sort(function(_,v){return f[v.s]-f[_.s]||_.f-v.f});r<i;++r){var y=a[r].s;if(f[y]>t)g+=h-(1<<b-f[y]),f[y]=t;else break}for(g>>>=m;g>0;){var w=a[r].s;f[w]<t?g-=1<<t-f[w]++-1:++r}for(;r>=0&&g;--r){var T=a[r].s;f[T]==t&&(--f[T],++g)}b=t}return[new Ae(f),b]},ga=function(e,t,n){return e.s==-1?Math.max(ga(e.l,t,n+1),ga(e.r,t,n+1)):t[e.s]=n},gs=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new it(++t),r=0,i=e[0],a=1,o=function(l){n[r++]=l},s=1;s<=t;++s)if(e[s]==i&&s!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[s]}return[n.subarray(0,r),t]},rr=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},ba=function(e,t,n){var r=n.length,i=Wr(t+2);e[i]=r&255,e[i+1]=r>>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},bs=function(e,t,n,r,i,a,o,s,l,c,u){Zt(t,u++,n),++i[256];for(var p=fa(i,15),d=p[0],f=p[1],b=fa(a,15),g=b[0],m=b[1],h=gs(d),y=h[0],w=h[1],T=gs(g),S=T[0],_=T[1],v=new it(19),x=0;x<y.length;++x)v[y[x]&31]++;for(var x=0;x<S.length;++x)v[S[x]&31]++;for(var A=fa(v,7),k=A[0],C=A[1],D=19;D>4&&!k[jr[D-1]];--D);var O=c+5<<3,I=rr(i,cn)+rr(a,or)+o,N=rr(i,d)+rr(a,g)+o+14+3*D+rr(v,k)+(2*v[16]+3*v[17]+7*v[18]);if(O<=I&&O<=N)return ba(t,u,e.subarray(l,l+c));var F,z,H,ae;if(Zt(t,u,1+(N<I)),u+=2,N<I){F=Dt(d,f,0),z=d,H=Dt(g,m,0),ae=g;var X=Dt(k,C,0);Zt(t,u,w-257),Zt(t,u+5,_-1),Zt(t,u+10,D-4),u+=14;for(var x=0;x<D;++x)Zt(t,u+3*x,k[jr[x]]);u+=3*D;for(var te=[y,S],L=0;L<2;++L)for(var P=te[L],x=0;x<P.length;++x){var $=P[x]&31;Zt(t,u,X[$]),u+=k[$],$>15&&(Zt(t,u,P[x]>>>5&127),u+=P[x]>>>12)}}else F=mp,z=cn,H=bp,ae=or;for(var x=0;x<s;++x)if(r[x]>255){var $=r[x]>>>18&31;nr(t,u,F[$+257]),u+=z[$+257],$>7&&(Zt(t,u,r[x]>>>23&31),u+=lr[$]);var Y=r[x]&31;nr(t,u,H[Y]),u+=ae[Y],Y>3&&(nr(t,u,r[x]>>>5&8191),u+=cr[Y])}else nr(t,u,F[r[x]]),u+=z[r[x]];return nr(t,u,F[256]),u+z[256]},vp=new sr([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),ln=new Ae(0),xp=function(e,t,n,r,i,a){var o=e.length,s=new Ae(r+o+5*(1+Math.ceil(o/7e3))+i),l=s.subarray(r,s.length-i),c=0;if(!t||o<8)for(var u=0;u<=o;u+=65535){var p=u+65535;p>=o&&(l[c>>3]=a),c=ba(l,c+1,e.subarray(u,p))}else{for(var d=vp[t-1],f=d>>>13,b=d&8191,g=(1<<n)-1,m=new it(32768),h=new it(g+1),y=Math.ceil(n/3),w=2*y,T=function(V){return(e[V]^e[V+1]<<y^e[V+2]<<w)&g},S=new sr(25e3),_=new it(288),v=new it(32),x=0,A=0,u=0,k=0,C=0,D=0;u<o;++u){var O=T(u),I=u&32767,N=h[O];if(m[I]=N,h[O]=I,C<=u){var F=o-u;if((x>7e3||k>24576)&&F>423){c=bs(e,l,0,S,_,v,A,k,D,u-D,c),k=x=A=0,D=u;for(var z=0;z<286;++z)_[z]=0;for(var z=0;z<30;++z)v[z]=0}var H=2,ae=0,X=b,te=I-N&32767;if(F>2&&O==T(u-te))for(var L=Math.min(f,F)-1,P=Math.min(32767,u),$=Math.min(258,F);te<=P&&--X&&I!=N;){if(e[u+H]==e[u+H-te]){for(var Y=0;Y<$&&e[u+Y]==e[u+Y-te];++Y);if(Y>H){if(H=Y,ae=te,Y>L)break;for(var K=Math.min(te,Y-2),ue=0,z=0;z<K;++z){var pe=u-te+z+32768&32767,fe=m[pe],Q=pe-fe+32768&32767;Q>ue&&(ue=Q,N=pe)}}}I=N,N=m[I],te+=I-N+32768&32767}if(ae){S[k++]=268435456|ma[H]<<18|ms[ae];var ie=ma[H]&31,oe=ms[ae]&31;A+=lr[ie]+cr[oe],++_[257+ie],++v[oe],C=u+H,++x}else S[k++]=e[u],++_[e[u]]}}c=bs(e,l,a,S,_,v,A,k,D,u-D,c),!a&&c&7&&(c=ba(l,c+1,ln))}return Qt(s,0,r+Wr(c)+i)},_p=function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(n&1&&-306674912)^n>>>1;e[t]=n}return e}(),Ts=function(){var e=-1;return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=_p[n&255^t[r]]^n>>>8;e=n},d:function(){return~e}}},Tp=function(){var e=1,t=0;return{p:function(n){for(var r=e,i=t,a=n.length|0,o=0;o!=a;){for(var s=Math.min(o+2655,a);o<s;++o)i+=r+=n[o];r=(r&65535)+15*(r>>16),i=(i&65535)+15*(i>>16)}e=r,t=i},d:function(){return e%=65521,t%=65521,(e&255)<<24|e>>>8<<16|(t&255)<<8|t>>>8}}},qr=function(e,t,n,r,i){return xp(e,t.level==null?6:t.level,t.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):12+t.mem,n,r,!i)},Sp=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},op=function(e,t,n){for(var r=e(),i=e.toString(),a=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<r.length;++o){var s=r[o],l=a[o];if(typeof s=="function"){t+=";"+l+"=";var c=s.toString();if(s.prototype)if(c.indexOf("[native code]")!=-1){var u=c.indexOf(" ",8)+1;t+=c.slice(u,c.indexOf("(",u))}else{t+=c;for(var p in s.prototype)t+=";"+l+".prototype."+p+"="+s.prototype[p].toString()}else t+=c}else n[l]=s}return[t,n]},ua=[],Xy=function(e){var t=[];for(var n in e)e[n].buffer&&t.push((e[n]=new e[n].constructor(e[n])).buffer);return t},Yy=function(e,t,n,r){var i;if(!ua[n]){for(var a="",o={},s=e.length-1,l=0;l<s;++l)i=op(e[l],a,o),a=i[0],o=i[1];ua[n]=op(e[s],a,o)}var c=Sp({},ua[n][1]);return Vy(ua[n][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",n,c,Xy(c),r)},Ss=function(){return[Ae,it,sr,lr,cr,jr,_s,hp,gp,yp,Hr,wp,Dt,da,Ot,pa,Wr,Qt,me,wa,a1,Ap,t1]},As=function(){return[Ae,it,sr,lr,cr,jr,ma,ms,mp,cn,bp,or,Hr,vp,ln,Dt,Zt,nr,fa,ga,gs,rr,ba,bs,Wr,Qt,xp,qr,i1,Ap]},Zy=function(){return[Ep,Cp,ke,Ts,_p]},Qy=function(){return[kp,n1]},Jy=function(){return[Lp,ke,Tp]},e1=function(){return[Op]},Ap=function(e){return postMessage(e,[e.buffer])},t1=function(e){return e&&e.size&&new Ae(e.size)};var Pt=function(e){return e.ondata=function(t,n){return postMessage([t,n],[t.buffer])},function(t){return e.push(t.data[0],t.data[1])}},ur=function(e,t,n,r,i){var a,o=Yy(e,r,i,function(s,l){s?(o.terminate(),t.ondata.call(t,s)):(l[1]&&o.terminate(),t.ondata.call(t,s,l[0],l[1]))});o.postMessage(n),t.push=function(s,l){t.ondata||me(5),a&&t.ondata(me(4,0,1),null,!!l),o.postMessage([s,a=l],[s.buffer])},t.terminate=function(){o.terminate()}},ir=function(e,t){return e[t]|e[t+1]<<8},ar=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},hs=function(e,t){return ar(e,t)+ar(e,t+4)*4294967296},ke=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},Ep=function(e,t){var n=t.filename;if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:t.level==9?2:0,e[9]=3,t.mtime!=0&&ke(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8;for(var r=0;r<=n.length;++r)e[r+10]=n.charCodeAt(r)}},kp=function(e){(e[0]!=31||e[1]!=139||e[2]!=8)&&me(6,"invalid gzip data");var t=e[3],n=10;t&4&&(n+=e[10]|(e[11]<<8)+2);for(var r=(t>>3&1)+(t>>4&1);r>0;r-=!e[n++]);return n+(t&2)},n1=function(e){var t=e.length;return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0},Cp=function(e){return 10+(e.filename&&e.filename.length+1||0)},Lp=function(e,t){var n=t.level,r=n==0?0:n<6?1:n==9?3:2;e[0]=120,e[1]=r<<6|(r?32-2*r:1)},Op=function(e){((e[0]&15)!=8||e[0]>>>4>7||(e[0]<<8|e[1])%31)&&me(6,"invalid zlib data"),e[1]&32&&me(6,"invalid zlib data: preset dictionaries not supported")};function Es(e,t){return!t&&typeof e=="function"&&(t=e,e={}),this.ondata=t,e}var un=function(){function e(t,n){!n&&typeof t=="function"&&(n=t,t={}),this.ondata=n,this.o=t||{}}return e.prototype.p=function(t,n){this.ondata(qr(t,this.o,0,0,!n),n)},e.prototype.push=function(t,n){this.ondata||me(5),this.d&&me(4),this.d=n,this.p(t,n||!1)},e}(),r1=function(){function e(t,n){ur([As,function(){return[Pt,un]}],this,Es.call(this,t,n),function(r){var i=new un(r.data);onmessage=Pt(i)},6)}return e}();function i1(e,t){return qr(e,t||{},0,0)}var xt=function(){function e(t){this.s={},this.p=new Ae(0),this.ondata=t}return e.prototype.e=function(t){this.ondata||me(5),this.d&&me(4);var n=this.p.length,r=new Ae(n+t.length);r.set(this.p),r.set(t,n),this.p=r},e.prototype.c=function(t){this.d=this.s.i=t||!1;var n=this.s.b,r=wa(this.p,this.o,this.s);this.ondata(Qt(r,n,this.s.b),this.d),this.o=Qt(r,this.s.b-32768),this.s.b=this.o.length,this.p=Qt(this.p,this.s.p/8|0),this.s.p&=7},e.prototype.push=function(t,n){this.e(t),this.c(n)},e}(),Dp=function(){function e(t){this.ondata=t,ur([Ss,function(){return[Pt,xt]}],this,0,function(){var n=new xt;onmessage=Pt(n)},7)}return e}();function a1(e,t){return wa(e,t)}var sp=function(){function e(t,n){this.c=Ts(),this.l=0,this.v=1,un.call(this,t,n)}return e.prototype.push=function(t,n){un.prototype.push.call(this,t,n)},e.prototype.p=function(t,n){this.c.p(t),this.l+=t.length;var r=qr(t,this.o,this.v&&Cp(this.o),n&&8,!n);this.v&&(Ep(r,this.o),this.v=0),n&&(ke(r,r.length-8,this.c.d()),ke(r,r.length-4,this.l)),this.ondata(r,n)},e}(),I2=function(){function e(t,n){ur([As,Zy,function(){return[Pt,un,sp]}],this,Es.call(this,t,n),function(r){var i=new sp(r.data);onmessage=Pt(i)},8)}return e}();var ys=function(){function e(t){this.v=1,xt.call(this,t)}return e.prototype.push=function(t,n){if(xt.prototype.e.call(this,t),this.v){var r=this.p.length>3?kp(this.p):4;if(r>=this.p.length&&!n)return;this.p=this.p.subarray(r),this.v=0}n&&(this.p.length<8&&me(6,"invalid gzip data"),this.p=this.p.subarray(0,-8)),xt.prototype.c.call(this,n)},e}(),o1=function(){function e(t){this.ondata=t,ur([Ss,Qy,function(){return[Pt,xt,ys]}],this,0,function(){var n=new ys;onmessage=Pt(n)},9)}return e}();var lp=function(){function e(t,n){this.c=Tp(),this.v=1,un.call(this,t,n)}return e.prototype.push=function(t,n){un.prototype.push.call(this,t,n)},e.prototype.p=function(t,n){this.c.p(t);var r=qr(t,this.o,this.v&&2,n&&4,!n);this.v&&(Lp(r,this.o),this.v=0),n&&ke(r,r.length-4,this.c.d()),this.ondata(r,n)},e}(),F2=function(){function e(t,n){ur([As,Jy,function(){return[Pt,un,lp]}],this,Es.call(this,t,n),function(r){var i=new lp(r.data);onmessage=Pt(i)},10)}return e}();var ws=function(){function e(t){this.v=1,xt.call(this,t)}return e.prototype.push=function(t,n){if(xt.prototype.e.call(this,t),this.v){if(this.p.length<2&&!n)return;this.p=this.p.subarray(2),this.v=0}n&&(this.p.length<4&&me(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),xt.prototype.c.call(this,n)},e}(),s1=function(){function e(t){this.ondata=t,ur([Ss,e1,function(){return[Pt,xt,ws]}],this,0,function(){var n=new ws;onmessage=Pt(n)},11)}return e}();function Pp(e,t){return wa((Op(e),e.subarray(2,-4)),t)}var l1=function(){function e(t){this.G=ys,this.I=xt,this.Z=ws,this.ondata=t}return e.prototype.push=function(t,n){if(this.ondata||me(5),this.s)this.s.push(t,n);else{if(this.p&&this.p.length){var r=new Ae(this.p.length+t.length);r.set(this.p),r.set(t,this.p.length)}else this.p=t;if(this.p.length>2){var i=this,a=function(){i.ondata.apply(i,arguments)};this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(a):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(a):new this.Z(a),this.s.push(this.p,n),this.p=null}}},e}(),B2=function(){function e(t){this.G=o1,this.I=Dp,this.Z=s1,this.ondata=t}return e.prototype.push=function(t,n){l1.prototype.push.call(this,t,n)},e}();var cp=typeof TextEncoder<"u"&&new TextEncoder,vs=typeof TextDecoder<"u"&&new TextDecoder,Rp=0;try{vs.decode(ln,{stream:!0}),Rp=1}catch{}var Np=function(e){for(var t="",n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return[t,Qt(e,n-1)];i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}},z2=function(){function e(t){this.ondata=t,Rp?this.t=new TextDecoder:this.p=ln}return e.prototype.push=function(t,n){if(this.ondata||me(5),n=!!n,this.t){this.ondata(this.t.decode(t,{stream:!0}),n),n&&(this.t.decode().length&&me(8),this.t=null);return}this.p||me(4);var r=new Ae(this.p.length+t.length);r.set(this.p),r.set(t,this.p.length);var i=Np(r),a=i[0],o=i[1];n?(o.length&&me(8),this.p=null):this.p=o,this.ondata(a,n)},e}(),U2=function(){function e(t){this.ondata=t}return e.prototype.push=function(t,n){this.ondata||me(5),this.d&&me(4),this.ondata(xs(t),this.d=n||!1)},e}();function xs(e,t){if(t){for(var n=new Ae(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(cp)return cp.encode(e);for(var i=e.length,a=new Ae(e.length+(e.length>>1)),o=0,s=function(p){a[o++]=p},r=0;r<i;++r){if(o+5>a.length){var l=new Ae(o+8+(i-r<<1));l.set(a),a=l}var c=e.charCodeAt(r);c<128||t?s(c):c<2048?(s(192|c>>6),s(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|e.charCodeAt(++r)&1023,s(240|c>>18),s(128|c>>12&63),s(128|c>>6&63),s(128|c&63)):(s(224|c>>12),s(128|c>>6&63),s(128|c&63))}return Qt(a,0,o)}function c1(e,t){if(t){for(var n="",r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else{if(vs)return vs.decode(e);var i=Np(e),a=i[0],o=i[1];return o.length&&me(8),a}}var Mp=function(e){return e==1?3:e<6?2:e==9?1:0};var u1=function(e,t){for(;ir(e,t)!=1;t+=4+ir(e,t+2));return[hs(e,t+12),hs(e,t+4),hs(e,t+20)]},ha=function(e){var t=0;if(e)for(var n in e){var r=e[n].length;r>65535&&me(9),t+=r+4}return t},up=function(e,t,n,r,i,a,o,s){var l=r.length,c=n.extra,u=s&&s.length,p=ha(c);ke(e,t,o!=null?33639248:67324752),t+=4,o!=null&&(e[t++]=20,e[t++]=n.os),e[t]=20,t+=2,e[t++]=n.flag<<1|(a<0&&8),e[t++]=i&&8,e[t++]=n.compression&255,e[t++]=n.compression>>8;var d=new Date(n.mtime==null?Date.now():n.mtime),f=d.getFullYear()-1980;if((f<0||f>119)&&me(10),ke(e,t,f<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>>1),t+=4,a!=-1&&(ke(e,t,n.crc),ke(e,t+4,a<0?-a-2:a),ke(e,t+8,n.size)),ke(e,t+12,l),ke(e,t+14,p),t+=16,o!=null&&(ke(e,t,u),ke(e,t+6,n.attrs),ke(e,t+10,o),t+=14),e.set(r,t),t+=l,p)for(var b in c){var g=c[b],m=g.length;ke(e,t,+b),ke(e,t+2,m),e.set(g,t+4),t+=4+m}return u&&(e.set(s,t),t+=u),t},d1=function(e,t,n,r,i){ke(e,t,101010256),ke(e,t+8,n),ke(e,t+10,n),ke(e,t+12,r),ke(e,t+16,i)},ya=function(){function e(t){this.filename=t,this.c=Ts(),this.size=0,this.compression=0}return e.prototype.process=function(t,n){this.ondata(null,t,n)},e.prototype.push=function(t,n){this.ondata||me(5),this.c.p(t),this.size+=t.length,n&&(this.crc=this.c.d()),this.process(t,n||!1)},e}(),$2=function(){function e(t,n){var r=this;n||(n={}),ya.call(this,t),this.d=new un(n,function(i,a){r.ondata(null,i,a)}),this.compression=8,this.flag=Mp(n.level)}return e.prototype.process=function(t,n){try{this.d.push(t,n)}catch(r){this.ondata(r,null,n)}},e.prototype.push=function(t,n){ya.prototype.push.call(this,t,n)},e}(),j2=function(){function e(t,n){var r=this;n||(n={}),ya.call(this,t),this.d=new r1(n,function(i,a,o){r.ondata(i,a,o)}),this.compression=8,this.flag=Mp(n.level),this.terminate=this.d.terminate}return e.prototype.process=function(t,n){this.d.push(t,n)},e.prototype.push=function(t,n){ya.prototype.push.call(this,t,n)},e}(),H2=function(){function e(t){this.ondata=t,this.u=[],this.d=1}return e.prototype.add=function(t){var n=this;if(this.ondata||me(5),this.d&2)this.ondata(me(4+(this.d&1)*8,0,1),null,!1);else{var r=xs(t.filename),i=r.length,a=t.comment,o=a&&xs(a),s=i!=t.filename.length||o&&a.length!=o.length,l=i+ha(t.extra)+30;i>65535&&this.ondata(me(11,0,1),null,!1);var c=new Ae(l);up(c,0,t,r,s,-1);var u=[c],p=function(){for(var m=0,h=u;m<h.length;m++){var y=h[m];n.ondata(null,y,!1)}u=[]},d=this.d;this.d=0;var f=this.u.length,b=Sp(t,{f:r,u:s,o,t:function(){t.terminate&&t.terminate()},r:function(){if(p(),d){var m=n.u[f+1];m?m.r():n.d=1}d=1}}),g=0;t.ondata=function(m,h,y){if(m)n.ondata(m,h,y),n.terminate();else if(g+=h.length,u.push(h),y){var w=new Ae(16);ke(w,0,134695760),ke(w,4,t.crc),ke(w,8,g),ke(w,12,t.size),u.push(w),b.c=g,b.b=l+g+16,b.crc=t.crc,b.size=t.size,d&&b.r(),d=1}else d&&p()},this.u.push(b)}},e.prototype.end=function(){var t=this;if(this.d&2){this.ondata(me(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){t.d&1&&(t.u.splice(-1,1),t.e())},t:function(){}}),this.d=3},e.prototype.e=function(){for(var t=0,n=0,r=0,i=0,a=this.u;i<a.length;i++){var o=a[i];r+=46+o.f.length+ha(o.extra)+(o.o?o.o.length:0)}for(var s=new Ae(r+22),l=0,c=this.u;l<c.length;l++){var o=c[l];up(s,t,o,o.f,o.u,-o.c-2,n,o.o),t+=46+o.f.length+ha(o.extra)+(o.o?o.o.length:0),n+=o.b}d1(s,t,this.u.length,r,n),this.ondata(null,s,!0),this.d=2},e.prototype.terminate=function(){for(var t=0,n=this.u;t<n.length;t++){var r=n[t];r.t()}this.d=2},e}();var p1=function(){function e(){}return e.prototype.push=function(t,n){this.ondata(null,t,n)},e.compression=0,e}(),W2=function(){function e(){var t=this;this.i=new xt(function(n,r){t.ondata(null,n,r)})}return e.prototype.push=function(t,n){try{this.i.push(t,n)}catch(r){this.ondata(r,null,n)}},e.compression=8,e}(),q2=function(){function e(t,n){var r=this;n<32e4?this.i=new xt(function(i,a){r.ondata(null,i,a)}):(this.i=new Dp(function(i,a,o){r.ondata(i,a,o)}),this.terminate=this.i.terminate)}return e.prototype.push=function(t,n){this.i.terminate&&(t=Qt(t,0)),this.i.push(t,n)},e.compression=8,e}(),K2=function(){function e(t){this.onfile=t,this.k=[],this.o={0:p1},this.p=ln}return e.prototype.push=function(t,n){var r=this;if(this.onfile||me(5),this.p||me(4),this.c>0){var i=Math.min(this.c,t.length),a=t.subarray(0,i);if(this.c-=i,this.d?this.d.push(a,!this.c):this.k[0].push(a),t=t.subarray(i),t.length)return this.push(t,n)}else{var o=0,s=0,l=void 0,c=void 0;this.p.length?t.length?(c=new Ae(this.p.length+t.length),c.set(this.p),c.set(t,this.p.length)):c=this.p:c=t;for(var u=c.length,p=this.c,d=p&&this.d,f=function(){var h,y=ar(c,s);if(y==67324752){o=1,l=s,b.d=null,b.c=0;var w=ir(c,s+6),T=ir(c,s+8),S=w&2048,_=w&8,v=ir(c,s+26),x=ir(c,s+28);if(u>s+30+v+x){var A=[];b.k.unshift(A),o=2;var k=ar(c,s+18),C=ar(c,s+22),D=c1(c.subarray(s+30,s+=30+v),!S);k==4294967295?(h=_?[-2]:u1(c,s),k=h[0],C=h[1]):_&&(k=-1),s+=x,b.c=k;var O,I={name:D,compression:T,start:function(){if(I.ondata||me(5),!k)I.ondata(null,ln,!0);else{var N=r.o[T];N||I.ondata(me(14,"unknown compression type "+T,1),null,!1),O=k<0?new N(D):new N(D,k,C),O.ondata=function(ae,X,te){I.ondata(ae,X,te)};for(var F=0,z=A;F<z.length;F++){var H=z[F];O.push(H,!1)}r.k[0]==A&&r.c?r.d=O:O.push(ln,!0)}},terminate:function(){O&&O.terminate&&O.terminate()}};k>=0&&(I.size=k,I.originalSize=C),b.onfile(I)}return"break"}else if(p){if(y==134695760)return l=s+=12+(p==-2&&8),o=3,b.c=0,"break";if(y==33639248)return l=s-=4,o=3,b.c=0,"break"}},b=this;s<u-4;++s){var g=f();if(g==="break")break}if(this.p=ln,p<0){var m=o?c.subarray(0,l-12-(p==-2&&8)-(ar(c,l-16)==134695760&&4)):c.subarray(0,s);d?d.push(m,!!o):this.k[+(o==2)].push(m)}if(o&2)return this.push(c.subarray(s),n);this.p=c.subarray(s)}n&&(this.c&&me(13),this.p=null)},e.prototype.register=function(t){this.o[t.compression]=t},e}();var Ps=!1,Rs=!1,jn=[],Ns=-1;function h1(e){m1(e)}function m1(e){jn.includes(e)||jn.push(e),g1()}function Yp(e){let t=jn.indexOf(e);t!==-1&&t>Ns&&jn.splice(t,1)}function g1(){!Rs&&!Ps&&(Ps=!0,queueMicrotask(b1))}function b1(){Ps=!1,Rs=!0;for(let e=0;e<jn.length;e++)jn[e](),Ns=e;jn.length=0,Ns=-1,Rs=!1}var fr,hr,Jr,Zp,Ms=!0;function y1(e){Ms=!1,e(),Ms=!0}function w1(e){fr=e.reactive,Jr=e.release,hr=t=>e.effect(t,{scheduler:n=>{Ms?h1(n):n()}}),Zp=e.raw}function Ip(e){hr=e}function v1(e){let t=()=>{};return[n=>{let r=hr(n);return e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(i=>i())}),e._x_effects.add(r),t=()=>{r!==void 0&&(e._x_effects.delete(r),Jr(r))},r},()=>{t()}]}function Xr(e,t,n={}){e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0,cancelable:!0}))}function kn(e,t){if(typeof ShadowRoot=="function"&&e instanceof ShadowRoot){Array.from(e.children).forEach(i=>kn(i,t));return}let n=!1;if(t(e,()=>n=!0),n)return;let r=e.firstElementChild;for(;r;)kn(r,t,!1),r=r.nextElementSibling}function dn(e,...t){}var Fp=!1;function x1(){Fp&&dn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Fp=!0,document.body||dn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),Xr(document,"alpine:init"),Xr(document,"alpine:initializing"),el(),S1(t=>pn(t,kn)),Zs(t=>Ys(t)),lf((t,n)=>{il(t,n).forEach(r=>r())});let e=t=>!Oa(t.parentElement,!0);Array.from(document.querySelectorAll(ef().join(","))).filter(e).forEach(t=>{pn(t)}),Xr(document,"alpine:initialized")}var Xs=[],Qp=[];function Jp(){return Xs.map(e=>e())}function ef(){return Xs.concat(Qp).map(e=>e())}function tf(e){Xs.push(e)}function nf(e){Qp.push(e)}function Oa(e,t=!1){return Da(e,n=>{if((t?ef():Jp()).some(r=>n.matches(r)))return!0})}function Da(e,t){if(e){if(t(e))return e;if(e._x_teleportBack&&(e=e._x_teleportBack),!!e.parentElement)return Da(e.parentElement,t)}}function _1(e){return Jp().some(t=>e.matches(t))}var rf=[];function T1(e){rf.push(e)}function pn(e,t=kn,n=()=>{}){z1(()=>{t(e,(r,i)=>{n(r,i),rf.forEach(a=>a(r,i)),il(r,r.attributes).forEach(a=>a()),r._x_ignore&&i()})})}function Ys(e){kn(e,t=>{uf(t),A1(t)})}var af=[],of=[],sf=[];function S1(e){sf.push(e)}function Zs(e,t){typeof t=="function"?(e._x_cleanups||(e._x_cleanups=[]),e._x_cleanups.push(t)):(t=e,of.push(t))}function lf(e){af.push(e)}function cf(e,t,n){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(n)}function uf(e,t){e._x_attributeCleanups&&Object.entries(e._x_attributeCleanups).forEach(([n,r])=>{(t===void 0||t.includes(n))&&(r.forEach(i=>i()),delete e._x_attributeCleanups[n])})}function A1(e){if(e._x_cleanups)for(;e._x_cleanups.length;)e._x_cleanups.pop()()}var Qs=new MutationObserver(nl),Js=!1;function el(){Qs.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),Js=!0}function df(){E1(),Qs.disconnect(),Js=!1}var Yr=[],ks=!1;function E1(){Yr=Yr.concat(Qs.takeRecords()),Yr.length&&!ks&&(ks=!0,queueMicrotask(()=>{k1(),ks=!1}))}function k1(){nl(Yr),Yr.length=0}function $e(e){if(!Js)return e();df();let t=e();return el(),t}var tl=!1,ka=[];function C1(){tl=!0}function L1(){tl=!1,nl(ka),ka=[]}function nl(e){if(tl){ka=ka.concat(e);return}let t=[],n=[],r=new Map,i=new Map;for(let a=0;a<e.length;a++)if(!e[a].target._x_ignoreMutationObserver&&(e[a].type==="childList"&&(e[a].addedNodes.forEach(o=>o.nodeType===1&&t.push(o)),e[a].removedNodes.forEach(o=>o.nodeType===1&&n.push(o))),e[a].type==="attributes")){let o=e[a].target,s=e[a].attributeName,l=e[a].oldValue,c=()=>{r.has(o)||r.set(o,[]),r.get(o).push({name:s,value:o.getAttribute(s)})},u=()=>{i.has(o)||i.set(o,[]),i.get(o).push(s)};o.hasAttribute(s)&&l===null?c():o.hasAttribute(s)?(u(),c()):u()}i.forEach((a,o)=>{uf(o,a)}),r.forEach((a,o)=>{af.forEach(s=>s(o,a))});for(let a of n)t.includes(a)||(of.forEach(o=>o(a)),Ys(a));t.forEach(a=>{a._x_ignoreSelf=!0,a._x_ignore=!0});for(let a of t)n.includes(a)||a.isConnected&&(delete a._x_ignoreSelf,delete a._x_ignore,sf.forEach(o=>o(a)),a._x_ignore=!0,a._x_ignoreSelf=!0);t.forEach(a=>{delete a._x_ignoreSelf,delete a._x_ignore}),t=null,n=null,r=null,i=null}function pf(e){return ti(dr(e))}function ei(e,t,n){return e._x_dataStack=[t,...dr(n||e)],()=>{e._x_dataStack=e._x_dataStack.filter(r=>r!==t)}}function dr(e){return e._x_dataStack?e._x_dataStack:typeof ShadowRoot=="function"&&e instanceof ShadowRoot?dr(e.host):e.parentNode?dr(e.parentNode):[]}function ti(e){return new Proxy({objects:e},O1)}var O1={ownKeys({objects:e}){return Array.from(new Set(e.flatMap(t=>Object.keys(t))))},has({objects:e},t){return t==Symbol.unscopables?!1:e.some(n=>Object.prototype.hasOwnProperty.call(n,t))},get({objects:e},t,n){return t=="toJSON"?D1:Reflect.get(e.find(r=>Object.prototype.hasOwnProperty.call(r,t))||{},t,n)},set({objects:e},t,n,r){let i=e.find(o=>Object.prototype.hasOwnProperty.call(o,t))||e[e.length-1],a=Object.getOwnPropertyDescriptor(i,t);return a?.set&&a?.get?Reflect.set(i,t,n,r):Reflect.set(i,t,n)}};function D1(){return Reflect.ownKeys(this).reduce((e,t)=>(e[t]=Reflect.get(this,t),e),{})}function ff(e){let t=r=>typeof r=="object"&&!Array.isArray(r)&&r!==null,n=(r,i="")=>{Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(([a,{value:o,enumerable:s}])=>{if(s===!1||o===void 0)return;let l=i===""?a:`${i}.${a}`;typeof o=="object"&&o!==null&&o._x_interceptor?r[a]=o.initialize(e,l,a):t(o)&&o!==r&&!(o instanceof Element)&&n(o,l)})};return n(e)}function hf(e,t=()=>{}){let n={initialValue:void 0,_x_interceptor:!0,initialize(r,i,a){return e(this.initialValue,()=>P1(r,i),o=>mf(r,i,o),i,a)}};return t(n),r=>{if(typeof r=="object"&&r!==null&&r._x_interceptor){let i=n.initialize.bind(n);n.initialize=(a,o,s)=>{let l=r.initialize(a,o,s);return n.initialValue=l,i(a,o,s)}}else n.initialValue=r;return n}}function P1(e,t){return t.split(".").reduce((n,r)=>n[r],e)}function mf(e,t,n){if(typeof t=="string"&&(t=t.split(".")),t.length===1)e[t[0]]=n;else{if(t.length===0)throw error;return e[t[0]]||(e[t[0]]={}),mf(e[t[0]],t.slice(1),n)}}var gf={};function $t(e,t){gf[e]=t}function Is(e,t){return Object.entries(gf).forEach(([n,r])=>{let i=null;function a(){if(i)return i;{let[o,s]=_f(t);return i={interceptor:hf,...o},Zs(t,s),i}}Object.defineProperty(e,`$${n}`,{get(){return r(t,a())},enumerable:!1})}),e}function R1(e,t,n,...r){try{return n(...r)}catch(i){Qr(i,e,t)}}function Qr(e,t,n=void 0){Object.assign(e,{el:t,expression:n}),setTimeout(()=>{throw e},0)}var Aa=!0;function bf(e){let t=Aa;Aa=!1;let n=e();return Aa=t,n}function Hn(e,t,n={}){let r;return dt(e,t)(i=>r=i,n),r}function dt(...e){return yf(...e)}var yf=wf;function N1(e){yf=e}function wf(e,t){let n={};Is(n,e);let r=[n,...dr(e)],i=typeof t=="function"?M1(r,t):F1(r,t,e);return R1.bind(null,e,t,i)}function M1(e,t){return(n=()=>{},{scope:r={},params:i=[]}={})=>{let a=t.apply(ti([r,...e]),i);Ca(n,a)}}var Cs={};function I1(e,t){if(Cs[e])return Cs[e];let n=Object.getPrototypeOf(async function(){}).constructor,r=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e,i=(()=>{try{let a=new n(["__self","scope"],`with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`);return Object.defineProperty(a,"name",{value:`[Alpine] ${e}`}),a}catch(a){return Qr(a,t,e),Promise.resolve()}})();return Cs[e]=i,i}function F1(e,t,n){let r=I1(t,n);return(i=()=>{},{scope:a={},params:o=[]}={})=>{r.result=void 0,r.finished=!1;let s=ti([a,...e]);if(typeof r=="function"){let l=r(r,s).catch(c=>Qr(c,n,t));r.finished?(Ca(i,r.result,s,o,n),r.result=void 0):l.then(c=>{Ca(i,c,s,o,n)}).catch(c=>Qr(c,n,t)).finally(()=>r.result=void 0)}}}function Ca(e,t,n,r,i){if(Aa&&typeof t=="function"){let a=t.apply(n,r);a instanceof Promise?a.then(o=>Ca(e,o,n,r)).catch(o=>Qr(o,i,t)):e(a)}else typeof t=="object"&&t instanceof Promise?t.then(a=>e(a)):e(t)}var rl="x-";function mr(e=""){return rl+e}function B1(e){rl=e}var Fs={};function Fe(e,t){return Fs[e]=t,{before(n){if(!Fs[n])return;let r=$n.indexOf(n);$n.splice(r>=0?r:$n.indexOf("DEFAULT"),0,e)}}}function il(e,t,n){if(t=Array.from(t),e._x_virtualDirectives){let i=Object.entries(e._x_virtualDirectives).map(([o,s])=>({name:o,value:s})),a=vf(i);i=i.map(o=>a.find(s=>s.name===o.name)?{name:`x-bind:${o.name}`,value:`"${o.value}"`}:o),t=t.concat(i)}let r={};return t.map(Af((i,a)=>r[i]=a)).filter(kf).map($1(r,n)).sort(j1).map(i=>U1(e,i))}function vf(e){return Array.from(e).map(Af()).filter(t=>!kf(t))}var Bs=!1,Vr=new Map,xf=Symbol();function z1(e){Bs=!0;let t=Symbol();xf=t,Vr.set(t,[]);let n=()=>{for(;Vr.get(t).length;)Vr.get(t).shift()();Vr.delete(t)},r=()=>{Bs=!1,n()};e(n),r()}function _f(e){let t=[],n=a=>t.push(a),[r,i]=v1(e);return t.push(i),[{Alpine:ri,effect:r,cleanup:n,evaluateLater:dt.bind(dt,e),evaluate:Hn.bind(Hn,e)},()=>t.forEach(a=>a())]}function U1(e,t){let n=()=>{},r=Fs[t.type]||n,[i,a]=_f(e);cf(e,t.original,a);let o=()=>{e._x_ignore||e._x_ignoreSelf||(r.inline&&r.inline(e,t,i),r=r.bind(r,e,t,i),Bs?Vr.get(xf).push(r):r())};return o.runCleanups=a,o}var Tf=(e,t)=>({name:n,value:r})=>(n.startsWith(e)&&(n=n.replace(e,t)),{name:n,value:r}),Sf=e=>e;function Af(e=()=>{}){return({name:t,value:n})=>{let{name:r,value:i}=Ef.reduce((a,o)=>o(a),{name:t,value:n});return r!==t&&e(r,t),{name:r,value:i}}}var Ef=[];function al(e){Ef.push(e)}function kf({name:e}){return Cf().test(e)}var Cf=()=>new RegExp(`^${rl}([^:^.]+)\\b`);function $1(e,t){return({name:n,value:r})=>{let i=n.match(Cf()),a=n.match(/:([a-zA-Z0-9\-_:]+)/),o=n.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],s=t||e[n]||n;return{type:i?i[1]:null,value:a?a[1]:null,modifiers:o.map(l=>l.replace(".","")),expression:r,original:s}}}var zs="DEFAULT",$n=["ignore","ref","data","id","anchor","bind","init","for","model","modelable","transition","show","if",zs,"teleport"];function j1(e,t){let n=$n.indexOf(e.type)===-1?zs:e.type,r=$n.indexOf(t.type)===-1?zs:t.type;return $n.indexOf(n)-$n.indexOf(r)}var Us=[],ol=!1;function sl(e=()=>{}){return queueMicrotask(()=>{ol||setTimeout(()=>{$s()})}),new Promise(t=>{Us.push(()=>{e(),t()})})}function $s(){for(ol=!1;Us.length;)Us.shift()()}function H1(){ol=!0}function ll(e,t){return Array.isArray(t)?Bp(e,t.join(" ")):typeof t=="object"&&t!==null?W1(e,t):typeof t=="function"?ll(e,t()):Bp(e,t)}function Bp(e,t){let n=a=>a.split(" ").filter(Boolean),r=a=>a.split(" ").filter(o=>!e.classList.contains(o)).filter(Boolean),i=a=>(e.classList.add(...a),()=>{e.classList.remove(...a)});return t=t===!0?t="":t||"",i(r(t))}function W1(e,t){let n=s=>s.split(" ").filter(Boolean),r=Object.entries(t).flatMap(([s,l])=>l?n(s):!1).filter(Boolean),i=Object.entries(t).flatMap(([s,l])=>l?!1:n(s)).filter(Boolean),a=[],o=[];return i.forEach(s=>{e.classList.contains(s)&&(e.classList.remove(s),o.push(s))}),r.forEach(s=>{e.classList.contains(s)||(e.classList.add(s),a.push(s))}),()=>{o.forEach(s=>e.classList.add(s)),a.forEach(s=>e.classList.remove(s))}}function Pa(e,t){return typeof t=="object"&&t!==null?q1(e,t):K1(e,t)}function q1(e,t){let n={};return Object.entries(t).forEach(([r,i])=>{n[r]=e.style[r],r.startsWith("--")||(r=G1(r)),e.style.setProperty(r,i)}),setTimeout(()=>{e.style.length===0&&e.removeAttribute("style")}),()=>{Pa(e,n)}}function K1(e,t){let n=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",n||"")}}function G1(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function js(e,t=()=>{}){let n=!1;return function(){n?t.apply(this,arguments):(n=!0,e.apply(this,arguments))}}Fe("transition",(e,{value:t,modifiers:n,expression:r},{evaluate:i})=>{typeof r=="function"&&(r=i(r)),r!==!1&&(!r||typeof r=="boolean"?X1(e,n,t):V1(e,r,t))});function V1(e,t,n){Lf(e,ll,""),{enter:r=>{e._x_transition.enter.during=r},"enter-start":r=>{e._x_transition.enter.start=r},"enter-end":r=>{e._x_transition.enter.end=r},leave:r=>{e._x_transition.leave.during=r},"leave-start":r=>{e._x_transition.leave.start=r},"leave-end":r=>{e._x_transition.leave.end=r}}[n](t)}function X1(e,t,n){Lf(e,Pa);let r=!t.includes("in")&&!t.includes("out")&&!n,i=r||t.includes("in")||["enter"].includes(n),a=r||t.includes("out")||["leave"].includes(n);t.includes("in")&&!r&&(t=t.filter((h,y)=>y<t.indexOf("out"))),t.includes("out")&&!r&&(t=t.filter((h,y)=>y>t.indexOf("out")));let o=!t.includes("opacity")&&!t.includes("scale"),s=o||t.includes("opacity"),l=o||t.includes("scale"),c=s?0:1,u=l?Kr(t,"scale",95)/100:1,p=Kr(t,"delay",0)/1e3,d=Kr(t,"origin","center"),f="opacity, transform",b=Kr(t,"duration",150)/1e3,g=Kr(t,"duration",75)/1e3,m="cubic-bezier(0.4, 0.0, 0.2, 1)";i&&(e._x_transition.enter.during={transformOrigin:d,transitionDelay:`${p}s`,transitionProperty:f,transitionDuration:`${b}s`,transitionTimingFunction:m},e._x_transition.enter.start={opacity:c,transform:`scale(${u})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),a&&(e._x_transition.leave.during={transformOrigin:d,transitionDelay:`${p}s`,transitionProperty:f,transitionDuration:`${g}s`,transitionTimingFunction:m},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:c,transform:`scale(${u})`})}function Lf(e,t,n={}){e._x_transition||(e._x_transition={enter:{during:n,start:n,end:n},leave:{during:n,start:n,end:n},in(r=()=>{},i=()=>{}){Hs(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},r,i)},out(r=()=>{},i=()=>{}){Hs(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},r,i)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,n,r){let i=document.visibilityState==="visible"?requestAnimationFrame:setTimeout,a=()=>i(n);if(t){e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(n):a():e._x_transition?e._x_transition.in(n):a();return}e._x_hidePromise=e._x_transition?new Promise((o,s)=>{e._x_transition.out(()=>{},()=>o(r)),e._x_transitioning&&e._x_transitioning.beforeCancel(()=>s({isFromCancelledTransition:!0}))}):Promise.resolve(r),queueMicrotask(()=>{let o=Of(e);o?(o._x_hideChildren||(o._x_hideChildren=[]),o._x_hideChildren.push(e)):i(()=>{let s=l=>{let c=Promise.all([l._x_hidePromise,...(l._x_hideChildren||[]).map(s)]).then(([u])=>u());return delete l._x_hidePromise,delete l._x_hideChildren,c};s(e).catch(l=>{if(!l.isFromCancelledTransition)throw l})})})};function Of(e){let t=e.parentNode;if(t)return t._x_hidePromise?t:Of(t)}function Hs(e,t,{during:n,start:r,end:i}={},a=()=>{},o=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),Object.keys(n).length===0&&Object.keys(r).length===0&&Object.keys(i).length===0){a(),o();return}let s,l,c;Y1(e,{start(){s=t(e,r)},during(){l=t(e,n)},before:a,end(){s(),c=t(e,i)},after:o,cleanup(){l(),c()}})}function Y1(e,t){let n,r,i,a=js(()=>{$e(()=>{n=!0,r||t.before(),i||(t.end(),$s()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(o){this.beforeCancels.push(o)},cancel:js(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();a()}),finish:a},$e(()=>{t.start(),t.during()}),H1(),requestAnimationFrame(()=>{if(n)return;let o=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,s=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;o===0&&(o=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),$e(()=>{t.before()}),r=!0,requestAnimationFrame(()=>{n||($e(()=>{t.end()}),$s(),setTimeout(e._x_transitioning.finish,o+s),i=!0)})})}function Kr(e,t,n){if(e.indexOf(t)===-1)return n;let r=e[e.indexOf(t)+1];if(!r||t==="scale"&&isNaN(r))return n;if(t==="duration"||t==="delay"){let i=r.match(/([0-9]+)ms/);if(i)return i[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[r,e[e.indexOf(t)+2]].join(" "):r}var Cn=!1;function ni(e,t=()=>{}){return(...n)=>Cn?t(...n):e(...n)}function Z1(e){return(...t)=>Cn&&e(...t)}var Df=[];function Pf(e){Df.push(e)}function Q1(e,t){Df.forEach(n=>n(e,t)),Cn=!0,Rf(()=>{pn(t,(n,r)=>{r(n,()=>{})})}),Cn=!1}var Ws=!1;function J1(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),Cn=!0,Ws=!0,Rf(()=>{ew(t)}),Cn=!1,Ws=!1}function ew(e){let t=!1;pn(e,(n,r)=>{kn(n,(i,a)=>{if(t&&_1(i))return a();t=!0,r(i,a)})})}function Rf(e){let t=hr;Ip((n,r)=>{let i=t(n);return Jr(i),()=>{}}),e(),Ip(t)}function Nf(e,t,n,r=[]){switch(e._x_bindings||(e._x_bindings=fr({})),e._x_bindings[t]=n,t=r.includes("camel")?lw(t):t,t){case"value":tw(e,n);break;case"style":rw(e,n);break;case"class":nw(e,n);break;case"selected":case"checked":iw(e,t,n);break;default:Mf(e,t,n);break}}function tw(e,t){if(e.type==="radio")e.attributes.value===void 0&&(e.value=t),window.fromModel&&(typeof t=="boolean"?e.checked=Ea(e.value)===t:e.checked=zp(e.value,t));else if(e.type==="checkbox")Number.isInteger(t)?e.value=t:!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?e.value=String(t):Array.isArray(t)?e.checked=t.some(n=>zp(n,e.value)):e.checked=!!t;else if(e.tagName==="SELECT")sw(e,t);else{if(e.value===t)return;e.value=t===void 0?"":t}}function nw(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=ll(e,t)}function rw(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=Pa(e,t)}function iw(e,t,n){Mf(e,t,n),ow(e,t,n)}function Mf(e,t,n){[null,void 0,!1].includes(n)&&cw(t)?e.removeAttribute(t):(If(t)&&(n=t),aw(e,t,n))}function aw(e,t,n){e.getAttribute(t)!=n&&e.setAttribute(t,n)}function ow(e,t,n){e[t]!==n&&(e[t]=n)}function sw(e,t){let n=[].concat(t).map(r=>r+"");Array.from(e.options).forEach(r=>{r.selected=n.includes(r.value)})}function lw(e){return e.toLowerCase().replace(/-(\w)/g,(t,n)=>n.toUpperCase())}function zp(e,t){return e==t}function Ea(e){return[1,"1","true","on","yes",!0].includes(e)?!0:[0,"0","false","off","no",!1].includes(e)?!1:e?!!e:null}function If(e){return["disabled","checked","required","readonly","hidden","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(e)}function cw(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}function uw(e,t,n){return e._x_bindings&&e._x_bindings[t]!==void 0?e._x_bindings[t]:Ff(e,t,n)}function dw(e,t,n,r=!0){if(e._x_bindings&&e._x_bindings[t]!==void 0)return e._x_bindings[t];if(e._x_inlineBindings&&e._x_inlineBindings[t]!==void 0){let i=e._x_inlineBindings[t];return i.extract=r,bf(()=>Hn(e,i.expression))}return Ff(e,t,n)}function Ff(e,t,n){let r=e.getAttribute(t);return r===null?typeof n=="function"?n():n:r===""?!0:If(t)?!![t,"true"].includes(r):r}function Bf(e,t){var n;return function(){var r=this,i=arguments,a=function(){n=null,e.apply(r,i)};clearTimeout(n),n=setTimeout(a,t)}}function zf(e,t){let n;return function(){let r=this,i=arguments;n||(e.apply(r,i),n=!0,setTimeout(()=>n=!1,t))}}function Uf({get:e,set:t},{get:n,set:r}){let i=!0,a,o=hr(()=>{let s=e(),l=n();if(i)r(Ls(s)),i=!1,a=JSON.stringify(s);else{let c=JSON.stringify(s);c!==a?(r(Ls(s)),a=c):(t(Ls(l)),a=JSON.stringify(l))}JSON.stringify(n()),JSON.stringify(e())});return()=>{Jr(o)}}function Ls(e){return typeof e=="object"?JSON.parse(JSON.stringify(e)):e}function pw(e){(Array.isArray(e)?e:[e]).forEach(t=>t(ri))}var Un={},Up=!1;function fw(e,t){if(Up||(Un=fr(Un),Up=!0),t===void 0)return Un[e];Un[e]=t,typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&Un[e].init(),ff(Un[e])}function hw(){return Un}var $f={};function mw(e,t){let n=typeof t!="function"?()=>t:t;return e instanceof Element?jf(e,n()):($f[e]=n,()=>{})}function gw(e){return Object.entries($f).forEach(([t,n])=>{Object.defineProperty(e,t,{get(){return(...r)=>n(...r)}})}),e}function jf(e,t,n){let r=[];for(;r.length;)r.pop()();let i=Object.entries(t).map(([o,s])=>({name:o,value:s})),a=vf(i);return i=i.map(o=>a.find(s=>s.name===o.name)?{name:`x-bind:${o.name}`,value:`"${o.value}"`}:o),il(e,i,n).map(o=>{r.push(o.runCleanups),o()}),()=>{for(;r.length;)r.pop()()}}var Hf={};function bw(e,t){Hf[e]=t}function yw(e,t){return Object.entries(Hf).forEach(([n,r])=>{Object.defineProperty(e,n,{get(){return(...i)=>r.bind(t)(...i)},enumerable:!1})}),e}var ww={get reactive(){return fr},get release(){return Jr},get effect(){return hr},get raw(){return Zp},version:"3.13.3",flushAndStopDeferringMutations:L1,dontAutoEvaluateFunctions:bf,disableEffectScheduling:y1,startObservingMutations:el,stopObservingMutations:df,setReactivityEngine:w1,onAttributeRemoved:cf,onAttributesAdded:lf,closestDataStack:dr,skipDuringClone:ni,onlyDuringClone:Z1,addRootSelector:tf,addInitSelector:nf,interceptClone:Pf,addScopeToNode:ei,deferMutations:C1,mapAttributes:al,evaluateLater:dt,interceptInit:T1,setEvaluator:N1,mergeProxies:ti,extractProp:dw,findClosest:Da,onElRemoved:Zs,closestRoot:Oa,destroyTree:Ys,interceptor:hf,transition:Hs,setStyles:Pa,mutateDom:$e,directive:Fe,entangle:Uf,throttle:zf,debounce:Bf,evaluate:Hn,initTree:pn,nextTick:sl,prefixed:mr,prefix:B1,plugin:pw,magic:$t,store:fw,start:x1,clone:J1,cloneNode:Q1,bound:uw,$data:pf,walk:kn,data:bw,bind:mw},ri=ww;function Wf(e,t){let n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}var vw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z2=Wf(vw+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"),xw=Object.freeze({}),Q2=Object.freeze([]),_w=Object.prototype.hasOwnProperty,Ra=(e,t)=>_w.call(e,t),Wn=Array.isArray,Zr=e=>qf(e)==="[object Map]",Tw=e=>typeof e=="string",cl=e=>typeof e=="symbol",Na=e=>e!==null&&typeof e=="object",Sw=Object.prototype.toString,qf=e=>Sw.call(e),Kf=e=>qf(e).slice(8,-1),ul=e=>Tw(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ma=e=>{let t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Aw=/-(\w)/g,J2=Ma(e=>e.replace(Aw,(t,n)=>n?n.toUpperCase():"")),Ew=/\B([A-Z])/g,eS=Ma(e=>e.replace(Ew,"-$1").toLowerCase()),kw=Ma(e=>e.charAt(0).toUpperCase()+e.slice(1)),tS=Ma(e=>e?`on${kw(e)}`:""),Gf=(e,t)=>e!==t&&(e===e||t===t),qs=new WeakMap,Gr=[],Jt,qn=Symbol("iterate"),Ks=Symbol("Map key iterate");function Cw(e){return e&&e._isEffect===!0}function Lw(e,t=xw){Cw(e)&&(e=e.raw);let n=Pw(e,t);return t.lazy||n(),n}function Ow(e){e.active&&(Vf(e),e.options.onStop&&e.options.onStop(),e.active=!1)}var Dw=0;function Pw(e,t){let n=function(){if(!n.active)return e();if(!Gr.includes(n)){Vf(n);try{return Nw(),Gr.push(n),Jt=n,e()}finally{Gr.pop(),Xf(),Jt=Gr[Gr.length-1]}}};return n.id=Dw++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}function Vf(e){let{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}var pr=!0,dl=[];function Rw(){dl.push(pr),pr=!1}function Nw(){dl.push(pr),pr=!0}function Xf(){let e=dl.pop();pr=e===void 0?!0:e}function Ut(e,t,n){if(!pr||Jt===void 0)return;let r=qs.get(e);r||qs.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=new Set),i.has(Jt)||(i.add(Jt),Jt.deps.push(i),Jt.options.onTrack&&Jt.options.onTrack({effect:Jt,target:e,type:t,key:n}))}function Ln(e,t,n,r,i,a){let o=qs.get(e);if(!o)return;let s=new Set,l=u=>{u&&u.forEach(p=>{(p!==Jt||p.allowRecurse)&&s.add(p)})};if(t==="clear")o.forEach(l);else if(n==="length"&&Wn(e))o.forEach((u,p)=>{(p==="length"||p>=r)&&l(u)});else switch(n!==void 0&&l(o.get(n)),t){case"add":Wn(e)?ul(n)&&l(o.get("length")):(l(o.get(qn)),Zr(e)&&l(o.get(Ks)));break;case"delete":Wn(e)||(l(o.get(qn)),Zr(e)&&l(o.get(Ks)));break;case"set":Zr(e)&&l(o.get(qn));break}let c=u=>{u.options.onTrigger&&u.options.onTrigger({effect:u,target:e,key:n,type:t,newValue:r,oldValue:i,oldTarget:a}),u.options.scheduler?u.options.scheduler(u):u()};s.forEach(c)}var Mw=Wf("__proto__,__v_isRef,__isVue"),Yf=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(cl)),Iw=Zf(),Fw=Zf(!0),$p=Bw();function Bw(){let e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){let r=Re(this);for(let a=0,o=this.length;a<o;a++)Ut(r,"get",a+"");let i=r[t](...n);return i===-1||i===!1?r[t](...n.map(Re)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Rw();let r=Re(this)[t].apply(this,n);return Xf(),r}}),e}function Zf(e=!1,t=!1){return function(n,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_raw"&&i===(e?t?ev:th:t?Jw:eh).get(n))return n;let a=Wn(n);if(!e&&a&&Ra($p,r))return Reflect.get($p,r,i);let o=Reflect.get(n,r,i);return(cl(r)?Yf.has(r):Mw(r))||(e||Ut(n,"get",r),t)?o:Gs(o)?!a||!ul(r)?o.value:o:Na(o)?e?nh(o):ml(o):o}}var zw=Uw();function Uw(e=!1){return function(t,n,r,i){let a=t[n];if(!e&&(r=Re(r),a=Re(a),!Wn(t)&&Gs(a)&&!Gs(r)))return a.value=r,!0;let o=Wn(t)&&ul(n)?Number(n)<t.length:Ra(t,n),s=Reflect.set(t,n,r,i);return t===Re(i)&&(o?Gf(r,a)&&Ln(t,"set",n,r,a):Ln(t,"add",n,r)),s}}function $w(e,t){let n=Ra(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Ln(e,"delete",t,void 0,r),i}function jw(e,t){let n=Reflect.has(e,t);return(!cl(t)||!Yf.has(t))&&Ut(e,"has",t),n}function Hw(e){return Ut(e,"iterate",Wn(e)?"length":qn),Reflect.ownKeys(e)}var Ww={get:Iw,set:zw,deleteProperty:$w,has:jw,ownKeys:Hw},qw={get:Fw,set(e,t){return!0},deleteProperty(e,t){return!0}},pl=e=>Na(e)?ml(e):e,fl=e=>Na(e)?nh(e):e,hl=e=>e,Ia=e=>Reflect.getPrototypeOf(e);function va(e,t,n=!1,r=!1){e=e.__v_raw;let i=Re(e),a=Re(t);t!==a&&!n&&Ut(i,"get",t),!n&&Ut(i,"get",a);let{has:o}=Ia(i),s=r?hl:n?fl:pl;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function xa(e,t=!1){let n=this.__v_raw,r=Re(n),i=Re(e);return e!==i&&!t&&Ut(r,"has",e),!t&&Ut(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function _a(e,t=!1){return e=e.__v_raw,!t&&Ut(Re(e),"iterate",qn),Reflect.get(e,"size",e)}function jp(e){e=Re(e);let t=Re(this);return Ia(t).has.call(t,e)||(t.add(e),Ln(t,"add",e,e)),this}function Hp(e,t){t=Re(t);let n=Re(this),{has:r,get:i}=Ia(n),a=r.call(n,e);a?Jf(n,r,e):(e=Re(e),a=r.call(n,e));let o=i.call(n,e);return n.set(e,t),a?Gf(t,o)&&Ln(n,"set",e,t,o):Ln(n,"add",e,t),this}function Wp(e){let t=Re(this),{has:n,get:r}=Ia(t),i=n.call(t,e);i?Jf(t,n,e):(e=Re(e),i=n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Ln(t,"delete",e,void 0,a),o}function qp(){let e=Re(this),t=e.size!==0,n=Zr(e)?new Map(e):new Set(e),r=e.clear();return t&&Ln(e,"clear",void 0,void 0,n),r}function Ta(e,t){return function(n,r){let i=this,a=i.__v_raw,o=Re(a),s=t?hl:e?fl:pl;return!e&&Ut(o,"iterate",qn),a.forEach((l,c)=>n.call(r,s(l),s(c),i))}}function Sa(e,t,n){return function(...r){let i=this.__v_raw,a=Re(i),o=Zr(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=i[e](...r),u=n?hl:t?fl:pl;return!t&&Ut(a,"iterate",l?Ks:qn),{next(){let{value:p,done:d}=c.next();return d?{value:p,done:d}:{value:s?[u(p[0]),u(p[1])]:u(p),done:d}},[Symbol.iterator](){return this}}}}function En(e){return function(...t){{let n=t[0]?`on key "${t[0]}" `:""}return e==="delete"?!1:this}}function Kw(){let e={get(i){return va(this,i)},get size(){return _a(this)},has:xa,add:jp,set:Hp,delete:Wp,clear:qp,forEach:Ta(!1,!1)},t={get(i){return va(this,i,!1,!0)},get size(){return _a(this)},has:xa,add:jp,set:Hp,delete:Wp,clear:qp,forEach:Ta(!1,!0)},n={get(i){return va(this,i,!0)},get size(){return _a(this,!0)},has(i){return xa.call(this,i,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:Ta(!0,!1)},r={get(i){return va(this,i,!0,!0)},get size(){return _a(this,!0)},has(i){return xa.call(this,i,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:Ta(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Sa(i,!1,!1),n[i]=Sa(i,!0,!1),t[i]=Sa(i,!1,!0),r[i]=Sa(i,!0,!0)}),[e,n,t,r]}var[Gw,Vw,Xw,Yw]=Kw();function Qf(e,t){let n=t?e?Yw:Xw:e?Vw:Gw;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(Ra(n,i)&&i in r?n:r,i,a)}var Zw={get:Qf(!1,!1)},Qw={get:Qf(!0,!1)};function Jf(e,t,n){let r=Re(n);if(r!==n&&t.call(e,r)){let i=Kf(e)}}var eh=new WeakMap,Jw=new WeakMap,th=new WeakMap,ev=new WeakMap;function tv(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nv(e){return e.__v_skip||!Object.isExtensible(e)?0:tv(Kf(e))}function ml(e){return e&&e.__v_isReadonly?e:rh(e,!1,Ww,Zw,eh)}function nh(e){return rh(e,!0,qw,Qw,th)}function rh(e,t,n,r,i){if(!Na(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=i.get(e);if(a)return a;let o=nv(e);if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Re(e){return e&&Re(e.__v_raw)||e}function Gs(e){return!!(e&&e.__v_isRef===!0)}$t("nextTick",()=>sl);$t("dispatch",e=>Xr.bind(Xr,e));$t("watch",(e,{evaluateLater:t,effect:n})=>(r,i)=>{let a=t(r),o=!0,s,l=n(()=>a(c=>{JSON.stringify(c),o?s=c:queueMicrotask(()=>{i(c,s),s=c}),o=!1}));e._x_effects.delete(l)});$t("store",hw);$t("data",e=>pf(e));$t("root",e=>Oa(e));$t("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=ti(rv(e))),e._x_refs_proxy));function rv(e){let t=[],n=e;for(;n;)n._x_refs&&t.push(n._x_refs),n=n.parentNode;return t}var Os={};function ih(e){return Os[e]||(Os[e]=0),++Os[e]}function iv(e,t){return Da(e,n=>{if(n._x_ids&&n._x_ids[t])return!0})}function av(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=ih(t))}$t("id",e=>(t,n=null)=>{let r=iv(e,t),i=r?r._x_ids[t]:ih(t);return n?`${t}-${i}-${n}`:`${t}-${i}`});$t("el",e=>e);ah("Focus","focus","focus");ah("Persist","persist","persist");function ah(e,t,n){$t(t,r=>dn(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,r))}Fe("modelable",(e,{expression:t},{effect:n,evaluateLater:r,cleanup:i})=>{let a=r(t),o=()=>{let u;return a(p=>u=p),u},s=r(`${t} = __placeholder`),l=u=>s(()=>{},{scope:{__placeholder:u}}),c=o();l(c),queueMicrotask(()=>{if(!e._x_model)return;e._x_removeModelListeners.default();let u=e._x_model.get,p=e._x_model.set,d=Uf({get(){return u()},set(f){p(f)}},{get(){return o()},set(f){l(f)}});i(d)})});Fe("teleport",(e,{modifiers:t,expression:n},{cleanup:r})=>{e.tagName.toLowerCase()!=="template"&&dn("x-teleport can only be used on a <template> tag",e);let i=Kp(n),a=e.content.cloneNode(!0).firstElementChild;e._x_teleport=a,a._x_teleportBack=e,e.setAttribute("data-teleport-template",!0),a.setAttribute("data-teleport-target",!0),e._x_forwardEvents&&e._x_forwardEvents.forEach(s=>{a.addEventListener(s,l=>{l.stopPropagation(),e.dispatchEvent(new l.constructor(l.type,l))})}),ei(a,{},e);let o=(s,l,c)=>{c.includes("prepend")?l.parentNode.insertBefore(s,l):c.includes("append")?l.parentNode.insertBefore(s,l.nextSibling):l.appendChild(s)};$e(()=>{o(a,i,t),pn(a),a._x_ignore=!0}),e._x_teleportPutBack=()=>{let s=Kp(n);$e(()=>{o(e._x_teleport,s,t)})},r(()=>a.remove())});var ov=document.createElement("div");function Kp(e){let t=ni(()=>document.querySelector(e),()=>ov)();return t||dn(`Cannot find x-teleport element for selector: "${e}"`),t}var oh=()=>{};oh.inline=(e,{modifiers:t},{cleanup:n})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,n(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})};Fe("ignore",oh);Fe("effect",ni((e,{expression:t},{effect:n})=>{n(dt(e,t))}));function Vs(e,t,n,r){let i=e,a=l=>r(l),o={},s=(l,c)=>u=>c(l,u);if(n.includes("dot")&&(t=sv(t)),n.includes("camel")&&(t=lv(t)),n.includes("passive")&&(o.passive=!0),n.includes("capture")&&(o.capture=!0),n.includes("window")&&(i=window),n.includes("document")&&(i=document),n.includes("debounce")){let l=n[n.indexOf("debounce")+1]||"invalid-wait",c=La(l.split("ms")[0])?Number(l.split("ms")[0]):250;a=Bf(a,c)}if(n.includes("throttle")){let l=n[n.indexOf("throttle")+1]||"invalid-wait",c=La(l.split("ms")[0])?Number(l.split("ms")[0]):250;a=zf(a,c)}return n.includes("prevent")&&(a=s(a,(l,c)=>{c.preventDefault(),l(c)})),n.includes("stop")&&(a=s(a,(l,c)=>{c.stopPropagation(),l(c)})),n.includes("self")&&(a=s(a,(l,c)=>{c.target===e&&l(c)})),(n.includes("away")||n.includes("outside"))&&(i=document,a=s(a,(l,c)=>{e.contains(c.target)||c.target.isConnected!==!1&&(e.offsetWidth<1&&e.offsetHeight<1||e._x_isShown!==!1&&l(c))})),n.includes("once")&&(a=s(a,(l,c)=>{l(c),i.removeEventListener(t,a,o)})),a=s(a,(l,c)=>{uv(t)&&dv(c,n)||l(c)}),i.addEventListener(t,a,o),()=>{i.removeEventListener(t,a,o)}}function sv(e){return e.replace(/-/g,".")}function lv(e){return e.toLowerCase().replace(/-(\w)/g,(t,n)=>n.toUpperCase())}function La(e){return!Array.isArray(e)&&!isNaN(e)}function cv(e){return[" ","_"].includes(e)?e:e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function uv(e){return["keydown","keyup"].includes(e)}function dv(e,t){let n=t.filter(i=>!["window","document","prevent","stop","once","capture"].includes(i));if(n.includes("debounce")){let i=n.indexOf("debounce");n.splice(i,La((n[i+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.includes("throttle")){let i=n.indexOf("throttle");n.splice(i,La((n[i+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.length===0||n.length===1&&Gp(e.key).includes(n[0]))return!1;let r=["ctrl","shift","alt","meta","cmd","super"].filter(i=>n.includes(i));return n=n.filter(i=>!r.includes(i)),!(r.length>0&&r.filter(i=>((i==="cmd"||i==="super")&&(i="meta"),e[`${i}Key`])).length===r.length&&Gp(e.key).includes(n[0]))}function Gp(e){if(!e)return[];e=cv(e);let t={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",equal:"=",minus:"-",underscore:"_"};return t[e]=e,Object.keys(t).map(n=>{if(t[n]===e)return n}).filter(n=>n)}Fe("model",(e,{modifiers:t,expression:n},{effect:r,cleanup:i})=>{let a=e;t.includes("parent")&&(a=e.parentNode);let o=dt(a,n),s;typeof n=="string"?s=dt(a,`${n} = __placeholder`):typeof n=="function"&&typeof n()=="string"?s=dt(a,`${n()} = __placeholder`):s=()=>{};let l=()=>{let d;return o(f=>d=f),Vp(d)?d.get():d},c=d=>{let f;o(b=>f=b),Vp(f)?f.set(d):s(()=>{},{scope:{__placeholder:d}})};typeof n=="string"&&e.type==="radio"&&$e(()=>{e.hasAttribute("name")||e.setAttribute("name",n)});var u=e.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(e.type)||t.includes("lazy")?"change":"input";let p=Cn?()=>{}:Vs(e,u,t,d=>{c(pv(e,t,d,l()))});if(t.includes("fill")&&([null,""].includes(l())||e.type==="checkbox"&&Array.isArray(l()))&&e.dispatchEvent(new Event(u,{})),e._x_removeModelListeners||(e._x_removeModelListeners={}),e._x_removeModelListeners.default=p,i(()=>e._x_removeModelListeners.default()),e.form){let d=Vs(e.form,"reset",[],f=>{sl(()=>e._x_model&&e._x_model.set(e.value))});i(()=>d())}e._x_model={get(){return l()},set(d){c(d)}},e._x_forceModelUpdate=d=>{d===void 0&&typeof n=="string"&&n.match(/\./)&&(d=""),window.fromModel=!0,$e(()=>Nf(e,"value",d)),delete window.fromModel},r(()=>{let d=l();t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate(d)})});function pv(e,t,n,r){return $e(()=>{if(n instanceof CustomEvent&&n.detail!==void 0)return n.detail!==null&&n.detail!==void 0?n.detail:n.target.value;if(e.type==="checkbox")if(Array.isArray(r)){let i=null;return t.includes("number")?i=Ds(n.target.value):t.includes("boolean")?i=Ea(n.target.value):i=n.target.value,n.target.checked?r.concat([i]):r.filter(a=>!fv(a,i))}else return n.target.checked;else return e.tagName.toLowerCase()==="select"&&e.multiple?t.includes("number")?Array.from(n.target.selectedOptions).map(i=>{let a=i.value||i.text;return Ds(a)}):t.includes("boolean")?Array.from(n.target.selectedOptions).map(i=>{let a=i.value||i.text;return Ea(a)}):Array.from(n.target.selectedOptions).map(i=>i.value||i.text):t.includes("number")?Ds(n.target.value):t.includes("boolean")?Ea(n.target.value):t.includes("trim")?n.target.value.trim():n.target.value})}function Ds(e){let t=e?parseFloat(e):null;return hv(t)?t:e}function fv(e,t){return e==t}function hv(e){return!Array.isArray(e)&&!isNaN(e)}function Vp(e){return e!==null&&typeof e=="object"&&typeof e.get=="function"&&typeof e.set=="function"}Fe("cloak",e=>queueMicrotask(()=>$e(()=>e.removeAttribute(mr("cloak")))));nf(()=>`[${mr("init")}]`);Fe("init",ni((e,{expression:t},{evaluate:n})=>typeof t=="string"?!!t.trim()&&n(t,{},!1):n(t,{},!1)));Fe("text",(e,{expression:t},{effect:n,evaluateLater:r})=>{let i=r(t);n(()=>{i(a=>{$e(()=>{e.textContent=a})})})});Fe("html",(e,{expression:t},{effect:n,evaluateLater:r})=>{let i=r(t);n(()=>{i(a=>{$e(()=>{e.innerHTML=a,e._x_ignoreSelf=!0,pn(e),delete e._x_ignoreSelf})})})});al(Tf(":",Sf(mr("bind:"))));var sh=(e,{value:t,modifiers:n,expression:r,original:i},{effect:a})=>{if(!t){let s={};gw(s),dt(e,r)(l=>{jf(e,l,i)},{scope:s});return}if(t==="key")return mv(e,r);if(e._x_inlineBindings&&e._x_inlineBindings[t]&&e._x_inlineBindings[t].extract)return;let o=dt(e,r);a(()=>o(s=>{s===void 0&&typeof r=="string"&&r.match(/\./)&&(s=""),$e(()=>Nf(e,t,s,n))}))};sh.inline=(e,{value:t,modifiers:n,expression:r})=>{t&&(e._x_inlineBindings||(e._x_inlineBindings={}),e._x_inlineBindings[t]={expression:r,extract:!1})};Fe("bind",sh);function mv(e,t){e._x_keyExpression=t}tf(()=>`[${mr("data")}]`);Fe("data",(e,{expression:t},{cleanup:n})=>{if(gv(e))return;t=t===""?"{}":t;let r={};Is(r,e);let i={};yw(i,r);let a=Hn(e,t,{scope:i});(a===void 0||a===!0)&&(a={}),Is(a,e);let o=fr(a);ff(o);let s=ei(e,o);o.init&&Hn(e,o.init),n(()=>{o.destroy&&Hn(e,o.destroy),s()})});Pf((e,t)=>{e._x_dataStack&&(t._x_dataStack=e._x_dataStack,t.setAttribute("data-has-alpine-state",!0))});function gv(e){return Cn?Ws?!0:e.hasAttribute("data-has-alpine-state"):!1}Fe("show",(e,{modifiers:t,expression:n},{effect:r})=>{let i=dt(e,n);e._x_doHide||(e._x_doHide=()=>{$e(()=>{e.style.setProperty("display","none",t.includes("important")?"important":void 0)})}),e._x_doShow||(e._x_doShow=()=>{$e(()=>{e.style.length===1&&e.style.display==="none"?e.removeAttribute("style"):e.style.removeProperty("display")})});let a=()=>{e._x_doHide(),e._x_isShown=!1},o=()=>{e._x_doShow(),e._x_isShown=!0},s=()=>setTimeout(o),l=js(p=>p?o():a(),p=>{typeof e._x_toggleAndCascadeWithTransitions=="function"?e._x_toggleAndCascadeWithTransitions(e,p,o,a):p?s():a()}),c,u=!0;r(()=>i(p=>{!u&&p===c||(t.includes("immediate")&&(p?s():a()),l(p),c=p,u=!1)}))});Fe("for",(e,{expression:t},{effect:n,cleanup:r})=>{let i=yv(t),a=dt(e,i.items),o=dt(e,e._x_keyExpression||"index");e._x_prevKeys=[],e._x_lookup={},n(()=>bv(e,i,a,o)),r(()=>{Object.values(e._x_lookup).forEach(s=>s.remove()),delete e._x_prevKeys,delete e._x_lookup})});function bv(e,t,n,r){let i=o=>typeof o=="object"&&!Array.isArray(o),a=e;n(o=>{wv(o)&&o>=0&&(o=Array.from(Array(o).keys(),m=>m+1)),o===void 0&&(o=[]);let s=e._x_lookup,l=e._x_prevKeys,c=[],u=[];if(i(o))o=Object.entries(o).map(([m,h])=>{let y=Xp(t,h,m,o);r(w=>u.push(w),{scope:{index:m,...y}}),c.push(y)});else for(let m=0;m<o.length;m++){let h=Xp(t,o[m],m,o);r(y=>u.push(y),{scope:{index:m,...h}}),c.push(h)}let p=[],d=[],f=[],b=[];for(let m=0;m<l.length;m++){let h=l[m];u.indexOf(h)===-1&&f.push(h)}l=l.filter(m=>!f.includes(m));let g="template";for(let m=0;m<u.length;m++){let h=u[m],y=l.indexOf(h);if(y===-1)l.splice(m,0,h),p.push([g,m]);else if(y!==m){let w=l.splice(m,1)[0],T=l.splice(y-1,1)[0];l.splice(m,0,T),l.splice(y,0,w),d.push([w,T])}else b.push(h);g=h}for(let m=0;m<f.length;m++){let h=f[m];s[h]._x_effects&&s[h]._x_effects.forEach(Yp),s[h].remove(),s[h]=null,delete s[h]}for(let m=0;m<d.length;m++){let[h,y]=d[m],w=s[h],T=s[y],S=document.createElement("div");$e(()=>{T||dn('x-for ":key" is undefined or invalid',a),T.after(S),w.after(T),T._x_currentIfEl&&T.after(T._x_currentIfEl),S.before(w),w._x_currentIfEl&&w.after(w._x_currentIfEl),S.remove()}),T._x_refreshXForScope(c[u.indexOf(y)])}for(let m=0;m<p.length;m++){let[h,y]=p[m],w=h==="template"?a:s[h];w._x_currentIfEl&&(w=w._x_currentIfEl);let T=c[y],S=u[y],_=document.importNode(a.content,!0).firstElementChild,v=fr(T);ei(_,v,a),_._x_refreshXForScope=x=>{Object.entries(x).forEach(([A,k])=>{v[A]=k})},$e(()=>{w.after(_),pn(_)}),typeof S=="object"&&dn("x-for key cannot be an object, it must be a string or an integer",a),s[S]=_}for(let m=0;m<b.length;m++)s[b[m]]._x_refreshXForScope(c[u.indexOf(b[m])]);a._x_prevKeys=u})}function yv(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,n=/^\s*\(|\)\s*$/g,r=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,i=e.match(r);if(!i)return;let a={};a.items=i[2].trim();let o=i[1].replace(n,"").trim(),s=o.match(t);return s?(a.item=o.replace(t,"").trim(),a.index=s[1].trim(),s[2]&&(a.collection=s[2].trim())):a.item=o,a}function Xp(e,t,n,r){let i={};return/^\[.*\]$/.test(e.item)&&Array.isArray(t)?e.item.replace("[","").replace("]","").split(",").map(a=>a.trim()).forEach((a,o)=>{i[a]=t[o]}):/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&typeof t=="object"?e.item.replace("{","").replace("}","").split(",").map(a=>a.trim()).forEach(a=>{i[a]=t[a]}):i[e.item]=t,e.index&&(i[e.index]=n),e.collection&&(i[e.collection]=r),i}function wv(e){return!Array.isArray(e)&&!isNaN(e)}function lh(){}lh.inline=(e,{expression:t},{cleanup:n})=>{let r=Oa(e);r._x_refs||(r._x_refs={}),r._x_refs[t]=e,n(()=>delete r._x_refs[t])};Fe("ref",lh);Fe("if",(e,{expression:t},{effect:n,cleanup:r})=>{e.tagName.toLowerCase()!=="template"&&dn("x-if can only be used on a <template> tag",e);let i=dt(e,t),a=()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let s=e.content.cloneNode(!0).firstElementChild;return ei(s,{},e),$e(()=>{e.after(s),pn(s)}),e._x_currentIfEl=s,e._x_undoIf=()=>{kn(s,l=>{l._x_effects&&l._x_effects.forEach(Yp)}),s.remove(),delete e._x_currentIfEl},s},o=()=>{e._x_undoIf&&(e._x_undoIf(),delete e._x_undoIf)};n(()=>i(s=>{s?a():o()})),r(()=>e._x_undoIf&&e._x_undoIf())});Fe("id",(e,{expression:t},{evaluate:n})=>{n(t).forEach(r=>av(e,r))});al(Tf("@",Sf(mr("on:"))));Fe("on",ni((e,{value:t,modifiers:n,expression:r},{cleanup:i})=>{let a=r?dt(e,r):()=>{};e.tagName.toLowerCase()==="template"&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let o=Vs(e,t,n,s=>{a(()=>{},{scope:{$event:s},params:[s]})});i(()=>o())}));Fa("Collapse","collapse","collapse");Fa("Intersect","intersect","intersect");Fa("Focus","trap","focus");Fa("Mask","mask","mask");function Fa(e,t,n){Fe(t,r=>dn(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,r))}ri.setEvaluator(wf);ri.setReactivityEngine({reactive:ml,effect:Lw,release:Ow,raw:Re});var vv=ri,Ba=vv;var gl;function El(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function bh(e,t=","){return e.map(El).join(t)}var yh=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function Ua(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function $a(e,t="@media "){return t+_t(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function _t(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function xv(){}var et={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function wh(e){return e.match(/[-=:;]/g)?.length||0}function _l(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(wh(e),15)<<18}var _v=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function kl({n:e,i:t,v:n=[]},r,i,a){e&&(e=El({n:e,i:t,v:n})),a=[..._t(a)];for(let s of n){let l=r.theme("screens",s);for(let c of _t(l&&$a(l)||r.v(s))){var o;a.push(c),i|=l?67108864|_l(c):s=="dark"?1073741824:c[0]=="@"?_l(c):(o=c,1<<~(/:([a-z-]+)/.test(o)&&~_v.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:i,r:a,i:t}}var Cl=new Map;function ch(e){if(e.d){let t=[],n=bl(e.r.reduce((r,i)=>i[0]=="@"?(t.push(i),r):i?bl(r,a=>bl(i,o=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o);if(s){let l=a.indexOf(s[1]);return~l?a.slice(0,l)+s[0]+a.slice(l+s[1].length):yl(a,o)}return yl(o,a)})):r,"&"),r=>yl(r,e.n?"."+yh(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,i)=>i+"{"+r+"}",e.d)}}function bl(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,i)=>t(r)+i)}function yl(e,t){return e.replace(/&/g,t)}var uh=new Intl.Collator("en",{numeric:!0});function Tv(e,t){for(var n=0,r=e.length;n<r;){let i=r+n>>1;0>=vh(e[i],t)?n=i+1:r=i}return r}function vh(e,t){let n=e.p&et.o;return n==(t.p&et.o)&&(n==et.b||n==et.o)?0:e.p-t.p||e.o-t.o||uh.compare(dh(e.n),dh(t.n))||uh.compare(ph(e.n),ph(t.n))}function dh(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function ph(e){return(e||"").replace(/\W/g,t=>String.fromCharCode(127+t.charCodeAt(0)))+"\0"}function wl(e,t){return Math.round(parseInt(e,16)*t)}function On(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,i=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",i);if(e[0]=="#"&&(e.length==4||e.length==7)){let a=(e.length-1)/3,o=[17,1,.062272][a-1];return`rgba(${[wl(e.substr(1,a),o),wl(e.substr(1+a,a),o),wl(e.substr(1+2*a,a),o),i]})`}return i=="1"?e:i=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${i})`)}function xh(e,t,n,r,i=[]){return function a(o,{n:s,p:l,r:c=[],i:u},p){let d=[],f="",b=0,g=0;for(let y in o||{}){var m,h;let w=o[y];if(y[0]=="@"){if(!w)continue;if(y[1]=="a"){d.push(...Th(s,l,Ol(""+w),p,l,c,u,!0));continue}if(y[1]=="l"){for(let T of _t(w))d.push(...a(T,{n:s,p:(m=et[y[7]],l&~et.o|m),r:y[7]=="d"?[]:c,i:u},p));continue}if(y[1]=="i"){d.push(..._t(w).map(T=>({p:-1,o:0,r:[],d:y+" "+T})));continue}if(y[1]=="k"){d.push({p:et.d,o:0,r:[y],d:a(w,{p:et.d},p).map(ch).join("")});continue}if(y[1]=="f"){d.push(..._t(w).map(T=>({p:et.d,o:0,r:[y],d:a(T,{p:et.d},p).map(ch).join("")})));continue}}if(typeof w!="object"||Array.isArray(w))y=="label"&&w?s=w+Ua(JSON.stringify([l,u,o])):(w||w===0)&&(y=y.replace(/[A-Z]/g,T=>"-"+T.toLowerCase()),g+=1,b=Math.max(b,(h=y)[0]=="-"?0:wh(h)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(h)?+!!RegExp.$1||-!!RegExp.$2:0)+1),f+=(f?";":"")+_t(w).map(T=>p.s(y,_h(""+T,p.theme)+(u?" !important":""))).join(";"));else if(y[0]=="@"||y.includes("&")){let T=l;y[0]=="@"&&(y=y.replace(/\bscreen\(([^)]+)\)/g,(S,_)=>{let v=p.theme("screens",_);return v?(T|=67108864,$a(v,"")):S}),T|=_l(y)),d.push(...a(w,{n:s,p:T,r:[...c,y],i:u},p))}else d.push(...a(w,{p:l,r:[...c,y]},p))}return d.unshift({n:s,p:l,o:Math.max(0,15-g)+1.5*Math.min(b||15,15),r:c,d:f}),d.sort(vh)}(e,kl(t,n,r,i),n)}function _h(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,i,a,o="")=>{let s=t(i,o);return typeof s=="function"&&/color|fill|stroke/i.test(i)?On(s):""+_t(s).filter(l=>Object(l)!==l)})}function Ll(e,t){let n,r=[];for(let i of e)i.d&&i.n?n?.p==i.p&&""+n.r==""+i.r?(n.c=[n.c,i.c].filter(Boolean).join(" "),n.d=n.d+";"+i.d):r.push(n={...i,n:i.n&&t}):r.push({...i,n:i.n&&t});return r}function Tl(e,t,n=et.u,r,i){let a=[];for(let o of e)for(let s of function(l,c,u,p,d){l={...l,i:l.i||d};let f=function(b,g){let m=Cl.get(b.n);return m?m(b,g):g.r(b.n,b.v[0]=="dark")}(l,c);return f?typeof f=="string"?({r:p,p:u}=kl(l,c,u,p),Ll(Tl(Ol(f),c,u,p,l.i),l.n)):Array.isArray(f)?f.map(b=>{var g,m;return{o:0,...b,r:[..._t(p),..._t(b.r)],p:(g=u,m=b.p??u,g&~et.o|m)}}):xh(f,l,c,u,p):[{c:El(l),p:0,o:0,r:[]}]}(o,t,n,r,i))a.splice(Tv(a,s),0,s);return a}function Th(e,t,n,r,i,a,o,s){return Ll((s?n.flatMap(l=>Tl([l],r,i,a,o)):Tl(n,r,i,a,o)).map(l=>l.p&et.o&&(l.n||t==et.b)?{...l,p:l.p&~et.o|t,o:0}:l),e)}function Sv(e,t,n,r){var i;return i=(a,o)=>{let{n:s,p:l,r:c,i:u}=kl(a,o,t);return n&&Th(s,t,n,o,l,c,u,r)},Cl.set(e,i),e}function vl(e,t,n){if(e[e.length-1]!="("){let r=[],i=!1,a=!1,o="";for(let s of e)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),i=!i),s.endsWith(":")){r[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),a=!a),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(o+=(o&&"-")+s)}o&&(a&&(o="-"+o),t[0].push({n:o,v:r.filter(Av),i}))}}function Av(e,t,n){return n.indexOf(e)==t}var fh=new Map;function Ol(e){let t=fh.get(e);if(!t){let n=[],r=[[]],i=0,a=0,o=null,s=0,l=(c,u=0)=>{i!=s&&(n.push(e.slice(i,s+u)),c&&vl(n,r)),i=s+1};for(;s<e.length;s++){let c=e[s];if(a)e[s-1]!="\\"&&(a+=+(c=="[")||-(c=="]"));else if(c=="[")a+=1;else if(o)e[s-1]!="\\"&&o.test(e.slice(s))&&(o=null,i=s+RegExp.lastMatch.length);else if(c=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))o=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(c=="(")l(),n.push(c);else if(c==":")e[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(c)){l(!0);let u=n.lastIndexOf("(");if(c==")"){let p=n[u-1];if(/[~@]$/.test(p)){let d=r.shift();n.length=u,vl([...n,"#"],r);let{v:f}=r[0].pop();for(let b of d)b.v.splice(+(b.v[0]=="dark")-+(f[0]=="dark"),f.length);vl([...n,Sv(p.length>1?p.slice(0,-1)+Ua(JSON.stringify([p,d])):p+"("+bh(d)+")",et.a,d,/@$/.test(p))],r)}u=n.lastIndexOf("(",u-1)}n.length=u+1}else/[~@]/.test(c)&&e[s+1]=="("&&r.unshift([])}l(!0),fh.set(e,t=r[0])}return t}function Sh(e,t,n){return t.reduce((r,i,a)=>r+n(i)+e[a+1],e[0])}function Ah(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?Sh(e,t,n=>xl(n).trim()):t.filter(Boolean).reduce((n,r)=>n+xl(r),e?xl(e):"")}function xl(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=Ah(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var lS=Eh("@"),cS=Eh("~");function Eh(e){return new Proxy(function(n,...r){return t("",n,r)},{get(n,r){return r in n?n[r]:function(i,...a){return t(r,i,a)}}});function t(n,r,i){return bh(Ol(n+e+"("+Ah(r,i)+")"))}}function Sl(e,t){return Array.isArray(e)?hh(Sh(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?hh(e):[e]}var Ev=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function hh(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],i=[];for(;t=Ev.exec(e);)t[4]&&(n.shift(),i.shift()),t[3]?(i.unshift(t[3]),n.unshift({}),r.push(i.reduce((a,o)=>({[o]:a}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(i.reduce((a,o)=>({[o]:a}),n[0]))),n[0][t[1]]=t[2]);return r}function kh(e,...t){var n;let r=Sl(e,t),i=(r.find(a=>a.label)?.label||"css")+Ua(JSON.stringify(r));return n=(a,o)=>Ll(r.flatMap(s=>xh(s,a,o,et.o)),i),Cl.set(i,n),i}var uS=new Proxy(function(e,t){return mh("animation",e,t)},{get(e,t){return t in e?e[t]:function(n,r){return mh(t,n,r)}}});function mh(e,t,n){return{toString(){return kh({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}}function q(e,t,n){return[e,kv(t,n)]}function kv(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):Al(n,1)}):n=>e||{[n[1]]:Al(n,2)}}function Al(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function G(e,t,n,r){return[e,Cv(t,n,r)]}function Cv(e,t,n){let r=typeof t=="string"?(i,a)=>({[t]:n?n(i,a):i._}):t||(({1:i,_:a},o,s)=>({[i||s]:a}));return(i,a)=>{let o=Ch(e||i[1]),s=a.theme(o,i.$$)??gr(i.$$,o,a);if(s!=null)return i._=Al(i,0,s),r(i,a,o)}}function je(e,t={},n){return[e,Lv(t,n)]}function Lv(e={},t){return(n,r)=>{let{section:i=Ch(n[0]).replace("-","")+"Color"}=e,[a,o]=Ov(n.$$);if(!a)return;let s=r.theme(i,a)||gr(a,i,r);if(!s||typeof s=="object")return;let{opacityVariable:l=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:c=i.replace("Color","Opacity"),property:u=i,selector:p}=e,d=r.theme(c,o||"DEFAULT")||o&&gr(o,c,r),f=t||(({_:g})=>{let m=ii(u,g);return p?{[p]:m}:m});n._={value:On(s,{opacityVariable:l||void 0,opacityValue:d||void 0}),color:g=>On(s,g),opacityVariable:l||void 0,opacityValue:d||void 0};let b=f(n,r);if(!n.dark){let g=r.d(i,a,s);g&&g!==s&&(n._={value:On(g,{opacityVariable:l||void 0,opacityValue:d||"1"}),color:m=>On(g,m),opacityVariable:l||void 0,opacityValue:d||void 0},b={"&":b,[r.v("dark")]:f(n,r)})}return b}}function Ov(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function ii(e,t){let n={};return typeof t=="string"?n[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(n[t.opacityVariable]=t.opacityValue||"1"),n[e]=t.value),n}function gr(e,t,n){if(e[0]=="["&&e.slice(-1)=="]"){if(e=za(_h(e.slice(1,-1),n.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(t)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(t)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function Ch(e){return e.replace(/-./g,t=>t[1].toUpperCase())}function za(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(t,n="",r,i="")=>za(n)+r+za(i)):e.replace(/(^|[^\\])_+/g,(t,n)=>n+" ".repeat(t.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,t=>t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var dS=Symbol();var Lh=new Proxy(xv,{apply(e,t,n){return gl(n[0])},get(e,t){let n=gl[t];return typeof n=="function"?function(){return n.apply(gl,arguments)}:n}});var pS=function e(t){return new Proxy(function(n,...r){return gh(t,"",n,r)},{get(n,r){return r==="bind"?e:r in n?n[r]:function(i,...a){return gh(t,r,i,a)}}})}();function gh(e,t,n,r){return{toString(){let i=Sl(n,r),a=yh(t+Ua(JSON.stringify([t,i])));return(typeof e=="function"?e:Lh)(kh({[`@keyframes ${a}`]:Sl(n,r)})),a}}}var Oh={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...Tt(4,"rem",4,.5,.5),...Tt(12,"rem",4,5),14:"3.5rem",...Tt(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:we("blur"),backdropBrightness:we("brightness"),backdropContrast:we("contrast"),backdropGrayscale:we("grayscale"),backdropHueRotate:we("hueRotate"),backdropInvert:we("invert"),backdropOpacity:we("opacity"),backdropSaturate:we("saturate"),backdropSepia:we("sepia"),backgroundColor:we("colors"),backgroundImage:{none:"none"},backgroundOpacity:we("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...Tt(200,"",100,0,50),...Tt(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:we("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:we("spacing"),borderWidth:{DEFAULT:"1px",...Rt(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:we("colors"),caretColor:we("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...Tt(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:we("borderColor"),divideOpacity:we("borderOpacity"),divideWidth:we("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:({theme:e})=>({...e("colors"),none:"none"}),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...ai(2,6),...ai(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:we("spacing"),gradientColorStops:we("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...ai(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...ai(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...Tt(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...Tt(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:we("spacing"),placeholderColor:we("colors"),placeholderOpacity:we("opacity"),outlineColor:we("colors"),outlineOffset:Rt(8,"px"),outlineWidth:Rt(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:"#3b82f6"}),ringOffsetColor:we("colors"),ringOffsetWidth:Rt(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...Rt(8,"px")},rotate:{...Rt(2,"deg"),...Rt(12,"deg",3),...Rt(180,"deg",45)},saturate:Tt(200,"",100,0,50),scale:{...Tt(150,"",100,0,50),...Tt(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:we("spacing"),scrollPadding:we("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...Rt(2,"deg"),...Rt(12,"deg",3)},space:we("spacing"),stroke:({theme:e})=>({...e("colors"),none:"none"}),strokeWidth:Tt(2),textColor:we("colors"),textDecorationColor:we("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...Rt(8,"px")},textUnderlineOffset:{auto:"auto",...Rt(8,"px")},textIndent:we("spacing"),textOpacity:we("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:we("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...ai(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...Tt(50,"",1,0,10),auto:"auto"}};function ai(e,t){let n={};do for(var r=1;r<e;r++)n[`${r}/${e}`]=Number((r/e*100).toFixed(6))+"%";while(++e<=t);return n}function Rt(e,t,n=0){let r={};for(;n<=e;n=2*n||1)r[n]=n+t;return r}function Tt(e,t="",n=1,r=0,i=1,a={}){for(;r<=e;r+=i)a[r]=r/n+t;return a}function we(e){return({theme:t})=>t(e)}var OS={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${Oh.fontFamily.sans})`,fontFeatureSettings:"theme(fontFamily.sans[1].fontFeatureSettings, normal)"},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${Oh.fontFamily.mono})`,fontFeatureSettings:"theme(fontFamily.mono[1].fontFeatureSettings, normal)",fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},PS=[q("\\[([-\\w]+):(.+)]",({1:e,2:t},n)=>({"@layer overrides":{"&":{[e]:gr(`[${t}]`,"",n)}}})),q("(group|peer)([~/][^-[]+)?",({input:e},{h:t})=>[{c:t(e)}]),G("aspect-","aspectRatio"),q("container",(e,{theme:t})=>{let{screens:n=t("screens"),center:r,padding:i}=t("container"),a={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...o("xs")};for(let s in n){let l=n[s];typeof l=="string"&&(a[$a(l)]={"&":{maxWidth:l,...o(s)}})}return a;function o(s){let l=i&&(typeof i=="string"?i:i[s]||i.DEFAULT);if(l)return{paddingRight:l,paddingLeft:l}}}),G("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),q("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),q("box-(border|content)","boxSizing",({1:e})=>e+"-box"),q("hidden",{display:"none"}),q("table-(auto|fixed)","tableLayout"),q(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",q("isolate","isolation"),q("object-(contain|cover|fill|none|scale-down)","objectFit"),G("object-","objectPosition"),q("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",ja),q("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:t})=>({["overscroll-behavior"+e]:t})),q("(static|fixed|absolute|relative|sticky)","position"),G("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:t})=>({top:e!="-x"&&t,right:e!="-y"&&t,bottom:e!="-x"&&t,left:e!="-y"&&t})),G("-?(top|bottom|left|right)(?:$|-)","inset"),q("(visible|collapse)","visibility"),q("invisible",{visibility:"hidden"}),G("-?z-","zIndex"),q("flex-((row|col)(-reverse)?)","flexDirection",Dh),q("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),G("(flex-(?:grow|shrink))(?:$|-)"),G("(flex)-"),G("grow(?:$|-)","flexGrow"),G("shrink(?:$|-)","flexShrink"),G("basis-","flexBasis"),G("-?(order)-"),"-?(order)-(\\d+)",G("grid-cols-","gridTemplateColumns"),q("grid-cols-(\\d+)","gridTemplateColumns",Mh),G("col-","gridColumn"),q("col-(span)-(\\d+)","gridColumn",Nh),G("col-start-","gridColumnStart"),q("col-start-(auto|\\d+)","gridColumnStart"),G("col-end-","gridColumnEnd"),q("col-end-(auto|\\d+)","gridColumnEnd"),G("grid-rows-","gridTemplateRows"),q("grid-rows-(\\d+)","gridTemplateRows",Mh),G("row-","gridRow"),q("row-(span)-(\\d+)","gridRow",Nh),G("row-start-","gridRowStart"),q("row-start-(auto|\\d+)","gridRowStart"),G("row-end-","gridRowEnd"),q("row-end-(auto|\\d+)","gridRowEnd"),q("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>ja(Dh(e))),q("grid-flow-(dense)","gridAutoFlow"),G("auto-cols-","gridAutoColumns"),G("auto-rows-","gridAutoRows"),G("gap-x(?:$|-)","gap","columnGap"),G("gap-y(?:$|-)","gap","rowGap"),G("gap(?:$|-)","gap"),"(justify-(?:items|self))-",q("justify-","justifyContent",Ph),q("(content|items|self)-",e=>({["align-"+e[1]]:Ph(e)})),q("(place-(content|items|self))-",({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t})),G("p([xytrbl])?(?:$|-)","padding",br("padding")),G("-?m([xytrbl])?(?:$|-)","margin",br("margin")),G("-?space-(x|y)(?:$|-)","space",({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}})),q("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),G("w-","width"),G("min-w-","minWidth"),G("max-w-","maxWidth"),G("h-","height"),G("min-h-","minHeight"),G("max-h-","maxHeight"),G("font-","fontWeight"),G("font-","fontFamily",({_:e})=>typeof(e=_t(e))[1]=="string"?{fontFamily:jt(e)}:{fontFamily:jt(e[0]),...e[1]}),q("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),q("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),q("italic","fontStyle"),q("not-italic",{fontStyle:"normal"}),q("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:t="",3:n})=>t=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)",...Dn({"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"})}),G("tracking-","letterSpacing"),G("leading-","lineHeight"),q("list-(inside|outside)","listStylePosition"),G("list-","listStyleType"),q("list-","listStyleType"),G("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),je("placeholder-",{property:"color",selector:"&::placeholder"}),q("text-(left|center|right|justify|start|end)","textAlign"),q("text-(ellipsis|clip)","textOverflow"),G("text-opacity-","textOpacity","--tw-text-opacity"),je("text-",{property:"color"}),G("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),G("indent-","textIndent"),q("(overline|underline|line-through)","textDecorationLine"),q("no-underline",{textDecorationLine:"none"}),G("underline-offset-","textUnderlineOffset"),je("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),G("decoration-","textDecorationThickness"),q("decoration-","textDecorationStyle"),q("(uppercase|lowercase|capitalize)","textTransform"),q("normal-case",{textTransform:"none"}),q("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),q("align-","verticalAlign"),q("whitespace-","whiteSpace"),q("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),q("break-words",{overflowWrap:"break-word"}),q("break-all",{wordBreak:"break-all"}),q("break-keep",{wordBreak:"keep-all"}),je("caret-",{opacityVariable:!1,opacitySection:"opacity"}),je("accent-",{opacityVariable:!1,opacitySection:"opacity"}),q("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${Kn(e," ")},var(--tw-gradient-stops))`),je("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),je("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),je("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),q("bg-(fixed|local|scroll)","backgroundAttachment"),q("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),q(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),q("bg-blend-","backgroundBlendMode"),q("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),G("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),je("bg-",{section:"backgroundColor"}),G("bg-","backgroundImage"),G("bg-","backgroundPosition"),q("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",ja),G("bg-","backgroundSize"),G("rounded(?:$|-)","borderRadius"),G("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:t})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${Kn(n[0])}-radius`]:t,[`border-${Kn(n[1])}-radius`]:t}}),q("border-(collapse|separate)","borderCollapse"),G("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),q("border-(solid|dashed|dotted|double|none)","borderStyle"),G("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:t})=>({...Dn({"--tw-border-spacing-x":"0","--tw-border-spacing-y":"0"}),["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),je("border-([xytrbl])-",{section:"borderColor"},br("border","Color")),je("border-"),G("border-([xytrbl])(?:$|-)","borderWidth",br("border","Width")),G("border(?:$|-)","borderWidth"),G("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),q("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),q("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),G("divide-([xy])(?:$|-)","divideWidth",({1:e,_:t})=>{let n={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${Kn(n[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${Kn(n[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}}),je("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),G("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),je("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),G("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),q("ring-inset",{"--tw-ring-inset":"inset"}),je("ring-",{property:"--tw-ring-color"}),G("ring(?:$|-)","ringWidth",({_:e},{theme:t})=>({...Dn({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":On(t("ringOffsetColor","","#fff")),"--tw-ring-color":On(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}),"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),je("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),G("shadow(?:$|-)","boxShadow",({_:e})=>({...Dn({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}),"--tw-shadow":jt(e),"--tw-shadow-colored":jt(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),G("(opacity)-"),q("mix-blend-","mixBlendMode"),...Rh(),...Rh("backdrop-"),G("transition(?:$|-)","transitionProperty",(e,{theme:t})=>({transitionProperty:jt(e),transitionTimingFunction:e._=="none"?void 0:jt(t("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:jt(t("transitionDuration",""))})),G("duration(?:$|-)","transitionDuration","transitionDuration",jt),G("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",jt),G("delay(?:$|-)","transitionDelay","transitionDelay",jt),G("animate(?:$|-)","animation",(e,{theme:t,h:n,e:r})=>{let i=jt(e),a=i.split(" "),o=t("keyframes",a[0]);return o?{["@keyframes "+(a[0]=r(n(a[0])))]:o,animation:a.join(" ")}:{animation:i}}),"(transform)-(none)",q("transform",Pl),q("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":Ih(e=="gpu")})),G("scale(-[xy])?-","scale",({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...Pl()})),G("-?(rotate)-","rotate",Dl),G("-?(translate-[xy])-","translate",Dl),G("-?(skew-[xy])-","skew",Dl),q("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",ja),"(appearance)-",G("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",G("(cursor)-"),"(cursor)-",q("snap-(none)","scroll-snap-type"),q("snap-(x|y|both)",({1:e})=>({...Dn({"--tw-scroll-snap-strictness":"proximity"}),"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)"})),q("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),q("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),q("snap-(normal|always)","scroll-snap-stop"),q("scroll-(auto|smooth)","scroll-behavior"),G("scroll-p([xytrbl])?(?:$|-)","padding",br("scroll-padding")),G("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",br("scroll-margin")),q("touch-(auto|none|manipulation)","touch-action"),q("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:t,3:n})=>({...Dn({"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}),[`--tw-${t?"pan-x":n?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)"})),q("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),q("outline",{outlineStyle:"solid"}),q("outline-(dashed|dotted|double)","outlineStyle"),G("-?(outline-offset)-"),je("outline-",{opacityVariable:!1,opacitySection:"opacity"}),G("outline-","outlineWidth"),"(pointer-events)-",G("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],q("select-(none|text|all|auto)","userSelect"),je("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),je("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),G("stroke-","strokeWidth"),q("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),q("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function ja(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function Dh(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function Kn(e,t="-"){let n=[];for(let r of e)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(t)}function jt(e){return e&&""+(e._||e)}function Ph({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function br(e,t=""){return({1:n,_:r})=>{let i={x:"lr",y:"tb"}[n]||n+n;return i?{...ii(e+"-"+Kn(i[0])+t,r),...ii(e+"-"+Kn(i[1])+t,r)}:ii(e+t,r)}}function Rh(e=""){let t=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),n={};for(let r of t)n[`--tw-${e}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={...Dn(n),[`${e}filter`]:t.map(r=>`var(--tw-${e}${r})`).join(" ")},[`(${e}filter)-(none)`,q(`${e}filter`,n),...t.map(r=>G(`${r[0]=="h"?"-?":""}(${e}${r})(?:$|-)`,r,({1:i,_:a})=>({[`--tw-${i}`]:_t(a).map(o=>`${r}(${o})`).join(" "),...n})))]}function Dl({1:e,_:t}){return{["--tw-"+e]:t,...Pl()}}function Pl(){return{...Dn({"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":Ih()}),transform:"var(--tw-transform)"}}function Ih(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function Nh({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function Mh({1:e}){return`repeat(${e},minmax(0,1fr))`}function Dn(e){return{"@layer defaults":{"*,::before,::after":e,"::backdrop":e}}}var jh,be,Hh,Rv,oi,Fh,Nv,Wh={},qh=[],Mv=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Pn(e,t){for(var n in t)e[n]=t[n];return e}function Kh(e){var t=e.parentNode;t&&t.removeChild(e)}function Rl(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++Hh};return i==null&&be.vnode!=null&&be.vnode(a),a}function wr(e){return e.children}function Ha(e,t){this.props=e,this.context=t}function yr(e,t){if(t==null)return e.__?yr(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?yr(e):null}function Gh(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Gh(e)}}function Bh(e){(!e.__d&&(e.__d=!0)&&oi.push(e)&&!Wa.__r++||Fh!==be.debounceRendering)&&((Fh=be.debounceRendering)||setTimeout)(Wa)}function Wa(){for(var e;Wa.__r=oi.length;)e=oi.sort(function(t,n){return t.__v.__b-n.__v.__b}),oi=[],e.some(function(t){var n,r,i,a,o,s;t.__d&&(o=(a=(n=t).__v).__e,(s=n.__P)&&(r=[],(i=Pn({},a)).__v=a.__v+1,Zh(s,a,i,n.__n,s.ownerSVGElement!==void 0,a.__h!=null?[o]:null,r,o??yr(a),a.__h),Fv(r,a),a.__e!=o&&Gh(a)))})}function Vh(e,t,n,r,i,a,o,s,l,c){var u,p,d,f,b,g,m,h=r&&r.__k||qh,y=h.length;for(n.__k=[],u=0;u<t.length;u++)if((f=n.__k[u]=(f=t[u])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?Rl(null,f,null,null,f):Array.isArray(f)?Rl(wr,{children:f},null,null,null):f.__b>0?Rl(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(d=h[u])===null||d&&f.key==d.key&&f.type===d.type)h[u]=void 0;else for(p=0;p<y;p++){if((d=h[p])&&f.key==d.key&&f.type===d.type){h[p]=void 0;break}d=null}Zh(e,f,d=d||Wh,i,a,o,s,l,c),b=f.__e,(p=f.ref)&&d.ref!=p&&(m||(m=[]),d.ref&&m.push(d.ref,null,f),m.push(p,f.__c||b,f)),b!=null?(g==null&&(g=b),typeof f.type=="function"&&f.__k===d.__k?f.__d=l=Xh(f,l,e):l=Yh(e,f,d,h,b,l),typeof n.type=="function"&&(n.__d=l)):l&&d.__e==l&&l.parentNode!=e&&(l=yr(d))}for(n.__e=g,u=y;u--;)h[u]!=null&&(typeof n.type=="function"&&h[u].__e!=null&&h[u].__e==n.__d&&(n.__d=yr(r,u+1)),Jh(h[u],h[u]));if(m)for(u=0;u<m.length;u++)Qh(m[u],m[++u],m[++u])}function Xh(e,t,n){for(var r,i=e.__k,a=0;i&&a<i.length;a++)(r=i[a])&&(r.__=e,t=typeof r.type=="function"?Xh(r,t,n):Yh(n,r,r,i,r.__e,t));return t}function Yh(e,t,n,r,i,a){var o,s,l;if(t.__d!==void 0)o=t.__d,t.__d=void 0;else if(n==null||i!=a||i.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(i),o=null;else{for(s=a,l=0;(s=s.nextSibling)&&l<r.length;l+=2)if(s==i)break e;e.insertBefore(i,a),o=a}return o!==void 0?o:i.nextSibling}function Iv(e,t,n,r,i){var a;for(a in n)a==="children"||a==="key"||a in t||qa(e,a,null,n[a],r);for(a in t)i&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||qa(e,a,t[a],n[a],r)}function zh(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Mv.test(t)?n:n+"px"}function qa(e,t,n,r,i){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||zh(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||zh(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r||e.addEventListener(t,a?$h:Uh,a):e.removeEventListener(t,a?$h:Uh,a);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Uh(e){this.l[e.type+!1](be.event?be.event(e):e)}function $h(e){this.l[e.type+!0](be.event?be.event(e):e)}function Zh(e,t,n,r,i,a,o,s,l){var c,u,p,d,f,b,g,m,h,y,w,T,S,_=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,s=t.__e=n.__e,t.__h=null,a=[s]),(c=be.__b)&&c(t);try{e:if(typeof _=="function"){if(m=t.props,h=(c=_.contextType)&&r[c.__c],y=c?h?h.props.value:c.__:r,n.__c?g=(u=t.__c=n.__c).__=u.__E:("prototype"in _&&_.prototype.render?t.__c=u=new _(m,y):(t.__c=u=new Ha(m,y),u.constructor=_,u.render=zv),h&&h.sub(u),u.props=m,u.state||(u.state={}),u.context=y,u.__n=r,p=u.__d=!0,u.__h=[]),u.__s==null&&(u.__s=u.state),_.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Pn({},u.__s)),Pn(u.__s,_.getDerivedStateFromProps(m,u.__s))),d=u.props,f=u.state,p)_.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(_.getDerivedStateFromProps==null&&m!==d&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(m,y),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(m,u.__s,y)===!1||t.__v===n.__v){u.props=m,u.state=u.__s,t.__v!==n.__v&&(u.__d=!1),u.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(v){v&&(v.__=t)}),u.__h.length&&o.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(m,u.__s,y),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(d,f,b)})}if(u.context=y,u.props=m,u.__v=t,u.__P=e,w=be.__r,T=0,"prototype"in _&&_.prototype.render)u.state=u.__s,u.__d=!1,w&&w(t),c=u.render(u.props,u.state,u.context);else do u.__d=!1,w&&w(t),c=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++T<25);u.state=u.__s,u.getChildContext!=null&&(r=Pn(Pn({},r),u.getChildContext())),p||u.getSnapshotBeforeUpdate==null||(b=u.getSnapshotBeforeUpdate(d,f)),S=c!=null&&c.type===wr&&c.key==null?c.props.children:c,Vh(e,Array.isArray(S)?S:[S],t,n,r,i,a,o,s,l),u.base=t.__e,t.__h=null,u.__h.length&&o.push(u),g&&(u.__E=u.__=null),u.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Bv(n.__e,t,n,r,i,a,o,l);(c=be.diffed)&&c(t)}catch(v){t.__v=null,(l||a!=null)&&(t.__e=s,t.__h=!!l,a[a.indexOf(s)]=null),be.__e(v,t,n)}}function Fv(e,t){be.__c&&be.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){be.__e(r,n.__v)}})}function Bv(e,t,n,r,i,a,o,s){var l,c,u,p=n.props,d=t.props,f=t.type,b=0;if(f==="svg"&&(i=!0),a!=null){for(;b<a.length;b++)if((l=a[b])&&"setAttribute"in l==!!f&&(f?l.localName===f:l.nodeType===3)){e=l,a[b]=null;break}}if(e==null){if(f===null)return document.createTextNode(d);e=i?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,d.is&&d),a=null,s=!1}if(f===null)p===d||s&&e.data===d||(e.data=d);else{if(a=a&&jh.call(e.childNodes),c=(p=n.props||Wh).dangerouslySetInnerHTML,u=d.dangerouslySetInnerHTML,!s){if(a!=null)for(p={},b=0;b<e.attributes.length;b++)p[e.attributes[b].name]=e.attributes[b].value;(u||c)&&(u&&(c&&u.__html==c.__html||u.__html===e.innerHTML)||(e.innerHTML=u&&u.__html||""))}if(Iv(e,d,p,i,s),u)t.__k=[];else if(b=t.props.children,Vh(e,Array.isArray(b)?b:[b],t,n,r,i&&f!=="foreignObject",a,o,a?a[0]:n.__k&&yr(n,0),s),a!=null)for(b=a.length;b--;)a[b]!=null&&Kh(a[b]);s||("value"in d&&(b=d.value)!==void 0&&(b!==e.value||f==="progress"&&!b||f==="option"&&b!==p.value)&&qa(e,"value",b,p.value,!1),"checked"in d&&(b=d.checked)!==void 0&&b!==e.checked&&qa(e,"checked",b,p.checked,!1))}return e}function Qh(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){be.__e(r,n)}}function Jh(e,t,n){var r,i;if(be.unmount&&be.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Qh(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){be.__e(a,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Jh(r[i],t,typeof e.type!="function");n||e.__e==null||Kh(e.__e),e.__=e.__e=e.__d=void 0}function zv(e,t,n){return this.constructor(e,n)}jh=qh.slice,be={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(s){e=s}throw e}},Hh=0,Rv=function(e){return e!=null&&e.constructor===void 0},Ha.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Pn({},this.state),typeof e=="function"&&(e=e(Pn({},n),this.props)),e&&Pn(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Bh(this))},Ha.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Bh(this))},Ha.prototype.render=wr,oi=[],Wa.__r=0,Nv=0;var Uv,en,Nl,em;var sm=[],Ml=[],tm=be.__b,nm=be.__r,rm=be.diffed,im=be.__c,am=be.unmount;function $v(){for(var e;e=sm.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Ka),e.__H.__h.forEach(Il),e.__H.__h=[]}catch(t){e.__H.__h=[],be.__e(t,e.__v)}}be.__b=function(e){typeof e.type!="function"||e.o||e.type===wr?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),en=null,tm&&tm(e)},be.__r=function(e){nm&&nm(e),Uv=0;var t=(en=e.__c).__H;t&&(Nl===en?(t.__h=[],en.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Ml,n.__N=n.i=void 0})):(t.__h.forEach(Ka),t.__h.forEach(Il),t.__h=[])),Nl=en},be.diffed=function(e){rm&&rm(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(sm.push(t)!==1&&em===be.requestAnimationFrame||((em=be.requestAnimationFrame)||jv)($v)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Ml&&(n.__=n.__V),n.i=void 0,n.__V=Ml})),Nl=en=null},be.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ka),n.__h=n.__h.filter(function(r){return!r.__||Il(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],be.__e(r,n.__v)}}),im&&im(e,t)},be.unmount=function(e){am&&am(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Ka(r)}catch(i){t=i}}),n.__H=void 0,t&&be.__e(t,n.__v))};var om=typeof requestAnimationFrame=="function";function jv(e){var t,n=function(){clearTimeout(r),om&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);om&&(t=requestAnimationFrame(n))}function Ka(e){var t=en,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),en=t}function Il(e){var t=en;e.__c=e.__(),en=t}var Ga=globalThis||(typeof window<"u"?window:self),Hv=Object.create,Bl=Object.defineProperty,Wv=Object.getOwnPropertyDescriptor,qv=Object.getOwnPropertyNames,Kv=Object.getPrototypeOf,Gv=Object.prototype.hasOwnProperty,Vv=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Xv=(e,t)=>{for(var n in t)Bl(e,n,{get:t[n],enumerable:!0})},Fl=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of qv(t))!Gv.call(e,i)&&i!==n&&Bl(e,i,{get:()=>t[i],enumerable:!(r=Wv(t,i))||r.enumerable});return e},Yv=(e,t,n)=>(Fl(e,t,"default"),n&&Fl(n,t,"default")),cm=(e,t,n)=>(n=e!=null?Hv(Kv(e)):{},Fl(t||!e||!e.__esModule?Bl(n,"default",{value:e,enumerable:!0}):n,e)),um=Vv((e,t)=>{(function(n,r){typeof define=="function"&&define.amd?define([],r):typeof e<"u"?r():(r(),n.FileSaver={})})(e,function(){"use strict";function n(c,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type)?new Blob(["\uFEFF",c],{type:c.type}):c}function r(c,u,p){var d=new XMLHttpRequest;d.open("GET",c),d.responseType="blob",d.onload=function(){l(d.response,u,p)},d.onerror=function(){},d.send()}function i(c){var u=new XMLHttpRequest;u.open("HEAD",c,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function a(c){try{c.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),c.dispatchEvent(u)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Ga=="object"&&Ga.global===Ga?Ga:void 0,s=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(c,u,p){var d=o.URL||o.webkitURL,f=document.createElement("a");u=u||c.name||"download",f.download=u,f.rel="noopener",typeof c=="string"?(f.href=c,f.origin===location.origin?a(f):i(f.href)?r(c,u,p):a(f,f.target="_blank")):(f.href=d.createObjectURL(c),setTimeout(function(){d.revokeObjectURL(f.href)},4e4),setTimeout(function(){a(f)},0))}:"msSaveOrOpenBlob"in navigator?function(c,u,p){if(u=u||c.name||"download",typeof c!="string")navigator.msSaveOrOpenBlob(n(c,p),u);else if(i(c))r(c,u,p);else{var d=document.createElement("a");d.href=c,d.target="_blank",setTimeout(function(){a(d)})}}:function(c,u,p,d){if(d=d||open("","_blank"),d&&(d.document.title=d.document.body.innerText="downloading..."),typeof c=="string")return r(c,u,p);var f=c.type==="application/octet-stream",b=/constructor/i.test(o.HTMLElement)||o.safari,g=/CriOS\/[\d]+/.test(navigator.userAgent);if((g||f&&b||s)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var w=m.result;w=g?w:w.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=w:location=w,d=null},m.readAsDataURL(c)}else{var h=o.URL||o.webkitURL,y=h.createObjectURL(c);d?d.location=y:location.href=y,d=null,setTimeout(function(){h.revokeObjectURL(y)},4e4)}});o.saveAs=l.saveAs=l,typeof t<"u"&&(t.exports=l)})}),dm={};Xv(dm,{default:()=>si});var Zv=cm(um());Yv(dm,cm(um()));var{default:lm,...Qv}=Zv,si=lm!==void 0?lm:Qv;function li(){let e,t="pending",n=new Promise((r,i)=>{e={async resolve(a){await a,t="fulfilled",r(a)},reject(a){t="rejected",i(a)}}});return Object.defineProperty(n,"state",{get:()=>t}),Object.assign(n,e)}var pm=class{#e=0;#t=[];#n=[];#r=li();add(t){++this.#e,this.#i(t[Symbol.asyncIterator]())}async#i(t){try{let{value:n,done:r}=await t.next();r?--this.#e:this.#t.push({iterator:t,value:n})}catch(n){this.#n.push(n)}this.#r.resolve()}async*iterate(){for(;this.#e>0;){await this.#r;for(let t=0;t<this.#t.length;t++){let{iterator:n,value:r}=this.#t[t];yield r,this.#i(n)}if(this.#n.length){for(let t of this.#n)throw t;this.#n.length=0}this.#t.length=0,this.#r=li()}}[Symbol.asyncIterator](){return this.iterate()}};var{Deno:fm}=globalThis,iE=typeof fm?.noColor=="boolean"?fm.noColor:!0;var aE=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function zl(e){let t=atob(e),n=t.length,r=new Uint8Array(n);for(let i=0;i<n;i++)r[i]=t.charCodeAt(i);return r}var fE=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var Va=globalThis||(typeof window<"u"?window:self),tx=Object.create,$l=Object.defineProperty,nx=Object.getOwnPropertyDescriptor,rx=Object.getOwnPropertyNames,ix=Object.getPrototypeOf,ax=Object.prototype.hasOwnProperty,ox=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),sx=(e,t)=>{for(var n in t)$l(e,n,{get:t[n],enumerable:!0})},Ul=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of rx(t))!ax.call(e,i)&&i!==n&&$l(e,i,{get:()=>t[i],enumerable:!(r=nx(t,i))||r.enumerable});return e},lx=(e,t,n)=>(Ul(e,t,"default"),n&&Ul(n,t,"default")),mm=(e,t,n)=>(n=e!=null?tx(ix(e)):{},Ul(t||!e||!e.__esModule?$l(n,"default",{value:e,enumerable:!0}):n,e)),gm=ox((e,t)=>{var n="Expected a function",r=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u=typeof Va=="object"&&Va&&Va.Object===Object&&Va,p=typeof self=="object"&&self&&self.Object===Object&&self,d=u||p||Function("return this")(),f=Object.prototype,b=f.toString,g=Math.max,m=Math.min,h=function(){return d.Date.now()};function y(x,A,k){var C,D,O,I,N,F,z=0,H=!1,ae=!1,X=!0;if(typeof x!="function")throw new TypeError(n);A=v(A)||0,T(k)&&(H=!!k.leading,ae="maxWait"in k,O=ae?g(v(k.maxWait)||0,A):O,X="trailing"in k?!!k.trailing:X);function te(Q){var ie=C,oe=D;return C=D=void 0,z=Q,I=x.apply(oe,ie),I}function L(Q){return z=Q,N=setTimeout(Y,A),H?te(Q):I}function P(Q){var ie=Q-F,oe=Q-z,se=A-ie;return ae?m(se,O-oe):se}function $(Q){var ie=Q-F,oe=Q-z;return F===void 0||ie>=A||ie<0||ae&&oe>=O}function Y(){var Q=h();if($(Q))return K(Q);N=setTimeout(Y,P(Q))}function K(Q){return N=void 0,X&&C?te(Q):(C=D=void 0,I)}function ue(){N!==void 0&&clearTimeout(N),z=0,C=F=D=N=void 0}function pe(){return N===void 0?I:K(h())}function fe(){var Q=h(),ie=$(Q);if(C=arguments,D=this,F=Q,ie){if(N===void 0)return L(F);if(ae)return N=setTimeout(Y,A),te(F)}return N===void 0&&(N=setTimeout(Y,A)),I}return fe.cancel=ue,fe.flush=pe,fe}function w(x,A,k){var C=!0,D=!0;if(typeof x!="function")throw new TypeError(n);return T(k)&&(C="leading"in k?!!k.leading:C,D="trailing"in k?!!k.trailing:D),y(x,A,{leading:C,maxWait:A,trailing:D})}function T(x){var A=typeof x;return!!x&&(A=="object"||A=="function")}function S(x){return!!x&&typeof x=="object"}function _(x){return typeof x=="symbol"||S(x)&&b.call(x)==i}function v(x){if(typeof x=="number")return x;if(_(x))return r;if(T(x)){var A=typeof x.valueOf=="function"?x.valueOf():x;x=T(A)?A+"":A}if(typeof x!="string")return x===0?x:+x;x=x.replace(a,"");var k=s.test(x);return k||l.test(x)?c(x.slice(2),k?2:8):o.test(x)?r:+x}t.exports=w}),bm={};sx(bm,{default:()=>jl});var cx=mm(gm());lx(bm,mm(gm()));var{default:hm,...ux}=cx,jl=hm!==void 0?hm:ux;var dx=Object.create,Wl=Object.defineProperty,px=Object.getOwnPropertyDescriptor,fx=Object.getOwnPropertyNames,hx=Object.getPrototypeOf,mx=Object.prototype.hasOwnProperty,gx=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),bx=(e,t)=>{for(var n in t)Wl(e,n,{get:t[n],enumerable:!0})},Hl=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of fx(t))!mx.call(e,i)&&i!==n&&Wl(e,i,{get:()=>t[i],enumerable:!(r=px(t,i))||r.enumerable});return e},yx=(e,t,n)=>(Hl(e,t,"default"),n&&Hl(n,t,"default")),wm=(e,t,n)=>(n=e!=null?dx(hx(e)):{},Hl(t||!e||!e.__esModule?Wl(n,"default",{value:e,enumerable:!0}):n,e)),vm=gx((e,t)=>{(function(n,r){typeof e=="object"&&typeof t=="object"?t.exports=r():typeof define=="function"&&define.amd?define([],r):typeof e=="object"?e.notie=r():n.notie=r()})(e,function(){return function(n){function r(a){if(i[a])return i[a].exports;var o=i[a]={i:a,l:!1,exports:{}};return n[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var i={};return r.m=n,r.c=i,r.i=function(a){return a},r.d=function(a,o,s){r.o(a,o)||Object.defineProperty(a,o,{configurable:!1,enumerable:!0,get:s})},r.n=function(a){var o=a&&a.__esModule?function(){return a.default}:function(){return a};return r.d(o,"a",o),o},r.o=function(a,o){return Object.prototype.hasOwnProperty.call(a,o)},r.p="",r(r.s=1)}([function(n,r){n.exports=function(i){return i.webpackPolyfill||(i.deprecate=function(){},i.paths=[],i.children||(i.children=[]),Object.defineProperty(i,"loaded",{enumerable:!0,get:function(){return i.l}}),Object.defineProperty(i,"id",{enumerable:!0,get:function(){return i.i}}),i.webpackPolyfill=1),i}},function(n,r,i){"use strict";(function(a){var o,s,l,c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u};(function(u,p){c(r)==="object"&&c(a)==="object"?a.exports=p():(s=[],o=p,l=typeof o=="function"?o.apply(r,s):o,l!==void 0&&(a.exports=l))})(void 0,function(){return function(u){function p(f){if(d[f])return d[f].exports;var b=d[f]={i:f,l:!1,exports:{}};return u[f].call(b.exports,b,b.exports,p),b.l=!0,b.exports}var d={};return p.m=u,p.c=d,p.i=function(f){return f},p.d=function(f,b,g){p.o(f,b)||Object.defineProperty(f,b,{configurable:!1,enumerable:!0,get:g})},p.n=function(f){var b=f&&f.__esModule?function(){return f.default}:function(){return f};return p.d(b,"a",b),b},p.o=function(f,b){return Object.prototype.hasOwnProperty.call(f,b)},p.p="",p(p.s=0)}([function(u,p,d){function f(L,P){var $={};for(var Y in L)P.indexOf(Y)>=0||Object.prototype.hasOwnProperty.call(L,Y)&&($[Y]=L[Y]);return $}Object.defineProperty(p,"__esModule",{value:!0});var b=typeof Symbol=="function"&&c(Symbol.iterator)==="symbol"?function(L){return typeof L>"u"?"undefined":c(L)}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L>"u"?"undefined":c(L)},g=Object.assign||function(L){for(var P=1;P<arguments.length;P++){var $=arguments[P];for(var Y in $)Object.prototype.hasOwnProperty.call($,Y)&&(L[Y]=$[Y])}return L},m={top:"top",bottom:"bottom"},h={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:m.top,force:m.top,confirm:m.top,input:m.top,select:m.bottom,date:m.top}},y=p.setOptions=function(L){h=g({},h,L,{classes:g({},h.classes,L.classes),ids:g({},h.ids,L.ids),positions:g({},h.positions,L.positions)})},w=function(){return new Promise(function(L){return setTimeout(L,0)})},T=function(L){return new Promise(function(P){return setTimeout(P,1e3*L)})},S=function(){document.activeElement&&document.activeElement.blur()},_=function(){var L="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(P){var $=16*Math.random()|0,Y=P==="x"?$:3&$|8;return Y.toString(16)});return"notie-"+L},v={1:h.classes.backgroundSuccess,success:h.classes.backgroundSuccess,2:h.classes.backgroundWarning,warning:h.classes.backgroundWarning,3:h.classes.backgroundError,error:h.classes.backgroundError,4:h.classes.backgroundInfo,info:h.classes.backgroundInfo,5:h.classes.backgroundNeutral,neutral:h.classes.backgroundNeutral},x=function(){return h.transitionSelector+" "+h.transitionDuration+"s "+h.transitionCurve},A=function(L){return L.keyCode===13},k=function(L){return L.keyCode===27},C=function(L,P){L.classList.add(h.classes.container),L.style[P]="-10000px",document.body.appendChild(L),L.style[P]="-"+L.offsetHeight+"px",L.listener&&window.addEventListener("keydown",L.listener),w().then(function(){L.style.transition=x(),L.style[P]=0})},D=function(L,P){var $=document.getElementById(L);$&&($.style[P]="-"+$.offsetHeight+"px",$.listener&&window.removeEventListener("keydown",$.listener),T(h.transitionDuration).then(function(){$.parentNode&&$.parentNode.removeChild($)}))},O=function(L,P){var $=document.createElement("div");$.id=h.ids.overlay,$.classList.add(h.classes.overlay),$.classList.add(h.classes.backgroundOverlay),$.style.opacity=0,L&&h.overlayClickDismiss&&($.onclick=function(){D(L.id,P),I()}),document.body.appendChild($),w().then(function(){$.style.transition=x(),$.style.opacity=h.overlayOpacity})},I=function(){var L=document.getElementById(h.ids.overlay);L.style.opacity=0,T(h.transitionDuration).then(function(){L.parentNode&&L.parentNode.removeChild(L)})},N=p.hideAlerts=function(L){var P=document.getElementsByClassName(h.classes.alert);if(P.length){for(var $=0;$<P.length;$++){var Y=P[$];D(Y.id,Y.position)}L&&T(h.transitionDuration).then(function(){return L()})}},F=p.alert=function(L){var P=L.type,$=P===void 0?4:P,Y=L.text,K=L.time,ue=K===void 0?h.alertTime:K,pe=L.stay,fe=pe!==void 0&&pe,Q=L.position,ie=Q===void 0?h.positions.alert||ie.top:Q;S(),N();var oe=document.createElement("div"),se=_();oe.id=se,oe.position=ie,oe.classList.add(h.classes.textbox),oe.classList.add(v[$]),oe.classList.add(h.classes.alert),oe.innerHTML='<div class="'+h.classes.textboxInner+'">'+Y+"</div>",oe.onclick=function(){return D(se,ie)},oe.listener=function(V){(A(V)||k(V))&&N()},C(oe,ie),ue&&ue<1&&(ue=1),!fe&&ue&&T(ue).then(function(){return D(se,ie)})},z=p.force=function(L,P){var $=L.type,Y=$===void 0?5:$,K=L.text,ue=L.buttonText,pe=ue===void 0?"OK":ue,fe=L.callback,Q=L.position,ie=Q===void 0?h.positions.force||ie.top:Q;S(),N();var oe=document.createElement("div"),se=_();oe.id=se;var V=document.createElement("div");V.classList.add(h.classes.textbox),V.classList.add(h.classes.backgroundInfo),V.innerHTML='<div class="'+h.classes.textboxInner+'">'+K+"</div>";var re=document.createElement("div");re.classList.add(h.classes.button),re.classList.add(v[Y]),re.innerHTML=pe,re.onclick=function(){D(se,ie),I(),fe?fe():P&&P()},oe.appendChild(V),oe.appendChild(re),oe.listener=function(de){A(de)&&re.click()},C(oe,ie),O()},H=p.confirm=function(L,P,$){var Y=L.text,K=L.submitText,ue=K===void 0?"Yes":K,pe=L.cancelText,fe=pe===void 0?"Cancel":pe,Q=L.submitCallback,ie=L.cancelCallback,oe=L.position,se=oe===void 0?h.positions.confirm||se.top:oe;S(),N();var V=document.createElement("div"),re=_();V.id=re;var de=document.createElement("div");de.classList.add(h.classes.textbox),de.classList.add(h.classes.backgroundInfo),de.innerHTML='<div class="'+h.classes.textboxInner+'">'+Y+"</div>";var he=document.createElement("div");he.classList.add(h.classes.button),he.classList.add(h.classes.elementHalf),he.classList.add(h.classes.backgroundSuccess),he.innerHTML=ue,he.onclick=function(){D(re,se),I(),Q?Q():P&&P()};var ne=document.createElement("div");ne.classList.add(h.classes.button),ne.classList.add(h.classes.elementHalf),ne.classList.add(h.classes.backgroundError),ne.innerHTML=fe,ne.onclick=function(){D(re,se),I(),ie?ie():$&&$()},V.appendChild(de),V.appendChild(he),V.appendChild(ne),V.listener=function(Ee){A(Ee)?he.click():k(Ee)&&ne.click()},C(V,se),O(V,se)},ae=function(L,P,$){var Y=L.text,K=L.submitText,ue=K===void 0?"Submit":K,pe=L.cancelText,fe=pe===void 0?"Cancel":pe,Q=L.submitCallback,ie=L.cancelCallback,oe=L.position,se=oe===void 0?h.positions.input||se.top:oe,V=f(L,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);S(),N();var re=document.createElement("div"),de=_();re.id=de;var he=document.createElement("div");he.classList.add(h.classes.textbox),he.classList.add(h.classes.backgroundInfo),he.innerHTML='<div class="'+h.classes.textboxInner+'">'+Y+"</div>";var ne=document.createElement("input");ne.classList.add(h.classes.inputField),ne.setAttribute("autocapitalize",V.autocapitalize||"none"),ne.setAttribute("autocomplete",V.autocomplete||"off"),ne.setAttribute("autocorrect",V.autocorrect||"off"),ne.setAttribute("autofocus",V.autofocus||"true"),ne.setAttribute("inputmode",V.inputmode||"verbatim"),ne.setAttribute("max",V.max||""),ne.setAttribute("maxlength",V.maxlength||""),ne.setAttribute("min",V.min||""),ne.setAttribute("minlength",V.minlength||""),ne.setAttribute("placeholder",V.placeholder||""),ne.setAttribute("spellcheck",V.spellcheck||"default"),ne.setAttribute("step",V.step||"any"),ne.setAttribute("type",V.type||"text"),ne.value=V.value||"",V.allowed&&(ne.oninput=function(){var ve=void 0;if(Array.isArray(V.allowed)){for(var De="",We=V.allowed,ft=0;ft<We.length;ft++)We[ft]==="an"?De+="0-9a-zA-Z":We[ft]==="a"?De+="a-zA-Z":We[ft]==="n"&&(De+="0-9"),We[ft]==="s"&&(De+=" ");ve=new RegExp("[^"+De+"]","g")}else b(V.allowed)==="object"&&(ve=V.allowed);ne.value=ne.value.replace(ve,"")});var Ee=document.createElement("div");Ee.classList.add(h.classes.button),Ee.classList.add(h.classes.elementHalf),Ee.classList.add(h.classes.backgroundSuccess),Ee.innerHTML=ue,Ee.onclick=function(){D(de,se),I(),Q?Q(ne.value):P&&P(ne.value)};var Ne=document.createElement("div");Ne.classList.add(h.classes.button),Ne.classList.add(h.classes.elementHalf),Ne.classList.add(h.classes.backgroundError),Ne.innerHTML=fe,Ne.onclick=function(){D(de,se),I(),ie?ie(ne.value):$&&$(ne.value)},re.appendChild(he),re.appendChild(ne),re.appendChild(Ee),re.appendChild(Ne),re.listener=function(ve){A(ve)?Ee.click():k(ve)&&Ne.click()},C(re,se),ne.focus(),O(re,se)};p.input=ae;var X=p.select=function(L,P){var $=L.text,Y=L.cancelText,K=Y===void 0?"Cancel":Y,ue=L.cancelCallback,pe=L.choices,fe=L.position,Q=fe===void 0?h.positions.select||Q.top:fe;S(),N();var ie=document.createElement("div"),oe=_();ie.id=oe;var se=document.createElement("div");se.classList.add(h.classes.textbox),se.classList.add(h.classes.backgroundInfo),se.innerHTML='<div class="'+h.classes.textboxInner+'">'+$+"</div>",ie.appendChild(se),pe.forEach(function(re,de){var he=re.type,ne=he===void 0?1:he,Ee=re.text,Ne=re.handler,ve=document.createElement("div");ve.classList.add(v[ne]),ve.classList.add(h.classes.button),ve.classList.add(h.classes.selectChoice);var De=pe[de+1];De&&!De.type&&(De.type=1),De&&De.type===ne&&ve.classList.add(h.classes.selectChoiceRepeated),ve.innerHTML=Ee,ve.onclick=function(){D(oe,Q),I(),Ne()},ie.appendChild(ve)});var V=document.createElement("div");V.classList.add(h.classes.backgroundNeutral),V.classList.add(h.classes.button),V.innerHTML=K,V.onclick=function(){D(oe,Q),I(),ue?ue():P&&P()},ie.appendChild(V),ie.listener=function(re){k(re)&&V.click()},C(ie,Q),O(ie,Q)},te=p.date=function(L,P,$){var Y=L.value,K=Y===void 0?new Date:Y,ue=L.submitText,pe=ue===void 0?"OK":ue,fe=L.cancelText,Q=fe===void 0?"Cancel":fe,ie=L.submitCallback,oe=L.cancelCallback,se=L.position,V=se===void 0?h.positions.date||V.top:se;S(),N();var re="&#9662",de=document.createElement("div"),he=document.createElement("div"),ne=document.createElement("div"),Ee=function(j){de.innerHTML=h.dateMonths[j.getMonth()],he.innerHTML=j.getDate(),ne.innerHTML=j.getFullYear()},Ne=function(j){var Z=new Date(K.getFullYear(),K.getMonth()+1,0).getDate(),le=j.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(le)>Z&&(le=Z.toString()),j.target.textContent=le,Number(le)<1&&(le="1"),K.setDate(Number(le))},ve=function(j){var Z=j.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);j.target.textContent=Z,K.setFullYear(Number(Z))},De=function(j){Ee(K)},We=function(j){var Z=new Date(K.getFullYear(),K.getMonth()+j+1,0).getDate();K.getDate()>Z&&K.setDate(Z),K.setMonth(K.getMonth()+j),Ee(K)},ft=function(j){K.setDate(K.getDate()+j),Ee(K)},hn=function(j){var Z=K.getFullYear()+j;Z<0?K.setFullYear(0):K.setFullYear(K.getFullYear()+j),Ee(K)},Et=document.createElement("div"),nt=_();Et.id=nt;var qt=document.createElement("div");qt.classList.add(h.classes.backgroundInfo);var qe=document.createElement("div");qe.classList.add(h.classes.dateSelectorInner);var ht=document.createElement("div");ht.classList.add(h.classes.button),ht.classList.add(h.classes.elementThird),ht.classList.add(h.classes.dateSelectorUp),ht.innerHTML=re;var Ke=document.createElement("div");Ke.classList.add(h.classes.button),Ke.classList.add(h.classes.elementThird),Ke.classList.add(h.classes.dateSelectorUp),Ke.innerHTML=re;var ot=document.createElement("div");ot.classList.add(h.classes.button),ot.classList.add(h.classes.elementThird),ot.classList.add(h.classes.dateSelectorUp),ot.innerHTML=re,de.classList.add(h.classes.element),de.classList.add(h.classes.elementThird),de.innerHTML=h.dateMonths[K.getMonth()],he.classList.add(h.classes.element),he.classList.add(h.classes.elementThird),he.setAttribute("contentEditable",!0),he.addEventListener("input",Ne),he.addEventListener("blur",De),he.innerHTML=K.getDate(),ne.classList.add(h.classes.element),ne.classList.add(h.classes.elementThird),ne.setAttribute("contentEditable",!0),ne.addEventListener("input",ve),ne.addEventListener("blur",De),ne.innerHTML=K.getFullYear();var Mt=document.createElement("div");Mt.classList.add(h.classes.button),Mt.classList.add(h.classes.elementThird),Mt.innerHTML=re;var R=document.createElement("div");R.classList.add(h.classes.button),R.classList.add(h.classes.elementThird),R.innerHTML=re;var B=document.createElement("div");B.classList.add(h.classes.button),B.classList.add(h.classes.elementThird),B.innerHTML=re,ht.onclick=function(){return We(1)},Ke.onclick=function(){return ft(1)},ot.onclick=function(){return hn(1)},Mt.onclick=function(){return We(-1)},R.onclick=function(){return ft(-1)},B.onclick=function(){return hn(-1)};var M=document.createElement("div");M.classList.add(h.classes.button),M.classList.add(h.classes.elementHalf),M.classList.add(h.classes.backgroundSuccess),M.innerHTML=pe,M.onclick=function(){D(nt,V),I(),ie?ie(K):P&&P(K)};var U=document.createElement("div");U.classList.add(h.classes.button),U.classList.add(h.classes.elementHalf),U.classList.add(h.classes.backgroundError),U.innerHTML=Q,U.onclick=function(){D(nt,V),I(),oe?oe(K):$&&$(K)},qe.appendChild(ht),qe.appendChild(Ke),qe.appendChild(ot),qe.appendChild(de),qe.appendChild(he),qe.appendChild(ne),qe.appendChild(Mt),qe.appendChild(R),qe.appendChild(B),qt.appendChild(qe),Et.appendChild(qt),Et.appendChild(M),Et.appendChild(U),Et.listener=function(j){A(j)?M.click():k(j)&&U.click()},C(Et,V),O(Et,V)};p.default={alert:F,force:z,confirm:H,input:ae,select:X,date:te,setOptions:y,hideAlerts:N}}])})}).call(r,i(0)(n))}])})}),xm={};bx(xm,{default:()=>Xa});var wx=wm(vm());yx(xm,wm(vm()));var{default:ym,...vx}=wx,Xa=ym!==void 0?ym:vx;var ql=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Kl(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function Em(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function km(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function xx(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,i=!0,a=0;a<n.length;a++)r.indexOf(n[a])===-1&&(i=!1);return i}var ui={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":ql?173:189,"=":ql?61:187,";":ql?59:186,"'":222,"[":219,"]":221,"\\":220},nn={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},Xl={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},tt={16:!1,18:!1,17:!1,91:!1},Be={};for(ci=1;ci<20;ci++)ui["f".concat(ci)]=111+ci;var ci,Oe=[],_m=!1,Cm="all",Lm=[],Za=function(e){return ui[e.toLowerCase()]||nn[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},_x=function(e){return Object.keys(ui).find(function(t){return ui[t]===e})},Tx=function(e){return Object.keys(nn).find(function(t){return nn[t]===e})};function Om(e){Cm=e||"all"}function di(){return Cm||"all"}function Sx(){return Oe.slice(0)}function Ax(){return Oe.map(function(e){return _x(e)||Tx(e)||String.fromCharCode(e)})}function Ex(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return(t.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(r=!1),r}function kx(e){return typeof e=="string"&&(e=Za(e)),Oe.indexOf(e)!==-1}function Cx(e,t){var n,r;e||(e=di());for(var i in Be)if(Object.prototype.hasOwnProperty.call(Be,i))for(n=Be[i],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;di()===e&&Om(t||"all")}function Lx(e){var t=e.keyCode||e.which||e.charCode,n=Oe.indexOf(t);if(n>=0&&Oe.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&Oe.splice(0,Oe.length),(t===93||t===224)&&(t=91),t in tt){tt[t]=!1;for(var r in nn)nn[r]===t&&(tn[r]=!1)}}function Ox(e){if(typeof e>"u")Object.keys(Be).forEach(function(o){return delete Be[o]});else if(Array.isArray(e))e.forEach(function(o){o.key&&Gl(o)});else if(typeof e=="object")e.key&&Gl(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0],a=n[1];typeof i=="function"&&(a=i,i=""),Gl({key:e,scope:i,method:a,splitKey:"+"})}}var Gl=function(e){var t=e.key,n=e.scope,r=e.method,i=e.splitKey,a=i===void 0?"+":i,o=km(t);o.forEach(function(s){var l=s.split(a),c=l.length,u=l[c-1],p=u==="*"?"*":Za(u);if(Be[p]){n||(n=di());var d=c>1?Em(nn,l):[];Be[p]=Be[p].filter(function(f){var b=r?f.method===r:!0;return!(b&&f.scope===n&&xx(f.mods,d))})}})};function Tm(e,t,n,r){if(t.element===r){var i;if(t.scope===n||t.scope==="all"){i=t.mods.length>0;for(var a in tt)Object.prototype.hasOwnProperty.call(tt,a)&&(!tt[a]&&t.mods.indexOf(+a)>-1||tt[a]&&t.mods.indexOf(+a)===-1)&&(i=!1);(t.mods.length===0&&!tt[16]&&!tt[18]&&!tt[17]&&!tt[91]||i||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function Sm(e,t){var n=Be["*"],r=e.keyCode||e.which||e.charCode;if(tn.filter.call(this,e)){if((r===93||r===224)&&(r=91),Oe.indexOf(r)===-1&&r!==229&&Oe.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(b){var g=Xl[b];e[b]&&Oe.indexOf(g)===-1?Oe.push(g):!e[b]&&Oe.indexOf(g)>-1?Oe.splice(Oe.indexOf(g),1):b==="metaKey"&&e[b]&&Oe.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(Oe=Oe.slice(Oe.indexOf(g))))}),r in tt){tt[r]=!0;for(var i in nn)nn[i]===r&&(tn[i]=!0);if(!n)return}for(var a in tt)Object.prototype.hasOwnProperty.call(tt,a)&&(tt[a]=e[Xl[a]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(Oe.indexOf(17)===-1&&Oe.push(17),Oe.indexOf(18)===-1&&Oe.push(18),tt[17]=!0,tt[18]=!0);var o=di();if(n)for(var s=0;s<n.length;s++)n[s].scope===o&&(e.type==="keydown"&&n[s].keydown||e.type==="keyup"&&n[s].keyup)&&Tm(e,n[s],o,t);if(r in Be){for(var l=0;l<Be[r].length;l++)if((e.type==="keydown"&&Be[r][l].keydown||e.type==="keyup"&&Be[r][l].keyup)&&Be[r][l].key){for(var c=Be[r][l],u=c.splitKey,p=c.key.split(u),d=[],f=0;f<p.length;f++)d.push(Za(p[f]));d.sort().join("")===Oe.sort().join("")&&Tm(e,c,o,t)}}}}function Dx(e){return Lm.indexOf(e)>-1}function tn(e,t,n){Oe=[];var r=km(e),i=[],a="all",o=document,s=0,l=!1,c=!0,u="+",p=!1;for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(a=t.scope),t.element&&(o=t.element),t.keyup&&(l=t.keyup),t.keydown!==void 0&&(c=t.keydown),t.capture!==void 0&&(p=t.capture),typeof t.splitKey=="string"&&(u=t.splitKey)),typeof t=="string"&&(a=t);s<r.length;s++)e=r[s].split(u),i=[],e.length>1&&(i=Em(nn,e)),e=e[e.length-1],e=e==="*"?"*":Za(e),e in Be||(Be[e]=[]),Be[e].push({keyup:l,keydown:c,scope:a,mods:i,shortcut:r[s],method:n,key:r[s],splitKey:u,element:o});typeof o<"u"&&!Dx(o)&&window&&(Lm.push(o),Kl(o,"keydown",function(d){Sm(d,o)},p),_m||(_m=!0,Kl(window,"focus",function(){Oe=[]},p)),Kl(o,"keyup",function(d){Sm(d,o),Lx(d)},p))}function Px(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(Be).forEach(function(n){var r=Be[n].filter(function(i){return i.scope===t&&i.shortcut===e});r.forEach(function(i){i&&i.method&&i.method()})})}var Vl={getPressedKeyString:Ax,setScope:Om,getScope:di,deleteScope:Cx,getPressedKeyCodes:Sx,isPressed:kx,filter:Ex,trigger:Px,unbind:Ox,keyMap:ui,modifier:nn,modifierMap:Xl};for(Ya in Vl)Object.prototype.hasOwnProperty.call(Vl,Ya)&&(tn[Ya]=Vl[Ya]);var Ya;typeof document<"u"&&(Am=window.hotkeys,tn.noConflict=function(e){return e&&window.hotkeys===tn&&(window.hotkeys=Am),tn},window.hotkeys=tn);var Am;var{entries:Bm,setPrototypeOf:Dm,isFrozen:Nx,getPrototypeOf:Mx,getOwnPropertyDescriptor:Ix}=Object,{freeze:pt,seal:Wt,create:Fx}=Object,{apply:tc,construct:nc}=typeof Reflect<"u"&&Reflect;tc||(tc=function(e,t,n){return e.apply(t,n)});pt||(pt=function(e){return e});Wt||(Wt=function(e){return e});nc||(nc=function(e,t){return new e(...t)});var Bx=Nt(Array.prototype.forEach),Pm=Nt(Array.prototype.pop),pi=Nt(Array.prototype.push),eo=Nt(String.prototype.toLowerCase),Yl=Nt(String.prototype.toString),zx=Nt(String.prototype.match),Ht=Nt(String.prototype.replace),Ux=Nt(String.prototype.indexOf),$x=Nt(String.prototype.trim),St=Nt(RegExp.prototype.test),fi=jx(TypeError);function Nt(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return tc(e,t,r)}}function jx(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return nc(e,n)}}function ge(e,t,n){var r;n=(r=n)!==null&&r!==void 0?r:eo,Dm&&Dm(e,null);let i=t.length;for(;i--;){let a=t[i];if(typeof a=="string"){let o=n(a);o!==a&&(Nx(t)||(t[i]=o),a=o)}e[a]=!0}return e}function vr(e){let t=Fx(null);for(let[n,r]of Bm(e))t[n]=r;return t}function Qa(e,t){for(;e!==null;){let r=Ix(e,t);if(r){if(r.get)return Nt(r.get);if(typeof r.value=="function")return Nt(r.value)}e=Mx(e)}function n(r){return null}return n}var Rm=pt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Zl=pt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ql=pt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Hx=pt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Jl=pt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Wx=pt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Nm=pt(["#text"]),Mm=pt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),ec=pt(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Im=pt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ja=pt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),qx=Wt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Kx=Wt(/<%[\w\W]*|[\w\W]*%>/gm),Gx=Wt(/\${[\w\W]*}/gm),Vx=Wt(/^data-[\-\w.\u00B7-\uFFFF]/),Xx=Wt(/^aria-[\-\w]+$/),zm=Wt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Yx=Wt(/^(?:\w+script|data):/i),Zx=Wt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Um=Wt(/^html$/i),Fm=Object.freeze({__proto__:null,MUSTACHE_EXPR:qx,ERB_EXPR:Kx,TMPLIT_EXPR:Gx,DATA_ATTR:Vx,ARIA_ATTR:Xx,IS_ALLOWED_URI:zm,IS_SCRIPT_OR_DATA:Yx,ATTR_WHITESPACE:Zx,DOCTYPE_NAME:Um}),Qx=()=>typeof window>"u"?null:window,Jx=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null,r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));let i="dompurify"+(n?"#"+n:"");try{return e.createPolicy(i,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return null}};function $m(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Qx(),t=E=>$m(E);if(t.version="3.0.3",t.removed=[],!e||!e.document||e.document.nodeType!==9)return t.isSupported=!1,t;let n=e.document,r=n.currentScript,{document:i}=e,{DocumentFragment:a,HTMLTemplateElement:o,Node:s,Element:l,NodeFilter:c,NamedNodeMap:u=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:p,DOMParser:d,trustedTypes:f}=e,b=l.prototype,g=Qa(b,"cloneNode"),m=Qa(b,"nextSibling"),h=Qa(b,"childNodes"),y=Qa(b,"parentNode");if(typeof o=="function"){let E=i.createElement("template");E.content&&E.content.ownerDocument&&(i=E.content.ownerDocument)}let w,T="",{implementation:S,createNodeIterator:_,createDocumentFragment:v,getElementsByTagName:x}=i,{importNode:A}=n,k={};t.isSupported=typeof Bm=="function"&&typeof y=="function"&&S&&S.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:C,ERB_EXPR:D,TMPLIT_EXPR:O,DATA_ATTR:I,ARIA_ATTR:N,IS_SCRIPT_OR_DATA:F,ATTR_WHITESPACE:z}=Fm,{IS_ALLOWED_URI:H}=Fm,ae=null,X=ge({},[...Rm,...Zl,...Ql,...Jl,...Nm]),te=null,L=ge({},[...Mm,...ec,...Im,...Ja]),P=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),$=null,Y=null,K=!0,ue=!0,pe=!1,fe=!0,Q=!1,ie=!1,oe=!1,se=!1,V=!1,re=!1,de=!1,he=!0,ne=!1,Ee="user-content-",Ne=!0,ve=!1,De={},We=null,ft=ge({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),hn=null,Et=ge({},["audio","video","img","source","image","track"]),nt=null,qt=ge({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),qe="http://www.w3.org/1998/Math/MathML",ht="http://www.w3.org/2000/svg",Ke="http://www.w3.org/1999/xhtml",ot=Ke,Mt=!1,R=null,B=ge({},[qe,ht,Ke],Yl),M,U=["application/xhtml+xml","text/html"],j="text/html",Z,le=null,Ye=i.createElement("form"),mt=function(E){return E instanceof RegExp||E instanceof Function},Rn=function(E){if(!(le&&le===E)){if((!E||typeof E!="object")&&(E={}),E=vr(E),M=U.indexOf(E.PARSER_MEDIA_TYPE)===-1?M=j:M=E.PARSER_MEDIA_TYPE,Z=M==="application/xhtml+xml"?Yl:eo,ae="ALLOWED_TAGS"in E?ge({},E.ALLOWED_TAGS,Z):X,te="ALLOWED_ATTR"in E?ge({},E.ALLOWED_ATTR,Z):L,R="ALLOWED_NAMESPACES"in E?ge({},E.ALLOWED_NAMESPACES,Yl):B,nt="ADD_URI_SAFE_ATTR"in E?ge(vr(qt),E.ADD_URI_SAFE_ATTR,Z):qt,hn="ADD_DATA_URI_TAGS"in E?ge(vr(Et),E.ADD_DATA_URI_TAGS,Z):Et,We="FORBID_CONTENTS"in E?ge({},E.FORBID_CONTENTS,Z):ft,$="FORBID_TAGS"in E?ge({},E.FORBID_TAGS,Z):{},Y="FORBID_ATTR"in E?ge({},E.FORBID_ATTR,Z):{},De="USE_PROFILES"in E?E.USE_PROFILES:!1,K=E.ALLOW_ARIA_ATTR!==!1,ue=E.ALLOW_DATA_ATTR!==!1,pe=E.ALLOW_UNKNOWN_PROTOCOLS||!1,fe=E.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Q=E.SAFE_FOR_TEMPLATES||!1,ie=E.WHOLE_DOCUMENT||!1,V=E.RETURN_DOM||!1,re=E.RETURN_DOM_FRAGMENT||!1,de=E.RETURN_TRUSTED_TYPE||!1,se=E.FORCE_BODY||!1,he=E.SANITIZE_DOM!==!1,ne=E.SANITIZE_NAMED_PROPS||!1,Ne=E.KEEP_CONTENT!==!1,ve=E.IN_PLACE||!1,H=E.ALLOWED_URI_REGEXP||zm,ot=E.NAMESPACE||Ke,P=E.CUSTOM_ELEMENT_HANDLING||{},E.CUSTOM_ELEMENT_HANDLING&&mt(E.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(P.tagNameCheck=E.CUSTOM_ELEMENT_HANDLING.tagNameCheck),E.CUSTOM_ELEMENT_HANDLING&&mt(E.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(P.attributeNameCheck=E.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),E.CUSTOM_ELEMENT_HANDLING&&typeof E.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(P.allowCustomizedBuiltInElements=E.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Q&&(ue=!1),re&&(V=!0),De&&(ae=ge({},[...Nm]),te=[],De.html===!0&&(ge(ae,Rm),ge(te,Mm)),De.svg===!0&&(ge(ae,Zl),ge(te,ec),ge(te,Ja)),De.svgFilters===!0&&(ge(ae,Ql),ge(te,ec),ge(te,Ja)),De.mathMl===!0&&(ge(ae,Jl),ge(te,Im),ge(te,Ja))),E.ADD_TAGS&&(ae===X&&(ae=vr(ae)),ge(ae,E.ADD_TAGS,Z)),E.ADD_ATTR&&(te===L&&(te=vr(te)),ge(te,E.ADD_ATTR,Z)),E.ADD_URI_SAFE_ATTR&&ge(nt,E.ADD_URI_SAFE_ATTR,Z),E.FORBID_CONTENTS&&(We===ft&&(We=vr(We)),ge(We,E.FORBID_CONTENTS,Z)),Ne&&(ae["#text"]=!0),ie&&ge(ae,["html","head","body"]),ae.table&&(ge(ae,["tbody"]),delete $.tbody),E.TRUSTED_TYPES_POLICY){if(typeof E.TRUSTED_TYPES_POLICY.createHTML!="function")throw fi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof E.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw fi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');w=E.TRUSTED_TYPES_POLICY,T=w.createHTML("")}else w===void 0&&(w=Jx(f,r)),w!==null&&typeof T=="string"&&(T=w.createHTML(""));pt&&pt(E),le=E}},_r=ge({},["mi","mo","mn","ms","mtext"]),Tr=ge({},["foreignobject","desc","title","annotation-xml"]),fg=ge({},["title","style","font","a","script"]),gi=ge({},Zl);ge(gi,Ql),ge(gi,Hx);let io=ge({},Jl);ge(io,Wx);let hg=function(E){let J=y(E);(!J||!J.tagName)&&(J={namespaceURI:ot,tagName:"template"});let W=eo(E.tagName),xe=eo(J.tagName);return R[E.namespaceURI]?E.namespaceURI===ht?J.namespaceURI===Ke?W==="svg":J.namespaceURI===qe?W==="svg"&&(xe==="annotation-xml"||_r[xe]):!!gi[W]:E.namespaceURI===qe?J.namespaceURI===Ke?W==="math":J.namespaceURI===ht?W==="math"&&Tr[xe]:!!io[W]:E.namespaceURI===Ke?J.namespaceURI===ht&&!Tr[xe]||J.namespaceURI===qe&&!_r[xe]?!1:!io[W]&&(fg[W]||!gi[W]):!!(M==="application/xhtml+xml"&&R[E.namespaceURI]):!1},Vn=function(E){pi(t.removed,{element:E});try{E.parentNode.removeChild(E)}catch{E.remove()}},ao=function(E,J){try{pi(t.removed,{attribute:J.getAttributeNode(E),from:J})}catch{pi(t.removed,{attribute:null,from:J})}if(J.removeAttribute(E),E==="is"&&!te[E])if(V||re)try{Vn(J)}catch{}else try{J.setAttribute(E,"")}catch{}},hc=function(E){let J,W;if(se)E="<remove></remove>"+E;else{let st=zx(E,/^[\r\n\t ]+/);W=st&&st[0]}M==="application/xhtml+xml"&&ot===Ke&&(E='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+E+"</body></html>");let xe=w?w.createHTML(E):E;if(ot===Ke)try{J=new d().parseFromString(xe,M)}catch{}if(!J||!J.documentElement){J=S.createDocument(ot,"template",null);try{J.documentElement.innerHTML=Mt?T:xe}catch{}}let ze=J.body||J.documentElement;return E&&W&&ze.insertBefore(i.createTextNode(W),ze.childNodes[0]||null),ot===Ke?x.call(J,ie?"html":"body")[0]:ie?J.documentElement:ze},mc=function(E){return _.call(E.ownerDocument||E,E,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,null,!1)},mg=function(E){return E instanceof p&&(typeof E.nodeName!="string"||typeof E.textContent!="string"||typeof E.removeChild!="function"||!(E.attributes instanceof u)||typeof E.removeAttribute!="function"||typeof E.setAttribute!="function"||typeof E.namespaceURI!="string"||typeof E.insertBefore!="function"||typeof E.hasChildNodes!="function")},bi=function(E){return typeof s=="object"?E instanceof s:E&&typeof E=="object"&&typeof E.nodeType=="number"&&typeof E.nodeName=="string"},rn=function(E,J,W){k[E]&&Bx(k[E],xe=>{xe.call(t,J,W,le)})},gc=function(E){let J;if(rn("beforeSanitizeElements",E,null),mg(E))return Vn(E),!0;let W=Z(E.nodeName);if(rn("uponSanitizeElement",E,{tagName:W,allowedTags:ae}),E.hasChildNodes()&&!bi(E.firstElementChild)&&(!bi(E.content)||!bi(E.content.firstElementChild))&&St(/<[/\w]/g,E.innerHTML)&&St(/<[/\w]/g,E.textContent))return Vn(E),!0;if(!ae[W]||$[W]){if(!$[W]&&yc(W)&&(P.tagNameCheck instanceof RegExp&&St(P.tagNameCheck,W)||P.tagNameCheck instanceof Function&&P.tagNameCheck(W)))return!1;if(Ne&&!We[W]){let xe=y(E)||E.parentNode,ze=h(E)||E.childNodes;if(ze&&xe){let st=ze.length;for(let gt=st-1;gt>=0;--gt)xe.insertBefore(g(ze[gt],!0),m(E))}}return Vn(E),!0}return E instanceof l&&!hg(E)||(W==="noscript"||W==="noembed")&&St(/<\/no(script|embed)/i,E.innerHTML)?(Vn(E),!0):(Q&&E.nodeType===3&&(J=E.textContent,J=Ht(J,C," "),J=Ht(J,D," "),J=Ht(J,O," "),E.textContent!==J&&(pi(t.removed,{element:E.cloneNode()}),E.textContent=J)),rn("afterSanitizeElements",E,null),!1)},bc=function(E,J,W){if(he&&(J==="id"||J==="name")&&(W in i||W in Ye))return!1;if(!(ue&&!Y[J]&&St(I,J))&&!(K&&St(N,J))){if(!te[J]||Y[J]){if(!(yc(E)&&(P.tagNameCheck instanceof RegExp&&St(P.tagNameCheck,E)||P.tagNameCheck instanceof Function&&P.tagNameCheck(E))&&(P.attributeNameCheck instanceof RegExp&&St(P.attributeNameCheck,J)||P.attributeNameCheck instanceof Function&&P.attributeNameCheck(J))||J==="is"&&P.allowCustomizedBuiltInElements&&(P.tagNameCheck instanceof RegExp&&St(P.tagNameCheck,W)||P.tagNameCheck instanceof Function&&P.tagNameCheck(W))))return!1}else if(!nt[J]&&!St(H,Ht(W,z,""))&&!((J==="src"||J==="xlink:href"||J==="href")&&E!=="script"&&Ux(W,"data:")===0&&hn[E])&&!(pe&&!St(F,Ht(W,z,"")))&&W)return!1}return!0},yc=function(E){return E.indexOf("-")>0},wc=function(E){let J,W,xe,ze;rn("beforeSanitizeAttributes",E,null);let{attributes:st}=E;if(!st)return;let gt={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:te};for(ze=st.length;ze--;){J=st[ze];let{name:Ge,namespaceURI:Xn}=J;if(W=Ge==="value"?J.value:$x(J.value),xe=Z(Ge),gt.attrName=xe,gt.attrValue=W,gt.keepAttr=!0,gt.forceKeepAttr=void 0,rn("uponSanitizeAttribute",E,gt),W=gt.attrValue,gt.forceKeepAttr||(ao(Ge,E),!gt.keepAttr))continue;if(!fe&&St(/\/>/i,W)){ao(Ge,E);continue}Q&&(W=Ht(W,C," "),W=Ht(W,D," "),W=Ht(W,O," "));let vc=Z(E.nodeName);if(bc(vc,xe,W)){if(ne&&(xe==="id"||xe==="name")&&(ao(Ge,E),W=Ee+W),w&&typeof f=="object"&&typeof f.getAttributeType=="function"&&!Xn)switch(f.getAttributeType(vc,xe)){case"TrustedHTML":{W=w.createHTML(W);break}case"TrustedScriptURL":{W=w.createScriptURL(W);break}}try{Xn?E.setAttributeNS(Xn,Ge,W):E.setAttribute(Ge,W),Pm(t.removed)}catch{}}}rn("afterSanitizeAttributes",E,null)},gg=function E(J){let W,xe=mc(J);for(rn("beforeSanitizeShadowDOM",J,null);W=xe.nextNode();)rn("uponSanitizeShadowNode",W,null),!gc(W)&&(W.content instanceof a&&E(W.content),wc(W));rn("afterSanitizeShadowDOM",J,null)};return t.sanitize=function(E){let J=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},W,xe,ze,st;if(Mt=!E,Mt&&(E="<!-->"),typeof E!="string"&&!bi(E))if(typeof E.toString=="function"){if(E=E.toString(),typeof E!="string")throw fi("dirty is not a string, aborting")}else throw fi("toString is not a function");if(!t.isSupported)return E;if(oe||Rn(J),t.removed=[],typeof E=="string"&&(ve=!1),ve){if(E.nodeName){let Xn=Z(E.nodeName);if(!ae[Xn]||$[Xn])throw fi("root node is forbidden and cannot be sanitized in-place")}}else if(E instanceof s)W=hc("<!---->"),xe=W.ownerDocument.importNode(E,!0),xe.nodeType===1&&xe.nodeName==="BODY"||xe.nodeName==="HTML"?W=xe:W.appendChild(xe);else{if(!V&&!Q&&!ie&&E.indexOf("<")===-1)return w&&de?w.createHTML(E):E;if(W=hc(E),!W)return V?null:de?T:""}W&&se&&Vn(W.firstChild);let gt=mc(ve?E:W);for(;ze=gt.nextNode();)gc(ze)||(ze.content instanceof a&&gg(ze.content),wc(ze));if(ve)return E;if(V){if(re)for(st=v.call(W.ownerDocument);W.firstChild;)st.appendChild(W.firstChild);else st=W;return(te.shadowroot||te.shadowrootmod)&&(st=A.call(n,st,!0)),st}let Ge=ie?W.outerHTML:W.innerHTML;return ie&&ae["!doctype"]&&W.ownerDocument&&W.ownerDocument.doctype&&W.ownerDocument.doctype.name&&St(Um,W.ownerDocument.doctype.name)&&(Ge="<!DOCTYPE "+W.ownerDocument.doctype.name+`>
`+Ge),Q&&(Ge=Ht(Ge,C," "),Ge=Ht(Ge,D," "),Ge=Ht(Ge,O," ")),w&&de?w.createHTML(Ge):Ge},t.setConfig=function(E){Rn(E),oe=!0},t.clearConfig=function(){le=null,oe=!1},t.isValidAttribute=function(E,J,W){le||Rn({});let xe=Z(E),ze=Z(J);return bc(xe,ze,W)},t.addHook=function(E,J){typeof J=="function"&&(k[E]=k[E]||[],pi(k[E],J))},t.removeHook=function(E){if(k[E])return Pm(k[E])},t.removeHooks=function(E){k[E]&&(k[E]=[])},t.removeAllHooks=function(){k={}},t}var hi=$m();var e_=Object.create,ic=Object.defineProperty,t_=Object.getOwnPropertyDescriptor,n_=Object.getOwnPropertyNames,r_=Object.getPrototypeOf,i_=Object.prototype.hasOwnProperty,ac=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),a_=(e,t)=>{for(var n in t)ic(e,n,{get:t[n],enumerable:!0})},rc=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of n_(t))!i_.call(e,i)&&i!==n&&ic(e,i,{get:()=>t[i],enumerable:!(r=t_(t,i))||r.enumerable});return e},o_=(e,t,n)=>(rc(e,t,"default"),n&&rc(n,t,"default")),Hm=(e,t,n)=>(n=e!=null?e_(r_(e)):{},rc(t||!e||!e.__esModule?ic(n,"default",{value:e,enumerable:!0}):n,e)),s_=ac((e,t)=>{function n(r,i){if(i&&i.documentElement)r=i,i=arguments[2];else if(!r||!r.documentElement)throw new Error("First argument to Readability constructor should be a document object.");if(i=i||{},this._doc=r,this._docJSDOMParser=this._doc.firstChild.__JSDOMParser__,this._articleTitle=null,this._articleByline=null,this._articleDir=null,this._articleSiteName=null,this._attempts=[],this._debug=!!i.debug,this._maxElemsToParse=i.maxElemsToParse||this.DEFAULT_MAX_ELEMS_TO_PARSE,this._nbTopCandidates=i.nbTopCandidates||this.DEFAULT_N_TOP_CANDIDATES,this._charThreshold=i.charThreshold||this.DEFAULT_CHAR_THRESHOLD,this._classesToPreserve=this.CLASSES_TO_PRESERVE.concat(i.classesToPreserve||[]),this._keepClasses=!!i.keepClasses,this._serializer=i.serializer||function(a){return a.innerHTML},this._disableJSONLD=!!i.disableJSONLD,this._allowedVideoRegex=i.allowedVideoRegex||this.REGEXPS.videos,this._flags=this.FLAG_STRIP_UNLIKELYS|this.FLAG_WEIGHT_CLASSES|this.FLAG_CLEAN_CONDITIONALLY,this._debug){let a=function(o){if(o.nodeType==o.TEXT_NODE)return`${o.nodeName} ("${o.textContent}")`;let s=Array.from(o.attributes||[],function(l){return`${l.name}="${l.value}"`}).join(" ");return`<${o.localName} ${s}>`};this.log=function(){if(typeof console<"u")Array.from(arguments,l=>l&&l.nodeType==this.ELEMENT_NODE?a(l):l).unshift("Reader: (Readability)");else if(typeof dump<"u"){var o=Array.prototype.map.call(arguments,function(s){return s&&s.nodeName?a(s):s}).join(" ");dump("Reader: (Readability) "+o+`
`)}}}else this.log=function(){}}n.prototype={FLAG_STRIP_UNLIKELYS:1,FLAG_WEIGHT_CLASSES:2,FLAG_CLEAN_CONDITIONALLY:4,ELEMENT_NODE:1,TEXT_NODE:3,DEFAULT_MAX_ELEMS_TO_PARSE:0,DEFAULT_N_TOP_CANDIDATES:5,DEFAULT_TAGS_TO_SCORE:"section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),DEFAULT_CHAR_THRESHOLD:500,REGEXPS:{unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i,positive:/article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,negative:/-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,extraneous:/print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,byline:/byline|author|dateline|writtenby|p-author/i,replaceFonts:/<(\/?)font[^>]*>/gi,normalize:/\s{2,}/g,videos:/\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,shareElements:/(\b|_)(share|sharedaddy)(\b|_)/i,nextLink:/(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,prevLink:/(prev|earl|old|new|<|«)/i,tokenize:/\W+/g,whitespace:/^\s*$/,hasContent:/\S$/,hashUrl:/^#.+/,srcsetUrl:/(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,b64DataUrl:/^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,jsonLdArticleTypes:/^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/},UNLIKELY_ROLES:["menu","menubar","complementary","navigation","alert","alertdialog","dialog"],DIV_TO_P_ELEMS:new Set(["BLOCKQUOTE","DL","DIV","IMG","OL","P","PRE","TABLE","UL"]),ALTER_TO_DIV_EXCEPTIONS:["DIV","ARTICLE","SECTION","P"],PRESENTATIONAL_ATTRIBUTES:["align","background","bgcolor","border","cellpadding","cellspacing","frame","hspace","rules","style","valign","vspace"],DEPRECATED_SIZE_ATTRIBUTE_ELEMS:["TABLE","TH","TD","HR","PRE"],PHRASING_ELEMS:["ABBR","AUDIO","B","BDO","BR","BUTTON","CITE","CODE","DATA","DATALIST","DFN","EM","EMBED","I","IMG","INPUT","KBD","LABEL","MARK","MATH","METER","NOSCRIPT","OBJECT","OUTPUT","PROGRESS","Q","RUBY","SAMP","SCRIPT","SELECT","SMALL","SPAN","STRONG","SUB","SUP","TEXTAREA","TIME","VAR","WBR"],CLASSES_TO_PRESERVE:["page"],HTML_ESCAPE_MAP:{lt:"<",gt:">",amp:"&",quot:'"',apos:"'"},_postProcessContent:function(r){this._fixRelativeUris(r),this._simplifyNestedElements(r),this._keepClasses||this._cleanClasses(r)},_removeNodes:function(r,i){if(this._docJSDOMParser&&r._isLiveNodeList)throw new Error("Do not pass live node lists to _removeNodes");for(var a=r.length-1;a>=0;a--){var o=r[a],s=o.parentNode;s&&(!i||i.call(this,o,a,r))&&s.removeChild(o)}},_replaceNodeTags:function(r,i){if(this._docJSDOMParser&&r._isLiveNodeList)throw new Error("Do not pass live node lists to _replaceNodeTags");for(let a of r)this._setNodeTag(a,i)},_forEachNode:function(r,i){Array.prototype.forEach.call(r,i,this)},_findNode:function(r,i){return Array.prototype.find.call(r,i,this)},_someNode:function(r,i){return Array.prototype.some.call(r,i,this)},_everyNode:function(r,i){return Array.prototype.every.call(r,i,this)},_concatNodeLists:function(){var r=Array.prototype.slice,i=r.call(arguments),a=i.map(function(o){return r.call(o)});return Array.prototype.concat.apply([],a)},_getAllNodesWithTag:function(r,i){return r.querySelectorAll?r.querySelectorAll(i.join(",")):[].concat.apply([],i.map(function(a){var o=r.getElementsByTagName(a);return Array.isArray(o)?o:Array.from(o)}))},_cleanClasses:function(r){var i=this._classesToPreserve,a=(r.getAttribute("class")||"").split(/\s+/).filter(function(o){return i.indexOf(o)!=-1}).join(" ");for(a?r.setAttribute("class",a):r.removeAttribute("class"),r=r.firstElementChild;r;r=r.nextElementSibling)this._cleanClasses(r)},_fixRelativeUris:function(r){var i=this._doc.baseURI,a=this._doc.documentURI;function o(c){if(i==a&&c.charAt(0)=="#")return c;try{return new URL(c,i).href}catch{}return c}var s=this._getAllNodesWithTag(r,["a"]);this._forEachNode(s,function(c){var u=c.getAttribute("href");if(u)if(u.indexOf("javascript:")===0)if(c.childNodes.length===1&&c.childNodes[0].nodeType===this.TEXT_NODE){var p=this._doc.createTextNode(c.textContent);c.parentNode.replaceChild(p,c)}else{for(var d=this._doc.createElement("span");c.firstChild;)d.appendChild(c.firstChild);c.parentNode.replaceChild(d,c)}else c.setAttribute("href",o(u))});var l=this._getAllNodesWithTag(r,["img","picture","figure","video","audio","source"]);this._forEachNode(l,function(c){var u=c.getAttribute("src"),p=c.getAttribute("poster"),d=c.getAttribute("srcset");if(u&&c.setAttribute("src",o(u)),p&&c.setAttribute("poster",o(p)),d){var f=d.replace(this.REGEXPS.srcsetUrl,function(b,g,m,h){return o(g)+(m||"")+h});c.setAttribute("srcset",f)}})},_simplifyNestedElements:function(r){for(var i=r;i;){if(i.parentNode&&["DIV","SECTION"].includes(i.tagName)&&!(i.id&&i.id.startsWith("readability"))){if(this._isElementWithoutContent(i)){i=this._removeAndGetNext(i);continue}else if(this._hasSingleTagInsideElement(i,"DIV")||this._hasSingleTagInsideElement(i,"SECTION")){for(var a=i.children[0],o=0;o<i.attributes.length;o++)a.setAttribute(i.attributes[o].name,i.attributes[o].value);i.parentNode.replaceChild(a,i),i=a;continue}}i=this._getNextNode(i)}},_getArticleTitle:function(){var r=this._doc,i="",a="";try{i=a=r.title.trim(),typeof i!="string"&&(i=a=this._getInnerText(r.getElementsByTagName("title")[0]))}catch{}var o=!1;function s(f){return f.split(/\s+/).length}if(/ [\|\-\\\/>»] /.test(i))o=/ [\\\/>»] /.test(i),i=a.replace(/(.*)[\|\-\\\/>»] .*/gi,"$1"),s(i)<3&&(i=a.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi,"$1"));else if(i.indexOf(": ")!==-1){var l=this._concatNodeLists(r.getElementsByTagName("h1"),r.getElementsByTagName("h2")),c=i.trim(),u=this._someNode(l,function(f){return f.textContent.trim()===c});u||(i=a.substring(a.lastIndexOf(":")+1),s(i)<3?i=a.substring(a.indexOf(":")+1):s(a.substr(0,a.indexOf(":")))>5&&(i=a))}else if(i.length>150||i.length<15){var p=r.getElementsByTagName("h1");p.length===1&&(i=this._getInnerText(p[0]))}i=i.trim().replace(this.REGEXPS.normalize," ");var d=s(i);return d<=4&&(!o||d!=s(a.replace(/[\|\-\\\/>»]+/g,""))-1)&&(i=a),i},_prepDocument:function(){var r=this._doc;this._removeNodes(this._getAllNodesWithTag(r,["style"])),r.body&&this._replaceBrs(r.body),this._replaceNodeTags(this._getAllNodesWithTag(r,["font"]),"SPAN")},_nextNode:function(r){for(var i=r;i&&i.nodeType!=this.ELEMENT_NODE&&this.REGEXPS.whitespace.test(i.textContent);)i=i.nextSibling;return i},_replaceBrs:function(r){this._forEachNode(this._getAllNodesWithTag(r,["br"]),function(i){for(var a=i.nextSibling,o=!1;(a=this._nextNode(a))&&a.tagName=="BR";){o=!0;var s=a.nextSibling;a.parentNode.removeChild(a),a=s}if(o){var l=this._doc.createElement("p");for(i.parentNode.replaceChild(l,i),a=l.nextSibling;a;){if(a.tagName=="BR"){var c=this._nextNode(a.nextSibling);if(c&&c.tagName=="BR")break}if(!this._isPhrasingContent(a))break;var u=a.nextSibling;l.appendChild(a),a=u}for(;l.lastChild&&this._isWhitespace(l.lastChild);)l.removeChild(l.lastChild);l.parentNode.tagName==="P"&&this._setNodeTag(l.parentNode,"DIV")}})},_setNodeTag:function(r,i){if(this.log("_setNodeTag",r,i),this._docJSDOMParser)return r.localName=i.toLowerCase(),r.tagName=i.toUpperCase(),r;for(var a=r.ownerDocument.createElement(i);r.firstChild;)a.appendChild(r.firstChild);r.parentNode.replaceChild(a,r),r.readability&&(a.readability=r.readability);for(var o=0;o<r.attributes.length;o++)try{a.setAttribute(r.attributes[o].name,r.attributes[o].value)}catch{}return a},_prepArticle:function(r){this._cleanStyles(r),this._markDataTables(r),this._fixLazyImages(r),this._cleanConditionally(r,"form"),this._cleanConditionally(r,"fieldset"),this._clean(r,"object"),this._clean(r,"embed"),this._clean(r,"footer"),this._clean(r,"link"),this._clean(r,"aside");var i=this.DEFAULT_CHAR_THRESHOLD;this._forEachNode(r.children,function(a){this._cleanMatchedNodes(a,function(o,s){return this.REGEXPS.shareElements.test(s)&&o.textContent.length<i})}),this._clean(r,"iframe"),this._clean(r,"input"),this._clean(r,"textarea"),this._clean(r,"select"),this._clean(r,"button"),this._cleanHeaders(r),this._cleanConditionally(r,"table"),this._cleanConditionally(r,"ul"),this._cleanConditionally(r,"div"),this._replaceNodeTags(this._getAllNodesWithTag(r,["h1"]),"h2"),this._removeNodes(this._getAllNodesWithTag(r,["p"]),function(a){var o=a.getElementsByTagName("img").length,s=a.getElementsByTagName("embed").length,l=a.getElementsByTagName("object").length,c=a.getElementsByTagName("iframe").length,u=o+s+l+c;return u===0&&!this._getInnerText(a,!1)}),this._forEachNode(this._getAllNodesWithTag(r,["br"]),function(a){var o=this._nextNode(a.nextSibling);o&&o.tagName=="P"&&a.parentNode.removeChild(a)}),this._forEachNode(this._getAllNodesWithTag(r,["table"]),function(a){var o=this._hasSingleTagInsideElement(a,"TBODY")?a.firstElementChild:a;if(this._hasSingleTagInsideElement(o,"TR")){var s=o.firstElementChild;if(this._hasSingleTagInsideElement(s,"TD")){var l=s.firstElementChild;l=this._setNodeTag(l,this._everyNode(l.childNodes,this._isPhrasingContent)?"P":"DIV"),a.parentNode.replaceChild(l,a)}}})},_initializeNode:function(r){switch(r.readability={contentScore:0},r.tagName){case"DIV":r.readability.contentScore+=5;break;case"PRE":case"TD":case"BLOCKQUOTE":r.readability.contentScore+=3;break;case"ADDRESS":case"OL":case"UL":case"DL":case"DD":case"DT":case"LI":case"FORM":r.readability.contentScore-=3;break;case"H1":case"H2":case"H3":case"H4":case"H5":case"H6":case"TH":r.readability.contentScore-=5;break}r.readability.contentScore+=this._getClassWeight(r)},_removeAndGetNext:function(r){var i=this._getNextNode(r,!0);return r.parentNode.removeChild(r),i},_getNextNode:function(r,i){if(!i&&r.firstElementChild)return r.firstElementChild;if(r.nextElementSibling)return r.nextElementSibling;do r=r.parentNode;while(r&&!r.nextElementSibling);return r&&r.nextElementSibling},_textSimilarity:function(r,i){var a=r.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean),o=i.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);if(!a.length||!o.length)return 0;var s=o.filter(c=>!a.includes(c)),l=s.join(" ").length/o.join(" ").length;return 1-l},_checkByline:function(r,i){if(this._articleByline)return!1;if(r.getAttribute!==void 0)var a=r.getAttribute("rel"),o=r.getAttribute("itemprop");return(a==="author"||o&&o.indexOf("author")!==-1||this.REGEXPS.byline.test(i))&&this._isValidByline(r.textContent)?(this._articleByline=r.textContent.trim(),!0):!1},_getNodeAncestors:function(r,i){i=i||0;for(var a=0,o=[];r.parentNode&&(o.push(r.parentNode),!(i&&++a===i));)r=r.parentNode;return o},_grabArticle:function(r){this.log("**** grabArticle ****");var i=this._doc,a=r!==null;if(r=r||this._doc.body,!r)return this.log("No body found in document. Abort."),null;for(var o=r.innerHTML;;){this.log("Starting grabArticle loop");var s=this._flagIsActive(this.FLAG_STRIP_UNLIKELYS),l=[],c=this._doc.documentElement;let se=!0;for(;c;){c.tagName==="HTML"&&(this._articleLang=c.getAttribute("lang"));var u=c.className+" "+c.id;if(!this._isProbablyVisible(c)){this.log("Removing hidden node - "+u),c=this._removeAndGetNext(c);continue}if(c.getAttribute("aria-modal")=="true"&&c.getAttribute("role")=="dialog"){c=this._removeAndGetNext(c);continue}if(this._checkByline(c,u)){c=this._removeAndGetNext(c);continue}if(se&&this._headerDuplicatesTitle(c)){this.log("Removing header: ",c.textContent.trim(),this._articleTitle.trim()),se=!1,c=this._removeAndGetNext(c);continue}if(s){if(this.REGEXPS.unlikelyCandidates.test(u)&&!this.REGEXPS.okMaybeItsACandidate.test(u)&&!this._hasAncestorTag(c,"table")&&!this._hasAncestorTag(c,"code")&&c.tagName!=="BODY"&&c.tagName!=="A"){this.log("Removing unlikely candidate - "+u),c=this._removeAndGetNext(c);continue}if(this.UNLIKELY_ROLES.includes(c.getAttribute("role"))){this.log("Removing content with role "+c.getAttribute("role")+" - "+u),c=this._removeAndGetNext(c);continue}}if((c.tagName==="DIV"||c.tagName==="SECTION"||c.tagName==="HEADER"||c.tagName==="H1"||c.tagName==="H2"||c.tagName==="H3"||c.tagName==="H4"||c.tagName==="H5"||c.tagName==="H6")&&this._isElementWithoutContent(c)){c=this._removeAndGetNext(c);continue}if(this.DEFAULT_TAGS_TO_SCORE.indexOf(c.tagName)!==-1&&l.push(c),c.tagName==="DIV"){for(var p=null,d=c.firstChild;d;){var f=d.nextSibling;if(this._isPhrasingContent(d))p!==null?p.appendChild(d):this._isWhitespace(d)||(p=i.createElement("p"),c.replaceChild(p,d),p.appendChild(d));else if(p!==null){for(;p.lastChild&&this._isWhitespace(p.lastChild);)p.removeChild(p.lastChild);p=null}d=f}if(this._hasSingleTagInsideElement(c,"P")&&this._getLinkDensity(c)<.25){var b=c.children[0];c.parentNode.replaceChild(b,c),c=b,l.push(c)}else this._hasChildBlockElement(c)||(c=this._setNodeTag(c,"P"),l.push(c))}c=this._getNextNode(c)}var g=[];this._forEachNode(l,function(V){if(!(!V.parentNode||typeof V.parentNode.tagName>"u")){var re=this._getInnerText(V);if(!(re.length<25)){var de=this._getNodeAncestors(V,5);if(de.length!==0){var he=0;he+=1,he+=re.split(",").length,he+=Math.min(Math.floor(re.length/100),3),this._forEachNode(de,function(ne,Ee){if(!(!ne.tagName||!ne.parentNode||typeof ne.parentNode.tagName>"u")){if(typeof ne.readability>"u"&&(this._initializeNode(ne),g.push(ne)),Ee===0)var Ne=1;else Ee===1?Ne=2:Ne=Ee*3;ne.readability.contentScore+=he/Ne}})}}}});for(var m=[],h=0,y=g.length;h<y;h+=1){var w=g[h],T=w.readability.contentScore*(1-this._getLinkDensity(w));w.readability.contentScore=T,this.log("Candidate:",w,"with score "+T);for(var S=0;S<this._nbTopCandidates;S++){var _=m[S];if(!_||T>_.readability.contentScore){m.splice(S,0,w),m.length>this._nbTopCandidates&&m.pop();break}}}var v=m[0]||null,x=!1,A;if(v===null||v.tagName==="BODY"){for(v=i.createElement("DIV"),x=!0;r.firstChild;)this.log("Moving child out:",r.firstChild),v.appendChild(r.firstChild);r.appendChild(v),this._initializeNode(v)}else if(v){for(var k=[],C=1;C<m.length;C++)m[C].readability.contentScore/v.readability.contentScore>=.75&&k.push(this._getNodeAncestors(m[C]));var D=3;if(k.length>=D)for(A=v.parentNode;A.tagName!=="BODY";){for(var O=0,I=0;I<k.length&&O<D;I++)O+=Number(k[I].includes(A));if(O>=D){v=A;break}A=A.parentNode}v.readability||this._initializeNode(v),A=v.parentNode;for(var N=v.readability.contentScore,F=N/3;A.tagName!=="BODY";){if(!A.readability){A=A.parentNode;continue}var z=A.readability.contentScore;if(z<F)break;if(z>N){v=A;break}N=A.readability.contentScore,A=A.parentNode}for(A=v.parentNode;A.tagName!="BODY"&&A.children.length==1;)v=A,A=v.parentNode;v.readability||this._initializeNode(v)}var H=i.createElement("DIV");a&&(H.id="readability-content");var ae=Math.max(10,v.readability.contentScore*.2);A=v.parentNode;for(var X=A.children,te=0,L=X.length;te<L;te++){var P=X[te],$=!1;if(this.log("Looking at sibling node:",P,P.readability?"with score "+P.readability.contentScore:""),this.log("Sibling has score",P.readability?P.readability.contentScore:"Unknown"),P===v)$=!0;else{var Y=0;if(P.className===v.className&&v.className!==""&&(Y+=v.readability.contentScore*.2),P.readability&&P.readability.contentScore+Y>=ae)$=!0;else if(P.nodeName==="P"){var K=this._getLinkDensity(P),ue=this._getInnerText(P),pe=ue.length;(pe>80&&K<.25||pe<80&&pe>0&&K===0&&ue.search(/\.( |$)/)!==-1)&&($=!0)}}$&&(this.log("Appending node:",P),this.ALTER_TO_DIV_EXCEPTIONS.indexOf(P.nodeName)===-1&&(this.log("Altering sibling:",P,"to div."),P=this._setNodeTag(P,"DIV")),H.appendChild(P),X=A.children,te-=1,L-=1)}if(this._debug&&this.log("Article content pre-prep: "+H.innerHTML),this._prepArticle(H),this._debug&&this.log("Article content post-prep: "+H.innerHTML),x)v.id="readability-page-1",v.className="page";else{var fe=i.createElement("DIV");for(fe.id="readability-page-1",fe.className="page";H.firstChild;)fe.appendChild(H.firstChild);H.appendChild(fe)}this._debug&&this.log("Article content after paging: "+H.innerHTML);var Q=!0,ie=this._getInnerText(H,!0).length;if(ie<this._charThreshold)if(Q=!1,r.innerHTML=o,this._flagIsActive(this.FLAG_STRIP_UNLIKELYS))this._removeFlag(this.FLAG_STRIP_UNLIKELYS),this._attempts.push({articleContent:H,textLength:ie});else if(this._flagIsActive(this.FLAG_WEIGHT_CLASSES))this._removeFlag(this.FLAG_WEIGHT_CLASSES),this._attempts.push({articleContent:H,textLength:ie});else if(this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY),this._attempts.push({articleContent:H,textLength:ie});else{if(this._attempts.push({articleContent:H,textLength:ie}),this._attempts.sort(function(V,re){return re.textLength-V.textLength}),!this._attempts[0].textLength)return null;H=this._attempts[0].articleContent,Q=!0}if(Q){var oe=[A,v].concat(this._getNodeAncestors(A));return this._someNode(oe,function(V){if(!V.tagName)return!1;var re=V.getAttribute("dir");return re?(this._articleDir=re,!0):!1}),H}}},_isValidByline:function(r){return typeof r=="string"||r instanceof String?(r=r.trim(),r.length>0&&r.length<100):!1},_unescapeHtmlEntities:function(r){if(!r)return r;var i=this.HTML_ESCAPE_MAP;return r.replace(/&(quot|amp|apos|lt|gt);/g,function(a,o){return i[o]}).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi,function(a,o,s){var l=parseInt(o||s,o?16:10);return String.fromCharCode(l)})},_getJSONLD:function(r){var i=this._getAllNodesWithTag(r,["script"]),a;return this._forEachNode(i,function(o){if(!a&&o.getAttribute("type")==="application/ld+json")try{var s=o.textContent.replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g,""),l=JSON.parse(s);if(!l["@context"]||!l["@context"].match(/^https?\:\/\/schema\.org$/)||(!l["@type"]&&Array.isArray(l["@graph"])&&(l=l["@graph"].find(function(d){return(d["@type"]||"").match(this.REGEXPS.jsonLdArticleTypes)})),!l||!l["@type"]||!l["@type"].match(this.REGEXPS.jsonLdArticleTypes)))return;if(a={},typeof l.name=="string"&&typeof l.headline=="string"&&l.name!==l.headline){var c=this._getArticleTitle(),u=this._textSimilarity(l.name,c)>.75,p=this._textSimilarity(l.headline,c)>.75;p&&!u?a.title=l.headline:a.title=l.name}else typeof l.name=="string"?a.title=l.name.trim():typeof l.headline=="string"&&(a.title=l.headline.trim());l.author&&(typeof l.author.name=="string"?a.byline=l.author.name.trim():Array.isArray(l.author)&&l.author[0]&&typeof l.author[0].name=="string"&&(a.byline=l.author.filter(function(d){return d&&typeof d.name=="string"}).map(function(d){return d.name.trim()}).join(", "))),typeof l.description=="string"&&(a.excerpt=l.description.trim()),l.publisher&&typeof l.publisher.name=="string"&&(a.siteName=l.publisher.name.trim());return}catch(d){this.log(d.message)}}),a||{}},_getArticleMetadata:function(r){var i={},a={},o=this._doc.getElementsByTagName("meta"),s=/\s*(dc|dcterm|og|twitter)\s*:\s*(author|creator|description|title|site_name)\s*/gi,l=/^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;return this._forEachNode(o,function(c){var u=c.getAttribute("name"),p=c.getAttribute("property"),d=c.getAttribute("content");if(d){var f=null,b=null;p&&(f=p.match(s),f&&(b=f[0].toLowerCase().replace(/\s/g,""),a[b]=d.trim())),!f&&u&&l.test(u)&&(b=u,d&&(b=b.toLowerCase().replace(/\s/g,"").replace(/\./g,":"),a[b]=d.trim()))}}),i.title=r.title||a["dc:title"]||a["dcterm:title"]||a["og:title"]||a["weibo:article:title"]||a["weibo:webpage:title"]||a.title||a["twitter:title"],i.title||(i.title=this._getArticleTitle()),i.byline=r.byline||a["dc:creator"]||a["dcterm:creator"]||a.author,i.excerpt=r.excerpt||a["dc:description"]||a["dcterm:description"]||a["og:description"]||a["weibo:article:description"]||a["weibo:webpage:description"]||a.description||a["twitter:description"],i.siteName=r.siteName||a["og:site_name"],i.title=this._unescapeHtmlEntities(i.title),i.byline=this._unescapeHtmlEntities(i.byline),i.excerpt=this._unescapeHtmlEntities(i.excerpt),i.siteName=this._unescapeHtmlEntities(i.siteName),i},_isSingleImage:function(r){return r.tagName==="IMG"?!0:r.children.length!==1||r.textContent.trim()!==""?!1:this._isSingleImage(r.children[0])},_unwrapNoscriptImages:function(r){var i=Array.from(r.getElementsByTagName("img"));this._forEachNode(i,function(o){for(var s=0;s<o.attributes.length;s++){var l=o.attributes[s];switch(l.name){case"src":case"srcset":case"data-src":case"data-srcset":return}if(/\.(jpg|jpeg|png|webp)/i.test(l.value))return}o.parentNode.removeChild(o)});var a=Array.from(r.getElementsByTagName("noscript"));this._forEachNode(a,function(o){var s=r.createElement("div");if(s.innerHTML=o.innerHTML,!!this._isSingleImage(s)){var l=o.previousElementSibling;if(l&&this._isSingleImage(l)){var c=l;c.tagName!=="IMG"&&(c=l.getElementsByTagName("img")[0]);for(var u=s.getElementsByTagName("img")[0],p=0;p<c.attributes.length;p++){var d=c.attributes[p];if(d.value!==""&&(d.name==="src"||d.name==="srcset"||/\.(jpg|jpeg|png|webp)/i.test(d.value))){if(u.getAttribute(d.name)===d.value)continue;var f=d.name;u.hasAttribute(f)&&(f="data-old-"+f),u.setAttribute(f,d.value)}}o.parentNode.replaceChild(s.firstElementChild,l)}}})},_removeScripts:function(r){this._removeNodes(this._getAllNodesWithTag(r,["script","noscript"]))},_hasSingleTagInsideElement:function(r,i){return r.children.length!=1||r.children[0].tagName!==i?!1:!this._someNode(r.childNodes,function(a){return a.nodeType===this.TEXT_NODE&&this.REGEXPS.hasContent.test(a.textContent)})},_isElementWithoutContent:function(r){return r.nodeType===this.ELEMENT_NODE&&r.textContent.trim().length==0&&(r.children.length==0||r.children.length==r.getElementsByTagName("br").length+r.getElementsByTagName("hr").length)},_hasChildBlockElement:function(r){return this._someNode(r.childNodes,function(i){return this.DIV_TO_P_ELEMS.has(i.tagName)||this._hasChildBlockElement(i)})},_isPhrasingContent:function(r){return r.nodeType===this.TEXT_NODE||this.PHRASING_ELEMS.indexOf(r.tagName)!==-1||(r.tagName==="A"||r.tagName==="DEL"||r.tagName==="INS")&&this._everyNode(r.childNodes,this._isPhrasingContent)},_isWhitespace:function(r){return r.nodeType===this.TEXT_NODE&&r.textContent.trim().length===0||r.nodeType===this.ELEMENT_NODE&&r.tagName==="BR"},_getInnerText:function(r,i){i=typeof i>"u"?!0:i;var a=r.textContent.trim();return i?a.replace(this.REGEXPS.normalize," "):a},_getCharCount:function(r,i){return i=i||",",this._getInnerText(r).split(i).length-1},_cleanStyles:function(r){if(!(!r||r.tagName.toLowerCase()==="svg")){for(var i=0;i<this.PRESENTATIONAL_ATTRIBUTES.length;i++)r.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[i]);this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(r.tagName)!==-1&&(r.removeAttribute("width"),r.removeAttribute("height"));for(var a=r.firstElementChild;a!==null;)this._cleanStyles(a),a=a.nextElementSibling}},_getLinkDensity:function(r){var i=this._getInnerText(r).length;if(i===0)return 0;var a=0;return this._forEachNode(r.getElementsByTagName("a"),function(o){var s=o.getAttribute("href"),l=s&&this.REGEXPS.hashUrl.test(s)?.3:1;a+=this._getInnerText(o).length*l}),a/i},_getClassWeight:function(r){if(!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))return 0;var i=0;return typeof r.className=="string"&&r.className!==""&&(this.REGEXPS.negative.test(r.className)&&(i-=25),this.REGEXPS.positive.test(r.className)&&(i+=25)),typeof r.id=="string"&&r.id!==""&&(this.REGEXPS.negative.test(r.id)&&(i-=25),this.REGEXPS.positive.test(r.id)&&(i+=25)),i},_clean:function(r,i){var a=["object","embed","iframe"].indexOf(i)!==-1;this._removeNodes(this._getAllNodesWithTag(r,[i]),function(o){if(a){for(var s=0;s<o.attributes.length;s++)if(this._allowedVideoRegex.test(o.attributes[s].value))return!1;if(o.tagName==="object"&&this._allowedVideoRegex.test(o.innerHTML))return!1}return!0})},_hasAncestorTag:function(r,i,a,o){a=a||3,i=i.toUpperCase();for(var s=0;r.parentNode;){if(a>0&&s>a)return!1;if(r.parentNode.tagName===i&&(!o||o(r.parentNode)))return!0;r=r.parentNode,s++}return!1},_getRowAndColumnCount:function(r){for(var i=0,a=0,o=r.getElementsByTagName("tr"),s=0;s<o.length;s++){var l=o[s].getAttribute("rowspan")||0;l&&(l=parseInt(l,10)),i+=l||1;for(var c=0,u=o[s].getElementsByTagName("td"),p=0;p<u.length;p++){var d=u[p].getAttribute("colspan")||0;d&&(d=parseInt(d,10)),c+=d||1}a=Math.max(a,c)}return{rows:i,columns:a}},_markDataTables:function(r){for(var i=r.getElementsByTagName("table"),a=0;a<i.length;a++){var o=i[a],s=o.getAttribute("role");if(s=="presentation"){o._readabilityDataTable=!1;continue}var l=o.getAttribute("datatable");if(l=="0"){o._readabilityDataTable=!1;continue}var c=o.getAttribute("summary");if(c){o._readabilityDataTable=!0;continue}var u=o.getElementsByTagName("caption")[0];if(u&&u.childNodes.length>0){o._readabilityDataTable=!0;continue}var p=["col","colgroup","tfoot","thead","th"],d=function(b){return!!o.getElementsByTagName(b)[0]};if(p.some(d)){this.log("Data table because found data-y descendant"),o._readabilityDataTable=!0;continue}if(o.getElementsByTagName("table")[0]){o._readabilityDataTable=!1;continue}var f=this._getRowAndColumnCount(o);if(f.rows>=10||f.columns>4){o._readabilityDataTable=!0;continue}o._readabilityDataTable=f.rows*f.columns>10}},_fixLazyImages:function(r){this._forEachNode(this._getAllNodesWithTag(r,["img","picture","figure"]),function(i){if(i.src&&this.REGEXPS.b64DataUrl.test(i.src)){var a=this.REGEXPS.b64DataUrl.exec(i.src);if(a[1]==="image/svg+xml")return;for(var o=!1,s=0;s<i.attributes.length;s++){var l=i.attributes[s];if(l.name!=="src"&&/\.(jpg|jpeg|png|webp)/i.test(l.value)){o=!0;break}}if(o){var c=i.src.search(/base64\s*/i)+7,u=i.src.length-c;u<133&&i.removeAttribute("src")}}if(!((i.src||i.srcset&&i.srcset!="null")&&i.className.toLowerCase().indexOf("lazy")===-1)){for(var p=0;p<i.attributes.length;p++)if(l=i.attributes[p],!(l.name==="src"||l.name==="srcset"||l.name==="alt")){var d=null;if(/\.(jpg|jpeg|png|webp)\s+\d/.test(l.value)?d="srcset":/^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(l.value)&&(d="src"),d){if(i.tagName==="IMG"||i.tagName==="PICTURE")i.setAttribute(d,l.value);else if(i.tagName==="FIGURE"&&!this._getAllNodesWithTag(i,["img","picture"]).length){var f=this._doc.createElement("img");f.setAttribute(d,l.value),i.appendChild(f)}}}}})},_getTextDensity:function(r,i){var a=this._getInnerText(r,!0).length;if(a===0)return 0;var o=0,s=this._getAllNodesWithTag(r,i);return this._forEachNode(s,l=>o+=this._getInnerText(l,!0).length),o/a},_cleanConditionally:function(r,i){this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)&&this._removeNodes(this._getAllNodesWithTag(r,[i]),function(a){var o=function(A){return A._readabilityDataTable},s=i==="ul"||i==="ol";if(!s){var l=0,c=this._getAllNodesWithTag(a,["ul","ol"]);this._forEachNode(c,A=>l+=this._getInnerText(A).length),s=l/this._getInnerText(a).length>.9}if(i==="table"&&o(a)||this._hasAncestorTag(a,"table",-1,o)||this._hasAncestorTag(a,"code"))return!1;var u=this._getClassWeight(a);this.log("Cleaning Conditionally",a);var p=0;if(u+p<0)return!0;if(this._getCharCount(a,",")<10){for(var d=a.getElementsByTagName("p").length,f=a.getElementsByTagName("img").length,b=a.getElementsByTagName("li").length-100,g=a.getElementsByTagName("input").length,m=this._getTextDensity(a,["h1","h2","h3","h4","h5","h6"]),h=0,y=this._getAllNodesWithTag(a,["object","embed","iframe"]),w=0;w<y.length;w++){for(var T=0;T<y[w].attributes.length;T++)if(this._allowedVideoRegex.test(y[w].attributes[T].value))return!1;if(y[w].tagName==="object"&&this._allowedVideoRegex.test(y[w].innerHTML))return!1;h++}var S=this._getLinkDensity(a),_=this._getInnerText(a).length,v=f>1&&d/f<.5&&!this._hasAncestorTag(a,"figure")||!s&&b>d||g>Math.floor(d/3)||!s&&m<.9&&_<25&&(f===0||f>2)&&!this._hasAncestorTag(a,"figure")||!s&&u<25&&S>.2||u>=25&&S>.5||h===1&&_<75||h>1;if(s&&v){for(var x=0;x<a.children.length;x++)if(a.children[x].children.length>1)return v;let A=a.getElementsByTagName("li").length;if(f==A)return!1}return v}return!1})},_cleanMatchedNodes:function(r,i){for(var a=this._getNextNode(r,!0),o=this._getNextNode(r);o&&o!=a;)i.call(this,o,o.className+" "+o.id)?o=this._removeAndGetNext(o):o=this._getNextNode(o)},_cleanHeaders:function(r){let i=this._getAllNodesWithTag(r,["h1","h2"]);this._removeNodes(i,function(a){let o=this._getClassWeight(a)<0;return o&&this.log("Removing header with low class weight:",a),o})},_headerDuplicatesTitle:function(r){if(r.tagName!="H1"&&r.tagName!="H2")return!1;var i=this._getInnerText(r,!1);return this.log("Evaluating similarity of header:",i,this._articleTitle),this._textSimilarity(this._articleTitle,i)>.75},_flagIsActive:function(r){return(this._flags&r)>0},_removeFlag:function(r){this._flags=this._flags&~r},_isProbablyVisible:function(r){return(!r.style||r.style.display!="none")&&!r.hasAttribute("hidden")&&(!r.hasAttribute("aria-hidden")||r.getAttribute("aria-hidden")!="true"||r.className&&r.className.indexOf&&r.className.indexOf("fallback-image")!==-1)},parse:function(){if(this._maxElemsToParse>0){var r=this._doc.getElementsByTagName("*").length;if(r>this._maxElemsToParse)throw new Error("Aborting parsing document; "+r+" elements found")}this._unwrapNoscriptImages(this._doc);var i=this._disableJSONLD?{}:this._getJSONLD(this._doc);this._removeScripts(this._doc),this._prepDocument();var a=this._getArticleMetadata(i);this._articleTitle=a.title;var o=this._grabArticle();if(!o)return null;if(this.log("Grabbed: "+o.innerHTML),this._postProcessContent(o),!a.excerpt){var s=o.getElementsByTagName("p");s.length>0&&(a.excerpt=s[0].textContent.trim())}var l=o.textContent;return{title:this._articleTitle,byline:a.byline||this._articleByline,dir:this._articleDir,lang:this._articleLang,content:this._serializer(o),textContent:l,length:l.length,excerpt:a.excerpt,siteName:a.siteName||this._articleSiteName}}},typeof t=="object"&&(t.exports=n)}),l_=ac((e,t)=>{var n={unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i};function r(a){return(!a.style||a.style.display!="none")&&!a.hasAttribute("hidden")&&(!a.hasAttribute("aria-hidden")||a.getAttribute("aria-hidden")!="true"||a.className&&a.className.indexOf&&a.className.indexOf("fallback-image")!==-1)}function i(a,o={}){typeof o=="function"&&(o={visibilityChecker:o});var s={minScore:20,minContentLength:140,visibilityChecker:r};o=Object.assign(s,o);var l=a.querySelectorAll("p, pre, article"),c=a.querySelectorAll("div > br");if(c.length){var u=new Set(l);[].forEach.call(c,function(d){u.add(d.parentNode)}),l=Array.from(u)}var p=0;return[].some.call(l,function(d){if(!o.visibilityChecker(d))return!1;var f=d.className+" "+d.id;if(n.unlikelyCandidates.test(f)&&!n.okMaybeItsACandidate.test(f)||d.matches("li p"))return!1;var b=d.textContent.trim().length;return b<o.minContentLength?!1:(p+=Math.sqrt(b-o.minContentLength),p>o.minScore)})}typeof t=="object"&&(t.exports=i)}),Wm=ac((e,t)=>{var n=s_(),r=l_();t.exports={Readability:n,isProbablyReaderable:r}}),qm={};a_(qm,{Readability:()=>Gm,default:()=>Xm,isProbablyReaderable:()=>Vm});var Km=Hm(Wm());o_(qm,Hm(Wm()));var{Readability:Gm,isProbablyReaderable:Vm}=Km,{default:jm,...c_}=Km,Xm=jm!==void 0?jm:c_;var lk=Xa.alert;var At=window,Zm=!1,Qm=!!(At.Worker&&At.Blob&&At.Promise&&At.OffscreenCanvas&&At.OffscreenCanvasRenderingContext2D&&At.HTMLCanvasElement&&At.HTMLCanvasElement.prototype.transferControlToOffscreen&&At.URL&&At.URL.createObjectURL);function Ym(){}function cc(e){var t=At.Promise,n=t!==void 0?t:At.Promise;return typeof n=="function"?new n(e):(e(Ym,Ym),null)}var oc=function(){var e=Math.floor(16.666666666666668),t,n,r={},i=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(t=function(a){var o=Math.random();return r[o]=requestAnimationFrame(function s(l){i===l||i+e-1<l?(i=l,delete r[o],a()):r[o]=requestAnimationFrame(s)}),o},n=function(a){r[a]&&cancelAnimationFrame(r[a])}):(t=function(a){return setTimeout(a,e)},n=function(a){return clearTimeout(a)}),{frame:t,cancel:n}}(),u_=function(){var e,t,n={};function r(i){function a(o,s){i.postMessage({options:o||{},callback:s})}i.init=function(s){var l=s.transferControlToOffscreen();i.postMessage({canvas:l},[l])},i.fire=function(s,l,c){if(t)return a(s,null),t;var u=Math.random().toString(36).slice(2);return t=cc(function(p){function d(f){f.data.callback===u&&(delete n[u],i.removeEventListener("message",d),t=null,c(),p())}i.addEventListener("message",d),a(s,u),n[u]=d.bind(null,{data:{callback:u}})}),t},i.reset=function(){i.postMessage({reset:!0});for(var s in n)n[s](),delete n[s]}}return function(){if(e)return e;if(!Zm&&Qm){var i=["var CONFETTI, SIZE = {}, module = {};","("+main.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{e=new Worker(URL.createObjectURL(new Blob([i])))}catch{return null}r(e)}return e}}(),d_={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function p_(e,t){return t?t(e):e}function f_(e){return e!=null}function He(e,t,n){return p_(e&&f_(e[t])?e[t]:d_[t],n)}function h_(e){return e<0?0:Math.floor(e)}function m_(e,t){return Math.floor(Math.random()*(t-e))+e}function sc(e){return parseInt(e,16)}function g_(e){return e.map(b_)}function b_(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:sc(t.substring(0,2)),g:sc(t.substring(2,4)),b:sc(t.substring(4,6))}}function y_(e){var t=He(e,"origin",Object);return t.x=He(t,"x",Number),t.y=He(t,"y",Number),t}function w_(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function v_(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function x_(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}function __(e,t,n,r,i,a,o,s,l){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,l),e.restore()}function T_(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar}}function S_(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,o=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),t.shape==="circle")e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(o-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):__(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(o-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape==="star")for(var s=Math.PI/2*3,l=4*t.scalar,c=8*t.scalar,u=t.x,p=t.y,d=5,f=Math.PI/d;d--;)u=t.x+Math.cos(s)*c,p=t.y+Math.sin(s)*c,e.lineTo(u,p),s+=f,u=t.x+Math.cos(s)*l,p=t.y+Math.sin(s)*l,e.lineTo(u,p),s+=f;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(o)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function A_(e,t,n,r,i){var a=t.slice(),o=e.getContext("2d"),s,l,c=cc(function(u){function p(){s=l=null,o.clearRect(0,0,r.width,r.height),i(),u()}function d(){Zm&&!(r.width===workerSize.width&&r.height===workerSize.height)&&(r.width=e.width=workerSize.width,r.height=e.height=workerSize.height),!r.width&&!r.height&&(n(e),r.width=e.width,r.height=e.height),o.clearRect(0,0,r.width,r.height),a=a.filter(function(f){return S_(o,f)}),a.length?s=oc.frame(d):p()}s=oc.frame(d),l=p});return{addFettis:function(u){return a=a.concat(u),c},canvas:e,promise:c,reset:function(){s&&oc.cancel(s),l&&l()}}}function E_(e,t){var n=!e,r=!!He(t||{},"resize"),i=He(t,"disableForReducedMotion",Boolean),a=Qm&&!!He(t||{},"useWorker"),o=a?u_():null,s=n?w_:v_,l=e&&o?!!e.__confetti_initialized:!1,c=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,u;function p(f,b,g){for(var m=He(f,"particleCount",h_),h=He(f,"angle",Number),y=He(f,"spread",Number),w=He(f,"startVelocity",Number),T=He(f,"decay",Number),S=He(f,"gravity",Number),_=He(f,"drift",Number),v=He(f,"colors",g_),x=He(f,"ticks",Number),A=He(f,"shapes"),k=He(f,"scalar"),C=y_(f),D=m,O=[],I=e.width*C.x,N=e.height*C.y;D--;)O.push(T_({x:I,y:N,angle:h,spread:y,startVelocity:w,color:v[D%v.length],shape:A[m_(0,A.length)],ticks:x,decay:T,gravity:S,drift:_,scalar:k}));return u?u.addFettis(O):(u=A_(e,O,s,b,g),u.promise)}function d(f){var b=i||He(f,"disableForReducedMotion",Boolean),g=He(f,"zIndex",Number);if(b&&c)return cc(function(w){w()});n&&u?e=u.canvas:n&&!e&&(e=x_(g),document.body.appendChild(e)),r&&!l&&s(e);var m={width:e.width,height:e.height};o&&!l&&o.init(e),l=!0,o&&(e.__confetti_initialized=!0);function h(){if(o){var w={getBoundingClientRect:function(){if(!n)return e.getBoundingClientRect()}};s(w),o.postMessage({resize:{width:w.width,height:w.height}});return}m.width=m.height=null}function y(){u=null,r&&At.removeEventListener("resize",h),n&&e&&(document.body.removeChild(e),e=null,l=!1)}return r&&At.addEventListener("resize",h,!1),o?o.fire(f,m,y):p(f,m,y)}return d.reset=function(){o&&o.reset(),u&&u.reset()},d}var lc;function k_(){return lc||(lc=E_(null,{useWorker:!1,resize:!0})),lc}function uc(){return k_().apply(this,arguments)}var Jm={nologin:"\u672A\u767B\u5F55",loginForSafari:"\u767B\u5F55\u6216\u6CE8\u518C",login:"\u767B\u5F55\u540E\u53EF\u5F00\u901A\u4F1A\u5458",manageAccount:"\u7BA1\u7406\u8D26\u6237",openPremium:"\u5F00\u901A\u4F1A\u5458",logout:"\u9000\u51FA",curentPlan:"\u5F53\u524D\u5957\u9910",endAt:"\u5230\u671F",endAuto:"\u81EA\u52A8\u7EED\u671F",lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","noSupportTranslate-pdf":"\u811A\u672C\u4E0D\u652F\u6301\u8BF7\u4F7F\u7528\u63D2\u4EF6","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u5BFC\u5165PDF",enableLineBreak:"\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E\u683C\u5F0F\u4E3A (\u6CA1\u6709\u505A\u81EA\u52A8\u8BC6\u522B\uFF0C\u8BF7\u76F4\u63A5\u8F93\u5165)\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.shortBrandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1: \u53CC\u8BED\u5BF9\u7167\u7F51\u9875\u7FFB\u8BD1 & PDF\u6587\u6863\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u652F\u6301PDF\u7FFB\u8BD1\uFF0C\u53CC\u8BEDEpub\u7535\u5B50\u4E66\u5236\u4F5C\uFF0CYoutube/Netflix/Udemy \u7B49\u5E73\u53F0\u53CC\u8BED\u5B57\u5E55\uFF0C\u652F\u6301Deepl/Google\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u514D\u8D39\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8BD1\u5E76\u9690\u85CF\u539F\u6587/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.shareToDraft":"\u5206\u4EAB\u53CC\u8BED\u9875\u9762","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.toggleTranslationMask":"\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6","browser.openEbookViewer":"\u9605\u8BFB\u672C\u5730\u7535\u5B50\u4E66","browser.openEbookBuilder":"\u5236\u4F5C\u53CC\u8BED EPUB \u7535\u5B50\u4E66","browser.translateLocalHtmlFile":"\u7FFB\u8BD1 HTML/txt \u6587\u4EF6","browser.donateContext":"\u4E86\u89E3\u8D5E\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8BD1\u672C\u5730\u5B57\u5E55\u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",isShowContextMenu:"\u5C06\u7FFB\u8BD1\u7F51\u9875\u52A0\u5165\u53F3\u952E\u83DC\u5355\u9879",toggleBeta:"\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",betaDescription:"\u542F\u7528\u4ECD\u5728\u5B9E\u9A8C\u6027\u7684\u529F\u80FD\uFF0C\u4EE5\u53CA\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u603B\u662F\u6362\u884C\u9002\u7528\u4E8E\u8F83\u5C11\u5185\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F50\u3002\uFF08\u5728\u5185\u5BB9\u8F83\u591A\u7684\u957F\u6BB5\u843D(\u8D85\u8FC7{count}\u4E2A\u5B57\u7B26) \u4F7F\u7528\u667A\u80FD\u6362\u884C\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1\uFF0C\u53EF\u8BBE\u7F6E\u4E34\u65F6\u65F6\u957F",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5219\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875(\u4EC5\u8BD1\u6587)/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",mouseHoldKey:"+ {key} \u7FFB\u8BD1/\u8FD8\u539F\u8BE5\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E(\u6253\u5F00\u8BBE\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8BD1/\u8FD8\u539F\u8BE5\u6BB5",mouseHoverHoldKey:"\u9F20\u6807\u60AC\u505C\u540C\u65F6\u6309\u4E0B\u5FEB\u6377\u952E\u7FFB\u8BD1\u6BB5\u843D","mouse-translate":"\u9F20\u6807\u60AC\u505C",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",resetThisSuccess:"\u91CD\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\u3002\u4EC5\u5BF9\u4E8E\u66F4\u4E13\u4E1A\u7684\u7528\u6237\uFF0C\u63D0\u4F9B\u66F4\u4E2A\u6027\u5316\u7684\u8BBE\u7F6E\u9879\u3002",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u4EF7\u683C","translate to the bottom of the page":"\u8FDB\u5165\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u8FDB\u5165\u7F51\u9875\u5C06\u7ACB\u5373\u7FFB\u8BD1\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\u3002\u5173\u95ED\u5219\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u6240\u6709\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\u3002\u5173\u95ED\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\uFF0C\u4EC5\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8BD1\u9875\u9762\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\uFF0C\u800C\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",moreOptions:"\u5C55\u5F00\u66F4\u591A\u81EA\u5B9A\u4E49\u9009\u9879",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",changeToOnlyTranslationMode:"\u5207\u6362\u4E3A\u4EC5\u663E\u793A\u8BD1\u6587",changeToDualTranslationMode:"\u5207\u6362\u4E3A\u53CC\u8BED\u7FFB\u8BD1",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",badUserscriptBrowser:"\u5F53\u524D\u6D4F\u89C8\u5668\u6CA1\u6709\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u6269\u5C55\u7684\u63A5\u53E3\uFF08\u6BD4\u5982\u83B7\u53D6\u6CB9\u7334\u811A\u672C\u81EA\u8EAB\u7684\u7248\u672C\u53F7\u4FE1\u606F\uFF09\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334\u6269\u5C55</1>\u7684\u6D4F\u89C8\u5668\u5982 Firefox",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",needActionForOptions:"(\u9700\u8BBE\u7F6E)",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u5F53\u524D\u7F51\u7AD9",autoEnableSubtitle:"\u81EA\u52A8\u5F00\u542F\u53CC\u8BED\u5B57\u5E55",alwaysTranslate:"\u603B\u662F\u7FFB\u8BD1",neverTranslate:"\u6C38\u4E0D\u7FFB\u8BD1",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1 {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1 {language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",alwaysTranslateSomeSiteOrWildSite:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u7AD9",alwaysTranslateSomePage:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u9875",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA",import_export_title:"\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65",floatBallOptions:"\u60AC\u6D6E\u7403\u8BBE\u7F6E","floatBallOptions.enable":"\u542F\u7528\u60AC\u6D6E\u7403","floatBallOptions.blockUrls":"\u7981\u7528\u7F51\u7AD9","floatBallOptions.add":"\u6DFB\u52A0","floatBallOptions.blockUrlDesc":"\u5F53\u9047\u4E0B\u5217\u7F51\u7AD9\u65F6\u4E0D\u663E\u793A\u60AC\u6D6E\u7403","floatBallOptions.clickType":"\u70B9\u51FB\u884C\u4E3A","floatBallOptions.clickTypeDesc":"\u60AC\u6D6E\u7403\u56FE\u6807\u70B9\u51FB\u65F6\u7684\u884C\u4E3A","floatBallOptions.clickPopup":"\u663E\u793A\u7FFB\u8BD1\u9762\u677F","floatBallOptions.clickTranslate":"\u7FFB\u8BD1/\u663E\u793A\u539F\u6587","floatBallOptions.fixedPosition":"\u56FA\u5B9A\u4F4D\u7F6E","floatBallOptions.fixedPositionDesc":"\u60AC\u6D6E\u7403\u5728\u7A97\u53E3\u5DE6\u4FA7\u8FD8\u662F\u53F3\u4FA7","floatBallOptions.fixedPositionLeft":"\u5DE6\u4FA7","floatBallOptions.fixedPositionRight":"\u53F3\u4FA7",previewAllThemes:"\u9884\u89C8\u5168\u90E8\u6837\u5F0F","translationTheme.none":"\u65E0","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.solidBorder":"\u5B9E\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B66\u4E60\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.marker2":"\u9A6C\u514B\u7B142","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7EBF","translationServices.custom":"\u81EA\u5B9A\u4E49API","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.tenAlpha":"\u817E\u8BAF\u7FFB\u8BD1\u541B(Alpha)","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeepLX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.deepl":"DeepL","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"Azure \u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.cai":"\u5F69\u4E91\u5C0F\u8BD1 (Alpha)","translationServices.volcAlpha":"\u706B\u5C71 (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.you":"\u6709\u9053\u7FFB\u8BD1 (Alpha)","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.niu":"\u5C0F\u725B\u7FFB\u8BD1","translationServices.papago":"Papago \u7FFB\u8BD1","translationServices.d":"D (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.gemini":"Gemini","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u5C06\u8DF3\u8FC7\u7FFB\u8BD1",enableUserscriptPagePopup:"\u5728\u9875\u9762\u4E0A\u663E\u793A\u60AC\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u603B\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8BD1\u6587\u6837\u5F0F",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B",syncToCloud:"\u540C\u6B65\u5230 Google Drive",syncToCloudDescription:"\u4E0A\u4F20\u5230\u4E91\u7AEF\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",syncToAccount:"\u540C\u6B65\u5230\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u4E91\u7AEF",syncToAccountButton:"\u7ACB\u5373\u4E0E\u4E91\u7AEF\u540C\u6B65",syncToAccountDescription:"\u5728\u4E0D\u540C\u7684\u8BBE\u5907\u4E4B\u95F4\u81EA\u52A8\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",successSyncConfigInAccount:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",successSyncConfigToAccount:"\u6210\u529F\u540C\u6B65\u5230\u4E91\u7AEF",syncConfigNoUpdate:"\u5DF2\u7ECF\u662F\u6700\u65B0\u7684\u4E86",authFail:"\u6388\u6743\u5931\u8D25",syncTitle:"\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",import_hint:"\u5BFC\u5165",upload:"\u4E0A\u4F20",revokeAuth:"\u64A4\u9500\u6388\u6743",uploadFail:"\u4E0A\u4F20\u5931\u8D25",download:"\u4E0B\u8F7D",importSuccess:"\u5BFC\u5165\u6210\u529F",importFail:"\u5BFC\u5165\u5931\u8D25",deleteFail:"\u5220\u9664\u5931\u8D25",backupToCloud:"\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5907\u4EFD\u8282\u70B9",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",backupToCloudDescription:"\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",successSyncConfig:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u8D25",updatedAt:"\u66F4\u65B0\u4E8E {date}",lastSyncedAt:"\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",downloadFail:"\u4E0B\u8F7D\u5931\u8D25",clickToDownload:"\u70B9\u51FB\u4E0B\u8F7D",aboutLabel:"\u5173\u4E8E - \u53CD\u9988","browser.openAboutPage":"\u5173\u4E8E/\u53CD\u9988",aboutLabelWithoutSponsor:"\u5173\u4E8E - \u53CD\u9988",aboutIntro:"\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F \u4F60\u53EF\u9009\u62E9\u5F00\u901A <6>Pro\u4F1A\u5458</6> \u6765\u4F7F\u7528\u5F00\u7BB1\u5373\u7528\u7684 DeepL \u548C OpenAI \u7FFB\u8BD1\u3002 <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002<br/> <7>Pro \u4F1A\u5458</7> \u53EF\u4EE5\u901A\u8FC7\u5FEB\u901F\u5BA2\u670D\u90AE\u7BB1 <8>support@immersivetranslate.com</8> \u548C\u6211\u4EEC\u53D6\u5F97\u8054\u7CFB\u3002",aboutIntroWithoutSponsor:"\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F  <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002",projectHomepage:"\u9879\u76EE\u4E3B\u9875",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u4F17\u53F7",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u9891\u9053",joinTelegramChannel:"\u5173\u6CE8 Telegram \u9891\u9053\u83B7\u53D6\u6700\u65B0\u66F4\u65B0",feedbackAndJoin:"\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",autoSync:"\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",loadingThemeTitle:"Loading \u6837\u5F0F",loadingThemeDescription:"\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F","loadingTheme.spinner":"\u8F6C\u5708\u52A8\u753B","loadingTheme.text":"\u9759\u6001\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u663E\u793A",developerDescription:"\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863","edit border color":"\u4FEE\u6539\u8FB9\u6846\u989C\u8272",successSyncButNoChange:"\u5F53\u524D\u914D\u7F6E\u4E0E\u4E91\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u8FB9\u6846\u989C\u8272","customThemeLabel.borderRadius":"\u8FB9\u6846\u5706\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u989C\u8272","customThemeLabel.backgroundColor":"\u80CC\u666F\u989C\u8272","customThemeLabel.zoom":"\u5B57\u4F53\u7F29\u653E\u6BD4\u4F8B (%)","customThemeLabel.opacity":"\u6587\u5B57\u4E0D\u900F\u660E\u5EA6 (%)",resetToDefaultColor:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u989C\u8272",resetToDefaultSettings:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u8BBE\u7F6E",isTranslateTitle:"\u5F00\u542F\u7FFB\u8BD1\u7F51\u9875\u6807\u9898",isTranslateTitleDescription:"\u5F00\u542F\u540E\uFF0C\u7F51\u9875\u6807\u9898\u4F1A\u88AB\u7FFB\u8BD1",enableSearchEnhancement:"\u542F\u7528\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A",enableSearchEnhancementDescription:"\u5F00\u542F\u540E\uFF0C\u5728\u652F\u6301\u7684\u7F51\u7AD9\uFF08\u8C37\u6B4C\u65B0\u95FB\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u5173\u952E\u8BCD\uFF09\uFF0C\u96EA\u7403\uFF0C\u4E1C\u65B9\u8D22\u5BCC\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\u793E\u533A\uFF09\u53F3\u8FB9\u680F\u81EA\u52A8\u663E\u793A\u5BF9\u5E94\u82F1\u6587\u5173\u952E\u8BCD\u7684\u201C\u8C37\u6B4C\u65B0\u95FB\u201D\u641C\u7D22\u7ED3\u679C\u3002",verifyService:"\u70B9\u6B64\u6D4B\u8BD5\u670D\u52A1",verified:"\u9A8C\u8BC1\u6210\u529F","field.langs":"\u652F\u6301\u7684\u8BED\u8A00\u4EE3\u7801","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8BD1\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6570","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6570","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6587\u672C\u957F\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6BB5\u843D\u6570","field.apiUrl":"\u81EA\u5B9A\u4E49 API \u63A5\u53E3\u5730\u5740","field.placeholderDelimiters":"\u4FDD\u7559\u7684\u5360\u4F4D\u7B26","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>\u81EA\u5B9A\u4E49\u63A5\u53E3\u63A5\u5165</a> \u9700\u8981\u53C2\u8003\u6587\u6863","description.limitPerMinute":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u5206\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.generalLimitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002","description.prompt":"\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI","description.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u5B57\u7B26\u6570\uFF0C\u592A\u5927\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C1D\u8BD5\u8C03\u6574\u8BE5\u9009\u9879\u6765\u4F18\u5316\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7EDF\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00","field.domain":"\u9886\u57DF","description.domain":"\u9ED8\u8BA4\u4E3A\uFF1Ageneral\u3002\u4EC5\u5728\u6709\u9053API\u63A7\u5236\u53F0\u5F00\u901A\u9886\u57DF\u5316\u7FFB\u8BD1\u7684\u60C5\u51B5\u4E0B\u53EF\u8BBE\u7F6E\uFF0C\u652F\u6301\u9886\u57DF\u89C1<1>\u8FD9\u91CC</1>","field.scene":"\u573A\u666F","description.scene":"\u9ED8\u8BA4\u4E3A\uFF1Ageneral\u3002\u4EC5\u5728\u963F\u91CC\u4E91API\u63A7\u5236\u53F0\u5F00\u901A\u673A\u5668\u7FFB\u8BD1\u4E13\u4E1A\u7248\u7684\u60C5\u51B5\u4E0B\u53EF\u8BBE\u7F6E\uFF0C\u652F\u6301\u573A\u666F\u89C1<1>\u8FD9\u91CC</1>","field.vocabId":"\u7528\u6237\u8BCD\u5178 ID","description.vocabId":"\u6307\u5B9A\u7684\u8BCD\u5178 out_id\uFF0C\u76EE\u524D\u652F\u6301\u82F1\u8BD1\u4E2D","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u4E3A gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u53D1\u9001\u7ED9\u7FFB\u8BD1\u670D\u52A1\u7684\u6BB5\u843D\u6570\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6570\u91CF\u8FC7\u591A\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162","description.apiUrl":"\u8BF7\u6DFB\u52A0\u5177\u4F53\u5E26\u6709\u8DEF\u5F84\u7684\u7F51\u5740\uFF0C<1>\u66F4\u591A\u8BF4\u660E</1>",enabledExtension:"\u542F\u7528\u6269\u5C55",clickToDisableExtension:"\u70B9\u51FB\u7981\u7528\u6269\u5C55",clickToEnableExtension:"\u70B9\u51FB\u542F\u7528\u6269\u5C55",hasBeenDisabled:"\u5DF2\u7981\u7528","show password":"\u663E\u793A\u5BC6\u7801",customContent:"\u8F93\u5165\u81EA\u5B9A\u4E49\u6A21\u578B\u540D\u79F0",inputOptions:"\u8F93\u5165\u6846\u589E\u5F3A",mouseHoverOptions:"\u9F20\u6807\u60AC\u505C",modifyMouseHoverKey:"\u4FEE\u6539\u9F20\u6807\u60AC\u505C\u5FEB\u6377\u952E",enableInputTranslation:"\u662F\u5426\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",enableInputTranslationDescription:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165 {startingKey}{startingKey} \u4F60\u597D\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165\uFF1A\u4F60\u597D\u4E16\u754C\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguage:"\u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguageDescription:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00\uFF0C\u4E5F\u5C31\u662F {startingKey}{startingKey} \u4F5C\u4E3A\u89E6\u53D1\u8BCD\u7684\u9ED8\u8BA4\u8BED\u8A00",inputTargetLanguageDescriptionForNoneKey:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputStartingTriggerKeyTitle:"\u8BBE\u7F6E\u8F93\u5165\u6846\u90E8\u5206\u7FFB\u8BD1\u7684\u5206\u5272\u5B57\u7B26",inputStartingTriggerKeyDescription:"\u5F53\u4F60\u4E0D\u9700\u8981\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u7684\u65F6\u5019\uFF0C\u5206\u5272\u7B26\u5141\u8BB8\u4F60\u53EA\u7FFB\u8BD1 {startingKey}{startingKey} \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8BED\u8A00\u4EE3\u7801\uFF0C\u6BD4\u5982\uFF1A{startingKey}ja \u8868\u793A\u53EA\u7FFB\u8BD1 {startingKey}ja \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206",inputStartingTriggerKeyDescriptionForNoneKey:"\u5F53\u524D\u8BBE\u7F6E\u4E3A\u65E0\u9700\u524D\u7F00\uFF0C\u6682\u65E0\u6CD5\u4F7F\u7528\u8F93\u5165\u6846\u7684\u90E8\u5206\u6587\u672C\u7FFB\u8BD1\u529F\u80FD",inputTrailingTriggerKeyTitle:"\u9009\u62E9\u4E00\u4E2A\u8F93\u5165\u7ED3\u675F\u7684\u89E6\u53D1\u5B57\u7B26",inputTrailingTriggerKeyDescription:"\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey} \u5C06\u4F1A\u5F00\u59CB\u7FFB\u8BD1",inputTrailingTriggerKeyTimeout:"\u8F93\u5165\u7ED3\u675F\u8FDE\u51FB\u89E6\u53D1\u7684\u95F4\u9694\u65F6\u95F4",inputTrailingTriggerKeyTimeoutDescription:"\u8BBE\u7F6E\u8F93\u5165\u7ED3\u675F\u8FDE\u51FB\u89E6\u53D1\u7684\u95F4\u9694\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09",spaceKey:"<\u7A7A\u683C\u952E>",noneKey:"\u65E0\u9700\u524D\u7F00\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u6587\u672C\u6846",inputTranslationBlockUrlsTitle:"\u5207\u52FF\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",inputTranslationBlockUrlsDescription:"\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\uFF0C\u8F93\u5165\u6846\u589E\u5F3A\u5C06\u4E0D\u4F1A\u751F\u6548",clickToSeeQuickDemo:"\u70B9\u51FB\u5C55\u5F00 30 \u79D2\u5FEB\u901F\u6559\u5B66\u89C6\u9891",inputHelperInfo:"\u8BF4\u660E\uFF1A\u6211\u4EEC\u7279\u522B\u9488\u5BF9\u5728\u4E2D\u6587\u8F93\u5165\u6CD5\u4E0B\u90E8\u5206\u89E6\u53D1\u5B57\u7B26\u4F1A\u53D8\u6210\u4E2D\u6587\u6807\u70B9\u7B26\u53F7\u8FD9\u4EF6\u4E8B\u505A\u4E86\u4F18\u5316\uFF0C\u6BD4\u5982\u641C\u72D7\u8F93\u5165\u6CD5\u4E0B / \u4F1A\u53D8\u6210\u987F\u53F7 \u3001\uFF0C\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u652F\u6301\u6240\u6709\u89E6\u53D1\u7B26\u5BF9\u5E94\u7684\u4E2D\u6587\u7B26\u53F7\uFF0C\u4E5F\u5C31\u662F\u8BF4 // \u3001\u3001 \u90FD\u4F1A\u88AB\u8BC6\u522B\u4E3A\u89E6\u53D1\u5B57\u7B26\u3002<br/><br/>\u540C\u65F6\u6211\u4EEC\u4E5F\u652F\u6301\u8BED\u8A00\u4EE3\u7801\u7684\u4E2D\u6587\u522B\u540D\u4F5C\u4E3A\u547D\u4EE4\uFF0C\u6BD4\u5982 /\u65E5\u6587 \u4F60\u597D\u4E16\u754C \u4F1A\u88AB\u7FFB\u8BD1\u4E3A\u65E5\u6587\uFF0C<1>\u70B9\u6B64\u67E5\u770B\u6240\u6709\u652F\u6301\u7684\u8BED\u8A00\u4EE3\u7801</1>\u3002",reloadCurrentPage:"\u8BF7\u5148\u5237\u65B0\u5F53\u524D\u9875\u9762\uFF0C\u518D\u5F00\u59CB\u7FFB\u8BD1",noLocalFilePermissionForPDF:"\u6682\u65E0\u6743\u9650\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u8BF7\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\uFF0C\u7136\u540E\u5BFC\u5165\u672C\u5730\u6587\u4EF6",noPermissionForThisPage:"\u26A0\uFE0F \u6682\u65E0\u6743\u9650\u7FFB\u8BD1\u5F53\u524D\u9875\u9762",retryAllParagraphs:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",retryAllButton:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",errorTooltipTitle:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u539F\u56E0",errorModalTitle:"\u7FFB\u8BD1\u670D\u52A1\u6216\u7F51\u7EDC\u4F3C\u4E4E\u51FA\u4E86\u70B9\u95EE\u9898...",disableConfirm:"\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A\u8BBE\u7F6E",disableOnce:"\u672C\u6B21\u7981\u7528",disableGlobal:"\u6C38\u4E45\u7981\u7528",disableTint:"* \u4F60\u53EF\u4EE5\u5728 {option} \u4E2D\u91CD\u65B0\u542F\u7528\u3002",searchEnhancementNotes:"\u6211\u4EEC\u53D1\u73B0\uFF0C\u4E2D\u6587\u5173\u952E\u8BCD\u548C\u82F1\u6587\u5173\u952E\u8BCD\u7684\u65B0\u95FB\u7ED3\u679C\u6709\u975E\u5E38\u5927\u7684\u4E0D\u540C\uFF0C\u5728\u542F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A\u529F\u80FD\u540E\uFF0C\u6211\u4EEC\u4F1A\u5728\u652F\u6301\u7684\u7F51\u7AD9\uFF08\u8C37\u6B4C\u65B0\u95FB\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u5173\u952E\u8BCD\uFF09\uFF0C\u96EA\u7403\uFF0C\u4E1C\u65B9\u8D22\u5BCC\u7F51\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\uFF09\u81EA\u52A8\u7528\u82F1\u6587\u4E3A\u4F60\u641C\u7D22\u540C\u6837\u7684\u5173\u952E\u8BCD\u5E76\u5C55\u793A\u5728\u53F3\u4FA7\u3002\u5982\u679C\u4F60\u4E0D\u9700\u8981\u8BE5\u529F\u80FD\u7684\u8BDD\uFF0C\u53EF\u4EE5\u9009\u62E9\u7981\u7528\u5B83\u3002",option:"\u8BBE\u7F6E",saveSettings:"\u4FDD\u5B58\u8BBE\u7F6E",closeModal:"\u5173\u95ED\u7A97\u53E3",enableInputTranslationWithoutTriggerKeyTitle:"\u542F\u7528\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey}\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u4E3A{inputTargetLanguage}",enableInputTranslationWithoutTriggerKeyDescription:"\u5982\u9700\u6307\u5B9A\u76EE\u6807\u8BED\u8A00\uFF0C\u8BF7\u5728\u524D\u9762\u52A0\u4E0A\u8BED\u8A00\u4EE3\u7801\uFF0C\u5982\uFF1Aja \u4F60\u597D\u4E16\u754C",mouseHoverShortcutPlaceholder:"\u5982\uFF1AShift",deepLProName:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1 Pro \u4F1A\u5458 (\u63A8\u8350)",deepLProDescription:"\u5F53\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",deeplProDescriptionForNormal:"\u65E0\u9700\u4EFB\u4F55\u8BBE\u7F6E\uFF0C\u4F1A\u5458\u767B\u5F55\u540E\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u4F1A\u5458</1>",deepLCustomDescription:"\u9700\u8981\u56FD\u5916\u4FE1\u7528\u5361\uFF0C\u5728 <1>DeepL</1> \u5B98\u65B9\u5F00\u901A\uFF0C\u70B9\u51FB\u67E5\u770B<2>\u6587\u6863</2>",deepLCustomName:"\u81EA\u5B9A\u4E49 Auth Key",chooseProviderLabel:"\u9009\u62E9\u4E00\u4E2A\u670D\u52A1\u63D0\u4F9B\u5546",openaiProName:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1 Pro \u4F1A\u5458 (\u63A8\u8350)",openaiProDescription:"\u5F53\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",openaiProDescriptionForNormal:"\u65E0\u9700\u4EFB\u4F55\u8BBE\u7F6E\uFF0C\u4F1A\u5458\u767B\u5F55\u540E\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u4F1A\u5458</1>",openaiCustomDescription:"\u53EF\u5728 OpenAI, Azure OpenAI, \u6216\u5176\u4ED6\u7B2C\u4E09\u65B9\u670D\u52A1\u83B7\u53D6\uFF0C<1>\u70B9\u6B64\u67E5\u770B\u6587\u6863</1>",openaiCustomName:"\u81EA\u5B9A\u4E49 API Key",needLoginAction:"(\u5F00\u901A\u4F1A\u5458\u6216\u81EA\u5B9A\u4E49)",goLoginOrAction:"(\u5F00\u901A\u4F1A\u5458\u6216\u53BB\u8BBE\u7F6E)",yearly:"\u8FDE\u7EED\u5305\u5E74",quarterly:"\u8FDE\u7EED\u5305\u5B63",monthly:"\u8FDE\u7EED\u5305\u6708",yearlyForOnce:"\u4E00\u6B21\u6027\u5E74\u5EA6\u5957\u9910",monthlyForOnce:"\u4E00\u6B21\u6027\u6708\u5EA6\u5957\u9910",daily:"\u8FDE\u7EED\u5305\u65E5",year:"\u8FDE\u7EED\u5305\u5E74",quarter:"\u8FDE\u7EED\u5305\u5B63",month:"\u8FDE\u7EED\u5305\u6708",day:"\u8FDE\u7EED\u5305\u65E5",onetime_7day:"7 \u5929\u4F53\u9A8C\u5305",currentPlanDescriptionForFree:"\u5F53\u524D\u5957\u9910\uFF1A\u514D\u8D39",currentPlanDescriptionForContinuous:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u81EA\u52A8\u7EED\u8D39",currentPlanDescriptionForAutoRenewCaceling:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F",currentYearlyPlanDescriptionForAutoRenewCacelingWithRealPaiedUser:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F\u3002<br/><1>\u70B9\u6B64\u7BA1\u7406\u7EED\u8D39\u65B9\u6848</1>",currentYearlyPlanDescriptionForAutoRenewCacelingWithAdmin:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F\u3002<br/><1>\u70B9\u6B64\u542F\u7528\u8FDE\u7EED\u5305\u5E74</1>",currentPlanDescriptionForOneTime:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u5E74\u8D39</1>\u6216<2>\u6708\u8D39</2>\u4F1A\u5458",upgradePlan:"\u70B9\u6B64\u5347\u7EA7\u4E3A Pro \u4F1A\u5458",upgradeToPro:"\u5347\u7EA7\u4E3A Pro \u4F1A\u5458","popup.openPro":"\u5347\u7EA7\u4E3A Pro \u4F1A\u5458\u540E\u53EF\u4EE5\u7545\u4EAB DeepL \u548C OpenAI \u7FFB\u8BD1\uFF0C\u70B9\u6B64\u5347\u7EA7","popup.openProForPro":"\u60A8\u662F Pro \u4F1A\u5458\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528 DeepL \u548C OpenAI \u7FFB\u8BD1",currentAccount:"\u5F53\u524D\u8D26\u6237",enableAutoSyncUserSettings:"\u542F\u7528\u591A\u8BBE\u5907\u81EA\u52A8\u4E91\u540C\u6B65",modalEnableInputTranslationTitle:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u8F93\u5165\u6846\u7FFB\u8BD1\u63D0\u793A",modalEnableInputTranslationDesc:"\u60A8\u521A\u521A\u901A\u8FC7\u5FEB\u901F\u8FDE\u51FB 3 \u6B21\u7A7A\u683C\u952E\u89E6\u53D1\u4E86\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u7684\u8F93\u5165\u6846\u7FFB\u8BD1\uFF0C\u8F93\u5165\u6846\u7684\u5185\u5BB9\u5C06\u88AB\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u7684\u76EE\u6807\u8BED\u8A00\u3002\u901A\u8FC7 Ctrl+Z \u53EF\u4EE5\u64A4\u9500\u7FFB\u8BD1\u3002<br /><br />\u5982\u679C\u8FD9\u662F\u4E00\u4E2A\u5931\u8BEF\uFF0C\u4E0D\u7528\u62C5\u5FC3\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u672C\u6B21\u7981\u7528\uFF0C\u6216\u8005\u6C38\u4E45\u7981\u7528\u8F93\u5165\u6846\u7FFB\u8BD1\u3002",saveAndNotShowAgain:"\u4FDD\u5B58\u4E14\u4E0D\u518D\u63D0\u793A",disableInputTranslationTips:"* \u4F60\u4E5F\u53EF\u4EE5\u5728 {option} \u4E2D\u8BBE\u7F6E\u5176\u4ED6\u5FEB\u6377\u952E\u6765\u89E6\u53D1\uFF0C{learnMore}\u3002",learnMore:"\u70B9\u6B64\u4E86\u89E3\u66F4\u591A",continueEnalbeInputTranslation:"\u7EE7\u7EED\u542F\u7528\u8F93\u5165\u6846\u7FFB\u8BD1",autoRenewTrialSuffix:'\uFF08\u8BD5\u7528\u4E2D\uFF0C<a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">\u7ACB\u523B\u5347\u7EA7\u4E3A\u6B63\u5F0F\u4F1A\u5458</a>\uFF09',upgradeFromTrialTitle:"\u5347\u7EA7\u4E3A\u6B63\u5F0F\u4F1A\u5458",subtitle:"\u89C6\u9891\u5B57\u5E55",youtubeService:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u89C6\u9891\u5B57\u5E55\u7FFB\u8BD1\u670D\u52A1","subtitle.disabledSubtitle":"\u6C38\u4E45\u7981\u7528\u89C6\u9891\u5B57\u5E55\u529F\u80FD","subtitle.disabledSubtitleDescription":"\u5982\u679C\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u7684\u89C6\u9891\u5B57\u5E55\u548C\u5176\u4ED6\u6269\u5C55\u6709\u51B2\u7A81\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u6C38\u4E45\u7981\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u7684\u89C6\u9891\u5B57\u5E55\u529F\u80FD\u6216\u8005\u5378\u8F7D\u5176\u4ED6\u51B2\u7A81\u7684\u6269\u5C55","subtitle.autoEnableSubtitle":"\u81EA\u52A8\u4F7F\u7528\u53CC\u8BED\u5B57\u5E55","subtitle.autoEnableSubtitleDescription":"\u542F\u7528\u540E\uFF0C\u5F53\u89C6\u9891\u64AD\u653E\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u663E\u793A\u53CC\u8BED\u5B57\u5E55\uFF0C\u5426\u5219\u9700\u8981\u70B9\u51FB\u7FFB\u8BD1\u6309\u94AE\u624D\u4F1A\u663E\u793A\u3002","subtitle.preTranslation":"\u4F7F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u6765\u7FFB\u8BD1\u5B57\u5E55","subtitle.preTranslationDescription":"\u542F\u7528\u540E\u4F1A\u4F18\u5148\u7528\u4E0B\u9762\u7684\u6307\u5B9A\u7684\u7FFB\u8BD1\u670D\u52A1\u63D0\u524D\u7FFB\u8BD1\u6574\u4E2A\u5B57\u5E55\uFF0C1 \u5C0F\u65F6\u7684\u89C6\u9891\u5927\u6982\u6D88\u8017 5\u4E07 Tokens \u6216 \u5B57\u7B26\uFF0C\u8BF7\u914C\u60C5\u4F7F\u7528\uFF1B\u5173\u95ED\u540E\u5219\u4F18\u5148\u4F7F\u7528\u539F\u89C6\u9891\u81EA\u5E26\u7684\u673A\u7FFB\u5B57\u5E55","subtitle.humanSubtitlesPreferred":"\u4F18\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55","subtitle.humanSubtitlesPreferredDescription":"\u5F53\u89C6\u9891\u6709\u76EE\u6807\u8BED\u8A00\u4EBA\u5DE5\u5B57\u5E55\u65F6\uFF0C\u4F18\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55\uFF08\u63A8\u8350\uFF09",videoSubtitleTranslationDescription:"\u4E3A\u89C6\u9891\u5B57\u5E55\u5355\u72EC\u6307\u5B9A\u4E00\u4E2A\u7FFB\u8BD1\u670D\u52A1",subtitleTranslating:"\u6B63\u5728\u4F7F\u7528 {service} \u670D\u52A1\u7FFB\u8BD1\u5B57\u5E55\u4E2D\uFF0C\u8BF7\u7A0D\u7B49...\uFF08\u6C89\u6D78\u5F0F\u7FFB\u8BD1\uFF09",subtitleLoading:"\u6B63\u5728\u52A0\u8F7D\u5B57\u5E55...",bilingual:"\u53CC\u8BED","field.action":"\u662F\u5426\u542F\u7528\u767E\u5EA6\u672F\u8BED","description.action":"\u542F\u7528\u540E\u4F1A\u5728\u8BF7\u6C42\u4E2D\u52A0\u5165 action=1 \u7684\u53C2\u6570\uFF0C\u4EE5\u4FBF\u544A\u77E5\u767E\u5EA6\u542F\u7528\u672F\u8BED\uFF0C<1>\u66F4\u591A\u8BF4\u660E\u8BF7\u53C2\u8003\u5B98\u65B9\u6587\u6863</1>",closeQuickTranslation:"\u5173\u95ED\u60AC\u6D6E\u7403","closeQuickTranslation.untilNext":"\u672C\u6B21\u5173\u95ED\u76F4\u5230\u4E0B\u6B21\u8BBF\u95EE","closeQuickTranslation.currentWebsite":"\u5F53\u524D\u7F51\u7AD9\u7981\u7528","closeQuickTranslation.alwaysClose":"\u6C38\u4E45\u7981\u7528","closeQuickTranslation.settingOpen":"\uFF08\u53EF\u5728<1>\u8BBE\u7F6E\u9875</1>\u5F00\u542F\uFF09","closeQuickTranslation.cancel":"\u53D6\u6D88","closeQuickTranslation.confirm":"\u786E\u5B9A","floatBall.popup":"\u6253\u5F00\u5FEB\u6377\u8BBE\u7F6E\u9762\u677F","floatBall.translate":"\u70B9\u51FB\u7FFB\u8BD1\u8BE5\u9875\u9762","floatBall.showOriginal":"\u70B9\u51FB\u5207\u6362\u56DE\u539F\u6587","floatBall.close":"\u5173\u95ED\u60AC\u6D6E\u7403","floatBallOptions.enableDescPc":"\u542F\u7528\u9875\u9762\u60AC\u6D6E\u7403\u540E\uFF0C\u4F1A\u5728\u9875\u9762\u53F3\u4FA7\u663E\u793A\u4E00\u4E2A\u5FEB\u6377\u7FFB\u8BD1\u6309\u94AE\uFF0C\u70B9\u51FB\u5373\u53EF\u7FFB\u8BD1","floatBallOptions.enableDesc":"\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","description.azureApiUrl":"\u586B\u5199\u81EA\u5B9A\u4E49\u7684API\u63A5\u53E3\u5730\u5740",shareBtnTitle:"\u70B9\u51FB\u5206\u4EAB\u8BE5\u53CC\u8BED\u9875\u9762\u7ED9\u670B\u53CB","floatBall.share":"\u5206\u4EAB\u9875\u9762",confirmSupportMouse:"\u5F3A\u5236\u542F\u7528\u9F20\u6807\u652F\u6301",confirmSupportMouseDescription:"\u68C0\u6D4B\u5230\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u9F20\u6807\u529F\u80FD\uFF0C\u662F\u5426\u5F3A\u5236\u542F\u7528\u9F20\u6807\u652F\u6301\uFF1F",sampleTargetText:"\u957F\u591C\u5C06\u81F3\uFF0C\u6211\u4ECE\u4ECA\u5F00\u59CB\u5B88\u671B\uFF0C\u81F3\u6B7B\u65B9\u4F11\u3002\u6211\u5C06\u4E0D\u5A36\u59BB\u3001\u4E0D\u5C01\u5730\u3001\u4E0D\u751F\u5B50\u3002\u6211\u5C06\u4E0D\u6234\u5B9D\u51A0\uFF0C\u4E0D\u4E89\u8363\u5BA0\u3002\u6211\u5C06\u5C3D\u5FE0\u804C\u5B88\uFF0C\u751F\u6B7B\u4E8E\u65AF\u3002",sampleSourceText:"Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post.","subtitle.supportedSites":"\u5DF2\u652F\u6301\u5728\u8FD9\u4E9B\u7F51\u7AD9\u4F7F\u7528\u53CC\u8BED\u5B57\u5E55\uFF08\u6CE8\u610F\uFF1A\u7531\u4E8E\u6280\u672F\u9650\u5236\uFF0C\u90E8\u5206\u7F51\u7AD9\u5728\u9996\u6B21\u5F00\u542F\u5B57\u5E55\u540E\u9700\u8981\u91CD\u65B0\u5237\u65B0\u9875\u9762\uFF0C\u6216\u8005\u9700\u7B49\u5F85\u7FFB\u8BD1\u5B8C\u6210\u4EE5\u663E\u793A\u53CC\u8BED\u5B57\u5E55\uFF09\uFF1A",viewWithImmersiveTranslate:"\u53CC\u8BED\u7248\u672C(\u6C89\u6D78\u5F0F\u7FFB\u8BD1)",errorReason:"\u9519\u8BEF\u539F\u56E0\uFF1A{message}","proQuotaExceededError.onetime7day":'\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u4EE5\u4E0B\u65B9\u5F0F\u89E3\u51B3\uFF1A<br/><br/>1. \u5207\u6362\u5230 {anotherService} \u6216\u5176\u4ED6\u7FFB\u8BD1\u670D\u52A1<br/>2. \u5347\u7EA7\u4E3A<a class="{brandId}-primary-link" href="{href}" target="_blank">\u6708\u5EA6/\u5E74\u5EA6\u4F1A\u5458</a>',"proQuotaExceededError.trial":'\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u4EE5\u4E0B\u65B9\u5F0F\u89E3\u51B3\uFF1A<br/><br/>1. \u5207\u6362\u5230 {anotherService} \u6216\u5176\u4ED6\u7FFB\u8BD1\u670D\u52A1<br/>2. \u7ACB\u523B<a class="{brandId}-primary-link" href="{href}" target="_blank">\u5347\u7EA7\u4E3A\u6B63\u5F0F\u4F1A\u5458</a>',"proQuotaExceededError.nonTrial":'\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u4EE5\u4E0B\u65B9\u5F0F\u89E3\u51B3\uFF1A<br/><br/>1. \u5207\u6362\u5230 {anotherService} \u6216\u5176\u4ED6\u7FFB\u8BD1\u670D\u52A1<br/>2. \u8D2D\u4E70<a class="{brandId}-primary-link" href="{href}" target="_blank"> {translationService} \u989D\u5916\u6D41\u91CF\u5305</a>',"proQuotaExceededError.resetTime":"<br/>3. \u989D\u5EA6\u91CD\u7F6E\u65F6\u95F4\uFF1A{resetTime}",paragraphMinTextCountField:"\u7FFB\u8BD1\u6BB5\u843D\u6240\u9700\u7684\u6700\u5C11\u5B57\u7B26\u6570",paragraphMinTextCountDesc:"\u6CE8\u610F\uFF0C\u8FD9\u91CC\u6307\u7684\u5B57\u7B26\u957F\u5EA6\uFF0C\u6BD4\u5982: hello \u662F 5 \u4E2A\u5B57\u7B26, \u8BBE\u7F6E\u4E3A\u66F4\u5927\u7684\u503C\u53EF\u4EE5\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u5C0F\u6BB5\u843D\u7FFB\u8BD1"};var eg={nologin:"\u672A\u767B\u9304",loginForSafari:"\u767B\u5165\u6216\u8A3B\u518A",login:"\u767B\u9304",manageAccount:"\u7BA1\u7406\u8CEC\u6236",openPremium:"\u958B\u901A\u6703\u54E1",logout:"\u9000\u51FA",curentPlan:"\u7576\u524D\u5957\u9910",endAt:"\u5230\u671F",endAuto:"\u81EA\u52D5\u7E8C\u671F",lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u5143\u6578\u91CF","translate-pdf":"\u9EDE\u9078\u7FFB\u8B6F PDF","noSupportTranslate-pdf":"\u8173\u672C\u4E0D\u652F\u63F4\uFF0C\u8ACB\u4F7F\u7528\u64F4\u5145\u5957\u4EF6","translate-firefox-local-pdf":"\u9EDE\u64CA\u53BB\u5C0E\u5165PDF",enableLineBreak:"\u958B\u555F\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D0A\u52A9\u958B\u767C\u8005 (\u6708\u4ED8\u6216\u50C5\u8D0A\u52A9\u4E00\u6B21\u5747\u53EF)",help:"\u8AAA\u660E",browserShortcutsNoteForFirefox:"Firefox \u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u9644\u52A0\u5143\u4EF6\u7BA1\u7406\u9801\u9762 \u300Cabout:addons\u300D\uFF0C\u7136\u5F8C\u9EDE\u9078\u300C\u8A2D\u5B9A\u5716\u793A\u300D\uFF0C\u518D\u9EDE\u9078\u300C\u7BA1\u7406\u64F4\u5145\u5957\u4EF6\u5FEB\u901F\u9375\u300D\u5373\u53EF\u8A2D\u5B9A",browserShortcutsNoteForChrome:"Chromium \u6838\u5FC3\u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u64F4\u5145\u529F\u80FD\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u300C\u9375\u76E4\u5FEB\u901F\u9375\u300D\u9801\u9762(chrome://extensions/shortcuts)\u8A2D\u5B9A\uFF0C\u9EDE\u9078\u4E0B\u65B9\u6309\u9215\u524D\u5F80\u5FEB\u901F\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u901F\u9375\u683C\u5F0F\u70BA\uFF1A (\u6CA1\u6709\u505A\u81EA\u52A8\u8BC6\u522B\uFF0C\u8BF7\u76F4\u63A5\u8F93\u5165)\uFF1A",enableLineBreakDescription:"\u555F\u7528\u5F8C\uFF0C\u5C07\u6703\u5728\u9577\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u5B57\u5143\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.shortBrandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F: \u96D9\u8A9E\u5C0D\u7167\u7DB2\u9801\u7FFB\u8B6F & PDF\u6587\u6A94\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u652F\u6301PDF\u7FFB\u8B6F\uFF0C\u96D9\u8A9EEpub\u96FB\u5B50\u66F8\u88FD\u4F5C\uFF0CYoutube/Netflix/Udemy \u7B49\u5E73\u53F0\u96D9\u8A9E\u5B57\u5E55\uFF0C\u652F\u6301Deepl/Google\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u514D\u8CBB\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8B6F\u4E26\u96B1\u85CF\u539F\u6587/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.shareToDraft":"\u5206\u4EAB\u96D9\u8A9E\u9801\u9762","browser.openOptionsPage":"\u958B\u555F\u8A2D\u5B9A\u9801\u9762","browser.toggleTranslationMask":"\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u6A5F PDF \u6A94\u6848","browser.openEbookViewer":"\u95B1\u8B80\u672C\u6A5F\u96FB\u5B50\u66F8","browser.openEbookBuilder":"\u88FD\u4F5C\u96D9\u8A9E EPUB \u96FB\u5B50\u66F8","browser.translateLocalHtmlFile":"\u7FFB\u8B6F HTML/txt \u6A94\u6848","browser.donateContext":"\u4E86\u89E3\u8D0A\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8B6F\u5B57\u5E55\u6A94\u6848",confirmResetConfig:"\u4F60\u78BA\u5B9A\u8981\u91CD\u8A2D\u8A2D\u5B9A\u55CE\uFF1F",translationLineBreakSettingTitle:"\u8B6F\u6587\u63DB\u884C\u8A2D\u5B9A",smartLineBreak:"\u667A\u6167\u63DB\u884C",alwaysLineBreak:"\u7E3D\u662F\u63DB\u884C",isShowContextMenu:"\u5C07\u7DB2\u9801\u7FFB\u8B6F\u529F\u80FD\u52A0\u5165\u53F3\u9375\u9078\u55AE",toggleBeta:"\u958B\u555F Beta \u6E2C\u8A66\u529F\u80FD",betaDescription:"\u555F\u7528\u4ECD\u5728\u5BE6\u9A57\u7684\u529F\u80FD\u4EE5\u53CA\u6E2C\u8A66\u4E2D\u7684\u7FFB\u8B6F\u670D\u52D9\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7D44</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u7E3D\u662F\u63DB\u884C\u9069\u7528\u65BC\u8F03\u5C11\u5167\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F4A\u3002(\u5728\u5167\u5BB9\u8F03\u591A\u7684\u9577\u6BB5\u843D(\u8D85\u904E {count} \u500B\u5B57\u5143) \u4F7F\u7528\u667A\u6167\u63DB\u884C\u6703\u66F4\u7701\u7A7A\u9593)",tempTranslateDomainTitle:"\u81E8\u6642\u958B\u555F\u7DB2\u7AD9\u7FFB\u8B6F\u7684\u6642\u9577",tempTranslateDomainDescription:"\u7576\u624B\u52D5\u7FFB\u8B6F\u67D0\u500B\u7DB2\u9801\u7684\u6642\u5019\uFF0C\u81E8\u6642\u958B\u555F\u8A72\u7DB2\u7AD9\u70BA\u81EA\u52D5\u7FFB\u8B6F",xMinutes:"{count} \u5206\u9418",disabled:"\u505C\u7528",changelog:"\u66F4\u65B0\u8A18\u9304",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u5247\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u6642\u89F8\u78B0\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801(\u50C5\u8B6F\u6587)/\u986F\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u70BA\u7DB2\u57DF\u540D\u7A31\uFF0C\u540C\u6642\u652F\u63F4\u842C\u7528\u5B57\u5143\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u5B9A",clickToExpandConfig:"\u5C55\u958B\u76EE\u524D\u8A2D\u5B9A",import:"\u5F9E\u6A94\u6848\u532F\u5165",export:"\u532F\u51FA\u70BA\u6A94\u6848",toggleDebug:"\u5728\u4E3B\u63A7\u53F0\u986F\u793A\u5075\u932F\u8A18\u9304","fingers.0":"\u95DC\u9589","fingers.2":"\u96D9\u6307\u89F8\u6478","fingers.3":"\u4E09\u6307\u89F8\u6478","fingers.4":"\u56DB\u6307\u89F8\u6478","fingers.5":"\u4E94\u6307\u89F8\u6478",mouseHoldKey:"+ {key} \u7FFB\u8B6F/\u9084\u539F\u8A72\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u7FA9\u5FEB\u6377\u9375(\u6253\u958B\u8A2D\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8B6F/\u9084\u539F\u8A72\u6BB5",mouseHoverHoldKey:"\u9F20\u6A19\u6ED1\u904E\u540C\u6642\u6309\u4E0B X \u9375\u7FFB\u8B6F\u6BB5\u843D","mouse-translate":"\u9F20\u6A19\u6ED1\u904E",document:"\u8AAA\u660E\u6587\u4EF6",resetSuccess:"\u91CD\u8A2D\u6240\u6709\u8A2D\u5B9A\u6210\u529F",resetThisSuccess:"\u91CD\u8A2D\u6210\u529F",saved:"\u5132\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u532F\u5165\u8A2D\u5B9A",goAdvancedSettings:"\u524D\u5F80\u9032\u968E\u8A2D\u5B9A\u9801\u9762",goAdvancedInterfaceSettings:"\u524D\u5F80\u81EA\u8A02\u8A2D\u5B9A\u9801\u9762",advanced:"\u9032\u968E\u8A2D\u5B9A",advancedDescription:"\u6B63\u5E38\u60C5\u6CC1\u7121\u9700\u8A2D\u5B9A\uFF0C\u4FDD\u6301\u9810\u8A2D\u5373\u53EF\u3002\u50C5\u91DD\u5C0D\u66F4\u5C08\u696D\u7684\u4F7F\u7528\u8005\uFF0C\u63D0\u4F9B\u66F4\u500B\u4EBA\u5316\u7684\u8A2D\u5B9A\u9805\u76EE\u3002",developer:"\u958B\u767C\u8005\u8A2D\u5B9A",donateCafe:"\u50F9\u683C","translate to the bottom of the page":"\u9032\u5165\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u56DE\u5831",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u555F\u7528\u5F8C\uFF0C\u9032\u5165\u7DB2\u9801\u5C07\u7ACB\u5373\u7FFB\u8B6F\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\u3002\u95DC\u9589\u5247\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u555F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6240\u6709\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\u3002\u95DC\u9589\u5247\u4F7F\u7528\u9810\u8A2D\u7684\u667A\u6167\u8FA8\u8B58\uFF0C\u50C5\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\u3002(\u4E0D\u63A8\u85A6\u958B\u555F)","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8B6F\u9801\u9762\u524D\u591A\u5C11\u500B\u5B57\u5143\uFF0C\u800C\u7121\u9700\u7B49\u5F85\u6372\u52D5\u81F3\u53EF\u898B\u5340\u57DF","interface language":"\u4ECB\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u901F\u9375",modify:"\u8B8A\u66F4\u5FEB\u901F\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u9996\u9801",more:"\u66F4\u591A",moreOptions:"\u5C55\u958B\u66F4\u591A\u81EA\u8A02\u9078\u9805",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u6240\u6709\u5340\u57DF",changeToTranslateTheMainPage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",changeToOnlyTranslationMode:"\u5207\u63DB\u70BA\u50C5\u986F\u793A\u8B6F\u6587",changeToDualTranslationMode:"\u5207\u63DB\u70BA\u96D9\u8A9E\u7FFB\u8B6F",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u6167\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u6A5F\u898F\u5247\u5DF2\u70BA\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u5B98\u65B9\u898F\u5247",localVersionIsTooOld:"\u672C\u6A5F\u5957\u4EF6\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u5957\u4EF6\u81F3 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5617\u8A66\u540C\u6B65",badUserscriptBrowser:"\u76EE\u524D\u700F\u89BD\u5668\u7121\u6CD5\u6B63\u78BA\u5BE6\u73FE\u6CB9\u7334\u5957\u4EF6\u7684\u4ECB\u9762\uFF0C\u8ACB\u4F7F\u7528\u5176\u4ED6<1>\u652F\u63F4\u6CB9\u7334\u5957\u4EF6</1>\u7684\u700F\u89BD\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u6709\u65B0\u7248\u672C\u53EF\u7528",theLocalExtensionIsUpToUpdate:"\u76EE\u524D\u5957\u4EF6\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u91CD\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u76EE\u524D\u898F\u5247\u7248\u672C",calculating:"\u6B63\u5728\u8A08\u7B97",unknownError:"\u672A\u77E5\u7684\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u53D6\u5F97\u9060\u7AEF\u898F\u5247",enableAlphaSuccess:"\u5DF2\u555F\u7528 Alpha \u529F\u80FD",disableAlphaSuccess:"\u5DF2\u505C\u7528 Alpha \u529F\u80FD",cacheSize:"\u5FEB\u53D6\u5927\u5C0F\uFF1A",cleaning:"\u6B63\u5728\u6E05\u7406",cleanCache:"\u6E05\u9664\u5FEB\u53D6",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"(\u524D\u5F80\u8A2D\u5B9A)",goSettings:"\u524D\u5F80\u8A2D\u5B9A",needActionForOptions:"(\u9700\u8A2D\u5B9A)",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u7576\u524D\u7DB2\u7AD9",autoEnableSubtitle:"\u81EA\u52D5\u958B\u555F\u96D9\u8A9E\u5B57\u5E55",alwaysTranslate:"\u7E3D\u662F\u7FFB\u8B6F",neverTranslate:"\u6C38\u4E0D\u7FFB\u8B6F",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F {language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",alwaysTranslateSomeSiteOrWildSite:"\u7E3D\u662F\u7FFB\u8B6F\u7DB2\u7AD9",alwaysTranslateSomePage:"\u7E3D\u662F\u7FFB\u8B6F\u8A72\u7DB2\u9801",add:"\u65B0\u589E",default:"\u9810\u8A2D",forThisLanguage:"\u91DD\u5C0D\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165 URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u5B83\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u5B9A\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4F60\u60F3\u7528\u7684\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u6B63\u5728\u7FFB\u8B6F",Error:"\u932F\u8AA4",allowCacheTranslations:"\u555F\u7528\u672C\u6A5F\u7FFB\u8B6F\u5FEB\u53D6\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8981\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u7BC4\u4F8B",interface:"\u4ECB\u9762\u8A2D\u5B9A",import_export:"\u532F\u5165/\u532F\u51FA",import_export_title:"\u532F\u5165/\u532F\u51FA\u8A2D\u5B9A",syncToGoogleDrive:"\u7ACB\u5373\u8207 Google Drive \u540C\u6B65",floatBallOptions:"\u61F8\u6D6E\u7403\u8A2D\u7F6E","floatBallOptions.enable":"\u555F\u7528\u61F8\u6D6E\u7403","floatBallOptions.blockUrls":"\u7981\u7528\u7DB2\u7AD9","floatBallOptions.add":"\u6DFB\u52A0","floatBallOptions.blockUrlDesc":"\u7576\u9047\u5230\u4EE5\u4E0B\u7DB2\u7AD9\u6642\u4E0D\u986F\u793A\u61F8\u6D6E\u7403","floatBallOptions.clickType":"\u9EDE\u64CA\u884C\u70BA","floatBallOptions.clickTypeDesc":"\u61F8\u6D6E\u7403\u5716\u6A19\u9EDE\u64CA\u6642\u7684\u884C\u70BA","floatBallOptions.clickPopup":"\u986F\u793A\u7FFB\u8B6F\u9762\u677F","floatBallOptions.clickTranslate":"\u7FFB\u8B6F/\u986F\u793A\u539F\u6587","floatBallOptions.fixedPosition":"\u56FA\u5B9A\u4F4D\u7F6E","floatBallOptions.fixedPositionDesc":"\u61F8\u6D6E\u7403\u5728\u7A97\u53E3\u5DE6\u5074\u9084\u662F\u53F3\u5074","floatBallOptions.fixedPositionLeft":"\u5DE6\u5074","floatBallOptions.fixedPositionRight":"\u53F3\u5074",previewAllThemes:"\u9810\u89BD\u5168\u90E8\u6A23\u5F0F","translationTheme.none":"\u7121","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u5E95\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u6846\u7DDA","translationTheme.solidBorder":"\u5BE6\u7DDA\u6846\u7DDA","translationTheme.underline":"\u76F4\u7DDA\u5E95\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B78\u7FD2\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u9694\u7DDA","translationTheme.highlight":"\u9192\u76EE\u63D0\u793A","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.marker2":"\u99AC\u514B\u7B462","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDashed":"\u7CFB\u7D71\u5167\u5EFA\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDotted":"\u7CFB\u7D71\u5167\u5EFA\u9EDE\u72C0\u5E95\u7DDA","translationTheme.nativeUnderline":"\u7CFB\u7D71\u5167\u5EFA\u76F4\u7DDA\u5E95\u7DDA","translationTheme.wavy":"\u6CE2\u5F62\u66F2\u7DDA","translationServices.custom":"\u81EA\u5B9A\u7FA9API","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.tenAlpha":"\u9A30\u8A0A\u7FFB\u8B6F\u541B(Alpha)","translationServices.google":"Google \u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeepLX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8B6F","translationServices.deepl":"DeepL","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"Azure \u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.cai":"\u5F69\u96F2\u5C0F\u8B6F (Alpha)","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.you":"\u6709\u9053\u7FFB\u8B6F (Alpha)","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.niu":"\u5C0F\u725B\u7FFB\u8B6F","translationServices.papago":"Papago \u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u7576\u9801\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u5C07\u8DF3\u904E\u7FFB\u8B6F",enableUserscriptPagePopup:"\u5728\u9801\u9762\u4E0A\u986F\u793A\u61F8\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528\u5FEB\u901F\u9375/{touch}\u518D\u6B21\u986F\u793A\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5EFA\u8B70\u5C07\u672C\u8A2D\u5B9A\u9801\u9762\u52A0\u5165\u81F3\u6211\u7684\u6700\u611B","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u91D1\u9470\u5F8C\u624D\u53EF\u4F7F\u7528\uFF0C\u8A73\u7D30\u8CC7\u8A0A\u8ACB\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u91D1\u9470\u7533\u8ACB\u548C\u8A2D\u5B9A\u6559\u5B78\u300B",useAboveStyleForTheseSites:"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u7E3D\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8B6F\u6587\u6A23\u5F0F",currentUrl:"\u76EE\u524D\u7DB2\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C",syncToCloud:"\u540C\u6B65\u81F3\u96F2\u7AEF",syncToCloudDescription:"\u4E0A\u50B3\u81F3\u96F2\u7AEF\u5F8C\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u700F\u89BD\u5668/\u6CB9\u7334\u8173\u672C\u4E4B\u9593\u540C\u6B65\u8A2D\u5B9A\uFF0C\u4EE5\u6700\u5F8C\u8B8A\u66F4\u6642\u9593\u70BA\u6E96\u3002",syncToAccount:"\u540C\u6B65\u5230\u8CEC\u6236",syncToAccountButton:"\u7ACB\u5373\u8207\u96F2\u7AEF\u540C\u6B65",syncToAccountDescription:"\u4E0A\u50B3\u5230\u5DF2\u767B\u9304\u8CEC\u6236\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u8A2D\u5099\u4E4B\u9593\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u5F8C\u4FEE\u6539\u6642\u9593\u70BA\u6E96\u3002",successSyncConfigInAccount:"\u6210\u529F\u8207\u8CEC\u6236\u4FDD\u6301\u540C\u6B65",successSyncConfigToAccount:"\u6210\u529F\u540C\u6B65\u5230\u8CEC\u6236",syncConfigNoUpdate:"\u5DF2\u7D93\u662F\u6700\u65B0\u7684\u4E86",authFail:"\u6388\u6B0A\u5931\u6557",syncTitle:"\u624B\u52D5\u5099\u4EFD\u7BA1\u7406",import_hint:"\u532F\u5165",upload:"\u4E0A\u50B3",revokeAuth:"\u64A4\u92B7\u6388\u6B0A",uploadFail:"\u4E0A\u50B3\u5931\u6557",download:"\u4E0B\u8F09",importSuccess:"\u532F\u5165\u6210\u529F",importFail:"\u532F\u5165\u5931\u6557",deleteFail:"\u522A\u9664\u5931\u6557",backupToCloud:"\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6A94\u6848",create_new_backup:"\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE\uFF0C\u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",backupToCloudDescription:"\u624B\u52D5\u4E0A\u50B3\u6216\u9084\u539F\u5099\u4EFD\u6A94\u6848\uFF0C\u6700\u591A\u5141\u8A31 3 \u500B\u4E0D\u540C\u7684\u5099\u4EFD",successSyncConfig:"\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u6557",updatedAt:"\u66F4\u65B0\u65BC {date}",lastSyncedAt:"\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",downloadFail:"\u4E0B\u8F09\u5931\u6557",clickToDownload:"\u9EDE\u9078\u4E0B\u8F09",aboutLabel:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831","browser.openAboutPage":"\u95DC\u65BC/\u554F\u984C\u56DE\u5831",aboutLabelWithoutSponsor:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831",aboutIntro:"\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F \u4F60\u53EF\u4EE5\u9078\u64C7\u958B\u901A <6>Pro\u6703\u54E1</6> \u4F86\u4F7F\u7528\u958B\u7BB1\u5373\u7528\u7684 DeepL \u548C OpenAI \u7FFB\u8B6F\u3002<br/><br/>\u4F60\u53EF\u4EE5\u95DC\u6CE8\u6211\u4EEC\u7684<3>Twitter</3>\uFF0C<4>Telegram \u983B\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90F5\u4EF6\u8A02\u95B1</5>\u8FFD\u8E64\u66F4\u65B0\u3002<br/> <7>Pro \u6703\u54E1</7> \u53EF\u4EE5\u901A\u904E\u5FEB\u901F\u5BA2\u670D\u90F5\u7BB1 <8>support@immersivetranslate.com</8> \u548C\u6211\u5011\u53D6\u5F97\u806F\u7E6B\u3002",aboutIntroWithoutSponsor:"\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F ",projectHomepage:"\u5C08\u6848\u9996\u9801",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u7D44\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u773E\u865F",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u983B\u9053",joinTelegramChannel:"\u95DC\u6CE8 Telegram \u983B\u9053\u77AD\u89E3\u66F4\u65B0\u8CC7\u8A0A",feedbackAndJoin:"\u554F\u984C\u56DE\u5831/\u52A0\u5165\u7FA4\u7D44",autoSync:"\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",loadingThemeTitle:"Loading \u6A23\u5F0F",loadingThemeDescription:"\u8A2D\u5B9A\u7B49\u5F85\u8B6F\u6587\u8F09\u5165\u6642\u7684\u6A23\u5F0F","loadingTheme.spinner":"\u8F49\u5708\u52D5\u756B","loadingTheme.text":"\u975C\u614B\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u986F\u793A",developerDescription:"\u53EF\u4EE5\u9EDE\u9078<1>\u6B64\u8655</1>\u6AA2\u8996\u9032\u968E\u81EA\u8A02\u529F\u80FD\u76F8\u95DC\u7684\u8AAA\u660E\u6587\u4EF6","edit border color":"\u8B8A\u66F4\u908A\u6846\u8272\u5F69",successSyncButNoChange:"\u76EE\u524D\u8A2D\u5B9A\u8207\u96F2\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u8A02\u8272\u5F69\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u908A\u6846\u8272\u5F69","customThemeLabel.borderRadius":"\u908A\u6846\u5713\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u8272\u5F69","customThemeLabel.backgroundColor":"\u80CC\u666F\u8272\u5F69","customThemeLabel.zoom":"\u5B57\u578B\u7E2E\u653E\u6BD4\u4F8B (%)","customThemeLabel.opacity":"\u6587\u5B57\u4E0D\u900F\u660E\u5EA6(%)",resetToDefaultColor:"\u9084\u539F\u70BA\u9810\u8A2D\u8272\u5F69",resetToDefaultSettings:"\u9084\u539F\u70BA\u9810\u8A2D\u8A2D\u5B9A",isTranslateTitle:"\u555F\u7528\u7DB2\u9801\u6A19\u984C\u7FFB\u8B6F",isTranslateTitleDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6A19\u984C\u6703\u88AB\u7FFB\u8B6F",enableSearchEnhancement:"\u958B\u555F\u641C\u7D22\u589E\u5F37",enableSearchEnhancementDescription:"\u4E2D\u6587\u641C\u7D22\u8C37\u6B4C\u6703\u5728\u53F3\u908A\u51FA\u73FE\u82F1\u6587\u7248\u8C37\u6B4C\u65B0\u805E",verifyService:"\u9EDE\u6B64\u6E2C\u8A66\u670D\u52D9",verified:"\u9A57\u8B49\u6210\u529F","field.langs":"\u652F\u63F4\u7684\u8A9E\u8A00\u4EE3\u78BC","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8B6F\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u9418\u6700\u5927\u8981\u6C42\u6578","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8981\u6C42\u6578","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u7684\u6700\u5927\u6587\u5B57\u9577\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u6700\u5927\u6BB5\u843D\u6578","field.apiUrl":"\u81EA\u8A02 API \u4F4D\u5740","field.placeholderDelimiters":"\u4FDD\u7559\u7684\u4F54\u4F4D\u7B26","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>\u81EA\u5B9A\u7FA9\u63A5\u53E3\u63A5\u5165</a> \u9700\u8981\u53C3\u8003\u6587\u6A94","description.limitPerMinute":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u5206\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u79D2\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.generalLimitPerSecond":"\u8ACB\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u9032\u5165\u6392\u968A\u72C0\u614B\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u9418\u958B\u59CB\u3002","description.prompt":"\u4EE5\u4F7F\u7528\u8005\u8EAB\u4EFD\u50B3\u9001\u7D66 OpenAI \u7684\u5C0D\u8A71\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u5B57\u5167\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8A9E\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6A19\u8A9E\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u85A6\uFF09, \u5C07\u6703\u5728\u55AE\u7368\u4F5C\u70BA\u4E00\u6BB5\u767C\u9001\u7D66 OpenAI","description.maxTextLengthPerRequest":"\u9810\u8A2D\u6703\u5408\u4F75\u591A\u500B\u6BB5\u843D\uFF0C\u4EE5\u6E1B\u5C11\u8ACB\u8981\u6C42\u6578\uFF0C\u4F46\u662F\u5982\u679C\u6BB5\u843D\u7E3D\u9577\u5EA6\u904E\u9577\uFF0C\u4E5F\u53EF\u80FD\u6703\u5C0E\u81F4 API \u7684\u56DE\u61C9\u6642\u9593\u589E\u52A0\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5617\u8A66\u8ABF\u6574\u8A72\u9078\u9805\u4F86\u63D0\u5347\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7D71\u50B3\u9001\u767C\u9001\u7D66 OpenAI \u7684\u5C0D\u8A71\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u5B57\u5167\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8A9E\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6A19\u8A9E\u8A00","field.domain":"\u9818\u57DF","description.domain":"\u9ED8\u8A8D\u70BA\uFF1Ageneral\u3002\u50C5\u5728\u6709\u9053API\u63A7\u5236\u53F0\u958B\u901A\u9818\u57DF\u5316\u7FFB\u8B6F\u7684\u60C5\u6CC1\u4E0B\u53EF\u8A2D\u7F6E\uFF0C\u652F\u6301\u9818\u57DF\u898B<1>\u9019\u88E1</1>","field.scene":"\u5834\u666F","description.scene":"\u9ED8\u8A8D\u70BA\uFF1Ageneral\u3002\u50C5\u5728\u963F\u91CC\u96F2API\u63A7\u5236\u53F0\u958B\u901A\u6A5F\u5668\u7FFB\u8B6F\u5C08\u696D\u7248\u7684\u60C5\u6CC1\u4E0B\u53EF\u8A2D\u7F6E\uFF0C\u652F\u6301\u5834\u666F\u898B<1>\u9019\u88E1</1>","field.vocabId":"\u4F7F\u7528\u8005\u8A5E\u5178ID","description.vocabId":"\u6307\u5B9A\u7684\u5B57\u5178out_id\uFF0C\u76EE\u524D\u652F\u63F4\u82F1\u8B6F\u4E2D","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u70BA gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u50B3\u9001\u7D66\u7FFB\u8B6F\u670D\u52D9\u7684\u6BB5\u843D\u6578\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6578\u91CF\u904E\u591A\uFF0C\u53EF\u80FD\u6703\u5C0E\u81F4\u56DE\u61C9\u901F\u5EA6\u8B8A\u6162","description.apiUrl":"\u8ACB\u52A0\u5165\u5177\u9AD4\u5305\u542B\u8DEF\u5F91\u7684\u7DB2\u5740",enabledExtension:"\u555F\u7528\u5957\u4EF6",clickToDisableExtension:"\u9EDE\u9078\u505C\u7528\u5957\u4EF6",clickToEnableExtension:"\u9EDE\u9078\u555F\u7528\u5957\u4EF6",hasBeenDisabled:"\u5DF2\u505C\u7528","show password":"\u986F\u793A\u5BC6\u78BC",customContent:"\u8F38\u5165\u81EA\u5B9A\u7FA9\u6A21\u578B",inputOptions:"\u8F38\u5165\u6846\u589E\u5F37",mouseHoverOptions:"\u9F20\u6A19\u6ED1\u904E",modifyMouseHoverKey:"\u4FEE\u6539\u6ED1\u9F20\u61F8\u505C\u5FEB\u6377\u9375",enableInputTranslation:"\u662F\u5426\u555F\u7528\u8F38\u5165\u6846\u589E\u5F37",enableInputTranslationDescription:"\u555F\u7528\u5F8C\uFF0C\u8F38\u5165\u6846\u76F4\u63A5\u8F38\u5165 {startingKey}{startingKey} \u4F60\u597D\uFF0C\u7136\u5F8C\u5FEB\u901F\u9023\u64CA{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8B6F\u70BA {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:"\u555F\u7528\u5F8C\uFF0C\u8F38\u5165\u6846\u76F4\u63A5\u8F38\u5165\uFF1A\u4F60\u597D\u4E16\u754C\uFF0C\u7136\u5F8C\u5FEB\u901F\u9023\u64CA{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8B6F\u70BA\u9810\u8A2D\u76EE\u6A19\u8A9E\u8A00",inputTargetLanguage:"\u8A2D\u5B9A\u8F38\u5165\u6846\u7684\u9810\u8A2D\u76EE\u6A19\u8A9E\u8A00",inputTargetLanguageDescription:"\u8F38\u5165\u6846\u7FFB\u8B6F\u7684\u9810\u8A2D\u76EE\u6A19\u8A9E\u8A00\uFF0C\u4E5F\u5C31\u662F {startingKey}{startingKey} \u4F5C\u70BA\u89F8\u767C\u8A5E\u7684\u9810\u8A2D\u8A9E\u8A00",inputTargetLanguageDescriptionForNoneKey:"\u8F38\u5165\u6846\u7FFB\u8B6F\u7684\u9810\u8A2D\u76EE\u6A19\u8A9E\u8A00",inputStartingTriggerKeyTitle:"\u8A2D\u5B9A\u8F38\u5165\u6846\u90E8\u5206\u7FFB\u8B6F\u7684\u5206\u5272\u5B57\u7B26",inputStartingTriggerKeyDescription:"\u7576\u4F60\u4E0D\u9700\u8981\u7FFB\u8B6F\u6574\u500B\u8F38\u5165\u6846\u7684\u6642\u5019\uFF0C\u5206\u5272\u7B26\u5141\u8A31\u4F60\u53EA\u7FFB\u8B6F {startingKey}{startingKey} \u5230\u8F38\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8A9E\u8A00\u4EE3\u78BC\uFF0C\u4F8B\u5982\uFF1A{startingKey}ja \u8868\u793A\u53EA\u7FFB\u8B6F {startingKey}ja \u5230\u8F38\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206",inputStartingTriggerKeyDescriptionForNoneKey:"\u76EE\u524D\u8A2D\u5B9A\u70BA\u7121\u9700\u524D\u7DB4\uFF0C\u66AB\u7121\u6CD5\u4F7F\u7528\u8F38\u5165\u6846\u7684\u90E8\u5206\u6587\u5B57\u7FFB\u8B6F\u529F\u80FD",inputTrailingTriggerKeyTitle:"\u9078\u64C7\u4E00\u500B\u8F38\u5165\u7D50\u675F\u7684\u89F8\u767C\u5B57\u7B26",inputTrailingTriggerKeyDescription:"\u5FEB\u901F\u9023\u64CA3 \u6B21{trailingKey} \u5C07\u6703\u958B\u59CB\u7FFB\u8B6F",inputTrailingTriggerKeyTimeout:"\u8F38\u5165\u7D50\u675F\u9023\u64CA\u89F8\u767C\u7684\u9593\u9694\u6642\u9593",inputTrailingTriggerKeyTimeoutDescription:"\u8A2D\u7F6E\u8F38\u5165\u7D50\u675F\u9023\u64CA\u89F8\u767C\u7684\u9593\u9694\u6642\u9593\uFF08\u6BEB\u79D2\uFF09",spaceKey:"<\u7A7A\u683C\u9375>",noneKey:"\u7121\u9700\u524D\u7DB4\uFF0C\u76F4\u63A5\u7FFB\u8B6F\u6574\u500B\u6587\u5B57\u6846",inputTranslationBlockUrlsTitle:"\u5207\u52FF\u5728\u4EE5\u4E0B\u7DB2\u5740\u4E2D\u555F\u7528\u8F38\u5165\u6846\u589E\u5F37",inputTranslationBlockUrlsDescription:"\u5728\u4EE5\u4E0B\u7DB2\u5740\u4E2D\uFF0C\u8F38\u5165\u6846\u589E\u5F37\u5C07\u4E0D\u6703\u751F\u6548",clickToSeeQuickDemo:"\u9EDE\u64CA\u5C55\u958B30 \u79D2\u5FEB\u901F\u6559\u5B78\u8996\u983B",inputHelperInfo:"\u8AAA\u660E\uFF1A\u6211\u5011\u7279\u5225\u91DD\u5C0D\u5728\u4E2D\u6587\u8F38\u5165\u6CD5\u4E0B\u90E8\u5206\u89F8\u767C\u5B57\u7B26\u6703\u8B8A\u6210\u4E2D\u6587\u6A19\u9EDE\u7B26\u865F\u9019\u4EF6\u4E8B\u505A\u4E86\u512A\u5316\uFF0C\u6BD4\u5982\u641C\u72D7\u8F38\u5165\u6CD5\u4E0B / \u6703\u8B8A\u6210\u9813\u865F \u3001\uFF0C\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u652F\u6301\u6240\u6709\u89F8\u767C\u7B26\u5C0D\u61C9\u7684\u4E2D\u6587\u7B26\u865F\uFF0C\u4E5F\u5C31\u662F\u8AAA // \u3001\u3001 \u90FD\u6703\u88AB\u8B58\u5225\u70BA\u89F8\u767C\u5B57\u7B26\u3002<br/><br/>\u540C\u6642\u6211\u5011\u4E5F\u652F\u6301\u8A9E\u8A00\u4EE3\u78BC\u7684\u4E2D\u6587\u5225\u540D\u4F5C\u70BA\u547D\u4EE4\uFF0C\u6BD4\u5982 /\u65E5\u6587 \u4F60\u597D\u4E16\u754C \u6703\u88AB\u7FFB\u8B6F\u70BA\u65E5\u6587\uFF0C<1>\u9EDE\u6B64\u67E5\u770B\u6240\u6709\u652F\u63F4\u7684\u8A9E\u8A00\u4EE3\u78BC</1>\u3002",reloadCurrentPage:"\u8ACB\u5148\u5237\u65B0\u76EE\u524D\u9801\u9762\uFF0C\u518D\u958B\u59CB\u7FFB\u8B6F",noLocalFilePermissionForPDF:"\u66AB\u7121\u6B0A\u9650\u8B80\u53D6\u672C\u6A5F\u6587\u4EF6\uFF0C\u8ACB\u9EDE\u9078\u4E0A\u65B9\u6309\u9215\uFF0C\u7136\u5F8C\u532F\u5165\u672C\u6A5F\u6587\u4EF6",noPermissionForThisPage:"\u26A0\uFE0F \u66AB\u7121\u6B0A\u9650\u7FFB\u8B6F\u76EE\u524D\u9801\u9762",retryAllParagraphs:"\u91CD\u8A66\u5168\u90E8\u932F\u8AA4\u6BB5\u843D",retryAllButton:"\u91CD\u8A66\u5168\u90E8\u932F\u8AA4\u6BB5\u843D",errorTooltipTitle:"\u9EDE\u64CA\u770B\u932F\u8AA4\u539F\u56E0",errorModalTitle:"\u7FFB\u8B6F\u670D\u52D9\u6216\u7DB2\u8DEF\u4F3C\u4E4E\u51FA\u4E86\u9EDE\u554F\u984C...",disableConfirm:"\u7981\u7528\u78BA\u8A8D",disableOnce:"\u7981\u7528\u4E00\u6B21",disableGlobal:"\u5168\u5C40\u7981\u7528",disableTint:"* \u60A8\u53EF\u4EE5\u5728 {option} \u4E2D\u91CD\u65B0\u555F\u7528\u3002",searchEnhancementNotes:"\u6211\u5011\u767C\u73FE\uFF0C\u4E2D\u6587\u95DC\u9375\u8A5E\u548C\u82F1\u6587\u95DC\u9375\u8A5E\u7684\u65B0\u805E\u7D50\u679C\u6709\u975E\u5E38\u5927\u7684\u4E0D\u540C\uFF0C\u5728\u555F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u96D9\u8A9E\u4FE1\u606F\u589E\u5F37\u529F\u80FD\u5F8C\uFF0C\u6211\u5011\u6703\u5728\u652F\u6301\u7684\u7DB2\u7AD9\uFF08\u8C37\u6B4C\u65B0\u805E\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u95DC\u9375\u8A5E\uFF09\uFF0C\u96EA\u7403\uFF0C\u6771\u65B9\u8CA1\u5BCC\u7DB2\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\uFF09\u81EA\u52D5\u7528\u82F1\u6587\u70BA\u4F60\u641C\u7D22\u540C\u6A23\u7684\u95DC\u9375\u8A5E\u4E26\u5C55\u793A\u5728\u53F3\u5074\u3002\u5982\u679C\u4F60\u4E0D\u9700\u8981\u8A72\u529F\u80FD\u7684\u8A71\uFF0C\u53EF\u4EE5\u9078\u64C7\u7981\u7528\u5B83\u3002",option:"\u9078\u9805",saveSettings:"\u5132\u5B58\u8A2D\u5B9A",closeModal:"\u95DC\u9589\u8996\u7A97",enableInputTranslationWithoutTriggerKeyTitle:"\u555F\u7528\u5FEB\u901F\u9023\u64CA3 \u6B21{trailingKey}\uFF0C\u76F4\u63A5\u7FFB\u8B6F\u6574\u500B\u8F38\u5165\u6846\u70BA{inputTargetLanguage}",enableInputTranslationWithoutTriggerKeyDescription:"\u5982\u9700\u6307\u5B9A\u76EE\u6A19\u8A9E\u8A00\uFF0C\u8ACB\u5728\u524D\u9762\u52A0\u4E0A\u8A9E\u8A00\u7A0B\u5F0F\u78BC\uFF0C\u5982\uFF1Aja \u4F60\u597D\u4E16\u754C",mouseHoverShortcutPlaceholder:"\u5982\uFF1AShift",deepLProName:"\u6C89\u6D78\u5F0F\u7FFB\u8B6FPro \u6703\u54E1(\u63A8\u85A6)",deepLProDescription:"\u76EE\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",deeplProDescriptionForNormal:"\u7121\u9700\u4EFB\u4F55\u8A2D\u7F6E\uFF0C\u6703\u54E1\u767B\u5165\u5F8C\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u9EDE\u6B64\u5347\u7D1A\u70BA\u6703\u54E1</1>",deepLCustomDescription:"\u9700\u8981\u570B\u5916\u4FE1\u7528\u5361\uFF0C\u5728<1>DeepL</1>\u5B98\u65B9\u958B\u901A\uFF0C\u9EDE\u9078\u67E5\u770B<2>\u6587\u6A94</2>",deepLCustomName:"\u81EA\u8A02Auth Key",chooseProviderLabel:"\u9078\u64C7\u4E00\u500B\u670D\u52D9\u63D0\u4F9B\u8005",openaiProName:"\u6C89\u6D78\u5F0F\u7FFB\u8B6FPro \u6703\u54E1(\u63A8\u85A6)",openaiProDescription:"\u76EE\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",openaiProDescriptionForNormal:"\u7121\u9700\u4EFB\u4F55\u8A2D\u7F6E\uFF0C\u6703\u54E1\u767B\u5165\u5F8C\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u9EDE\u6B64\u5347\u7D1A\u70BA\u6703\u54E1</1>",openaiCustomDescription:"\u53EF\u5728OpenAI, Azure OpenAI, \u6216\u5176\u4ED6\u7B2C\u4E09\u65B9\u670D\u52D9\u7372\u53D6\uFF0C<1>\u9EDE\u6B64\u67E5\u770B\u6587\u6A94</1>",openaiCustomName:"\u81EA\u8A02API Key",needLoginAction:"(\u958B\u901A\u6703\u54E1\u6216\u81EA\u8A02)",goLoginOrAction:"(\u958B\u901A\u6703\u54E1\u6216\u53BB\u8A2D\u5B9A)",yearly:"\u5E74\u5EA6\u7E8C\u8A02",quarterly:"\u5B63\u5EA6\u7E8C\u8A02",monthly:"\u6BCF\u6708\u7E8C\u8A02",yearlyForOnce:"\u4E00\u6B21\u6027\u5E74\u5EA6\u5957\u9910",monthlyForOnce:"\u4E00\u6B21\u6027\u6708\u5EA6\u5957\u9910",daily:"\u6BCF\u65E5\u7E8C\u8A02",year:"\u5E74\u5EA6\u7E8C\u8A02",quarter:"\u5B63\u5EA6\u7E8C\u8A02",month:"\u6BCF\u6708\u7E8C\u8A02",day:"\u6BCF\u65E5\u7E8C\u8A02",onetime_7day:"7 \u5929\u9AD4\u9A57\u5305",currentPlanDescriptionForFree:"\u76EE\u524D\u5957\u9910\uFF1A\u514D\u8CBB",currentPlanDescriptionForContinuous:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u81EA\u52D5\u7E8C\u8CBB",currentPlanDescriptionForAutoRenewCaceling:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u5230\u671F\uFF0C\u5230\u671F\u5F8C\u5C07\u4E0D\u6703\u81EA\u52D5\u7E8C\u7D04",currentYearlyPlanDescriptionForAutoRenewCacelingWithRealPaiedUser:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u5230\u671F\uFF0C\u5230\u671F\u5F8C\u5C07\u4E0D\u6703\u81EA\u52D5\u7E8C\u7D04\u3002<br/><1>\u9EDE\u6B64\u7BA1\u7406\u7E8C\u8CBB\u65B9\u6848</1>",currentYearlyPlanDescriptionForAutoRenewCacelingWithAdmin:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u5230\u671F\uFF0C\u5230\u671F\u5F8C\u5C07\u4E0D\u6703\u81EA\u52D5\u7E8C\u7D04\u3002<br/><1>\u9EDE\u6B64\u555F\u7528\u9023\u7E8C\u5305\u5E74</1>",currentPlanDescriptionForOneTime:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u5230\u671F\uFF0C<1>\u9EDE\u6B64\u5347\u7D1A\u70BA\u5E74\u8CBB</1>\u6216<2>\u6708\u8CBB</2>\u6703\u54E1",upgradePlan:"\u9EDE\u6B64\u5347\u7D1A\u70BAPro \u6703\u54E1",upgradeToPro:"\u5347\u7D1A\u70BA Pro \u6703\u54E1","popup.openPro":"\u5347\u7D1A\u70BA Pro \u6703\u54E1\u5F8C\u53EF\u4EE5\u66A2\u4EAB DeepL \u548C OpenAI \u7FFB\u8B6F\uFF0C\u9EDE\u6B64\u5347\u7D1A","popup.openProForPro":"\u60A8\u662F Pro \u6703\u54E1\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528 DeepL \u548C OpenAI \u7FFB\u8B6F",currentAccount:"\u7576\u524D\u8CEC\u6236",enableAutoSyncUserSettings:"\u555F\u7528\u591A\u8A2D\u5099\u81EA\u52D5\u96F2\u7AEF\u540C\u6B65",modalEnableInputTranslationTitle:"\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u8F38\u5165\u6846\u7FFB\u8B6F\u63D0\u793A",modalEnableInputTranslationDesc:"\u60A8\u525B\u525B\u900F\u904E\u5FEB\u901F\u9023\u64CA3 \u6B21\u7A7A\u767D\u9375\u89F8\u767C\u4E86\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u7684\u8F38\u5165\u6846\u7FFB\u8B6F\uFF0C\u8F38\u5165\u6846\u7684\u5167\u5BB9\u5C07\u7FFB\u8B6F\u70BA\u9810\u8A2D\u7684\u76EE\u6A19\u8A9E\u8A00\u3002\u900F\u904ECtrl+Z \u53EF\u4EE5\u64A4\u92B7\u7FFB\u8B6F\u3002<br /><br />\u5982\u679C\u9019\u662F\u4E00\u500B\u5931\u8AA4\uFF0C\u4E0D\u7528\u64D4\u5FC3\uFF0C\u60A8\u53EF\u4EE5\u9078\u64C7\u672C\u6B21\u505C\u7528\uFF0C\u6216\u6C38\u4E45\u505C\u7528\u8F38\u5165\u6846\u7FFB\u8B6F\u3002",saveAndNotShowAgain:"\u5132\u5B58\u4E14\u4E0D\u518D\u63D0\u793A",disableInputTranslationTips:"* \u4F60\u4E5F\u53EF\u4EE5\u5728 {option} \u4E2D\u8A2D\u5B9A\u5176\u4ED6\u5FEB\u6377\u9375\u4F86\u89F8\u767C\uFF0C{learnMore}\u3002",learnMore:"\u9EDE\u6B64\u4E86\u89E3\u66F4\u591A",continueEnalbeInputTranslation:"\u7E7C\u7E8C\u555F\u7528\u8F38\u5165\u6846\u7FFB\u8B6F",autoRenewTrialSuffix:'\uFF08\u8A66\u7528\u4E2D\uFF0C<a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">\u7ACB\u523B\u5347\u7D1A\u70BA\u6B63\u5F0F\u6703\u54E1</a>\uFF09',upgradeFromTrialTitle:"\u5347\u7D1A\u70BA\u6B63\u5F0F\u6703\u54E1",subtitle:"\u5F71\u7247\u5B57\u5E55",youtubeService:"\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u5F71\u7247\u5B57\u5E55\u670D\u52D9","subtitle.disabledSubtitle":"\u6C38\u4E45\u7981\u7528\u8996\u983B\u5B57\u5E55\u529F\u80FD","subtitle.disabledSubtitleDescription":"\u5982\u679C\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u7684\u8996\u983B\u5B57\u5E55\u548C\u5176\u4ED6\u64F4\u5C55\u6709\u885D\u7A81\uFF0C\u4F60\u53EF\u4EE5\u9078\u64C7\u6C38\u4E45\u7981\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u7684\u8996\u983B\u5B57\u5E55\u529F\u80FD\u6216\u8005\u5378\u8F09\u5176\u4ED6\u885D\u7A81\u7684\u64F4\u5C55","subtitle.autoEnableSubtitle":"\u81EA\u52D5\u4F7F\u7528\u96D9\u8A9E\u5B57\u5E55","subtitle.autoEnableSubtitleDescription":"\u555F\u7528\u5F8C\uFF0C\u7576\u5F71\u7247\u64AD\u653E\u7684\u6642\u5019\uFF0C\u6703\u81EA\u52D5\u986F\u793A\u96D9\u8A9E\u5B57\u5E55\uFF0C\u5426\u5247\u9700\u8981\u9EDE\u64CA\u7FFB\u8B6F\u6309\u9215\u624D\u6703\u986F\u793A\u3002","subtitle.preTranslation":"\u512A\u5148\u4F7F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u5B57\u5E55","subtitle.preTranslationDescription":"\u555F\u7528\u5F8C\u6703\u512A\u5148\u7528\u4E0B\u9762\u7684\u7FFB\u8B6F\u670D\u52D9\u63D0\u524D\u7FFB\u8B6F\u6574\u500B\u5B57\u5E55\uFF0C1 \u5C0F\u6642\u7684\u8996\u8A0A\u5927\u6982\u6D88\u8017 5\u842C Tokens \u6216 \u5B57\u7B26\uFF0C\u8ACB\u914C\u60C5\u4F7F\u7528\uFF1B\u95DC\u9589\u5F8C\u5247\u512A\u5148\u4F7F\u7528\u539F\u5F71\u7247\u81EA\u5E36\u7684\u6A5F\u7FFB\u5B57\u5E55","subtitle.humanSubtitlesPreferred":"\u512A\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55","subtitle.humanSubtitlesPreferredDescription":"\u7576\u5F71\u7247\u6709\u76EE\u6A19\u8A9E\u8A00\u4EBA\u5DE5\u5B57\u5E55\u6642\uFF0C\u512A\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55\uFF08\u63A8\u85A6\uFF09",videoSubtitleTranslationDescription:"\u70BA\u5F71\u7247\u5B57\u5E55\u55AE\u7368\u6307\u5B9A\u4E00\u500B\u7FFB\u8B6F\u670D\u52D9",subtitleTranslating:"\u6B63\u5728\u4F7F\u7528 {service} \u670D\u52D9\u7FFB\u8B6F\u5B57\u5E55\u4E2D\uFF0C\u8ACB\u7A0D\u7B49...\uFF08\u6C89\u6D78\u5F0F\u7FFB\u8B6F\uFF09",subtitleLoading:"\u6B63\u5728\u8F09\u5165\u5B57\u5E55...",bilingual:"\u96D9\u8A9E","field.action":"\u662F\u5426\u555F\u7528\u767E\u5EA6\u8853\u8A9E","description.action":"\u555F\u7528\u5F8C\u6703\u5728\u8ACB\u6C42\u4E2D\u52A0\u5165 action=1 \u7684\u53C3\u6578\uFF0C\u4EE5\u4FBF\u544A\u77E5\u767E\u5EA6\u555F\u7528\u8853\u8A9E\uFF0C<1>\u66F4\u591A\u8AAA\u660E\u8ACB\u53C3\u8003\u5B98\u65B9\u6587\u6A94</1>",closeQuickTranslation:"\u95DC\u9589\u61F8\u6D6E\u7403","closeQuickTranslation.untilNext":"\u672C\u6B21\u95DC\u9589\u76F4\u5230\u4E0B\u6B21\u8A2A\u554F","closeQuickTranslation.currentWebsite":"\u7576\u524D\u7DB2\u7AD9\u7981\u7528","closeQuickTranslation.alwaysClose":"\u6C38\u4E45\u7981\u7528","closeQuickTranslation.settingOpen":"\uFF08\u53EF\u5728<1>\u8A2D\u5B9A\u9801</1>\u958B\u555F\uFF09","closeQuickTranslation.cancel":"\u53D6\u6D88","closeQuickTranslation.confirm":"\u78BA\u5B9A","floatBall.popup":"\u6253\u958B\u5FEB\u6377\u8A2D\u5B9A\u9762\u677F","floatBall.translate":"\u9EDE\u64CA\u7FFB\u8B6F\u8A72\u9801\u9762","floatBall.showOriginal":"\u9EDE\u64CA\u5207\u63DB\u5230\u539F\u6587","floatBall.close":"\u95DC\u9589\u61F8\u6D6E\u7403","floatBallOptions.enableDescPc":"\u555F\u7528\u9801\u9762\u61F8\u6D6E\u7403\u5F8C\uFF0C\u6703\u5728\u9801\u9762\u53F3\u5074\u986F\u793A\u4E00\u500B\u5FEB\u6377\u7FFB\u8B6F\u6309\u9215\uFF0C\u9EDE\u64CA\u5373\u53EF\u7FFB\u8B6F","floatBallOptions.enableDesc":"\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528{touch}\u559A\u8D77\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5F37\u70C8\u5EFA\u8B70\u6536\u85CF\u672C\u8A2D\u5B9A\u9801","description.azureApiUrl":"\u586B\u5165\u81EA\u8A02\u7684API\u4F4D\u5740",shareBtnTitle:"\u9EDE\u64CA\u5206\u4EAB\u8A72\u96D9\u8A9E\u9801\u9762\u7D66\u670B\u53CB","floatBall.share":"\u5206\u4EAB\u9801\u9762",confirmSupportMouse:"\u5F37\u5236\u555F\u7528\u6ED1\u9F20\u652F\u63F4",confirmSupportMouseDescription:"\u6AA2\u6E2C\u5230\u7576\u524D\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u6ED1\u9F20\u529F\u80FD\uFF0C\u662F\u5426\u5F37\u5236\u555F\u7528\u6ED1\u9F20\u652F\u63F4\uFF1F",sampleTargetText:"\u9577\u591C\u5C07\u81F3\uFF0C\u6211\u5F9E\u4ECA\u958B\u59CB\u5B88\u671B\uFF0C\u81F3\u6B7B\u65B9\u4F11\u3002 \u6211\u5C07\u4E0D\u5A36\u59BB\u3001\u4E0D\u5C01\u5730\u3001\u4E0D\u751F\u5B50\u3002 \u6211\u5C07\u4E0D\u6234\u5BF6\u51A0\uFF0C\u4E0D\u722D\u69AE\u5BF5\u3002 \u6211\u5C07\u76E1\u5FE0\u8077\u5B88\uFF0C\u751F\u6B7B\u65BC\u65AF\u3002",sampleSourceText:"Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post.","subtitle.supportedSites":"\u5DF2\u652F\u63F4\u5728\u9019\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u96D9\u8A9E\u5B57\u5E55\uFF08\u6CE8\u610F\uFF1A\u7531\u65BC\u6280\u8853\u9650\u5236\uFF0C\u90E8\u5206\u7DB2\u7AD9\u5728\u9996\u6B21\u958B\u555F\u5B57\u5E55\u5F8C\u9700\u8981\u91CD\u65B0\u5237\u65B0\u9801\u9762\uFF0C\u6216\u8005\u9700\u7B49\u5F85\u7FFB\u8B6F\u5B8C\u6210\u4EE5\u986F\u793A\u96D9\u8A9E\u5B57\u5E55\uFF09\uFF1A",viewWithImmersiveTranslate:"\u53CC\u8BED\u7248\u672C(\u6C89\u6D78\u5F0F\u7FFB\u8BD1)",errorReason:"\u932F\u8AA4\u539F\u56E0\uFF1A{message}","proQuotaExceededError.onetime7day":'\uFF0C\u60A8\u53EF\u4EE5\u9078\u64C7\u4EE5\u4E0B\u65B9\u5F0F\u89E3\u6C7A\uFF1A<br/><br/>1. \u5207\u63DB\u5230 {anotherService} \u6216\u5176\u4ED6\u7FFB\u8B6F\u670D\u52D9<br/>2. \u5347\u7D1A\u70BA<a class="{brandId}-primary-link" href="{href}" target="_blank">\u6708\u5EA6/\u5E74\u5EA6\u6703\u54E1</a>',"proQuotaExceededError.trial":'\uFF0C\u60A8\u53EF\u4EE5\u9078\u64C7\u4EE5\u4E0B\u65B9\u5F0F\u89E3\u6C7A\uFF1A<br/><br/>1. \u5207\u63DB\u5230 {anotherService} \u6216\u5176\u4ED6\u7FFB\u8B6F\u670D\u52D9<br/>2. \u7ACB\u5373<a class="{brandId}-primary-link" href="{href}" target="_blank">\u5347\u7D1A\u70BA\u6B63\u5F0F\u6703\u54E1</a>',"proQuotaExceededError.nonTrial":'\uFF0C\u60A8\u53EF\u4EE5\u9078\u64C7\u4EE5\u4E0B\u65B9\u5F0F\u89E3\u6C7A\uFF1A<br/><br/>1. \u5207\u63DB\u5230 {anotherService} \u6216\u5176\u4ED6\u7FFB\u8B6F\u670D\u52D9<br/>2. \u8CFC\u8CB7<a class="{brandId}-primary-link" href="{href}" target="_blank"> {translationService} \u984D\u5916\u6D41\u91CF\u5305</a>',"proQuotaExceededError.resetTime":"<br/>3. \u984D\u5EA6\u91CD\u7F6E\u6642\u9593\uFF1A{resetTime}",paragraphMinTextCountField:"\u7FFB\u8B6F\u6BB5\u843D\u6240\u9700\u7684\u6700\u5C11\u5B57\u7B26\u6578",paragraphMinTextCountDesc:"\u6CE8\u610F\uFF0C\u9019\u88E1\u6307\u7684\u5B57\u7B26\u9577\u5EA6\uFF0C\u6BD4\u5982\uFF1Ahello \u662F 5 \u500B\u5B57\u7B26\uFF0C\u8A2D\u5B9A\u70BA\u66F4\u5927\u7684\u503C\u53EF\u4EE5\u6E1B\u5C11\u4E0D\u5FC5\u8981\u7684\u5C0F\u6BB5\u843D\u7FFB\u8B6F"};var tg={nologin:"Not logged in",loginForSafari:"Sign In or Sign Up",login:"Log in to activate your membership benefits",manageAccount:"Manage Account",openPremium:"Upgrade to Pro",logout:"Logout",curentPlan:"Current Plan",endAt:"Expires",endAuto:"Auto Renew",lineBreakMaxTextCount:"Maximum characters per sentence after line break","translate-pdf":"Translate PDF","noSupportTranslate-pdf":"This script is not supported. Please use a plugin.","translate-firefox-local-pdf":"Go to upload PDF",enableLineBreak:"Enable automatic line wrapping for long paragraphs",sponsorLabel:"Sponsor developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:'To modify shortcuts in the Firefox browser, open the extension management page by navigating to `about:add-ons`. Click on "Settings," then select "Manage Shortcuts" to configure your shortcuts.',browserShortcutsNoteForChrome:'To modify shortcuts in a Chrome browser, open the extension management page, go to the "Manage Shortcuts" panel (`chrome://extensions/shortcuts`), and click the button below to navigate to the shortcut management page.',browserShortcutsSucks:"Customize shortcuts using the following format (no automatic detection, please enter directly):",enableLineBreakDescription:"After activating, insert line breaks at the end of each sentence in lengthy paragraphs for improved readability.","browser.shortBrandName":"Immersive Translate","browser.brandName":"Immersive Translate: Web Page&PDF Translation","browser.brandDescription":"Bilingual web page translation, also supports PDF, Epub eBook, Video subtitles translation, free to use.","browser.toggleTranslatePage":"Translate webpage/Display original text","browser.toggleTranslateTheWholePage":"Translate entire page/Display original text","browser.toggleOnlyTransation":"Translate and hide original text/Display original text","browser.toggleTranslateToThePageEndImmediately":"Translate instantly to the bottom of the page/Display original text","browser.toggleTranslateTheMainPage":"Translate main page /Display original text","browser.shareToDraft":"Share Bilingual Page","browser.openOptionsPage":"Open Settings Page","browser.toggleTranslationMask":"Show/Hide Translation Blurring Effect","browser.translateLocalPdfFile":"Translate local PDF File","browser.openEbookViewer":"Read local e-books","browser.openEbookBuilder":"Create Bilingual EPUB E-books","browser.translateLocalHtmlFile":"Translate HTML/txt File","browser.donateContext":"Explore Sponsorship Benefits","browser.translateLocalSubtitleFile":"Translate Local Subtitle File",confirmResetConfig:"Are you sure you want to reset settings?",translationLineBreakSettingTitle:"Line break setting",smartLineBreak:"Smart Wrap",alwaysLineBreak:"Always Wrap",isShowContextMenu:"Add Translation to Right-Click Menu",toggleBeta:"Enable Beta Testing Features",betaDescription:"Enable experimental features and test translation services. Join the <1>Telegram group</1> for more information.",translationLineBreakSettingDescription:"Always Wrap is suitable for layouts with less content, providing a neater appearance. (For longer paragraphs with over {count} characters, use Smart Wrap for a more space-efficient display.)",tempTranslateDomainTitle:"Temporarily Activate Website Translation Time",tempTranslateDomainDescription:"When manually translating a webpage, temporarily enable automatic translation for the site. You can set a temporary duration.",xMinutes:"{count} minutes",disabled:"Disable",changelog:"Change Log",toggleTranslatePageWhenThreeFingersOnTheScreen:"Touch screen with multiple fingers to translate webpage/display original text",toggleTranslationMaskWhenThreeFingersOnTheScreen:"Touch screen with multiple fingers to show/hide the blurry effect of the translated text",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"Touch screen with multiple fingers to translate webpage (translation only)/display original text",addUrlDescription:"You can specify domain names, and also use wildcard characters, such as: *.google.com, google.com/mail/*, https://www.google.com/*",general:"General",clickToExpandConfig:"Expand current configuration",import:"Import from file",export:"Export to file",toggleDebug:"Print debug logs to console","fingers.0":"Close","fingers.2":"Two-finger touch","fingers.3":"Three-finger touch","fingers.4":"Four-finger touch","fingers.5":"Five-finger touch",mouseHoldKey:"+ {key} translate/restore this paragraph",mouseHoldKeyAuto:"immediately translate this paragraph",mouseHoldKeyOff:"Do nothing",mouseHoldKeyOther:"Custom shortcut key (open settings)",mouseHoldKeyCustomKey:"{key} translate/restore this paragraph",mouseHoverHoldKey:"Press the shortcut key while hovering over with the mouse to translate paragraph.","mouse-translate":"Hover",document:"Document",resetSuccess:"Reset all settings successful",resetThisSuccess:"Reset successful",saved:"Saved successfully",successImportConfig:"Configuration imported successfully",goAdvancedSettings:"Go to Advanced Settings Page",goAdvancedInterfaceSettings:"Go to Advanced Custom Settings Page",advanced:"Advanced Settings",advancedDescription:"Generally, there's no need to adjust; keep the default settings. These options are provided for more advanced users seeking a more personalized experience.",developer:"Developer settings",donateCafe:"Pricing","translate to the bottom of the page":"After opening a webpage, do you want to translate to the bottom of the page immediately?",feedback:"Feedback",toggleTranslatePage:"Translate webpage/Show original text",translateToThePageEndImmediatelyDescription:"Once enabled, upon entering a webpage, it will immediately translate the content from the top to the bottom. If disabled, it will translate as you read. (Not recommended to enable)","translate all areas of the page":"Should all areas of the webpage be translated?",translationAreaDescription:"Once enabled, all areas of the entire webpage will be translated. If disabled, the default smart recognition will be used to translate only the main areas. (Not recommended to enable)","the number of characters to be translated first":"Translate the first few characters of the page directly, without waiting to scroll to the visible area.","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",moreOptions:"Expand for more custom settings",translateTheWholePage:"Translate entire page",changeToTranslateTheWholePage:"Translate the Whole Page",changeToTranslateTheMainPage:"Translate the Main Content",changeToOnlyTranslationMode:"Show Translation only",changeToDualTranslationMode:"Show Bilingual Translation",translateToThePageEndImmediately:"Immediately translate to the bottom ",translateTheMainPage:"smart translate the main areas","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension version is too old, please upgrade the extension to {minVersion} or a newer version and try to sync again.",badUserscriptBrowser:"The current browser does not correctly support the interface of the Tampermonkey extension (such as obtaining version information of Tampermonkey scripts). Please use another <1>browser that supports Tampermonkey extensions</1>, such as Firefox.",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha feature enabled successfully",disableAlphaSuccess:"Alpha feature has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(go to settings)",goSettings:"go to settings",needActionForOptions:"(requires setting)",translationEngine:"Engine Options",sourceLanguage:"Original language",target:"Target Language",popupSourceLanguage:"Source",popupTarget:"Target",popupService:"Service",forThisSite:"Site",autoEnableSubtitle:"Auto-enable bilingual captions",alwaysTranslate:"Always translate",neverTranslate:"Never translate",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",alwaysTranslateSomeSiteOrWildSite:"Always translate this site",alwaysTranslateSomePage:"Always translate this page",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for repeated paragraphs)","translation display":"Translation display style","select diplay style":"See below for examples of different translation styles",interface:"Interface Settings",import_export:"Import/Export",import_export_title:"Import/Export Configuration",syncToGoogleDrive:"Sync Now with Google Drive",floatBallOptions:"Floating Button","floatBallOptions.enable":"Enable Floating Ball","floatBallOptions.blockUrls":"Blocked Websites","floatBallOptions.add":"Add","floatBallOptions.blockUrlDesc":"Don\u2019t show the floating ball on these websites","floatBallOptions.clickType":"Click Behavior","floatBallOptions.clickTypeDesc":"What happens when you click the floating ball icon","floatBallOptions.clickPopup":"Display Translation Panel","floatBallOptions.clickTranslate":"Translate/Show Original Text","floatBallOptions.fixedPosition":"Fixed Position","floatBallOptions.fixedPositionDesc":"Whether the float ball is on the left or right of the window","floatBallOptions.fixedPositionLeft":"Left","floatBallOptions.fixedPositionRight":"Right",previewAllThemes:"Preview all themes","translationTheme.none":"None","translationTheme.grey":"Black Gray","translationTheme.dashed":"Dotted lines","translationTheme.dotted":"Dotted lines","translationTheme.dashedBorder":"Dotted Border","translationTheme.solidBorder":"Solid Border","translationTheme.underline":"Straight line","translationTheme.mask":"Blur effect (learning mode)","translationTheme.opacity":"Transparency effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Marker","translationTheme.marker2":"Maker2","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weaken","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dotted lines","translationTheme.nativeDashed":"System built-in dotted lines","translationTheme.nativeDotted":"System built-in dotted lines","translationTheme.nativeUnderline":"System built-in straight lines","translationTheme.wavy":"wavy lines","translationServices.custom":"Custom API","translationServices.tencent":"Tencent Translator","translationServices.tenAlpha":"Tencent Translator (Alpha)","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeepLX (Alpha)","translationServices.bing":"Microsoft Translator","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Azure Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.cai":"Caiyun Translation (Alpha)","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.you":"Youdao Translation (Alpha)","translationServices.transmart":"Tencent Smart Translation","translationServices.niu":"Niu Translation","translationServices.papago":"Papago Translation","translationServices.d":"DeeplX (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.gemini":"Gemini","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"Translate page title","always languages":"Always translate the following languages",neverTranslateLanguagesLabel:"Never Translated Languages",neverTranslateTheFollowingLanguagesDescription:"When a paragraph on a page is in one of the following languages, the translation will be skipped",enableUserscriptPagePopup:"Always show Popup windows on the page",enableUserscriptPagePopupDescription:"After closing the floating ball, you can use the shortcut key /{touch} to summon it. To prevent accidentally losing the floating ball after turning off this option, it is strongly recommended to bookmark this settings page.","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"Sites that always use the {theme} translation style",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language",syncToCloud:"Sync to cloud",syncToCloudDescription:"Upload the configuration to the cloud server, and you can synchronize the configuration between different browsers or Tampermonkey scripts, based on the last modification time.",syncToAccount:"Sync to account",syncToAccountButton:"Sync to account now",syncToAccountDescription:"Uploaded to the logged-in account, the configuration can be synchronized between different devices, and the last modification time shall prevail.",successSyncConfigInAccount:"Successfully synced with account",successSyncConfigToAccount:"Successfully synchronized to account",syncConfigNoUpdate:"Already up to date",authFail:"Authorization Failed",syncTitle:"Manual Backup Management",import_hint:"Import",upload:"Upload",revokeAuth:"Revoke Authorization",uploadFail:"Upload Failed",download:"Download",importSuccess:"Upload Success",importFail:"Import Failed",deleteFail:"Delete Failed",backupToCloud:"Manage backup files manually",create_new_backup:"Add backup node",maxBackupFiles:"Up to{count}different nodes can be backed up. Please delete unneeded nodes",backupToCloudDescription:"Upload or restore backup files manually, up to 3 different backups",successSyncConfig:"Successfully synced with cloud",syncFail:"Synchronization failed",updatedAt:"Updated at {date}",lastSyncedAt:"Last checked at {date}",downloadFail:"Download failed",clickToDownload:"Click to download",aboutLabel:"About - Feedback ","browser.openAboutPage":"About / Feedback/Sponsor",aboutLabelWithoutSponsor:"About - Feedback",aboutIntro:"We hope that all users will easily and pleasantly access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. You can choose to subscribe to <6>Pro membership</6> to use the out-of-the-box DeepL and OpenAI translation.<br/><br/> Follow us on<3>Twitter</3>, <4>Telegram Channel</4>, WeChat public account, WeChat community group, or subscribe to updates via <5>email</5> below.<br/> <7>Pro members</7> can contact us through the quick customer service email <8>support@immersivetranslate.com</8>.",aboutIntroWithoutSponsor:"The extension is completely free. We hope that everyone can easily and joyfully access the vast foreign language information on the Internet \u2764\uFE0F. <br/><br/>Follow us on <3>Twitter</3>, <4>Telegram channel</4>, WeChat public account, WeChat community group, or subscribe to updates via <5>email</5> below.",projectHomepage:"Project Homepage",joinTelegramGroup:"Join our communities for feature discussion",wechatPublicAccount:"Wechat Official Account",wechatCommunities:"Wechat Group",qqCommunities:"QQ Channel",joinTelegramChannel:"Subscribe to our Telegram channel to get the latest updates",feedbackAndJoin:"Feedback",autoSync:"Auto-Time Sync",loadingThemeTitle:"Loading Style",loadingThemeDescription:"Set the style of waiting for the translation to load","loadingTheme.spinner":"Spinning icon","loadingTheme.text":"Static Text... ","loadingTheme.none":"Disabled",developerDescription:"You can click <1>here</1> to see the documentation related to advanced customization","edit border color":"Edit border color",successSyncButNoChange:"The current configuration is consistent with that in the cloud server",customTheme:"Customize colors and sizes","customThemeLabel.borderColor":"Border color","customThemeLabel.borderRadius":"Border Round Corner","customThemeLabel.textColor":"Text color","customThemeLabel.backgroundColor":"Background color","customThemeLabel.zoom":"Font scale (%)","customThemeLabel.opacity":"Text opacity (%)",resetToDefaultColor:"Reset to default colors",resetToDefaultSettings:"Reset to default settings",isTranslateTitle:"Enable translate page title",isTranslateTitleDescription:"When enabled, the webpage title will be translated",enableSearchEnhancement:"Enable Search Enhancement",enableSearchEnhancementDescription:"After activation, the right sidebar will automatically display 'Google News' search results for the corresponding English keywords on supported websites (Google News, Google Search (for certain keywords), Xueqiu, East Money, Futu, Tiger Community).",verifyService:"Verify service",verified:"Successful","field.langs":"Supported Language Code","field.model":"Model","field.translationEngine":"Translation engine","field.limitPerMinute":"Max requests per minute","field.limitPerSecond":"Max requests per second","field.maxTextLengthPerRequest":"Maximum text length per request","field.maxTextGroupLengthPerRequest":"Maximum number of paragraphs per request","field.apiUrl":"Custom API interface address","field.placeholderDelimiters":"Reserved placeholders","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>Custom interface access</a> requires reference documents","description.limitPerMinute":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next minute. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.limitPerSecond":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next second. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.generalLimitPerSecond":"When the number of requests exceeds the limit, it will enter a queue state until the beginning of the next second.","description.prompt":"As a user, send the conversation to OpenAI, where {{text}} represents the text content of the paragraph, {{from}} indicates the language of the paragraph, and {{to}} indicates the target language. You can omit {{text}} (recommended), and it will be sent to OpenAI as a separate paragraph.","description.maxTextLengthPerRequest":"By default multiple paragraphs will be merged to reduce the number of requests, but if the total length of the paragraphs is too long, it may also cause the interface to respond slowly, so you can try to adjust this option to optimize speed","description.systemPrompt":"Send the conversation to OpenAI as a system, where {{text}} represents the text content of the paragraph, {{from}} represents the original language of the paragraph, and {{to}} represents the target language.","field.domain":"Domain","description.domain":"The default is: general. It can only be set when domain translation is activated in the Youdao API console, and the supported domains can be seen <1>Here </1>","field.scene":"Scenarios","description.scene":"The default is: general. It can be set only if the Alibaba Cloud API console has the Machine Translation Professional Edition enabled. Supported scenes can be found <1>here</1>.","field.vocabId":"User dictionary ID","description.vocabId":"Specified dictionary out_id, currently supported in English translation","description.model":"OpenAI's models, such as gpt-3.5-turbo, gpt-4, etc","description.maxTextGroupLengthPerRequest":"The number of paragraphs sent to translation service each time. Sending too many paragraphs to OpenAI at once can slow down the interface.","description.apiUrl":"Please add a specific URL with a path, <1>more instructions</1>",enabledExtension:"Enable extensions",clickToDisableExtension:"Click to disable extension",clickToEnableExtension:"Click to enable the extension",hasBeenDisabled:"Disabled","show password":"Show password",customContent:"Enter the name of the custom model",inputOptions:"Enhanced input box",mouseHoverOptions:"Mouse Hover",modifyMouseHoverKey:"Modify mouse hover shortcuts",enableInputTranslation:"enhanced input box?",enableInputTranslationDescription:"When enabled, enter {startingKey}{startingKey} direct in the input box and hit{inputTrailingTriggerKeyRepeatTimes}times{trailingKey}, translated into {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:'When enabled, simply enter "Hello World" in the input box, then quickly press {inputTrailingTriggerKeyRepeatTimes} times on {trailingKey}, and it will be translated into the default target language.',inputTargetLanguage:"Set the default target language for the input box",inputTargetLanguageDescription:"The default target language for the translation input box, which is {startingKey}{startingKey} as the default language for triggering words.",inputTargetLanguageDescriptionForNoneKey:"Default target language for translation input box",inputStartingTriggerKeyTitle:"Set the delimiter character for partial translation of the input box",inputStartingTriggerKeyDescription:"When you don\u2019t need to translate the entire input box, the delimiter allows you to only translate the part from {startingKey}{startingKey} to the end of the input box. You can also specify a language code, for example: {startingKey}ja means to only translate the part from {startingKey}ja to the end of the input box",inputStartingTriggerKeyDescriptionForNoneKey:"The current setting does not require a prefix, so the partial text translation function of the input box cannot be used temporarily",inputTrailingTriggerKeyTitle:"Select a trigger character to indicate the end of input.",inputTrailingTriggerKeyDescription:"Quickly hitting {trailingKey} 3 times will start the translation",inputTrailingTriggerKeyTimeout:"Enter the interval time to end the trailing trigger",inputTrailingTriggerKeyTimeoutDescription:"Set the interval time for the end of input combo trigger (milliseconds)",spaceKey:"<spacekey>",noneKey:"No prefix needed, translate the entire text box directly",inputTranslationBlockUrlsTitle:"Do not enable input box enhancement on the following URLs",inputTranslationBlockUrlsDescription:"The input box enhancement will not work in the following URL",clickToSeeQuickDemo:"Click to expand the 30s tutorial video",inputHelperInfo:`Note: We have optimized the system to address an issue where certain characters in Chinese input methods were being converted into Chinese punctuation marks. For instance, when using Sogou Input Method, "/" would be changed to "\u3001". We now recognizes all corresponding Chinese symbols as triggering characters, including "//" and "\u3001\u3001".

Additionally, we support using Chinese aliases of language codes as commands. For example, entering "/Japanense Hello World" will translate the text into Japanese. You can click here to see a list of all supported language codes.`,reloadCurrentPage:"Please refresh the current page before starting translation",noLocalFilePermissionForPDF:"No permission to read local files temporarily, please click the button above and then import local files",noPermissionForThisPage:"\u26A0\uFE0F No permission to translate the current page",retryAllParagraphs:"Retry all error paragraphs",retryAllButton:"Retry All",errorTooltipTitle:"Click to get the error details",errorModalTitle:"Oops, something went wrong",disableConfirm:"Bilingual information enhancement settings",disableOnce:"Disable Once",disableGlobal:"Disable Forever",disableTint:"* You can re-enable it in {option}.",searchEnhancementNotes:"We found that the news results of Chinese keywords and English keywords are very different. After enabling the immersive translate bilingual information enhancement function, we will automatically search for the same keywords in English on supported websites (Google News, Google Search (for certain keywords), Xueqiu, East Money, Futu, Tiger) and display them on the right side. If you don\u2019t need this feature, you can choose to disable it",option:"Settings",saveSettings:"Save",closeModal:"Close",enableInputTranslationWithoutTriggerKeyTitle:"\u201CEnable quick hit 3 times {trailingKey}, directly translate the entire input box into {inputTargetLanguage}",enableInputTranslationWithoutTriggerKeyDescription:"To specify the target language, please add a language code at the beginning, such as: ja Hello world",mouseHoverShortcutPlaceholder:"e.g. Shift",deepLProName:"Premium Membership (Recommended)",deepLProDescription:"You can directly use this service",deeplProDescriptionForNormal:"No setup required, available for premium members after login, <1>Upgrade</1>",deepLCustomDescription:"Requires an international credit card, activate at <1>DeepL</1> official site, click to see <2>documentation</2>",deepLCustomName:"Custom Auth Key",chooseProviderLabel:"Choose a service provider",openaiProName:"Premium Membership (Recommended)",openaiProDescription:"The current plan can be used directly",openaiProDescriptionForNormal:"No setup required, available for premium members after login, <1>Upgrade</1>",openaiCustomDescription:"Can be obtained from OpenAI, Azure OpenAI, or other third-party services, <1>Click here to view documentation</1>",openaiCustomName:"Custom API Key",needLoginAction:"(Premium or custom)",goLoginOrAction:"(Premium or go to setting)",yearly:"Annual Renewal",quarterly:"Quarterly Renewal",monthly:"Monthly Renewal",yearlyForOnce:"One-time Annual",monthlyForOnce:"One-time Monthly",daily:"Daily Renewal",year:"Annual Renewal",quarter:"Quarterly Renewal",month:"Monthly Renewal",day:"Daily Renewal",onetime_7day:"7-day Trial Pack",currentPlanDescriptionForFree:"Current plan: Free",currentPlanDescriptionForContinuous:"Current plan: {plan}, will auto-renew on {endAt}",currentPlanDescriptionForAutoRenewCaceling:"Current plan: {plan}, will expire on {endAt}. After expiration, it will not be automatically renewed",currentYearlyPlanDescriptionForAutoRenewCacelingWithRealPaiedUser:"Current plan: {plan}, will expire on {endAt}, will not be auto-renewed after expiration <br/><1>Manage the renewal plan</1>",currentYearlyPlanDescriptionForAutoRenewCacelingWithAdmin:"The current plan: {plan}, will expire on {endAt}. After expiration, it will not be automatically renewed. <br/><1>Click here to enable continuous annual renewal</1>",currentPlanDescriptionForOneTime:"Current plan: {plan}, expiring on {endAt}. <1>Upgrade to annual</1> or <2>monthly</2> or pro membership",upgradePlan:"Click here to upgrade to Pro membership",upgradeToPro:"Upgrade to Pro","popup.openPro":"Enjoy unrestricted access to DeepL and OpenAI translations after upgrading to Pro Membership. Click here to upgrade","popup.openProForPro":"You are a Pro member, you can directly use DeepL and OpenAI translations",currentAccount:"Account",enableAutoSyncUserSettings:"Enable auto-sync user settings",modalEnableInputTranslationTitle:"Writing Settings",modalEnableInputTranslationDesc:"You just triggered the translation of the immersive translate input box by quickly tapping the space bar 3 times. The content of the input box will be translated into the default target language. You can undo the translation with Ctrl+Z. <br /><br />If this was a mistake, don't worry, you can choose to disable it this time, or permanently disable input box translation.",saveAndNotShowAgain:"Save and don't show prompt again",disableInputTranslationTips:"* You can also set other shortcuts in {option}, {learnMore}.",learnMore:"Click here to learn more",continueEnalbeInputTranslation:"Continue to enable input translation",autoRenewTrialSuffix:'(In trial, <a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">Upgrade to paid Pro now</a>)',upgradeFromTrialTitle:"Upgrade to Pro membership",subtitle:"Video Subtitles",youtubeService:"Video Subtitle Translation Service","subtitle.disabledSubtitle":"Disable Video Subtitle Feature Permanently ","subtitle.disabledSubtitleDescription":"If the video subtitles of immersive translate conflict with other extensions, you can choose to permanently disable the video subtitle function of immersive translation or uninstall other conflicting extensions","subtitle.autoEnableSubtitle":"Automatically Enable Bilingual Subtitles","subtitle.autoEnableSubtitleDescription":"After enabling, when the video is playing, bilingual subtitles will automatically be displayed. Otherwise, you need to click the translation button to display them","subtitle.preTranslation":"Use immersive translate to translate subtitles","subtitle.preTranslationDescription":"After enabling, the specified translation service below will be used to translate the entire subtitle in advance. A 1-hour video will consume approximately 50,000 Tokens or characters. Please use it judiciously. If disabled, the machine-translated subtitles that come with the original video will be used preferentially","subtitle.humanSubtitlesPreferred":"Use manual subtitles first","subtitle.humanSubtitlesPreferredDescription":"When the video has manual subtitles in the target language, prioritize using manual subtitles (recommended)",videoSubtitleTranslationDescription:"Specify a separate translation service for video subtitles.",subtitleTranslating:"Immersive Translate is using {service} to translate subtitles...",subtitleLoading:"Loading subtitles...",bilingual:"Bilingual","field.action":"Enable Baidu terminology?","description.action":"After enabling, an action=1 parameter will be added to the request to inform Baidu to enable terminology. <1>For more explanation, please refer to the [official documentation]</1>",closeQuickTranslation:"Close Floating Button","closeQuickTranslation.untilNext":"Close this time until the next visit","closeQuickTranslation.currentWebsite":"Disable the current website","closeQuickTranslation.alwaysClose":"Permanently disable","closeQuickTranslation.settingOpen":"(Can be activated in <1>Settings Page</1>)","closeQuickTranslation.cancel":"Cancel","closeQuickTranslation.confirm":"confirm","floatBall.popup":"Open quick settings panel","floatBall.translate":"Click to translate this page","floatBall.showOriginal":"Click to switch back to the original text","floatBall.close":"Close Floating Button","floatBallOptions.enableDescPc":"When you enable the floating button, a translation button appears on the right. Click it to translate","floatBallOptions.enableDesc":"After you turn off the floating button, you can bring it back with {touch}. To avoid losing the floating button by accidentally turning it off, it is highly recommended you bookmark this settings page.","description.azureApiUrl":"Enter the custom API interface address",shareBtnTitle:"Click to share this bilingual page","floatBall.share":"Share Page",confirmSupportMouse:"Force Enable Mouse Support",confirmSupportMouseDescription:"The current browser does not support mouse functions, do you want to forcibly enable mouse support?",sampleTargetText:"Night is coming, I will start watching from now on until death. I will not marry, not seal the land, not have children. I will not wear a crown, not fight for glory. I will be loyal to my duty, life and death.",sampleSourceText:"\u957F\u591C\u5C06\u81F3\uFF0C\u6211\u4ECE\u4ECA\u5F00\u59CB\u5B88\u671B\uFF0C\u81F3\u6B7B\u65B9\u4F11\u3002\u6211\u5C06\u4E0D\u5A36\u59BB\u3001\u4E0D\u5C01\u5730\u3001\u4E0D\u751F\u5B50\u3002\u6211\u5C06\u4E0D\u6234\u5B9D\u51A0\uFF0C\u4E0D\u4E89\u8363\u5BA0\u3002\u6211\u5C06\u5C3D\u5FE0\u804C\u5B88\uFF0C\u751F\u6B7B\u4E8E\u65AF\u3002","subtitle.supportedSites":"Bilingual subtitles are now supported on these websites (Note: Due to technical limitations, some websites need to be refreshed after the subtitles are turned on for the first time, or wait for the translation to complete to display bilingual subtitles)",viewWithImmersiveTranslate:"Bilingual version (Immersive Translate)",errorReason:"Error reason: {message}","proQuotaExceededError.onetime7day":'You can resolve this issue by choosing one of the following options:<br/><br/>1. Switch to {anotherService} or another translation service<br/>2. Upgrade to <a class="{brandId}-primary-link" href="{href}" target="_blank">Monthly/Annual membership</a>',"proQuotaExceededError.trial":'You can resolve this issue by choosing one of the following options:<br/><br/>1. Switch to {anotherService} or another translation service<br/>2. <a class="{brandId}-primary-link" href="{href}" target="_blank">Upgrade to paid Pro now</a>',"proQuotaExceededError.nonTrial":'You can resolve this issue by choosing one of the following options:<br/><br/>1. Switch to {anotherService} or another translation service<br/>2. Purchase <a class="{brandId}-primary-link" href="{href}" target="_blank">Data Package for {translationService}</a>',"proQuotaExceededError.resetTime":"<br/>3. Quota reset time: {resetTime}",paragraphMinTextCountField:"Minimum character count for paragraph translation",paragraphMinTextCountDesc:"Note, this refers to the character length, for example: 'hello' is 5 characters, setting a higher value can reduce unnecessary translations of small paragraphs"};var ng=[{code:"zh-CN",messages:Jm},{code:"zh-TW",messages:eg},{code:"en",messages:tg}];var D_={};for(let e of ng)D_[e.code]=e.messages;var at="immersive-translate";var ce="immersiveTranslate";var Rk=ce+"GoogleAccessToken",Nk=ce+"AuthFlow";var Mk=ce+"AuthState",Ik=ce+"IframeMessage",Fk=ce+"WaitForRateLimit",Bk=ce+"DocumentMessageAsk",ig=ce+"DocumentMessageTellThirdParty",zk=ce+"showError",dc=ce+"DocumentMessageThirdPartyTell",Uk=ce+"DocumentMessageEventUpload",$k=ce+"DocumentMessageHandler",jk=`${ce}Share`,Hk=`${ce}ReqDraft`,Wk=`${ce}ResDraft`,qk=`${ce}Container`,Kk=`${ce}SpecifiedContainer`;var Gk=`${ce}PageTranslatedStatus`,Vk=`${ce}PageUrlChanged`,Xk=`${ce}ReceiveCommand`,Yk=ce+"LastUseMouseHoverTime",Zk=ce+"LastUseInputTime",Qk=ce+"LastUseManualTranslatePageTime",Jk=`${ce}PopupReceiveMessage`,P_="immersivetranslate.com",R_="config.immersivetranslate.com",e5=`https://${P_}/`,t5=`https://${R_}/default_config.json`,n5=`${ce}Mark`,ag=`${ce}Root`,r5=`${ce}Walked`,og=`data-${at}-walked`,i5=`${ce}Paragraph`,a5=`data-${at}-paragraph`,o5=`data-${at}-translation-element-mark`,s5=`${ce}TranslationElementMark`,l5=`${ce}TranslatedMark`,c5=`${ce}LoadingId`,u5=`data-${at}-loading-id`,d5=`${ce}ErrorId`,p5=`data-${at}-error-id`,f5=`${ce}AtomicBlockMark`,h5=`${ce}ExcludeMark`,m5=`data-${at}-exclude-mark`,g5=`${ce}StayOriginalMark`,b5=`${ce}PreWhitespaceMark`,y5=`${ce}InlineMark`,w5=`${ce}BlockMark`,v5=`${ce}Left`,x5=`${ce}Right`,_5=`${ce}Width`,T5=`${ce}Height`,S5=`${ce}Top`,A5=`${ce}FontSize`;var E5=`${ce}GlobalStyleMark`,N_=["@","#"];var k5=`${at}-target-wrapper`,C5=`${at}-pdf-target-container`,L5=`${at}-target-inner`,O5=`${at}-source-wrapper`,D5=`${at}-target-translation-block-wrapper`,P5=`${at}-root-translation-theme`,R5=`${ce}RootTranslationTheme`,N5=`${at}-target-translation-vertical-block-wrapper`,M5=`${at}-target-translation-pdf-block-wrapper`,I5=`${at}-target-translation-pre-whitespace`,F5=`${at}-target-translation-inline-wrapper`;var rg=[{type:"select",name:"codename",labelKey:"field.translationEngine",default:"youdao",required:!1,options:[{label:"translationServices.google",value:"google"},{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.aws",value:"aws"}]}];var B5={bing:{name:"\u5FAE\u8F6F\u7FFB\u8BD1",homepage:"https://www.bing.com/translator"},google:{name:"Google",homepage:"https://translate.google.com/"},deepl:{name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://immersivetranslate.com/docs/services/deepL/",providers:[{name:"pro",nameKey:"deepLProName",descriptionKey:"deepLProDescription",descriptionKeyForNormal:"deeplProDescriptionForNormal",descriptionLink1:"https://immersivetranslate.com/pricing"},{name:"custom",nameKey:"deepLCustomName",descriptionKey:"deepLCustomDescription",descriptionLink1:"https://www.deepl.com/translator",descriptionLink2:"https://immersivetranslate.com/docs/services/deepL/"}],allProps:[{name:"authKey",providers:["custom"],label:"Auth Key",required:!0,type:"password"}]},openai:{name:"Open AI",homepage:"https://openai.com/api/",docUrl:"https://immersivetranslate.com/docs/services/openai/",providers:[{name:"pro",nameKey:"openaiProName",descriptionKey:"openaiProDescription",descriptionKeyForNormal:"openaiProDescriptionForNormal",descriptionLink1:"https://immersivetranslate.com/pricing"},{name:"custom",nameKey:"openaiCustomName",descriptionKey:"openaiCustomDescription",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/"}],allProps:[{name:"APIKEY",providers:["custom"],required:!0,type:"password"},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!1,type:"openai-model-select",default:"gpt-3.5-turbo-1106",providers:["custom"],options:[{providers:["custom","pro"],label:"gpt-3.5-turbo",value:"gpt-3.5-turbo"},{providers:["custom","pro"],label:"gpt-3.5-turbo-1106",value:"gpt-3.5-turbo-1106"},{providers:["custom","pro"],label:"gpt-3.5-turbo-0613",value:"gpt-3.5-turbo-0613"},{providers:["custom"],label:"gpt-4-1106-preview",value:"gpt-4-1106-preview"},{providers:["custom"],label:"gpt-4",value:"gpt-4"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.limitPerSecond",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/",type:"number",default:10,providers:["custom"]},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.openai.com/v1/chat/completions",descriptionKey:"description.apiUrl",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/",optional:!0,providers:["custom"]},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"textarea",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`Translate the text to {{to}}, please do not explain any sentences, just translate or leave them as they are.:

{{text}}`,optional:!0}]},gemini:{name:"Gemini",homepage:"https://makersuite.google.com/",docUrl:"https://immersivetranslate.com/docs/services/gemini/",allProps:[{name:"APIKEY",providers:["custom"],required:!0,type:"password"},{name:"model",labelKey:"field.model",descriptionKey:"description.model",optional:!0,required:!1,type:"gemini-model-select",default:"gemini-pro",options:[{label:"gemini-pro",value:"gemini-pro"}]},{name:"limit",required:!1,optional:!0,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/",type:"number",default:1},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:3,optional:!0},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://generativelanguage.googleapis.com/v1/models/{model}:generateContent?key={key}",descriptionKey:"description.apiUrl",descriptionLink1:"https://immersivetranslate.com/docs/services/gemini/",optional:!0},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`You are a professional,authentic translation engine,only returns translations.
Translate the content to {{to}} Language:
<Start>
Hello <Keep This Symbol>
World <Keep This Symbol>
<End>
The translation is:
<Start>
\u4F60\u597D<Keep This Symbol>
\u4E16\u754C<Keep This Symbol>
<End>

Translate the content to {{to}} Language:

<Start>{{text}}<End>`,optional:!0}]},transmart:{name:"Transmart",homepage:"https://transmart.qq.com/"},youdao:{name:"Youdao",homepage:"https://youdao.com/",docUrl:"https://immersivetranslate.com/docs/services/youdao/",allProps:[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:200,optional:!0},{name:"domain",required:!1,labelKey:"field.domain",descriptionKey:"description.domain",descriptionLink1:"https://fanyi.youdao.com/openapi/",type:"text",default:"general",optional:!0},{name:"vocabId",required:!1,labelKey:"field.vocabId",descriptionKey:"description.vocabId",type:"text",default:"",optional:!0}]},tencent:{name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://immersivetranslate.com/docs/services/tencent/",allProps:[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]},aliyun:{name:"Aliyun",homepage:"https://translate.alibaba.com/",docUrl:"https://immersivetranslate.com/docs/services/aliyun/",allProps:[{name:"AccessKeyID",required:!0,type:"text"},{name:"AccessKeySecret",required:!0,type:"password"},{name:"scene",labelKey:"field.scene",descriptionKey:"description.scene",descriptionLink1:"https://help.aliyun.com/document_detail/158267.html",required:!1,optional:!0,type:"text",default:"general"}]},azure:{name:"azure",homepage:"https://learn.microsoft.com/en-us/azure/cognitive-services/translator/text-translation-overview",docUrl:"https://immersivetranslate.com/docs/services/azure/",allProps:[{name:"region",required:!1,default:"eastasia",type:"text"},{name:"APIKEY",required:!0,type:"password"},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.cognitive.microsofttranslator.com/",descriptionKey:"description.azureApiUrl",optional:!0}]},papago:{name:"Papago",homepage:"https://translate.google.com/",canary:!0},baidu:{name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://immersivetranslate.com/docs/services/baidu/",allProps:[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:1,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0},{name:"action",required:!1,labelKey:"field.action",descriptionKey:"description.action",descriptionLink1:"https://fanyi-api.baidu.com/doc/21",type:"boolean",default:!1,optional:!0}]},volc:{name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://immersivetranslate.com/docs/services/volcano/",allProps:[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0}]},caiyun:{name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://immersivetranslate.com/docs/services/caiyun/",allProps:[{name:"token",required:!0,type:"password"}]},cai:{name:"Cai",homepage:"https://fanyi.caiyunapp.com/",alpha:!0},custom:{name:"Custom",beta:!0,homepage:"https://immersivetranslate.com/docs/services/custom/",titleKey:"description.custom",allProps:[{name:"url",label:"API URL",required:!0,type:"text"},{name:"langs",required:!1,labelKey:"field.langs",type:"textarea",default:"zh-CN,en",optional:!0},{name:"placeholderDelimiters",required:!1,labelKey:"field.placeholderDelimiters",type:"text",default:N_,optional:!0},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0}]},mock:{name:"Mock",homepage:"https://www.google.com"},mock2:{name:"Mock2",homepage:"https://www.google.com"},tenAlpha:{name:"TenAlpha",homepage:"https://fanyi.qq.com/",alpha:!0},you:{name:"You",alpha:!0,homepage:"https://youdao.com/"},openl:{name:"Openl",homepage:"https://openl.club/",docUrl:"https://immersivetranslate.com/docs/services/openL/",allProps:[...rg,{type:"password",name:"apikey",required:!0}],props:rg},volcAlpha:{name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},d:{name:"D () ",canary:!0,homepage:"https://www.deepl.com/translator"},dpro:{name:"DPro (Canary) ",canary:!0,homepage:"https://www.deepl.com/translator"},deeplx:{name:"DeepLX (Beta)",beta:!0,homepage:"https://www.deepl.com/translator",allProps:[{name:"url",label:"API URL",required:!0,type:"text"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0}]},niu:{name:"niutrans",homepage:"https://niutrans.com/",docUrl:"https://immersivetranslate.com/docs/services/niu",allProps:[{name:"APIKEY",required:!0,type:"password"}]}},z5={type:ce+"ChildFrameToRootFrameIdentifier"};var U5=mn()?"https://dash.immersivetranslate.com/#general":"http://localhost:8000/dist/userscript/options/#general";var $5=mn()||Nn()?"https://api2.immersivetranslate.com":"https://test-api2.immersivetranslate.com",j5=mn()||Nn()?"https://immersivetranslate.com/accounts/login?from=plugin":"https://test.immersivetranslate.com/accounts/login?from=plugin",M_=mn()||Nn()?"https://immersivetranslate.com/profile":"https://test.immersivetranslate.com/profile",pc=mn()||Nn()?"https://immersivetranslate.com/pricing":"https://test.immersivetranslate.com/pricing",I_=mn()||Nn()?"https://immersivetranslate.com/topup?type=open_ai&":"https://test.immersivetranslate.com/topup?type=open_ai&",F_=mn()||Nn()?"https://immersivetranslate.com/topup?type=deepl&":"https://test.immersivetranslate.com/topup?type=deepl&",H5=pc+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_more",W5=pc+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_footer",q5=pc+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal",K5=I_+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",G5=F_+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",V5=M_+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal&upgradeFromTrial=true";var{ZipReader:B_,BlobReader:ro,TextReader:mi,TextWriter:z_,BlobWriter:lg,ZipWriter:U_}=fs;oa({useWebWorkers:!1});var $_=async e=>{let t=new Uint8Array(await e.slice(0,4).arrayBuffer());return t[0]===80&&t[1]===75&&t[2]===3&&t[3]===4},fn=null,to=0,no=0,xr=0,sg=!1,j_=kr(),H_=j_.PROD==="1",W_=async e=>{let n=await new B_(new ro(e)).getEntries();e.name&&e.name.endsWith(".zip")&&n.every(c=>c.filename.startsWith(e.name.slice(0,-4)+"/"))&&(n=n.map(c=>(c.filename=c.filename.slice(e.name.length-3),c)));let r=new Map(n.map(l=>[l.filename,l])),i=l=>(c,...u)=>r.has(c)?l(r.get(c),...u):null,a=i(l=>l.getData(new z_)),o=i((l,c)=>l.getData(new lg(c)));return{entries:n,loadText:a,loadBlob:o,getSize:l=>r.get(l)?.uncompressedSize??0}},cg=async e=>e.isFile?e:(await Promise.all(Array.from(await new Promise((t,n)=>e.createReader().readEntries(r=>t(r),r=>n(r))),cg))).flat(),q_=async e=>{let t=await cg(e);t=t.map(p=>p);let n=[],r=await Promise.all(t.map(p=>new Promise((d,f)=>p.file(b=>d([b,p.fullPath]),b=>f(b))))),i=new Map(r.map(([p,d])=>{let f=d.replace(e.fullPath+"/","");return n.push({filename:f,...p}),[f,p]})),a=new TextDecoder,o=p=>p?a.decode(p):null,s=p=>i.get(p)?.arrayBuffer()??null;return{entries:n,loadText:async p=>o(await s(p)),loadBlob:async p=>i.get(p),getSize:p=>i.get(p)?.size??0}},K_=({name:e,type:t})=>t==="application/vnd.comicbook+zip"||e.endsWith(".cbz"),G_=({name:e,type:t})=>t==="application/x-fictionbook+xml"||e.endsWith(".fb2"),V_=({name:e,type:t})=>t==="application/x-zip-compressed-fb2"||e.endsWith(".fb2.zip")||e.endsWith(".fbz"),X_=async(e,t)=>{let n;if(e.isDirectory){let a=await q_(e);fn=a,n=await new Or(a).init()}else if(e.size)if(await $_(e)){let a=await W_(e);if(fn=a,K_(e))n=Uc(a,e);else if(V_(e)){let{entries:o}=a,s=o.find(c=>c.filename.endsWith(".fb2")),l=await a.loadBlob((s??o[0]).filename);n=await bo(l)}else n=await new Or(a).init()}else await Qc(e)?n=await new Ii({unzlib:Pp}).open(e):G_(e)&&(n=await bo(e));else throw new Error("File not found");if(!n)throw new Error("File type not supported");let r=new Li(n,t),i=await r.display();return document.body.append(i),r},Me=document.querySelector.bind(document),Gn=!1;function ug(){let e=document.querySelectorAll("iframe");for(let r=0;r<e.length;r++){let a=e[r].contentDocument,o=a&&a.body;o&&o.setAttribute("contenteditable",!1)}Gn=!1;let t=document.getElementById("edit");t&&(t.innerText=Gn?"Preview (\u9884\u89C8)":"Edit (\u7F16\u8F91)");let n=document.querySelectorAll("[data-type='iframe-title']");for(let r=0;r<n.length;r++){let i=n[r];i.innerText=Gn?" \uFF08\u4EE5\u4E0B\u5185\u5BB9\u5F53\u524D\u53EF\u7F16\u8F91\uFF09":""}}function Y_(){let e=document.querySelectorAll("iframe");for(let r=0;r<e.length;r++){let a=e[r].contentDocument,o=a&&a.body;o&&o.setAttribute("contenteditable",!0)}Gn=!0;let t=document.getElementById("edit");t&&(t.innerText=Gn?"Preview (\u9884\u89C8)":"Edit (\u7F16\u8F91)");let n=document.querySelectorAll("[data-type='iframe-title']");for(let r=0;r<n.length;r++){let i=n[r];i.innerText=Gn?" \uFF08\u4EE5\u4E0B\u5185\u5BB9\u5F53\u524D\u53EF\u7F16\u8F91\uFF09":""}}function Z_(){Gn?ug():Y_()}var fc=class{style={spacing:1.4,justify:!0,hyphenate:!0};layout={margin:48,gap:48,maxColumnWidth:720};closeSideBar(){Me("#dimming-overlay").classList.remove("show"),Me("#side-bar").classList.remove("show")}constructor(){Me("#side-bar-button").addEventListener("click",()=>{Me("#dimming-overlay").classList.add("show"),Me("#side-bar").classList.add("show")}),Me("#dimming-overlay").addEventListener("click",()=>this.closeSideBar());let t=Bc([{name:"layout",label:"Layout",type:"radio",items:[["Paginated","paginated"],["Scrolled","scrolled"]],onclick:n=>{this.layout.flow=n}}]);t.element.classList.add("menu"),Me("#menu-button").append(t.element),Me("#menu-button > button").addEventListener("click",()=>t.element.classList.toggle("show")),t.groups.layout.select("paginated")}async open(t){Me("#progress").classList.remove("none");try{this.view=await X_(t,this.#e.bind(this));let{book:n}=this.view;eT(),nT(),rT(),iT(t,n),aT(),tT(),await this.initContentViews(n),oT()}catch(n){alert(n.message),window.location.reload()}}#e(t){}buildTocHtml(t){let n=new DOMParser().parseFromString(t,"application/xhtml+xml"),i=n.querySelector("docTitle").outerHTML,o=n.querySelector("navMap").outerHTML;return`<html><head><style>text {display: block;}</style></head><body>${i}${o}</body></html>`}async initContentViews(t){let n=t.sections,r=document.querySelector("#chapters"),i=t.resources,a=[];if(i&&i.guide&&i.guide.length)for(let d of i.guide)a.push(d.href);let s=(t.metadata||{}).title||"Unknown",l=document.querySelector("#bookTitle");l.textContent=s;let c=0,u=n.length;if(t.resources?.navPath){u+=1;let d=await t.loadText(t.resources.navPath);p(t.resources.navPath,d)}if(t.resources?.ncxPath){u+=1;let d=await t.loadText(t.resources.ncxPath),f=this.buildTocHtml(d);p(t.resources.ncxPath,f)}for(let d=0;d<n.length;d++){let b=n[d].id,g=await t.loadText(b);await p(b,g);let m=d/n.length*100;document.getElementById("progressBar").value=m}function p(d,f){let b=document.createElement("div");b.classList.add("flex"),b.classList.add("justify-center"),b.classList.add("items-center"),r.append(b);let g=document.createElement("h2");g.classList.add("notranslate"),g.innerText=d,b.append(g);let m=new DOMParser().parseFromString(f,"application/xhtml+xml"),h=document.createElement("iframe");h.setAttribute("id",d),h.setAttribute("width","80%"),h.setAttribute("height","400px"),h.srcdoc=m.documentElement.outerHTML,r.append(h),h.onload=()=>{if(c++,c===u){Me("#progress").classList.add("none"),document.dispatchEvent(new CustomEvent("immersiveTranslateEbookLoaded"));let y=document.querySelectorAll("iframe"),w=0;y.forEach(_=>{let v=_.contentDocument;if(v){let x=v.body;if(x){let A=x.innerText.length;w+=A}}});let T=document.createElement("p");T.classList.add("notranslate"),T.innerText=`The book is about ${w} characters in total (\u672C\u4E66\u5927\u7EA6 ${w} \u4E2A\u5B57\u7B26)`,Me("#stats").append(T)}}}}},dg=async e=>{document.body.removeChild(Me("#drop-target"));let t=new fc;globalThis.reader=t,await t.open(e),Me("#editor").classList.remove("none")},Q_=e=>e.preventDefault(),J_=e=>{e.preventDefault();let t=Array.from(e.dataTransfer.items).find(n=>n.kind==="file");if(t){let n=t.webkitGetAsEntry();dg(n.isFile?t.getAsFile():n).catch(r=>{})}},pg=Me("#drop-target");pg.addEventListener("drop",J_);pg.addEventListener("dragover",Q_);Me("#file-input").addEventListener("change",e=>dg(e.target.files[0]).catch(t=>{}));Me("#file-button").addEventListener("click",()=>Me("#file-input").click());function eT(){document.addEventListener(ig,e=>{let{detail:t}=e;if(t){let n=document.querySelector("#progress-number");try{let r=JSON.parse(t);if(r&&r.type&&r.payload){if(r.type==="paragraphTranslated"){let{ok:i}=r.payload;if(i?no++:xr++,n&&to){let a=no,o=no+xr,s=a/to*100,l=Math.floor(s),c=Math.floor(o/to*100);if(l>100&&(l=100),c>100&&(c=100),window.dispatchEvent(new CustomEvent("immersive-translate-progress-change",{detail:{successProgress:l,totalProgress:c}})),n.innerText=`${l}%`,c===100&&xr>0){let u=document.querySelector("#error");u.innerHTML=hi.sanitize(`${xr} failed(\u5931\u8D25). <span class="link">Retry all (\u70B9\u6B64\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D)</span>`)}l===100&&(sg||(sg=!0,uc({particleCount:100,spread:160})))}}else if(r.type==="totalParagraphsCount")r.payload.totalParagraphsCount&&(to=r.payload.totalParagraphsCount);else if(r.type==="translateStart")no=0,xr=0,window.dispatchEvent(new CustomEvent("immersive-translate-start-translate"));else if(r.type==="restorePage"){let i=document.querySelector("#error"),a=document.querySelector("#progress-number");i&&(i.innerHTML=""),a&&(a.innerText="")}}}catch{}}})}function tT(){Ba.data("translationstatus",()=>({progresstxt:"\u5F00\u59CB\u7FFB\u8BD1(Translate)",state:"init",starttranslatebypopup:function(){this.state!=="started"&&(this.state="started",this.progresstxt="\u51C6\u5907\u4E2D...")},starttranslate:function(){if(this.state==="started")return;this.state="started",this.progresstxt="\u51C6\u5907\u4E2D...";let t=Me("#translationMode").value;(!t||t!=="dual"&&t!=="translation")&&(t="dual"),document.dispatchEvent(new CustomEvent(dc,{detail:JSON.stringify({type:"translatePage",data:{translationMode:t}})}))},changeProgress(e){this.state="started",e&&e.detail&&e.detail.successProgress&&(this.progresstxt="\u5DF2\u7FFB\u8BD1 "+e.detail.successProgress+"%")}})),Ba.start()}function nT(){Me("#error").addEventListener("click",e=>{e.preventDefault();let t=document.querySelector("#error");for(;t.firstChild;)t.removeChild(t.firstChild);xr=0,document.dispatchEvent(new CustomEvent(dc,{detail:JSON.stringify({type:"retryFailedParagraphs"})}))})}function rT(){Me("#open").addEventListener("click",()=>{window.location.reload()})}function iT(e,t){Me("#export").addEventListener("click",async u=>{if(u.preventDefault(),!fn)return alert("Load failed");s();let p=fn.entries,d=new lg,f=new U_(d),b=new mi("application/epub+zip");await f.add("mimetype",b,{level:0,extendedTimestamp:!1});let g="";for(let m=0;m<p.length;m++){let h=p[m],y=h.filename;if(y==="mimetype"||!y)continue;let w=y.replace(/\'/g,"\\'"),T=document.querySelector("iframe[id='"+w+"']");T?h.filename==t.resources.navPath?await r({zipWriter:f,entry:h,iframe:T,book:t}):h.filename==t.resources.ncxPath?await i({zipWriter:f,entry:h,iframe:T,book:t}):await o({zipWriter:f,entry:h,iframe:T}):await n({zipWriter:f,entry:h,hookElement:function(S){if(h.filename==t.opfPath){let _=document.getElementById(t.resources.ncxPath);if(!_)return;let{translatedText:v,text:x,originalText:A}=a(_.contentDocument,"docTitle");if(!x)return;v&&(g=v),S.innerHTML=S.innerHTML.replace(A,x)}}})}await c({zipWriter:f,zipFileWriter:d,finalTranslatedTitle:g}),l()});async function n({zipWriter:u,entry:p,hookElement:d}){let f=t.metadata;if(p.filename===t.opfPath&&f&&f.identifier)try{let b=await fn.loadText(p.filename),g=new DOMParser().parseFromString(b,"text/xml");d(g.documentElement);let m=g.getElementById(g.documentElement.getAttribute("unique-identifier"))??g.getElementsByTagNameNS(NS.DC,"identifier")[0],h=Math.random().toString(10).slice(2,15);m.textContent=h;let y=new XMLSerializer().serializeToString(g),w=new mi(y);await u.add(p.filename,w)}catch{let g=await fn.loadBlob(p.filename);await u.add(p.filename,new ro(g))}else try{let b=await fn.loadBlob(p.filename);await u.add(p.filename,new ro(b))}catch{}}async function r({zipWriter:u,iframe:p,entry:d}){let f=p.contentDocument.cloneNode(!0);f.querySelectorAll(".immersive-translate-target-wrapper").forEach(function(b){let g=b.parentElement,m=b.textContent;b.remove();let h=g.textContent,y=[m,h].filter(w=>!!w).join(" - ");g.innerHTML=y});try{let b=new XMLSerializer().serializeToString(f),g=new mi(b);await u.add(d.filename,g)}catch{}}async function i({zipWriter:u,iframe:p,entry:d,book:f}){let b=p.contentDocument;try{let m=await f.loadText(f.resources.ncxPath),h=new DOMParser().parseFromString(m,"text/xml");h.querySelectorAll("navPoint").forEach(function(T){let S=T.id;g("#"+S,h)}),g("docTitle",h);let y=new XMLSerializer().serializeToString(h),w=new mi(y);await u.add(d.filename,w)}catch{try{let h=await fn.loadBlob(d.filename);await u.add(d.filename,new ro(h))}catch{}}function g(m,h){let{text:y}=a(b,m),w=h.querySelector(`${m} text`);!w||!y||(w.innerHTML=y)}}function a(u,p){let d=u.querySelector(p)?.cloneNode(!0);if(!d)return{};let f=d.querySelector("span"),b=f?.textContent;f?.remove();let g=d.querySelector("text")?.textContent,m=[b,g].filter(h=>!!h).join(" - ");return{originalText:g,translatedText:b,text:m}}async function o({zipWriter:u,iframe:p,entry:d}){let f=p.contentDocument.cloneNode(!0);f.querySelectorAll("["+og+"]").forEach(T=>{H_&&delete T[ag];let _=Object.keys(T.dataset).filter(v=>v.startsWith(ce));for(let v of _)delete T.dataset[v]}),f.querySelectorAll("[data-id]").forEach(T=>{T.removeAttribute("data-id")}),f.querySelectorAll("[contenteditable]").forEach(T=>{T.removeAttribute("contenteditable")}),f.querySelectorAll("style").forEach(T=>{T.getAttribute("type")||T.setAttribute("type","text/css")});let y=new XMLSerializer().serializeToString(f),w=new mi(y);try{await u.add(d.filename,w)}catch{}}function s(){document.querySelector("#export").classList.add("disabled");let p=document.querySelector("#exportAction");p&&p.classList.add("none");let d=document.querySelector("#exportStatus");d&&(d.innerText="Exporting..."),ug()}function l(){let u=document.querySelector("#export");u&&u.classList.remove("disabled"),exportAction&&exportAction.classList.remove("none"),exportStatus&&(exportStatus.textContent="")}async function c({zipWriter:u,zipFileWriter:p,finalTranslatedTitle:d}){await u.close();let f=await p.getData(),b="";d&&(b=d+"-"),b+=e.name,e.name.endsWith(".epub.zip")&&(b=b.replace(".epub.zip",".epub"));let g=b.lastIndexOf("."),m=Math.min(160,g);b=b.substring(0,m)+".epub",await si.saveAs(f,b)}}function aT(){Me("#edit").addEventListener("click",e=>{e.preventDefault(),fn||alert("Load failed"),Z_()})}function oT(){setTimeout(()=>{let e=document.createElement("blockquote");e.classList.add("notranslate");let t=`<p class="notranslate">1. If the Epub contains images, it's fine for the edit box below not to show the images, the exported Epub will contain the images.<br>\u5982\u679C Epub \u91CC\u5305\u542B\u56FE\u7247\uFF0C\u4E0B\u9762\u7684\u7F16\u8F91\u6846\u4E0D\u663E\u793A\u56FE\u7247\u662F\u6B63\u5E38\u7684\uFF0C\u5BFC\u51FA\u540E\u7684 Epub \u91CC\u4F1A\u5305\u542B\u56FE\u7247\u3002<br><br>2. When the translation is finished, you can click the Edit button above to modify the translation.<br>\u7FFB\u8BD1\u5B8C\u6210\u540E\uFF0C\u4F60\u53EF\u4EE5\u70B9\u51FB\u4E0A\u65B9\u7684\u7F16\u8F91\u6309\u94AE\u6765\u4FEE\u6539\u8BD1\u6587\u3002<br><br>3. When there is a translation error, you can click Retry All above, or click Show Original and translate again. Or the whole page can be refreshed and started again, because the translated part is always cached and no further requests will be sent.<br>\u5F53\u51FA\u73B0\u7FFB\u8BD1\u9519\u8BEF\u65F6\uFF0C\u53EF\u4EE5\u70B9\u51FB\u4E0A\u65B9\u7684\u91CD\u8BD5\u5168\u90E8\uFF0C\u6216\u8005\u70B9\u51FB\u6D4F\u89C8\u5668\u6269\u5C55\u56FE\u6807\u5148\u663E\u793A\u539F\u6587\uFF0C\u518D\u7FFB\u8BD1\u3002\u6216\u8005\u6574\u4E2A\u5237\u65B0\u9875\u9762\u91CD\u65B0\u6765\u8FC7\u4E5F\u884C\uFF0C\u56E0\u4E3A\u5DF2\u7FFB\u8BD1\u7684\u90E8\u5206\u603B\u662F\u6709\u7F13\u5B58\u7684\uFF0C\u4E0D\u4F1A\u518D\u53D1\u51FA\u8BF7\u6C42\u3002`,n=!1;try{let a=document.querySelector("meta[name='immersive-translate-meta']");if(a){let o=zl(a?.content||""),s=new TextDecoder().decode(o),l=JSON.parse(s);l&&l.isProUser&&(n=!0)}}catch{}n?t+=`<br><br>4. If you have additional needs, you can also purchase the Pro-only  <a
    href="https://immersivetranslate.com/topup/?type=deepl"
    target="_blank"
  >
    DeepL
  </a>
  or             <a
    href="https://immersivetranslate.com/topup/?type=open_ai"
    target="_blank"
  >
    OpenAI
  </a>
  Extra Traffic Package.<br>

        \u5982\u679C\u4F60\u6709\u989D\u5916\u7684\u9700\u6C42\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8D2D\u4E70\u4F1A\u5458\u4E13\u5C5E\u7684
  <a
    href="https://immersivetranslate.com/topup/?type=deepl"
    target="_blank"
  >
    DeepL
  </a>
  \u6216
  <a
    href="https://immersivetranslate.com/topup/?type=open_ai"
    target="_blank"
  >
    OpenAI
  </a>
  \u989D\u5916\u6D41\u91CF\u5305
</p>`:t+="</p>";let r=document.querySelector("meta[name='immersive-translate-ebook-tips']");if(r){let a=r.getAttribute("content");a&&(t+=a)}e.innerHTML=hi.sanitize(t),document.querySelector("#tips").append(e)},1e3)}})();
/*! Bundled license information:

bowser/src/bowser.js:
  (*!
   * Bowser - a browser detector
   * https://github.com/lancedikson/bowser
   * MIT License | (c) Dustin Diaz 2012-2015
   * MIT License | (c) Denis Demchenko 2015-2019
   *)
*/
/*! Bundled license information:

dompurify/dist/purify.es.js:
  (*! @license DOMPurify 3.0.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.3/LICENSE *)
*/
