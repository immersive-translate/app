(()=>{var ui=Object.defineProperty;var di=(e,t)=>{for(var r in t)ui(e,r,{get:t[r],enumerable:!0})};var C={BUILD_TIME:"2023-10-10T20:39:49.241Z",VERSION:"0.10.1",PROD:"1",REDIRECT_URL:"https://dash.immersivetranslate.com/auth-done/",PROD_API:"0",BETA:"0",IMMERSIVE_TRANSLATE_INJECTED_CSS:`:root {
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

.immersive-translate-target-translation-inline-wrapper {}

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
  background-repeat: repeat-x;
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
  background-repeat: repeat-x !important;
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
}

[data-immersive-translate-root-translation-theme="none"] .immersive-translate-target-translation-theme-mask-inner {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="mask"] .immersive-translate-target-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

.immersive-translate-target-translation-theme-mask-inner:hover {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="mask"] .immersive-translate-target-inner:hover {
  filter: none !important;
}

/* opacity theme start */

.immersive-translate-target-translation-theme-opacity-inner {
  filter: opacity(calc(var(--immersive-translate-theme-opacity-opacity) * 1%)) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

[data-immersive-translate-root-translation-theme="none"] .immersive-translate-target-translation-theme-opacity-inner {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="opacity"] .immersive-translate-target-inner {
  filter: opacity(calc(var(--immersive-translate-theme-opacity-opacity) * 1%)) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

.immersive-translate-target-translation-theme-opacity-inner:hover {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="opacity"] .immersive-translate-target-inner:hover {
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

.immersive-translate-error {}

.immersive-translate-clickable-button {
  cursor: pointer;
}

.immersive-translate-help-button {
  cursor: help;
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

.immersive-translate-loading-text:before {
  content: "...";
}

.immersive-translate-loading-none {}

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

.immersive-translate-tooltip:hover:before {
  display: block;
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
}`,IMMERSIVE_TRANSLATE_INPUT_INJECTED_CSS:`.immersive-translate-input {
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

.immersive-translate-cancel-btn {
  /* gray color */
  background-color: rgb(89, 107, 120);
}

.immersive-translate-btn:hover {
  background-color: #f082ac;
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
  color-scheme: light;
}

@media only screen and (prefers-color-scheme: dark) {
  #mount:not([data-theme="light"]) {
    --background-color: #11191f;
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
    color-scheme: dark;
  }
}
[data-theme="dark"] {
  --background-color: #11191f;
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
.px-3{
  padding-left: 12px;
  padding-right: 12px;
}
.pt-3{
  padding-top: 12px;
}
.px-6{
  padding-left: 18px;
  padding-right: 18px;
}
.pt-6{
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
  flex:1;
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
.popup-footer  {
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
  .popup-footer  {
    background-color: #141e26;
  }

  .text-label{
    color: #9ca3af;
  }
select.text-label {

    color: #9ca3af;
}
}
`,IMMERSIVE_TRANSLATE_PAGE_POPUP_CSS:`html {
  font-size: 17px;
}
.immersive-translate-popup-container {
  position: fixed;
  padding: 0;
  z-index: 2147483647;
  right: 0;
  top: 335px;
  width: 36px;
}
.immersive-translate-popup-btn {
  display: inline-block;
  background-color: #ea4c89;
  font-size: 18px;
  opacity: 0.5;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition: -webkit-transform ease-out 250ms;
  transition: -webkit-transform ease-out 250ms;
  transition: transform ease-out 250ms;
  transition: transform ease-out 250ms, -webkit-transform ease-out 250ms;
  border: none;
  padding: 0;
}
.immersive-translate-popup-btn > svg {
}
#mount#mount {
  position: absolute;
  display: none;
  min-width: 250px;
  height: auto;
  --font-size: 17px;
  font-size: 17px;
}
`,IMMERSIVE_TRANSLATE_POPUP_HTML:`<div
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
`,PDF_VIEWER_URL:"https://app.immersivetranslate.com/pdf/",OPTIONS_URL:"https://dash.immersivetranslate.com/",EBOOK_VIEWER_URL:"https://app.immersivetranslate.com/ebook/",EBOOK_BUILDER_URL:"https://app.immersivetranslate.com/ebook/make/",SUBTITLE_BUILDER_URL:"https://app.immersivetranslate.com/subtitle/",HTML_VIEWER_URL:"https://app.immersivetranslate.com/html/",MOCK:"0",DEBUG:"0",IMMERSIVE_TRANSLATE_USERSCRIPT:"1",INSTALL_FROM:"dev"};var xn=class{name;helper;build;detect;parse;constructor({name:t,build:r,detect:n,helper:a,parse:o}){this.name=t,this.helper=a,this.build=r,this.detect=i=>{if(typeof i!="string")throw new Error("Expected string content!");return n(i)},this.parse=(i,c)=>{if(typeof i!="string")throw new Error("Expected string content!");return o(i,c)}}},Ae=e=>new xn(e);var gi="ssa",gt={toMilliseconds:e=>{let t=/^\s*(\d+:)?(\d{1,2}):(\d{1,2})(?:[.,](\d{1,3}))?\s*$/.exec(e);if(!t)throw new Error(`Invalid time format: ${e}`);let r=t[1]?parseInt(t[1].replace(":","")):0,n=parseInt(t[2]),a=parseInt(t[3]),o=t[4]?parseInt(t[4]):0;return r*3600*1e3+n*60*1e3+a*1e3+o*10},toTimeString:e=>{let t=Math.floor(e/1e3/3600),r=Math.floor(e/1e3/60%60),n=Math.floor(e/1e3%60),a=Math.floor(e%1e3/10);return`${t}:${r<10?"0":""}${r}:${n<10?"0":""}${n}.${a<10?"0":""}${a}`}},wn=(e,t)=>{let r,n=null,a=[],o=t.eol||`\r
`,i=e.split(/\r?\n\s*\n/);for(let c=0;c<i.length;c++){let s=/^\s*\[([^\]]+)\]\r?\n([\s\S]*)$/.exec(i[c]);if(s){let u=s[1],m=s[2].split(/\r?\n/);for(let p=0;p<m.length;p++){let g=m[p];if(/^\s*;/.test(g))continue;let h=/^\s*([^\s:]+):\s*(.*)$/.exec(g);if(h){if(u==="Script Info")if(r||(r={},r.type="meta",r.data={},a.push(r)),typeof r.data=="object"){let A=h[1].trim(),S=h[2].trim();r.data[A]=S}else throw new Error(`Invalid meta data: ${g}`);else if(u==="V4 Styles"||u==="V4+ Styles"){let A=h[1].trim(),S=h[2].trim();if(A==="Format")n=S.split(/\s*,\s*/g);else if(A==="Style"&&n){let f=S.split(/\s*,\s*/g),v={};v.type="style",v.data={};for(let k=0;k<n.length&&k<f.length;k++)v.data[n[k]]=f[k];a.push(v)}}else if(u==="Events"){let A=h[1].trim(),S=h[2].trim();if(A==="Format")n=S.split(/\s*,\s*/g);else if(A==="Dialogue"&&n){let f=S.split(/\s*,\s*/g),v={};v.type="caption",v.data={};for(let R=0;R<n.length&&R<f.length;R++)v.data[n[R]]=f[R];v.start=gt.toMilliseconds(v.data.Start),v.end=gt.toMilliseconds(v.data.End),v.duration=v.end-v.start,v.content=v.data.Text;let H=((R,B,_)=>R.split(B,_).join(B).length)(S,",",n.length-1)+1;v.content=S.substring(H),v.data.Text=v.content,v.text=v.content.replace(/\\N/g,o).replace(/\{[^}]+\}/g,""),a.push(v)}}}}}t.verbose}return a},_n=(e,t)=>{let r=t.eol||`\r
`,n=t.format==="ass",a="";a+=`[Script Info]${r}`,a+=`; Script generated by subsrt ${r}`,a+=`ScriptType: v4.00${n?"+":""}${r}`,a+=`Collisions: Normal${r}`,a+=r,n?(a+=`[V4+ Styles]${r}`,a+=`Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding${r}`,a+=`Style: DefaultVCD, Arial,28,&H00B4FCFC,&H00B4FCFC,&H00000008,&H80000008,-1,0,0,0,100,100,0.00,0.00,1,1.00,2.00,2,30,30,30,0${r}`):(a+=`[V4 Styles]${r}`,a+=`Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, TertiaryColour, BackColour, Bold, Italic, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, AlphaLevel, Encoding${r}`,a+=`Style: DefaultVCD, Arial,28,11861244,11861244,11861244,-2147483640,-1,0,1,1,2,2,30,30,30,0,0${r}`),a+=r,a+=`[Events]${r}`,a+=`Format: ${n?"Layer":"Marked"}, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text${r}`;for(let o=0;o<e.length;o++){let i=e[o];if(i.type!=="meta"){if(!i.type||i.type==="caption"){a+=`Dialogue: ${n?"0":"Marked=0"},${gt.toTimeString(i.start)},${gt.toTimeString(i.end)},DefaultVCD, NTP,0000,0000,0000,,${i.text.replace(/\r?\n/g,"\\N")}${r}`;continue}t.verbose}}return a},Sn=e=>/^\s*\[Script Info\]\r?\n/.test(e)&&/\s*\[Events\]\r?\n/.test(e)?e.indexOf("[V4+ Styles]")>0?"ass":"ssa":!1,Ur=Ae({name:gi,build:_n,detect:Sn,helper:gt,parse:wn});var mi="ass",jr=Ae({name:mi,build:_n,detect:Sn,helper:gt,parse:wn});var fi="json",hi=(e,t)=>JSON.parse(e),bi=(e,t)=>JSON.stringify(e,void 0,2),yi=e=>{try{let t=JSON.parse(e);return Array.isArray(t)&&t.length>0&&typeof t[0]=="object"}catch{return!1}},Hr=Ae({name:fi,build:bi,detect:yi,parse:hi});var Ti="lrc",An={toMilliseconds:e=>{let t=/^\s*(\d+):(\d{1,2})(?:[.,](\d{1,3}))?\s*$/.exec(e);if(!t)throw new Error(`Invalid time format: ${e}`);let r=parseInt(t[1]),n=parseInt(t[2]),a=t[3]?parseInt(t[3]):0;return r*60*1e3+n*1e3+a*10},toTimeString:e=>{let t=Math.floor(e/1e3/60),r=Math.floor(e/1e3%60),n=Math.floor(e%1e3);return`${(t<10?"0":"")+t}:${r<10?"0":""}${r}.${n<100?"0":""}${n<10?"0":Math.floor(n/10)}`}},vi=(e,t)=>{let r=null,n=[],a=e.split(/\r?\n/);for(let o=0;o<a.length;o++){if(!a[o]||a[o].trim().length===0)continue;let c=/^\[(\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\](.*)(?:\r?\n)*$/.exec(a[o]);if(c){let s={};s.type="caption",s.start=An.toMilliseconds(c[1]),s.end=s.start+2e3,s.duration=s.end-s.start,s.content=c[2],s.text=s.content,n.push(s),r&&(r.end=s.start,r.duration=r.end-r.start),r=s;continue}let l=/^\[(\w+):([^\]]*)\](?:\r?\n)*$/.exec(a[o]);if(l){let s={};s.type="meta",s.tag=l[1],l[2]&&(s.data=l[2]),n.push(s);continue}t.verbose}return n},xi=(e,t)=>{let r="",n=!1,a=t.eol||`\r
`;for(let o=0;o<e.length;o++){let i=e[o];if(i.type==="meta"){i.tag&&i.data&&typeof i.data=="string"&&(r+=`[${i.tag}:${i.data.replace(/[\r\n]+/g," ")}]${a}`);continue}if(!i.type||i.type==="caption"){n||(r+=a,n=!0),r+=`[${An.toTimeString(i.start)}]${i.text}${a}`;continue}t.verbose}return r},wi=e=>/\r?\n\[\d+:\d{1,2}(?:[.,]\d{1,3})?\].*\r?\n/.test(e),Wr=Ae({name:Ti,build:xi,detect:wi,helper:An,parse:vi});var _i="sbv",Pt={toMilliseconds:e=>{let t=/^\s*(\d{1,2}):(\d{1,2}):(\d{1,2})(?:[.,](\d{1,3}))?\s*$/.exec(e);if(!t)throw new Error(`Invalid time format: ${e}`);let r=parseInt(t[1]),n=parseInt(t[2]),a=parseInt(t[3]),o=t[4]?parseInt(t[4]):0;return r*3600*1e3+n*60*1e3+a*1e3+o},toTimeString:e=>{let t=Math.floor(e/1e3/3600),r=Math.floor(e/1e3/60%60),n=Math.floor(e/1e3%60),a=Math.floor(e%1e3);return`${(t<10?"0":"")+t}:${r<10?"0":""}${r}:${n<10?"0":""}${n}.${a<100?"0":""}${a<10?"0":""}${a}`}},Si=(e,t)=>{let r=[],n=t.eol||`\r
`,a=e.split(/\r?\n\s*\n/);for(let o=0;o<a.length;o++){let c=/^(\d{1,2}:\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\s*[,;]\s*(\d{1,2}:\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\r?\n([\s\S]*)$/.exec(a[o]);if(c){let l={};l.type="caption",l.start=Pt.toMilliseconds(c[1]),l.end=Pt.toMilliseconds(c[2]),l.duration=l.end-l.start;let s=c[3].split(/\[br\]|\r?\n/gi);l.content=s.join(n),l.text=l.content.replace(/>>[^:]+:\s*/g,""),r.push(l);continue}t.verbose}return r},Ai=(e,t)=>{let r="",n=t.eol||`\r
`;for(let a=0;a<e.length;a++){let o=e[a];if(!o.type||o.type==="caption"){r+=`${Pt.toTimeString(o.start)},${Pt.toTimeString(o.end)}${n}`,r+=o.text+n,r+=n;continue}t.verbose}return r},ki=e=>/\d{1,2}:\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?\s*[,;]\s*\d{1,2}:\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?/.test(e),Kr=Ae({name:_i,build:Ai,detect:ki,helper:Pt,parse:Si});var zr="smi",kn={htmlEncode:e=>e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r?\n/g,"<BR>"),htmlDecode:(e,t)=>e.replace(/<BR\s*\/?>/gi,t||`\r
`).replace(/&nbsp;/g," ").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")},Ei=(e,t)=>{if(t.format&&t.format!==zr)throw new Error(`Invalid format: ${t.format}`);let r=[],n=t.eol||`\r
`,a=/<TITLE[^>]*>([\s\S]*)<\/TITLE>/i.exec(e);if(a){let s={};s.type="meta",s.name="title",s.data=a[1].replace(/^\s*/g,"").replace(/\s*$/g,""),r.push(s)}let o=/<STYLE[^>]*>([\s\S]*)<\/STYLE>/i.exec(e);if(o){let s={};s.type="meta",s.name="style",s.data=o[1],r.push(s)}let i=e.replace(/^[\s\S]*<BODY[^>]*>/gi,"").replace(/<\/BODY[^>]*>[\s\S]*$/gi,""),c=null,l=i.split(/<SYNC/gi);for(let s=0;s<l.length;s++){if(!l[s]||l[s].trim().length===0)continue;let u=`<SYNC${l[s]}`,m=/^<SYNC[^>]+Start\s*=\s*["']?(\d+)[^\d>]*>([\s\S]*)/i.exec(u);if(m){let p={};p.type="caption",p.start=parseInt(m[1]),p.end=p.start+2e3,p.duration=p.end-p.start,p.content=m[2].replace(/^<\/SYNC[^>]*>/gi,"");let g=!0,h=/^<P.+Class\s*=\s*["']?([\w-]+)(?: .*)?>([\s\S]*)/i.exec(p.content)||/^<P([^>]*)>([\s\S]*)/i.exec(p.content);if(h){let A=h[2].replace(/<P[\s\S]+$/gi,"");A=A.replace(/<BR\s*\/?>\s+/gi,n).replace(/<BR\s*\/?>/gi,n).replace(/<[^>]+>/g,""),A=A.replace(/^\s+/g,"").replace(/\s+$/g,""),g=A.replace(/&nbsp;/gi," ").replace(/\s+/g,"").length===0,p.text=kn.htmlDecode(A,n)}!t.preserveSpaces&&g?t.verbose:r.push(p),c&&(c.end=p.start,c.duration=c.end-c.start),c=p;continue}t.verbose}return r},Ci=(e,t)=>{let r=t.eol||`\r
`,n="";n+=`<SAMI>${r}`,n+=`<HEAD>${r}`,n+=`<TITLE>${t.title||""}</TITLE>${r}`,n+=`<STYLE TYPE="text/css">${r}`,n+=`<!--${r}`,n+=`P { font-family: Arial; font-weight: normal; color: white; background-color: black; text-align: center; }${r}`,n+=`.LANG { Name: ${t.langName||"English"}; lang: ${t.langCode||"en-US"}; SAMIType: CC; }${r}`,n+=`-->${r}`,n+=`</STYLE>${r}`,n+=`</HEAD>${r}`,n+=`<BODY>${r}`;for(let a=0;a<e.length;a++){let o=e[a];if(o.type!=="meta"){if(!o.type||o.type==="caption"){n+=`<SYNC Start=${o.start}>${r}`,n+=`  <P Class=LANG>${kn.htmlEncode(o.text||"")}${t.closeTags?"</P>":""}${r}`,t.closeTags&&(n+=`</SYNC>${r}`),n+=`<SYNC Start=${o.end}>${r}`,n+=`  <P Class=LANG>&nbsp;${t.closeTags?"</P>":""}${r}`,t.closeTags&&(n+=`</SYNC>${r}`);continue}t.verbose}}return n+=`</BODY>${r}`,n+=`</SAMI>${r}`,n},Pi=e=>/<SAMI[^>]*>[\s\S]*<BODY[^>]*>/.test(e),qr=Ae({name:zr,build:Ci,detect:Pi,helper:kn,parse:Ei});var Li="srt",Lt={toMilliseconds:e=>{let t=/^\s*(\d{1,2}):(\d{1,2}):(\d{1,2})(?:[.,](\d{1,3}))?\s*$/.exec(e);if(!t)throw new Error(`Invalid time format: ${e}`);let r=parseInt(t[1]),n=parseInt(t[2]),a=parseInt(t[3]),o=t[4]?parseInt(t[4]):0;return r*3600*1e3+n*60*1e3+a*1e3+o},toTimeString:e=>{let t=Math.floor(e/1e3/3600),r=Math.floor(e/1e3/60%60),n=Math.floor(e/1e3%60),a=Math.floor(e%1e3);return`${(t<10?"0":"")+t}:${r<10?"0":""}${r}:${n<10?"0":""}${n},${a<100?"0":""}${a<10?"0":""}${a}`}},Ni=(e,t)=>{let r=[],n=t.eol||`\r
`,a=e.split(/\r?\n\s*\n/g);for(let o=0;o<a.length;o++){let c=/^(\d+)\r?\n(\d{1,2}:\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\s*-->\s*(\d{1,2}:\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\r?\n([\s\S]*)$/.exec(a[o]);if(c){let l={};l.type="caption",l.index=parseInt(c[1]),l.start=Lt.toMilliseconds(c[2]),l.end=Lt.toMilliseconds(c[3]),l.duration=l.end-l.start;let s=c[4].split(/\r?\n/);l.content=s.join(n),l.text=l.content.replace(/<[^>]+>/g,"").replace(/\{[^}]+\}/g,"").replace(/>>[^:]*:\s*/g,""),r.push(l);continue}t.verbose}return r},Mi=(e,t)=>{let r="",n=t.eol||`\r
`;for(let a=0;a<e.length;a++){let o=e[a];if(!o.type||o.type==="caption"){r+=(o.index?o.index:a+1).toString()+n,r+=`${Lt.toTimeString(o.start)} --> ${Lt.toTimeString(o.end)}${n}`,r+=o.text+n,r+=n;continue}t.verbose}return r},Oi=e=>/\d+\r?\n\d{1,2}:\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?\s*-->\s*\d{1,2}:\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?/.test(e),Gr=Ae({name:Li,build:Mi,detect:Oi,helper:Lt,parse:Ni});var Ri="sub",En=25,Di=(e,t)=>{t.fps||=En;let r=t.fps>0?t.fps:En,n=[],a=t.eol||`\r
`,o=e.split(/\r?\n/g);for(let i=0;i<o.length;i++){let l=/^\{(\d+)\}\{(\d+)\}(.*)$/.exec(o[i]);if(l){let s={};s.type="caption",s.index=i+1,s.frame={start:parseInt(l[1]),end:parseInt(l[2]),count:parseInt(l[2])-parseInt(l[1])},s.start=Math.round(s.frame.start/r),s.end=Math.round(s.frame.end/r),s.duration=s.end-s.start;let u=l[3].split(/\|/g);s.content=u.join(a),s.text=s.content.replace(/\{[^}]+\}/g,""),n.push(s);continue}t.verbose}return n},Ii=(e,t)=>{let r=(t.fps||0)>0?t.fps:En,n="",a=t.eol||`\r
`;for(let o=0;o<e.length;o++){let i=e[o];if(!i.type||i.type==="caption"){let c=typeof i.frame=="object"&&i.frame.start>=0?i.frame.start:i.start*r,l=typeof i.frame=="object"&&i.frame.end>=0?i.frame.end:i.end*r,s=i.text.replace(/\r?\n/,"|");n+=`{${c}}{${l}}${s}${a}`;continue}t.verbose}return n},Fi=e=>/^\{\d+\}\{\d+\}.*/.test(e),Vr=Ae({name:Ri,build:Ii,detect:Fi,parse:Di});var Bi="vtt",Nt={toMilliseconds:e=>{let t=/^\s*(\d{1,2}:)?(\d{1,2}):(\d{1,2})(?:[.,](\d{1,3}))?\s*$/.exec(e);if(!t)throw new Error(`Invalid time format: ${e}`);let r=t[1]?parseInt(t[1].replace(":","")):0,n=parseInt(t[2]),a=parseInt(t[3]),o=t[4]?parseInt(t[4]):0;return r*3600*1e3+n*60*1e3+a*1e3+o},toTimeString:e=>{let t=Math.floor(e/1e3/3600),r=Math.floor(e/1e3/60%60),n=Math.floor(e/1e3%60),a=Math.floor(e%1e3);return`${(t<10?"0":"")+t}:${r<10?"0":""}${r}:${n<10?"0":""}${n}.${a<100?"0":""}${a<10?"0":""}${a}`}},$i=(e,t)=>{let r=1,n=[],a=e.split(/\r?\n\s*\n/);for(let o=0;o<a.length;o++){let c=/^([^\r\n]+\r?\n)?((?:\d{1,2}:)?\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\s*-->\s*((?:\d{1,2}:)?\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\s?.*\r?\n([\s\S]*)$/.exec(a[o]);if(c){let s={};s.type="caption",s.index=r++,c[1]&&(s.cue=c[1].replace(/[\r\n]*/g,"")),s.start=Nt.toMilliseconds(c[2]),s.end=Nt.toMilliseconds(c[3]),s.duration=s.end-s.start;let u=c[4].split(/\r?\n/);s.content=u.join(" "),s.text=s.content.replace(/<[^>]+>/g,"").replace(/\{[^}]+\}/g,""),n.push(s);continue}let l=/^([A-Z]+)(\r?\n([\s\S]*))?$/.exec(a[o])||/^([A-Z]+)\s+([^\r\n]*)$/.exec(a[o]);if(l){let s={};s.type="meta",s.name=l[1],l[3]&&(s.data=l[3]),n.push(s);continue}t.verbose}return n},Ui=(e,t)=>{let r=t.eol||`\r
`,n=`WEBVTT${r}${r}`;for(let a=0;a<e.length;a++){let o=e[a];if(o.type==="meta"){if(o.name==="WEBVTT")continue;n+=o.name+r,n+=o.data?o.data+r:"",n+=r;continue}if(!o.type||o.type==="caption"){n+=(a+1).toString()+r,n+=`${Nt.toTimeString(o.start)} --> ${Nt.toTimeString(o.end)}${r}`,n+=o.text+r,n+=r;continue}t.verbose}return n},ji=e=>/^\s*WEBVTT\r?\n/.test(e),Yr=Ae({name:Bi,build:Ui,detect:ji,helper:Nt,parse:$i});var Hi={vtt:Yr,lrc:Wr,smi:qr,ssa:Ur,ass:jr,sub:Vr,srt:Gr,sbv:Kr,json:Hr},Xr=Hi;var Wi=e=>JSON.parse(JSON.stringify(e)),Cn=class{format=Xr;list=()=>Object.keys(this.format);detect=t=>{let r=this.list();for(let n=0;n<r.length;n++){let a=r[n],o=this.format[a];if(typeof o>"u"||typeof o.detect!="function")continue;let i=o.detect(t);if(i===!0||i===a)return a}return""};parse=(t,r={})=>{let n=r.format||this.detect(t);if(!n||n.trim().length===0)throw new Error("Cannot determine subtitle format!");let a=this.format[n];if(typeof a>"u")throw new Error(`Unsupported subtitle format: ${n}`);let o=a.parse;if(typeof o!="function")throw new Error(`Subtitle format does not support 'parse' op: ${n}`);return o(t,r)};build=(t,r={})=>{let n=r.format||"srt";if(!n||n.trim().length===0)throw new Error("Cannot determine subtitle format!");let a=this.format[n];if(typeof a>"u")throw new Error(`Unsupported subtitle format: ${n}`);let o=a.build;if(typeof o!="function")throw new Error(`Subtitle format does not support 'build' op: ${n}`);return o(t,r)};convert=(t,r={})=>{let n={};typeof r=="string"?n.to=r:n=r;let a={format:n.from||void 0,verbose:n.verbose,eol:n.eol},o=this.parse(t,a);n.resync&&(o=this.resync(o,n.resync));let i={format:n.to||n.format,verbose:n.verbose,eol:n.eol};return this.build(o,i)};resync=(t,r={})=>{let n,a,o=!1,i;if(typeof r=="function")n=r;else if(typeof r=="number")i=r,n=l=>[l[0]+i,l[1]+i];else if(typeof r=="object")i=(r.offset||0)*(r.frame?r.fps||25:1),a=r.ratio||1,o=r.frame||!1,n=l=>[Math.round(l[0]*a+i),Math.round(l[1]*a+i)];else throw new Error("Argument 'options' not defined!");let c=[];for(let l=0;l<t.length;l++){let s=Wi(t[l]);if(!s.type||s.type==="caption")if(o){let u=n([s.frame.start,s.frame.end]);u&&u.length===2&&(s.frame.start=u[0],s.frame.end=u[1],s.frame.count=s.frame.end-s.frame.start)}else{let u=n([s.start,s.end]);u&&u.length===2&&(s.start=u[0],s.end=u[1],s.duration=s.end-s.start)}c.push(s)}return c}},Jr=new Cn,zt=Jr,{format:Du,list:Iu,detect:Fu,parse:Bu,build:$u,convert:Uu,resync:ju}=Jr;var Jt,W,na,Ki,Mt,Qr,ra,Vt={},aa=[],zi=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function it(e,t){for(var r in t)e[r]=t[r];return e}function oa(e){var t=e.parentNode;t&&t.removeChild(e)}function Ln(e,t,r){var n,a,o,i={};for(o in t)o=="key"?n=t[o]:o=="ref"?a=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?Jt.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return qt(e,i,n,a,null)}function qt(e,t,r,n,a){var o={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++na};return a==null&&W.vnode!=null&&W.vnode(o),o}function ot(e){return e.children}function Gt(e,t){this.props=e,this.context=t}function xt(e,t){if(t==null)return e.__?xt(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?xt(e):null}function ia(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return ia(e)}}function Pn(e){(!e.__d&&(e.__d=!0)&&Mt.push(e)&&!Yt.__r++||Qr!==W.debounceRendering)&&((Qr=W.debounceRendering)||setTimeout)(Yt)}function Yt(){for(var e;Yt.__r=Mt.length;)e=Mt.sort(function(t,r){return t.__v.__b-r.__v.__b}),Mt=[],e.some(function(t){var r,n,a,o,i,c;t.__d&&(i=(o=(r=t).__v).__e,(c=r.__P)&&(n=[],(a=it({},o)).__v=o.__v+1,Nn(c,o,a,r.__n,c.ownerSVGElement!==void 0,o.__h!=null?[i]:null,n,i??xt(o),o.__h),ua(n,o),o.__e!=i&&ia(o)))})}function sa(e,t,r,n,a,o,i,c,l,s){var u,m,p,g,h,A,S,f=n&&n.__k||aa,v=f.length;for(r.__k=[],u=0;u<t.length;u++)if((g=r.__k[u]=(g=t[u])==null||typeof g=="boolean"?null:typeof g=="string"||typeof g=="number"||typeof g=="bigint"?qt(null,g,null,null,g):Array.isArray(g)?qt(ot,{children:g},null,null,null):g.__b>0?qt(g.type,g.props,g.key,g.ref?g.ref:null,g.__v):g)!=null){if(g.__=r,g.__b=r.__b+1,(p=f[u])===null||p&&g.key==p.key&&g.type===p.type)f[u]=void 0;else for(m=0;m<v;m++){if((p=f[m])&&g.key==p.key&&g.type===p.type){f[m]=void 0;break}p=null}Nn(e,g,p=p||Vt,a,o,i,c,l,s),h=g.__e,(m=g.ref)&&p.ref!=m&&(S||(S=[]),p.ref&&S.push(p.ref,null,g),S.push(m,g.__c||h,g)),h!=null?(A==null&&(A=h),typeof g.type=="function"&&g.__k===p.__k?g.__d=l=la(g,l,e):l=ca(e,g,p,f,h,l),typeof r.type=="function"&&(r.__d=l)):l&&p.__e==l&&l.parentNode!=e&&(l=xt(p))}for(r.__e=A,u=v;u--;)f[u]!=null&&(typeof r.type=="function"&&f[u].__e!=null&&f[u].__e==r.__d&&(r.__d=xt(n,u+1)),pa(f[u],f[u]));if(S)for(u=0;u<S.length;u++)da(S[u],S[++u],S[++u])}function la(e,t,r){for(var n,a=e.__k,o=0;a&&o<a.length;o++)(n=a[o])&&(n.__=e,t=typeof n.type=="function"?la(n,t,r):ca(r,n,n,a,n.__e,t));return t}function ca(e,t,r,n,a,o){var i,c,l;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(r==null||a!=o||a.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(a),i=null;else{for(c=o,l=0;(c=c.nextSibling)&&l<n.length;l+=2)if(c==a)break e;e.insertBefore(a,o),i=o}return i!==void 0?i:a.nextSibling}function qi(e,t,r,n,a){var o;for(o in r)o==="children"||o==="key"||o in t||Xt(e,o,null,r[o],n);for(o in t)a&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||r[o]===t[o]||Xt(e,o,t[o],r[o],n)}function Zr(e,t,r){t[0]==="-"?e.setProperty(t,r):e[t]=r==null?"":typeof r!="number"||zi.test(t)?r:r+"px"}function Xt(e,t,r,n,a){var o;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||Zr(e.style,t,"");if(r)for(t in r)n&&r[t]===n[t]||Zr(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?n||e.addEventListener(t,o?ta:ea,o):e.removeEventListener(t,o?ta:ea,o);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r!=null&&(r!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,r):e.removeAttribute(t))}}function ea(e){this.l[e.type+!1](W.event?W.event(e):e)}function ta(e){this.l[e.type+!0](W.event?W.event(e):e)}function Nn(e,t,r,n,a,o,i,c,l){var s,u,m,p,g,h,A,S,f,v,k,H,R,B=t.type;if(t.constructor!==void 0)return null;r.__h!=null&&(l=r.__h,c=t.__e=r.__e,t.__h=null,o=[c]),(s=W.__b)&&s(t);try{e:if(typeof B=="function"){if(S=t.props,f=(s=B.contextType)&&n[s.__c],v=s?f?f.props.value:s.__:n,r.__c?A=(u=t.__c=r.__c).__=u.__E:("prototype"in B&&B.prototype.render?t.__c=u=new B(S,v):(t.__c=u=new Gt(S,v),u.constructor=B,u.render=Vi),f&&f.sub(u),u.props=S,u.state||(u.state={}),u.context=v,u.__n=n,m=u.__d=!0,u.__h=[]),u.__s==null&&(u.__s=u.state),B.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=it({},u.__s)),it(u.__s,B.getDerivedStateFromProps(S,u.__s))),p=u.props,g=u.state,m)B.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(B.getDerivedStateFromProps==null&&S!==p&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(S,v),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(S,u.__s,v)===!1||t.__v===r.__v){u.props=S,u.state=u.__s,t.__v!==r.__v&&(u.__d=!1),u.__v=t,t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(_){_&&(_.__=t)}),u.__h.length&&i.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(S,u.__s,v),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(p,g,h)})}if(u.context=v,u.props=S,u.__v=t,u.__P=e,k=W.__r,H=0,"prototype"in B&&B.prototype.render)u.state=u.__s,u.__d=!1,k&&k(t),s=u.render(u.props,u.state,u.context);else do u.__d=!1,k&&k(t),s=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++H<25);u.state=u.__s,u.getChildContext!=null&&(n=it(it({},n),u.getChildContext())),m||u.getSnapshotBeforeUpdate==null||(h=u.getSnapshotBeforeUpdate(p,g)),R=s!=null&&s.type===ot&&s.key==null?s.props.children:s,sa(e,Array.isArray(R)?R:[R],t,r,n,a,o,i,c,l),u.base=t.__e,t.__h=null,u.__h.length&&i.push(u),A&&(u.__E=u.__=null),u.__e=!1}else o==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=Gi(r.__e,t,r,n,a,o,i,l);(s=W.diffed)&&s(t)}catch(_){t.__v=null,(l||o!=null)&&(t.__e=c,t.__h=!!l,o[o.indexOf(c)]=null),W.__e(_,t,r)}}function ua(e,t){W.__c&&W.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(n){n.call(r)})}catch(n){W.__e(n,r.__v)}})}function Gi(e,t,r,n,a,o,i,c){var l,s,u,m=r.props,p=t.props,g=t.type,h=0;if(g==="svg"&&(a=!0),o!=null){for(;h<o.length;h++)if((l=o[h])&&"setAttribute"in l==!!g&&(g?l.localName===g:l.nodeType===3)){e=l,o[h]=null;break}}if(e==null){if(g===null)return document.createTextNode(p);e=a?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,p.is&&p),o=null,c=!1}if(g===null)m===p||c&&e.data===p||(e.data=p);else{if(o=o&&Jt.call(e.childNodes),s=(m=r.props||Vt).dangerouslySetInnerHTML,u=p.dangerouslySetInnerHTML,!c){if(o!=null)for(m={},h=0;h<e.attributes.length;h++)m[e.attributes[h].name]=e.attributes[h].value;(u||s)&&(u&&(s&&u.__html==s.__html||u.__html===e.innerHTML)||(e.innerHTML=u&&u.__html||""))}if(qi(e,p,m,a,c),u)t.__k=[];else if(h=t.props.children,sa(e,Array.isArray(h)?h:[h],t,r,n,a&&g!=="foreignObject",o,i,o?o[0]:r.__k&&xt(r,0),c),o!=null)for(h=o.length;h--;)o[h]!=null&&oa(o[h]);c||("value"in p&&(h=p.value)!==void 0&&(h!==e.value||g==="progress"&&!h||g==="option"&&h!==m.value)&&Xt(e,"value",h,m.value,!1),"checked"in p&&(h=p.checked)!==void 0&&h!==e.checked&&Xt(e,"checked",h,m.checked,!1))}return e}function da(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(n){W.__e(n,r)}}function pa(e,t,r){var n,a;if(W.unmount&&W.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||da(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){W.__e(o,t)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(a=0;a<n.length;a++)n[a]&&pa(n[a],t,typeof e.type!="function");r||e.__e==null||oa(e.__e),e.__=e.__e=e.__d=void 0}function Vi(e,t,r){return this.constructor(e,r)}function Qt(e,t,r){var n,a,o;W.__&&W.__(e,t),a=(n=typeof r=="function")?null:r&&r.__k||t.__k,o=[],Nn(t,e=(!n&&r||t).__k=Ln(ot,null,[e]),a||Vt,Vt,t.ownerSVGElement!==void 0,!n&&r?[r]:a?null:t.firstChild?Jt.call(t.childNodes):null,o,!n&&r?r:a?a.__e:t.firstChild,n),ua(o,e)}function Zt(e,t){var r={__c:t="__cC"+ra++,__:e,Consumer:function(n,a){return n.children(a)},Provider:function(n){var a,o;return this.getChildContext||(a=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&a.some(Pn)},this.sub=function(i){a.push(i);var c=i.componentWillUnmount;i.componentWillUnmount=function(){a.splice(a.indexOf(i),1),c&&c.call(i)}}),n.children}};return r.Provider.__=r.Consumer.contextType=r}Jt=aa.slice,W={__e:function(e,t,r,n){for(var a,o,i;t=t.__;)if((a=t.__c)&&!a.__)try{if((o=a.constructor)&&o.getDerivedStateFromError!=null&&(a.setState(o.getDerivedStateFromError(e)),i=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,n||{}),i=a.__d),i)return a.__E=a}catch(c){e=c}throw e}},na=0,Ki=function(e){return e!=null&&e.constructor===void 0},Gt.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=it({},this.state),typeof e=="function"&&(e=e(it({},r),this.props)),e&&it(r,e),e!=null&&this.__v&&(t&&this.__h.push(t),Pn(this))},Gt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Pn(this))},Gt.prototype.render=ot,Mt=[],Yt.__r=0,ra=0;var Dn,we,Mn,ga,On=0,va=[],en=[],ma=W.__b,fa=W.__r,ha=W.diffed,ba=W.__c,ya=W.unmount;function xa(e,t){W.__h&&W.__h(we,e,On||t),On=0;var r=we.__H||(we.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({__V:en}),r.__[e]}function Ke(e){return On=1,Yi(wa,e)}function Yi(e,t,r){var n=xa(Dn++,2);if(n.t=e,!n.__c&&(n.__=[r?r(t):wa(void 0,t),function(o){var i=n.__N?n.__N[0]:n.__[0],c=n.t(i,o);i!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=we,!we.u)){we.u=!0;var a=we.shouldComponentUpdate;we.shouldComponentUpdate=function(o,i,c){if(!n.__c.__H)return!0;var l=n.__c.__H.__.filter(function(u){return u.__c});if(l.every(function(u){return!u.__N}))return!a||a.call(this,o,i,c);var s=!1;return l.forEach(function(u){if(u.__N){var m=u.__[0];u.__=u.__N,u.__N=void 0,m!==u.__[0]&&(s=!0)}}),!!s&&(!a||a.call(this,o,i,c))}}return n.__N||n.__}function wt(e,t){var r=xa(Dn++,3);!W.__s&&Qi(r.__H,t)&&(r.__=e,r.i=t,we.__H.__h.push(r))}function Xi(){for(var e;e=va.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(tn),e.__H.__h.forEach(Rn),e.__H.__h=[]}catch(t){e.__H.__h=[],W.__e(t,e.__v)}}W.__b=function(e){typeof e.type!="function"||e.o||e.type===ot?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),we=null,ma&&ma(e)},W.__r=function(e){fa&&fa(e),Dn=0;var t=(we=e.__c).__H;t&&(Mn===we?(t.__h=[],we.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.__V=en,r.__N=r.i=void 0})):(t.__h.forEach(tn),t.__h.forEach(Rn),t.__h=[])),Mn=we},W.diffed=function(e){ha&&ha(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(va.push(t)!==1&&ga===W.requestAnimationFrame||((ga=W.requestAnimationFrame)||Ji)(Xi)),t.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.__V!==en&&(r.__=r.__V),r.i=void 0,r.__V=en})),Mn=we=null},W.__c=function(e,t){t.some(function(r){try{r.__h.forEach(tn),r.__h=r.__h.filter(function(n){return!n.__||Rn(n)})}catch(n){t.some(function(a){a.__h&&(a.__h=[])}),t=[],W.__e(n,r.__v)}}),ba&&ba(e,t)},W.unmount=function(e){ya&&ya(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{tn(n)}catch(a){t=a}}),r.__H=void 0,t&&W.__e(t,r.__v))};var Ta=typeof requestAnimationFrame=="function";function Ji(e){var t,r=function(){clearTimeout(n),Ta&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,100);Ta&&(t=requestAnimationFrame(r))}function tn(e){var t=we,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),we=t}function Rn(e){var t=we;e.__c=e.__(),we=t}function Qi(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function wa(e,t){return typeof t=="function"?t(e):t}function _a(e,t){return[e,!e||e.endsWith("/")?"":"/",t,".json"].join("")}function Sa(e,t){let r=e;return t&&Object.keys(t).forEach(n=>{let a=t[n];if(a===void 0)return;let o=ns(n);if(typeof a=="object"||o){let i=a;o&&typeof i=="string"&&(i={tag:"a",href:i});let c=`<${n}>`,l=r.indexOf(c);if(l!==-1){let s=i.tag||"a",u=r.indexOf(`</${n}>`);if(u!==-1){let m=r.substring(l+c.length,u),p=Object.keys(i).filter(g=>g!=="tag").map(g=>`${g}="${i[g]}"`).join(" ");r=r.replace(`${c}${m}</${n}>`,`<${s} ${p}>${m}</${s}>`)}}}else if(a){let i=new RegExp("{"+n+"}","gm");r=r.replace(i,a.toString())}}),r}function In(e,t,r){let n=e[t];if(!n)return r;let a=r.split("."),o="";do{o+=a.shift();let i=n[o];i!==void 0&&(typeof i=="object"||!a.length)?(n=i,o=""):a.length?o+=".":n=r}while(a.length);return n}function ns(e){if(typeof e=="number")return!0;if(e){let t=parseInt(e);return!isNaN(t)}else return!1}var _t={},rs={root:"",lang:"en",fallbackLang:"en"};function Fn(e,t){let r=Object.assign({},rs,e);_t=t||_t;let[n,a]=Ke(r.lang),[o,i]=Ke(_t),[c,l]=Ke(!1),s=m=>{if(o.hasOwnProperty(m))return;l(!1);let p=_a(r.root||"",m);r.getUrl&&(p=r.getUrl(r.root||"",m),fetch(p).then(g=>g.json()).then(g=>{_t[m]=g,i({..._t}),l(!0)}).catch(g=>{i({..._t}),l(!0)}))};return wt(()=>{s(r.fallbackLang||"en"),s(n)},[n]),{lang:n,setLang:a,t:(m,p)=>{if(!o.hasOwnProperty(n))return m;let g=In(o,n,m);return g===m&&n!==r.fallbackLang&&(g=In(o,r.fallbackLang,m)),Sa(g,p)},isReady:c}}var as=0;function Y(e,t,r,n,a){var o,i,c={};for(i in t)i=="ref"?o=t[i]:c[i]=t[i];var l={type:e,props:c,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--as,__source:a,__self:n};if(typeof e=="function"&&(o=e.defaultProps))for(i in o)c[i]===void 0&&(c[i]=o[i]);return W.vnode&&W.vnode(l),l}var os=Zt(null),Bn={root:"assets",lang:"en",fallbackLang:"en"},Aa=e=>{let{t,setLang:r,lang:n,isReady:a}=Fn({root:e.root||Bn.root,lang:e.lang||Bn.lang,fallbackLang:e.fallbackLang||Bn.fallbackLang,getUrl:e.getUrl},e.translations);return Y(os.Provider,{value:{t,setLang:r,lang:n,isReady:a},children:e.children})};var $n;function Yn(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function Ra(e,t=","){return e.map(Yn).join(t)}var Da=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function rn(e){for(var t=9,r=e.length;r--;)t=Math.imul(t^e.charCodeAt(r),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function an(e,t="@media "){return t+Ue(e).map(r=>(typeof r=="string"&&(r={min:r}),r.raw||Object.keys(r).map(n=>`(${n}-width:${r[n]})`).join(" and "))).join(",")}function Ue(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function is(){}var ke={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function Ia(e){return e.match(/[-=:;]/g)?.length||0}function zn(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(Ia(e),15)<<18}var ss=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Xn({n:e,i:t,v:r=[]},n,a,o){e&&(e=Yn({n:e,i:t,v:r})),o=[...Ue(o)];for(let c of r){let l=n.theme("screens",c);for(let s of Ue(l&&an(l)||n.v(c))){var i;o.push(s),a|=l?67108864|zn(s):c=="dark"?1073741824:s[0]=="@"?zn(s):(i=s,1<<~(/:([a-z-]+)/.test(i)&&~ss.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:a,r:o,i:t}}var Jn=new Map;function ka(e){if(e.d){let t=[],r=Un(e.r.reduce((n,a)=>a[0]=="@"?(t.push(a),n):a?Un(n,o=>Un(a,i=>{let c=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(c){let l=o.indexOf(c[1]);return~l?o.slice(0,l)+c[0]+o.slice(l+c[1].length):jn(o,i)}return jn(i,o)})):n,"&"),n=>jn(n,e.n?"."+Da(e.n):""));return r&&t.push(r.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((n,a)=>a+"{"+n+"}",e.d)}}function Un(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(r,n,a)=>t(n)+a)}function jn(e,t){return e.replace(/&/g,t)}var Ea=new Intl.Collator("en",{numeric:!0});function ls(e,t){for(var r=0,n=e.length;r<n;){let a=n+r>>1;0>=Fa(e[a],t)?r=a+1:n=a}return n}function Fa(e,t){let r=e.p&ke.o;return r==(t.p&ke.o)&&(r==ke.b||r==ke.o)?0:e.p-t.p||e.o-t.o||Ea.compare(Ca(e.n),Ca(t.n))||Ea.compare(Pa(e.n),Pa(t.n))}function Ca(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function Pa(e){return(e||"").replace(/\W/g,t=>String.fromCharCode(127+t.charCodeAt(0)))+"\0"}function Hn(e,t){return Math.round(parseInt(e,16)*t)}function st(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:r="1",opacityVariable:n}=t,a=n?`var(${n})`:r;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",a);if(e[0]=="#"&&(e.length==4||e.length==7)){let o=(e.length-1)/3,i=[17,1,.062272][o-1];return`rgba(${[Hn(e.substr(1,o),i),Hn(e.substr(1+o,o),i),Hn(e.substr(1+2*o,o),i),a]})`}return a=="1"?e:a=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${a})`)}function Ba(e,t,r,n,a=[]){return function o(i,{n:c,p:l,r:s=[],i:u},m){let p=[],g="",h=0,A=0;for(let v in i||{}){var S,f;let k=i[v];if(v[0]=="@"){if(!k)continue;if(v[1]=="a"){p.push(...Ua(c,l,Zn(""+k),m,l,s,u,!0));continue}if(v[1]=="l"){for(let H of Ue(k))p.push(...o(H,{n:c,p:(S=ke[v[7]],l&~ke.o|S),r:v[7]=="d"?[]:s,i:u},m));continue}if(v[1]=="i"){p.push(...Ue(k).map(H=>({p:-1,o:0,r:[],d:v+" "+H})));continue}if(v[1]=="k"){p.push({p:ke.d,o:0,r:[v],d:o(k,{p:ke.d},m).map(ka).join("")});continue}if(v[1]=="f"){p.push(...Ue(k).map(H=>({p:ke.d,o:0,r:[v],d:o(H,{p:ke.d},m).map(ka).join("")})));continue}}if(typeof k!="object"||Array.isArray(k))v=="label"&&k?c=k+rn(JSON.stringify([l,u,i])):(k||k===0)&&(v=v.replace(/[A-Z]/g,H=>"-"+H.toLowerCase()),A+=1,h=Math.max(h,(f=v)[0]=="-"?0:Ia(f)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(f)?+!!RegExp.$1||-!!RegExp.$2:0)+1),g+=(g?";":"")+Ue(k).map(H=>m.s(v,$a(""+H,m.theme)+(u?" !important":""))).join(";"));else if(v[0]=="@"||v.includes("&")){let H=l;v[0]=="@"&&(v=v.replace(/\bscreen\(([^)]+)\)/g,(R,B)=>{let _=m.theme("screens",B);return _?(H|=67108864,an(_,"")):R}),H|=zn(v)),p.push(...o(k,{n:c,p:H,r:[...s,v],i:u},m))}else p.push(...o(k,{p:l,r:[...s,v]},m))}return p.unshift({n:c,p:l,o:Math.max(0,15-A)+1.5*Math.min(h||15,15),r:s,d:g}),p.sort(Fa)}(e,Xn(t,r,n,a),r)}function $a(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(r,n,a,o,i="")=>{let c=t(a,i);return typeof c=="function"&&/color|fill|stroke/i.test(a)?st(c):""+Ue(c).filter(l=>Object(l)!==l)})}function Qn(e,t){let r,n=[];for(let a of e)a.d&&a.n?r?.p==a.p&&""+r.r==""+a.r?(r.c=[r.c,a.c].filter(Boolean).join(" "),r.d=r.d+";"+a.d):n.push(r={...a,n:a.n&&t}):n.push({...a,n:a.n&&t});return n}function qn(e,t,r=ke.u,n,a){let o=[];for(let i of e)for(let c of function(l,s,u,m,p){l={...l,i:l.i||p};let g=function(h,A){let S=Jn.get(h.n);return S?S(h,A):A.r(h.n,h.v[0]=="dark")}(l,s);return g?typeof g=="string"?({r:m,p:u}=Xn(l,s,u,m),Qn(qn(Zn(g),s,u,m,l.i),l.n)):Array.isArray(g)?g.map(h=>{var A,S;return{o:0,...h,r:[...Ue(m),...Ue(h.r)],p:(A=u,S=h.p??u,A&~ke.o|S)}}):Ba(g,l,s,u,m):[{c:Yn(l),p:0,o:0,r:[]}]}(i,t,r,n,a))o.splice(ls(o,c),0,c);return o}function Ua(e,t,r,n,a,o,i,c){return Qn((c?r.flatMap(l=>qn([l],n,a,o,i)):qn(r,n,a,o,i)).map(l=>l.p&ke.o&&(l.n||t==ke.b)?{...l,p:l.p&~ke.o|t,o:0}:l),e)}function cs(e,t,r,n){var a;return a=(o,i)=>{let{n:c,p:l,r:s,i:u}=Xn(o,i,t);return r&&Ua(c,t,r,i,l,s,u,n)},Jn.set(e,a),e}function Wn(e,t,r){if(e[e.length-1]!="("){let n=[],a=!1,o=!1,i="";for(let c of e)if(!(c=="("||/[~@]$/.test(c))){if(c[0]=="!"&&(c=c.slice(1),a=!a),c.endsWith(":")){n[c=="dark:"?"unshift":"push"](c.slice(0,-1));continue}c[0]=="-"&&(c=c.slice(1),o=!o),c.endsWith("-")&&(c=c.slice(0,-1)),c&&c!="&"&&(i+=(i&&"-")+c)}i&&(o&&(i="-"+i),t[0].push({n:i,v:n.filter(us),i:a}))}}function us(e,t,r){return r.indexOf(e)==t}var La=new Map;function Zn(e){let t=La.get(e);if(!t){let r=[],n=[[]],a=0,o=0,i=null,c=0,l=(s,u=0)=>{a!=c&&(r.push(e.slice(a,c+u)),s&&Wn(r,n)),a=c+1};for(;c<e.length;c++){let s=e[c];if(o)e[c-1]!="\\"&&(o+=+(s=="[")||-(s=="]"));else if(s=="[")o+=1;else if(i)e[c-1]!="\\"&&i.test(e.slice(c))&&(i=null,a=c+RegExp.lastMatch.length);else if(s=="/"&&e[c-1]!="\\"&&(e[c+1]=="*"||e[c+1]=="/"))i=e[c+1]=="*"?/^\*\//:/^[\r\n]/;else if(s=="(")l(),r.push(s);else if(s==":")e[c+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(s)){l(!0);let u=r.lastIndexOf("(");if(s==")"){let m=r[u-1];if(/[~@]$/.test(m)){let p=n.shift();r.length=u,Wn([...r,"#"],n);let{v:g}=n[0].pop();for(let h of p)h.v.splice(+(h.v[0]=="dark")-+(g[0]=="dark"),g.length);Wn([...r,cs(m.length>1?m.slice(0,-1)+rn(JSON.stringify([m,p])):m+"("+Ra(p)+")",ke.a,p,/@$/.test(m))],n)}u=r.lastIndexOf("(",u-1)}r.length=u+1}else/[~@]/.test(s)&&e[c+1]=="("&&n.unshift([])}l(!0),La.set(e,t=n[0])}return t}function ja(e,t,r){return t.reduce((n,a,o)=>n+r(a)+e[o+1],e[0])}function Ha(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?ja(e,t,r=>Kn(r).trim()):t.filter(Boolean).reduce((r,n)=>r+Kn(n),e?Kn(e):"")}function Kn(e){let t,r="";if(e&&typeof e=="object")if(Array.isArray(e))(t=Ha(e[0],e.slice(1)))&&(r+=" "+t);else for(let n in e)e[n]&&(r+=" "+n);else e!=null&&typeof e!="boolean"&&(r+=" "+e);return r}var kd=Wa("@"),Ed=Wa("~");function Wa(e){return new Proxy(function(r,...n){return t("",r,n)},{get(r,n){return n in r?r[n]:function(a,...o){return t(n,a,o)}}});function t(r,n,a){return Ra(Zn(r+e+"("+Ha(n,a)+")"))}}function Gn(e,t){return Array.isArray(e)?Na(ja(e,t,r=>r!=null&&typeof r!="boolean"?r:"")):typeof e=="string"?Na(e):[e]}var ds=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Na(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let r=[{}],n=[r[0]],a=[];for(;t=ds.exec(e);)t[4]&&(r.shift(),a.shift()),t[3]?(a.unshift(t[3]),r.unshift({}),n.push(a.reduce((o,i)=>({[i]:o}),r[0]))):t[4]||(r[0][t[1]]&&(r.unshift({}),n.push(a.reduce((o,i)=>({[i]:o}),r[0]))),r[0][t[1]]=t[2]);return n}function Ka(e,...t){var r;let n=Gn(e,t),a=(n.find(o=>o.label)?.label||"css")+rn(JSON.stringify(n));return r=(o,i)=>Qn(n.flatMap(c=>Ba(c,o,i,ke.o)),a),Jn.set(a,r),a}var Cd=new Proxy(function(e,t){return Ma("animation",e,t)},{get(e,t){return t in e?e[t]:function(r,n){return Ma(t,r,n)}}});function Ma(e,t,r){return{toString(){return Ka({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+r}})}}}function T(e,t,r){return[e,ps(t,r)]}function ps(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(r,n)=>({[e]:t?t(r,n):Vn(r,1)}):r=>e||{[r[1]]:Vn(r,2)}}function Vn(e,t,r=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${r} * -1)`:r}function w(e,t,r,n){return[e,gs(t,r,n)]}function gs(e,t,r){let n=typeof t=="string"?(a,o)=>({[t]:r?r(a,o):a._}):t||(({1:a,_:o},i,c)=>({[a||c]:o}));return(a,o)=>{let i=za(e||a[1]),c=o.theme(i,a.$$)??St(a.$$,i,o);if(c!=null)return a._=Vn(a,0,c),n(a,o,i)}}function _e(e,t={},r){return[e,ms(t,r)]}function ms(e={},t){return(r,n)=>{let{section:a=za(r[0]).replace("-","")+"Color"}=e,[o,i]=fs(r.$$);if(!o)return;let c=n.theme(a,o)||St(o,a,n);if(!c||typeof c=="object")return;let{opacityVariable:l=`--tw-${r[0].replace(/-$/,"")}-opacity`,opacitySection:s=a.replace("Color","Opacity"),property:u=a,selector:m}=e,p=n.theme(s,i||"DEFAULT")||i&&St(i,s,n),g=t||(({_:A})=>{let S=Ot(u,A);return m?{[m]:S}:S});r._={value:st(c,{opacityVariable:l||void 0,opacityValue:p||void 0}),color:A=>st(c,A),opacityVariable:l||void 0,opacityValue:p||void 0};let h=g(r,n);if(!r.dark){let A=n.d(a,o,c);A&&A!==c&&(r._={value:st(A,{opacityVariable:l||void 0,opacityValue:p||"1"}),color:S=>st(A,S),opacityVariable:l||void 0,opacityValue:p||void 0},h={"&":h,[n.v("dark")]:g(r,n)})}return h}}function fs(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function Ot(e,t){let r={};return typeof t=="string"?r[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(r[t.opacityVariable]=t.opacityValue||"1"),r[e]=t.value),r}function St(e,t,r){if(e[0]=="["&&e.slice(-1)=="]"){if(e=nn($a(e.slice(1,-1),r.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(t)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(t)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function za(e){return e.replace(/-./g,t=>t[1].toUpperCase())}function nn(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(t,r="",n,a="")=>nn(r)+n+nn(a)):e.replace(/(^|[^\\])_+/g,(t,r)=>r+" ".repeat(t.length-r.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,t=>t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var Pd=Symbol();var qa=new Proxy(is,{apply(e,t,r){return $n(r[0])},get(e,t){let r=$n[t];return typeof r=="function"?function(){return r.apply($n,arguments)}:r}});var Ld=function e(t){return new Proxy(function(r,...n){return Oa(t,"",r,n)},{get(r,n){return n==="bind"?e:n in r?r[n]:function(a,...o){return Oa(t,n,a,o)}}})}();function Oa(e,t,r,n){return{toString(){let a=Gn(r,n),o=Da(t+rn(JSON.stringify([t,a])));return(typeof e=="function"?e:qa)(Ka({[`@keyframes ${o}`]:Gn(r,n)})),o}}}var Ga={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...je(4,"rem",4,.5,.5),...je(12,"rem",4,5),14:"3.5rem",...je(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:Q("blur"),backdropBrightness:Q("brightness"),backdropContrast:Q("contrast"),backdropGrayscale:Q("grayscale"),backdropHueRotate:Q("hueRotate"),backdropInvert:Q("invert"),backdropOpacity:Q("opacity"),backdropSaturate:Q("saturate"),backdropSepia:Q("sepia"),backgroundColor:Q("colors"),backgroundImage:{none:"none"},backgroundOpacity:Q("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...je(200,"",100,0,50),...je(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:Q("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:Q("spacing"),borderWidth:{DEFAULT:"1px",...ze(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:Q("colors"),caretColor:Q("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...je(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:Q("borderColor"),divideOpacity:Q("borderOpacity"),divideWidth:Q("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:({theme:e})=>({...e("colors"),none:"none"}),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...Rt(2,6),...Rt(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:Q("spacing"),gradientColorStops:Q("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...Rt(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...Rt(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...je(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...je(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:Q("spacing"),placeholderColor:Q("colors"),placeholderOpacity:Q("opacity"),outlineColor:Q("colors"),outlineOffset:ze(8,"px"),outlineWidth:ze(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:"#3b82f6"}),ringOffsetColor:Q("colors"),ringOffsetWidth:ze(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...ze(8,"px")},rotate:{...ze(2,"deg"),...ze(12,"deg",3),...ze(180,"deg",45)},saturate:je(200,"",100,0,50),scale:{...je(150,"",100,0,50),...je(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:Q("spacing"),scrollPadding:Q("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...ze(2,"deg"),...ze(12,"deg",3)},space:Q("spacing"),stroke:({theme:e})=>({...e("colors"),none:"none"}),strokeWidth:je(2),textColor:Q("colors"),textDecorationColor:Q("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...ze(8,"px")},textUnderlineOffset:{auto:"auto",...ze(8,"px")},textIndent:Q("spacing"),textOpacity:Q("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:Q("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...Rt(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...je(50,"",1,0,10),auto:"auto"}};function Rt(e,t){let r={};do for(var n=1;n<e;n++)r[`${n}/${e}`]=Number((n/e*100).toFixed(6))+"%";while(++e<=t);return r}function ze(e,t,r=0){let n={};for(;r<=e;r=2*r||1)n[r]=r+t;return n}function je(e,t="",r=1,n=0,a=1,o={}){for(;n<=e;n+=a)o[n]=n/r+t;return o}function Q(e){return({theme:t})=>t(e)}var Vd={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${Ga.fontFamily.sans})`,fontFeatureSettings:"theme(fontFamily.sans[1].fontFeatureSettings, normal)"},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${Ga.fontFamily.mono})`,fontFeatureSettings:"theme(fontFamily.mono[1].fontFeatureSettings, normal)",fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},Xd=[T("\\[([-\\w]+):(.+)]",({1:e,2:t},r)=>({"@layer overrides":{"&":{[e]:St(`[${t}]`,"",r)}}})),T("(group|peer)([~/][^-[]+)?",({input:e},{h:t})=>[{c:t(e)}]),w("aspect-","aspectRatio"),T("container",(e,{theme:t})=>{let{screens:r=t("screens"),center:n,padding:a}=t("container"),o={width:"100%",marginRight:n&&"auto",marginLeft:n&&"auto",...i("xs")};for(let c in r){let l=r[c];typeof l=="string"&&(o[an(l)]={"&":{maxWidth:l,...i(c)}})}return o;function i(c){let l=a&&(typeof a=="string"?a:a[c]||a.DEFAULT);if(l)return{paddingRight:l,paddingLeft:l}}}),w("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),T("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),T("box-(border|content)","boxSizing",({1:e})=>e+"-box"),T("hidden",{display:"none"}),T("table-(auto|fixed)","tableLayout"),T(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",T("isolate","isolation"),T("object-(contain|cover|fill|none|scale-down)","objectFit"),w("object-","objectPosition"),T("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",on),T("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:t})=>({["overscroll-behavior"+e]:t})),T("(static|fixed|absolute|relative|sticky)","position"),w("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:t})=>({top:e!="-x"&&t,right:e!="-y"&&t,bottom:e!="-x"&&t,left:e!="-y"&&t})),w("-?(top|bottom|left|right)(?:$|-)","inset"),T("(visible|collapse)","visibility"),T("invisible",{visibility:"hidden"}),w("-?z-","zIndex"),T("flex-((row|col)(-reverse)?)","flexDirection",Va),T("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),w("(flex-(?:grow|shrink))(?:$|-)"),w("(flex)-"),w("grow(?:$|-)","flexGrow"),w("shrink(?:$|-)","flexShrink"),w("basis-","flexBasis"),w("-?(order)-"),"-?(order)-(\\d+)",w("grid-cols-","gridTemplateColumns"),T("grid-cols-(\\d+)","gridTemplateColumns",Qa),w("col-","gridColumn"),T("col-(span)-(\\d+)","gridColumn",Ja),w("col-start-","gridColumnStart"),T("col-start-(auto|\\d+)","gridColumnStart"),w("col-end-","gridColumnEnd"),T("col-end-(auto|\\d+)","gridColumnEnd"),w("grid-rows-","gridTemplateRows"),T("grid-rows-(\\d+)","gridTemplateRows",Qa),w("row-","gridRow"),T("row-(span)-(\\d+)","gridRow",Ja),w("row-start-","gridRowStart"),T("row-start-(auto|\\d+)","gridRowStart"),w("row-end-","gridRowEnd"),T("row-end-(auto|\\d+)","gridRowEnd"),T("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>on(Va(e))),T("grid-flow-(dense)","gridAutoFlow"),w("auto-cols-","gridAutoColumns"),w("auto-rows-","gridAutoRows"),w("gap-x(?:$|-)","gap","columnGap"),w("gap-y(?:$|-)","gap","rowGap"),w("gap(?:$|-)","gap"),"(justify-(?:items|self))-",T("justify-","justifyContent",Ya),T("(content|items|self)-",e=>({["align-"+e[1]]:Ya(e)})),T("(place-(content|items|self))-",({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t})),w("p([xytrbl])?(?:$|-)","padding",At("padding")),w("-?m([xytrbl])?(?:$|-)","margin",At("margin")),w("-?space-(x|y)(?:$|-)","space",({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}})),T("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),w("w-","width"),w("min-w-","minWidth"),w("max-w-","maxWidth"),w("h-","height"),w("min-h-","minHeight"),w("max-h-","maxHeight"),w("font-","fontWeight"),w("font-","fontFamily",({_:e})=>typeof(e=Ue(e))[1]=="string"?{fontFamily:Ye(e)}:{fontFamily:Ye(e[0]),...e[1]}),T("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),T("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),T("italic","fontStyle"),T("not-italic",{fontStyle:"normal"}),T("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:t="",3:r})=>t=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(r?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)",...lt({"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"})}),w("tracking-","letterSpacing"),w("leading-","lineHeight"),T("list-(inside|outside)","listStylePosition"),w("list-","listStyleType"),T("list-","listStyleType"),w("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),_e("placeholder-",{property:"color",selector:"&::placeholder"}),T("text-(left|center|right|justify|start|end)","textAlign"),T("text-(ellipsis|clip)","textOverflow"),w("text-opacity-","textOpacity","--tw-text-opacity"),_e("text-",{property:"color"}),w("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),w("indent-","textIndent"),T("(overline|underline|line-through)","textDecorationLine"),T("no-underline",{textDecorationLine:"none"}),w("underline-offset-","textUnderlineOffset"),_e("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),w("decoration-","textDecorationThickness"),T("decoration-","textDecorationStyle"),T("(uppercase|lowercase|capitalize)","textTransform"),T("normal-case",{textTransform:"none"}),T("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),T("align-","verticalAlign"),T("whitespace-","whiteSpace"),T("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),T("break-words",{overflowWrap:"break-word"}),T("break-all",{wordBreak:"break-all"}),T("break-keep",{wordBreak:"keep-all"}),_e("caret-",{opacityVariable:!1,opacitySection:"opacity"}),_e("accent-",{opacityVariable:!1,opacitySection:"opacity"}),T("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${mt(e," ")},var(--tw-gradient-stops))`),_e("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),_e("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),_e("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),T("bg-(fixed|local|scroll)","backgroundAttachment"),T("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),T(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),T("bg-blend-","backgroundBlendMode"),T("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),w("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),_e("bg-",{section:"backgroundColor"}),w("bg-","backgroundImage"),w("bg-","backgroundPosition"),T("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",on),w("bg-","backgroundSize"),w("rounded(?:$|-)","borderRadius"),w("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:t})=>{let r={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${mt(r[0])}-radius`]:t,[`border-${mt(r[1])}-radius`]:t}}),T("border-(collapse|separate)","borderCollapse"),w("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),T("border-(solid|dashed|dotted|double|none)","borderStyle"),w("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:t})=>({...lt({"--tw-border-spacing-x":"0","--tw-border-spacing-y":"0"}),["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),_e("border-([xytrbl])-",{section:"borderColor"},At("border","Color")),_e("border-"),w("border-([xytrbl])(?:$|-)","borderWidth",At("border","Width")),w("border(?:$|-)","borderWidth"),w("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),T("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),T("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),w("divide-([xy])(?:$|-)","divideWidth",({1:e,_:t})=>{let r={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${mt(r[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${mt(r[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}}),_e("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),w("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),_e("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),w("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),T("ring-inset",{"--tw-ring-inset":"inset"}),_e("ring-",{property:"--tw-ring-color"}),w("ring(?:$|-)","ringWidth",({_:e},{theme:t})=>({...lt({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":st(t("ringOffsetColor","","#fff")),"--tw-ring-color":st(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}),"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),_e("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),w("shadow(?:$|-)","boxShadow",({_:e})=>({...lt({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}),"--tw-shadow":Ye(e),"--tw-shadow-colored":Ye(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),w("(opacity)-"),T("mix-blend-","mixBlendMode"),...Xa(),...Xa("backdrop-"),w("transition(?:$|-)","transitionProperty",(e,{theme:t})=>({transitionProperty:Ye(e),transitionTimingFunction:e._=="none"?void 0:Ye(t("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:Ye(t("transitionDuration",""))})),w("duration(?:$|-)","transitionDuration","transitionDuration",Ye),w("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",Ye),w("delay(?:$|-)","transitionDelay","transitionDelay",Ye),w("animate(?:$|-)","animation",(e,{theme:t,h:r,e:n})=>{let a=Ye(e),o=a.split(" "),i=t("keyframes",o[0]);return i?{["@keyframes "+(o[0]=n(r(o[0])))]:i,animation:o.join(" ")}:{animation:a}}),"(transform)-(none)",T("transform",tr),T("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":Za(e=="gpu")})),w("scale(-[xy])?-","scale",({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...tr()})),w("-?(rotate)-","rotate",er),w("-?(translate-[xy])-","translate",er),w("-?(skew-[xy])-","skew",er),T("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",on),"(appearance)-",w("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",w("(cursor)-"),"(cursor)-",T("snap-(none)","scroll-snap-type"),T("snap-(x|y|both)",({1:e})=>({...lt({"--tw-scroll-snap-strictness":"proximity"}),"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)"})),T("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),T("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),T("snap-(normal|always)","scroll-snap-stop"),T("scroll-(auto|smooth)","scroll-behavior"),w("scroll-p([xytrbl])?(?:$|-)","padding",At("scroll-padding")),w("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",At("scroll-margin")),T("touch-(auto|none|manipulation)","touch-action"),T("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:t,3:r})=>({...lt({"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}),[`--tw-${t?"pan-x":r?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)"})),T("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),T("outline",{outlineStyle:"solid"}),T("outline-(dashed|dotted|double)","outlineStyle"),w("-?(outline-offset)-"),_e("outline-",{opacityVariable:!1,opacitySection:"opacity"}),w("outline-","outlineWidth"),"(pointer-events)-",w("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],T("select-(none|text|all|auto)","userSelect"),_e("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),_e("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),w("stroke-","strokeWidth"),T("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),T("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function on(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function Va(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function mt(e,t="-"){let r=[];for(let n of e)r.push({t:"top",r:"right",b:"bottom",l:"left"}[n]);return r.join(t)}function Ye(e){return e&&""+(e._||e)}function Ya({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function At(e,t=""){return({1:r,_:n})=>{let a={x:"lr",y:"tb"}[r]||r+r;return a?{...Ot(e+"-"+mt(a[0])+t,n),...Ot(e+"-"+mt(a[1])+t,n)}:Ot(e+t,n)}}function Xa(e=""){let t=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),r={};for(let n of t)r[`--tw-${e}${n}`]="var(--tw-empty,/*!*/ /*!*/)";return r={...lt(r),[`${e}filter`]:t.map(n=>`var(--tw-${e}${n})`).join(" ")},[`(${e}filter)-(none)`,T(`${e}filter`,r),...t.map(n=>w(`${n[0]=="h"?"-?":""}(${e}${n})(?:$|-)`,n,({1:a,_:o})=>({[`--tw-${a}`]:Ue(o).map(i=>`${n}(${i})`).join(" "),...r})))]}function er({1:e,_:t}){return{["--tw-"+e]:t,...tr()}}function tr(){return{...lt({"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":Za()}),transform:"var(--tw-transform)"}}function Za(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function Ja({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function Qa({1:e}){return`repeat(${e},minmax(0,1fr))`}function lt(e){return{"@layer defaults":{"*,::before,::after":e,"::backdrop":e}}}var sn=globalThis||(typeof window<"u"?window:self),ys=Object.create,rr=Object.defineProperty,Ts=Object.getOwnPropertyDescriptor,vs=Object.getOwnPropertyNames,xs=Object.getPrototypeOf,ws=Object.prototype.hasOwnProperty,_s=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Ss=(e,t)=>{for(var r in t)rr(e,r,{get:t[r],enumerable:!0})},nr=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of vs(t))!ws.call(e,a)&&a!==r&&rr(e,a,{get:()=>t[a],enumerable:!(n=Ts(t,a))||n.enumerable});return e},As=(e,t,r)=>(nr(e,t,"default"),r&&nr(r,t,"default")),to=(e,t,r)=>(r=e!=null?ys(xs(e)):{},nr(t||!e||!e.__esModule?rr(r,"default",{value:e,enumerable:!0}):r,e)),no=_s((e,t)=>{(function(r,n){typeof define=="function"&&define.amd?define([],n):typeof e<"u"?n():(n(),r.FileSaver={})})(e,function(){"use strict";function r(s,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(s.type)?new Blob(["\uFEFF",s],{type:s.type}):s}function n(s,u,m){var p=new XMLHttpRequest;p.open("GET",s),p.responseType="blob",p.onload=function(){l(p.response,u,m)},p.onerror=function(){},p.send()}function a(s){var u=new XMLHttpRequest;u.open("HEAD",s,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function o(s){try{s.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),s.dispatchEvent(u)}}var i=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof sn=="object"&&sn.global===sn?sn:void 0,c=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=i.saveAs||(typeof window!="object"||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(s,u,m){var p=i.URL||i.webkitURL,g=document.createElement("a");u=u||s.name||"download",g.download=u,g.rel="noopener",typeof s=="string"?(g.href=s,g.origin===location.origin?o(g):a(g.href)?n(s,u,m):o(g,g.target="_blank")):(g.href=p.createObjectURL(s),setTimeout(function(){p.revokeObjectURL(g.href)},4e4),setTimeout(function(){o(g)},0))}:"msSaveOrOpenBlob"in navigator?function(s,u,m){if(u=u||s.name||"download",typeof s!="string")navigator.msSaveOrOpenBlob(r(s,m),u);else if(a(s))n(s,u,m);else{var p=document.createElement("a");p.href=s,p.target="_blank",setTimeout(function(){o(p)})}}:function(s,u,m,p){if(p=p||open("","_blank"),p&&(p.document.title=p.document.body.innerText="downloading..."),typeof s=="string")return n(s,u,m);var g=s.type==="application/octet-stream",h=/constructor/i.test(i.HTMLElement)||i.safari,A=/CriOS\/[\d]+/.test(navigator.userAgent);if((A||g&&h||c)&&typeof FileReader<"u"){var S=new FileReader;S.onloadend=function(){var k=S.result;k=A?k:k.replace(/^data:[^;]*;/,"data:attachment/file;"),p?p.location.href=k:location=k,p=null},S.readAsDataURL(s)}else{var f=i.URL||i.webkitURL,v=f.createObjectURL(s);p?p.location=v:location.href=v,p=null,setTimeout(function(){f.revokeObjectURL(v)},4e4)}});i.saveAs=l.saveAs=l,typeof t<"u"&&(t.exports=l)})}),ro={};Ss(ro,{default:()=>Dt});var ks=to(no());As(ro,to(no()));var{default:eo,...Es}=ks,Dt=eo!==void 0?eo:Es;function ar(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():C}var ao=ar();function ft(){return ao.PROD==="1"}function ht(){return ao.PROD_API==="1"}var wp=ar().PROD==="1",_p=ar().PROD!=="1";var oo={nologin:"\u672A\u767B\u5F55",loginForSafari:"\u767B\u5F55\u6216\u6CE8\u518C",login:"\u767B\u5F55\u540E\u53EF\u5F00\u901A\u4F1A\u5458",manageAccount:"\u7BA1\u7406\u8D26\u6237",openPremium:"\u5F00\u901A\u4F1A\u5458",logout:"\u9000\u51FA",curentPlan:"\u5F53\u524D\u5957\u9910",endAt:"\u5230\u671F",endAuto:"\u81EA\u52A8\u7EED\u671F",lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","noSupportTranslate-pdf":"\u811A\u672C\u4E0D\u652F\u6301\u8BF7\u4F7F\u7528\u63D2\u4EF6","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u5BFC\u5165PDF",enableLineBreak:"\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E\u683C\u5F0F\u4E3A (\u6CA1\u6709\u505A\u81EA\u52A8\u8BC6\u522B\uFF0C\u8BF7\u76F4\u63A5\u8F93\u5165)\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.shortBrandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1: \u53CC\u8BED\u5BF9\u7167\u7F51\u9875\u7FFB\u8BD1 & PDF\u6587\u6863\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u540C\u65F6\u652F\u6301 PDF \u7FFB\u8BD1\uFF0C\u53CC\u8BED Epub \u7535\u5B50\u4E66\u5236\u4F5C\uFF0C\u652F\u6301 Deepl/Google/\u6709\u9053/\u817E\u8BAF\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u514D\u8D39\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8BD1\u5E76\u9690\u85CF\u539F\u6587/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.toggleTranslationMask":"\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6","browser.openEbookViewer":"\u9605\u8BFB\u672C\u5730\u7535\u5B50\u4E66","browser.openEbookBuilder":"\u5236\u4F5C\u53CC\u8BED EPUB \u7535\u5B50\u4E66","browser.translateLocalHtmlFile":"\u7FFB\u8BD1 HTML/txt \u6587\u4EF6","browser.donateContext":"\u4E86\u89E3\u8D5E\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8BD1\u672C\u5730\u5B57\u5E55\u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",isShowContextMenu:"\u5C06\u7FFB\u8BD1\u7F51\u9875\u52A0\u5165\u53F3\u952E\u83DC\u5355\u9879",toggleBeta:"\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",betaDescription:"\u542F\u7528\u4ECD\u5728\u5B9E\u9A8C\u6027\u7684\u529F\u80FD\uFF0C\u4EE5\u53CA\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u603B\u662F\u6362\u884C\u9002\u7528\u4E8E\u8F83\u5C11\u5185\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F50\u3002\uFF08\u5728\u5185\u5BB9\u8F83\u591A\u7684\u957F\u6BB5\u843D(\u8D85\u8FC7{count}\u4E2A\u5B57\u7B26) \u4F7F\u7528\u667A\u80FD\u6362\u884C\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1\uFF0C\u53EF\u8BBE\u7F6E\u4E34\u65F6\u65F6\u957F",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5219\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875(\u4EC5\u8BD1\u6587)/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",mouseHoldKey:"+ {key} \u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E(\u6253\u5F00\u8BBE\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8BD1\u8BE5\u6BB5",mouseHoverHoldKey:"\u9F20\u6807\u60AC\u505C\u540C\u65F6\u6309\u4E0B\u5FEB\u6377\u952E\u7FFB\u8BD1\u6BB5\u843D","mouse-translate":"\u9F20\u6807\u60AC\u505C",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",resetThisSuccess:"\u91CD\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\u3002\u4EC5\u5BF9\u4E8E\u66F4\u4E13\u4E1A\u7684\u7528\u6237\uFF0C\u63D0\u4F9B\u66F4\u4E2A\u6027\u5316\u7684\u8BBE\u7F6E\u9879\u3002",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u4EF7\u683C","translate to the bottom of the page":"\u8FDB\u5165\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u8FDB\u5165\u7F51\u9875\u5C06\u7ACB\u5373\u7FFB\u8BD1\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\u3002\u5173\u95ED\u5219\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u6240\u6709\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\u3002\u5173\u95ED\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\uFF0C\u4EC5\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8BD1\u9875\u9762\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\uFF0C\u800C\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",moreOptions:"\u5C55\u5F00\u66F4\u591A\u81EA\u5B9A\u4E49\u9009\u9879",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",changeToOnlyTranslationMode:"\u5207\u6362\u4E3A\u4EC5\u663E\u793A\u8BD1\u6587",changeToDualTranslationMode:"\u5207\u6362\u4E3A\u53CC\u8BED\u7FFB\u8BD1",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",badUserscriptBrowser:"\u5F53\u524D\u6D4F\u89C8\u5668\u6CA1\u6709\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u6269\u5C55\u7684\u63A5\u53E3\uFF08\u6BD4\u5982\u83B7\u53D6\u6CB9\u7334\u811A\u672C\u81EA\u8EAB\u7684\u7248\u672C\u53F7\u4FE1\u606F\uFF09\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334\u6269\u5C55</1>\u7684\u6D4F\u89C8\u5668\u5982 Firefox",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",needActionForOptions:"(\u9700\u8BBE\u7F6E)",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u5F53\u524D\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1 {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1 {language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",alwaysTranslateSomeSiteOrWildSite:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u7AD9",alwaysTranslateSomePage:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u9875",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA",import_export_title:"\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65",previewAllThemes:"\u9884\u89C8\u5168\u90E8\u6837\u5F0F","translationTheme.none":"\u65E0","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.solidBorder":"\u5B9E\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B66\u4E60\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.marker2":"\u9A6C\u514B\u7B142","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7EBF","translationServices.custom":"\u81EA\u5B9A\u4E49API","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.tenAlpha":"\u817E\u8BAF\u7FFB\u8BD1\u541B(Alpha)","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"Azure \u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.cai":"\u5F69\u4E91\u5C0F\u8BD1 (Alpha)","translationServices.volcAlpha":"\u706B\u5C71 (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.you":"\u6709\u9053\u7FFB\u8BD1 (Alpha)","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.niu":"\u5C0F\u725B\u7FFB\u8BD1","translationServices.papago":"Papago \u7FFB\u8BD1","translationServices.d":"D (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u5C06\u8DF3\u8FC7\u7FFB\u8BD1",enableUserscriptPagePopup:"\u5728\u9875\u9762\u4E0A\u663E\u793A\u60AC\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u603B\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8BD1\u6587\u6837\u5F0F",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B",syncToCloud:"\u540C\u6B65\u5230 Google Drive",syncToCloudDescription:"\u4E0A\u4F20\u5230\u4E91\u7AEF\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",syncToAccount:"\u540C\u6B65\u5230\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u4E91\u7AEF",syncToAccountButton:"\u7ACB\u5373\u4E0E\u4E91\u7AEF\u540C\u6B65",syncToAccountDescription:"\u5728\u4E0D\u540C\u7684\u8BBE\u5907\u4E4B\u95F4\u81EA\u52A8\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",successSyncConfigInAccount:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",successSyncConfigToAccount:"\u6210\u529F\u540C\u6B65\u5230\u4E91\u7AEF",syncConfigNoUpdate:"\u5DF2\u7ECF\u662F\u6700\u65B0\u7684\u4E86",authFail:"\u6388\u6743\u5931\u8D25",syncTitle:"\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",import_hint:"\u5BFC\u5165",upload:"\u4E0A\u4F20",revokeAuth:"\u64A4\u9500\u6388\u6743",uploadFail:"\u4E0A\u4F20\u5931\u8D25",download:"\u4E0B\u8F7D",importSuccess:"\u5BFC\u5165\u6210\u529F",importFail:"\u5BFC\u5165\u5931\u8D25",deleteFail:"\u5220\u9664\u5931\u8D25",backupToCloud:"\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5907\u4EFD\u8282\u70B9",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",backupToCloudDescription:"\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",successSyncConfig:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u8D25",updatedAt:"\u66F4\u65B0\u4E8E {date}",lastSyncedAt:"\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",downloadFail:"\u4E0B\u8F7D\u5931\u8D25",clickToDownload:"\u70B9\u51FB\u4E0B\u8F7D",aboutLabel:"\u5173\u4E8E - \u53CD\u9988","browser.openAboutPage":"\u5173\u4E8E/\u53CD\u9988",aboutLabelWithoutSponsor:"\u5173\u4E8E - \u53CD\u9988",aboutIntro:"\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F \u4F60\u53EF\u9009\u62E9\u5F00\u901A <6>Pro\u4F1A\u5458</6> \u6765\u4F7F\u7528\u5F00\u7BB1\u5373\u7528\u7684 DeepL \u548C OpenAI \u7FFB\u8BD1\u3002 <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002<br/> <7>Pro \u4F1A\u5458</7> \u53EF\u4EE5\u901A\u8FC7\u5FEB\u901F\u5BA2\u670D\u90AE\u7BB1 <8>support@immersivetranslate.com</8> \u548C\u6211\u4EEC\u53D6\u5F97\u8054\u7CFB\u3002",aboutIntroWithoutSponsor:"\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F  <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002",projectHomepage:"\u9879\u76EE\u4E3B\u9875",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u4F17\u53F7",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u9891\u9053",joinTelegramChannel:"\u5173\u6CE8 Telegram \u9891\u9053\u83B7\u53D6\u6700\u65B0\u66F4\u65B0",feedbackAndJoin:"\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",autoSync:"\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",loadingThemeTitle:"Loading \u6837\u5F0F",loadingThemeDescription:"\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F","loadingTheme.spinner":"\u8F6C\u5708\u52A8\u753B","loadingTheme.text":"\u9759\u6001\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u663E\u793A",developerDescription:"\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863","edit border color":"\u4FEE\u6539\u8FB9\u6846\u989C\u8272",successSyncButNoChange:"\u5F53\u524D\u914D\u7F6E\u4E0E\u4E91\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u8FB9\u6846\u989C\u8272","customThemeLabel.borderRadius":"\u8FB9\u6846\u5706\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u989C\u8272","customThemeLabel.backgroundColor":"\u80CC\u666F\u989C\u8272","customThemeLabel.zoom":"\u5B57\u4F53\u7F29\u653E\u6BD4\u4F8B (%)","customThemeLabel.opacity":"\u6587\u5B57\u4E0D\u900F\u660E\u5EA6 (%)",resetToDefaultColor:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u989C\u8272",resetToDefaultSettings:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u8BBE\u7F6E",isTranslateTitle:"\u5F00\u542F\u7FFB\u8BD1\u7F51\u9875\u6807\u9898",enableSubtitle:"\u5F00\u542F\u5B57\u5E55\u7FFB\u8BD1",enableSubtitleDescription:"\u9488\u5BF9 youtube \u7B49\u7F51\u7AD9\u7684\u5B57\u5E55\u533A\u57DF\u5F00\u542F\u7FFB\u8BD1",isTranslateTitleDescription:"\u5F00\u542F\u540E\uFF0C\u7F51\u9875\u6807\u9898\u4F1A\u88AB\u7FFB\u8BD1",enableSearchEnhancement:"\u542F\u7528\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A",enableSearchEnhancementDescription:"\u5F00\u542F\u540E\uFF0C\u5728\u652F\u6301\u7684\u7F51\u7AD9\uFF08\u8C37\u6B4C\u65B0\u95FB\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u5173\u952E\u8BCD\uFF09\uFF0C\u96EA\u7403\uFF0C\u4E1C\u65B9\u8D22\u5BCC\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\u793E\u533A\uFF09\u53F3\u8FB9\u680F\u81EA\u52A8\u663E\u793A\u5BF9\u5E94\u82F1\u6587\u5173\u952E\u8BCD\u7684\u201C\u8C37\u6B4C\u65B0\u95FB\u201D\u641C\u7D22\u7ED3\u679C\u3002",verifyService:"\u70B9\u6B64\u6D4B\u8BD5\u670D\u52A1",verified:"\u9A8C\u8BC1\u6210\u529F","field.langs":"\u652F\u6301\u7684\u8BED\u8A00\u4EE3\u7801","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8BD1\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6570","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6570","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6587\u672C\u957F\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6BB5\u843D\u6570","field.apiUrl":"\u81EA\u5B9A\u4E49 API \u63A5\u53E3\u5730\u5740","field.placeholderDelimiters":"\u4FDD\u7559\u7684\u5360\u4F4D\u7B26","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>\u81EA\u5B9A\u4E49\u63A5\u53E3\u63A5\u5165</a> \u9700\u8981\u53C2\u8003\u6587\u6863","description.limitPerMinute":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u5206\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.generalLimitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002","description.prompt":"\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI","description.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u5B57\u7B26\u6570\uFF0C\u592A\u5927\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C1D\u8BD5\u8C03\u6574\u8BE5\u9009\u9879\u6765\u4F18\u5316\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7EDF\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00","field.domain":"\u9886\u57DF","description.domain":"\u9ED8\u8BA4\u4E3A\uFF1Ageneral\u3002\u4EC5\u5728\u6709\u9053API\u63A7\u5236\u53F0\u5F00\u901A\u9886\u57DF\u5316\u7FFB\u8BD1\u7684\u60C5\u51B5\u4E0B\u53EF\u8BBE\u7F6E\uFF0C\u652F\u6301\u9886\u57DF\u89C1<1>\u8FD9\u91CC</1>","field.scene":"\u573A\u666F","description.scene":"\u9ED8\u8BA4\u4E3A\uFF1Ageneral\u3002\u4EC5\u5728\u963F\u91CC\u4E91API\u63A7\u5236\u53F0\u5F00\u901A\u673A\u5668\u7FFB\u8BD1\u4E13\u4E1A\u7248\u7684\u60C5\u51B5\u4E0B\u53EF\u8BBE\u7F6E\uFF0C\u652F\u6301\u573A\u666F\u89C1<1>\u8FD9\u91CC</1>","field.vocabId":"\u7528\u6237\u8BCD\u5178 ID","description.vocabId":"\u6307\u5B9A\u7684\u8BCD\u5178 out_id\uFF0C\u76EE\u524D\u652F\u6301\u82F1\u8BD1\u4E2D","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u4E3A gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u53D1\u9001\u7ED9\u7FFB\u8BD1\u670D\u52A1\u7684\u6BB5\u843D\u6570\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6570\u91CF\u8FC7\u591A\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162","description.apiUrl":"\u8BF7\u6DFB\u52A0\u5177\u4F53\u5E26\u6709\u8DEF\u5F84\u7684\u7F51\u5740",enabledExtension:"\u542F\u7528\u6269\u5C55",clickToDisableExtension:"\u70B9\u51FB\u7981\u7528\u6269\u5C55",clickToEnableExtension:"\u70B9\u51FB\u542F\u7528\u6269\u5C55",hasBeenDisabled:"\u5DF2\u7981\u7528","show password":"\u663E\u793A\u5BC6\u7801",customContent:"\u8F93\u5165\u81EA\u5B9A\u4E49\u6A21\u578B\u540D\u79F0",inputOptions:"\u8F93\u5165\u6846\u589E\u5F3A",mouseHoverOptions:"\u9F20\u6807\u60AC\u505C",modifyMouseHoverKey:"\u4FEE\u6539\u9F20\u6807\u60AC\u505C\u5FEB\u6377\u952E",enableInputTranslation:"\u662F\u5426\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",enableInputTranslationDescription:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165 {startingKey}{startingKey} \u4F60\u597D\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165\uFF1A\u4F60\u597D\u4E16\u754C\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguage:"\u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguageDescription:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00\uFF0C\u4E5F\u5C31\u662F {startingKey}{startingKey} \u4F5C\u4E3A\u89E6\u53D1\u8BCD\u7684\u9ED8\u8BA4\u8BED\u8A00",inputTargetLanguageDescriptionForNoneKey:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputStartingTriggerKeyTitle:"\u8BBE\u7F6E\u8F93\u5165\u6846\u90E8\u5206\u7FFB\u8BD1\u7684\u5206\u5272\u5B57\u7B26",inputStartingTriggerKeyDescription:"\u5F53\u4F60\u4E0D\u9700\u8981\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u7684\u65F6\u5019\uFF0C\u5206\u5272\u7B26\u5141\u8BB8\u4F60\u53EA\u7FFB\u8BD1 {startingKey}{startingKey} \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8BED\u8A00\u4EE3\u7801\uFF0C\u6BD4\u5982\uFF1A{startingKey}ja \u8868\u793A\u53EA\u7FFB\u8BD1 {startingKey}ja \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206",inputStartingTriggerKeyDescriptionForNoneKey:"\u5F53\u524D\u8BBE\u7F6E\u4E3A\u65E0\u9700\u524D\u7F00\uFF0C\u6682\u65E0\u6CD5\u4F7F\u7528\u8F93\u5165\u6846\u7684\u90E8\u5206\u6587\u672C\u7FFB\u8BD1\u529F\u80FD",inputTrailingTriggerKeyTitle:"\u9009\u62E9\u4E00\u4E2A\u8F93\u5165\u7ED3\u675F\u7684\u89E6\u53D1\u5B57\u7B26",inputTrailingTriggerKeyDescription:"\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey} \u5C06\u4F1A\u5F00\u59CB\u7FFB\u8BD1",inputTrailingTriggerKeyTimeout:"\u8F93\u5165\u7ED3\u675F\u8FDE\u51FB\u89E6\u53D1\u7684\u95F4\u9694\u65F6\u95F4",inputTrailingTriggerKeyTimeoutDescription:"\u8BBE\u7F6E\u8F93\u5165\u7ED3\u675F\u8FDE\u51FB\u89E6\u53D1\u7684\u95F4\u9694\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09",spaceKey:"<\u7A7A\u683C\u952E>",noneKey:"\u65E0\u9700\u524D\u7F00\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u6587\u672C\u6846",inputTranslationBlockUrlsTitle:"\u5207\u52FF\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",inputTranslationBlockUrlsDescription:"\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\uFF0C\u8F93\u5165\u6846\u589E\u5F3A\u5C06\u4E0D\u4F1A\u751F\u6548",clickToSeeQuickDemo:"\u70B9\u51FB\u5C55\u5F00 30 \u79D2\u5FEB\u901F\u6559\u5B66\u89C6\u9891",inputHelperInfo:"\u8BF4\u660E\uFF1A\u6211\u4EEC\u7279\u522B\u9488\u5BF9\u5728\u4E2D\u6587\u8F93\u5165\u6CD5\u4E0B\u90E8\u5206\u89E6\u53D1\u5B57\u7B26\u4F1A\u53D8\u6210\u4E2D\u6587\u6807\u70B9\u7B26\u53F7\u8FD9\u4EF6\u4E8B\u505A\u4E86\u4F18\u5316\uFF0C\u6BD4\u5982\u641C\u72D7\u8F93\u5165\u6CD5\u4E0B / \u4F1A\u53D8\u6210\u987F\u53F7 \u3001\uFF0C\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u652F\u6301\u6240\u6709\u89E6\u53D1\u7B26\u5BF9\u5E94\u7684\u4E2D\u6587\u7B26\u53F7\uFF0C\u4E5F\u5C31\u662F\u8BF4 // \u3001\u3001 \u90FD\u4F1A\u88AB\u8BC6\u522B\u4E3A\u89E6\u53D1\u5B57\u7B26\u3002<br/><br/>\u540C\u65F6\u6211\u4EEC\u4E5F\u652F\u6301\u8BED\u8A00\u4EE3\u7801\u7684\u4E2D\u6587\u522B\u540D\u4F5C\u4E3A\u547D\u4EE4\uFF0C\u6BD4\u5982 /\u65E5\u6587 \u4F60\u597D\u4E16\u754C \u4F1A\u88AB\u7FFB\u8BD1\u4E3A\u65E5\u6587\uFF0C<1>\u70B9\u6B64\u67E5\u770B\u6240\u6709\u652F\u6301\u7684\u8BED\u8A00\u4EE3\u7801</1>\u3002",reloadCurrentPage:"\u8BF7\u5148\u5237\u65B0\u5F53\u524D\u9875\u9762\uFF0C\u518D\u5F00\u59CB\u7FFB\u8BD1",noLocalFilePermissionForPDF:"\u6682\u65E0\u6743\u9650\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u8BF7\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\uFF0C\u7136\u540E\u5BFC\u5165\u672C\u5730\u6587\u4EF6",noPermissionForThisPage:"\u26A0\uFE0F \u6682\u65E0\u6743\u9650\u7FFB\u8BD1\u5F53\u524D\u9875\u9762",retryAllParagraphs:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",retryAllButton:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",errorTooltipTitle:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u539F\u56E0",errorModalTitle:"\u7FFB\u8BD1\u670D\u52A1\u6216\u7F51\u7EDC\u4F3C\u4E4E\u51FA\u4E86\u70B9\u95EE\u9898...",disableConfirm:"\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A\u8BBE\u7F6E",disableOnce:"\u672C\u6B21\u7981\u7528",disableGlobal:"\u6C38\u4E45\u7981\u7528",disableTint:"* \u4F60\u53EF\u4EE5\u5728 {option} \u4E2D\u91CD\u65B0\u542F\u7528\u3002",searchEnhancementNotes:"\u6211\u4EEC\u53D1\u73B0\uFF0C\u4E2D\u6587\u5173\u952E\u8BCD\u548C\u82F1\u6587\u5173\u952E\u8BCD\u7684\u65B0\u95FB\u7ED3\u679C\u6709\u975E\u5E38\u5927\u7684\u4E0D\u540C\uFF0C\u5728\u542F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A\u529F\u80FD\u540E\uFF0C\u6211\u4EEC\u4F1A\u5728\u652F\u6301\u7684\u7F51\u7AD9\uFF08\u8C37\u6B4C\u65B0\u95FB\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u5173\u952E\u8BCD\uFF09\uFF0C\u96EA\u7403\uFF0C\u4E1C\u65B9\u8D22\u5BCC\u7F51\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\uFF09\u81EA\u52A8\u7528\u82F1\u6587\u4E3A\u4F60\u641C\u7D22\u540C\u6837\u7684\u5173\u952E\u8BCD\u5E76\u5C55\u793A\u5728\u53F3\u4FA7\u3002\u5982\u679C\u4F60\u4E0D\u9700\u8981\u8BE5\u529F\u80FD\u7684\u8BDD\uFF0C\u53EF\u4EE5\u9009\u62E9\u7981\u7528\u5B83\u3002",option:"\u8BBE\u7F6E",saveSettings:"\u4FDD\u5B58\u8BBE\u7F6E",closeModal:"\u5173\u95ED\u7A97\u53E3",enableInputTranslationWithoutTriggerKeyTitle:"\u542F\u7528\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey}\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u4E3A{inputTargetLanguage}",enableInputTranslationWithoutTriggerKeyDescription:"\u5982\u9700\u6307\u5B9A\u76EE\u6807\u8BED\u8A00\uFF0C\u8BF7\u5728\u524D\u9762\u52A0\u4E0A\u8BED\u8A00\u4EE3\u7801\uFF0C\u5982\uFF1Aja \u4F60\u597D\u4E16\u754C",mouseHoverShortcutPlaceholder:"\u5982\uFF1AShift",deepLProName:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1 Pro \u4F1A\u5458 (\u63A8\u8350)",deepLProDescription:"\u5F53\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",deeplProDescriptionForNormal:"\u65E0\u9700\u4EFB\u4F55\u8BBE\u7F6E\uFF0C\u4F1A\u5458\u767B\u5F55\u540E\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u4F1A\u5458</1>",deepLCustomDescription:"\u9700\u8981\u56FD\u5916\u4FE1\u7528\u5361\uFF0C\u5728 <1>DeepL</1> \u5B98\u65B9\u5F00\u901A\uFF0C\u70B9\u51FB\u67E5\u770B<2>\u6587\u6863</2>",deepLCustomName:"\u81EA\u5B9A\u4E49 Auth Key",chooseProviderLabel:"\u9009\u62E9\u4E00\u4E2A\u670D\u52A1\u63D0\u4F9B\u5546",openaiProName:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1 Pro \u4F1A\u5458 (\u63A8\u8350)",openaiProDescription:"\u5F53\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",openaiProDescriptionForNormal:"\u65E0\u9700\u4EFB\u4F55\u8BBE\u7F6E\uFF0C\u4F1A\u5458\u767B\u5F55\u540E\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u4F1A\u5458</1>",openaiCustomDescription:"\u53EF\u5728 OpenAI, Azure OpenAI, \u6216\u5176\u4ED6\u7B2C\u4E09\u65B9\u670D\u52A1\u83B7\u53D6\uFF0C<1>\u70B9\u6B64\u67E5\u770B\u6587\u6863</1>",openaiCustomName:"\u81EA\u5B9A\u4E49 API Key",needLoginAction:"(\u5F00\u901A\u4F1A\u5458\u6216\u81EA\u5B9A\u4E49)",goLoginOrAction:"(\u5F00\u901A\u4F1A\u5458\u6216\u53BB\u8BBE\u7F6E)",yearly:"\u8FDE\u7EED\u5305\u5E74",quarterly:"\u8FDE\u7EED\u5305\u5B63",monthly:"\u8FDE\u7EED\u5305\u6708",yearlyForOnce:"\u4E00\u6B21\u6027\u5E74\u5EA6\u5957\u9910",monthlyForOnce:"\u4E00\u6B21\u6027\u6708\u5EA6\u5957\u9910",daily:"\u8FDE\u7EED\u5305\u65E5",year:"\u8FDE\u7EED\u5305\u5E74",quarter:"\u8FDE\u7EED\u5305\u5B63",month:"\u8FDE\u7EED\u5305\u6708",day:"\u8FDE\u7EED\u5305\u65E5",onetime_7day:"7 \u5929\u4F53\u9A8C\u5305",currentPlanDescriptionForFree:"\u5F53\u524D\u5957\u9910\uFF1A\u514D\u8D39",currentPlanDescriptionForContinuous:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u81EA\u52A8\u7EED\u8D39",currentPlanDescriptionForAutoRenewCaceling:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F",currentYearlyPlanDescriptionForAutoRenewCacelingWithRealPaiedUser:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F\u3002<br/><1>\u70B9\u6B64\u7BA1\u7406\u7EED\u8D39\u65B9\u6848</1>",currentYearlyPlanDescriptionForAutoRenewCacelingWithAdmin:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F\u3002<br/><1>\u70B9\u6B64\u542F\u7528\u8FDE\u7EED\u5305\u5E74</1>",currentPlanDescriptionForOneTime:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u5E74\u8D39</1>\u6216<2>\u6708\u8D39</2>\u4F1A\u5458",upgradePlan:"\u70B9\u6B64\u5347\u7EA7\u4E3A Pro \u4F1A\u5458",upgradeToPro:"\u5347\u7EA7\u4E3A Pro \u4F1A\u5458","popup.openPro":"\u5347\u7EA7\u4E3A Pro \u4F1A\u5458\u540E\u53EF\u4EE5\u7545\u4EAB DeepL \u548C OpenAI \u7FFB\u8BD1\uFF0C\u70B9\u6B64\u5347\u7EA7","popup.openProForPro":"\u60A8\u662F Pro \u4F1A\u5458\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528 DeepL \u548C OpenAI \u7FFB\u8BD1",currentAccount:"\u5F53\u524D\u8D26\u6237",enableAutoSyncUserSettings:"\u542F\u7528\u591A\u8BBE\u5907\u81EA\u52A8\u4E91\u540C\u6B65",modalEnableInputTranslationTitle:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u8F93\u5165\u6846\u7FFB\u8BD1\u63D0\u793A",modalEnableInputTranslationDesc:"\u60A8\u521A\u521A\u901A\u8FC7\u5FEB\u901F\u8FDE\u51FB 3 \u6B21\u7A7A\u683C\u952E\u89E6\u53D1\u4E86\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u7684\u8F93\u5165\u6846\u7FFB\u8BD1\uFF0C\u8F93\u5165\u6846\u7684\u5185\u5BB9\u5C06\u88AB\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u7684\u76EE\u6807\u8BED\u8A00\u3002\u901A\u8FC7 Ctrl+Z \u53EF\u4EE5\u64A4\u9500\u7FFB\u8BD1\u3002<br /><br />\u5982\u679C\u8FD9\u662F\u4E00\u4E2A\u5931\u8BEF\uFF0C\u4E0D\u7528\u62C5\u5FC3\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u672C\u6B21\u7981\u7528\uFF0C\u6216\u8005\u6C38\u4E45\u7981\u7528\u8F93\u5165\u6846\u7FFB\u8BD1\u3002",saveAndNotShowAgain:"\u4FDD\u5B58\u4E14\u4E0D\u518D\u63D0\u793A",disableInputTranslationTips:"* \u4F60\u4E5F\u53EF\u4EE5\u5728 {option} \u4E2D\u8BBE\u7F6E\u5176\u4ED6\u5FEB\u6377\u952E\u6765\u89E6\u53D1\uFF0C{learnMore}\u3002",learnMore:"\u70B9\u6B64\u4E86\u89E3\u66F4\u591A",continueEnalbeInputTranslation:"\u7EE7\u7EED\u542F\u7528\u8F93\u5165\u6846\u7FFB\u8BD1",autoRenewTrialSuffix:'\uFF08\u8BD5\u7528\u4E2D\uFF0C<a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">\u7ACB\u523B\u5347\u7EA7\u4E3A\u6B63\u5F0F\u4F1A\u5458</a>\uFF09',upgradeFromTrialTitle:"\u5347\u7EA7\u4E3A\u6B63\u5F0F\u4F1A\u5458"};var io={nologin:"\u672A\u767B\u9304",login:"\u767B\u9304",manageAccount:"\u7BA1\u7406\u8CEC\u6236",logout:"\u9000\u51FA",curentPlan:"\u7576\u524D\u5957\u9910",endAt:"\u5230\u671F",endAuto:"\u81EA\u52D5\u7E8C\u671F",lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u5143\u6578\u91CF","translate-pdf":"\u9EDE\u9078\u7FFB\u8B6F PDF","noSupportTranslate-pdf":"\u8173\u672C\u4E0D\u652F\u63F4\uFF0C\u8ACB\u4F7F\u7528\u64F4\u5145\u5957\u4EF6","translate-firefox-local-pdf":"\u9EDE\u64CA\u53BB\u5C0E\u5165PDF",enableLineBreak:"\u958B\u555F\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D0A\u52A9\u958B\u767C\u8005 (\u6708\u4ED8\u6216\u50C5\u8D0A\u52A9\u4E00\u6B21\u5747\u53EF)",help:"\u8AAA\u660E",browserShortcutsNoteForFirefox:"Firefox \u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u9644\u52A0\u5143\u4EF6\u7BA1\u7406\u9801\u9762 \u300Cabout:addons\u300D\uFF0C\u7136\u5F8C\u9EDE\u9078\u300C\u8A2D\u5B9A\u5716\u793A\u300D\uFF0C\u518D\u9EDE\u9078\u300C\u7BA1\u7406\u64F4\u5145\u5957\u4EF6\u5FEB\u901F\u9375\u300D\u5373\u53EF\u8A2D\u5B9A",browserShortcutsNoteForChrome:"Chromium \u6838\u5FC3\u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u64F4\u5145\u529F\u80FD\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u300C\u9375\u76E4\u5FEB\u901F\u9375\u300D\u9801\u9762(chrome://extensions/shortcuts)\u8A2D\u5B9A\uFF0C\u9EDE\u9078\u4E0B\u65B9\u6309\u9215\u524D\u5F80\u5FEB\u901F\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u901F\u9375\u683C\u5F0F\u70BA\uFF1A (\u6CA1\u6709\u505A\u81EA\u52A8\u8BC6\u522B\uFF0C\u8BF7\u76F4\u63A5\u8F93\u5165)\uFF1A",enableLineBreakDescription:"\u555F\u7528\u5F8C\uFF0C\u5C07\u6703\u5728\u9577\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u5B57\u5143\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.shortBrandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F: \u96D9\u8A9E\u5C0D\u7167\u7DB2\u9801\u7FFB\u8B6F & PDF\u6587\u6A94\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u540C\u6642\u652F\u6301 PDF \u7FFB\u8B6F\uFF0C\u96D9\u8A9E Epub \u96FB\u5B50\u66F8\u88FD\u4F5C\uFF0C\u652F\u6301 Deepl/Google/\u6709\u9053/\u9A30\u8A0A\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u514D\u8CBB\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8B6F\u4E26\u96B1\u85CF\u539F\u6587/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u958B\u555F\u8A2D\u5B9A\u9801\u9762","browser.toggleTranslationMask":"\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u6A5F PDF \u6A94\u6848","browser.openEbookViewer":"\u95B1\u8B80\u672C\u6A5F\u96FB\u5B50\u66F8","browser.openEbookBuilder":"\u88FD\u4F5C\u96D9\u8A9E EPUB \u96FB\u5B50\u66F8","browser.translateLocalHtmlFile":"\u7FFB\u8B6F HTML/txt \u6A94\u6848","browser.donateContext":"\u4E86\u89E3\u8D0A\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8B6F\u5B57\u5E55\u6A94\u6848",confirmResetConfig:"\u4F60\u78BA\u5B9A\u8981\u91CD\u8A2D\u8A2D\u5B9A\u55CE\uFF1F",translationLineBreakSettingTitle:"\u8B6F\u6587\u63DB\u884C\u8A2D\u5B9A",smartLineBreak:"\u667A\u6167\u63DB\u884C",alwaysLineBreak:"\u7E3D\u662F\u63DB\u884C",isShowContextMenu:"\u5C07\u7DB2\u9801\u7FFB\u8B6F\u529F\u80FD\u52A0\u5165\u53F3\u9375\u9078\u55AE",toggleBeta:"\u958B\u555F Beta \u6E2C\u8A66\u529F\u80FD",betaDescription:"\u555F\u7528\u4ECD\u5728\u5BE6\u9A57\u7684\u529F\u80FD\u4EE5\u53CA\u6E2C\u8A66\u4E2D\u7684\u7FFB\u8B6F\u670D\u52D9\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7D44</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u7E3D\u662F\u63DB\u884C\u9069\u7528\u65BC\u8F03\u5C11\u5167\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F4A\u3002(\u5728\u5167\u5BB9\u8F03\u591A\u7684\u9577\u6BB5\u843D(\u8D85\u904E {count} \u500B\u5B57\u5143) \u4F7F\u7528\u667A\u6167\u63DB\u884C\u6703\u66F4\u7701\u7A7A\u9593)",tempTranslateDomainTitle:"\u81E8\u6642\u958B\u555F\u7DB2\u7AD9\u7FFB\u8B6F\u7684\u6642\u9577",tempTranslateDomainDescription:"\u7576\u624B\u52D5\u7FFB\u8B6F\u67D0\u500B\u7DB2\u9801\u7684\u6642\u5019\uFF0C\u81E8\u6642\u958B\u555F\u8A72\u7DB2\u7AD9\u70BA\u81EA\u52D5\u7FFB\u8B6F",xMinutes:"{count} \u5206\u9418",disabled:"\u505C\u7528",changelog:"\u66F4\u65B0\u8A18\u9304",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u5247\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u6642\u89F8\u78B0\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801(\u50C5\u8B6F\u6587)/\u986F\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u70BA\u7DB2\u57DF\u540D\u7A31\uFF0C\u540C\u6642\u652F\u63F4\u842C\u7528\u5B57\u5143\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u5B9A",clickToExpandConfig:"\u5C55\u958B\u76EE\u524D\u8A2D\u5B9A",import:"\u5F9E\u6A94\u6848\u532F\u5165",export:"\u532F\u51FA\u70BA\u6A94\u6848",toggleDebug:"\u5728\u4E3B\u63A7\u53F0\u986F\u793A\u5075\u932F\u8A18\u9304","fingers.0":"\u95DC\u9589","fingers.2":"\u96D9\u6307\u89F8\u6478","fingers.3":"\u4E09\u6307\u89F8\u6478","fingers.4":"\u56DB\u6307\u89F8\u6478","fingers.5":"\u4E94\u6307\u89F8\u6478",mouseHoldKey:"+ {key} \u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u7FA9\u5FEB\u6377\u9375(\u6253\u958B\u8A2D\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8B6F\u8A72\u6BB5",mouseHoverHoldKey:"\u9F20\u6A19\u6ED1\u904E\u540C\u6642\u6309\u4E0B X \u9375\u7FFB\u8B6F\u6BB5\u843D","mouse-translate":"\u9F20\u6A19\u6ED1\u904E",document:"\u8AAA\u660E\u6587\u4EF6",resetSuccess:"\u91CD\u8A2D\u6240\u6709\u8A2D\u5B9A\u6210\u529F",resetThisSuccess:"\u91CD\u8A2D\u6210\u529F",saved:"\u5132\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u532F\u5165\u8A2D\u5B9A",goAdvancedSettings:"\u524D\u5F80\u9032\u968E\u8A2D\u5B9A\u9801\u9762",goAdvancedInterfaceSettings:"\u524D\u5F80\u81EA\u8A02\u8A2D\u5B9A\u9801\u9762",advanced:"\u9032\u968E\u8A2D\u5B9A",advancedDescription:"\u6B63\u5E38\u60C5\u6CC1\u7121\u9700\u8A2D\u5B9A\uFF0C\u4FDD\u6301\u9810\u8A2D\u5373\u53EF\u3002\u50C5\u91DD\u5C0D\u66F4\u5C08\u696D\u7684\u4F7F\u7528\u8005\uFF0C\u63D0\u4F9B\u66F4\u500B\u4EBA\u5316\u7684\u8A2D\u5B9A\u9805\u76EE\u3002",developer:"\u958B\u767C\u8005\u8A2D\u5B9A",donateCafe:"\u50F9\u683C","translate to the bottom of the page":"\u9032\u5165\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u56DE\u5831",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u555F\u7528\u5F8C\uFF0C\u9032\u5165\u7DB2\u9801\u5C07\u7ACB\u5373\u7FFB\u8B6F\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\u3002\u95DC\u9589\u5247\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u555F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6240\u6709\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\u3002\u95DC\u9589\u5247\u4F7F\u7528\u9810\u8A2D\u7684\u667A\u6167\u8FA8\u8B58\uFF0C\u50C5\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\u3002(\u4E0D\u63A8\u85A6\u958B\u555F)","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8B6F\u9801\u9762\u524D\u591A\u5C11\u500B\u5B57\u5143\uFF0C\u800C\u7121\u9700\u7B49\u5F85\u6372\u52D5\u81F3\u53EF\u898B\u5340\u57DF","interface language":"\u4ECB\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u901F\u9375",modify:"\u8B8A\u66F4\u5FEB\u901F\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u9996\u9801",more:"\u66F4\u591A",moreOptions:"\u5C55\u958B\u66F4\u591A\u81EA\u8A02\u9078\u9805",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u6240\u6709\u5340\u57DF",changeToTranslateTheMainPage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",changeToOnlyTranslationMode:"\u5207\u63DB\u70BA\u50C5\u986F\u793A\u8B6F\u6587",changeToDualTranslationMode:"\u5207\u63DB\u70BA\u96D9\u8A9E\u7FFB\u8B6F",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u6167\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u6A5F\u898F\u5247\u5DF2\u70BA\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u5B98\u65B9\u898F\u5247",localVersionIsTooOld:"\u672C\u6A5F\u5957\u4EF6\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u5957\u4EF6\u81F3 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5617\u8A66\u540C\u6B65",badUserscriptBrowser:"\u76EE\u524D\u700F\u89BD\u5668\u7121\u6CD5\u6B63\u78BA\u5BE6\u73FE\u6CB9\u7334\u5957\u4EF6\u7684\u4ECB\u9762\uFF0C\u8ACB\u4F7F\u7528\u5176\u4ED6<1>\u652F\u63F4\u6CB9\u7334\u5957\u4EF6</1>\u7684\u700F\u89BD\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u6709\u65B0\u7248\u672C\u53EF\u7528",theLocalExtensionIsUpToUpdate:"\u76EE\u524D\u5957\u4EF6\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u91CD\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u76EE\u524D\u898F\u5247\u7248\u672C",calculating:"\u6B63\u5728\u8A08\u7B97",unknownError:"\u672A\u77E5\u7684\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u53D6\u5F97\u9060\u7AEF\u898F\u5247",enableAlphaSuccess:"\u5DF2\u555F\u7528 Alpha \u529F\u80FD",disableAlphaSuccess:"\u5DF2\u505C\u7528 Alpha \u529F\u80FD",cacheSize:"\u5FEB\u53D6\u5927\u5C0F\uFF1A",cleaning:"\u6B63\u5728\u6E05\u7406",cleanCache:"\u6E05\u9664\u5FEB\u53D6",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"(\u524D\u5F80\u8A2D\u5B9A)",goSettings:"\u524D\u5F80\u8A2D\u5B9A",needActionForOptions:"(\u9700\u8A2D\u5B9A)",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u7576\u524D\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F {language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",alwaysTranslateSomeSiteOrWildSite:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u7AD9",alwaysTranslateSomePage:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u9875",add:"\u65B0\u589E",default:"\u9810\u8A2D",forThisLanguage:"\u91DD\u5C0D\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165 URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u5B83\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u5B9A\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4F60\u60F3\u7528\u7684\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u6B63\u5728\u7FFB\u8B6F",Error:"\u932F\u8AA4",allowCacheTranslations:"\u555F\u7528\u672C\u6A5F\u7FFB\u8B6F\u5FEB\u53D6\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8981\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u7BC4\u4F8B",interface:"\u4ECB\u9762\u8A2D\u5B9A",import_export:"\u532F\u5165/\u532F\u51FA",import_export_title:"\u532F\u5165/\u532F\u51FA\u8A2D\u5B9A",syncToGoogleDrive:"\u7ACB\u5373\u8207 Google Drive \u540C\u6B65",syncToAccount:"\u540C\u6B65\u5230\u8CEC\u6236",syncToAccountButton:"\u7ACB\u5373\u4E0E\u4E91\u7AEF\u540C\u6B65",syncToAccountDescription:"\u4E0A\u50B3\u5230\u5DF2\u767B\u9304\u8CEC\u6236\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u8A2D\u5099\u4E4B\u9593\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u5F8C\u4FEE\u6539\u6642\u9593\u70BA\u6E96\u3002",successSyncConfigInAccount:"\u6210\u529F\u8207\u8CEC\u6236\u4FDD\u6301\u540C\u6B65",successSyncConfigToAccount:"\u6210\u529F\u540C\u6B65\u5230\u8CEC\u6236",syncConfigNoUpdate:"\u5DF2\u7D93\u662F\u6700\u65B0\u7684\u4E86",previewAllThemes:"\u9810\u89BD\u5168\u90E8\u6A23\u5F0F","translationTheme.none":"\u7121","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u5E95\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u6846\u7DDA","translationTheme.solidBorder":"\u5BE6\u7DDA\u6846\u7DDA","translationTheme.underline":"\u76F4\u7DDA\u5E95\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B78\u7FD2\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u9694\u7DDA","translationTheme.highlight":"\u9192\u76EE\u63D0\u793A","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.marker2":"\u99AC\u514B\u7B462","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDashed":"\u7CFB\u7D71\u5167\u5EFA\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDotted":"\u7CFB\u7D71\u5167\u5EFA\u9EDE\u72C0\u5E95\u7DDA","translationTheme.nativeUnderline":"\u7CFB\u7D71\u5167\u5EFA\u76F4\u7DDA\u5E95\u7DDA","translationTheme.wavy":"\u6CE2\u5F62\u66F2\u7DDA","translationServices.custom":"\u81EA\u5B9A\u7FA9API","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.tenAlpha":"\u9A30\u8A0A\u7FFB\u8B6F\u541B(Alpha)","translationServices.google":"Google \u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"Azure \u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.cai":"\u5F69\u96F2\u5C0F\u8B6F (Alpha)","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.you":"\u6709\u9053\u7FFB\u8B6F (Alpha)","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.niu":"\u5C0F\u725B\u7FFB\u8B6F","translationServices.papago":"Papago \u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u7576\u9801\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u5C07\u8DF3\u904E\u7FFB\u8B6F",enableUserscriptPagePopup:"\u5728\u9801\u9762\u4E0A\u986F\u793A\u61F8\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528\u5FEB\u901F\u9375/{touch}\u518D\u6B21\u986F\u793A\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5EFA\u8B70\u5C07\u672C\u8A2D\u5B9A\u9801\u9762\u52A0\u5165\u81F3\u6211\u7684\u6700\u611B","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u91D1\u9470\u5F8C\u624D\u53EF\u4F7F\u7528\uFF0C\u8A73\u7D30\u8CC7\u8A0A\u8ACB\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u91D1\u9470\u7533\u8ACB\u548C\u8A2D\u5B9A\u6559\u5B78\u300B",useAboveStyleForTheseSites:"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u7E3D\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8B6F\u6587\u6A23\u5F0F",currentUrl:"\u76EE\u524D\u7DB2\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C",syncToCloud:"\u540C\u6B65\u81F3\u96F2\u7AEF",syncToCloudDescription:"\u4E0A\u50B3\u81F3\u96F2\u7AEF\u5F8C\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u700F\u89BD\u5668/\u6CB9\u7334\u8173\u672C\u4E4B\u9593\u540C\u6B65\u8A2D\u5B9A\uFF0C\u4EE5\u6700\u5F8C\u8B8A\u66F4\u6642\u9593\u70BA\u6E96\u3002",authFail:"\u6388\u6B0A\u5931\u6557",syncTitle:"\u624B\u52D5\u5099\u4EFD\u7BA1\u7406",import_hint:"\u532F\u5165",upload:"\u4E0A\u50B3",revokeAuth:"\u64A4\u92B7\u6388\u6B0A",uploadFail:"\u4E0A\u50B3\u5931\u6557",download:"\u4E0B\u8F09",importSuccess:"\u532F\u5165\u6210\u529F",importFail:"\u532F\u5165\u5931\u6557",deleteFail:"\u522A\u9664\u5931\u6557",backupToCloud:"\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6A94\u6848",create_new_backup:"\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE\uFF0C\u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",backupToCloudDescription:"\u624B\u52D5\u4E0A\u50B3\u6216\u9084\u539F\u5099\u4EFD\u6A94\u6848\uFF0C\u6700\u591A\u5141\u8A31 3 \u500B\u4E0D\u540C\u7684\u5099\u4EFD",successSyncConfig:"\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u6557",updatedAt:"\u66F4\u65B0\u65BC {date}",lastSyncedAt:"\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",downloadFail:"\u4E0B\u8F09\u5931\u6557",clickToDownload:"\u9EDE\u9078\u4E0B\u8F09",aboutLabel:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831","browser.openAboutPage":"\u95DC\u65BC/\u554F\u984C\u56DE\u5831",aboutLabelWithoutSponsor:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831",aboutIntro:"\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F \u4F60\u53EF\u4EE5\u9078\u64C7\u958B\u901A <6>Pro\u6703\u54E1</6> \u4F86\u4F7F\u7528\u958B\u7BB1\u5373\u7528\u7684 DeepL \u548C OpenAI \u7FFB\u8B6F\u3002<br/><br/>\u4F60\u53EF\u4EE5\u95DC\u6CE8\u6211\u4EEC\u7684<3>Twitter</3>\uFF0C<4>Telegram \u983B\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90F5\u4EF6\u8A02\u95B1</5>\u8FFD\u8E64\u66F4\u65B0\u3002<br/> <7>Pro \u6703\u54E1</7> \u53EF\u4EE5\u901A\u904E\u5FEB\u901F\u5BA2\u670D\u90F5\u7BB1 <8>support@immersivetranslate.com</8> \u548C\u6211\u5011\u53D6\u5F97\u806F\u7E6B\u3002",aboutIntroWithoutSponsor:"\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F ",projectHomepage:"\u5C08\u6848\u9996\u9801",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u7D44\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u773E\u865F",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u983B\u9053",joinTelegramChannel:"\u95DC\u6CE8 Telegram \u983B\u9053\u77AD\u89E3\u66F4\u65B0\u8CC7\u8A0A",feedbackAndJoin:"\u554F\u984C\u56DE\u5831/\u52A0\u5165\u7FA4\u7D44",autoSync:"\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",loadingThemeTitle:"Loading \u6A23\u5F0F",loadingThemeDescription:"\u8A2D\u5B9A\u7B49\u5F85\u8B6F\u6587\u8F09\u5165\u6642\u7684\u6A23\u5F0F","loadingTheme.spinner":"\u8F49\u5708\u52D5\u756B","loadingTheme.text":"\u975C\u614B\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u986F\u793A",developerDescription:"\u53EF\u4EE5\u9EDE\u9078<1>\u6B64\u8655</1>\u6AA2\u8996\u9032\u968E\u81EA\u8A02\u529F\u80FD\u76F8\u95DC\u7684\u8AAA\u660E\u6587\u4EF6","edit border color":"\u8B8A\u66F4\u908A\u6846\u8272\u5F69",successSyncButNoChange:"\u76EE\u524D\u8A2D\u5B9A\u8207\u96F2\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u8A02\u8272\u5F69\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u908A\u6846\u8272\u5F69","customThemeLabel.borderRadius":"\u908A\u6846\u5713\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u8272\u5F69","customThemeLabel.backgroundColor":"\u80CC\u666F\u8272\u5F69","customThemeLabel.zoom":"\u5B57\u578B\u7E2E\u653E\u6BD4\u4F8B (%)","customThemeLabel.opacity":"\u6587\u5B57\u4E0D\u900F\u660E\u5EA6 (%)",resetToDefaultColor:"\u9084\u539F\u70BA\u9810\u8A2D\u8272\u5F69",resetToDefaultSettings:"\u9084\u539F\u70BA\u9810\u8A2D\u8A2D\u5B9A",isTranslateTitle:"\u555F\u7528\u7DB2\u9801\u6A19\u984C\u7FFB\u8B6F",enableSubtitle:"\u958B\u555F\u5B57\u5E55\u7FFB\u8B6F",enableSubtitleDescription:"\u91DD\u5C0D youtube \u7B49\u7DB2\u7AD9\u7684\u5B57\u5E55\u5340\u57DF\u958B\u555F\u7FFB\u8B6F",isTranslateTitleDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6A19\u984C\u6703\u88AB\u7FFB\u8B6F",enableSearchEnhancement:"\u958B\u555F\u641C\u7D22\u589E\u5F37",enableSearchEnhancementDescription:"\u4E2D\u6587\u641C\u7D22\u8C37\u6B4C\u6703\u5728\u53F3\u908A\u51FA\u73FE\u82F1\u6587\u7248\u8C37\u6B4C\u65B0\u805E",verifyService:"\u9EDE\u6B64\u6E2C\u8A66\u670D\u52D9",verified:"\u9A57\u8B49\u6210\u529F","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8B6F\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u9418\u6700\u5927\u8981\u6C42\u6578","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8981\u6C42\u6578","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u7684\u6700\u5927\u6587\u5B57\u9577\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u6700\u5927\u6BB5\u843D\u6578","field.apiUrl":"\u81EA\u8A02 API \u4F4D\u5740","field.placeholderDelimiters":"\u4FDD\u7559\u7684\u4F54\u4F4D\u7B26","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>\u81EA\u5B9A\u7FA9\u63A5\u53E3\u63A5\u5165</a> \u9700\u8981\u53C3\u8003\u6587\u6A94","description.limitPerMinute":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u5206\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u79D2\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.generalLimitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002","description.prompt":"\u4EE5\u4F7F\u7528\u8005\u8EAB\u4EFD\u50B3\u9001\u7D66 OpenAI \u7684\u5C0D\u8A71\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u5B57\u5167\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8A9E\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6A19\u8A9E\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u85A6\uFF09, \u5C07\u6703\u5728\u55AE\u7368\u4F5C\u70BA\u4E00\u6BB5\u767C\u9001\u7D66 OpenAI","description.maxTextLengthPerRequest":"\u9810\u8A2D\u6703\u5408\u4F75\u591A\u500B\u6BB5\u843D\uFF0C\u4EE5\u6E1B\u5C11\u8ACB\u8981\u6C42\u6578\uFF0C\u4F46\u662F\u5982\u679C\u6BB5\u843D\u7E3D\u9577\u5EA6\u904E\u9577\uFF0C\u4E5F\u53EF\u80FD\u6703\u5C0E\u81F4 API \u7684\u56DE\u61C9\u6642\u9593\u589E\u52A0\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5617\u8A66\u8ABF\u6574\u8A72\u9078\u9805\u4F86\u63D0\u5347\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7D71\u50B3\u9001\u767C\u9001\u7D66 OpenAI \u7684\u5C0D\u8A71\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u5B57\u5167\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8A9E\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6A19\u8A9E\u8A00","field.domain":"\u9886\u57DF","description.domain":"\u9ED8\u8A8D\u70BA\uFF1Ageneral\u3002\u50C5\u5728\u6709\u9053API\u63A7\u5236\u53F0\u958B\u901A\u9818\u57DF\u5316\u7FFB\u8B6F\u7684\u60C5\u6CC1\u4E0B\u53EF\u8A2D\u7F6E\uFF0C\u652F\u6301\u9818\u57DF\u898B<1>\u9019\u88E1</1>","field.scene":"\u5834\u666F","description.scene":"\u9ED8\u8A8D\u70BA\uFF1Ageneral\u3002\u50C5\u5728\u963F\u91CC\u96F2API\u63A7\u5236\u53F0\u958B\u901A\u6A5F\u5668\u7FFB\u8B6F\u5C08\u696D\u7248\u7684\u60C5\u6CC1\u4E0B\u53EF\u8A2D\u7F6E\uFF0C\u652F\u6301\u5834\u666F\u898B<1>\u9019\u88E1</1>","field.vocabId":"\u7528\u6237\u8BCD\u5178 ID","description.vocabId":"\u6307\u5B9A\u7684\u8BCD\u5178 out_id\uFF0C\u76EE\u524D\u652F\u6301\u82F1\u8BD1\u4E2D","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u70BA gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u50B3\u9001\u7D66\u7FFB\u8B6F\u670D\u52D9\u7684\u6BB5\u843D\u6578\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6578\u91CF\u904E\u591A\uFF0C\u53EF\u80FD\u6703\u5C0E\u81F4\u56DE\u61C9\u901F\u5EA6\u8B8A\u6162","description.apiUrl":"\u8ACB\u52A0\u5165\u5177\u9AD4\u5305\u542B\u8DEF\u5F91\u7684\u7DB2\u5740",enabledExtension:"\u555F\u7528\u5957\u4EF6",clickToDisableExtension:"\u9EDE\u9078\u505C\u7528\u5957\u4EF6",clickToEnableExtension:"\u9EDE\u9078\u555F\u7528\u5957\u4EF6",hasBeenDisabled:"\u5DF2\u505C\u7528","show password":"\u986F\u793A\u5BC6\u78BC",customContent:"\u8F38\u5165\u81EA\u5B9A\u7FA9\u6A21\u578B",inputOptions:"\u8F38\u5165\u6846\u589E\u5F37",mouseHoverOptions:"\u9F20\u6A19\u6ED1\u904E",enableInputTranslation:"\u662F\u5426\u555F\u7528\u8F38\u5165\u6846\u589E\u5F37",enableInputTranslationDescription:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165 {startingKey}{startingKey} \u4F60\u597D\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165\uFF1A\u4F60\u597D\u4E16\u754C\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguage:"\u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguageDescription:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00\uFF0C\u4E5F\u5C31\u662F {startingKey}{startingKey} \u4F5C\u4E3A\u89E6\u53D1\u8BCD\u7684\u9ED8\u8BA4\u8BED\u8A00",inputTargetLanguageDescriptionForNoneKey:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputStartingTriggerKeyTitle:"\u8BBE\u7F6E\u8F93\u5165\u6846\u90E8\u5206\u7FFB\u8BD1\u7684\u5206\u5272\u5B57\u7B26",inputStartingTriggerKeyDescription:"\u5F53\u4F60\u4E0D\u9700\u8981\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u7684\u65F6\u5019\uFF0C\u5206\u5272\u7B26\u5141\u8BB8\u4F60\u53EA\u7FFB\u8BD1 {startingKey}{startingKey} \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8BED\u8A00\u4EE3\u7801\uFF0C\u6BD4\u5982\uFF1A{startingKey}ja \u8868\u793A\u53EA\u7FFB\u8BD1 {startingKey}ja \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206",inputStartingTriggerKeyDescriptionForNoneKey:"\u5F53\u524D\u8BBE\u7F6E\u4E3A\u65E0\u9700\u524D\u7F00\uFF0C\u6682\u65E0\u6CD5\u4F7F\u7528\u8F93\u5165\u6846\u7684\u90E8\u5206\u6587\u672C\u7FFB\u8BD1\u529F\u80FD",inputTrailingTriggerKeyTitle:"\u9009\u62E9\u4E00\u4E2A\u8F93\u5165\u7ED3\u675F\u7684\u89E6\u53D1\u5B57\u7B26",inputTrailingTriggerKeyDescription:"\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey} \u5C06\u4F1A\u5F00\u59CB\u7FFB\u8BD1",inputTrailingTriggerKeyTimeout:"\u8F38\u5165\u7D50\u675F\u9023\u64CA\u89F8\u767C\u7684\u9593\u9694\u6642\u9593",inputTrailingTriggerKeyTimeoutDescription:"\u8A2D\u7F6E\u8F38\u5165\u7D50\u675F\u9023\u64CA\u89F8\u767C\u7684\u9593\u9694\u6642\u9593\uFF08\u6BEB\u79D2\uFF09",spaceKey:"<\u7A7A\u683C\u9375>",noneKey:"\u65E0\u9700\u524D\u7F00\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u6587\u672C\u6846",inputTranslationBlockUrlsTitle:"\u5207\u52FF\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",inputTranslationBlockUrlsDescription:"\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\uFF0C\u8F93\u5165\u6846\u589E\u5F3A\u5C06\u4E0D\u4F1A\u751F\u6548",clickToSeeQuickDemo:"\u70B9\u51FB\u5C55\u5F00 30 \u79D2\u5FEB\u901F\u6559\u5B66\u89C6\u9891",inputHelperInfo:"\u8AAA\u660E\uFF1A\u6211\u5011\u7279\u5225\u91DD\u5C0D\u5728\u4E2D\u6587\u8F38\u5165\u6CD5\u4E0B\u90E8\u5206\u89F8\u767C\u5B57\u7B26\u6703\u8B8A\u6210\u4E2D\u6587\u6A19\u9EDE\u7B26\u865F\u9019\u4EF6\u4E8B\u505A\u4E86\u512A\u5316\uFF0C\u6BD4\u5982\u641C\u72D7\u8F38\u5165\u6CD5\u4E0B / \u6703\u8B8A\u6210\u9813\u865F \u3001\uFF0C\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u652F\u6301\u6240\u6709\u89F8\u767C\u7B26\u5C0D\u61C9\u7684\u4E2D\u6587\u7B26\u865F\uFF0C\u4E5F\u5C31\u662F\u8AAA // \u3001\u3001 \u90FD\u6703\u88AB\u8B58\u5225\u70BA\u89F8\u767C\u5B57\u7B26\u3002<br/><br/>\u540C\u6642\u6211\u5011\u4E5F\u652F\u6301\u8A9E\u8A00\u4EE3\u78BC\u7684\u4E2D\u6587\u5225\u540D\u4F5C\u70BA\u547D\u4EE4\uFF0C\u6BD4\u5982 /\u65E5\u6587 \u4F60\u597D\u4E16\u754C \u6703\u88AB\u7FFB\u8B6F\u70BA\u65E5\u6587\uFF0C<1>\u9EDE\u6B64\u67E5\u770B\u6240\u6709\u652F\u63F4\u7684\u8A9E\u8A00\u4EE3\u78BC</1>\u3002",reloadCurrentPage:"\u8BF7\u5148\u5237\u65B0\u5F53\u524D\u9875\u9762\uFF0C\u518D\u5F00\u59CB\u7FFB\u8BD1",noLocalFilePermissionForPDF:"\u6682\u65E0\u6743\u9650\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u8BF7\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\uFF0C\u7136\u540E\u5BFC\u5165\u672C\u5730\u6587\u4EF6",noPermissionForThisPage:"\u26A0\uFE0F \u6682\u65E0\u6743\u9650\u7FFB\u8BD1\u5F53\u524D\u9875\u9762",retryAllParagraphs:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",retryAllButton:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",errorTooltipTitle:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u539F\u56E0",errorModalTitle:"\u7FFB\u8BD1\u670D\u52A1\u6216\u7F51\u7EDC\u4F3C\u4E4E\u51FA\u4E86\u70B9\u95EE\u9898...",disableConfirm:"\u7981\u7528\u78BA\u8A8D",disableOnce:"\u7981\u7528\u4E00\u6B21",disableGlobal:"\u5168\u5C40\u7981\u7528",disableTint:"* \u60A8\u53EF\u4EE5\u5728 {option} \u4E2D\u91CD\u65B0\u555F\u7528\u3002",searchEnhancementNotes:"\u6211\u5011\u767C\u73FE\uFF0C\u4E2D\u6587\u95DC\u9375\u8A5E\u548C\u82F1\u6587\u95DC\u9375\u8A5E\u7684\u65B0\u805E\u7D50\u679C\u6709\u975E\u5E38\u5927\u7684\u4E0D\u540C\uFF0C\u5728\u555F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u96D9\u8A9E\u4FE1\u606F\u589E\u5F37\u529F\u80FD\u5F8C\uFF0C\u6211\u5011\u6703\u5728\u652F\u6301\u7684\u7DB2\u7AD9\uFF08\u8C37\u6B4C\u65B0\u805E\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u95DC\u9375\u8A5E\uFF09\uFF0C\u96EA\u7403\uFF0C\u6771\u65B9\u8CA1\u5BCC\u7DB2\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\uFF09\u81EA\u52D5\u7528\u82F1\u6587\u70BA\u4F60\u641C\u7D22\u540C\u6A23\u7684\u95DC\u9375\u8A5E\u4E26\u5C55\u793A\u5728\u53F3\u5074\u3002\u5982\u679C\u4F60\u4E0D\u9700\u8981\u8A72\u529F\u80FD\u7684\u8A71\uFF0C\u53EF\u4EE5\u9078\u64C7\u7981\u7528\u5B83\u3002",option:"\u9078\u9805",saveSettings:"\u4FDD\u5B58\u8BBE\u7F6E",closeModal:"\u95DC\u9589\u8996\u7A97",enableInputTranslationWithoutTriggerKeyTitle:"\u542F\u7528\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey}\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u4E3A{inputTargetLanguage}",enableInputTranslationWithoutTriggerKeyDescription:"\u5982\u9700\u6307\u5B9A\u76EE\u6807\u8BED\u8A00\uFF0C\u8BF7\u5728\u524D\u9762\u52A0\u4E0A\u8BED\u8A00\u4EE3\u7801\uFF0C\u5982\uFF1Aja \u4F60\u597D\u4E16\u754C",mouseHoverShortcutPlaceholder:"\u5982\uFF1AShift",yearly:"\u5E74\u5EA6\u7E8C\u8A02",quarterly:"\u5B63\u5EA6\u7E8C\u8A02",monthly:"\u6BCF\u6708\u7E8C\u8A02",yearlyForOnce:"\u4E00\u6B21\u6027\u5E74\u5EA6\u5957\u9910",monthlyForOnce:"\u4E00\u6B21\u6027\u6708\u5EA6\u5957\u9910",daily:"\u6BCF\u65E5\u7E8C\u8A02",year:"\u5E74\u5EA6\u7E8C\u8A02",quarter:"\u5B63\u5EA6\u7E8C\u8A02",month:"\u6BCF\u6708\u7E8C\u8A02",day:"\u6BCF\u65E5\u7E8C\u8A02",upgradeToPro:"\u5347\u7D1A\u70BA Pro \u6703\u54E1","popup.openPro":"\u5347\u7D1A\u70BA Pro \u6703\u54E1\u5F8C\u53EF\u4EE5\u66A2\u4EAB DeepL \u548C OpenAI \u7FFB\u8B6F\uFF0C\u9EDE\u6B64\u5347\u7D1A","popup.openProForPro":"\u60A8\u662F Pro \u6703\u54E1\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528 DeepL \u548C OpenAI \u7FFB\u8B6F",currentAccount:"\u7576\u524D\u8CEC\u6236",autoRenewTrialSuffix:'\uFF08\u8A66\u7528\u4E2D\uFF0C<a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">\u7ACB\u523B\u5347\u7D1A\u70BA\u6B63\u5F0F\u6703\u54E1</a>\uFF09',upgradeFromTrialTitle:"\u5347\u7D1A\u70BA\u6B63\u5F0F\u6703\u54E1"};var so={nologin:"Not logged in",login:"Login",manageAccount:"Manage Account",logout:"Logout",curentPlan:"Current Plan",endAt:"Expires",endAuto:"Auto Renew",lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","noSupportTranslate-pdf":"The script is not supported, please use a plugin.","translate-firefox-local-pdf":"Click to upload PDF",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.shortBrandName":"Immersive Translate","browser.brandName":"Immersive Translate: Web Page&PDF Translation","browser.brandDescription":"Bilingual web page translation, also supports PDF translation, bilingual Epub eBook translation, free to use.","browser.toggleTranslatePage":"Toggle Translate Page","browser.toggleTranslateTheWholePage":"Toggle Translate the Whole Page","browser.toggleOnlyTransation":"Toggle Translate and Hide Original Text","browser.toggleTranslateToThePageEndImmediately":"Toggle Translate to the Bottom of the Page Immediately","browser.toggleTranslateTheMainPage":"Toggle Translate the Main Page","browser.openOptionsPage":"Open Settings Page","browser.toggleTranslationMask":"Toggle translation mask style","browser.translateLocalPdfFile":"Translate local PDF File","browser.openEbookViewer":"Read local e-book","browser.openEbookBuilder":"Make Dual EPUB ebook","browser.translateLocalHtmlFile":"Translate HTML/txt File","browser.donateContext":"Sponsor Benefits","browser.translateLocalSubtitleFile":"Translate Subtitle File",confirmResetConfig:"Are you sure you want to reset the settings?",translationLineBreakSettingTitle:"Line break setting",smartLineBreak:"Smart Wrap",alwaysLineBreak:"Always Wrap",isShowContextMenu:"Create right button menu",toggleBeta:"Enable Beta experimental features",betaDescription:"Enable features that are still experimental, and translation services that are in testing. Join the <1>Telegram group</1> to learn more.",translationLineBreakSettingDescription:"The always line break feature is suitable for layouts with less content, making the layout more neat and tidy. (Use smart line breaks for long paragraphs with more content (more than {count} characters) for saving space)",tempTranslateDomainTitle:"Open the translation time temporarily",tempTranslateDomainDescription:"When a page is translated manually, turn it temporarily on as automatic translation",xMinutes:"{count} minutes",disabled:"Disable",changelog:"Change Log",toggleTranslatePageWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide translation display",toggleTranslationMaskWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide the blur effect of the translation",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"Multi-finger touch to show/hide only translation display",addUrlDescription:"The domain name is available and wildcard is supported e.g.: *.google.com, google.com/mail/*, https://www.google.com/*",general:"General",clickToExpandConfig:"Expand current configuration",import:"Import configuration from file",export:"Export to file",toggleDebug:"Print debug logs on the console","fingers.0":"Close","fingers.2":"Two-finger touch","fingers.3":"Three-finger touch","fingers.4":"Four-finger touch","fingers.5":"Five-finger touch",mouseHoldKey:"+ {key} translate this paragraph",mouseHoldKeyAuto:"Translate the paragraph directly",mouseHoldKeyOff:"Do nothing",mouseHoldKeyOther:"Custom shortcut key (open settings)",mouseHoldKeyCustomKey:"{key} translate this paragraph",mouseHoverHoldKey:"Mouse over and press X key to translate paragraph","mouse-translate":"Hover",document:"Document",resetSuccess:"All settings reset successful",resetThisSuccess:"Reset successful",saved:"Saved successfully",successImportConfig:"Configuration imported successfully",goAdvancedSettings:"Go to Advanced Settings Page",goAdvancedInterfaceSettings:"Go to Advanced Custom Settings Page",advanced:"Advanced",advancedDescription:"Normally no settings are needed, keep the default. More personalized settings are provided for professional users only.",developer:"Developer settings",donateCafe:"Pricing","translate to the bottom of the page":"Translate to the bottom of the page immediately after opening the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"Enabled will translate from the top to the bottom of the page immediately after opening. Disable will translate while reading. (Not recommended to enable)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, all areas of the entire web page will be translated. Disabled will use the default smart recognition and translate only the main areas. (Not recommended to enable)","the number of characters to be translated first":"Directly translate the number of characters in front of the page without waiting to scroll to the visible area","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",moreOptions:"Expand more custom settings",translateTheWholePage:"Translate the whole page area",changeToTranslateTheWholePage:"Translate the Whole Page",changeToTranslateTheMainPage:"Translate the Main Content",changeToOnlyTranslationMode:"Show Translation only",changeToDualTranslationMode:"Show Dual Translation",translateToThePageEndImmediately:"Immediately translate to the bottom ",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension version is too old, please upgrade the extension to {minVersion} or a newer version and try to sync again.",badUserscriptBrowser:"The current browser does not correctly implement the interface of the Greasemonkey extension, please use another browser that <1>supports the Greasemonkey extension</1> such as (Firefox Nightly version)",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",needActionForOptions:"(need to set)",translationEngine:"Engine Options",sourceLanguage:"Original language",target:"Target Language",popupSourceLanguage:"Source",popupTarget:"Target",popupService:"Service",forThisSite:"Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",alwaysTranslateSomeSiteOrWildSite:"Always translate this site",alwaysTranslateSomePage:"Always translate this page",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export",import_export_title:"Import/Export Configuration",syncToGoogleDrive:"Sync Now with Google Drive",syncToAccount:"Sync to account",syncToAccountButton:"Sync to account now",syncToAccountDescription:"Uploaded to the logged-in account, the configuration can be synchronized between different devices, and the last modification time shall prevail.",successSyncConfigInAccount:"Successfully synced with account",successSyncConfigToAccount:"Successfully synchronized to account",syncConfigNoUpdate:"Already up to date",previewAllThemes:"Preview all themes","translationTheme.none":"None","translationTheme.grey":"Black Gray","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.solidBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.opacity":"Opacity effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Marker","translationTheme.marker2":"Maker2","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationTheme.nativeDashed":"System Dash Underline","translationTheme.nativeDotted":"System Dotted Underline","translationTheme.nativeUnderline":"System Straight Line Underline","translationTheme.wavy":"Squiggle","translationServices.custom":"Custom API","translationServices.tencent":"Tencent Translator","translationServices.tenAlpha":"Tencent Translator (Alpha)","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Microsoft Translator","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Azure Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.cai":"Caiyun Translation (Alpha)","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.you":"Youdao Translation (Alpha)","translationServices.transmart":"Tencent Smart Translation","translationServices.niu":"Niu Translation","translationServices.papago":"Papago Translation","translationServices.d":"DeeplX (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"Translate page title","always languages":"Always translate the following languages",neverTranslateLanguagesLabel:"Never Translated Languages",neverTranslateTheFollowingLanguagesDescription:"When a paragraph on a page is in one of the following languages, the translation will be skipped",enableUserscriptPagePopup:"Always show Popup windows on the page",enableUserscriptPagePopupDescription:"Three-finger touch to show the Popup.","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"Sites that always use the {theme} translation style",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language",syncToCloud:"Sync to cloud",syncToCloudDescription:"Upload the configuration to the cloud server, and you can synchronize the configuration between different browsers or Tampermonkey scripts, based on the last modification time.",authFail:"Authorization Failed",syncTitle:"Please select a file operation",import_hint:"Import",upload:"Upload",revokeAuth:"Revoke Authorization",uploadFail:"Upload Failed",download:"Download",importSuccess:"Upload Success",importFail:"Import Failed",deleteFail:"Delete Failed",backupToCloud:"Manage backup files manually",create_new_backup:"Add backup node",maxBackupFiles:"Up to{count}different nodes can be backed up. Please delete unneeded nodes",backupToCloudDescription:"Upload or restore backup files manually, up to 3 different backups",successSyncConfig:"Successfully synced with cloud",syncFail:"Synchronization failed",updatedAt:"Updated at {date}",lastSyncedAt:"Last checked at {date}",downloadFail:"Download failed",clickToDownload:"Click to download",aboutLabel:"About - Feedback ","browser.openAboutPage":"About / Feedback/Sponsor",aboutLabelWithoutSponsor:"About - Feedback",aboutIntro:"We hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. You can choose to subscribe to <6>Pro membership</6> to use the out-of-the-box DeepL and OpenAI translation.<br/><br/> You can also follow out <3>Twitter</3>, <4>Telegram Channel</4>, and <5>Email Subscription</5> below to track updates. <br/> <7>Pro members</7> can contact us through the fast customer service email <8>support@immersivetranslate.com</8>.",aboutIntroWithoutSponsor:"The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. ",projectHomepage:"Project Homepage",joinTelegramGroup:"Join our communities for feature discussion",wechatPublicAccount:"Wechat Official Account",wechatCommunities:"Wechat Group",qqCommunities:"QQ Channel",joinTelegramChannel:"Subscribe to our Telegram channel to get the latest updates",feedbackAndJoin:"Feedback",autoSync:"Auto-Time Sync",loadingThemeTitle:"Loading Style",loadingThemeDescription:"Set the style of waiting for the translation to load","loadingTheme.spinner":"Spinning icon","loadingTheme.text":"Static Text... ","loadingTheme.none":"Disabled",developerDescription:"You can click <1>here</1> to see the documentation related to advanced customization","edit border color":"Edit border color",successSyncButNoChange:"The current configuration is consistent with that in the cloud server",customTheme:"Customize colors and sizes","customThemeLabel.borderColor":"Border color","customThemeLabel.borderRadius":"Border Round Corner","customThemeLabel.textColor":"Text color","customThemeLabel.backgroundColor":"Background color","customThemeLabel.zoom":"Font scale (%)","customThemeLabel.opacity":"Text opacity (%)",resetToDefaultColor:"Reset to default colors",resetToDefaultSettings:"Reset to default settings",isTranslateTitle:"Enable translate page title",enableSubtitle:"enableSubtitleTranslation",enableSubtitleDescription:"Enable translations for subtitle areas on sites like youtube",isTranslateTitleDescription:"When enabled, the page title will be translated",enableSearchEnhancement:"Enable Search Enhancement",enableSearchEnhancementDescription:'After enabling, the right sidebar will automatically display "Google News" search results for corresponding English keywords on supported websites (such as Google News, Google Search (partial keywords), Xueqiu, East Money, Futu, Tiger Community).',verifyService:"Verify service",verified:"Successful","field.model":"Model","field.translationEngine":"Translation engine","field.limitPerMinute":"Max requests per minute","field.limitPerSecond":"Max requests per second","field.maxTextLengthPerRequest":"Maximum text length per request","field.maxTextGroupLengthPerRequest":"Maximum number of paragraphs per request","field.apiUrl":"Custom API interface address","field.placeholderDelimiters":"Reserved placeholders","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>Custom interface access</a> requires reference documents","description.limitPerMinute":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next minute. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.limitPerSecond":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next second. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.generalLimitPerSecond":"Requests exceed this limit will be queued until the next seconds.","description.prompt":"Send as a user to OpenAI conversation, where {{text}} indicates the text of the paragraph,{{from}} indicates the language of the paragraph,{{to}} indicates the target language, you can omit {{text}}, if so, it'll be sent as a separated message","description.maxTextLengthPerRequest":"By default multiple paragraphs will be merged to reduce the number of requests, but if the total length of the paragraphs is too long, it may also cause the interface to respond slowly, so you can try to adjust this option to optimize speed","description.systemPrompt":"Send the conversation to OpenAI as a system, where {{text}} represents the text content of the paragraph, {{from}} represents the original language of the paragraph, and {{to}} represents the target language.","field.domain":"Domain","description.domain":"Default is\uFF1Ageneral. Only set up if there is an API console open domain translation, support fields see <1>Here </1>","field.scene":"Scene","description.scene":"Default is\uFF1Ageneral. Only set up if there is an API console open Machine Translation Professional, support fields see<1>Here</1>","field.vocabId":"User dictionary ID","description.vocabId":"Specified dictionary out_id, currently supported in English translation","description.model":"OpenAI's models, such as gpt-3.5-turbo, gpt-4, etc","description.maxTextGroupLengthPerRequest":"The number of paragraphs sent to translation service each time. Sending too many paragraphs to OpenAI at once can slow down the interface.","description.apiUrl":"Please provide a URL with the specific path.",enabledExtension:"Enable extensions",clickToDisableExtension:"Click to disable extension",clickToEnableExtension:"Click to enable the extension",hasBeenDisabled:"Disabled","show password":"Show password",customContent:"Enter customization content",inputOptions:"Writing",mouseHoverOptions:"Mouse Hover",enableInputTranslation:"enhanced input box?",enableInputTranslationDescription:"When enabled, enter {startingKey}{startingKey} direct in the input box and hit{inputTrailingTriggerKeyRepeatTimes}times{trailingKey}, translated into {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:'When enabled, simply enter "Hello World" in the input box, then quickly press {inputTrailingTriggerKeyRepeatTimes} times on {trailingKey}, and it will be translated into the default target language.',inputTargetLanguage:"Set the default target language for the input box",inputTargetLanguageDescription:"The default target language for the translation input box, which is {startingKey}{startingKey} as the default language for triggering words.",inputTargetLanguageDescriptionForNoneKey:"Default target language for translation input box",inputStartingTriggerKeyTitle:"Set the delimiter for translating part of the input box.",inputStartingTriggerKeyDescription:"When you don't need to translate the entire input box, the delimiter allows you to only translate the portion from {startingKey}{startingKey} to the end of the input box. You can also specify a language code, for example: {startingKey}ja means only translating the portion from {startingKey}ja to the end of the input box.",inputStartingTriggerKeyDescriptionForNoneKey:"The current setting is no prefix required, the partial text translation function of the input box cannot be used temporarily.",inputTrailingTriggerKeyTitle:"Select a trigger character to indicate the end of input.",inputTrailingTriggerKeyDescription:"Start the translation by quickly pressing 3 times {trailingKey}.",inputTrailingTriggerKeyTimeout:"Enter the interval time to end the trailing trigger",inputTrailingTriggerKeyTimeoutDescription:"Set the interval time (milliseconds) for the input to end the combo trigger",spaceKey:"<spacekey>",noneKey:"Translate the entire text box without prefixes",inputTranslationBlockUrlsTitle:"Do not enable input box enhancement in the following URL",inputTranslationBlockUrlsDescription:"The input box enhancement will not work in the following URL",clickToSeeQuickDemo:"Click to expand the 30s tutorial video",inputHelperInfo:`Note: We have optimized the system to address an issue where certain characters in Chinese input methods were being converted into Chinese punctuation marks. For instance, when using Sogou Input Method, "/" would be changed to "\u3001". We now recognizes all corresponding Chinese symbols as triggering characters, including "//" and "\u3001\u3001".

Additionally, we support using Chinese aliases of language codes as commands. For example, entering "/Japanense Hello World" will translate the text into Japanese. You can click here to see a list of all supported language codes.`,reloadCurrentPage:"Please refresh the current page before starting translation",noLocalFilePermissionForPDF:"No permission to read local files. Please click the button above and upload the local file.",noPermissionForThisPage:"\u26A0\uFE0F No permission to translate the current page",retryAllParagraphs:"Retry all paragraphs",retryAllButton:"Retry All",errorTooltipTitle:"Click to get the error details",errorModalTitle:"Noops, something went wrong",disableConfirm:"Search Enhancement Settings",disableOnce:"Disable Once",disableGlobal:"Disable Forever",disableTint:"* You can re-enable in {option}.",searchEnhancementNotes:"We have discovered notable disparities in news results between Chinese and English keywords. By activating the immersive translation Bilingual Display Enhancement feature, we will automatically search for equivalent English keywords and display them on the right side of supported websites (e.g., Google News, Google Search (partial keywords), xueqiu, East Money, Futu, Tiger). You can disable this feature if you don't need it.",option:"Settings",saveSettings:"Save",closeModal:"Close",enableInputTranslationWithoutTriggerKeyTitle:"Enable quick press 3 times {trailingKey}, directly translate the entire input box to {inputTargetLanguage}.",enableInputTranslationWithoutTriggerKeyDescription:"To specify the target language, please add a language code at the beginning, such as: ja Hello world",mouseHoverShortcutPlaceholder:"e.g. Shift",deepLProName:"Premium Membership (Recommended)",deepLProDescription:"You can directly use this service",deeplProDescriptionForNormal:"No setup required, available for premium members after login, <1>Upgrade</1>",deepLCustomDescription:"Requires an international credit card, activate at <1>DeepL</1> official site, click to see <2>documentation</2>",deepLCustomName:"Custom Auth Key",chooseProviderLabel:"Choose a service provider",openaiProName:"Premium Membership (Recommended)",openaiProDescription:"The current plan can be used directly",openaiProDescriptionForNormal:"No setup required, available for premium members after login, <1>Upgrade</1>",openaiCustomDescription:"Can be obtained from OpenAI, Azure OpenAI, or other third-party services, <1>Click here to view documentation</1>",openaiCustomName:"Custom API Key",needLoginAction:"(Premium or custom)",goLoginOrAction:"(Premium or go to setting)",yearly:"Annual Renewal",quarterly:"Quarterly Renewal",monthly:"Monthly Renewal",daily:"Daily Renewal",yearlyForOnce:"One-time Annual",monthlyForOnce:"One-time Monthly",profile:"Profile",billing:"Billing",onetime_7day:"7-day Trial Pack",currentPlanDescriptionForFree:"Current plan: Free",currentPlanDescriptionForContinuous:"Current plan: {plan}, will auto-renew on {endAt}",currentPlanDescriptionForAutoRenewCaceling:"Current plan: {plan}, will expire on {endAt} and will not auto-renew",currentPlanDescriptionForOneTime:"Current plan: {plan}, expiring on {endAt}. <1>Upgrade to annual</1> or <2>monthly</2> pro membership",currentYearlyPlanDescriptionForAutoRenewCacelingWithRealPaiedUser:"Current plan: {plan}, will expire on {endAt}, will not be auto-renewed after expiration <br/><1>Manage the renewal plan</1>",currentYearlyPlanDescriptionForAutoRenewCacelingWithAdmin:"Current plan: {plan}, will expire on {endAt}, will not auto-renew after expiration.<br/> <1>Enable consecutive annual plan</1>",upgradePlan:"Click here to upgrade to Pro membership",year:"Annual Renewal",quarter:"Quarterly Renewal",month:"Monthly Renewal",day:"Daily Renewal",upgradeToPro:"Upgrade to Pro","popup.openPro":"Enjoy unrestricted access to DeepL and OpenAI translations after upgrading to Pro Membership. Click here to upgrade","popup.openProForPro":"You are a Pro member, you can directly use DeepL and OpenAI translations",currentAccount:"Account",enableAutoSyncUserSettings:"Enable auto-sync user settings",modalEnableInputTranslationTitle:"Writing Settings",modalEnableInputTranslationDesc:"You have just triggered the immersive translate of the input box by quickly tapping the space key 3 times. The content of the input box will be translated into the default target language. <br /><br /> If this was a mistake, don't worry. You can choose to disable it this time or permanently disable input box translation.",saveAndNotShowAgain:"Save and don't show again",disableInputTranslationTips:"* You can also set other shortcuts in {option}, {learnMore}.",learnMore:"Learn more",continueEnalbeInputTranslation:"Continue to enable input translation",autoRenewTrialSuffix:'(In trial, <a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">Upgrade to paid Pro now</a>)',upgradeFromTrialTitle:"Upgrade to paid Pro"};var Ns=[{code:"zh-CN",messages:oo},{code:"zh-TW",messages:io},{code:"en",messages:so}];var It={};for(let e of Ns)It[e.code]=e.messages;var bt="Immersive Translate",De="immersive-translate";var z="immersiveTranslate";var Op=z+"GoogleAccessToken",Rp=z+"AuthFlow";var Dp=z+"AuthState",Ip=z+"IframeMessage",Fp=z+"WaitForRateLimit",Bp=z+"DocumentMessageAsk",co=z+"DocumentMessageTellThirdParty",$p=z+"showError",uo=z+"DocumentMessageThirdPartyTell",Up=z+"DocumentMessageEventUpload",jp=z+"DocumentMessageHandler",Hp=`${z}Container`,Wp=`${z}SpecifiedContainer`;var Kp=`${z}PageTranslatedStatus`,zp=`${z}PageUrlChanged`,qp=`${z}ReceiveCommand`,Gp=z+"LastUseMouseHoverTime",Vp=z+"LastUseInputTime",Yp=z+"LastUseManualTranslatePageTime",Xp=`${z}PopupReceiveMessage`,Ms="immersivetranslate.com",Os="config.immersivetranslate.com",Jp=`https://${Ms}/`,Qp=`https://${Os}/default_config.json`,Zp=`${z}Mark`;var eg=`${z}Root`,tg=`data-${De}-effect`,ng=`data-${De}-translation-element-mark`,rg=`${z}TranslationElementMark`,ag=`${z}TranslatedMark`,og=`${z}ParagraphId`,ig=`${z}LoadingId`,sg=`data-${De}-loading-id`,lg=`${z}ErrorId`,cg=`data-${De}-error-id`,ug=`${z}AtomicBlockMark`,dg=`${z}ExcludeMark`,pg=`data-${De}-exclude-mark`,gg=`${z}StayOriginalMark`,mg=`${z}PreWhitespaceMark`,fg=`${z}InlineMark`,hg=`${z}BlockMark`,bg=`${z}Left`,yg=`${z}Right`,Tg=`${z}Width`,vg=`${z}Height`,xg=`${z}Top`,wg=`${z}FontSize`;var _g=`${z}GlobalStyleMark`,Rs=["@","#"];var Sg=`${De}-target-wrapper`,Ag=`${De}-pdf-target-container`,kg=`${De}-target-inner`,Eg=`${De}-source-wrapper`,Cg=`${De}-target-translation-block-wrapper`,Pg=`${De}-root-translation-theme`,Lg=`${z}RootTranslationTheme`,Ng=`${De}-target-translation-vertical-block-wrapper`,Mg=`${De}-target-translation-pdf-block-wrapper`,Og=`${De}-target-translation-pre-whitespace`,Rg=`${De}-target-translation-inline-wrapper`;var lo=[{type:"select",name:"codename",labelKey:"field.translationEngine",default:"youdao",required:!1,options:[{label:"translationServices.google",value:"google"},{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.aws",value:"aws"}]}],Dg={bing:{name:"\u5FAE\u8F6F\u7FFB\u8BD1",homepage:"https://www.bing.com/translator"},google:{name:"Google",homepage:"https://translate.google.com/"},deepl:{name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://immersivetranslate.com/docs/services/deepL/",providers:[{name:"pro",nameKey:"deepLProName",descriptionKey:"deepLProDescription",descriptionKeyForNormal:"deeplProDescriptionForNormal",descriptionLink1:"https://immersivetranslate.com/pricing"},{name:"custom",nameKey:"deepLCustomName",descriptionKey:"deepLCustomDescription",descriptionLink1:"https://www.deepl.com/translator",descriptionLink2:"https://immersivetranslate.com/docs/services/deepL/"}],allProps:[{name:"authKey",providers:["custom"],label:"Auth Key",required:!0,type:"password"}]},openai:{name:"Open AI",homepage:"https://openai.com/api/",docUrl:"https://immersivetranslate.com/docs/services/openai/",providers:[{name:"pro",nameKey:"openaiProName",descriptionKey:"openaiProDescription",descriptionKeyForNormal:"openaiProDescriptionForNormal",descriptionLink1:"https://immersivetranslate.com/pricing"},{name:"custom",nameKey:"openaiCustomName",descriptionKey:"openaiCustomDescription",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/"}],allProps:[{name:"APIKEY",providers:["custom"],required:!0,type:"password"},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!1,type:"openai-model-select",default:"gpt-3.5-turbo-0613",options:[{providers:["custom","pro"],label:"gpt-3.5-turbo",value:"gpt-3.5-turbo"},{providers:["custom","pro"],label:"gpt-3.5-turbo-0613",value:"gpt-3.5-turbo-0613"},{providers:["custom"],label:"gpt-4",value:"gpt-4"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.limitPerSecond",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/",type:"number",default:10},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.openai.com/v1/chat/completions",descriptionKey:"description.apiUrl",optional:!0},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"text",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`Translate the text to {{to}}, please do not explain any sentences, just translate or leave them as they are.:

{{text}}`,optional:!0}]},transmart:{name:"Transmart",homepage:"https://transmart.qq.com/"},youdao:{name:"Youdao",homepage:"https://youdao.com/",docUrl:"https://immersivetranslate.com/docs/services/youdao/",allProps:[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:200,optional:!0},{name:"domain",required:!1,labelKey:"field.domain",descriptionKey:"description.domain",descriptionLink1:"https://fanyi.youdao.com/openapi/",type:"text",default:"general",optional:!0},{name:"vocabId",required:!1,labelKey:"field.vocabId",descriptionKey:"description.vocabId",type:"text",default:"",optional:!0}]},tencent:{name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://immersivetranslate.com/docs/services/tencent/",allProps:[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]},aliyun:{name:"Aliyun",homepage:"https://translate.alibaba.com/",docUrl:"https://immersivetranslate.com/docs/services/aliyun/",allProps:[{name:"AccessKeyID",required:!0,type:"text"},{name:"AccessKeySecret",required:!0,type:"password"},{name:"scene",labelKey:"field.scene",descriptionKey:"description.scene",descriptionLink1:"https://help.aliyun.com/document_detail/158267.html",required:!1,optional:!0,type:"text",default:"general"}]},azure:{name:"azure",homepage:"https://learn.microsoft.com/en-us/azure/cognitive-services/translator/text-translation-overview",docUrl:"https://immersivetranslate.com/docs/services/azure/",allProps:[{name:"region",required:!0,default:"eastasia",type:"text"},{name:"APIKEY",required:!0,type:"password"}]},papago:{name:"Papago",homepage:"https://translate.google.com/",canary:!0},baidu:{name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://immersivetranslate.com/docs/services/baidu/",allProps:[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:1,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0},{name:"domain",required:!1,labelKey:"field.domain",descriptionKey:"description.domain",descriptionLink1:"https://fanyi.youdao.com/openapi/",type:"text",default:"general",optional:!0}]},volc:{name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://immersivetranslate.com/docs/services/volcano/",allProps:[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0}]},caiyun:{name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://immersivetranslate.com/docs/services/caiyun/",allProps:[{name:"token",required:!0,type:"password"}]},cai:{name:"Cai",homepage:"https://fanyi.caiyunapp.com/",alpha:!0},custom:{name:"Custom",beta:!0,homepage:"https://immersivetranslate.com/docs/services/custom/",titleKey:"description.custom",allProps:[{name:"url",label:"API URL",required:!0,type:"text"},{name:"langs",required:!1,labelKey:"field.langs",type:"textarea",default:"zh-CN,en",optional:!0},{name:"placeholderDelimiters",required:!1,labelKey:"field.placeholderDelimiters",type:"text",default:Rs,optional:!0},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0}]},mock:{name:"Mock",homepage:"https://www.google.com"},mock2:{name:"Mock2",homepage:"https://www.google.com"},tenAlpha:{name:"TenAlpha",homepage:"https://fanyi.qq.com/",alpha:!0},you:{name:"You",alpha:!0,homepage:"https://youdao.com/"},openl:{name:"Openl",homepage:"https://openl.club/",docUrl:"https://immersivetranslate.com/docs/services/openL/",allProps:[...lo,{type:"password",name:"apikey",required:!0}],props:lo},volcAlpha:{name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},d:{name:"D () ",alpha:!0,homepage:"https://www.deepl.com/translator"},dpro:{name:"DPro (Canary) ",canary:!0,homepage:"https://www.deepl.com/translator"},deeplx:{name:"DeepLX (Beta)",beta:!0,homepage:"https://www.deepl.com/translator",allProps:[{name:"url",label:"API URL",required:!0,type:"text"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0}]},niu:{name:"niutrans",homepage:"https://niutrans.com/",docUrl:"https://immersivetranslate.com/docs/services/niu",allProps:[{name:"APIKEY",required:!0,type:"password"}]}},Ig={type:z+"ChildFrameToRootFrameIdentifier"};var Fg=ft()||ht()?"https://api2.immersivetranslate.com":"https://test-api2.immersivetranslate.com",Bg=ft()||ht()?"https://immersivetranslate.com/accounts/login?from=plugin":"https://test.immersivetranslate.com/accounts/login?from=plugin",Ds=ft()||ht()?"https://immersivetranslate.com/profile":"https://test.immersivetranslate.com/profile",or=ft()||ht()?"https://immersivetranslate.com/pricing":"https://test.immersivetranslate.com/pricing",Is=ft()||ht()?"https://immersivetranslate.com/topup?type=open_ai&":"https://test.immersivetranslate.com/topup?type=open_ai&",Fs=ft()||ht()?"https://immersivetranslate.com/topup?type=deepl&":"https://test.immersivetranslate.com/topup?type=deepl&",$g=or+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_more",Ug=or+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_footer",jg=or+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal",Hg=Is+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",Wg=Fs+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",Kg=Ds+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal&upgradeFromTrial=true";var ln=0,cn=0,ct=0;function go(e){let{data:t}=e,{parsed:r,file:n}=t,o=n.name.split(".").pop(),i=[],c={},[l,s]=Ke(!1),[u,m]=Ke("dual"),[p,g]=Ke("auto"),[h,A]=Ke(0),[S,f]=Ke(0);wt(()=>{document.addEventListener(co,R=>{let{detail:B}=R;if(B)try{let _=JSON.parse(B);if(_&&_.type&&_.payload)if(_.type==="retryFailedParagraphsStart")ct=0,f(0);else if(_.type==="targetLanguage")g(_.payload.targetLanguage);else if(_.type==="paragraphTranslated"){let{ok:M}=_.payload;if(M?cn++:ct++,ln){let P=cn,K=cn+ct,ae=P/ln*100,X=Math.floor(ae),ie=Math.floor(K/ln*100);X>100&&(X=100),ie>100&&(ie=100),A(X),ie===100&&ct>0&&f(ct)}}else _.type==="totalParagraphsCount"?_.payload.totalParagraphsCount&&(ln=_.payload.totalParagraphsCount):_.type==="translateStart"?(cn=0,ct=0):_.type==="restorePage"&&(A(0),f(0))}catch{}}),document.dispatchEvent(new CustomEvent("immersiveTranslateEbookLoaded"))},[]);for(let R=0;R<r.length;R++){let B=r[R];if(B.type==="caption"){let{start:_,end:M}=B;if(c[`${_}-${M}`]===void 0){let P=i.length;c[`${_}-${M}`]=P;let K=B.text;i.push({source:B})}}}let v=R=>{R.preventDefault(),document.dispatchEvent(new CustomEvent(uo,{detail:JSON.stringify({type:"retryFailedParagraphs"})}))},k=async(R,B)=>{s(!0),B.preventDefault();let _=R==="dual";var M={format:o,verbose:!0};let P=[],K={};for(let te=0;te<r.length;te++){let me=r[te],{type:Le}=me;if(Le!=="caption")P.push(me);else{let se=me.index||te;if(!K[se]){K[se]=!0;let ne=document.querySelector(`.source-text[data-start="${me.start}"][data-end="${me.end}"]`);_&&P.push({...me,text:ne?.textContent||""});let Ne=document.querySelector(`.target-text[data-start="${me.start}"][data-end="${me.end}"]`);if(Ne){let Z=Ne.textContent;Z&&P.push({...me,text:Z})}}}}var ae=zt.build(P,M);let X=new Blob([ae],{type:"text/plain"}),ie=n.name,ce=ie.lastIndexOf(".");ie=ie.substring(0,ce)+"."+p+"-"+R+ie.substring(ce),await Dt.saveAs(X,ie),s(!1)},H=R=>k.bind(null,R);return Y("main",{children:[Y("h3",{style:{marginBottom:0},children:["\u6B63\u5728\u7528"," ",Y("a",{class:"notranslate contrast",href:"https://immersivetranslate.com/",target:"_blank",children:"\u6C89\u6D78\u5F0F\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55"}),"\xA0\u7FFB\u8BD1 ",n.name,Y("span",{id:"progress-number",children:h?` ${h}%`:""})]}),Y("div",{children:ct?Y("span",{children:[ct," failed(\u5931\u8D25)."," ",Y("a",{href:"#",class:"link",onClick:v,children:"Retry failed paragraphs"})]}):null}),Y("nav",{children:Y("ul",{children:[Y("li",{children:Y("a",{href:"#",onClick:R=>{R.preventDefault(),globalThis.location.reload()},children:"New"})}),Y("li",{children:Y("a",{href:"#","aria-busy":l,onClick:H("dual"),children:"Export Dual (\u5BFC\u51FA\u53CC\u8BED\u5B57\u5E55)"})}),Y("li",{children:Y("a",{href:"#","aria-busy":l,onClick:H("translation"),children:"Export Translation Only(\u5BFC\u51FA\u4EC5\u8BD1\u6587)"})})]})}),Y("p",{style:{fontSize:14,color:"#666"},children:"Tips: \u624B\u52A8\u70B9\u51FB\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u6269\u5C55\u7684\u7FFB\u8BD1\u6309\u94AE\u5F00\u59CB\u7FFB\u8BD1"}),Y("table",{children:[Y("thead",{children:Y("tr",{children:[Y("th",{children:"Start"}),Y("th",{children:"End"}),Y("th",{children:"Source"}),Y("th",{children:"Target(\u53EF\u7F16\u8F91)"})]})}),Y("tbody",{children:i.map((R,B)=>{let{source:_,target:M}=R;return Y("tr",{children:[Y("td",{children:po(_.start)}),Y("td",{children:po(_.end)}),Y("td",{children:Y("span",{"data-start":_.start,"data-end":_.end,class:"source-text  notranslate",children:_.text})}),Y("td",{children:Y("span",{contentEditable:!0,"data-start":_.start,"data-end":_.end,spellcheck:!1,class:"target-text notranslate input-border",children:M?.text||""})})]},B)})})]})]})}function po(e){let t=e/1e3,r=t/60,n=r/60,a=t%60,o=r%60,i=n%60;return`${ir(Math.floor(i))}:${ir(Math.floor(o))}:${ir(Math.floor(a))}`}function ir(e){return e<10?"0"+e:e}var mo={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED","languages.wyw":"\u6587\u8A00\u6587","languages.<all>":"\u5168\u90E8"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E","languages.wyw":"\u6587\u8A00\u6587","languages.<all>":"\u5168\u90E8"}},Bs={...It,"zh-CN":{...mo["zh-CN"],...It["zh-CN"]},"zh-TW":{...mo["zh-TW"],...It["zh-TW"]}},fo=Bs;function Ft(){let e,t="pending",r=new Promise((n,a)=>{e={async resolve(o){await o,t="fulfilled",n(o)},reject(o){t="rejected",a(o)}}});return Object.defineProperty(r,"state",{get:()=>t}),Object.assign(r,e)}var ho=class{#e=0;#t=[];#n=[];#r=Ft();add(t){++this.#e,this.#a(t[Symbol.asyncIterator]())}async#a(t){try{let{value:r,done:n}=await t.next();n?--this.#e:this.#t.push({iterator:t,value:r})}catch(r){this.#n.push(r)}this.#r.resolve()}async*iterate(){for(;this.#e>0;){await this.#r;for(let t=0;t<this.#t.length;t++){let{iterator:r,value:n}=this.#t[t];yield n,this.#a(r)}if(this.#n.length){for(let t of this.#n)throw t;this.#n.length=0}this.#t.length=0,this.#r=Ft()}}[Symbol.asyncIterator](){return this.iterate()}};var qe={};di(qe,{bgBlack:()=>dl,bgBlue:()=>fl,bgBrightBlack:()=>Tl,bgBrightBlue:()=>_l,bgBrightCyan:()=>Al,bgBrightGreen:()=>xl,bgBrightMagenta:()=>Sl,bgBrightRed:()=>vl,bgBrightWhite:()=>kl,bgBrightYellow:()=>wl,bgCyan:()=>bl,bgGreen:()=>gl,bgMagenta:()=>hl,bgRed:()=>pl,bgRgb24:()=>Ll,bgRgb8:()=>Cl,bgWhite:()=>yl,bgYellow:()=>ml,black:()=>Ys,blue:()=>Zs,bold:()=>Hs,brightBlack:()=>To,brightBlue:()=>sl,brightCyan:()=>cl,brightGreen:()=>ol,brightMagenta:()=>ll,brightRed:()=>al,brightWhite:()=>ul,brightYellow:()=>il,cyan:()=>tl,dim:()=>Ws,getColorEnabled:()=>Us,gray:()=>rl,green:()=>Js,hidden:()=>Gs,inverse:()=>qs,italic:()=>Ks,magenta:()=>el,red:()=>Xs,reset:()=>js,rgb24:()=>Pl,rgb8:()=>El,setColorEnabled:()=>$s,strikethrough:()=>Vs,stripColor:()=>Ml,underline:()=>zs,white:()=>nl,yellow:()=>Qs});var{Deno:bo}=globalThis,yo=typeof bo?.noColor=="boolean"?bo.noColor:!0,sr=!yo;function $s(e){yo||(sr=e)}function Us(){return sr}function U(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function j(e,t){return sr?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function js(e){return j(e,U([0],0))}function Hs(e){return j(e,U([1],22))}function Ws(e){return j(e,U([2],22))}function Ks(e){return j(e,U([3],23))}function zs(e){return j(e,U([4],24))}function qs(e){return j(e,U([7],27))}function Gs(e){return j(e,U([8],28))}function Vs(e){return j(e,U([9],29))}function Ys(e){return j(e,U([30],39))}function Xs(e){return j(e,U([31],39))}function Js(e){return j(e,U([32],39))}function Qs(e){return j(e,U([33],39))}function Zs(e){return j(e,U([34],39))}function el(e){return j(e,U([35],39))}function tl(e){return j(e,U([36],39))}function nl(e){return j(e,U([37],39))}function rl(e){return To(e)}function To(e){return j(e,U([90],39))}function al(e){return j(e,U([91],39))}function ol(e){return j(e,U([92],39))}function il(e){return j(e,U([93],39))}function sl(e){return j(e,U([94],39))}function ll(e){return j(e,U([95],39))}function cl(e){return j(e,U([96],39))}function ul(e){return j(e,U([97],39))}function dl(e){return j(e,U([40],49))}function pl(e){return j(e,U([41],49))}function gl(e){return j(e,U([42],49))}function ml(e){return j(e,U([43],49))}function fl(e){return j(e,U([44],49))}function hl(e){return j(e,U([45],49))}function bl(e){return j(e,U([46],49))}function yl(e){return j(e,U([47],49))}function Tl(e){return j(e,U([100],49))}function vl(e){return j(e,U([101],49))}function xl(e){return j(e,U([102],49))}function wl(e){return j(e,U([103],49))}function _l(e){return j(e,U([104],49))}function Sl(e){return j(e,U([105],49))}function Al(e){return j(e,U([106],49))}function kl(e){return j(e,U([107],49))}function ut(e,t=255,r=0){return Math.trunc(Math.max(Math.min(e,t),r))}function El(e,t){return j(e,U([38,5,ut(t)],39))}function Cl(e,t){return j(e,U([48,5,ut(t)],49))}function Pl(e,t){return typeof t=="number"?j(e,U([38,2,t>>16&255,t>>8&255,t&255],39)):j(e,U([38,2,ut(t.r),ut(t.g),ut(t.b)],39))}function Ll(e,t){return typeof t=="number"?j(e,U([48,2,t>>16&255,t>>8&255,t&255],49)):j(e,U([48,2,ut(t.r),ut(t.g),ut(t.b)],49))}var Nl=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function Ml(e){return e.replace(Nl,"")}var Xm=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var un=globalThis||(typeof window<"u"?window:self),Rl=Object.create,cr=Object.defineProperty,Dl=Object.getOwnPropertyDescriptor,Il=Object.getOwnPropertyNames,Fl=Object.getPrototypeOf,Bl=Object.prototype.hasOwnProperty,$l=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Ul=(e,t)=>{for(var r in t)cr(e,r,{get:t[r],enumerable:!0})},lr=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Il(t))!Bl.call(e,a)&&a!==r&&cr(e,a,{get:()=>t[a],enumerable:!(n=Dl(t,a))||n.enumerable});return e},jl=(e,t,r)=>(lr(e,t,"default"),r&&lr(r,t,"default")),xo=(e,t,r)=>(r=e!=null?Rl(Fl(e)):{},lr(t||!e||!e.__esModule?cr(r,"default",{value:e,enumerable:!0}):r,e)),wo=$l((e,t)=>{var r="Expected a function",n=NaN,a="[object Symbol]",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,u=typeof un=="object"&&un&&un.Object===Object&&un,m=typeof self=="object"&&self&&self.Object===Object&&self,p=u||m||Function("return this")(),g=Object.prototype,h=g.toString,A=Math.max,S=Math.min,f=function(){return p.Date.now()};function v(M,P,K){var ae,X,ie,ce,te,me,Le=0,se=!1,ne=!1,Ne=!0;if(typeof M!="function")throw new TypeError(r);P=_(P)||0,H(K)&&(se=!!K.leading,ne="maxWait"in K,ie=ne?A(_(K.maxWait)||0,P):ie,Ne="trailing"in K?!!K.trailing:Ne);function Z(D){var F=ae,q=X;return ae=X=void 0,Le=D,ce=M.apply(q,F),ce}function b(D){return Le=D,te=setTimeout(V,P),se?Z(D):ce}function x(D){var F=D-me,q=D-Le,J=P-F;return ne?S(J,ie-q):J}function N(D){var F=D-me,q=D-Le;return me===void 0||F>=P||F<0||ne&&q>=ie}function V(){var D=f();if(N(D))return I(D);te=setTimeout(V,x(D))}function I(D){return te=void 0,Ne&&ae?Z(D):(ae=X=void 0,ce)}function le(){te!==void 0&&clearTimeout(te),Le=0,ae=me=X=te=void 0}function ge(){return te===void 0?ce:I(f())}function ue(){var D=f(),F=N(D);if(ae=arguments,X=this,me=D,F){if(te===void 0)return b(me);if(ne)return te=setTimeout(V,P),Z(me)}return te===void 0&&(te=setTimeout(V,P)),ce}return ue.cancel=le,ue.flush=ge,ue}function k(M,P,K){var ae=!0,X=!0;if(typeof M!="function")throw new TypeError(r);return H(K)&&(ae="leading"in K?!!K.leading:ae,X="trailing"in K?!!K.trailing:X),v(M,P,{leading:ae,maxWait:P,trailing:X})}function H(M){var P=typeof M;return!!M&&(P=="object"||P=="function")}function R(M){return!!M&&typeof M=="object"}function B(M){return typeof M=="symbol"||R(M)&&h.call(M)==a}function _(M){if(typeof M=="number")return M;if(B(M))return n;if(H(M)){var P=typeof M.valueOf=="function"?M.valueOf():M;M=H(P)?P+"":P}if(typeof M!="string")return M===0?M:+M;M=M.replace(o,"");var K=c.test(M);return K||l.test(M)?s(M.slice(2),K?2:8):i.test(M)?n:+M}t.exports=k}),_o={};Ul(_o,{default:()=>ur});var Hl=xo(wo());jl(_o,xo(wo()));var{default:vo,...Wl}=Hl,ur=vo!==void 0?vo:Wl;var Kl=Object.create,pr=Object.defineProperty,zl=Object.getOwnPropertyDescriptor,ql=Object.getOwnPropertyNames,Gl=Object.getPrototypeOf,Vl=Object.prototype.hasOwnProperty,Yl=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Xl=(e,t)=>{for(var r in t)pr(e,r,{get:t[r],enumerable:!0})},dr=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of ql(t))!Vl.call(e,a)&&a!==r&&pr(e,a,{get:()=>t[a],enumerable:!(n=zl(t,a))||n.enumerable});return e},Jl=(e,t,r)=>(dr(e,t,"default"),r&&dr(r,t,"default")),Ao=(e,t,r)=>(r=e!=null?Kl(Gl(e)):{},dr(t||!e||!e.__esModule?pr(r,"default",{value:e,enumerable:!0}):r,e)),ko=Yl((e,t)=>{(function(r,n){typeof e=="object"&&typeof t=="object"?t.exports=n():typeof define=="function"&&define.amd?define([],n):typeof e=="object"?e.notie=n():r.notie=n()})(e,function(){return function(r){function n(o){if(a[o])return a[o].exports;var i=a[o]={i:o,l:!1,exports:{}};return r[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var a={};return n.m=r,n.c=a,n.i=function(o){return o},n.d=function(o,i,c){n.o(o,i)||Object.defineProperty(o,i,{configurable:!1,enumerable:!0,get:c})},n.n=function(o){var i=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(i,"a",i),i},n.o=function(o,i){return Object.prototype.hasOwnProperty.call(o,i)},n.p="",n(n.s=1)}([function(r,n){r.exports=function(a){return a.webpackPolyfill||(a.deprecate=function(){},a.paths=[],a.children||(a.children=[]),Object.defineProperty(a,"loaded",{enumerable:!0,get:function(){return a.l}}),Object.defineProperty(a,"id",{enumerable:!0,get:function(){return a.i}}),a.webpackPolyfill=1),a}},function(r,n,a){"use strict";(function(o){var i,c,l,s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u};(function(u,m){s(n)==="object"&&s(o)==="object"?o.exports=m():(c=[],i=m,l=typeof i=="function"?i.apply(n,c):i,l!==void 0&&(o.exports=l))})(void 0,function(){return function(u){function m(g){if(p[g])return p[g].exports;var h=p[g]={i:g,l:!1,exports:{}};return u[g].call(h.exports,h,h.exports,m),h.l=!0,h.exports}var p={};return m.m=u,m.c=p,m.i=function(g){return g},m.d=function(g,h,A){m.o(g,h)||Object.defineProperty(g,h,{configurable:!1,enumerable:!0,get:A})},m.n=function(g){var h=g&&g.__esModule?function(){return g.default}:function(){return g};return m.d(h,"a",h),h},m.o=function(g,h){return Object.prototype.hasOwnProperty.call(g,h)},m.p="",m(m.s=0)}([function(u,m,p){function g(b,x){var N={};for(var V in b)x.indexOf(V)>=0||Object.prototype.hasOwnProperty.call(b,V)&&(N[V]=b[V]);return N}Object.defineProperty(m,"__esModule",{value:!0});var h=typeof Symbol=="function"&&s(Symbol.iterator)==="symbol"?function(b){return typeof b>"u"?"undefined":s(b)}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b>"u"?"undefined":s(b)},A=Object.assign||function(b){for(var x=1;x<arguments.length;x++){var N=arguments[x];for(var V in N)Object.prototype.hasOwnProperty.call(N,V)&&(b[V]=N[V])}return b},S={top:"top",bottom:"bottom"},f={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:S.top,force:S.top,confirm:S.top,input:S.top,select:S.bottom,date:S.top}},v=m.setOptions=function(b){f=A({},f,b,{classes:A({},f.classes,b.classes),ids:A({},f.ids,b.ids),positions:A({},f.positions,b.positions)})},k=function(){return new Promise(function(b){return setTimeout(b,0)})},H=function(b){return new Promise(function(x){return setTimeout(x,1e3*b)})},R=function(){document.activeElement&&document.activeElement.blur()},B=function(){var b="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(x){var N=16*Math.random()|0,V=x==="x"?N:3&N|8;return V.toString(16)});return"notie-"+b},_={1:f.classes.backgroundSuccess,success:f.classes.backgroundSuccess,2:f.classes.backgroundWarning,warning:f.classes.backgroundWarning,3:f.classes.backgroundError,error:f.classes.backgroundError,4:f.classes.backgroundInfo,info:f.classes.backgroundInfo,5:f.classes.backgroundNeutral,neutral:f.classes.backgroundNeutral},M=function(){return f.transitionSelector+" "+f.transitionDuration+"s "+f.transitionCurve},P=function(b){return b.keyCode===13},K=function(b){return b.keyCode===27},ae=function(b,x){b.classList.add(f.classes.container),b.style[x]="-10000px",document.body.appendChild(b),b.style[x]="-"+b.offsetHeight+"px",b.listener&&window.addEventListener("keydown",b.listener),k().then(function(){b.style.transition=M(),b.style[x]=0})},X=function(b,x){var N=document.getElementById(b);N&&(N.style[x]="-"+N.offsetHeight+"px",N.listener&&window.removeEventListener("keydown",N.listener),H(f.transitionDuration).then(function(){N.parentNode&&N.parentNode.removeChild(N)}))},ie=function(b,x){var N=document.createElement("div");N.id=f.ids.overlay,N.classList.add(f.classes.overlay),N.classList.add(f.classes.backgroundOverlay),N.style.opacity=0,b&&f.overlayClickDismiss&&(N.onclick=function(){X(b.id,x),ce()}),document.body.appendChild(N),k().then(function(){N.style.transition=M(),N.style.opacity=f.overlayOpacity})},ce=function(){var b=document.getElementById(f.ids.overlay);b.style.opacity=0,H(f.transitionDuration).then(function(){b.parentNode&&b.parentNode.removeChild(b)})},te=m.hideAlerts=function(b){var x=document.getElementsByClassName(f.classes.alert);if(x.length){for(var N=0;N<x.length;N++){var V=x[N];X(V.id,V.position)}b&&H(f.transitionDuration).then(function(){return b()})}},me=m.alert=function(b){var x=b.type,N=x===void 0?4:x,V=b.text,I=b.time,le=I===void 0?f.alertTime:I,ge=b.stay,ue=ge!==void 0&&ge,D=b.position,F=D===void 0?f.positions.alert||F.top:D;R(),te();var q=document.createElement("div"),J=B();q.id=J,q.position=F,q.classList.add(f.classes.textbox),q.classList.add(_[N]),q.classList.add(f.classes.alert),q.innerHTML='<div class="'+f.classes.textboxInner+'">'+V+"</div>",q.onclick=function(){return X(J,F)},q.listener=function(L){(P(L)||K(L))&&te()},ae(q,F),le&&le<1&&(le=1),!ue&&le&&H(le).then(function(){return X(J,F)})},Le=m.force=function(b,x){var N=b.type,V=N===void 0?5:N,I=b.text,le=b.buttonText,ge=le===void 0?"OK":le,ue=b.callback,D=b.position,F=D===void 0?f.positions.force||F.top:D;R(),te();var q=document.createElement("div"),J=B();q.id=J;var L=document.createElement("div");L.classList.add(f.classes.textbox),L.classList.add(f.classes.backgroundInfo),L.innerHTML='<div class="'+f.classes.textboxInner+'">'+I+"</div>";var $=document.createElement("div");$.classList.add(f.classes.button),$.classList.add(_[V]),$.innerHTML=ge,$.onclick=function(){X(J,F),ce(),ue?ue():x&&x()},q.appendChild(L),q.appendChild($),q.listener=function(de){P(de)&&$.click()},ae(q,F),ie()},se=m.confirm=function(b,x,N){var V=b.text,I=b.submitText,le=I===void 0?"Yes":I,ge=b.cancelText,ue=ge===void 0?"Cancel":ge,D=b.submitCallback,F=b.cancelCallback,q=b.position,J=q===void 0?f.positions.confirm||J.top:q;R(),te();var L=document.createElement("div"),$=B();L.id=$;var de=document.createElement("div");de.classList.add(f.classes.textbox),de.classList.add(f.classes.backgroundInfo),de.innerHTML='<div class="'+f.classes.textboxInner+'">'+V+"</div>";var ee=document.createElement("div");ee.classList.add(f.classes.button),ee.classList.add(f.classes.elementHalf),ee.classList.add(f.classes.backgroundSuccess),ee.innerHTML=le,ee.onclick=function(){X($,J),ce(),D?D():x&&x()};var O=document.createElement("div");O.classList.add(f.classes.button),O.classList.add(f.classes.elementHalf),O.classList.add(f.classes.backgroundError),O.innerHTML=ue,O.onclick=function(){X($,J),ce(),F?F():N&&N()},L.appendChild(de),L.appendChild(ee),L.appendChild(O),L.listener=function(fe){P(fe)?ee.click():K(fe)&&O.click()},ae(L,J),ie(L,J)},ne=function(b,x,N){var V=b.text,I=b.submitText,le=I===void 0?"Submit":I,ge=b.cancelText,ue=ge===void 0?"Cancel":ge,D=b.submitCallback,F=b.cancelCallback,q=b.position,J=q===void 0?f.positions.input||J.top:q,L=g(b,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);R(),te();var $=document.createElement("div"),de=B();$.id=de;var ee=document.createElement("div");ee.classList.add(f.classes.textbox),ee.classList.add(f.classes.backgroundInfo),ee.innerHTML='<div class="'+f.classes.textboxInner+'">'+V+"</div>";var O=document.createElement("input");O.classList.add(f.classes.inputField),O.setAttribute("autocapitalize",L.autocapitalize||"none"),O.setAttribute("autocomplete",L.autocomplete||"off"),O.setAttribute("autocorrect",L.autocorrect||"off"),O.setAttribute("autofocus",L.autofocus||"true"),O.setAttribute("inputmode",L.inputmode||"verbatim"),O.setAttribute("max",L.max||""),O.setAttribute("maxlength",L.maxlength||""),O.setAttribute("min",L.min||""),O.setAttribute("minlength",L.minlength||""),O.setAttribute("placeholder",L.placeholder||""),O.setAttribute("spellcheck",L.spellcheck||"default"),O.setAttribute("step",L.step||"any"),O.setAttribute("type",L.type||"text"),O.value=L.value||"",L.allowed&&(O.oninput=function(){var be=void 0;if(Array.isArray(L.allowed)){for(var ye="",Me=L.allowed,We=0;We<Me.length;We++)Me[We]==="an"?ye+="0-9a-zA-Z":Me[We]==="a"?ye+="a-zA-Z":Me[We]==="n"&&(ye+="0-9"),Me[We]==="s"&&(ye+=" ");be=new RegExp("[^"+ye+"]","g")}else h(L.allowed)==="object"&&(be=L.allowed);O.value=O.value.replace(be,"")});var fe=document.createElement("div");fe.classList.add(f.classes.button),fe.classList.add(f.classes.elementHalf),fe.classList.add(f.classes.backgroundSuccess),fe.innerHTML=le,fe.onclick=function(){X(de,J),ce(),D?D(O.value):x&&x(O.value)};var ve=document.createElement("div");ve.classList.add(f.classes.button),ve.classList.add(f.classes.elementHalf),ve.classList.add(f.classes.backgroundError),ve.innerHTML=ue,ve.onclick=function(){X(de,J),ce(),F?F(O.value):N&&N(O.value)},$.appendChild(ee),$.appendChild(O),$.appendChild(fe),$.appendChild(ve),$.listener=function(be){P(be)?fe.click():K(be)&&ve.click()},ae($,J),O.focus(),ie($,J)};m.input=ne;var Ne=m.select=function(b,x){var N=b.text,V=b.cancelText,I=V===void 0?"Cancel":V,le=b.cancelCallback,ge=b.choices,ue=b.position,D=ue===void 0?f.positions.select||D.top:ue;R(),te();var F=document.createElement("div"),q=B();F.id=q;var J=document.createElement("div");J.classList.add(f.classes.textbox),J.classList.add(f.classes.backgroundInfo),J.innerHTML='<div class="'+f.classes.textboxInner+'">'+N+"</div>",F.appendChild(J),ge.forEach(function($,de){var ee=$.type,O=ee===void 0?1:ee,fe=$.text,ve=$.handler,be=document.createElement("div");be.classList.add(_[O]),be.classList.add(f.classes.button),be.classList.add(f.classes.selectChoice);var ye=ge[de+1];ye&&!ye.type&&(ye.type=1),ye&&ye.type===O&&be.classList.add(f.classes.selectChoiceRepeated),be.innerHTML=fe,be.onclick=function(){X(q,D),ce(),ve()},F.appendChild(be)});var L=document.createElement("div");L.classList.add(f.classes.backgroundNeutral),L.classList.add(f.classes.button),L.innerHTML=I,L.onclick=function(){X(q,D),ce(),le?le():x&&x()},F.appendChild(L),F.listener=function($){K($)&&L.click()},ae(F,D),ie(F,D)},Z=m.date=function(b,x,N){var V=b.value,I=V===void 0?new Date:V,le=b.submitText,ge=le===void 0?"OK":le,ue=b.cancelText,D=ue===void 0?"Cancel":ue,F=b.submitCallback,q=b.cancelCallback,J=b.position,L=J===void 0?f.positions.date||L.top:J;R(),te();var $="&#9662",de=document.createElement("div"),ee=document.createElement("div"),O=document.createElement("div"),fe=function(he){de.innerHTML=f.dateMonths[he.getMonth()],ee.innerHTML=he.getDate(),O.innerHTML=he.getFullYear()},ve=function(he){var oe=new Date(I.getFullYear(),I.getMonth()+1,0).getDate(),$e=he.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number($e)>oe&&($e=oe.toString()),he.target.textContent=$e,Number($e)<1&&($e="1"),I.setDate(Number($e))},be=function(he){var oe=he.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);he.target.textContent=oe,I.setFullYear(Number(oe))},ye=function(he){fe(I)},Me=function(he){var oe=new Date(I.getFullYear(),I.getMonth()+he+1,0).getDate();I.getDate()>oe&&I.setDate(oe),I.setMonth(I.getMonth()+he),fe(I)},We=function(he){I.setDate(I.getDate()+he),fe(I)},Ct=function(he){var oe=I.getFullYear()+he;oe<0?I.setFullYear(0):I.setFullYear(I.getFullYear()+he),fe(I)},Qe=document.createElement("div"),dt=B();Qe.id=dt;var yt=document.createElement("div");yt.classList.add(f.classes.backgroundInfo);var Ce=document.createElement("div");Ce.classList.add(f.classes.dateSelectorInner);var Ve=document.createElement("div");Ve.classList.add(f.classes.button),Ve.classList.add(f.classes.elementThird),Ve.classList.add(f.classes.dateSelectorUp),Ve.innerHTML=$;var Pe=document.createElement("div");Pe.classList.add(f.classes.button),Pe.classList.add(f.classes.elementThird),Pe.classList.add(f.classes.dateSelectorUp),Pe.innerHTML=$;var Be=document.createElement("div");Be.classList.add(f.classes.button),Be.classList.add(f.classes.elementThird),Be.classList.add(f.classes.dateSelectorUp),Be.innerHTML=$,de.classList.add(f.classes.element),de.classList.add(f.classes.elementThird),de.innerHTML=f.dateMonths[I.getMonth()],ee.classList.add(f.classes.element),ee.classList.add(f.classes.elementThird),ee.setAttribute("contentEditable",!0),ee.addEventListener("input",ve),ee.addEventListener("blur",ye),ee.innerHTML=I.getDate(),O.classList.add(f.classes.element),O.classList.add(f.classes.elementThird),O.setAttribute("contentEditable",!0),O.addEventListener("input",be),O.addEventListener("blur",ye),O.innerHTML=I.getFullYear();var tt=document.createElement("div");tt.classList.add(f.classes.button),tt.classList.add(f.classes.elementThird),tt.innerHTML=$;var nt=document.createElement("div");nt.classList.add(f.classes.button),nt.classList.add(f.classes.elementThird),nt.innerHTML=$;var pt=document.createElement("div");pt.classList.add(f.classes.button),pt.classList.add(f.classes.elementThird),pt.innerHTML=$,Ve.onclick=function(){return Me(1)},Pe.onclick=function(){return We(1)},Be.onclick=function(){return Ct(1)},tt.onclick=function(){return Me(-1)},nt.onclick=function(){return We(-1)},pt.onclick=function(){return Ct(-1)};var Oe=document.createElement("div");Oe.classList.add(f.classes.button),Oe.classList.add(f.classes.elementHalf),Oe.classList.add(f.classes.backgroundSuccess),Oe.innerHTML=ge,Oe.onclick=function(){X(dt,L),ce(),F?F(I):x&&x(I)};var rt=document.createElement("div");rt.classList.add(f.classes.button),rt.classList.add(f.classes.elementHalf),rt.classList.add(f.classes.backgroundError),rt.innerHTML=D,rt.onclick=function(){X(dt,L),ce(),q?q(I):N&&N(I)},Ce.appendChild(Ve),Ce.appendChild(Pe),Ce.appendChild(Be),Ce.appendChild(de),Ce.appendChild(ee),Ce.appendChild(O),Ce.appendChild(tt),Ce.appendChild(nt),Ce.appendChild(pt),yt.appendChild(Ce),Qe.appendChild(yt),Qe.appendChild(Oe),Qe.appendChild(rt),Qe.listener=function(he){P(he)?Oe.click():K(he)&&rt.click()},ae(Qe,L),ie(Qe,L)};m.default={alert:me,force:Le,confirm:se,input:ne,select:Ne,date:Z,setOptions:v,hideAlerts:te}}])})}).call(n,a(0)(r))}])})}),Eo={};Xl(Eo,{default:()=>dn});var Ql=Ao(ko());Jl(Eo,Ao(ko()));var{default:So,...Zl}=Ql,dn=So!==void 0?So:Zl;var gr=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function mr(e,t,r,n){e.addEventListener?e.addEventListener(t,r,n):e.attachEvent&&e.attachEvent("on".concat(t),function(){r(window.event)})}function Mo(e,t){for(var r=t.slice(0,t.length-1),n=0;n<r.length;n++)r[n]=e[r[n].toLowerCase()];return r}function Oo(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),r=t.lastIndexOf("");r>=0;)t[r-1]+=",",t.splice(r,1),r=t.lastIndexOf("");return t}function ec(e,t){for(var r=e.length>=t.length?e:t,n=e.length>=t.length?t:e,a=!0,o=0;o<r.length;o++)n.indexOf(r[o])===-1&&(a=!1);return a}var $t={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":gr?173:189,"=":gr?61:187,";":gr?59:186,"'":222,"[":219,"]":221,"\\":220},et={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},br={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Ee={16:!1,18:!1,17:!1,91:!1},Te={};for(Bt=1;Bt<20;Bt++)$t["f".concat(Bt)]=111+Bt;var Bt,pe=[],Co=!1,Ro="all",Do=[],gn=function(e){return $t[e.toLowerCase()]||et[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},tc=function(e){return Object.keys($t).find(function(t){return $t[t]===e})},nc=function(e){return Object.keys(et).find(function(t){return et[t]===e})};function Io(e){Ro=e||"all"}function Ut(){return Ro||"all"}function rc(){return pe.slice(0)}function ac(){return pe.map(function(e){return tc(e)||nc(e)||String.fromCharCode(e)})}function oc(e){var t=e.target||e.srcElement,r=t.tagName,n=!0;return(t.isContentEditable||(r==="INPUT"||r==="TEXTAREA"||r==="SELECT")&&!t.readOnly)&&(n=!1),n}function ic(e){return typeof e=="string"&&(e=gn(e)),pe.indexOf(e)!==-1}function sc(e,t){var r,n;e||(e=Ut());for(var a in Te)if(Object.prototype.hasOwnProperty.call(Te,a))for(r=Te[a],n=0;n<r.length;)r[n].scope===e?r.splice(n,1):n++;Ut()===e&&Io(t||"all")}function lc(e){var t=e.keyCode||e.which||e.charCode,r=pe.indexOf(t);if(r>=0&&pe.splice(r,1),e.key&&e.key.toLowerCase()==="meta"&&pe.splice(0,pe.length),(t===93||t===224)&&(t=91),t in Ee){Ee[t]=!1;for(var n in et)et[n]===t&&(Ze[n]=!1)}}function cc(e){if(typeof e>"u")Object.keys(Te).forEach(function(i){return delete Te[i]});else if(Array.isArray(e))e.forEach(function(i){i.key&&fr(i)});else if(typeof e=="object")e.key&&fr(e);else if(typeof e=="string"){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=r[0],o=r[1];typeof a=="function"&&(o=a,a=""),fr({key:e,scope:a,method:o,splitKey:"+"})}}var fr=function(e){var t=e.key,r=e.scope,n=e.method,a=e.splitKey,o=a===void 0?"+":a,i=Oo(t);i.forEach(function(c){var l=c.split(o),s=l.length,u=l[s-1],m=u==="*"?"*":gn(u);if(Te[m]){r||(r=Ut());var p=s>1?Mo(et,l):[];Te[m]=Te[m].filter(function(g){var h=n?g.method===n:!0;return!(h&&g.scope===r&&ec(g.mods,p))})}})};function Po(e,t,r,n){if(t.element===n){var a;if(t.scope===r||t.scope==="all"){a=t.mods.length>0;for(var o in Ee)Object.prototype.hasOwnProperty.call(Ee,o)&&(!Ee[o]&&t.mods.indexOf(+o)>-1||Ee[o]&&t.mods.indexOf(+o)===-1)&&(a=!1);(t.mods.length===0&&!Ee[16]&&!Ee[18]&&!Ee[17]&&!Ee[91]||a||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function Lo(e,t){var r=Te["*"],n=e.keyCode||e.which||e.charCode;if(Ze.filter.call(this,e)){if((n===93||n===224)&&(n=91),pe.indexOf(n)===-1&&n!==229&&pe.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(h){var A=br[h];e[h]&&pe.indexOf(A)===-1?pe.push(A):!e[h]&&pe.indexOf(A)>-1?pe.splice(pe.indexOf(A),1):h==="metaKey"&&e[h]&&pe.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(pe=pe.slice(pe.indexOf(A))))}),n in Ee){Ee[n]=!0;for(var a in et)et[a]===n&&(Ze[a]=!0);if(!r)return}for(var o in Ee)Object.prototype.hasOwnProperty.call(Ee,o)&&(Ee[o]=e[br[o]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(pe.indexOf(17)===-1&&pe.push(17),pe.indexOf(18)===-1&&pe.push(18),Ee[17]=!0,Ee[18]=!0);var i=Ut();if(r)for(var c=0;c<r.length;c++)r[c].scope===i&&(e.type==="keydown"&&r[c].keydown||e.type==="keyup"&&r[c].keyup)&&Po(e,r[c],i,t);if(n in Te){for(var l=0;l<Te[n].length;l++)if((e.type==="keydown"&&Te[n][l].keydown||e.type==="keyup"&&Te[n][l].keyup)&&Te[n][l].key){for(var s=Te[n][l],u=s.splitKey,m=s.key.split(u),p=[],g=0;g<m.length;g++)p.push(gn(m[g]));p.sort().join("")===pe.sort().join("")&&Po(e,s,i,t)}}}}function uc(e){return Do.indexOf(e)>-1}function Ze(e,t,r){pe=[];var n=Oo(e),a=[],o="all",i=document,c=0,l=!1,s=!0,u="+",m=!1;for(r===void 0&&typeof t=="function"&&(r=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(o=t.scope),t.element&&(i=t.element),t.keyup&&(l=t.keyup),t.keydown!==void 0&&(s=t.keydown),t.capture!==void 0&&(m=t.capture),typeof t.splitKey=="string"&&(u=t.splitKey)),typeof t=="string"&&(o=t);c<n.length;c++)e=n[c].split(u),a=[],e.length>1&&(a=Mo(et,e)),e=e[e.length-1],e=e==="*"?"*":gn(e),e in Te||(Te[e]=[]),Te[e].push({keyup:l,keydown:s,scope:o,mods:a,shortcut:n[c],method:r,key:n[c],splitKey:u,element:i});typeof i<"u"&&!uc(i)&&window&&(Do.push(i),mr(i,"keydown",function(p){Lo(p,i)},m),Co||(Co=!0,mr(window,"focus",function(){pe=[]},m)),mr(i,"keyup",function(p){Lo(p,i),lc(p)},m))}function dc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(Te).forEach(function(r){var n=Te[r].filter(function(a){return a.scope===t&&a.shortcut===e});n.forEach(function(a){a&&a.method&&a.method()})})}var hr={getPressedKeyString:ac,setScope:Io,getScope:Ut,deleteScope:sc,getPressedKeyCodes:rc,isPressed:ic,filter:oc,trigger:dc,unbind:cc,keyMap:$t,modifier:et,modifierMap:br};for(pn in hr)Object.prototype.hasOwnProperty.call(hr,pn)&&(Ze[pn]=hr[pn]);var pn;typeof document<"u"&&(No=window.hotkeys,Ze.noConflict=function(e){return e&&window.hotkeys===Ze&&(window.hotkeys=No),Ze},window.hotkeys=Ze);var No;var{entries:Ko,setPrototypeOf:Fo,isFrozen:gc,getPrototypeOf:mc,getOwnPropertyDescriptor:fc}=Object,{freeze:Ie,seal:Je,create:hc}=Object,{apply:_r,construct:Sr}=typeof Reflect<"u"&&Reflect;_r||(_r=function(e,t,r){return e.apply(t,r)});Ie||(Ie=function(e){return e});Je||(Je=function(e){return e});Sr||(Sr=function(e,t){return new e(...t)});var bc=Ge(Array.prototype.forEach),Bo=Ge(Array.prototype.pop),jt=Ge(Array.prototype.push),hn=Ge(String.prototype.toLowerCase),yr=Ge(String.prototype.toString),yc=Ge(String.prototype.match),Xe=Ge(String.prototype.replace),Tc=Ge(String.prototype.indexOf),vc=Ge(String.prototype.trim),He=Ge(RegExp.prototype.test),Ht=xc(TypeError);function Ge(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return _r(e,t,n)}}function xc(e){return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return Sr(e,r)}}function G(e,t,r){var n;r=(n=r)!==null&&n!==void 0?n:hn,Fo&&Fo(e,null);let a=t.length;for(;a--;){let o=t[a];if(typeof o=="string"){let i=r(o);i!==o&&(gc(t)||(t[a]=i),o=i)}e[o]=!0}return e}function kt(e){let t=hc(null);for(let[r,n]of Ko(e))t[r]=n;return t}function mn(e,t){for(;e!==null;){let n=fc(e,t);if(n){if(n.get)return Ge(n.get);if(typeof n.value=="function")return Ge(n.value)}e=mc(e)}function r(n){return null}return r}var $o=Ie(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Tr=Ie(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),vr=Ie(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),wc=Ie(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),xr=Ie(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),_c=Ie(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Uo=Ie(["#text"]),jo=Ie(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),wr=Ie(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ho=Ie(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),fn=Ie(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Sc=Je(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Ac=Je(/<%[\w\W]*|[\w\W]*%>/gm),kc=Je(/\${[\w\W]*}/gm),Ec=Je(/^data-[\-\w.\u00B7-\uFFFF]/),Cc=Je(/^aria-[\-\w]+$/),zo=Je(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Pc=Je(/^(?:\w+script|data):/i),Lc=Je(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),qo=Je(/^html$/i),Wo=Object.freeze({__proto__:null,MUSTACHE_EXPR:Sc,ERB_EXPR:Ac,TMPLIT_EXPR:kc,DATA_ATTR:Ec,ARIA_ATTR:Cc,IS_ALLOWED_URI:zo,IS_SCRIPT_OR_DATA:Pc,ATTR_WHITESPACE:Lc,DOCTYPE_NAME:qo}),Nc=()=>typeof window>"u"?null:window,Mc=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null,n="data-tt-policy-suffix";t&&t.hasAttribute(n)&&(r=t.getAttribute(n));let a="dompurify"+(r?"#"+r:"");try{return e.createPolicy(a,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return null}};function Go(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Nc(),t=d=>Go(d);if(t.version="3.0.3",t.removed=[],!e||!e.document||e.document.nodeType!==9)return t.isSupported=!1,t;let r=e.document,n=r.currentScript,{document:a}=e,{DocumentFragment:o,HTMLTemplateElement:i,Node:c,Element:l,NodeFilter:s,NamedNodeMap:u=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:m,DOMParser:p,trustedTypes:g}=e,h=l.prototype,A=mn(h,"cloneNode"),S=mn(h,"nextSibling"),f=mn(h,"childNodes"),v=mn(h,"parentNode");if(typeof i=="function"){let d=a.createElement("template");d.content&&d.content.ownerDocument&&(a=d.content.ownerDocument)}let k,H="",{implementation:R,createNodeIterator:B,createDocumentFragment:_,getElementsByTagName:M}=a,{importNode:P}=r,K={};t.isSupported=typeof Ko=="function"&&typeof v=="function"&&R&&R.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:ae,ERB_EXPR:X,TMPLIT_EXPR:ie,DATA_ATTR:ce,ARIA_ATTR:te,IS_SCRIPT_OR_DATA:me,ATTR_WHITESPACE:Le}=Wo,{IS_ALLOWED_URI:se}=Wo,ne=null,Ne=G({},[...$o,...Tr,...vr,...xr,...Uo]),Z=null,b=G({},[...jo,...wr,...Ho,...fn]),x=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),N=null,V=null,I=!0,le=!0,ge=!1,ue=!0,D=!1,F=!1,q=!1,J=!1,L=!1,$=!1,de=!1,ee=!0,O=!1,fe="user-content-",ve=!0,be=!1,ye={},Me=null,We=G({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ct=null,Qe=G({},["audio","video","img","source","image","track"]),dt=null,yt=G({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ce="http://www.w3.org/1998/Math/MathML",Ve="http://www.w3.org/2000/svg",Pe="http://www.w3.org/1999/xhtml",Be=Pe,tt=!1,nt=null,pt=G({},[Ce,Ve,Pe],yr),Oe,rt=["application/xhtml+xml","text/html"],he="text/html",oe,$e=null,oi=a.createElement("form"),Lr=function(d){return d instanceof RegExp||d instanceof Function},yn=function(d){if(!($e&&$e===d)){if((!d||typeof d!="object")&&(d={}),d=kt(d),Oe=rt.indexOf(d.PARSER_MEDIA_TYPE)===-1?Oe=he:Oe=d.PARSER_MEDIA_TYPE,oe=Oe==="application/xhtml+xml"?yr:hn,ne="ALLOWED_TAGS"in d?G({},d.ALLOWED_TAGS,oe):Ne,Z="ALLOWED_ATTR"in d?G({},d.ALLOWED_ATTR,oe):b,nt="ALLOWED_NAMESPACES"in d?G({},d.ALLOWED_NAMESPACES,yr):pt,dt="ADD_URI_SAFE_ATTR"in d?G(kt(yt),d.ADD_URI_SAFE_ATTR,oe):yt,Ct="ADD_DATA_URI_TAGS"in d?G(kt(Qe),d.ADD_DATA_URI_TAGS,oe):Qe,Me="FORBID_CONTENTS"in d?G({},d.FORBID_CONTENTS,oe):We,N="FORBID_TAGS"in d?G({},d.FORBID_TAGS,oe):{},V="FORBID_ATTR"in d?G({},d.FORBID_ATTR,oe):{},ye="USE_PROFILES"in d?d.USE_PROFILES:!1,I=d.ALLOW_ARIA_ATTR!==!1,le=d.ALLOW_DATA_ATTR!==!1,ge=d.ALLOW_UNKNOWN_PROTOCOLS||!1,ue=d.ALLOW_SELF_CLOSE_IN_ATTR!==!1,D=d.SAFE_FOR_TEMPLATES||!1,F=d.WHOLE_DOCUMENT||!1,L=d.RETURN_DOM||!1,$=d.RETURN_DOM_FRAGMENT||!1,de=d.RETURN_TRUSTED_TYPE||!1,J=d.FORCE_BODY||!1,ee=d.SANITIZE_DOM!==!1,O=d.SANITIZE_NAMED_PROPS||!1,ve=d.KEEP_CONTENT!==!1,be=d.IN_PLACE||!1,se=d.ALLOWED_URI_REGEXP||zo,Be=d.NAMESPACE||Pe,x=d.CUSTOM_ELEMENT_HANDLING||{},d.CUSTOM_ELEMENT_HANDLING&&Lr(d.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(x.tagNameCheck=d.CUSTOM_ELEMENT_HANDLING.tagNameCheck),d.CUSTOM_ELEMENT_HANDLING&&Lr(d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(x.attributeNameCheck=d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),d.CUSTOM_ELEMENT_HANDLING&&typeof d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(x.allowCustomizedBuiltInElements=d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),D&&(le=!1),$&&(L=!0),ye&&(ne=G({},[...Uo]),Z=[],ye.html===!0&&(G(ne,$o),G(Z,jo)),ye.svg===!0&&(G(ne,Tr),G(Z,wr),G(Z,fn)),ye.svgFilters===!0&&(G(ne,vr),G(Z,wr),G(Z,fn)),ye.mathMl===!0&&(G(ne,xr),G(Z,Ho),G(Z,fn))),d.ADD_TAGS&&(ne===Ne&&(ne=kt(ne)),G(ne,d.ADD_TAGS,oe)),d.ADD_ATTR&&(Z===b&&(Z=kt(Z)),G(Z,d.ADD_ATTR,oe)),d.ADD_URI_SAFE_ATTR&&G(dt,d.ADD_URI_SAFE_ATTR,oe),d.FORBID_CONTENTS&&(Me===We&&(Me=kt(Me)),G(Me,d.FORBID_CONTENTS,oe)),ve&&(ne["#text"]=!0),F&&G(ne,["html","head","body"]),ne.table&&(G(ne,["tbody"]),delete N.tbody),d.TRUSTED_TYPES_POLICY){if(typeof d.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ht('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof d.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ht('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');k=d.TRUSTED_TYPES_POLICY,H=k.createHTML("")}else k===void 0&&(k=Mc(g,n)),k!==null&&typeof H=="string"&&(H=k.createHTML(""));Ie&&Ie(d),$e=d}},Nr=G({},["mi","mo","mn","ms","mtext"]),Mr=G({},["foreignobject","desc","title","annotation-xml"]),ii=G({},["title","style","font","a","script"]),Wt=G({},Tr);G(Wt,vr),G(Wt,wc);let Tn=G({},xr);G(Tn,_c);let si=function(d){let E=v(d);(!E||!E.tagName)&&(E={namespaceURI:Be,tagName:"template"});let y=hn(d.tagName),re=hn(E.tagName);return nt[d.namespaceURI]?d.namespaceURI===Ve?E.namespaceURI===Pe?y==="svg":E.namespaceURI===Ce?y==="svg"&&(re==="annotation-xml"||Nr[re]):!!Wt[y]:d.namespaceURI===Ce?E.namespaceURI===Pe?y==="math":E.namespaceURI===Ve?y==="math"&&Mr[re]:!!Tn[y]:d.namespaceURI===Pe?E.namespaceURI===Ve&&!Mr[re]||E.namespaceURI===Ce&&!Nr[re]?!1:!Tn[y]&&(ii[y]||!Wt[y]):!!(Oe==="application/xhtml+xml"&&nt[d.namespaceURI]):!1},Tt=function(d){jt(t.removed,{element:d});try{d.parentNode.removeChild(d)}catch{d.remove()}},vn=function(d,E){try{jt(t.removed,{attribute:E.getAttributeNode(d),from:E})}catch{jt(t.removed,{attribute:null,from:E})}if(E.removeAttribute(d),d==="is"&&!Z[d])if(L||$)try{Tt(E)}catch{}else try{E.setAttribute(d,"")}catch{}},Or=function(d){let E,y;if(J)d="<remove></remove>"+d;else{let Re=yc(d,/^[\r\n\t ]+/);y=Re&&Re[0]}Oe==="application/xhtml+xml"&&Be===Pe&&(d='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+d+"</body></html>");let re=k?k.createHTML(d):d;if(Be===Pe)try{E=new p().parseFromString(re,Oe)}catch{}if(!E||!E.documentElement){E=R.createDocument(Be,"template",null);try{E.documentElement.innerHTML=tt?H:re}catch{}}let xe=E.body||E.documentElement;return d&&y&&xe.insertBefore(a.createTextNode(y),xe.childNodes[0]||null),Be===Pe?M.call(E,F?"html":"body")[0]:F?E.documentElement:xe},Rr=function(d){return B.call(d.ownerDocument||d,d,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT,null,!1)},li=function(d){return d instanceof m&&(typeof d.nodeName!="string"||typeof d.textContent!="string"||typeof d.removeChild!="function"||!(d.attributes instanceof u)||typeof d.removeAttribute!="function"||typeof d.setAttribute!="function"||typeof d.namespaceURI!="string"||typeof d.insertBefore!="function"||typeof d.hasChildNodes!="function")},Kt=function(d){return typeof c=="object"?d instanceof c:d&&typeof d=="object"&&typeof d.nodeType=="number"&&typeof d.nodeName=="string"},at=function(d,E,y){K[d]&&bc(K[d],re=>{re.call(t,E,y,$e)})},Dr=function(d){let E;if(at("beforeSanitizeElements",d,null),li(d))return Tt(d),!0;let y=oe(d.nodeName);if(at("uponSanitizeElement",d,{tagName:y,allowedTags:ne}),d.hasChildNodes()&&!Kt(d.firstElementChild)&&(!Kt(d.content)||!Kt(d.content.firstElementChild))&&He(/<[/\w]/g,d.innerHTML)&&He(/<[/\w]/g,d.textContent))return Tt(d),!0;if(!ne[y]||N[y]){if(!N[y]&&Fr(y)&&(x.tagNameCheck instanceof RegExp&&He(x.tagNameCheck,y)||x.tagNameCheck instanceof Function&&x.tagNameCheck(y)))return!1;if(ve&&!Me[y]){let re=v(d)||d.parentNode,xe=f(d)||d.childNodes;if(xe&&re){let Re=xe.length;for(let Fe=Re-1;Fe>=0;--Fe)re.insertBefore(A(xe[Fe],!0),S(d))}}return Tt(d),!0}return d instanceof l&&!si(d)||(y==="noscript"||y==="noembed")&&He(/<\/no(script|embed)/i,d.innerHTML)?(Tt(d),!0):(D&&d.nodeType===3&&(E=d.textContent,E=Xe(E,ae," "),E=Xe(E,X," "),E=Xe(E,ie," "),d.textContent!==E&&(jt(t.removed,{element:d.cloneNode()}),d.textContent=E)),at("afterSanitizeElements",d,null),!1)},Ir=function(d,E,y){if(ee&&(E==="id"||E==="name")&&(y in a||y in oi))return!1;if(!(le&&!V[E]&&He(ce,E))&&!(I&&He(te,E))){if(!Z[E]||V[E]){if(!(Fr(d)&&(x.tagNameCheck instanceof RegExp&&He(x.tagNameCheck,d)||x.tagNameCheck instanceof Function&&x.tagNameCheck(d))&&(x.attributeNameCheck instanceof RegExp&&He(x.attributeNameCheck,E)||x.attributeNameCheck instanceof Function&&x.attributeNameCheck(E))||E==="is"&&x.allowCustomizedBuiltInElements&&(x.tagNameCheck instanceof RegExp&&He(x.tagNameCheck,y)||x.tagNameCheck instanceof Function&&x.tagNameCheck(y))))return!1}else if(!dt[E]&&!He(se,Xe(y,Le,""))&&!((E==="src"||E==="xlink:href"||E==="href")&&d!=="script"&&Tc(y,"data:")===0&&Ct[d])&&!(ge&&!He(me,Xe(y,Le,"")))&&y)return!1}return!0},Fr=function(d){return d.indexOf("-")>0},Br=function(d){let E,y,re,xe;at("beforeSanitizeAttributes",d,null);let{attributes:Re}=d;if(!Re)return;let Fe={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Z};for(xe=Re.length;xe--;){E=Re[xe];let{name:Se,namespaceURI:vt}=E;if(y=Se==="value"?E.value:vc(E.value),re=oe(Se),Fe.attrName=re,Fe.attrValue=y,Fe.keepAttr=!0,Fe.forceKeepAttr=void 0,at("uponSanitizeAttribute",d,Fe),y=Fe.attrValue,Fe.forceKeepAttr||(vn(Se,d),!Fe.keepAttr))continue;if(!ue&&He(/\/>/i,y)){vn(Se,d);continue}D&&(y=Xe(y,ae," "),y=Xe(y,X," "),y=Xe(y,ie," "));let $r=oe(d.nodeName);if(Ir($r,re,y)){if(O&&(re==="id"||re==="name")&&(vn(Se,d),y=fe+y),k&&typeof g=="object"&&typeof g.getAttributeType=="function"&&!vt)switch(g.getAttributeType($r,re)){case"TrustedHTML":{y=k.createHTML(y);break}case"TrustedScriptURL":{y=k.createScriptURL(y);break}}try{vt?d.setAttributeNS(vt,Se,y):d.setAttribute(Se,y),Bo(t.removed)}catch{}}}at("afterSanitizeAttributes",d,null)},ci=function d(E){let y,re=Rr(E);for(at("beforeSanitizeShadowDOM",E,null);y=re.nextNode();)at("uponSanitizeShadowNode",y,null),!Dr(y)&&(y.content instanceof o&&d(y.content),Br(y));at("afterSanitizeShadowDOM",E,null)};return t.sanitize=function(d){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y,re,xe,Re;if(tt=!d,tt&&(d="<!-->"),typeof d!="string"&&!Kt(d))if(typeof d.toString=="function"){if(d=d.toString(),typeof d!="string")throw Ht("dirty is not a string, aborting")}else throw Ht("toString is not a function");if(!t.isSupported)return d;if(q||yn(E),t.removed=[],typeof d=="string"&&(be=!1),be){if(d.nodeName){let vt=oe(d.nodeName);if(!ne[vt]||N[vt])throw Ht("root node is forbidden and cannot be sanitized in-place")}}else if(d instanceof c)y=Or("<!---->"),re=y.ownerDocument.importNode(d,!0),re.nodeType===1&&re.nodeName==="BODY"||re.nodeName==="HTML"?y=re:y.appendChild(re);else{if(!L&&!D&&!F&&d.indexOf("<")===-1)return k&&de?k.createHTML(d):d;if(y=Or(d),!y)return L?null:de?H:""}y&&J&&Tt(y.firstChild);let Fe=Rr(be?d:y);for(;xe=Fe.nextNode();)Dr(xe)||(xe.content instanceof o&&ci(xe.content),Br(xe));if(be)return d;if(L){if($)for(Re=_.call(y.ownerDocument);y.firstChild;)Re.appendChild(y.firstChild);else Re=y;return(Z.shadowroot||Z.shadowrootmod)&&(Re=P.call(r,Re,!0)),Re}let Se=F?y.outerHTML:y.innerHTML;return F&&ne["!doctype"]&&y.ownerDocument&&y.ownerDocument.doctype&&y.ownerDocument.doctype.name&&He(qo,y.ownerDocument.doctype.name)&&(Se="<!DOCTYPE "+y.ownerDocument.doctype.name+`>
`+Se),D&&(Se=Xe(Se,ae," "),Se=Xe(Se,X," "),Se=Xe(Se,ie," ")),k&&de?k.createHTML(Se):Se},t.setConfig=function(d){yn(d),q=!0},t.clearConfig=function(){$e=null,q=!1},t.isValidAttribute=function(d,E,y){$e||yn({});let re=oe(d),xe=oe(E);return Ir(re,xe,y)},t.addHook=function(d,E){typeof E=="function"&&(K[d]=K[d]||[],jt(K[d],E))},t.removeHook=function(d){if(K[d])return Bo(K[d])},t.removeHooks=function(d){K[d]&&(K[d]=[])},t.removeAllHooks=function(){K={}},t}var Vo=Go();var Oc=Object.create,kr=Object.defineProperty,Rc=Object.getOwnPropertyDescriptor,Dc=Object.getOwnPropertyNames,Ic=Object.getPrototypeOf,Fc=Object.prototype.hasOwnProperty,Er=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Bc=(e,t)=>{for(var r in t)kr(e,r,{get:t[r],enumerable:!0})},Ar=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Dc(t))!Fc.call(e,a)&&a!==r&&kr(e,a,{get:()=>t[a],enumerable:!(n=Rc(t,a))||n.enumerable});return e},$c=(e,t,r)=>(Ar(e,t,"default"),r&&Ar(r,t,"default")),Xo=(e,t,r)=>(r=e!=null?Oc(Ic(e)):{},Ar(t||!e||!e.__esModule?kr(r,"default",{value:e,enumerable:!0}):r,e)),Uc=Er((e,t)=>{function r(n,a){if(a&&a.documentElement)n=a,a=arguments[2];else if(!n||!n.documentElement)throw new Error("First argument to Readability constructor should be a document object.");if(a=a||{},this._doc=n,this._docJSDOMParser=this._doc.firstChild.__JSDOMParser__,this._articleTitle=null,this._articleByline=null,this._articleDir=null,this._articleSiteName=null,this._attempts=[],this._debug=!!a.debug,this._maxElemsToParse=a.maxElemsToParse||this.DEFAULT_MAX_ELEMS_TO_PARSE,this._nbTopCandidates=a.nbTopCandidates||this.DEFAULT_N_TOP_CANDIDATES,this._charThreshold=a.charThreshold||this.DEFAULT_CHAR_THRESHOLD,this._classesToPreserve=this.CLASSES_TO_PRESERVE.concat(a.classesToPreserve||[]),this._keepClasses=!!a.keepClasses,this._serializer=a.serializer||function(o){return o.innerHTML},this._disableJSONLD=!!a.disableJSONLD,this._allowedVideoRegex=a.allowedVideoRegex||this.REGEXPS.videos,this._flags=this.FLAG_STRIP_UNLIKELYS|this.FLAG_WEIGHT_CLASSES|this.FLAG_CLEAN_CONDITIONALLY,this._debug){let o=function(i){if(i.nodeType==i.TEXT_NODE)return`${i.nodeName} ("${i.textContent}")`;let c=Array.from(i.attributes||[],function(l){return`${l.name}="${l.value}"`}).join(" ");return`<${i.localName} ${c}>`};this.log=function(){if(typeof console<"u")Array.from(arguments,l=>l&&l.nodeType==this.ELEMENT_NODE?o(l):l).unshift("Reader: (Readability)");else if(typeof dump<"u"){var i=Array.prototype.map.call(arguments,function(c){return c&&c.nodeName?o(c):c}).join(" ");dump("Reader: (Readability) "+i+`
`)}}}else this.log=function(){}}r.prototype={FLAG_STRIP_UNLIKELYS:1,FLAG_WEIGHT_CLASSES:2,FLAG_CLEAN_CONDITIONALLY:4,ELEMENT_NODE:1,TEXT_NODE:3,DEFAULT_MAX_ELEMS_TO_PARSE:0,DEFAULT_N_TOP_CANDIDATES:5,DEFAULT_TAGS_TO_SCORE:"section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),DEFAULT_CHAR_THRESHOLD:500,REGEXPS:{unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i,positive:/article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,negative:/-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,extraneous:/print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,byline:/byline|author|dateline|writtenby|p-author/i,replaceFonts:/<(\/?)font[^>]*>/gi,normalize:/\s{2,}/g,videos:/\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,shareElements:/(\b|_)(share|sharedaddy)(\b|_)/i,nextLink:/(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,prevLink:/(prev|earl|old|new|<|«)/i,tokenize:/\W+/g,whitespace:/^\s*$/,hasContent:/\S$/,hashUrl:/^#.+/,srcsetUrl:/(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,b64DataUrl:/^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,jsonLdArticleTypes:/^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/},UNLIKELY_ROLES:["menu","menubar","complementary","navigation","alert","alertdialog","dialog"],DIV_TO_P_ELEMS:new Set(["BLOCKQUOTE","DL","DIV","IMG","OL","P","PRE","TABLE","UL"]),ALTER_TO_DIV_EXCEPTIONS:["DIV","ARTICLE","SECTION","P"],PRESENTATIONAL_ATTRIBUTES:["align","background","bgcolor","border","cellpadding","cellspacing","frame","hspace","rules","style","valign","vspace"],DEPRECATED_SIZE_ATTRIBUTE_ELEMS:["TABLE","TH","TD","HR","PRE"],PHRASING_ELEMS:["ABBR","AUDIO","B","BDO","BR","BUTTON","CITE","CODE","DATA","DATALIST","DFN","EM","EMBED","I","IMG","INPUT","KBD","LABEL","MARK","MATH","METER","NOSCRIPT","OBJECT","OUTPUT","PROGRESS","Q","RUBY","SAMP","SCRIPT","SELECT","SMALL","SPAN","STRONG","SUB","SUP","TEXTAREA","TIME","VAR","WBR"],CLASSES_TO_PRESERVE:["page"],HTML_ESCAPE_MAP:{lt:"<",gt:">",amp:"&",quot:'"',apos:"'"},_postProcessContent:function(n){this._fixRelativeUris(n),this._simplifyNestedElements(n),this._keepClasses||this._cleanClasses(n)},_removeNodes:function(n,a){if(this._docJSDOMParser&&n._isLiveNodeList)throw new Error("Do not pass live node lists to _removeNodes");for(var o=n.length-1;o>=0;o--){var i=n[o],c=i.parentNode;c&&(!a||a.call(this,i,o,n))&&c.removeChild(i)}},_replaceNodeTags:function(n,a){if(this._docJSDOMParser&&n._isLiveNodeList)throw new Error("Do not pass live node lists to _replaceNodeTags");for(let o of n)this._setNodeTag(o,a)},_forEachNode:function(n,a){Array.prototype.forEach.call(n,a,this)},_findNode:function(n,a){return Array.prototype.find.call(n,a,this)},_someNode:function(n,a){return Array.prototype.some.call(n,a,this)},_everyNode:function(n,a){return Array.prototype.every.call(n,a,this)},_concatNodeLists:function(){var n=Array.prototype.slice,a=n.call(arguments),o=a.map(function(i){return n.call(i)});return Array.prototype.concat.apply([],o)},_getAllNodesWithTag:function(n,a){return n.querySelectorAll?n.querySelectorAll(a.join(",")):[].concat.apply([],a.map(function(o){var i=n.getElementsByTagName(o);return Array.isArray(i)?i:Array.from(i)}))},_cleanClasses:function(n){var a=this._classesToPreserve,o=(n.getAttribute("class")||"").split(/\s+/).filter(function(i){return a.indexOf(i)!=-1}).join(" ");for(o?n.setAttribute("class",o):n.removeAttribute("class"),n=n.firstElementChild;n;n=n.nextElementSibling)this._cleanClasses(n)},_fixRelativeUris:function(n){var a=this._doc.baseURI,o=this._doc.documentURI;function i(s){if(a==o&&s.charAt(0)=="#")return s;try{return new URL(s,a).href}catch{}return s}var c=this._getAllNodesWithTag(n,["a"]);this._forEachNode(c,function(s){var u=s.getAttribute("href");if(u)if(u.indexOf("javascript:")===0)if(s.childNodes.length===1&&s.childNodes[0].nodeType===this.TEXT_NODE){var m=this._doc.createTextNode(s.textContent);s.parentNode.replaceChild(m,s)}else{for(var p=this._doc.createElement("span");s.firstChild;)p.appendChild(s.firstChild);s.parentNode.replaceChild(p,s)}else s.setAttribute("href",i(u))});var l=this._getAllNodesWithTag(n,["img","picture","figure","video","audio","source"]);this._forEachNode(l,function(s){var u=s.getAttribute("src"),m=s.getAttribute("poster"),p=s.getAttribute("srcset");if(u&&s.setAttribute("src",i(u)),m&&s.setAttribute("poster",i(m)),p){var g=p.replace(this.REGEXPS.srcsetUrl,function(h,A,S,f){return i(A)+(S||"")+f});s.setAttribute("srcset",g)}})},_simplifyNestedElements:function(n){for(var a=n;a;){if(a.parentNode&&["DIV","SECTION"].includes(a.tagName)&&!(a.id&&a.id.startsWith("readability"))){if(this._isElementWithoutContent(a)){a=this._removeAndGetNext(a);continue}else if(this._hasSingleTagInsideElement(a,"DIV")||this._hasSingleTagInsideElement(a,"SECTION")){for(var o=a.children[0],i=0;i<a.attributes.length;i++)o.setAttribute(a.attributes[i].name,a.attributes[i].value);a.parentNode.replaceChild(o,a),a=o;continue}}a=this._getNextNode(a)}},_getArticleTitle:function(){var n=this._doc,a="",o="";try{a=o=n.title.trim(),typeof a!="string"&&(a=o=this._getInnerText(n.getElementsByTagName("title")[0]))}catch{}var i=!1;function c(g){return g.split(/\s+/).length}if(/ [\|\-\\\/>»] /.test(a))i=/ [\\\/>»] /.test(a),a=o.replace(/(.*)[\|\-\\\/>»] .*/gi,"$1"),c(a)<3&&(a=o.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi,"$1"));else if(a.indexOf(": ")!==-1){var l=this._concatNodeLists(n.getElementsByTagName("h1"),n.getElementsByTagName("h2")),s=a.trim(),u=this._someNode(l,function(g){return g.textContent.trim()===s});u||(a=o.substring(o.lastIndexOf(":")+1),c(a)<3?a=o.substring(o.indexOf(":")+1):c(o.substr(0,o.indexOf(":")))>5&&(a=o))}else if(a.length>150||a.length<15){var m=n.getElementsByTagName("h1");m.length===1&&(a=this._getInnerText(m[0]))}a=a.trim().replace(this.REGEXPS.normalize," ");var p=c(a);return p<=4&&(!i||p!=c(o.replace(/[\|\-\\\/>»]+/g,""))-1)&&(a=o),a},_prepDocument:function(){var n=this._doc;this._removeNodes(this._getAllNodesWithTag(n,["style"])),n.body&&this._replaceBrs(n.body),this._replaceNodeTags(this._getAllNodesWithTag(n,["font"]),"SPAN")},_nextNode:function(n){for(var a=n;a&&a.nodeType!=this.ELEMENT_NODE&&this.REGEXPS.whitespace.test(a.textContent);)a=a.nextSibling;return a},_replaceBrs:function(n){this._forEachNode(this._getAllNodesWithTag(n,["br"]),function(a){for(var o=a.nextSibling,i=!1;(o=this._nextNode(o))&&o.tagName=="BR";){i=!0;var c=o.nextSibling;o.parentNode.removeChild(o),o=c}if(i){var l=this._doc.createElement("p");for(a.parentNode.replaceChild(l,a),o=l.nextSibling;o;){if(o.tagName=="BR"){var s=this._nextNode(o.nextSibling);if(s&&s.tagName=="BR")break}if(!this._isPhrasingContent(o))break;var u=o.nextSibling;l.appendChild(o),o=u}for(;l.lastChild&&this._isWhitespace(l.lastChild);)l.removeChild(l.lastChild);l.parentNode.tagName==="P"&&this._setNodeTag(l.parentNode,"DIV")}})},_setNodeTag:function(n,a){if(this.log("_setNodeTag",n,a),this._docJSDOMParser)return n.localName=a.toLowerCase(),n.tagName=a.toUpperCase(),n;for(var o=n.ownerDocument.createElement(a);n.firstChild;)o.appendChild(n.firstChild);n.parentNode.replaceChild(o,n),n.readability&&(o.readability=n.readability);for(var i=0;i<n.attributes.length;i++)try{o.setAttribute(n.attributes[i].name,n.attributes[i].value)}catch{}return o},_prepArticle:function(n){this._cleanStyles(n),this._markDataTables(n),this._fixLazyImages(n),this._cleanConditionally(n,"form"),this._cleanConditionally(n,"fieldset"),this._clean(n,"object"),this._clean(n,"embed"),this._clean(n,"footer"),this._clean(n,"link"),this._clean(n,"aside");var a=this.DEFAULT_CHAR_THRESHOLD;this._forEachNode(n.children,function(o){this._cleanMatchedNodes(o,function(i,c){return this.REGEXPS.shareElements.test(c)&&i.textContent.length<a})}),this._clean(n,"iframe"),this._clean(n,"input"),this._clean(n,"textarea"),this._clean(n,"select"),this._clean(n,"button"),this._cleanHeaders(n),this._cleanConditionally(n,"table"),this._cleanConditionally(n,"ul"),this._cleanConditionally(n,"div"),this._replaceNodeTags(this._getAllNodesWithTag(n,["h1"]),"h2"),this._removeNodes(this._getAllNodesWithTag(n,["p"]),function(o){var i=o.getElementsByTagName("img").length,c=o.getElementsByTagName("embed").length,l=o.getElementsByTagName("object").length,s=o.getElementsByTagName("iframe").length,u=i+c+l+s;return u===0&&!this._getInnerText(o,!1)}),this._forEachNode(this._getAllNodesWithTag(n,["br"]),function(o){var i=this._nextNode(o.nextSibling);i&&i.tagName=="P"&&o.parentNode.removeChild(o)}),this._forEachNode(this._getAllNodesWithTag(n,["table"]),function(o){var i=this._hasSingleTagInsideElement(o,"TBODY")?o.firstElementChild:o;if(this._hasSingleTagInsideElement(i,"TR")){var c=i.firstElementChild;if(this._hasSingleTagInsideElement(c,"TD")){var l=c.firstElementChild;l=this._setNodeTag(l,this._everyNode(l.childNodes,this._isPhrasingContent)?"P":"DIV"),o.parentNode.replaceChild(l,o)}}})},_initializeNode:function(n){switch(n.readability={contentScore:0},n.tagName){case"DIV":n.readability.contentScore+=5;break;case"PRE":case"TD":case"BLOCKQUOTE":n.readability.contentScore+=3;break;case"ADDRESS":case"OL":case"UL":case"DL":case"DD":case"DT":case"LI":case"FORM":n.readability.contentScore-=3;break;case"H1":case"H2":case"H3":case"H4":case"H5":case"H6":case"TH":n.readability.contentScore-=5;break}n.readability.contentScore+=this._getClassWeight(n)},_removeAndGetNext:function(n){var a=this._getNextNode(n,!0);return n.parentNode.removeChild(n),a},_getNextNode:function(n,a){if(!a&&n.firstElementChild)return n.firstElementChild;if(n.nextElementSibling)return n.nextElementSibling;do n=n.parentNode;while(n&&!n.nextElementSibling);return n&&n.nextElementSibling},_textSimilarity:function(n,a){var o=n.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean),i=a.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);if(!o.length||!i.length)return 0;var c=i.filter(s=>!o.includes(s)),l=c.join(" ").length/i.join(" ").length;return 1-l},_checkByline:function(n,a){if(this._articleByline)return!1;if(n.getAttribute!==void 0)var o=n.getAttribute("rel"),i=n.getAttribute("itemprop");return(o==="author"||i&&i.indexOf("author")!==-1||this.REGEXPS.byline.test(a))&&this._isValidByline(n.textContent)?(this._articleByline=n.textContent.trim(),!0):!1},_getNodeAncestors:function(n,a){a=a||0;for(var o=0,i=[];n.parentNode&&(i.push(n.parentNode),!(a&&++o===a));)n=n.parentNode;return i},_grabArticle:function(n){this.log("**** grabArticle ****");var a=this._doc,o=n!==null;if(n=n||this._doc.body,!n)return this.log("No body found in document. Abort."),null;for(var i=n.innerHTML;;){this.log("Starting grabArticle loop");var c=this._flagIsActive(this.FLAG_STRIP_UNLIKELYS),l=[],s=this._doc.documentElement;let J=!0;for(;s;){s.tagName==="HTML"&&(this._articleLang=s.getAttribute("lang"));var u=s.className+" "+s.id;if(!this._isProbablyVisible(s)){this.log("Removing hidden node - "+u),s=this._removeAndGetNext(s);continue}if(s.getAttribute("aria-modal")=="true"&&s.getAttribute("role")=="dialog"){s=this._removeAndGetNext(s);continue}if(this._checkByline(s,u)){s=this._removeAndGetNext(s);continue}if(J&&this._headerDuplicatesTitle(s)){this.log("Removing header: ",s.textContent.trim(),this._articleTitle.trim()),J=!1,s=this._removeAndGetNext(s);continue}if(c){if(this.REGEXPS.unlikelyCandidates.test(u)&&!this.REGEXPS.okMaybeItsACandidate.test(u)&&!this._hasAncestorTag(s,"table")&&!this._hasAncestorTag(s,"code")&&s.tagName!=="BODY"&&s.tagName!=="A"){this.log("Removing unlikely candidate - "+u),s=this._removeAndGetNext(s);continue}if(this.UNLIKELY_ROLES.includes(s.getAttribute("role"))){this.log("Removing content with role "+s.getAttribute("role")+" - "+u),s=this._removeAndGetNext(s);continue}}if((s.tagName==="DIV"||s.tagName==="SECTION"||s.tagName==="HEADER"||s.tagName==="H1"||s.tagName==="H2"||s.tagName==="H3"||s.tagName==="H4"||s.tagName==="H5"||s.tagName==="H6")&&this._isElementWithoutContent(s)){s=this._removeAndGetNext(s);continue}if(this.DEFAULT_TAGS_TO_SCORE.indexOf(s.tagName)!==-1&&l.push(s),s.tagName==="DIV"){for(var m=null,p=s.firstChild;p;){var g=p.nextSibling;if(this._isPhrasingContent(p))m!==null?m.appendChild(p):this._isWhitespace(p)||(m=a.createElement("p"),s.replaceChild(m,p),m.appendChild(p));else if(m!==null){for(;m.lastChild&&this._isWhitespace(m.lastChild);)m.removeChild(m.lastChild);m=null}p=g}if(this._hasSingleTagInsideElement(s,"P")&&this._getLinkDensity(s)<.25){var h=s.children[0];s.parentNode.replaceChild(h,s),s=h,l.push(s)}else this._hasChildBlockElement(s)||(s=this._setNodeTag(s,"P"),l.push(s))}s=this._getNextNode(s)}var A=[];this._forEachNode(l,function(L){if(!(!L.parentNode||typeof L.parentNode.tagName>"u")){var $=this._getInnerText(L);if(!($.length<25)){var de=this._getNodeAncestors(L,5);if(de.length!==0){var ee=0;ee+=1,ee+=$.split(",").length,ee+=Math.min(Math.floor($.length/100),3),this._forEachNode(de,function(O,fe){if(!(!O.tagName||!O.parentNode||typeof O.parentNode.tagName>"u")){if(typeof O.readability>"u"&&(this._initializeNode(O),A.push(O)),fe===0)var ve=1;else fe===1?ve=2:ve=fe*3;O.readability.contentScore+=ee/ve}})}}}});for(var S=[],f=0,v=A.length;f<v;f+=1){var k=A[f],H=k.readability.contentScore*(1-this._getLinkDensity(k));k.readability.contentScore=H,this.log("Candidate:",k,"with score "+H);for(var R=0;R<this._nbTopCandidates;R++){var B=S[R];if(!B||H>B.readability.contentScore){S.splice(R,0,k),S.length>this._nbTopCandidates&&S.pop();break}}}var _=S[0]||null,M=!1,P;if(_===null||_.tagName==="BODY"){for(_=a.createElement("DIV"),M=!0;n.firstChild;)this.log("Moving child out:",n.firstChild),_.appendChild(n.firstChild);n.appendChild(_),this._initializeNode(_)}else if(_){for(var K=[],ae=1;ae<S.length;ae++)S[ae].readability.contentScore/_.readability.contentScore>=.75&&K.push(this._getNodeAncestors(S[ae]));var X=3;if(K.length>=X)for(P=_.parentNode;P.tagName!=="BODY";){for(var ie=0,ce=0;ce<K.length&&ie<X;ce++)ie+=Number(K[ce].includes(P));if(ie>=X){_=P;break}P=P.parentNode}_.readability||this._initializeNode(_),P=_.parentNode;for(var te=_.readability.contentScore,me=te/3;P.tagName!=="BODY";){if(!P.readability){P=P.parentNode;continue}var Le=P.readability.contentScore;if(Le<me)break;if(Le>te){_=P;break}te=P.readability.contentScore,P=P.parentNode}for(P=_.parentNode;P.tagName!="BODY"&&P.children.length==1;)_=P,P=_.parentNode;_.readability||this._initializeNode(_)}var se=a.createElement("DIV");o&&(se.id="readability-content");var ne=Math.max(10,_.readability.contentScore*.2);P=_.parentNode;for(var Ne=P.children,Z=0,b=Ne.length;Z<b;Z++){var x=Ne[Z],N=!1;if(this.log("Looking at sibling node:",x,x.readability?"with score "+x.readability.contentScore:""),this.log("Sibling has score",x.readability?x.readability.contentScore:"Unknown"),x===_)N=!0;else{var V=0;if(x.className===_.className&&_.className!==""&&(V+=_.readability.contentScore*.2),x.readability&&x.readability.contentScore+V>=ne)N=!0;else if(x.nodeName==="P"){var I=this._getLinkDensity(x),le=this._getInnerText(x),ge=le.length;(ge>80&&I<.25||ge<80&&ge>0&&I===0&&le.search(/\.( |$)/)!==-1)&&(N=!0)}}N&&(this.log("Appending node:",x),this.ALTER_TO_DIV_EXCEPTIONS.indexOf(x.nodeName)===-1&&(this.log("Altering sibling:",x,"to div."),x=this._setNodeTag(x,"DIV")),se.appendChild(x),Ne=P.children,Z-=1,b-=1)}if(this._debug&&this.log("Article content pre-prep: "+se.innerHTML),this._prepArticle(se),this._debug&&this.log("Article content post-prep: "+se.innerHTML),M)_.id="readability-page-1",_.className="page";else{var ue=a.createElement("DIV");for(ue.id="readability-page-1",ue.className="page";se.firstChild;)ue.appendChild(se.firstChild);se.appendChild(ue)}this._debug&&this.log("Article content after paging: "+se.innerHTML);var D=!0,F=this._getInnerText(se,!0).length;if(F<this._charThreshold)if(D=!1,n.innerHTML=i,this._flagIsActive(this.FLAG_STRIP_UNLIKELYS))this._removeFlag(this.FLAG_STRIP_UNLIKELYS),this._attempts.push({articleContent:se,textLength:F});else if(this._flagIsActive(this.FLAG_WEIGHT_CLASSES))this._removeFlag(this.FLAG_WEIGHT_CLASSES),this._attempts.push({articleContent:se,textLength:F});else if(this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY),this._attempts.push({articleContent:se,textLength:F});else{if(this._attempts.push({articleContent:se,textLength:F}),this._attempts.sort(function(L,$){return $.textLength-L.textLength}),!this._attempts[0].textLength)return null;se=this._attempts[0].articleContent,D=!0}if(D){var q=[P,_].concat(this._getNodeAncestors(P));return this._someNode(q,function(L){if(!L.tagName)return!1;var $=L.getAttribute("dir");return $?(this._articleDir=$,!0):!1}),se}}},_isValidByline:function(n){return typeof n=="string"||n instanceof String?(n=n.trim(),n.length>0&&n.length<100):!1},_unescapeHtmlEntities:function(n){if(!n)return n;var a=this.HTML_ESCAPE_MAP;return n.replace(/&(quot|amp|apos|lt|gt);/g,function(o,i){return a[i]}).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi,function(o,i,c){var l=parseInt(i||c,i?16:10);return String.fromCharCode(l)})},_getJSONLD:function(n){var a=this._getAllNodesWithTag(n,["script"]),o;return this._forEachNode(a,function(i){if(!o&&i.getAttribute("type")==="application/ld+json")try{var c=i.textContent.replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g,""),l=JSON.parse(c);if(!l["@context"]||!l["@context"].match(/^https?\:\/\/schema\.org$/)||(!l["@type"]&&Array.isArray(l["@graph"])&&(l=l["@graph"].find(function(p){return(p["@type"]||"").match(this.REGEXPS.jsonLdArticleTypes)})),!l||!l["@type"]||!l["@type"].match(this.REGEXPS.jsonLdArticleTypes)))return;if(o={},typeof l.name=="string"&&typeof l.headline=="string"&&l.name!==l.headline){var s=this._getArticleTitle(),u=this._textSimilarity(l.name,s)>.75,m=this._textSimilarity(l.headline,s)>.75;m&&!u?o.title=l.headline:o.title=l.name}else typeof l.name=="string"?o.title=l.name.trim():typeof l.headline=="string"&&(o.title=l.headline.trim());l.author&&(typeof l.author.name=="string"?o.byline=l.author.name.trim():Array.isArray(l.author)&&l.author[0]&&typeof l.author[0].name=="string"&&(o.byline=l.author.filter(function(p){return p&&typeof p.name=="string"}).map(function(p){return p.name.trim()}).join(", "))),typeof l.description=="string"&&(o.excerpt=l.description.trim()),l.publisher&&typeof l.publisher.name=="string"&&(o.siteName=l.publisher.name.trim());return}catch(p){this.log(p.message)}}),o||{}},_getArticleMetadata:function(n){var a={},o={},i=this._doc.getElementsByTagName("meta"),c=/\s*(dc|dcterm|og|twitter)\s*:\s*(author|creator|description|title|site_name)\s*/gi,l=/^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;return this._forEachNode(i,function(s){var u=s.getAttribute("name"),m=s.getAttribute("property"),p=s.getAttribute("content");if(p){var g=null,h=null;m&&(g=m.match(c),g&&(h=g[0].toLowerCase().replace(/\s/g,""),o[h]=p.trim())),!g&&u&&l.test(u)&&(h=u,p&&(h=h.toLowerCase().replace(/\s/g,"").replace(/\./g,":"),o[h]=p.trim()))}}),a.title=n.title||o["dc:title"]||o["dcterm:title"]||o["og:title"]||o["weibo:article:title"]||o["weibo:webpage:title"]||o.title||o["twitter:title"],a.title||(a.title=this._getArticleTitle()),a.byline=n.byline||o["dc:creator"]||o["dcterm:creator"]||o.author,a.excerpt=n.excerpt||o["dc:description"]||o["dcterm:description"]||o["og:description"]||o["weibo:article:description"]||o["weibo:webpage:description"]||o.description||o["twitter:description"],a.siteName=n.siteName||o["og:site_name"],a.title=this._unescapeHtmlEntities(a.title),a.byline=this._unescapeHtmlEntities(a.byline),a.excerpt=this._unescapeHtmlEntities(a.excerpt),a.siteName=this._unescapeHtmlEntities(a.siteName),a},_isSingleImage:function(n){return n.tagName==="IMG"?!0:n.children.length!==1||n.textContent.trim()!==""?!1:this._isSingleImage(n.children[0])},_unwrapNoscriptImages:function(n){var a=Array.from(n.getElementsByTagName("img"));this._forEachNode(a,function(i){for(var c=0;c<i.attributes.length;c++){var l=i.attributes[c];switch(l.name){case"src":case"srcset":case"data-src":case"data-srcset":return}if(/\.(jpg|jpeg|png|webp)/i.test(l.value))return}i.parentNode.removeChild(i)});var o=Array.from(n.getElementsByTagName("noscript"));this._forEachNode(o,function(i){var c=n.createElement("div");if(c.innerHTML=i.innerHTML,!!this._isSingleImage(c)){var l=i.previousElementSibling;if(l&&this._isSingleImage(l)){var s=l;s.tagName!=="IMG"&&(s=l.getElementsByTagName("img")[0]);for(var u=c.getElementsByTagName("img")[0],m=0;m<s.attributes.length;m++){var p=s.attributes[m];if(p.value!==""&&(p.name==="src"||p.name==="srcset"||/\.(jpg|jpeg|png|webp)/i.test(p.value))){if(u.getAttribute(p.name)===p.value)continue;var g=p.name;u.hasAttribute(g)&&(g="data-old-"+g),u.setAttribute(g,p.value)}}i.parentNode.replaceChild(c.firstElementChild,l)}}})},_removeScripts:function(n){this._removeNodes(this._getAllNodesWithTag(n,["script","noscript"]))},_hasSingleTagInsideElement:function(n,a){return n.children.length!=1||n.children[0].tagName!==a?!1:!this._someNode(n.childNodes,function(o){return o.nodeType===this.TEXT_NODE&&this.REGEXPS.hasContent.test(o.textContent)})},_isElementWithoutContent:function(n){return n.nodeType===this.ELEMENT_NODE&&n.textContent.trim().length==0&&(n.children.length==0||n.children.length==n.getElementsByTagName("br").length+n.getElementsByTagName("hr").length)},_hasChildBlockElement:function(n){return this._someNode(n.childNodes,function(a){return this.DIV_TO_P_ELEMS.has(a.tagName)||this._hasChildBlockElement(a)})},_isPhrasingContent:function(n){return n.nodeType===this.TEXT_NODE||this.PHRASING_ELEMS.indexOf(n.tagName)!==-1||(n.tagName==="A"||n.tagName==="DEL"||n.tagName==="INS")&&this._everyNode(n.childNodes,this._isPhrasingContent)},_isWhitespace:function(n){return n.nodeType===this.TEXT_NODE&&n.textContent.trim().length===0||n.nodeType===this.ELEMENT_NODE&&n.tagName==="BR"},_getInnerText:function(n,a){a=typeof a>"u"?!0:a;var o=n.textContent.trim();return a?o.replace(this.REGEXPS.normalize," "):o},_getCharCount:function(n,a){return a=a||",",this._getInnerText(n).split(a).length-1},_cleanStyles:function(n){if(!(!n||n.tagName.toLowerCase()==="svg")){for(var a=0;a<this.PRESENTATIONAL_ATTRIBUTES.length;a++)n.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[a]);this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(n.tagName)!==-1&&(n.removeAttribute("width"),n.removeAttribute("height"));for(var o=n.firstElementChild;o!==null;)this._cleanStyles(o),o=o.nextElementSibling}},_getLinkDensity:function(n){var a=this._getInnerText(n).length;if(a===0)return 0;var o=0;return this._forEachNode(n.getElementsByTagName("a"),function(i){var c=i.getAttribute("href"),l=c&&this.REGEXPS.hashUrl.test(c)?.3:1;o+=this._getInnerText(i).length*l}),o/a},_getClassWeight:function(n){if(!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))return 0;var a=0;return typeof n.className=="string"&&n.className!==""&&(this.REGEXPS.negative.test(n.className)&&(a-=25),this.REGEXPS.positive.test(n.className)&&(a+=25)),typeof n.id=="string"&&n.id!==""&&(this.REGEXPS.negative.test(n.id)&&(a-=25),this.REGEXPS.positive.test(n.id)&&(a+=25)),a},_clean:function(n,a){var o=["object","embed","iframe"].indexOf(a)!==-1;this._removeNodes(this._getAllNodesWithTag(n,[a]),function(i){if(o){for(var c=0;c<i.attributes.length;c++)if(this._allowedVideoRegex.test(i.attributes[c].value))return!1;if(i.tagName==="object"&&this._allowedVideoRegex.test(i.innerHTML))return!1}return!0})},_hasAncestorTag:function(n,a,o,i){o=o||3,a=a.toUpperCase();for(var c=0;n.parentNode;){if(o>0&&c>o)return!1;if(n.parentNode.tagName===a&&(!i||i(n.parentNode)))return!0;n=n.parentNode,c++}return!1},_getRowAndColumnCount:function(n){for(var a=0,o=0,i=n.getElementsByTagName("tr"),c=0;c<i.length;c++){var l=i[c].getAttribute("rowspan")||0;l&&(l=parseInt(l,10)),a+=l||1;for(var s=0,u=i[c].getElementsByTagName("td"),m=0;m<u.length;m++){var p=u[m].getAttribute("colspan")||0;p&&(p=parseInt(p,10)),s+=p||1}o=Math.max(o,s)}return{rows:a,columns:o}},_markDataTables:function(n){for(var a=n.getElementsByTagName("table"),o=0;o<a.length;o++){var i=a[o],c=i.getAttribute("role");if(c=="presentation"){i._readabilityDataTable=!1;continue}var l=i.getAttribute("datatable");if(l=="0"){i._readabilityDataTable=!1;continue}var s=i.getAttribute("summary");if(s){i._readabilityDataTable=!0;continue}var u=i.getElementsByTagName("caption")[0];if(u&&u.childNodes.length>0){i._readabilityDataTable=!0;continue}var m=["col","colgroup","tfoot","thead","th"],p=function(h){return!!i.getElementsByTagName(h)[0]};if(m.some(p)){this.log("Data table because found data-y descendant"),i._readabilityDataTable=!0;continue}if(i.getElementsByTagName("table")[0]){i._readabilityDataTable=!1;continue}var g=this._getRowAndColumnCount(i);if(g.rows>=10||g.columns>4){i._readabilityDataTable=!0;continue}i._readabilityDataTable=g.rows*g.columns>10}},_fixLazyImages:function(n){this._forEachNode(this._getAllNodesWithTag(n,["img","picture","figure"]),function(a){if(a.src&&this.REGEXPS.b64DataUrl.test(a.src)){var o=this.REGEXPS.b64DataUrl.exec(a.src);if(o[1]==="image/svg+xml")return;for(var i=!1,c=0;c<a.attributes.length;c++){var l=a.attributes[c];if(l.name!=="src"&&/\.(jpg|jpeg|png|webp)/i.test(l.value)){i=!0;break}}if(i){var s=a.src.search(/base64\s*/i)+7,u=a.src.length-s;u<133&&a.removeAttribute("src")}}if(!((a.src||a.srcset&&a.srcset!="null")&&a.className.toLowerCase().indexOf("lazy")===-1)){for(var m=0;m<a.attributes.length;m++)if(l=a.attributes[m],!(l.name==="src"||l.name==="srcset"||l.name==="alt")){var p=null;if(/\.(jpg|jpeg|png|webp)\s+\d/.test(l.value)?p="srcset":/^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(l.value)&&(p="src"),p){if(a.tagName==="IMG"||a.tagName==="PICTURE")a.setAttribute(p,l.value);else if(a.tagName==="FIGURE"&&!this._getAllNodesWithTag(a,["img","picture"]).length){var g=this._doc.createElement("img");g.setAttribute(p,l.value),a.appendChild(g)}}}}})},_getTextDensity:function(n,a){var o=this._getInnerText(n,!0).length;if(o===0)return 0;var i=0,c=this._getAllNodesWithTag(n,a);return this._forEachNode(c,l=>i+=this._getInnerText(l,!0).length),i/o},_cleanConditionally:function(n,a){this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)&&this._removeNodes(this._getAllNodesWithTag(n,[a]),function(o){var i=function(P){return P._readabilityDataTable},c=a==="ul"||a==="ol";if(!c){var l=0,s=this._getAllNodesWithTag(o,["ul","ol"]);this._forEachNode(s,P=>l+=this._getInnerText(P).length),c=l/this._getInnerText(o).length>.9}if(a==="table"&&i(o)||this._hasAncestorTag(o,"table",-1,i)||this._hasAncestorTag(o,"code"))return!1;var u=this._getClassWeight(o);this.log("Cleaning Conditionally",o);var m=0;if(u+m<0)return!0;if(this._getCharCount(o,",")<10){for(var p=o.getElementsByTagName("p").length,g=o.getElementsByTagName("img").length,h=o.getElementsByTagName("li").length-100,A=o.getElementsByTagName("input").length,S=this._getTextDensity(o,["h1","h2","h3","h4","h5","h6"]),f=0,v=this._getAllNodesWithTag(o,["object","embed","iframe"]),k=0;k<v.length;k++){for(var H=0;H<v[k].attributes.length;H++)if(this._allowedVideoRegex.test(v[k].attributes[H].value))return!1;if(v[k].tagName==="object"&&this._allowedVideoRegex.test(v[k].innerHTML))return!1;f++}var R=this._getLinkDensity(o),B=this._getInnerText(o).length,_=g>1&&p/g<.5&&!this._hasAncestorTag(o,"figure")||!c&&h>p||A>Math.floor(p/3)||!c&&S<.9&&B<25&&(g===0||g>2)&&!this._hasAncestorTag(o,"figure")||!c&&u<25&&R>.2||u>=25&&R>.5||f===1&&B<75||f>1;if(c&&_){for(var M=0;M<o.children.length;M++)if(o.children[M].children.length>1)return _;let P=o.getElementsByTagName("li").length;if(g==P)return!1}return _}return!1})},_cleanMatchedNodes:function(n,a){for(var o=this._getNextNode(n,!0),i=this._getNextNode(n);i&&i!=o;)a.call(this,i,i.className+" "+i.id)?i=this._removeAndGetNext(i):i=this._getNextNode(i)},_cleanHeaders:function(n){let a=this._getAllNodesWithTag(n,["h1","h2"]);this._removeNodes(a,function(o){let i=this._getClassWeight(o)<0;return i&&this.log("Removing header with low class weight:",o),i})},_headerDuplicatesTitle:function(n){if(n.tagName!="H1"&&n.tagName!="H2")return!1;var a=this._getInnerText(n,!1);return this.log("Evaluating similarity of header:",a,this._articleTitle),this._textSimilarity(this._articleTitle,a)>.75},_flagIsActive:function(n){return(this._flags&n)>0},_removeFlag:function(n){this._flags=this._flags&~n},_isProbablyVisible:function(n){return(!n.style||n.style.display!="none")&&!n.hasAttribute("hidden")&&(!n.hasAttribute("aria-hidden")||n.getAttribute("aria-hidden")!="true"||n.className&&n.className.indexOf&&n.className.indexOf("fallback-image")!==-1)},parse:function(){if(this._maxElemsToParse>0){var n=this._doc.getElementsByTagName("*").length;if(n>this._maxElemsToParse)throw new Error("Aborting parsing document; "+n+" elements found")}this._unwrapNoscriptImages(this._doc);var a=this._disableJSONLD?{}:this._getJSONLD(this._doc);this._removeScripts(this._doc),this._prepDocument();var o=this._getArticleMetadata(a);this._articleTitle=o.title;var i=this._grabArticle();if(!i)return null;if(this.log("Grabbed: "+i.innerHTML),this._postProcessContent(i),!o.excerpt){var c=i.getElementsByTagName("p");c.length>0&&(o.excerpt=c[0].textContent.trim())}var l=i.textContent;return{title:this._articleTitle,byline:o.byline||this._articleByline,dir:this._articleDir,lang:this._articleLang,content:this._serializer(i),textContent:l,length:l.length,excerpt:o.excerpt,siteName:o.siteName||this._articleSiteName}}},typeof t=="object"&&(t.exports=r)}),jc=Er((e,t)=>{var r={unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i};function n(o){return(!o.style||o.style.display!="none")&&!o.hasAttribute("hidden")&&(!o.hasAttribute("aria-hidden")||o.getAttribute("aria-hidden")!="true"||o.className&&o.className.indexOf&&o.className.indexOf("fallback-image")!==-1)}function a(o,i={}){typeof i=="function"&&(i={visibilityChecker:i});var c={minScore:20,minContentLength:140,visibilityChecker:n};i=Object.assign(c,i);var l=o.querySelectorAll("p, pre, article"),s=o.querySelectorAll("div > br");if(s.length){var u=new Set(l);[].forEach.call(s,function(p){u.add(p.parentNode)}),l=Array.from(u)}var m=0;return[].some.call(l,function(p){if(!i.visibilityChecker(p))return!1;var g=p.className+" "+p.id;if(r.unlikelyCandidates.test(g)&&!r.okMaybeItsACandidate.test(g)||p.matches("li p"))return!1;var h=p.textContent.trim().length;return h<i.minContentLength?!1:(m+=Math.sqrt(h-i.minContentLength),m>i.minScore)})}typeof t=="object"&&(t.exports=a)}),Jo=Er((e,t)=>{var r=Uc(),n=jc();t.exports={Readability:r,isProbablyReaderable:n}}),Qo={};Bc(Qo,{Readability:()=>ei,default:()=>ni,isProbablyReaderable:()=>ti});var Zo=Xo(Jo());$c(Qo,Xo(Jo()));var{Readability:ei,isProbablyReaderable:ti}=Zo,{default:Yo,...Hc}=Zo,ni=Yo!==void 0?Yo:Hc;var Gf=dn.alert;var Et=console,Cr=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let r=performance.now(),n=Math.round(r-this.#e),a=qe.green;n>1e4?a=qe.red:n>1e3&&(a=qe.yellow),Et.debug(qe.dim(bt+" TIMING:"),t,"in",a(n+"ms")),this.#e=r}},Pr=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&Et.log(qe.dim(bt+" DEBUG:"),...t)}v(...t){this.#e<=0}info(...t){this.#e<=1&&Et.log(qe.green(bt+" INFO:"),...t)}l(...t){this.#e<=1}warn(...t){this.#e<=2&&Et.warn(qe.yellow(bt+" WARN:"),...t)}error(...t){this.#e<=3&&Et.error(qe.red(bt+" ERROR:"),...t)}fatal(...t){this.#e<=4&&Et.error(qe.red(bt+" FATAL:"),...t)}timing(){return this.level===0?new Cr:{reset:()=>{},stop:()=>{}}}},gh=new Pr;var bn=document.querySelector.bind(document),ri=e=>{if(document.body.removeChild(bn("#drop-target")),e){let t=new FileReader;t.readAsText(e,"UTF-8"),t.onload=function(r){let n=t.result,a=zt.parse(n),o=document.getElementById("mount");o&&Qt(Y(Aa,{lang:"zh-CN",translations:fo,fallbackLang:"zh-CN",children:Y(go,{data:{parsed:a,file:e}})}),o)},t.onerror=function(r){alert("error reading file"),window.location.reload()}}},Wc=e=>e.preventDefault(),Kc=e=>{e.preventDefault();let t=Array.from(e.dataTransfer.items).find(r=>r.kind==="file");if(t){let r=t.webkitGetAsEntry();ri(r.isFile?t.getAsFile():r).catch(n=>{})}},ai=bn("#drop-target");ai.addEventListener("drop",Kc);ai.addEventListener("dragover",Wc);bn("#file-input").addEventListener("change",e=>ri(e.target.files[0]));bn("#file-button").addEventListener("click",()=>{document.querySelector("#file-input").click()});})();
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
