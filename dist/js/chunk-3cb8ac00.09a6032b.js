(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cb8ac00"],{"029e":function(e,t,i){},"16b7":function(e,t,i){"use strict";var s=i("2b0e");t["a"]=s["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(e,t){this.clearDelay();const i=parseInt(this[`${e}Delay`],10);this[`${e}Timeout`]=setTimeout(t||(()=>{this.isActive={open:!0,close:!1}[e]}),i)}}})},"1d4d":function(e,t,i){"use strict";i("696f");var s=i("9d26"),n=i("a9ad"),r=i("16b7"),a=i("af2b"),o=i("5311"),l=i("7560"),c=i("80d2"),h=i("58df");t["a"]=Object(h["a"])(n["a"],r["a"],o["a"],a["a"],l["a"]).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$vuetify.icons.ratingEmpty"},fullIcon:{type:String,default:"$vuetify.icons.ratingFull"},halfIcon:{type:String,default:"$vuetify.icons.ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0}},data(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps(){const{dark:e,medium:t,large:i,light:s,small:n,size:r,xLarge:a}=this.$props;return{dark:e,medium:t,large:i,light:s,size:r,small:n,xLarge:a}},isHovering(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue(e){e!==this.value&&this.$emit("input",e)},value(e){this.internalValue=e}},methods:{createClickFn(e){return t=>{if(this.readonly)return;const i=this.genHoverIndex(t,e);this.clearable&&this.internalValue===i?this.internalValue=0:this.internalValue=i}},createProps(e){const t={index:e,value:this.internalValue,click:this.createClickFn(e),isFilled:Math.floor(this.internalValue)>e,isHovered:Math.floor(this.hoverIndex)>e};return this.halfIncrements&&(t.isHalfHovered=!t.isHovered&&(this.hoverIndex-e)%1>0,t.isHalfFilled=!t.isFilled&&(this.internalValue-e)%1>0),t},genHoverIndex(e,t){let i=this.isHalfEvent(e);return this.$vuetify.rtl&&(i=!i),t+(i?.5:1)},getIconName(e){const t=this.isHovering?e.isHovered:e.isFilled,i=this.isHovering?e.isHalfHovered:e.isHalfFilled;return t?this.fullIcon:i?this.halfIcon:this.emptyIcon},getColor(e){if(this.isHovering){if(e.isHovered||e.isHalfHovered)return this.color}else if(e.isFilled||e.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent(e){if(this.halfIncrements){const t=e.target&&e.target.getBoundingClientRect();if(t&&e.pageX-t.left<t.width/2)return!0}return!1},onMouseEnter(e,t){this.runDelay("open",()=>{this.hoverIndex=this.genHoverIndex(e,t)})},onMouseLeave(){this.runDelay("close",()=>this.hoverIndex=-1)},genItem(e){const t=this.createProps(e);if(this.$scopedSlots.item)return this.$scopedSlots.item(t);const i={click:t.click};return this.hover&&(i.mouseenter=t=>this.onMouseEnter(t,e),i.mouseleave=this.onMouseLeave,this.halfIncrements&&(i.mousemove=t=>this.onMouseEnter(t,e))),this.$createElement(s["a"],this.setTextColor(this.getColor(t),{directives:this.directives,props:this.iconProps,on:i}),[this.getIconName(t)])}},render(e){const t=Object(c["h"])(Number(this.length)).map(e=>this.genItem(e));return e("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},t)}})},"1e09":function(e,t,i){},"297c":function(e,t,i){"use strict";var s=i("2b0e"),n=i("37c6");t["a"]=s["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(n["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"37c6":function(e,t,i){"use strict";i("6ece");var s=i("0789"),n=i("a9ad"),r=i("fe6c"),a=i("a452"),o=i("7560"),l=i("80d2"),c=i("58df");const h=Object(c["a"])(n["a"],Object(r["b"])(["absolute","fixed","top","bottom"]),a["a"],o["a"]);var d=h.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(l["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(l["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,left:Object(l["f"])(this.normalizedValue,"%"),width:Object(l["f"])(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?s["d"]:s["e"]},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(l["f"])(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=Object(l["r"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(l["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});t["a"]=d},"3e35":function(e,t,i){"use strict";var s=i("9d65"),n=i("4e82"),r=i("c3f0"),a=i("80d2"),o=i("58df");const l=Object(o["a"])(s["a"],Object(n["a"])("windowGroup","v-window-item","v-window"));var c=l.extend().extend().extend({name:"v-window-item",directives:{Touch:r["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{done:null,isActive:!1,wasCancelled:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},mounted(){this.$el.addEventListener("transitionend",this.onTransitionEnd,!1)},beforeDestroy(){this.$el.removeEventListener("transitionend",this.onTransitionEnd,!1)},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.showLazyContent(this.genDefaultSlot()))},onAfterEnter(){this.wasCancelled?this.wasCancelled=!1:requestAnimationFrame(()=>{this.windowGroup.internalHeight=void 0,this.windowGroup.isActive=!1})},onBeforeEnter(){this.windowGroup.isActive=!0},onBeforeLeave(e){this.windowGroup.internalHeight=Object(a["f"])(e.clientHeight)},onEnterCancelled(){this.wasCancelled=!0},onEnter(e,t){const i=this.windowGroup.isBooted;i&&(this.done=t),this.$nextTick(()=>{if(!this.computedTransition)return t();this.windowGroup.internalHeight=Object(a["f"])(e.clientHeight),!i&&setTimeout(t,100)})},onTransitionEnd(e){"transform"===e.propertyName&&e.target===this.$el&&this.done&&(this.done(),this.done=null)}},render(e){return e("transition",{props:{name:this.computedTransition},on:{afterEnter:this.onAfterEnter,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,enter:this.onEnter,enterCancelled:this.onEnterCancelled}},[this.genWindowItem()])}}),h=i("adda"),d=i("1c87");const u=Object(o["a"])(c,d["a"]);t["a"]=u.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot(){return[this.$createElement(h["a"],{staticClass:"v-carousel__item",props:{...this.$attrs,height:this.windowGroup.internalHeight},on:this.$listeners},this.$slots.default)]},genWindowItem(){const{tag:e,data:t}=this.generateRouteLink();return t.staticClass="v-window-item",t.directives.push({name:"show",value:this.isActive}),this.$createElement(e,t,this.showLazyContent(this.genDefaultSlot()))},onBeforeEnter(){},onEnter(){},onAfterEnter(){},onEnterCancelled(){}}})},"52f9":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"little-card-root"},[i("v-carousel",{attrs:{height:"144","hide-delimiter-background":"","hide-delimiters":"","next-icon":1!==e.images.length&&"$vuetify.icons.next","prev-icon":1!==e.images.length&&"$vuetify.icons.prev"}},e._l(e.images,function(e){return i("v-carousel-item",{key:e,attrs:{src:e}})}),1),i("div",{staticClass:"card-content"},[i("rating-favorite",{attrs:{item:e.item,type:e.type}})],1)],1)},n=[],r=i("d22d"),a={components:{RatingFavorite:r["a"]},props:{item:{type:Object,default:()=>({})},type:String},data(){return{images:[]}},created(){"site"===this.type?this.images=this.item.photos:this.images=this.item.images,0===this.images.length&&this.images.push(i("aa53"))}},o=a,l=(i("c7ca"),i("2877")),c=i("6544"),h=i.n(c),d=i("b0af"),u=i("5e66"),m=i("3e35"),p=Object(l["a"])(o,s,n,!1,null,null,null);t["a"]=p.exports;h()(p,{VCard:d["a"],VCarousel:u["a"],VCarouselItem:m["a"]})},5311:function(e,t,i){"use strict";var s=i("5607"),n=i("2b0e");t["a"]=n["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),e.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",e)):null},onChange(){}}})},"5e66":function(e,t,i){"use strict";i("63b7");var s=i("f665"),n=i("afdd"),r=i("9d26"),a=i("37c6"),o=i("604c"),l=o["a"].extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return o["a"].options.computed.classes.call(this)}},methods:{genData:o["a"].options.methods.genData}}),c=i("80d2"),h=i("d9bd");t["a"]=s["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$vuetify.icons.delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>e>0},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical}},isDark(){return this.dark||!this.light},isVertical(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height(e,t){e!==t&&e&&(this.internalHeight=e)},cycle(e){e?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created(){this.$attrs.hasOwnProperty("hide-controls")&&Object(h["a"])("hide-controls",':show-arrows="false"',this)},mounted(){this.startTimeout()},methods:{genControlIcons(){return this.isVertical?null:s["a"].options.methods.genControlIcons.call(this)},genDelimiters(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems(){const e=this.items.length,t=[];for(let i=0;i<e;i++){const e=this.$createElement(n["a"],{staticClass:"v-carousel__controls__item",props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(r["a"],{props:{size:18}},this.delimiterIcon)]);t.push(e)}return this.$createElement(l,{props:{value:this.internalValue},on:{change:e=>{this.internalValue=e}}},t)},genProgress(){return this.$createElement(a["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render(e){const t=s["a"].options.render.call(this,e);return t.data.style=`height: ${Object(c["f"])(this.height)};`,this.hideDelimiters||t.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&t.children.push(this.genProgress()),t}})},6034:function(e,t,i){"use strict";var s=i("f71a"),n=i.n(s);n.a},"615b":function(e,t,i){},6309:function(e,t,i){},"63b7":function(e,t,i){},"696f":function(e,t,i){},"6ece":function(e,t,i){},9954:function(e,t,i){"use strict";var s=i("6309"),n=i.n(s);n.a},"9d65":function(e,t,i){"use strict";var s=i("d9bd"),n=i("2b0e");t["a"]=n["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&Object(s["d"])("lazy",this)},methods:{showLazyContent(e){return this.hasContent?e:void 0}}})},aa53:function(e,t,i){e.exports=i.p+"img/5.ccc16904.jpg"},b0af:function(e,t,i){"use strict";i("615b");var s=i("10d2"),n=i("297c"),r=i("1c87"),a=i("58df");t["a"]=Object(a["a"])(n["a"],r["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean},computed:{classes(){return{"v-card":!0,...r["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,...s["a"].options.computed.classes.call(this)}},styles(){const e={...s["a"].options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=n["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress"},[e]):null}},render(e){const{tag:t,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},b763:function(e,t,i){"use strict";var s=i("029e"),n=i.n(s);n.a},c7ca:function(e,t,i){"use strict";var s=i("1e09"),n=i.n(s);n.a},d22d:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"rating-favorite-root"},[i("h4",{on:{click:function(t){return e.changeRouter(e.id)}}},[e._v(e._s(e.name))]),i("div",[i("v-icon",{attrs:{size:"15",color:"#FB9026"}},[e._v("star")]),i("span",{style:{color:"#FB9026"}},[e._v(e._s(e.rating))]),i("span",{style:{color:"#999999"}},[e._v("  ( "+e._s(e.commentCounts)+"則評論 | "+e._s(e.collectingCounts+e.counts?e.collectingCounts+e.counts:0)+" 人將此收藏 )")])],1),e.item.userId!==e.accountId?i("v-icon",{staticClass:"favorite-icon",style:{color:e.showWhichIcon?"red":"grey"},on:{mouseover:function(t){e.isOnHover=!0},mouseout:function(t){e.isOnHover=!1},click:function(t){return e.toggle(e.id)}}},[e._v(e._s(e.showWhichIcon?"favorite":"favorite_border"))]):e._e(),e._t("cancel")],2)},n=[],r=i("2f62"),a={props:{item:Object,type:String},data(){return{isOnHover:!1,name:"",rating:0,commentCounts:0,collectingCounts:0,counts:0,id:""}},created(){this.name=this.item.name,this.rating=this.item.rating,this.collectingCounts=this.item.collectingCounts,"site"===this.type?(this.commentCounts=this.item.reviews.length?this.item.reviews.length:0,this.id=this.item.placeId):(this.commentCounts=this.item.comments.length,this.id=this.item._id)},computed:{...Object(r["c"])("account",{accountId:"getAccountId",collectingSites:"getCollectingSites",collectingTrips:"getCollectingTrips"}),isFavorite(){return"site"===this.type?this.collectingSites.includes(this.id):this.collectingTrips.includes(this.id)},showWhichIcon(){return this.isFavorite?!this.isOnHover:this.isOnHover}},methods:{...Object(r["b"])("account",["toggleCollectedSite","toggleCollectedTrip"]),toggle(e){"site"===this.type?this.toggleCollectedSite(e):this.toggleCollectedTrip(e),this.isFavorite?this.counts+=1:this.counts-=1},changeRouter(e){if("site"===this.type){if("Site"===this.$route.name)return;this.$router.push(`/sites/${e}`)}else this.$router.push(`/trips/${e}`)}}},o=a,l=(i("b763"),i("2877")),c=i("6544"),h=i.n(c),d=i("132d"),u=Object(l["a"])(o,s,n,!1,null,null,null);t["a"]=u.exports;h()(u,{VIcon:d["a"]})},e910:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"site-root"}},[i("div",{staticClass:"image-container"},e._l(e.site.photos.slice(0,5),function(e){return i("div",{style:{"background-image":"url("+e+")"}})}),0),i("div",{staticClass:"main"},[i("div",{staticClass:"content"},[void 0!==e.site._id?i("site-info",{attrs:{site:e.site}}):e._e(),i("div",{staticClass:"comment-container"},[i("div",[i("span",[e._v(e._s(e.site.reviews.length)+" 則評論")]),i("span",[e._v("(以下內容來自為google地圖)")])]),e._l(e.site.reviews,function(t){return i("div",{staticClass:"comment-wrapper"},[i("div",[i("img",{attrs:{src:t.profile_photo_url}}),i("div",[i("h4",[e._v(e._s(t.author_name))]),i("span",[e._v(e._s(t.relative_time_description))]),i("v-rating",{attrs:{color:"#FB9026","background-color":"#7F7F7F","empty-icon":"$vuetify.icons.ratingFull","half-increments":"",size:"15px",dense:"",readonly:""},model:{value:t.rating,callback:function(i){e.$set(t,"rating",i)},expression:"comment.rating"}})],1)]),i("div",[i("p",[e._v(e._s(t.text))])])])})],2)],1),e.containingTrips?i("div",{staticClass:"recommendation-lits"},[i("p",[e._v("包含此景點的行程")]),e._l(e.containingTrips,function(e,t){return i("little-card",{key:"little-card-"+e.name+"-"+t,attrs:{item:e,type:"trip"}})})],2):e._e(),e.otherTrips?i("div",{staticClass:"recommendation-lits"},[i("p",[e._v("同縣市的其他行程")]),e._l(e.otherTrips,function(e,t){return i("little-card",{key:"little-card-"+e.name+"-"+t,attrs:{item:e,type:"trip"}})})],2):e._e()])])},n=[],r=i("fd80"),a=i("52f9"),o=i("0e8e"),l={components:{SiteInfo:r["a"],LittleCard:a["a"]},data(){return{site:{photos:[],reviews:[]},containingTrips:[],otherTrips:[]}},async created(){await this.getSite()},methods:{async getSite(){try{const{site:t,containingTrips:i,otherTrips:s}=await o["a"].getSite(this.$route.params.id);this.site=t,this.containingTrips=i,this.otherTrips=s}catch(e){console.log(e)}}}},c=l,h=(i("6034"),i("2877")),d=i("6544"),u=i.n(d),m=i("1d4d"),p=Object(h["a"])(c,s,n,!1,null,"9fa3f9cc",null);t["default"]=p.exports;u()(p,{VRating:m["a"]})},f71a:function(e,t,i){},fd80:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"site-info-root"},[i("div",[i("rating-favorite",{attrs:{item:e.site,type:"site"}})],1),e._l(e.infos,function(t){return i("div",{staticClass:"info-wrapper"},[i("v-icon",[e._v(e._s(t.icon))]),i("span",[e._v(e._s(t.title)+":  ")]),"官方網站"===t.title?[i("a",{attrs:{href:t.content}},[e._v(e._s(t.content))])]:"營業時間"===t.title?[i("div",{staticClass:"opening-hours"},e._l(t.content,function(t){return i("span",[e._v(e._s(t))])}),0)]:[i("span",[e._v(e._s(t.content))])]],2)})],2)},n=[],r=i("d22d"),a={components:{RatingFavorite:r["a"]},props:{site:Object},data(){return{infos:[{type:"formatted_address",icon:"location_on",title:"地址",content:""},{type:"formatted_phone_number",icon:"phone",title:"聯絡電話",content:""},{type:"website",icon:"language",title:"官方網站",content:""}],moreInfos:[{type:"opening_hours",icon:"access_time",title:"營業時間",content:""}]}},created(){this.$route.path===`/sites/${this.site.placeId}`&&(this.infos=[...this.infos,...this.moreInfos]),this.infos.forEach((e,t)=>{e.content=this.site[e.type]})}},o=a,l=(i("9954"),i("2877")),c=i("6544"),h=i.n(c),d=i("132d"),u=Object(l["a"])(o,s,n,!1,null,null,null);t["a"]=u.exports;h()(u,{VIcon:d["a"]})}}]);
//# sourceMappingURL=chunk-3cb8ac00.09a6032b.js.map