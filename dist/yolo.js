!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("tf")):"function"==typeof define&&define.amd?define("YOLO",["tf"],r):"object"==typeof exports?exports.YOLO=r(require("tf")):e.YOLO=r(e.tf)}(window,function(e){return function(e){var r={};function t(a){if(r[a])return r[a].exports;var o=r[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(a,o,function(r){return e[r]}.bind(null,o));return a},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=3)}([function(r,t){r.exports=e},function(e,r,t){"use strict";var a=this&&this.__read||function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var a,o,n=t.call(e),i=[];try{for(;(void 0===r||r-- >0)&&!(a=n.next()).done;)i.push(a.value)}catch(e){o={error:e}}finally{try{a&&!a.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return i},o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r};Object.defineProperty(r,"__esModule",{value:!0});var n=o(t(0));r.preProcess=function(e,r,t){return n.tidy("preprocessing the yolo/darknet CNN",function(){var o;e instanceof n.Tensor?o=e:(e instanceof HTMLImageElement||e instanceof HTMLVideoElement||e instanceof ImageData||e instanceof HTMLCanvasElement)&&(o=n.browser.fromPixels(e));var i=a([o.shape[1],o.shape[0]],2),s=i[0],l=i[1],c=o.toFloat().div(n.scalar(255)),u=c;if(c.shape[0]!==r||c.shape[1]!==r){var h=t.AlignCorners;u="Bilinear"===t.ResizeOption?n.image.resizeNearestNeighbor(c,[r,r],h):n.image.resizeBilinear(c,[r,r],h)}return[s,l,u.reshape([1,r,r,3])]})}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t(10),o={modelName:"darknet-refrence",modelURL:"",modelSize:256,classProbThreshold:.6,topK:5,resizeOption:{AlignCorners:!0,ResizeOption:"Bilinear"},labels:a.darknetImagnetLabels};r.darknetRefrenceConfig=o;var n={modelName:"tiny-darknet",modelURL:"",modelSize:224,classProbThreshold:.6,topK:5,resizeOption:{AlignCorners:!0,ResizeOption:"Bilinear"},labels:a.darknetImagnetLabels};r.darknetTinyConfig=n;var i={modelName:"darknet-19",modelURL:"",modelSize:416,classProbThreshold:.6,topK:5,resizeOption:{AlignCorners:!0,ResizeOption:"Bilinear"},labels:a.darknetImagnetLabels};r.darknet19Config=i},function(e,r,t){"use strict";function a(e){for(var t in e)r.hasOwnProperty(t)||(r[t]=e[t])}Object.defineProperty(r,"__esModule",{value:!0}),a(t(4)),a(t(9))},function(e,r,t){"use strict";function a(e){for(var t in e)r.hasOwnProperty(t)||(r[t]=e[t])}Object.defineProperty(r,"__esModule",{value:!0}),a(t(5)),a(t(7))},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t(6),o={modelName:"tiny-yolo-v3",modelURL:"",modelSize:224,iouThreshold:.5,classProbThreshold:.5,maxOutput:10,resizeOption:{ResizeOption:"Bilinear",AlignCorners:!0},labels:a.cocoLabels,version:"v3",anchors:[[10,14],[23,27],[37,58],[81,82],[135,169],[344,319]],masks:[[3,4,5],[0,1,2]]};r.tinyYOLOv3Config=o;var n={modelName:"tiny-yolo-v2",modelURL:"",modelSize:224,iouThreshold:.5,classProbThreshold:.5,maxOutput:10,resizeOption:{ResizeOption:"Bilinear",AlignCorners:!0},labels:a.cocoLabels,version:"v2",masks:[[0,1,2,3,4]],anchors:[[.57273,.677385],[1.87446,2.06253],[3.33843,5.47434],[7.88282,3.52778],[9.77052,9.16828]]};r.tinyYOLOv2Config=n;var i={modelName:"yolo-v3",modelURL:"",modelSize:224,iouThreshold:.5,classProbThreshold:.5,maxOutput:10,resizeOption:{ResizeOption:"Bilinear",AlignCorners:!0},labels:a.cocoLabels,version:"v3",anchors:[[10,13],[16,30],[33,23],[30,61],[62,45],[59,119],[116,90],[156,198],[373,326]],masks:[[6,7,8],[3,4,5],[0,1,2]]};r.yolov3Config=i;var s={modelName:"tiny-yolo-v2-lite",modelURL:"",modelSize:224,iouThreshold:.2,classProbThreshold:.4,maxOutput:10,resizeOption:{ResizeOption:"Bilinear",AlignCorners:!0},labels:a.cocoLabels,version:"v2",masks:[[0,1,2,3,4]],anchors:[[1.08,1.19],[3.42,4.41],[6.63,11.38],[9.42,5.11],[16.62,10.52]]};r.tinyYOLOLiteConfig=s},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.cocoLabels=["person","bicycle","car","motorbike","aeroplane","bus","train","truck","boat","traffic light","fire hydrant","stop sign","parking meter","bench","bird","cat","dog","horse","sheep","cow","elephant","bear","zebra","giraffe","backpack","umbrella","handbag","tie","suitcase","frisbee","skis","snowboard","sports ball","kite","baseball bat","baseball glove","skateboard","surfboard","tennis racket","bottle","wine glass","cup","fork","knife","spoon","bowl","banana","apple","sandwich","orange","broccoli","carrot","hot dog","pizza","donut","cake","chair","sofa","pottedplant","bed","diningtable","toilet","tvmonitor","laptop","mouse","remote","keyboard","cell phone","microwave","oven","toaster","sink","refrigerator","book","clock","vase","scissors","teddy bear","hair drier","toothbrush"]},function(e,r,t){"use strict";var a=this&&this.__awaiter||function(e,r,t,a){return new(t||(t=Promise))(function(o,n){function i(e){try{l(a.next(e))}catch(e){n(e)}}function s(e){try{l(a.throw(e))}catch(e){n(e)}}function l(e){e.done?o(e.value):new t(function(r){r(e.value)}).then(i,s)}l((a=a.apply(e,r||[])).next())})},o=this&&this.__generator||function(e,r){var t,a,o,n,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(n){return function(s){return function(n){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,a&&(o=2&n[0]?a.return:n[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,n[1])).done)return o;switch(a=0,o&&(n=[2&n[0],o.value]),n[0]){case 0:case 1:o=n;break;case 4:return i.label++,{value:n[1],done:!1};case 5:i.label++,a=n[1],n=[0];continue;case 7:n=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===n[0]||2===n[0])){i=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){i.label=n[1];break}if(6===n[0]&&i.label<o[1]){i.label=o[1],o=n;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(n);break}o[2]&&i.ops.pop(),i.trys.pop();continue}n=r.call(e,i)}catch(e){n=[6,e],a=0}finally{t=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,s])}}},n=this&&this.__read||function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var a,o,n=t.call(e),i=[];try{for(;(void 0===r||r-- >0)&&!(a=n.next()).done;)i.push(a.value)}catch(e){o={error:e}}finally{try{a&&!a.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return i},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r};Object.defineProperty(r,"__esModule",{value:!0});var s=i(t(0)),l=t(8),c=t(1),u=function(){function e(e){this.modelName=e.modelName,this.modelURL=e.modelURL,this.version=e.version,this.modelSize=e.modelSize,this.iouThreshold=e.iouThreshold,this.classProbThreshold=e.classProbThreshold,this.maxOutput=e.maxOutput,this.labels=e.labels,this.anchors=e.anchors,this.masks=e.masks,this.resizeOption=e.resizeOption}return e.prototype.load=function(){return a(this,void 0,void 0,function(){var e;return o(this,function(r){switch(r.label){case 0:if(null==s)throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");r.label=1;case 1:return r.trys.push([1,3,,4]),e=this,[4,s.loadLayersModel(this.modelURL)];case 2:return e.model=r.sent(),[2,!0];case 3:return r.sent(),[2,!1];case 4:return[2]}})})},e.prototype.cache=function(){var e=s.zeros([this.modelSize,this.modelSize,3]);this.detectSync(e),s.dispose(e)},e.prototype.dispose=function(){this.model&&this.model.dispose()},e.prototype.detectSyncCPU=function(e){var r=this.predictInternal(e),t=r[0].shape[0],a=r[1].shape[1],o=r[0].dataSync(),i=r[1].dataSync();s.dispose(r);var l=s.getBackend();s.setBackend("cpu");var c=n(this.getMaxScoresAndClasses(i,t,a),2),u=c[0],h=c[1],p=s.tensor2d(o,[r[0].shape[0],r[0].shape[1]]),d=s.image.nonMaxSuppression(p,u,this.maxOutput,this.iouThreshold,this.classProbThreshold),b=d.dataSync();s.dispose(p),s.dispose(d);var f=this.createFinalBoxes(o,u,h,b);return s.setBackend(l),f},e.prototype.detectCPU=function(e){return a(this,void 0,void 0,function(){var r,t,a,i,l,c,u,h,p,d,b,f,m;return o(this,function(o){switch(o.label){case 0:return[4,s.nextFrame()];case 1:return o.sent(),r=this.predictInternal(e),t=r[0].shape[0],a=r[1].shape[1],[4,r[0].data()];case 2:return i=o.sent(),[4,r[1].data()];case 3:return l=o.sent(),s.dispose(r),c=s.getBackend(),s.setBackend("cpu"),u=n(this.getMaxScoresAndClasses(l,t,a),2),h=u[0],p=u[1],d=s.tensor2d(i,[r[0].shape[0],r[0].shape[1]]),[4,s.image.nonMaxSuppressionAsync(d,h,this.maxOutput,this.iouThreshold,this.classProbThreshold)];case 4:return[4,(b=o.sent()).data()];case 5:return f=o.sent(),s.dispose(d),s.dispose(b),m=this.createFinalBoxes(i,h,p,f),s.setBackend(c),[2,m]}})})},e.prototype.detectSync=function(e){var r=this,t=n(s.tidy("",function(){var t=r.predictInternal(e);return r.filterBoxes(t[0],t[1],r.classProbThreshold)}),3),a=t[0],o=t[1],i=t[2],l=a.dataSync(),c=o.dataSync(),u=i.dataSync();s.dispose([a,o,i]);var h=this.NonMaxSuppression(l,c,u,this.iouThreshold);return this.createDetectionArray(h)},e.prototype.detect=function(e){return a(this,void 0,void 0,function(){var r,t,a,i,l,c,u;return o(this,function(o){switch(o.label){case 0:return[4,s.nextFrame()];case 1:return o.sent(),r=this.predictInternal(e),[4,this.filterBoxesAsync(r[0],r[1],this.classProbThreshold)];case 2:return t=o.sent(),[4,Promise.all([t[0].data(),t[1].data(),t[2].data()])];case 3:return a=n.apply(void 0,[o.sent(),3]),i=a[0],l=a[1],c=a[2],s.dispose(r),s.dispose(t),u=this.NonMaxSuppression(i,l,c,this.iouThreshold),[2,this.createDetectionArray(u)]}})})},e.prototype.draw=function(e,r){var t=r.getContext("2d"),a=this.labels.length;l.draw(e,t,a)},e.prototype.predictInternal=function(e){var r=this;return s.tidy(function(){var t=n(c.preProcess(e,r.modelSize,r.resizeOption),3),a=t[0],o=t[1],i=t[2],s=r.model.predict(i,{batchSize:1}),l=n(r.postProcessRawPrediction(s),2),u=l[0],h=l[1];return[r.rescaleBoxes(u,a,o),h]})},e.prototype.postProcessRawPrediction=function(e){var r=[];this.isTensorOrTensorArray(e)?r.push(e):e.forEach(function(e){return r.push(e)});for(var t=[],a=[],o=0;o<r.length;o++){for(var i=this.masks[o],l=i.length,c=[],u=0;u<l;u++)c.push(this.anchors[i[u]]);var h=s.tensor(c).reshape([1,1,l,2]),p=this.labels.length,d=r[o].squeeze([0]),b=n(this.processLayer(d,h,this.modelSize,p,this.version),2),f=b[0],m=b[1];t.push(f),a.push(m)}return[s.concat(t,0),s.concat(a,0)]},e.prototype.processLayer=function(e,r,t,a,o){var i=n([e.shape[0],e.shape[1]],2),l=i[0],c=i[1],u=r.shape[2],h=l*c*u,p=s.reshape(e,[l,c,u,a+5]),d=s.sigmoid(p.slice([0,0,0,0],[l,c,u,2])),b=s.exp(p.slice([0,0,0,2],[l,c,u,2])),f=s.sigmoid(p.slice([0,0,0,4],[l,c,u,1])).reshape([h,1]),m=s.softmax(p.slice([0,0,0,5],[l,c,u,a])).reshape([h,a]),g=s.mul(f,m),y=s.range(0,l),k=s.tile(y,[c]),v=s.tile(s.expandDims(y,0),[l,1]).transpose().flatten(),w=s.transpose(s.stack([k,v])).reshape([l,c,1,2]),x=s.reshape(s.tensor1d([l,c]),[1,1,1,2]);return d=s.div(s.add(d,w),x),b=s.mul(b,r),b="v3"===o?s.div(b,s.tensor([t])):s.div(b,x),[this.boxesToCorners(d,b).reshape([h,4]),g]},e.prototype.boxesToCorners=function(e,r){var t=s.scalar(2),a=s.sub(e,s.div(r,t)),o=s.add(e,s.div(r,t)),n=[a.shape[0],a.shape[1],a.shape[2],1];return s.concat([a.slice([0,0,0,1],n),a.slice([0,0,0,0],n),o.slice([0,0,0,1],n),o.slice([0,0,0,0],n)],3)},e.prototype.rescaleBoxes=function(e,r,t){var a=s.scalar(r),o=s.scalar(t),n=s.stack([o,a,o,a]).reshape([1,4]);return e.mul(n)},e.prototype.filterBoxes=function(e,r,t){var a=s.max(r,-1),o=s.argMax(r,-1),n=s.scalar(t),i=s.greaterEqual(a,n),l=s.linspace(0,e.shape[0]-1,e.shape[0]).toInt(),c=s.fill([e.shape[0]],-1,"int32"),u=s.where(i,l,c),h=s.tensor1d(u.dataSync().filter(function(e){return e>=0}));return[e.gather(h),a.gather(h),o.gather(h)]},e.prototype.filterBoxesAsync=function(e,r,t){return void 0===t&&(t=.5),a(this,void 0,void 0,function(){var a,n,i,l,c,u,h,p,d,b,f,m,g,y;return o(this,function(o){switch(o.label){case 0:return a=s.max(r,-1),n=s.argMax(r,-1),i=s.scalar(t),l=s.greaterEqual(a,i),c=s.linspace(0,e.shape[0]-1,e.shape[0]),u=c.toInt(),h=s.fill([e.shape[0]],-1,"int32"),p=s.where(l,u,h),f=(b=s).tensor1d,[4,p.data()];case 1:return d=f.apply(b,[o.sent().filter(function(e){return e>=0})]),m=e.gather(d),g=a.gather(d),y=n.gather(d),s.dispose([a,n,i,l,c,u,h,p,d]),[2,[m,g,y]]}})})},e.prototype.getMaxScoresAndClasses=function(e,r,t){for(var a=[],o=[],n=0;n<r;n++){for(var i=Number.MIN_VALUE,s=-1,l=0;l<t;l++)e[n*t+l]>i&&(i=e[n*t+l],s=l);a[n]=i,o[n]=s}return[a,o]},e.prototype.isTensorOrTensorArray=function(e){return!!e.shape},e.prototype.NonMaxSuppression=function(e,r,t,a){for(var o=[],n=0;n<r.length;n+=1)o.push([[e[4*n],e[4*n+1],e[4*n+2],e[4*n+3]],r[n],t[n]]);var i=o.sort(function(e,r){return r[1]-e[1]}),s=[];for(n=0;n<i.length;n+=1){for(var l=!0,c=0;c<s.length;c+=1){if(this.iou(s[c][0],i[n][0])>a){l=!1;break}}l&&s.push(i[n])}return s},e.prototype.iou=function(e,r){var t=Math.max(e[0],r[0]),a=Math.max(e[1],r[1]),o=Math.min(e[2],r[2]),n=(Math.min(e[3],r[3])-a)*(o-t);return n/((e[2]-e[0])*(e[3]-e[1])+(r[2]-r[0])*(r[3]-r[1])-n)},e.prototype.createFinalBoxes=function(e,r,t,a){for(var o=a.length,n=[],i=0;i<o;i++){for(var s=[],l=0;l<4;l++)s[l]=e[4*a[i]+l];var c=s[0],u=s[1],h=s[2],p=s[3]-u,d=h-c,b=t[a[i]],f={label:this.labels[b],labelIndex:b,score:r[a[i]],x:u,y:c,w:p,h:d};n.push(f)}return n},e.prototype.createDetectionArray=function(e){for(var r=[],t=0;t<e.length;t+=1){var a=n(e[t][0],4),o=a[0],i=a[1],s=a[2],l=a[3],c=e[t][2],u={labelIndex:c,label:this.labels[c],score:e[t][1],x:i,y:o,w:l-i,h:s-o};r.push(u)}return r},e}();r.YOLODetector=u},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.draw=function(e,r,t){r.lineWidth=1.5,r.font="13px Segoe UI",e.forEach(function(e){!function(e,r,t){var a=" "+e.label+" : "+(100*e.score).toFixed(1)+"%",o=function(e,r,t){return"hsla("+function(e,r,t){return 360*(e-r)/(t-r)}(e,r,t)+", 100%, 50%,1)"}(e.labelIndex,0,50);r.strokeStyle=o,r.beginPath(),r.rect(e.x,e.y,e.w,e.h),r.stroke(),r.fillStyle=o,e.y-25>=0?(r.fillRect(e.x-1.5,e.y-1.5,90,-15),r.fillStyle="#000000",r.fillText(a,e.x,e.y-5)):(r.fillRect(e.x-1.5,e.y-1.5,90,20),r.fillStyle="#000000",r.fillText(a,e.x,e.y+12))}(e,r)})}},function(e,r,t){"use strict";function a(e){for(var t in e)r.hasOwnProperty(t)||(r[t]=e[t])}Object.defineProperty(r,"__esModule",{value:!0}),a(t(2)),a(t(11)),a(t(2))},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.darknetImagnetLabels=["kit fox","English setter","Siberian husky","Australian terrier","English springer","grey whale","lesser panda","Egyptian cat","ibex","Persian cat","cougar","gazelle","porcupine","sea lion","malamute","badger","Great Dane","Walker hound","Welsh springer spaniel","whippet","Scottish deerhound","killer whale","mink","African elephant","Weimaraner","soft-coated wheaten terrier","Dandie Dinmont","red wolf","Old English sheepdog","jaguar","otterhound","bloodhound","Airedale","hyena","meerkat","giant schnauzer","titi","three-toed sloth","sorrel","black-footed ferret","dalmatian","black-and-tan coonhound","papillon","skunk","Staffordshire bullterrier","Mexican hairless","Bouvier des Flandres","weasel","miniature poodle","Cardigan","malinois","bighorn","fox squirrel","colobus","tiger cat","Lhasa","impala","coyote","Yorkshire terrier","Newfoundland","brown bear","red fox","Norwegian elkhound","Rottweiler","hartebeest","Saluki","grey fox","schipperke","Pekinese","Brabancon griffon","West Highland white terrier","Sealyham terrier","guenon","mongoose","indri","tiger","Irish wolfhound","wild boar","EntleBucher","zebra","ram","French bulldog","orangutan","basenji","leopard","Bernese mountain dog","Maltese dog","Norfolk terrier","toy terrier","vizsla","cairn","squirrel monkey","groenendael","clumber","Siamese cat","chimpanzee","komondor","Afghan hound","Japanese spaniel","proboscis monkey","guinea pig","white wolf","ice bear","gorilla","borzoi","toy poodle","Kerry blue terrier","ox","Scotch terrier","Tibetan mastiff","spider monkey","Doberman","Boston bull","Greater Swiss Mountain dog","Appenzeller","Shih-Tzu","Irish water spaniel","Pomeranian","Bedlington terrier","warthog","Arabian camel","siamang","miniature schnauzer","collie","golden retriever","Irish terrier","affenpinscher","Border collie","hare","boxer","silky terrier","beagle","Leonberg","German short-haired pointer","patas","dhole","baboon","macaque","Chesapeake Bay retriever","bull mastiff","kuvasz","capuchin","pug","curly-coated retriever","Norwich terrier","flat-coated retriever","hog","keeshond","Eskimo dog","Brittany spaniel","standard poodle","Lakeland terrier","snow leopard","Gordon setter","dingo","standard schnauzer","hamster","Tibetan terrier","Arctic fox","wire-haired fox terrier","basset","water buffalo","American black bear","Angora","bison","howler monkey","hippopotamus","chow","giant panda","American Staffordshire terrier","Shetland sheepdog","Great Pyrenees","Chihuahua","tabby","marmoset","Labrador retriever","Saint Bernard","armadillo","Samoyed","bluetick","redbone","polecat","marmot","kelpie","gibbon","llama","miniature pinscher","wood rabbit","Italian greyhound","lion","cocker spaniel","Irish setter","dugong","Indian elephant","beaver","Sussex spaniel","Pembroke","Blenheim spaniel","Madagascar cat","Rhodesian ridgeback","lynx","African hunting dog","langur","Ibizan hound","timber wolf","cheetah","English foxhound","briard","sloth bear","Border terrier","German shepherd","otter","koala","tusker","echidna","wallaby","platypus","wombat","revolver","umbrella","schooner","soccer ball","accordion","ant","starfish","chambered nautilus","grand piano","laptop","strawberry","airliner","warplane","airship","balloon","space shuttle","fireboat","gondola","speedboat","lifeboat","canoe","yawl","catamaran","trimaran","container ship","liner","pirate","aircraft carrier","submarine","wreck","half track","tank","missile","bobsled","dogsled","bicycle-built-for-two","mountain bike","freight car","passenger car","barrow","shopping cart","motor scooter","forklift","electric locomotive","steam locomotive","amphibian","ambulance","beach wagon","cab","convertible","jeep","limousine","minivan","Model T","racer","sports car","go-kart","golfcart","moped","snowplow","fire engine","garbage truck","pickup","tow truck","trailer truck","moving van","police van","recreational vehicle","streetcar","snowmobile","tractor","mobile home","tricycle","unicycle","horse cart","jinrikisha","oxcart","bassinet","cradle","crib","four-poster","bookcase","china cabinet","medicine chest","chiffonier","table lamp","file","park bench","barber chair","throne","folding chair","rocking chair","studio couch","toilet seat","desk","pool table","dining table","entertainment center","wardrobe","Granny Smith","orange","lemon","fig","pineapple","banana","jackfruit","custard apple","pomegranate","acorn","hip","ear","rapeseed","corn","buckeye","organ","upright","chime","drum","gong","maraca","marimba","steel drum","banjo","cello","violin","harp","acoustic guitar","electric guitar","cornet","French horn","trombone","harmonica","ocarina","panpipe","bassoon","oboe","sax","flute","daisy","yellow lady's slipper","cliff","valley","alp","volcano","promontory","sandbar","coral reef","lakeside","seashore","geyser","hatchet","cleaver","letter opener","plane","power drill","lawn mower","hammer","corkscrew","can opener","plunger","screwdriver","shovel","plow","chain saw","cock","hen","ostrich","brambling","goldfinch","house finch","junco","indigo bunting","robin","bulbul","jay","magpie","chickadee","water ouzel","kite","bald eagle","vulture","great grey owl","black grouse","ptarmigan","ruffed grouse","prairie chicken","peacock","quail","partridge","African grey","macaw","sulphur-crested cockatoo","lorikeet","coucal","bee eater","hornbill","hummingbird","jacamar","toucan","drake","red-breasted merganser","goose","black swan","white stork","black stork","spoonbill","flamingo","American egret","little blue heron","bittern","crane","limpkin","American coot","bustard","ruddy turnstone","red-backed sandpiper","redshank","dowitcher","oystercatcher","European gallinule","pelican","king penguin","albatross","great white shark","tiger shark","hammerhead","electric ray","stingray","barracouta","coho","tench","goldfish","eel","rock beauty","anemone fish","lionfish","puffer","sturgeon","gar","loggerhead","leatherback turtle","mud turtle","terrapin","box turtle","banded gecko","common iguana","American chameleon","whiptail","agama","frilled lizard","alligator lizard","Gila monster","green lizard","African chameleon","Komodo dragon","triceratops","African crocodile","American alligator","thunder snake","ringneck snake","hognose snake","green snake","king snake","garter snake","water snake","vine snake","night snake","boa constrictor","rock python","Indian cobra","green mamba","sea snake","horned viper","diamondback","sidewinder","European fire salamander","common newt","eft","spotted salamander","axolotl","bullfrog","tree frog","tailed frog","whistle","wing","paintbrush","hand blower","oxygen mask","snorkel","loudspeaker","microphone","screen","mouse","electric fan","oil filter","strainer","space heater","stove","guillotine","barometer","rule","odometer","scale","analog clock","digital clock","wall clock","hourglass","sundial","parking meter","stopwatch","digital watch","stethoscope","syringe","magnetic compass","binoculars","projector","sunglasses","loupe","radio telescope","bow","cannon","assault rifle","rifle","projectile","computer keyboard","typewriter keyboard","crane","lighter","abacus","cash machine","slide rule","desktop computer","hand-held computer","notebook","web site","harvester","thresher","printer","slot","vending machine","sewing machine","joystick","switch","hook","car wheel","paddlewheel","pinwheel","potter's wheel","gas pump","carousel","swing","reel","radiator","puck","hard disc","sunglass","pick","car mirror","solar dish","remote control","disk brake","buckle","hair slide","knot","combination lock","padlock","nail","safety pin","screw","muzzle","seat belt","ski","candle","jack-o'-lantern","spotlight","torch","neck brace","pier","tripod","maypole","mousetrap","spider web","trilobite","harvestman","scorpion","black and gold garden spider","barn spider","garden spider","black widow","tarantula","wolf spider","tick","centipede","isopod","Dungeness crab","rock crab","fiddler crab","king crab","American lobster","spiny lobster","crayfish","hermit crab","tiger beetle","ladybug","ground beetle","long-horned beetle","leaf beetle","dung beetle","rhinoceros beetle","weevil","fly","bee","grasshopper","cricket","walking stick","cockroach","mantis","cicada","leafhopper","lacewing","dragonfly","damselfly","admiral","ringlet","monarch","cabbage butterfly","sulphur butterfly","lycaenid","jellyfish","sea anemone","brain coral","flatworm","nematode","conch","snail","slug","sea slug","chiton","sea urchin","sea cucumber","iron","espresso maker","microwave","Dutch oven","rotisserie","toaster","waffle iron","vacuum","dishwasher","refrigerator","washer","Crock Pot","frying pan","wok","caldron","coffeepot","teapot","spatula","altar","triumphal arch","patio","steel arch bridge","suspension bridge","viaduct","barn","greenhouse","palace","monastery","library","apiary","boathouse","church","mosque","stupa","planetarium","restaurant","cinema","home theater","lumbermill","coil","obelisk","totem pole","castle","prison","grocery store","bakery","barbershop","bookshop","butcher shop","confectionery","shoe shop","tobacco shop","toyshop","fountain","cliff dwelling","yurt","dock","brass","megalith","bannister","breakwater","dam","chainlink fence","picket fence","worm fence","stone wall","grille","sliding door","turnstile","mountain tent","scoreboard","honeycomb","plate rack","pedestal","beacon","mashed potato","bell pepper","head cabbage","broccoli","cauliflower","zucchini","spaghetti squash","acorn squash","butternut squash","cucumber","artichoke","cardoon","mushroom","shower curtain","jean","carton","handkerchief","sandal","ashcan","safe","plate","necklace","croquet ball","fur coat","thimble","pajama","running shoe","cocktail shaker","chest","manhole cover","modem","tub","tray","balance beam","bagel","prayer rug","kimono","hot pot","whiskey jug","knee pad","book jacket","spindle","ski mask","beer bottle","crash helmet","bottlecap","tile roof","mask","maillot","Petri dish","football helmet","bathing cap","teddy","holster","pop bottle","photocopier","vestment","crossword puzzle","golf ball","trifle","suit","water tower","feather boa","cloak","red wine","drumstick","shield","Christmas stocking","hoopskirt","menu","stage","bonnet","meat loaf","baseball","face powder","scabbard","sunscreen","beer glass","hen-of-the-woods","guacamole","lampshade","wool","hay","bow tie","mailbag","water jug","bucket","dishrag","soup bowl","eggnog","mortar","trench coat","paddle","chain","swab","mixing bowl","potpie","wine bottle","shoji","bulletproof vest","drilling platform","binder","cardigan","sweatshirt","pot","birdhouse","hamper","ping-pong ball","pencil box","pay-phone","consomme","apron","punching bag","backpack","groom","bearskin","pencil sharpener","broom","mosquito net","abaya","mortarboard","poncho","crutch","Polaroid camera","space bar","cup","racket","traffic light","quill","radio","dough","cuirass","military uniform","lipstick","shower cap","monitor","oscilloscope","mitten","brassiere","French loaf","vase","milk can","rugby ball","paper towel","earthstar","envelope","miniskirt","cowboy hat","trolleybus","perfume","bathtub","hotdog","coral fungus","bullet train","pillow","toilet tissue","cassette","carpenter's kit","ladle","stinkhorn","lotion","hair spray","academic gown","dome","crate","wig","burrito","pill bottle","chain mail","theater curtain","window shade","barrel","washbasin","ballpoint","basketball","bath towel","cowboy boot","gown","window screen","agaric","cellular telephone","nipple","barbell","mailbox","lab coat","fire screen","minibus","packet","maze","pole","horizontal bar","sombrero","pickelhaube","rain barrel","wallet","cassette player","comic book","piggy bank","street sign","bell cote","fountain pen","Windsor tie","volleyball","overskirt","sarong","purse","bolo tie","bib","parachute","sleeping bag","television","swimming trunks","measuring cup","espresso","pizza","breastplate","shopping basket","wooden spoon","saltshaker","chocolate sauce","ballplayer","goblet","gyromitra","stretcher","water bottle","dial telephone","soap dispenser","jersey","school bus","jigsaw puzzle","plastic bag","reflex camera","diaper","Band Aid","ice lolly","velvet","tennis ball","gasmask","doormat","Loafer","ice cream","pretzel","quilt","maillot","tape player","clog","iPod","bolete","scuba diver","pitcher","matchstick","bikini","sock","CD player","lens cap","thatch","vault","beaker","bubble","cheeseburger","parallel bars","flagpole","coffee mug","rubber eraser","stole","carbonara","dumbbell"]},function(e,r,t){"use strict";var a=this&&this.__awaiter||function(e,r,t,a){return new(t||(t=Promise))(function(o,n){function i(e){try{l(a.next(e))}catch(e){n(e)}}function s(e){try{l(a.throw(e))}catch(e){n(e)}}function l(e){e.done?o(e.value):new t(function(r){r(e.value)}).then(i,s)}l((a=a.apply(e,r||[])).next())})},o=this&&this.__generator||function(e,r){var t,a,o,n,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(n){return function(s){return function(n){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,a&&(o=2&n[0]?a.return:n[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,n[1])).done)return o;switch(a=0,o&&(n=[2&n[0],o.value]),n[0]){case 0:case 1:o=n;break;case 4:return i.label++,{value:n[1],done:!1};case 5:i.label++,a=n[1],n=[0];continue;case 7:n=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===n[0]||2===n[0])){i=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){i.label=n[1];break}if(6===n[0]&&i.label<o[1]){i.label=o[1],o=n;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(n);break}o[2]&&i.ops.pop(),i.trys.pop();continue}n=r.call(e,i)}catch(e){n=[6,e],a=0}finally{t=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,s])}}},n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r};Object.defineProperty(r,"__esModule",{value:!0});var i=n(t(0)),s=t(1),l=function(){function e(e){this.modelName=e.modelName,this.modelURL=e.modelURL,this.modelSize=e.modelSize,this.classProbThreshold=e.classProbThreshold,this.topK=e.topK,this.labels=e.labels,this.resizeOption=e.resizeOption}return e.prototype.load=function(){return a(this,void 0,void 0,function(){var e;return o(this,function(r){switch(r.label){case 0:if(null==i)throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");r.label=1;case 1:return r.trys.push([1,3,,4]),e=this,[4,i.loadLayersModel(this.modelURL)];case 2:return e.model=r.sent(),[2,!0];case 3:return r.sent(),[2,!1];case 4:return[2]}})})},e.prototype.cache=function(){return a(this,void 0,void 0,function(){var e;return o(this,function(r){switch(r.label){case 0:return e=i.zeros([this.modelSize,this.modelSize,3]),[4,this.classify(e)];case 1:return r.sent(),i.dispose(e),[2]}})})},e.prototype.dispose=function(){this.model&&this.model.dispose()},e.prototype.classify=function(e){return a(this,void 0,void 0,function(){var r,t,a,n,s,l=this;return o(this,function(o){switch(o.label){case 0:return[4,i.nextFrame()];case 1:return o.sent(),r=i.tidy(function(){var r=l.classifyInternal(e),t=i.softmax(r);return i.topk(t,l.topK,!0)}),t=r.values,a=r.indices,[4,t.data()];case 2:return n=o.sent(),[4,a.data()];case 3:return s=o.sent(),i.dispose({values:t,indices:a}),[2,this.createClassifications(n,s)]}})})},e.prototype.classifySync=function(e){var r=this,t=i.tidy(function(){var t=r.classifyInternal(e),a=i.softmax(t);return i.topk(a,r.topK,!0)}),a=t.values,o=t.indices,n=a.dataSync(),s=o.dataSync();return i.dispose({values:a,indices:o}),this.createClassifications(n,s)},e.prototype.classifyInternal=function(e){var r=this;return i.tidy(function(){var t=s.preProcess(e,r.modelSize,r.resizeOption);return r.model.predict(t[2])})},e.prototype.createClassifications=function(e,r){for(var t=[],a=0;a<r.length;a++){var o={label:this.labels[r[a]],labelIndex:r[a],score:e[a]};t.push(o)}return t},e}();r.DarknetClassifier=l}])});
//# sourceMappingURL=yolo.js.map