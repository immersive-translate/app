(()=>{var bg=Object.defineProperty;var yg=(e,t)=>{for(var n in t)bg(e,n,{get:t[n],enumerable:!0})};var te={BUILD_TIME:"2023-12-06T20:45:44.119Z",VERSION:"0.12.5",PROD:"1",REDIRECT_URL:"https://dash.immersivetranslate.com/auth-done/",PROD_API:"1",BETA:"0",IMMERSIVE_TRANSLATE_INJECTED_CSS:`:root {
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
`,IMMERSIVE_TRANSLATE_VIDEO_SUBTITLE_INJECT:'(()=>{var u="imt-subtitle-inject",c=class{from;to;constructor(e,s){this.from=e,this.to=s}sendMessages(e){globalThis.postMessage({type:u,to:this.to,from:this.from,action:e.action,data:e.data,id:e.id||new Date().getTime(),isAsync:!1})}sendAsyncMessages({action:e,data:s}){return new Promise(t=>{let n=new Date().getTime();globalThis.postMessage({type:u,to:this.to,from:this.from,action:e,data:s,id:n,isAsync:!0});let o=({data:a})=>{u===a.type&&a.id===n&&a.to===this.from&&(t(a.data),globalThis.removeEventListener("message",o))};globalThis.addEventListener("message",o)})}handleMessageOnce(e){return new Promise(s=>{let t=({data:n})=>{u===n.type&&n.action===e&&n.to===this.from&&(s(n.data),globalThis.removeEventListener("message",t))};globalThis.addEventListener("message",t)})}handleMessage(e,s){let t=({data:n})=>{u===n.type&&n.action===e&&n.to===this.from&&s(n)};return globalThis.addEventListener("message",t),()=>{globalThis.removeEventListener("message",t)}}handleMessages(e){let s=({data:t})=>{u===t.type&&t.to===this.from&&e(t)};return globalThis.addEventListener("message",s),()=>{globalThis.removeEventListener("message",s)}}},M=new c("content-script","inject"),l=new c("inject","content-script"),p={get(i,e,s){return e in i?(...t)=>{let n=i[e];return typeof n=="function"?n.apply(i,t):Reflect.get(i,e,s)}:t=>i.sendAsyncMessages({action:e,data:t})}},S=new Proxy(l,p),w=new Proxy(M,p);var r=class{content=S;config;constructor(e){this.config=e,l.handleMessages(async({action:s,id:t,data:n})=>{let o=this[s];if(!o)return;let a=o.apply(this,[n]);a instanceof Promise&&(a=await a),l.sendMessages({id:t,data:a})})}triggerSubtitle(e){}async translateSubtitle(e){let s=await this.content.requestSubtitle({url:e._url});if(s){let t;e.responseType=="arraybuffer"?t=new TextEncoder().encode(s).buffer:t=s,Object.defineProperty(e,"responseText",{value:t,writable:!1}),Object.defineProperty(e,"response",{value:t,writable:!1})}}translateSubtitleWithFetch(e){return this.content.requestSubtitle({fetchInfo:e})}async getVideoMeta(e){}isSubtitleRequest(e){return!this.config?.subtitleUrlRegExp||!e?!1:new RegExp(this.config.subtitleUrlRegExp).test(e||"")}};var d=class extends r{timer=null;triggerSubtitle({force:e}){setTimeout(()=>{if(this.config?.subtitleButtonSelector){let s=document.querySelector(this.config.subtitleButtonSelector);if(s){let t=s.getAttribute("aria-pressed")==="true";t&&e?(s.click(),setTimeout(()=>{s.click()},100)):t||s.click();return}}if(this.config?.videoPlayerSelector){let s=document.querySelector(this.config.videoPlayerSelector);s.toggleSubtitles(),setTimeout(()=>{s.toggleSubtitles()},100)}},1e3)}async getVideoMeta(){try{let e=await fetch(globalThis.location.href);if(!e.ok)throw new Error("request subtitle error");let s=await e.text(),n=[...new window.DOMParser().parseFromString(s,"text/html").body.querySelectorAll(":scope > script")].find(o=>o.textContent?.includes("ytInitialPlayerResponse"));return new Function(`const window = {}; ${n?.textContent}; return ytInitialPlayerResponse;`)()}catch{return null}}};var g=class extends r{timer=null;videoMeta={};constructor(e){super(e),this.hookJSON()}hookJSON(){let e=JSON.parse;JSON.parse=s=>{let t=e(s);return t&&t.result&&t.result.timedtexttracks&&t.result.movieId&&(this.videoMeta[t.result.movieId]=t.result),t}}getVideoMeta(e){return this.videoMeta[e]}};var f=class extends r{timer=null;videoMeta={};constructor(e){super(e),this.hookJSON()}hookJSON(){let e=JSON.parse;JSON.parse=s=>{let t=e(s);return t?.asset?.captions?.length?this.videoMeta[t.id]=t?.asset:t?.previews&&t?.course&&t?.previews?.forEach(n=>{this.videoMeta[n.id]=n}),t}}getVideoMeta(e){return this.videoMeta[e]}};async function v(){let i=await l.sendAsyncMessages({action:"getConfig"});if(!i)return;let s={youtube:d,netflix:g,webvtt:r,khanacademy:r,bilibili:r,udemy:f}[i.type||""];if(!s)return;let t=new s(i);x(t,i)}h();v();function x(i,e){if(e.hookType==="xhr"){let s=XMLHttpRequest.prototype.open,t=XMLHttpRequest.prototype.send,n=function(){return this._url=arguments[1],s.apply(this,arguments)},o=async function(){return i.isSubtitleRequest(this._url)?(await h(),await i.translateSubtitle(this),t.apply(this,arguments)):t.apply(this,arguments)};Object.defineProperty(XMLHttpRequest.prototype,"open",{value:n,writable:!0}),Object.defineProperty(XMLHttpRequest.prototype,"send",{value:o,writable:!0})}else if(e.hookType==="fetch"){let s=globalThis.fetch;globalThis.fetch=async function(t,n){let o=typeof t=="string"?t:t.url;if(!i.isSubtitleRequest(o))return s(t,n);await h();let y;typeof t=="string"?y={url:t,method:"GET",headers:{}}:y=await R(t);let m=await i.translateSubtitleWithFetch(JSON.stringify({input:y,options:n}));return m?new Response(m):s(t,n)}}}var b=!1;async function h(){return b||(await l.handleMessageOnce("contentReady"),b=!0),b}function R(i){let e={url:i.url,method:i.method,headers:Object.fromEntries(i.headers.entries())};if(i.body)if(i.body instanceof FormData){let s={};for(let[t,n]of i.body.entries())s[t]=n;e.body=s}else return i.text().then(s=>(e.body=s,e));return Promise.resolve(e)}})();\n',PDF_VIEWER_URL:"https://app.immersivetranslate.com/pdf/index.html",OPTIONS_URL:"https://dash.immersivetranslate.com/",EBOOK_VIEWER_URL:"https://app.immersivetranslate.com/ebook/",EBOOK_BUILDER_URL:"https://app.immersivetranslate.com/ebook/make/",SUBTITLE_BUILDER_URL:"https://app.immersivetranslate.com/subtitle/",HTML_VIEWER_URL:"https://app.immersivetranslate.com/html/",SHARE_DRAFT_URL:"https://immersivetranslate.com/preview",MOCK:"0",DEBUG:"0",IMMERSIVE_TRANSLATE_USERSCRIPT:"1",INSTALL_FROM:"dev"};var vg=(e,t)=>e.map((n,r,i)=>t(n,r,i)?r:null).filter(n=>n!=null),Sc=(e,t)=>[-1,...t,e.length].reduce(({xs:n,a:r},i)=>({xs:n?.concat([e.slice(r+1,i)])??[],a:i}),{}).xs,xg=(e,t)=>e.slice(0,-1).concat([e[e.length-1].concat(t[0])]).concat(t.slice(1)),io=/\d/,Ar=/^epubcfi\((.*)\)$/,_c=e=>e.replace(/[\^[\](),;=]/g,"^$&"),_g=e=>Ar.test(e)?e:`epubcfi(${e})`,Tg=e=>e.match(Ar)?.[1]??e,Sg=e=>(...t)=>`epubcfi(${e(...t.map(n=>n.match(Ar)?.[1]??n))})`,Ac=Sg((...e)=>e.join("!")),Ag=e=>{let t=[],n,r,i="",a=s=>(t.push(s),n=null,i=""),o=s=>(i+=s,r=!1);for(let s of Array.from(e.trim()).concat("")){if(s==="^"&&!r){r=!0;continue}if(n==="!")a(["!"]);else if(n===",")a([","]);else if(n==="/"||n===":")if(io.test(s)){o(s);continue}else a([n,parseInt(i)]);else if(n==="~")if(io.test(s)||s==="."){o(s);continue}else a(["~",parseFloat(i)]);else if(n==="@"){if(s===":"){a(["@",parseFloat(i)]),n="@";continue}if(io.test(s)||s==="."){o(s);continue}else a(["@",parseFloat(i)])}else if(n==="["){s===";"&&!r?(a(["[",i]),n=";"):s===","&&!r?(a(["[",i]),n="["):s==="]"&&!r?a(["[",i]):o(s);continue}else if(n?.startsWith(";")){s==="="&&!r?(n=`;${i}`,i=""):s===";"&&!r?(a([n,i]),n=";"):s==="]"&&!r?a([n,i]):o(s);continue}(s==="/"||s===":"||s==="~"||s==="@"||s==="["||s==="!"||s===",")&&(n=s)}return t},Ec=(e,t)=>vg(e,([n])=>n===t),Eg=e=>{let t=[],n;for(let[r,i]of e){if(r==="/")t.push({index:i});else{let a=t[t.length-1];if(r===":")a.offset=i;else if(r==="~")a.temporal=i;else if(r==="@")a.spatial=(a.spatial??[]).concat(i);else if(r===";s")a.side=i;else if(r==="[")if(n==="/"&&i)a.id=i;else{a.text=(a.text??[]).concat(i);continue}}n=r}return t},Tc=e=>Sc(e,Ec(e,"!")).map(Eg),an=e=>{let t=Ag(Tg(e)),n=Ec(t,",");if(!n.length)return Tc(t);let[r,i,a]=Sc(t,n).map(Tc);return{parent:r,start:i,end:a}},kg=({index:e,id:t,offset:n,temporal:r,spatial:i,text:a,side:o})=>{let s=o?`;s=${o}`:"";return`/${e}`+(t?`[${_c(t)}${s}]`:"")+(n!=null&&e%2?`:${n}`:"")+(r?`~${r}`:"")+(i?`@${i.join(":")}`:"")+(a||!t&&o?"["+(a?.map(_c)?.join(",")??"")+s+"]":"")},kc=e=>e.parent?[e.parent,e.start,e.end].map(kc).join(","):e.map(t=>t.map(kg).join("")).join("!"),wi=e=>_g(kc(e)),Kt=(e,t)=>typeof e=="string"?wi(Kt(an(e),t)):e.parent?xg(e.parent,e[t?"end":"start"]):e,Cg=(e,t)=>{typeof e=="string"&&(e=an(e)),typeof t=="string"&&(t=an(t)),e=Kt(e),t=Kt(t,!0);let n=e[e.length-1],r=t[t.length-1],i=[],a=[],o=[],s=!0,l=Math.max(n.length,r.length);for(let u=0;u<l;u++){let f=n[u],d=r[u];s&&=f?.index===d?.index&&!f?.offset&&!d?.offset,s?i.push(f):(f&&a.push(f),d&&o.push(d))}let c=e.slice(0,-1).concat([i]);return wi({parent:c,start:[a],end:[o]})},Sr=(e,t)=>{if(typeof e=="string"&&(e=an(e)),typeof t=="string"&&(t=an(t)),e.start||t.start)return Sr(Kt(e),Kt(t))||Sr(Kt(e,!0),Kt(t,!0));for(let n=0;n<Math.max(e.length,t.length);n++){let r=e[n],i=t[n],a=Math.max(r.length,i.length)-1;for(let o=0;o<=a;o++){let s=r[o],l=i[o];if(!s)return-1;if(!l||s.index>l.index)return 1;if(s.index<l.index)return-1;if(o===a){if(s.offset>l.offset)return 1;if(s.offset<l.offset)return-1}}}return 0},ao=({nodeType:e})=>e===3||e===4,bi=({nodeType:e})=>e===1,so=e=>{let t=Array.from(e.childNodes).filter(n=>ao(n)||bi(n)).reduce((n,r)=>{let i=n[n.length-1];return i?ao(r)?Array.isArray(i)?i.push(r):ao(i)?n[n.length-1]=[i,r]:n.push(r):bi(i)?n.push(null,r):n.push(r):n.push(r),n},[]);return bi(t[0])&&t.unshift("first"),bi(t[t.length-1])&&t.push("last"),t.unshift("before"),t.push("after"),t},Lg=(e,t)=>e?so(e)[t]:null,oo=(e,t)=>{let{id:n}=t[t.length-1];if(n){let a=e.ownerDocument.getElementById(n);if(a)return{node:a,offset:0}}for(let{index:a}of t){let o=Lg(e,a);if(o==="first")return{node:e.firstChild??e};if(o==="last")return{node:e.lastChild??e};if(o==="before")return{node:e,before:!0};if(o==="after")return{node:e,after:!0};e=o}let{offset:r}=t[t.length-1];if(!Array.isArray(e))return{node:e,offset:r};let i=0;for(let a of e){let{length:o}=a.nodeValue;if(i+o>=r)return{node:a,offset:r-i};i+=o}},yi=(e,t)=>{let{parentNode:n,id:r}=e,i=so(n),a=i.findIndex(l=>Array.isArray(l)?l.some(c=>c===e):l===e),o=i[a];if(Array.isArray(o)){let l=0;for(let c of o)if(c===e){l+=t;break}else l+=c.nodeValue.length;t=l}let s={id:r,index:a,offset:t};return n!==e.ownerDocument.documentElement?yi(n).concat(s):[s]},Cc=e=>{let{startContainer:t,startOffset:n,endContainer:r,endOffset:i}=e,a=yi(t,n);if(e.collapsed)return wi([a]);let o=yi(r,i);return Cg([a],[o])},vi=(e,t)=>{let n=Kt(t),r=Kt(t,!0),i=e.documentElement,a=oo(i,n[0]),o=oo(i,r[0]),s=e.createRange();return a.before?s.setStartBefore(a.node):a.after?s.setStartAfter(a.node):s.setStart(a.node,a.offset),o.before?s.setEndBefore(o.node):o.after?s.setEndAfter(o.node):s.setEnd(o.node,o.offset),s},Lc=e=>{let t=[],{parentNode:n}=e[0],r=yi(n);for(let[i,a]of so(n).entries()){let o=e[t.length];a===o&&t.push(wi([r.concat({id:o.id,index:i})]))}return t},lo=(e,t)=>oo(e.documentElement,Kt(t)).node,co={fromIndex:e=>`/6/${(e+1)*2}`,toIndex:e=>e?.at(-1).index/2-1};var Og=e=>{let t=0,n=r=>{if(r.id=t++,r.subitems)for(let i of r.subitems)n(i)};for(let r of e)n(r);return e},Dc=e=>e.map(t=>t.subitems?.length?[t,Dc(t.subitems)].flat():t).flat(),Er=class{constructor({toc:t,ids:n,splitHref:r,getFragment:i}){Og(t);let a=Dc(t),o=new Map;for(let[l,c]of a.entries()){let[u,f]=r(c?.href)??[],d={fragment:f,item:c};o.has(u)?o.get(u).items.push(d):o.set(u,{prev:a[l-1],items:[d]})}let s=new Map;for(let[l,c]of n.entries())o.has(c)?s.set(c,o.get(c)):s.set(c,s.get(n[l-1]));this.ids=n,this.map=s,this.getFragment=i}getProgress(t,n){let r=this.ids[t],i=this.map.get(r);if(!i)return null;let{prev:a,items:o}=i;if(!o)return a;if(!n||o.length===1&&!o[0].fragment)return o[0].item;let s=n.startContainer.getRootNode();for(let[l,{fragment:c}]of o.entries()){let u=this.getFragment(s,c);if(u&&n.comparePoint(u,0)>0)return o[l-1]?.item??a}return o[o.length-1].item}},xi=class{constructor(t,n,r){this.sizes=t.map(i=>i.linear==="no"?0:i.size),this.sizePerLoc=n,this.sizePerTimeUnit=r,this.sizeTotal=this.sizes.reduce((i,a)=>i+a,0)}getProgress(t,n){let{sizes:r,sizePerLoc:i,sizePerTimeUnit:a,sizeTotal:o}=this,s=r[t]??0,c=r.slice(0,t).reduce((d,p)=>d+p,0)+n*s,u=o-c,f=(1-n)*s;return{fraction:c/o,section:{current:t,total:r.length},location:{current:Math.floor(c/i),total:Math.ceil(o/i)},time:{section:f/a,total:u/a}}}getSection(t){let{sizes:n,sizeTotal:r}=this,i=t*r,a=-1,o=0,s=0;for(let[l,c]of n.entries()){let u=s+c;if(u>i){a=l,o=(i-s)/c;break}s=u}return[a,o]}};var Yn=e=>document.createElementNS("http://www.w3.org/2000/svg",e),_i=class{#e=Yn("svg");#t=new Map;constructor(){Object.assign(this.#e.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none"});let t=matchMedia("(prefers-color-scheme: dark)"),n=()=>this.#e.style.mixBlendMode=t.matches?"normal":"multiply";t.addEventListener("change",n),n()}get element(){return this.#e}add(t,n,r,i){this.#t.has(t)&&this.remove(t),typeof n=="function"&&(n=n(this.#e.getRootNode()));let a=n.getClientRects(),o=r(a,i);this.#e.append(o),this.#t.set(t,{range:n,draw:r,options:i,element:o,rects:a})}remove(t){this.#t.has(t)&&(this.#e.removeChild(this.#t.get(t).element),this.#t.delete(t))}redraw(){for(let t of this.#t.values()){let{range:n,draw:r,options:i,element:a}=t;this.#e.removeChild(a);let o=n.getClientRects(),s=r(o,i);this.#e.append(s),t.element=s,t.rects=o}}hitTest({x:t,y:n}){let r=Array.from(this.#t.entries());for(let i=r.length-1;i>=0;i--){let[a,o]=r[i];for(let{left:s,top:l,right:c,bottom:u}of o.rects)if(l<=n&&s<=t&&u>n&&c>t)return[a,o.range]}return[]}static underline(t,n={}){let{color:r="red",width:i=2}=n,a=Yn("g");a.setAttribute("fill",r);for(let{left:o,bottom:s,width:l}of t){let c=Yn("rect");c.setAttribute("x",o),c.setAttribute("y",s-i),c.setAttribute("height",i),c.setAttribute("width",l),a.append(c)}return a}static highlight(t,n={}){let{color:r="red"}=n,i=Yn("g");i.setAttribute("fill",r),i.setAttribute("fill-opacity",.3);for(let{left:a,top:o,height:s,width:l}of t){let c=Yn("rect");c.setAttribute("x",a),c.setAttribute("y",o),c.setAttribute("height",s),c.setAttribute("width",l),i.append(c)}return i}static copyImage([t],n={}){let{src:r}=n,i=Yn("image"),{left:a,top:o,height:s,width:l}=t;return i.setAttribute("href",r),i.setAttribute("x",a),i.setAttribute("y",o),i.setAttribute("height",s),i.setAttribute("width",l),i}};var Ti=class{#e=new Map;#t=new Map;#n=new Map;#r=new Map;constructor({resolve:t,compare:n,onAdd:r,onDelete:i,onUpdate:a}){this.resolve=t,this.compare=n,this.onAdd=r,this.onDelete=i,this.onUpdate=a}async add(t,n){let{value:r}=t;if(this.#t.has(r))return;let{index:i,anchor:a}=await this.resolve(r);if(this.#t.set(r,t),this.#r.set(r,i),this.#n.set(r,a),this.#e.has(i)){let o=this.#e.get(i);if(n)o.push(t),this.onAdd?.(t,i,o.length-1);else{let s=0;for(let l=0;l<o.length;l++){let c=o[l].value;if(this.compare(r,c)<=0)break;s=l+1}o.splice(s,0,t),this.onAdd?.(t,i,s)}}else this.#e.set(i,[t]),this.onAdd?.(t,i,0)}update(t){let n=this.#r.get(t.value),r=this.#t.get(t.value);Object.assign(r,t),this.onUpdate?.(t,n)}delete(t){let n=this.#r.get(t),r=this.#e.get(n),i=r.findIndex(a=>a.value===t);r.splice(i,1),this.#t.delete(t),this.#r.delete(t),this.#n.delete(t),this.onDelete?.(t,n,i)}getByIndex(t){return this.#e.get(t)??[]}getAnchor(t){return this.#n.get(t)}};var Dg=e=>new Promise(t=>setTimeout(t,e)),Rg=(e,t,n)=>{let r;return(...i)=>{let a=()=>{r=null,n||e(...i)},o=n&&!r;r&&clearTimeout(r),r=setTimeout(a,t),o&&e(...i)}},Pg=e=>{if(!e?.collapsed)return e;let{endOffset:t,endContainer:n}=e;if(n.nodeType===1)return n;if(t+1<n.length)e.setEnd(n,t+1);else if(t>1)e.setStart(n,t-1);else return n.parentNode;return e},Si=(e,t,n,r=n)=>{let i=e.createRange();return i.setStart(t,n),i.setEnd(t,r),i},Ai=(e,t,n,r=0,i=t.nodeValue.length)=>{if(i-r===1)return n(Si(e,t,r),Si(e,t,i))<0?r:i;let a=Math.floor(r+(i-r)/2),o=n(Si(e,t,r,a),Si(e,t,a,i));return o<0?Ai(e,t,n,r,a):o>0?Ai(e,t,n,a,i):a},{SHOW_ELEMENT:Ng,SHOW_TEXT:Mg,SHOW_CDATA_SECTION:Ig,FILTER_ACCEPT:Rc,FILTER_REJECT:Pc,FILTER_SKIP:Nc}=NodeFilter,Fg=Ng|Mg|Ig,Bg=(e,t,n,r)=>{let i=d=>{let p=d.localName?.toLowerCase();if(p==="script"||p==="style")return Pc;if(d.nodeType===1){let{left:b,right:g}=r(d.getBoundingClientRect());if(g<t||b>n)return Pc;if(b>=t&&g<=n)return Rc}else{if(!d.nodeValue?.trim())return Nc;let b=e.createRange();b.selectNodeContents(d);let{left:g,right:h}=r(b.getBoundingClientRect());if(h>=t&&g<=n)return Rc}return Nc},a=e.createTreeWalker(e.body,Fg,{acceptNode:i}),o=[];for(let d=a.nextNode();d;d=a.nextNode())o.push(d);let s=o[0]??e.body,l=o[o.length-1]??s,c=s.nodeType===1?0:Ai(e,s,(d,p)=>{let b=r(d.getBoundingClientRect()),g=r(p.getBoundingClientRect());return b.right<t&&g.left>t?0:g.left>t?-1:1}),u=l.nodeType===1?0:Ai(e,l,(d,p)=>{let b=r(d.getBoundingClientRect()),g=r(p.getBoundingClientRect());return b.right<n&&g.left>n?0:g.left>n?-1:1}),f=e.createRange();return f.setStart(s,c),f.setEnd(l,u),f},zg=e=>{let{defaultView:t}=e,{writingMode:n,direction:r}=t.getComputedStyle(e.body),i=n==="vertical-rl"||n==="vertical-lr",a=e.body.dir==="rtl"||r==="rtl"||e.documentElement.dir==="rtl";return{vertical:i,rtl:a}},Ug=e=>{let t=e.defaultView.getComputedStyle(e.body);return t.backgroundColor==="rgba(0, 0, 0, 0)"&&t.backgroundImage==="none"?e.defaultView.getComputedStyle(e.documentElement).background:t.background},uo=class{#e=document.createElement("div");#t=document.createElement("iframe");#n=document.createRange();#r;#i=!1;#a=!1;#o=!0;#s;#l={};constructor({container:t}){this.container=t,this.#t.classList.add("filter"),this.#e.append(this.#t),Object.assign(this.#e.style,{position:"relative",overflow:"hidden",flex:"0 0 auto",width:"100%",height:"100%"}),Object.assign(this.#t.style,{overflow:"hidden",border:"0",display:"none",width:"100%",height:"100%"}),this.#t.setAttribute("sandbox","allow-same-origin allow-scripts"),this.#t.setAttribute("scrolling","no")}get element(){return this.#e}get document(){return this.#t.contentDocument}async load(t,n,r){if(typeof t!="string")throw new Error(`${t} is not string`);return new Promise(i=>{this.#t.addEventListener("load",()=>{let a=this.document;n?.(a),this.#t.style.display="block";let{vertical:o,rtl:s}=zg(a),l=Ug(a);this.#t.style.display="none",this.#i=o,this.#a=s,this.#n.selectNodeContents(a.body);let c=r?.({vertical:o,rtl:s,background:l});this.#t.style.display="block",this.render(c),new ResizeObserver(()=>this.expand()).observe(a.body),i()},{once:!0}),this.#t.src=t})}render(t){this.#o=t.flow!=="scrolled",this.#l=t,this.#o?this.columnize(t):this.scrolled(t)}scrolled({gap:t,columnWidth:n}){let r=this.#i,i=this.document;Object.assign(i.documentElement.style,{boxSizing:"border-box",padding:r?`${t}px 0`:`0 ${t}px`,columnWidth:"auto",height:"auto",width:"auto"}),Object.assign(i.body.style,{[r?"maxHeight":"maxWidth"]:`${n}px`,margin:"auto"}),this.setImageSize(),this.expand()}columnize({width:t,height:n,gap:r,columnWidth:i}){let a=this.#i;this.#s=a?n:t;let o=this.document;Object.assign(o.documentElement.style,{boxSizing:"border-box",columnWidth:`${i}px`,columnGap:`${r}px`,columnFill:"auto",...a?{width:`${t}px`}:{height:`${n}px`},padding:a?`${r/2}px 0`:`0 ${r/2}px`,overflow:"hidden",overflowWrap:"anywhere",position:"static",border:"0",margin:"0",maxHeight:"none",maxWidth:"none",minHeight:"none",minWidth:"none",webkitLineBoxContain:"block glyphs replaced"}),Object.assign(o.body.style,{maxHeight:"none",maxWidth:"none",margin:"0"}),this.setImageSize(),this.expand()}setImageSize(){let{width:t,height:n,margin:r}=this.#l,i=this.#i,a=this.document;for(let o of a.body.querySelectorAll("img, svg, video")){let{maxHeight:s,maxWidth:l}=a.defaultView.getComputedStyle(o);Object.assign(o.style,{maxHeight:i?s!=="none"&&s!=="0px"?s:"100%":`${n-r*2}px`,maxWidth:i?`${t-r*2}px`:l!=="none"&&l!=="0px"?l:"100%",objectFit:"contain",pageBreakInside:"avoid",breakInside:"avoid",boxSizing:"border-box"})}}expand(){if(this.#o){let t=this.#i?"height":"width",n=this.#i?"width":"height",r=this.#n.getBoundingClientRect()[t],a=Math.ceil(r/this.#s)*this.#s;this.#e.style.padding="0",this.#t.style[t]=`${a}px`,this.#e.style[t]=`${a}px`,this.#t.style[n]="100%",this.#e.style[n]="100%",this.document&&(this.document.documentElement.style[t]=`${a}px`),this.#r&&(this.#r.element.style.margin="0",this.#r.element.style[t]=`${a}px`,this.#r.redraw())}else{let t=this.#i?"width":"height",n=this.#i?"height":"width",a=this.document?.documentElement?.getBoundingClientRect()?.[t],{margin:o}=this.#l,s=this.#i?`0 ${o}px`:`${o}px 0`;this.#e.style.padding=s,this.#t.style[t]=`${a}px`,this.#e.style[t]=`${a}px`,this.#t.style[n]="100%",this.#e.style[n]="100%",this.#r&&(this.#r.element.style.margin=s,this.#r.element.style[t]=`${a}px`,this.#r.redraw())}}set overlayer(t){this.#r=t,this.#e.append(t.element)}get overlayer(){return this.#r}},Ei=class{#e=document.createElement("div");#t=document.createElement("div");#n;#r=!1;#i=!1;#a=-1;#o=0;#s=!1;#l=new WeakMap;layout={margin:48,gap:40,maxColumnWidth:700};constructor({book:t,onLoad:n,onRelocated:r,createOverlayer:i}){this.sections=t.sections,this.onLoad=n,this.onRelocated=r,this.createOverlayer=i,Object.assign(this.#e.style,{boxSizing:"border-box",width:"100%",height:"100%",position:"absolute"}),this.#e.append(this.#t),Object.assign(this.#t.style,{width:"100%",height:"100%"}),new ResizeObserver(()=>this.render()).observe(this.#e),this.#t.addEventListener("scroll",Rg(()=>{this.scrolled&&this.#b("scroll")},250))}get element(){return this.#e}#d(){return this.#n&&this.#t.removeChild(this.#n.element),this.#n=new uo({container:this.#e}),this.#t.append(this.#n.element),this.#n}#c({vertical:t,rtl:n,background:r}){this.#r=t,this.#i=n,this.#e.style.background=r;let{flow:i,margin:a,gap:o,maxColumnWidth:s}=this.layout;if(i==="scrolled"){this.#e.setAttribute("dir",t?"rtl":"ltr"),this.#e.style.padding="0",this.#t.style.overflow="scroll";let g=this.layout.maxColumnWidth;return{flow:i,margin:a,gap:o,columnWidth:g}}let{width:l,height:c}=this.#t.getBoundingClientRect(),u=t?c:l,f=Math.ceil(u/s),d=u/f-o;this.#e.setAttribute("dir",n?"rtl":"ltr");let p=`${t?o:o/2}px`,b=`${t?a-o/2:a}px`;return this.#e.style.padding=`${b} ${p}`,this.#t.style.overflow="hidden",{height:c,width:l,margin:a,gap:o,columnWidth:d}}render(){this.#n&&(this.#n.render(this.#c({vertical:this.#r,rtl:this.#i})),this.#g())}get scrolled(){return this.layout.flow==="scrolled"}get scrollProp(){let{scrolled:t}=this;return this.#r?t?"scrollLeft":"scrollTop":t?"scrollTop":"scrollLeft"}get sideProp(){let{scrolled:t}=this;return this.#r?t?"width":"height":t?"height":"width"}get size(){return this.#t.getBoundingClientRect()[this.sideProp]}get viewSize(){return this.#n.element.getBoundingClientRect()[this.sideProp]}get start(){return Math.abs(this.#t[this.scrollProp])}get end(){return this.start+this.size}get page(){return Math.floor((this.start+this.end)/2/this.size)}get pages(){return Math.round(this.viewSize/this.size)}#u(){if(this.scrolled){let n=this.viewSize,r=this.layout.margin;return this.#r?({left:i,right:a})=>({left:n-a-r,right:n-i-r}):({top:i,bottom:a})=>({left:i+r,right:a+r})}let t=this.pages*this.size;return this.#i?({left:n,right:r})=>({left:t-r,right:t-n}):this.#r?({top:n,bottom:r})=>({left:n,right:r}):n=>n}async#p(t,n){if(this.scrolled){let i=this.#u()(t).left;return this.#f(i,n)}let r=this.#u()(t).left+this.layout.margin/2;return this.#h(Math.floor(r/this.size),n)}async#f(t,n){let r=this.#t,{scrollProp:i}=this;if(r[i]===t){this.#b(n);return}this.scrolled&&this.#r&&(t=-t),r[i]=t,this.#b(n)}async#h(t,n){let r=this.size*(this.#i?-t:t);return this.#f(r,n)}async#g(t){let n=Pg(this.#o).getBoundingClientRect?.();if(n){await this.#p(n,"anchor"),t&&this.#_();return}if(this.scrolled){await this.#f(this.#o*this.viewSize,"anchor");return}let{pages:r}=this;if(!r)return;let i=Math.round(this.#o*(r-1));await this.#h(i,"anchor")}#_(){let{defaultView:t}=this.#n.document;if(this.#o instanceof t.Range){let n=t.getSelection();n.removeAllRanges(),n.addRange(this.#o)}}#T(){return Bg(this.#n.document,this.start,this.end,this.#u(),this.scrolled)}#b(t){let n=this.#T();t!=="anchor"&&(this.#o=n);let r=this.#a;this.scrolled?this.onRelocated?.(n,r,this.end/this.viewSize):this.pages>0&&this.onRelocated?.(n,r,(this.page+1)/this.pages)}async#w(t){let{index:n,src:r,anchor:i,onLoad:a,select:o}=await t;if(this.#a=n,r){let s=this.#d(),l=f=>{if(f.head){let d=f.createElement("style");f.head.append(d),this.#l.set(f,d)}a?.(f,n)},c=this.#c.bind(this);await s.load(r,l,c);let u=this.createOverlayer?.(s.document,n);u&&(s.overlayer=u),this.#n=s}this.#o=(typeof i=="function"?i(this.#n.document):i)??0,await this.#g(o)}#v(t){return t>-1&&t<this.pages}scrollPrev(){if(!this.#n)return null;if(this.scrolled)return this.start>0?this.#f(Math.max(0,this.start-this.size)):null;let t=this.page-1;return this.#v(t)?this.#h(t):null}scrollNext(){if(!this.#n)return null;if(this.scrolled)return this.viewSize-this.end>60?this.#f(Math.min(this.viewSize,this.end)):null;let t=this.page+1;return this.#v(t)?this.#h(t):null}#x(t){return t>=0&&t<=this.sections.length-1}async#y(t,n,r){if(this.#s)return;r&&(this.#s=!0);let i=t?.();if(i)await i;else{let{index:a,anchor:o,select:s}=await n;if(!this.#x(a))return this.#s=!1,null;if(a===this.#a)await this.#w({index:a,anchor:o,select:s});else{let l=this.#a,c=(...u)=>{this.sections[l]?.unload?.(),this.onLoad?.(...u)};await this.#w(Promise.resolve(this.sections[a].load()).then(u=>({index:a,src:u,anchor:o,onLoad:c,select:s})).catch(u=>({})))}}r&&(await Dg(100),this.#s=!1)}async goTo(t){return this.#y(null,t)}#m(t){for(let n=this.#a+t;this.#x(n);n+=t)if(this.sections[n]?.linear!=="no")return n}prev(){let t=this.#m(-1);return this.#y(()=>this.scrollPrev(),{index:t,anchor:()=>1},!0)}next(){let t=this.#m(1);return this.#y(()=>this.scrollNext(),{index:t},!0)}prevSection(){return this.goTo({index:this.#m(-1)})}nextSection(){return this.goTo({index:this.#m(1)})}firstSection(){let t=this.sections.findIndex(n=>n.linear!=="no");return this.goTo({index:t})}lastSection(){let t=this.sections.findLastIndex(n=>n.linear!=="no");return this.goTo({index:t})}getOverlayer(){if(this.#n)return{index:this.#a,overlayer:this.#n.overlayer,doc:this.#n.document}}setStyle(t){let n=this.#l.get(this.#n?.document);n&&(n.textContent=t)}async#S(t,n){this.#o=t,await this.#g(n)}};var Mc=e=>e?.split(/[,;\s]/)?.filter(t=>t)?.map(t=>t.split("=").map(n=>n.trim())),jg=(e,t)=>{if(e.documentElement.nodeName==="svg"){let[,,i,a]=e.documentElement.getAttribute("viewBox")?.split(/\s/)??[];return{width:i,height:a}}let n=Mc(e.querySelector('meta[name="viewport"]')?.getAttribute("content"));if(n)return Object.fromEntries(n);if(typeof t=="string")return Mc(t);if(t)return t;let r=e.querySelector("img");return r?{width:r.naturalWidth,height:r.naturalHeight}:{width:1e3,height:2e3}},fo=class{#e=document.createElement("div");defaultViewport;spread;#t=!1;#n;#r;#i;#a;constructor(){Object.assign(this.#e.style,{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}),new ResizeObserver(()=>this.render()).observe(this.#e)}get element(){return this.#e}get side(){return this.#a}async#o(t){let n=document.createElement("div"),r=document.createElement("iframe");return n.append(r),Object.assign(r.style,{border:"0",display:"none",overflow:"hidden"}),r.setAttribute("scrolling","no"),r.classList.add("filter"),this.#e.append(n),t?new Promise(i=>{let a=()=>{r.removeEventListener("load",a),this.onLoad?.(r);let o=r.contentDocument,{width:s,height:l}=jg(o,this.defaultViewport);i({element:n,iframe:r,width:parseFloat(s),height:parseFloat(l)})};r.addEventListener("load",a),r.src=t}):{blank:!0,element:n,iframe:r}}render(t=this.#a){if(!t)return;let n=this.#n??{},r=this.#i??this.#r,i=t==="left"?n:r,{width:a,height:o}=this.#e.getBoundingClientRect(),s=this.spread!=="both"&&this.spread!=="portrait"&&o>a;this.#t=s;let l=n.width??r.width,c=n.height??r.height,u=s?Math.min(a/(i.width??l),o/(i.height??c)):Math.min(a/((n.width??l)+(r.width??l)),o/Math.max(n.height??c,r.height??c)),f=d=>{let{element:p,iframe:b,width:g,height:h}=d;Object.assign(b.style,{width:`${g}px`,height:`${h}px`,transform:`scale(${u})`,transformOrigin:"top left",display:"block"}),Object.assign(p.style,{width:`${(g??l)*u}px`,height:`${(h??c)*u}px`,overflow:"hidden",display:"block"}),s&&d!==i&&(p.style.display="none")};this.#i?f(this.#i):(f(n),f(r))}async showSpread({left:t,right:n,center:r,side:i}){this.#e.replaceChildren(),this.#n=null,this.#r=null,this.#i=null,r?(this.#i=await this.#o(r),this.#a="center",this.render()):(this.#n=await this.#o(t),this.#r=await this.#o(n),this.#a=i,this.render())}goLeft(){if(!this.#i){if(this.#n?.blank)return!0;if(this.#t&&this.#n?.element?.style?.display==="none")return this.#r.element.style.display="none",this.#n.element.style.display="block",this.#a="left",!0}}goRight(){if(!this.#i){if(this.#r?.blank)return!0;if(this.#t&&this.#r?.element?.style?.display==="none")return this.#n.element.style.display="none",this.#r.element.style.display="block",this.#a="right",!0}}},ki=class{#e;#t=-1;#n=new fo;constructor({book:t,onLoad:n,onRelocated:r}){this.book=t,this.onLoad=n,this.onRelocated=r;let{rendition:i}=t;this.#n.spread=i?.spread,this.#n.defaultViewport=i?.viewport;let a=t.dir==="rtl",o=!a;this.rtl=a,i?.spread==="none"?this.#e=t.sections.map(s=>({center:s})):this.#e=t.sections.reduce((s,l)=>{let c=s[s.length-1],{linear:u,pageSpread:f}=l;if(u==="no")return s;let d=()=>{let p={};return s.push(p),p};if(f==="center")d().center=l;else if(f==="left"){let p=c.center||c.left||o?d():c;p.left=l}else if(f==="right"){let p=c.center||c.right||a?d():c;p.right=l}else o?c.center||c.right?d().left=l:c.left?c.right=l:c.left=l:c.center||c.left?d().right=l:c.right?c.left=l:c.right=l;return s},[{}])}get element(){return this.#n.element}get index(){let t=this.#e[this.#t],n=t?.center??(this.#n.side==="left"?t.left??t.right:t.right??t.left);return this.book.sections.indexOf(n)}getSpreadOf(t){let n=this.#e;for(let r=0;r<n.length;r++){let{left:i,right:a,center:o}=n[r];if(i===t)return{index:r,side:"left"};if(a===t)return{index:r,side:"right"};if(o===t)return{index:r,side:"center"}}}async goToSpread(t,n){if(t<0||t>this.#e.length-1)return;if(t===this.#t){this.#n.render(n);return}this.#t=t;let r=this.#e[t];if(r.center){let i=await r.center?.load?.();await this.#n.showSpread({center:i})}else{let i=await r.left?.load?.(),a=await r.right?.load?.();await this.#n.showSpread({left:i,right:a,side:n})}this.onRelocated?.(null,this.index,0,1)}async select(t){await this.goTo(t)}async goTo(t){let{book:n}=this,r=await t,i=n.sections[r.index];if(!i)return;let{index:a,side:o}=this.getSpreadOf(i);await this.goToSpread(a,o)}async next(){if(this.rtl?this.#n.goLeft():this.#n.goRight())this.onRelocated?.(null,this.index,0,1);else return this.goToSpread(this.#t+1,this.rtl?"right":"left")}async prev(){if(this.rtl?this.#n.goRight():this.#n.goLeft())this.onRelocated?.(null,this.index,0,1);else return this.goToSpread(this.#t-1,this.rtl?"left":"right")}};var Ic=e=>e.replace(/\s+/g," "),$g=(e,{startIndex:t,startOffset:n,endIndex:r,endOffset:i})=>{let a=e[t],o=e[r],s=a===o?a.slice(n,i):a.slice(n)+e.slice(a+1,o).join("")+o.slice(0,i),l=Ic(a.slice(0,n)).trimStart(),c=Ic(o.slice(i)).trimEnd(),u=l.length<50?"":"\u2026",f=c.length<50?"":"\u2026",d=`${u}${l.slice(-50)}`,p=`${c.slice(0,50)}${f}`;return{pre:d,match:s,post:p}},Hg=function*(e,t,n={}){let{locales:r="en",granularity:i="word",sensitivity:a="base"}=n,o,s;try{o=new Intl.Segmenter(r,{usage:"search",granularity:i}),s=new Intl.Collator(r,{sensitivity:a})}catch{o=new Intl.Segmenter("en",{usage:"search",granularity:i}),s=new Intl.Collator("en",{sensitivity:a})}let l=Array.from(o.segment(t)).length,c=[],u=0,f=o.segment(e[u])[Symbol.iterator]();e:for(;u<e.length;){for(;c.length<l;){let{done:p,value:b}=f.next();if(p)if(u++,u<e.length){f=o.segment(e[u])[Symbol.iterator]();continue}else break e;let{index:g,segment:h}=b;if(/[^\p{Format}]/u.test(h)){if(/\s/u.test(h)){/\s/u.test(c[c.length-1]?.segment)||c.push({strIndex:u,index:g,segment:" "});continue}b.strIndex=u,c.push(b)}}let d=c.map(p=>p.segment).join("");if(s.compare(t,d)===0){let p=u,b=c[c.length-1],g=b.index+b.segment.length,h=c[0].strIndex,m=c[0].index,y={startIndex:h,startOffset:m,endIndex:p,endOffset:g};yield{range:y,excerpt:$g(e,y)}}c.shift()}},Fc=(e,t)=>{let{defalutLocale:n,matchCase:r,matchDiacritics:i,matchWholeWords:a}=t;return function*(o,s){let l=e(o,function*(c,u){for(let f of Hg(c,s,{locales:o.body.lang||o.documentElement.lang||n||"en",granularity:a?"word":"grapheme",sensitivity:i&&r?"variant":i&&!r?"accent":!i&&r?"case":"base"})){let{startIndex:d,startOffset:p,endIndex:b,endOffset:g}=f.range;f.range=u(d,p,b,g),yield f}});for(let c of l)yield c}};var Wg=function*(e,t){let n=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT|NodeFilter.SHOW_CDATA_SECTION,{FILTER_ACCEPT:r,FILTER_REJECT:i,FILTER_SKIP:a}=NodeFilter,o=f=>{let d=f.localName?.toLowerCase();return d==="script"||d==="style"?i:f.nodeType===1?a:r},s=e.createTreeWalker(e.body,n,{acceptNode:o}),l=[];for(let f=s.nextNode();f;f=s.nextNode())l.push(f);let c=l.map(f=>f.nodeValue),u=(f,d,p,b)=>{let g=e.createRange();return g.setStart(l[f],d),g.setEnd(l[p],b),g};for(let f of t(c,u))yield f};var Bc=Object.fromEntries(Array.from(Object.entries({isRef:["annoref","biblioref","glossref","noteref"],isLink:["backlink"],isNote:["annotation","note","footnote","endnote","rearnote"]}),([e,t])=>[e,n=>n.getAttributeNS("http://www.idpf.org/2007/ops","type")?.split(/s/)?.some(r=>t.includes(r))])),Ci=class{#e;#t;#n;#r;language="en";textDirection="";isCJK=!1;isFixedLayout=!1;annotations=new Ti({resolve:t=>this.resolveCFI(t),compare:Sr,onAdd:(t,n,r)=>{let i=this.#s(n);i&&this.#o(i.doc,i.overlayer,t);let a=this.#t.getProgress(n)?.label??"";this?.emit({type:"add-annotation",annotation:t,label:a,index:n,position:r})},onDelete:(t,n,r)=>{this.#s(n)?.overlayer?.remove(t),this?.emit({type:"delete-annotation",index:n,position:r})},onUpdate:(t,n)=>{let r=this.#s(n);r&&(r.overlayer.remove(t.value),this.#o(r.doc,r.overlayer,t))}});constructor(t,n){if(this.book=t,this.emit=n,t.metadata?.language)try{let r=t.metadata.language;t.metadata.language=Intl.getCanonicalLocales(r)[0];let i=typeof r=="string"?r:r[0],a=new Intl.Locale(i);this.isCJK=["zh","ja","kr"].includes(a.language),a.textInfo&&a.textInfo.direction&&(this.textDirection=a.textInfo.direction)}catch{}if(t.splitTOCHref&&t.getTOCFragment){let r=t.sections.map(o=>o.id);this.#e=new xi(t.sections,150,1600);let i=t.splitTOCHref.bind(t),a=t.getTOCFragment.bind(t);this.#t=new Er({toc:t.toc??[],ids:r,splitHref:i,getFragment:a}),this.#n=new Er({toc:t.pageList??[],ids:r,splitHref:i,getFragment:a})}}async display(){let t={book:this.book,onLoad:this.#a.bind(this),onRelocated:this.#i.bind(this),createOverlayer:this.#l.bind(this)};return this.isFixedLayout=this.book.rendition?.layout==="pre-paginated",this.isFixedLayout?this.renderer=new ki(t):this.renderer=new Ei(t),this.renderer.element}async init({lastLocation:t,annotations:n}){if(t){let r=this.resolveNavigation(t);r?await this.renderer.goTo(r):await this.renderer.next()}else await this.renderer.next();if(n){n.sort((r,i)=>Sr(r.value,i.value));for(let r of n)await this.annotations.add(r,!0)}}#i(t,n,r){if(!this.#e)return;let i=this.#e.getProgress(n,r),a=this.#t.getProgress(n,t),o=this.#n.getProgress(n,t),s=this.getCFI(n,t);this.emit?.({type:"relocated",...i,tocItem:a,pageItem:o,cfi:s})}#a(t,n){let{book:r}=this;t.documentElement.lang||=this.language,t.documentElement.dir||=this.isCJK?"":this.textDirection,this.book&&this.book._hash&&t.documentElement.setAttribute("data-immersive-translate-hash",this.book._hash),this.renderer.setStyle(this.#r);let i=r.sections[n];for(let a of t.querySelectorAll("a[href]"))a.addEventListener("click",o=>{o.preventDefault();let s=a.getAttribute("href"),l=i?.resolveHref?.(s)??s;if(r?.isExternal?.(l))this.emit?.({type:"external-link",uri:l});else if(Bc.isRef(a)){let{index:c,anchor:u}=r.resolveHref(l);Promise.resolve(r.sections[c].createDocument()).then(f=>[u(f),f.contentType]).then(([f,d])=>[f?.innerHTML,d,Bc.isNote(f)]).then(([f,d,p])=>f?this.emit?.({type:"reference",href:p?null:l,content:f,contentType:d,element:a}):null).catch(f=>{});return}else this.goTo(l)});this.emit?.({type:"loaded",doc:t,index:n})}#o(t,n,r){let{value:i}=r,a=this.annotations.getAnchor(i),o=t?a(t):a,[s,l]=this.emit({type:"draw-annotation",annotation:r});n.add(i,o,s,l)}#s(t){let n=this.renderer.getOverlayer();if(n.index===t)return n}#l(t,n){let r=new _i;for(let i of this.annotations.getByIndex(n))this.#o(t,r,i);return t.addEventListener("click",i=>{let[a,o]=r.hitTest(i);a&&this.emit?.({type:"show-annotation",value:a,range:o})},!1),r}async showAnnotation(t){let{value:n}=t,{index:r,anchor:i}=await this.goTo(n),{doc:a}=this.#s(r),o=i(a);this.emit?.({type:"show-annotation",value:n,range:o})}getCFI(t,n){if(!n)return"";let r=this.book.sections[t].cfi??co.fromIndex(t);return Ac(r,Cc(n))}resolveCFI(t){if(this.book.resolveCFI)return this.book.resolveCFI(t);{let n=an(t);return{index:co.toIndex((n.parent??n).shift()),anchor:a=>vi(a,n)}}}resolveNavigation(t){try{return typeof t=="number"?{index:t}:Ar.test(t)?this.resolveCFI(t):this.book.resolveHref(t)}catch{}}async goTo(t){let n=this.resolveNavigation(t);try{return await this.renderer.goTo(n),n}catch{}}async goToFraction(t){let[n,r]=this.#e.getSection(t);return this.renderer.goTo({index:n,anchor:r})}async select(t){try{let n=await this.resolveNavigation(t);await this.renderer.goTo({...n,select:!0})}catch{}}goLeft(){return this.book.dir==="rtl"?this.renderer.next():this.renderer.prev()}goRight(){return this.book.dir==="rtl"?this.renderer.prev():this.renderer.next()}setAppearance({layout:t,css:n}){this.isFixedLayout||(Object.assign(this.renderer.layout,t),this.#r=n,this.renderer.setStyle(n),this.renderer.render())}async*#d(t,n,r){let i=await this.book.sections[r].createDocument();for(let{range:a,excerpt:o}of t(i,n))yield{cfi:this.getCFI(r,a),excerpt:o}}async*#c(t,n){let{sections:r}=this.book;for(let[i,{createDocument:a}]of r.entries()){if(!a)continue;let o=await a(),s=Array.from(t(o,n),({range:c,excerpt:u})=>({cfi:this.getCFI(i,c),excerpt:u}));yield{progress:(i+1)/r.length},s.length&&(yield{index:i,subitems:s})}}async*search(t){let{query:n,index:r}=t,i=Fc(Wg,{defaultLocale:this.language,...t}),a=r!=null?this.#d(i,n,r):this.#c(i,n);for await(let o of a)yield"subitems"in o?{label:this.#t.getProgress(o.index)?.label??"",subitems:o.subitems}:o}};var qg=(e,t,n)=>{let r=document.createElement("ul");r.setAttribute("role","group"),r.setAttribute("aria-label",e);let i=new Map,a=o=>{n(o);let s=i.get(o);for(let l of r.children)l.setAttribute("aria-checked",l===s?"true":"false")};for(let[o,s]of t){let l=document.createElement("li");l.setAttribute("role","menuitemradio"),l.innerText=o,l.onclick=()=>a(s),i.set(s,l),r.append(l)}return{element:r,select:a}},zc=e=>{let t={},n=document.createElement("ul");n.setAttribute("role","menu");let r=()=>n.classList.remove("show"),i=a=>(...o)=>(r(),a(...o));for(let{name:a,label:o,type:s,items:l,onclick:c}of e){let u=s==="radio"?qg(o,l,i(c)):null;a&&(t[a]=u),n.append(u.element)}return window.addEventListener("blur",()=>r()),window.addEventListener("click",a=>{n.parentNode.contains(a.target)||r()}),{element:n,groups:t}};function kr(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():te}var Uc=kr();function hn(){return Uc.PROD==="1"}function Nn(){return Uc.PROD_API==="1"}var LT=kr().PROD==="1",OT=kr().PROD!=="1";var jc=({entries:e,loadBlob:t,getSize:n},r)=>{let i=new Map,a=new Map,o=async f=>{if(i.has(f))return i.get(f);let d=URL.createObjectURL(await t(f)),p=URL.createObjectURL(new Blob([`<img src="${d}">`],{type:"text/html"}));return a.set(f,[d,p]),i.set(f,p),p},s=f=>{a.get(f)?.forEach?.(d=>URL.revokeObjectURL(d)),a.delete(f),i.delete(f)},l=[".jpg",".jpeg",".png",".gif",".bmp",".webp",".svg"],c=e.map(f=>f.filename).filter(f=>l.some(d=>f.endsWith(d))).sort(),u={};return u.getCover=()=>t(c[0]),u.metadata={title:r.name},u.sections=c.map(f=>({id:f,load:()=>o(f),unload:()=>s(f),size:n(f)})),u.toc=c.map(f=>({label:f,href:f})),u.rendition={layout:"pre-paginated"},u.resolveHref=f=>({index:u.sections.findIndex(d=>d.id===f)}),u.splitTOCHref=f=>[f,null],u.getTOCFragment=f=>f.documentElement,u};var $c=e=>e?.trim()?.replace(/\s{2,}/g," "),kt=e=>$c(e?.textContent),Li={XLINK:"http://www.w3.org/1999/xlink",EPUB:"http://www.idpf.org/2007/ops"},Oi={XML:"application/xml",XHTML:"application/xhtml+xml"},It={strong:["strong","self"],emphasis:["em","self"],style:["span","self"],a:"anchor",strikethrough:["s","self"],sub:["sub","self"],sup:["sup","self"],code:["code","self"],image:"image"},Kg={tr:["tr",["align"]],th:["th",["colspan","rowspan","align","valign"]],td:["td",["colspan","rowspan","align","valign"]]},Hc={epigraph:["blockquote"],subtitle:["h2",It],"text-author":["p",It],date:["p",It],stanza:"stanza"},Di={title:["header",{p:["h1",It],"empty-line":["br"]}],epigraph:["blockquote","self"],image:"image",annotation:["aside"],section:["section","self"],p:["p",It],poem:["blockquote",Hc],subtitle:["h2",It],cite:["blockquote","self"],"empty-line":["br"],table:["table",Kg],"text-author":["p",It]};Hc.epigraph.push(Di);var Gg={image:"image",title:["section",{p:["h1",It],"empty-line":["br"]}],epigraph:["section",Di],section:["section",Di]},Wc=e=>{let t=e.getAttributeNS(Li.XLINK,"href"),[,n]=t.split("#"),r=e.getRootNode().getElementById(n);return r?`data:${r.getAttribute("content-type")};base64,${r.textContent}`:t},ho=class{constructor(t){this.fb2=t,this.doc=document.implementation.createDocument(Li.XHTML,"html")}image(t){let n=this.doc.createElement("img");return n.alt=t.getAttribute("alt"),n.title=t.getAttribute("title"),n.setAttribute("src",Wc(t)),n}anchor(t){let n=this.convert(t,{a:["a",It]});return n.setAttribute("href",t.getAttributeNS(Li.XLINK,"href")),t.getAttribute("type")==="note"&&n.setAttributeNS(Li.EPUB,"epub:type","noteref"),n}stanza(t){let n=this.convert(t,{stanza:["p",{title:["header",{p:["strong",It],"empty-line":["br"]}],subtitle:["p",It]}]});for(let r of t.children)r.nodeName==="v"&&(n.append(this.doc.createTextNode(r.textContent)),n.append(this.doc.createElement("br")));return n}convert(t,n){if(t.nodeType===3)return this.doc.createTextNode(t.textContent);if(t.nodeType===4)return this.doc.createCDATASection(t.textContent);if(t.nodeType===8)return this.doc.createComment(t.textContent);let r=n?.[t.nodeName];if(!r)return null;if(typeof r=="string")return this[r](t);let[i,a]=r,o=this.doc.createElement(i);if(t.id&&(o.id=t.id),o.classList.add(t.nodeName),Array.isArray(a))for(let c of a)o.setAttribute(c,t.getAttribute(c));let s=a==="self"?n:Array.isArray(a)?null:a,l=t.firstChild;for(;l;){let c=this.convert(l,s);c&&o.append(c),l=l.nextSibling}return o}},Vg=async e=>{let t=await e.arrayBuffer(),n=new TextDecoder("utf-8").decode(t),r=new DOMParser,i=r.parseFromString(n,Oi.XML),a=i.xmlEncoding||n.match(/^<\?xml\s+version\s*=\s*["']1.\d+"\s+encoding\s*=\s*["']([A-Za-z0-9._-]*)["']/)?.[1];if(a&&a.toLowerCase()!=="utf-8"){let o=new TextDecoder(a).decode(t);return r.parseFromString(o,Oi.XML)}return i},Xg=URL.createObjectURL(new Blob([`
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
</html>`,po="data-foliate-id",mo=async e=>{let t={},n=await Vg(e),r=new ho(n),i=d=>n.querySelector(d),a=d=>[...n.querySelectorAll(d)],o=d=>{let p=kt(d.querySelector("nickname"));if(p)return p;let b=kt(d.querySelector("first-name")),g=kt(d.querySelector("middle-name")),h=kt(d.querySelector("last-name")),m=[b,g,h].filter(w=>w).join(" "),y=h?[h,[b,g].filter(w=>w).join(" ")].join(", "):null;return{name:m,sortAs:y}},s=d=>d?.getAttribute("value")??kt(d),l=i("title-info annotation");t.metadata={title:kt(i("title-info book-title")),identifier:kt(i("document-info id")),language:kt(i("title-info lang")),author:a("title-info author").map(o),translator:a("title-info translator").map(o),producer:a("document-info author").map(o).concat(a("document-info program-used").map(kt)),publisher:kt(i("publish-info publisher")),published:s(i("title-info date")),modified:s(i("document-info date")),description:l?r.convert(l,{annotation:["div",Di]}).innerHTML:null,subject:a("title-info genre").map(kt)},t.getCover=()=>fetch(Wc(i("coverpage image"))).then(d=>d.blob());let c=Array.from(n.querySelectorAll("body"),d=>{let p=r.convert(d,{body:["body",Gg]});return[Array.from(p.children,b=>{let g=[b,...b.querySelectorAll("[id]")].map(h=>h.id);return{el:b,ids:g}}),p]}),u=c[0][0].map(({el:d,ids:p})=>{let b=Array.from(d.querySelectorAll(":scope > section > .title"),(g,h)=>(g.setAttribute(po,h),{title:kt(g),index:h}));return{ids:p,titles:b,el:d}}).concat(c.slice(1).map(([d,p])=>{let b=d.map(g=>g.ids).flat();return p.classList.add("notesBodyType"),{ids:b,el:p,linear:"no"}})).map(({ids:d,titles:p,el:b,linear:g})=>{let h=Yg(b.outerHTML),m=new Blob([h],{type:Oi.XHTML}),y=URL.createObjectURL(m),w=$c(b.querySelector(".title, .subtitle, p")?.textContent??(b.classList.contains("title")?b.textContent:""));return{ids:d,title:w,titles:p,load:()=>y,createDocument:()=>new DOMParser().parseFromString(h,Oi.XHTML),size:m.size-Array.from(b.querySelectorAll("[src]"),A=>A.getAttribute("src")?.length??0).reduce((A,T)=>A+T,0),linear:g}}),f=new Map;return t.sections=u.map((d,p)=>{let{ids:b,load:g,createDocument:h,size:m,linear:y}=d;for(let w of b)w&&f.set(w,p);return{id:p,load:g,createDocument:h,size:m,linear:y}}),t.toc=u.map(({title:d,titles:p},b)=>{let g=b.toString();return{label:d,href:g,subitems:p?.length?p.map(({title:h,index:m})=>({label:h,href:`${g}#${m}`})):null}}).filter(d=>d),t.resolveHref=d=>{let[p,b]=d.split("#");return p?{index:Number(p),anchor:g=>g.querySelector(`[${po}="${b}"]`)}:{index:f.get(b),anchor:g=>g.getElementById(b)}},t.splitTOCHref=d=>d?.split("#")?.map(p=>Number(p))??[],t.getTOCFragment=(d,p)=>d.querySelector(`[${po}="${p}"]`),t};var mn=e=>{if(!e)return"";let t=document.createElement("textarea");return t.innerHTML=e,t.value},Mn={XML:"application/xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml"},Zg={name:[0,32,"string"],type:[60,4,"string"],creator:[64,4,"string"],numRecords:[76,2,"uint"]},Qg={compression:[0,2,"uint"],numTextRecords:[8,2,"uint"],recordSize:[10,2,"uint"],encryption:[12,2,"uint"]},Jg={magic:[16,4,"string"],length:[20,4,"uint"],type:[24,4,"uint"],encoding:[28,4,"uint"],uid:[32,4,"uint"],version:[36,4,"uint"],titleOffset:[84,4,"uint"],titleLength:[88,4,"uint"],localeRegion:[94,1,"uint"],localeLanguage:[95,1,"uint"],resourceStart:[108,4,"uint"],huffcdic:[112,4,"uint"],numHuffcdic:[116,4,"uint"],exthFlag:[128,4,"uint"],trailingFlags:[240,4,"uint"],indx:[244,4,"uint"]},e0={resourceStart:[108,4,"uint"],fdst:[192,4,"uint"],numFdst:[196,4,"uint"],frag:[248,4,"uint"],skel:[252,4,"uint"],guide:[260,4,"uint"]},t0={magic:[0,4,"string"],length:[4,4,"uint"],count:[8,4,"uint"]},qc={magic:[0,4,"string"],length:[4,4,"uint"],type:[8,4,"uint"],idxt:[20,4,"uint"],numRecords:[24,4,"uint"],encoding:[28,4,"uint"],language:[32,4,"uint"],total:[36,4,"uint"],ordt:[40,4,"uint"],ligt:[44,4,"uint"],numLigt:[48,4,"uint"],numCncx:[52,4,"uint"]},n0={magic:[0,4,"string"],length:[4,4,"uint"],numControlBytes:[8,4,"uint"]},r0={magic:[0,4,"string"],offset1:[8,4,"uint"],offset2:[12,4,"uint"]},i0={magic:[0,4,"string"],length:[4,4,"uint"],numEntries:[8,4,"uint"],codeLength:[12,4,"uint"]},a0={magic:[0,4,"string"],numEntries:[8,4,"uint"]},o0={flags:[8,4,"uint"],dataStart:[12,4,"uint"],keyLength:[16,4,"uint"],keyStart:[20,4,"uint"]},s0={1252:"windows-1252",65001:"utf-8"},Kc={100:["creator","string",!0],101:["publisher"],103:["description"],104:["isbn"],105:["subject","string",!0],106:["date"],108:["contributor","string",!0],109:["rights"],110:["subjectCode","string",!0],112:["source","string",!0],113:["asin"],121:["boundary","uint"],122:["fixedLayout"],125:["numResources","uint"],126:["originalResolution"],127:["zeroGutter"],128:["zeroMargin"],129:["coverURI"],132:["regionMagnification"],201:["coverOffset","uint"],202:["thumbnailOffset","uint"],503:["title"],524:["language","string",!0],527:["pageProgressionDirection"]},l0={1:["ar","ar-SA","ar-IQ","ar-EG","ar-LY","ar-DZ","ar-MA","ar-TN","ar-OM","ar-YE","ar-SY","ar-JO","ar-LB","ar-KW","ar-AE","ar-BH","ar-QA"],2:["bg"],3:["ca"],4:["zh","zh-TW","zh-CN","zh-HK","zh-SG"],5:["cs"],6:["da"],7:["de","de-DE","de-CH","de-AT","de-LU","de-LI"],8:["el"],9:["en","en-US","en-GB","en-AU","en-CA","en-NZ","en-IE","en-ZA","en-JM",null,"en-BZ","en-TT","en-ZW","en-PH"],10:["es","es-ES","es-MX",null,"es-GT","es-CR","es-PA","es-DO","es-VE","es-CO","es-PE","es-AR","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"],11:["fi"],12:["fr","fr-FR","fr-BE","fr-CA","fr-CH","fr-LU","fr-MC"],13:["he"],14:["hu"],15:["is"],16:["it","it-IT","it-CH"],17:["ja"],18:["ko"],19:["nl","nl-NL","nl-BE"],20:["no","nb","nn"],21:["pl"],22:["pt","pt-BR","pt-PT"],23:["rm"],24:["ro"],25:["ru"],26:["hr",null,"sr"],27:["sk"],28:["sq"],29:["sv","sv-SE","sv-FI"],30:["th"],31:["tr"],32:["ur"],33:["id"],34:["uk"],35:["be"],36:["sl"],37:["et"],38:["lv"],39:["lt"],41:["fa"],42:["vi"],43:["hy"],44:["az"],45:["eu"],46:["hsb"],47:["mk"],48:["st"],49:["ts"],50:["tn"],52:["xh"],53:["zu"],54:["af"],55:["ka"],56:["fo"],57:["hi"],58:["mt"],59:["se"],62:["ms"],63:["kk"],65:["sw"],67:["uz",null,"uz-UZ"],68:["tt"],69:["bn"],70:["pa"],71:["gu"],72:["or"],73:["ta"],74:["te"],75:["kn"],76:["ml"],77:["as"],78:["mr"],79:["sa"],82:["cy","cy-GB"],83:["gl","gl-ES"],87:["kok"],97:["ne"],98:["fy"]},Ni=(e,t)=>{let n=new e.constructor(e.length+t.length);return n.set(e),n.set(t,e.length),n},Zc=(e,t,n)=>{let r=new e.constructor(e.length+t.length+n.length);return r.set(e),r.set(t,e.length),r.set(n,e.length+t.length),r},c0=new TextDecoder,Cr=e=>c0.decode(e),st=e=>{if(!e)return;let t=e.byteLength,n=t===4?"getUint32":t===2?"getUint16":"getUint8";return new DataView(e)[n](0)},Ct=(e,t)=>Object.fromEntries(Array.from(Object.entries(e)).map(([n,[r,i,a]])=>[n,(a==="string"?Cr:st)(t.slice(r,r+i))])),wo=e=>new TextDecoder(s0[e]),Ri=(e,t=0)=>{let n=0,r=0;for(let i of e.subarray(t,t+4))if(n=n<<7|(i&127)>>>0,r++,i&128)break;return{value:n,length:r}},u0=e=>{let t=0;for(let n of e.subarray(-4))n&128&&(t=0),t=t<<7|n&127;return t},Qc=e=>{let t=0;for(;e>0;e=e>>1)(e&1)===1&&t++;return t},d0=e=>{let t=0;for(;!(e&1);)e=e>>1,t++;return t},f0=e=>{let t=[];for(let n=0;n<e.length;n++){let r=e[n];if(r===0)t.push(0);else if(r<=8)for(let i of e.subarray(n+1,(n+=r)+1))t.push(i);else if(r<=127)t.push(r);else if(r<=191){let i=r<<8|e[n+++1],a=(i&16383)>>>3,o=(i&7)+3;for(let s=0;s<o;s++)t.push(t[t.length-a])}else t.push(32,r^128)}return Uint8Array.from(t)},p0=(e,t)=>{let n=t>>3,r=t+32,i=r>>3,a=0n;for(let o=n;o<=i;o++)a=a<<8n|BigInt(e[o]??0);return a>>8n-BigInt(r&7)&0xffffffffn},h0=async(e,t)=>{let n=await t(e.huffcdic),{magic:r,offset1:i,offset2:a}=Ct(r0,n);if(r!=="HUFF")throw new Error("Invalid HUFF record");let o=Array.from({length:256},(u,f)=>i+f*4).map(u=>st(n.slice(u,u+4))).map(u=>[u&128,u&31,u>>>8]),s=[null].concat(Array.from({length:32},(u,f)=>a+f*8).map(u=>[st(n.slice(u,u+4)),st(n.slice(u+4,u+8))])),l=[];for(let u=1;u<e.numHuffcdic;u++){let f=await t(e.huffcdic+u),d=Ct(i0,f);if(d.magic!=="CDIC")throw new Error("Invalid CDIC record");let p=Math.min(1<<d.codeLength,d.numEntries-l.length),b=f.slice(d.length);for(let g=0;g<p;g++){let h=st(b.slice(g*2,g*2+2)),m=st(b.slice(h,h+2)),y=m&32767,w=m&32768,A=new Uint8Array(b.slice(h+2,h+2+y));l.push([A,w])}}let c=u=>{let f=new Uint8Array,d=u.byteLength*8;for(let p=0;p<d;){let b=Number(p0(u,p)),[g,h,m]=o[b>>>24];if(!g){for(;b>>>32-h<s[h][0];)h+=1;m=s[h][1]}if((p+=h)>d)break;let y=m-(b>>>32-h),[w,A]=l[y];A||(w=c(w),l[y]=[w,!0]),f=Ni(f,w)}return f};return c},Pi=async(e,t)=>{let n=await t(e),r=Ct(qc,n);if(r.magic!=="INDX")throw new Error("Invalid INDX record");let i=wo(r.encoding),a=n.slice(r.length),o=Ct(n0,a);if(o.magic!=="TAGX")throw new Error("Invalid TAGX section");let s=(o.length-12)/4,l=Array.from({length:s},(d,p)=>new Uint8Array(a.slice(12+p*4,12+p*4+4))),c={},u=0;for(let d=0;d<r.numCncx;d++){let p=await t(e+r.numRecords+d+1),b=new Uint8Array(p);for(let g=0;g<b.byteLength;){let h=g,{value:m,length:y}=Ri(b,g);g+=y;let w=p.slice(g,g+m);g+=m,c[u+h]=i.decode(w)}u+=65536}let f=[];for(let d=0;d<r.numRecords;d++){let p=await t(e+1+d),b=new Uint8Array(p),g=Ct(qc,p);if(g.magic!=="INDX")throw new Error("Invalid INDX record");for(let h=0;h<g.numRecords;h++){let m=g.idxt+4+2*h,y=st(p.slice(m,m+2)),w=st(p.slice(y,y+1)),A=Cr(p.slice(y+1,y+1+w)),T=[],x=y+1+w,v=0,_=x+o.numControlBytes;for(let[E,C,D,O]of l){if(O&1){v++;continue}let I=x+v,R=st(p.slice(I,I+1))&D;if(R===D)if(Qc(D)>1){let{value:B,length:F}=Ri(b,_);T.push([E,null,B,C]),_+=F}else T.push([E,1,null,C]);else T.push([E,R>>d0(D),null,C])}let S={};for(let[E,C,D,O]of T){let I=[];if(C!=null)for(let R=0;R<C*O;R++){let{value:B,length:F}=Ri(b,_);I.push(B),_+=F}else{let R=0;for(;R<D;){let{value:B,length:F}=Ri(b,_);I.push(B),_+=F,R+=F}}S[E]=I}f.push({name:A,tagMap:S})}}return{table:f,cncx:c}},m0=async(e,t)=>{let{table:n,cncx:r}=await Pi(e,t),i=n.map(({tagMap:o},s)=>({index:s,offset:o[1]?.[0],size:o[2]?.[0],label:r[o[3]]??"",headingLevel:o[4]?.[0],pos:o[6],parent:o[21]?.[0],firstChild:o[22]?.[0],lastChild:o[23]?.[0]})),a=o=>(o.firstChild==null||(o.children=i.filter(s=>s.parent===o.index).map(a)),o);return i.filter(o=>o.headingLevel===0).map(a)},g0=(e,t)=>{let{magic:n,count:r}=Ct(t0,e);if(n!=="EXTH")throw new Error("Invalid EXTH header");let i=wo(t),a={},o=12;for(let s=0;s<r;s++){let l=st(e.slice(o,o+4)),c=st(e.slice(o+4,o+8));if(l in Kc){let[u,f,d]=Kc[l],p=e.slice(o+8,o+c),b=f==="uint"?st(p):i.decode(p);d?(a[u]??=[],a[u].push(b)):a[u]=b}o+=c}return a},b0=async(e,t)=>{let{flags:n,dataStart:r,keyLength:i,keyStart:a}=Ct(o0,e),o=new Uint8Array(e.slice(r));if(n&2){let l=i===16?1024:1040,c=new Uint8Array(e.slice(a,a+i)),u=Math.min(l,o.length);for(var s=0;s<u;s++)o[s]=o[s]^c[s%c.length]}if(n&1)try{return await t(o)}catch{}return o},Jc=async e=>Cr(await e.slice(60,68).arrayBuffer())==="BOOKMOBI",go=class{#e;#t;pdb;async open(t){this.#e=t;let n=Ct(Zg,await t.slice(0,78).arrayBuffer());this.pdb=n;let r=await t.slice(78,78+n.numRecords*8).arrayBuffer();this.#t=Array.from({length:n.numRecords},(i,a)=>st(r.slice(a*8,a*8+4))).map((i,a,o)=>[i,o[a+1]])}loadRecord(t){let n=this.#t[t];if(!n)throw new RangeError("Record index out of bounds");return this.#e.slice(...n).arrayBuffer()}async loadMagic(t){let n=this.#t[t][0];return Cr(await this.#e.slice(n,n+4).arrayBuffer())}},Mi=class extends go{#e=0;#t;#n;#r;#i;#a;constructor({unzlib:t}){super(),this.unzlib=t}async open(t){await super.open(t),this.headers=this.#o(await super.loadRecord(0)),this.#t=this.headers.mobi.resourceStart;let n=this.headers.mobi.version>=8;if(!n){let r=this.headers.exth?.boundary;if(r<4294967295)try{this.headers=this.#o(await super.loadRecord(r)),this.#e=r,n=!0}catch{}}return await this.#s(),n?new yo(this).init():new bo(this).init()}#o(t){let n=Ct(Qg,t),r=Ct(Jg,t);if(r.magic!=="MOBI")throw new Error("Missing MOBI header");let{titleOffset:i,titleLength:a,localeLanguage:o,localeRegion:s}=r;r.title=t.slice(i,i+a);let l=l0[o];r.language=l?.[s>>2]??l?.[0];let c=r.exthFlag&64?g0(t.slice(r.length+16),r.encoding):null,u=r.version>=8?Ct(e0,t):null;return{palmdoc:n,mobi:r,exth:c,kf8:u}}async#s(){let{palmdoc:t,mobi:n}=this.headers;this.#n=wo(n.encoding),this.#r=new TextEncoder;let{compression:r}=t;if(this.#i=r===1?s=>s:r===2?f0:r===17480?await h0(n,this.loadRecord.bind(this)):null,!this.#i)throw new Error("Unknown compression type");let{trailingFlags:i}=n,a=i&1,o=Qc(i>>>1);this.#a=s=>{for(let l=0;l<o;l++){let c=u0(s);s=s.subarray(0,-c)}if(a){let l=(s[s.length-1]&3)+1;s=s.subarray(0,-l)}return s}}decode(...t){return this.#n.decode(...t)}encode(...t){return this.#r.encode(...t)}loadRecord(t){return super.loadRecord(this.#e+t)}loadMagic(t){return super.loadMagic(this.#e+t)}loadText(t){return this.loadRecord(t+1).then(n=>new Uint8Array(n)).then(this.#a).then(this.#i)}async loadResource(t){let n=await super.loadRecord(this.#t+t),r=Cr(n.slice(0,4));return r==="FONT"?b0(n,this.unzlib):r==="VIDE"||r==="AUDI"?n.slice(12):n}getNCX(){let t=this.headers.mobi.indx;if(t<4294967295)return m0(t,this.loadRecord.bind(this))}getMetadata(){let{mobi:t,exth:n}=this.headers;return{identifier:t.uid.toString(),title:mn(n?.title||this.decode(t.title)),author:n?.creator?.map(mn),publisher:mn(n?.publisher),language:n?.language??t.language,published:n?.date,description:mn(n?.description),subject:n?.subject?.map(mn),rights:mn(n?.rights)}}async getCover(){let{exth:t}=this.headers,n=t?.coverOffset<4294967295?t?.coverOffset:t?.thumbnailOffset<4294967295?t?.thumbnailOffset:null;if(n!=null){let r=await this.loadResource(n);return new Blob([r])}}},Gc=/<\s*(?:mbp:)?pagebreak[^>]*>/gi,y0=/<[^<>]+filepos=['"]{0,1}(\d+)[^<>]*>/gi,bo=class{parser=new DOMParser;serializer=new XMLSerializer;#e=new Map;#t=new Map;#n=new Map;#r;#i=[];#a=Mn.HTML;constructor(t){this.mobi=t}async init(){let t=new Uint8Array;for(let i=0;i<this.mobi.headers.palmdoc.numTextRecords;i++)t=Ni(t,await this.mobi.loadText(i));let n=Array.from(new Uint8Array(t),i=>String.fromCharCode(i)).join("");this.#r=[0].concat(Array.from(n.matchAll(Gc),i=>i.index)).map((i,a,o)=>n.slice(i,o[a+1])).map(i=>Uint8Array.from(i,a=>a.charCodeAt(0))).map(i=>({book:this,raw:i})).reduce((i,a)=>{let o=i[i.length-1];return a.start=o?.end??0,a.end=a.start+a.raw.byteLength,i.concat(a)},[]),this.sections=this.#r.map((i,a)=>({id:a,load:()=>this.loadSection(i),createDocument:()=>this.createDocument(i),size:i.end-i.start}));let r=[];try{let i=await this.mobi.getNCX(),a=({label:o,offset:s,children:l})=>{let c=s.toString().padStart(10,"0"),u=`filepos:${c}`;return r.push(c),o=mn(o),{label:o,href:u,subitems:l?.map(a)}};if(this.toc=i?.map(a),this.landmarks=await this.getGuide(),!this.toc){let o=this.landmarks.find(({type:s})=>s?.includes("toc"))?.href;if(o){let{index:s}=this.resolveHref(o),l=await this.sections[s].createDocument();this.toc=Array.from(l.querySelectorAll("a[filepos]"),c=>({label:c.innerText?.trim(),href:`filepos:${c.getAttribute("filepos")}`}))}}}catch{}return this.#i=[...new Set(r.concat(Array.from(n.matchAll(y0),i=>i[1])))].map(i=>({filepos:i,number:Number(i)})).sort((i,a)=>i.number-a.number),this.metadata=this.mobi.getMetadata(),this.getCover=this.mobi.getCover.bind(this.mobi),this}async getGuide(){let t=await this.createDocument(this.#r[0]);return Array.from(t.getElementsByTagName("reference"),n=>({label:n.getAttribute("title"),type:n.getAttribute("type")?.split(/\s/),href:`filepos:${n.getAttribute("filepos")}`}))}async loadResource(t){if(this.#e.has(t))return this.#e.get(t);let n=await this.mobi.loadResource(t),r=URL.createObjectURL(new Blob([n]));return this.#e.set(t,r),r}async loadRecindex(t){return this.loadResource(Number(t)-1)}async replaceResources(t){for(let n of t.querySelectorAll("img[recindex]")){let r=n.getAttribute("recindex");try{n.src=await this.loadRecindex(r)}catch{}}for(let n of t.querySelectorAll("[mediarecindex]")){let r=n.getAttribute("mediarecindex"),i=n.getAttribute("recindex");try{n.src=await this.loadRecindex(r),i&&(n.poster=await this.loadRecindex(i))}catch{}}for(let n of t.querySelectorAll("[filepos]")){let r=n.getAttribute("filepos");n.href=`filepos:${r}`}}async loadText(t){if(this.#t.has(t))return this.#t.get(t);let{raw:n}=t,r=this.#i.filter(({number:o})=>o>=t.start&&o<t.end).map(o=>({...o,offset:o.number-t.start})),i=n;r.length&&(i=n.subarray(0,r[0].offset),r.forEach(({filepos:o,offset:s},l)=>{let c=r[l+1],u=this.mobi.encode(`<a id="filepos${o}"></a>`);i=Zc(i,u,n.subarray(s,c?.offset))}));let a=this.mobi.decode(i).replaceAll(Gc,"");return this.#t.set(t,a),a}async createDocument(t){let n=await this.loadText(t);return this.parser.parseFromString(n,this.#a)}async loadSection(t){if(this.#n.has(t))return this.#n.get(t);let n=await this.createDocument(t),r=n.createElement("style");n.head.append(r),r.append(n.createTextNode(`blockquote {
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 1em;
            margin-inline-end: 0;
        }`)),await this.replaceResources(n);let i=this.serializer.serializeToString(n),a=URL.createObjectURL(new Blob([i],{type:this.#a}));return this.#n.set(t,a),a}resolveHref(t){let n=t.match(/filepos:(.*)/)[1],r=Number(n);return{index:this.#r.findIndex(o=>o.end>r),anchor:o=>o.getElementById(`filepos${n}`)}}splitTOCHref(t){let n=t.match(/filepos:(.*)/)[1],r=Number(n);return[this.#r.findIndex(a=>a.end>r),`filepos${n}`]}getTOCFragment(t,n){return t.getElementById(n)}isExternal(t){return/^(?!blob|filepos)\w+:/i.test(t)}},eu=/kindle:(flow|embed):(\w+)(?:\?mime=(\w+\/[-+.\w]+))?/,w0=/kindle:pos:fid:(\w+):off:(\w+)/,v0=e=>{let[t,n,r]=e.match(eu).slice(1);return{resourceType:t,id:parseInt(n,32),type:r}},Vc=e=>{let[t,n]=e.match(w0).slice(1);return{fid:parseInt(t,32),off:parseInt(n,32)}},Xc=(e=0,t=0)=>`kindle:pos:fid:${e.toString(32).toUpperCase().padStart(4,"0")}:off:${t.toString(32).toUpperCase().padStart(10,"0")}`,Yc=e=>{let t=e.match(/\s(id|name|aid)\s*=\s*['"]([^'"]*)['"]/i);if(!t)return;let[,n,r]=t;return`[${n}="${CSS.escape(r)}"]`},x0=async(e,t,n)=>{let r=[];e.replace(t,(...a)=>(r.push(a),null));let i=[];for(let a of r)i.push(await n(...a));return e.replace(t,()=>i.shift())},yo=class{parser=new DOMParser;#e=new Map;#t=new Map;#n=new Map;#r={};#i;#a;#o=new Uint8Array;#s=new Uint8Array;#l=-1;#d=-1;#c=!0;#u=Mn.XHTML;constructor(t){this.mobi=t}async init(){let t=this.mobi.loadRecord.bind(this.mobi),{kf8:n}=this.mobi.headers;try{let s=await t(n.fdst),l=Ct(a0,s);if(l.magic!=="FDST")throw new Error("Missing FDST record");let c=Array.from({length:l.numEntries},(u,f)=>12+f*8).map(u=>[st(s.slice(u,u+4)),st(s.slice(u+4,u+8))]);this.#r.fdstTable=c,this.#a=c[c.length-1][1]}catch{}let r=(await Pi(n.skel,t)).table.map(({name:s,tagMap:l},c)=>({index:c,name:s,numFrag:l[1][0],offset:l[6][0],length:l[6][1]})),i=await Pi(n.frag,t),a=i.table.map(({name:s,tagMap:l})=>({insertOffset:parseInt(s),selector:i.cncx[l[2][0]],index:l[4][0],offset:l[6][0],length:l[6][1]}));this.#r.skelTable=r,this.#r.fragTable=a,this.#i=r.reduce((s,l)=>{let c=s[s.length-1],u=c?.fragEnd??0,f=u+l.numFrag,d=a.slice(u,f),p=l.length+d.map(g=>g.length).reduce((g,h)=>g+h),b=(c?.totalLength??0)+p;return s.concat({skel:l,frags:d,fragEnd:f,length:p,totalLength:b})},[]),this.#i.unshift({frags:[]}),this.sections=this.#i.map((s,l)=>s.frags.length?{id:l,load:()=>this.loadSection(s),createDocument:()=>this.createDocument(s),size:s.length}:{linear:"no"});try{let s=await this.mobi.getNCX(),l=({label:c,pos:u,children:f})=>{let[d,p]=u,b=Xc(d,p),g=this.#t.get(d);return g?g.push(p):this.#t.set(d,[p]),{label:mn(c),href:b,subitems:f?.map(l)}};this.toc=s?.map(l),this.landmarks=await this.getGuide()}catch{}let{exth:o}=this.mobi.headers;return this.dir=o.pageProgressionDirection,this.rendition={layout:o.fixedLayout==="true"?"pre-paginated":"reflowable",viewport:Object.fromEntries(o.originalResolution?.split("x")?.slice(0,2)?.map((s,l)=>[l?"height":"width",s])??[])},this.metadata=this.mobi.getMetadata(),this.getCover=this.mobi.getCover.bind(this.mobi),this}async getResourcesByMagic(t){let n={},r=this.mobi.headers.kf8.resourceStart,i=this.mobi.pdb.numRecords;for(let a=r;a<i;a++)try{let o=await this.mobi.loadMagic(a),s=t.find(l=>l===o);s&&(n[s]=a)}catch{}return n}async getGuide(){let t=this.mobi.headers.kf8.guide;if(t<4294967295){let n=this.mobi.loadRecord.bind(this.mobi),{table:r,cncx:i}=await Pi(t,n);return r.map(({name:a,tagMap:o})=>({label:i[o[1][0]]??"",type:a?.split(/\s/),href:Xc(o[6]?.[0]??o[3]?.[0])}))}}async loadResourceBlob(t){let{resourceType:n,id:r,type:i}=v0(t),a=n==="flow"?await this.loadFlow(r):await this.mobi.loadResource(r-1),o=[Mn.XHTML,Mn.HTML,Mn.CSS,Mn.SVG].includes(i)?await this.replaceResources(this.mobi.decode(a)):a;return new Blob([o],{type:i})}async loadResource(t){if(this.#e.has(t))return this.#e.get(t);let n=await this.loadResourceBlob(t),r=URL.createObjectURL(n);return this.#e.set(t,r),r}replaceResources(t){let n=new RegExp(eu,"g");return x0(t,n,this.loadResource.bind(this))}async loadRaw(t,n){let r=n-this.#o.length,i=this.#a==null?1/0:this.#a-this.#s.length-t;if(r<0||r<i){for(;this.#o.length<n;){let o=++this.#l,s=await this.mobi.loadText(o);this.#o=Ni(this.#o,s)}return this.#o.slice(t,n)}for(;this.#a-this.#s.length>t;){let o=this.mobi.headers.palmdoc.numTextRecords-1-++this.#d,s=await this.mobi.loadText(o);this.#s=Ni(s,this.#s)}let a=this.#a-this.#s.length;return this.#s.slice(t-a,n-a)}loadFlow(t){if(t<4294967295)return this.loadRaw(...this.#r.fdstTable[t])}async loadText(t){let{skel:n,frags:r,length:i}=t,a=await this.loadRaw(n.offset,n.offset+i),o=a.slice(0,n.length);for(let s of r){let l=s.insertOffset-n.offset,c=n.length+s.offset,u=a.slice(c,c+s.length);o=Zc(o.slice(0,l),u,o.slice(l));let f=this.#t.get(s.index);if(f)for(let d of f){let p=this.mobi.decode(u).slice(d),b=Yc(p);this.#p(s.index,d,b)}}return this.mobi.decode(o)}async createDocument(t){let n=await this.loadText(t);return this.parser.parseFromString(n,this.#u)}async loadSection(t){if(this.#e.has(t))return this.#e.get(t);let n=await this.loadText(t);this.#c&&this.parser.parseFromString(n,this.#u).querySelector("parsererror")&&(this.#u=Mn.HTML),this.#c&&(this.#c=!1);let r=await this.replaceResources(n),i=URL.createObjectURL(new Blob([r],{type:this.#u}));return this.#e.set(t,i),i}getIndexByFID(t){return this.#i.findIndex(n=>n.frags.some(r=>r.index===t))}#p(t,n,r){let i=this.#n.get(t);if(i)i.set(n,r);else{let a=new Map;this.#n.set(t,a),a.set(n,r)}}async resolveHref(t){let{fid:n,off:r}=Vc(t),i=this.getIndexByFID(n);if(i<0)return;let a=this.#n.get(n)?.get(r);if(a)return{index:i,anchor:b=>b.querySelector(a)};let{skel:o,frags:s}=this.#i[i],l=s.find(b=>b.index===n),c=o.offset+o.length+l.offset,u=await this.loadRaw(c,c+l.length),f=this.mobi.decode(u).slice(r),d=Yc(f);return this.#p(n,r,d),{index:i,anchor:b=>b.querySelector(d)}}splitTOCHref(t){let n=Vc(t);return[this.getIndexByFID(n.fid),n]}getTOCFragment(t,{fid:n,off:r}){let i=this.#n.get(n)?.get(r);return t.querySelector(i)}isExternal(t){return/^(?!blob|kindle)\w+:/i.test(t)}};var Ze={CONTAINER:"urn:oasis:names:tc:opendocument:xmlns:container",XHTML:"http://www.w3.org/1999/xhtml",OPF:"http://www.idpf.org/2007/opf",EPUB:"http://www.idpf.org/2007/ops",DC:"http://purl.org/dc/elements/1.1/",DCTERMS:"http://purl.org/dc/terms/",ENC:"http://www.w3.org/2001/04/xmlenc#",NCX:"http://www.daisy.org/z3986/2005/ncx/",XLINK:"http://www.w3.org/1999/xlink",SMIL:"http://www.w3.org/ns/SMIL"},lt={XML:"application/xml",NCX:"application/x-dtbncx+xml",XHTML:"application/xhtml+xml",HTML:"text/html",CSS:"text/css",SVG:"image/svg+xml",JS:/\/(x-)?(javascript|ecmascript)/},Fi=e=>e.toLowerCase().replace(/[-:](.)/g,(t,n)=>n.toUpperCase()),_0=e=>e?e.trim().replace(/\s{2,}/g," "):"",Lr=(e,t,n)=>n?r=>r.getAttribute(e)?.split(/\s/)?.includes(t):typeof t=="function"?r=>t(r.getAttribute(e)):r=>r.getAttribute(e)===t,Bi=(...e)=>t=>t?Object.fromEntries(e.map(n=>[Fi(n),t.getAttribute(n)])):null,bn=e=>_0(e?.textContent),Dr=(e,t)=>{let n=e.lookupNamespaceURI(null)===t||e.lookupPrefix(t),r=n?(i,a)=>o=>o.namespaceURI===t&&o.localName===a:(i,a)=>o=>o.localName===a;return{$:(i,a)=>[...i.children].find(r(i,a)),$$:(i,a)=>[...i.children].filter(r(i,a)),$$$:n?(i,a)=>[...i.getElementsByTagNameNS(t,a)]:(i,a)=>[...i.getElementsByTagName(t,a)]}},Zn=(e,t)=>{try{if(t.includes(":"))return new URL(e,t);let n="file:///";return decodeURI(new URL(e,n+t).href.replace(n,""))}catch{return e}},ru=e=>/^(?!blob)\w+:/i.test(e),T0=(e,t)=>{if(!e)return t;let n=e.replace(/\/$/,"").split("/"),r=t.replace(/\/$/,"").split("/"),i=(n.length>r.length?n:r).findIndex((a,o)=>n[o]!==r[o]);return i<0?"":Array(n.length-i).fill("..").concat(r.slice(i)).join("/")},S0=e=>e.slice(0,e.lastIndexOf("/")+1),Ii=async(e,t,n)=>{let r=[];e.replace(t,(...a)=>(r.push(a),null));let i=[];for(let a of r)i.push(await n(...a));return e.replace(t,()=>i.shift())},A0=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),gn={attrs:["dir","xml:lang"]},In={name:"alternate-script",many:!0,...gn,props:["file-as"]},tu={many:!0,...gn,props:[{name:"role",many:!0,attrs:["scheme"]},"file-as",In]},E0=[{name:"title",many:!0,...gn,props:["title-type","display-seq","file-as",In]},{name:"identifier",many:!0,props:[{name:"identifier-type",attrs:["scheme"]}]},{name:"language",many:!0},{name:"creator",...tu},{name:"contributor",...tu},{name:"publisher",...gn,props:["file-as",In]},{name:"description",...gn,props:[In]},{name:"rights",...gn,props:[In]},{name:"date"},{name:"dcterms:modified",type:"meta"},{name:"subject",many:!0,...gn,props:["term","authority",In]},{name:"belongs-to-collection",type:"meta",many:!0,...gn,props:["collection-type","group-position","dcterms:identifier","file-as",In,{name:"belongs-to-collection",recursive:!0}]}],k0=e=>{let{$:t,$$:n}=Dr(e,Ze.OPF),r=t(e.documentElement,"metadata"),i=Array.from(r.children),a=(f,d)=>{if(!d)return null;let{props:p=[],attrs:b=[]}=f,g=bn(d);if(!p.length&&!b.length)return g;let h=d.getAttribute("id"),m=h?i.filter(Lr("refines","#"+h)):[];return Object.fromEntries([["value",g]].concat(p.map(y=>{let{many:w,recursive:A}=y,T=typeof y=="string"?y:y.name,x=Lr("property",T),v=A?f:y;return[Fi(T),w?m.filter(x).map(_=>a(v,_)):a(v,m.find(x))]})).concat(b.map(y=>[Fi(y),d.getAttribute(y)])))},o=i.filter(Lr("refines",null)),s=Object.fromEntries(E0.map(f=>{let{type:d,name:p,many:b}=f,g=d==="meta"?h=>h.namespaceURI===Ze.OPF&&h.getAttribute("property")===p:h=>h.namespaceURI===Ze.DC&&h.localName===p;return[Fi(p),b?o.filter(g).map(h=>a(f,h)):a(f,o.find(g))]})),l=f=>Object.fromEntries(n(r,"meta").filter(Lr("property",d=>d?.startsWith(f))).map(d=>[d.getAttribute("property").replace(f,""),bn(d)])),c=l("rendition:"),u=l("media:");return{metadata:s,rendition:c,media:u}},C0=(e,t=n=>n)=>{let{$:n,$$:r,$$$:i}=Dr(e,Ze.XHTML),a=b=>b?decodeURI(t(b)):null,o=b=>g=>{let h=n(g,"a")??n(g,"span"),m=n(g,"ol"),y=a(h?.getAttribute("href")),A={label:bn(h)||h?.getAttribute("title"),href:y,subitems:s(m)};return b&&(A.type=h?.getAttributeNS(Ze.EPUB,"type")?.split(/\s/)),A},s=(b,g)=>b?r(b,"li").map(o(g)):null,l=(b,g)=>s(n(b,"ol"),g),c=i(e,"nav"),u=null,f=null,d=null,p=[];for(let b of c){let g=b.getAttributeNS(Ze.EPUB,"type")?.split(/\s/)??[];g.includes("toc")?u??=l(b):g.includes("page-list")?f??=l(b):g.includes("landmarks")?d??=l(b,!0):p.push({label:bn(b.firstElementChild),type:g,list:l(b)})}return{toc:u,pageList:f,landmarks:d,others:p}},L0=(e,t=n=>n)=>{let{$:n,$$:r}=Dr(e,Ze.NCX),i=l=>l?decodeURI(t(l)):null,a=l=>{let c=n(l,"navLabel"),u=n(l,"content"),f=bn(c),d=i(u.getAttribute("src"));if(l.localName==="navPoint"){let p=r(l,"navPoint");return{label:f,href:d,subitems:p.length?p.map(a):null}}return{label:f,href:d}},o=(l,c)=>r(l,c).map(a),s=(l,c)=>{let u=n(e.documentElement,l);return u?o(u,c):null};return{toc:s("navMap","navPoint"),pageList:s("pageList","pageTarget"),others:r(e.documentElement,"navList").map(l=>({label:bn(n(l,"navLabel")),list:o(l,"navTarget")}))}},vo=e=>{if(!e)return;let t=e.split(":").map(o=>parseFloat(o));if(t.length===3){let[o,s,l]=t;return o*60*60+s*60+l}if(t.length===2){let[o,s]=t;return o*60+s}let[n,r]=e.split(/(?=[^\d.])/),i=parseFloat(n),a=r==="h"?60*60:r==="min"?60:r==="ms"?.001:1;return i*a},O0=(e,t=n=>n)=>{let{$:n,$$$:r}=Dr(e,Ze.SMIL),i=a=>a?decodeURI(t(a)):null;return r(e,"par").map(a=>{let o=n(a,"text")?.getAttribute("src")?.split("#")?.[1],s=n(a,"audio");return s?{id:o,audio:{src:i(s.getAttribute("src")),clipBegin:vo(s.getAttribute("clipBegin")),clipEnd:vo(s.getAttribute("clipEnd"))}}:{id:o}})},D0=/([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})/,R0=e=>{for(let t of e.getElementsByTagNameNS(Ze.DC,"identifier")){let[n]=bn(t).split(":").slice(-1);if(D0.test(n))return n}return""},iu=e=>bn(e.getElementById(e.documentElement.getAttribute("unique-identifier"))??e.getElementsByTagNameNS(Ze.DC,"identifier")[0]),nu=async(e,t,n)=>{let r=new Uint8Array(await n.slice(0,t).arrayBuffer());t=Math.min(t,r.length);for(var i=0;i<t;i++)r[i]=r[i]^e[i%e.length];return new Blob([r,n.slice(t)],{type:n.type})},P0=async e=>{let t=new TextEncoder().encode(e),n=await globalThis.crypto.subtle.digest("SHA-1",t);return new Uint8Array(n)},N0=(e=P0)=>({"http://www.idpf.org/2008/embedding":{key:t=>e(iu(t).replaceAll(/[\u0020\u0009\u000d\u000a]/g,"")),decode:(t,n)=>nu(t,1040,n)},"http://ns.adobe.com/pdf/enc#RC":{key:t=>{let n=R0(t).replaceAll("-","");return Uint8Array.from({length:16},(r,i)=>parseInt(n.slice(i*2,i*2+2),16))},decode:(t,n)=>nu(t,1024,n)}}),xo=class{#e=new Map;#t=new Map;#n;constructor(t){this.#n=t}async init(t,n){if(!t)return;let r=Array.from(t.getElementsByTagNameNS(Ze.ENC,"EncryptedData"),i=>({algorithm:i.getElementsByTagNameNS(Ze.ENC,"EncryptionMethod")[0]?.getAttribute("Algorithm"),uri:i.getElementsByTagNameNS(Ze.ENC,"CipherReference")[0]?.getAttribute("URI")}));for(let{algorithm:i,uri:a}of r){if(!this.#t.has(i)){let o=this.#n[i];if(!o)continue;let s=await o.key(n);this.#t.set(i,l=>o.decode(s,l))}this.#e.set(a,i)}}getDecoder(t){return this.#t.get(this.#e.get(t))??(n=>n)}},_o=class{constructor({opf:t,resolveHref:n}){this.opf=t;let{$:r,$$:i,$$$:a}=Dr(t,Ze.OPF),o=r(t.documentElement,"manifest"),s=r(t.documentElement,"spine"),l=i(s,"itemref");this.manifest=i(o,"item").map(Bi("href","id","media-type","properties","media-overlay")).map(u=>(u.href=n(u.href),u.properties=u.properties?.split(/\s/),u)),this.spine=l.map(Bi("idref","id","linear","properties")).map(u=>(u.properties=u.properties?.split(/\s/),u)),this.pageProgressionDirection=s.getAttribute("page-progression-direction"),this.navPath=this.getItemByProperty("nav")?.href,this.ncxPath=(this.getItemByID(s.getAttribute("toc"))??this.manifest.find(u=>u.mediaType===lt.NCX))?.href;let c=r(t.documentElement,"guide");c&&(this.guide=i(c,"reference").map(Bi("type","title","href")).map(({type:u,title:f,href:d})=>({label:f,type:u.split(/\s/),href:n(d)}))),this.cover=this.getItemByProperty("cover-image")??this.getItemByID(a(t,"meta").find(Lr("name","cover"))?.getAttribute("content"))??this.getItemByHref(this.guide?.find(u=>u.type.includes("cover"))?.href),this.cfis=Lc(l)}getItemByID(t){return this.manifest.find(n=>n.id===t)}getItemByHref(t){return this.manifest.find(n=>n.href===t)}getItemByProperty(t){return this.manifest.find(n=>n.properties?.includes(t))}resolveCFI(t){let n=an(t),r=(n.parent??n).shift(),i=lo(this.opf,r);i&&i.nodeName!=="idref"&&(r.at(-1).id=null,i=lo(this.opf,r));let a=i?.getAttribute("idref");return{index:this.spine.findIndex(l=>l.idref===a),anchor:l=>vi(l,n)}}},To=class{#e=new Map;#t=new Map;#n=new Map;allowScript=!1;constructor({loadText:t,loadBlob:n,resources:r}){this.loadText=t,this.loadBlob=n,this.manifest=r.manifest,this.assets=r.manifest}createURL(t,n,r,i){if(!n)return"";let a=URL.createObjectURL(new Blob([n],{type:r}));if(this.#e.set(t,a),this.#n.set(t,1),i){let o=this.#t.get(i);o?o.push(t):this.#t.set(i,[t])}return a}ref(t,n){let r=this.#t.get(n);return r?.includes(t)||(this.#n.set(t,this.#n.get(t)+1),r?r.push(t):this.#t.set(n,[t])),this.#e.get(t)}unref(t){if(!this.#n.has(t))return;let n=this.#n.get(t)-1;if(n<1){URL.revokeObjectURL(this.#e.get(t)),this.#e.delete(t),this.#n.delete(t);let r=this.#t.get(t);if(r)for(;r.length;)this.unref(r.pop());this.#t.delete(t)}else this.#n.set(t,n)}async loadItem(t,n=[]){if(!t)return null;let{href:r,mediaType:i}=t,a=lt.JS.test(t.mediaType);if(a&&!this.allowScript)return null;let o=n.at(-1);return this.#e.has(r)?this.ref(r,o):(a||[lt.XHTML,lt.HTML,lt.CSS,lt.SVG].includes(i))&&n.every(l=>l!==r)?this.loadReplaced(t,n):this.createURL(r,await this.loadBlob(r),i,o)}async loadHref(t,n,r=[]){if(ru(t))return t;let i=Zn(t,n),a=this.manifest.find(o=>o.href===i);return a?this.loadItem(a,r.concat(n)):t}async loadReplaced(t,n=[]){let{href:r,mediaType:i}=t,a=n.at(-1),o=await this.loadText(r);if(!o)return null;if([lt.XHTML,lt.HTML,lt.SVG].includes(i)){let l=new DOMParser().parseFromString(o,i);if(i===lt.XHTML&&l.querySelector("parsererror")&&(t.mediaType=lt.HTML,l=new DOMParser().parseFromString(o,t.mediaType)),[lt.XHTML,lt.SVG].includes(t.mediaType)){let f=l.firstChild;for(;f instanceof ProcessingInstruction;){if(f.data){let d=await Ii(f.data,/(?:^|\s*)(href\s*=\s*['"])([^'"]*)(['"])/i,(p,b,g,h)=>this.loadHref(g,r,n).then(m=>`${b}${m}${h}`));f.replaceWith(l.createProcessingInstruction(f.target,d))}f=f.nextSibling}}let c=async(f,d)=>f.setAttribute(d,await this.loadHref(f.getAttribute(d),r,n));for(let f of l.querySelectorAll("link[href]"))await c(f,"href");for(let f of l.querySelectorAll("[src]"))await c(f,"src");for(let f of l.querySelectorAll("[poster]"))await c(f,"poster");for(let f of l.querySelectorAll("object[data]"))await c(f,"data");for(let f of l.querySelectorAll("[*|href]:not([href]"))f.setAttributeNS(Ze.XLINK,"href",await this.loadHref(f.getAttributeNS(Ze.XLINK,"href"),r,n));for(let f of l.querySelectorAll("style"))f.textContent&&(f.textContent=await this.replaceCSS(f.textContent,r,n));for(let f of l.querySelectorAll("[style]"))f.setAttribute("style",await this.replaceCSS(f.getAttribute("style"),r,n));let u=new XMLSerializer().serializeToString(l);return this.createURL(r,u,t.mediaType,a)}let s=i===lt.CSS?await this.replaceCSS(o,r,n):await this.replaceString(o,r,n);return this.createURL(r,s,i,a)}async replaceCSS(t,n,r=[]){let i=await Ii(t,/url\(\s*["']?([^'"\n]*?)\s*["']?\s*\)/gi,(l,c)=>this.loadHref(c,n,r).then(u=>`url("${u}")`)),a=await Ii(i,/@import\s*["']([^"'\n]*?)["']/gi,(l,c)=>this.loadHref(c,n,r).then(u=>`@import "${u}"`)),o=window?.innerWidth??800,s=window?.innerHeight??600;return a.replace(/-epub-/gi,"").replace(/(\d*\.?\d+)vw/gi,(l,c)=>parseFloat(c)*o/100+"px").replace(/(\d*\.?\d+)vh/gi,(l,c)=>parseFloat(c)*s/100+"px").replace(/page-break-(after|before|inside)/gi,(l,c)=>`-webkit-column-break-${c}`)}replaceString(t,n,r=[]){let i=new Map,a=this.assets.map(s=>{if(s.href===n)return;let l=T0(S0(n),s.href),c=encodeURI(l),u="/"+s.href,f=encodeURI(u),d=new Set([l,c,u,f]);for(let p of d)i.set(p,s);return Array.from(d)}).flat().filter(s=>s);if(!a.length)return t;let o=new RegExp(a.map(A0).join("|"),"g");return Ii(t,o,async s=>this.loadItem(i.get(s.replace(/^\//,"")),r.concat(n)))}unloadItem(t){this.unref(t?.href)}},M0=(e,t)=>e.getElementById(t)??e.querySelector(`[name="${CSS.escape(t)}"]`),I0=e=>{for(let t of e){if(t==="page-spread-left"||t==="rendition:page-spread-left")return"left";if(t==="page-spread-right"||t==="rendition:page-spread-right")return"right";if(t==="rendition:page-spread-center")return"center"}},Or=class{parser=new DOMParser;#e;constructor({loadText:t,loadBlob:n,getSize:r,sha1:i}){this.loadText=t,this.loadBlob=n,this.getSize=r,this.#e=new xo(N0(i))}#t(t){return t?this.parser.parseFromString(t,lt.XML):null}async#n(t){return this.#t(await this.loadText(t))}opfPath=null;async init(){let t=await this.#n("META-INF/container.xml");if(!t)throw new Error("Failed to load container file");let n=Array.from(t.getElementsByTagNameNS(Ze.CONTAINER,"rootfile"),Bi("full-path","media-type")).filter(g=>g.mediaType==="application/oebps-package+xml");if(!n.length)throw new Error("No package document defined in container");let r=n[0].fullPath;this.opfPath=r;let i=await this.#n(r);if(!i)throw new Error("Failed to load package document");let a=await this.#n("META-INF/encryption.xml");await this.#e.init(a,i),this.resources=new _o({opf:i,resolveHref:g=>Zn(g,r)});let o=new To({loadText:this.loadText,loadBlob:g=>Promise.resolve(this.loadBlob(g)).then(this.#e.getDecoder(g)),resources:this.resources});this.sections=this.resources.spine.map((g,h)=>{let{idref:m,linear:y,properties:w=[]}=g,A=this.resources.getItemByID(m);return A?{id:this.resources.getItemByID(m)?.href,load:()=>o.loadItem(A),unload:()=>o.unloadItem(A),createDocument:()=>this.loadDocument(A),size:this.getSize(A.href),cfi:this.resources.cfis[h],linear:y,pageSpread:I0(w),resolveHref:T=>Zn(T,A.href),loadMediaOverlay:()=>this.loadMediaOverlay(A)}:null}).filter(g=>g);let{navPath:s,ncxPath:l}=this.resources;if(s)try{let g=m=>Zn(m,s),h=C0(await this.#n(s),g);this.toc=h.toc,this.pageList=h.pageList,this.landmarks=h.landmarks}catch{}if(!this.toc&&l)try{let g=m=>Zn(m,l),h=L0(await this.#n(l),g);this.toc=h.toc,this.pageList=h.pageList}catch{}this.landmarks??=this.resources.guide;let{metadata:c,rendition:u,media:f}=k0(i);this.rendition=u,this.media=f,f.duration=vo(f.duration),this.dir=this.resources.pageProgressionDirection,this.rawMetadata=c;let d=c?.title?.[0];this.metadata={title:d?.value,sortAs:d?.fileAs,language:c?.language,identifier:iu(i),description:c?.description?.value,publisher:c?.publisher?.value,published:c?.date,modified:c?.dctermsModified,subject:c?.subject?.filter(({value:g,code:h})=>g||h)?.map(({value:g,code:h,scheme:m})=>({name:g,code:h,scheme:m})),rights:c?.rights?.value};let p={art:"artist",aut:"author",bkp:"producer",clr:"colorist",edt:"editor",ill:"illustrator",trl:"translator",pbl:"publisher"},b=g=>h=>{let m=[...new Set(h.role?.map(({value:w,scheme:A})=>(!A||A==="marc:relators"?p[w]:null)??g))],y={name:h.value,sortAs:h.fileAs};return[m?.length?m:[g],y]};return c?.creator?.map(b("author"))?.concat(c?.contributor?.map?.(b("contributor")))?.forEach(([g,h])=>g.forEach(m=>{this.metadata[m]?this.metadata[m].push(h):this.metadata[m]=[h]})),this}async loadDocument(t){let n=await this.loadText(t.href);return this.parser.parseFromString(n,t.mediaType)}async loadMediaOverlay(t){let n=t.mediaOverlay;if(!n)return null;let r=this.resources.getItemByID(n),i=await this.#n(r.href);return O0(i,o=>Zn(o,r.href))}resolveCFI(t){return this.resources.resolveCFI(t)}resolveHref(t){let[n,r]=t.split("#"),i=this.resources.getItemByHref(decodeURI(n));return i?{index:this.resources.spine.findIndex(({idref:s})=>s===i.id),anchor:r?s=>M0(s,r):()=>0}:null}splitTOCHref(t){return t?.split("#")??[]}getTOCFragment(t,n){return t.getElementById(n)??t.querySelector(`[name="${CSS.escape(n)}"]`)}isExternal(t){return ru(t)}async getCover(){let t=this.resources?.cover;return t?.href?new Blob([await this.loadBlob(t.href)],{type:t.mediaType}):null}async getCalibreBookmarks(){let t=await this.loadText("META-INF/calibre_bookmarks.txt"),n="encoding=json+base64:";if(t?.startsWith(n)){let r=atob(t.slice(n.length));return JSON.parse(r)}}};var ds={};yg(ds,{BlobReader:()=>ns,BlobWriter:()=>rs,Data64URIReader:()=>ly,Data64URIWriter:()=>cy,ERR_BAD_FORMAT:()=>Yi,ERR_CENTRAL_DIRECTORY_NOT_FOUND:()=>Kd,ERR_DUPLICATED_NAME:()=>Jd,ERR_ENCRYPTED:()=>Xd,ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND:()=>qd,ERR_EOCDR_NOT_FOUND:()=>Hd,ERR_EOCDR_ZIP64_NOT_FOUND:()=>Wd,ERR_EXTRAFIELD_ZIP64_NOT_FOUND:()=>Vd,ERR_HTTP_RANGE:()=>jr,ERR_INVALID_COMMENT:()=>ef,ERR_INVALID_ENCRYPTION_STRENGTH:()=>rf,ERR_INVALID_ENTRY_COMMENT:()=>tf,ERR_INVALID_ENTRY_NAME:()=>nf,ERR_INVALID_EXTRAFIELD_DATA:()=>of,ERR_INVALID_EXTRAFIELD_TYPE:()=>af,ERR_INVALID_PASSWORD:()=>Xo,ERR_INVALID_SIGNATURE:()=>Yo,ERR_INVALID_VERSION:()=>Go,ERR_ITERATOR_COMPLETED_TOO_SOON:()=>_d,ERR_LOCAL_FILE_HEADER_NOT_FOUND:()=>Gd,ERR_SPLIT_ZIP_FILE:()=>Ko,ERR_UNSUPPORTED_COMPRESSION:()=>qo,ERR_UNSUPPORTED_ENCRYPTION:()=>Yd,ERR_UNSUPPORTED_FORMAT:()=>la,HttpRangeReader:()=>hy,HttpReader:()=>Ld,Reader:()=>Sn,SplitDataReader:()=>as,SplitDataWriter:()=>zr,SplitZipReader:()=>yy,SplitZipWriter:()=>wy,TextReader:()=>uy,TextWriter:()=>dy,Uint8ArrayReader:()=>my,Uint8ArrayWriter:()=>gy,Writer:()=>ts,ZipReader:()=>ky,ZipWriter:()=>Iy,configure:()=>aa,getMimeType:()=>mb,initReader:()=>os,initStream:()=>on,initWriter:()=>ss,readUint8Array:()=>rt,terminateWorkers:()=>Jb});function ra(e){return ia(e.map(([t,n])=>new Array(t).fill(n,0,t)))}function ia(e){return e.reduce((t,n)=>t.concat(Array.isArray(n)?ia(n):n),[])}var au=[0,1,2,3].concat(...ra([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function Le(){let e=this;function t(i){let a=e.dyn_tree,o=e.stat_desc.static_tree,s=e.stat_desc.extra_bits,l=e.stat_desc.extra_base,c=e.stat_desc.max_length,u,f,d,p,b,g,h=0;for(p=0;p<=15;p++)i.bl_count[p]=0;for(a[i.heap[i.heap_max]*2+1]=0,u=i.heap_max+1;u<573;u++)f=i.heap[u],p=a[a[f*2+1]*2+1]+1,p>c&&(p=c,h++),a[f*2+1]=p,!(f>e.max_code)&&(i.bl_count[p]++,b=0,f>=l&&(b=s[f-l]),g=a[f*2],i.opt_len+=g*(p+b),o&&(i.static_len+=g*(o[f*2+1]+b)));if(h!==0){do{for(p=c-1;i.bl_count[p]===0;)p--;i.bl_count[p]--,i.bl_count[p+1]+=2,i.bl_count[c]--,h-=2}while(h>0);for(p=c;p!==0;p--)for(f=i.bl_count[p];f!==0;)d=i.heap[--u],!(d>e.max_code)&&(a[d*2+1]!=p&&(i.opt_len+=(p-a[d*2+1])*a[d*2],a[d*2+1]=p),f--)}}function n(i,a){let o=0;do o|=i&1,i>>>=1,o<<=1;while(--a>0);return o>>>1}function r(i,a,o){let s=[],l=0,c,u,f;for(c=1;c<=15;c++)s[c]=l=l+o[c-1]<<1;for(u=0;u<=a;u++)f=i[u*2+1],f!==0&&(i[u*2]=n(s[f]++,f))}e.build_tree=function(i){let a=e.dyn_tree,o=e.stat_desc.static_tree,s=e.stat_desc.elems,l,c,u=-1,f;for(i.heap_len=0,i.heap_max=573,l=0;l<s;l++)a[l*2]!==0?(i.heap[++i.heap_len]=u=l,i.depth[l]=0):a[l*2+1]=0;for(;i.heap_len<2;)f=i.heap[++i.heap_len]=u<2?++u:0,a[f*2]=1,i.depth[f]=0,i.opt_len--,o&&(i.static_len-=o[f*2+1]);for(e.max_code=u,l=Math.floor(i.heap_len/2);l>=1;l--)i.pqdownheap(a,l);f=s;do l=i.heap[1],i.heap[1]=i.heap[i.heap_len--],i.pqdownheap(a,1),c=i.heap[1],i.heap[--i.heap_max]=l,i.heap[--i.heap_max]=c,a[f*2]=a[l*2]+a[c*2],i.depth[f]=Math.max(i.depth[l],i.depth[c])+1,a[l*2+1]=a[c*2+1]=f,i.heap[1]=f++,i.pqdownheap(a,1);while(i.heap_len>=2);i.heap[--i.heap_max]=i.heap[1],t(i),r(a,e.max_code,i.bl_count)}}Le._length_code=[0,1,2,3,4,5,6,7].concat(...ra([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]]));Le.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0];Le.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576];Le.d_code=function(e){return e<256?au[e]:au[256+(e>>>7)]};Le.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];Le.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];Le.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];Le.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function Qe(e,t,n,r,i){let a=this;a.static_tree=e,a.extra_bits=t,a.extra_base=n,a.elems=r,a.max_length=i}var F0=[12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227],B0=ra([[144,8],[112,9],[24,7],[8,8]]);Qe.static_ltree=ia(F0.map((e,t)=>[e,B0[t]]));var z0=[0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23],U0=ra([[30,5]]);Qe.static_dtree=ia(z0.map((e,t)=>[e,U0[t]]));Qe.static_l_desc=new Qe(Qe.static_ltree,Le.extra_lbits,257,286,15);Qe.static_d_desc=new Qe(Qe.static_dtree,Le.extra_dbits,0,30,15);Qe.static_bl_desc=new Qe(null,Le.extra_blbits,0,19,7);var j0=9,$0=8;function Gt(e,t,n,r,i){let a=this;a.good_length=e,a.max_lazy=t,a.nice_length=n,a.max_chain=r,a.func=i}var Gu=0,Gi=1,Bn=2,Ft=[new Gt(0,0,0,0,Gu),new Gt(4,4,8,4,Gi),new Gt(4,5,16,8,Gi),new Gt(4,6,32,32,Gi),new Gt(4,4,16,16,Bn),new Gt(8,16,32,32,Bn),new Gt(8,16,128,128,Bn),new Gt(8,32,128,256,Bn),new Gt(32,128,258,1024,Bn),new Gt(32,258,258,4096,Bn)],zi=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],Bt=0,Ui=1,Rr=2,ji=3,H0=32,So=42,$i=113,Pr=666,Ao=8,W0=0,Eo=1,q0=2,Re=3,Vi=258,wt=Vi+Re+1;function ou(e,t,n,r){let i=e[t*2],a=e[n*2];return i<a||i==a&&r[t]<=r[n]}function K0(){let e=this,t,n,r,i,a,o,s,l,c,u,f,d,p,b,g,h,m,y,w,A,T,x,v,_,S,E,C,D,O,I,R,B,F,$=new Le,ne=new Le,W=new Le;e.depth=[];let J,L,P,j,q,V;e.bl_count=[],e.heap=[],R=[],B=[],F=[];function ue(){c=2*a,f[p-1]=0;for(let N=0;N<p-1;N++)f[N]=0;E=Ft[C].max_lazy,O=Ft[C].good_length,I=Ft[C].nice_length,S=Ft[C].max_chain,T=0,m=0,v=0,y=_=Re-1,A=0,d=0}function fe(){let N;for(N=0;N<286;N++)R[N*2]=0;for(N=0;N<30;N++)B[N*2]=0;for(N=0;N<19;N++)F[N*2]=0;R[256*2]=1,e.opt_len=e.static_len=0,L=P=0}function pe(){$.dyn_tree=R,$.stat_desc=Qe.static_l_desc,ne.dyn_tree=B,ne.stat_desc=Qe.static_d_desc,W.dyn_tree=F,W.stat_desc=Qe.static_bl_desc,q=0,V=0,j=8,fe()}e.pqdownheap=function(N,z){let M=e.heap,U=M[z],H=z<<1;for(;H<=e.heap_len&&(H<e.heap_len&&ou(N,M[H+1],M[H],e.depth)&&H++,!ou(N,U,M[H],e.depth));)M[z]=M[H],z=H,H<<=1;M[z]=U};function Q(N,z){let M=-1,U,H=N[0*2+1],Z=0,le=7,Ye=4;H===0&&(le=138,Ye=3),N[(z+1)*2+1]=65535;for(let mt=0;mt<=z;mt++)U=H,H=N[(mt+1)*2+1],!(++Z<le&&U==H)&&(Z<Ye?F[U*2]+=Z:U!==0?(U!=M&&F[U*2]++,F[16*2]++):Z<=10?F[17*2]++:F[18*2]++,Z=0,M=U,H===0?(le=138,Ye=3):U==H?(le=6,Ye=3):(le=7,Ye=4))}function ae(){let N;for(Q(R,$.max_code),Q(B,ne.max_code),W.build_tree(e),N=18;N>=3&&F[Le.bl_order[N]*2+1]===0;N--);return e.opt_len+=3*(N+1)+5+5+4,N}function oe(N){e.pending_buf[e.pending++]=N}function se(N){oe(N&255),oe(N>>>8&255)}function Y(N){oe(N>>8&255),oe(N&255&255)}function ie(N,z){let M,U=z;V>16-U?(M=N,q|=M<<V&65535,se(q),q=M>>>16-V,V+=U-16):(q|=N<<V&65535,V+=U)}function de(N,z){let M=N*2;ie(z[M]&65535,z[M+1]&65535)}function he(N,z){let M,U=-1,H,Z=N[0*2+1],le=0,Ye=7,mt=4;for(Z===0&&(Ye=138,mt=3),M=0;M<=z;M++)if(H=Z,Z=N[(M+1)*2+1],!(++le<Ye&&H==Z)){if(le<mt)do de(H,F);while(--le!==0);else H!==0?(H!=U&&(de(H,F),le--),de(16,F),ie(le-3,2)):le<=10?(de(17,F),ie(le-3,3)):(de(18,F),ie(le-11,7));le=0,U=H,Z===0?(Ye=138,mt=3):H==Z?(Ye=6,mt=3):(Ye=7,mt=4)}}function re(N,z,M){let U;for(ie(N-257,5),ie(z-1,5),ie(M-4,4),U=0;U<M;U++)ie(F[Le.bl_order[U]*2+1],3);he(R,N-1),he(B,z-1)}function Ee(){V==16?(se(q),q=0,V=0):V>=8&&(oe(q&255),q>>>=8,V-=8)}function Ne(){ie(Eo<<1,3),de(256,Qe.static_ltree),Ee(),1+j+10-V<9&&(ie(Eo<<1,3),de(256,Qe.static_ltree),Ee()),j=7}function ve(N,z){let M,U,H;if(e.dist_buf[L]=N,e.lc_buf[L]=z&255,L++,N===0?R[z*2]++:(P++,N--,R[(Le._length_code[z]+256+1)*2]++,B[Le.d_code(N)*2]++),!(L&8191)&&C>2){for(M=L*8,U=T-m,H=0;H<30;H++)M+=B[H*2]*(5+Le.extra_dbits[H]);if(M>>>=3,P<Math.floor(L/2)&&M<Math.floor(U/2))return!0}return L==J-1}function De(N,z){let M,U,H=0,Z,le;if(L!==0)do M=e.dist_buf[H],U=e.lc_buf[H],H++,M===0?de(U,N):(Z=Le._length_code[U],de(Z+256+1,N),le=Le.extra_lbits[Z],le!==0&&(U-=Le.base_length[Z],ie(U,le)),M--,Z=Le.d_code(M),de(Z,z),le=Le.extra_dbits[Z],le!==0&&(M-=Le.base_dist[Z],ie(M,le)));while(H<L);de(256,N),j=N[256*2+1]}function We(){V>8?se(q):V>0&&oe(q&255),q=0,V=0}function pt(N,z,M){We(),j=8,M&&(se(z),se(~z)),e.pending_buf.set(l.subarray(N,N+z),e.pending),e.pending+=z}function pn(N,z,M){ie((W0<<1)+(M?1:0),3),pt(N,z,!0)}function Et(N,z,M){let U,H,Z=0;C>0?($.build_tree(e),ne.build_tree(e),Z=ae(),U=e.opt_len+3+7>>>3,H=e.static_len+3+7>>>3,H<=U&&(U=H)):U=H=z+5,z+4<=U&&N!=-1?pn(N,z,M):H==U?(ie((Eo<<1)+(M?1:0),3),De(Qe.static_ltree,Qe.static_dtree)):(ie((q0<<1)+(M?1:0),3),re($.max_code+1,ne.max_code+1,Z+1),De(R,B)),fe(),M&&We()}function nt(N){Et(m>=0?m:-1,T-m,N),m=T,t.flush_pending()}function qt(){let N,z,M,U;do{if(U=c-v-T,U===0&&T===0&&v===0)U=a;else if(U==-1)U--;else if(T>=a+a-wt){l.set(l.subarray(a,a+a),0),x-=a,T-=a,m-=a,N=p,M=N;do z=f[--M]&65535,f[M]=z>=a?z-a:0;while(--N!==0);N=a,M=N;do z=u[--M]&65535,u[M]=z>=a?z-a:0;while(--N!==0);U+=a}if(t.avail_in===0)return;N=t.read_buf(l,T+v,U),v+=N,v>=Re&&(d=l[T]&255,d=(d<<h^l[T+1]&255)&g)}while(v<wt&&t.avail_in!==0)}function qe(N){let z=65535,M;for(z>r-5&&(z=r-5);;){if(v<=1){if(qt(),v===0&&N==0)return Bt;if(v===0)break}if(T+=v,v=0,M=m+z,(T===0||T>=M)&&(v=T-M,T=M,nt(!1),t.avail_out===0)||T-m>=a-wt&&(nt(!1),t.avail_out===0))return Bt}return nt(N==4),t.avail_out===0?N==4?Rr:Bt:N==4?ji:Ui}function ht(N){let z=S,M=T,U,H,Z=_,le=T>a-wt?T-(a-wt):0,Ye=I,mt=s,Pn=T+Vi,_r=l[M+Z-1],Tr=l[M+Z];_>=O&&(z>>=2),Ye>v&&(Ye=v);do if(U=N,!(l[U+Z]!=Tr||l[U+Z-1]!=_r||l[U]!=l[M]||l[++U]!=l[M+1])){M+=2,U++;do;while(l[++M]==l[++U]&&l[++M]==l[++U]&&l[++M]==l[++U]&&l[++M]==l[++U]&&l[++M]==l[++U]&&l[++M]==l[++U]&&l[++M]==l[++U]&&l[++M]==l[++U]&&M<Pn);if(H=Vi-(Pn-M),M=Pn-Vi,H>Z){if(x=N,Z=H,H>=Ye)break;_r=l[M+Z-1],Tr=l[M+Z]}}while((N=u[N&mt]&65535)>le&&--z!==0);return Z<=v?Z:v}function Ke(N){let z=0,M;for(;;){if(v<wt){if(qt(),v<wt&&N==0)return Bt;if(v===0)break}if(v>=Re&&(d=(d<<h^l[T+(Re-1)]&255)&g,z=f[d]&65535,u[T&s]=f[d],f[d]=T),z!==0&&(T-z&65535)<=a-wt&&D!=2&&(y=ht(z)),y>=Re)if(M=ve(T-x,y-Re),v-=y,y<=E&&v>=Re){y--;do T++,d=(d<<h^l[T+(Re-1)]&255)&g,z=f[d]&65535,u[T&s]=f[d],f[d]=T;while(--y!==0);T++}else T+=y,y=0,d=l[T]&255,d=(d<<h^l[T+1]&255)&g;else M=ve(0,l[T]&255),v--,T++;if(M&&(nt(!1),t.avail_out===0))return Bt}return nt(N==4),t.avail_out===0?N==4?Rr:Bt:N==4?ji:Ui}function at(N){let z=0,M,U;for(;;){if(v<wt){if(qt(),v<wt&&N==0)return Bt;if(v===0)break}if(v>=Re&&(d=(d<<h^l[T+(Re-1)]&255)&g,z=f[d]&65535,u[T&s]=f[d],f[d]=T),_=y,w=x,y=Re-1,z!==0&&_<E&&(T-z&65535)<=a-wt&&(D!=2&&(y=ht(z)),y<=5&&(D==1||y==Re&&T-x>4096)&&(y=Re-1)),_>=Re&&y<=_){U=T+v-Re,M=ve(T-1-w,_-Re),v-=_-1,_-=2;do++T<=U&&(d=(d<<h^l[T+(Re-1)]&255)&g,z=f[d]&65535,u[T&s]=f[d],f[d]=T);while(--_!==0);if(A=0,y=Re-1,T++,M&&(nt(!1),t.avail_out===0))return Bt}else if(A!==0){if(M=ve(0,l[T-1]&255),M&&nt(!1),T++,v--,t.avail_out===0)return Bt}else A=1,T++,v--}return A!==0&&(M=ve(0,l[T-1]&255),A=0),nt(N==4),t.avail_out===0?N==4?Rr:Bt:N==4?ji:Ui}function Mt(N){return N.total_in=N.total_out=0,N.msg=null,e.pending=0,e.pending_out=0,n=$i,i=0,pe(),ue(),0}e.deflateInit=function(N,z,M,U,H,Z){return U||(U=Ao),H||(H=$0),Z||(Z=0),N.msg=null,z==-1&&(z=6),H<1||H>j0||U!=Ao||M<9||M>15||z<0||z>9||Z<0||Z>2?-2:(N.dstate=e,o=M,a=1<<o,s=a-1,b=H+7,p=1<<b,g=p-1,h=Math.floor((b+Re-1)/Re),l=new Uint8Array(a*2),u=[],f=[],J=1<<H+6,e.pending_buf=new Uint8Array(J*4),r=J*4,e.dist_buf=new Uint16Array(J),e.lc_buf=new Uint8Array(J),C=z,D=Z,Mt(N))},e.deflateEnd=function(){return n!=So&&n!=$i&&n!=Pr?-2:(e.lc_buf=null,e.dist_buf=null,e.pending_buf=null,f=null,u=null,l=null,e.dstate=null,n==$i?-3:0)},e.deflateParams=function(N,z,M){let U=0;return z==-1&&(z=6),z<0||z>9||M<0||M>2?-2:(Ft[C].func!=Ft[z].func&&N.total_in!==0&&(U=N.deflate(1)),C!=z&&(C=z,E=Ft[C].max_lazy,O=Ft[C].good_length,I=Ft[C].nice_length,S=Ft[C].max_chain),D=M,U)},e.deflateSetDictionary=function(N,z,M){let U=M,H,Z=0;if(!z||n!=So)return-2;if(U<Re)return 0;for(U>a-wt&&(U=a-wt,Z=M-U),l.set(z.subarray(Z,Z+U),0),T=U,m=U,d=l[0]&255,d=(d<<h^l[1]&255)&g,H=0;H<=U-Re;H++)d=(d<<h^l[H+(Re-1)]&255)&g,u[H&s]=f[d],f[d]=H;return 0},e.deflate=function(N,z){let M,U,H,Z,le;if(z>4||z<0)return-2;if(!N.next_out||!N.next_in&&N.avail_in!==0||n==Pr&&z!=4)return N.msg=zi[4],-2;if(N.avail_out===0)return N.msg=zi[7],-5;if(t=N,Z=i,i=z,n==So&&(U=Ao+(o-8<<4)<<8,H=(C-1&255)>>1,H>3&&(H=3),U|=H<<6,T!==0&&(U|=H0),U+=31-U%31,n=$i,Y(U)),e.pending!==0){if(t.flush_pending(),t.avail_out===0)return i=-1,0}else if(t.avail_in===0&&z<=Z&&z!=4)return t.msg=zi[7],-5;if(n==Pr&&t.avail_in!==0)return N.msg=zi[7],-5;if(t.avail_in!==0||v!==0||z!=0&&n!=Pr){switch(le=-1,Ft[C].func){case Gu:le=qe(z);break;case Gi:le=Ke(z);break;case Bn:le=at(z);break;default:}if((le==Rr||le==ji)&&(n=Pr),le==Bt||le==Rr)return t.avail_out===0&&(i=-1),0;if(le==Ui){if(z==1)Ne();else if(pn(0,0,!1),z==3)for(M=0;M<p;M++)f[M]=0;if(t.flush_pending(),t.avail_out===0)return i=-1,0}}return z!=4?0:1}}function Vu(){let e=this;e.next_in_index=0,e.next_out_index=0,e.avail_in=0,e.total_in=0,e.avail_out=0,e.total_out=0}Vu.prototype={deflateInit(e,t){let n=this;return n.dstate=new K0,t||(t=15),n.dstate.deflateInit(n,e,t)},deflate(e){let t=this;return t.dstate?t.dstate.deflate(t,e):-2},deflateEnd(){let e=this;if(!e.dstate)return-2;let t=e.dstate.deflateEnd();return e.dstate=null,t},deflateParams(e,t){let n=this;return n.dstate?n.dstate.deflateParams(n,e,t):-2},deflateSetDictionary(e,t){let n=this;return n.dstate?n.dstate.deflateSetDictionary(n,e,t):-2},read_buf(e,t,n){let r=this,i=r.avail_in;return i>n&&(i=n),i===0?0:(r.avail_in-=i,e.set(r.next_in.subarray(r.next_in_index,r.next_in_index+i),t),r.next_in_index+=i,r.total_in+=i,i)},flush_pending(){let e=this,t=e.dstate.pending;t>e.avail_out&&(t=e.avail_out),t!==0&&(e.next_out.set(e.dstate.pending_buf.subarray(e.dstate.pending_out,e.dstate.pending_out+t),e.next_out_index),e.next_out_index+=t,e.dstate.pending_out+=t,e.total_out+=t,e.avail_out-=t,e.dstate.pending-=t,e.dstate.pending===0&&(e.dstate.pending_out=0))}};function G0(e){let t=this,n=new Vu,r=V0(e&&e.chunkSize?e.chunkSize:64*1024),i=0,a=new Uint8Array(r),o=e?e.level:-1;typeof o>"u"&&(o=-1),n.deflateInit(o),n.next_out=a,t.append=function(s,l){let c,u,f=0,d=0,p=0,b=[];if(s.length){n.next_in_index=0,n.next_in=s,n.avail_in=s.length;do{if(n.next_out_index=0,n.avail_out=r,c=n.deflate(i),c!=0)throw new Error("deflating: "+n.msg);n.next_out_index&&(n.next_out_index==r?b.push(new Uint8Array(a)):b.push(a.slice(0,n.next_out_index))),p+=n.next_out_index,l&&n.next_in_index>0&&n.next_in_index!=f&&(l(n.next_in_index),f=n.next_in_index)}while(n.avail_in>0||n.avail_out===0);return b.length>1?(u=new Uint8Array(p),b.forEach(function(g){u.set(g,d),d+=g.length})):u=b[0]||new Uint8Array,u}},t.flush=function(){let s,l,c=0,u=0,f=[];do{if(n.next_out_index=0,n.avail_out=r,s=n.deflate(4),s!=1&&s!=0)throw new Error("deflating: "+n.msg);r-n.avail_out>0&&f.push(a.slice(0,n.next_out_index)),u+=n.next_out_index}while(n.avail_in>0||n.avail_out===0);return n.deflateEnd(),l=new Uint8Array(u),f.forEach(function(d){l.set(d,c),c+=d.length}),l}}function V0(e){return e+5*(Math.floor(e/16383)+1)}var vt=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],Xu=1440,X0=0,Y0=4,Z0=9,Q0=5,J0=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],eb=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],tb=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],nb=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],rb=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],ib=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],yn=15;function Io(){let e=this,t,n,r,i,a,o;function s(c,u,f,d,p,b,g,h,m,y,w){let A,T,x,v,_,S,E,C,D,O,I,R,B,F,$;O=0,_=f;do r[c[u+O]]++,O++,_--;while(_!==0);if(r[0]==f)return g[0]=-1,h[0]=0,0;for(C=h[0],S=1;S<=yn&&r[S]===0;S++);for(E=S,C<S&&(C=S),_=yn;_!==0&&r[_]===0;_--);for(x=_,C>_&&(C=_),h[0]=C,F=1<<S;S<_;S++,F<<=1)if((F-=r[S])<0)return-3;if((F-=r[_])<0)return-3;for(r[_]+=F,o[1]=S=0,O=1,B=2;--_!==0;)o[B]=S+=r[O],B++,O++;_=0,O=0;do(S=c[u+O])!==0&&(w[o[S]++]=_),O++;while(++_<f);for(f=o[x],o[0]=_=0,O=0,v=-1,R=-C,a[0]=0,I=0,$=0;E<=x;E++)for(A=r[E];A--!==0;){for(;E>R+C;){if(v++,R+=C,$=x-R,$=$>C?C:$,(T=1<<(S=E-R))>A+1&&(T-=A+1,B=E,S<$))for(;++S<$&&!((T<<=1)<=r[++B]);)T-=r[B];if($=1<<S,y[0]+$>Xu)return-3;a[v]=I=y[0],y[0]+=$,v!==0?(o[v]=_,i[0]=S,i[1]=C,S=_>>>R-C,i[2]=I-a[v-1]-S,m.set(i,(a[v-1]+S)*3)):g[0]=I}for(i[1]=E-R,O>=f?i[0]=192:w[O]<d?(i[0]=w[O]<256?0:96,i[2]=w[O++]):(i[0]=b[w[O]-d]+16+64,i[2]=p[w[O++]-d]),T=1<<E-R,S=_>>>R;S<$;S+=T)m.set(i,(I+S)*3);for(S=1<<E-1;_&S;S>>>=1)_^=S;for(_^=S,D=(1<<R)-1;(_&D)!=o[v];)v--,R-=C,D=(1<<R)-1}return F!==0&&x!=1?-5:0}function l(c){let u;for(t||(t=[],n=[],r=new Int32Array(yn+1),i=[],a=new Int32Array(yn),o=new Int32Array(yn+1)),n.length<c&&(n=[]),u=0;u<c;u++)n[u]=0;for(u=0;u<yn+1;u++)r[u]=0;for(u=0;u<3;u++)i[u]=0;a.set(r.subarray(0,yn),0),o.set(r.subarray(0,yn+1),0)}e.inflate_trees_bits=function(c,u,f,d,p){let b;return l(19),t[0]=0,b=s(c,0,19,19,null,null,f,u,d,t,n),b==-3?p.msg="oversubscribed dynamic bit lengths tree":(b==-5||u[0]===0)&&(p.msg="incomplete dynamic bit lengths tree",b=-3),b},e.inflate_trees_dynamic=function(c,u,f,d,p,b,g,h,m){let y;return l(288),t[0]=0,y=s(f,0,c,257,tb,nb,b,d,h,t,n),y!=0||d[0]===0?(y==-3?m.msg="oversubscribed literal/length tree":y!=-4&&(m.msg="incomplete literal/length tree",y=-3),y):(l(288),y=s(f,c,u,0,rb,ib,g,p,h,t,n),y!=0||p[0]===0&&c>257?(y==-3?m.msg="oversubscribed distance tree":y==-5?(m.msg="incomplete distance tree",y=-3):y!=-4&&(m.msg="empty distance tree with lengths",y=-3),y):0)}}Io.inflate_trees_fixed=function(e,t,n,r){return e[0]=Z0,t[0]=Q0,n[0]=J0,r[0]=eb,0};var Hi=0,su=1,lu=2,cu=3,uu=4,du=5,fu=6,ko=7,pu=8,Wi=9;function ab(){let e=this,t,n=0,r,i=0,a=0,o=0,s=0,l=0,c=0,u=0,f,d=0,p,b=0;function g(h,m,y,w,A,T,x,v){let _,S,E,C,D,O,I,R,B,F,$,ne,W,J,L,P;I=v.next_in_index,R=v.avail_in,D=x.bitb,O=x.bitk,B=x.write,F=B<x.read?x.read-B-1:x.end-B,$=vt[h],ne=vt[m];do{for(;O<20;)R--,D|=(v.read_byte(I++)&255)<<O,O+=8;if(_=D&$,S=y,E=w,P=(E+_)*3,(C=S[P])===0){D>>=S[P+1],O-=S[P+1],x.win[B++]=S[P+2],F--;continue}do{if(D>>=S[P+1],O-=S[P+1],C&16){for(C&=15,W=S[P+2]+(D&vt[C]),D>>=C,O-=C;O<15;)R--,D|=(v.read_byte(I++)&255)<<O,O+=8;_=D&ne,S=A,E=T,P=(E+_)*3,C=S[P];do if(D>>=S[P+1],O-=S[P+1],C&16){for(C&=15;O<C;)R--,D|=(v.read_byte(I++)&255)<<O,O+=8;if(J=S[P+2]+(D&vt[C]),D>>=C,O-=C,F-=W,B>=J)L=B-J,B-L>0&&2>B-L?(x.win[B++]=x.win[L++],x.win[B++]=x.win[L++],W-=2):(x.win.set(x.win.subarray(L,L+2),B),B+=2,L+=2,W-=2);else{L=B-J;do L+=x.end;while(L<0);if(C=x.end-L,W>C){if(W-=C,B-L>0&&C>B-L)do x.win[B++]=x.win[L++];while(--C!==0);else x.win.set(x.win.subarray(L,L+C),B),B+=C,L+=C,C=0;L=0}}if(B-L>0&&W>B-L)do x.win[B++]=x.win[L++];while(--W!==0);else x.win.set(x.win.subarray(L,L+W),B),B+=W,L+=W,W=0;break}else if(!(C&64))_+=S[P+2],_+=D&vt[C],P=(E+_)*3,C=S[P];else return v.msg="invalid distance code",W=v.avail_in-R,W=O>>3<W?O>>3:W,R+=W,I-=W,O-=W<<3,x.bitb=D,x.bitk=O,v.avail_in=R,v.total_in+=I-v.next_in_index,v.next_in_index=I,x.write=B,-3;while(!0);break}if(C&64)return C&32?(W=v.avail_in-R,W=O>>3<W?O>>3:W,R+=W,I-=W,O-=W<<3,x.bitb=D,x.bitk=O,v.avail_in=R,v.total_in+=I-v.next_in_index,v.next_in_index=I,x.write=B,1):(v.msg="invalid literal/length code",W=v.avail_in-R,W=O>>3<W?O>>3:W,R+=W,I-=W,O-=W<<3,x.bitb=D,x.bitk=O,v.avail_in=R,v.total_in+=I-v.next_in_index,v.next_in_index=I,x.write=B,-3);if(_+=S[P+2],_+=D&vt[C],P=(E+_)*3,(C=S[P])===0){D>>=S[P+1],O-=S[P+1],x.win[B++]=S[P+2],F--;break}}while(!0)}while(F>=258&&R>=10);return W=v.avail_in-R,W=O>>3<W?O>>3:W,R+=W,I-=W,O-=W<<3,x.bitb=D,x.bitk=O,v.avail_in=R,v.total_in+=I-v.next_in_index,v.next_in_index=I,x.write=B,0}e.init=function(h,m,y,w,A,T){t=Hi,c=h,u=m,f=y,d=w,p=A,b=T,r=null},e.proc=function(h,m,y){let w,A,T,x=0,v=0,_=0,S,E,C,D;for(_=m.next_in_index,S=m.avail_in,x=h.bitb,v=h.bitk,E=h.write,C=E<h.read?h.read-E-1:h.end-E;;)switch(t){case Hi:if(C>=258&&S>=10&&(h.bitb=x,h.bitk=v,m.avail_in=S,m.total_in+=_-m.next_in_index,m.next_in_index=_,h.write=E,y=g(c,u,f,d,p,b,h,m),_=m.next_in_index,S=m.avail_in,x=h.bitb,v=h.bitk,E=h.write,C=E<h.read?h.read-E-1:h.end-E,y!=0)){t=y==1?ko:Wi;break}a=c,r=f,i=d,t=su;case su:for(w=a;v<w;){if(S!==0)y=0;else return h.bitb=x,h.bitk=v,m.avail_in=S,m.total_in+=_-m.next_in_index,m.next_in_index=_,h.write=E,h.inflate_flush(m,y);S--,x|=(m.read_byte(_++)&255)<<v,v+=8}if(A=(i+(x&vt[w]))*3,x>>>=r[A+1],v-=r[A+1],T=r[A],T===0){o=r[A+2],t=fu;break}if(T&16){s=T&15,n=r[A+2],t=lu;break}if(!(T&64)){a=T,i=A/3+r[A+2];break}if(T&32){t=ko;break}return t=Wi,m.msg="invalid literal/length code",y=-3,h.bitb=x,h.bitk=v,m.avail_in=S,m.total_in+=_-m.next_in_index,m.next_in_index=_,h.write=E,h.inflate_flush(m,y);case lu:for(w=s;v<w;){if(S!==0)y=0;else return h.bitb=x,h.bitk=v,m.avail_in=S,m.total_in+=_-m.next_in_index,m.next_in_index=_,h.write=E,h.inflate_flush(m,y);S--,x|=(m.read_byte(_++)&255)<<v,v+=8}n+=x&vt[w],x>>=w,v-=w,a=u,r=p,i=b,t=cu;case cu:for(w=a;v<w;){if(S!==0)y=0;else return h.bitb=x,h.bitk=v,m.avail_in=S,m.total_in+=_-m.next_in_index,m.next_in_index=_,h.write=E,h.inflate_flush(m,y);S--,x|=(m.read_byte(_++)&255)<<v,v+=8}if(A=(i+(x&vt[w]))*3,x>>=r[A+1],v-=r[A+1],T=r[A],T&16){s=T&15,l=r[A+2],t=uu;break}if(!(T&64)){a=T,i=A/3+r[A+2];break}return t=Wi,m.msg="invalid distance code",y=-3,h.bitb=x,h.bitk=v,m.avail_in=S,m.total_in+=_-m.next_in_index,m.next_in_index=_,h.write=E,h.inflate_flush(m,y);case uu:for(w=s;v<w;){if(S!==0)y=0;else return h.bitb=x,h.bitk=v,m.avail_in=S,m.total_in+=_-m.next_in_index,m.next_in_index=_,h.write=E,h.inflate_flush(m,y);S--,x|=(m.read_byte(_++)&255)<<v,v+=8}l+=x&vt[w],x>>=w,v-=w,t=du;case du:for(D=E-l;D<0;)D+=h.end;for(;n!==0;){if(C===0&&(E==h.end&&h.read!==0&&(E=0,C=E<h.read?h.read-E-1:h.end-E),C===0&&(h.write=E,y=h.inflate_flush(m,y),E=h.write,C=E<h.read?h.read-E-1:h.end-E,E==h.end&&h.read!==0&&(E=0,C=E<h.read?h.read-E-1:h.end-E),C===0)))return h.bitb=x,h.bitk=v,m.avail_in=S,m.total_in+=_-m.next_in_index,m.next_in_index=_,h.write=E,h.inflate_flush(m,y);h.win[E++]=h.win[D++],C--,D==h.end&&(D=0),n--}t=Hi;break;case fu:if(C===0&&(E==h.end&&h.read!==0&&(E=0,C=E<h.read?h.read-E-1:h.end-E),C===0&&(h.write=E,y=h.inflate_flush(m,y),E=h.write,C=E<h.read?h.read-E-1:h.end-E,E==h.end&&h.read!==0&&(E=0,C=E<h.read?h.read-E-1:h.end-E),C===0)))return h.bitb=x,h.bitk=v,m.avail_in=S,m.total_in+=_-m.next_in_index,m.next_in_index=_,h.write=E,h.inflate_flush(m,y);y=0,h.win[E++]=o,C--,t=Hi;break;case ko:if(v>7&&(v-=8,S++,_--),h.write=E,y=h.inflate_flush(m,y),E=h.write,C=E<h.read?h.read-E-1:h.end-E,h.read!=h.write)return h.bitb=x,h.bitk=v,m.avail_in=S,m.total_in+=_-m.next_in_index,m.next_in_index=_,h.write=E,h.inflate_flush(m,y);t=pu;case pu:return y=1,h.bitb=x,h.bitk=v,m.avail_in=S,m.total_in+=_-m.next_in_index,m.next_in_index=_,h.write=E,h.inflate_flush(m,y);case Wi:return y=-3,h.bitb=x,h.bitk=v,m.avail_in=S,m.total_in+=_-m.next_in_index,m.next_in_index=_,h.write=E,h.inflate_flush(m,y);default:return y=-2,h.bitb=x,h.bitk=v,m.avail_in=S,m.total_in+=_-m.next_in_index,m.next_in_index=_,h.write=E,h.inflate_flush(m,y)}},e.free=function(){}}var hu=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Qn=0,Co=1,mu=2,gu=3,bu=4,yu=5,qi=6,Ki=7,wu=8,Fn=9;function ob(e,t){let n=this,r=Qn,i=0,a=0,o=0,s,l=[0],c=[0],u=new ab,f=0,d=new Int32Array(Xu*3),p=0,b=new Io;n.bitk=0,n.bitb=0,n.win=new Uint8Array(t),n.end=t,n.read=0,n.write=0,n.reset=function(g,h){h&&(h[0]=p),r==qi&&u.free(g),r=Qn,n.bitk=0,n.bitb=0,n.read=n.write=0},n.reset(e,null),n.inflate_flush=function(g,h){let m,y,w;return y=g.next_out_index,w=n.read,m=(w<=n.write?n.write:n.end)-w,m>g.avail_out&&(m=g.avail_out),m!==0&&h==-5&&(h=0),g.avail_out-=m,g.total_out+=m,g.next_out.set(n.win.subarray(w,w+m),y),y+=m,w+=m,w==n.end&&(w=0,n.write==n.end&&(n.write=0),m=n.write-w,m>g.avail_out&&(m=g.avail_out),m!==0&&h==-5&&(h=0),g.avail_out-=m,g.total_out+=m,g.next_out.set(n.win.subarray(w,w+m),y),y+=m,w+=m),g.next_out_index=y,n.read=w,h},n.proc=function(g,h){let m,y,w,A,T,x,v,_;for(A=g.next_in_index,T=g.avail_in,y=n.bitb,w=n.bitk,x=n.write,v=x<n.read?n.read-x-1:n.end-x;;){let S,E,C,D,O,I,R,B;switch(r){case Qn:for(;w<3;){if(T!==0)h=0;else return n.bitb=y,n.bitk=w,g.avail_in=T,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,h);T--,y|=(g.read_byte(A++)&255)<<w,w+=8}switch(m=y&7,f=m&1,m>>>1){case 0:y>>>=3,w-=3,m=w&7,y>>>=m,w-=m,r=Co;break;case 1:S=[],E=[],C=[[]],D=[[]],Io.inflate_trees_fixed(S,E,C,D),u.init(S[0],E[0],C[0],0,D[0],0),y>>>=3,w-=3,r=qi;break;case 2:y>>>=3,w-=3,r=gu;break;case 3:return y>>>=3,w-=3,r=Fn,g.msg="invalid block type",h=-3,n.bitb=y,n.bitk=w,g.avail_in=T,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,h)}break;case Co:for(;w<32;){if(T!==0)h=0;else return n.bitb=y,n.bitk=w,g.avail_in=T,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,h);T--,y|=(g.read_byte(A++)&255)<<w,w+=8}if((~y>>>16&65535)!=(y&65535))return r=Fn,g.msg="invalid stored block lengths",h=-3,n.bitb=y,n.bitk=w,g.avail_in=T,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,h);i=y&65535,y=w=0,r=i!==0?mu:f!==0?Ki:Qn;break;case mu:if(T===0||v===0&&(x==n.end&&n.read!==0&&(x=0,v=x<n.read?n.read-x-1:n.end-x),v===0&&(n.write=x,h=n.inflate_flush(g,h),x=n.write,v=x<n.read?n.read-x-1:n.end-x,x==n.end&&n.read!==0&&(x=0,v=x<n.read?n.read-x-1:n.end-x),v===0)))return n.bitb=y,n.bitk=w,g.avail_in=T,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,h);if(h=0,m=i,m>T&&(m=T),m>v&&(m=v),n.win.set(g.read_buf(A,m),x),A+=m,T-=m,x+=m,v-=m,(i-=m)!==0)break;r=f!==0?Ki:Qn;break;case gu:for(;w<14;){if(T!==0)h=0;else return n.bitb=y,n.bitk=w,g.avail_in=T,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,h);T--,y|=(g.read_byte(A++)&255)<<w,w+=8}if(a=m=y&16383,(m&31)>29||(m>>5&31)>29)return r=Fn,g.msg="too many length or distance symbols",h=-3,n.bitb=y,n.bitk=w,g.avail_in=T,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,h);if(m=258+(m&31)+(m>>5&31),!s||s.length<m)s=[];else for(_=0;_<m;_++)s[_]=0;y>>>=14,w-=14,o=0,r=bu;case bu:for(;o<4+(a>>>10);){for(;w<3;){if(T!==0)h=0;else return n.bitb=y,n.bitk=w,g.avail_in=T,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,h);T--,y|=(g.read_byte(A++)&255)<<w,w+=8}s[hu[o++]]=y&7,y>>>=3,w-=3}for(;o<19;)s[hu[o++]]=0;if(l[0]=7,m=b.inflate_trees_bits(s,l,c,d,g),m!=0)return h=m,h==-3&&(s=null,r=Fn),n.bitb=y,n.bitk=w,g.avail_in=T,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,h);o=0,r=yu;case yu:for(;m=a,!(o>=258+(m&31)+(m>>5&31));){let F,$;for(m=l[0];w<m;){if(T!==0)h=0;else return n.bitb=y,n.bitk=w,g.avail_in=T,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,h);T--,y|=(g.read_byte(A++)&255)<<w,w+=8}if(m=d[(c[0]+(y&vt[m]))*3+1],$=d[(c[0]+(y&vt[m]))*3+2],$<16)y>>>=m,w-=m,s[o++]=$;else{for(_=$==18?7:$-14,F=$==18?11:3;w<m+_;){if(T!==0)h=0;else return n.bitb=y,n.bitk=w,g.avail_in=T,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,h);T--,y|=(g.read_byte(A++)&255)<<w,w+=8}if(y>>>=m,w-=m,F+=y&vt[_],y>>>=_,w-=_,_=o,m=a,_+F>258+(m&31)+(m>>5&31)||$==16&&_<1)return s=null,r=Fn,g.msg="invalid bit length repeat",h=-3,n.bitb=y,n.bitk=w,g.avail_in=T,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,h);$=$==16?s[_-1]:0;do s[_++]=$;while(--F!==0);o=_}}if(c[0]=-1,O=[],I=[],R=[],B=[],O[0]=9,I[0]=6,m=a,m=b.inflate_trees_dynamic(257+(m&31),1+(m>>5&31),s,O,I,R,B,d,g),m!=0)return m==-3&&(s=null,r=Fn),h=m,n.bitb=y,n.bitk=w,g.avail_in=T,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,h);u.init(O[0],I[0],d,R[0],d,B[0]),r=qi;case qi:if(n.bitb=y,n.bitk=w,g.avail_in=T,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,(h=u.proc(n,g,h))!=1)return n.inflate_flush(g,h);if(h=0,u.free(g),A=g.next_in_index,T=g.avail_in,y=n.bitb,w=n.bitk,x=n.write,v=x<n.read?n.read-x-1:n.end-x,f===0){r=Qn;break}r=Ki;case Ki:if(n.write=x,h=n.inflate_flush(g,h),x=n.write,v=x<n.read?n.read-x-1:n.end-x,n.read!=n.write)return n.bitb=y,n.bitk=w,g.avail_in=T,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,h);r=wu;case wu:return h=1,n.bitb=y,n.bitk=w,g.avail_in=T,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,h);case Fn:return h=-3,n.bitb=y,n.bitk=w,g.avail_in=T,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,h);default:return h=-2,n.bitb=y,n.bitk=w,g.avail_in=T,g.total_in+=A-g.next_in_index,g.next_in_index=A,n.write=x,n.inflate_flush(g,h)}}},n.free=function(g){n.reset(g,null),n.win=null,d=null},n.set_dictionary=function(g,h,m){n.win.set(g.subarray(h,h+m),0),n.read=n.write=m},n.sync_point=function(){return r==Co?1:0}}var sb=32,lb=8,cb=0,vu=1,xu=2,_u=3,Tu=4,Su=5,Lo=6,Nr=7,Au=12,wn=13,ub=[0,0,255,255];function db(){let e=this;e.mode=0,e.method=0,e.was=[0],e.need=0,e.marker=0,e.wbits=0;function t(n){return!n||!n.istate?-2:(n.total_in=n.total_out=0,n.msg=null,n.istate.mode=Nr,n.istate.blocks.reset(n,null),0)}e.inflateEnd=function(n){return e.blocks&&e.blocks.free(n),e.blocks=null,0},e.inflateInit=function(n,r){return n.msg=null,e.blocks=null,r<8||r>15?(e.inflateEnd(n),-2):(e.wbits=r,n.istate.blocks=new ob(n,1<<r),t(n),0)},e.inflate=function(n,r){let i,a;if(!n||!n.istate||!n.next_in)return-2;let o=n.istate;for(r=r==Y0?-5:0,i=-5;;)switch(o.mode){case cb:if(n.avail_in===0)return i;if(i=r,n.avail_in--,n.total_in++,((o.method=n.read_byte(n.next_in_index++))&15)!=lb){o.mode=wn,n.msg="unknown compression method",o.marker=5;break}if((o.method>>4)+8>o.wbits){o.mode=wn,n.msg="invalid win size",o.marker=5;break}o.mode=vu;case vu:if(n.avail_in===0)return i;if(i=r,n.avail_in--,n.total_in++,a=n.read_byte(n.next_in_index++)&255,((o.method<<8)+a)%31!==0){o.mode=wn,n.msg="incorrect header check",o.marker=5;break}if(!(a&sb)){o.mode=Nr;break}o.mode=xu;case xu:if(n.avail_in===0)return i;i=r,n.avail_in--,n.total_in++,o.need=(n.read_byte(n.next_in_index++)&255)<<24&4278190080,o.mode=_u;case _u:if(n.avail_in===0)return i;i=r,n.avail_in--,n.total_in++,o.need+=(n.read_byte(n.next_in_index++)&255)<<16&16711680,o.mode=Tu;case Tu:if(n.avail_in===0)return i;i=r,n.avail_in--,n.total_in++,o.need+=(n.read_byte(n.next_in_index++)&255)<<8&65280,o.mode=Su;case Su:return n.avail_in===0?i:(i=r,n.avail_in--,n.total_in++,o.need+=n.read_byte(n.next_in_index++)&255,o.mode=Lo,2);case Lo:return o.mode=wn,n.msg="need dictionary",o.marker=0,-2;case Nr:if(i=o.blocks.proc(n,i),i==-3){o.mode=wn,o.marker=0;break}if(i==0&&(i=r),i!=1)return i;i=r,o.blocks.reset(n,o.was),o.mode=Au;case Au:return n.avail_in=0,1;case wn:return-3;default:return-2}},e.inflateSetDictionary=function(n,r,i){let a=0,o=i;if(!n||!n.istate||n.istate.mode!=Lo)return-2;let s=n.istate;return o>=1<<s.wbits&&(o=(1<<s.wbits)-1,a=i-o),s.blocks.set_dictionary(r,a,o),s.mode=Nr,0},e.inflateSync=function(n){let r,i,a,o,s;if(!n||!n.istate)return-2;let l=n.istate;if(l.mode!=wn&&(l.mode=wn,l.marker=0),(r=n.avail_in)===0)return-5;for(i=n.next_in_index,a=l.marker;r!==0&&a<4;)n.read_byte(i)==ub[a]?a++:n.read_byte(i)!==0?a=0:a=4-a,i++,r--;return n.total_in+=i-n.next_in_index,n.next_in_index=i,n.avail_in=r,l.marker=a,a!=4?-3:(o=n.total_in,s=n.total_out,t(n),n.total_in=o,n.total_out=s,l.mode=Nr,0)},e.inflateSyncPoint=function(n){return!n||!n.istate||!n.istate.blocks?-2:n.istate.blocks.sync_point()}}function Yu(){}Yu.prototype={inflateInit(e){let t=this;return t.istate=new db,e||(e=15),t.istate.inflateInit(t,e)},inflate(e){let t=this;return t.istate?t.istate.inflate(t,e):-2},inflateEnd(){let e=this;if(!e.istate)return-2;let t=e.istate.inflateEnd(e);return e.istate=null,t},inflateSync(){let e=this;return e.istate?e.istate.inflateSync(e):-2},inflateSetDictionary(e,t){let n=this;return n.istate?n.istate.inflateSetDictionary(n,e,t):-2},read_byte(e){return this.next_in[e]},read_buf(e,t){return this.next_in.subarray(e,e+t)}};function fb(e){let t=this,n=new Yu,r=e&&e.chunkSize?Math.floor(e.chunkSize*2):128*1024,i=X0,a=new Uint8Array(r),o=!1;n.inflateInit(),n.next_out=a,t.append=function(s,l){let c=[],u,f,d=0,p=0,b=0;if(s.length!==0){n.next_in_index=0,n.next_in=s,n.avail_in=s.length;do{if(n.next_out_index=0,n.avail_out=r,n.avail_in===0&&!o&&(n.next_in_index=0,o=!0),u=n.inflate(i),o&&u===-5){if(n.avail_in!==0)throw new Error("inflating: bad input")}else if(u!==0&&u!==1)throw new Error("inflating: "+n.msg);if((o||u===1)&&n.avail_in===s.length)throw new Error("inflating: bad input");n.next_out_index&&(n.next_out_index===r?c.push(new Uint8Array(a)):c.push(a.slice(0,n.next_out_index))),b+=n.next_out_index,l&&n.next_in_index>0&&n.next_in_index!=d&&(l(n.next_in_index),d=n.next_in_index)}while(n.avail_in>0||n.avail_out===0);return c.length>1?(f=new Uint8Array(b),c.forEach(function(g){f.set(g,p),p+=g.length})):f=c[0]||new Uint8Array,f}},t.flush=function(){n.inflateEnd()}}var Xi="/",Eu=new Date(2107,11,31),ku=new Date(1980,0,1),Ue=void 0,Qi="undefined",Zu="function",Cu=class{constructor(e){return class extends TransformStream{constructor(t,n){let r=new e(n);super({transform(i,a){a.enqueue(r.append(i))},flush(i){let a=r.flush();a&&i.enqueue(a)}})}}}},pb=64,Qu=2;try{typeof navigator!=Qi&&navigator.hardwareConcurrency&&(Qu=navigator.hardwareConcurrency)}catch{}var hb={chunkSize:512*1024,maxWorkers:Qu,terminateWorkerTimeout:5e3,useWebWorkers:!0,useCompressionStream:!0,workerScripts:Ue,CompressionStreamNative:typeof CompressionStream!=Qi&&CompressionStream,DecompressionStreamNative:typeof DecompressionStream!=Qi&&DecompressionStream},Tn=Object.assign({},hb);function Vo(){return Tn}function Ju(e){return Math.max(e.chunkSize,pb)}function aa(e){let{baseURL:t,chunkSize:n,maxWorkers:r,terminateWorkerTimeout:i,useCompressionStream:a,useWebWorkers:o,Deflate:s,Inflate:l,CompressionStream:c,DecompressionStream:u,workerScripts:f}=e;if(vn("baseURL",t),vn("chunkSize",n),vn("maxWorkers",r),vn("terminateWorkerTimeout",i),vn("useCompressionStream",a),vn("useWebWorkers",o),s&&(Tn.CompressionStream=new Cu(s)),l&&(Tn.DecompressionStream=new Cu(l)),vn("CompressionStream",c),vn("DecompressionStream",u),f!==Ue){let{deflate:d,inflate:p}=f;if((d||p)&&(Tn.workerScripts||(Tn.workerScripts={})),d){if(!Array.isArray(d))throw new Error("workerScripts.deflate must be an array");Tn.workerScripts.deflate=d}if(p){if(!Array.isArray(p))throw new Error("workerScripts.inflate must be an array");Tn.workerScripts.inflate=p}}}function vn(e,t){t!==Ue&&(Tn[e]=t)}function mb(){return"application/octet-stream"}var ed=[];for(let e=0;e<256;e++){let t=e;for(let n=0;n<8;n++)t&1?t=t>>>1^3988292384:t=t>>>1;ed[e]=t}var Ji=class{constructor(e){this.crc=e||-1}append(e){let t=this.crc|0;for(let n=0,r=e.length|0;n<r;n++)t=t>>>8^ed[(t^e[n])&255];this.crc=t}get(){return~this.crc}},td=class extends TransformStream{constructor(){let e=new Ji;super({transform(t){e.append(t)},flush(t){let n=new Uint8Array(4);new DataView(n.buffer).setUint32(0,e.get()),t.enqueue(n)}})}};function Fo(e){if(typeof TextEncoder>"u"){e=unescape(encodeURIComponent(e));let t=new Uint8Array(e.length);for(let n=0;n<t.length;n++)t[n]=e.charCodeAt(n);return t}else return new TextEncoder().encode(e)}var ct={concat(e,t){if(e.length===0||t.length===0)return e.concat(t);let n=e[e.length-1],r=ct.getPartial(n);return r===32?e.concat(t):ct._shiftRight(t,r,n|0,e.slice(0,e.length-1))},bitLength(e){let t=e.length;if(t===0)return 0;let n=e[t-1];return(t-1)*32+ct.getPartial(n)},clamp(e,t){if(e.length*32<t)return e;e=e.slice(0,Math.ceil(t/32));let n=e.length;return t=t&31,n>0&&t&&(e[n-1]=ct.partial(t,e[n-1]&2147483648>>t-1,1)),e},partial(e,t,n){return e===32?t:(n?t|0:t<<32-e)+e*1099511627776},getPartial(e){return Math.round(e/1099511627776)||32},_shiftRight(e,t,n,r){for(r===void 0&&(r=[]);t>=32;t-=32)r.push(n),n=0;if(t===0)return r.concat(e);for(let o=0;o<e.length;o++)r.push(n|e[o]>>>t),n=e[o]<<32-t;let i=e.length?e[e.length-1]:0,a=ct.getPartial(i);return r.push(ct.partial(t+a&31,t+a>32?n:r.pop(),1)),r}},ea={bytes:{fromBits(e){let t=ct.bitLength(e)/8,n=new Uint8Array(t),r;for(let i=0;i<t;i++)i&3||(r=e[i/4]),n[i]=r>>>24,r<<=8;return n},toBits(e){let t=[],n,r=0;for(n=0;n<e.length;n++)r=r<<8|e[n],(n&3)===3&&(t.push(r),r=0);return n&3&&t.push(ct.partial(8*(n&3),r)),t}}},nd={};nd.sha1=class{constructor(e){let t=this;t.blockSize=512,t._init=[1732584193,4023233417,2562383102,271733878,3285377520],t._key=[1518500249,1859775393,2400959708,3395469782],e?(t._h=e._h.slice(0),t._buffer=e._buffer.slice(0),t._length=e._length):t.reset()}reset(){let e=this;return e._h=e._init.slice(0),e._buffer=[],e._length=0,e}update(e){let t=this;typeof e=="string"&&(e=ea.utf8String.toBits(e));let n=t._buffer=ct.concat(t._buffer,e),r=t._length,i=t._length=r+ct.bitLength(e);if(i>9007199254740991)throw new Error("Cannot hash more than 2^53 - 1 bits");let a=new Uint32Array(n),o=0;for(let s=t.blockSize+r-(t.blockSize+r&t.blockSize-1);s<=i;s+=t.blockSize)t._block(a.subarray(16*o,16*(o+1))),o+=1;return n.splice(0,16*o),t}finalize(){let e=this,t=e._buffer,n=e._h;t=ct.concat(t,[ct.partial(1,1)]);for(let r=t.length+2;r&15;r++)t.push(0);for(t.push(Math.floor(e._length/4294967296)),t.push(e._length|0);t.length;)e._block(t.splice(0,16));return e.reset(),n}_f(e,t,n,r){if(e<=19)return t&n|~t&r;if(e<=39)return t^n^r;if(e<=59)return t&n|t&r|n&r;if(e<=79)return t^n^r}_S(e,t){return t<<e|t>>>32-e}_block(e){let t=this,n=t._h,r=Array(80);for(let c=0;c<16;c++)r[c]=e[c];let i=n[0],a=n[1],o=n[2],s=n[3],l=n[4];for(let c=0;c<=79;c++){c>=16&&(r[c]=t._S(1,r[c-3]^r[c-8]^r[c-14]^r[c-16]));let u=t._S(5,i)+t._f(c,a,o,s)+l+r[c]+t._key[Math.floor(c/20)]|0;l=s,s=o,o=t._S(30,a),a=i,i=u}n[0]=n[0]+i|0,n[1]=n[1]+a|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[4]+l|0}};var rd={};rd.aes=class{constructor(e){let t=this;t._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],t._tables[0][0][0]||t._precompute();let n=t._tables[0][4],r=t._tables[1],i=e.length,a,o,s,l=1;if(i!==4&&i!==6&&i!==8)throw new Error("invalid aes key size");for(t._key=[o=e.slice(0),s=[]],a=i;a<4*i+28;a++){let c=o[a-1];(a%i===0||i===8&&a%i===4)&&(c=n[c>>>24]<<24^n[c>>16&255]<<16^n[c>>8&255]<<8^n[c&255],a%i===0&&(c=c<<8^c>>>24^l<<24,l=l<<1^(l>>7)*283)),o[a]=o[a-i]^c}for(let c=0;a;c++,a--){let u=o[c&3?a:a-4];a<=4||c<4?s[c]=u:s[c]=r[0][n[u>>>24]]^r[1][n[u>>16&255]]^r[2][n[u>>8&255]]^r[3][n[u&255]]}}encrypt(e){return this._crypt(e,0)}decrypt(e){return this._crypt(e,1)}_precompute(){let e=this._tables[0],t=this._tables[1],n=e[4],r=t[4],i=[],a=[],o,s,l,c;for(let u=0;u<256;u++)a[(i[u]=u<<1^(u>>7)*283)^u]=u;for(let u=o=0;!n[u];u^=s||1,o=a[o]||1){let f=o^o<<1^o<<2^o<<3^o<<4;f=f>>8^f&255^99,n[u]=f,r[f]=u,c=i[l=i[s=i[u]]];let d=c*16843009^l*65537^s*257^u*16843008,p=i[f]*257^f*16843008;for(let b=0;b<4;b++)e[b][u]=p=p<<24^p>>>8,t[b][f]=d=d<<24^d>>>8}for(let u=0;u<5;u++)e[u]=e[u].slice(0),t[u]=t[u].slice(0)}_crypt(e,t){if(e.length!==4)throw new Error("invalid aes block size");let n=this._key[t],r=n.length/4-2,i=[0,0,0,0],a=this._tables[t],o=a[0],s=a[1],l=a[2],c=a[3],u=a[4],f=e[0]^n[0],d=e[t?3:1]^n[1],p=e[2]^n[2],b=e[t?1:3]^n[3],g=4,h,m,y;for(let w=0;w<r;w++)h=o[f>>>24]^s[d>>16&255]^l[p>>8&255]^c[b&255]^n[g],m=o[d>>>24]^s[p>>16&255]^l[b>>8&255]^c[f&255]^n[g+1],y=o[p>>>24]^s[b>>16&255]^l[f>>8&255]^c[d&255]^n[g+2],b=o[b>>>24]^s[f>>16&255]^l[d>>8&255]^c[p&255]^n[g+3],g+=4,f=h,d=m,p=y;for(let w=0;w<4;w++)i[t?3&-w:w]=u[f>>>24]<<24^u[d>>16&255]<<16^u[p>>8&255]<<8^u[b&255]^n[g++],h=f,f=d,d=p,p=b,b=h;return i}};var gb={getRandomValues(e){let t=new Uint32Array(e.buffer),n=r=>{let i=987654321,a=4294967295;return function(){return i=36969*(i&65535)+(i>>16)&a,r=18e3*(r&65535)+(r>>16)&a,(((i<<16)+r&a)/4294967296+.5)*(Math.random()>.5?1:-1)}};for(let r=0,i;r<e.length;r+=4){let a=n((i||Math.random())*4294967296);i=a()*987654071,t[r/4]=a()*4294967296|0}return e}},id={};id.ctrGladman=class{constructor(e,t){this._prf=e,this._initIv=t,this._iv=t}reset(){this._iv=this._initIv}update(e){return this.calculate(this._prf,e,this._iv)}incWord(e){if((e>>24&255)===255){let t=e>>16&255,n=e>>8&255,r=e&255;t===255?(t=0,n===255?(n=0,r===255?r=0:++r):++n):++t,e=0,e+=t<<16,e+=n<<8,e+=r}else e+=1<<24;return e}incCounter(e){(e[0]=this.incWord(e[0]))===0&&(e[1]=this.incWord(e[1]))}calculate(e,t,n){let r;if(!(r=t.length))return[];let i=ct.bitLength(t);for(let a=0;a<r;a+=4){this.incCounter(n);let o=e.encrypt(n);t[a]^=o[0],t[a+1]^=o[1],t[a+2]^=o[2],t[a+3]^=o[3]}return ct.clamp(t,i)}};var zn={importKey(e){return new zn.hmacSha1(ea.bytes.toBits(e))},pbkdf2(e,t,n,r){if(n=n||1e4,r<0||n<0)throw new Error("invalid params to pbkdf2");let i=(r>>5)+1<<2,a,o,s,l,c,u=new ArrayBuffer(i),f=new DataView(u),d=0,p=ct;for(t=ea.bytes.toBits(t),c=1;d<(i||1);c++){for(a=o=e.encrypt(p.concat(t,[c])),s=1;s<n;s++)for(o=e.encrypt(o),l=0;l<o.length;l++)a[l]^=o[l];for(s=0;d<(i||1)&&s<a.length;s++)f.setInt32(d,a[s]),d+=4}return u.slice(0,r/8)}};zn.hmacSha1=class{constructor(e){let t=this,n=t._hash=nd.sha1,r=[[],[]];t._baseHash=[new n,new n];let i=t._baseHash[0].blockSize/32;e.length>i&&(e=new n().update(e).finalize());for(let a=0;a<i;a++)r[0][a]=e[a]^909522486,r[1][a]=e[a]^1549556828;t._baseHash[0].update(r[0]),t._baseHash[1].update(r[1]),t._resultHash=new n(t._baseHash[0])}reset(){let e=this;e._resultHash=new e._hash(e._baseHash[0]),e._updated=!1}update(e){let t=this;t._updated=!0,t._resultHash.update(e)}digest(){let e=this,t=e._resultHash.finalize(),n=new e._hash(e._baseHash[1]).update(t).finalize();return e.reset(),n}encrypt(e){if(this._updated)throw new Error("encrypt on already updated hmac called!");return this.update(e),this.digest(e)}};var bb=typeof crypto<"u"&&typeof crypto.getRandomValues=="function",Xo="Invalid password",Yo="Invalid signature";function ad(e){return bb?crypto.getRandomValues(e):gb.getRandomValues(e)}var Jn=16,yb="raw",od={name:"PBKDF2"},wb={name:"HMAC"},vb="SHA-1",xb=Object.assign({hash:wb},od),Bo=Object.assign({iterations:1e3,hash:{name:vb}},od),_b=["deriveBits"],Ir=[8,12,16],Mr=[16,24,32],xn=10,Tb=[0,0,0,0],sd="undefined",ld="function",oa=typeof crypto!=sd,Ur=oa&&crypto.subtle,cd=oa&&typeof Ur!=sd,Xt=ea.bytes,Sb=rd.aes,Ab=id.ctrGladman,Eb=zn.hmacSha1,Lu=oa&&cd&&typeof Ur.importKey==ld,Ou=oa&&cd&&typeof Ur.deriveBits==ld,kb=class extends TransformStream{constructor({password:e,signed:t,encryptionStrength:n}){super({start(){Object.assign(this,{ready:new Promise(r=>this.resolveReady=r),password:e,signed:t,strength:n-1,pending:new Uint8Array})},async transform(r,i){let a=this,{password:o,strength:s,resolveReady:l,ready:c}=a;o?(await Lb(a,s,o,Lt(r,0,Ir[s]+2)),r=Lt(r,Ir[s]+2),l()):await c;let u=new Uint8Array(r.length-xn-(r.length-xn)%Jn);i.enqueue(ud(a,r,u,0,xn,!0))},async flush(r){let{signed:i,ctr:a,hmac:o,pending:s,ready:l}=this;await l;let c=Lt(s,0,s.length-xn),u=Lt(s,s.length-xn),f=new Uint8Array;if(c.length){let d=Br(Xt,c);o.update(d);let p=a.update(d);f=Fr(Xt,p)}if(i){let d=Lt(Fr(Xt,o.digest()),0,xn);for(let p=0;p<xn;p++)if(d[p]!=u[p])throw new Error(Yo)}r.enqueue(f)}})}},Cb=class extends TransformStream{constructor({password:e,encryptionStrength:t}){let n;super({start(){Object.assign(this,{ready:new Promise(r=>this.resolveReady=r),password:e,strength:t-1,pending:new Uint8Array})},async transform(r,i){let a=this,{password:o,strength:s,resolveReady:l,ready:c}=a,u=new Uint8Array;o?(u=await Ob(a,s,o),l()):await c;let f=new Uint8Array(u.length+r.length-r.length%Jn);f.set(u,0),i.enqueue(ud(a,r,f,u.length,0))},async flush(r){let{ctr:i,hmac:a,pending:o,ready:s}=this;await s;let l=new Uint8Array;if(o.length){let c=i.update(Br(Xt,o));a.update(c),l=Fr(Xt,c)}n.signature=Fr(Xt,a.digest()).slice(0,xn),r.enqueue(Zo(l,n.signature))}}),n=this}};function ud(e,t,n,r,i,a){let{ctr:o,hmac:s,pending:l}=e,c=t.length-i;l.length&&(t=Zo(l,t),n=Pb(n,c-c%Jn));let u;for(u=0;u<=c-Jn;u+=Jn){let f=Br(Xt,Lt(t,u,u+Jn));a&&s.update(f);let d=o.update(f);a||s.update(d),n.set(Fr(Xt,d),u+r)}return e.pending=Lt(t,u),n}async function Lb(e,t,n,r){let i=await dd(e,t,n,Lt(r,0,Ir[t])),a=Lt(r,Ir[t]);if(i[0]!=a[0]||i[1]!=a[1])throw new Error(Xo)}async function Ob(e,t,n){let r=ad(new Uint8Array(Ir[t])),i=await dd(e,t,n,r);return Zo(r,i)}async function dd(e,t,n,r){e.password=null;let i=Fo(n),a=await Db(yb,i,xb,!1,_b),o=await Rb(Object.assign({salt:r},Bo),a,8*(Mr[t]*2+2)),s=new Uint8Array(o),l=Br(Xt,Lt(s,0,Mr[t])),c=Br(Xt,Lt(s,Mr[t],Mr[t]*2)),u=Lt(s,Mr[t]*2);return Object.assign(e,{keys:{key:l,authentication:c,passwordVerification:u},ctr:new Ab(new Sb(l),Array.from(Tb)),hmac:new Eb(c)}),u}async function Db(e,t,n,r,i){if(Lu)try{return await Ur.importKey(e,t,n,r,i)}catch{return Lu=!1,zn.importKey(t)}else return zn.importKey(t)}async function Rb(e,t,n){if(Ou)try{return await Ur.deriveBits(e,t,n)}catch{return Ou=!1,zn.pbkdf2(t,e.salt,Bo.iterations,n)}else return zn.pbkdf2(t,e.salt,Bo.iterations,n)}function Zo(e,t){let n=e;return e.length+t.length&&(n=new Uint8Array(e.length+t.length),n.set(e,0),n.set(t,e.length)),n}function Pb(e,t){if(t&&t>e.length){let n=e;e=new Uint8Array(t),e.set(n,0)}return e}function Lt(e,t,n){return e.subarray(t,n)}function Fr(e,t){return e.fromBits(t)}function Br(e,t){return e.toBits(t)}var er=12,Nb=class extends TransformStream{constructor({password:e,passwordVerification:t}){super({start(){Object.assign(this,{password:e,passwordVerification:t}),fd(this,e)},transform(n,r){let i=this;if(i.password){let a=Du(i,n.subarray(0,er));if(i.password=null,a[er-1]!=i.passwordVerification)throw new Error(Xo);n=n.subarray(er)}r.enqueue(Du(i,n))}})}},Mb=class extends TransformStream{constructor({password:e,passwordVerification:t}){super({start(){Object.assign(this,{password:e,passwordVerification:t}),fd(this,e)},transform(n,r){let i=this,a,o;if(i.password){i.password=null;let s=ad(new Uint8Array(er));s[er-1]=i.passwordVerification,a=new Uint8Array(n.length+s.length),a.set(Ru(i,s),0),o=er}else a=new Uint8Array(n.length),o=0;a.set(Ru(i,n),o),r.enqueue(a)}})}};function Du(e,t){let n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=pd(e)^t[r],Qo(e,n[r]);return n}function Ru(e,t){let n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=pd(e)^t[r],Qo(e,t[r]);return n}function fd(e,t){let n=[305419896,591751049,878082192];Object.assign(e,{keys:n,crcKey0:new Ji(n[0]),crcKey2:new Ji(n[2])});for(let r=0;r<t.length;r++)Qo(e,t.charCodeAt(r))}function Qo(e,t){let[n,r,i]=e.keys;e.crcKey0.append([t]),n=~e.crcKey0.get(),r=Pu(Math.imul(Pu(r+hd(n)),134775813)+1),e.crcKey2.append([r>>>24]),i=~e.crcKey2.get(),e.keys=[n,r,i]}function pd(e){let t=e.keys[2]|2;return hd(Math.imul(t,t^1)>>>8)}function hd(e){return e&255}function Pu(e){return e&4294967295}var Nu="deflate-raw",Ib=class extends TransformStream{constructor(e,{chunkSize:t,CompressionStream:n,CompressionStreamNative:r}){super({});let{compressed:i,encrypted:a,useCompressionStream:o,zipCrypto:s,signed:l,level:c}=e,u=this,f,d,p=md(super.readable);(!a||s)&&l&&([p,f]=p.tee(),f=Yt(f,new td)),i&&(p=bd(p,o,{level:c,chunkSize:t},r,n)),a&&(s?p=Yt(p,new Mb(e)):(d=new Cb(e),p=Yt(p,d))),gd(u,p,async()=>{let b;a&&!s&&(b=d.signature),(!a||s)&&l&&(b=await f.getReader().read(),b=new DataView(b.value.buffer).getUint32(0)),u.signature=b})}},Fb=class extends TransformStream{constructor(e,{chunkSize:t,DecompressionStream:n,DecompressionStreamNative:r}){super({});let{zipCrypto:i,encrypted:a,signed:o,signature:s,compressed:l,useCompressionStream:c}=e,u,f,d=md(super.readable);a&&(i?d=Yt(d,new Nb(e)):(f=new kb(e),d=Yt(d,f))),l&&(d=bd(d,c,{chunkSize:t},r,n)),(!a||i)&&o&&([d,u]=d.tee(),u=Yt(u,new td)),gd(this,d,async()=>{if((!a||i)&&o){let p=await u.getReader().read(),b=new DataView(p.value.buffer);if(s!=b.getUint32(0,!1))throw new Error(Yo)}})}};function md(e){return Yt(e,new TransformStream({transform(t,n){t&&t.length&&n.enqueue(t)}}))}function gd(e,t,n){t=Yt(t,new TransformStream({flush:n})),Object.defineProperty(e,"readable",{get(){return t}})}function bd(e,t,n,r,i){try{let a=t&&r?r:i;e=Yt(e,new a(Nu,n))}catch(a){if(t)e=Yt(e,new i(Nu,n));else throw a}return e}function Yt(e,t){return e.pipeThrough(t)}var Bb="message",zb="start",Ub="pull",Mu="data",jb="ack",$b="close",yd="deflate",wd="inflate",Hb=class extends TransformStream{constructor(e,t){super({});let n=this,{codecType:r}=e,i;r.startsWith(yd)?i=Ib:r.startsWith(wd)&&(i=Fb);let a=0,o=new i(e,t),s=super.readable,l=new TransformStream({transform(c,u){c&&c.length&&(a+=c.length,u.enqueue(c))},flush(){let{signature:c}=o;Object.assign(n,{signature:c,size:a})}});Object.defineProperty(n,"readable",{get(){return s.pipeThrough(o).pipeThrough(l)}})}},Wb=typeof Worker!=Qi,Oo=class{constructor(e,{readable:t,writable:n},{options:r,config:i,streamOptions:a,useWebWorkers:o,transferStreams:s,scripts:l},c){let{signal:u}=a;return Object.assign(e,{busy:!0,readable:t.pipeThrough(new qb(t,a,i),{signal:u}),writable:n,options:Object.assign({},r),scripts:l,transferStreams:s,terminate(){let{worker:f,busy:d}=e;f&&!d&&(f.terminate(),e.interface=null)},onTaskFinished(){e.busy=!1,c(e)}}),(o&&Wb?Gb:Kb)(e,i)}},qb=class extends TransformStream{constructor(e,{onstart:t,onprogress:n,size:r,onend:i},{chunkSize:a}){let o=0;super({start(){t&&Do(t,r)},async transform(s,l){o+=s.length,n&&await Do(n,o,r),l.enqueue(s)},flush(){e.size=o,i&&Do(i,o)}},{highWaterMark:1,size:()=>a})}};async function Do(e,...t){try{await e(...t)}catch{}}function Kb(e,t){return{run:()=>Vb(e,t)}}function Gb(e,{baseURL:t,chunkSize:n}){return e.interface||Object.assign(e,{worker:Zb(e.scripts[0],t,e),interface:{run:()=>Xb(e,{chunkSize:n})}}),e.interface}async function Vb({options:e,readable:t,writable:n,onTaskFinished:r},i){let a=new Hb(e,i);try{await t.pipeThrough(a).pipeTo(n,{preventClose:!0,preventAbort:!0});let{signature:o,size:s}=a;return{signature:o,size:s}}finally{r()}}async function Xb(e,t){let n,r,i=new Promise((f,d)=>{n=f,r=d});Object.assign(e,{reader:null,writer:null,resolveResult:n,rejectResult:r,result:i});let{readable:a,options:o,scripts:s}=e,{writable:l,closed:c}=Yb(e.writable);zo({type:zb,scripts:s.slice(1),options:o,config:t,readable:a,writable:l},e)||Object.assign(e,{reader:a.getReader(),writer:l.getWriter()});let u=await i;try{await l.close()}catch{}return await c,u}function Yb(e){let t=e.getWriter(),n,r=new Promise(i=>n=i);return{writable:new WritableStream({async write(i){await t.ready,await t.write(i)},close(){t.releaseLock(),n()},abort(i){return t.abort(i)}}),closed:r}}var Iu=!0,Fu=!0;function Zb(e,t,n){let r={type:"module"},i,a;typeof e==Zu&&(e=e());try{i=new URL(e,t)}catch{i=e}if(Iu)try{a=new Worker(i)}catch{Iu=!1,a=new Worker(i,r)}else a=new Worker(i,r);return a.addEventListener(Bb,o=>Qb(o,n)),a}function zo(e,{worker:t,writer:n,onTaskFinished:r,transferStreams:i}){try{let{value:a,readable:o,writable:s}=e,l=[];if(a){let{buffer:c,length:u}=a;u!=c.byteLength&&(a=new Uint8Array(a)),e.value=a.buffer,l.push(e.value)}if(i&&Fu?(o&&l.push(o),s&&l.push(s)):e.readable=e.writable=null,l.length)try{return t.postMessage(e,l),!0}catch{Fu=!1,e.readable=e.writable=null,t.postMessage(e)}else t.postMessage(e)}catch(a){throw n&&n.releaseLock(),r(),a}}async function Qb({data:e},t){let{type:n,value:r,messageId:i,result:a,error:o}=e,{reader:s,writer:l,resolveResult:c,rejectResult:u,onTaskFinished:f}=t;try{if(o){let{message:p,stack:b,code:g,name:h}=o,m=new Error(p);Object.assign(m,{stack:b,code:g,name:h}),d(m)}else{if(n==Ub){let{value:p,done:b}=await s.read();zo({type:Mu,value:p,done:b,messageId:i},t)}n==Mu&&(await l.ready,await l.write(new Uint8Array(r)),zo({type:jb,messageId:i},t)),n==$b&&d(null,a)}}catch(p){d(p)}function d(p,b){p?u(p):c(b),l&&l.releaseLock(),f()}}var _n=[],Ro=[],Bu=0;async function vd(e,t){let{options:n,config:r}=t,{transferStreams:i,useWebWorkers:a,useCompressionStream:o,codecType:s,compressed:l,signed:c,encrypted:u}=n,{workerScripts:f,maxWorkers:d,terminateWorkerTimeout:p}=r;t.transferStreams=i||i===Ue;let b=!l&&!c&&!u&&!t.transferStreams;t.useWebWorkers=!b&&(a||a===Ue&&r.useWebWorkers),t.scripts=t.useWebWorkers&&f?f[s]:[],n.useCompressionStream=o||o===Ue&&r.useCompressionStream;let g,h=_n.find(y=>!y.busy);if(h)Uo(h),g=new Oo(h,e,t,m);else if(_n.length<d){let y={indexWorker:Bu};Bu++,_n.push(y),g=new Oo(y,e,t,m)}else g=await new Promise(y=>Ro.push({resolve:y,stream:e,workerOptions:t}));return g.run();function m(y){if(Ro.length){let[{resolve:w,stream:A,workerOptions:T}]=Ro.splice(0,1);w(new Oo(y,A,T,m))}else y.worker?(Uo(y),Number.isFinite(p)&&p>=0&&(y.terminateTimeout=setTimeout(()=>{_n=_n.filter(w=>w!=y),y.terminate()},p))):_n=_n.filter(w=>w!=y)}}function Uo(e){let{terminateTimeout:t}=e;t&&(clearTimeout(t),e.terminateTimeout=null)}function Jb(){_n.forEach(e=>{Uo(e),e.terminate()})}var xd="HTTP error ",jr="HTTP Range not supported",_d="Writer iterator completed too soon",ey="text/plain",ty="Content-Length",ny="Content-Range",ry="Accept-Ranges",iy="Range",ay="Content-Type",oy="HEAD",Jo="GET",Td="bytes",sy=64*1024,es="writable",sa=class{constructor(){this.size=0}init(){this.initialized=!0}},Sn=class extends sa{get readable(){let e=this,{chunkSize:t=sy}=e,n=new ReadableStream({start(){this.chunkOffset=0},async pull(r){let{offset:i=0,size:a,diskNumberStart:o}=n,{chunkOffset:s}=this;r.enqueue(await rt(e,i+s,Math.min(t,a-s),o)),s+t>a?r.close():this.chunkOffset+=t}});return n}},ts=class extends sa{constructor(){super();let e=this,t=new WritableStream({write(n){return e.writeUint8Array(n)}});Object.defineProperty(e,es,{get(){return t}})}writeUint8Array(){}},ly=class extends Sn{constructor(e){super();let t=e.length;for(;e.charAt(t-1)=="=";)t--;let n=e.indexOf(",")+1;Object.assign(this,{dataURI:e,dataStart:n,size:Math.floor((t-n)*.75)})}readUint8Array(e,t){let{dataStart:n,dataURI:r}=this,i=new Uint8Array(t),a=Math.floor(e/3)*4,o=atob(r.substring(a+n,Math.ceil((e+t)/3)*4+n)),s=e-Math.floor(a/4)*3;for(let l=s;l<s+t;l++)i[l-s]=o.charCodeAt(l);return i}},cy=class extends ts{constructor(e){super(),Object.assign(this,{data:"data:"+(e||"")+";base64,",pending:[]})}writeUint8Array(e){let t=this,n=0,r=t.pending,i=t.pending.length;for(t.pending="",n=0;n<Math.floor((i+e.length)/3)*3-i;n++)r+=String.fromCharCode(e[n]);for(;n<e.length;n++)t.pending+=String.fromCharCode(e[n]);r.length>2?t.data+=btoa(r):t.pending=r}getData(){return this.data+btoa(this.pending)}},ns=class extends Sn{constructor(e){super(),Object.assign(this,{blob:e,size:e.size})}async readUint8Array(e,t){let n=this,r=e+t,i=e||r<n.size?n.blob.slice(e,r):n.blob;return new Uint8Array(await i.arrayBuffer())}},rs=class extends sa{constructor(e){super();let t=this,n=new TransformStream,r=[];e&&r.push([ay,e]),Object.defineProperty(t,es,{get(){return n.writable}}),t.blob=new Response(n.readable,{headers:r}).blob()}getData(){return this.blob}},uy=class extends ns{constructor(e){super(new Blob([e],{type:ey}))}},dy=class extends rs{constructor(e){super(e),Object.assign(this,{encoding:e,utf8:!e||e.toLowerCase()=="utf-8"})}async getData(){let{encoding:e,utf8:t}=this,n=await super.getData();if(n.text&&t)return n.text();{let r=new FileReader;return new Promise((i,a)=>{Object.assign(r,{onload:({target:o})=>i(o.result),onerror:()=>a(r.error)}),r.readAsText(n,e)})}}},fy=class extends Sn{constructor(e,t){super(),Sd(this,e,t)}async init(){await Ad(this,jo,zu),super.init()}readUint8Array(e,t){return Ed(this,e,t,jo,zu)}},py=class extends Sn{constructor(e,t){super(),Sd(this,e,t)}async init(){await Ad(this,$o,Uu),super.init()}readUint8Array(e,t){return Ed(this,e,t,$o,Uu)}};function Sd(e,t,n){let{preventHeadRequest:r,useRangeHeader:i,forceRangeRequests:a}=n;n=Object.assign({},n),delete n.preventHeadRequest,delete n.useRangeHeader,delete n.forceRangeRequests,delete n.useXHR,Object.assign(e,{url:t,options:n,preventHeadRequest:r,useRangeHeader:i,forceRangeRequests:a})}async function Ad(e,t,n){let{url:r,useRangeHeader:i,forceRangeRequests:a}=e;if(by(r)&&(i||a)){let{headers:o}=await t(Jo,e,kd(e));if(!a&&o.get(ry)!=Td)throw new Error(jr);{let s,l=o.get(ny);if(l){let c=l.trim().split(/\s*\/\s*/);if(c.length){let u=c[1];u&&u!="*"&&(s=Number(u))}}s===Ue?await ju(e,t,n):e.size=s}}else await ju(e,t,n)}async function Ed(e,t,n,r,i){let{useRangeHeader:a,forceRangeRequests:o,options:s}=e;if(a||o){let l=await r(Jo,e,kd(e,t,n));if(l.status!=206)throw new Error(jr);return new Uint8Array(await l.arrayBuffer())}else{let{data:l}=e;return l||await i(e,s),new Uint8Array(e.data.subarray(t,t+n))}}function kd(e,t=0,n=1){return Object.assign({},is(e),{[iy]:Td+"="+t+"-"+(t+n-1)})}function is({options:e}){let{headers:t}=e;if(t)return Symbol.iterator in t?Object.fromEntries(t):t}async function zu(e){await Cd(e,jo)}async function Uu(e){await Cd(e,$o)}async function Cd(e,t){let n=await t(Jo,e,is(e));e.data=new Uint8Array(await n.arrayBuffer()),e.size||(e.size=e.data.length)}async function ju(e,t,n){if(e.preventHeadRequest)await n(e,e.options);else{let r=(await t(oy,e,is(e))).headers.get(ty);r?e.size=Number(r):await n(e,e.options)}}async function jo(e,{options:t,url:n},r){let i=await fetch(n,Object.assign({},t,{method:e,headers:r}));if(i.status<400)return i;throw i.status==416?new Error(jr):new Error(xd+(i.statusText||i.status))}function $o(e,{url:t},n){return new Promise((r,i)=>{let a=new XMLHttpRequest;if(a.addEventListener("load",()=>{if(a.status<400){let o=[];a.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach(s=>{let l=s.trim().split(/\s*:\s*/);l[0]=l[0].trim().replace(/^[a-z]|-[a-z]/g,c=>c.toUpperCase()),o.push(l)}),r({status:a.status,arrayBuffer:()=>a.response,headers:new Map(o)})}else i(a.status==416?new Error(jr):new Error(xd+(a.statusText||a.status)))},!1),a.addEventListener("error",o=>i(o.detail.error),!1),a.open(e,t),n)for(let o of Object.entries(n))a.setRequestHeader(o[0],o[1]);a.responseType="arraybuffer",a.send()})}var Ld=class extends Sn{constructor(e,t={}){super(),Object.assign(this,{url:e,reader:t.useXHR?new py(e,t):new fy(e,t)})}set size(e){}get size(){return this.reader.size}async init(){await this.reader.init(),super.init()}readUint8Array(e,t){return this.reader.readUint8Array(e,t)}},hy=class extends Ld{constructor(e,t={}){t.useRangeHeader=!0,super(e,t)}},my=class extends Sn{constructor(e){super(),Object.assign(this,{array:e,size:e.length})}readUint8Array(e,t){return this.array.slice(e,e+t)}},gy=class extends ts{init(e=0){Object.assign(this,{offset:0,array:new Uint8Array(e)}),super.init()}writeUint8Array(e){let t=this;if(t.offset+e.length>t.array.length){let n=t.array;t.array=new Uint8Array(n.length+e.length),t.array.set(n)}t.array.set(e,t.offset),t.offset+=e.length}getData(){return this.array}},as=class extends Sn{constructor(e){super(),this.readers=e}async init(){let e=this,{readers:t}=e;e.lastDiskNumber=0,await Promise.all(t.map(async n=>{await n.init(),e.size+=n.size})),super.init()}async readUint8Array(e,t,n=0){let r=this,{readers:i}=this,a,o=n;o==-1&&(o=i.length-1);let s=e;for(;s>=i[o].size;)s-=i[o].size,o++;let l=i[o],c=l.size;if(s+t<=c)a=await rt(l,s,t);else{let u=c-s;a=new Uint8Array(t),a.set(await rt(l,s,u)),a.set(await r.readUint8Array(e+u,t-u,n),u)}return r.lastDiskNumber=Math.max(o,r.lastDiskNumber),a}},zr=class extends sa{constructor(e,t=4294967295){super();let n=this;Object.assign(n,{diskNumber:0,diskOffset:0,size:0,maxSize:t,availableSize:t});let r,i,a,o=new WritableStream({async write(c){let{availableSize:u}=n;if(a)c.length>=u?(await s(c.slice(0,u)),await l(),n.diskOffset+=r.size,n.diskNumber++,a=null,await this.write(c.slice(u))):await s(c);else{let{value:f,done:d}=await e.next();if(d&&!f)throw new Error(_d);r=f,r.size=0,r.maxSize&&(n.maxSize=r.maxSize),n.availableSize=n.maxSize,await on(r),i=f.writable,a=i.getWriter(),await this.write(c)}},async close(){await a.ready,await l()}});Object.defineProperty(n,es,{get(){return o}});async function s(c){let u=c.length;u&&(await a.ready,await a.write(c),r.size+=u,n.size+=u,n.availableSize-=u)}async function l(){i.size=r.size,await a.close()}}};function by(e){let{baseURL:t}=Vo(),{protocol:n}=new URL(e,t);return n=="http:"||n=="https:"}async function on(e,t){e.init&&!e.initialized&&await e.init(t)}function os(e){return Array.isArray(e)&&(e=new as(e)),e instanceof ReadableStream&&(e={readable:e}),e}function ss(e){e.writable===Ue&&typeof e.next==Zu&&(e=new zr(e)),e instanceof WritableStream&&(e={writable:e});let{writable:t}=e;return t.size===Ue&&(t.size=0),e instanceof zr||Object.assign(e,{diskNumber:0,diskOffset:0,availableSize:1/0,maxSize:1/0}),e}function rt(e,t,n,r){return e.readUint8Array(t,n,r)}var yy=as,wy=zr,Od="\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0 ".split(""),vy=Od.length==256;function xy(e){if(vy){let t="";for(let n=0;n<e.length;n++)t+=Od[e[n]];return t}else return new TextDecoder().decode(e)}function Ho(e,t){return t&&t.trim().toLowerCase()=="cp437"?xy(e):new TextDecoder(t).decode(e)}var Dd="filename",Rd="rawFilename",Pd="comment",Nd="rawComment",Md="uncompressedSize",Id="compressedSize",Fd="offset",Wo="diskNumberStart",ls="lastModDate",Bd="rawLastModDate",cs="lastAccessDate",_y="rawLastAccessDate",us="creationDate",Ty="rawCreationDate",zd="internalFileAttribute",Ud="externalFileAttribute",jd="msDosCompatible",$d="zip64",Sy=[Dd,Rd,Id,Md,ls,Bd,Pd,Nd,cs,us,Fd,Wo,Wo,zd,Ud,jd,$d,"directory","bitFlag","encrypted","signature","filenameUTF8","commentUTF8","compressionMethod","version","versionMadeBy","extraField","rawExtraField","extraFieldZip64","extraFieldUnicodePath","extraFieldUnicodeComment","extraFieldAES","extraFieldNTFS","extraFieldExtendedTimestamp"],ta=class{constructor(e){Sy.forEach(t=>this[t]=e[t])}},Yi="File format is not recognized",Hd="End of central directory not found",Wd="End of Zip64 central directory not found",qd="End of Zip64 central directory locator not found",Kd="Central directory header not found",Gd="Local file header not found",Vd="Zip64 extra field not found",Xd="File contains encrypted entry",Yd="Encryption method not supported",qo="Compression method not supported",Ko="Split zip file",$u="utf-8",Hu="cp437",Ay=[[Md,4294967295],[Id,4294967295],[Fd,4294967295],[Wo,65535]],Ey={65535:{getValue:Me,bytes:4},4294967295:{getValue:Zi,bytes:8}},ky=class{constructor(e,t={}){Object.assign(this,{reader:os(e),options:t,config:Vo()})}async*getEntriesGenerator(e={}){let t=this,{reader:n}=t,{config:r}=t;if(await on(n),(n.size===Ue||!n.readUint8Array)&&(n=new ns(await new Response(n.readable).blob()),await on(n)),n.size<22)throw new Error(Yi);n.chunkSize=Ju(r);let i=await Py(n,101010256,n.size,22,65535*16);if(!i){let _=await rt(n,0,4),S=Je(_);throw Me(S)==134695760?new Error(Ko):new Error(Hd)}let a=Je(i),o=Me(a,12),s=Me(a,16),l=i.offset,c=Ve(a,20),u=l+22+c,f=Ve(a,4),d=n.lastDiskNumber||0,p=Ve(a,6),b=Ve(a,8),g=0,h=0;if(s==4294967295||o==4294967295||b==65535||p==65535){let _=await rt(n,i.offset-20,20),S=Je(_);if(Me(S,0)!=117853008)throw new Error(Wd);s=Zi(S,8);let E=await rt(n,s,56,-1),C=Je(E),D=i.offset-20-56;if(Me(C,0)!=101075792&&s!=D){let O=s;s=D,g=s-O,E=await rt(n,s,56,-1),C=Je(E)}if(Me(C,0)!=101075792)throw new Error(qd);f==65535&&(f=Me(C,16)),p==65535&&(p=Me(C,20)),b==65535&&(b=Zi(C,32)),o==4294967295&&(o=Zi(C,40)),s-=o}if(d!=f)throw new Error(Ko);if(s<0||s>=n.size)throw new Error(Yi);let m=0,y=await rt(n,s,o,p),w=Je(y);if(o){let _=i.offset-o;if(Me(w,m)!=33639248&&s!=_){let S=s;s=_,g=s-S,y=await rt(n,s,o,p),w=Je(y)}}if(s<0||s>=n.size)throw new Error(Yi);let A=zt(t,e,"filenameEncoding"),T=zt(t,e,"commentEncoding");for(let _=0;_<b;_++){let S=new Cy(n,r,t.options);if(Me(w,m)!=33639248)throw new Error(Kd);Zd(S,w,m+6);let E=!!S.bitFlag.languageEncodingFlag,C=m+46,D=C+S.filenameLength,O=D+S.extraFieldLength,I=Ve(w,m+4),R=(I&0)==0,B=y.subarray(C,D),F=Ve(w,m+32),$=O+F,ne=y.subarray(O,$),W=E,J=E,L=R&&(tr(w,m+38)&16)==16,P=Me(w,m+42)+g;Object.assign(S,{versionMadeBy:I,msDosCompatible:R,compressedSize:0,uncompressedSize:0,commentLength:F,directory:L,offset:P,diskNumberStart:Ve(w,m+34),internalFileAttribute:Ve(w,m+36),externalFileAttribute:Me(w,m+38),rawFilename:B,filenameUTF8:W,commentUTF8:J,rawExtraField:y.subarray(D,O)});let[j,q]=await Promise.all([Ho(B,W?$u:A||Hu),Ho(ne,J?$u:T||Hu)]);Object.assign(S,{rawComment:ne,filename:j,comment:q,directory:L||j.endsWith(Xi)}),h=Math.max(P,h),await Qd(S,S,w,m+6);let V=new ta(S);V.getData=(fe,pe)=>S.getData(fe,V,pe),m=$;let{onprogress:ue}=e;if(ue)try{await ue(_+1,b,new ta(S))}catch{}yield V}let x=zt(t,e,"extractPrependedData"),v=zt(t,e,"extractAppendedData");return x&&(t.prependedData=h>0?await rt(n,0,h):new Uint8Array),t.comment=c?await rt(n,l+22,c):new Uint8Array,v&&(t.appendedData=u<n.size?await rt(n,u,n.size-u):new Uint8Array),!0}async getEntries(e={}){let t=[];for await(let n of this.getEntriesGenerator(e))t.push(n);return t}async close(){}},Cy=class{constructor(e,t,n){Object.assign(this,{reader:e,config:t,options:n})}async getData(e,t,n={}){let r=this,{reader:i,offset:a,diskNumberStart:o,extraFieldAES:s,compressionMethod:l,config:c,bitFlag:u,signature:f,rawLastModDate:d,uncompressedSize:p,compressedSize:b}=r,g=r.localDirectory={},h=await rt(i,a,30,o),m=Je(h),y=zt(r,n,"password");if(y=y&&y.length&&y,s&&s.originalCompressionMethod!=99)throw new Error(qo);if(l!=0&&l!=8)throw new Error(qo);if(Me(m,0)!=67324752)throw new Error(Gd);Zd(g,m,4),g.rawExtraField=g.extraFieldLength?await rt(i,a+30+g.filenameLength,g.extraFieldLength,o):new Uint8Array,await Qd(r,g,m,4),Object.assign(t,{lastAccessDate:g.lastAccessDate,creationDate:g.creationDate});let w=r.encrypted&&g.encrypted,A=w&&!s;if(w){if(!A&&s.strength===Ue)throw new Error(Yd);if(!y)throw new Error(Xd)}let T=a+30+g.filenameLength+g.extraFieldLength,x=i.readable;x.diskNumberStart=o,x.offset=T;let v=x.size=b,_=zt(r,n,"signal");e=ss(e),await on(e,p);let{writable:S}=e,{onstart:E,onprogress:C,onend:D}=n,O={options:{codecType:wd,password:y,zipCrypto:A,encryptionStrength:s&&s.strength,signed:zt(r,n,"checkSignature"),passwordVerification:A&&(u.dataDescriptor?d>>>8&255:f>>>24&255),signature:f,compressed:l!=0,encrypted:w,useWebWorkers:zt(r,n,"useWebWorkers"),useCompressionStream:zt(r,n,"useCompressionStream"),transferStreams:zt(r,n,"transferStreams")},config:c,streamOptions:{signal:_,size:v,onstart:E,onprogress:C,onend:D}};return S.size+=(await vd({readable:x,writable:S},O)).size,zt(r,n,"preventClose")||await S.close(),e.getData?e.getData():S}};function Zd(e,t,n){let r=e.rawBitFlag=Ve(t,n+2),i=(r&1)==1,a=Me(t,n+6);Object.assign(e,{encrypted:i,version:Ve(t,n),bitFlag:{level:(r&6)>>1,dataDescriptor:(r&8)==8,languageEncodingFlag:(r&2048)==2048},rawLastModDate:a,lastModDate:Ny(a),filenameLength:Ve(t,n+22),extraFieldLength:Ve(t,n+24)})}async function Qd(e,t,n,r){let{rawExtraField:i}=t,a=t.extraField=new Map,o=Je(new Uint8Array(i)),s=0;try{for(;s<i.length;){let g=Ve(o,s),h=Ve(o,s+2);a.set(g,{type:g,data:i.slice(s+4,s+4+h)}),s+=4+h}}catch{}let l=Ve(n,r+4);Object.assign(t,{signature:Me(n,r+10),uncompressedSize:Me(n,r+18),compressedSize:Me(n,r+14)});let c=a.get(1);c&&(Ly(c,t),t.extraFieldZip64=c);let u=a.get(28789);u&&(await Wu(u,Dd,Rd,t,e),t.extraFieldUnicodePath=u);let f=a.get(25461);f&&(await Wu(f,Pd,Nd,t,e),t.extraFieldUnicodeComment=f);let d=a.get(39169);d?(Oy(d,t,l),t.extraFieldAES=d):t.compressionMethod=l;let p=a.get(10);p&&(Dy(p,t),t.extraFieldNTFS=p);let b=a.get(21589);b&&(Ry(b,t),t.extraFieldExtendedTimestamp=b)}function Ly(e,t){t.zip64=!0;let n=Je(e.data),r=Ay.filter(([i,a])=>t[i]==a);for(let i=0,a=0;i<r.length;i++){let[o,s]=r[i];if(t[o]==s){let l=Ey[s];t[o]=e[o]=l.getValue(n,a),a+=l.bytes}else if(e[o])throw new Error(Vd)}}async function Wu(e,t,n,r,i){let a=Je(e.data),o=new Ji;o.append(i[n]);let s=Je(new Uint8Array(4));s.setUint32(0,o.get(),!0),Object.assign(e,{version:tr(a,0),signature:Me(a,1),[t]:await Ho(e.data.subarray(5)),valid:!i.bitFlag.languageEncodingFlag&&e.signature==Me(s,0)}),e.valid&&(r[t]=e[t],r[t+"UTF8"]=!0)}function Oy(e,t,n){let r=Je(e.data),i=tr(r,4);Object.assign(e,{vendorVersion:tr(r,0),vendorId:tr(r,2),strength:i,originalCompressionMethod:n,compressionMethod:Ve(r,5)}),t.compressionMethod=e.compressionMethod}function Dy(e,t){let n=Je(e.data),r=4,i;try{for(;r<e.data.length&&!i;){let a=Ve(n,r),o=Ve(n,r+2);a==1&&(i=e.data.slice(r+4,r+4+o)),r+=4+o}}catch{}try{if(i&&i.length==24){let a=Je(i),o=a.getBigUint64(0,!0),s=a.getBigUint64(8,!0),l=a.getBigUint64(16,!0);Object.assign(e,{rawLastModDate:o,rawLastAccessDate:s,rawCreationDate:l});let c=Po(o),u=Po(s),f=Po(l),d={lastModDate:c,lastAccessDate:u,creationDate:f};Object.assign(e,d),Object.assign(t,d)}}catch{}}function Ry(e,t){let n=Je(e.data),r=tr(n,0),i=[],a=[];(r&1)==1&&(i.push(ls),a.push(Bd)),(r&2)==2&&(i.push(cs),a.push(_y)),(r&4)==4&&(i.push(us),a.push(Ty));let o=1;i.forEach((s,l)=>{if(e.data.length>=o+4){let c=Me(n,o);t[s]=e[s]=new Date(c*1e3);let u=a[l];e[u]=c}o+=4})}async function Py(e,t,n,r,i){let a=new Uint8Array(4),o=Je(a);My(o,0,t);let s=r+i;return await l(r)||await l(Math.min(s,n));async function l(c){let u=n-c,f=await rt(e,u,c);for(let d=f.length-r;d>=0;d--)if(f[d]==a[0]&&f[d+1]==a[1]&&f[d+2]==a[2]&&f[d+3]==a[3])return{offset:u+d,buffer:f.slice(d,d+r).buffer}}}function zt(e,t,n){return t[n]===Ue?e.options[n]:t[n]}function Ny(e){let t=(e&4294901760)>>16,n=e&65535;try{return new Date(1980+((t&65024)>>9),((t&480)>>5)-1,t&31,(n&63488)>>11,(n&2016)>>5,(n&31)*2,0)}catch{}}function Po(e){return new Date(Number(e/BigInt(1e4)-BigInt(116444736e5)))}function tr(e,t){return e.getUint8(t)}function Ve(e,t){return e.getUint16(t,!0)}function Me(e,t){return e.getUint32(t,!0)}function Zi(e,t){return Number(e.getBigUint64(t,!0))}function My(e,t,n){e.setUint32(t,n,!0)}function Je(e){return new DataView(e.buffer)}var Jd="File already exists",ef="Zip file comment exceeds 64KB",tf="File entry comment exceeds 64KB",nf="File entry name exceeds 64KB",Go="Version exceeds 65535",rf="The strength must equal 1, 2, or 3",af="Extra field type exceeds 65535",of="Extra field data exceeds 64KB",la="Zip64 is not supported (make sure 'keepOrder' is set to 'true')",qu=new Uint8Array([7,0,2,0,65,69,3,0,0]),No=0,Ku=[],Iy=class{constructor(e,t={}){e=ss(e),Object.assign(this,{writer:e,addSplitZipSignature:e instanceof zr,options:t,config:Vo(),files:new Map,filenames:new Set,offset:e.writable.size,pendingEntriesSize:0,pendingAddFileCalls:new Set,bufferedWrites:0})}async add(e="",t,n={}){let r=this,{pendingAddFileCalls:i,config:a}=r;No<a.maxWorkers?No++:await new Promise(s=>Ku.push(s));let o;try{if(e=e.trim(),r.filenames.has(e))throw new Error(Jd);return r.filenames.add(e),o=Fy(r,e,t,n),i.add(o),await o}catch(s){throw r.filenames.delete(e),s}finally{i.delete(o);let s=Ku.shift();s?s():No--}}async close(e=new Uint8Array,t={}){let n=this,{pendingAddFileCalls:r,writer:i}=this,{writable:a}=i;for(;r.size;)await Promise.all(Array.from(r));return await qy(this,e,t),Ce(n,t,"preventClose")||await a.close(),i.getData?i.getData():a}};async function Fy(e,t,n,r){t=t.trim(),r.directory&&!t.endsWith(Xi)?t+=Xi:r.directory=t.endsWith(Xi);let i=Fo(t);if(_e(i)>65535)throw new Error(nf);let a=r.comment||"",o=Fo(a);if(_e(o)>65535)throw new Error(tf);let s=Ce(e,r,"version",20);if(s>65535)throw new Error(Go);let l=Ce(e,r,"versionMadeBy",20);if(l>65535)throw new Error(Go);let c=Ce(e,r,ls,new Date),u=Ce(e,r,cs),f=Ce(e,r,us),d=Ce(e,r,jd,!0),p=Ce(e,r,zd,0),b=Ce(e,r,Ud,0),g=Ce(e,r,"password"),h=Ce(e,r,"encryptionStrength",3),m=Ce(e,r,"zipCrypto"),y=Ce(e,r,"extendedTimestamp",!0),w=Ce(e,r,"keepOrder",!0),A=Ce(e,r,"level"),T=Ce(e,r,"useWebWorkers"),x=Ce(e,r,"bufferedWrite"),v=Ce(e,r,"dataDescriptorSignature",!1),_=Ce(e,r,"signal"),S=Ce(e,r,"useCompressionStream"),E=Ce(e,r,"dataDescriptor",!0),C=Ce(e,r,$d);if(g!==Ue&&h!==Ue&&(h<1||h>3))throw new Error(rf);let D=new Uint8Array,{extraField:O}=r;if(O){let fe=0,pe=0;O.forEach(Q=>fe+=4+_e(Q)),D=new Uint8Array(fe),O.forEach((Q,ae)=>{if(ae>65535)throw new Error(af);if(_e(Q)>65535)throw new Error(of);Xe(D,new Uint16Array([ae]),pe),Xe(D,new Uint16Array([_e(Q)]),pe+2),Xe(D,Q,pe+4),pe+=4+_e(Q)})}let I=0,R=0,B=0,F=C===!0;n&&(n=os(n),await on(n),n.size===Ue?(E=!0,(C||C===Ue)&&(C=!0,I=4294967295)):(B=n.size,I=Gy(B)));let{diskOffset:$,diskNumber:ne,maxSize:W}=e.writer,J=F||B>=4294967295,L=F||I>=4294967295,P=F||e.offset+e.pendingEntriesSize-$>=4294967295,j=Ce(e,r,"supportZip64SplitFile",!0)&&F||ne+Math.ceil(e.pendingEntriesSize/W)>=65535;if(P||J||L||j){if(C===!1||!w)throw new Error(la);C=!0}C=C||!1,r=Object.assign({},r,{rawFilename:i,rawComment:o,version:s,versionMadeBy:l,lastModDate:c,lastAccessDate:u,creationDate:f,rawExtraField:D,zip64:C,zip64UncompressedSize:J,zip64CompressedSize:L,zip64Offset:P,zip64DiskNumberStart:j,password:g,level:A,useWebWorkers:T,encryptionStrength:h,extendedTimestamp:y,zipCrypto:m,bufferedWrite:x,keepOrder:w,dataDescriptor:E,dataDescriptorSignature:v,signal:_,msDosCompatible:d,internalFileAttribute:p,externalFileAttribute:b,useCompressionStream:S});let q=Uy(r),V=jy(r);R=_e(q.localHeaderArray,V.dataDescriptorArray)+I,e.pendingEntriesSize+=R;let ue;try{ue=await By(e,t,n,{headerInfo:q,dataDescriptorInfo:V},r)}finally{e.pendingEntriesSize-=R}return Object.assign(ue,{name:t,comment:a,extraField:O}),new ta(ue)}async function By(e,t,n,r,i){let{files:a,writer:o}=e,{keepOrder:s,dataDescriptor:l,signal:c}=i,{headerInfo:u}=r,f=Array.from(a.values()).pop(),d={},p,b,g,h,m,y;a.set(t,d);try{let x;s&&(x=f&&f.lock,w()),i.bufferedWrite||e.writerLocked||e.bufferedWrites&&s||!l?(y=new rs,y.writable.size=0,p=!0,e.bufferedWrites++,await on(o)):(y=o,await A()),await on(y);let{writable:v}=o,{diskOffset:_}=o;if(e.addSplitZipSignature){delete e.addSplitZipSignature;let E=new Uint8Array(4),C=yt(E);ye(C,0,134695760),await Vt(v,E),e.offset+=4}p||(await x,await T(v));let{diskNumber:S}=o;if(m=!0,d.diskNumberStart=S,d=await zy(n,y,d,r,e.config,i),m=!1,a.set(t,d),d.filename=t,p){await y.writable.close();let E=await y.getData();await x,await A(),h=!0,l||(E=await Hy(d,E,v,i)),await T(v),d.diskNumberStart=o.diskNumber,_=o.diskOffset,await E.stream().pipeTo(v,{preventClose:!0,preventAbort:!0,signal:c}),v.size+=E.size,h=!1}if(d.offset=e.offset-_,d.zip64)Wy(d,i);else if(d.offset>=4294967295)throw new Error(la);return e.offset+=d.length,d}catch(x){if(p&&h||!p&&m){if(e.hasCorruptedEntries=!0,x)try{x.corruptedEntry=!0}catch{}p?e.offset+=y.writable.size:e.offset=y.writable.size}throw a.delete(t),x}finally{p&&e.bufferedWrites--,g&&g(),b&&b()}function w(){d.lock=new Promise(x=>g=x)}async function A(){e.writerLocked=!0;let{lockWriter:x}=e;e.lockWriter=new Promise(v=>b=()=>{e.writerLocked=!1,v()}),await x}async function T(x){u.localHeaderArray.length>o.availableSize&&(o.availableSize=0,await Vt(x,new Uint8Array))}}async function zy(e,t,{diskNumberStart:n,lock:r},i,a,o){let{headerInfo:s,dataDescriptorInfo:l}=i,{localHeaderArray:c,headerArray:u,lastModDate:f,rawLastModDate:d,encrypted:p,compressed:b,version:g,compressionMethod:h,rawExtraFieldExtendedTimestamp:m,rawExtraFieldNTFS:y,rawExtraFieldAES:w}=s,{dataDescriptorArray:A}=l,{rawFilename:T,lastAccessDate:x,creationDate:v,password:_,level:S,zip64:E,zip64UncompressedSize:C,zip64CompressedSize:D,zip64Offset:O,zip64DiskNumberStart:I,zipCrypto:R,dataDescriptor:B,directory:F,versionMadeBy:$,rawComment:ne,rawExtraField:W,useWebWorkers:J,onstart:L,onprogress:P,onend:j,signal:q,encryptionStrength:V,extendedTimestamp:ue,msDosCompatible:fe,internalFileAttribute:pe,externalFileAttribute:Q,useCompressionStream:ae}=o,oe={lock:r,versionMadeBy:$,zip64:E,directory:!!F,filenameUTF8:!0,rawFilename:T,commentUTF8:!0,rawComment:ne,rawExtraFieldExtendedTimestamp:m,rawExtraFieldNTFS:y,rawExtraFieldAES:w,rawExtraField:W,extendedTimestamp:ue,msDosCompatible:fe,internalFileAttribute:pe,externalFileAttribute:Q,diskNumberStart:n},se=0,Y=0,ie,{writable:de}=t;if(e){e.chunkSize=Ju(a),await Vt(de,c);let re=e.readable,Ee=re.size=e.size,Ne={options:{codecType:yd,level:S,password:_,encryptionStrength:V,zipCrypto:p&&R,passwordVerification:p&&R&&d>>8&255,signed:!0,compressed:b,encrypted:p,useWebWorkers:J,useCompressionStream:ae,transferStreams:!1},config:a,streamOptions:{signal:q,size:Ee,onstart:L,onprogress:P,onend:j}},ve=await vd({readable:re,writable:de},Ne);de.size+=ve.size,ie=ve.signature,Y=e.size=re.size,se=ve.size}else await Vt(de,c);let he;if(E){let re=4;C&&(re+=8),D&&(re+=8),O&&(re+=8),I&&(re+=4),he=new Uint8Array(re)}else he=new Uint8Array;return e&&$y({signature:ie,rawExtraFieldZip64:he,compressedSize:se,uncompressedSize:Y,headerInfo:s,dataDescriptorInfo:l},o),B&&await Vt(de,A),Object.assign(oe,{uncompressedSize:Y,compressedSize:se,lastModDate:f,rawLastModDate:d,creationDate:v,lastAccessDate:x,encrypted:p,length:_e(c,A)+se,compressionMethod:h,version:g,headerArray:u,signature:ie,rawExtraFieldZip64:he,zip64UncompressedSize:C,zip64CompressedSize:D,zip64Offset:O,zip64DiskNumberStart:I}),oe}function Uy(e){let{rawFilename:t,lastModDate:n,lastAccessDate:r,creationDate:i,password:a,level:o,zip64:s,zipCrypto:l,dataDescriptor:c,directory:u,rawExtraField:f,encryptionStrength:d,extendedTimestamp:p}=e,b=o!==0&&!u,g=!!(a&&_e(a)),h=e.version,m;if(g&&!l){m=new Uint8Array(_e(qu)+2);let R=yt(m);Se(R,0,39169),Xe(m,qu,2),na(R,8,d)}else m=new Uint8Array;let y,w;if(p){w=new Uint8Array(9+(r?4:0)+(i?4:0));let R=yt(w);Se(R,0,21589),Se(R,2,_e(w)-4);let B=1+(r?2:0)+(i?4:0);na(R,4,B),ye(R,5,Math.floor(n.getTime()/1e3)),r&&ye(R,9,Math.floor(r.getTime()/1e3)),i&&ye(R,13,Math.floor(i.getTime()/1e3));try{y=new Uint8Array(36);let F=yt(y),$=Mo(n);Se(F,0,10),Se(F,2,32),Se(F,8,1),Se(F,10,24),bt(F,12,$),bt(F,20,Mo(r)||$),bt(F,28,Mo(i)||$)}catch{y=new Uint8Array}}else y=w=new Uint8Array;let A=2048;c&&(A=A|8);let T=0;b&&(T=8),s&&(h=h>45?h:45),g&&(A=A|1,l||(h=h>51?h:51,T=99,b&&(m[9]=8)));let x=new Uint8Array(26),v=yt(x);Se(v,0,h),Se(v,2,A),Se(v,4,T);let _=new Uint32Array(1),S=yt(_),E;n<ku?E=ku:n>Eu?E=Eu:E=n,Se(S,0,(E.getHours()<<6|E.getMinutes())<<5|E.getSeconds()/2),Se(S,2,(E.getFullYear()-1980<<4|E.getMonth()+1)<<5|E.getDate());let C=_[0];ye(v,6,C),Se(v,22,_e(t));let D=_e(m,w,y,f);Se(v,24,D);let O=new Uint8Array(30+_e(t)+D),I=yt(O);return ye(I,0,67324752),Xe(O,x,4),Xe(O,t,30),Xe(O,m,30+_e(t)),Xe(O,w,30+_e(t,m)),Xe(O,y,30+_e(t,m,w)),Xe(O,f,30+_e(t,m,w,y)),{localHeaderArray:O,headerArray:x,headerView:v,lastModDate:n,rawLastModDate:C,encrypted:g,compressed:b,version:h,compressionMethod:T,rawExtraFieldExtendedTimestamp:w,rawExtraFieldNTFS:y,rawExtraFieldAES:m}}function jy(e){let{zip64:t,dataDescriptor:n,dataDescriptorSignature:r}=e,i=new Uint8Array,a,o=0;return n&&(i=new Uint8Array(t?r?24:20:r?16:12),a=yt(i),r&&(o=4,ye(a,0,134695760))),{dataDescriptorArray:i,dataDescriptorView:a,dataDescriptorOffset:o}}function $y(e,t){let{signature:n,rawExtraFieldZip64:r,compressedSize:i,uncompressedSize:a,headerInfo:o,dataDescriptorInfo:s}=e,{headerView:l,encrypted:c}=o,{dataDescriptorView:u,dataDescriptorOffset:f}=s,{zip64:d,zip64UncompressedSize:p,zip64CompressedSize:b,zipCrypto:g,dataDescriptor:h}=t;if((!c||g)&&n!==Ue&&(ye(l,10,n),h&&ye(u,f,n)),d){let m=yt(r);Se(m,0,1),Se(m,2,r.length-4);let y=4;p&&(ye(l,18,4294967295),bt(m,y,BigInt(a)),y+=8),b&&(ye(l,14,4294967295),bt(m,y,BigInt(i))),h&&(bt(u,f+4,BigInt(i)),bt(u,f+12,BigInt(a)))}else ye(l,14,i),ye(l,18,a),h&&(ye(u,f+4,i),ye(u,f+8,a))}async function Hy(e,t,n,{zipCrypto:r}){let i=await Ky(t,0,26),a=new DataView(i);return(!e.encrypted||r)&&ye(a,14,e.signature),e.zip64?(ye(a,18,4294967295),ye(a,22,4294967295)):(ye(a,18,e.compressedSize),ye(a,22,e.uncompressedSize)),await Vt(n,new Uint8Array(i)),t.slice(i.byteLength)}function Wy(e,t){let{rawExtraFieldZip64:n,offset:r,diskNumberStart:i}=e,{zip64UncompressedSize:a,zip64CompressedSize:o,zip64Offset:s,zip64DiskNumberStart:l}=t,c=yt(n),u=4;a&&(u+=8),o&&(u+=8),s&&(bt(c,u,BigInt(r)),u+=8),l&&ye(c,u,i)}async function qy(e,t,n){let{files:r,writer:i}=e,{diskOffset:a,writable:o}=i,{diskNumber:s}=i,l=0,c=0,u=e.offset-a,f=r.size;for(let[,{rawFilename:T,rawExtraFieldZip64:x,rawExtraFieldAES:v,rawExtraField:_,rawComment:S,rawExtraFieldExtendedTimestamp:E,rawExtraFieldNTFS:C}]of r)c+=46+_e(T,S,x,v,E,C,_);let d=new Uint8Array(c),p=yt(d);await on(i);let b=0;for(let[T,x]of Array.from(r.values()).entries()){let{offset:v,rawFilename:_,rawExtraFieldZip64:S,rawExtraFieldAES:E,rawExtraFieldNTFS:C,rawExtraField:D,rawComment:O,versionMadeBy:I,headerArray:R,directory:B,zip64:F,zip64UncompressedSize:$,zip64CompressedSize:ne,zip64DiskNumberStart:W,zip64Offset:J,msDosCompatible:L,internalFileAttribute:P,externalFileAttribute:j,extendedTimestamp:q,lastModDate:V,diskNumberStart:ue,uncompressedSize:fe,compressedSize:pe}=x,Q;if(q){Q=new Uint8Array(9);let Y=yt(Q);Se(Y,0,21589),Se(Y,2,_e(Q)-4),na(Y,4,1),ye(Y,5,Math.floor(V.getTime()/1e3))}else Q=new Uint8Array;let ae=_e(S,E,Q,C,D);ye(p,l,33639248),Se(p,l+4,I);let oe=yt(R);$||ye(oe,18,fe),ne||ye(oe,14,pe),Xe(d,R,l+6),Se(p,l+30,ae),Se(p,l+32,_e(O)),Se(p,l+34,F&&W?65535:ue),Se(p,l+36,P),j?ye(p,l+38,j):B&&L&&na(p,l+38,16),ye(p,l+42,F&&J?4294967295:v),Xe(d,_,l+46),Xe(d,S,l+46+_e(_)),Xe(d,E,l+46+_e(_,S)),Xe(d,Q,l+46+_e(_,S,E)),Xe(d,C,l+46+_e(_,S,E,Q)),Xe(d,D,l+46+_e(_,S,E,Q,C)),Xe(d,O,l+46+_e(_)+ae);let se=46+_e(_,O)+ae;if(l-b>i.availableSize&&(i.availableSize=0,await Vt(o,d.slice(b,l)),b=l),l+=se,n.onprogress)try{await n.onprogress(T+1,r.size,new ta(x))}catch{}}await Vt(o,b?d.slice(b):d);let g=i.diskNumber,{availableSize:h}=i;h<22&&g++;let m=Ce(e,n,"zip64");if(u>=4294967295||c>=4294967295||f>=65535||g>=65535){if(m===!1)throw new Error(la);m=!0}let y=new Uint8Array(m?98:22),w=yt(y);l=0,m&&(ye(w,0,101075792),bt(w,4,BigInt(44)),Se(w,12,45),Se(w,14,45),ye(w,16,g),ye(w,20,s),bt(w,24,BigInt(f)),bt(w,32,BigInt(f)),bt(w,40,BigInt(c)),bt(w,48,BigInt(u)),ye(w,56,117853008),bt(w,64,BigInt(u)+BigInt(c)),ye(w,72,g+1),Ce(e,n,"supportZip64SplitFile",!0)&&(g=65535,s=65535),f=65535,u=4294967295,c=4294967295,l+=76),ye(w,l,101010256),Se(w,l+4,g),Se(w,l+6,s),Se(w,l+8,f),Se(w,l+10,f),ye(w,l+12,c),ye(w,l+16,u);let A=_e(t);if(A)if(A<=65535)Se(w,l+20,A);else throw new Error(ef);await Vt(o,y),A&&await Vt(o,t)}function Ky(e,t,n){return t||n?e.slice(t,n).arrayBuffer():e.arrayBuffer()}async function Vt(e,t){let n=e.getWriter();await n.ready,e.size+=_e(t),await n.write(t),n.releaseLock()}function Mo(e){if(e)return(BigInt(e.getTime())+BigInt(116444736e5))*BigInt(1e4)}function Ce(e,t,n,r){let i=t[n]===Ue?e.options[n]:t[n];return i===Ue?r:i}function Gy(e){return e+5*(Math.floor(e/16383)+1)}function na(e,t,n){e.setUint8(t,n)}function Se(e,t,n){e.setUint16(t,n,!0)}function ye(e,t,n){e.setUint32(t,n,!0)}function bt(e,t,n){e.setBigUint64(t,n,!0)}function Xe(e,t,n){e.set(t,n)}function yt(e){return new DataView(e.buffer)}function _e(...e){let t=0;return e.forEach(n=>n&&(t+=n.length)),t}aa({Deflate:G0,Inflate:fb});var sf={},Vy=function(e,t,n,r,i){var a=new Worker(sf[t]||(sf[t]=URL.createObjectURL(new Blob([e+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return a.onmessage=function(o){var s=o.data,l=s.$e$;if(l){var c=new Error(l[0]);c.code=l[1],c.stack=l[2],i(c,null)}else i(null,s)},a.postMessage(n,r),a},Ae=Uint8Array,it=Uint16Array,sr=Uint32Array,lr=new Ae([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),cr=new Ae([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),$r=new Ae([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),pf=function(e,t){for(var n=new it(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new sr(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return[n,i]},hf=pf(lr,2),vs=hf[0],ha=hf[1];vs[28]=258,ha[258]=28;var mf=pf(cr,0),gf=mf[0],ps=mf[1],Hr=new it(32768);for(Te=0;Te<32768;++Te)sn=(Te&43690)>>>1|(Te&21845)<<1,sn=(sn&52428)>>>2|(sn&13107)<<2,sn=(sn&61680)>>>4|(sn&3855)<<4,Hr[Te]=((sn&65280)>>>8|(sn&255)<<8)>>>1;var sn,Te,Dt=function(e,t,n){for(var r=e.length,i=0,a=new it(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new it(t);for(i=0;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new it(1<<t);var l=15-t;for(i=0;i<r;++i)if(e[i])for(var c=i<<4|e[i],u=t-e[i],f=o[e[i]-1]++<<u,d=f|(1<<u)-1;f<=d;++f)s[Hr[f]>>>l]=c}else for(s=new it(r),i=0;i<r;++i)e[i]&&(s[i]=Hr[o[e[i]-1]++]>>>15-e[i]);return s},cn=new Ae(288);for(Te=0;Te<144;++Te)cn[Te]=8;var Te;for(Te=144;Te<256;++Te)cn[Te]=9;var Te;for(Te=256;Te<280;++Te)cn[Te]=7;var Te;for(Te=280;Te<288;++Te)cn[Te]=8;var Te,or=new Ae(32);for(Te=0;Te<32;++Te)or[Te]=5;var Te,bf=Dt(cn,9,0),yf=Dt(cn,9,1),wf=Dt(or,5,0),vf=Dt(or,5,1),ua=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},Ot=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},da=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},Wr=function(e){return(e+7)/8|0},Qt=function(e,t,n){(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length);var r=new(e.BYTES_PER_ELEMENT==2?it:e.BYTES_PER_ELEMENT==4?sr:Ae)(n-t);return r.set(e.subarray(t,n)),r};var xf=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],me=function(e,t,n){var r=new Error(t||xf[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,me),!n)throw r;return r},ya=function(e,t,n){var r=e.length;if(!r||n&&n.f&&!n.l)return t||new Ae(0);var i=!t||n,a=!n||n.i;n||(n={}),t||(t=new Ae(r*3));var o=function(V){var ue=t.length;if(V>ue){var fe=new Ae(Math.max(ue*2,V));fe.set(t),t=fe}},s=n.f||0,l=n.p||0,c=n.b||0,u=n.l,f=n.d,d=n.m,p=n.n,b=r*8;do{if(!u){s=Ot(e,l,1);var g=Ot(e,l+1,3);if(l+=3,g)if(g==1)u=yf,f=vf,d=9,p=5;else if(g==2){var h=Ot(e,l,31)+257,m=Ot(e,l+10,15)+4,y=h+Ot(e,l+5,31)+1;l+=14;for(var w=new Ae(y),A=new Ae(19),T=0;T<m;++T)A[$r[T]]=Ot(e,l+T*3,7);l+=m*3;for(var x=ua(A),v=(1<<x)-1,_=Dt(A,x,1),T=0;T<y;){var S=_[Ot(e,l,v)];l+=S&15;var E=S>>>4;if(E<16)w[T++]=E;else{var C=0,D=0;for(E==16?(D=3+Ot(e,l,3),l+=2,C=w[T-1]):E==17?(D=3+Ot(e,l,7),l+=3):E==18&&(D=11+Ot(e,l,127),l+=7);D--;)w[T++]=C}}var O=w.subarray(0,h),I=w.subarray(h);d=ua(O),p=ua(I),u=Dt(O,d,1),f=Dt(I,p,1)}else me(1);else{var E=Wr(l)+4,R=e[E-4]|e[E-3]<<8,B=E+R;if(B>r){a&&me(0);break}i&&o(c+R),t.set(e.subarray(E,B),c),n.b=c+=R,n.p=l=B*8,n.f=s;continue}if(l>b){a&&me(0);break}}i&&o(c+131072);for(var F=(1<<d)-1,$=(1<<p)-1,ne=l;;ne=l){var C=u[da(e,l)&F],W=C>>>4;if(l+=C&15,l>b){a&&me(0);break}if(C||me(2),W<256)t[c++]=W;else if(W==256){ne=l,u=null;break}else{var J=W-254;if(W>264){var T=W-257,L=lr[T];J=Ot(e,l,(1<<L)-1)+vs[T],l+=L}var P=f[da(e,l)&$],j=P>>>4;P||me(3),l+=P&15;var I=gf[j];if(j>3){var L=cr[j];I+=da(e,l)&(1<<L)-1,l+=L}if(l>b){a&&me(0);break}i&&o(c+131072);for(var q=c+J;c<q;c+=4)t[c]=t[c-I],t[c+1]=t[c+1-I],t[c+2]=t[c+2-I],t[c+3]=t[c+3-I];c=q}}n.l=u,n.p=ne,n.b=c,n.f=s,u&&(s=1,n.m=d,n.d=f,n.n=p)}while(!s);return c==t.length?t:Qt(t,0,c)},Zt=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>>8},nr=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>>8,e[r+2]|=n>>>16},fa=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return[ln,0];if(i==1){var o=new Ae(n[0].s+1);return o[n[0].s]=1,[o,1]}n.sort(function(T,x){return T.f-x.f}),n.push({s:-1,f:25001});var s=n[0],l=n[1],c=0,u=1,f=2;for(n[0]={s:-1,f:s.f+l.f,l:s,r:l};u!=i-1;)s=n[n[c].f<n[f].f?c++:f++],l=n[c!=u&&n[c].f<n[f].f?c++:f++],n[u++]={s:-1,f:s.f+l.f,l:s,r:l};for(var d=a[0].s,r=1;r<i;++r)a[r].s>d&&(d=a[r].s);var p=new it(d+1),b=ma(n[u-1],p,0);if(b>t){var r=0,g=0,h=b-t,m=1<<h;for(a.sort(function(x,v){return p[v.s]-p[x.s]||x.f-v.f});r<i;++r){var y=a[r].s;if(p[y]>t)g+=m-(1<<b-p[y]),p[y]=t;else break}for(g>>>=h;g>0;){var w=a[r].s;p[w]<t?g-=1<<t-p[w]++-1:++r}for(;r>=0&&g;--r){var A=a[r].s;p[A]==t&&(--p[A],++g)}b=t}return[new Ae(p),b]},ma=function(e,t,n){return e.s==-1?Math.max(ma(e.l,t,n+1),ma(e.r,t,n+1)):t[e.s]=n},hs=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new it(++t),r=0,i=e[0],a=1,o=function(l){n[r++]=l},s=1;s<=t;++s)if(e[s]==i&&s!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[s]}return[n.subarray(0,r),t]},rr=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},ga=function(e,t,n){var r=n.length,i=Wr(t+2);e[i]=r&255,e[i+1]=r>>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},ms=function(e,t,n,r,i,a,o,s,l,c,u){Zt(t,u++,n),++i[256];for(var f=fa(i,15),d=f[0],p=f[1],b=fa(a,15),g=b[0],h=b[1],m=hs(d),y=m[0],w=m[1],A=hs(g),T=A[0],x=A[1],v=new it(19),_=0;_<y.length;++_)v[y[_]&31]++;for(var _=0;_<T.length;++_)v[T[_]&31]++;for(var S=fa(v,7),E=S[0],C=S[1],D=19;D>4&&!E[$r[D-1]];--D);var O=c+5<<3,I=rr(i,cn)+rr(a,or)+o,R=rr(i,d)+rr(a,g)+o+14+3*D+rr(v,E)+(2*v[16]+3*v[17]+7*v[18]);if(O<=I&&O<=R)return ga(t,u,e.subarray(l,l+c));var B,F,$,ne;if(Zt(t,u,1+(R<I)),u+=2,R<I){B=Dt(d,p,0),F=d,$=Dt(g,h,0),ne=g;var W=Dt(E,C,0);Zt(t,u,w-257),Zt(t,u+5,x-1),Zt(t,u+10,D-4),u+=14;for(var _=0;_<D;++_)Zt(t,u+3*_,E[$r[_]]);u+=3*D;for(var J=[y,T],L=0;L<2;++L)for(var P=J[L],_=0;_<P.length;++_){var j=P[_]&31;Zt(t,u,W[j]),u+=E[j],j>15&&(Zt(t,u,P[_]>>>5&127),u+=P[_]>>>12)}}else B=bf,F=cn,$=wf,ne=or;for(var _=0;_<s;++_)if(r[_]>255){var j=r[_]>>>18&31;nr(t,u,B[j+257]),u+=F[j+257],j>7&&(Zt(t,u,r[_]>>>23&31),u+=lr[j]);var q=r[_]&31;nr(t,u,$[q]),u+=ne[q],q>3&&(nr(t,u,r[_]>>>5&8191),u+=cr[q])}else nr(t,u,B[r[_]]),u+=F[r[_]];return nr(t,u,B[256]),u+F[256]},_f=new sr([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),ln=new Ae(0),Tf=function(e,t,n,r,i,a){var o=e.length,s=new Ae(r+o+5*(1+Math.ceil(o/7e3))+i),l=s.subarray(r,s.length-i),c=0;if(!t||o<8)for(var u=0;u<=o;u+=65535){var f=u+65535;f>=o&&(l[c>>3]=a),c=ga(l,c+1,e.subarray(u,f))}else{for(var d=_f[t-1],p=d>>>13,b=d&8191,g=(1<<n)-1,h=new it(32768),m=new it(g+1),y=Math.ceil(n/3),w=2*y,A=function(Y){return(e[Y]^e[Y+1]<<y^e[Y+2]<<w)&g},T=new sr(25e3),x=new it(288),v=new it(32),_=0,S=0,u=0,E=0,C=0,D=0;u<o;++u){var O=A(u),I=u&32767,R=m[O];if(h[I]=R,m[O]=I,C<=u){var B=o-u;if((_>7e3||E>24576)&&B>423){c=ms(e,l,0,T,x,v,S,E,D,u-D,c),E=_=S=0,D=u;for(var F=0;F<286;++F)x[F]=0;for(var F=0;F<30;++F)v[F]=0}var $=2,ne=0,W=b,J=I-R&32767;if(B>2&&O==A(u-J))for(var L=Math.min(p,B)-1,P=Math.min(32767,u),j=Math.min(258,B);J<=P&&--W&&I!=R;){if(e[u+$]==e[u+$-J]){for(var q=0;q<j&&e[u+q]==e[u+q-J];++q);if(q>$){if($=q,ne=J,q>L)break;for(var V=Math.min(J,q-2),ue=0,F=0;F<V;++F){var fe=u-J+F+32768&32767,pe=h[fe],Q=fe-pe+32768&32767;Q>ue&&(ue=Q,R=fe)}}}I=R,R=h[I],J+=I-R+32768&32767}if(ne){T[E++]=268435456|ha[$]<<18|ps[ne];var ae=ha[$]&31,oe=ps[ne]&31;S+=lr[ae]+cr[oe],++x[257+ae],++v[oe],C=u+$,++_}else T[E++]=e[u],++x[e[u]]}}c=ms(e,l,a,T,x,v,S,E,D,u-D,c),!a&&c&7&&(c=ga(l,c+1,ln))}return Qt(s,0,r+Wr(c)+i)},Sf=function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(n&1&&-306674912)^n>>>1;e[t]=n}return e}(),xs=function(){var e=-1;return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=Sf[n&255^t[r]]^n>>>8;e=n},d:function(){return~e}}},Af=function(){var e=1,t=0;return{p:function(n){for(var r=e,i=t,a=n.length|0,o=0;o!=a;){for(var s=Math.min(o+2655,a);o<s;++o)i+=r+=n[o];r=(r&65535)+15*(r>>16),i=(i&65535)+15*(i>>16)}e=r,t=i},d:function(){return e%=65521,t%=65521,(e&255)<<24|e>>>8<<16|(t&255)<<8|t>>>8}}},qr=function(e,t,n,r,i){return Tf(e,t.level==null?6:t.level,t.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):12+t.mem,n,r,!i)},Ef=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},lf=function(e,t,n){for(var r=e(),i=e.toString(),a=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<r.length;++o){var s=r[o],l=a[o];if(typeof s=="function"){t+=";"+l+"=";var c=s.toString();if(s.prototype)if(c.indexOf("[native code]")!=-1){var u=c.indexOf(" ",8)+1;t+=c.slice(u,c.indexOf("(",u))}else{t+=c;for(var f in s.prototype)t+=";"+l+".prototype."+f+"="+s.prototype[f].toString()}else t+=c}else n[l]=s}return[t,n]},ca=[],Xy=function(e){var t=[];for(var n in e)e[n].buffer&&t.push((e[n]=new e[n].constructor(e[n])).buffer);return t},Yy=function(e,t,n,r){var i;if(!ca[n]){for(var a="",o={},s=e.length-1,l=0;l<s;++l)i=lf(e[l],a,o),a=i[0],o=i[1];ca[n]=lf(e[s],a,o)}var c=Ef({},ca[n][1]);return Vy(ca[n][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",n,c,Xy(c),r)},_s=function(){return[Ae,it,sr,lr,cr,$r,vs,gf,yf,vf,Hr,xf,Dt,ua,Ot,da,Wr,Qt,me,ya,a1,kf,t1]},Ts=function(){return[Ae,it,sr,lr,cr,$r,ha,ps,bf,cn,wf,or,Hr,_f,ln,Dt,Zt,nr,fa,ma,hs,rr,ga,ms,Wr,Qt,Tf,qr,i1,kf]},Zy=function(){return[Cf,Of,ke,xs,Sf]},Qy=function(){return[Lf,n1]},Jy=function(){return[Df,ke,Af]},e1=function(){return[Rf]},kf=function(e){return postMessage(e,[e.buffer])},t1=function(e){return e&&e.size&&new Ae(e.size)};var Rt=function(e){return e.ondata=function(t,n){return postMessage([t,n],[t.buffer])},function(t){return e.push(t.data[0],t.data[1])}},ur=function(e,t,n,r,i){var a,o=Yy(e,r,i,function(s,l){s?(o.terminate(),t.ondata.call(t,s)):(l[1]&&o.terminate(),t.ondata.call(t,s,l[0],l[1]))});o.postMessage(n),t.push=function(s,l){t.ondata||me(5),a&&t.ondata(me(4,0,1),null,!!l),o.postMessage([s,a=l],[s.buffer])},t.terminate=function(){o.terminate()}},ir=function(e,t){return e[t]|e[t+1]<<8},ar=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},fs=function(e,t){return ar(e,t)+ar(e,t+4)*4294967296},ke=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},Cf=function(e,t){var n=t.filename;if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:t.level==9?2:0,e[9]=3,t.mtime!=0&&ke(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8;for(var r=0;r<=n.length;++r)e[r+10]=n.charCodeAt(r)}},Lf=function(e){(e[0]!=31||e[1]!=139||e[2]!=8)&&me(6,"invalid gzip data");var t=e[3],n=10;t&4&&(n+=e[10]|(e[11]<<8)+2);for(var r=(t>>3&1)+(t>>4&1);r>0;r-=!e[n++]);return n+(t&2)},n1=function(e){var t=e.length;return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0},Of=function(e){return 10+(e.filename&&e.filename.length+1||0)},Df=function(e,t){var n=t.level,r=n==0?0:n<6?1:n==9?3:2;e[0]=120,e[1]=r<<6|(r?32-2*r:1)},Rf=function(e){((e[0]&15)!=8||e[0]>>>4>7||(e[0]<<8|e[1])%31)&&me(6,"invalid zlib data"),e[1]&32&&me(6,"invalid zlib data: preset dictionaries not supported")};function Ss(e,t){return!t&&typeof e=="function"&&(t=e,e={}),this.ondata=t,e}var un=function(){function e(t,n){!n&&typeof t=="function"&&(n=t,t={}),this.ondata=n,this.o=t||{}}return e.prototype.p=function(t,n){this.ondata(qr(t,this.o,0,0,!n),n)},e.prototype.push=function(t,n){this.ondata||me(5),this.d&&me(4),this.d=n,this.p(t,n||!1)},e}(),r1=function(){function e(t,n){ur([Ts,function(){return[Rt,un]}],this,Ss.call(this,t,n),function(r){var i=new un(r.data);onmessage=Rt(i)},6)}return e}();function i1(e,t){return qr(e,t||{},0,0)}var xt=function(){function e(t){this.s={},this.p=new Ae(0),this.ondata=t}return e.prototype.e=function(t){this.ondata||me(5),this.d&&me(4);var n=this.p.length,r=new Ae(n+t.length);r.set(this.p),r.set(t,n),this.p=r},e.prototype.c=function(t){this.d=this.s.i=t||!1;var n=this.s.b,r=ya(this.p,this.o,this.s);this.ondata(Qt(r,n,this.s.b),this.d),this.o=Qt(r,this.s.b-32768),this.s.b=this.o.length,this.p=Qt(this.p,this.s.p/8|0),this.s.p&=7},e.prototype.push=function(t,n){this.e(t),this.c(n)},e}(),Pf=function(){function e(t){this.ondata=t,ur([_s,function(){return[Rt,xt]}],this,0,function(){var n=new xt;onmessage=Rt(n)},7)}return e}();function a1(e,t){return ya(e,t)}var cf=function(){function e(t,n){this.c=xs(),this.l=0,this.v=1,un.call(this,t,n)}return e.prototype.push=function(t,n){un.prototype.push.call(this,t,n)},e.prototype.p=function(t,n){this.c.p(t),this.l+=t.length;var r=qr(t,this.o,this.v&&Of(this.o),n&&8,!n);this.v&&(Cf(r,this.o),this.v=0),n&&(ke(r,r.length-8,this.c.d()),ke(r,r.length-4,this.l)),this.ondata(r,n)},e}(),L2=function(){function e(t,n){ur([Ts,Zy,function(){return[Rt,un,cf]}],this,Ss.call(this,t,n),function(r){var i=new cf(r.data);onmessage=Rt(i)},8)}return e}();var gs=function(){function e(t){this.v=1,xt.call(this,t)}return e.prototype.push=function(t,n){if(xt.prototype.e.call(this,t),this.v){var r=this.p.length>3?Lf(this.p):4;if(r>=this.p.length&&!n)return;this.p=this.p.subarray(r),this.v=0}n&&(this.p.length<8&&me(6,"invalid gzip data"),this.p=this.p.subarray(0,-8)),xt.prototype.c.call(this,n)},e}(),o1=function(){function e(t){this.ondata=t,ur([_s,Qy,function(){return[Rt,xt,gs]}],this,0,function(){var n=new gs;onmessage=Rt(n)},9)}return e}();var uf=function(){function e(t,n){this.c=Af(),this.v=1,un.call(this,t,n)}return e.prototype.push=function(t,n){un.prototype.push.call(this,t,n)},e.prototype.p=function(t,n){this.c.p(t);var r=qr(t,this.o,this.v&&2,n&&4,!n);this.v&&(Df(r,this.o),this.v=0),n&&ke(r,r.length-4,this.c.d()),this.ondata(r,n)},e}(),O2=function(){function e(t,n){ur([Ts,Jy,function(){return[Rt,un,uf]}],this,Ss.call(this,t,n),function(r){var i=new uf(r.data);onmessage=Rt(i)},10)}return e}();var bs=function(){function e(t){this.v=1,xt.call(this,t)}return e.prototype.push=function(t,n){if(xt.prototype.e.call(this,t),this.v){if(this.p.length<2&&!n)return;this.p=this.p.subarray(2),this.v=0}n&&(this.p.length<4&&me(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),xt.prototype.c.call(this,n)},e}(),s1=function(){function e(t){this.ondata=t,ur([_s,e1,function(){return[Rt,xt,bs]}],this,0,function(){var n=new bs;onmessage=Rt(n)},11)}return e}();function Nf(e,t){return ya((Rf(e),e.subarray(2,-4)),t)}var l1=function(){function e(t){this.G=gs,this.I=xt,this.Z=bs,this.ondata=t}return e.prototype.push=function(t,n){if(this.ondata||me(5),this.s)this.s.push(t,n);else{if(this.p&&this.p.length){var r=new Ae(this.p.length+t.length);r.set(this.p),r.set(t,this.p.length)}else this.p=t;if(this.p.length>2){var i=this,a=function(){i.ondata.apply(i,arguments)};this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(a):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(a):new this.Z(a),this.s.push(this.p,n),this.p=null}}},e}(),D2=function(){function e(t){this.G=o1,this.I=Pf,this.Z=s1,this.ondata=t}return e.prototype.push=function(t,n){l1.prototype.push.call(this,t,n)},e}();var df=typeof TextEncoder<"u"&&new TextEncoder,ys=typeof TextDecoder<"u"&&new TextDecoder,Mf=0;try{ys.decode(ln,{stream:!0}),Mf=1}catch{}var If=function(e){for(var t="",n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return[t,Qt(e,n-1)];i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}},R2=function(){function e(t){this.ondata=t,Mf?this.t=new TextDecoder:this.p=ln}return e.prototype.push=function(t,n){if(this.ondata||me(5),n=!!n,this.t){this.ondata(this.t.decode(t,{stream:!0}),n),n&&(this.t.decode().length&&me(8),this.t=null);return}this.p||me(4);var r=new Ae(this.p.length+t.length);r.set(this.p),r.set(t,this.p.length);var i=If(r),a=i[0],o=i[1];n?(o.length&&me(8),this.p=null):this.p=o,this.ondata(a,n)},e}(),P2=function(){function e(t){this.ondata=t}return e.prototype.push=function(t,n){this.ondata||me(5),this.d&&me(4),this.ondata(ws(t),this.d=n||!1)},e}();function ws(e,t){if(t){for(var n=new Ae(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(df)return df.encode(e);for(var i=e.length,a=new Ae(e.length+(e.length>>1)),o=0,s=function(f){a[o++]=f},r=0;r<i;++r){if(o+5>a.length){var l=new Ae(o+8+(i-r<<1));l.set(a),a=l}var c=e.charCodeAt(r);c<128||t?s(c):c<2048?(s(192|c>>6),s(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|e.charCodeAt(++r)&1023,s(240|c>>18),s(128|c>>12&63),s(128|c>>6&63),s(128|c&63)):(s(224|c>>12),s(128|c>>6&63),s(128|c&63))}return Qt(a,0,o)}function c1(e,t){if(t){for(var n="",r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else{if(ys)return ys.decode(e);var i=If(e),a=i[0],o=i[1];return o.length&&me(8),a}}var Ff=function(e){return e==1?3:e<6?2:e==9?1:0};var u1=function(e,t){for(;ir(e,t)!=1;t+=4+ir(e,t+2));return[fs(e,t+12),fs(e,t+4),fs(e,t+20)]},pa=function(e){var t=0;if(e)for(var n in e){var r=e[n].length;r>65535&&me(9),t+=r+4}return t},ff=function(e,t,n,r,i,a,o,s){var l=r.length,c=n.extra,u=s&&s.length,f=pa(c);ke(e,t,o!=null?33639248:67324752),t+=4,o!=null&&(e[t++]=20,e[t++]=n.os),e[t]=20,t+=2,e[t++]=n.flag<<1|(a<0&&8),e[t++]=i&&8,e[t++]=n.compression&255,e[t++]=n.compression>>8;var d=new Date(n.mtime==null?Date.now():n.mtime),p=d.getFullYear()-1980;if((p<0||p>119)&&me(10),ke(e,t,p<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>>1),t+=4,a!=-1&&(ke(e,t,n.crc),ke(e,t+4,a<0?-a-2:a),ke(e,t+8,n.size)),ke(e,t+12,l),ke(e,t+14,f),t+=16,o!=null&&(ke(e,t,u),ke(e,t+6,n.attrs),ke(e,t+10,o),t+=14),e.set(r,t),t+=l,f)for(var b in c){var g=c[b],h=g.length;ke(e,t,+b),ke(e,t+2,h),e.set(g,t+4),t+=4+h}return u&&(e.set(s,t),t+=u),t},d1=function(e,t,n,r,i){ke(e,t,101010256),ke(e,t+8,n),ke(e,t+10,n),ke(e,t+12,r),ke(e,t+16,i)},ba=function(){function e(t){this.filename=t,this.c=xs(),this.size=0,this.compression=0}return e.prototype.process=function(t,n){this.ondata(null,t,n)},e.prototype.push=function(t,n){this.ondata||me(5),this.c.p(t),this.size+=t.length,n&&(this.crc=this.c.d()),this.process(t,n||!1)},e}(),N2=function(){function e(t,n){var r=this;n||(n={}),ba.call(this,t),this.d=new un(n,function(i,a){r.ondata(null,i,a)}),this.compression=8,this.flag=Ff(n.level)}return e.prototype.process=function(t,n){try{this.d.push(t,n)}catch(r){this.ondata(r,null,n)}},e.prototype.push=function(t,n){ba.prototype.push.call(this,t,n)},e}(),M2=function(){function e(t,n){var r=this;n||(n={}),ba.call(this,t),this.d=new r1(n,function(i,a,o){r.ondata(i,a,o)}),this.compression=8,this.flag=Ff(n.level),this.terminate=this.d.terminate}return e.prototype.process=function(t,n){this.d.push(t,n)},e.prototype.push=function(t,n){ba.prototype.push.call(this,t,n)},e}(),I2=function(){function e(t){this.ondata=t,this.u=[],this.d=1}return e.prototype.add=function(t){var n=this;if(this.ondata||me(5),this.d&2)this.ondata(me(4+(this.d&1)*8,0,1),null,!1);else{var r=ws(t.filename),i=r.length,a=t.comment,o=a&&ws(a),s=i!=t.filename.length||o&&a.length!=o.length,l=i+pa(t.extra)+30;i>65535&&this.ondata(me(11,0,1),null,!1);var c=new Ae(l);ff(c,0,t,r,s,-1);var u=[c],f=function(){for(var h=0,m=u;h<m.length;h++){var y=m[h];n.ondata(null,y,!1)}u=[]},d=this.d;this.d=0;var p=this.u.length,b=Ef(t,{f:r,u:s,o,t:function(){t.terminate&&t.terminate()},r:function(){if(f(),d){var h=n.u[p+1];h?h.r():n.d=1}d=1}}),g=0;t.ondata=function(h,m,y){if(h)n.ondata(h,m,y),n.terminate();else if(g+=m.length,u.push(m),y){var w=new Ae(16);ke(w,0,134695760),ke(w,4,t.crc),ke(w,8,g),ke(w,12,t.size),u.push(w),b.c=g,b.b=l+g+16,b.crc=t.crc,b.size=t.size,d&&b.r(),d=1}else d&&f()},this.u.push(b)}},e.prototype.end=function(){var t=this;if(this.d&2){this.ondata(me(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){t.d&1&&(t.u.splice(-1,1),t.e())},t:function(){}}),this.d=3},e.prototype.e=function(){for(var t=0,n=0,r=0,i=0,a=this.u;i<a.length;i++){var o=a[i];r+=46+o.f.length+pa(o.extra)+(o.o?o.o.length:0)}for(var s=new Ae(r+22),l=0,c=this.u;l<c.length;l++){var o=c[l];ff(s,t,o,o.f,o.u,-o.c-2,n,o.o),t+=46+o.f.length+pa(o.extra)+(o.o?o.o.length:0),n+=o.b}d1(s,t,this.u.length,r,n),this.ondata(null,s,!0),this.d=2},e.prototype.terminate=function(){for(var t=0,n=this.u;t<n.length;t++){var r=n[t];r.t()}this.d=2},e}();var f1=function(){function e(){}return e.prototype.push=function(t,n){this.ondata(null,t,n)},e.compression=0,e}(),F2=function(){function e(){var t=this;this.i=new xt(function(n,r){t.ondata(null,n,r)})}return e.prototype.push=function(t,n){try{this.i.push(t,n)}catch(r){this.ondata(r,null,n)}},e.compression=8,e}(),B2=function(){function e(t,n){var r=this;n<32e4?this.i=new xt(function(i,a){r.ondata(null,i,a)}):(this.i=new Pf(function(i,a,o){r.ondata(i,a,o)}),this.terminate=this.i.terminate)}return e.prototype.push=function(t,n){this.i.terminate&&(t=Qt(t,0)),this.i.push(t,n)},e.compression=8,e}(),z2=function(){function e(t){this.onfile=t,this.k=[],this.o={0:f1},this.p=ln}return e.prototype.push=function(t,n){var r=this;if(this.onfile||me(5),this.p||me(4),this.c>0){var i=Math.min(this.c,t.length),a=t.subarray(0,i);if(this.c-=i,this.d?this.d.push(a,!this.c):this.k[0].push(a),t=t.subarray(i),t.length)return this.push(t,n)}else{var o=0,s=0,l=void 0,c=void 0;this.p.length?t.length?(c=new Ae(this.p.length+t.length),c.set(this.p),c.set(t,this.p.length)):c=this.p:c=t;for(var u=c.length,f=this.c,d=f&&this.d,p=function(){var m,y=ar(c,s);if(y==67324752){o=1,l=s,b.d=null,b.c=0;var w=ir(c,s+6),A=ir(c,s+8),T=w&2048,x=w&8,v=ir(c,s+26),_=ir(c,s+28);if(u>s+30+v+_){var S=[];b.k.unshift(S),o=2;var E=ar(c,s+18),C=ar(c,s+22),D=c1(c.subarray(s+30,s+=30+v),!T);E==4294967295?(m=x?[-2]:u1(c,s),E=m[0],C=m[1]):x&&(E=-1),s+=_,b.c=E;var O,I={name:D,compression:A,start:function(){if(I.ondata||me(5),!E)I.ondata(null,ln,!0);else{var R=r.o[A];R||I.ondata(me(14,"unknown compression type "+A,1),null,!1),O=E<0?new R(D):new R(D,E,C),O.ondata=function(ne,W,J){I.ondata(ne,W,J)};for(var B=0,F=S;B<F.length;B++){var $=F[B];O.push($,!1)}r.k[0]==S&&r.c?r.d=O:O.push(ln,!0)}},terminate:function(){O&&O.terminate&&O.terminate()}};E>=0&&(I.size=E,I.originalSize=C),b.onfile(I)}return"break"}else if(f){if(y==134695760)return l=s+=12+(f==-2&&8),o=3,b.c=0,"break";if(y==33639248)return l=s-=4,o=3,b.c=0,"break"}},b=this;s<u-4;++s){var g=p();if(g==="break")break}if(this.p=ln,f<0){var h=o?c.subarray(0,l-12-(f==-2&&8)-(ar(c,l-16)==134695760&&4)):c.subarray(0,s);d?d.push(h,!!o):this.k[+(o==2)].push(h)}if(o&2)return this.push(c.subarray(s),n);this.p=c.subarray(s)}n&&(this.c&&me(13),this.p=null)},e.prototype.register=function(t){this.o[t.compression]=t},e}();var Os=!1,Ds=!1,$n=[],Rs=-1;function h1(e){m1(e)}function m1(e){$n.includes(e)||$n.push(e),g1()}function Qf(e){let t=$n.indexOf(e);t!==-1&&t>Rs&&$n.splice(t,1)}function g1(){!Ds&&!Os&&(Os=!0,queueMicrotask(b1))}function b1(){Os=!1,Ds=!0;for(let e=0;e<$n.length;e++)$n[e](),Rs=e;$n.length=0,Rs=-1,Ds=!1}var pr,hr,Jr,Jf,Ps=!0;function y1(e){Ps=!1,e(),Ps=!0}function w1(e){pr=e.reactive,Jr=e.release,hr=t=>e.effect(t,{scheduler:n=>{Ps?h1(n):n()}}),Jf=e.raw}function Bf(e){hr=e}function v1(e){let t=()=>{};return[n=>{let r=hr(n);return e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(i=>i())}),e._x_effects.add(r),t=()=>{r!==void 0&&(e._x_effects.delete(r),Jr(r))},r},()=>{t()}]}function Xr(e,t,n={}){e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0,cancelable:!0}))}function En(e,t){if(typeof ShadowRoot=="function"&&e instanceof ShadowRoot){Array.from(e.children).forEach(i=>En(i,t));return}let n=!1;if(t(e,()=>n=!0),n)return;let r=e.firstElementChild;for(;r;)En(r,t,!1),r=r.nextElementSibling}function dn(e,...t){}var zf=!1;function x1(){zf&&dn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),zf=!0,document.body||dn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),Xr(document,"alpine:init"),Xr(document,"alpine:initializing"),Qs(),S1(t=>fn(t,En)),Xs(t=>Vs(t)),cp((t,n)=>{nl(t,n).forEach(r=>r())});let e=t=>!La(t.parentElement,!0);Array.from(document.querySelectorAll(np().join(","))).filter(e).forEach(t=>{fn(t)}),Xr(document,"alpine:initialized")}var Gs=[],ep=[];function tp(){return Gs.map(e=>e())}function np(){return Gs.concat(ep).map(e=>e())}function rp(e){Gs.push(e)}function ip(e){ep.push(e)}function La(e,t=!1){return Oa(e,n=>{if((t?np():tp()).some(r=>n.matches(r)))return!0})}function Oa(e,t){if(e){if(t(e))return e;if(e._x_teleportBack&&(e=e._x_teleportBack),!!e.parentElement)return Oa(e.parentElement,t)}}function _1(e){return tp().some(t=>e.matches(t))}var ap=[];function T1(e){ap.push(e)}function fn(e,t=En,n=()=>{}){z1(()=>{t(e,(r,i)=>{n(r,i),ap.forEach(a=>a(r,i)),nl(r,r.attributes).forEach(a=>a()),r._x_ignore&&i()})})}function Vs(e){En(e,t=>{dp(t),A1(t)})}var op=[],sp=[],lp=[];function S1(e){lp.push(e)}function Xs(e,t){typeof t=="function"?(e._x_cleanups||(e._x_cleanups=[]),e._x_cleanups.push(t)):(t=e,sp.push(t))}function cp(e){op.push(e)}function up(e,t,n){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(n)}function dp(e,t){e._x_attributeCleanups&&Object.entries(e._x_attributeCleanups).forEach(([n,r])=>{(t===void 0||t.includes(n))&&(r.forEach(i=>i()),delete e._x_attributeCleanups[n])})}function A1(e){if(e._x_cleanups)for(;e._x_cleanups.length;)e._x_cleanups.pop()()}var Ys=new MutationObserver(el),Zs=!1;function Qs(){Ys.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),Zs=!0}function fp(){E1(),Ys.disconnect(),Zs=!1}var Yr=[],As=!1;function E1(){Yr=Yr.concat(Ys.takeRecords()),Yr.length&&!As&&(As=!0,queueMicrotask(()=>{k1(),As=!1}))}function k1(){el(Yr),Yr.length=0}function je(e){if(!Zs)return e();fp();let t=e();return Qs(),t}var Js=!1,Ea=[];function C1(){Js=!0}function L1(){Js=!1,el(Ea),Ea=[]}function el(e){if(Js){Ea=Ea.concat(e);return}let t=[],n=[],r=new Map,i=new Map;for(let a=0;a<e.length;a++)if(!e[a].target._x_ignoreMutationObserver&&(e[a].type==="childList"&&(e[a].addedNodes.forEach(o=>o.nodeType===1&&t.push(o)),e[a].removedNodes.forEach(o=>o.nodeType===1&&n.push(o))),e[a].type==="attributes")){let o=e[a].target,s=e[a].attributeName,l=e[a].oldValue,c=()=>{r.has(o)||r.set(o,[]),r.get(o).push({name:s,value:o.getAttribute(s)})},u=()=>{i.has(o)||i.set(o,[]),i.get(o).push(s)};o.hasAttribute(s)&&l===null?c():o.hasAttribute(s)?(u(),c()):u()}i.forEach((a,o)=>{dp(o,a)}),r.forEach((a,o)=>{op.forEach(s=>s(o,a))});for(let a of n)t.includes(a)||(sp.forEach(o=>o(a)),Vs(a));t.forEach(a=>{a._x_ignoreSelf=!0,a._x_ignore=!0});for(let a of t)n.includes(a)||a.isConnected&&(delete a._x_ignoreSelf,delete a._x_ignore,lp.forEach(o=>o(a)),a._x_ignore=!0,a._x_ignoreSelf=!0);t.forEach(a=>{delete a._x_ignoreSelf,delete a._x_ignore}),t=null,n=null,r=null,i=null}function pp(e){return ti(dr(e))}function ei(e,t,n){return e._x_dataStack=[t,...dr(n||e)],()=>{e._x_dataStack=e._x_dataStack.filter(r=>r!==t)}}function dr(e){return e._x_dataStack?e._x_dataStack:typeof ShadowRoot=="function"&&e instanceof ShadowRoot?dr(e.host):e.parentNode?dr(e.parentNode):[]}function ti(e){return new Proxy({objects:e},O1)}var O1={ownKeys({objects:e}){return Array.from(new Set(e.flatMap(t=>Object.keys(t))))},has({objects:e},t){return t==Symbol.unscopables?!1:e.some(n=>Object.prototype.hasOwnProperty.call(n,t))},get({objects:e},t,n){return t=="toJSON"?D1:Reflect.get(e.find(r=>Object.prototype.hasOwnProperty.call(r,t))||{},t,n)},set({objects:e},t,n,r){let i=e.find(o=>Object.prototype.hasOwnProperty.call(o,t))||e[e.length-1],a=Object.getOwnPropertyDescriptor(i,t);return a?.set&&a?.get?Reflect.set(i,t,n,r):Reflect.set(i,t,n)}};function D1(){return Reflect.ownKeys(this).reduce((e,t)=>(e[t]=Reflect.get(this,t),e),{})}function hp(e){let t=r=>typeof r=="object"&&!Array.isArray(r)&&r!==null,n=(r,i="")=>{Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(([a,{value:o,enumerable:s}])=>{if(s===!1||o===void 0)return;let l=i===""?a:`${i}.${a}`;typeof o=="object"&&o!==null&&o._x_interceptor?r[a]=o.initialize(e,l,a):t(o)&&o!==r&&!(o instanceof Element)&&n(o,l)})};return n(e)}function mp(e,t=()=>{}){let n={initialValue:void 0,_x_interceptor:!0,initialize(r,i,a){return e(this.initialValue,()=>R1(r,i),o=>gp(r,i,o),i,a)}};return t(n),r=>{if(typeof r=="object"&&r!==null&&r._x_interceptor){let i=n.initialize.bind(n);n.initialize=(a,o,s)=>{let l=r.initialize(a,o,s);return n.initialValue=l,i(a,o,s)}}else n.initialValue=r;return n}}function R1(e,t){return t.split(".").reduce((n,r)=>n[r],e)}function gp(e,t,n){if(typeof t=="string"&&(t=t.split(".")),t.length===1)e[t[0]]=n;else{if(t.length===0)throw error;return e[t[0]]||(e[t[0]]={}),gp(e[t[0]],t.slice(1),n)}}var bp={};function jt(e,t){bp[e]=t}function Ns(e,t){return Object.entries(bp).forEach(([n,r])=>{let i=null;function a(){if(i)return i;{let[o,s]=Tp(t);return i={interceptor:mp,...o},Xs(t,s),i}}Object.defineProperty(e,`$${n}`,{get(){return r(t,a())},enumerable:!1})}),e}function P1(e,t,n,...r){try{return n(...r)}catch(i){Qr(i,e,t)}}function Qr(e,t,n=void 0){Object.assign(e,{el:t,expression:n}),setTimeout(()=>{throw e},0)}var Sa=!0;function yp(e){let t=Sa;Sa=!1;let n=e();return Sa=t,n}function Hn(e,t,n={}){let r;return ut(e,t)(i=>r=i,n),r}function ut(...e){return wp(...e)}var wp=vp;function N1(e){wp=e}function vp(e,t){let n={};Ns(n,e);let r=[n,...dr(e)],i=typeof t=="function"?M1(r,t):F1(r,t,e);return P1.bind(null,e,t,i)}function M1(e,t){return(n=()=>{},{scope:r={},params:i=[]}={})=>{let a=t.apply(ti([r,...e]),i);ka(n,a)}}var Es={};function I1(e,t){if(Es[e])return Es[e];let n=Object.getPrototypeOf(async function(){}).constructor,r=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e,i=(()=>{try{let a=new n(["__self","scope"],`with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`);return Object.defineProperty(a,"name",{value:`[Alpine] ${e}`}),a}catch(a){return Qr(a,t,e),Promise.resolve()}})();return Es[e]=i,i}function F1(e,t,n){let r=I1(t,n);return(i=()=>{},{scope:a={},params:o=[]}={})=>{r.result=void 0,r.finished=!1;let s=ti([a,...e]);if(typeof r=="function"){let l=r(r,s).catch(c=>Qr(c,n,t));r.finished?(ka(i,r.result,s,o,n),r.result=void 0):l.then(c=>{ka(i,c,s,o,n)}).catch(c=>Qr(c,n,t)).finally(()=>r.result=void 0)}}}function ka(e,t,n,r,i){if(Sa&&typeof t=="function"){let a=t.apply(n,r);a instanceof Promise?a.then(o=>ka(e,o,n,r)).catch(o=>Qr(o,i,t)):e(a)}else typeof t=="object"&&t instanceof Promise?t.then(a=>e(a)):e(t)}var tl="x-";function mr(e=""){return tl+e}function B1(e){tl=e}var Ms={};function Fe(e,t){return Ms[e]=t,{before(n){if(!Ms[n])return;let r=jn.indexOf(n);jn.splice(r>=0?r:jn.indexOf("DEFAULT"),0,e)}}}function nl(e,t,n){if(t=Array.from(t),e._x_virtualDirectives){let i=Object.entries(e._x_virtualDirectives).map(([o,s])=>({name:o,value:s})),a=xp(i);i=i.map(o=>a.find(s=>s.name===o.name)?{name:`x-bind:${o.name}`,value:`"${o.value}"`}:o),t=t.concat(i)}let r={};return t.map(Ep((i,a)=>r[i]=a)).filter(Cp).map(j1(r,n)).sort($1).map(i=>U1(e,i))}function xp(e){return Array.from(e).map(Ep()).filter(t=>!Cp(t))}var Is=!1,Vr=new Map,_p=Symbol();function z1(e){Is=!0;let t=Symbol();_p=t,Vr.set(t,[]);let n=()=>{for(;Vr.get(t).length;)Vr.get(t).shift()();Vr.delete(t)},r=()=>{Is=!1,n()};e(n),r()}function Tp(e){let t=[],n=a=>t.push(a),[r,i]=v1(e);return t.push(i),[{Alpine:ri,effect:r,cleanup:n,evaluateLater:ut.bind(ut,e),evaluate:Hn.bind(Hn,e)},()=>t.forEach(a=>a())]}function U1(e,t){let n=()=>{},r=Ms[t.type]||n,[i,a]=Tp(e);up(e,t.original,a);let o=()=>{e._x_ignore||e._x_ignoreSelf||(r.inline&&r.inline(e,t,i),r=r.bind(r,e,t,i),Is?Vr.get(_p).push(r):r())};return o.runCleanups=a,o}var Sp=(e,t)=>({name:n,value:r})=>(n.startsWith(e)&&(n=n.replace(e,t)),{name:n,value:r}),Ap=e=>e;function Ep(e=()=>{}){return({name:t,value:n})=>{let{name:r,value:i}=kp.reduce((a,o)=>o(a),{name:t,value:n});return r!==t&&e(r,t),{name:r,value:i}}}var kp=[];function rl(e){kp.push(e)}function Cp({name:e}){return Lp().test(e)}var Lp=()=>new RegExp(`^${tl}([^:^.]+)\\b`);function j1(e,t){return({name:n,value:r})=>{let i=n.match(Lp()),a=n.match(/:([a-zA-Z0-9\-_:]+)/),o=n.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],s=t||e[n]||n;return{type:i?i[1]:null,value:a?a[1]:null,modifiers:o.map(l=>l.replace(".","")),expression:r,original:s}}}var Fs="DEFAULT",jn=["ignore","ref","data","id","anchor","bind","init","for","model","modelable","transition","show","if",Fs,"teleport"];function $1(e,t){let n=jn.indexOf(e.type)===-1?Fs:e.type,r=jn.indexOf(t.type)===-1?Fs:t.type;return jn.indexOf(n)-jn.indexOf(r)}var Bs=[],il=!1;function al(e=()=>{}){return queueMicrotask(()=>{il||setTimeout(()=>{zs()})}),new Promise(t=>{Bs.push(()=>{e(),t()})})}function zs(){for(il=!1;Bs.length;)Bs.shift()()}function H1(){il=!0}function ol(e,t){return Array.isArray(t)?Uf(e,t.join(" ")):typeof t=="object"&&t!==null?W1(e,t):typeof t=="function"?ol(e,t()):Uf(e,t)}function Uf(e,t){let n=a=>a.split(" ").filter(Boolean),r=a=>a.split(" ").filter(o=>!e.classList.contains(o)).filter(Boolean),i=a=>(e.classList.add(...a),()=>{e.classList.remove(...a)});return t=t===!0?t="":t||"",i(r(t))}function W1(e,t){let n=s=>s.split(" ").filter(Boolean),r=Object.entries(t).flatMap(([s,l])=>l?n(s):!1).filter(Boolean),i=Object.entries(t).flatMap(([s,l])=>l?!1:n(s)).filter(Boolean),a=[],o=[];return i.forEach(s=>{e.classList.contains(s)&&(e.classList.remove(s),o.push(s))}),r.forEach(s=>{e.classList.contains(s)||(e.classList.add(s),a.push(s))}),()=>{o.forEach(s=>e.classList.add(s)),a.forEach(s=>e.classList.remove(s))}}function Da(e,t){return typeof t=="object"&&t!==null?q1(e,t):K1(e,t)}function q1(e,t){let n={};return Object.entries(t).forEach(([r,i])=>{n[r]=e.style[r],r.startsWith("--")||(r=G1(r)),e.style.setProperty(r,i)}),setTimeout(()=>{e.style.length===0&&e.removeAttribute("style")}),()=>{Da(e,n)}}function K1(e,t){let n=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",n||"")}}function G1(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Us(e,t=()=>{}){let n=!1;return function(){n?t.apply(this,arguments):(n=!0,e.apply(this,arguments))}}Fe("transition",(e,{value:t,modifiers:n,expression:r},{evaluate:i})=>{typeof r=="function"&&(r=i(r)),r!==!1&&(!r||typeof r=="boolean"?X1(e,n,t):V1(e,r,t))});function V1(e,t,n){Op(e,ol,""),{enter:r=>{e._x_transition.enter.during=r},"enter-start":r=>{e._x_transition.enter.start=r},"enter-end":r=>{e._x_transition.enter.end=r},leave:r=>{e._x_transition.leave.during=r},"leave-start":r=>{e._x_transition.leave.start=r},"leave-end":r=>{e._x_transition.leave.end=r}}[n](t)}function X1(e,t,n){Op(e,Da);let r=!t.includes("in")&&!t.includes("out")&&!n,i=r||t.includes("in")||["enter"].includes(n),a=r||t.includes("out")||["leave"].includes(n);t.includes("in")&&!r&&(t=t.filter((m,y)=>y<t.indexOf("out"))),t.includes("out")&&!r&&(t=t.filter((m,y)=>y>t.indexOf("out")));let o=!t.includes("opacity")&&!t.includes("scale"),s=o||t.includes("opacity"),l=o||t.includes("scale"),c=s?0:1,u=l?Kr(t,"scale",95)/100:1,f=Kr(t,"delay",0)/1e3,d=Kr(t,"origin","center"),p="opacity, transform",b=Kr(t,"duration",150)/1e3,g=Kr(t,"duration",75)/1e3,h="cubic-bezier(0.4, 0.0, 0.2, 1)";i&&(e._x_transition.enter.during={transformOrigin:d,transitionDelay:`${f}s`,transitionProperty:p,transitionDuration:`${b}s`,transitionTimingFunction:h},e._x_transition.enter.start={opacity:c,transform:`scale(${u})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),a&&(e._x_transition.leave.during={transformOrigin:d,transitionDelay:`${f}s`,transitionProperty:p,transitionDuration:`${g}s`,transitionTimingFunction:h},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:c,transform:`scale(${u})`})}function Op(e,t,n={}){e._x_transition||(e._x_transition={enter:{during:n,start:n,end:n},leave:{during:n,start:n,end:n},in(r=()=>{},i=()=>{}){js(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},r,i)},out(r=()=>{},i=()=>{}){js(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},r,i)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,n,r){let i=document.visibilityState==="visible"?requestAnimationFrame:setTimeout,a=()=>i(n);if(t){e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(n):a():e._x_transition?e._x_transition.in(n):a();return}e._x_hidePromise=e._x_transition?new Promise((o,s)=>{e._x_transition.out(()=>{},()=>o(r)),e._x_transitioning&&e._x_transitioning.beforeCancel(()=>s({isFromCancelledTransition:!0}))}):Promise.resolve(r),queueMicrotask(()=>{let o=Dp(e);o?(o._x_hideChildren||(o._x_hideChildren=[]),o._x_hideChildren.push(e)):i(()=>{let s=l=>{let c=Promise.all([l._x_hidePromise,...(l._x_hideChildren||[]).map(s)]).then(([u])=>u());return delete l._x_hidePromise,delete l._x_hideChildren,c};s(e).catch(l=>{if(!l.isFromCancelledTransition)throw l})})})};function Dp(e){let t=e.parentNode;if(t)return t._x_hidePromise?t:Dp(t)}function js(e,t,{during:n,start:r,end:i}={},a=()=>{},o=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),Object.keys(n).length===0&&Object.keys(r).length===0&&Object.keys(i).length===0){a(),o();return}let s,l,c;Y1(e,{start(){s=t(e,r)},during(){l=t(e,n)},before:a,end(){s(),c=t(e,i)},after:o,cleanup(){l(),c()}})}function Y1(e,t){let n,r,i,a=Us(()=>{je(()=>{n=!0,r||t.before(),i||(t.end(),zs()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(o){this.beforeCancels.push(o)},cancel:Us(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();a()}),finish:a},je(()=>{t.start(),t.during()}),H1(),requestAnimationFrame(()=>{if(n)return;let o=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,s=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;o===0&&(o=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),je(()=>{t.before()}),r=!0,requestAnimationFrame(()=>{n||(je(()=>{t.end()}),zs(),setTimeout(e._x_transitioning.finish,o+s),i=!0)})})}function Kr(e,t,n){if(e.indexOf(t)===-1)return n;let r=e[e.indexOf(t)+1];if(!r||t==="scale"&&isNaN(r))return n;if(t==="duration"||t==="delay"){let i=r.match(/([0-9]+)ms/);if(i)return i[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[r,e[e.indexOf(t)+2]].join(" "):r}var kn=!1;function ni(e,t=()=>{}){return(...n)=>kn?t(...n):e(...n)}function Z1(e){return(...t)=>kn&&e(...t)}var Rp=[];function Pp(e){Rp.push(e)}function Q1(e,t){Rp.forEach(n=>n(e,t)),kn=!0,Np(()=>{fn(t,(n,r)=>{r(n,()=>{})})}),kn=!1}var $s=!1;function J1(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),kn=!0,$s=!0,Np(()=>{ew(t)}),kn=!1,$s=!1}function ew(e){let t=!1;fn(e,(n,r)=>{En(n,(i,a)=>{if(t&&_1(i))return a();t=!0,r(i,a)})})}function Np(e){let t=hr;Bf((n,r)=>{let i=t(n);return Jr(i),()=>{}}),e(),Bf(t)}function Mp(e,t,n,r=[]){switch(e._x_bindings||(e._x_bindings=pr({})),e._x_bindings[t]=n,t=r.includes("camel")?lw(t):t,t){case"value":tw(e,n);break;case"style":rw(e,n);break;case"class":nw(e,n);break;case"selected":case"checked":iw(e,t,n);break;default:Ip(e,t,n);break}}function tw(e,t){if(e.type==="radio")e.attributes.value===void 0&&(e.value=t),window.fromModel&&(typeof t=="boolean"?e.checked=Aa(e.value)===t:e.checked=jf(e.value,t));else if(e.type==="checkbox")Number.isInteger(t)?e.value=t:!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?e.value=String(t):Array.isArray(t)?e.checked=t.some(n=>jf(n,e.value)):e.checked=!!t;else if(e.tagName==="SELECT")sw(e,t);else{if(e.value===t)return;e.value=t===void 0?"":t}}function nw(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=ol(e,t)}function rw(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=Da(e,t)}function iw(e,t,n){Ip(e,t,n),ow(e,t,n)}function Ip(e,t,n){[null,void 0,!1].includes(n)&&cw(t)?e.removeAttribute(t):(Fp(t)&&(n=t),aw(e,t,n))}function aw(e,t,n){e.getAttribute(t)!=n&&e.setAttribute(t,n)}function ow(e,t,n){e[t]!==n&&(e[t]=n)}function sw(e,t){let n=[].concat(t).map(r=>r+"");Array.from(e.options).forEach(r=>{r.selected=n.includes(r.value)})}function lw(e){return e.toLowerCase().replace(/-(\w)/g,(t,n)=>n.toUpperCase())}function jf(e,t){return e==t}function Aa(e){return[1,"1","true","on","yes",!0].includes(e)?!0:[0,"0","false","off","no",!1].includes(e)?!1:e?!!e:null}function Fp(e){return["disabled","checked","required","readonly","hidden","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(e)}function cw(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}function uw(e,t,n){return e._x_bindings&&e._x_bindings[t]!==void 0?e._x_bindings[t]:Bp(e,t,n)}function dw(e,t,n,r=!0){if(e._x_bindings&&e._x_bindings[t]!==void 0)return e._x_bindings[t];if(e._x_inlineBindings&&e._x_inlineBindings[t]!==void 0){let i=e._x_inlineBindings[t];return i.extract=r,yp(()=>Hn(e,i.expression))}return Bp(e,t,n)}function Bp(e,t,n){let r=e.getAttribute(t);return r===null?typeof n=="function"?n():n:r===""?!0:Fp(t)?!![t,"true"].includes(r):r}function zp(e,t){var n;return function(){var r=this,i=arguments,a=function(){n=null,e.apply(r,i)};clearTimeout(n),n=setTimeout(a,t)}}function Up(e,t){let n;return function(){let r=this,i=arguments;n||(e.apply(r,i),n=!0,setTimeout(()=>n=!1,t))}}function jp({get:e,set:t},{get:n,set:r}){let i=!0,a,o=hr(()=>{let s=e(),l=n();if(i)r(ks(s)),i=!1,a=JSON.stringify(s);else{let c=JSON.stringify(s);c!==a?(r(ks(s)),a=c):(t(ks(l)),a=JSON.stringify(l))}JSON.stringify(n()),JSON.stringify(e())});return()=>{Jr(o)}}function ks(e){return typeof e=="object"?JSON.parse(JSON.stringify(e)):e}function fw(e){(Array.isArray(e)?e:[e]).forEach(t=>t(ri))}var Un={},$f=!1;function pw(e,t){if($f||(Un=pr(Un),$f=!0),t===void 0)return Un[e];Un[e]=t,typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&Un[e].init(),hp(Un[e])}function hw(){return Un}var $p={};function mw(e,t){let n=typeof t!="function"?()=>t:t;return e instanceof Element?Hp(e,n()):($p[e]=n,()=>{})}function gw(e){return Object.entries($p).forEach(([t,n])=>{Object.defineProperty(e,t,{get(){return(...r)=>n(...r)}})}),e}function Hp(e,t,n){let r=[];for(;r.length;)r.pop()();let i=Object.entries(t).map(([o,s])=>({name:o,value:s})),a=xp(i);return i=i.map(o=>a.find(s=>s.name===o.name)?{name:`x-bind:${o.name}`,value:`"${o.value}"`}:o),nl(e,i,n).map(o=>{r.push(o.runCleanups),o()}),()=>{for(;r.length;)r.pop()()}}var Wp={};function bw(e,t){Wp[e]=t}function yw(e,t){return Object.entries(Wp).forEach(([n,r])=>{Object.defineProperty(e,n,{get(){return(...i)=>r.bind(t)(...i)},enumerable:!1})}),e}var ww={get reactive(){return pr},get release(){return Jr},get effect(){return hr},get raw(){return Jf},version:"3.13.3",flushAndStopDeferringMutations:L1,dontAutoEvaluateFunctions:yp,disableEffectScheduling:y1,startObservingMutations:Qs,stopObservingMutations:fp,setReactivityEngine:w1,onAttributeRemoved:up,onAttributesAdded:cp,closestDataStack:dr,skipDuringClone:ni,onlyDuringClone:Z1,addRootSelector:rp,addInitSelector:ip,interceptClone:Pp,addScopeToNode:ei,deferMutations:C1,mapAttributes:rl,evaluateLater:ut,interceptInit:T1,setEvaluator:N1,mergeProxies:ti,extractProp:dw,findClosest:Oa,onElRemoved:Xs,closestRoot:La,destroyTree:Vs,interceptor:mp,transition:js,setStyles:Da,mutateDom:je,directive:Fe,entangle:jp,throttle:Up,debounce:zp,evaluate:Hn,initTree:fn,nextTick:al,prefixed:mr,prefix:B1,plugin:fw,magic:jt,store:pw,start:x1,clone:J1,cloneNode:Q1,bound:uw,$data:pp,walk:En,data:bw,bind:mw},ri=ww;function qp(e,t){let n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}var vw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",W2=qp(vw+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"),xw=Object.freeze({}),q2=Object.freeze([]),_w=Object.prototype.hasOwnProperty,Ra=(e,t)=>_w.call(e,t),Wn=Array.isArray,Zr=e=>Kp(e)==="[object Map]",Tw=e=>typeof e=="string",sl=e=>typeof e=="symbol",Pa=e=>e!==null&&typeof e=="object",Sw=Object.prototype.toString,Kp=e=>Sw.call(e),Gp=e=>Kp(e).slice(8,-1),ll=e=>Tw(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Na=e=>{let t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Aw=/-(\w)/g,K2=Na(e=>e.replace(Aw,(t,n)=>n?n.toUpperCase():"")),Ew=/\B([A-Z])/g,G2=Na(e=>e.replace(Ew,"-$1").toLowerCase()),kw=Na(e=>e.charAt(0).toUpperCase()+e.slice(1)),V2=Na(e=>e?`on${kw(e)}`:""),Vp=(e,t)=>e!==t&&(e===e||t===t),Hs=new WeakMap,Gr=[],Jt,qn=Symbol("iterate"),Ws=Symbol("Map key iterate");function Cw(e){return e&&e._isEffect===!0}function Lw(e,t=xw){Cw(e)&&(e=e.raw);let n=Rw(e,t);return t.lazy||n(),n}function Ow(e){e.active&&(Xp(e),e.options.onStop&&e.options.onStop(),e.active=!1)}var Dw=0;function Rw(e,t){let n=function(){if(!n.active)return e();if(!Gr.includes(n)){Xp(n);try{return Nw(),Gr.push(n),Jt=n,e()}finally{Gr.pop(),Yp(),Jt=Gr[Gr.length-1]}}};return n.id=Dw++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}function Xp(e){let{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}var fr=!0,cl=[];function Pw(){cl.push(fr),fr=!1}function Nw(){cl.push(fr),fr=!0}function Yp(){let e=cl.pop();fr=e===void 0?!0:e}function Ut(e,t,n){if(!fr||Jt===void 0)return;let r=Hs.get(e);r||Hs.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=new Set),i.has(Jt)||(i.add(Jt),Jt.deps.push(i),Jt.options.onTrack&&Jt.options.onTrack({effect:Jt,target:e,type:t,key:n}))}function Cn(e,t,n,r,i,a){let o=Hs.get(e);if(!o)return;let s=new Set,l=u=>{u&&u.forEach(f=>{(f!==Jt||f.allowRecurse)&&s.add(f)})};if(t==="clear")o.forEach(l);else if(n==="length"&&Wn(e))o.forEach((u,f)=>{(f==="length"||f>=r)&&l(u)});else switch(n!==void 0&&l(o.get(n)),t){case"add":Wn(e)?ll(n)&&l(o.get("length")):(l(o.get(qn)),Zr(e)&&l(o.get(Ws)));break;case"delete":Wn(e)||(l(o.get(qn)),Zr(e)&&l(o.get(Ws)));break;case"set":Zr(e)&&l(o.get(qn));break}let c=u=>{u.options.onTrigger&&u.options.onTrigger({effect:u,target:e,key:n,type:t,newValue:r,oldValue:i,oldTarget:a}),u.options.scheduler?u.options.scheduler(u):u()};s.forEach(c)}var Mw=qp("__proto__,__v_isRef,__isVue"),Zp=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(sl)),Iw=Qp(),Fw=Qp(!0),Hf=Bw();function Bw(){let e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){let r=Pe(this);for(let a=0,o=this.length;a<o;a++)Ut(r,"get",a+"");let i=r[t](...n);return i===-1||i===!1?r[t](...n.map(Pe)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Pw();let r=Pe(this)[t].apply(this,n);return Yp(),r}}),e}function Qp(e=!1,t=!1){return function(n,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_raw"&&i===(e?t?ev:nh:t?Jw:th).get(n))return n;let a=Wn(n);if(!e&&a&&Ra(Hf,r))return Reflect.get(Hf,r,i);let o=Reflect.get(n,r,i);return(sl(r)?Zp.has(r):Mw(r))||(e||Ut(n,"get",r),t)?o:qs(o)?!a||!ll(r)?o.value:o:Pa(o)?e?rh(o):pl(o):o}}var zw=Uw();function Uw(e=!1){return function(t,n,r,i){let a=t[n];if(!e&&(r=Pe(r),a=Pe(a),!Wn(t)&&qs(a)&&!qs(r)))return a.value=r,!0;let o=Wn(t)&&ll(n)?Number(n)<t.length:Ra(t,n),s=Reflect.set(t,n,r,i);return t===Pe(i)&&(o?Vp(r,a)&&Cn(t,"set",n,r,a):Cn(t,"add",n,r)),s}}function jw(e,t){let n=Ra(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Cn(e,"delete",t,void 0,r),i}function $w(e,t){let n=Reflect.has(e,t);return(!sl(t)||!Zp.has(t))&&Ut(e,"has",t),n}function Hw(e){return Ut(e,"iterate",Wn(e)?"length":qn),Reflect.ownKeys(e)}var Ww={get:Iw,set:zw,deleteProperty:jw,has:$w,ownKeys:Hw},qw={get:Fw,set(e,t){return!0},deleteProperty(e,t){return!0}},ul=e=>Pa(e)?pl(e):e,dl=e=>Pa(e)?rh(e):e,fl=e=>e,Ma=e=>Reflect.getPrototypeOf(e);function wa(e,t,n=!1,r=!1){e=e.__v_raw;let i=Pe(e),a=Pe(t);t!==a&&!n&&Ut(i,"get",t),!n&&Ut(i,"get",a);let{has:o}=Ma(i),s=r?fl:n?dl:ul;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function va(e,t=!1){let n=this.__v_raw,r=Pe(n),i=Pe(e);return e!==i&&!t&&Ut(r,"has",e),!t&&Ut(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function xa(e,t=!1){return e=e.__v_raw,!t&&Ut(Pe(e),"iterate",qn),Reflect.get(e,"size",e)}function Wf(e){e=Pe(e);let t=Pe(this);return Ma(t).has.call(t,e)||(t.add(e),Cn(t,"add",e,e)),this}function qf(e,t){t=Pe(t);let n=Pe(this),{has:r,get:i}=Ma(n),a=r.call(n,e);a?eh(n,r,e):(e=Pe(e),a=r.call(n,e));let o=i.call(n,e);return n.set(e,t),a?Vp(t,o)&&Cn(n,"set",e,t,o):Cn(n,"add",e,t),this}function Kf(e){let t=Pe(this),{has:n,get:r}=Ma(t),i=n.call(t,e);i?eh(t,n,e):(e=Pe(e),i=n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Cn(t,"delete",e,void 0,a),o}function Gf(){let e=Pe(this),t=e.size!==0,n=Zr(e)?new Map(e):new Set(e),r=e.clear();return t&&Cn(e,"clear",void 0,void 0,n),r}function _a(e,t){return function(n,r){let i=this,a=i.__v_raw,o=Pe(a),s=t?fl:e?dl:ul;return!e&&Ut(o,"iterate",qn),a.forEach((l,c)=>n.call(r,s(l),s(c),i))}}function Ta(e,t,n){return function(...r){let i=this.__v_raw,a=Pe(i),o=Zr(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=i[e](...r),u=n?fl:t?dl:ul;return!t&&Ut(a,"iterate",l?Ws:qn),{next(){let{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:s?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function An(e){return function(...t){{let n=t[0]?`on key "${t[0]}" `:""}return e==="delete"?!1:this}}function Kw(){let e={get(i){return wa(this,i)},get size(){return xa(this)},has:va,add:Wf,set:qf,delete:Kf,clear:Gf,forEach:_a(!1,!1)},t={get(i){return wa(this,i,!1,!0)},get size(){return xa(this)},has:va,add:Wf,set:qf,delete:Kf,clear:Gf,forEach:_a(!1,!0)},n={get(i){return wa(this,i,!0)},get size(){return xa(this,!0)},has(i){return va.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:_a(!0,!1)},r={get(i){return wa(this,i,!0,!0)},get size(){return xa(this,!0)},has(i){return va.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:_a(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ta(i,!1,!1),n[i]=Ta(i,!0,!1),t[i]=Ta(i,!1,!0),r[i]=Ta(i,!0,!0)}),[e,n,t,r]}var[Gw,Vw,Xw,Yw]=Kw();function Jp(e,t){let n=t?e?Yw:Xw:e?Vw:Gw;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(Ra(n,i)&&i in r?n:r,i,a)}var Zw={get:Jp(!1,!1)},Qw={get:Jp(!0,!1)};function eh(e,t,n){let r=Pe(n);if(r!==n&&t.call(e,r)){let i=Gp(e)}}var th=new WeakMap,Jw=new WeakMap,nh=new WeakMap,ev=new WeakMap;function tv(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nv(e){return e.__v_skip||!Object.isExtensible(e)?0:tv(Gp(e))}function pl(e){return e&&e.__v_isReadonly?e:ih(e,!1,Ww,Zw,th)}function rh(e){return ih(e,!0,qw,Qw,nh)}function ih(e,t,n,r,i){if(!Pa(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=i.get(e);if(a)return a;let o=nv(e);if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Pe(e){return e&&Pe(e.__v_raw)||e}function qs(e){return!!(e&&e.__v_isRef===!0)}jt("nextTick",()=>al);jt("dispatch",e=>Xr.bind(Xr,e));jt("watch",(e,{evaluateLater:t,effect:n})=>(r,i)=>{let a=t(r),o=!0,s,l=n(()=>a(c=>{JSON.stringify(c),o?s=c:queueMicrotask(()=>{i(c,s),s=c}),o=!1}));e._x_effects.delete(l)});jt("store",hw);jt("data",e=>pp(e));jt("root",e=>La(e));jt("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=ti(rv(e))),e._x_refs_proxy));function rv(e){let t=[],n=e;for(;n;)n._x_refs&&t.push(n._x_refs),n=n.parentNode;return t}var Cs={};function ah(e){return Cs[e]||(Cs[e]=0),++Cs[e]}function iv(e,t){return Oa(e,n=>{if(n._x_ids&&n._x_ids[t])return!0})}function av(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=ah(t))}jt("id",e=>(t,n=null)=>{let r=iv(e,t),i=r?r._x_ids[t]:ah(t);return n?`${t}-${i}-${n}`:`${t}-${i}`});jt("el",e=>e);oh("Focus","focus","focus");oh("Persist","persist","persist");function oh(e,t,n){jt(t,r=>dn(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,r))}Fe("modelable",(e,{expression:t},{effect:n,evaluateLater:r,cleanup:i})=>{let a=r(t),o=()=>{let u;return a(f=>u=f),u},s=r(`${t} = __placeholder`),l=u=>s(()=>{},{scope:{__placeholder:u}}),c=o();l(c),queueMicrotask(()=>{if(!e._x_model)return;e._x_removeModelListeners.default();let u=e._x_model.get,f=e._x_model.set,d=jp({get(){return u()},set(p){f(p)}},{get(){return o()},set(p){l(p)}});i(d)})});Fe("teleport",(e,{modifiers:t,expression:n},{cleanup:r})=>{e.tagName.toLowerCase()!=="template"&&dn("x-teleport can only be used on a <template> tag",e);let i=Vf(n),a=e.content.cloneNode(!0).firstElementChild;e._x_teleport=a,a._x_teleportBack=e,e.setAttribute("data-teleport-template",!0),a.setAttribute("data-teleport-target",!0),e._x_forwardEvents&&e._x_forwardEvents.forEach(s=>{a.addEventListener(s,l=>{l.stopPropagation(),e.dispatchEvent(new l.constructor(l.type,l))})}),ei(a,{},e);let o=(s,l,c)=>{c.includes("prepend")?l.parentNode.insertBefore(s,l):c.includes("append")?l.parentNode.insertBefore(s,l.nextSibling):l.appendChild(s)};je(()=>{o(a,i,t),fn(a),a._x_ignore=!0}),e._x_teleportPutBack=()=>{let s=Vf(n);je(()=>{o(e._x_teleport,s,t)})},r(()=>a.remove())});var ov=document.createElement("div");function Vf(e){let t=ni(()=>document.querySelector(e),()=>ov)();return t||dn(`Cannot find x-teleport element for selector: "${e}"`),t}var sh=()=>{};sh.inline=(e,{modifiers:t},{cleanup:n})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,n(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})};Fe("ignore",sh);Fe("effect",ni((e,{expression:t},{effect:n})=>{n(ut(e,t))}));function Ks(e,t,n,r){let i=e,a=l=>r(l),o={},s=(l,c)=>u=>c(l,u);if(n.includes("dot")&&(t=sv(t)),n.includes("camel")&&(t=lv(t)),n.includes("passive")&&(o.passive=!0),n.includes("capture")&&(o.capture=!0),n.includes("window")&&(i=window),n.includes("document")&&(i=document),n.includes("debounce")){let l=n[n.indexOf("debounce")+1]||"invalid-wait",c=Ca(l.split("ms")[0])?Number(l.split("ms")[0]):250;a=zp(a,c)}if(n.includes("throttle")){let l=n[n.indexOf("throttle")+1]||"invalid-wait",c=Ca(l.split("ms")[0])?Number(l.split("ms")[0]):250;a=Up(a,c)}return n.includes("prevent")&&(a=s(a,(l,c)=>{c.preventDefault(),l(c)})),n.includes("stop")&&(a=s(a,(l,c)=>{c.stopPropagation(),l(c)})),n.includes("self")&&(a=s(a,(l,c)=>{c.target===e&&l(c)})),(n.includes("away")||n.includes("outside"))&&(i=document,a=s(a,(l,c)=>{e.contains(c.target)||c.target.isConnected!==!1&&(e.offsetWidth<1&&e.offsetHeight<1||e._x_isShown!==!1&&l(c))})),n.includes("once")&&(a=s(a,(l,c)=>{l(c),i.removeEventListener(t,a,o)})),a=s(a,(l,c)=>{uv(t)&&dv(c,n)||l(c)}),i.addEventListener(t,a,o),()=>{i.removeEventListener(t,a,o)}}function sv(e){return e.replace(/-/g,".")}function lv(e){return e.toLowerCase().replace(/-(\w)/g,(t,n)=>n.toUpperCase())}function Ca(e){return!Array.isArray(e)&&!isNaN(e)}function cv(e){return[" ","_"].includes(e)?e:e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function uv(e){return["keydown","keyup"].includes(e)}function dv(e,t){let n=t.filter(i=>!["window","document","prevent","stop","once","capture"].includes(i));if(n.includes("debounce")){let i=n.indexOf("debounce");n.splice(i,Ca((n[i+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.includes("throttle")){let i=n.indexOf("throttle");n.splice(i,Ca((n[i+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.length===0||n.length===1&&Xf(e.key).includes(n[0]))return!1;let r=["ctrl","shift","alt","meta","cmd","super"].filter(i=>n.includes(i));return n=n.filter(i=>!r.includes(i)),!(r.length>0&&r.filter(i=>((i==="cmd"||i==="super")&&(i="meta"),e[`${i}Key`])).length===r.length&&Xf(e.key).includes(n[0]))}function Xf(e){if(!e)return[];e=cv(e);let t={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",equal:"=",minus:"-",underscore:"_"};return t[e]=e,Object.keys(t).map(n=>{if(t[n]===e)return n}).filter(n=>n)}Fe("model",(e,{modifiers:t,expression:n},{effect:r,cleanup:i})=>{let a=e;t.includes("parent")&&(a=e.parentNode);let o=ut(a,n),s;typeof n=="string"?s=ut(a,`${n} = __placeholder`):typeof n=="function"&&typeof n()=="string"?s=ut(a,`${n()} = __placeholder`):s=()=>{};let l=()=>{let d;return o(p=>d=p),Yf(d)?d.get():d},c=d=>{let p;o(b=>p=b),Yf(p)?p.set(d):s(()=>{},{scope:{__placeholder:d}})};typeof n=="string"&&e.type==="radio"&&je(()=>{e.hasAttribute("name")||e.setAttribute("name",n)});var u=e.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(e.type)||t.includes("lazy")?"change":"input";let f=kn?()=>{}:Ks(e,u,t,d=>{c(fv(e,t,d,l()))});if(t.includes("fill")&&([null,""].includes(l())||e.type==="checkbox"&&Array.isArray(l()))&&e.dispatchEvent(new Event(u,{})),e._x_removeModelListeners||(e._x_removeModelListeners={}),e._x_removeModelListeners.default=f,i(()=>e._x_removeModelListeners.default()),e.form){let d=Ks(e.form,"reset",[],p=>{al(()=>e._x_model&&e._x_model.set(e.value))});i(()=>d())}e._x_model={get(){return l()},set(d){c(d)}},e._x_forceModelUpdate=d=>{d===void 0&&typeof n=="string"&&n.match(/\./)&&(d=""),window.fromModel=!0,je(()=>Mp(e,"value",d)),delete window.fromModel},r(()=>{let d=l();t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate(d)})});function fv(e,t,n,r){return je(()=>{if(n instanceof CustomEvent&&n.detail!==void 0)return n.detail!==null&&n.detail!==void 0?n.detail:n.target.value;if(e.type==="checkbox")if(Array.isArray(r)){let i=null;return t.includes("number")?i=Ls(n.target.value):t.includes("boolean")?i=Aa(n.target.value):i=n.target.value,n.target.checked?r.concat([i]):r.filter(a=>!pv(a,i))}else return n.target.checked;else return e.tagName.toLowerCase()==="select"&&e.multiple?t.includes("number")?Array.from(n.target.selectedOptions).map(i=>{let a=i.value||i.text;return Ls(a)}):t.includes("boolean")?Array.from(n.target.selectedOptions).map(i=>{let a=i.value||i.text;return Aa(a)}):Array.from(n.target.selectedOptions).map(i=>i.value||i.text):t.includes("number")?Ls(n.target.value):t.includes("boolean")?Aa(n.target.value):t.includes("trim")?n.target.value.trim():n.target.value})}function Ls(e){let t=e?parseFloat(e):null;return hv(t)?t:e}function pv(e,t){return e==t}function hv(e){return!Array.isArray(e)&&!isNaN(e)}function Yf(e){return e!==null&&typeof e=="object"&&typeof e.get=="function"&&typeof e.set=="function"}Fe("cloak",e=>queueMicrotask(()=>je(()=>e.removeAttribute(mr("cloak")))));ip(()=>`[${mr("init")}]`);Fe("init",ni((e,{expression:t},{evaluate:n})=>typeof t=="string"?!!t.trim()&&n(t,{},!1):n(t,{},!1)));Fe("text",(e,{expression:t},{effect:n,evaluateLater:r})=>{let i=r(t);n(()=>{i(a=>{je(()=>{e.textContent=a})})})});Fe("html",(e,{expression:t},{effect:n,evaluateLater:r})=>{let i=r(t);n(()=>{i(a=>{je(()=>{e.innerHTML=a,e._x_ignoreSelf=!0,fn(e),delete e._x_ignoreSelf})})})});rl(Sp(":",Ap(mr("bind:"))));var lh=(e,{value:t,modifiers:n,expression:r,original:i},{effect:a})=>{if(!t){let s={};gw(s),ut(e,r)(l=>{Hp(e,l,i)},{scope:s});return}if(t==="key")return mv(e,r);if(e._x_inlineBindings&&e._x_inlineBindings[t]&&e._x_inlineBindings[t].extract)return;let o=ut(e,r);a(()=>o(s=>{s===void 0&&typeof r=="string"&&r.match(/\./)&&(s=""),je(()=>Mp(e,t,s,n))}))};lh.inline=(e,{value:t,modifiers:n,expression:r})=>{t&&(e._x_inlineBindings||(e._x_inlineBindings={}),e._x_inlineBindings[t]={expression:r,extract:!1})};Fe("bind",lh);function mv(e,t){e._x_keyExpression=t}rp(()=>`[${mr("data")}]`);Fe("data",(e,{expression:t},{cleanup:n})=>{if(gv(e))return;t=t===""?"{}":t;let r={};Ns(r,e);let i={};yw(i,r);let a=Hn(e,t,{scope:i});(a===void 0||a===!0)&&(a={}),Ns(a,e);let o=pr(a);hp(o);let s=ei(e,o);o.init&&Hn(e,o.init),n(()=>{o.destroy&&Hn(e,o.destroy),s()})});Pp((e,t)=>{e._x_dataStack&&(t._x_dataStack=e._x_dataStack,t.setAttribute("data-has-alpine-state",!0))});function gv(e){return kn?$s?!0:e.hasAttribute("data-has-alpine-state"):!1}Fe("show",(e,{modifiers:t,expression:n},{effect:r})=>{let i=ut(e,n);e._x_doHide||(e._x_doHide=()=>{je(()=>{e.style.setProperty("display","none",t.includes("important")?"important":void 0)})}),e._x_doShow||(e._x_doShow=()=>{je(()=>{e.style.length===1&&e.style.display==="none"?e.removeAttribute("style"):e.style.removeProperty("display")})});let a=()=>{e._x_doHide(),e._x_isShown=!1},o=()=>{e._x_doShow(),e._x_isShown=!0},s=()=>setTimeout(o),l=Us(f=>f?o():a(),f=>{typeof e._x_toggleAndCascadeWithTransitions=="function"?e._x_toggleAndCascadeWithTransitions(e,f,o,a):f?s():a()}),c,u=!0;r(()=>i(f=>{!u&&f===c||(t.includes("immediate")&&(f?s():a()),l(f),c=f,u=!1)}))});Fe("for",(e,{expression:t},{effect:n,cleanup:r})=>{let i=yv(t),a=ut(e,i.items),o=ut(e,e._x_keyExpression||"index");e._x_prevKeys=[],e._x_lookup={},n(()=>bv(e,i,a,o)),r(()=>{Object.values(e._x_lookup).forEach(s=>s.remove()),delete e._x_prevKeys,delete e._x_lookup})});function bv(e,t,n,r){let i=o=>typeof o=="object"&&!Array.isArray(o),a=e;n(o=>{wv(o)&&o>=0&&(o=Array.from(Array(o).keys(),h=>h+1)),o===void 0&&(o=[]);let s=e._x_lookup,l=e._x_prevKeys,c=[],u=[];if(i(o))o=Object.entries(o).map(([h,m])=>{let y=Zf(t,m,h,o);r(w=>u.push(w),{scope:{index:h,...y}}),c.push(y)});else for(let h=0;h<o.length;h++){let m=Zf(t,o[h],h,o);r(y=>u.push(y),{scope:{index:h,...m}}),c.push(m)}let f=[],d=[],p=[],b=[];for(let h=0;h<l.length;h++){let m=l[h];u.indexOf(m)===-1&&p.push(m)}l=l.filter(h=>!p.includes(h));let g="template";for(let h=0;h<u.length;h++){let m=u[h],y=l.indexOf(m);if(y===-1)l.splice(h,0,m),f.push([g,h]);else if(y!==h){let w=l.splice(h,1)[0],A=l.splice(y-1,1)[0];l.splice(h,0,A),l.splice(y,0,w),d.push([w,A])}else b.push(m);g=m}for(let h=0;h<p.length;h++){let m=p[h];s[m]._x_effects&&s[m]._x_effects.forEach(Qf),s[m].remove(),s[m]=null,delete s[m]}for(let h=0;h<d.length;h++){let[m,y]=d[h],w=s[m],A=s[y],T=document.createElement("div");je(()=>{A||dn('x-for ":key" is undefined or invalid',a),A.after(T),w.after(A),A._x_currentIfEl&&A.after(A._x_currentIfEl),T.before(w),w._x_currentIfEl&&w.after(w._x_currentIfEl),T.remove()}),A._x_refreshXForScope(c[u.indexOf(y)])}for(let h=0;h<f.length;h++){let[m,y]=f[h],w=m==="template"?a:s[m];w._x_currentIfEl&&(w=w._x_currentIfEl);let A=c[y],T=u[y],x=document.importNode(a.content,!0).firstElementChild,v=pr(A);ei(x,v,a),x._x_refreshXForScope=_=>{Object.entries(_).forEach(([S,E])=>{v[S]=E})},je(()=>{w.after(x),fn(x)}),typeof T=="object"&&dn("x-for key cannot be an object, it must be a string or an integer",a),s[T]=x}for(let h=0;h<b.length;h++)s[b[h]]._x_refreshXForScope(c[u.indexOf(b[h])]);a._x_prevKeys=u})}function yv(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,n=/^\s*\(|\)\s*$/g,r=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,i=e.match(r);if(!i)return;let a={};a.items=i[2].trim();let o=i[1].replace(n,"").trim(),s=o.match(t);return s?(a.item=o.replace(t,"").trim(),a.index=s[1].trim(),s[2]&&(a.collection=s[2].trim())):a.item=o,a}function Zf(e,t,n,r){let i={};return/^\[.*\]$/.test(e.item)&&Array.isArray(t)?e.item.replace("[","").replace("]","").split(",").map(a=>a.trim()).forEach((a,o)=>{i[a]=t[o]}):/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&typeof t=="object"?e.item.replace("{","").replace("}","").split(",").map(a=>a.trim()).forEach(a=>{i[a]=t[a]}):i[e.item]=t,e.index&&(i[e.index]=n),e.collection&&(i[e.collection]=r),i}function wv(e){return!Array.isArray(e)&&!isNaN(e)}function ch(){}ch.inline=(e,{expression:t},{cleanup:n})=>{let r=La(e);r._x_refs||(r._x_refs={}),r._x_refs[t]=e,n(()=>delete r._x_refs[t])};Fe("ref",ch);Fe("if",(e,{expression:t},{effect:n,cleanup:r})=>{e.tagName.toLowerCase()!=="template"&&dn("x-if can only be used on a <template> tag",e);let i=ut(e,t),a=()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let s=e.content.cloneNode(!0).firstElementChild;return ei(s,{},e),je(()=>{e.after(s),fn(s)}),e._x_currentIfEl=s,e._x_undoIf=()=>{En(s,l=>{l._x_effects&&l._x_effects.forEach(Qf)}),s.remove(),delete e._x_currentIfEl},s},o=()=>{e._x_undoIf&&(e._x_undoIf(),delete e._x_undoIf)};n(()=>i(s=>{s?a():o()})),r(()=>e._x_undoIf&&e._x_undoIf())});Fe("id",(e,{expression:t},{evaluate:n})=>{n(t).forEach(r=>av(e,r))});rl(Sp("@",Ap(mr("on:"))));Fe("on",ni((e,{value:t,modifiers:n,expression:r},{cleanup:i})=>{let a=r?ut(e,r):()=>{};e.tagName.toLowerCase()==="template"&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let o=Ks(e,t,n,s=>{a(()=>{},{scope:{$event:s},params:[s]})});i(()=>o())}));Ia("Collapse","collapse","collapse");Ia("Intersect","intersect","intersect");Ia("Focus","trap","focus");Ia("Mask","mask","mask");function Ia(e,t,n){Fe(t,r=>dn(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,r))}ri.setEvaluator(vp);ri.setReactivityEngine({reactive:pl,effect:Lw,release:Ow,raw:Pe});var vv=ri,Fa=vv;var hl;function Sl(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function yh(e,t=","){return e.map(Sl).join(t)}var wh=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function za(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function Ua(e,t="@media "){return t+_t(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function _t(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function xv(){}var et={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function vh(e){return e.match(/[-=:;]/g)?.length||0}function vl(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(vh(e),15)<<18}var _v=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Al({n:e,i:t,v:n=[]},r,i,a){e&&(e=Sl({n:e,i:t,v:n})),a=[..._t(a)];for(let s of n){let l=r.theme("screens",s);for(let c of _t(l&&Ua(l)||r.v(s))){var o;a.push(c),i|=l?67108864|vl(c):s=="dark"?1073741824:c[0]=="@"?vl(c):(o=c,1<<~(/:([a-z-]+)/.test(o)&&~_v.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:i,r:a,i:t}}var El=new Map;function uh(e){if(e.d){let t=[],n=ml(e.r.reduce((r,i)=>i[0]=="@"?(t.push(i),r):i?ml(r,a=>ml(i,o=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o);if(s){let l=a.indexOf(s[1]);return~l?a.slice(0,l)+s[0]+a.slice(l+s[1].length):gl(a,o)}return gl(o,a)})):r,"&"),r=>gl(r,e.n?"."+wh(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,i)=>i+"{"+r+"}",e.d)}}function ml(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,i)=>t(r)+i)}function gl(e,t){return e.replace(/&/g,t)}var dh=new Intl.Collator("en",{numeric:!0});function Tv(e,t){for(var n=0,r=e.length;n<r;){let i=r+n>>1;0>=xh(e[i],t)?n=i+1:r=i}return r}function xh(e,t){let n=e.p&et.o;return n==(t.p&et.o)&&(n==et.b||n==et.o)?0:e.p-t.p||e.o-t.o||dh.compare(fh(e.n),fh(t.n))||dh.compare(ph(e.n),ph(t.n))}function fh(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function ph(e){return(e||"").replace(/\W/g,t=>String.fromCharCode(127+t.charCodeAt(0)))+"\0"}function bl(e,t){return Math.round(parseInt(e,16)*t)}function Ln(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,i=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",i);if(e[0]=="#"&&(e.length==4||e.length==7)){let a=(e.length-1)/3,o=[17,1,.062272][a-1];return`rgba(${[bl(e.substr(1,a),o),bl(e.substr(1+a,a),o),bl(e.substr(1+2*a,a),o),i]})`}return i=="1"?e:i=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${i})`)}function _h(e,t,n,r,i=[]){return function a(o,{n:s,p:l,r:c=[],i:u},f){let d=[],p="",b=0,g=0;for(let y in o||{}){var h,m;let w=o[y];if(y[0]=="@"){if(!w)continue;if(y[1]=="a"){d.push(...Sh(s,l,Cl(""+w),f,l,c,u,!0));continue}if(y[1]=="l"){for(let A of _t(w))d.push(...a(A,{n:s,p:(h=et[y[7]],l&~et.o|h),r:y[7]=="d"?[]:c,i:u},f));continue}if(y[1]=="i"){d.push(..._t(w).map(A=>({p:-1,o:0,r:[],d:y+" "+A})));continue}if(y[1]=="k"){d.push({p:et.d,o:0,r:[y],d:a(w,{p:et.d},f).map(uh).join("")});continue}if(y[1]=="f"){d.push(..._t(w).map(A=>({p:et.d,o:0,r:[y],d:a(A,{p:et.d},f).map(uh).join("")})));continue}}if(typeof w!="object"||Array.isArray(w))y=="label"&&w?s=w+za(JSON.stringify([l,u,o])):(w||w===0)&&(y=y.replace(/[A-Z]/g,A=>"-"+A.toLowerCase()),g+=1,b=Math.max(b,(m=y)[0]=="-"?0:vh(m)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(m)?+!!RegExp.$1||-!!RegExp.$2:0)+1),p+=(p?";":"")+_t(w).map(A=>f.s(y,Th(""+A,f.theme)+(u?" !important":""))).join(";"));else if(y[0]=="@"||y.includes("&")){let A=l;y[0]=="@"&&(y=y.replace(/\bscreen\(([^)]+)\)/g,(T,x)=>{let v=f.theme("screens",x);return v?(A|=67108864,Ua(v,"")):T}),A|=vl(y)),d.push(...a(w,{n:s,p:A,r:[...c,y],i:u},f))}else d.push(...a(w,{p:l,r:[...c,y]},f))}return d.unshift({n:s,p:l,o:Math.max(0,15-g)+1.5*Math.min(b||15,15),r:c,d:p}),d.sort(xh)}(e,Al(t,n,r,i),n)}function Th(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,i,a,o="")=>{let s=t(i,o);return typeof s=="function"&&/color|fill|stroke/i.test(i)?Ln(s):""+_t(s).filter(l=>Object(l)!==l)})}function kl(e,t){let n,r=[];for(let i of e)i.d&&i.n?n?.p==i.p&&""+n.r==""+i.r?(n.c=[n.c,i.c].filter(Boolean).join(" "),n.d=n.d+";"+i.d):r.push(n={...i,n:i.n&&t}):r.push({...i,n:i.n&&t});return r}function xl(e,t,n=et.u,r,i){let a=[];for(let o of e)for(let s of function(l,c,u,f,d){l={...l,i:l.i||d};let p=function(b,g){let h=El.get(b.n);return h?h(b,g):g.r(b.n,b.v[0]=="dark")}(l,c);return p?typeof p=="string"?({r:f,p:u}=Al(l,c,u,f),kl(xl(Cl(p),c,u,f,l.i),l.n)):Array.isArray(p)?p.map(b=>{var g,h;return{o:0,...b,r:[..._t(f),..._t(b.r)],p:(g=u,h=b.p??u,g&~et.o|h)}}):_h(p,l,c,u,f):[{c:Sl(l),p:0,o:0,r:[]}]}(o,t,n,r,i))a.splice(Tv(a,s),0,s);return a}function Sh(e,t,n,r,i,a,o,s){return kl((s?n.flatMap(l=>xl([l],r,i,a,o)):xl(n,r,i,a,o)).map(l=>l.p&et.o&&(l.n||t==et.b)?{...l,p:l.p&~et.o|t,o:0}:l),e)}function Sv(e,t,n,r){var i;return i=(a,o)=>{let{n:s,p:l,r:c,i:u}=Al(a,o,t);return n&&Sh(s,t,n,o,l,c,u,r)},El.set(e,i),e}function yl(e,t,n){if(e[e.length-1]!="("){let r=[],i=!1,a=!1,o="";for(let s of e)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),i=!i),s.endsWith(":")){r[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),a=!a),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(o+=(o&&"-")+s)}o&&(a&&(o="-"+o),t[0].push({n:o,v:r.filter(Av),i}))}}function Av(e,t,n){return n.indexOf(e)==t}var hh=new Map;function Cl(e){let t=hh.get(e);if(!t){let n=[],r=[[]],i=0,a=0,o=null,s=0,l=(c,u=0)=>{i!=s&&(n.push(e.slice(i,s+u)),c&&yl(n,r)),i=s+1};for(;s<e.length;s++){let c=e[s];if(a)e[s-1]!="\\"&&(a+=+(c=="[")||-(c=="]"));else if(c=="[")a+=1;else if(o)e[s-1]!="\\"&&o.test(e.slice(s))&&(o=null,i=s+RegExp.lastMatch.length);else if(c=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))o=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(c=="(")l(),n.push(c);else if(c==":")e[s+1]!=":"&&l(!1,1);else if(/[\s,)]/.test(c)){l(!0);let u=n.lastIndexOf("(");if(c==")"){let f=n[u-1];if(/[~@]$/.test(f)){let d=r.shift();n.length=u,yl([...n,"#"],r);let{v:p}=r[0].pop();for(let b of d)b.v.splice(+(b.v[0]=="dark")-+(p[0]=="dark"),p.length);yl([...n,Sv(f.length>1?f.slice(0,-1)+za(JSON.stringify([f,d])):f+"("+yh(d)+")",et.a,d,/@$/.test(f))],r)}u=n.lastIndexOf("(",u-1)}n.length=u+1}else/[~@]/.test(c)&&e[s+1]=="("&&r.unshift([])}l(!0),hh.set(e,t=r[0])}return t}function Ah(e,t,n){return t.reduce((r,i,a)=>r+n(i)+e[a+1],e[0])}function Eh(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?Ah(e,t,n=>wl(n).trim()):t.filter(Boolean).reduce((n,r)=>n+wl(r),e?wl(e):"")}function wl(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=Eh(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var tS=kh("@"),nS=kh("~");function kh(e){return new Proxy(function(n,...r){return t("",n,r)},{get(n,r){return r in n?n[r]:function(i,...a){return t(r,i,a)}}});function t(n,r,i){return yh(Cl(n+e+"("+Eh(r,i)+")"))}}function _l(e,t){return Array.isArray(e)?mh(Ah(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?mh(e):[e]}var Ev=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function mh(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],i=[];for(;t=Ev.exec(e);)t[4]&&(n.shift(),i.shift()),t[3]?(i.unshift(t[3]),n.unshift({}),r.push(i.reduce((a,o)=>({[o]:a}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(i.reduce((a,o)=>({[o]:a}),n[0]))),n[0][t[1]]=t[2]);return r}function Ch(e,...t){var n;let r=_l(e,t),i=(r.find(a=>a.label)?.label||"css")+za(JSON.stringify(r));return n=(a,o)=>kl(r.flatMap(s=>_h(s,a,o,et.o)),i),El.set(i,n),i}var rS=new Proxy(function(e,t){return gh("animation",e,t)},{get(e,t){return t in e?e[t]:function(n,r){return gh(t,n,r)}}});function gh(e,t,n){return{toString(){return Ch({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}}function G(e,t,n){return[e,kv(t,n)]}function kv(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):Tl(n,1)}):n=>e||{[n[1]]:Tl(n,2)}}function Tl(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function X(e,t,n,r){return[e,Cv(t,n,r)]}function Cv(e,t,n){let r=typeof t=="string"?(i,a)=>({[t]:n?n(i,a):i._}):t||(({1:i,_:a},o,s)=>({[i||s]:a}));return(i,a)=>{let o=Lh(e||i[1]),s=a.theme(o,i.$$)??gr(i.$$,o,a);if(s!=null)return i._=Tl(i,0,s),r(i,a,o)}}function $e(e,t={},n){return[e,Lv(t,n)]}function Lv(e={},t){return(n,r)=>{let{section:i=Lh(n[0]).replace("-","")+"Color"}=e,[a,o]=Ov(n.$$);if(!a)return;let s=r.theme(i,a)||gr(a,i,r);if(!s||typeof s=="object")return;let{opacityVariable:l=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:c=i.replace("Color","Opacity"),property:u=i,selector:f}=e,d=r.theme(c,o||"DEFAULT")||o&&gr(o,c,r),p=t||(({_:g})=>{let h=ii(u,g);return f?{[f]:h}:h});n._={value:Ln(s,{opacityVariable:l||void 0,opacityValue:d||void 0}),color:g=>Ln(s,g),opacityVariable:l||void 0,opacityValue:d||void 0};let b=p(n,r);if(!n.dark){let g=r.d(i,a,s);g&&g!==s&&(n._={value:Ln(g,{opacityVariable:l||void 0,opacityValue:d||"1"}),color:h=>Ln(g,h),opacityVariable:l||void 0,opacityValue:d||void 0},b={"&":b,[r.v("dark")]:p(n,r)})}return b}}function Ov(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function ii(e,t){let n={};return typeof t=="string"?n[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(n[t.opacityVariable]=t.opacityValue||"1"),n[e]=t.value),n}function gr(e,t,n){if(e[0]=="["&&e.slice(-1)=="]"){if(e=Ba(Th(e.slice(1,-1),n.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(t)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(t)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function Lh(e){return e.replace(/-./g,t=>t[1].toUpperCase())}function Ba(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(t,n="",r,i="")=>Ba(n)+r+Ba(i)):e.replace(/(^|[^\\])_+/g,(t,n)=>n+" ".repeat(t.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,t=>t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var iS=Symbol();var Oh=new Proxy(xv,{apply(e,t,n){return hl(n[0])},get(e,t){let n=hl[t];return typeof n=="function"?function(){return n.apply(hl,arguments)}:n}});var aS=function e(t){return new Proxy(function(n,...r){return bh(t,"",n,r)},{get(n,r){return r==="bind"?e:r in n?n[r]:function(i,...a){return bh(t,r,i,a)}}})}();function bh(e,t,n,r){return{toString(){let i=_l(n,r),a=wh(t+za(JSON.stringify([t,i])));return(typeof e=="function"?e:Oh)(Ch({[`@keyframes ${a}`]:_l(n,r)})),a}}}var Dh={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...Tt(4,"rem",4,.5,.5),...Tt(12,"rem",4,5),14:"3.5rem",...Tt(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:we("blur"),backdropBrightness:we("brightness"),backdropContrast:we("contrast"),backdropGrayscale:we("grayscale"),backdropHueRotate:we("hueRotate"),backdropInvert:we("invert"),backdropOpacity:we("opacity"),backdropSaturate:we("saturate"),backdropSepia:we("sepia"),backgroundColor:we("colors"),backgroundImage:{none:"none"},backgroundOpacity:we("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...Tt(200,"",100,0,50),...Tt(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:we("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:we("spacing"),borderWidth:{DEFAULT:"1px",...Pt(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:we("colors"),caretColor:we("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...Tt(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:we("borderColor"),divideOpacity:we("borderOpacity"),divideWidth:we("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:({theme:e})=>({...e("colors"),none:"none"}),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...ai(2,6),...ai(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:we("spacing"),gradientColorStops:we("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...ai(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...ai(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...Tt(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...Tt(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:we("spacing"),placeholderColor:we("colors"),placeholderOpacity:we("opacity"),outlineColor:we("colors"),outlineOffset:Pt(8,"px"),outlineWidth:Pt(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:"#3b82f6"}),ringOffsetColor:we("colors"),ringOffsetWidth:Pt(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...Pt(8,"px")},rotate:{...Pt(2,"deg"),...Pt(12,"deg",3),...Pt(180,"deg",45)},saturate:Tt(200,"",100,0,50),scale:{...Tt(150,"",100,0,50),...Tt(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:we("spacing"),scrollPadding:we("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...Pt(2,"deg"),...Pt(12,"deg",3)},space:we("spacing"),stroke:({theme:e})=>({...e("colors"),none:"none"}),strokeWidth:Tt(2),textColor:we("colors"),textDecorationColor:we("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...Pt(8,"px")},textUnderlineOffset:{auto:"auto",...Pt(8,"px")},textIndent:we("spacing"),textOpacity:we("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:we("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...ai(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...Tt(50,"",1,0,10),auto:"auto"}};function ai(e,t){let n={};do for(var r=1;r<e;r++)n[`${r}/${e}`]=Number((r/e*100).toFixed(6))+"%";while(++e<=t);return n}function Pt(e,t,n=0){let r={};for(;n<=e;n=2*n||1)r[n]=n+t;return r}function Tt(e,t="",n=1,r=0,i=1,a={}){for(;r<=e;r+=i)a[r]=r/n+t;return a}function we(e){return({theme:t})=>t(e)}var TS={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${Dh.fontFamily.sans})`,fontFeatureSettings:"theme(fontFamily.sans[1].fontFeatureSettings, normal)"},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${Dh.fontFamily.mono})`,fontFeatureSettings:"theme(fontFamily.mono[1].fontFeatureSettings, normal)",fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},AS=[G("\\[([-\\w]+):(.+)]",({1:e,2:t},n)=>({"@layer overrides":{"&":{[e]:gr(`[${t}]`,"",n)}}})),G("(group|peer)([~/][^-[]+)?",({input:e},{h:t})=>[{c:t(e)}]),X("aspect-","aspectRatio"),G("container",(e,{theme:t})=>{let{screens:n=t("screens"),center:r,padding:i}=t("container"),a={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...o("xs")};for(let s in n){let l=n[s];typeof l=="string"&&(a[Ua(l)]={"&":{maxWidth:l,...o(s)}})}return a;function o(s){let l=i&&(typeof i=="string"?i:i[s]||i.DEFAULT);if(l)return{paddingRight:l,paddingLeft:l}}}),X("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),G("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),G("box-(border|content)","boxSizing",({1:e})=>e+"-box"),G("hidden",{display:"none"}),G("table-(auto|fixed)","tableLayout"),G(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",G("isolate","isolation"),G("object-(contain|cover|fill|none|scale-down)","objectFit"),X("object-","objectPosition"),G("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",ja),G("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:t})=>({["overscroll-behavior"+e]:t})),G("(static|fixed|absolute|relative|sticky)","position"),X("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:t})=>({top:e!="-x"&&t,right:e!="-y"&&t,bottom:e!="-x"&&t,left:e!="-y"&&t})),X("-?(top|bottom|left|right)(?:$|-)","inset"),G("(visible|collapse)","visibility"),G("invisible",{visibility:"hidden"}),X("-?z-","zIndex"),G("flex-((row|col)(-reverse)?)","flexDirection",Rh),G("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),X("(flex-(?:grow|shrink))(?:$|-)"),X("(flex)-"),X("grow(?:$|-)","flexGrow"),X("shrink(?:$|-)","flexShrink"),X("basis-","flexBasis"),X("-?(order)-"),"-?(order)-(\\d+)",X("grid-cols-","gridTemplateColumns"),G("grid-cols-(\\d+)","gridTemplateColumns",Ih),X("col-","gridColumn"),G("col-(span)-(\\d+)","gridColumn",Mh),X("col-start-","gridColumnStart"),G("col-start-(auto|\\d+)","gridColumnStart"),X("col-end-","gridColumnEnd"),G("col-end-(auto|\\d+)","gridColumnEnd"),X("grid-rows-","gridTemplateRows"),G("grid-rows-(\\d+)","gridTemplateRows",Ih),X("row-","gridRow"),G("row-(span)-(\\d+)","gridRow",Mh),X("row-start-","gridRowStart"),G("row-start-(auto|\\d+)","gridRowStart"),X("row-end-","gridRowEnd"),G("row-end-(auto|\\d+)","gridRowEnd"),G("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>ja(Rh(e))),G("grid-flow-(dense)","gridAutoFlow"),X("auto-cols-","gridAutoColumns"),X("auto-rows-","gridAutoRows"),X("gap-x(?:$|-)","gap","columnGap"),X("gap-y(?:$|-)","gap","rowGap"),X("gap(?:$|-)","gap"),"(justify-(?:items|self))-",G("justify-","justifyContent",Ph),G("(content|items|self)-",e=>({["align-"+e[1]]:Ph(e)})),G("(place-(content|items|self))-",({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t})),X("p([xytrbl])?(?:$|-)","padding",br("padding")),X("-?m([xytrbl])?(?:$|-)","margin",br("margin")),X("-?space-(x|y)(?:$|-)","space",({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}})),G("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),X("w-","width"),X("min-w-","minWidth"),X("max-w-","maxWidth"),X("h-","height"),X("min-h-","minHeight"),X("max-h-","maxHeight"),X("font-","fontWeight"),X("font-","fontFamily",({_:e})=>typeof(e=_t(e))[1]=="string"?{fontFamily:$t(e)}:{fontFamily:$t(e[0]),...e[1]}),G("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),G("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),G("italic","fontStyle"),G("not-italic",{fontStyle:"normal"}),G("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:t="",3:n})=>t=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)",...On({"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"})}),X("tracking-","letterSpacing"),X("leading-","lineHeight"),G("list-(inside|outside)","listStylePosition"),X("list-","listStyleType"),G("list-","listStyleType"),X("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),$e("placeholder-",{property:"color",selector:"&::placeholder"}),G("text-(left|center|right|justify|start|end)","textAlign"),G("text-(ellipsis|clip)","textOverflow"),X("text-opacity-","textOpacity","--tw-text-opacity"),$e("text-",{property:"color"}),X("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),X("indent-","textIndent"),G("(overline|underline|line-through)","textDecorationLine"),G("no-underline",{textDecorationLine:"none"}),X("underline-offset-","textUnderlineOffset"),$e("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),X("decoration-","textDecorationThickness"),G("decoration-","textDecorationStyle"),G("(uppercase|lowercase|capitalize)","textTransform"),G("normal-case",{textTransform:"none"}),G("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),G("align-","verticalAlign"),G("whitespace-","whiteSpace"),G("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),G("break-words",{overflowWrap:"break-word"}),G("break-all",{wordBreak:"break-all"}),G("break-keep",{wordBreak:"keep-all"}),$e("caret-",{opacityVariable:!1,opacitySection:"opacity"}),$e("accent-",{opacityVariable:!1,opacitySection:"opacity"}),G("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${Kn(e," ")},var(--tw-gradient-stops))`),$e("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),$e("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),$e("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),G("bg-(fixed|local|scroll)","backgroundAttachment"),G("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),G(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),G("bg-blend-","backgroundBlendMode"),G("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),X("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),$e("bg-",{section:"backgroundColor"}),X("bg-","backgroundImage"),X("bg-","backgroundPosition"),G("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",ja),X("bg-","backgroundSize"),X("rounded(?:$|-)","borderRadius"),X("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:t})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${Kn(n[0])}-radius`]:t,[`border-${Kn(n[1])}-radius`]:t}}),G("border-(collapse|separate)","borderCollapse"),X("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),G("border-(solid|dashed|dotted|double|none)","borderStyle"),X("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:t})=>({...On({"--tw-border-spacing-x":"0","--tw-border-spacing-y":"0"}),["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),$e("border-([xytrbl])-",{section:"borderColor"},br("border","Color")),$e("border-"),X("border-([xytrbl])(?:$|-)","borderWidth",br("border","Width")),X("border(?:$|-)","borderWidth"),X("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),G("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),G("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),X("divide-([xy])(?:$|-)","divideWidth",({1:e,_:t})=>{let n={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${Kn(n[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${Kn(n[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}}),$e("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),X("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),$e("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),X("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),G("ring-inset",{"--tw-ring-inset":"inset"}),$e("ring-",{property:"--tw-ring-color"}),X("ring(?:$|-)","ringWidth",({_:e},{theme:t})=>({...On({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":Ln(t("ringOffsetColor","","#fff")),"--tw-ring-color":Ln(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}),"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),$e("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),X("shadow(?:$|-)","boxShadow",({_:e})=>({...On({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}),"--tw-shadow":$t(e),"--tw-shadow-colored":$t(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"})),X("(opacity)-"),G("mix-blend-","mixBlendMode"),...Nh(),...Nh("backdrop-"),X("transition(?:$|-)","transitionProperty",(e,{theme:t})=>({transitionProperty:$t(e),transitionTimingFunction:e._=="none"?void 0:$t(t("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:$t(t("transitionDuration",""))})),X("duration(?:$|-)","transitionDuration","transitionDuration",$t),X("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",$t),X("delay(?:$|-)","transitionDelay","transitionDelay",$t),X("animate(?:$|-)","animation",(e,{theme:t,h:n,e:r})=>{let i=$t(e),a=i.split(" "),o=t("keyframes",a[0]);return o?{["@keyframes "+(a[0]=r(n(a[0])))]:o,animation:a.join(" ")}:{animation:i}}),"(transform)-(none)",G("transform",Ol),G("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":Fh(e=="gpu")})),X("scale(-[xy])?-","scale",({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...Ol()})),X("-?(rotate)-","rotate",Ll),X("-?(translate-[xy])-","translate",Ll),X("-?(skew-[xy])-","skew",Ll),G("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",ja),"(appearance)-",X("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",X("(cursor)-"),"(cursor)-",G("snap-(none)","scroll-snap-type"),G("snap-(x|y|both)",({1:e})=>({...On({"--tw-scroll-snap-strictness":"proximity"}),"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)"})),G("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),G("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),G("snap-(normal|always)","scroll-snap-stop"),G("scroll-(auto|smooth)","scroll-behavior"),X("scroll-p([xytrbl])?(?:$|-)","padding",br("scroll-padding")),X("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",br("scroll-margin")),G("touch-(auto|none|manipulation)","touch-action"),G("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:t,3:n})=>({...On({"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}),[`--tw-${t?"pan-x":n?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)"})),G("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),G("outline",{outlineStyle:"solid"}),G("outline-(dashed|dotted|double)","outlineStyle"),X("-?(outline-offset)-"),$e("outline-",{opacityVariable:!1,opacitySection:"opacity"}),X("outline-","outlineWidth"),"(pointer-events)-",X("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],G("select-(none|text|all|auto)","userSelect"),$e("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),$e("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),X("stroke-","strokeWidth"),G("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),G("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function ja(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function Rh(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function Kn(e,t="-"){let n=[];for(let r of e)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(t)}function $t(e){return e&&""+(e._||e)}function Ph({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function br(e,t=""){return({1:n,_:r})=>{let i={x:"lr",y:"tb"}[n]||n+n;return i?{...ii(e+"-"+Kn(i[0])+t,r),...ii(e+"-"+Kn(i[1])+t,r)}:ii(e+t,r)}}function Nh(e=""){let t=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),n={};for(let r of t)n[`--tw-${e}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={...On(n),[`${e}filter`]:t.map(r=>`var(--tw-${e}${r})`).join(" ")},[`(${e}filter)-(none)`,G(`${e}filter`,n),...t.map(r=>X(`${r[0]=="h"?"-?":""}(${e}${r})(?:$|-)`,r,({1:i,_:a})=>({[`--tw-${i}`]:_t(a).map(o=>`${r}(${o})`).join(" "),...n})))]}function Ll({1:e,_:t}){return{["--tw-"+e]:t,...Ol()}}function Ol(){return{...On({"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":Fh()}),transform:"var(--tw-transform)"}}function Fh(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function Mh({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function Ih({1:e}){return`repeat(${e},minmax(0,1fr))`}function On(e){return{"@layer defaults":{"*,::before,::after":e,"::backdrop":e}}}var Hh,be,Wh,Pv,oi,Bh,Nv,qh={},Kh=[],Mv=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Dn(e,t){for(var n in t)e[n]=t[n];return e}function Gh(e){var t=e.parentNode;t&&t.removeChild(e)}function Dl(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++Wh};return i==null&&be.vnode!=null&&be.vnode(a),a}function wr(e){return e.children}function $a(e,t){this.props=e,this.context=t}function yr(e,t){if(t==null)return e.__?yr(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?yr(e):null}function Vh(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Vh(e)}}function zh(e){(!e.__d&&(e.__d=!0)&&oi.push(e)&&!Ha.__r++||Bh!==be.debounceRendering)&&((Bh=be.debounceRendering)||setTimeout)(Ha)}function Ha(){for(var e;Ha.__r=oi.length;)e=oi.sort(function(t,n){return t.__v.__b-n.__v.__b}),oi=[],e.some(function(t){var n,r,i,a,o,s;t.__d&&(o=(a=(n=t).__v).__e,(s=n.__P)&&(r=[],(i=Dn({},a)).__v=a.__v+1,Qh(s,a,i,n.__n,s.ownerSVGElement!==void 0,a.__h!=null?[o]:null,r,o??yr(a),a.__h),Fv(r,a),a.__e!=o&&Vh(a)))})}function Xh(e,t,n,r,i,a,o,s,l,c){var u,f,d,p,b,g,h,m=r&&r.__k||Kh,y=m.length;for(n.__k=[],u=0;u<t.length;u++)if((p=n.__k[u]=(p=t[u])==null||typeof p=="boolean"?null:typeof p=="string"||typeof p=="number"||typeof p=="bigint"?Dl(null,p,null,null,p):Array.isArray(p)?Dl(wr,{children:p},null,null,null):p.__b>0?Dl(p.type,p.props,p.key,p.ref?p.ref:null,p.__v):p)!=null){if(p.__=n,p.__b=n.__b+1,(d=m[u])===null||d&&p.key==d.key&&p.type===d.type)m[u]=void 0;else for(f=0;f<y;f++){if((d=m[f])&&p.key==d.key&&p.type===d.type){m[f]=void 0;break}d=null}Qh(e,p,d=d||qh,i,a,o,s,l,c),b=p.__e,(f=p.ref)&&d.ref!=f&&(h||(h=[]),d.ref&&h.push(d.ref,null,p),h.push(f,p.__c||b,p)),b!=null?(g==null&&(g=b),typeof p.type=="function"&&p.__k===d.__k?p.__d=l=Yh(p,l,e):l=Zh(e,p,d,m,b,l),typeof n.type=="function"&&(n.__d=l)):l&&d.__e==l&&l.parentNode!=e&&(l=yr(d))}for(n.__e=g,u=y;u--;)m[u]!=null&&(typeof n.type=="function"&&m[u].__e!=null&&m[u].__e==n.__d&&(n.__d=yr(r,u+1)),em(m[u],m[u]));if(h)for(u=0;u<h.length;u++)Jh(h[u],h[++u],h[++u])}function Yh(e,t,n){for(var r,i=e.__k,a=0;i&&a<i.length;a++)(r=i[a])&&(r.__=e,t=typeof r.type=="function"?Yh(r,t,n):Zh(n,r,r,i,r.__e,t));return t}function Zh(e,t,n,r,i,a){var o,s,l;if(t.__d!==void 0)o=t.__d,t.__d=void 0;else if(n==null||i!=a||i.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(i),o=null;else{for(s=a,l=0;(s=s.nextSibling)&&l<r.length;l+=2)if(s==i)break e;e.insertBefore(i,a),o=a}return o!==void 0?o:i.nextSibling}function Iv(e,t,n,r,i){var a;for(a in n)a==="children"||a==="key"||a in t||Wa(e,a,null,n[a],r);for(a in t)i&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||Wa(e,a,t[a],n[a],r)}function Uh(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Mv.test(t)?n:n+"px"}function Wa(e,t,n,r,i){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Uh(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Uh(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r||e.addEventListener(t,a?$h:jh,a):e.removeEventListener(t,a?$h:jh,a);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function jh(e){this.l[e.type+!1](be.event?be.event(e):e)}function $h(e){this.l[e.type+!0](be.event?be.event(e):e)}function Qh(e,t,n,r,i,a,o,s,l){var c,u,f,d,p,b,g,h,m,y,w,A,T,x=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,s=t.__e=n.__e,t.__h=null,a=[s]),(c=be.__b)&&c(t);try{e:if(typeof x=="function"){if(h=t.props,m=(c=x.contextType)&&r[c.__c],y=c?m?m.props.value:c.__:r,n.__c?g=(u=t.__c=n.__c).__=u.__E:("prototype"in x&&x.prototype.render?t.__c=u=new x(h,y):(t.__c=u=new $a(h,y),u.constructor=x,u.render=zv),m&&m.sub(u),u.props=h,u.state||(u.state={}),u.context=y,u.__n=r,f=u.__d=!0,u.__h=[]),u.__s==null&&(u.__s=u.state),x.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Dn({},u.__s)),Dn(u.__s,x.getDerivedStateFromProps(h,u.__s))),d=u.props,p=u.state,f)x.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(x.getDerivedStateFromProps==null&&h!==d&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(h,y),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(h,u.__s,y)===!1||t.__v===n.__v){u.props=h,u.state=u.__s,t.__v!==n.__v&&(u.__d=!1),u.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(v){v&&(v.__=t)}),u.__h.length&&o.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(h,u.__s,y),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(d,p,b)})}if(u.context=y,u.props=h,u.__v=t,u.__P=e,w=be.__r,A=0,"prototype"in x&&x.prototype.render)u.state=u.__s,u.__d=!1,w&&w(t),c=u.render(u.props,u.state,u.context);else do u.__d=!1,w&&w(t),c=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++A<25);u.state=u.__s,u.getChildContext!=null&&(r=Dn(Dn({},r),u.getChildContext())),f||u.getSnapshotBeforeUpdate==null||(b=u.getSnapshotBeforeUpdate(d,p)),T=c!=null&&c.type===wr&&c.key==null?c.props.children:c,Xh(e,Array.isArray(T)?T:[T],t,n,r,i,a,o,s,l),u.base=t.__e,t.__h=null,u.__h.length&&o.push(u),g&&(u.__E=u.__=null),u.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Bv(n.__e,t,n,r,i,a,o,l);(c=be.diffed)&&c(t)}catch(v){t.__v=null,(l||a!=null)&&(t.__e=s,t.__h=!!l,a[a.indexOf(s)]=null),be.__e(v,t,n)}}function Fv(e,t){be.__c&&be.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){be.__e(r,n.__v)}})}function Bv(e,t,n,r,i,a,o,s){var l,c,u,f=n.props,d=t.props,p=t.type,b=0;if(p==="svg"&&(i=!0),a!=null){for(;b<a.length;b++)if((l=a[b])&&"setAttribute"in l==!!p&&(p?l.localName===p:l.nodeType===3)){e=l,a[b]=null;break}}if(e==null){if(p===null)return document.createTextNode(d);e=i?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p,d.is&&d),a=null,s=!1}if(p===null)f===d||s&&e.data===d||(e.data=d);else{if(a=a&&Hh.call(e.childNodes),c=(f=n.props||qh).dangerouslySetInnerHTML,u=d.dangerouslySetInnerHTML,!s){if(a!=null)for(f={},b=0;b<e.attributes.length;b++)f[e.attributes[b].name]=e.attributes[b].value;(u||c)&&(u&&(c&&u.__html==c.__html||u.__html===e.innerHTML)||(e.innerHTML=u&&u.__html||""))}if(Iv(e,d,f,i,s),u)t.__k=[];else if(b=t.props.children,Xh(e,Array.isArray(b)?b:[b],t,n,r,i&&p!=="foreignObject",a,o,a?a[0]:n.__k&&yr(n,0),s),a!=null)for(b=a.length;b--;)a[b]!=null&&Gh(a[b]);s||("value"in d&&(b=d.value)!==void 0&&(b!==e.value||p==="progress"&&!b||p==="option"&&b!==f.value)&&Wa(e,"value",b,f.value,!1),"checked"in d&&(b=d.checked)!==void 0&&b!==e.checked&&Wa(e,"checked",b,f.checked,!1))}return e}function Jh(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){be.__e(r,n)}}function em(e,t,n){var r,i;if(be.unmount&&be.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Jh(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){be.__e(a,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&em(r[i],t,typeof e.type!="function");n||e.__e==null||Gh(e.__e),e.__=e.__e=e.__d=void 0}function zv(e,t,n){return this.constructor(e,n)}Hh=Kh.slice,be={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(s){e=s}throw e}},Wh=0,Pv=function(e){return e!=null&&e.constructor===void 0},$a.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Dn({},this.state),typeof e=="function"&&(e=e(Dn({},n),this.props)),e&&Dn(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),zh(this))},$a.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),zh(this))},$a.prototype.render=wr,oi=[],Ha.__r=0,Nv=0;var Uv,en,Rl,tm;var lm=[],Pl=[],nm=be.__b,rm=be.__r,im=be.diffed,am=be.__c,om=be.unmount;function jv(){for(var e;e=lm.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(qa),e.__H.__h.forEach(Nl),e.__H.__h=[]}catch(t){e.__H.__h=[],be.__e(t,e.__v)}}be.__b=function(e){typeof e.type!="function"||e.o||e.type===wr?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),en=null,nm&&nm(e)},be.__r=function(e){rm&&rm(e),Uv=0;var t=(en=e.__c).__H;t&&(Rl===en?(t.__h=[],en.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Pl,n.__N=n.i=void 0})):(t.__h.forEach(qa),t.__h.forEach(Nl),t.__h=[])),Rl=en},be.diffed=function(e){im&&im(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(lm.push(t)!==1&&tm===be.requestAnimationFrame||((tm=be.requestAnimationFrame)||$v)(jv)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Pl&&(n.__=n.__V),n.i=void 0,n.__V=Pl})),Rl=en=null},be.__c=function(e,t){t.some(function(n){try{n.__h.forEach(qa),n.__h=n.__h.filter(function(r){return!r.__||Nl(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],be.__e(r,n.__v)}}),am&&am(e,t)},be.unmount=function(e){om&&om(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{qa(r)}catch(i){t=i}}),n.__H=void 0,t&&be.__e(t,n.__v))};var sm=typeof requestAnimationFrame=="function";function $v(e){var t,n=function(){clearTimeout(r),sm&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);sm&&(t=requestAnimationFrame(n))}function qa(e){var t=en,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),en=t}function Nl(e){var t=en;e.__c=e.__(),en=t}var Ka=globalThis||(typeof window<"u"?window:self),Hv=Object.create,Il=Object.defineProperty,Wv=Object.getOwnPropertyDescriptor,qv=Object.getOwnPropertyNames,Kv=Object.getPrototypeOf,Gv=Object.prototype.hasOwnProperty,Vv=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Xv=(e,t)=>{for(var n in t)Il(e,n,{get:t[n],enumerable:!0})},Ml=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of qv(t))!Gv.call(e,i)&&i!==n&&Il(e,i,{get:()=>t[i],enumerable:!(r=Wv(t,i))||r.enumerable});return e},Yv=(e,t,n)=>(Ml(e,t,"default"),n&&Ml(n,t,"default")),um=(e,t,n)=>(n=e!=null?Hv(Kv(e)):{},Ml(t||!e||!e.__esModule?Il(n,"default",{value:e,enumerable:!0}):n,e)),dm=Vv((e,t)=>{(function(n,r){typeof define=="function"&&define.amd?define([],r):typeof e<"u"?r():(r(),n.FileSaver={})})(e,function(){"use strict";function n(c,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type)?new Blob(["\uFEFF",c],{type:c.type}):c}function r(c,u,f){var d=new XMLHttpRequest;d.open("GET",c),d.responseType="blob",d.onload=function(){l(d.response,u,f)},d.onerror=function(){},d.send()}function i(c){var u=new XMLHttpRequest;u.open("HEAD",c,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function a(c){try{c.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),c.dispatchEvent(u)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Ka=="object"&&Ka.global===Ka?Ka:void 0,s=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(c,u,f){var d=o.URL||o.webkitURL,p=document.createElement("a");u=u||c.name||"download",p.download=u,p.rel="noopener",typeof c=="string"?(p.href=c,p.origin===location.origin?a(p):i(p.href)?r(c,u,f):a(p,p.target="_blank")):(p.href=d.createObjectURL(c),setTimeout(function(){d.revokeObjectURL(p.href)},4e4),setTimeout(function(){a(p)},0))}:"msSaveOrOpenBlob"in navigator?function(c,u,f){if(u=u||c.name||"download",typeof c!="string")navigator.msSaveOrOpenBlob(n(c,f),u);else if(i(c))r(c,u,f);else{var d=document.createElement("a");d.href=c,d.target="_blank",setTimeout(function(){a(d)})}}:function(c,u,f,d){if(d=d||open("","_blank"),d&&(d.document.title=d.document.body.innerText="downloading..."),typeof c=="string")return r(c,u,f);var p=c.type==="application/octet-stream",b=/constructor/i.test(o.HTMLElement)||o.safari,g=/CriOS\/[\d]+/.test(navigator.userAgent);if((g||p&&b||s)&&typeof FileReader<"u"){var h=new FileReader;h.onloadend=function(){var w=h.result;w=g?w:w.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=w:location=w,d=null},h.readAsDataURL(c)}else{var m=o.URL||o.webkitURL,y=m.createObjectURL(c);d?d.location=y:location.href=y,d=null,setTimeout(function(){m.revokeObjectURL(y)},4e4)}});o.saveAs=l.saveAs=l,typeof t<"u"&&(t.exports=l)})}),fm={};Xv(fm,{default:()=>si});var Zv=um(dm());Yv(fm,um(dm()));var{default:cm,...Qv}=Zv,si=cm!==void 0?cm:Qv;function li(){let e,t="pending",n=new Promise((r,i)=>{e={async resolve(a){await a,t="fulfilled",r(a)},reject(a){t="rejected",i(a)}}});return Object.defineProperty(n,"state",{get:()=>t}),Object.assign(n,e)}var pm=class{#e=0;#t=[];#n=[];#r=li();add(t){++this.#e,this.#i(t[Symbol.asyncIterator]())}async#i(t){try{let{value:n,done:r}=await t.next();r?--this.#e:this.#t.push({iterator:t,value:n})}catch(n){this.#n.push(n)}this.#r.resolve()}async*iterate(){for(;this.#e>0;){await this.#r;for(let t=0;t<this.#t.length;t++){let{iterator:n,value:r}=this.#t[t];yield r,this.#i(n)}if(this.#n.length){for(let t of this.#n)throw t;this.#n.length=0}this.#t.length=0,this.#r=li()}}[Symbol.asyncIterator](){return this.iterate()}};var{Deno:hm}=globalThis,ZA=typeof hm?.noColor=="boolean"?hm.noColor:!0;var QA=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function Fl(e){let t=atob(e),n=t.length,r=new Uint8Array(n);for(let i=0;i<n;i++)r[i]=t.charCodeAt(i);return r}var oE=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var Ga=globalThis||(typeof window<"u"?window:self),tx=Object.create,zl=Object.defineProperty,nx=Object.getOwnPropertyDescriptor,rx=Object.getOwnPropertyNames,ix=Object.getPrototypeOf,ax=Object.prototype.hasOwnProperty,ox=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),sx=(e,t)=>{for(var n in t)zl(e,n,{get:t[n],enumerable:!0})},Bl=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of rx(t))!ax.call(e,i)&&i!==n&&zl(e,i,{get:()=>t[i],enumerable:!(r=nx(t,i))||r.enumerable});return e},lx=(e,t,n)=>(Bl(e,t,"default"),n&&Bl(n,t,"default")),gm=(e,t,n)=>(n=e!=null?tx(ix(e)):{},Bl(t||!e||!e.__esModule?zl(n,"default",{value:e,enumerable:!0}):n,e)),bm=ox((e,t)=>{var n="Expected a function",r=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u=typeof Ga=="object"&&Ga&&Ga.Object===Object&&Ga,f=typeof self=="object"&&self&&self.Object===Object&&self,d=u||f||Function("return this")(),p=Object.prototype,b=p.toString,g=Math.max,h=Math.min,m=function(){return d.Date.now()};function y(_,S,E){var C,D,O,I,R,B,F=0,$=!1,ne=!1,W=!0;if(typeof _!="function")throw new TypeError(n);S=v(S)||0,A(E)&&($=!!E.leading,ne="maxWait"in E,O=ne?g(v(E.maxWait)||0,S):O,W="trailing"in E?!!E.trailing:W);function J(Q){var ae=C,oe=D;return C=D=void 0,F=Q,I=_.apply(oe,ae),I}function L(Q){return F=Q,R=setTimeout(q,S),$?J(Q):I}function P(Q){var ae=Q-B,oe=Q-F,se=S-ae;return ne?h(se,O-oe):se}function j(Q){var ae=Q-B,oe=Q-F;return B===void 0||ae>=S||ae<0||ne&&oe>=O}function q(){var Q=m();if(j(Q))return V(Q);R=setTimeout(q,P(Q))}function V(Q){return R=void 0,W&&C?J(Q):(C=D=void 0,I)}function ue(){R!==void 0&&clearTimeout(R),F=0,C=B=D=R=void 0}function fe(){return R===void 0?I:V(m())}function pe(){var Q=m(),ae=j(Q);if(C=arguments,D=this,B=Q,ae){if(R===void 0)return L(B);if(ne)return R=setTimeout(q,S),J(B)}return R===void 0&&(R=setTimeout(q,S)),I}return pe.cancel=ue,pe.flush=fe,pe}function w(_,S,E){var C=!0,D=!0;if(typeof _!="function")throw new TypeError(n);return A(E)&&(C="leading"in E?!!E.leading:C,D="trailing"in E?!!E.trailing:D),y(_,S,{leading:C,maxWait:S,trailing:D})}function A(_){var S=typeof _;return!!_&&(S=="object"||S=="function")}function T(_){return!!_&&typeof _=="object"}function x(_){return typeof _=="symbol"||T(_)&&b.call(_)==i}function v(_){if(typeof _=="number")return _;if(x(_))return r;if(A(_)){var S=typeof _.valueOf=="function"?_.valueOf():_;_=A(S)?S+"":S}if(typeof _!="string")return _===0?_:+_;_=_.replace(a,"");var E=s.test(_);return E||l.test(_)?c(_.slice(2),E?2:8):o.test(_)?r:+_}t.exports=w}),ym={};sx(ym,{default:()=>Ul});var cx=gm(bm());lx(ym,gm(bm()));var{default:mm,...ux}=cx,Ul=mm!==void 0?mm:ux;var dx=Object.create,$l=Object.defineProperty,fx=Object.getOwnPropertyDescriptor,px=Object.getOwnPropertyNames,hx=Object.getPrototypeOf,mx=Object.prototype.hasOwnProperty,gx=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),bx=(e,t)=>{for(var n in t)$l(e,n,{get:t[n],enumerable:!0})},jl=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of px(t))!mx.call(e,i)&&i!==n&&$l(e,i,{get:()=>t[i],enumerable:!(r=fx(t,i))||r.enumerable});return e},yx=(e,t,n)=>(jl(e,t,"default"),n&&jl(n,t,"default")),vm=(e,t,n)=>(n=e!=null?dx(hx(e)):{},jl(t||!e||!e.__esModule?$l(n,"default",{value:e,enumerable:!0}):n,e)),xm=gx((e,t)=>{(function(n,r){typeof e=="object"&&typeof t=="object"?t.exports=r():typeof define=="function"&&define.amd?define([],r):typeof e=="object"?e.notie=r():n.notie=r()})(e,function(){return function(n){function r(a){if(i[a])return i[a].exports;var o=i[a]={i:a,l:!1,exports:{}};return n[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var i={};return r.m=n,r.c=i,r.i=function(a){return a},r.d=function(a,o,s){r.o(a,o)||Object.defineProperty(a,o,{configurable:!1,enumerable:!0,get:s})},r.n=function(a){var o=a&&a.__esModule?function(){return a.default}:function(){return a};return r.d(o,"a",o),o},r.o=function(a,o){return Object.prototype.hasOwnProperty.call(a,o)},r.p="",r(r.s=1)}([function(n,r){n.exports=function(i){return i.webpackPolyfill||(i.deprecate=function(){},i.paths=[],i.children||(i.children=[]),Object.defineProperty(i,"loaded",{enumerable:!0,get:function(){return i.l}}),Object.defineProperty(i,"id",{enumerable:!0,get:function(){return i.i}}),i.webpackPolyfill=1),i}},function(n,r,i){"use strict";(function(a){var o,s,l,c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u};(function(u,f){c(r)==="object"&&c(a)==="object"?a.exports=f():(s=[],o=f,l=typeof o=="function"?o.apply(r,s):o,l!==void 0&&(a.exports=l))})(void 0,function(){return function(u){function f(p){if(d[p])return d[p].exports;var b=d[p]={i:p,l:!1,exports:{}};return u[p].call(b.exports,b,b.exports,f),b.l=!0,b.exports}var d={};return f.m=u,f.c=d,f.i=function(p){return p},f.d=function(p,b,g){f.o(p,b)||Object.defineProperty(p,b,{configurable:!1,enumerable:!0,get:g})},f.n=function(p){var b=p&&p.__esModule?function(){return p.default}:function(){return p};return f.d(b,"a",b),b},f.o=function(p,b){return Object.prototype.hasOwnProperty.call(p,b)},f.p="",f(f.s=0)}([function(u,f,d){function p(L,P){var j={};for(var q in L)P.indexOf(q)>=0||Object.prototype.hasOwnProperty.call(L,q)&&(j[q]=L[q]);return j}Object.defineProperty(f,"__esModule",{value:!0});var b=typeof Symbol=="function"&&c(Symbol.iterator)==="symbol"?function(L){return typeof L>"u"?"undefined":c(L)}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L>"u"?"undefined":c(L)},g=Object.assign||function(L){for(var P=1;P<arguments.length;P++){var j=arguments[P];for(var q in j)Object.prototype.hasOwnProperty.call(j,q)&&(L[q]=j[q])}return L},h={top:"top",bottom:"bottom"},m={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:h.top,force:h.top,confirm:h.top,input:h.top,select:h.bottom,date:h.top}},y=f.setOptions=function(L){m=g({},m,L,{classes:g({},m.classes,L.classes),ids:g({},m.ids,L.ids),positions:g({},m.positions,L.positions)})},w=function(){return new Promise(function(L){return setTimeout(L,0)})},A=function(L){return new Promise(function(P){return setTimeout(P,1e3*L)})},T=function(){document.activeElement&&document.activeElement.blur()},x=function(){var L="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(P){var j=16*Math.random()|0,q=P==="x"?j:3&j|8;return q.toString(16)});return"notie-"+L},v={1:m.classes.backgroundSuccess,success:m.classes.backgroundSuccess,2:m.classes.backgroundWarning,warning:m.classes.backgroundWarning,3:m.classes.backgroundError,error:m.classes.backgroundError,4:m.classes.backgroundInfo,info:m.classes.backgroundInfo,5:m.classes.backgroundNeutral,neutral:m.classes.backgroundNeutral},_=function(){return m.transitionSelector+" "+m.transitionDuration+"s "+m.transitionCurve},S=function(L){return L.keyCode===13},E=function(L){return L.keyCode===27},C=function(L,P){L.classList.add(m.classes.container),L.style[P]="-10000px",document.body.appendChild(L),L.style[P]="-"+L.offsetHeight+"px",L.listener&&window.addEventListener("keydown",L.listener),w().then(function(){L.style.transition=_(),L.style[P]=0})},D=function(L,P){var j=document.getElementById(L);j&&(j.style[P]="-"+j.offsetHeight+"px",j.listener&&window.removeEventListener("keydown",j.listener),A(m.transitionDuration).then(function(){j.parentNode&&j.parentNode.removeChild(j)}))},O=function(L,P){var j=document.createElement("div");j.id=m.ids.overlay,j.classList.add(m.classes.overlay),j.classList.add(m.classes.backgroundOverlay),j.style.opacity=0,L&&m.overlayClickDismiss&&(j.onclick=function(){D(L.id,P),I()}),document.body.appendChild(j),w().then(function(){j.style.transition=_(),j.style.opacity=m.overlayOpacity})},I=function(){var L=document.getElementById(m.ids.overlay);L.style.opacity=0,A(m.transitionDuration).then(function(){L.parentNode&&L.parentNode.removeChild(L)})},R=f.hideAlerts=function(L){var P=document.getElementsByClassName(m.classes.alert);if(P.length){for(var j=0;j<P.length;j++){var q=P[j];D(q.id,q.position)}L&&A(m.transitionDuration).then(function(){return L()})}},B=f.alert=function(L){var P=L.type,j=P===void 0?4:P,q=L.text,V=L.time,ue=V===void 0?m.alertTime:V,fe=L.stay,pe=fe!==void 0&&fe,Q=L.position,ae=Q===void 0?m.positions.alert||ae.top:Q;T(),R();var oe=document.createElement("div"),se=x();oe.id=se,oe.position=ae,oe.classList.add(m.classes.textbox),oe.classList.add(v[j]),oe.classList.add(m.classes.alert),oe.innerHTML='<div class="'+m.classes.textboxInner+'">'+q+"</div>",oe.onclick=function(){return D(se,ae)},oe.listener=function(Y){(S(Y)||E(Y))&&R()},C(oe,ae),ue&&ue<1&&(ue=1),!pe&&ue&&A(ue).then(function(){return D(se,ae)})},F=f.force=function(L,P){var j=L.type,q=j===void 0?5:j,V=L.text,ue=L.buttonText,fe=ue===void 0?"OK":ue,pe=L.callback,Q=L.position,ae=Q===void 0?m.positions.force||ae.top:Q;T(),R();var oe=document.createElement("div"),se=x();oe.id=se;var Y=document.createElement("div");Y.classList.add(m.classes.textbox),Y.classList.add(m.classes.backgroundInfo),Y.innerHTML='<div class="'+m.classes.textboxInner+'">'+V+"</div>";var ie=document.createElement("div");ie.classList.add(m.classes.button),ie.classList.add(v[q]),ie.innerHTML=fe,ie.onclick=function(){D(se,ae),I(),pe?pe():P&&P()},oe.appendChild(Y),oe.appendChild(ie),oe.listener=function(de){S(de)&&ie.click()},C(oe,ae),O()},$=f.confirm=function(L,P,j){var q=L.text,V=L.submitText,ue=V===void 0?"Yes":V,fe=L.cancelText,pe=fe===void 0?"Cancel":fe,Q=L.submitCallback,ae=L.cancelCallback,oe=L.position,se=oe===void 0?m.positions.confirm||se.top:oe;T(),R();var Y=document.createElement("div"),ie=x();Y.id=ie;var de=document.createElement("div");de.classList.add(m.classes.textbox),de.classList.add(m.classes.backgroundInfo),de.innerHTML='<div class="'+m.classes.textboxInner+'">'+q+"</div>";var he=document.createElement("div");he.classList.add(m.classes.button),he.classList.add(m.classes.elementHalf),he.classList.add(m.classes.backgroundSuccess),he.innerHTML=ue,he.onclick=function(){D(ie,se),I(),Q?Q():P&&P()};var re=document.createElement("div");re.classList.add(m.classes.button),re.classList.add(m.classes.elementHalf),re.classList.add(m.classes.backgroundError),re.innerHTML=pe,re.onclick=function(){D(ie,se),I(),ae?ae():j&&j()},Y.appendChild(de),Y.appendChild(he),Y.appendChild(re),Y.listener=function(Ee){S(Ee)?he.click():E(Ee)&&re.click()},C(Y,se),O(Y,se)},ne=function(L,P,j){var q=L.text,V=L.submitText,ue=V===void 0?"Submit":V,fe=L.cancelText,pe=fe===void 0?"Cancel":fe,Q=L.submitCallback,ae=L.cancelCallback,oe=L.position,se=oe===void 0?m.positions.input||se.top:oe,Y=p(L,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);T(),R();var ie=document.createElement("div"),de=x();ie.id=de;var he=document.createElement("div");he.classList.add(m.classes.textbox),he.classList.add(m.classes.backgroundInfo),he.innerHTML='<div class="'+m.classes.textboxInner+'">'+q+"</div>";var re=document.createElement("input");re.classList.add(m.classes.inputField),re.setAttribute("autocapitalize",Y.autocapitalize||"none"),re.setAttribute("autocomplete",Y.autocomplete||"off"),re.setAttribute("autocorrect",Y.autocorrect||"off"),re.setAttribute("autofocus",Y.autofocus||"true"),re.setAttribute("inputmode",Y.inputmode||"verbatim"),re.setAttribute("max",Y.max||""),re.setAttribute("maxlength",Y.maxlength||""),re.setAttribute("min",Y.min||""),re.setAttribute("minlength",Y.minlength||""),re.setAttribute("placeholder",Y.placeholder||""),re.setAttribute("spellcheck",Y.spellcheck||"default"),re.setAttribute("step",Y.step||"any"),re.setAttribute("type",Y.type||"text"),re.value=Y.value||"",Y.allowed&&(re.oninput=function(){var ve=void 0;if(Array.isArray(Y.allowed)){for(var De="",We=Y.allowed,pt=0;pt<We.length;pt++)We[pt]==="an"?De+="0-9a-zA-Z":We[pt]==="a"?De+="a-zA-Z":We[pt]==="n"&&(De+="0-9"),We[pt]==="s"&&(De+=" ");ve=new RegExp("[^"+De+"]","g")}else b(Y.allowed)==="object"&&(ve=Y.allowed);re.value=re.value.replace(ve,"")});var Ee=document.createElement("div");Ee.classList.add(m.classes.button),Ee.classList.add(m.classes.elementHalf),Ee.classList.add(m.classes.backgroundSuccess),Ee.innerHTML=ue,Ee.onclick=function(){D(de,se),I(),Q?Q(re.value):P&&P(re.value)};var Ne=document.createElement("div");Ne.classList.add(m.classes.button),Ne.classList.add(m.classes.elementHalf),Ne.classList.add(m.classes.backgroundError),Ne.innerHTML=pe,Ne.onclick=function(){D(de,se),I(),ae?ae(re.value):j&&j(re.value)},ie.appendChild(he),ie.appendChild(re),ie.appendChild(Ee),ie.appendChild(Ne),ie.listener=function(ve){S(ve)?Ee.click():E(ve)&&Ne.click()},C(ie,se),re.focus(),O(ie,se)};f.input=ne;var W=f.select=function(L,P){var j=L.text,q=L.cancelText,V=q===void 0?"Cancel":q,ue=L.cancelCallback,fe=L.choices,pe=L.position,Q=pe===void 0?m.positions.select||Q.top:pe;T(),R();var ae=document.createElement("div"),oe=x();ae.id=oe;var se=document.createElement("div");se.classList.add(m.classes.textbox),se.classList.add(m.classes.backgroundInfo),se.innerHTML='<div class="'+m.classes.textboxInner+'">'+j+"</div>",ae.appendChild(se),fe.forEach(function(ie,de){var he=ie.type,re=he===void 0?1:he,Ee=ie.text,Ne=ie.handler,ve=document.createElement("div");ve.classList.add(v[re]),ve.classList.add(m.classes.button),ve.classList.add(m.classes.selectChoice);var De=fe[de+1];De&&!De.type&&(De.type=1),De&&De.type===re&&ve.classList.add(m.classes.selectChoiceRepeated),ve.innerHTML=Ee,ve.onclick=function(){D(oe,Q),I(),Ne()},ae.appendChild(ve)});var Y=document.createElement("div");Y.classList.add(m.classes.backgroundNeutral),Y.classList.add(m.classes.button),Y.innerHTML=V,Y.onclick=function(){D(oe,Q),I(),ue?ue():P&&P()},ae.appendChild(Y),ae.listener=function(ie){E(ie)&&Y.click()},C(ae,Q),O(ae,Q)},J=f.date=function(L,P,j){var q=L.value,V=q===void 0?new Date:q,ue=L.submitText,fe=ue===void 0?"OK":ue,pe=L.cancelText,Q=pe===void 0?"Cancel":pe,ae=L.submitCallback,oe=L.cancelCallback,se=L.position,Y=se===void 0?m.positions.date||Y.top:se;T(),R();var ie="&#9662",de=document.createElement("div"),he=document.createElement("div"),re=document.createElement("div"),Ee=function(H){de.innerHTML=m.dateMonths[H.getMonth()],he.innerHTML=H.getDate(),re.innerHTML=H.getFullYear()},Ne=function(H){var Z=new Date(V.getFullYear(),V.getMonth()+1,0).getDate(),le=H.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(le)>Z&&(le=Z.toString()),H.target.textContent=le,Number(le)<1&&(le="1"),V.setDate(Number(le))},ve=function(H){var Z=H.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);H.target.textContent=Z,V.setFullYear(Number(Z))},De=function(H){Ee(V)},We=function(H){var Z=new Date(V.getFullYear(),V.getMonth()+H+1,0).getDate();V.getDate()>Z&&V.setDate(Z),V.setMonth(V.getMonth()+H),Ee(V)},pt=function(H){V.setDate(V.getDate()+H),Ee(V)},pn=function(H){var Z=V.getFullYear()+H;Z<0?V.setFullYear(0):V.setFullYear(V.getFullYear()+H),Ee(V)},Et=document.createElement("div"),nt=x();Et.id=nt;var qt=document.createElement("div");qt.classList.add(m.classes.backgroundInfo);var qe=document.createElement("div");qe.classList.add(m.classes.dateSelectorInner);var ht=document.createElement("div");ht.classList.add(m.classes.button),ht.classList.add(m.classes.elementThird),ht.classList.add(m.classes.dateSelectorUp),ht.innerHTML=ie;var Ke=document.createElement("div");Ke.classList.add(m.classes.button),Ke.classList.add(m.classes.elementThird),Ke.classList.add(m.classes.dateSelectorUp),Ke.innerHTML=ie;var at=document.createElement("div");at.classList.add(m.classes.button),at.classList.add(m.classes.elementThird),at.classList.add(m.classes.dateSelectorUp),at.innerHTML=ie,de.classList.add(m.classes.element),de.classList.add(m.classes.elementThird),de.innerHTML=m.dateMonths[V.getMonth()],he.classList.add(m.classes.element),he.classList.add(m.classes.elementThird),he.setAttribute("contentEditable",!0),he.addEventListener("input",Ne),he.addEventListener("blur",De),he.innerHTML=V.getDate(),re.classList.add(m.classes.element),re.classList.add(m.classes.elementThird),re.setAttribute("contentEditable",!0),re.addEventListener("input",ve),re.addEventListener("blur",De),re.innerHTML=V.getFullYear();var Mt=document.createElement("div");Mt.classList.add(m.classes.button),Mt.classList.add(m.classes.elementThird),Mt.innerHTML=ie;var N=document.createElement("div");N.classList.add(m.classes.button),N.classList.add(m.classes.elementThird),N.innerHTML=ie;var z=document.createElement("div");z.classList.add(m.classes.button),z.classList.add(m.classes.elementThird),z.innerHTML=ie,ht.onclick=function(){return We(1)},Ke.onclick=function(){return pt(1)},at.onclick=function(){return pn(1)},Mt.onclick=function(){return We(-1)},N.onclick=function(){return pt(-1)},z.onclick=function(){return pn(-1)};var M=document.createElement("div");M.classList.add(m.classes.button),M.classList.add(m.classes.elementHalf),M.classList.add(m.classes.backgroundSuccess),M.innerHTML=fe,M.onclick=function(){D(nt,Y),I(),ae?ae(V):P&&P(V)};var U=document.createElement("div");U.classList.add(m.classes.button),U.classList.add(m.classes.elementHalf),U.classList.add(m.classes.backgroundError),U.innerHTML=Q,U.onclick=function(){D(nt,Y),I(),oe?oe(V):j&&j(V)},qe.appendChild(ht),qe.appendChild(Ke),qe.appendChild(at),qe.appendChild(de),qe.appendChild(he),qe.appendChild(re),qe.appendChild(Mt),qe.appendChild(N),qe.appendChild(z),qt.appendChild(qe),Et.appendChild(qt),Et.appendChild(M),Et.appendChild(U),Et.listener=function(H){S(H)?M.click():E(H)&&U.click()},C(Et,Y),O(Et,Y)};f.default={alert:B,force:F,confirm:$,input:ne,select:W,date:J,setOptions:y,hideAlerts:R}}])})}).call(r,i(0)(n))}])})}),_m={};bx(_m,{default:()=>Va});var wx=vm(xm());yx(_m,vm(xm()));var{default:wm,...vx}=wx,Va=wm!==void 0?wm:vx;var Hl=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Wl(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function km(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function Cm(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function xx(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,i=!0,a=0;a<n.length;a++)r.indexOf(n[a])===-1&&(i=!1);return i}var ui={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":Hl?173:189,"=":Hl?61:187,";":Hl?59:186,"'":222,"[":219,"]":221,"\\":220},nn={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},Gl={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},tt={16:!1,18:!1,17:!1,91:!1},Be={};for(ci=1;ci<20;ci++)ui["f".concat(ci)]=111+ci;var ci,Oe=[],Tm=!1,Lm="all",Om=[],Ya=function(e){return ui[e.toLowerCase()]||nn[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},_x=function(e){return Object.keys(ui).find(function(t){return ui[t]===e})},Tx=function(e){return Object.keys(nn).find(function(t){return nn[t]===e})};function Dm(e){Lm=e||"all"}function di(){return Lm||"all"}function Sx(){return Oe.slice(0)}function Ax(){return Oe.map(function(e){return _x(e)||Tx(e)||String.fromCharCode(e)})}function Ex(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return(t.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(r=!1),r}function kx(e){return typeof e=="string"&&(e=Ya(e)),Oe.indexOf(e)!==-1}function Cx(e,t){var n,r;e||(e=di());for(var i in Be)if(Object.prototype.hasOwnProperty.call(Be,i))for(n=Be[i],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;di()===e&&Dm(t||"all")}function Lx(e){var t=e.keyCode||e.which||e.charCode,n=Oe.indexOf(t);if(n>=0&&Oe.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&Oe.splice(0,Oe.length),(t===93||t===224)&&(t=91),t in tt){tt[t]=!1;for(var r in nn)nn[r]===t&&(tn[r]=!1)}}function Ox(e){if(typeof e>"u")Object.keys(Be).forEach(function(o){return delete Be[o]});else if(Array.isArray(e))e.forEach(function(o){o.key&&ql(o)});else if(typeof e=="object")e.key&&ql(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0],a=n[1];typeof i=="function"&&(a=i,i=""),ql({key:e,scope:i,method:a,splitKey:"+"})}}var ql=function(e){var t=e.key,n=e.scope,r=e.method,i=e.splitKey,a=i===void 0?"+":i,o=Cm(t);o.forEach(function(s){var l=s.split(a),c=l.length,u=l[c-1],f=u==="*"?"*":Ya(u);if(Be[f]){n||(n=di());var d=c>1?km(nn,l):[];Be[f]=Be[f].filter(function(p){var b=r?p.method===r:!0;return!(b&&p.scope===n&&xx(p.mods,d))})}})};function Sm(e,t,n,r){if(t.element===r){var i;if(t.scope===n||t.scope==="all"){i=t.mods.length>0;for(var a in tt)Object.prototype.hasOwnProperty.call(tt,a)&&(!tt[a]&&t.mods.indexOf(+a)>-1||tt[a]&&t.mods.indexOf(+a)===-1)&&(i=!1);(t.mods.length===0&&!tt[16]&&!tt[18]&&!tt[17]&&!tt[91]||i||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function Am(e,t){var n=Be["*"],r=e.keyCode||e.which||e.charCode;if(tn.filter.call(this,e)){if((r===93||r===224)&&(r=91),Oe.indexOf(r)===-1&&r!==229&&Oe.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(b){var g=Gl[b];e[b]&&Oe.indexOf(g)===-1?Oe.push(g):!e[b]&&Oe.indexOf(g)>-1?Oe.splice(Oe.indexOf(g),1):b==="metaKey"&&e[b]&&Oe.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(Oe=Oe.slice(Oe.indexOf(g))))}),r in tt){tt[r]=!0;for(var i in nn)nn[i]===r&&(tn[i]=!0);if(!n)return}for(var a in tt)Object.prototype.hasOwnProperty.call(tt,a)&&(tt[a]=e[Gl[a]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(Oe.indexOf(17)===-1&&Oe.push(17),Oe.indexOf(18)===-1&&Oe.push(18),tt[17]=!0,tt[18]=!0);var o=di();if(n)for(var s=0;s<n.length;s++)n[s].scope===o&&(e.type==="keydown"&&n[s].keydown||e.type==="keyup"&&n[s].keyup)&&Sm(e,n[s],o,t);if(r in Be){for(var l=0;l<Be[r].length;l++)if((e.type==="keydown"&&Be[r][l].keydown||e.type==="keyup"&&Be[r][l].keyup)&&Be[r][l].key){for(var c=Be[r][l],u=c.splitKey,f=c.key.split(u),d=[],p=0;p<f.length;p++)d.push(Ya(f[p]));d.sort().join("")===Oe.sort().join("")&&Sm(e,c,o,t)}}}}function Dx(e){return Om.indexOf(e)>-1}function tn(e,t,n){Oe=[];var r=Cm(e),i=[],a="all",o=document,s=0,l=!1,c=!0,u="+",f=!1;for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(a=t.scope),t.element&&(o=t.element),t.keyup&&(l=t.keyup),t.keydown!==void 0&&(c=t.keydown),t.capture!==void 0&&(f=t.capture),typeof t.splitKey=="string"&&(u=t.splitKey)),typeof t=="string"&&(a=t);s<r.length;s++)e=r[s].split(u),i=[],e.length>1&&(i=km(nn,e)),e=e[e.length-1],e=e==="*"?"*":Ya(e),e in Be||(Be[e]=[]),Be[e].push({keyup:l,keydown:c,scope:a,mods:i,shortcut:r[s],method:n,key:r[s],splitKey:u,element:o});typeof o<"u"&&!Dx(o)&&window&&(Om.push(o),Wl(o,"keydown",function(d){Am(d,o)},f),Tm||(Tm=!0,Wl(window,"focus",function(){Oe=[]},f)),Wl(o,"keyup",function(d){Am(d,o),Lx(d)},f))}function Rx(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(Be).forEach(function(n){var r=Be[n].filter(function(i){return i.scope===t&&i.shortcut===e});r.forEach(function(i){i&&i.method&&i.method()})})}var Kl={getPressedKeyString:Ax,setScope:Dm,getScope:di,deleteScope:Cx,getPressedKeyCodes:Sx,isPressed:kx,filter:Ex,trigger:Rx,unbind:Ox,keyMap:ui,modifier:nn,modifierMap:Gl};for(Xa in Kl)Object.prototype.hasOwnProperty.call(Kl,Xa)&&(tn[Xa]=Kl[Xa]);var Xa;typeof document<"u"&&(Em=window.hotkeys,tn.noConflict=function(e){return e&&window.hotkeys===tn&&(window.hotkeys=Em),tn},window.hotkeys=tn);var Em;var{entries:zm,setPrototypeOf:Rm,isFrozen:Nx,getPrototypeOf:Mx,getOwnPropertyDescriptor:Ix}=Object,{freeze:dt,seal:Wt,create:Fx}=Object,{apply:Jl,construct:ec}=typeof Reflect<"u"&&Reflect;Jl||(Jl=function(e,t,n){return e.apply(t,n)});dt||(dt=function(e){return e});Wt||(Wt=function(e){return e});ec||(ec=function(e,t){return new e(...t)});var Bx=Nt(Array.prototype.forEach),Pm=Nt(Array.prototype.pop),fi=Nt(Array.prototype.push),Ja=Nt(String.prototype.toLowerCase),Vl=Nt(String.prototype.toString),zx=Nt(String.prototype.match),Ht=Nt(String.prototype.replace),Ux=Nt(String.prototype.indexOf),jx=Nt(String.prototype.trim),St=Nt(RegExp.prototype.test),pi=$x(TypeError);function Nt(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Jl(e,t,r)}}function $x(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return ec(e,n)}}function ge(e,t,n){var r;n=(r=n)!==null&&r!==void 0?r:Ja,Rm&&Rm(e,null);let i=t.length;for(;i--;){let a=t[i];if(typeof a=="string"){let o=n(a);o!==a&&(Nx(t)||(t[i]=o),a=o)}e[a]=!0}return e}function vr(e){let t=Fx(null);for(let[n,r]of zm(e))t[n]=r;return t}function Za(e,t){for(;e!==null;){let r=Ix(e,t);if(r){if(r.get)return Nt(r.get);if(typeof r.value=="function")return Nt(r.value)}e=Mx(e)}function n(r){return null}return n}var Nm=dt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Xl=dt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Yl=dt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Hx=dt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Zl=dt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Wx=dt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Mm=dt(["#text"]),Im=dt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Ql=dt(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Fm=dt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Qa=dt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),qx=Wt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Kx=Wt(/<%[\w\W]*|[\w\W]*%>/gm),Gx=Wt(/\${[\w\W]*}/gm),Vx=Wt(/^data-[\-\w.\u00B7-\uFFFF]/),Xx=Wt(/^aria-[\-\w]+$/),Um=Wt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Yx=Wt(/^(?:\w+script|data):/i),Zx=Wt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),jm=Wt(/^html$/i),Bm=Object.freeze({__proto__:null,MUSTACHE_EXPR:qx,ERB_EXPR:Kx,TMPLIT_EXPR:Gx,DATA_ATTR:Vx,ARIA_ATTR:Xx,IS_ALLOWED_URI:Um,IS_SCRIPT_OR_DATA:Yx,ATTR_WHITESPACE:Zx,DOCTYPE_NAME:jm}),Qx=()=>typeof window>"u"?null:window,Jx=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null,r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));let i="dompurify"+(n?"#"+n:"");try{return e.createPolicy(i,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return null}};function $m(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Qx(),t=k=>$m(k);if(t.version="3.0.3",t.removed=[],!e||!e.document||e.document.nodeType!==9)return t.isSupported=!1,t;let n=e.document,r=n.currentScript,{document:i}=e,{DocumentFragment:a,HTMLTemplateElement:o,Node:s,Element:l,NodeFilter:c,NamedNodeMap:u=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:f,DOMParser:d,trustedTypes:p}=e,b=l.prototype,g=Za(b,"cloneNode"),h=Za(b,"nextSibling"),m=Za(b,"childNodes"),y=Za(b,"parentNode");if(typeof o=="function"){let k=i.createElement("template");k.content&&k.content.ownerDocument&&(i=k.content.ownerDocument)}let w,A="",{implementation:T,createNodeIterator:x,createDocumentFragment:v,getElementsByTagName:_}=i,{importNode:S}=n,E={};t.isSupported=typeof zm=="function"&&typeof y=="function"&&T&&T.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:C,ERB_EXPR:D,TMPLIT_EXPR:O,DATA_ATTR:I,ARIA_ATTR:R,IS_SCRIPT_OR_DATA:B,ATTR_WHITESPACE:F}=Bm,{IS_ALLOWED_URI:$}=Bm,ne=null,W=ge({},[...Nm,...Xl,...Yl,...Zl,...Mm]),J=null,L=ge({},[...Im,...Ql,...Fm,...Qa]),P=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),j=null,q=null,V=!0,ue=!0,fe=!1,pe=!0,Q=!1,ae=!1,oe=!1,se=!1,Y=!1,ie=!1,de=!1,he=!0,re=!1,Ee="user-content-",Ne=!0,ve=!1,De={},We=null,pt=ge({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),pn=null,Et=ge({},["audio","video","img","source","image","track"]),nt=null,qt=ge({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),qe="http://www.w3.org/1998/Math/MathML",ht="http://www.w3.org/2000/svg",Ke="http://www.w3.org/1999/xhtml",at=Ke,Mt=!1,N=null,z=ge({},[qe,ht,Ke],Vl),M,U=["application/xhtml+xml","text/html"],H="text/html",Z,le=null,Ye=i.createElement("form"),mt=function(k){return k instanceof RegExp||k instanceof Function},Pn=function(k){if(!(le&&le===k)){if((!k||typeof k!="object")&&(k={}),k=vr(k),M=U.indexOf(k.PARSER_MEDIA_TYPE)===-1?M=H:M=k.PARSER_MEDIA_TYPE,Z=M==="application/xhtml+xml"?Vl:Ja,ne="ALLOWED_TAGS"in k?ge({},k.ALLOWED_TAGS,Z):W,J="ALLOWED_ATTR"in k?ge({},k.ALLOWED_ATTR,Z):L,N="ALLOWED_NAMESPACES"in k?ge({},k.ALLOWED_NAMESPACES,Vl):z,nt="ADD_URI_SAFE_ATTR"in k?ge(vr(qt),k.ADD_URI_SAFE_ATTR,Z):qt,pn="ADD_DATA_URI_TAGS"in k?ge(vr(Et),k.ADD_DATA_URI_TAGS,Z):Et,We="FORBID_CONTENTS"in k?ge({},k.FORBID_CONTENTS,Z):pt,j="FORBID_TAGS"in k?ge({},k.FORBID_TAGS,Z):{},q="FORBID_ATTR"in k?ge({},k.FORBID_ATTR,Z):{},De="USE_PROFILES"in k?k.USE_PROFILES:!1,V=k.ALLOW_ARIA_ATTR!==!1,ue=k.ALLOW_DATA_ATTR!==!1,fe=k.ALLOW_UNKNOWN_PROTOCOLS||!1,pe=k.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Q=k.SAFE_FOR_TEMPLATES||!1,ae=k.WHOLE_DOCUMENT||!1,Y=k.RETURN_DOM||!1,ie=k.RETURN_DOM_FRAGMENT||!1,de=k.RETURN_TRUSTED_TYPE||!1,se=k.FORCE_BODY||!1,he=k.SANITIZE_DOM!==!1,re=k.SANITIZE_NAMED_PROPS||!1,Ne=k.KEEP_CONTENT!==!1,ve=k.IN_PLACE||!1,$=k.ALLOWED_URI_REGEXP||Um,at=k.NAMESPACE||Ke,P=k.CUSTOM_ELEMENT_HANDLING||{},k.CUSTOM_ELEMENT_HANDLING&&mt(k.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(P.tagNameCheck=k.CUSTOM_ELEMENT_HANDLING.tagNameCheck),k.CUSTOM_ELEMENT_HANDLING&&mt(k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(P.attributeNameCheck=k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),k.CUSTOM_ELEMENT_HANDLING&&typeof k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(P.allowCustomizedBuiltInElements=k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Q&&(ue=!1),ie&&(Y=!0),De&&(ne=ge({},[...Mm]),J=[],De.html===!0&&(ge(ne,Nm),ge(J,Im)),De.svg===!0&&(ge(ne,Xl),ge(J,Ql),ge(J,Qa)),De.svgFilters===!0&&(ge(ne,Yl),ge(J,Ql),ge(J,Qa)),De.mathMl===!0&&(ge(ne,Zl),ge(J,Fm),ge(J,Qa))),k.ADD_TAGS&&(ne===W&&(ne=vr(ne)),ge(ne,k.ADD_TAGS,Z)),k.ADD_ATTR&&(J===L&&(J=vr(J)),ge(J,k.ADD_ATTR,Z)),k.ADD_URI_SAFE_ATTR&&ge(nt,k.ADD_URI_SAFE_ATTR,Z),k.FORBID_CONTENTS&&(We===pt&&(We=vr(We)),ge(We,k.FORBID_CONTENTS,Z)),Ne&&(ne["#text"]=!0),ae&&ge(ne,["html","head","body"]),ne.table&&(ge(ne,["tbody"]),delete j.tbody),k.TRUSTED_TYPES_POLICY){if(typeof k.TRUSTED_TYPES_POLICY.createHTML!="function")throw pi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof k.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw pi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');w=k.TRUSTED_TYPES_POLICY,A=w.createHTML("")}else w===void 0&&(w=Jx(p,r)),w!==null&&typeof A=="string"&&(A=w.createHTML(""));dt&&dt(k),le=k}},_r=ge({},["mi","mo","mn","ms","mtext"]),Tr=ge({},["foreignobject","desc","title","annotation-xml"]),pg=ge({},["title","style","font","a","script"]),mi=ge({},Xl);ge(mi,Yl),ge(mi,Hx);let no=ge({},Zl);ge(no,Wx);let hg=function(k){let ee=y(k);(!ee||!ee.tagName)&&(ee={namespaceURI:at,tagName:"template"});let K=Ja(k.tagName),xe=Ja(ee.tagName);return N[k.namespaceURI]?k.namespaceURI===ht?ee.namespaceURI===Ke?K==="svg":ee.namespaceURI===qe?K==="svg"&&(xe==="annotation-xml"||_r[xe]):!!mi[K]:k.namespaceURI===qe?ee.namespaceURI===Ke?K==="math":ee.namespaceURI===ht?K==="math"&&Tr[xe]:!!no[K]:k.namespaceURI===Ke?ee.namespaceURI===ht&&!Tr[xe]||ee.namespaceURI===qe&&!_r[xe]?!1:!no[K]&&(pg[K]||!mi[K]):!!(M==="application/xhtml+xml"&&N[k.namespaceURI]):!1},Vn=function(k){fi(t.removed,{element:k});try{k.parentNode.removeChild(k)}catch{k.remove()}},ro=function(k,ee){try{fi(t.removed,{attribute:ee.getAttributeNode(k),from:ee})}catch{fi(t.removed,{attribute:null,from:ee})}if(ee.removeAttribute(k),k==="is"&&!J[k])if(Y||ie)try{Vn(ee)}catch{}else try{ee.setAttribute(k,"")}catch{}},mc=function(k){let ee,K;if(se)k="<remove></remove>"+k;else{let ot=zx(k,/^[\r\n\t ]+/);K=ot&&ot[0]}M==="application/xhtml+xml"&&at===Ke&&(k='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+k+"</body></html>");let xe=w?w.createHTML(k):k;if(at===Ke)try{ee=new d().parseFromString(xe,M)}catch{}if(!ee||!ee.documentElement){ee=T.createDocument(at,"template",null);try{ee.documentElement.innerHTML=Mt?A:xe}catch{}}let ze=ee.body||ee.documentElement;return k&&K&&ze.insertBefore(i.createTextNode(K),ze.childNodes[0]||null),at===Ke?_.call(ee,ae?"html":"body")[0]:ae?ee.documentElement:ze},gc=function(k){return x.call(k.ownerDocument||k,k,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,null,!1)},mg=function(k){return k instanceof f&&(typeof k.nodeName!="string"||typeof k.textContent!="string"||typeof k.removeChild!="function"||!(k.attributes instanceof u)||typeof k.removeAttribute!="function"||typeof k.setAttribute!="function"||typeof k.namespaceURI!="string"||typeof k.insertBefore!="function"||typeof k.hasChildNodes!="function")},gi=function(k){return typeof s=="object"?k instanceof s:k&&typeof k=="object"&&typeof k.nodeType=="number"&&typeof k.nodeName=="string"},rn=function(k,ee,K){E[k]&&Bx(E[k],xe=>{xe.call(t,ee,K,le)})},bc=function(k){let ee;if(rn("beforeSanitizeElements",k,null),mg(k))return Vn(k),!0;let K=Z(k.nodeName);if(rn("uponSanitizeElement",k,{tagName:K,allowedTags:ne}),k.hasChildNodes()&&!gi(k.firstElementChild)&&(!gi(k.content)||!gi(k.content.firstElementChild))&&St(/<[/\w]/g,k.innerHTML)&&St(/<[/\w]/g,k.textContent))return Vn(k),!0;if(!ne[K]||j[K]){if(!j[K]&&wc(K)&&(P.tagNameCheck instanceof RegExp&&St(P.tagNameCheck,K)||P.tagNameCheck instanceof Function&&P.tagNameCheck(K)))return!1;if(Ne&&!We[K]){let xe=y(k)||k.parentNode,ze=m(k)||k.childNodes;if(ze&&xe){let ot=ze.length;for(let gt=ot-1;gt>=0;--gt)xe.insertBefore(g(ze[gt],!0),h(k))}}return Vn(k),!0}return k instanceof l&&!hg(k)||(K==="noscript"||K==="noembed")&&St(/<\/no(script|embed)/i,k.innerHTML)?(Vn(k),!0):(Q&&k.nodeType===3&&(ee=k.textContent,ee=Ht(ee,C," "),ee=Ht(ee,D," "),ee=Ht(ee,O," "),k.textContent!==ee&&(fi(t.removed,{element:k.cloneNode()}),k.textContent=ee)),rn("afterSanitizeElements",k,null),!1)},yc=function(k,ee,K){if(he&&(ee==="id"||ee==="name")&&(K in i||K in Ye))return!1;if(!(ue&&!q[ee]&&St(I,ee))&&!(V&&St(R,ee))){if(!J[ee]||q[ee]){if(!(wc(k)&&(P.tagNameCheck instanceof RegExp&&St(P.tagNameCheck,k)||P.tagNameCheck instanceof Function&&P.tagNameCheck(k))&&(P.attributeNameCheck instanceof RegExp&&St(P.attributeNameCheck,ee)||P.attributeNameCheck instanceof Function&&P.attributeNameCheck(ee))||ee==="is"&&P.allowCustomizedBuiltInElements&&(P.tagNameCheck instanceof RegExp&&St(P.tagNameCheck,K)||P.tagNameCheck instanceof Function&&P.tagNameCheck(K))))return!1}else if(!nt[ee]&&!St($,Ht(K,F,""))&&!((ee==="src"||ee==="xlink:href"||ee==="href")&&k!=="script"&&Ux(K,"data:")===0&&pn[k])&&!(fe&&!St(B,Ht(K,F,"")))&&K)return!1}return!0},wc=function(k){return k.indexOf("-")>0},vc=function(k){let ee,K,xe,ze;rn("beforeSanitizeAttributes",k,null);let{attributes:ot}=k;if(!ot)return;let gt={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:J};for(ze=ot.length;ze--;){ee=ot[ze];let{name:Ge,namespaceURI:Xn}=ee;if(K=Ge==="value"?ee.value:jx(ee.value),xe=Z(Ge),gt.attrName=xe,gt.attrValue=K,gt.keepAttr=!0,gt.forceKeepAttr=void 0,rn("uponSanitizeAttribute",k,gt),K=gt.attrValue,gt.forceKeepAttr||(ro(Ge,k),!gt.keepAttr))continue;if(!pe&&St(/\/>/i,K)){ro(Ge,k);continue}Q&&(K=Ht(K,C," "),K=Ht(K,D," "),K=Ht(K,O," "));let xc=Z(k.nodeName);if(yc(xc,xe,K)){if(re&&(xe==="id"||xe==="name")&&(ro(Ge,k),K=Ee+K),w&&typeof p=="object"&&typeof p.getAttributeType=="function"&&!Xn)switch(p.getAttributeType(xc,xe)){case"TrustedHTML":{K=w.createHTML(K);break}case"TrustedScriptURL":{K=w.createScriptURL(K);break}}try{Xn?k.setAttributeNS(Xn,Ge,K):k.setAttribute(Ge,K),Pm(t.removed)}catch{}}}rn("afterSanitizeAttributes",k,null)},gg=function k(ee){let K,xe=gc(ee);for(rn("beforeSanitizeShadowDOM",ee,null);K=xe.nextNode();)rn("uponSanitizeShadowNode",K,null),!bc(K)&&(K.content instanceof a&&k(K.content),vc(K));rn("afterSanitizeShadowDOM",ee,null)};return t.sanitize=function(k){let ee=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},K,xe,ze,ot;if(Mt=!k,Mt&&(k="<!-->"),typeof k!="string"&&!gi(k))if(typeof k.toString=="function"){if(k=k.toString(),typeof k!="string")throw pi("dirty is not a string, aborting")}else throw pi("toString is not a function");if(!t.isSupported)return k;if(oe||Pn(ee),t.removed=[],typeof k=="string"&&(ve=!1),ve){if(k.nodeName){let Xn=Z(k.nodeName);if(!ne[Xn]||j[Xn])throw pi("root node is forbidden and cannot be sanitized in-place")}}else if(k instanceof s)K=mc("<!---->"),xe=K.ownerDocument.importNode(k,!0),xe.nodeType===1&&xe.nodeName==="BODY"||xe.nodeName==="HTML"?K=xe:K.appendChild(xe);else{if(!Y&&!Q&&!ae&&k.indexOf("<")===-1)return w&&de?w.createHTML(k):k;if(K=mc(k),!K)return Y?null:de?A:""}K&&se&&Vn(K.firstChild);let gt=gc(ve?k:K);for(;ze=gt.nextNode();)bc(ze)||(ze.content instanceof a&&gg(ze.content),vc(ze));if(ve)return k;if(Y){if(ie)for(ot=v.call(K.ownerDocument);K.firstChild;)ot.appendChild(K.firstChild);else ot=K;return(J.shadowroot||J.shadowrootmod)&&(ot=S.call(n,ot,!0)),ot}let Ge=ae?K.outerHTML:K.innerHTML;return ae&&ne["!doctype"]&&K.ownerDocument&&K.ownerDocument.doctype&&K.ownerDocument.doctype.name&&St(jm,K.ownerDocument.doctype.name)&&(Ge="<!DOCTYPE "+K.ownerDocument.doctype.name+`>
`+Ge),Q&&(Ge=Ht(Ge,C," "),Ge=Ht(Ge,D," "),Ge=Ht(Ge,O," ")),w&&de?w.createHTML(Ge):Ge},t.setConfig=function(k){Pn(k),oe=!0},t.clearConfig=function(){le=null,oe=!1},t.isValidAttribute=function(k,ee,K){le||Pn({});let xe=Z(k),ze=Z(ee);return yc(xe,ze,K)},t.addHook=function(k,ee){typeof ee=="function"&&(E[k]=E[k]||[],fi(E[k],ee))},t.removeHook=function(k){if(E[k])return Pm(E[k])},t.removeHooks=function(k){E[k]&&(E[k]=[])},t.removeAllHooks=function(){E={}},t}var hi=$m();var e_=Object.create,nc=Object.defineProperty,t_=Object.getOwnPropertyDescriptor,n_=Object.getOwnPropertyNames,r_=Object.getPrototypeOf,i_=Object.prototype.hasOwnProperty,rc=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),a_=(e,t)=>{for(var n in t)nc(e,n,{get:t[n],enumerable:!0})},tc=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of n_(t))!i_.call(e,i)&&i!==n&&nc(e,i,{get:()=>t[i],enumerable:!(r=t_(t,i))||r.enumerable});return e},o_=(e,t,n)=>(tc(e,t,"default"),n&&tc(n,t,"default")),Wm=(e,t,n)=>(n=e!=null?e_(r_(e)):{},tc(t||!e||!e.__esModule?nc(n,"default",{value:e,enumerable:!0}):n,e)),s_=rc((e,t)=>{function n(r,i){if(i&&i.documentElement)r=i,i=arguments[2];else if(!r||!r.documentElement)throw new Error("First argument to Readability constructor should be a document object.");if(i=i||{},this._doc=r,this._docJSDOMParser=this._doc.firstChild.__JSDOMParser__,this._articleTitle=null,this._articleByline=null,this._articleDir=null,this._articleSiteName=null,this._attempts=[],this._debug=!!i.debug,this._maxElemsToParse=i.maxElemsToParse||this.DEFAULT_MAX_ELEMS_TO_PARSE,this._nbTopCandidates=i.nbTopCandidates||this.DEFAULT_N_TOP_CANDIDATES,this._charThreshold=i.charThreshold||this.DEFAULT_CHAR_THRESHOLD,this._classesToPreserve=this.CLASSES_TO_PRESERVE.concat(i.classesToPreserve||[]),this._keepClasses=!!i.keepClasses,this._serializer=i.serializer||function(a){return a.innerHTML},this._disableJSONLD=!!i.disableJSONLD,this._allowedVideoRegex=i.allowedVideoRegex||this.REGEXPS.videos,this._flags=this.FLAG_STRIP_UNLIKELYS|this.FLAG_WEIGHT_CLASSES|this.FLAG_CLEAN_CONDITIONALLY,this._debug){let a=function(o){if(o.nodeType==o.TEXT_NODE)return`${o.nodeName} ("${o.textContent}")`;let s=Array.from(o.attributes||[],function(l){return`${l.name}="${l.value}"`}).join(" ");return`<${o.localName} ${s}>`};this.log=function(){if(typeof console<"u")Array.from(arguments,l=>l&&l.nodeType==this.ELEMENT_NODE?a(l):l).unshift("Reader: (Readability)");else if(typeof dump<"u"){var o=Array.prototype.map.call(arguments,function(s){return s&&s.nodeName?a(s):s}).join(" ");dump("Reader: (Readability) "+o+`
`)}}}else this.log=function(){}}n.prototype={FLAG_STRIP_UNLIKELYS:1,FLAG_WEIGHT_CLASSES:2,FLAG_CLEAN_CONDITIONALLY:4,ELEMENT_NODE:1,TEXT_NODE:3,DEFAULT_MAX_ELEMS_TO_PARSE:0,DEFAULT_N_TOP_CANDIDATES:5,DEFAULT_TAGS_TO_SCORE:"section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),DEFAULT_CHAR_THRESHOLD:500,REGEXPS:{unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i,positive:/article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,negative:/-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,extraneous:/print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,byline:/byline|author|dateline|writtenby|p-author/i,replaceFonts:/<(\/?)font[^>]*>/gi,normalize:/\s{2,}/g,videos:/\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,shareElements:/(\b|_)(share|sharedaddy)(\b|_)/i,nextLink:/(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,prevLink:/(prev|earl|old|new|<|«)/i,tokenize:/\W+/g,whitespace:/^\s*$/,hasContent:/\S$/,hashUrl:/^#.+/,srcsetUrl:/(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,b64DataUrl:/^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,jsonLdArticleTypes:/^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/},UNLIKELY_ROLES:["menu","menubar","complementary","navigation","alert","alertdialog","dialog"],DIV_TO_P_ELEMS:new Set(["BLOCKQUOTE","DL","DIV","IMG","OL","P","PRE","TABLE","UL"]),ALTER_TO_DIV_EXCEPTIONS:["DIV","ARTICLE","SECTION","P"],PRESENTATIONAL_ATTRIBUTES:["align","background","bgcolor","border","cellpadding","cellspacing","frame","hspace","rules","style","valign","vspace"],DEPRECATED_SIZE_ATTRIBUTE_ELEMS:["TABLE","TH","TD","HR","PRE"],PHRASING_ELEMS:["ABBR","AUDIO","B","BDO","BR","BUTTON","CITE","CODE","DATA","DATALIST","DFN","EM","EMBED","I","IMG","INPUT","KBD","LABEL","MARK","MATH","METER","NOSCRIPT","OBJECT","OUTPUT","PROGRESS","Q","RUBY","SAMP","SCRIPT","SELECT","SMALL","SPAN","STRONG","SUB","SUP","TEXTAREA","TIME","VAR","WBR"],CLASSES_TO_PRESERVE:["page"],HTML_ESCAPE_MAP:{lt:"<",gt:">",amp:"&",quot:'"',apos:"'"},_postProcessContent:function(r){this._fixRelativeUris(r),this._simplifyNestedElements(r),this._keepClasses||this._cleanClasses(r)},_removeNodes:function(r,i){if(this._docJSDOMParser&&r._isLiveNodeList)throw new Error("Do not pass live node lists to _removeNodes");for(var a=r.length-1;a>=0;a--){var o=r[a],s=o.parentNode;s&&(!i||i.call(this,o,a,r))&&s.removeChild(o)}},_replaceNodeTags:function(r,i){if(this._docJSDOMParser&&r._isLiveNodeList)throw new Error("Do not pass live node lists to _replaceNodeTags");for(let a of r)this._setNodeTag(a,i)},_forEachNode:function(r,i){Array.prototype.forEach.call(r,i,this)},_findNode:function(r,i){return Array.prototype.find.call(r,i,this)},_someNode:function(r,i){return Array.prototype.some.call(r,i,this)},_everyNode:function(r,i){return Array.prototype.every.call(r,i,this)},_concatNodeLists:function(){var r=Array.prototype.slice,i=r.call(arguments),a=i.map(function(o){return r.call(o)});return Array.prototype.concat.apply([],a)},_getAllNodesWithTag:function(r,i){return r.querySelectorAll?r.querySelectorAll(i.join(",")):[].concat.apply([],i.map(function(a){var o=r.getElementsByTagName(a);return Array.isArray(o)?o:Array.from(o)}))},_cleanClasses:function(r){var i=this._classesToPreserve,a=(r.getAttribute("class")||"").split(/\s+/).filter(function(o){return i.indexOf(o)!=-1}).join(" ");for(a?r.setAttribute("class",a):r.removeAttribute("class"),r=r.firstElementChild;r;r=r.nextElementSibling)this._cleanClasses(r)},_fixRelativeUris:function(r){var i=this._doc.baseURI,a=this._doc.documentURI;function o(c){if(i==a&&c.charAt(0)=="#")return c;try{return new URL(c,i).href}catch{}return c}var s=this._getAllNodesWithTag(r,["a"]);this._forEachNode(s,function(c){var u=c.getAttribute("href");if(u)if(u.indexOf("javascript:")===0)if(c.childNodes.length===1&&c.childNodes[0].nodeType===this.TEXT_NODE){var f=this._doc.createTextNode(c.textContent);c.parentNode.replaceChild(f,c)}else{for(var d=this._doc.createElement("span");c.firstChild;)d.appendChild(c.firstChild);c.parentNode.replaceChild(d,c)}else c.setAttribute("href",o(u))});var l=this._getAllNodesWithTag(r,["img","picture","figure","video","audio","source"]);this._forEachNode(l,function(c){var u=c.getAttribute("src"),f=c.getAttribute("poster"),d=c.getAttribute("srcset");if(u&&c.setAttribute("src",o(u)),f&&c.setAttribute("poster",o(f)),d){var p=d.replace(this.REGEXPS.srcsetUrl,function(b,g,h,m){return o(g)+(h||"")+m});c.setAttribute("srcset",p)}})},_simplifyNestedElements:function(r){for(var i=r;i;){if(i.parentNode&&["DIV","SECTION"].includes(i.tagName)&&!(i.id&&i.id.startsWith("readability"))){if(this._isElementWithoutContent(i)){i=this._removeAndGetNext(i);continue}else if(this._hasSingleTagInsideElement(i,"DIV")||this._hasSingleTagInsideElement(i,"SECTION")){for(var a=i.children[0],o=0;o<i.attributes.length;o++)a.setAttribute(i.attributes[o].name,i.attributes[o].value);i.parentNode.replaceChild(a,i),i=a;continue}}i=this._getNextNode(i)}},_getArticleTitle:function(){var r=this._doc,i="",a="";try{i=a=r.title.trim(),typeof i!="string"&&(i=a=this._getInnerText(r.getElementsByTagName("title")[0]))}catch{}var o=!1;function s(p){return p.split(/\s+/).length}if(/ [\|\-\\\/>»] /.test(i))o=/ [\\\/>»] /.test(i),i=a.replace(/(.*)[\|\-\\\/>»] .*/gi,"$1"),s(i)<3&&(i=a.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi,"$1"));else if(i.indexOf(": ")!==-1){var l=this._concatNodeLists(r.getElementsByTagName("h1"),r.getElementsByTagName("h2")),c=i.trim(),u=this._someNode(l,function(p){return p.textContent.trim()===c});u||(i=a.substring(a.lastIndexOf(":")+1),s(i)<3?i=a.substring(a.indexOf(":")+1):s(a.substr(0,a.indexOf(":")))>5&&(i=a))}else if(i.length>150||i.length<15){var f=r.getElementsByTagName("h1");f.length===1&&(i=this._getInnerText(f[0]))}i=i.trim().replace(this.REGEXPS.normalize," ");var d=s(i);return d<=4&&(!o||d!=s(a.replace(/[\|\-\\\/>»]+/g,""))-1)&&(i=a),i},_prepDocument:function(){var r=this._doc;this._removeNodes(this._getAllNodesWithTag(r,["style"])),r.body&&this._replaceBrs(r.body),this._replaceNodeTags(this._getAllNodesWithTag(r,["font"]),"SPAN")},_nextNode:function(r){for(var i=r;i&&i.nodeType!=this.ELEMENT_NODE&&this.REGEXPS.whitespace.test(i.textContent);)i=i.nextSibling;return i},_replaceBrs:function(r){this._forEachNode(this._getAllNodesWithTag(r,["br"]),function(i){for(var a=i.nextSibling,o=!1;(a=this._nextNode(a))&&a.tagName=="BR";){o=!0;var s=a.nextSibling;a.parentNode.removeChild(a),a=s}if(o){var l=this._doc.createElement("p");for(i.parentNode.replaceChild(l,i),a=l.nextSibling;a;){if(a.tagName=="BR"){var c=this._nextNode(a.nextSibling);if(c&&c.tagName=="BR")break}if(!this._isPhrasingContent(a))break;var u=a.nextSibling;l.appendChild(a),a=u}for(;l.lastChild&&this._isWhitespace(l.lastChild);)l.removeChild(l.lastChild);l.parentNode.tagName==="P"&&this._setNodeTag(l.parentNode,"DIV")}})},_setNodeTag:function(r,i){if(this.log("_setNodeTag",r,i),this._docJSDOMParser)return r.localName=i.toLowerCase(),r.tagName=i.toUpperCase(),r;for(var a=r.ownerDocument.createElement(i);r.firstChild;)a.appendChild(r.firstChild);r.parentNode.replaceChild(a,r),r.readability&&(a.readability=r.readability);for(var o=0;o<r.attributes.length;o++)try{a.setAttribute(r.attributes[o].name,r.attributes[o].value)}catch{}return a},_prepArticle:function(r){this._cleanStyles(r),this._markDataTables(r),this._fixLazyImages(r),this._cleanConditionally(r,"form"),this._cleanConditionally(r,"fieldset"),this._clean(r,"object"),this._clean(r,"embed"),this._clean(r,"footer"),this._clean(r,"link"),this._clean(r,"aside");var i=this.DEFAULT_CHAR_THRESHOLD;this._forEachNode(r.children,function(a){this._cleanMatchedNodes(a,function(o,s){return this.REGEXPS.shareElements.test(s)&&o.textContent.length<i})}),this._clean(r,"iframe"),this._clean(r,"input"),this._clean(r,"textarea"),this._clean(r,"select"),this._clean(r,"button"),this._cleanHeaders(r),this._cleanConditionally(r,"table"),this._cleanConditionally(r,"ul"),this._cleanConditionally(r,"div"),this._replaceNodeTags(this._getAllNodesWithTag(r,["h1"]),"h2"),this._removeNodes(this._getAllNodesWithTag(r,["p"]),function(a){var o=a.getElementsByTagName("img").length,s=a.getElementsByTagName("embed").length,l=a.getElementsByTagName("object").length,c=a.getElementsByTagName("iframe").length,u=o+s+l+c;return u===0&&!this._getInnerText(a,!1)}),this._forEachNode(this._getAllNodesWithTag(r,["br"]),function(a){var o=this._nextNode(a.nextSibling);o&&o.tagName=="P"&&a.parentNode.removeChild(a)}),this._forEachNode(this._getAllNodesWithTag(r,["table"]),function(a){var o=this._hasSingleTagInsideElement(a,"TBODY")?a.firstElementChild:a;if(this._hasSingleTagInsideElement(o,"TR")){var s=o.firstElementChild;if(this._hasSingleTagInsideElement(s,"TD")){var l=s.firstElementChild;l=this._setNodeTag(l,this._everyNode(l.childNodes,this._isPhrasingContent)?"P":"DIV"),a.parentNode.replaceChild(l,a)}}})},_initializeNode:function(r){switch(r.readability={contentScore:0},r.tagName){case"DIV":r.readability.contentScore+=5;break;case"PRE":case"TD":case"BLOCKQUOTE":r.readability.contentScore+=3;break;case"ADDRESS":case"OL":case"UL":case"DL":case"DD":case"DT":case"LI":case"FORM":r.readability.contentScore-=3;break;case"H1":case"H2":case"H3":case"H4":case"H5":case"H6":case"TH":r.readability.contentScore-=5;break}r.readability.contentScore+=this._getClassWeight(r)},_removeAndGetNext:function(r){var i=this._getNextNode(r,!0);return r.parentNode.removeChild(r),i},_getNextNode:function(r,i){if(!i&&r.firstElementChild)return r.firstElementChild;if(r.nextElementSibling)return r.nextElementSibling;do r=r.parentNode;while(r&&!r.nextElementSibling);return r&&r.nextElementSibling},_textSimilarity:function(r,i){var a=r.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean),o=i.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);if(!a.length||!o.length)return 0;var s=o.filter(c=>!a.includes(c)),l=s.join(" ").length/o.join(" ").length;return 1-l},_checkByline:function(r,i){if(this._articleByline)return!1;if(r.getAttribute!==void 0)var a=r.getAttribute("rel"),o=r.getAttribute("itemprop");return(a==="author"||o&&o.indexOf("author")!==-1||this.REGEXPS.byline.test(i))&&this._isValidByline(r.textContent)?(this._articleByline=r.textContent.trim(),!0):!1},_getNodeAncestors:function(r,i){i=i||0;for(var a=0,o=[];r.parentNode&&(o.push(r.parentNode),!(i&&++a===i));)r=r.parentNode;return o},_grabArticle:function(r){this.log("**** grabArticle ****");var i=this._doc,a=r!==null;if(r=r||this._doc.body,!r)return this.log("No body found in document. Abort."),null;for(var o=r.innerHTML;;){this.log("Starting grabArticle loop");var s=this._flagIsActive(this.FLAG_STRIP_UNLIKELYS),l=[],c=this._doc.documentElement;let se=!0;for(;c;){c.tagName==="HTML"&&(this._articleLang=c.getAttribute("lang"));var u=c.className+" "+c.id;if(!this._isProbablyVisible(c)){this.log("Removing hidden node - "+u),c=this._removeAndGetNext(c);continue}if(c.getAttribute("aria-modal")=="true"&&c.getAttribute("role")=="dialog"){c=this._removeAndGetNext(c);continue}if(this._checkByline(c,u)){c=this._removeAndGetNext(c);continue}if(se&&this._headerDuplicatesTitle(c)){this.log("Removing header: ",c.textContent.trim(),this._articleTitle.trim()),se=!1,c=this._removeAndGetNext(c);continue}if(s){if(this.REGEXPS.unlikelyCandidates.test(u)&&!this.REGEXPS.okMaybeItsACandidate.test(u)&&!this._hasAncestorTag(c,"table")&&!this._hasAncestorTag(c,"code")&&c.tagName!=="BODY"&&c.tagName!=="A"){this.log("Removing unlikely candidate - "+u),c=this._removeAndGetNext(c);continue}if(this.UNLIKELY_ROLES.includes(c.getAttribute("role"))){this.log("Removing content with role "+c.getAttribute("role")+" - "+u),c=this._removeAndGetNext(c);continue}}if((c.tagName==="DIV"||c.tagName==="SECTION"||c.tagName==="HEADER"||c.tagName==="H1"||c.tagName==="H2"||c.tagName==="H3"||c.tagName==="H4"||c.tagName==="H5"||c.tagName==="H6")&&this._isElementWithoutContent(c)){c=this._removeAndGetNext(c);continue}if(this.DEFAULT_TAGS_TO_SCORE.indexOf(c.tagName)!==-1&&l.push(c),c.tagName==="DIV"){for(var f=null,d=c.firstChild;d;){var p=d.nextSibling;if(this._isPhrasingContent(d))f!==null?f.appendChild(d):this._isWhitespace(d)||(f=i.createElement("p"),c.replaceChild(f,d),f.appendChild(d));else if(f!==null){for(;f.lastChild&&this._isWhitespace(f.lastChild);)f.removeChild(f.lastChild);f=null}d=p}if(this._hasSingleTagInsideElement(c,"P")&&this._getLinkDensity(c)<.25){var b=c.children[0];c.parentNode.replaceChild(b,c),c=b,l.push(c)}else this._hasChildBlockElement(c)||(c=this._setNodeTag(c,"P"),l.push(c))}c=this._getNextNode(c)}var g=[];this._forEachNode(l,function(Y){if(!(!Y.parentNode||typeof Y.parentNode.tagName>"u")){var ie=this._getInnerText(Y);if(!(ie.length<25)){var de=this._getNodeAncestors(Y,5);if(de.length!==0){var he=0;he+=1,he+=ie.split(",").length,he+=Math.min(Math.floor(ie.length/100),3),this._forEachNode(de,function(re,Ee){if(!(!re.tagName||!re.parentNode||typeof re.parentNode.tagName>"u")){if(typeof re.readability>"u"&&(this._initializeNode(re),g.push(re)),Ee===0)var Ne=1;else Ee===1?Ne=2:Ne=Ee*3;re.readability.contentScore+=he/Ne}})}}}});for(var h=[],m=0,y=g.length;m<y;m+=1){var w=g[m],A=w.readability.contentScore*(1-this._getLinkDensity(w));w.readability.contentScore=A,this.log("Candidate:",w,"with score "+A);for(var T=0;T<this._nbTopCandidates;T++){var x=h[T];if(!x||A>x.readability.contentScore){h.splice(T,0,w),h.length>this._nbTopCandidates&&h.pop();break}}}var v=h[0]||null,_=!1,S;if(v===null||v.tagName==="BODY"){for(v=i.createElement("DIV"),_=!0;r.firstChild;)this.log("Moving child out:",r.firstChild),v.appendChild(r.firstChild);r.appendChild(v),this._initializeNode(v)}else if(v){for(var E=[],C=1;C<h.length;C++)h[C].readability.contentScore/v.readability.contentScore>=.75&&E.push(this._getNodeAncestors(h[C]));var D=3;if(E.length>=D)for(S=v.parentNode;S.tagName!=="BODY";){for(var O=0,I=0;I<E.length&&O<D;I++)O+=Number(E[I].includes(S));if(O>=D){v=S;break}S=S.parentNode}v.readability||this._initializeNode(v),S=v.parentNode;for(var R=v.readability.contentScore,B=R/3;S.tagName!=="BODY";){if(!S.readability){S=S.parentNode;continue}var F=S.readability.contentScore;if(F<B)break;if(F>R){v=S;break}R=S.readability.contentScore,S=S.parentNode}for(S=v.parentNode;S.tagName!="BODY"&&S.children.length==1;)v=S,S=v.parentNode;v.readability||this._initializeNode(v)}var $=i.createElement("DIV");a&&($.id="readability-content");var ne=Math.max(10,v.readability.contentScore*.2);S=v.parentNode;for(var W=S.children,J=0,L=W.length;J<L;J++){var P=W[J],j=!1;if(this.log("Looking at sibling node:",P,P.readability?"with score "+P.readability.contentScore:""),this.log("Sibling has score",P.readability?P.readability.contentScore:"Unknown"),P===v)j=!0;else{var q=0;if(P.className===v.className&&v.className!==""&&(q+=v.readability.contentScore*.2),P.readability&&P.readability.contentScore+q>=ne)j=!0;else if(P.nodeName==="P"){var V=this._getLinkDensity(P),ue=this._getInnerText(P),fe=ue.length;(fe>80&&V<.25||fe<80&&fe>0&&V===0&&ue.search(/\.( |$)/)!==-1)&&(j=!0)}}j&&(this.log("Appending node:",P),this.ALTER_TO_DIV_EXCEPTIONS.indexOf(P.nodeName)===-1&&(this.log("Altering sibling:",P,"to div."),P=this._setNodeTag(P,"DIV")),$.appendChild(P),W=S.children,J-=1,L-=1)}if(this._debug&&this.log("Article content pre-prep: "+$.innerHTML),this._prepArticle($),this._debug&&this.log("Article content post-prep: "+$.innerHTML),_)v.id="readability-page-1",v.className="page";else{var pe=i.createElement("DIV");for(pe.id="readability-page-1",pe.className="page";$.firstChild;)pe.appendChild($.firstChild);$.appendChild(pe)}this._debug&&this.log("Article content after paging: "+$.innerHTML);var Q=!0,ae=this._getInnerText($,!0).length;if(ae<this._charThreshold)if(Q=!1,r.innerHTML=o,this._flagIsActive(this.FLAG_STRIP_UNLIKELYS))this._removeFlag(this.FLAG_STRIP_UNLIKELYS),this._attempts.push({articleContent:$,textLength:ae});else if(this._flagIsActive(this.FLAG_WEIGHT_CLASSES))this._removeFlag(this.FLAG_WEIGHT_CLASSES),this._attempts.push({articleContent:$,textLength:ae});else if(this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY),this._attempts.push({articleContent:$,textLength:ae});else{if(this._attempts.push({articleContent:$,textLength:ae}),this._attempts.sort(function(Y,ie){return ie.textLength-Y.textLength}),!this._attempts[0].textLength)return null;$=this._attempts[0].articleContent,Q=!0}if(Q){var oe=[S,v].concat(this._getNodeAncestors(S));return this._someNode(oe,function(Y){if(!Y.tagName)return!1;var ie=Y.getAttribute("dir");return ie?(this._articleDir=ie,!0):!1}),$}}},_isValidByline:function(r){return typeof r=="string"||r instanceof String?(r=r.trim(),r.length>0&&r.length<100):!1},_unescapeHtmlEntities:function(r){if(!r)return r;var i=this.HTML_ESCAPE_MAP;return r.replace(/&(quot|amp|apos|lt|gt);/g,function(a,o){return i[o]}).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi,function(a,o,s){var l=parseInt(o||s,o?16:10);return String.fromCharCode(l)})},_getJSONLD:function(r){var i=this._getAllNodesWithTag(r,["script"]),a;return this._forEachNode(i,function(o){if(!a&&o.getAttribute("type")==="application/ld+json")try{var s=o.textContent.replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g,""),l=JSON.parse(s);if(!l["@context"]||!l["@context"].match(/^https?\:\/\/schema\.org$/)||(!l["@type"]&&Array.isArray(l["@graph"])&&(l=l["@graph"].find(function(d){return(d["@type"]||"").match(this.REGEXPS.jsonLdArticleTypes)})),!l||!l["@type"]||!l["@type"].match(this.REGEXPS.jsonLdArticleTypes)))return;if(a={},typeof l.name=="string"&&typeof l.headline=="string"&&l.name!==l.headline){var c=this._getArticleTitle(),u=this._textSimilarity(l.name,c)>.75,f=this._textSimilarity(l.headline,c)>.75;f&&!u?a.title=l.headline:a.title=l.name}else typeof l.name=="string"?a.title=l.name.trim():typeof l.headline=="string"&&(a.title=l.headline.trim());l.author&&(typeof l.author.name=="string"?a.byline=l.author.name.trim():Array.isArray(l.author)&&l.author[0]&&typeof l.author[0].name=="string"&&(a.byline=l.author.filter(function(d){return d&&typeof d.name=="string"}).map(function(d){return d.name.trim()}).join(", "))),typeof l.description=="string"&&(a.excerpt=l.description.trim()),l.publisher&&typeof l.publisher.name=="string"&&(a.siteName=l.publisher.name.trim());return}catch(d){this.log(d.message)}}),a||{}},_getArticleMetadata:function(r){var i={},a={},o=this._doc.getElementsByTagName("meta"),s=/\s*(dc|dcterm|og|twitter)\s*:\s*(author|creator|description|title|site_name)\s*/gi,l=/^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;return this._forEachNode(o,function(c){var u=c.getAttribute("name"),f=c.getAttribute("property"),d=c.getAttribute("content");if(d){var p=null,b=null;f&&(p=f.match(s),p&&(b=p[0].toLowerCase().replace(/\s/g,""),a[b]=d.trim())),!p&&u&&l.test(u)&&(b=u,d&&(b=b.toLowerCase().replace(/\s/g,"").replace(/\./g,":"),a[b]=d.trim()))}}),i.title=r.title||a["dc:title"]||a["dcterm:title"]||a["og:title"]||a["weibo:article:title"]||a["weibo:webpage:title"]||a.title||a["twitter:title"],i.title||(i.title=this._getArticleTitle()),i.byline=r.byline||a["dc:creator"]||a["dcterm:creator"]||a.author,i.excerpt=r.excerpt||a["dc:description"]||a["dcterm:description"]||a["og:description"]||a["weibo:article:description"]||a["weibo:webpage:description"]||a.description||a["twitter:description"],i.siteName=r.siteName||a["og:site_name"],i.title=this._unescapeHtmlEntities(i.title),i.byline=this._unescapeHtmlEntities(i.byline),i.excerpt=this._unescapeHtmlEntities(i.excerpt),i.siteName=this._unescapeHtmlEntities(i.siteName),i},_isSingleImage:function(r){return r.tagName==="IMG"?!0:r.children.length!==1||r.textContent.trim()!==""?!1:this._isSingleImage(r.children[0])},_unwrapNoscriptImages:function(r){var i=Array.from(r.getElementsByTagName("img"));this._forEachNode(i,function(o){for(var s=0;s<o.attributes.length;s++){var l=o.attributes[s];switch(l.name){case"src":case"srcset":case"data-src":case"data-srcset":return}if(/\.(jpg|jpeg|png|webp)/i.test(l.value))return}o.parentNode.removeChild(o)});var a=Array.from(r.getElementsByTagName("noscript"));this._forEachNode(a,function(o){var s=r.createElement("div");if(s.innerHTML=o.innerHTML,!!this._isSingleImage(s)){var l=o.previousElementSibling;if(l&&this._isSingleImage(l)){var c=l;c.tagName!=="IMG"&&(c=l.getElementsByTagName("img")[0]);for(var u=s.getElementsByTagName("img")[0],f=0;f<c.attributes.length;f++){var d=c.attributes[f];if(d.value!==""&&(d.name==="src"||d.name==="srcset"||/\.(jpg|jpeg|png|webp)/i.test(d.value))){if(u.getAttribute(d.name)===d.value)continue;var p=d.name;u.hasAttribute(p)&&(p="data-old-"+p),u.setAttribute(p,d.value)}}o.parentNode.replaceChild(s.firstElementChild,l)}}})},_removeScripts:function(r){this._removeNodes(this._getAllNodesWithTag(r,["script","noscript"]))},_hasSingleTagInsideElement:function(r,i){return r.children.length!=1||r.children[0].tagName!==i?!1:!this._someNode(r.childNodes,function(a){return a.nodeType===this.TEXT_NODE&&this.REGEXPS.hasContent.test(a.textContent)})},_isElementWithoutContent:function(r){return r.nodeType===this.ELEMENT_NODE&&r.textContent.trim().length==0&&(r.children.length==0||r.children.length==r.getElementsByTagName("br").length+r.getElementsByTagName("hr").length)},_hasChildBlockElement:function(r){return this._someNode(r.childNodes,function(i){return this.DIV_TO_P_ELEMS.has(i.tagName)||this._hasChildBlockElement(i)})},_isPhrasingContent:function(r){return r.nodeType===this.TEXT_NODE||this.PHRASING_ELEMS.indexOf(r.tagName)!==-1||(r.tagName==="A"||r.tagName==="DEL"||r.tagName==="INS")&&this._everyNode(r.childNodes,this._isPhrasingContent)},_isWhitespace:function(r){return r.nodeType===this.TEXT_NODE&&r.textContent.trim().length===0||r.nodeType===this.ELEMENT_NODE&&r.tagName==="BR"},_getInnerText:function(r,i){i=typeof i>"u"?!0:i;var a=r.textContent.trim();return i?a.replace(this.REGEXPS.normalize," "):a},_getCharCount:function(r,i){return i=i||",",this._getInnerText(r).split(i).length-1},_cleanStyles:function(r){if(!(!r||r.tagName.toLowerCase()==="svg")){for(var i=0;i<this.PRESENTATIONAL_ATTRIBUTES.length;i++)r.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[i]);this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(r.tagName)!==-1&&(r.removeAttribute("width"),r.removeAttribute("height"));for(var a=r.firstElementChild;a!==null;)this._cleanStyles(a),a=a.nextElementSibling}},_getLinkDensity:function(r){var i=this._getInnerText(r).length;if(i===0)return 0;var a=0;return this._forEachNode(r.getElementsByTagName("a"),function(o){var s=o.getAttribute("href"),l=s&&this.REGEXPS.hashUrl.test(s)?.3:1;a+=this._getInnerText(o).length*l}),a/i},_getClassWeight:function(r){if(!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))return 0;var i=0;return typeof r.className=="string"&&r.className!==""&&(this.REGEXPS.negative.test(r.className)&&(i-=25),this.REGEXPS.positive.test(r.className)&&(i+=25)),typeof r.id=="string"&&r.id!==""&&(this.REGEXPS.negative.test(r.id)&&(i-=25),this.REGEXPS.positive.test(r.id)&&(i+=25)),i},_clean:function(r,i){var a=["object","embed","iframe"].indexOf(i)!==-1;this._removeNodes(this._getAllNodesWithTag(r,[i]),function(o){if(a){for(var s=0;s<o.attributes.length;s++)if(this._allowedVideoRegex.test(o.attributes[s].value))return!1;if(o.tagName==="object"&&this._allowedVideoRegex.test(o.innerHTML))return!1}return!0})},_hasAncestorTag:function(r,i,a,o){a=a||3,i=i.toUpperCase();for(var s=0;r.parentNode;){if(a>0&&s>a)return!1;if(r.parentNode.tagName===i&&(!o||o(r.parentNode)))return!0;r=r.parentNode,s++}return!1},_getRowAndColumnCount:function(r){for(var i=0,a=0,o=r.getElementsByTagName("tr"),s=0;s<o.length;s++){var l=o[s].getAttribute("rowspan")||0;l&&(l=parseInt(l,10)),i+=l||1;for(var c=0,u=o[s].getElementsByTagName("td"),f=0;f<u.length;f++){var d=u[f].getAttribute("colspan")||0;d&&(d=parseInt(d,10)),c+=d||1}a=Math.max(a,c)}return{rows:i,columns:a}},_markDataTables:function(r){for(var i=r.getElementsByTagName("table"),a=0;a<i.length;a++){var o=i[a],s=o.getAttribute("role");if(s=="presentation"){o._readabilityDataTable=!1;continue}var l=o.getAttribute("datatable");if(l=="0"){o._readabilityDataTable=!1;continue}var c=o.getAttribute("summary");if(c){o._readabilityDataTable=!0;continue}var u=o.getElementsByTagName("caption")[0];if(u&&u.childNodes.length>0){o._readabilityDataTable=!0;continue}var f=["col","colgroup","tfoot","thead","th"],d=function(b){return!!o.getElementsByTagName(b)[0]};if(f.some(d)){this.log("Data table because found data-y descendant"),o._readabilityDataTable=!0;continue}if(o.getElementsByTagName("table")[0]){o._readabilityDataTable=!1;continue}var p=this._getRowAndColumnCount(o);if(p.rows>=10||p.columns>4){o._readabilityDataTable=!0;continue}o._readabilityDataTable=p.rows*p.columns>10}},_fixLazyImages:function(r){this._forEachNode(this._getAllNodesWithTag(r,["img","picture","figure"]),function(i){if(i.src&&this.REGEXPS.b64DataUrl.test(i.src)){var a=this.REGEXPS.b64DataUrl.exec(i.src);if(a[1]==="image/svg+xml")return;for(var o=!1,s=0;s<i.attributes.length;s++){var l=i.attributes[s];if(l.name!=="src"&&/\.(jpg|jpeg|png|webp)/i.test(l.value)){o=!0;break}}if(o){var c=i.src.search(/base64\s*/i)+7,u=i.src.length-c;u<133&&i.removeAttribute("src")}}if(!((i.src||i.srcset&&i.srcset!="null")&&i.className.toLowerCase().indexOf("lazy")===-1)){for(var f=0;f<i.attributes.length;f++)if(l=i.attributes[f],!(l.name==="src"||l.name==="srcset"||l.name==="alt")){var d=null;if(/\.(jpg|jpeg|png|webp)\s+\d/.test(l.value)?d="srcset":/^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(l.value)&&(d="src"),d){if(i.tagName==="IMG"||i.tagName==="PICTURE")i.setAttribute(d,l.value);else if(i.tagName==="FIGURE"&&!this._getAllNodesWithTag(i,["img","picture"]).length){var p=this._doc.createElement("img");p.setAttribute(d,l.value),i.appendChild(p)}}}}})},_getTextDensity:function(r,i){var a=this._getInnerText(r,!0).length;if(a===0)return 0;var o=0,s=this._getAllNodesWithTag(r,i);return this._forEachNode(s,l=>o+=this._getInnerText(l,!0).length),o/a},_cleanConditionally:function(r,i){this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)&&this._removeNodes(this._getAllNodesWithTag(r,[i]),function(a){var o=function(S){return S._readabilityDataTable},s=i==="ul"||i==="ol";if(!s){var l=0,c=this._getAllNodesWithTag(a,["ul","ol"]);this._forEachNode(c,S=>l+=this._getInnerText(S).length),s=l/this._getInnerText(a).length>.9}if(i==="table"&&o(a)||this._hasAncestorTag(a,"table",-1,o)||this._hasAncestorTag(a,"code"))return!1;var u=this._getClassWeight(a);this.log("Cleaning Conditionally",a);var f=0;if(u+f<0)return!0;if(this._getCharCount(a,",")<10){for(var d=a.getElementsByTagName("p").length,p=a.getElementsByTagName("img").length,b=a.getElementsByTagName("li").length-100,g=a.getElementsByTagName("input").length,h=this._getTextDensity(a,["h1","h2","h3","h4","h5","h6"]),m=0,y=this._getAllNodesWithTag(a,["object","embed","iframe"]),w=0;w<y.length;w++){for(var A=0;A<y[w].attributes.length;A++)if(this._allowedVideoRegex.test(y[w].attributes[A].value))return!1;if(y[w].tagName==="object"&&this._allowedVideoRegex.test(y[w].innerHTML))return!1;m++}var T=this._getLinkDensity(a),x=this._getInnerText(a).length,v=p>1&&d/p<.5&&!this._hasAncestorTag(a,"figure")||!s&&b>d||g>Math.floor(d/3)||!s&&h<.9&&x<25&&(p===0||p>2)&&!this._hasAncestorTag(a,"figure")||!s&&u<25&&T>.2||u>=25&&T>.5||m===1&&x<75||m>1;if(s&&v){for(var _=0;_<a.children.length;_++)if(a.children[_].children.length>1)return v;let S=a.getElementsByTagName("li").length;if(p==S)return!1}return v}return!1})},_cleanMatchedNodes:function(r,i){for(var a=this._getNextNode(r,!0),o=this._getNextNode(r);o&&o!=a;)i.call(this,o,o.className+" "+o.id)?o=this._removeAndGetNext(o):o=this._getNextNode(o)},_cleanHeaders:function(r){let i=this._getAllNodesWithTag(r,["h1","h2"]);this._removeNodes(i,function(a){let o=this._getClassWeight(a)<0;return o&&this.log("Removing header with low class weight:",a),o})},_headerDuplicatesTitle:function(r){if(r.tagName!="H1"&&r.tagName!="H2")return!1;var i=this._getInnerText(r,!1);return this.log("Evaluating similarity of header:",i,this._articleTitle),this._textSimilarity(this._articleTitle,i)>.75},_flagIsActive:function(r){return(this._flags&r)>0},_removeFlag:function(r){this._flags=this._flags&~r},_isProbablyVisible:function(r){return(!r.style||r.style.display!="none")&&!r.hasAttribute("hidden")&&(!r.hasAttribute("aria-hidden")||r.getAttribute("aria-hidden")!="true"||r.className&&r.className.indexOf&&r.className.indexOf("fallback-image")!==-1)},parse:function(){if(this._maxElemsToParse>0){var r=this._doc.getElementsByTagName("*").length;if(r>this._maxElemsToParse)throw new Error("Aborting parsing document; "+r+" elements found")}this._unwrapNoscriptImages(this._doc);var i=this._disableJSONLD?{}:this._getJSONLD(this._doc);this._removeScripts(this._doc),this._prepDocument();var a=this._getArticleMetadata(i);this._articleTitle=a.title;var o=this._grabArticle();if(!o)return null;if(this.log("Grabbed: "+o.innerHTML),this._postProcessContent(o),!a.excerpt){var s=o.getElementsByTagName("p");s.length>0&&(a.excerpt=s[0].textContent.trim())}var l=o.textContent;return{title:this._articleTitle,byline:a.byline||this._articleByline,dir:this._articleDir,lang:this._articleLang,content:this._serializer(o),textContent:l,length:l.length,excerpt:a.excerpt,siteName:a.siteName||this._articleSiteName}}},typeof t=="object"&&(t.exports=n)}),l_=rc((e,t)=>{var n={unlikelyCandidates:/-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,okMaybeItsACandidate:/and|article|body|column|content|main|shadow/i};function r(a){return(!a.style||a.style.display!="none")&&!a.hasAttribute("hidden")&&(!a.hasAttribute("aria-hidden")||a.getAttribute("aria-hidden")!="true"||a.className&&a.className.indexOf&&a.className.indexOf("fallback-image")!==-1)}function i(a,o={}){typeof o=="function"&&(o={visibilityChecker:o});var s={minScore:20,minContentLength:140,visibilityChecker:r};o=Object.assign(s,o);var l=a.querySelectorAll("p, pre, article"),c=a.querySelectorAll("div > br");if(c.length){var u=new Set(l);[].forEach.call(c,function(d){u.add(d.parentNode)}),l=Array.from(u)}var f=0;return[].some.call(l,function(d){if(!o.visibilityChecker(d))return!1;var p=d.className+" "+d.id;if(n.unlikelyCandidates.test(p)&&!n.okMaybeItsACandidate.test(p)||d.matches("li p"))return!1;var b=d.textContent.trim().length;return b<o.minContentLength?!1:(f+=Math.sqrt(b-o.minContentLength),f>o.minScore)})}typeof t=="object"&&(t.exports=i)}),qm=rc((e,t)=>{var n=s_(),r=l_();t.exports={Readability:n,isProbablyReaderable:r}}),Km={};a_(Km,{Readability:()=>Vm,default:()=>Ym,isProbablyReaderable:()=>Xm});var Gm=Wm(qm());o_(Km,Wm(qm()));var{Readability:Vm,isProbablyReaderable:Xm}=Gm,{default:Hm,...c_}=Gm,Ym=Hm!==void 0?Hm:c_;var tk=Va.alert;var At=window,Qm=!1,Jm=!!(At.Worker&&At.Blob&&At.Promise&&At.OffscreenCanvas&&At.OffscreenCanvasRenderingContext2D&&At.HTMLCanvasElement&&At.HTMLCanvasElement.prototype.transferControlToOffscreen&&At.URL&&At.URL.createObjectURL);function Zm(){}function sc(e){var t=At.Promise,n=t!==void 0?t:At.Promise;return typeof n=="function"?new n(e):(e(Zm,Zm),null)}var ic=function(){var e=Math.floor(16.666666666666668),t,n,r={},i=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(t=function(a){var o=Math.random();return r[o]=requestAnimationFrame(function s(l){i===l||i+e-1<l?(i=l,delete r[o],a()):r[o]=requestAnimationFrame(s)}),o},n=function(a){r[a]&&cancelAnimationFrame(r[a])}):(t=function(a){return setTimeout(a,e)},n=function(a){return clearTimeout(a)}),{frame:t,cancel:n}}(),u_=function(){var e,t,n={};function r(i){function a(o,s){i.postMessage({options:o||{},callback:s})}i.init=function(s){var l=s.transferControlToOffscreen();i.postMessage({canvas:l},[l])},i.fire=function(s,l,c){if(t)return a(s,null),t;var u=Math.random().toString(36).slice(2);return t=sc(function(f){function d(p){p.data.callback===u&&(delete n[u],i.removeEventListener("message",d),t=null,c(),f())}i.addEventListener("message",d),a(s,u),n[u]=d.bind(null,{data:{callback:u}})}),t},i.reset=function(){i.postMessage({reset:!0});for(var s in n)n[s](),delete n[s]}}return function(){if(e)return e;if(!Qm&&Jm){var i=["var CONFETTI, SIZE = {}, module = {};","("+main.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{e=new Worker(URL.createObjectURL(new Blob([i])))}catch{return null}r(e)}return e}}(),d_={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function f_(e,t){return t?t(e):e}function p_(e){return e!=null}function He(e,t,n){return f_(e&&p_(e[t])?e[t]:d_[t],n)}function h_(e){return e<0?0:Math.floor(e)}function m_(e,t){return Math.floor(Math.random()*(t-e))+e}function ac(e){return parseInt(e,16)}function g_(e){return e.map(b_)}function b_(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:ac(t.substring(0,2)),g:ac(t.substring(2,4)),b:ac(t.substring(4,6))}}function y_(e){var t=He(e,"origin",Object);return t.x=He(t,"x",Number),t.y=He(t,"y",Number),t}function w_(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function v_(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function x_(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}function __(e,t,n,r,i,a,o,s,l){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,l),e.restore()}function T_(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar}}function S_(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,o=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),t.shape==="circle")e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(o-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):__(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(o-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape==="star")for(var s=Math.PI/2*3,l=4*t.scalar,c=8*t.scalar,u=t.x,f=t.y,d=5,p=Math.PI/d;d--;)u=t.x+Math.cos(s)*c,f=t.y+Math.sin(s)*c,e.lineTo(u,f),s+=p,u=t.x+Math.cos(s)*l,f=t.y+Math.sin(s)*l,e.lineTo(u,f),s+=p;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(o)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function A_(e,t,n,r,i){var a=t.slice(),o=e.getContext("2d"),s,l,c=sc(function(u){function f(){s=l=null,o.clearRect(0,0,r.width,r.height),i(),u()}function d(){Qm&&!(r.width===workerSize.width&&r.height===workerSize.height)&&(r.width=e.width=workerSize.width,r.height=e.height=workerSize.height),!r.width&&!r.height&&(n(e),r.width=e.width,r.height=e.height),o.clearRect(0,0,r.width,r.height),a=a.filter(function(p){return S_(o,p)}),a.length?s=ic.frame(d):f()}s=ic.frame(d),l=f});return{addFettis:function(u){return a=a.concat(u),c},canvas:e,promise:c,reset:function(){s&&ic.cancel(s),l&&l()}}}function E_(e,t){var n=!e,r=!!He(t||{},"resize"),i=He(t,"disableForReducedMotion",Boolean),a=Jm&&!!He(t||{},"useWorker"),o=a?u_():null,s=n?w_:v_,l=e&&o?!!e.__confetti_initialized:!1,c=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,u;function f(p,b,g){for(var h=He(p,"particleCount",h_),m=He(p,"angle",Number),y=He(p,"spread",Number),w=He(p,"startVelocity",Number),A=He(p,"decay",Number),T=He(p,"gravity",Number),x=He(p,"drift",Number),v=He(p,"colors",g_),_=He(p,"ticks",Number),S=He(p,"shapes"),E=He(p,"scalar"),C=y_(p),D=h,O=[],I=e.width*C.x,R=e.height*C.y;D--;)O.push(T_({x:I,y:R,angle:m,spread:y,startVelocity:w,color:v[D%v.length],shape:S[m_(0,S.length)],ticks:_,decay:A,gravity:T,drift:x,scalar:E}));return u?u.addFettis(O):(u=A_(e,O,s,b,g),u.promise)}function d(p){var b=i||He(p,"disableForReducedMotion",Boolean),g=He(p,"zIndex",Number);if(b&&c)return sc(function(w){w()});n&&u?e=u.canvas:n&&!e&&(e=x_(g),document.body.appendChild(e)),r&&!l&&s(e);var h={width:e.width,height:e.height};o&&!l&&o.init(e),l=!0,o&&(e.__confetti_initialized=!0);function m(){if(o){var w={getBoundingClientRect:function(){if(!n)return e.getBoundingClientRect()}};s(w),o.postMessage({resize:{width:w.width,height:w.height}});return}h.width=h.height=null}function y(){u=null,r&&At.removeEventListener("resize",m),n&&e&&(document.body.removeChild(e),e=null,l=!1)}return r&&At.addEventListener("resize",m,!1),o?o.fire(p,h,y):f(p,h,y)}return d.reset=function(){o&&o.reset(),u&&u.reset()},d}var oc;function k_(){return oc||(oc=E_(null,{useWorker:!1,resize:!0})),oc}function lc(){return k_().apply(this,arguments)}var eg={nologin:"\u672A\u767B\u5F55",loginForSafari:"\u767B\u5F55\u6216\u6CE8\u518C",login:"\u767B\u5F55\u540E\u53EF\u5F00\u901A\u4F1A\u5458",manageAccount:"\u7BA1\u7406\u8D26\u6237",openPremium:"\u5F00\u901A\u4F1A\u5458",logout:"\u9000\u51FA",curentPlan:"\u5F53\u524D\u5957\u9910",endAt:"\u5230\u671F",endAuto:"\u81EA\u52A8\u7EED\u671F",lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","noSupportTranslate-pdf":"\u811A\u672C\u4E0D\u652F\u6301\u8BF7\u4F7F\u7528\u63D2\u4EF6","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u5BFC\u5165PDF",enableLineBreak:"\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E\u683C\u5F0F\u4E3A (\u6CA1\u6709\u505A\u81EA\u52A8\u8BC6\u522B\uFF0C\u8BF7\u76F4\u63A5\u8F93\u5165)\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.shortBrandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1: \u53CC\u8BED\u5BF9\u7167\u7F51\u9875\u7FFB\u8BD1 & PDF\u6587\u6863\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u652F\u6301PDF\u7FFB\u8BD1\uFF0C\u53CC\u8BEDEpub\u7535\u5B50\u4E66\u5236\u4F5C\uFF0CYoutube/Netflix/Udemy \u7B49\u5E73\u53F0\u53CC\u8BED\u5B57\u5E55\uFF0C\u652F\u6301Deepl/Google\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u514D\u8D39\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8BD1\u5E76\u9690\u85CF\u539F\u6587/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.shareToDraft":"\u5206\u4EAB\u53CC\u8BED\u9875\u9762","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.toggleTranslationMask":"\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6","browser.openEbookViewer":"\u9605\u8BFB\u672C\u5730\u7535\u5B50\u4E66","browser.openEbookBuilder":"\u5236\u4F5C\u53CC\u8BED EPUB \u7535\u5B50\u4E66","browser.translateLocalHtmlFile":"\u7FFB\u8BD1 HTML/txt \u6587\u4EF6","browser.donateContext":"\u4E86\u89E3\u8D5E\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8BD1\u672C\u5730\u5B57\u5E55\u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",isShowContextMenu:"\u5C06\u7FFB\u8BD1\u7F51\u9875\u52A0\u5165\u53F3\u952E\u83DC\u5355\u9879",toggleBeta:"\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",betaDescription:"\u542F\u7528\u4ECD\u5728\u5B9E\u9A8C\u6027\u7684\u529F\u80FD\uFF0C\u4EE5\u53CA\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u603B\u662F\u6362\u884C\u9002\u7528\u4E8E\u8F83\u5C11\u5185\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F50\u3002\uFF08\u5728\u5185\u5BB9\u8F83\u591A\u7684\u957F\u6BB5\u843D(\u8D85\u8FC7{count}\u4E2A\u5B57\u7B26) \u4F7F\u7528\u667A\u80FD\u6362\u884C\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1\uFF0C\u53EF\u8BBE\u7F6E\u4E34\u65F6\u65F6\u957F",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5219\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875(\u4EC5\u8BD1\u6587)/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",mouseHoldKey:"+ {key} \u7FFB\u8BD1/\u8FD8\u539F\u8BE5\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8BD1\u8BE5\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E(\u6253\u5F00\u8BBE\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8BD1/\u8FD8\u539F\u8BE5\u6BB5",mouseHoverHoldKey:"\u9F20\u6807\u60AC\u505C\u540C\u65F6\u6309\u4E0B\u5FEB\u6377\u952E\u7FFB\u8BD1\u6BB5\u843D","mouse-translate":"\u9F20\u6807\u60AC\u505C",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",resetThisSuccess:"\u91CD\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\u3002\u4EC5\u5BF9\u4E8E\u66F4\u4E13\u4E1A\u7684\u7528\u6237\uFF0C\u63D0\u4F9B\u66F4\u4E2A\u6027\u5316\u7684\u8BBE\u7F6E\u9879\u3002",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u4EF7\u683C","translate to the bottom of the page":"\u8FDB\u5165\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u8FDB\u5165\u7F51\u9875\u5C06\u7ACB\u5373\u7FFB\u8BD1\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\u3002\u5173\u95ED\u5219\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u6240\u6709\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\u3002\u5173\u95ED\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\uFF0C\u4EC5\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8BD1\u9875\u9762\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\uFF0C\u800C\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",moreOptions:"\u5C55\u5F00\u66F4\u591A\u81EA\u5B9A\u4E49\u9009\u9879",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",changeToOnlyTranslationMode:"\u5207\u6362\u4E3A\u4EC5\u663E\u793A\u8BD1\u6587",changeToDualTranslationMode:"\u5207\u6362\u4E3A\u53CC\u8BED\u7FFB\u8BD1",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",badUserscriptBrowser:"\u5F53\u524D\u6D4F\u89C8\u5668\u6CA1\u6709\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u6269\u5C55\u7684\u63A5\u53E3\uFF08\u6BD4\u5982\u83B7\u53D6\u6CB9\u7334\u811A\u672C\u81EA\u8EAB\u7684\u7248\u672C\u53F7\u4FE1\u606F\uFF09\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334\u6269\u5C55</1>\u7684\u6D4F\u89C8\u5668\u5982 Firefox",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",needActionForOptions:"(\u9700\u8BBE\u7F6E)",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u5F53\u524D\u7F51\u7AD9",autoEnableSubtitle:"\u81EA\u52A8\u5F00\u542F\u53CC\u8BED\u5B57\u5E55",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1 {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1 {language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",alwaysTranslateSomeSiteOrWildSite:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u7AD9",alwaysTranslateSomePage:"\u603B\u662F\u7FFB\u8BD1\u8BE5\u7F51\u9875",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA",import_export_title:"\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65",floatBallOptions:"\u60AC\u6D6E\u7403\u8BBE\u7F6E","floatBallOptions.enable":"\u542F\u7528\u60AC\u6D6E\u7403","floatBallOptions.blockUrls":"\u7981\u7528\u7F51\u7AD9","floatBallOptions.add":"\u6DFB\u52A0","floatBallOptions.blockUrlDesc":"\u5F53\u9047\u4E0B\u5217\u7F51\u7AD9\u65F6\u4E0D\u663E\u793A\u60AC\u6D6E\u7403","floatBallOptions.clickType":"\u70B9\u51FB\u884C\u4E3A","floatBallOptions.clickTypeDesc":"\u60AC\u6D6E\u7403\u56FE\u6807\u70B9\u51FB\u65F6\u7684\u884C\u4E3A","floatBallOptions.clickPopup":"\u663E\u793A\u7FFB\u8BD1\u9762\u677F","floatBallOptions.clickTranslate":"\u7FFB\u8BD1/\u663E\u793A\u539F\u6587","floatBallOptions.fixedPosition":"\u56FA\u5B9A\u4F4D\u7F6E","floatBallOptions.fixedPositionDesc":"\u60AC\u6D6E\u7403\u5728\u7A97\u53E3\u5DE6\u4FA7\u8FD8\u662F\u53F3\u4FA7","floatBallOptions.fixedPositionLeft":"\u5DE6\u4FA7","floatBallOptions.fixedPositionRight":"\u53F3\u4FA7",previewAllThemes:"\u9884\u89C8\u5168\u90E8\u6837\u5F0F","translationTheme.none":"\u65E0","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.solidBorder":"\u5B9E\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B66\u4E60\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.marker2":"\u9A6C\u514B\u7B142","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7EBF","translationServices.custom":"\u81EA\u5B9A\u4E49API","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.tenAlpha":"\u817E\u8BAF\u7FFB\u8BD1\u541B(Alpha)","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeepLX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.deepl":"DeepL","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"Azure \u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.cai":"\u5F69\u4E91\u5C0F\u8BD1 (Alpha)","translationServices.volcAlpha":"\u706B\u5C71 (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.you":"\u6709\u9053\u7FFB\u8BD1 (Alpha)","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.niu":"\u5C0F\u725B\u7FFB\u8BD1","translationServices.papago":"Papago \u7FFB\u8BD1","translationServices.d":"D (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u5C06\u8DF3\u8FC7\u7FFB\u8BD1",enableUserscriptPagePopup:"\u5728\u9875\u9762\u4E0A\u663E\u793A\u60AC\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u603B\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8BD1\u6587\u6837\u5F0F",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B",syncToCloud:"\u540C\u6B65\u5230 Google Drive",syncToCloudDescription:"\u4E0A\u4F20\u5230\u4E91\u7AEF\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",syncToAccount:"\u540C\u6B65\u5230\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u4E91\u7AEF",syncToAccountButton:"\u7ACB\u5373\u4E0E\u4E91\u7AEF\u540C\u6B65",syncToAccountDescription:"\u5728\u4E0D\u540C\u7684\u8BBE\u5907\u4E4B\u95F4\u81EA\u52A8\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",successSyncConfigInAccount:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",successSyncConfigToAccount:"\u6210\u529F\u540C\u6B65\u5230\u4E91\u7AEF",syncConfigNoUpdate:"\u5DF2\u7ECF\u662F\u6700\u65B0\u7684\u4E86",authFail:"\u6388\u6743\u5931\u8D25",syncTitle:"\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",import_hint:"\u5BFC\u5165",upload:"\u4E0A\u4F20",revokeAuth:"\u64A4\u9500\u6388\u6743",uploadFail:"\u4E0A\u4F20\u5931\u8D25",download:"\u4E0B\u8F7D",importSuccess:"\u5BFC\u5165\u6210\u529F",importFail:"\u5BFC\u5165\u5931\u8D25",deleteFail:"\u5220\u9664\u5931\u8D25",backupToCloud:"\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5907\u4EFD\u8282\u70B9",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",backupToCloudDescription:"\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",successSyncConfig:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u8D25",updatedAt:"\u66F4\u65B0\u4E8E {date}",lastSyncedAt:"\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",downloadFail:"\u4E0B\u8F7D\u5931\u8D25",clickToDownload:"\u70B9\u51FB\u4E0B\u8F7D",aboutLabel:"\u5173\u4E8E - \u53CD\u9988","browser.openAboutPage":"\u5173\u4E8E/\u53CD\u9988",aboutLabelWithoutSponsor:"\u5173\u4E8E - \u53CD\u9988",aboutIntro:"\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F \u4F60\u53EF\u9009\u62E9\u5F00\u901A <6>Pro\u4F1A\u5458</6> \u6765\u4F7F\u7528\u5F00\u7BB1\u5373\u7528\u7684 DeepL \u548C OpenAI \u7FFB\u8BD1\u3002 <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002<br/> <7>Pro \u4F1A\u5458</7> \u53EF\u4EE5\u901A\u8FC7\u5FEB\u901F\u5BA2\u670D\u90AE\u7BB1 <8>support@immersivetranslate.com</8> \u548C\u6211\u4EEC\u53D6\u5F97\u8054\u7CFB\u3002",aboutIntroWithoutSponsor:"\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F  <br/><br/>\u4F60\u53EF\u4EE5\u5173\u6CE8\u6211\u4EEC\u7684<3>\u63A8\u7279</3>\uFF0C<4>Telegram \u9891\u9053</4>\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u5FAE\u4FE1\u4EA4\u6D41\u7FA4\uFF0C\u6216\u8005\u4E0B\u65B9\u7684<5>\u90AE\u4EF6\u8BA2\u9605</5>\u8FFD\u8E2A\u66F4\u65B0\u3002",projectHomepage:"\u9879\u76EE\u4E3B\u9875",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u4F17\u53F7",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u9891\u9053",joinTelegramChannel:"\u5173\u6CE8 Telegram \u9891\u9053\u83B7\u53D6\u6700\u65B0\u66F4\u65B0",feedbackAndJoin:"\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",autoSync:"\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",loadingThemeTitle:"Loading \u6837\u5F0F",loadingThemeDescription:"\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F","loadingTheme.spinner":"\u8F6C\u5708\u52A8\u753B","loadingTheme.text":"\u9759\u6001\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u663E\u793A",developerDescription:"\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863","edit border color":"\u4FEE\u6539\u8FB9\u6846\u989C\u8272",successSyncButNoChange:"\u5F53\u524D\u914D\u7F6E\u4E0E\u4E91\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u8FB9\u6846\u989C\u8272","customThemeLabel.borderRadius":"\u8FB9\u6846\u5706\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u989C\u8272","customThemeLabel.backgroundColor":"\u80CC\u666F\u989C\u8272","customThemeLabel.zoom":"\u5B57\u4F53\u7F29\u653E\u6BD4\u4F8B (%)","customThemeLabel.opacity":"\u6587\u5B57\u4E0D\u900F\u660E\u5EA6 (%)",resetToDefaultColor:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u989C\u8272",resetToDefaultSettings:"\u6062\u590D\u4E3A\u9ED8\u8BA4\u8BBE\u7F6E",isTranslateTitle:"\u5F00\u542F\u7FFB\u8BD1\u7F51\u9875\u6807\u9898",isTranslateTitleDescription:"\u5F00\u542F\u540E\uFF0C\u7F51\u9875\u6807\u9898\u4F1A\u88AB\u7FFB\u8BD1",enableSearchEnhancement:"\u542F\u7528\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A",enableSearchEnhancementDescription:"\u5F00\u542F\u540E\uFF0C\u5728\u652F\u6301\u7684\u7F51\u7AD9\uFF08\u8C37\u6B4C\u65B0\u95FB\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u5173\u952E\u8BCD\uFF09\uFF0C\u96EA\u7403\uFF0C\u4E1C\u65B9\u8D22\u5BCC\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\u793E\u533A\uFF09\u53F3\u8FB9\u680F\u81EA\u52A8\u663E\u793A\u5BF9\u5E94\u82F1\u6587\u5173\u952E\u8BCD\u7684\u201C\u8C37\u6B4C\u65B0\u95FB\u201D\u641C\u7D22\u7ED3\u679C\u3002",verifyService:"\u70B9\u6B64\u6D4B\u8BD5\u670D\u52A1",verified:"\u9A8C\u8BC1\u6210\u529F","field.langs":"\u652F\u6301\u7684\u8BED\u8A00\u4EE3\u7801","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8BD1\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6570","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6570","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6587\u672C\u957F\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u6BB5\u843D\u6570","field.apiUrl":"\u81EA\u5B9A\u4E49 API \u63A5\u53E3\u5730\u5740","field.placeholderDelimiters":"\u4FDD\u7559\u7684\u5360\u4F4D\u7B26","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>\u81EA\u5B9A\u4E49\u63A5\u53E3\u63A5\u5165</a> \u9700\u8981\u53C2\u8003\u6587\u6863","description.limitPerMinute":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u5206\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.generalLimitPerSecond":"\u8BF7\u6C42\u6570\u8D85\u8FC7\u8BE5\u9650\u5236\u65F6\u4F1A\u8FDB\u5165\u6392\u961F\u72B6\u6001\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u949F\u5F00\u59CB\u3002","description.prompt":"\u4EE5\u7528\u6237\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u8350\uFF09, \u5C06\u4F1A\u5728\u5355\u72EC\u4F5C\u4E3A\u4E00\u6BB5\u53D1\u9001\u7ED9 OpenAI","description.maxTextLengthPerRequest":"\u6BCF\u6B21\u8BF7\u6C42\u6700\u5927\u5B57\u7B26\u6570\uFF0C\u592A\u5927\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C1D\u8BD5\u8C03\u6574\u8BE5\u9009\u9879\u6765\u4F18\u5316\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7EDF\u8EAB\u4EFD\u53D1\u9001\u7ED9 OpenAI \u7684\u5BF9\u8BDD\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u672C\u5185\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8BED\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6807\u8BED\u8A00","field.domain":"\u9886\u57DF","description.domain":"\u9ED8\u8BA4\u4E3A\uFF1Ageneral\u3002\u4EC5\u5728\u6709\u9053API\u63A7\u5236\u53F0\u5F00\u901A\u9886\u57DF\u5316\u7FFB\u8BD1\u7684\u60C5\u51B5\u4E0B\u53EF\u8BBE\u7F6E\uFF0C\u652F\u6301\u9886\u57DF\u89C1<1>\u8FD9\u91CC</1>","field.scene":"\u573A\u666F","description.scene":"\u9ED8\u8BA4\u4E3A\uFF1Ageneral\u3002\u4EC5\u5728\u963F\u91CC\u4E91API\u63A7\u5236\u53F0\u5F00\u901A\u673A\u5668\u7FFB\u8BD1\u4E13\u4E1A\u7248\u7684\u60C5\u51B5\u4E0B\u53EF\u8BBE\u7F6E\uFF0C\u652F\u6301\u573A\u666F\u89C1<1>\u8FD9\u91CC</1>","field.vocabId":"\u7528\u6237\u8BCD\u5178 ID","description.vocabId":"\u6307\u5B9A\u7684\u8BCD\u5178 out_id\uFF0C\u76EE\u524D\u652F\u6301\u82F1\u8BD1\u4E2D","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u4E3A gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u53D1\u9001\u7ED9\u7FFB\u8BD1\u670D\u52A1\u7684\u6BB5\u843D\u6570\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6570\u91CF\u8FC7\u591A\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u63A5\u53E3\u7684\u54CD\u5E94\u53D8\u6162","description.apiUrl":"\u8BF7\u6DFB\u52A0\u5177\u4F53\u5E26\u6709\u8DEF\u5F84\u7684\u7F51\u5740\uFF0C<1>\u66F4\u591A\u8BF4\u660E</1>",enabledExtension:"\u542F\u7528\u6269\u5C55",clickToDisableExtension:"\u70B9\u51FB\u7981\u7528\u6269\u5C55",clickToEnableExtension:"\u70B9\u51FB\u542F\u7528\u6269\u5C55",hasBeenDisabled:"\u5DF2\u7981\u7528","show password":"\u663E\u793A\u5BC6\u7801",customContent:"\u8F93\u5165\u81EA\u5B9A\u4E49\u6A21\u578B\u540D\u79F0",inputOptions:"\u8F93\u5165\u6846\u589E\u5F3A",mouseHoverOptions:"\u9F20\u6807\u60AC\u505C",modifyMouseHoverKey:"\u4FEE\u6539\u9F20\u6807\u60AC\u505C\u5FEB\u6377\u952E",enableInputTranslation:"\u662F\u5426\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",enableInputTranslationDescription:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165 {startingKey}{startingKey} \u4F60\u597D\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:"\u542F\u7528\u540E\uFF0C\u5728\u8F93\u5165\u6846\u76F4\u63A5\u8F93\u5165\uFF1A\u4F60\u597D\u4E16\u754C\uFF0C\u7136\u540E\u5FEB\u901F\u8FDE\u51FB{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguage:"\u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputTargetLanguageDescription:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00\uFF0C\u4E5F\u5C31\u662F {startingKey}{startingKey} \u4F5C\u4E3A\u89E6\u53D1\u8BCD\u7684\u9ED8\u8BA4\u8BED\u8A00",inputTargetLanguageDescriptionForNoneKey:"\u8F93\u5165\u6846\u7FFB\u8BD1\u7684\u9ED8\u8BA4\u76EE\u6807\u8BED\u8A00",inputStartingTriggerKeyTitle:"\u8BBE\u7F6E\u8F93\u5165\u6846\u90E8\u5206\u7FFB\u8BD1\u7684\u5206\u5272\u5B57\u7B26",inputStartingTriggerKeyDescription:"\u5F53\u4F60\u4E0D\u9700\u8981\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u7684\u65F6\u5019\uFF0C\u5206\u5272\u7B26\u5141\u8BB8\u4F60\u53EA\u7FFB\u8BD1 {startingKey}{startingKey} \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8BED\u8A00\u4EE3\u7801\uFF0C\u6BD4\u5982\uFF1A{startingKey}ja \u8868\u793A\u53EA\u7FFB\u8BD1 {startingKey}ja \u5230\u8F93\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206",inputStartingTriggerKeyDescriptionForNoneKey:"\u5F53\u524D\u8BBE\u7F6E\u4E3A\u65E0\u9700\u524D\u7F00\uFF0C\u6682\u65E0\u6CD5\u4F7F\u7528\u8F93\u5165\u6846\u7684\u90E8\u5206\u6587\u672C\u7FFB\u8BD1\u529F\u80FD",inputTrailingTriggerKeyTitle:"\u9009\u62E9\u4E00\u4E2A\u8F93\u5165\u7ED3\u675F\u7684\u89E6\u53D1\u5B57\u7B26",inputTrailingTriggerKeyDescription:"\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey} \u5C06\u4F1A\u5F00\u59CB\u7FFB\u8BD1",inputTrailingTriggerKeyTimeout:"\u8F93\u5165\u7ED3\u675F\u8FDE\u51FB\u89E6\u53D1\u7684\u95F4\u9694\u65F6\u95F4",inputTrailingTriggerKeyTimeoutDescription:"\u8BBE\u7F6E\u8F93\u5165\u7ED3\u675F\u8FDE\u51FB\u89E6\u53D1\u7684\u95F4\u9694\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09",spaceKey:"<\u7A7A\u683C\u952E>",noneKey:"\u65E0\u9700\u524D\u7F00\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u6587\u672C\u6846",inputTranslationBlockUrlsTitle:"\u5207\u52FF\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\u542F\u7528\u8F93\u5165\u6846\u589E\u5F3A",inputTranslationBlockUrlsDescription:"\u5728\u4EE5\u4E0B\u7F51\u5740\u4E2D\uFF0C\u8F93\u5165\u6846\u589E\u5F3A\u5C06\u4E0D\u4F1A\u751F\u6548",clickToSeeQuickDemo:"\u70B9\u51FB\u5C55\u5F00 30 \u79D2\u5FEB\u901F\u6559\u5B66\u89C6\u9891",inputHelperInfo:"\u8BF4\u660E\uFF1A\u6211\u4EEC\u7279\u522B\u9488\u5BF9\u5728\u4E2D\u6587\u8F93\u5165\u6CD5\u4E0B\u90E8\u5206\u89E6\u53D1\u5B57\u7B26\u4F1A\u53D8\u6210\u4E2D\u6587\u6807\u70B9\u7B26\u53F7\u8FD9\u4EF6\u4E8B\u505A\u4E86\u4F18\u5316\uFF0C\u6BD4\u5982\u641C\u72D7\u8F93\u5165\u6CD5\u4E0B / \u4F1A\u53D8\u6210\u987F\u53F7 \u3001\uFF0C\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u652F\u6301\u6240\u6709\u89E6\u53D1\u7B26\u5BF9\u5E94\u7684\u4E2D\u6587\u7B26\u53F7\uFF0C\u4E5F\u5C31\u662F\u8BF4 // \u3001\u3001 \u90FD\u4F1A\u88AB\u8BC6\u522B\u4E3A\u89E6\u53D1\u5B57\u7B26\u3002<br/><br/>\u540C\u65F6\u6211\u4EEC\u4E5F\u652F\u6301\u8BED\u8A00\u4EE3\u7801\u7684\u4E2D\u6587\u522B\u540D\u4F5C\u4E3A\u547D\u4EE4\uFF0C\u6BD4\u5982 /\u65E5\u6587 \u4F60\u597D\u4E16\u754C \u4F1A\u88AB\u7FFB\u8BD1\u4E3A\u65E5\u6587\uFF0C<1>\u70B9\u6B64\u67E5\u770B\u6240\u6709\u652F\u6301\u7684\u8BED\u8A00\u4EE3\u7801</1>\u3002",reloadCurrentPage:"\u8BF7\u5148\u5237\u65B0\u5F53\u524D\u9875\u9762\uFF0C\u518D\u5F00\u59CB\u7FFB\u8BD1",noLocalFilePermissionForPDF:"\u6682\u65E0\u6743\u9650\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u8BF7\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\uFF0C\u7136\u540E\u5BFC\u5165\u672C\u5730\u6587\u4EF6",noPermissionForThisPage:"\u26A0\uFE0F \u6682\u65E0\u6743\u9650\u7FFB\u8BD1\u5F53\u524D\u9875\u9762",retryAllParagraphs:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",retryAllButton:"\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D",errorTooltipTitle:"\u70B9\u51FB\u67E5\u770B\u9519\u8BEF\u539F\u56E0",errorModalTitle:"\u7FFB\u8BD1\u670D\u52A1\u6216\u7F51\u7EDC\u4F3C\u4E4E\u51FA\u4E86\u70B9\u95EE\u9898...",disableConfirm:"\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A\u8BBE\u7F6E",disableOnce:"\u672C\u6B21\u7981\u7528",disableGlobal:"\u6C38\u4E45\u7981\u7528",disableTint:"* \u4F60\u53EF\u4EE5\u5728 {option} \u4E2D\u91CD\u65B0\u542F\u7528\u3002",searchEnhancementNotes:"\u6211\u4EEC\u53D1\u73B0\uFF0C\u4E2D\u6587\u5173\u952E\u8BCD\u548C\u82F1\u6587\u5173\u952E\u8BCD\u7684\u65B0\u95FB\u7ED3\u679C\u6709\u975E\u5E38\u5927\u7684\u4E0D\u540C\uFF0C\u5728\u542F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u53CC\u8BED\u4FE1\u606F\u589E\u5F3A\u529F\u80FD\u540E\uFF0C\u6211\u4EEC\u4F1A\u5728\u652F\u6301\u7684\u7F51\u7AD9\uFF08\u8C37\u6B4C\u65B0\u95FB\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u5173\u952E\u8BCD\uFF09\uFF0C\u96EA\u7403\uFF0C\u4E1C\u65B9\u8D22\u5BCC\u7F51\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\uFF09\u81EA\u52A8\u7528\u82F1\u6587\u4E3A\u4F60\u641C\u7D22\u540C\u6837\u7684\u5173\u952E\u8BCD\u5E76\u5C55\u793A\u5728\u53F3\u4FA7\u3002\u5982\u679C\u4F60\u4E0D\u9700\u8981\u8BE5\u529F\u80FD\u7684\u8BDD\uFF0C\u53EF\u4EE5\u9009\u62E9\u7981\u7528\u5B83\u3002",option:"\u8BBE\u7F6E",saveSettings:"\u4FDD\u5B58\u8BBE\u7F6E",closeModal:"\u5173\u95ED\u7A97\u53E3",enableInputTranslationWithoutTriggerKeyTitle:"\u542F\u7528\u5FEB\u901F\u8FDE\u51FB 3 \u6B21{trailingKey}\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u6574\u4E2A\u8F93\u5165\u6846\u4E3A{inputTargetLanguage}",enableInputTranslationWithoutTriggerKeyDescription:"\u5982\u9700\u6307\u5B9A\u76EE\u6807\u8BED\u8A00\uFF0C\u8BF7\u5728\u524D\u9762\u52A0\u4E0A\u8BED\u8A00\u4EE3\u7801\uFF0C\u5982\uFF1Aja \u4F60\u597D\u4E16\u754C",mouseHoverShortcutPlaceholder:"\u5982\uFF1AShift",deepLProName:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1 Pro \u4F1A\u5458 (\u63A8\u8350)",deepLProDescription:"\u5F53\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",deeplProDescriptionForNormal:"\u65E0\u9700\u4EFB\u4F55\u8BBE\u7F6E\uFF0C\u4F1A\u5458\u767B\u5F55\u540E\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u4F1A\u5458</1>",deepLCustomDescription:"\u9700\u8981\u56FD\u5916\u4FE1\u7528\u5361\uFF0C\u5728 <1>DeepL</1> \u5B98\u65B9\u5F00\u901A\uFF0C\u70B9\u51FB\u67E5\u770B<2>\u6587\u6863</2>",deepLCustomName:"\u81EA\u5B9A\u4E49 Auth Key",chooseProviderLabel:"\u9009\u62E9\u4E00\u4E2A\u670D\u52A1\u63D0\u4F9B\u5546",openaiProName:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1 Pro \u4F1A\u5458 (\u63A8\u8350)",openaiProDescription:"\u5F53\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",openaiProDescriptionForNormal:"\u65E0\u9700\u4EFB\u4F55\u8BBE\u7F6E\uFF0C\u4F1A\u5458\u767B\u5F55\u540E\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u4F1A\u5458</1>",openaiCustomDescription:"\u53EF\u5728 OpenAI, Azure OpenAI, \u6216\u5176\u4ED6\u7B2C\u4E09\u65B9\u670D\u52A1\u83B7\u53D6\uFF0C<1>\u70B9\u6B64\u67E5\u770B\u6587\u6863</1>",openaiCustomName:"\u81EA\u5B9A\u4E49 API Key",needLoginAction:"(\u5F00\u901A\u4F1A\u5458\u6216\u81EA\u5B9A\u4E49)",goLoginOrAction:"(\u5F00\u901A\u4F1A\u5458\u6216\u53BB\u8BBE\u7F6E)",yearly:"\u8FDE\u7EED\u5305\u5E74",quarterly:"\u8FDE\u7EED\u5305\u5B63",monthly:"\u8FDE\u7EED\u5305\u6708",yearlyForOnce:"\u4E00\u6B21\u6027\u5E74\u5EA6\u5957\u9910",monthlyForOnce:"\u4E00\u6B21\u6027\u6708\u5EA6\u5957\u9910",daily:"\u8FDE\u7EED\u5305\u65E5",year:"\u8FDE\u7EED\u5305\u5E74",quarter:"\u8FDE\u7EED\u5305\u5B63",month:"\u8FDE\u7EED\u5305\u6708",day:"\u8FDE\u7EED\u5305\u65E5",onetime_7day:"7 \u5929\u4F53\u9A8C\u5305",currentPlanDescriptionForFree:"\u5F53\u524D\u5957\u9910\uFF1A\u514D\u8D39",currentPlanDescriptionForContinuous:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u81EA\u52A8\u7EED\u8D39",currentPlanDescriptionForAutoRenewCaceling:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F",currentYearlyPlanDescriptionForAutoRenewCacelingWithRealPaiedUser:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F\u3002<br/><1>\u70B9\u6B64\u7BA1\u7406\u7EED\u8D39\u65B9\u6848</1>",currentYearlyPlanDescriptionForAutoRenewCacelingWithAdmin:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C\u5230\u671F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u7EED\u671F\u3002<br/><1>\u70B9\u6B64\u542F\u7528\u8FDE\u7EED\u5305\u5E74</1>",currentPlanDescriptionForOneTime:"\u5F53\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C06\u4E8E {endAt} \u5230\u671F\uFF0C<1>\u70B9\u6B64\u5347\u7EA7\u4E3A\u5E74\u8D39</1>\u6216<2>\u6708\u8D39</2>\u4F1A\u5458",upgradePlan:"\u70B9\u6B64\u5347\u7EA7\u4E3A Pro \u4F1A\u5458",upgradeToPro:"\u5347\u7EA7\u4E3A Pro \u4F1A\u5458","popup.openPro":"\u5347\u7EA7\u4E3A Pro \u4F1A\u5458\u540E\u53EF\u4EE5\u7545\u4EAB DeepL \u548C OpenAI \u7FFB\u8BD1\uFF0C\u70B9\u6B64\u5347\u7EA7","popup.openProForPro":"\u60A8\u662F Pro \u4F1A\u5458\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528 DeepL \u548C OpenAI \u7FFB\u8BD1",currentAccount:"\u5F53\u524D\u8D26\u6237",enableAutoSyncUserSettings:"\u542F\u7528\u591A\u8BBE\u5907\u81EA\u52A8\u4E91\u540C\u6B65",modalEnableInputTranslationTitle:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u8F93\u5165\u6846\u7FFB\u8BD1\u63D0\u793A",modalEnableInputTranslationDesc:"\u60A8\u521A\u521A\u901A\u8FC7\u5FEB\u901F\u8FDE\u51FB 3 \u6B21\u7A7A\u683C\u952E\u89E6\u53D1\u4E86\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u7684\u8F93\u5165\u6846\u7FFB\u8BD1\uFF0C\u8F93\u5165\u6846\u7684\u5185\u5BB9\u5C06\u88AB\u7FFB\u8BD1\u4E3A\u9ED8\u8BA4\u7684\u76EE\u6807\u8BED\u8A00\u3002\u901A\u8FC7 Ctrl+Z \u53EF\u4EE5\u64A4\u9500\u7FFB\u8BD1\u3002<br /><br />\u5982\u679C\u8FD9\u662F\u4E00\u4E2A\u5931\u8BEF\uFF0C\u4E0D\u7528\u62C5\u5FC3\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u672C\u6B21\u7981\u7528\uFF0C\u6216\u8005\u6C38\u4E45\u7981\u7528\u8F93\u5165\u6846\u7FFB\u8BD1\u3002",saveAndNotShowAgain:"\u4FDD\u5B58\u4E14\u4E0D\u518D\u63D0\u793A",disableInputTranslationTips:"* \u4F60\u4E5F\u53EF\u4EE5\u5728 {option} \u4E2D\u8BBE\u7F6E\u5176\u4ED6\u5FEB\u6377\u952E\u6765\u89E6\u53D1\uFF0C{learnMore}\u3002",learnMore:"\u70B9\u6B64\u4E86\u89E3\u66F4\u591A",continueEnalbeInputTranslation:"\u7EE7\u7EED\u542F\u7528\u8F93\u5165\u6846\u7FFB\u8BD1",autoRenewTrialSuffix:'\uFF08\u8BD5\u7528\u4E2D\uFF0C<a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">\u7ACB\u523B\u5347\u7EA7\u4E3A\u6B63\u5F0F\u4F1A\u5458</a>\uFF09',upgradeFromTrialTitle:"\u5347\u7EA7\u4E3A\u6B63\u5F0F\u4F1A\u5458",subtitle:"\u89C6\u9891\u5B57\u5E55",youtubeService:"\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u89C6\u9891\u5B57\u5E55\u7FFB\u8BD1\u670D\u52A1","subtitle.disabledSubtitle":"\u6C38\u4E45\u7981\u7528\u89C6\u9891\u5B57\u5E55\u529F\u80FD","subtitle.disabledSubtitleDescription":"\u5982\u679C\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u7684\u89C6\u9891\u5B57\u5E55\u548C\u5176\u4ED6\u6269\u5C55\u6709\u51B2\u7A81\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u6C38\u4E45\u7981\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u7684\u89C6\u9891\u5B57\u5E55\u529F\u80FD\u6216\u8005\u5378\u8F7D\u5176\u4ED6\u51B2\u7A81\u7684\u6269\u5C55","subtitle.autoEnableSubtitle":"\u81EA\u52A8\u4F7F\u7528\u53CC\u8BED\u5B57\u5E55","subtitle.autoEnableSubtitleDescription":"\u542F\u7528\u540E\uFF0C\u5F53\u89C6\u9891\u64AD\u653E\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u663E\u793A\u53CC\u8BED\u5B57\u5E55\uFF0C\u5426\u5219\u9700\u8981\u70B9\u51FB\u7FFB\u8BD1\u6309\u94AE\u624D\u4F1A\u663E\u793A\u3002","subtitle.preTranslation":"\u4F7F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8BD1\u6765\u7FFB\u8BD1\u5B57\u5E55","subtitle.preTranslationDescription":"\u542F\u7528\u540E\u4F1A\u4F18\u5148\u7528\u4E0B\u9762\u7684\u6307\u5B9A\u7684\u7FFB\u8BD1\u670D\u52A1\u63D0\u524D\u7FFB\u8BD1\u6574\u4E2A\u5B57\u5E55\uFF0C1 \u5C0F\u65F6\u7684\u89C6\u9891\u5927\u6982\u6D88\u8017 5\u4E07 Tokens \u6216 \u5B57\u7B26\uFF0C\u8BF7\u914C\u60C5\u4F7F\u7528\uFF1B\u5173\u95ED\u540E\u5219\u4F18\u5148\u4F7F\u7528\u539F\u89C6\u9891\u81EA\u5E26\u7684\u673A\u7FFB\u5B57\u5E55","subtitle.humanSubtitlesPreferred":"\u4F18\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55","subtitle.humanSubtitlesPreferredDescription":"\u5F53\u89C6\u9891\u6709\u76EE\u6807\u8BED\u8A00\u4EBA\u5DE5\u5B57\u5E55\u65F6\uFF0C\u4F18\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55\uFF08\u63A8\u8350\uFF09",videoSubtitleTranslationDescription:"\u4E3A\u89C6\u9891\u5B57\u5E55\u5355\u72EC\u6307\u5B9A\u4E00\u4E2A\u7FFB\u8BD1\u670D\u52A1",subtitleTranslating:"\u6B63\u5728\u4F7F\u7528 {service} \u670D\u52A1\u7FFB\u8BD1\u5B57\u5E55\u4E2D\uFF0C\u8BF7\u7A0D\u7B49...\uFF08\u6C89\u6D78\u5F0F\u7FFB\u8BD1\uFF09",subtitleLoading:"\u6B63\u5728\u52A0\u8F7D\u5B57\u5E55...",bilingual:"\u53CC\u8BED","field.action":"\u662F\u5426\u542F\u7528\u767E\u5EA6\u672F\u8BED","description.action":"\u542F\u7528\u540E\u4F1A\u5728\u8BF7\u6C42\u4E2D\u52A0\u5165 action=1 \u7684\u53C2\u6570\uFF0C\u4EE5\u4FBF\u544A\u77E5\u767E\u5EA6\u542F\u7528\u672F\u8BED\uFF0C<1>\u66F4\u591A\u8BF4\u660E\u8BF7\u53C2\u8003\u5B98\u65B9\u6587\u6863</1>",closeQuickTranslation:"\u5173\u95ED\u60AC\u6D6E\u7403","closeQuickTranslation.untilNext":"\u672C\u6B21\u5173\u95ED\u76F4\u5230\u4E0B\u6B21\u8BBF\u95EE","closeQuickTranslation.currentWebsite":"\u5F53\u524D\u7F51\u7AD9\u7981\u7528","closeQuickTranslation.alwaysClose":"\u6C38\u4E45\u7981\u7528","closeQuickTranslation.settingOpen":"\uFF08\u53EF\u5728<1>\u8BBE\u7F6E\u9875</1>\u5F00\u542F\uFF09","closeQuickTranslation.cancel":"\u53D6\u6D88","closeQuickTranslation.confirm":"\u786E\u5B9A","floatBall.popup":"\u6253\u5F00\u5FEB\u6377\u8BBE\u7F6E\u9762\u677F","floatBall.translate":"\u70B9\u51FB\u7FFB\u8BD1\u8BE5\u9875\u9762","floatBall.showOriginal":"\u70B9\u51FB\u5207\u6362\u56DE\u539F\u6587","floatBall.close":"\u5173\u95ED\u60AC\u6D6E\u7403","floatBallOptions.enableDescPc":"\u542F\u7528\u9875\u9762\u60AC\u6D6E\u7403\u540E\uFF0C\u4F1A\u5728\u9875\u9762\u53F3\u4FA7\u663E\u793A\u4E00\u4E2A\u5FEB\u6377\u7FFB\u8BD1\u6309\u94AE\uFF0C\u70B9\u51FB\u5373\u53EF\u7FFB\u8BD1","floatBallOptions.enableDesc":"\u5173\u95ED\u60AC\u6D6E\u7403\u540E\uFF0C\u53EF\u4EE5\u7528{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u60AC\u6D6E\u7403\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","description.azureApiUrl":"\u586B\u5199\u81EA\u5B9A\u4E49\u7684API\u63A5\u53E3\u5730\u5740",shareBtnTitle:"\u70B9\u51FB\u5206\u4EAB\u8BE5\u53CC\u8BED\u9875\u9762\u7ED9\u670B\u53CB","floatBall.share":"\u5206\u4EAB\u9875\u9762",confirmSupportMouse:"\u5F3A\u5236\u542F\u7528\u9F20\u6807\u652F\u6301",confirmSupportMouseDescription:"\u68C0\u6D4B\u5230\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u9F20\u6807\u529F\u80FD\uFF0C\u662F\u5426\u5F3A\u5236\u542F\u7528\u9F20\u6807\u652F\u6301\uFF1F",sampleTargetText:"\u957F\u591C\u5C06\u81F3\uFF0C\u6211\u4ECE\u4ECA\u5F00\u59CB\u5B88\u671B\uFF0C\u81F3\u6B7B\u65B9\u4F11\u3002\u6211\u5C06\u4E0D\u5A36\u59BB\u3001\u4E0D\u5C01\u5730\u3001\u4E0D\u751F\u5B50\u3002\u6211\u5C06\u4E0D\u6234\u5B9D\u51A0\uFF0C\u4E0D\u4E89\u8363\u5BA0\u3002\u6211\u5C06\u5C3D\u5FE0\u804C\u5B88\uFF0C\u751F\u6B7B\u4E8E\u65AF\u3002",sampleSourceText:"Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post.","subtitle.supportedSites":"\u5DF2\u652F\u6301\u5728\u8FD9\u4E9B\u7F51\u7AD9\u4F7F\u7528\u53CC\u8BED\u5B57\u5E55\uFF08\u6CE8\u610F\uFF1A\u7531\u4E8E\u6280\u672F\u9650\u5236\uFF0C\u90E8\u5206\u7F51\u7AD9\u5728\u9996\u6B21\u5F00\u542F\u5B57\u5E55\u540E\u9700\u8981\u91CD\u65B0\u5237\u65B0\u9875\u9762\uFF0C\u6216\u8005\u9700\u7B49\u5F85\u7FFB\u8BD1\u5B8C\u6210\u4EE5\u663E\u793A\u53CC\u8BED\u5B57\u5E55\uFF09\uFF1A",viewWithImmersiveTranslate:"\u53CC\u8BED\u7248\u672C(\u6C89\u6D78\u5F0F\u7FFB\u8BD1)",errorReason:"\u9519\u8BEF\u539F\u56E0\uFF1A{message}","proQuotaExceededError.onetime7day":'\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u4EE5\u4E0B\u65B9\u5F0F\u89E3\u51B3\uFF1A<br/><br/>1. \u5207\u6362\u5230 {anotherService} \u6216\u5176\u4ED6\u7FFB\u8BD1\u670D\u52A1<br/>2. \u5347\u7EA7\u4E3A<a class="{brandId}-primary-link" href="{href}" target="_blank">\u6708\u5EA6/\u5E74\u5EA6\u4F1A\u5458</a>',"proQuotaExceededError.trial":'\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u4EE5\u4E0B\u65B9\u5F0F\u89E3\u51B3\uFF1A<br/><br/>1. \u5207\u6362\u5230 {anotherService} \u6216\u5176\u4ED6\u7FFB\u8BD1\u670D\u52A1<br/>2. \u7ACB\u523B<a class="{brandId}-primary-link" href="{href}" target="_blank">\u5347\u7EA7\u4E3A\u6B63\u5F0F\u4F1A\u5458</a>',"proQuotaExceededError.nonTrial":'\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u4EE5\u4E0B\u65B9\u5F0F\u89E3\u51B3\uFF1A<br/><br/>1. \u5207\u6362\u5230 {anotherService} \u6216\u5176\u4ED6\u7FFB\u8BD1\u670D\u52A1<br/>2. \u8D2D\u4E70<a class="{brandId}-primary-link" href="{href}" target="_blank"> {translationService} \u989D\u5916\u6D41\u91CF\u5305</a>',"proQuotaExceededError.resetTime":"<br/>3. \u989D\u5EA6\u91CD\u7F6E\u65F6\u95F4\uFF1A{resetTime}"};var tg={nologin:"\u672A\u767B\u9304",loginForSafari:"\u767B\u5165\u6216\u8A3B\u518A",login:"\u767B\u9304",manageAccount:"\u7BA1\u7406\u8CEC\u6236",openPremium:"\u958B\u901A\u6703\u54E1",logout:"\u9000\u51FA",curentPlan:"\u7576\u524D\u5957\u9910",endAt:"\u5230\u671F",endAuto:"\u81EA\u52D5\u7E8C\u671F",lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u5143\u6578\u91CF","translate-pdf":"\u9EDE\u9078\u7FFB\u8B6F PDF","noSupportTranslate-pdf":"\u8173\u672C\u4E0D\u652F\u63F4\uFF0C\u8ACB\u4F7F\u7528\u64F4\u5145\u5957\u4EF6","translate-firefox-local-pdf":"\u9EDE\u64CA\u53BB\u5C0E\u5165PDF",enableLineBreak:"\u958B\u555F\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D0A\u52A9\u958B\u767C\u8005 (\u6708\u4ED8\u6216\u50C5\u8D0A\u52A9\u4E00\u6B21\u5747\u53EF)",help:"\u8AAA\u660E",browserShortcutsNoteForFirefox:"Firefox \u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u9644\u52A0\u5143\u4EF6\u7BA1\u7406\u9801\u9762 \u300Cabout:addons\u300D\uFF0C\u7136\u5F8C\u9EDE\u9078\u300C\u8A2D\u5B9A\u5716\u793A\u300D\uFF0C\u518D\u9EDE\u9078\u300C\u7BA1\u7406\u64F4\u5145\u5957\u4EF6\u5FEB\u901F\u9375\u300D\u5373\u53EF\u8A2D\u5B9A",browserShortcutsNoteForChrome:"Chromium \u6838\u5FC3\u700F\u89BD\u5668\u8B8A\u66F4\u5FEB\u901F\u9375\u9700\u8981\u958B\u555F\u64F4\u5145\u529F\u80FD\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u300C\u9375\u76E4\u5FEB\u901F\u9375\u300D\u9801\u9762(chrome://extensions/shortcuts)\u8A2D\u5B9A\uFF0C\u9EDE\u9078\u4E0B\u65B9\u6309\u9215\u524D\u5F80\u5FEB\u901F\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u81EA\u5B9A\u4E49\u5FEB\u901F\u9375\u683C\u5F0F\u70BA\uFF1A (\u6CA1\u6709\u505A\u81EA\u52A8\u8BC6\u522B\uFF0C\u8BF7\u76F4\u63A5\u8F93\u5165)\uFF1A",enableLineBreakDescription:"\u555F\u7528\u5F8C\uFF0C\u5C07\u6703\u5728\u9577\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u5B57\u5143\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.shortBrandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F: \u96D9\u8A9E\u5C0D\u7167\u7DB2\u9801\u7FFB\u8B6F & PDF\u6587\u6A94\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u652F\u6301PDF\u7FFB\u8B6F\uFF0C\u96D9\u8A9EEpub\u96FB\u5B50\u66F8\u88FD\u4F5C\uFF0CYoutube/Netflix/Udemy \u7B49\u5E73\u53F0\u96D9\u8A9E\u5B57\u5E55\uFF0C\u652F\u6301Deepl/Google\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u514D\u8CBB\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleOnlyTransation":"\u7FFB\u8B6F\u4E26\u96B1\u85CF\u539F\u6587/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.shareToDraft":"\u5206\u4EAB\u96D9\u8A9E\u9801\u9762","browser.openOptionsPage":"\u958B\u555F\u8A2D\u5B9A\u9801\u9762","browser.toggleTranslationMask":"\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u6A5F PDF \u6A94\u6848","browser.openEbookViewer":"\u95B1\u8B80\u672C\u6A5F\u96FB\u5B50\u66F8","browser.openEbookBuilder":"\u88FD\u4F5C\u96D9\u8A9E EPUB \u96FB\u5B50\u66F8","browser.translateLocalHtmlFile":"\u7FFB\u8B6F HTML/txt \u6A94\u6848","browser.donateContext":"\u4E86\u89E3\u8D0A\u52A9\u798F\u5229","browser.translateLocalSubtitleFile":"\u7FFB\u8B6F\u5B57\u5E55\u6A94\u6848",confirmResetConfig:"\u4F60\u78BA\u5B9A\u8981\u91CD\u8A2D\u8A2D\u5B9A\u55CE\uFF1F",translationLineBreakSettingTitle:"\u8B6F\u6587\u63DB\u884C\u8A2D\u5B9A",smartLineBreak:"\u667A\u6167\u63DB\u884C",alwaysLineBreak:"\u7E3D\u662F\u63DB\u884C",isShowContextMenu:"\u5C07\u7DB2\u9801\u7FFB\u8B6F\u529F\u80FD\u52A0\u5165\u53F3\u9375\u9078\u55AE",toggleBeta:"\u958B\u555F Beta \u6E2C\u8A66\u529F\u80FD",betaDescription:"\u555F\u7528\u4ECD\u5728\u5BE6\u9A57\u7684\u529F\u80FD\u4EE5\u53CA\u6E2C\u8A66\u4E2D\u7684\u7FFB\u8B6F\u670D\u52D9\u3002\u52A0\u5165 <1>Telegram \u7FA4\u7D44</1>\u4E86\u89E3\u66F4\u591A\u3002",translationLineBreakSettingDescription:"\u7E3D\u662F\u63DB\u884C\u9069\u7528\u65BC\u8F03\u5C11\u5167\u5BB9\u7684\u7248\u9762\uFF0C\u66F4\u6574\u9F4A\u3002(\u5728\u5167\u5BB9\u8F03\u591A\u7684\u9577\u6BB5\u843D(\u8D85\u904E {count} \u500B\u5B57\u5143) \u4F7F\u7528\u667A\u6167\u63DB\u884C\u6703\u66F4\u7701\u7A7A\u9593)",tempTranslateDomainTitle:"\u81E8\u6642\u958B\u555F\u7DB2\u7AD9\u7FFB\u8B6F\u7684\u6642\u9577",tempTranslateDomainDescription:"\u7576\u624B\u52D5\u7FFB\u8B6F\u67D0\u500B\u7DB2\u9801\u7684\u6642\u5019\uFF0C\u81E8\u6642\u958B\u555F\u8A72\u7DB2\u7AD9\u70BA\u81EA\u52D5\u7FFB\u8B6F",xMinutes:"{count} \u5206\u9418",disabled:"\u505C\u7528",changelog:"\u66F4\u65B0\u8A18\u9304",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u6642\u89F8\u6478\u5247\u986F\u793A/\u96B1\u85CF\u8B6F\u6587\u6A21\u7CCA\u6548\u679C",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"\u591A\u6307\u540C\u6642\u89F8\u78B0\u87A2\u5E55\u5247\u7FFB\u8B6F\u7DB2\u9801(\u50C5\u8B6F\u6587)/\u986F\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u70BA\u7DB2\u57DF\u540D\u7A31\uFF0C\u540C\u6642\u652F\u63F4\u842C\u7528\u5B57\u5143\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u5B9A",clickToExpandConfig:"\u5C55\u958B\u76EE\u524D\u8A2D\u5B9A",import:"\u5F9E\u6A94\u6848\u532F\u5165",export:"\u532F\u51FA\u70BA\u6A94\u6848",toggleDebug:"\u5728\u4E3B\u63A7\u53F0\u986F\u793A\u5075\u932F\u8A18\u9304","fingers.0":"\u95DC\u9589","fingers.2":"\u96D9\u6307\u89F8\u6478","fingers.3":"\u4E09\u6307\u89F8\u6478","fingers.4":"\u56DB\u6307\u89F8\u6478","fingers.5":"\u4E94\u6307\u89F8\u6478",mouseHoldKey:"+ {key} \u7FFB\u8B6F/\u9084\u539F\u8A72\u6BB5",mouseHoldKeyAuto:"\u76F4\u63A5\u7FFB\u8B6F\u8A72\u6BB5",mouseHoldKeyOff:"\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5",mouseHoldKeyOther:"\u81EA\u5B9A\u7FA9\u5FEB\u6377\u9375(\u6253\u958B\u8A2D\u7F6E)",mouseHoldKeyCustomKey:"{key} \u7FFB\u8B6F/\u9084\u539F\u8A72\u6BB5",mouseHoverHoldKey:"\u9F20\u6A19\u6ED1\u904E\u540C\u6642\u6309\u4E0B X \u9375\u7FFB\u8B6F\u6BB5\u843D","mouse-translate":"\u9F20\u6A19\u6ED1\u904E",document:"\u8AAA\u660E\u6587\u4EF6",resetSuccess:"\u91CD\u8A2D\u6240\u6709\u8A2D\u5B9A\u6210\u529F",resetThisSuccess:"\u91CD\u8A2D\u6210\u529F",saved:"\u5132\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u532F\u5165\u8A2D\u5B9A",goAdvancedSettings:"\u524D\u5F80\u9032\u968E\u8A2D\u5B9A\u9801\u9762",goAdvancedInterfaceSettings:"\u524D\u5F80\u81EA\u8A02\u8A2D\u5B9A\u9801\u9762",advanced:"\u9032\u968E\u8A2D\u5B9A",advancedDescription:"\u6B63\u5E38\u60C5\u6CC1\u7121\u9700\u8A2D\u5B9A\uFF0C\u4FDD\u6301\u9810\u8A2D\u5373\u53EF\u3002\u50C5\u91DD\u5C0D\u66F4\u5C08\u696D\u7684\u4F7F\u7528\u8005\uFF0C\u63D0\u4F9B\u66F4\u500B\u4EBA\u5316\u7684\u8A2D\u5B9A\u9805\u76EE\u3002",developer:"\u958B\u767C\u8005\u8A2D\u5B9A",donateCafe:"\u50F9\u683C","translate to the bottom of the page":"\u9032\u5165\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u56DE\u5831",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u555F\u7528\u5F8C\uFF0C\u9032\u5165\u7DB2\u9801\u5C07\u7ACB\u5373\u7FFB\u8B6F\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\u3002\u95DC\u9589\u5247\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u555F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6240\u6709\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\u3002\u95DC\u9589\u5247\u4F7F\u7528\u9810\u8A2D\u7684\u667A\u6167\u8FA8\u8B58\uFF0C\u50C5\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\u3002(\u4E0D\u63A8\u85A6\u958B\u555F)","the number of characters to be translated first":"\u76F4\u63A5\u7FFB\u8B6F\u9801\u9762\u524D\u591A\u5C11\u500B\u5B57\u5143\uFF0C\u800C\u7121\u9700\u7B49\u5F85\u6372\u52D5\u81F3\u53EF\u898B\u5340\u57DF","interface language":"\u4ECB\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u901F\u9375",modify:"\u8B8A\u66F4\u5FEB\u901F\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u9996\u9801",more:"\u66F4\u591A",moreOptions:"\u5C55\u958B\u66F4\u591A\u81EA\u8A02\u9078\u9805",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u6240\u6709\u5340\u57DF",changeToTranslateTheMainPage:"\u5207\u63DB\u70BA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF",changeToOnlyTranslationMode:"\u5207\u63DB\u70BA\u50C5\u986F\u793A\u8B6F\u6587",changeToDualTranslationMode:"\u5207\u63DB\u70BA\u96D9\u8A9E\u7FFB\u8B6F",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u6167\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u6A5F\u898F\u5247\u5DF2\u70BA\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u5B98\u65B9\u898F\u5247",localVersionIsTooOld:"\u672C\u6A5F\u5957\u4EF6\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u5957\u4EF6\u81F3 {minVersion} \u6216\u66F4\u65B0\u7684\u7248\u672C\u518D\u5617\u8A66\u540C\u6B65",badUserscriptBrowser:"\u76EE\u524D\u700F\u89BD\u5668\u7121\u6CD5\u6B63\u78BA\u5BE6\u73FE\u6CB9\u7334\u5957\u4EF6\u7684\u4ECB\u9762\uFF0C\u8ACB\u4F7F\u7528\u5176\u4ED6<1>\u652F\u63F4\u6CB9\u7334\u5957\u4EF6</1>\u7684\u700F\u89BD\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u6709\u65B0\u7248\u672C\u53EF\u7528",theLocalExtensionIsUpToUpdate:"\u76EE\u524D\u5957\u4EF6\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u91CD\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u76EE\u524D\u898F\u5247\u7248\u672C",calculating:"\u6B63\u5728\u8A08\u7B97",unknownError:"\u672A\u77E5\u7684\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u53D6\u5F97\u9060\u7AEF\u898F\u5247",enableAlphaSuccess:"\u5DF2\u555F\u7528 Alpha \u529F\u80FD",disableAlphaSuccess:"\u5DF2\u505C\u7528 Alpha \u529F\u80FD",cacheSize:"\u5FEB\u53D6\u5927\u5C0F\uFF1A",cleaning:"\u6B63\u5728\u6E05\u7406",cleanCache:"\u6E05\u9664\u5FEB\u53D6",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"(\u524D\u5F80\u8A2D\u5B9A)",goSettings:"\u524D\u5F80\u8A2D\u5B9A",needActionForOptions:"(\u9700\u8A2D\u5B9A)",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u7576\u524D\u7DB2\u7AD9",autoEnableSubtitle:"\u81EA\u52D5\u958B\u555F\u96D9\u8A9E\u5B57\u5E55",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F {language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F {language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",alwaysTranslateSomeSiteOrWildSite:"\u7E3D\u662F\u7FFB\u8B6F\u7DB2\u7AD9",alwaysTranslateSomePage:"\u7E3D\u662F\u7FFB\u8B6F\u8A72\u7DB2\u9801",add:"\u65B0\u589E",default:"\u9810\u8A2D",forThisLanguage:"\u91DD\u5C0D\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165 URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u5B83\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u5B9A\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4F60\u60F3\u7528\u7684\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u6B63\u5728\u7FFB\u8B6F",Error:"\u932F\u8AA4",allowCacheTranslations:"\u555F\u7528\u672C\u6A5F\u7FFB\u8B6F\u5FEB\u53D6\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8981\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u7BC4\u4F8B",interface:"\u4ECB\u9762\u8A2D\u5B9A",import_export:"\u532F\u5165/\u532F\u51FA",import_export_title:"\u532F\u5165/\u532F\u51FA\u8A2D\u5B9A",syncToGoogleDrive:"\u7ACB\u5373\u8207 Google Drive \u540C\u6B65",floatBallOptions:"\u61F8\u6D6E\u7403\u8A2D\u7F6E","floatBallOptions.enable":"\u555F\u7528\u61F8\u6D6E\u7403","floatBallOptions.blockUrls":"\u7981\u7528\u7DB2\u7AD9","floatBallOptions.add":"\u6DFB\u52A0","floatBallOptions.blockUrlDesc":"\u7576\u9047\u5230\u4EE5\u4E0B\u7DB2\u7AD9\u6642\u4E0D\u986F\u793A\u61F8\u6D6E\u7403","floatBallOptions.clickType":"\u9EDE\u64CA\u884C\u70BA","floatBallOptions.clickTypeDesc":"\u61F8\u6D6E\u7403\u5716\u6A19\u9EDE\u64CA\u6642\u7684\u884C\u70BA","floatBallOptions.clickPopup":"\u986F\u793A\u7FFB\u8B6F\u9762\u677F","floatBallOptions.clickTranslate":"\u7FFB\u8B6F/\u986F\u793A\u539F\u6587","floatBallOptions.fixedPosition":"\u56FA\u5B9A\u4F4D\u7F6E","floatBallOptions.fixedPositionDesc":"\u61F8\u6D6E\u7403\u5728\u7A97\u53E3\u5DE6\u5074\u9084\u662F\u53F3\u5074","floatBallOptions.fixedPositionLeft":"\u5DE6\u5074","floatBallOptions.fixedPositionRight":"\u53F3\u5074",previewAllThemes:"\u9810\u89BD\u5168\u90E8\u6A23\u5F0F","translationTheme.none":"\u7121","translationTheme.grey":"\u9ED1\u7070\u8272","translationTheme.dashed":"\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u5E95\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u6846\u7DDA","translationTheme.solidBorder":"\u5BE6\u7DDA\u6846\u7DDA","translationTheme.underline":"\u76F4\u7DDA\u5E95\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C\uFF08\u5B78\u7FD2\u6A21\u5F0F\uFF09","translationTheme.opacity":"\u900F\u660E\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u9694\u7DDA","translationTheme.highlight":"\u9192\u76EE\u63D0\u793A","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.marker2":"\u99AC\u514B\u7B462","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDashed":"\u7CFB\u7D71\u5167\u5EFA\u7834\u6298\u865F\u5E95\u7DDA","translationTheme.nativeDotted":"\u7CFB\u7D71\u5167\u5EFA\u9EDE\u72C0\u5E95\u7DDA","translationTheme.nativeUnderline":"\u7CFB\u7D71\u5167\u5EFA\u76F4\u7DDA\u5E95\u7DDA","translationTheme.wavy":"\u6CE2\u5F62\u66F2\u7DDA","translationServices.custom":"\u81EA\u5B9A\u7FA9API","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.tenAlpha":"\u9A30\u8A0A\u7FFB\u8B6F\u541B(Alpha)","translationServices.google":"Google \u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeepLX(Beta)","translationServices.bing":"\u5FAE\u8F6F\u7FFB\u8B6F","translationServices.deepl":"DeepL","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"Azure \u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.cai":"\u5F69\u96F2\u5C0F\u8B6F (Alpha)","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.you":"\u6709\u9053\u7FFB\u8B6F (Alpha)","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.niu":"\u5C0F\u725B\u7FFB\u8B6F","translationServices.papago":"Papago \u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u7576\u9801\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u5C07\u8DF3\u904E\u7FFB\u8B6F",enableUserscriptPagePopup:"\u5728\u9801\u9762\u4E0A\u986F\u793A\u61F8\u6D6E\u7403",enableUserscriptPagePopupDescription:"\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528\u5FEB\u901F\u9375/{touch}\u518D\u6B21\u986F\u793A\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5EFA\u8B70\u5C07\u672C\u8A2D\u5B9A\u9801\u9762\u52A0\u5165\u81F3\u6211\u7684\u6700\u611B","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u91D1\u9470\u5F8C\u624D\u53EF\u4F7F\u7528\uFF0C\u8A73\u7D30\u8CC7\u8A0A\u8ACB\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u91D1\u9470\u7533\u8ACB\u548C\u8A2D\u5B9A\u6559\u5B78\u300B",useAboveStyleForTheseSites:"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u7DB2\u57DF\u540D\u7A31\u6642\uFF0C\u7E3D\u662F\u4F7F\u7528 \u2308{theme}\u230B \u8B6F\u6587\u6A23\u5F0F",currentUrl:"\u76EE\u524D\u7DB2\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C",syncToCloud:"\u540C\u6B65\u81F3\u96F2\u7AEF",syncToCloudDescription:"\u4E0A\u50B3\u81F3\u96F2\u7AEF\u5F8C\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u700F\u89BD\u5668/\u6CB9\u7334\u8173\u672C\u4E4B\u9593\u540C\u6B65\u8A2D\u5B9A\uFF0C\u4EE5\u6700\u5F8C\u8B8A\u66F4\u6642\u9593\u70BA\u6E96\u3002",syncToAccount:"\u540C\u6B65\u5230\u8CEC\u6236",syncToAccountButton:"\u7ACB\u5373\u8207\u96F2\u7AEF\u540C\u6B65",syncToAccountDescription:"\u4E0A\u50B3\u5230\u5DF2\u767B\u9304\u8CEC\u6236\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u8A2D\u5099\u4E4B\u9593\u540C\u6B65\u914D\u7F6E\uFF0C\u4EE5\u6700\u5F8C\u4FEE\u6539\u6642\u9593\u70BA\u6E96\u3002",successSyncConfigInAccount:"\u6210\u529F\u8207\u8CEC\u6236\u4FDD\u6301\u540C\u6B65",successSyncConfigToAccount:"\u6210\u529F\u540C\u6B65\u5230\u8CEC\u6236",syncConfigNoUpdate:"\u5DF2\u7D93\u662F\u6700\u65B0\u7684\u4E86",authFail:"\u6388\u6B0A\u5931\u6557",syncTitle:"\u624B\u52D5\u5099\u4EFD\u7BA1\u7406",import_hint:"\u532F\u5165",upload:"\u4E0A\u50B3",revokeAuth:"\u64A4\u92B7\u6388\u6B0A",uploadFail:"\u4E0A\u50B3\u5931\u6557",download:"\u4E0B\u8F09",importSuccess:"\u532F\u5165\u6210\u529F",importFail:"\u532F\u5165\u5931\u6557",deleteFail:"\u522A\u9664\u5931\u6557",backupToCloud:"\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6A94\u6848",create_new_backup:"\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE\uFF0C\u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",backupToCloudDescription:"\u624B\u52D5\u4E0A\u50B3\u6216\u9084\u539F\u5099\u4EFD\u6A94\u6848\uFF0C\u6700\u591A\u5141\u8A31 3 \u500B\u4E0D\u540C\u7684\u5099\u4EFD",successSyncConfig:"\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u6557",updatedAt:"\u66F4\u65B0\u65BC {date}",lastSyncedAt:"\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",downloadFail:"\u4E0B\u8F09\u5931\u6557",clickToDownload:"\u9EDE\u9078\u4E0B\u8F09",aboutLabel:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831","browser.openAboutPage":"\u95DC\u65BC/\u554F\u984C\u56DE\u5831",aboutLabelWithoutSponsor:"\u95DC\u65BC - \u554F\u984C\u56DE\u5831",aboutIntro:"\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F \u4F60\u53EF\u4EE5\u9078\u64C7\u958B\u901A <6>Pro\u6703\u54E1</6> \u4F86\u4F7F\u7528\u958B\u7BB1\u5373\u7528\u7684 DeepL \u548C OpenAI \u7FFB\u8B6F\u3002<br/><br/>\u4F60\u53EF\u4EE5\u95DC\u6CE8\u6211\u4EEC\u7684<3>Twitter</3>\uFF0C<4>Telegram \u983B\u9053</4>\u4EE5\u53CA\u4E0B\u65B9\u7684<5>\u90F5\u4EF6\u8A02\u95B1</5>\u8FFD\u8E64\u66F4\u65B0\u3002<br/> <7>Pro \u6703\u54E1</7> \u53EF\u4EE5\u901A\u904E\u5FEB\u901F\u5BA2\u670D\u90F5\u7BB1 <8>support@immersivetranslate.com</8> \u548C\u6211\u5011\u53D6\u5F97\u806F\u7E6B\u3002",aboutIntroWithoutSponsor:"\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u7DB2\u969B\u7DB2\u8DEF\u4E0A\u66F4\u591A\u7684\u5916\u8A9E\u8CC7\u8A0A \u2764\uFE0F ",projectHomepage:"\u5C08\u6848\u9996\u9801",joinTelegramGroup:"\u52A0\u5165\u7528\u6237\u4EA4\u6D41\u7FA4\u7D44\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",wechatPublicAccount:"\u5FAE\u4FE1\u516C\u773E\u865F",wechatCommunities:"\u5FAE\u4FE1\u4EA4\u6D41\u7FA4",qqCommunities:"QQ \u4EA4\u6D41\u983B\u9053",joinTelegramChannel:"\u95DC\u6CE8 Telegram \u983B\u9053\u77AD\u89E3\u66F4\u65B0\u8CC7\u8A0A",feedbackAndJoin:"\u554F\u984C\u56DE\u5831/\u52A0\u5165\u7FA4\u7D44",autoSync:"\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",loadingThemeTitle:"Loading \u6A23\u5F0F",loadingThemeDescription:"\u8A2D\u5B9A\u7B49\u5F85\u8B6F\u6587\u8F09\u5165\u6642\u7684\u6A23\u5F0F","loadingTheme.spinner":"\u8F49\u5708\u52D5\u756B","loadingTheme.text":"\u975C\u614B\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u986F\u793A",developerDescription:"\u53EF\u4EE5\u9EDE\u9078<1>\u6B64\u8655</1>\u6AA2\u8996\u9032\u968E\u81EA\u8A02\u529F\u80FD\u76F8\u95DC\u7684\u8AAA\u660E\u6587\u4EF6","edit border color":"\u8B8A\u66F4\u908A\u6846\u8272\u5F69",successSyncButNoChange:"\u76EE\u524D\u8A2D\u5B9A\u8207\u96F2\u7AEF\u4E00\u81F4",customTheme:"\u81EA\u8A02\u8272\u5F69\u548C\u5927\u5C0F","customThemeLabel.borderColor":"\u908A\u6846\u8272\u5F69","customThemeLabel.borderRadius":"\u908A\u6846\u5713\u89D2","customThemeLabel.textColor":"\u6587\u5B57\u8272\u5F69","customThemeLabel.backgroundColor":"\u80CC\u666F\u8272\u5F69","customThemeLabel.zoom":"\u5B57\u578B\u7E2E\u653E\u6BD4\u4F8B (%)","customThemeLabel.opacity":"\u6587\u5B57\u4E0D\u900F\u660E\u5EA6(%)",resetToDefaultColor:"\u9084\u539F\u70BA\u9810\u8A2D\u8272\u5F69",resetToDefaultSettings:"\u9084\u539F\u70BA\u9810\u8A2D\u8A2D\u5B9A",isTranslateTitle:"\u555F\u7528\u7DB2\u9801\u6A19\u984C\u7FFB\u8B6F",isTranslateTitleDescription:"\u555F\u7528\u5F8C\uFF0C\u7DB2\u9801\u7684\u6A19\u984C\u6703\u88AB\u7FFB\u8B6F",enableSearchEnhancement:"\u958B\u555F\u641C\u7D22\u589E\u5F37",enableSearchEnhancementDescription:"\u4E2D\u6587\u641C\u7D22\u8C37\u6B4C\u6703\u5728\u53F3\u908A\u51FA\u73FE\u82F1\u6587\u7248\u8C37\u6B4C\u65B0\u805E",verifyService:"\u9EDE\u6B64\u6E2C\u8A66\u670D\u52D9",verified:"\u9A57\u8B49\u6210\u529F","field.langs":"\u652F\u63F4\u7684\u8A9E\u8A00\u4EE3\u78BC","field.model":"\u6A21\u578B","field.translationEngine":"\u7FFB\u8B6F\u5F15\u64CE","field.limitPerMinute":"\u6BCF\u5206\u9418\u6700\u5927\u8981\u6C42\u6578","field.limitPerSecond":"\u6BCF\u79D2\u6700\u5927\u8981\u6C42\u6578","field.maxTextLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u7684\u6700\u5927\u6587\u5B57\u9577\u5EA6","field.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u8981\u6C42\u6700\u5927\u6BB5\u843D\u6578","field.apiUrl":"\u81EA\u8A02 API \u4F4D\u5740","field.placeholderDelimiters":"\u4FDD\u7559\u7684\u4F54\u4F4D\u7B26","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>\u81EA\u5B9A\u7FA9\u63A5\u53E3\u63A5\u5165</a> \u9700\u8981\u53C3\u8003\u6587\u6A94","description.limitPerMinute":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u5206\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.limitPerSecond":"\u8981\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u88AB\u66AB\u6642\u505C\u7528\uFF0C\u76F4\u81F3\u4E0B\u4E00\u79D2\u9418\u958B\u59CB\u3002\u7531\u4E8EOpenAI\u76EE\u524D\u670D\u52A1\u7684\u5404\u79CD\u9650\u5236\uFF0C\u8BF7\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u6700\u65B0\u5EFA\u8BAE\u7684\u6570\u503C","description.generalLimitPerSecond":"\u8ACB\u6C42\u6578\u8D85\u904E\u8A72\u9650\u5236\u6642\u6703\u9032\u5165\u6392\u968A\u72C0\u614B\uFF0C\u76F4\u5230\u4E0B\u4E00\u79D2\u9418\u958B\u59CB\u3002","description.prompt":"\u4EE5\u4F7F\u7528\u8005\u8EAB\u4EFD\u50B3\u9001\u7D66 OpenAI \u7684\u5C0D\u8A71\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u5B57\u5167\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8A9E\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6A19\u8A9E\u8A00,\u53EF\u4EE5\u7701\u7565 {{text}} \uFF08\u63A8\u85A6\uFF09, \u5C07\u6703\u5728\u55AE\u7368\u4F5C\u70BA\u4E00\u6BB5\u767C\u9001\u7D66 OpenAI","description.maxTextLengthPerRequest":"\u9810\u8A2D\u6703\u5408\u4F75\u591A\u500B\u6BB5\u843D\uFF0C\u4EE5\u6E1B\u5C11\u8ACB\u8981\u6C42\u6578\uFF0C\u4F46\u662F\u5982\u679C\u6BB5\u843D\u7E3D\u9577\u5EA6\u904E\u9577\uFF0C\u4E5F\u53EF\u80FD\u6703\u5C0E\u81F4 API \u7684\u56DE\u61C9\u6642\u9593\u589E\u52A0\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5617\u8A66\u8ABF\u6574\u8A72\u9078\u9805\u4F86\u63D0\u5347\u901F\u5EA6","description.systemPrompt":"\u4EE5\u7CFB\u7D71\u50B3\u9001\u767C\u9001\u7D66 OpenAI \u7684\u5C0D\u8A71\uFF0C\u5176\u4E2D {{text}} \u8868\u793A\u6BB5\u843D\u7684\u6587\u5B57\u5167\u5BB9\uFF0C{{from}} \u8868\u793A\u6BB5\u843D\u7684\u8A9E\u8A00\uFF0C{{to}} \u8868\u793A\u76EE\u6A19\u8A9E\u8A00","field.domain":"\u9818\u57DF","description.domain":"\u9ED8\u8A8D\u70BA\uFF1Ageneral\u3002\u50C5\u5728\u6709\u9053API\u63A7\u5236\u53F0\u958B\u901A\u9818\u57DF\u5316\u7FFB\u8B6F\u7684\u60C5\u6CC1\u4E0B\u53EF\u8A2D\u7F6E\uFF0C\u652F\u6301\u9818\u57DF\u898B<1>\u9019\u88E1</1>","field.scene":"\u5834\u666F","description.scene":"\u9ED8\u8A8D\u70BA\uFF1Ageneral\u3002\u50C5\u5728\u963F\u91CC\u96F2API\u63A7\u5236\u53F0\u958B\u901A\u6A5F\u5668\u7FFB\u8B6F\u5C08\u696D\u7248\u7684\u60C5\u6CC1\u4E0B\u53EF\u8A2D\u7F6E\uFF0C\u652F\u6301\u5834\u666F\u898B<1>\u9019\u88E1</1>","field.vocabId":"\u4F7F\u7528\u8005\u8A5E\u5178ID","description.vocabId":"\u6307\u5B9A\u7684\u5B57\u5178out_id\uFF0C\u76EE\u524D\u652F\u63F4\u82F1\u8B6F\u4E2D","description.model":"OpenAI \u7684\u6A21\u578B\uFF0C\u53EF\u4EE5\u70BA gpt-3.5-turbo, gpt-4 \u7B49","description.maxTextGroupLengthPerRequest":"\u6BCF\u6B21\u50B3\u9001\u7D66\u7FFB\u8B6F\u670D\u52D9\u7684\u6BB5\u843D\u6578\u91CF\uFF0C\u5982\u679C\u6BB5\u843D\u6578\u91CF\u904E\u591A\uFF0C\u53EF\u80FD\u6703\u5C0E\u81F4\u56DE\u61C9\u901F\u5EA6\u8B8A\u6162","description.apiUrl":"\u8ACB\u52A0\u5165\u5177\u9AD4\u5305\u542B\u8DEF\u5F91\u7684\u7DB2\u5740",enabledExtension:"\u555F\u7528\u5957\u4EF6",clickToDisableExtension:"\u9EDE\u9078\u505C\u7528\u5957\u4EF6",clickToEnableExtension:"\u9EDE\u9078\u555F\u7528\u5957\u4EF6",hasBeenDisabled:"\u5DF2\u505C\u7528","show password":"\u986F\u793A\u5BC6\u78BC",customContent:"\u8F38\u5165\u81EA\u5B9A\u7FA9\u6A21\u578B",inputOptions:"\u8F38\u5165\u6846\u589E\u5F37",mouseHoverOptions:"\u9F20\u6A19\u6ED1\u904E",modifyMouseHoverKey:"\u4FEE\u6539\u6ED1\u9F20\u61F8\u505C\u5FEB\u6377\u9375",enableInputTranslation:"\u662F\u5426\u555F\u7528\u8F38\u5165\u6846\u589E\u5F37",enableInputTranslationDescription:"\u555F\u7528\u5F8C\uFF0C\u8F38\u5165\u6846\u76F4\u63A5\u8F38\u5165 {startingKey}{startingKey} \u4F60\u597D\uFF0C\u7136\u5F8C\u5FEB\u901F\u9023\u64CA{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8B6F\u70BA {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:"\u555F\u7528\u5F8C\uFF0C\u8F38\u5165\u6846\u76F4\u63A5\u8F38\u5165\uFF1A\u4F60\u597D\u4E16\u754C\uFF0C\u7136\u5F8C\u5FEB\u901F\u9023\u64CA{inputTrailingTriggerKeyRepeatTimes}\u6B21{trailingKey}\uFF0C\u5373\u53EF\u7FFB\u8B6F\u70BA\u9810\u8A2D\u76EE\u6A19\u8A9E\u8A00",inputTargetLanguage:"\u8A2D\u5B9A\u8F38\u5165\u6846\u7684\u9810\u8A2D\u76EE\u6A19\u8A9E\u8A00",inputTargetLanguageDescription:"\u8F38\u5165\u6846\u7FFB\u8B6F\u7684\u9810\u8A2D\u76EE\u6A19\u8A9E\u8A00\uFF0C\u4E5F\u5C31\u662F {startingKey}{startingKey} \u4F5C\u70BA\u89F8\u767C\u8A5E\u7684\u9810\u8A2D\u8A9E\u8A00",inputTargetLanguageDescriptionForNoneKey:"\u8F38\u5165\u6846\u7FFB\u8B6F\u7684\u9810\u8A2D\u76EE\u6A19\u8A9E\u8A00",inputStartingTriggerKeyTitle:"\u8A2D\u5B9A\u8F38\u5165\u6846\u90E8\u5206\u7FFB\u8B6F\u7684\u5206\u5272\u5B57\u7B26",inputStartingTriggerKeyDescription:"\u7576\u4F60\u4E0D\u9700\u8981\u7FFB\u8B6F\u6574\u500B\u8F38\u5165\u6846\u7684\u6642\u5019\uFF0C\u5206\u5272\u7B26\u5141\u8A31\u4F60\u53EA\u7FFB\u8B6F {startingKey}{startingKey} \u5230\u8F38\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u8A9E\u8A00\u4EE3\u78BC\uFF0C\u4F8B\u5982\uFF1A{startingKey}ja \u8868\u793A\u53EA\u7FFB\u8B6F {startingKey}ja \u5230\u8F38\u5165\u6846\u672B\u5C3E\u7684\u90E8\u5206",inputStartingTriggerKeyDescriptionForNoneKey:"\u76EE\u524D\u8A2D\u5B9A\u70BA\u7121\u9700\u524D\u7DB4\uFF0C\u66AB\u7121\u6CD5\u4F7F\u7528\u8F38\u5165\u6846\u7684\u90E8\u5206\u6587\u5B57\u7FFB\u8B6F\u529F\u80FD",inputTrailingTriggerKeyTitle:"\u9078\u64C7\u4E00\u500B\u8F38\u5165\u7D50\u675F\u7684\u89F8\u767C\u5B57\u7B26",inputTrailingTriggerKeyDescription:"\u5FEB\u901F\u9023\u64CA3 \u6B21{trailingKey} \u5C07\u6703\u958B\u59CB\u7FFB\u8B6F",inputTrailingTriggerKeyTimeout:"\u8F38\u5165\u7D50\u675F\u9023\u64CA\u89F8\u767C\u7684\u9593\u9694\u6642\u9593",inputTrailingTriggerKeyTimeoutDescription:"\u8A2D\u7F6E\u8F38\u5165\u7D50\u675F\u9023\u64CA\u89F8\u767C\u7684\u9593\u9694\u6642\u9593\uFF08\u6BEB\u79D2\uFF09",spaceKey:"<\u7A7A\u683C\u9375>",noneKey:"\u7121\u9700\u524D\u7DB4\uFF0C\u76F4\u63A5\u7FFB\u8B6F\u6574\u500B\u6587\u5B57\u6846",inputTranslationBlockUrlsTitle:"\u5207\u52FF\u5728\u4EE5\u4E0B\u7DB2\u5740\u4E2D\u555F\u7528\u8F38\u5165\u6846\u589E\u5F37",inputTranslationBlockUrlsDescription:"\u5728\u4EE5\u4E0B\u7DB2\u5740\u4E2D\uFF0C\u8F38\u5165\u6846\u589E\u5F37\u5C07\u4E0D\u6703\u751F\u6548",clickToSeeQuickDemo:"\u9EDE\u64CA\u5C55\u958B30 \u79D2\u5FEB\u901F\u6559\u5B78\u8996\u983B",inputHelperInfo:"\u8AAA\u660E\uFF1A\u6211\u5011\u7279\u5225\u91DD\u5C0D\u5728\u4E2D\u6587\u8F38\u5165\u6CD5\u4E0B\u90E8\u5206\u89F8\u767C\u5B57\u7B26\u6703\u8B8A\u6210\u4E2D\u6587\u6A19\u9EDE\u7B26\u865F\u9019\u4EF6\u4E8B\u505A\u4E86\u512A\u5316\uFF0C\u6BD4\u5982\u641C\u72D7\u8F38\u5165\u6CD5\u4E0B / \u6703\u8B8A\u6210\u9813\u865F \u3001\uFF0C\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u652F\u6301\u6240\u6709\u89F8\u767C\u7B26\u5C0D\u61C9\u7684\u4E2D\u6587\u7B26\u865F\uFF0C\u4E5F\u5C31\u662F\u8AAA // \u3001\u3001 \u90FD\u6703\u88AB\u8B58\u5225\u70BA\u89F8\u767C\u5B57\u7B26\u3002<br/><br/>\u540C\u6642\u6211\u5011\u4E5F\u652F\u6301\u8A9E\u8A00\u4EE3\u78BC\u7684\u4E2D\u6587\u5225\u540D\u4F5C\u70BA\u547D\u4EE4\uFF0C\u6BD4\u5982 /\u65E5\u6587 \u4F60\u597D\u4E16\u754C \u6703\u88AB\u7FFB\u8B6F\u70BA\u65E5\u6587\uFF0C<1>\u9EDE\u6B64\u67E5\u770B\u6240\u6709\u652F\u63F4\u7684\u8A9E\u8A00\u4EE3\u78BC</1>\u3002",reloadCurrentPage:"\u8ACB\u5148\u5237\u65B0\u76EE\u524D\u9801\u9762\uFF0C\u518D\u958B\u59CB\u7FFB\u8B6F",noLocalFilePermissionForPDF:"\u66AB\u7121\u6B0A\u9650\u8B80\u53D6\u672C\u6A5F\u6587\u4EF6\uFF0C\u8ACB\u9EDE\u9078\u4E0A\u65B9\u6309\u9215\uFF0C\u7136\u5F8C\u532F\u5165\u672C\u6A5F\u6587\u4EF6",noPermissionForThisPage:"\u26A0\uFE0F \u66AB\u7121\u6B0A\u9650\u7FFB\u8B6F\u76EE\u524D\u9801\u9762",retryAllParagraphs:"\u91CD\u8A66\u5168\u90E8\u932F\u8AA4\u6BB5\u843D",retryAllButton:"\u91CD\u8A66\u5168\u90E8\u932F\u8AA4\u6BB5\u843D",errorTooltipTitle:"\u9EDE\u64CA\u770B\u932F\u8AA4\u539F\u56E0",errorModalTitle:"\u7FFB\u8B6F\u670D\u52D9\u6216\u7DB2\u8DEF\u4F3C\u4E4E\u51FA\u4E86\u9EDE\u554F\u984C...",disableConfirm:"\u7981\u7528\u78BA\u8A8D",disableOnce:"\u7981\u7528\u4E00\u6B21",disableGlobal:"\u5168\u5C40\u7981\u7528",disableTint:"* \u60A8\u53EF\u4EE5\u5728 {option} \u4E2D\u91CD\u65B0\u555F\u7528\u3002",searchEnhancementNotes:"\u6211\u5011\u767C\u73FE\uFF0C\u4E2D\u6587\u95DC\u9375\u8A5E\u548C\u82F1\u6587\u95DC\u9375\u8A5E\u7684\u65B0\u805E\u7D50\u679C\u6709\u975E\u5E38\u5927\u7684\u4E0D\u540C\uFF0C\u5728\u555F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u96D9\u8A9E\u4FE1\u606F\u589E\u5F37\u529F\u80FD\u5F8C\uFF0C\u6211\u5011\u6703\u5728\u652F\u6301\u7684\u7DB2\u7AD9\uFF08\u8C37\u6B4C\u65B0\u805E\uFF0C\u8C37\u6B4C\u641C\u7D22\uFF08\u90E8\u5206\u95DC\u9375\u8A5E\uFF09\uFF0C\u96EA\u7403\uFF0C\u6771\u65B9\u8CA1\u5BCC\u7DB2\uFF0C\u5BCC\u9014\uFF0C\u8001\u864E\uFF09\u81EA\u52D5\u7528\u82F1\u6587\u70BA\u4F60\u641C\u7D22\u540C\u6A23\u7684\u95DC\u9375\u8A5E\u4E26\u5C55\u793A\u5728\u53F3\u5074\u3002\u5982\u679C\u4F60\u4E0D\u9700\u8981\u8A72\u529F\u80FD\u7684\u8A71\uFF0C\u53EF\u4EE5\u9078\u64C7\u7981\u7528\u5B83\u3002",option:"\u9078\u9805",saveSettings:"\u5132\u5B58\u8A2D\u5B9A",closeModal:"\u95DC\u9589\u8996\u7A97",enableInputTranslationWithoutTriggerKeyTitle:"\u555F\u7528\u5FEB\u901F\u9023\u64CA3 \u6B21{trailingKey}\uFF0C\u76F4\u63A5\u7FFB\u8B6F\u6574\u500B\u8F38\u5165\u6846\u70BA{inputTargetLanguage}",enableInputTranslationWithoutTriggerKeyDescription:"\u5982\u9700\u6307\u5B9A\u76EE\u6A19\u8A9E\u8A00\uFF0C\u8ACB\u5728\u524D\u9762\u52A0\u4E0A\u8A9E\u8A00\u7A0B\u5F0F\u78BC\uFF0C\u5982\uFF1Aja \u4F60\u597D\u4E16\u754C",mouseHoverShortcutPlaceholder:"\u5982\uFF1AShift",deepLProName:"\u6C89\u6D78\u5F0F\u7FFB\u8B6FPro \u6703\u54E1(\u63A8\u85A6)",deepLProDescription:"\u76EE\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",deeplProDescriptionForNormal:"\u7121\u9700\u4EFB\u4F55\u8A2D\u7F6E\uFF0C\u6703\u54E1\u767B\u5165\u5F8C\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u9EDE\u6B64\u5347\u7D1A\u70BA\u6703\u54E1</1>",deepLCustomDescription:"\u9700\u8981\u570B\u5916\u4FE1\u7528\u5361\uFF0C\u5728<1>DeepL</1>\u5B98\u65B9\u958B\u901A\uFF0C\u9EDE\u9078\u67E5\u770B<2>\u6587\u6A94</2>",deepLCustomName:"\u81EA\u8A02Auth Key",chooseProviderLabel:"\u9078\u64C7\u4E00\u500B\u670D\u52D9\u63D0\u4F9B\u8005",openaiProName:"\u6C89\u6D78\u5F0F\u7FFB\u8B6FPro \u6703\u54E1(\u63A8\u85A6)",openaiProDescription:"\u76EE\u524D\u5957\u9910\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528",openaiProDescriptionForNormal:"\u7121\u9700\u4EFB\u4F55\u8A2D\u7F6E\uFF0C\u6703\u54E1\u767B\u5165\u5F8C\u5373\u53EF\u4F7F\u7528\uFF0C<1>\u9EDE\u6B64\u5347\u7D1A\u70BA\u6703\u54E1</1>",openaiCustomDescription:"\u53EF\u5728OpenAI, Azure OpenAI, \u6216\u5176\u4ED6\u7B2C\u4E09\u65B9\u670D\u52D9\u7372\u53D6\uFF0C<1>\u9EDE\u6B64\u67E5\u770B\u6587\u6A94</1>",openaiCustomName:"\u81EA\u8A02API Key",needLoginAction:"(\u958B\u901A\u6703\u54E1\u6216\u81EA\u8A02)",goLoginOrAction:"(\u958B\u901A\u6703\u54E1\u6216\u53BB\u8A2D\u5B9A)",yearly:"\u5E74\u5EA6\u7E8C\u8A02",quarterly:"\u5B63\u5EA6\u7E8C\u8A02",monthly:"\u6BCF\u6708\u7E8C\u8A02",yearlyForOnce:"\u4E00\u6B21\u6027\u5E74\u5EA6\u5957\u9910",monthlyForOnce:"\u4E00\u6B21\u6027\u6708\u5EA6\u5957\u9910",daily:"\u6BCF\u65E5\u7E8C\u8A02",year:"\u5E74\u5EA6\u7E8C\u8A02",quarter:"\u5B63\u5EA6\u7E8C\u8A02",month:"\u6BCF\u6708\u7E8C\u8A02",day:"\u6BCF\u65E5\u7E8C\u8A02",onetime_7day:"7 \u5929\u9AD4\u9A57\u5305",currentPlanDescriptionForFree:"\u76EE\u524D\u5957\u9910\uFF1A\u514D\u8CBB",currentPlanDescriptionForContinuous:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u81EA\u52D5\u7E8C\u8CBB",currentPlanDescriptionForAutoRenewCaceling:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u5230\u671F\uFF0C\u5230\u671F\u5F8C\u5C07\u4E0D\u6703\u81EA\u52D5\u7E8C\u7D04",currentYearlyPlanDescriptionForAutoRenewCacelingWithRealPaiedUser:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u5230\u671F\uFF0C\u5230\u671F\u5F8C\u5C07\u4E0D\u6703\u81EA\u52D5\u7E8C\u7D04\u3002<br/><1>\u9EDE\u6B64\u7BA1\u7406\u7E8C\u8CBB\u65B9\u6848</1>",currentYearlyPlanDescriptionForAutoRenewCacelingWithAdmin:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u5230\u671F\uFF0C\u5230\u671F\u5F8C\u5C07\u4E0D\u6703\u81EA\u52D5\u7E8C\u7D04\u3002<br/><1>\u9EDE\u6B64\u555F\u7528\u9023\u7E8C\u5305\u5E74</1>",currentPlanDescriptionForOneTime:"\u76EE\u524D\u5957\u9910\uFF1A{plan}\uFF0C\u5C07\u65BC {endAt} \u5230\u671F\uFF0C<1>\u9EDE\u6B64\u5347\u7D1A\u70BA\u5E74\u8CBB</1>\u6216<2>\u6708\u8CBB</2>\u6703\u54E1",upgradePlan:"\u9EDE\u6B64\u5347\u7D1A\u70BAPro \u6703\u54E1",upgradeToPro:"\u5347\u7D1A\u70BA Pro \u6703\u54E1","popup.openPro":"\u5347\u7D1A\u70BA Pro \u6703\u54E1\u5F8C\u53EF\u4EE5\u66A2\u4EAB DeepL \u548C OpenAI \u7FFB\u8B6F\uFF0C\u9EDE\u6B64\u5347\u7D1A","popup.openProForPro":"\u60A8\u662F Pro \u6703\u54E1\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528 DeepL \u548C OpenAI \u7FFB\u8B6F",currentAccount:"\u7576\u524D\u8CEC\u6236",enableAutoSyncUserSettings:"\u555F\u7528\u591A\u8A2D\u5099\u81EA\u52D5\u96F2\u7AEF\u540C\u6B65",modalEnableInputTranslationTitle:"\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u8F38\u5165\u6846\u7FFB\u8B6F\u63D0\u793A",modalEnableInputTranslationDesc:"\u60A8\u525B\u525B\u900F\u904E\u5FEB\u901F\u9023\u64CA3 \u6B21\u7A7A\u767D\u9375\u89F8\u767C\u4E86\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u7684\u8F38\u5165\u6846\u7FFB\u8B6F\uFF0C\u8F38\u5165\u6846\u7684\u5167\u5BB9\u5C07\u7FFB\u8B6F\u70BA\u9810\u8A2D\u7684\u76EE\u6A19\u8A9E\u8A00\u3002\u900F\u904ECtrl+Z \u53EF\u4EE5\u64A4\u92B7\u7FFB\u8B6F\u3002<br /><br />\u5982\u679C\u9019\u662F\u4E00\u500B\u5931\u8AA4\uFF0C\u4E0D\u7528\u64D4\u5FC3\uFF0C\u60A8\u53EF\u4EE5\u9078\u64C7\u672C\u6B21\u505C\u7528\uFF0C\u6216\u6C38\u4E45\u505C\u7528\u8F38\u5165\u6846\u7FFB\u8B6F\u3002",saveAndNotShowAgain:"\u5132\u5B58\u4E14\u4E0D\u518D\u63D0\u793A",disableInputTranslationTips:"* \u4F60\u4E5F\u53EF\u4EE5\u5728 {option} \u4E2D\u8A2D\u5B9A\u5176\u4ED6\u5FEB\u6377\u9375\u4F86\u89F8\u767C\uFF0C{learnMore}\u3002",learnMore:"\u9EDE\u6B64\u4E86\u89E3\u66F4\u591A",continueEnalbeInputTranslation:"\u7E7C\u7E8C\u555F\u7528\u8F38\u5165\u6846\u7FFB\u8B6F",autoRenewTrialSuffix:'\uFF08\u8A66\u7528\u4E2D\uFF0C<a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">\u7ACB\u523B\u5347\u7D1A\u70BA\u6B63\u5F0F\u6703\u54E1</a>\uFF09',upgradeFromTrialTitle:"\u5347\u7D1A\u70BA\u6B63\u5F0F\u6703\u54E1",subtitle:"\u5F71\u7247\u5B57\u5E55",youtubeService:"\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u5F71\u7247\u5B57\u5E55\u670D\u52D9","subtitle.disabledSubtitle":"\u6C38\u4E45\u7981\u7528\u8996\u983B\u5B57\u5E55\u529F\u80FD","subtitle.disabledSubtitleDescription":"\u5982\u679C\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u7684\u8996\u983B\u5B57\u5E55\u548C\u5176\u4ED6\u64F4\u5C55\u6709\u885D\u7A81\uFF0C\u4F60\u53EF\u4EE5\u9078\u64C7\u6C38\u4E45\u7981\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u7684\u8996\u983B\u5B57\u5E55\u529F\u80FD\u6216\u8005\u5378\u8F09\u5176\u4ED6\u885D\u7A81\u7684\u64F4\u5C55","subtitle.autoEnableSubtitle":"\u81EA\u52D5\u4F7F\u7528\u96D9\u8A9E\u5B57\u5E55","subtitle.autoEnableSubtitleDescription":"\u555F\u7528\u5F8C\uFF0C\u7576\u5F71\u7247\u64AD\u653E\u7684\u6642\u5019\uFF0C\u6703\u81EA\u52D5\u986F\u793A\u96D9\u8A9E\u5B57\u5E55\uFF0C\u5426\u5247\u9700\u8981\u9EDE\u64CA\u7FFB\u8B6F\u6309\u9215\u624D\u6703\u986F\u793A\u3002","subtitle.preTranslation":"\u512A\u5148\u4F7F\u7528\u6C89\u6D78\u5F0F\u7FFB\u8B6F\u5B57\u5E55","subtitle.preTranslationDescription":"\u555F\u7528\u5F8C\u6703\u512A\u5148\u7528\u4E0B\u9762\u7684\u7FFB\u8B6F\u670D\u52D9\u63D0\u524D\u7FFB\u8B6F\u6574\u500B\u5B57\u5E55\uFF0C1 \u5C0F\u6642\u7684\u8996\u8A0A\u5927\u6982\u6D88\u8017 5\u842C Tokens \u6216 \u5B57\u7B26\uFF0C\u8ACB\u914C\u60C5\u4F7F\u7528\uFF1B\u95DC\u9589\u5F8C\u5247\u512A\u5148\u4F7F\u7528\u539F\u5F71\u7247\u81EA\u5E36\u7684\u6A5F\u7FFB\u5B57\u5E55","subtitle.humanSubtitlesPreferred":"\u512A\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55","subtitle.humanSubtitlesPreferredDescription":"\u7576\u5F71\u7247\u6709\u76EE\u6A19\u8A9E\u8A00\u4EBA\u5DE5\u5B57\u5E55\u6642\uFF0C\u512A\u5148\u4F7F\u7528\u4EBA\u5DE5\u5B57\u5E55\uFF08\u63A8\u85A6\uFF09",videoSubtitleTranslationDescription:"\u70BA\u5F71\u7247\u5B57\u5E55\u55AE\u7368\u6307\u5B9A\u4E00\u500B\u7FFB\u8B6F\u670D\u52D9",subtitleTranslating:"\u6B63\u5728\u4F7F\u7528 {service} \u670D\u52D9\u7FFB\u8B6F\u5B57\u5E55\u4E2D\uFF0C\u8ACB\u7A0D\u7B49...\uFF08\u6C89\u6D78\u5F0F\u7FFB\u8B6F\uFF09",subtitleLoading:"\u6B63\u5728\u8F09\u5165\u5B57\u5E55...",bilingual:"\u96D9\u8A9E","field.action":"\u662F\u5426\u555F\u7528\u767E\u5EA6\u8853\u8A9E","description.action":"\u555F\u7528\u5F8C\u6703\u5728\u8ACB\u6C42\u4E2D\u52A0\u5165 action=1 \u7684\u53C3\u6578\uFF0C\u4EE5\u4FBF\u544A\u77E5\u767E\u5EA6\u555F\u7528\u8853\u8A9E\uFF0C<1>\u66F4\u591A\u8AAA\u660E\u8ACB\u53C3\u8003\u5B98\u65B9\u6587\u6A94</1>",closeQuickTranslation:"\u95DC\u9589\u61F8\u6D6E\u7403","closeQuickTranslation.untilNext":"\u672C\u6B21\u95DC\u9589\u76F4\u5230\u4E0B\u6B21\u8A2A\u554F","closeQuickTranslation.currentWebsite":"\u7576\u524D\u7DB2\u7AD9\u7981\u7528","closeQuickTranslation.alwaysClose":"\u6C38\u4E45\u7981\u7528","closeQuickTranslation.settingOpen":"\uFF08\u53EF\u5728<1>\u8A2D\u5B9A\u9801</1>\u958B\u555F\uFF09","closeQuickTranslation.cancel":"\u53D6\u6D88","closeQuickTranslation.confirm":"\u78BA\u5B9A","floatBall.popup":"\u6253\u958B\u5FEB\u6377\u8A2D\u5B9A\u9762\u677F","floatBall.translate":"\u9EDE\u64CA\u7FFB\u8B6F\u8A72\u9801\u9762","floatBall.showOriginal":"\u9EDE\u64CA\u5207\u63DB\u5230\u539F\u6587","floatBall.close":"\u95DC\u9589\u61F8\u6D6E\u7403","floatBallOptions.enableDescPc":"\u555F\u7528\u9801\u9762\u61F8\u6D6E\u7403\u5F8C\uFF0C\u6703\u5728\u9801\u9762\u53F3\u5074\u986F\u793A\u4E00\u500B\u5FEB\u6377\u7FFB\u8B6F\u6309\u9215\uFF0C\u9EDE\u64CA\u5373\u53EF\u7FFB\u8B6F","floatBallOptions.enableDesc":"\u95DC\u9589\u61F8\u6D6E\u7403\u5F8C\uFF0C\u53EF\u4EE5\u7528{touch}\u559A\u8D77\u3002\u70BA\u9632\u6B62\u4E0D\u614E\u95DC\u9589\u8A72\u9078\u9805\u5F8C\u627E\u4E0D\u5230\u61F8\u6D6E\u7403\uFF0C\u5F37\u70C8\u5EFA\u8B70\u6536\u85CF\u672C\u8A2D\u5B9A\u9801","description.azureApiUrl":"\u586B\u5165\u81EA\u8A02\u7684API\u4F4D\u5740",shareBtnTitle:"\u9EDE\u64CA\u5206\u4EAB\u8A72\u96D9\u8A9E\u9801\u9762\u7D66\u670B\u53CB","floatBall.share":"\u5206\u4EAB\u9801\u9762",confirmSupportMouse:"\u5F37\u5236\u555F\u7528\u6ED1\u9F20\u652F\u63F4",confirmSupportMouseDescription:"\u6AA2\u6E2C\u5230\u7576\u524D\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u6ED1\u9F20\u529F\u80FD\uFF0C\u662F\u5426\u5F37\u5236\u555F\u7528\u6ED1\u9F20\u652F\u63F4\uFF1F",sampleTargetText:"\u9577\u591C\u5C07\u81F3\uFF0C\u6211\u5F9E\u4ECA\u958B\u59CB\u5B88\u671B\uFF0C\u81F3\u6B7B\u65B9\u4F11\u3002 \u6211\u5C07\u4E0D\u5A36\u59BB\u3001\u4E0D\u5C01\u5730\u3001\u4E0D\u751F\u5B50\u3002 \u6211\u5C07\u4E0D\u6234\u5BF6\u51A0\uFF0C\u4E0D\u722D\u69AE\u5BF5\u3002 \u6211\u5C07\u76E1\u5FE0\u8077\u5B88\uFF0C\u751F\u6B7B\u65BC\u65AF\u3002",sampleSourceText:"Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post.","subtitle.supportedSites":"\u5DF2\u652F\u63F4\u5728\u9019\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u96D9\u8A9E\u5B57\u5E55\uFF08\u6CE8\u610F\uFF1A\u7531\u65BC\u6280\u8853\u9650\u5236\uFF0C\u90E8\u5206\u7DB2\u7AD9\u5728\u9996\u6B21\u958B\u555F\u5B57\u5E55\u5F8C\u9700\u8981\u91CD\u65B0\u5237\u65B0\u9801\u9762\uFF0C\u6216\u8005\u9700\u7B49\u5F85\u7FFB\u8B6F\u5B8C\u6210\u4EE5\u986F\u793A\u96D9\u8A9E\u5B57\u5E55\uFF09\uFF1A",errorReason:"\u932F\u8AA4\u539F\u56E0\uFF1A{message}","proQuotaExceededError.onetime7day":'\uFF0C\u60A8\u53EF\u4EE5\u9078\u64C7\u4EE5\u4E0B\u65B9\u5F0F\u89E3\u6C7A\uFF1A<br/><br/>1. \u5207\u63DB\u5230 {anotherService} \u6216\u5176\u4ED6\u7FFB\u8B6F\u670D\u52D9<br/>2. \u5347\u7D1A\u70BA<a class="{brandId}-primary-link" href="{href}" target="_blank">\u6708\u5EA6/\u5E74\u5EA6\u6703\u54E1</a>',"proQuotaExceededError.trial":'\uFF0C\u60A8\u53EF\u4EE5\u9078\u64C7\u4EE5\u4E0B\u65B9\u5F0F\u89E3\u6C7A\uFF1A<br/><br/>1. \u5207\u63DB\u5230 {anotherService} \u6216\u5176\u4ED6\u7FFB\u8B6F\u670D\u52D9<br/>2. \u7ACB\u5373<a class="{brandId}-primary-link" href="{href}" target="_blank">\u5347\u7D1A\u70BA\u6B63\u5F0F\u6703\u54E1</a>',"proQuotaExceededError.nonTrial":'\uFF0C\u60A8\u53EF\u4EE5\u9078\u64C7\u4EE5\u4E0B\u65B9\u5F0F\u89E3\u6C7A\uFF1A<br/><br/>1. \u5207\u63DB\u5230 {anotherService} \u6216\u5176\u4ED6\u7FFB\u8B6F\u670D\u52D9<br/>2. \u8CFC\u8CB7<a class="{brandId}-primary-link" href="{href}" target="_blank"> {translationService} \u984D\u5916\u6D41\u91CF\u5305</a>',"proQuotaExceededError.resetTime":"<br/>3. \u984D\u5EA6\u91CD\u7F6E\u6642\u9593\uFF1A{resetTime}",viewWithImmersiveTranslate:"\u53CC\u8BED\u7248\u672C(\u6C89\u6D78\u5F0F\u7FFB\u8BD1)"};var ng={nologin:"Not logged in",loginForSafari:"Sign In or Sign Up",login:"Log in to activate your membership benefits",manageAccount:"Manage Account",openPremium:"Upgrade to Pro",logout:"Logout",curentPlan:"Current Plan",endAt:"Expires",endAuto:"Auto Renew",lineBreakMaxTextCount:"Maximum characters per sentence after line break","translate-pdf":"Translate PDF","noSupportTranslate-pdf":"This script is not supported. Please use a plugin.","translate-firefox-local-pdf":"Go to upload PDF",enableLineBreak:"Enable automatic line wrapping for long paragraphs",sponsorLabel:"Sponsor developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:'To modify shortcuts in the Firefox browser, open the extension management page by navigating to `about:add-ons`. Click on "Settings," then select "Manage Shortcuts" to configure your shortcuts.',browserShortcutsNoteForChrome:'To modify shortcuts in a Chrome browser, open the extension management page, go to the "Manage Shortcuts" panel (`chrome://extensions/shortcuts`), and click the button below to navigate to the shortcut management page.',browserShortcutsSucks:"Customize shortcuts using the following format (no automatic detection, please enter directly):",enableLineBreakDescription:"After activating, insert line breaks at the end of each sentence in lengthy paragraphs for improved readability.","browser.shortBrandName":"Immersive Translate","browser.brandName":"Immersive Translate: Web Page&PDF Translation","browser.brandDescription":"Bilingual web page translation, also supports PDF, Epub eBook, Video subtitles translation, free to use.","browser.toggleTranslatePage":"Translate webpage/Display original text","browser.toggleTranslateTheWholePage":"Translate entire page/Display original text","browser.toggleOnlyTransation":"Translate and hide original text/Display original text","browser.toggleTranslateToThePageEndImmediately":"Translate instantly to the bottom of the page/Display original text","browser.toggleTranslateTheMainPage":"Translate main page /Display original text","browser.shareToDraft":"Share Bilingual Page","browser.openOptionsPage":"Open Settings Page","browser.toggleTranslationMask":"Show/Hide Translation Blurring Effect","browser.translateLocalPdfFile":"Translate local PDF File","browser.openEbookViewer":"Read local e-books","browser.openEbookBuilder":"Create Bilingual EPUB E-books","browser.translateLocalHtmlFile":"Translate HTML/txt File","browser.donateContext":"Explore Sponsorship Benefits","browser.translateLocalSubtitleFile":"Translate Local Subtitle File",confirmResetConfig:"Are you sure you want to reset settings?",translationLineBreakSettingTitle:"Line break setting",smartLineBreak:"Smart Wrap",alwaysLineBreak:"Always Wrap",isShowContextMenu:"Add Translation to Right-Click Menu",toggleBeta:"Enable Beta Testing Features",betaDescription:"Enable experimental features and test translation services. Join the <1>Telegram group</1> for more information.",translationLineBreakSettingDescription:"Always Wrap is suitable for layouts with less content, providing a neater appearance. (For longer paragraphs with over {count} characters, use Smart Wrap for a more space-efficient display.)",tempTranslateDomainTitle:"Temporarily Activate Website Translation Time",tempTranslateDomainDescription:"When manually translating a webpage, temporarily enable automatic translation for the site. You can set a temporary duration.",xMinutes:"{count} minutes",disabled:"Disable",changelog:"Change Log",toggleTranslatePageWhenThreeFingersOnTheScreen:"Touch screen with multiple fingers to translate webpage/display original text",toggleTranslationMaskWhenThreeFingersOnTheScreen:"Touch screen with multiple fingers to show/hide the blurry effect of the translated text",fingerCountToToggleTranslagePageOnlyTranslationWhenTouching:"Touch screen with multiple fingers to translate webpage (translation only)/display original text",addUrlDescription:"You can specify domain names, and also use wildcard characters, such as: *.google.com, google.com/mail/*, https://www.google.com/*",general:"General",clickToExpandConfig:"Expand current configuration",import:"Import from file",export:"Export to file",toggleDebug:"Print debug logs to console","fingers.0":"Close","fingers.2":"Two-finger touch","fingers.3":"Three-finger touch","fingers.4":"Four-finger touch","fingers.5":"Five-finger touch",mouseHoldKey:"+ {key} translate/restore this paragraph",mouseHoldKeyAuto:"immediately translate this paragraph",mouseHoldKeyOff:"Do nothing",mouseHoldKeyOther:"Custom shortcut key (open settings)",mouseHoldKeyCustomKey:"{key} translate/restore this paragraph",mouseHoverHoldKey:"Press the shortcut key while hovering over with the mouse to translate paragraph.","mouse-translate":"Hover",document:"Document",resetSuccess:"Reset all settings successful",resetThisSuccess:"Reset successful",saved:"Saved successfully",successImportConfig:"Configuration imported successfully",goAdvancedSettings:"Go to Advanced Settings Page",goAdvancedInterfaceSettings:"Go to Advanced Custom Settings Page",advanced:"Advanced Settings",advancedDescription:"Generally, there's no need to adjust; keep the default settings. These options are provided for more advanced users seeking a more personalized experience.",developer:"Developer settings",donateCafe:"Pricing","translate to the bottom of the page":"After opening a webpage, do you want to translate to the bottom of the page immediately?",feedback:"Feedback",toggleTranslatePage:"Translate webpage/Show original text",translateToThePageEndImmediatelyDescription:"Once enabled, upon entering a webpage, it will immediately translate the content from the top to the bottom. If disabled, it will translate as you read. (Not recommended to enable)","translate all areas of the page":"Should all areas of the webpage be translated?",translationAreaDescription:"Once enabled, all areas of the entire webpage will be translated. If disabled, the default smart recognition will be used to translate only the main areas. (Not recommended to enable)","the number of characters to be translated first":"Translate the first few characters of the page directly, without waiting to scroll to the visible area.","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",moreOptions:"Expand for more custom settings",translateTheWholePage:"Translate entire page",changeToTranslateTheWholePage:"Translate the Whole Page",changeToTranslateTheMainPage:"Translate the Main Content",changeToOnlyTranslationMode:"Show Translation only",changeToDualTranslationMode:"Show Bilingual Translation",translateToThePageEndImmediately:"Immediately translate to the bottom ",translateTheMainPage:"smart translate the main areas","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension version is too old, please upgrade the extension to {minVersion} or a newer version and try to sync again.",badUserscriptBrowser:"The current browser does not correctly support the interface of the Tampermonkey extension (such as obtaining version information of Tampermonkey scripts). Please use another <1>browser that supports Tampermonkey extensions</1>, such as Firefox.",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha feature enabled successfully",disableAlphaSuccess:"Alpha feature has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(go to settings)",goSettings:"go to settings",needActionForOptions:"(requires setting)",translationEngine:"Engine Options",sourceLanguage:"Original language",target:"Target Language",popupSourceLanguage:"Source",popupTarget:"Target",popupService:"Service",forThisSite:"Site",autoEnableSubtitle:"Auto-enable bilingual captions",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",alwaysTranslateSomeSiteOrWildSite:"Always translate this site",alwaysTranslateSomePage:"Always translate this page",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for repeated paragraphs)","translation display":"Translation display style","select diplay style":"See below for examples of different translation styles",interface:"Interface Settings",import_export:"Import/Export",import_export_title:"Import/Export Configuration",syncToGoogleDrive:"Sync Now with Google Drive",floatBallOptions:"Floating Button","floatBallOptions.enable":"Enable Floating Ball","floatBallOptions.blockUrls":"Blocked Websites","floatBallOptions.add":"Add","floatBallOptions.blockUrlDesc":"Don\u2019t show the floating ball on these websites","floatBallOptions.clickType":"Click Behavior","floatBallOptions.clickTypeDesc":"What happens when you click the floating ball icon","floatBallOptions.clickPopup":"Display Translation Panel","floatBallOptions.clickTranslate":"Translate/Show Original Text","floatBallOptions.fixedPosition":"Fixed Position","floatBallOptions.fixedPositionDesc":"Whether the float ball is on the left or right of the window","floatBallOptions.fixedPositionLeft":"Left","floatBallOptions.fixedPositionRight":"Right",previewAllThemes:"Preview all themes","translationTheme.none":"None","translationTheme.grey":"Black Gray","translationTheme.dashed":"Dotted lines","translationTheme.dotted":"Dotted lines","translationTheme.dashedBorder":"Dotted Border","translationTheme.solidBorder":"Solid Border","translationTheme.underline":"Straight line","translationTheme.mask":"Blur effect (learning mode)","translationTheme.opacity":"Transparency effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Marker","translationTheme.marker2":"Maker2","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weaken","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dotted lines","translationTheme.nativeDashed":"System built-in dotted lines","translationTheme.nativeDotted":"System built-in dotted lines","translationTheme.nativeUnderline":"System built-in straight lines","translationTheme.wavy":"wavy lines","translationServices.custom":"Custom API","translationServices.tencent":"Tencent Translator","translationServices.tenAlpha":"Tencent Translator (Alpha)","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeepLX (Alpha)","translationServices.bing":"Microsoft Translator","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Azure Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.cai":"Caiyun Translation (Alpha)","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.you":"Youdao Translation (Alpha)","translationServices.transmart":"Tencent Smart Translation","translationServices.niu":"Niu Translation","translationServices.papago":"Papago Translation","translationServices.d":"DeeplX (Alpha)","translationServices.dpro":"D Pro (Canary)","translationServices.openai":"OpenAI","translationServices.chatgpt":"ChatGPT Web(3.5 mobile)","translate title":"Translate page title","always languages":"Always translate the following languages",neverTranslateLanguagesLabel:"Never Translated Languages",neverTranslateTheFollowingLanguagesDescription:"When a paragraph on a page is in one of the following languages, the translation will be skipped",enableUserscriptPagePopup:"Always show Popup windows on the page",enableUserscriptPagePopupDescription:"After closing the floating ball, you can use the shortcut key /{touch} to summon it. To prevent accidentally losing the floating ball after turning off this option, it is strongly recommended to bookmark this settings page.","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"Sites that always use the {theme} translation style",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language",syncToCloud:"Sync to cloud",syncToCloudDescription:"Upload the configuration to the cloud server, and you can synchronize the configuration between different browsers or Tampermonkey scripts, based on the last modification time.",syncToAccount:"Sync to account",syncToAccountButton:"Sync to account now",syncToAccountDescription:"Uploaded to the logged-in account, the configuration can be synchronized between different devices, and the last modification time shall prevail.",successSyncConfigInAccount:"Successfully synced with account",successSyncConfigToAccount:"Successfully synchronized to account",syncConfigNoUpdate:"Already up to date",authFail:"Authorization Failed",syncTitle:"Manual Backup Management",import_hint:"Import",upload:"Upload",revokeAuth:"Revoke Authorization",uploadFail:"Upload Failed",download:"Download",importSuccess:"Upload Success",importFail:"Import Failed",deleteFail:"Delete Failed",backupToCloud:"Manage backup files manually",create_new_backup:"Add backup node",maxBackupFiles:"Up to{count}different nodes can be backed up. Please delete unneeded nodes",backupToCloudDescription:"Upload or restore backup files manually, up to 3 different backups",successSyncConfig:"Successfully synced with cloud",syncFail:"Synchronization failed",updatedAt:"Updated at {date}",lastSyncedAt:"Last checked at {date}",downloadFail:"Download failed",clickToDownload:"Click to download",aboutLabel:"About - Feedback ","browser.openAboutPage":"About / Feedback/Sponsor",aboutLabelWithoutSponsor:"About - Feedback",aboutIntro:"We hope that all users will easily and pleasantly access to the enormous amount of foreign language information available on the Internet \u2764\uFE0F. You can choose to subscribe to <6>Pro membership</6> to use the out-of-the-box DeepL and OpenAI translation.<br/><br/> Follow us on<3>Twitter</3>, <4>Telegram Channel</4>, WeChat public account, WeChat community group, or subscribe to updates via <5>email</5> below.<br/> <7>Pro members</7> can contact us through the quick customer service email <8>support@immersivetranslate.com</8>.",aboutIntroWithoutSponsor:"The extension is completely free. We hope that everyone can easily and joyfully access the vast foreign language information on the Internet \u2764\uFE0F. <br/><br/>Follow us on <3>Twitter</3>, <4>Telegram channel</4>, WeChat public account, WeChat community group, or subscribe to updates via <5>email</5> below.",projectHomepage:"Project Homepage",joinTelegramGroup:"Join our communities for feature discussion",wechatPublicAccount:"Wechat Official Account",wechatCommunities:"Wechat Group",qqCommunities:"QQ Channel",joinTelegramChannel:"Subscribe to our Telegram channel to get the latest updates",feedbackAndJoin:"Feedback",autoSync:"Auto-Time Sync",loadingThemeTitle:"Loading Style",loadingThemeDescription:"Set the style of waiting for the translation to load","loadingTheme.spinner":"Spinning icon","loadingTheme.text":"Static Text... ","loadingTheme.none":"Disabled",developerDescription:"You can click <1>here</1> to see the documentation related to advanced customization","edit border color":"Edit border color",successSyncButNoChange:"The current configuration is consistent with that in the cloud server",customTheme:"Customize colors and sizes","customThemeLabel.borderColor":"Border color","customThemeLabel.borderRadius":"Border Round Corner","customThemeLabel.textColor":"Text color","customThemeLabel.backgroundColor":"Background color","customThemeLabel.zoom":"Font scale (%)","customThemeLabel.opacity":"Text opacity (%)",resetToDefaultColor:"Reset to default colors",resetToDefaultSettings:"Reset to default settings",isTranslateTitle:"Enable translate page title",isTranslateTitleDescription:"When enabled, the webpage title will be translated",enableSearchEnhancement:"Enable Search Enhancement",enableSearchEnhancementDescription:"After activation, the right sidebar will automatically display 'Google News' search results for the corresponding English keywords on supported websites (Google News, Google Search (for certain keywords), Xueqiu, East Money, Futu, Tiger Community).",verifyService:"Verify service",verified:"Successful","field.langs":"Supported Language Code","field.model":"Model","field.translationEngine":"Translation engine","field.limitPerMinute":"Max requests per minute","field.limitPerSecond":"Max requests per second","field.maxTextLengthPerRequest":"Maximum text length per request","field.maxTextGroupLengthPerRequest":"Maximum number of paragraphs per request","field.apiUrl":"Custom API interface address","field.placeholderDelimiters":"Reserved placeholders","description.custom":"<a href='https://immersivetranslate.com/docs/services/custom/' target='_blank'>Custom interface access</a> requires reference documents","description.limitPerMinute":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next minute. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.limitPerSecond":"When the number of requests exceeds this limit, it will be temporarily suspended until the beginning of the next second. Due to various limitations of OpenAI's current services, please click <1>here</1> to view the latest suggested values","description.generalLimitPerSecond":"When the number of requests exceeds the limit, it will enter a queue state until the beginning of the next second.","description.prompt":"As a user, send the conversation to OpenAI, where {{text}} represents the text content of the paragraph, {{from}} indicates the language of the paragraph, and {{to}} indicates the target language. You can omit {{text}} (recommended), and it will be sent to OpenAI as a separate paragraph.","description.maxTextLengthPerRequest":"By default multiple paragraphs will be merged to reduce the number of requests, but if the total length of the paragraphs is too long, it may also cause the interface to respond slowly, so you can try to adjust this option to optimize speed","description.systemPrompt":"Send the conversation to OpenAI as a system, where {{text}} represents the text content of the paragraph, {{from}} represents the original language of the paragraph, and {{to}} represents the target language.","field.domain":"Domain","description.domain":"The default is: general. It can only be set when domain translation is activated in the Youdao API console, and the supported domains can be seen <1>Here </1>","field.scene":"Scenarios","description.scene":"The default is: general. It can be set only if the Alibaba Cloud API console has the Machine Translation Professional Edition enabled. Supported scenes can be found <1>here</1>.","field.vocabId":"User dictionary ID","description.vocabId":"Specified dictionary out_id, currently supported in English translation","description.model":"OpenAI's models, such as gpt-3.5-turbo, gpt-4, etc","description.maxTextGroupLengthPerRequest":"The number of paragraphs sent to translation service each time. Sending too many paragraphs to OpenAI at once can slow down the interface.","description.apiUrl":"Please add a specific URL with a path, <1>more instructions</1>",enabledExtension:"Enable extensions",clickToDisableExtension:"Click to disable extension",clickToEnableExtension:"Click to enable the extension",hasBeenDisabled:"Disabled","show password":"Show password",customContent:"Enter the name of the custom model",inputOptions:"Enhanced input box",mouseHoverOptions:"Mouse Hover",modifyMouseHoverKey:"Modify mouse hover shortcuts",enableInputTranslation:"enhanced input box?",enableInputTranslationDescription:"When enabled, enter {startingKey}{startingKey} direct in the input box and hit{inputTrailingTriggerKeyRepeatTimes}times{trailingKey}, translated into {inputTargetLanguage}",enableInputTranslationDescriptionForNoneKey:'When enabled, simply enter "Hello World" in the input box, then quickly press {inputTrailingTriggerKeyRepeatTimes} times on {trailingKey}, and it will be translated into the default target language.',inputTargetLanguage:"Set the default target language for the input box",inputTargetLanguageDescription:"The default target language for the translation input box, which is {startingKey}{startingKey} as the default language for triggering words.",inputTargetLanguageDescriptionForNoneKey:"Default target language for translation input box",inputStartingTriggerKeyTitle:"Set the delimiter character for partial translation of the input box",inputStartingTriggerKeyDescription:"When you don\u2019t need to translate the entire input box, the delimiter allows you to only translate the part from {startingKey}{startingKey} to the end of the input box. You can also specify a language code, for example: {startingKey}ja means to only translate the part from {startingKey}ja to the end of the input box",inputStartingTriggerKeyDescriptionForNoneKey:"The current setting does not require a prefix, so the partial text translation function of the input box cannot be used temporarily",inputTrailingTriggerKeyTitle:"Select a trigger character to indicate the end of input.",inputTrailingTriggerKeyDescription:"Quickly hitting {trailingKey} 3 times will start the translation",inputTrailingTriggerKeyTimeout:"Enter the interval time to end the trailing trigger",inputTrailingTriggerKeyTimeoutDescription:"Set the interval time for the end of input combo trigger (milliseconds)",spaceKey:"<spacekey>",noneKey:"No prefix needed, translate the entire text box directly",inputTranslationBlockUrlsTitle:"Do not enable input box enhancement on the following URLs",inputTranslationBlockUrlsDescription:"The input box enhancement will not work in the following URL",clickToSeeQuickDemo:"Click to expand the 30s tutorial video",inputHelperInfo:`Note: We have optimized the system to address an issue where certain characters in Chinese input methods were being converted into Chinese punctuation marks. For instance, when using Sogou Input Method, "/" would be changed to "\u3001". We now recognizes all corresponding Chinese symbols as triggering characters, including "//" and "\u3001\u3001".

Additionally, we support using Chinese aliases of language codes as commands. For example, entering "/Japanense Hello World" will translate the text into Japanese. You can click here to see a list of all supported language codes.`,reloadCurrentPage:"Please refresh the current page before starting translation",noLocalFilePermissionForPDF:"No permission to read local files temporarily, please click the button above and then import local files",noPermissionForThisPage:"\u26A0\uFE0F No permission to translate the current page",retryAllParagraphs:"Retry all error paragraphs",retryAllButton:"Retry All",errorTooltipTitle:"Click to get the error details",errorModalTitle:"Oops, something went wrong",disableConfirm:"Bilingual information enhancement settings",disableOnce:"Disable Once",disableGlobal:"Disable Forever",disableTint:"* You can re-enable it in {option}.",searchEnhancementNotes:"We found that the news results of Chinese keywords and English keywords are very different. After enabling the immersive translate bilingual information enhancement function, we will automatically search for the same keywords in English on supported websites (Google News, Google Search (for certain keywords), Xueqiu, East Money, Futu, Tiger) and display them on the right side. If you don\u2019t need this feature, you can choose to disable it",option:"Settings",saveSettings:"Save",closeModal:"Close",enableInputTranslationWithoutTriggerKeyTitle:"\u201CEnable quick hit 3 times {trailingKey}, directly translate the entire input box into {inputTargetLanguage}",enableInputTranslationWithoutTriggerKeyDescription:"To specify the target language, please add a language code at the beginning, such as: ja Hello world",mouseHoverShortcutPlaceholder:"e.g. Shift",deepLProName:"Premium Membership (Recommended)",deepLProDescription:"You can directly use this service",deeplProDescriptionForNormal:"No setup required, available for premium members after login, <1>Upgrade</1>",deepLCustomDescription:"Requires an international credit card, activate at <1>DeepL</1> official site, click to see <2>documentation</2>",deepLCustomName:"Custom Auth Key",chooseProviderLabel:"Choose a service provider",openaiProName:"Premium Membership (Recommended)",openaiProDescription:"The current plan can be used directly",openaiProDescriptionForNormal:"No setup required, available for premium members after login, <1>Upgrade</1>",openaiCustomDescription:"Can be obtained from OpenAI, Azure OpenAI, or other third-party services, <1>Click here to view documentation</1>",openaiCustomName:"Custom API Key",needLoginAction:"(Premium or custom)",goLoginOrAction:"(Premium or go to setting)",yearly:"Annual Renewal",quarterly:"Quarterly Renewal",monthly:"Monthly Renewal",yearlyForOnce:"One-time Annual",monthlyForOnce:"One-time Monthly",daily:"Daily Renewal",year:"Annual Renewal",quarter:"Quarterly Renewal",month:"Monthly Renewal",day:"Daily Renewal",onetime_7day:"7-day Trial Pack",currentPlanDescriptionForFree:"Current plan: Free",currentPlanDescriptionForContinuous:"Current plan: {plan}, will auto-renew on {endAt}",currentPlanDescriptionForAutoRenewCaceling:"Current plan: {plan}, will expire on {endAt}. After expiration, it will not be automatically renewed",currentYearlyPlanDescriptionForAutoRenewCacelingWithRealPaiedUser:"Current plan: {plan}, will expire on {endAt}, will not be auto-renewed after expiration <br/><1>Manage the renewal plan</1>",currentYearlyPlanDescriptionForAutoRenewCacelingWithAdmin:"The current plan: {plan}, will expire on {endAt}. After expiration, it will not be automatically renewed. <br/><1>Click here to enable continuous annual renewal</1>",currentPlanDescriptionForOneTime:"Current plan: {plan}, expiring on {endAt}. <1>Upgrade to annual</1> or <2>monthly</2> or pro membership",upgradePlan:"Click here to upgrade to Pro membership",upgradeToPro:"Upgrade to Pro","popup.openPro":"Enjoy unrestricted access to DeepL and OpenAI translations after upgrading to Pro Membership. Click here to upgrade","popup.openProForPro":"You are a Pro member, you can directly use DeepL and OpenAI translations",currentAccount:"Account",enableAutoSyncUserSettings:"Enable auto-sync user settings",modalEnableInputTranslationTitle:"Writing Settings",modalEnableInputTranslationDesc:"You just triggered the translation of the immersive translate input box by quickly tapping the space bar 3 times. The content of the input box will be translated into the default target language. You can undo the translation with Ctrl+Z. <br /><br />If this was a mistake, don't worry, you can choose to disable it this time, or permanently disable input box translation.",saveAndNotShowAgain:"Save and don't show prompt again",disableInputTranslationTips:"* You can also set other shortcuts in {option}, {learnMore}.",learnMore:"Click here to learn more",continueEnalbeInputTranslation:"Continue to enable input translation",autoRenewTrialSuffix:'(In trial, <a href="https://immersivetranslate.com/profile/?upgradeFromTrial=true" id="upgradeFromTrial">Upgrade to paid Pro now</a>)',upgradeFromTrialTitle:"Upgrade to Pro membership",subtitle:"Video Subtitles",youtubeService:"Video Subtitle Translation Service","subtitle.disabledSubtitle":"Disable Video Subtitle Feature Permanently ","subtitle.disabledSubtitleDescription":"If the video subtitles of immersive translate conflict with other extensions, you can choose to permanently disable the video subtitle function of immersive translation or uninstall other conflicting extensions","subtitle.autoEnableSubtitle":"Automatically Enable Bilingual Subtitles","subtitle.autoEnableSubtitleDescription":"After enabling, when the video is playing, bilingual subtitles will automatically be displayed. Otherwise, you need to click the translation button to display them","subtitle.preTranslation":"Use immersive translate to translate subtitles","subtitle.preTranslationDescription":"After enabling, the specified translation service below will be used to translate the entire subtitle in advance. A 1-hour video will consume approximately 50,000 Tokens or characters. Please use it judiciously. If disabled, the machine-translated subtitles that come with the original video will be used preferentially","subtitle.humanSubtitlesPreferred":"Use manual subtitles first","subtitle.humanSubtitlesPreferredDescription":"When the video has manual subtitles in the target language, prioritize using manual subtitles (recommended)",videoSubtitleTranslationDescription:"Specify a separate translation service for video subtitles.",subtitleTranslating:"Immersive Translate is using {service} to translate subtitles...",subtitleLoading:"Loading subtitles...",bilingual:"Bilingual","field.action":"Enable Baidu terminology?","description.action":"After enabling, an action=1 parameter will be added to the request to inform Baidu to enable terminology. <1>For more explanation, please refer to the [official documentation]</1>",closeQuickTranslation:"Close Floating Button","closeQuickTranslation.untilNext":"Close this time until the next visit","closeQuickTranslation.currentWebsite":"Disable the current website","closeQuickTranslation.alwaysClose":"Permanently disable","closeQuickTranslation.settingOpen":"(Can be activated in <1>Settings Page</1>)","closeQuickTranslation.cancel":"Cancel","closeQuickTranslation.confirm":"confirm","floatBall.popup":"Open quick settings panel","floatBall.translate":"Click to translate this page","floatBall.showOriginal":"Click to switch back to the original text","floatBall.close":"Close Floating Button","floatBallOptions.enableDescPc":"When you enable the floating button, a translation button appears on the right. Click it to translate","floatBallOptions.enableDesc":"After you turn off the floating button, you can bring it back with {touch}. To avoid losing the floating button by accidentally turning it off, it is highly recommended you bookmark this settings page.","description.azureApiUrl":"Enter the custom API interface address",shareBtnTitle:"Click to share this bilingual page","floatBall.share":"Share Page",confirmSupportMouse:"Force Enable Mouse Support",confirmSupportMouseDescription:"The current browser does not support mouse functions, do you want to forcibly enable mouse support?",sampleTargetText:"Night is coming, I will start watching from now on until death. I will not marry, not seal the land, not have children. I will not wear a crown, not fight for glory. I will be loyal to my duty, life and death.",sampleSourceText:"\u957F\u591C\u5C06\u81F3\uFF0C\u6211\u4ECE\u4ECA\u5F00\u59CB\u5B88\u671B\uFF0C\u81F3\u6B7B\u65B9\u4F11\u3002\u6211\u5C06\u4E0D\u5A36\u59BB\u3001\u4E0D\u5C01\u5730\u3001\u4E0D\u751F\u5B50\u3002\u6211\u5C06\u4E0D\u6234\u5B9D\u51A0\uFF0C\u4E0D\u4E89\u8363\u5BA0\u3002\u6211\u5C06\u5C3D\u5FE0\u804C\u5B88\uFF0C\u751F\u6B7B\u4E8E\u65AF\u3002",errorReason:"Error reason: {message}","proQuotaExceededError.onetime7day":'You can resolve this issue by choosing one of the following options:<br/><br/>1. Switch to {anotherService} or another translation service<br/>2. Upgrade to <a class="{brandId}-primary-link" href="{href}" target="_blank">Monthly/Annual membership</a>',"proQuotaExceededError.trial":'You can resolve this issue by choosing one of the following options:<br/><br/>1. Switch to {anotherService} or another translation service<br/>2. <a class="{brandId}-primary-link" href="{href}" target="_blank">Upgrade to paid Pro now</a>',"proQuotaExceededError.nonTrial":'You can resolve this issue by choosing one of the following options:<br/><br/>1. Switch to {anotherService} or another translation service<br/>2. Purchase <a class="{brandId}-primary-link" href="{href}" target="_blank">Data Package for {translationService}</a>',"proQuotaExceededError.resetTime":"<br/>3. Quota reset time: {resetTime}","subtitle.supportedSites":"Bilingual subtitles are now supported on these websites (Note: Due to technical limitations, some websites need to be refreshed after the subtitles are turned on for the first time, or wait for the translation to complete to display bilingual subtitles)",viewWithImmersiveTranslate:"Bilingual version (Immersive Translate)"};var rg=[{code:"zh-CN",messages:eg},{code:"zh-TW",messages:tg},{code:"en",messages:ng}];var D_={};for(let e of rg)D_[e.code]=e.messages;var ft="immersive-translate";var ce="immersiveTranslate";var Ek=ce+"GoogleAccessToken",kk=ce+"AuthFlow";var Ck=ce+"AuthState",Lk=ce+"IframeMessage",Ok=ce+"WaitForRateLimit",Dk=ce+"DocumentMessageAsk",ag=ce+"DocumentMessageTellThirdParty",Rk=ce+"showError",cc=ce+"DocumentMessageThirdPartyTell",Pk=ce+"DocumentMessageEventUpload",Nk=ce+"DocumentMessageHandler",Mk=`${ce}Share`,Ik=`${ce}ReqDraft`,Fk=`${ce}ResDraft`,Bk=`${ce}Container`,zk=`${ce}SpecifiedContainer`;var Uk=`${ce}PageTranslatedStatus`,jk=`${ce}PageUrlChanged`,$k=`${ce}ReceiveCommand`,Hk=ce+"LastUseMouseHoverTime",Wk=ce+"LastUseInputTime",qk=ce+"LastUseManualTranslatePageTime",Kk=`${ce}PopupReceiveMessage`,R_="immersivetranslate.com",P_="config.immersivetranslate.com",Gk=`https://${R_}/`,Vk=`https://${P_}/default_config.json`,Xk=`${ce}Mark`;var og=`${ce}Root`,uc=`data-${ft}-effect`,Yk=`data-${ft}-translation-element-mark`,Zk=`${ce}TranslationElementMark`,Qk=`${ce}TranslatedMark`,Jk=`${ce}ParagraphId`,e5=`${ce}LoadingId`,t5=`data-${ft}-loading-id`,n5=`${ce}ErrorId`,r5=`data-${ft}-error-id`,i5=`${ce}AtomicBlockMark`,a5=`${ce}ExcludeMark`,o5=`data-${ft}-exclude-mark`,s5=`${ce}StayOriginalMark`,l5=`${ce}PreWhitespaceMark`,c5=`${ce}InlineMark`,u5=`${ce}BlockMark`,d5=`${ce}Left`,f5=`${ce}Right`,p5=`${ce}Width`,h5=`${ce}Height`,m5=`${ce}Top`,g5=`${ce}FontSize`;var b5=`${ce}GlobalStyleMark`,N_=["@","#"];var y5=`${ft}-target-wrapper`,w5=`${ft}-pdf-target-container`,v5=`${ft}-target-inner`,x5=`${ft}-source-wrapper`,_5=`${ft}-target-translation-block-wrapper`,T5=`${ft}-root-translation-theme`,S5=`${ce}RootTranslationTheme`,A5=`${ft}-target-translation-vertical-block-wrapper`,E5=`${ft}-target-translation-pdf-block-wrapper`,k5=`${ft}-target-translation-pre-whitespace`,C5=`${ft}-target-translation-inline-wrapper`;var ig=[{type:"select",name:"codename",labelKey:"field.translationEngine",default:"youdao",required:!1,options:[{label:"translationServices.google",value:"google"},{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.aws",value:"aws"}]}];var L5={bing:{name:"\u5FAE\u8F6F\u7FFB\u8BD1",homepage:"https://www.bing.com/translator"},google:{name:"Google",homepage:"https://translate.google.com/"},deepl:{name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://immersivetranslate.com/docs/services/deepL/",providers:[{name:"pro",nameKey:"deepLProName",descriptionKey:"deepLProDescription",descriptionKeyForNormal:"deeplProDescriptionForNormal",descriptionLink1:"https://immersivetranslate.com/pricing"},{name:"custom",nameKey:"deepLCustomName",descriptionKey:"deepLCustomDescription",descriptionLink1:"https://www.deepl.com/translator",descriptionLink2:"https://immersivetranslate.com/docs/services/deepL/"}],allProps:[{name:"authKey",providers:["custom"],label:"Auth Key",required:!0,type:"password"}]},openai:{name:"Open AI",homepage:"https://openai.com/api/",docUrl:"https://immersivetranslate.com/docs/services/openai/",providers:[{name:"pro",nameKey:"openaiProName",descriptionKey:"openaiProDescription",descriptionKeyForNormal:"openaiProDescriptionForNormal",descriptionLink1:"https://immersivetranslate.com/pricing"},{name:"custom",nameKey:"openaiCustomName",descriptionKey:"openaiCustomDescription",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/"}],allProps:[{name:"APIKEY",providers:["custom"],required:!0,type:"password"},{name:"model",labelKey:"field.model",descriptionKey:"description.model",required:!1,type:"openai-model-select",default:"gpt-3.5-turbo-1106",providers:["custom"],options:[{providers:["custom","pro"],label:"gpt-3.5-turbo",value:"gpt-3.5-turbo"},{providers:["custom","pro"],label:"gpt-3.5-turbo-1106",value:"gpt-3.5-turbo-1106"},{providers:["custom","pro"],label:"gpt-3.5-turbo-0613",value:"gpt-3.5-turbo-0613"},{providers:["custom"],label:"gpt-4-1106-preview",value:"gpt-4-1106-preview"},{providers:["custom"],label:"gpt-4",value:"gpt-4"}]},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.limitPerSecond",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/",type:"number",default:10,providers:["custom"]},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.openai.com/v1/chat/completions",descriptionKey:"description.apiUrl",descriptionLink1:"https://immersivetranslate.com/docs/services/openai/",optional:!0,providers:["custom"]},{name:"systemPrompt",label:"System Prompt",required:!1,descriptionKey:"description.systemPrompt",type:"textarea",optional:!0,default:"You are a translation engine, you can only translate text and cannot interpret it, and do not explain."},{name:"prompt",label:"Prompt",required:!1,descriptionKey:"description.prompt",type:"textarea",default:`Translate the text to {{to}}, please do not explain any sentences, just translate or leave them as they are.:

{{text}}`,optional:!0}]},transmart:{name:"Transmart",homepage:"https://transmart.qq.com/"},youdao:{name:"Youdao",homepage:"https://youdao.com/",docUrl:"https://immersivetranslate.com/docs/services/youdao/",allProps:[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:200,optional:!0},{name:"domain",required:!1,labelKey:"field.domain",descriptionKey:"description.domain",descriptionLink1:"https://fanyi.youdao.com/openapi/",type:"text",default:"general",optional:!0},{name:"vocabId",required:!1,labelKey:"field.vocabId",descriptionKey:"description.vocabId",type:"text",default:"",optional:!0}]},tencent:{name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://immersivetranslate.com/docs/services/tencent/",allProps:[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]},aliyun:{name:"Aliyun",homepage:"https://translate.alibaba.com/",docUrl:"https://immersivetranslate.com/docs/services/aliyun/",allProps:[{name:"AccessKeyID",required:!0,type:"text"},{name:"AccessKeySecret",required:!0,type:"password"},{name:"scene",labelKey:"field.scene",descriptionKey:"description.scene",descriptionLink1:"https://help.aliyun.com/document_detail/158267.html",required:!1,optional:!0,type:"text",default:"general"}]},azure:{name:"azure",homepage:"https://learn.microsoft.com/en-us/azure/cognitive-services/translator/text-translation-overview",docUrl:"https://immersivetranslate.com/docs/services/azure/",allProps:[{name:"region",required:!1,default:"eastasia",type:"text"},{name:"APIKEY",required:!0,type:"password"},{name:"apiUrl",labelKey:"field.apiUrl",required:!1,type:"text",default:"https://api.cognitive.microsofttranslator.com/",descriptionKey:"description.azureApiUrl",optional:!0}]},papago:{name:"Papago",homepage:"https://translate.google.com/",canary:!0},baidu:{name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://immersivetranslate.com/docs/services/baidu/",allProps:[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:1,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0},{name:"action",required:!1,labelKey:"field.action",descriptionKey:"description.action",descriptionLink1:"https://fanyi-api.baidu.com/doc/21",type:"boolean",default:!1,optional:!0}]},volc:{name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://immersivetranslate.com/docs/services/volcano/",allProps:[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1800,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:8,optional:!0}]},caiyun:{name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://immersivetranslate.com/docs/services/caiyun/",allProps:[{name:"token",required:!0,type:"password"}]},cai:{name:"Cai",homepage:"https://fanyi.caiyunapp.com/",alpha:!0},custom:{name:"Custom",beta:!0,homepage:"https://immersivetranslate.com/docs/services/custom/",titleKey:"description.custom",allProps:[{name:"url",label:"API URL",required:!0,type:"text"},{name:"langs",required:!1,labelKey:"field.langs",type:"textarea",default:"zh-CN,en",optional:!0},{name:"placeholderDelimiters",required:!1,labelKey:"field.placeholderDelimiters",type:"text",default:N_,optional:!0},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0}]},mock:{name:"Mock",homepage:"https://www.google.com"},mock2:{name:"Mock2",homepage:"https://www.google.com"},tenAlpha:{name:"TenAlpha",homepage:"https://fanyi.qq.com/",alpha:!0},you:{name:"You",alpha:!0,homepage:"https://youdao.com/"},openl:{name:"Openl",homepage:"https://openl.club/",docUrl:"https://immersivetranslate.com/docs/services/openL/",allProps:[...ig,{type:"password",name:"apikey",required:!0}],props:ig},volcAlpha:{name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},d:{name:"D () ",canary:!0,homepage:"https://www.deepl.com/translator"},dpro:{name:"DPro (Canary) ",canary:!0,homepage:"https://www.deepl.com/translator"},deeplx:{name:"DeepLX (Beta)",beta:!0,homepage:"https://www.deepl.com/translator",allProps:[{name:"url",label:"API URL",required:!0,type:"text"},{name:"limit",required:!1,labelKey:"field.limitPerSecond",descriptionKey:"description.generalLimitPerSecond",type:"number",default:5,optional:!0},{name:"maxTextLengthPerRequest",required:!1,labelKey:"field.maxTextLengthPerRequest",descriptionKey:"description.maxTextLengthPerRequest",type:"number",default:1200,optional:!0},{name:"maxTextGroupLengthPerRequest",required:!1,labelKey:"field.maxTextGroupLengthPerRequest",descriptionKey:"description.maxTextGroupLengthPerRequest",type:"number",default:1,optional:!0}]},niu:{name:"niutrans",homepage:"https://niutrans.com/",docUrl:"https://immersivetranslate.com/docs/services/niu",allProps:[{name:"APIKEY",required:!0,type:"password"}]}},O5={type:ce+"ChildFrameToRootFrameIdentifier"};var D5=hn()?"https://dash.immersivetranslate.com/#general":"http://localhost:8000/dist/userscript/options/#general";var R5=hn()||Nn()?"https://api2.immersivetranslate.com":"https://test-api2.immersivetranslate.com",P5=hn()||Nn()?"https://immersivetranslate.com/accounts/login?from=plugin":"https://test.immersivetranslate.com/accounts/login?from=plugin",M_=hn()||Nn()?"https://immersivetranslate.com/profile":"https://test.immersivetranslate.com/profile",dc=hn()||Nn()?"https://immersivetranslate.com/pricing":"https://test.immersivetranslate.com/pricing",I_=hn()||Nn()?"https://immersivetranslate.com/topup?type=open_ai&":"https://test.immersivetranslate.com/topup?type=open_ai&",F_=hn()||Nn()?"https://immersivetranslate.com/topup?type=deepl&":"https://test.immersivetranslate.com/topup?type=deepl&",N5=dc+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_more",M5=dc+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_footer",I5=dc+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal",F5=I_+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",B5=F_+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",z5=M_+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal&upgradeFromTrial=true";var{ZipReader:B_,BlobReader:pc,TextReader:fc,TextWriter:z_,BlobWriter:lg,ZipWriter:U_}=ds;aa({useWebWorkers:!1});var j_=async e=>{let t=new Uint8Array(await e.slice(0,4).arrayBuffer());return t[0]===80&&t[1]===75&&t[2]===3&&t[3]===4},Rn=null,eo=0,to=0,xr=0,sg=!1,$_=kr(),H_=$_.PROD==="1",W_=async e=>{let n=await new B_(new pc(e)).getEntries();e.name&&e.name.endsWith(".zip")&&n.every(c=>c.filename.startsWith(e.name.slice(0,-4)+"/"))&&(n=n.map(c=>(c.filename=c.filename.slice(e.name.length-3),c)));let r=new Map(n.map(l=>[l.filename,l])),i=l=>(c,...u)=>r.has(c)?l(r.get(c),...u):null,a=i(l=>l.getData(new z_)),o=i((l,c)=>l.getData(new lg(c)));return{entries:n,loadText:a,loadBlob:o,getSize:l=>r.get(l)?.uncompressedSize??0}},cg=async e=>e.isFile?e:(await Promise.all(Array.from(await new Promise((t,n)=>e.createReader().readEntries(r=>t(r),r=>n(r))),cg))).flat(),q_=async e=>{let t=await cg(e);t=t.map(f=>f);let n=[],r=await Promise.all(t.map(f=>new Promise((d,p)=>f.file(b=>d([b,f.fullPath]),b=>p(b))))),i=new Map(r.map(([f,d])=>{let p=d.replace(e.fullPath+"/","");return n.push({filename:p,...f}),[p,f]})),a=new TextDecoder,o=f=>f?a.decode(f):null,s=f=>i.get(f)?.arrayBuffer()??null;return{entries:n,loadText:async f=>o(await s(f)),loadBlob:async f=>i.get(f),getSize:f=>i.get(f)?.size??0}},K_=({name:e,type:t})=>t==="application/vnd.comicbook+zip"||e.endsWith(".cbz"),G_=({name:e,type:t})=>t==="application/x-fictionbook+xml"||e.endsWith(".fb2"),V_=({name:e,type:t})=>t==="application/x-zip-compressed-fb2"||e.endsWith(".fb2.zip")||e.endsWith(".fbz"),X_=async(e,t)=>{let n;if(e.isDirectory){let a=await q_(e);Rn=a,n=await new Or(a).init()}else if(e.size)if(await j_(e)){let a=await W_(e);if(Rn=a,K_(e))n=jc(a,e);else if(V_(e)){let{entries:o}=a,s=o.find(c=>c.filename.endsWith(".fb2")),l=await a.loadBlob((s??o[0]).filename);n=await mo(l)}else n=await new Or(a).init()}else await Jc(e)?n=await new Mi({unzlib:Nf}).open(e):G_(e)&&(n=await mo(e));else throw new Error("File not found");if(!n)throw new Error("File type not supported");let r=new Ci(n,t),i=await r.display();return document.body.append(i),r},Ie=document.querySelector.bind(document),Gn=!1;function ug(){let e=document.querySelectorAll("iframe");for(let r=0;r<e.length;r++){let a=e[r].contentDocument,o=a&&a.body;o&&o.setAttribute("contenteditable",!1)}Gn=!1;let t=document.getElementById("edit");t&&(t.innerText=Gn?"Preview (\u9884\u89C8)":"Edit (\u7F16\u8F91)");let n=document.querySelectorAll("[data-type='iframe-title']");for(let r=0;r<n.length;r++){let i=n[r];i.innerText=Gn?" \uFF08\u4EE5\u4E0B\u5185\u5BB9\u5F53\u524D\u53EF\u7F16\u8F91\uFF09":""}}function Y_(){let e=document.querySelectorAll("iframe");for(let r=0;r<e.length;r++){let a=e[r].contentDocument,o=a&&a.body;o&&o.setAttribute("contenteditable",!0)}Gn=!0;let t=document.getElementById("edit");t&&(t.innerText=Gn?"Preview (\u9884\u89C8)":"Edit (\u7F16\u8F91)");let n=document.querySelectorAll("[data-type='iframe-title']");for(let r=0;r<n.length;r++){let i=n[r];i.innerText=Gn?" \uFF08\u4EE5\u4E0B\u5185\u5BB9\u5F53\u524D\u53EF\u7F16\u8F91\uFF09":""}}function Z_(){Gn?ug():Y_()}var hc=class{style={spacing:1.4,justify:!0,hyphenate:!0};layout={margin:48,gap:48,maxColumnWidth:720};closeSideBar(){Ie("#dimming-overlay").classList.remove("show"),Ie("#side-bar").classList.remove("show")}constructor(){Ie("#side-bar-button").addEventListener("click",()=>{Ie("#dimming-overlay").classList.add("show"),Ie("#side-bar").classList.add("show")}),Ie("#dimming-overlay").addEventListener("click",()=>this.closeSideBar());let t=zc([{name:"layout",label:"Layout",type:"radio",items:[["Paginated","paginated"],["Scrolled","scrolled"]],onclick:n=>{this.layout.flow=n}}]);t.element.classList.add("menu"),Ie("#menu-button").append(t.element),Ie("#menu-button > button").addEventListener("click",()=>t.element.classList.toggle("show")),t.groups.layout.select("paginated")}async open(t){Ie("#progress").classList.remove("none");try{document.addEventListener(ag,b=>{let{detail:g}=b;if(g)try{let h=JSON.parse(g);if(h&&h.type&&h.payload){if(h.type==="paragraphTranslated"){let{ok:m}=h.payload;if(m?to++:xr++,s&&eo){let y=to,w=to+xr,A=y/eo*100,T=Math.floor(A),x=Math.floor(w/eo*100);if(T>100&&(T=100),x>100&&(x=100),window.dispatchEvent(new CustomEvent("immersive-translate-progress-change",{detail:{successProgress:T,totalProgress:x}})),s.innerText=`${T}%`,x===100&&xr>0){let v=document.querySelector("#error");v.innerHTML=hi.sanitize(`${xr} failed(\u5931\u8D25). <span class="link">Retry all (\u70B9\u6B64\u91CD\u8BD5\u5168\u90E8\u9519\u8BEF\u6BB5\u843D)</span>`)}T===100&&(sg||(sg=!0,lc({particleCount:100,spread:160})))}}else if(h.type==="totalParagraphsCount")h.payload.totalParagraphsCount&&(eo=h.payload.totalParagraphsCount);else if(h.type==="translateStart")to=0,xr=0,window.dispatchEvent(new CustomEvent("immersive-translate-start-translate"));else if(h.type==="restorePage"){let m=document.querySelector("#error"),y=document.querySelector("#progress-number");m&&(m.innerHTML=""),y&&(y.innerText="")}}}catch{}}),this.view=await X_(t,this.#e.bind(this));let{book:n}=this.view,r=n.sections,i=document.querySelector("#chapters"),a=n.resources,o=[];if(a&&a.guide&&a.guide.length)for(let b of a.guide)o.push(b.href);let s=document.querySelector("#progress-number"),l=document.querySelector("#error");l.addEventListener("click",b=>{for(b.preventDefault();l.firstChild;)l.removeChild(l.firstChild);xr=0,document.dispatchEvent(new CustomEvent(cc,{detail:JSON.stringify({type:"retryFailedParagraphs"})}))}),Ie("#open").addEventListener("click",()=>{window.location.reload()}),Ie("#export").addEventListener("click",async b=>{b.preventDefault(),Rn||alert("Load failed");let g=document.querySelector("#export");g.classList.add("disabled");let h=document.querySelector("#exportAction");h&&h.classList.add("none");let m=document.querySelector("#exportStatus");m&&(m.innerText="Exporting..."),ug();let y=Rn.entries,w=new lg,A=new U_(w),T=new fc("application/epub+zip");await A.add("mimetype",T,{level:0,extendedTimestamp:!1});for(let E=0;E<y.length;E++){let C=y[E],D=C.filename;if(D==="mimetype"||!D)continue;let O=D.replace(/\'/g,"\\'"),I=document.querySelector("iframe[id='"+O+"']");if(I){let R=I.contentDocument.cloneNode(!0);R.querySelectorAll("["+uc+"]").forEach(L=>{if(H_){delete L[og];let j=Object.keys(L.dataset).filter(q=>q.startsWith(ce));for(let q of j)delete L.dataset[q]}else{let j=Object.keys(L.dataset).filter(q=>q.startsWith(ce));for(let q of j)delete L.dataset[q]}L.removeAttribute(uc)}),R.querySelectorAll("[data-id]").forEach(L=>{L.removeAttribute("data-id")}),R.querySelectorAll("[contenteditable]").forEach(L=>{L.removeAttribute("contenteditable")}),R.querySelectorAll("style").forEach(L=>{L.getAttribute("type")||L.setAttribute("type","text/css")});let W=new XMLSerializer().serializeToString(R),J=new fc(W);try{await A.add(C.filename,J)}catch{}}else{let R=n.metadata;if(C.filename===n.opfPath&&R&&R.identifier)try{let B=await Rn.loadText(C.filename),F=new DOMParser().parseFromString(B,"text/xml"),$=F.getElementById(F.documentElement.getAttribute("unique-identifier"))??F.getElementsByTagNameNS(NS.DC,"identifier")[0],ne=Math.random().toString(10).slice(2,15);$.textContent=ne;let W=new XMLSerializer().serializeToString(F),J=new fc(W);await A.add(C.filename,J)}catch{let F=await Rn.loadBlob(C.filename);await A.add(C.filename,new pc(F))}else try{let B=await Rn.loadBlob(C.filename);await A.add(C.filename,new pc(B))}catch{}}}await A.close();let x=await w.getData(),v=t.name;t.name.endsWith(".epub.zip")&&(v=v.replace(".epub.zip",".epub"));let _=v.lastIndexOf("."),S=Math.min(160,_);v=v.substring(0,S)+" (Translated).epub",await si.saveAs(x,v),g&&g.classList.remove("disabled"),h&&h.classList.remove("none"),m&&(m.textContent="")}),Ie("#edit").addEventListener("click",b=>{b.preventDefault(),Rn||alert("Load failed"),Z_()}),Fa.data("translationstatus",()=>({progresstxt:"\u5F00\u59CB\u7FFB\u8BD1(Translate)",state:"init",starttranslatebypopup:function(){this.state!=="started"&&(this.state="started",this.progresstxt="\u51C6\u5907\u4E2D...")},starttranslate:function(){if(this.state==="started")return;this.state="started",this.progresstxt="\u51C6\u5907\u4E2D...";let g=Ie("#translationMode").value;(!g||g!=="dual"&&g!=="translation")&&(g="dual"),document.dispatchEvent(new CustomEvent(cc,{detail:JSON.stringify({type:"translatePage",data:{translationMode:g}})}))},changeProgress(b){this.state="started",b&&b.detail&&b.detail.successProgress&&(this.progresstxt="\u5DF2\u7FFB\u8BD1 "+b.detail.successProgress+"%")}})),Fa.start();let u=(n.metadata||{}).title||"Unknown",f=document.querySelector("#bookTitle");f.textContent=u;let d=!1,p=0;for(let b=0;b<r.length;b++){let h=r[b].id,m=await n.loadText(h),y=new DOMParser().parseFromString(m,"application/xhtml+xml"),w=document.createElement("div");w.classList.add("flex"),w.classList.add("justify-center"),w.classList.add("items-center"),i.append(w);let A=document.createElement("h2");A.classList.add("notranslate"),A.innerText=h,w.append(A);let T=document.createElement("span");T.dataset.type="iframe-title",T.classList.add("notranslate"),T.innerText="",w.append(T);let x=document.createElement("iframe");x.setAttribute("id",h),x.setAttribute("width","80%"),x.setAttribute("height","400px"),x.srcdoc=y.documentElement.outerHTML,i.append(x),x.onload=()=>{if(p++,p===r.length){d=!0,Ie("#progress").classList.add("none"),setTimeout(()=>{let D=document.createElement("blockquote");D.classList.add("notranslate");let O=`<p class="notranslate">1. If the Epub contains images, it's fine for the edit box below not to show the images, the exported Epub will contain the images.<br>\u5982\u679C Epub \u91CC\u5305\u542B\u56FE\u7247\uFF0C\u4E0B\u9762\u7684\u7F16\u8F91\u6846\u4E0D\u663E\u793A\u56FE\u7247\u662F\u6B63\u5E38\u7684\uFF0C\u5BFC\u51FA\u540E\u7684 Epub \u91CC\u4F1A\u5305\u542B\u56FE\u7247\u3002<br><br>2. When the translation is finished, you can click the Edit button above to modify the translation.<br>\u7FFB\u8BD1\u5B8C\u6210\u540E\uFF0C\u4F60\u53EF\u4EE5\u70B9\u51FB\u4E0A\u65B9\u7684\u7F16\u8F91\u6309\u94AE\u6765\u4FEE\u6539\u8BD1\u6587\u3002<br><br>3. When there is a translation error, you can click Retry All above, or click Show Original and translate again. Or the whole page can be refreshed and started again, because the translated part is always cached and no further requests will be sent.<br>\u5F53\u51FA\u73B0\u7FFB\u8BD1\u9519\u8BEF\u65F6\uFF0C\u53EF\u4EE5\u70B9\u51FB\u4E0A\u65B9\u7684\u91CD\u8BD5\u5168\u90E8\uFF0C\u6216\u8005\u70B9\u51FB\u6D4F\u89C8\u5668\u6269\u5C55\u56FE\u6807\u5148\u663E\u793A\u539F\u6587\uFF0C\u518D\u7FFB\u8BD1\u3002\u6216\u8005\u6574\u4E2A\u5237\u65B0\u9875\u9762\u91CD\u65B0\u6765\u8FC7\u4E5F\u884C\uFF0C\u56E0\u4E3A\u5DF2\u7FFB\u8BD1\u7684\u90E8\u5206\u603B\u662F\u6709\u7F13\u5B58\u7684\uFF0C\u4E0D\u4F1A\u518D\u53D1\u51FA\u8BF7\u6C42\u3002`,I=!1;try{let F=document.querySelector("meta[name='immersive-translate-meta']");if(F){let $=Fl(F?.content||""),ne=new TextDecoder().decode($),W=JSON.parse(ne);W&&W.isProUser&&(I=!0)}}catch{}I?O+=`<br><br>4. If you have additional needs, you can also purchase the Pro-only  <a
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
</p>`:O+="</p>";let R=document.querySelector("meta[name='immersive-translate-ebook-tips']");if(R){let F=R.getAttribute("content");F&&(O+=F)}D.innerHTML=hi.sanitize(O),document.querySelector("#tips").append(D)},1e3),document.dispatchEvent(new CustomEvent("immersiveTranslateEbookLoaded"));let _=document.querySelectorAll("iframe"),S=0;_.forEach(D=>{let R=D.contentDocument.body.innerText.length;S+=R});let E=document.createElement("p");E.classList.add("notranslate"),E.innerText=`The book is about ${S} characters in total (\u672C\u4E66\u5927\u7EA6 ${S} \u4E2A\u5B57\u7B26)`,Ie("#stats").append(E)}};let v=b/r.length*100;document.getElementById("progressBar").value=v}}catch(n){alert(n.message),window.location.reload()}}#e(t){}},dg=async e=>{document.body.removeChild(Ie("#drop-target"));let t=new hc;globalThis.reader=t,await t.open(e),Ie("#editor").classList.remove("none")},Q_=e=>e.preventDefault(),J_=e=>{e.preventDefault();let t=Array.from(e.dataTransfer.items).find(n=>n.kind==="file");if(t){let n=t.webkitGetAsEntry();dg(n.isFile?t.getAsFile():n).catch(r=>{})}},fg=Ie("#drop-target");fg.addEventListener("drop",J_);fg.addEventListener("dragover",Q_);Ie("#file-input").addEventListener("change",e=>dg(e.target.files[0]).catch(t=>{}));Ie("#file-button").addEventListener("click",()=>Ie("#file-input").click());})();
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
