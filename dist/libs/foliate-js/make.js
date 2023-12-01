(()=>{var yh=Object.defineProperty;var wh=(t,e)=>{for(var n in e)yh(t,n,{get:e[n],enumerable:!0})};var J={BUILD_TIME:"2023-12-01T11:12:26.000Z",VERSION:"0.12.2",PROD:"1",REDIRECT_URL:"https://dash.immersivetranslate.com/auth-done/",PROD_API:"1",BETA:"0",IMMERSIVE_TRANSLATE_INJECTED_CSS:`:root {
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
}

[data-immersive-translate-root-translation-theme="none"] .immersive-translate-target-translation-theme-mask-inner {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="mask"] .immersive-translate-target-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
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
[data-immersive-translate-root-translation-theme="opacity"] .immersive-translate-target-inner,.immersive-translate-target-translation-theme-opacity-inner:hover {
  filter: opacity(calc(var(--immersive-translate-theme-opacity-opacity) * 1%)) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
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
  right: 0;
  top: 335px;
  width: 56px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  display: none;
}

.immersive-translate-float-ball-btn {
  background: linear-gradient(320.9deg, #DB3B7B 26.47%, #FFCEE2 88.86%);
  height: 36px;
  width: 56px;
  border-top-left-radius: 36px;
  border-bottom-left-radius: 36px;
  box-shadow: 2px 6px 10px 0px #0E121629;
}


.immersive-translate-float-ball-btn div {
  background: linear-gradient(140.91deg, #FF87B7 12.61%, #EC4C8C 76.89%);
  height: 34px;
  width: 54px;
  border-top-left-radius: 34px;
  border-bottom-left-radius: 34px;
  margin: 1px;
  display: flex;
  align-items: center;
}

.immersive-translate-float-ball-logo-img {
  width: 20px;
  height: 20px;
  margin-left: 10px;
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
`,IMMERSIVE_TRANSLATE_VIDEO_SUBTITLE_INJECT:'(()=>{var u="imt-subtitle-inject",c=class{from;to;constructor(e,s){this.from=e,this.to=s}sendMessages(e){globalThis.postMessage({type:u,to:this.to,from:this.from,action:e.action,data:e.data,id:e.id||new Date().getTime(),isAsync:!1})}sendAsyncMessages({action:e,data:s}){return new Promise(t=>{let n=new Date().getTime();globalThis.postMessage({type:u,to:this.to,from:this.from,action:e,data:s,id:n,isAsync:!0});let o=({data:a})=>{u===a.type&&a.id===n&&a.to===this.from&&(t(a.data),globalThis.removeEventListener("message",o))};globalThis.addEventListener("message",o)})}handleMessageOnce(e){return new Promise(s=>{let t=({data:n})=>{u===n.type&&n.action===e&&n.to===this.from&&(s(n.data),globalThis.removeEventListener("message",t))};globalThis.addEventListener("message",t)})}handleMessage(e,s){let t=({data:n})=>{u===n.type&&n.action===e&&n.to===this.from&&s(n)};return globalThis.addEventListener("message",t),()=>{globalThis.removeEventListener("message",t)}}handleMessages(e){let s=({data:t})=>{u===t.type&&t.to===this.from&&e(t)};return globalThis.addEventListener("message",s),()=>{globalThis.removeEventListener("message",s)}}},M=new c("content-script","inject"),l=new c("inject","content-script"),p={get(i,e,s){return e in i?(...t)=>{let n=i[e];return typeof n=="function"?n.apply(i,t):Reflect.get(i,e,s)}:t=>i.sendAsyncMessages({action:e,data:t})}},S=new Proxy(l,p),w=new Proxy(M,p);var r=class{content=S;config;constructor(e){this.config=e,l.handleMessages(async({action:s,id:t,data:n})=>{let o=this[s];if(!o)return;let a=o.apply(this,[n]);a instanceof Promise&&(a=await a),l.sendMessages({id:t,data:a})})}triggerSubtitle(e){}async translateSubtitle(e){let s=await this.content.requestSubtitle({url:e._url});if(s){let t;e.responseType=="arraybuffer"?t=new TextEncoder().encode(s).buffer:t=s,Object.defineProperty(e,"responseText",{value:t,writable:!1}),Object.defineProperty(e,"response",{value:t,writable:!1})}}translateSubtitleWithFetch(e){return this.content.requestSubtitle({fetchInfo:e})}async getVideoMeta(e){}isSubtitleRequest(e){return!this.config?.subtitleUrlRegExp||!e?!1:new RegExp(this.config.subtitleUrlRegExp).test(e||"")}};var d=class extends r{timer=null;triggerSubtitle({force:e}){setTimeout(()=>{if(this.config?.subtitleButtonSelector){let s=document.querySelector(this.config.subtitleButtonSelector);if(s){let t=s.getAttribute("aria-pressed")==="true";t&&e?(s.click(),setTimeout(()=>{s.click()},100)):t||s.click();return}}if(this.config?.videoPlayerSelector){let s=document.querySelector(this.config.videoPlayerSelector);s.toggleSubtitles(),setTimeout(()=>{s.toggleSubtitles()},100)}},1e3)}async getVideoMeta(){try{let e=await fetch(globalThis.location.href);if(!e.ok)throw new Error("request subtitle error");let s=await e.text(),n=[...new window.DOMParser().parseFromString(s,"text/html").body.querySelectorAll(":scope > script")].find(o=>o.textContent?.includes("ytInitialPlayerResponse"));return new Function(`const window = {}; ${n?.textContent}; return ytInitialPlayerResponse;`)()}catch{return null}}};var g=class extends r{timer=null;videoMeta={};constructor(e){super(e),this.hookJSON()}hookJSON(){let e=JSON.parse;JSON.parse=s=>{let t=e(s);return t&&t.result&&t.result.timedtexttracks&&t.result.movieId&&(this.videoMeta[t.result.movieId]=t.result),t}}getVideoMeta(e){return this.videoMeta[e]}};var f=class extends r{timer=null;videoMeta={};constructor(e){super(e),this.hookJSON()}hookJSON(){let e=JSON.parse;JSON.parse=s=>{let t=e(s);return t?.asset?.captions?.length?this.videoMeta[t.id]=t?.asset:t?.previews&&t?.course&&t?.previews?.forEach(n=>{this.videoMeta[n.id]=n}),t}}getVideoMeta(e){return this.videoMeta[e]}};async function v(){let i=await l.sendAsyncMessages({action:"getConfig"});if(!i)return;let s={youtube:d,netflix:g,webvtt:r,khanacademy:r,bilibili:r,udemy:f}[i.type||""];if(!s)return;let t=new s(i);x(t,i)}h();v();function x(i,e){if(e.hookType==="xhr"){let s=XMLHttpRequest.prototype.open,t=XMLHttpRequest.prototype.send,n=function(){return this._url=arguments[1],s.apply(this,arguments)},o=async function(){return i.isSubtitleRequest(this._url)?(await h(),await i.translateSubtitle(this),t.apply(this,arguments)):t.apply(this,arguments)};Object.defineProperty(XMLHttpRequest.prototype,"open",{value:n,writable:!0}),Object.defineProperty(XMLHttpRequest.prototype,"send",{value:o,writable:!0})}else if(e.hookType==="fetch"){let s=globalThis.fetch;globalThis.fetch=async function(t,n){let o=typeof t=="string"?t:t.url;if(!i.isSubtitleRequest(o))return s(t,n);await h();let y;typeof t=="string"?y={url:t,method:"GET",headers:{}}:y=await R(t);let m=await i.translateSubtitleWithFetch(JSON.stringify({input:y,options:n}));return m?new Response(m):s(t,n)}}}var b=!1;async function h(){return b||(await l.handleMessageOnce("contentReady"),b=!0),b}function R(i){let e={url:i.url,method:i.method,headers:Object.fromEntries(i.headers.entries())};if(i.body)if(i.body instanceof FormData){let s={};for(let[t,n]of i.body.entries())s[t]=n;e.body=s}else return i.text().then(s=>(e.body=s,e));return Promise.resolve(e)}})();\n',PDF_VIEWER_URL:"https://app.immersivetranslate.com/pdf/index.html",OPTIONS_URL:"https://dash.immersivetranslate.com/",EBOOK_VIEWER_URL:"https://app.immersivetranslate.com/ebook/",EBOOK_BUILDER_URL:"https://app.immersivetranslate.com/ebook/make/",SUBTITLE_BUILDER_URL:"https://app.immersivetranslate.com/subtitle/",HTML_VIEWER_URL:"https://app.immersivetranslate.com/html/",SHARE_DRAFT_URL:"https://immersivetranslate.com/preview",MOCK:"0",DEBUG:"0",IMMERSIVE_TRANSLATE_USERSCRIPT:"1",INSTALL_FROM:"official_userscript"};var xh=(t,e)=>t.map((n,r,i)=>e(n,r,i)?r:null).filter(n=>n!=null),qs=(t,e)=>[-1,...e,t.length].reduce(({xs:n,a:r},i)=>({xs:n?.concat([t.slice(r+1,i)])??[],a:i}),{}).xs,Th=(t,e)=>t.slice(0,-1).concat([t[t.length-1].concat(e[0])]).concat(e.slice(1)),ha=/\d/,ur=/^epubcfi\((.*)\)$/,Hs=t=>t.replace(/[\^[\](),;=]/g,"^$&"),_h=t=>ur.test(t)?t:`epubcfi(${t})`,Sh=t=>t.match(ur)?.[1]??t,kh=t=>(...e)=>`epubcfi(${t(...e.map(n=>n.match(ur)?.[1]??n))})`,Ks=kh((...t)=>t.join("!")),Ah=t=>{let e=[],n,r,i="",a=s=>(e.push(s),n=null,i=""),o=s=>(i+=s,r=!1);for(let s of Array.from(t.trim()).concat("")){if(s==="^"&&!r){r=!0;continue}if(n==="!")a(["!"]);else if(n===",")a([","]);else if(n==="/"||n===":")if(ha.test(s)){o(s);continue}else a([n,parseInt(i)]);else if(n==="~")if(ha.test(s)||s==="."){o(s);continue}else a(["~",parseFloat(i)]);else if(n==="@"){if(s===":"){a(["@",parseFloat(i)]),n="@";continue}if(ha.test(s)||s==="."){o(s);continue}else a(["@",parseFloat(i)])}else if(n==="["){s===";"&&!r?(a(["[",i]),n=";"):s===","&&!r?(a(["[",i]),n="["):s==="]"&&!r?a(["[",i]):o(s);continue}else if(n?.startsWith(";")){s==="="&&!r?(n=`;${i}`,i=""):s===";"&&!r?(a([n,i]),n=";"):s==="]"&&!r?a([n,i]):o(s);continue}(s==="/"||s===":"||s==="~"||s==="@"||s==="["||s==="!"||s===",")&&(n=s)}return e},Gs=(t,e)=>xh(t,([n])=>n===e),Eh=t=>{let e=[],n;for(let[r,i]of t){if(r==="/")e.push({index:i});else{let a=e[e.length-1];if(r===":")a.offset=i;else if(r==="~")a.temporal=i;else if(r==="@")a.spatial=(a.spatial??[]).concat(i);else if(r===";s")a.side=i;else if(r==="[")if(n==="/"&&i)a.id=i;else{a.text=(a.text??[]).concat(i);continue}}n=r}return e},js=t=>qs(t,Gs(t,"!")).map(Eh),nn=t=>{let e=Ah(Sh(t)),n=Gs(e,",");if(!n.length)return js(e);let[r,i,a]=qs(e,n).map(js);return{parent:r,start:i,end:a}},Ch=({index:t,id:e,offset:n,temporal:r,spatial:i,text:a,side:o})=>{let s=o?`;s=${o}`:"";return`/${t}`+(e?`[${Hs(e)}${s}]`:"")+(n!=null&&t%2?`:${n}`:"")+(r?`~${r}`:"")+(i?`@${i.join(":")}`:"")+(a||!e&&o?"["+(a?.map(Hs)?.join(",")??"")+s+"]":"")},Vs=t=>t.parent?[t.parent,t.start,t.end].map(Vs).join(","):t.map(e=>e.map(Ch).join("")).join("!"),Gr=t=>_h(Vs(t)),qt=(t,e)=>typeof t=="string"?Gr(qt(nn(t),e)):t.parent?Th(t.parent,t[e?"end":"start"]):t,Lh=(t,e)=>{typeof t=="string"&&(t=nn(t)),typeof e=="string"&&(e=nn(e)),t=qt(t),e=qt(e,!0);let n=t[t.length-1],r=e[e.length-1],i=[],a=[],o=[],s=!0,l=Math.max(n.length,r.length);for(let u=0;u<l;u++){let p=n[u],d=r[u];s&&=p?.index===d?.index&&!p?.offset&&!d?.offset,s?i.push(p):(p&&a.push(p),d&&o.push(d))}let c=t.slice(0,-1).concat([i]);return Gr({parent:c,start:[a],end:[o]})},cr=(t,e)=>{if(typeof t=="string"&&(t=nn(t)),typeof e=="string"&&(e=nn(e)),t.start||e.start)return cr(qt(t),qt(e))||cr(qt(t,!0),qt(e,!0));for(let n=0;n<Math.max(t.length,e.length);n++){let r=t[n],i=e[n],a=Math.max(r.length,i.length)-1;for(let o=0;o<=a;o++){let s=r[o],l=i[o];if(!s)return-1;if(!l||s.index>l.index)return 1;if(s.index<l.index)return-1;if(o===a){if(s.offset>l.offset)return 1;if(s.offset<l.offset)return-1}}}return 0},fa=({nodeType:t})=>t===3||t===4,qr=({nodeType:t})=>t===1,ga=t=>{let e=Array.from(t.childNodes).filter(n=>fa(n)||qr(n)).reduce((n,r)=>{let i=n[n.length-1];return i?fa(r)?Array.isArray(i)?i.push(r):fa(i)?n[n.length-1]=[i,r]:n.push(r):qr(i)?n.push(null,r):n.push(r):n.push(r),n},[]);return qr(e[0])&&e.unshift("first"),qr(e[e.length-1])&&e.push("last"),e.unshift("before"),e.push("after"),e},Dh=(t,e)=>t?ga(t)[e]:null,ma=(t,e)=>{let{id:n}=e[e.length-1];if(n){let a=t.ownerDocument.getElementById(n);if(a)return{node:a,offset:0}}for(let{index:a}of e){let o=Dh(t,a);if(o==="first")return{node:t.firstChild??t};if(o==="last")return{node:t.lastChild??t};if(o==="before")return{node:t,before:!0};if(o==="after")return{node:t,after:!0};t=o}let{offset:r}=e[e.length-1];if(!Array.isArray(t))return{node:t,offset:r};let i=0;for(let a of t){let{length:o}=a.nodeValue;if(i+o>=r)return{node:a,offset:r-i};i+=o}},Kr=(t,e)=>{let{parentNode:n,id:r}=t,i=ga(n),a=i.findIndex(l=>Array.isArray(l)?l.some(c=>c===t):l===t),o=i[a];if(Array.isArray(o)){let l=0;for(let c of o)if(c===t){l+=e;break}else l+=c.nodeValue.length;e=l}let s={id:r,index:a,offset:e};return n!==t.ownerDocument.documentElement?Kr(n).concat(s):[s]},Xs=t=>{let{startContainer:e,startOffset:n,endContainer:r,endOffset:i}=t,a=Kr(e,n);if(t.collapsed)return Gr([a]);let o=Kr(r,i);return Lh([a],[o])},Vr=(t,e)=>{let n=qt(e),r=qt(e,!0),i=t.documentElement,a=ma(i,n[0]),o=ma(i,r[0]),s=t.createRange();return a.before?s.setStartBefore(a.node):a.after?s.setStartAfter(a.node):s.setStart(a.node,a.offset),o.before?s.setEndBefore(o.node):o.after?s.setEndAfter(o.node):s.setEnd(o.node,o.offset),s},Ys=t=>{let e=[],{parentNode:n}=t[0],r=Kr(n);for(let[i,a]of ga(n).entries()){let o=t[e.length];a===o&&e.push(Gr([r.concat({id:o.id,index:i})]))}return e},ba=(t,e)=>ma(t.documentElement,qt(e)).node,ya={fromIndex:t=>`/6/${(t+1)*2}`,toIndex:t=>t?.at(-1).index/2-1};var Rh=t=>{let e=0,n=r=>{if(r.id=e++,r.subitems)for(let i of r.subitems)n(i)};for(let r of t)n(r);return t},Qs=t=>t.map(e=>e.subitems?.length?[e,Qs(e.subitems)].flat():e).flat(),dr=class{constructor({toc:e,ids:n,splitHref:r,getFragment:i}){Rh(e);let a=Qs(e),o=new Map;for(let[l,c]of a.entries()){let[u,p]=r(c?.href)??[],d={fragment:p,item:c};o.has(u)?o.get(u).items.push(d):o.set(u,{prev:a[l-1],items:[d]})}let s=new Map;for(let[l,c]of n.entries())o.has(c)?s.set(c,o.get(c)):s.set(c,s.get(n[l-1]));this.ids=n,this.map=s,this.getFragment=i}getProgress(e,n){let r=this.ids[e],i=this.map.get(r);if(!i)return null;let{prev:a,items:o}=i;if(!o)return a;if(!n||o.length===1&&!o[0].fragment)return o[0].item;let s=n.startContainer.getRootNode();for(let[l,{fragment:c}]of o.entries()){let u=this.getFragment(s,c);if(u&&n.comparePoint(u,0)>0)return o[l-1]?.item??a}return o[o.length-1].item}},Xr=class{constructor(e,n,r){this.sizes=e.map(i=>i.linear==="no"?0:i.size),this.sizePerLoc=n,this.sizePerTimeUnit=r,this.sizeTotal=this.sizes.reduce((i,a)=>i+a,0)}getProgress(e,n){let{sizes:r,sizePerLoc:i,sizePerTimeUnit:a,sizeTotal:o}=this,s=r[e]??0,c=r.slice(0,e).reduce((d,h)=>d+h,0)+n*s,u=o-c,p=(1-n)*s;return{fraction:c/o,section:{current:e,total:r.length},location:{current:Math.floor(c/i),total:Math.ceil(o/i)},time:{section:p/a,total:u/a}}}getSection(e){let{sizes:n,sizeTotal:r}=this,i=e*r,a=-1,o=0,s=0;for(let[l,c]of n.entries()){let u=s+c;if(u>i){a=l,o=(i-s)/c;break}s=u}return[a,o]}};var zn=t=>document.createElementNS("http://www.w3.org/2000/svg",t),Yr=class{#e=zn("svg");#t=new Map;constructor(){Object.assign(this.#e.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none"});let e=matchMedia("(prefers-color-scheme: dark)"),n=()=>this.#e.style.mixBlendMode=e.matches?"normal":"multiply";e.addEventListener("change",n),n()}get element(){return this.#e}add(e,n,r,i){this.#t.has(e)&&this.remove(e),typeof n=="function"&&(n=n(this.#e.getRootNode()));let a=n.getClientRects(),o=r(a,i);this.#e.append(o),this.#t.set(e,{range:n,draw:r,options:i,element:o,rects:a})}remove(e){this.#t.has(e)&&(this.#e.removeChild(this.#t.get(e).element),this.#t.delete(e))}redraw(){for(let e of this.#t.values()){let{range:n,draw:r,options:i,element:a}=e;this.#e.removeChild(a);let o=n.getClientRects(),s=r(o,i);this.#e.append(s),e.element=s,e.rects=o}}hitTest({x:e,y:n}){let r=Array.from(this.#t.entries());for(let i=r.length-1;i>=0;i--){let[a,o]=r[i];for(let{left:s,top:l,right:c,bottom:u}of o.rects)if(l<=n&&s<=e&&u>n&&c>e)return[a,o.range]}return[]}static underline(e,n={}){let{color:r="red",width:i=2}=n,a=zn("g");a.setAttribute("fill",r);for(let{left:o,bottom:s,width:l}of e){let c=zn("rect");c.setAttribute("x",o),c.setAttribute("y",s-i),c.setAttribute("height",i),c.setAttribute("width",l),a.append(c)}return a}static highlight(e,n={}){let{color:r="red"}=n,i=zn("g");i.setAttribute("fill",r),i.setAttribute("fill-opacity",.3);for(let{left:a,top:o,height:s,width:l}of e){let c=zn("rect");c.setAttribute("x",a),c.setAttribute("y",o),c.setAttribute("height",s),c.setAttribute("width",l),i.append(c)}return i}static copyImage([e],n={}){let{src:r}=n,i=zn("image"),{left:a,top:o,height:s,width:l}=e;return i.setAttribute("href",r),i.setAttribute("x",a),i.setAttribute("y",o),i.setAttribute("height",s),i.setAttribute("width",l),i}};var Zr=class{#e=new Map;#t=new Map;#n=new Map;#r=new Map;constructor({resolve:e,compare:n,onAdd:r,onDelete:i,onUpdate:a}){this.resolve=e,this.compare=n,this.onAdd=r,this.onDelete=i,this.onUpdate=a}async add(e,n){let{value:r}=e;if(this.#t.has(r))return;let{index:i,anchor:a}=await this.resolve(r);if(this.#t.set(r,e),this.#r.set(r,i),this.#n.set(r,a),this.#e.has(i)){let o=this.#e.get(i);if(n)o.push(e),this.onAdd?.(e,i,o.length-1);else{let s=0;for(let l=0;l<o.length;l++){let c=o[l].value;if(this.compare(r,c)<=0)break;s=l+1}o.splice(s,0,e),this.onAdd?.(e,i,s)}}else this.#e.set(i,[e]),this.onAdd?.(e,i,0)}update(e){let n=this.#r.get(e.value),r=this.#t.get(e.value);Object.assign(r,e),this.onUpdate?.(e,n)}delete(e){let n=this.#r.get(e),r=this.#e.get(n),i=r.findIndex(a=>a.value===e);r.splice(i,1),this.#t.delete(e),this.#r.delete(e),this.#n.delete(e),this.onDelete?.(e,n,i)}getByIndex(e){return this.#e.get(e)??[]}getAnchor(e){return this.#n.get(e)}};var Oh=t=>new Promise(e=>setTimeout(e,t)),Nh=(t,e,n)=>{let r;return(...i)=>{let a=()=>{r=null,n||t(...i)},o=n&&!r;r&&clearTimeout(r),r=setTimeout(a,e),o&&t(...i)}},Ph=t=>{if(!t?.collapsed)return t;let{endOffset:e,endContainer:n}=t;if(n.nodeType===1)return n;if(e+1<n.length)t.setEnd(n,e+1);else if(e>1)t.setStart(n,e-1);else return n.parentNode;return t},Qr=(t,e,n,r=n)=>{let i=t.createRange();return i.setStart(e,n),i.setEnd(e,r),i},Jr=(t,e,n,r=0,i=e.nodeValue.length)=>{if(i-r===1)return n(Qr(t,e,r),Qr(t,e,i))<0?r:i;let a=Math.floor(r+(i-r)/2),o=n(Qr(t,e,r,a),Qr(t,e,a,i));return o<0?Jr(t,e,n,r,a):o>0?Jr(t,e,n,a,i):a},{SHOW_ELEMENT:Mh,SHOW_TEXT:Ih,SHOW_CDATA_SECTION:Fh,FILTER_ACCEPT:Js,FILTER_REJECT:el,FILTER_SKIP:tl}=NodeFilter,Bh=Mh|Ih|Fh,zh=(t,e,n,r)=>{let i=d=>{let h=d.localName?.toLowerCase();if(h==="script"||h==="style")return el;if(d.nodeType===1){let{left:b,right:g}=r(d.getBoundingClientRect());if(g<e||b>n)return el;if(b>=e&&g<=n)return Js}else{if(!d.nodeValue?.trim())return tl;let b=t.createRange();b.selectNodeContents(d);let{left:g,right:m}=r(b.getBoundingClientRect());if(m>=e&&g<=n)return Js}return tl},a=t.createTreeWalker(t.body,Bh,{acceptNode:i}),o=[];for(let d=a.nextNode();d;d=a.nextNode())o.push(d);let s=o[0]??t.body,l=o[o.length-1]??s,c=s.nodeType===1?0:Jr(t,s,(d,h)=>{let b=r(d.getBoundingClientRect()),g=r(h.getBoundingClientRect());return b.right<e&&g.left>e?0:g.left>e?-1:1}),u=l.nodeType===1?0:Jr(t,l,(d,h)=>{let b=r(d.getBoundingClientRect()),g=r(h.getBoundingClientRect());return b.right<n&&g.left>n?0:g.left>n?-1:1}),p=t.createRange();return p.setStart(s,c),p.setEnd(l,u),p},Uh=t=>{let{defaultView:e}=t,{writingMode:n,direction:r}=e.getComputedStyle(t.body),i=n==="vertical-rl"||n==="vertical-lr",a=t.body.dir==="rtl"||r==="rtl"||t.documentElement.dir==="rtl";return{vertical:i,rtl:a}},$h=t=>{let e=t.defaultView.getComputedStyle(t.body);return e.backgroundColor==="rgba(0, 0, 0, 0)"&&e.backgroundImage==="none"?t.defaultView.getComputedStyle(t.documentElement).background:e.background},wa=class{#e=document.createElement("div");#t=document.createElement("iframe");#n=document.createRange();#r;#i=!1;#a=!1;#o=!0;#s;#l={};constructor({container:e}){this.container=e,this.#t.classList.add("filter"),this.#e.append(this.#t),Object.assign(this.#e.style,{position:"relative",overflow:"hidden",flex:"0 0 auto",width:"100%",height:"100%"}),Object.assign(this.#t.style,{overflow:"hidden",border:"0",display:"none",width:"100%",height:"100%"}),this.#t.setAttribute("sandbox","allow-same-origin allow-scripts"),this.#t.setAttribute("scrolling","no")}get element(){return this.#e}get document(){return this.#t.contentDocument}async load(e,n,r){if(typeof e!="string")throw new Error(`${e} is not string`);return new Promise(i=>{this.#t.addEventListener("load",()=>{let a=this.document;n?.(a),this.#t.style.display="block";let{vertical:o,rtl:s}=Uh(a),l=$h(a);this.#t.style.display="none",this.#i=o,this.#a=s,this.#n.selectNodeContents(a.body);let c=r?.({vertical:o,rtl:s,background:l});this.#t.style.display="block",this.render(c),new ResizeObserver(()=>this.expand()).observe(a.body),i()},{once:!0}),this.#t.src=e})}render(e){this.#o=e.flow!=="scrolled",this.#l=e,this.#o?this.columnize(e):this.scrolled(e)}scrolled({gap:e,columnWidth:n}){let r=this.#i,i=this.document;Object.assign(i.documentElement.style,{boxSizing:"border-box",padding:r?`${e}px 0`:`0 ${e}px`,columnWidth:"auto",height:"auto",width:"auto"}),Object.assign(i.body.style,{[r?"maxHeight":"maxWidth"]:`${n}px`,margin:"auto"}),this.setImageSize(),this.expand()}columnize({width:e,height:n,gap:r,columnWidth:i}){let a=this.#i;this.#s=a?n:e;let o=this.document;Object.assign(o.documentElement.style,{boxSizing:"border-box",columnWidth:`${i}px`,columnGap:`${r}px`,columnFill:"auto",...a?{width:`${e}px`}:{height:`${n}px`},padding:a?`${r/2}px 0`:`0 ${r/2}px`,overflow:"hidden",overflowWrap:"anywhere",position:"static",border:"0",margin:"0",maxHeight:"none",maxWidth:"none",minHeight:"none",minWidth:"none",webkitLineBoxContain:"block glyphs replaced"}),Object.assign(o.body.style,{maxHeight:"none",maxWidth:"none",margin:"0"}),this.setImageSize(),this.expand()}setImageSize(){let{width:e,height:n,margin:r}=this.#l,i=this.#i,a=this.document;for(let o of a.body.querySelectorAll("img, svg, video")){let{maxHeight:s,maxWidth:l}=a.defaultView.getComputedStyle(o);Object.assign(o.style,{maxHeight:i?s!=="none"&&s!=="0px"?s:"100%":`${n-r*2}px`,maxWidth:i?`${e-r*2}px`:l!=="none"&&l!=="0px"?l:"100%",objectFit:"contain",pageBreakInside:"avoid",breakInside:"avoid",boxSizing:"border-box"})}}expand(){if(this.#o){let e=this.#i?"height":"width",n=this.#i?"width":"height",r=this.#n.getBoundingClientRect()[e],a=Math.ceil(r/this.#s)*this.#s;this.#e.style.padding="0",this.#t.style[e]=`${a}px`,this.#e.style[e]=`${a}px`,this.#t.style[n]="100%",this.#e.style[n]="100%",this.document&&(this.document.documentElement.style[e]=`${a}px`),this.#r&&(this.#r.element.style.margin="0",this.#r.element.style[e]=`${a}px`,this.#r.redraw())}else{let e=this.#i?"width":"height",n=this.#i?"height":"width",a=this.document?.documentElement?.getBoundingClientRect()?.[e],{margin:o}=this.#l,s=this.#i?`0 ${o}px`:`${o}px 0`;this.#e.style.padding=s,this.#t.style[e]=`${a}px`,this.#e.style[e]=`${a}px`,this.#t.style[n]="100%",this.#e.style[n]="100%",this.#r&&(this.#r.element.style.margin=s,this.#r.element.style[e]=`${a}px`,this.#r.redraw())}}set overlayer(e){this.#r=e,this.#e.append(e.element)}get overlayer(){return this.#r}},ei=class{#e=document.createElement("div");#t=document.createElement("div");#n;#r=!1;#i=!1;#a=-1;#o=0;#s=!1;#l=new WeakMap;layout={margin:48,gap:40,maxColumnWidth:700};constructor({book:e,onLoad:n,onRelocated:r,createOverlayer:i}){this.sections=e.sections,this.onLoad=n,this.onRelocated=r,this.createOverlayer=i,Object.assign(this.#e.style,{boxSizing:"border-box",width:"100%",height:"100%",position:"absolute"}),this.#e.append(this.#t),Object.assign(this.#t.style,{width:"100%",height:"100%"}),new ResizeObserver(()=>this.render()).observe(this.#e),this.#t.addEventListener("scroll",Nh(()=>{this.scrolled&&this.#b("scroll")},250))}get element(){return this.#e}#d(){return this.#n&&this.#t.removeChild(this.#n.element),this.#n=new wa({container:this.#e}),this.#t.append(this.#n.element),this.#n}#c({vertical:e,rtl:n,background:r}){this.#r=e,this.#i=n,this.#e.style.background=r;let{flow:i,margin:a,gap:o,maxColumnWidth:s}=this.layout;if(i==="scrolled"){this.#e.setAttribute("dir",e?"rtl":"ltr"),this.#e.style.padding="0",this.#t.style.overflow="scroll";let g=this.layout.maxColumnWidth;return{flow:i,margin:a,gap:o,columnWidth:g}}let{width:l,height:c}=this.#t.getBoundingClientRect(),u=e?c:l,p=Math.ceil(u/s),d=u/p-o;this.#e.setAttribute("dir",n?"rtl":"ltr");let h=`${e?o:o/2}px`,b=`${e?a-o/2:a}px`;return this.#e.style.padding=`${b} ${h}`,this.#t.style.overflow="hidden",{height:c,width:l,margin:a,gap:o,columnWidth:d}}render(){this.#n&&(this.#n.render(this.#c({vertical:this.#r,rtl:this.#i})),this.#g())}get scrolled(){return this.layout.flow==="scrolled"}get scrollProp(){let{scrolled:e}=this;return this.#r?e?"scrollLeft":"scrollTop":e?"scrollTop":"scrollLeft"}get sideProp(){let{scrolled:e}=this;return this.#r?e?"width":"height":e?"height":"width"}get size(){return this.#t.getBoundingClientRect()[this.sideProp]}get viewSize(){return this.#n.element.getBoundingClientRect()[this.sideProp]}get start(){return Math.abs(this.#t[this.scrollProp])}get end(){return this.start+this.size}get page(){return Math.floor((this.start+this.end)/2/this.size)}get pages(){return Math.round(this.viewSize/this.size)}#u(){if(this.scrolled){let n=this.viewSize,r=this.layout.margin;return this.#r?({left:i,right:a})=>({left:n-a-r,right:n-i-r}):({top:i,bottom:a})=>({left:i+r,right:a+r})}let e=this.pages*this.size;return this.#i?({left:n,right:r})=>({left:e-r,right:e-n}):this.#r?({top:n,bottom:r})=>({left:n,right:r}):n=>n}async#h(e,n){if(this.scrolled){let i=this.#u()(e).left;return this.#p(i,n)}let r=this.#u()(e).left+this.layout.margin/2;return this.#f(Math.floor(r/this.size),n)}async#p(e,n){let r=this.#t,{scrollProp:i}=this;if(r[i]===e){this.#b(n);return}this.scrolled&&this.#r&&(e=-e),r[i]=e,this.#b(n)}async#f(e,n){let r=this.size*(this.#i?-e:e);return this.#p(r,n)}async#g(e){let n=Ph(this.#o).getBoundingClientRect?.();if(n){await this.#h(n,"anchor"),e&&this.#T();return}if(this.scrolled){await this.#p(this.#o*this.viewSize,"anchor");return}let{pages:r}=this;if(!r)return;let i=Math.round(this.#o*(r-1));await this.#f(i,"anchor")}#T(){let{defaultView:e}=this.#n.document;if(this.#o instanceof e.Range){let n=e.getSelection();n.removeAllRanges(),n.addRange(this.#o)}}#_(){return zh(this.#n.document,this.start,this.end,this.#u(),this.scrolled)}#b(e){let n=this.#_();e!=="anchor"&&(this.#o=n);let r=this.#a;this.scrolled?this.onRelocated?.(n,r,this.end/this.viewSize):this.pages>0&&this.onRelocated?.(n,r,(this.page+1)/this.pages)}async#w(e){let{index:n,src:r,anchor:i,onLoad:a,select:o}=await e;if(this.#a=n,r){let s=this.#d(),l=p=>{if(p.head){let d=p.createElement("style");p.head.append(d),this.#l.set(p,d)}a?.(p,n)},c=this.#c.bind(this);await s.load(r,l,c);let u=this.createOverlayer?.(s.document,n);u&&(s.overlayer=u),this.#n=s}this.#o=(typeof i=="function"?i(this.#n.document):i)??0,await this.#g(o)}#v(e){return e>-1&&e<this.pages}scrollPrev(){if(!this.#n)return null;if(this.scrolled)return this.start>0?this.#p(Math.max(0,this.start-this.size)):null;let e=this.page-1;return this.#v(e)?this.#f(e):null}scrollNext(){if(!this.#n)return null;if(this.scrolled)return this.viewSize-this.end>60?this.#p(Math.min(this.viewSize,this.end)):null;let e=this.page+1;return this.#v(e)?this.#f(e):null}#x(e){return e>=0&&e<=this.sections.length-1}async#y(e,n,r){if(this.#s)return;r&&(this.#s=!0);let i=e?.();if(i)await i;else{let{index:a,anchor:o,select:s}=await n;if(!this.#x(a))return this.#s=!1,null;if(a===this.#a)await this.#w({index:a,anchor:o,select:s});else{let l=this.#a,c=(...u)=>{this.sections[l]?.unload?.(),this.onLoad?.(...u)};await this.#w(Promise.resolve(this.sections[a].load()).then(u=>({index:a,src:u,anchor:o,onLoad:c,select:s})).catch(u=>({})))}}r&&(await Oh(100),this.#s=!1)}async goTo(e){return this.#y(null,e)}#m(e){for(let n=this.#a+e;this.#x(n);n+=e)if(this.sections[n]?.linear!=="no")return n}prev(){let e=this.#m(-1);return this.#y(()=>this.scrollPrev(),{index:e,anchor:()=>1},!0)}next(){let e=this.#m(1);return this.#y(()=>this.scrollNext(),{index:e},!0)}prevSection(){return this.goTo({index:this.#m(-1)})}nextSection(){return this.goTo({index:this.#m(1)})}firstSection(){let e=this.sections.findIndex(n=>n.linear!=="no");return this.goTo({index:e})}lastSection(){let e=this.sections.findLastIndex(n=>n.linear!=="no");return this.goTo({index:e})}getOverlayer(){if(this.#n)return{index:this.#a,overlayer:this.#n.overlayer,doc:this.#n.document}}setStyle(e){let n=this.#l.get(this.#n?.document);n&&(n.textContent=e)}async#S(e,n){this.#o=e,await this.#g(n)}};var nl=t=>t?.split(/[,;\s]/)?.filter(e=>e)?.map(e=>e.split("=").map(n=>n.trim())),Wh=(t,e)=>{if(t.documentElement.nodeName==="svg"){let[,,i,a]=t.documentElement.getAttribute("viewBox")?.split(/\s/)??[];return{width:i,height:a}}let n=nl(t.querySelector('meta[name="viewport"]')?.getAttribute("content"));if(n)return Object.fromEntries(n);if(typeof e=="string")return nl(e);if(e)return e;let r=t.querySelector("img");return r?{width:r.naturalWidth,height:r.naturalHeight}:{width:1e3,height:2e3}},va=class{#e=document.createElement("div");defaultViewport;spread;#t=!1;#n;#r;#i;#a;constructor(){Object.assign(this.#e.style,{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}),new ResizeObserver(()=>this.render()).observe(this.#e)}get element(){return this.#e}get side(){return this.#a}async#o(e){let n=document.createElement("div"),r=document.createElement("iframe");return n.append(r),Object.assign(r.style,{border:"0",display:"none",overflow:"hidden"}),r.setAttribute("scrolling","no"),r.classList.add("filter"),this.#e.append(n),e?new Promise(i=>{let a=()=>{r.removeEventListener("load",a),this.onLoad?.(r);let o=r.contentDocument,{width:s,height:l}=Wh(o,this.defaultViewport);i({element:n,iframe:r,width:parseFloat(s),height:parseFloat(l)})};r.addEventListener("load",a),r.src=e}):{blank:!0,element:n,iframe:r}}render(e=this.#a){if(!e)return;let n=this.#n??{},r=this.#i??this.#r,i=e==="left"?n:r,{width:a,height:o}=this.#e.getBoundingClientRect(),s=this.spread!=="both"&&this.spread!=="portrait"&&o>a;this.#t=s;let l=n.width??r.width,c=n.height??r.height,u=s?Math.min(a/(i.width??l),o/(i.height??c)):Math.min(a/((n.width??l)+(r.width??l)),o/Math.max(n.height??c,r.height??c)),p=d=>{let{element:h,iframe:b,width:g,height:m}=d;Object.assign(b.style,{width:`${g}px`,height:`${m}px`,transform:`scale(${u})`,transformOrigin:"top left",display:"block"}),Object.assign(h.style,{width:`${(g??l)*u}px`,height:`${(m??c)*u}px`,overflow:"hidden",display:"block"}),s&&d!==i&&(h.style.display="none")};this.#i?p(this.#i):(p(n),p(r))}async showSpread({left:e,right:n,center:r,side:i}){this.#e.replaceChildren(),this.#n=null,this.#r=null,this.#i=null,r?(this.#i=await this.#o(r),this.#a="center",this.render()):(this.#n=await this.#o(e),this.#r=await this.#o(n),this.#a=i,this.render())}goLeft(){if(!this.#i){if(this.#n?.blank)return!0;if(this.#t&&this.#n?.element?.style?.display==="none")return this.#r.element.style.display="none",this.#n.element.style.display="block",this.#a="left",!0}}goRight(){if(!this.#i){if(this.#r?.blank)return!0;if(this.#t&&this.#r?.element?.style?.display==="none")return this.#n.element.style.display="none",this.#r.element.style.display="block",this.#a="right",!0}}},ti=class{#e;#t=-1;#n=new va;constructor({book:e,onLoad:n,onRelocated:r}){this.book=e,this.onLoad=n,this.onRelocated=r;let{rendition:i}=e;this.#n.spread=i?.spread,this.#n.defaultViewport=i?.viewport;let a=e.dir==="rtl",o=!a;this.rtl=a,i?.spread==="none"?this.#e=e.sections.map(s=>({center:s})):this.#e=e.sections.reduce((s,l)=>{let c=s[s.length-1],{linear:u,pageSpread:p}=l;if(u==="no")return s;let d=()=>{let h={};return s.push(h),h};if(p==="center")d().center=l;else if(p==="left"){let h=c.center||c.left||o?d():c;h.left=l}else if(p==="right"){let h=c.center||c.right||a?d():c;h.right=l}else o?c.center||c.right?d().left=l:c.left?c.right=l:c.left=l:c.center||c.left?d().right=l:c.right?c.left=l:c.right=l;return s},[{}])}get element(){return this.#n.element}get index(){let e=this.#e[this.#t],n=e?.center??(this.#n.side==="left"?e.left??e.right:e.right??e.left);return this.book.sections.indexOf(n)}getSpreadOf(e){let n=this.#e;for(let r=0;r<n.length;r++){let{left:i,right:a,center:o}=n[r];if(i===e)return{index:r,side:"left"};if(a===e)return{index:r,side:"right"};if(o===e)return{index:r,side:"center"}}}async goToSpread(e,n){if(e<0||e>this.#e.length-1)return;if(e===this.#t){this.#n.render(n);return}this.#t=e;let r=this.#e[e];if(r.center){let i=await r.center?.load?.();await this.#n.showSpread({center:i})}else{let i=await r.left?.load?.(),a=await r.right?.load?.();await this.#n.showSpread({left:i,right:a,side:n})}this.onRelocated?.(null,this.index,0,1)}async select(e){await this.goTo(e)}async goTo(e){let{book:n}=this,r=await e,i=n.sections[r.index];if(!i)return;let{index:a,side:o}=this.getSpreadOf(i);await this.goToSpread(a,o)}async next(){if(this.rtl?this.#n.goLeft():this.#n.goRight())this.onRelocated?.(null,this.index,0,1);else return this.goToSpread(this.#t+1,this.rtl?"right":"left")}async prev(){if(this.rtl?this.#n.goRight():this.#n.goLeft())this.onRelocated?.(null,this.index,0,1);else return this.goToSpread(this.#t-1,this.rtl?"left":"right")}};var rl=t=>t.replace(/\s+/g," "),Hh=(t,{startIndex:e,startOffset:n,endIndex:r,endOffset:i})=>{let a=t[e],o=t[r],s=a===o?a.slice(n,i):a.slice(n)+t.slice(a+1,o).join("")+o.slice(0,i),l=rl(a.slice(0,n)).trimStart(),c=rl(o.slice(i)).trimEnd(),u=l.length<50?"":"\u2026",p=c.length<50?"":"\u2026",d=`${u}${l.slice(-50)}`,h=`${c.slice(0,50)}${p}`;return{pre:d,match:s,post:h}},jh=function*(t,e,n={}){let{locales:r="en",granularity:i="word",sensitivity:a="base"}=n,o,s;try{o=new Intl.Segmenter(r,{usage:"search",granularity:i}),s=new Intl.Collator(r,{sensitivity:a})}catch{o=new Intl.Segmenter("en",{usage:"search",granularity:i}),s=new Intl.Collator("en",{sensitivity:a})}let l=Array.from(o.segment(e)).length,c=[],u=0,p=o.segment(t[u])[Symbol.iterator]();e:for(;u<t.length;){for(;c.length<l;){let{done:h,value:b}=p.next();if(h)if(u++,u<t.length){p=o.segment(t[u])[Symbol.iterator]();continue}else break e;let{index:g,segment:m}=b;if(/[^\p{Format}]/u.test(m)){if(/\s/u.test(m)){/\s/u.test(c[c.length-1]?.segment)||c.push({strIndex:u,index:g,segment:" "});continue}b.strIndex=u,c.push(b)}}let d=c.map(h=>h.segment).join("");if(s.compare(e,d)===0){let h=u,b=c[c.length-1],g=b.index+b.segment.length,m=c[0].strIndex,f=c[0].index,y={startIndex:m,startOffset:f,endIndex:h,endOffset:g};yield{range:y,excerpt:Hh(t,y)}}c.shift()}},il=(t,e)=>{let{defalutLocale:n,matchCase:r,matchDiacritics:i,matchWholeWords:a}=e;return function*(o,s){let l=t(o,function*(c,u){for(let p of jh(c,s,{locales:o.body.lang||o.documentElement.lang||n||"en",granularity:a?"word":"grapheme",sensitivity:i&&r?"variant":i&&!r?"accent":!i&&r?"case":"base"})){let{startIndex:d,startOffset:h,endIndex:b,endOffset:g}=p.range;p.range=u(d,h,b,g),yield p}});for(let c of l)yield c}};var qh=function*(t,e){let n=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT|NodeFilter.SHOW_CDATA_SECTION,{FILTER_ACCEPT:r,FILTER_REJECT:i,FILTER_SKIP:a}=NodeFilter,o=p=>{let d=p.localName?.toLowerCase();return d==="script"||d==="style"?i:p.nodeType===1?a:r},s=t.createTreeWalker(t.body,n,{acceptNode:o}),l=[];for(let p=s.nextNode();p;p=s.nextNode())l.push(p);let c=l.map(p=>p.nodeValue),u=(p,d,h,b)=>{let g=t.createRange();return g.setStart(l[p],d),g.setEnd(l[h],b),g};for(let p of e(c,u))yield p};var al=Object.fromEntries(Array.from(Object.entries({isRef:["annoref","biblioref","glossref","noteref"],isLink:["backlink"],isNote:["annotation","note","footnote","endnote","rearnote"]}),([t,e])=>[t,n=>n.getAttributeNS("http://www.idpf.org/2007/ops","type")?.split(/s/)?.some(r=>e.includes(r))])),ni=class{#e;#t;#n;#r;language="en";textDirection="";isCJK=!1;isFixedLayout=!1;annotations=new Zr({resolve:e=>this.resolveCFI(e),compare:cr,onAdd:(e,n,r)=>{let i=this.#s(n);i&&this.#o(i.doc,i.overlayer,e);let a=this.#t.getProgress(n)?.label??"";this?.emit({type:"add-annotation",annotation:e,label:a,index:n,position:r})},onDelete:(e,n,r)=>{this.#s(n)?.overlayer?.remove(e),this?.emit({type:"delete-annotation",index:n,position:r})},onUpdate:(e,n)=>{let r=this.#s(n);r&&(r.overlayer.remove(e.value),this.#o(r.doc,r.overlayer,e))}});constructor(e,n){if(this.book=e,this.emit=n,e.metadata?.language)try{let r=e.metadata.language;e.metadata.language=Intl.getCanonicalLocales(r)[0];let i=typeof r=="string"?r:r[0],a=new Intl.Locale(i);this.isCJK=["zh","ja","kr"].includes(a.language),a.textInfo&&a.textInfo.direction&&(this.textDirection=a.textInfo.direction)}catch{}if(e.splitTOCHref&&e.getTOCFragment){let r=e.sections.map(o=>o.id);this.#e=new Xr(e.sections,150,1600);let i=e.splitTOCHref.bind(e),a=e.getTOCFragment.bind(e);this.#t=new dr({toc:e.toc??[],ids:r,splitHref:i,getFragment:a}),this.#n=new dr({toc:e.pageList??[],ids:r,splitHref:i,getFragment:a})}}async display(){let e={book:this.book,onLoad:this.#a.bind(this),onRelocated:this.#i.bind(this),createOverlayer:this.#l.bind(this)};return this.isFixedLayout=this.book.rendition?.layout==="pre-paginated",this.isFixedLayout?this.renderer=new ti(e):this.renderer=new ei(e),this.renderer.element}async init({lastLocation:e,annotations:n}){if(e){let r=this.resolveNavigation(e);r?await this.renderer.goTo(r):await this.renderer.next()}else await this.renderer.next();if(n){n.sort((r,i)=>cr(r.value,i.value));for(let r of n)await this.annotations.add(r,!0)}}#i(e,n,r){if(!this.#e)return;let i=this.#e.getProgress(n,r),a=this.#t.getProgress(n,e),o=this.#n.getProgress(n,e),s=this.getCFI(n,e);this.emit?.({type:"relocated",...i,tocItem:a,pageItem:o,cfi:s})}#a(e,n){let{book:r}=this;e.documentElement.lang||=this.language,e.documentElement.dir||=this.isCJK?"":this.textDirection,this.book&&this.book._hash&&e.documentElement.setAttribute("data-immersive-translate-hash",this.book._hash),this.renderer.setStyle(this.#r);let i=r.sections[n];for(let a of e.querySelectorAll("a[href]"))a.addEventListener("click",o=>{o.preventDefault();let s=a.getAttribute("href"),l=i?.resolveHref?.(s)??s;if(r?.isExternal?.(l))this.emit?.({type:"external-link",uri:l});else if(al.isRef(a)){let{index:c,anchor:u}=r.resolveHref(l);Promise.resolve(r.sections[c].createDocument()).then(p=>[u(p),p.contentType]).then(([p,d])=>[p?.innerHTML,d,al.isNote(p)]).then(([p,d,h])=>p?this.emit?.({type:"reference",href:h?null:l,content:p,contentType:d,element:a}):null).catch(p=>{});return}else this.goTo(l)});this.emit?.({type:"loaded",doc:e,index:n})}#o(e,n,r){let{value:i}=r,a=this.annotations.getAnchor(i),o=e?a(e):a,[s,l]=this.emit({type:"draw-annotation",annotation:r});n.add(i,o,s,l)}#s(e){let n=this.renderer.getOverlayer();if(n.index===e)return n}#l(e,n){let r=new Yr;for(let i of this.annotations.getByIndex(n))this.#o(e,r,i);return e.addEventListener("click",i=>{let[a,o]=r.hitTest(i);a&&this.emit?.({type:"show-annotation",value:a,range:o})},!1),r}async showAnnotation(e){let{value:n}=e,{index:r,anchor:i}=await this.goTo(n),{doc:a}=this.#s(r),o=i(a);this.emit?.({type:"show-annotation",value:n,range:o})}getCFI(e,n){if(!n)return"";let r=this.book.sections[e].cfi??ya.fromIndex(e);return Ks(r,Xs(n))}resolveCFI(e){if(this.book.resolveCFI)return this.book.resolveCFI(e);{let n=nn(e);return{index:ya.toIndex((n.parent??n).shift()),anchor:a=>Vr(a,n)}}}resolveNavigation(e){try{return typeof e=="number"?{index:e}:ur.test(e)?this.resolveCFI(e):this.book.resolveHref(e)}catch{}}async goTo(e){let n=this.resolveNavigation(e);try{return await this.renderer.goTo(n),n}catch{}}async goToFraction(e){let[n,r]=this.#e.getSection(e);return this.renderer.goTo({index:n,anchor:r})}async select(e){try{let n=await this.resolveNavigation(e);await this.renderer.goTo({...n,select:!0})}catch{}}goLeft(){return this.book.dir==="rtl"?this.renderer.next():this.renderer.prev()}goRight(){return this.book.dir==="rtl"?this.renderer.prev():this.renderer.next()}setAppearance({layout:e,css:n}){this.isFixedLayout||(Object.assign(this.renderer.layout,e),this.#r=n,this.renderer.setStyle(n),this.renderer.render())}async*#d(e,n,r){let i=await this.book.sections[r].createDocument();for(let{range:a,excerpt:o}of e(i,n))yield{cfi:this.getCFI(r,a),excerpt:o}}async*#c(e,n){let{sections:r}=this.book;for(let[i,{createDocument:a}]of r.entries()){if(!a)continue;let o=await a(),s=Array.from(e(o,n),({range:c,excerpt:u})=>({cfi:this.getCFI(i,c),excerpt:u}));yield{progress:(i+1)/r.length},s.length&&(yield{index:i,subitems:s})}}async*search(e){let{query:n,index:r}=e,i=il(qh,{defaultLocale:this.language,...e}),a=r!=null?this.#d(i,n,r):this.#c(i,n);for await(let o of a)yield"subitems"in o?{label:this.#t.getProgress(o.index)?.label??"",subitems:o.subitems}:o}};var Kh=(t,e,n)=>{let r=document.createElement("ul");r.setAttribute("role","group"),r.setAttribute("aria-label",t);let i=new Map,a=o=>{n(o);let s=i.get(o);for(let l of r.children)l.setAttribute("aria-checked",l===s?"true":"false")};for(let[o,s]of e){let l=document.createElement("li");l.setAttribute("role","menuitemradio"),l.innerText=o,l.onclick=()=>a(s),i.set(s,l),r.append(l)}return{element:r,select:a}},ol=t=>{let e={},n=document.createElement("ul");n.setAttribute("role","menu");let r=()=>n.classList.remove("show"),i=a=>(...o)=>(r(),a(...o));for(let{name:a,label:o,type:s,items:l,onclick:c}of t){let u=s==="radio"?Kh(o,l,i(c)):null;a&&(e[a]=u),n.append(u.element)}return window.addEventListener("blur",()=>r()),window.addEventListener("click",a=>{n.parentNode.contains(a.target)||r()}),{element:n,groups:e}};function pr(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():J}var sl=pr();function pn(){return sl.PROD==="1"}function Cn(){return sl.PROD_API==="1"}var A1=pr().PROD==="1",E1=pr().PROD!=="1";var ll=({entries:t,loadBlob:e,getSize:n},r)=>{let i=new Map,a=new Map,o=async p=>{if(i.has(p))return i.get(p);let d=URL.createObjectURL(await e(p)),h=URL.createObjectURL(new Blob([`<img src="${d}">`],{type:"text/html"}));return a.set(p,[d,h]),i.set(p,h),h},s=p=>{a.get(p)?.forEach?.(d=>URL.revokeObjectURL(d)),a.delete(p),i.delete(p)},l=[".jpg",".jpeg",".png",".gif",".bmp",".webp",".svg"],c=t.map(p=>p.filename).filter(p=>l.some(d=>p.endsWith(d))).sort(),u={};return u.getCover=()=>e(c[0]),u.metadata={title:r.name},u.sections=c.map(p=>({id:p,load:()=>o(p),unload:()=>s(p),size:n(p)})),u.toc=c.map(p=>({label:p,href:p})),u.rendition={layout:"pre-paginated"},u.resolveHref=p=>({index:u.sections.findIndex(d=>d.id===p)}),u.splitTOCHref=p=>[p,null],u.getTOCFragment=p=>p.documentElement,u};var cl=t=>t?.trim()?.replace(/\s{2,}/g," "),kt=t=>cl(t?.textContent),ri={XLINK:"http://www.w3.org/1999/xlink",EPUB:"http://www.idpf.org/2007/ops"},ii={XML:"application/xml",XHTML:"application/xhtml+xml"},Mt={strong:["strong","self"],emphasis:["em","self"],style:["span","self"],a:"anchor",strikethrough:["s","self"],sub:["sub","self"],sup:["sup","self"],code:["code","self"],image:"image"},Gh={tr:["tr",["align"]],th:["th",["colspan","rowspan","align","valign"]],td:["td",["colspan","rowspan","align","valign"]]},ul={epigraph:["blockquote"],subtitle:["h2",Mt],"text-author":["p",Mt],date:["p",Mt],stanza:"stanza"},ai={title:["header",{p:["h1",Mt],"empty-line":["br"]}],epigraph:["blockquote","self"],image:"image",annotation:["aside"],section:["section","self"],p:["p",Mt],poem:["blockquote",ul],subtitle:["h2",Mt],cite:["blockquote","self"],"empty-line":["br"],table:["table",Gh],"text-author":["p",Mt]};ul.epigraph.push(ai);var Vh={image:"image",title:["section",{p:["h1",Mt],"empty-line":["br"]}],epigraph:["section",ai],section:["section",ai]},dl=t=>{let e=t.getAttributeNS(ri.XLINK,"href"),[,n]=e.split("#"),r=t.getRootNode().getElementById(n);return r?`data:${r.getAttribute("content-type")};base64,${r.textContent}`:e},Ta=class{constructor(e){this.fb2=e,this.doc=document.implementation.createDocument(ri.XHTML,"html")}image(e){let n=this.doc.createElement("img");return n.alt=e.getAttribute("alt"),n.title=e.getAttribute("title"),n.setAttribute("src",dl(e)),n}anchor(e){let n=this.convert(e,{a:["a",Mt]});return n.setAttribute("href",e.getAttributeNS(ri.XLINK,"href")),e.getAttribute("type")==="note"&&n.setAttributeNS(ri.EPUB,"epub:type","noteref"),n}stanza(e){let n=this.convert(e,{stanza:["p",{title:["header",{p:["strong",Mt],"empty-line":["br"]}],subtitle:["p",Mt]}]});for(let r of e.children)r.nodeName==="v"&&(n.append(this.doc.createTextNode(r.textContent)),n.append(this.doc.createElement("br")));return n}convert(e,n){if(e.nodeType===3)return this.doc.createTextNode(e.textContent);if(e.nodeType===4)return this.doc.createCDATASection(e.textContent);if(e.nodeType===8)return this.doc.createComment(e.textContent);let r=n?.[e.nodeName];if(!r)return null;if(typeof r=="string")return this[r](e);let[i,a]=r,o=this.doc.createElement(i);if(e.id&&(o.id=e.id),o.classList.add(e.nodeName),Array.isArray(a))for(let c of a)o.setAttribute(c,e.getAttribute(c));let s=a==="self"?n:Array.isArray(a)?null:a,l=e.firstChild;for(;l;){let c=this.convert(l,s);c&&o.append(c),l=l.nextSibling}return o}},Xh=async t=>{let e=await t.arrayBuffer(),n=new TextDecoder("utf-8").decode(e),r=new DOMParser,i=r.parseFromString(n,ii.XML),a=i.xmlEncoding||n.match(/^<\?xml\s+version\s*=\s*["']1.\d+"\s+encoding\s*=\s*["']([A-Za-z0-9._-]*)["']/)?.[1];if(a&&a.toLowerCase()!=="utf-8"){let o=new TextDecoder(a).decode(e);return r.parseFromString(o,ii.XML)}return i},Yh=URL.createObjectURL(new Blob([`
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
`],{type:"text/css"})),Zh=t=>`<?xml version="1.0" encoding="utf-8"?>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head><link href="${Yh}" rel="stylesheet" type="text/css"/></head>
    <body>${t}</body>
</html>`,xa="data-foliate-id",_a=async t=>{let e={},n=await Xh(t),r=new Ta(n),i=d=>n.querySelector(d),a=d=>[...n.querySelectorAll(d)],o=d=>{let h=kt(d.querySelector("nickname"));if(h)return h;let b=kt(d.querySelector("first-name")),g=kt(d.querySelector("middle-name")),m=kt(d.querySelector("last-name")),f=[b,g,m].filter(w=>w).join(" "),y=m?[m,[b,g].filter(w=>w).join(" ")].join(", "):null;return{name:f,sortAs:y}},s=d=>d?.getAttribute("value")??kt(d),l=i("title-info annotation");e.metadata={title:kt(i("title-info book-title")),identifier:kt(i("document-info id")),language:kt(i("title-info lang")),author:a("title-info author").map(o),translator:a("title-info translator").map(o),producer:a("document-info author").map(o).concat(a("document-info program-used").map(kt)),publisher:kt(i("publish-info publisher")),published:s(i("title-info date")),modified:s(i("document-info date")),description:l?r.convert(l,{annotation:["div",ai]}).innerHTML:null,subject:a("title-info genre").map(kt)},e.getCover=()=>fetch(dl(i("coverpage image"))).then(d=>d.blob());let c=Array.from(n.querySelectorAll("body"),d=>{let h=r.convert(d,{body:["body",Vh]});return[Array.from(h.children,b=>{let g=[b,...b.querySelectorAll("[id]")].map(m=>m.id);return{el:b,ids:g}}),h]}),u=c[0][0].map(({el:d,ids:h})=>{let b=Array.from(d.querySelectorAll(":scope > section > .title"),(g,m)=>(g.setAttribute(xa,m),{title:kt(g),index:m}));return{ids:h,titles:b,el:d}}).concat(c.slice(1).map(([d,h])=>{let b=d.map(g=>g.ids).flat();return h.classList.add("notesBodyType"),{ids:b,el:h,linear:"no"}})).map(({ids:d,titles:h,el:b,linear:g})=>{let m=Zh(b.outerHTML),f=new Blob([m],{type:ii.XHTML}),y=URL.createObjectURL(f),w=cl(b.querySelector(".title, .subtitle, p")?.textContent??(b.classList.contains("title")?b.textContent:""));return{ids:d,title:w,titles:h,load:()=>y,createDocument:()=>new DOMParser().parseFromString(m,ii.XHTML),size:f.size-Array.from(b.querySelectorAll("[src]"),E=>E.getAttribute("src")?.length??0).reduce((E,_)=>E+_,0),linear:g}}),p=new Map;return e.sections=u.map((d,h)=>{let{ids:b,load:g,createDocument:m,size:f,linear:y}=d;for(let w of b)w&&p.set(w,h);return{id:h,load:g,createDocument:m,size:f,linear:y}}),e.toc=u.map(({title:d,titles:h},b)=>{let g=b.toString();return{label:d,href:g,subitems:h?.length?h.map(({title:m,index:f})=>({label:m,href:`${g}#${f}`})):null}}).filter(d=>d),e.resolveHref=d=>{let[h,b]=d.split("#");return h?{index:Number(h),anchor:g=>g.querySelector(`[${xa}="${b}"]`)}:{index:p.get(b),anchor:g=>g.getElementById(b)}},e.splitTOCHref=d=>d?.split("#")?.map(h=>Number(h))??[],e.getTOCFragment=(d,h)=>d.querySelector(`[${xa}="${h}"]`),e};var hn=t=>{if(!t)return"";let e=document.createElement("textarea");return e.innerHTML=t,e.value},Ln={XML:"application/xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml"},Qh={name:[0,32,"string"],type:[60,4,"string"],creator:[64,4,"string"],numRecords:[76,2,"uint"]},Jh={compression:[0,2,"uint"],numTextRecords:[8,2,"uint"],recordSize:[10,2,"uint"],encryption:[12,2,"uint"]},ef={magic:[16,4,"string"],length:[20,4,"uint"],type:[24,4,"uint"],encoding:[28,4,"uint"],uid:[32,4,"uint"],version:[36,4,"uint"],titleOffset:[84,4,"uint"],titleLength:[88,4,"uint"],localeRegion:[94,1,"uint"],localeLanguage:[95,1,"uint"],resourceStart:[108,4,"uint"],huffcdic:[112,4,"uint"],numHuffcdic:[116,4,"uint"],exthFlag:[128,4,"uint"],trailingFlags:[240,4,"uint"],indx:[244,4,"uint"]},tf={resourceStart:[108,4,"uint"],fdst:[192,4,"uint"],numFdst:[196,4,"uint"],frag:[248,4,"uint"],skel:[252,4,"uint"],guide:[260,4,"uint"]},nf={magic:[0,4,"string"],length:[4,4,"uint"],count:[8,4,"uint"]},pl={magic:[0,4,"string"],length:[4,4,"uint"],type:[8,4,"uint"],idxt:[20,4,"uint"],numRecords:[24,4,"uint"],encoding:[28,4,"uint"],language:[32,4,"uint"],total:[36,4,"uint"],ordt:[40,4,"uint"],ligt:[44,4,"uint"],numLigt:[48,4,"uint"],numCncx:[52,4,"uint"]},rf={magic:[0,4,"string"],length:[4,4,"uint"],numControlBytes:[8,4,"uint"]},af={magic:[0,4,"string"],offset1:[8,4,"uint"],offset2:[12,4,"uint"]},of={magic:[0,4,"string"],length:[4,4,"uint"],numEntries:[8,4,"uint"],codeLength:[12,4,"uint"]},sf={magic:[0,4,"string"],numEntries:[8,4,"uint"]},lf={flags:[8,4,"uint"],dataStart:[12,4,"uint"],keyLength:[16,4,"uint"],keyStart:[20,4,"uint"]},cf={1252:"windows-1252",65001:"utf-8"},hl={100:["creator","string",!0],101:["publisher"],103:["description"],104:["isbn"],105:["subject","string",!0],106:["date"],108:["contributor","string",!0],109:["rights"],110:["subjectCode","string",!0],112:["source","string",!0],113:["asin"],121:["boundary","uint"],122:["fixedLayout"],125:["numResources","uint"],126:["originalResolution"],127:["zeroGutter"],128:["zeroMargin"],129:["coverURI"],132:["regionMagnification"],201:["coverOffset","uint"],202:["thumbnailOffset","uint"],503:["title"],524:["language","string",!0],527:["pageProgressionDirection"]},uf={1:["ar","ar-SA","ar-IQ","ar-EG","ar-LY","ar-DZ","ar-MA","ar-TN","ar-OM","ar-YE","ar-SY","ar-JO","ar-LB","ar-KW","ar-AE","ar-BH","ar-QA"],2:["bg"],3:["ca"],4:["zh","zh-TW","zh-CN","zh-HK","zh-SG"],5:["cs"],6:["da"],7:["de","de-DE","de-CH","de-AT","de-LU","de-LI"],8:["el"],9:["en","en-US","en-GB","en-AU","en-CA","en-NZ","en-IE","en-ZA","en-JM",null,"en-BZ","en-TT","en-ZW","en-PH"],10:["es","es-ES","es-MX",null,"es-GT","es-CR","es-PA","es-DO","es-VE","es-CO","es-PE","es-AR","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"],11:["fi"],12:["fr","fr-FR","fr-BE","fr-CA","fr-CH","fr-LU","fr-MC"],13:["he"],14:["hu"],15:["is"],16:["it","it-IT","it-CH"],17:["ja"],18:["ko"],19:["nl","nl-NL","nl-BE"],20:["no","nb","nn"],21:["pl"],22:["pt","pt-BR","pt-PT"],23:["rm"],24:["ro"],25:["ru"],26:["hr",null,"sr"],27:["sk"],28:["sq"],29:["sv","sv-SE","sv-FI"],30:["th"],31:["tr"],32:["ur"],33:["id"],34:["uk"],35:["be"],36:["sl"],37:["et"],38:["lv"],39:["lt"],41:["fa"],42:["vi"],43:["hy"],44:["az"],45:["eu"],46:["hsb"],47:["mk"],48:["st"],49:["ts"],50:["tn"],52:["xh"],53:["zu"],54:["af"],55:["ka"],56:["fo"],57:["hi"],58:["mt"],59:["se"],62:["ms"],63:["kk"],65:["sw"],67:["uz",null,"uz-UZ"],68:["tt"],69:["bn"],70:["pa"],71:["gu"],72:["or"],73:["ta"],74:["te"],75:["kn"],76:["ml"],77:["as"],78:["mr"],79:["sa"],82:["cy","cy-GB"],83:["gl","gl-ES"],87:["kok"],97:["ne"],98:["fy"]},li=(t,e)=>{let n=new t.constructor(t.length+e.length);return n.set(t),n.set(e,t.length),n},yl=(t,e,n)=>{let r=new t.constructor(t.length+e.length+n.length);return r.set(t),r.set(e,t.length),r.set(n,t.length+e.length),r},df=new TextDecoder,hr=t=>df.decode(t),ot=t=>{if(!t)return;let e=t.byteLength,n=e===4?"getUint32":e===2?"getUint16":"getUint8";return new DataView(t)[n](0)},At=(t,e)=>Object.fromEntries(Array.from(Object.entries(t)).map(([n,[r,i,a]])=>[n,(a==="string"?hr:ot)(e.slice(r,r+i))])),Ea=t=>new TextDecoder(cf[t]),oi=(t,e=0)=>{let n=0,r=0;for(let i of t.subarray(e,e+4))if(n=n<<7|(i&127)>>>0,r++,i&128)break;return{value:n,length:r}},pf=t=>{let e=0;for(let n of t.subarray(-4))n&128&&(e=0),e=e<<7|n&127;return e},wl=t=>{let e=0;for(;t>0;t=t>>1)(t&1)===1&&e++;return e},hf=t=>{let e=0;for(;!(t&1);)t=t>>1,e++;return e},ff=t=>{let e=[];for(let n=0;n<t.length;n++){let r=t[n];if(r===0)e.push(0);else if(r<=8)for(let i of t.subarray(n+1,(n+=r)+1))e.push(i);else if(r<=127)e.push(r);else if(r<=191){let i=r<<8|t[n+++1],a=(i&16383)>>>3,o=(i&7)+3;for(let s=0;s<o;s++)e.push(e[e.length-a])}else e.push(32,r^128)}return Uint8Array.from(e)},mf=(t,e)=>{let n=e>>3,r=e+32,i=r>>3,a=0n;for(let o=n;o<=i;o++)a=a<<8n|BigInt(t[o]??0);return a>>8n-BigInt(r&7)&0xffffffffn},gf=async(t,e)=>{let n=await e(t.huffcdic),{magic:r,offset1:i,offset2:a}=At(af,n);if(r!=="HUFF")throw new Error("Invalid HUFF record");let o=Array.from({length:256},(u,p)=>i+p*4).map(u=>ot(n.slice(u,u+4))).map(u=>[u&128,u&31,u>>>8]),s=[null].concat(Array.from({length:32},(u,p)=>a+p*8).map(u=>[ot(n.slice(u,u+4)),ot(n.slice(u+4,u+8))])),l=[];for(let u=1;u<t.numHuffcdic;u++){let p=await e(t.huffcdic+u),d=At(of,p);if(d.magic!=="CDIC")throw new Error("Invalid CDIC record");let h=Math.min(1<<d.codeLength,d.numEntries-l.length),b=p.slice(d.length);for(let g=0;g<h;g++){let m=ot(b.slice(g*2,g*2+2)),f=ot(b.slice(m,m+2)),y=f&32767,w=f&32768,E=new Uint8Array(b.slice(m+2,m+2+y));l.push([E,w])}}let c=u=>{let p=new Uint8Array,d=u.byteLength*8;for(let h=0;h<d;){let b=Number(mf(u,h)),[g,m,f]=o[b>>>24];if(!g){for(;b>>>32-m<s[m][0];)m+=1;f=s[m][1]}if((h+=m)>d)break;let y=f-(b>>>32-m),[w,E]=l[y];E||(w=c(w),l[y]=[w,!0]),p=li(p,w)}return p};return c},si=async(t,e)=>{let n=await e(t),r=At(pl,n);if(r.magic!=="INDX")throw new Error("Invalid INDX record");let i=Ea(r.encoding),a=n.slice(r.length),o=At(rf,a);if(o.magic!=="TAGX")throw new Error("Invalid TAGX section");let s=(o.length-12)/4,l=Array.from({length:s},(d,h)=>new Uint8Array(a.slice(12+h*4,12+h*4+4))),c={},u=0;for(let d=0;d<r.numCncx;d++){let h=await e(t+r.numRecords+d+1),b=new Uint8Array(h);for(let g=0;g<b.byteLength;){let m=g,{value:f,length:y}=oi(b,g);g+=y;let w=h.slice(g,g+f);g+=f,c[u+m]=i.decode(w)}u+=65536}let p=[];for(let d=0;d<r.numRecords;d++){let h=await e(t+1+d),b=new Uint8Array(h),g=At(pl,h);if(g.magic!=="INDX")throw new Error("Invalid INDX record");for(let m=0;m<g.numRecords;m++){let f=g.idxt+4+2*m,y=ot(h.slice(f,f+2)),w=ot(h.slice(y,y+1)),E=hr(h.slice(y+1,y+1+w)),_=[],T=y+1+w,v=0,x=T+o.numControlBytes;for(let[k,C,N,O]of l){if(O&1){v++;continue}let B=T+v,P=ot(h.slice(B,B+1))&N;if(P===N)if(wl(N)>1){let{value:U,length:z}=oi(b,x);_.push([k,null,U,C]),x+=z}else _.push([k,1,null,C]);else _.push([k,P>>hf(N),null,C])}let S={};for(let[k,C,N,O]of _){let B=[];if(C!=null)for(let P=0;P<C*O;P++){let{value:U,length:z}=oi(b,x);B.push(U),x+=z}else{let P=0;for(;P<N;){let{value:U,length:z}=oi(b,x);B.push(U),x+=z,P+=z}}S[k]=B}p.push({name:E,tagMap:S})}}return{table:p,cncx:c}},bf=async(t,e)=>{let{table:n,cncx:r}=await si(t,e),i=n.map(({tagMap:o},s)=>({index:s,offset:o[1]?.[0],size:o[2]?.[0],label:r[o[3]]??"",headingLevel:o[4]?.[0],pos:o[6],parent:o[21]?.[0],firstChild:o[22]?.[0],lastChild:o[23]?.[0]})),a=o=>(o.firstChild==null||(o.children=i.filter(s=>s.parent===o.index).map(a)),o);return i.filter(o=>o.headingLevel===0).map(a)},yf=(t,e)=>{let{magic:n,count:r}=At(nf,t);if(n!=="EXTH")throw new Error("Invalid EXTH header");let i=Ea(e),a={},o=12;for(let s=0;s<r;s++){let l=ot(t.slice(o,o+4)),c=ot(t.slice(o+4,o+8));if(l in hl){let[u,p,d]=hl[l],h=t.slice(o+8,o+c),b=p==="uint"?ot(h):i.decode(h);d?(a[u]??=[],a[u].push(b)):a[u]=b}o+=c}return a},wf=async(t,e)=>{let{flags:n,dataStart:r,keyLength:i,keyStart:a}=At(lf,t),o=new Uint8Array(t.slice(r));if(n&2){let l=i===16?1024:1040,c=new Uint8Array(t.slice(a,a+i)),u=Math.min(l,o.length);for(var s=0;s<u;s++)o[s]=o[s]^c[s%c.length]}if(n&1)try{return await e(o)}catch{}return o},vl=async t=>hr(await t.slice(60,68).arrayBuffer())==="BOOKMOBI",Sa=class{#e;#t;pdb;async open(e){this.#e=e;let n=At(Qh,await e.slice(0,78).arrayBuffer());this.pdb=n;let r=await e.slice(78,78+n.numRecords*8).arrayBuffer();this.#t=Array.from({length:n.numRecords},(i,a)=>ot(r.slice(a*8,a*8+4))).map((i,a,o)=>[i,o[a+1]])}loadRecord(e){let n=this.#t[e];if(!n)throw new RangeError("Record index out of bounds");return this.#e.slice(...n).arrayBuffer()}async loadMagic(e){let n=this.#t[e][0];return hr(await this.#e.slice(n,n+4).arrayBuffer())}},ci=class extends Sa{#e=0;#t;#n;#r;#i;#a;constructor({unzlib:e}){super(),this.unzlib=e}async open(e){await super.open(e),this.headers=this.#o(await super.loadRecord(0)),this.#t=this.headers.mobi.resourceStart;let n=this.headers.mobi.version>=8;if(!n){let r=this.headers.exth?.boundary;if(r<4294967295)try{this.headers=this.#o(await super.loadRecord(r)),this.#e=r,n=!0}catch{}}return await this.#s(),n?new Aa(this).init():new ka(this).init()}#o(e){let n=At(Jh,e),r=At(ef,e);if(r.magic!=="MOBI")throw new Error("Missing MOBI header");let{titleOffset:i,titleLength:a,localeLanguage:o,localeRegion:s}=r;r.title=e.slice(i,i+a);let l=uf[o];r.language=l?.[s>>2]??l?.[0];let c=r.exthFlag&64?yf(e.slice(r.length+16),r.encoding):null,u=r.version>=8?At(tf,e):null;return{palmdoc:n,mobi:r,exth:c,kf8:u}}async#s(){let{palmdoc:e,mobi:n}=this.headers;this.#n=Ea(n.encoding),this.#r=new TextEncoder;let{compression:r}=e;if(this.#i=r===1?s=>s:r===2?ff:r===17480?await gf(n,this.loadRecord.bind(this)):null,!this.#i)throw new Error("Unknown compression type");let{trailingFlags:i}=n,a=i&1,o=wl(i>>>1);this.#a=s=>{for(let l=0;l<o;l++){let c=pf(s);s=s.subarray(0,-c)}if(a){let l=(s[s.length-1]&3)+1;s=s.subarray(0,-l)}return s}}decode(...e){return this.#n.decode(...e)}encode(...e){return this.#r.encode(...e)}loadRecord(e){return super.loadRecord(this.#e+e)}loadMagic(e){return super.loadMagic(this.#e+e)}loadText(e){return this.loadRecord(e+1).then(n=>new Uint8Array(n)).then(this.#a).then(this.#i)}async loadResource(e){let n=await super.loadRecord(this.#t+e),r=hr(n.slice(0,4));return r==="FONT"?wf(n,this.unzlib):r==="VIDE"||r==="AUDI"?n.slice(12):n}getNCX(){let e=this.headers.mobi.indx;if(e<4294967295)return bf(e,this.loadRecord.bind(this))}getMetadata(){let{mobi:e,exth:n}=this.headers;return{identifier:e.uid.toString(),title:hn(n?.title||this.decode(e.title)),author:n?.creator?.map(hn),publisher:hn(n?.publisher),language:n?.language??e.language,published:n?.date,description:hn(n?.description),subject:n?.subject?.map(hn),rights:hn(n?.rights)}}async getCover(){let{exth:e}=this.headers,n=e?.coverOffset<4294967295?e?.coverOffset:e?.thumbnailOffset<4294967295?e?.thumbnailOffset:null;if(n!=null){let r=await this.loadResource(n);return new Blob([r])}}},fl=/<\s*(?:mbp:)?pagebreak[^>]*>/gi,vf=/<[^<>]+filepos=['"]{0,1}(\d+)[^<>]*>/gi,ka=class{parser=new DOMParser;serializer=new XMLSerializer;#e=new Map;#t=new Map;#n=new Map;#r;#i=[];#a=Ln.HTML;constructor(e){this.mobi=e}async init(){let e=new Uint8Array;for(let i=0;i<this.mobi.headers.palmdoc.numTextRecords;i++)e=li(e,await this.mobi.loadText(i));let n=Array.from(new Uint8Array(e),i=>String.fromCharCode(i)).join("");this.#r=[0].concat(Array.from(n.matchAll(fl),i=>i.index)).map((i,a,o)=>n.slice(i,o[a+1])).map(i=>Uint8Array.from(i,a=>a.charCodeAt(0))).map(i=>({book:this,raw:i})).reduce((i,a)=>{let o=i[i.length-1];return a.start=o?.end??0,a.end=a.start+a.raw.byteLength,i.concat(a)},[]),this.sections=this.#r.map((i,a)=>({id:a,load:()=>this.loadSection(i),createDocument:()=>this.createDocument(i),size:i.end-i.start}));let r=[];try{let i=await this.mobi.getNCX(),a=({label:o,offset:s,children:l})=>{let c=s.toString().padStart(10,"0"),u=`filepos:${c}`;return r.push(c),o=hn(o),{label:o,href:u,subitems:l?.map(a)}};if(this.toc=i?.map(a),this.landmarks=await this.getGuide(),!this.toc){let o=this.landmarks.find(({type:s})=>s?.includes("toc"))?.href;if(o){let{index:s}=this.resolveHref(o),l=await this.sections[s].createDocument();this.toc=Array.from(l.querySelectorAll("a[filepos]"),c=>({label:c.innerText?.trim(),href:`filepos:${c.getAttribute("filepos")}`}))}}}catch{}return this.#i=[...new Set(r.concat(Array.from(n.matchAll(vf),i=>i[1])))].map(i=>({filepos:i,number:Number(i)})).sort((i,a)=>i.number-a.number),this.metadata=this.mobi.getMetadata(),this.getCover=this.mobi.getCover.bind(this.mobi),this}async getGuide(){let e=await this.createDocument(this.#r[0]);return Array.from(e.getElementsByTagName("reference"),n=>({label:n.getAttribute("title"),type:n.getAttribute("type")?.split(/\s/),href:`filepos:${n.getAttribute("filepos")}`}))}async loadResource(e){if(this.#e.has(e))return this.#e.get(e);let n=await this.mobi.loadResource(e),r=URL.createObjectURL(new Blob([n]));return this.#e.set(e,r),r}async loadRecindex(e){return this.loadResource(Number(e)-1)}async replaceResources(e){for(let n of e.querySelectorAll("img[recindex]")){let r=n.getAttribute("recindex");try{n.src=await this.loadRecindex(r)}catch{}}for(let n of e.querySelectorAll("[mediarecindex]")){let r=n.getAttribute("mediarecindex"),i=n.getAttribute("recindex");try{n.src=await this.loadRecindex(r),i&&(n.poster=await this.loadRecindex(i))}catch{}}for(let n of e.querySelectorAll("[filepos]")){let r=n.getAttribute("filepos");n.href=`filepos:${r}`}}async loadText(e){if(this.#t.has(e))return this.#t.get(e);let{raw:n}=e,r=this.#i.filter(({number:o})=>o>=e.start&&o<e.end).map(o=>({...o,offset:o.number-e.start})),i=n;r.length&&(i=n.subarray(0,r[0].offset),r.forEach(({filepos:o,offset:s},l)=>{let c=r[l+1],u=this.mobi.encode(`<a id="filepos${o}"></a>`);i=yl(i,u,n.subarray(s,c?.offset))}));let a=this.mobi.decode(i).replaceAll(fl,"");return this.#t.set(e,a),a}async createDocument(e){let n=await this.loadText(e);return this.parser.parseFromString(n,this.#a)}async loadSection(e){if(this.#n.has(e))return this.#n.get(e);let n=await this.createDocument(e),r=n.createElement("style");n.head.append(r),r.append(n.createTextNode(`blockquote {
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 1em;
            margin-inline-end: 0;
        }`)),await this.replaceResources(n);let i=this.serializer.serializeToString(n),a=URL.createObjectURL(new Blob([i],{type:this.#a}));return this.#n.set(e,a),a}resolveHref(e){let n=e.match(/filepos:(.*)/)[1],r=Number(n);return{index:this.#r.findIndex(o=>o.end>r),anchor:o=>o.getElementById(`filepos${n}`)}}splitTOCHref(e){let n=e.match(/filepos:(.*)/)[1],r=Number(n);return[this.#r.findIndex(a=>a.end>r),`filepos${n}`]}getTOCFragment(e,n){return e.getElementById(n)}isExternal(e){return/^(?!blob|filepos)\w+:/i.test(e)}},xl=/kindle:(flow|embed):(\w+)(?:\?mime=(\w+\/[-+.\w]+))?/,xf=/kindle:pos:fid:(\w+):off:(\w+)/,Tf=t=>{let[e,n,r]=t.match(xl).slice(1);return{resourceType:e,id:parseInt(n,32),type:r}},ml=t=>{let[e,n]=t.match(xf).slice(1);return{fid:parseInt(e,32),off:parseInt(n,32)}},gl=(t=0,e=0)=>`kindle:pos:fid:${t.toString(32).toUpperCase().padStart(4,"0")}:off:${e.toString(32).toUpperCase().padStart(10,"0")}`,bl=t=>{let e=t.match(/\s(id|name|aid)\s*=\s*['"]([^'"]*)['"]/i);if(!e)return;let[,n,r]=e;return`[${n}="${CSS.escape(r)}"]`},_f=async(t,e,n)=>{let r=[];t.replace(e,(...a)=>(r.push(a),null));let i=[];for(let a of r)i.push(await n(...a));return t.replace(e,()=>i.shift())},Aa=class{parser=new DOMParser;#e=new Map;#t=new Map;#n=new Map;#r={};#i;#a;#o=new Uint8Array;#s=new Uint8Array;#l=-1;#d=-1;#c=!0;#u=Ln.XHTML;constructor(e){this.mobi=e}async init(){let e=this.mobi.loadRecord.bind(this.mobi),{kf8:n}=this.mobi.headers;try{let s=await e(n.fdst),l=At(sf,s);if(l.magic!=="FDST")throw new Error("Missing FDST record");let c=Array.from({length:l.numEntries},(u,p)=>12+p*8).map(u=>[ot(s.slice(u,u+4)),ot(s.slice(u+4,u+8))]);this.#r.fdstTable=c,this.#a=c[c.length-1][1]}catch{}let r=(await si(n.skel,e)).table.map(({name:s,tagMap:l},c)=>({index:c,name:s,numFrag:l[1][0],offset:l[6][0],length:l[6][1]})),i=await si(n.frag,e),a=i.table.map(({name:s,tagMap:l})=>({insertOffset:parseInt(s),selector:i.cncx[l[2][0]],index:l[4][0],offset:l[6][0],length:l[6][1]}));this.#r.skelTable=r,this.#r.fragTable=a,this.#i=r.reduce((s,l)=>{let c=s[s.length-1],u=c?.fragEnd??0,p=u+l.numFrag,d=a.slice(u,p),h=l.length+d.map(g=>g.length).reduce((g,m)=>g+m),b=(c?.totalLength??0)+h;return s.concat({skel:l,frags:d,fragEnd:p,length:h,totalLength:b})},[]),this.#i.unshift({frags:[]}),this.sections=this.#i.map((s,l)=>s.frags.length?{id:l,load:()=>this.loadSection(s),createDocument:()=>this.createDocument(s),size:s.length}:{linear:"no"});try{let s=await this.mobi.getNCX(),l=({label:c,pos:u,children:p})=>{let[d,h]=u,b=gl(d,h),g=this.#t.get(d);return g?g.push(h):this.#t.set(d,[h]),{label:hn(c),href:b,subitems:p?.map(l)}};this.toc=s?.map(l),this.landmarks=await this.getGuide()}catch{}let{exth:o}=this.mobi.headers;return this.dir=o.pageProgressionDirection,this.rendition={layout:o.fixedLayout==="true"?"pre-paginated":"reflowable",viewport:Object.fromEntries(o.originalResolution?.split("x")?.slice(0,2)?.map((s,l)=>[l?"height":"width",s])??[])},this.metadata=this.mobi.getMetadata(),this.getCover=this.mobi.getCover.bind(this.mobi),this}async getResourcesByMagic(e){let n={},r=this.mobi.headers.kf8.resourceStart,i=this.mobi.pdb.numRecords;for(let a=r;a<i;a++)try{let o=await this.mobi.loadMagic(a),s=e.find(l=>l===o);s&&(n[s]=a)}catch{}return n}async getGuide(){let e=this.mobi.headers.kf8.guide;if(e<4294967295){let n=this.mobi.loadRecord.bind(this.mobi),{table:r,cncx:i}=await si(e,n);return r.map(({name:a,tagMap:o})=>({label:i[o[1][0]]??"",type:a?.split(/\s/),href:gl(o[6]?.[0]??o[3]?.[0])}))}}async loadResourceBlob(e){let{resourceType:n,id:r,type:i}=Tf(e),a=n==="flow"?await this.loadFlow(r):await this.mobi.loadResource(r-1),o=[Ln.XHTML,Ln.HTML,Ln.CSS,Ln.SVG].includes(i)?await this.replaceResources(this.mobi.decode(a)):a;return new Blob([o],{type:i})}async loadResource(e){if(this.#e.has(e))return this.#e.get(e);let n=await this.loadResourceBlob(e),r=URL.createObjectURL(n);return this.#e.set(e,r),r}replaceResources(e){let n=new RegExp(xl,"g");return _f(e,n,this.loadResource.bind(this))}async loadRaw(e,n){let r=n-this.#o.length,i=this.#a==null?1/0:this.#a-this.#s.length-e;if(r<0||r<i){for(;this.#o.length<n;){let o=++this.#l,s=await this.mobi.loadText(o);this.#o=li(this.#o,s)}return this.#o.slice(e,n)}for(;this.#a-this.#s.length>e;){let o=this.mobi.headers.palmdoc.numTextRecords-1-++this.#d,s=await this.mobi.loadText(o);this.#s=li(s,this.#s)}let a=this.#a-this.#s.length;return this.#s.slice(e-a,n-a)}loadFlow(e){if(e<4294967295)return this.loadRaw(...this.#r.fdstTable[e])}async loadText(e){let{skel:n,frags:r,length:i}=e,a=await this.loadRaw(n.offset,n.offset+i),o=a.slice(0,n.length);for(let s of r){let l=s.insertOffset-n.offset,c=n.length+s.offset,u=a.slice(c,c+s.length);o=yl(o.slice(0,l),u,o.slice(l));let p=this.#t.get(s.index);if(p)for(let d of p){let h=this.mobi.decode(u).slice(d),b=bl(h);this.#h(s.index,d,b)}}return this.mobi.decode(o)}async createDocument(e){let n=await this.loadText(e);return this.parser.parseFromString(n,this.#u)}async loadSection(e){if(this.#e.has(e))return this.#e.get(e);let n=await this.loadText(e);this.#c&&this.parser.parseFromString(n,this.#u).querySelector("parsererror")&&(this.#u=Ln.HTML),this.#c&&(this.#c=!1);let r=await this.replaceResources(n),i=URL.createObjectURL(new Blob([r],{type:this.#u}));return this.#e.set(e,i),i}getIndexByFID(e){return this.#i.findIndex(n=>n.frags.some(r=>r.index===e))}#h(e,n,r){let i=this.#n.get(e);if(i)i.set(n,r);else{let a=new Map;this.#n.set(e,a),a.set(n,r)}}async resolveHref(e){let{fid:n,off:r}=ml(e),i=this.getIndexByFID(n);if(i<0)return;let a=this.#n.get(n)?.get(r);if(a)return{index:i,anchor:b=>b.querySelector(a)};let{skel:o,frags:s}=this.#i[i],l=s.find(b=>b.index===n),c=o.offset+o.length+l.offset,u=await this.loadRaw(c,c+l.length),p=this.mobi.decode(u).slice(r),d=bl(p);return this.#h(n,r,d),{index:i,anchor:b=>b.querySelector(d)}}splitTOCHref(e){let n=ml(e);return[this.getIndexByFID(n.fid),n]}getTOCFragment(e,{fid:n,off:r}){let i=this.#n.get(n)?.get(r);return e.querySelector(i)}isExternal(e){return/^(?!blob|kindle)\w+:/i.test(e)}};var Xe={CONTAINER:"urn:oasis:names:tc:opendocument:xmlns:container",XHTML:"http://www.w3.org/1999/xhtml",OPF:"http://www.idpf.org/2007/opf",EPUB:"http://www.idpf.org/2007/ops",DC:"http://purl.org/dc/elements/1.1/",DCTERMS:"http://purl.org/dc/terms/",ENC:"http://www.w3.org/2001/04/xmlenc#",NCX:"http://www.daisy.org/z3986/2005/ncx/",XLINK:"http://www.w3.org/1999/xlink",SMIL:"http://www.w3.org/ns/SMIL"},st={XML:"application/xml",NCX:"application/x-dtbncx+xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml",JS:/\/(x-)?(javascript|ecmascript)/},di=t=>t.toLowerCase().replace(/[-:](.)/g,(e,n)=>n.toUpperCase()),Sf=t=>t?t.trim().replace(/\s{2,}/g," "):"",fr=(t,e,n)=>n?r=>r.getAttribute(t)?.split(/\s/)?.includes(e):typeof e=="function"?r=>e(r.getAttribute(t)):r=>r.getAttribute(t)===e,pi=(...t)=>e=>e?Object.fromEntries(t.map(n=>[di(n),e.getAttribute(n)])):null,mn=t=>Sf(t?.textContent),gr=(t,e)=>{let n=t.lookupNamespaceURI(null)===e||t.lookupPrefix(e),r=n?(i,a)=>o=>o.namespaceURI===e&&o.localName===a:(i,a)=>o=>o.localName===a;return{$:(i,a)=>[...i.children].find(r(i,a)),$$:(i,a)=>[...i.children].filter(r(i,a)),$$$:n?(i,a)=>[...i.getElementsByTagNameNS(e,a)]:(i,a)=>[...i.getElementsByTagName(e,a)]}},Un=(t,e)=>{try{if(e.includes(":"))return new URL(t,e);let n="file:///";return decodeURI(new URL(t,n+e).href.replace(n,""))}catch{return t}},Sl=t=>/^(?!blob)\w+:/i.test(t),kf=(t,e)=>{if(!t)return e;let n=t.replace(/\/$/,"").split("/"),r=e.replace(/\/$/,"").split("/"),i=(n.length>r.length?n:r).findIndex((a,o)=>n[o]!==r[o]);return i<0?"":Array(n.length-i).fill("..").concat(r.slice(i)).join("/")},Af=t=>t.slice(0,t.lastIndexOf("/")+1),ui=async(t,e,n)=>{let r=[];t.replace(e,(...a)=>(r.push(a),null));let i=[];for(let a of r)i.push(await n(...a));return t.replace(e,()=>i.shift())},Ef=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),fn={attrs:["dir","xml:lang"]},Dn={name:"alternate-script",many:!0,...fn,props:["file-as"]},Tl={many:!0,...fn,props:[{name:"role",many:!0,attrs:["scheme"]},"file-as",Dn]},Cf=[{name:"title",many:!0,...fn,props:["title-type","display-seq","file-as",Dn]},{name:"identifier",many:!0,props:[{name:"identifier-type",attrs:["scheme"]}]},{name:"language",many:!0},{name:"creator",...Tl},{name:"contributor",...Tl},{name:"publisher",...fn,props:["file-as",Dn]},{name:"description",...fn,props:[Dn]},{name:"rights",...fn,props:[Dn]},{name:"date"},{name:"dcterms:modified",type:"meta"},{name:"subject",many:!0,...fn,props:["term","authority",Dn]},{name:"belongs-to-collection",type:"meta",many:!0,...fn,props:["collection-type","group-position","dcterms:identifier","file-as",Dn,{name:"belongs-to-collection",recursive:!0}]}],Lf=t=>{let{$:e,$$:n}=gr(t,Xe.OPF),r=e(t.documentElement,"metadata"),i=Array.from(r.children),a=(p,d)=>{if(!d)return null;let{props:h=[],attrs:b=[]}=p,g=mn(d);if(!h.length&&!b.length)return g;let m=d.getAttribute("id"),f=m?i.filter(fr("refines","#"+m)):[];return Object.fromEntries([["value",g]].concat(h.map(y=>{let{many:w,recursive:E}=y,_=typeof y=="string"?y:y.name,T=fr("property",_),v=E?p:y;return[di(_),w?f.filter(T).map(x=>a(v,x)):a(v,f.find(T))]})).concat(b.map(y=>[di(y),d.getAttribute(y)])))},o=i.filter(fr("refines",null)),s=Object.fromEntries(Cf.map(p=>{let{type:d,name:h,many:b}=p,g=d==="meta"?m=>m.namespaceURI===Xe.OPF&&m.getAttribute("property")===h:m=>m.namespaceURI===Xe.DC&&m.localName===h;return[di(h),b?o.filter(g).map(m=>a(p,m)):a(p,o.find(g))]})),l=p=>Object.fromEntries(n(r,"meta").filter(fr("property",d=>d?.startsWith(p))).map(d=>[d.getAttribute("property").replace(p,""),mn(d)])),c=l("rendition:"),u=l("media:");return{metadata:s,rendition:c,media:u}},Df=(t,e=n=>n)=>{let{$:n,$$:r,$$$:i}=gr(t,Xe.XHTML),a=b=>b?decodeURI(e(b)):null,o=b=>g=>{let m=n(g,"a")??n(g,"span"),f=n(g,"ol"),y=a(m?.getAttribute("href")),E={label:mn(m)||m?.getAttribute("title"),href:y,subitems:s(f)};return b&&(E.type=m?.getAttributeNS(Xe.EPUB,"type")?.split(/\s/)),E},s=(b,g)=>b?r(b,"li").map(o(g)):null,l=(b,g)=>s(n(b,"ol"),g),c=i(t,"nav"),u=null,p=null,d=null,h=[];for(let b of c){let g=b.getAttributeNS(Xe.EPUB,"type")?.split(/\s/)??[];g.includes("toc")?u??=l(b):g.includes("page-list")?p??=l(b):g.includes("landmarks")?d??=l(b,!0):h.push({label:mn(b.firstElementChild),type:g,list:l(b)})}return{toc:u,pageList:p,landmarks:d,others:h}},Rf=(t,e=n=>n)=>{let{$:n,$$:r}=gr(t,Xe.NCX),i=l=>l?decodeURI(e(l)):null,a=l=>{let c=n(l,"navLabel"),u=n(l,"content"),p=mn(c),d=i(u.getAttribute("src"));if(l.localName==="navPoint"){let h=r(l,"navPoint");return{label:p,href:d,subitems:h.length?h.map(a):null}}return{label:p,href:d}},o=(l,c)=>r(l,c).map(a),s=(l,c)=>{let u=n(t.documentElement,l);return u?o(u,c):null};return{toc:s("navMap","navPoint"),pageList:s("pageList","pageTarget"),others:r(t.documentElement,"navList").map(l=>({label:mn(n(l,"navLabel")),list:o(l,"navTarget")}))}},Ca=t=>{if(!t)return;let e=t.split(":").map(o=>parseFloat(o));if(e.length===3){let[o,s,l]=e;return o*60*60+s*60+l}if(e.length===2){let[o,s]=e;return o*60+s}let[n,r]=t.split(/(?=[^\d.])/),i=parseFloat(n),a=r==="h"?60*60:r==="min"?60:r==="ms"?.001:1;return i*a},Of=(t,e=n=>n)=>{let{$:n,$$$:r}=gr(t,Xe.SMIL),i=a=>a?decodeURI(e(a)):null;return r(t,"par").map(a=>{let o=n(a,"text")?.getAttribute("src")?.split("#")?.[1],s=n(a,"audio");return s?{id:o,audio:{src:i(s.getAttribute("src")),clipBegin:Ca(s.getAttribute("clipBegin")),clipEnd:Ca(s.getAttribute("clipEnd"))}}:{id:o}})},Nf=/([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})/,Pf=t=>{for(let e of t.getElementsByTagNameNS(Xe.DC,"identifier")){let[n]=mn(e).split(":").slice(-1);if(Nf.test(n))return n}return""},kl=t=>mn(t.getElementById(t.documentElement.getAttribute("unique-identifier"))??t.getElementsByTagNameNS(Xe.DC,"identifier")[0]),_l=async(t,e,n)=>{let r=new Uint8Array(await n.slice(0,e).arrayBuffer());e=Math.min(e,r.length);for(var i=0;i<e;i++)r[i]=r[i]^t[i%t.length];return new Blob([r,n.slice(e)],{type:n.type})},Mf=async t=>{let e=new TextEncoder().encode(t),n=await globalThis.crypto.subtle.digest("SHA-1",e);return new Uint8Array(n)},If=(t=Mf)=>({"http://www.idpf.org/2008/embedding":{key:e=>t(kl(e).replaceAll(/[\u0020\u0009\u000d\u000a]/g,"")),decode:(e,n)=>_l(e,1040,n)},"http://ns.adobe.com/pdf/enc#RC":{key:e=>{let n=Pf(e).replaceAll("-","");return Uint8Array.from({length:16},(r,i)=>parseInt(n.slice(i*2,i*2+2),16))},decode:(e,n)=>_l(e,1024,n)}}),La=class{#e=new Map;#t=new Map;#n;constructor(e){this.#n=e}async init(e,n){if(!e)return;let r=Array.from(e.getElementsByTagNameNS(Xe.ENC,"EncryptedData"),i=>({algorithm:i.getElementsByTagNameNS(Xe.ENC,"EncryptionMethod")[0]?.getAttribute("Algorithm"),uri:i.getElementsByTagNameNS(Xe.ENC,"CipherReference")[0]?.getAttribute("URI")}));for(let{algorithm:i,uri:a}of r){if(!this.#t.has(i)){let o=this.#n[i];if(!o)continue;let s=await o.key(n);this.#t.set(i,l=>o.decode(s,l))}this.#e.set(a,i)}}getDecoder(e){return this.#t.get(this.#e.get(e))??(n=>n)}},Da=class{constructor({opf:e,resolveHref:n}){this.opf=e;let{$:r,$$:i,$$$:a}=gr(e,Xe.OPF),o=r(e.documentElement,"manifest"),s=r(e.documentElement,"spine"),l=i(s,"itemref");this.manifest=i(o,"item").map(pi("href","id","media-type","properties","media-overlay")).map(u=>(u.href=n(u.href),u.properties=u.properties?.split(/\s/),u)),this.spine=l.map(pi("idref","id","linear","properties")).map(u=>(u.properties=u.properties?.split(/\s/),u)),this.pageProgressionDirection=s.getAttribute("page-progression-direction"),this.navPath=this.getItemByProperty("nav")?.href,this.ncxPath=(this.getItemByID(s.getAttribute("toc"))??this.manifest.find(u=>u.mediaType===st.NCX))?.href;let c=r(e.documentElement,"guide");c&&(this.guide=i(c,"reference").map(pi("type","title","href")).map(({type:u,title:p,href:d})=>({label:p,type:u.split(/\s/),href:n(d)}))),this.cover=this.getItemByProperty("cover-image")??this.getItemByID(a(e,"meta").find(fr("name","cover"))?.getAttribute("content"))??this.getItemByHref(this.guide?.find(u=>u.type.includes("cover"))?.href),this.cfis=Ys(l)}getItemByID(e){return this.manifest.find(n=>n.id===e)}getItemByHref(e){return this.manifest.find(n=>n.href===e)}getItemByProperty(e){return this.manifest.find(n=>n.properties?.includes(e))}resolveCFI(e){let n=nn(e),r=(n.parent??n).shift(),i=ba(this.opf,r);i&&i.nodeName!=="idref"&&(r.at(-1).id=null,i=ba(this.opf,r));let a=i?.getAttribute("idref");return{index:this.spine.findIndex(l=>l.idref===a),anchor:l=>Vr(l,n)}}},Ra=class{#e=new Map;#t=new Map;#n=new Map;allowScript=!1;constructor({loadText:e,loadBlob:n,resources:r}){this.loadText=e,this.loadBlob=n,this.manifest=r.manifest,this.assets=r.manifest}createURL(e,n,r,i){if(!n)return"";let a=URL.createObjectURL(new Blob([n],{type:r}));if(this.#e.set(e,a),this.#n.set(e,1),i){let o=this.#t.get(i);o?o.push(e):this.#t.set(i,[e])}return a}ref(e,n){let r=this.#t.get(n);return r?.includes(e)||(this.#n.set(e,this.#n.get(e)+1),r?r.push(e):this.#t.set(n,[e])),this.#e.get(e)}unref(e){if(!this.#n.has(e))return;let n=this.#n.get(e)-1;if(n<1){URL.revokeObjectURL(this.#e.get(e)),this.#e.delete(e),this.#n.delete(e);let r=this.#t.get(e);if(r)for(;r.length;)this.unref(r.pop());this.#t.delete(e)}else this.#n.set(e,n)}async loadItem(e,n=[]){if(!e)return null;let{href:r,mediaType:i}=e,a=st.JS.test(e.mediaType);if(a&&!this.allowScript)return null;let o=n.at(-1);return this.#e.has(r)?this.ref(r,o):(a||[st.XHTML,st.HTML,st.CSS,st.SVG].includes(i))&&n.every(l=>l!==r)?this.loadReplaced(e,n):this.createURL(r,await this.loadBlob(r),i,o)}async loadHref(e,n,r=[]){if(Sl(e))return e;let i=Un(e,n),a=this.manifest.find(o=>o.href===i);return a?this.loadItem(a,r.concat(n)):e}async loadReplaced(e,n=[]){let{href:r,mediaType:i}=e,a=n.at(-1),o=await this.loadText(r);if(!o)return null;if([st.XHTML,st.HTML,st.SVG].includes(i)){let l=new DOMParser().parseFromString(o,i);if(i===st.XHTML&&l.querySelector("parsererror")&&(e.mediaType=st.HTML,l=new DOMParser().parseFromString(o,e.mediaType)),[st.XHTML,st.SVG].includes(e.mediaType)){let p=l.firstChild;for(;p instanceof ProcessingInstruction;){if(p.data){let d=await ui(p.data,/(?:^|\s*)(href\s*=\s*['"])([^'"]*)(['"])/i,(h,b,g,m)=>this.loadHref(g,r,n).then(f=>`${b}${f}${m}`));p.replaceWith(l.createProcessingInstruction(p.target,d))}p=p.nextSibling}}let c=async(p,d)=>p.setAttribute(d,await this.loadHref(p.getAttribute(d),r,n));for(let p of l.querySelectorAll("link[href]"))await c(p,"href");for(let p of l.querySelectorAll("[src]"))await c(p,"src");for(let p of l.querySelectorAll("[poster]"))await c(p,"poster");for(let p of l.querySelectorAll("object[data]"))await c(p,"data");for(let p of l.querySelectorAll("[*|href]:not([href]"))p.setAttributeNS(Xe.XLINK,"href",await this.loadHref(p.getAttributeNS(Xe.XLINK,"href"),r,n));for(let p of l.querySelectorAll("style"))p.textContent&&(p.textContent=await this.replaceCSS(p.textContent,r,n));for(let p of l.querySelectorAll("[style]"))p.setAttribute("style",await this.replaceCSS(p.getAttribute("style"),r,n));let u=new XMLSerializer().serializeToString(l);return this.createURL(r,u,e.mediaType,a)}let s=i===st.CSS?await this.replaceCSS(o,r,n):await this.replaceString(o,r,n);return this.createURL(r,s,i,a)}async replaceCSS(e,n,r=[]){let i=await ui(e,/url\(\s*["']?([^'"\n]*?)\s*["']?\s*\)/gi,(l,c)=>this.loadHref(c,n,r).then(u=>`url("${u}")`)),a=await ui(i,/@import\s*["']([^"'\n]*?)["']/gi,(l,c)=>this.loadHref(c,n,r).then(u=>`@import "${u}"`)),o=window?.innerWidth??800,s=window?.innerHeight??600;return a.replace(/-epub-/gi,"").replace(/(\d*\.?\d+)vw/gi,(l,c)=>parseFloat(c)*o/100+"px").replace(/(\d*\.?\d+)vh/gi,(l,c)=>parseFloat(c)*s/100+"px").replace(/page-break-(after|before|inside)/gi,(l,c)=>`-webkit-column-break-${c}`)}replaceString(e,n,r=[]){let i=new Map,a=this.assets.map(s=>{if(s.href===n)return;let l=kf(Af(n),s.href),c=encodeURI(l),u="/"+s.href,p=encodeURI(u),d=new Set([l,c,u,p]);for(let h of d)i.set(h,s);return Array.from(d)}).flat().filter(s=>s);if(!a.length)return e;let o=new RegExp(a.map(Ef).join("|"),"g");return ui(e,o,async s=>this.loadItem(i.get(s.replace(/^\//,"")),r.concat(n)))}unloadItem(e){this.unref(e?.href)}},Ff=(t,e)=>t.getElementById(e)??t.querySelector(`[name="${CSS.escape(e)}"]`),Bf=t=>{for(let e of t){if(e==="page-spread-left"||e==="rendition:page-spread-left")return"left";if(e==="page-spread-right"||e==="rendition:page-spread-right")return"right";if(e==="rendition:page-spread-center")return"center"}},mr=class{parser=new DOMParser;#e;constructor({loadText:e,loadBlob:n,getSize:r,sha1:i}){this.loadText=e,this.loadBlob=n,this.getSize=r,this.#e=new La(If(i))}#t(e){return e?this.parser.parseFromString(e,st.XML):null}async#n(e){return this.#t(await this.loadText(e))}opfPath=null;async init(){let e=await this.#n("META-INF/container.xml");if(!e)throw new Error("Failed to load container file");let n=Array.from(e.getElementsByTagNameNS(Xe.CONTAINER,"rootfile"),pi("full-path","media-type")).filter(g=>g.mediaType==="application/oebps-package+xml");if(!n.length)throw new Error("No package document defined in container");let r=n[0].fullPath;this.opfPath=r;let i=await this.#n(r);if(!i)throw new Error("Failed to load package document");let a=await this.#n("META-INF/encryption.xml");await this.#e.init(a,i),this.resources=new Da({opf:i,resolveHref:g=>Un(g,r)});let o=new Ra({loadText:this.loadText,loadBlob:g=>Promise.resolve(this.loadBlob(g)).then(this.#e.getDecoder(g)),resources:this.resources});this.sections=this.resources.spine.map((g,m)=>{let{idref:f,linear:y,properties:w=[]}=g,E=this.resources.getItemByID(f);return E?{id:this.resources.getItemByID(f)?.href,load:()=>o.loadItem(E),unload:()=>o.unloadItem(E),createDocument:()=>this.loadDocument(E),size:this.getSize(E.href),cfi:this.resources.cfis[m],linear:y,pageSpread:Bf(w),resolveHref:_=>Un(_,E.href),loadMediaOverlay:()=>this.loadMediaOverlay(E)}:null}).filter(g=>g);let{navPath:s,ncxPath:l}=this.resources;if(s)try{let g=f=>Un(f,s),m=Df(await this.#n(s),g);this.toc=m.toc,this.pageList=m.pageList,this.landmarks=m.landmarks}catch{}if(!this.toc&&l)try{let g=f=>Un(f,l),m=Rf(await this.#n(l),g);this.toc=m.toc,this.pageList=m.pageList}catch{}this.landmarks??=this.resources.guide;let{metadata:c,rendition:u,media:p}=Lf(i);this.rendition=u,this.media=p,p.duration=Ca(p.duration),this.dir=this.resources.pageProgressionDirection,this.rawMetadata=c;let d=c?.title?.[0];this.metadata={title:d?.value,sortAs:d?.fileAs,language:c?.language,identifier:kl(i),description:c?.description?.value,publisher:c?.publisher?.value,published:c?.date,modified:c?.dctermsModified,subject:c?.subject?.filter(({value:g,code:m})=>g||m)?.map(({value:g,code:m,scheme:f})=>({name:g,code:m,scheme:f})),rights:c?.rights?.value};let h={art:"artist",aut:"author",bkp:"producer",clr:"colorist",edt:"editor",ill:"illustrator",trl:"translator",pbl:"publisher"},b=g=>m=>{let f=[...new Set(m.role?.map(({value:w,scheme:E})=>(!E||E==="marc:relators"?h[w]:null)??g))],y={name:m.value,sortAs:m.fileAs};return[f?.length?f:[g],y]};return c?.creator?.map(b("author"))?.concat(c?.contributor?.map?.(b("contributor")))?.forEach(([g,m])=>g.forEach(f=>{this.metadata[f]?this.metadata[f].push(m):this.metadata[f]=[m]})),this}async loadDocument(e){let n=await this.loadText(e.href);return this.parser.parseFromString(n,e.mediaType)}async loadMediaOverlay(e){let n=e.mediaOverlay;if(!n)return null;let r=this.resources.getItemByID(n),i=await this.#n(r.href);return Of(i,o=>Un(o,r.href))}resolveCFI(e){return this.resources.resolveCFI(e)}resolveHref(e){let[n,r]=e.split("#"),i=this.resources.getItemByHref(decodeURI(n));return i?{index:this.resources.spine.findIndex(({idref:s})=>s===i.id),anchor:r?s=>Ff(s,r):()=>0}:null}splitTOCHref(e){return e?.split("#")??[]}getTOCFragment(e,n){return e.getElementById(n)??e.querySelector(`[name="${CSS.escape(n)}"]`)}isExternal(e){return Sl(e)}async getCover(){let e=this.resources?.cover;return e?.href?new Blob([await this.loadBlob(e.href)],{type:e.mediaType}):null}async getCalibreBookmarks(){let e=await this.loadText("META-INF/calibre_bookmarks.txt"),n="encoding=json+base64:";if(e?.startsWith(n)){let r=atob(e.slice(n.length));return JSON.parse(r)}}};var vo={};wh(vo,{BlobReader:()=>uo,BlobWriter:()=>po,Data64URIReader:()=>ug,Data64URIWriter:()=>dg,ERR_BAD_FORMAT:()=>Si,ERR_CENTRAL_DIRECTORY_NOT_FOUND:()=>hu,ERR_DUPLICATED_NAME:()=>vu,ERR_ENCRYPTED:()=>gu,ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND:()=>pu,ERR_EOCDR_NOT_FOUND:()=>uu,ERR_EOCDR_ZIP64_NOT_FOUND:()=>du,ERR_EXTRAFIELD_ZIP64_NOT_FOUND:()=>mu,ERR_HTTP_RANGE:()=>Ar,ERR_INVALID_COMMENT:()=>xu,ERR_INVALID_ENCRYPTION_STRENGTH:()=>Su,ERR_INVALID_ENTRY_COMMENT:()=>Tu,ERR_INVALID_ENTRY_NAME:()=>_u,ERR_INVALID_EXTRAFIELD_DATA:()=>Au,ERR_INVALID_EXTRAFIELD_TYPE:()=>ku,ERR_INVALID_PASSWORD:()=>ro,ERR_INVALID_SIGNATURE:()=>io,ERR_INVALID_VERSION:()=>to,ERR_ITERATOR_COMPLETED_TOO_SOON:()=>Hc,ERR_LOCAL_FILE_HEADER_NOT_FOUND:()=>fu,ERR_SPLIT_ZIP_FILE:()=>eo,ERR_UNSUPPORTED_COMPRESSION:()=>Ja,ERR_UNSUPPORTED_ENCRYPTION:()=>bu,ERR_UNSUPPORTED_FORMAT:()=>Ii,HttpRangeReader:()=>gg,HttpReader:()=>Yc,Reader:()=>Tn,SplitDataReader:()=>fo,SplitDataWriter:()=>Sr,SplitZipReader:()=>vg,SplitZipWriter:()=>xg,TextReader:()=>pg,TextWriter:()=>hg,Uint8ArrayReader:()=>bg,Uint8ArrayWriter:()=>yg,Writer:()=>co,ZipReader:()=>Lg,ZipWriter:()=>Bg,configure:()=>Ni,getMimeType:()=>bm,initReader:()=>mo,initStream:()=>rn,initWriter:()=>go,readUint8Array:()=>tt,terminateWorkers:()=>tg});function Ri(t){return Oi(t.map(([e,n])=>new Array(e).fill(n,0,e)))}function Oi(t){return t.reduce((e,n)=>e.concat(Array.isArray(n)?Oi(n):n),[])}var Al=[0,1,2,3].concat(...Ri([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function Re(){let t=this;function e(i){let a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.extra_bits,l=t.stat_desc.extra_base,c=t.stat_desc.max_length,u,p,d,h,b,g,m=0;for(h=0;h<=15;h++)i.bl_count[h]=0;for(a[i.heap[i.heap_max]*2+1]=0,u=i.heap_max+1;u<573;u++)p=i.heap[u],h=a[a[p*2+1]*2+1]+1,h>c&&(h=c,m++),a[p*2+1]=h,!(p>t.max_code)&&(i.bl_count[h]++,b=0,p>=l&&(b=s[p-l]),g=a[p*2],i.opt_len+=g*(h+b),o&&(i.static_len+=g*(o[p*2+1]+b)));if(m!==0){do{for(h=c-1;i.bl_count[h]===0;)h--;i.bl_count[h]--,i.bl_count[h+1]+=2,i.bl_count[c]--,m-=2}while(m>0);for(h=c;h!==0;h--)for(p=i.bl_count[h];p!==0;)d=i.heap[--u],!(d>t.max_code)&&(a[d*2+1]!=h&&(i.opt_len+=(h-a[d*2+1])*a[d*2],a[d*2+1]=h),p--)}}function n(i,a){let o=0;do o|=i&1,i>>>=1,o<<=1;while(--a>0);return o>>>1}function r(i,a,o){let s=[],l=0,c,u,p;for(c=1;c<=15;c++)s[c]=l=l+o[c-1]<<1;for(u=0;u<=a;u++)p=i[u*2+1],p!==0&&(i[u*2]=n(s[p]++,p))}t.build_tree=function(i){let a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.elems,l,c,u=-1,p;for(i.heap_len=0,i.heap_max=573,l=0;l<s;l++)a[l*2]!==0?(i.heap[++i.heap_len]=u=l,i.depth[l]=0):a[l*2+1]=0;for(;i.heap_len<2;)p=i.heap[++i.heap_len]=u<2?++u:0,a[p*2]=1,i.depth[p]=0,i.opt_len--,o&&(i.static_len-=o[p*2+1]);for(t.max_code=u,l=Math.floor(i.heap_len/2);l>=1;l--)i.pqdownheap(a,l);p=s;do l=i.heap[1],i.heap[1]=i.heap[i.heap_len--],i.pqdownheap(a,1),c=i.heap[1],i.heap[--i.heap_max]=l,i.heap[--i.heap_max]=c,a[p*2]=a[l*2]+a[c*2],i.depth[p]=Math.max(i.depth[l],i.depth[c])+1,a[l*2+1]=a[c*2+1]=p,i.heap[1]=p++,i.pqdownheap(a,1);while(i.heap_len>=2);i.heap[--i.heap_max]=i.heap[1],e(i),r(a,t.max_code,i.bl_count)}}Re._length_code=[0,1,2,3,4,5,6,7].concat(...Ri([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]]));Re.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0];Re.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576];Re.d_code=function(t){return t<256?Al[t]:Al[256+(t>>>7)]};Re.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];Re.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];Re.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];Re.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function Ye(t,e,n,r,i){let a=this;a.static_tree=t,a.extra_bits=e,a.extra_base=n,a.elems=r,a.max_length=i}var zf=[12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227],Uf=Ri([[144,8],[112,9],[24,7],[8,8]]);Ye.static_ltree=Oi(zf.map((t,e)=>[t,Uf[e]]));var $f=[0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23],Wf=Ri([[30,5]]);Ye.static_dtree=Oi($f.map((t,e)=>[t,Wf[e]]));Ye.static_l_desc=new Ye(Ye.static_ltree,Re.extra_lbits,257,286,15);Ye.static_d_desc=new Ye(Ye.static_dtree,Re.extra_dbits,0,30,15);Ye.static_bl_desc=new Ye(null,Re.extra_blbits,0,19,7);var Hf=9,jf=8;function Kt(t,e,n,r,i){let a=this;a.good_length=t,a.max_lazy=e,a.nice_length=n,a.max_chain=r,a.func=i}var fc=0,xi=1,On=2,It=[new Kt(0,0,0,0,fc),new Kt(4,4,8,4,xi),new Kt(4,5,16,8,xi),new Kt(4,6,32,32,xi),new Kt(4,4,16,16,On),new Kt(8,16,32,32,On),new Kt(8,16,128,128,On),new Kt(8,32,128,256,On),new Kt(32,128,258,1024,On),new Kt(32,258,258,4096,On)],hi=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],Ft=0,fi=1,br=2,mi=3,qf=32,Oa=42,gi=113,yr=666,Na=8,Kf=0,Pa=1,Gf=2,Pe=3,Ti=258,bt=Ti+Pe+1;function El(t,e,n,r){let i=t[e*2],a=t[n*2];return i<a||i==a&&r[e]<=r[n]}function Vf(){let t=this,e,n,r,i,a,o,s,l,c,u,p,d,h,b,g,m,f,y,w,E,_,T,v,x,S,k,C,N,O,B,P,U,z,j=new Re,ne=new Re,K=new Re;t.depth=[];let ee,L,M,H,G,X;t.bl_count=[],t.heap=[],P=[],U=[],z=[];function ue(){c=2*a,p[h-1]=0;for(let I=0;I<h-1;I++)p[I]=0;k=It[C].max_lazy,O=It[C].good_length,B=It[C].nice_length,S=It[C].max_chain,_=0,f=0,v=0,y=x=Pe-1,E=0,d=0}function pe(){let I;for(I=0;I<286;I++)P[I*2]=0;for(I=0;I<30;I++)U[I*2]=0;for(I=0;I<19;I++)z[I*2]=0;P[256*2]=1,t.opt_len=t.static_len=0,L=M=0}function he(){j.dyn_tree=P,j.stat_desc=Ye.static_l_desc,ne.dyn_tree=U,ne.stat_desc=Ye.static_d_desc,K.dyn_tree=z,K.stat_desc=Ye.static_bl_desc,G=0,X=0,H=8,pe()}t.pqdownheap=function(I,$){let F=t.heap,W=F[$],q=$<<1;for(;q<=t.heap_len&&(q<t.heap_len&&El(I,F[q+1],F[q],t.depth)&&q++,!El(I,W,F[q],t.depth));)F[$]=F[q],$=q,q<<=1;F[$]=W};function Q(I,$){let F=-1,W,q=I[0*2+1],Z=0,le=7,Ve=4;q===0&&(le=138,Ve=3),I[($+1)*2+1]=65535;for(let ht=0;ht<=$;ht++)W=q,q=I[(ht+1)*2+1],!(++Z<le&&W==q)&&(Z<Ve?z[W*2]+=Z:W!==0?(W!=F&&z[W*2]++,z[16*2]++):Z<=10?z[17*2]++:z[18*2]++,Z=0,F=W,q===0?(le=138,Ve=3):W==q?(le=6,Ve=3):(le=7,Ve=4))}function ae(){let I;for(Q(P,j.max_code),Q(U,ne.max_code),K.build_tree(t),I=18;I>=3&&z[Re.bl_order[I]*2+1]===0;I--);return t.opt_len+=3*(I+1)+5+5+4,I}function oe(I){t.pending_buf[t.pending++]=I}function se(I){oe(I&255),oe(I>>>8&255)}function Y(I){oe(I>>8&255),oe(I&255&255)}function ie(I,$){let F,W=$;X>16-W?(F=I,G|=F<<X&65535,se(G),G=F>>>16-X,X+=W-16):(G|=I<<X&65535,X+=W)}function de(I,$){let F=I*2;ie($[F]&65535,$[F+1]&65535)}function fe(I,$){let F,W=-1,q,Z=I[0*2+1],le=0,Ve=7,ht=4;for(Z===0&&(Ve=138,ht=3),F=0;F<=$;F++)if(q=Z,Z=I[(F+1)*2+1],!(++le<Ve&&q==Z)){if(le<ht)do de(q,z);while(--le!==0);else q!==0?(q!=W&&(de(q,z),le--),de(16,z),ie(le-3,2)):le<=10?(de(17,z),ie(le-3,3)):(de(18,z),ie(le-11,7));le=0,W=q,Z===0?(Ve=138,ht=3):q==Z?(Ve=6,ht=3):(Ve=7,ht=4)}}function re(I,$,F){let W;for(ie(I-257,5),ie($-1,5),ie(F-4,4),W=0;W<F;W++)ie(z[Re.bl_order[W]*2+1],3);fe(P,I-1),fe(U,$-1)}function Ce(){X==16?(se(G),G=0,X=0):X>=8&&(oe(G&255),G>>>=8,X-=8)}function Me(){ie(Pa<<1,3),de(256,Ye.static_ltree),Ce(),1+H+10-X<9&&(ie(Pa<<1,3),de(256,Ye.static_ltree),Ce()),H=7}function Te(I,$){let F,W,q;if(t.dist_buf[L]=I,t.lc_buf[L]=$&255,L++,I===0?P[$*2]++:(M++,I--,P[(Re._length_code[$]+256+1)*2]++,U[Re.d_code(I)*2]++),!(L&8191)&&C>2){for(F=L*8,W=_-f,q=0;q<30;q++)F+=U[q*2]*(5+Re.extra_dbits[q]);if(F>>>=3,M<Math.floor(L/2)&&F<Math.floor(W/2))return!0}return L==ee-1}function Ne(I,$){let F,W,q=0,Z,le;if(L!==0)do F=t.dist_buf[q],W=t.lc_buf[q],q++,F===0?de(W,I):(Z=Re._length_code[W],de(Z+256+1,I),le=Re.extra_lbits[Z],le!==0&&(W-=Re.base_length[Z],ie(W,le)),F--,Z=Re.d_code(F),de(Z,$),le=Re.extra_dbits[Z],le!==0&&(F-=Re.base_dist[Z],ie(F,le)));while(q<L);de(256,I),H=I[256*2+1]}function We(){X>8?se(G):X>0&&oe(G&255),G=0,X=0}function dt(I,$,F){We(),H=8,F&&(se($),se(~$)),t.pending_buf.set(l.subarray(I,I+$),t.pending),t.pending+=$}function dn(I,$,F){ie((Kf<<1)+(F?1:0),3),dt(I,$,!0)}function St(I,$,F){let W,q,Z=0;C>0?(j.build_tree(t),ne.build_tree(t),Z=ae(),W=t.opt_len+3+7>>>3,q=t.static_len+3+7>>>3,q<=W&&(W=q)):W=q=$+5,$+4<=W&&I!=-1?dn(I,$,F):q==W?(ie((Pa<<1)+(F?1:0),3),Ne(Ye.static_ltree,Ye.static_dtree)):(ie((Gf<<1)+(F?1:0),3),re(j.max_code+1,ne.max_code+1,Z+1),Ne(P,U)),pe(),F&&We()}function et(I){St(f>=0?f:-1,_-f,I),f=_,e.flush_pending()}function jt(){let I,$,F,W;do{if(W=c-v-_,W===0&&_===0&&v===0)W=a;else if(W==-1)W--;else if(_>=a+a-bt){l.set(l.subarray(a,a+a),0),T-=a,_-=a,f-=a,I=h,F=I;do $=p[--F]&65535,p[F]=$>=a?$-a:0;while(--I!==0);I=a,F=I;do $=u[--F]&65535,u[F]=$>=a?$-a:0;while(--I!==0);W+=a}if(e.avail_in===0)return;I=e.read_buf(l,_+v,W),v+=I,v>=Pe&&(d=l[_]&255,d=(d<<m^l[_+1]&255)&g)}while(v<bt&&e.avail_in!==0)}function He(I){let $=65535,F;for($>r-5&&($=r-5);;){if(v<=1){if(jt(),v===0&&I==0)return Ft;if(v===0)break}if(_+=v,v=0,F=f+$,(_===0||_>=F)&&(v=_-F,_=F,et(!1),e.avail_out===0)||_-f>=a-bt&&(et(!1),e.avail_out===0))return Ft}return et(I==4),e.avail_out===0?I==4?br:Ft:I==4?mi:fi}function pt(I){let $=S,F=_,W,q,Z=x,le=_>a-bt?_-(a-bt):0,Ve=B,ht=s,En=_+Ti,sr=l[F+Z-1],lr=l[F+Z];x>=O&&($>>=2),Ve>v&&(Ve=v);do if(W=I,!(l[W+Z]!=lr||l[W+Z-1]!=sr||l[W]!=l[F]||l[++W]!=l[F+1])){F+=2,W++;do;while(l[++F]==l[++W]&&l[++F]==l[++W]&&l[++F]==l[++W]&&l[++F]==l[++W]&&l[++F]==l[++W]&&l[++F]==l[++W]&&l[++F]==l[++W]&&l[++F]==l[++W]&&F<En);if(q=Ti-(En-F),F=En-Ti,q>Z){if(T=I,Z=q,q>=Ve)break;sr=l[F+Z-1],lr=l[F+Z]}}while((I=u[I&ht]&65535)>le&&--$!==0);return Z<=v?Z:v}function je(I){let $=0,F;for(;;){if(v<bt){if(jt(),v<bt&&I==0)return Ft;if(v===0)break}if(v>=Pe&&(d=(d<<m^l[_+(Pe-1)]&255)&g,$=p[d]&65535,u[_&s]=p[d],p[d]=_),$!==0&&(_-$&65535)<=a-bt&&N!=2&&(y=pt($)),y>=Pe)if(F=Te(_-T,y-Pe),v-=y,y<=k&&v>=Pe){y--;do _++,d=(d<<m^l[_+(Pe-1)]&255)&g,$=p[d]&65535,u[_&s]=p[d],p[d]=_;while(--y!==0);_++}else _+=y,y=0,d=l[_]&255,d=(d<<m^l[_+1]&255)&g;else F=Te(0,l[_]&255),v--,_++;if(F&&(et(!1),e.avail_out===0))return Ft}return et(I==4),e.avail_out===0?I==4?br:Ft:I==4?mi:fi}function it(I){let $=0,F,W;for(;;){if(v<bt){if(jt(),v<bt&&I==0)return Ft;if(v===0)break}if(v>=Pe&&(d=(d<<m^l[_+(Pe-1)]&255)&g,$=p[d]&65535,u[_&s]=p[d],p[d]=_),x=y,w=T,y=Pe-1,$!==0&&x<k&&(_-$&65535)<=a-bt&&(N!=2&&(y=pt($)),y<=5&&(N==1||y==Pe&&_-T>4096)&&(y=Pe-1)),x>=Pe&&y<=x){W=_+v-Pe,F=Te(_-1-w,x-Pe),v-=x-1,x-=2;do++_<=W&&(d=(d<<m^l[_+(Pe-1)]&255)&g,$=p[d]&65535,u[_&s]=p[d],p[d]=_);while(--x!==0);if(E=0,y=Pe-1,_++,F&&(et(!1),e.avail_out===0))return Ft}else if(E!==0){if(F=Te(0,l[_-1]&255),F&&et(!1),_++,v--,e.avail_out===0)return Ft}else E=1,_++,v--}return E!==0&&(F=Te(0,l[_-1]&255),E=0),et(I==4),e.avail_out===0?I==4?br:Ft:I==4?mi:fi}function Pt(I){return I.total_in=I.total_out=0,I.msg=null,t.pending=0,t.pending_out=0,n=gi,i=0,he(),ue(),0}t.deflateInit=function(I,$,F,W,q,Z){return W||(W=Na),q||(q=jf),Z||(Z=0),I.msg=null,$==-1&&($=6),q<1||q>Hf||W!=Na||F<9||F>15||$<0||$>9||Z<0||Z>2?-2:(I.dstate=t,o=F,a=1<<o,s=a-1,b=q+7,h=1<<b,g=h-1,m=Math.floor((b+Pe-1)/Pe),l=new Uint8Array(a*2),u=[],p=[],ee=1<<q+6,t.pending_buf=new Uint8Array(ee*4),r=ee*4,t.dist_buf=new Uint16Array(ee),t.lc_buf=new Uint8Array(ee),C=$,N=Z,Pt(I))},t.deflateEnd=function(){return n!=Oa&&n!=gi&&n!=yr?-2:(t.lc_buf=null,t.dist_buf=null,t.pending_buf=null,p=null,u=null,l=null,t.dstate=null,n==gi?-3:0)},t.deflateParams=function(I,$,F){let W=0;return $==-1&&($=6),$<0||$>9||F<0||F>2?-2:(It[C].func!=It[$].func&&I.total_in!==0&&(W=I.deflate(1)),C!=$&&(C=$,k=It[C].max_lazy,O=It[C].good_length,B=It[C].nice_length,S=It[C].max_chain),N=F,W)},t.deflateSetDictionary=function(I,$,F){let W=F,q,Z=0;if(!$||n!=Oa)return-2;if(W<Pe)return 0;for(W>a-bt&&(W=a-bt,Z=F-W),l.set($.subarray(Z,Z+W),0),_=W,f=W,d=l[0]&255,d=(d<<m^l[1]&255)&g,q=0;q<=W-Pe;q++)d=(d<<m^l[q+(Pe-1)]&255)&g,u[q&s]=p[d],p[d]=q;return 0},t.deflate=function(I,$){let F,W,q,Z,le;if($>4||$<0)return-2;if(!I.next_out||!I.next_in&&I.avail_in!==0||n==yr&&$!=4)return I.msg=hi[4],-2;if(I.avail_out===0)return I.msg=hi[7],-5;if(e=I,Z=i,i=$,n==Oa&&(W=Na+(o-8<<4)<<8,q=(C-1&255)>>1,q>3&&(q=3),W|=q<<6,_!==0&&(W|=qf),W+=31-W%31,n=gi,Y(W)),t.pending!==0){if(e.flush_pending(),e.avail_out===0)return i=-1,0}else if(e.avail_in===0&&$<=Z&&$!=4)return e.msg=hi[7],-5;if(n==yr&&e.avail_in!==0)return I.msg=hi[7],-5;if(e.avail_in!==0||v!==0||$!=0&&n!=yr){switch(le=-1,It[C].func){case fc:le=He($);break;case xi:le=je($);break;case On:le=it($);break;default:}if((le==br||le==mi)&&(n=yr),le==Ft||le==br)return e.avail_out===0&&(i=-1),0;if(le==fi){if($==1)Me();else if(dn(0,0,!1),$==3)for(F=0;F<h;F++)p[F]=0;if(e.flush_pending(),e.avail_out===0)return i=-1,0}}return $!=4?0:1}}function mc(){let t=this;t.next_in_index=0,t.next_out_index=0,t.avail_in=0,t.total_in=0,t.avail_out=0,t.total_out=0}mc.prototype={deflateInit(t,e){let n=this;return n.dstate=new Vf,e||(e=15),n.dstate.deflateInit(n,t,e)},deflate(t){let e=this;return e.dstate?e.dstate.deflate(e,t):-2},deflateEnd(){let t=this;if(!t.dstate)return-2;let e=t.dstate.deflateEnd();return t.dstate=null,e},deflateParams(t,e){let n=this;return n.dstate?n.dstate.deflateParams(n,t,e):-2},deflateSetDictionary(t,e){let n=this;return n.dstate?n.dstate.deflateSetDictionary(n,t,e):-2},read_buf(t,e,n){let r=this,i=r.avail_in;return i>n&&(i=n),i===0?0:(r.avail_in-=i,t.set(r.next_in.subarray(r.next_in_index,r.next_in_index+i),e),r.next_in_index+=i,r.total_in+=i,i)},flush_pending(){let t=this,e=t.dstate.pending;e>t.avail_out&&(e=t.avail_out),e!==0&&(t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out,t.dstate.pending_out+e),t.next_out_index),t.next_out_index+=e,t.dstate.pending_out+=e,t.total_out+=e,t.avail_out-=e,t.dstate.pending-=e,t.dstate.pending===0&&(t.dstate.pending_out=0))}};function Xf(t){let e=this,n=new mc,r=Yf(t&&t.chunkSize?t.chunkSize:64*1024),i=0,a=new Uint8Array(r),o=t?t.level:-1;typeof o>"u"&&(o=-1),n.deflateInit(o),n.next_out=a,e.append=function(s,l){let c,u,p=0,d=0,h=0,b=[];if(s.length){n.next_in_index=0,n.next_in=s,n.avail_in=s.length;do{if(n.next_out_index=0,n.avail_out=r,c=n.deflate(i),c!=0)throw new Error("deflating: "+n.msg);n.next_out_index&&(n.next_out_index==r?b.push(new Uint8Array(a)):b.push(a.slice(0,n.next_out_index))),h+=n.next_out_index,l&&n.next_in_index>0&&n.next_in_index!=p&&(l(n.next_in_index),p=n.next_in_index)}while(n.avail_in>0||n.avail_out===0);return b.length>1?(u=new Uint8Array(h),b.forEach(function(g){u.set(g,d),d+=g.length})):u=b[0]||new Uint8Array,u}},e.flush=function(){let s,l,c=0,u=0,p=[];do{if(n.next_out_index=0,n.avail_out=r,s=n.deflate(4),s!=1&&s!=0)throw new Error("deflating: "+n.msg);r-n.avail_out>0&&p.push(a.slice(0,n.next_out_index)),u+=n.next_out_index}while(n.avail_in>0||n.avail_out===0);return n.deflateEnd(),l=new Uint8Array(u),p.forEach(function(d){l.set(d,c),c+=d.length}),l}}function Yf(t){return t+5*(Math.floor(t/16383)+1)}var yt=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],gc=1440,Zf=0,Qf=4,Jf=9,em=5,tm=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],nm=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],rm=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],im=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],am=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],om=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],gn=15;function ja(){let t=this,e,n,r,i,a,o;function s(c,u,p,d,h,b,g,m,f,y,w){let E,_,T,v,x,S,k,C,N,O,B,P,U,z,j;O=0,x=p;do r[c[u+O]]++,O++,x--;while(x!==0);if(r[0]==p)return g[0]=-1,m[0]=0,0;for(C=m[0],S=1;S<=gn&&r[S]===0;S++);for(k=S,C<S&&(C=S),x=gn;x!==0&&r[x]===0;x--);for(T=x,C>x&&(C=x),m[0]=C,z=1<<S;S<x;S++,z<<=1)if((z-=r[S])<0)return-3;if((z-=r[x])<0)return-3;for(r[x]+=z,o[1]=S=0,O=1,U=2;--x!==0;)o[U]=S+=r[O],U++,O++;x=0,O=0;do(S=c[u+O])!==0&&(w[o[S]++]=x),O++;while(++x<p);for(p=o[T],o[0]=x=0,O=0,v=-1,P=-C,a[0]=0,B=0,j=0;k<=T;k++)for(E=r[k];E--!==0;){for(;k>P+C;){if(v++,P+=C,j=T-P,j=j>C?C:j,(_=1<<(S=k-P))>E+1&&(_-=E+1,U=k,S<j))for(;++S<j&&!((_<<=1)<=r[++U]);)_-=r[U];if(j=1<<S,y[0]+j>gc)return-3;a[v]=B=y[0],y[0]+=j,v!==0?(o[v]=x,i[0]=S,i[1]=C,S=x>>>P-C,i[2]=B-a[v-1]-S,f.set(i,(a[v-1]+S)*3)):g[0]=B}for(i[1]=k-P,O>=p?i[0]=192:w[O]<d?(i[0]=w[O]<256?0:96,i[2]=w[O++]):(i[0]=b[w[O]-d]+16+64,i[2]=h[w[O++]-d]),_=1<<k-P,S=x>>>P;S<j;S+=_)f.set(i,(B+S)*3);for(S=1<<k-1;x&S;S>>>=1)x^=S;for(x^=S,N=(1<<P)-1;(x&N)!=o[v];)v--,P-=C,N=(1<<P)-1}return z!==0&&T!=1?-5:0}function l(c){let u;for(e||(e=[],n=[],r=new Int32Array(gn+1),i=[],a=new Int32Array(gn),o=new Int32Array(gn+1)),n.length<c&&(n=[]),u=0;u<c;u++)n[u]=0;for(u=0;u<gn+1;u++)r[u]=0;for(u=0;u<3;u++)i[u]=0;a.set(r.subarray(0,gn),0),o.set(r.subarray(0,gn+1),0)}t.inflate_trees_bits=function(c,u,p,d,h){let b;return l(19),e[0]=0,b=s(c,0,19,19,null,null,p,u,d,e,n),b==-3?h.msg="oversubscribed dynamic bit lengths tree":(b==-5||u[0]===0)&&(h.msg="incomplete dynamic bit lengths tree",b=-3),b},t.inflate_trees_dynamic=function(c,u,p,d,h,b,g,m,f){let y;return l(288),e[0]=0,y=s(p,0,c,257,rm,im,b,d,m,e,n),y!=0||d[0]===0?(y==-3?f.msg="oversubscribed literal/length tree":y!=-4&&(f.msg="incomplete literal/length tree",y=-3),y):(l(288),y=s(p,c,u,0,am,om,g,h,m,e,n),y!=0||h[0]===0&&c>257?(y==-3?f.msg="oversubscribed distance tree":y==-5?(f.msg="incomplete distance tree",y=-3):y!=-4&&(f.msg="empty distance tree with lengths",y=-3),y):0)}}ja.inflate_trees_fixed=function(t,e,n,r){return t[0]=Jf,e[0]=em,n[0]=tm,r[0]=nm,0};var bi=0,Cl=1,Ll=2,Dl=3,Rl=4,Ol=5,Nl=6,Ma=7,Pl=8,yi=9;function sm(){let t=this,e,n=0,r,i=0,a=0,o=0,s=0,l=0,c=0,u=0,p,d=0,h,b=0;function g(m,f,y,w,E,_,T,v){let x,S,k,C,N,O,B,P,U,z,j,ne,K,ee,L,M;B=v.next_in_index,P=v.avail_in,N=T.bitb,O=T.bitk,U=T.write,z=U<T.read?T.read-U-1:T.end-U,j=yt[m],ne=yt[f];do{for(;O<20;)P--,N|=(v.read_byte(B++)&255)<<O,O+=8;if(x=N&j,S=y,k=w,M=(k+x)*3,(C=S[M])===0){N>>=S[M+1],O-=S[M+1],T.win[U++]=S[M+2],z--;continue}do{if(N>>=S[M+1],O-=S[M+1],C&16){for(C&=15,K=S[M+2]+(N&yt[C]),N>>=C,O-=C;O<15;)P--,N|=(v.read_byte(B++)&255)<<O,O+=8;x=N&ne,S=E,k=_,M=(k+x)*3,C=S[M];do if(N>>=S[M+1],O-=S[M+1],C&16){for(C&=15;O<C;)P--,N|=(v.read_byte(B++)&255)<<O,O+=8;if(ee=S[M+2]+(N&yt[C]),N>>=C,O-=C,z-=K,U>=ee)L=U-ee,U-L>0&&2>U-L?(T.win[U++]=T.win[L++],T.win[U++]=T.win[L++],K-=2):(T.win.set(T.win.subarray(L,L+2),U),U+=2,L+=2,K-=2);else{L=U-ee;do L+=T.end;while(L<0);if(C=T.end-L,K>C){if(K-=C,U-L>0&&C>U-L)do T.win[U++]=T.win[L++];while(--C!==0);else T.win.set(T.win.subarray(L,L+C),U),U+=C,L+=C,C=0;L=0}}if(U-L>0&&K>U-L)do T.win[U++]=T.win[L++];while(--K!==0);else T.win.set(T.win.subarray(L,L+K),U),U+=K,L+=K,K=0;break}else if(!(C&64))x+=S[M+2],x+=N&yt[C],M=(k+x)*3,C=S[M];else return v.msg="invalid distance code",K=v.avail_in-P,K=O>>3<K?O>>3:K,P+=K,B-=K,O-=K<<3,T.bitb=N,T.bitk=O,v.avail_in=P,v.total_in+=B-v.next_in_index,v.next_in_index=B,T.write=U,-3;while(!0);break}if(C&64)return C&32?(K=v.avail_in-P,K=O>>3<K?O>>3:K,P+=K,B-=K,O-=K<<3,T.bitb=N,T.bitk=O,v.avail_in=P,v.total_in+=B-v.next_in_index,v.next_in_index=B,T.write=U,1):(v.msg="invalid literal/length code",K=v.avail_in-P,K=O>>3<K?O>>3:K,P+=K,B-=K,O-=K<<3,T.bitb=N,T.bitk=O,v.avail_in=P,v.total_in+=B-v.next_in_index,v.next_in_index=B,T.write=U,-3);if(x+=S[M+2],x+=N&yt[C],M=(k+x)*3,(C=S[M])===0){N>>=S[M+1],O-=S[M+1],T.win[U++]=S[M+2],z--;break}}while(!0)}while(z>=258&&P>=10);return K=v.avail_in-P,K=O>>3<K?O>>3:K,P+=K,B-=K,O-=K<<3,T.bitb=N,T.bitk=O,v.avail_in=P,v.total_in+=B-v.next_in_index,v.next_in_index=B,T.write=U,0}t.init=function(m,f,y,w,E,_){e=bi,c=m,u=f,p=y,d=w,h=E,b=_,r=null},t.proc=function(m,f,y){let w,E,_,T=0,v=0,x=0,S,k,C,N;for(x=f.next_in_index,S=f.avail_in,T=m.bitb,v=m.bitk,k=m.write,C=k<m.read?m.read-k-1:m.end-k;;)switch(e){case bi:if(C>=258&&S>=10&&(m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=k,y=g(c,u,p,d,h,b,m,f),x=f.next_in_index,S=f.avail_in,T=m.bitb,v=m.bitk,k=m.write,C=k<m.read?m.read-k-1:m.end-k,y!=0)){e=y==1?Ma:yi;break}a=c,r=p,i=d,e=Cl;case Cl:for(w=a;v<w;){if(S!==0)y=0;else return m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=k,m.inflate_flush(f,y);S--,T|=(f.read_byte(x++)&255)<<v,v+=8}if(E=(i+(T&yt[w]))*3,T>>>=r[E+1],v-=r[E+1],_=r[E],_===0){o=r[E+2],e=Nl;break}if(_&16){s=_&15,n=r[E+2],e=Ll;break}if(!(_&64)){a=_,i=E/3+r[E+2];break}if(_&32){e=Ma;break}return e=yi,f.msg="invalid literal/length code",y=-3,m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=k,m.inflate_flush(f,y);case Ll:for(w=s;v<w;){if(S!==0)y=0;else return m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=k,m.inflate_flush(f,y);S--,T|=(f.read_byte(x++)&255)<<v,v+=8}n+=T&yt[w],T>>=w,v-=w,a=u,r=h,i=b,e=Dl;case Dl:for(w=a;v<w;){if(S!==0)y=0;else return m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=k,m.inflate_flush(f,y);S--,T|=(f.read_byte(x++)&255)<<v,v+=8}if(E=(i+(T&yt[w]))*3,T>>=r[E+1],v-=r[E+1],_=r[E],_&16){s=_&15,l=r[E+2],e=Rl;break}if(!(_&64)){a=_,i=E/3+r[E+2];break}return e=yi,f.msg="invalid distance code",y=-3,m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=k,m.inflate_flush(f,y);case Rl:for(w=s;v<w;){if(S!==0)y=0;else return m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=k,m.inflate_flush(f,y);S--,T|=(f.read_byte(x++)&255)<<v,v+=8}l+=T&yt[w],T>>=w,v-=w,e=Ol;case Ol:for(N=k-l;N<0;)N+=m.end;for(;n!==0;){if(C===0&&(k==m.end&&m.read!==0&&(k=0,C=k<m.read?m.read-k-1:m.end-k),C===0&&(m.write=k,y=m.inflate_flush(f,y),k=m.write,C=k<m.read?m.read-k-1:m.end-k,k==m.end&&m.read!==0&&(k=0,C=k<m.read?m.read-k-1:m.end-k),C===0)))return m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=k,m.inflate_flush(f,y);m.win[k++]=m.win[N++],C--,N==m.end&&(N=0),n--}e=bi;break;case Nl:if(C===0&&(k==m.end&&m.read!==0&&(k=0,C=k<m.read?m.read-k-1:m.end-k),C===0&&(m.write=k,y=m.inflate_flush(f,y),k=m.write,C=k<m.read?m.read-k-1:m.end-k,k==m.end&&m.read!==0&&(k=0,C=k<m.read?m.read-k-1:m.end-k),C===0)))return m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=k,m.inflate_flush(f,y);y=0,m.win[k++]=o,C--,e=bi;break;case Ma:if(v>7&&(v-=8,S++,x--),m.write=k,y=m.inflate_flush(f,y),k=m.write,C=k<m.read?m.read-k-1:m.end-k,m.read!=m.write)return m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=k,m.inflate_flush(f,y);e=Pl;case Pl:return y=1,m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=k,m.inflate_flush(f,y);case yi:return y=-3,m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=k,m.inflate_flush(f,y);default:return y=-2,m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=k,m.inflate_flush(f,y)}},t.free=function(){}}var Ml=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],$n=0,Ia=1,Il=2,Fl=3,Bl=4,zl=5,wi=6,vi=7,Ul=8,Rn=9;function lm(t,e){let n=this,r=$n,i=0,a=0,o=0,s,l=[0],c=[0],u=new sm,p=0,d=new Int32Array(gc*3),h=0,b=new ja;n.bitk=0,n.bitb=0,n.win=new Uint8Array(e),n.end=e,n.read=0,n.write=0,n.reset=function(g,m){m&&(m[0]=h),r==wi&&u.free(g),r=$n,n.bitk=0,n.bitb=0,n.read=n.write=0},n.reset(t,null),n.inflate_flush=function(g,m){let f,y,w;return y=g.next_out_index,w=n.read,f=(w<=n.write?n.write:n.end)-w,f>g.avail_out&&(f=g.avail_out),f!==0&&m==-5&&(m=0),g.avail_out-=f,g.total_out+=f,g.next_out.set(n.win.subarray(w,w+f),y),y+=f,w+=f,w==n.end&&(w=0,n.write==n.end&&(n.write=0),f=n.write-w,f>g.avail_out&&(f=g.avail_out),f!==0&&m==-5&&(m=0),g.avail_out-=f,g.total_out+=f,g.next_out.set(n.win.subarray(w,w+f),y),y+=f,w+=f),g.next_out_index=y,n.read=w,m},n.proc=function(g,m){let f,y,w,E,_,T,v,x;for(E=g.next_in_index,_=g.avail_in,y=n.bitb,w=n.bitk,T=n.write,v=T<n.read?n.read-T-1:n.end-T;;){let S,k,C,N,O,B,P,U;switch(r){case $n:for(;w<3;){if(_!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);_--,y|=(g.read_byte(E++)&255)<<w,w+=8}switch(f=y&7,p=f&1,f>>>1){case 0:y>>>=3,w-=3,f=w&7,y>>>=f,w-=f,r=Ia;break;case 1:S=[],k=[],C=[[]],N=[[]],ja.inflate_trees_fixed(S,k,C,N),u.init(S[0],k[0],C[0],0,N[0],0),y>>>=3,w-=3,r=wi;break;case 2:y>>>=3,w-=3,r=Fl;break;case 3:return y>>>=3,w-=3,r=Rn,g.msg="invalid block type",m=-3,n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m)}break;case Ia:for(;w<32;){if(_!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);_--,y|=(g.read_byte(E++)&255)<<w,w+=8}if((~y>>>16&65535)!=(y&65535))return r=Rn,g.msg="invalid stored block lengths",m=-3,n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);i=y&65535,y=w=0,r=i!==0?Il:p!==0?vi:$n;break;case Il:if(_===0||v===0&&(T==n.end&&n.read!==0&&(T=0,v=T<n.read?n.read-T-1:n.end-T),v===0&&(n.write=T,m=n.inflate_flush(g,m),T=n.write,v=T<n.read?n.read-T-1:n.end-T,T==n.end&&n.read!==0&&(T=0,v=T<n.read?n.read-T-1:n.end-T),v===0)))return n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);if(m=0,f=i,f>_&&(f=_),f>v&&(f=v),n.win.set(g.read_buf(E,f),T),E+=f,_-=f,T+=f,v-=f,(i-=f)!==0)break;r=p!==0?vi:$n;break;case Fl:for(;w<14;){if(_!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);_--,y|=(g.read_byte(E++)&255)<<w,w+=8}if(a=f=y&16383,(f&31)>29||(f>>5&31)>29)return r=Rn,g.msg="too many length or distance symbols",m=-3,n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);if(f=258+(f&31)+(f>>5&31),!s||s.length<f)s=[];else for(x=0;x<f;x++)s[x]=0;y>>>=14,w-=14,o=0,r=Bl;case Bl:for(;o<4+(a>>>10);){for(;w<3;){if(_!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);_--,y|=(g.read_byte(E++)&255)<<w,w+=8}s[Ml[o++]]=y&7,y>>>=3,w-=3}for(;o<19;)s[Ml[o++]]=0;if(l[0]=7,f=b.inflate_trees_bits(s,l,c,d,g),f!=0)return m=f,m==-3&&(s=null,r=Rn),n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);o=0,r=zl;case zl:for(;f=a,!(o>=258+(f&31)+(f>>5&31));){let z,j;for(f=l[0];w<f;){if(_!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);_--,y|=(g.read_byte(E++)&255)<<w,w+=8}if(f=d[(c[0]+(y&yt[f]))*3+1],j=d[(c[0]+(y&yt[f]))*3+2],j<16)y>>>=f,w-=f,s[o++]=j;else{for(x=j==18?7:j-14,z=j==18?11:3;w<f+x;){if(_!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);_--,y|=(g.read_byte(E++)&255)<<w,w+=8}if(y>>>=f,w-=f,z+=y&yt[x],y>>>=x,w-=x,x=o,f=a,x+z>258+(f&31)+(f>>5&31)||j==16&&x<1)return s=null,r=Rn,g.msg="invalid bit length repeat",m=-3,n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);j=j==16?s[x-1]:0;do s[x++]=j;while(--z!==0);o=x}}if(c[0]=-1,O=[],B=[],P=[],U=[],O[0]=9,B[0]=6,f=a,f=b.inflate_trees_dynamic(257+(f&31),1+(f>>5&31),s,O,B,P,U,d,g),f!=0)return f==-3&&(s=null,r=Rn),m=f,n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);u.init(O[0],B[0],d,P[0],d,U[0]),r=wi;case wi:if(n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,(m=u.proc(n,g,m))!=1)return n.inflate_flush(g,m);if(m=0,u.free(g),E=g.next_in_index,_=g.avail_in,y=n.bitb,w=n.bitk,T=n.write,v=T<n.read?n.read-T-1:n.end-T,p===0){r=$n;break}r=vi;case vi:if(n.write=T,m=n.inflate_flush(g,m),T=n.write,v=T<n.read?n.read-T-1:n.end-T,n.read!=n.write)return n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);r=Ul;case Ul:return m=1,n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);case Rn:return m=-3,n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);default:return m=-2,n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m)}}},n.free=function(g){n.reset(g,null),n.win=null,d=null},n.set_dictionary=function(g,m,f){n.win.set(g.subarray(m,m+f),0),n.read=n.write=f},n.sync_point=function(){return r==Ia?1:0}}var cm=32,um=8,dm=0,$l=1,Wl=2,Hl=3,jl=4,ql=5,Fa=6,wr=7,Kl=12,bn=13,pm=[0,0,255,255];function hm(){let t=this;t.mode=0,t.method=0,t.was=[0],t.need=0,t.marker=0,t.wbits=0;function e(n){return!n||!n.istate?-2:(n.total_in=n.total_out=0,n.msg=null,n.istate.mode=wr,n.istate.blocks.reset(n,null),0)}t.inflateEnd=function(n){return t.blocks&&t.blocks.free(n),t.blocks=null,0},t.inflateInit=function(n,r){return n.msg=null,t.blocks=null,r<8||r>15?(t.inflateEnd(n),-2):(t.wbits=r,n.istate.blocks=new lm(n,1<<r),e(n),0)},t.inflate=function(n,r){let i,a;if(!n||!n.istate||!n.next_in)return-2;let o=n.istate;for(r=r==Qf?-5:0,i=-5;;)switch(o.mode){case dm:if(n.avail_in===0)return i;if(i=r,n.avail_in--,n.total_in++,((o.method=n.read_byte(n.next_in_index++))&15)!=um){o.mode=bn,n.msg="unknown compression method",o.marker=5;break}if((o.method>>4)+8>o.wbits){o.mode=bn,n.msg="invalid win size",o.marker=5;break}o.mode=$l;case $l:if(n.avail_in===0)return i;if(i=r,n.avail_in--,n.total_in++,a=n.read_byte(n.next_in_index++)&255,((o.method<<8)+a)%31!==0){o.mode=bn,n.msg="incorrect header check",o.marker=5;break}if(!(a&cm)){o.mode=wr;break}o.mode=Wl;case Wl:if(n.avail_in===0)return i;i=r,n.avail_in--,n.total_in++,o.need=(n.read_byte(n.next_in_index++)&255)<<24&4278190080,o.mode=Hl;case Hl:if(n.avail_in===0)return i;i=r,n.avail_in--,n.total_in++,o.need+=(n.read_byte(n.next_in_index++)&255)<<16&16711680,o.mode=jl;case jl:if(n.avail_in===0)return i;i=r,n.avail_in--,n.total_in++,o.need+=(n.read_byte(n.next_in_index++)&255)<<8&65280,o.mode=ql;case ql:return n.avail_in===0?i:(i=r,n.avail_in--,n.total_in++,o.need+=n.read_byte(n.next_in_index++)&255,o.mode=Fa,2);case Fa:return o.mode=bn,n.msg="need dictionary",o.marker=0,-2;case wr:if(i=o.blocks.proc(n,i),i==-3){o.mode=bn,o.marker=0;break}if(i==0&&(i=r),i!=1)return i;i=r,o.blocks.reset(n,o.was),o.mode=Kl;case Kl:return n.avail_in=0,1;case bn:return-3;default:return-2}},t.inflateSetDictionary=function(n,r,i){let a=0,o=i;if(!n||!n.istate||n.istate.mode!=Fa)return-2;let s=n.istate;return o>=1<<s.wbits&&(o=(1<<s.wbits)-1,a=i-o),s.blocks.set_dictionary(r,a,o),s.mode=wr,0},t.inflateSync=function(n){let r,i,a,o,s;if(!n||!n.istate)return-2;let l=n.istate;if(l.mode!=bn&&(l.mode=bn,l.marker=0),(r=n.avail_in)===0)return-5;for(i=n.next_in_index,a=l.marker;r!==0&&a<4;)n.read_byte(i)==pm[a]?a++:n.read_byte(i)!==0?a=0:a=4-a,i++,r--;return n.total_in+=i-n.next_in_index,n.next_in_index=i,n.avail_in=r,l.marker=a,a!=4?-3:(o=n.total_in,s=n.total_out,e(n),n.total_in=o,n.total_out=s,l.mode=wr,0)},t.inflateSyncPoint=function(n){return!n||!n.istate||!n.istate.blocks?-2:n.istate.blocks.sync_point()}}function bc(){}bc.prototype={inflateInit(t){let e=this;return e.istate=new hm,t||(t=15),e.istate.inflateInit(e,t)},inflate(t){let e=this;return e.istate?e.istate.inflate(e,t):-2},inflateEnd(){let t=this;if(!t.istate)return-2;let e=t.istate.inflateEnd(t);return t.istate=null,e},inflateSync(){let t=this;return t.istate?t.istate.inflateSync(t):-2},inflateSetDictionary(t,e){let n=this;return n.istate?n.istate.inflateSetDictionary(n,t,e):-2},read_byte(t){return this.next_in[t]},read_buf(t,e){return this.next_in.subarray(t,t+e)}};function fm(t){let e=this,n=new bc,r=t&&t.chunkSize?Math.floor(t.chunkSize*2):128*1024,i=Zf,a=new Uint8Array(r),o=!1;n.inflateInit(),n.next_out=a,e.append=function(s,l){let c=[],u,p,d=0,h=0,b=0;if(s.length!==0){n.next_in_index=0,n.next_in=s,n.avail_in=s.length;do{if(n.next_out_index=0,n.avail_out=r,n.avail_in===0&&!o&&(n.next_in_index=0,o=!0),u=n.inflate(i),o&&u===-5){if(n.avail_in!==0)throw new Error("inflating: bad input")}else if(u!==0&&u!==1)throw new Error("inflating: "+n.msg);if((o||u===1)&&n.avail_in===s.length)throw new Error("inflating: bad input");n.next_out_index&&(n.next_out_index===r?c.push(new Uint8Array(a)):c.push(a.slice(0,n.next_out_index))),b+=n.next_out_index,l&&n.next_in_index>0&&n.next_in_index!=d&&(l(n.next_in_index),d=n.next_in_index)}while(n.avail_in>0||n.avail_out===0);return c.length>1?(p=new Uint8Array(b),c.forEach(function(g){p.set(g,h),h+=g.length})):p=c[0]||new Uint8Array,p}},e.flush=function(){n.inflateEnd()}}var _i="/",Gl=new Date(2107,11,31),Vl=new Date(1980,0,1),Ue=void 0,Ai="undefined",yc="function",Xl=class{constructor(t){return class extends TransformStream{constructor(e,n){let r=new t(n);super({transform(i,a){a.enqueue(r.append(i))},flush(i){let a=r.flush();a&&i.enqueue(a)}})}}}},mm=64,wc=2;try{typeof navigator!=Ai&&navigator.hardwareConcurrency&&(wc=navigator.hardwareConcurrency)}catch{}var gm={chunkSize:512*1024,maxWorkers:wc,terminateWorkerTimeout:5e3,useWebWorkers:!0,useCompressionStream:!0,workerScripts:Ue,CompressionStreamNative:typeof CompressionStream!=Ai&&CompressionStream,DecompressionStreamNative:typeof DecompressionStream!=Ai&&DecompressionStream},xn=Object.assign({},gm);function no(){return xn}function vc(t){return Math.max(t.chunkSize,mm)}function Ni(t){let{baseURL:e,chunkSize:n,maxWorkers:r,terminateWorkerTimeout:i,useCompressionStream:a,useWebWorkers:o,Deflate:s,Inflate:l,CompressionStream:c,DecompressionStream:u,workerScripts:p}=t;if(yn("baseURL",e),yn("chunkSize",n),yn("maxWorkers",r),yn("terminateWorkerTimeout",i),yn("useCompressionStream",a),yn("useWebWorkers",o),s&&(xn.CompressionStream=new Xl(s)),l&&(xn.DecompressionStream=new Xl(l)),yn("CompressionStream",c),yn("DecompressionStream",u),p!==Ue){let{deflate:d,inflate:h}=p;if((d||h)&&(xn.workerScripts||(xn.workerScripts={})),d){if(!Array.isArray(d))throw new Error("workerScripts.deflate must be an array");xn.workerScripts.deflate=d}if(h){if(!Array.isArray(h))throw new Error("workerScripts.inflate must be an array");xn.workerScripts.inflate=h}}}function yn(t,e){e!==Ue&&(xn[t]=e)}function bm(){return"application/octet-stream"}var xc=[];for(let t=0;t<256;t++){let e=t;for(let n=0;n<8;n++)e&1?e=e>>>1^3988292384:e=e>>>1;xc[t]=e}var Ei=class{constructor(t){this.crc=t||-1}append(t){let e=this.crc|0;for(let n=0,r=t.length|0;n<r;n++)e=e>>>8^xc[(e^t[n])&255];this.crc=e}get(){return~this.crc}},Tc=class extends TransformStream{constructor(){let t=new Ei;super({transform(e){t.append(e)},flush(e){let n=new Uint8Array(4);new DataView(n.buffer).setUint32(0,t.get()),e.enqueue(n)}})}};function qa(t){if(typeof TextEncoder>"u"){t=unescape(encodeURIComponent(t));let e=new Uint8Array(t.length);for(let n=0;n<e.length;n++)e[n]=t.charCodeAt(n);return e}else return new TextEncoder().encode(t)}var lt={concat(t,e){if(t.length===0||e.length===0)return t.concat(e);let n=t[t.length-1],r=lt.getPartial(n);return r===32?t.concat(e):lt._shiftRight(e,r,n|0,t.slice(0,t.length-1))},bitLength(t){let e=t.length;if(e===0)return 0;let n=t[e-1];return(e-1)*32+lt.getPartial(n)},clamp(t,e){if(t.length*32<e)return t;t=t.slice(0,Math.ceil(e/32));let n=t.length;return e=e&31,n>0&&e&&(t[n-1]=lt.partial(e,t[n-1]&2147483648>>e-1,1)),t},partial(t,e,n){return t===32?e:(n?e|0:e<<32-t)+t*1099511627776},getPartial(t){return Math.round(t/1099511627776)||32},_shiftRight(t,e,n,r){for(r===void 0&&(r=[]);e>=32;e-=32)r.push(n),n=0;if(e===0)return r.concat(t);for(let o=0;o<t.length;o++)r.push(n|t[o]>>>e),n=t[o]<<32-e;let i=t.length?t[t.length-1]:0,a=lt.getPartial(i);return r.push(lt.partial(e+a&31,e+a>32?n:r.pop(),1)),r}},Ci={bytes:{fromBits(t){let e=lt.bitLength(t)/8,n=new Uint8Array(e),r;for(let i=0;i<e;i++)i&3||(r=t[i/4]),n[i]=r>>>24,r<<=8;return n},toBits(t){let e=[],n,r=0;for(n=0;n<t.length;n++)r=r<<8|t[n],(n&3)===3&&(e.push(r),r=0);return n&3&&e.push(lt.partial(8*(n&3),r)),e}}},_c={};_c.sha1=class{constructor(t){let e=this;e.blockSize=512,e._init=[1732584193,4023233417,2562383102,271733878,3285377520],e._key=[1518500249,1859775393,2400959708,3395469782],t?(e._h=t._h.slice(0),e._buffer=t._buffer.slice(0),e._length=t._length):e.reset()}reset(){let t=this;return t._h=t._init.slice(0),t._buffer=[],t._length=0,t}update(t){let e=this;typeof t=="string"&&(t=Ci.utf8String.toBits(t));let n=e._buffer=lt.concat(e._buffer,t),r=e._length,i=e._length=r+lt.bitLength(t);if(i>9007199254740991)throw new Error("Cannot hash more than 2^53 - 1 bits");let a=new Uint32Array(n),o=0;for(let s=e.blockSize+r-(e.blockSize+r&e.blockSize-1);s<=i;s+=e.blockSize)e._block(a.subarray(16*o,16*(o+1))),o+=1;return n.splice(0,16*o),e}finalize(){let t=this,e=t._buffer,n=t._h;e=lt.concat(e,[lt.partial(1,1)]);for(let r=e.length+2;r&15;r++)e.push(0);for(e.push(Math.floor(t._length/4294967296)),e.push(t._length|0);e.length;)t._block(e.splice(0,16));return t.reset(),n}_f(t,e,n,r){if(t<=19)return e&n|~e&r;if(t<=39)return e^n^r;if(t<=59)return e&n|e&r|n&r;if(t<=79)return e^n^r}_S(t,e){return e<<t|e>>>32-t}_block(t){let e=this,n=e._h,r=Array(80);for(let c=0;c<16;c++)r[c]=t[c];let i=n[0],a=n[1],o=n[2],s=n[3],l=n[4];for(let c=0;c<=79;c++){c>=16&&(r[c]=e._S(1,r[c-3]^r[c-8]^r[c-14]^r[c-16]));let u=e._S(5,i)+e._f(c,a,o,s)+l+r[c]+e._key[Math.floor(c/20)]|0;l=s,s=o,o=e._S(30,a),a=i,i=u}n[0]=n[0]+i|0,n[1]=n[1]+a|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[4]+l|0}};var Sc={};Sc.aes=class{constructor(t){let e=this;e._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],e._tables[0][0][0]||e._precompute();let n=e._tables[0][4],r=e._tables[1],i=t.length,a,o,s,l=1;if(i!==4&&i!==6&&i!==8)throw new Error("invalid aes key size");for(e._key=[o=t.slice(0),s=[]],a=i;a<4*i+28;a++){let c=o[a-1];(a%i===0||i===8&&a%i===4)&&(c=n[c>>>24]<<24^n[c>>16&255]<<16^n[c>>8&255]<<8^n[c&255],a%i===0&&(c=c<<8^c>>>24^l<<24,l=l<<1^(l>>7)*283)),o[a]=o[a-i]^c}for(let c=0;a;c++,a--){let u=o[c&3?a:a-4];a<=4||c<4?s[c]=u:s[c]=r[0][n[u>>>24]]^r[1][n[u>>16&255]]^r[2][n[u>>8&255]]^r[3][n[u&255]]}}encrypt(t){return this._crypt(t,0)}decrypt(t){return this._crypt(t,1)}_precompute(){let t=this._tables[0],e=this._tables[1],n=t[4],r=e[4],i=[],a=[],o,s,l,c;for(let u=0;u<256;u++)a[(i[u]=u<<1^(u>>7)*283)^u]=u;for(let u=o=0;!n[u];u^=s||1,o=a[o]||1){let p=o^o<<1^o<<2^o<<3^o<<4;p=p>>8^p&255^99,n[u]=p,r[p]=u,c=i[l=i[s=i[u]]];let d=c*16843009^l*65537^s*257^u*16843008,h=i[p]*257^p*16843008;for(let b=0;b<4;b++)t[b][u]=h=h<<24^h>>>8,e[b][p]=d=d<<24^d>>>8}for(let u=0;u<5;u++)t[u]=t[u].slice(0),e[u]=e[u].slice(0)}_crypt(t,e){if(t.length!==4)throw new Error("invalid aes block size");let n=this._key[e],r=n.length/4-2,i=[0,0,0,0],a=this._tables[e],o=a[0],s=a[1],l=a[2],c=a[3],u=a[4],p=t[0]^n[0],d=t[e?3:1]^n[1],h=t[2]^n[2],b=t[e?1:3]^n[3],g=4,m,f,y;for(let w=0;w<r;w++)m=o[p>>>24]^s[d>>16&255]^l[h>>8&255]^c[b&255]^n[g],f=o[d>>>24]^s[h>>16&255]^l[b>>8&255]^c[p&255]^n[g+1],y=o[h>>>24]^s[b>>16&255]^l[p>>8&255]^c[d&255]^n[g+2],b=o[b>>>24]^s[p>>16&255]^l[d>>8&255]^c[h&255]^n[g+3],g+=4,p=m,d=f,h=y;for(let w=0;w<4;w++)i[e?3&-w:w]=u[p>>>24]<<24^u[d>>16&255]<<16^u[h>>8&255]<<8^u[b&255]^n[g++],m=p,p=d,d=h,h=b,b=m;return i}};var ym={getRandomValues(t){let e=new Uint32Array(t.buffer),n=r=>{let i=987654321,a=4294967295;return function(){return i=36969*(i&65535)+(i>>16)&a,r=18e3*(r&65535)+(r>>16)&a,(((i<<16)+r&a)/4294967296+.5)*(Math.random()>.5?1:-1)}};for(let r=0,i;r<t.length;r+=4){let a=n((i||Math.random())*4294967296);i=a()*987654071,e[r/4]=a()*4294967296|0}return t}},kc={};kc.ctrGladman=class{constructor(t,e){this._prf=t,this._initIv=e,this._iv=e}reset(){this._iv=this._initIv}update(t){return this.calculate(this._prf,t,this._iv)}incWord(t){if((t>>24&255)===255){let e=t>>16&255,n=t>>8&255,r=t&255;e===255?(e=0,n===255?(n=0,r===255?r=0:++r):++n):++e,t=0,t+=e<<16,t+=n<<8,t+=r}else t+=1<<24;return t}incCounter(t){(t[0]=this.incWord(t[0]))===0&&(t[1]=this.incWord(t[1]))}calculate(t,e,n){let r;if(!(r=e.length))return[];let i=lt.bitLength(e);for(let a=0;a<r;a+=4){this.incCounter(n);let o=t.encrypt(n);e[a]^=o[0],e[a+1]^=o[1],e[a+2]^=o[2],e[a+3]^=o[3]}return lt.clamp(e,i)}};var Nn={importKey(t){return new Nn.hmacSha1(Ci.bytes.toBits(t))},pbkdf2(t,e,n,r){if(n=n||1e4,r<0||n<0)throw new Error("invalid params to pbkdf2");let i=(r>>5)+1<<2,a,o,s,l,c,u=new ArrayBuffer(i),p=new DataView(u),d=0,h=lt;for(e=Ci.bytes.toBits(e),c=1;d<(i||1);c++){for(a=o=t.encrypt(h.concat(e,[c])),s=1;s<n;s++)for(o=t.encrypt(o),l=0;l<o.length;l++)a[l]^=o[l];for(s=0;d<(i||1)&&s<a.length;s++)p.setInt32(d,a[s]),d+=4}return u.slice(0,r/8)}};Nn.hmacSha1=class{constructor(t){let e=this,n=e._hash=_c.sha1,r=[[],[]];e._baseHash=[new n,new n];let i=e._baseHash[0].blockSize/32;t.length>i&&(t=new n().update(t).finalize());for(let a=0;a<i;a++)r[0][a]=t[a]^909522486,r[1][a]=t[a]^1549556828;e._baseHash[0].update(r[0]),e._baseHash[1].update(r[1]),e._resultHash=new n(e._baseHash[0])}reset(){let t=this;t._resultHash=new t._hash(t._baseHash[0]),t._updated=!1}update(t){let e=this;e._updated=!0,e._resultHash.update(t)}digest(){let t=this,e=t._resultHash.finalize(),n=new t._hash(t._baseHash[1]).update(e).finalize();return t.reset(),n}encrypt(t){if(this._updated)throw new Error("encrypt on already updated hmac called!");return this.update(t),this.digest(t)}};var wm=typeof crypto<"u"&&typeof crypto.getRandomValues=="function",ro="Invalid password",io="Invalid signature";function Ac(t){return wm?crypto.getRandomValues(t):ym.getRandomValues(t)}var Wn=16,vm="raw",Ec={name:"PBKDF2"},xm={name:"HMAC"},Tm="SHA-1",_m=Object.assign({hash:xm},Ec),Ka=Object.assign({iterations:1e3,hash:{name:Tm}},Ec),Sm=["deriveBits"],xr=[8,12,16],vr=[16,24,32],wn=10,km=[0,0,0,0],Cc="undefined",Lc="function",Pi=typeof crypto!=Cc,kr=Pi&&crypto.subtle,Dc=Pi&&typeof kr!=Cc,Vt=Ci.bytes,Am=Sc.aes,Em=kc.ctrGladman,Cm=Nn.hmacSha1,Yl=Pi&&Dc&&typeof kr.importKey==Lc,Zl=Pi&&Dc&&typeof kr.deriveBits==Lc,Lm=class extends TransformStream{constructor({password:t,signed:e,encryptionStrength:n}){super({start(){Object.assign(this,{ready:new Promise(r=>this.resolveReady=r),password:t,signed:e,strength:n-1,pending:new Uint8Array})},async transform(r,i){let a=this,{password:o,strength:s,resolveReady:l,ready:c}=a;o?(await Rm(a,s,o,Et(r,0,xr[s]+2)),r=Et(r,xr[s]+2),l()):await c;let u=new Uint8Array(r.length-wn-(r.length-wn)%Wn);i.enqueue(Rc(a,r,u,0,wn,!0))},async flush(r){let{signed:i,ctr:a,hmac:o,pending:s,ready:l}=this;await l;let c=Et(s,0,s.length-wn),u=Et(s,s.length-wn),p=new Uint8Array;if(c.length){let d=_r(Vt,c);o.update(d);let h=a.update(d);p=Tr(Vt,h)}if(i){let d=Et(Tr(Vt,o.digest()),0,wn);for(let h=0;h<wn;h++)if(d[h]!=u[h])throw new Error(io)}r.enqueue(p)}})}},Dm=class extends TransformStream{constructor({password:t,encryptionStrength:e}){let n;super({start(){Object.assign(this,{ready:new Promise(r=>this.resolveReady=r),password:t,strength:e-1,pending:new Uint8Array})},async transform(r,i){let a=this,{password:o,strength:s,resolveReady:l,ready:c}=a,u=new Uint8Array;o?(u=await Om(a,s,o),l()):await c;let p=new Uint8Array(u.length+r.length-r.length%Wn);p.set(u,0),i.enqueue(Rc(a,r,p,u.length,0))},async flush(r){let{ctr:i,hmac:a,pending:o,ready:s}=this;await s;let l=new Uint8Array;if(o.length){let c=i.update(_r(Vt,o));a.update(c),l=Tr(Vt,c)}n.signature=Tr(Vt,a.digest()).slice(0,wn),r.enqueue(ao(l,n.signature))}}),n=this}};function Rc(t,e,n,r,i,a){let{ctr:o,hmac:s,pending:l}=t,c=e.length-i;l.length&&(e=ao(l,e),n=Mm(n,c-c%Wn));let u;for(u=0;u<=c-Wn;u+=Wn){let p=_r(Vt,Et(e,u,u+Wn));a&&s.update(p);let d=o.update(p);a||s.update(d),n.set(Tr(Vt,d),u+r)}return t.pending=Et(e,u),n}async function Rm(t,e,n,r){let i=await Oc(t,e,n,Et(r,0,xr[e])),a=Et(r,xr[e]);if(i[0]!=a[0]||i[1]!=a[1])throw new Error(ro)}async function Om(t,e,n){let r=Ac(new Uint8Array(xr[e])),i=await Oc(t,e,n,r);return ao(r,i)}async function Oc(t,e,n,r){t.password=null;let i=qa(n),a=await Nm(vm,i,_m,!1,Sm),o=await Pm(Object.assign({salt:r},Ka),a,8*(vr[e]*2+2)),s=new Uint8Array(o),l=_r(Vt,Et(s,0,vr[e])),c=_r(Vt,Et(s,vr[e],vr[e]*2)),u=Et(s,vr[e]*2);return Object.assign(t,{keys:{key:l,authentication:c,passwordVerification:u},ctr:new Em(new Am(l),Array.from(km)),hmac:new Cm(c)}),u}async function Nm(t,e,n,r,i){if(Yl)try{return await kr.importKey(t,e,n,r,i)}catch{return Yl=!1,Nn.importKey(e)}else return Nn.importKey(e)}async function Pm(t,e,n){if(Zl)try{return await kr.deriveBits(t,e,n)}catch{return Zl=!1,Nn.pbkdf2(e,t.salt,Ka.iterations,n)}else return Nn.pbkdf2(e,t.salt,Ka.iterations,n)}function ao(t,e){let n=t;return t.length+e.length&&(n=new Uint8Array(t.length+e.length),n.set(t,0),n.set(e,t.length)),n}function Mm(t,e){if(e&&e>t.length){let n=t;t=new Uint8Array(e),t.set(n,0)}return t}function Et(t,e,n){return t.subarray(e,n)}function Tr(t,e){return t.fromBits(e)}function _r(t,e){return t.toBits(e)}var Hn=12,Im=class extends TransformStream{constructor({password:t,passwordVerification:e}){super({start(){Object.assign(this,{password:t,passwordVerification:e}),Nc(this,t)},transform(n,r){let i=this;if(i.password){let a=Ql(i,n.subarray(0,Hn));if(i.password=null,a[Hn-1]!=i.passwordVerification)throw new Error(ro);n=n.subarray(Hn)}r.enqueue(Ql(i,n))}})}},Fm=class extends TransformStream{constructor({password:t,passwordVerification:e}){super({start(){Object.assign(this,{password:t,passwordVerification:e}),Nc(this,t)},transform(n,r){let i=this,a,o;if(i.password){i.password=null;let s=Ac(new Uint8Array(Hn));s[Hn-1]=i.passwordVerification,a=new Uint8Array(n.length+s.length),a.set(Jl(i,s),0),o=Hn}else a=new Uint8Array(n.length),o=0;a.set(Jl(i,n),o),r.enqueue(a)}})}};function Ql(t,e){let n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=Pc(t)^e[r],oo(t,n[r]);return n}function Jl(t,e){let n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=Pc(t)^e[r],oo(t,e[r]);return n}function Nc(t,e){let n=[305419896,591751049,878082192];Object.assign(t,{keys:n,crcKey0:new Ei(n[0]),crcKey2:new Ei(n[2])});for(let r=0;r<e.length;r++)oo(t,e.charCodeAt(r))}function oo(t,e){let[n,r,i]=t.keys;t.crcKey0.append([e]),n=~t.crcKey0.get(),r=ec(Math.imul(ec(r+Mc(n)),134775813)+1),t.crcKey2.append([r>>>24]),i=~t.crcKey2.get(),t.keys=[n,r,i]}function Pc(t){let e=t.keys[2]|2;return Mc(Math.imul(e,e^1)>>>8)}function Mc(t){return t&255}function ec(t){return t&4294967295}var tc="deflate-raw",Bm=class extends TransformStream{constructor(t,{chunkSize:e,CompressionStream:n,CompressionStreamNative:r}){super({});let{compressed:i,encrypted:a,useCompressionStream:o,zipCrypto:s,signed:l,level:c}=t,u=this,p,d,h=Ic(super.readable);(!a||s)&&l&&([h,p]=h.tee(),p=Xt(p,new Tc)),i&&(h=Bc(h,o,{level:c,chunkSize:e},r,n)),a&&(s?h=Xt(h,new Fm(t)):(d=new Dm(t),h=Xt(h,d))),Fc(u,h,async()=>{let b;a&&!s&&(b=d.signature),(!a||s)&&l&&(b=await p.getReader().read(),b=new DataView(b.value.buffer).getUint32(0)),u.signature=b})}},zm=class extends TransformStream{constructor(t,{chunkSize:e,DecompressionStream:n,DecompressionStreamNative:r}){super({});let{zipCrypto:i,encrypted:a,signed:o,signature:s,compressed:l,useCompressionStream:c}=t,u,p,d=Ic(super.readable);a&&(i?d=Xt(d,new Im(t)):(p=new Lm(t),d=Xt(d,p))),l&&(d=Bc(d,c,{chunkSize:e},r,n)),(!a||i)&&o&&([d,u]=d.tee(),u=Xt(u,new Tc)),Fc(this,d,async()=>{if((!a||i)&&o){let h=await u.getReader().read(),b=new DataView(h.value.buffer);if(s!=b.getUint32(0,!1))throw new Error(io)}})}};function Ic(t){return Xt(t,new TransformStream({transform(e,n){e&&e.length&&n.enqueue(e)}}))}function Fc(t,e,n){e=Xt(e,new TransformStream({flush:n})),Object.defineProperty(t,"readable",{get(){return e}})}function Bc(t,e,n,r,i){try{let a=e&&r?r:i;t=Xt(t,new a(tc,n))}catch(a){if(e)t=Xt(t,new i(tc,n));else throw a}return t}function Xt(t,e){return t.pipeThrough(e)}var Um="message",$m="start",Wm="pull",nc="data",Hm="ack",jm="close",zc="deflate",Uc="inflate",qm=class extends TransformStream{constructor(t,e){super({});let n=this,{codecType:r}=t,i;r.startsWith(zc)?i=Bm:r.startsWith(Uc)&&(i=zm);let a=0,o=new i(t,e),s=super.readable,l=new TransformStream({transform(c,u){c&&c.length&&(a+=c.length,u.enqueue(c))},flush(){let{signature:c}=o;Object.assign(n,{signature:c,size:a})}});Object.defineProperty(n,"readable",{get(){return s.pipeThrough(o).pipeThrough(l)}})}},Km=typeof Worker!=Ai,Ba=class{constructor(t,{readable:e,writable:n},{options:r,config:i,streamOptions:a,useWebWorkers:o,transferStreams:s,scripts:l},c){let{signal:u}=a;return Object.assign(t,{busy:!0,readable:e.pipeThrough(new Gm(e,a,i),{signal:u}),writable:n,options:Object.assign({},r),scripts:l,transferStreams:s,terminate(){let{worker:p,busy:d}=t;p&&!d&&(p.terminate(),t.interface=null)},onTaskFinished(){t.busy=!1,c(t)}}),(o&&Km?Xm:Vm)(t,i)}},Gm=class extends TransformStream{constructor(t,{onstart:e,onprogress:n,size:r,onend:i},{chunkSize:a}){let o=0;super({start(){e&&za(e,r)},async transform(s,l){o+=s.length,n&&await za(n,o,r),l.enqueue(s)},flush(){t.size=o,i&&za(i,o)}},{highWaterMark:1,size:()=>a})}};async function za(t,...e){try{await t(...e)}catch{}}function Vm(t,e){return{run:()=>Ym(t,e)}}function Xm(t,{baseURL:e,chunkSize:n}){return t.interface||Object.assign(t,{worker:Jm(t.scripts[0],e,t),interface:{run:()=>Zm(t,{chunkSize:n})}}),t.interface}async function Ym({options:t,readable:e,writable:n,onTaskFinished:r},i){let a=new qm(t,i);try{await e.pipeThrough(a).pipeTo(n,{preventClose:!0,preventAbort:!0});let{signature:o,size:s}=a;return{signature:o,size:s}}finally{r()}}async function Zm(t,e){let n,r,i=new Promise((p,d)=>{n=p,r=d});Object.assign(t,{reader:null,writer:null,resolveResult:n,rejectResult:r,result:i});let{readable:a,options:o,scripts:s}=t,{writable:l,closed:c}=Qm(t.writable);Ga({type:$m,scripts:s.slice(1),options:o,config:e,readable:a,writable:l},t)||Object.assign(t,{reader:a.getReader(),writer:l.getWriter()});let u=await i;try{await l.close()}catch{}return await c,u}function Qm(t){let e=t.getWriter(),n,r=new Promise(i=>n=i);return{writable:new WritableStream({async write(i){await e.ready,await e.write(i)},close(){e.releaseLock(),n()},abort(i){return e.abort(i)}}),closed:r}}var rc=!0,ic=!0;function Jm(t,e,n){let r={type:"module"},i,a;typeof t==yc&&(t=t());try{i=new URL(t,e)}catch{i=t}if(rc)try{a=new Worker(i)}catch{rc=!1,a=new Worker(i,r)}else a=new Worker(i,r);return a.addEventListener(Um,o=>eg(o,n)),a}function Ga(t,{worker:e,writer:n,onTaskFinished:r,transferStreams:i}){try{let{value:a,readable:o,writable:s}=t,l=[];if(a){let{buffer:c,length:u}=a;u!=c.byteLength&&(a=new Uint8Array(a)),t.value=a.buffer,l.push(t.value)}if(i&&ic?(o&&l.push(o),s&&l.push(s)):t.readable=t.writable=null,l.length)try{return e.postMessage(t,l),!0}catch{ic=!1,t.readable=t.writable=null,e.postMessage(t)}else e.postMessage(t)}catch(a){throw n&&n.releaseLock(),r(),a}}async function eg({data:t},e){let{type:n,value:r,messageId:i,result:a,error:o}=t,{reader:s,writer:l,resolveResult:c,rejectResult:u,onTaskFinished:p}=e;try{if(o){let{message:h,stack:b,code:g,name:m}=o,f=new Error(h);Object.assign(f,{stack:b,code:g,name:m}),d(f)}else{if(n==Wm){let{value:h,done:b}=await s.read();Ga({type:nc,value:h,done:b,messageId:i},e)}n==nc&&(await l.ready,await l.write(new Uint8Array(r)),Ga({type:Hm,messageId:i},e)),n==jm&&d(null,a)}}catch(h){d(h)}function d(h,b){h?u(h):c(b),l&&l.releaseLock(),p()}}var vn=[],Ua=[],ac=0;async function $c(t,e){let{options:n,config:r}=e,{transferStreams:i,useWebWorkers:a,useCompressionStream:o,codecType:s,compressed:l,signed:c,encrypted:u}=n,{workerScripts:p,maxWorkers:d,terminateWorkerTimeout:h}=r;e.transferStreams=i||i===Ue;let b=!l&&!c&&!u&&!e.transferStreams;e.useWebWorkers=!b&&(a||a===Ue&&r.useWebWorkers),e.scripts=e.useWebWorkers&&p?p[s]:[],n.useCompressionStream=o||o===Ue&&r.useCompressionStream;let g,m=vn.find(y=>!y.busy);if(m)Va(m),g=new Ba(m,t,e,f);else if(vn.length<d){let y={indexWorker:ac};ac++,vn.push(y),g=new Ba(y,t,e,f)}else g=await new Promise(y=>Ua.push({resolve:y,stream:t,workerOptions:e}));return g.run();function f(y){if(Ua.length){let[{resolve:w,stream:E,workerOptions:_}]=Ua.splice(0,1);w(new Ba(y,E,_,f))}else y.worker?(Va(y),Number.isFinite(h)&&h>=0&&(y.terminateTimeout=setTimeout(()=>{vn=vn.filter(w=>w!=y),y.terminate()},h))):vn=vn.filter(w=>w!=y)}}function Va(t){let{terminateTimeout:e}=t;e&&(clearTimeout(e),t.terminateTimeout=null)}function tg(){vn.forEach(t=>{Va(t),t.terminate()})}var Wc="HTTP error ",Ar="HTTP Range not supported",Hc="Writer iterator completed too soon",ng="text/plain",rg="Content-Length",ig="Content-Range",ag="Accept-Ranges",og="Range",sg="Content-Type",lg="HEAD",so="GET",jc="bytes",cg=64*1024,lo="writable",Mi=class{constructor(){this.size=0}init(){this.initialized=!0}},Tn=class extends Mi{get readable(){let t=this,{chunkSize:e=cg}=t,n=new ReadableStream({start(){this.chunkOffset=0},async pull(r){let{offset:i=0,size:a,diskNumberStart:o}=n,{chunkOffset:s}=this;r.enqueue(await tt(t,i+s,Math.min(e,a-s),o)),s+e>a?r.close():this.chunkOffset+=e}});return n}},co=class extends Mi{constructor(){super();let t=this,e=new WritableStream({write(n){return t.writeUint8Array(n)}});Object.defineProperty(t,lo,{get(){return e}})}writeUint8Array(){}},ug=class extends Tn{constructor(t){super();let e=t.length;for(;t.charAt(e-1)=="=";)e--;let n=t.indexOf(",")+1;Object.assign(this,{dataURI:t,dataStart:n,size:Math.floor((e-n)*.75)})}readUint8Array(t,e){let{dataStart:n,dataURI:r}=this,i=new Uint8Array(e),a=Math.floor(t/3)*4,o=atob(r.substring(a+n,Math.ceil((t+e)/3)*4+n)),s=t-Math.floor(a/4)*3;for(let l=s;l<s+e;l++)i[l-s]=o.charCodeAt(l);return i}},dg=class extends co{constructor(t){super(),Object.assign(this,{data:"data:"+(t||"")+";base64,",pending:[]})}writeUint8Array(t){let e=this,n=0,r=e.pending,i=e.pending.length;for(e.pending="",n=0;n<Math.floor((i+t.length)/3)*3-i;n++)r+=String.fromCharCode(t[n]);for(;n<t.length;n++)e.pending+=String.fromCharCode(t[n]);r.length>2?e.data+=btoa(r):e.pending=r}getData(){return this.data+btoa(this.pending)}},uo=class extends Tn{constructor(t){super(),Object.assign(this,{blob:t,size:t.size})}async readUint8Array(t,e){let n=this,r=t+e,i=t||r<n.size?n.blob.slice(t,r):n.blob;return new Uint8Array(await i.arrayBuffer())}},po=class extends Mi{constructor(t){super();let e=this,n=new TransformStream,r=[];t&&r.push([sg,t]),Object.defineProperty(e,lo,{get(){return n.writable}}),e.blob=new Response(n.readable,{headers:r}).blob()}getData(){return this.blob}},pg=class extends uo{constructor(t){super(new Blob([t],{type:ng}))}},hg=class extends po{constructor(t){super(t),Object.assign(this,{encoding:t,utf8:!t||t.toLowerCase()=="utf-8"})}async getData(){let{encoding:t,utf8:e}=this,n=await super.getData();if(n.text&&e)return n.text();{let r=new FileReader;return new Promise((i,a)=>{Object.assign(r,{onload:({target:o})=>i(o.result),onerror:()=>a(r.error)}),r.readAsText(n,t)})}}},fg=class extends Tn{constructor(t,e){super(),qc(this,t,e)}async init(){await Kc(this,Xa,oc),super.init()}readUint8Array(t,e){return Gc(this,t,e,Xa,oc)}},mg=class extends Tn{constructor(t,e){super(),qc(this,t,e)}async init(){await Kc(this,Ya,sc),super.init()}readUint8Array(t,e){return Gc(this,t,e,Ya,sc)}};function qc(t,e,n){let{preventHeadRequest:r,useRangeHeader:i,forceRangeRequests:a}=n;n=Object.assign({},n),delete n.preventHeadRequest,delete n.useRangeHeader,delete n.forceRangeRequests,delete n.useXHR,Object.assign(t,{url:e,options:n,preventHeadRequest:r,useRangeHeader:i,forceRangeRequests:a})}async function Kc(t,e,n){let{url:r,useRangeHeader:i,forceRangeRequests:a}=t;if(wg(r)&&(i||a)){let{headers:o}=await e(so,t,Vc(t));if(!a&&o.get(ag)!=jc)throw new Error(Ar);{let s,l=o.get(ig);if(l){let c=l.trim().split(/\s*\/\s*/);if(c.length){let u=c[1];u&&u!="*"&&(s=Number(u))}}s===Ue?await lc(t,e,n):t.size=s}}else await lc(t,e,n)}async function Gc(t,e,n,r,i){let{useRangeHeader:a,forceRangeRequests:o,options:s}=t;if(a||o){let l=await r(so,t,Vc(t,e,n));if(l.status!=206)throw new Error(Ar);return new Uint8Array(await l.arrayBuffer())}else{let{data:l}=t;return l||await i(t,s),new Uint8Array(t.data.subarray(e,e+n))}}function Vc(t,e=0,n=1){return Object.assign({},ho(t),{[og]:jc+"="+e+"-"+(e+n-1)})}function ho({options:t}){let{headers:e}=t;if(e)return Symbol.iterator in e?Object.fromEntries(e):e}async function oc(t){await Xc(t,Xa)}async function sc(t){await Xc(t,Ya)}async function Xc(t,e){let n=await e(so,t,ho(t));t.data=new Uint8Array(await n.arrayBuffer()),t.size||(t.size=t.data.length)}async function lc(t,e,n){if(t.preventHeadRequest)await n(t,t.options);else{let r=(await e(lg,t,ho(t))).headers.get(rg);r?t.size=Number(r):await n(t,t.options)}}async function Xa(t,{options:e,url:n},r){let i=await fetch(n,Object.assign({},e,{method:t,headers:r}));if(i.status<400)return i;throw i.status==416?new Error(Ar):new Error(Wc+(i.statusText||i.status))}function Ya(t,{url:e},n){return new Promise((r,i)=>{let a=new XMLHttpRequest;if(a.addEventListener("load",()=>{if(a.status<400){let o=[];a.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach(s=>{let l=s.trim().split(/\s*:\s*/);l[0]=l[0].trim().replace(/^[a-z]|-[a-z]/g,c=>c.toUpperCase()),o.push(l)}),r({status:a.status,arrayBuffer:()=>a.response,headers:new Map(o)})}else i(a.status==416?new Error(Ar):new Error(Wc+(a.statusText||a.status)))},!1),a.addEventListener("error",o=>i(o.detail.error),!1),a.open(t,e),n)for(let o of Object.entries(n))a.setRequestHeader(o[0],o[1]);a.responseType="arraybuffer",a.send()})}var Yc=class extends Tn{constructor(t,e={}){super(),Object.assign(this,{url:t,reader:e.useXHR?new mg(t,e):new fg(t,e)})}set size(t){}get size(){return this.reader.size}async init(){await this.reader.init(),super.init()}readUint8Array(t,e){return this.reader.readUint8Array(t,e)}},gg=class extends Yc{constructor(t,e={}){e.useRangeHeader=!0,super(t,e)}},bg=class extends Tn{constructor(t){super(),Object.assign(this,{array:t,size:t.length})}readUint8Array(t,e){return this.array.slice(t,t+e)}},yg=class extends co{init(t=0){Object.assign(this,{offset:0,array:new Uint8Array(t)}),super.init()}writeUint8Array(t){let e=this;if(e.offset+t.length>e.array.length){let n=e.array;e.array=new Uint8Array(n.length+t.length),e.array.set(n)}e.array.set(t,e.offset),e.offset+=t.length}getData(){return this.array}},fo=class extends Tn{constructor(t){super(),this.readers=t}async init(){let t=this,{readers:e}=t;t.lastDiskNumber=0,await Promise.all(e.map(async n=>{await n.init(),t.size+=n.size})),super.init()}async readUint8Array(t,e,n=0){let r=this,{readers:i}=this,a,o=n;o==-1&&(o=i.length-1);let s=t;for(;s>=i[o].size;)s-=i[o].size,o++;let l=i[o],c=l.size;if(s+e<=c)a=await tt(l,s,e);else{let u=c-s;a=new Uint8Array(e),a.set(await tt(l,s,u)),a.set(await r.readUint8Array(t+u,e-u,n),u)}return r.lastDiskNumber=Math.max(o,r.lastDiskNumber),a}},Sr=class extends Mi{constructor(t,e=4294967295){super();let n=this;Object.assign(n,{diskNumber:0,diskOffset:0,size:0,maxSize:e,availableSize:e});let r,i,a,o=new WritableStream({async write(c){let{availableSize:u}=n;if(a)c.length>=u?(await s(c.slice(0,u)),await l(),n.diskOffset+=r.size,n.diskNumber++,a=null,await this.write(c.slice(u))):await s(c);else{let{value:p,done:d}=await t.next();if(d&&!p)throw new Error(Hc);r=p,r.size=0,r.maxSize&&(n.maxSize=r.maxSize),n.availableSize=n.maxSize,await rn(r),i=p.writable,a=i.getWriter(),await this.write(c)}},async close(){await a.ready,await l()}});Object.defineProperty(n,lo,{get(){return o}});async function s(c){let u=c.length;u&&(await a.ready,await a.write(c),r.size+=u,n.size+=u,n.availableSize-=u)}async function l(){i.size=r.size,await a.close()}}};function wg(t){let{baseURL:e}=no(),{protocol:n}=new URL(t,e);return n=="http:"||n=="https:"}async function rn(t,e){t.init&&!t.initialized&&await t.init(e)}function mo(t){return Array.isArray(t)&&(t=new fo(t)),t instanceof ReadableStream&&(t={readable:t}),t}function go(t){t.writable===Ue&&typeof t.next==yc&&(t=new Sr(t)),t instanceof WritableStream&&(t={writable:t});let{writable:e}=t;return e.size===Ue&&(e.size=0),t instanceof Sr||Object.assign(t,{diskNumber:0,diskOffset:0,availableSize:1/0,maxSize:1/0}),t}function tt(t,e,n,r){return t.readUint8Array(e,n,r)}var vg=fo,xg=Sr,Zc="\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0 ".split(""),Tg=Zc.length==256;function _g(t){if(Tg){let e="";for(let n=0;n<t.length;n++)e+=Zc[t[n]];return e}else return new TextDecoder().decode(t)}function Za(t,e){return e&&e.trim().toLowerCase()=="cp437"?_g(t):new TextDecoder(e).decode(t)}var Qc="filename",Jc="rawFilename",eu="comment",tu="rawComment",nu="uncompressedSize",ru="compressedSize",iu="offset",Qa="diskNumberStart",bo="lastModDate",au="rawLastModDate",yo="lastAccessDate",Sg="rawLastAccessDate",wo="creationDate",kg="rawCreationDate",ou="internalFileAttribute",su="externalFileAttribute",lu="msDosCompatible",cu="zip64",Ag=[Qc,Jc,ru,nu,bo,au,eu,tu,yo,wo,iu,Qa,Qa,ou,su,lu,cu,"directory","bitFlag","encrypted","signature","filenameUTF8","commentUTF8","compressionMethod","version","versionMadeBy","extraField","rawExtraField","extraFieldZip64","extraFieldUnicodePath","extraFieldUnicodeComment","extraFieldAES","extraFieldNTFS","extraFieldExtendedTimestamp"],Li=class{constructor(t){Ag.forEach(e=>this[e]=t[e])}},Si="File format is not recognized",uu="End of central directory not found",du="End of Zip64 central directory not found",pu="End of Zip64 central directory locator not found",hu="Central directory header not found",fu="Local file header not found",mu="Zip64 extra field not found",gu="File contains encrypted entry",bu="Encryption method not supported",Ja="Compression method not supported",eo="Split zip file",cc="utf-8",uc="cp437",Eg=[[nu,4294967295],[ru,4294967295],[iu,4294967295],[Qa,65535]],Cg={65535:{getValue:Ie,bytes:4},4294967295:{getValue:ki,bytes:8}},Lg=class{constructor(t,e={}){Object.assign(this,{reader:mo(t),options:e,config:no()})}async*getEntriesGenerator(t={}){let e=this,{reader:n}=e,{config:r}=e;if(await rn(n),(n.size===Ue||!n.readUint8Array)&&(n=new uo(await new Response(n.readable).blob()),await rn(n)),n.size<22)throw new Error(Si);n.chunkSize=vc(r);let i=await Mg(n,101010256,n.size,22,65535*16);if(!i){let x=await tt(n,0,4),S=Ze(x);throw Ie(S)==134695760?new Error(eo):new Error(uu)}let a=Ze(i),o=Ie(a,12),s=Ie(a,16),l=i.offset,c=Ke(a,20),u=l+22+c,p=Ke(a,4),d=n.lastDiskNumber||0,h=Ke(a,6),b=Ke(a,8),g=0,m=0;if(s==4294967295||o==4294967295||b==65535||h==65535){let x=await tt(n,i.offset-20,20),S=Ze(x);if(Ie(S,0)!=117853008)throw new Error(du);s=ki(S,8);let k=await tt(n,s,56,-1),C=Ze(k),N=i.offset-20-56;if(Ie(C,0)!=101075792&&s!=N){let O=s;s=N,g=s-O,k=await tt(n,s,56,-1),C=Ze(k)}if(Ie(C,0)!=101075792)throw new Error(pu);p==65535&&(p=Ie(C,16)),h==65535&&(h=Ie(C,20)),b==65535&&(b=ki(C,32)),o==4294967295&&(o=ki(C,40)),s-=o}if(d!=p)throw new Error(eo);if(s<0||s>=n.size)throw new Error(Si);let f=0,y=await tt(n,s,o,h),w=Ze(y);if(o){let x=i.offset-o;if(Ie(w,f)!=33639248&&s!=x){let S=s;s=x,g=s-S,y=await tt(n,s,o,h),w=Ze(y)}}if(s<0||s>=n.size)throw new Error(Si);let E=Bt(e,t,"filenameEncoding"),_=Bt(e,t,"commentEncoding");for(let x=0;x<b;x++){let S=new Dg(n,r,e.options);if(Ie(w,f)!=33639248)throw new Error(hu);yu(S,w,f+6);let k=!!S.bitFlag.languageEncodingFlag,C=f+46,N=C+S.filenameLength,O=N+S.extraFieldLength,B=Ke(w,f+4),P=(B&0)==0,U=y.subarray(C,N),z=Ke(w,f+32),j=O+z,ne=y.subarray(O,j),K=k,ee=k,L=P&&(jn(w,f+38)&16)==16,M=Ie(w,f+42)+g;Object.assign(S,{versionMadeBy:B,msDosCompatible:P,compressedSize:0,uncompressedSize:0,commentLength:z,directory:L,offset:M,diskNumberStart:Ke(w,f+34),internalFileAttribute:Ke(w,f+36),externalFileAttribute:Ie(w,f+38),rawFilename:U,filenameUTF8:K,commentUTF8:ee,rawExtraField:y.subarray(N,O)});let[H,G]=await Promise.all([Za(U,K?cc:E||uc),Za(ne,ee?cc:_||uc)]);Object.assign(S,{rawComment:ne,filename:H,comment:G,directory:L||H.endsWith(_i)}),m=Math.max(M,m),await wu(S,S,w,f+6);let X=new Li(S);X.getData=(pe,he)=>S.getData(pe,X,he),f=j;let{onprogress:ue}=t;if(ue)try{await ue(x+1,b,new Li(S))}catch{}yield X}let T=Bt(e,t,"extractPrependedData"),v=Bt(e,t,"extractAppendedData");return T&&(e.prependedData=m>0?await tt(n,0,m):new Uint8Array),e.comment=c?await tt(n,l+22,c):new Uint8Array,v&&(e.appendedData=u<n.size?await tt(n,u,n.size-u):new Uint8Array),!0}async getEntries(t={}){let e=[];for await(let n of this.getEntriesGenerator(t))e.push(n);return e}async close(){}},Dg=class{constructor(t,e,n){Object.assign(this,{reader:t,config:e,options:n})}async getData(t,e,n={}){let r=this,{reader:i,offset:a,diskNumberStart:o,extraFieldAES:s,compressionMethod:l,config:c,bitFlag:u,signature:p,rawLastModDate:d,uncompressedSize:h,compressedSize:b}=r,g=r.localDirectory={},m=await tt(i,a,30,o),f=Ze(m),y=Bt(r,n,"password");if(y=y&&y.length&&y,s&&s.originalCompressionMethod!=99)throw new Error(Ja);if(l!=0&&l!=8)throw new Error(Ja);if(Ie(f,0)!=67324752)throw new Error(fu);yu(g,f,4),g.rawExtraField=g.extraFieldLength?await tt(i,a+30+g.filenameLength,g.extraFieldLength,o):new Uint8Array,await wu(r,g,f,4),Object.assign(e,{lastAccessDate:g.lastAccessDate,creationDate:g.creationDate});let w=r.encrypted&&g.encrypted,E=w&&!s;if(w){if(!E&&s.strength===Ue)throw new Error(bu);if(!y)throw new Error(gu)}let _=a+30+g.filenameLength+g.extraFieldLength,T=i.readable;T.diskNumberStart=o,T.offset=_;let v=T.size=b,x=Bt(r,n,"signal");t=go(t),await rn(t,h);let{writable:S}=t,{onstart:k,onprogress:C,onend:N}=n,O={options:{codecType:Uc,password:y,zipCrypto:E,encryptionStrength:s&&s.strength,signed:Bt(r,n,"checkSignature"),passwordVerification:E&&(u.dataDescriptor?d>>>8&255:p>>>24&255),signature:p,compressed:l!=0,encrypted:w,useWebWorkers:Bt(r,n,"useWebWorkers"),useCompressionStream:Bt(r,n,"useCompressionStream"),transferStreams:Bt(r,n,"transferStreams")},config:c,streamOptions:{signal:x,size:v,onstart:k,onprogress:C,onend:N}};return S.size+=(await $c({readable:T,writable:S},O)).size,Bt(r,n,"preventClose")||await S.close(),t.getData?t.getData():S}};function yu(t,e,n){let r=t.rawBitFlag=Ke(e,n+2),i=(r&1)==1,a=Ie(e,n+6);Object.assign(t,{encrypted:i,version:Ke(e,n),bitFlag:{level:(r&6)>>1,dataDescriptor:(r&8)==8,languageEncodingFlag:(r&2048)==2048},rawLastModDate:a,lastModDate:Ig(a),filenameLength:Ke(e,n+22),extraFieldLength:Ke(e,n+24)})}async function wu(t,e,n,r){let{rawExtraField:i}=e,a=e.extraField=new Map,o=Ze(new Uint8Array(i)),s=0;try{for(;s<i.length;){let g=Ke(o,s),m=Ke(o,s+2);a.set(g,{type:g,data:i.slice(s+4,s+4+m)}),s+=4+m}}catch{}let l=Ke(n,r+4);Object.assign(e,{signature:Ie(n,r+10),uncompressedSize:Ie(n,r+18),compressedSize:Ie(n,r+14)});let c=a.get(1);c&&(Rg(c,e),e.extraFieldZip64=c);let u=a.get(28789);u&&(await dc(u,Qc,Jc,e,t),e.extraFieldUnicodePath=u);let p=a.get(25461);p&&(await dc(p,eu,tu,e,t),e.extraFieldUnicodeComment=p);let d=a.get(39169);d?(Og(d,e,l),e.extraFieldAES=d):e.compressionMethod=l;let h=a.get(10);h&&(Ng(h,e),e.extraFieldNTFS=h);let b=a.get(21589);b&&(Pg(b,e),e.extraFieldExtendedTimestamp=b)}function Rg(t,e){e.zip64=!0;let n=Ze(t.data),r=Eg.filter(([i,a])=>e[i]==a);for(let i=0,a=0;i<r.length;i++){let[o,s]=r[i];if(e[o]==s){let l=Cg[s];e[o]=t[o]=l.getValue(n,a),a+=l.bytes}else if(t[o])throw new Error(mu)}}async function dc(t,e,n,r,i){let a=Ze(t.data),o=new Ei;o.append(i[n]);let s=Ze(new Uint8Array(4));s.setUint32(0,o.get(),!0),Object.assign(t,{version:jn(a,0),signature:Ie(a,1),[e]:await Za(t.data.subarray(5)),valid:!i.bitFlag.languageEncodingFlag&&t.signature==Ie(s,0)}),t.valid&&(r[e]=t[e],r[e+"UTF8"]=!0)}function Og(t,e,n){let r=Ze(t.data),i=jn(r,4);Object.assign(t,{vendorVersion:jn(r,0),vendorId:jn(r,2),strength:i,originalCompressionMethod:n,compressionMethod:Ke(r,5)}),e.compressionMethod=t.compressionMethod}function Ng(t,e){let n=Ze(t.data),r=4,i;try{for(;r<t.data.length&&!i;){let a=Ke(n,r),o=Ke(n,r+2);a==1&&(i=t.data.slice(r+4,r+4+o)),r+=4+o}}catch{}try{if(i&&i.length==24){let a=Ze(i),o=a.getBigUint64(0,!0),s=a.getBigUint64(8,!0),l=a.getBigUint64(16,!0);Object.assign(t,{rawLastModDate:o,rawLastAccessDate:s,rawCreationDate:l});let c=$a(o),u=$a(s),p=$a(l),d={lastModDate:c,lastAccessDate:u,creationDate:p};Object.assign(t,d),Object.assign(e,d)}}catch{}}function Pg(t,e){let n=Ze(t.data),r=jn(n,0),i=[],a=[];(r&1)==1&&(i.push(bo),a.push(au)),(r&2)==2&&(i.push(yo),a.push(Sg)),(r&4)==4&&(i.push(wo),a.push(kg));let o=1;i.forEach((s,l)=>{if(t.data.length>=o+4){let c=Ie(n,o);e[s]=t[s]=new Date(c*1e3);let u=a[l];t[u]=c}o+=4})}async function Mg(t,e,n,r,i){let a=new Uint8Array(4),o=Ze(a);Fg(o,0,e);let s=r+i;return await l(r)||await l(Math.min(s,n));async function l(c){let u=n-c,p=await tt(t,u,c);for(let d=p.length-r;d>=0;d--)if(p[d]==a[0]&&p[d+1]==a[1]&&p[d+2]==a[2]&&p[d+3]==a[3])return{offset:u+d,buffer:p.slice(d,d+r).buffer}}}function Bt(t,e,n){return e[n]===Ue?t.options[n]:e[n]}function Ig(t){let e=(t&4294901760)>>16,n=t&65535;try{return new Date(1980+((e&65024)>>9),((e&480)>>5)-1,e&31,(n&63488)>>11,(n&2016)>>5,(n&31)*2,0)}catch{}}function $a(t){return new Date(Number(t/BigInt(1e4)-BigInt(116444736e5)))}function jn(t,e){return t.getUint8(e)}function Ke(t,e){return t.getUint16(e,!0)}function Ie(t,e){return t.getUint32(e,!0)}function ki(t,e){return Number(t.getBigUint64(e,!0))}function Fg(t,e,n){t.setUint32(e,n,!0)}function Ze(t){return new DataView(t.buffer)}var vu="File already exists",xu="Zip file comment exceeds 64KB",Tu="File entry comment exceeds 64KB",_u="File entry name exceeds 64KB",to="Version exceeds 65535",Su="The strength must equal 1, 2, or 3",ku="Extra field type exceeds 65535",Au="Extra field data exceeds 64KB",Ii="Zip64 is not supported (make sure 'keepOrder' is set to 'true')",pc=new Uint8Array([7,0,2,0,65,69,3,0,0]),Wa=0,hc=[],Bg=class{constructor(t,e={}){t=go(t),Object.assign(this,{writer:t,addSplitZipSignature:t instanceof Sr,options:e,config:no(),files:new Map,filenames:new Set,offset:t.writable.size,pendingEntriesSize:0,pendingAddFileCalls:new Set,bufferedWrites:0})}async add(t="",e,n={}){let r=this,{pendingAddFileCalls:i,config:a}=r;Wa<a.maxWorkers?Wa++:await new Promise(s=>hc.push(s));let o;try{if(t=t.trim(),r.filenames.has(t))throw new Error(vu);return r.filenames.add(t),o=zg(r,t,e,n),i.add(o),await o}catch(s){throw r.filenames.delete(t),s}finally{i.delete(o);let s=hc.shift();s?s():Wa--}}async close(t=new Uint8Array,e={}){let n=this,{pendingAddFileCalls:r,writer:i}=this,{writable:a}=i;for(;r.size;)await Promise.all(Array.from(r));return await Gg(this,t,e),De(n,e,"preventClose")||await a.close(),i.getData?i.getData():a}};async function zg(t,e,n,r){e=e.trim(),r.directory&&!e.endsWith(_i)?e+=_i:r.directory=e.endsWith(_i);let i=qa(e);if(Se(i)>65535)throw new Error(_u);let a=r.comment||"",o=qa(a);if(Se(o)>65535)throw new Error(Tu);let s=De(t,r,"version",20);if(s>65535)throw new Error(to);let l=De(t,r,"versionMadeBy",20);if(l>65535)throw new Error(to);let c=De(t,r,bo,new Date),u=De(t,r,yo),p=De(t,r,wo),d=De(t,r,lu,!0),h=De(t,r,ou,0),b=De(t,r,su,0),g=De(t,r,"password"),m=De(t,r,"encryptionStrength",3),f=De(t,r,"zipCrypto"),y=De(t,r,"extendedTimestamp",!0),w=De(t,r,"keepOrder",!0),E=De(t,r,"level"),_=De(t,r,"useWebWorkers"),T=De(t,r,"bufferedWrite"),v=De(t,r,"dataDescriptorSignature",!1),x=De(t,r,"signal"),S=De(t,r,"useCompressionStream"),k=De(t,r,"dataDescriptor",!0),C=De(t,r,cu);if(g!==Ue&&m!==Ue&&(m<1||m>3))throw new Error(Su);let N=new Uint8Array,{extraField:O}=r;if(O){let pe=0,he=0;O.forEach(Q=>pe+=4+Se(Q)),N=new Uint8Array(pe),O.forEach((Q,ae)=>{if(ae>65535)throw new Error(ku);if(Se(Q)>65535)throw new Error(Au);Ge(N,new Uint16Array([ae]),he),Ge(N,new Uint16Array([Se(Q)]),he+2),Ge(N,Q,he+4),he+=4+Se(Q)})}let B=0,P=0,U=0,z=C===!0;n&&(n=mo(n),await rn(n),n.size===Ue?(k=!0,(C||C===Ue)&&(C=!0,B=4294967295)):(U=n.size,B=Xg(U)));let{diskOffset:j,diskNumber:ne,maxSize:K}=t.writer,ee=z||U>=4294967295,L=z||B>=4294967295,M=z||t.offset+t.pendingEntriesSize-j>=4294967295,H=De(t,r,"supportZip64SplitFile",!0)&&z||ne+Math.ceil(t.pendingEntriesSize/K)>=65535;if(M||ee||L||H){if(C===!1||!w)throw new Error(Ii);C=!0}C=C||!1,r=Object.assign({},r,{rawFilename:i,rawComment:o,version:s,versionMadeBy:l,lastModDate:c,lastAccessDate:u,creationDate:p,rawExtraField:N,zip64:C,zip64UncompressedSize:ee,zip64CompressedSize:L,zip64Offset:M,zip64DiskNumberStart:H,password:g,level:E,useWebWorkers:_,encryptionStrength:m,extendedTimestamp:y,zipCrypto:f,bufferedWrite:T,keepOrder:w,dataDescriptor:k,dataDescriptorSignature:v,signal:x,msDosCompatible:d,internalFileAttribute:h,externalFileAttribute:b,useCompressionStream:S});let G=Wg(r),X=Hg(r);P=Se(G.localHeaderArray,X.dataDescriptorArray)+B,t.pendingEntriesSize+=P;let ue;try{ue=await Ug(t,e,n,{headerInfo:G,dataDescriptorInfo:X},r)}finally{t.pendingEntriesSize-=P}return Object.assign(ue,{name:e,comment:a,extraField:O}),new Li(ue)}async function Ug(t,e,n,r,i){let{files:a,writer:o}=t,{keepOrder:s,dataDescriptor:l,signal:c}=i,{headerInfo:u}=r,p=Array.from(a.values()).pop(),d={},h,b,g,m,f,y;a.set(e,d);try{let T;s&&(T=p&&p.lock,w()),i.bufferedWrite||t.writerLocked||t.bufferedWrites&&s||!l?(y=new po,y.writable.size=0,h=!0,t.bufferedWrites++,await rn(o)):(y=o,await E()),await rn(y);let{writable:v}=o,{diskOffset:x}=o;if(t.addSplitZipSignature){delete t.addSplitZipSignature;let k=new Uint8Array(4),C=gt(k);we(C,0,134695760),await Gt(v,k),t.offset+=4}h||(await T,await _(v));let{diskNumber:S}=o;if(f=!0,d.diskNumberStart=S,d=await $g(n,y,d,r,t.config,i),f=!1,a.set(e,d),d.filename=e,h){await y.writable.close();let k=await y.getData();await T,await E(),m=!0,l||(k=await qg(d,k,v,i)),await _(v),d.diskNumberStart=o.diskNumber,x=o.diskOffset,await k.stream().pipeTo(v,{preventClose:!0,preventAbort:!0,signal:c}),v.size+=k.size,m=!1}if(d.offset=t.offset-x,d.zip64)Kg(d,i);else if(d.offset>=4294967295)throw new Error(Ii);return t.offset+=d.length,d}catch(T){if(h&&m||!h&&f){if(t.hasCorruptedEntries=!0,T)try{T.corruptedEntry=!0}catch{}h?t.offset+=y.writable.size:t.offset=y.writable.size}throw a.delete(e),T}finally{h&&t.bufferedWrites--,g&&g(),b&&b()}function w(){d.lock=new Promise(T=>g=T)}async function E(){t.writerLocked=!0;let{lockWriter:T}=t;t.lockWriter=new Promise(v=>b=()=>{t.writerLocked=!1,v()}),await T}async function _(T){u.localHeaderArray.length>o.availableSize&&(o.availableSize=0,await Gt(T,new Uint8Array))}}async function $g(t,e,{diskNumberStart:n,lock:r},i,a,o){let{headerInfo:s,dataDescriptorInfo:l}=i,{localHeaderArray:c,headerArray:u,lastModDate:p,rawLastModDate:d,encrypted:h,compressed:b,version:g,compressionMethod:m,rawExtraFieldExtendedTimestamp:f,rawExtraFieldNTFS:y,rawExtraFieldAES:w}=s,{dataDescriptorArray:E}=l,{rawFilename:_,lastAccessDate:T,creationDate:v,password:x,level:S,zip64:k,zip64UncompressedSize:C,zip64CompressedSize:N,zip64Offset:O,zip64DiskNumberStart:B,zipCrypto:P,dataDescriptor:U,directory:z,versionMadeBy:j,rawComment:ne,rawExtraField:K,useWebWorkers:ee,onstart:L,onprogress:M,onend:H,signal:G,encryptionStrength:X,extendedTimestamp:ue,msDosCompatible:pe,internalFileAttribute:he,externalFileAttribute:Q,useCompressionStream:ae}=o,oe={lock:r,versionMadeBy:j,zip64:k,directory:!!z,filenameUTF8:!0,rawFilename:_,commentUTF8:!0,rawComment:ne,rawExtraFieldExtendedTimestamp:f,rawExtraFieldNTFS:y,rawExtraFieldAES:w,rawExtraField:K,extendedTimestamp:ue,msDosCompatible:pe,internalFileAttribute:he,externalFileAttribute:Q,diskNumberStart:n},se=0,Y=0,ie,{writable:de}=e;if(t){t.chunkSize=vc(a),await Gt(de,c);let re=t.readable,Ce=re.size=t.size,Me={options:{codecType:zc,level:S,password:x,encryptionStrength:X,zipCrypto:h&&P,passwordVerification:h&&P&&d>>8&255,signed:!0,compressed:b,encrypted:h,useWebWorkers:ee,useCompressionStream:ae,transferStreams:!1},config:a,streamOptions:{signal:G,size:Ce,onstart:L,onprogress:M,onend:H}},Te=await $c({readable:re,writable:de},Me);de.size+=Te.size,ie=Te.signature,Y=t.size=re.size,se=Te.size}else await Gt(de,c);let fe;if(k){let re=4;C&&(re+=8),N&&(re+=8),O&&(re+=8),B&&(re+=4),fe=new Uint8Array(re)}else fe=new Uint8Array;return t&&jg({signature:ie,rawExtraFieldZip64:fe,compressedSize:se,uncompressedSize:Y,headerInfo:s,dataDescriptorInfo:l},o),U&&await Gt(de,E),Object.assign(oe,{uncompressedSize:Y,compressedSize:se,lastModDate:p,rawLastModDate:d,creationDate:v,lastAccessDate:T,encrypted:h,length:Se(c,E)+se,compressionMethod:m,version:g,headerArray:u,signature:ie,rawExtraFieldZip64:fe,zip64UncompressedSize:C,zip64CompressedSize:N,zip64Offset:O,zip64DiskNumberStart:B}),oe}function Wg(t){let{rawFilename:e,lastModDate:n,lastAccessDate:r,creationDate:i,password:a,level:o,zip64:s,zipCrypto:l,dataDescriptor:c,directory:u,rawExtraField:p,encryptionStrength:d,extendedTimestamp:h}=t,b=o!==0&&!u,g=!!(a&&Se(a)),m=t.version,f;if(g&&!l){f=new Uint8Array(Se(pc)+2);let P=gt(f);Ae(P,0,39169),Ge(f,pc,2),Di(P,8,d)}else f=new Uint8Array;let y,w;if(h){w=new Uint8Array(9+(r?4:0)+(i?4:0));let P=gt(w);Ae(P,0,21589),Ae(P,2,Se(w)-4);let U=1+(r?2:0)+(i?4:0);Di(P,4,U),we(P,5,Math.floor(n.getTime()/1e3)),r&&we(P,9,Math.floor(r.getTime()/1e3)),i&&we(P,13,Math.floor(i.getTime()/1e3));try{y=new Uint8Array(36);let z=gt(y),j=Ha(n);Ae(z,0,10),Ae(z,2,32),Ae(z,8,1),Ae(z,10,24),mt(z,12,j),mt(z,20,Ha(r)||j),mt(z,28,Ha(i)||j)}catch{y=new Uint8Array}}else y=w=new Uint8Array;let E=2048;c&&(E=E|8);let _=0;b&&(_=8),s&&(m=m>45?m:45),g&&(E=E|1,l||(m=m>51?m:51,_=99,b&&(f[9]=8)));let T=new Uint8Array(26),v=gt(T);Ae(v,0,m),Ae(v,2,E),Ae(v,4,_);let x=new Uint32Array(1),S=gt(x),k;n<Vl?k=Vl:n>Gl?k=Gl:k=n,Ae(S,0,(k.getHours()<<6|k.getMinutes())<<5|k.getSeconds()/2),Ae(S,2,(k.getFullYear()-1980<<4|k.getMonth()+1)<<5|k.getDate());let C=x[0];we(v,6,C),Ae(v,22,Se(e));let N=Se(f,w,y,p);Ae(v,24,N);let O=new Uint8Array(30+Se(e)+N),B=gt(O);return we(B,0,67324752),Ge(O,T,4),Ge(O,e,30),Ge(O,f,30+Se(e)),Ge(O,w,30+Se(e,f)),Ge(O,y,30+Se(e,f,w)),Ge(O,p,30+Se(e,f,w,y)),{localHeaderArray:O,headerArray:T,headerView:v,lastModDate:n,rawLastModDate:C,encrypted:g,compressed:b,version:m,compressionMethod:_,rawExtraFieldExtendedTimestamp:w,rawExtraFieldNTFS:y,rawExtraFieldAES:f}}function Hg(t){let{zip64:e,dataDescriptor:n,dataDescriptorSignature:r}=t,i=new Uint8Array,a,o=0;return n&&(i=new Uint8Array(e?r?24:20:r?16:12),a=gt(i),r&&(o=4,we(a,0,134695760))),{dataDescriptorArray:i,dataDescriptorView:a,dataDescriptorOffset:o}}function jg(t,e){let{signature:n,rawExtraFieldZip64:r,compressedSize:i,uncompressedSize:a,headerInfo:o,dataDescriptorInfo:s}=t,{headerView:l,encrypted:c}=o,{dataDescriptorView:u,dataDescriptorOffset:p}=s,{zip64:d,zip64UncompressedSize:h,zip64CompressedSize:b,zipCrypto:g,dataDescriptor:m}=e;if((!c||g)&&n!==Ue&&(we(l,10,n),m&&we(u,p,n)),d){let f=gt(r);Ae(f,0,1),Ae(f,2,r.length-4);let y=4;h&&(we(l,18,4294967295),mt(f,y,BigInt(a)),y+=8),b&&(we(l,14,4294967295),mt(f,y,BigInt(i))),m&&(mt(u,p+4,BigInt(i)),mt(u,p+12,BigInt(a)))}else we(l,14,i),we(l,18,a),m&&(we(u,p+4,i),we(u,p+8,a))}async function qg(t,e,n,{zipCrypto:r}){let i=await Vg(e,0,26),a=new DataView(i);return(!t.encrypted||r)&&we(a,14,t.signature),t.zip64?(we(a,18,4294967295),we(a,22,4294967295)):(we(a,18,t.compressedSize),we(a,22,t.uncompressedSize)),await Gt(n,new Uint8Array(i)),e.slice(i.byteLength)}function Kg(t,e){let{rawExtraFieldZip64:n,offset:r,diskNumberStart:i}=t,{zip64UncompressedSize:a,zip64CompressedSize:o,zip64Offset:s,zip64DiskNumberStart:l}=e,c=gt(n),u=4;a&&(u+=8),o&&(u+=8),s&&(mt(c,u,BigInt(r)),u+=8),l&&we(c,u,i)}async function Gg(t,e,n){let{files:r,writer:i}=t,{diskOffset:a,writable:o}=i,{diskNumber:s}=i,l=0,c=0,u=t.offset-a,p=r.size;for(let[,{rawFilename:_,rawExtraFieldZip64:T,rawExtraFieldAES:v,rawExtraField:x,rawComment:S,rawExtraFieldExtendedTimestamp:k,rawExtraFieldNTFS:C}]of r)c+=46+Se(_,S,T,v,k,C,x);let d=new Uint8Array(c),h=gt(d);await rn(i);let b=0;for(let[_,T]of Array.from(r.values()).entries()){let{offset:v,rawFilename:x,rawExtraFieldZip64:S,rawExtraFieldAES:k,rawExtraFieldNTFS:C,rawExtraField:N,rawComment:O,versionMadeBy:B,headerArray:P,directory:U,zip64:z,zip64UncompressedSize:j,zip64CompressedSize:ne,zip64DiskNumberStart:K,zip64Offset:ee,msDosCompatible:L,internalFileAttribute:M,externalFileAttribute:H,extendedTimestamp:G,lastModDate:X,diskNumberStart:ue,uncompressedSize:pe,compressedSize:he}=T,Q;if(G){Q=new Uint8Array(9);let Y=gt(Q);Ae(Y,0,21589),Ae(Y,2,Se(Q)-4),Di(Y,4,1),we(Y,5,Math.floor(X.getTime()/1e3))}else Q=new Uint8Array;let ae=Se(S,k,Q,C,N);we(h,l,33639248),Ae(h,l+4,B);let oe=gt(P);j||we(oe,18,pe),ne||we(oe,14,he),Ge(d,P,l+6),Ae(h,l+30,ae),Ae(h,l+32,Se(O)),Ae(h,l+34,z&&K?65535:ue),Ae(h,l+36,M),H?we(h,l+38,H):U&&L&&Di(h,l+38,16),we(h,l+42,z&&ee?4294967295:v),Ge(d,x,l+46),Ge(d,S,l+46+Se(x)),Ge(d,k,l+46+Se(x,S)),Ge(d,Q,l+46+Se(x,S,k)),Ge(d,C,l+46+Se(x,S,k,Q)),Ge(d,N,l+46+Se(x,S,k,Q,C)),Ge(d,O,l+46+Se(x)+ae);let se=46+Se(x,O)+ae;if(l-b>i.availableSize&&(i.availableSize=0,await Gt(o,d.slice(b,l)),b=l),l+=se,n.onprogress)try{await n.onprogress(_+1,r.size,new Li(T))}catch{}}await Gt(o,b?d.slice(b):d);let g=i.diskNumber,{availableSize:m}=i;m<22&&g++;let f=De(t,n,"zip64");if(u>=4294967295||c>=4294967295||p>=65535||g>=65535){if(f===!1)throw new Error(Ii);f=!0}let y=new Uint8Array(f?98:22),w=gt(y);l=0,f&&(we(w,0,101075792),mt(w,4,BigInt(44)),Ae(w,12,45),Ae(w,14,45),we(w,16,g),we(w,20,s),mt(w,24,BigInt(p)),mt(w,32,BigInt(p)),mt(w,40,BigInt(c)),mt(w,48,BigInt(u)),we(w,56,117853008),mt(w,64,BigInt(u)+BigInt(c)),we(w,72,g+1),De(t,n,"supportZip64SplitFile",!0)&&(g=65535,s=65535),p=65535,u=4294967295,c=4294967295,l+=76),we(w,l,101010256),Ae(w,l+4,g),Ae(w,l+6,s),Ae(w,l+8,p),Ae(w,l+10,p),we(w,l+12,c),we(w,l+16,u);let E=Se(e);if(E)if(E<=65535)Ae(w,l+20,E);else throw new Error(xu);await Gt(o,y),E&&await Gt(o,e)}function Vg(t,e,n){return e||n?t.slice(e,n).arrayBuffer():t.arrayBuffer()}async function Gt(t,e){let n=t.getWriter();await n.ready,t.size+=Se(e),await n.write(e),n.releaseLock()}function Ha(t){if(t)return(BigInt(t.getTime())+BigInt(116444736e5))*BigInt(1e4)}function De(t,e,n,r){let i=e[n]===Ue?t.options[n]:e[n];return i===Ue?r:i}function Xg(t){return t+5*(Math.floor(t/16383)+1)}function Di(t,e,n){t.setUint8(e,n)}function Ae(t,e,n){t.setUint16(e,n,!0)}function we(t,e,n){t.setUint32(e,n,!0)}function mt(t,e,n){t.setBigUint64(e,n,!0)}function Ge(t,e,n){t.set(e,n)}function gt(t){return new DataView(t.buffer)}function Se(...t){let e=0;return t.forEach(n=>n&&(e+=n.length)),e}Ni({Deflate:Xf,Inflate:fm});var Eu={},Yg=function(t,e,n,r,i){var a=new Worker(Eu[e]||(Eu[e]=URL.createObjectURL(new Blob([t+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return a.onmessage=function(o){var s=o.data,l=s.$e$;if(l){var c=new Error(l[0]);c.code=l[1],c.stack=l[2],i(c,null)}else i(null,s)},a.postMessage(n,r),a},Ee=Uint8Array,nt=Uint16Array,Yn=Uint32Array,Zn=new Ee([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Qn=new Ee([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Er=new Ee([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Nu=function(t,e){for(var n=new nt(31),r=0;r<31;++r)n[r]=e+=1<<t[r-1];for(var i=new Yn(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return[n,i]},Pu=Nu(Zn,2),Lo=Pu[0],Wi=Pu[1];Lo[28]=258,Wi[258]=28;var Mu=Nu(Qn,0),Iu=Mu[0],To=Mu[1],Cr=new nt(32768);for(ke=0;ke<32768;++ke)an=(ke&43690)>>>1|(ke&21845)<<1,an=(an&52428)>>>2|(an&13107)<<2,an=(an&61680)>>>4|(an&3855)<<4,Cr[ke]=((an&65280)>>>8|(an&255)<<8)>>>1;var an,ke,Lt=function(t,e,n){for(var r=t.length,i=0,a=new nt(e);i<r;++i)t[i]&&++a[t[i]-1];var o=new nt(e);for(i=0;i<e;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new nt(1<<e);var l=15-e;for(i=0;i<r;++i)if(t[i])for(var c=i<<4|t[i],u=e-t[i],p=o[t[i]-1]++<<u,d=p|(1<<u)-1;p<=d;++p)s[Cr[p]>>>l]=c}else for(s=new nt(r),i=0;i<r;++i)t[i]&&(s[i]=Cr[o[t[i]-1]++]>>>15-t[i]);return s},sn=new Ee(288);for(ke=0;ke<144;++ke)sn[ke]=8;var ke;for(ke=144;ke<256;++ke)sn[ke]=9;var ke;for(ke=256;ke<280;++ke)sn[ke]=7;var ke;for(ke=280;ke<288;++ke)sn[ke]=8;var ke,Xn=new Ee(32);for(ke=0;ke<32;++ke)Xn[ke]=5;var ke,Fu=Lt(sn,9,0),Bu=Lt(sn,9,1),zu=Lt(Xn,5,0),Uu=Lt(Xn,5,1),Bi=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},Ct=function(t,e,n){var r=e/8|0;return(t[r]|t[r+1]<<8)>>(e&7)&n},zi=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},Lr=function(t){return(t+7)/8|0},Zt=function(t,e,n){(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length);var r=new(t.BYTES_PER_ELEMENT==2?nt:t.BYTES_PER_ELEMENT==4?Yn:Ee)(n-e);return r.set(t.subarray(e,n)),r};var $u=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],me=function(t,e,n){var r=new Error(e||$u[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,me),!n)throw r;return r},Ki=function(t,e,n){var r=t.length;if(!r||n&&n.f&&!n.l)return e||new Ee(0);var i=!e||n,a=!n||n.i;n||(n={}),e||(e=new Ee(r*3));var o=function(X){var ue=e.length;if(X>ue){var pe=new Ee(Math.max(ue*2,X));pe.set(e),e=pe}},s=n.f||0,l=n.p||0,c=n.b||0,u=n.l,p=n.d,d=n.m,h=n.n,b=r*8;do{if(!u){s=Ct(t,l,1);var g=Ct(t,l+1,3);if(l+=3,g)if(g==1)u=Bu,p=Uu,d=9,h=5;else if(g==2){var m=Ct(t,l,31)+257,f=Ct(t,l+10,15)+4,y=m+Ct(t,l+5,31)+1;l+=14;for(var w=new Ee(y),E=new Ee(19),_=0;_<f;++_)E[Er[_]]=Ct(t,l+_*3,7);l+=f*3;for(var T=Bi(E),v=(1<<T)-1,x=Lt(E,T,1),_=0;_<y;){var S=x[Ct(t,l,v)];l+=S&15;var k=S>>>4;if(k<16)w[_++]=k;else{var C=0,N=0;for(k==16?(N=3+Ct(t,l,3),l+=2,C=w[_-1]):k==17?(N=3+Ct(t,l,7),l+=3):k==18&&(N=11+Ct(t,l,127),l+=7);N--;)w[_++]=C}}var O=w.subarray(0,m),B=w.subarray(m);d=Bi(O),h=Bi(B),u=Lt(O,d,1),p=Lt(B,h,1)}else me(1);else{var k=Lr(l)+4,P=t[k-4]|t[k-3]<<8,U=k+P;if(U>r){a&&me(0);break}i&&o(c+P),e.set(t.subarray(k,U),c),n.b=c+=P,n.p=l=U*8,n.f=s;continue}if(l>b){a&&me(0);break}}i&&o(c+131072);for(var z=(1<<d)-1,j=(1<<h)-1,ne=l;;ne=l){var C=u[zi(t,l)&z],K=C>>>4;if(l+=C&15,l>b){a&&me(0);break}if(C||me(2),K<256)e[c++]=K;else if(K==256){ne=l,u=null;break}else{var ee=K-254;if(K>264){var _=K-257,L=Zn[_];ee=Ct(t,l,(1<<L)-1)+Lo[_],l+=L}var M=p[zi(t,l)&j],H=M>>>4;M||me(3),l+=M&15;var B=Iu[H];if(H>3){var L=Qn[H];B+=zi(t,l)&(1<<L)-1,l+=L}if(l>b){a&&me(0);break}i&&o(c+131072);for(var G=c+ee;c<G;c+=4)e[c]=e[c-B],e[c+1]=e[c+1-B],e[c+2]=e[c+2-B],e[c+3]=e[c+3-B];c=G}}n.l=u,n.p=ne,n.b=c,n.f=s,u&&(s=1,n.m=d,n.d=p,n.n=h)}while(!s);return c==e.length?e:Zt(e,0,c)},Yt=function(t,e,n){n<<=e&7;var r=e/8|0;t[r]|=n,t[r+1]|=n>>>8},qn=function(t,e,n){n<<=e&7;var r=e/8|0;t[r]|=n,t[r+1]|=n>>>8,t[r+2]|=n>>>16},Ui=function(t,e){for(var n=[],r=0;r<t.length;++r)t[r]&&n.push({s:r,f:t[r]});var i=n.length,a=n.slice();if(!i)return[on,0];if(i==1){var o=new Ee(n[0].s+1);return o[n[0].s]=1,[o,1]}n.sort(function(_,T){return _.f-T.f}),n.push({s:-1,f:25001});var s=n[0],l=n[1],c=0,u=1,p=2;for(n[0]={s:-1,f:s.f+l.f,l:s,r:l};u!=i-1;)s=n[n[c].f<n[p].f?c++:p++],l=n[c!=u&&n[c].f<n[p].f?c++:p++],n[u++]={s:-1,f:s.f+l.f,l:s,r:l};for(var d=a[0].s,r=1;r<i;++r)a[r].s>d&&(d=a[r].s);var h=new nt(d+1),b=Hi(n[u-1],h,0);if(b>e){var r=0,g=0,m=b-e,f=1<<m;for(a.sort(function(T,v){return h[v.s]-h[T.s]||T.f-v.f});r<i;++r){var y=a[r].s;if(h[y]>e)g+=f-(1<<b-h[y]),h[y]=e;else break}for(g>>>=m;g>0;){var w=a[r].s;h[w]<e?g-=1<<e-h[w]++-1:++r}for(;r>=0&&g;--r){var E=a[r].s;h[E]==e&&(--h[E],++g)}b=e}return[new Ee(h),b]},Hi=function(t,e,n){return t.s==-1?Math.max(Hi(t.l,e,n+1),Hi(t.r,e,n+1)):e[t.s]=n},_o=function(t){for(var e=t.length;e&&!t[--e];);for(var n=new nt(++e),r=0,i=t[0],a=1,o=function(l){n[r++]=l},s=1;s<=e;++s)if(t[s]==i&&s!=e)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=t[s]}return[n.subarray(0,r),e]},Kn=function(t,e){for(var n=0,r=0;r<e.length;++r)n+=t[r]*e[r];return n},ji=function(t,e,n){var r=n.length,i=Lr(e+2);t[i]=r&255,t[i+1]=r>>>8,t[i+2]=t[i]^255,t[i+3]=t[i+1]^255;for(var a=0;a<r;++a)t[i+a+4]=n[a];return(i+4+r)*8},So=function(t,e,n,r,i,a,o,s,l,c,u){Yt(e,u++,n),++i[256];for(var p=Ui(i,15),d=p[0],h=p[1],b=Ui(a,15),g=b[0],m=b[1],f=_o(d),y=f[0],w=f[1],E=_o(g),_=E[0],T=E[1],v=new nt(19),x=0;x<y.length;++x)v[y[x]&31]++;for(var x=0;x<_.length;++x)v[_[x]&31]++;for(var S=Ui(v,7),k=S[0],C=S[1],N=19;N>4&&!k[Er[N-1]];--N);var O=c+5<<3,B=Kn(i,sn)+Kn(a,Xn)+o,P=Kn(i,d)+Kn(a,g)+o+14+3*N+Kn(v,k)+(2*v[16]+3*v[17]+7*v[18]);if(O<=B&&O<=P)return ji(e,u,t.subarray(l,l+c));var U,z,j,ne;if(Yt(e,u,1+(P<B)),u+=2,P<B){U=Lt(d,h,0),z=d,j=Lt(g,m,0),ne=g;var K=Lt(k,C,0);Yt(e,u,w-257),Yt(e,u+5,T-1),Yt(e,u+10,N-4),u+=14;for(var x=0;x<N;++x)Yt(e,u+3*x,k[Er[x]]);u+=3*N;for(var ee=[y,_],L=0;L<2;++L)for(var M=ee[L],x=0;x<M.length;++x){var H=M[x]&31;Yt(e,u,K[H]),u+=k[H],H>15&&(Yt(e,u,M[x]>>>5&127),u+=M[x]>>>12)}}else U=Fu,z=sn,j=zu,ne=Xn;for(var x=0;x<s;++x)if(r[x]>255){var H=r[x]>>>18&31;qn(e,u,U[H+257]),u+=z[H+257],H>7&&(Yt(e,u,r[x]>>>23&31),u+=Zn[H]);var G=r[x]&31;qn(e,u,j[G]),u+=ne[G],G>3&&(qn(e,u,r[x]>>>5&8191),u+=Qn[G])}else qn(e,u,U[r[x]]),u+=z[r[x]];return qn(e,u,U[256]),u+z[256]},Wu=new Yn([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),on=new Ee(0),Hu=function(t,e,n,r,i,a){var o=t.length,s=new Ee(r+o+5*(1+Math.ceil(o/7e3))+i),l=s.subarray(r,s.length-i),c=0;if(!e||o<8)for(var u=0;u<=o;u+=65535){var p=u+65535;p>=o&&(l[c>>3]=a),c=ji(l,c+1,t.subarray(u,p))}else{for(var d=Wu[e-1],h=d>>>13,b=d&8191,g=(1<<n)-1,m=new nt(32768),f=new nt(g+1),y=Math.ceil(n/3),w=2*y,E=function(Y){return(t[Y]^t[Y+1]<<y^t[Y+2]<<w)&g},_=new Yn(25e3),T=new nt(288),v=new nt(32),x=0,S=0,u=0,k=0,C=0,N=0;u<o;++u){var O=E(u),B=u&32767,P=f[O];if(m[B]=P,f[O]=B,C<=u){var U=o-u;if((x>7e3||k>24576)&&U>423){c=So(t,l,0,_,T,v,S,k,N,u-N,c),k=x=S=0,N=u;for(var z=0;z<286;++z)T[z]=0;for(var z=0;z<30;++z)v[z]=0}var j=2,ne=0,K=b,ee=B-P&32767;if(U>2&&O==E(u-ee))for(var L=Math.min(h,U)-1,M=Math.min(32767,u),H=Math.min(258,U);ee<=M&&--K&&B!=P;){if(t[u+j]==t[u+j-ee]){for(var G=0;G<H&&t[u+G]==t[u+G-ee];++G);if(G>j){if(j=G,ne=ee,G>L)break;for(var X=Math.min(ee,G-2),ue=0,z=0;z<X;++z){var pe=u-ee+z+32768&32767,he=m[pe],Q=pe-he+32768&32767;Q>ue&&(ue=Q,P=pe)}}}B=P,P=m[B],ee+=B-P+32768&32767}if(ne){_[k++]=268435456|Wi[j]<<18|To[ne];var ae=Wi[j]&31,oe=To[ne]&31;S+=Zn[ae]+Qn[oe],++T[257+ae],++v[oe],C=u+j,++x}else _[k++]=t[u],++T[t[u]]}}c=So(t,l,a,_,T,v,S,k,N,u-N,c),!a&&c&7&&(c=ji(l,c+1,on))}return Zt(s,0,r+Lr(c)+i)},ju=function(){for(var t=new Int32Array(256),e=0;e<256;++e){for(var n=e,r=9;--r;)n=(n&1&&-306674912)^n>>>1;t[e]=n}return t}(),Do=function(){var t=-1;return{p:function(e){for(var n=t,r=0;r<e.length;++r)n=ju[n&255^e[r]]^n>>>8;t=n},d:function(){return~t}}},qu=function(){var t=1,e=0;return{p:function(n){for(var r=t,i=e,a=n.length|0,o=0;o!=a;){for(var s=Math.min(o+2655,a);o<s;++o)i+=r+=n[o];r=(r&65535)+15*(r>>16),i=(i&65535)+15*(i>>16)}t=r,e=i},d:function(){return t%=65521,e%=65521,(t&255)<<24|t>>>8<<16|(e&255)<<8|e>>>8}}},Dr=function(t,e,n,r,i){return Hu(t,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):12+e.mem,n,r,!i)},Ku=function(t,e){var n={};for(var r in t)n[r]=t[r];for(var r in e)n[r]=e[r];return n},Cu=function(t,e,n){for(var r=t(),i=t.toString(),a=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<r.length;++o){var s=r[o],l=a[o];if(typeof s=="function"){e+=";"+l+"=";var c=s.toString();if(s.prototype)if(c.indexOf("[native code]")!=-1){var u=c.indexOf(" ",8)+1;e+=c.slice(u,c.indexOf("(",u))}else{e+=c;for(var p in s.prototype)e+=";"+l+".prototype."+p+"="+s.prototype[p].toString()}else e+=c}else n[l]=s}return[e,n]},Fi=[],Zg=function(t){var e=[];for(var n in t)t[n].buffer&&e.push((t[n]=new t[n].constructor(t[n])).buffer);return e},Qg=function(t,e,n,r){var i;if(!Fi[n]){for(var a="",o={},s=t.length-1,l=0;l<s;++l)i=Cu(t[l],a,o),a=i[0],o=i[1];Fi[n]=Cu(t[s],a,o)}var c=Ku({},Fi[n][1]);return Yg(Fi[n][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",n,c,Zg(c),r)},Ro=function(){return[Ee,nt,Yn,Zn,Qn,Er,Lo,Iu,Bu,Uu,Cr,$u,Lt,Bi,Ct,zi,Lr,Zt,me,Ki,s0,Gu,r0]},Oo=function(){return[Ee,nt,Yn,Zn,Qn,Er,Wi,To,Fu,sn,zu,Xn,Cr,Wu,on,Lt,Yt,qn,Ui,Hi,_o,Kn,ji,So,Lr,Zt,Hu,Dr,o0,Gu]},Jg=function(){return[Vu,Yu,Le,Do,ju]},e0=function(){return[Xu,i0]},t0=function(){return[Zu,Le,qu]},n0=function(){return[Qu]},Gu=function(t){return postMessage(t,[t.buffer])},r0=function(t){return t&&t.size&&new Ee(t.size)};var Dt=function(t){return t.ondata=function(e,n){return postMessage([e,n],[e.buffer])},function(e){return t.push(e.data[0],e.data[1])}},Jn=function(t,e,n,r,i){var a,o=Qg(t,r,i,function(s,l){s?(o.terminate(),e.ondata.call(e,s)):(l[1]&&o.terminate(),e.ondata.call(e,s,l[0],l[1]))});o.postMessage(n),e.push=function(s,l){e.ondata||me(5),a&&e.ondata(me(4,0,1),null,!!l),o.postMessage([s,a=l],[s.buffer])},e.terminate=function(){o.terminate()}},Gn=function(t,e){return t[e]|t[e+1]<<8},Vn=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},xo=function(t,e){return Vn(t,e)+Vn(t,e+4)*4294967296},Le=function(t,e,n){for(;n;++e)t[e]=n,n>>>=8},Vu=function(t,e){var n=e.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=e.level<2?4:e.level==9?2:0,t[9]=3,e.mtime!=0&&Le(t,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),n){t[3]=8;for(var r=0;r<=n.length;++r)t[r+10]=n.charCodeAt(r)}},Xu=function(t){(t[0]!=31||t[1]!=139||t[2]!=8)&&me(6,"invalid gzip data");var e=t[3],n=10;e&4&&(n+=t[10]|(t[11]<<8)+2);for(var r=(e>>3&1)+(e>>4&1);r>0;r-=!t[n++]);return n+(e&2)},i0=function(t){var e=t.length;return(t[e-4]|t[e-3]<<8|t[e-2]<<16|t[e-1]<<24)>>>0},Yu=function(t){return 10+(t.filename&&t.filename.length+1||0)},Zu=function(t,e){var n=e.level,r=n==0?0:n<6?1:n==9?3:2;t[0]=120,t[1]=r<<6|(r?32-2*r:1)},Qu=function(t){((t[0]&15)!=8||t[0]>>>4>7||(t[0]<<8|t[1])%31)&&me(6,"invalid zlib data"),t[1]&32&&me(6,"invalid zlib data: preset dictionaries not supported")};function No(t,e){return!e&&typeof t=="function"&&(e=t,t={}),this.ondata=e,t}var ln=function(){function t(e,n){!n&&typeof e=="function"&&(n=e,e={}),this.ondata=n,this.o=e||{}}return t.prototype.p=function(e,n){this.ondata(Dr(e,this.o,0,0,!n),n)},t.prototype.push=function(e,n){this.ondata||me(5),this.d&&me(4),this.d=n,this.p(e,n||!1)},t}(),a0=function(){function t(e,n){Jn([Oo,function(){return[Dt,ln]}],this,No.call(this,e,n),function(r){var i=new ln(r.data);onmessage=Dt(i)},6)}return t}();function o0(t,e){return Dr(t,e||{},0,0)}var wt=function(){function t(e){this.s={},this.p=new Ee(0),this.ondata=e}return t.prototype.e=function(e){this.ondata||me(5),this.d&&me(4);var n=this.p.length,r=new Ee(n+e.length);r.set(this.p),r.set(e,n),this.p=r},t.prototype.c=function(e){this.d=this.s.i=e||!1;var n=this.s.b,r=Ki(this.p,this.o,this.s);this.ondata(Zt(r,n,this.s.b),this.d),this.o=Zt(r,this.s.b-32768),this.s.b=this.o.length,this.p=Zt(this.p,this.s.p/8|0),this.s.p&=7},t.prototype.push=function(e,n){this.e(e),this.c(n)},t}(),Ju=function(){function t(e){this.ondata=e,Jn([Ro,function(){return[Dt,wt]}],this,0,function(){var n=new wt;onmessage=Dt(n)},7)}return t}();function s0(t,e){return Ki(t,e)}var Lu=function(){function t(e,n){this.c=Do(),this.l=0,this.v=1,ln.call(this,e,n)}return t.prototype.push=function(e,n){ln.prototype.push.call(this,e,n)},t.prototype.p=function(e,n){this.c.p(e),this.l+=e.length;var r=Dr(e,this.o,this.v&&Yu(this.o),n&&8,!n);this.v&&(Vu(r,this.o),this.v=0),n&&(Le(r,r.length-8,this.c.d()),Le(r,r.length-4,this.l)),this.ondata(r,n)},t}(),Aw=function(){function t(e,n){Jn([Oo,Jg,function(){return[Dt,ln,Lu]}],this,No.call(this,e,n),function(r){var i=new Lu(r.data);onmessage=Dt(i)},8)}return t}();var ko=function(){function t(e){this.v=1,wt.call(this,e)}return t.prototype.push=function(e,n){if(wt.prototype.e.call(this,e),this.v){var r=this.p.length>3?Xu(this.p):4;if(r>=this.p.length&&!n)return;this.p=this.p.subarray(r),this.v=0}n&&(this.p.length<8&&me(6,"invalid gzip data"),this.p=this.p.subarray(0,-8)),wt.prototype.c.call(this,n)},t}(),l0=function(){function t(e){this.ondata=e,Jn([Ro,e0,function(){return[Dt,wt,ko]}],this,0,function(){var n=new ko;onmessage=Dt(n)},9)}return t}();var Du=function(){function t(e,n){this.c=qu(),this.v=1,ln.call(this,e,n)}return t.prototype.push=function(e,n){ln.prototype.push.call(this,e,n)},t.prototype.p=function(e,n){this.c.p(e);var r=Dr(e,this.o,this.v&&2,n&&4,!n);this.v&&(Zu(r,this.o),this.v=0),n&&Le(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),Ew=function(){function t(e,n){Jn([Oo,t0,function(){return[Dt,ln,Du]}],this,No.call(this,e,n),function(r){var i=new Du(r.data);onmessage=Dt(i)},10)}return t}();var Ao=function(){function t(e){this.v=1,wt.call(this,e)}return t.prototype.push=function(e,n){if(wt.prototype.e.call(this,e),this.v){if(this.p.length<2&&!n)return;this.p=this.p.subarray(2),this.v=0}n&&(this.p.length<4&&me(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),wt.prototype.c.call(this,n)},t}(),c0=function(){function t(e){this.ondata=e,Jn([Ro,n0,function(){return[Dt,wt,Ao]}],this,0,function(){var n=new Ao;onmessage=Dt(n)},11)}return t}();function ed(t,e){return Ki((Qu(t),t.subarray(2,-4)),e)}var u0=function(){function t(e){this.G=ko,this.I=wt,this.Z=Ao,this.ondata=e}return t.prototype.push=function(e,n){if(this.ondata||me(5),this.s)this.s.push(e,n);else{if(this.p&&this.p.length){var r=new Ee(this.p.length+e.length);r.set(this.p),r.set(e,this.p.length)}else this.p=e;if(this.p.length>2){var i=this,a=function(){i.ondata.apply(i,arguments)};this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(a):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(a):new this.Z(a),this.s.push(this.p,n),this.p=null}}},t}(),Cw=function(){function t(e){this.G=l0,this.I=Ju,this.Z=c0,this.ondata=e}return t.prototype.push=function(e,n){u0.prototype.push.call(this,e,n)},t}();var Ru=typeof TextEncoder<"u"&&new TextEncoder,Eo=typeof TextDecoder<"u"&&new TextDecoder,td=0;try{Eo.decode(on,{stream:!0}),td=1}catch{}var nd=function(t){for(var e="",n=0;;){var r=t[n++],i=(r>127)+(r>223)+(r>239);if(n+i>t.length)return[e,Zt(t,n-1)];i?i==3?(r=((r&15)<<18|(t[n++]&63)<<12|(t[n++]&63)<<6|t[n++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?e+=String.fromCharCode((r&31)<<6|t[n++]&63):e+=String.fromCharCode((r&15)<<12|(t[n++]&63)<<6|t[n++]&63):e+=String.fromCharCode(r)}},Lw=function(){function t(e){this.ondata=e,td?this.t=new TextDecoder:this.p=on}return t.prototype.push=function(e,n){if(this.ondata||me(5),n=!!n,this.t){this.ondata(this.t.decode(e,{stream:!0}),n),n&&(this.t.decode().length&&me(8),this.t=null);return}this.p||me(4);var r=new Ee(this.p.length+e.length);r.set(this.p),r.set(e,this.p.length);var i=nd(r),a=i[0],o=i[1];n?(o.length&&me(8),this.p=null):this.p=o,this.ondata(a,n)},t}(),Dw=function(){function t(e){this.ondata=e}return t.prototype.push=function(e,n){this.ondata||me(5),this.d&&me(4),this.ondata(Co(e),this.d=n||!1)},t}();function Co(t,e){if(e){for(var n=new Ee(t.length),r=0;r<t.length;++r)n[r]=t.charCodeAt(r);return n}if(Ru)return Ru.encode(t);for(var i=t.length,a=new Ee(t.length+(t.length>>1)),o=0,s=function(p){a[o++]=p},r=0;r<i;++r){if(o+5>a.length){var l=new Ee(o+8+(i-r<<1));l.set(a),a=l}var c=t.charCodeAt(r);c<128||e?s(c):c<2048?(s(192|c>>6),s(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|t.charCodeAt(++r)&1023,s(240|c>>18),s(128|c>>12&63),s(128|c>>6&63),s(128|c&63)):(s(224|c>>12),s(128|c>>6&63),s(128|c&63))}return Zt(a,0,o)}function d0(t,e){if(e){for(var n="",r=0;r<t.length;r+=16384)n+=String.fromCharCode.apply(null,t.subarray(r,r+16384));return n}else{if(Eo)return Eo.decode(t);var i=nd(t),a=i[0],o=i[1];return o.length&&me(8),a}}var rd=function(t){return t==1?3:t<6?2:t==9?1:0};var p0=function(t,e){for(;Gn(t,e)!=1;e+=4+Gn(t,e+2));return[xo(t,e+12),xo(t,e+4),xo(t,e+20)]},$i=function(t){var e=0;if(t)for(var n in t){var r=t[n].length;r>65535&&me(9),e+=r+4}return e},Ou=function(t,e,n,r,i,a,o,s){var l=r.length,c=n.extra,u=s&&s.length,p=$i(c);Le(t,e,o!=null?33639248:67324752),e+=4,o!=null&&(t[e++]=20,t[e++]=n.os),t[e]=20,e+=2,t[e++]=n.flag<<1|(a<0&&8),t[e++]=i&&8,t[e++]=n.compression&255,t[e++]=n.compression>>8;var d=new Date(n.mtime==null?Date.now():n.mtime),h=d.getFullYear()-1980;if((h<0||h>119)&&me(10),Le(t,e,h<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>>1),e+=4,a!=-1&&(Le(t,e,n.crc),Le(t,e+4,a<0?-a-2:a),Le(t,e+8,n.size)),Le(t,e+12,l),Le(t,e+14,p),e+=16,o!=null&&(Le(t,e,u),Le(t,e+6,n.attrs),Le(t,e+10,o),e+=14),t.set(r,e),e+=l,p)for(var b in c){var g=c[b],m=g.length;Le(t,e,+b),Le(t,e+2,m),t.set(g,e+4),e+=4+m}return u&&(t.set(s,e),e+=u),e},h0=function(t,e,n,r,i){Le(t,e,101010256),Le(t,e+8,n),Le(t,e+10,n),Le(t,e+12,r),Le(t,e+16,i)},qi=function(){function t(e){this.filename=e,this.c=Do(),this.size=0,this.compression=0}return t.prototype.process=function(e,n){this.ondata(null,e,n)},t.prototype.push=function(e,n){this.ondata||me(5),this.c.p(e),this.size+=e.length,n&&(this.crc=this.c.d()),this.process(e,n||!1)},t}(),Rw=function(){function t(e,n){var r=this;n||(n={}),qi.call(this,e),this.d=new ln(n,function(i,a){r.ondata(null,i,a)}),this.compression=8,this.flag=rd(n.level)}return t.prototype.process=function(e,n){try{this.d.push(e,n)}catch(r){this.ondata(r,null,n)}},t.prototype.push=function(e,n){qi.prototype.push.call(this,e,n)},t}(),Ow=function(){function t(e,n){var r=this;n||(n={}),qi.call(this,e),this.d=new a0(n,function(i,a,o){r.ondata(i,a,o)}),this.compression=8,this.flag=rd(n.level),this.terminate=this.d.terminate}return t.prototype.process=function(e,n){this.d.push(e,n)},t.prototype.push=function(e,n){qi.prototype.push.call(this,e,n)},t}(),Nw=function(){function t(e){this.ondata=e,this.u=[],this.d=1}return t.prototype.add=function(e){var n=this;if(this.ondata||me(5),this.d&2)this.ondata(me(4+(this.d&1)*8,0,1),null,!1);else{var r=Co(e.filename),i=r.length,a=e.comment,o=a&&Co(a),s=i!=e.filename.length||o&&a.length!=o.length,l=i+$i(e.extra)+30;i>65535&&this.ondata(me(11,0,1),null,!1);var c=new Ee(l);Ou(c,0,e,r,s,-1);var u=[c],p=function(){for(var m=0,f=u;m<f.length;m++){var y=f[m];n.ondata(null,y,!1)}u=[]},d=this.d;this.d=0;var h=this.u.length,b=Ku(e,{f:r,u:s,o,t:function(){e.terminate&&e.terminate()},r:function(){if(p(),d){var m=n.u[h+1];m?m.r():n.d=1}d=1}}),g=0;e.ondata=function(m,f,y){if(m)n.ondata(m,f,y),n.terminate();else if(g+=f.length,u.push(f),y){var w=new Ee(16);Le(w,0,134695760),Le(w,4,e.crc),Le(w,8,g),Le(w,12,e.size),u.push(w),b.c=g,b.b=l+g+16,b.crc=e.crc,b.size=e.size,d&&b.r(),d=1}else d&&p()},this.u.push(b)}},t.prototype.end=function(){var e=this;if(this.d&2){this.ondata(me(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},t.prototype.e=function(){for(var e=0,n=0,r=0,i=0,a=this.u;i<a.length;i++){var o=a[i];r+=46+o.f.length+$i(o.extra)+(o.o?o.o.length:0)}for(var s=new Ee(r+22),l=0,c=this.u;l<c.length;l++){var o=c[l];Ou(s,e,o,o.f,o.u,-o.c-2,n,o.o),e+=46+o.f.length+$i(o.extra)+(o.o?o.o.length:0),n+=o.b}h0(s,e,this.u.length,r,n),this.ondata(null,s,!0),this.d=2},t.prototype.terminate=function(){for(var e=0,n=this.u;e<n.length;e++){var r=n[e];r.t()}this.d=2},t}();var f0=function(){function t(){}return t.prototype.push=function(e,n){this.ondata(null,e,n)},t.compression=0,t}(),Pw=function(){function t(){var e=this;this.i=new wt(function(n,r){e.ondata(null,n,r)})}return t.prototype.push=function(e,n){try{this.i.push(e,n)}catch(r){this.ondata(r,null,n)}},t.compression=8,t}(),Mw=function(){function t(e,n){var r=this;n<32e4?this.i=new wt(function(i,a){r.ondata(null,i,a)}):(this.i=new Ju(function(i,a,o){r.ondata(i,a,o)}),this.terminate=this.i.terminate)}return t.prototype.push=function(e,n){this.i.terminate&&(e=Zt(e,0)),this.i.push(e,n)},t.compression=8,t}(),Iw=function(){function t(e){this.onfile=e,this.k=[],this.o={0:f0},this.p=on}return t.prototype.push=function(e,n){var r=this;if(this.onfile||me(5),this.p||me(4),this.c>0){var i=Math.min(this.c,e.length),a=e.subarray(0,i);if(this.c-=i,this.d?this.d.push(a,!this.c):this.k[0].push(a),e=e.subarray(i),e.length)return this.push(e,n)}else{var o=0,s=0,l=void 0,c=void 0;this.p.length?e.length?(c=new Ee(this.p.length+e.length),c.set(this.p),c.set(e,this.p.length)):c=this.p:c=e;for(var u=c.length,p=this.c,d=p&&this.d,h=function(){var f,y=Vn(c,s);if(y==67324752){o=1,l=s,b.d=null,b.c=0;var w=Gn(c,s+6),E=Gn(c,s+8),_=w&2048,T=w&8,v=Gn(c,s+26),x=Gn(c,s+28);if(u>s+30+v+x){var S=[];b.k.unshift(S),o=2;var k=Vn(c,s+18),C=Vn(c,s+22),N=d0(c.subarray(s+30,s+=30+v),!_);k==4294967295?(f=T?[-2]:p0(c,s),k=f[0],C=f[1]):T&&(k=-1),s+=x,b.c=k;var O,B={name:N,compression:E,start:function(){if(B.ondata||me(5),!k)B.ondata(null,on,!0);else{var P=r.o[E];P||B.ondata(me(14,"unknown compression type "+E,1),null,!1),O=k<0?new P(N):new P(N,k,C),O.ondata=function(ne,K,ee){B.ondata(ne,K,ee)};for(var U=0,z=S;U<z.length;U++){var j=z[U];O.push(j,!1)}r.k[0]==S&&r.c?r.d=O:O.push(on,!0)}},terminate:function(){O&&O.terminate&&O.terminate()}};k>=0&&(B.size=k,B.originalSize=C),b.onfile(B)}return"break"}else if(p){if(y==134695760)return l=s+=12+(p==-2&&8),o=3,b.c=0,"break";if(y==33639248)return l=s-=4,o=3,b.c=0,"break"}},b=this;s<u-4;++s){var g=h();if(g==="break")break}if(this.p=on,p<0){var m=o?c.subarray(0,l-12-(p==-2&&8)-(Vn(c,l-16)==134695760&&4)):c.subarray(0,s);d?d.push(m,!!o):this.k[+(o==2)].push(m)}if(o&2)return this.push(c.subarray(s),n);this.p=c.subarray(s)}n&&(this.c&&me(13),this.p=null)},t.prototype.register=function(e){this.o[e.compression]=e},t}();var Po;function jo(t){return[...t.v,(t.i?"!":"")+t.n].join(":")}function pd(t,e=","){return t.map(jo).join(e)}var hd=typeof CSS<"u"&&CSS.escape||(t=>t.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function Gi(t){for(var e=9,n=t.length;n--;)e=Math.imul(e^t.charCodeAt(n),1597334677);return"#"+((e^e>>>9)>>>0).toString(36)}function er(t,e="@media "){return e+rt(t).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function rt(t=[]){return Array.isArray(t)?t:t==null?[]:[t]}function g0(){}var Qe={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function fd(t){return t.match(/[-=:;]/g)?.length||0}function Uo(t){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(t)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(fd(t),15)<<18}var b0=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function qo({n:t,i:e,v:n=[]},r,i,a){t&&(t=jo({n:t,i:e,v:n})),a=[...rt(a)];for(let s of n){let l=r.theme("screens",s);for(let c of rt(l&&er(l)||r.v(s))){var o;a.push(c),i|=l?67108864|Uo(c):s=="dark"?1073741824:c[0]=="@"?Uo(c):(o=c,1<<~(/:([a-z-]+)/.test(o)&&~b0.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:t,p:i,r:a,i:e}}var Ko=new Map;function id(t){if(t.d){let e=[],n=Mo(t.r.reduce((r,i)=>i[0]=="@"?(e.push(i),r):i?Mo(r,a=>Mo(i,o=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o);if(s){let l=a.indexOf(s[1]);return~l?a.slice(0,l)+s[0]+a.slice(l+s[1].length):Io(a,o)}return Io(o,a)})):r,"&"),r=>Io(r,t.n?"."+hd(t.n):""));return n&&e.push(n.replace(/:merge\((.+?)\)/g,"$1")),e.reduceRight((r,i)=>i+"{"+r+"}",t.d)}}function Mo(t,e){return t.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,i)=>e(r)+i)}function Io(t,e){return t.replace(/&/g,e)}var ad=new Intl.Collator("en",{numeric:!0});function y0(t,e){for(var n=0,r=t.length;n<r;){let i=r+n>>1;0>=md(t[i],e)?n=i+1:r=i}return r}function md(t,e){let n=t.p&Qe.o;return n==(e.p&Qe.o)&&(n==Qe.b||n==Qe.o)?0:t.p-e.p||t.o-e.o||ad.compare(od(t.n),od(e.n))||ad.compare(sd(t.n),sd(e.n))}function od(t){return(t||"").split(/:/).pop().split("/").pop()||"\0"}function sd(t){return(t||"").replace(/\W/g,e=>String.fromCharCode(127+e.charCodeAt(0)))+"\0"}function Fo(t,e){return Math.round(parseInt(t,16)*e)}function zt(t,e={}){if(typeof t=="function")return t(e);let{opacityValue:n="1",opacityVariable:r}=e,i=r?`var(${r})`:n;if(t.includes("<alpha-value>"))return t.replace("<alpha-value>",i);if(t[0]=="#"&&(t.length==4||t.length==7)){let a=(t.length-1)/3,o=[17,1,.062272][a-1];return`rgba(${[Fo(t.substr(1,a),o),Fo(t.substr(1+a,a),o),Fo(t.substr(1+2*a,a),o),i]})`}return i=="1"?t:i=="0"?"#0000":t.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${i})`)}function gd(t,e,n,r,i=[]){return function a(o,{n:s,p:l,r:c=[],i:u},p){let d=[],h="",b=0,g=0;for(let y in o||{}){var m,f;let w=o[y];if(y[0]=="@"){if(!w)continue;if(y[1]=="a"){d.push(...yd(s,l,Vo(""+w),p,l,c,u,!0));continue}if(y[1]=="l"){for(let E of rt(w))d.push(...a(E,{n:s,p:(m=Qe[y[7]],l&~Qe.o|m),r:y[7]=="d"?[]:c,i:u},p));continue}if(y[1]=="i"){d.push(...rt(w).map(E=>({p:-1,o:0,r:[],d:y+" "+E})));continue}if(y[1]=="k"){d.push({p:Qe.d,o:0,r:[y],d:a(w,{p:Qe.d},p).map(id).join("")});continue}if(y[1]=="f"){d.push(...rt(w).map(E=>({p:Qe.d,o:0,r:[y],d:a(E,{p:Qe.d},p).map(id).join("")})));continue}}if(typeof w!="object"||Array.isArray(w))y=="label"&&w?s=w+Gi(JSON.stringify([l,u,o])):(w||w===0)&&(y=y.replace(/[A-Z]/g,E=>"-"+E.toLowerCase()),g+=1,b=Math.max(b,(f=y)[0]=="-"?0:fd(f)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(f)?+!!RegExp.$1||-!!RegExp.$2:0)+1),h+=(h?";":"")+rt(w).map(E=>p.s(y,bd(""+E,p.theme)+(u?" !important":""))).join(";"));else if(y[0]=="@"||y.includes("&")){let E=l;y[0]=="@"&&(y=y.replace(/\bscreen\(([^)]+)\)/g,(_,T)=>{let v=p.theme("screens",T);return v?(E|=67108864,er(v,"")):_}),E|=Uo(y)),d.push(...a(w,{n:s,p:E,r:[...c,y],i:u},p))}else d.push(...a(w,{p:l,r:[...c,y]},p))}return d.unshift({n:s,p:l,o:Math.max(0,15-g)+1.5*Math.min(b||15,15),r:c,d:h}),d.sort(md)}(t,qo(e,n,r,i),n)}function bd(t,e){return t.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,i,a,o="")=>{let s=e(i,o);return typeof s=="function"&&/color|fill|stroke/i.test(i)?zt(s):""+rt(s).filter(l=>Object(l)!==l)})}function Go(t,e){let n,r=[];for(let i of t)i.d&&i.n?n?.p==i.p&&""+n.r==""+i.r?(n.c=[n.c,i.c].filter(Boolean).join(" "),n.d=n.d+";"+i.d):r.push(n={...i,n:i.n&&e}):r.push({...i,n:i.n&&e});return r}function $o(t,e,n=Qe.u,r,i){let a=[];for(let o of t)for(let s of function(l,c,u,p,d){l={...l,i:l.i||d};let h=function(b,g){let m=Ko.get(b.n);return m?m(b,g):g.r(b.n,b.v[0]=="dark")}(l,c);return h?typeof h=="string"?({r:p,p:u}=qo(l,c,u,p),Go($o(Vo(h),c,u,p,l.i),l.n)):Array.isArray(h)?h.map(b=>{var g,m;return{o:0,...b,r:[...rt(p),...rt(b.r)],p:(g=u,m=b.p??u,g&~Qe.o|m)}}):gd(h,l,c,u,p):[{c:jo(l),p:0,o:0,r:[]}]}(o,e,n,r,i))a.splice(y0(a,s),0,s);return a}function yd(t,e,n,r,i,a,o,s){return Go((s?n.flatMap(l=>$o([l],r,i,a,o)):$o(n,r,i,a,o)).map(l=>l.p&Qe.o&&(l.n||e==Qe.b)?{...l,p:l.p&~Qe.o|e,o:0}:l),t)}function w0(t,e,n,r){var i;return i=(a,o)=>{let{n:s,p:l,r:c,i:u}=qo(a,o,e);return n&&yd(s,e,n,o,l,c,u,r)},Ko.set(t,i),t}function Bo(t,e,n){if(t[t.length-1]!="("){let r=[],i=!1,a=!1,o="";for(let s of t)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),i=!i),s.endsWith(":")){r[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),a=!a),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(o+=(o&&"-")+s)}o&&(a&&(o="-"+o),e[0].push({n:o,v:r.filter(v0),i}))}}function v0(t,e,n){return n.indexOf(t)==e}var ld=new Map;function Vo(t){let e=ld.get(t);if(!e){let n=[],r=[[]],i=0,a=0,o=null,s=0,l=(c,u=0)=>{i!=s&&(n.push(t.slice(i,s+u)),c&&Bo(n,r)),i=s+1};for(;s<t.length;s++){let c=t[s];if(a)t[s-1]!="\\"&&(a+=+(c=="[")||-(c=="]"));else if(c=="[")a+=1;else if(o)t[s-1]!="\\"&&o.test(t.slice(s))&&(o=null,i=s+RegExp.lastMatch.length);else if(c=="/"&&t[s-1]!="\\"&&(t[s+1]=="*"||t[s+1]=="/"))o=t[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(c=="(")l(),n.push(c);else if(c==":")t[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(c)){l(!0);let u=n.lastIndexOf("(");if(c==")"){let p=n[u-1];if(/[~@]$/.test(p)){let d=r.shift();n.length=u,Bo([...n,"#"],r);let{v:h}=r[0].pop();for(let b of d)b.v.splice(+(b.v[0]=="dark")-+(h[0]=="dark"),h.length);Bo([...n,w0(p.length>1?p.slice(0,-1)+Gi(JSON.stringify([p,d])):p+"("+pd(d)+")",Qe.a,d,/@$/.test(p))],r)}u=n.lastIndexOf("(",u-1)}n.length=u+1}else/[~@]/.test(c)&&t[s+1]=="("&&r.unshift([])}l(!0),ld.set(t,e=r[0])}return e}function wd(t,e,n){return e.reduce((r,i,a)=>r+n(i)+t[a+1],t[0])}function vd(t,e){return Array.isArray(t)&&Array.isArray(t.raw)?wd(t,e,n=>zo(n).trim()):e.filter(Boolean).reduce((n,r)=>n+zo(r),t?zo(t):"")}function zo(t){let e,n="";if(t&&typeof t=="object")if(Array.isArray(t))(e=vd(t[0],t.slice(1)))&&(n+=" "+e);else for(let r in t)t[r]&&(n+=" "+r);else t!=null&&typeof t!="boolean"&&(n+=" "+t);return n}var $w=xd("@"),Ww=xd("~");function xd(t){return new Proxy(function(n,...r){return e("",n,r)},{get(n,r){return r in n?n[r]:function(i,...a){return e(r,i,a)}}});function e(n,r,i){return pd(Vo(n+t+"("+vd(r,i)+")"))}}function Wo(t,e){return Array.isArray(t)?cd(wd(t,e,n=>n!=null&&typeof n!="boolean"?n:"")):typeof t=="string"?cd(t):[t]}var x0=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function cd(t){let e;t=t.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],i=[];for(;e=x0.exec(t);)e[4]&&(n.shift(),i.shift()),e[3]?(i.unshift(e[3]),n.unshift({}),r.push(i.reduce((a,o)=>({[o]:a}),n[0]))):e[4]||(n[0][e[1]]&&(n.unshift({}),r.push(i.reduce((a,o)=>({[o]:a}),n[0]))),n[0][e[1]]=e[2]);return r}function Td(t,...e){var n;let r=Wo(t,e),i=(r.find(a=>a.label)?.label||"css")+Gi(JSON.stringify(r));return n=(a,o)=>Go(r.flatMap(s=>gd(s,a,o,Qe.o)),i),Ko.set(i,n),i}var Hw=new Proxy(function(t,e){return ud("animation",t,e)},{get(t,e){return e in t?t[e]:function(n,r){return ud(e,n,r)}}});function ud(t,e,n){return{toString(){return Td({label:t,"@layer components":{...typeof e=="object"?e:{animation:e},animationName:""+n}})}}}function D(t,e,n){return[t,T0(e,n)]}function T0(t,e){return typeof t=="function"?t:typeof t=="string"&&/^[\w-]+$/.test(t)?(n,r)=>({[t]:e?e(n,r):Ho(n,1)}):n=>t||{[n[1]]:Ho(n,2)}}function Ho(t,e,n=t.slice(e).find(Boolean)||t.$$||t.input){return t.input[0]=="-"?`calc(${n} * -1)`:n}function R(t,e,n,r){return[t,_0(e,n,r)]}function _0(t,e,n){let r=typeof e=="string"?(i,a)=>({[e]:n?n(i,a):i._}):e||(({1:i,_:a},o,s)=>({[i||s]:a}));return(i,a)=>{let o=_d(t||i[1]),s=a.theme(o,i.$$)??cn(i.$$,o,a);if(s!=null)return i._=Ho(i,0,s),r(i,a,o)}}function be(t,e={},n){return[t,S0(e,n)]}function S0(t={},e){return(n,r)=>{let{section:i=_d(n[0]).replace("-","")+"Color"}=t,[a,o]=k0(n.$$);if(!a)return;let s=r.theme(i,a)||cn(a,i,r);if(!s||typeof s=="object")return;let{opacityVariable:l=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:c=i.replace("Color","Opacity"),property:u=i,selector:p}=t,d=r.theme(c,o||"DEFAULT")||o&&cn(o,c,r),h=e||(({_:g})=>{let m=un(u,g);return p?{[p]:m}:m});n._={value:zt(s,{opacityVariable:l||void 0,opacityValue:d||void 0}),color:g=>zt(s,g),opacityVariable:l||void 0,opacityValue:d||void 0};let b=h(n,r);if(!n.dark){let g=r.d(i,a,s);g&&g!==s&&(n._={value:zt(g,{opacityVariable:l||void 0,opacityValue:d||"1"}),color:m=>zt(g,m),opacityVariable:l||void 0,opacityValue:d||void 0},b={"&":b,[r.v("dark")]:h(n,r)})}return b}}function k0(t){return(t.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function un(t,e){let n={};return typeof e=="string"?n[t]=e:(e.opacityVariable&&e.value.includes(e.opacityVariable)&&(n[e.opacityVariable]=e.opacityValue||"1"),n[t]=e.value),n}function cn(t,e,n){if(t[0]=="["&&t.slice(-1)=="]"){if(t=Rr(bd(t.slice(1,-1),n.theme)),!e)return t;if(!(/color|fill|stroke/i.test(e)&&!(/^color:/.test(t)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(t))||/image/i.test(e)&&!(/^image:/.test(t)||/^[a-z-]+\(/.test(t))||/weight/i.test(e)&&!(/^(number|any):/.test(t)||/^\d+$/.test(t))||/position/i.test(e)&&/^(length|size):/.test(t)))return t.replace(/^[a-z-]+:/,"")}}function _d(t){return t.replace(/-./g,e=>e[1].toUpperCase())}function Rr(t){return t.includes("url(")?t.replace(/(.*?)(url\(.*?\))(.*?)/g,(e,n="",r,i="")=>Rr(n)+r+Rr(i)):t.replace(/(^|[^\\])_+/g,(e,n)=>n+" ".repeat(e.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,e=>e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var jw=Symbol();var Sd=new Proxy(g0,{apply(t,e,n){return Po(n[0])},get(t,e){let n=Po[e];return typeof n=="function"?function(){return n.apply(Po,arguments)}:n}});var qw=function t(e){return new Proxy(function(n,...r){return dd(e,"",n,r)},{get(n,r){return r==="bind"?t:r in n?n[r]:function(i,...a){return dd(e,r,i,a)}}})}();function dd(t,e,n,r){return{toString(){let i=Wo(n,r),a=hd(e+Gi(JSON.stringify([e,i])));return(typeof t=="function"?t:Sd)(Td({[`@keyframes ${a}`]:Wo(n,r)})),a}}}var Vi={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...vt(4,"rem",4,.5,.5),...vt(12,"rem",4,5),14:"3.5rem",...vt(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:ve("blur"),backdropBrightness:ve("brightness"),backdropContrast:ve("contrast"),backdropGrayscale:ve("grayscale"),backdropHueRotate:ve("hueRotate"),backdropInvert:ve("invert"),backdropOpacity:ve("opacity"),backdropSaturate:ve("saturate"),backdropSepia:ve("sepia"),backgroundColor:ve("colors"),backgroundImage:{none:"none"},backgroundOpacity:ve("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...vt(200,"",100,0,50),...vt(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:t})=>({DEFAULT:t("colors.gray.200","currentColor"),...t("colors")}),borderOpacity:ve("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:ve("spacing"),borderWidth:{DEFAULT:"1px",...Rt(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:ve("colors"),caretColor:ve("colors"),accentColor:({theme:t})=>({auto:"auto",...t("colors")}),contrast:{...vt(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:ve("borderColor"),divideOpacity:ve("borderOpacity"),divideWidth:ve("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:({theme:t})=>({...t("colors"),none:"none"}),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:t})=>({...t("spacing"),...Or(2,6),...Or(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:ve("spacing"),gradientColorStops:ve("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:t})=>({...t("spacing"),...Or(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:t})=>({...t("spacing"),...Or(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...vt(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:t})=>({auto:"auto",...t("spacing")}),maxHeight:({theme:t})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...t("spacing")}),maxWidth:({theme:t,breakpoints:e})=>({...e(t("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...vt(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:ve("spacing"),placeholderColor:ve("colors"),placeholderOpacity:ve("opacity"),outlineColor:ve("colors"),outlineOffset:Rt(8,"px"),outlineWidth:Rt(8,"px"),ringColor:({theme:t})=>({...t("colors"),DEFAULT:"#3b82f6"}),ringOffsetColor:ve("colors"),ringOffsetWidth:Rt(8,"px"),ringOpacity:({theme:t})=>({...t("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...Rt(8,"px")},rotate:{...Rt(2,"deg"),...Rt(12,"deg",3),...Rt(180,"deg",45)},saturate:vt(200,"",100,0,50),scale:{...vt(150,"",100,0,50),...vt(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:ve("spacing"),scrollPadding:ve("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...Rt(2,"deg"),...Rt(12,"deg",3)},space:ve("spacing"),stroke:({theme:t})=>({...t("colors"),none:"none"}),strokeWidth:vt(2),textColor:ve("colors"),textDecorationColor:ve("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...Rt(8,"px")},textUnderlineOffset:{auto:"auto",...Rt(8,"px")},textIndent:ve("spacing"),textOpacity:ve("opacity"),transitionDuration:({theme:t})=>({...t("durations"),DEFAULT:"150ms"}),transitionDelay:ve("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:t})=>({...t("spacing"),...Or(2,4),full:"100%"}),width:({theme:t})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...t("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...vt(50,"",1,0,10),auto:"auto"}};function Or(t,e){let n={};do for(var r=1;r<t;r++)n[`${r}/${t}`]=Number((r/t*100).toFixed(6))+"%";while(++t<=e);return n}function Rt(t,e,n=0){let r={};for(;n<=t;n=2*n||1)r[n]=n+e;return r}function vt(t,e="",n=1,r=0,i=1,a={}){for(;r<=t;r+=i)a[r]=r/n+e;return a}function ve(t){return({theme:e})=>e(t)}var E0={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${Vi.fontFamily.sans})`,fontFeatureSettings:"theme(fontFamily.sans[1].fontFeatureSettings, normal)"},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${Vi.fontFamily.mono})`,fontFeatureSettings:"theme(fontFamily.mono[1].fontFeatureSettings, normal)",fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}};var C0=[D("\\[([-\\w]+):(.+)]",({1:t,2:e},n)=>({"@layer overrides":{"&":{[t]:cn(`[${e}]`,"",n)}}})),D("(group|peer)([~/][^-[]+)?",({input:t},{h:e})=>[{c:e(t)}]),R("aspect-","aspectRatio"),D("container",(t,{theme:e})=>{let{screens:n=e("screens"),center:r,padding:i}=e("container"),a={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...o("xs")};for(let s in n){let l=n[s];typeof l=="string"&&(a[er(l)]={"&":{maxWidth:l,...o(s)}})}return a;function o(s){let l=i&&(typeof i=="string"?i:i[s]||i.DEFAULT);if(l)return{paddingRight:l,paddingLeft:l}}}),R("content-","content",({_:t})=>({"--tw-content":t,content:"var(--tw-content)"})),D("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),D("box-(border|content)","boxSizing",({1:t})=>t+"-box"),D("hidden",{display:"none"}),D("table-(auto|fixed)","tableLayout"),D(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",D("isolate","isolation"),D("object-(contain|cover|fill|none|scale-down)","objectFit"),R("object-","objectPosition"),D("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",Xi),D("overscroll(-[xy])?-(auto|contain|none)",({1:t="",2:e})=>({["overscroll-behavior"+t]:e})),D("(static|fixed|absolute|relative|sticky)","position"),R("-?inset(-[xy])?(?:$|-)","inset",({1:t,_:e})=>({top:t!="-x"&&e,right:t!="-y"&&e,bottom:t!="-x"&&e,left:t!="-y"&&e})),R("-?(top|bottom|left|right)(?:$|-)","inset"),D("(visible|collapse)","visibility"),D("invisible",{visibility:"hidden"}),R("-?z-","zIndex"),D("flex-((row|col)(-reverse)?)","flexDirection",kd),D("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),R("(flex-(?:grow|shrink))(?:$|-)"),R("(flex)-"),R("grow(?:$|-)","flexGrow"),R("shrink(?:$|-)","flexShrink"),R("basis-","flexBasis"),R("-?(order)-"),"-?(order)-(\\d+)",R("grid-cols-","gridTemplateColumns"),D("grid-cols-(\\d+)","gridTemplateColumns",Ld),R("col-","gridColumn"),D("col-(span)-(\\d+)","gridColumn",Cd),R("col-start-","gridColumnStart"),D("col-start-(auto|\\d+)","gridColumnStart"),R("col-end-","gridColumnEnd"),D("col-end-(auto|\\d+)","gridColumnEnd"),R("grid-rows-","gridTemplateRows"),D("grid-rows-(\\d+)","gridTemplateRows",Ld),R("row-","gridRow"),D("row-(span)-(\\d+)","gridRow",Cd),R("row-start-","gridRowStart"),D("row-start-(auto|\\d+)","gridRowStart"),R("row-end-","gridRowEnd"),D("row-end-(auto|\\d+)","gridRowEnd"),D("grid-flow-((row|col)(-dense)?)","gridAutoFlow",t=>Xi(kd(t))),D("grid-flow-(dense)","gridAutoFlow"),R("auto-cols-","gridAutoColumns"),R("auto-rows-","gridAutoRows"),R("gap-x(?:$|-)","gap","columnGap"),R("gap-y(?:$|-)","gap","rowGap"),R("gap(?:$|-)","gap"),"(justify-(?:items|self))-",D("justify-","justifyContent",Ad),D("(content|items|self)-",t=>({["align-"+t[1]]:Ad(t)})),D("(place-(content|items|self))-",({1:t,$$:e})=>({[t]:("wun".includes(e[3])?"space-":"")+e})),R("p([xytrbl])?(?:$|-)","padding",tr("padding")),R("-?m([xytrbl])?(?:$|-)","margin",tr("margin")),R("-?space-(x|y)(?:$|-)","space",({1:t,_:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${t}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[t]]:`calc(${e} * calc(1 - var(--tw-space-${t}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[t]]:`calc(${e} * var(--tw-space-${t}-reverse))`}})),D("space-(x|y)-reverse",({1:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${t}-reverse`]:"1"}})),R("w-","width"),R("min-w-","minWidth"),R("max-w-","maxWidth"),R("h-","height"),R("min-h-","minHeight"),R("max-h-","maxHeight"),R("font-","fontWeight"),R("font-","fontFamily",({_:t})=>typeof(t=rt(t))[1]=="string"?{fontFamily:Ut(t)}:{fontFamily:Ut(t[0]),...t[1]}),D("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),D("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),D("italic","fontStyle"),D("not-italic",{fontStyle:"normal"}),D("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:t,2:e="",3:n})=>e=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(e[0])?"numeric-spacing":e?"numeric-figure":t)]:t,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)",..._n({"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"})}),R("tracking-","letterSpacing"),R("leading-","lineHeight"),D("list-(inside|outside)","listStylePosition"),R("list-","listStyleType"),D("list-","listStyleType"),R("placeholder-opacity-","placeholderOpacity",({_:t})=>({"&::placeholder":{"--tw-placeholder-opacity":t}})),be("placeholder-",{property:"color",selector:"&::placeholder"}),D("text-(left|center|right|justify|start|end)","textAlign"),D("text-(ellipsis|clip)","textOverflow"),R("text-opacity-","textOpacity","--tw-text-opacity"),be("text-",{property:"color"}),R("text-","fontSize",({_:t})=>typeof t=="string"?{fontSize:t}:{fontSize:t[0],...typeof t[1]=="string"?{lineHeight:t[1]}:t[1]}),R("indent-","textIndent"),D("(overline|underline|line-through)","textDecorationLine"),D("no-underline",{textDecorationLine:"none"}),R("underline-offset-","textUnderlineOffset"),be("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),R("decoration-","textDecorationThickness"),D("decoration-","textDecorationStyle"),D("(uppercase|lowercase|capitalize)","textTransform"),D("normal-case",{textTransform:"none"}),D("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),D("align-","verticalAlign"),D("whitespace-","whiteSpace"),D("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),D("break-words",{overflowWrap:"break-word"}),D("break-all",{wordBreak:"break-all"}),D("break-keep",{wordBreak:"keep-all"}),be("caret-",{opacityVariable:!1,opacitySection:"opacity"}),be("accent-",{opacityVariable:!1,opacitySection:"opacity"}),D("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:t})=>`linear-gradient(to ${Pn(t," ")},var(--tw-gradient-stops))`),be("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-gradient-from":t.value,"--tw-gradient-to":t.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),be("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-gradient-to":t.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${t.value},var(--tw-gradient-to)`})),be("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),D("bg-(fixed|local|scroll)","backgroundAttachment"),D("bg-origin-(border|padding|content)","backgroundOrigin",({1:t})=>t+"-box"),D(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),D("bg-blend-","backgroundBlendMode"),D("bg-clip-(border|padding|content|text)","backgroundClip",({1:t})=>t+(t=="text"?"":"-box")),R("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),be("bg-",{section:"backgroundColor"}),R("bg-","backgroundImage"),R("bg-","backgroundPosition"),D("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",Xi),R("bg-","backgroundSize"),R("rounded(?:$|-)","borderRadius"),R("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:t,_:e})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[t]||[t,t];return{[`border-${Pn(n[0])}-radius`]:e,[`border-${Pn(n[1])}-radius`]:e}}),D("border-(collapse|separate)","borderCollapse"),R("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),D("border-(solid|dashed|dotted|double|none)","borderStyle"),R("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:t,_:e})=>({..._n({"--tw-border-spacing-x":"0","--tw-border-spacing-y":"0"}),["--tw-border-spacing"+(t||"-x")]:e,["--tw-border-spacing"+(t||"-y")]:e,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),be("border-([xytrbl])-",{section:"borderColor"},tr("border","Color")),be("border-"),R("border-([xytrbl])(?:$|-)","borderWidth",tr("border","Width")),R("border(?:$|-)","borderWidth"),R("divide-opacity(?:$|-)","divideOpacity",({_:t})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":t}})),D("divide-(solid|dashed|dotted|double|none)",({1:t})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:t}})),D("divide-([xy]-reverse)",({1:t})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+t]:"1"}})),R("divide-([xy])(?:$|-)","divideWidth",({1:t,_:e})=>{let n={x:"lr",y:"tb"}[t];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${t}-reverse`]:"0",[`border-${Pn(n[0])}Width`]:`calc(${e} * calc(1 - var(--tw-divide-${t}-reverse)))`,[`border-${Pn(n[1])}Width`]:`calc(${e} * var(--tw-divide-${t}-reverse))`}}}),be("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),R("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),be("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),R("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),D("ring-inset",{"--tw-ring-inset":"inset"}),be("ring-",{property:"--tw-ring-color"}),R("ring(?:$|-)","ringWidth",({_:t},{theme:e})=>({..._n({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":e("ringOffsetWidth","","0px"),"--tw-ring-offset-color":zt(e("ringOffsetColor","","#fff")),"--tw-ring-color":zt(e("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":e("ringOpacity","","0.5")}}),"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${t} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),be("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-shadow-color":t.value,"--tw-shadow":"var(--tw-shadow-colored)"})),R("shadow(?:$|-)","boxShadow",({_:t})=>({..._n({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}),"--tw-shadow":Ut(t),"--tw-shadow-colored":Ut(t).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),R("(opacity)-"),D("mix-blend-","mixBlendMode"),...Ed(),...Ed("backdrop-"),R("transition(?:$|-)","transitionProperty",(t,{theme:e})=>({transitionProperty:Ut(t),transitionTimingFunction:t._=="none"?void 0:Ut(e("transitionTimingFunction","")),transitionDuration:t._=="none"?void 0:Ut(e("transitionDuration",""))})),R("duration(?:$|-)","transitionDuration","transitionDuration",Ut),R("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",Ut),R("delay(?:$|-)","transitionDelay","transitionDelay",Ut),R("animate(?:$|-)","animation",(t,{theme:e,h:n,e:r})=>{let i=Ut(t),a=i.split(" "),o=e("keyframes",a[0]);return o?{["@keyframes "+(a[0]=r(n(a[0])))]:o,animation:a.join(" ")}:{animation:i}}),"(transform)-(none)",D("transform",Yo),D("transform-(cpu|gpu)",({1:t})=>({"--tw-transform":Dd(t=="gpu")})),R("scale(-[xy])?-","scale",({1:t,_:e})=>({["--tw-scale"+(t||"-x")]:e,["--tw-scale"+(t||"-y")]:e,...Yo()})),R("-?(rotate)-","rotate",Xo),R("-?(translate-[xy])-","translate",Xo),R("-?(skew-[xy])-","skew",Xo),D("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",Xi),"(appearance)-",R("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",R("(cursor)-"),"(cursor)-",D("snap-(none)","scroll-snap-type"),D("snap-(x|y|both)",({1:t})=>({..._n({"--tw-scroll-snap-strictness":"proximity"}),"scroll-snap-type":t+" var(--tw-scroll-snap-strictness)"})),D("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),D("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),D("snap-(normal|always)","scroll-snap-stop"),D("scroll-(auto|smooth)","scroll-behavior"),R("scroll-p([xytrbl])?(?:$|-)","padding",tr("scroll-padding")),R("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",tr("scroll-margin")),D("touch-(auto|none|manipulation)","touch-action"),D("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:t,2:e,3:n})=>({..._n({"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}),[`--tw-${e?"pan-x":n?"pan-y":t}`]:t,"touch-action":"var(--tw-touch-action)"})),D("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),D("outline",{outlineStyle:"solid"}),D("outline-(dashed|dotted|double)","outlineStyle"),R("-?(outline-offset)-"),be("outline-",{opacityVariable:!1,opacitySection:"opacity"}),R("outline-","outlineWidth"),"(pointer-events)-",R("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:t})=>({x:"horizontal",y:"vertical"})[t]||t||"both"],D("select-(none|text|all|auto)","userSelect"),be("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),be("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),R("stroke-","strokeWidth"),D("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),D("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function Xi(t){return(typeof t=="string"?t:t[1]).replace(/-/g," ").trim()}function kd(t){return(typeof t=="string"?t:t[1]).replace("col","column")}function Pn(t,e="-"){let n=[];for(let r of t)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(e)}function Ut(t){return t&&""+(t._||t)}function Ad({$$:t}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[t[3]||""]||"")+t}function tr(t,e=""){return({1:n,_:r})=>{let i={x:"lr",y:"tb"}[n]||n+n;return i?{...un(t+"-"+Pn(i[0])+e,r),...un(t+"-"+Pn(i[1])+e,r)}:un(t+e,r)}}function Ed(t=""){let e=["blur","brightness","contrast","grayscale","hue-rotate","invert",t&&"opacity","saturate","sepia",!t&&"drop-shadow"].filter(Boolean),n={};for(let r of e)n[`--tw-${t}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={..._n(n),[`${t}filter`]:e.map(r=>`var(--tw-${t}${r})`).join(" ")},[`(${t}filter)-(none)`,D(`${t}filter`,n),...e.map(r=>R(`${r[0]=="h"?"-?":""}(${t}${r})(?:$|-)`,r,({1:i,_:a})=>({[`--tw-${i}`]:rt(a).map(o=>`${r}(${o})`).join(" "),...n})))]}function Xo({1:t,_:e}){return{["--tw-"+t]:e,...Yo()}}function Yo(){return{..._n({"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":Dd()}),transform:"var(--tw-transform)"}}function Dd(t){return[t?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function Cd({1:t,2:e}){return`${t} ${e} / ${t} ${e}`}function Ld({1:t}){return`repeat(${t},minmax(0,1fr))`}function _n(t){return{"@layer defaults":{"*,::before,::after":t,"::backdrop":t}}}var Rd={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...xt(4,"rem",4,.5,.5),...xt(12,"rem",4,5),14:"3.5rem",...xt(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:xe("blur"),backdropBrightness:xe("brightness"),backdropContrast:xe("contrast"),backdropGrayscale:xe("grayscale"),backdropHueRotate:xe("hueRotate"),backdropInvert:xe("invert"),backdropOpacity:xe("opacity"),backdropSaturate:xe("saturate"),backdropSepia:xe("sepia"),backgroundColor:xe("colors"),backgroundImage:{none:"none"},backgroundOpacity:xe("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...xt(200,"",100,0,50),...xt(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:t})=>({DEFAULT:t("colors.gray.200","currentColor"),...t("colors")}),borderOpacity:xe("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:xe("spacing"),borderWidth:{DEFAULT:"1px",...Ot(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:xe("colors"),caretColor:xe("colors"),accentColor:({theme:t})=>({auto:"auto",...t("colors")}),contrast:{...xt(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:xe("borderColor"),divideOpacity:xe("borderOpacity"),divideWidth:xe("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:({theme:t})=>({...t("colors"),none:"none"}),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:t})=>({...t("spacing"),...Nr(2,6),...Nr(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:xe("spacing"),gradientColorStops:xe("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:t})=>({...t("spacing"),...Nr(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:t})=>({...t("spacing"),...Nr(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...xt(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:t})=>({auto:"auto",...t("spacing")}),maxHeight:({theme:t})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...t("spacing")}),maxWidth:({theme:t,breakpoints:e})=>({...e(t("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...xt(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:xe("spacing"),placeholderColor:xe("colors"),placeholderOpacity:xe("opacity"),outlineColor:xe("colors"),outlineOffset:Ot(8,"px"),outlineWidth:Ot(8,"px"),ringColor:({theme:t})=>({...t("colors"),DEFAULT:"#3b82f6"}),ringOffsetColor:xe("colors"),ringOffsetWidth:Ot(8,"px"),ringOpacity:({theme:t})=>({...t("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...Ot(8,"px")},rotate:{...Ot(2,"deg"),...Ot(12,"deg",3),...Ot(180,"deg",45)},saturate:xt(200,"",100,0,50),scale:{...xt(150,"",100,0,50),...xt(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:xe("spacing"),scrollPadding:xe("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...Ot(2,"deg"),...Ot(12,"deg",3)},space:xe("spacing"),stroke:({theme:t})=>({...t("colors"),none:"none"}),strokeWidth:xt(2),textColor:xe("colors"),textDecorationColor:xe("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...Ot(8,"px")},textUnderlineOffset:{auto:"auto",...Ot(8,"px")},textIndent:xe("spacing"),textOpacity:xe("opacity"),transitionDuration:({theme:t})=>({...t("durations"),DEFAULT:"150ms"}),transitionDelay:xe("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:t})=>({...t("spacing"),...Nr(2,4),full:"100%"}),width:({theme:t})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...t("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...xt(50,"",1,0,10),auto:"auto"}};function Nr(t,e){let n={};do for(var r=1;r<t;r++)n[`${r}/${t}`]=Number((r/t*100).toFixed(6))+"%";while(++t<=e);return n}function Ot(t,e,n=0){let r={};for(;n<=t;n=2*n||1)r[n]=n+e;return r}function xt(t,e="",n=1,r=0,i=1,a={}){for(;r<=t;r+=i)a[r]=r/n+e;return a}function xe(t){return({theme:e})=>e(t)}var Cv={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${Rd.fontFamily.sans})`,fontFeatureSettings:"theme(fontFamily.sans[1].fontFeatureSettings, normal)"},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${Rd.fontFamily.mono})`,fontFeatureSettings:"theme(fontFamily.mono[1].fontFeatureSettings, normal)",fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},Dv=[D("\\[([-\\w]+):(.+)]",({1:t,2:e},n)=>({"@layer overrides":{"&":{[t]:cn(`[${e}]`,"",n)}}})),D("(group|peer)([~/][^-[]+)?",({input:t},{h:e})=>[{c:e(t)}]),R("aspect-","aspectRatio"),D("container",(t,{theme:e})=>{let{screens:n=e("screens"),center:r,padding:i}=e("container"),a={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...o("xs")};for(let s in n){let l=n[s];typeof l=="string"&&(a[er(l)]={"&":{maxWidth:l,...o(s)}})}return a;function o(s){let l=i&&(typeof i=="string"?i:i[s]||i.DEFAULT);if(l)return{paddingRight:l,paddingLeft:l}}}),R("content-","content",({_:t})=>({"--tw-content":t,content:"var(--tw-content)"})),D("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),D("box-(border|content)","boxSizing",({1:t})=>t+"-box"),D("hidden",{display:"none"}),D("table-(auto|fixed)","tableLayout"),D(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",D("isolate","isolation"),D("object-(contain|cover|fill|none|scale-down)","objectFit"),R("object-","objectPosition"),D("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",Yi),D("overscroll(-[xy])?-(auto|contain|none)",({1:t="",2:e})=>({["overscroll-behavior"+t]:e})),D("(static|fixed|absolute|relative|sticky)","position"),R("-?inset(-[xy])?(?:$|-)","inset",({1:t,_:e})=>({top:t!="-x"&&e,right:t!="-y"&&e,bottom:t!="-x"&&e,left:t!="-y"&&e})),R("-?(top|bottom|left|right)(?:$|-)","inset"),D("(visible|collapse)","visibility"),D("invisible",{visibility:"hidden"}),R("-?z-","zIndex"),D("flex-((row|col)(-reverse)?)","flexDirection",Od),D("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),R("(flex-(?:grow|shrink))(?:$|-)"),R("(flex)-"),R("grow(?:$|-)","flexGrow"),R("shrink(?:$|-)","flexShrink"),R("basis-","flexBasis"),R("-?(order)-"),"-?(order)-(\\d+)",R("grid-cols-","gridTemplateColumns"),D("grid-cols-(\\d+)","gridTemplateColumns",Id),R("col-","gridColumn"),D("col-(span)-(\\d+)","gridColumn",Md),R("col-start-","gridColumnStart"),D("col-start-(auto|\\d+)","gridColumnStart"),R("col-end-","gridColumnEnd"),D("col-end-(auto|\\d+)","gridColumnEnd"),R("grid-rows-","gridTemplateRows"),D("grid-rows-(\\d+)","gridTemplateRows",Id),R("row-","gridRow"),D("row-(span)-(\\d+)","gridRow",Md),R("row-start-","gridRowStart"),D("row-start-(auto|\\d+)","gridRowStart"),R("row-end-","gridRowEnd"),D("row-end-(auto|\\d+)","gridRowEnd"),D("grid-flow-((row|col)(-dense)?)","gridAutoFlow",t=>Yi(Od(t))),D("grid-flow-(dense)","gridAutoFlow"),R("auto-cols-","gridAutoColumns"),R("auto-rows-","gridAutoRows"),R("gap-x(?:$|-)","gap","columnGap"),R("gap-y(?:$|-)","gap","rowGap"),R("gap(?:$|-)","gap"),"(justify-(?:items|self))-",D("justify-","justifyContent",Nd),D("(content|items|self)-",t=>({["align-"+t[1]]:Nd(t)})),D("(place-(content|items|self))-",({1:t,$$:e})=>({[t]:("wun".includes(e[3])?"space-":"")+e})),R("p([xytrbl])?(?:$|-)","padding",nr("padding")),R("-?m([xytrbl])?(?:$|-)","margin",nr("margin")),R("-?space-(x|y)(?:$|-)","space",({1:t,_:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${t}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[t]]:`calc(${e} * calc(1 - var(--tw-space-${t}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[t]]:`calc(${e} * var(--tw-space-${t}-reverse))`}})),D("space-(x|y)-reverse",({1:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${t}-reverse`]:"1"}})),R("w-","width"),R("min-w-","minWidth"),R("max-w-","maxWidth"),R("h-","height"),R("min-h-","minHeight"),R("max-h-","maxHeight"),R("font-","fontWeight"),R("font-","fontFamily",({_:t})=>typeof(t=rt(t))[1]=="string"?{fontFamily:$t(t)}:{fontFamily:$t(t[0]),...t[1]}),D("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),D("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),D("italic","fontStyle"),D("not-italic",{fontStyle:"normal"}),D("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:t,2:e="",3:n})=>e=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(e[0])?"numeric-spacing":e?"numeric-figure":t)]:t,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)",...Sn({"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"})}),R("tracking-","letterSpacing"),R("leading-","lineHeight"),D("list-(inside|outside)","listStylePosition"),R("list-","listStyleType"),D("list-","listStyleType"),R("placeholder-opacity-","placeholderOpacity",({_:t})=>({"&::placeholder":{"--tw-placeholder-opacity":t}})),be("placeholder-",{property:"color",selector:"&::placeholder"}),D("text-(left|center|right|justify|start|end)","textAlign"),D("text-(ellipsis|clip)","textOverflow"),R("text-opacity-","textOpacity","--tw-text-opacity"),be("text-",{property:"color"}),R("text-","fontSize",({_:t})=>typeof t=="string"?{fontSize:t}:{fontSize:t[0],...typeof t[1]=="string"?{lineHeight:t[1]}:t[1]}),R("indent-","textIndent"),D("(overline|underline|line-through)","textDecorationLine"),D("no-underline",{textDecorationLine:"none"}),R("underline-offset-","textUnderlineOffset"),be("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),R("decoration-","textDecorationThickness"),D("decoration-","textDecorationStyle"),D("(uppercase|lowercase|capitalize)","textTransform"),D("normal-case",{textTransform:"none"}),D("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),D("align-","verticalAlign"),D("whitespace-","whiteSpace"),D("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),D("break-words",{overflowWrap:"break-word"}),D("break-all",{wordBreak:"break-all"}),D("break-keep",{wordBreak:"keep-all"}),be("caret-",{opacityVariable:!1,opacitySection:"opacity"}),be("accent-",{opacityVariable:!1,opacitySection:"opacity"}),D("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:t})=>`linear-gradient(to ${Mn(t," ")},var(--tw-gradient-stops))`),be("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-gradient-from":t.value,"--tw-gradient-to":t.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),be("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-gradient-to":t.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${t.value},var(--tw-gradient-to)`})),be("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),D("bg-(fixed|local|scroll)","backgroundAttachment"),D("bg-origin-(border|padding|content)","backgroundOrigin",({1:t})=>t+"-box"),D(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),D("bg-blend-","backgroundBlendMode"),D("bg-clip-(border|padding|content|text)","backgroundClip",({1:t})=>t+(t=="text"?"":"-box")),R("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),be("bg-",{section:"backgroundColor"}),R("bg-","backgroundImage"),R("bg-","backgroundPosition"),D("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",Yi),R("bg-","backgroundSize"),R("rounded(?:$|-)","borderRadius"),R("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:t,_:e})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[t]||[t,t];return{[`border-${Mn(n[0])}-radius`]:e,[`border-${Mn(n[1])}-radius`]:e}}),D("border-(collapse|separate)","borderCollapse"),R("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),D("border-(solid|dashed|dotted|double|none)","borderStyle"),R("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:t,_:e})=>({...Sn({"--tw-border-spacing-x":"0","--tw-border-spacing-y":"0"}),["--tw-border-spacing"+(t||"-x")]:e,["--tw-border-spacing"+(t||"-y")]:e,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),be("border-([xytrbl])-",{section:"borderColor"},nr("border","Color")),be("border-"),R("border-([xytrbl])(?:$|-)","borderWidth",nr("border","Width")),R("border(?:$|-)","borderWidth"),R("divide-opacity(?:$|-)","divideOpacity",({_:t})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":t}})),D("divide-(solid|dashed|dotted|double|none)",({1:t})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:t}})),D("divide-([xy]-reverse)",({1:t})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+t]:"1"}})),R("divide-([xy])(?:$|-)","divideWidth",({1:t,_:e})=>{let n={x:"lr",y:"tb"}[t];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${t}-reverse`]:"0",[`border-${Mn(n[0])}Width`]:`calc(${e} * calc(1 - var(--tw-divide-${t}-reverse)))`,[`border-${Mn(n[1])}Width`]:`calc(${e} * var(--tw-divide-${t}-reverse))`}}}),be("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),R("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),be("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),R("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),D("ring-inset",{"--tw-ring-inset":"inset"}),be("ring-",{property:"--tw-ring-color"}),R("ring(?:$|-)","ringWidth",({_:t},{theme:e})=>({...Sn({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":e("ringOffsetWidth","","0px"),"--tw-ring-offset-color":zt(e("ringOffsetColor","","#fff")),"--tw-ring-color":zt(e("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":e("ringOpacity","","0.5")}}),"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${t} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),be("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-shadow-color":t.value,"--tw-shadow":"var(--tw-shadow-colored)"})),R("shadow(?:$|-)","boxShadow",({_:t})=>({...Sn({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}),"--tw-shadow":$t(t),"--tw-shadow-colored":$t(t).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),R("(opacity)-"),D("mix-blend-","mixBlendMode"),...Pd(),...Pd("backdrop-"),R("transition(?:$|-)","transitionProperty",(t,{theme:e})=>({transitionProperty:$t(t),transitionTimingFunction:t._=="none"?void 0:$t(e("transitionTimingFunction","")),transitionDuration:t._=="none"?void 0:$t(e("transitionDuration",""))})),R("duration(?:$|-)","transitionDuration","transitionDuration",$t),R("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",$t),R("delay(?:$|-)","transitionDelay","transitionDelay",$t),R("animate(?:$|-)","animation",(t,{theme:e,h:n,e:r})=>{let i=$t(t),a=i.split(" "),o=e("keyframes",a[0]);return o?{["@keyframes "+(a[0]=r(n(a[0])))]:o,animation:a.join(" ")}:{animation:i}}),"(transform)-(none)",D("transform",Qo),D("transform-(cpu|gpu)",({1:t})=>({"--tw-transform":Fd(t=="gpu")})),R("scale(-[xy])?-","scale",({1:t,_:e})=>({["--tw-scale"+(t||"-x")]:e,["--tw-scale"+(t||"-y")]:e,...Qo()})),R("-?(rotate)-","rotate",Zo),R("-?(translate-[xy])-","translate",Zo),R("-?(skew-[xy])-","skew",Zo),D("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",Yi),"(appearance)-",R("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",R("(cursor)-"),"(cursor)-",D("snap-(none)","scroll-snap-type"),D("snap-(x|y|both)",({1:t})=>({...Sn({"--tw-scroll-snap-strictness":"proximity"}),"scroll-snap-type":t+" var(--tw-scroll-snap-strictness)"})),D("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),D("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),D("snap-(normal|always)","scroll-snap-stop"),D("scroll-(auto|smooth)","scroll-behavior"),R("scroll-p([xytrbl])?(?:$|-)","padding",nr("scroll-padding")),R("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",nr("scroll-margin")),D("touch-(auto|none|manipulation)","touch-action"),D("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:t,2:e,3:n})=>({...Sn({"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}),[`--tw-${e?"pan-x":n?"pan-y":t}`]:t,"touch-action":"var(--tw-touch-action)"})),D("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),D("outline",{outlineStyle:"solid"}),D("outline-(dashed|dotted|double)","outlineStyle"),R("-?(outline-offset)-"),be("outline-",{opacityVariable:!1,opacitySection:"opacity"}),R("outline-","outlineWidth"),"(pointer-events)-",R("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:t})=>({x:"horizontal",y:"vertical"})[t]||t||"both"],D("select-(none|text|all|auto)","userSelect"),be("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),be("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),R("stroke-","strokeWidth"),D("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),D("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function Yi(t){return(typeof t=="string"?t:t[1]).replace(/-/g," ").trim()}function Od(t){return(typeof t=="string"?t:t[1]).replace("col","column")}function Mn(t,e="-"){let n=[];for(let r of t)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(e)}function $t(t){return t&&""+(t._||t)}function Nd({$$:t}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[t[3]||""]||"")+t}function nr(t,e=""){return({1:n,_:r})=>{let i={x:"lr",y:"tb"}[n]||n+n;return i?{...un(t+"-"+Mn(i[0])+e,r),...un(t+"-"+Mn(i[1])+e,r)}:un(t+e,r)}}function Pd(t=""){let e=["blur","brightness","contrast","grayscale","hue-rotate","invert",t&&"opacity","saturate","sepia",!t&&"drop-shadow"].filter(Boolean),n={};for(let r of e)n[`--tw-${t}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={...Sn(n),[`${t}filter`]:e.map(r=>`var(--tw-${t}${r})`).join(" ")},[`(${t}filter)-(none)`,D(`${t}filter`,n),...e.map(r=>R(`${r[0]=="h"?"-?":""}(${t}${r})(?:$|-)`,r,({1:i,_:a})=>({[`--tw-${i}`]:rt(a).map(o=>`${r}(${o})`).join(" "),...n})))]}function Zo({1:t,_:e}){return{["--tw-"+t]:e,...Qo()}}function Qo(){return{...Sn({"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":Fd()}),transform:"var(--tw-transform)"}}function Fd(t){return[t?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function Md({1:t,2:e}){return`${t} ${e} / ${t} ${e}`}function Id({1:t}){return`repeat(${t},minmax(0,1fr))`}function Sn(t){return{"@layer defaults":{"*,::before,::after":t,"::backdrop":t}}}var Hd,ye,jd,D0,Pr,Bd,R0,qd={},Kd=[],O0=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function kn(t,e){for(var n in e)t[n]=e[n];return t}function Gd(t){var e=t.parentNode;e&&e.removeChild(t)}function Jo(t,e,n,r,i){var a={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++jd};return i==null&&ye.vnode!=null&&ye.vnode(a),a}function ir(t){return t.children}function Zi(t,e){this.props=t,this.context=e}function rr(t,e){if(e==null)return t.__?rr(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?rr(t):null}function Vd(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Vd(t)}}function zd(t){(!t.__d&&(t.__d=!0)&&Pr.push(t)&&!Qi.__r++||Bd!==ye.debounceRendering)&&((Bd=ye.debounceRendering)||setTimeout)(Qi)}function Qi(){for(var t;Qi.__r=Pr.length;)t=Pr.sort(function(e,n){return e.__v.__b-n.__v.__b}),Pr=[],t.some(function(e){var n,r,i,a,o,s;e.__d&&(o=(a=(n=e).__v).__e,(s=n.__P)&&(r=[],(i=kn({},a)).__v=a.__v+1,Qd(s,a,i,n.__n,s.ownerSVGElement!==void 0,a.__h!=null?[o]:null,r,o??rr(a),a.__h),P0(r,a),a.__e!=o&&Vd(a)))})}function Xd(t,e,n,r,i,a,o,s,l,c){var u,p,d,h,b,g,m,f=r&&r.__k||Kd,y=f.length;for(n.__k=[],u=0;u<e.length;u++)if((h=n.__k[u]=(h=e[u])==null||typeof h=="boolean"?null:typeof h=="string"||typeof h=="number"||typeof h=="bigint"?Jo(null,h,null,null,h):Array.isArray(h)?Jo(ir,{children:h},null,null,null):h.__b>0?Jo(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):h)!=null){if(h.__=n,h.__b=n.__b+1,(d=f[u])===null||d&&h.key==d.key&&h.type===d.type)f[u]=void 0;else for(p=0;p<y;p++){if((d=f[p])&&h.key==d.key&&h.type===d.type){f[p]=void 0;break}d=null}Qd(t,h,d=d||qd,i,a,o,s,l,c),b=h.__e,(p=h.ref)&&d.ref!=p&&(m||(m=[]),d.ref&&m.push(d.ref,null,h),m.push(p,h.__c||b,h)),b!=null?(g==null&&(g=b),typeof h.type=="function"&&h.__k===d.__k?h.__d=l=Yd(h,l,t):l=Zd(t,h,d,f,b,l),typeof n.type=="function"&&(n.__d=l)):l&&d.__e==l&&l.parentNode!=t&&(l=rr(d))}for(n.__e=g,u=y;u--;)f[u]!=null&&(typeof n.type=="function"&&f[u].__e!=null&&f[u].__e==n.__d&&(n.__d=rr(r,u+1)),ep(f[u],f[u]));if(m)for(u=0;u<m.length;u++)Jd(m[u],m[++u],m[++u])}function Yd(t,e,n){for(var r,i=t.__k,a=0;i&&a<i.length;a++)(r=i[a])&&(r.__=t,e=typeof r.type=="function"?Yd(r,e,n):Zd(n,r,r,i,r.__e,e));return e}function Zd(t,e,n,r,i,a){var o,s,l;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(n==null||i!=a||i.parentNode==null)e:if(a==null||a.parentNode!==t)t.appendChild(i),o=null;else{for(s=a,l=0;(s=s.nextSibling)&&l<r.length;l+=2)if(s==i)break e;t.insertBefore(i,a),o=a}return o!==void 0?o:i.nextSibling}function N0(t,e,n,r,i){var a;for(a in n)a==="children"||a==="key"||a in e||Ji(t,a,null,n[a],r);for(a in e)i&&typeof e[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===e[a]||Ji(t,a,e[a],n[a],r)}function Ud(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||O0.test(e)?n:n+"px"}function Ji(t,e,n,r,i){var a;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||Ud(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||Ud(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")a=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+a]=n,n?r||t.addEventListener(e,a?Wd:$d,a):t.removeEventListener(e,a?Wd:$d,a);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function $d(t){this.l[t.type+!1](ye.event?ye.event(t):t)}function Wd(t){this.l[t.type+!0](ye.event?ye.event(t):t)}function Qd(t,e,n,r,i,a,o,s,l){var c,u,p,d,h,b,g,m,f,y,w,E,_,T=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,s=e.__e=n.__e,e.__h=null,a=[s]),(c=ye.__b)&&c(e);try{e:if(typeof T=="function"){if(m=e.props,f=(c=T.contextType)&&r[c.__c],y=c?f?f.props.value:c.__:r,n.__c?g=(u=e.__c=n.__c).__=u.__E:("prototype"in T&&T.prototype.render?e.__c=u=new T(m,y):(e.__c=u=new Zi(m,y),u.constructor=T,u.render=I0),f&&f.sub(u),u.props=m,u.state||(u.state={}),u.context=y,u.__n=r,p=u.__d=!0,u.__h=[]),u.__s==null&&(u.__s=u.state),T.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=kn({},u.__s)),kn(u.__s,T.getDerivedStateFromProps(m,u.__s))),d=u.props,h=u.state,p)T.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(T.getDerivedStateFromProps==null&&m!==d&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(m,y),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(m,u.__s,y)===!1||e.__v===n.__v){u.props=m,u.state=u.__s,e.__v!==n.__v&&(u.__d=!1),u.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(v){v&&(v.__=e)}),u.__h.length&&o.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(m,u.__s,y),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(d,h,b)})}if(u.context=y,u.props=m,u.__v=e,u.__P=t,w=ye.__r,E=0,"prototype"in T&&T.prototype.render)u.state=u.__s,u.__d=!1,w&&w(e),c=u.render(u.props,u.state,u.context);else do u.__d=!1,w&&w(e),c=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++E<25);u.state=u.__s,u.getChildContext!=null&&(r=kn(kn({},r),u.getChildContext())),p||u.getSnapshotBeforeUpdate==null||(b=u.getSnapshotBeforeUpdate(d,h)),_=c!=null&&c.type===ir&&c.key==null?c.props.children:c,Xd(t,Array.isArray(_)?_:[_],e,n,r,i,a,o,s,l),u.base=e.__e,e.__h=null,u.__h.length&&o.push(u),g&&(u.__E=u.__=null),u.__e=!1}else a==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=M0(n.__e,e,n,r,i,a,o,l);(c=ye.diffed)&&c(e)}catch(v){e.__v=null,(l||a!=null)&&(e.__e=s,e.__h=!!l,a[a.indexOf(s)]=null),ye.__e(v,e,n)}}function P0(t,e){ye.__c&&ye.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){ye.__e(r,n.__v)}})}function M0(t,e,n,r,i,a,o,s){var l,c,u,p=n.props,d=e.props,h=e.type,b=0;if(h==="svg"&&(i=!0),a!=null){for(;b<a.length;b++)if((l=a[b])&&"setAttribute"in l==!!h&&(h?l.localName===h:l.nodeType===3)){t=l,a[b]=null;break}}if(t==null){if(h===null)return document.createTextNode(d);t=i?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,d.is&&d),a=null,s=!1}if(h===null)p===d||s&&t.data===d||(t.data=d);else{if(a=a&&Hd.call(t.childNodes),c=(p=n.props||qd).dangerouslySetInnerHTML,u=d.dangerouslySetInnerHTML,!s){if(a!=null)for(p={},b=0;b<t.attributes.length;b++)p[t.attributes[b].name]=t.attributes[b].value;(u||c)&&(u&&(c&&u.__html==c.__html||u.__html===t.innerHTML)||(t.innerHTML=u&&u.__html||""))}if(N0(t,d,p,i,s),u)e.__k=[];else if(b=e.props.children,Xd(t,Array.isArray(b)?b:[b],e,n,r,i&&h!=="foreignObject",a,o,a?a[0]:n.__k&&rr(n,0),s),a!=null)for(b=a.length;b--;)a[b]!=null&&Gd(a[b]);s||("value"in d&&(b=d.value)!==void 0&&(b!==t.value||h==="progress"&&!b||h==="option"&&b!==p.value)&&Ji(t,"value",b,p.value,!1),"checked"in d&&(b=d.checked)!==void 0&&b!==t.checked&&Ji(t,"checked",b,p.checked,!1))}return t}function Jd(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){ye.__e(r,n)}}function ep(t,e,n){var r,i;if(ye.unmount&&ye.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Jd(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){ye.__e(a,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&ep(r[i],e,typeof t.type!="function");n||t.__e==null||Gd(t.__e),t.__=t.__e=t.__d=void 0}function I0(t,e,n){return this.constructor(t,n)}Hd=Kd.slice,ye={__e:function(t,e,n,r){for(var i,a,o;e=e.__;)if((i=e.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(t)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),o=i.__d),o)return i.__E=i}catch(s){t=s}throw t}},jd=0,D0=function(t){return t!=null&&t.constructor===void 0},Zi.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=kn({},this.state),typeof t=="function"&&(t=t(kn({},n),this.props)),t&&kn(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),zd(this))},Zi.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),zd(this))},Zi.prototype.render=ir,Pr=[],Qi.__r=0,R0=0;var F0,Qt,es,tp;var lp=[],ts=[],np=ye.__b,rp=ye.__r,ip=ye.diffed,ap=ye.__c,op=ye.unmount;function B0(){for(var t;t=lp.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(ea),t.__H.__h.forEach(ns),t.__H.__h=[]}catch(e){t.__H.__h=[],ye.__e(e,t.__v)}}ye.__b=function(t){typeof t.type!="function"||t.o||t.type===ir?t.o||(t.o=t.__&&t.__.o?t.__.o:""):t.o=(t.__&&t.__.o?t.__.o:"")+(t.__&&t.__.__k?t.__.__k.indexOf(t):0),Qt=null,np&&np(t)},ye.__r=function(t){rp&&rp(t),F0=0;var e=(Qt=t.__c).__H;e&&(es===Qt?(e.__h=[],Qt.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=ts,n.__N=n.i=void 0})):(e.__h.forEach(ea),e.__h.forEach(ns),e.__h=[])),es=Qt},ye.diffed=function(t){ip&&ip(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(lp.push(e)!==1&&tp===ye.requestAnimationFrame||((tp=ye.requestAnimationFrame)||z0)(B0)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==ts&&(n.__=n.__V),n.i=void 0,n.__V=ts})),es=Qt=null},ye.__c=function(t,e){e.some(function(n){try{n.__h.forEach(ea),n.__h=n.__h.filter(function(r){return!r.__||ns(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],ye.__e(r,n.__v)}}),ap&&ap(t,e)},ye.unmount=function(t){op&&op(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ea(r)}catch(i){e=i}}),n.__H=void 0,e&&ye.__e(e,n.__v))};var sp=typeof requestAnimationFrame=="function";function z0(t){var e,n=function(){clearTimeout(r),sp&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);sp&&(e=requestAnimationFrame(n))}function ea(t){var e=Qt,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),Qt=e}function ns(t){var e=Qt;t.__c=t.__(),Qt=e}var ta=globalThis||(typeof window<"u"?window:self),U0=Object.create,is=Object.defineProperty,$0=Object.getOwnPropertyDescriptor,W0=Object.getOwnPropertyNames,H0=Object.getPrototypeOf,j0=Object.prototype.hasOwnProperty,q0=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),K0=(t,e)=>{for(var n in e)is(t,n,{get:e[n],enumerable:!0})},rs=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of W0(e))!j0.call(t,i)&&i!==n&&is(t,i,{get:()=>e[i],enumerable:!(r=$0(e,i))||r.enumerable});return t},G0=(t,e,n)=>(rs(t,e,"default"),n&&rs(n,e,"default")),up=(t,e,n)=>(n=t!=null?U0(H0(t)):{},rs(e||!t||!t.__esModule?is(n,"default",{value:t,enumerable:!0}):n,t)),dp=q0((t,e)=>{(function(n,r){typeof define=="function"&&define.amd?define([],r):typeof t<"u"?r():(r(),n.FileSaver={})})(t,function(){"use strict";function n(c,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type)?new Blob(["\uFEFF",c],{type:c.type}):c}function r(c,u,p){var d=new XMLHttpRequest;d.open("GET",c),d.responseType="blob",d.onload=function(){l(d.response,u,p)},d.onerror=function(){},d.send()}function i(c){var u=new XMLHttpRequest;u.open("HEAD",c,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function a(c){try{c.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),c.dispatchEvent(u)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof ta=="object"&&ta.global===ta?ta:void 0,s=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(c,u,p){var d=o.URL||o.webkitURL,h=document.createElement("a");u=u||c.name||"download",h.download=u,h.rel="noopener",typeof c=="string"?(h.href=c,h.origin===location.origin?a(h):i(h.href)?r(c,u,p):a(h,h.target="_blank")):(h.href=d.createObjectURL(c),setTimeout(function(){d.revokeObjectURL(h.href)},4e4),setTimeout(function(){a(h)},0))}:"msSaveOrOpenBlob"in navigator?function(c,u,p){if(u=u||c.name||"download",typeof c!="string")navigator.msSaveOrOpenBlob(n(c,p),u);else if(i(c))r(c,u,p);else{var d=document.createElement("a");d.href=c,d.target="_blank",setTimeout(function(){a(d)})}}:function(c,u,p,d){if(d=d||open("","_blank"),d&&(d.document.title=d.document.body.innerText="downloading..."),typeof c=="string")return r(c,u,p);var h=c.type==="application/octet-stream",b=/constructor/i.test(o.HTMLElement)||o.safari,g=/CriOS\/[\d]+/.test(navigator.userAgent);if((g||h&&b||s)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var w=m.result;w=g?w:w.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=w:location=w,d=null},m.readAsDataURL(c)}else{var f=o.URL||o.webkitURL,y=f.createObjectURL(c);d?d.location=y:location.href=y,d=null,setTimeout(function(){f.revokeObjectURL(y)},4e4)}});o.saveAs=l.saveAs=l,typeof e<"u"&&(e.exports=l)})}),pp={};K0(pp,{default:()=>Mr});var V0=up(dp());G0(pp,up(dp()));var{default:cp,...X0}=V0,Mr=cp!==void 0?cp:X0;function Ir(){let t,e="pending",n=new Promise((r,i)=>{t={async resolve(a){await a,e="fulfilled",r(a)},reject(a){e="rejected",i(a)}}});return Object.defineProperty(n,"state",{get:()=>e}),Object.assign(n,t)}var hp=class{#e=0;#t=[];#n=[];#r=Ir();add(e){++this.#e,this.#i(e[Symbol.asyncIterator]())}async#i(e){try{let{value:n,done:r}=await e.next();r?--this.#e:this.#t.push({iterator:e,value:n})}catch(n){this.#n.push(n)}this.#r.resolve()}async*iterate(){for(;this.#e>0;){await this.#r;for(let e=0;e<this.#t.length;e++){let{iterator:n,value:r}=this.#t[e];yield r,this.#i(n)}if(this.#n.length){for(let e of this.#n)throw e;this.#n.length=0}this.#t.length=0,this.#r=Ir()}}[Symbol.asyncIterator](){return this.iterate()}};var{Deno:fp}=globalThis,nT=typeof fp?.noColor=="boolean"?fp.noColor:!0;var rT=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function as(t){let e=atob(t),n=e.length,r=new Uint8Array(n);for(let i=0;i<n;i++)r[i]=e.charCodeAt(i);return r}var dT=Number.isNaN||function(t){return typeof t=="number"&&t!==t};var na=globalThis||(typeof window<"u"?window:self),Q0=Object.create,ss=Object.defineProperty,J0=Object.getOwnPropertyDescriptor,eb=Object.getOwnPropertyNames,tb=Object.getPrototypeOf,nb=Object.prototype.hasOwnProperty,rb=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),ib=(t,e)=>{for(var n in e)ss(t,n,{get:e[n],enumerable:!0})},os=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of eb(e))!nb.call(t,i)&&i!==n&&ss(t,i,{get:()=>e[i],enumerable:!(r=J0(e,i))||r.enumerable});return t},ab=(t,e,n)=>(os(t,e,"default"),n&&os(n,e,"default")),gp=(t,e,n)=>(n=t!=null?Q0(tb(t)):{},os(e||!t||!t.__esModule?ss(n,"default",{value:t,enumerable:!0}):n,t)),bp=rb((t,e)=>{var n="Expected a function",r=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u=typeof na=="object"&&na&&na.Object===Object&&na,p=typeof self=="object"&&self&&self.Object===Object&&self,d=u||p||Function("return this")(),h=Object.prototype,b=h.toString,g=Math.max,m=Math.min,f=function(){return d.Date.now()};function y(x,S,k){var C,N,O,B,P,U,z=0,j=!1,ne=!1,K=!0;if(typeof x!="function")throw new TypeError(n);S=v(S)||0,E(k)&&(j=!!k.leading,ne="maxWait"in k,O=ne?g(v(k.maxWait)||0,S):O,K="trailing"in k?!!k.trailing:K);function ee(Q){var ae=C,oe=N;return C=N=void 0,z=Q,B=x.apply(oe,ae),B}function L(Q){return z=Q,P=setTimeout(G,S),j?ee(Q):B}function M(Q){var ae=Q-U,oe=Q-z,se=S-ae;return ne?m(se,O-oe):se}function H(Q){var ae=Q-U,oe=Q-z;return U===void 0||ae>=S||ae<0||ne&&oe>=O}function G(){var Q=f();if(H(Q))return X(Q);P=setTimeout(G,M(Q))}function X(Q){return P=void 0,K&&C?ee(Q):(C=N=void 0,B)}function ue(){P!==void 0&&clearTimeout(P),z=0,C=U=N=P=void 0}function pe(){return P===void 0?B:X(f())}function he(){var Q=f(),ae=H(Q);if(C=arguments,N=this,U=Q,ae){if(P===void 0)return L(U);if(ne)return P=setTimeout(G,S),ee(U)}return P===void 0&&(P=setTimeout(G,S)),B}return he.cancel=ue,he.flush=pe,he}function w(x,S,k){var C=!0,N=!0;if(typeof x!="function")throw new TypeError(n);return E(k)&&(C="leading"in k?!!k.leading:C,N="trailing"in k?!!k.trailing:N),y(x,S,{leading:C,maxWait:S,trailing:N})}function E(x){var S=typeof x;return!!x&&(S=="object"||S=="function")}function _(x){return!!x&&typeof x=="object"}function T(x){return typeof x=="symbol"||_(x)&&b.call(x)==i}function v(x){if(typeof x=="number")return x;if(T(x))return r;if(E(x)){var S=typeof x.valueOf=="function"?x.valueOf():x;x=E(S)?S+"":S}if(typeof x!="string")return x===0?x:+x;x=x.replace(a,"");var k=s.test(x);return k||l.test(x)?c(x.slice(2),k?2:8):o.test(x)?r:+x}e.exports=w}),yp={};ib(yp,{default:()=>ls});var ob=gp(bp());ab(yp,gp(bp()));var{default:mp,...sb}=ob,ls=mp!==void 0?mp:sb;var lb=Object.create,us=Object.defineProperty,cb=Object.getOwnPropertyDescriptor,ub=Object.getOwnPropertyNames,db=Object.getPrototypeOf,pb=Object.prototype.hasOwnProperty,hb=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),fb=(t,e)=>{for(var n in e)us(t,n,{get:e[n],enumerable:!0})},cs=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ub(e))!pb.call(t,i)&&i!==n&&us(t,i,{get:()=>e[i],enumerable:!(r=cb(e,i))||r.enumerable});return t},mb=(t,e,n)=>(cs(t,e,"default"),n&&cs(n,e,"default")),vp=(t,e,n)=>(n=t!=null?lb(db(t)):{},cs(e||!t||!t.__esModule?us(n,"default",{value:t,enumerable:!0}):n,t)),xp=hb((t,e)=>{(function(n,r){typeof t=="object"&&typeof e=="object"?e.exports=r():typeof define=="function"&&define.amd?define([],r):typeof t=="object"?t.notie=r():n.notie=r()})(t,function(){return function(n){function r(a){if(i[a])return i[a].exports;var o=i[a]={i:a,l:!1,exports:{}};return n[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var i={};return r.m=n,r.c=i,r.i=function(a){return a},r.d=function(a,o,s){r.o(a,o)||Object.defineProperty(a,o,{configurable:!1,enumerable:!0,get:s})},r.n=function(a){var o=a&&a.__esModule?function(){return a.default}:function(){return a};return r.d(o,"a",o),o},r.o=function(a,o){return Object.prototype.hasOwnProperty.call(a,o)},r.p="",r(r.s=1)}([function(n,r){n.exports=function(i){return i.webpackPolyfill||(i.deprecate=function(){},i.paths=[],i.children||(i.children=[]),Object.defineProperty(i,"loaded",{enumerable:!0,get:function(){return i.l}}),Object.defineProperty(i,"id",{enumerable:!0,get:function(){return i.i}}),i.webpackPolyfill=1),i}},function(n,r,i){"use strict";(function(a){var o,s,l,c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u};(function(u,p){c(r)==="object"&&c(a)==="object"?a.exports=p():(s=[],o=p,l=typeof o=="function"?o.apply(r,s):o,l!==void 0&&(a.exports=l))})(void 0,function(){return function(u){function p(h){if(d[h])return d[h].exports;var b=d[h]={i:h,l:!1,exports:{}};return u[h].call(b.exports,b,b.exports,p),b.l=!0,b.exports}var d={};return p.m=u,p.c=d,p.i=function(h){return h},p.d=function(h,b,g){p.o(h,b)||Object.defineProperty(h,b,{configurable:!1,enumerable:!0,get:g})},p.n=function(h){var b=h&&h.__esModule?function(){return h.default}:function(){return h};return p.d(b,"a",b),b},p.o=function(h,b){return Object.prototype.hasOwnProperty.call(h,b)},p.p="",p(p.s=0)}([function(u,p,d){function h(L,M){var H={};for(var G in L)M.indexOf(G)>=0||Object.prototype.hasOwnProperty.call(L,G)&&(H[G]=L[G]);return H}Object.defineProperty(p,"__esModule",{value:!0});var b=typeof Symbol=="function"&&c(Symbol.iterator)==="symbol"?function(L){return typeof L>"u"?"undefined":c(L)}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L>"u"?"undefined":c(L)},g=Object.assign||function(L){for(var M=1;M<arguments.length;M++){var H=arguments[M];for(var G in H)Object.prototype.hasOwnProperty.call(H,G)&&(L[G]=H[G])}return L},m={top:"top",bottom:"bottom"},f={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:m.top,force:m.top,confirm:m.top,input:m.top,select:m.bottom,date:m.top}},y=p.setOptions=function(L){f=g({},f,L,{classes:g({},f.classes,L.classes),ids:g({},f.ids,L.ids),positions:g({},f.positions,L.positions)})},w=function(){return new Promise(function(L){return setTimeout(L,0)})},E=function(L){return new Promise(function(M){return setTimeout(M,1e3*L)})},_=function(){document.activeElement&&document.activeElement.blur()},T=function(){var L="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(M){var H=16*Math.random()|0,G=M==="x"?H:3&H|8;return G.toString(16)});return"notie-"+L},v={1:f.classes.backgroundSuccess,success:f.classes.backgroundSuccess,2:f.classes.backgroundWarning,warning:f.classes.backgroundWarning,3:f.classes.backgroundError,error:f.classes.backgroundError,4:f.classes.backgroundInfo,info:f.classes.backgroundInfo,5:f.classes.backgroundNeutral,neutral:f.classes.backgroundNeutral},x=function(){return f.transitionSelector+" "+f.transitionDuration+"s "+f.transitionCurve},S=function(L){return L.keyCode===13},k=function(L){return L.keyCode===27},C=function(L,M){L.classList.add(f.classes.container),L.style[M]="-10000px",document.body.appendChild(L),L.style[M]="-"+L.offsetHeight+"px",L.listener&&window.addEventListener("keydown",L.listener),w().then(function(){L.style.transition=x(),L.style[M]=0})},N=function(L,M){var H=document.getElementById(L);H&&(H.style[M]="-"+H.offsetHeight+"px",H.listener&&window.removeEventListener("keydown",H.listener),E(f.transitionDuration).then(function(){H.parentNode&&H.parentNode.removeChild(H)}))},O=function(L,M){var H=document.createElement("div");H.id=f.ids.overlay,H.classList.add(f.classes.overlay),H.classList.add(f.classes.backgroundOverlay),H.style.opacity=0,L&&f.overlayClickDismiss&&(H.onclick=function(){N(L.id,M),B()}),document.body.appendChild(H),w().then(function(){H.style.transition=x(),H.style.opacity=f.overlayOpacity})},B=function(){var L=document.getElementById(f.ids.overlay);L.style.opacity=0,E(f.transitionDuration).then(function(){L.parentNode&&L.parentNode.removeChild(L)})},P=p.hideAlerts=function(L){var M=document.getElementsByClassName(f.classes.alert);if(M.length){for(var H=0;H<M.length;H++){var G=M[H];N(G.id,G.position)}L&&E(f.transitionDuration).then(function(){return L()})}},U=p.alert=function(L){var M=L.type,H=M===void 0?4:M,G=L.text,X=L.time,ue=X===void 0?f.alertTime:X,pe=L.stay,he=pe!==void 0&&pe,Q=L.position,ae=Q===void 0?f.positions.alert||ae.top:Q;_(),P();var oe=document.createElement("div"),se=T();oe.id=se,oe.position=ae,oe.classList.add(f.classes.textbox),oe.classList.add(v[H]),oe.classList.add(f.classes.alert),oe.innerHTML='<div class="'+f.classes.textboxInner+'">'+G+"</div>",oe.onclick=function(){return N(se,ae)},oe.listener=function(Y){(S(Y)||k(Y))&&P()},C(oe,ae),ue&&ue<1&&(ue=1),!he&&ue&&E(ue).then(function(){return N(se,ae)})},z=p.force=function(L,M){var H=L.type,G=H===void 0?5:H,X=L.text,ue=L.buttonText,pe=ue===void 0?"OK":ue,he=L.callback,Q=L.position,ae=Q===void 0?f.positions.force||ae.top:Q;_(),P();var oe=document.createElement("div"),se=T();oe.id=se;var Y=document.createElement("div");Y.classList.add(f.classes.textbox),Y.classList.add(f.classes.backgroundInfo),Y.innerHTML='<div class="'+f.classes.textboxInner+'">'+X+"</div>";var ie=document.createElement("div");ie.classList.add(f.classes.button),ie.classList.add(v[G]),ie.innerHTML=pe,ie.onclick=function(){N(se,ae),B(),he?he():M&&M()},oe.appendChild(Y),oe.appendChild(ie),oe.listener=function(de){S(de)&&ie.click()},C(oe,ae),O()},j=p.confirm=function(L,M,H){var G=L.text,X=L.submitText,ue=X===void 0?"Yes":X,pe=L.cancelText,he=pe===void 0?"Cancel":pe,Q=L.submitCallback,ae=L.cancelCallback,oe=L.position,se=oe===void 0?f.positions.confirm||se.top:oe;_(),P();var Y=document.createElement("div"),ie=T();Y.id=ie;var de=document.createElement("div");de.classList.add(f.classes.textbox),de.classList.add(f.classes.backgroundInfo),de.innerHTML='<div class="'+f.classes.textboxInner+'">'+G+"</div>";var fe=document.createElement("div");fe.classList.add(f.classes.button),fe.classList.add(f.classes.elementHalf),fe.classList.add(f.classes.backgroundSuccess),fe.innerHTML=ue,fe.onclick=function(){N(ie,se),B(),Q?Q():M&&M()};var re=document.createElement("div");re.classList.add(f.classes.button),re.classList.add(f.classes.elementHalf),re.classList.add(f.classes.backgroundError),re.innerHTML=he,re.onclick=function(){N(ie,se),B(),ae?ae():H&&H()},Y.appendChild(de),Y.appendChild(fe),Y.appendChild(re),Y.listener=function(Ce){S(Ce)?fe.click():k(Ce)&&re.click()},C(Y,se),O(Y,se)},ne=function(L,M,H){var G=L.text,X=L.submitText,ue=X===void 0?"Submit":X,pe=L.cancelText,he=pe===void 0?"Cancel":pe,Q=L.submitCallback,ae=L.cancelCallback,oe=L.position,se=oe===void 0?f.positions.input||se.top:oe,Y=h(L,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);_(),P();var ie=document.createElement("div"),de=T();ie.id=de;var fe=document.createElement("div");fe.classList.add(f.classes.textbox),fe.classList.add(f.classes.backgroundInfo),fe.innerHTML='<div class="'+f.classes.textboxInner+'">'+G+"</div>";var re=document.createElement("input");re.classList.add(f.classes.inputField),re.setAttribute("autocapitalize",Y.autocapitalize||"none"),re.setAttribute("autocomplete",Y.autocomplete||"off"),re.setAttribute("autocorrect",Y.autocorrect||"off"),re.setAttribute("autofocus",Y.autofocus||"true"),re.setAttribute("inputmode",Y.inputmode||"verbatim"),re.setAttribute("max",Y.max||""),re.setAttribute("maxlength",Y.maxlength||""),re.setAttribute("min",Y.min||""),re.setAttribute("minlength",Y.minlength||""),re.setAttribute("placeholder",Y.placeholder||""),re.setAttribute("spellcheck",Y.spellcheck||"default"),re.setAttribute("step",Y.step||"any"),re.setAttribute("type",Y.type||"text"),re.value=Y.value||"",Y.allowed&&(re.oninput=function(){var Te=void 0;if(Array.isArray(Y.allowed)){for(var Ne="",We=Y.allowed,dt=0;dt<We.length;dt++)We[dt]==="an"?Ne+="0-9a-zA-Z":We[dt]==="a"?Ne+="a-zA-Z":We[dt]==="n"&&(Ne+="0-9"),We[dt]==="s"&&(Ne+=" ");Te=new RegExp("[^"+Ne+"]","g")}else b(Y.allowed)==="object"&&(Te=Y.allowed);re.value=re.value.replace(Te,"")});var Ce=document.createElement("div");Ce.classList.add(f.classes.button),Ce.classList.add(f.classes.elementHalf),Ce.classList.add(f.classes.backgroundSuccess),Ce.innerHTML=ue,Ce.onclick=function(){N(de,se),B(),Q?Q(re.value):M&&M(re.value)};var Me=document.createElement("div");Me.classList.add(f.classes.button),Me.classList.add(f.classes.elementHalf),Me.classList.add(f.classes.backgroundError),Me.innerHTML=he,Me.onclick=function(){N(de,se),B(),ae?ae(re.value):H&&H(re.value)},ie.appendChild(fe),ie.appendChild(re),ie.appendChild(Ce),ie.appendChild(Me),ie.listener=function(Te){S(Te)?Ce.click():k(Te)&&Me.click()},C(ie,se),re.focus(),O(ie,se)};p.input=ne;var K=p.select=function(L,M){var H=L.text,G=L.cancelText,X=G===void 0?"Cancel":G,ue=L.cancelCallback,pe=L.choices,he=L.position,Q=he===void 0?f.positions.select||Q.top:he;_(),P();var ae=document.createElement("div"),oe=T();ae.id=oe;var se=document.createElement("div");se.classList.add(f.classes.textbox),se.classList.add(f.classes.backgroundInfo),se.innerHTML='<div class="'+f.classes.textboxInner+'">'+H+"</div>",ae.appendChild(se),pe.forEach(function(ie,de){var fe=ie.type,re=fe===void 0?1:fe,Ce=ie.text,Me=ie.handler,Te=document.createElement("div");Te.classList.add(v[re]),Te.classList.add(f.classes.button),Te.classList.add(f.classes.selectChoice);var Ne=pe[de+1];Ne&&!Ne.type&&(Ne.type=1),Ne&&Ne.type===re&&Te.classList.add(f.classes.selectChoiceRepeated),Te.innerHTML=Ce,Te.onclick=function(){N(oe,Q),B(),Me()},ae.appendChild(Te)});var Y=document.createElement("div");Y.classList.add(f.classes.backgroundNeutral),Y.classList.add(f.classes.button),Y.innerHTML=X,Y.onclick=function(){N(oe,Q),B(),ue?ue():M&&M()},ae.appendChild(Y),ae.listener=function(ie){k(ie)&&Y.click()},C(ae,Q),O(ae,Q)},ee=p.date=function(L,M,H){var G=L.value,X=G===void 0?new Date:G,ue=L.submitText,pe=ue===void 0?"OK":ue,he=L.cancelText,Q=he===void 0?"Cancel":he,ae=L.submitCallback,oe=L.cancelCallback,se=L.position,Y=se===void 0?f.positions.date||Y.top:se;_(),P();var ie="&#9662",de=document.createElement("div"),fe=document.createElement("div"),re=document.createElement("div"),Ce=function(q){de.innerHTML=f.dateMonths[q.getMonth()],fe.innerHTML=q.getDate(),re.innerHTML=q.getFullYear()},Me=function(q){var Z=new Date(X.getFullYear(),X.getMonth()+1,0).getDate(),le=q.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(le)>Z&&(le=Z.toString()),q.target.textContent=le,Number(le)<1&&(le="1"),X.setDate(Number(le))},Te=function(q){var Z=q.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);q.target.textContent=Z,X.setFullYear(Number(Z))},Ne=function(q){Ce(X)},We=function(q){var Z=new Date(X.getFullYear(),X.getMonth()+q+1,0).getDate();X.getDate()>Z&&X.setDate(Z),X.setMonth(X.getMonth()+q),Ce(X)},dt=function(q){X.setDate(X.getDate()+q),Ce(X)},dn=function(q){var Z=X.getFullYear()+q;Z<0?X.setFullYear(0):X.setFullYear(X.getFullYear()+q),Ce(X)},St=document.createElement("div"),et=T();St.id=et;var jt=document.createElement("div");jt.classList.add(f.classes.backgroundInfo);var He=document.createElement("div");He.classList.add(f.classes.dateSelectorInner);var pt=document.createElement("div");pt.classList.add(f.classes.button),pt.classList.add(f.classes.elementThird),pt.classList.add(f.classes.dateSelectorUp),pt.innerHTML=ie;var je=document.createElement("div");je.classList.add(f.classes.button),je.classList.add(f.classes.elementThird),je.classList.add(f.classes.dateSelectorUp),je.innerHTML=ie;var it=document.createElement("div");it.classList.add(f.classes.button),it.classList.add(f.classes.elementThird),it.classList.add(f.classes.dateSelectorUp),it.innerHTML=ie,de.classList.add(f.classes.element),de.classList.add(f.classes.elementThird),de.innerHTML=f.dateMonths[X.getMonth()],fe.classList.add(f.classes.element),fe.classList.add(f.classes.elementThird),fe.setAttribute("contentEditable",!0),fe.addEventListener("input",Me),fe.addEventListener("blur",Ne),fe.innerHTML=X.getDate(),re.classList.add(f.classes.element),re.classList.add(f.classes.elementThird),re.setAttribute("contentEditable",!0),re.addEventListener("input",Te),re.addEventListener("blur",Ne),re.innerHTML=X.getFullYear();var Pt=document.createElement("div");Pt.classList.add(f.classes.button),Pt.classList.add(f.classes.elementThird),Pt.innerHTML=ie;var I=document.createElement("div");I.classList.add(f.classes.button),I.classList.add(f.classes.elementThird),I.innerHTML=ie;var $=document.createElement("div");$.classList.add(f.classes.button),$.classList.add(f.classes.elementThird),$.innerHTML=ie,pt.onclick=function(){return We(1)},je.onclick=function(){return dt(1)},it.onclick=function(){return dn(1)},Pt.onclick=function(){return We(-1)},I.onclick=function(){return dt(-1)},$.onclick=function(){return dn(-1)};var F=document.createElement("div");F.classList.add(f.classes.button),F.classList.add(f.classes.elementHalf),F.classList.add(f.classes.backgroundSuccess),F.innerHTML=pe,F.onclick=function(){N(et,Y),B(),ae?ae(X):M&&M(X)};var W=document.createElement("div");W.classList.add(f.classes.button),W.classList.add(f.classes.elementHalf),W.classList.add(f.classes.backgroundError),W.innerHTML=Q,W.onclick=function(){N(et,Y),B(),oe?oe(X):H&&H(X)},He.appendChild(pt),He.appendChild(je),He.appendChild(it),He.appendChild(de),He.appendChild(fe),He.appendChild(re),He.appendChild(Pt),He.appendChild(I),He.appendChild($),jt.appendChild(He),St.appendChild(jt),St.appendChild(F),St.appendChild(W),St.listener=function(q){S(q)?F.click():k(q)&&W.click()},C(St,Y),O(St,Y)};p.default={alert:U,force:z,confirm:j,input:ne,select:K,date:ee,setOptions:y,hideAlerts:P}}])})}).call(r,i(0)(n))}])})}),Tp={};fb(Tp,{default:()=>ra});var gb=vp(xp());mb(Tp,vp(xp()));var{default:wp,...bb}=gb,ra=wp!==void 0?wp:bb;var ds=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function ps(t,e,n,r){t.addEventListener?t.addEventListener(e,n,r):t.attachEvent&&t.attachEvent("on".concat(e),function(){n(window.event)})}function Ep(t,e){for(var n=e.slice(0,e.length-1),r=0;r<n.length;r++)n[r]=t[n[r].toLowerCase()];return n}function Cp(t){typeof t!="string"&&(t=""),t=t.replace(/\s/g,"");for(var e=t.split(","),n=e.lastIndexOf("");n>=0;)e[n-1]+=",",e.splice(n,1),n=e.lastIndexOf("");return e}function yb(t,e){for(var n=t.length>=e.length?t:e,r=t.length>=e.length?e:t,i=!0,a=0;a<n.length;a++)r.indexOf(n[a])===-1&&(i=!1);return i}var Br={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":ds?173:189,"=":ds?61:187,";":ds?59:186,"'":222,"[":219,"]":221,"\\":220},en={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},ms={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Je={16:!1,18:!1,17:!1,91:!1},Fe={};for(Fr=1;Fr<20;Fr++)Br["f".concat(Fr)]=111+Fr;var Fr,Oe=[],_p=!1,Lp="all",Dp=[],aa=function(t){return Br[t.toLowerCase()]||en[t.toLowerCase()]||t.toUpperCase().charCodeAt(0)},wb=function(t){return Object.keys(Br).find(function(e){return Br[e]===t})},vb=function(t){return Object.keys(en).find(function(e){return en[e]===t})};function Rp(t){Lp=t||"all"}function zr(){return Lp||"all"}function xb(){return Oe.slice(0)}function Tb(){return Oe.map(function(t){return wb(t)||vb(t)||String.fromCharCode(t)})}function _b(t){var e=t.target||t.srcElement,n=e.tagName,r=!0;return(e.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!e.readOnly)&&(r=!1),r}function Sb(t){return typeof t=="string"&&(t=aa(t)),Oe.indexOf(t)!==-1}function kb(t,e){var n,r;t||(t=zr());for(var i in Fe)if(Object.prototype.hasOwnProperty.call(Fe,i))for(n=Fe[i],r=0;r<n.length;)n[r].scope===t?n.splice(r,1):r++;zr()===t&&Rp(e||"all")}function Ab(t){var e=t.keyCode||t.which||t.charCode,n=Oe.indexOf(e);if(n>=0&&Oe.splice(n,1),t.key&&t.key.toLowerCase()==="meta"&&Oe.splice(0,Oe.length),(e===93||e===224)&&(e=91),e in Je){Je[e]=!1;for(var r in en)en[r]===e&&(Jt[r]=!1)}}function Eb(t){if(typeof t>"u")Object.keys(Fe).forEach(function(o){return delete Fe[o]});else if(Array.isArray(t))t.forEach(function(o){o.key&&hs(o)});else if(typeof t=="object")t.key&&hs(t);else if(typeof t=="string"){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=n[0],a=n[1];typeof i=="function"&&(a=i,i=""),hs({key:t,scope:i,method:a,splitKey:"+"})}}var hs=function(t){var e=t.key,n=t.scope,r=t.method,i=t.splitKey,a=i===void 0?"+":i,o=Cp(e);o.forEach(function(s){var l=s.split(a),c=l.length,u=l[c-1],p=u==="*"?"*":aa(u);if(Fe[p]){n||(n=zr());var d=c>1?Ep(en,l):[];Fe[p]=Fe[p].filter(function(h){var b=r?h.method===r:!0;return!(b&&h.scope===n&&yb(h.mods,d))})}})};function Sp(t,e,n,r){if(e.element===r){var i;if(e.scope===n||e.scope==="all"){i=e.mods.length>0;for(var a in Je)Object.prototype.hasOwnProperty.call(Je,a)&&(!Je[a]&&e.mods.indexOf(+a)>-1||Je[a]&&e.mods.indexOf(+a)===-1)&&(i=!1);(e.mods.length===0&&!Je[16]&&!Je[18]&&!Je[17]&&!Je[91]||i||e.shortcut==="*")&&e.method(t,e)===!1&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0))}}}function kp(t,e){var n=Fe["*"],r=t.keyCode||t.which||t.charCode;if(Jt.filter.call(this,t)){if((r===93||r===224)&&(r=91),Oe.indexOf(r)===-1&&r!==229&&Oe.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(b){var g=ms[b];t[b]&&Oe.indexOf(g)===-1?Oe.push(g):!t[b]&&Oe.indexOf(g)>-1?Oe.splice(Oe.indexOf(g),1):b==="metaKey"&&t[b]&&Oe.length===3&&(t.ctrlKey||t.shiftKey||t.altKey||(Oe=Oe.slice(Oe.indexOf(g))))}),r in Je){Je[r]=!0;for(var i in en)en[i]===r&&(Jt[i]=!0);if(!n)return}for(var a in Je)Object.prototype.hasOwnProperty.call(Je,a)&&(Je[a]=t[ms[a]]);t.getModifierState&&!(t.altKey&&!t.ctrlKey)&&t.getModifierState("AltGraph")&&(Oe.indexOf(17)===-1&&Oe.push(17),Oe.indexOf(18)===-1&&Oe.push(18),Je[17]=!0,Je[18]=!0);var o=zr();if(n)for(var s=0;s<n.length;s++)n[s].scope===o&&(t.type==="keydown"&&n[s].keydown||t.type==="keyup"&&n[s].keyup)&&Sp(t,n[s],o,e);if(r in Fe){for(var l=0;l<Fe[r].length;l++)if((t.type==="keydown"&&Fe[r][l].keydown||t.type==="keyup"&&Fe[r][l].keyup)&&Fe[r][l].key){for(var c=Fe[r][l],u=c.splitKey,p=c.key.split(u),d=[],h=0;h<p.length;h++)d.push(aa(p[h]));d.sort().join("")===Oe.sort().join("")&&Sp(t,c,o,e)}}}}function Cb(t){return Dp.indexOf(t)>-1}function Jt(t,e,n){Oe=[];var r=Cp(t),i=[],a="all",o=document,s=0,l=!1,c=!0,u="+",p=!1;for(n===void 0&&typeof e=="function"&&(n=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(a=e.scope),e.element&&(o=e.element),e.keyup&&(l=e.keyup),e.keydown!==void 0&&(c=e.keydown),e.capture!==void 0&&(p=e.capture),typeof e.splitKey=="string"&&(u=e.splitKey)),typeof e=="string"&&(a=e);s<r.length;s++)t=r[s].split(u),i=[],t.length>1&&(i=Ep(en,t)),t=t[t.length-1],t=t==="*"?"*":aa(t),t in Fe||(Fe[t]=[]),Fe[t].push({keyup:l,keydown:c,scope:a,mods:i,shortcut:r[s],method:n,key:r[s],splitKey:u,element:o});typeof o<"u"&&!Cb(o)&&window&&(Dp.push(o),ps(o,"keydown",function(d){kp(d,o)},p),_p||(_p=!0,ps(window,"focus",function(){Oe=[]},p)),ps(o,"keyup",function(d){kp(d,o),Ab(d)},p))}function Lb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(Fe).forEach(function(n){var r=Fe[n].filter(function(i){return i.scope===e&&i.shortcut===t});r.forEach(function(i){i&&i.method&&i.method()})})}var fs={getPressedKeyString:Tb,setScope:Rp,getScope:zr,deleteScope:kb,getPressedKeyCodes:xb,isPressed:Sb,filter:_b,trigger:Lb,unbind:Eb,keyMap:Br,modifier:en,modifierMap:ms};for(ia in fs)Object.prototype.hasOwnProperty.call(fs,ia)&&(Jt[ia]=fs[ia]);var ia;typeof document<"u"&&(Ap=window.hotkeys,Jt.noConflict=function(t){return t&&window.hotkeys===Jt&&(window.hotkeys=Ap),Jt},window.hotkeys=Jt);var Ap;var{entries:zp,setPrototypeOf:Op,isFrozen:Rb,getPrototypeOf:Ob,getOwnPropertyDescriptor:Nb}=Object,{freeze:ct,seal:Ht,create:Pb}=Object,{apply:xs,construct:Ts}=typeof Reflect<"u"&&Reflect;xs||(xs=function(t,e,n){return t.apply(e,n)});ct||(ct=function(t){return t});Ht||(Ht=function(t){return t});Ts||(Ts=function(t,e){return new t(...e)});var Mb=Nt(Array.prototype.forEach),Np=Nt(Array.prototype.pop),Ur=Nt(Array.prototype.push),la=Nt(String.prototype.toLowerCase),gs=Nt(String.prototype.toString),Ib=Nt(String.prototype.match),Wt=Nt(String.prototype.replace),Fb=Nt(String.prototype.indexOf),Bb=Nt(String.prototype.trim),Tt=Nt(RegExp.prototype.test),$r=zb(TypeError);function Nt(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return xs(t,e,r)}}function zb(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Ts(t,n)}}function ge(t,e,n){var r;n=(r=n)!==null&&r!==void 0?r:la,Op&&Op(t,null);let i=e.length;for(;i--;){let a=e[i];if(typeof a=="string"){let o=n(a);o!==a&&(Rb(e)||(e[i]=o),a=o)}t[a]=!0}return t}function ar(t){let e=Pb(null);for(let[n,r]of zp(t))e[n]=r;return e}function oa(t,e){for(;t!==null;){let r=Nb(t,e);if(r){if(r.get)return Nt(r.get);if(typeof r.value=="function")return Nt(r.value)}t=Ob(t)}function n(r){return null}return n}var Pp=ct(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),bs=ct(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ys=ct(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ub=ct(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ws=ct(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),$b=ct(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Mp=ct(["#text"]),Ip=ct(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),vs=ct(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Fp=ct(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),sa=ct(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Wb=Ht(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Hb=Ht(/<%[\w\W]*|[\w\W]*%>/gm),jb=Ht(/\${[\w\W]*}/gm),qb=Ht(/^data-[\-\w.\u00B7-\uFFFF]/),Kb=Ht(/^aria-[\-\w]+$/),Up=Ht(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Gb=Ht(/^(?:\w+script|data):/i),Vb=Ht(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),$p=Ht(/^html$/i),Bp=Object.freeze({__proto__:null,MUSTACHE_EXPR:Wb,ERB_EXPR:Hb,TMPLIT_EXPR:jb,DATA_ATTR:qb,ARIA_ATTR:Kb,IS_ALLOWED_URI:Up,IS_SCRIPT_OR_DATA:Gb,ATTR_WHITESPACE:Vb,DOCTYPE_NAME:$p}),Xb=()=>typeof window>"u"?null:window,Yb=function(t,e){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let n=null,r="data-tt-policy-suffix";e&&e.hasAttribute(r)&&(n=e.getAttribute(r));let i="dompurify"+(n?"#"+n:"");try{return t.createPolicy(i,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return null}};function Wp(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Xb(),e=A=>Wp(A);if(e.version="3.0.3",e.removed=[],!t||!t.document||t.document.nodeType!==9)return e.isSupported=!1,e;let n=t.document,r=n.currentScript,{document:i}=t,{DocumentFragment:a,HTMLTemplateElement:o,Node:s,Element:l,NodeFilter:c,NamedNodeMap:u=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:p,DOMParser:d,trustedTypes:h}=t,b=l.prototype,g=oa(b,"cloneNode"),m=oa(b,"nextSibling"),f=oa(b,"childNodes"),y=oa(b,"parentNode");if(typeof o=="function"){let A=i.createElement("template");A.content&&A.content.ownerDocument&&(i=A.content.ownerDocument)}let w,E="",{implementation:_,createNodeIterator:T,createDocumentFragment:v,getElementsByTagName:x}=i,{importNode:S}=n,k={};e.isSupported=typeof zp=="function"&&typeof y=="function"&&_&&_.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:C,ERB_EXPR:N,TMPLIT_EXPR:O,DATA_ATTR:B,ARIA_ATTR:P,IS_SCRIPT_OR_DATA:U,ATTR_WHITESPACE:z}=Bp,{IS_ALLOWED_URI:j}=Bp,ne=null,K=ge({},[...Pp,...bs,...ys,...ws,...Mp]),ee=null,L=ge({},[...Ip,...vs,...Fp,...sa]),M=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),H=null,G=null,X=!0,ue=!0,pe=!1,he=!0,Q=!1,ae=!1,oe=!1,se=!1,Y=!1,ie=!1,de=!1,fe=!0,re=!1,Ce="user-content-",Me=!0,Te=!1,Ne={},We=null,dt=ge({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),dn=null,St=ge({},["audio","video","img","source","image","track"]),et=null,jt=ge({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),He="http://www.w3.org/1998/Math/MathML",pt="http://www.w3.org/2000/svg",je="http://www.w3.org/1999/xhtml",it=je,Pt=!1,I=null,$=ge({},[He,pt,je],gs),F,W=["application/xhtml+xml","text/html"],q="text/html",Z,le=null,Ve=i.createElement("form"),ht=function(A){return A instanceof RegExp||A instanceof Function},En=function(A){if(!(le&&le===A)){if((!A||typeof A!="object")&&(A={}),A=ar(A),F=W.indexOf(A.PARSER_MEDIA_TYPE)===-1?F=q:F=A.PARSER_MEDIA_TYPE,Z=F==="application/xhtml+xml"?gs:la,ne="ALLOWED_TAGS"in A?ge({},A.ALLOWED_TAGS,Z):K,ee="ALLOWED_ATTR"in A?ge({},A.ALLOWED_ATTR,Z):L,I="ALLOWED_NAMESPACES"in A?ge({},A.ALLOWED_NAMESPACES,gs):$,et="ADD_URI_SAFE_ATTR"in A?ge(ar(jt),A.ADD_URI_SAFE_ATTR,Z):jt,dn="ADD_DATA_URI_TAGS"in A?ge(ar(St),A.ADD_DATA_URI_TAGS,Z):St,We="FORBID_CONTENTS"in A?ge({},A.FORBID_CONTENTS,Z):dt,H="FORBID_TAGS"in A?ge({},A.FORBID_TAGS,Z):{},G="FORBID_ATTR"in A?ge({},A.FORBID_ATTR,Z):{},Ne="USE_PROFILES"in A?A.USE_PROFILES:!1,X=A.ALLOW_ARIA_ATTR!==!1,ue=A.ALLOW_DATA_ATTR!==!1,pe=A.ALLOW_UNKNOWN_PROTOCOLS||!1,he=A.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Q=A.SAFE_FOR_TEMPLATES||!1,ae=A.WHOLE_DOCUMENT||!1,Y=A.RETURN_DOM||!1,ie=A.RETURN_DOM_FRAGMENT||!1,de=A.RETURN_TRUSTED_TYPE||!1,se=A.FORCE_BODY||!1,fe=A.SANITIZE_DOM!==!1,re=A.SANITIZE_NAMED_PROPS||!1,Me=A.KEEP_CONTENT!==!1,Te=A.IN_PLACE||!1,j=A.ALLOWED_URI_REGEXP||Up,it=A.NAMESPACE||je,M=A.CUSTOM_ELEMENT_HANDLING||{},A.CUSTOM_ELEMENT_HANDLING&&ht(A.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(M.tagNameCheck=A.CUSTOM_ELEMENT_HANDLING.tagNameCheck),A.CUSTOM_ELEMENT_HANDLING&&ht(A.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(M.attributeNameCheck=A.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),A.CUSTOM_ELEMENT_HANDLING&&typeof A.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(M.allowCustomizedBuiltInElements=A.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Q&&(ue=!1),ie&&(Y=!0),Ne&&(ne=ge({},[...Mp]),ee=[],Ne.html===!0&&(ge(ne,Pp),ge(ee,Ip)),Ne.svg===!0&&(ge(ne,bs),ge(ee,vs),ge(ee,sa)),Ne.svgFilters===!0&&(ge(ne,ys),ge(ee,vs),ge(ee,sa)),Ne.mathMl===!0&&(ge(ne,ws),ge(ee,Fp),ge(ee,sa))),A.ADD_TAGS&&(ne===K&&(ne=ar(ne)),ge(ne,A.ADD_TAGS,Z)),A.ADD_ATTR&&(ee===L&&(ee=ar(ee)),ge(ee,A.ADD_ATTR,Z)),A.ADD_URI_SAFE_ATTR&&ge(et,A.ADD_URI_SAFE_ATTR,Z),A.FORBID_CONTENTS&&(We===dt&&(We=ar(We)),ge(We,A.FORBID_CONTENTS,Z)),Me&&(ne["#text"]=!0),ae&&ge(ne,["html","head","body"]),ne.table&&(ge(ne,["tbody"]),delete H.tbody),A.TRUSTED_TYPES_POLICY){if(typeof A.TRUSTED_TYPES_POLICY.createHTML!="function")throw $r('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof A.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw $r('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');w=A.TRUSTED_TYPES_POLICY,E=w.createHTML("")}else w===void 0&&(w=Yb(h,r)),w!==null&&typeof E=="string"&&(E=w.createHTML(""));ct&&ct(A),le=A}},sr=ge({},["mi","mo","mn","ms","mtext"]),lr=ge({},["foreignobject","desc","title","annotation-xml"]),fh=ge({},["title","style","font","a","script"]),Hr=ge({},bs);ge(Hr,ys),ge(Hr,Ub);let da=ge({},ws);ge(da,$b);let mh=function(A){let te=y(A);(!te||!te.tagName)&&(te={namespaceURI:it,tagName:"template"});let V=la(A.tagName),_e=la(te.tagName);return I[A.namespaceURI]?A.namespaceURI===pt?te.namespaceURI===je?V==="svg":te.namespaceURI===He?V==="svg"&&(_e==="annotation-xml"||sr[_e]):!!Hr[V]:A.namespaceURI===He?te.namespaceURI===je?V==="math":te.namespaceURI===pt?V==="math"&&lr[_e]:!!da[V]:A.namespaceURI===je?te.namespaceURI===pt&&!lr[_e]||te.namespaceURI===He&&!sr[_e]?!1:!da[V]&&(fh[V]||!Hr[V]):!!(F==="application/xhtml+xml"&&I[A.namespaceURI]):!1},Fn=function(A){Ur(e.removed,{element:A});try{A.parentNode.removeChild(A)}catch{A.remove()}},pa=function(A,te){try{Ur(e.removed,{attribute:te.getAttributeNode(A),from:te})}catch{Ur(e.removed,{attribute:null,from:te})}if(te.removeAttribute(A),A==="is"&&!ee[A])if(Y||ie)try{Fn(te)}catch{}else try{te.setAttribute(A,"")}catch{}},Is=function(A){let te,V;if(se)A="<remove></remove>"+A;else{let at=Ib(A,/^[\r\n\t ]+/);V=at&&at[0]}F==="application/xhtml+xml"&&it===je&&(A='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+A+"</body></html>");let _e=w?w.createHTML(A):A;if(it===je)try{te=new d().parseFromString(_e,F)}catch{}if(!te||!te.documentElement){te=_.createDocument(it,"template",null);try{te.documentElement.innerHTML=Pt?E:_e}catch{}}let ze=te.body||te.documentElement;return A&&V&&ze.insertBefore(i.createTextNode(V),ze.childNodes[0]||null),it===je?x.call(te,ae?"html":"body")[0]:ae?te.documentElement:ze},Fs=function(A){return T.call(A.ownerDocument||A,A,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,null,!1)},gh=function(A){return A instanceof p&&(typeof A.nodeName!="string"||typeof A.textContent!="string"||typeof A.removeChild!="function"||!(A.attributes instanceof u)||typeof A.removeAttribute!="function"||typeof A.setAttribute!="function"||typeof A.namespaceURI!="string"||typeof A.insertBefore!="function"||typeof A.hasChildNodes!="function")},jr=function(A){return typeof s=="object"?A instanceof s:A&&typeof A=="object"&&typeof A.nodeType=="number"&&typeof A.nodeName=="string"},tn=function(A,te,V){k[A]&&Mb(k[A],_e=>{_e.call(e,te,V,le)})},Bs=function(A){let te;if(tn("beforeSanitizeElements",A,null),gh(A))return Fn(A),!0;let V=Z(A.nodeName);if(tn("uponSanitizeElement",A,{tagName:V,allowedTags:ne}),A.hasChildNodes()&&!jr(A.firstElementChild)&&(!jr(A.content)||!jr(A.content.firstElementChild))&&Tt(/<[/\w]/g,A.innerHTML)&&Tt(/<[/\w]/g,A.textContent))return Fn(A),!0;if(!ne[V]||H[V]){if(!H[V]&&Us(V)&&(M.tagNameCheck instanceof RegExp&&Tt(M.tagNameCheck,V)||M.tagNameCheck instanceof Function&&M.tagNameCheck(V)))return!1;if(Me&&!We[V]){let _e=y(A)||A.parentNode,ze=f(A)||A.childNodes;if(ze&&_e){let at=ze.length;for(let ft=at-1;ft>=0;--ft)_e.insertBefore(g(ze[ft],!0),m(A))}}return Fn(A),!0}return A instanceof l&&!mh(A)||(V==="noscript"||V==="noembed")&&Tt(/<\/no(script|embed)/i,A.innerHTML)?(Fn(A),!0):(Q&&A.nodeType===3&&(te=A.textContent,te=Wt(te,C," "),te=Wt(te,N," "),te=Wt(te,O," "),A.textContent!==te&&(Ur(e.removed,{element:A.cloneNode()}),A.textContent=te)),tn("afterSanitizeElements",A,null),!1)},zs=function(A,te,V){if(fe&&(te==="id"||te==="name")&&(V in i||V in Ve))return!1;if(!(ue&&!G[te]&&Tt(B,te))&&!(X&&Tt(P,te))){if(!ee[te]||G[te]){if(!(Us(A)&&(M.tagNameCheck instanceof RegExp&&Tt(M.tagNameCheck,A)||M.tagNameCheck instanceof Function&&M.tagNameCheck(A))&&(M.attributeNameCheck instanceof RegExp&&Tt(M.attributeNameCheck,te)||M.attributeNameCheck instanceof Function&&M.attributeNameCheck(te))||te==="is"&&M.allowCustomizedBuiltInElements&&(M.tagNameCheck instanceof RegExp&&Tt(M.tagNameCheck,V)||M.tagNameCheck instanceof Function&&M.tagNameCheck(V))))return!1}else if(!et[te]&&!Tt(j,Wt(V,z,""))&&!((te==="src"||te==="xlink:href"||te==="href")&&A!=="script"&&Fb(V,"data:")===0&&dn[A])&&!(pe&&!Tt(U,Wt(V,z,"")))&&V)return!1}return!0},Us=function(A){return A.indexOf("-")>0},$s=function(A){let te,V,_e,ze;tn("beforeSanitizeAttributes",A,null);let{attributes:at}=A;if(!at)return;let ft={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ee};for(ze=at.length;ze--;){te=at[ze];let{name:qe,namespaceURI:Bn}=te;if(V=qe==="value"?te.value:Bb(te.value),_e=Z(qe),ft.attrName=_e,ft.attrValue=V,ft.keepAttr=!0,ft.forceKeepAttr=void 0,tn("uponSanitizeAttribute",A,ft),V=ft.attrValue,ft.forceKeepAttr||(pa(qe,A),!ft.keepAttr))continue;if(!he&&Tt(/\/>/i,V)){pa(qe,A);continue}Q&&(V=Wt(V,C," "),V=Wt(V,N," "),V=Wt(V,O," "));let Ws=Z(A.nodeName);if(zs(Ws,_e,V)){if(re&&(_e==="id"||_e==="name")&&(pa(qe,A),V=Ce+V),w&&typeof h=="object"&&typeof h.getAttributeType=="function"&&!Bn)switch(h.getAttributeType(Ws,_e)){case"TrustedHTML":{V=w.createHTML(V);break}case"TrustedScriptURL":{V=w.createScriptURL(V);break}}try{Bn?A.setAttributeNS(Bn,qe,V):A.setAttribute(qe,V),Np(e.removed)}catch{}}}tn("afterSanitizeAttributes",A,null)},bh=function A(te){let V,_e=Fs(te);for(tn("beforeSanitizeShadowDOM",te,null);V=_e.nextNode();)tn("uponSanitizeShadowNode",V,null),!Bs(V)&&(V.content instanceof a&&A(V.content),$s(V));tn("afterSanitizeShadowDOM",te,null)};return e.sanitize=function(A){let te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},V,_e,ze,at;if(Pt=!A,Pt&&(A="<!-->"),typeof A!="string"&&!jr(A))if(typeof A.toString=="function"){if(A=A.toString(),typeof A!="string")throw $r("dirty is not a string, aborting")}else throw $r("toString is not a function");if(!e.isSupported)return A;if(oe||En(te),e.removed=[],typeof A=="string"&&(Te=!1),Te){if(A.nodeName){let Bn=Z(A.nodeName);if(!ne[Bn]||H[Bn])throw $r("root node is forbidden and cannot be sanitized in-place")}}else if(A instanceof s)V=Is("<!---->"),_e=V.ownerDocument.importNode(A,!0),_e.nodeType===1&&_e.nodeName==="BODY"||_e.nodeName==="HTML"?V=_e:V.appendChild(_e);else{if(!Y&&!Q&&!ae&&A.indexOf("<")===-1)return w&&de?w.createHTML(A):A;if(V=Is(A),!V)return Y?null:de?E:""}V&&se&&Fn(V.firstChild);let ft=Fs(Te?A:V);for(;ze=ft.nextNode();)Bs(ze)||(ze.content instanceof a&&bh(ze.content),$s(ze));if(Te)return A;if(Y){if(ie)for(at=v.call(V.ownerDocument);V.firstChild;)at.appendChild(V.firstChild);else at=V;return(ee.shadowroot||ee.shadowrootmod)&&(at=S.call(n,at,!0)),at}let qe=ae?V.outerHTML:V.innerHTML;return ae&&ne["!doctype"]&&V.ownerDocument&&V.ownerDocument.doctype&&V.ownerDocument.doctype.name&&Tt($p,V.ownerDocument.doctype.name)&&(qe="<!DOCTYPE "+V.ownerDocument.doctype.name+`>
`+qe),Q&&(qe=Wt(qe,C," "),qe=Wt(qe,N," "),qe=Wt(qe,O," ")),w&&de?w.createHTML(qe):qe},e.setConfig=function(A){En(A),oe=!0},e.clearConfig=function(){le=null,oe=!1},e.isValidAttribute=function(A,te,V){le||En({});let _e=Z(A),ze=Z(te);return zs(_e,ze,V)},e.addHook=function(A,te){typeof te=="function"&&(k[A]=k[A]||[],Ur(k[A],te))},e.removeHook=function(A){if(k[A])return Np(k[A])},e.removeHooks=function(A){k[A]&&(k[A]=[])},e.removeAllHooks=function(){k={}},e}var Wr=Wp();var Zb=Object.create,Ss=Object.defineProperty,Qb=Object.getOwnPropertyDescriptor,Jb=Object.getOwnPropertyNames,ey=Object.getPrototypeOf,ty=Object.prototype.hasOwnProperty,ks=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),ny=(t,e)=>{for(var n in e)Ss(t,n,{get:e[n],enumerable:!0})},_s=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Jb(e))!ty.call(t,i)&&i!==n&&Ss(t,i,{get:()=>e[i],enumerable:!(r=Qb(e,i))||r.enumerable});return t},ry=(t,e,n)=>(_s(t,e,"default"),n&&_s(n,e,"default")),jp=(t,e,n)=>(n=t!=null?Zb(ey(t)):{},_s(e||!t||!t.__esModule?Ss(n,"default",{value:t,enumerable:!0}):n,t)),iy=ks((t,e)=>{function n(r,i){if(i&&i.documentElement)r=i,i=arguments[2];else if(!r||!r.documentElement)throw new Error("First argument to Readability constructor should be a document object.");if(i=i||{},this._doc=r,this._docJSDOMParser=this._doc.firstChild.__JSDOMParser__,this._articleTitle=null,this._articleByline=null,this._articleDir=null,this._articleSiteName=null,this._attempts=[],this._debug=!!i.debug,this._maxElemsToParse=i.maxElemsToParse||this.DEFAULT_MAX_ELEMS_TO_PARSE,this._nbTopCandidates=i.nbTopCandidates||this.DEFAULT_N_TOP_CANDIDATES,this._charThreshold=i.charThreshold||this.DEFAULT_CHAR_THRESHOLD,this._classesToPreserve=this.CLASSES_TO_PRESERVE.concat(i.classesToPreserve||[]),this._keepClasses=!!i.keepClasses,this._serializer=i.serializer||function(a){return a.innerHTML},this._disableJSONLD=!!i.disableJSONLD,this._allowedVideoRegex=i.allowedVideoRegex||this.REGEXPS.videos,this._flags=this.FLAG_STRIP_UNLIKELYS|this.FLAG_WEIGHT_CLASSES|this.FLAG_CLEAN_CONDITIONALLY,this._debug){let a=function(o){if(o.nodeType==o.TEXT_NODE)return`${o.nodeName} ("${o.textContent}")`;let s=Array.from(o.attributes||[],function(l){return`${l.name}="${l.value}"`}).join(" ");return`<${o.localName} ${s}>`};this.log=function(){if(typeof console<"u")Array.from(arguments,l=>l&&l.nodeType==this.ELEMENT_NODE?a(l):l).unshift("Reader: (Readability)");else if(typeof dump<"u"){var o=Array.prototype.map.call(arguments,function(s){return s&&s.nodeName?a(s):s}).join(" ");dump("Reader: (Readability) "+o+`
`)}}}else this.log=function(){}}n.prototype={FLAG_STRIP_UNLIKELYS:1,FLAG_WEIGHT_CLASSES:2,FLAG_CLEAN_CONDITIONALLY:4,ELEMENT_NODE:1,TEXT_NODE:3,DEFAULT_MAX_ELEMS_TO_PARSE:0,DEFAULT_N_TOP_CANDIDATES:5,DEFAULT_TAGS_TO_SCORE:"section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),DEFAULT_CHAR_THRESHOLD:500,REGEXPS:{unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i,positive:/article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,negative:/-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,extraneous:/print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,byline:/byline|author|dateline|writtenby|p-author/i,replaceFonts:/<(\/?)font[^>]*>/gi,normalize:/\s{2,}/g,videos:/\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,shareElements:/(\b|_)(share|sharedaddy)(\b|_)/i,nextLink:/(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,prevLink:/(prev|earl|old|new|<|«)/i,tokenize:/\W+/g,whitespace:/^\s*$/,hasContent:/\S$/,hashUrl:/^#.+/,srcsetUrl:/(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,b64DataUrl:/^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,jsonLdArticleTypes:/^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/},UNLIKELY_ROLES:["menu","menubar","complementary","navigation","alert","alertdialog","dialog"],DIV_TO_P_ELEMS:new Set(["BLOCKQUOTE","DL","DIV","IMG","OL","P","PRE","TABLE","UL"]),ALTER_TO_DIV_EXCEPTIONS:["DIV","ARTICLE","SECTION","P"],PRESENTATIONAL_ATTRIBUTES:["align","background","bgcolor","border","cellpadding","cellspacing","frame","hspace","rules","style","valign","vspace"],DEPRECATED_SIZE_ATTRIBUTE_ELEMS:["TABLE","TH","TD","HR","PRE"],PHRASING_ELEMS:["ABBR","AUDIO","B","BDO","BR","BUTTON","CITE","CODE","DATA","DATALIST","DFN","EM","EMBED","I","IMG","INPUT","KBD","LABEL","MARK","MATH","METER","NOSCRIPT","OBJECT","OUTPUT","PROGRESS","Q","RUBY","SAMP","SCRIPT","SELECT","SMALL","SPAN","STRONG","SUB","SUP","TEXTAREA","TIME","VAR","WBR"],CLASSES_TO_PRESERVE:["page"],HTML_ESCAPE_MAP:{lt:"<",gt:">",amp:"&",quot:'"',apos:"'"},_postProcessContent:function(r){this._fixRelativeUris(r),this._simplifyNestedElements(r),this._keepClasses||this._cleanClasses(r)},_removeNodes:function(r,i){if(this._docJSDOMParser&&r._isLiveNodeList)throw new Error("Do not pass live node lists to _removeNodes");for(var a=r.length-1;a>=0;a--){var o=r[a],s=o.parentNode;s&&(!i||i.call(this,o,a,r))&&s.removeChild(o)}},_replaceNodeTags:function(r,i){if(this._docJSDOMParser&&r._isLiveNodeList)throw new Error("Do not pass live node lists to _replaceNodeTags");for(let a of r)this._setNodeTag(a,i)},_forEachNode:function(r,i){Array.prototype.forEach.call(r,i,this)},_findNode:function(r,i){return Array.prototype.find.call(r,i,this)},_someNode:function(r,i){return Array.prototype.some.call(r,i,this)},_everyNode:function(r,i){return Array.prototype.every.call(r,i,this)},_concatNodeLists:function(){var r=Array.prototype.slice,i=r.call(arguments),a=i.map(function(o){return r.call(o)});return Array.prototype.concat.apply([],a)},_getAllNodesWithTag:function(r,i){return r.querySelectorAll?r.querySelectorAll(i.join(",")):[].concat.apply([],i.map(function(a){var o=r.getElementsByTagName(a);return Array.isArray(o)?o:Array.from(o)}))},_cleanClasses:function(r){var i=this._classesToPreserve,a=(r.getAttribute("class")||"").split(/\s+/).filter(function(o){return i.indexOf(o)!=-1}).join(" ");for(a?r.setAttribute("class",a):r.removeAttribute("class"),r=r.firstElementChild;r;r=r.nextElementSibling)this._cleanClasses(r)},_fixRelativeUris:function(r){var i=this._doc.baseURI,a=this._doc.documentURI;function o(c){if(i==a&&c.charAt(0)=="#")return c;try{return new URL(c,i).href}catch{}return c}var s=this._getAllNodesWithTag(r,["a"]);this._forEachNode(s,function(c){var u=c.getAttribute("href");if(u)if(u.indexOf("javascript:")===0)if(c.childNodes.length===1&&c.childNodes[0].nodeType===this.TEXT_NODE){var p=this._doc.createTextNode(c.textContent);c.parentNode.replaceChild(p,c)}else{for(var d=this._doc.createElement("span");c.firstChild;)d.appendChild(c.firstChild);c.parentNode.replaceChild(d,c)}else c.setAttribute("href",o(u))});var l=this._getAllNodesWithTag(r,["img","picture","figure","video","audio","source"]);this._forEachNode(l,function(c){var u=c.getAttribute("src"),p=c.getAttribute("poster"),d=c.getAttribute("srcset");if(u&&c.setAttribute("src",o(u)),p&&c.setAttribute("poster",o(p)),d){var h=d.replace(this.REGEXPS.srcsetUrl,function(b,g,m,f){return o(g)+(m||"")+f});c.setAttribute("srcset",h)}})},_simplifyNestedElements:function(r){for(var i=r;i;){if(i.parentNode&&["DIV","SECTION"].includes(i.tagName)&&!(i.id&&i.id.startsWith("readability"))){if(this._isElementWithoutContent(i)){i=this._removeAndGetNext(i);continue}else if(this._hasSingleTagInsideElement(i,"DIV")||this._hasSingleTagInsideElement(i,"SECTION")){for(var a=i.children[0],o=0;o<i.attributes.length;o++)a.setAttribute(i.attributes[o].name,i.attributes[o].value);i.parentNode.replaceChild(a,i),i=a;continue}}i=this._getNextNode(i)}},_getArticleTitle:function(){var r=this._doc,i="",a="";try{i=a=r.title.trim(),typeof i!="string"&&(i=a=this._getInnerText(r.getElementsByTagName("title")[0]))}catch{}var o=!1;function s(h){return h.split(/\s+/).length}if(/ [\|\-\\\/>»] /.test(i))o=/ [\\\/>»] /.test(i),i=a.replace(/(.*)[\|\-\\\/>»] .*/gi,"$1"),s(i)<3&&(i=a.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi,"$1"));else if(i.indexOf(": ")!==-1){var l=this._concatNodeLists(r.getElementsByTagName("h1"),r.getElementsByTagName("h2")),c=i.trim(),u=this._someNode(l,function(h){return h.textContent.trim()===c});u||(i=a.substring(a.lastIndexOf(":")+1),s(i)<3?i=a.substring(a.indexOf(":")+1):s(a.substr(0,a.indexOf(":")))>5&&(i=a))}else if(i.length>150||i.length<15){var p=r.getElementsByTagName("h1");p.length===1&&(i=this._getInnerText(p[0]))}i=i.trim().replace(this.REGEXPS.normalize," ");var d=s(i);return d<=4&&(!o||d!=s(a.replace(/[\|\-\\\/>»]+/g,""))-1)&&(i=a),i},_prepDocument:function(){var r=this._doc;this._removeNodes(this._getAllNodesWithTag(r,["style"])),r.body&&this._replaceBrs(r.body),this._replaceNodeTags(this._getAllNodesWithTag(r,["font"]),"SPAN")},_nextNode:function(r){for(var i=r;i&&i.nodeType!=this.ELEMENT_NODE&&this.REGEXPS.whitespace.test(i.textContent);)i=i.nextSibling;return i},_replaceBrs:function(r){this._forEachNode(this._getAllNodesWithTag(r,["br"]),function(i){for(var a=i.nextSibling,o=!1;(a=this._nextNode(a))&&a.tagName=="BR";){o=!0;var s=a.nextSibling;a.parentNode.removeChild(a),a=s}if(o){var l=this._doc.createElement("p");for(i.parentNode.replaceChild(l,i),a=l.nextSibling;a;){if(a.tagName=="BR"){var c=this._nextNode(a.nextSibling);if(c&&c.tagName=="BR")break}if(!this._isPhrasingContent(a))break;var u=a.nextSibling;l.appendChild(a),a=u}for(;l.lastChild&&this._isWhitespace(l.lastChild);)l.removeChild(l.lastChild);l.parentNode.tagName==="P"&&this._setNodeTag(l.parentNode,"DIV")}})},_setNodeTag:function(r,i){if(this.log("_setNodeTag",r,i),this._docJSDOMParser)return r.localName=i.toLowerCase(),r.tagName=i.toUpperCase(),r;for(var a=r.ownerDocument.createElement(i);r.firstChild;)a.appendChild(r.firstChild);r.parentNode.replaceChild(a,r),r.readability&&(a.readability=r.readability);for(var o=0;o<r.attributes.length;o++)try{a.setAttribute(r.attributes[o].name,r.attributes[o].value)}catch{}return a},_prepArticle:function(r){this._cleanStyles(r),this._markDataTables(r),this._fixLazyImages(r),this._cleanConditionally(r,"form"),this._cleanConditionally(r,"fieldset"),this._clean(r,"object"),this._clean(r,"embed"),this._clean(r,"footer"),this._clean(r,"link"),this._clean(r,"aside");var i=this.DEFAULT_CHAR_THRESHOLD;this._forEachNode(r.children,function(a){this._cleanMatchedNodes(a,function(o,s){return this.REGEXPS.shareElements.test(s)&&o.textContent.length<i})}),this._clean(r,"iframe"),this._clean(r,"input"),this._clean(r,"textarea"),this._clean(r,"select"),this._clean(r,"button"),this._cleanHeaders(r),this._cleanConditionally(r,"table"),this._cleanConditionally(r,"ul"),this._cleanConditionally(r,"div"),this._replaceNodeTags(this._getAllNodesWithTag(r,["h1"]),"h2"),this._removeNodes(this._getAllNodesWithTag(r,["p"]),function(a){var o=a.getElementsByTagName("img").length,s=a.getElementsByTagName("embed").length,l=a.getElementsByTagName("object").length,c=a.getElementsByTagName("iframe").length,u=o+s+l+c;return u===0&&!this._getInnerText(a,!1)}),this._forEachNode(this._getAllNodesWithTag(r,["br"]),function(a){var o=this._nextNode(a.nextSibling);o&&o.tagName=="P"&&a.parentNode.removeChild(a)}),this._forEachNode(this._getAllNodesWithTag(r,["table"]),function(a){var o=this._hasSingleTagInsideElement(a,"TBODY")?a.firstElementChild:a;if(this._hasSingleTagInsideElement(o,"TR")){var s=o.firstElementChild;if(this._hasSingleTagInsideElement(s,"TD")){var l=s.firstElementChild;l=this._setNodeTag(l,this._everyNode(l.childNodes,this._isPhrasingContent)?"P":"DIV"),a.parentNode.replaceChild(l,a)}}})},_initializeNode:function(r){switch(r.readability={contentScore:0},r.tagName){case"DIV":r.readability.contentScore+=5;break;case"PRE":case"TD":case"BLOCKQUOTE":r.readability.contentScore+=3;break;case"ADDRESS":case"OL":case"UL":case"DL":case"DD":case"DT":case"LI":case"FORM":r.readability.contentScore-=3;break;case"H1":case"H2":case"H3":case"H4":case"H5":case"H6":case"TH":r.readability.contentScore-=5;break}r.readability.contentScore+=this._getClassWeight(r)},_removeAndGetNext:function(r){var i=this._getNextNode(r,!0);return r.parentNode.removeChild(r),i},_getNextNode:function(r,i){if(!i&&r.firstElementChild)return r.firstElementChild;if(r.nextElementSibling)return r.nextElementSibling;do r=r.parentNode;while(r&&!r.nextElementSibling);return r&&r.nextElementSibling},_textSimilarity:function(r,i){var a=r.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean),o=i.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);if(!a.length||!o.length)return 0;var s=o.filter(c=>!a.includes(c)),l=s.join(" ").length/o.join(" ").length;return 1-l},_checkByline:function(r,i){if(this._articleByline)return!1;if(r.getAttribute!==void 0)var a=r.getAttribute("rel"),o=r.getAttribute("itemprop");return(a==="author"||o&&o.indexOf("author")!==-1||this.REGEXPS.byline.test(i))&&this._isValidByline(r.textContent)?(this._articleByline=r.textContent.trim(),!0):!1},_getNodeAncestors:function(r,i){i=i||0;for(var a=0,o=[];r.parentNode&&(o.push(r.parentNode),!(i&&++a===i));)r=r.parentNode;return o},_grabArticle:function(r){this.log("**** grabArticle ****");var i=this._doc,a=r!==null;if(r=r||this._doc.body,!r)return this.log("No body found in document. Abort."),null;for(var o=r.innerHTML;;){this.log("Starting grabArticle loop");var s=this._flagIsActive(this.FLAG_STRIP_UNLIKELYS),l=[],c=this._doc.documentElement;let se=!0;for(;c;){c.tagName==="HTML"&&(this._articleLang=c.getAttribute("lang"));var u=c.className+" "+c.id;if(!this._isProbablyVisible(c)){this.log("Removing hidden node - "+u),c=this._removeAndGetNext(c);continue}if(c.getAttribute("aria-modal")=="true"&&c.getAttribute("role")=="dialog"){c=this._removeAndGetNext(c);continue}if(this._checkByline(c,u)){c=this._removeAndGetNext(c);continue}if(se&&this._headerDuplicatesTitle(c)){this.log("Removing header: ",c.textContent.trim(),this._articleTitle.trim()),se=!1,c=this._removeAndGetNext(c);continue}if(s){if(this.REGEXPS.unlikelyCandidates.test(u)&&!this.REGEXPS.okMaybeItsACandidate.test(u)&&!this._hasAncestorTag(c,"table")&&!this._hasAncestorTag(c,"code")&&c.tagName!=="BODY"&&c.tagName!=="A"){this.log("Removing unlikely candidate - "+u),c=this._removeAndGetNext(c);continue}if(this.UNLIKELY_ROLES.includes(c.getAttribute("role"))){this.log("Removing content with role "+c.getAttribute("role")+" - "+u),c=this._removeAndGetNext(c);continue}}if((c.tagName==="DIV"||c.tagName==="SECTION"||c.tagName==="HEADER"||c.tagName==="H1"||c.tagName==="H2"||c.tagName==="H3"||c.tagName==="H4"||c.tagName==="H5"||c.tagName==="H6")&&this._isElementWithoutContent(c)){c=this._removeAndGetNext(c);continue}if(this.DEFAULT_TAGS_TO_SCORE.indexOf(c.tagName)!==-1&&l.push(c),c.tagName==="DIV"){for(var p=null,d=c.firstChild;d;){var h=d.nextSibling;if(this._isPhrasingContent(d))p!==null?p.appendChild(d):this._isWhitespace(d)||(p=i.createElement("p"),c.replaceChild(p,d),p.appendChild(d));else if(p!==null){for(;p.lastChild&&this._isWhitespace(p.lastChild);)p.removeChild(p.lastChild);p=null}d=h}if(this._hasSingleTagInsideElement(c,"P")&&this._getLinkDensity(c)<.25){var b=c.children[0];c.parentNode.replaceChild(b,c),c=b,l.push(c)}else this._hasChildBlockElement(c)||(c=this._setNodeTag(c,"P"),l.push(c))}c=this._getNextNode(c)}var g=[];this._forEachNode(l,function(Y){if(!(!Y.parentNode||typeof Y.parentNode.tagName>"u")){var ie=this._getInnerText(Y);if(!(ie.length<25)){var de=this._getNodeAncestors(Y,5);if(de.length!==0){var fe=0;fe+=1,fe+=ie.split(",").length,fe+=Math.min(Math.floor(ie.length/100),3),this._forEachNode(de,function(re,Ce){if(!(!re.tagName||!re.parentNode||typeof re.parentNode.tagName>"u")){if(typeof re.readability>"u"&&(this._initializeNode(re),g.push(re)),Ce===0)var Me=1;else Ce===1?Me=2:Me=Ce*3;re.readability.contentScore+=fe/Me}})}}}});for(var m=[],f=0,y=g.length;f<y;f+=1){var w=g[f],E=w.readability.contentScore*(1-this._getLinkDensity(w));w.readability.contentScore=E,this.log("Candidate:",w,"with score "+E);for(var _=0;_<this._nbTopCandidates;_++){var T=m[_];if(!T||E>T.readability.contentScore){m.splice(_,0,w),m.length>this._nbTopCandidates&&m.pop();break}}}var v=m[0]||null,x=!1,S;if(v===null||v.tagName==="BODY"){for(v=i.createElement("DIV"),x=!0;r.firstChild;)this.log("Moving child out:",r.firstChild),v.appendChild(r.firstChild);r.appendChild(v),this._initializeNode(v)}else if(v){for(var k=[],C=1;C<m.length;C++)m[C].readability.contentScore/v.readability.contentScore>=.75&&k.push(this._getNodeAncestors(m[C]));var N=3;if(k.length>=N)for(S=v.parentNode;S.tagName!=="BODY";){for(var O=0,B=0;B<k.length&&O<N;B++)O+=Number(k[B].includes(S));if(O>=N){v=S;break}S=S.parentNode}v.readability||this._initializeNode(v),S=v.parentNode;for(var P=v.readability.contentScore,U=P/3;S.tagName!=="BODY";){if(!S.readability){S=S.parentNode;continue}var z=S.readability.contentScore;if(z<U)break;if(z>P){v=S;break}P=S.readability.contentScore,S=S.parentNode}for(S=v.parentNode;S.tagName!="BODY"&&S.children.length==1;)v=S,S=v.parentNode;v.readability||this._initializeNode(v)}var j=i.createElement("DIV");a&&(j.id="readability-content");var ne=Math.max(10,v.readability.contentScore*.2);S=v.parentNode;for(var K=S.children,ee=0,L=K.length;ee<L;ee++){var M=K[ee],H=!1;if(this.log("Looking at sibling node:",M,M.readability?"with score "+M.readability.contentScore:""),this.log("Sibling has score",M.readability?M.readability.contentScore:"Unknown"),M===v)H=!0;else{var G=0;if(M.className===v.className&&v.className!==""&&(G+=v.readability.contentScore*.2),M.readability&&M.readability.contentScore+G>=ne)H=!0;else if(M.nodeName==="P"){var X=this._getLinkDensity(M),ue=this._getInnerText(M),pe=ue.length;(pe>80&&X<.25||pe<80&&pe>0&&X===0&&ue.search(/\.( |$)/)!==-1)&&(H=!0)}}H&&(this.log("Appending node:",M),this.ALTER_TO_DIV_EXCEPTIONS.indexOf(M.nodeName)===-1&&(this.log("Altering sibling:",M,"to div."),M=this._setNodeTag(M,"DIV")),j.appendChild(M),K=S.children,ee-=1,L-=1)}if(this._debug&&this.log("Article content pre-prep: "+j.innerHTML),this._prepArticle(j),this._debug&&this.log("Article content post-prep: "+j.innerHTML),x)v.id="readability-page-1",v.className="page";else{var he=i.createElement("DIV");for(he.id="readability-page-1",he.className="page";j.firstChild;)he.appendChild(j.firstChild);j.appendChild(he)}this._debug&&this.log("Article content after paging: "+j.innerHTML);var Q=!0,ae=this._getInnerText(j,!0).length;if(ae<this._charThreshold)if(Q=!1,r.innerHTML=o,this._flagIsActive(this.FLAG_STRIP_UNLIKELYS))this._removeFlag(this.FLAG_STRIP_UNLIKELYS),this._attempts.push({articleContent:j,textLength:ae});else if(this._flagIsActive(this.FLAG_WEIGHT_CLASSES))this._removeFlag(this.FLAG_WEIGHT_CLASSES),this._attempts.push({articleContent:j,textLength:ae});else if(this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY),this._attempts.push({articleContent:j,textLength:ae});else{if(this._attempts.push({articleContent:j,textLength:ae}),this._attempts.sort(function(Y,ie){return ie.textLength-Y.textLength}),!this._attempts[0].textLength)return null;j=this._attempts[0].articleContent,Q=!0}if(Q){var oe=[S,v].concat(this._getNodeAncestors(S));return this._someNode(oe,function(Y){if(!Y.tagName)return!1;var ie=Y.getAttribute("dir");return ie?(this._articleDir=ie,!0):!1}),j}}},_isValidByline:function(r){return typeof r=="string"||r instanceof String?(r=r.trim(),r.length>0&&r.length<100):!1},_unescapeHtmlEntities:function(r){if(!r)return r;var i=this.HTML_ESCAPE_MAP;return r.replace(/&(quot|amp|apos|lt|gt);/g,function(a,o){return i[o]}).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi,function(a,o,s){var l=parseInt(o||s,o?16:10);return String.fromCharCode(l)})},_getJSONLD:function(r){var i=this._getAllNodesWithTag(r,["script"]),a;return this._forEachNode(i,function(o){if(!a&&o.getAttribute("type")==="application/ld+json")try{var s=o.textContent.replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g,""),l=JSON.parse(s);if(!l["@context"]||!l["@context"].match(/^https?\:\/\/schema\.org$/)||(!l["@type"]&&Array.isArray(l["@graph"])&&(l=l["@graph"].find(function(d){return(d["@type"]||"").match(this.REGEXPS.jsonLdArticleTypes)})),!l||!l["@type"]||!l["@type"].match(this.REGEXPS.jsonLdArticleTypes)))return;if(a={},typeof l.name=="string"&&typeof l.headline=="string"&&l.name!==l.headline){var c=this._getArticleTitle(),u=this._textSimilarity(l.name,c)>.75,p=this._textSimilarity(l.headline,c)>.75;p&&!u?a.title=l.headline:a.title=l.name}else typeof l.name=="string"?a.title=l.name.trim():typeof l.headline=="string"&&(a.title=l.headline.trim());l.author&&(typeof l.author.name=="string"?a.byline=l.author.name.trim():Array.isArray(l.author)&&l.author[0]&&typeof l.author[0].name=="string"&&(a.byline=l.author.filter(function(d){return d&&typeof d.name=="string"}).map(function(d){return d.name.trim()}).join(", "))),typeof l.description=="string"&&(a.excerpt=l.description.trim()),l.publisher&&typeof l.publisher.name=="string"&&(a.siteName=l.publisher.name.trim());return}catch(d){this.log(d.message)}}),a||{}},_getArticleMetadata:function(r){var i={},a={},o=this._doc.getElementsByTagName("meta"),s=/\s*(dc|dcterm|og|twitter)\s*:\s*(author|creator|description|title|site_name)\s*/gi,l=/^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;return this._forEachNode(o,function(c){var u=c.getAttribute("name"),p=c.getAttribute("property"),d=c.getAttribute("content");if(d){var h=null,b=null;p&&(h=p.match(s),h&&(b=h[0].toLowerCase().replace(/\s/g,""),a[b]=d.trim())),!h&&u&&l.test(u)&&(b=u,d&&(b=b.toLowerCase().replace(/\s/g,"").replace(/\./g,":"),a[b]=d.trim()))}}),i.title=r.title||a["dc:title"]||a["dcterm:title"]||a["og:title"]||a["weibo:article:title"]||a["weibo:webpage:title"]||a.title||a["twitter:title"],i.title||(i.title=this._getArticleTitle()),i.byline=r.byline||a["dc:creator"]||a["dcterm:creator"]||a.author,i.excerpt=r.excerpt||a["dc:description"]||a["dcterm:description"]||a["og:description"]||a["weibo:article:description"]||a["weibo:webpage:description"]||a.description||a["twitter:description"],i.siteName=r.siteName||a["og:site_name"],i.title=this._unescapeHtmlEntities(i.title),i.byline=this._unescapeHtmlEntities(i.byline),i.excerpt=this._unescapeHtmlEntities(i.excerpt),i.siteName=this._unescapeHtmlEntities(i.siteName),i},_isSingleImage:function(r){return r.tagName==="IMG"?!0:r.children.length!==1||r.textContent.trim()!==""?!1:this._isSingleImage(r.children[0])},_unwrapNoscriptImages:function(r){var i=Array.from(r.getElementsByTagName("img"));this._forEachNode(i,function(o){for(var s=0;s<o.attributes.length;s++){var l=o.attributes[s];switch(l.name){case"src":case"srcset":case"data-src":case"data-srcset":return}if(/\.(jpg|jpeg|png|webp)/i.test(l.value))return}o.parentNode.removeChild(o)});var a=Array.from(r.getElementsByTagName("noscript"));this._forEachNode(a,function(o){var s=r.createElement("div");if(s.innerHTML=o.innerHTML,!!this._isSingleImage(s)){var l=o.previousElementSibling;if(l&&this._isSingleImage(l)){var c=l;c.tagName!=="IMG"&&(c=l.getElementsByTagName("img")[0]);for(var u=s.getElementsByTagName("img")[0],p=0;p<c.attributes.length;p++){var d=c.attributes[p];if(d.value!==""&&(d.name==="src"||d.name==="srcset"||/\.(jpg|jpeg|png|webp)/i.test(d.value))){if(u.getAttribute(d.name)===d.value)continue;var h=d.name;u.hasAttribute(h)&&(h="data-old-"+h),u.setAttribute(h,d.value)}}o.parentNode.replaceChild(s.firstElementChild,l)}}})},_removeScripts:function(r){this._removeNodes(this._getAllNodesWithTag(r,["script","noscript"]))},_hasSingleTagInsideElement:function(r,i){return r.children.length!=1||r.children[0].tagName!==i?!1:!this._someNode(r.childNodes,function(a){return a.nodeType===this.TEXT_NODE&&this.REGEXPS.hasContent.test(a.textContent)})},_isElementWithoutContent:function(r){return r.nodeType===this.ELEMENT_NODE&&r.textContent.trim().length==0&&(r.children.length==0||r.children.length==r.getElementsByTagName("br").length+r.getElementsByTagName("hr").length)},_hasChildBlockElement:function(r){return this._someNode(r.childNodes,function(i){return this.DIV_TO_P_ELEMS.has(i.tagName)||this._hasChildBlockElement(i)})},_isPhrasingContent:function(r){return r.nodeType===this.TEXT_NODE||this.PHRASING_ELEMS.indexOf(r.tagName)!==-1||(r.tagName==="A"||r.tagName==="DEL"||r.tagName==="INS")&&this._everyNode(r.childNodes,this._isPhrasingContent)},_isWhitespace:function(r){return r.nodeType===this.TEXT_NODE&&r.textContent.trim().length===0||r.nodeType===this.ELEMENT_NODE&&r.tagName==="BR"},_getInnerText:function(r,i){i=typeof i>"u"?!0:i;var a=r.textContent.trim();return i?a.replace(this.REGEXPS.normalize," "):a},_getCharCount:function(r,i){return i=i||",",this._getInnerText(r).split(i).length-1},_cleanStyles:function(r){if(!(!r||r.tagName.toLowerCase()==="svg")){for(var i=0;i<this.PRESENTATIONAL_ATTRIBUTES.length;i++)r.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[i]);this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(r.tagName)!==-1&&(r.removeAttribute("width"),r.removeAttribute("height"));for(var a=r.firstElementChild;a!==null;)this._cleanStyles(a),a=a.nextElementSibling}},_getLinkDensity:function(r){var i=this._getInnerText(r).length;if(i===0)return 0;var a=0;return this._forEachNode(r.getElementsByTagName("a"),function(o){var s=o.getAttribute("href"),l=s&&this.REGEXPS.hashUrl.test(s)?.3:1;a+=this._getInnerText(o).length*l}),a/i},_getClassWeight:function(r){if(!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))return 0;var i=0;return typeof r.className=="string"&&r.className!==""&&(this.REGEXPS.negative.test(r.className)&&(i-=25),this.REGEXPS.positive.test(r.className)&&(i+=25)),typeof r.id=="string"&&r.id!==""&&(this.REGEXPS.negative.test(r.id)&&(i-=25),this.REGEXPS.positive.test(r.id)&&(i+=25)),i},_clean:function(r,i){var a=["object","embed","iframe"].indexOf(i)!==-1;this._removeNodes(this._getAllNodesWithTag(r,[i]),function(o){if(a){for(var s=0;s<o.attributes.length;s++)if(this._allowedVideoRegex.test(o.attributes[s].value))return!1;if(o.tagName==="object"&&this._allowedVideoRegex.test(o.innerHTML))return!1}return!0})},_hasAncestorTag:function(r,i,a,o){a=a||3,i=i.toUpperCase();for(var s=0;r.parentNode;){if(a>0&&s>a)return!1;if(r.parentNode.tagName===i&&(!o||o(r.parentNode)))return!0;r=r.parentNode,s++}return!1},_getRowAndColumnCount:function(r){for(var i=0,a=0,o=r.getElementsByTagName("tr"),s=0;s<o.length;s++){var l=o[s].getAttribute("rowspan")||0;l&&(l=parseInt(l,10)),i+=l||1;for(var c=0,u=o[s].getElementsByTagName("td"),p=0;p<u.length;p++){var d=u[p].getAttribute("colspan")||0;d&&(d=parseInt(d,10)),c+=d||1}a=Math.max(a,c)}return{rows:i,columns:a}},_markDataTables:function(r){for(var i=r.getElementsByTagName("table"),a=0;a<i.length;a++){var o=i[a],s=o.getAttribute("role");if(s=="presentation"){o._readabilityDataTable=!1;continue}var l=o.getAttribute("datatable");if(l=="0"){o._readabilityDataTable=!1;continue}var c=o.getAttribute("summary");if(c){o._readabilityDataTable=!0;continue}var u=o.getElementsByTagName("caption")[0];if(u&&u.childNodes.length>0){o._readabilityDataTable=!0;continue}var p=["col","colgroup","tfoot","thead","th"],d=function(b){return!!o.getElementsByTagName(b)[0]};if(p.some(d)){this.log("Data table because found data-y descendant"),o._readabilityDataTable=!0;continue}if(o.getElementsByTagName("table")[0]){o._readabilityDataTable=!1;continue}var h=this._getRowAndColumnCount(o);if(h.rows>=10||h.columns>4){o._readabilityDataTable=!0;continue}o._readabilityDataTable=h.rows*h.columns>10}},_fixLazyImages:function(r){this._forEachNode(this._getAllNodesWithTag(r,["img","picture","figure"]),function(i){if(i.src&&this.REGEXPS.b64DataUrl.test(i.src)){var a=this.REGEXPS.b64DataUrl.exec(i.src);if(a[1]==="image/svg+xml")return;for(var o=!1,s=0;s<i.attributes.length;s++){var l=i.attributes[s];if(l.name!=="src"&&/\.(jpg|jpeg|png|webp)/i.test(l.value)){o=!0;break}}if(o){var c=i.src.search(/base64\s*/i)+7,u=i.src.length-c;u<133&&i.removeAttribute("src")}}if(!((i.src||i.srcset&&i.srcset!="null")&&i.className.toLowerCase().indexOf("lazy")===-1)){for(var p=0;p<i.attributes.length;p++)if(l=i.attributes[p],!(l.name==="src"||l.name==="srcset"||l.name==="alt")){var d=null;if(/\.(jpg|jpeg|png|webp)\s+\d/.test(l.value)?d="srcset":/^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(l.value)&&(d="src"),d){if(i.tagName==="IMG"||i.tagName==="PICTURE")i.setAttribute(d,l.value);else if(i.tagName==="FIGURE"&&!this._getAllNodesWithTag(i,["img","picture"]).length){var h=this._doc.createElement("img");h.setAttribute(d,l.value),i.appendChild(h)}}}}})},_getTextDensity:function(r,i){var a=this._getInnerText(r,!0).length;if(a===0)return 0;var o=0,s=this._getAllNodesWithTag(r,i);return this._forEachNode(s,l=>o+=this._getInnerText(l,!0).length),o/a},_cleanConditionally:function(r,i){this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)&&this._removeNodes(this._getAllNodesWithTag(r,[i]),function(a){var o=function(S){return S._readabilityDataTable},s=i==="ul"||i==="ol";if(!s){var l=0,c=this._getAllNodesWithTag(a,["ul","ol"]);this._forEachNode(c,S=>l+=this._getInnerText(S).length),s=l/this._getInnerText(a).length>.9}if(i==="table"&&o(a)||this._hasAncestorTag(a,"table",-1,o)||this._hasAncestorTag(a,"code"))return!1;var u=this._getClassWeight(a);this.log("Cleaning Conditionally",a);var p=0;if(u+p<0)return!0;if(this._getCharCount(a,",")<10){for(var d=a.getElementsByTagName("p").length,h=a.getElementsByTagName("img").length,b=a.getElementsByTagName("li").length-100,g=a.getElementsByTagName("input").length,m=this._getTextDensity(a,["h1","h2","h3","h4","h5","h6"]),f=0,y=this._getAllNodesWithTag(a,["object","embed","iframe"]),w=0;w<y.length;w++){for(var E=0;E<y[w].attributes.length;E++)if(this._allowedVideoRegex.test(y[w].attributes[E].value))return!1;if(y[w].tagName==="object"&&this._allowedVideoRegex.test(y[w].innerHTML))return!1;f++}var _=this._getLinkDensity(a),T=this._getInnerText(a).length,v=h>1&&d/h<.5&&!this._hasAncestorTag(a,"figure")||!s&&b>d||g>Math.floor(d/3)||!s&&m<.9&&T<25&&(h===0||h>2)&&!this._hasAncestorTag(a,"figure")||!s&&u<25&&_>.2||u>=25&&_>.5||f===1&&T<75||f>1;if(s&&v){for(var x=0;x<a.children.length;x++)if(a.children[x].children.length>1)return v;let S=a.getElementsByTagName("li").length;if(h==S)return!1}return v}return!1})},_cleanMatchedNodes:function(r,i){for(var a=this._getNextNode(r,!0),o=this._getNextNode(r);o&&o!=a;)i.call(this,o,o.className+" "+o.id)?o=this._removeAndGetNext(o):o=this._getNextNode(o)},_cleanHeaders:function(r){let i=this._getAllNodesWithTag(r,["h1","h2"]);this._removeNodes(i,function(a){let o=this._getClassWeight(a)<0;return o&&this.log("Removing header with low class weight:",a),o})},_headerDuplicatesTitle:function(r){if(r.tagName!="H1"&&r.tagName!="H2")return!1;var i=this._getInnerText(r,!1);return this.log("Evaluating similarity of header:",i,this._articleTitle),this._textSimilarity(this._articleTitle,i)>.75},_flagIsActive:function(r){return(this._flags&r)>0},_removeFlag:function(r){this._flags=this._flags&~r},_isProbablyVisible:function(r){return(!r.style||r.style.display!="none")&&!r.hasAttribute("hidden")&&(!r.hasAttribute("aria-hidden")||r.getAttribute("aria-hidden")!="true"||r.className&&r.className.indexOf&&r.className.indexOf("fallback-image")!==-1)},parse:function(){if(this._maxElemsToParse>0){var r=this._doc.getElementsByTagName("*").length;if(r>this._maxElemsToParse)throw new Error("Aborting parsing document; "+r+" elements found")}this._unwrapNoscriptImages(this._doc);var i=this._disableJSONLD?{}:this._getJSONLD(this._doc);this._removeScripts(this._doc),this._prepDocument();var a=this._getArticleMetadata(i);this._articleTitle=a.title;var o=this._grabArticle();if(!o)return null;if(this.log("Grabbed: "+o.innerHTML),this._postProcessContent(o),!a.excerpt){var s=o.getElementsByTagName("p");s.length>0&&(a.excerpt=s[0].textContent.trim())}var l=o.textContent;return{title:this._articleTitle,byline:a.byline||this._articleByline,dir:this._articleDir,lang:this._articleLang,content:this._serializer(o),textContent:l,length:l.length,excerpt:a.excerpt,siteName:a.siteName||this._articleSiteName}}},typeof e=="object"&&(e.exports=n)}),ay=ks((t,e)=>{var n={unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i};function r(a){return(!a.style||a.style.display!="none")&&!a.hasAttribute("hidden")&&(!a.hasAttribute("aria-hidden")||a.getAttribute("aria-hidden")!="true"||a.className&&a.className.indexOf&&a.className.indexOf("fallback-image")!==-1)}function i(a,o={}){typeof o=="function"&&(o={visibilityChecker:o});var s={minScore:20,minContentLength:140,visibilityChecker:r};o=Object.assign(s,o);var l=a.querySelectorAll("p, pre, article"),c=a.querySelectorAll("div > br");if(c.length){var u=new Set(l);[].forEach.call(c,function(d){u.add(d.parentNode)}),l=Array.from(u)}var p=0;return[].some.call(l,function(d){if(!o.visibilityChecker(d))return!1;var h=d.className+" "+d.id;if(n.unlikelyCandidates.test(h)&&!n.okMaybeItsACandidate.test(h)||d.matches("li p"))return!1;var b=d.textContent.trim().length;return b<o.minContentLength?!1:(p+=Math.sqrt(b-o.minContentLength),p>o.minScore)})}typeof e=="object"&&(e.exports=i)}),qp=ks((t,e)=>{var n=iy(),r=ay();e.exports={Readability:n,isProbablyReaderable:r}}),Kp={};ny(Kp,{Readability:()=>Vp,default:()=>Yp,isProbablyReaderable:()=>Xp});var Gp=jp(qp());ry(Kp,jp(qp()));var{Readability:Vp,isProbablyReaderable:Xp}=Gp,{default:Hp,...oy}=Gp,Yp=Hp!==void 0?Hp:oy;var o_=ra.alert;var _t=window,Qp=!1,Jp=!!(_t.Worker&&_t.Blob&&_t.Promise&&_t.OffscreenCanvas&&_t.OffscreenCanvasRenderingContext2D&&_t.HTMLCanvasElement&&_t.HTMLCanvasElement.prototype.transferControlToOffscreen&&_t.URL&&_t.URL.createObjectURL);function Zp(){}function Ls(t){var e=_t.Promise,n=e!==void 0?e:_t.Promise;return typeof n=="function"?new n(t):(t(Zp,Zp),null)}var As=function(){var t=Math.floor(16.666666666666668),e,n,r={},i=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(a){var o=Math.random();return r[o]=requestAnimationFrame(function s(l){i===l||i+t-1<l?(i=l,delete r[o],a()):r[o]=requestAnimationFrame(s)}),o},n=function(a){r[a]&&cancelAnimationFrame(r[a])}):(e=function(a){return setTimeout(a,t)},n=function(a){return clearTimeout(a)}),{frame:e,cancel:n}}(),sy=function(){var t,e,n={};function r(i){function a(o,s){i.postMessage({options:o||{},callback:s})}i.init=function(s){var l=s.transferControlToOffscreen();i.postMessage({canvas:l},[l])},i.fire=function(s,l,c){if(e)return a(s,null),e;var u=Math.random().toString(36).slice(2);return e=Ls(function(p){function d(h){h.data.callback===u&&(delete n[u],i.removeEventListener("message",d),e=null,c(),p())}i.addEventListener("message",d),a(s,u),n[u]=d.bind(null,{data:{callback:u}})}),e},i.reset=function(){i.postMessage({reset:!0});for(var s in n)n[s](),delete n[s]}}return function(){if(t)return t;if(!Qp&&Jp){var i=["var CONFETTI, SIZE = {}, module = {};","("+main.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([i])))}catch{return null}r(t)}return t}}(),ly={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function cy(t,e){return e?e(t):t}function uy(t){return t!=null}function $e(t,e,n){return cy(t&&uy(t[e])?t[e]:ly[e],n)}function dy(t){return t<0?0:Math.floor(t)}function py(t,e){return Math.floor(Math.random()*(e-t))+t}function Es(t){return parseInt(t,16)}function hy(t){return t.map(fy)}function fy(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:Es(e.substring(0,2)),g:Es(e.substring(2,4)),b:Es(e.substring(4,6))}}function my(t){var e=$e(t,"origin",Object);return e.x=$e(e,"x",Number),e.y=$e(e,"y",Number),e}function gy(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function by(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function yy(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}function wy(t,e,n,r,i,a,o,s,l){t.save(),t.translate(e,n),t.rotate(a),t.scale(r,i),t.arc(0,0,1,o,s,l),t.restore()}function vy(t){var e=t.angle*(Math.PI/180),n=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:t.startVelocity*.5+Math.random()*t.startVelocity,angle2D:-e+(.5*n-Math.random()*n),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:t.gravity*3,ovalScalar:.6,scalar:t.scalar}}function xy(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var n=e.tick++/e.totalTicks,r=e.x+e.random*e.tiltCos,i=e.y+e.random*e.tiltSin,a=e.wobbleX+e.random*e.tiltCos,o=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),e.shape==="circle")t.ellipse?t.ellipse(e.x,e.y,Math.abs(a-r)*e.ovalScalar,Math.abs(o-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):wy(t,e.x,e.y,Math.abs(a-r)*e.ovalScalar,Math.abs(o-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var s=Math.PI/2*3,l=4*e.scalar,c=8*e.scalar,u=e.x,p=e.y,d=5,h=Math.PI/d;d--;)u=e.x+Math.cos(s)*c,p=e.y+Math.sin(s)*c,t.lineTo(u,p),s+=h,u=e.x+Math.cos(s)*l,p=e.y+Math.sin(s)*l,t.lineTo(u,p),s+=h;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(i)),t.lineTo(Math.floor(a),Math.floor(o)),t.lineTo(Math.floor(r),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}function Ty(t,e,n,r,i){var a=e.slice(),o=t.getContext("2d"),s,l,c=Ls(function(u){function p(){s=l=null,o.clearRect(0,0,r.width,r.height),i(),u()}function d(){Qp&&!(r.width===workerSize.width&&r.height===workerSize.height)&&(r.width=t.width=workerSize.width,r.height=t.height=workerSize.height),!r.width&&!r.height&&(n(t),r.width=t.width,r.height=t.height),o.clearRect(0,0,r.width,r.height),a=a.filter(function(h){return xy(o,h)}),a.length?s=As.frame(d):p()}s=As.frame(d),l=p});return{addFettis:function(u){return a=a.concat(u),c},canvas:t,promise:c,reset:function(){s&&As.cancel(s),l&&l()}}}function _y(t,e){var n=!t,r=!!$e(e||{},"resize"),i=$e(e,"disableForReducedMotion",Boolean),a=Jp&&!!$e(e||{},"useWorker"),o=a?sy():null,s=n?gy:by,l=t&&o?!!t.__confetti_initialized:!1,c=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,u;function p(h,b,g){for(var m=$e(h,"particleCount",dy),f=$e(h,"angle",Number),y=$e(h,"spread",Number),w=$e(h,"startVelocity",Number),E=$e(h,"decay",Number),_=$e(h,"gravity",Number),T=$e(h,"drift",Number),v=$e(h,"colors",hy),x=$e(h,"ticks",Number),S=$e(h,"shapes"),k=$e(h,"scalar"),C=my(h),N=m,O=[],B=t.width*C.x,P=t.height*C.y;N--;)O.push(vy({x:B,y:P,angle:f,spread:y,startVelocity:w,color:v[N%v.length],shape:S[py(0,S.length)],ticks:x,decay:E,gravity:_,drift:T,scalar:k}));return u?u.addFettis(O):(u=Ty(t,O,s,b,g),u.promise)}function d(h){var b=i||$e(h,"disableForReducedMotion",Boolean),g=$e(h,"zIndex",Number);if(b&&c)return Ls(function(w){w()});n&&u?t=u.canvas:n&&!t&&(t=yy(g),document.body.appendChild(t)),r&&!l&&s(t);var m={width:t.width,height:t.height};o&&!l&&o.init(t),l=!0,o&&(t.__confetti_initialized=!0);function f(){if(o){var w={getBoundingClientRect:function(){if(!n)return t.getBoundingClientRect()}};s(w),o.postMessage({resize:{width:w.width,height:w.height}});return}m.width=m.height=null}function y(){u=null,r&&_t.removeEventListener("resize",f),n&&t&&(document.body.removeChild(t),t=null,l=!1)}return r&&_t.addEventListener("resize",f,!1),o?o.fire(h,m,y):p(h,m,y)}return d.reset=function(){o&&o.reset(),u&&u.reset()},d}var Cs;function Sy(){return Cs||(Cs=_y(null,{useWorker:!1,resize:!0})),Cs}function Ds(){return Sy().apply(this,arguments)}var eh={nologin:"\u672A\u767B\u5F55",loginForSafari:"\u767B\u5F55\u6216\u6CE8\u518C",login:"\u767B\u5F55\u540E\u53EF\u5F00\u901A\u4F1A\u5458",manageAccount:"\u7BA1\u7406\u8D26\u6237",openPremium:"\u5F00\u901A\u4F1A\u5458",logout:"\u9000\u51FA",curentPlan:"\u5F53\u524D\u5957\u9910",endAt:"\u5230\u671F",endAuto:"\u81EA\u52A8\u7EED\u671F",lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","noSupportTranslate-pdf":"\u811A\u672C\u4E0D\u652F\u6301\u8BF7\u4F7F\u7528\u63D2\u4EF6","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u5BFC\u5165PDF",enableLineBreak:"\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E\u683C\u5F0F\u4E3A (\u6CA1\u6709\u505A\u81EA\u52A8\u8BC6\u522B\uFF0C\u8BF7\u76F4\u63A5\u8F93\u5165)\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.shortBrandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1: \u53CC\u8BED\u5BF9\u7167\u7F51\u9875\u7FFB\u8BD1 & PDF\u6587\u6863\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u652F\u6301PDF\u7FFB\u8BD1\uFF0C\u53CC\u8BEDEpub\u7535\u5B50\u4E66\u5236\u4F5C\uFF0CYoutube/Netflix/Udemy \u7B49\u5E73\u53F0\u53CC\u8BED\u5B57\u5E55\uFF0C\u652F\u6301Deepl/Google\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u514D\u8D39\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8BD1\u5E76\u9690\u85CF\u539F\u6587/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.shareToDraft":"\u5206\u4EAB\u53CC\u8BED\u9875\u9762","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.toggleTranslationMask":"\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6","browser.openEbookViewer":"\u9605\u8BFB\u672C\u5730\u7535\u5B50\u4E66","browser.openEbookBuilder":"\u5236\u4F5C\u53CC\u8BED EPUB \u7535\u5B50\u4E66","browser.translateLocalHtmlFile":"\u7FFB\u8BD1 HTML/txt \u6587\u4EF6","browser.donateContext":"\u4E86\u89E3\u8D5E\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8BD1\u672C\u5730\u5B57\u5E55\u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",isShowContextMenu:"\u5C06\u7FFB\u8BD1\u7F51\u9875\u52A0\u5165\u53F3\u952E\u83DC\u5355\u9879",toggleBeta:"\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",betaDescription:"\u542F\u7528\u4ECD\u5728\u5B9E\u9A8C\u6027\u7684\u529F\u80FD\uFF0C\u4EE5\u53CA\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u603B\u662F\u6362\u884C\u9002\u7528\u4E8E\u8F83\u5C11\u5185\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F50\u3002\uFF08\u5728\u5185\u5BB9\u8F83\u591A\u7684\u957F\u6BB5\u843D(\u8D85\u8FC7{count}\u4E2A\u5B57\u7B26) \u4F7F\u7528\u667A\u80FD\u6362\u884C\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1\uFF0C\u53EF\u8BBE\u7F6E\u4E34\u65F6\u65F6\u957F",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5219\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875(\u4EC5\u8BD1\u6587)/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",mouseHoldKey:"+ {key} \u7FFB\u8BD1/\u8FD8\u539F\u8BE5\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E(\u6253\u5F00\u8BBE\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8BD1/\u8FD8\u539F\u8BE5\u6BB5",mouseHoverHoldKey:"\u9F20\u6807\u60AC\u505C\u540C\u65F6\u6309\u4E0B\u5FEB\u6377\u952E\u7FFB\u8BD1\u6BB5\u843D","mouse-translate":"\u9F20\u6807\u60AC\u505C",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",resetThisSuccess:"\u91CD\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\u3002\u4EC5\u5BF9\u4E8E\u66F4\u4E13\u4E1A\u7684\u7528\u6237\uFF0C\u63D0\u4F9B\u66F4\u4E2A\u6027\u5316\u7684\u8BBE\u7F6E\u9879\u3002",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u4EF7\u683C","translate to the bottom of the page":"\u8FDB\u5165\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u8FDB\u5165\u7F51\u9875\u5C06\u7ACB\u5373\u7FFB\u8BD1\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\u3002\u5173\u95ED\u5219\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u6240\u6709\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\u3002\u5173\u95ED\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\uFF0C\u4EC5\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8BD1\u9875\u9762\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\uFF0C\u800C\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",moreOptions:"\u5C55\u5F00\u66F4\u591A\u81EA\u5B9A\u4E49\u9009\u9879",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",changeToOnlyTranslationMode:"\u5207\u6362\u4E3A\u4EC5\u663E\u793A\u8BD1\u6587",changeToDualTranslationMode:"\u5207\u6362\u4E3A\u53CC\u8BED\u7FFB\u8BD1",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",badUserscriptBrowser:"\u5F53\u524D\u6D4F\u89C8\u5668\u6CA1\u6709\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u6269\u5C55\u7684\u63A5\u53E3\uFF08\u6BD4\u5982\u83B7\u53D6\u6CB9\u7334\u811A\u672C\u81EA\u8EAB\u7684\u7248\u672C\u53F7\u4FE1\u606F\uFF09\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334\u6269\u5C55</1>\u7684\u6D4F\u89C8\u5668\u5982 Firefox",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",needActionForOptions:"(\u9700\u8BBE\u7F6E)",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u5F53\u524D\u7F51\u7AD9",autoEnableSubtitle:"\u81EA\u52A8\u5F00\u542F\u53CC\u8BED\u5B57\u5E55",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1 {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1 {language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",alwaysTranslateSomeSiteOrWildSite:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u7AD9",alwaysTranslateSomePage:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u9875",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA",import_export_title:"\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65",floatBallOptions:"\u60AC\u6D6E\u7403\u8BBE\u7F6E","floatBallOptions.enable":"\u542F\u7528\u60AC\u6D6E\u7403","floatBallOptions.blockUrls":"\u7981\u7528\u7F51\u7AD9","floatBallOptions.add":"\u6DFB\u52A0","floatBallOptions.blockUrlDesc":"\u5F53\u9047\u4E0B\u5217\u7F51\u7AD9\u65F6\u4E0D\u663E\u793A\u60AC\u6D6E\u7403","floatBallOptions.clickType":"\u70B9\u51FB\u884C\u4E3A","floatBallOptions.clickTypeDesc":"\u60AC\u6D6E\u7403\u56FE\u6807\u70B9\u51FB\u65F6\u7684\u884C\u4E3A","floatBallOptions.clickPopup":"\u663E\u793A\u7FFB\u8BD1\u9762\u677F","floatBallOptions.clickTranslate":"\u7FFB\u8BD1/\u663E\u793A\u539F\u6587",previewAllThemes:"\u9884\u89C8\u5168\u90E8\u6837\u5F0F","translationTheme.none":"\u65E0","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.solidBorder":"\u5B9E\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B66\u4E60\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.marker2":"\u9A6C\u514B\u7B142","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7EBF","translationServices.custom":"\u81EA\u5B9A\u4E49API","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.tenAlpha":"\u817E\u8BAF\u7FFB\u8BD1\u541B(Alpha)","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeepLX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.deepl":"DeepL","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"Azure \u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.cai":"\u5F69\u4E91\u5C0F\u8BD1 (Alpha)","translationServices.volcAlpha":"\u706B\u5C71 (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.you":"\u6709\u9053\u7FFB\u8BD1 (Alpha)","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.niu":"\u5C0F\u725B\u7FFB\u8BD1","translationServices.papago":"Papago \u7FFB\u8BD1","translationServices.d":"D (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u5C06\u8DF3\u8FC7\u7FFB\u8BD1",enableUserscriptPagePopup:"\u5728\u9875\u9762\u4E0A\u663E\u793A\u60AC\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u603B\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8BD1\u6587\u6837\u5F0F",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B",syncToCloud:"\u540C\u6B65\u5230 Google Drive",syncToCloudDescription:"\u4E0A\u4F20\u5230\u4E91\u7AEF\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",syncToAccount:"\u540C\u6B65\u5230\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u4E91\u7AEF",syncToAccountButton:"\u7ACB\u5373\u4E0E\u4E91\u7AEF\u540C\u6B65",syncToAccountDescription:"\u5728\u4E0D\u540C\u7684\u8BBE\u5907\u4E4B\u95F4\u81EA\u52A8\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",successSyncConfigInAccount:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",successSyncConfigToAccount:"\u6210\u529F\u540C\u6B65\u5230\u4E91\u7AEF",syncConfigNoUpdate:"\u5DF2\u7ECF\u662F\u6700\u65B0\u7684\u4E86",authFail:"\u6388\u6743\u5931\u8D25",syncTitle:"\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",import_hint:"\u5BFC\u5165",upload:"\u4E0A\u4F20",revokeAuth:"\u64A4\u9500\u6388\u6743",uploadFail:"\u4E0A\u4F20\u5931\u8D25",download:"\u4E0B\u8F7D",importSuccess:"\u5BFC\u5165\u6210\u529F",importFail:"\u5BFC\u5165\u5931\u8D25",deleteFail:"\u5220\u9664\u5931\u8D25",backupToCloud:"\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5907\u4EFD\u8282\u70B9",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",backupToCloudDescription:"\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",successSyncConfig:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u8D25",updatedAt:"\u66F4\u65B0\u4E8E {date}",lastSyncedAt:"\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",downloadFail:"\u4E0B\u8F7D\u5931\u8D25",clickToDownload:"\u70B9\u51FB\u4E0B\u8F7D",aboutLabel:"\u5173\u4E8E - \u53CD\u9988","browser.openAboutPage":"\u5173\u4E8E/\u53CD\u9988",aboutLabelWithoutSponsor:"\u5173\u4E8E - \u53CD\u9988",aboutIntro:"\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F \u4F60\u53EF\u9009\u62E9\u5F00\u901A <6>Pro\u4F1A\u5458</6> \u6765\u4F7F\u7528\u5F00\u7BB1\u5373\u7528\u7684 DeepL \u548C OpenAI \u7FFB\u8BD1\u3002 <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002<br/> <7>Pro \u4F1A\u5458</7> \u53EF\u4EE5\u901A\u8FC7\u5FEB\u901F\u5BA2\u670D\u90AE\u7BB1 <8>support@immersivetranslate.com</8> \u548C\u6211\u4EEC\u53D6\u5F97\u8054\u7CFB\u3002",aboutIntroWithoutSponsor:"\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F  <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002",projectHomepage:"\u9879\u76EE\u4E3B\u9875",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u4F17\u53F7",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u9891\u9053",joinTelegramChannel:"\u5173\u6CE8 Telegram \u9891\u9053\u83B7\u53D6\u6700\u65B0\u66F4\u65B0",feedbackAndJoin:"\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",autoSync:"\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",loadingThemeTitle:"Loading \u6837\u5F0F",loadingThemeDescription:"\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F","loadingTheme.spinner":"\u8F6C\u5708\u52A8\u753B","loadingTheme.text":"\u9759\u6001\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u663E\u793A",developerDescription:"\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863","edit border color":"\u4FEE\u6539\u8FB9\u6846\u989C\u8272",successSyncButNoChange:"\u5F53\u524D\u914D\u7F6E\u4E0E\u4E91\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u8FB9\u6846\u989C\u8272","customThemeLabel.borderRadius":"\u8FB9\u6846\u5706\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u989C\u8272","customThemeLabel.backgroundColor":"\u80CC\u666F\u989C\u8272","customThemeLabel.zoom":"\u5B57\u4F53\u7F29\u653E\u6BD4\u4F8B (%)","customThemeLabel.opacity":"\u6587\u5B57\u4E0D\u900F\u660E\u5EA6 (%)",resetToDefaultColor:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u989C\u8272",resetToDefaultSettings:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u8BBE\u7F6E",isTranslateTitle:"\u5F00\u542F\u7FFB\u8BD1\u7F51\u9875\u6807\u9898",isTranslateTitleDescription:"\u5F00\u542F\u540E\uFF0C\u7F51\u9875\u6807\u9898\u4F1A\u88AB\u7FFB\u8BD1",enableSearchEnhancement:"\u542F\u7528\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A",enableSearchEnhancementDescription:"\u5F00\u542F\u540E\uFF0C\u5728\u652F\u6301\u7684\u7F51\u7AD9\uFF08\u8C37\u6B4C\u65B0\u95FB\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u5173\u952E\u8BCD\uFF09\uFF0C\u96EA\u7403\uFF0C\u4E1C\u65B9\u8D22\u5BCC\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\u793E\u533A\uFF09\u53F3\u8FB9\u680F\u81EA\u52A8\u663E\u793A\u5BF9\u5E94\u82F1\u6587\u5173\u952E\u8BCD\u7684\u201C\u8C37\u6B4C\u65B0\u95FB\u201D\u641C\u7D22\u7ED3\u679C\u3002",verifyService:"\u70B9\u6B64\u6D4B\u8BD5\u670D\u52A1",verified:"\u9A8C\u8BC1\u6210\u529F","field.langs":"\u652F\u6301\u7684\u8BED\u8A00\u4EE3\u7801","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8BD1\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6570","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6570","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6587\u672C\u957F\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6BB5\u843D\u6570","field.apiUrl":"\u81EA\u5B9A\u4E49 API \u63A5\u53E3\u5730\u5740","field.placeholderDelimiters":"\u4FDD\u7559\u7684\u5360\u4F4D\u7B26","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>\u81EA\u5B9A\u4E49\u63A5\u53E3\u63A5\u5165</a> \u9700\u8981\u53C2\u8003\u6587\u6863","description.limitPerMinute":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u5206\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.generalLimitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002","description.prompt":"\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI","description.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u5B57\u7B26\u6570\uFF0C\u592A\u5927\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C1D\u8BD5\u8C03\u6574\u8BE5\u9009\u9879\u6765\u4F18\u5316\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7EDF\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00","field.domain":"\u9886\u57DF","description.domain":"\u9ED8\u8BA4\u4E3A\uFF1Ageneral\u3002\u4EC5\u5728\u6709\u9053API\u63A7\u5236\u53F0\u5F00\u901A\u9886\u57DF\u5316\u7FFB\u8BD1\u7684\u60C5\u51B5\u4E0B\u53EF\u8BBE\u7F6E\uFF0C\u652F\u6301\u9886\u57DF\u89C1<1>\u8FD9\u91CC</1>","field.scene":"\u573A\u666F","description.scene":"\u9ED8\u8BA4\u4E3A\uFF1Ageneral\u3002\u4EC5\u5728\u963F\u91CC\u4E91API\u63A7\u5236\u53F0\u5F00\u901A\u673A\u5668\u7FFB\u8BD1\u4E13\u4E1A\u7248\u7684\u60C5\u51B5\u4E0B\u53EF\u8BBE\u7F6E\uFF0C\u652F\u6301\u573A\u666F\u89C1<1>\u8FD9\u91CC</1>","field.vocabId":"\u7528\u6237\u8BCD\u5178 ID","description.vocabId":"\u6307\u5B9A\u7684\u8BCD\u5178 out_id\uFF0C\u76EE\u524D\u652F\u6301\u82F1\u8BD1\u4E2D","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u4E3A gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u53D1\u9001\u7ED9\u7FFB\u8BD1\u670D\u52A1\u7684\u6BB5\u843D\u6570\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6570\u91CF\u8FC7\u591A\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162","description.apiUrl":"\u8BF7\u6DFB\u52A0\u5177\u4F53\u5E26\u6709\u8DEF\u5F84\u7684\u7F51\u5740\uFF0C<1>\u66F4\u591A\u8BF4\u660E</1>",enabledExtension:"\u542F\u7528\u6269\u5C55",clickToDisableExtension:"\u70B9\u51FB\u7981\u7528\u6269\u5C55",clickToEnableExtension:"\u70B9\u51FB\u542F\u7528\u6269\u5C55",hasBeenDisabled:"\u5DF2\u7981\u7528","show password":"\u663E\u793A\u5BC6\u7801",customContent:"\u8F93\u5165\u81EA\u5B9A\u4E49\u6A21\u578B\u540D\u79F0",inputOptions:"\u8F93\u5165\u6846\u589E\u5F3A",mouseHoverOptions:"\u9F20\u6807\u60AC\u505C",modifyMouseHoverKey:"\u4FEE\u6539\u9F20\u6807\u60AC\u505C\u5FEB\u6377\u952E",enableInputTranslation:"\u662F\u5426\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",enableInputTranslationDescription:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165 {startingKey}{startingKey} \u4F60\u597D\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165\uFF1A\u4F60\u597D\u4E16\u754C\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguage:"\u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguageDescription:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00\uFF0C\u4E5F\u5C31\u662F {startingKey}{startingKey} \u4F5C\u4E3A\u89E6\u53D1\u8BCD\u7684\u9ED8\u8BA4\u8BED\u8A00",inputTargetLanguageDescriptionForNoneKey:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputStartingTriggerKeyTitle:"\u8BBE\u7F6E\u8F93\u5165\u6846\u90E8\u5206\u7FFB\u8BD1\u7684\u5206\u5272\u5B57\u7B26",inputStartingTriggerKeyDescription:"\u5F53\u4F60\u4E0D\u9700\u8981\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u7684\u65F6\u5019\uFF0C\u5206\u5272\u7B26\u5141\u8BB8\u4F60\u53EA\u7FFB\u8BD1 {startingKey}{startingKey} \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8BED\u8A00\u4EE3\u7801\uFF0C\u6BD4\u5982\uFF1A{startingKey}ja \u8868\u793A\u53EA\u7FFB\u8BD1 {startingKey}ja \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206",inputStartingTriggerKeyDescriptionForNoneKey:"\u5F53\u524D\u8BBE\u7F6E\u4E3A\u65E0\u9700\u524D\u7F00\uFF0C\u6682\u65E0\u6CD5\u4F7F\u7528\u8F93\u5165\u6846\u7684\u90E8\u5206\u6587\u672C\u7FFB\u8BD1\u529F\u80FD",inputTrailingTriggerKeyTitle:"\u9009\u62E9\u4E00\u4E2A\u8F93\u5165\u7ED3\u675F\u7684\u89E6\u53D1\u5B57\u7B26",inputTrailingTriggerKeyDescription:"\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey} \u5C06\u4F1A\u5F00\u59CB\u7FFB\u8BD1",inputTrailingTriggerKeyTimeout:"\u8F93\u5165\u7ED3\u675F\u8FDE\u51FB\u89E6\u53D1\u7684\u95F4\u9694\u65F6\u95F4",inputTrailingTriggerKeyTimeoutDescription:"\u8BBE\u7F6E\u8F93\u5165\u7ED3\u675F\u8FDE\u51FB\u89E6\u53D1\u7684\u95F4\u9694\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09",spaceKey:"<\u7A7A\u683C\u952E>",noneKey:"\u65E0\u9700\u524D\u7F00\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u6587\u672C\u6846",inputTranslationBlockUrlsTitle:"\u5207\u52FF\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",inputTranslationBlockUrlsDescription:"\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\uFF0C\u8F93\u5165\u6846\u589E\u5F3A\u5C06\u4E0D\u4F1A\u751F\u6548",clickToSeeQuickDemo:"\u70B9\u51FB\u5C55\u5F00 30 \u79D2\u5FEB\u901F\u6559\u5B66\u89C6\u9891",inputHelperInfo:"\u8BF4\u660E\uFF1A\u6211\u4EEC\u7279\u522B\u9488\u5BF9\u5728\u4E2D\u6587\u8F93\u5165\u6CD5\u4E0B\u90E8\u5206\u89E6\u53D1\u5B57\u7B26\u4F1A\u53D8\u6210\u4E2D\u6587\u6807\u70B9\u7B26\u53F7\u8FD9\u4EF6\u4E8B\u505A\u4E86\u4F18\u5316\uFF0C\u6BD4\u5982\u641C\u72D7\u8F93\u5165\u6CD5\u4E0B / \u4F1A\u53D8\u6210\u987F\u53F7 \u3001\uFF0C\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u652F\u6301\u6240\u6709\u89E6\u53D1\u7B26\u5BF9\u5E94\u7684\u4E2D\u6587\u7B26\u53F7\uFF0C\u4E5F\u5C31\u662F\u8BF4 // \u3001\u3001 \u90FD\u4F1A\u88AB\u8BC6\u522B\u4E3A\u89E6\u53D1\u5B57\u7B26\u3002<br/><br/>\u540C\u65F6\u6211\u4EEC\u4E5F\u652F\u6301\u8BED\u8A00\u4EE3\u7801\u7684\u4E2D\u6587\u522B\u540D\u4F5C\u4E3A\u547D\u4EE4\uFF0C\u6BD4\u5982 /\u65E5\u6587 \u4F60\u597D\u4E16\u754C \u4F1A\u88AB\u7FFB\u8BD1\u4E3A\u65E5\u6587\uFF0C<1>\u70B9\u6B64\u67E5\u770B\u6240\u6709\u652F\u6301\u7684\u8BED\u8A00\u4EE3\u7801</1>\u3002",reloadCurrentPage:"\u8BF7\u5148\u5237\u65B0\u5F53\u524D\u9875\u9762\uFF0C\u518D\u5F00\u59CB\u7FFB\u8BD1",noLocalFilePermissionForPDF:"\u6682\u65E0\u6743\u9650\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u8BF7\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\uFF0C\u7136\u540E\u5BFC\u5165\u672C\u5730\u6587\u4EF6",noPermissionForThisPage:"\u26A0\uFE0F \u6682\u65E0\u6743\u9650\u7FFB\u8BD1\u5F53\u524D\u9875\u9762",retryAllParagraphs:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",retryAllButton:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",errorTooltipTitle:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u539F\u56E0",errorModalTitle:"\u7FFB\u8BD1\u670D\u52A1\u6216\u7F51\u7EDC\u4F3C\u4E4E\u51FA\u4E86\u70B9\u95EE\u9898...",disableConfirm:"\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A\u8BBE\u7F6E",disableOnce:"\u672C\u6B21\u7981\u7528",disableGlobal:"\u6C38\u4E45\u7981\u7528",disableTint:"* \u4F60\u53EF\u4EE5\u5728 {option} \u4E2D\u91CD\u65B0\u542F\u7528\u3002",searchEnhancementNotes:"\u6211\u4EEC\u53D1\u73B0\uFF0C\u4E2D\u6587\u5173\u952E\u8BCD\u548C\u82F1\u6587\u5173\u952E\u8BCD\u7684\u65B0\u95FB\u7ED3\u679C\u6709\u975E\u5E38\u5927\u7684\u4E0D\u540C\uFF0C\u5728\u542F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A\u529F\u80FD\u540E\uFF0C\u6211\u4EEC\u4F1A\u5728\u652F\u6301\u7684\u7F51\u7AD9\uFF08\u8C37\u6B4C\u65B0\u95FB\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u5173\u952E\u8BCD\uFF09\uFF0C\u96EA\u7403\uFF0C\u4E1C\u65B9\u8D22\u5BCC\u7F51\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\uFF09\u81EA\u52A8\u7528\u82F1\u6587\u4E3A\u4F60\u641C\u7D22\u540C\u6837\u7684\u5173\u952E\u8BCD\u5E76\u5C55\u793A\u5728\u53F3\u4FA7\u3002\u5982\u679C\u4F60\u4E0D\u9700\u8981\u8BE5\u529F\u80FD\u7684\u8BDD\uFF0C\u53EF\u4EE5\u9009\u62E9\u7981\u7528\u5B83\u3002",option:"\u8BBE\u7F6E",saveSettings:"\u4FDD\u5B58\u8BBE\u7F6E",closeModal:"\u5173\u95ED\u7A97\u53E3",enableInputTranslationWithoutTriggerKeyTitle:"\u542F\u7528\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey}\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u4E3A{inputTargetLanguage}",enableInputTranslationWithoutTriggerKeyDescription:"\u5982\u9700\u6307\u5B9A\u76EE\u6807\u8BED\u8A00\uFF0C\u8BF7\u5728\u524D\u9762\u52A0\u4E0A\u8BED\u8A00\u4EE3\u7801\uFF0C\u5982\uFF1Aja \u4F60\u597D\u4E16\u754C",mouseHoverShortcutPlaceholder:"\u5982\uFF1AShift",deepLProName:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1 Pro \u4F1A\u5458 (\u63A8\u8350)",deepLProDescription:"\u5F53\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",deeplProDescriptionForNormal:"\u65E0\u9700\u4EFB\u4F55\u8BBE\u7F6E\uFF0C\u4F1A\u5458\u767B\u5F55\u540E\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u4F1A\u5458</1>",deepLCustomDescription:"\u9700\u8981\u56FD\u5916\u4FE1\u7528\u5361\uFF0C\u5728 <1>DeepL</1> \u5B98\u65B9\u5F00\u901A\uFF0C\u70B9\u51FB\u67E5\u770B<2>\u6587\u6863</2>",deepLCustomName:"\u81EA\u5B9A\u4E49 Auth Key",chooseProviderLabel:"\u9009\u62E9\u4E00\u4E2A\u670D\u52A1\u63D0\u4F9B\u5546",openaiProName:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1 Pro \u4F1A\u5458 (\u63A8\u8350)",openaiProDescription:"\u5F53\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",openaiProDescriptionForNormal:"\u65E0\u9700\u4EFB\u4F55\u8BBE\u7F6E\uFF0C\u4F1A\u5458\u767B\u5F55\u540E\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u4F1A\u5458</1>",openaiCustomDescription:"\u53EF\u5728 OpenAI, Azure OpenAI, \u6216\u5176\u4ED6\u7B2C\u4E09\u65B9\u670D\u52A1\u83B7\u53D6\uFF0C<1>\u70B9\u6B64\u67E5\u770B\u6587\u6863</1>",openaiCustomName:"\u81EA\u5B9A\u4E49 API Key",needLoginAction:"(\u5F00\u901A\u4F1A\u5458\u6216\u81EA\u5B9A\u4E49)",goLoginOrAction:"(\u5F00\u901A\u4F1A\u5458\u6216\u53BB\u8BBE\u7F6E)",yearly:"\u8FDE\u7EED\u5305\u5E74",quarterly:"\u8FDE\u7EED\u5305\u5B63",monthly:"\u8FDE\u7EED\u5305\u6708",yearlyForOnce:"\u4E00\u6B21\u6027\u5E74\u5EA6\u5957\u9910",monthlyForOnce:"\u4E00\u6B21\u6027\u6708\u5EA6\u5957\u9910",daily:"\u8FDE\u7EED\u5305\u65E5",year:"\u8FDE\u7EED\u5305\u5E74",quarter:"\u8FDE\u7EED\u5305\u5B63",month:"\u8FDE\u7EED\u5305\u6708",day:"\u8FDE\u7EED\u5305\u65E5",onetime_7day:"7 \u5929\u4F53\u9A8C\u5305",currentPlanDescriptionForFree:"\u5F53\u524D\u5957\u9910\uFF1A\u514D\u8D39",currentPlanDescriptionForContinuous:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u81EA\u52A8\u7EED\u8D39",currentPlanDescriptionForAutoRenewCaceling:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F",currentYearlyPlanDescriptionForAutoRenewCacelingWithRealPaiedUser:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F\u3002<br/><1>\u70B9\u6B64\u7BA1\u7406\u7EED\u8D39\u65B9\u6848</1>",currentYearlyPlanDescriptionForAutoRenewCacelingWithAdmin:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F\u3002<br/><1>\u70B9\u6B64\u542F\u7528\u8FDE\u7EED\u5305\u5E74</1>",currentPlanDescriptionForOneTime:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u5E74\u8D39</1>\u6216<2>\u6708\u8D39</2>\u4F1A\u5458",upgradePlan:"\u70B9\u6B64\u5347\u7EA7\u4E3A Pro \u4F1A\u5458",upgradeToPro:"\u5347\u7EA7\u4E3A Pro \u4F1A\u5458","popup.openPro":"\u5347\u7EA7\u4E3A Pro \u4F1A\u5458\u540E\u53EF\u4EE5\u7545\u4EAB DeepL \u548C OpenAI \u7FFB\u8BD1\uFF0C\u70B9\u6B64\u5347\u7EA7","popup.openProForPro":"\u60A8\u662F Pro \u4F1A\u5458\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528 DeepL \u548C OpenAI \u7FFB\u8BD1",currentAccount:"\u5F53\u524D\u8D26\u6237",enableAutoSyncUserSettings:"\u542F\u7528\u591A\u8BBE\u5907\u81EA\u52A8\u4E91\u540C\u6B65",modalEnableInputTranslationTitle:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u8F93\u5165\u6846\u7FFB\u8BD1\u63D0\u793A",modalEnableInputTranslationDesc:"\u60A8\u521A\u521A\u901A\u8FC7\u5FEB\u901F\u8FDE\u51FB 3 \u6B21\u7A7A\u683C\u952E\u89E6\u53D1\u4E86\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u7684\u8F93\u5165\u6846\u7FFB\u8BD1\uFF0C\u8F93\u5165\u6846\u7684\u5185\u5BB9\u5C06\u88AB\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u7684\u76EE\u6807\u8BED\u8A00\u3002\u901A\u8FC7 Ctrl+Z \u53EF\u4EE5\u64A4\u9500\u7FFB\u8BD1\u3002<br /><br />\u5982\u679C\u8FD9\u662F\u4E00\u4E2A\u5931\u8BEF\uFF0C\u4E0D\u7528\u62C5\u5FC3\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u672C\u6B21\u7981\u7528\uFF0C\u6216\u8005\u6C38\u4E45\u7981\u7528\u8F93\u5165\u6846\u7FFB\u8BD1\u3002",saveAndNotShowAgain:"\u4FDD\u5B58\u4E14\u4E0D\u518D\u63D0\u793A",disableInputTranslationTips:"* \u4F60\u4E5F\u53EF\u4EE5\u5728 {option} \u4E2D\u8BBE\u7F6E\u5176\u4ED6\u5FEB\u6377\u952E\u6765\u89E6\u53D1\uFF0C{learnMore}\u3002",learnMore:"\u70B9\u6B64\u4E86\u89E3\u66F4\u591A",continueEnalbeInputTranslation:"\u7EE7\u7EED\u542F\u7528\u8F93\u5165\u6846\u7FFB\u8BD1",autoRenewTrialSuffix:'\uFF08\u8BD5\u7528\u4E2D\uFF0C<a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">\u7ACB\u523B\u5347\u7EA7\u4E3A\u6B63\u5F0F\u4F1A\u5458</a>\uFF09',upgradeFromTrialTitle:"\u5347\u7EA7\u4E3A\u6B63\u5F0F\u4F1A\u5458",subtitle:"\u89C6\u9891\u5B57\u5E55",youtubeService:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u89C6\u9891\u5B57\u5E55\u7FFB\u8BD1\u670D\u52A1","subtitle.disabledSubtitle":"\u6C38\u4E45\u7981\u7528\u89C6\u9891\u5B57\u5E55\u529F\u80FD","subtitle.disabledSubtitleDescription":"\u5982\u679C\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u7684\u89C6\u9891\u5B57\u5E55\u548C\u5176\u4ED6\u6269\u5C55\u6709\u51B2\u7A81\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u6C38\u4E45\u7981\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u7684\u89C6\u9891\u5B57\u5E55\u529F\u80FD\u6216\u8005\u5378\u8F7D\u5176\u4ED6\u51B2\u7A81\u7684\u6269\u5C55","subtitle.autoEnableSubtitle":"\u81EA\u52A8\u4F7F\u7528\u53CC\u8BED\u5B57\u5E55","subtitle.autoEnableSubtitleDescription":"\u542F\u7528\u540E\uFF0C\u5F53\u89C6\u9891\u64AD\u653E\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u663E\u793A\u53CC\u8BED\u5B57\u5E55\uFF0C\u5426\u5219\u9700\u8981\u70B9\u51FB\u7FFB\u8BD1\u6309\u94AE\u624D\u4F1A\u663E\u793A\u3002","subtitle.preTranslation":"\u4F7F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u6765\u7FFB\u8BD1\u5B57\u5E55","subtitle.preTranslationDescription":"\u542F\u7528\u540E\u4F1A\u4F18\u5148\u7528\u4E0B\u9762\u7684\u6307\u5B9A\u7684\u7FFB\u8BD1\u670D\u52A1\u63D0\u524D\u7FFB\u8BD1\u6574\u4E2A\u5B57\u5E55\uFF0C1 \u5C0F\u65F6\u7684\u89C6\u9891\u5927\u6982\u6D88\u8017 5\u4E07 Tokens \u6216 \u5B57\u7B26\uFF0C\u8BF7\u914C\u60C5\u4F7F\u7528\uFF1B\u5173\u95ED\u540E\u5219\u4F18\u5148\u4F7F\u7528\u539F\u89C6\u9891\u81EA\u5E26\u7684\u673A\u7FFB\u5B57\u5E55","subtitle.humanSubtitlesPreferred":"\u4F18\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55","subtitle.humanSubtitlesPreferredDescription":"\u5F53\u89C6\u9891\u6709\u76EE\u6807\u8BED\u8A00\u4EBA\u5DE5\u5B57\u5E55\u65F6\uFF0C\u4F18\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55\uFF08\u63A8\u8350\uFF09",videoSubtitleTranslationDescription:"\u4E3A\u89C6\u9891\u5B57\u5E55\u5355\u72EC\u6307\u5B9A\u4E00\u4E2A\u7FFB\u8BD1\u670D\u52A1",subtitleTranslating:"\u6B63\u5728\u4F7F\u7528 {service} \u670D\u52A1\u7FFB\u8BD1\u5B57\u5E55\u4E2D\uFF0C\u8BF7\u7A0D\u7B49...\uFF08\u6C89\u6D78\u5F0F\u7FFB\u8BD1\uFF09",subtitleLoading:"\u6B63\u5728\u52A0\u8F7D\u5B57\u5E55...",bilingual:"\u53CC\u8BED","field.action":"\u662F\u5426\u542F\u7528\u767E\u5EA6\u672F\u8BED","description.action":"\u542F\u7528\u540E\u4F1A\u5728\u8BF7\u6C42\u4E2D\u52A0\u5165 action=1 \u7684\u53C2\u6570\uFF0C\u4EE5\u4FBF\u544A\u77E5\u767E\u5EA6\u542F\u7528\u672F\u8BED\uFF0C<1>\u66F4\u591A\u8BF4\u660E\u8BF7\u53C2\u8003\u5B98\u65B9\u6587\u6863</1>",closeQuickTranslation:"\u5173\u95ED\u60AC\u6D6E\u7403","closeQuickTranslation.untilNext":"\u672C\u6B21\u5173\u95ED\u76F4\u5230\u4E0B\u6B21\u8BBF\u95EE","closeQuickTranslation.currentWebsite":"\u5F53\u524D\u7F51\u7AD9\u7981\u7528","closeQuickTranslation.alwaysClose":"\u6C38\u4E45\u7981\u7528","closeQuickTranslation.settingOpen":"\uFF08\u53EF\u5728<1>\u8BBE\u7F6E\u9875</1>\u5F00\u542F\uFF09","closeQuickTranslation.cancel":"\u53D6\u6D88","closeQuickTranslation.confirm":"\u786E\u5B9A","floatBall.popup":"\u6253\u5F00\u5FEB\u6377\u8BBE\u7F6E\u9762\u677F","floatBall.translate":"\u70B9\u51FB\u7FFB\u8BD1\u8BE5\u9875\u9762","floatBall.showOriginal":"\u70B9\u51FB\u5207\u6362\u56DE\u539F\u6587","floatBall.close":"\u5173\u95ED\u60AC\u6D6E\u7403","floatBallOptions.enableDescPc":"\u542F\u7528\u9875\u9762\u60AC\u6D6E\u7403\u540E\uFF0C\u4F1A\u5728\u9875\u9762\u53F3\u4FA7\u663E\u793A\u4E00\u4E2A\u5FEB\u6377\u7FFB\u8BD1\u6309\u94AE\uFF0C\u70B9\u51FB\u5373\u53EF\u7FFB\u8BD1","floatBallOptions.enableDesc":"\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","description.azureApiUrl":"\u586B\u5199\u81EA\u5B9A\u4E49\u7684API\u63A5\u53E3\u5730\u5740",shareBtnTitle:"\u70B9\u51FB\u5206\u4EAB\u8BE5\u53CC\u8BED\u9875\u9762\u7ED9\u670B\u53CB","floatBall.share":"\u5206\u4EAB\u9875\u9762",confirmSupportMouse:"\u5F3A\u5236\u542F\u7528\u9F20\u6807\u652F\u6301",confirmSupportMouseDescription:"\u68C0\u6D4B\u5230\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u9F20\u6807\u529F\u80FD\uFF0C\u662F\u5426\u5F3A\u5236\u542F\u7528\u9F20\u6807\u652F\u6301\uFF1F",sampleTargetText:"\u957F\u591C\u5C06\u81F3\uFF0C\u6211\u4ECE\u4ECA\u5F00\u59CB\u5B88\u671B\uFF0C\u81F3\u6B7B\u65B9\u4F11\u3002\u6211\u5C06\u4E0D\u5A36\u59BB\u3001\u4E0D\u5C01\u5730\u3001\u4E0D\u751F\u5B50\u3002\u6211\u5C06\u4E0D\u6234\u5B9D\u51A0\uFF0C\u4E0D\u4E89\u8363\u5BA0\u3002\u6211\u5C06\u5C3D\u5FE0\u804C\u5B88\uFF0C\u751F\u6B7B\u4E8E\u65AF\u3002",sampleSourceText:"Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post.","subtitle.supportedSites":"\u5DF2\u652F\u6301\u5728\u8FD9\u4E9B\u7F51\u7AD9\u4F7F\u7528\u53CC\u8BED\u5B57\u5E55\uFF08\u6CE8\u610F\uFF1A\u7531\u4E8E\u6280\u672F\u9650\u5236\uFF0C\u90E8\u5206\u7F51\u7AD9\u5728\u9996\u6B21\u5F00\u542F\u5B57\u5E55\u540E\u9700\u8981\u91CD\u65B0\u5237\u65B0\u9875\u9762\uFF0C\u6216\u8005\u9700\u7B49\u5F85\u7FFB\u8BD1\u5B8C\u6210\u4EE5\u663E\u793A\u53CC\u8BED\u5B57\u5E55\uFF09\uFF1A",viewWithImmersiveTranslate:"\u53CC\u8BED\u7248\u672C(\u6C89\u6D78\u5F0F\u7FFB\u8BD1)"};var th={nologin:"\u672A\u767B\u9304",loginForSafari:"\u767B\u5165\u6216\u8A3B\u518A",login:"\u767B\u9304",manageAccount:"\u7BA1\u7406\u8CEC\u6236",openPremium:"\u958B\u901A\u6703\u54E1",logout:"\u9000\u51FA",curentPlan:"\u7576\u524D\u5957\u9910",endAt:"\u5230\u671F",endAuto:"\u81EA\u52D5\u7E8C\u671F",lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u5143\u6578\u91CF","translate-pdf":"\u9EDE\u9078\u7FFB\u8B6F PDF","noSupportTranslate-pdf":"\u8173\u672C\u4E0D\u652F\u63F4\uFF0C\u8ACB\u4F7F\u7528\u64F4\u5145\u5957\u4EF6","translate-firefox-local-pdf":"\u9EDE\u64CA\u53BB\u5C0E\u5165PDF",enableLineBreak:"\u958B\u555F\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D0A\u52A9\u958B\u767C\u8005 (\u6708\u4ED8\u6216\u50C5\u8D0A\u52A9\u4E00\u6B21\u5747\u53EF)",help:"\u8AAA\u660E",browserShortcutsNoteForFirefox:"Firefox \u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u9644\u52A0\u5143\u4EF6\u7BA1\u7406\u9801\u9762 \u300Cabout:addons\u300D\uFF0C\u7136\u5F8C\u9EDE\u9078\u300C\u8A2D\u5B9A\u5716\u793A\u300D\uFF0C\u518D\u9EDE\u9078\u300C\u7BA1\u7406\u64F4\u5145\u5957\u4EF6\u5FEB\u901F\u9375\u300D\u5373\u53EF\u8A2D\u5B9A",browserShortcutsNoteForChrome:"Chromium \u6838\u5FC3\u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u64F4\u5145\u529F\u80FD\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u300C\u9375\u76E4\u5FEB\u901F\u9375\u300D\u9801\u9762(chrome://extensions/shortcuts)\u8A2D\u5B9A\uFF0C\u9EDE\u9078\u4E0B\u65B9\u6309\u9215\u524D\u5F80\u5FEB\u901F\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u901F\u9375\u683C\u5F0F\u70BA\uFF1A (\u6CA1\u6709\u505A\u81EA\u52A8\u8BC6\u522B\uFF0C\u8BF7\u76F4\u63A5\u8F93\u5165)\uFF1A",enableLineBreakDescription:"\u555F\u7528\u5F8C\uFF0C\u5C07\u6703\u5728\u9577\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u5B57\u5143\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.shortBrandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F: \u96D9\u8A9E\u5C0D\u7167\u7DB2\u9801\u7FFB\u8B6F & PDF\u6587\u6A94\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u652F\u6301PDF\u7FFB\u8B6F\uFF0C\u96D9\u8A9EEpub\u96FB\u5B50\u66F8\u88FD\u4F5C\uFF0CYoutube/Netflix/Udemy \u7B49\u5E73\u53F0\u96D9\u8A9E\u5B57\u5E55\uFF0C\u652F\u6301Deepl/Google\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u514D\u8CBB\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8B6F\u4E26\u96B1\u85CF\u539F\u6587/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.shareToDraft":"\u5206\u4EAB\u96D9\u8A9E\u9801\u9762","browser.openOptionsPage":"\u958B\u555F\u8A2D\u5B9A\u9801\u9762","browser.toggleTranslationMask":"\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u6A5F PDF \u6A94\u6848","browser.openEbookViewer":"\u95B1\u8B80\u672C\u6A5F\u96FB\u5B50\u66F8","browser.openEbookBuilder":"\u88FD\u4F5C\u96D9\u8A9E EPUB \u96FB\u5B50\u66F8","browser.translateLocalHtmlFile":"\u7FFB\u8B6F HTML/txt \u6A94\u6848","browser.donateContext":"\u4E86\u89E3\u8D0A\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8B6F\u5B57\u5E55\u6A94\u6848",confirmResetConfig:"\u4F60\u78BA\u5B9A\u8981\u91CD\u8A2D\u8A2D\u5B9A\u55CE\uFF1F",translationLineBreakSettingTitle:"\u8B6F\u6587\u63DB\u884C\u8A2D\u5B9A",smartLineBreak:"\u667A\u6167\u63DB\u884C",alwaysLineBreak:"\u7E3D\u662F\u63DB\u884C",isShowContextMenu:"\u5C07\u7DB2\u9801\u7FFB\u8B6F\u529F\u80FD\u52A0\u5165\u53F3\u9375\u9078\u55AE",toggleBeta:"\u958B\u555F Beta \u6E2C\u8A66\u529F\u80FD",betaDescription:"\u555F\u7528\u4ECD\u5728\u5BE6\u9A57\u7684\u529F\u80FD\u4EE5\u53CA\u6E2C\u8A66\u4E2D\u7684\u7FFB\u8B6F\u670D\u52D9\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7D44</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u7E3D\u662F\u63DB\u884C\u9069\u7528\u65BC\u8F03\u5C11\u5167\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F4A\u3002(\u5728\u5167\u5BB9\u8F03\u591A\u7684\u9577\u6BB5\u843D(\u8D85\u904E {count} \u500B\u5B57\u5143) \u4F7F\u7528\u667A\u6167\u63DB\u884C\u6703\u66F4\u7701\u7A7A\u9593)",tempTranslateDomainTitle:"\u81E8\u6642\u958B\u555F\u7DB2\u7AD9\u7FFB\u8B6F\u7684\u6642\u9577",tempTranslateDomainDescription:"\u7576\u624B\u52D5\u7FFB\u8B6F\u67D0\u500B\u7DB2\u9801\u7684\u6642\u5019\uFF0C\u81E8\u6642\u958B\u555F\u8A72\u7DB2\u7AD9\u70BA\u81EA\u52D5\u7FFB\u8B6F",xMinutes:"{count} \u5206\u9418",disabled:"\u505C\u7528",changelog:"\u66F4\u65B0\u8A18\u9304",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u5247\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u6642\u89F8\u78B0\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801(\u50C5\u8B6F\u6587)/\u986F\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u70BA\u7DB2\u57DF\u540D\u7A31\uFF0C\u540C\u6642\u652F\u63F4\u842C\u7528\u5B57\u5143\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u5B9A",clickToExpandConfig:"\u5C55\u958B\u76EE\u524D\u8A2D\u5B9A",import:"\u5F9E\u6A94\u6848\u532F\u5165",export:"\u532F\u51FA\u70BA\u6A94\u6848",toggleDebug:"\u5728\u4E3B\u63A7\u53F0\u986F\u793A\u5075\u932F\u8A18\u9304","fingers.0":"\u95DC\u9589","fingers.2":"\u96D9\u6307\u89F8\u6478","fingers.3":"\u4E09\u6307\u89F8\u6478","fingers.4":"\u56DB\u6307\u89F8\u6478","fingers.5":"\u4E94\u6307\u89F8\u6478",mouseHoldKey:"+ {key} \u7FFB\u8B6F/\u9084\u539F\u8A72\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u7FA9\u5FEB\u6377\u9375(\u6253\u958B\u8A2D\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8B6F/\u9084\u539F\u8A72\u6BB5",mouseHoverHoldKey:"\u9F20\u6A19\u6ED1\u904E\u540C\u6642\u6309\u4E0B X \u9375\u7FFB\u8B6F\u6BB5\u843D","mouse-translate":"\u9F20\u6A19\u6ED1\u904E",document:"\u8AAA\u660E\u6587\u4EF6",resetSuccess:"\u91CD\u8A2D\u6240\u6709\u8A2D\u5B9A\u6210\u529F",resetThisSuccess:"\u91CD\u8A2D\u6210\u529F",saved:"\u5132\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u532F\u5165\u8A2D\u5B9A",goAdvancedSettings:"\u524D\u5F80\u9032\u968E\u8A2D\u5B9A\u9801\u9762",goAdvancedInterfaceSettings:"\u524D\u5F80\u81EA\u8A02\u8A2D\u5B9A\u9801\u9762",advanced:"\u9032\u968E\u8A2D\u5B9A",advancedDescription:"\u6B63\u5E38\u60C5\u6CC1\u7121\u9700\u8A2D\u5B9A\uFF0C\u4FDD\u6301\u9810\u8A2D\u5373\u53EF\u3002\u50C5\u91DD\u5C0D\u66F4\u5C08\u696D\u7684\u4F7F\u7528\u8005\uFF0C\u63D0\u4F9B\u66F4\u500B\u4EBA\u5316\u7684\u8A2D\u5B9A\u9805\u76EE\u3002",developer:"\u958B\u767C\u8005\u8A2D\u5B9A",donateCafe:"\u50F9\u683C","translate to the bottom of the page":"\u9032\u5165\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u56DE\u5831",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u555F\u7528\u5F8C\uFF0C\u9032\u5165\u7DB2\u9801\u5C07\u7ACB\u5373\u7FFB\u8B6F\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\u3002\u95DC\u9589\u5247\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u555F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6240\u6709\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\u3002\u95DC\u9589\u5247\u4F7F\u7528\u9810\u8A2D\u7684\u667A\u6167\u8FA8\u8B58\uFF0C\u50C5\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\u3002(\u4E0D\u63A8\u85A6\u958B\u555F)","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8B6F\u9801\u9762\u524D\u591A\u5C11\u500B\u5B57\u5143\uFF0C\u800C\u7121\u9700\u7B49\u5F85\u6372\u52D5\u81F3\u53EF\u898B\u5340\u57DF","interface language":"\u4ECB\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u901F\u9375",modify:"\u8B8A\u66F4\u5FEB\u901F\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u9996\u9801",more:"\u66F4\u591A",moreOptions:"\u5C55\u958B\u66F4\u591A\u81EA\u8A02\u9078\u9805",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u6240\u6709\u5340\u57DF",changeToTranslateTheMainPage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",changeToOnlyTranslationMode:"\u5207\u63DB\u70BA\u50C5\u986F\u793A\u8B6F\u6587",changeToDualTranslationMode:"\u5207\u63DB\u70BA\u96D9\u8A9E\u7FFB\u8B6F",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u6167\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u6A5F\u898F\u5247\u5DF2\u70BA\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u5B98\u65B9\u898F\u5247",localVersionIsTooOld:"\u672C\u6A5F\u5957\u4EF6\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u5957\u4EF6\u81F3 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5617\u8A66\u540C\u6B65",badUserscriptBrowser:"\u76EE\u524D\u700F\u89BD\u5668\u7121\u6CD5\u6B63\u78BA\u5BE6\u73FE\u6CB9\u7334\u5957\u4EF6\u7684\u4ECB\u9762\uFF0C\u8ACB\u4F7F\u7528\u5176\u4ED6<1>\u652F\u63F4\u6CB9\u7334\u5957\u4EF6</1>\u7684\u700F\u89BD\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u6709\u65B0\u7248\u672C\u53EF\u7528",theLocalExtensionIsUpToUpdate:"\u76EE\u524D\u5957\u4EF6\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u91CD\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u76EE\u524D\u898F\u5247\u7248\u672C",calculating:"\u6B63\u5728\u8A08\u7B97",unknownError:"\u672A\u77E5\u7684\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u53D6\u5F97\u9060\u7AEF\u898F\u5247",enableAlphaSuccess:"\u5DF2\u555F\u7528 Alpha \u529F\u80FD",disableAlphaSuccess:"\u5DF2\u505C\u7528 Alpha \u529F\u80FD",cacheSize:"\u5FEB\u53D6\u5927\u5C0F\uFF1A",cleaning:"\u6B63\u5728\u6E05\u7406",cleanCache:"\u6E05\u9664\u5FEB\u53D6",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"(\u524D\u5F80\u8A2D\u5B9A)",goSettings:"\u524D\u5F80\u8A2D\u5B9A",needActionForOptions:"(\u9700\u8A2D\u5B9A)",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u7576\u524D\u7DB2\u7AD9",autoEnableSubtitle:"\u81EA\u52D5\u958B\u555F\u96D9\u8A9E\u5B57\u5E55",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F {language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",alwaysTranslateSomeSiteOrWildSite:"\u7E3D\u662F\u7FFB\u8B6F\u7DB2\u7AD9",alwaysTranslateSomePage:"\u7E3D\u662F\u7FFB\u8B6F\u8A72\u7DB2\u9801",add:"\u65B0\u589E",default:"\u9810\u8A2D",forThisLanguage:"\u91DD\u5C0D\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165 URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u5B83\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u5B9A\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4F60\u60F3\u7528\u7684\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u6B63\u5728\u7FFB\u8B6F",Error:"\u932F\u8AA4",allowCacheTranslations:"\u555F\u7528\u672C\u6A5F\u7FFB\u8B6F\u5FEB\u53D6\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8981\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u7BC4\u4F8B",interface:"\u4ECB\u9762\u8A2D\u5B9A",import_export:"\u532F\u5165/\u532F\u51FA",import_export_title:"\u532F\u5165/\u532F\u51FA\u8A2D\u5B9A",syncToGoogleDrive:"\u7ACB\u5373\u8207 Google Drive \u540C\u6B65",floatBallOptions:"\u61F8\u6D6E\u7403\u8A2D\u7F6E","floatBallOptions.enable":"\u555F\u7528\u61F8\u6D6E\u7403","floatBallOptions.blockUrls":"\u7981\u7528\u7DB2\u7AD9","floatBallOptions.add":"\u6DFB\u52A0","floatBallOptions.blockUrlDesc":"\u7576\u9047\u5230\u4EE5\u4E0B\u7DB2\u7AD9\u6642\u4E0D\u986F\u793A\u61F8\u6D6E\u7403","floatBallOptions.clickType":"\u9EDE\u64CA\u884C\u70BA","floatBallOptions.clickTypeDesc":"\u61F8\u6D6E\u7403\u5716\u6A19\u9EDE\u64CA\u6642\u7684\u884C\u70BA","floatBallOptions.clickPopup":"\u986F\u793A\u7FFB\u8B6F\u9762\u677F","floatBallOptions.clickTranslate":"\u7FFB\u8B6F/\u986F\u793A\u539F\u6587",previewAllThemes:"\u9810\u89BD\u5168\u90E8\u6A23\u5F0F","translationTheme.none":"\u7121","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u5E95\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u6846\u7DDA","translationTheme.solidBorder":"\u5BE6\u7DDA\u6846\u7DDA","translationTheme.underline":"\u76F4\u7DDA\u5E95\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B78\u7FD2\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u9694\u7DDA","translationTheme.highlight":"\u9192\u76EE\u63D0\u793A","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.marker2":"\u99AC\u514B\u7B462","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDashed":"\u7CFB\u7D71\u5167\u5EFA\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDotted":"\u7CFB\u7D71\u5167\u5EFA\u9EDE\u72C0\u5E95\u7DDA","translationTheme.nativeUnderline":"\u7CFB\u7D71\u5167\u5EFA\u76F4\u7DDA\u5E95\u7DDA","translationTheme.wavy":"\u6CE2\u5F62\u66F2\u7DDA","translationServices.custom":"\u81EA\u5B9A\u7FA9API","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.tenAlpha":"\u9A30\u8A0A\u7FFB\u8B6F\u541B(Alpha)","translationServices.google":"Google \u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeepLX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8B6F","translationServices.deepl":"DeepL","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"Azure \u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.cai":"\u5F69\u96F2\u5C0F\u8B6F (Alpha)","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.you":"\u6709\u9053\u7FFB\u8B6F (Alpha)","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.niu":"\u5C0F\u725B\u7FFB\u8B6F","translationServices.papago":"Papago \u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u7576\u9801\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u5C07\u8DF3\u904E\u7FFB\u8B6F",enableUserscriptPagePopup:"\u5728\u9801\u9762\u4E0A\u986F\u793A\u61F8\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528\u5FEB\u901F\u9375/{touch}\u518D\u6B21\u986F\u793A\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5EFA\u8B70\u5C07\u672C\u8A2D\u5B9A\u9801\u9762\u52A0\u5165\u81F3\u6211\u7684\u6700\u611B","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u91D1\u9470\u5F8C\u624D\u53EF\u4F7F\u7528\uFF0C\u8A73\u7D30\u8CC7\u8A0A\u8ACB\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u91D1\u9470\u7533\u8ACB\u548C\u8A2D\u5B9A\u6559\u5B78\u300B",useAboveStyleForTheseSites:"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u7E3D\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8B6F\u6587\u6A23\u5F0F",currentUrl:"\u76EE\u524D\u7DB2\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C",syncToCloud:"\u540C\u6B65\u81F3\u96F2\u7AEF",syncToCloudDescription:"\u4E0A\u50B3\u81F3\u96F2\u7AEF\u5F8C\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u700F\u89BD\u5668/\u6CB9\u7334\u8173\u672C\u4E4B\u9593\u540C\u6B65\u8A2D\u5B9A\uFF0C\u4EE5\u6700\u5F8C\u8B8A\u66F4\u6642\u9593\u70BA\u6E96\u3002",syncToAccount:"\u540C\u6B65\u5230\u8CEC\u6236",syncToAccountButton:"\u7ACB\u5373\u8207\u96F2\u7AEF\u540C\u6B65",syncToAccountDescription:"\u4E0A\u50B3\u5230\u5DF2\u767B\u9304\u8CEC\u6236\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u8A2D\u5099\u4E4B\u9593\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u5F8C\u4FEE\u6539\u6642\u9593\u70BA\u6E96\u3002",successSyncConfigInAccount:"\u6210\u529F\u8207\u8CEC\u6236\u4FDD\u6301\u540C\u6B65",successSyncConfigToAccount:"\u6210\u529F\u540C\u6B65\u5230\u8CEC\u6236",syncConfigNoUpdate:"\u5DF2\u7D93\u662F\u6700\u65B0\u7684\u4E86",authFail:"\u6388\u6B0A\u5931\u6557",syncTitle:"\u624B\u52D5\u5099\u4EFD\u7BA1\u7406",import_hint:"\u532F\u5165",upload:"\u4E0A\u50B3",revokeAuth:"\u64A4\u92B7\u6388\u6B0A",uploadFail:"\u4E0A\u50B3\u5931\u6557",download:"\u4E0B\u8F09",importSuccess:"\u532F\u5165\u6210\u529F",importFail:"\u532F\u5165\u5931\u6557",deleteFail:"\u522A\u9664\u5931\u6557",backupToCloud:"\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6A94\u6848",create_new_backup:"\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE\uFF0C\u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",backupToCloudDescription:"\u624B\u52D5\u4E0A\u50B3\u6216\u9084\u539F\u5099\u4EFD\u6A94\u6848\uFF0C\u6700\u591A\u5141\u8A31 3 \u500B\u4E0D\u540C\u7684\u5099\u4EFD",successSyncConfig:"\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u6557",updatedAt:"\u66F4\u65B0\u65BC {date}",lastSyncedAt:"\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",downloadFail:"\u4E0B\u8F09\u5931\u6557",clickToDownload:"\u9EDE\u9078\u4E0B\u8F09",aboutLabel:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831","browser.openAboutPage":"\u95DC\u65BC/\u554F\u984C\u56DE\u5831",aboutLabelWithoutSponsor:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831",aboutIntro:"\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F \u4F60\u53EF\u4EE5\u9078\u64C7\u958B\u901A <6>Pro\u6703\u54E1</6> \u4F86\u4F7F\u7528\u958B\u7BB1\u5373\u7528\u7684 DeepL \u548C OpenAI \u7FFB\u8B6F\u3002<br/><br/>\u4F60\u53EF\u4EE5\u95DC\u6CE8\u6211\u4EEC\u7684<3>Twitter</3>\uFF0C<4>Telegram \u983B\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90F5\u4EF6\u8A02\u95B1</5>\u8FFD\u8E64\u66F4\u65B0\u3002<br/> <7>Pro \u6703\u54E1</7> \u53EF\u4EE5\u901A\u904E\u5FEB\u901F\u5BA2\u670D\u90F5\u7BB1 <8>support@immersivetranslate.com</8> \u548C\u6211\u5011\u53D6\u5F97\u806F\u7E6B\u3002",aboutIntroWithoutSponsor:"\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F ",projectHomepage:"\u5C08\u6848\u9996\u9801",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u7D44\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u773E\u865F",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u983B\u9053",joinTelegramChannel:"\u95DC\u6CE8 Telegram \u983B\u9053\u77AD\u89E3\u66F4\u65B0\u8CC7\u8A0A",feedbackAndJoin:"\u554F\u984C\u56DE\u5831/\u52A0\u5165\u7FA4\u7D44",autoSync:"\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",loadingThemeTitle:"Loading \u6A23\u5F0F",loadingThemeDescription:"\u8A2D\u5B9A\u7B49\u5F85\u8B6F\u6587\u8F09\u5165\u6642\u7684\u6A23\u5F0F","loadingTheme.spinner":"\u8F49\u5708\u52D5\u756B","loadingTheme.text":"\u975C\u614B\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u986F\u793A",developerDescription:"\u53EF\u4EE5\u9EDE\u9078<1>\u6B64\u8655</1>\u6AA2\u8996\u9032\u968E\u81EA\u8A02\u529F\u80FD\u76F8\u95DC\u7684\u8AAA\u660E\u6587\u4EF6","edit border color":"\u8B8A\u66F4\u908A\u6846\u8272\u5F69",successSyncButNoChange:"\u76EE\u524D\u8A2D\u5B9A\u8207\u96F2\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u8A02\u8272\u5F69\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u908A\u6846\u8272\u5F69","customThemeLabel.borderRadius":"\u908A\u6846\u5713\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u8272\u5F69","customThemeLabel.backgroundColor":"\u80CC\u666F\u8272\u5F69","customThemeLabel.zoom":"\u5B57\u578B\u7E2E\u653E\u6BD4\u4F8B (%)","customThemeLabel.opacity":"\u6587\u5B57\u4E0D\u900F\u660E\u5EA6(%)",resetToDefaultColor:"\u9084\u539F\u70BA\u9810\u8A2D\u8272\u5F69",resetToDefaultSettings:"\u9084\u539F\u70BA\u9810\u8A2D\u8A2D\u5B9A",isTranslateTitle:"\u555F\u7528\u7DB2\u9801\u6A19\u984C\u7FFB\u8B6F",isTranslateTitleDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6A19\u984C\u6703\u88AB\u7FFB\u8B6F",enableSearchEnhancement:"\u958B\u555F\u641C\u7D22\u589E\u5F37",enableSearchEnhancementDescription:"\u4E2D\u6587\u641C\u7D22\u8C37\u6B4C\u6703\u5728\u53F3\u908A\u51FA\u73FE\u82F1\u6587\u7248\u8C37\u6B4C\u65B0\u805E",verifyService:"\u9EDE\u6B64\u6E2C\u8A66\u670D\u52D9",verified:"\u9A57\u8B49\u6210\u529F","field.langs":"\u652F\u63F4\u7684\u8A9E\u8A00\u4EE3\u78BC","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8B6F\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u9418\u6700\u5927\u8981\u6C42\u6578","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8981\u6C42\u6578","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u7684\u6700\u5927\u6587\u5B57\u9577\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u6700\u5927\u6BB5\u843D\u6578","field.apiUrl":"\u81EA\u8A02 API \u4F4D\u5740","field.placeholderDelimiters":"\u4FDD\u7559\u7684\u4F54\u4F4D\u7B26","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>\u81EA\u5B9A\u7FA9\u63A5\u53E3\u63A5\u5165</a> \u9700\u8981\u53C3\u8003\u6587\u6A94","description.limitPerMinute":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u5206\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u79D2\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.generalLimitPerSecond":"\u8ACB\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u9032\u5165\u6392\u968A\u72C0\u614B\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u9418\u958B\u59CB\u3002","description.prompt":"\u4EE5\u4F7F\u7528\u8005\u8EAB\u4EFD\u50B3\u9001\u7D66 OpenAI \u7684\u5C0D\u8A71\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u5B57\u5167\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8A9E\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6A19\u8A9E\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u85A6\uFF09, \u5C07\u6703\u5728\u55AE\u7368\u4F5C\u70BA\u4E00\u6BB5\u767C\u9001\u7D66 OpenAI","description.maxTextLengthPerRequest":"\u9810\u8A2D\u6703\u5408\u4F75\u591A\u500B\u6BB5\u843D\uFF0C\u4EE5\u6E1B\u5C11\u8ACB\u8981\u6C42\u6578\uFF0C\u4F46\u662F\u5982\u679C\u6BB5\u843D\u7E3D\u9577\u5EA6\u904E\u9577\uFF0C\u4E5F\u53EF\u80FD\u6703\u5C0E\u81F4 API \u7684\u56DE\u61C9\u6642\u9593\u589E\u52A0\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5617\u8A66\u8ABF\u6574\u8A72\u9078\u9805\u4F86\u63D0\u5347\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7D71\u50B3\u9001\u767C\u9001\u7D66 OpenAI \u7684\u5C0D\u8A71\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u5B57\u5167\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8A9E\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6A19\u8A9E\u8A00","field.domain":"\u9818\u57DF","description.domain":"\u9ED8\u8A8D\u70BA\uFF1Ageneral\u3002\u50C5\u5728\u6709\u9053API\u63A7\u5236\u53F0\u958B\u901A\u9818\u57DF\u5316\u7FFB\u8B6F\u7684\u60C5\u6CC1\u4E0B\u53EF\u8A2D\u7F6E\uFF0C\u652F\u6301\u9818\u57DF\u898B<1>\u9019\u88E1</1>","field.scene":"\u5834\u666F","description.scene":"\u9ED8\u8A8D\u70BA\uFF1Ageneral\u3002\u50C5\u5728\u963F\u91CC\u96F2API\u63A7\u5236\u53F0\u958B\u901A\u6A5F\u5668\u7FFB\u8B6F\u5C08\u696D\u7248\u7684\u60C5\u6CC1\u4E0B\u53EF\u8A2D\u7F6E\uFF0C\u652F\u6301\u5834\u666F\u898B<1>\u9019\u88E1</1>","field.vocabId":"\u4F7F\u7528\u8005\u8A5E\u5178ID","description.vocabId":"\u6307\u5B9A\u7684\u5B57\u5178out_id\uFF0C\u76EE\u524D\u652F\u63F4\u82F1\u8B6F\u4E2D","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u70BA gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u50B3\u9001\u7D66\u7FFB\u8B6F\u670D\u52D9\u7684\u6BB5\u843D\u6578\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6578\u91CF\u904E\u591A\uFF0C\u53EF\u80FD\u6703\u5C0E\u81F4\u56DE\u61C9\u901F\u5EA6\u8B8A\u6162","description.apiUrl":"\u8ACB\u52A0\u5165\u5177\u9AD4\u5305\u542B\u8DEF\u5F91\u7684\u7DB2\u5740",enabledExtension:"\u555F\u7528\u5957\u4EF6",clickToDisableExtension:"\u9EDE\u9078\u505C\u7528\u5957\u4EF6",clickToEnableExtension:"\u9EDE\u9078\u555F\u7528\u5957\u4EF6",hasBeenDisabled:"\u5DF2\u505C\u7528","show password":"\u986F\u793A\u5BC6\u78BC",customContent:"\u8F38\u5165\u81EA\u5B9A\u7FA9\u6A21\u578B",inputOptions:"\u8F38\u5165\u6846\u589E\u5F37",mouseHoverOptions:"\u9F20\u6A19\u6ED1\u904E",modifyMouseHoverKey:"\u4FEE\u6539\u6ED1\u9F20\u61F8\u505C\u5FEB\u6377\u9375",enableInputTranslation:"\u662F\u5426\u555F\u7528\u8F38\u5165\u6846\u589E\u5F37",enableInputTranslationDescription:"\u555F\u7528\u5F8C\uFF0C\u8F38\u5165\u6846\u76F4\u63A5\u8F38\u5165 {startingKey}{startingKey} \u4F60\u597D\uFF0C\u7136\u5F8C\u5FEB\u901F\u9023\u64CA{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8B6F\u70BA {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:"\u555F\u7528\u5F8C\uFF0C\u8F38\u5165\u6846\u76F4\u63A5\u8F38\u5165\uFF1A\u4F60\u597D\u4E16\u754C\uFF0C\u7136\u5F8C\u5FEB\u901F\u9023\u64CA{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8B6F\u70BA\u9810\u8A2D\u76EE\u6A19\u8A9E\u8A00",inputTargetLanguage:"\u8A2D\u5B9A\u8F38\u5165\u6846\u7684\u9810\u8A2D\u76EE\u6A19\u8A9E\u8A00",inputTargetLanguageDescription:"\u8F38\u5165\u6846\u7FFB\u8B6F\u7684\u9810\u8A2D\u76EE\u6A19\u8A9E\u8A00\uFF0C\u4E5F\u5C31\u662F {startingKey}{startingKey} \u4F5C\u70BA\u89F8\u767C\u8A5E\u7684\u9810\u8A2D\u8A9E\u8A00",inputTargetLanguageDescriptionForNoneKey:"\u8F38\u5165\u6846\u7FFB\u8B6F\u7684\u9810\u8A2D\u76EE\u6A19\u8A9E\u8A00",inputStartingTriggerKeyTitle:"\u8A2D\u5B9A\u8F38\u5165\u6846\u90E8\u5206\u7FFB\u8B6F\u7684\u5206\u5272\u5B57\u7B26",inputStartingTriggerKeyDescription:"\u7576\u4F60\u4E0D\u9700\u8981\u7FFB\u8B6F\u6574\u500B\u8F38\u5165\u6846\u7684\u6642\u5019\uFF0C\u5206\u5272\u7B26\u5141\u8A31\u4F60\u53EA\u7FFB\u8B6F {startingKey}{startingKey} \u5230\u8F38\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8A9E\u8A00\u4EE3\u78BC\uFF0C\u4F8B\u5982\uFF1A{startingKey}ja \u8868\u793A\u53EA\u7FFB\u8B6F {startingKey}ja \u5230\u8F38\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206",inputStartingTriggerKeyDescriptionForNoneKey:"\u76EE\u524D\u8A2D\u5B9A\u70BA\u7121\u9700\u524D\u7DB4\uFF0C\u66AB\u7121\u6CD5\u4F7F\u7528\u8F38\u5165\u6846\u7684\u90E8\u5206\u6587\u5B57\u7FFB\u8B6F\u529F\u80FD",inputTrailingTriggerKeyTitle:"\u9078\u64C7\u4E00\u500B\u8F38\u5165\u7D50\u675F\u7684\u89F8\u767C\u5B57\u7B26",inputTrailingTriggerKeyDescription:"\u5FEB\u901F\u9023\u64CA3 \u6B21{trailingKey} \u5C07\u6703\u958B\u59CB\u7FFB\u8B6F",inputTrailingTriggerKeyTimeout:"\u8F38\u5165\u7D50\u675F\u9023\u64CA\u89F8\u767C\u7684\u9593\u9694\u6642\u9593",inputTrailingTriggerKeyTimeoutDescription:"\u8A2D\u7F6E\u8F38\u5165\u7D50\u675F\u9023\u64CA\u89F8\u767C\u7684\u9593\u9694\u6642\u9593\uFF08\u6BEB\u79D2\uFF09",spaceKey:"<\u7A7A\u683C\u9375>",noneKey:"\u7121\u9700\u524D\u7DB4\uFF0C\u76F4\u63A5\u7FFB\u8B6F\u6574\u500B\u6587\u5B57\u6846",inputTranslationBlockUrlsTitle:"\u5207\u52FF\u5728\u4EE5\u4E0B\u7DB2\u5740\u4E2D\u555F\u7528\u8F38\u5165\u6846\u589E\u5F37",inputTranslationBlockUrlsDescription:"\u5728\u4EE5\u4E0B\u7DB2\u5740\u4E2D\uFF0C\u8F38\u5165\u6846\u589E\u5F37\u5C07\u4E0D\u6703\u751F\u6548",clickToSeeQuickDemo:"\u9EDE\u64CA\u5C55\u958B30 \u79D2\u5FEB\u901F\u6559\u5B78\u8996\u983B",inputHelperInfo:"\u8AAA\u660E\uFF1A\u6211\u5011\u7279\u5225\u91DD\u5C0D\u5728\u4E2D\u6587\u8F38\u5165\u6CD5\u4E0B\u90E8\u5206\u89F8\u767C\u5B57\u7B26\u6703\u8B8A\u6210\u4E2D\u6587\u6A19\u9EDE\u7B26\u865F\u9019\u4EF6\u4E8B\u505A\u4E86\u512A\u5316\uFF0C\u6BD4\u5982\u641C\u72D7\u8F38\u5165\u6CD5\u4E0B / \u6703\u8B8A\u6210\u9813\u865F \u3001\uFF0C\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u652F\u6301\u6240\u6709\u89F8\u767C\u7B26\u5C0D\u61C9\u7684\u4E2D\u6587\u7B26\u865F\uFF0C\u4E5F\u5C31\u662F\u8AAA // \u3001\u3001 \u90FD\u6703\u88AB\u8B58\u5225\u70BA\u89F8\u767C\u5B57\u7B26\u3002<br/><br/>\u540C\u6642\u6211\u5011\u4E5F\u652F\u6301\u8A9E\u8A00\u4EE3\u78BC\u7684\u4E2D\u6587\u5225\u540D\u4F5C\u70BA\u547D\u4EE4\uFF0C\u6BD4\u5982 /\u65E5\u6587 \u4F60\u597D\u4E16\u754C \u6703\u88AB\u7FFB\u8B6F\u70BA\u65E5\u6587\uFF0C<1>\u9EDE\u6B64\u67E5\u770B\u6240\u6709\u652F\u63F4\u7684\u8A9E\u8A00\u4EE3\u78BC</1>\u3002",reloadCurrentPage:"\u8ACB\u5148\u5237\u65B0\u76EE\u524D\u9801\u9762\uFF0C\u518D\u958B\u59CB\u7FFB\u8B6F",noLocalFilePermissionForPDF:"\u66AB\u7121\u6B0A\u9650\u8B80\u53D6\u672C\u6A5F\u6587\u4EF6\uFF0C\u8ACB\u9EDE\u9078\u4E0A\u65B9\u6309\u9215\uFF0C\u7136\u5F8C\u532F\u5165\u672C\u6A5F\u6587\u4EF6",noPermissionForThisPage:"\u26A0\uFE0F \u66AB\u7121\u6B0A\u9650\u7FFB\u8B6F\u76EE\u524D\u9801\u9762",retryAllParagraphs:"\u91CD\u8A66\u5168\u90E8\u932F\u8AA4\u6BB5\u843D",retryAllButton:"\u91CD\u8A66\u5168\u90E8\u932F\u8AA4\u6BB5\u843D",errorTooltipTitle:"\u9EDE\u64CA\u770B\u932F\u8AA4\u539F\u56E0",errorModalTitle:"\u7FFB\u8B6F\u670D\u52D9\u6216\u7DB2\u8DEF\u4F3C\u4E4E\u51FA\u4E86\u9EDE\u554F\u984C...",disableConfirm:"\u7981\u7528\u78BA\u8A8D",disableOnce:"\u7981\u7528\u4E00\u6B21",disableGlobal:"\u5168\u5C40\u7981\u7528",disableTint:"* \u60A8\u53EF\u4EE5\u5728 {option} \u4E2D\u91CD\u65B0\u555F\u7528\u3002",searchEnhancementNotes:"\u6211\u5011\u767C\u73FE\uFF0C\u4E2D\u6587\u95DC\u9375\u8A5E\u548C\u82F1\u6587\u95DC\u9375\u8A5E\u7684\u65B0\u805E\u7D50\u679C\u6709\u975E\u5E38\u5927\u7684\u4E0D\u540C\uFF0C\u5728\u555F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u96D9\u8A9E\u4FE1\u606F\u589E\u5F37\u529F\u80FD\u5F8C\uFF0C\u6211\u5011\u6703\u5728\u652F\u6301\u7684\u7DB2\u7AD9\uFF08\u8C37\u6B4C\u65B0\u805E\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u95DC\u9375\u8A5E\uFF09\uFF0C\u96EA\u7403\uFF0C\u6771\u65B9\u8CA1\u5BCC\u7DB2\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\uFF09\u81EA\u52D5\u7528\u82F1\u6587\u70BA\u4F60\u641C\u7D22\u540C\u6A23\u7684\u95DC\u9375\u8A5E\u4E26\u5C55\u793A\u5728\u53F3\u5074\u3002\u5982\u679C\u4F60\u4E0D\u9700\u8981\u8A72\u529F\u80FD\u7684\u8A71\uFF0C\u53EF\u4EE5\u9078\u64C7\u7981\u7528\u5B83\u3002",option:"\u9078\u9805",saveSettings:"\u5132\u5B58\u8A2D\u5B9A",closeModal:"\u95DC\u9589\u8996\u7A97",enableInputTranslationWithoutTriggerKeyTitle:"\u555F\u7528\u5FEB\u901F\u9023\u64CA3 \u6B21{trailingKey}\uFF0C\u76F4\u63A5\u7FFB\u8B6F\u6574\u500B\u8F38\u5165\u6846\u70BA{inputTargetLanguage}",enableInputTranslationWithoutTriggerKeyDescription:"\u5982\u9700\u6307\u5B9A\u76EE\u6A19\u8A9E\u8A00\uFF0C\u8ACB\u5728\u524D\u9762\u52A0\u4E0A\u8A9E\u8A00\u7A0B\u5F0F\u78BC\uFF0C\u5982\uFF1Aja \u4F60\u597D\u4E16\u754C",mouseHoverShortcutPlaceholder:"\u5982\uFF1AShift",deepLProName:"\u6C89\u6D78\u5F0F\u7FFB\u8B6FPro \u6703\u54E1(\u63A8\u85A6)",deepLProDescription:"\u76EE\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",deeplProDescriptionForNormal:"\u7121\u9700\u4EFB\u4F55\u8A2D\u7F6E\uFF0C\u6703\u54E1\u767B\u5165\u5F8C\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u9EDE\u6B64\u5347\u7D1A\u70BA\u6703\u54E1</1>",deepLCustomDescription:"\u9700\u8981\u570B\u5916\u4FE1\u7528\u5361\uFF0C\u5728<1>DeepL</1>\u5B98\u65B9\u958B\u901A\uFF0C\u9EDE\u9078\u67E5\u770B<2>\u6587\u6A94</2>",deepLCustomName:"\u81EA\u8A02Auth Key",chooseProviderLabel:"\u9078\u64C7\u4E00\u500B\u670D\u52D9\u63D0\u4F9B\u8005",openaiProName:"\u6C89\u6D78\u5F0F\u7FFB\u8B6FPro \u6703\u54E1(\u63A8\u85A6)",openaiProDescription:"\u76EE\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",openaiProDescriptionForNormal:"\u7121\u9700\u4EFB\u4F55\u8A2D\u7F6E\uFF0C\u6703\u54E1\u767B\u5165\u5F8C\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u9EDE\u6B64\u5347\u7D1A\u70BA\u6703\u54E1</1>",openaiCustomDescription:"\u53EF\u5728OpenAI, Azure OpenAI, \u6216\u5176\u4ED6\u7B2C\u4E09\u65B9\u670D\u52D9\u7372\u53D6\uFF0C<1>\u9EDE\u6B64\u67E5\u770B\u6587\u6A94</1>",openaiCustomName:"\u81EA\u8A02API Key",needLoginAction:"(\u958B\u901A\u6703\u54E1\u6216\u81EA\u8A02)",goLoginOrAction:"(\u958B\u901A\u6703\u54E1\u6216\u53BB\u8A2D\u5B9A)",yearly:"\u5E74\u5EA6\u7E8C\u8A02",quarterly:"\u5B63\u5EA6\u7E8C\u8A02",monthly:"\u6BCF\u6708\u7E8C\u8A02",yearlyForOnce:"\u4E00\u6B21\u6027\u5E74\u5EA6\u5957\u9910",monthlyForOnce:"\u4E00\u6B21\u6027\u6708\u5EA6\u5957\u9910",daily:"\u6BCF\u65E5\u7E8C\u8A02",year:"\u5E74\u5EA6\u7E8C\u8A02",quarter:"\u5B63\u5EA6\u7E8C\u8A02",month:"\u6BCF\u6708\u7E8C\u8A02",day:"\u6BCF\u65E5\u7E8C\u8A02",onetime_7day:"7 \u5929\u9AD4\u9A57\u5305",currentPlanDescriptionForFree:"\u76EE\u524D\u5957\u9910\uFF1A\u514D\u8CBB",currentPlanDescriptionForContinuous:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u81EA\u52D5\u7E8C\u8CBB",currentPlanDescriptionForAutoRenewCaceling:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u5230\u671F\uFF0C\u5230\u671F\u5F8C\u5C07\u4E0D\u6703\u81EA\u52D5\u7E8C\u7D04",currentYearlyPlanDescriptionForAutoRenewCacelingWithRealPaiedUser:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u5230\u671F\uFF0C\u5230\u671F\u5F8C\u5C07\u4E0D\u6703\u81EA\u52D5\u7E8C\u7D04\u3002<br/><1>\u9EDE\u6B64\u7BA1\u7406\u7E8C\u8CBB\u65B9\u6848</1>",currentYearlyPlanDescriptionForAutoRenewCacelingWithAdmin:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u5230\u671F\uFF0C\u5230\u671F\u5F8C\u5C07\u4E0D\u6703\u81EA\u52D5\u7E8C\u7D04\u3002<br/><1>\u9EDE\u6B64\u555F\u7528\u9023\u7E8C\u5305\u5E74</1>",currentPlanDescriptionForOneTime:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u5230\u671F\uFF0C<1>\u9EDE\u6B64\u5347\u7D1A\u70BA\u5E74\u8CBB</1>\u6216<2>\u6708\u8CBB</2>\u6703\u54E1",upgradePlan:"\u9EDE\u6B64\u5347\u7D1A\u70BAPro \u6703\u54E1",upgradeToPro:"\u5347\u7D1A\u70BA Pro \u6703\u54E1","popup.openPro":"\u5347\u7D1A\u70BA Pro \u6703\u54E1\u5F8C\u53EF\u4EE5\u66A2\u4EAB DeepL \u548C OpenAI \u7FFB\u8B6F\uFF0C\u9EDE\u6B64\u5347\u7D1A","popup.openProForPro":"\u60A8\u662F Pro \u6703\u54E1\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528 DeepL \u548C OpenAI \u7FFB\u8B6F",currentAccount:"\u7576\u524D\u8CEC\u6236",enableAutoSyncUserSettings:"\u555F\u7528\u591A\u8A2D\u5099\u81EA\u52D5\u96F2\u7AEF\u540C\u6B65",modalEnableInputTranslationTitle:"\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u8F38\u5165\u6846\u7FFB\u8B6F\u63D0\u793A",modalEnableInputTranslationDesc:"\u60A8\u525B\u525B\u900F\u904E\u5FEB\u901F\u9023\u64CA3 \u6B21\u7A7A\u767D\u9375\u89F8\u767C\u4E86\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u7684\u8F38\u5165\u6846\u7FFB\u8B6F\uFF0C\u8F38\u5165\u6846\u7684\u5167\u5BB9\u5C07\u7FFB\u8B6F\u70BA\u9810\u8A2D\u7684\u76EE\u6A19\u8A9E\u8A00\u3002\u900F\u904ECtrl+Z \u53EF\u4EE5\u64A4\u92B7\u7FFB\u8B6F\u3002<br /><br />\u5982\u679C\u9019\u662F\u4E00\u500B\u5931\u8AA4\uFF0C\u4E0D\u7528\u64D4\u5FC3\uFF0C\u60A8\u53EF\u4EE5\u9078\u64C7\u672C\u6B21\u505C\u7528\uFF0C\u6216\u6C38\u4E45\u505C\u7528\u8F38\u5165\u6846\u7FFB\u8B6F\u3002",saveAndNotShowAgain:"\u5132\u5B58\u4E14\u4E0D\u518D\u63D0\u793A",disableInputTranslationTips:"* \u4F60\u4E5F\u53EF\u4EE5\u5728 {option} \u4E2D\u8A2D\u5B9A\u5176\u4ED6\u5FEB\u6377\u9375\u4F86\u89F8\u767C\uFF0C{learnMore}\u3002",learnMore:"\u9EDE\u6B64\u4E86\u89E3\u66F4\u591A",continueEnalbeInputTranslation:"\u7E7C\u7E8C\u555F\u7528\u8F38\u5165\u6846\u7FFB\u8B6F",autoRenewTrialSuffix:'\uFF08\u8A66\u7528\u4E2D\uFF0C<a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">\u7ACB\u523B\u5347\u7D1A\u70BA\u6B63\u5F0F\u6703\u54E1</a>\uFF09',upgradeFromTrialTitle:"\u5347\u7D1A\u70BA\u6B63\u5F0F\u6703\u54E1",subtitle:"\u5F71\u7247\u5B57\u5E55",youtubeService:"\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u5F71\u7247\u5B57\u5E55\u670D\u52D9","subtitle.disabledSubtitle":"\u6C38\u4E45\u7981\u7528\u8996\u983B\u5B57\u5E55\u529F\u80FD","subtitle.disabledSubtitleDescription":"\u5982\u679C\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u7684\u8996\u983B\u5B57\u5E55\u548C\u5176\u4ED6\u64F4\u5C55\u6709\u885D\u7A81\uFF0C\u4F60\u53EF\u4EE5\u9078\u64C7\u6C38\u4E45\u7981\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u7684\u8996\u983B\u5B57\u5E55\u529F\u80FD\u6216\u8005\u5378\u8F09\u5176\u4ED6\u885D\u7A81\u7684\u64F4\u5C55","subtitle.autoEnableSubtitle":"\u81EA\u52D5\u4F7F\u7528\u96D9\u8A9E\u5B57\u5E55","subtitle.autoEnableSubtitleDescription":"\u555F\u7528\u5F8C\uFF0C\u7576\u5F71\u7247\u64AD\u653E\u7684\u6642\u5019\uFF0C\u6703\u81EA\u52D5\u986F\u793A\u96D9\u8A9E\u5B57\u5E55\uFF0C\u5426\u5247\u9700\u8981\u9EDE\u64CA\u7FFB\u8B6F\u6309\u9215\u624D\u6703\u986F\u793A\u3002","subtitle.preTranslation":"\u512A\u5148\u4F7F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u5B57\u5E55","subtitle.preTranslationDescription":"\u555F\u7528\u5F8C\u6703\u512A\u5148\u7528\u4E0B\u9762\u7684\u7FFB\u8B6F\u670D\u52D9\u63D0\u524D\u7FFB\u8B6F\u6574\u500B\u5B57\u5E55\uFF0C1 \u5C0F\u6642\u7684\u8996\u8A0A\u5927\u6982\u6D88\u8017 5\u842C Tokens \u6216 \u5B57\u7B26\uFF0C\u8ACB\u914C\u60C5\u4F7F\u7528\uFF1B\u95DC\u9589\u5F8C\u5247\u512A\u5148\u4F7F\u7528\u539F\u5F71\u7247\u81EA\u5E36\u7684\u6A5F\u7FFB\u5B57\u5E55","subtitle.humanSubtitlesPreferred":"\u512A\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55","subtitle.humanSubtitlesPreferredDescription":"\u7576\u5F71\u7247\u6709\u76EE\u6A19\u8A9E\u8A00\u4EBA\u5DE5\u5B57\u5E55\u6642\uFF0C\u512A\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55\uFF08\u63A8\u85A6\uFF09",videoSubtitleTranslationDescription:"\u70BA\u5F71\u7247\u5B57\u5E55\u55AE\u7368\u6307\u5B9A\u4E00\u500B\u7FFB\u8B6F\u670D\u52D9",subtitleTranslating:"\u6B63\u5728\u4F7F\u7528 {service} \u670D\u52D9\u7FFB\u8B6F\u5B57\u5E55\u4E2D\uFF0C\u8ACB\u7A0D\u7B49...\uFF08\u6C89\u6D78\u5F0F\u7FFB\u8B6F\uFF09",subtitleLoading:"\u6B63\u5728\u8F09\u5165\u5B57\u5E55...",bilingual:"\u96D9\u8A9E","field.action":"\u662F\u5426\u555F\u7528\u767E\u5EA6\u8853\u8A9E","description.action":"\u555F\u7528\u5F8C\u6703\u5728\u8ACB\u6C42\u4E2D\u52A0\u5165 action=1 \u7684\u53C3\u6578\uFF0C\u4EE5\u4FBF\u544A\u77E5\u767E\u5EA6\u555F\u7528\u8853\u8A9E\uFF0C<1>\u66F4\u591A\u8AAA\u660E\u8ACB\u53C3\u8003\u5B98\u65B9\u6587\u6A94</1>",closeQuickTranslation:"\u95DC\u9589\u61F8\u6D6E\u7403","closeQuickTranslation.untilNext":"\u672C\u6B21\u95DC\u9589\u76F4\u5230\u4E0B\u6B21\u8A2A\u554F","closeQuickTranslation.currentWebsite":"\u7576\u524D\u7DB2\u7AD9\u7981\u7528","closeQuickTranslation.alwaysClose":"\u6C38\u4E45\u7981\u7528","closeQuickTranslation.settingOpen":"\uFF08\u53EF\u5728<1>\u8A2D\u5B9A\u9801</1>\u958B\u555F\uFF09","closeQuickTranslation.cancel":"\u53D6\u6D88","closeQuickTranslation.confirm":"\u78BA\u5B9A","floatBall.popup":"\u6253\u958B\u5FEB\u6377\u8A2D\u5B9A\u9762\u677F","floatBall.translate":"\u9EDE\u64CA\u7FFB\u8B6F\u8A72\u9801\u9762","floatBall.showOriginal":"\u9EDE\u64CA\u5207\u63DB\u5230\u539F\u6587","floatBall.close":"\u95DC\u9589\u61F8\u6D6E\u7403","floatBallOptions.enableDescPc":"\u555F\u7528\u9801\u9762\u61F8\u6D6E\u7403\u5F8C\uFF0C\u6703\u5728\u9801\u9762\u53F3\u5074\u986F\u793A\u4E00\u500B\u5FEB\u6377\u7FFB\u8B6F\u6309\u9215\uFF0C\u9EDE\u64CA\u5373\u53EF\u7FFB\u8B6F","floatBallOptions.enableDesc":"\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528{touch}\u559A\u8D77\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5F37\u70C8\u5EFA\u8B70\u6536\u85CF\u672C\u8A2D\u5B9A\u9801","description.azureApiUrl":"\u586B\u5165\u81EA\u8A02\u7684API\u4F4D\u5740",shareBtnTitle:"\u9EDE\u64CA\u5206\u4EAB\u8A72\u96D9\u8A9E\u9801\u9762\u7D66\u670B\u53CB","floatBall.share":"\u5206\u4EAB\u9801\u9762",confirmSupportMouse:"\u5F37\u5236\u555F\u7528\u6ED1\u9F20\u652F\u63F4",confirmSupportMouseDescription:"\u6AA2\u6E2C\u5230\u7576\u524D\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u6ED1\u9F20\u529F\u80FD\uFF0C\u662F\u5426\u5F37\u5236\u555F\u7528\u6ED1\u9F20\u652F\u63F4\uFF1F",sampleTargetText:"\u9577\u591C\u5C07\u81F3\uFF0C\u6211\u5F9E\u4ECA\u958B\u59CB\u5B88\u671B\uFF0C\u81F3\u6B7B\u65B9\u4F11\u3002 \u6211\u5C07\u4E0D\u5A36\u59BB\u3001\u4E0D\u5C01\u5730\u3001\u4E0D\u751F\u5B50\u3002 \u6211\u5C07\u4E0D\u6234\u5BF6\u51A0\uFF0C\u4E0D\u722D\u69AE\u5BF5\u3002 \u6211\u5C07\u76E1\u5FE0\u8077\u5B88\uFF0C\u751F\u6B7B\u65BC\u65AF\u3002",sampleSourceText:"Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post.","subtitle.supportedSites":"\u5DF2\u652F\u63F4\u5728\u9019\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u96D9\u8A9E\u5B57\u5E55\uFF08\u6CE8\u610F\uFF1A\u7531\u65BC\u6280\u8853\u9650\u5236\uFF0C\u90E8\u5206\u7DB2\u7AD9\u5728\u9996\u6B21\u958B\u555F\u5B57\u5E55\u5F8C\u9700\u8981\u91CD\u65B0\u5237\u65B0\u9801\u9762\uFF0C\u6216\u8005\u9700\u7B49\u5F85\u7FFB\u8B6F\u5B8C\u6210\u4EE5\u986F\u793A\u96D9\u8A9E\u5B57\u5E55\uFF09\uFF1A"};var nh={nologin:"Not logged in",loginForSafari:"Sign In or Sign Up",login:"Login",manageAccount:"Manage Account",openPremium:"Upgrade to Pro",logout:"Logout",curentPlan:"Current Plan",endAt:"Expires",endAuto:"Auto Renew",lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","noSupportTranslate-pdf":"The script is not supported, please use a plugin.","translate-firefox-local-pdf":"Click to upload PDF",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about:addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.shortBrandName":"Immersive Translate","browser.brandName":"Immersive Translate: Web Page&PDF Translation","browser.brandDescription":"Bilingual web page translation, also supports PDF, Epub eBook, Video subtitles translation, free to use.","browser.toggleTranslatePage":"Toggle Translate Page","browser.toggleTranslateTheWholePage":"Toggle Translate the Whole Page","browser.toggleOnlyTransation":"Toggle Translate and Hide Original Text","browser.toggleTranslateToThePageEndImmediately":"Toggle Translate to the Bottom of the Page Immediately","browser.toggleTranslateTheMainPage":"Toggle Translate the Main Page","browser.shareToDraft":"Share Bilingual Page","browser.openOptionsPage":"Open Settings Page","browser.toggleTranslationMask":"Toggle translation mask style","browser.translateLocalPdfFile":"Translate local PDF File","browser.openEbookViewer":"Read local e-book","browser.openEbookBuilder":"Make Dual EPUB ebook","browser.translateLocalHtmlFile":"Translate HTML/txt File","browser.donateContext":"Sponsor Benefits","browser.translateLocalSubtitleFile":"Translate Subtitle File",confirmResetConfig:"Are you sure you want to reset the settings?",translationLineBreakSettingTitle:"Line break setting",smartLineBreak:"Smart Wrap",alwaysLineBreak:"Always Wrap",isShowContextMenu:"Create right button menu",toggleBeta:"Enable Beta experimental features",betaDescription:"Enable features that are still experimental, and translation services that are in testing. Join the <1>Telegram group</1> to learn more.",translationLineBreakSettingDescription:"The always line break feature is suitable for layouts with less content, making the layout more neat and tidy. (Use smart line breaks for long paragraphs with more content (more than {count} characters) for saving space)",tempTranslateDomainTitle:"Open the translation time temporarily",tempTranslateDomainDescription:"When a page is translated manually, turn it temporarily on as automatic translation",xMinutes:"{count} minutes",disabled:"Disable",changelog:"Change Log",toggleTranslatePageWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide translation display",toggleTranslationMaskWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide the blur effect of the translation",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"Multi-finger touch to show/hide only translation display",addUrlDescription:"The domain name is available and wildcard is supported e.g.: *.google.com, google.com/mail/*, https://www.google.com/*",general:"General",clickToExpandConfig:"Expand current configuration",import:"Import configuration from file",export:"Export to file",toggleDebug:"Print debug logs on the console","fingers.0":"Close","fingers.2":"Two-finger touch","fingers.3":"Three-finger touch","fingers.4":"Four-finger touch","fingers.5":"Five-finger touch",mouseHoldKey:"+ {key} translate/restore this paragraph",mouseHoldKeyAuto:"Translate the paragraph directly",mouseHoldKeyOff:"Do nothing",mouseHoldKeyOther:"Custom shortcut key (open settings)",mouseHoldKeyCustomKey:"{key} translate/restore this paragraph",mouseHoverHoldKey:"Mouse over and press X key to translate paragraph","mouse-translate":"Hover",document:"Document",resetSuccess:"All settings reset successful",resetThisSuccess:"Reset successful",saved:"Saved successfully",successImportConfig:"Configuration imported successfully",goAdvancedSettings:"Go to Advanced Settings Page",goAdvancedInterfaceSettings:"Go to Advanced Custom Settings Page",advanced:"Advanced",advancedDescription:"Normally no settings are needed, keep the default. More personalized settings are provided for professional users only.",developer:"Developer settings",donateCafe:"Pricing","translate to the bottom of the page":"Translate to the bottom of the page immediately after opening the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"Enabled will translate from the top to the bottom of the page immediately after opening. Disable will translate while reading. (Not recommended to enable)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, all areas of the entire web page will be translated. Disabled will use the default smart recognition and translate only the main areas. (Not recommended to enable)","the number of characters to be translated first":"Directly translate the number of characters in front of the page without waiting to scroll to the visible area","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",moreOptions:"Expand more custom settings",translateTheWholePage:"Translate the whole page area",changeToTranslateTheWholePage:"Translate the Whole Page",changeToTranslateTheMainPage:"Translate the Main Content",changeToOnlyTranslationMode:"Show Translation only",changeToDualTranslationMode:"Show Dual Translation",translateToThePageEndImmediately:"Immediately translate to the bottom ",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension version is too old, please upgrade the extension to {minVersion} or a newer version and try to sync again.",badUserscriptBrowser:"The current browser does not correctly implement the interface of the Greasemonkey extension, please use another browser that <1>supports the Greasemonkey extension</1> such as (Firefox Nightly version)",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",needActionForOptions:"(need to set)",translationEngine:"Engine Options",sourceLanguage:"Original language",target:"Target Language",popupSourceLanguage:"Source",popupTarget:"Target",popupService:"Service",forThisSite:"Site",autoEnableSubtitle:"Auto-enable bilingual captions",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",alwaysTranslateSomeSiteOrWildSite:"Always translate this site",alwaysTranslateSomePage:"Always translate this page",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export",import_export_title:"Import/Export Configuration",syncToGoogleDrive:"Sync Now with Google Drive",floatBallOptions:"Floating Button","floatBallOptions.enable":"Enable Float Ball","floatBallOptions.blockUrls":"Blocked Websites","floatBallOptions.add":"Add","floatBallOptions.blockUrlDesc":"Do not display the float ball when encountering the following websites","floatBallOptions.clickType":"Click Behavior","floatBallOptions.clickTypeDesc":"Behavior when clicking on the float ball icon","floatBallOptions.clickPopup":"Display Translation Panel","floatBallOptions.clickTranslate":"Translate/Show Original Text",previewAllThemes:"Preview all themes","translationTheme.none":"None","translationTheme.grey":"Black Gray","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.solidBorder":"Solid Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.opacity":"Opacity effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Marker","translationTheme.marker2":"Maker2","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationTheme.nativeDashed":"System Dash Underline","translationTheme.nativeDotted":"System Dotted Underline","translationTheme.nativeUnderline":"System Straight Line Underline","translationTheme.wavy":"Squiggle","translationServices.custom":"Custom API","translationServices.tencent":"Tencent Translator","translationServices.tenAlpha":"Tencent Translator (Alpha)","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeepLX (Alpha)","translationServices.bing":"Microsoft Translator","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Azure Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.cai":"Caiyun Translation (Alpha)","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.you":"Youdao Translation (Alpha)","translationServices.transmart":"Tencent Smart Translation","translationServices.niu":"Niu Translation","translationServices.papago":"Papago Translation","translationServices.d":"DeeplX (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"Translate page title","always languages":"Always translate the following languages",neverTranslateLanguagesLabel:"Never Translated Languages",neverTranslateTheFollowingLanguagesDescription:"When a paragraph on a page is in one of the following languages, the translation will be skipped",enableUserscriptPagePopup:"Always show Popup windows on the page",enableUserscriptPagePopupDescription:"Three-finger touch to show the Popup.","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"Sites that always use the {theme} translation style",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language",syncToCloud:"Sync to cloud",syncToCloudDescription:"Upload the configuration to the cloud server, and you can synchronize the configuration between different browsers or Tampermonkey scripts, based on the last modification time.",syncToAccount:"Sync to account",syncToAccountButton:"Sync to account now",syncToAccountDescription:"Uploaded to the logged-in account, the configuration can be synchronized between different devices, and the last modification time shall prevail.",successSyncConfigInAccount:"Successfully synced with account",successSyncConfigToAccount:"Successfully synchronized to account",syncConfigNoUpdate:"Already up to date",authFail:"Authorization Failed",syncTitle:"Please select a file operation",import_hint:"Import",upload:"Upload",revokeAuth:"Revoke Authorization",uploadFail:"Upload Failed",download:"Download",importSuccess:"Upload Success",importFail:"Import Failed",deleteFail:"Delete Failed",backupToCloud:"Manage backup files manually",create_new_backup:"Add backup node",maxBackupFiles:"Up to{count}different nodes can be backed up. Please delete unneeded nodes",backupToCloudDescription:"Upload or restore backup files manually, up to 3 different backups",successSyncConfig:"Successfully synced with cloud",syncFail:"Synchronization failed",updatedAt:"Updated at {date}",lastSyncedAt:"Last checked at {date}",downloadFail:"Download failed",clickToDownload:"Click to download",aboutLabel:"About - Feedback ","browser.openAboutPage":"About / Feedback/Sponsor",aboutLabelWithoutSponsor:"About - Feedback",aboutIntro:"We hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. You can choose to subscribe to <6>Pro membership</6> to use the out-of-the-box DeepL and OpenAI translation.<br/><br/> You can also follow out <3>Twitter</3>, <4>Telegram Channel</4>, and <5>Email Subscription</5> below to track updates. <br/> <7>Pro members</7> can contact us through the fast customer service email <8>support@immersivetranslate.com</8>.",aboutIntroWithoutSponsor:"The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. ",projectHomepage:"Project Homepage",joinTelegramGroup:"Join our communities for feature discussion",wechatPublicAccount:"Wechat Official Account",wechatCommunities:"Wechat Group",qqCommunities:"QQ Channel",joinTelegramChannel:"Subscribe to our Telegram channel to get the latest updates",feedbackAndJoin:"Feedback",autoSync:"Auto-Time Sync",loadingThemeTitle:"Loading Style",loadingThemeDescription:"Set the style of waiting for the translation to load","loadingTheme.spinner":"Spinning icon","loadingTheme.text":"Static Text... ","loadingTheme.none":"Disabled",developerDescription:"You can click <1>here</1> to see the documentation related to advanced customization","edit border color":"Edit border color",successSyncButNoChange:"The current configuration is consistent with that in the cloud server",customTheme:"Customize colors and sizes","customThemeLabel.borderColor":"Border color","customThemeLabel.borderRadius":"Border Round Corner","customThemeLabel.textColor":"Text color","customThemeLabel.backgroundColor":"Background color","customThemeLabel.zoom":"Font scale (%)","customThemeLabel.opacity":"Text opacity (%)",resetToDefaultColor:"Reset to default colors",resetToDefaultSettings:"Reset to default settings",isTranslateTitle:"Enable translate page title",isTranslateTitleDescription:"When enabled, the page title will be translated",enableSearchEnhancement:"Enable Search Enhancement",enableSearchEnhancementDescription:'After enabling, the right sidebar will automatically display "Google News" search results for corresponding English keywords on supported websites (such as Google News, Google Search (partial keywords), Xueqiu, East Money, Futu, Tiger Community).',verifyService:"Verify service",verified:"Successful","field.langs":"Supported Language Code","field.model":"Model","field.translationEngine":"Translation engine","field.limitPerMinute":"Max requests per minute","field.limitPerSecond":"Max requests per second","field.maxTextLengthPerRequest":"Maximum text length per request","field.maxTextGroupLengthPerRequest":"Maximum number of paragraphs per request","field.apiUrl":"Custom API interface address","field.placeholderDelimiters":"Reserved placeholders","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>Custom interface access</a> requires reference documents","description.limitPerMinute":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next minute. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.limitPerSecond":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next second. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.generalLimitPerSecond":"Requests exceed this limit will be queued until the next seconds.","description.prompt":"Send as a user to OpenAI conversation, where {{text}} indicates the text of the paragraph,{{from}} indicates the language of the paragraph,{{to}} indicates the target language, you can omit {{text}}, if so, it'll be sent as a separated message","description.maxTextLengthPerRequest":"By default multiple paragraphs will be merged to reduce the number of requests, but if the total length of the paragraphs is too long, it may also cause the interface to respond slowly, so you can try to adjust this option to optimize speed","description.systemPrompt":"Send the conversation to OpenAI as a system, where {{text}} represents the text content of the paragraph, {{from}} represents the original language of the paragraph, and {{to}} represents the target language.","field.domain":"Domain","description.domain":"Default is\uFF1Ageneral. Only set up if there is an API console open domain translation, support fields see <1>Here </1>","field.scene":"Scene","description.scene":"Default is\uFF1Ageneral. Only set up if there is an API console open Machine Translation Professional, support fields see<1>Here</1>","field.vocabId":"User dictionary ID","description.vocabId":"Specified dictionary out_id, currently supported in English translation","description.model":"OpenAI's models, such as gpt-3.5-turbo, gpt-4, etc","description.maxTextGroupLengthPerRequest":"The number of paragraphs sent to translation service each time. Sending too many paragraphs to OpenAI at once can slow down the interface.","description.apiUrl":"Please provide a URL with the specific path.",enabledExtension:"Enable extensions",clickToDisableExtension:"Click to disable extension",clickToEnableExtension:"Click to enable the extension",hasBeenDisabled:"Disabled","show password":"Show password",customContent:"Enter customization content",inputOptions:"Writing",mouseHoverOptions:"Mouse Hover",modifyMouseHoverKey:"Modify mouse hover shortcuts",enableInputTranslation:"enhanced input box?",enableInputTranslationDescription:"When enabled, enter {startingKey}{startingKey} direct in the input box and hit{inputTrailingTriggerKeyRepeatTimes}times{trailingKey}, translated into {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:'When enabled, simply enter "Hello World" in the input box, then quickly press {inputTrailingTriggerKeyRepeatTimes} times on {trailingKey}, and it will be translated into the default target language.',inputTargetLanguage:"Set the default target language for the input box",inputTargetLanguageDescription:"The default target language for the translation input box, which is {startingKey}{startingKey} as the default language for triggering words.",inputTargetLanguageDescriptionForNoneKey:"Default target language for translation input box",inputStartingTriggerKeyTitle:"Set the delimiter for translating part of the input box.",inputStartingTriggerKeyDescription:"When you don't need to translate the entire input box, the delimiter allows you to only translate the portion from {startingKey}{startingKey} to the end of the input box. You can also specify a language code, for example: {startingKey}ja means only translating the portion from {startingKey}ja to the end of the input box.",inputStartingTriggerKeyDescriptionForNoneKey:"The current setting is no prefix required, the partial text translation function of the input box cannot be used temporarily.",inputTrailingTriggerKeyTitle:"Select a trigger character to indicate the end of input.",inputTrailingTriggerKeyDescription:"Start the translation by quickly pressing 3 times {trailingKey}.",inputTrailingTriggerKeyTimeout:"Enter the interval time to end the trailing trigger",inputTrailingTriggerKeyTimeoutDescription:"Set the interval time (milliseconds) for the input to end the combo trigger",spaceKey:"<spacekey>",noneKey:"Translate the entire text box without prefixes",inputTranslationBlockUrlsTitle:"Do not enable input box enhancement in the following URL",inputTranslationBlockUrlsDescription:"The input box enhancement will not work in the following URL",clickToSeeQuickDemo:"Click to expand the 30s tutorial video",inputHelperInfo:`Note: We have optimized the system to address an issue where certain characters in Chinese input methods were being converted into Chinese punctuation marks. For instance, when using Sogou Input Method, "/" would be changed to "\u3001". We now recognizes all corresponding Chinese symbols as triggering characters, including "//" and "\u3001\u3001".

Additionally, we support using Chinese aliases of language codes as commands. For example, entering "/Japanense Hello World" will translate the text into Japanese. You can click here to see a list of all supported language codes.`,reloadCurrentPage:"Please refresh the current page before starting translation",noLocalFilePermissionForPDF:"No permission to read local files. Please click the button above and upload the local file.",noPermissionForThisPage:"\u26A0\uFE0F No permission to translate the current page",retryAllParagraphs:"Retry all paragraphs",retryAllButton:"Retry All",errorTooltipTitle:"Click to get the error details",errorModalTitle:"Noops, something went wrong",disableConfirm:"Search Enhancement Settings",disableOnce:"Disable Once",disableGlobal:"Disable Forever",disableTint:"* You can re-enable in {option}.",searchEnhancementNotes:"We have discovered notable disparities in news results between Chinese and English keywords. By activating the immersive translation Bilingual Display Enhancement feature, we will automatically search for equivalent English keywords and display them on the right side of supported websites (e.g., Google News, Google Search (partial keywords), xueqiu, East Money, Futu, Tiger). You can disable this feature if you don't need it.",option:"Settings",saveSettings:"Save",closeModal:"Close",enableInputTranslationWithoutTriggerKeyTitle:"Enable quick press 3 times {trailingKey}, directly translate the entire input box to {inputTargetLanguage}.",enableInputTranslationWithoutTriggerKeyDescription:"To specify the target language, please add a language code at the beginning, such as: ja Hello world",mouseHoverShortcutPlaceholder:"e.g. Shift",deepLProName:"Premium Membership (Recommended)",deepLProDescription:"You can directly use this service",deeplProDescriptionForNormal:"No setup required, available for premium members after login, <1>Upgrade</1>",deepLCustomDescription:"Requires an international credit card, activate at <1>DeepL</1> official site, click to see <2>documentation</2>",deepLCustomName:"Custom Auth Key",chooseProviderLabel:"Choose a service provider",openaiProName:"Premium Membership (Recommended)",openaiProDescription:"The current plan can be used directly",openaiProDescriptionForNormal:"No setup required, available for premium members after login, <1>Upgrade</1>",openaiCustomDescription:"Can be obtained from OpenAI, Azure OpenAI, or other third-party services, <1>Click here to view documentation</1>",openaiCustomName:"Custom API Key",needLoginAction:"(Premium or custom)",goLoginOrAction:"(Premium or go to setting)",yearly:"Annual Renewal",quarterly:"Quarterly Renewal",monthly:"Monthly Renewal",yearlyForOnce:"One-time Annual",monthlyForOnce:"One-time Monthly",daily:"Daily Renewal",year:"Annual Renewal",quarter:"Quarterly Renewal",month:"Monthly Renewal",day:"Daily Renewal",onetime_7day:"7-day Trial Pack",currentPlanDescriptionForFree:"Current plan: Free",currentPlanDescriptionForContinuous:"Current plan: {plan}, will auto-renew on {endAt}",currentPlanDescriptionForAutoRenewCaceling:"Current plan: {plan}, will expire on {endAt} and will not auto-renew",currentYearlyPlanDescriptionForAutoRenewCacelingWithRealPaiedUser:"Current plan: {plan}, will expire on {endAt}, will not be auto-renewed after expiration <br/><1>Manage the renewal plan</1>",currentYearlyPlanDescriptionForAutoRenewCacelingWithAdmin:"Current plan: {plan}, will expire on {endAt}, will not auto-renew after expiration.<br/> <1>Enable consecutive annual plan</1>",currentPlanDescriptionForOneTime:"Current plan: {plan}, expiring on {endAt}. <1>Upgrade to annual</1> or <2>monthly</2> pro membership",upgradePlan:"Click here to upgrade to Pro membership",upgradeToPro:"Upgrade to Pro","popup.openPro":"Enjoy unrestricted access to DeepL and OpenAI translations after upgrading to Pro Membership. Click here to upgrade","popup.openProForPro":"You are a Pro member, you can directly use DeepL and OpenAI translations",currentAccount:"Account",enableAutoSyncUserSettings:"Enable auto-sync user settings",modalEnableInputTranslationTitle:"Writing Settings",modalEnableInputTranslationDesc:"You have just triggered the immersive translate of the input box by quickly tapping the space key 3 times. The content of the input box will be translated into the default target language. <br /><br /> If this was a mistake, don't worry. You can choose to disable it this time or permanently disable input box translation.",saveAndNotShowAgain:"Save and don't show again",disableInputTranslationTips:"* You can also set other shortcuts in {option}, {learnMore}.",learnMore:"Learn more",continueEnalbeInputTranslation:"Continue to enable input translation",autoRenewTrialSuffix:'(In trial, <a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">Upgrade to paid Pro now</a>)',upgradeFromTrialTitle:"Upgrade to paid Pro",subtitle:"Video Subtitles",youtubeService:"Video Subtitle Translation Service","subtitle.disabledSubtitle":"Disable Video Subtitle Feature Permanently ","subtitle.disabledSubtitleDescription":"If there is a conflict between Immersive Translate video subtitles and other extensions, you can choose to permanently disable the Immersive Translate video subtitle feature or uninstall other conflicting extensions","subtitle.autoEnableSubtitle":"Automatically Enable Bilingual Subtitles","subtitle.autoEnableSubtitleDescription":"When enabled, the bilingual subtitles will be automatically enabled when the video is played.","subtitle.preTranslation":"Prefer translate subtitles by Immersive Translate","subtitle.preTranslationDescription":"When enabled, the service listed below will be used preferentially to translate the subtitles in advance, an 1-hour video consumes approximately 50,000 Tokens or characters, please use as appropriate; if disabled, the original automated translations provided with the video will be used","subtitle.humanSubtitlesPreferred":"Prefer Human-Crafted Subtitles","subtitle.humanSubtitlesPreferredDescription":"When human-crafted subtitles in the target language are available, these will be preferred (Recommended)",videoSubtitleTranslationDescription:"Specify a translation service for video subtitles",subtitleTranslating:"Immersive Translate is using {service} to translate subtitles...",subtitleLoading:"Loading subtitles...",bilingual:"Bilingual","field.action":"Enable Baidu terminology?","description.action":"Once enabled, the parameter action=1 will be added to the request to inform Baidu to enable the terminology. <1>For more details, please refer to the official documentation</1>",closeQuickTranslation:"Close Floating Button","closeQuickTranslation.untilNext":"Close this time until the next visit","closeQuickTranslation.currentWebsite":"Current website disabled","closeQuickTranslation.alwaysClose":"Permanently disable","closeQuickTranslation.settingOpen":"(Can be activated in <1>Settings Page</1>)","closeQuickTranslation.cancel":"Cancel","closeQuickTranslation.confirm":"Ok","floatBall.popup":"Open quick settings popup","floatBall.translate":"Click to translate this page","floatBall.showOriginal":"Click to switch back to the original","floatBall.close":"Close Floating Button","floatBallOptions.enableDescPc":"After enabling the page floating button, a quick translation button will appear on the right side of the page, click to translate","floatBallOptions.enableDesc":"After closing the floating button, you can invoke with {touch}. To prevent accidentally closing this option and not finding the floating ball, it's strongly recommended to bookmark this settings page","description.azureApiUrl":"Fill in the custom API interface address",shareBtnTitle:"Click to share this bilingual page","floatBall.share":"Share Page",confirmSupportMouse:"Force Enable Mouse Support",confirmSupportMouseDescription:"Detection indicates that the current browser does not support mouse functions. Would you like to force enable mouse support?",sampleTargetText:"Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post.",sampleSourceText:"\u957F\u591C\u5C06\u81F3\uFF0C\u6211\u4ECE\u4ECA\u5F00\u59CB\u5B88\u671B\uFF0C\u81F3\u6B7B\u65B9\u4F11\u3002\u6211\u5C06\u4E0D\u5A36\u59BB\u3001\u4E0D\u5C01\u5730\u3001\u4E0D\u751F\u5B50\u3002\u6211\u5C06\u4E0D\u6234\u5B9D\u51A0\uFF0C\u4E0D\u4E89\u8363\u5BA0\u3002\u6211\u5C06\u5C3D\u5FE0\u804C\u5B88\uFF0C\u751F\u6B7B\u4E8E\u65AF\u3002","subtitle.supportedSites":"Support for bilingual subtitles on these websites (Note: Due to technical limitations, some websites may require a page refresh after initially enabling subtitles, or waiting for the translation to complete before displaying bilingual subtitles):",viewWithImmersiveTranslate:"Dual Translation (Immersive Translate)"};var rh=[{code:"zh-CN",messages:eh},{code:"zh-TW",messages:th},{code:"en",messages:nh}];var Cy={};for(let t of rh)Cy[t.code]=t.messages;var ut="immersive-translate";var ce="immersiveTranslate";var R_=ce+"GoogleAccessToken",O_=ce+"AuthFlow";var N_=ce+"AuthState",P_=ce+"IframeMessage",M_=ce+"WaitForRateLimit",I_=ce+"DocumentMessageAsk",ah=ce+"DocumentMessageTellThirdParty",F_=ce+"showError",oh=ce+"DocumentMessageThirdPartyTell",B_=ce+"DocumentMessageEventUpload",z_=ce+"DocumentMessageHandler",U_=`${ce}Share`,$_=`${ce}ReqDraft`,W_=`${ce}ResDraft`,H_=`${ce}Container`,j_=`${ce}SpecifiedContainer`;var q_=`${ce}PageTranslatedStatus`,K_=`${ce}PageUrlChanged`,G_=`${ce}ReceiveCommand`,V_=ce+"LastUseMouseHoverTime",X_=ce+"LastUseInputTime",Y_=ce+"LastUseManualTranslatePageTime",Z_=`${ce}PopupReceiveMessage`,Ly="immersivetranslate.com",Dy="config.immersivetranslate.com",Q_=`https://${Ly}/`,J_=`https://${Dy}/default_config.json`,e2=`${ce}Mark`;var sh=`${ce}Root`,Rs=`data-${ut}-effect`,t2=`data-${ut}-translation-element-mark`,n2=`${ce}TranslationElementMark`,r2=`${ce}TranslatedMark`,i2=`${ce}ParagraphId`,a2=`${ce}LoadingId`,o2=`data-${ut}-loading-id`,s2=`${ce}ErrorId`,l2=`data-${ut}-error-id`,c2=`${ce}AtomicBlockMark`,u2=`${ce}ExcludeMark`,d2=`data-${ut}-exclude-mark`,p2=`${ce}StayOriginalMark`,h2=`${ce}PreWhitespaceMark`,f2=`${ce}InlineMark`,m2=`${ce}BlockMark`,g2=`${ce}Left`,b2=`${ce}Right`,y2=`${ce}Width`,w2=`${ce}Height`,v2=`${ce}Top`,x2=`${ce}FontSize`;var T2=`${ce}GlobalStyleMark`,Ry=["@","#"];var _2=`${ut}-target-wrapper`,S2=`${ut}-pdf-target-container`,k2=`${ut}-target-inner`,A2=`${ut}-source-wrapper`,E2=`${ut}-target-translation-block-wrapper`,C2=`${ut}-root-translation-theme`,L2=`${ce}RootTranslationTheme`,D2=`${ut}-target-translation-vertical-block-wrapper`,R2=`${ut}-target-translation-pdf-block-wrapper`,O2=`${ut}-target-translation-pre-whitespace`,N2=`${ut}-target-translation-inline-wrapper`;var ih=[{type:"select",name:"codename",labelKey:"field.translationEngine",default:"youdao",required:!1,options:[{label:"translationServices.google",value:"google"},{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.aws",value:"aws"}]}],P2={bing:{name:"\u5FAE\u8F6F\u7FFB\u8BD1",homepage:"https://www.bing.com/translator"},google:{name:"Google",homepage:"https://translate.google.com/"},deepl:{name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://immersivetranslate.com/docs/services/deepL/",providers:[{name:"pro",nameKey:"deepLProName",descriptionKey:"deepLProDescription",descriptionKeyForNormal:"deeplProDescriptionForNormal",descriptionLink1:"https://immersivetranslate.com/pricing"},{name:"custom",nameKey:"deepLCustomName",descriptionKey:"deepLCustomDescription",descriptionLink1:"https://www.deepl.com/translator",descriptionLink2:"https://immersivetranslate.com/docs/services/deepL/"}],allProps:[{name:"authKey",providers:["custom"],label:"Auth Key",required:!0,type:"password"}]},openai:{name:"Open AI",homepage:"https://openai.com/api/",docUrl:"https://immersivetranslate.com/docs/services/openai/",providers:[{name:"pro",nameKey:"openaiProName",descriptionKey:"openaiProDescription",descriptionKeyForNormal:"openaiProDescriptionForNormal",descriptionLink1:"https://immersivetranslate.com/pricing"},{name:"custom",nameKey:"openaiCustomName",descriptionKey:"openaiCustomDescription",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/"}],allProps:[{name:"APIKEY",providers:["custom"],required:!0,type:"password"},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!1,type:"openai-model-select",default:"gpt-3.5-turbo-1106",providers:["custom"],options:[{providers:["custom","pro"],label:"gpt-3.5-turbo",value:"gpt-3.5-turbo"},{providers:["custom","pro"],label:"gpt-3.5-turbo-1106",value:"gpt-3.5-turbo-1106"},{providers:["custom","pro"],label:"gpt-3.5-turbo-0613",value:"gpt-3.5-turbo-0613"},{providers:["custom"],label:"gpt-4-1106-preview",value:"gpt-4-1106-preview"},{providers:["custom"],label:"gpt-4",value:"gpt-4"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.limitPerSecond",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/",type:"number",default:10,providers:["custom"]},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.openai.com/v1/chat/completions",descriptionKey:"description.apiUrl",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/",optional:!0,providers:["custom"]},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"textarea",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`Translate the text to {{to}}, please do not explain any sentences, just translate or leave them as they are.:

{{text}}`,optional:!0}]},transmart:{name:"Transmart",homepage:"https://transmart.qq.com/"},youdao:{name:"Youdao",homepage:"https://youdao.com/",docUrl:"https://immersivetranslate.com/docs/services/youdao/",allProps:[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:200,optional:!0},{name:"domain",required:!1,labelKey:"field.domain",descriptionKey:"description.domain",descriptionLink1:"https://fanyi.youdao.com/openapi/",type:"text",default:"general",optional:!0},{name:"vocabId",required:!1,labelKey:"field.vocabId",descriptionKey:"description.vocabId",type:"text",default:"",optional:!0}]},tencent:{name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://immersivetranslate.com/docs/services/tencent/",allProps:[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]},aliyun:{name:"Aliyun",homepage:"https://translate.alibaba.com/",docUrl:"https://immersivetranslate.com/docs/services/aliyun/",allProps:[{name:"AccessKeyID",required:!0,type:"text"},{name:"AccessKeySecret",required:!0,type:"password"},{name:"scene",labelKey:"field.scene",descriptionKey:"description.scene",descriptionLink1:"https://help.aliyun.com/document_detail/158267.html",required:!1,optional:!0,type:"text",default:"general"}]},azure:{name:"azure",homepage:"https://learn.microsoft.com/en-us/azure/cognitive-services/translator/text-translation-overview",docUrl:"https://immersivetranslate.com/docs/services/azure/",allProps:[{name:"region",required:!1,default:"eastasia",type:"text"},{name:"APIKEY",required:!0,type:"password"},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.cognitive.microsofttranslator.com/",descriptionKey:"description.azureApiUrl",optional:!0}]},papago:{name:"Papago",homepage:"https://translate.google.com/",canary:!0},baidu:{name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://immersivetranslate.com/docs/services/baidu/",allProps:[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:1,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0},{name:"action",required:!1,labelKey:"field.action",descriptionKey:"description.action",descriptionLink1:"https://fanyi-api.baidu.com/doc/21",type:"boolean",default:!1,optional:!0}]},volc:{name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://immersivetranslate.com/docs/services/volcano/",allProps:[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0}]},caiyun:{name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://immersivetranslate.com/docs/services/caiyun/",allProps:[{name:"token",required:!0,type:"password"}]},cai:{name:"Cai",homepage:"https://fanyi.caiyunapp.com/",alpha:!0},custom:{name:"Custom",beta:!0,homepage:"https://immersivetranslate.com/docs/services/custom/",titleKey:"description.custom",allProps:[{name:"url",label:"API URL",required:!0,type:"text"},{name:"langs",required:!1,labelKey:"field.langs",type:"textarea",default:"zh-CN,en",optional:!0},{name:"placeholderDelimiters",required:!1,labelKey:"field.placeholderDelimiters",type:"text",default:Ry,optional:!0},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0}]},mock:{name:"Mock",homepage:"https://www.google.com"},mock2:{name:"Mock2",homepage:"https://www.google.com"},tenAlpha:{name:"TenAlpha",homepage:"https://fanyi.qq.com/",alpha:!0},you:{name:"You",alpha:!0,homepage:"https://youdao.com/"},openl:{name:"Openl",homepage:"https://openl.club/",docUrl:"https://immersivetranslate.com/docs/services/openL/",allProps:[...ih,{type:"password",name:"apikey",required:!0}],props:ih},volcAlpha:{name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},d:{name:"D () ",canary:!0,homepage:"https://www.deepl.com/translator"},dpro:{name:"DPro (Canary) ",canary:!0,homepage:"https://www.deepl.com/translator"},deeplx:{name:"DeepLX (Beta)",beta:!0,homepage:"https://www.deepl.com/translator",allProps:[{name:"url",label:"API URL",required:!0,type:"text"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0}]},niu:{name:"niutrans",homepage:"https://niutrans.com/",docUrl:"https://immersivetranslate.com/docs/services/niu",allProps:[{name:"APIKEY",required:!0,type:"password"}]}},M2={type:ce+"ChildFrameToRootFrameIdentifier"};var I2=pn()?"https://dash.immersivetranslate.com/#general":"http://localhost:8000/dist/userscript/options/#general";var F2=pn()||Cn()?"https://api2.immersivetranslate.com":"https://test-api2.immersivetranslate.com",B2=pn()||Cn()?"https://immersivetranslate.com/accounts/login?from=plugin":"https://test.immersivetranslate.com/accounts/login?from=plugin",Oy=pn()||Cn()?"https://immersivetranslate.com/profile":"https://test.immersivetranslate.com/profile",Os=pn()||Cn()?"https://immersivetranslate.com/pricing":"https://test.immersivetranslate.com/pricing",Ny=pn()||Cn()?"https://immersivetranslate.com/topup?type=open_ai&":"https://test.immersivetranslate.com/topup?type=open_ai&",Py=pn()||Cn()?"https://immersivetranslate.com/topup?type=deepl&":"https://test.immersivetranslate.com/topup?type=deepl&",z2=Os+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_more",U2=Os+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_footer",$2=Os+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal",W2=Ny+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",H2=Py+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",j2=Oy+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal&upgradeFromTrial=true";var{ZipReader:My,BlobReader:Ps,TextReader:Ns,TextWriter:Iy,BlobWriter:ch,ZipWriter:Fy}=vo;Ni({useWebWorkers:!1});var By=async t=>{let e=new Uint8Array(await t.slice(0,4).arrayBuffer());return e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4},An=null,ca=0,ua=0,or=0,lh=!1,zy=pr(),Uy=zy.PROD==="1",$y=async t=>{let n=await new My(new Ps(t)).getEntries();t.name&&t.name.endsWith(".zip")&&n.every(c=>c.filename.startsWith(t.name.slice(0,-4)+"/"))&&(n=n.map(c=>(c.filename=c.filename.slice(t.name.length-3),c)));let r=new Map(n.map(l=>[l.filename,l])),i=l=>(c,...u)=>r.has(c)?l(r.get(c),...u):null,a=i(l=>l.getData(new Iy)),o=i((l,c)=>l.getData(new ch(c)));return{entries:n,loadText:a,loadBlob:o,getSize:l=>r.get(l)?.uncompressedSize??0}},uh=async t=>t.isFile?t:(await Promise.all(Array.from(await new Promise((e,n)=>t.createReader().readEntries(r=>e(r),r=>n(r))),uh))).flat(),Wy=async t=>{let e=await uh(t);e=e.map(p=>p);let n=[],r=await Promise.all(e.map(p=>new Promise((d,h)=>p.file(b=>d([b,p.fullPath]),b=>h(b))))),i=new Map(r.map(([p,d])=>{let h=d.replace(t.fullPath+"/","");return n.push({filename:h,...p}),[h,p]})),a=new TextDecoder,o=p=>p?a.decode(p):null,s=p=>i.get(p)?.arrayBuffer()??null;return{entries:n,loadText:async p=>o(await s(p)),loadBlob:async p=>i.get(p),getSize:p=>i.get(p)?.size??0}},Hy=({name:t,type:e})=>e==="application/vnd.comicbook+zip"||t.endsWith(".cbz"),jy=({name:t,type:e})=>e==="application/x-fictionbook+xml"||t.endsWith(".fb2"),qy=({name:t,type:e})=>e==="application/x-zip-compressed-fb2"||t.endsWith(".fb2.zip")||t.endsWith(".fbz"),Ky=async(t,e)=>{let n;if(t.isDirectory){let a=await Wy(t);An=a,n=await new mr(a).init()}else if(t.size)if(await By(t)){let a=await $y(t);if(An=a,Hy(t))n=ll(a,t);else if(qy(t)){let{entries:o}=a,s=o.find(c=>c.filename.endsWith(".fb2")),l=await a.loadBlob((s??o[0]).filename);n=await _a(l)}else n=await new mr(a).init()}else await vl(t)?n=await new ci({unzlib:ed}).open(t):jy(t)&&(n=await _a(t));else throw new Error("File not found");if(!n)throw new Error("File type not supported");let r=new ni(n,e),i=await r.display();return document.body.append(i),r},Be=document.querySelector.bind(document),In=!1;function dh(){let t=document.querySelectorAll("iframe");for(let r=0;r<t.length;r++){let a=t[r].contentDocument,o=a&&a.body;o&&o.setAttribute("contenteditable",!1)}In=!1;let e=document.getElementById("edit");e&&(e.innerText=In?"Preview (\u9884\u89C8)":"Edit (\u7F16\u8F91)");let n=document.querySelectorAll("[data-type='iframe-title']");for(let r=0;r<n.length;r++){let i=n[r];i.innerText=In?" \uFF08\u4EE5\u4E0B\u5185\u5BB9\u5F53\u524D\u53EF\u7F16\u8F91\uFF09":""}}function Gy(){let t=document.querySelectorAll("iframe");for(let r=0;r<t.length;r++){let a=t[r].contentDocument,o=a&&a.body;o&&o.setAttribute("contenteditable",!0)}In=!0;let e=document.getElementById("edit");e&&(e.innerText=In?"Preview (\u9884\u89C8)":"Edit (\u7F16\u8F91)");let n=document.querySelectorAll("[data-type='iframe-title']");for(let r=0;r<n.length;r++){let i=n[r];i.innerText=In?" \uFF08\u4EE5\u4E0B\u5185\u5BB9\u5F53\u524D\u53EF\u7F16\u8F91\uFF09":""}}function Vy(){In?dh():Gy()}var Ms=class{style={spacing:1.4,justify:!0,hyphenate:!0};layout={margin:48,gap:48,maxColumnWidth:720};closeSideBar(){Be("#dimming-overlay").classList.remove("show"),Be("#side-bar").classList.remove("show")}constructor(){Be("#side-bar-button").addEventListener("click",()=>{Be("#dimming-overlay").classList.add("show"),Be("#side-bar").classList.add("show")}),Be("#dimming-overlay").addEventListener("click",()=>this.closeSideBar());let e=ol([{name:"layout",label:"Layout",type:"radio",items:[["Paginated","paginated"],["Scrolled","scrolled"]],onclick:n=>{this.layout.flow=n}}]);e.element.classList.add("menu"),Be("#menu-button").append(e.element),Be("#menu-button > button").addEventListener("click",()=>e.element.classList.toggle("show")),e.groups.layout.select("paginated")}async open(e){Be("#progress").classList.remove("none");try{document.addEventListener(ah,b=>{let{detail:g}=b;if(g)try{let m=JSON.parse(g);if(m&&m.type&&m.payload){if(m.type==="paragraphTranslated"){let{ok:f}=m.payload;if(f?ua++:or++,s&&ca){let y=ua,w=ua+or,E=y/ca*100,_=Math.floor(E),T=Math.floor(w/ca*100);if(_>100&&(_=100),T>100&&(T=100),s.innerText=`${_}%`,T===100&&or>0){let v=document.querySelector("#error");v.innerHTML=Wr.sanitize(`${or} failed(\u5931\u8D25). <span class="link">Retry all (\u70B9\u6B64\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D)</span>`)}_===100&&(lh||(lh=!0,Ds({particleCount:100,spread:160})))}}else if(m.type==="totalParagraphsCount")m.payload.totalParagraphsCount&&(ca=m.payload.totalParagraphsCount);else if(m.type==="translateStart")ua=0,or=0;else if(m.type==="restorePage"){let f=document.querySelector("#error"),y=document.querySelector("#progress-number");f&&(f.innerHTML=""),y&&(y.innerText="")}}}catch{}}),this.view=await Ky(e,this.#e.bind(this));let{book:n}=this.view,r=n.sections,i=document.querySelector("#chapters"),a=n.resources,o=[];if(a&&a.guide&&a.guide.length)for(let b of a.guide)o.push(b.href);let s=document.querySelector("#progress-number"),l=document.querySelector("#error");l.addEventListener("click",b=>{for(b.preventDefault();l.firstChild;)l.removeChild(l.firstChild);or=0,document.dispatchEvent(new CustomEvent(oh,{detail:JSON.stringify({type:"retryFailedParagraphs"})}))}),Be("#open").addEventListener("click",()=>{window.location.reload()}),Be("#export").addEventListener("click",async b=>{b.preventDefault(),An||alert("Load failed");let g=document.querySelector("#export");g.classList.add("disabled");let m=document.querySelector("#exportAction");m&&m.classList.add("none");let f=document.querySelector("#exportStatus");f&&(f.innerText="Exporting..."),dh();let y=An.entries,w=new ch,E=new Fy(w),_=new Ns("application/epub+zip");await E.add("mimetype",_,{level:0,extendedTimestamp:!1});for(let k=0;k<y.length;k++){let C=y[k],N=C.filename;if(N==="mimetype"||!N)continue;let O=N.replace(/\'/g,"\\'"),B=document.querySelector("iframe[id='"+O+"']");if(B){let P=B.contentDocument.cloneNode(!0);P.querySelectorAll("["+Rs+"]").forEach(L=>{if(Uy){delete L[sh];let H=Object.keys(L.dataset).filter(G=>G.startsWith(ce));for(let G of H)delete L.dataset[G]}else{let H=Object.keys(L.dataset).filter(G=>G.startsWith(ce));for(let G of H)delete L.dataset[G]}L.removeAttribute(Rs)}),P.querySelectorAll("[data-id]").forEach(L=>{L.removeAttribute("data-id")}),P.querySelectorAll("[contenteditable]").forEach(L=>{L.removeAttribute("contenteditable")}),P.querySelectorAll("style").forEach(L=>{L.getAttribute("type")||L.setAttribute("type","text/css")});let K=new XMLSerializer().serializeToString(P),ee=new Ns(K);try{await E.add(C.filename,ee)}catch{}}else{let P=n.metadata;if(C.filename===n.opfPath&&P&&P.identifier)try{let U=await An.loadText(C.filename),z=new DOMParser().parseFromString(U,"text/xml"),j=z.getElementById(z.documentElement.getAttribute("unique-identifier"))??z.getElementsByTagNameNS(NS.DC,"identifier")[0],ne=Math.random().toString(10).slice(2,15);j.textContent=ne;let K=new XMLSerializer().serializeToString(z),ee=new Ns(K);await E.add(C.filename,ee)}catch{let z=await An.loadBlob(C.filename);await E.add(C.filename,new Ps(z))}else try{let U=await An.loadBlob(C.filename);await E.add(C.filename,new Ps(U))}catch{}}}await E.close();let T=await w.getData(),v=e.name;e.name.endsWith(".epub.zip")&&(v=v.replace(".epub.zip",".epub"));let x=v.lastIndexOf("."),S=Math.min(160,x);v=v.substring(0,S)+" (Translated).epub",await Mr.saveAs(T,v),g&&g.classList.remove("disabled"),m&&m.classList.remove("none"),f&&(f.textContent="")}),Be("#edit").addEventListener("click",b=>{b.preventDefault(),An||alert("Load failed"),Vy()});let u=(n.metadata||{}).title||"Unknown",p=document.querySelector("#bookTitle");p.textContent=u;let d=!1,h=0;for(let b=0;b<r.length;b++){let m=r[b].id,f=await n.loadText(m),y=new DOMParser().parseFromString(f,"application/xhtml+xml"),w=document.createElement("div");w.classList.add("flex"),w.classList.add("justify-center"),w.classList.add("items-center"),i.append(w);let E=document.createElement("h2");E.classList.add("notranslate"),E.innerText=m,w.append(E);let _=document.createElement("span");_.dataset.type="iframe-title",_.classList.add("notranslate"),_.innerText="",w.append(_);let T=document.createElement("iframe");T.setAttribute("id",m),T.setAttribute("width","80%"),T.setAttribute("height","400px"),T.srcdoc=y.documentElement.outerHTML,i.append(T),T.onload=()=>{if(h++,h===r.length){d=!0,Be("#progress").classList.add("none"),setTimeout(()=>{let N=document.createElement("blockquote");N.classList.add("notranslate");let O=`<p class="notranslate">1. Click on the Immersive Translate extension popup translation button to start translating.<br>\u9700\u8981\u624B\u52A8\u70B9\u51FB\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u6269\u5C55/\u811A\u672C\u6D6E\u7A97\u7684\u7FFB\u8BD1\u6309\u94AE\u5F00\u59CB\u7FFB\u8BD1\u3002<br><br>2. If the Epub contains images, it's fine for the edit box below not to show the images, the exported Epub will contain the images.<br>\u5982\u679C Epub \u91CC\u5305\u542B\u56FE\u7247\uFF0C\u4E0B\u9762\u7684\u7F16\u8F91\u6846\u4E0D\u663E\u793A\u56FE\u7247\u662F\u6B63\u5E38\u7684\uFF0C\u5BFC\u51FA\u540E\u7684 Epub \u91CC\u4F1A\u5305\u542B\u56FE\u7247\u3002<br><br>3. When the translation is finished, you can click the Edit button above to modify the translation.<br>\u7FFB\u8BD1\u5B8C\u6210\u540E\uFF0C\u4F60\u53EF\u4EE5\u70B9\u51FB\u4E0A\u65B9\u7684\u7F16\u8F91\u6309\u94AE\u6765\u4FEE\u6539\u8BD1\u6587\u3002<br><br>4. When there is a translation error, you can click Retry All above, or click Show Original and translate again. Or the whole page can be refreshed and started again, because the translated part is always cached and no further requests will be sent.<br>\u5F53\u51FA\u73B0\u7FFB\u8BD1\u9519\u8BEF\u65F6\uFF0C\u53EF\u4EE5\u70B9\u51FB\u4E0A\u65B9\u7684\u91CD\u8BD5\u5168\u90E8\uFF0C\u6216\u8005\u70B9\u51FB\u6D4F\u89C8\u5668\u6269\u5C55\u56FE\u6807\u5148\u663E\u793A\u539F\u6587\uFF0C\u518D\u7FFB\u8BD1\u3002\u6216\u8005\u6574\u4E2A\u5237\u65B0\u9875\u9762\u91CD\u65B0\u6765\u8FC7\u4E5F\u884C\uFF0C\u56E0\u4E3A\u5DF2\u7FFB\u8BD1\u7684\u90E8\u5206\u603B\u662F\u6709\u7F13\u5B58\u7684\uFF0C\u4E0D\u4F1A\u518D\u53D1\u51FA\u8BF7\u6C42\u3002`,B=!1;try{let z=document.querySelector("meta[name='immersive-translate-meta']");if(z){let j=as(z?.content||""),ne=new TextDecoder().decode(j),K=JSON.parse(ne);K&&K.isProUser&&(B=!0)}}catch{}B?O+=`<br><br>5. If you have additional needs, you can also purchase the Pro-only  <a
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
</p>`:O+="</p>";let P=document.querySelector("meta[name='immersive-translate-ebook-tips']");if(P){let z=P.getAttribute("content");z&&(O+=z)}N.innerHTML=Wr.sanitize(O),document.querySelector("#tips").append(N)},1e3),document.dispatchEvent(new CustomEvent("immersiveTranslateEbookLoaded"));let x=document.querySelectorAll("iframe"),S=0;x.forEach(N=>{let P=N.contentDocument.body.innerText.length;S+=P});let k=document.createElement("p");k.classList.add("notranslate"),k.innerText=`The book is about ${S} characters in total (\u672C\u4E66\u5927\u7EA6 ${S} \u4E2A\u5B57\u7B26)`,Be("#stats").append(k)}};let v=b/r.length*100;document.getElementById("progressBar").value=v}}catch(n){alert(n.message),window.location.reload()}}#e(e){}},ph=async t=>{document.body.removeChild(Be("#drop-target"));let e=new Ms;globalThis.reader=e,await e.open(t),Be("#editor").classList.remove("none")},Xy=t=>t.preventDefault(),Yy=t=>{t.preventDefault();let e=Array.from(t.dataTransfer.items).find(n=>n.kind==="file");if(e){let n=e.webkitGetAsEntry();ph(n.isFile?e.getAsFile():n).catch(r=>{})}},hh=Be("#drop-target");hh.addEventListener("drop",Yy);hh.addEventListener("dragover",Xy);Be("#file-input").addEventListener("change",t=>ph(t.target.files[0]).catch(e=>{}));Be("#file-button").addEventListener("click",()=>Be("#file-input").click());})();
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
