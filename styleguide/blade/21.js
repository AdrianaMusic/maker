(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{108:function(n,a,o){var t=o(224);"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,o(3).default)("7a79bfad",t,!0,{})},149:function(n,a,o){var t=o(226);"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,o(3).default)("2bad464f",t,!0,{})},223:function(n,a,o){"use strict";var t=o(108),d=o.n(t);o.d(a,"default",(function(){return d.a}))},224:function(n,a,o){var t=o(1)(!1);t.push([n.i,"\n.CheckboxContainer_160dX {\n\tposition: relative;\n\tdisplay: inline-block;\n\tline-height: 0;\n\tcursor: pointer;\n\t-webkit-user-select: none;\n\t        user-select: none;\n\n\t/* these should later be pulled from\n\tthe ThemeProvider component */\n\t--color-border: rgba(0, 0, 0, 0.3);\n\t--color-border-active: rgba(0, 0, 0, 0.9);\n\t--color-background: rgba(0, 0, 0, 0.9);\n\t--color-foreground: rgba(255, 255, 255, 0.95);\n\t--color-disabled: rgba(0, 0, 0, 0.05);\n\t--color-disabled-checked: rgba(0, 0, 0, 0.15);\n\t--color-error: #ff3b30;\n}\n.Checkbox_3oxtH {\n\tbox-sizing: border-box;\n\twidth: 20px;\n\theight: 20px;\n\tmargin: 0;\n\tpadding: 0;\n\tbackground-color: #fff;\n\tborder: 1px solid var(--color-border);\n\tborder-radius: 4px;\n\toutline: none;\n\tcursor: inherit;\n\ttransition: background-color 0.2s ease;\n\t-webkit-appearance: none;\n\t        appearance: none\n}\n.Checkbox_3oxtH:invalid {\n\t\tborder-color: var(--color-error);\n}\n.Checkbox_3oxtH:disabled {\n\t\tbackground-color: var(--color-disabled);\n\t\tborder-color: var(--color-disabled);\n\t\tcursor: not-allowed;\n}\n.Checkbox_3oxtH:checked {\n\t\tbackground-color: var(--color-background);\n\t\tborder-color: var(--color-border-active);\n}\n.Checkbox_3oxtH:hover:not(:disabled):not(:invalid) {\n\t\tborder-color: var(--color-border-active);\n}\n.Checkbox_3oxtH:checked:disabled {\n\t\tbackground-color: var(--color-disabled-checked);\n\t\tborder-color: var(--color-disabled);\n}\n.Checkbox_3oxtH:checked:invalid {\n\t\tbackground-color: var(--color-error);\n\t\tborder-color: var(--color-error);\n}\n.Check_1Rfli {\n\tposition: absolute;\n\ttop: 5px;\n\tleft: 3px;\n\twidth: 14px;\n\theight: 14px;\n\topacity: 0;\n\ttransition: opacity 0.2s ease;\n\tpointer-events: none;\n\tfill: none;\n\tstroke: var(--color-foreground);\n\tstroke-width: 2px;\n\tstroke-linecap: round;\n\tstroke-linejoin: round;\n}\n.Checkbox_3oxtH:checked + .Check_1Rfli {\n\topacity: 1;\n}\n",""]),t.locals={CheckboxContainer:"CheckboxContainer_160dX",Checkbox:"Checkbox_3oxtH",Check:"Check_1Rfli"},n.exports=t},225:function(n,a,o){"use strict";o(149)},226:function(n,a,o){var t=o(1)(!1);t.push([n.i,'\n.markdown-body .octicon[data-v-b48167cc] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-b48167cc] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-b48167cc]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-b48167cc],\n.markdown-body h2 .octicon-link[data-v-b48167cc],\n.markdown-body h3 .octicon-link[data-v-b48167cc],\n.markdown-body h4 .octicon-link[data-v-b48167cc],\n.markdown-body h5 .octicon-link[data-v-b48167cc],\n.markdown-body h6 .octicon-link[data-v-b48167cc] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-b48167cc],\n.markdown-body h2:hover .anchor[data-v-b48167cc],\n.markdown-body h3:hover .anchor[data-v-b48167cc],\n.markdown-body h4:hover .anchor[data-v-b48167cc],\n.markdown-body h5:hover .anchor[data-v-b48167cc],\n.markdown-body h6:hover .anchor[data-v-b48167cc] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-b48167cc],\n.markdown-body h2:hover .anchor .octicon-link[data-v-b48167cc],\n.markdown-body h3:hover .anchor .octicon-link[data-v-b48167cc],\n.markdown-body h4:hover .anchor .octicon-link[data-v-b48167cc],\n.markdown-body h5:hover .anchor .octicon-link[data-v-b48167cc],\n.markdown-body h6:hover .anchor .octicon-link[data-v-b48167cc] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-b48167cc]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-b48167cc]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-b48167cc]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-b48167cc]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-b48167cc]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-b48167cc]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-b48167cc] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-b48167cc] {\n  display: block;\n}\n.markdown-body summary[data-v-b48167cc] {\n  display: list-item;\n}\n.markdown-body a[data-v-b48167cc] {\n  background-color: initial;\n}\n.markdown-body a[data-v-b48167cc]:active,\n.markdown-body a[data-v-b48167cc]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-b48167cc] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-b48167cc] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-b48167cc] {\n  border-style: none;\n}\n.markdown-body code[data-v-b48167cc],\n.markdown-body kbd[data-v-b48167cc],\n.markdown-body pre[data-v-b48167cc] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-b48167cc] {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-b48167cc] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-b48167cc] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-b48167cc] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-b48167cc] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-b48167cc] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-b48167cc] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-b48167cc]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-b48167cc] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-b48167cc] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-b48167cc]:after,\n.markdown-body hr[data-v-b48167cc]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-b48167cc]:after {\n  clear: both;\n}\n.markdown-body table[data-v-b48167cc] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-b48167cc],\n.markdown-body th[data-v-b48167cc] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-b48167cc] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-b48167cc] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-b48167cc],\n.markdown-body h2[data-v-b48167cc],\n.markdown-body h3[data-v-b48167cc],\n.markdown-body h4[data-v-b48167cc],\n.markdown-body h5[data-v-b48167cc],\n.markdown-body h6[data-v-b48167cc] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-b48167cc] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-b48167cc],\n.markdown-body h2[data-v-b48167cc] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-b48167cc] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-b48167cc] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-b48167cc],\n.markdown-body h4[data-v-b48167cc] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-b48167cc] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-b48167cc] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-b48167cc],\n.markdown-body h6[data-v-b48167cc] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-b48167cc] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-b48167cc] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-b48167cc] {\n  margin: 0;\n}\n.markdown-body ol[data-v-b48167cc],\n.markdown-body ul[data-v-b48167cc] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-b48167cc],\n.markdown-body ul ol[data-v-b48167cc] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-b48167cc],\n.markdown-body ol ul ol[data-v-b48167cc],\n.markdown-body ul ol ol[data-v-b48167cc],\n.markdown-body ul ul ol[data-v-b48167cc] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-b48167cc] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-b48167cc],\n.markdown-body pre[data-v-b48167cc] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-b48167cc] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-b48167cc]::-webkit-inner-spin-button,\n.markdown-body input[data-v-b48167cc]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-b48167cc] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-b48167cc] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-b48167cc] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-b48167cc] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-b48167cc] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-b48167cc] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-b48167cc] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-b48167cc] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-b48167cc] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-b48167cc] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-b48167cc] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-b48167cc] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-b48167cc] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-b48167cc] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-b48167cc] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-b48167cc],\n.markdown-body .px-3[data-v-b48167cc] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-b48167cc] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-b48167cc] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-b48167cc] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-b48167cc] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-b48167cc] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-b48167cc] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-b48167cc] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-b48167cc] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-b48167cc],\n.markdown-body .pl-s .pl-v[data-v-b48167cc] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-b48167cc],\n.markdown-body .pl-en[data-v-b48167cc] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-b48167cc],\n.markdown-body .pl-smi[data-v-b48167cc] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-b48167cc] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-b48167cc] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-b48167cc],\n.markdown-body .pl-s[data-v-b48167cc],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-b48167cc],\n.markdown-body .pl-sr[data-v-b48167cc],\n.markdown-body .pl-sr .pl-cce[data-v-b48167cc],\n.markdown-body .pl-sr .pl-sra[data-v-b48167cc],\n.markdown-body .pl-sr .pl-sre[data-v-b48167cc] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-b48167cc],\n.markdown-body .pl-v[data-v-b48167cc] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-b48167cc] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-b48167cc] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-b48167cc] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-b48167cc]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-b48167cc] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-b48167cc] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-b48167cc],\n.markdown-body .pl-mh .pl-en[data-v-b48167cc],\n.markdown-body .pl-ms[data-v-b48167cc] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-b48167cc] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-b48167cc] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-b48167cc] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-b48167cc] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-b48167cc] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-b48167cc] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-b48167cc] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-b48167cc] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-b48167cc] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-b48167cc] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-b48167cc] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-b48167cc] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-b48167cc] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-b48167cc] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-b48167cc] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-b48167cc] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-b48167cc] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-b48167cc] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-b48167cc] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-b48167cc] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-b48167cc] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-b48167cc] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-b48167cc] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-b48167cc] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-b48167cc] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-b48167cc] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-b48167cc] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-b48167cc] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-b48167cc] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-b48167cc] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-b48167cc]:after,\n.markdown-body[data-v-b48167cc]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-b48167cc]:after {\n  clear: both;\n}\n.markdown-body[data-v-b48167cc]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-b48167cc]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-b48167cc]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-b48167cc],\n.markdown-body details[data-v-b48167cc],\n.markdown-body dl[data-v-b48167cc],\n.markdown-body ol[data-v-b48167cc],\n.markdown-body p[data-v-b48167cc],\n.markdown-body pre[data-v-b48167cc],\n.markdown-body table[data-v-b48167cc],\n.markdown-body ul[data-v-b48167cc] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-b48167cc] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-b48167cc] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-b48167cc]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-b48167cc]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-b48167cc],\n.markdown-body h2[data-v-b48167cc],\n.markdown-body h3[data-v-b48167cc],\n.markdown-body h4[data-v-b48167cc],\n.markdown-body h5[data-v-b48167cc],\n.markdown-body h6[data-v-b48167cc] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-b48167cc] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-b48167cc],\n.markdown-body h2[data-v-b48167cc] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-b48167cc] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-b48167cc] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-b48167cc] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-b48167cc] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-b48167cc] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-b48167cc],\n.markdown-body ul[data-v-b48167cc] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-b48167cc],\n.markdown-body ol ul[data-v-b48167cc],\n.markdown-body ul ol[data-v-b48167cc],\n.markdown-body ul ul[data-v-b48167cc] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-b48167cc] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-b48167cc] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-b48167cc] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-b48167cc] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-b48167cc] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-b48167cc] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-b48167cc] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-b48167cc] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-b48167cc],\n.markdown-body table th[data-v-b48167cc] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-b48167cc] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-b48167cc]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-b48167cc] {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-b48167cc] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-b48167cc] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-b48167cc] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-b48167cc] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-b48167cc] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-b48167cc] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-b48167cc] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-b48167cc],\n.markdown-body pre[data-v-b48167cc] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-b48167cc] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-b48167cc] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-b48167cc]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-b48167cc] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-b48167cc] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-b48167cc] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-b48167cc]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-b48167cc]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-b48167cc] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-b48167cc] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-b48167cc],\n.markdown-body .pl-token[data-v-b48167cc]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-b48167cc] {\n  -moz-tab-size: 1;\n  tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-b48167cc] {\n  -moz-tab-size: 2;\n  tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-b48167cc] {\n  -moz-tab-size: 3;\n  tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-b48167cc] {\n  -moz-tab-size: 4;\n  tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-b48167cc] {\n  -moz-tab-size: 5;\n  tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-b48167cc] {\n  -moz-tab-size: 6;\n  tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-b48167cc] {\n  -moz-tab-size: 7;\n  tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-b48167cc] {\n  -moz-tab-size: 8;\n  tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-b48167cc] {\n  -moz-tab-size: 9;\n  tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-b48167cc] {\n  -moz-tab-size: 10;\n  tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-b48167cc] {\n  -moz-tab-size: 11;\n  tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-b48167cc] {\n  -moz-tab-size: 12;\n  tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-b48167cc] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-b48167cc] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-b48167cc] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=t},32:function(n,a,o){"use strict";o.r(a);var t=o(97),d={inheritAttrs:!1,model:{prop:"checked",event:"checkbox:update"},props:{checked:{type:[Boolean,Array],default:void 0},value:{type:void 0,default:void 0},invalid:{type:Boolean,default:!1}},computed:{checkVal:{get(){return this.checked},set(n){this.$emit("checkbox:update",n)}}},watch:{invalid:"setCustomValidity"},mounted(){this.setCustomValidity()},methods:{setCustomValidity(){this.$refs.checkbox.setCustomValidity(this.invalid?"invalid":"")}}},e=o(223),c=o(0);var r={components:{CheckboxControl:Object(c.a)(d,(function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("div",{class:n.$s.CheckboxContainer},[o("input",n._g(n._b({directives:[{name:"model",rawName:"v-model",value:n.checkVal,expression:"checkVal"}],ref:"checkbox",class:n.$s.Checkbox,attrs:{type:"checkbox"},domProps:{value:n.value,checked:Array.isArray(n.checkVal)?n._i(n.checkVal,n.value)>-1:n.checkVal},on:{change:function(a){var o=n.checkVal,t=a.target,d=!!t.checked;if(Array.isArray(o)){var e=n.value,c=n._i(o,e);t.checked?c<0&&(n.checkVal=o.concat([e])):c>-1&&(n.checkVal=o.slice(0,c).concat(o.slice(c+1)))}else n.checkVal=d}}},"input",n.$attrs,!1),n.$listeners)),n._v(" "),o("svg",{class:n.$s.Check},[o("path",{attrs:{d:"M1 4L5.5 8.5L13 1"}})])])}),[],!1,(function(n){this.$s=e.default.locals||e.default}),null,null).exports,MInlineFormControlLayout:t.a},inheritAttrs:!1,model:{prop:"checked",event:"checkbox:update"}},b={components:{MCheckbox:Object(c.a)(r,(function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("m-inline-form-control-layout",{scopedSlots:n._u([{key:"control",fn:function(){return[o("checkbox-control",n._g(n._b({},"checkbox-control",n.$attrs,!1),n.$listeners))]},proxy:!0},{key:"label",fn:function(){return[n._t("default")]},proxy:!0},{key:"sublabel",fn:function(){return[n._t("sublabel")]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports},data:()=>({checkedVals:["normal","disabled","invalid"]})},l=Object(c.a)(b,(function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("div",[o("h4",[n._v("normal state")]),n._v(" "),o("m-checkbox",[n._v("\n\t\tlabel\n\t")]),n._v(" "),o("m-checkbox",{attrs:{value:"normal"},model:{value:n.checkedVals,callback:function(a){n.checkedVals=a},expression:"checkedVals"}},[n._v("\n\t\tlabel\n\t")]),n._v(" "),o("h4",[n._v("disabled state")]),n._v(" "),o("m-checkbox",{attrs:{disabled:""}},[n._v("\n\t\tlabel\n\t")]),n._v(" "),o("m-checkbox",{attrs:{disabled:"",value:"disabled"},model:{value:n.checkedVals,callback:function(a){n.checkedVals=a},expression:"checkedVals"}},[n._v("\n\t\tlabel\n\t")]),n._v(" "),o("h4",[n._v("invalid state")]),n._v(" "),o("m-checkbox",{attrs:{invalid:""}},[n._v("\n\t\tlabel\n\t")]),n._v(" "),o("m-checkbox",{attrs:{invalid:"",value:"invalid"},model:{value:n.checkedVals,callback:function(a){n.checkedVals=a},expression:"checkedVals"}},[n._v("\n\t\tlabel\n\t")]),n._v(" "),o("h4",[n._v("checked values array")]),n._v(" "),o("pre",[o("code",[n._v(n._s(JSON.stringify(n.$data,null,4)))])]),n._v(" "),o("h4",[n._v("example with label")]),n._v(" "),o("m-checkbox",[n._v("\n\t\tI am a really long label with lots of text and\n\t\tmore text and please wrap already wrap wrap wrap wrap\n\t")]),n._v(" "),o("h4",[n._v("example with label + sublabel")]),n._v(" "),o("m-checkbox",{scopedSlots:n._u([{key:"sublabel",fn:function(){return[n._v("\n\t\t\tI am a sublabel text text wrap wrap wrap\n\t\t\ttext text text wrap wrap wrap wrap wrap wrap\n\t\t")]},proxy:!0}])},[n._v("\n\t\tI am a really long label with lots of text and\n\t\tmore text and please wrap already wrap wrap wrap wrap\n\t\t")])],1)}),[],!1,null,null,null).exports,i=o(53),m={components:{Demo0:l,DemoCollapse:i.DemoCollapse,SrcFile:i.SrcFile}},v=(o(225),Object(c.a)(m,(function(){var n=this.$createElement;this._self._c;return this._m(5)}),[function(){var n=this.$createElement,a=this._self._c||n;return a("p",[this._v("Supports attributes from "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox"}},[a("code",[this._v('<input type="checkbox">')])]),this._v(".")])},function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("table",[o("thead",[o("tr",[o("th",[n._v("Prop")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Default")]),n._v(" "),o("th",[n._v("Possible values")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("v-model")]),n._v(" "),o("td",[o("code",[n._v("boolean|array")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Toggles checkbox checked state")])]),n._v(" "),o("tr",[o("td",[n._v("value")]),n._v(" "),o("td",[o("code",[n._v("undefined")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Value to return from v-model")])]),n._v(" "),o("tr",[o("td",[n._v("invalid")]),n._v(" "),o("td",[o("code",[n._v("boolean")])]),n._v(" "),o("td",[o("code",[n._v("false")])]),n._v(" "),o("td",[n._v("—")]),n._v(" "),o("td",[n._v("Toggles checkbox invalid state")])])])])},function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("table",[o("thead",[o("tr",[o("th",[n._v("Slot")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("default")]),n._v(" "),o("td",[n._v("Checkbox label")])]),n._v(" "),o("tr",[o("td",[n._v("sublabel")]),n._v(" "),o("td",[n._v("Checkbox sublabel")])])])])},function(){var n=this.$createElement,a=this._self._c||n;return a("p",[this._v("Supports events from "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox"}},[a("code",[this._v('<input type="checkbox">')])]),this._v(".")])},function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("table",[o("thead",[o("tr",[o("th",[n._v("Event")]),n._v(" "),o("th",[n._v("Type")]),n._v(" "),o("th",[n._v("Description")])])]),n._v(" "),o("tbody",[o("tr",[o("td",[n._v("checkbox:update")]),n._v(" "),o("td",[n._v("-")]),n._v(" "),o("td",[n._v("—")])])])])},function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("div",{staticClass:"markdown-body"},[o("h1",[n._v("Checkbox")]),n._v(" "),o("demo-collapse",[o("Demo0"),n._v(" "),o("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div>\n\t\t<h4>normal state</h4>\n\t\t<m-checkbox>\n\t\t\tlabel\n\t\t</m-checkbox>\n\t\t<m-checkbox\n\t\t\tv-model="checkedVals"\n\t\t\tvalue="normal"\n\t\t>\n\t\t\tlabel\n\t\t</m-checkbox>\n\n\t\t<h4>disabled state</h4>\n\t\t<m-checkbox disabled>\n\t\t\tlabel\n\t\t</m-checkbox>\n\t\t<m-checkbox\n\t\t\tv-model="checkedVals"\n\t\t\tdisabled\n\t\t\tvalue="disabled"\n\t\t>\n\t\t\tlabel\n\t\t</m-checkbox>\n\n\t\t<h4>invalid state</h4>\n\t\t<m-checkbox invalid>\n\t\t\tlabel\n\t\t</m-checkbox>\n\t\t<m-checkbox\n\t\t\tv-model="checkedVals"\n\t\t\tinvalid\n\t\t\tvalue="invalid"\n\t\t>\n\t\t\tlabel\n\t\t</m-checkbox>\n\n\t\t<h4>checked values array</h4>\n\t\t<pre><code>{{ JSON.stringify($data, null, 4) }}</code></pre>\n\n\t\t<h4>example with label</h4>\n\t\t<m-checkbox>\n\t\t\tI am a really long label with lots of text and\n\t\t\tmore text and please wrap already wrap wrap wrap wrap\n\t\t</m-checkbox>\n\n\t\t<h4>example with label + sublabel</h4>\n\t\t<m-checkbox>\n\t\t\tI am a really long label with lots of text and\n\t\t\tmore text and please wrap already wrap wrap wrap wrap\n\t\t\t<template #sublabel>\n\t\t\t\tI am a sublabel text text wrap wrap wrap\n\t\t\t\ttext text text wrap wrap wrap wrap wrap wrap\n\t\t\t</template>\n\t\t</m-checkbox>\n\t</div>\n</template>\n\n<script>\nimport { MCheckbox } from \'@square/maker/components/Checkbox\';\n\nexport default {\n\tcomponents: {\n\t\tMCheckbox,\n\t},\n\n\tdata() {\n\t\treturn {\n\t\t\tcheckedVals: [\n\t\t\t\t\'normal\',\n\t\t\t\t\'disabled\',\n\t\t\t\t\'invalid\',\n\t\t\t],\n\t\t};\n\t},\n};\n<\/script>\n')]],2)],1),n._v(" "),o("h2",[n._v("Props")]),n._v(" "),n._m(0),n._v(" "),n._m(1),n._v(" "),o("h2",[n._v("Slots")]),n._v(" "),n._m(2),n._v(" "),o("h2",[n._v("Events")]),n._v(" "),n._m(3),n._v(" "),n._m(4)],1)}],!1,null,"b48167cc",null));a.default=v.exports},60:function(n,a,o){var t=o(94);"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,o(3).default)("076e59c6",t,!0,{})},93:function(n,a,o){"use strict";var t=o(60),d=o.n(t);o.d(a,"default",(function(){return d.a}))},94:function(n,a,o){var t=o(1)(!1);t.push([n.i,"\n.LayoutContainer_3uA1x {\n\t--color-foreground: rgba(0, 0, 0, 0.9);\n\t--color-sublabel: rgba(0, 0, 0, 0.55);\n\n\tdisplay: inline-flex;\n\tcolor: var(--color-foreground);\n\tfont-size: 14px;\n\tfont-family: inherit;\n\tline-height: 24px;\n\tcursor: pointer;\n}\n.ControlAligner_2eg2u {\n\tdisplay: flex;\n\talign-items: center;\n\theight: 24px;\n\tmargin-right: 8px;\n}\n.SubLabel_3KBJT {\n\tcolor: var(--color-sublabel);\n}\n",""]),t.locals={LayoutContainer:"LayoutContainer_3uA1x",ControlAligner:"ControlAligner_2eg2u",SubLabel:"SubLabel_3KBJT"},n.exports=t},97:function(n,a,o){"use strict";o.d(a,"a",(function(){return b}));const t=["%c @square/maker ","background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"];var d={warn(n,a){n||console.warn(...t,a)},error(n,a){if(!n)throw console.error(...t,a),new Error("[@square/maker] "+a)}},e={mounted(){d.error(this.$slots.label,'Missing "label" slot in inline form control')}},c=o(93),r=o(0);var b=Object(r.a)(e,(function(){var n=this,a=n.$createElement,o=n._self._c||a;return o("label",{class:n.$s.LayoutContainer},[o("div",{class:n.$s.ControlAligner},[n._t("control")],2),n._v(" "),o("div",[n._t("label"),n._v(" "),n.$slots.sublabel?o("div",{class:n.$s.SubLabel},[n._t("sublabel")],2):n._e()],2)])}),[],!1,(function(n){this.$s=c.default.locals||c.default}),null,null).exports}}]);