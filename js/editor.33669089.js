(self["webpackChunknoosphere"]=self["webpackChunknoosphere"]||[]).push([[189],{9124:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Ia}});var r=function(){var t=this,e=t._self._c;return e("div",[t._v(" roomId : "+t._s(t.roomId)+" "),e("div",{ref:"editor",staticClass:"editor"})])},i=[],a=n(451),o=n(1238),s=(n(1703),n(2694)),l=200,u=function(){};u.prototype.append=function(t){return t.length?(t=u.from(t),!this.length&&t||t.length<l&&this.leafAppend(t)||this.length<l&&t.leafPrepend(this)||this.appendInner(t)):this},u.prototype.prepend=function(t){return t.length?u.from(t).append(this):this},u.prototype.appendInner=function(t){return new h(this,t)},u.prototype.slice=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=this.length),t>=e?u.empty:this.sliceInner(Math.max(0,t),Math.min(this.length,e))},u.prototype.get=function(t){if(!(t<0||t>=this.length))return this.getInner(t)},u.prototype.forEach=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=this.length),e<=n?this.forEachInner(t,e,n,0):this.forEachInvertedInner(t,e,n,0)},u.prototype.map=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=this.length);var r=[];return this.forEach((function(e,n){return r.push(t(e,n))}),e,n),r},u.from=function(t){return t instanceof u?t:t&&t.length?new d(t):u.empty};var d=function(t){function e(e){t.call(this),this.values=e}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={length:{configurable:!0},depth:{configurable:!0}};return e.prototype.flatten=function(){return this.values},e.prototype.sliceInner=function(t,n){return 0==t&&n==this.length?this:new e(this.values.slice(t,n))},e.prototype.getInner=function(t){return this.values[t]},e.prototype.forEachInner=function(t,e,n,r){for(var i=e;i<n;i++)if(!1===t(this.values[i],r+i))return!1},e.prototype.forEachInvertedInner=function(t,e,n,r){for(var i=e-1;i>=n;i--)if(!1===t(this.values[i],r+i))return!1},e.prototype.leafAppend=function(t){if(this.length+t.length<=l)return new e(this.values.concat(t.flatten()))},e.prototype.leafPrepend=function(t){if(this.length+t.length<=l)return new e(t.flatten().concat(this.values))},n.length.get=function(){return this.values.length},n.depth.get=function(){return 0},Object.defineProperties(e.prototype,n),e}(u);u.empty=new d([]);var h=function(t){function e(e,n){t.call(this),this.left=e,this.right=n,this.length=e.length+n.length,this.depth=Math.max(e.depth,n.depth)+1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.flatten=function(){return this.left.flatten().concat(this.right.flatten())},e.prototype.getInner=function(t){return t<this.left.length?this.left.get(t):this.right.get(t-this.left.length)},e.prototype.forEachInner=function(t,e,n,r){var i=this.left.length;return!(e<i&&!1===this.left.forEachInner(t,e,Math.min(n,i),r))&&(!(n>i&&!1===this.right.forEachInner(t,Math.max(e-i,0),Math.min(this.length,n)-i,r+i))&&void 0)},e.prototype.forEachInvertedInner=function(t,e,n,r){var i=this.left.length;return!(e>i&&!1===this.right.forEachInvertedInner(t,e-i,Math.max(n,i)-i,r+i))&&(!(n<i&&!1===this.left.forEachInvertedInner(t,Math.min(e,i),n,r))&&void 0)},e.prototype.sliceInner=function(t,e){if(0==t&&e==this.length)return this;var n=this.left.length;return e<=n?this.left.slice(t,e):t>=n?this.right.slice(t-n,e-n):this.left.slice(t,n).append(this.right.slice(0,e-n))},e.prototype.leafAppend=function(t){var n=this.right.leafAppend(t);if(n)return new e(this.left,n)},e.prototype.leafPrepend=function(t){var n=this.left.leafPrepend(t);if(n)return new e(n,this.right)},e.prototype.appendInner=function(t){return this.left.depth>=Math.max(this.right.depth,t.depth)+1?new e(this.left,new e(this.right,t)):new e(this,t)},e}(u),f=u,p=f,g=n(1382),y=n(157);const m=500;class b{constructor(t,e){this.items=t,this.eventCount=e}popEvent(t,e){if(0==this.eventCount)return null;let n,r,i=this.items.length;for(;;i--){let t=this.items.get(i-1);if(t.selection){--i;break}}e&&(n=this.remapping(i,this.items.length),r=n.maps.length);let a,o,s=t.tr,c=[],l=[];return this.items.forEach(((t,e)=>{if(!t.step)return n||(n=this.remapping(i,e+1),r=n.maps.length),r--,void l.push(t);if(n){l.push(new _(t.map));let e,i=t.step.map(n.slice(r));i&&s.maybeStep(i).doc&&(e=s.mapping.maps[s.mapping.maps.length-1],c.push(new _(e,void 0,void 0,c.length+l.length))),r--,e&&n.appendMap(e,r)}else s.maybeStep(t.step);return t.selection?(a=n?t.selection.map(n.slice(r)):t.selection,o=new b(this.items.slice(0,i).append(l.reverse().concat(c)),this.eventCount-1),!1):void 0}),this.items.length,0),{remaining:o,transform:s,selection:a}}addTransform(t,e,n,r){let i=[],a=this.eventCount,o=this.items,s=!r&&o.length?o.get(o.length-1):null;for(let l=0;l<t.steps.length;l++){let n,c=t.steps[l].invert(t.docs[l]),u=new _(t.mapping.maps[l],c,e);(n=s&&s.merge(u))&&(u=n,l?i.pop():o=o.slice(0,o.length-1)),i.push(u),e&&(a++,e=void 0),r||(s=u)}let c=a-n.depth;return c>k&&(o=v(o,c),a-=c),new b(o.append(i),a)}remapping(t,e){let n=new g.vs;return this.items.forEach(((e,r)=>{let i=null!=e.mirrorOffset&&r-e.mirrorOffset>=t?n.maps.length-e.mirrorOffset:void 0;n.appendMap(e.map,i)}),t,e),n}addMaps(t){return 0==this.eventCount?this:new b(this.items.append(t.map((t=>new _(t)))),this.eventCount)}rebased(t,e){if(!this.eventCount)return this;let n=[],r=Math.max(0,this.items.length-e),i=t.mapping,a=t.steps.length,o=this.eventCount;this.items.forEach((t=>{t.selection&&o--}),r);let s=e;this.items.forEach((e=>{let r=i.getMirror(--s);if(null==r)return;a=Math.min(a,r);let c=i.maps[r];if(e.step){let a=t.steps[r].invert(t.docs[r]),l=e.selection&&e.selection.map(i.slice(s+1,r));l&&o++,n.push(new _(c,a,l))}else n.push(new _(c))}),r);let c=[];for(let d=e;d<a;d++)c.push(new _(i.maps[d]));let l=this.items.slice(0,r).append(c).append(n),u=new b(l,o);return u.emptyItemCount()>m&&(u=u.compress(this.items.length-n.length)),u}emptyItemCount(){let t=0;return this.items.forEach((e=>{e.step||t++})),t}compress(t=this.items.length){let e=this.remapping(0,t),n=e.maps.length,r=[],i=0;return this.items.forEach(((a,o)=>{if(o>=t)r.push(a),a.selection&&i++;else if(a.step){let t=a.step.map(e.slice(n)),o=t&&t.getMap();if(n--,o&&e.appendMap(o,n),t){let s=a.selection&&a.selection.map(e.slice(n));s&&i++;let c,l=new _(o.invert(),t,s),u=r.length-1;(c=r.length&&r[u].merge(l))?r[u]=c:r.push(l)}}else a.map&&n--}),this.items.length,0),new b(p.from(r.reverse()),i)}}function v(t,e){let n;return t.forEach(((t,r)=>{if(t.selection&&0==e--)return n=r,!1})),t.slice(n)}b.empty=new b(p.empty,0);class _{constructor(t,e,n,r){this.map=t,this.step=e,this.selection=n,this.mirrorOffset=r}merge(t){if(this.step&&t.step&&!t.selection){let e=t.step.merge(this.step);if(e)return new _(e.getMap().invert(),e,this.selection)}}}class x{constructor(t,e,n,r){this.done=t,this.undone=e,this.prevRanges=n,this.prevTime=r}}const k=20;function w(t,e,n,r){let i,a=n.getMeta(M);if(a)return a.historyState;n.getMeta(B)&&(t=new x(t.done,t.undone,null,0));let o=n.getMeta("appendedTransaction");if(0==n.steps.length)return t;if(o&&o.getMeta(M))return o.getMeta(M).redo?new x(t.done.addTransform(n,void 0,r,F(e)),t.undone,E(n.mapping.maps[n.steps.length-1]),t.prevTime):new x(t.done,t.undone.addTransform(n,void 0,r,F(e)),null,t.prevTime);if(!1===n.getMeta("addToHistory")||o&&!1===o.getMeta("addToHistory"))return(i=n.getMeta("rebased"))?new x(t.done.rebased(n,i),t.undone.rebased(n,i),C(t.prevRanges,n.mapping),t.prevTime):new x(t.done.addMaps(n.mapping.maps),t.undone.addMaps(n.mapping.maps),C(t.prevRanges,n.mapping),t.prevTime);{let i=0==t.prevTime||!o&&(t.prevTime<(n.time||0)-r.newGroupDelay||!D(n,t.prevRanges)),a=o?C(t.prevRanges,n.mapping):E(n.mapping.maps[n.steps.length-1]);return new x(t.done.addTransform(n,i?e.selection.getBookmark():void 0,r,F(e)),b.empty,a,n.time)}}function D(t,e){if(!e)return!1;if(!t.docChanged)return!0;let n=!1;return t.mapping.maps[0].forEach(((t,r)=>{for(let i=0;i<e.length;i+=2)t<=e[i+1]&&r>=e[i]&&(n=!0)})),n}function E(t){let e=[];return t.forEach(((t,n,r,i)=>e.push(r,i))),e}function C(t,e){if(!t)return null;let n=[];for(let r=0;r<t.length;r+=2){let i=e.map(t[r],1),a=e.map(t[r+1],-1);i<=a&&n.push(i,a)}return n}function T(t,e,n,r){let i=F(e),a=M.get(e).spec.config,o=(r?t.undone:t.done).popEvent(e,i);if(!o)return;let s=o.selection.resolve(o.transform.doc),c=(r?t.done:t.undone).addTransform(o.transform,e.selection.getBookmark(),a,i),l=new x(r?c:o.remaining,r?o.remaining:c,null,0);n(o.transform.setSelection(s).setMeta(M,{redo:r,historyState:l}).scrollIntoView())}let S=!1,A=null;function F(t){let e=t.plugins;if(A!=e){S=!1,A=e;for(let t=0;t<e.length;t++)if(e[t].spec.historyPreserveItems){S=!0;break}}return S}const M=new y.H$("history"),B=new y.H$("closeHistory");function N(t={}){return t={depth:t.depth||100,newGroupDelay:t.newGroupDelay||500},new y.Sy({key:M,state:{init(){return new x(b.empty,b.empty,null,0)},apply(e,n,r){return w(n,r,e,t)}},config:t,props:{handleDOMEvents:{beforeinput(t,e){let n=e.inputType,r="historyUndo"==n?O:"historyRedo"==n?L:null;return!!r&&(e.preventDefault(),r(t.state,t.dispatch))}}}})}const O=(t,e)=>{let n=M.getState(t);return!(!n||0==n.done.eventCount)&&(e&&T(n,t,e,!1),!0)},L=(t,e)=>{let n=M.getState(t);return!(!n||0==n.undone.eventCount)&&(e&&T(n,t,e,!0),!0)};var I=n(203),R=n(1460),P=n(6909),j=n(282);const z=({injectGlobal:t})=>t`
    /* copy from https://github.com/ProseMirror/@milkdown/prose/blob/master/style/prosemirror.css */
    .ProseMirror {
        position: relative;
    }

    .ProseMirror {
        word-wrap: break-word;
        white-space: pre-wrap;
        white-space: break-spaces;
        -webkit-font-variant-ligatures: none;
        font-variant-ligatures: none;
        font-feature-settings: 'liga' 0; /* the above doesn't seem to work in Edge */
    }

    .ProseMirror pre {
        white-space: pre-wrap;
    }

    .ProseMirror li {
        position: relative;
    }

    .ProseMirror-hideselection *::selection {
        background: transparent;
    }
    .ProseMirror-hideselection *::-moz-selection {
        background: transparent;
    }
    .ProseMirror-hideselection {
        caret-color: transparent;
    }

    .ProseMirror-selectednode {
        outline: 2px solid #8cf;
    }

    /* Make sure li selections wrap around markers */

    li.ProseMirror-selectednode {
        outline: none;
    }

    li.ProseMirror-selectednode:after {
        content: '';
        position: absolute;
        left: -32px;
        right: -2px;
        top: -2px;
        bottom: -2px;
        border: 2px solid #8cf;
        pointer-events: none;
    }

    /* Protect against generic img rules */

    img.ProseMirror-separator {
        display: inline !important;
        border: none !important;
        margin: 0 !important;
    }
`,$=(t,{css:e})=>{const n=(0,o.XN)(t),r=t.get(o.dz,"radius"),i=t.get(o.dz,"lineWidth");return e`
        background-color: ${n("background")};
        color: ${n("neutral")};
        font-size: 14px;
        padding: 18px 6px 22px;
        border-radius: ${r};
        font-family: ${t.get(o.Az,"typography")};

        .code-fence_selector-wrapper {
            position: relative;
        }

        .code-fence_selector {
            width: 180px;
            box-sizing: border-box;
            border-radius: ${r};
            margin: 0 18px 18px;
            cursor: pointer;
            background-color: ${n("surface")};
            position: relative;
            display: flex;
            color: ${n("neutral",.87)};
            letter-spacing: 0.5px;
            height: 42px;
            align-items: center;

            ${t.get(o.UT,void 0)};
            ${t.get(o.I9,void 0)};

            & > .icon {
                width: 42px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: ${n("solid",.87)};
                border-left: ${i} solid ${n("line")};

                text-align: center;
                transition: all 0.2s ease-in-out;
                &:hover {
                    background: ${n("background")};
                    color: ${n("primary")};
                }
            }

            > span:first-child {
                padding-left: 16px;
                flex: 1;
                font-weight: 500;
            }
        }

        .code-fence_selector-list-item {
            list-style: none;
            line-height: 2;
            padding-left: 16px;
            cursor: pointer;
            margin: 0 !important;
            :hover {
                background: ${n("secondary",.12)};
                color: ${n("primary")};
            }
        }

        .code-fence_selector-list {
            &[data-fold='true'] {
                display: none;
            }

            margin: 0 !important;
            font-weight: 500;
            position: absolute;
            z-index: 1;
            top: 42px;
            box-sizing: border-box;
            left: 18px;
            padding: 8px 0;
            max-height: 260px;
            width: 180px;
            background-color: ${n("surface")};
            border-top: none;
            overflow-y: auto;
            display: flex;
            flex-direction: column;

            ${t.get(o.eK,["y"])}
            ${t.get(o.UT,void 0)};
            ${t.get(o.I9,void 0)};
        }
    `},Y=(t,e)=>{t.set("code-fence",(({editable:n,onSelectLanguage:r,onBlur:i,onFocus:a,languageList:s})=>{const c=document.createElement("div"),l=document.createElement("div"),u=document.createElement("ul"),d=document.createElement("pre"),h=document.createElement("code"),f=document.createElement("div");f.className="code-fence_selector";const p=document.createElement("span");f.appendChild(p);const g=t.get(o.kS,"downArrow");n()&&g&&f.appendChild(g.dom),h.spellcheck=!1,l.className="code-fence_selector-wrapper",l.contentEditable="false",l.append(f),l.append(u),d.append(h);const y=document.createElement("div");h.append(y),y.style.whiteSpace="inherit",c.append(l,d),c.classList.add("code-fence"),t.onFlush((()=>{const n=$(t,e);n&&c.classList.add(n)})),u.className="code-fence_selector-list",u.addEventListener("mousedown",(t=>{if(t.preventDefault(),t.stopPropagation(),!n())return;const e=t.target;if(!(e instanceof HTMLLIElement))return;const i=e.dataset.value;null!=i&&r(i)})),f.addEventListener("mousedown",(t=>{t.preventDefault(),t.stopPropagation(),n()&&a()}));const m=()=>{!n()||"true"===u.dataset.fold||i()};return document.addEventListener("mousedown",m),s.forEach((t=>{const e=document.createElement("li");e.className="code-fence_selector-list-item",e.innerText=t||"--",u.appendChild(e),e.setAttribute("data-value",t)})),{dom:c,contentDOM:y,onUpdate:t=>{c.dataset.language=t.attrs.language,p.innerText=t.attrs.language||"--",u.setAttribute("data-fold",t.attrs.fold?"true":"false")},onDestroy:()=>{c.remove(),document.removeEventListener("mousedown",m)}}}))},U=(t,{css:e})=>{const n=(0,o.XN)(t);t.set("image",(({placeholder:r,isBlock:i,onError:a,onLoad:s})=>{const c=e=>{var n;return null==(n=t.get(o.kS,e))?void 0:n.dom},l=document.createElement("span");l.classList.add("image-container"),t.onFlush((()=>{const a=e`
                display: inline-block;
                position: relative;
                text-align: center;
                font-size: 0;
                vertical-align: text-bottom;
                line-height: 1;

                ${i?"\n                width: 100%;\n                margin: 0 auto;\n                ":""}

                &.ProseMirror-selectednode::after {
                    content: '';
                    background: ${n("secondary",.38)};
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }

                img {
                    max-width: 100%;
                    height: auto;
                    object-fit: contain;
                    margin: 0 2px;
                }
                .icon,
                .placeholder {
                    display: none;
                }

                &.system {
                    width: 100%;
                    padding: 0 32px;
                    font-size: inherit;

                    img {
                        width: 0;
                        height: 0;
                        display: none;
                    }

                    .icon,
                    .placeholder {
                        display: inline;
                    }

                    box-sizing: border-box;
                    height: 48px;
                    background-color: ${n("background")};
                    border-radius: ${t.get(o.dz,"radius")};
                    display: inline-flex;
                    gap: 32px;
                    justify-content: flex-start;
                    align-items: center;
                    .placeholder {
                        margin: 0;
                        line-height: 1;
                        &::before {
                            content: '';
                            font-size: 14px;
                            color: ${n("neutral",.6)};
                        }
                    }
                }

                &.empty {
                    .placeholder {
                        &::before {
                            content: '${r}';
                        }
                    }
                }
            `;a&&l.classList.add(a)}));const u=document.createElement("img");l.append(u);let d=c("image");const h=document.createElement("span");h.classList.add("placeholder"),l.append(d,h);const f=t=>{const e=c(t);l.replaceChild(e,d),d=e},p=t=>{l.classList.add("system","loading"),f("loading");const e=document.createElement("img");e.src=t,e.onerror=()=>{null==a||a(e)},e.onload=()=>{null==s||s(e)}};return{dom:l,onUpdate:t=>{const{src:e,alt:n,title:r,loading:i,failed:a}=t.attrs;return u.src=e,u.title=r||n,u.alt=n,0===e.length?(l.classList.add("system","empty"),void f("image")):i?void p(e):a?(l.classList.remove("loading","empty"),l.classList.add("system","failed"),void f("brokenImage")):void(e.length>0?l.classList.remove("system","empty","loading"):(l.classList.add("system","empty"),f("image")))}}}))},W=(t,{css:e})=>{const n=(0,o.XN)(t),r=t.get(o.dz,"radius"),i=t.get(o.Az,"code"),a=e`
        color: ${n("neutral",.87)};
        background-color: ${n("background")};
        border-radius: ${r};
        padding: 16px 32px;
        font-size: 14px;
        font-family: ${i};
        overflow: hidden;
        line-height: 1.5;
        .ProseMirror {
            outline: none;
        }
    `,s=e`
        display: none;
    `,c=e`
        display: flex;
        justify-content: center;
        padding: 16px 0;
    `;return{codeStyle:a,hideCodeStyle:s,previewPanelStyle:c}},q=(t,e)=>{let n,r=!1;return{isEditing:()=>r,innerView:()=>n,openEditor:(i,a)=>{n=new R.tk(i,{state:y.yy.create({doc:a,plugins:[N(),(0,I.h)({...s.YR,Backspace:(0,s.QF)(s.NE,(e=>{var r;if(!e.selection.empty||n&&n.state.doc.textContent.length>0)return!1;const{dispatch:i,state:a}=t,o=null==(r=a.schema.nodes.paragraph)?void 0:r.create();if(!o)return!1;const s=a.tr.replaceSelectionWith(o);let c=s.selection.from-2;return c<0&&(c=0),i(s.setSelection(y.Bs.create(s.doc,c))),t.focus(),!0})),"Mod-Enter":(e,n)=>{var r;if(n){const{state:e}=t,{to:n}=e.selection,i=null==(r=e.schema.nodes.paragraph)?void 0:r.createAndFill();if(!i)return!1;const a=e.tr.replaceWith(n,n,i);t.dispatch(a.setSelection(y.Bs.create(a.doc,n))),t.focus()}return!0}}),(0,I.h)({"Mod-z":O,"Mod-y":L,"Shift-Mod-z":L})]}),plugins:[],dispatchTransaction:r=>{if(!n)return;const{state:i,transactions:a}=n.state.applyTransaction(r);if(n.updateState(i),!r.getMeta("fromOutside")){const n=t.state.tr,r=g.KS.offset(e()+1);a.forEach((t=>{const{steps:e}=t;e.forEach((t=>{const e=t.map(r);if(!e)throw Error("step discarded!");n.step(e)}))})),n.docChanged&&t.dispatch(n)}}}),n.focus();const{state:o}=n;n.dispatch(o.tr.setSelection(y.Bs.create(o.doc,0))),r=!0},closeEditor:()=>{n&&n.destroy(),n=void 0,r=!1}}},H=(t,e)=>{t.set("inner-editor",(({view:n,getPos:r,render:i})=>{const a=q(n,r),o=document.createElement("div");o.classList.add("math-block");const s=document.createElement("div"),c=document.createElement("div");let l="",u="",d="";return t.onFlush((()=>{({codeStyle:l,hideCodeStyle:u,previewPanelStyle:d}=W(t,e)),l&&u&&s.classList.add(l,u),d&&c.classList.add(d)})),o.append(s),{dom:o,preview:c,editor:s,onUpdate:(t,e)=>{var n;if(e){const e=t.attrs.value||t.textContent||"";return s.dataset.value=e,void i(e)}const r=a.innerView();if(r){const e=r.state,n=t.content.findDiffStart(e.doc.content);if(null!=n){const i=t.content.findDiffEnd(e.doc.content);if(i){let{a:a,b:o}=i;const s=n-Math.min(a,o);s>0&&(a+=s,o+=s),r.dispatch(e.tr.replace(n,o,t.slice(n,a)).setMeta("fromOutside",!0))}}}const o=(null==(n=t.content.firstChild)?void 0:n.text)||"";s.dataset.value=o,i(o)},onFocus:t=>{!n.editable||(u&&s.classList.remove(u),a.openEditor(s,t),o.classList.add("ProseMirror-selectednode"))},onBlur:()=>{u&&s.classList.add(u),a.closeEditor(),o.classList.remove("ProseMirror-selectednode")},onDestroy:()=>{c.remove(),s.remove(),o.remove()},stopEvent:t=>{const e=a.innerView(),{target:n}=t,r=n&&(null==e?void 0:e.dom.contains(n));return!(!e||!r)}}}))},V=(t,{css:e},n)=>{const r=(0,o.XN)(t);return e`
        ${t.get(o.UT,void 0)}
        ${t.get(o.I9,void 0)}

        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        background: ${r("surface")};
        border-radius: ${t.get(o.dz,"radius")};
        font-size: 16px;

        height: 56px;
        box-sizing: border-box;
        width: ${n.width};
        padding: 0 16px;
        gap: 16px;
        z-index: 2;

        input,
        button {
            all: unset;
        }

        input {
            flex-grow: 1;
            caret-color: ${r("primary")};
            &::placeholder {
                color: ${r("neutral",.6)};
            }
        }

        button {
            cursor: pointer;
            height: 36px;
            color: ${r("primary")};
            font-size: 14px;
            padding: 0 8px;
            font-weight: 500;
            letter-spacing: 1.25px;
            &:hover {
                background-color: ${r("secondary",.12)};
            }
            &.disable {
                color: ${r("neutral",.38)};
                cursor: not-allowed;
                &:hover {
                    background: transparent;
                }
            }
            &.hide {
                display: none;
            }
        }

        &.hide {
            display: none;
        }
    `},G=(t,e)=>{(0,j.wI)(t,e,((e,n,r,i)=>{const a=t.dom.parentElement;if(!a)throw(0,P.$q)();const o=n.left-e.left;let s=e.left-i.left-(r.width-o)/2;const c=e.bottom-i.top+14+a.scrollTop;return s<0&&(s=0),[c,s]}))},X=(t,e)=>{t.set("input-chip",(({isBindMode:n,onUpdate:r,buttonText:i,placeholder:a,width:o="400px",calculatePosition:s=G})=>{let c=null,l=!1,u="";const d=document.createElement("div");t.onFlush((()=>{const n=V(t,e,{width:o});n&&d.classList.add(n)})),d.classList.add("tooltip-input");const h=document.createElement("input");a&&(h.placeholder=a),d.appendChild(h),n||(c=document.createElement("button"),c.innerText=i||"APPLY",d.appendChild(c));const f=()=>{d.classList.add("hide")},p=t=>{d.classList.remove("hide"),s(t,d)},g=t=>{const{target:e}=t;if(e instanceof HTMLInputElement){if(u=e.value,!c)return void r(u);if(!u)return c.classList.add("disable"),void(l=!0);c.classList.remove("disable"),l=!1}},y=t=>{l||(t.stopPropagation(),r(u),f())},m=t=>{"key"in t&&"Enter"===t.key&&(r(u),f())};return{dom:d,init:t=>{const e=t.dom.parentElement;if(!e)throw(0,P.$q)();h.addEventListener("input",g),h.addEventListener("keydown",m),null==c||c.addEventListener("mousedown",y),e.appendChild(d),f()},show:p,hide:f,destroy:()=>{h.removeEventListener("input",g),h.removeEventListener("keydown",m),null==c||c.removeEventListener("mousedown",y),d.remove()},update:t=>{u=t,h.value=t}}}))},K=(t,{css:e})=>{const n=(0,o.XN)(t);t.set("task-list-item",(({onChange:r,editable:i})=>{const a=e=>{var n;return null==(n=t.get(o.kS,e))?void 0:n.dom},s=document.createElement("li"),c=document.createElement("label"),l=document.createElement("span"),u=document.createElement("input"),d=document.createElement("div");let h=a("unchecked");c.appendChild(h);const f=t=>{const e=a(t);c.replaceChild(e,h),h=e};return c.append(u,l),s.append(c,d),c.contentEditable="false",u.type="checkbox",i()||(u.disabled=!0,c.style.cursor="not-allowed"),u.onchange=t=>{if(t.target instanceof HTMLInputElement){if(!i())return void(u.checked=!u.checked);t.preventDefault(),r(u.checked)}},s.dataset.type="task-item",s.classList.add("task-list-item"),t.onFlush((()=>{const t=e`
                list-style-type: none;
                position: relative;

                & > div {
                    overflow: hidden;
                    padding: 0 2px;
                    width: 100%;
                }

                label {
                    display: inline-block;
                    width: 24px;
                    height: 24px;
                    cursor: pointer;
                    input {
                        visibility: hidden;
                    }
                }
                &[data-checked='true'] {
                    label {
                        color: ${n("primary")};
                    }
                }
                &[data-checked='false'] {
                    label {
                        color: ${n("solid",.87)};
                    }
                }
                .paragraph {
                    margin: 8px 0;
                }
            `;t&&s.classList.add(t)})),{dom:s,contentDOM:d,onUpdate:t=>{s.dataset.checked=t.attrs.checked,t.attrs.checked?u.setAttribute("checked","checked"):u.removeAttribute("checked"),f(t.attrs.checked?"checked":"unchecked")}}}))},Z=(t,e)=>{[X,U,Y,K,H].forEach((n=>{n(t,e)}))},J=["Roboto","HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],Q=["Consolas","Monaco","Andale Mono","Ubuntu Mono","monospace"],tt={h1:{label:"h1",icon:"looks_one"},h2:{label:"h2",icon:"looks_two"},h3:{label:"h3",icon:"looks_3"},loading:{label:"loading",icon:"hourglass_empty"},quote:{label:"quote",icon:"format_quote"},code:{label:"code",icon:"code"},table:{label:"table",icon:"table_chart"},divider:{label:"divider",icon:"horizontal_rule"},image:{label:"image",icon:"image"},brokenImage:{label:"broken image",icon:"broken_image"},bulletList:{label:"bullet list",icon:"format_list_bulleted"},orderedList:{label:"ordered list",icon:"format_list_numbered"},taskList:{label:"task list",icon:"checklist"},bold:{label:"bold",icon:"format_bold"},italic:{label:"italic",icon:"format_italic"},inlineCode:{label:"inline code",icon:"code"},strikeThrough:{label:"strike through",icon:"strikethrough_s"},link:{label:"link",icon:"link"},leftArrow:{label:"left arrow",icon:"chevron_left"},rightArrow:{label:"right arrow",icon:"chevron_right"},upArrow:{label:"up arrow",icon:"expand_less"},downArrow:{label:"down arrow",icon:"expand_more"},alignLeft:{label:"align left",icon:"format_align_left"},alignRight:{label:"align right",icon:"format_align_right"},alignCenter:{label:"align center",icon:"format_align_center"},delete:{label:"delete",icon:"delete"},select:{label:"select",icon:"select_all"},unchecked:{label:"unchecked",icon:"check_box_outline_blank"},checked:{label:"checked",icon:"check_box"},undo:{label:"undo",icon:"turn_left"},redo:{label:"redo",icon:"turn_right"},liftList:{label:"lift list",icon:"format_indent_decrease"},sinkList:{label:"sink list",icon:"format_indent_increase"},dragHandle:{label:"drag handle",icon:"drag_indicator"},text:{label:"text",icon:"title"}},et=t=>{const e=tt[t];if(!e)return;const n=document.createElement("span");n.className="icon material-icons material-icons-outlined";const r=tt[t];return r?(n.textContent=r.icon,n.dataset.label=r.label):console.warn(`Icon not found: "${t}", did you forget to add it to the icon mapping?`),{dom:n,label:e.label}},nt={nord0:"#2e3440",nord1:"#3b4252",nord2:"#434c5e",nord3:"#4c566a",nord4:"#d8dee9",nord5:"#e5e9f0",nord6:"#eceff4",nord7:"#8fbcbb",nord8:"#88c0d0",nord9:"#81a1c1",nord10:"#5e81ac",nord11:"#bf616a",nord12:"#d08770",nord13:"#ebcb8b",nord14:"#a3be8c",nord15:"#b48ead"},rt={shadow:nt.nord1,primary:nt.nord10,secondary:nt.nord9,neutral:nt.nord0,solid:nt.nord3,line:nt.nord4,background:nt.nord6,surface:"#fff"},it={shadow:nt.nord1,primary:nt.nord10,secondary:nt.nord9,neutral:nt.nord6,solid:nt.nord4,line:nt.nord2,background:"#252932",surface:nt.nord0},at=(t,e)=>{const{injectGlobal:n,css:r}=e,i=(0,o.XN)(t),a=t.get(o.dz,"radius"),s=i("neutral",.87),c=i("surface"),l=i("line"),u=i("secondary",.38),d=r`
        .ProseMirror-selectednode {
            outline: ${t.get(o.dz,"lineWidth")} solid ${l};
        }

        li.ProseMirror-selectednode {
            outline: none;
        }

        li.ProseMirror-selectednode::after {
            ${t.get(o.UT,void 0)};
        }

        & ::selection {
            background: ${u};
        }
    `,h=r`
        padding: 50px 20px;
        outline: none;
        & > * {
            margin: 30px 0;
        }
    `,f=r`
        p {
            font-size: 16px;
            line-height: 1.5;
            letter-spacing: 0.5px;
        }
    `,p=r`
        blockquote {
            padding-left: 30px;
            line-height: 28px;
            border-left: 4px solid ${i("primary")};
            margin-left: 0;
            margin-right: 0;
            * {
                font-size: 16px;
                line-height: 24px;
            }
        }
    `,g=r`
        h1 {
            font-size: 48px;
            line-height: 1.167;
        }
        h2 {
            font-size: 40px;
            line-height: 1.2;
        }
        h3 {
            font-size: 34px;
            line-height: 1.05;
        }
        h4 {
            font-size: 28px;
            line-height: 1.14;
        }
        h5 {
            font-size: 24px;
            line-height: 1;
        }
        h6 {
            font-size: 20px;
            line-height: 1;
        }
        .heading {
            margin: 40px 0;
            font-weight: 400;
        }
    `,y=r`
        hr {
            height: ${t.get(o.dz,"lineWidth")};
            background-color: ${l};
            border-width: 0;
        }
    `,m=r`
        ul,
        ol {
            padding: 0;
        }

        .list-item,
        .task-list-item {
            margin-top: 8px;
        }

        .list-item_label,
        .list-item .paragraph {
            margin: 0;
        }

        .list-item {
            display: flex;

            &_body {
                flex: 1;
            }
        }

        .list-item_label {
            display: flex;
            justify-content: center;
            width: 24px;
            height: 24px;
            font-size: 16px;
            line-height: 1.5;
            color: ${i("primary")};
        }

        .list-item[data-list-type='bullet'] {
            & > .list-item_label {
                font-size: 24px;
                line-height: 1;
            }
        }

        li {
            &::marker {
                display: none;
            }
        }

        .task-list-item {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            &_checkbox {
                margin: 8px 8px 8px 0;
                height: 16px;
            }
            & .paragraph {
                margin: 0;
            }
        }
    `,b=r`
        .code-fence {
            pre {
                font-family: ${t.get(o.Az,"code")};
                margin: 0 18px;
                ${t.get(o.eK,["x"])}

                background-color: ${i("background")};
                color: ${i("neutral")};
                font-size: 14px;
                border-radius: ${a};

                code {
                    line-height: 1.5;
                    font-family: ${t.get(o.Az,"code")};
                }
            }
        }
    `,v=r`
        .image {
            display: inline-block;
            margin: 0 auto;
            object-fit: contain;
            width: 100%;
            position: relative;
            height: auto;
            text-align: center;
        }
    `,_=r`
        .code-inline {
            background-color: ${i("neutral")};
            color: ${i("background")};
            border-radius: ${a};
            font-weight: 500;
            font-family: ${t.get(o.Az,"code")};
            padding: 0 3px;
        }

        .strong {
            font-weight: 600;
        }

        .link,
        a {
            color: ${i("secondary")};
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            font-weight: 500;
            &:hover {
                background-color: ${i("line")};
                box-shadow: 0 3px ${i("line")}, 0 -3px ${i("line")};
            }
        }

        .strike-through {
            text-decoration-color: ${i("secondary")};
        }
    `,x=r`
        .footnote-definition {
            ${t.get(o.UT,void 0)};
            border-radius: ${t.get(o.dz,"radius")};
            background-color: ${i("background")};
            padding: 16px;
            display: flex;
            flex-direction: row;
            & > .footnote-definition_content {
                flex: 1;
                width: calc(100% - 16px);
                & > dd {
                    margin-inline-start: 16px;
                }
                & > dt {
                    color: ${i("secondary")};
                    font-weight: 500;
                }
            }
            & > .footnote-definition_anchor {
                width: 16px;
            }
        }
    `,k=r`
        /* copy from https://github.com/ProseMirror/prosemirror-tables/blob/master/style/tables.css */
        .tableWrapper {
            overflow-x: auto;
            margin: 0;
            ${t.get(o.eK,["x"])}
            width: 100%;
            * {
                margin: 0;
                box-sizing: border-box;
                font-size: 16px;
            }
        }
        table {
            border-collapse: collapse;
            table-layout: fixed;
            width: 100%;
            overflow: auto;
            border-radius: ${t.get(o.dz,"radius")};
        }
        tr {
            ${t.get(o.UT,"bottom")};
        }
        td,
        th {
            padding: 0 16px;
            vertical-align: top;
            box-sizing: border-box;
            position: relative;

            min-width: 100px;
            ${t.get(o.UT,void 0)};
            text-align: left;
            line-height: 3;
            height: 48px;
            vertical-align: middle;
        }
        th {
            background: ${i("background",.5)};
            font-weight: 400;
        }
        .column-resize-handle {
            position: absolute;
            right: -2px;
            top: 0;
            bottom: 0;
            z-index: 20;
            pointer-events: none;
            background: ${i("secondary")};
            width: ${t.get(o.dz,"lineWidth")};
        }

        .selectedCell {
            &::after {
                z-index: 2;
                position: absolute;
                content: '';
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                background: ${i("secondary",.38)};
                pointer-events: none;
            }

            & ::selection {
                background: transparent;
            }
        }
    `;z(e),n`
        .milkdown {
            .material-icons-outlined {
                font-size: 24px;
            }

            position: relative;
            margin-left: auto;
            margin-right: auto;
            box-sizing: border-box;


            color: ${s};
            background: ${c};
            font-family: ${t.get(o.Az,"typography")};

            ${t.get(o.I9,void 0)}
            ${t.get(o.eK,void 0)}
            ${d};

            .resize-cursor {
                cursor: ew-resize;
                cursor: col-resize;
            }

            .editor {
                ${h};

                ${f};
                ${p};
                ${y};
                ${m};
                ${b};
                ${v};
                ${g};

                ${k};
                ${x};

                ${_};
            }
        }
    `},ot={typography:J,code:Q},st={radius:"4px",lineWidth:"1px"},ct=t=>(e,n)=>{const{css:r}=e,i=t?it:rt;n.set(o.tP,(t=>{if(!t)return;const[e,n]=t,r=i[e],a=(0,o.wK)(r);return a?`rgba(${null==a?void 0:a.join(", ")}, ${n||1})`:void 0})),n.set(o.dz,(t=>{if(t)return st[t]})),n.set(o.Az,(t=>{if(t)return ot[t].join(", ")})),n.set(o.eK,(([t="y",e="normal"]=["y","normal"])=>{const i=n.get(o.tP,["secondary",.38]),a=n.get(o.tP,["secondary",.12]),s=n.get(o.tP,["secondary"]),c=r({"&::-webkit-scrollbar":{["y"===t?"width":"height"]:("thin"===e?2:12)+"px",backgroundColor:"transparent"}});return r`
            scrollbar-width: thin;
            scrollbar-color: ${i} ${a};
            -webkit-overflow-scrolling: touch;

            ${c};

            &::-webkit-scrollbar-track {
                border-radius: 999px;
                background: transparent;
                border: 4px solid transparent;
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 999px;
                background-color: ${i};
                border: ${"thin"===e?0:4}px solid transparent;
                background-clip: content-box;
            }

            &::-webkit-scrollbar-thumb:hover {
                background-color: ${s};
            }
        `})),n.set(o.I9,(()=>{const t=n.get(o.dz,"lineWidth"),e=t=>n.get(o.tP,["shadow",t]);return r`
            box-shadow: 0 ${t} ${t} ${e(.14)}, 0 2px ${t} ${e(.12)},
                0 ${t} 3px ${e(.2)};
        `})),n.set(o.UT,(t=>{const e=n.get(o.dz,"lineWidth"),i=n.get(o.tP,["line"]);return t?r({[`border${(t=>t.charAt(0).toUpperCase()+t.slice(1))(t)}`]:`${e} solid ${i}`}):r`
                border: ${e} solid ${i};
            `})),n.set(o.kS,(t=>{if(t)return et(t)})),n.set(o._G,(()=>{at(n,e)})),Z(n,e)},lt=(t=!1)=>(0,a.LS)(((e,n)=>ct(t)(e,n)));lt(!0),lt(!1);let ut=!1;var dt;typeof window<"u"&&(ut=Boolean(null==(dt=window.matchMedia)?void 0:dt.call(window,"(prefers-color-scheme: dark)").matches));const ht=lt(ut);var ft=n(1441);n(8675),n(7380),n(1118);let pt=t=>crypto.getRandomValues(new Uint8Array(t)),gt=(t,e,n)=>{let r=(2<<Math.log(t.length-1)/Math.LN2)-1,i=-~(1.6*r*e/t.length);return(a=e)=>{let o="";while(1){let e=n(i),s=i;while(s--)if(o+=t[e[s]&r]||"",o.length===a)return o}}},yt=(t,e=21)=>gt(t,e,pt);const mt=t=>Object.prototype.hasOwnProperty.call(t,"origin");class bt extends Array{findThenRun(t,e){const n=this.findIndex((e=>mt(e)&&e.origin===t));return n<0||e(n),this}configure(t,e){return this.findThenRun(t,(n=>{this.splice(n,1,t(e))}))}replace(t,e){return this.findThenRun(t,(t=>{this.splice(t,1,e)}))}remove(t){return this.findThenRun(t,(t=>{this.splice(t,1)}))}headless(){return this.filter(mt).forEach((t=>{this.configure(t.origin,{headless:!0})})),this}static create(t){return new bt(...t)}}yt("abcedfghicklmn",10);const vt=t=>(e,...n)=>{var r;const i=null!=(r=null==t?void 0:t(e,...n))?r:n;return Array.isArray(i)?i.filter((t=>t)).join(" "):i},_t=(t,e,n)=>[t,e,n],xt=(t,e)=>{try{const n=t.get(o.Xc),r=t.get(o.ev);if(!r.css)throw(0,P.Wf)();return{getClassName:vt(null==e?void 0:e.className),getStyle:t=>null!=e&&e.headless?"":t(r),themeManager:n}}catch{throw(0,P.Wf)()}},kt=t=>{const e=n=>{const r=t(n);return r.origin=e,r};return e},wt=(t,e)=>n=>{const r=n,i=(n,r)=>e(((...e)=>n(t(...e),...e)),r);return r.extend=i,r},Dt=(...t)=>{const e=t.length;let n=e;for(;n--;)if("function"!=typeof t[n])throw new TypeError("Expected a function");return(...n)=>{let r=0,i=e?t[r](...n):n[0];for(;++r<e;)i=t[r](i);return i}},Et=t=>async(e,n)=>{null==t||t.forEach((t=>e.pre.inject(t))),await n()},Ct=async(t,e)=>{const{ctx:n}=t;await n.wait(a.MT),await e()},Tt=(0,ft.oM)(void 0,"getRemarkPluginsPipeCtx"),St=async(t,e)=>{const{ctx:n,pipelineCtx:r}=t;await n.wait(a.Iq);const i=r.get(Tt);if(i){const t=i(n);n.update(a.CG,(e=>e.concat(t)))}await e()},At=(0,ft.oM)(void 0,"getSchemaPipeCtx"),Ft=(0,ft.oM)({},"Type"),Mt=async(t,e)=>{var n;const{ctx:r,pipelineCtx:i}=t,o=i.get(At),s=null!=(n=null==o?void 0:o(t.ctx))?n:{};let c={},l={};if(s.node){c=s.node;const t=Object.entries(s.node);r.update(a.pB,(e=>[...e,...t]))}if(s.mark){l=s.mark;const t=Object.entries(s.mark);r.update(a.ZP,(e=>[...e,...t]))}await r.wait(a.R3);const u=r.get(a.le),d=Object.keys(c).map((t=>[t,u.nodes[t]])),h=Object.keys(l).map((t=>[t,u.marks[t]])),f=Object.fromEntries([...d,...h]);i.set(Ft,f),await e()},Bt=(0,ft.oM)(void 0,"getCommandsPipeCtx"),Nt=async(t,e)=>{const{ctx:n,pipelineCtx:r}=t,i=r.get(Bt);if(i){const t=r.get(Ft);i(t,n).forEach((([t,e])=>{n.get(a.Xo).create(t,e)}))}await e()},Ot=(0,ft.oM)(void 0,"getInputRulesPipeCtx"),Lt=async(t,e)=>{const{ctx:n,pipelineCtx:r}=t,i=r.get(Ot);if(i){const t=r.get(Ft);n.update(a.tQ,(e=>[...e,...i(t,n)]))}await e()},It=(0,ft.oM)({},"shortcutsPipeCtx"),Rt=async(t,e)=>{const{pipelineCtx:n,ctx:r}=t,i=n.get(It),o=n.get(Yt),s=(t,e)=>{var n,r;return null!=(r=null==(n=null==o?void 0:o.keymap)?void 0:n[t])?r:e},c=Object.entries(i).flatMap((([t,[e,n,i]])=>{const o=()=>r.get(a.Xo).call(e,i),c=s(t,n);return Array.isArray(c)?c.map((t=>({key:t,runner:o}))):{key:c,runner:o}})).map((t=>[t.key,t.runner]));r.update(a.ZV,(t=>t.concat((0,I.h)(Object.fromEntries(c))))),await e()},Pt=(0,ft.oM)(void 0,"getProsePluginsPipeCtx"),jt=async(t,e)=>{const{pipelineCtx:n,ctx:r}=t,i=n.get(Pt);if(i){const t=n.get(Ft);r.update(a.ZV,(e=>[...e,...i(t,r)]))}await e()},zt=(0,ft.oM)(void 0,"getViewPipeCtx"),$t=async(t,e)=>{const{pipelineCtx:n,ctx:r}=t,i=n.get(zt),o=n.get(Yt),s=o.view?o.view(r):null==i?void 0:i(r);if(s){const t=Object.entries(s).filter((([t])=>-1!==r.get(a.pB).findIndex((e=>e[0]===t)))),e=Object.entries(s).filter((([t])=>-1!==r.get(a.ZP).findIndex((e=>e[0]===t))));r.update(a.um,(e=>[...e,...t])),r.update(a.hT,(t=>[...t,...e]))}await e()},Yt=(0,ft.oM)({},"optionsPipeCtx"),Ut=(0,ft.oM)("","idPipeCtx"),Wt=async(t,e)=>{const{pipelineCtx:n}=t;n.inject(Ut).inject(Yt).inject(Tt).inject(At).inject(Ft).inject(Bt).inject(Ot).inject(It).inject(Pt).inject(zt),await e()},qt=t=>(e,n)=>{let r=-1;const i=a=>{if(a<=r)return Promise.reject(new Error("next() called multiple times"));r=a;let o=t[a];if(a===t.length&&(o=n),!o)return Promise.resolve();try{return Promise.resolve(o(e,(()=>i(a+1))))}catch(s){return Promise.reject(s)}};return i(0)},Ht=t=>{const e=qt(t),n=(0,ft.fH)(),r=(0,ft.xj)(),i=new ft.Xb(n,r);return(t,n)=>e({pre:t,ctx:n,pipelineCtx:i})},Vt=(t,e)=>Dt(kt,wt(t,Vt))((n=>r=>async i=>{const a=async({pipelineCtx:e},r)=>{const a=xt(i,n),o=t(a,n),{id:s,commands:c,remarkPlugins:l,schema:u,inputRules:d,shortcuts:h,prosePlugins:f,view:p}=o,g=null==n?void 0:n.view,y={...n||{},view:g?t=>({[s]:g(t)}):void 0};e.set(Ut,s),e.set(Yt,y),e.set(Tt,l),e.set(At,(t=>({mark:{[s]:u(t)}}))),c&&e.set(Bt,((t,e)=>c(t[s],e))),d&&e.set(Ot,((t,e)=>d(t[s],e))),h&&e.set(It,h),f&&e.set(Pt,((t,e)=>f(t[s],e))),p&&e.set(zt,(t=>({[s]:p(t)}))),await r()};await Ht([Wt,Et(e),Ct,a,St,Mt,Nt,Lt,Rt,jt,$t])(r,i)})),Gt=(t,e)=>Dt(kt,wt(t,Gt))((n=>r=>async i=>{const a=async({pipelineCtx:e},r)=>{const a=xt(i,n),o=t(a,n),{id:s,commands:c,remarkPlugins:l,schema:u,inputRules:d,shortcuts:h,prosePlugins:f,view:p}=o,g=null==n?void 0:n.view,y={...n||{},view:g?t=>({[s]:g(t)}):void 0};e.set(Ut,s),e.set(Yt,y),e.set(Tt,l),e.set(At,(t=>({node:{[s]:u(t)}}))),c&&e.set(Bt,((t,e)=>c(t[s],e))),d&&e.set(Ot,((t,e)=>d(t[s],e))),h&&e.set(It,h),f&&e.set(Pt,((t,e)=>f(t[s],e))),p&&e.set(zt,(t=>({[s]:p(t)}))),await r()};await Ht([Wt,Et(e),Ct,a,St,Mt,Nt,Lt,Rt,jt,$t])(r,i)})),Xt=(t,e)=>Dt(kt,wt(t,Xt))((n=>r=>async i=>{const a=async({pipelineCtx:e},r)=>{const a=xt(i,n),o=t(a,n),{commands:s,remarkPlugins:c,schema:l,inputRules:u,shortcuts:d,prosePlugins:h,view:f}=o;e.set(Yt,n||{}),e.set(Tt,c),l&&e.set(At,l),s&&e.set(Bt,s),u&&e.set(Ot,u),d&&e.set(It,d),h&&e.set(Pt,h),f&&e.set(zt,f),await r()};await Ht([Wt,Et(e),Ct,a,St,Mt,Nt,Lt,Rt,jt,$t])(r,i)}));class Kt{constructor(t,e){this.match=t,this.match=t,this.handler="string"==typeof e?Zt(e):e}}function Zt(t){return function(e,n,r,i){let a=t;if(n[1]){let t=n[0].lastIndexOf(n[1]);a+=n[0].slice(t+n[1].length),r+=t;let e=r-i;e>0&&(a=n[0].slice(t-e,t)+a,r=i)}return e.tr.insertText(a,r,i)}}new Kt(/--$/,"—"),new Kt(/\.\.\.$/,"…"),new Kt(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/,"“"),new Kt(/"$/,"”"),new Kt(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/,"‘"),new Kt(/'$/,"’");function Jt(t,e,n=null,r){return new Kt(t,((t,i,a,o)=>{let s=n instanceof Function?n(i):n,c=t.tr.delete(a,o),l=c.doc.resolve(a),u=l.blockRange(),d=u&&(0,g.nd)(u,e,s);if(!d)return null;c.wrap(u,d);let h=c.doc.resolve(a-1).nodeBefore;return h&&h.type==e&&(0,g.Mn)(c.doc,a-1)&&(!r||r(i,h))&&c.join(a-1),c}))}function Qt(t,e,n=null){return new Kt(t,((t,r,i,a)=>{let o=t.doc.resolve(i),s=n instanceof Function?n(r):n;return o.node(-1).canReplaceWith(o.index(-1),o.indexAfter(-1),e)?t.tr.delete(i,a).setBlockType(i,i,e,s):null}))}var te=n(1543);function ee(t){return function(e,n){let{$from:r,$to:i,node:a}=e.selection;if(a&&a.isBlock||r.depth<2||!r.sameParent(i))return!1;let o=r.node(-1);if(o.type!=t)return!1;if(0==r.parent.content.size&&r.node(-1).childCount==r.indexAfter(-1)){if(3==r.depth||r.node(-3).type!=t||r.index(-2)!=r.node(-2).childCount-1)return!1;if(n){let i=te.HY.empty,a=r.index(-1)?1:r.index(-2)?2:3;for(let t=r.depth-a;t>=r.depth-3;t--)i=te.HY.from(r.node(t).copy(i));let o=r.indexAfter(-1)<r.node(-2).childCount?1:r.indexAfter(-2)<r.node(-3).childCount?2:3;i=i.append(te.HY.from(t.createAndFill()));let s=r.before(r.depth-(a-1)),c=e.tr.replace(s,r.after(-o),new te.p2(i,4-a,0)),l=-1;c.doc.nodesBetween(s,c.doc.content.size,((t,e)=>{if(l>-1)return!1;t.isTextblock&&0==t.content.size&&(l=e+1)})),l>-1&&c.setSelection(y.Y1.near(c.doc.resolve(l))),n(c.scrollIntoView())}return!0}let s=i.pos==r.end()?o.contentMatchAt(0).defaultType:null,c=e.tr.delete(r.pos,i.pos),l=s?[null,{type:s}]:void 0;return!!(0,g.Ax)(c.doc,r.pos,2,l)&&(n&&n(c.split(r.pos,2,l).scrollIntoView()),!0)}}function ne(t){return function(e,n){let{$from:r,$to:i}=e.selection,a=r.blockRange(i,(e=>e.childCount>0&&e.firstChild.type==t));return!!a&&(!n||(r.node(a.depth-1).type==t?re(e,n,t,a):ie(e,n,a)))}}function re(t,e,n,r){let i=t.tr,a=r.end,o=r.$to.end(r.depth);a<o&&(i.step(new g.FC(a-1,o,a,o,new te.p2(te.HY.from(n.create(null,r.parent.copy())),1,0),1,!0)),r=new te.Ts(i.doc.resolve(r.$from.pos),i.doc.resolve(o),r.depth));const s=(0,g.k9)(r);if(null==s)return!1;i.lift(r,s);let c=i.mapping.map(a,-1)-1;return(0,g.Mn)(i.doc,c)&&i.join(c),e(i.scrollIntoView()),!0}function ie(t,e,n){let r=t.tr,i=n.parent;for(let f=n.end,p=n.endIndex-1,g=n.startIndex;p>g;p--)f-=i.child(p).nodeSize,r.delete(f-1,f+1);let a=r.doc.resolve(n.start),o=a.nodeAfter;if(r.mapping.map(n.end)!=n.start+a.nodeAfter.nodeSize)return!1;let s=0==n.startIndex,c=n.endIndex==i.childCount,l=a.node(-1),u=a.index(-1);if(!l.canReplace(u+(s?0:1),u+1,o.content.append(c?te.HY.empty:te.HY.from(i))))return!1;let d=a.pos,h=d+o.nodeSize;return r.step(new g.FC(d-(s?1:0),h+(c?1:0),d+1,h-1,new te.p2((s?te.HY.empty:te.HY.from(i.copy(te.HY.empty))).append(c?te.HY.empty:te.HY.from(i.copy(te.HY.empty))),s?0:1,c?0:1),s?0:1)),e(r.scrollIntoView()),!0}function ae(t){return function(e,n){let{$from:r,$to:i}=e.selection,a=r.blockRange(i,(e=>e.childCount>0&&e.firstChild.type==t));if(!a)return!1;let o=a.startIndex;if(0==o)return!1;let s=a.parent,c=s.child(o-1);if(c.type!=t)return!1;if(n){let r=c.lastChild&&c.lastChild.type==s.type,i=te.HY.from(r?t.create():null),o=new te.p2(te.HY.from(t.create(null,te.HY.from(s.type.create(null,i)))),r?3:1,0),l=a.start,u=a.end;n(e.tr.step(new g.FC(l-(r?3:1),u,l,u,o,1,!0)).scrollIntoView())}return!0}}var oe=n(3266),se=n(5732);const ce={}.hasOwnProperty;function le(t){const e=Object.create(null);if(!t||!t.type)throw new Error("mdast-util-definitions expected node");return(0,oe.Vn)(t,"definition",(t=>{const n=ue(t.identifier);n&&!ce.call(e,n)&&(e[n]=t)})),n;function n(t){const n=ue(t);return n&&ce.call(e,n)?e[n]:null}}function ue(t){return String(t||"").toUpperCase()}function de(){return t=>{const e=le(t);(0,oe.Vn)(t,((t,n,r)=>{if("definition"===t.type&&null!==r&&"number"===typeof n)return r.children.splice(n,1),[se.AM,n];if("imageReference"===t.type||"linkReference"===t.type){const i=e(t.identifier);if(i&&null!==r&&"number"===typeof n){const e="imageReference"===t.type?{type:"image",url:i.url,title:i.title,alt:t.alt}:{type:"link",url:i.url,title:i.title,children:t.children};return r.children[n]=e,[se.AM,n]}}}))}}const he={HardBreak:"HardBreak",Blockquote:"Blockquote",BulletList:"BulletList",OrderedList:"OrderedList",CodeFence:"CodeFence",H1:"H1",H2:"H2",H3:"H3",H4:"H4",H5:"H5",H6:"H6",DowngradeHeading:"DowngradeHeading",Text:"Text",CodeInline:"CodeInline",Em:"Em",Bold:"Bold",NextListItem:"NextListItem",SinkListItem:"SinkListItem",LiftListItem:"LiftListItem"},fe="code_inline",pe=(0,a.uW)("ToggleInlineCode"),ge=Vt((t=>({id:fe,schema:()=>({priority:100,code:!0,inclusive:!1,parseDOM:[{tag:"code"}],toDOM:e=>["code",{class:t.getClassName(e.attrs,"code-inline")}],parseMarkdown:{match:t=>"inlineCode"===t.type,runner:(t,e,n)=>{t.openMark(n),t.addText(e.value),t.closeMark(n)}},toMarkdown:{match:t=>t.type.name===fe,runner:(t,e,n)=>{t.withMark(e,"inlineCode",n.text||"")}}}),commands:t=>[(0,a.ml)(pe,(()=>(e,n)=>{const{selection:r,tr:i}=e;if(r.empty)return!1;const{from:a,to:o}=r;return e.doc.rangeHasMark(a,o,t)?(null==n||n(i.removeMark(a,o,t)),!0):(Object.keys(e.schema.marks).filter((e=>e!==t.name)).map((t=>e.schema.marks[t])).forEach((t=>{i.removeMark(a,o,t)})),null==n||n(i.addMark(a,o,t.create())),!0)}))],shortcuts:{[he.CodeInline]:_t(pe,"Mod-e")}}))),ye="em",me=(0,a.uW)("ToggleItalic"),be=Vt((t=>({id:ye,schema:()=>({inclusive:!1,parseDOM:[{tag:"i"},{tag:"em"},{style:"font-style",getAttrs:t=>"italic"===t}],toDOM:e=>["em",{class:t.getClassName(e.attrs,ye)}],parseMarkdown:{match:t=>"emphasis"===t.type,runner:(t,e,n)=>{t.openMark(n),t.next(e.children),t.closeMark(n)}},toMarkdown:{match:t=>t.type.name===ye,runner:(t,e)=>{t.withMark(e,"emphasis")}}}),commands:t=>[(0,a.ml)(me,(()=>(0,s.w9)(t)))],shortcuts:{[he.Em]:_t(me,"Mod-i")}}))),ve=new y.H$("MILKDOWN_LINK_INPUT"),_e=(0,a.uW)("ToggleLink"),xe=(0,a.uW)("ModifyLink"),ke="link",we=Vt(((t,e)=>({id:ke,schema:()=>({attrs:{href:{},title:{default:null}},parseDOM:[{tag:"a[href]",getAttrs:t=>{if(!(t instanceof HTMLElement))throw(0,P.GZ)(t);return{href:t.getAttribute("href"),title:t.getAttribute("title")}}}],toDOM:e=>["a",{...e.attrs,class:t.getClassName(e.attrs,ke)}],parseMarkdown:{match:t=>"link"===t.type,runner:(t,e,n)=>{const r=e.url,i=e.title;t.openMark(n,{href:r,title:i}),t.next(e.children),t.closeMark(n)}},toMarkdown:{match:t=>t.type.name===ke,runner:(t,e)=>{t.withMark(e,"link",void 0,{title:e.attrs.title,url:e.attrs.href})}}}),commands:t=>[(0,a.ml)(_e,((e="")=>(0,s.w9)(t,{href:e}))),(0,a.ml)(xe,((e="")=>(n,r)=>{var i;if(!r)return!1;const{marks:a}=n.schema;let o,s=-1;const{selection:c}=n,{from:l,to:u}=c;if(n.doc.nodesBetween(l,l===u?u+1:u,((t,e)=>{var n;if(null!=(n=a.link)&&n.isInSet(t.marks))return o=t,s=e,!1})),!o)return!1;const d=o.marks.find((({type:e})=>e===t));if(!d)return!1;const h=s,f=s+o.nodeSize,{tr:p}=n,g=null==(i=a.link)?void 0:i.create({...d.attrs,href:e});return!!g&&(r(p.removeMark(h,f,d).addMark(h,f,g).setSelection(new y.Bs(p.selection.$anchor)).scrollIntoView()),!0)}))],prosePlugins:(n,r)=>{let i=!1;return[new y.Sy({key:ve,view:o=>{var s,c,l;const u=t.themeManager.get("input-chip",{placeholder:null!=(c=null==(s=null==e?void 0:e.input)?void 0:s.placeholder)?c:"Input Web Link",buttonText:null==(l=null==e?void 0:e.input)?void 0:l.buttonText,onUpdate:t=>{r.get(a.Xo).call(xe,t)},calculatePosition:(t,e)=>{(0,j.wI)(t,e,((e,n,r,a)=>{const o=t.dom.parentElement;if(!o)throw(0,P.$q)();const s=n.left-e.left;let c=e.left-a.left-(r.width-s)/2,l=e.bottom-a.top+14+o.scrollTop;return i&&(l=e.top-a.top-r.height-14+o.scrollTop),c<0&&(c=0),[l,c]}))}});if(!u)return{};const d=t=>{const{selection:e,doc:r}=t.state,{from:a,to:o}=e;if(!t.hasFocus())return!1;if(e.empty&&e instanceof y.Bs&&o<r.content.size&&a<r.content.size&&r.rangeHasMark(a,a===o?o+1:o,n))return i=!1,!0;if(e instanceof y.qv){const{node:t}=e;if("image"===t.type.name&&t.marks.findIndex((t=>t.type.name===ke))>-1)return i=!0,!0}return!1},h=t=>{const{selection:e}=t.state;let r;const{from:i,to:a}=e;if(t.state.doc.nodesBetween(i,i===a?a+1:a,(t=>{if(n.isInSet(t.marks))return r=t,!1})),!r)return;const o=r.marks.find((t=>t.type===n));return o?o.attrs.href:void 0},f=t=>{t.editable&&(d(t)?(u.show(t),u.update(h(t))):u.hide())};return u.init(o),f(o),{update:(t,e)=>{(null==e?void 0:e.doc.eq(t.state.doc))&&e.selection.eq(t.state.selection)||requestAnimationFrame((()=>{f(t)}))},destroy:()=>{u.destroy()}}}})]}}))),De="strong",Ee=(0,a.uW)("ToggleBold"),Ce=Vt((t=>({id:De,schema:()=>({inclusive:!1,parseDOM:[{tag:"b"},{tag:"strong"},{style:"font-style",getAttrs:t=>"bold"===t}],toDOM:e=>["strong",{class:t.getClassName(e.attrs,De)}],parseMarkdown:{match:t=>"strong"===t.type,runner:(t,e,n)=>{t.openMark(n),t.next(e.children),t.closeMark(n)}},toMarkdown:{match:t=>t.type.name===De,runner:(t,e)=>{t.withMark(e,"strong")}}}),commands:t=>[(0,a.ml)(Ee,(()=>(0,s.w9)(t)))],shortcuts:{[he.Bold]:_t(Ee,"Mod-b")}}))),Te=[ge(),be(),Ce(),we()],Se="blockquote",Ae=(0,a.uW)("WrapInBlockquote"),Fe=Gt((t=>({id:Se,schema:()=>({content:"block+",group:"block",defining:!0,parseDOM:[{tag:"blockquote"}],toDOM:e=>["blockquote",{class:t.getClassName(e.attrs,Se)},0],parseMarkdown:{match:({type:t})=>t===Se,runner:(t,e,n)=>{t.openNode(n).next(e.children).closeNode()}},toMarkdown:{match:t=>t.type.name===Se,runner:(t,e)=>{t.openNode("blockquote").next(e.content).closeNode()}}}),inputRules:t=>[Jt(/^\s*>\s$/,t)],commands:t=>[(0,a.ml)(Ae,(()=>(0,s.ym)(t)))],shortcuts:{[he.Blockquote]:_t(Ae,"Mod-Shift-b")}}))),Me=(0,a.uW)("WrapInBulletList"),Be=Gt((t=>{const e="bullet_list";return{id:e,schema:()=>({content:"listItem+",group:"block",attrs:{spread:{default:!1}},parseDOM:[{tag:"ul",getAttrs:t=>{if(!(t instanceof HTMLElement))throw(0,P.GZ)(t);return{spread:t.dataset.spread}}}],toDOM:e=>["ul",{"data-spread":e.attrs.spread,class:t.getClassName(e.attrs,"bullet-list")},0],parseMarkdown:{match:({type:t,ordered:e})=>"list"===t&&!e,runner:(t,e,n)=>{const r=null!=e.spread?`${e.spread}`:"false";t.openNode(n,{spread:r}).next(e.children).closeNode()}},toMarkdown:{match:t=>t.type.name===e,runner:(t,e)=>{t.openNode("list",void 0,{ordered:!1,spread:"true"===e.attrs.spread}).next(e.content).closeNode()}}}),inputRules:t=>[Jt(/^\s*([-+*])\s$/,t)],commands:t=>[(0,a.ml)(Me,(()=>(0,s.ym)(t)))],shortcuts:{[he.BulletList]:_t(Me,"Mod-Alt-8")}}})),Ne=["","javascript","typescript","bash","sql","json","html","css","c","cpp","java","ruby","python","go","rust","markdown"],Oe=/^```(?<language>[a-z]*)?[\s\n]$/,Le=/^~~~(?<language>[a-z]*)?[\s\n]$/,Ie=(0,a.uW)("TurnIntoCodeFence"),Re="fence",Pe=Gt(((t,e)=>{const n=(null==e?void 0:e.languageList)||Ne;return{id:Re,schema:e=>({content:"text*",group:"block",marks:"",defining:!0,code:!0,attrs:{language:{default:""},fold:{default:!0}},parseDOM:[{tag:"div.code-fence-container",preserveWhitespace:"full",getAttrs:t=>{var e;if(!(t instanceof HTMLElement))throw(0,P.GZ)(t);return{language:null==(e=t.querySelector("pre"))?void 0:e.dataset.language}},getContent:(t,e)=>{var n,r;if(!(t instanceof HTMLElement))throw(0,P.GZ)(t);const i=null!=(r=null==(n=t.querySelector("pre"))?void 0:n.textContent)?r:"";if(!i)return te.HY.empty;const a=e.text(i);return te.HY.from(a)}},{tag:"pre",preserveWhitespace:"full",getAttrs:t=>{if(!(t instanceof HTMLElement))throw(0,P.GZ)(t);return{language:t.dataset.language}}}],toDOM:r=>{const i=document.createElement("select");return n.forEach((t=>{const e=document.createElement("option");e.value=t,e.innerText=t||"--",t===r.attrs.language&&(e.selected=!0),i.appendChild(e)})),i.onchange=t=>{const n=t.target;if(!(n instanceof HTMLSelectElement))return;const i=e.get(a.U7);if(!i.editable)return void(n.value=r.attrs.language);const{top:o,left:s}=n.getBoundingClientRect(),c=i.posAtCoords({top:o,left:s});if(!c)return;const{tr:l}=i.state;i.dispatch(l.setNodeMarkup(c.inside,void 0,{...r.attrs,language:n.value}))},["div",{class:"code-fence-container"},i,["pre",{"data-language":r.attrs.language,class:t.getClassName(r.attrs,"code-fence")},["code",{spellCheck:"false"},0]]]},parseMarkdown:{match:({type:t})=>"code"===t,runner:(t,e,n)=>{const r=e.lang,i=e.value;t.openNode(n,{language:r}),i&&t.addText(i),t.closeNode()}},toMarkdown:{match:t=>t.type.name===Re,runner:(t,e)=>{var n;t.addNode("code",void 0,(null==(n=e.content.firstChild)?void 0:n.text)||"",{lang:e.attrs.language})}}}),inputRules:t=>[Qt(Oe,t,(t=>{const[e,n]=t;if(e)return{language:n}})),Qt(Le,t,(t=>{const[e,n]=t;if(e)return{language:n}}))],commands:t=>[(0,a.ml)(Ie,(()=>(0,s.uJ)(t)))],shortcuts:{[he.CodeFence]:_t(Ie,"Mod-Alt-c")},view:()=>(e,r,i)=>{let a=e;const o=t=>{const{tr:e}=r.state;r.dispatch(e.setNodeMarkup(i(),void 0,{fold:!0,language:t}))},s=()=>{const{tr:t}=r.state;r.dispatch(t.setNodeMarkup(i(),void 0,{...a.attrs,fold:!0}))},c=()=>{const{tr:t}=r.state;r.dispatch(t.setNodeMarkup(i(),void 0,{...a.attrs,fold:!1}))},l=t.themeManager.get("code-fence",{onBlur:s,onFocus:c,onSelectLanguage:o,editable:()=>r.editable,languageList:n});if(!l)return{};const{dom:u,contentDOM:d,onUpdate:h,onDestroy:f}=l;return h(a),{dom:u,contentDOM:d,update:t=>t.type.name===Re&&(a=t,h(a),!0),destroy:f}}}})),je=Gt((()=>({id:"doc",schema:()=>({content:"block+",parseMarkdown:{match:({type:t})=>"root"===t,runner:(t,e,n)=>{t.injectRoot(e,n)}},toMarkdown:{match:t=>"doc"===t.type.name,runner:(t,e)=>{t.openNode("root"),t.next(e.content)}}})}))),ze=(0,a.uW)("InsertHardbreak"),$e=new y.H$("MILKDOWN_HARDBREAK_FILTER"),Ye=Gt(((t,e)=>{var n;const r=null!=(n=null==e?void 0:e.notIn)?n:["table","fence"];return{id:"hardbreak",schema:()=>({inline:!0,group:"inline",selectable:!1,parseDOM:[{tag:"br"}],toDOM:e=>["br",{class:t.getClassName(e.attrs,"hardbreak")}],parseMarkdown:{match:({type:t})=>"break"===t,runner:(t,e,n)=>{t.addNode(n)}},toMarkdown:{match:t=>"hardbreak"===t.type.name,runner:t=>{t.addNode("break")}}}),commands:t=>[(0,a.ml)(ze,(()=>(e,n)=>{var r;const{selection:i,tr:a}=e;if(i.empty){const t=i.$from.node();if(t.childCount>0&&"hardbreak"===(null==(r=t.lastChild)?void 0:r.type.name))return null==n||n(a.replaceRangeWith(i.to-1,i.to,e.schema.node("paragraph")).setSelection(y.Y1.near(a.doc.resolve(i.to))).scrollIntoView()),!0}return null==n||n(a.setMeta("hardbreak",!0).replaceSelectionWith(t.create()).scrollIntoView()),!0}))],shortcuts:{[he.HardBreak]:_t(ze,"Shift-Enter")},prosePlugins:t=>[new y.Sy({key:$e,filterTransaction:(t,e)=>{const n=t.getMeta("hardbreak"),[i]=t.steps;if(n&&i){const{from:t}=i,n=e.doc.resolve(t);let a=n.depth,o=!0;for(;a>0;)r.includes(n.node(a).type.name)&&(o=!1),a--;return o}return!0}}),new y.Sy({key:new y.H$("MILKDOWN_HARDBREAK_MARKS"),appendTransaction:(e,n,r)=>{if(!e.length)return;const[i]=e;if(!i)return;const[a]=i.steps;if(i.getMeta("hardbreak")){if(!(a instanceof g.Pu))return;const{from:e}=a;return r.tr.setNodeMarkup(e,t,void 0,[])}if(a instanceof g.WJ){let e=r.tr;const{from:n,to:i}=a;return r.doc.nodesBetween(n,i,((n,r)=>{n.type===t&&(e=e.setNodeMarkup(r,t,void 0,[]))})),e}}})]}})),Ue=Array(6).fill(0).map(((t,e)=>e+1)),We=(0,a.uW)("TurnIntoHeading"),qe=(0,a.uW)("DowngradeHeading"),He=new y.H$("MILKDOWN_HEADING_ID"),Ve=new y.H$("MILKDOWN_HEADING_HASH"),Ge=t=>t.textContent.replace(/[\p{P}\p{S}]/gu,"").replace(/\s/g,"-").toLowerCase().trim(),Xe=(t,e,n)=>{let r=!1;const i=(t,i)=>{const a=t.tr.setMeta("addToHistory",!1);let o=!1;t.doc.descendants(((t,i)=>{if(t.type===e&&!r){if(0===t.textContent.trim().length)return;const e=t.attrs,r=n(t);e.id!==r&&(o=!0,a.setMeta(He,!0).setNodeMarkup(i,void 0,{...e,id:r}))}})),o&&i(a)};return new y.Sy({key:He,props:{handleDOMEvents:{compositionstart:()=>(r=!0,!1),compositionend:()=>{r=!1;const e=t.get(a.U7);return setTimeout((()=>{i(e.state,(t=>e.dispatch(t)))}),0),!1}}},appendTransaction:(t,e,n)=>{let r=null;return t.every((t=>!t.getMeta(He)))&&t.some((t=>t.docChanged))&&i(n,(t=>{r=t})),r},view:t=>{const e=t.state.doc;let r=t.state.tr.setMeta("addToHistory",!1);return e.descendants(((t,e)=>{"heading"===t.type.name&&t.attrs.level&&(t.attrs.id||(r=r.setNodeMarkup(e,void 0,{...t.attrs,id:n(t)})))})),t.dispatch(r),{}}})},Ke=(t,e,n)=>new y.Sy({key:Ve,state:{init:()=>R.EH.empty,apply:r=>{var i;const s=t.get(a.U7);if(null==(i=s.hasFocus)||!i.call(s)||!s.editable)return R.EH.empty;const{$from:c}=r.selection,l=c.node();if(l.type!==e)return R.EH.empty;const u=l.attrs.level,d=t=>Array(t).fill(0).map((t=>"#")).join(""),h=document.createElement("span");h.textContent=d(u),h.contentEditable="false",n.themeManager.onFlush((()=>{const t=n.getStyle((({css:t})=>{const e=(0,o.XN)(n.themeManager);return t`
                            margin-right: 4px;
                            color: ${e("primary")};
                        `}));t&&(h.className=t)}));const f=R.p.widget(c.before()+1,h,{side:-1});return R.EH.create(r.doc,[f])}},props:{handleDOMEvents:{focus:t=>{const e=(0,j.zN)(t.state.tr);return t.dispatch(e),!1}},decorations(t){return this.getState(t)}}}),Ze=Gt(((t,e)=>{var n,r;const i="heading",o=null!=(n=null==e?void 0:e.getId)?n:Ge,c=null==(r=null==e?void 0:e.displayHashtag)||r;return{id:i,schema:()=>({content:"inline*",group:"block",defining:!0,attrs:{id:{default:""},level:{default:1}},parseDOM:Ue.map((t=>({tag:`h${t}`,getAttrs:e=>{if(!(e instanceof HTMLElement))throw(0,P.GZ)(e);return{level:t,id:e.id}}}))),toDOM:e=>[`h${e.attrs.level}`,{id:e.attrs.id||o(e),class:t.getClassName(e.attrs,`heading h${e.attrs.level}`)},0],parseMarkdown:{match:({type:t})=>t===i,runner:(t,e,n)=>{const r=e.depth;t.openNode(n,{level:r}),t.next(e.children),t.closeNode()}},toMarkdown:{match:t=>t.type.name===i,runner:(t,e)=>{var n;if(t.openNode("heading",void 0,{depth:e.attrs.level}),e.childCount>=1&&"hardbreak"===(null==(n=e.lastChild)?void 0:n.type.name)){const n=[];e.content.forEach(((t,r,i)=>{i!==e.childCount-1&&n.push(t)})),t.next(te.HY.fromArray(n))}else t.next(e.content);t.closeNode()}}}),inputRules:(t,e)=>Ue.map((n=>Qt(new RegExp(`^(#{1,${n}})\\s$`),t,(()=>{const t=e.get(a.U7),{$from:r}=t.state.selection,i=r.node();if("heading"===i.type.name){let t=Number(i.attrs.level)+Number(n);return t>6&&(t=6),{level:t}}return{level:n}})))),commands:(t,e)=>[(0,a.ml)(We,((n=1)=>n<1?(0,s.uJ)(0===n&&e.get(a.le).nodes.paragraph||t):(0,s.uJ)(0===n&&e.get(a.le).nodes.paragraph||t,{level:n}))),(0,a.ml)(qe,(()=>(n,r,i)=>{const{$from:o}=n.selection,c=o.node();if(c.type!==t||!n.selection.empty||0!==o.parentOffset)return!1;const l=c.attrs.level-1;return l?(null==r||r(n.tr.setNodeMarkup(n.selection.$from.before(),void 0,{...c.attrs,level:l})),!0):(0,s.uJ)(e.get(a.le).nodes.paragraph||t)(n,r,i)}))],shortcuts:{[he.H1]:_t(We,"Mod-Alt-1",1),[he.H2]:_t(We,"Mod-Alt-2",2),[he.H3]:_t(We,"Mod-Alt-3",3),[he.H4]:_t(We,"Mod-Alt-4",4),[he.H5]:_t(We,"Mod-Alt-5",5),[he.H6]:_t(We,"Mod-Alt-6",6),[he.DowngradeHeading]:_t(qe,["Backspace","Delete"])},prosePlugins:(e,n)=>{const r=[Xe(n,e,o)];return c&&r.push(Ke(n,e,t)),r}}})),Je="hr",Qe=(0,a.uW)("InsertHr"),tn=Gt((t=>({id:Je,schema:()=>({group:"block",parseDOM:[{tag:"hr"}],toDOM:e=>["hr",{class:t.getClassName(e.attrs,Je)}],parseMarkdown:{match:({type:t})=>"thematicBreak"===t,runner:(t,e,n)=>{t.addNode(n)}},toMarkdown:{match:t=>t.type.name===Je,runner:t=>{t.addNode("thematicBreak")}}}),inputRules:t=>[new Kt(/^(?:---|___\s|\*\*\*\s)$/,((e,n,r,i)=>{const{tr:a}=e;return n[0]&&a.replaceWith(r-1,i,t.create()),a}))],commands:(t,e)=>[(0,a.ml)(Qe,(()=>(n,r)=>{if(!r)return!0;const i=e.get(a.le).node("paragraph"),{tr:o,selection:s}=n,{from:c}=s,l=t.create();if(!l)return!0;const u=o.replaceSelectionWith(l).insert(c,i),d=y.Y1.findFrom(u.doc.resolve(c),1,!0);return d&&r(u.setSelection(d).scrollIntoView()),!0}))]}))),en=(0,a.uW)("ModifyImage"),nn=(0,a.uW)("InsertImage"),rn="image",an=new y.H$("MILKDOWN_IMAGE_INPUT"),on=Gt(((t,e)=>({id:"image",schema:()=>({inline:!0,group:"inline",selectable:!0,draggable:!0,marks:"",atom:!0,defining:!0,isolating:!0,attrs:{src:{default:""},alt:{default:""},title:{default:""}},parseDOM:[{tag:"img[src]",getAttrs:t=>{if(!(t instanceof HTMLElement))throw(0,P.GZ)(t);return{src:t.getAttribute("src")||"",alt:t.getAttribute("alt")||"",title:t.getAttribute("title")||t.getAttribute("alt")||""}}}],toDOM:e=>["img",{...e.attrs,class:t.getClassName(e.attrs,rn)}],parseMarkdown:{match:({type:t})=>t===rn,runner:(t,e,n)=>{const r=e.url,i=e.alt,a=e.title;t.addNode(n,{src:r,alt:i,title:a})}},toMarkdown:{match:t=>t.type.name===rn,runner:(t,e)=>{t.addNode("image",void 0,void 0,{title:e.attrs.title,url:e.attrs.src,alt:e.attrs.alt})}}}),commands:t=>[(0,a.ml)(nn,((e="")=>(n,r)=>{if(!r)return!0;const{tr:i}=n,a=t.create({src:e});if(!a)return!0;const o=i.replaceSelectionWith(a);return r(o.scrollIntoView()),!0})),(0,a.ml)(en,((e="")=>(n,r)=>{const i=(0,j.a1)(n.selection,t);if(!i)return!1;const{tr:a}=n;return null==r||r(a.setNodeMarkup(i.pos,void 0,{...i.node.attrs,loading:!0,src:e}).scrollIntoView()),!0}))],inputRules:t=>[new Kt(/!\[(?<alt>.*?)]\((?<filename>.*?)\s*(?="|\))"?(?<title>[^"]+)?"?\)/,((e,n,r,i)=>{const[a,o,s="",c]=n,{tr:l}=e;return a&&l.replaceWith(r,i,t.create({src:s,alt:o,title:c})),l}))],view:()=>n=>{var r,i;let a=n;const o=null!=(r=null==e?void 0:e.placeholder)?r:"Add an Image",s=null!=(i=null==e?void 0:e.isBlock)&&i,c=t.themeManager.get("image",{placeholder:o,isBlock:s});if(!c)return{};const{dom:l,onUpdate:u}=c;return u(a),{dom:l,update:t=>t.type.name===rn&&(a=t,u(a),!0),selectNode:()=>{l.classList.add("ProseMirror-selectednode")},deselectNode:()=>{l.classList.remove("ProseMirror-selectednode")}}},prosePlugins:(n,r)=>[new y.Sy({key:an,view:i=>{var o,s,c;const l=t.themeManager.get("input-chip",{placeholder:null!=(s=null==(o=null==e?void 0:e.input)?void 0:o.placeholder)?s:"Input Image Link",buttonText:null==(c=null==e?void 0:e.input)?void 0:c.buttonText,onUpdate:t=>{r.get(a.Xo).call(en,t)}});if(!l)return{};const u=t=>Boolean(t.hasFocus()&&n&&(0,j.a1)(t.state.selection,n)),d=t=>{const e=(0,j.a1)(t.state.selection,n);return e?e.node.attrs.src:void 0},h=t=>{t.editable&&(u(t)?(l.show(t),l.update(d(t))):l.hide())};return l.init(i),h(i),{update:(t,e)=>{(null==e?void 0:e.doc.eq(t.state.doc))&&e.selection.eq(t.state.selection)||h(t)},destroy:()=>{l.destroy()}}}})]}))),sn="list_item",cn=(0,a.uW)("SplitListItem"),ln=(0,a.uW)("SinkListItem"),un=(0,a.uW)("LiftListItem"),dn=new y.H$("MILKDOWN_KEEP_LIST_ORDER"),hn=t=>{const e=(e,n)=>{const r=(0,j.Kl)("ordered_list",e.schema);let i=e.tr;e.doc.descendants(((e,n,a,o)=>{if(e.type===t&&(null==a?void 0:a.type)===r){let r=!1;const s={...e.attrs};"ordered"!==e.attrs.listType&&(s.listType="ordered",r=!0);const c=null==a?void 0:a.maybeChild(0);c&&c.type===t&&"ordered"===c.attrs.listType&&(s.label=`${o+1}.`,r=!0),"•"===e.attrs.label&&(s.label=`${o+1}.`,r=!0),r&&(i=i.setNodeMarkup(n,void 0,s))}})),n(i)};return new y.Sy({key:dn,appendTransaction:(t,n,r)=>{let i=null;return t.some((t=>t.docChanged))&&e(r,(t=>{i=t})),i}})},fn=Gt((t=>({id:sn,schema:()=>({group:"listItem",content:"paragraph block*",attrs:{label:{default:"•"},listType:{default:"bullet"},spread:{default:"true"}},defining:!0,parseDOM:[{tag:"li.list-item",getAttrs:t=>{if(!(t instanceof HTMLElement))throw(0,P.GZ)(t);return{label:t.dataset.label,listType:t.dataset["list-type"],spread:t.dataset.spread}},contentElement:t=>{if(!(t instanceof HTMLElement))throw(0,P.GZ)(t);const e=t.querySelector(".list-item_body");return e||t}},{tag:"li"}],toDOM:e=>["li",{class:t.getClassName(e.attrs,"list-item"),"data-label":e.attrs.label,"data-list-type":e.attrs.listType,"data-spread":e.attrs.spread},["div",{class:t.getClassName(e.attrs,"list-item_label")},e.attrs.label],["div",{class:t.getClassName(e.attrs,"list-item_body")},0]],parseMarkdown:{match:({type:t,checked:e})=>"listItem"===t&&null===e,runner:(t,e,n)=>{const r=null!=e.label?`${e.label}.`:"•",i=null!=e.label?"ordered":"bullet",a=null!=e.spread?`${e.spread}`:"true";t.openNode(n,{label:r,listType:i,spread:a}),t.next(e.children),t.closeNode()}},toMarkdown:{match:t=>t.type.name===sn,runner:(t,e)=>{t.openNode("listItem",void 0,{spread:"true"===e.attrs.spread}),t.next(e.content),t.closeNode()}}}),inputRules:t=>[Jt(/^\s*([-+*])\s$/,t)],commands:t=>[(0,a.ml)(cn,(()=>ee(t))),(0,a.ml)(ln,(()=>ae(t))),(0,a.ml)(un,(()=>ne(t)))],shortcuts:{[he.NextListItem]:_t(cn,"Enter"),[he.SinkListItem]:_t(ln,"Mod-]"),[he.LiftListItem]:_t(un,"Mod-[")},prosePlugins:t=>[hn(t)]}))),pn=(0,a.uW)("WrapInOrderedList"),gn="ordered_list",yn=Gt((t=>({id:gn,schema:()=>({content:"listItem+",group:"block",attrs:{order:{default:1},spread:{default:!1}},parseDOM:[{tag:"ol",getAttrs:t=>{if(!(t instanceof HTMLElement))throw(0,P.GZ)(t);return{spread:t.dataset.spread,order:t.hasAttribute("start")?Number(t.getAttribute("start")):1}}}],toDOM:e=>["ol",{...1===e.attrs.order?{}:e.attrs.order,"data-spread":e.attrs.spread,class:t.getClassName(e.attrs,"ordered-list")},0],parseMarkdown:{match:({type:t,ordered:e})=>"list"===t&&!!e,runner:(t,e,n)=>{const r=null!=e.spread?`${e.spread}`:"true";t.openNode(n,{spread:r}).next(e.children).closeNode()}},toMarkdown:{match:t=>t.type.name===gn,runner:(t,e)=>{t.openNode("list",void 0,{ordered:!0,start:1,spread:"true"===e.attrs.spread}),t.next(e.content),t.closeNode()}}}),inputRules:t=>[Jt(/^(\d+)\.\s$/,t,(t=>({order:Number(t[1])})),((t,e)=>e.childCount+e.attrs.order===Number(t[1])))],commands:t=>[(0,a.ml)(pn,(()=>(0,s.ym)(t)))],shortcuts:{[he.OrderedList]:_t(pn,"Mod-Alt-7")}}))),mn=(0,a.uW)("TurnIntoText"),bn="paragraph",vn=Gt((t=>({id:bn,schema:()=>({content:"inline*",group:"block",parseDOM:[{tag:"p"}],toDOM:e=>["p",{class:t.getClassName(e.attrs,bn)},0],parseMarkdown:{match:t=>"paragraph"===t.type,runner:(t,e,n)=>{t.openNode(n),e.children?t.next(e.children):t.addText(e.value),t.closeNode()}},toMarkdown:{match:t=>"paragraph"===t.type.name,runner:(t,e)=>{var n;if(t.openNode("paragraph"),e.childCount>=1&&"hardbreak"===(null==(n=e.lastChild)?void 0:n.type.name)){const n=[];e.content.forEach(((t,r,i)=>{i!==e.childCount-1&&n.push(t)})),t.next(te.HY.fromArray(n))}else t.next(e.content);t.closeNode()}}}),commands:t=>[(0,a.ml)(mn,(()=>(0,s.uJ)(t)))],shortcuts:{[he.Text]:_t(mn,"Mod-Alt-0")}}))),_n=Gt((()=>({id:"text",schema:()=>({group:"inline",parseMarkdown:{match:({type:t})=>"text"===t,runner:(t,e)=>{t.addText(e.value)}},toMarkdown:{match:t=>"text"===t.type.name,runner:(t,e)=>{t.addNode("text",void 0,e.text)}}})}))),xn=[je(),vn(),Ye(),Fe(),Pe(),Be(),yn(),fn(),Ze(),tn(),on(),_n()],kn=()=>{function t(t){(0,oe.Vn)(t,"list",(t=>{var e;if(t.ordered){const n=null!=(e=t.start)?e:1;t.children.forEach(((t,e)=>{t.label=e+n}))}else;}))}return t},wn=t=>!!t.children,Dn=t=>"html"===t.type;function En(t,e){return n(t,0,null)[0];function n(t,r,i){if(wn(t)){const e=[];for(let r=0,i=t.children.length;r<i;r++){const i=t.children[r];if(i){const a=n(i,r,t);if(a)for(let t=0,n=a.length;t<n;t++){const n=a[t];n&&e.push(n)}}}t.children=e}return e(t,r,i)}}const Cn=()=>{function t(t){En(t,(t=>Dn(t)?[]:[t]))}return t},Tn=new y.H$("MILKDOWN_INLINE_NODES_CURSOR"),Sn=()=>{let t=!1;const e=new y.Sy({key:Tn,state:{init(){return!1},apply(t){if(!t.selection.empty)return!1;const e=t.selection.$from,n=e.nodeBefore,r=e.nodeAfter;return!(!(n&&r&&n.isInline&&!n.isText&&r.isInline)||r.isText)}},props:{handleDOMEvents:{compositionend:(n,r)=>!!t&&(t=!1,requestAnimationFrame((()=>{if(e.getState(n.state)){const t=n.state.selection.from;r.preventDefault(),n.dispatch(n.state.tr.insertText(r.data||"",t))}})),!0),compositionstart:n=>(e.getState(n.state)&&(t=!0),!1),beforeinput:(n,r)=>{if(e.getState(n.state)&&r instanceof InputEvent&&r.data&&!t){const t=n.state.selection.from;return r.preventDefault(),n.dispatch(n.state.tr.insertText(r.data||"",t)),!0}return!1}},decorations(t){if(e.getState(t)){const e=t.selection.$from.pos,n=document.createElement("span"),r=R.p.widget(e,n,{side:-1}),i=document.createElement("span"),a=R.p.widget(e,i);return setTimeout((()=>{n.contentEditable="true",i.contentEditable="true"})),R.EH.create(t.doc,[r,a])}return R.EH.empty}}});return e},An=/\[(?<span>((www|https:\/\/|http:\/\/)\S+))]\((?<url>\S+)\)/,Fn=t=>new RegExp(`\\\\(?=[^\\w\\s${t}\\\\]|_)`,"g"),Mn=t=>{let e=t,n=e.match(An);for(;n&&n.groups;){const{span:t}=n.groups;e=e.replace(An,t),n=e.match(An)}return e},Bn=(t,e,n)=>{const r=t.split(""),i=r[e];return r[e]&&r[n]&&(r[e]=r[n],r[n]=i),r.join("").toString()},Nn=t=>e=>e.replace(Fn(t),""),On=t=>e=>{const n=e.indexOf(t.hole),r=e.charAt(n-1),i=e.charAt(n+1),a=/[^\w]|_/;return i?r&&a.test(r)&&a.test(i)?t.punctuation:t.char:t.punctuation},Ln=(t,e,n)=>{let r=e,i=!1;return t.descendants((t=>{var e;if(i)return!1;if(t.isText){const a=null==(e=t.text)?void 0:e.indexOf(n);if(null!=a&&a>=0)return i=!0,r+=a,!1}r+=t.nodeSize})),r},In={placeholderConfig:{hole:"∅",punctuation:"⁂",char:"∴"},globalNodes:["footnote_definition"],shouldSyncNode:({prevNode:t,nextNode:e})=>t.inlineContent&&e&&t.type===e.type&&!t.eq(e),movePlaceholder:(t,e)=>{const n=["*","_"];let r=e.indexOf(t);for(;n.includes(e[r-1]||"")&&n.includes(e[r+1]||"");)e=Bn(e,r,r+1),r+=1;return e}},Rn=(0,ft.oM)(In,"inlineSyncConfig"),Pn=t=>{const{selection:e}=t,{$from:n}=e;return n.node()},jn=(t,e,n,r)=>{const i=t.get(a.Ck),o=e.schema.topNodeType.create(void 0,[n,...r]);return i(o)},zn=(t,e)=>{const n=t.get(Rn),r=n.placeholderConfig.hole,[i="",...a]=e.split("\n\n"),o=t=>n.movePlaceholder(r,t);let s=Dt(Nn(r),o,Mn)(i);const c=On(n.placeholderConfig)(s);return s=s.replace(r,c),s=[s,...a].join("\n\n"),[s,c]},$n=(t,e)=>{const n=t.get(a._z)(e);return n?n.firstChild:null},Yn=(t,e)=>{const{globalNodes:n}=t.get(Rn),r=[];return e.doc.descendants((t=>{if(n.includes(t.type.name)||n.includes(t.type))return r.push(t),!1})),r},Un=t=>t.split("\n\n")[0]||"",Wn=(t,e)=>{try{const n=Yn(t,e),r=Pn(e),i=jn(t,e,r,n),[a,o]=zn(t,i),s=$n(t,a);return s&&r.type===s.type?(s.attrs={...r.attrs},s.descendants((t=>{var e;const n=t.marks.find((t=>"link"===t.type.name));n&&(null==(e=t.text)?void 0:e.includes(o))&&n.attrs.href.includes(o)&&(n.attrs.href=n.attrs.href.replace(o,""))})),{text:Un(a),prevNode:r,nextNode:s,placeholder:o}):null}catch{return null}},qn=(t,e,n,r,i)=>{const{placeholderConfig:a}=t.get(Rn),o=a.hole;let s=n.tr.setMeta(e,!0).insertText(o,n.selection.from);const c=n.apply(s),l=Wn(t,c);if(!l)return;const{$from:u}=c.selection,d=u.before(),h=u.after(),f=Ln(l.nextNode,d,l.placeholder);s=s.replaceWith(d,h,l.nextNode).setNodeMarkup(d,void 0,i).delete(f+1,f+2),s=s.setSelection(y.Bs.near(s.doc.resolve(f+1))),r(s)},Hn=new y.H$("MILKDOWN_INLINE_SYNC"),Vn=t=>{let e=null;return new y.Sy({key:Hn,state:{init:()=>null,apply:(n,r,i,o)=>{var s;const c=t.get(a.U7);if(null==(s=c.hasFocus)||!s.call(c)||!c.editable||!n.docChanged||n.getMeta(Hn))return null;const l=Wn(t,o);if(!l)return null;e&&(cancelAnimationFrame(e),e=null);const{prevNode:u,nextNode:d,text:h}=l,{shouldSyncNode:f}=t.get(Rn);return f({prevNode:u,nextNode:d,ctx:t,tr:n,text:h})&&(e=requestAnimationFrame((()=>{e=null;const{dispatch:n,state:r}=t.get(a.U7);qn(t,Hn,r,n,u.attrs)}))),null}}})},Gn=[Xt((()=>({prosePlugins:(t,e)=>[Sn(),Vn(e)],remarkPlugins:()=>[de,Cn,kn]})),[Rn])()],Xn=bt.create([...xn,...Te]),Kn=bt.create([...Gn,...Xn]);var Zn=n(3287);const Jn=(t,e)=>{if(!e)return!1;const{from:n,$from:r,to:i,empty:a}=t.selection;return a?!!e.isInSet(t.storedMarks||r.marks()):t.doc.rangeHasMark(n,i,e)},Qn=(0,a.uW)("SelectParent"),tr=[[{type:"button",icon:"undo",key:"Undo",disabled:t=>!O(t.state)},{type:"button",icon:"redo",key:"Redo",disabled:t=>!L(t.state)}],[{type:"select",text:"Heading",options:[{id:"1",text:"Large Heading"},{id:"2",text:"Medium Heading"},{id:"3",text:"Small Heading"},{id:"0",text:"Plain Text"}],disabled:t=>{const{state:e}=t,n=e.schema.nodes.heading;if(!n)return!0;const r=t=>(0,s.uJ)(n,{level:t})(e);return!(t.state.selection instanceof y.Bs)||!(r(1)||r(2)||r(3))},onSelect:t=>Number(t)?["TurnIntoHeading",Number(t)]:["TurnIntoText",null]}],[{type:"button",icon:"bold",key:"ToggleBold",active:t=>Jn(t.state,t.state.schema.marks.strong),disabled:t=>!t.state.schema.marks.strong},{type:"button",icon:"italic",key:"ToggleItalic",active:t=>Jn(t.state,t.state.schema.marks.em),disabled:t=>!t.state.schema.marks.em},{type:"button",icon:"strikeThrough",key:"ToggleStrikeThrough",active:t=>Jn(t.state,t.state.schema.marks.strike_through),disabled:t=>!t.state.schema.marks.strike_through}],[{type:"button",icon:"bulletList",key:"WrapInBulletList",disabled:t=>{const{state:e}=t,n=e.schema.nodes.bullet_list;return!n||!(0,s.ym)(n)(e)}},{type:"button",icon:"orderedList",key:"WrapInOrderedList",disabled:t=>{const{state:e}=t,n=e.schema.nodes.ordered_list;return!n||!(0,s.ym)(n)(e)}},{type:"button",icon:"taskList",key:"TurnIntoTaskList",disabled:t=>{const{state:e}=t,n=e.schema.nodes.task_list_item;return!n||!(0,s.ym)(n)(e)}},{type:"button",icon:"liftList",key:"LiftListItem",disabled:t=>{const{state:e}=t,n=e.schema.nodes.list_item;return!n||!ne(n)(e)}},{type:"button",icon:"sinkList",key:"SinkListItem",disabled:t=>{const{state:e}=t,n=e.schema.nodes.list_item;return!n||!ae(n)(e)}}],[{type:"button",icon:"link",key:"ToggleLink",active:t=>Jn(t.state,t.state.schema.marks.link)},{type:"button",icon:"image",key:"InsertImage"},{type:"button",icon:"table",key:"InsertTable"},{type:"button",icon:"code",key:"TurnIntoCodeFence"}],[{type:"button",icon:"quote",key:"WrapInBlockquote"},{type:"button",icon:"divider",key:"InsertHr"},{type:"button",icon:"select",key:Qn}]],er=(t,e,n)=>{const r=document.createElement("button");r.setAttribute("type","button"),t.themeManager.onFlush((()=>{r.className="button";const e=t.getStyle((({css:e})=>{const n=(0,o.XN)(t.themeManager);return e`
                border: 0;
                box-sizing: unset;
                width: 28px;
                height: 28px;
                padding: 4px;
                margin: 8px;
                flex-shrink: 0;
                font-size: 14px;

                display: flex;
                justify-content: center;
                align-items: center;

                background-color: ${n("surface")};
                color: ${n("solid")};
                transition: color 0.4s ease-in-out, background-color 0.4s ease-in-out;

                cursor: pointer;

                &.active,
                &:hover {
                    background-color: ${n("secondary",.12)};
                    color: ${n("primary")};
                }

                &:disabled {
                    display: none;
                }

                .material-icons-outlined {
                    font-size: 24px;
                }
            `}));e&&r.classList.add(e)}));const i=t.themeManager.get(o.kS,e.icon);if(i){const{label:t,dom:e}=i;t&&(r.setAttribute("aria-label",t),r.setAttribute("title",t)),r.appendChild(e)}else r.setAttribute("aria-label",e.icon),r.setAttribute("title",e.icon),r.textContent=e.icon;return r.addEventListener("mousedown",(t=>{t.preventDefault(),t.stopPropagation(),n.get(a.Xo).call(e.key,e.options)})),r},nr=t=>{const e=document.createElement("div");e.classList.add("divider");const{themeManager:n}=t;return n.onFlush((()=>{const r=t.getStyle((({css:t})=>t`
                flex-shrink: 0;
                width: ${n.get(o.dz,"lineWidth")};
                background-color: ${n.get(o.tP,["line"])};
                margin: 12px 16px;
                min-height: 24px;
            `));r&&e.classList.add(r)})),e},rr=(t,e,n,r)=>{var i;const s=document.createElement("div");s.classList.add("menu-selector-wrapper","fold");const c=document.createElement("button");c.setAttribute("type","button"),c.classList.add("menu-selector","fold"),c.addEventListener("mousedown",(e=>{var n;e.preventDefault(),e.stopPropagation(),s.classList.toggle("fold");const i=s.getBoundingClientRect();d.style.left=i.left-((null==(n=r.dom.parentElement)?void 0:n.getBoundingClientRect().left)||0)+"px";const a=t.themeManager.get(o.dz,"lineWidth");d.style.top=`calc(${i.height+"px"} + ${a} * 2)`})),r.dom.addEventListener("click",(()=>{s.classList.add("fold")}));const l=document.createElement("span");l.classList.add("menu-selector-value"),l.textContent=e.text;const u=null==(i=t.themeManager.get(o.kS,"downArrow"))?void 0:i.dom;s.appendChild(c),c.appendChild(l),u&&(u.setAttribute("aria-hidden","true"),c.appendChild(u));const d=document.createElement("div");d.classList.add("menu-selector-list"),e.options.forEach((t=>{const e=document.createElement("button");e.setAttribute("type","button"),e.dataset.id=t.id,e.textContent=t.text,e.classList.add("menu-selector-list-item"),d.appendChild(e)})),d.addEventListener("mousedown",(t=>{const{target:i}=t;if(i instanceof HTMLButtonElement&&i.dataset.id){const t=e.onSelect(i.dataset.id,r),[o,c]=t;n.get(a.Xo).call(o,c),s.classList.add("fold")}})),s.appendChild(d);const{themeManager:h}=t;return h.onFlush((()=>{const e=t.getStyle((({css:t})=>{const e=(t,e=1)=>h.get(o.tP,[t,e]);return t`
                flex-shrink: 0;
                font-weight: 500;
                font-size: 14px;

                ${h.get(o.UT,"right")}
                ${h.get(o.UT,"left")}

                .menu-selector {
                    border: 0;
                    box-sizing: unset;
                    cursor: pointer;
                    font: inherit;
                    text-align: left;
                    justify-content: space-between;
                    align-items: center;
                    color: ${e("neutral",.87)};
                    display: flex;
                    padding: 4px;
                    margin: 8px;
                    height: 28px;
                    background: ${e("secondary",.12)};
                    width: 160px;

                    &:disabled {
                        display: none;
                    }
                }

                .menu-selector-value {
                    flex: 1;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                .menu-selector-list {
                    width: 184px;
                    position: absolute;
                    background: ${e("surface")};
                    ${h.get(o.UT,void 0)}
                    ${h.get(o.I9,void 0)}
                    border-bottom-left-radius: ${h.get(o.dz,"radius")};
                    border-bottom-right-radius: ${h.get(o.dz,"radius")};
                    z-index: 3;
                }

                .menu-selector-list-item {
                    background-color: transparent;
                    border: 0;
                    cursor: pointer;
                    display: block;
                    font: inherit;
                    text-align: left;
                    padding: 12px 16px;
                    line-height: 28px;
                    width: 100%;
                    color: ${e("neutral",.87)};

                    &:hover {
                        background: ${e("secondary",.12)};
                        color: ${e("primary")};
                    }
                }

                &.fold {
                    border-color: transparent;

                    .menu-selector {
                        background: unset;
                    }

                    .menu-selector-list {
                        display: none;
                    }
                }
            `}));e&&s.classList.add(e)})),s};class ir{constructor(t,e,n,r,i){this.utils=e,this.ctx=n,this.config=t.map((t=>t.map((t=>({...t,$:this.$create(t,i)}))))).map(((e,n)=>{if(n===t.length-1)return e;const r={type:"divider",group:e.map((t=>t.$))};return[...e,{...r,$:this.$create(r,i)}]})).flat(),this.config.forEach((t=>r.appendChild(t.$)))}update(t){this.config.forEach((e=>{if("button"===e.type)return e.active&&(e.active(t)?e.$.classList.add("active"):e.$.classList.remove("active")),void(e.disabled&&(e.disabled(t)?e.$.setAttribute("disabled","true"):e.$.removeAttribute("disabled")));if("select"===e.type&&e.disabled){const n=e.disabled(t),r=e.$.children[0];r&&(n?(e.$.classList.add("disabled"),r.setAttribute("disabled","true")):(e.$.classList.remove("disabled"),r.removeAttribute("disabled")))}"divider"===e.type&&(e.group.every((t=>t.getAttribute("disabled")||t.classList.contains("disabled")))?e.$.classList.add("disabled"):e.$.classList.remove("disabled"))}))}$create(t,e){const{utils:n,ctx:r}=this;switch(t.type){case"button":return er(n,t,r);case"select":return rr(n,t,r,e);case"divider":default:return nr(n)}}}const ar=({menu:t,menuWrapper:e,milkdownDOM:n,editorRoot:r})=>{r.appendChild(n),e.remove(),t.remove()},or=({menu:t,menuWrapper:e,milkdownDOM:n})=>{e.insertBefore(t,n)},sr=t=>{if(!t)return document.body;if("string"==typeof t){const e=document.querySelector(t);return e||document.body}return t},cr=(t,e)=>{let n=null;n=document.createElement("div"),n.classList.add("milkdown-menu-wrapper");const r=t.get(a.KP),i=e.dom,o=sr(r),s=i.parentElement;if(!s)throw(0,P.$q)();return o.replaceChild(n,s),n.appendChild(s),n},lr=(t,e,n,r,i=or)=>{if(!r)throw(0,P.Cn)();const s=document.createElement("div");s.classList.add("milkdown-menu");const c=e.dom,{themeManager:l}=t;l.onFlush((()=>{const e=t.getStyle((()=>l.get(o.eK,["y"])));e&&c.classList.add(e);const n=t.getStyle((({css:t})=>{const e=l.get(o.UT,void 0),n=l.get(o.eK,["x","thin"]);return t`
                font-family: ${l.get(o.Az,"typography")};
                box-sizing: border-box;
                width: 100%;
                display: flex;
                flex-wrap: nowrap;
                overflow-x: scroll;
                ${e};
                ${n};
                overflow-y: hidden;
                background: ${l.get(o.tP,["surface"])};
                transition: background-color 0.4s ease-in-out;

                -webkit-overflow-scrolling: auto;

                .disabled {
                    display: none;
                }
            `}));n&&n.split(" ").forEach((t=>s.classList.add(t)))}));const u=n.get(a.KP),d=sr(u),h=c.parentElement;if(!h)throw(0,P.$q)();return i({menu:s,menuWrapper:r,editorDOM:c,editorRoot:d,milkdownDOM:h}),[s,()=>(ar({menu:s,menuWrapper:r,editorDOM:c,editorRoot:d,milkdownDOM:h}),h)]},ur=new y.H$("MILKDOWN_MENU"),dr=Xt(((t,e)=>{const n=null==e?void 0:e.domHandler;let r=null,i=null,o=null,c=null;const l=(s,l)=>{const u=null!=e&&e.config?"function"==typeof e.config?e.config(s):e.config:tr;if(l.editable){if(o||(o=cr(s,l),s.set(a.Nb,o)),!i){const[e,u]=lr(t,l,s,o,n);i=e,r=()=>{const t=u();o=null,i=null,c=null,r=null,s.set(a.Nb,t)}}c||(c=new ir(u,t,s,i,l))}};return{commands:()=>[(0,a.ml)(Qn,(()=>s.N0))],prosePlugins:(t,e)=>[new y.Sy({key:ur,view:t=>(l(e,t),t.editable&&(null==c||c.update(t)),{update:n=>{l(e,t),t.editable?null==c||c.update(n):null==r||r()},destroy:()=>{null==r||r()}})})]}})),hr=bt.create([dr()]);function fr(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function pr(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function gr(t,e){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var n=getComputedStyle(t,null);return pr(n.overflowY,e)||pr(n.overflowX,e)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function yr(t,e,n,r,i,a,o,s){return a<t&&o>e||a>t&&o<e?0:a<=t&&s<=n||o>=e&&s>=n?a-t-r:o>e&&s<n||a<t&&s>n?o-e+i:0}function mr(t,e){var n=window,r=e.scrollMode,i=e.block,a=e.inline,o=e.boundary,s=e.skipOverflowHiddenElements,c="function"==typeof o?o:function(t){return t!==o};if(!fr(t))throw new TypeError("Invalid target");for(var l=document.scrollingElement||document.documentElement,u=[],d=t;fr(d)&&c(d);){if((d=d.parentElement)===l){u.push(d);break}null!=d&&d===document.body&&gr(d)&&!gr(document.documentElement)||null!=d&&gr(d,s)&&u.push(d)}for(var h=n.visualViewport?n.visualViewport.width:innerWidth,f=n.visualViewport?n.visualViewport.height:innerHeight,p=window.scrollX||pageXOffset,g=window.scrollY||pageYOffset,y=t.getBoundingClientRect(),m=y.height,b=y.width,v=y.top,_=y.right,x=y.bottom,k=y.left,w="start"===i||"nearest"===i?v:"end"===i?x:v+m/2,D="center"===a?k+b/2:"end"===a?_:k,E=[],C=0;C<u.length;C++){var T=u[C],S=T.getBoundingClientRect(),A=S.height,F=S.width,M=S.top,B=S.right,N=S.bottom,O=S.left;if("if-needed"===r&&v>=0&&k>=0&&x<=f&&_<=h&&v>=M&&x<=N&&k>=O&&_<=B)return E;var L=getComputedStyle(T),I=parseInt(L.borderLeftWidth,10),R=parseInt(L.borderTopWidth,10),P=parseInt(L.borderRightWidth,10),j=parseInt(L.borderBottomWidth,10),z=0,$=0,Y="offsetWidth"in T?T.offsetWidth-T.clientWidth-I-P:0,U="offsetHeight"in T?T.offsetHeight-T.clientHeight-R-j:0;if(l===T)z="start"===i?w:"end"===i?w-f:"nearest"===i?yr(g,g+f,f,R,j,g+w,g+w+m,m):w-f/2,$="start"===a?D:"center"===a?D-h/2:"end"===a?D-h:yr(p,p+h,h,I,P,p+D,p+D+b,b),z=Math.max(0,z+g),$=Math.max(0,$+p);else{z="start"===i?w-M-R:"end"===i?w-N+j+U:"nearest"===i?yr(M,N,A,R,j+U,w,w+m,m):w-(M+A/2)+U/2,$="start"===a?D-O-I:"center"===a?D-(O+F/2)+Y/2:"end"===a?D-B+P+Y:yr(O,B,F,I,P+Y,D,D+b,b);var W=T.scrollLeft,q=T.scrollTop;w+=q-(z=Math.max(0,Math.min(q+z,T.scrollHeight-A+U))),D+=W-($=Math.max(0,Math.min(W+$,T.scrollWidth-F+Y)))}E.push({el:T,top:z,left:$})}return E}function br(t){return t===Object(t)&&0!==Object.keys(t).length}function vr(t,e){void 0===e&&(e="auto");var n="scrollBehavior"in document.body.style;t.forEach((function(t){var r=t.el,i=t.top,a=t.left;r.scroll&&n?r.scroll({top:i,left:a,behavior:e}):(r.scrollTop=i,r.scrollLeft=a)}))}function _r(t){return!1===t?{block:"end",inline:"nearest"}:br(t)?t:{block:"start",inline:"nearest"}}function xr(t,e){var n=t.isConnected||t.ownerDocument.documentElement.contains(t);if(br(e)&&"function"===typeof e.behavior)return e.behavior(n?mr(t,e):[]);if(n){var r=_r(e);return vr(mr(t,r),r.behavior)}}var kr,wr=xr,Dr=function(){return kr||(kr="performance"in window?performance.now.bind(performance):Date.now),kr()};function Er(t){var e=Dr(),n=Math.min((e-t.startTime)/t.duration,1),r=t.ease(n),i=t.startX+(t.x-t.startX)*r,a=t.startY+(t.y-t.startY)*r;t.method(i,a),i!==t.x||a!==t.y?requestAnimationFrame((function(){return Er(t)})):t.cb()}function Cr(t,e,n,r,i,a){var o,s,c,l;void 0===r&&(r=600),void 0===i&&(i=function(t){return 1+--t*t*t*t*t}),o=t,s=t.scrollLeft,c=t.scrollTop,l=function(e,n){t.scrollLeft=Math.ceil(e),t.scrollTop=Math.ceil(n)},Er({scrollable:o,method:l,startTime:Dr(),startX:s,startY:c,x:e,y:n,duration:r,ease:i,cb:a})}var Tr=function(t){return t&&!t.behavior||"smooth"===t.behavior};function Sr(t,e){var n=e||{};return Tr(n)?wr(t,{block:n.block,inline:n.inline,scrollMode:n.scrollMode,boundary:n.boundary,behavior:function(t){return Promise.all(t.reduce((function(t,e){var r=e.el,i=e.left,a=e.top,o=r.scrollLeft,s=r.scrollTop;return o===i&&s===a?t:[].concat(t,[new Promise((function(t){return Cr(r,i,a,n.duration,n.ease,(function(){return t({el:r,left:[o,i],top:[s,a]})}))}))])}),[]))}}):Promise.resolve(wr(t,e))}var Ar=Sr,Fr=Ar;const Mr=(t,{css:e})=>{const n=(e,n=1)=>t.get(o.tP,[e,n]);return e`
        .slash-dropdown-item {
            display: flex;
            gap: 32px;
            height: 48px;
            padding: 0 16px;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
            line-height: 48px;
            font-family: ${t.get(o.Az,"typography")};
            font-size: 14px;

            transition: all 0.2s ease-in-out;

            &,
            .icon {
                color: ${n("neutral",.87)};
                transition: all 0.2s ease-in-out;
            }

            &.hide {
                display: none;
            }

            &.active {
                background: ${n("secondary",.12)};
                &,
                .icon {
                    color: ${n("primary")};
                }
            }
        }
    `},Br=(t,e)=>{const n=(e,n=1)=>t.get(o.tP,[e,n]);return e.css`
        width: 320px;
        max-height: 320px;
        overflow-y: auto;
        border-radius: ${t.get(o.dz,"radius")};
        position: absolute;
        background: ${n("surface")};

        ${t.get(o.UT,void 0)}
        ${t.get(o.I9,void 0)}
        ${t.get(o.eK,void 0)}

        &.hide {
            display: none;
        }

        ${Mr(t,e)}
    `},Nr=(t,e)=>{const n=document.createElement("div");return n.setAttribute("role","listbox"),n.setAttribute("tabindex","-1"),t.themeManager.onFlush((()=>{const e=t.getStyle((e=>Br(t.themeManager,e)));e&&n.classList.add(e)})),n.classList.add(t.getClassName({},e),"hide"),n},Or=(t,e,n,r)=>{var i;const a=null!=(i=null==r?void 0:r.textClassName)?i:"text",s=document.createElement("div");s.setAttribute("role","option"),s.classList.add("slash-dropdown-item");const c=t.get(o.kS,n);if(!c)throw(0,P.zG)(n);const l=document.createElement("span");return l.textContent=e,l.className=a,s.appendChild(c.dom),s.appendChild(l),s},Lr=(t,e)=>{const{selection:n}=t,{$from:r}=n,i=t.tr.deleteRange(r.start(),r.pos);return null==e||e(i),!1},Ir=t=>(e,n,r)=>(r&&(Lr(e,n),t()),!0),Rr=(t,e="/")=>{const{nodes:n}=t.get(a.le),r=[{id:"h1",dom:Or(t.get(o.Xc),"Large Heading","h1"),command:()=>t.get(a.Xo).call("TurnIntoHeading",1),keyword:["h1","large heading"],typeName:"heading"},{id:"h2",dom:Or(t.get(o.Xc),"Medium Heading","h2"),command:()=>t.get(a.Xo).call("TurnIntoHeading",2),keyword:["h2","medium heading"],typeName:"heading"},{id:"h3",dom:Or(t.get(o.Xc),"Small Heading","h3"),command:()=>t.get(a.Xo).call("TurnIntoHeading",3),keyword:["h3","small heading"],typeName:"heading"},{id:"bulletList",dom:Or(t.get(o.Xc),"Bullet List","bulletList"),command:()=>t.get(a.Xo).call("WrapInBulletList"),keyword:["bullet list","ul"],typeName:"bullet_list"},{id:"orderedList",dom:Or(t.get(o.Xc),"Ordered List","orderedList"),command:()=>t.get(a.Xo).call("WrapInOrderedList"),keyword:["ordered list","ol"],typeName:"ordered_list"},{id:"taskList",dom:Or(t.get(o.Xc),"Task List","taskList"),command:()=>t.get(a.Xo).call("TurnIntoTaskList"),keyword:["task list","task"],typeName:"task_list_item"},{id:"image",dom:Or(t.get(o.Xc),"Image","image"),command:()=>t.get(a.Xo).call("InsertImage"),keyword:["image"],typeName:"image"},{id:"blockquote",dom:Or(t.get(o.Xc),"Quote","quote"),command:()=>t.get(a.Xo).call("WrapInBlockquote"),keyword:["quote","blockquote"],typeName:"blockquote"},{id:"table",dom:Or(t.get(o.Xc),"Table","table"),command:()=>t.get(a.Xo).call("InsertTable"),keyword:["table"],typeName:"table"},{id:"code",dom:Or(t.get(o.Xc),"Code Fence","code"),command:()=>t.get(a.Xo).call("TurnIntoCodeFence"),keyword:["code"],typeName:"fence"},{id:"divider",dom:Or(t.get(o.Xc),"Divide Line","divider"),command:()=>t.get(a.Xo).call("InsertHr"),keyword:["divider","hr"],typeName:"hr"}],i=e.slice(1).toLocaleLowerCase();return r.filter((t=>!!n[t.typeName]&&t.keyword.some((t=>t.includes(i))))).map((({keyword:t,typeName:e,...n})=>n))},Pr=t=>({content:e,isTopLevel:n})=>n?e?e.startsWith("/")?"/"===e?{placeholder:"Type to filter...",actions:Rr(t)}:{actions:Rr(t,e)}:null:{placeholder:"Type / to use the slash commands..."}:null,jr=(t,{css:e})=>{const n=(e,n=1)=>t.get(o.tP,[e,n]),r=t.get(o.Az,"typography");return e`
        position: relative;
        &::before {
            position: absolute;
            cursor: text;
            font-family: ${r};
            font-size: 14px;
            color: ${n("neutral",.6)};
            content: attr(data-text);
            height: 100%;
            display: flex;
            align-items: center;
        }
    `},zr=(t,{css:e})=>e`
    &::before {
        left: 8px;
    }
`,$r=(t,e)=>({handleKeyDown:(e,n)=>!(t.isEmpty()||!(n instanceof KeyboardEvent)||!["ArrowUp","ArrowDown","Enter"].includes(n.key)),decorations:n=>{const r=(0,j.Kk)((({type:t})=>"paragraph"===t.name))(n.selection),i=n.plugins.find((t=>"MILKDOWN_UPLOAD$"===t.key)),a=null==i?void 0:i.getState(n);if(null!=a&&a.find(n.selection.from,n.selection.to).length>0||!r||r.node.childCount>1||n.selection.$from.parentOffset!==r.node.textContent.length||r.node.firstChild&&"text"!==r.node.firstChild.type.name)return t.clear(),null;const{placeholder:o,actions:s}=t.update({parentNode:n.selection.$from.node(n.selection.$from.depth-1),isTopLevel:1===n.selection.$from.depth,content:r.node.textContent,state:n});if(!o)return null;const c=(t,e)=>{const i=r.pos;return R.EH.create(n.doc,[R.p.node(i,i+r.node.nodeSize,{class:e.filter((t=>t)).join(" "),"data-text":t})])},l=e.getStyle((t=>jr(e.themeManager,t))),u=e.getStyle((t=>zr(e.themeManager,t)));return s.length?c(o,[l,u,"empty-node","is-slash"]):c(o,[l,"empty-node"])}}),Yr=t=>({id:t.id,$:t.dom,command:Ir(t.command)}),Ur=()=>({placeholder:null,actions:[]}),Wr=t=>{const e=Ur();return{get:()=>e,clear:()=>{e.placeholder=null,e.actions=[]},update:n=>{var r,i;const a=t(n);return e.placeholder=null!=(r=null==a?void 0:a.placeholder)?r:null,e.actions=(null!=(i=null==a?void 0:a.actions)?i:[]).map(Yr),e},isEmpty:()=>0===e.actions.length}},qr=(t,e,n)=>{const{actions:r}=t.get();if(!r.length)return e.classList.add("hide"),!1;for(e.childNodes.forEach((t=>{t.removeEventListener("mouseenter",n.mouseEnter),t.removeEventListener("mouseleave",n.mouseLeave)}));e.firstChild;)e.firstChild.remove();r.forEach((({$:t})=>{t.classList.remove("active"),t.addEventListener("mouseenter",n.mouseEnter),t.addEventListener("mouseleave",n.mouseLeave),e.appendChild(t)})),e.classList.remove("hide");const i=r[0];return i&&(i.$.classList.add("active"),requestAnimationFrame((()=>{Fr(i.$,{scrollMode:"if-needed",block:"nearest",inline:"nearest"})}))),!0},Hr=()=>{let t=!1;return{isLock:()=>t,lock:()=>{t=!0},unlock:()=>{t=!1}}},Vr=t=>()=>{t.unlock()},Gr=(t,e)=>n=>{if(e.isLock())return;const{actions:r}=t.get(),i=r.findIndex((t=>t.$.classList.contains("active"))),a=r[i];a&&i>=0&&a.$.classList.remove("active");const{target:o}=n;o instanceof HTMLElement&&o.classList.add("active")},Xr=()=>t=>{const{target:e}=t;e instanceof HTMLElement&&e.classList.remove("active")},Kr=(t,e,n)=>r=>{const{target:i}=r;if(!(i instanceof HTMLElement)||!e)return;const a=()=>{r.stopPropagation(),r.preventDefault()},{actions:o}=t.get(),s=Object.values(o).find((({$:t})=>t.contains(i)));if(!s){if(t.isEmpty())return;return t.clear(),n.classList.add("hide"),void a()}a(),s.command(e.state,e.dispatch,e)},Zr=(t,e,n,r)=>i=>{if(!(i instanceof KeyboardEvent))return;r.isLock()||r.lock();const{key:a}=i;if(t.isEmpty()||!["ArrowDown","ArrowUp","Enter","Escape"].includes(a))return;const{actions:o}=t.get();let s=o.findIndex((({$:t})=>t.classList.contains("active")));s<0&&(s=0);const c=t=>{const e=o[s],n=o[t];!e||!n||(e.$.classList.remove("active"),n.$.classList.add("active"),Fr(n.$,{scrollMode:"if-needed",block:"nearest",inline:"nearest"}))};if("ArrowDown"===a){const t=s===o.length-1?0:s+1;return void c(t)}if("ArrowUp"===a){const t=0===s?o.length-1:s-1;return void c(t)}if("Escape"===a){if(t.isEmpty())return;return t.clear(),void n.classList.add("hide")}const l=o[s];!l||(l.command(e.state,e.dispatch,e),l.$.classList.remove("active"))},Jr=(t,e)=>{(0,j.q7)(t,e,((t,n,r)=>{const i=e.parentElement;if(!i)throw(0,P.$q)();let a=t.left-r.left,o=t.bottom-r.top+14+i.scrollTop;if(a<0&&(a=0),r.height+r.top-t.bottom<n.height){const e=t.top-r.top-n.height-14+i.scrollTop;e>0&&(o=e)}return[o,a]}))},Qr=(t,e,n,r,i)=>{const a=e.dom.parentNode;if(!a)return{};const o=Nr(n,r),s=Hr();a.appendChild(o);const c=Vr(s),l=Kr(t,e,o),u=Zr(t,e,o,s),d=Gr(t,s),h=Xr();return a.addEventListener("mousemove",c),a.addEventListener("mousedown",l),a.addEventListener("keydown",u),{update:e=>{!qr(t,o,{mouseEnter:d,mouseLeave:h})||i(e,o)},destroy:()=>{a.removeEventListener("mousemove",c),a.removeEventListener("mousedown",l),a.removeEventListener("keydown",u),o.remove()}}},ti="MILKDOWN_SLASH",ei=(t,e,n,r)=>{const i=Wr(e);return new y.Sy({key:new y.H$(ti),props:$r(i,t),view:e=>Qr(i,e,t,n,r)})},ni=Xt(((t,e)=>{var n,r;const i=null!=(n=null==e?void 0:e.config)?n:Pr,a=null!=(r=null==e?void 0:e.calcPosition)?r:Jr;return{prosePlugins:(e,n)=>{const r=i(n);return[ei(t,r,"slash-dropdown",a)]}}})),ri=bt.create([ni()]),ii=(t,e)=>{if(!e)return!1;const{from:n,to:r}=t.selection;return t.doc.rangeHasMark(n,n===r?r+1:r,e)},ai=t=>{const{selection:e}=t;return e instanceof y.Bs&&!!t.doc.textBetween(e.from,e.to)},oi=t=>Boolean((0,j.Kk)((t=>!!t.type.spec.code))(t.selection)),si=(t,e)=>!ai(t)||oi(t)||ii(t,e),ci=(t,e,n,r)=>({icon:t,onClick:e,isHidden:()=>t=>si(t.state,r),isActive:()=>t=>ii(t.state,n),canAddToDOM:()=>t=>!!n&&!!t.state.schema.marks[n.name]}),li=t=>{const e=t.get(a.le).marks;return[ci("bold","ToggleBold",e.strong),ci("italic","ToggleItalic",e.em),ci("strikeThrough","ToggleStrikeThrough",e.strike_through),ci("code","ToggleInlineCode",e.code_inline),ci("link","ToggleLink",e.link)]},ui=(t,e=li)=>{const n=({icon:e,onClick:n,isHidden:r,isActive:i,canAddToDOM:s})=>{var c;return{$:"function"==typeof e?e(t):null==(c=t.get(o.Xc).get(o.kS,e))?void 0:c.dom,command:"string"==typeof n?()=>t.get(a.Xo).call(n):n(t),disable:r(t),active:i(t),enable:s(t)}};return e(t).map(n)},di=(t,e,n)=>{t.classList.remove("hide"),(0,j.wI)(e,t,((e,r,i,a)=>{const o=t.parentElement;if(!o)throw(0,P.$q)();const s=r.left-e.left;let c=e.left-a.left-(i.width-s)/2,l=e.top-a.top-i.height-14+o.scrollTop;return c<0&&(c=0),(e.top-a.top<i.height||n&&a.bottom-e.bottom>i.height)&&(l=e.bottom-a.top+14+o.scrollTop),[l,c]}))},hi=(t,{css:e})=>{const n=(e,n=1)=>t.get(o.tP,[e,n]),r=t.get(o.dz,"lineWidth");return e`
        display: inline-flex;
        cursor: pointer;
        justify-content: space-evenly;
        position: absolute;
        border-radius: ${t.get(o.dz,"radius")};
        z-index: 2;

        ${t.get(o.UT,void 0)}
        ${t.get(o.I9,void 0)}

        overflow: hidden;
        background: ${n("surface")};

        .icon {
            position: relative;
            color: ${n("solid",.87)};

            width: 48px;
            line-height: 48px;
            text-align: center;
            transition: all 0.4s ease-in-out;
            &:hover {
                background-color: ${n("secondary",.12)};
            }
            &.active {
                color: ${n("primary")};
            }
            &:not(:last-child)::after {
                content: '';
                position: absolute;
                top: 0;
                right: calc(-0.5 * ${r});
                width: ${r};
                bottom: 0;
                background: ${n("line")};
            }
        }
        &.hide,
        .hide {
            display: none;
        }
    `},fi=(t,e,n)=>{const r=document.createElement("div");return e.themeManager.onFlush((()=>{const t=e.getStyle((t=>hi(e.themeManager,t)))||"";t&&r.classList.add(t)})),r.classList.add(e.getClassName({},n)),{dom:r,render:e=>{var n;t.filter((t=>t.enable(e)&&null!=t.$)).forEach((({$:t})=>r.appendChild(t))),null==(n=e.dom.parentNode)||n.appendChild(r)}}},pi=(t,e)=>Object.values(t).filter((t=>t.enable(e)&&null!=t.$)).every((({$:t})=>t.classList.contains("hide"))),gi=(t,e)=>(t.filter((t=>t.enable(e)&&null!=t.$)).forEach((t=>{var n;(null==(n=t.disable)?void 0:n.call(t,e))?t.$.classList.add("hide"):(t.$.classList.remove("hide"),t.active(e)?t.$.classList.add("active"):t.$.classList.remove("active"))})),pi(t,e)),yi=(t,e,n,r)=>{const{dom:i,render:a}=fi(t,e,r),o=e=>{const n=t.find((({$:t})=>e.target instanceof Element&&t.contains(e.target)));!n||(e.stopPropagation(),e.preventDefault(),n.command())},s=()=>{i.classList.add("hide")};return i.addEventListener("mousedown",o),{destroy:()=>{i.removeEventListener("mousedown",o),i.remove()},hide:s,update:e=>{gi(t,e)?s():di(i,e,n)},render:a}},mi=(t,e,n,r)=>{let i=yi(t,e,n,r),a=!1;const o=()=>{i.hide()},s=(t,e)=>{const{state:n}=t;t.editable&&!a?(null==e?void 0:e.doc.eq(n.doc))&&e.selection.eq(n.selection)||i.update(t):o()};return{recreate:a=>{i=yi(t,e,n,r),i.render(a),s(a)},update:s,destroy:()=>{i.destroy()},render:t=>{i.render(t),s(t)},setHide:t=>{a=t}}},bi=new y.H$("MILKDOWN_TOOLTIP"),vi=Xt(((t,e)=>({id:"tooltip",prosePlugins:(n,r)=>{var i;const a=mi(ui(r,null==e?void 0:e.items),t,null!=(i=null==e?void 0:e.bottom)&&i,"tooltip");return[new y.Sy({key:bi,props:{handleClick:t=>(a.setHide(!1),a.update(t),!1),handleDOMEvents:{mousedown:()=>(a.setHide(!1),!1)}},view:t=>(a.recreate(t),{update:a.update,destroy:a.destroy})})]}}))),_i=bt.create([vi()]),xi=t=>{if(!t)return!1;if(Array.isArray(t))return!(t.length>1)&&xi(t[0]);const e=t.content;return e?xi(e):"text"===t.type},ki=new y.H$("MILKDOWN_CLIPBOARD"),wi=Xt((()=>({prosePlugins:(t,e)=>{const n=e.get(a.le);return e.update(a.i8,(t=>{var e;return{...t,editable:null!=(e=t.editable)?e:()=>!0}})),[new y.Sy({key:ki,props:{handlePaste:(t,r,i)=>{var o,s;const c=e.get(a._z),l=e.get(a.Ck),u=null==(s=(o=t.props).editable)?void 0:s.call(o,t.state),{clipboardData:d}=r;if(!u||!d||t.state.selection.$from.node().type.spec.code)return!1;let h=d.getData("text/plain");const f=d.getData("vscode-editor-data");if(f){const e=JSON.parse(f),r=null==e?void 0:e.mode;if(h&&r){const{tr:e}=t.state,i=(0,j.Kl)("fence",n);return e.replaceSelectionWith(i.create({language:r})).setSelection(y.Bs.near(e.doc.resolve(Math.max(0,e.selection.from-2)))).insertText(h.replace(/\r\n?/g,"\n")),t.dispatch(e),!0}}const p=d.getData("text/html");if(0===p.length&&0===h.length)return!1;if(p.length>0||0===h.length){const t=document.createElement("template");t.innerHTML=p;const e=te.aw.fromSchema(n).parse(t.content);t.remove(),h=l(e)}const g=c(h);return!(!g||"string"==typeof g)&&(t.dispatch(t.state.tr.replaceSelection(new te.p2(g.content,i.openStart,i.openEnd))),!0)},clipboardTextSerializer:t=>{const r=e.get(a.Ck);if(xi(t.content.toJSON()))return t.content.textBetween(0,t.content.size,"\n\n");const i=n.topNodeType.createAndFill(void 0,t.content);return i?r(i):""}}})]}}))),Di=wi();function Ei(t={}){return new y.Sy({view(e){return new Ci(e,t)}})}class Ci{constructor(t,e){this.editorView=t,this.cursorPos=null,this.element=null,this.timeout=-1,this.width=e.width||1,this.color=e.color||"black",this.class=e.class,this.handlers=["dragover","dragend","drop","dragleave"].map((e=>{let n=t=>{this[e](t)};return t.dom.addEventListener(e,n),{name:e,handler:n}}))}destroy(){this.handlers.forEach((({name:t,handler:e})=>this.editorView.dom.removeEventListener(t,e)))}update(t,e){null!=this.cursorPos&&e.doc!=t.state.doc&&(this.cursorPos>t.state.doc.content.size?this.setCursor(null):this.updateOverlay())}setCursor(t){t!=this.cursorPos&&(this.cursorPos=t,null==t?(this.element.parentNode.removeChild(this.element),this.element=null):this.updateOverlay())}updateOverlay(){let t,e=this.editorView.state.doc.resolve(this.cursorPos);if(!e.parent.inlineContent){let n=e.nodeBefore,r=e.nodeAfter;if(n||r){let e=this.editorView.nodeDOM(this.cursorPos-(n?n.nodeSize:0)).getBoundingClientRect(),i=n?e.bottom:e.top;n&&r&&(i=(i+this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top)/2),t={left:e.left,right:e.right,top:i-this.width/2,bottom:i+this.width/2}}}if(!t){let e=this.editorView.coordsAtPos(this.cursorPos);t={left:e.left-this.width/2,right:e.left+this.width/2,top:e.top,bottom:e.bottom}}let n,r,i=this.editorView.dom.offsetParent;if(this.element||(this.element=i.appendChild(document.createElement("div")),this.class&&(this.element.className=this.class),this.element.style.cssText="position: absolute; z-index: 50; pointer-events: none; background-color: "+this.color),!i||i==document.body&&"static"==getComputedStyle(i).position)n=-pageXOffset,r=-pageYOffset;else{let t=i.getBoundingClientRect();n=t.left-i.scrollLeft,r=t.top-i.scrollTop}this.element.style.left=t.left-n+"px",this.element.style.top=t.top-r+"px",this.element.style.width=t.right-t.left+"px",this.element.style.height=t.bottom-t.top+"px"}scheduleRemoval(t){clearTimeout(this.timeout),this.timeout=setTimeout((()=>this.setCursor(null)),t)}dragover(t){if(!this.editorView.editable)return;let e=this.editorView.posAtCoords({left:t.clientX,top:t.clientY}),n=e&&e.inside>=0&&this.editorView.state.doc.nodeAt(e.inside),r=n&&n.type.spec.disableDropCursor,i="function"==typeof r?r(this.editorView,e,t):r;if(e&&!i){let t=e.pos;if(this.editorView.dragging&&this.editorView.dragging.slice&&(t=(0,g.nj)(this.editorView.state.doc,t,this.editorView.dragging.slice),null==t))return this.setCursor(null);this.setCursor(t),this.scheduleRemoval(5e3)}}dragend(){this.scheduleRemoval(20)}drop(){this.scheduleRemoval(20)}dragleave(t){t.target!=this.editorView.dom&&this.editorView.dom.contains(t.relatedTarget)||this.setCursor(null)}}class Ti extends y.Y1{constructor(t){super(t,t)}map(t,e){let n=t.resolve(e.map(this.head));return Ti.valid(n)?new Ti(n):y.Y1.near(n)}content(){return te.p2.empty}eq(t){return t instanceof Ti&&t.head==this.head}toJSON(){return{type:"gapcursor",pos:this.head}}static fromJSON(t,e){if("number"!=typeof e.pos)throw new RangeError("Invalid input for GapCursor.fromJSON");return new Ti(t.resolve(e.pos))}getBookmark(){return new Si(this.anchor)}static valid(t){let e=t.parent;if(e.isTextblock||!Ai(t)||!Fi(t))return!1;let n=e.type.spec.allowGapCursor;if(null!=n)return n;let r=e.contentMatchAt(t.index()).defaultType;return r&&r.isTextblock}static findGapCursorFrom(t,e,n=!1){t:for(;;){if(!n&&Ti.valid(t))return t;let r=t.pos,i=null;for(let n=t.depth;;n--){let a=t.node(n);if(e>0?t.indexAfter(n)<a.childCount:t.index(n)>0){i=a.child(e>0?t.indexAfter(n):t.index(n)-1);break}if(0==n)return null;r+=e;let o=t.doc.resolve(r);if(Ti.valid(o))return o}for(;;){let a=e>0?i.firstChild:i.lastChild;if(!a){if(i.isAtom&&!i.isText&&!y.qv.isSelectable(i)){t=t.doc.resolve(r+i.nodeSize*e),n=!1;continue t}break}i=a,r+=e;let o=t.doc.resolve(r);if(Ti.valid(o))return o}return null}}}Ti.prototype.visible=!1,Ti.findFrom=Ti.findGapCursorFrom,y.Y1.jsonID("gapcursor",Ti);class Si{constructor(t){this.pos=t}map(t){return new Si(t.map(this.pos))}resolve(t){let e=t.resolve(this.pos);return Ti.valid(e)?new Ti(e):y.Y1.near(e)}}function Ai(t){for(let e=t.depth;e>=0;e--){let n=t.index(e),r=t.node(e);if(0!=n)for(let t=r.child(n-1);;t=t.lastChild){if(0==t.childCount&&!t.inlineContent||t.isAtom||t.type.spec.isolating)return!0;if(t.inlineContent)return!1}else if(r.type.spec.isolating)return!0}return!0}function Fi(t){for(let e=t.depth;e>=0;e--){let n=t.indexAfter(e),r=t.node(e);if(n!=r.childCount)for(let t=r.child(n);;t=t.firstChild){if(0==t.childCount&&!t.inlineContent||t.isAtom||t.type.spec.isolating)return!0;if(t.inlineContent)return!1}else if(r.type.spec.isolating)return!0}return!0}function Mi(){return new y.Sy({props:{decorations:Ii,createSelectionBetween(t,e,n){return e.pos==n.pos&&Ti.valid(n)?new Ti(n):null},handleClick:Oi,handleKeyDown:Bi,handleDOMEvents:{beforeinput:Li}}})}const Bi=(0,I.$)({ArrowLeft:Ni("horiz",-1),ArrowRight:Ni("horiz",1),ArrowUp:Ni("vert",-1),ArrowDown:Ni("vert",1)});function Ni(t,e){const n="vert"==t?e>0?"down":"up":e>0?"right":"left";return function(t,r,i){let a=t.selection,o=e>0?a.$to:a.$from,s=a.empty;if(a instanceof y.Bs){if(!i.endOfTextblock(n)||0==o.depth)return!1;s=!1,o=t.doc.resolve(e>0?o.after():o.before())}let c=Ti.findGapCursorFrom(o,e,s);return!!c&&(r&&r(t.tr.setSelection(new Ti(c))),!0)}}function Oi(t,e,n){if(!t||!t.editable)return!1;let r=t.state.doc.resolve(e);if(!Ti.valid(r))return!1;let i=t.posAtCoords({left:n.clientX,top:n.clientY});return!(i&&i.inside>-1&&y.qv.isSelectable(t.state.doc.nodeAt(i.inside)))&&(t.dispatch(t.state.tr.setSelection(new Ti(r))),!0)}function Li(t,e){if("insertCompositionText"!=e.inputType||!(t.state.selection instanceof Ti))return!1;let{$from:n}=t.state.selection,r=n.parent.contentMatchAt(n.index()).findWrapping(t.state.schema.nodes.text);if(!r)return!1;let i=te.HY.empty;for(let o=r.length-1;o>=0;o--)i=te.HY.from(r[o].createAndFill(null,i));let a=t.state.tr.replace(n.pos,n.pos,new te.p2(i,0,0));return a.setSelection(y.Bs.near(a.doc.resolve(n.pos+1))),t.dispatch(a),!1}function Ii(t){if(!(t.selection instanceof Ti))return null;let e=document.createElement("div");return e.className="ProseMirror-gapcursor",R.EH.create(t.doc,[R.p.widget(t.selection.head,e,{key:"gapcursor"})])}const Ri=Xt((({getStyle:t,themeManager:e})=>(e.onFlush((()=>{t((({injectGlobal:t})=>{t`
                /* copy from https://github.com/ProseMirror/prosemirror-gapcursor/blob/master/style/gapcursor.css */
                .ProseMirror-gapcursor {
                    display: none;
                    pointer-events: none;
                    position: absolute;
                    margin: 0 !important;
                }

                .ProseMirror-gapcursor:after {
                    content: '';
                    display: block;
                    position: absolute;
                    top: -2px;
                    width: 20px;
                    border-top: ${e.get(o.dz,"lineWidth")} solid
                        ${e.get(o.tP,["secondary"])};
                    animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
                }

                @keyframes ProseMirror-cursor-blink {
                    to {
                        visibility: hidden;
                    }
                }

                .ProseMirror-focused .ProseMirror-gapcursor {
                    display: block;
                }
            `}))})),{prosePlugins:(t,e)=>{var n,r;const i=e.get(o.Xc),a=i.get(o.dz,"lineWidth"),s=i.get(o.tP,["secondary"]),c=Number(null!=(r=null==(n=null==a?void 0:a.match(/\d+/))?void 0:n[0])?r:1);return[Mi(),Ei({color:s,width:c})]}})))(),Pi=(0,a.uW)("Undo"),ji=(0,a.uW)("Redo"),zi=Xt((()=>({commands:()=>[(0,a.ml)(Pi,(()=>O)),(0,a.ml)(ji,(()=>L))],prosePlugins:()=>[N(),(0,I.h)({"Mod-z":O,"Mod-y":L,"Shift-Mod-z":L})]}))),$i=bt.create([zi()]);var Yi=n(5669);const Ui=[{name:"angry",emoji:"😠",tags:["mad","annoyed"],description:"angry face",emoticons:[">:(",">:[",">:-(",">:-[",">=(",">=[",">=-(",">=-["]},{name:"blush",emoji:"😊",tags:["proud"],description:"smiling face with smiling eyes",emoticons:[':")',':"]',':"D',':-")',':-"]',':-"D','=")','="]','="D','=-")','=-"]','=-"D']},{name:"broken_heart",emoji:"💔",tags:[],description:"broken heart",emoticons:["<\\3","</3"]},{name:"confused",emoji:"😕",tags:[],description:"confused face",emoticons:[":/",":\\",":-/",":-\\","=/","=\\","=-/","=-\\"]},{name:"cry",emoji:"😢",tags:["sad","tear"],description:"crying face",emoticons:[":,(",":,[",":,|",":,-(",":,-[",":,-|",":'(",":'[",":'|",":'-(",":'-[",":'-|","=,(","=,[","=,|","=,-(","=,-[","=,-|","='(","='[","='|","='-(","='-[","='-|"]},{name:"frowning",emoji:"😦",tags:[],description:"frowning face with open mouth",emoticons:[":(",":[",":-(",":-[","=(","=[","=-(","=-["]},{name:"heart",emoji:"❤️",tags:["love"],description:"red heart",emoticons:["<3"]},{name:"imp",emoji:"👿",tags:["angry","devil","evil","horns"],description:"angry face with horns",emoticons:["]:(","]:[","]:-(","]:-[","]=(","]=[","]=-(","]=-["]},{name:"innocent",emoji:"😇",tags:["angel"],description:"smiling face with halo",emoticons:["o:)","o:]","o:D","o:-)","o:-]","o:-D","o=)","o=]","o=D","o=-)","o=-]","o=-D","O:)","O:]","O:D","O:-)","O:-]","O:-D","O=)","O=]","O=D","O=-)","O=-]","O=-D","0:)","0:]","0:D","0:-)","0:-]","0:-D","0=)","0=]","0=D","0=-)","0=-]","0=-D"]},{name:"joy",emoji:"😂",tags:["tears"],description:"face with tears of joy",emoticons:[":,)",":,]",":,D",":,-)",":,-]",":,-D",":')",":']",":'D",":'-)",":'-]",":'-D","=,)","=,]","=,D","=,-)","=,-]","=,-D","=')","=']","='D","='-)","='-]","='-D"]},{name:"kissing",emoji:"😗",tags:[],description:"kissing face",emoticons:[":*",":-*","=*","=-*"]},{name:"laughing",emoji:"😆",tags:["happy","haha"],description:"grinning squinting face",emoticons:["x)","x]","xD","x-)","x-]","x-D","X)","X]","X-)","X-]","X-D"]},{name:"man",emoji:"👨",tags:["mustache","father","dad"],description:"man",emoticons:[":3",":-3","=3","=-3",";3",";-3","x3","x-3","X3","X-3"]},{name:"neutral_face",emoji:"😐",tags:["meh"],description:"neutral face",emoticons:[":|",":-|","=|","=-|"]},{name:"no_mouth",emoji:"😶",tags:["mute","silence"],description:"face without mouth",emoticons:[":-"]},{name:"open_mouth",emoji:"😮",tags:["surprise","impressed","wow"],description:"face with open mouth",emoticons:[":o",":O",":0",":-o",":-O",":-0","=o","=O","=0","=-o","=-O","=-0"]},{name:"rage",emoji:"😡",tags:["angry"],description:"pouting face",emoticons:[":@",":-@","=@","=-@"]},{name:"smile",emoji:"😄",tags:["happy","joy","laugh","pleased"],description:"grinning face with smiling eyes",emoticons:[":D",":-D","=D","=-D"]},{name:"smiley",emoji:"😃",tags:["happy","joy","haha"],description:"grinning face with big eyes",emoticons:[":)",":]",":-)",":-]","=)","=]","=-)","=-]"]},{name:"smiling_imp",emoji:"😈",tags:["devil","evil","horns"],description:"smiling face with horns",emoticons:["]:)","]:]","]:D","]:-)","]:-]","]:-D","]=)","]=]","]=D","]=-)","]=-]","]=-D"]},{name:"sob",emoji:"😭",tags:["sad","cry","bawling"],description:"loudly crying face",emoticons:[":,'(",":,'[",":,'-(",":,'-[",":',(",":',[",":',-(",":',-[","=,'(","=,'[","=,'-(","=,'-[","=',(","=',[","=',-(","=',-["]},{name:"stuck_out_tongue",emoji:"😛",tags:[],description:"face with tongue",emoticons:[":p",":P",":d",":-p",":-P",":-d","=p","=P","=d","=-p","=-P","=-d"]},{name:"stuck_out_tongue_closed_eyes",emoji:"😝",tags:["prank"],description:"squinting face with tongue",emoticons:["xP","x-p","x-P","x-d","Xp","Xd","X-p","X-P","X-d"]},{name:"stuck_out_tongue_winking_eye",emoji:"😜",tags:["prank","silly"],description:"winking face with tongue",emoticons:[";p",";P",";d",";-p",";-P",";-d"]},{name:"sunglasses",emoji:"😎",tags:["cool"],description:"smiling face with sunglasses",emoticons:["8)","8]","8D","8-)","8-]","8-D","B)","B]","B-)","B-]","B-D"]},{name:"sweat",emoji:"😓",tags:[],description:"downcast face with sweat",emoticons:[",:(",",:[",",:-(",",:-[",",=(",",=[",",=-(",",=-[","':(","':[","':-(","':-[","'=(","'=[","'=-(","'=-["]},{name:"sweat_smile",emoji:"😅",tags:["hot"],description:"grinning face with sweat",emoticons:[",:)",",:]",",:D",",:-)",",:-]",",:-D",",=)",",=]",",=D",",=-)",",=-]",",=-D","':)","':]","':D","':-)","':-]","':-D","'=)","'=]","'=D","'=-)","'=-]","'=-D"]},{name:"unamused",emoji:"😒",tags:["meh"],description:"unamused face",emoticons:[":$",":s",":z",":S",":Z",":-$",":-s",":-z",":-S",":-Z","=$","=s","=z","=S","=Z","=-$","=-s","=-z","=-S","=-Z"]},{name:"wink",emoji:"😉",tags:["flirt"],description:"winking face",emoticons:[";)",";]",";D",";-)",";-]",";-D"]}],Wi=/:\+1:|:-1:|:[\w-]+:/g,qi=/[$@|*'",;.=:\-)([\]\\/<>038BOopPsSdDxXzZ]{2,5}/g,Hi=/_/g,Vi={padSpaceAfter:!1,emoticon:!1};function Gi(t){const e=Object.assign({},Vi,t),n=!!e.padSpaceAfter,r=!!e.emoticon;function i(t){const e=Ui.find((e=>e.emoticons.includes(t))),r=Ui.find((e=>e.emoticons.includes(t.slice(0,-1)))),i=r?t.slice(-1):"",a=n?" ":"";let o=e?e.emoji+a:r&&r.emoji+a+i;return o||t}function a(t){let e=Yi.get(t);if(t.endsWith("_man:")&&e===t){const n="man-"+t.slice(1,-5).replace(Hi,"-"),r=Yi.get(n);r!==n&&(e=r)}else if(t.endsWith("_woman:")&&e===t){const n="woman-"+t.slice(1,-7).replace(Hi,"-"),r=Yi.get(n);r!==n&&(e=r)}return n&&e!==t?e+" ":e}function o(t){(0,oe.Vn)(t,"text",(function(t){t.value=t.value.replace(Wi,a),r&&(t.value=t.value.replace(qi,i))}))}return o}
/*! Copyright Twitter Inc. and other contributors. Licensed under MIT */
var Xi=function(){var t={base:"https://twemoji.maxcdn.com/v/14.0.2/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:b,toCodePoint:k},onerror:function(){this.parentNode&&this.parentNode.replaceChild(c(this.alt,!1),this)},parse:v,replace:_,test:x},e={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},n=/(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,r=/\uFE0F/g,i=String.fromCharCode(8205),a=/[&<>'"]/g,o=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,s=String.fromCharCode;return t;function c(t,e){return document.createTextNode(e?t.replace(r,""):t)}function l(t){return t.replace(a,g)}function u(t,e){return"".concat(e.base,e.size,"/",t,e.ext)}function d(t,e){var n,r,i=t.childNodes,a=i.length;while(a--)n=i[a],r=n.nodeType,3===r?e.push(n):1!==r||"ownerSVGElement"in n||o.test(n.nodeName.toLowerCase())||d(n,e);return e}function h(t){return k(t.indexOf(i)<0?t.replace(r,""):t)}function f(t,e){var r,i,a,o,s,l,u,f,p,g,y,m,b,v=d(t,[]),_=v.length;while(_--){a=!1,o=document.createDocumentFragment(),s=v[_],l=s.nodeValue,f=0;while(u=n.exec(l)){if(p=u.index,p!==f&&o.appendChild(c(l.slice(f,p),!0)),y=u[0],m=h(y),f=p+y.length,b=e.callback(m,e),m&&b){for(i in g=new Image,g.onerror=e.onerror,g.setAttribute("draggable","false"),r=e.attributes(y,m),r)r.hasOwnProperty(i)&&0!==i.indexOf("on")&&!g.hasAttribute(i)&&g.setAttribute(i,r[i]);g.className=e.className,g.alt=y,g.src=b,a=!0,o.appendChild(g)}g||o.appendChild(c(y,!1)),g=null}a&&(f<l.length&&o.appendChild(c(l.slice(f),!0)),s.parentNode.replaceChild(o,s))}return t}function p(t,e){return _(t,(function(t){var n,r,i=t,a=h(t),o=e.callback(a,e);if(a&&o){for(r in i="<img ".concat('class="',e.className,'" ','draggable="false" ','alt="',t,'"',' src="',o,'"'),n=e.attributes(t,a),n)n.hasOwnProperty(r)&&0!==r.indexOf("on")&&-1===i.indexOf(" "+r+"=")&&(i=i.concat(" ",r,'="',l(n[r]),'"'));i=i.concat("/>")}return i}))}function g(t){return e[t]}function y(){return null}function m(t){return"number"===typeof t?t+"x"+t:t}function b(t){var e="string"===typeof t?parseInt(t,16):t;return e<65536?s(e):(e-=65536,s(55296+(e>>10),56320+(1023&e)))}function v(e,n){return n&&"function"!==typeof n||(n={callback:n}),("string"===typeof e?p:f)(e,{callback:n.callback||u,attributes:"function"===typeof n.attributes?n.attributes:y,base:"string"===typeof n.base?n.base:t.base,ext:n.ext||t.ext,size:n.folder||m(n.size||t.size),className:n.className||t.className,onerror:n.onerror||t.onerror})}function _(t,e){return String(t).replace(n,e)}function x(t){n.lastIndex=0;var e=n.test(t);return n.lastIndex=0,e}function k(t,e){var n=[],r=0,i=0,a=0;while(a<t.length)r=t.charCodeAt(a++),i?(n.push((65536+(i-55296<<10)+(r-56320)).toString(16)),i=0):55296<=r&&r<=56319?i=r:n.push(r.toString(16));return n.join(e||"-")}}(),Ki=Xi,Zi=n(3121);const Ji=/:\+1|:-1|:[\w-]+/,Qi=/:\+1:|:-1:|:[\w-]+:/,ta=/(:([^:\s]+):)$/,ea=t=>({title:t}),na=t=>Ki.parse(t,{attributes:ea}),ra=(t,e,n,r,i,a)=>{if(t.composing)return!1;const{state:o}=t,s=o.doc.resolve(e);if(s.parent.type.spec.code)return!1;const c=(s.parent.textBetween(Math.max(0,s.parentOffset-10),s.parentOffset,void 0,"￼")+r).toLowerCase();if(Qi.test(c))return!1;const l=Ji.exec(c);if(l&&l[0]&&c.endsWith(l[0])){const t=l[0];return i(e-(t.length-r.length),n),a(t),!0}return!1},ia=(t,e,n,r,i)=>{for(;e.firstChild;)e.firstChild.remove();t.forEach((({emoji:t,key:a},o)=>{const s=document.createElement("div");s.className="milkdown-emoji-filter_item";const c=document.createElement("span");c.innerHTML=na(t),c.className="milkdown-emoji-filter_item-emoji";const l=document.createElement("span");l.textContent=":"+a+":",l.className="milkdown-emoji-filter_item-key",s.appendChild(c),s.appendChild(l),e.appendChild(s),0===o&&(s.classList.add("active"),i(s));const u=t=>{n&&n.classList.remove("active");const{target:e}=t;e instanceof HTMLElement&&(e.classList.add("active"),i(e))},d=t=>{const{target:e}=t;e instanceof HTMLElement&&e.classList.remove("active")},h=t=>{t.preventDefault(),r()};s.addEventListener("mouseenter",u),s.addEventListener("mouseleave",d),s.addEventListener("mousedown",h)}))},aa=(t,{css:e,cx:n})=>{const r=t.get(o.UT,void 0),i=t.get(o.I9,void 0),a=t.get(o.dz,"radius"),s=t.get(o.Az,"typography"),c=(e,n=1)=>t.get(o.tP,[e,n]),l=e`
        position: absolute;
        &.hide {
            display: none;
        }

        border-radius: ${a};
        background: ${c("surface")};

        .milkdown-emoji-filter_item {
            display: flex;
            gap: 8px;
            height: 36px;
            padding: 0 14px;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
            line-height: 2;
            font-family: ${s};
            font-size: 14px;
            &.active {
                background: ${c("secondary",.12)};
                color: ${c("primary")};
            }
        }

        .emoji {
            height: 14px;
            width: 14px;
            margin: 0 1px 0 1.5px;
            vertical-align: -1.5px;
        }
    `;return n(r,i,l)},oa=new y.H$("MILKDOWN_EMOJI_FILTER"),sa=(t,e)=>{let n=!1,r=0,i="",a=null;const o=()=>{n=!1,r=0,i="",a=null};return new y.Sy({key:oa,props:{handleKeyDown(t,e){return["Delete","Backspace"].includes(e.key)?(i=i.slice(0,-1),i.length<=1&&o(),!1):!(!n||!["ArrowUp","ArrowDown","Enter"].includes(e.key))},handleTextInput(t,e,a,s){return n=ra(t,e,a,s,(t=>{r=t}),(t=>{i=t})),n||o(),!1}},view:s=>{const{parentNode:c}=s.dom;if(!c)throw(0,P.$q)();const l=document.createElement("div");l.classList.add("milkdown-emoji-filter","hide"),t.themeManager.onFlush((()=>{const e=l.className.split(" ").filter((t=>["hide","milkdown-emoji-filter"].includes(t)));l.className=e.join(" ");const n=t.getStyle((e=>aa(t.themeManager,e)));n&&n.split(" ").forEach((t=>l.classList.add(t)))}));const u=()=>{var t;if(!a)return;const{tr:e}=s.state,n=s.state.schema.node("emoji",{html:null==(t=a.firstElementChild)?void 0:t.innerHTML});s.dispatch(e.delete(r,r+i.length).insert(r,n)),o(),l.classList.add("hide")};c.appendChild(l);const d=t=>{if(!n||!(t instanceof KeyboardEvent))return;const{key:e}=t;if("Enter"!==e){if(["ArrowDown","ArrowUp"].includes(e)){const t="ArrowDown"===e?(null==a?void 0:a.nextElementSibling)||l.firstElementChild:(null==a?void 0:a.previousElementSibling)||l.lastElementChild;if(a&&a.classList.remove("active"),!t)return;return t.classList.add("active"),void(a=t)}}else u()},h=t=>{!n||(t.stopPropagation(),o(),l.classList.add("hide"))};return c.addEventListener("keydown",d),c.addEventListener("mousedown",h),{update:t=>{const{selection:s}=t.state;if(s.from-s.to!==0||!n)return o(),l.classList.add("hide"),null;const c=Yi.search(i).slice(0,e),{node:d}=t.domAtPos(r);return 0!==c.length&&d?(l.classList.remove("hide"),ia(c,l,a,u,(t=>{a=t})),(0,j.q7)(t,l,((e,n,i)=>{const a=l.parentElement;if(!a)throw(0,P.$q)();const o=t.coordsAtPos(r);let s=o.left-i.left,c=e.bottom-i.top+14+a.scrollTop;return s<0&&(s=0),window.innerHeight-o.bottom<n.height&&(c=e.top-i.top-n.height-14+a.scrollTop),[c,s]})),null):(l.classList.add("hide"),null)},destroy:()=>{c.removeEventListener("keydown",d),c.removeEventListener("mousedown",h),l.remove()}}}})},ca=Zi(),la=t=>!!t.children,ua=t=>!!t.value;function da(t,e){return n(t,0,null)[0];function n(t,r,i){if(la(t)){const e=[];for(let r=0,i=t.children.length;r<i;r++){const i=t.children[r];if(i){const a=n(i,r,t);if(a)for(let t=0,n=a.length;t<n;t++){const n=a[t];n&&e.push(n)}}}t.children=e}return e(t,r,i)}}const ha=()=>{function t(t){da(t,(t=>{if(!ua(t))return[t];const e=t.value,n=[];let r,i=e;for(;r=ca.exec(i);){const{index:e}=r,a=r[0];a&&(e>0&&n.push({...t,value:i.slice(0,e)}),n.push({...t,value:na(a),type:"emoji"}),i=i.slice(e+a.length))}return i.length&&n.push({...t,value:i}),n}))}return t},fa=Gt(((t,e)=>{const n=()=>t.getStyle((({css:t})=>t`
                .emoji {
                    height: 1em;
                    width: 1em;
                    margin: 0 1px 0 1.5px;
                    vertical-align: -1.5px;
                }
//# sourceMappingURL=editor.33669089.js.map