webpackJsonp([0],{"/oiM":function(t,e,i){"use strict";(function(t){var n=i("So3d"),a=i.n(n);e.a={name:"contact",title:"Contact",description:"コンタクトフォーム",data:function(){return{contact:a.a}},methods:{sendMessage:function(){var e=t("form"),i=e.find("button[type=submit]");if(""===t("#message").val())return alert("メッセージを入力してください"),!1;t.ajax({url:e.attr("action"),dataType:"jsonp",data:e.serialize(),beforeSend:function(){return i.prop("disabled",!0)},complete:function(){return i.prop("disabled",!1)},success:function(t){alert("メッセージの送信が完了しました、スプレッドシートをご確認ください。")},error:function(t){return console.log(t)}})}}}}).call(e,i("7t+N"))},0:function(t,e,i){i("ERTG"),t.exports=i("NHnr")},"1lhI":function(t,e){},"7B7u":function(t,e){t.exports=[{slug:"portfolio",kind:"自主制作",title:"Yusuke Yamada - Prtfolio",note:"当該ポートフォリオ、Vue.jsにて制作。",icon:"/portfolio/static/img/works/icon/portfolio.jpg",role:["デザイン","フロント実装"],urlTitle:"Yusuke Yamada - Prtfolio",url:"/",picture:"/portfolio/static/img/works/pic/portfolio.jpg",txt:"ご覧いただいているポートフォリオです、2019/05/09より学習を始めたVue.jsにて制作しています。"},{slug:"yu-kinishimoto",kind:"ウォンツ在籍時 業務制作",title:"墨絵、陶墨画アーティスト<br>西元祐貴 公式Web",note:"コーディング、多言語対応実装など。",icon:"/portfolio/static/img/works/icon/yu-kinishimoto.jpg",role:["フロント実装"],urlTitle:"墨絵、陶墨画アーティスト 西元祐貴 公式Web",url:"http://yuki-nishimoto.com/jp/",picture:"/portfolio/static/img/works/pic/yu-kinishimoto.jpg",txt:"コーディングを担当しました、多言語対応に関してはjQueryでURLの切り替えができるよう調整を行っています。<br>その他、トップページの表示領域に関して調整を行っています。"},{slug:"yu-kiworks",kind:"ウォンツ在籍時 業務制作",title:"Yu-ki Nishimoto WORKS<br>西元祐貴ECサイト",note:"MakeShop CMSを使用、ページ間での動的対応など。",icon:"/portfolio/static/img/works/icon/yu-kiworks.jpg",role:["フロント実装","一部デザイン"],urlTitle:"Yu-ki Nishimoto WORKS - 西元祐貴ECサイト",url:"https://yu-ki.work/",picture:"/portfolio/static/img/works/pic/yu-kiworks.jpg",txt:"MakeShop CMSを使用し制作しています。<br>商品を更新した際にトップページの更新が不要になるよう、jQueryでプログラムを記述しています。<br>その他、全般的に動的箇所の実装を行っています。"},{slug:"terrabattle2",kind:"ウォンツ在籍時 業務制作",title:"西元 祐貴×テラバトル2<br>コラボレーション特設ページ",note:"コーディング、アニメーションデザイン・実装など。",icon:"/portfolio/static/img/works/icon/terrabattle2.jpg",role:["フロント実装","アニメーションデザイン","一部ライティング"],urlTitle:"西元 祐貴×テラバトル2 コラボレーション 特設ページ",url:"http://sp.yu-ki.work/terrabattle2/",picture:"/portfolio/static/img/works/pic/terrabattle2.jpg",txt:"スマホアプリとのコラボレーションを記念したキャンペーンページです。<br>コーディングの際にアニメーションデザインを行い実装しています。<br>また、インタビュー記事制作時にライティングを一部担当しております。"},{slug:"anniversary",kind:"ウォンツ在籍時 業務制作",title:"西元祐貴EC 2周年記念<br>プレゼントキャンペーン",note:"コーディング、アニメーションデザイン・実装など。",icon:"/portfolio/static/img/works/icon/anniversary.jpg",role:["フロント実装","アニメーションデザイン"],urlTitle:"西元祐貴オンラインストア2周年記念 プレゼントキャンペーン",url:"http://sp.yu-ki.work/anniversary/",picture:"/portfolio/static/img/works/pic/anniversary.jpg",txt:"ECサイトの2周年記念のキャンペーンページです。<br>コーディングの際にアニメーションデザインを行い実装しています。"},{slug:"miki-takei",kind:"ウォンツ在籍時 業務制作",title:"イラストレーター たけいみき<br>公式サイト",note:"リニューアル対応。",icon:"/portfolio/static/img/works/icon/miki-takei.jpg",role:["フロント実装"],urlTitle:"イラストレーター たけいみき公式サイト",url:"http://www.miki-takei.com/",picture:"/portfolio/static/img/works/pic/miki-takei.jpg",txt:"既存サイトのリニューアル対応を行いました、ページの追加制作や調整を行っています。"},{slug:"light-the-light",kind:"ウォンツ在籍時 業務制作",title:"Light the Light<br>たけいみき ECサイト",note:"MakeShop CMSを使用、ページ内での動的対応など。",icon:"/portfolio/static/img/works/icon/light-the-light.jpg",role:["フロント実装"],urlTitle:"Light the Light たけいみき ECサイト",url:"http://light-the-light.com/",picture:"/portfolio/static/img/works/pic/light-the-light.jpg",txt:"MakeShop CMSを使用し制作しています。<br>PC版スライダー表示時に背景デザインの調整が必要だったため、プラグインカスタマイズを行っています。"},{slug:"hondacars",kind:"ウォンツ在籍時 業務制作",title:"Honda Cars 若狭",note:"スマホリニューアル対応、一部デザイン。",icon:"/portfolio/static/img/works/icon/hondacars.jpg",role:["フロント実装","一部デザイン"],urlTitle:"Honda Cars 若狭",url:"http://www.hondacars-wakasa.co.jp/",picture:"/portfolio/static/img/works/pic/hondacars.jpg",txt:"スマホ版サイトの追加制作を対応しました、既存コードの調整と一部ページのデザインを行っています。"},{slug:"o-ing",kind:"システムグラフィ在籍時 業務制作",title:"株式会社オーイング",note:"独自CMS使用、デザイン・コーディング対応など。",icon:"/portfolio/static/img/works/icon/o-ing.jpg",role:["デザイン","フロント実装"],urlTitle:"株式会社オーイング",url:"https://www.o-ing.net/",picture:"/portfolio/static/img/works/pic/o-ing.jpg",txt:"独自CMSを使用し制作しました、デザイン制作とコーディングを行っています。"},{slug:"takanogumi",kind:"システムグラフィ在籍時 業務制作",title:"株式会社 高野組",note:"独自CMS使用、デザイン・コーディング対応など。",icon:"/portfolio/static/img/works/icon/takanogumi.jpg",role:["デザイン","フロント実装"],urlTitle:"株式会社 高野組",url:"http://www.takanogumi.co.jp/",picture:"/portfolio/static/img/works/pic/takanogumi.jpg",txt:"独自CMSを使用し制作しました、デザイン制作とコーディングを行っています。"},{slug:"fcvc",kind:"システムグラフィ在籍時 業務制作",title:"福井循環器病院",note:"独自CMS使用、デザイン・コーディング対応など。",icon:"/portfolio/static/img/works/icon/fcvc.jpg",role:["デザイン","フロント実装"],urlTitle:"医療法人 福井心臓血圧センター / 福井循環器病院",url:"http://www.fcvc.or.jp/",picture:"/portfolio/static/img/works/pic/fcvc.jpg",txt:"独自CMSを使用し制作しました、デザイン制作とコーディングを行っています。"}]},ERTG:function(t,e){},FDhW:function(t,e){},J373:function(t,e){},LoNT:function(t,e){},"MeK/":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("nav",[e("ul",[e("li",[e("router-link",{attrs:{to:"/"}},[this._v("Home")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/about"}},[this._v("About")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/works"}},[this._v("Works")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/contact"}},[this._v("Contact")])],1)])])])},staticRenderFns:[]};var s={name:"App",components:{hnav:i("VU/8")(null,a,!1,function(t){i("LoNT")},null,null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("hnav"),this._v(" "),e("main",[e("transition",{attrs:{name:"fade"}},[e("router-view")],1)],1)],1)},staticRenderFns:[]},o=i("VU/8")(s,r,!1,null,null,null).exports,l={mounted:function(){var t=this.$options.title;t&&(t="function"==typeof t?t.call(this):t,document.title=t+" | Yusuke Yamada - Portfolio")}},c={mounted:function(){var t=this.$options.description,e=document.getElementsByTagName("meta");if(t)for(var i=0;i<e.length;i++)"description"==e[i].name.toLowerCase()&&(e[i].content=t)}},u=i("/ocq"),p=i("vN1N"),d=i.n(p),_={name:"top",title:"Top",description:"山田祐介のポートフォリオサイト",data:function(){return{top:d.a}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"top"},[t._m(0),t._v(" "),i("article",{staticClass:"log"},[i("h2",{},[t._v(t._s(t.top.update.title))]),t._v(" "),i("div",{staticClass:"list"},t._l(t.top.update.log,function(e,n){return i("dl",{key:n},[i("dt",[t._v(t._s(e.date))]),t._v(" "),i("dd",[t._v(t._s(e.matter))])])}),0)]),t._v(" "),i("article",{staticClass:"whats"},[i("h2",{},[t._v(t._s(t.top.whats.title))]),t._v(" "),i("div",{staticClass:"txt",domProps:{innerHTML:t._s(t.top.whats.txt)}})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("span",[this._v("Yusuke Yamada - Portfolio")])])}]};var m=i("VU/8")(_,h,!1,function(t){i("FDhW")},null,null).exports,v=i("ZGZv"),f=i.n(v),k={name:"about",title:"About",description:"山田祐介について",data:function(){return{about:f.a}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[t._m(0),t._v(" "),i("article",{staticClass:"person"},t._l(t.about.person,function(e,n){return i("dl",{key:n},[i("dt",[t._v(t._s(e.title))]),t._v(" "),i("dd",[t._v(t._s(e.txt))])])}),0),t._v(" "),i("article",{staticClass:"career"},[i("h2",[t._v(t._s(t.about.career.title))]),t._v(" "),i("div",{staticClass:"list"},t._l(t.about.career.detail,function(e,n){return i("dl",{key:n},[i("dt",[i("h3",[t._v(t._s(e.company))]),t._v(" "),i("small",[t._v(t._s(e.date))])]),t._v(" "),i("dd",[t._v(t._s(e.txt))])])}),0)]),t._v(" "),i("article",{staticClass:"skill"},[i("h2",[t._v(t._s(t.about.skill.title))]),t._v(" "),i("section",t._l(t.about.skill.detail,function(e,n){return i("div",{key:n,staticClass:"list"},[i("h3",[t._v(t._s(e.title))]),t._v(" "),t._l(e.language,function(e,n){return i("dl",{key:n},[i("dt",[t._v(t._s(e.name))]),t._v(" "),i("dd",[t._v(t._s(e.note))])])})],2)}),0)]),t._v(" "),i("article",{staticClass:"tool"},[i("h2",[t._v(t._s(t.about.tool.title))]),t._v(" "),i("ul",{staticClass:"list"},t._l(t.about.tool.list,function(e,n){return i("li",{key:n},[t._v(t._s(e))])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("span",[this._v("About")]),this._v(" "),e("small",[this._v("Yusuke Yamada - Portfolio")])])}]};var w=i("VU/8")(k,g,!1,function(t){i("1lhI")},null,null).exports,b=i("7B7u"),C=i.n(b),y={data:function(){return{myData:C.a}}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"works"},[this._m(0),this._v(" "),e("transition",{attrs:{name:"fade"}},[e("router-view",{attrs:{data:this.myData}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("span",[this._v("Works")]),this._v(" "),e("small",[this._v("Yusuke Yamada - Portfolio")])])}]};var T=i("VU/8")(y,x,!1,function(t){i("hAdB")},null,null).exports,E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"list"},t._l(t.data,function(e,n){return i("section",{key:n},[i("p",{staticClass:"kind"},[t._v(t._s(e.kind))]),t._v(" "),i("p",{staticClass:"icon"},[i("router-link",{attrs:{to:"/works/"+e.slug}},[i("img",{attrs:{src:e.icon}})])],1),t._v(" "),i("div",{staticClass:"titleBg"},[i("p",{staticClass:"title"},[i("b",{domProps:{innerHTML:t._s(e.title)}})])]),t._v(" "),i("p",{staticClass:"note"},[t._v(t._s(e.note))]),t._v(" "),i("div",{staticClass:"role"},[i("b",[t._v("担当箇所：")]),t._v(" "),i("ul",t._l(e.role,function(e,n){return i("li",{key:n},[t._v(t._s(e))])}),0)])])}),0)},staticRenderFns:[]};var S=i("VU/8")({title:"Works",description:"山田祐介の過去の制作物一覧",props:["data"]},E,!1,function(t){i("q2Uh")},null,null).exports,j={props:["data"],computed:{filteredData:function(){var t=window.location.protocol+"//"+window.location.host+"/works/";return this.data.filter(function(e,i){if(e.slug===window.location.href.replace(t,""))return!0})[0]}},mounted:function(){document.title=this.filteredData.urlTitle+" | Yusuke Yamada - Portfolio";for(var t=document.getElementsByTagName("meta"),e=0;e<t.length;e++)"description"==t[e].name.toLowerCase()&&(t[e].content=this.filteredData.urlTitle+"のページです")}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"worksDetail"},[i("h2",{domProps:{innerHTML:t._s(t.filteredData.urlTitle)}}),t._v(" "),i("h2",{staticClass:"sp",domProps:{innerHTML:t._s(t.filteredData.title)}}),t._v(" "),i("p",{staticClass:"img"},[i("img",{attrs:{src:t.filteredData.picture}})]),t._v(" "),i("ul",{staticClass:"list"},t._l(t.filteredData.role,function(e,n){return i("li",{key:n},[t._v(t._s(e))])}),0),t._v(" "),i("p",{staticClass:"txt",domProps:{innerHTML:t._s(t.filteredData.txt)}}),t._v(" "),i("p",{staticClass:"url"},[t._v("\n    URL：\n    "),i("a",{attrs:{href:t.filteredData.url,target:"_blank"}},[t._v(t._s(t.filteredData.urlTitle))])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"btn"},[e("a",{attrs:{href:"#",onclick:"window.history.back(); return false;"}},[this._v("← 一覧へ戻る")])])}]};var Y=i("VU/8")(j,M,!1,function(t){i("Zlq3")},null,null).exports,P=i("/oiM"),H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contact"},[t._m(0),t._v(" "),i("article",{staticClass:"form"},[i("form",{attrs:{action:"https://script.google.com/macros/s/AKfycbzpkUuH2iCG0AMuMbrsvlsad5uQIU-IHPH6enRZ9syAupWn7ZnD/exec"}},[i("input",{attrs:{name:"SPREADSHEET_ID",type:"hidden",value:"1u6tHwq-EiCpnpQkMPT_JH-TbYEYXrTppk9JXq_fbSpY"}}),t._v(" "),i("input",{attrs:{name:"SHEET_NAME",type:"hidden",value:"フォームデータ"}}),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),i("div",{staticClass:"btn"},[i("button",{attrs:{type:"submit"},on:{click:function(e){return t.sendMessage()}}},[t._v("Submit")])])])]),t._v(" "),i("article",{staticClass:"detail"},[i("div",{staticClass:"txt"},[i("p",{domProps:{innerHTML:t._s(t.contact.detail.txt)}}),t._v(" "),i("small",{domProps:{innerHTML:t._s(t.contact.detail.note)}})])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("span",[this._v("Contact")]),this._v(" "),e("small",[this._v("Yusuke Yamada - Portfolio")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dl",[e("dt",[this._v("メール")]),this._v(" "),e("dd",[e("input",{attrs:{type:"email",name:"your-email",placeholder:"ご連絡不要であれば空欄"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dl",[e("dt",[this._v("お名前")]),this._v(" "),e("dd",[e("input",{attrs:{type:"text",name:"your-name",placeholder:"匿名希望の場合は空欄"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dl",[e("dt",[this._v("\n          メッセージ\n          "),e("i",[this._v("必須")])]),this._v(" "),e("dd",[e("textarea",{attrs:{name:"your-message",placeholder:"この欄の記入は必須となっております。",rows:"8",required:"",id:"message"}})])])}]};var $=function(t){i("uVYs")},L=i("VU/8")(P.a,H,!1,$,null,null).exports,D=i("So3d"),R=i.n(D),N={name:"thanks",title:"Thanks",description:"ありがとうございました",data:function(){return{contact:R.a}}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contact"},[t._m(0),t._v(" "),i("article",{staticClass:"thanks"},[i("h2",[t._v(t._s(t.contact.thanks.title))]),t._v(" "),i("div",{staticClass:"txt",domProps:{innerHTML:t._s(t.contact.thanks.txt)}})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("span",[this._v("Contact")]),this._v(" "),e("small",[this._v("Yusuke Yamada - Portfolio")])])}]};var F=i("VU/8")(N,V,!1,function(t){i("MeK/")},null,null).exports,U={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notfound"},[e("main",[e("h1",[e("span",[this._v("Not Found")]),this._v(" "),e("small",[this._v("Yusuke Yamada - Portfolio")])]),this._v(" "),e("article",{staticClass:"sorry"},[e("div",{staticClass:"txt"},[this._v("\n        ページが存在しません。\n        "),e("br"),this._v("ヘッダーメニューからページを選択するか、URLを修正して移動をお願いいたします。\n      ")])])])])}]},A=i("VU/8")({title:"Not Found",discription:"ページが存在しません。"},U,!1,null,null,null).exports;n.a.use(u.a);var J=new u.a({mode:"history",routes:[{path:"/",name:"top",component:m},{path:"/portfolio",name:"portfolio",component:m},{path:"/about",name:"about",component:w},{path:"/works",component:T,children:[{path:"/",name:"WorksTop",component:S},{path:":slug",name:"WorksDetail",component:Y}]},{path:"/contact",name:"contact",component:L},{path:"/thanks",name:"thanks",component:F},{path:"*",name:"Not Found",component:A,title:"Not Found"}]});n.a.config.productionTip=!1,n.a.mixin(l),n.a.mixin(c),i("J373"),new n.a({el:"#app",router:J,components:{App:o},template:"<App/>"})},So3d:function(t,e){t.exports={detail:{txt:"上記のフォームはjQueryとGoogle Apps Scriptを用い、<br class='pcOnly'><a href='https://docs.google.com/spreadsheets/d/1u6tHwq-EiCpnpQkMPT_JH-TbYEYXrTppk9JXq_fbSpY/edit#gid=0' target='_blank'>スプレッドシート</a>へ送信内容が蓄積されるよう連携させています。<br>入力内容のバリデーションは現在未実装です。",note:"参考：<br><a href='https://qiita.com/snowsunny/items/56a85c63598dcfb1b06e' target='_blank'>【短いコードで色々出来る】Google Apps Scriptでスプレッドシートと連携した<br>無料Ajaxフォームの作り方※サンプル付き【自動返信メールもあるよ】（Qiita）</a>"},thanks:{title:"メッセージ送信完了",txt:"送信したメッセージはスプレッドシートに蓄積されます。<br><a href='https://docs.google.com/spreadsheets/d/1u6tHwq-EiCpnpQkMPT_JH-TbYEYXrTppk9JXq_fbSpY/edit#gid=0' target='_blank'>こちら</a>のスプレッドシートで確認可能です。"}}},ZGZv:function(t,e){t.exports={person:[{title:"名前",txt:"山田 祐介"},{title:"生年月日",txt:"1989 / 03 / 22"},{title:"メール",txt:"yusuke09068159485@gmail.com"}],career:{title:"経歴",detail:[{company:"株式会社システムグラフィ",date:"2013/04 ～ 2016/03",txt:"独自CMSを用いたコーポレートサイトやECサイトの受注制作・デザインに従事。"},{company:"株式会社ウォンツ",date:"2016/04 ～ 2019/04",txt:"Makeshop・たまごリピートを用いたECサイト制作（コーディング）に従事。"}]},skill:{title:"スキル",detail:[{title:"独学",language:[{name:"Vue.js",note:"2019/05/09 ～ now"},{name:"Node.js",note:"2019/05/01 ～ now"},{name:"Sass",note:"2019/05"},{name:"JavaScript ES6",note:"2019/04"},{name:"開眼！Javascript（O'Reilly Japan）",note:"2019/04"},{name:"Git",note:"2019/04"}]},{title:"業務使用・その他",language:[{name:"HTML（HTML5）",note:"コーディングにて使用"},{name:"CSS（CSS3）",note:"コーディング・アニメーション実装にて使用"},{name:"JavaScript（jQuery）",note:"プラグイン改良ほか、簡易な動作実装に使用"},{name:"PHP",note:"既存プログラムの修正、簡易な実装に使用"},{name:"Flash",note:"簡単なAction Scriptの実装などを行いました"}]}]},tool:{title:"ツール",list:["Photoshop","Illustrator","Dreamweaver","Subline Text","VScode","Sourcetree","Fireworks"]}}},Zlq3:function(t,e){},hAdB:function(t,e){},q2Uh:function(t,e){},uVYs:function(t,e){},vN1N:function(t,e){t.exports={update:{title:"更新履歴",log:[{date:"2019/05/24",matter:"表示に関して微修正を行いました。"},{date:"2019/05/20",matter:"CSSの修正にてスマホ対応を行いました。"},{date:"2019/05/20",matter:"GitHub Pagesにてコンタクトフォームの挙動に問題があったため、一部修正。"},{date:"2019/05/15",matter:"Portfolioを作成しました。（PC版のみ）"}]},whats:{title:"このポートフォリオについて",txt:"2019/05/09より独学にて学習を始めたVue.jsを利用し制作しております。<ul><li><a href='https://www.udemy.com/learn-vuejs/' target='_blank'>Vue JS入門決定版！jQueryを使わないWeb開発（Udemy）</a></li><li><a href='https://becolomochi.booth.pm/items/667217' target='_blank'>Vue.jsでポートフォリオサイト制作記（BOOTH）</a></li></ul>ほか、Qiitaの記事などを参考にしております。"}}}},[0]);
//# sourceMappingURL=app.235a97fbb994845db3ec.js.map