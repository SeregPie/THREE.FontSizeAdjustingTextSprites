(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?module.exports=b(require('three')):'function'==typeof define&&define.amd?define(['three'],b):(a.THREE=a.THREE||{},a.THREE.TextSprite=b(a.THREE))})(this,function(a){'use strict';function b(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function c(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function d(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}a=a&&a.hasOwnProperty('default')?a['default']:a;var e=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(void 0===e){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if('value'in e)return e.value;var g=e.get;return void 0===g?void 0:g.call(d)},g=function(b,c,a){this.redraw(b,a)},h=function(h){function i(){var d=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=d.textSize,f=void 0===e?1:e,h=d.redrawInterval,j=void 0===h?1:h,k=d.roundFontSizeToNearestPowerOfTwo,l=d.maxFontSize,m=void 0===l?Infinity:l,n=d.material,o=void 0===n?{}:n,p=d.texture,q=void 0===p?{}:p;b(this,i);var r=c(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,new a.SpriteMaterial(Object.assign({},o,{map:new a.TextTexture(q)}))));return r.textSize=f,r.redrawInterval=j,r.roundFontSizeToNearestPowerOfTwo=void 0===k||k,r.maxFontSize=m,r.lastRedraw=0,r._renderMesh=new a.Mesh,r._renderMesh.onBeforeRender=g.bind(r),r.add(r._renderMesh),r}return d(i,h),e(i,[{key:'updateScale',value:function(){this.scale.set(this.material.map.aspect,1,1).multiplyScalar(this.textSize)}},{key:'updateMatrix',value:function(){var a;this.updateScale();for(var b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];return(a=f(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),'updateMatrix',this)).call.apply(a,[this].concat(c))}},{key:'computeOptimalFontSize',value:function(a,b){if(a.domElement.width&&a.domElement.height&&this.material.map.textBoxHeight){var c=this.getWorldPosition().distanceTo(b.getWorldPosition());if(c){var d=this.getWorldScale().y*a.domElement.height/c;if(d)return Math.round(d/this.material.map.paddingBoxHeight)}}return 0}},{key:'redraw',value:function(a,b){var c=this;this.lastRedraw+this.redrawInterval<Date.now()&&(this.redrawInterval?setTimeout(function(){c.redrawNow(a,b)},1):this.redrawNow(a,b))}},{key:'redrawNow',value:function(b,c){this.updateScale();var d=this.computeOptimalFontSize(b,c);this.roundFontSizeToNearestPowerOfTwo&&(d=a.Math.nearestPowerOfTwo(d)),d=Math.min(d,this.maxFontSize),this.material.map.fontSize=d,this.material.map.autoRedraw||this.material.map.redraw(),this.lastRedraw=Date.now()}},{key:'dispose',value:function(){this.material.map.dispose(),this.material.dispose()}}]),i}(a.Sprite);return Object.assign(h.prototype,{isTextSprite:!0}),Object.assign(a,{TextSprite:h}),h});
