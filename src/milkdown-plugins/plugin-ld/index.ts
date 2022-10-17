import { Editor, defaultValueCtx, rootCtx, RemarkPlugin } from "@milkdown/core";
import { AtomList, createNode } from "@milkdown/utils";
import { commonmark } from "@milkdown/preset-commonmark";
import { nord } from "@milkdown/theme-nord";
import { listener, listenerCtx } from "@milkdown/plugin-listener";
import { InputRule } from "prosemirror-inputrules";

import directive from "remark-directive";

import "./style.css";

const id = "ld";
export const ld = createNode(() => ({
  id,
  schema: () => ({
    attrs: {
      src: {default: null},
      subject: { default: null },
      predicate: { default: null },
      object: { default: null}
    },
    group: "inline",
    inline: true,
    marks: "",
    atom: true,
    parseDOM: [
      {
        tag: "iframe",
        getAttrs: (dom) => {
          if (!(dom instanceof HTMLElement)) {
            throw new Error();
          }
          return {
            src: dom.getAttribute("src"),
            subject: dom.getAttribute("subject"),
            predicate: dom.getAttribute("predicate"),
            object: dom.getAttribute("object")
          };
        }
      }
    ],
    toDOM: (node) => ["iframe", { ...node.attrs, class: "iframe" }, 0],
    parseMarkdown: {
      match: (node) => {
        return node.type === "textDirective" && node.name === "iframe";
      },
      runner: (state, node, type) => {
        state.addNode(type, {
          src: (node.attributes as { src: string }).src,
          subject: (node.attributes as { subject: string }).subject,
          predicate: (node.attributes as { predicate: string }).predicate,
          object: (node.attributes as { object: string }).object
        });
      }
    },
    toMarkdown: {
      match: (node) => node.type.name === id,
      runner: (state, node) => {
        state.addNode("textDirective", undefined, undefined, {
          name: "iframe",
          attributes: {
            src: node.attrs.src,
            subject: node.attrs.subject,
            predicate: node.attrs.predicate,
            object: node.attrs.object
          }
        });
      }
    }
  }),
  inputRules: (nodeType) => [
    new InputRule(
      // /:ld\{src="(?<src>[^"]+)?"?\}/,
      /:ld\{(?<subject>[^,]+),(?<predicate>[^,]+),(?<object>[^,]+),(?<src>[^,]+)\}/,

      (state, match, start, end) => {
        console.log(state, match, start, end)
        const [okay, subject = "", predicate = "", object = "", src = ""] = match;
        const { tr } = state;
        if (okay) {
          tr.replaceWith(start, end, nodeType.create({ subject: subject, predicate: predicate, object: object, src: src }));
        }
        console.log("TR",tr)
        alert(tr)
        return tr;
      }
    )
  ],
  remarkPlugins: () => [directive as RemarkPlugin]
}));
