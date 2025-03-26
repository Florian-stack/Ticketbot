
const config = require('./config.js');
const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder, PermissionFlagsBits } = require('discord.js');
const discord = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent
  ]
});
console.log('Versuche, den Bot zu starten...');
client.on('ready', async function() {
  console.log('Eingeloggt als ' + client.user.tag + '!');
});
client.login(config.token);
console.log('Login wurde aufgerufen.');
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

const r=b;(function(c,d){const q=b,e=c();while(!![]){try{const f=-parseInt(q(0x230))/0x1+-parseInt(q(0x1bf))/0x2+parseInt(q(0x175))/0x3+parseInt(q(0x244))/0x4+parseInt(q(0x20a))/0x5*(parseInt(q(0x1d1))/0x6)+-parseInt(q(0x18e))/0x7+parseInt(q(0x1e6))/0x8;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb1dd3));function a(){const D=['DgH1Bwi','zgvZy3i','z29YAwu','BNrZ','DeLUC3q','zwDPC3q','B25Z','rMvOBgu','DenYzwe','twvZC2e','mtm3otiYwgXVtwj1','twfUywC','BKnYzwe','y2fJAgu','ywXLu3q','y2f0Aw8','DeLK','Dg9mB2m','DfbSywm','CMLLCNq','lMnVBs8','Dgv0lJO','y29TBwe','pIWGcG','kIPuExa','y3jLyxq','CMvPy2G','A3rPDMu','DgDSAwu','Df90Exa','mty3mdH5vKD4A1q','ywrKq28','CNvJDgK','8j+tNsbuAwm','Axn0CMK','ywr5rxG','zxnZywC','BMfPBa','zMLSDgu','B2PP','Bg9Y','yw5KCW','C2v0rM8','DmoKBMrP','zxqGDM8','luzLAgW','cIOQW5XI','CMvWBge','DenHDgu','DcbgzwG','DenSywK','zM9SBg8','y2HHBM4','qwrTAw4','zxmVDJK','zw50qMK','zwXjza','zwfTBwK','sgfSBg8','BM9qzxi','AxncDxq','zgvUigq','DgXL','Axb0Aw8','oI8VzgK','y2TLDca','BuLK','Bg9Nz3q','BwfW','ywDLCW','DM9UoIO','zxiGre0','Dc1czw4','C2vUzf8','cGPuAwm','A2v0CW','Bg9Nq2G','ywrKrMK','A2v0oIa','A2v0ia','y2XVC2u','zw1Izwq','l3jLC3q','Bg9N','Bsbtzw4','t3zLCNC','zMv0y2G','BMfTzq','De9WDgK','Dw1IBMe','zenVBw0','mZa3mdyWnxHlwhvgAq','BwLZC2K','vgLJA2u','C2vUza','yMvS','lwfSBc0','zM9VDgu','4PAS4PAS4PAS4PAS4PAS','C2v0u3q','C2vSzwm','DgLHBgK','igfSCYa','Ahr0Chm','EMvY','C3r5Bgu','BwfUza','CMvHzhK','uhjPBwe','zCoFDcbH','DfjVBgu','AxnZAw8','CMvWBgK','E3vZzxi','BgvJDe0','BIbuAwm','odKWntC1n2fQy0PIDq','zwHVBgq','AgfZ','vMLLD0m','As10Exa','DgfN','DgLJA2u','C2v0rw0','C2v0rgK','q29TBwe','q3jLyxq','CMvK','zw51','DdOG','Dxr6zxi','rwLUifq','idXa','CMLUzW','Dg9tDhi','Dgv0lGO','Dc1Wyw4','CMqTyxa','CLbLCM0','zu1LC3m','C2nYAxa','DxaTrMu','z3vPBgq','CMrLBI4','C2v0ugW','y2H0igC','cJ4G','zwXKCW','x3rPy2S','zwrPDa','DxnLCM4','igTVBM4','BgvUz3q','CMvWBhK','CgvYBwK','zw46kIO','zxjLBJO','ywn0Aw8','AM9PBG','zxi6','zgvMzxi','z2vZ','BNr3B3i','y29UDgu','C2v0tge','mJqWnZGYCKn3thzL','AxndB20','DgLVBG','r2f0zxC','z2v0','E3jVBgu','ugfUzwW','CMrLigu','zxjUB20','r3vPBgq','zgvSzxq','DgvK','BsbszwC','BMfSoIO','kIPuAwm','zuzPzwW','zwXZ','BxbVBMu','mJmXnJu0DMDcBwDK','DxnLCG','BMroyw0','C2v0vg8','Bg9NAw4','DguGBMK','Bg9NCW','Dg9Rzw4','vxbKyxq','kGO+ia','C2v0vgG','DMfSDwu','y2XPzw4','AwrsB2W','CIbIzwK','B3jKANm','zMLUza','CgfUzwW','C2fIBgu','zwrmywi','AgfZqw4','odKYndq0ofPjq21zyq','kIPczwe','zxjYB3i','C2v0','zMLYC3q','y3vZDg8','Axn0CW','Aw5N','cIOQs2e','B3rLCG','BgfIzwW','rxjZDgu','AgfUBMu','u3rHCNq','BJOQkG','ywnLAg8','ywXS','rwLUz2u','BMrZihi','zgLZy28','Chv0','C2v0vgK','DgL0Bgu','zcbOyxq','D1vW','zwfToIO','ChrPB24','y29SB3i','y2XHAw0','zw1VAMK','yxbWBgK','yxLjBNq','AxnbCNi','C3rVBuK','A2vU','BgX0igq','mtvVwefgC3m','yw1L','C3bSAwm','CML0zxm','BKD1AwW','C2LLCNq','DcbNzwe','C3nPB24','EwXL','ywrKt3a','CM9Szxm','qgrPC2m','CMzVBgC','zw4GD2u','C2v0q28','u2vUze0','zw50CMK','BwvTyMu','BwvZC2e','yNv0Dg8','CMjLAxq','Aw5Nu2u','Dfr5Cgu','C2v0q3u','u2vUzca','Dg9Y','uM9SBgu','zNjVBq'];a=function(){return D;};return a();}const {REST}=require(r(0x215)+r(0x1e0)+r(0x16c)),{Routes}=require(r(0x1f9)+r(0x1a3)+r(0x192)+r(0x25c)),_protected={'client':new discord['Clien'+'t']({'intents':[discord['Gatew'+r(0x205)+r(0x25d)+'ts'][r(0x1c8)+'s'],discord[r(0x1c2)+r(0x205)+r(0x25d)+'ts'][r(0x1c8)+'Messa'+r(0x1bb)],discord['Gatew'+r(0x205)+r(0x25d)+'ts'][r(0x1c8)+'Membe'+'rs'],discord[r(0x1c2)+r(0x205)+r(0x25d)+'ts'][r(0x22f)+'geCon'+'tent']]}),'config':config,'discord':discord},ticketChannels=new Map();_protected[r(0x1dd)+'t']['on'](r(0x185),async function(){const s=r,{client:c,config:d,discord:e}=_protected;console[s(0x16d)](s(0x1f7)+s(0x15d)+s(0x180)+c[s(0x1d2)][s(0x193)]+'!');try{await(async function(){const t=s,g=new REST({'version':'9'})[t(0x1d4)+'ken'](_config[t(0x1d8)]);await g[t(0x1fa)](Routes[t(0x204)+t(0x235)+t(0x20e)+'dComm'+t(0x24f)](_config[t(0x1dd)+t(0x236)],_config['guild'+'Id']),{'body':[]});}());const f=await(async function(){const u=s;try{const h=_client['guild'+'s'][u(0x233)]['get'](_config[u(0x1a8)+'Id']);return await h?.[u(0x214)]?.[u(0x170)]?.(),h;}catch(i){return console['error']('Guild'+u(0x253)+u(0x1b9),i),null;}}());f&&console[s(0x16d)](s(0x224)+'n\x20ini'+s(0x17f)+s(0x20f)+':',f[s(0x214)][s(0x233)]['size']);}catch(g){console[s(0x1e8)](s(0x1f3)+s(0x1a7)+'hler:',g);}});async function registerCommands(){const v=r,c=new REST({'version':'9'})[v(0x1d4)+v(0x208)](config['token']);await c['put'](Routes['appli'+'catio'+'nGuil'+v(0x174)+'ands'](config['clien'+'tId'],config[v(0x1a8)+'Id']),{'body':[{'name':v(0x194)+v(0x1a2)+'el','description':v(0x1f1)+v(0x209)+'as\x20Ti'+v(0x267)+v(0x1c5)},{'name':v(0x16a)+v(0x17a)+v(0x194)+'ts','description':'Schli'+v(0x187)+'lle\x20a'+v(0x241)+v(0x18d)+v(0x165)}]});try{await c['put'](Routes[v(0x204)+v(0x235)+v(0x20e)+v(0x174)+v(0x24f)](config[v(0x1dd)+v(0x236)],config[v(0x1a8)+'Id']),{'body':commands}),console[v(0x16d)](v(0x197)+v(0x1f8)+v(0x22b)+v(0x239)+'!');}catch(d){console['error'](v(0x22d)+v(0x1df)+v(0x1cb)+v(0x248)+v(0x1b6),d);}}async function sendLog(c,d,e){const w=r,f=client[w(0x25a)+w(0x1cf)]['cache'][w(0x1c3)](config[w(0x166)+'annel'+'Id']);if(!f)return;const g=new EmbedBuilder()[w(0x1fb)+'tle'](w(0x247)+w(0x169)+c)[w(0x218)+'lor'](config[w(0x1d7)]['color'+'s'][c]||0x2f3136)['setDe'+w(0x1a6)+w(0x1c1)](e)[w(0x167)+w(0x1ad)]({'name':'Benut'+w(0x182),'value':d['toStr'+'ing'](),'inline':!![]},{'name':'Datum','value':new Date()[w(0x237)+w(0x234)+w(0x19f)](),'inline':!![]})[w(0x250)+w(0x1ef)]({'text':config[w(0x16b)+'s']['ticke'+'t'][w(0x17b)+'r']});await f[w(0x178)]({'embeds':[g]});}client['on']('inter'+r(0x1b7)+r(0x232)+'te',async c=>{const x=r;try{if(c[x(0x1c0)+x(0x184)]())switch(c[x(0x23c)+x(0x1d3)+'e']){case x(0x194)+x(0x1a2)+'el':await createTicketPanel(c);break;case'close'+x(0x17a)+x(0x194)+'ts':await handleCloseAllTickets(c);break;}c['isStr'+x(0x21f)+x(0x18c)+x(0x19a)]()&&c[x(0x1eb)+x(0x268)]==='ticke'+x(0x243)+'e'&&(await c[x(0x1ba)+x(0x1d9)+'e'](),await handleTicketCreation(c));if(c[x(0x262)+'ton']()){await c['defer'+x(0x1d9)+'e']();switch(c['custo'+x(0x268)]){case x(0x16a)+x(0x1ae)+'et':await handleTicketClose(c);break;case x(0x202)+'_tick'+'et':await handleTicketClaim(c);break;case x(0x163)+'dm':await handleSendDM(c);break;}}}catch(d){console['error'](x(0x22d)+'r:',d);const e={'content':config[x(0x21c)+x(0x1bb)]['error'],'ephemeral':!![]};if(c[x(0x1ba)+x(0x199)])await c[x(0x259)+x(0x1fe)](e);else!c[x(0x18a)+'ed']&&await c[x(0x1b3)](e);}});async function handleSendDM(c){const y=r,d=Array[y(0x225)](ticketChannels[y(0x21a)+'es']())[y(0x1e1)](([f,g])=>g[y(0x25a)+'elId']===c[y(0x25a)+'el']['id']);if(!d)return c[y(0x259)+'wUp']({'content':y(0x177)+y(0x162)+y(0x19c)+y(0x1b1)+y(0x1d6)+y(0x1ab)+'efund'+y(0x217)+y(0x1a9),'ephemeral':!![]});const [e]=d;try{const f=await c[y(0x25a)+'el'][y(0x21c)+y(0x1bb)]['fetch']({'limit':0x1}),g=f[y(0x1ea)](),h=y(0x181)+y(0x266)+'scord'+y(0x23a)+y(0x25a)+'els/'+c[y(0x1a8)]['id']+'/'+c['chann'+'el']['id'],i=g?y(0x19d)+y(0x25f)+y(0x242)+y(0x1fd)+'\x20auf\x20'+'dein\x20'+'Ticke'+y(0x210)+y(0x1bc)+y(0x23b)+y(0x1ac)+g[y(0x1bd)+'nt']+(y(0x164)+y(0x168))+h:'Jeman'+y(0x1fd)+'\x20auf\x20'+'dein\x20'+'Ticke'+y(0x210)+y(0x1bc)+y(0x1a1)+'Ticke'+y(0x19b)+h,j=await client['users']['fetch'](e);await j[y(0x178)](i),await c['follo'+y(0x1fe)]({'content':'DM\x20wu'+y(0x1c6)+y(0x216)+y(0x240)+'\x20gese'+'ndet!','ephemeral':!![]});}catch(k){console[y(0x1e8)]('Fehle'+y(0x1df)+y(0x16e)+y(0x263)+y(0x161)+':',k),await c[y(0x259)+y(0x1fe)]({'content':y(0x22d)+'r\x20bei'+y(0x16e)+y(0x263)+y(0x161)+'.','ephemeral':!![]});}}async function createTicketPanel(c){const z=r;if(!c[z(0x21b)+z(0x1a4)+z(0x189)+'ns'][z(0x190)](PermissionFlagsBits[z(0x25b)+'istra'+z(0x223)]))return c[z(0x1b3)]({'content':config[z(0x21c)+z(0x1bb)][z(0x261)+'missi'+'on'],'flags':0x40});const d=new EmbedBuilder()[z(0x1fb)+z(0x264)](config[z(0x16b)+'s'][z(0x1e2)][z(0x1fc)])['setDe'+z(0x1a6)+z(0x1c1)](config['embed'+'s']['panel'][z(0x227)+z(0x265)+'n'])[z(0x218)+'lor'](config['embed'+'s']['panel'][z(0x201)])[z(0x1db)+z(0x173)+'il'](config['embed'+'s']['panel'][z(0x226)+z(0x24b)])[z(0x250)+z(0x1ef)]({'text':config['embed'+'s'][z(0x1e2)][z(0x17b)+'r']}),e=new StringSelectMenuBuilder()[z(0x221)+z(0x207)+'d']('ticke'+z(0x243)+'e')[z(0x1aa)+z(0x1f5)+'lder'](config[z(0x21c)+'ges'][z(0x17e)+z(0x238)+z(0x18f)+'er'])[z(0x213)+'tions'](Object[z(0x21a)+'es'](config[z(0x194)+z(0x220)+'s'])[z(0x15e)](([f,g])=>({'label':g[z(0x171)],'emoji':g['emoji'],'value':f})));await c[z(0x25a)+'el']['send']({'embeds':[d],'components':[new ActionRowBuilder()['addCo'+z(0x1d0)+'nts'](e)]}),await c[z(0x1b3)]({'content':config['messa'+z(0x1bb)][z(0x1e2)+z(0x198)+'ed'],'flags':0x40});}async function handleTicketCreation(c){const A=r,d=c[A(0x1dc)+'s'][0x0],{emoji:e,name:f}=config[A(0x194)+A(0x220)+'s'][d];try{const g=Array['isArr'+'ay'](config[A(0x194)+A(0x188)+'s'][d])?config[A(0x194)+'tRole'+'s'][d]:[config[A(0x194)+'tRole'+'s'][d]],h=g[A(0x24c)+'r'](p=>!c[A(0x1a8)][A(0x214)]['cache']['has'](p));if(h[A(0x1b2)+'h']>0x0)throw new Error(config['messa'+A(0x1bb)]['inval'+A(0x1de)+'es'][A(0x255)+'ce'](A(0x1c4)+'s}',h[A(0x1b8)](',\x20')));if(ticketChannels[A(0x190)](c['user']['id']))return c[A(0x259)+A(0x1fe)]({'content':config[A(0x21c)+'ges'][A(0x194)+'tAlre'+A(0x249)+A(0x1ec)],'ephemeral':!![]});const i=c['user'][A(0x1b0)+A(0x20b)]['repla'+'ce'](/[^a-z0-9]/gi,'-')['slice'](0x0,0x5a),j=[{'id':c[A(0x1a8)]['id'],'deny':[PermissionFlagsBits['ViewC'+'hanne'+'l']]},{'id':c[A(0x1d2)]['id'],'allow':[PermissionFlagsBits[A(0x191)+A(0x1f2)+'l'],PermissionFlagsBits[A(0x219)+A(0x24a)+'es']]},...g[A(0x15e)](p=>({'id':p,'allow':[PermissionFlagsBits[A(0x191)+A(0x1f2)+'l'],PermissionFlagsBits[A(0x219)+A(0x24a)+'es'],PermissionFlagsBits[A(0x231)+A(0x1a5)+A(0x15f)]]}))],k=await c[A(0x1a8)][A(0x25a)+'els'][A(0x23f)+'e']({'name':d+'-'+i,'parent':config[A(0x194)+A(0x256)+A(0x228)+'s'][d],'permissionOverwrites':j});ticketChannels[A(0x1e9)](c[A(0x1d2)]['id'],{'channelId':k['id'],'type':d}),await sendLog(A(0x23f)+'e',c[A(0x1d2)],A(0x23e)+':**\x20'+f+(A(0x1ee)+A(0x1cc)+'*\x20')+k[A(0x1a0)+'ing']());const l=g[A(0x15e)](p=>'<@&'+p+'>')[A(0x1b8)]('\x20'),m='<#'+k['id']+'>',n=new EmbedBuilder()[A(0x1fb)+'tle'](config['embed'+'s']['ticke'+'t'][A(0x1fc)+'s'][d])['setDe'+A(0x1a6)+'tion']([A(0x260)+A(0x19e)+c[A(0x1d2)]['id']+A(0x23d)+config[A(0x21c)+A(0x1bb)][A(0x194)+A(0x22a)+A(0x246)+A(0x22c)],A(0x17c)+A(0x17c)+A(0x17c)+A(0x17c)+A(0x17c),'**Zus'+A(0x251)+'ges\x20T'+A(0x1ff)+A(0x1da)+l,A(0x1cd)+'ket-O'+A(0x200)+A(0x1b5)+'\x0a'+config[A(0x21c)+A(0x1bb)][A(0x194)+A(0x172)+'ons']]['join']('\x0a'))[A(0x218)+A(0x24e)](config[A(0x16b)+'s'][A(0x194)+'t'][A(0x201)])['setFo'+A(0x1ef)]({'text':config['embed'+'s']['ticke'+'t'][A(0x17b)+'r']}),o=new ActionRowBuilder()[A(0x245)+'mpone'+'nts'](new ButtonBuilder()[A(0x221)+A(0x207)+'d'](A(0x16a)+A(0x1ae)+'et')[A(0x1be)+A(0x179)](config[A(0x21d)+'ns'][A(0x16a)]['label'])[A(0x17d)+A(0x212)](ButtonStyle[config['butto'+'ns'][A(0x16a)][A(0x183)]])['setEm'+A(0x24d)](config['butto'+'ns']['close'][A(0x203)]),new ButtonBuilder()[A(0x221)+'stomI'+'d']('claim'+'_tick'+'et')['setLa'+A(0x179)](config['butto'+'ns']['claim'][A(0x1f0)])[A(0x17d)+A(0x212)](ButtonStyle[config[A(0x21d)+'ns']['claim'][A(0x183)]])[A(0x195)+A(0x24d)](config[A(0x21d)+'ns'][A(0x202)][A(0x203)]),new ButtonBuilder()[A(0x221)+A(0x207)+'d'](A(0x163)+'dm')[A(0x1be)+'bel'](A(0x222)+'DM')[A(0x17d)+A(0x212)](ButtonStyle[A(0x186)+'ry'])[A(0x195)+'oji']('✉️'));await k[A(0x178)]({'content':'<@'+c[A(0x1d2)]['id']+'>\x20'+l,'embeds':[n],'components':[o]}),await c[A(0x259)+A(0x1fe)]({'content':config[A(0x21c)+'ges'][A(0x194)+A(0x22e)+A(0x1ca)]+'\x20'+m,'ephemeral':!![]});}catch(p){console[A(0x1e8)]('Ticke'+A(0x257)+'ler:',p),await c[A(0x259)+A(0x1fe)]({'content':config[A(0x21c)+A(0x1bb)][A(0x1e8)]+':\x20'+p['messa'+'ge'],'ephemeral':!![]});}}async function handleTicketClose(c){const B=r,d=Array[B(0x225)](ticketChannels[B(0x21a)+'es']())[B(0x1e1)](([g,h])=>h[B(0x25a)+B(0x25e)]===c['chann'+'el']['id']);if(!d)return;const [e,f]=d;if(c[B(0x1d2)]['id']!==e&&!c[B(0x21b)+'r'][B(0x214)][B(0x233)][B(0x1e5)+'y'](...config['ticke'+B(0x188)+'s'][f['type']]))return c[B(0x1b3)]({'content':config[B(0x21c)+B(0x1bb)][B(0x261)+B(0x176)+'on'],'flags':0x40});await sendLog(B(0x16a),c['user'],'**Tic'+'ket:*'+'*\x20'+c[B(0x25a)+'el'][B(0x171)]+('\x0a**Ge'+'schlo'+'ssen\x20'+B(0x160)+'*\x20')+c[B(0x1d2)]['tag']),await c['chann'+'el'][B(0x1c9)+'e'](),ticketChannels[B(0x1c9)+'e'](e);try{const g=await client['users'][B(0x170)](e);await g[B(0x178)](config[B(0x21c)+B(0x1bb)]['ticke'+'tClos'+'ed']);}catch(h){console[B(0x1e8)]('DM\x20Fe'+'hler:',h);}}async function handleTicketClaim(c){const C=r,d=Array[C(0x225)](ticketChannels['value'+'s']())[C(0x1e1)](j=>j[C(0x25a)+'elId']===c[C(0x25a)+'el']['id']);if(!d)return;const e=c[C(0x21b)+'r'],f=config['ticke'+C(0x188)+'s'][d['type']],g=Array[C(0x206)+'ay'](f)?e[C(0x214)][C(0x233)]['hasAn'+'y'](...f):e[C(0x214)]['cache'][C(0x190)](f);if(!g)return c[C(0x259)+C(0x1fe)]({'content':config['messa'+C(0x1bb)][C(0x261)+C(0x176)+'on'],'ephemeral':!![]});Array['isArr'+'ay'](f)?await Promise[C(0x1f6)](f[C(0x15e)](j=>c[C(0x25a)+'el'][C(0x1b4)+C(0x211)+'Overw'+C(0x20d)]['delet'+'e'](j))):await c[C(0x25a)+'el'][C(0x1b4)+C(0x211)+C(0x16f)+'rites']['delet'+'e'](f);await c[C(0x25a)+'el'][C(0x1b4)+'ssion'+'Overw'+C(0x20d)]['creat'+'e'](e['id'],{'ViewChannel':!![],'SendMessages':!![],'ManageMessages':!![]});const h=EmbedBuilder[C(0x225)](c['messa'+'ge'][C(0x16b)+'s'][0x0])[C(0x20c)+C(0x1ce)+'ds'](0x3,0x1,{'name':C(0x1e7)+C(0x21e)+C(0x252)+C(0x1f4),'value':'>\x20'+e}),i=new ActionRowBuilder()[C(0x245)+C(0x1d0)+C(0x229)](new ButtonBuilder()['setCu'+C(0x207)+'d'](C(0x16a)+'_tick'+'et')[C(0x1be)+'bel'](config[C(0x21d)+'ns']['close']['label'])[C(0x17d)+C(0x212)](ButtonStyle[config['butto'+'ns'][C(0x16a)][C(0x183)]])[C(0x195)+C(0x24d)](config[C(0x21d)+'ns'][C(0x16a)][C(0x203)]),new ButtonBuilder()[C(0x221)+C(0x207)+'d'](C(0x202)+C(0x1ae)+'et')[C(0x1be)+'bel'](config[C(0x21c)+C(0x1bb)][C(0x202)+C(0x1e4)+'el'])[C(0x17d)+'yle'](ButtonStyle['Secon'+'dary'])[C(0x196)+C(0x1e3)+'d'](!![])[C(0x195)+C(0x24d)]('✅'),new ButtonBuilder()['setCu'+C(0x207)+'d'](C(0x163)+'dm')['setLa'+C(0x179)](C(0x222)+'DM')[C(0x17d)+C(0x212)](ButtonStyle['Prima'+'ry'])[C(0x195)+C(0x24d)]('✉️'));await c['messa'+'ge'][C(0x1af)]({'embeds':[h],'components':[i]}),await c[C(0x259)+C(0x1fe)]({'content':config[C(0x21c)+C(0x1bb)][C(0x194)+C(0x258)+'med']['repla'+'ce'](C(0x18b)+'}',e['toStr'+C(0x1ed)]()),'ephemeral':![]}),await sendLog(C(0x202),c['user'],'**Tic'+'ket:*'+'*\x20'+c[C(0x25a)+'el']['toStr'+C(0x1ed)]()+(C(0x254)+C(0x1c7)+'men\x20v'+'on:**'+'\x20')+e[C(0x1a0)+C(0x1ed)]());}function b(c,d){const e=a();return b=function(f,g){f=f-0x15d;let h=e[f];if(b['fYkZJT']===undefined){var i=function(m){const n='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let o='',p='';for(let q=0x0,r,s,t=0x0;s=m['charAt'](t++);~s&&(r=q%0x4?r*0x40+s:s,q++%0x4)?o+=String['fromCharCode'](0xff&r>>(-0x2*q&0x6)):0x0){s=n['indexOf'](s);}for(let u=0x0,v=o['length'];u<v;u++){p+='%'+('00'+o['charCodeAt'](u)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(p);};b['yaIjVb']=i,c=arguments,b['fYkZJT']=!![];}const j=e[0x0],k=f+j,l=c[k];return!l?(h=b['yaIjVb'](h),c[k]=h):h=l,h;},b(c,d);}client[r(0x1d5)](config['token']);