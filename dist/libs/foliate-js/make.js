(()=>{var Jp=Object.defineProperty;var eh=(t,e)=>{for(var n in e)Jp(t,n,{get:e[n],enumerable:!0})};var ie={BUILD_TIME:"2023-11-13T17:11:31.000Z",VERSION:"0.11.5",PROD:"1",REDIRECT_URL:"https://dash.immersivetranslate.com/auth-done/",PROD_API:"1",BETA:"0",IMMERSIVE_TRANSLATE_INJECTED_CSS:`:root {
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
`,IMMERSIVE_TRANSLATE_VIDEO_SUBTITLE_HOOK:`(() => {
  const xhrOpen = XMLHttpRequest.prototype.open;
  const xhrSend = XMLHttpRequest.prototype.send;

  const customOpen = function () {
    arguments[1].includes("api/timedtext") && (this._url = arguments[1]),
      xhrOpen.apply(this, arguments);
  };

  const customSend = function () {
    if (this._url) {
      const id = (new Date()).getTime();
      globalThis.postMessage({
        type: "youtube-subtitle-request",
        text: this._url,
        id,
      });

      const handleEvent = ({ data }) => {
        if ("youtube-subtitle-response" === data.type && data.id === id) {
          if (data.text) {
            Object.defineProperty(this, "responseText", {
              value: data.text,
              writable: false,
            });
          }
          xhrSend.apply(this, arguments);
          globalThis.removeEventListener("message", handleEvent);
        }
      };
      globalThis.addEventListener("message", handleEvent);
    } else {
      xhrSend.apply(this, arguments);
    }
  };
  Object.defineProperty(XMLHttpRequest.prototype, "open", {
    value: customOpen,
    writable: false,
  });
  Object.defineProperty(XMLHttpRequest.prototype, "send", {
    value: customSend,
    writable: false,
  });

  let timer = null;

  const getYTInitialPlayerResponse = () => {
    return fetch(globalThis.location.href)
      .then((res) => {
        if (!res.ok) throw new Error("request subtitle error");
        return res.text();
      })
      .then((t) =>
        (new window.DOMParser())
          .parseFromString(t, "text/html")
      )
      .then((t) => {
        const n = [...t.body.querySelectorAll(":scope > script")].find(
          (t) => t.textContent.includes("ytInitialPlayerResponse"),
        );
        return new Function(
          \`const window = {}; \${n.textContent}; return ytInitialPlayerResponse;\`,
        )();
      }).catch((e) => {
        return null;
      });
  };

  const reloadSubtitles = ({ selector, force }) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const video = document.querySelector(selector || \`.html5-video-player\`);
      if (!video || !video.toggleSubtitles) {
        reloadSubtitles({ selector, force });
        return;
      }
      video.toggleSubtitles();
      video.toggleSubtitles();
    }, 300);
  };

  globalThis.addEventListener("message", ({ data }) => {
    if (data.type == "youtube-reload-subtitles") {
      reloadSubtitles(data);
    }
    if (data.type === "youtube-initial-player-request") {
      getYTInitialPlayerResponse(data.text).then((res) => {
        globalThis.postMessage({
          type: "youtube-initial-player-response",
          text: res,
          id: data.id,
        });
      });
    }
  });
})();
`,PDF_VIEWER_URL:"https://app.immersivetranslate.com/pdf/",OPTIONS_URL:"https://dash.immersivetranslate.com/",EBOOK_VIEWER_URL:"https://app.immersivetranslate.com/ebook/",EBOOK_BUILDER_URL:"https://app.immersivetranslate.com/ebook/make/",SUBTITLE_BUILDER_URL:"https://app.immersivetranslate.com/subtitle/",HTML_VIEWER_URL:"https://app.immersivetranslate.com/html/",SHARE_DRAFT_URL:"https://immersivetranslate.com/drafts",MOCK:"0",DEBUG:"0",IMMERSIVE_TRANSLATE_USERSCRIPT:"1",INSTALL_FROM:"official_userscript"};var nh=(t,e)=>t.map((n,r,i)=>e(n,r,i)?r:null).filter(n=>n!=null),Os=(t,e)=>[-1,...e,t.length].reduce(({xs:n,a:r},i)=>({xs:n?.concat([t.slice(r+1,i)])??[],a:i}),{}).xs,rh=(t,e)=>t.slice(0,-1).concat([t[t.length-1].concat(e[0])]).concat(e.slice(1)),ra=/\d/,tr=/^epubcfi\((.*)\)$/,Rs=t=>t.replace(/[\^[\](),;=]/g,"^$&"),ih=t=>tr.test(t)?t:`epubcfi(${t})`,ah=t=>t.match(tr)?.[1]??t,oh=t=>(...e)=>`epubcfi(${t(...e.map(n=>n.match(tr)?.[1]??n))})`,Ps=oh((...t)=>t.join("!")),sh=t=>{let e=[],n,r,i="",a=s=>(e.push(s),n=null,i=""),o=s=>(i+=s,r=!1);for(let s of Array.from(t.trim()).concat("")){if(s==="^"&&!r){r=!0;continue}if(n==="!")a(["!"]);else if(n===",")a([","]);else if(n==="/"||n===":")if(ra.test(s)){o(s);continue}else a([n,parseInt(i)]);else if(n==="~")if(ra.test(s)||s==="."){o(s);continue}else a(["~",parseFloat(i)]);else if(n==="@"){if(s===":"){a(["@",parseFloat(i)]),n="@";continue}if(ra.test(s)||s==="."){o(s);continue}else a(["@",parseFloat(i)])}else if(n==="["){s===";"&&!r?(a(["[",i]),n=";"):s===","&&!r?(a(["[",i]),n="["):s==="]"&&!r?a(["[",i]):o(s);continue}else if(n?.startsWith(";")){s==="="&&!r?(n=`;${i}`,i=""):s===";"&&!r?(a([n,i]),n=";"):s==="]"&&!r?a([n,i]):o(s);continue}(s==="/"||s===":"||s==="~"||s==="@"||s==="["||s==="!"||s===",")&&(n=s)}return e},Ms=(t,e)=>nh(t,([n])=>n===e),lh=t=>{let e=[],n;for(let[r,i]of t){if(r==="/")e.push({index:i});else{let a=e[e.length-1];if(r===":")a.offset=i;else if(r==="~")a.temporal=i;else if(r==="@")a.spatial=(a.spatial??[]).concat(i);else if(r===";s")a.side=i;else if(r==="[")if(n==="/"&&i)a.id=i;else{a.text=(a.text??[]).concat(i);continue}}n=r}return e},Ns=t=>Os(t,Ms(t,"!")).map(lh),Zt=t=>{let e=sh(ah(t)),n=Ms(e,",");if(!n.length)return Ns(e);let[r,i,a]=Os(e,n).map(Ns);return{parent:r,start:i,end:a}},ch=({index:t,id:e,offset:n,temporal:r,spatial:i,text:a,side:o})=>{let s=o?`;s=${o}`:"";return`/${t}`+(e?`[${Rs(e)}${s}]`:"")+(n!=null&&t%2?`:${n}`:"")+(r?`~${r}`:"")+(i?`@${i.join(":")}`:"")+(a||!e&&o?"["+(a?.map(Rs)?.join(",")??"")+s+"]":"")},Is=t=>t.parent?[t.parent,t.start,t.end].map(Is).join(","):t.map(e=>e.map(ch).join("")).join("!"),Fr=t=>ih(Is(t)),zt=(t,e)=>typeof t=="string"?Fr(zt(Zt(t),e)):t.parent?rh(t.parent,t[e?"end":"start"]):t,uh=(t,e)=>{typeof t=="string"&&(t=Zt(t)),typeof e=="string"&&(e=Zt(e)),t=zt(t),e=zt(e,!0);let n=t[t.length-1],r=e[e.length-1],i=[],a=[],o=[],s=!0,l=Math.max(n.length,r.length);for(let u=0;u<l;u++){let p=n[u],d=r[u];s&&=p?.index===d?.index&&!p?.offset&&!d?.offset,s?i.push(p):(p&&a.push(p),d&&o.push(d))}let c=t.slice(0,-1).concat([i]);return Fr({parent:c,start:[a],end:[o]})},er=(t,e)=>{if(typeof t=="string"&&(t=Zt(t)),typeof e=="string"&&(e=Zt(e)),t.start||e.start)return er(zt(t),zt(e))||er(zt(t,!0),zt(e,!0));for(let n=0;n<Math.max(t.length,e.length);n++){let r=t[n],i=e[n],a=Math.max(r.length,i.length)-1;for(let o=0;o<=a;o++){let s=r[o],l=i[o];if(!s)return-1;if(!l||s.index>l.index)return 1;if(s.index<l.index)return-1;if(o===a){if(s.offset>l.offset)return 1;if(s.offset<l.offset)return-1}}}return 0},ia=({nodeType:t})=>t===3||t===4,Mr=({nodeType:t})=>t===1,oa=t=>{let e=Array.from(t.childNodes).filter(n=>ia(n)||Mr(n)).reduce((n,r)=>{let i=n[n.length-1];return i?ia(r)?Array.isArray(i)?i.push(r):ia(i)?n[n.length-1]=[i,r]:n.push(r):Mr(i)?n.push(null,r):n.push(r):n.push(r),n},[]);return Mr(e[0])&&e.unshift("first"),Mr(e[e.length-1])&&e.push("last"),e.unshift("before"),e.push("after"),e},dh=(t,e)=>t?oa(t)[e]:null,aa=(t,e)=>{let{id:n}=e[e.length-1];if(n){let a=t.ownerDocument.getElementById(n);if(a)return{node:a,offset:0}}for(let{index:a}of e){let o=dh(t,a);if(o==="first")return{node:t.firstChild??t};if(o==="last")return{node:t.lastChild??t};if(o==="before")return{node:t,before:!0};if(o==="after")return{node:t,after:!0};t=o}let{offset:r}=e[e.length-1];if(!Array.isArray(t))return{node:t,offset:r};let i=0;for(let a of t){let{length:o}=a.nodeValue;if(i+o>=r)return{node:a,offset:r-i};i+=o}},Ir=(t,e)=>{let{parentNode:n,id:r}=t,i=oa(n),a=i.findIndex(l=>Array.isArray(l)?l.some(c=>c===t):l===t),o=i[a];if(Array.isArray(o)){let l=0;for(let c of o)if(c===t){l+=e;break}else l+=c.nodeValue.length;e=l}let s={id:r,index:a,offset:e};return n!==t.ownerDocument.documentElement?Ir(n).concat(s):[s]},Fs=t=>{let{startContainer:e,startOffset:n,endContainer:r,endOffset:i}=t,a=Ir(e,n);if(t.collapsed)return Fr([a]);let o=Ir(r,i);return uh([a],[o])},Br=(t,e)=>{let n=zt(e),r=zt(e,!0),i=t.documentElement,a=aa(i,n[0]),o=aa(i,r[0]),s=t.createRange();return a.before?s.setStartBefore(a.node):a.after?s.setStartAfter(a.node):s.setStart(a.node,a.offset),o.before?s.setEndBefore(o.node):o.after?s.setEndAfter(o.node):s.setEnd(o.node,o.offset),s},Bs=t=>{let e=[],{parentNode:n}=t[0],r=Ir(n);for(let[i,a]of oa(n).entries()){let o=t[e.length];a===o&&e.push(Fr([r.concat({id:o.id,index:i})]))}return e},sa=(t,e)=>aa(t.documentElement,zt(e)).node,la={fromIndex:t=>`/6/${(t+1)*2}`,toIndex:t=>t?.at(-1).index/2-1};var ph=t=>{let e=0,n=r=>{if(r.id=e++,r.subitems)for(let i of r.subitems)n(i)};for(let r of t)n(r);return t},zs=t=>t.map(e=>e.subitems?.length?[e,zs(e.subitems)].flat():e).flat(),nr=class{constructor({toc:e,ids:n,splitHref:r,getFragment:i}){ph(e);let a=zs(e),o=new Map;for(let[l,c]of a.entries()){let[u,p]=r(c?.href)??[],d={fragment:p,item:c};o.has(u)?o.get(u).items.push(d):o.set(u,{prev:a[l-1],items:[d]})}let s=new Map;for(let[l,c]of n.entries())o.has(c)?s.set(c,o.get(c)):s.set(c,s.get(n[l-1]));this.ids=n,this.map=s,this.getFragment=i}getProgress(e,n){let r=this.ids[e],i=this.map.get(r);if(!i)return null;let{prev:a,items:o}=i;if(!o)return a;if(!n||o.length===1&&!o[0].fragment)return o[0].item;let s=n.startContainer.getRootNode();for(let[l,{fragment:c}]of o.entries()){let u=this.getFragment(s,c);if(u&&n.comparePoint(u,0)>0)return o[l-1]?.item??a}return o[o.length-1].item}},Ur=class{constructor(e,n,r){this.sizes=e.map(i=>i.linear==="no"?0:i.size),this.sizePerLoc=n,this.sizePerTimeUnit=r,this.sizeTotal=this.sizes.reduce((i,a)=>i+a,0)}getProgress(e,n){let{sizes:r,sizePerLoc:i,sizePerTimeUnit:a,sizeTotal:o}=this,s=r[e]??0,c=r.slice(0,e).reduce((d,h)=>d+h,0)+n*s,u=o-c,p=(1-n)*s;return{fraction:c/o,section:{current:e,total:r.length},location:{current:Math.floor(c/i),total:Math.ceil(o/i)},time:{section:p/a,total:u/a}}}getSection(e){let{sizes:n,sizeTotal:r}=this,i=e*r,a=-1,o=0,s=0;for(let[l,c]of n.entries()){let u=s+c;if(u>i){a=l,o=(i-s)/c;break}s=u}return[a,o]}};var Rn=t=>document.createElementNS("http://www.w3.org/2000/svg",t),zr=class{#e=Rn("svg");#t=new Map;constructor(){Object.assign(this.#e.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none"});let e=matchMedia("(prefers-color-scheme: dark)"),n=()=>this.#e.style.mixBlendMode=e.matches?"normal":"multiply";e.addEventListener("change",n),n()}get element(){return this.#e}add(e,n,r,i){this.#t.has(e)&&this.remove(e),typeof n=="function"&&(n=n(this.#e.getRootNode()));let a=n.getClientRects(),o=r(a,i);this.#e.append(o),this.#t.set(e,{range:n,draw:r,options:i,element:o,rects:a})}remove(e){this.#t.has(e)&&(this.#e.removeChild(this.#t.get(e).element),this.#t.delete(e))}redraw(){for(let e of this.#t.values()){let{range:n,draw:r,options:i,element:a}=e;this.#e.removeChild(a);let o=n.getClientRects(),s=r(o,i);this.#e.append(s),e.element=s,e.rects=o}}hitTest({x:e,y:n}){let r=Array.from(this.#t.entries());for(let i=r.length-1;i>=0;i--){let[a,o]=r[i];for(let{left:s,top:l,right:c,bottom:u}of o.rects)if(l<=n&&s<=e&&u>n&&c>e)return[a,o.range]}return[]}static underline(e,n={}){let{color:r="red",width:i=2}=n,a=Rn("g");a.setAttribute("fill",r);for(let{left:o,bottom:s,width:l}of e){let c=Rn("rect");c.setAttribute("x",o),c.setAttribute("y",s-i),c.setAttribute("height",i),c.setAttribute("width",l),a.append(c)}return a}static highlight(e,n={}){let{color:r="red"}=n,i=Rn("g");i.setAttribute("fill",r),i.setAttribute("fill-opacity",.3);for(let{left:a,top:o,height:s,width:l}of e){let c=Rn("rect");c.setAttribute("x",a),c.setAttribute("y",o),c.setAttribute("height",s),c.setAttribute("width",l),i.append(c)}return i}static copyImage([e],n={}){let{src:r}=n,i=Rn("image"),{left:a,top:o,height:s,width:l}=e;return i.setAttribute("href",r),i.setAttribute("x",a),i.setAttribute("y",o),i.setAttribute("height",s),i.setAttribute("width",l),i}};var Hr=class{#e=new Map;#t=new Map;#n=new Map;#r=new Map;constructor({resolve:e,compare:n,onAdd:r,onDelete:i,onUpdate:a}){this.resolve=e,this.compare=n,this.onAdd=r,this.onDelete=i,this.onUpdate=a}async add(e,n){let{value:r}=e;if(this.#t.has(r))return;let{index:i,anchor:a}=await this.resolve(r);if(this.#t.set(r,e),this.#r.set(r,i),this.#n.set(r,a),this.#e.has(i)){let o=this.#e.get(i);if(n)o.push(e),this.onAdd?.(e,i,o.length-1);else{let s=0;for(let l=0;l<o.length;l++){let c=o[l].value;if(this.compare(r,c)<=0)break;s=l+1}o.splice(s,0,e),this.onAdd?.(e,i,s)}}else this.#e.set(i,[e]),this.onAdd?.(e,i,0)}update(e){let n=this.#r.get(e.value),r=this.#t.get(e.value);Object.assign(r,e),this.onUpdate?.(e,n)}delete(e){let n=this.#r.get(e),r=this.#e.get(n),i=r.findIndex(a=>a.value===e);r.splice(i,1),this.#t.delete(e),this.#r.delete(e),this.#n.delete(e),this.onDelete?.(e,n,i)}getByIndex(e){return this.#e.get(e)??[]}getAnchor(e){return this.#n.get(e)}};var hh=t=>new Promise(e=>setTimeout(e,t)),fh=(t,e,n)=>{let r;return(...i)=>{let a=()=>{r=null,n||t(...i)},o=n&&!r;r&&clearTimeout(r),r=setTimeout(a,e),o&&t(...i)}},mh=t=>{if(!t?.collapsed)return t;let{endOffset:e,endContainer:n}=t;if(n.nodeType===1)return n;if(e+1<n.length)t.setEnd(n,e+1);else if(e>1)t.setStart(n,e-1);else return n.parentNode;return t},Wr=(t,e,n,r=n)=>{let i=t.createRange();return i.setStart(e,n),i.setEnd(e,r),i},$r=(t,e,n,r=0,i=e.nodeValue.length)=>{if(i-r===1)return n(Wr(t,e,r),Wr(t,e,i))<0?r:i;let a=Math.floor(r+(i-r)/2),o=n(Wr(t,e,r,a),Wr(t,e,a,i));return o<0?$r(t,e,n,r,a):o>0?$r(t,e,n,a,i):a},{SHOW_ELEMENT:gh,SHOW_TEXT:bh,SHOW_CDATA_SECTION:yh,FILTER_ACCEPT:Hs,FILTER_REJECT:Ws,FILTER_SKIP:$s}=NodeFilter,wh=gh|bh|yh,vh=(t,e,n,r)=>{let i=d=>{let h=d.localName?.toLowerCase();if(h==="script"||h==="style")return Ws;if(d.nodeType===1){let{left:b,right:g}=r(d.getBoundingClientRect());if(g<e||b>n)return Ws;if(b>=e&&g<=n)return Hs}else{if(!d.nodeValue?.trim())return $s;let b=t.createRange();b.selectNodeContents(d);let{left:g,right:m}=r(b.getBoundingClientRect());if(m>=e&&g<=n)return Hs}return $s},a=t.createTreeWalker(t.body,wh,{acceptNode:i}),o=[];for(let d=a.nextNode();d;d=a.nextNode())o.push(d);let s=o[0]??t.body,l=o[o.length-1]??s,c=s.nodeType===1?0:$r(t,s,(d,h)=>{let b=r(d.getBoundingClientRect()),g=r(h.getBoundingClientRect());return b.right<e&&g.left>e?0:g.left>e?-1:1}),u=l.nodeType===1?0:$r(t,l,(d,h)=>{let b=r(d.getBoundingClientRect()),g=r(h.getBoundingClientRect());return b.right<n&&g.left>n?0:g.left>n?-1:1}),p=t.createRange();return p.setStart(s,c),p.setEnd(l,u),p},xh=t=>{let{defaultView:e}=t,{writingMode:n,direction:r}=e.getComputedStyle(t.body),i=n==="vertical-rl"||n==="vertical-lr",a=t.body.dir==="rtl"||r==="rtl"||t.documentElement.dir==="rtl";return{vertical:i,rtl:a}},Th=t=>{let e=t.defaultView.getComputedStyle(t.body);return e.backgroundColor==="rgba(0, 0, 0, 0)"&&e.backgroundImage==="none"?t.defaultView.getComputedStyle(t.documentElement).background:e.background},ca=class{#e=document.createElement("div");#t=document.createElement("iframe");#n=document.createRange();#r;#i=!1;#a=!1;#o=!0;#s;#l={};constructor({container:e}){this.container=e,this.#t.classList.add("filter"),this.#e.append(this.#t),Object.assign(this.#e.style,{position:"relative",overflow:"hidden",flex:"0 0 auto",width:"100%",height:"100%"}),Object.assign(this.#t.style,{overflow:"hidden",border:"0",display:"none",width:"100%",height:"100%"}),this.#t.setAttribute("sandbox","allow-same-origin allow-scripts"),this.#t.setAttribute("scrolling","no")}get element(){return this.#e}get document(){return this.#t.contentDocument}async load(e,n,r){if(typeof e!="string")throw new Error(`${e} is not string`);return new Promise(i=>{this.#t.addEventListener("load",()=>{let a=this.document;n?.(a),this.#t.style.display="block";let{vertical:o,rtl:s}=xh(a),l=Th(a);this.#t.style.display="none",this.#i=o,this.#a=s,this.#n.selectNodeContents(a.body);let c=r?.({vertical:o,rtl:s,background:l});this.#t.style.display="block",this.render(c),new ResizeObserver(()=>this.expand()).observe(a.body),i()},{once:!0}),this.#t.src=e})}render(e){this.#o=e.flow!=="scrolled",this.#l=e,this.#o?this.columnize(e):this.scrolled(e)}scrolled({gap:e,columnWidth:n}){let r=this.#i,i=this.document;Object.assign(i.documentElement.style,{boxSizing:"border-box",padding:r?`${e}px 0`:`0 ${e}px`,columnWidth:"auto",height:"auto",width:"auto"}),Object.assign(i.body.style,{[r?"maxHeight":"maxWidth"]:`${n}px`,margin:"auto"}),this.setImageSize(),this.expand()}columnize({width:e,height:n,gap:r,columnWidth:i}){let a=this.#i;this.#s=a?n:e;let o=this.document;Object.assign(o.documentElement.style,{boxSizing:"border-box",columnWidth:`${i}px`,columnGap:`${r}px`,columnFill:"auto",...a?{width:`${e}px`}:{height:`${n}px`},padding:a?`${r/2}px 0`:`0 ${r/2}px`,overflow:"hidden",overflowWrap:"anywhere",position:"static",border:"0",margin:"0",maxHeight:"none",maxWidth:"none",minHeight:"none",minWidth:"none",webkitLineBoxContain:"block glyphs replaced"}),Object.assign(o.body.style,{maxHeight:"none",maxWidth:"none",margin:"0"}),this.setImageSize(),this.expand()}setImageSize(){let{width:e,height:n,margin:r}=this.#l,i=this.#i,a=this.document;for(let o of a.body.querySelectorAll("img, svg, video")){let{maxHeight:s,maxWidth:l}=a.defaultView.getComputedStyle(o);Object.assign(o.style,{maxHeight:i?s!=="none"&&s!=="0px"?s:"100%":`${n-r*2}px`,maxWidth:i?`${e-r*2}px`:l!=="none"&&l!=="0px"?l:"100%",objectFit:"contain",pageBreakInside:"avoid",breakInside:"avoid",boxSizing:"border-box"})}}expand(){if(this.#o){let e=this.#i?"height":"width",n=this.#i?"width":"height",r=this.#n.getBoundingClientRect()[e],a=Math.ceil(r/this.#s)*this.#s;this.#e.style.padding="0",this.#t.style[e]=`${a}px`,this.#e.style[e]=`${a}px`,this.#t.style[n]="100%",this.#e.style[n]="100%",this.document&&(this.document.documentElement.style[e]=`${a}px`),this.#r&&(this.#r.element.style.margin="0",this.#r.element.style[e]=`${a}px`,this.#r.redraw())}else{let e=this.#i?"width":"height",n=this.#i?"height":"width",a=this.document?.documentElement?.getBoundingClientRect()?.[e],{margin:o}=this.#l,s=this.#i?`0 ${o}px`:`${o}px 0`;this.#e.style.padding=s,this.#t.style[e]=`${a}px`,this.#e.style[e]=`${a}px`,this.#t.style[n]="100%",this.#e.style[n]="100%",this.#r&&(this.#r.element.style.margin=s,this.#r.element.style[e]=`${a}px`,this.#r.redraw())}}set overlayer(e){this.#r=e,this.#e.append(e.element)}get overlayer(){return this.#r}},jr=class{#e=document.createElement("div");#t=document.createElement("div");#n;#r=!1;#i=!1;#a=-1;#o=0;#s=!1;#l=new WeakMap;layout={margin:48,gap:40,maxColumnWidth:700};constructor({book:e,onLoad:n,onRelocated:r,createOverlayer:i}){this.sections=e.sections,this.onLoad=n,this.onRelocated=r,this.createOverlayer=i,Object.assign(this.#e.style,{boxSizing:"border-box",width:"100%",height:"100%",position:"absolute"}),this.#e.append(this.#t),Object.assign(this.#t.style,{width:"100%",height:"100%"}),new ResizeObserver(()=>this.render()).observe(this.#e),this.#t.addEventListener("scroll",fh(()=>{this.scrolled&&this.#b("scroll")},250))}get element(){return this.#e}#d(){return this.#n&&this.#t.removeChild(this.#n.element),this.#n=new ca({container:this.#e}),this.#t.append(this.#n.element),this.#n}#c({vertical:e,rtl:n,background:r}){this.#r=e,this.#i=n,this.#e.style.background=r;let{flow:i,margin:a,gap:o,maxColumnWidth:s}=this.layout;if(i==="scrolled"){this.#e.setAttribute("dir",e?"rtl":"ltr"),this.#e.style.padding="0",this.#t.style.overflow="scroll";let g=this.layout.maxColumnWidth;return{flow:i,margin:a,gap:o,columnWidth:g}}let{width:l,height:c}=this.#t.getBoundingClientRect(),u=e?c:l,p=Math.ceil(u/s),d=u/p-o;this.#e.setAttribute("dir",n?"rtl":"ltr");let h=`${e?o:o/2}px`,b=`${e?a-o/2:a}px`;return this.#e.style.padding=`${b} ${h}`,this.#t.style.overflow="hidden",{height:c,width:l,margin:a,gap:o,columnWidth:d}}render(){this.#n&&(this.#n.render(this.#c({vertical:this.#r,rtl:this.#i})),this.#g())}get scrolled(){return this.layout.flow==="scrolled"}get scrollProp(){let{scrolled:e}=this;return this.#r?e?"scrollLeft":"scrollTop":e?"scrollTop":"scrollLeft"}get sideProp(){let{scrolled:e}=this;return this.#r?e?"width":"height":e?"height":"width"}get size(){return this.#t.getBoundingClientRect()[this.sideProp]}get viewSize(){return this.#n.element.getBoundingClientRect()[this.sideProp]}get start(){return Math.abs(this.#t[this.scrollProp])}get end(){return this.start+this.size}get page(){return Math.floor((this.start+this.end)/2/this.size)}get pages(){return Math.round(this.viewSize/this.size)}#u(){if(this.scrolled){let n=this.viewSize,r=this.layout.margin;return this.#r?({left:i,right:a})=>({left:n-a-r,right:n-i-r}):({top:i,bottom:a})=>({left:i+r,right:a+r})}let e=this.pages*this.size;return this.#i?({left:n,right:r})=>({left:e-r,right:e-n}):this.#r?({top:n,bottom:r})=>({left:n,right:r}):n=>n}async#h(e,n){if(this.scrolled){let i=this.#u()(e).left;return this.#p(i,n)}let r=this.#u()(e).left+this.layout.margin/2;return this.#f(Math.floor(r/this.size),n)}async#p(e,n){let r=this.#t,{scrollProp:i}=this;if(r[i]===e){this.#b(n);return}this.scrolled&&this.#r&&(e=-e),r[i]=e,this.#b(n)}async#f(e,n){let r=this.size*(this.#i?-e:e);return this.#p(r,n)}async#g(e){let n=mh(this.#o).getBoundingClientRect?.();if(n){await this.#h(n,"anchor"),e&&this.#T();return}if(this.scrolled){await this.#p(this.#o*this.viewSize,"anchor");return}let{pages:r}=this;if(!r)return;let i=Math.round(this.#o*(r-1));await this.#f(i,"anchor")}#T(){let{defaultView:e}=this.#n.document;if(this.#o instanceof e.Range){let n=e.getSelection();n.removeAllRanges(),n.addRange(this.#o)}}#_(){return vh(this.#n.document,this.start,this.end,this.#u(),this.scrolled)}#b(e){let n=this.#_();e!=="anchor"&&(this.#o=n);let r=this.#a;this.scrolled?this.onRelocated?.(n,r,this.end/this.viewSize):this.pages>0&&this.onRelocated?.(n,r,(this.page+1)/this.pages)}async#w(e){let{index:n,src:r,anchor:i,onLoad:a,select:o}=await e;if(this.#a=n,r){let s=this.#d(),l=p=>{if(p.head){let d=p.createElement("style");p.head.append(d),this.#l.set(p,d)}a?.(p,n)},c=this.#c.bind(this);await s.load(r,l,c);let u=this.createOverlayer?.(s.document,n);u&&(s.overlayer=u),this.#n=s}this.#o=(typeof i=="function"?i(this.#n.document):i)??0,await this.#g(o)}#v(e){return e>-1&&e<this.pages}scrollPrev(){if(!this.#n)return null;if(this.scrolled)return this.start>0?this.#p(Math.max(0,this.start-this.size)):null;let e=this.page-1;return this.#v(e)?this.#f(e):null}scrollNext(){if(!this.#n)return null;if(this.scrolled)return this.viewSize-this.end>60?this.#p(Math.min(this.viewSize,this.end)):null;let e=this.page+1;return this.#v(e)?this.#f(e):null}#x(e){return e>=0&&e<=this.sections.length-1}async#y(e,n,r){if(this.#s)return;r&&(this.#s=!0);let i=e?.();if(i)await i;else{let{index:a,anchor:o,select:s}=await n;if(!this.#x(a))return this.#s=!1,null;if(a===this.#a)await this.#w({index:a,anchor:o,select:s});else{let l=this.#a,c=(...u)=>{this.sections[l]?.unload?.(),this.onLoad?.(...u)};await this.#w(Promise.resolve(this.sections[a].load()).then(u=>({index:a,src:u,anchor:o,onLoad:c,select:s})).catch(u=>({})))}}r&&(await hh(100),this.#s=!1)}async goTo(e){return this.#y(null,e)}#m(e){for(let n=this.#a+e;this.#x(n);n+=e)if(this.sections[n]?.linear!=="no")return n}prev(){let e=this.#m(-1);return this.#y(()=>this.scrollPrev(),{index:e,anchor:()=>1},!0)}next(){let e=this.#m(1);return this.#y(()=>this.scrollNext(),{index:e},!0)}prevSection(){return this.goTo({index:this.#m(-1)})}nextSection(){return this.goTo({index:this.#m(1)})}firstSection(){let e=this.sections.findIndex(n=>n.linear!=="no");return this.goTo({index:e})}lastSection(){let e=this.sections.findLastIndex(n=>n.linear!=="no");return this.goTo({index:e})}getOverlayer(){if(this.#n)return{index:this.#a,overlayer:this.#n.overlayer,doc:this.#n.document}}setStyle(e){let n=this.#l.get(this.#n?.document);n&&(n.textContent=e)}async#S(e,n){this.#o=e,await this.#g(n)}};var js=t=>t?.split(/[,;\s]/)?.filter(e=>e)?.map(e=>e.split("=").map(n=>n.trim())),_h=(t,e)=>{if(t.documentElement.nodeName==="svg"){let[,,i,a]=t.documentElement.getAttribute("viewBox")?.split(/\s/)??[];return{width:i,height:a}}let n=js(t.querySelector('meta[name="viewport"]')?.getAttribute("content"));if(n)return Object.fromEntries(n);if(typeof e=="string")return js(e);if(e)return e;let r=t.querySelector("img");return r?{width:r.naturalWidth,height:r.naturalHeight}:{width:1e3,height:2e3}},ua=class{#e=document.createElement("div");defaultViewport;spread;#t=!1;#n;#r;#i;#a;constructor(){Object.assign(this.#e.style,{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}),new ResizeObserver(()=>this.render()).observe(this.#e)}get element(){return this.#e}get side(){return this.#a}async#o(e){let n=document.createElement("div"),r=document.createElement("iframe");return n.append(r),Object.assign(r.style,{border:"0",display:"none",overflow:"hidden"}),r.setAttribute("scrolling","no"),r.classList.add("filter"),this.#e.append(n),e?new Promise(i=>{let a=()=>{r.removeEventListener("load",a),this.onLoad?.(r);let o=r.contentDocument,{width:s,height:l}=_h(o,this.defaultViewport);i({element:n,iframe:r,width:parseFloat(s),height:parseFloat(l)})};r.addEventListener("load",a),r.src=e}):{blank:!0,element:n,iframe:r}}render(e=this.#a){if(!e)return;let n=this.#n??{},r=this.#i??this.#r,i=e==="left"?n:r,{width:a,height:o}=this.#e.getBoundingClientRect(),s=this.spread!=="both"&&this.spread!=="portrait"&&o>a;this.#t=s;let l=n.width??r.width,c=n.height??r.height,u=s?Math.min(a/(i.width??l),o/(i.height??c)):Math.min(a/((n.width??l)+(r.width??l)),o/Math.max(n.height??c,r.height??c)),p=d=>{let{element:h,iframe:b,width:g,height:m}=d;Object.assign(b.style,{width:`${g}px`,height:`${m}px`,transform:`scale(${u})`,transformOrigin:"top left",display:"block"}),Object.assign(h.style,{width:`${(g??l)*u}px`,height:`${(m??c)*u}px`,overflow:"hidden",display:"block"}),s&&d!==i&&(h.style.display="none")};this.#i?p(this.#i):(p(n),p(r))}async showSpread({left:e,right:n,center:r,side:i}){this.#e.replaceChildren(),this.#n=null,this.#r=null,this.#i=null,r?(this.#i=await this.#o(r),this.#a="center",this.render()):(this.#n=await this.#o(e),this.#r=await this.#o(n),this.#a=i,this.render())}goLeft(){if(!this.#i){if(this.#n?.blank)return!0;if(this.#t&&this.#n?.element?.style?.display==="none")return this.#r.element.style.display="none",this.#n.element.style.display="block",this.#a="left",!0}}goRight(){if(!this.#i){if(this.#r?.blank)return!0;if(this.#t&&this.#r?.element?.style?.display==="none")return this.#n.element.style.display="none",this.#r.element.style.display="block",this.#a="right",!0}}},qr=class{#e;#t=-1;#n=new ua;constructor({book:e,onLoad:n,onRelocated:r}){this.book=e,this.onLoad=n,this.onRelocated=r;let{rendition:i}=e;this.#n.spread=i?.spread,this.#n.defaultViewport=i?.viewport;let a=e.dir==="rtl",o=!a;this.rtl=a,i?.spread==="none"?this.#e=e.sections.map(s=>({center:s})):this.#e=e.sections.reduce((s,l)=>{let c=s[s.length-1],{linear:u,pageSpread:p}=l;if(u==="no")return s;let d=()=>{let h={};return s.push(h),h};if(p==="center")d().center=l;else if(p==="left"){let h=c.center||c.left||o?d():c;h.left=l}else if(p==="right"){let h=c.center||c.right||a?d():c;h.right=l}else o?c.center||c.right?d().left=l:c.left?c.right=l:c.left=l:c.center||c.left?d().right=l:c.right?c.left=l:c.right=l;return s},[{}])}get element(){return this.#n.element}get index(){let e=this.#e[this.#t],n=e?.center??(this.#n.side==="left"?e.left??e.right:e.right??e.left);return this.book.sections.indexOf(n)}getSpreadOf(e){let n=this.#e;for(let r=0;r<n.length;r++){let{left:i,right:a,center:o}=n[r];if(i===e)return{index:r,side:"left"};if(a===e)return{index:r,side:"right"};if(o===e)return{index:r,side:"center"}}}async goToSpread(e,n){if(e<0||e>this.#e.length-1)return;if(e===this.#t){this.#n.render(n);return}this.#t=e;let r=this.#e[e];if(r.center){let i=await r.center?.load?.();await this.#n.showSpread({center:i})}else{let i=await r.left?.load?.(),a=await r.right?.load?.();await this.#n.showSpread({left:i,right:a,side:n})}this.onRelocated?.(null,this.index,0,1)}async select(e){await this.goTo(e)}async goTo(e){let{book:n}=this,r=await e,i=n.sections[r.index];if(!i)return;let{index:a,side:o}=this.getSpreadOf(i);await this.goToSpread(a,o)}async next(){if(this.rtl?this.#n.goLeft():this.#n.goRight())this.onRelocated?.(null,this.index,0,1);else return this.goToSpread(this.#t+1,this.rtl?"right":"left")}async prev(){if(this.rtl?this.#n.goRight():this.#n.goLeft())this.onRelocated?.(null,this.index,0,1);else return this.goToSpread(this.#t-1,this.rtl?"left":"right")}};var qs=t=>t.replace(/\s+/g," "),Sh=(t,{startIndex:e,startOffset:n,endIndex:r,endOffset:i})=>{let a=t[e],o=t[r],s=a===o?a.slice(n,i):a.slice(n)+t.slice(a+1,o).join("")+o.slice(0,i),l=qs(a.slice(0,n)).trimStart(),c=qs(o.slice(i)).trimEnd(),u=l.length<50?"":"\u2026",p=c.length<50?"":"\u2026",d=`${u}${l.slice(-50)}`,h=`${c.slice(0,50)}${p}`;return{pre:d,match:s,post:h}},Ah=function*(t,e,n={}){let{locales:r="en",granularity:i="word",sensitivity:a="base"}=n,o,s;try{o=new Intl.Segmenter(r,{usage:"search",granularity:i}),s=new Intl.Collator(r,{sensitivity:a})}catch{o=new Intl.Segmenter("en",{usage:"search",granularity:i}),s=new Intl.Collator("en",{sensitivity:a})}let l=Array.from(o.segment(e)).length,c=[],u=0,p=o.segment(t[u])[Symbol.iterator]();e:for(;u<t.length;){for(;c.length<l;){let{done:h,value:b}=p.next();if(h)if(u++,u<t.length){p=o.segment(t[u])[Symbol.iterator]();continue}else break e;let{index:g,segment:m}=b;if(/[^\p{Format}]/u.test(m)){if(/\s/u.test(m)){/\s/u.test(c[c.length-1]?.segment)||c.push({strIndex:u,index:g,segment:" "});continue}b.strIndex=u,c.push(b)}}let d=c.map(h=>h.segment).join("");if(s.compare(e,d)===0){let h=u,b=c[c.length-1],g=b.index+b.segment.length,m=c[0].strIndex,f=c[0].index,y={startIndex:m,startOffset:f,endIndex:h,endOffset:g};yield{range:y,excerpt:Sh(t,y)}}c.shift()}},Ks=(t,e)=>{let{defalutLocale:n,matchCase:r,matchDiacritics:i,matchWholeWords:a}=e;return function*(o,s){let l=t(o,function*(c,u){for(let p of Ah(c,s,{locales:o.body.lang||o.documentElement.lang||n||"en",granularity:a?"word":"grapheme",sensitivity:i&&r?"variant":i&&!r?"accent":!i&&r?"case":"base"})){let{startIndex:d,startOffset:h,endIndex:b,endOffset:g}=p.range;p.range=u(d,h,b,g),yield p}});for(let c of l)yield c}};var kh=function*(t,e){let n=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT|NodeFilter.SHOW_CDATA_SECTION,{FILTER_ACCEPT:r,FILTER_REJECT:i,FILTER_SKIP:a}=NodeFilter,o=p=>{let d=p.localName?.toLowerCase();return d==="script"||d==="style"?i:p.nodeType===1?a:r},s=t.createTreeWalker(t.body,n,{acceptNode:o}),l=[];for(let p=s.nextNode();p;p=s.nextNode())l.push(p);let c=l.map(p=>p.nodeValue),u=(p,d,h,b)=>{let g=t.createRange();return g.setStart(l[p],d),g.setEnd(l[h],b),g};for(let p of e(c,u))yield p};var Gs=Object.fromEntries(Array.from(Object.entries({isRef:["annoref","biblioref","glossref","noteref"],isLink:["backlink"],isNote:["annotation","note","footnote","endnote","rearnote"]}),([t,e])=>[t,n=>n.getAttributeNS("http://www.idpf.org/2007/ops","type")?.split(/s/)?.some(r=>e.includes(r))])),Kr=class{#e;#t;#n;#r;language="en";textDirection="";isCJK=!1;isFixedLayout=!1;annotations=new Hr({resolve:e=>this.resolveCFI(e),compare:er,onAdd:(e,n,r)=>{let i=this.#s(n);i&&this.#o(i.doc,i.overlayer,e);let a=this.#t.getProgress(n)?.label??"";this?.emit({type:"add-annotation",annotation:e,label:a,index:n,position:r})},onDelete:(e,n,r)=>{this.#s(n)?.overlayer?.remove(e),this?.emit({type:"delete-annotation",index:n,position:r})},onUpdate:(e,n)=>{let r=this.#s(n);r&&(r.overlayer.remove(e.value),this.#o(r.doc,r.overlayer,e))}});constructor(e,n){if(this.book=e,this.emit=n,e.metadata?.language)try{let r=e.metadata.language;e.metadata.language=Intl.getCanonicalLocales(r)[0];let i=typeof r=="string"?r:r[0],a=new Intl.Locale(i);this.isCJK=["zh","ja","kr"].includes(a.language),a.textInfo&&a.textInfo.direction&&(this.textDirection=a.textInfo.direction)}catch{}if(e.splitTOCHref&&e.getTOCFragment){let r=e.sections.map(o=>o.id);this.#e=new Ur(e.sections,150,1600);let i=e.splitTOCHref.bind(e),a=e.getTOCFragment.bind(e);this.#t=new nr({toc:e.toc??[],ids:r,splitHref:i,getFragment:a}),this.#n=new nr({toc:e.pageList??[],ids:r,splitHref:i,getFragment:a})}}async display(){let e={book:this.book,onLoad:this.#a.bind(this),onRelocated:this.#i.bind(this),createOverlayer:this.#l.bind(this)};return this.isFixedLayout=this.book.rendition?.layout==="pre-paginated",this.isFixedLayout?this.renderer=new qr(e):this.renderer=new jr(e),this.renderer.element}async init({lastLocation:e,annotations:n}){if(e){let r=this.resolveNavigation(e);r?await this.renderer.goTo(r):await this.renderer.next()}else await this.renderer.next();if(n){n.sort((r,i)=>er(r.value,i.value));for(let r of n)await this.annotations.add(r,!0)}}#i(e,n,r){if(!this.#e)return;let i=this.#e.getProgress(n,r),a=this.#t.getProgress(n,e),o=this.#n.getProgress(n,e),s=this.getCFI(n,e);this.emit?.({type:"relocated",...i,tocItem:a,pageItem:o,cfi:s})}#a(e,n){let{book:r}=this;e.documentElement.lang||=this.language,e.documentElement.dir||=this.isCJK?"":this.textDirection,this.book&&this.book._hash&&e.documentElement.setAttribute("data-immersive-translate-hash",this.book._hash),this.renderer.setStyle(this.#r);let i=r.sections[n];for(let a of e.querySelectorAll("a[href]"))a.addEventListener("click",o=>{o.preventDefault();let s=a.getAttribute("href"),l=i?.resolveHref?.(s)??s;if(r?.isExternal?.(l))this.emit?.({type:"external-link",uri:l});else if(Gs.isRef(a)){let{index:c,anchor:u}=r.resolveHref(l);Promise.resolve(r.sections[c].createDocument()).then(p=>[u(p),p.contentType]).then(([p,d])=>[p?.innerHTML,d,Gs.isNote(p)]).then(([p,d,h])=>p?this.emit?.({type:"reference",href:h?null:l,content:p,contentType:d,element:a}):null).catch(p=>{});return}else this.goTo(l)});this.emit?.({type:"loaded",doc:e,index:n})}#o(e,n,r){let{value:i}=r,a=this.annotations.getAnchor(i),o=e?a(e):a,[s,l]=this.emit({type:"draw-annotation",annotation:r});n.add(i,o,s,l)}#s(e){let n=this.renderer.getOverlayer();if(n.index===e)return n}#l(e,n){let r=new zr;for(let i of this.annotations.getByIndex(n))this.#o(e,r,i);return e.addEventListener("click",i=>{let[a,o]=r.hitTest(i);a&&this.emit?.({type:"show-annotation",value:a,range:o})},!1),r}async showAnnotation(e){let{value:n}=e,{index:r,anchor:i}=await this.goTo(n),{doc:a}=this.#s(r),o=i(a);this.emit?.({type:"show-annotation",value:n,range:o})}getCFI(e,n){if(!n)return"";let r=this.book.sections[e].cfi??la.fromIndex(e);return Ps(r,Fs(n))}resolveCFI(e){if(this.book.resolveCFI)return this.book.resolveCFI(e);{let n=Zt(e);return{index:la.toIndex((n.parent??n).shift()),anchor:a=>Br(a,n)}}}resolveNavigation(e){try{return typeof e=="number"?{index:e}:tr.test(e)?this.resolveCFI(e):this.book.resolveHref(e)}catch{}}async goTo(e){let n=this.resolveNavigation(e);try{return await this.renderer.goTo(n),n}catch{}}async goToFraction(e){let[n,r]=this.#e.getSection(e);return this.renderer.goTo({index:n,anchor:r})}async select(e){try{let n=await this.resolveNavigation(e);await this.renderer.goTo({...n,select:!0})}catch{}}goLeft(){return this.book.dir==="rtl"?this.renderer.next():this.renderer.prev()}goRight(){return this.book.dir==="rtl"?this.renderer.prev():this.renderer.next()}setAppearance({layout:e,css:n}){this.isFixedLayout||(Object.assign(this.renderer.layout,e),this.#r=n,this.renderer.setStyle(n),this.renderer.render())}async*#d(e,n,r){let i=await this.book.sections[r].createDocument();for(let{range:a,excerpt:o}of e(i,n))yield{cfi:this.getCFI(r,a),excerpt:o}}async*#c(e,n){let{sections:r}=this.book;for(let[i,{createDocument:a}]of r.entries()){if(!a)continue;let o=await a(),s=Array.from(e(o,n),({range:c,excerpt:u})=>({cfi:this.getCFI(i,c),excerpt:u}));yield{progress:(i+1)/r.length},s.length&&(yield{index:i,subitems:s})}}async*search(e){let{query:n,index:r}=e,i=Ks(kh,{defaultLocale:this.language,...e}),a=r!=null?this.#d(i,n,r):this.#c(i,n);for await(let o of a)yield"subitems"in o?{label:this.#t.getProgress(o.index)?.label??"",subitems:o.subitems}:o}};var Eh=(t,e,n)=>{let r=document.createElement("ul");r.setAttribute("role","group"),r.setAttribute("aria-label",t);let i=new Map,a=o=>{n(o);let s=i.get(o);for(let l of r.children)l.setAttribute("aria-checked",l===s?"true":"false")};for(let[o,s]of e){let l=document.createElement("li");l.setAttribute("role","menuitemradio"),l.innerText=o,l.onclick=()=>a(s),i.set(s,l),r.append(l)}return{element:r,select:a}},Vs=t=>{let e={},n=document.createElement("ul");n.setAttribute("role","menu");let r=()=>n.classList.remove("show"),i=a=>(...o)=>(r(),a(...o));for(let{name:a,label:o,type:s,items:l,onclick:c}of t){let u=s==="radio"?Eh(o,l,i(c)):null;a&&(e[a]=u),n.append(u.element)}return window.addEventListener("blur",()=>r()),window.addEventListener("click",a=>{n.parentNode.contains(a.target)||r()}),{element:n,groups:e}};function rr(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():ie}var Xs=rr();function an(){return Xs.PROD==="1"}function xn(){return Xs.PROD_API==="1"}var o1=rr().PROD==="1",s1=rr().PROD!=="1";var Ys=({entries:t,loadBlob:e,getSize:n},r)=>{let i=new Map,a=new Map,o=async p=>{if(i.has(p))return i.get(p);let d=URL.createObjectURL(await e(p)),h=URL.createObjectURL(new Blob([`<img src="${d}">`],{type:"text/html"}));return a.set(p,[d,h]),i.set(p,h),h},s=p=>{a.get(p)?.forEach?.(d=>URL.revokeObjectURL(d)),a.delete(p),i.delete(p)},l=[".jpg",".jpeg",".png",".gif",".bmp",".webp",".svg"],c=t.map(p=>p.filename).filter(p=>l.some(d=>p.endsWith(d))).sort(),u={};return u.getCover=()=>e(c[0]),u.metadata={title:r.name},u.sections=c.map(p=>({id:p,load:()=>o(p),unload:()=>s(p),size:n(p)})),u.toc=c.map(p=>({label:p,href:p})),u.rendition={layout:"pre-paginated"},u.resolveHref=p=>({index:u.sections.findIndex(d=>d.id===p)}),u.splitTOCHref=p=>[p,null],u.getTOCFragment=p=>p.documentElement,u};var Zs=t=>t?.trim()?.replace(/\s{2,}/g," "),_t=t=>Zs(t?.textContent),Gr={XLINK:"http://www.w3.org/1999/xlink",EPUB:"http://www.idpf.org/2007/ops"},Vr={XML:"application/xml",XHTML:"application/xhtml+xml"},Nt={strong:["strong","self"],emphasis:["em","self"],style:["span","self"],a:"anchor",strikethrough:["s","self"],sub:["sub","self"],sup:["sup","self"],code:["code","self"],image:"image"},Ch={tr:["tr",["align"]],th:["th",["colspan","rowspan","align","valign"]],td:["td",["colspan","rowspan","align","valign"]]},Qs={epigraph:["blockquote"],subtitle:["h2",Nt],"text-author":["p",Nt],date:["p",Nt],stanza:"stanza"},Xr={title:["header",{p:["h1",Nt],"empty-line":["br"]}],epigraph:["blockquote","self"],image:"image",annotation:["aside"],section:["section","self"],p:["p",Nt],poem:["blockquote",Qs],subtitle:["h2",Nt],cite:["blockquote","self"],"empty-line":["br"],table:["table",Ch],"text-author":["p",Nt]};Qs.epigraph.push(Xr);var Lh={image:"image",title:["section",{p:["h1",Nt],"empty-line":["br"]}],epigraph:["section",Xr],section:["section",Xr]},Js=t=>{let e=t.getAttributeNS(Gr.XLINK,"href"),[,n]=e.split("#"),r=t.getRootNode().getElementById(n);return r?`data:${r.getAttribute("content-type")};base64,${r.textContent}`:e},pa=class{constructor(e){this.fb2=e,this.doc=document.implementation.createDocument(Gr.XHTML,"html")}image(e){let n=this.doc.createElement("img");return n.alt=e.getAttribute("alt"),n.title=e.getAttribute("title"),n.setAttribute("src",Js(e)),n}anchor(e){let n=this.convert(e,{a:["a",Nt]});return n.setAttribute("href",e.getAttributeNS(Gr.XLINK,"href")),e.getAttribute("type")==="note"&&n.setAttributeNS(Gr.EPUB,"epub:type","noteref"),n}stanza(e){let n=this.convert(e,{stanza:["p",{title:["header",{p:["strong",Nt],"empty-line":["br"]}],subtitle:["p",Nt]}]});for(let r of e.children)r.nodeName==="v"&&(n.append(this.doc.createTextNode(r.textContent)),n.append(this.doc.createElement("br")));return n}convert(e,n){if(e.nodeType===3)return this.doc.createTextNode(e.textContent);if(e.nodeType===4)return this.doc.createCDATASection(e.textContent);if(e.nodeType===8)return this.doc.createComment(e.textContent);let r=n?.[e.nodeName];if(!r)return null;if(typeof r=="string")return this[r](e);let[i,a]=r,o=this.doc.createElement(i);if(e.id&&(o.id=e.id),o.classList.add(e.nodeName),Array.isArray(a))for(let c of a)o.setAttribute(c,e.getAttribute(c));let s=a==="self"?n:Array.isArray(a)?null:a,l=e.firstChild;for(;l;){let c=this.convert(l,s);c&&o.append(c),l=l.nextSibling}return o}},Dh=async t=>{let e=await t.arrayBuffer(),n=new TextDecoder("utf-8").decode(e),r=new DOMParser,i=r.parseFromString(n,Vr.XML),a=i.xmlEncoding||n.match(/^<\?xml\s+version\s*=\s*["']1.\d+"\s+encoding\s*=\s*["']([A-Za-z0-9._-]*)["']/)?.[1];if(a&&a.toLowerCase()!=="utf-8"){let o=new TextDecoder(a).decode(e);return r.parseFromString(o,Vr.XML)}return i},Rh=URL.createObjectURL(new Blob([`
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
`],{type:"text/css"})),Nh=t=>`<?xml version="1.0" encoding="utf-8"?>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head><link href="${Rh}" rel="stylesheet" type="text/css"/></head>
    <body>${t}</body>
</html>`,da="data-foliate-id",ha=async t=>{let e={},n=await Dh(t),r=new pa(n),i=d=>n.querySelector(d),a=d=>[...n.querySelectorAll(d)],o=d=>{let h=_t(d.querySelector("nickname"));if(h)return h;let b=_t(d.querySelector("first-name")),g=_t(d.querySelector("middle-name")),m=_t(d.querySelector("last-name")),f=[b,g,m].filter(w=>w).join(" "),y=m?[m,[b,g].filter(w=>w).join(" ")].join(", "):null;return{name:f,sortAs:y}},s=d=>d?.getAttribute("value")??_t(d),l=i("title-info annotation");e.metadata={title:_t(i("title-info book-title")),identifier:_t(i("document-info id")),language:_t(i("title-info lang")),author:a("title-info author").map(o),translator:a("title-info translator").map(o),producer:a("document-info author").map(o).concat(a("document-info program-used").map(_t)),publisher:_t(i("publish-info publisher")),published:s(i("title-info date")),modified:s(i("document-info date")),description:l?r.convert(l,{annotation:["div",Xr]}).innerHTML:null,subject:a("title-info genre").map(_t)},e.getCover=()=>fetch(Js(i("coverpage image"))).then(d=>d.blob());let c=Array.from(n.querySelectorAll("body"),d=>{let h=r.convert(d,{body:["body",Lh]});return[Array.from(h.children,b=>{let g=[b,...b.querySelectorAll("[id]")].map(m=>m.id);return{el:b,ids:g}}),h]}),u=c[0][0].map(({el:d,ids:h})=>{let b=Array.from(d.querySelectorAll(":scope > section > .title"),(g,m)=>(g.setAttribute(da,m),{title:_t(g),index:m}));return{ids:h,titles:b,el:d}}).concat(c.slice(1).map(([d,h])=>{let b=d.map(g=>g.ids).flat();return h.classList.add("notesBodyType"),{ids:b,el:h,linear:"no"}})).map(({ids:d,titles:h,el:b,linear:g})=>{let m=Nh(b.outerHTML),f=new Blob([m],{type:Vr.XHTML}),y=URL.createObjectURL(f),w=Zs(b.querySelector(".title, .subtitle, p")?.textContent??(b.classList.contains("title")?b.textContent:""));return{ids:d,title:w,titles:h,load:()=>y,createDocument:()=>new DOMParser().parseFromString(m,Vr.XHTML),size:f.size-Array.from(b.querySelectorAll("[src]"),E=>E.getAttribute("src")?.length??0).reduce((E,_)=>E+_,0),linear:g}}),p=new Map;return e.sections=u.map((d,h)=>{let{ids:b,load:g,createDocument:m,size:f,linear:y}=d;for(let w of b)w&&p.set(w,h);return{id:h,load:g,createDocument:m,size:f,linear:y}}),e.toc=u.map(({title:d,titles:h},b)=>{let g=b.toString();return{label:d,href:g,subitems:h?.length?h.map(({title:m,index:f})=>({label:m,href:`${g}#${f}`})):null}}).filter(d=>d),e.resolveHref=d=>{let[h,b]=d.split("#");return h?{index:Number(h),anchor:g=>g.querySelector(`[${da}="${b}"]`)}:{index:p.get(b),anchor:g=>g.getElementById(b)}},e.splitTOCHref=d=>d?.split("#")?.map(h=>Number(h))??[],e.getTOCFragment=(d,h)=>d.querySelector(`[${da}="${h}"]`),e};var on=t=>{if(!t)return"";let e=document.createElement("textarea");return e.innerHTML=t,e.value},Tn={XML:"application/xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml"},Oh={name:[0,32,"string"],type:[60,4,"string"],creator:[64,4,"string"],numRecords:[76,2,"uint"]},Ph={compression:[0,2,"uint"],numTextRecords:[8,2,"uint"],recordSize:[10,2,"uint"],encryption:[12,2,"uint"]},Mh={magic:[16,4,"string"],length:[20,4,"uint"],type:[24,4,"uint"],encoding:[28,4,"uint"],uid:[32,4,"uint"],version:[36,4,"uint"],titleOffset:[84,4,"uint"],titleLength:[88,4,"uint"],localeRegion:[94,1,"uint"],localeLanguage:[95,1,"uint"],resourceStart:[108,4,"uint"],huffcdic:[112,4,"uint"],numHuffcdic:[116,4,"uint"],exthFlag:[128,4,"uint"],trailingFlags:[240,4,"uint"],indx:[244,4,"uint"]},Ih={resourceStart:[108,4,"uint"],fdst:[192,4,"uint"],numFdst:[196,4,"uint"],frag:[248,4,"uint"],skel:[252,4,"uint"],guide:[260,4,"uint"]},Fh={magic:[0,4,"string"],length:[4,4,"uint"],count:[8,4,"uint"]},el={magic:[0,4,"string"],length:[4,4,"uint"],type:[8,4,"uint"],idxt:[20,4,"uint"],numRecords:[24,4,"uint"],encoding:[28,4,"uint"],language:[32,4,"uint"],total:[36,4,"uint"],ordt:[40,4,"uint"],ligt:[44,4,"uint"],numLigt:[48,4,"uint"],numCncx:[52,4,"uint"]},Bh={magic:[0,4,"string"],length:[4,4,"uint"],numControlBytes:[8,4,"uint"]},Uh={magic:[0,4,"string"],offset1:[8,4,"uint"],offset2:[12,4,"uint"]},zh={magic:[0,4,"string"],length:[4,4,"uint"],numEntries:[8,4,"uint"],codeLength:[12,4,"uint"]},Hh={magic:[0,4,"string"],numEntries:[8,4,"uint"]},Wh={flags:[8,4,"uint"],dataStart:[12,4,"uint"],keyLength:[16,4,"uint"],keyStart:[20,4,"uint"]},$h={1252:"windows-1252",65001:"utf-8"},tl={100:["creator","string",!0],101:["publisher"],103:["description"],104:["isbn"],105:["subject","string",!0],106:["date"],108:["contributor","string",!0],109:["rights"],110:["subjectCode","string",!0],112:["source","string",!0],113:["asin"],121:["boundary","uint"],122:["fixedLayout"],125:["numResources","uint"],126:["originalResolution"],127:["zeroGutter"],128:["zeroMargin"],129:["coverURI"],132:["regionMagnification"],201:["coverOffset","uint"],202:["thumbnailOffset","uint"],503:["title"],524:["language","string",!0],527:["pageProgressionDirection"]},jh={1:["ar","ar-SA","ar-IQ","ar-EG","ar-LY","ar-DZ","ar-MA","ar-TN","ar-OM","ar-YE","ar-SY","ar-JO","ar-LB","ar-KW","ar-AE","ar-BH","ar-QA"],2:["bg"],3:["ca"],4:["zh","zh-TW","zh-CN","zh-HK","zh-SG"],5:["cs"],6:["da"],7:["de","de-DE","de-CH","de-AT","de-LU","de-LI"],8:["el"],9:["en","en-US","en-GB","en-AU","en-CA","en-NZ","en-IE","en-ZA","en-JM",null,"en-BZ","en-TT","en-ZW","en-PH"],10:["es","es-ES","es-MX",null,"es-GT","es-CR","es-PA","es-DO","es-VE","es-CO","es-PE","es-AR","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"],11:["fi"],12:["fr","fr-FR","fr-BE","fr-CA","fr-CH","fr-LU","fr-MC"],13:["he"],14:["hu"],15:["is"],16:["it","it-IT","it-CH"],17:["ja"],18:["ko"],19:["nl","nl-NL","nl-BE"],20:["no","nb","nn"],21:["pl"],22:["pt","pt-BR","pt-PT"],23:["rm"],24:["ro"],25:["ru"],26:["hr",null,"sr"],27:["sk"],28:["sq"],29:["sv","sv-SE","sv-FI"],30:["th"],31:["tr"],32:["ur"],33:["id"],34:["uk"],35:["be"],36:["sl"],37:["et"],38:["lv"],39:["lt"],41:["fa"],42:["vi"],43:["hy"],44:["az"],45:["eu"],46:["hsb"],47:["mk"],48:["st"],49:["ts"],50:["tn"],52:["xh"],53:["zu"],54:["af"],55:["ka"],56:["fo"],57:["hi"],58:["mt"],59:["se"],62:["ms"],63:["kk"],65:["sw"],67:["uz",null,"uz-UZ"],68:["tt"],69:["bn"],70:["pa"],71:["gu"],72:["or"],73:["ta"],74:["te"],75:["kn"],76:["ml"],77:["as"],78:["mr"],79:["sa"],82:["cy","cy-GB"],83:["gl","gl-ES"],87:["kok"],97:["ne"],98:["fy"]},Qr=(t,e)=>{let n=new t.constructor(t.length+e.length);return n.set(t),n.set(e,t.length),n},ol=(t,e,n)=>{let r=new t.constructor(t.length+e.length+n.length);return r.set(t),r.set(e,t.length),r.set(n,t.length+e.length),r},qh=new TextDecoder,ir=t=>qh.decode(t),it=t=>{if(!t)return;let e=t.byteLength,n=e===4?"getUint32":e===2?"getUint16":"getUint8";return new DataView(t)[n](0)},St=(t,e)=>Object.fromEntries(Array.from(Object.entries(t)).map(([n,[r,i,a]])=>[n,(a==="string"?ir:it)(e.slice(r,r+i))])),ba=t=>new TextDecoder($h[t]),Yr=(t,e=0)=>{let n=0,r=0;for(let i of t.subarray(e,e+4))if(n=n<<7|(i&127)>>>0,r++,i&128)break;return{value:n,length:r}},Kh=t=>{let e=0;for(let n of t.subarray(-4))n&128&&(e=0),e=e<<7|n&127;return e},sl=t=>{let e=0;for(;t>0;t=t>>1)(t&1)===1&&e++;return e},Gh=t=>{let e=0;for(;!(t&1);)t=t>>1,e++;return e},Vh=t=>{let e=[];for(let n=0;n<t.length;n++){let r=t[n];if(r===0)e.push(0);else if(r<=8)for(let i of t.subarray(n+1,(n+=r)+1))e.push(i);else if(r<=127)e.push(r);else if(r<=191){let i=r<<8|t[n+++1],a=(i&16383)>>>3,o=(i&7)+3;for(let s=0;s<o;s++)e.push(e[e.length-a])}else e.push(32,r^128)}return Uint8Array.from(e)},Xh=(t,e)=>{let n=e>>3,r=e+32,i=r>>3,a=0n;for(let o=n;o<=i;o++)a=a<<8n|BigInt(t[o]??0);return a>>8n-BigInt(r&7)&0xffffffffn},Yh=async(t,e)=>{let n=await e(t.huffcdic),{magic:r,offset1:i,offset2:a}=St(Uh,n);if(r!=="HUFF")throw new Error("Invalid HUFF record");let o=Array.from({length:256},(u,p)=>i+p*4).map(u=>it(n.slice(u,u+4))).map(u=>[u&128,u&31,u>>>8]),s=[null].concat(Array.from({length:32},(u,p)=>a+p*8).map(u=>[it(n.slice(u,u+4)),it(n.slice(u+4,u+8))])),l=[];for(let u=1;u<t.numHuffcdic;u++){let p=await e(t.huffcdic+u),d=St(zh,p);if(d.magic!=="CDIC")throw new Error("Invalid CDIC record");let h=Math.min(1<<d.codeLength,d.numEntries-l.length),b=p.slice(d.length);for(let g=0;g<h;g++){let m=it(b.slice(g*2,g*2+2)),f=it(b.slice(m,m+2)),y=f&32767,w=f&32768,E=new Uint8Array(b.slice(m+2,m+2+y));l.push([E,w])}}let c=u=>{let p=new Uint8Array,d=u.byteLength*8;for(let h=0;h<d;){let b=Number(Xh(u,h)),[g,m,f]=o[b>>>24];if(!g){for(;b>>>32-m<s[m][0];)m+=1;f=s[m][1]}if((h+=m)>d)break;let y=f-(b>>>32-m),[w,E]=l[y];E||(w=c(w),l[y]=[w,!0]),p=Qr(p,w)}return p};return c},Zr=async(t,e)=>{let n=await e(t),r=St(el,n);if(r.magic!=="INDX")throw new Error("Invalid INDX record");let i=ba(r.encoding),a=n.slice(r.length),o=St(Bh,a);if(o.magic!=="TAGX")throw new Error("Invalid TAGX section");let s=(o.length-12)/4,l=Array.from({length:s},(d,h)=>new Uint8Array(a.slice(12+h*4,12+h*4+4))),c={},u=0;for(let d=0;d<r.numCncx;d++){let h=await e(t+r.numRecords+d+1),b=new Uint8Array(h);for(let g=0;g<b.byteLength;){let m=g,{value:f,length:y}=Yr(b,g);g+=y;let w=h.slice(g,g+f);g+=f,c[u+m]=i.decode(w)}u+=65536}let p=[];for(let d=0;d<r.numRecords;d++){let h=await e(t+1+d),b=new Uint8Array(h),g=St(el,h);if(g.magic!=="INDX")throw new Error("Invalid INDX record");for(let m=0;m<g.numRecords;m++){let f=g.idxt+4+2*m,y=it(h.slice(f,f+2)),w=it(h.slice(y,y+1)),E=ir(h.slice(y+1,y+1+w)),_=[],T=y+1+w,v=0,x=T+o.numControlBytes;for(let[A,C,R,D]of l){if(D&1){v++;continue}let I=T+v,N=it(h.slice(I,I+1))&R;if(N===R)if(sl(R)>1){let{value:B,length:F}=Yr(b,x);_.push([A,null,B,C]),x+=F}else _.push([A,1,null,C]);else _.push([A,N>>Gh(R),null,C])}let S={};for(let[A,C,R,D]of _){let I=[];if(C!=null)for(let N=0;N<C*D;N++){let{value:B,length:F}=Yr(b,x);I.push(B),x+=F}else{let N=0;for(;N<R;){let{value:B,length:F}=Yr(b,x);I.push(B),x+=F,N+=F}}S[A]=I}p.push({name:E,tagMap:S})}}return{table:p,cncx:c}},Zh=async(t,e)=>{let{table:n,cncx:r}=await Zr(t,e),i=n.map(({tagMap:o},s)=>({index:s,offset:o[1]?.[0],size:o[2]?.[0],label:r[o[3]]??"",headingLevel:o[4]?.[0],pos:o[6],parent:o[21]?.[0],firstChild:o[22]?.[0],lastChild:o[23]?.[0]})),a=o=>(o.firstChild==null||(o.children=i.filter(s=>s.parent===o.index).map(a)),o);return i.filter(o=>o.headingLevel===0).map(a)},Qh=(t,e)=>{let{magic:n,count:r}=St(Fh,t);if(n!=="EXTH")throw new Error("Invalid EXTH header");let i=ba(e),a={},o=12;for(let s=0;s<r;s++){let l=it(t.slice(o,o+4)),c=it(t.slice(o+4,o+8));if(l in tl){let[u,p,d]=tl[l],h=t.slice(o+8,o+c),b=p==="uint"?it(h):i.decode(h);d?(a[u]??=[],a[u].push(b)):a[u]=b}o+=c}return a},Jh=async(t,e)=>{let{flags:n,dataStart:r,keyLength:i,keyStart:a}=St(Wh,t),o=new Uint8Array(t.slice(r));if(n&2){let l=i===16?1024:1040,c=new Uint8Array(t.slice(a,a+i)),u=Math.min(l,o.length);for(var s=0;s<u;s++)o[s]=o[s]^c[s%c.length]}if(n&1)try{return await e(o)}catch{}return o},ll=async t=>ir(await t.slice(60,68).arrayBuffer())==="BOOKMOBI",fa=class{#e;#t;pdb;async open(e){this.#e=e;let n=St(Oh,await e.slice(0,78).arrayBuffer());this.pdb=n;let r=await e.slice(78,78+n.numRecords*8).arrayBuffer();this.#t=Array.from({length:n.numRecords},(i,a)=>it(r.slice(a*8,a*8+4))).map((i,a,o)=>[i,o[a+1]])}loadRecord(e){let n=this.#t[e];if(!n)throw new RangeError("Record index out of bounds");return this.#e.slice(...n).arrayBuffer()}async loadMagic(e){let n=this.#t[e][0];return ir(await this.#e.slice(n,n+4).arrayBuffer())}},Jr=class extends fa{#e=0;#t;#n;#r;#i;#a;constructor({unzlib:e}){super(),this.unzlib=e}async open(e){await super.open(e),this.headers=this.#o(await super.loadRecord(0)),this.#t=this.headers.mobi.resourceStart;let n=this.headers.mobi.version>=8;if(!n){let r=this.headers.exth?.boundary;if(r<4294967295)try{this.headers=this.#o(await super.loadRecord(r)),this.#e=r,n=!0}catch{}}return await this.#s(),n?new ga(this).init():new ma(this).init()}#o(e){let n=St(Ph,e),r=St(Mh,e);if(r.magic!=="MOBI")throw new Error("Missing MOBI header");let{titleOffset:i,titleLength:a,localeLanguage:o,localeRegion:s}=r;r.title=e.slice(i,i+a);let l=jh[o];r.language=l?.[s>>2]??l?.[0];let c=r.exthFlag&64?Qh(e.slice(r.length+16),r.encoding):null,u=r.version>=8?St(Ih,e):null;return{palmdoc:n,mobi:r,exth:c,kf8:u}}async#s(){let{palmdoc:e,mobi:n}=this.headers;this.#n=ba(n.encoding),this.#r=new TextEncoder;let{compression:r}=e;if(this.#i=r===1?s=>s:r===2?Vh:r===17480?await Yh(n,this.loadRecord.bind(this)):null,!this.#i)throw new Error("Unknown compression type");let{trailingFlags:i}=n,a=i&1,o=sl(i>>>1);this.#a=s=>{for(let l=0;l<o;l++){let c=Kh(s);s=s.subarray(0,-c)}if(a){let l=(s[s.length-1]&3)+1;s=s.subarray(0,-l)}return s}}decode(...e){return this.#n.decode(...e)}encode(...e){return this.#r.encode(...e)}loadRecord(e){return super.loadRecord(this.#e+e)}loadMagic(e){return super.loadMagic(this.#e+e)}loadText(e){return this.loadRecord(e+1).then(n=>new Uint8Array(n)).then(this.#a).then(this.#i)}async loadResource(e){let n=await super.loadRecord(this.#t+e),r=ir(n.slice(0,4));return r==="FONT"?Jh(n,this.unzlib):r==="VIDE"||r==="AUDI"?n.slice(12):n}getNCX(){let e=this.headers.mobi.indx;if(e<4294967295)return Zh(e,this.loadRecord.bind(this))}getMetadata(){let{mobi:e,exth:n}=this.headers;return{identifier:e.uid.toString(),title:on(n?.title||this.decode(e.title)),author:n?.creator?.map(on),publisher:on(n?.publisher),language:n?.language??e.language,published:n?.date,description:on(n?.description),subject:n?.subject?.map(on),rights:on(n?.rights)}}async getCover(){let{exth:e}=this.headers,n=e?.coverOffset<4294967295?e?.coverOffset:e?.thumbnailOffset<4294967295?e?.thumbnailOffset:null;if(n!=null){let r=await this.loadResource(n);return new Blob([r])}}},nl=/<\s*(?:mbp:)?pagebreak[^>]*>/gi,ef=/<[^<>]+filepos=['"]{0,1}(\d+)[^<>]*>/gi,ma=class{parser=new DOMParser;serializer=new XMLSerializer;#e=new Map;#t=new Map;#n=new Map;#r;#i=[];#a=Tn.HTML;constructor(e){this.mobi=e}async init(){let e=new Uint8Array;for(let i=0;i<this.mobi.headers.palmdoc.numTextRecords;i++)e=Qr(e,await this.mobi.loadText(i));let n=Array.from(new Uint8Array(e),i=>String.fromCharCode(i)).join("");this.#r=[0].concat(Array.from(n.matchAll(nl),i=>i.index)).map((i,a,o)=>n.slice(i,o[a+1])).map(i=>Uint8Array.from(i,a=>a.charCodeAt(0))).map(i=>({book:this,raw:i})).reduce((i,a)=>{let o=i[i.length-1];return a.start=o?.end??0,a.end=a.start+a.raw.byteLength,i.concat(a)},[]),this.sections=this.#r.map((i,a)=>({id:a,load:()=>this.loadSection(i),createDocument:()=>this.createDocument(i),size:i.end-i.start}));let r=[];try{let i=await this.mobi.getNCX(),a=({label:o,offset:s,children:l})=>{let c=s.toString().padStart(10,"0"),u=`filepos:${c}`;return r.push(c),o=on(o),{label:o,href:u,subitems:l?.map(a)}};if(this.toc=i?.map(a),this.landmarks=await this.getGuide(),!this.toc){let o=this.landmarks.find(({type:s})=>s?.includes("toc"))?.href;if(o){let{index:s}=this.resolveHref(o),l=await this.sections[s].createDocument();this.toc=Array.from(l.querySelectorAll("a[filepos]"),c=>({label:c.innerText?.trim(),href:`filepos:${c.getAttribute("filepos")}`}))}}}catch{}return this.#i=[...new Set(r.concat(Array.from(n.matchAll(ef),i=>i[1])))].map(i=>({filepos:i,number:Number(i)})).sort((i,a)=>i.number-a.number),this.metadata=this.mobi.getMetadata(),this.getCover=this.mobi.getCover.bind(this.mobi),this}async getGuide(){let e=await this.createDocument(this.#r[0]);return Array.from(e.getElementsByTagName("reference"),n=>({label:n.getAttribute("title"),type:n.getAttribute("type")?.split(/\s/),href:`filepos:${n.getAttribute("filepos")}`}))}async loadResource(e){if(this.#e.has(e))return this.#e.get(e);let n=await this.mobi.loadResource(e),r=URL.createObjectURL(new Blob([n]));return this.#e.set(e,r),r}async loadRecindex(e){return this.loadResource(Number(e)-1)}async replaceResources(e){for(let n of e.querySelectorAll("img[recindex]")){let r=n.getAttribute("recindex");try{n.src=await this.loadRecindex(r)}catch{}}for(let n of e.querySelectorAll("[mediarecindex]")){let r=n.getAttribute("mediarecindex"),i=n.getAttribute("recindex");try{n.src=await this.loadRecindex(r),i&&(n.poster=await this.loadRecindex(i))}catch{}}for(let n of e.querySelectorAll("[filepos]")){let r=n.getAttribute("filepos");n.href=`filepos:${r}`}}async loadText(e){if(this.#t.has(e))return this.#t.get(e);let{raw:n}=e,r=this.#i.filter(({number:o})=>o>=e.start&&o<e.end).map(o=>({...o,offset:o.number-e.start})),i=n;r.length&&(i=n.subarray(0,r[0].offset),r.forEach(({filepos:o,offset:s},l)=>{let c=r[l+1],u=this.mobi.encode(`<a id="filepos${o}"></a>`);i=ol(i,u,n.subarray(s,c?.offset))}));let a=this.mobi.decode(i).replaceAll(nl,"");return this.#t.set(e,a),a}async createDocument(e){let n=await this.loadText(e);return this.parser.parseFromString(n,this.#a)}async loadSection(e){if(this.#n.has(e))return this.#n.get(e);let n=await this.createDocument(e),r=n.createElement("style");n.head.append(r),r.append(n.createTextNode(`blockquote {
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 1em;
            margin-inline-end: 0;
        }`)),await this.replaceResources(n);let i=this.serializer.serializeToString(n),a=URL.createObjectURL(new Blob([i],{type:this.#a}));return this.#n.set(e,a),a}resolveHref(e){let n=e.match(/filepos:(.*)/)[1],r=Number(n);return{index:this.#r.findIndex(o=>o.end>r),anchor:o=>o.getElementById(`filepos${n}`)}}splitTOCHref(e){let n=e.match(/filepos:(.*)/)[1],r=Number(n);return[this.#r.findIndex(a=>a.end>r),`filepos${n}`]}getTOCFragment(e,n){return e.getElementById(n)}isExternal(e){return/^(?!blob|filepos)\w+:/i.test(e)}},cl=/kindle:(flow|embed):(\w+)(?:\?mime=(\w+\/[-+.\w]+))?/,tf=/kindle:pos:fid:(\w+):off:(\w+)/,nf=t=>{let[e,n,r]=t.match(cl).slice(1);return{resourceType:e,id:parseInt(n,32),type:r}},rl=t=>{let[e,n]=t.match(tf).slice(1);return{fid:parseInt(e,32),off:parseInt(n,32)}},il=(t=0,e=0)=>`kindle:pos:fid:${t.toString(32).toUpperCase().padStart(4,"0")}:off:${e.toString(32).toUpperCase().padStart(10,"0")}`,al=t=>{let e=t.match(/\s(id|name|aid)\s*=\s*['"]([^'"]*)['"]/i);if(!e)return;let[,n,r]=e;return`[${n}="${CSS.escape(r)}"]`},rf=async(t,e,n)=>{let r=[];t.replace(e,(...a)=>(r.push(a),null));let i=[];for(let a of r)i.push(await n(...a));return t.replace(e,()=>i.shift())},ga=class{parser=new DOMParser;#e=new Map;#t=new Map;#n=new Map;#r={};#i;#a;#o=new Uint8Array;#s=new Uint8Array;#l=-1;#d=-1;#c=!0;#u=Tn.XHTML;constructor(e){this.mobi=e}async init(){let e=this.mobi.loadRecord.bind(this.mobi),{kf8:n}=this.mobi.headers;try{let s=await e(n.fdst),l=St(Hh,s);if(l.magic!=="FDST")throw new Error("Missing FDST record");let c=Array.from({length:l.numEntries},(u,p)=>12+p*8).map(u=>[it(s.slice(u,u+4)),it(s.slice(u+4,u+8))]);this.#r.fdstTable=c,this.#a=c[c.length-1][1]}catch{}let r=(await Zr(n.skel,e)).table.map(({name:s,tagMap:l},c)=>({index:c,name:s,numFrag:l[1][0],offset:l[6][0],length:l[6][1]})),i=await Zr(n.frag,e),a=i.table.map(({name:s,tagMap:l})=>({insertOffset:parseInt(s),selector:i.cncx[l[2][0]],index:l[4][0],offset:l[6][0],length:l[6][1]}));this.#r.skelTable=r,this.#r.fragTable=a,this.#i=r.reduce((s,l)=>{let c=s[s.length-1],u=c?.fragEnd??0,p=u+l.numFrag,d=a.slice(u,p),h=l.length+d.map(g=>g.length).reduce((g,m)=>g+m),b=(c?.totalLength??0)+h;return s.concat({skel:l,frags:d,fragEnd:p,length:h,totalLength:b})},[]),this.#i.unshift({frags:[]}),this.sections=this.#i.map((s,l)=>s.frags.length?{id:l,load:()=>this.loadSection(s),createDocument:()=>this.createDocument(s),size:s.length}:{linear:"no"});try{let s=await this.mobi.getNCX(),l=({label:c,pos:u,children:p})=>{let[d,h]=u,b=il(d,h),g=this.#t.get(d);return g?g.push(h):this.#t.set(d,[h]),{label:on(c),href:b,subitems:p?.map(l)}};this.toc=s?.map(l),this.landmarks=await this.getGuide()}catch{}let{exth:o}=this.mobi.headers;return this.dir=o.pageProgressionDirection,this.rendition={layout:o.fixedLayout==="true"?"pre-paginated":"reflowable",viewport:Object.fromEntries(o.originalResolution?.split("x")?.slice(0,2)?.map((s,l)=>[l?"height":"width",s])??[])},this.metadata=this.mobi.getMetadata(),this.getCover=this.mobi.getCover.bind(this.mobi),this}async getResourcesByMagic(e){let n={},r=this.mobi.headers.kf8.resourceStart,i=this.mobi.pdb.numRecords;for(let a=r;a<i;a++)try{let o=await this.mobi.loadMagic(a),s=e.find(l=>l===o);s&&(n[s]=a)}catch{}return n}async getGuide(){let e=this.mobi.headers.kf8.guide;if(e<4294967295){let n=this.mobi.loadRecord.bind(this.mobi),{table:r,cncx:i}=await Zr(e,n);return r.map(({name:a,tagMap:o})=>({label:i[o[1][0]]??"",type:a?.split(/\s/),href:il(o[6]?.[0]??o[3]?.[0])}))}}async loadResourceBlob(e){let{resourceType:n,id:r,type:i}=nf(e),a=n==="flow"?await this.loadFlow(r):await this.mobi.loadResource(r-1),o=[Tn.XHTML,Tn.HTML,Tn.CSS,Tn.SVG].includes(i)?await this.replaceResources(this.mobi.decode(a)):a;return new Blob([o],{type:i})}async loadResource(e){if(this.#e.has(e))return this.#e.get(e);let n=await this.loadResourceBlob(e),r=URL.createObjectURL(n);return this.#e.set(e,r),r}replaceResources(e){let n=new RegExp(cl,"g");return rf(e,n,this.loadResource.bind(this))}async loadRaw(e,n){let r=n-this.#o.length,i=this.#a==null?1/0:this.#a-this.#s.length-e;if(r<0||r<i){for(;this.#o.length<n;){let o=++this.#l,s=await this.mobi.loadText(o);this.#o=Qr(this.#o,s)}return this.#o.slice(e,n)}for(;this.#a-this.#s.length>e;){let o=this.mobi.headers.palmdoc.numTextRecords-1-++this.#d,s=await this.mobi.loadText(o);this.#s=Qr(s,this.#s)}let a=this.#a-this.#s.length;return this.#s.slice(e-a,n-a)}loadFlow(e){if(e<4294967295)return this.loadRaw(...this.#r.fdstTable[e])}async loadText(e){let{skel:n,frags:r,length:i}=e,a=await this.loadRaw(n.offset,n.offset+i),o=a.slice(0,n.length);for(let s of r){let l=s.insertOffset-n.offset,c=n.length+s.offset,u=a.slice(c,c+s.length);o=ol(o.slice(0,l),u,o.slice(l));let p=this.#t.get(s.index);if(p)for(let d of p){let h=this.mobi.decode(u).slice(d),b=al(h);this.#h(s.index,d,b)}}return this.mobi.decode(o)}async createDocument(e){let n=await this.loadText(e);return this.parser.parseFromString(n,this.#u)}async loadSection(e){if(this.#e.has(e))return this.#e.get(e);let n=await this.loadText(e);this.#c&&this.parser.parseFromString(n,this.#u).querySelector("parsererror")&&(this.#u=Tn.HTML),this.#c&&(this.#c=!1);let r=await this.replaceResources(n),i=URL.createObjectURL(new Blob([r],{type:this.#u}));return this.#e.set(e,i),i}getIndexByFID(e){return this.#i.findIndex(n=>n.frags.some(r=>r.index===e))}#h(e,n,r){let i=this.#n.get(e);if(i)i.set(n,r);else{let a=new Map;this.#n.set(e,a),a.set(n,r)}}async resolveHref(e){let{fid:n,off:r}=rl(e),i=this.getIndexByFID(n);if(i<0)return;let a=this.#n.get(n)?.get(r);if(a)return{index:i,anchor:b=>b.querySelector(a)};let{skel:o,frags:s}=this.#i[i],l=s.find(b=>b.index===n),c=o.offset+o.length+l.offset,u=await this.loadRaw(c,c+l.length),p=this.mobi.decode(u).slice(r),d=al(p);return this.#h(n,r,d),{index:i,anchor:b=>b.querySelector(d)}}splitTOCHref(e){let n=rl(e);return[this.getIndexByFID(n.fid),n]}getTOCFragment(e,{fid:n,off:r}){let i=this.#n.get(n)?.get(r);return e.querySelector(i)}isExternal(e){return/^(?!blob|kindle)\w+:/i.test(e)}};var Ve={CONTAINER:"urn:oasis:names:tc:opendocument:xmlns:container",XHTML:"http://www.w3.org/1999/xhtml",OPF:"http://www.idpf.org/2007/opf",EPUB:"http://www.idpf.org/2007/ops",DC:"http://purl.org/dc/elements/1.1/",DCTERMS:"http://purl.org/dc/terms/",ENC:"http://www.w3.org/2001/04/xmlenc#",NCX:"http://www.daisy.org/z3986/2005/ncx/",XLINK:"http://www.w3.org/1999/xlink",SMIL:"http://www.w3.org/ns/SMIL"},at={XML:"application/xml",NCX:"application/x-dtbncx+xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml",JS:/\/(x-)?(javascript|ecmascript)/},ti=t=>t.toLowerCase().replace(/[-:](.)/g,(e,n)=>n.toUpperCase()),af=t=>t?t.trim().replace(/\s{2,}/g," "):"",ar=(t,e,n)=>n?r=>r.getAttribute(t)?.split(/\s/)?.includes(e):typeof e=="function"?r=>e(r.getAttribute(t)):r=>r.getAttribute(t)===e,ni=(...t)=>e=>e?Object.fromEntries(t.map(n=>[ti(n),e.getAttribute(n)])):null,ln=t=>af(t?.textContent),sr=(t,e)=>{let n=t.lookupNamespaceURI(null)===e||t.lookupPrefix(e),r=n?(i,a)=>o=>o.namespaceURI===e&&o.localName===a:(i,a)=>o=>o.localName===a;return{$:(i,a)=>[...i.children].find(r(i,a)),$$:(i,a)=>[...i.children].filter(r(i,a)),$$$:n?(i,a)=>[...i.getElementsByTagNameNS(e,a)]:(i,a)=>[...i.getElementsByTagName(e,a)]}},Nn=(t,e)=>{try{if(e.includes(":"))return new URL(t,e);let n="file:///";return decodeURI(new URL(t,n+e).href.replace(n,""))}catch{return t}},pl=t=>/^(?!blob)\w+:/i.test(t),of=(t,e)=>{if(!t)return e;let n=t.replace(/\/$/,"").split("/"),r=e.replace(/\/$/,"").split("/"),i=(n.length>r.length?n:r).findIndex((a,o)=>n[o]!==r[o]);return i<0?"":Array(n.length-i).fill("..").concat(r.slice(i)).join("/")},sf=t=>t.slice(0,t.lastIndexOf("/")+1),ei=async(t,e,n)=>{let r=[];t.replace(e,(...a)=>(r.push(a),null));let i=[];for(let a of r)i.push(await n(...a));return t.replace(e,()=>i.shift())},lf=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),sn={attrs:["dir","xml:lang"]},_n={name:"alternate-script",many:!0,...sn,props:["file-as"]},ul={many:!0,...sn,props:[{name:"role",many:!0,attrs:["scheme"]},"file-as",_n]},cf=[{name:"title",many:!0,...sn,props:["title-type","display-seq","file-as",_n]},{name:"identifier",many:!0,props:[{name:"identifier-type",attrs:["scheme"]}]},{name:"language",many:!0},{name:"creator",...ul},{name:"contributor",...ul},{name:"publisher",...sn,props:["file-as",_n]},{name:"description",...sn,props:[_n]},{name:"rights",...sn,props:[_n]},{name:"date"},{name:"dcterms:modified",type:"meta"},{name:"subject",many:!0,...sn,props:["term","authority",_n]},{name:"belongs-to-collection",type:"meta",many:!0,...sn,props:["collection-type","group-position","dcterms:identifier","file-as",_n,{name:"belongs-to-collection",recursive:!0}]}],uf=t=>{let{$:e,$$:n}=sr(t,Ve.OPF),r=e(t.documentElement,"metadata"),i=Array.from(r.children),a=(p,d)=>{if(!d)return null;let{props:h=[],attrs:b=[]}=p,g=ln(d);if(!h.length&&!b.length)return g;let m=d.getAttribute("id"),f=m?i.filter(ar("refines","#"+m)):[];return Object.fromEntries([["value",g]].concat(h.map(y=>{let{many:w,recursive:E}=y,_=typeof y=="string"?y:y.name,T=ar("property",_),v=E?p:y;return[ti(_),w?f.filter(T).map(x=>a(v,x)):a(v,f.find(T))]})).concat(b.map(y=>[ti(y),d.getAttribute(y)])))},o=i.filter(ar("refines",null)),s=Object.fromEntries(cf.map(p=>{let{type:d,name:h,many:b}=p,g=d==="meta"?m=>m.namespaceURI===Ve.OPF&&m.getAttribute("property")===h:m=>m.namespaceURI===Ve.DC&&m.localName===h;return[ti(h),b?o.filter(g).map(m=>a(p,m)):a(p,o.find(g))]})),l=p=>Object.fromEntries(n(r,"meta").filter(ar("property",d=>d?.startsWith(p))).map(d=>[d.getAttribute("property").replace(p,""),ln(d)])),c=l("rendition:"),u=l("media:");return{metadata:s,rendition:c,media:u}},df=(t,e=n=>n)=>{let{$:n,$$:r,$$$:i}=sr(t,Ve.XHTML),a=b=>b?decodeURI(e(b)):null,o=b=>g=>{let m=n(g,"a")??n(g,"span"),f=n(g,"ol"),y=a(m?.getAttribute("href")),E={label:ln(m)||m?.getAttribute("title"),href:y,subitems:s(f)};return b&&(E.type=m?.getAttributeNS(Ve.EPUB,"type")?.split(/\s/)),E},s=(b,g)=>b?r(b,"li").map(o(g)):null,l=(b,g)=>s(n(b,"ol"),g),c=i(t,"nav"),u=null,p=null,d=null,h=[];for(let b of c){let g=b.getAttributeNS(Ve.EPUB,"type")?.split(/\s/)??[];g.includes("toc")?u??=l(b):g.includes("page-list")?p??=l(b):g.includes("landmarks")?d??=l(b,!0):h.push({label:ln(b.firstElementChild),type:g,list:l(b)})}return{toc:u,pageList:p,landmarks:d,others:h}},pf=(t,e=n=>n)=>{let{$:n,$$:r}=sr(t,Ve.NCX),i=l=>l?decodeURI(e(l)):null,a=l=>{let c=n(l,"navLabel"),u=n(l,"content"),p=ln(c),d=i(u.getAttribute("src"));if(l.localName==="navPoint"){let h=r(l,"navPoint");return{label:p,href:d,subitems:h.length?h.map(a):null}}return{label:p,href:d}},o=(l,c)=>r(l,c).map(a),s=(l,c)=>{let u=n(t.documentElement,l);return u?o(u,c):null};return{toc:s("navMap","navPoint"),pageList:s("pageList","pageTarget"),others:r(t.documentElement,"navList").map(l=>({label:ln(n(l,"navLabel")),list:o(l,"navTarget")}))}},ya=t=>{if(!t)return;let e=t.split(":").map(o=>parseFloat(o));if(e.length===3){let[o,s,l]=e;return o*60*60+s*60+l}if(e.length===2){let[o,s]=e;return o*60+s}let[n,r]=t.split(/(?=[^\d.])/),i=parseFloat(n),a=r==="h"?60*60:r==="min"?60:r==="ms"?.001:1;return i*a},hf=(t,e=n=>n)=>{let{$:n,$$$:r}=sr(t,Ve.SMIL),i=a=>a?decodeURI(e(a)):null;return r(t,"par").map(a=>{let o=n(a,"text")?.getAttribute("src")?.split("#")?.[1],s=n(a,"audio");return s?{id:o,audio:{src:i(s.getAttribute("src")),clipBegin:ya(s.getAttribute("clipBegin")),clipEnd:ya(s.getAttribute("clipEnd"))}}:{id:o}})},ff=/([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})/,mf=t=>{for(let e of t.getElementsByTagNameNS(Ve.DC,"identifier")){let[n]=ln(e).split(":").slice(-1);if(ff.test(n))return n}return""},hl=t=>ln(t.getElementById(t.documentElement.getAttribute("unique-identifier"))??t.getElementsByTagNameNS(Ve.DC,"identifier")[0]),dl=async(t,e,n)=>{let r=new Uint8Array(await n.slice(0,e).arrayBuffer());e=Math.min(e,r.length);for(var i=0;i<e;i++)r[i]=r[i]^t[i%t.length];return new Blob([r,n.slice(e)],{type:n.type})},gf=async t=>{let e=new TextEncoder().encode(t),n=await globalThis.crypto.subtle.digest("SHA-1",e);return new Uint8Array(n)},bf=(t=gf)=>({"http://www.idpf.org/2008/embedding":{key:e=>t(hl(e).replaceAll(/[\u0020\u0009\u000d\u000a]/g,"")),decode:(e,n)=>dl(e,1040,n)},"http://ns.adobe.com/pdf/enc#RC":{key:e=>{let n=mf(e).replaceAll("-","");return Uint8Array.from({length:16},(r,i)=>parseInt(n.slice(i*2,i*2+2),16))},decode:(e,n)=>dl(e,1024,n)}}),wa=class{#e=new Map;#t=new Map;#n;constructor(e){this.#n=e}async init(e,n){if(!e)return;let r=Array.from(e.getElementsByTagNameNS(Ve.ENC,"EncryptedData"),i=>({algorithm:i.getElementsByTagNameNS(Ve.ENC,"EncryptionMethod")[0]?.getAttribute("Algorithm"),uri:i.getElementsByTagNameNS(Ve.ENC,"CipherReference")[0]?.getAttribute("URI")}));for(let{algorithm:i,uri:a}of r){if(!this.#t.has(i)){let o=this.#n[i];if(!o)continue;let s=await o.key(n);this.#t.set(i,l=>o.decode(s,l))}this.#e.set(a,i)}}getDecoder(e){return this.#t.get(this.#e.get(e))??(n=>n)}},va=class{constructor({opf:e,resolveHref:n}){this.opf=e;let{$:r,$$:i,$$$:a}=sr(e,Ve.OPF),o=r(e.documentElement,"manifest"),s=r(e.documentElement,"spine"),l=i(s,"itemref");this.manifest=i(o,"item").map(ni("href","id","media-type","properties","media-overlay")).map(u=>(u.href=n(u.href),u.properties=u.properties?.split(/\s/),u)),this.spine=l.map(ni("idref","id","linear","properties")).map(u=>(u.properties=u.properties?.split(/\s/),u)),this.pageProgressionDirection=s.getAttribute("page-progression-direction"),this.navPath=this.getItemByProperty("nav")?.href,this.ncxPath=(this.getItemByID(s.getAttribute("toc"))??this.manifest.find(u=>u.mediaType===at.NCX))?.href;let c=r(e.documentElement,"guide");c&&(this.guide=i(c,"reference").map(ni("type","title","href")).map(({type:u,title:p,href:d})=>({label:p,type:u.split(/\s/),href:n(d)}))),this.cover=this.getItemByProperty("cover-image")??this.getItemByID(a(e,"meta").find(ar("name","cover"))?.getAttribute("content"))??this.getItemByHref(this.guide?.find(u=>u.type.includes("cover"))?.href),this.cfis=Bs(l)}getItemByID(e){return this.manifest.find(n=>n.id===e)}getItemByHref(e){return this.manifest.find(n=>n.href===e)}getItemByProperty(e){return this.manifest.find(n=>n.properties?.includes(e))}resolveCFI(e){let n=Zt(e),r=(n.parent??n).shift(),i=sa(this.opf,r);i&&i.nodeName!=="idref"&&(r.at(-1).id=null,i=sa(this.opf,r));let a=i?.getAttribute("idref");return{index:this.spine.findIndex(l=>l.idref===a),anchor:l=>Br(l,n)}}},xa=class{#e=new Map;#t=new Map;#n=new Map;allowScript=!1;constructor({loadText:e,loadBlob:n,resources:r}){this.loadText=e,this.loadBlob=n,this.manifest=r.manifest,this.assets=r.manifest}createURL(e,n,r,i){if(!n)return"";let a=URL.createObjectURL(new Blob([n],{type:r}));if(this.#e.set(e,a),this.#n.set(e,1),i){let o=this.#t.get(i);o?o.push(e):this.#t.set(i,[e])}return a}ref(e,n){let r=this.#t.get(n);return r?.includes(e)||(this.#n.set(e,this.#n.get(e)+1),r?r.push(e):this.#t.set(n,[e])),this.#e.get(e)}unref(e){if(!this.#n.has(e))return;let n=this.#n.get(e)-1;if(n<1){URL.revokeObjectURL(this.#e.get(e)),this.#e.delete(e),this.#n.delete(e);let r=this.#t.get(e);if(r)for(;r.length;)this.unref(r.pop());this.#t.delete(e)}else this.#n.set(e,n)}async loadItem(e,n=[]){if(!e)return null;let{href:r,mediaType:i}=e,a=at.JS.test(e.mediaType);if(a&&!this.allowScript)return null;let o=n.at(-1);return this.#e.has(r)?this.ref(r,o):(a||[at.XHTML,at.HTML,at.CSS,at.SVG].includes(i))&&n.every(l=>l!==r)?this.loadReplaced(e,n):this.createURL(r,await this.loadBlob(r),i,o)}async loadHref(e,n,r=[]){if(pl(e))return e;let i=Nn(e,n),a=this.manifest.find(o=>o.href===i);return a?this.loadItem(a,r.concat(n)):e}async loadReplaced(e,n=[]){let{href:r,mediaType:i}=e,a=n.at(-1),o=await this.loadText(r);if(!o)return null;if([at.XHTML,at.HTML,at.SVG].includes(i)){let l=new DOMParser().parseFromString(o,i);if(i===at.XHTML&&l.querySelector("parsererror")&&(e.mediaType=at.HTML,l=new DOMParser().parseFromString(o,e.mediaType)),[at.XHTML,at.SVG].includes(e.mediaType)){let p=l.firstChild;for(;p instanceof ProcessingInstruction;){if(p.data){let d=await ei(p.data,/(?:^|\s*)(href\s*=\s*['"])([^'"]*)(['"])/i,(h,b,g,m)=>this.loadHref(g,r,n).then(f=>`${b}${f}${m}`));p.replaceWith(l.createProcessingInstruction(p.target,d))}p=p.nextSibling}}let c=async(p,d)=>p.setAttribute(d,await this.loadHref(p.getAttribute(d),r,n));for(let p of l.querySelectorAll("link[href]"))await c(p,"href");for(let p of l.querySelectorAll("[src]"))await c(p,"src");for(let p of l.querySelectorAll("[poster]"))await c(p,"poster");for(let p of l.querySelectorAll("object[data]"))await c(p,"data");for(let p of l.querySelectorAll("[*|href]:not([href]"))p.setAttributeNS(Ve.XLINK,"href",await this.loadHref(p.getAttributeNS(Ve.XLINK,"href"),r,n));for(let p of l.querySelectorAll("style"))p.textContent&&(p.textContent=await this.replaceCSS(p.textContent,r,n));for(let p of l.querySelectorAll("[style]"))p.setAttribute("style",await this.replaceCSS(p.getAttribute("style"),r,n));let u=new XMLSerializer().serializeToString(l);return this.createURL(r,u,e.mediaType,a)}let s=i===at.CSS?await this.replaceCSS(o,r,n):await this.replaceString(o,r,n);return this.createURL(r,s,i,a)}async replaceCSS(e,n,r=[]){let i=await ei(e,/url\(\s*["']?([^'"\n]*?)\s*["']?\s*\)/gi,(l,c)=>this.loadHref(c,n,r).then(u=>`url("${u}")`)),a=await ei(i,/@import\s*["']([^"'\n]*?)["']/gi,(l,c)=>this.loadHref(c,n,r).then(u=>`@import "${u}"`)),o=window?.innerWidth??800,s=window?.innerHeight??600;return a.replace(/-epub-/gi,"").replace(/(\d*\.?\d+)vw/gi,(l,c)=>parseFloat(c)*o/100+"px").replace(/(\d*\.?\d+)vh/gi,(l,c)=>parseFloat(c)*s/100+"px").replace(/page-break-(after|before|inside)/gi,(l,c)=>`-webkit-column-break-${c}`)}replaceString(e,n,r=[]){let i=new Map,a=this.assets.map(s=>{if(s.href===n)return;let l=of(sf(n),s.href),c=encodeURI(l),u="/"+s.href,p=encodeURI(u),d=new Set([l,c,u,p]);for(let h of d)i.set(h,s);return Array.from(d)}).flat().filter(s=>s);if(!a.length)return e;let o=new RegExp(a.map(lf).join("|"),"g");return ei(e,o,async s=>this.loadItem(i.get(s.replace(/^\//,"")),r.concat(n)))}unloadItem(e){this.unref(e?.href)}},yf=(t,e)=>t.getElementById(e)??t.querySelector(`[name="${CSS.escape(e)}"]`),wf=t=>{for(let e of t){if(e==="page-spread-left"||e==="rendition:page-spread-left")return"left";if(e==="page-spread-right"||e==="rendition:page-spread-right")return"right";if(e==="rendition:page-spread-center")return"center"}},or=class{parser=new DOMParser;#e;constructor({loadText:e,loadBlob:n,getSize:r,sha1:i}){this.loadText=e,this.loadBlob=n,this.getSize=r,this.#e=new wa(bf(i))}#t(e){return e?this.parser.parseFromString(e,at.XML):null}async#n(e){return this.#t(await this.loadText(e))}opfPath=null;async init(){let e=await this.#n("META-INF/container.xml");if(!e)throw new Error("Failed to load container file");let n=Array.from(e.getElementsByTagNameNS(Ve.CONTAINER,"rootfile"),ni("full-path","media-type")).filter(g=>g.mediaType==="application/oebps-package+xml");if(!n.length)throw new Error("No package document defined in container");let r=n[0].fullPath;this.opfPath=r;let i=await this.#n(r);if(!i)throw new Error("Failed to load package document");let a=await this.#n("META-INF/encryption.xml");await this.#e.init(a,i),this.resources=new va({opf:i,resolveHref:g=>Nn(g,r)});let o=new xa({loadText:this.loadText,loadBlob:g=>Promise.resolve(this.loadBlob(g)).then(this.#e.getDecoder(g)),resources:this.resources});this.sections=this.resources.spine.map((g,m)=>{let{idref:f,linear:y,properties:w=[]}=g,E=this.resources.getItemByID(f);return E?{id:this.resources.getItemByID(f)?.href,load:()=>o.loadItem(E),unload:()=>o.unloadItem(E),createDocument:()=>this.loadDocument(E),size:this.getSize(E.href),cfi:this.resources.cfis[m],linear:y,pageSpread:wf(w),resolveHref:_=>Nn(_,E.href),loadMediaOverlay:()=>this.loadMediaOverlay(E)}:null}).filter(g=>g);let{navPath:s,ncxPath:l}=this.resources;if(s)try{let g=f=>Nn(f,s),m=df(await this.#n(s),g);this.toc=m.toc,this.pageList=m.pageList,this.landmarks=m.landmarks}catch{}if(!this.toc&&l)try{let g=f=>Nn(f,l),m=pf(await this.#n(l),g);this.toc=m.toc,this.pageList=m.pageList}catch{}this.landmarks??=this.resources.guide;let{metadata:c,rendition:u,media:p}=uf(i);this.rendition=u,this.media=p,p.duration=ya(p.duration),this.dir=this.resources.pageProgressionDirection,this.rawMetadata=c;let d=c?.title?.[0];this.metadata={title:d?.value,sortAs:d?.fileAs,language:c?.language,identifier:hl(i),description:c?.description?.value,publisher:c?.publisher?.value,published:c?.date,modified:c?.dctermsModified,subject:c?.subject?.filter(({value:g,code:m})=>g||m)?.map(({value:g,code:m,scheme:f})=>({name:g,code:m,scheme:f})),rights:c?.rights?.value};let h={art:"artist",aut:"author",bkp:"producer",clr:"colorist",edt:"editor",ill:"illustrator",trl:"translator",pbl:"publisher"},b=g=>m=>{let f=[...new Set(m.role?.map(({value:w,scheme:E})=>(!E||E==="marc:relators"?h[w]:null)??g))],y={name:m.value,sortAs:m.fileAs};return[f?.length?f:[g],y]};return c?.creator?.map(b("author"))?.concat(c?.contributor?.map?.(b("contributor")))?.forEach(([g,m])=>g.forEach(f=>{this.metadata[f]?this.metadata[f].push(m):this.metadata[f]=[m]})),this}async loadDocument(e){let n=await this.loadText(e.href);return this.parser.parseFromString(n,e.mediaType)}async loadMediaOverlay(e){let n=e.mediaOverlay;if(!n)return null;let r=this.resources.getItemByID(n),i=await this.#n(r.href);return hf(i,o=>Nn(o,r.href))}resolveCFI(e){return this.resources.resolveCFI(e)}resolveHref(e){let[n,r]=e.split("#"),i=this.resources.getItemByHref(decodeURI(n));return i?{index:this.resources.spine.findIndex(({idref:s})=>s===i.id),anchor:r?s=>yf(s,r):()=>0}:null}splitTOCHref(e){return e?.split("#")??[]}getTOCFragment(e,n){return e.getElementById(n)??e.querySelector(`[name="${CSS.escape(n)}"]`)}isExternal(e){return pl(e)}async getCover(){let e=this.resources?.cover;return e?.href?new Blob([await this.loadBlob(e.href)],{type:e.mediaType}):null}async getCalibreBookmarks(){let e=await this.loadText("META-INF/calibre_bookmarks.txt"),n="encoding=json+base64:";if(e?.startsWith(n)){let r=atob(e.slice(n.length));return JSON.parse(r)}}};var co={};eh(co,{BlobReader:()=>eo,BlobWriter:()=>to,Data64URIReader:()=>qm,Data64URIWriter:()=>Km,ERR_BAD_FORMAT:()=>fi,ERR_CENTRAL_DIRECTORY_NOT_FOUND:()=>tu,ERR_DUPLICATED_NAME:()=>lu,ERR_ENCRYPTED:()=>iu,ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND:()=>eu,ERR_EOCDR_NOT_FOUND:()=>Qc,ERR_EOCDR_ZIP64_NOT_FOUND:()=>Jc,ERR_EXTRAFIELD_ZIP64_NOT_FOUND:()=>ru,ERR_HTTP_RANGE:()=>br,ERR_INVALID_COMMENT:()=>cu,ERR_INVALID_ENCRYPTION_STRENGTH:()=>pu,ERR_INVALID_ENTRY_COMMENT:()=>uu,ERR_INVALID_ENTRY_NAME:()=>du,ERR_INVALID_EXTRAFIELD_DATA:()=>fu,ERR_INVALID_EXTRAFIELD_TYPE:()=>hu,ERR_INVALID_PASSWORD:()=>Ga,ERR_INVALID_SIGNATURE:()=>Va,ERR_INVALID_VERSION:()=>qa,ERR_ITERATOR_COMPLETED_TOO_SOON:()=>Rc,ERR_LOCAL_FILE_HEADER_NOT_FOUND:()=>nu,ERR_SPLIT_ZIP_FILE:()=>ja,ERR_UNSUPPORTED_COMPRESSION:()=>$a,ERR_UNSUPPORTED_ENCRYPTION:()=>au,ERR_UNSUPPORTED_FORMAT:()=>ki,HttpRangeReader:()=>Zm,HttpReader:()=>Bc,Reader:()=>mn,SplitDataReader:()=>ro,SplitDataWriter:()=>mr,SplitZipReader:()=>tg,SplitZipWriter:()=>ng,TextReader:()=>Gm,TextWriter:()=>Vm,Uint8ArrayReader:()=>Qm,Uint8ArrayWriter:()=>Jm,Writer:()=>Ja,ZipReader:()=>ug,ZipWriter:()=>wg,configure:()=>_i,getMimeType:()=>Qf,initReader:()=>io,initStream:()=>Qt,initWriter:()=>ao,readUint8Array:()=>et,terminateWorkers:()=>Im});function xi(t){return Ti(t.map(([e,n])=>new Array(e).fill(n,0,e)))}function Ti(t){return t.reduce((e,n)=>e.concat(Array.isArray(n)?Ti(n):n),[])}var fl=[0,1,2,3].concat(...xi([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function Le(){let t=this;function e(i){let a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.extra_bits,l=t.stat_desc.extra_base,c=t.stat_desc.max_length,u,p,d,h,b,g,m=0;for(h=0;h<=15;h++)i.bl_count[h]=0;for(a[i.heap[i.heap_max]*2+1]=0,u=i.heap_max+1;u<573;u++)p=i.heap[u],h=a[a[p*2+1]*2+1]+1,h>c&&(h=c,m++),a[p*2+1]=h,!(p>t.max_code)&&(i.bl_count[h]++,b=0,p>=l&&(b=s[p-l]),g=a[p*2],i.opt_len+=g*(h+b),o&&(i.static_len+=g*(o[p*2+1]+b)));if(m!==0){do{for(h=c-1;i.bl_count[h]===0;)h--;i.bl_count[h]--,i.bl_count[h+1]+=2,i.bl_count[c]--,m-=2}while(m>0);for(h=c;h!==0;h--)for(p=i.bl_count[h];p!==0;)d=i.heap[--u],!(d>t.max_code)&&(a[d*2+1]!=h&&(i.opt_len+=(h-a[d*2+1])*a[d*2],a[d*2+1]=h),p--)}}function n(i,a){let o=0;do o|=i&1,i>>>=1,o<<=1;while(--a>0);return o>>>1}function r(i,a,o){let s=[],l=0,c,u,p;for(c=1;c<=15;c++)s[c]=l=l+o[c-1]<<1;for(u=0;u<=a;u++)p=i[u*2+1],p!==0&&(i[u*2]=n(s[p]++,p))}t.build_tree=function(i){let a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.elems,l,c,u=-1,p;for(i.heap_len=0,i.heap_max=573,l=0;l<s;l++)a[l*2]!==0?(i.heap[++i.heap_len]=u=l,i.depth[l]=0):a[l*2+1]=0;for(;i.heap_len<2;)p=i.heap[++i.heap_len]=u<2?++u:0,a[p*2]=1,i.depth[p]=0,i.opt_len--,o&&(i.static_len-=o[p*2+1]);for(t.max_code=u,l=Math.floor(i.heap_len/2);l>=1;l--)i.pqdownheap(a,l);p=s;do l=i.heap[1],i.heap[1]=i.heap[i.heap_len--],i.pqdownheap(a,1),c=i.heap[1],i.heap[--i.heap_max]=l,i.heap[--i.heap_max]=c,a[p*2]=a[l*2]+a[c*2],i.depth[p]=Math.max(i.depth[l],i.depth[c])+1,a[l*2+1]=a[c*2+1]=p,i.heap[1]=p++,i.pqdownheap(a,1);while(i.heap_len>=2);i.heap[--i.heap_max]=i.heap[1],e(i),r(a,t.max_code,i.bl_count)}}Le._length_code=[0,1,2,3,4,5,6,7].concat(...xi([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]]));Le.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0];Le.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576];Le.d_code=function(t){return t<256?fl[t]:fl[256+(t>>>7)]};Le.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];Le.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];Le.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];Le.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function Xe(t,e,n,r,i){let a=this;a.static_tree=t,a.extra_bits=e,a.extra_base=n,a.elems=r,a.max_length=i}var vf=[12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227],xf=xi([[144,8],[112,9],[24,7],[8,8]]);Xe.static_ltree=Ti(vf.map((t,e)=>[t,xf[e]]));var Tf=[0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23],_f=xi([[30,5]]);Xe.static_dtree=Ti(Tf.map((t,e)=>[t,_f[e]]));Xe.static_l_desc=new Xe(Xe.static_ltree,Le.extra_lbits,256+1,286,15);Xe.static_d_desc=new Xe(Xe.static_dtree,Le.extra_dbits,0,30,15);Xe.static_bl_desc=new Xe(null,Le.extra_blbits,0,19,7);var Sf=9,Af=8;function Ht(t,e,n,r,i){let a=this;a.good_length=t,a.max_lazy=e,a.nice_length=n,a.max_chain=r,a.func=i}var nc=0,di=1,An=2,Ot=[new Ht(0,0,0,0,nc),new Ht(4,4,8,4,di),new Ht(4,5,16,8,di),new Ht(4,6,32,32,di),new Ht(4,4,16,16,An),new Ht(8,16,32,32,An),new Ht(8,16,128,128,An),new Ht(8,32,128,256,An),new Ht(32,128,258,1024,An),new Ht(32,258,258,4096,An)],ri=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],Pt=0,ii=1,lr=2,ai=3,kf=32,Ta=42,oi=113,cr=666,_a=8,Ef=0,Sa=1,Cf=2,Ne=3,pi=258,mt=pi+Ne+1;function ml(t,e,n,r){let i=t[e*2],a=t[n*2];return i<a||i==a&&r[e]<=r[n]}function Lf(){let t=this,e,n,r,i,a,o,s,l,c,u,p,d,h,b,g,m,f,y,w,E,_,T,v,x,S,A,C,R,D,I,N,B,F,W=new Le,te=new Le,j=new Le;t.depth=[];let J,L,O,H,q,V;t.bl_count=[],t.heap=[],N=[],B=[],F=[];function ue(){c=2*a,p[h-1]=0;for(let P=0;P<h-1;P++)p[P]=0;A=Ot[C].max_lazy,D=Ot[C].good_length,I=Ot[C].nice_length,S=Ot[C].max_chain,_=0,f=0,v=0,y=x=Ne-1,E=0,d=0}function pe(){let P;for(P=0;P<286;P++)N[P*2]=0;for(P=0;P<30;P++)B[P*2]=0;for(P=0;P<19;P++)F[P*2]=0;N[256*2]=1,t.opt_len=t.static_len=0,L=O=0}function he(){W.dyn_tree=N,W.stat_desc=Xe.static_l_desc,te.dyn_tree=B,te.stat_desc=Xe.static_d_desc,j.dyn_tree=F,j.stat_desc=Xe.static_bl_desc,q=0,V=0,H=8,pe()}t.pqdownheap=function(P,U){let M=t.heap,z=M[U],$=U<<1;for(;$<=t.heap_len&&($<t.heap_len&&ml(P,M[$+1],M[$],t.depth)&&$++,!ml(P,z,M[$],t.depth));)M[U]=M[$],U=$,$<<=1;M[U]=z};function Q(P,U){let M=-1,z,$=P[0*2+1],Z=0,le=7,Ge=4;$===0&&(le=138,Ge=3),P[(U+1)*2+1]=65535;for(let dt=0;dt<=U;dt++)z=$,$=P[(dt+1)*2+1],!(++Z<le&&z==$)&&(Z<Ge?F[z*2]+=Z:z!==0?(z!=M&&F[z*2]++,F[16*2]++):Z<=10?F[17*2]++:F[18*2]++,Z=0,M=z,$===0?(le=138,Ge=3):z==$?(le=6,Ge=3):(le=7,Ge=4))}function ae(){let P;for(Q(N,W.max_code),Q(B,te.max_code),j.build_tree(t),P=19-1;P>=3&&F[Le.bl_order[P]*2+1]===0;P--);return t.opt_len+=3*(P+1)+5+5+4,P}function oe(P){t.pending_buf[t.pending++]=P}function se(P){oe(P&255),oe(P>>>8&255)}function Y(P){oe(P>>8&255),oe(P&255&255)}function re(P,U){let M,z=U;V>16-z?(M=P,q|=M<<V&65535,se(q),q=M>>>16-V,V+=z-16):(q|=P<<V&65535,V+=z)}function de(P,U){let M=P*2;re(U[M]&65535,U[M+1]&65535)}function fe(P,U){let M,z=-1,$,Z=P[0*2+1],le=0,Ge=7,dt=4;for(Z===0&&(Ge=138,dt=3),M=0;M<=U;M++)if($=Z,Z=P[(M+1)*2+1],!(++le<Ge&&$==Z)){if(le<dt)do de($,F);while(--le!==0);else $!==0?($!=z&&(de($,F),le--),de(16,F),re(le-3,2)):le<=10?(de(17,F),re(le-3,3)):(de(18,F),re(le-11,7));le=0,z=$,Z===0?(Ge=138,dt=3):$==Z?(Ge=6,dt=3):(Ge=7,dt=4)}}function ne(P,U,M){let z;for(re(P-257,5),re(U-1,5),re(M-4,4),z=0;z<M;z++)re(F[Le.bl_order[z]*2+1],3);fe(N,P-1),fe(B,U-1)}function ke(){V==16?(se(q),q=0,V=0):V>=8&&(oe(q&255),q>>>=8,V-=8)}function Oe(){re(Sa<<1,3),de(256,Xe.static_ltree),ke(),1+H+10-V<9&&(re(Sa<<1,3),de(256,Xe.static_ltree),ke()),H=7}function ve(P,U){let M,z,$;if(t.dist_buf[L]=P,t.lc_buf[L]=U&255,L++,P===0?N[U*2]++:(O++,P--,N[(Le._length_code[U]+256+1)*2]++,B[Le.d_code(P)*2]++),!(L&8191)&&C>2){for(M=L*8,z=_-f,$=0;$<30;$++)M+=B[$*2]*(5+Le.extra_dbits[$]);if(M>>>=3,O<Math.floor(L/2)&&M<Math.floor(z/2))return!0}return L==J-1}function Re(P,U){let M,z,$=0,Z,le;if(L!==0)do M=t.dist_buf[$],z=t.lc_buf[$],$++,M===0?de(z,P):(Z=Le._length_code[z],de(Z+256+1,P),le=Le.extra_lbits[Z],le!==0&&(z-=Le.base_length[Z],re(z,le)),M--,Z=Le.d_code(M),de(Z,U),le=Le.extra_dbits[Z],le!==0&&(M-=Le.base_dist[Z],re(M,le)));while($<L);de(256,P),H=P[256*2+1]}function He(){V>8?se(q):V>0&&oe(q&255),q=0,V=0}function ct(P,U,M){He(),H=8,M&&(se(U),se(~U)),t.pending_buf.set(l.subarray(P,P+U),t.pending),t.pending+=U}function rn(P,U,M){re((Ef<<1)+(M?1:0),3),ct(P,U,!0)}function Tt(P,U,M){let z,$,Z=0;C>0?(W.build_tree(t),te.build_tree(t),Z=ae(),z=t.opt_len+3+7>>>3,$=t.static_len+3+7>>>3,$<=z&&(z=$)):z=$=U+5,U+4<=z&&P!=-1?rn(P,U,M):$==z?(re((Sa<<1)+(M?1:0),3),Re(Xe.static_ltree,Xe.static_dtree)):(re((Cf<<1)+(M?1:0),3),ne(W.max_code+1,te.max_code+1,Z+1),Re(N,B)),pe(),M&&He()}function Je(P){Tt(f>=0?f:-1,_-f,P),f=_,e.flush_pending()}function Ut(){let P,U,M,z;do{if(z=c-v-_,z===0&&_===0&&v===0)z=a;else if(z==-1)z--;else if(_>=a+a-mt){l.set(l.subarray(a,a+a),0),T-=a,_-=a,f-=a,P=h,M=P;do U=p[--M]&65535,p[M]=U>=a?U-a:0;while(--P!==0);P=a,M=P;do U=u[--M]&65535,u[M]=U>=a?U-a:0;while(--P!==0);z+=a}if(e.avail_in===0)return;P=e.read_buf(l,_+v,z),v+=P,v>=Ne&&(d=l[_]&255,d=(d<<m^l[_+1]&255)&g)}while(v<mt&&e.avail_in!==0)}function We(P){let U=65535,M;for(U>r-5&&(U=r-5);;){if(v<=1){if(Ut(),v===0&&P==0)return Pt;if(v===0)break}if(_+=v,v=0,M=f+U,(_===0||_>=M)&&(v=_-M,_=M,Je(!1),e.avail_out===0)||_-f>=a-mt&&(Je(!1),e.avail_out===0))return Pt}return Je(P==4),e.avail_out===0?P==4?lr:Pt:P==4?ai:ii}function ut(P){let U=S,M=_,z,$,Z=x,le=_>a-mt?_-(a-mt):0,Ge=I,dt=s,vn=_+pi,Qn=l[M+Z-1],Jn=l[M+Z];x>=D&&(U>>=2),Ge>v&&(Ge=v);do if(z=P,!(l[z+Z]!=Jn||l[z+Z-1]!=Qn||l[z]!=l[M]||l[++z]!=l[M+1])){M+=2,z++;do;while(l[++M]==l[++z]&&l[++M]==l[++z]&&l[++M]==l[++z]&&l[++M]==l[++z]&&l[++M]==l[++z]&&l[++M]==l[++z]&&l[++M]==l[++z]&&l[++M]==l[++z]&&M<vn);if($=pi-(vn-M),M=vn-pi,$>Z){if(T=P,Z=$,$>=Ge)break;Qn=l[M+Z-1],Jn=l[M+Z]}}while((P=u[P&dt]&65535)>le&&--U!==0);return Z<=v?Z:v}function $e(P){let U=0,M;for(;;){if(v<mt){if(Ut(),v<mt&&P==0)return Pt;if(v===0)break}if(v>=Ne&&(d=(d<<m^l[_+(Ne-1)]&255)&g,U=p[d]&65535,u[_&s]=p[d],p[d]=_),U!==0&&(_-U&65535)<=a-mt&&R!=2&&(y=ut(U)),y>=Ne)if(M=ve(_-T,y-Ne),v-=y,y<=A&&v>=Ne){y--;do _++,d=(d<<m^l[_+(Ne-1)]&255)&g,U=p[d]&65535,u[_&s]=p[d],p[d]=_;while(--y!==0);_++}else _+=y,y=0,d=l[_]&255,d=(d<<m^l[_+1]&255)&g;else M=ve(0,l[_]&255),v--,_++;if(M&&(Je(!1),e.avail_out===0))return Pt}return Je(P==4),e.avail_out===0?P==4?lr:Pt:P==4?ai:ii}function nt(P){let U=0,M,z;for(;;){if(v<mt){if(Ut(),v<mt&&P==0)return Pt;if(v===0)break}if(v>=Ne&&(d=(d<<m^l[_+(Ne-1)]&255)&g,U=p[d]&65535,u[_&s]=p[d],p[d]=_),x=y,w=T,y=Ne-1,U!==0&&x<A&&(_-U&65535)<=a-mt&&(R!=2&&(y=ut(U)),y<=5&&(R==1||y==Ne&&_-T>4096)&&(y=Ne-1)),x>=Ne&&y<=x){z=_+v-Ne,M=ve(_-1-w,x-Ne),v-=x-1,x-=2;do++_<=z&&(d=(d<<m^l[_+(Ne-1)]&255)&g,U=p[d]&65535,u[_&s]=p[d],p[d]=_);while(--x!==0);if(E=0,y=Ne-1,_++,M&&(Je(!1),e.avail_out===0))return Pt}else if(E!==0){if(M=ve(0,l[_-1]&255),M&&Je(!1),_++,v--,e.avail_out===0)return Pt}else E=1,_++,v--}return E!==0&&(M=ve(0,l[_-1]&255),E=0),Je(P==4),e.avail_out===0?P==4?lr:Pt:P==4?ai:ii}function Rt(P){return P.total_in=P.total_out=0,P.msg=null,t.pending=0,t.pending_out=0,n=oi,i=0,he(),ue(),0}t.deflateInit=function(P,U,M,z,$,Z){return z||(z=_a),$||($=Af),Z||(Z=0),P.msg=null,U==-1&&(U=6),$<1||$>Sf||z!=_a||M<9||M>15||U<0||U>9||Z<0||Z>2?-2:(P.dstate=t,o=M,a=1<<o,s=a-1,b=$+7,h=1<<b,g=h-1,m=Math.floor((b+Ne-1)/Ne),l=new Uint8Array(a*2),u=[],p=[],J=1<<$+6,t.pending_buf=new Uint8Array(J*4),r=J*4,t.dist_buf=new Uint16Array(J),t.lc_buf=new Uint8Array(J),C=U,R=Z,Rt(P))},t.deflateEnd=function(){return n!=Ta&&n!=oi&&n!=cr?-2:(t.lc_buf=null,t.dist_buf=null,t.pending_buf=null,p=null,u=null,l=null,t.dstate=null,n==oi?-3:0)},t.deflateParams=function(P,U,M){let z=0;return U==-1&&(U=6),U<0||U>9||M<0||M>2?-2:(Ot[C].func!=Ot[U].func&&P.total_in!==0&&(z=P.deflate(1)),C!=U&&(C=U,A=Ot[C].max_lazy,D=Ot[C].good_length,I=Ot[C].nice_length,S=Ot[C].max_chain),R=M,z)},t.deflateSetDictionary=function(P,U,M){let z=M,$,Z=0;if(!U||n!=Ta)return-2;if(z<Ne)return 0;for(z>a-mt&&(z=a-mt,Z=M-z),l.set(U.subarray(Z,Z+z),0),_=z,f=z,d=l[0]&255,d=(d<<m^l[1]&255)&g,$=0;$<=z-Ne;$++)d=(d<<m^l[$+(Ne-1)]&255)&g,u[$&s]=p[d],p[d]=$;return 0},t.deflate=function(P,U){let M,z,$,Z,le;if(U>4||U<0)return-2;if(!P.next_out||!P.next_in&&P.avail_in!==0||n==cr&&U!=4)return P.msg=ri[2- -2],-2;if(P.avail_out===0)return P.msg=ri[2- -5],-5;if(e=P,Z=i,i=U,n==Ta&&(z=_a+(o-8<<4)<<8,$=(C-1&255)>>1,$>3&&($=3),z|=$<<6,_!==0&&(z|=kf),z+=31-z%31,n=oi,Y(z)),t.pending!==0){if(e.flush_pending(),e.avail_out===0)return i=-1,0}else if(e.avail_in===0&&U<=Z&&U!=4)return e.msg=ri[2- -5],-5;if(n==cr&&e.avail_in!==0)return P.msg=ri[2- -5],-5;if(e.avail_in!==0||v!==0||U!=0&&n!=cr){switch(le=-1,Ot[C].func){case nc:le=We(U);break;case di:le=$e(U);break;case An:le=nt(U);break;default:}if((le==lr||le==ai)&&(n=cr),le==Pt||le==lr)return e.avail_out===0&&(i=-1),0;if(le==ii){if(U==1)Oe();else if(rn(0,0,!1),U==3)for(M=0;M<h;M++)p[M]=0;if(e.flush_pending(),e.avail_out===0)return i=-1,0}}return U!=4?0:1}}function rc(){let t=this;t.next_in_index=0,t.next_out_index=0,t.avail_in=0,t.total_in=0,t.avail_out=0,t.total_out=0}rc.prototype={deflateInit(t,e){let n=this;return n.dstate=new Lf,e||(e=15),n.dstate.deflateInit(n,t,e)},deflate(t){let e=this;return e.dstate?e.dstate.deflate(e,t):-2},deflateEnd(){let t=this;if(!t.dstate)return-2;let e=t.dstate.deflateEnd();return t.dstate=null,e},deflateParams(t,e){let n=this;return n.dstate?n.dstate.deflateParams(n,t,e):-2},deflateSetDictionary(t,e){let n=this;return n.dstate?n.dstate.deflateSetDictionary(n,t,e):-2},read_buf(t,e,n){let r=this,i=r.avail_in;return i>n&&(i=n),i===0?0:(r.avail_in-=i,t.set(r.next_in.subarray(r.next_in_index,r.next_in_index+i),e),r.next_in_index+=i,r.total_in+=i,i)},flush_pending(){let t=this,e=t.dstate.pending;e>t.avail_out&&(e=t.avail_out),e!==0&&(t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out,t.dstate.pending_out+e),t.next_out_index),t.next_out_index+=e,t.dstate.pending_out+=e,t.total_out+=e,t.avail_out-=e,t.dstate.pending-=e,t.dstate.pending===0&&(t.dstate.pending_out=0))}};function Df(t){let e=this,n=new rc,r=Rf(t&&t.chunkSize?t.chunkSize:64*1024),i=0,a=new Uint8Array(r),o=t?t.level:-1;typeof o>"u"&&(o=-1),n.deflateInit(o),n.next_out=a,e.append=function(s,l){let c,u,p=0,d=0,h=0,b=[];if(s.length){n.next_in_index=0,n.next_in=s,n.avail_in=s.length;do{if(n.next_out_index=0,n.avail_out=r,c=n.deflate(i),c!=0)throw new Error("deflating: "+n.msg);n.next_out_index&&(n.next_out_index==r?b.push(new Uint8Array(a)):b.push(a.slice(0,n.next_out_index))),h+=n.next_out_index,l&&n.next_in_index>0&&n.next_in_index!=p&&(l(n.next_in_index),p=n.next_in_index)}while(n.avail_in>0||n.avail_out===0);return b.length>1?(u=new Uint8Array(h),b.forEach(function(g){u.set(g,d),d+=g.length})):u=b[0]||new Uint8Array,u}},e.flush=function(){let s,l,c=0,u=0,p=[];do{if(n.next_out_index=0,n.avail_out=r,s=n.deflate(4),s!=1&&s!=0)throw new Error("deflating: "+n.msg);r-n.avail_out>0&&p.push(a.slice(0,n.next_out_index)),u+=n.next_out_index}while(n.avail_in>0||n.avail_out===0);return n.deflateEnd(),l=new Uint8Array(u),p.forEach(function(d){l.set(d,c),c+=d.length}),l}}function Rf(t){return t+5*(Math.floor(t/16383)+1)}var gt=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],ic=1440,Nf=0,Of=4,Pf=9,Mf=5,If=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],Ff=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],Bf=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],Uf=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],zf=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],Hf=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],cn=15;function Pa(){let t=this,e,n,r,i,a,o;function s(c,u,p,d,h,b,g,m,f,y,w){let E,_,T,v,x,S,A,C,R,D,I,N,B,F,W;D=0,x=p;do r[c[u+D]]++,D++,x--;while(x!==0);if(r[0]==p)return g[0]=-1,m[0]=0,0;for(C=m[0],S=1;S<=cn&&r[S]===0;S++);for(A=S,C<S&&(C=S),x=cn;x!==0&&r[x]===0;x--);for(T=x,C>x&&(C=x),m[0]=C,F=1<<S;S<x;S++,F<<=1)if((F-=r[S])<0)return-3;if((F-=r[x])<0)return-3;for(r[x]+=F,o[1]=S=0,D=1,B=2;--x!==0;)o[B]=S+=r[D],B++,D++;x=0,D=0;do(S=c[u+D])!==0&&(w[o[S]++]=x),D++;while(++x<p);for(p=o[T],o[0]=x=0,D=0,v=-1,N=-C,a[0]=0,I=0,W=0;A<=T;A++)for(E=r[A];E--!==0;){for(;A>N+C;){if(v++,N+=C,W=T-N,W=W>C?C:W,(_=1<<(S=A-N))>E+1&&(_-=E+1,B=A,S<W))for(;++S<W&&!((_<<=1)<=r[++B]);)_-=r[B];if(W=1<<S,y[0]+W>ic)return-3;a[v]=I=y[0],y[0]+=W,v!==0?(o[v]=x,i[0]=S,i[1]=C,S=x>>>N-C,i[2]=I-a[v-1]-S,f.set(i,(a[v-1]+S)*3)):g[0]=I}for(i[1]=A-N,D>=p?i[0]=128+64:w[D]<d?(i[0]=w[D]<256?0:32+64,i[2]=w[D++]):(i[0]=b[w[D]-d]+16+64,i[2]=h[w[D++]-d]),_=1<<A-N,S=x>>>N;S<W;S+=_)f.set(i,(I+S)*3);for(S=1<<A-1;x&S;S>>>=1)x^=S;for(x^=S,R=(1<<N)-1;(x&R)!=o[v];)v--,N-=C,R=(1<<N)-1}return F!==0&&T!=1?-5:0}function l(c){let u;for(e||(e=[],n=[],r=new Int32Array(cn+1),i=[],a=new Int32Array(cn),o=new Int32Array(cn+1)),n.length<c&&(n=[]),u=0;u<c;u++)n[u]=0;for(u=0;u<cn+1;u++)r[u]=0;for(u=0;u<3;u++)i[u]=0;a.set(r.subarray(0,cn),0),o.set(r.subarray(0,cn+1),0)}t.inflate_trees_bits=function(c,u,p,d,h){let b;return l(19),e[0]=0,b=s(c,0,19,19,null,null,p,u,d,e,n),b==-3?h.msg="oversubscribed dynamic bit lengths tree":(b==-5||u[0]===0)&&(h.msg="incomplete dynamic bit lengths tree",b=-3),b},t.inflate_trees_dynamic=function(c,u,p,d,h,b,g,m,f){let y;return l(288),e[0]=0,y=s(p,0,c,257,Bf,Uf,b,d,m,e,n),y!=0||d[0]===0?(y==-3?f.msg="oversubscribed literal/length tree":y!=-4&&(f.msg="incomplete literal/length tree",y=-3),y):(l(288),y=s(p,c,u,0,zf,Hf,g,h,m,e,n),y!=0||h[0]===0&&c>257?(y==-3?f.msg="oversubscribed distance tree":y==-5?(f.msg="incomplete distance tree",y=-3):y!=-4&&(f.msg="empty distance tree with lengths",y=-3),y):0)}}Pa.inflate_trees_fixed=function(t,e,n,r){return t[0]=Pf,e[0]=Mf,n[0]=If,r[0]=Ff,0};var si=0,gl=1,bl=2,yl=3,wl=4,vl=5,xl=6,Aa=7,Tl=8,li=9;function Wf(){let t=this,e,n=0,r,i=0,a=0,o=0,s=0,l=0,c=0,u=0,p,d=0,h,b=0;function g(m,f,y,w,E,_,T,v){let x,S,A,C,R,D,I,N,B,F,W,te,j,J,L,O;I=v.next_in_index,N=v.avail_in,R=T.bitb,D=T.bitk,B=T.write,F=B<T.read?T.read-B-1:T.end-B,W=gt[m],te=gt[f];do{for(;D<20;)N--,R|=(v.read_byte(I++)&255)<<D,D+=8;if(x=R&W,S=y,A=w,O=(A+x)*3,(C=S[O])===0){R>>=S[O+1],D-=S[O+1],T.win[B++]=S[O+2],F--;continue}do{if(R>>=S[O+1],D-=S[O+1],C&16){for(C&=15,j=S[O+2]+(R&gt[C]),R>>=C,D-=C;D<15;)N--,R|=(v.read_byte(I++)&255)<<D,D+=8;x=R&te,S=E,A=_,O=(A+x)*3,C=S[O];do if(R>>=S[O+1],D-=S[O+1],C&16){for(C&=15;D<C;)N--,R|=(v.read_byte(I++)&255)<<D,D+=8;if(J=S[O+2]+(R&gt[C]),R>>=C,D-=C,F-=j,B>=J)L=B-J,B-L>0&&2>B-L?(T.win[B++]=T.win[L++],T.win[B++]=T.win[L++],j-=2):(T.win.set(T.win.subarray(L,L+2),B),B+=2,L+=2,j-=2);else{L=B-J;do L+=T.end;while(L<0);if(C=T.end-L,j>C){if(j-=C,B-L>0&&C>B-L)do T.win[B++]=T.win[L++];while(--C!==0);else T.win.set(T.win.subarray(L,L+C),B),B+=C,L+=C,C=0;L=0}}if(B-L>0&&j>B-L)do T.win[B++]=T.win[L++];while(--j!==0);else T.win.set(T.win.subarray(L,L+j),B),B+=j,L+=j,j=0;break}else if(!(C&64))x+=S[O+2],x+=R&gt[C],O=(A+x)*3,C=S[O];else return v.msg="invalid distance code",j=v.avail_in-N,j=D>>3<j?D>>3:j,N+=j,I-=j,D-=j<<3,T.bitb=R,T.bitk=D,v.avail_in=N,v.total_in+=I-v.next_in_index,v.next_in_index=I,T.write=B,-3;while(!0);break}if(C&64)return C&32?(j=v.avail_in-N,j=D>>3<j?D>>3:j,N+=j,I-=j,D-=j<<3,T.bitb=R,T.bitk=D,v.avail_in=N,v.total_in+=I-v.next_in_index,v.next_in_index=I,T.write=B,1):(v.msg="invalid literal/length code",j=v.avail_in-N,j=D>>3<j?D>>3:j,N+=j,I-=j,D-=j<<3,T.bitb=R,T.bitk=D,v.avail_in=N,v.total_in+=I-v.next_in_index,v.next_in_index=I,T.write=B,-3);if(x+=S[O+2],x+=R&gt[C],O=(A+x)*3,(C=S[O])===0){R>>=S[O+1],D-=S[O+1],T.win[B++]=S[O+2],F--;break}}while(!0)}while(F>=258&&N>=10);return j=v.avail_in-N,j=D>>3<j?D>>3:j,N+=j,I-=j,D-=j<<3,T.bitb=R,T.bitk=D,v.avail_in=N,v.total_in+=I-v.next_in_index,v.next_in_index=I,T.write=B,0}t.init=function(m,f,y,w,E,_){e=si,c=m,u=f,p=y,d=w,h=E,b=_,r=null},t.proc=function(m,f,y){let w,E,_,T=0,v=0,x=0,S,A,C,R;for(x=f.next_in_index,S=f.avail_in,T=m.bitb,v=m.bitk,A=m.write,C=A<m.read?m.read-A-1:m.end-A;;)switch(e){case si:if(C>=258&&S>=10&&(m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=A,y=g(c,u,p,d,h,b,m,f),x=f.next_in_index,S=f.avail_in,T=m.bitb,v=m.bitk,A=m.write,C=A<m.read?m.read-A-1:m.end-A,y!=0)){e=y==1?Aa:li;break}a=c,r=p,i=d,e=gl;case gl:for(w=a;v<w;){if(S!==0)y=0;else return m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=A,m.inflate_flush(f,y);S--,T|=(f.read_byte(x++)&255)<<v,v+=8}if(E=(i+(T&gt[w]))*3,T>>>=r[E+1],v-=r[E+1],_=r[E],_===0){o=r[E+2],e=xl;break}if(_&16){s=_&15,n=r[E+2],e=bl;break}if(!(_&64)){a=_,i=E/3+r[E+2];break}if(_&32){e=Aa;break}return e=li,f.msg="invalid literal/length code",y=-3,m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=A,m.inflate_flush(f,y);case bl:for(w=s;v<w;){if(S!==0)y=0;else return m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=A,m.inflate_flush(f,y);S--,T|=(f.read_byte(x++)&255)<<v,v+=8}n+=T&gt[w],T>>=w,v-=w,a=u,r=h,i=b,e=yl;case yl:for(w=a;v<w;){if(S!==0)y=0;else return m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=A,m.inflate_flush(f,y);S--,T|=(f.read_byte(x++)&255)<<v,v+=8}if(E=(i+(T&gt[w]))*3,T>>=r[E+1],v-=r[E+1],_=r[E],_&16){s=_&15,l=r[E+2],e=wl;break}if(!(_&64)){a=_,i=E/3+r[E+2];break}return e=li,f.msg="invalid distance code",y=-3,m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=A,m.inflate_flush(f,y);case wl:for(w=s;v<w;){if(S!==0)y=0;else return m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=A,m.inflate_flush(f,y);S--,T|=(f.read_byte(x++)&255)<<v,v+=8}l+=T&gt[w],T>>=w,v-=w,e=vl;case vl:for(R=A-l;R<0;)R+=m.end;for(;n!==0;){if(C===0&&(A==m.end&&m.read!==0&&(A=0,C=A<m.read?m.read-A-1:m.end-A),C===0&&(m.write=A,y=m.inflate_flush(f,y),A=m.write,C=A<m.read?m.read-A-1:m.end-A,A==m.end&&m.read!==0&&(A=0,C=A<m.read?m.read-A-1:m.end-A),C===0)))return m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=A,m.inflate_flush(f,y);m.win[A++]=m.win[R++],C--,R==m.end&&(R=0),n--}e=si;break;case xl:if(C===0&&(A==m.end&&m.read!==0&&(A=0,C=A<m.read?m.read-A-1:m.end-A),C===0&&(m.write=A,y=m.inflate_flush(f,y),A=m.write,C=A<m.read?m.read-A-1:m.end-A,A==m.end&&m.read!==0&&(A=0,C=A<m.read?m.read-A-1:m.end-A),C===0)))return m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=A,m.inflate_flush(f,y);y=0,m.win[A++]=o,C--,e=si;break;case Aa:if(v>7&&(v-=8,S++,x--),m.write=A,y=m.inflate_flush(f,y),A=m.write,C=A<m.read?m.read-A-1:m.end-A,m.read!=m.write)return m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=A,m.inflate_flush(f,y);e=Tl;case Tl:return y=1,m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=A,m.inflate_flush(f,y);case li:return y=-3,m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=A,m.inflate_flush(f,y);default:return y=-2,m.bitb=T,m.bitk=v,f.avail_in=S,f.total_in+=x-f.next_in_index,f.next_in_index=x,m.write=A,m.inflate_flush(f,y)}},t.free=function(){}}var _l=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],On=0,ka=1,Sl=2,Al=3,kl=4,El=5,ci=6,ui=7,Cl=8,Sn=9;function $f(t,e){let n=this,r=On,i=0,a=0,o=0,s,l=[0],c=[0],u=new Wf,p=0,d=new Int32Array(ic*3),h=0,b=new Pa;n.bitk=0,n.bitb=0,n.win=new Uint8Array(e),n.end=e,n.read=0,n.write=0,n.reset=function(g,m){m&&(m[0]=h),r==ci&&u.free(g),r=On,n.bitk=0,n.bitb=0,n.read=n.write=0},n.reset(t,null),n.inflate_flush=function(g,m){let f,y,w;return y=g.next_out_index,w=n.read,f=(w<=n.write?n.write:n.end)-w,f>g.avail_out&&(f=g.avail_out),f!==0&&m==-5&&(m=0),g.avail_out-=f,g.total_out+=f,g.next_out.set(n.win.subarray(w,w+f),y),y+=f,w+=f,w==n.end&&(w=0,n.write==n.end&&(n.write=0),f=n.write-w,f>g.avail_out&&(f=g.avail_out),f!==0&&m==-5&&(m=0),g.avail_out-=f,g.total_out+=f,g.next_out.set(n.win.subarray(w,w+f),y),y+=f,w+=f),g.next_out_index=y,n.read=w,m},n.proc=function(g,m){let f,y,w,E,_,T,v,x;for(E=g.next_in_index,_=g.avail_in,y=n.bitb,w=n.bitk,T=n.write,v=T<n.read?n.read-T-1:n.end-T;;){let S,A,C,R,D,I,N,B;switch(r){case On:for(;w<3;){if(_!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);_--,y|=(g.read_byte(E++)&255)<<w,w+=8}switch(f=y&7,p=f&1,f>>>1){case 0:y>>>=3,w-=3,f=w&7,y>>>=f,w-=f,r=ka;break;case 1:S=[],A=[],C=[[]],R=[[]],Pa.inflate_trees_fixed(S,A,C,R),u.init(S[0],A[0],C[0],0,R[0],0),y>>>=3,w-=3,r=ci;break;case 2:y>>>=3,w-=3,r=Al;break;case 3:return y>>>=3,w-=3,r=Sn,g.msg="invalid block type",m=-3,n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m)}break;case ka:for(;w<32;){if(_!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);_--,y|=(g.read_byte(E++)&255)<<w,w+=8}if((~y>>>16&65535)!=(y&65535))return r=Sn,g.msg="invalid stored block lengths",m=-3,n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);i=y&65535,y=w=0,r=i!==0?Sl:p!==0?ui:On;break;case Sl:if(_===0||v===0&&(T==n.end&&n.read!==0&&(T=0,v=T<n.read?n.read-T-1:n.end-T),v===0&&(n.write=T,m=n.inflate_flush(g,m),T=n.write,v=T<n.read?n.read-T-1:n.end-T,T==n.end&&n.read!==0&&(T=0,v=T<n.read?n.read-T-1:n.end-T),v===0)))return n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);if(m=0,f=i,f>_&&(f=_),f>v&&(f=v),n.win.set(g.read_buf(E,f),T),E+=f,_-=f,T+=f,v-=f,(i-=f)!==0)break;r=p!==0?ui:On;break;case Al:for(;w<14;){if(_!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);_--,y|=(g.read_byte(E++)&255)<<w,w+=8}if(a=f=y&16383,(f&31)>29||(f>>5&31)>29)return r=Sn,g.msg="too many length or distance symbols",m=-3,n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);if(f=258+(f&31)+(f>>5&31),!s||s.length<f)s=[];else for(x=0;x<f;x++)s[x]=0;y>>>=14,w-=14,o=0,r=kl;case kl:for(;o<4+(a>>>10);){for(;w<3;){if(_!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);_--,y|=(g.read_byte(E++)&255)<<w,w+=8}s[_l[o++]]=y&7,y>>>=3,w-=3}for(;o<19;)s[_l[o++]]=0;if(l[0]=7,f=b.inflate_trees_bits(s,l,c,d,g),f!=0)return m=f,m==-3&&(s=null,r=Sn),n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);o=0,r=El;case El:for(;f=a,!(o>=258+(f&31)+(f>>5&31));){let F,W;for(f=l[0];w<f;){if(_!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);_--,y|=(g.read_byte(E++)&255)<<w,w+=8}if(f=d[(c[0]+(y&gt[f]))*3+1],W=d[(c[0]+(y&gt[f]))*3+2],W<16)y>>>=f,w-=f,s[o++]=W;else{for(x=W==18?7:W-14,F=W==18?11:3;w<f+x;){if(_!==0)m=0;else return n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);_--,y|=(g.read_byte(E++)&255)<<w,w+=8}if(y>>>=f,w-=f,F+=y&gt[x],y>>>=x,w-=x,x=o,f=a,x+F>258+(f&31)+(f>>5&31)||W==16&&x<1)return s=null,r=Sn,g.msg="invalid bit length repeat",m=-3,n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);W=W==16?s[x-1]:0;do s[x++]=W;while(--F!==0);o=x}}if(c[0]=-1,D=[],I=[],N=[],B=[],D[0]=9,I[0]=6,f=a,f=b.inflate_trees_dynamic(257+(f&31),1+(f>>5&31),s,D,I,N,B,d,g),f!=0)return f==-3&&(s=null,r=Sn),m=f,n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);u.init(D[0],I[0],d,N[0],d,B[0]),r=ci;case ci:if(n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,(m=u.proc(n,g,m))!=1)return n.inflate_flush(g,m);if(m=0,u.free(g),E=g.next_in_index,_=g.avail_in,y=n.bitb,w=n.bitk,T=n.write,v=T<n.read?n.read-T-1:n.end-T,p===0){r=On;break}r=ui;case ui:if(n.write=T,m=n.inflate_flush(g,m),T=n.write,v=T<n.read?n.read-T-1:n.end-T,n.read!=n.write)return n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);r=Cl;case Cl:return m=1,n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);case Sn:return m=-3,n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m);default:return m=-2,n.bitb=y,n.bitk=w,g.avail_in=_,g.total_in+=E-g.next_in_index,g.next_in_index=E,n.write=T,n.inflate_flush(g,m)}}},n.free=function(g){n.reset(g,null),n.win=null,d=null},n.set_dictionary=function(g,m,f){n.win.set(g.subarray(m,m+f),0),n.read=n.write=f},n.sync_point=function(){return r==ka?1:0}}var jf=32,qf=8,Kf=0,Ll=1,Dl=2,Rl=3,Nl=4,Ol=5,Ea=6,ur=7,Pl=12,un=13,Gf=[0,0,255,255];function Vf(){let t=this;t.mode=0,t.method=0,t.was=[0],t.need=0,t.marker=0,t.wbits=0;function e(n){return!n||!n.istate?-2:(n.total_in=n.total_out=0,n.msg=null,n.istate.mode=ur,n.istate.blocks.reset(n,null),0)}t.inflateEnd=function(n){return t.blocks&&t.blocks.free(n),t.blocks=null,0},t.inflateInit=function(n,r){return n.msg=null,t.blocks=null,r<8||r>15?(t.inflateEnd(n),-2):(t.wbits=r,n.istate.blocks=new $f(n,1<<r),e(n),0)},t.inflate=function(n,r){let i,a;if(!n||!n.istate||!n.next_in)return-2;let o=n.istate;for(r=r==Of?-5:0,i=-5;;)switch(o.mode){case Kf:if(n.avail_in===0)return i;if(i=r,n.avail_in--,n.total_in++,((o.method=n.read_byte(n.next_in_index++))&15)!=qf){o.mode=un,n.msg="unknown compression method",o.marker=5;break}if((o.method>>4)+8>o.wbits){o.mode=un,n.msg="invalid win size",o.marker=5;break}o.mode=Ll;case Ll:if(n.avail_in===0)return i;if(i=r,n.avail_in--,n.total_in++,a=n.read_byte(n.next_in_index++)&255,((o.method<<8)+a)%31!==0){o.mode=un,n.msg="incorrect header check",o.marker=5;break}if(!(a&jf)){o.mode=ur;break}o.mode=Dl;case Dl:if(n.avail_in===0)return i;i=r,n.avail_in--,n.total_in++,o.need=(n.read_byte(n.next_in_index++)&255)<<24&4278190080,o.mode=Rl;case Rl:if(n.avail_in===0)return i;i=r,n.avail_in--,n.total_in++,o.need+=(n.read_byte(n.next_in_index++)&255)<<16&16711680,o.mode=Nl;case Nl:if(n.avail_in===0)return i;i=r,n.avail_in--,n.total_in++,o.need+=(n.read_byte(n.next_in_index++)&255)<<8&65280,o.mode=Ol;case Ol:return n.avail_in===0?i:(i=r,n.avail_in--,n.total_in++,o.need+=n.read_byte(n.next_in_index++)&255,o.mode=Ea,2);case Ea:return o.mode=un,n.msg="need dictionary",o.marker=0,-2;case ur:if(i=o.blocks.proc(n,i),i==-3){o.mode=un,o.marker=0;break}if(i==0&&(i=r),i!=1)return i;i=r,o.blocks.reset(n,o.was),o.mode=Pl;case Pl:return n.avail_in=0,1;case un:return-3;default:return-2}},t.inflateSetDictionary=function(n,r,i){let a=0,o=i;if(!n||!n.istate||n.istate.mode!=Ea)return-2;let s=n.istate;return o>=1<<s.wbits&&(o=(1<<s.wbits)-1,a=i-o),s.blocks.set_dictionary(r,a,o),s.mode=ur,0},t.inflateSync=function(n){let r,i,a,o,s;if(!n||!n.istate)return-2;let l=n.istate;if(l.mode!=un&&(l.mode=un,l.marker=0),(r=n.avail_in)===0)return-5;for(i=n.next_in_index,a=l.marker;r!==0&&a<4;)n.read_byte(i)==Gf[a]?a++:n.read_byte(i)!==0?a=0:a=4-a,i++,r--;return n.total_in+=i-n.next_in_index,n.next_in_index=i,n.avail_in=r,l.marker=a,a!=4?-3:(o=n.total_in,s=n.total_out,e(n),n.total_in=o,n.total_out=s,l.mode=ur,0)},t.inflateSyncPoint=function(n){return!n||!n.istate||!n.istate.blocks?-2:n.istate.blocks.sync_point()}}function ac(){}ac.prototype={inflateInit(t){let e=this;return e.istate=new Vf,t||(t=15),e.istate.inflateInit(e,t)},inflate(t){let e=this;return e.istate?e.istate.inflate(e,t):-2},inflateEnd(){let t=this;if(!t.istate)return-2;let e=t.istate.inflateEnd(t);return t.istate=null,e},inflateSync(){let t=this;return t.istate?t.istate.inflateSync(t):-2},inflateSetDictionary(t,e){let n=this;return n.istate?n.istate.inflateSetDictionary(n,t,e):-2},read_byte(t){return this.next_in[t]},read_buf(t,e){return this.next_in.subarray(t,t+e)}};function Xf(t){let e=this,n=new ac,r=t&&t.chunkSize?Math.floor(t.chunkSize*2):128*1024,i=Nf,a=new Uint8Array(r),o=!1;n.inflateInit(),n.next_out=a,e.append=function(s,l){let c=[],u,p,d=0,h=0,b=0;if(s.length!==0){n.next_in_index=0,n.next_in=s,n.avail_in=s.length;do{if(n.next_out_index=0,n.avail_out=r,n.avail_in===0&&!o&&(n.next_in_index=0,o=!0),u=n.inflate(i),o&&u===-5){if(n.avail_in!==0)throw new Error("inflating: bad input")}else if(u!==0&&u!==1)throw new Error("inflating: "+n.msg);if((o||u===1)&&n.avail_in===s.length)throw new Error("inflating: bad input");n.next_out_index&&(n.next_out_index===r?c.push(new Uint8Array(a)):c.push(a.slice(0,n.next_out_index))),b+=n.next_out_index,l&&n.next_in_index>0&&n.next_in_index!=d&&(l(n.next_in_index),d=n.next_in_index)}while(n.avail_in>0||n.avail_out===0);return c.length>1?(p=new Uint8Array(b),c.forEach(function(g){p.set(g,h),h+=g.length})):p=c[0]||new Uint8Array,p}},e.flush=function(){n.inflateEnd()}}var hi="/",Ml=new Date(2107,11,31),Il=new Date(1980,0,1),Be=void 0,gi="undefined",oc="function",Fl=class{constructor(t){return class extends TransformStream{constructor(e,n){let r=new t(n);super({transform(i,a){a.enqueue(r.append(i))},flush(i){let a=r.flush();a&&i.enqueue(a)}})}}}},Yf=64,sc=2;try{typeof navigator!=gi&&navigator.hardwareConcurrency&&(sc=navigator.hardwareConcurrency)}catch{}var Zf={chunkSize:512*1024,maxWorkers:sc,terminateWorkerTimeout:5e3,useWebWorkers:!0,useCompressionStream:!0,workerScripts:Be,CompressionStreamNative:typeof CompressionStream!=gi&&CompressionStream,DecompressionStreamNative:typeof DecompressionStream!=gi&&DecompressionStream},fn=Object.assign({},Zf);function Ka(){return fn}function lc(t){return Math.max(t.chunkSize,Yf)}function _i(t){let{baseURL:e,chunkSize:n,maxWorkers:r,terminateWorkerTimeout:i,useCompressionStream:a,useWebWorkers:o,Deflate:s,Inflate:l,CompressionStream:c,DecompressionStream:u,workerScripts:p}=t;if(dn("baseURL",e),dn("chunkSize",n),dn("maxWorkers",r),dn("terminateWorkerTimeout",i),dn("useCompressionStream",a),dn("useWebWorkers",o),s&&(fn.CompressionStream=new Fl(s)),l&&(fn.DecompressionStream=new Fl(l)),dn("CompressionStream",c),dn("DecompressionStream",u),p!==Be){let{deflate:d,inflate:h}=p;if((d||h)&&(fn.workerScripts||(fn.workerScripts={})),d){if(!Array.isArray(d))throw new Error("workerScripts.deflate must be an array");fn.workerScripts.deflate=d}if(h){if(!Array.isArray(h))throw new Error("workerScripts.inflate must be an array");fn.workerScripts.inflate=h}}}function dn(t,e){e!==Be&&(fn[t]=e)}function Qf(){return"application/octet-stream"}var cc=[];for(let t=0;t<256;t++){let e=t;for(let n=0;n<8;n++)e&1?e=e>>>1^3988292384:e=e>>>1;cc[t]=e}var bi=class{constructor(t){this.crc=t||-1}append(t){let e=this.crc|0;for(let n=0,r=t.length|0;n<r;n++)e=e>>>8^cc[(e^t[n])&255];this.crc=e}get(){return~this.crc}},uc=class extends TransformStream{constructor(){let t=new bi;super({transform(e){t.append(e)},flush(e){let n=new Uint8Array(4);new DataView(n.buffer).setUint32(0,t.get()),e.enqueue(n)}})}};function Ma(t){if(typeof TextEncoder>"u"){t=unescape(encodeURIComponent(t));let e=new Uint8Array(t.length);for(let n=0;n<e.length;n++)e[n]=t.charCodeAt(n);return e}else return new TextEncoder().encode(t)}var ot={concat(t,e){if(t.length===0||e.length===0)return t.concat(e);let n=t[t.length-1],r=ot.getPartial(n);return r===32?t.concat(e):ot._shiftRight(e,r,n|0,t.slice(0,t.length-1))},bitLength(t){let e=t.length;if(e===0)return 0;let n=t[e-1];return(e-1)*32+ot.getPartial(n)},clamp(t,e){if(t.length*32<e)return t;t=t.slice(0,Math.ceil(e/32));let n=t.length;return e=e&31,n>0&&e&&(t[n-1]=ot.partial(e,t[n-1]&2147483648>>e-1,1)),t},partial(t,e,n){return t===32?e:(n?e|0:e<<32-t)+t*1099511627776},getPartial(t){return Math.round(t/1099511627776)||32},_shiftRight(t,e,n,r){for(r===void 0&&(r=[]);e>=32;e-=32)r.push(n),n=0;if(e===0)return r.concat(t);for(let o=0;o<t.length;o++)r.push(n|t[o]>>>e),n=t[o]<<32-e;let i=t.length?t[t.length-1]:0,a=ot.getPartial(i);return r.push(ot.partial(e+a&31,e+a>32?n:r.pop(),1)),r}},yi={bytes:{fromBits(t){let e=ot.bitLength(t)/8,n=new Uint8Array(e),r;for(let i=0;i<e;i++)i&3||(r=t[i/4]),n[i]=r>>>24,r<<=8;return n},toBits(t){let e=[],n,r=0;for(n=0;n<t.length;n++)r=r<<8|t[n],(n&3)===3&&(e.push(r),r=0);return n&3&&e.push(ot.partial(8*(n&3),r)),e}}},dc={};dc.sha1=class{constructor(t){let e=this;e.blockSize=512,e._init=[1732584193,4023233417,2562383102,271733878,3285377520],e._key=[1518500249,1859775393,2400959708,3395469782],t?(e._h=t._h.slice(0),e._buffer=t._buffer.slice(0),e._length=t._length):e.reset()}reset(){let t=this;return t._h=t._init.slice(0),t._buffer=[],t._length=0,t}update(t){let e=this;typeof t=="string"&&(t=yi.utf8String.toBits(t));let n=e._buffer=ot.concat(e._buffer,t),r=e._length,i=e._length=r+ot.bitLength(t);if(i>9007199254740991)throw new Error("Cannot hash more than 2^53 - 1 bits");let a=new Uint32Array(n),o=0;for(let s=e.blockSize+r-(e.blockSize+r&e.blockSize-1);s<=i;s+=e.blockSize)e._block(a.subarray(16*o,16*(o+1))),o+=1;return n.splice(0,16*o),e}finalize(){let t=this,e=t._buffer,n=t._h;e=ot.concat(e,[ot.partial(1,1)]);for(let r=e.length+2;r&15;r++)e.push(0);for(e.push(Math.floor(t._length/4294967296)),e.push(t._length|0);e.length;)t._block(e.splice(0,16));return t.reset(),n}_f(t,e,n,r){if(t<=19)return e&n|~e&r;if(t<=39)return e^n^r;if(t<=59)return e&n|e&r|n&r;if(t<=79)return e^n^r}_S(t,e){return e<<t|e>>>32-t}_block(t){let e=this,n=e._h,r=Array(80);for(let c=0;c<16;c++)r[c]=t[c];let i=n[0],a=n[1],o=n[2],s=n[3],l=n[4];for(let c=0;c<=79;c++){c>=16&&(r[c]=e._S(1,r[c-3]^r[c-8]^r[c-14]^r[c-16]));let u=e._S(5,i)+e._f(c,a,o,s)+l+r[c]+e._key[Math.floor(c/20)]|0;l=s,s=o,o=e._S(30,a),a=i,i=u}n[0]=n[0]+i|0,n[1]=n[1]+a|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[4]+l|0}};var pc={};pc.aes=class{constructor(t){let e=this;e._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],e._tables[0][0][0]||e._precompute();let n=e._tables[0][4],r=e._tables[1],i=t.length,a,o,s,l=1;if(i!==4&&i!==6&&i!==8)throw new Error("invalid aes key size");for(e._key=[o=t.slice(0),s=[]],a=i;a<4*i+28;a++){let c=o[a-1];(a%i===0||i===8&&a%i===4)&&(c=n[c>>>24]<<24^n[c>>16&255]<<16^n[c>>8&255]<<8^n[c&255],a%i===0&&(c=c<<8^c>>>24^l<<24,l=l<<1^(l>>7)*283)),o[a]=o[a-i]^c}for(let c=0;a;c++,a--){let u=o[c&3?a:a-4];a<=4||c<4?s[c]=u:s[c]=r[0][n[u>>>24]]^r[1][n[u>>16&255]]^r[2][n[u>>8&255]]^r[3][n[u&255]]}}encrypt(t){return this._crypt(t,0)}decrypt(t){return this._crypt(t,1)}_precompute(){let t=this._tables[0],e=this._tables[1],n=t[4],r=e[4],i=[],a=[],o,s,l,c;for(let u=0;u<256;u++)a[(i[u]=u<<1^(u>>7)*283)^u]=u;for(let u=o=0;!n[u];u^=s||1,o=a[o]||1){let p=o^o<<1^o<<2^o<<3^o<<4;p=p>>8^p&255^99,n[u]=p,r[p]=u,c=i[l=i[s=i[u]]];let d=c*16843009^l*65537^s*257^u*16843008,h=i[p]*257^p*16843008;for(let b=0;b<4;b++)t[b][u]=h=h<<24^h>>>8,e[b][p]=d=d<<24^d>>>8}for(let u=0;u<5;u++)t[u]=t[u].slice(0),e[u]=e[u].slice(0)}_crypt(t,e){if(t.length!==4)throw new Error("invalid aes block size");let n=this._key[e],r=n.length/4-2,i=[0,0,0,0],a=this._tables[e],o=a[0],s=a[1],l=a[2],c=a[3],u=a[4],p=t[0]^n[0],d=t[e?3:1]^n[1],h=t[2]^n[2],b=t[e?1:3]^n[3],g=4,m,f,y;for(let w=0;w<r;w++)m=o[p>>>24]^s[d>>16&255]^l[h>>8&255]^c[b&255]^n[g],f=o[d>>>24]^s[h>>16&255]^l[b>>8&255]^c[p&255]^n[g+1],y=o[h>>>24]^s[b>>16&255]^l[p>>8&255]^c[d&255]^n[g+2],b=o[b>>>24]^s[p>>16&255]^l[d>>8&255]^c[h&255]^n[g+3],g+=4,p=m,d=f,h=y;for(let w=0;w<4;w++)i[e?3&-w:w]=u[p>>>24]<<24^u[d>>16&255]<<16^u[h>>8&255]<<8^u[b&255]^n[g++],m=p,p=d,d=h,h=b,b=m;return i}};var Jf={getRandomValues(t){let e=new Uint32Array(t.buffer),n=r=>{let i=987654321,a=4294967295;return function(){return i=36969*(i&65535)+(i>>16)&a,r=18e3*(r&65535)+(r>>16)&a,(((i<<16)+r&a)/4294967296+.5)*(Math.random()>.5?1:-1)}};for(let r=0,i;r<t.length;r+=4){let a=n((i||Math.random())*4294967296);i=a()*987654071,e[r/4]=a()*4294967296|0}return t}},hc={};hc.ctrGladman=class{constructor(t,e){this._prf=t,this._initIv=e,this._iv=e}reset(){this._iv=this._initIv}update(t){return this.calculate(this._prf,t,this._iv)}incWord(t){if((t>>24&255)===255){let e=t>>16&255,n=t>>8&255,r=t&255;e===255?(e=0,n===255?(n=0,r===255?r=0:++r):++n):++e,t=0,t+=e<<16,t+=n<<8,t+=r}else t+=1<<24;return t}incCounter(t){(t[0]=this.incWord(t[0]))===0&&(t[1]=this.incWord(t[1]))}calculate(t,e,n){let r;if(!(r=e.length))return[];let i=ot.bitLength(e);for(let a=0;a<r;a+=4){this.incCounter(n);let o=t.encrypt(n);e[a]^=o[0],e[a+1]^=o[1],e[a+2]^=o[2],e[a+3]^=o[3]}return ot.clamp(e,i)}};var kn={importKey(t){return new kn.hmacSha1(yi.bytes.toBits(t))},pbkdf2(t,e,n,r){if(n=n||1e4,r<0||n<0)throw new Error("invalid params to pbkdf2");let i=(r>>5)+1<<2,a,o,s,l,c,u=new ArrayBuffer(i),p=new DataView(u),d=0,h=ot;for(e=yi.bytes.toBits(e),c=1;d<(i||1);c++){for(a=o=t.encrypt(h.concat(e,[c])),s=1;s<n;s++)for(o=t.encrypt(o),l=0;l<o.length;l++)a[l]^=o[l];for(s=0;d<(i||1)&&s<a.length;s++)p.setInt32(d,a[s]),d+=4}return u.slice(0,r/8)}};kn.hmacSha1=class{constructor(t){let e=this,n=e._hash=dc.sha1,r=[[],[]];e._baseHash=[new n,new n];let i=e._baseHash[0].blockSize/32;t.length>i&&(t=new n().update(t).finalize());for(let a=0;a<i;a++)r[0][a]=t[a]^909522486,r[1][a]=t[a]^1549556828;e._baseHash[0].update(r[0]),e._baseHash[1].update(r[1]),e._resultHash=new n(e._baseHash[0])}reset(){let t=this;t._resultHash=new t._hash(t._baseHash[0]),t._updated=!1}update(t){let e=this;e._updated=!0,e._resultHash.update(t)}digest(){let t=this,e=t._resultHash.finalize(),n=new t._hash(t._baseHash[1]).update(e).finalize();return t.reset(),n}encrypt(t){if(this._updated)throw new Error("encrypt on already updated hmac called!");return this.update(t),this.digest(t)}};var em=typeof crypto<"u"&&typeof crypto.getRandomValues=="function",Ga="Invalid password",Va="Invalid signature";function fc(t){return em?crypto.getRandomValues(t):Jf.getRandomValues(t)}var Pn=16,tm="raw",mc={name:"PBKDF2"},nm={name:"HMAC"},rm="SHA-1",im=Object.assign({hash:nm},mc),Ia=Object.assign({iterations:1e3,hash:{name:rm}},mc),am=["deriveBits"],pr=[8,12,16],dr=[16,24,32],pn=10,om=[0,0,0,0],gc="undefined",bc="function",Si=typeof crypto!=gc,gr=Si&&crypto.subtle,yc=Si&&typeof gr!=gc,$t=yi.bytes,sm=pc.aes,lm=hc.ctrGladman,cm=kn.hmacSha1,Bl=Si&&yc&&typeof gr.importKey==bc,Ul=Si&&yc&&typeof gr.deriveBits==bc,um=class extends TransformStream{constructor({password:t,signed:e,encryptionStrength:n}){super({start(){Object.assign(this,{ready:new Promise(r=>this.resolveReady=r),password:t,signed:e,strength:n-1,pending:new Uint8Array})},async transform(r,i){let a=this,{password:o,strength:s,resolveReady:l,ready:c}=a;o?(await pm(a,s,o,At(r,0,pr[s]+2)),r=At(r,pr[s]+2),l()):await c;let u=new Uint8Array(r.length-pn-(r.length-pn)%Pn);i.enqueue(wc(a,r,u,0,pn,!0))},async flush(r){let{signed:i,ctr:a,hmac:o,pending:s,ready:l}=this;await l;let c=At(s,0,s.length-pn),u=At(s,s.length-pn),p=new Uint8Array;if(c.length){let d=fr($t,c);o.update(d);let h=a.update(d);p=hr($t,h)}if(i){let d=At(hr($t,o.digest()),0,pn);for(let h=0;h<pn;h++)if(d[h]!=u[h])throw new Error(Va)}r.enqueue(p)}})}},dm=class extends TransformStream{constructor({password:t,encryptionStrength:e}){let n;super({start(){Object.assign(this,{ready:new Promise(r=>this.resolveReady=r),password:t,strength:e-1,pending:new Uint8Array})},async transform(r,i){let a=this,{password:o,strength:s,resolveReady:l,ready:c}=a,u=new Uint8Array;o?(u=await hm(a,s,o),l()):await c;let p=new Uint8Array(u.length+r.length-r.length%Pn);p.set(u,0),i.enqueue(wc(a,r,p,u.length,0))},async flush(r){let{ctr:i,hmac:a,pending:o,ready:s}=this;await s;let l=new Uint8Array;if(o.length){let c=i.update(fr($t,o));a.update(c),l=hr($t,c)}n.signature=hr($t,a.digest()).slice(0,pn),r.enqueue(Xa(l,n.signature))}}),n=this}};function wc(t,e,n,r,i,a){let{ctr:o,hmac:s,pending:l}=t,c=e.length-i;l.length&&(e=Xa(l,e),n=gm(n,c-c%Pn));let u;for(u=0;u<=c-Pn;u+=Pn){let p=fr($t,At(e,u,u+Pn));a&&s.update(p);let d=o.update(p);a||s.update(d),n.set(hr($t,d),u+r)}return t.pending=At(e,u),n}async function pm(t,e,n,r){let i=await vc(t,e,n,At(r,0,pr[e])),a=At(r,pr[e]);if(i[0]!=a[0]||i[1]!=a[1])throw new Error(Ga)}async function hm(t,e,n){let r=fc(new Uint8Array(pr[e])),i=await vc(t,e,n,r);return Xa(r,i)}async function vc(t,e,n,r){t.password=null;let i=Ma(n),a=await fm(tm,i,im,!1,am),o=await mm(Object.assign({salt:r},Ia),a,8*(dr[e]*2+2)),s=new Uint8Array(o),l=fr($t,At(s,0,dr[e])),c=fr($t,At(s,dr[e],dr[e]*2)),u=At(s,dr[e]*2);return Object.assign(t,{keys:{key:l,authentication:c,passwordVerification:u},ctr:new lm(new sm(l),Array.from(om)),hmac:new cm(c)}),u}async function fm(t,e,n,r,i){if(Bl)try{return await gr.importKey(t,e,n,r,i)}catch{return Bl=!1,kn.importKey(e)}else return kn.importKey(e)}async function mm(t,e,n){if(Ul)try{return await gr.deriveBits(t,e,n)}catch{return Ul=!1,kn.pbkdf2(e,t.salt,Ia.iterations,n)}else return kn.pbkdf2(e,t.salt,Ia.iterations,n)}function Xa(t,e){let n=t;return t.length+e.length&&(n=new Uint8Array(t.length+e.length),n.set(t,0),n.set(e,t.length)),n}function gm(t,e){if(e&&e>t.length){let n=t;t=new Uint8Array(e),t.set(n,0)}return t}function At(t,e,n){return t.subarray(e,n)}function hr(t,e){return t.fromBits(e)}function fr(t,e){return t.toBits(e)}var Mn=12,bm=class extends TransformStream{constructor({password:t,passwordVerification:e}){super({start(){Object.assign(this,{password:t,passwordVerification:e}),xc(this,t)},transform(n,r){let i=this;if(i.password){let a=zl(i,n.subarray(0,Mn));if(i.password=null,a[Mn-1]!=i.passwordVerification)throw new Error(Ga);n=n.subarray(Mn)}r.enqueue(zl(i,n))}})}},ym=class extends TransformStream{constructor({password:t,passwordVerification:e}){super({start(){Object.assign(this,{password:t,passwordVerification:e}),xc(this,t)},transform(n,r){let i=this,a,o;if(i.password){i.password=null;let s=fc(new Uint8Array(Mn));s[Mn-1]=i.passwordVerification,a=new Uint8Array(n.length+s.length),a.set(Hl(i,s),0),o=Mn}else a=new Uint8Array(n.length),o=0;a.set(Hl(i,n),o),r.enqueue(a)}})}};function zl(t,e){let n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=Tc(t)^e[r],Ya(t,n[r]);return n}function Hl(t,e){let n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=Tc(t)^e[r],Ya(t,e[r]);return n}function xc(t,e){let n=[305419896,591751049,878082192];Object.assign(t,{keys:n,crcKey0:new bi(n[0]),crcKey2:new bi(n[2])});for(let r=0;r<e.length;r++)Ya(t,e.charCodeAt(r))}function Ya(t,e){let[n,r,i]=t.keys;t.crcKey0.append([e]),n=~t.crcKey0.get(),r=Wl(Math.imul(Wl(r+_c(n)),134775813)+1),t.crcKey2.append([r>>>24]),i=~t.crcKey2.get(),t.keys=[n,r,i]}function Tc(t){let e=t.keys[2]|2;return _c(Math.imul(e,e^1)>>>8)}function _c(t){return t&255}function Wl(t){return t&4294967295}var $l="deflate-raw",wm=class extends TransformStream{constructor(t,{chunkSize:e,CompressionStream:n,CompressionStreamNative:r}){super({});let{compressed:i,encrypted:a,useCompressionStream:o,zipCrypto:s,signed:l,level:c}=t,u=this,p,d,h=Sc(super.readable);(!a||s)&&l&&([h,p]=h.tee(),p=jt(p,new uc)),i&&(h=kc(h,o,{level:c,chunkSize:e},r,n)),a&&(s?h=jt(h,new ym(t)):(d=new dm(t),h=jt(h,d))),Ac(u,h,async()=>{let b;a&&!s&&(b=d.signature),(!a||s)&&l&&(b=await p.getReader().read(),b=new DataView(b.value.buffer).getUint32(0)),u.signature=b})}},vm=class extends TransformStream{constructor(t,{chunkSize:e,DecompressionStream:n,DecompressionStreamNative:r}){super({});let{zipCrypto:i,encrypted:a,signed:o,signature:s,compressed:l,useCompressionStream:c}=t,u,p,d=Sc(super.readable);a&&(i?d=jt(d,new bm(t)):(p=new um(t),d=jt(d,p))),l&&(d=kc(d,c,{chunkSize:e},r,n)),(!a||i)&&o&&([d,u]=d.tee(),u=jt(u,new uc)),Ac(this,d,async()=>{if((!a||i)&&o){let h=await u.getReader().read(),b=new DataView(h.value.buffer);if(s!=b.getUint32(0,!1))throw new Error(Va)}})}};function Sc(t){return jt(t,new TransformStream({transform(e,n){e&&e.length&&n.enqueue(e)}}))}function Ac(t,e,n){e=jt(e,new TransformStream({flush:n})),Object.defineProperty(t,"readable",{get(){return e}})}function kc(t,e,n,r,i){try{let a=e&&r?r:i;t=jt(t,new a($l,n))}catch(a){if(e)t=jt(t,new i($l,n));else throw a}return t}function jt(t,e){return t.pipeThrough(e)}var xm="message",Tm="start",_m="pull",jl="data",Sm="ack",Am="close",Ec="deflate",Cc="inflate",km=class extends TransformStream{constructor(t,e){super({});let n=this,{codecType:r}=t,i;r.startsWith(Ec)?i=wm:r.startsWith(Cc)&&(i=vm);let a=0,o=new i(t,e),s=super.readable,l=new TransformStream({transform(c,u){c&&c.length&&(a+=c.length,u.enqueue(c))},flush(){let{signature:c}=o;Object.assign(n,{signature:c,size:a})}});Object.defineProperty(n,"readable",{get(){return s.pipeThrough(o).pipeThrough(l)}})}},Em=typeof Worker!=gi,Ca=class{constructor(t,{readable:e,writable:n},{options:r,config:i,streamOptions:a,useWebWorkers:o,transferStreams:s,scripts:l},c){let{signal:u}=a;return Object.assign(t,{busy:!0,readable:e.pipeThrough(new Cm(e,a,i),{signal:u}),writable:n,options:Object.assign({},r),scripts:l,transferStreams:s,terminate(){let{worker:p,busy:d}=t;p&&!d&&(p.terminate(),t.interface=null)},onTaskFinished(){t.busy=!1,c(t)}}),(o&&Em?Dm:Lm)(t,i)}},Cm=class extends TransformStream{constructor(t,{onstart:e,onprogress:n,size:r,onend:i},{chunkSize:a}){let o=0;super({start(){e&&La(e,r)},async transform(s,l){o+=s.length,n&&await La(n,o,r),l.enqueue(s)},flush(){t.size=o,i&&La(i,o)}},{highWaterMark:1,size:()=>a})}};async function La(t,...e){try{await t(...e)}catch{}}function Lm(t,e){return{run:()=>Rm(t,e)}}function Dm(t,{baseURL:e,chunkSize:n}){return t.interface||Object.assign(t,{worker:Pm(t.scripts[0],e,t),interface:{run:()=>Nm(t,{chunkSize:n})}}),t.interface}async function Rm({options:t,readable:e,writable:n,onTaskFinished:r},i){let a=new km(t,i);try{await e.pipeThrough(a).pipeTo(n,{preventClose:!0,preventAbort:!0});let{signature:o,size:s}=a;return{signature:o,size:s}}finally{r()}}async function Nm(t,e){let n,r,i=new Promise((p,d)=>{n=p,r=d});Object.assign(t,{reader:null,writer:null,resolveResult:n,rejectResult:r,result:i});let{readable:a,options:o,scripts:s}=t,{writable:l,closed:c}=Om(t.writable);Fa({type:Tm,scripts:s.slice(1),options:o,config:e,readable:a,writable:l},t)||Object.assign(t,{reader:a.getReader(),writer:l.getWriter()});let u=await i;try{await l.close()}catch{}return await c,u}function Om(t){let e=t.getWriter(),n,r=new Promise(i=>n=i);return{writable:new WritableStream({async write(i){await e.ready,await e.write(i)},close(){e.releaseLock(),n()},abort(i){return e.abort(i)}}),closed:r}}var ql=!0,Kl=!0;function Pm(t,e,n){let r={type:"module"},i,a;typeof t==oc&&(t=t());try{i=new URL(t,e)}catch{i=t}if(ql)try{a=new Worker(i)}catch{ql=!1,a=new Worker(i,r)}else a=new Worker(i,r);return a.addEventListener(xm,o=>Mm(o,n)),a}function Fa(t,{worker:e,writer:n,onTaskFinished:r,transferStreams:i}){try{let{value:a,readable:o,writable:s}=t,l=[];if(a){let{buffer:c,length:u}=a;u!=c.byteLength&&(a=new Uint8Array(a)),t.value=a.buffer,l.push(t.value)}if(i&&Kl?(o&&l.push(o),s&&l.push(s)):t.readable=t.writable=null,l.length)try{return e.postMessage(t,l),!0}catch{Kl=!1,t.readable=t.writable=null,e.postMessage(t)}else e.postMessage(t)}catch(a){throw n&&n.releaseLock(),r(),a}}async function Mm({data:t},e){let{type:n,value:r,messageId:i,result:a,error:o}=t,{reader:s,writer:l,resolveResult:c,rejectResult:u,onTaskFinished:p}=e;try{if(o){let{message:h,stack:b,code:g,name:m}=o,f=new Error(h);Object.assign(f,{stack:b,code:g,name:m}),d(f)}else{if(n==_m){let{value:h,done:b}=await s.read();Fa({type:jl,value:h,done:b,messageId:i},e)}n==jl&&(await l.ready,await l.write(new Uint8Array(r)),Fa({type:Sm,messageId:i},e)),n==Am&&d(null,a)}}catch(h){d(h)}function d(h,b){h?u(h):c(b),l&&l.releaseLock(),p()}}var hn=[],Da=[],Gl=0;async function Lc(t,e){let{options:n,config:r}=e,{transferStreams:i,useWebWorkers:a,useCompressionStream:o,codecType:s,compressed:l,signed:c,encrypted:u}=n,{workerScripts:p,maxWorkers:d,terminateWorkerTimeout:h}=r;e.transferStreams=i||i===Be;let b=!l&&!c&&!u&&!e.transferStreams;e.useWebWorkers=!b&&(a||a===Be&&r.useWebWorkers),e.scripts=e.useWebWorkers&&p?p[s]:[],n.useCompressionStream=o||o===Be&&r.useCompressionStream;let g,m=hn.find(y=>!y.busy);if(m)Ba(m),g=new Ca(m,t,e,f);else if(hn.length<d){let y={indexWorker:Gl};Gl++,hn.push(y),g=new Ca(y,t,e,f)}else g=await new Promise(y=>Da.push({resolve:y,stream:t,workerOptions:e}));return g.run();function f(y){if(Da.length){let[{resolve:w,stream:E,workerOptions:_}]=Da.splice(0,1);w(new Ca(y,E,_,f))}else y.worker?(Ba(y),Number.isFinite(h)&&h>=0&&(y.terminateTimeout=setTimeout(()=>{hn=hn.filter(w=>w!=y),y.terminate()},h))):hn=hn.filter(w=>w!=y)}}function Ba(t){let{terminateTimeout:e}=t;e&&(clearTimeout(e),t.terminateTimeout=null)}function Im(){hn.forEach(t=>{Ba(t),t.terminate()})}var Dc="HTTP error ",br="HTTP Range not supported",Rc="Writer iterator completed too soon",Fm="text/plain",Bm="Content-Length",Um="Content-Range",zm="Accept-Ranges",Hm="Range",Wm="Content-Type",$m="HEAD",Za="GET",Nc="bytes",jm=64*1024,Qa="writable",Ai=class{constructor(){this.size=0}init(){this.initialized=!0}},mn=class extends Ai{get readable(){let t=this,{chunkSize:e=jm}=t,n=new ReadableStream({start(){this.chunkOffset=0},async pull(r){let{offset:i=0,size:a,diskNumberStart:o}=n,{chunkOffset:s}=this;r.enqueue(await et(t,i+s,Math.min(e,a-s),o)),s+e>a?r.close():this.chunkOffset+=e}});return n}},Ja=class extends Ai{constructor(){super();let t=this,e=new WritableStream({write(n){return t.writeUint8Array(n)}});Object.defineProperty(t,Qa,{get(){return e}})}writeUint8Array(){}},qm=class extends mn{constructor(t){super();let e=t.length;for(;t.charAt(e-1)=="=";)e--;let n=t.indexOf(",")+1;Object.assign(this,{dataURI:t,dataStart:n,size:Math.floor((e-n)*.75)})}readUint8Array(t,e){let{dataStart:n,dataURI:r}=this,i=new Uint8Array(e),a=Math.floor(t/3)*4,o=atob(r.substring(a+n,Math.ceil((t+e)/3)*4+n)),s=t-Math.floor(a/4)*3;for(let l=s;l<s+e;l++)i[l-s]=o.charCodeAt(l);return i}},Km=class extends Ja{constructor(t){super(),Object.assign(this,{data:"data:"+(t||"")+";base64,",pending:[]})}writeUint8Array(t){let e=this,n=0,r=e.pending,i=e.pending.length;for(e.pending="",n=0;n<Math.floor((i+t.length)/3)*3-i;n++)r+=String.fromCharCode(t[n]);for(;n<t.length;n++)e.pending+=String.fromCharCode(t[n]);r.length>2?e.data+=btoa(r):e.pending=r}getData(){return this.data+btoa(this.pending)}},eo=class extends mn{constructor(t){super(),Object.assign(this,{blob:t,size:t.size})}async readUint8Array(t,e){let n=this,r=t+e,i=t||r<n.size?n.blob.slice(t,r):n.blob;return new Uint8Array(await i.arrayBuffer())}},to=class extends Ai{constructor(t){super();let e=this,n=new TransformStream,r=[];t&&r.push([Wm,t]),Object.defineProperty(e,Qa,{get(){return n.writable}}),e.blob=new Response(n.readable,{headers:r}).blob()}getData(){return this.blob}},Gm=class extends eo{constructor(t){super(new Blob([t],{type:Fm}))}},Vm=class extends to{constructor(t){super(t),Object.assign(this,{encoding:t,utf8:!t||t.toLowerCase()=="utf-8"})}async getData(){let{encoding:t,utf8:e}=this,n=await super.getData();if(n.text&&e)return n.text();{let r=new FileReader;return new Promise((i,a)=>{Object.assign(r,{onload:({target:o})=>i(o.result),onerror:()=>a(r.error)}),r.readAsText(n,t)})}}},Xm=class extends mn{constructor(t,e){super(),Oc(this,t,e)}async init(){await Pc(this,Ua,Vl),super.init()}readUint8Array(t,e){return Mc(this,t,e,Ua,Vl)}},Ym=class extends mn{constructor(t,e){super(),Oc(this,t,e)}async init(){await Pc(this,za,Xl),super.init()}readUint8Array(t,e){return Mc(this,t,e,za,Xl)}};function Oc(t,e,n){let{preventHeadRequest:r,useRangeHeader:i,forceRangeRequests:a}=n;n=Object.assign({},n),delete n.preventHeadRequest,delete n.useRangeHeader,delete n.forceRangeRequests,delete n.useXHR,Object.assign(t,{url:e,options:n,preventHeadRequest:r,useRangeHeader:i,forceRangeRequests:a})}async function Pc(t,e,n){let{url:r,useRangeHeader:i,forceRangeRequests:a}=t;if(eg(r)&&(i||a)){let{headers:o}=await e(Za,t,Ic(t));if(!a&&o.get(zm)!=Nc)throw new Error(br);{let s,l=o.get(Um);if(l){let c=l.trim().split(/\s*\/\s*/);if(c.length){let u=c[1];u&&u!="*"&&(s=Number(u))}}s===Be?await Yl(t,e,n):t.size=s}}else await Yl(t,e,n)}async function Mc(t,e,n,r,i){let{useRangeHeader:a,forceRangeRequests:o,options:s}=t;if(a||o){let l=await r(Za,t,Ic(t,e,n));if(l.status!=206)throw new Error(br);return new Uint8Array(await l.arrayBuffer())}else{let{data:l}=t;return l||await i(t,s),new Uint8Array(t.data.subarray(e,e+n))}}function Ic(t,e=0,n=1){return Object.assign({},no(t),{[Hm]:Nc+"="+e+"-"+(e+n-1)})}function no({options:t}){let{headers:e}=t;if(e)return Symbol.iterator in e?Object.fromEntries(e):e}async function Vl(t){await Fc(t,Ua)}async function Xl(t){await Fc(t,za)}async function Fc(t,e){let n=await e(Za,t,no(t));t.data=new Uint8Array(await n.arrayBuffer()),t.size||(t.size=t.data.length)}async function Yl(t,e,n){if(t.preventHeadRequest)await n(t,t.options);else{let r=(await e($m,t,no(t))).headers.get(Bm);r?t.size=Number(r):await n(t,t.options)}}async function Ua(t,{options:e,url:n},r){let i=await fetch(n,Object.assign({},e,{method:t,headers:r}));if(i.status<400)return i;throw i.status==416?new Error(br):new Error(Dc+(i.statusText||i.status))}function za(t,{url:e},n){return new Promise((r,i)=>{let a=new XMLHttpRequest;if(a.addEventListener("load",()=>{if(a.status<400){let o=[];a.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach(s=>{let l=s.trim().split(/\s*:\s*/);l[0]=l[0].trim().replace(/^[a-z]|-[a-z]/g,c=>c.toUpperCase()),o.push(l)}),r({status:a.status,arrayBuffer:()=>a.response,headers:new Map(o)})}else i(a.status==416?new Error(br):new Error(Dc+(a.statusText||a.status)))},!1),a.addEventListener("error",o=>i(o.detail.error),!1),a.open(t,e),n)for(let o of Object.entries(n))a.setRequestHeader(o[0],o[1]);a.responseType="arraybuffer",a.send()})}var Bc=class extends mn{constructor(t,e={}){super(),Object.assign(this,{url:t,reader:e.useXHR?new Ym(t,e):new Xm(t,e)})}set size(t){}get size(){return this.reader.size}async init(){await this.reader.init(),super.init()}readUint8Array(t,e){return this.reader.readUint8Array(t,e)}},Zm=class extends Bc{constructor(t,e={}){e.useRangeHeader=!0,super(t,e)}},Qm=class extends mn{constructor(t){super(),Object.assign(this,{array:t,size:t.length})}readUint8Array(t,e){return this.array.slice(t,t+e)}},Jm=class extends Ja{init(t=0){Object.assign(this,{offset:0,array:new Uint8Array(t)}),super.init()}writeUint8Array(t){let e=this;if(e.offset+t.length>e.array.length){let n=e.array;e.array=new Uint8Array(n.length+t.length),e.array.set(n)}e.array.set(t,e.offset),e.offset+=t.length}getData(){return this.array}},ro=class extends mn{constructor(t){super(),this.readers=t}async init(){let t=this,{readers:e}=t;t.lastDiskNumber=0,await Promise.all(e.map(async n=>{await n.init(),t.size+=n.size})),super.init()}async readUint8Array(t,e,n=0){let r=this,{readers:i}=this,a,o=n;o==-1&&(o=i.length-1);let s=t;for(;s>=i[o].size;)s-=i[o].size,o++;let l=i[o],c=l.size;if(s+e<=c)a=await et(l,s,e);else{let u=c-s;a=new Uint8Array(e),a.set(await et(l,s,u)),a.set(await r.readUint8Array(t+u,e-u,n),u)}return r.lastDiskNumber=Math.max(o,r.lastDiskNumber),a}},mr=class extends Ai{constructor(t,e=4294967295){super();let n=this;Object.assign(n,{diskNumber:0,diskOffset:0,size:0,maxSize:e,availableSize:e});let r,i,a,o=new WritableStream({async write(c){let{availableSize:u}=n;if(a)c.length>=u?(await s(c.slice(0,u)),await l(),n.diskOffset+=r.size,n.diskNumber++,a=null,await this.write(c.slice(u))):await s(c);else{let{value:p,done:d}=await t.next();if(d&&!p)throw new Error(Rc);r=p,r.size=0,r.maxSize&&(n.maxSize=r.maxSize),n.availableSize=n.maxSize,await Qt(r),i=p.writable,a=i.getWriter(),await this.write(c)}},async close(){await a.ready,await l()}});Object.defineProperty(n,Qa,{get(){return o}});async function s(c){let u=c.length;u&&(await a.ready,await a.write(c),r.size+=u,n.size+=u,n.availableSize-=u)}async function l(){i.size=r.size,await a.close()}}};function eg(t){let{baseURL:e}=Ka(),{protocol:n}=new URL(t,e);return n=="http:"||n=="https:"}async function Qt(t,e){t.init&&!t.initialized&&await t.init(e)}function io(t){return Array.isArray(t)&&(t=new ro(t)),t instanceof ReadableStream&&(t={readable:t}),t}function ao(t){t.writable===Be&&typeof t.next==oc&&(t=new mr(t)),t instanceof WritableStream&&(t={writable:t});let{writable:e}=t;return e.size===Be&&(e.size=0),t instanceof mr||Object.assign(t,{diskNumber:0,diskOffset:0,availableSize:1/0,maxSize:1/0}),t}function et(t,e,n,r){return t.readUint8Array(e,n,r)}var tg=ro,ng=mr,Uc="\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0 ".split(""),rg=Uc.length==256;function ig(t){if(rg){let e="";for(let n=0;n<t.length;n++)e+=Uc[t[n]];return e}else return new TextDecoder().decode(t)}function Ha(t,e){return e&&e.trim().toLowerCase()=="cp437"?ig(t):new TextDecoder(e).decode(t)}var zc="filename",Hc="rawFilename",Wc="comment",$c="rawComment",jc="uncompressedSize",qc="compressedSize",Kc="offset",Wa="diskNumberStart",oo="lastModDate",Gc="rawLastModDate",so="lastAccessDate",ag="rawLastAccessDate",lo="creationDate",og="rawCreationDate",Vc="internalFileAttribute",Xc="externalFileAttribute",Yc="msDosCompatible",Zc="zip64",sg=[zc,Hc,qc,jc,oo,Gc,Wc,$c,so,lo,Kc,Wa,Wa,Vc,Xc,Yc,Zc,"directory","bitFlag","encrypted","signature","filenameUTF8","commentUTF8","compressionMethod","version","versionMadeBy","extraField","rawExtraField","extraFieldZip64","extraFieldUnicodePath","extraFieldUnicodeComment","extraFieldAES","extraFieldNTFS","extraFieldExtendedTimestamp"],wi=class{constructor(t){sg.forEach(e=>this[e]=t[e])}},fi="File format is not recognized",Qc="End of central directory not found",Jc="End of Zip64 central directory not found",eu="End of Zip64 central directory locator not found",tu="Central directory header not found",nu="Local file header not found",ru="Zip64 extra field not found",iu="File contains encrypted entry",au="Encryption method not supported",$a="Compression method not supported",ja="Split zip file",Zl="utf-8",Ql="cp437",lg=[[jc,4294967295],[qc,4294967295],[Kc,4294967295],[Wa,65535]],cg={65535:{getValue:Pe,bytes:4},4294967295:{getValue:mi,bytes:8}},ug=class{constructor(t,e={}){Object.assign(this,{reader:io(t),options:e,config:Ka()})}async*getEntriesGenerator(t={}){let e=this,{reader:n}=e,{config:r}=e;if(await Qt(n),(n.size===Be||!n.readUint8Array)&&(n=new eo(await new Response(n.readable).blob()),await Qt(n)),n.size<22)throw new Error(fi);n.chunkSize=lc(r);let i=await gg(n,101010256,n.size,22,65535*16);if(!i){let x=await et(n,0,4),S=Ye(x);throw Pe(S)==134695760?new Error(ja):new Error(Qc)}let a=Ye(i),o=Pe(a,12),s=Pe(a,16),l=i.offset,c=qe(a,20),u=l+22+c,p=qe(a,4),d=n.lastDiskNumber||0,h=qe(a,6),b=qe(a,8),g=0,m=0;if(s==4294967295||o==4294967295||b==65535||h==65535){let x=await et(n,i.offset-20,20),S=Ye(x);if(Pe(S,0)!=117853008)throw new Error(Jc);s=mi(S,8);let A=await et(n,s,56,-1),C=Ye(A),R=i.offset-20-56;if(Pe(C,0)!=101075792&&s!=R){let D=s;s=R,g=s-D,A=await et(n,s,56,-1),C=Ye(A)}if(Pe(C,0)!=101075792)throw new Error(eu);p==65535&&(p=Pe(C,16)),h==65535&&(h=Pe(C,20)),b==65535&&(b=mi(C,32)),o==4294967295&&(o=mi(C,40)),s-=o}if(d!=p)throw new Error(ja);if(s<0||s>=n.size)throw new Error(fi);let f=0,y=await et(n,s,o,h),w=Ye(y);if(o){let x=i.offset-o;if(Pe(w,f)!=33639248&&s!=x){let S=s;s=x,g=s-S,y=await et(n,s,o,h),w=Ye(y)}}if(s<0||s>=n.size)throw new Error(fi);let E=Mt(e,t,"filenameEncoding"),_=Mt(e,t,"commentEncoding");for(let x=0;x<b;x++){let S=new dg(n,r,e.options);if(Pe(w,f)!=33639248)throw new Error(tu);ou(S,w,f+6);let A=!!S.bitFlag.languageEncodingFlag,C=f+46,R=C+S.filenameLength,D=R+S.extraFieldLength,I=qe(w,f+4),N=(I&0)==0,B=y.subarray(C,R),F=qe(w,f+32),W=D+F,te=y.subarray(D,W),j=A,J=A,L=N&&(In(w,f+38)&16)==16,O=Pe(w,f+42)+g;Object.assign(S,{versionMadeBy:I,msDosCompatible:N,compressedSize:0,uncompressedSize:0,commentLength:F,directory:L,offset:O,diskNumberStart:qe(w,f+34),internalFileAttribute:qe(w,f+36),externalFileAttribute:Pe(w,f+38),rawFilename:B,filenameUTF8:j,commentUTF8:J,rawExtraField:y.subarray(R,D)});let[H,q]=await Promise.all([Ha(B,j?Zl:E||Ql),Ha(te,J?Zl:_||Ql)]);Object.assign(S,{rawComment:te,filename:H,comment:q,directory:L||H.endsWith(hi)}),m=Math.max(O,m),await su(S,S,w,f+6);let V=new wi(S);V.getData=(pe,he)=>S.getData(pe,V,he),f=W;let{onprogress:ue}=t;if(ue)try{await ue(x+1,b,new wi(S))}catch{}yield V}let T=Mt(e,t,"extractPrependedData"),v=Mt(e,t,"extractAppendedData");return T&&(e.prependedData=m>0?await et(n,0,m):new Uint8Array),e.comment=c?await et(n,l+22,c):new Uint8Array,v&&(e.appendedData=u<n.size?await et(n,u,n.size-u):new Uint8Array),!0}async getEntries(t={}){let e=[];for await(let n of this.getEntriesGenerator(t))e.push(n);return e}async close(){}},dg=class{constructor(t,e,n){Object.assign(this,{reader:t,config:e,options:n})}async getData(t,e,n={}){let r=this,{reader:i,offset:a,diskNumberStart:o,extraFieldAES:s,compressionMethod:l,config:c,bitFlag:u,signature:p,rawLastModDate:d,uncompressedSize:h,compressedSize:b}=r,g=r.localDirectory={},m=await et(i,a,30,o),f=Ye(m),y=Mt(r,n,"password");if(y=y&&y.length&&y,s&&s.originalCompressionMethod!=99)throw new Error($a);if(l!=0&&l!=8)throw new Error($a);if(Pe(f,0)!=67324752)throw new Error(nu);ou(g,f,4),g.rawExtraField=g.extraFieldLength?await et(i,a+30+g.filenameLength,g.extraFieldLength,o):new Uint8Array,await su(r,g,f,4),Object.assign(e,{lastAccessDate:g.lastAccessDate,creationDate:g.creationDate});let w=r.encrypted&&g.encrypted,E=w&&!s;if(w){if(!E&&s.strength===Be)throw new Error(au);if(!y)throw new Error(iu)}let _=a+30+g.filenameLength+g.extraFieldLength,T=i.readable;T.diskNumberStart=o,T.offset=_;let v=T.size=b,x=Mt(r,n,"signal");t=ao(t),await Qt(t,h);let{writable:S}=t,{onstart:A,onprogress:C,onend:R}=n,D={options:{codecType:Cc,password:y,zipCrypto:E,encryptionStrength:s&&s.strength,signed:Mt(r,n,"checkSignature"),passwordVerification:E&&(u.dataDescriptor?d>>>8&255:p>>>24&255),signature:p,compressed:l!=0,encrypted:w,useWebWorkers:Mt(r,n,"useWebWorkers"),useCompressionStream:Mt(r,n,"useCompressionStream"),transferStreams:Mt(r,n,"transferStreams")},config:c,streamOptions:{signal:x,size:v,onstart:A,onprogress:C,onend:R}};return S.size+=(await Lc({readable:T,writable:S},D)).size,Mt(r,n,"preventClose")||await S.close(),t.getData?t.getData():S}};function ou(t,e,n){let r=t.rawBitFlag=qe(e,n+2),i=(r&1)==1,a=Pe(e,n+6);Object.assign(t,{encrypted:i,version:qe(e,n),bitFlag:{level:(r&6)>>1,dataDescriptor:(r&8)==8,languageEncodingFlag:(r&2048)==2048},rawLastModDate:a,lastModDate:bg(a),filenameLength:qe(e,n+22),extraFieldLength:qe(e,n+24)})}async function su(t,e,n,r){let{rawExtraField:i}=e,a=e.extraField=new Map,o=Ye(new Uint8Array(i)),s=0;try{for(;s<i.length;){let g=qe(o,s),m=qe(o,s+2);a.set(g,{type:g,data:i.slice(s+4,s+4+m)}),s+=4+m}}catch{}let l=qe(n,r+4);Object.assign(e,{signature:Pe(n,r+10),uncompressedSize:Pe(n,r+18),compressedSize:Pe(n,r+14)});let c=a.get(1);c&&(pg(c,e),e.extraFieldZip64=c);let u=a.get(28789);u&&(await Jl(u,zc,Hc,e,t),e.extraFieldUnicodePath=u);let p=a.get(25461);p&&(await Jl(p,Wc,$c,e,t),e.extraFieldUnicodeComment=p);let d=a.get(39169);d?(hg(d,e,l),e.extraFieldAES=d):e.compressionMethod=l;let h=a.get(10);h&&(fg(h,e),e.extraFieldNTFS=h);let b=a.get(21589);b&&(mg(b,e),e.extraFieldExtendedTimestamp=b)}function pg(t,e){e.zip64=!0;let n=Ye(t.data),r=lg.filter(([i,a])=>e[i]==a);for(let i=0,a=0;i<r.length;i++){let[o,s]=r[i];if(e[o]==s){let l=cg[s];e[o]=t[o]=l.getValue(n,a),a+=l.bytes}else if(t[o])throw new Error(ru)}}async function Jl(t,e,n,r,i){let a=Ye(t.data),o=new bi;o.append(i[n]);let s=Ye(new Uint8Array(4));s.setUint32(0,o.get(),!0),Object.assign(t,{version:In(a,0),signature:Pe(a,1),[e]:await Ha(t.data.subarray(5)),valid:!i.bitFlag.languageEncodingFlag&&t.signature==Pe(s,0)}),t.valid&&(r[e]=t[e],r[e+"UTF8"]=!0)}function hg(t,e,n){let r=Ye(t.data),i=In(r,4);Object.assign(t,{vendorVersion:In(r,0),vendorId:In(r,2),strength:i,originalCompressionMethod:n,compressionMethod:qe(r,5)}),e.compressionMethod=t.compressionMethod}function fg(t,e){let n=Ye(t.data),r=4,i;try{for(;r<t.data.length&&!i;){let a=qe(n,r),o=qe(n,r+2);a==1&&(i=t.data.slice(r+4,r+4+o)),r+=4+o}}catch{}try{if(i&&i.length==24){let a=Ye(i),o=a.getBigUint64(0,!0),s=a.getBigUint64(8,!0),l=a.getBigUint64(16,!0);Object.assign(t,{rawLastModDate:o,rawLastAccessDate:s,rawCreationDate:l});let c=Ra(o),u=Ra(s),p=Ra(l),d={lastModDate:c,lastAccessDate:u,creationDate:p};Object.assign(t,d),Object.assign(e,d)}}catch{}}function mg(t,e){let n=Ye(t.data),r=In(n,0),i=[],a=[];(r&1)==1&&(i.push(oo),a.push(Gc)),(r&2)==2&&(i.push(so),a.push(ag)),(r&4)==4&&(i.push(lo),a.push(og));let o=1;i.forEach((s,l)=>{if(t.data.length>=o+4){let c=Pe(n,o);e[s]=t[s]=new Date(c*1e3);let u=a[l];t[u]=c}o+=4})}async function gg(t,e,n,r,i){let a=new Uint8Array(4),o=Ye(a);yg(o,0,e);let s=r+i;return await l(r)||await l(Math.min(s,n));async function l(c){let u=n-c,p=await et(t,u,c);for(let d=p.length-r;d>=0;d--)if(p[d]==a[0]&&p[d+1]==a[1]&&p[d+2]==a[2]&&p[d+3]==a[3])return{offset:u+d,buffer:p.slice(d,d+r).buffer}}}function Mt(t,e,n){return e[n]===Be?t.options[n]:e[n]}function bg(t){let e=(t&4294901760)>>16,n=t&65535;try{return new Date(1980+((e&65024)>>9),((e&480)>>5)-1,e&31,(n&63488)>>11,(n&2016)>>5,(n&31)*2,0)}catch{}}function Ra(t){return new Date(Number(t/BigInt(1e4)-BigInt(116444736e5)))}function In(t,e){return t.getUint8(e)}function qe(t,e){return t.getUint16(e,!0)}function Pe(t,e){return t.getUint32(e,!0)}function mi(t,e){return Number(t.getBigUint64(e,!0))}function yg(t,e,n){t.setUint32(e,n,!0)}function Ye(t){return new DataView(t.buffer)}var lu="File already exists",cu="Zip file comment exceeds 64KB",uu="File entry comment exceeds 64KB",du="File entry name exceeds 64KB",qa="Version exceeds 65535",pu="The strength must equal 1, 2, or 3",hu="Extra field type exceeds 65535",fu="Extra field data exceeds 64KB",ki="Zip64 is not supported (make sure 'keepOrder' is set to 'true')",ec=new Uint8Array([7,0,2,0,65,69,3,0,0]),Na=0,tc=[],wg=class{constructor(t,e={}){t=ao(t),Object.assign(this,{writer:t,addSplitZipSignature:t instanceof mr,options:e,config:Ka(),files:new Map,filenames:new Set,offset:t.writable.size,pendingEntriesSize:0,pendingAddFileCalls:new Set,bufferedWrites:0})}async add(t="",e,n={}){let r=this,{pendingAddFileCalls:i,config:a}=r;Na<a.maxWorkers?Na++:await new Promise(s=>tc.push(s));let o;try{if(t=t.trim(),r.filenames.has(t))throw new Error(lu);return r.filenames.add(t),o=vg(r,t,e,n),i.add(o),await o}catch(s){throw r.filenames.delete(t),s}finally{i.delete(o);let s=tc.shift();s?s():Na--}}async close(t=new Uint8Array,e={}){let n=this,{pendingAddFileCalls:r,writer:i}=this,{writable:a}=i;for(;r.size;)await Promise.all(Array.from(r));return await Cg(this,t,e),Ce(n,e,"preventClose")||await a.close(),i.getData?i.getData():a}};async function vg(t,e,n,r){e=e.trim(),r.directory&&!e.endsWith(hi)?e+=hi:r.directory=e.endsWith(hi);let i=Ma(e);if(Te(i)>65535)throw new Error(du);let a=r.comment||"",o=Ma(a);if(Te(o)>65535)throw new Error(uu);let s=Ce(t,r,"version",20);if(s>65535)throw new Error(qa);let l=Ce(t,r,"versionMadeBy",20);if(l>65535)throw new Error(qa);let c=Ce(t,r,oo,new Date),u=Ce(t,r,so),p=Ce(t,r,lo),d=Ce(t,r,Yc,!0),h=Ce(t,r,Vc,0),b=Ce(t,r,Xc,0),g=Ce(t,r,"password"),m=Ce(t,r,"encryptionStrength",3),f=Ce(t,r,"zipCrypto"),y=Ce(t,r,"extendedTimestamp",!0),w=Ce(t,r,"keepOrder",!0),E=Ce(t,r,"level"),_=Ce(t,r,"useWebWorkers"),T=Ce(t,r,"bufferedWrite"),v=Ce(t,r,"dataDescriptorSignature",!1),x=Ce(t,r,"signal"),S=Ce(t,r,"useCompressionStream"),A=Ce(t,r,"dataDescriptor",!0),C=Ce(t,r,Zc);if(g!==Be&&m!==Be&&(m<1||m>3))throw new Error(pu);let R=new Uint8Array,{extraField:D}=r;if(D){let pe=0,he=0;D.forEach(Q=>pe+=4+Te(Q)),R=new Uint8Array(pe),D.forEach((Q,ae)=>{if(ae>65535)throw new Error(hu);if(Te(Q)>65535)throw new Error(fu);Ke(R,new Uint16Array([ae]),he),Ke(R,new Uint16Array([Te(Q)]),he+2),Ke(R,Q,he+4),he+=4+Te(Q)})}let I=0,N=0,B=0,F=C===!0;n&&(n=io(n),await Qt(n),n.size===Be?(A=!0,(C||C===Be)&&(C=!0,I=4294967295)):(B=n.size,I=Dg(B)));let{diskOffset:W,diskNumber:te,maxSize:j}=t.writer,J=F||B>=4294967295,L=F||I>=4294967295,O=F||t.offset+t.pendingEntriesSize-W>=4294967295,H=Ce(t,r,"supportZip64SplitFile",!0)&&F||te+Math.ceil(t.pendingEntriesSize/j)>=65535;if(O||J||L||H){if(C===!1||!w)throw new Error(ki);C=!0}C=C||!1,r=Object.assign({},r,{rawFilename:i,rawComment:o,version:s,versionMadeBy:l,lastModDate:c,lastAccessDate:u,creationDate:p,rawExtraField:R,zip64:C,zip64UncompressedSize:J,zip64CompressedSize:L,zip64Offset:O,zip64DiskNumberStart:H,password:g,level:E,useWebWorkers:_,encryptionStrength:m,extendedTimestamp:y,zipCrypto:f,bufferedWrite:T,keepOrder:w,dataDescriptor:A,dataDescriptorSignature:v,signal:x,msDosCompatible:d,internalFileAttribute:h,externalFileAttribute:b,useCompressionStream:S});let q=_g(r),V=Sg(r);N=Te(q.localHeaderArray,V.dataDescriptorArray)+I,t.pendingEntriesSize+=N;let ue;try{ue=await xg(t,e,n,{headerInfo:q,dataDescriptorInfo:V},r)}finally{t.pendingEntriesSize-=N}return Object.assign(ue,{name:e,comment:a,extraField:D}),new wi(ue)}async function xg(t,e,n,r,i){let{files:a,writer:o}=t,{keepOrder:s,dataDescriptor:l,signal:c}=i,{headerInfo:u}=r,p=Array.from(a.values()).pop(),d={},h,b,g,m,f,y;a.set(e,d);try{let T;s&&(T=p&&p.lock,w()),i.bufferedWrite||t.writerLocked||t.bufferedWrites&&s||!l?(y=new to,y.writable.size=0,h=!0,t.bufferedWrites++,await Qt(o)):(y=o,await E()),await Qt(y);let{writable:v}=o,{diskOffset:x}=o;if(t.addSplitZipSignature){delete t.addSplitZipSignature;let A=new Uint8Array(4),C=ft(A);ye(C,0,134695760),await Wt(v,A),t.offset+=4}h||(await T,await _(v));let{diskNumber:S}=o;if(f=!0,d.diskNumberStart=S,d=await Tg(n,y,d,r,t.config,i),f=!1,a.set(e,d),d.filename=e,h){await y.writable.close();let A=await y.getData();await T,await E(),m=!0,l||(A=await kg(d,A,v,i)),await _(v),d.diskNumberStart=o.diskNumber,x=o.diskOffset,await A.stream().pipeTo(v,{preventClose:!0,preventAbort:!0,signal:c}),v.size+=A.size,m=!1}if(d.offset=t.offset-x,d.zip64)Eg(d,i);else if(d.offset>=4294967295)throw new Error(ki);return t.offset+=d.length,d}catch(T){if(h&&m||!h&&f){if(t.hasCorruptedEntries=!0,T)try{T.corruptedEntry=!0}catch{}h?t.offset+=y.writable.size:t.offset=y.writable.size}throw a.delete(e),T}finally{h&&t.bufferedWrites--,g&&g(),b&&b()}function w(){d.lock=new Promise(T=>g=T)}async function E(){t.writerLocked=!0;let{lockWriter:T}=t;t.lockWriter=new Promise(v=>b=()=>{t.writerLocked=!1,v()}),await T}async function _(T){u.localHeaderArray.length>o.availableSize&&(o.availableSize=0,await Wt(T,new Uint8Array))}}async function Tg(t,e,{diskNumberStart:n,lock:r},i,a,o){let{headerInfo:s,dataDescriptorInfo:l}=i,{localHeaderArray:c,headerArray:u,lastModDate:p,rawLastModDate:d,encrypted:h,compressed:b,version:g,compressionMethod:m,rawExtraFieldExtendedTimestamp:f,rawExtraFieldNTFS:y,rawExtraFieldAES:w}=s,{dataDescriptorArray:E}=l,{rawFilename:_,lastAccessDate:T,creationDate:v,password:x,level:S,zip64:A,zip64UncompressedSize:C,zip64CompressedSize:R,zip64Offset:D,zip64DiskNumberStart:I,zipCrypto:N,dataDescriptor:B,directory:F,versionMadeBy:W,rawComment:te,rawExtraField:j,useWebWorkers:J,onstart:L,onprogress:O,onend:H,signal:q,encryptionStrength:V,extendedTimestamp:ue,msDosCompatible:pe,internalFileAttribute:he,externalFileAttribute:Q,useCompressionStream:ae}=o,oe={lock:r,versionMadeBy:W,zip64:A,directory:!!F,filenameUTF8:!0,rawFilename:_,commentUTF8:!0,rawComment:te,rawExtraFieldExtendedTimestamp:f,rawExtraFieldNTFS:y,rawExtraFieldAES:w,rawExtraField:j,extendedTimestamp:ue,msDosCompatible:pe,internalFileAttribute:he,externalFileAttribute:Q,diskNumberStart:n},se=0,Y=0,re,{writable:de}=e;if(t){t.chunkSize=lc(a),await Wt(de,c);let ne=t.readable,ke=ne.size=t.size,Oe={options:{codecType:Ec,level:S,password:x,encryptionStrength:V,zipCrypto:h&&N,passwordVerification:h&&N&&d>>8&255,signed:!0,compressed:b,encrypted:h,useWebWorkers:J,useCompressionStream:ae,transferStreams:!1},config:a,streamOptions:{signal:q,size:ke,onstart:L,onprogress:O,onend:H}},ve=await Lc({readable:ne,writable:de},Oe);de.size+=ve.size,re=ve.signature,Y=t.size=ne.size,se=ve.size}else await Wt(de,c);let fe;if(A){let ne=4;C&&(ne+=8),R&&(ne+=8),D&&(ne+=8),I&&(ne+=4),fe=new Uint8Array(ne)}else fe=new Uint8Array;return t&&Ag({signature:re,rawExtraFieldZip64:fe,compressedSize:se,uncompressedSize:Y,headerInfo:s,dataDescriptorInfo:l},o),B&&await Wt(de,E),Object.assign(oe,{uncompressedSize:Y,compressedSize:se,lastModDate:p,rawLastModDate:d,creationDate:v,lastAccessDate:T,encrypted:h,length:Te(c,E)+se,compressionMethod:m,version:g,headerArray:u,signature:re,rawExtraFieldZip64:fe,zip64UncompressedSize:C,zip64CompressedSize:R,zip64Offset:D,zip64DiskNumberStart:I}),oe}function _g(t){let{rawFilename:e,lastModDate:n,lastAccessDate:r,creationDate:i,password:a,level:o,zip64:s,zipCrypto:l,dataDescriptor:c,directory:u,rawExtraField:p,encryptionStrength:d,extendedTimestamp:h}=t,b=o!==0&&!u,g=!!(a&&Te(a)),m=t.version,f;if(g&&!l){f=new Uint8Array(Te(ec)+2);let N=ft(f);Se(N,0,39169),Ke(f,ec,2),vi(N,8,d)}else f=new Uint8Array;let y,w;if(h){w=new Uint8Array(9+(r?4:0)+(i?4:0));let N=ft(w);Se(N,0,21589),Se(N,2,Te(w)-4);let B=1+(r?2:0)+(i?4:0);vi(N,4,B),ye(N,5,Math.floor(n.getTime()/1e3)),r&&ye(N,9,Math.floor(r.getTime()/1e3)),i&&ye(N,13,Math.floor(i.getTime()/1e3));try{y=new Uint8Array(36);let F=ft(y),W=Oa(n);Se(F,0,10),Se(F,2,32),Se(F,8,1),Se(F,10,24),ht(F,12,W),ht(F,20,Oa(r)||W),ht(F,28,Oa(i)||W)}catch{y=new Uint8Array}}else y=w=new Uint8Array;let E=2048;c&&(E=E|8);let _=0;b&&(_=8),s&&(m=m>45?m:45),g&&(E=E|1,l||(m=m>51?m:51,_=99,b&&(f[9]=8)));let T=new Uint8Array(26),v=ft(T);Se(v,0,m),Se(v,2,E),Se(v,4,_);let x=new Uint32Array(1),S=ft(x),A;n<Il?A=Il:n>Ml?A=Ml:A=n,Se(S,0,(A.getHours()<<6|A.getMinutes())<<5|A.getSeconds()/2),Se(S,2,(A.getFullYear()-1980<<4|A.getMonth()+1)<<5|A.getDate());let C=x[0];ye(v,6,C),Se(v,22,Te(e));let R=Te(f,w,y,p);Se(v,24,R);let D=new Uint8Array(30+Te(e)+R),I=ft(D);return ye(I,0,67324752),Ke(D,T,4),Ke(D,e,30),Ke(D,f,30+Te(e)),Ke(D,w,30+Te(e,f)),Ke(D,y,30+Te(e,f,w)),Ke(D,p,30+Te(e,f,w,y)),{localHeaderArray:D,headerArray:T,headerView:v,lastModDate:n,rawLastModDate:C,encrypted:g,compressed:b,version:m,compressionMethod:_,rawExtraFieldExtendedTimestamp:w,rawExtraFieldNTFS:y,rawExtraFieldAES:f}}function Sg(t){let{zip64:e,dataDescriptor:n,dataDescriptorSignature:r}=t,i=new Uint8Array,a,o=0;return n&&(i=new Uint8Array(e?r?24:20:r?16:12),a=ft(i),r&&(o=4,ye(a,0,134695760))),{dataDescriptorArray:i,dataDescriptorView:a,dataDescriptorOffset:o}}function Ag(t,e){let{signature:n,rawExtraFieldZip64:r,compressedSize:i,uncompressedSize:a,headerInfo:o,dataDescriptorInfo:s}=t,{headerView:l,encrypted:c}=o,{dataDescriptorView:u,dataDescriptorOffset:p}=s,{zip64:d,zip64UncompressedSize:h,zip64CompressedSize:b,zipCrypto:g,dataDescriptor:m}=e;if((!c||g)&&n!==Be&&(ye(l,10,n),m&&ye(u,p,n)),d){let f=ft(r);Se(f,0,1),Se(f,2,r.length-4);let y=4;h&&(ye(l,18,4294967295),ht(f,y,BigInt(a)),y+=8),b&&(ye(l,14,4294967295),ht(f,y,BigInt(i))),m&&(ht(u,p+4,BigInt(i)),ht(u,p+12,BigInt(a)))}else ye(l,14,i),ye(l,18,a),m&&(ye(u,p+4,i),ye(u,p+8,a))}async function kg(t,e,n,{zipCrypto:r}){let i=await Lg(e,0,26),a=new DataView(i);return(!t.encrypted||r)&&ye(a,14,t.signature),t.zip64?(ye(a,18,4294967295),ye(a,22,4294967295)):(ye(a,18,t.compressedSize),ye(a,22,t.uncompressedSize)),await Wt(n,new Uint8Array(i)),e.slice(i.byteLength)}function Eg(t,e){let{rawExtraFieldZip64:n,offset:r,diskNumberStart:i}=t,{zip64UncompressedSize:a,zip64CompressedSize:o,zip64Offset:s,zip64DiskNumberStart:l}=e,c=ft(n),u=4;a&&(u+=8),o&&(u+=8),s&&(ht(c,u,BigInt(r)),u+=8),l&&ye(c,u,i)}async function Cg(t,e,n){let{files:r,writer:i}=t,{diskOffset:a,writable:o}=i,{diskNumber:s}=i,l=0,c=0,u=t.offset-a,p=r.size;for(let[,{rawFilename:_,rawExtraFieldZip64:T,rawExtraFieldAES:v,rawExtraField:x,rawComment:S,rawExtraFieldExtendedTimestamp:A,rawExtraFieldNTFS:C}]of r)c+=46+Te(_,S,T,v,A,C,x);let d=new Uint8Array(c),h=ft(d);await Qt(i);let b=0;for(let[_,T]of Array.from(r.values()).entries()){let{offset:v,rawFilename:x,rawExtraFieldZip64:S,rawExtraFieldAES:A,rawExtraFieldNTFS:C,rawExtraField:R,rawComment:D,versionMadeBy:I,headerArray:N,directory:B,zip64:F,zip64UncompressedSize:W,zip64CompressedSize:te,zip64DiskNumberStart:j,zip64Offset:J,msDosCompatible:L,internalFileAttribute:O,externalFileAttribute:H,extendedTimestamp:q,lastModDate:V,diskNumberStart:ue,uncompressedSize:pe,compressedSize:he}=T,Q;if(q){Q=new Uint8Array(9);let Y=ft(Q);Se(Y,0,21589),Se(Y,2,Te(Q)-4),vi(Y,4,1),ye(Y,5,Math.floor(V.getTime()/1e3))}else Q=new Uint8Array;let ae=Te(S,A,Q,C,R);ye(h,l,33639248),Se(h,l+4,I);let oe=ft(N);W||ye(oe,18,pe),te||ye(oe,14,he),Ke(d,N,l+6),Se(h,l+30,ae),Se(h,l+32,Te(D)),Se(h,l+34,F&&j?65535:ue),Se(h,l+36,O),H?ye(h,l+38,H):B&&L&&vi(h,l+38,16),ye(h,l+42,F&&J?4294967295:v),Ke(d,x,l+46),Ke(d,S,l+46+Te(x)),Ke(d,A,l+46+Te(x,S)),Ke(d,Q,l+46+Te(x,S,A)),Ke(d,C,l+46+Te(x,S,A,Q)),Ke(d,R,l+46+Te(x,S,A,Q,C)),Ke(d,D,l+46+Te(x)+ae);let se=46+Te(x,D)+ae;if(l-b>i.availableSize&&(i.availableSize=0,await Wt(o,d.slice(b,l)),b=l),l+=se,n.onprogress)try{await n.onprogress(_+1,r.size,new wi(T))}catch{}}await Wt(o,b?d.slice(b):d);let g=i.diskNumber,{availableSize:m}=i;m<22&&g++;let f=Ce(t,n,"zip64");if(u>=4294967295||c>=4294967295||p>=65535||g>=65535){if(f===!1)throw new Error(ki);f=!0}let y=new Uint8Array(f?98:22),w=ft(y);l=0,f&&(ye(w,0,101075792),ht(w,4,BigInt(44)),Se(w,12,45),Se(w,14,45),ye(w,16,g),ye(w,20,s),ht(w,24,BigInt(p)),ht(w,32,BigInt(p)),ht(w,40,BigInt(c)),ht(w,48,BigInt(u)),ye(w,56,117853008),ht(w,64,BigInt(u)+BigInt(c)),ye(w,72,g+1),Ce(t,n,"supportZip64SplitFile",!0)&&(g=65535,s=65535),p=65535,u=4294967295,c=4294967295,l+=56+20),ye(w,l,101010256),Se(w,l+4,g),Se(w,l+6,s),Se(w,l+8,p),Se(w,l+10,p),ye(w,l+12,c),ye(w,l+16,u);let E=Te(e);if(E)if(E<=65535)Se(w,l+20,E);else throw new Error(cu);await Wt(o,y),E&&await Wt(o,e)}function Lg(t,e,n){return e||n?t.slice(e,n).arrayBuffer():t.arrayBuffer()}async function Wt(t,e){let n=t.getWriter();await n.ready,t.size+=Te(e),await n.write(e),n.releaseLock()}function Oa(t){if(t)return(BigInt(t.getTime())+BigInt(116444736e5))*BigInt(1e4)}function Ce(t,e,n,r){let i=e[n]===Be?t.options[n]:e[n];return i===Be?r:i}function Dg(t){return t+5*(Math.floor(t/16383)+1)}function vi(t,e,n){t.setUint8(e,n)}function Se(t,e,n){t.setUint16(e,n,!0)}function ye(t,e,n){t.setUint32(e,n,!0)}function ht(t,e,n){t.setBigUint64(e,n,!0)}function Ke(t,e,n){t.set(e,n)}function ft(t){return new DataView(t.buffer)}function Te(...t){let e=0;return t.forEach(n=>n&&(e+=n.length)),e}_i({Deflate:Df,Inflate:Xf});var mu={},Rg=function(t,e,n,r,i){var a=new Worker(mu[e]||(mu[e]=URL.createObjectURL(new Blob([t+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return a.onmessage=function(o){var s=o.data,l=s.$e$;if(l){var c=new Error(l[0]);c.code=l[1],c.stack=l[2],i(c,null)}else i(null,s)},a.postMessage(n,r),a},Ae=Uint8Array,tt=Uint16Array,Wn=Uint32Array,$n=new Ae([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),jn=new Ae([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),yr=new Ae([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),xu=function(t,e){for(var n=new tt(31),r=0;r<31;++r)n[r]=e+=1<<t[r-1];for(var i=new Wn(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return[n,i]},Tu=xu($n,2),wo=Tu[0],Ni=Tu[1];wo[28]=258,Ni[258]=28;var _u=xu(jn,0),Su=_u[0],po=_u[1],wr=new tt(32768);for(_e=0;_e<32768;++_e)Jt=(_e&43690)>>>1|(_e&21845)<<1,Jt=(Jt&52428)>>>2|(Jt&13107)<<2,Jt=(Jt&61680)>>>4|(Jt&3855)<<4,wr[_e]=((Jt&65280)>>>8|(Jt&255)<<8)>>>1;var Jt,_e,Et=function(t,e,n){for(var r=t.length,i=0,a=new tt(e);i<r;++i)t[i]&&++a[t[i]-1];var o=new tt(e);for(i=0;i<e;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new tt(1<<e);var l=15-e;for(i=0;i<r;++i)if(t[i])for(var c=i<<4|t[i],u=e-t[i],p=o[t[i]-1]++<<u,d=p|(1<<u)-1;p<=d;++p)s[wr[p]>>>l]=c}else for(s=new tt(r),i=0;i<r;++i)t[i]&&(s[i]=wr[o[t[i]-1]++]>>>15-t[i]);return s},tn=new Ae(288);for(_e=0;_e<144;++_e)tn[_e]=8;var _e;for(_e=144;_e<256;++_e)tn[_e]=9;var _e;for(_e=256;_e<280;++_e)tn[_e]=7;var _e;for(_e=280;_e<288;++_e)tn[_e]=8;var _e,Hn=new Ae(32);for(_e=0;_e<32;++_e)Hn[_e]=5;var _e,Au=Et(tn,9,0),ku=Et(tn,9,1),Eu=Et(Hn,5,0),Cu=Et(Hn,5,1),Ci=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},kt=function(t,e,n){var r=e/8|0;return(t[r]|t[r+1]<<8)>>(e&7)&n},Li=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},vr=function(t){return(t+7)/8|0},Kt=function(t,e,n){(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length);var r=new(t.BYTES_PER_ELEMENT==2?tt:t.BYTES_PER_ELEMENT==4?Wn:Ae)(n-e);return r.set(t.subarray(e,n)),r};var Lu=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],me=function(t,e,n){var r=new Error(e||Lu[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,me),!n)throw r;return r},Ii=function(t,e,n){var r=t.length;if(!r||n&&n.f&&!n.l)return e||new Ae(0);var i=!e||n,a=!n||n.i;n||(n={}),e||(e=new Ae(r*3));var o=function(V){var ue=e.length;if(V>ue){var pe=new Ae(Math.max(ue*2,V));pe.set(e),e=pe}},s=n.f||0,l=n.p||0,c=n.b||0,u=n.l,p=n.d,d=n.m,h=n.n,b=r*8;do{if(!u){s=kt(t,l,1);var g=kt(t,l+1,3);if(l+=3,g)if(g==1)u=ku,p=Cu,d=9,h=5;else if(g==2){var m=kt(t,l,31)+257,f=kt(t,l+10,15)+4,y=m+kt(t,l+5,31)+1;l+=14;for(var w=new Ae(y),E=new Ae(19),_=0;_<f;++_)E[yr[_]]=kt(t,l+_*3,7);l+=f*3;for(var T=Ci(E),v=(1<<T)-1,x=Et(E,T,1),_=0;_<y;){var S=x[kt(t,l,v)];l+=S&15;var A=S>>>4;if(A<16)w[_++]=A;else{var C=0,R=0;for(A==16?(R=3+kt(t,l,3),l+=2,C=w[_-1]):A==17?(R=3+kt(t,l,7),l+=3):A==18&&(R=11+kt(t,l,127),l+=7);R--;)w[_++]=C}}var D=w.subarray(0,m),I=w.subarray(m);d=Ci(D),h=Ci(I),u=Et(D,d,1),p=Et(I,h,1)}else me(1);else{var A=vr(l)+4,N=t[A-4]|t[A-3]<<8,B=A+N;if(B>r){a&&me(0);break}i&&o(c+N),e.set(t.subarray(A,B),c),n.b=c+=N,n.p=l=B*8,n.f=s;continue}if(l>b){a&&me(0);break}}i&&o(c+131072);for(var F=(1<<d)-1,W=(1<<h)-1,te=l;;te=l){var C=u[Li(t,l)&F],j=C>>>4;if(l+=C&15,l>b){a&&me(0);break}if(C||me(2),j<256)e[c++]=j;else if(j==256){te=l,u=null;break}else{var J=j-254;if(j>264){var _=j-257,L=$n[_];J=kt(t,l,(1<<L)-1)+wo[_],l+=L}var O=p[Li(t,l)&W],H=O>>>4;O||me(3),l+=O&15;var I=Su[H];if(H>3){var L=jn[H];I+=Li(t,l)&(1<<L)-1,l+=L}if(l>b){a&&me(0);break}i&&o(c+131072);for(var q=c+J;c<q;c+=4)e[c]=e[c-I],e[c+1]=e[c+1-I],e[c+2]=e[c+2-I],e[c+3]=e[c+3-I];c=q}}n.l=u,n.p=te,n.b=c,n.f=s,u&&(s=1,n.m=d,n.d=p,n.n=h)}while(!s);return c==e.length?e:Kt(e,0,c)},qt=function(t,e,n){n<<=e&7;var r=e/8|0;t[r]|=n,t[r+1]|=n>>>8},Fn=function(t,e,n){n<<=e&7;var r=e/8|0;t[r]|=n,t[r+1]|=n>>>8,t[r+2]|=n>>>16},Di=function(t,e){for(var n=[],r=0;r<t.length;++r)t[r]&&n.push({s:r,f:t[r]});var i=n.length,a=n.slice();if(!i)return[en,0];if(i==1){var o=new Ae(n[0].s+1);return o[n[0].s]=1,[o,1]}n.sort(function(_,T){return _.f-T.f}),n.push({s:-1,f:25001});var s=n[0],l=n[1],c=0,u=1,p=2;for(n[0]={s:-1,f:s.f+l.f,l:s,r:l};u!=i-1;)s=n[n[c].f<n[p].f?c++:p++],l=n[c!=u&&n[c].f<n[p].f?c++:p++],n[u++]={s:-1,f:s.f+l.f,l:s,r:l};for(var d=a[0].s,r=1;r<i;++r)a[r].s>d&&(d=a[r].s);var h=new tt(d+1),b=Oi(n[u-1],h,0);if(b>e){var r=0,g=0,m=b-e,f=1<<m;for(a.sort(function(T,v){return h[v.s]-h[T.s]||T.f-v.f});r<i;++r){var y=a[r].s;if(h[y]>e)g+=f-(1<<b-h[y]),h[y]=e;else break}for(g>>>=m;g>0;){var w=a[r].s;h[w]<e?g-=1<<e-h[w]++-1:++r}for(;r>=0&&g;--r){var E=a[r].s;h[E]==e&&(--h[E],++g)}b=e}return[new Ae(h),b]},Oi=function(t,e,n){return t.s==-1?Math.max(Oi(t.l,e,n+1),Oi(t.r,e,n+1)):e[t.s]=n},ho=function(t){for(var e=t.length;e&&!t[--e];);for(var n=new tt(++e),r=0,i=t[0],a=1,o=function(l){n[r++]=l},s=1;s<=e;++s)if(t[s]==i&&s!=e)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=t[s]}return[n.subarray(0,r),e]},Bn=function(t,e){for(var n=0,r=0;r<e.length;++r)n+=t[r]*e[r];return n},Pi=function(t,e,n){var r=n.length,i=vr(e+2);t[i]=r&255,t[i+1]=r>>>8,t[i+2]=t[i]^255,t[i+3]=t[i+1]^255;for(var a=0;a<r;++a)t[i+a+4]=n[a];return(i+4+r)*8},fo=function(t,e,n,r,i,a,o,s,l,c,u){qt(e,u++,n),++i[256];for(var p=Di(i,15),d=p[0],h=p[1],b=Di(a,15),g=b[0],m=b[1],f=ho(d),y=f[0],w=f[1],E=ho(g),_=E[0],T=E[1],v=new tt(19),x=0;x<y.length;++x)v[y[x]&31]++;for(var x=0;x<_.length;++x)v[_[x]&31]++;for(var S=Di(v,7),A=S[0],C=S[1],R=19;R>4&&!A[yr[R-1]];--R);var D=c+5<<3,I=Bn(i,tn)+Bn(a,Hn)+o,N=Bn(i,d)+Bn(a,g)+o+14+3*R+Bn(v,A)+(2*v[16]+3*v[17]+7*v[18]);if(D<=I&&D<=N)return Pi(e,u,t.subarray(l,l+c));var B,F,W,te;if(qt(e,u,1+(N<I)),u+=2,N<I){B=Et(d,h,0),F=d,W=Et(g,m,0),te=g;var j=Et(A,C,0);qt(e,u,w-257),qt(e,u+5,T-1),qt(e,u+10,R-4),u+=14;for(var x=0;x<R;++x)qt(e,u+3*x,A[yr[x]]);u+=3*R;for(var J=[y,_],L=0;L<2;++L)for(var O=J[L],x=0;x<O.length;++x){var H=O[x]&31;qt(e,u,j[H]),u+=A[H],H>15&&(qt(e,u,O[x]>>>5&127),u+=O[x]>>>12)}}else B=Au,F=tn,W=Eu,te=Hn;for(var x=0;x<s;++x)if(r[x]>255){var H=r[x]>>>18&31;Fn(e,u,B[H+257]),u+=F[H+257],H>7&&(qt(e,u,r[x]>>>23&31),u+=$n[H]);var q=r[x]&31;Fn(e,u,W[q]),u+=te[q],q>3&&(Fn(e,u,r[x]>>>5&8191),u+=jn[q])}else Fn(e,u,B[r[x]]),u+=F[r[x]];return Fn(e,u,B[256]),u+F[256]},Du=new Wn([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),en=new Ae(0),Ru=function(t,e,n,r,i,a){var o=t.length,s=new Ae(r+o+5*(1+Math.ceil(o/7e3))+i),l=s.subarray(r,s.length-i),c=0;if(!e||o<8)for(var u=0;u<=o;u+=65535){var p=u+65535;p>=o&&(l[c>>3]=a),c=Pi(l,c+1,t.subarray(u,p))}else{for(var d=Du[e-1],h=d>>>13,b=d&8191,g=(1<<n)-1,m=new tt(32768),f=new tt(g+1),y=Math.ceil(n/3),w=2*y,E=function(Y){return(t[Y]^t[Y+1]<<y^t[Y+2]<<w)&g},_=new Wn(25e3),T=new tt(288),v=new tt(32),x=0,S=0,u=0,A=0,C=0,R=0;u<o;++u){var D=E(u),I=u&32767,N=f[D];if(m[I]=N,f[D]=I,C<=u){var B=o-u;if((x>7e3||A>24576)&&B>423){c=fo(t,l,0,_,T,v,S,A,R,u-R,c),A=x=S=0,R=u;for(var F=0;F<286;++F)T[F]=0;for(var F=0;F<30;++F)v[F]=0}var W=2,te=0,j=b,J=I-N&32767;if(B>2&&D==E(u-J))for(var L=Math.min(h,B)-1,O=Math.min(32767,u),H=Math.min(258,B);J<=O&&--j&&I!=N;){if(t[u+W]==t[u+W-J]){for(var q=0;q<H&&t[u+q]==t[u+q-J];++q);if(q>W){if(W=q,te=J,q>L)break;for(var V=Math.min(J,q-2),ue=0,F=0;F<V;++F){var pe=u-J+F+32768&32767,he=m[pe],Q=pe-he+32768&32767;Q>ue&&(ue=Q,N=pe)}}}I=N,N=m[I],J+=I-N+32768&32767}if(te){_[A++]=268435456|Ni[W]<<18|po[te];var ae=Ni[W]&31,oe=po[te]&31;S+=$n[ae]+jn[oe],++T[257+ae],++v[oe],C=u+W,++x}else _[A++]=t[u],++T[t[u]]}}c=fo(t,l,a,_,T,v,S,A,R,u-R,c),!a&&c&7&&(c=Pi(l,c+1,en))}return Kt(s,0,r+vr(c)+i)},Nu=function(){for(var t=new Int32Array(256),e=0;e<256;++e){for(var n=e,r=9;--r;)n=(n&1&&-306674912)^n>>>1;t[e]=n}return t}(),vo=function(){var t=-1;return{p:function(e){for(var n=t,r=0;r<e.length;++r)n=Nu[n&255^e[r]]^n>>>8;t=n},d:function(){return~t}}},Ou=function(){var t=1,e=0;return{p:function(n){for(var r=t,i=e,a=n.length|0,o=0;o!=a;){for(var s=Math.min(o+2655,a);o<s;++o)i+=r+=n[o];r=(r&65535)+15*(r>>16),i=(i&65535)+15*(i>>16)}t=r,e=i},d:function(){return t%=65521,e%=65521,(t&255)<<24|t>>>8<<16|(e&255)<<8|e>>>8}}},xr=function(t,e,n,r,i){return Ru(t,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):12+e.mem,n,r,!i)},Pu=function(t,e){var n={};for(var r in t)n[r]=t[r];for(var r in e)n[r]=e[r];return n},gu=function(t,e,n){for(var r=t(),i=t.toString(),a=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<r.length;++o){var s=r[o],l=a[o];if(typeof s=="function"){e+=";"+l+"=";var c=s.toString();if(s.prototype)if(c.indexOf("[native code]")!=-1){var u=c.indexOf(" ",8)+1;e+=c.slice(u,c.indexOf("(",u))}else{e+=c;for(var p in s.prototype)e+=";"+l+".prototype."+p+"="+s.prototype[p].toString()}else e+=c}else n[l]=s}return[e,n]},Ei=[],Ng=function(t){var e=[];for(var n in t)t[n].buffer&&e.push((t[n]=new t[n].constructor(t[n])).buffer);return e},Og=function(t,e,n,r){var i;if(!Ei[n]){for(var a="",o={},s=t.length-1,l=0;l<s;++l)i=gu(t[l],a,o),a=i[0],o=i[1];Ei[n]=gu(t[s],a,o)}var c=Pu({},Ei[n][1]);return Rg(Ei[n][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",n,c,Ng(c),r)},xo=function(){return[Ae,tt,Wn,$n,jn,yr,wo,Su,ku,Cu,wr,Lu,Et,Ci,kt,Li,vr,Kt,me,Ii,Wg,Mu,Bg]},To=function(){return[Ae,tt,Wn,$n,jn,yr,Ni,po,Au,tn,Eu,Hn,wr,Du,en,Et,qt,Fn,Di,Oi,ho,Bn,Pi,fo,vr,Kt,Ru,xr,Hg,Mu]},Pg=function(){return[Iu,Bu,Ee,vo,Nu]},Mg=function(){return[Fu,Ug]},Ig=function(){return[Uu,Ee,Ou]},Fg=function(){return[zu]},Mu=function(t){return postMessage(t,[t.buffer])},Bg=function(t){return t&&t.size&&new Ae(t.size)};var Ct=function(t){return t.ondata=function(e,n){return postMessage([e,n],[e.buffer])},function(e){return t.push(e.data[0],e.data[1])}},qn=function(t,e,n,r,i){var a,o=Og(t,r,i,function(s,l){s?(o.terminate(),e.ondata.call(e,s)):(l[1]&&o.terminate(),e.ondata.call(e,s,l[0],l[1]))});o.postMessage(n),e.push=function(s,l){e.ondata||me(5),a&&e.ondata(me(4,0,1),null,!!l),o.postMessage([s,a=l],[s.buffer])},e.terminate=function(){o.terminate()}},Un=function(t,e){return t[e]|t[e+1]<<8},zn=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},uo=function(t,e){return zn(t,e)+zn(t,e+4)*4294967296},Ee=function(t,e,n){for(;n;++e)t[e]=n,n>>>=8},Iu=function(t,e){var n=e.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=e.level<2?4:e.level==9?2:0,t[9]=3,e.mtime!=0&&Ee(t,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),n){t[3]=8;for(var r=0;r<=n.length;++r)t[r+10]=n.charCodeAt(r)}},Fu=function(t){(t[0]!=31||t[1]!=139||t[2]!=8)&&me(6,"invalid gzip data");var e=t[3],n=10;e&4&&(n+=t[10]|(t[11]<<8)+2);for(var r=(e>>3&1)+(e>>4&1);r>0;r-=!t[n++]);return n+(e&2)},Ug=function(t){var e=t.length;return(t[e-4]|t[e-3]<<8|t[e-2]<<16|t[e-1]<<24)>>>0},Bu=function(t){return 10+(t.filename&&t.filename.length+1||0)},Uu=function(t,e){var n=e.level,r=n==0?0:n<6?1:n==9?3:2;t[0]=120,t[1]=r<<6|(r?32-2*r:1)},zu=function(t){((t[0]&15)!=8||t[0]>>>4>7||(t[0]<<8|t[1])%31)&&me(6,"invalid zlib data"),t[1]&32&&me(6,"invalid zlib data: preset dictionaries not supported")};function _o(t,e){return!e&&typeof t=="function"&&(e=t,t={}),this.ondata=e,t}var nn=function(){function t(e,n){!n&&typeof e=="function"&&(n=e,e={}),this.ondata=n,this.o=e||{}}return t.prototype.p=function(e,n){this.ondata(xr(e,this.o,0,0,!n),n)},t.prototype.push=function(e,n){this.ondata||me(5),this.d&&me(4),this.d=n,this.p(e,n||!1)},t}(),zg=function(){function t(e,n){qn([To,function(){return[Ct,nn]}],this,_o.call(this,e,n),function(r){var i=new nn(r.data);onmessage=Ct(i)},6)}return t}();function Hg(t,e){return xr(t,e||{},0,0)}var bt=function(){function t(e){this.s={},this.p=new Ae(0),this.ondata=e}return t.prototype.e=function(e){this.ondata||me(5),this.d&&me(4);var n=this.p.length,r=new Ae(n+e.length);r.set(this.p),r.set(e,n),this.p=r},t.prototype.c=function(e){this.d=this.s.i=e||!1;var n=this.s.b,r=Ii(this.p,this.o,this.s);this.ondata(Kt(r,n,this.s.b),this.d),this.o=Kt(r,this.s.b-32768),this.s.b=this.o.length,this.p=Kt(this.p,this.s.p/8|0),this.s.p&=7},t.prototype.push=function(e,n){this.e(e),this.c(n)},t}(),Hu=function(){function t(e){this.ondata=e,qn([xo,function(){return[Ct,bt]}],this,0,function(){var n=new bt;onmessage=Ct(n)},7)}return t}();function Wg(t,e){return Ii(t,e)}var bu=function(){function t(e,n){this.c=vo(),this.l=0,this.v=1,nn.call(this,e,n)}return t.prototype.push=function(e,n){nn.prototype.push.call(this,e,n)},t.prototype.p=function(e,n){this.c.p(e),this.l+=e.length;var r=xr(e,this.o,this.v&&Bu(this.o),n&&8,!n);this.v&&(Iu(r,this.o),this.v=0),n&&(Ee(r,r.length-8,this.c.d()),Ee(r,r.length-4,this.l)),this.ondata(r,n)},t}(),ow=function(){function t(e,n){qn([To,Pg,function(){return[Ct,nn,bu]}],this,_o.call(this,e,n),function(r){var i=new bu(r.data);onmessage=Ct(i)},8)}return t}();var mo=function(){function t(e){this.v=1,bt.call(this,e)}return t.prototype.push=function(e,n){if(bt.prototype.e.call(this,e),this.v){var r=this.p.length>3?Fu(this.p):4;if(r>=this.p.length&&!n)return;this.p=this.p.subarray(r),this.v=0}n&&(this.p.length<8&&me(6,"invalid gzip data"),this.p=this.p.subarray(0,-8)),bt.prototype.c.call(this,n)},t}(),$g=function(){function t(e){this.ondata=e,qn([xo,Mg,function(){return[Ct,bt,mo]}],this,0,function(){var n=new mo;onmessage=Ct(n)},9)}return t}();var yu=function(){function t(e,n){this.c=Ou(),this.v=1,nn.call(this,e,n)}return t.prototype.push=function(e,n){nn.prototype.push.call(this,e,n)},t.prototype.p=function(e,n){this.c.p(e);var r=xr(e,this.o,this.v&&2,n&&4,!n);this.v&&(Uu(r,this.o),this.v=0),n&&Ee(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),sw=function(){function t(e,n){qn([To,Ig,function(){return[Ct,nn,yu]}],this,_o.call(this,e,n),function(r){var i=new yu(r.data);onmessage=Ct(i)},10)}return t}();var go=function(){function t(e){this.v=1,bt.call(this,e)}return t.prototype.push=function(e,n){if(bt.prototype.e.call(this,e),this.v){if(this.p.length<2&&!n)return;this.p=this.p.subarray(2),this.v=0}n&&(this.p.length<4&&me(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),bt.prototype.c.call(this,n)},t}(),jg=function(){function t(e){this.ondata=e,qn([xo,Fg,function(){return[Ct,bt,go]}],this,0,function(){var n=new go;onmessage=Ct(n)},11)}return t}();function Wu(t,e){return Ii((zu(t),t.subarray(2,-4)),e)}var qg=function(){function t(e){this.G=mo,this.I=bt,this.Z=go,this.ondata=e}return t.prototype.push=function(e,n){if(this.ondata||me(5),this.s)this.s.push(e,n);else{if(this.p&&this.p.length){var r=new Ae(this.p.length+e.length);r.set(this.p),r.set(e,this.p.length)}else this.p=e;if(this.p.length>2){var i=this,a=function(){i.ondata.apply(i,arguments)};this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(a):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(a):new this.Z(a),this.s.push(this.p,n),this.p=null}}},t}(),lw=function(){function t(e){this.G=$g,this.I=Hu,this.Z=jg,this.ondata=e}return t.prototype.push=function(e,n){qg.prototype.push.call(this,e,n)},t}();var wu=typeof TextEncoder<"u"&&new TextEncoder,bo=typeof TextDecoder<"u"&&new TextDecoder,$u=0;try{bo.decode(en,{stream:!0}),$u=1}catch{}var ju=function(t){for(var e="",n=0;;){var r=t[n++],i=(r>127)+(r>223)+(r>239);if(n+i>t.length)return[e,Kt(t,n-1)];i?i==3?(r=((r&15)<<18|(t[n++]&63)<<12|(t[n++]&63)<<6|t[n++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?e+=String.fromCharCode((r&31)<<6|t[n++]&63):e+=String.fromCharCode((r&15)<<12|(t[n++]&63)<<6|t[n++]&63):e+=String.fromCharCode(r)}},cw=function(){function t(e){this.ondata=e,$u?this.t=new TextDecoder:this.p=en}return t.prototype.push=function(e,n){if(this.ondata||me(5),n=!!n,this.t){this.ondata(this.t.decode(e,{stream:!0}),n),n&&(this.t.decode().length&&me(8),this.t=null);return}this.p||me(4);var r=new Ae(this.p.length+e.length);r.set(this.p),r.set(e,this.p.length);var i=ju(r),a=i[0],o=i[1];n?(o.length&&me(8),this.p=null):this.p=o,this.ondata(a,n)},t}(),uw=function(){function t(e){this.ondata=e}return t.prototype.push=function(e,n){this.ondata||me(5),this.d&&me(4),this.ondata(yo(e),this.d=n||!1)},t}();function yo(t,e){if(e){for(var n=new Ae(t.length),r=0;r<t.length;++r)n[r]=t.charCodeAt(r);return n}if(wu)return wu.encode(t);for(var i=t.length,a=new Ae(t.length+(t.length>>1)),o=0,s=function(p){a[o++]=p},r=0;r<i;++r){if(o+5>a.length){var l=new Ae(o+8+(i-r<<1));l.set(a),a=l}var c=t.charCodeAt(r);c<128||e?s(c):c<2048?(s(192|c>>6),s(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|t.charCodeAt(++r)&1023,s(240|c>>18),s(128|c>>12&63),s(128|c>>6&63),s(128|c&63)):(s(224|c>>12),s(128|c>>6&63),s(128|c&63))}return Kt(a,0,o)}function Kg(t,e){if(e){for(var n="",r=0;r<t.length;r+=16384)n+=String.fromCharCode.apply(null,t.subarray(r,r+16384));return n}else{if(bo)return bo.decode(t);var i=ju(t),a=i[0],o=i[1];return o.length&&me(8),a}}var qu=function(t){return t==1?3:t<6?2:t==9?1:0};var Gg=function(t,e){for(;Un(t,e)!=1;e+=4+Un(t,e+2));return[uo(t,e+12),uo(t,e+4),uo(t,e+20)]},Ri=function(t){var e=0;if(t)for(var n in t){var r=t[n].length;r>65535&&me(9),e+=r+4}return e},vu=function(t,e,n,r,i,a,o,s){var l=r.length,c=n.extra,u=s&&s.length,p=Ri(c);Ee(t,e,o!=null?33639248:67324752),e+=4,o!=null&&(t[e++]=20,t[e++]=n.os),t[e]=20,e+=2,t[e++]=n.flag<<1|(a<0&&8),t[e++]=i&&8,t[e++]=n.compression&255,t[e++]=n.compression>>8;var d=new Date(n.mtime==null?Date.now():n.mtime),h=d.getFullYear()-1980;if((h<0||h>119)&&me(10),Ee(t,e,h<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>>1),e+=4,a!=-1&&(Ee(t,e,n.crc),Ee(t,e+4,a<0?-a-2:a),Ee(t,e+8,n.size)),Ee(t,e+12,l),Ee(t,e+14,p),e+=16,o!=null&&(Ee(t,e,u),Ee(t,e+6,n.attrs),Ee(t,e+10,o),e+=14),t.set(r,e),e+=l,p)for(var b in c){var g=c[b],m=g.length;Ee(t,e,+b),Ee(t,e+2,m),t.set(g,e+4),e+=4+m}return u&&(t.set(s,e),e+=u),e},Vg=function(t,e,n,r,i){Ee(t,e,101010256),Ee(t,e+8,n),Ee(t,e+10,n),Ee(t,e+12,r),Ee(t,e+16,i)},Mi=function(){function t(e){this.filename=e,this.c=vo(),this.size=0,this.compression=0}return t.prototype.process=function(e,n){this.ondata(null,e,n)},t.prototype.push=function(e,n){this.ondata||me(5),this.c.p(e),this.size+=e.length,n&&(this.crc=this.c.d()),this.process(e,n||!1)},t}(),dw=function(){function t(e,n){var r=this;n||(n={}),Mi.call(this,e),this.d=new nn(n,function(i,a){r.ondata(null,i,a)}),this.compression=8,this.flag=qu(n.level)}return t.prototype.process=function(e,n){try{this.d.push(e,n)}catch(r){this.ondata(r,null,n)}},t.prototype.push=function(e,n){Mi.prototype.push.call(this,e,n)},t}(),pw=function(){function t(e,n){var r=this;n||(n={}),Mi.call(this,e),this.d=new zg(n,function(i,a,o){r.ondata(i,a,o)}),this.compression=8,this.flag=qu(n.level),this.terminate=this.d.terminate}return t.prototype.process=function(e,n){this.d.push(e,n)},t.prototype.push=function(e,n){Mi.prototype.push.call(this,e,n)},t}(),hw=function(){function t(e){this.ondata=e,this.u=[],this.d=1}return t.prototype.add=function(e){var n=this;if(this.ondata||me(5),this.d&2)this.ondata(me(4+(this.d&1)*8,0,1),null,!1);else{var r=yo(e.filename),i=r.length,a=e.comment,o=a&&yo(a),s=i!=e.filename.length||o&&a.length!=o.length,l=i+Ri(e.extra)+30;i>65535&&this.ondata(me(11,0,1),null,!1);var c=new Ae(l);vu(c,0,e,r,s,-1);var u=[c],p=function(){for(var m=0,f=u;m<f.length;m++){var y=f[m];n.ondata(null,y,!1)}u=[]},d=this.d;this.d=0;var h=this.u.length,b=Pu(e,{f:r,u:s,o,t:function(){e.terminate&&e.terminate()},r:function(){if(p(),d){var m=n.u[h+1];m?m.r():n.d=1}d=1}}),g=0;e.ondata=function(m,f,y){if(m)n.ondata(m,f,y),n.terminate();else if(g+=f.length,u.push(f),y){var w=new Ae(16);Ee(w,0,134695760),Ee(w,4,e.crc),Ee(w,8,g),Ee(w,12,e.size),u.push(w),b.c=g,b.b=l+g+16,b.crc=e.crc,b.size=e.size,d&&b.r(),d=1}else d&&p()},this.u.push(b)}},t.prototype.end=function(){var e=this;if(this.d&2){this.ondata(me(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},t.prototype.e=function(){for(var e=0,n=0,r=0,i=0,a=this.u;i<a.length;i++){var o=a[i];r+=46+o.f.length+Ri(o.extra)+(o.o?o.o.length:0)}for(var s=new Ae(r+22),l=0,c=this.u;l<c.length;l++){var o=c[l];vu(s,e,o,o.f,o.u,-o.c-2,n,o.o),e+=46+o.f.length+Ri(o.extra)+(o.o?o.o.length:0),n+=o.b}Vg(s,e,this.u.length,r,n),this.ondata(null,s,!0),this.d=2},t.prototype.terminate=function(){for(var e=0,n=this.u;e<n.length;e++){var r=n[e];r.t()}this.d=2},t}();var Xg=function(){function t(){}return t.prototype.push=function(e,n){this.ondata(null,e,n)},t.compression=0,t}(),fw=function(){function t(){var e=this;this.i=new bt(function(n,r){e.ondata(null,n,r)})}return t.prototype.push=function(e,n){try{this.i.push(e,n)}catch(r){this.ondata(r,null,n)}},t.compression=8,t}(),mw=function(){function t(e,n){var r=this;n<32e4?this.i=new bt(function(i,a){r.ondata(null,i,a)}):(this.i=new Hu(function(i,a,o){r.ondata(i,a,o)}),this.terminate=this.i.terminate)}return t.prototype.push=function(e,n){this.i.terminate&&(e=Kt(e,0)),this.i.push(e,n)},t.compression=8,t}(),gw=function(){function t(e){this.onfile=e,this.k=[],this.o={0:Xg},this.p=en}return t.prototype.push=function(e,n){var r=this;if(this.onfile||me(5),this.p||me(4),this.c>0){var i=Math.min(this.c,e.length),a=e.subarray(0,i);if(this.c-=i,this.d?this.d.push(a,!this.c):this.k[0].push(a),e=e.subarray(i),e.length)return this.push(e,n)}else{var o=0,s=0,l=void 0,c=void 0;this.p.length?e.length?(c=new Ae(this.p.length+e.length),c.set(this.p),c.set(e,this.p.length)):c=this.p:c=e;for(var u=c.length,p=this.c,d=p&&this.d,h=function(){var f,y=zn(c,s);if(y==67324752){o=1,l=s,b.d=null,b.c=0;var w=Un(c,s+6),E=Un(c,s+8),_=w&2048,T=w&8,v=Un(c,s+26),x=Un(c,s+28);if(u>s+30+v+x){var S=[];b.k.unshift(S),o=2;var A=zn(c,s+18),C=zn(c,s+22),R=Kg(c.subarray(s+30,s+=30+v),!_);A==4294967295?(f=T?[-2]:Gg(c,s),A=f[0],C=f[1]):T&&(A=-1),s+=x,b.c=A;var D,I={name:R,compression:E,start:function(){if(I.ondata||me(5),!A)I.ondata(null,en,!0);else{var N=r.o[E];N||I.ondata(me(14,"unknown compression type "+E,1),null,!1),D=A<0?new N(R):new N(R,A,C),D.ondata=function(te,j,J){I.ondata(te,j,J)};for(var B=0,F=S;B<F.length;B++){var W=F[B];D.push(W,!1)}r.k[0]==S&&r.c?r.d=D:D.push(en,!0)}},terminate:function(){D&&D.terminate&&D.terminate()}};A>=0&&(I.size=A,I.originalSize=C),b.onfile(I)}return"break"}else if(p){if(y==134695760)return l=s+=12+(p==-2&&8),o=3,b.c=0,"break";if(y==33639248)return l=s-=4,o=3,b.c=0,"break"}},b=this;s<u-4;++s){var g=h();if(g==="break")break}if(this.p=en,p<0){var m=o?c.subarray(0,l-12-(p==-2&&8)-(zn(c,l-16)==134695760&&4)):c.subarray(0,s);d?d.push(m,!!o):this.k[+(o==2)].push(m)}if(o&2)return this.push(c.subarray(s),n);this.p=c.subarray(s)}n&&(this.c&&me(13),this.p=null)},t.prototype.register=function(e){this.o[e.compression]=e},t}();var So;function Po(t){return[...t.v,(t.i?"!":"")+t.n].join(":")}function ed(t,e=","){return t.map(Po).join(e)}var td=typeof CSS<"u"&&CSS.escape||(t=>t.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function Bi(t){for(var e=9,n=t.length;n--;)e=Math.imul(e^t.charCodeAt(n),1597334677);return"#"+((e^e>>>9)>>>0).toString(36)}function Ui(t,e="@media "){return e+yt(t).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function yt(t=[]){return Array.isArray(t)?t:t==null?[]:[t]}function Zg(){}var Ze={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function nd(t){return t.match(/[-=:;]/g)?.length||0}function Do(t){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(t)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(nd(t),15)<<18}var Qg=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Mo({n:t,i:e,v:n=[]},r,i,a){t&&(t=Po({n:t,i:e,v:n})),a=[...yt(a)];for(let s of n){let l=r.theme("screens",s);for(let c of yt(l&&Ui(l)||r.v(s))){var o;a.push(c),i|=l?67108864|Do(c):s=="dark"?1073741824:c[0]=="@"?Do(c):(o=c,1<<~(/:([a-z-]+)/.test(o)&&~Qg.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:t,p:i,r:a,i:e}}var Io=new Map;function Ku(t){if(t.d){let e=[],n=Ao(t.r.reduce((r,i)=>i[0]=="@"?(e.push(i),r):i?Ao(r,a=>Ao(i,o=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o);if(s){let l=a.indexOf(s[1]);return~l?a.slice(0,l)+s[0]+a.slice(l+s[1].length):ko(a,o)}return ko(o,a)})):r,"&"),r=>ko(r,t.n?"."+td(t.n):""));return n&&e.push(n.replace(/:merge\((.+?)\)/g,"$1")),e.reduceRight((r,i)=>i+"{"+r+"}",t.d)}}function Ao(t,e){return t.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,i)=>e(r)+i)}function ko(t,e){return t.replace(/&/g,e)}var Gu=new Intl.Collator("en",{numeric:!0});function Jg(t,e){for(var n=0,r=t.length;n<r;){let i=r+n>>1;0>=rd(t[i],e)?n=i+1:r=i}return r}function rd(t,e){let n=t.p&Ze.o;return n==(e.p&Ze.o)&&(n==Ze.b||n==Ze.o)?0:t.p-e.p||t.o-e.o||Gu.compare(Vu(t.n),Vu(e.n))||Gu.compare(Xu(t.n),Xu(e.n))}function Vu(t){return(t||"").split(/:/).pop().split("/").pop()||"\0"}function Xu(t){return(t||"").replace(/\W/g,e=>String.fromCharCode(127+e.charCodeAt(0)))+"\0"}function Eo(t,e){return Math.round(parseInt(t,16)*e)}function gn(t,e={}){if(typeof t=="function")return t(e);let{opacityValue:n="1",opacityVariable:r}=e,i=r?`var(${r})`:n;if(t.includes("<alpha-value>"))return t.replace("<alpha-value>",i);if(t[0]=="#"&&(t.length==4||t.length==7)){let a=(t.length-1)/3,o=[17,1,.062272][a-1];return`rgba(${[Eo(t.substr(1,a),o),Eo(t.substr(1+a,a),o),Eo(t.substr(1+2*a,a),o),i]})`}return i=="1"?t:i=="0"?"#0000":t.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${i})`)}function id(t,e,n,r,i=[]){return function a(o,{n:s,p:l,r:c=[],i:u},p){let d=[],h="",b=0,g=0;for(let y in o||{}){var m,f;let w=o[y];if(y[0]=="@"){if(!w)continue;if(y[1]=="a"){d.push(...od(s,l,Bo(""+w),p,l,c,u,!0));continue}if(y[1]=="l"){for(let E of yt(w))d.push(...a(E,{n:s,p:(m=Ze[y[7]],l&~Ze.o|m),r:y[7]=="d"?[]:c,i:u},p));continue}if(y[1]=="i"){d.push(...yt(w).map(E=>({p:-1,o:0,r:[],d:y+" "+E})));continue}if(y[1]=="k"){d.push({p:Ze.d,o:0,r:[y],d:a(w,{p:Ze.d},p).map(Ku).join("")});continue}if(y[1]=="f"){d.push(...yt(w).map(E=>({p:Ze.d,o:0,r:[y],d:a(E,{p:Ze.d},p).map(Ku).join("")})));continue}}if(typeof w!="object"||Array.isArray(w))y=="label"&&w?s=w+Bi(JSON.stringify([l,u,o])):(w||w===0)&&(y=y.replace(/[A-Z]/g,E=>"-"+E.toLowerCase()),g+=1,b=Math.max(b,(f=y)[0]=="-"?0:nd(f)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(f)?+!!RegExp.$1||-!!RegExp.$2:0)+1),h+=(h?";":"")+yt(w).map(E=>p.s(y,ad(""+E,p.theme)+(u?" !important":""))).join(";"));else if(y[0]=="@"||y.includes("&")){let E=l;y[0]=="@"&&(y=y.replace(/\bscreen\(([^)]+)\)/g,(_,T)=>{let v=p.theme("screens",T);return v?(E|=67108864,Ui(v,"")):_}),E|=Do(y)),d.push(...a(w,{n:s,p:E,r:[...c,y],i:u},p))}else d.push(...a(w,{p:l,r:[...c,y]},p))}return d.unshift({n:s,p:l,o:Math.max(0,15-g)+1.5*Math.min(b||15,15),r:c,d:h}),d.sort(rd)}(t,Mo(e,n,r,i),n)}function ad(t,e){return t.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,i,a,o="")=>{let s=e(i,o);return typeof s=="function"&&/color|fill|stroke/i.test(i)?gn(s):""+yt(s).filter(l=>Object(l)!==l)})}function Fo(t,e){let n,r=[];for(let i of t)i.d&&i.n?n?.p==i.p&&""+n.r==""+i.r?(n.c=[n.c,i.c].filter(Boolean).join(" "),n.d=n.d+";"+i.d):r.push(n={...i,n:i.n&&e}):r.push({...i,n:i.n&&e});return r}function Ro(t,e,n=Ze.u,r,i){let a=[];for(let o of t)for(let s of function(l,c,u,p,d){l={...l,i:l.i||d};let h=function(b,g){let m=Io.get(b.n);return m?m(b,g):g.r(b.n,b.v[0]=="dark")}(l,c);return h?typeof h=="string"?({r:p,p:u}=Mo(l,c,u,p),Fo(Ro(Bo(h),c,u,p,l.i),l.n)):Array.isArray(h)?h.map(b=>{var g,m;return{o:0,...b,r:[...yt(p),...yt(b.r)],p:(g=u,m=b.p??u,g&~Ze.o|m)}}):id(h,l,c,u,p):[{c:Po(l),p:0,o:0,r:[]}]}(o,e,n,r,i))a.splice(Jg(a,s),0,s);return a}function od(t,e,n,r,i,a,o,s){return Fo((s?n.flatMap(l=>Ro([l],r,i,a,o)):Ro(n,r,i,a,o)).map(l=>l.p&Ze.o&&(l.n||e==Ze.b)?{...l,p:l.p&~Ze.o|e,o:0}:l),t)}function e0(t,e,n,r){var i;return i=(a,o)=>{let{n:s,p:l,r:c,i:u}=Mo(a,o,e);return n&&od(s,e,n,o,l,c,u,r)},Io.set(t,i),t}function Co(t,e,n){if(t[t.length-1]!="("){let r=[],i=!1,a=!1,o="";for(let s of t)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),i=!i),s.endsWith(":")){r[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),a=!a),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(o+=(o&&"-")+s)}o&&(a&&(o="-"+o),e[0].push({n:o,v:r.filter(t0),i}))}}function t0(t,e,n){return n.indexOf(t)==e}var Yu=new Map;function Bo(t){let e=Yu.get(t);if(!e){let n=[],r=[[]],i=0,a=0,o=null,s=0,l=(c,u=0)=>{i!=s&&(n.push(t.slice(i,s+u)),c&&Co(n,r)),i=s+1};for(;s<t.length;s++){let c=t[s];if(a)t[s-1]!="\\"&&(a+=+(c=="[")||-(c=="]"));else if(c=="[")a+=1;else if(o)t[s-1]!="\\"&&o.test(t.slice(s))&&(o=null,i=s+RegExp.lastMatch.length);else if(c=="/"&&t[s-1]!="\\"&&(t[s+1]=="*"||t[s+1]=="/"))o=t[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(c=="(")l(),n.push(c);else if(c==":")t[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(c)){l(!0);let u=n.lastIndexOf("(");if(c==")"){let p=n[u-1];if(/[~@]$/.test(p)){let d=r.shift();n.length=u,Co([...n,"#"],r);let{v:h}=r[0].pop();for(let b of d)b.v.splice(+(b.v[0]=="dark")-+(h[0]=="dark"),h.length);Co([...n,e0(p.length>1?p.slice(0,-1)+Bi(JSON.stringify([p,d])):p+"("+ed(d)+")",Ze.a,d,/@$/.test(p))],r)}u=n.lastIndexOf("(",u-1)}n.length=u+1}else/[~@]/.test(c)&&t[s+1]=="("&&r.unshift([])}l(!0),Yu.set(t,e=r[0])}return e}function sd(t,e,n){return e.reduce((r,i,a)=>r+n(i)+t[a+1],t[0])}function ld(t,e){return Array.isArray(t)&&Array.isArray(t.raw)?sd(t,e,n=>Lo(n).trim()):e.filter(Boolean).reduce((n,r)=>n+Lo(r),t?Lo(t):"")}function Lo(t){let e,n="";if(t&&typeof t=="object")if(Array.isArray(t))(e=ld(t[0],t.slice(1)))&&(n+=" "+e);else for(let r in t)t[r]&&(n+=" "+r);else t!=null&&typeof t!="boolean"&&(n+=" "+t);return n}var xw=cd("@"),Tw=cd("~");function cd(t){return new Proxy(function(n,...r){return e("",n,r)},{get(n,r){return r in n?n[r]:function(i,...a){return e(r,i,a)}}});function e(n,r,i){return ed(Bo(n+t+"("+ld(r,i)+")"))}}function No(t,e){return Array.isArray(t)?Zu(sd(t,e,n=>n!=null&&typeof n!="boolean"?n:"")):typeof t=="string"?Zu(t):[t]}var n0=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Zu(t){let e;t=t.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],i=[];for(;e=n0.exec(t);)e[4]&&(n.shift(),i.shift()),e[3]?(i.unshift(e[3]),n.unshift({}),r.push(i.reduce((a,o)=>({[o]:a}),n[0]))):e[4]||(n[0][e[1]]&&(n.unshift({}),r.push(i.reduce((a,o)=>({[o]:a}),n[0]))),n[0][e[1]]=e[2]);return r}function ud(t,...e){var n;let r=No(t,e),i=(r.find(a=>a.label)?.label||"css")+Bi(JSON.stringify(r));return n=(a,o)=>Fo(r.flatMap(s=>id(s,a,o,Ze.o)),i),Io.set(i,n),i}var _w=new Proxy(function(t,e){return Qu("animation",t,e)},{get(t,e){return e in t?t[e]:function(n,r){return Qu(e,n,r)}}});function Qu(t,e,n){return{toString(){return ud({label:t,"@layer components":{...typeof e=="object"?e:{animation:e},animationName:""+n}})}}}function G(t,e,n){return[t,r0(e,n)]}function r0(t,e){return typeof t=="function"?t:typeof t=="string"&&/^[\w-]+$/.test(t)?(n,r)=>({[t]:e?e(n,r):Oo(n,1)}):n=>t||{[n[1]]:Oo(n,2)}}function Oo(t,e,n=t.slice(e).find(Boolean)||t.$$||t.input){return t.input[0]=="-"?`calc(${n} * -1)`:n}function X(t,e,n,r){return[t,i0(e,n,r)]}function i0(t,e,n){let r=typeof e=="string"?(i,a)=>({[e]:n?n(i,a):i._}):e||(({1:i,_:a},o,s)=>({[i||s]:a}));return(i,a)=>{let o=dd(t||i[1]),s=a.theme(o,i.$$)??Kn(i.$$,o,a);if(s!=null)return i._=Oo(i,0,s),r(i,a,o)}}function Ue(t,e={},n){return[t,a0(e,n)]}function a0(t={},e){return(n,r)=>{let{section:i=dd(n[0]).replace("-","")+"Color"}=t,[a,o]=o0(n.$$);if(!a)return;let s=r.theme(i,a)||Kn(a,i,r);if(!s||typeof s=="object")return;let{opacityVariable:l=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:c=i.replace("Color","Opacity"),property:u=i,selector:p}=t,d=r.theme(c,o||"DEFAULT")||o&&Kn(o,c,r),h=e||(({_:g})=>{let m=Tr(u,g);return p?{[p]:m}:m});n._={value:gn(s,{opacityVariable:l||void 0,opacityValue:d||void 0}),color:g=>gn(s,g),opacityVariable:l||void 0,opacityValue:d||void 0};let b=h(n,r);if(!n.dark){let g=r.d(i,a,s);g&&g!==s&&(n._={value:gn(g,{opacityVariable:l||void 0,opacityValue:d||"1"}),color:m=>gn(g,m),opacityVariable:l||void 0,opacityValue:d||void 0},b={"&":b,[r.v("dark")]:h(n,r)})}return b}}function o0(t){return(t.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function Tr(t,e){let n={};return typeof e=="string"?n[t]=e:(e.opacityVariable&&e.value.includes(e.opacityVariable)&&(n[e.opacityVariable]=e.opacityValue||"1"),n[t]=e.value),n}function Kn(t,e,n){if(t[0]=="["&&t.slice(-1)=="]"){if(t=Fi(ad(t.slice(1,-1),n.theme)),!e)return t;if(!(/color|fill|stroke/i.test(e)&&!(/^color:/.test(t)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(t))||/image/i.test(e)&&!(/^image:/.test(t)||/^[a-z-]+\(/.test(t))||/weight/i.test(e)&&!(/^(number|any):/.test(t)||/^\d+$/.test(t))||/position/i.test(e)&&/^(length|size):/.test(t)))return t.replace(/^[a-z-]+:/,"")}}function dd(t){return t.replace(/-./g,e=>e[1].toUpperCase())}function Fi(t){return t.includes("url(")?t.replace(/(.*?)(url\(.*?\))(.*?)/g,(e,n="",r,i="")=>Fi(n)+r+Fi(i)):t.replace(/(^|[^\\])_+/g,(e,n)=>n+" ".repeat(e.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,e=>e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var Sw=Symbol();var pd=new Proxy(Zg,{apply(t,e,n){return So(n[0])},get(t,e){let n=So[e];return typeof n=="function"?function(){return n.apply(So,arguments)}:n}});var Aw=function t(e){return new Proxy(function(n,...r){return Ju(e,"",n,r)},{get(n,r){return r==="bind"?t:r in n?n[r]:function(i,...a){return Ju(e,r,i,a)}}})}();function Ju(t,e,n,r){return{toString(){let i=No(n,r),a=td(e+Bi(JSON.stringify([e,i])));return(typeof t=="function"?t:pd)(ud({[`@keyframes ${a}`]:No(n,r)})),a}}}var hd={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...wt(4,"rem",4,.5,.5),...wt(12,"rem",4,5),14:"3.5rem",...wt(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:we("blur"),backdropBrightness:we("brightness"),backdropContrast:we("contrast"),backdropGrayscale:we("grayscale"),backdropHueRotate:we("hueRotate"),backdropInvert:we("invert"),backdropOpacity:we("opacity"),backdropSaturate:we("saturate"),backdropSepia:we("sepia"),backgroundColor:we("colors"),backgroundImage:{none:"none"},backgroundOpacity:we("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...wt(200,"",100,0,50),...wt(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:t})=>({DEFAULT:t("colors.gray.200","currentColor"),...t("colors")}),borderOpacity:we("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:we("spacing"),borderWidth:{DEFAULT:"1px",...Lt(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:we("colors"),caretColor:we("colors"),accentColor:({theme:t})=>({auto:"auto",...t("colors")}),contrast:{...wt(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:we("borderColor"),divideOpacity:we("borderOpacity"),divideWidth:we("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:({theme:t})=>({...t("colors"),none:"none"}),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:t})=>({...t("spacing"),..._r(2,6),..._r(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:we("spacing"),gradientColorStops:we("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:t})=>({...t("spacing"),..._r(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:t})=>({...t("spacing"),..._r(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...wt(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:t})=>({auto:"auto",...t("spacing")}),maxHeight:({theme:t})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...t("spacing")}),maxWidth:({theme:t,breakpoints:e})=>({...e(t("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...wt(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:we("spacing"),placeholderColor:we("colors"),placeholderOpacity:we("opacity"),outlineColor:we("colors"),outlineOffset:Lt(8,"px"),outlineWidth:Lt(8,"px"),ringColor:({theme:t})=>({...t("colors"),DEFAULT:"#3b82f6"}),ringOffsetColor:we("colors"),ringOffsetWidth:Lt(8,"px"),ringOpacity:({theme:t})=>({...t("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...Lt(8,"px")},rotate:{...Lt(2,"deg"),...Lt(12,"deg",3),...Lt(180,"deg",45)},saturate:wt(200,"",100,0,50),scale:{...wt(150,"",100,0,50),...wt(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:we("spacing"),scrollPadding:we("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...Lt(2,"deg"),...Lt(12,"deg",3)},space:we("spacing"),stroke:({theme:t})=>({...t("colors"),none:"none"}),strokeWidth:wt(2),textColor:we("colors"),textDecorationColor:we("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...Lt(8,"px")},textUnderlineOffset:{auto:"auto",...Lt(8,"px")},textIndent:we("spacing"),textOpacity:we("opacity"),transitionDuration:({theme:t})=>({...t("durations"),DEFAULT:"150ms"}),transitionDelay:we("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:t})=>({...t("spacing"),..._r(2,4),full:"100%"}),width:({theme:t})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...t("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...wt(50,"",1,0,10),auto:"auto"}};function _r(t,e){let n={};do for(var r=1;r<t;r++)n[`${r}/${t}`]=Number((r/t*100).toFixed(6))+"%";while(++t<=e);return n}function Lt(t,e,n=0){let r={};for(;n<=t;n=2*n||1)r[n]=n+e;return r}function wt(t,e="",n=1,r=0,i=1,a={}){for(;r<=t;r+=i)a[r]=r/n+e;return a}function we(t){return({theme:e})=>e(t)}var $w={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${hd.fontFamily.sans})`,fontFeatureSettings:"theme(fontFamily.sans[1].fontFeatureSettings, normal)"},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${hd.fontFamily.mono})`,fontFeatureSettings:"theme(fontFamily.mono[1].fontFeatureSettings, normal)",fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},qw=[G("\\[([-\\w]+):(.+)]",({1:t,2:e},n)=>({"@layer overrides":{"&":{[t]:Kn(`[${e}]`,"",n)}}})),G("(group|peer)([~/][^-[]+)?",({input:t},{h:e})=>[{c:e(t)}]),X("aspect-","aspectRatio"),G("container",(t,{theme:e})=>{let{screens:n=e("screens"),center:r,padding:i}=e("container"),a={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...o("xs")};for(let s in n){let l=n[s];typeof l=="string"&&(a[Ui(l)]={"&":{maxWidth:l,...o(s)}})}return a;function o(s){let l=i&&(typeof i=="string"?i:i[s]||i.DEFAULT);if(l)return{paddingRight:l,paddingLeft:l}}}),X("content-","content",({_:t})=>({"--tw-content":t,content:"var(--tw-content)"})),G("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),G("box-(border|content)","boxSizing",({1:t})=>t+"-box"),G("hidden",{display:"none"}),G("table-(auto|fixed)","tableLayout"),G(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",G("isolate","isolation"),G("object-(contain|cover|fill|none|scale-down)","objectFit"),X("object-","objectPosition"),G("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",zi),G("overscroll(-[xy])?-(auto|contain|none)",({1:t="",2:e})=>({["overscroll-behavior"+t]:e})),G("(static|fixed|absolute|relative|sticky)","position"),X("-?inset(-[xy])?(?:$|-)","inset",({1:t,_:e})=>({top:t!="-x"&&e,right:t!="-y"&&e,bottom:t!="-x"&&e,left:t!="-y"&&e})),X("-?(top|bottom|left|right)(?:$|-)","inset"),G("(visible|collapse)","visibility"),G("invisible",{visibility:"hidden"}),X("-?z-","zIndex"),G("flex-((row|col)(-reverse)?)","flexDirection",fd),G("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),X("(flex-(?:grow|shrink))(?:$|-)"),X("(flex)-"),X("grow(?:$|-)","flexGrow"),X("shrink(?:$|-)","flexShrink"),X("basis-","flexBasis"),X("-?(order)-"),"-?(order)-(\\d+)",X("grid-cols-","gridTemplateColumns"),G("grid-cols-(\\d+)","gridTemplateColumns",yd),X("col-","gridColumn"),G("col-(span)-(\\d+)","gridColumn",bd),X("col-start-","gridColumnStart"),G("col-start-(auto|\\d+)","gridColumnStart"),X("col-end-","gridColumnEnd"),G("col-end-(auto|\\d+)","gridColumnEnd"),X("grid-rows-","gridTemplateRows"),G("grid-rows-(\\d+)","gridTemplateRows",yd),X("row-","gridRow"),G("row-(span)-(\\d+)","gridRow",bd),X("row-start-","gridRowStart"),G("row-start-(auto|\\d+)","gridRowStart"),X("row-end-","gridRowEnd"),G("row-end-(auto|\\d+)","gridRowEnd"),G("grid-flow-((row|col)(-dense)?)","gridAutoFlow",t=>zi(fd(t))),G("grid-flow-(dense)","gridAutoFlow"),X("auto-cols-","gridAutoColumns"),X("auto-rows-","gridAutoRows"),X("gap-x(?:$|-)","gap","columnGap"),X("gap-y(?:$|-)","gap","rowGap"),X("gap(?:$|-)","gap"),"(justify-(?:items|self))-",G("justify-","justifyContent",md),G("(content|items|self)-",t=>({["align-"+t[1]]:md(t)})),G("(place-(content|items|self))-",({1:t,$$:e})=>({[t]:("wun".includes(e[3])?"space-":"")+e})),X("p([xytrbl])?(?:$|-)","padding",Gn("padding")),X("-?m([xytrbl])?(?:$|-)","margin",Gn("margin")),X("-?space-(x|y)(?:$|-)","space",({1:t,_:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${t}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[t]]:`calc(${e} * calc(1 - var(--tw-space-${t}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[t]]:`calc(${e} * var(--tw-space-${t}-reverse))`}})),G("space-(x|y)-reverse",({1:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${t}-reverse`]:"1"}})),X("w-","width"),X("min-w-","minWidth"),X("max-w-","maxWidth"),X("h-","height"),X("min-h-","minHeight"),X("max-h-","maxHeight"),X("font-","fontWeight"),X("font-","fontFamily",({_:t})=>typeof(t=yt(t))[1]=="string"?{fontFamily:It(t)}:{fontFamily:It(t[0]),...t[1]}),G("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),G("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),G("italic","fontStyle"),G("not-italic",{fontStyle:"normal"}),G("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:t,2:e="",3:n})=>e=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(e[0])?"numeric-spacing":e?"numeric-figure":t)]:t,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)",...bn({"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"})}),X("tracking-","letterSpacing"),X("leading-","lineHeight"),G("list-(inside|outside)","listStylePosition"),X("list-","listStyleType"),G("list-","listStyleType"),X("placeholder-opacity-","placeholderOpacity",({_:t})=>({"&::placeholder":{"--tw-placeholder-opacity":t}})),Ue("placeholder-",{property:"color",selector:"&::placeholder"}),G("text-(left|center|right|justify|start|end)","textAlign"),G("text-(ellipsis|clip)","textOverflow"),X("text-opacity-","textOpacity","--tw-text-opacity"),Ue("text-",{property:"color"}),X("text-","fontSize",({_:t})=>typeof t=="string"?{fontSize:t}:{fontSize:t[0],...typeof t[1]=="string"?{lineHeight:t[1]}:t[1]}),X("indent-","textIndent"),G("(overline|underline|line-through)","textDecorationLine"),G("no-underline",{textDecorationLine:"none"}),X("underline-offset-","textUnderlineOffset"),Ue("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),X("decoration-","textDecorationThickness"),G("decoration-","textDecorationStyle"),G("(uppercase|lowercase|capitalize)","textTransform"),G("normal-case",{textTransform:"none"}),G("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),G("align-","verticalAlign"),G("whitespace-","whiteSpace"),G("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),G("break-words",{overflowWrap:"break-word"}),G("break-all",{wordBreak:"break-all"}),G("break-keep",{wordBreak:"keep-all"}),Ue("caret-",{opacityVariable:!1,opacitySection:"opacity"}),Ue("accent-",{opacityVariable:!1,opacitySection:"opacity"}),G("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:t})=>`linear-gradient(to ${En(t," ")},var(--tw-gradient-stops))`),Ue("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-gradient-from":t.value,"--tw-gradient-to":t.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),Ue("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-gradient-to":t.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${t.value},var(--tw-gradient-to)`})),Ue("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),G("bg-(fixed|local|scroll)","backgroundAttachment"),G("bg-origin-(border|padding|content)","backgroundOrigin",({1:t})=>t+"-box"),G(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),G("bg-blend-","backgroundBlendMode"),G("bg-clip-(border|padding|content|text)","backgroundClip",({1:t})=>t+(t=="text"?"":"-box")),X("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),Ue("bg-",{section:"backgroundColor"}),X("bg-","backgroundImage"),X("bg-","backgroundPosition"),G("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",zi),X("bg-","backgroundSize"),X("rounded(?:$|-)","borderRadius"),X("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:t,_:e})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[t]||[t,t];return{[`border-${En(n[0])}-radius`]:e,[`border-${En(n[1])}-radius`]:e}}),G("border-(collapse|separate)","borderCollapse"),X("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),G("border-(solid|dashed|dotted|double|none)","borderStyle"),X("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:t,_:e})=>({...bn({"--tw-border-spacing-x":"0","--tw-border-spacing-y":"0"}),["--tw-border-spacing"+(t||"-x")]:e,["--tw-border-spacing"+(t||"-y")]:e,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),Ue("border-([xytrbl])-",{section:"borderColor"},Gn("border","Color")),Ue("border-"),X("border-([xytrbl])(?:$|-)","borderWidth",Gn("border","Width")),X("border(?:$|-)","borderWidth"),X("divide-opacity(?:$|-)","divideOpacity",({_:t})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":t}})),G("divide-(solid|dashed|dotted|double|none)",({1:t})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:t}})),G("divide-([xy]-reverse)",({1:t})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+t]:"1"}})),X("divide-([xy])(?:$|-)","divideWidth",({1:t,_:e})=>{let n={x:"lr",y:"tb"}[t];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${t}-reverse`]:"0",[`border-${En(n[0])}Width`]:`calc(${e} * calc(1 - var(--tw-divide-${t}-reverse)))`,[`border-${En(n[1])}Width`]:`calc(${e} * var(--tw-divide-${t}-reverse))`}}}),Ue("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),X("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),Ue("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),X("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),G("ring-inset",{"--tw-ring-inset":"inset"}),Ue("ring-",{property:"--tw-ring-color"}),X("ring(?:$|-)","ringWidth",({_:t},{theme:e})=>({...bn({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":e("ringOffsetWidth","","0px"),"--tw-ring-offset-color":gn(e("ringOffsetColor","","#fff")),"--tw-ring-color":gn(e("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":e("ringOpacity","","0.5")}}),"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${t} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),Ue("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:t})=>({"--tw-shadow-color":t.value,"--tw-shadow":"var(--tw-shadow-colored)"})),X("shadow(?:$|-)","boxShadow",({_:t})=>({...bn({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}),"--tw-shadow":It(t),"--tw-shadow-colored":It(t).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),X("(opacity)-"),G("mix-blend-","mixBlendMode"),...gd(),...gd("backdrop-"),X("transition(?:$|-)","transitionProperty",(t,{theme:e})=>({transitionProperty:It(t),transitionTimingFunction:t._=="none"?void 0:It(e("transitionTimingFunction","")),transitionDuration:t._=="none"?void 0:It(e("transitionDuration",""))})),X("duration(?:$|-)","transitionDuration","transitionDuration",It),X("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",It),X("delay(?:$|-)","transitionDelay","transitionDelay",It),X("animate(?:$|-)","animation",(t,{theme:e,h:n,e:r})=>{let i=It(t),a=i.split(" "),o=e("keyframes",a[0]);return o?{["@keyframes "+(a[0]=r(n(a[0])))]:o,animation:a.join(" ")}:{animation:i}}),"(transform)-(none)",G("transform",zo),G("transform-(cpu|gpu)",({1:t})=>({"--tw-transform":wd(t=="gpu")})),X("scale(-[xy])?-","scale",({1:t,_:e})=>({["--tw-scale"+(t||"-x")]:e,["--tw-scale"+(t||"-y")]:e,...zo()})),X("-?(rotate)-","rotate",Uo),X("-?(translate-[xy])-","translate",Uo),X("-?(skew-[xy])-","skew",Uo),G("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",zi),"(appearance)-",X("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",X("(cursor)-"),"(cursor)-",G("snap-(none)","scroll-snap-type"),G("snap-(x|y|both)",({1:t})=>({...bn({"--tw-scroll-snap-strictness":"proximity"}),"scroll-snap-type":t+" var(--tw-scroll-snap-strictness)"})),G("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),G("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),G("snap-(normal|always)","scroll-snap-stop"),G("scroll-(auto|smooth)","scroll-behavior"),X("scroll-p([xytrbl])?(?:$|-)","padding",Gn("scroll-padding")),X("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",Gn("scroll-margin")),G("touch-(auto|none|manipulation)","touch-action"),G("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:t,2:e,3:n})=>({...bn({"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}),[`--tw-${e?"pan-x":n?"pan-y":t}`]:t,"touch-action":"var(--tw-touch-action)"})),G("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),G("outline",{outlineStyle:"solid"}),G("outline-(dashed|dotted|double)","outlineStyle"),X("-?(outline-offset)-"),Ue("outline-",{opacityVariable:!1,opacitySection:"opacity"}),X("outline-","outlineWidth"),"(pointer-events)-",X("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:t})=>({x:"horizontal",y:"vertical"})[t]||t||"both"],G("select-(none|text|all|auto)","userSelect"),Ue("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),Ue("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),X("stroke-","strokeWidth"),G("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),G("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function zi(t){return(typeof t=="string"?t:t[1]).replace(/-/g," ").trim()}function fd(t){return(typeof t=="string"?t:t[1]).replace("col","column")}function En(t,e="-"){let n=[];for(let r of t)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(e)}function It(t){return t&&""+(t._||t)}function md({$$:t}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[t[3]||""]||"")+t}function Gn(t,e=""){return({1:n,_:r})=>{let i={x:"lr",y:"tb"}[n]||n+n;return i?{...Tr(t+"-"+En(i[0])+e,r),...Tr(t+"-"+En(i[1])+e,r)}:Tr(t+e,r)}}function gd(t=""){let e=["blur","brightness","contrast","grayscale","hue-rotate","invert",t&&"opacity","saturate","sepia",!t&&"drop-shadow"].filter(Boolean),n={};for(let r of e)n[`--tw-${t}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={...bn(n),[`${t}filter`]:e.map(r=>`var(--tw-${t}${r})`).join(" ")},[`(${t}filter)-(none)`,G(`${t}filter`,n),...e.map(r=>X(`${r[0]=="h"?"-?":""}(${t}${r})(?:$|-)`,r,({1:i,_:a})=>({[`--tw-${i}`]:yt(a).map(o=>`${r}(${o})`).join(" "),...n})))]}function Uo({1:t,_:e}){return{["--tw-"+t]:e,...zo()}}function zo(){return{...bn({"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":wd()}),transform:"var(--tw-transform)"}}function wd(t){return[t?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function bd({1:t,2:e}){return`${t} ${e} / ${t} ${e}`}function yd({1:t}){return`repeat(${t},minmax(0,1fr))`}function bn(t){return{"@layer defaults":{"*,::before,::after":t,"::backdrop":t}}}var Ad,be,kd,c0,Sr,vd,u0,Ed={},Cd=[],d0=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function yn(t,e){for(var n in e)t[n]=e[n];return t}function Ld(t){var e=t.parentNode;e&&e.removeChild(t)}function Ho(t,e,n,r,i){var a={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++kd};return i==null&&be.vnode!=null&&be.vnode(a),a}function Xn(t){return t.children}function Hi(t,e){this.props=t,this.context=e}function Vn(t,e){if(e==null)return t.__?Vn(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?Vn(t):null}function Dd(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Dd(t)}}function xd(t){(!t.__d&&(t.__d=!0)&&Sr.push(t)&&!Wi.__r++||vd!==be.debounceRendering)&&((vd=be.debounceRendering)||setTimeout)(Wi)}function Wi(){for(var t;Wi.__r=Sr.length;)t=Sr.sort(function(e,n){return e.__v.__b-n.__v.__b}),Sr=[],t.some(function(e){var n,r,i,a,o,s;e.__d&&(o=(a=(n=e).__v).__e,(s=n.__P)&&(r=[],(i=yn({},a)).__v=a.__v+1,Pd(s,a,i,n.__n,s.ownerSVGElement!==void 0,a.__h!=null?[o]:null,r,o??Vn(a),a.__h),h0(r,a),a.__e!=o&&Dd(a)))})}function Rd(t,e,n,r,i,a,o,s,l,c){var u,p,d,h,b,g,m,f=r&&r.__k||Cd,y=f.length;for(n.__k=[],u=0;u<e.length;u++)if((h=n.__k[u]=(h=e[u])==null||typeof h=="boolean"?null:typeof h=="string"||typeof h=="number"||typeof h=="bigint"?Ho(null,h,null,null,h):Array.isArray(h)?Ho(Xn,{children:h},null,null,null):h.__b>0?Ho(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):h)!=null){if(h.__=n,h.__b=n.__b+1,(d=f[u])===null||d&&h.key==d.key&&h.type===d.type)f[u]=void 0;else for(p=0;p<y;p++){if((d=f[p])&&h.key==d.key&&h.type===d.type){f[p]=void 0;break}d=null}Pd(t,h,d=d||Ed,i,a,o,s,l,c),b=h.__e,(p=h.ref)&&d.ref!=p&&(m||(m=[]),d.ref&&m.push(d.ref,null,h),m.push(p,h.__c||b,h)),b!=null?(g==null&&(g=b),typeof h.type=="function"&&h.__k===d.__k?h.__d=l=Nd(h,l,t):l=Od(t,h,d,f,b,l),typeof n.type=="function"&&(n.__d=l)):l&&d.__e==l&&l.parentNode!=t&&(l=Vn(d))}for(n.__e=g,u=y;u--;)f[u]!=null&&(typeof n.type=="function"&&f[u].__e!=null&&f[u].__e==n.__d&&(n.__d=Vn(r,u+1)),Id(f[u],f[u]));if(m)for(u=0;u<m.length;u++)Md(m[u],m[++u],m[++u])}function Nd(t,e,n){for(var r,i=t.__k,a=0;i&&a<i.length;a++)(r=i[a])&&(r.__=t,e=typeof r.type=="function"?Nd(r,e,n):Od(n,r,r,i,r.__e,e));return e}function Od(t,e,n,r,i,a){var o,s,l;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(n==null||i!=a||i.parentNode==null)e:if(a==null||a.parentNode!==t)t.appendChild(i),o=null;else{for(s=a,l=0;(s=s.nextSibling)&&l<r.length;l+=2)if(s==i)break e;t.insertBefore(i,a),o=a}return o!==void 0?o:i.nextSibling}function p0(t,e,n,r,i){var a;for(a in n)a==="children"||a==="key"||a in e||$i(t,a,null,n[a],r);for(a in e)i&&typeof e[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===e[a]||$i(t,a,e[a],n[a],r)}function Td(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||d0.test(e)?n:n+"px"}function $i(t,e,n,r,i){var a;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||Td(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||Td(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")a=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+a]=n,n?r||t.addEventListener(e,a?Sd:_d,a):t.removeEventListener(e,a?Sd:_d,a);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function _d(t){this.l[t.type+!1](be.event?be.event(t):t)}function Sd(t){this.l[t.type+!0](be.event?be.event(t):t)}function Pd(t,e,n,r,i,a,o,s,l){var c,u,p,d,h,b,g,m,f,y,w,E,_,T=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,s=e.__e=n.__e,e.__h=null,a=[s]),(c=be.__b)&&c(e);try{e:if(typeof T=="function"){if(m=e.props,f=(c=T.contextType)&&r[c.__c],y=c?f?f.props.value:c.__:r,n.__c?g=(u=e.__c=n.__c).__=u.__E:("prototype"in T&&T.prototype.render?e.__c=u=new T(m,y):(e.__c=u=new Hi(m,y),u.constructor=T,u.render=m0),f&&f.sub(u),u.props=m,u.state||(u.state={}),u.context=y,u.__n=r,p=u.__d=!0,u.__h=[]),u.__s==null&&(u.__s=u.state),T.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=yn({},u.__s)),yn(u.__s,T.getDerivedStateFromProps(m,u.__s))),d=u.props,h=u.state,p)T.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(T.getDerivedStateFromProps==null&&m!==d&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(m,y),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(m,u.__s,y)===!1||e.__v===n.__v){u.props=m,u.state=u.__s,e.__v!==n.__v&&(u.__d=!1),u.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(v){v&&(v.__=e)}),u.__h.length&&o.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(m,u.__s,y),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(d,h,b)})}if(u.context=y,u.props=m,u.__v=e,u.__P=t,w=be.__r,E=0,"prototype"in T&&T.prototype.render)u.state=u.__s,u.__d=!1,w&&w(e),c=u.render(u.props,u.state,u.context);else do u.__d=!1,w&&w(e),c=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++E<25);u.state=u.__s,u.getChildContext!=null&&(r=yn(yn({},r),u.getChildContext())),p||u.getSnapshotBeforeUpdate==null||(b=u.getSnapshotBeforeUpdate(d,h)),_=c!=null&&c.type===Xn&&c.key==null?c.props.children:c,Rd(t,Array.isArray(_)?_:[_],e,n,r,i,a,o,s,l),u.base=e.__e,e.__h=null,u.__h.length&&o.push(u),g&&(u.__E=u.__=null),u.__e=!1}else a==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=f0(n.__e,e,n,r,i,a,o,l);(c=be.diffed)&&c(e)}catch(v){e.__v=null,(l||a!=null)&&(e.__e=s,e.__h=!!l,a[a.indexOf(s)]=null),be.__e(v,e,n)}}function h0(t,e){be.__c&&be.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){be.__e(r,n.__v)}})}function f0(t,e,n,r,i,a,o,s){var l,c,u,p=n.props,d=e.props,h=e.type,b=0;if(h==="svg"&&(i=!0),a!=null){for(;b<a.length;b++)if((l=a[b])&&"setAttribute"in l==!!h&&(h?l.localName===h:l.nodeType===3)){t=l,a[b]=null;break}}if(t==null){if(h===null)return document.createTextNode(d);t=i?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,d.is&&d),a=null,s=!1}if(h===null)p===d||s&&t.data===d||(t.data=d);else{if(a=a&&Ad.call(t.childNodes),c=(p=n.props||Ed).dangerouslySetInnerHTML,u=d.dangerouslySetInnerHTML,!s){if(a!=null)for(p={},b=0;b<t.attributes.length;b++)p[t.attributes[b].name]=t.attributes[b].value;(u||c)&&(u&&(c&&u.__html==c.__html||u.__html===t.innerHTML)||(t.innerHTML=u&&u.__html||""))}if(p0(t,d,p,i,s),u)e.__k=[];else if(b=e.props.children,Rd(t,Array.isArray(b)?b:[b],e,n,r,i&&h!=="foreignObject",a,o,a?a[0]:n.__k&&Vn(n,0),s),a!=null)for(b=a.length;b--;)a[b]!=null&&Ld(a[b]);s||("value"in d&&(b=d.value)!==void 0&&(b!==t.value||h==="progress"&&!b||h==="option"&&b!==p.value)&&$i(t,"value",b,p.value,!1),"checked"in d&&(b=d.checked)!==void 0&&b!==t.checked&&$i(t,"checked",b,p.checked,!1))}return t}function Md(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){be.__e(r,n)}}function Id(t,e,n){var r,i;if(be.unmount&&be.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Md(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){be.__e(a,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&Id(r[i],e,typeof t.type!="function");n||t.__e==null||Ld(t.__e),t.__=t.__e=t.__d=void 0}function m0(t,e,n){return this.constructor(t,n)}Ad=Cd.slice,be={__e:function(t,e,n,r){for(var i,a,o;e=e.__;)if((i=e.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(t)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),o=i.__d),o)return i.__E=i}catch(s){t=s}throw t}},kd=0,c0=function(t){return t!=null&&t.constructor===void 0},Hi.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=yn({},this.state),typeof t=="function"&&(t=t(yn({},n),this.props)),t&&yn(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),xd(this))},Hi.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),xd(this))},Hi.prototype.render=Xn,Sr=[],Wi.__r=0,u0=0;var g0,Gt,Wo,Fd;var jd=[],$o=[],Bd=be.__b,Ud=be.__r,zd=be.diffed,Hd=be.__c,Wd=be.unmount;function b0(){for(var t;t=jd.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(ji),t.__H.__h.forEach(jo),t.__H.__h=[]}catch(e){t.__H.__h=[],be.__e(e,t.__v)}}be.__b=function(t){typeof t.type!="function"||t.o||t.type===Xn?t.o||(t.o=t.__&&t.__.o?t.__.o:""):t.o=(t.__&&t.__.o?t.__.o:"")+(t.__&&t.__.__k?t.__.__k.indexOf(t):0),Gt=null,Bd&&Bd(t)},be.__r=function(t){Ud&&Ud(t),g0=0;var e=(Gt=t.__c).__H;e&&(Wo===Gt?(e.__h=[],Gt.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=$o,n.__N=n.i=void 0})):(e.__h.forEach(ji),e.__h.forEach(jo),e.__h=[])),Wo=Gt},be.diffed=function(t){zd&&zd(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(jd.push(e)!==1&&Fd===be.requestAnimationFrame||((Fd=be.requestAnimationFrame)||y0)(b0)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==$o&&(n.__=n.__V),n.i=void 0,n.__V=$o})),Wo=Gt=null},be.__c=function(t,e){e.some(function(n){try{n.__h.forEach(ji),n.__h=n.__h.filter(function(r){return!r.__||jo(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],be.__e(r,n.__v)}}),Hd&&Hd(t,e)},be.unmount=function(t){Wd&&Wd(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ji(r)}catch(i){e=i}}),n.__H=void 0,e&&be.__e(e,n.__v))};var $d=typeof requestAnimationFrame=="function";function y0(t){var e,n=function(){clearTimeout(r),$d&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);$d&&(e=requestAnimationFrame(n))}function ji(t){var e=Gt,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),Gt=e}function jo(t){var e=Gt;t.__c=t.__(),Gt=e}var qi=globalThis||(typeof window<"u"?window:self),w0=Object.create,Ko=Object.defineProperty,v0=Object.getOwnPropertyDescriptor,x0=Object.getOwnPropertyNames,T0=Object.getPrototypeOf,_0=Object.prototype.hasOwnProperty,S0=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),A0=(t,e)=>{for(var n in e)Ko(t,n,{get:e[n],enumerable:!0})},qo=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of x0(e))!_0.call(t,i)&&i!==n&&Ko(t,i,{get:()=>e[i],enumerable:!(r=v0(e,i))||r.enumerable});return t},k0=(t,e,n)=>(qo(t,e,"default"),n&&qo(n,e,"default")),Kd=(t,e,n)=>(n=t!=null?w0(T0(t)):{},qo(e||!t||!t.__esModule?Ko(n,"default",{value:t,enumerable:!0}):n,t)),Gd=S0((t,e)=>{(function(n,r){typeof define=="function"&&define.amd?define([],r):typeof t<"u"?r():(r(),n.FileSaver={})})(t,function(){"use strict";function n(c,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type)?new Blob(["\uFEFF",c],{type:c.type}):c}function r(c,u,p){var d=new XMLHttpRequest;d.open("GET",c),d.responseType="blob",d.onload=function(){l(d.response,u,p)},d.onerror=function(){},d.send()}function i(c){var u=new XMLHttpRequest;u.open("HEAD",c,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function a(c){try{c.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),c.dispatchEvent(u)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof qi=="object"&&qi.global===qi?qi:void 0,s=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(c,u,p){var d=o.URL||o.webkitURL,h=document.createElement("a");u=u||c.name||"download",h.download=u,h.rel="noopener",typeof c=="string"?(h.href=c,h.origin===location.origin?a(h):i(h.href)?r(c,u,p):a(h,h.target="_blank")):(h.href=d.createObjectURL(c),setTimeout(function(){d.revokeObjectURL(h.href)},4e4),setTimeout(function(){a(h)},0))}:"msSaveOrOpenBlob"in navigator?function(c,u,p){if(u=u||c.name||"download",typeof c!="string")navigator.msSaveOrOpenBlob(n(c,p),u);else if(i(c))r(c,u,p);else{var d=document.createElement("a");d.href=c,d.target="_blank",setTimeout(function(){a(d)})}}:function(c,u,p,d){if(d=d||open("","_blank"),d&&(d.document.title=d.document.body.innerText="downloading..."),typeof c=="string")return r(c,u,p);var h=c.type==="application/octet-stream",b=/constructor/i.test(o.HTMLElement)||o.safari,g=/CriOS\/[\d]+/.test(navigator.userAgent);if((g||h&&b||s)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var w=m.result;w=g?w:w.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=w:location=w,d=null},m.readAsDataURL(c)}else{var f=o.URL||o.webkitURL,y=f.createObjectURL(c);d?d.location=y:location.href=y,d=null,setTimeout(function(){f.revokeObjectURL(y)},4e4)}});o.saveAs=l.saveAs=l,typeof e<"u"&&(e.exports=l)})}),Vd={};A0(Vd,{default:()=>Ar});var E0=Kd(Gd());k0(Vd,Kd(Gd()));var{default:qd,...C0}=E0,Ar=qd!==void 0?qd:C0;function kr(){let t,e="pending",n=new Promise((r,i)=>{t={async resolve(a){await a,e="fulfilled",r(a)},reject(a){e="rejected",i(a)}}});return Object.defineProperty(n,"state",{get:()=>e}),Object.assign(n,t)}var Xd=class{#e=0;#t=[];#n=[];#r=kr();add(e){++this.#e,this.#i(e[Symbol.asyncIterator]())}async#i(e){try{let{value:n,done:r}=await e.next();r?--this.#e:this.#t.push({iterator:e,value:n})}catch(n){this.#n.push(n)}this.#r.resolve()}async*iterate(){for(;this.#e>0;){await this.#r;for(let e=0;e<this.#t.length;e++){let{iterator:n,value:r}=this.#t[e];yield r,this.#i(n)}if(this.#n.length){for(let e of this.#n)throw e;this.#n.length=0}this.#t.length=0,this.#r=kr()}}[Symbol.asyncIterator](){return this.iterate()}};var{Deno:Yd}=globalThis,gx=typeof Yd?.noColor=="boolean"?Yd.noColor:!0;var bx=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function Go(t){let e=atob(t),n=e.length,r=new Uint8Array(n);for(let i=0;i<n;i++)r[i]=e.charCodeAt(i);return r}var Ax=Number.isNaN||function(t){return typeof t=="number"&&t!==t};var Ki=globalThis||(typeof window<"u"?window:self),R0=Object.create,Xo=Object.defineProperty,N0=Object.getOwnPropertyDescriptor,O0=Object.getOwnPropertyNames,P0=Object.getPrototypeOf,M0=Object.prototype.hasOwnProperty,I0=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),F0=(t,e)=>{for(var n in e)Xo(t,n,{get:e[n],enumerable:!0})},Vo=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of O0(e))!M0.call(t,i)&&i!==n&&Xo(t,i,{get:()=>e[i],enumerable:!(r=N0(e,i))||r.enumerable});return t},B0=(t,e,n)=>(Vo(t,e,"default"),n&&Vo(n,e,"default")),Qd=(t,e,n)=>(n=t!=null?R0(P0(t)):{},Vo(e||!t||!t.__esModule?Xo(n,"default",{value:t,enumerable:!0}):n,t)),Jd=I0((t,e)=>{var n="Expected a function",r=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u=typeof Ki=="object"&&Ki&&Ki.Object===Object&&Ki,p=typeof self=="object"&&self&&self.Object===Object&&self,d=u||p||Function("return this")(),h=Object.prototype,b=h.toString,g=Math.max,m=Math.min,f=function(){return d.Date.now()};function y(x,S,A){var C,R,D,I,N,B,F=0,W=!1,te=!1,j=!0;if(typeof x!="function")throw new TypeError(n);S=v(S)||0,E(A)&&(W=!!A.leading,te="maxWait"in A,D=te?g(v(A.maxWait)||0,S):D,j="trailing"in A?!!A.trailing:j);function J(Q){var ae=C,oe=R;return C=R=void 0,F=Q,I=x.apply(oe,ae),I}function L(Q){return F=Q,N=setTimeout(q,S),W?J(Q):I}function O(Q){var ae=Q-B,oe=Q-F,se=S-ae;return te?m(se,D-oe):se}function H(Q){var ae=Q-B,oe=Q-F;return B===void 0||ae>=S||ae<0||te&&oe>=D}function q(){var Q=f();if(H(Q))return V(Q);N=setTimeout(q,O(Q))}function V(Q){return N=void 0,j&&C?J(Q):(C=R=void 0,I)}function ue(){N!==void 0&&clearTimeout(N),F=0,C=B=R=N=void 0}function pe(){return N===void 0?I:V(f())}function he(){var Q=f(),ae=H(Q);if(C=arguments,R=this,B=Q,ae){if(N===void 0)return L(B);if(te)return N=setTimeout(q,S),J(B)}return N===void 0&&(N=setTimeout(q,S)),I}return he.cancel=ue,he.flush=pe,he}function w(x,S,A){var C=!0,R=!0;if(typeof x!="function")throw new TypeError(n);return E(A)&&(C="leading"in A?!!A.leading:C,R="trailing"in A?!!A.trailing:R),y(x,S,{leading:C,maxWait:S,trailing:R})}function E(x){var S=typeof x;return!!x&&(S=="object"||S=="function")}function _(x){return!!x&&typeof x=="object"}function T(x){return typeof x=="symbol"||_(x)&&b.call(x)==i}function v(x){if(typeof x=="number")return x;if(T(x))return r;if(E(x)){var S=typeof x.valueOf=="function"?x.valueOf():x;x=E(S)?S+"":S}if(typeof x!="string")return x===0?x:+x;x=x.replace(a,"");var A=s.test(x);return A||l.test(x)?c(x.slice(2),A?2:8):o.test(x)?r:+x}e.exports=w}),ep={};F0(ep,{default:()=>Yo});var U0=Qd(Jd());B0(ep,Qd(Jd()));var{default:Zd,...z0}=U0,Yo=Zd!==void 0?Zd:z0;var H0=Object.create,Qo=Object.defineProperty,W0=Object.getOwnPropertyDescriptor,$0=Object.getOwnPropertyNames,j0=Object.getPrototypeOf,q0=Object.prototype.hasOwnProperty,K0=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),G0=(t,e)=>{for(var n in e)Qo(t,n,{get:e[n],enumerable:!0})},Zo=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of $0(e))!q0.call(t,i)&&i!==n&&Qo(t,i,{get:()=>e[i],enumerable:!(r=W0(e,i))||r.enumerable});return t},V0=(t,e,n)=>(Zo(t,e,"default"),n&&Zo(n,e,"default")),np=(t,e,n)=>(n=t!=null?H0(j0(t)):{},Zo(e||!t||!t.__esModule?Qo(n,"default",{value:t,enumerable:!0}):n,t)),rp=K0((t,e)=>{(function(n,r){typeof t=="object"&&typeof e=="object"?e.exports=r():typeof define=="function"&&define.amd?define([],r):typeof t=="object"?t.notie=r():n.notie=r()})(t,function(){return function(n){function r(a){if(i[a])return i[a].exports;var o=i[a]={i:a,l:!1,exports:{}};return n[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var i={};return r.m=n,r.c=i,r.i=function(a){return a},r.d=function(a,o,s){r.o(a,o)||Object.defineProperty(a,o,{configurable:!1,enumerable:!0,get:s})},r.n=function(a){var o=a&&a.__esModule?function(){return a.default}:function(){return a};return r.d(o,"a",o),o},r.o=function(a,o){return Object.prototype.hasOwnProperty.call(a,o)},r.p="",r(r.s=1)}([function(n,r){n.exports=function(i){return i.webpackPolyfill||(i.deprecate=function(){},i.paths=[],i.children||(i.children=[]),Object.defineProperty(i,"loaded",{enumerable:!0,get:function(){return i.l}}),Object.defineProperty(i,"id",{enumerable:!0,get:function(){return i.i}}),i.webpackPolyfill=1),i}},function(n,r,i){"use strict";(function(a){var o,s,l,c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u};(function(u,p){c(r)==="object"&&c(a)==="object"?a.exports=p():(s=[],o=p,l=typeof o=="function"?o.apply(r,s):o,l!==void 0&&(a.exports=l))})(void 0,function(){return function(u){function p(h){if(d[h])return d[h].exports;var b=d[h]={i:h,l:!1,exports:{}};return u[h].call(b.exports,b,b.exports,p),b.l=!0,b.exports}var d={};return p.m=u,p.c=d,p.i=function(h){return h},p.d=function(h,b,g){p.o(h,b)||Object.defineProperty(h,b,{configurable:!1,enumerable:!0,get:g})},p.n=function(h){var b=h&&h.__esModule?function(){return h.default}:function(){return h};return p.d(b,"a",b),b},p.o=function(h,b){return Object.prototype.hasOwnProperty.call(h,b)},p.p="",p(p.s=0)}([function(u,p,d){function h(L,O){var H={};for(var q in L)O.indexOf(q)>=0||Object.prototype.hasOwnProperty.call(L,q)&&(H[q]=L[q]);return H}Object.defineProperty(p,"__esModule",{value:!0});var b=typeof Symbol=="function"&&c(Symbol.iterator)==="symbol"?function(L){return typeof L>"u"?"undefined":c(L)}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L>"u"?"undefined":c(L)},g=Object.assign||function(L){for(var O=1;O<arguments.length;O++){var H=arguments[O];for(var q in H)Object.prototype.hasOwnProperty.call(H,q)&&(L[q]=H[q])}return L},m={top:"top",bottom:"bottom"},f={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:m.top,force:m.top,confirm:m.top,input:m.top,select:m.bottom,date:m.top}},y=p.setOptions=function(L){f=g({},f,L,{classes:g({},f.classes,L.classes),ids:g({},f.ids,L.ids),positions:g({},f.positions,L.positions)})},w=function(){return new Promise(function(L){return setTimeout(L,0)})},E=function(L){return new Promise(function(O){return setTimeout(O,1e3*L)})},_=function(){document.activeElement&&document.activeElement.blur()},T=function(){var L="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(O){var H=16*Math.random()|0,q=O==="x"?H:3&H|8;return q.toString(16)});return"notie-"+L},v={1:f.classes.backgroundSuccess,success:f.classes.backgroundSuccess,2:f.classes.backgroundWarning,warning:f.classes.backgroundWarning,3:f.classes.backgroundError,error:f.classes.backgroundError,4:f.classes.backgroundInfo,info:f.classes.backgroundInfo,5:f.classes.backgroundNeutral,neutral:f.classes.backgroundNeutral},x=function(){return f.transitionSelector+" "+f.transitionDuration+"s "+f.transitionCurve},S=function(L){return L.keyCode===13},A=function(L){return L.keyCode===27},C=function(L,O){L.classList.add(f.classes.container),L.style[O]="-10000px",document.body.appendChild(L),L.style[O]="-"+L.offsetHeight+"px",L.listener&&window.addEventListener("keydown",L.listener),w().then(function(){L.style.transition=x(),L.style[O]=0})},R=function(L,O){var H=document.getElementById(L);H&&(H.style[O]="-"+H.offsetHeight+"px",H.listener&&window.removeEventListener("keydown",H.listener),E(f.transitionDuration).then(function(){H.parentNode&&H.parentNode.removeChild(H)}))},D=function(L,O){var H=document.createElement("div");H.id=f.ids.overlay,H.classList.add(f.classes.overlay),H.classList.add(f.classes.backgroundOverlay),H.style.opacity=0,L&&f.overlayClickDismiss&&(H.onclick=function(){R(L.id,O),I()}),document.body.appendChild(H),w().then(function(){H.style.transition=x(),H.style.opacity=f.overlayOpacity})},I=function(){var L=document.getElementById(f.ids.overlay);L.style.opacity=0,E(f.transitionDuration).then(function(){L.parentNode&&L.parentNode.removeChild(L)})},N=p.hideAlerts=function(L){var O=document.getElementsByClassName(f.classes.alert);if(O.length){for(var H=0;H<O.length;H++){var q=O[H];R(q.id,q.position)}L&&E(f.transitionDuration).then(function(){return L()})}},B=p.alert=function(L){var O=L.type,H=O===void 0?4:O,q=L.text,V=L.time,ue=V===void 0?f.alertTime:V,pe=L.stay,he=pe!==void 0&&pe,Q=L.position,ae=Q===void 0?f.positions.alert||ae.top:Q;_(),N();var oe=document.createElement("div"),se=T();oe.id=se,oe.position=ae,oe.classList.add(f.classes.textbox),oe.classList.add(v[H]),oe.classList.add(f.classes.alert),oe.innerHTML='<div class="'+f.classes.textboxInner+'">'+q+"</div>",oe.onclick=function(){return R(se,ae)},oe.listener=function(Y){(S(Y)||A(Y))&&N()},C(oe,ae),ue&&ue<1&&(ue=1),!he&&ue&&E(ue).then(function(){return R(se,ae)})},F=p.force=function(L,O){var H=L.type,q=H===void 0?5:H,V=L.text,ue=L.buttonText,pe=ue===void 0?"OK":ue,he=L.callback,Q=L.position,ae=Q===void 0?f.positions.force||ae.top:Q;_(),N();var oe=document.createElement("div"),se=T();oe.id=se;var Y=document.createElement("div");Y.classList.add(f.classes.textbox),Y.classList.add(f.classes.backgroundInfo),Y.innerHTML='<div class="'+f.classes.textboxInner+'">'+V+"</div>";var re=document.createElement("div");re.classList.add(f.classes.button),re.classList.add(v[q]),re.innerHTML=pe,re.onclick=function(){R(se,ae),I(),he?he():O&&O()},oe.appendChild(Y),oe.appendChild(re),oe.listener=function(de){S(de)&&re.click()},C(oe,ae),D()},W=p.confirm=function(L,O,H){var q=L.text,V=L.submitText,ue=V===void 0?"Yes":V,pe=L.cancelText,he=pe===void 0?"Cancel":pe,Q=L.submitCallback,ae=L.cancelCallback,oe=L.position,se=oe===void 0?f.positions.confirm||se.top:oe;_(),N();var Y=document.createElement("div"),re=T();Y.id=re;var de=document.createElement("div");de.classList.add(f.classes.textbox),de.classList.add(f.classes.backgroundInfo),de.innerHTML='<div class="'+f.classes.textboxInner+'">'+q+"</div>";var fe=document.createElement("div");fe.classList.add(f.classes.button),fe.classList.add(f.classes.elementHalf),fe.classList.add(f.classes.backgroundSuccess),fe.innerHTML=ue,fe.onclick=function(){R(re,se),I(),Q?Q():O&&O()};var ne=document.createElement("div");ne.classList.add(f.classes.button),ne.classList.add(f.classes.elementHalf),ne.classList.add(f.classes.backgroundError),ne.innerHTML=he,ne.onclick=function(){R(re,se),I(),ae?ae():H&&H()},Y.appendChild(de),Y.appendChild(fe),Y.appendChild(ne),Y.listener=function(ke){S(ke)?fe.click():A(ke)&&ne.click()},C(Y,se),D(Y,se)},te=function(L,O,H){var q=L.text,V=L.submitText,ue=V===void 0?"Submit":V,pe=L.cancelText,he=pe===void 0?"Cancel":pe,Q=L.submitCallback,ae=L.cancelCallback,oe=L.position,se=oe===void 0?f.positions.input||se.top:oe,Y=h(L,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);_(),N();var re=document.createElement("div"),de=T();re.id=de;var fe=document.createElement("div");fe.classList.add(f.classes.textbox),fe.classList.add(f.classes.backgroundInfo),fe.innerHTML='<div class="'+f.classes.textboxInner+'">'+q+"</div>";var ne=document.createElement("input");ne.classList.add(f.classes.inputField),ne.setAttribute("autocapitalize",Y.autocapitalize||"none"),ne.setAttribute("autocomplete",Y.autocomplete||"off"),ne.setAttribute("autocorrect",Y.autocorrect||"off"),ne.setAttribute("autofocus",Y.autofocus||"true"),ne.setAttribute("inputmode",Y.inputmode||"verbatim"),ne.setAttribute("max",Y.max||""),ne.setAttribute("maxlength",Y.maxlength||""),ne.setAttribute("min",Y.min||""),ne.setAttribute("minlength",Y.minlength||""),ne.setAttribute("placeholder",Y.placeholder||""),ne.setAttribute("spellcheck",Y.spellcheck||"default"),ne.setAttribute("step",Y.step||"any"),ne.setAttribute("type",Y.type||"text"),ne.value=Y.value||"",Y.allowed&&(ne.oninput=function(){var ve=void 0;if(Array.isArray(Y.allowed)){for(var Re="",He=Y.allowed,ct=0;ct<He.length;ct++)He[ct]==="an"?Re+="0-9a-zA-Z":He[ct]==="a"?Re+="a-zA-Z":He[ct]==="n"&&(Re+="0-9"),He[ct]==="s"&&(Re+=" ");ve=new RegExp("[^"+Re+"]","g")}else b(Y.allowed)==="object"&&(ve=Y.allowed);ne.value=ne.value.replace(ve,"")});var ke=document.createElement("div");ke.classList.add(f.classes.button),ke.classList.add(f.classes.elementHalf),ke.classList.add(f.classes.backgroundSuccess),ke.innerHTML=ue,ke.onclick=function(){R(de,se),I(),Q?Q(ne.value):O&&O(ne.value)};var Oe=document.createElement("div");Oe.classList.add(f.classes.button),Oe.classList.add(f.classes.elementHalf),Oe.classList.add(f.classes.backgroundError),Oe.innerHTML=he,Oe.onclick=function(){R(de,se),I(),ae?ae(ne.value):H&&H(ne.value)},re.appendChild(fe),re.appendChild(ne),re.appendChild(ke),re.appendChild(Oe),re.listener=function(ve){S(ve)?ke.click():A(ve)&&Oe.click()},C(re,se),ne.focus(),D(re,se)};p.input=te;var j=p.select=function(L,O){var H=L.text,q=L.cancelText,V=q===void 0?"Cancel":q,ue=L.cancelCallback,pe=L.choices,he=L.position,Q=he===void 0?f.positions.select||Q.top:he;_(),N();var ae=document.createElement("div"),oe=T();ae.id=oe;var se=document.createElement("div");se.classList.add(f.classes.textbox),se.classList.add(f.classes.backgroundInfo),se.innerHTML='<div class="'+f.classes.textboxInner+'">'+H+"</div>",ae.appendChild(se),pe.forEach(function(re,de){var fe=re.type,ne=fe===void 0?1:fe,ke=re.text,Oe=re.handler,ve=document.createElement("div");ve.classList.add(v[ne]),ve.classList.add(f.classes.button),ve.classList.add(f.classes.selectChoice);var Re=pe[de+1];Re&&!Re.type&&(Re.type=1),Re&&Re.type===ne&&ve.classList.add(f.classes.selectChoiceRepeated),ve.innerHTML=ke,ve.onclick=function(){R(oe,Q),I(),Oe()},ae.appendChild(ve)});var Y=document.createElement("div");Y.classList.add(f.classes.backgroundNeutral),Y.classList.add(f.classes.button),Y.innerHTML=V,Y.onclick=function(){R(oe,Q),I(),ue?ue():O&&O()},ae.appendChild(Y),ae.listener=function(re){A(re)&&Y.click()},C(ae,Q),D(ae,Q)},J=p.date=function(L,O,H){var q=L.value,V=q===void 0?new Date:q,ue=L.submitText,pe=ue===void 0?"OK":ue,he=L.cancelText,Q=he===void 0?"Cancel":he,ae=L.submitCallback,oe=L.cancelCallback,se=L.position,Y=se===void 0?f.positions.date||Y.top:se;_(),N();var re="&#9662",de=document.createElement("div"),fe=document.createElement("div"),ne=document.createElement("div"),ke=function($){de.innerHTML=f.dateMonths[$.getMonth()],fe.innerHTML=$.getDate(),ne.innerHTML=$.getFullYear()},Oe=function($){var Z=new Date(V.getFullYear(),V.getMonth()+1,0).getDate(),le=$.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(le)>Z&&(le=Z.toString()),$.target.textContent=le,Number(le)<1&&(le="1"),V.setDate(Number(le))},ve=function($){var Z=$.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);$.target.textContent=Z,V.setFullYear(Number(Z))},Re=function($){ke(V)},He=function($){var Z=new Date(V.getFullYear(),V.getMonth()+$+1,0).getDate();V.getDate()>Z&&V.setDate(Z),V.setMonth(V.getMonth()+$),ke(V)},ct=function($){V.setDate(V.getDate()+$),ke(V)},rn=function($){var Z=V.getFullYear()+$;Z<0?V.setFullYear(0):V.setFullYear(V.getFullYear()+$),ke(V)},Tt=document.createElement("div"),Je=T();Tt.id=Je;var Ut=document.createElement("div");Ut.classList.add(f.classes.backgroundInfo);var We=document.createElement("div");We.classList.add(f.classes.dateSelectorInner);var ut=document.createElement("div");ut.classList.add(f.classes.button),ut.classList.add(f.classes.elementThird),ut.classList.add(f.classes.dateSelectorUp),ut.innerHTML=re;var $e=document.createElement("div");$e.classList.add(f.classes.button),$e.classList.add(f.classes.elementThird),$e.classList.add(f.classes.dateSelectorUp),$e.innerHTML=re;var nt=document.createElement("div");nt.classList.add(f.classes.button),nt.classList.add(f.classes.elementThird),nt.classList.add(f.classes.dateSelectorUp),nt.innerHTML=re,de.classList.add(f.classes.element),de.classList.add(f.classes.elementThird),de.innerHTML=f.dateMonths[V.getMonth()],fe.classList.add(f.classes.element),fe.classList.add(f.classes.elementThird),fe.setAttribute("contentEditable",!0),fe.addEventListener("input",Oe),fe.addEventListener("blur",Re),fe.innerHTML=V.getDate(),ne.classList.add(f.classes.element),ne.classList.add(f.classes.elementThird),ne.setAttribute("contentEditable",!0),ne.addEventListener("input",ve),ne.addEventListener("blur",Re),ne.innerHTML=V.getFullYear();var Rt=document.createElement("div");Rt.classList.add(f.classes.button),Rt.classList.add(f.classes.elementThird),Rt.innerHTML=re;var P=document.createElement("div");P.classList.add(f.classes.button),P.classList.add(f.classes.elementThird),P.innerHTML=re;var U=document.createElement("div");U.classList.add(f.classes.button),U.classList.add(f.classes.elementThird),U.innerHTML=re,ut.onclick=function(){return He(1)},$e.onclick=function(){return ct(1)},nt.onclick=function(){return rn(1)},Rt.onclick=function(){return He(-1)},P.onclick=function(){return ct(-1)},U.onclick=function(){return rn(-1)};var M=document.createElement("div");M.classList.add(f.classes.button),M.classList.add(f.classes.elementHalf),M.classList.add(f.classes.backgroundSuccess),M.innerHTML=pe,M.onclick=function(){R(Je,Y),I(),ae?ae(V):O&&O(V)};var z=document.createElement("div");z.classList.add(f.classes.button),z.classList.add(f.classes.elementHalf),z.classList.add(f.classes.backgroundError),z.innerHTML=Q,z.onclick=function(){R(Je,Y),I(),oe?oe(V):H&&H(V)},We.appendChild(ut),We.appendChild($e),We.appendChild(nt),We.appendChild(de),We.appendChild(fe),We.appendChild(ne),We.appendChild(Rt),We.appendChild(P),We.appendChild(U),Ut.appendChild(We),Tt.appendChild(Ut),Tt.appendChild(M),Tt.appendChild(z),Tt.listener=function($){S($)?M.click():A($)&&z.click()},C(Tt,Y),D(Tt,Y)};p.default={alert:B,force:F,confirm:W,input:te,select:j,date:J,setOptions:y,hideAlerts:N}}])})}).call(r,i(0)(n))}])})}),ip={};G0(ip,{default:()=>Gi});var X0=np(rp());V0(ip,np(rp()));var{default:tp,...Y0}=X0,Gi=tp!==void 0?tp:Y0;var Jo=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function es(t,e,n,r){t.addEventListener?t.addEventListener(e,n,r):t.attachEvent&&t.attachEvent("on".concat(e),function(){n(window.event)})}function cp(t,e){for(var n=e.slice(0,e.length-1),r=0;r<n.length;r++)n[r]=t[n[r].toLowerCase()];return n}function up(t){typeof t!="string"&&(t=""),t=t.replace(/\s/g,"");for(var e=t.split(","),n=e.lastIndexOf("");n>=0;)e[n-1]+=",",e.splice(n,1),n=e.lastIndexOf("");return e}function Z0(t,e){for(var n=t.length>=e.length?t:e,r=t.length>=e.length?e:t,i=!0,a=0;a<n.length;a++)r.indexOf(n[a])===-1&&(i=!1);return i}var Cr={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":Jo?173:189,"=":Jo?61:187,";":Jo?59:186,"'":222,"[":219,"]":221,"\\":220},Xt={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},rs={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Qe={16:!1,18:!1,17:!1,91:!1},Me={};for(Er=1;Er<20;Er++)Cr["f".concat(Er)]=111+Er;var Er,De=[],ap=!1,dp="all",pp=[],Xi=function(t){return Cr[t.toLowerCase()]||Xt[t.toLowerCase()]||t.toUpperCase().charCodeAt(0)},Q0=function(t){return Object.keys(Cr).find(function(e){return Cr[e]===t})},J0=function(t){return Object.keys(Xt).find(function(e){return Xt[e]===t})};function hp(t){dp=t||"all"}function Lr(){return dp||"all"}function eb(){return De.slice(0)}function tb(){return De.map(function(t){return Q0(t)||J0(t)||String.fromCharCode(t)})}function nb(t){var e=t.target||t.srcElement,n=e.tagName,r=!0;return(e.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!e.readOnly)&&(r=!1),r}function rb(t){return typeof t=="string"&&(t=Xi(t)),De.indexOf(t)!==-1}function ib(t,e){var n,r;t||(t=Lr());for(var i in Me)if(Object.prototype.hasOwnProperty.call(Me,i))for(n=Me[i],r=0;r<n.length;)n[r].scope===t?n.splice(r,1):r++;Lr()===t&&hp(e||"all")}function ab(t){var e=t.keyCode||t.which||t.charCode,n=De.indexOf(e);if(n>=0&&De.splice(n,1),t.key&&t.key.toLowerCase()==="meta"&&De.splice(0,De.length),(e===93||e===224)&&(e=91),e in Qe){Qe[e]=!1;for(var r in Xt)Xt[r]===e&&(Vt[r]=!1)}}function ob(t){if(typeof t>"u")Object.keys(Me).forEach(function(o){return delete Me[o]});else if(Array.isArray(t))t.forEach(function(o){o.key&&ts(o)});else if(typeof t=="object")t.key&&ts(t);else if(typeof t=="string"){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=n[0],a=n[1];typeof i=="function"&&(a=i,i=""),ts({key:t,scope:i,method:a,splitKey:"+"})}}var ts=function(t){var e=t.key,n=t.scope,r=t.method,i=t.splitKey,a=i===void 0?"+":i,o=up(e);o.forEach(function(s){var l=s.split(a),c=l.length,u=l[c-1],p=u==="*"?"*":Xi(u);if(Me[p]){n||(n=Lr());var d=c>1?cp(Xt,l):[];Me[p]=Me[p].filter(function(h){var b=r?h.method===r:!0;return!(b&&h.scope===n&&Z0(h.mods,d))})}})};function op(t,e,n,r){if(e.element===r){var i;if(e.scope===n||e.scope==="all"){i=e.mods.length>0;for(var a in Qe)Object.prototype.hasOwnProperty.call(Qe,a)&&(!Qe[a]&&e.mods.indexOf(+a)>-1||Qe[a]&&e.mods.indexOf(+a)===-1)&&(i=!1);(e.mods.length===0&&!Qe[16]&&!Qe[18]&&!Qe[17]&&!Qe[91]||i||e.shortcut==="*")&&e.method(t,e)===!1&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0))}}}function sp(t,e){var n=Me["*"],r=t.keyCode||t.which||t.charCode;if(Vt.filter.call(this,t)){if((r===93||r===224)&&(r=91),De.indexOf(r)===-1&&r!==229&&De.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(b){var g=rs[b];t[b]&&De.indexOf(g)===-1?De.push(g):!t[b]&&De.indexOf(g)>-1?De.splice(De.indexOf(g),1):b==="metaKey"&&t[b]&&De.length===3&&(t.ctrlKey||t.shiftKey||t.altKey||(De=De.slice(De.indexOf(g))))}),r in Qe){Qe[r]=!0;for(var i in Xt)Xt[i]===r&&(Vt[i]=!0);if(!n)return}for(var a in Qe)Object.prototype.hasOwnProperty.call(Qe,a)&&(Qe[a]=t[rs[a]]);t.getModifierState&&!(t.altKey&&!t.ctrlKey)&&t.getModifierState("AltGraph")&&(De.indexOf(17)===-1&&De.push(17),De.indexOf(18)===-1&&De.push(18),Qe[17]=!0,Qe[18]=!0);var o=Lr();if(n)for(var s=0;s<n.length;s++)n[s].scope===o&&(t.type==="keydown"&&n[s].keydown||t.type==="keyup"&&n[s].keyup)&&op(t,n[s],o,e);if(r in Me){for(var l=0;l<Me[r].length;l++)if((t.type==="keydown"&&Me[r][l].keydown||t.type==="keyup"&&Me[r][l].keyup)&&Me[r][l].key){for(var c=Me[r][l],u=c.splitKey,p=c.key.split(u),d=[],h=0;h<p.length;h++)d.push(Xi(p[h]));d.sort().join("")===De.sort().join("")&&op(t,c,o,e)}}}}function sb(t){return pp.indexOf(t)>-1}function Vt(t,e,n){De=[];var r=up(t),i=[],a="all",o=document,s=0,l=!1,c=!0,u="+",p=!1;for(n===void 0&&typeof e=="function"&&(n=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(a=e.scope),e.element&&(o=e.element),e.keyup&&(l=e.keyup),e.keydown!==void 0&&(c=e.keydown),e.capture!==void 0&&(p=e.capture),typeof e.splitKey=="string"&&(u=e.splitKey)),typeof e=="string"&&(a=e);s<r.length;s++)t=r[s].split(u),i=[],t.length>1&&(i=cp(Xt,t)),t=t[t.length-1],t=t==="*"?"*":Xi(t),t in Me||(Me[t]=[]),Me[t].push({keyup:l,keydown:c,scope:a,mods:i,shortcut:r[s],method:n,key:r[s],splitKey:u,element:o});typeof o<"u"&&!sb(o)&&window&&(pp.push(o),es(o,"keydown",function(d){sp(d,o)},p),ap||(ap=!0,es(window,"focus",function(){De=[]},p)),es(o,"keyup",function(d){sp(d,o),ab(d)},p))}function lb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(Me).forEach(function(n){var r=Me[n].filter(function(i){return i.scope===e&&i.shortcut===t});r.forEach(function(i){i&&i.method&&i.method()})})}var ns={getPressedKeyString:tb,setScope:hp,getScope:Lr,deleteScope:ib,getPressedKeyCodes:eb,isPressed:rb,filter:nb,trigger:lb,unbind:ob,keyMap:Cr,modifier:Xt,modifierMap:rs};for(Vi in ns)Object.prototype.hasOwnProperty.call(ns,Vi)&&(Vt[Vi]=ns[Vi]);var Vi;typeof document<"u"&&(lp=window.hotkeys,Vt.noConflict=function(t){return t&&window.hotkeys===Vt&&(window.hotkeys=lp),Vt},window.hotkeys=Vt);var lp;var{entries:xp,setPrototypeOf:fp,isFrozen:ub,getPrototypeOf:db,getOwnPropertyDescriptor:pb}=Object,{freeze:st,seal:Bt,create:hb}=Object,{apply:cs,construct:us}=typeof Reflect<"u"&&Reflect;cs||(cs=function(t,e,n){return t.apply(e,n)});st||(st=function(t){return t});Bt||(Bt=function(t){return t});us||(us=function(t,e){return new t(...e)});var fb=Dt(Array.prototype.forEach),mp=Dt(Array.prototype.pop),Dr=Dt(Array.prototype.push),Qi=Dt(String.prototype.toLowerCase),is=Dt(String.prototype.toString),mb=Dt(String.prototype.match),Ft=Dt(String.prototype.replace),gb=Dt(String.prototype.indexOf),bb=Dt(String.prototype.trim),vt=Dt(RegExp.prototype.test),Rr=yb(TypeError);function Dt(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return cs(t,e,r)}}function yb(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return us(t,n)}}function ge(t,e,n){var r;n=(r=n)!==null&&r!==void 0?r:Qi,fp&&fp(t,null);let i=e.length;for(;i--;){let a=e[i];if(typeof a=="string"){let o=n(a);o!==a&&(ub(e)||(e[i]=o),a=o)}t[a]=!0}return t}function Yn(t){let e=hb(null);for(let[n,r]of xp(t))e[n]=r;return e}function Yi(t,e){for(;t!==null;){let r=pb(t,e);if(r){if(r.get)return Dt(r.get);if(typeof r.value=="function")return Dt(r.value)}t=db(t)}function n(r){return null}return n}var gp=st(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),as=st(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),os=st(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),wb=st(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ss=st(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),vb=st(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),bp=st(["#text"]),yp=st(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),ls=st(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),wp=st(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Zi=st(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),xb=Bt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Tb=Bt(/<%[\w\W]*|[\w\W]*%>/gm),_b=Bt(/\${[\w\W]*}/gm),Sb=Bt(/^data-[\-\w.\u00B7-\uFFFF]/),Ab=Bt(/^aria-[\-\w]+$/),Tp=Bt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),kb=Bt(/^(?:\w+script|data):/i),Eb=Bt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),_p=Bt(/^html$/i),vp=Object.freeze({__proto__:null,MUSTACHE_EXPR:xb,ERB_EXPR:Tb,TMPLIT_EXPR:_b,DATA_ATTR:Sb,ARIA_ATTR:Ab,IS_ALLOWED_URI:Tp,IS_SCRIPT_OR_DATA:kb,ATTR_WHITESPACE:Eb,DOCTYPE_NAME:_p}),Cb=()=>typeof window>"u"?null:window,Lb=function(t,e){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let n=null,r="data-tt-policy-suffix";e&&e.hasAttribute(r)&&(n=e.getAttribute(r));let i="dompurify"+(n?"#"+n:"");try{return t.createPolicy(i,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return null}};function Sp(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Cb(),e=k=>Sp(k);if(e.version="3.0.3",e.removed=[],!t||!t.document||t.document.nodeType!==9)return e.isSupported=!1,e;let n=t.document,r=n.currentScript,{document:i}=t,{DocumentFragment:a,HTMLTemplateElement:o,Node:s,Element:l,NodeFilter:c,NamedNodeMap:u=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:p,DOMParser:d,trustedTypes:h}=t,b=l.prototype,g=Yi(b,"cloneNode"),m=Yi(b,"nextSibling"),f=Yi(b,"childNodes"),y=Yi(b,"parentNode");if(typeof o=="function"){let k=i.createElement("template");k.content&&k.content.ownerDocument&&(i=k.content.ownerDocument)}let w,E="",{implementation:_,createNodeIterator:T,createDocumentFragment:v,getElementsByTagName:x}=i,{importNode:S}=n,A={};e.isSupported=typeof xp=="function"&&typeof y=="function"&&_&&_.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:C,ERB_EXPR:R,TMPLIT_EXPR:D,DATA_ATTR:I,ARIA_ATTR:N,IS_SCRIPT_OR_DATA:B,ATTR_WHITESPACE:F}=vp,{IS_ALLOWED_URI:W}=vp,te=null,j=ge({},[...gp,...as,...os,...ss,...bp]),J=null,L=ge({},[...yp,...ls,...wp,...Zi]),O=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),H=null,q=null,V=!0,ue=!0,pe=!1,he=!0,Q=!1,ae=!1,oe=!1,se=!1,Y=!1,re=!1,de=!1,fe=!0,ne=!1,ke="user-content-",Oe=!0,ve=!1,Re={},He=null,ct=ge({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),rn=null,Tt=ge({},["audio","video","img","source","image","track"]),Je=null,Ut=ge({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),We="http://www.w3.org/1998/Math/MathML",ut="http://www.w3.org/2000/svg",$e="http://www.w3.org/1999/xhtml",nt=$e,Rt=!1,P=null,U=ge({},[We,ut,$e],is),M,z=["application/xhtml+xml","text/html"],$="text/html",Z,le=null,Ge=i.createElement("form"),dt=function(k){return k instanceof RegExp||k instanceof Function},vn=function(k){if(!(le&&le===k)){if((!k||typeof k!="object")&&(k={}),k=Yn(k),M=z.indexOf(k.PARSER_MEDIA_TYPE)===-1?M=$:M=k.PARSER_MEDIA_TYPE,Z=M==="application/xhtml+xml"?is:Qi,te="ALLOWED_TAGS"in k?ge({},k.ALLOWED_TAGS,Z):j,J="ALLOWED_ATTR"in k?ge({},k.ALLOWED_ATTR,Z):L,P="ALLOWED_NAMESPACES"in k?ge({},k.ALLOWED_NAMESPACES,is):U,Je="ADD_URI_SAFE_ATTR"in k?ge(Yn(Ut),k.ADD_URI_SAFE_ATTR,Z):Ut,rn="ADD_DATA_URI_TAGS"in k?ge(Yn(Tt),k.ADD_DATA_URI_TAGS,Z):Tt,He="FORBID_CONTENTS"in k?ge({},k.FORBID_CONTENTS,Z):ct,H="FORBID_TAGS"in k?ge({},k.FORBID_TAGS,Z):{},q="FORBID_ATTR"in k?ge({},k.FORBID_ATTR,Z):{},Re="USE_PROFILES"in k?k.USE_PROFILES:!1,V=k.ALLOW_ARIA_ATTR!==!1,ue=k.ALLOW_DATA_ATTR!==!1,pe=k.ALLOW_UNKNOWN_PROTOCOLS||!1,he=k.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Q=k.SAFE_FOR_TEMPLATES||!1,ae=k.WHOLE_DOCUMENT||!1,Y=k.RETURN_DOM||!1,re=k.RETURN_DOM_FRAGMENT||!1,de=k.RETURN_TRUSTED_TYPE||!1,se=k.FORCE_BODY||!1,fe=k.SANITIZE_DOM!==!1,ne=k.SANITIZE_NAMED_PROPS||!1,Oe=k.KEEP_CONTENT!==!1,ve=k.IN_PLACE||!1,W=k.ALLOWED_URI_REGEXP||Tp,nt=k.NAMESPACE||$e,O=k.CUSTOM_ELEMENT_HANDLING||{},k.CUSTOM_ELEMENT_HANDLING&&dt(k.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(O.tagNameCheck=k.CUSTOM_ELEMENT_HANDLING.tagNameCheck),k.CUSTOM_ELEMENT_HANDLING&&dt(k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(O.attributeNameCheck=k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),k.CUSTOM_ELEMENT_HANDLING&&typeof k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(O.allowCustomizedBuiltInElements=k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Q&&(ue=!1),re&&(Y=!0),Re&&(te=ge({},[...bp]),J=[],Re.html===!0&&(ge(te,gp),ge(J,yp)),Re.svg===!0&&(ge(te,as),ge(J,ls),ge(J,Zi)),Re.svgFilters===!0&&(ge(te,os),ge(J,ls),ge(J,Zi)),Re.mathMl===!0&&(ge(te,ss),ge(J,wp),ge(J,Zi))),k.ADD_TAGS&&(te===j&&(te=Yn(te)),ge(te,k.ADD_TAGS,Z)),k.ADD_ATTR&&(J===L&&(J=Yn(J)),ge(J,k.ADD_ATTR,Z)),k.ADD_URI_SAFE_ATTR&&ge(Je,k.ADD_URI_SAFE_ATTR,Z),k.FORBID_CONTENTS&&(He===ct&&(He=Yn(He)),ge(He,k.FORBID_CONTENTS,Z)),Oe&&(te["#text"]=!0),ae&&ge(te,["html","head","body"]),te.table&&(ge(te,["tbody"]),delete H.tbody),k.TRUSTED_TYPES_POLICY){if(typeof k.TRUSTED_TYPES_POLICY.createHTML!="function")throw Rr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof k.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Rr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');w=k.TRUSTED_TYPES_POLICY,E=w.createHTML("")}else w===void 0&&(w=Lb(h,r)),w!==null&&typeof E=="string"&&(E=w.createHTML(""));st&&st(k),le=k}},Qn=ge({},["mi","mo","mn","ms","mtext"]),Jn=ge({},["foreignobject","desc","title","annotation-xml"]),Xp=ge({},["title","style","font","a","script"]),Or=ge({},as);ge(Or,os),ge(Or,wb);let ta=ge({},ss);ge(ta,vb);let Yp=function(k){let ee=y(k);(!ee||!ee.tagName)&&(ee={namespaceURI:nt,tagName:"template"});let K=Qi(k.tagName),xe=Qi(ee.tagName);return P[k.namespaceURI]?k.namespaceURI===ut?ee.namespaceURI===$e?K==="svg":ee.namespaceURI===We?K==="svg"&&(xe==="annotation-xml"||Qn[xe]):!!Or[K]:k.namespaceURI===We?ee.namespaceURI===$e?K==="math":ee.namespaceURI===ut?K==="math"&&Jn[xe]:!!ta[K]:k.namespaceURI===$e?ee.namespaceURI===ut&&!Jn[xe]||ee.namespaceURI===We&&!Qn[xe]?!1:!ta[K]&&(Xp[K]||!Or[K]):!!(M==="application/xhtml+xml"&&P[k.namespaceURI]):!1},Ln=function(k){Dr(e.removed,{element:k});try{k.parentNode.removeChild(k)}catch{k.remove()}},na=function(k,ee){try{Dr(e.removed,{attribute:ee.getAttributeNode(k),from:ee})}catch{Dr(e.removed,{attribute:null,from:ee})}if(ee.removeAttribute(k),k==="is"&&!J[k])if(Y||re)try{Ln(ee)}catch{}else try{ee.setAttribute(k,"")}catch{}},Ss=function(k){let ee,K;if(se)k="<remove></remove>"+k;else{let rt=mb(k,/^[\r\n\t ]+/);K=rt&&rt[0]}M==="application/xhtml+xml"&&nt===$e&&(k='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+k+"</body></html>");let xe=w?w.createHTML(k):k;if(nt===$e)try{ee=new d().parseFromString(xe,M)}catch{}if(!ee||!ee.documentElement){ee=_.createDocument(nt,"template",null);try{ee.documentElement.innerHTML=Rt?E:xe}catch{}}let Fe=ee.body||ee.documentElement;return k&&K&&Fe.insertBefore(i.createTextNode(K),Fe.childNodes[0]||null),nt===$e?x.call(ee,ae?"html":"body")[0]:ae?ee.documentElement:Fe},As=function(k){return T.call(k.ownerDocument||k,k,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,null,!1)},Zp=function(k){return k instanceof p&&(typeof k.nodeName!="string"||typeof k.textContent!="string"||typeof k.removeChild!="function"||!(k.attributes instanceof u)||typeof k.removeAttribute!="function"||typeof k.setAttribute!="function"||typeof k.namespaceURI!="string"||typeof k.insertBefore!="function"||typeof k.hasChildNodes!="function")},Pr=function(k){return typeof s=="object"?k instanceof s:k&&typeof k=="object"&&typeof k.nodeType=="number"&&typeof k.nodeName=="string"},Yt=function(k,ee,K){A[k]&&fb(A[k],xe=>{xe.call(e,ee,K,le)})},ks=function(k){let ee;if(Yt("beforeSanitizeElements",k,null),Zp(k))return Ln(k),!0;let K=Z(k.nodeName);if(Yt("uponSanitizeElement",k,{tagName:K,allowedTags:te}),k.hasChildNodes()&&!Pr(k.firstElementChild)&&(!Pr(k.content)||!Pr(k.content.firstElementChild))&&vt(/<[/\w]/g,k.innerHTML)&&vt(/<[/\w]/g,k.textContent))return Ln(k),!0;if(!te[K]||H[K]){if(!H[K]&&Cs(K)&&(O.tagNameCheck instanceof RegExp&&vt(O.tagNameCheck,K)||O.tagNameCheck instanceof Function&&O.tagNameCheck(K)))return!1;if(Oe&&!He[K]){let xe=y(k)||k.parentNode,Fe=f(k)||k.childNodes;if(Fe&&xe){let rt=Fe.length;for(let pt=rt-1;pt>=0;--pt)xe.insertBefore(g(Fe[pt],!0),m(k))}}return Ln(k),!0}return k instanceof l&&!Yp(k)||(K==="noscript"||K==="noembed")&&vt(/<\/no(script|embed)/i,k.innerHTML)?(Ln(k),!0):(Q&&k.nodeType===3&&(ee=k.textContent,ee=Ft(ee,C," "),ee=Ft(ee,R," "),ee=Ft(ee,D," "),k.textContent!==ee&&(Dr(e.removed,{element:k.cloneNode()}),k.textContent=ee)),Yt("afterSanitizeElements",k,null),!1)},Es=function(k,ee,K){if(fe&&(ee==="id"||ee==="name")&&(K in i||K in Ge))return!1;if(!(ue&&!q[ee]&&vt(I,ee))&&!(V&&vt(N,ee))){if(!J[ee]||q[ee]){if(!(Cs(k)&&(O.tagNameCheck instanceof RegExp&&vt(O.tagNameCheck,k)||O.tagNameCheck instanceof Function&&O.tagNameCheck(k))&&(O.attributeNameCheck instanceof RegExp&&vt(O.attributeNameCheck,ee)||O.attributeNameCheck instanceof Function&&O.attributeNameCheck(ee))||ee==="is"&&O.allowCustomizedBuiltInElements&&(O.tagNameCheck instanceof RegExp&&vt(O.tagNameCheck,K)||O.tagNameCheck instanceof Function&&O.tagNameCheck(K))))return!1}else if(!Je[ee]&&!vt(W,Ft(K,F,""))&&!((ee==="src"||ee==="xlink:href"||ee==="href")&&k!=="script"&&gb(K,"data:")===0&&rn[k])&&!(pe&&!vt(B,Ft(K,F,"")))&&K)return!1}return!0},Cs=function(k){return k.indexOf("-")>0},Ls=function(k){let ee,K,xe,Fe;Yt("beforeSanitizeAttributes",k,null);let{attributes:rt}=k;if(!rt)return;let pt={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:J};for(Fe=rt.length;Fe--;){ee=rt[Fe];let{name:je,namespaceURI:Dn}=ee;if(K=je==="value"?ee.value:bb(ee.value),xe=Z(je),pt.attrName=xe,pt.attrValue=K,pt.keepAttr=!0,pt.forceKeepAttr=void 0,Yt("uponSanitizeAttribute",k,pt),K=pt.attrValue,pt.forceKeepAttr||(na(je,k),!pt.keepAttr))continue;if(!he&&vt(/\/>/i,K)){na(je,k);continue}Q&&(K=Ft(K,C," "),K=Ft(K,R," "),K=Ft(K,D," "));let Ds=Z(k.nodeName);if(Es(Ds,xe,K)){if(ne&&(xe==="id"||xe==="name")&&(na(je,k),K=ke+K),w&&typeof h=="object"&&typeof h.getAttributeType=="function"&&!Dn)switch(h.getAttributeType(Ds,xe)){case"TrustedHTML":{K=w.createHTML(K);break}case"TrustedScriptURL":{K=w.createScriptURL(K);break}}try{Dn?k.setAttributeNS(Dn,je,K):k.setAttribute(je,K),mp(e.removed)}catch{}}}Yt("afterSanitizeAttributes",k,null)},Qp=function k(ee){let K,xe=As(ee);for(Yt("beforeSanitizeShadowDOM",ee,null);K=xe.nextNode();)Yt("uponSanitizeShadowNode",K,null),!ks(K)&&(K.content instanceof a&&k(K.content),Ls(K));Yt("afterSanitizeShadowDOM",ee,null)};return e.sanitize=function(k){let ee=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},K,xe,Fe,rt;if(Rt=!k,Rt&&(k="<!-->"),typeof k!="string"&&!Pr(k))if(typeof k.toString=="function"){if(k=k.toString(),typeof k!="string")throw Rr("dirty is not a string, aborting")}else throw Rr("toString is not a function");if(!e.isSupported)return k;if(oe||vn(ee),e.removed=[],typeof k=="string"&&(ve=!1),ve){if(k.nodeName){let Dn=Z(k.nodeName);if(!te[Dn]||H[Dn])throw Rr("root node is forbidden and cannot be sanitized in-place")}}else if(k instanceof s)K=Ss("<!---->"),xe=K.ownerDocument.importNode(k,!0),xe.nodeType===1&&xe.nodeName==="BODY"||xe.nodeName==="HTML"?K=xe:K.appendChild(xe);else{if(!Y&&!Q&&!ae&&k.indexOf("<")===-1)return w&&de?w.createHTML(k):k;if(K=Ss(k),!K)return Y?null:de?E:""}K&&se&&Ln(K.firstChild);let pt=As(ve?k:K);for(;Fe=pt.nextNode();)ks(Fe)||(Fe.content instanceof a&&Qp(Fe.content),Ls(Fe));if(ve)return k;if(Y){if(re)for(rt=v.call(K.ownerDocument);K.firstChild;)rt.appendChild(K.firstChild);else rt=K;return(J.shadowroot||J.shadowrootmod)&&(rt=S.call(n,rt,!0)),rt}let je=ae?K.outerHTML:K.innerHTML;return ae&&te["!doctype"]&&K.ownerDocument&&K.ownerDocument.doctype&&K.ownerDocument.doctype.name&&vt(_p,K.ownerDocument.doctype.name)&&(je="<!DOCTYPE "+K.ownerDocument.doctype.name+`>
`+je),Q&&(je=Ft(je,C," "),je=Ft(je,R," "),je=Ft(je,D," ")),w&&de?w.createHTML(je):je},e.setConfig=function(k){vn(k),oe=!0},e.clearConfig=function(){le=null,oe=!1},e.isValidAttribute=function(k,ee,K){le||vn({});let xe=Z(k),Fe=Z(ee);return Es(xe,Fe,K)},e.addHook=function(k,ee){typeof ee=="function"&&(A[k]=A[k]||[],Dr(A[k],ee))},e.removeHook=function(k){if(A[k])return mp(A[k])},e.removeHooks=function(k){A[k]&&(A[k]=[])},e.removeAllHooks=function(){A={}},e}var Nr=Sp();var Db=Object.create,ps=Object.defineProperty,Rb=Object.getOwnPropertyDescriptor,Nb=Object.getOwnPropertyNames,Ob=Object.getPrototypeOf,Pb=Object.prototype.hasOwnProperty,hs=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Mb=(t,e)=>{for(var n in e)ps(t,n,{get:e[n],enumerable:!0})},ds=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Nb(e))!Pb.call(t,i)&&i!==n&&ps(t,i,{get:()=>e[i],enumerable:!(r=Rb(e,i))||r.enumerable});return t},Ib=(t,e,n)=>(ds(t,e,"default"),n&&ds(n,e,"default")),kp=(t,e,n)=>(n=t!=null?Db(Ob(t)):{},ds(e||!t||!t.__esModule?ps(n,"default",{value:t,enumerable:!0}):n,t)),Fb=hs((t,e)=>{function n(r,i){if(i&&i.documentElement)r=i,i=arguments[2];else if(!r||!r.documentElement)throw new Error("First argument to Readability constructor should be a document object.");if(i=i||{},this._doc=r,this._docJSDOMParser=this._doc.firstChild.__JSDOMParser__,this._articleTitle=null,this._articleByline=null,this._articleDir=null,this._articleSiteName=null,this._attempts=[],this._debug=!!i.debug,this._maxElemsToParse=i.maxElemsToParse||this.DEFAULT_MAX_ELEMS_TO_PARSE,this._nbTopCandidates=i.nbTopCandidates||this.DEFAULT_N_TOP_CANDIDATES,this._charThreshold=i.charThreshold||this.DEFAULT_CHAR_THRESHOLD,this._classesToPreserve=this.CLASSES_TO_PRESERVE.concat(i.classesToPreserve||[]),this._keepClasses=!!i.keepClasses,this._serializer=i.serializer||function(a){return a.innerHTML},this._disableJSONLD=!!i.disableJSONLD,this._allowedVideoRegex=i.allowedVideoRegex||this.REGEXPS.videos,this._flags=this.FLAG_STRIP_UNLIKELYS|this.FLAG_WEIGHT_CLASSES|this.FLAG_CLEAN_CONDITIONALLY,this._debug){let a=function(o){if(o.nodeType==o.TEXT_NODE)return`${o.nodeName} ("${o.textContent}")`;let s=Array.from(o.attributes||[],function(l){return`${l.name}="${l.value}"`}).join(" ");return`<${o.localName} ${s}>`};this.log=function(){if(typeof console<"u")Array.from(arguments,l=>l&&l.nodeType==this.ELEMENT_NODE?a(l):l).unshift("Reader: (Readability)");else if(typeof dump<"u"){var o=Array.prototype.map.call(arguments,function(s){return s&&s.nodeName?a(s):s}).join(" ");dump("Reader: (Readability) "+o+`
`)}}}else this.log=function(){}}n.prototype={FLAG_STRIP_UNLIKELYS:1,FLAG_WEIGHT_CLASSES:2,FLAG_CLEAN_CONDITIONALLY:4,ELEMENT_NODE:1,TEXT_NODE:3,DEFAULT_MAX_ELEMS_TO_PARSE:0,DEFAULT_N_TOP_CANDIDATES:5,DEFAULT_TAGS_TO_SCORE:"section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),DEFAULT_CHAR_THRESHOLD:500,REGEXPS:{unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i,positive:/article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,negative:/-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,extraneous:/print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,byline:/byline|author|dateline|writtenby|p-author/i,replaceFonts:/<(\/?)font[^>]*>/gi,normalize:/\s{2,}/g,videos:/\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,shareElements:/(\b|_)(share|sharedaddy)(\b|_)/i,nextLink:/(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,prevLink:/(prev|earl|old|new|<|«)/i,tokenize:/\W+/g,whitespace:/^\s*$/,hasContent:/\S$/,hashUrl:/^#.+/,srcsetUrl:/(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,b64DataUrl:/^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,jsonLdArticleTypes:/^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/},UNLIKELY_ROLES:["menu","menubar","complementary","navigation","alert","alertdialog","dialog"],DIV_TO_P_ELEMS:new Set(["BLOCKQUOTE","DL","DIV","IMG","OL","P","PRE","TABLE","UL"]),ALTER_TO_DIV_EXCEPTIONS:["DIV","ARTICLE","SECTION","P"],PRESENTATIONAL_ATTRIBUTES:["align","background","bgcolor","border","cellpadding","cellspacing","frame","hspace","rules","style","valign","vspace"],DEPRECATED_SIZE_ATTRIBUTE_ELEMS:["TABLE","TH","TD","HR","PRE"],PHRASING_ELEMS:["ABBR","AUDIO","B","BDO","BR","BUTTON","CITE","CODE","DATA","DATALIST","DFN","EM","EMBED","I","IMG","INPUT","KBD","LABEL","MARK","MATH","METER","NOSCRIPT","OBJECT","OUTPUT","PROGRESS","Q","RUBY","SAMP","SCRIPT","SELECT","SMALL","SPAN","STRONG","SUB","SUP","TEXTAREA","TIME","VAR","WBR"],CLASSES_TO_PRESERVE:["page"],HTML_ESCAPE_MAP:{lt:"<",gt:">",amp:"&",quot:'"',apos:"'"},_postProcessContent:function(r){this._fixRelativeUris(r),this._simplifyNestedElements(r),this._keepClasses||this._cleanClasses(r)},_removeNodes:function(r,i){if(this._docJSDOMParser&&r._isLiveNodeList)throw new Error("Do not pass live node lists to _removeNodes");for(var a=r.length-1;a>=0;a--){var o=r[a],s=o.parentNode;s&&(!i||i.call(this,o,a,r))&&s.removeChild(o)}},_replaceNodeTags:function(r,i){if(this._docJSDOMParser&&r._isLiveNodeList)throw new Error("Do not pass live node lists to _replaceNodeTags");for(let a of r)this._setNodeTag(a,i)},_forEachNode:function(r,i){Array.prototype.forEach.call(r,i,this)},_findNode:function(r,i){return Array.prototype.find.call(r,i,this)},_someNode:function(r,i){return Array.prototype.some.call(r,i,this)},_everyNode:function(r,i){return Array.prototype.every.call(r,i,this)},_concatNodeLists:function(){var r=Array.prototype.slice,i=r.call(arguments),a=i.map(function(o){return r.call(o)});return Array.prototype.concat.apply([],a)},_getAllNodesWithTag:function(r,i){return r.querySelectorAll?r.querySelectorAll(i.join(",")):[].concat.apply([],i.map(function(a){var o=r.getElementsByTagName(a);return Array.isArray(o)?o:Array.from(o)}))},_cleanClasses:function(r){var i=this._classesToPreserve,a=(r.getAttribute("class")||"").split(/\s+/).filter(function(o){return i.indexOf(o)!=-1}).join(" ");for(a?r.setAttribute("class",a):r.removeAttribute("class"),r=r.firstElementChild;r;r=r.nextElementSibling)this._cleanClasses(r)},_fixRelativeUris:function(r){var i=this._doc.baseURI,a=this._doc.documentURI;function o(c){if(i==a&&c.charAt(0)=="#")return c;try{return new URL(c,i).href}catch{}return c}var s=this._getAllNodesWithTag(r,["a"]);this._forEachNode(s,function(c){var u=c.getAttribute("href");if(u)if(u.indexOf("javascript:")===0)if(c.childNodes.length===1&&c.childNodes[0].nodeType===this.TEXT_NODE){var p=this._doc.createTextNode(c.textContent);c.parentNode.replaceChild(p,c)}else{for(var d=this._doc.createElement("span");c.firstChild;)d.appendChild(c.firstChild);c.parentNode.replaceChild(d,c)}else c.setAttribute("href",o(u))});var l=this._getAllNodesWithTag(r,["img","picture","figure","video","audio","source"]);this._forEachNode(l,function(c){var u=c.getAttribute("src"),p=c.getAttribute("poster"),d=c.getAttribute("srcset");if(u&&c.setAttribute("src",o(u)),p&&c.setAttribute("poster",o(p)),d){var h=d.replace(this.REGEXPS.srcsetUrl,function(b,g,m,f){return o(g)+(m||"")+f});c.setAttribute("srcset",h)}})},_simplifyNestedElements:function(r){for(var i=r;i;){if(i.parentNode&&["DIV","SECTION"].includes(i.tagName)&&!(i.id&&i.id.startsWith("readability"))){if(this._isElementWithoutContent(i)){i=this._removeAndGetNext(i);continue}else if(this._hasSingleTagInsideElement(i,"DIV")||this._hasSingleTagInsideElement(i,"SECTION")){for(var a=i.children[0],o=0;o<i.attributes.length;o++)a.setAttribute(i.attributes[o].name,i.attributes[o].value);i.parentNode.replaceChild(a,i),i=a;continue}}i=this._getNextNode(i)}},_getArticleTitle:function(){var r=this._doc,i="",a="";try{i=a=r.title.trim(),typeof i!="string"&&(i=a=this._getInnerText(r.getElementsByTagName("title")[0]))}catch{}var o=!1;function s(h){return h.split(/\s+/).length}if(/ [\|\-\\\/>»] /.test(i))o=/ [\\\/>»] /.test(i),i=a.replace(/(.*)[\|\-\\\/>»] .*/gi,"$1"),s(i)<3&&(i=a.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi,"$1"));else if(i.indexOf(": ")!==-1){var l=this._concatNodeLists(r.getElementsByTagName("h1"),r.getElementsByTagName("h2")),c=i.trim(),u=this._someNode(l,function(h){return h.textContent.trim()===c});u||(i=a.substring(a.lastIndexOf(":")+1),s(i)<3?i=a.substring(a.indexOf(":")+1):s(a.substr(0,a.indexOf(":")))>5&&(i=a))}else if(i.length>150||i.length<15){var p=r.getElementsByTagName("h1");p.length===1&&(i=this._getInnerText(p[0]))}i=i.trim().replace(this.REGEXPS.normalize," ");var d=s(i);return d<=4&&(!o||d!=s(a.replace(/[\|\-\\\/>»]+/g,""))-1)&&(i=a),i},_prepDocument:function(){var r=this._doc;this._removeNodes(this._getAllNodesWithTag(r,["style"])),r.body&&this._replaceBrs(r.body),this._replaceNodeTags(this._getAllNodesWithTag(r,["font"]),"SPAN")},_nextNode:function(r){for(var i=r;i&&i.nodeType!=this.ELEMENT_NODE&&this.REGEXPS.whitespace.test(i.textContent);)i=i.nextSibling;return i},_replaceBrs:function(r){this._forEachNode(this._getAllNodesWithTag(r,["br"]),function(i){for(var a=i.nextSibling,o=!1;(a=this._nextNode(a))&&a.tagName=="BR";){o=!0;var s=a.nextSibling;a.parentNode.removeChild(a),a=s}if(o){var l=this._doc.createElement("p");for(i.parentNode.replaceChild(l,i),a=l.nextSibling;a;){if(a.tagName=="BR"){var c=this._nextNode(a.nextSibling);if(c&&c.tagName=="BR")break}if(!this._isPhrasingContent(a))break;var u=a.nextSibling;l.appendChild(a),a=u}for(;l.lastChild&&this._isWhitespace(l.lastChild);)l.removeChild(l.lastChild);l.parentNode.tagName==="P"&&this._setNodeTag(l.parentNode,"DIV")}})},_setNodeTag:function(r,i){if(this.log("_setNodeTag",r,i),this._docJSDOMParser)return r.localName=i.toLowerCase(),r.tagName=i.toUpperCase(),r;for(var a=r.ownerDocument.createElement(i);r.firstChild;)a.appendChild(r.firstChild);r.parentNode.replaceChild(a,r),r.readability&&(a.readability=r.readability);for(var o=0;o<r.attributes.length;o++)try{a.setAttribute(r.attributes[o].name,r.attributes[o].value)}catch{}return a},_prepArticle:function(r){this._cleanStyles(r),this._markDataTables(r),this._fixLazyImages(r),this._cleanConditionally(r,"form"),this._cleanConditionally(r,"fieldset"),this._clean(r,"object"),this._clean(r,"embed"),this._clean(r,"footer"),this._clean(r,"link"),this._clean(r,"aside");var i=this.DEFAULT_CHAR_THRESHOLD;this._forEachNode(r.children,function(a){this._cleanMatchedNodes(a,function(o,s){return this.REGEXPS.shareElements.test(s)&&o.textContent.length<i})}),this._clean(r,"iframe"),this._clean(r,"input"),this._clean(r,"textarea"),this._clean(r,"select"),this._clean(r,"button"),this._cleanHeaders(r),this._cleanConditionally(r,"table"),this._cleanConditionally(r,"ul"),this._cleanConditionally(r,"div"),this._replaceNodeTags(this._getAllNodesWithTag(r,["h1"]),"h2"),this._removeNodes(this._getAllNodesWithTag(r,["p"]),function(a){var o=a.getElementsByTagName("img").length,s=a.getElementsByTagName("embed").length,l=a.getElementsByTagName("object").length,c=a.getElementsByTagName("iframe").length,u=o+s+l+c;return u===0&&!this._getInnerText(a,!1)}),this._forEachNode(this._getAllNodesWithTag(r,["br"]),function(a){var o=this._nextNode(a.nextSibling);o&&o.tagName=="P"&&a.parentNode.removeChild(a)}),this._forEachNode(this._getAllNodesWithTag(r,["table"]),function(a){var o=this._hasSingleTagInsideElement(a,"TBODY")?a.firstElementChild:a;if(this._hasSingleTagInsideElement(o,"TR")){var s=o.firstElementChild;if(this._hasSingleTagInsideElement(s,"TD")){var l=s.firstElementChild;l=this._setNodeTag(l,this._everyNode(l.childNodes,this._isPhrasingContent)?"P":"DIV"),a.parentNode.replaceChild(l,a)}}})},_initializeNode:function(r){switch(r.readability={contentScore:0},r.tagName){case"DIV":r.readability.contentScore+=5;break;case"PRE":case"TD":case"BLOCKQUOTE":r.readability.contentScore+=3;break;case"ADDRESS":case"OL":case"UL":case"DL":case"DD":case"DT":case"LI":case"FORM":r.readability.contentScore-=3;break;case"H1":case"H2":case"H3":case"H4":case"H5":case"H6":case"TH":r.readability.contentScore-=5;break}r.readability.contentScore+=this._getClassWeight(r)},_removeAndGetNext:function(r){var i=this._getNextNode(r,!0);return r.parentNode.removeChild(r),i},_getNextNode:function(r,i){if(!i&&r.firstElementChild)return r.firstElementChild;if(r.nextElementSibling)return r.nextElementSibling;do r=r.parentNode;while(r&&!r.nextElementSibling);return r&&r.nextElementSibling},_textSimilarity:function(r,i){var a=r.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean),o=i.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);if(!a.length||!o.length)return 0;var s=o.filter(c=>!a.includes(c)),l=s.join(" ").length/o.join(" ").length;return 1-l},_checkByline:function(r,i){if(this._articleByline)return!1;if(r.getAttribute!==void 0)var a=r.getAttribute("rel"),o=r.getAttribute("itemprop");return(a==="author"||o&&o.indexOf("author")!==-1||this.REGEXPS.byline.test(i))&&this._isValidByline(r.textContent)?(this._articleByline=r.textContent.trim(),!0):!1},_getNodeAncestors:function(r,i){i=i||0;for(var a=0,o=[];r.parentNode&&(o.push(r.parentNode),!(i&&++a===i));)r=r.parentNode;return o},_grabArticle:function(r){this.log("**** grabArticle ****");var i=this._doc,a=r!==null;if(r=r||this._doc.body,!r)return this.log("No body found in document. Abort."),null;for(var o=r.innerHTML;;){this.log("Starting grabArticle loop");var s=this._flagIsActive(this.FLAG_STRIP_UNLIKELYS),l=[],c=this._doc.documentElement;let se=!0;for(;c;){c.tagName==="HTML"&&(this._articleLang=c.getAttribute("lang"));var u=c.className+" "+c.id;if(!this._isProbablyVisible(c)){this.log("Removing hidden node - "+u),c=this._removeAndGetNext(c);continue}if(c.getAttribute("aria-modal")=="true"&&c.getAttribute("role")=="dialog"){c=this._removeAndGetNext(c);continue}if(this._checkByline(c,u)){c=this._removeAndGetNext(c);continue}if(se&&this._headerDuplicatesTitle(c)){this.log("Removing header: ",c.textContent.trim(),this._articleTitle.trim()),se=!1,c=this._removeAndGetNext(c);continue}if(s){if(this.REGEXPS.unlikelyCandidates.test(u)&&!this.REGEXPS.okMaybeItsACandidate.test(u)&&!this._hasAncestorTag(c,"table")&&!this._hasAncestorTag(c,"code")&&c.tagName!=="BODY"&&c.tagName!=="A"){this.log("Removing unlikely candidate - "+u),c=this._removeAndGetNext(c);continue}if(this.UNLIKELY_ROLES.includes(c.getAttribute("role"))){this.log("Removing content with role "+c.getAttribute("role")+" - "+u),c=this._removeAndGetNext(c);continue}}if((c.tagName==="DIV"||c.tagName==="SECTION"||c.tagName==="HEADER"||c.tagName==="H1"||c.tagName==="H2"||c.tagName==="H3"||c.tagName==="H4"||c.tagName==="H5"||c.tagName==="H6")&&this._isElementWithoutContent(c)){c=this._removeAndGetNext(c);continue}if(this.DEFAULT_TAGS_TO_SCORE.indexOf(c.tagName)!==-1&&l.push(c),c.tagName==="DIV"){for(var p=null,d=c.firstChild;d;){var h=d.nextSibling;if(this._isPhrasingContent(d))p!==null?p.appendChild(d):this._isWhitespace(d)||(p=i.createElement("p"),c.replaceChild(p,d),p.appendChild(d));else if(p!==null){for(;p.lastChild&&this._isWhitespace(p.lastChild);)p.removeChild(p.lastChild);p=null}d=h}if(this._hasSingleTagInsideElement(c,"P")&&this._getLinkDensity(c)<.25){var b=c.children[0];c.parentNode.replaceChild(b,c),c=b,l.push(c)}else this._hasChildBlockElement(c)||(c=this._setNodeTag(c,"P"),l.push(c))}c=this._getNextNode(c)}var g=[];this._forEachNode(l,function(Y){if(!(!Y.parentNode||typeof Y.parentNode.tagName>"u")){var re=this._getInnerText(Y);if(!(re.length<25)){var de=this._getNodeAncestors(Y,5);if(de.length!==0){var fe=0;fe+=1,fe+=re.split(",").length,fe+=Math.min(Math.floor(re.length/100),3),this._forEachNode(de,function(ne,ke){if(!(!ne.tagName||!ne.parentNode||typeof ne.parentNode.tagName>"u")){if(typeof ne.readability>"u"&&(this._initializeNode(ne),g.push(ne)),ke===0)var Oe=1;else ke===1?Oe=2:Oe=ke*3;ne.readability.contentScore+=fe/Oe}})}}}});for(var m=[],f=0,y=g.length;f<y;f+=1){var w=g[f],E=w.readability.contentScore*(1-this._getLinkDensity(w));w.readability.contentScore=E,this.log("Candidate:",w,"with score "+E);for(var _=0;_<this._nbTopCandidates;_++){var T=m[_];if(!T||E>T.readability.contentScore){m.splice(_,0,w),m.length>this._nbTopCandidates&&m.pop();break}}}var v=m[0]||null,x=!1,S;if(v===null||v.tagName==="BODY"){for(v=i.createElement("DIV"),x=!0;r.firstChild;)this.log("Moving child out:",r.firstChild),v.appendChild(r.firstChild);r.appendChild(v),this._initializeNode(v)}else if(v){for(var A=[],C=1;C<m.length;C++)m[C].readability.contentScore/v.readability.contentScore>=.75&&A.push(this._getNodeAncestors(m[C]));var R=3;if(A.length>=R)for(S=v.parentNode;S.tagName!=="BODY";){for(var D=0,I=0;I<A.length&&D<R;I++)D+=Number(A[I].includes(S));if(D>=R){v=S;break}S=S.parentNode}v.readability||this._initializeNode(v),S=v.parentNode;for(var N=v.readability.contentScore,B=N/3;S.tagName!=="BODY";){if(!S.readability){S=S.parentNode;continue}var F=S.readability.contentScore;if(F<B)break;if(F>N){v=S;break}N=S.readability.contentScore,S=S.parentNode}for(S=v.parentNode;S.tagName!="BODY"&&S.children.length==1;)v=S,S=v.parentNode;v.readability||this._initializeNode(v)}var W=i.createElement("DIV");a&&(W.id="readability-content");var te=Math.max(10,v.readability.contentScore*.2);S=v.parentNode;for(var j=S.children,J=0,L=j.length;J<L;J++){var O=j[J],H=!1;if(this.log("Looking at sibling node:",O,O.readability?"with score "+O.readability.contentScore:""),this.log("Sibling has score",O.readability?O.readability.contentScore:"Unknown"),O===v)H=!0;else{var q=0;if(O.className===v.className&&v.className!==""&&(q+=v.readability.contentScore*.2),O.readability&&O.readability.contentScore+q>=te)H=!0;else if(O.nodeName==="P"){var V=this._getLinkDensity(O),ue=this._getInnerText(O),pe=ue.length;(pe>80&&V<.25||pe<80&&pe>0&&V===0&&ue.search(/\.( |$)/)!==-1)&&(H=!0)}}H&&(this.log("Appending node:",O),this.ALTER_TO_DIV_EXCEPTIONS.indexOf(O.nodeName)===-1&&(this.log("Altering sibling:",O,"to div."),O=this._setNodeTag(O,"DIV")),W.appendChild(O),j=S.children,J-=1,L-=1)}if(this._debug&&this.log("Article content pre-prep: "+W.innerHTML),this._prepArticle(W),this._debug&&this.log("Article content post-prep: "+W.innerHTML),x)v.id="readability-page-1",v.className="page";else{var he=i.createElement("DIV");for(he.id="readability-page-1",he.className="page";W.firstChild;)he.appendChild(W.firstChild);W.appendChild(he)}this._debug&&this.log("Article content after paging: "+W.innerHTML);var Q=!0,ae=this._getInnerText(W,!0).length;if(ae<this._charThreshold)if(Q=!1,r.innerHTML=o,this._flagIsActive(this.FLAG_STRIP_UNLIKELYS))this._removeFlag(this.FLAG_STRIP_UNLIKELYS),this._attempts.push({articleContent:W,textLength:ae});else if(this._flagIsActive(this.FLAG_WEIGHT_CLASSES))this._removeFlag(this.FLAG_WEIGHT_CLASSES),this._attempts.push({articleContent:W,textLength:ae});else if(this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY),this._attempts.push({articleContent:W,textLength:ae});else{if(this._attempts.push({articleContent:W,textLength:ae}),this._attempts.sort(function(Y,re){return re.textLength-Y.textLength}),!this._attempts[0].textLength)return null;W=this._attempts[0].articleContent,Q=!0}if(Q){var oe=[S,v].concat(this._getNodeAncestors(S));return this._someNode(oe,function(Y){if(!Y.tagName)return!1;var re=Y.getAttribute("dir");return re?(this._articleDir=re,!0):!1}),W}}},_isValidByline:function(r){return typeof r=="string"||r instanceof String?(r=r.trim(),r.length>0&&r.length<100):!1},_unescapeHtmlEntities:function(r){if(!r)return r;var i=this.HTML_ESCAPE_MAP;return r.replace(/&(quot|amp|apos|lt|gt);/g,function(a,o){return i[o]}).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi,function(a,o,s){var l=parseInt(o||s,o?16:10);return String.fromCharCode(l)})},_getJSONLD:function(r){var i=this._getAllNodesWithTag(r,["script"]),a;return this._forEachNode(i,function(o){if(!a&&o.getAttribute("type")==="application/ld+json")try{var s=o.textContent.replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g,""),l=JSON.parse(s);if(!l["@context"]||!l["@context"].match(/^https?\:\/\/schema\.org$/)||(!l["@type"]&&Array.isArray(l["@graph"])&&(l=l["@graph"].find(function(d){return(d["@type"]||"").match(this.REGEXPS.jsonLdArticleTypes)})),!l||!l["@type"]||!l["@type"].match(this.REGEXPS.jsonLdArticleTypes)))return;if(a={},typeof l.name=="string"&&typeof l.headline=="string"&&l.name!==l.headline){var c=this._getArticleTitle(),u=this._textSimilarity(l.name,c)>.75,p=this._textSimilarity(l.headline,c)>.75;p&&!u?a.title=l.headline:a.title=l.name}else typeof l.name=="string"?a.title=l.name.trim():typeof l.headline=="string"&&(a.title=l.headline.trim());l.author&&(typeof l.author.name=="string"?a.byline=l.author.name.trim():Array.isArray(l.author)&&l.author[0]&&typeof l.author[0].name=="string"&&(a.byline=l.author.filter(function(d){return d&&typeof d.name=="string"}).map(function(d){return d.name.trim()}).join(", "))),typeof l.description=="string"&&(a.excerpt=l.description.trim()),l.publisher&&typeof l.publisher.name=="string"&&(a.siteName=l.publisher.name.trim());return}catch(d){this.log(d.message)}}),a||{}},_getArticleMetadata:function(r){var i={},a={},o=this._doc.getElementsByTagName("meta"),s=/\s*(dc|dcterm|og|twitter)\s*:\s*(author|creator|description|title|site_name)\s*/gi,l=/^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;return this._forEachNode(o,function(c){var u=c.getAttribute("name"),p=c.getAttribute("property"),d=c.getAttribute("content");if(d){var h=null,b=null;p&&(h=p.match(s),h&&(b=h[0].toLowerCase().replace(/\s/g,""),a[b]=d.trim())),!h&&u&&l.test(u)&&(b=u,d&&(b=b.toLowerCase().replace(/\s/g,"").replace(/\./g,":"),a[b]=d.trim()))}}),i.title=r.title||a["dc:title"]||a["dcterm:title"]||a["og:title"]||a["weibo:article:title"]||a["weibo:webpage:title"]||a.title||a["twitter:title"],i.title||(i.title=this._getArticleTitle()),i.byline=r.byline||a["dc:creator"]||a["dcterm:creator"]||a.author,i.excerpt=r.excerpt||a["dc:description"]||a["dcterm:description"]||a["og:description"]||a["weibo:article:description"]||a["weibo:webpage:description"]||a.description||a["twitter:description"],i.siteName=r.siteName||a["og:site_name"],i.title=this._unescapeHtmlEntities(i.title),i.byline=this._unescapeHtmlEntities(i.byline),i.excerpt=this._unescapeHtmlEntities(i.excerpt),i.siteName=this._unescapeHtmlEntities(i.siteName),i},_isSingleImage:function(r){return r.tagName==="IMG"?!0:r.children.length!==1||r.textContent.trim()!==""?!1:this._isSingleImage(r.children[0])},_unwrapNoscriptImages:function(r){var i=Array.from(r.getElementsByTagName("img"));this._forEachNode(i,function(o){for(var s=0;s<o.attributes.length;s++){var l=o.attributes[s];switch(l.name){case"src":case"srcset":case"data-src":case"data-srcset":return}if(/\.(jpg|jpeg|png|webp)/i.test(l.value))return}o.parentNode.removeChild(o)});var a=Array.from(r.getElementsByTagName("noscript"));this._forEachNode(a,function(o){var s=r.createElement("div");if(s.innerHTML=o.innerHTML,!!this._isSingleImage(s)){var l=o.previousElementSibling;if(l&&this._isSingleImage(l)){var c=l;c.tagName!=="IMG"&&(c=l.getElementsByTagName("img")[0]);for(var u=s.getElementsByTagName("img")[0],p=0;p<c.attributes.length;p++){var d=c.attributes[p];if(d.value!==""&&(d.name==="src"||d.name==="srcset"||/\.(jpg|jpeg|png|webp)/i.test(d.value))){if(u.getAttribute(d.name)===d.value)continue;var h=d.name;u.hasAttribute(h)&&(h="data-old-"+h),u.setAttribute(h,d.value)}}o.parentNode.replaceChild(s.firstElementChild,l)}}})},_removeScripts:function(r){this._removeNodes(this._getAllNodesWithTag(r,["script","noscript"]))},_hasSingleTagInsideElement:function(r,i){return r.children.length!=1||r.children[0].tagName!==i?!1:!this._someNode(r.childNodes,function(a){return a.nodeType===this.TEXT_NODE&&this.REGEXPS.hasContent.test(a.textContent)})},_isElementWithoutContent:function(r){return r.nodeType===this.ELEMENT_NODE&&r.textContent.trim().length==0&&(r.children.length==0||r.children.length==r.getElementsByTagName("br").length+r.getElementsByTagName("hr").length)},_hasChildBlockElement:function(r){return this._someNode(r.childNodes,function(i){return this.DIV_TO_P_ELEMS.has(i.tagName)||this._hasChildBlockElement(i)})},_isPhrasingContent:function(r){return r.nodeType===this.TEXT_NODE||this.PHRASING_ELEMS.indexOf(r.tagName)!==-1||(r.tagName==="A"||r.tagName==="DEL"||r.tagName==="INS")&&this._everyNode(r.childNodes,this._isPhrasingContent)},_isWhitespace:function(r){return r.nodeType===this.TEXT_NODE&&r.textContent.trim().length===0||r.nodeType===this.ELEMENT_NODE&&r.tagName==="BR"},_getInnerText:function(r,i){i=typeof i>"u"?!0:i;var a=r.textContent.trim();return i?a.replace(this.REGEXPS.normalize," "):a},_getCharCount:function(r,i){return i=i||",",this._getInnerText(r).split(i).length-1},_cleanStyles:function(r){if(!(!r||r.tagName.toLowerCase()==="svg")){for(var i=0;i<this.PRESENTATIONAL_ATTRIBUTES.length;i++)r.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[i]);this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(r.tagName)!==-1&&(r.removeAttribute("width"),r.removeAttribute("height"));for(var a=r.firstElementChild;a!==null;)this._cleanStyles(a),a=a.nextElementSibling}},_getLinkDensity:function(r){var i=this._getInnerText(r).length;if(i===0)return 0;var a=0;return this._forEachNode(r.getElementsByTagName("a"),function(o){var s=o.getAttribute("href"),l=s&&this.REGEXPS.hashUrl.test(s)?.3:1;a+=this._getInnerText(o).length*l}),a/i},_getClassWeight:function(r){if(!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))return 0;var i=0;return typeof r.className=="string"&&r.className!==""&&(this.REGEXPS.negative.test(r.className)&&(i-=25),this.REGEXPS.positive.test(r.className)&&(i+=25)),typeof r.id=="string"&&r.id!==""&&(this.REGEXPS.negative.test(r.id)&&(i-=25),this.REGEXPS.positive.test(r.id)&&(i+=25)),i},_clean:function(r,i){var a=["object","embed","iframe"].indexOf(i)!==-1;this._removeNodes(this._getAllNodesWithTag(r,[i]),function(o){if(a){for(var s=0;s<o.attributes.length;s++)if(this._allowedVideoRegex.test(o.attributes[s].value))return!1;if(o.tagName==="object"&&this._allowedVideoRegex.test(o.innerHTML))return!1}return!0})},_hasAncestorTag:function(r,i,a,o){a=a||3,i=i.toUpperCase();for(var s=0;r.parentNode;){if(a>0&&s>a)return!1;if(r.parentNode.tagName===i&&(!o||o(r.parentNode)))return!0;r=r.parentNode,s++}return!1},_getRowAndColumnCount:function(r){for(var i=0,a=0,o=r.getElementsByTagName("tr"),s=0;s<o.length;s++){var l=o[s].getAttribute("rowspan")||0;l&&(l=parseInt(l,10)),i+=l||1;for(var c=0,u=o[s].getElementsByTagName("td"),p=0;p<u.length;p++){var d=u[p].getAttribute("colspan")||0;d&&(d=parseInt(d,10)),c+=d||1}a=Math.max(a,c)}return{rows:i,columns:a}},_markDataTables:function(r){for(var i=r.getElementsByTagName("table"),a=0;a<i.length;a++){var o=i[a],s=o.getAttribute("role");if(s=="presentation"){o._readabilityDataTable=!1;continue}var l=o.getAttribute("datatable");if(l=="0"){o._readabilityDataTable=!1;continue}var c=o.getAttribute("summary");if(c){o._readabilityDataTable=!0;continue}var u=o.getElementsByTagName("caption")[0];if(u&&u.childNodes.length>0){o._readabilityDataTable=!0;continue}var p=["col","colgroup","tfoot","thead","th"],d=function(b){return!!o.getElementsByTagName(b)[0]};if(p.some(d)){this.log("Data table because found data-y descendant"),o._readabilityDataTable=!0;continue}if(o.getElementsByTagName("table")[0]){o._readabilityDataTable=!1;continue}var h=this._getRowAndColumnCount(o);if(h.rows>=10||h.columns>4){o._readabilityDataTable=!0;continue}o._readabilityDataTable=h.rows*h.columns>10}},_fixLazyImages:function(r){this._forEachNode(this._getAllNodesWithTag(r,["img","picture","figure"]),function(i){if(i.src&&this.REGEXPS.b64DataUrl.test(i.src)){var a=this.REGEXPS.b64DataUrl.exec(i.src);if(a[1]==="image/svg+xml")return;for(var o=!1,s=0;s<i.attributes.length;s++){var l=i.attributes[s];if(l.name!=="src"&&/\.(jpg|jpeg|png|webp)/i.test(l.value)){o=!0;break}}if(o){var c=i.src.search(/base64\s*/i)+7,u=i.src.length-c;u<133&&i.removeAttribute("src")}}if(!((i.src||i.srcset&&i.srcset!="null")&&i.className.toLowerCase().indexOf("lazy")===-1)){for(var p=0;p<i.attributes.length;p++)if(l=i.attributes[p],!(l.name==="src"||l.name==="srcset"||l.name==="alt")){var d=null;if(/\.(jpg|jpeg|png|webp)\s+\d/.test(l.value)?d="srcset":/^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(l.value)&&(d="src"),d){if(i.tagName==="IMG"||i.tagName==="PICTURE")i.setAttribute(d,l.value);else if(i.tagName==="FIGURE"&&!this._getAllNodesWithTag(i,["img","picture"]).length){var h=this._doc.createElement("img");h.setAttribute(d,l.value),i.appendChild(h)}}}}})},_getTextDensity:function(r,i){var a=this._getInnerText(r,!0).length;if(a===0)return 0;var o=0,s=this._getAllNodesWithTag(r,i);return this._forEachNode(s,l=>o+=this._getInnerText(l,!0).length),o/a},_cleanConditionally:function(r,i){this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)&&this._removeNodes(this._getAllNodesWithTag(r,[i]),function(a){var o=function(S){return S._readabilityDataTable},s=i==="ul"||i==="ol";if(!s){var l=0,c=this._getAllNodesWithTag(a,["ul","ol"]);this._forEachNode(c,S=>l+=this._getInnerText(S).length),s=l/this._getInnerText(a).length>.9}if(i==="table"&&o(a)||this._hasAncestorTag(a,"table",-1,o)||this._hasAncestorTag(a,"code"))return!1;var u=this._getClassWeight(a);this.log("Cleaning Conditionally",a);var p=0;if(u+p<0)return!0;if(this._getCharCount(a,",")<10){for(var d=a.getElementsByTagName("p").length,h=a.getElementsByTagName("img").length,b=a.getElementsByTagName("li").length-100,g=a.getElementsByTagName("input").length,m=this._getTextDensity(a,["h1","h2","h3","h4","h5","h6"]),f=0,y=this._getAllNodesWithTag(a,["object","embed","iframe"]),w=0;w<y.length;w++){for(var E=0;E<y[w].attributes.length;E++)if(this._allowedVideoRegex.test(y[w].attributes[E].value))return!1;if(y[w].tagName==="object"&&this._allowedVideoRegex.test(y[w].innerHTML))return!1;f++}var _=this._getLinkDensity(a),T=this._getInnerText(a).length,v=h>1&&d/h<.5&&!this._hasAncestorTag(a,"figure")||!s&&b>d||g>Math.floor(d/3)||!s&&m<.9&&T<25&&(h===0||h>2)&&!this._hasAncestorTag(a,"figure")||!s&&u<25&&_>.2||u>=25&&_>.5||f===1&&T<75||f>1;if(s&&v){for(var x=0;x<a.children.length;x++)if(a.children[x].children.length>1)return v;let S=a.getElementsByTagName("li").length;if(h==S)return!1}return v}return!1})},_cleanMatchedNodes:function(r,i){for(var a=this._getNextNode(r,!0),o=this._getNextNode(r);o&&o!=a;)i.call(this,o,o.className+" "+o.id)?o=this._removeAndGetNext(o):o=this._getNextNode(o)},_cleanHeaders:function(r){let i=this._getAllNodesWithTag(r,["h1","h2"]);this._removeNodes(i,function(a){let o=this._getClassWeight(a)<0;return o&&this.log("Removing header with low class weight:",a),o})},_headerDuplicatesTitle:function(r){if(r.tagName!="H1"&&r.tagName!="H2")return!1;var i=this._getInnerText(r,!1);return this.log("Evaluating similarity of header:",i,this._articleTitle),this._textSimilarity(this._articleTitle,i)>.75},_flagIsActive:function(r){return(this._flags&r)>0},_removeFlag:function(r){this._flags=this._flags&~r},_isProbablyVisible:function(r){return(!r.style||r.style.display!="none")&&!r.hasAttribute("hidden")&&(!r.hasAttribute("aria-hidden")||r.getAttribute("aria-hidden")!="true"||r.className&&r.className.indexOf&&r.className.indexOf("fallback-image")!==-1)},parse:function(){if(this._maxElemsToParse>0){var r=this._doc.getElementsByTagName("*").length;if(r>this._maxElemsToParse)throw new Error("Aborting parsing document; "+r+" elements found")}this._unwrapNoscriptImages(this._doc);var i=this._disableJSONLD?{}:this._getJSONLD(this._doc);this._removeScripts(this._doc),this._prepDocument();var a=this._getArticleMetadata(i);this._articleTitle=a.title;var o=this._grabArticle();if(!o)return null;if(this.log("Grabbed: "+o.innerHTML),this._postProcessContent(o),!a.excerpt){var s=o.getElementsByTagName("p");s.length>0&&(a.excerpt=s[0].textContent.trim())}var l=o.textContent;return{title:this._articleTitle,byline:a.byline||this._articleByline,dir:this._articleDir,lang:this._articleLang,content:this._serializer(o),textContent:l,length:l.length,excerpt:a.excerpt,siteName:a.siteName||this._articleSiteName}}},typeof e=="object"&&(e.exports=n)}),Bb=hs((t,e)=>{var n={unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i};function r(a){return(!a.style||a.style.display!="none")&&!a.hasAttribute("hidden")&&(!a.hasAttribute("aria-hidden")||a.getAttribute("aria-hidden")!="true"||a.className&&a.className.indexOf&&a.className.indexOf("fallback-image")!==-1)}function i(a,o={}){typeof o=="function"&&(o={visibilityChecker:o});var s={minScore:20,minContentLength:140,visibilityChecker:r};o=Object.assign(s,o);var l=a.querySelectorAll("p, pre, article"),c=a.querySelectorAll("div > br");if(c.length){var u=new Set(l);[].forEach.call(c,function(d){u.add(d.parentNode)}),l=Array.from(u)}var p=0;return[].some.call(l,function(d){if(!o.visibilityChecker(d))return!1;var h=d.className+" "+d.id;if(n.unlikelyCandidates.test(h)&&!n.okMaybeItsACandidate.test(h)||d.matches("li p"))return!1;var b=d.textContent.trim().length;return b<o.minContentLength?!1:(p+=Math.sqrt(b-o.minContentLength),p>o.minScore)})}typeof e=="object"&&(e.exports=i)}),Ep=hs((t,e)=>{var n=Fb(),r=Bb();e.exports={Readability:n,isProbablyReaderable:r}}),Cp={};Mb(Cp,{Readability:()=>Dp,default:()=>Np,isProbablyReaderable:()=>Rp});var Lp=kp(Ep());Ib(Cp,kp(Ep()));var{Readability:Dp,isProbablyReaderable:Rp}=Lp,{default:Ap,...Ub}=Lp,Np=Ap!==void 0?Ap:Ub;var vT=Gi.alert;var xt=window,Pp=!1,Mp=!!(xt.Worker&&xt.Blob&&xt.Promise&&xt.OffscreenCanvas&&xt.OffscreenCanvasRenderingContext2D&&xt.HTMLCanvasElement&&xt.HTMLCanvasElement.prototype.transferControlToOffscreen&&xt.URL&&xt.URL.createObjectURL);function Op(){}function bs(t){var e=xt.Promise,n=e!==void 0?e:xt.Promise;return typeof n=="function"?new n(t):(t(Op,Op),null)}var fs=function(){var t=Math.floor(16.666666666666668),e,n,r={},i=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(a){var o=Math.random();return r[o]=requestAnimationFrame(function s(l){i===l||i+t-1<l?(i=l,delete r[o],a()):r[o]=requestAnimationFrame(s)}),o},n=function(a){r[a]&&cancelAnimationFrame(r[a])}):(e=function(a){return setTimeout(a,t)},n=function(a){return clearTimeout(a)}),{frame:e,cancel:n}}(),zb=function(){var t,e,n={};function r(i){function a(o,s){i.postMessage({options:o||{},callback:s})}i.init=function(s){var l=s.transferControlToOffscreen();i.postMessage({canvas:l},[l])},i.fire=function(s,l,c){if(e)return a(s,null),e;var u=Math.random().toString(36).slice(2);return e=bs(function(p){function d(h){h.data.callback===u&&(delete n[u],i.removeEventListener("message",d),e=null,c(),p())}i.addEventListener("message",d),a(s,u),n[u]=d.bind(null,{data:{callback:u}})}),e},i.reset=function(){i.postMessage({reset:!0});for(var s in n)n[s](),delete n[s]}}return function(){if(t)return t;if(!Pp&&Mp){var i=["var CONFETTI, SIZE = {}, module = {};","("+main.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([i])))}catch{return null}r(t)}return t}}(),Hb={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function Wb(t,e){return e?e(t):t}function $b(t){return t!=null}function ze(t,e,n){return Wb(t&&$b(t[e])?t[e]:Hb[e],n)}function jb(t){return t<0?0:Math.floor(t)}function qb(t,e){return Math.floor(Math.random()*(e-t))+t}function ms(t){return parseInt(t,16)}function Kb(t){return t.map(Gb)}function Gb(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:ms(e.substring(0,2)),g:ms(e.substring(2,4)),b:ms(e.substring(4,6))}}function Vb(t){var e=ze(t,"origin",Object);return e.x=ze(e,"x",Number),e.y=ze(e,"y",Number),e}function Xb(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function Yb(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function Zb(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}function Qb(t,e,n,r,i,a,o,s,l){t.save(),t.translate(e,n),t.rotate(a),t.scale(r,i),t.arc(0,0,1,o,s,l),t.restore()}function Jb(t){var e=t.angle*(Math.PI/180),n=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:t.startVelocity*.5+Math.random()*t.startVelocity,angle2D:-e+(.5*n-Math.random()*n),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:t.gravity*3,ovalScalar:.6,scalar:t.scalar}}function ey(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var n=e.tick++/e.totalTicks,r=e.x+e.random*e.tiltCos,i=e.y+e.random*e.tiltSin,a=e.wobbleX+e.random*e.tiltCos,o=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),e.shape==="circle")t.ellipse?t.ellipse(e.x,e.y,Math.abs(a-r)*e.ovalScalar,Math.abs(o-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):Qb(t,e.x,e.y,Math.abs(a-r)*e.ovalScalar,Math.abs(o-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var s=Math.PI/2*3,l=4*e.scalar,c=8*e.scalar,u=e.x,p=e.y,d=5,h=Math.PI/d;d--;)u=e.x+Math.cos(s)*c,p=e.y+Math.sin(s)*c,t.lineTo(u,p),s+=h,u=e.x+Math.cos(s)*l,p=e.y+Math.sin(s)*l,t.lineTo(u,p),s+=h;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(i)),t.lineTo(Math.floor(a),Math.floor(o)),t.lineTo(Math.floor(r),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}function ty(t,e,n,r,i){var a=e.slice(),o=t.getContext("2d"),s,l,c=bs(function(u){function p(){s=l=null,o.clearRect(0,0,r.width,r.height),i(),u()}function d(){Pp&&!(r.width===workerSize.width&&r.height===workerSize.height)&&(r.width=t.width=workerSize.width,r.height=t.height=workerSize.height),!r.width&&!r.height&&(n(t),r.width=t.width,r.height=t.height),o.clearRect(0,0,r.width,r.height),a=a.filter(function(h){return ey(o,h)}),a.length?s=fs.frame(d):p()}s=fs.frame(d),l=p});return{addFettis:function(u){return a=a.concat(u),c},canvas:t,promise:c,reset:function(){s&&fs.cancel(s),l&&l()}}}function ny(t,e){var n=!t,r=!!ze(e||{},"resize"),i=ze(e,"disableForReducedMotion",Boolean),a=Mp&&!!ze(e||{},"useWorker"),o=a?zb():null,s=n?Xb:Yb,l=t&&o?!!t.__confetti_initialized:!1,c=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,u;function p(h,b,g){for(var m=ze(h,"particleCount",jb),f=ze(h,"angle",Number),y=ze(h,"spread",Number),w=ze(h,"startVelocity",Number),E=ze(h,"decay",Number),_=ze(h,"gravity",Number),T=ze(h,"drift",Number),v=ze(h,"colors",Kb),x=ze(h,"ticks",Number),S=ze(h,"shapes"),A=ze(h,"scalar"),C=Vb(h),R=m,D=[],I=t.width*C.x,N=t.height*C.y;R--;)D.push(Jb({x:I,y:N,angle:f,spread:y,startVelocity:w,color:v[R%v.length],shape:S[qb(0,S.length)],ticks:x,decay:E,gravity:_,drift:T,scalar:A}));return u?u.addFettis(D):(u=ty(t,D,s,b,g),u.promise)}function d(h){var b=i||ze(h,"disableForReducedMotion",Boolean),g=ze(h,"zIndex",Number);if(b&&c)return bs(function(w){w()});n&&u?t=u.canvas:n&&!t&&(t=Zb(g),document.body.appendChild(t)),r&&!l&&s(t);var m={width:t.width,height:t.height};o&&!l&&o.init(t),l=!0,o&&(t.__confetti_initialized=!0);function f(){if(o){var w={getBoundingClientRect:function(){if(!n)return t.getBoundingClientRect()}};s(w),o.postMessage({resize:{width:w.width,height:w.height}});return}m.width=m.height=null}function y(){u=null,r&&xt.removeEventListener("resize",f),n&&t&&(document.body.removeChild(t),t=null,l=!1)}return r&&xt.addEventListener("resize",f,!1),o?o.fire(h,m,y):p(h,m,y)}return d.reset=function(){o&&o.reset(),u&&u.reset()},d}var gs;function ry(){return gs||(gs=ny(null,{useWorker:!1,resize:!0})),gs}function ys(){return ry().apply(this,arguments)}var Ip={nologin:"\u672A\u767B\u5F55",loginForSafari:"\u767B\u5F55\u6216\u6CE8\u518C",login:"\u767B\u5F55\u540E\u53EF\u5F00\u901A\u4F1A\u5458",manageAccount:"\u7BA1\u7406\u8D26\u6237",openPremium:"\u5F00\u901A\u4F1A\u5458",logout:"\u9000\u51FA",curentPlan:"\u5F53\u524D\u5957\u9910",endAt:"\u5230\u671F",endAuto:"\u81EA\u52A8\u7EED\u671F",lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","noSupportTranslate-pdf":"\u811A\u672C\u4E0D\u652F\u6301\u8BF7\u4F7F\u7528\u63D2\u4EF6","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u5BFC\u5165PDF",enableLineBreak:"\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E\u683C\u5F0F\u4E3A (\u6CA1\u6709\u505A\u81EA\u52A8\u8BC6\u522B\uFF0C\u8BF7\u76F4\u63A5\u8F93\u5165)\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.shortBrandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1: \u53CC\u8BED\u5BF9\u7167\u7F51\u9875\u7FFB\u8BD1 & PDF\u6587\u6863\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u540C\u65F6\u652F\u6301 PDF \u7FFB\u8BD1\uFF0C\u53CC\u8BED Epub \u7535\u5B50\u4E66\u5236\u4F5C\uFF0C\u652F\u6301 Deepl/Google/\u6709\u9053/\u817E\u8BAF\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u514D\u8D39\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8BD1\u5E76\u9690\u85CF\u539F\u6587/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.shareToDraft":"\u5206\u4EAB\u53CC\u8BED\u9875\u9762","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.toggleTranslationMask":"\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6","browser.openEbookViewer":"\u9605\u8BFB\u672C\u5730\u7535\u5B50\u4E66","browser.openEbookBuilder":"\u5236\u4F5C\u53CC\u8BED EPUB \u7535\u5B50\u4E66","browser.translateLocalHtmlFile":"\u7FFB\u8BD1 HTML/txt \u6587\u4EF6","browser.donateContext":"\u4E86\u89E3\u8D5E\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8BD1\u672C\u5730\u5B57\u5E55\u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",isShowContextMenu:"\u5C06\u7FFB\u8BD1\u7F51\u9875\u52A0\u5165\u53F3\u952E\u83DC\u5355\u9879",toggleBeta:"\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",betaDescription:"\u542F\u7528\u4ECD\u5728\u5B9E\u9A8C\u6027\u7684\u529F\u80FD\uFF0C\u4EE5\u53CA\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u603B\u662F\u6362\u884C\u9002\u7528\u4E8E\u8F83\u5C11\u5185\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F50\u3002\uFF08\u5728\u5185\u5BB9\u8F83\u591A\u7684\u957F\u6BB5\u843D(\u8D85\u8FC7{count}\u4E2A\u5B57\u7B26) \u4F7F\u7528\u667A\u80FD\u6362\u884C\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1\uFF0C\u53EF\u8BBE\u7F6E\u4E34\u65F6\u65F6\u957F",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5219\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875(\u4EC5\u8BD1\u6587)/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",mouseHoldKey:"+ {key} \u7FFB\u8BD1/\u8FD8\u539F\u8BE5\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E(\u6253\u5F00\u8BBE\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8BD1/\u8FD8\u539F\u8BE5\u6BB5",mouseHoverHoldKey:"\u9F20\u6807\u60AC\u505C\u540C\u65F6\u6309\u4E0B\u5FEB\u6377\u952E\u7FFB\u8BD1\u6BB5\u843D","mouse-translate":"\u9F20\u6807\u60AC\u505C",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",resetThisSuccess:"\u91CD\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\u3002\u4EC5\u5BF9\u4E8E\u66F4\u4E13\u4E1A\u7684\u7528\u6237\uFF0C\u63D0\u4F9B\u66F4\u4E2A\u6027\u5316\u7684\u8BBE\u7F6E\u9879\u3002",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u4EF7\u683C","translate to the bottom of the page":"\u8FDB\u5165\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u8FDB\u5165\u7F51\u9875\u5C06\u7ACB\u5373\u7FFB\u8BD1\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\u3002\u5173\u95ED\u5219\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u6240\u6709\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\u3002\u5173\u95ED\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\uFF0C\u4EC5\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8BD1\u9875\u9762\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\uFF0C\u800C\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",moreOptions:"\u5C55\u5F00\u66F4\u591A\u81EA\u5B9A\u4E49\u9009\u9879",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",changeToOnlyTranslationMode:"\u5207\u6362\u4E3A\u4EC5\u663E\u793A\u8BD1\u6587",changeToDualTranslationMode:"\u5207\u6362\u4E3A\u53CC\u8BED\u7FFB\u8BD1",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",badUserscriptBrowser:"\u5F53\u524D\u6D4F\u89C8\u5668\u6CA1\u6709\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u6269\u5C55\u7684\u63A5\u53E3\uFF08\u6BD4\u5982\u83B7\u53D6\u6CB9\u7334\u811A\u672C\u81EA\u8EAB\u7684\u7248\u672C\u53F7\u4FE1\u606F\uFF09\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334\u6269\u5C55</1>\u7684\u6D4F\u89C8\u5668\u5982 Firefox",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",needActionForOptions:"(\u9700\u8BBE\u7F6E)",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u5F53\u524D\u7F51\u7AD9\uFF1A",autoEnableSubtitle:"\u81EA\u52A8\u5F00\u542F\u53CC\u8BED\u5B57\u5E55",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1 {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1 {language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",alwaysTranslateSomeSiteOrWildSite:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u7AD9",alwaysTranslateSomePage:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u9875",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA",import_export_title:"\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65",floatBallOptions:"\u60AC\u6D6E\u7403\u8BBE\u7F6E","floatBallOptions.enable":"\u542F\u7528\u60AC\u6D6E\u7403","floatBallOptions.blockUrls":"\u7981\u7528\u7F51\u7AD9","floatBallOptions.add":"\u6DFB\u52A0","floatBallOptions.blockUrlDesc":"\u5F53\u9047\u4E0B\u5217\u7F51\u7AD9\u65F6\u4E0D\u663E\u793A\u60AC\u6D6E\u7403","floatBallOptions.clickType":"\u70B9\u51FB\u884C\u4E3A","floatBallOptions.clickTypeDesc":"\u60AC\u6D6E\u7403\u56FE\u6807\u70B9\u51FB\u65F6\u7684\u884C\u4E3A","floatBallOptions.clickPopup":"\u663E\u793A\u7FFB\u8BD1\u9762\u677F","floatBallOptions.clickTranslate":"\u7FFB\u8BD1/\u663E\u793A\u539F\u6587",previewAllThemes:"\u9884\u89C8\u5168\u90E8\u6837\u5F0F","translationTheme.none":"\u65E0","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.solidBorder":"\u5B9E\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B66\u4E60\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.marker2":"\u9A6C\u514B\u7B142","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7EBF","translationServices.custom":"\u81EA\u5B9A\u4E49API","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.tenAlpha":"\u817E\u8BAF\u7FFB\u8BD1\u541B(Alpha)","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeepLX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.deepl":"DeepL","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"Azure \u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.cai":"\u5F69\u4E91\u5C0F\u8BD1 (Alpha)","translationServices.volcAlpha":"\u706B\u5C71 (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.you":"\u6709\u9053\u7FFB\u8BD1 (Alpha)","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.niu":"\u5C0F\u725B\u7FFB\u8BD1","translationServices.papago":"Papago \u7FFB\u8BD1","translationServices.d":"D (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u5C06\u8DF3\u8FC7\u7FFB\u8BD1",enableUserscriptPagePopup:"\u5728\u9875\u9762\u4E0A\u663E\u793A\u60AC\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u603B\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8BD1\u6587\u6837\u5F0F",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B",syncToCloud:"\u540C\u6B65\u5230 Google Drive",syncToCloudDescription:"\u4E0A\u4F20\u5230\u4E91\u7AEF\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",syncToAccount:"\u540C\u6B65\u5230\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u4E91\u7AEF",syncToAccountButton:"\u7ACB\u5373\u4E0E\u4E91\u7AEF\u540C\u6B65",syncToAccountDescription:"\u5728\u4E0D\u540C\u7684\u8BBE\u5907\u4E4B\u95F4\u81EA\u52A8\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",successSyncConfigInAccount:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",successSyncConfigToAccount:"\u6210\u529F\u540C\u6B65\u5230\u4E91\u7AEF",syncConfigNoUpdate:"\u5DF2\u7ECF\u662F\u6700\u65B0\u7684\u4E86",authFail:"\u6388\u6743\u5931\u8D25",syncTitle:"\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",import_hint:"\u5BFC\u5165",upload:"\u4E0A\u4F20",revokeAuth:"\u64A4\u9500\u6388\u6743",uploadFail:"\u4E0A\u4F20\u5931\u8D25",download:"\u4E0B\u8F7D",importSuccess:"\u5BFC\u5165\u6210\u529F",importFail:"\u5BFC\u5165\u5931\u8D25",deleteFail:"\u5220\u9664\u5931\u8D25",backupToCloud:"\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5907\u4EFD\u8282\u70B9",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",backupToCloudDescription:"\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",successSyncConfig:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u8D25",updatedAt:"\u66F4\u65B0\u4E8E {date}",lastSyncedAt:"\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",downloadFail:"\u4E0B\u8F7D\u5931\u8D25",clickToDownload:"\u70B9\u51FB\u4E0B\u8F7D",aboutLabel:"\u5173\u4E8E - \u53CD\u9988","browser.openAboutPage":"\u5173\u4E8E/\u53CD\u9988",aboutLabelWithoutSponsor:"\u5173\u4E8E - \u53CD\u9988",aboutIntro:"\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F \u4F60\u53EF\u9009\u62E9\u5F00\u901A <6>Pro\u4F1A\u5458</6> \u6765\u4F7F\u7528\u5F00\u7BB1\u5373\u7528\u7684 DeepL \u548C OpenAI \u7FFB\u8BD1\u3002 <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002<br/> <7>Pro \u4F1A\u5458</7> \u53EF\u4EE5\u901A\u8FC7\u5FEB\u901F\u5BA2\u670D\u90AE\u7BB1 <8>support@immersivetranslate.com</8> \u548C\u6211\u4EEC\u53D6\u5F97\u8054\u7CFB\u3002",aboutIntroWithoutSponsor:"\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F  <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002",projectHomepage:"\u9879\u76EE\u4E3B\u9875",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u4F17\u53F7",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u9891\u9053",joinTelegramChannel:"\u5173\u6CE8 Telegram \u9891\u9053\u83B7\u53D6\u6700\u65B0\u66F4\u65B0",feedbackAndJoin:"\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",autoSync:"\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",loadingThemeTitle:"Loading \u6837\u5F0F",loadingThemeDescription:"\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F","loadingTheme.spinner":"\u8F6C\u5708\u52A8\u753B","loadingTheme.text":"\u9759\u6001\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u663E\u793A",developerDescription:"\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863","edit border color":"\u4FEE\u6539\u8FB9\u6846\u989C\u8272",successSyncButNoChange:"\u5F53\u524D\u914D\u7F6E\u4E0E\u4E91\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u8FB9\u6846\u989C\u8272","customThemeLabel.borderRadius":"\u8FB9\u6846\u5706\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u989C\u8272","customThemeLabel.backgroundColor":"\u80CC\u666F\u989C\u8272","customThemeLabel.zoom":"\u5B57\u4F53\u7F29\u653E\u6BD4\u4F8B (%)","customThemeLabel.opacity":"\u6587\u5B57\u4E0D\u900F\u660E\u5EA6 (%)",resetToDefaultColor:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u989C\u8272",resetToDefaultSettings:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u8BBE\u7F6E",isTranslateTitle:"\u5F00\u542F\u7FFB\u8BD1\u7F51\u9875\u6807\u9898",isTranslateTitleDescription:"\u5F00\u542F\u540E\uFF0C\u7F51\u9875\u6807\u9898\u4F1A\u88AB\u7FFB\u8BD1",enableSearchEnhancement:"\u542F\u7528\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A",enableSearchEnhancementDescription:"\u5F00\u542F\u540E\uFF0C\u5728\u652F\u6301\u7684\u7F51\u7AD9\uFF08\u8C37\u6B4C\u65B0\u95FB\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u5173\u952E\u8BCD\uFF09\uFF0C\u96EA\u7403\uFF0C\u4E1C\u65B9\u8D22\u5BCC\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\u793E\u533A\uFF09\u53F3\u8FB9\u680F\u81EA\u52A8\u663E\u793A\u5BF9\u5E94\u82F1\u6587\u5173\u952E\u8BCD\u7684\u201C\u8C37\u6B4C\u65B0\u95FB\u201D\u641C\u7D22\u7ED3\u679C\u3002",verifyService:"\u70B9\u6B64\u6D4B\u8BD5\u670D\u52A1",verified:"\u9A8C\u8BC1\u6210\u529F","field.langs":"\u652F\u6301\u7684\u8BED\u8A00\u4EE3\u7801","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8BD1\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6570","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6570","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6587\u672C\u957F\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6BB5\u843D\u6570","field.apiUrl":"\u81EA\u5B9A\u4E49 API \u63A5\u53E3\u5730\u5740","field.placeholderDelimiters":"\u4FDD\u7559\u7684\u5360\u4F4D\u7B26","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>\u81EA\u5B9A\u4E49\u63A5\u53E3\u63A5\u5165</a> \u9700\u8981\u53C2\u8003\u6587\u6863","description.limitPerMinute":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u5206\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.generalLimitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002","description.prompt":"\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI","description.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u5B57\u7B26\u6570\uFF0C\u592A\u5927\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C1D\u8BD5\u8C03\u6574\u8BE5\u9009\u9879\u6765\u4F18\u5316\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7EDF\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00","field.domain":"\u9886\u57DF","description.domain":"\u9ED8\u8BA4\u4E3A\uFF1Ageneral\u3002\u4EC5\u5728\u6709\u9053API\u63A7\u5236\u53F0\u5F00\u901A\u9886\u57DF\u5316\u7FFB\u8BD1\u7684\u60C5\u51B5\u4E0B\u53EF\u8BBE\u7F6E\uFF0C\u652F\u6301\u9886\u57DF\u89C1<1>\u8FD9\u91CC</1>","field.scene":"\u573A\u666F","description.scene":"\u9ED8\u8BA4\u4E3A\uFF1Ageneral\u3002\u4EC5\u5728\u963F\u91CC\u4E91API\u63A7\u5236\u53F0\u5F00\u901A\u673A\u5668\u7FFB\u8BD1\u4E13\u4E1A\u7248\u7684\u60C5\u51B5\u4E0B\u53EF\u8BBE\u7F6E\uFF0C\u652F\u6301\u573A\u666F\u89C1<1>\u8FD9\u91CC</1>","field.vocabId":"\u7528\u6237\u8BCD\u5178 ID","description.vocabId":"\u6307\u5B9A\u7684\u8BCD\u5178 out_id\uFF0C\u76EE\u524D\u652F\u6301\u82F1\u8BD1\u4E2D","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u4E3A gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u53D1\u9001\u7ED9\u7FFB\u8BD1\u670D\u52A1\u7684\u6BB5\u843D\u6570\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6570\u91CF\u8FC7\u591A\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162","description.apiUrl":"\u8BF7\u6DFB\u52A0\u5177\u4F53\u5E26\u6709\u8DEF\u5F84\u7684\u7F51\u5740\uFF0C<1>\u66F4\u591A\u8BF4\u660E</1>",enabledExtension:"\u542F\u7528\u6269\u5C55",clickToDisableExtension:"\u70B9\u51FB\u7981\u7528\u6269\u5C55",clickToEnableExtension:"\u70B9\u51FB\u542F\u7528\u6269\u5C55",hasBeenDisabled:"\u5DF2\u7981\u7528","show password":"\u663E\u793A\u5BC6\u7801",customContent:"\u8F93\u5165\u81EA\u5B9A\u4E49\u6A21\u578B\u540D\u79F0",inputOptions:"\u8F93\u5165\u6846\u589E\u5F3A",mouseHoverOptions:"\u9F20\u6807\u60AC\u505C",modifyMouseHoverKey:"\u4FEE\u6539\u9F20\u6807\u60AC\u505C\u5FEB\u6377\u952E",enableInputTranslation:"\u662F\u5426\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",enableInputTranslationDescription:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165 {startingKey}{startingKey} \u4F60\u597D\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165\uFF1A\u4F60\u597D\u4E16\u754C\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguage:"\u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguageDescription:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00\uFF0C\u4E5F\u5C31\u662F {startingKey}{startingKey} \u4F5C\u4E3A\u89E6\u53D1\u8BCD\u7684\u9ED8\u8BA4\u8BED\u8A00",inputTargetLanguageDescriptionForNoneKey:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputStartingTriggerKeyTitle:"\u8BBE\u7F6E\u8F93\u5165\u6846\u90E8\u5206\u7FFB\u8BD1\u7684\u5206\u5272\u5B57\u7B26",inputStartingTriggerKeyDescription:"\u5F53\u4F60\u4E0D\u9700\u8981\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u7684\u65F6\u5019\uFF0C\u5206\u5272\u7B26\u5141\u8BB8\u4F60\u53EA\u7FFB\u8BD1 {startingKey}{startingKey} \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8BED\u8A00\u4EE3\u7801\uFF0C\u6BD4\u5982\uFF1A{startingKey}ja \u8868\u793A\u53EA\u7FFB\u8BD1 {startingKey}ja \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206",inputStartingTriggerKeyDescriptionForNoneKey:"\u5F53\u524D\u8BBE\u7F6E\u4E3A\u65E0\u9700\u524D\u7F00\uFF0C\u6682\u65E0\u6CD5\u4F7F\u7528\u8F93\u5165\u6846\u7684\u90E8\u5206\u6587\u672C\u7FFB\u8BD1\u529F\u80FD",inputTrailingTriggerKeyTitle:"\u9009\u62E9\u4E00\u4E2A\u8F93\u5165\u7ED3\u675F\u7684\u89E6\u53D1\u5B57\u7B26",inputTrailingTriggerKeyDescription:"\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey} \u5C06\u4F1A\u5F00\u59CB\u7FFB\u8BD1",inputTrailingTriggerKeyTimeout:"\u8F93\u5165\u7ED3\u675F\u8FDE\u51FB\u89E6\u53D1\u7684\u95F4\u9694\u65F6\u95F4",inputTrailingTriggerKeyTimeoutDescription:"\u8BBE\u7F6E\u8F93\u5165\u7ED3\u675F\u8FDE\u51FB\u89E6\u53D1\u7684\u95F4\u9694\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09",spaceKey:"<\u7A7A\u683C\u952E>",noneKey:"\u65E0\u9700\u524D\u7F00\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u6587\u672C\u6846",inputTranslationBlockUrlsTitle:"\u5207\u52FF\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",inputTranslationBlockUrlsDescription:"\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\uFF0C\u8F93\u5165\u6846\u589E\u5F3A\u5C06\u4E0D\u4F1A\u751F\u6548",clickToSeeQuickDemo:"\u70B9\u51FB\u5C55\u5F00 30 \u79D2\u5FEB\u901F\u6559\u5B66\u89C6\u9891",inputHelperInfo:"\u8BF4\u660E\uFF1A\u6211\u4EEC\u7279\u522B\u9488\u5BF9\u5728\u4E2D\u6587\u8F93\u5165\u6CD5\u4E0B\u90E8\u5206\u89E6\u53D1\u5B57\u7B26\u4F1A\u53D8\u6210\u4E2D\u6587\u6807\u70B9\u7B26\u53F7\u8FD9\u4EF6\u4E8B\u505A\u4E86\u4F18\u5316\uFF0C\u6BD4\u5982\u641C\u72D7\u8F93\u5165\u6CD5\u4E0B / \u4F1A\u53D8\u6210\u987F\u53F7 \u3001\uFF0C\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u652F\u6301\u6240\u6709\u89E6\u53D1\u7B26\u5BF9\u5E94\u7684\u4E2D\u6587\u7B26\u53F7\uFF0C\u4E5F\u5C31\u662F\u8BF4 // \u3001\u3001 \u90FD\u4F1A\u88AB\u8BC6\u522B\u4E3A\u89E6\u53D1\u5B57\u7B26\u3002<br/><br/>\u540C\u65F6\u6211\u4EEC\u4E5F\u652F\u6301\u8BED\u8A00\u4EE3\u7801\u7684\u4E2D\u6587\u522B\u540D\u4F5C\u4E3A\u547D\u4EE4\uFF0C\u6BD4\u5982 /\u65E5\u6587 \u4F60\u597D\u4E16\u754C \u4F1A\u88AB\u7FFB\u8BD1\u4E3A\u65E5\u6587\uFF0C<1>\u70B9\u6B64\u67E5\u770B\u6240\u6709\u652F\u6301\u7684\u8BED\u8A00\u4EE3\u7801</1>\u3002",reloadCurrentPage:"\u8BF7\u5148\u5237\u65B0\u5F53\u524D\u9875\u9762\uFF0C\u518D\u5F00\u59CB\u7FFB\u8BD1",noLocalFilePermissionForPDF:"\u6682\u65E0\u6743\u9650\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u8BF7\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\uFF0C\u7136\u540E\u5BFC\u5165\u672C\u5730\u6587\u4EF6",noPermissionForThisPage:"\u26A0\uFE0F \u6682\u65E0\u6743\u9650\u7FFB\u8BD1\u5F53\u524D\u9875\u9762",retryAllParagraphs:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",retryAllButton:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",errorTooltipTitle:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u539F\u56E0",errorModalTitle:"\u7FFB\u8BD1\u670D\u52A1\u6216\u7F51\u7EDC\u4F3C\u4E4E\u51FA\u4E86\u70B9\u95EE\u9898...",disableConfirm:"\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A\u8BBE\u7F6E",disableOnce:"\u672C\u6B21\u7981\u7528",disableGlobal:"\u6C38\u4E45\u7981\u7528",disableTint:"* \u4F60\u53EF\u4EE5\u5728 {option} \u4E2D\u91CD\u65B0\u542F\u7528\u3002",searchEnhancementNotes:"\u6211\u4EEC\u53D1\u73B0\uFF0C\u4E2D\u6587\u5173\u952E\u8BCD\u548C\u82F1\u6587\u5173\u952E\u8BCD\u7684\u65B0\u95FB\u7ED3\u679C\u6709\u975E\u5E38\u5927\u7684\u4E0D\u540C\uFF0C\u5728\u542F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A\u529F\u80FD\u540E\uFF0C\u6211\u4EEC\u4F1A\u5728\u652F\u6301\u7684\u7F51\u7AD9\uFF08\u8C37\u6B4C\u65B0\u95FB\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u5173\u952E\u8BCD\uFF09\uFF0C\u96EA\u7403\uFF0C\u4E1C\u65B9\u8D22\u5BCC\u7F51\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\uFF09\u81EA\u52A8\u7528\u82F1\u6587\u4E3A\u4F60\u641C\u7D22\u540C\u6837\u7684\u5173\u952E\u8BCD\u5E76\u5C55\u793A\u5728\u53F3\u4FA7\u3002\u5982\u679C\u4F60\u4E0D\u9700\u8981\u8BE5\u529F\u80FD\u7684\u8BDD\uFF0C\u53EF\u4EE5\u9009\u62E9\u7981\u7528\u5B83\u3002",option:"\u8BBE\u7F6E",saveSettings:"\u4FDD\u5B58\u8BBE\u7F6E",closeModal:"\u5173\u95ED\u7A97\u53E3",enableInputTranslationWithoutTriggerKeyTitle:"\u542F\u7528\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey}\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u4E3A{inputTargetLanguage}",enableInputTranslationWithoutTriggerKeyDescription:"\u5982\u9700\u6307\u5B9A\u76EE\u6807\u8BED\u8A00\uFF0C\u8BF7\u5728\u524D\u9762\u52A0\u4E0A\u8BED\u8A00\u4EE3\u7801\uFF0C\u5982\uFF1Aja \u4F60\u597D\u4E16\u754C",mouseHoverShortcutPlaceholder:"\u5982\uFF1AShift",deepLProName:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1 Pro \u4F1A\u5458 (\u63A8\u8350)",deepLProDescription:"\u5F53\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",deeplProDescriptionForNormal:"\u65E0\u9700\u4EFB\u4F55\u8BBE\u7F6E\uFF0C\u4F1A\u5458\u767B\u5F55\u540E\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u4F1A\u5458</1>",deepLCustomDescription:"\u9700\u8981\u56FD\u5916\u4FE1\u7528\u5361\uFF0C\u5728 <1>DeepL</1> \u5B98\u65B9\u5F00\u901A\uFF0C\u70B9\u51FB\u67E5\u770B<2>\u6587\u6863</2>",deepLCustomName:"\u81EA\u5B9A\u4E49 Auth Key",chooseProviderLabel:"\u9009\u62E9\u4E00\u4E2A\u670D\u52A1\u63D0\u4F9B\u5546",openaiProName:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1 Pro \u4F1A\u5458 (\u63A8\u8350)",openaiProDescription:"\u5F53\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",openaiProDescriptionForNormal:"\u65E0\u9700\u4EFB\u4F55\u8BBE\u7F6E\uFF0C\u4F1A\u5458\u767B\u5F55\u540E\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u4F1A\u5458</1>",openaiCustomDescription:"\u53EF\u5728 OpenAI, Azure OpenAI, \u6216\u5176\u4ED6\u7B2C\u4E09\u65B9\u670D\u52A1\u83B7\u53D6\uFF0C<1>\u70B9\u6B64\u67E5\u770B\u6587\u6863</1>",openaiCustomName:"\u81EA\u5B9A\u4E49 API Key",needLoginAction:"(\u5F00\u901A\u4F1A\u5458\u6216\u81EA\u5B9A\u4E49)",goLoginOrAction:"(\u5F00\u901A\u4F1A\u5458\u6216\u53BB\u8BBE\u7F6E)",yearly:"\u8FDE\u7EED\u5305\u5E74",quarterly:"\u8FDE\u7EED\u5305\u5B63",monthly:"\u8FDE\u7EED\u5305\u6708",yearlyForOnce:"\u4E00\u6B21\u6027\u5E74\u5EA6\u5957\u9910",monthlyForOnce:"\u4E00\u6B21\u6027\u6708\u5EA6\u5957\u9910",daily:"\u8FDE\u7EED\u5305\u65E5",year:"\u8FDE\u7EED\u5305\u5E74",quarter:"\u8FDE\u7EED\u5305\u5B63",month:"\u8FDE\u7EED\u5305\u6708",day:"\u8FDE\u7EED\u5305\u65E5",onetime_7day:"7 \u5929\u4F53\u9A8C\u5305",currentPlanDescriptionForFree:"\u5F53\u524D\u5957\u9910\uFF1A\u514D\u8D39",currentPlanDescriptionForContinuous:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u81EA\u52A8\u7EED\u8D39",currentPlanDescriptionForAutoRenewCaceling:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F",currentYearlyPlanDescriptionForAutoRenewCacelingWithRealPaiedUser:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F\u3002<br/><1>\u70B9\u6B64\u7BA1\u7406\u7EED\u8D39\u65B9\u6848</1>",currentYearlyPlanDescriptionForAutoRenewCacelingWithAdmin:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F\u3002<br/><1>\u70B9\u6B64\u542F\u7528\u8FDE\u7EED\u5305\u5E74</1>",currentPlanDescriptionForOneTime:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u5E74\u8D39</1>\u6216<2>\u6708\u8D39</2>\u4F1A\u5458",upgradePlan:"\u70B9\u6B64\u5347\u7EA7\u4E3A Pro \u4F1A\u5458",upgradeToPro:"\u5347\u7EA7\u4E3A Pro \u4F1A\u5458","popup.openPro":"\u5347\u7EA7\u4E3A Pro \u4F1A\u5458\u540E\u53EF\u4EE5\u7545\u4EAB DeepL \u548C OpenAI \u7FFB\u8BD1\uFF0C\u70B9\u6B64\u5347\u7EA7","popup.openProForPro":"\u60A8\u662F Pro \u4F1A\u5458\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528 DeepL \u548C OpenAI \u7FFB\u8BD1",currentAccount:"\u5F53\u524D\u8D26\u6237",enableAutoSyncUserSettings:"\u542F\u7528\u591A\u8BBE\u5907\u81EA\u52A8\u4E91\u540C\u6B65",modalEnableInputTranslationTitle:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u8F93\u5165\u6846\u7FFB\u8BD1\u63D0\u793A",modalEnableInputTranslationDesc:"\u60A8\u521A\u521A\u901A\u8FC7\u5FEB\u901F\u8FDE\u51FB 3 \u6B21\u7A7A\u683C\u952E\u89E6\u53D1\u4E86\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u7684\u8F93\u5165\u6846\u7FFB\u8BD1\uFF0C\u8F93\u5165\u6846\u7684\u5185\u5BB9\u5C06\u88AB\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u7684\u76EE\u6807\u8BED\u8A00\u3002\u901A\u8FC7 Ctrl+Z \u53EF\u4EE5\u64A4\u9500\u7FFB\u8BD1\u3002<br /><br />\u5982\u679C\u8FD9\u662F\u4E00\u4E2A\u5931\u8BEF\uFF0C\u4E0D\u7528\u62C5\u5FC3\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u672C\u6B21\u7981\u7528\uFF0C\u6216\u8005\u6C38\u4E45\u7981\u7528\u8F93\u5165\u6846\u7FFB\u8BD1\u3002",saveAndNotShowAgain:"\u4FDD\u5B58\u4E14\u4E0D\u518D\u63D0\u793A",disableInputTranslationTips:"* \u4F60\u4E5F\u53EF\u4EE5\u5728 {option} \u4E2D\u8BBE\u7F6E\u5176\u4ED6\u5FEB\u6377\u952E\u6765\u89E6\u53D1\uFF0C{learnMore}\u3002",learnMore:"\u70B9\u6B64\u4E86\u89E3\u66F4\u591A",continueEnalbeInputTranslation:"\u7EE7\u7EED\u542F\u7528\u8F93\u5165\u6846\u7FFB\u8BD1",autoRenewTrialSuffix:'\uFF08\u8BD5\u7528\u4E2D\uFF0C<a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">\u7ACB\u523B\u5347\u7EA7\u4E3A\u6B63\u5F0F\u4F1A\u5458</a>\uFF09',upgradeFromTrialTitle:"\u5347\u7EA7\u4E3A\u6B63\u5F0F\u4F1A\u5458",subtitle:"\u89C6\u9891\u5B57\u5E55",youtubeService:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u89C6\u9891\u5B57\u5E55\u7FFB\u8BD1\u670D\u52A1","subtitle.disabledSubtitle":"\u6C38\u4E45\u7981\u7528\u89C6\u9891\u5B57\u5E55\u529F\u80FD","subtitle.disabledSubtitleDescription":"\u5982\u679C\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u7684\u89C6\u9891\u5B57\u5E55\u548C\u5176\u4ED6\u6269\u5C55\u6709\u51B2\u7A81\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u6C38\u4E45\u7981\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u7684\u89C6\u9891\u5B57\u5E55\u529F\u80FD\u6216\u8005\u5378\u8F7D\u5176\u4ED6\u51B2\u7A81\u7684\u6269\u5C55","subtitle.autoEnableSubtitle":"\u81EA\u52A8\u4F7F\u7528\u53CC\u8BED\u5B57\u5E55","subtitle.autoEnableSubtitleDescription":"\u5F53\u524D\u4EC5\u652F\u6301 Youtube \u7F51\u7AD9\uFF0C\u542F\u7528\u540E\uFF0C\u5F53\u89C6\u9891\u64AD\u653E\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u663E\u793A\u53CC\u8BED\u5B57\u5E55\uFF0C\u5426\u5219\u9700\u8981\u70B9\u51FB\u7FFB\u8BD1\u6309\u94AE\u624D\u4F1A\u663E\u793A\u3002","subtitle.preTranslation":"\u4F7F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u6765\u7FFB\u8BD1\u5B57\u5E55","subtitle.preTranslationDescription":"\u542F\u7528\u540E\u4F1A\u4F18\u5148\u7528\u4E0B\u9762\u7684\u6307\u5B9A\u7684\u7FFB\u8BD1\u670D\u52A1\u63D0\u524D\u7FFB\u8BD1\u6574\u4E2A\u5B57\u5E55\uFF0C1 \u5C0F\u65F6\u7684\u89C6\u9891\u5927\u6982\u6D88\u8017 5\u4E07 Tokens \u6216 \u5B57\u7B26\uFF0C\u8BF7\u914C\u60C5\u4F7F\u7528\uFF1B\u5173\u95ED\u540E\u5219\u4F18\u5148\u4F7F\u7528\u539F\u89C6\u9891\u81EA\u5E26\u7684\u673A\u7FFB\u5B57\u5E55","subtitle.humanSubtitlesPreferred":"\u4F18\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55","subtitle.humanSubtitlesPreferredDescription":"\u5F53\u89C6\u9891\u6709\u76EE\u6807\u8BED\u8A00\u4EBA\u5DE5\u5B57\u5E55\u65F6\uFF0C\u4F18\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55\uFF08\u63A8\u8350\uFF09",videoSubtitleTranslationDescription:"\u4E3A\u89C6\u9891\u5B57\u5E55\u5355\u72EC\u6307\u5B9A\u4E00\u4E2A\u7FFB\u8BD1\u670D\u52A1",subtitleTranslating:"\u6B63\u5728\u4F7F\u7528 {service} \u670D\u52A1\u7FFB\u8BD1\u5B57\u5E55\u4E2D\uFF0C\u8BF7\u7A0D\u7B49...\uFF08\u6C89\u6D78\u5F0F\u7FFB\u8BD1\uFF09",subtitleLoading:"\u6B63\u5728\u52A0\u8F7D\u5B57\u5E55...",bilingual:"\u53CC\u8BED","field.action":"\u662F\u5426\u542F\u7528\u767E\u5EA6\u672F\u8BED","description.action":"\u542F\u7528\u540E\u4F1A\u5728\u8BF7\u6C42\u4E2D\u52A0\u5165 action=1 \u7684\u53C2\u6570\uFF0C\u4EE5\u4FBF\u544A\u77E5\u767E\u5EA6\u542F\u7528\u672F\u8BED\uFF0C<1>\u66F4\u591A\u8BF4\u660E\u8BF7\u53C2\u8003\u5B98\u65B9\u6587\u6863</1>",closeQuickTranslation:"\u5173\u95ED\u60AC\u6D6E\u7403","closeQuickTranslation.untilNext":"\u672C\u6B21\u5173\u95ED\u76F4\u5230\u4E0B\u6B21\u8BBF\u95EE","closeQuickTranslation.currentWebsite":"\u5F53\u524D\u7F51\u7AD9\u7981\u7528","closeQuickTranslation.alwaysClose":"\u6C38\u4E45\u7981\u7528","closeQuickTranslation.settingOpen":"\uFF08\u53EF\u5728<1>\u8BBE\u7F6E\u9875</1>\u5F00\u542F\uFF09","closeQuickTranslation.cancel":"\u53D6\u6D88","closeQuickTranslation.confirm":"\u786E\u5B9A","floatBall.popup":"\u6253\u5F00\u5FEB\u6377\u8BBE\u7F6E\u9762\u677F","floatBall.translate":"\u70B9\u51FB\u7FFB\u8BD1\u8BE5\u9875\u9762","floatBall.showOriginal":"\u70B9\u51FB\u5207\u6362\u56DE\u539F\u6587","floatBall.close":"\u5173\u95ED\u60AC\u6D6E\u7403","floatBallOptions.enableDescPc":"\u542F\u7528\u9875\u9762\u60AC\u6D6E\u7403\u540E\uFF0C\u4F1A\u5728\u9875\u9762\u53F3\u4FA7\u663E\u793A\u4E00\u4E2A\u5FEB\u6377\u7FFB\u8BD1\u6309\u94AE\uFF0C\u70B9\u51FB\u5373\u53EF\u7FFB\u8BD1","floatBallOptions.enableDesc":"\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","description.azureApiUrl":"\u586B\u5199\u81EA\u5B9A\u4E49\u7684API\u63A5\u53E3\u5730\u5740",shareBtnTitle:"\u70B9\u51FB\u5206\u4EAB\u8BE5\u53CC\u8BED\u9875\u9762\u7ED9\u670B\u53CB","floatBall.share":"\u5206\u4EAB\u9875\u9762",confirmSupportMouse:"\u5F3A\u5236\u542F\u7528\u9F20\u6807\u652F\u6301",confirmSupportMouseDescription:"\u68C0\u6D4B\u5230\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u9F20\u6807\u529F\u80FD\uFF0C\u662F\u5426\u5F3A\u5236\u542F\u7528\u9F20\u6807\u652F\u6301\uFF1F"};var Fp={nologin:"\u672A\u767B\u9304",login:"\u767B\u9304",manageAccount:"\u7BA1\u7406\u8CEC\u6236",logout:"\u9000\u51FA",curentPlan:"\u7576\u524D\u5957\u9910",endAt:"\u5230\u671F",endAuto:"\u81EA\u52D5\u7E8C\u671F",lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u5143\u6578\u91CF","translate-pdf":"\u9EDE\u9078\u7FFB\u8B6F PDF","noSupportTranslate-pdf":"\u8173\u672C\u4E0D\u652F\u63F4\uFF0C\u8ACB\u4F7F\u7528\u64F4\u5145\u5957\u4EF6","translate-firefox-local-pdf":"\u9EDE\u64CA\u53BB\u5C0E\u5165PDF",enableLineBreak:"\u958B\u555F\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D0A\u52A9\u958B\u767C\u8005 (\u6708\u4ED8\u6216\u50C5\u8D0A\u52A9\u4E00\u6B21\u5747\u53EF)",help:"\u8AAA\u660E",browserShortcutsNoteForFirefox:"Firefox \u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u9644\u52A0\u5143\u4EF6\u7BA1\u7406\u9801\u9762 \u300Cabout:addons\u300D\uFF0C\u7136\u5F8C\u9EDE\u9078\u300C\u8A2D\u5B9A\u5716\u793A\u300D\uFF0C\u518D\u9EDE\u9078\u300C\u7BA1\u7406\u64F4\u5145\u5957\u4EF6\u5FEB\u901F\u9375\u300D\u5373\u53EF\u8A2D\u5B9A",browserShortcutsNoteForChrome:"Chromium \u6838\u5FC3\u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u64F4\u5145\u529F\u80FD\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u300C\u9375\u76E4\u5FEB\u901F\u9375\u300D\u9801\u9762(chrome://extensions/shortcuts)\u8A2D\u5B9A\uFF0C\u9EDE\u9078\u4E0B\u65B9\u6309\u9215\u524D\u5F80\u5FEB\u901F\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u901F\u9375\u683C\u5F0F\u70BA\uFF1A (\u6CA1\u6709\u505A\u81EA\u52A8\u8BC6\u522B\uFF0C\u8BF7\u76F4\u63A5\u8F93\u5165)\uFF1A",enableLineBreakDescription:"\u555F\u7528\u5F8C\uFF0C\u5C07\u6703\u5728\u9577\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u5B57\u5143\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.shortBrandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F: \u96D9\u8A9E\u5C0D\u7167\u7DB2\u9801\u7FFB\u8B6F & PDF\u6587\u6A94\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u540C\u6642\u652F\u6301 PDF \u7FFB\u8B6F\uFF0C\u96D9\u8A9E Epub \u96FB\u5B50\u66F8\u88FD\u4F5C\uFF0C\u652F\u6301 Deepl/Google/\u6709\u9053/\u9A30\u8A0A\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u514D\u8CBB\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8B6F\u4E26\u96B1\u85CF\u539F\u6587/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.shareToDraft":"\u5206\u4EAB\u96D9\u8A9E\u9801\u9762","browser.openOptionsPage":"\u958B\u555F\u8A2D\u5B9A\u9801\u9762","browser.toggleTranslationMask":"\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u6A5F PDF \u6A94\u6848","browser.openEbookViewer":"\u95B1\u8B80\u672C\u6A5F\u96FB\u5B50\u66F8","browser.openEbookBuilder":"\u88FD\u4F5C\u96D9\u8A9E EPUB \u96FB\u5B50\u66F8","browser.translateLocalHtmlFile":"\u7FFB\u8B6F HTML/txt \u6A94\u6848","browser.donateContext":"\u4E86\u89E3\u8D0A\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8B6F\u5B57\u5E55\u6A94\u6848",confirmResetConfig:"\u4F60\u78BA\u5B9A\u8981\u91CD\u8A2D\u8A2D\u5B9A\u55CE\uFF1F",translationLineBreakSettingTitle:"\u8B6F\u6587\u63DB\u884C\u8A2D\u5B9A",smartLineBreak:"\u667A\u6167\u63DB\u884C",alwaysLineBreak:"\u7E3D\u662F\u63DB\u884C",isShowContextMenu:"\u5C07\u7DB2\u9801\u7FFB\u8B6F\u529F\u80FD\u52A0\u5165\u53F3\u9375\u9078\u55AE",toggleBeta:"\u958B\u555F Beta \u6E2C\u8A66\u529F\u80FD",betaDescription:"\u555F\u7528\u4ECD\u5728\u5BE6\u9A57\u7684\u529F\u80FD\u4EE5\u53CA\u6E2C\u8A66\u4E2D\u7684\u7FFB\u8B6F\u670D\u52D9\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7D44</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u7E3D\u662F\u63DB\u884C\u9069\u7528\u65BC\u8F03\u5C11\u5167\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F4A\u3002(\u5728\u5167\u5BB9\u8F03\u591A\u7684\u9577\u6BB5\u843D(\u8D85\u904E {count} \u500B\u5B57\u5143) \u4F7F\u7528\u667A\u6167\u63DB\u884C\u6703\u66F4\u7701\u7A7A\u9593)",tempTranslateDomainTitle:"\u81E8\u6642\u958B\u555F\u7DB2\u7AD9\u7FFB\u8B6F\u7684\u6642\u9577",tempTranslateDomainDescription:"\u7576\u624B\u52D5\u7FFB\u8B6F\u67D0\u500B\u7DB2\u9801\u7684\u6642\u5019\uFF0C\u81E8\u6642\u958B\u555F\u8A72\u7DB2\u7AD9\u70BA\u81EA\u52D5\u7FFB\u8B6F",xMinutes:"{count} \u5206\u9418",disabled:"\u505C\u7528",changelog:"\u66F4\u65B0\u8A18\u9304",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u5247\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u6642\u89F8\u78B0\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801(\u50C5\u8B6F\u6587)/\u986F\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u70BA\u7DB2\u57DF\u540D\u7A31\uFF0C\u540C\u6642\u652F\u63F4\u842C\u7528\u5B57\u5143\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u5B9A",clickToExpandConfig:"\u5C55\u958B\u76EE\u524D\u8A2D\u5B9A",import:"\u5F9E\u6A94\u6848\u532F\u5165",export:"\u532F\u51FA\u70BA\u6A94\u6848",toggleDebug:"\u5728\u4E3B\u63A7\u53F0\u986F\u793A\u5075\u932F\u8A18\u9304","fingers.0":"\u95DC\u9589","fingers.2":"\u96D9\u6307\u89F8\u6478","fingers.3":"\u4E09\u6307\u89F8\u6478","fingers.4":"\u56DB\u6307\u89F8\u6478","fingers.5":"\u4E94\u6307\u89F8\u6478",mouseHoldKey:"+ {key} \u7FFB\u8B6F/\u9084\u539F\u8A72\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u7FA9\u5FEB\u6377\u9375(\u6253\u958B\u8A2D\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8B6F/\u9084\u539F\u8A72\u6BB5",mouseHoverHoldKey:"\u9F20\u6A19\u6ED1\u904E\u540C\u6642\u6309\u4E0B X \u9375\u7FFB\u8B6F\u6BB5\u843D","mouse-translate":"\u9F20\u6A19\u6ED1\u904E",document:"\u8AAA\u660E\u6587\u4EF6",resetSuccess:"\u91CD\u8A2D\u6240\u6709\u8A2D\u5B9A\u6210\u529F",resetThisSuccess:"\u91CD\u8A2D\u6210\u529F",saved:"\u5132\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u532F\u5165\u8A2D\u5B9A",goAdvancedSettings:"\u524D\u5F80\u9032\u968E\u8A2D\u5B9A\u9801\u9762",goAdvancedInterfaceSettings:"\u524D\u5F80\u81EA\u8A02\u8A2D\u5B9A\u9801\u9762",advanced:"\u9032\u968E\u8A2D\u5B9A",advancedDescription:"\u6B63\u5E38\u60C5\u6CC1\u7121\u9700\u8A2D\u5B9A\uFF0C\u4FDD\u6301\u9810\u8A2D\u5373\u53EF\u3002\u50C5\u91DD\u5C0D\u66F4\u5C08\u696D\u7684\u4F7F\u7528\u8005\uFF0C\u63D0\u4F9B\u66F4\u500B\u4EBA\u5316\u7684\u8A2D\u5B9A\u9805\u76EE\u3002",developer:"\u958B\u767C\u8005\u8A2D\u5B9A",donateCafe:"\u50F9\u683C","translate to the bottom of the page":"\u9032\u5165\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u56DE\u5831",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u555F\u7528\u5F8C\uFF0C\u9032\u5165\u7DB2\u9801\u5C07\u7ACB\u5373\u7FFB\u8B6F\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\u3002\u95DC\u9589\u5247\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u555F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6240\u6709\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\u3002\u95DC\u9589\u5247\u4F7F\u7528\u9810\u8A2D\u7684\u667A\u6167\u8FA8\u8B58\uFF0C\u50C5\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\u3002(\u4E0D\u63A8\u85A6\u958B\u555F)","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8B6F\u9801\u9762\u524D\u591A\u5C11\u500B\u5B57\u5143\uFF0C\u800C\u7121\u9700\u7B49\u5F85\u6372\u52D5\u81F3\u53EF\u898B\u5340\u57DF","interface language":"\u4ECB\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u901F\u9375",modify:"\u8B8A\u66F4\u5FEB\u901F\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u9996\u9801",more:"\u66F4\u591A",moreOptions:"\u5C55\u958B\u66F4\u591A\u81EA\u8A02\u9078\u9805",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u6240\u6709\u5340\u57DF",changeToTranslateTheMainPage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",changeToOnlyTranslationMode:"\u5207\u63DB\u70BA\u50C5\u986F\u793A\u8B6F\u6587",changeToDualTranslationMode:"\u5207\u63DB\u70BA\u96D9\u8A9E\u7FFB\u8B6F",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u6167\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u6A5F\u898F\u5247\u5DF2\u70BA\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u5B98\u65B9\u898F\u5247",localVersionIsTooOld:"\u672C\u6A5F\u5957\u4EF6\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u5957\u4EF6\u81F3 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5617\u8A66\u540C\u6B65",badUserscriptBrowser:"\u76EE\u524D\u700F\u89BD\u5668\u7121\u6CD5\u6B63\u78BA\u5BE6\u73FE\u6CB9\u7334\u5957\u4EF6\u7684\u4ECB\u9762\uFF0C\u8ACB\u4F7F\u7528\u5176\u4ED6<1>\u652F\u63F4\u6CB9\u7334\u5957\u4EF6</1>\u7684\u700F\u89BD\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u6709\u65B0\u7248\u672C\u53EF\u7528",theLocalExtensionIsUpToUpdate:"\u76EE\u524D\u5957\u4EF6\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u91CD\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u76EE\u524D\u898F\u5247\u7248\u672C",calculating:"\u6B63\u5728\u8A08\u7B97",unknownError:"\u672A\u77E5\u7684\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u53D6\u5F97\u9060\u7AEF\u898F\u5247",enableAlphaSuccess:"\u5DF2\u555F\u7528 Alpha \u529F\u80FD",disableAlphaSuccess:"\u5DF2\u505C\u7528 Alpha \u529F\u80FD",cacheSize:"\u5FEB\u53D6\u5927\u5C0F\uFF1A",cleaning:"\u6B63\u5728\u6E05\u7406",cleanCache:"\u6E05\u9664\u5FEB\u53D6",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"(\u524D\u5F80\u8A2D\u5B9A)",goSettings:"\u524D\u5F80\u8A2D\u5B9A",needActionForOptions:"(\u9700\u8A2D\u5B9A)",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u7576\u524D\u7DB2\u7AD9\uFF1A",autoEnableSubtitle:"\u81EA\u52D5\u958B\u555F\u96D9\u8A9E\u5B57\u5E55",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F {language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",alwaysTranslateSomeSiteOrWildSite:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u7AD9",alwaysTranslateSomePage:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u9875",add:"\u65B0\u589E",default:"\u9810\u8A2D",forThisLanguage:"\u91DD\u5C0D\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165 URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u5B83\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u5B9A\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4F60\u60F3\u7528\u7684\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u6B63\u5728\u7FFB\u8B6F",Error:"\u932F\u8AA4",allowCacheTranslations:"\u555F\u7528\u672C\u6A5F\u7FFB\u8B6F\u5FEB\u53D6\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8981\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u7BC4\u4F8B",interface:"\u4ECB\u9762\u8A2D\u5B9A",import_export:"\u532F\u5165/\u532F\u51FA",import_export_title:"\u532F\u5165/\u532F\u51FA\u8A2D\u5B9A",floatBallOptions:"\u61F8\u6D6E\u7403\u8A2D\u7F6E","floatBallOptions.enable":"\u555F\u7528\u61F8\u6D6E\u7403","floatBallOptions.blockUrls":"\u7981\u7528\u7DB2\u7AD9","floatBallOptions.add":"\u6DFB\u52A0","floatBallOptions.blockUrlDesc":"\u7576\u9047\u5230\u4EE5\u4E0B\u7DB2\u7AD9\u6642\u4E0D\u986F\u793A\u61F8\u6D6E\u7403","floatBallOptions.clickType":"\u9EDE\u64CA\u884C\u70BA","floatBallOptions.clickTypeDesc":"\u61F8\u6D6E\u7403\u5716\u6A19\u9EDE\u64CA\u6642\u7684\u884C\u70BA","floatBallOptions.clickPopup":"\u986F\u793A\u7FFB\u8B6F\u9762\u677F","floatBallOptions.clickTranslate":"\u7FFB\u8B6F/\u986F\u793A\u539F\u6587",syncToGoogleDrive:"\u7ACB\u5373\u8207 Google Drive \u540C\u6B65",syncToAccount:"\u540C\u6B65\u5230\u8CEC\u6236",syncToAccountButton:"\u7ACB\u5373\u4E0E\u4E91\u7AEF\u540C\u6B65",syncToAccountDescription:"\u4E0A\u50B3\u5230\u5DF2\u767B\u9304\u8CEC\u6236\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u8A2D\u5099\u4E4B\u9593\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u5F8C\u4FEE\u6539\u6642\u9593\u70BA\u6E96\u3002",successSyncConfigInAccount:"\u6210\u529F\u8207\u8CEC\u6236\u4FDD\u6301\u540C\u6B65",successSyncConfigToAccount:"\u6210\u529F\u540C\u6B65\u5230\u8CEC\u6236",syncConfigNoUpdate:"\u5DF2\u7D93\u662F\u6700\u65B0\u7684\u4E86",previewAllThemes:"\u9810\u89BD\u5168\u90E8\u6A23\u5F0F","translationTheme.none":"\u7121","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u5E95\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u6846\u7DDA","translationTheme.solidBorder":"\u5BE6\u7DDA\u6846\u7DDA","translationTheme.underline":"\u76F4\u7DDA\u5E95\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B78\u7FD2\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u9694\u7DDA","translationTheme.highlight":"\u9192\u76EE\u63D0\u793A","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.marker2":"\u99AC\u514B\u7B462","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDashed":"\u7CFB\u7D71\u5167\u5EFA\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDotted":"\u7CFB\u7D71\u5167\u5EFA\u9EDE\u72C0\u5E95\u7DDA","translationTheme.nativeUnderline":"\u7CFB\u7D71\u5167\u5EFA\u76F4\u7DDA\u5E95\u7DDA","translationTheme.wavy":"\u6CE2\u5F62\u66F2\u7DDA","translationServices.custom":"\u81EA\u5B9A\u7FA9API","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.tenAlpha":"\u9A30\u8A0A\u7FFB\u8B6F\u541B(Alpha)","translationServices.google":"Google \u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeepLX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8B6F","translationServices.deepl":"DeepL","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"Azure \u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.cai":"\u5F69\u96F2\u5C0F\u8B6F (Alpha)","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.you":"\u6709\u9053\u7FFB\u8B6F (Alpha)","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.niu":"\u5C0F\u725B\u7FFB\u8B6F","translationServices.papago":"Papago \u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u7576\u9801\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u5C07\u8DF3\u904E\u7FFB\u8B6F",enableUserscriptPagePopup:"\u5728\u9801\u9762\u4E0A\u986F\u793A\u61F8\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528\u5FEB\u901F\u9375/{touch}\u518D\u6B21\u986F\u793A\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5EFA\u8B70\u5C07\u672C\u8A2D\u5B9A\u9801\u9762\u52A0\u5165\u81F3\u6211\u7684\u6700\u611B","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u91D1\u9470\u5F8C\u624D\u53EF\u4F7F\u7528\uFF0C\u8A73\u7D30\u8CC7\u8A0A\u8ACB\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u91D1\u9470\u7533\u8ACB\u548C\u8A2D\u5B9A\u6559\u5B78\u300B",useAboveStyleForTheseSites:"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u7E3D\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8B6F\u6587\u6A23\u5F0F",currentUrl:"\u76EE\u524D\u7DB2\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C",syncToCloud:"\u540C\u6B65\u81F3\u96F2\u7AEF",syncToCloudDescription:"\u4E0A\u50B3\u81F3\u96F2\u7AEF\u5F8C\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u700F\u89BD\u5668/\u6CB9\u7334\u8173\u672C\u4E4B\u9593\u540C\u6B65\u8A2D\u5B9A\uFF0C\u4EE5\u6700\u5F8C\u8B8A\u66F4\u6642\u9593\u70BA\u6E96\u3002",authFail:"\u6388\u6B0A\u5931\u6557",syncTitle:"\u624B\u52D5\u5099\u4EFD\u7BA1\u7406",import_hint:"\u532F\u5165",upload:"\u4E0A\u50B3",revokeAuth:"\u64A4\u92B7\u6388\u6B0A",uploadFail:"\u4E0A\u50B3\u5931\u6557",download:"\u4E0B\u8F09",importSuccess:"\u532F\u5165\u6210\u529F",importFail:"\u532F\u5165\u5931\u6557",deleteFail:"\u522A\u9664\u5931\u6557",backupToCloud:"\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6A94\u6848",create_new_backup:"\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE\uFF0C\u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",backupToCloudDescription:"\u624B\u52D5\u4E0A\u50B3\u6216\u9084\u539F\u5099\u4EFD\u6A94\u6848\uFF0C\u6700\u591A\u5141\u8A31 3 \u500B\u4E0D\u540C\u7684\u5099\u4EFD",successSyncConfig:"\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u6557",updatedAt:"\u66F4\u65B0\u65BC {date}",lastSyncedAt:"\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",downloadFail:"\u4E0B\u8F09\u5931\u6557",clickToDownload:"\u9EDE\u9078\u4E0B\u8F09",aboutLabel:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831","browser.openAboutPage":"\u95DC\u65BC/\u554F\u984C\u56DE\u5831",aboutLabelWithoutSponsor:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831",aboutIntro:"\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F \u4F60\u53EF\u4EE5\u9078\u64C7\u958B\u901A <6>Pro\u6703\u54E1</6> \u4F86\u4F7F\u7528\u958B\u7BB1\u5373\u7528\u7684 DeepL \u548C OpenAI \u7FFB\u8B6F\u3002<br/><br/>\u4F60\u53EF\u4EE5\u95DC\u6CE8\u6211\u4EEC\u7684<3>Twitter</3>\uFF0C<4>Telegram \u983B\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90F5\u4EF6\u8A02\u95B1</5>\u8FFD\u8E64\u66F4\u65B0\u3002<br/> <7>Pro \u6703\u54E1</7> \u53EF\u4EE5\u901A\u904E\u5FEB\u901F\u5BA2\u670D\u90F5\u7BB1 <8>support@immersivetranslate.com</8> \u548C\u6211\u5011\u53D6\u5F97\u806F\u7E6B\u3002",aboutIntroWithoutSponsor:"\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F ",projectHomepage:"\u5C08\u6848\u9996\u9801",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u7D44\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u773E\u865F",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u983B\u9053",joinTelegramChannel:"\u95DC\u6CE8 Telegram \u983B\u9053\u77AD\u89E3\u66F4\u65B0\u8CC7\u8A0A",feedbackAndJoin:"\u554F\u984C\u56DE\u5831/\u52A0\u5165\u7FA4\u7D44",autoSync:"\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",loadingThemeTitle:"Loading \u6A23\u5F0F",loadingThemeDescription:"\u8A2D\u5B9A\u7B49\u5F85\u8B6F\u6587\u8F09\u5165\u6642\u7684\u6A23\u5F0F","loadingTheme.spinner":"\u8F49\u5708\u52D5\u756B","loadingTheme.text":"\u975C\u614B\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u986F\u793A",developerDescription:"\u53EF\u4EE5\u9EDE\u9078<1>\u6B64\u8655</1>\u6AA2\u8996\u9032\u968E\u81EA\u8A02\u529F\u80FD\u76F8\u95DC\u7684\u8AAA\u660E\u6587\u4EF6","edit border color":"\u8B8A\u66F4\u908A\u6846\u8272\u5F69",successSyncButNoChange:"\u76EE\u524D\u8A2D\u5B9A\u8207\u96F2\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u8A02\u8272\u5F69\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u908A\u6846\u8272\u5F69","customThemeLabel.borderRadius":"\u908A\u6846\u5713\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u8272\u5F69","customThemeLabel.backgroundColor":"\u80CC\u666F\u8272\u5F69","customThemeLabel.zoom":"\u5B57\u578B\u7E2E\u653E\u6BD4\u4F8B (%)","customThemeLabel.opacity":"\u6587\u5B57\u4E0D\u900F\u660E\u5EA6 (%)",resetToDefaultColor:"\u9084\u539F\u70BA\u9810\u8A2D\u8272\u5F69",resetToDefaultSettings:"\u9084\u539F\u70BA\u9810\u8A2D\u8A2D\u5B9A",isTranslateTitle:"\u555F\u7528\u7DB2\u9801\u6A19\u984C\u7FFB\u8B6F",isTranslateTitleDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6A19\u984C\u6703\u88AB\u7FFB\u8B6F",enableSearchEnhancement:"\u958B\u555F\u641C\u7D22\u589E\u5F37",enableSearchEnhancementDescription:"\u4E2D\u6587\u641C\u7D22\u8C37\u6B4C\u6703\u5728\u53F3\u908A\u51FA\u73FE\u82F1\u6587\u7248\u8C37\u6B4C\u65B0\u805E",verifyService:"\u9EDE\u6B64\u6E2C\u8A66\u670D\u52D9",verified:"\u9A57\u8B49\u6210\u529F","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8B6F\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u9418\u6700\u5927\u8981\u6C42\u6578","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8981\u6C42\u6578","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u7684\u6700\u5927\u6587\u5B57\u9577\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u6700\u5927\u6BB5\u843D\u6578","field.apiUrl":"\u81EA\u8A02 API \u4F4D\u5740","field.placeholderDelimiters":"\u4FDD\u7559\u7684\u4F54\u4F4D\u7B26","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>\u81EA\u5B9A\u7FA9\u63A5\u53E3\u63A5\u5165</a> \u9700\u8981\u53C3\u8003\u6587\u6A94","description.limitPerMinute":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u5206\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u79D2\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.generalLimitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002","description.prompt":"\u4EE5\u4F7F\u7528\u8005\u8EAB\u4EFD\u50B3\u9001\u7D66 OpenAI \u7684\u5C0D\u8A71\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u5B57\u5167\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8A9E\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6A19\u8A9E\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u85A6\uFF09, \u5C07\u6703\u5728\u55AE\u7368\u4F5C\u70BA\u4E00\u6BB5\u767C\u9001\u7D66 OpenAI","description.maxTextLengthPerRequest":"\u9810\u8A2D\u6703\u5408\u4F75\u591A\u500B\u6BB5\u843D\uFF0C\u4EE5\u6E1B\u5C11\u8ACB\u8981\u6C42\u6578\uFF0C\u4F46\u662F\u5982\u679C\u6BB5\u843D\u7E3D\u9577\u5EA6\u904E\u9577\uFF0C\u4E5F\u53EF\u80FD\u6703\u5C0E\u81F4 API \u7684\u56DE\u61C9\u6642\u9593\u589E\u52A0\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5617\u8A66\u8ABF\u6574\u8A72\u9078\u9805\u4F86\u63D0\u5347\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7D71\u50B3\u9001\u767C\u9001\u7D66 OpenAI \u7684\u5C0D\u8A71\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u5B57\u5167\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8A9E\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6A19\u8A9E\u8A00","field.domain":"\u9886\u57DF","description.domain":"\u9ED8\u8A8D\u70BA\uFF1Ageneral\u3002\u50C5\u5728\u6709\u9053API\u63A7\u5236\u53F0\u958B\u901A\u9818\u57DF\u5316\u7FFB\u8B6F\u7684\u60C5\u6CC1\u4E0B\u53EF\u8A2D\u7F6E\uFF0C\u652F\u6301\u9818\u57DF\u898B<1>\u9019\u88E1</1>","field.scene":"\u5834\u666F","description.scene":"\u9ED8\u8A8D\u70BA\uFF1Ageneral\u3002\u50C5\u5728\u963F\u91CC\u96F2API\u63A7\u5236\u53F0\u958B\u901A\u6A5F\u5668\u7FFB\u8B6F\u5C08\u696D\u7248\u7684\u60C5\u6CC1\u4E0B\u53EF\u8A2D\u7F6E\uFF0C\u652F\u6301\u5834\u666F\u898B<1>\u9019\u88E1</1>","field.vocabId":"\u7528\u6237\u8BCD\u5178 ID","description.vocabId":"\u6307\u5B9A\u7684\u8BCD\u5178 out_id\uFF0C\u76EE\u524D\u652F\u6301\u82F1\u8BD1\u4E2D","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u70BA gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u50B3\u9001\u7D66\u7FFB\u8B6F\u670D\u52D9\u7684\u6BB5\u843D\u6578\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6578\u91CF\u904E\u591A\uFF0C\u53EF\u80FD\u6703\u5C0E\u81F4\u56DE\u61C9\u901F\u5EA6\u8B8A\u6162","description.apiUrl":"\u8ACB\u52A0\u5165\u5177\u9AD4\u5305\u542B\u8DEF\u5F91\u7684\u7DB2\u5740",enabledExtension:"\u555F\u7528\u5957\u4EF6",clickToDisableExtension:"\u9EDE\u9078\u505C\u7528\u5957\u4EF6",clickToEnableExtension:"\u9EDE\u9078\u555F\u7528\u5957\u4EF6",hasBeenDisabled:"\u5DF2\u505C\u7528","show password":"\u986F\u793A\u5BC6\u78BC",customContent:"\u8F38\u5165\u81EA\u5B9A\u7FA9\u6A21\u578B",inputOptions:"\u8F38\u5165\u6846\u589E\u5F37",mouseHoverOptions:"\u9F20\u6A19\u6ED1\u904E",enableInputTranslation:"\u662F\u5426\u555F\u7528\u8F38\u5165\u6846\u589E\u5F37",enableInputTranslationDescription:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165 {startingKey}{startingKey} \u4F60\u597D\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165\uFF1A\u4F60\u597D\u4E16\u754C\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguage:"\u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguageDescription:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00\uFF0C\u4E5F\u5C31\u662F {startingKey}{startingKey} \u4F5C\u4E3A\u89E6\u53D1\u8BCD\u7684\u9ED8\u8BA4\u8BED\u8A00",inputTargetLanguageDescriptionForNoneKey:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputStartingTriggerKeyTitle:"\u8BBE\u7F6E\u8F93\u5165\u6846\u90E8\u5206\u7FFB\u8BD1\u7684\u5206\u5272\u5B57\u7B26",inputStartingTriggerKeyDescription:"\u5F53\u4F60\u4E0D\u9700\u8981\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u7684\u65F6\u5019\uFF0C\u5206\u5272\u7B26\u5141\u8BB8\u4F60\u53EA\u7FFB\u8BD1 {startingKey}{startingKey} \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8BED\u8A00\u4EE3\u7801\uFF0C\u6BD4\u5982\uFF1A{startingKey}ja \u8868\u793A\u53EA\u7FFB\u8BD1 {startingKey}ja \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206",inputStartingTriggerKeyDescriptionForNoneKey:"\u5F53\u524D\u8BBE\u7F6E\u4E3A\u65E0\u9700\u524D\u7F00\uFF0C\u6682\u65E0\u6CD5\u4F7F\u7528\u8F93\u5165\u6846\u7684\u90E8\u5206\u6587\u672C\u7FFB\u8BD1\u529F\u80FD",inputTrailingTriggerKeyTitle:"\u9009\u62E9\u4E00\u4E2A\u8F93\u5165\u7ED3\u675F\u7684\u89E6\u53D1\u5B57\u7B26",inputTrailingTriggerKeyDescription:"\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey} \u5C06\u4F1A\u5F00\u59CB\u7FFB\u8BD1",inputTrailingTriggerKeyTimeout:"\u8F38\u5165\u7D50\u675F\u9023\u64CA\u89F8\u767C\u7684\u9593\u9694\u6642\u9593",inputTrailingTriggerKeyTimeoutDescription:"\u8A2D\u7F6E\u8F38\u5165\u7D50\u675F\u9023\u64CA\u89F8\u767C\u7684\u9593\u9694\u6642\u9593\uFF08\u6BEB\u79D2\uFF09",spaceKey:"<\u7A7A\u683C\u9375>",noneKey:"\u65E0\u9700\u524D\u7F00\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u6587\u672C\u6846",inputTranslationBlockUrlsTitle:"\u5207\u52FF\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",inputTranslationBlockUrlsDescription:"\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\uFF0C\u8F93\u5165\u6846\u589E\u5F3A\u5C06\u4E0D\u4F1A\u751F\u6548",clickToSeeQuickDemo:"\u70B9\u51FB\u5C55\u5F00 30 \u79D2\u5FEB\u901F\u6559\u5B66\u89C6\u9891",inputHelperInfo:"\u8AAA\u660E\uFF1A\u6211\u5011\u7279\u5225\u91DD\u5C0D\u5728\u4E2D\u6587\u8F38\u5165\u6CD5\u4E0B\u90E8\u5206\u89F8\u767C\u5B57\u7B26\u6703\u8B8A\u6210\u4E2D\u6587\u6A19\u9EDE\u7B26\u865F\u9019\u4EF6\u4E8B\u505A\u4E86\u512A\u5316\uFF0C\u6BD4\u5982\u641C\u72D7\u8F38\u5165\u6CD5\u4E0B / \u6703\u8B8A\u6210\u9813\u865F \u3001\uFF0C\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u652F\u6301\u6240\u6709\u89F8\u767C\u7B26\u5C0D\u61C9\u7684\u4E2D\u6587\u7B26\u865F\uFF0C\u4E5F\u5C31\u662F\u8AAA // \u3001\u3001 \u90FD\u6703\u88AB\u8B58\u5225\u70BA\u89F8\u767C\u5B57\u7B26\u3002<br/><br/>\u540C\u6642\u6211\u5011\u4E5F\u652F\u6301\u8A9E\u8A00\u4EE3\u78BC\u7684\u4E2D\u6587\u5225\u540D\u4F5C\u70BA\u547D\u4EE4\uFF0C\u6BD4\u5982 /\u65E5\u6587 \u4F60\u597D\u4E16\u754C \u6703\u88AB\u7FFB\u8B6F\u70BA\u65E5\u6587\uFF0C<1>\u9EDE\u6B64\u67E5\u770B\u6240\u6709\u652F\u63F4\u7684\u8A9E\u8A00\u4EE3\u78BC</1>\u3002",reloadCurrentPage:"\u8BF7\u5148\u5237\u65B0\u5F53\u524D\u9875\u9762\uFF0C\u518D\u5F00\u59CB\u7FFB\u8BD1",noLocalFilePermissionForPDF:"\u6682\u65E0\u6743\u9650\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u8BF7\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\uFF0C\u7136\u540E\u5BFC\u5165\u672C\u5730\u6587\u4EF6",noPermissionForThisPage:"\u26A0\uFE0F \u6682\u65E0\u6743\u9650\u7FFB\u8BD1\u5F53\u524D\u9875\u9762",retryAllParagraphs:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",retryAllButton:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",errorTooltipTitle:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u539F\u56E0",errorModalTitle:"\u7FFB\u8BD1\u670D\u52A1\u6216\u7F51\u7EDC\u4F3C\u4E4E\u51FA\u4E86\u70B9\u95EE\u9898...",disableConfirm:"\u7981\u7528\u78BA\u8A8D",disableOnce:"\u7981\u7528\u4E00\u6B21",disableGlobal:"\u5168\u5C40\u7981\u7528",disableTint:"* \u60A8\u53EF\u4EE5\u5728 {option} \u4E2D\u91CD\u65B0\u555F\u7528\u3002",searchEnhancementNotes:"\u6211\u5011\u767C\u73FE\uFF0C\u4E2D\u6587\u95DC\u9375\u8A5E\u548C\u82F1\u6587\u95DC\u9375\u8A5E\u7684\u65B0\u805E\u7D50\u679C\u6709\u975E\u5E38\u5927\u7684\u4E0D\u540C\uFF0C\u5728\u555F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u96D9\u8A9E\u4FE1\u606F\u589E\u5F37\u529F\u80FD\u5F8C\uFF0C\u6211\u5011\u6703\u5728\u652F\u6301\u7684\u7DB2\u7AD9\uFF08\u8C37\u6B4C\u65B0\u805E\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u95DC\u9375\u8A5E\uFF09\uFF0C\u96EA\u7403\uFF0C\u6771\u65B9\u8CA1\u5BCC\u7DB2\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\uFF09\u81EA\u52D5\u7528\u82F1\u6587\u70BA\u4F60\u641C\u7D22\u540C\u6A23\u7684\u95DC\u9375\u8A5E\u4E26\u5C55\u793A\u5728\u53F3\u5074\u3002\u5982\u679C\u4F60\u4E0D\u9700\u8981\u8A72\u529F\u80FD\u7684\u8A71\uFF0C\u53EF\u4EE5\u9078\u64C7\u7981\u7528\u5B83\u3002",option:"\u9078\u9805",saveSettings:"\u4FDD\u5B58\u8BBE\u7F6E",closeModal:"\u95DC\u9589\u8996\u7A97",enableInputTranslationWithoutTriggerKeyTitle:"\u542F\u7528\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey}\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u4E3A{inputTargetLanguage}",enableInputTranslationWithoutTriggerKeyDescription:"\u5982\u9700\u6307\u5B9A\u76EE\u6807\u8BED\u8A00\uFF0C\u8BF7\u5728\u524D\u9762\u52A0\u4E0A\u8BED\u8A00\u4EE3\u7801\uFF0C\u5982\uFF1Aja \u4F60\u597D\u4E16\u754C",mouseHoverShortcutPlaceholder:"\u5982\uFF1AShift",yearly:"\u5E74\u5EA6\u7E8C\u8A02",quarterly:"\u5B63\u5EA6\u7E8C\u8A02",monthly:"\u6BCF\u6708\u7E8C\u8A02",yearlyForOnce:"\u4E00\u6B21\u6027\u5E74\u5EA6\u5957\u9910",monthlyForOnce:"\u4E00\u6B21\u6027\u6708\u5EA6\u5957\u9910",daily:"\u6BCF\u65E5\u7E8C\u8A02",year:"\u5E74\u5EA6\u7E8C\u8A02",quarter:"\u5B63\u5EA6\u7E8C\u8A02",month:"\u6BCF\u6708\u7E8C\u8A02",day:"\u6BCF\u65E5\u7E8C\u8A02",upgradeToPro:"\u5347\u7D1A\u70BA Pro \u6703\u54E1","popup.openPro":"\u5347\u7D1A\u70BA Pro \u6703\u54E1\u5F8C\u53EF\u4EE5\u66A2\u4EAB DeepL \u548C OpenAI \u7FFB\u8B6F\uFF0C\u9EDE\u6B64\u5347\u7D1A","popup.openProForPro":"\u60A8\u662F Pro \u6703\u54E1\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528 DeepL \u548C OpenAI \u7FFB\u8B6F",currentAccount:"\u7576\u524D\u8CEC\u6236",autoRenewTrialSuffix:'\uFF08\u8A66\u7528\u4E2D\uFF0C<a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">\u7ACB\u523B\u5347\u7D1A\u70BA\u6B63\u5F0F\u6703\u54E1</a>\uFF09',upgradeFromTrialTitle:"\u5347\u7D1A\u70BA\u6B63\u5F0F\u6703\u54E1",subtitle:"\u5F71\u7247\u5B57\u5E55",youtubeService:"\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u5F71\u7247\u5B57\u5E55\u670D\u52D9","subtitle.disabledSubtitle":"\u6C38\u4E45\u7981\u7528\u8996\u983B\u5B57\u5E55\u529F\u80FD","subtitle.disabledSubtitleDescription":"\u5982\u679C\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u7684\u8996\u983B\u5B57\u5E55\u548C\u5176\u4ED6\u64F4\u5C55\u6709\u885D\u7A81\uFF0C\u4F60\u53EF\u4EE5\u9078\u64C7\u6C38\u4E45\u7981\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u7684\u8996\u983B\u5B57\u5E55\u529F\u80FD\u6216\u8005\u5378\u8F09\u5176\u4ED6\u885D\u7A81\u7684\u64F4\u5C55","subtitle.autoEnableSubtitle":"\u81EA\u52D5\u4F7F\u7528\u96D9\u8A9E\u5B57\u5E55","subtitle.autoEnableSubtitleDescription":"\u76EE\u524D\u50C5\u652F\u63F4 Youtube \u7DB2\u7AD9\uFF0C\u555F\u7528\u5F8C\uFF0C\u7576\u5F71\u7247\u64AD\u653E\u7684\u6642\u5019\uFF0C\u6703\u81EA\u52D5\u986F\u793A\u96D9\u8A9E\u5B57\u5E55\uFF0C\u5426\u5247\u9700\u8981\u9EDE\u64CA\u7FFB\u8B6F\u6309\u9215\u624D\u6703\u986F\u793A\u3002","subtitle.preTranslation":"\u512A\u5148\u4F7F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u5B57\u5E55","subtitle.preTranslationDescription":"\u555F\u7528\u5F8C\u6703\u512A\u5148\u7528\u4E0B\u9762\u7684\u7FFB\u8B6F\u670D\u52D9\u63D0\u524D\u7FFB\u8B6F\u6574\u500B\u5B57\u5E55\uFF0C1 \u5C0F\u6642\u7684\u8996\u8A0A\u5927\u6982\u6D88\u8017 5\u842C Tokens \u6216 \u5B57\u7B26\uFF0C\u8ACB\u914C\u60C5\u4F7F\u7528\uFF1B\u95DC\u9589\u5F8C\u5247\u512A\u5148\u4F7F\u7528\u539F\u5F71\u7247\u81EA\u5E36\u7684\u6A5F\u7FFB\u5B57\u5E55","subtitle.humanSubtitlesPreferred":"\u512A\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55","subtitle.humanSubtitlesPreferredDescription":"\u7576\u5F71\u7247\u6709\u76EE\u6A19\u8A9E\u8A00\u4EBA\u5DE5\u5B57\u5E55\u6642\uFF0C\u512A\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55\uFF08\u63A8\u85A6\uFF09",videoSubtitleTranslationDescription:"\u70BA\u5F71\u7247\u5B57\u5E55\u55AE\u7368\u6307\u5B9A\u4E00\u500B\u7FFB\u8B6F\u670D\u52D9",subtitleTranslating:"\u6B63\u5728\u4F7F\u7528 {service} \u670D\u52D9\u7FFB\u8B6F\u5B57\u5E55\u4E2D\uFF0C\u8ACB\u7A0D\u7B49...\uFF08\u6C89\u6D78\u5F0F\u7FFB\u8B6F\uFF09",subtitleLoading:"\u6B63\u5728\u8F09\u5165\u5B57\u5E55...",bilingual:"\u96D9\u8A9E","field.action":"\u662F\u5426\u555F\u7528\u767E\u5EA6\u8853\u8A9E","description.action":"\u555F\u7528\u5F8C\u6703\u5728\u8ACB\u6C42\u4E2D\u52A0\u5165 action=1 \u7684\u53C3\u6578\uFF0C\u4EE5\u4FBF\u544A\u77E5\u767E\u5EA6\u555F\u7528\u8853\u8A9E\uFF0C<1>\u66F4\u591A\u8AAA\u660E\u8ACB\u53C3\u8003\u5B98\u65B9\u6587\u6A94</1>",closeQuickTranslation:"\u95DC\u9589\u61F8\u6D6E\u7403","closeQuickTranslation.untilNext":"\u672C\u6B21\u95DC\u9589\u76F4\u5230\u4E0B\u6B21\u8A2A\u554F","closeQuickTranslation.currentWebsite":"\u7576\u524D\u7DB2\u7AD9\u7981\u7528","closeQuickTranslation.alwaysClose":"\u6C38\u4E45\u7981\u7528","closeQuickTranslation.settingOpen":"\uFF08\u53EF\u5728<1>\u8A2D\u5B9A\u9801</1>\u958B\u555F\uFF09","closeQuickTranslation.cancel":"\u53D6\u6D88","closeQuickTranslation.confirm":"\u78BA\u5B9A","floatBall.popup":"\u6253\u958B\u5FEB\u6377\u8A2D\u5B9A\u9762\u677F","floatBall.translate":"\u9EDE\u64CA\u7FFB\u8B6F\u8A72\u9801\u9762","floatBall.showOriginal":"\u9EDE\u64CA\u5207\u63DB\u5230\u539F\u6587","floatBall.close":"\u95DC\u9589\u61F8\u6D6E\u7403","floatBallOptions.enableDescPc":"\u555F\u7528\u9801\u9762\u61F8\u6D6E\u7403\u5F8C\uFF0C\u6703\u5728\u9801\u9762\u53F3\u5074\u986F\u793A\u4E00\u500B\u5FEB\u6377\u7FFB\u8B6F\u6309\u9215\uFF0C\u9EDE\u64CA\u5373\u53EF\u7FFB\u8B6F","floatBallOptions.enableDesc":"\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528{touch}\u559A\u8D77\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5F37\u70C8\u5EFA\u8B70\u6536\u85CF\u672C\u8A2D\u5B9A\u9801","description.azureApiUrl":"\u586B\u5165\u81EA\u8A02\u7684API\u4F4D\u5740",shareBtnTitle:"\u9EDE\u64CA\u5206\u4EAB\u8A72\u96D9\u8A9E\u9801\u9762\u7D66\u670B\u53CB","floatBall.share":"\u5206\u4EAB\u9801\u9762",confirmSupportMouse:"\u5F37\u5236\u555F\u7528\u6ED1\u9F20\u652F\u63F4",confirmSupportMouseDescription:"\u6AA2\u6E2C\u5230\u7576\u524D\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u6ED1\u9F20\u529F\u80FD\uFF0C\u662F\u5426\u5F37\u5236\u555F\u7528\u6ED1\u9F20\u652F\u63F4\uFF1F"};var Bp={nologin:"Not logged in",login:"Login",manageAccount:"Manage Account",logout:"Logout",curentPlan:"Current Plan",endAt:"Expires",endAuto:"Auto Renew",lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","noSupportTranslate-pdf":"The script is not supported, please use a plugin.","translate-firefox-local-pdf":"Click to upload PDF",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about:addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.shortBrandName":"Immersive Translate","browser.brandName":"Immersive Translate: Web Page&PDF Translation","browser.brandDescription":"Bilingual web page translation, also supports PDF translation, bilingual Epub eBook translation, free to use.","browser.toggleTranslatePage":"Toggle Translate Page","browser.toggleTranslateTheWholePage":"Toggle Translate the Whole Page","browser.toggleOnlyTransation":"Toggle Translate and Hide Original Text","browser.toggleTranslateToThePageEndImmediately":"Toggle Translate to the Bottom of the Page Immediately","browser.toggleTranslateTheMainPage":"Toggle Translate the Main Page","browser.shareToDraft":"Share Bilingual Page","browser.openOptionsPage":"Open Settings Page","browser.toggleTranslationMask":"Toggle translation mask style","browser.translateLocalPdfFile":"Translate local PDF File","browser.openEbookViewer":"Read local e-book","browser.openEbookBuilder":"Make Dual EPUB ebook","browser.translateLocalHtmlFile":"Translate HTML/txt File","browser.donateContext":"Sponsor Benefits","browser.translateLocalSubtitleFile":"Translate Subtitle File",confirmResetConfig:"Are you sure you want to reset the settings?",translationLineBreakSettingTitle:"Line break setting",smartLineBreak:"Smart Wrap",alwaysLineBreak:"Always Wrap",isShowContextMenu:"Create right button menu",toggleBeta:"Enable Beta experimental features",betaDescription:"Enable features that are still experimental, and translation services that are in testing. Join the <1>Telegram group</1> to learn more.",translationLineBreakSettingDescription:"The always line break feature is suitable for layouts with less content, making the layout more neat and tidy. (Use smart line breaks for long paragraphs with more content (more than {count} characters) for saving space)",tempTranslateDomainTitle:"Open the translation time temporarily",tempTranslateDomainDescription:"When a page is translated manually, turn it temporarily on as automatic translation",xMinutes:"{count} minutes",disabled:"Disable",changelog:"Change Log",toggleTranslatePageWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide translation display",toggleTranslationMaskWhenThreeFingersOnTheScreen:"Multi-finger touch to show/hide the blur effect of the translation",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"Multi-finger touch to show/hide only translation display",addUrlDescription:"The domain name is available and wildcard is supported e.g.: *.google.com, google.com/mail/*, https://www.google.com/*",general:"General",clickToExpandConfig:"Expand current configuration",import:"Import configuration from file",export:"Export to file",toggleDebug:"Print debug logs on the console","fingers.0":"Close","fingers.2":"Two-finger touch","fingers.3":"Three-finger touch","fingers.4":"Four-finger touch","fingers.5":"Five-finger touch",mouseHoldKey:"+ {key} translate/restore this paragraph",mouseHoldKeyAuto:"Translate the paragraph directly",mouseHoldKeyOff:"Do nothing",mouseHoldKeyOther:"Custom shortcut key (open settings)",mouseHoldKeyCustomKey:"{key} translate/restore this paragraph",mouseHoverHoldKey:"Mouse over and press X key to translate paragraph","mouse-translate":"Hover",document:"Document",resetSuccess:"All settings reset successful",resetThisSuccess:"Reset successful",saved:"Saved successfully",successImportConfig:"Configuration imported successfully",goAdvancedSettings:"Go to Advanced Settings Page",goAdvancedInterfaceSettings:"Go to Advanced Custom Settings Page",advanced:"Advanced",advancedDescription:"Normally no settings are needed, keep the default. More personalized settings are provided for professional users only.",developer:"Developer settings",donateCafe:"Pricing","translate to the bottom of the page":"Translate to the bottom of the page immediately after opening the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"Enabled will translate from the top to the bottom of the page immediately after opening. Disable will translate while reading. (Not recommended to enable)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, all areas of the entire web page will be translated. Disabled will use the default smart recognition and translate only the main areas. (Not recommended to enable)","the number of characters to be translated first":"Directly translate the number of characters in front of the page without waiting to scroll to the visible area","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",moreOptions:"Expand more custom settings",translateTheWholePage:"Translate the whole page area",changeToTranslateTheWholePage:"Translate the Whole Page",changeToTranslateTheMainPage:"Translate the Main Content",changeToOnlyTranslationMode:"Show Translation only",changeToDualTranslationMode:"Show Dual Translation",translateToThePageEndImmediately:"Immediately translate to the bottom ",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension version is too old, please upgrade the extension to {minVersion} or a newer version and try to sync again.",badUserscriptBrowser:"The current browser does not correctly implement the interface of the Greasemonkey extension, please use another browser that <1>supports the Greasemonkey extension</1> such as (Firefox Nightly version)",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",needActionForOptions:"(need to set)",translationEngine:"Engine Options",sourceLanguage:"Original language",target:"Target Language",popupSourceLanguage:"Source",popupTarget:"Target",popupService:"Service",forThisSite:"Site:",autoEnableSubtitle:"Auto-enable bilingual captions",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",alwaysTranslateSomeSiteOrWildSite:"Always translate this site",alwaysTranslateSomePage:"Always translate this page",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export",import_export_title:"Import/Export Configuration",floatBallOptions:"Floating Button","floatBallOptions.enable":"Enable Float Ball","floatBallOptions.blockUrls":"Blocked Websites","floatBallOptions.add":"Add","floatBallOptions.blockUrlDesc":"Do not display the float ball when encountering the following websites","floatBallOptions.clickType":"Click Behavior","floatBallOptions.clickTypeDesc":"Behavior when clicking on the float ball icon","floatBallOptions.clickPopup":"Display Translation Panel","floatBallOptions.clickTranslate":"Translate/Show Original Text",syncToGoogleDrive:"Sync Now with Google Drive",syncToAccount:"Sync to account",syncToAccountButton:"Sync to account now",syncToAccountDescription:"Uploaded to the logged-in account, the configuration can be synchronized between different devices, and the last modification time shall prevail.",successSyncConfigInAccount:"Successfully synced with account",successSyncConfigToAccount:"Successfully synchronized to account",syncConfigNoUpdate:"Already up to date",previewAllThemes:"Preview all themes","translationTheme.none":"None","translationTheme.grey":"Black Gray","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.solidBorder":"Solid Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.opacity":"Opacity effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Marker","translationTheme.marker2":"Maker2","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationTheme.nativeDashed":"System Dash Underline","translationTheme.nativeDotted":"System Dotted Underline","translationTheme.nativeUnderline":"System Straight Line Underline","translationTheme.wavy":"Squiggle","translationServices.custom":"Custom API","translationServices.tencent":"Tencent Translator","translationServices.tenAlpha":"Tencent Translator (Alpha)","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeepLX (Alpha)","translationServices.bing":"Microsoft Translator","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Azure Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.cai":"Caiyun Translation (Alpha)","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.you":"Youdao Translation (Alpha)","translationServices.transmart":"Tencent Smart Translation","translationServices.niu":"Niu Translation","translationServices.papago":"Papago Translation","translationServices.d":"DeeplX (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"Translate page title","always languages":"Always translate the following languages",neverTranslateLanguagesLabel:"Never Translated Languages",neverTranslateTheFollowingLanguagesDescription:"When a paragraph on a page is in one of the following languages, the translation will be skipped",enableUserscriptPagePopup:"Always show Popup windows on the page",enableUserscriptPagePopupDescription:"Three-finger touch to show the Popup.","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"Sites that always use the {theme} translation style",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language",syncToCloud:"Sync to cloud",syncToCloudDescription:"Upload the configuration to the cloud server, and you can synchronize the configuration between different browsers or Tampermonkey scripts, based on the last modification time.",authFail:"Authorization Failed",syncTitle:"Please select a file operation",import_hint:"Import",upload:"Upload",revokeAuth:"Revoke Authorization",uploadFail:"Upload Failed",download:"Download",importSuccess:"Upload Success",importFail:"Import Failed",deleteFail:"Delete Failed",backupToCloud:"Manage backup files manually",create_new_backup:"Add backup node",maxBackupFiles:"Up to{count}different nodes can be backed up. Please delete unneeded nodes",backupToCloudDescription:"Upload or restore backup files manually, up to 3 different backups",successSyncConfig:"Successfully synced with cloud",syncFail:"Synchronization failed",updatedAt:"Updated at {date}",lastSyncedAt:"Last checked at {date}",downloadFail:"Download failed",clickToDownload:"Click to download",aboutLabel:"About - Feedback ","browser.openAboutPage":"About / Feedback/Sponsor",aboutLabelWithoutSponsor:"About - Feedback",aboutIntro:"We hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. You can choose to subscribe to <6>Pro membership</6> to use the out-of-the-box DeepL and OpenAI translation.<br/><br/> You can also follow out <3>Twitter</3>, <4>Telegram Channel</4>, and <5>Email Subscription</5> below to track updates. <br/> <7>Pro members</7> can contact us through the fast customer service email <8>support@immersivetranslate.com</8>.",aboutIntroWithoutSponsor:"The extension is completely free and we hope that users will all have more accessible and more enjoyable access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. ",projectHomepage:"Project Homepage",joinTelegramGroup:"Join our communities for feature discussion",wechatPublicAccount:"Wechat Official Account",wechatCommunities:"Wechat Group",qqCommunities:"QQ Channel",joinTelegramChannel:"Subscribe to our Telegram channel to get the latest updates",feedbackAndJoin:"Feedback",autoSync:"Auto-Time Sync",loadingThemeTitle:"Loading Style",loadingThemeDescription:"Set the style of waiting for the translation to load","loadingTheme.spinner":"Spinning icon","loadingTheme.text":"Static Text... ","loadingTheme.none":"Disabled",developerDescription:"You can click <1>here</1> to see the documentation related to advanced customization","edit border color":"Edit border color",successSyncButNoChange:"The current configuration is consistent with that in the cloud server",customTheme:"Customize colors and sizes","customThemeLabel.borderColor":"Border color","customThemeLabel.borderRadius":"Border Round Corner","customThemeLabel.textColor":"Text color","customThemeLabel.backgroundColor":"Background color","customThemeLabel.zoom":"Font scale (%)","customThemeLabel.opacity":"Text opacity (%)",resetToDefaultColor:"Reset to default colors",resetToDefaultSettings:"Reset to default settings",isTranslateTitle:"Enable translate page title",isTranslateTitleDescription:"When enabled, the page title will be translated",enableSearchEnhancement:"Enable Search Enhancement",enableSearchEnhancementDescription:'After enabling, the right sidebar will automatically display "Google News" search results for corresponding English keywords on supported websites (such as Google News, Google Search (partial keywords), Xueqiu, East Money, Futu, Tiger Community).',verifyService:"Verify service",verified:"Successful","field.model":"Model","field.translationEngine":"Translation engine","field.limitPerMinute":"Max requests per minute","field.limitPerSecond":"Max requests per second","field.maxTextLengthPerRequest":"Maximum text length per request","field.maxTextGroupLengthPerRequest":"Maximum number of paragraphs per request","field.apiUrl":"Custom API interface address","field.placeholderDelimiters":"Reserved placeholders","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>Custom interface access</a> requires reference documents","description.limitPerMinute":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next minute. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.limitPerSecond":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next second. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.generalLimitPerSecond":"Requests exceed this limit will be queued until the next seconds.","description.prompt":"Send as a user to OpenAI conversation, where {{text}} indicates the text of the paragraph,{{from}} indicates the language of the paragraph,{{to}} indicates the target language, you can omit {{text}}, if so, it'll be sent as a separated message","description.maxTextLengthPerRequest":"By default multiple paragraphs will be merged to reduce the number of requests, but if the total length of the paragraphs is too long, it may also cause the interface to respond slowly, so you can try to adjust this option to optimize speed","description.systemPrompt":"Send the conversation to OpenAI as a system, where {{text}} represents the text content of the paragraph, {{from}} represents the original language of the paragraph, and {{to}} represents the target language.","field.domain":"Domain","description.domain":"Default is\uFF1Ageneral. Only set up if there is an API console open domain translation, support fields see <1>Here </1>","field.scene":"Scene","description.scene":"Default is\uFF1Ageneral. Only set up if there is an API console open Machine Translation Professional, support fields see<1>Here</1>","field.vocabId":"User dictionary ID","description.vocabId":"Specified dictionary out_id, currently supported in English translation","description.model":"OpenAI's models, such as gpt-3.5-turbo, gpt-4, etc","description.maxTextGroupLengthPerRequest":"The number of paragraphs sent to translation service each time. Sending too many paragraphs to OpenAI at once can slow down the interface.","description.apiUrl":"Please provide a URL with the specific path.",enabledExtension:"Enable extensions",clickToDisableExtension:"Click to disable extension",clickToEnableExtension:"Click to enable the extension",hasBeenDisabled:"Disabled","show password":"Show password",customContent:"Enter customization content",inputOptions:"Writing",mouseHoverOptions:"Mouse Hover",enableInputTranslation:"enhanced input box?",enableInputTranslationDescription:"When enabled, enter {startingKey}{startingKey} direct in the input box and hit{inputTrailingTriggerKeyRepeatTimes}times{trailingKey}, translated into {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:'When enabled, simply enter "Hello World" in the input box, then quickly press {inputTrailingTriggerKeyRepeatTimes} times on {trailingKey}, and it will be translated into the default target language.',inputTargetLanguage:"Set the default target language for the input box",inputTargetLanguageDescription:"The default target language for the translation input box, which is {startingKey}{startingKey} as the default language for triggering words.",inputTargetLanguageDescriptionForNoneKey:"Default target language for translation input box",inputStartingTriggerKeyTitle:"Set the delimiter for translating part of the input box.",inputStartingTriggerKeyDescription:"When you don't need to translate the entire input box, the delimiter allows you to only translate the portion from {startingKey}{startingKey} to the end of the input box. You can also specify a language code, for example: {startingKey}ja means only translating the portion from {startingKey}ja to the end of the input box.",inputStartingTriggerKeyDescriptionForNoneKey:"The current setting is no prefix required, the partial text translation function of the input box cannot be used temporarily.",inputTrailingTriggerKeyTitle:"Select a trigger character to indicate the end of input.",inputTrailingTriggerKeyDescription:"Start the translation by quickly pressing 3 times {trailingKey}.",inputTrailingTriggerKeyTimeout:"Enter the interval time to end the trailing trigger",inputTrailingTriggerKeyTimeoutDescription:"Set the interval time (milliseconds) for the input to end the combo trigger",spaceKey:"<spacekey>",noneKey:"Translate the entire text box without prefixes",inputTranslationBlockUrlsTitle:"Do not enable input box enhancement in the following URL",inputTranslationBlockUrlsDescription:"The input box enhancement will not work in the following URL",clickToSeeQuickDemo:"Click to expand the 30s tutorial video",inputHelperInfo:`Note: We have optimized the system to address an issue where certain characters in Chinese input methods were being converted into Chinese punctuation marks. For instance, when using Sogou Input Method, "/" would be changed to "\u3001". We now recognizes all corresponding Chinese symbols as triggering characters, including "//" and "\u3001\u3001".

Additionally, we support using Chinese aliases of language codes as commands. For example, entering "/Japanense Hello World" will translate the text into Japanese. You can click here to see a list of all supported language codes.`,reloadCurrentPage:"Please refresh the current page before starting translation",noLocalFilePermissionForPDF:"No permission to read local files. Please click the button above and upload the local file.",noPermissionForThisPage:"\u26A0\uFE0F No permission to translate the current page",retryAllParagraphs:"Retry all paragraphs",retryAllButton:"Retry All",errorTooltipTitle:"Click to get the error details",errorModalTitle:"Noops, something went wrong",disableConfirm:"Search Enhancement Settings",disableOnce:"Disable Once",disableGlobal:"Disable Forever",disableTint:"* You can re-enable in {option}.",searchEnhancementNotes:"We have discovered notable disparities in news results between Chinese and English keywords. By activating the immersive translation Bilingual Display Enhancement feature, we will automatically search for equivalent English keywords and display them on the right side of supported websites (e.g., Google News, Google Search (partial keywords), xueqiu, East Money, Futu, Tiger). You can disable this feature if you don't need it.",option:"Settings",saveSettings:"Save",closeModal:"Close",enableInputTranslationWithoutTriggerKeyTitle:"Enable quick press 3 times {trailingKey}, directly translate the entire input box to {inputTargetLanguage}.",enableInputTranslationWithoutTriggerKeyDescription:"To specify the target language, please add a language code at the beginning, such as: ja Hello world",mouseHoverShortcutPlaceholder:"e.g. Shift",deepLProName:"Premium Membership (Recommended)",deepLProDescription:"You can directly use this service",deeplProDescriptionForNormal:"No setup required, available for premium members after login, <1>Upgrade</1>",deepLCustomDescription:"Requires an international credit card, activate at <1>DeepL</1> official site, click to see <2>documentation</2>",deepLCustomName:"Custom Auth Key",chooseProviderLabel:"Choose a service provider",openaiProName:"Premium Membership (Recommended)",openaiProDescription:"The current plan can be used directly",openaiProDescriptionForNormal:"No setup required, available for premium members after login, <1>Upgrade</1>",openaiCustomDescription:"Can be obtained from OpenAI, Azure OpenAI, or other third-party services, <1>Click here to view documentation</1>",openaiCustomName:"Custom API Key",needLoginAction:"(Premium or custom)",goLoginOrAction:"(Premium or go to setting)",yearly:"Annual Renewal",quarterly:"Quarterly Renewal",monthly:"Monthly Renewal",daily:"Daily Renewal",yearlyForOnce:"One-time Annual",monthlyForOnce:"One-time Monthly",profile:"Profile",billing:"Billing",onetime_7day:"7-day Trial Pack",currentPlanDescriptionForFree:"Current plan: Free",currentPlanDescriptionForContinuous:"Current plan: {plan}, will auto-renew on {endAt}",currentPlanDescriptionForAutoRenewCaceling:"Current plan: {plan}, will expire on {endAt} and will not auto-renew",currentPlanDescriptionForOneTime:"Current plan: {plan}, expiring on {endAt}. <1>Upgrade to annual</1> or <2>monthly</2> pro membership",currentYearlyPlanDescriptionForAutoRenewCacelingWithRealPaiedUser:"Current plan: {plan}, will expire on {endAt}, will not be auto-renewed after expiration <br/><1>Manage the renewal plan</1>",currentYearlyPlanDescriptionForAutoRenewCacelingWithAdmin:"Current plan: {plan}, will expire on {endAt}, will not auto-renew after expiration.<br/> <1>Enable consecutive annual plan</1>",upgradePlan:"Click here to upgrade to Pro membership",year:"Annual Renewal",quarter:"Quarterly Renewal",month:"Monthly Renewal",day:"Daily Renewal",upgradeToPro:"Upgrade to Pro","popup.openPro":"Enjoy unrestricted access to DeepL and OpenAI translations after upgrading to Pro Membership. Click here to upgrade","popup.openProForPro":"You are a Pro member, you can directly use DeepL and OpenAI translations",currentAccount:"Account",enableAutoSyncUserSettings:"Enable auto-sync user settings",modalEnableInputTranslationTitle:"Writing Settings",modalEnableInputTranslationDesc:"You have just triggered the immersive translate of the input box by quickly tapping the space key 3 times. The content of the input box will be translated into the default target language. <br /><br /> If this was a mistake, don't worry. You can choose to disable it this time or permanently disable input box translation.",saveAndNotShowAgain:"Save and don't show again",disableInputTranslationTips:"* You can also set other shortcuts in {option}, {learnMore}.",learnMore:"Learn more",continueEnalbeInputTranslation:"Continue to enable input translation",autoRenewTrialSuffix:'(In trial, <a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">Upgrade to paid Pro now</a>)',upgradeFromTrialTitle:"Upgrade to paid Pro",subtitle:"Video Subtitles",youtubeService:"Video Subtitle Translation Service","subtitle.disabledSubtitle":"Disable Video Subtitle Feature Permanently ","subtitle.disabledSubtitleDescription":"If there is a conflict between Immersive Translate video subtitles and other extensions, you can choose to permanently disable the Immersive Translate video subtitle feature or uninstall other conflicting extensions","subtitle.autoEnableSubtitle":"Automatically Enable Bilingual Subtitles","subtitle.autoEnableSubtitleDescription":"Currently, only YouTube is supported. When enabled, the bilingual subtitles will be automatically enabled when the video is played.","subtitle.preTranslation":"Prefer translate subtitles by Immersive Translate","subtitle.preTranslationDescription":"When enabled, the service listed below will be used preferentially to translate the subtitles in advance, an 1-hour video consumes approximately 50,000 Tokens or characters, please use as appropriate; if disabled, the original automated translations provided with the video will be used","subtitle.humanSubtitlesPreferred":"Prefer Human-Crafted Subtitles","subtitle.humanSubtitlesPreferredDescription":"When human-crafted subtitles in the target language are available, these will be preferred (Recommended)",videoSubtitleTranslationDescription:"Specify a translation service for video subtitles",subtitleTranslating:"Immersive Translate is using {service} to translate subtitles...",subtitleLoading:"Loading subtitles...",bilingual:"Bilingual","field.action":"Enable Baidu terminology?","description.action":"Once enabled, the parameter action=1 will be added to the request to inform Baidu to enable the terminology. <1>For more details, please refer to the official documentation</1>",closeQuickTranslation:"Close Floating Button","closeQuickTranslation.untilNext":"Close this time until the next visit","closeQuickTranslation.currentWebsite":"Current website disabled","closeQuickTranslation.alwaysClose":"Permanently disable","closeQuickTranslation.settingOpen":"(Can be activated in <1>Settings Page</1>)","closeQuickTranslation.cancel":"Cancel","closeQuickTranslation.confirm":"Ok","floatBall.popup":"Open quick settings popup","floatBall.translate":"Click to translate this page","floatBall.showOriginal":"Click to switch back to the original","floatBall.close":"Close Floating Button","floatBallOptions.enableDescPc":"After enabling the page floating button, a quick translation button will appear on the right side of the page, click to translate","floatBallOptions.enableDesc":"After closing the floating button, you can invoke with {touch}. To prevent accidentally closing this option and not finding the floating ball, it's strongly recommended to bookmark this settings page","description.azureApiUrl":"Fill in the custom API interface address",shareBtnTitle:"Click to share this bilingual page","floatBall.share":"Share Page",confirmSupportMouse:"Force Enable Mouse Support",confirmSupportMouseDescription:"Detection indicates that the current browser does not support mouse functions. Would you like to force enable mouse support?"};var sy=[{code:"zh-CN",messages:Ip},{code:"zh-TW",messages:Fp},{code:"en",messages:Bp}];var ly={};for(let t of sy)ly[t.code]=t.messages;var lt="immersive-translate";var ce="immersiveTranslate";var WT=ce+"GoogleAccessToken",$T=ce+"AuthFlow";var jT=ce+"AuthState",qT=ce+"IframeMessage",KT=ce+"WaitForRateLimit",GT=ce+"DocumentMessageAsk",zp=ce+"DocumentMessageTellThirdParty",VT=ce+"showError",Hp=ce+"DocumentMessageThirdPartyTell",XT=ce+"DocumentMessageEventUpload",YT=ce+"DocumentMessageHandler",ZT=`${ce}Share`,QT=`${ce}ReqDraft`,JT=`${ce}ResDraft`,e_=`${ce}Container`,t_=`${ce}SpecifiedContainer`;var n_=`${ce}PageTranslatedStatus`,r_=`${ce}PageUrlChanged`,i_=`${ce}ReceiveCommand`,a_=ce+"LastUseMouseHoverTime",o_=ce+"LastUseInputTime",s_=ce+"LastUseManualTranslatePageTime",l_=`${ce}PopupReceiveMessage`,cy="immersivetranslate.com",uy="config.immersivetranslate.com",c_=`https://${cy}/`,u_=`https://${uy}/default_config.json`,d_=`${ce}Mark`;var Wp=`${ce}Root`,ws=`data-${lt}-effect`,p_=`data-${lt}-translation-element-mark`,h_=`${ce}TranslationElementMark`,f_=`${ce}TranslatedMark`,m_=`${ce}ParagraphId`,g_=`${ce}LoadingId`,b_=`data-${lt}-loading-id`,y_=`${ce}ErrorId`,w_=`data-${lt}-error-id`,v_=`${ce}AtomicBlockMark`,x_=`${ce}ExcludeMark`,T_=`data-${lt}-exclude-mark`,__=`${ce}StayOriginalMark`,S_=`${ce}PreWhitespaceMark`,A_=`${ce}InlineMark`,k_=`${ce}BlockMark`,E_=`${ce}Left`,C_=`${ce}Right`,L_=`${ce}Width`,D_=`${ce}Height`,R_=`${ce}Top`,N_=`${ce}FontSize`;var O_=`${ce}GlobalStyleMark`,dy=["@","#"];var P_=`${lt}-target-wrapper`,M_=`${lt}-pdf-target-container`,I_=`${lt}-target-inner`,F_=`${lt}-source-wrapper`,B_=`${lt}-target-translation-block-wrapper`,U_=`${lt}-root-translation-theme`,z_=`${ce}RootTranslationTheme`,H_=`${lt}-target-translation-vertical-block-wrapper`,W_=`${lt}-target-translation-pdf-block-wrapper`,$_=`${lt}-target-translation-pre-whitespace`,j_=`${lt}-target-translation-inline-wrapper`;var Up=[{type:"select",name:"codename",labelKey:"field.translationEngine",default:"youdao",required:!1,options:[{label:"translationServices.google",value:"google"},{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.aws",value:"aws"}]}],q_={bing:{name:"\u5FAE\u8F6F\u7FFB\u8BD1",homepage:"https://www.bing.com/translator"},google:{name:"Google",homepage:"https://translate.google.com/"},deepl:{name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://immersivetranslate.com/docs/services/deepL/",providers:[{name:"pro",nameKey:"deepLProName",descriptionKey:"deepLProDescription",descriptionKeyForNormal:"deeplProDescriptionForNormal",descriptionLink1:"https://immersivetranslate.com/pricing"},{name:"custom",nameKey:"deepLCustomName",descriptionKey:"deepLCustomDescription",descriptionLink1:"https://www.deepl.com/translator",descriptionLink2:"https://immersivetranslate.com/docs/services/deepL/"}],allProps:[{name:"authKey",providers:["custom"],label:"Auth Key",required:!0,type:"password"}]},openai:{name:"Open AI",homepage:"https://openai.com/api/",docUrl:"https://immersivetranslate.com/docs/services/openai/",providers:[{name:"pro",nameKey:"openaiProName",descriptionKey:"openaiProDescription",descriptionKeyForNormal:"openaiProDescriptionForNormal",descriptionLink1:"https://immersivetranslate.com/pricing"},{name:"custom",nameKey:"openaiCustomName",descriptionKey:"openaiCustomDescription",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/"}],allProps:[{name:"APIKEY",providers:["custom"],required:!0,type:"password"},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!1,type:"openai-model-select",default:"gpt-3.5-turbo-1106",providers:["custom"],options:[{providers:["custom","pro"],label:"gpt-3.5-turbo",value:"gpt-3.5-turbo"},{providers:["custom","pro"],label:"gpt-3.5-turbo-1106",value:"gpt-3.5-turbo-1106"},{providers:["custom","pro"],label:"gpt-3.5-turbo-0613",value:"gpt-3.5-turbo-0613"},{providers:["custom"],label:"gpt-4-1106-preview",value:"gpt-4-1106-preview"},{providers:["custom"],label:"gpt-4",value:"gpt-4"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.limitPerSecond",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/",type:"number",default:10,providers:["custom"]},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.openai.com/v1/chat/completions",descriptionKey:"description.apiUrl",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/",optional:!0,providers:["custom"]},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"textarea",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`Translate the text to {{to}}, please do not explain any sentences, just translate or leave them as they are.:

{{text}}`,optional:!0}]},transmart:{name:"Transmart",homepage:"https://transmart.qq.com/"},youdao:{name:"Youdao",homepage:"https://youdao.com/",docUrl:"https://immersivetranslate.com/docs/services/youdao/",allProps:[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:200,optional:!0},{name:"domain",required:!1,labelKey:"field.domain",descriptionKey:"description.domain",descriptionLink1:"https://fanyi.youdao.com/openapi/",type:"text",default:"general",optional:!0},{name:"vocabId",required:!1,labelKey:"field.vocabId",descriptionKey:"description.vocabId",type:"text",default:"",optional:!0}]},tencent:{name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://immersivetranslate.com/docs/services/tencent/",allProps:[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]},aliyun:{name:"Aliyun",homepage:"https://translate.alibaba.com/",docUrl:"https://immersivetranslate.com/docs/services/aliyun/",allProps:[{name:"AccessKeyID",required:!0,type:"text"},{name:"AccessKeySecret",required:!0,type:"password"},{name:"scene",labelKey:"field.scene",descriptionKey:"description.scene",descriptionLink1:"https://help.aliyun.com/document_detail/158267.html",required:!1,optional:!0,type:"text",default:"general"}]},azure:{name:"azure",homepage:"https://learn.microsoft.com/en-us/azure/cognitive-services/translator/text-translation-overview",docUrl:"https://immersivetranslate.com/docs/services/azure/",allProps:[{name:"region",required:!1,default:"eastasia",type:"text"},{name:"APIKEY",required:!0,type:"password"},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.cognitive.microsofttranslator.com/",descriptionKey:"description.azureApiUrl",optional:!0}]},papago:{name:"Papago",homepage:"https://translate.google.com/",canary:!0},baidu:{name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://immersivetranslate.com/docs/services/baidu/",allProps:[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:1,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0},{name:"action",required:!1,labelKey:"field.action",descriptionKey:"description.action",descriptionLink1:"https://fanyi-api.baidu.com/doc/21",type:"boolean",default:!1,optional:!0}]},volc:{name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://immersivetranslate.com/docs/services/volcano/",allProps:[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0}]},caiyun:{name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://immersivetranslate.com/docs/services/caiyun/",allProps:[{name:"token",required:!0,type:"password"}]},cai:{name:"Cai",homepage:"https://fanyi.caiyunapp.com/",alpha:!0},custom:{name:"Custom",beta:!0,homepage:"https://immersivetranslate.com/docs/services/custom/",titleKey:"description.custom",allProps:[{name:"url",label:"API URL",required:!0,type:"text"},{name:"langs",required:!1,labelKey:"field.langs",type:"textarea",default:"zh-CN,en",optional:!0},{name:"placeholderDelimiters",required:!1,labelKey:"field.placeholderDelimiters",type:"text",default:dy,optional:!0},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0}]},mock:{name:"Mock",homepage:"https://www.google.com"},mock2:{name:"Mock2",homepage:"https://www.google.com"},tenAlpha:{name:"TenAlpha",homepage:"https://fanyi.qq.com/",alpha:!0},you:{name:"You",alpha:!0,homepage:"https://youdao.com/"},openl:{name:"Openl",homepage:"https://openl.club/",docUrl:"https://immersivetranslate.com/docs/services/openL/",allProps:[...Up,{type:"password",name:"apikey",required:!0}],props:Up},volcAlpha:{name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},d:{name:"D () ",canary:!0,homepage:"https://www.deepl.com/translator"},dpro:{name:"DPro (Canary) ",canary:!0,homepage:"https://www.deepl.com/translator"},deeplx:{name:"DeepLX (Beta)",beta:!0,homepage:"https://www.deepl.com/translator",allProps:[{name:"url",label:"API URL",required:!0,type:"text"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0}]},niu:{name:"niutrans",homepage:"https://niutrans.com/",docUrl:"https://immersivetranslate.com/docs/services/niu",allProps:[{name:"APIKEY",required:!0,type:"password"}]}},K_={type:ce+"ChildFrameToRootFrameIdentifier"};var G_=an()?"https://dash.immersivetranslate.com/#general":"http://localhost:8000/dist/userscript/options/#general";var V_=an()||xn()?"https://api2.immersivetranslate.com":"https://test-api2.immersivetranslate.com",X_=an()||xn()?"https://immersivetranslate.com/accounts/login?from=plugin":"https://test.immersivetranslate.com/accounts/login?from=plugin",py=an()||xn()?"https://immersivetranslate.com/profile":"https://test.immersivetranslate.com/profile",vs=an()||xn()?"https://immersivetranslate.com/pricing":"https://test.immersivetranslate.com/pricing",hy=an()||xn()?"https://immersivetranslate.com/topup?type=open_ai&":"https://test.immersivetranslate.com/topup?type=open_ai&",fy=an()||xn()?"https://immersivetranslate.com/topup?type=deepl&":"https://test.immersivetranslate.com/topup?type=deepl&",Y_=vs+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_more",Z_=vs+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_footer",Q_=vs+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal",J_=hy+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",e2=fy+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",t2=py+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal&upgradeFromTrial=true";var{ZipReader:my,BlobReader:Ts,TextReader:xs,TextWriter:gy,BlobWriter:jp,ZipWriter:by}=co;_i({useWebWorkers:!1});var yy=async t=>{let e=new Uint8Array(await t.slice(0,4).arrayBuffer());return e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4},wn=null,Ji=0,ea=0,Zn=0,$p=!1,wy=rr(),vy=wy.PROD==="1",xy=async t=>{let n=await new my(new Ts(t)).getEntries();t.name&&t.name.endsWith(".zip")&&n.every(c=>c.filename.startsWith(t.name.slice(0,-4)+"/"))&&(n=n.map(c=>(c.filename=c.filename.slice(t.name.length-3),c)));let r=new Map(n.map(l=>[l.filename,l])),i=l=>(c,...u)=>r.has(c)?l(r.get(c),...u):null,a=i(l=>l.getData(new gy)),o=i((l,c)=>l.getData(new jp(c)));return{entries:n,loadText:a,loadBlob:o,getSize:l=>r.get(l)?.uncompressedSize??0}},qp=async t=>t.isFile?t:(await Promise.all(Array.from(await new Promise((e,n)=>t.createReader().readEntries(r=>e(r),r=>n(r))),qp))).flat(),Ty=async t=>{let e=await qp(t);e=e.map(p=>p);let n=[],r=await Promise.all(e.map(p=>new Promise((d,h)=>p.file(b=>d([b,p.fullPath]),b=>h(b))))),i=new Map(r.map(([p,d])=>{let h=d.replace(t.fullPath+"/","");return n.push({filename:h,...p}),[h,p]})),a=new TextDecoder,o=p=>p?a.decode(p):null,s=p=>i.get(p)?.arrayBuffer()??null;return{entries:n,loadText:async p=>o(await s(p)),loadBlob:async p=>i.get(p),getSize:p=>i.get(p)?.size??0}},_y=({name:t,type:e})=>e==="application/vnd.comicbook+zip"||t.endsWith(".cbz"),Sy=({name:t,type:e})=>e==="application/x-fictionbook+xml"||t.endsWith(".fb2"),Ay=({name:t,type:e})=>e==="application/x-zip-compressed-fb2"||t.endsWith(".fb2.zip")||t.endsWith(".fbz"),ky=async(t,e)=>{let n;if(t.isDirectory){let a=await Ty(t);wn=a,n=await new or(a).init()}else if(t.size)if(await yy(t)){let a=await xy(t);if(wn=a,_y(t))n=Ys(a,t);else if(Ay(t)){let{entries:o}=a,s=o.find(c=>c.filename.endsWith(".fb2")),l=await a.loadBlob((s??o[0]).filename);n=await ha(l)}else n=await new or(a).init()}else await ll(t)?n=await new Jr({unzlib:Wu}).open(t):Sy(t)&&(n=await ha(t));else throw new Error("File not found");if(!n)throw new Error("File type not supported");let r=new Kr(n,e),i=await r.display();return document.body.append(i),r},Ie=document.querySelector.bind(document),Cn=!1;function Kp(){let t=document.querySelectorAll("iframe");for(let r=0;r<t.length;r++){let a=t[r].contentDocument,o=a&&a.body;o&&o.setAttribute("contenteditable",!1)}Cn=!1;let e=document.getElementById("edit");e&&(e.innerText=Cn?"Preview (\u9884\u89C8)":"Edit (\u7F16\u8F91)");let n=document.querySelectorAll("[data-type='iframe-title']");for(let r=0;r<n.length;r++){let i=n[r];i.innerText=Cn?" \uFF08\u4EE5\u4E0B\u5185\u5BB9\u5F53\u524D\u53EF\u7F16\u8F91\uFF09":""}}function Ey(){let t=document.querySelectorAll("iframe");for(let r=0;r<t.length;r++){let a=t[r].contentDocument,o=a&&a.body;o&&o.setAttribute("contenteditable",!0)}Cn=!0;let e=document.getElementById("edit");e&&(e.innerText=Cn?"Preview (\u9884\u89C8)":"Edit (\u7F16\u8F91)");let n=document.querySelectorAll("[data-type='iframe-title']");for(let r=0;r<n.length;r++){let i=n[r];i.innerText=Cn?" \uFF08\u4EE5\u4E0B\u5185\u5BB9\u5F53\u524D\u53EF\u7F16\u8F91\uFF09":""}}function Cy(){Cn?Kp():Ey()}var _s=class{style={spacing:1.4,justify:!0,hyphenate:!0};layout={margin:48,gap:48,maxColumnWidth:720};closeSideBar(){Ie("#dimming-overlay").classList.remove("show"),Ie("#side-bar").classList.remove("show")}constructor(){Ie("#side-bar-button").addEventListener("click",()=>{Ie("#dimming-overlay").classList.add("show"),Ie("#side-bar").classList.add("show")}),Ie("#dimming-overlay").addEventListener("click",()=>this.closeSideBar());let e=Vs([{name:"layout",label:"Layout",type:"radio",items:[["Paginated","paginated"],["Scrolled","scrolled"]],onclick:n=>{this.layout.flow=n}}]);e.element.classList.add("menu"),Ie("#menu-button").append(e.element),Ie("#menu-button > button").addEventListener("click",()=>e.element.classList.toggle("show")),e.groups.layout.select("paginated")}async open(e){Ie("#progress").classList.remove("none");try{document.addEventListener(zp,b=>{let{detail:g}=b;if(g)try{let m=JSON.parse(g);if(m&&m.type&&m.payload){if(m.type==="paragraphTranslated"){let{ok:f}=m.payload;if(f?ea++:Zn++,s&&Ji){let y=ea,w=ea+Zn,E=y/Ji*100,_=Math.floor(E),T=Math.floor(w/Ji*100);if(_>100&&(_=100),T>100&&(T=100),s.innerText=`${_}%`,T===100&&Zn>0){let v=document.querySelector("#error");v.innerHTML=Nr.sanitize(`${Zn} failed(\u5931\u8D25). <span class="link">Retry all (\u70B9\u6B64\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D)</span>`)}_===100&&($p||($p=!0,ys({particleCount:100,spread:160})))}}else if(m.type==="totalParagraphsCount")m.payload.totalParagraphsCount&&(Ji=m.payload.totalParagraphsCount);else if(m.type==="translateStart")ea=0,Zn=0;else if(m.type==="restorePage"){let f=document.querySelector("#error"),y=document.querySelector("#progress-number");f&&(f.innerHTML=""),y&&(y.innerText="")}}}catch{}}),this.view=await ky(e,this.#e.bind(this));let{book:n}=this.view,r=n.sections,i=document.querySelector("#chapters"),a=n.resources,o=[];if(a&&a.guide&&a.guide.length)for(let b of a.guide)o.push(b.href);let s=document.querySelector("#progress-number"),l=document.querySelector("#error");l.addEventListener("click",b=>{for(b.preventDefault();l.firstChild;)l.removeChild(l.firstChild);Zn=0,document.dispatchEvent(new CustomEvent(Hp,{detail:JSON.stringify({type:"retryFailedParagraphs"})}))}),Ie("#open").addEventListener("click",()=>{window.location.reload()}),Ie("#export").addEventListener("click",async b=>{b.preventDefault(),wn||alert("Load failed");let g=document.querySelector("#export");g.classList.add("disabled");let m=document.querySelector("#exportAction");m&&m.classList.add("none");let f=document.querySelector("#exportStatus");f&&(f.innerText="Exporting..."),Kp();let y=wn.entries,w=new jp,E=new by(w),_=new xs("application/epub+zip");await E.add("mimetype",_,{level:0,extendedTimestamp:!1});for(let A=0;A<y.length;A++){let C=y[A],R=C.filename;if(R==="mimetype"||!R)continue;let D=R.replace(/\'/g,"\\'"),I=document.querySelector("iframe[id='"+D+"']");if(I){let N=I.contentDocument.cloneNode(!0);N.querySelectorAll("["+ws+"]").forEach(L=>{if(vy){delete L[Wp];let H=Object.keys(L.dataset).filter(q=>q.startsWith(ce));for(let q of H)delete L.dataset[q]}else{let H=Object.keys(L.dataset).filter(q=>q.startsWith(ce));for(let q of H)delete L.dataset[q]}L.removeAttribute(ws)}),N.querySelectorAll("[data-id]").forEach(L=>{L.removeAttribute("data-id")}),N.querySelectorAll("[contenteditable]").forEach(L=>{L.removeAttribute("contenteditable")}),N.querySelectorAll("style").forEach(L=>{L.getAttribute("type")||L.setAttribute("type","text/css")});let j=new XMLSerializer().serializeToString(N),J=new xs(j);try{await E.add(C.filename,J)}catch{}}else{let N=n.metadata;if(C.filename===n.opfPath&&N&&N.identifier)try{let B=await wn.loadText(C.filename),F=new DOMParser().parseFromString(B,"text/xml"),W=F.getElementById(F.documentElement.getAttribute("unique-identifier"))??F.getElementsByTagNameNS(NS.DC,"identifier")[0],te=Math.random().toString(10).slice(2,15);W.textContent=te;let j=new XMLSerializer().serializeToString(F),J=new xs(j);await E.add(C.filename,J)}catch{let F=await wn.loadBlob(C.filename);await E.add(C.filename,new Ts(F))}else try{let B=await wn.loadBlob(C.filename);await E.add(C.filename,new Ts(B))}catch{}}}await E.close();let T=await w.getData(),v=e.name;e.name.endsWith(".epub.zip")&&(v=v.replace(".epub.zip",".epub"));let x=v.lastIndexOf("."),S=Math.min(160,x);v=v.substring(0,S)+" (Translated).epub",await Ar.saveAs(T,v),g&&g.classList.remove("disabled"),m&&m.classList.remove("none"),f&&(f.textContent="")}),Ie("#edit").addEventListener("click",b=>{b.preventDefault(),wn||alert("Load failed"),Cy()});let u=(n.metadata||{}).title||"Unknown",p=document.querySelector("#bookTitle");p.textContent=u;let d=!1,h=0;for(let b=0;b<r.length;b++){let m=r[b].id,f=await n.loadText(m),y=new DOMParser().parseFromString(f,"application/xhtml+xml"),w=document.createElement("div");w.classList.add("flex"),w.classList.add("justify-center"),w.classList.add("items-center"),i.append(w);let E=document.createElement("h2");E.classList.add("notranslate"),E.innerText=m,w.append(E);let _=document.createElement("span");_.dataset.type="iframe-title",_.classList.add("notranslate"),_.innerText="",w.append(_);let T=document.createElement("iframe");T.setAttribute("id",m),T.setAttribute("width","80%"),T.setAttribute("height","400px"),T.srcdoc=y.documentElement.outerHTML,i.append(T),T.onload=()=>{if(h++,h===r.length){d=!0,Ie("#progress").classList.add("none"),setTimeout(()=>{let R=document.createElement("blockquote");R.classList.add("notranslate");let D=`<p class="notranslate">1. Click on the Immersive Translate extension popup translation button to start translating.<br>\u9700\u8981\u624B\u52A8\u70B9\u51FB\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u6269\u5C55/\u811A\u672C\u6D6E\u7A97\u7684\u7FFB\u8BD1\u6309\u94AE\u5F00\u59CB\u7FFB\u8BD1\u3002<br><br>2. If the Epub contains images, it's fine for the edit box below not to show the images, the exported Epub will contain the images.<br>\u5982\u679C Epub \u91CC\u5305\u542B\u56FE\u7247\uFF0C\u4E0B\u9762\u7684\u7F16\u8F91\u6846\u4E0D\u663E\u793A\u56FE\u7247\u662F\u6B63\u5E38\u7684\uFF0C\u5BFC\u51FA\u540E\u7684 Epub \u91CC\u4F1A\u5305\u542B\u56FE\u7247\u3002<br><br>3. When the translation is finished, you can click the Edit button above to modify the translation.<br>\u7FFB\u8BD1\u5B8C\u6210\u540E\uFF0C\u4F60\u53EF\u4EE5\u70B9\u51FB\u4E0A\u65B9\u7684\u7F16\u8F91\u6309\u94AE\u6765\u4FEE\u6539\u8BD1\u6587\u3002<br><br>4. When there is a translation error, you can click Retry All above, or click Show Original and translate again. Or the whole page can be refreshed and started again, because the translated part is always cached and no further requests will be sent.<br>\u5F53\u51FA\u73B0\u7FFB\u8BD1\u9519\u8BEF\u65F6\uFF0C\u53EF\u4EE5\u70B9\u51FB\u4E0A\u65B9\u7684\u91CD\u8BD5\u5168\u90E8\uFF0C\u6216\u8005\u70B9\u51FB\u6D4F\u89C8\u5668\u6269\u5C55\u56FE\u6807\u5148\u663E\u793A\u539F\u6587\uFF0C\u518D\u7FFB\u8BD1\u3002\u6216\u8005\u6574\u4E2A\u5237\u65B0\u9875\u9762\u91CD\u65B0\u6765\u8FC7\u4E5F\u884C\uFF0C\u56E0\u4E3A\u5DF2\u7FFB\u8BD1\u7684\u90E8\u5206\u603B\u662F\u6709\u7F13\u5B58\u7684\uFF0C\u4E0D\u4F1A\u518D\u53D1\u51FA\u8BF7\u6C42\u3002`,I=!1;try{let F=document.querySelector("meta[name='immersive-translate-meta']");if(F){let W=Go(F?.content||""),te=new TextDecoder().decode(W),j=JSON.parse(te);j&&j.isProUser&&(I=!0)}}catch{}I?D+=`<br><br>5. If you have additional needs, you can also purchase the Pro-only  <a
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
</p>`:D+="</p>";let N=document.querySelector("meta[name='immersive-translate-ebook-tips']");if(N){let F=N.getAttribute("content");F&&(D+=F)}R.innerHTML=Nr.sanitize(D),document.querySelector("#tips").append(R)},1e3),document.dispatchEvent(new CustomEvent("immersiveTranslateEbookLoaded"));let x=document.querySelectorAll("iframe"),S=0;x.forEach(R=>{let N=R.contentDocument.body.innerText.length;S+=N});let A=document.createElement("p");A.classList.add("notranslate"),A.innerText=`The book is about ${S} characters in total (\u672C\u4E66\u5927\u7EA6 ${S} \u4E2A\u5B57\u7B26)`,Ie("#stats").append(A)}};let v=b/r.length*100;document.getElementById("progressBar").value=v}}catch(n){alert(n.message),window.location.reload()}}#e(e){}},Gp=async t=>{document.body.removeChild(Ie("#drop-target"));let e=new _s;globalThis.reader=e,await e.open(t),Ie("#editor").classList.remove("none")},Ly=t=>t.preventDefault(),Dy=t=>{t.preventDefault();let e=Array.from(t.dataTransfer.items).find(n=>n.kind==="file");if(e){let n=e.webkitGetAsEntry();Gp(n.isFile?e.getAsFile():n).catch(r=>{})}},Vp=Ie("#drop-target");Vp.addEventListener("drop",Dy);Vp.addEventListener("dragover",Ly);Ie("#file-input").addEventListener("change",t=>Gp(t.target.files[0]).catch(e=>{}));Ie("#file-button").addEventListener("click",()=>Ie("#file-input").click());})();
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
