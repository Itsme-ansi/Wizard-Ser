const _0x1a8181=_0x4e72;(function(_0x5609c7,_0x235281){const _0x38e7e0=_0x4e72,_0x28a46b=_0x5609c7();while(!![]){try{const _0x4eb5d9=-parseInt(_0x38e7e0(0x140))/0x1*(parseInt(_0x38e7e0(0x157))/0x2)+-parseInt(_0x38e7e0(0x16a))/0x3+parseInt(_0x38e7e0(0x17b))/0x4*(parseInt(_0x38e7e0(0x153))/0x5)+-parseInt(_0x38e7e0(0x164))/0x6*(-parseInt(_0x38e7e0(0x17c))/0x7)+-parseInt(_0x38e7e0(0x178))/0x8*(parseInt(_0x38e7e0(0x147))/0x9)+parseInt(_0x38e7e0(0x163))/0xa*(parseInt(_0x38e7e0(0x168))/0xb)+parseInt(_0x38e7e0(0x17d))/0xc;if(_0x4eb5d9===_0x235281)break;else _0x28a46b['push'](_0x28a46b['shift']());}catch(_0x5f0e35){_0x28a46b['push'](_0x28a46b['shift']());}}}(_0x274f,0xd00a4));const {igdl,tiktok,twitter,pin}=require(_0x1a8181(0x175)),{facebook}=require('../lib/facebook'),{servers,yta,ytv}=require('../lib/y2mate'),fetch=require(_0x1a8181(0x141));function _0x4e72(_0x2ceaf8,_0x463540){const _0x274f78=_0x274f();return _0x4e72=function(_0x4e72c3,_0x4555c8){_0x4e72c3=_0x4e72c3-0x13d;let _0x134cb6=_0x274f78[_0x4e72c3];return _0x134cb6;},_0x4e72(_0x2ceaf8,_0x463540);}let yts=require('yt-search'),util=require(_0x1a8181(0x145)),handler=_0x3e353d=>_0x3e353d;handler[_0x1a8181(0x16c)]=async function(_0x36ccac,{isPrems:_0x582233}){const _0x30eecc=_0x1a8181;if(_0x36ccac[_0x30eecc(0x17f)][_0x30eecc(0x159)](_0x30eecc(0x148)))return;if(db[_0x30eecc(0x156)][_0x30eecc(0x13d)][_0x36ccac[_0x30eecc(0x179)]][_0x30eecc(0x176)])return;if(db[_0x30eecc(0x156)][_0x30eecc(0x144)][_0x36ccac[_0x30eecc(0x17f)]][_0x30eecc(0x143)])return;let _0x4038aa=_0x36ccac['text']['split'](/\n| /i)[0x0];if(/^.*tiktok/i[_0x30eecc(0x160)](_0x36ccac['text'])){let _0x1043e3=await fetch(API('hardianto',_0x30eecc(0x170),{'url':_0x4038aa},_0x30eecc(0x169)));if(!_0x1043e3['ok'])return _0x36ccac[_0x30eecc(0x158)](eror);let _0x3bdab4=await _0x1043e3[_0x30eecc(0x14c)]();await _0x36ccac['reply'](wait),await this[_0x30eecc(0x167)](_0x36ccac[_0x30eecc(0x17f)],_0x3bdab4[_0x30eecc(0x15e)],'',watermark,_0x36ccac);}if(/^.*cocofun/i[_0x30eecc(0x160)](_0x36ccac[_0x30eecc(0x16f)])){let _0x1e945b=await fetch(API(_0x30eecc(0x14a),_0x30eecc(0x15f),{'url':_0x4038aa}));if(!_0x1e945b['ok'])return _0x36ccac[_0x30eecc(0x158)](eror);let _0x1f05dd=await _0x1e945b[_0x30eecc(0x14c)]();await _0x36ccac[_0x30eecc(0x158)](wait),await this['sendFile'](_0x36ccac[_0x30eecc(0x17f)],_0x1f05dd[_0x30eecc(0x151)],'',watermark,_0x36ccac);}if(/^.*(fb.watch|facebook.com)/i[_0x30eecc(0x160)](_0x36ccac[_0x30eecc(0x16f)])){let _0x2a1744=await fetch(API(_0x30eecc(0x15a),'/api/download/fb',{'url':_0x4038aa},_0x30eecc(0x169)));if(!_0x2a1744['ok'])return _0x36ccac['reply'](eror);let _0x22130f=await _0x2a1744[_0x30eecc(0x14c)]();if(!_0x22130f['status'])return _0x36ccac[_0x30eecc(0x158)](util[_0x30eecc(0x16b)](_0x22130f));await _0x36ccac[_0x30eecc(0x158)](wait),await conn['sendFile'](_0x36ccac['chat'],_0x22130f['data']['sd'][_0x30eecc(0x142)],'','HD:\x20'+_0x22130f[_0x30eecc(0x156)]['hd'][_0x30eecc(0x142)]+_0x30eecc(0x162)+_0x22130f[_0x30eecc(0x156)]['hd'][_0x30eecc(0x177)]+_0x30eecc(0x14b),_0x36ccac);}/^.*instagram.com\/(p|reel|tv)/i[_0x30eecc(0x160)](_0x36ccac[_0x30eecc(0x16f)])&&igdl(_0x4038aa)[_0x30eecc(0x161)](async _0x4a7f89=>{const _0x4efa7c=_0x30eecc;let _0x110931=JSON[_0x4efa7c(0x171)](_0x4a7f89),_0x40f823=JSON[_0x4efa7c(0x180)](_0x110931);await _0x36ccac[_0x4efa7c(0x158)](wait);for(let {downloadUrl:_0x2bfc2c,type:_0x2bea6a}of _0x40f823){this[_0x4efa7c(0x167)](_0x36ccac[_0x4efa7c(0x17f)],_0x2bfc2c,'ig'+(_0x2bea6a=='image'?_0x4efa7c(0x16d):'.mp4'),watermark,_0x36ccac,0x0,{'thumbnail':await(await fetch(_0x2bfc2c))[_0x4efa7c(0x165)]()});}})[_0x30eecc(0x152)](_0x5d180d=>_0x5d180d);/^.*(pinterest.com\/pin|pin.it)/i[_0x30eecc(0x160)](_0x36ccac[_0x30eecc(0x16f)])&&pin(_0x4038aa)['then'](async _0x5c500d=>{const _0x22c6ca=_0x30eecc;let _0xb9978b=JSON[_0x22c6ca(0x171)](_0x5c500d),_0x82bbee=JSON[_0x22c6ca(0x180)](_0xb9978b);if(!_0x82bbee[_0x22c6ca(0x155)])return _0x36ccac['reply'](eror);await _0x36ccac[_0x22c6ca(0x158)](wait),_0x36ccac[_0x22c6ca(0x158)](util[_0x22c6ca(0x16b)](_0x82bbee)),await this[_0x22c6ca(0x167)](_0x36ccac['chat'],_0x82bbee[_0x22c6ca(0x156)][_0x22c6ca(0x142)],'',watermark,_0x36ccac);})[_0x30eecc(0x152)](_0x263a7c=>_0x263a7c);/^.*twitter.com\//i[_0x30eecc(0x160)](_0x36ccac[_0x30eecc(0x16f)])&&twitter(_0x4038aa)[_0x30eecc(0x161)](async _0x5c9c41=>{const _0x49fdac=_0x30eecc;let _0x481d4f=JSON[_0x49fdac(0x171)](_0x5c9c41),_0xd36aec=JSON[_0x49fdac(0x180)](_0x481d4f),_0x4f3b25=_0xd36aec['data']['map'](_0x13cd33=>_0x49fdac(0x17a)+_0x13cd33[_0x49fdac(0x142)])[_0x49fdac(0x15c)](_0x49fdac(0x15d));await _0x36ccac[_0x49fdac(0x158)](wait);for(let {url:_0x33b3aa}of _0xd36aec[_0x49fdac(0x156)]){this[_0x49fdac(0x167)](_0x36ccac[_0x49fdac(0x17f)],_0x33b3aa,'ig'+(/mp4/i[_0x49fdac(0x160)](_0x33b3aa)?_0x49fdac(0x166):_0x49fdac(0x16d)),watermark,_0x36ccac);}})[_0x30eecc(0x152)](_0x3046f6=>_0x3046f6);if(/^https?:\/\/.*youtu/i[_0x30eecc(0x160)](_0x36ccac[_0x30eecc(0x16f)])){let _0x5531a2=await yts(_0x4038aa),_0x169190=_0x5531a2[_0x30eecc(0x16c)][_0x30eecc(0x17e)](_0x55d2a3=>_0x55d2a3[_0x30eecc(0x14d)]<0xe10);if(!_0x169190)return _0x36ccac[_0x30eecc(0x158)](_0x30eecc(0x146));let _0xa5c448=![],_0x44f329=servers[0x0];for(let _0x315181 in servers){let _0x2cb87c=servers[_0x315181];try{_0xa5c448=await yta(_0x169190[_0x30eecc(0x142)],_0x2cb87c),yt2=await ytv(_0x169190['url'],_0x2cb87c),_0x44f329=_0x2cb87c;break;}catch(_0x39a435){_0x36ccac[_0x30eecc(0x158)]('Server\x20'+_0x2cb87c+'\x20error!'+(servers[_0x30eecc(0x14e)]>=_0x315181+0x1?'':_0x30eecc(0x13f)));}}if(_0xa5c448===![])return _0x36ccac['reply'](eror);if(yt2===![])return _0x36ccac[_0x30eecc(0x158)](eror);let {dl_link:_0x5ae397,thumb:_0x2ec33d,title:_0x1447bb,filesize:_0x1bc429,filesizeF:_0x4b0be2}=_0xa5c448;await this[_0x30eecc(0x150)](_0x36ccac['chat'],await(await fetch(_0x2ec33d))['buffer'](),(_0x30eecc(0x13e)+_0x1447bb+_0x30eecc(0x172)+_0x4b0be2+_0x30eecc(0x14f)+yt2['filesizeF']+_0x30eecc(0x173)+_0x44f329+'\x0a\x0a')[_0x30eecc(0x174)](),watermark,'ᴀᴜᴅɪᴏ🔉',_0x30eecc(0x149)+_0x169190[_0x30eecc(0x142)],_0x30eecc(0x15b),_0x30eecc(0x16e)+_0x169190[_0x30eecc(0x142)]);}},handler['limit']=![],module[_0x1a8181(0x154)]=handler;function _0x274f(){const _0x4bb5ec=['stringify','\x0a\x0a*Audio\x20File\x20Size:*\x20','\x0a\x0a*y2mate\x20servers:*\x20','trim','../lib/scrape','banned','size','621256vPvaOX','sender','Link:\x20','1272044YktMPz','70cuyZPp','4790280rjaxcO','find','chat','parse','users','\x0a\x0a*Title:*\x20','\x0atry\x20another\x20server...','1396tknKSL','node-fetch','url','isBanned','chats','util','Video/Audio\x20Not\x20found','117zTiHDz','broadcast','.yta\x20','jojo','\x0a\x0a©\x20Medusa-Max','json','seconds','length','\x0a\x0a*Video\x20File\x20Sizeo:*\x20','send2ButtonLoc','download','catch','10YNQgqJ','exports','status','data','210KqHQzg','reply','endsWith','neoxr','ᴠɪᴅᴇᴏ🎥','join','\x0a------------\x0a','nowm','/api/cocofun-no-wm','test','then','\x0aSize:\x20','3977660eDtTxN','700170mookmx','buffer','.mp4','sendFile','22azvPav','apikey','2968323xyCdjp','format','all','.jpg','.yt\x20','text','/api/download/tiktok'];_0x274f=function(){return _0x4bb5ec;};return _0x274f();}
