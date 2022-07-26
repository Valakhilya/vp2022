function t390_initPopup(recid){$('#rec'+recid).attr('data-animationappear','off');$('#rec'+recid).css('opacity','1');var el=$('#rec'+recid).find('.t-popup'),hook=el.attr('data-tooltip-hook'),analitics=el.attr('data-track-popup');el.bind('scroll',t_throttle(function(){if(window.lazy==='y'||$('#allrecords').attr('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}},200));if(hook!==''){$('.r').on('click','a[href="'+hook+'"]',function(e){t390_showPopup(recid);t390_resizePopup(recid);e.preventDefault();if(window.lazy==='y'||$('#allrecords').attr('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}
if(analitics>''){var virtTitle=hook;if(virtTitle.substring(0,7)=='#popup:'){virtTitle=virtTitle.substring(7)}
Tilda.sendEventToStatistics(analitics,virtTitle)}})}
var curPath=window.location.pathname;var curFullPath=window.location.origin+curPath;var isAndroid=/(android)/i.test(navigator.userAgent);if(isAndroid){$('#rec'+recid).find('a[href^="#"]:not([href="#"],[href^="#price"],[href^="#popup"],[href^="#prodpopup"],[href^="#order"],a[href^="#!"]),a[href^="'+curPath+'#"]:not(a[href*="#!/tproduct/"],a[href*="#!/tab/"],[href*="#popup"]),a[href^="'+curFullPath+'#"]:not(a[href*="#!/tproduct/"],a[href*="#!/tab/"],[href*="#popup"])').click(function(e){e.preventDefault();var hash=this.hash.trim();if(window.location.hash){setTimeout(function(){window.location.href=hash},50)}})}}
function t390_showPopup(recid){var el=$('#rec'+recid),popup=el.find('.t-popup');popup.css('display','block');setTimeout(function(){popup.find('.t-popup__container').addClass('t-popup__container-animated');popup.addClass('t-popup_show')},50);$('body').addClass('t-body_popupshowed');el.find('.t-popup').mousedown(function(e){var windowWidth=$(window).width();var maxScrollBarWidth=17;var windowWithoutScrollBar=windowWidth-maxScrollBarWidth;if(e.clientX>windowWithoutScrollBar){return}
if(e.target==this){t390_closePopup(recid)}});el.find('.t-popup__close').click(function(e){t390_closePopup(recid)});el.find('a[href*="#"]').click(function(e){var url=$(this).attr('href');if(!url||url.substring(0,7)!='#price:'){t390_closePopup(recid);if(!url||url.substring(0,7)=='#popup:'){setTimeout(function(){$('body').addClass('t-body_popupshowed')},300)}}});$(document).keydown(function(e){if(e.keyCode==27){t390_closePopup(recid)}})}
function t390_closePopup(recid){$('body').removeClass('t-body_popupshowed');$('#rec'+recid+' .t-popup').removeClass('t-popup_show');setTimeout(function(){$('.t-popup').not('.t-popup_show').css('display','none')},300)}
function t390_resizePopup(recid){var el=$("#rec"+recid),div=el.find(".t-popup__container").height(),win=$(window).height()-120,popup=el.find(".t-popup__container");if(div>win){popup.addClass('t-popup__container-static')}else{popup.removeClass('t-popup__container-static')}}
function t390_sendPopupEventToStatistics(popupname){var virtPage='/tilda/popup/';var virtTitle='Popup: ';if(popupname.substring(0,7)=='#popup:'){popupname=popupname.substring(7)}
virtPage+=popupname;virtTitle+=popupname;if(window.Tilda&&typeof Tilda.sendEventToStatistics=='function'){Tilda.sendEventToStatistics(virtPage,virtTitle,'',0)}else{if(ga){if(window.mainTracker!='tilda'){ga('send',{'hitType':'pageview','page':virtPage,'title':virtTitle})}}
if(window.mainMetrika>''&&window[window.mainMetrika]){window[window.mainMetrika].hit(virtPage,{title:virtTitle,referer:window.location.href})}}}
function t396_init(recid){var data='';var res=t396_detectResolution();var ab=$('#rec'+recid).find('.t396__artboard');window.tn_window_width=$(window).width();window.tn_scale_factor=Math.round((window.tn_window_width/res)*100)/100;t396_initTNobj();t396_switchResolution(res);t396_updateTNobj();t396_artboard_build(data,recid);$(window).resize(function(){tn_console('>>>> t396: Window on Resize event >>>>');t396_waitForFinalEvent(function(){if($isMobile){var ww=$(window).width();if(ww!=window.tn_window_width){t396_doResize(recid)}}else{t396_doResize(recid)}},500,'resizeruniqueid'+recid)});$(window).on("orientationchange",function(){tn_console('>>>> t396: Orient change event >>>>');t396_waitForFinalEvent(function(){t396_doResize(recid)},600,'orientationuniqueid'+recid)});$(window).on('load',function(){t396_allelems__renderView(ab);if(typeof t_lazyload_update==='function'&&ab.css('overflow')==='auto'){ab.bind('scroll',t_throttle(function(){if(window.lazy==='y'||$('#allrecords').attr('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}},500))}if(window.location.hash!==''&&ab.css('overflow')==='visible'){ab.css('overflow','hidden');setTimeout(function(){ab.css('overflow','visible')},1)}});var rec=$('#rec'+recid);if(rec.attr('data-connect-with-tab')=='yes'){rec.find('.t396').bind('displayChanged',function(){var ab=rec.find('.t396__artboard');t396_allelems__renderView(ab)})}if(isSafari)rec.find('.t396').addClass('t396_safari');var isScaled=t396_ab__getFieldValue(ab,'upscale')==='window';var isTildaModeEdit=$('#allrecords').attr('data-tilda-mode')=='edit';if(isScaled&&!isTildaModeEdit)t396_scaleBlock(recid)}function t396_getRotateValue(matrix){console.log(matrix);var values=matrix.split('(')[1].split(')')[0].split(',');var a=values[0];var b=values[1];var c=values[2];var d=values[3];var scale=Math.sqrt(a*a+b*b);var sin=b/scale;var angle=Math.round(Math.atan2(b,a)*(180/Math.PI));return angle}function t396_scaleBlock(recid){var isFirefox=navigator.userAgent.search("Firefox")!==-1;var res=t396_detectResolution();var rec=$('#rec'+recid);var $ab=rec.find('.t396__artboard');var abWidth=$ab.width();var updatedBlockHeight=Math.floor($ab.height()*window.tn_scale_factor);var ab_height_vh=t396_ab__getFieldValue($ab,'height_vh');window.tn_scale_offset=(abWidth*window.tn_scale_factor-abWidth)/2;if(ab_height_vh!=''){var ab_min_height=t396_ab__getFieldValue($ab,'height');var ab_max_height=t396_ab__getHeight($ab);var scaledMinHeight=ab_min_height*window.tn_scale_factor;updatedBlockHeight=(scaledMinHeight>=ab_max_height)?scaledMinHeight:ab_max_height}$ab.addClass('t396__artboard_scale');var scaleStr=isFirefox?('transform: scale('+window.tn_scale_factor+') !important;'):('zoom: '+window.tn_scale_factor+';');var styleStr='<style class="t396__scale-style">'+'.t-rec#rec'+recid+' { overflow: visible; }'+'#rec'+recid+' .t396__carrier,'+'#rec'+recid+' .t396__filter,'+'#rec'+recid+' .t396__artboard {'+'height: '+updatedBlockHeight+'px !important;'+'width: 100vw !important;'+'max-width: 100%;'+'}'+'<style>';$ab.append(styleStr);rec.find('.t396__elem').each(function(){var $el=$(this);var containerProp=t396_elem__getFieldValue($el,'container');if(containerProp==='grid'){if(isFirefox){var scaleProp='scale('+window.tn_scale_factor+')';var transformMatrix=$el.find('.tn-atom').css('transform');var rotatation=(transformMatrix&&transformMatrix!=='none')?t396_getRotateValue(transformMatrix):null;if(rotatation){$el.find('.tn-atom').css('transform-origin','center');scaleProp=scaleProp+' rotate('+rotatation+'deg)'}$el.find('.tn-atom').css('transform',scaleProp)}else{$el.css('zoom',window.tn_scale_factor);if($el.attr('data-elem-type')==='text'&&res<1200)$el.find('.tn-atom').css('-webkit-text-size-adjust','auto');$el.find('.tn-atom').css('transform-origin','center')}}})}function t396_doResize(recid){var isFirefox=navigator.userAgent.search("Firefox")!==-1;var ww;var rec=$('#rec'+recid);if($isMobile){ww=$(window).width()}else{ww=window.innerWidth}var res=t396_detectResolution();rec.find('.t396__scale-style').remove();if(!isFirefox){rec.find('.t396__elem').css('zoom','');rec.find('.t396__elem .tn-atom').css('transform-origin','')}var ab=rec.find('.t396__artboard');var abWidth=ab.width();window.tn_window_width=ww;window.tn_scale_factor=Math.round((window.tn_window_width/res)*100)/100;window.tn_scale_offset=(abWidth*window.tn_scale_factor-abWidth)/2;t396_switchResolution(res);t396_updateTNobj();t396_ab__renderView(ab);t396_allelems__renderView(ab);var isTildaModeEdit=$('#allrecords').attr('data-tilda-mode')=='edit';var isScaled=t396_ab__getFieldValue(ab,'upscale')==='window';if(isScaled&&!isTildaModeEdit)t396_scaleBlock(recid)}function t396_detectResolution(){var ww;if($isMobile){ww=$(window).width()}else{ww=window.innerWidth}var res;res=1200;if(ww<1200){res=960}if(ww<960){res=640}if(ww<640){res=480}if(ww<480){res=320}return(res)}function t396_initTNobj(){tn_console('func: initTNobj');window.tn={};window.tn.canvas_min_sizes=["320","480","640","960","1200"];window.tn.canvas_max_sizes=["480","640","960","1200",""];window.tn.ab_fields=["height","width","bgcolor","bgimg","bgattachment","bgposition","filteropacity","filtercolor","filteropacity2","filtercolor2","height_vh","valign"]}function t396_updateTNobj(){tn_console('func: updateTNobj');if(typeof window.zero_window_width_hook!='undefined'&&window.zero_window_width_hook=='allrecords'&&$('#allrecords').length){window.tn.window_width=parseInt($('#allrecords').width())}else{window.tn.window_width=parseInt($(window).width())}if($isMobile){window.tn.window_height=parseInt($(window).height())}else{window.tn.window_height=parseInt(window.innerHeight)}if(window.tn.curResolution==1200){window.tn.canvas_min_width=1200;window.tn.canvas_max_width=window.tn.window_width}if(window.tn.curResolution==960){window.tn.canvas_min_width=960;window.tn.canvas_max_width=1200}if(window.tn.curResolution==640){window.tn.canvas_min_width=640;window.tn.canvas_max_width=960}if(window.tn.curResolution==480){window.tn.canvas_min_width=480;window.tn.canvas_max_width=640}if(window.tn.curResolution==320){window.tn.canvas_min_width=320;window.tn.canvas_max_width=480}window.tn.grid_width=window.tn.canvas_min_width;window.tn.grid_offset_left=parseFloat((window.tn.window_width-window.tn.grid_width)/2)}var t396_waitForFinalEvent=(function(){var timers={};return function(callback,ms,uniqueId){if(!uniqueId){uniqueId="Don't call this twice without a uniqueId"}if(timers[uniqueId]){clearTimeout(timers[uniqueId])}timers[uniqueId]=setTimeout(callback,ms)}})();function t396_switchResolution(res,resmax){tn_console('func: switchResolution');if(typeof resmax=='undefined'){if(res==1200)resmax='';if(res==960)resmax=1200;if(res==640)resmax=960;if(res==480)resmax=640;if(res==320)resmax=480}window.tn.curResolution=res;window.tn.curResolution_max=resmax}function t396_artboard_build(data,recid){tn_console('func: t396_artboard_build. Recid:'+recid);tn_console(data);var ab=$('#rec'+recid).find('.t396__artboard');t396_ab__renderView(ab);ab.find('.tn-elem').each(function(){var item=$(this);if(item.attr('data-elem-type')=='text'){t396_addText(ab,item)}if(item.attr('data-elem-type')=='image'){t396_addImage(ab,item)}if(item.attr('data-elem-type')=='shape'){t396_addShape(ab,item)}if(item.attr('data-elem-type')=='button'){t396_addButton(ab,item)}if(item.attr('data-elem-type')=='video'){t396_addVideo(ab,item)}if(item.attr('data-elem-type')=='html'){t396_addHtml(ab,item)}if(item.attr('data-elem-type')=='tooltip'){t396_addTooltip(ab,item)}if(item.attr('data-elem-type')=='form'){t396_addForm(ab,item)}if(item.attr('data-elem-type')=='gallery'){t396_addGallery(ab,item)}});$('#rec'+recid).find('.t396__artboard').removeClass('rendering').addClass('rendered');if(ab.attr('data-artboard-ovrflw')=='visible'){$('#allrecords').css('overflow','hidden')}if($isMobile){$('#rec'+recid).append('<style>@media only screen and (min-width:1366px) and (orientation:landscape) and (-webkit-min-device-pixel-ratio:2) {.t396__carrier {background-attachment:scroll!important;}}</style>')}}function t396_ab__renderView(ab){var fields=window.tn.ab_fields;for(var i=0;i<fields.length;i++){t396_ab__renderViewOneField(ab,fields[i])}var ab_min_height=t396_ab__getFieldValue(ab,'height');var ab_max_height=t396_ab__getHeight(ab);var isTildaModeEdit=$('#allrecords').attr('data-tilda-mode')=='edit';var isScaled=t396_ab__getFieldValue(ab,'upscale')==='window';var ab_height_vh=t396_ab__getFieldValue(ab,'height_vh');if(isScaled&&!isTildaModeEdit&&ab_height_vh!='')var scaledMinHeight=parseInt(ab_min_height,10)*window.tn_scale_factor;var offset_top=0;if(ab_min_height==ab_max_height||(scaledMinHeight&&scaledMinHeight>=ab_max_height)){offset_top=0}else{var ab_valign=t396_ab__getFieldValue(ab,'valign');if(ab_valign=='top'){offset_top=0}else if(ab_valign=='center'){if(scaledMinHeight){offset_top=parseFloat((ab_max_height-scaledMinHeight)/2).toFixed(1)}else{offset_top=parseFloat((ab_max_height-ab_min_height)/2).toFixed(1)}}else if(ab_valign=='bottom'){if(scaledMinHeight){offset_top=parseFloat((ab_max_height-scaledMinHeight)).toFixed(1)}else{offset_top=parseFloat((ab_max_height-ab_min_height)).toFixed(1)}}else if(ab_valign=='stretch'){offset_top=0;ab_min_height=ab_max_height}else{offset_top=0}}ab.attr('data-artboard-proxy-min-offset-top',offset_top);ab.attr('data-artboard-proxy-min-height',ab_min_height);ab.attr('data-artboard-proxy-max-height',ab_max_height);var filter=ab.find('.t396__filter');var carrier=ab.find('.t396__carrier');var abHeightVh=t396_ab__getFieldValue(ab,'height_vh');abHeightVh=parseFloat(abHeightVh);if(window.isMobile&&abHeightVh){var height=document.documentElement.clientHeight*parseFloat(abHeightVh/100);ab.css('height',height);filter.css('height',height);carrier.css('height',height)}}function t396_addText(ab,el){tn_console('func: addText');var fields_str='top,left,width,container,axisx,axisy,widthunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el)}function t396_addImage(ab,el){tn_console('func: addImage');var fields_str='img,width,filewidth,fileheight,top,left,container,axisx,axisy,widthunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el);el.find('img').on("load",function(){t396_elem__renderViewOneField(el,'top');if(typeof $(this).attr('src')!='undefined'&&$(this).attr('src')!=''){setTimeout(function(){t396_elem__renderViewOneField(el,'top')},2000)}}).each(function(){if(this.complete)$(this).trigger('load')});el.find('img').on('tuwidget_done',function(e,file){t396_elem__renderViewOneField(el,'top')})}function t396_addShape(ab,el){tn_console('func: addShape');var fields_str='width,height,top,left,';fields_str+='container,axisx,axisy,widthunits,heightunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el)}function t396_addButton(ab,el){tn_console('func: addButton');var fields_str='top,left,width,height,container,axisx,axisy,caption,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el);return(el)}function t396_addVideo(ab,el){tn_console('func: addVideo');var fields_str='width,height,top,left,';fields_str+='container,axisx,axisy,widthunits,heightunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el);var viel=el.find('.tn-atom__videoiframe');var viatel=el.find('.tn-atom');viatel.css('background-color','#000');var vihascover=viatel.attr('data-atom-video-has-cover');if(typeof vihascover=='undefined'){vihascover=''}if(vihascover=='y'){viatel.click(function(){var viifel=viel.find('iframe');if(viifel.length){var foo=viifel.attr('data-original');viifel.attr('src',foo)}viatel.css('background-image','none');viatel.find('.tn-atom__video-play-link').css('display','none')})}var autoplay=t396_elem__getFieldValue(el,'autoplay');var showinfo=t396_elem__getFieldValue(el,'showinfo');var loop=t396_elem__getFieldValue(el,'loop');var mute=t396_elem__getFieldValue(el,'mute');var startsec=t396_elem__getFieldValue(el,'startsec');var endsec=t396_elem__getFieldValue(el,'endsec');var tmode=$('#allrecords').attr('data-tilda-mode');var url='';var viyid=viel.attr('data-youtubeid');if(typeof viyid!='undefined'&&viyid!=''){url='//www.youtube.com/embed/';url+=viyid+'?rel=0&fmt=18&html5=1';url+='&showinfo='+(showinfo=='y'?'1':'0');if(loop=='y'){url+='&loop=1&playlist='+viyid}if(startsec>0){url+='&start='+startsec}if(endsec>0){url+='&end='+endsec}if(mute=='y'){url+='&mute=1'}if(vihascover=='y'){url+='&autoplay=1';var instFlag='y';var iframeClass='';if(autoplay=='y'&&mute=='y'&&window.lazy=='y'){instFlag='lazy';iframeClass=' class="t-iframe"'}viel.html('<iframe id="youtubeiframe"'+iframeClass+' width="100%" height="100%" data-original="'+url+'" frameborder="0" allowfullscreen data-flag-inst="'+instFlag+'"></iframe>');if(autoplay=='y'&&mute=='y'&&window.lazy=='y'){el.append('<script>lazyload_iframe = new LazyLoad({elements_selector: ".t-iframe"});<\/script>')}if(autoplay=='y'&&mute=='y'){viatel.trigger('click')}}else{if(typeof tmode!='undefined'&&tmode=='edit'){}else{if(autoplay=='y'){url+='&autoplay=1'}}if(window.lazy=='y'){viel.html('<iframe id="youtubeiframe" class="t-iframe" width="100%" height="100%" data-original="'+url+'" frameborder="0" allowfullscreen data-flag-inst="lazy"></iframe>');el.append('<script>lazyload_iframe = new LazyLoad({elements_selector: ".t-iframe"});<\/script>')}else{viel.html('<iframe id="youtubeiframe" width="100%" height="100%" src="'+url+'" frameborder="0" allowfullscreen data-flag-inst="y"></iframe>')}}}var vivid=viel.attr('data-vimeoid');if(typeof vivid!='undefined'&&vivid>0){url='//player.vimeo.com/video/';url+=vivid+'?color=ffffff&badge=0';if(showinfo=='y'){url+='&title=1&byline=1&portrait=1'}else{url+='&title=0&byline=0&portrait=0'}if(loop=='y'){url+='&loop=1'}if(mute=='y'){url+='&muted=1'}if(vihascover=='y'){url+='&autoplay=1';viel.html('<iframe data-original="'+url+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')}else{if(typeof tmode!='undefined'&&tmode=='edit'){}else{if(autoplay=='y'){url+='&autoplay=1'}}if(window.lazy=='y'){viel.html('<iframe class="t-iframe" data-original="'+url+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');el.append('<script>lazyload_iframe = new LazyLoad({elements_selector: ".t-iframe"});<\/script>')}else{viel.html('<iframe src="'+url+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')}}}}function t396_addHtml(ab,el){tn_console('func: addHtml');var fields_str='width,height,top,left,';fields_str+='container,axisx,axisy,widthunits,heightunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el)}function t396_addTooltip(ab,el){tn_console('func: addTooltip');var fields_str='width,height,top,left,';fields_str+='container,axisx,axisy,widthunits,heightunits,leftunits,topunits,tipposition';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el);var pinEl=el.find('.tn-atom__pin');var tipEl=el.find('.tn-atom__tip');var tipopen=el.attr('data-field-tipopen-value');if(isMobile||(typeof tipopen!='undefined'&&tipopen=='click')){t396_setUpTooltip_mobile(el,pinEl,tipEl)}else{t396_setUpTooltip_desktop(el,pinEl,tipEl)}setTimeout(function(){$('.tn-atom__tip-img').each(function(){var foo=$(this).attr('data-tipimg-original');if(typeof foo!='undefined'&&foo!=''){$(this).attr('src',foo)}})},3000)}function t396_addForm(ab,el){tn_console('func: addForm');var fields_str='width,top,left,';fields_str+='inputs,container,axisx,axisy,widthunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el)}function t396_addGallery(ab,el){tn_console('func: addForm');var fields_str='width,height,top,left,';fields_str+='imgs,container,axisx,axisy,widthunits,heightunits,leftunits,topunits';var fields=fields_str.split(',');el.attr('data-fields',fields_str);t396_elem__renderView(el)}function t396_elem__setFieldValue(el,prop,val,flag_render,flag_updateui,res){if(res=='')res=window.tn.curResolution;if(res<1200&&prop!='zindex'){el.attr('data-field-'+prop+'-res-'+res+'-value',val)}else{el.attr('data-field-'+prop+'-value',val)}if(flag_render=='render')elem__renderViewOneField(el,prop);if(flag_updateui=='updateui')panelSettings__updateUi(el,prop,val)}function t396_elem__getFieldValue(el,prop){var res=window.tn.curResolution;var r;if(res<1200){if(res==960){r=el.attr('data-field-'+prop+'-res-960-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-value')}}if(res==640){r=el.attr('data-field-'+prop+'-res-640-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-960-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-value')}}}if(res==480){r=el.attr('data-field-'+prop+'-res-480-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-640-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-960-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-value')}}}}if(res==320){r=el.attr('data-field-'+prop+'-res-320-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-480-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-640-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-res-960-value');if(typeof r=='undefined'){r=el.attr('data-field-'+prop+'-value')}}}}}}else{r=el.attr('data-field-'+prop+'-value')}return(r)}function t396_elem__renderView(el){tn_console('func: elem__renderView');var fields=el.attr('data-fields');if(!fields){return!1}fields=fields.split(',');for(var i=0;i<fields.length;i++){t396_elem__renderViewOneField(el,fields[i])}}function t396_elem__renderViewOneField(el,field){var value=t396_elem__getFieldValue(el,field);if(field=='left'){value=t396_elem__convertPosition__Local__toAbsolute(el,field,value);el.css('left',parseFloat(value).toFixed(1)+'px')}if(field=='top'){var ab=el.parents('.t396__artboard');value=t396_elem__convertPosition__Local__toAbsolute(el,field,value);el.css('top',parseFloat(value).toFixed(1)+'px')}if(field=='width'){value=t396_elem__getWidth(el,value);el.css('width',parseFloat(value).toFixed(1)+'px');var eltype=el.attr('data-elem-type');if(eltype=='tooltip'){var pinSvgIcon=el.find('.tn-atom__pin-icon');if(pinSvgIcon.length>0){var pinSize=parseFloat(value).toFixed(1)+'px';pinSvgIcon.css({'width':pinSize,'height':pinSize})}el.css('height',parseInt(value).toFixed(1)+'px')}if(eltype=='gallery'){var borderWidth=t396_elem__getFieldValue(el,'borderwidth');var borderStyle=t396_elem__getFieldValue(el,'borderstyle');if(borderStyle=='none'||typeof borderStyle=='undefined'||typeof borderWidth=='undefined'||borderWidth=='')borderWidth=0;value=value*1-borderWidth*2;el.css('width',parseFloat(value).toFixed(1)+'px');el.find('.t-slds__main').css('width',parseFloat(value).toFixed(1)+'px');el.find('.tn-atom__slds-img').css('width',parseFloat(value).toFixed(1)+'px')}}if(field=='height'){var eltype=el.attr('data-elem-type');if(eltype=='tooltip'){return}value=t396_elem__getHeight(el,value);el.css('height',parseFloat(value).toFixed(1)+'px');if(eltype==='gallery'){var borderWidth=t396_elem__getFieldValue(el,'borderwidth');var borderStyle=t396_elem__getFieldValue(el,'borderstyle');if(borderStyle=='none'||typeof borderStyle=='undefined'||typeof borderWidth=='undefined'||borderWidth=='')borderWidth=0;value=value*1-borderWidth*2;el.css('height',parseFloat(value).toFixed(1)+'px');el.find('.tn-atom__slds-img').css('height',parseFloat(value).toFixed(1)+'px');el.find('.t-slds__main').css('height',parseFloat(value).toFixed(1)+'px')}}if(field=='container'){t396_elem__renderViewOneField(el,'left');t396_elem__renderViewOneField(el,'top')}if(field=='width'||field=='height'||field=='fontsize'||field=='fontfamily'||field=='letterspacing'||field=='fontweight'||field=='img'){t396_elem__renderViewOneField(el,'left');t396_elem__renderViewOneField(el,'top')}if(field=='inputs'){value=el.find('.tn-atom__inputs-textarea').val();try{t_zeroForms__renderForm(el,value)}catch(err){}}}function t396_elem__convertPosition__Local__toAbsolute(el,field,value){var ab=el.parents('.t396__artboard');var blockVAlign=t396_ab__getFieldValue(ab,'valign');var isScaled=t396_ab__getFieldValue(ab,'upscale')==='window';var isTildaModeEdit=$('#allrecords').attr('data-tilda-mode')=='edit';var isFirefox=navigator.userAgent.search("Firefox")!==-1;var isScaledFirefox=!isTildaModeEdit&&isScaled&&isFirefox;var isScaledNotFirefox=!isTildaModeEdit&&isScaled&&!isFirefox;var el_axisy=t396_elem__getFieldValue(el,'axisy');value=parseInt(value);if(field=='left'){var el_container,offset_left,el_container_width,el_width;var container=t396_elem__getFieldValue(el,'container');if(container==='grid'){el_container='grid';offset_left=window.tn.grid_offset_left;el_container_width=window.tn.grid_width}else{el_container='window';offset_left=0;el_container_width=window.tn.window_width}var el_leftunits=t396_elem__getFieldValue(el,'leftunits');if(el_leftunits==='%'){value=t396_roundFloat(el_container_width*value/100)}if(!isTildaModeEdit&&isScaled){if(container==='grid'&&isFirefox)value=value*window.tn_scale_factor}else{value=offset_left+value}var el_axisx=t396_elem__getFieldValue(el,'axisx');if(el_axisx==='center'){el_width=t396_elem__getWidth(el);if(isScaledFirefox&&el_container!=='window'){el_container_width*=window.tn_scale_factor;el_width*=window.tn_scale_factor}value=el_container_width/2-el_width/2+value}if(el_axisx==='right'){el_width=t396_elem__getWidth(el);if(isScaledFirefox&&el_container!=='window'){el_container_width*=window.tn_scale_factor;el_width*=window.tn_scale_factor}value=el_container_width-el_width+value}}if(field==='top'){var el_container,offset_top,el_container_height,el_height;var ab=el.parent();var container=t396_elem__getFieldValue(el,'container');if(container==='grid'){el_container='grid';offset_top=parseFloat(ab.attr('data-artboard-proxy-min-offset-top'));el_container_height=parseFloat(ab.attr('data-artboard-proxy-min-height'))}else{el_container='window';offset_top=0;el_container_height=parseFloat(ab.attr('data-artboard-proxy-max-height'))}var el_topunits=t396_elem__getFieldValue(el,'topunits');if(el_topunits==='%'){value=(el_container_height*(value/100))}if(isScaledFirefox&&el_container!=='window'){value*=window.tn_scale_factor}if(isScaledNotFirefox&&el_container!=='window'){offset_top=blockVAlign==='stretch'?0:(offset_top/window.tn_scale_factor)}value=offset_top+value;var ab_height_vh=t396_ab__getFieldValue(ab,'height_vh');var ab_min_height=t396_ab__getFieldValue(ab,'height');var ab_max_height=t396_ab__getHeight(ab);if(isScaled&&!isTildaModeEdit&&ab_height_vh!=''){var scaledMinHeight=parseInt(ab_min_height,10)*window.tn_scale_factor}if(el_axisy==='center'){el_height=t396_elem__getHeight(el);if(el.attr('data-elem-type')==='image'){el_width=t396_elem__getWidth(el);var fileWidth=t396_elem__getFieldValue(el,'filewidth');var fileHeight=t396_elem__getFieldValue(el,'fileheight');if(fileWidth&&fileHeight){var ratio=parseInt(fileWidth)/parseInt(fileHeight);el_height=el_width/ratio}}if(isScaledFirefox&&el_container!=='window'){if(blockVAlign!=='stretch'){el_container_height=el_container_height*window.tn_scale_factor}else{if(scaledMinHeight){el_container_height=scaledMinHeight>ab_max_height?scaledMinHeight:ab_max_height}else{el_container_height=ab.height()}}el_height*=window.tn_scale_factor}if(!isTildaModeEdit&&isScaled&&!isFirefox&&el_container!=='window'&&blockVAlign==='stretch'){if(scaledMinHeight){el_container_height=scaledMinHeight>ab_max_height?scaledMinHeight:ab_max_height}else{el_container_height=ab.height()}el_container_height=el_container_height/window.tn_scale_factor}value=el_container_height/2-el_height/2+value}if(el_axisy==='bottom'){el_height=t396_elem__getHeight(el);if(el.attr('data-elem-type')==='image'){el_width=t396_elem__getWidth(el);var fileWidth=t396_elem__getFieldValue(el,'filewidth');var fileHeight=t396_elem__getFieldValue(el,'fileheight');if(fileWidth&&fileHeight){var ratio=parseInt(fileWidth)/parseInt(fileHeight);el_height=el_width/ratio}}if(isScaledFirefox&&el_container!=='window'){if(blockVAlign!=='stretch'){el_container_height=el_container_height*window.tn_scale_factor}else{if(scaledMinHeight){el_container_height=scaledMinHeight>ab_max_height?scaledMinHeight:ab_max_height}else{el_container_height=ab.height()}}el_height*=window.tn_scale_factor}if(!isTildaModeEdit&&isScaled&&!isFirefox&&el_container!=='window'&&blockVAlign==='stretch'){if(scaledMinHeight){el_container_height=scaledMinHeight>ab_max_height?scaledMinHeight:ab_max_height}else{el_container_height=ab.height()}el_container_height=el_container_height/window.tn_scale_factor}value=el_container_height-el_height+value}}return(value)}function t396_ab__setFieldValue(ab,prop,val,res){if(res=='')res=window.tn.curResolution;if(res<1200){ab.attr('data-artboard-'+prop+'-res-'+res,val)}else{ab.attr('data-artboard-'+prop,val)}}function t396_ab__getFieldValue(ab,prop){var res=window.tn.curResolution;var r;if(res<1200){if(res==960){r=ab.attr('data-artboard-'+prop+'-res-960');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'')}}if(res==640){r=ab.attr('data-artboard-'+prop+'-res-640');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-960');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'')}}}if(res==480){r=ab.attr('data-artboard-'+prop+'-res-480');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-640');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-960');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'')}}}}if(res==320){r=ab.attr('data-artboard-'+prop+'-res-320');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-480');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-640');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'-res-960');if(typeof r=='undefined'){r=ab.attr('data-artboard-'+prop+'')}}}}}}else{r=ab.attr('data-artboard-'+prop)}return(r)}function t396_ab__renderViewOneField(ab,field){var value=t396_ab__getFieldValue(ab,field)}function t396_allelems__renderView(ab){tn_console('func: allelems__renderView: abid:'+ab.attr('data-artboard-recid'));ab.find(".tn-elem").each(function(){t396_elem__renderView($(this))})}function t396_ab__filterUpdate(ab){var filter=ab.find('.t396__filter');var c1=filter.attr('data-filtercolor-rgb');var c2=filter.attr('data-filtercolor2-rgb');var o1=filter.attr('data-filteropacity');var o2=filter.attr('data-filteropacity2');if((typeof c2=='undefined'||c2=='')&&(typeof c1!='undefined'&&c1!='')){filter.css("background-color","rgba("+c1+","+o1+")")}else if((typeof c1=='undefined'||c1=='')&&(typeof c2!='undefined'&&c2!='')){filter.css("background-color","rgba("+c2+","+o2+")")}else if(typeof c1!='undefined'&&typeof c2!='undefined'&&c1!=''&&c2!=''){filter.css({background:"-webkit-gradient(linear, left top, left bottom, from(rgba("+c1+","+o1+")), to(rgba("+c2+","+o2+")) )"})}else{filter.css("background-color",'transparent')}}function t396_ab__getHeight(ab,ab_height){if(typeof ab_height=='undefined')ab_height=t396_ab__getFieldValue(ab,'height');ab_height=parseFloat(ab_height);var ab_height_vh=t396_ab__getFieldValue(ab,'height_vh');if(ab_height_vh!=''){ab_height_vh=parseFloat(ab_height_vh);if(isNaN(ab_height_vh)===!1){var ab_height_vh_px=parseFloat(window.tn.window_height*parseFloat(ab_height_vh/100));if(ab_height<ab_height_vh_px){ab_height=ab_height_vh_px}}}return(ab_height)}function t396_hex2rgb(hexStr){var hex=parseInt(hexStr.substring(1),16);var r=(hex&0xff0000)>>16;var g=(hex&0x00ff00)>>8;var b=hex&0x0000ff;return[r,g,b]}String.prototype.t396_replaceAll=function(search,replacement){var target=this;return target.replace(new RegExp(search,'g'),replacement)};function t396_elem__getWidth(el,value){if(typeof value=='undefined')value=parseFloat(t396_elem__getFieldValue(el,'width'));var el_widthunits=t396_elem__getFieldValue(el,'widthunits');if(el_widthunits=='%'){var el_container=t396_elem__getFieldValue(el,'container');if(el_container=='window'){value=parseFloat(window.tn.window_width*parseFloat(parseInt(value)/100))}else{value=parseFloat(window.tn.grid_width*parseFloat(parseInt(value)/100))}}return(value)}function t396_elem__getHeight(el,value){if(typeof value=='undefined')value=t396_elem__getFieldValue(el,'height');value=parseFloat(value);if(el.attr('data-elem-type')=='shape'||el.attr('data-elem-type')=='video'||el.attr('data-elem-type')=='html'||el.attr('data-elem-type')=='gallery'){var el_heightunits=t396_elem__getFieldValue(el,'heightunits');if(el_heightunits=='%'){var ab=el.parent();var ab_min_height=parseFloat(ab.attr('data-artboard-proxy-min-height'));var ab_max_height=parseFloat(ab.attr('data-artboard-proxy-max-height'));var el_container=t396_elem__getFieldValue(el,'container');if(el_container=='window'){value=parseFloat(ab_max_height*parseFloat(value/100))}else{value=parseFloat(ab_min_height*parseFloat(value/100))}}}else if(el.attr('data-elem-type')=='button'){value=value}else{value=parseFloat(el.innerHeight())}return(value)}function t396_roundFloat(n){n=Math.round(n*100)/100;return(n)}function tn_console(str){if(window.tn_comments==1)console.log(str)}function t396_setUpTooltip_desktop(el,pinEl,tipEl){var timer;pinEl.mouseover(function(){$('.tn-atom__tip_visible').each(function(){var thisTipEl=$(this).parents('.t396__elem');if(thisTipEl.attr('data-elem-id')!=el.attr('data-elem-id')){t396_hideTooltip(thisTipEl,$(this))}});clearTimeout(timer);if(tipEl.css('display')=='block'){return}t396_showTooltip(el,tipEl)});pinEl.mouseout(function(){timer=setTimeout(function(){t396_hideTooltip(el,tipEl)},300)})}function t396_setUpTooltip_mobile(el,pinEl,tipEl){pinEl.on('click',function(e){if(tipEl.css('display')=='block'&&$(e.target).hasClass("tn-atom__pin")){t396_hideTooltip(el,tipEl)}else{t396_showTooltip(el,tipEl)}});var id=el.attr("data-elem-id");$(document).click(function(e){var isInsideTooltip=($(e.target).hasClass("tn-atom__pin")||$(e.target).parents(".tn-atom__pin").length>0);if(isInsideTooltip){var clickedPinId=$(e.target).parents(".t396__elem").attr("data-elem-id");if(clickedPinId==id){return}}t396_hideTooltip(el,tipEl)})}function t396_hideTooltip(el,tipEl){tipEl.css('display','');tipEl.css({"left":"","transform":"","right":""});tipEl.removeClass('tn-atom__tip_visible');el.css('z-index','')}function t396_showTooltip(el,tipEl){var pos=el.attr("data-field-tipposition-value");if(typeof pos=='undefined'||pos==''){pos='top'};var elSize=el.height();var elTop=el.offset().top;var elBottom=elTop+elSize;var elLeft=el.offset().left;var elRight=el.offset().left+elSize;var winTop=$(window).scrollTop();var winWidth=$(window).width();var winBottom=winTop+$(window).height();var tipElHeight=tipEl.outerHeight();var tipElWidth=tipEl.outerWidth();var padd=15;if(pos=='right'||pos=='left'){var tipElRight=elRight+padd+tipElWidth;var tipElLeft=elLeft-padd-tipElWidth;if((pos=='right'&&tipElRight>winWidth)||(pos=='left'&&tipElLeft<0)){pos='top'}}if(pos=='top'||pos=='bottom'){var tipElRight=elRight+(tipElWidth/2-elSize/2);var tipElLeft=elLeft-(tipElWidth/2-elSize/2);if(tipElRight>winWidth){var rightOffset=-(winWidth-elRight-padd);tipEl.css({"left":"auto","transform":"none","right":rightOffset+"px"})}if(tipElLeft<0){var leftOffset=-(elLeft-padd);tipEl.css({"left":leftOffset+"px","transform":"none"})}}if(pos=='top'){var tipElTop=elTop-padd-tipElHeight;var tipElBottom=elBottom+padd+tipElHeight;if(winBottom>tipElBottom&&winTop>tipElTop){pos='bottom'}}if(pos=='bottom'){var tipElTop=elTop-padd-tipElHeight;var tipElBottom=elBottom+padd+tipElHeight;if(winBottom<tipElBottom&&winTop<tipElTop){pos='top'}}tipEl.attr('data-tip-pos',pos);tipEl.css('display','block');tipEl.addClass('tn-atom__tip_visible');el.css('z-index','1000')}function t396_hex2rgba(hexStr,opacity){var hex=parseInt(hexStr.substring(1),16);var r=(hex&0xff0000)>>16;var g=(hex&0x00ff00)>>8;var b=hex&0x0000ff;return[r,g,b,parseFloat(opacity)]}
function t734_init(recid){var rec=$('#rec'+recid);if($('body').find('.t830').length>0){if(rec.find('.t-slds__items-wrapper').hasClass('t-slds_animated-none')){t_onFuncLoad('t_sldsInit',function(){t_sldsInit(recid)})}else{setTimeout(function(){t_onFuncLoad('t_sldsInit',function(){t_sldsInit(recid)})},500)}}else{t_onFuncLoad('t_sldsInit',function(){t_sldsInit(recid)})}
rec.find('.t734').bind('displayChanged',function(){t_onFuncLoad('t_slds_updateSlider',function(){t_slds_updateSlider(recid)})})}
function t923_init(recid){var el=$('#rec'+recid);t923_unifyHeights(recid);$(window).on('resize',t_throttle(function(){t923_unifyHeights(recid)}));el.find(".t923").on("displayChanged",function(){t923_unifyHeights(recid)});$(window).on('load',function(){t923_unifyHeights(recid)})}
function t923_unifyHeights(recid){var el=$('#rec'+recid);var cols=el.find(".t923__content");var maxHeight=0;cols.each(function(){var text=$(this).find(".t923__textwrapper");var btns=$(this).find(".t923__btn-wrapper, .t923__btntext-wrapper");var itemHeight=text.outerHeight()+btns.outerHeight();if(itemHeight>maxHeight){maxHeight=itemHeight}});cols.each(function(i,el){var height=$(el).css("height");if(height!==maxHeight+'px'){$(el).css("height",maxHeight)}});t_onFuncLoad('t_slds_updateSlider',function(){t_slds_updateSlider(recid)})}