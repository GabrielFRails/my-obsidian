/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var o=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var x=(e,a,t)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;var f=(e,a)=>{for(var t in a)o(e,t,{get:a[t],enumerable:!0})},m=(e,a,t,s)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of v(a))!u.call(e,n)&&n!==t&&o(e,n,{get:()=>a[n],enumerable:!(s=p(a,n))||s.enumerable});return e};var C=e=>m(o({},"__esModule",{value:!0}),e);var d=(e,a,t)=>(x(e,typeof a!="symbol"?a+"":a,t),t);var T={};f(T,{default:()=>l});module.exports=C(T);var i=require("obsidian");var b={enableDefaultPasteConversion:!0},l=class extends i.Plugin{constructor(){super(...arguments);d(this,"settings")}async loadSettings(){this.settings=Object.assign({},b,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}async onload(){await this.loadSettings(),this.addSettingTab(new h(this.app,this)),this.registerEvent(this.app.workspace.on("editor-paste",async(t,s)=>{var g;let n=((g=t.clipboardData)==null?void 0:g.getData("text"))||"",c=this.settings.enableDefaultPasteConversion?r(n):n;n&&(t.preventDefault(),s.replaceSelection(c))})),this.addCommand({id:"paste-katex-to-mathjax",name:"Paste with conversion",editorCallback:t=>{navigator.clipboard.readText().then(s=>{let n=r(s);t.replaceSelection(n)})}}),this.addCommand({id:"convert-editor-text-from",name:"Convert current text file",editorCallback:t=>{let s=t.getValue(),n=r(s);t.setValue(n)}}),this.addCommand({id:"convert-all-files-from",name:"Convert all files",callback:async()=>{let t=this.app.vault.getMarkdownFiles();for(let s of t){let n=await this.app.vault.read(s),c=r(n);await this.app.vault.modify(s,c)}new i.Notice("Text in the whole vault is converted from KaTeX to MathJax format!")}})}};function r(e){return e=e.replace(/\\\((.*?)\\\)/g,(a,t)=>`$${t.trim()}$`),e=e.replace(/\\\[(.*?)\\\]/gs,(a,t)=>`
$$
${t.trim()}
$$
`),e}var h=class extends i.PluginSettingTab{constructor(t,s){super(t,s);d(this,"plugin");this.plugin=s}display(){let{containerEl:t}=this;t.empty(),new i.Setting(t).setName("Enable default paste conversion").setDesc("Automatically converts KaTeX to MathJax on paste action.").addToggle(s=>s.setValue(this.plugin.settings.enableDefaultPasteConversion).onChange(async n=>{this.plugin.settings.enableDefaultPasteConversion=n,await this.plugin.saveSettings()}))}};

/* nosourcemap */