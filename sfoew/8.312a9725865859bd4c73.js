(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"Ns/k":function(t,c,e){"use strict";e.r(c),e.d(c,"HomeModule",(function(){return f}));var a=e("ofXK"),i=e("tyNb"),n=e("fXoL"),o=e("tk/3"),r=e("AytR");let s=(()=>{class t{constructor(t){this.http=t,this.URL=r.a.urlBackend,this.token=localStorage.getItem("token_Pro")}getVideo(){const t=localStorage.getItem("token_Pro"),c=(new o.d).set("authorization","Bearer "+t);return this.http.get(this.URL+"urlvideo",{headers:c})}}return t.\u0275fac=function(c){return new(c||t)(n.fc(o.b))},t.\u0275prov=n.Rb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=e("wZkO"),l=e("sYmb");const d=function(t){return{active:t}};function p(t,c){if(1&t&&(n.bc(0,"div",29),n.Wb(1,"iframe",30),n.bc(2,"div",31),n.bc(3,"h5"),n.Oc(4),n.ac(),n.bc(5,"p"),n.Oc(6),n.ac(),n.ac(),n.bc(7,"button",32),n.Wb(8,"span",33),n.bc(9,"span",34),n.Oc(10,"Pr\xe9c\xe9dent"),n.ac(),n.ac(),n.bc(11,"button",35),n.Wb(12,"span",36),n.bc(13,"span",34),n.Oc(14,"Suivant"),n.ac(),n.ac(),n.ac()),2&t){const t=c.$implicit,e=c.index;n.tc("id",e),n.sc("ngClass",n.wc(4,d,0==e)),n.Jb(4),n.Pc(t.title),n.Jb(2),n.Pc(t.desc)}}function u(t,c){if(1&t&&(n.bc(0,"div",29),n.Wb(1,"iframe",37),n.bc(2,"div",31),n.bc(3,"h5"),n.Oc(4),n.ac(),n.bc(5,"p"),n.Oc(6),n.ac(),n.ac(),n.bc(7,"button",32),n.Wb(8,"span",33),n.bc(9,"span",34),n.Oc(10,"Previous"),n.ac(),n.ac(),n.bc(11,"button",35),n.Wb(12,"span",36),n.bc(13,"span",34),n.Oc(14,"Next"),n.ac(),n.ac(),n.ac()),2&t){const t=c.$implicit,e=c.index;n.tc("id",e),n.sc("ngClass",n.wc(4,d,0==e)),n.Jb(4),n.Pc(t.title),n.Jb(2),n.Pc(t.desc)}}const m=[{path:"",component:(()=>{class t{constructor(t){this.videoService=t}ngOnInit(){this.videoService.getVideo().subscribe(t=>{this.urlVideo=t,this.dataUrlD=this.urlVideo.dataUrlD,this.dataUrlP=this.urlVideo.dataUrlP})}}return t.\u0275fac=function(c){return new(c||t)(n.Vb(s))},t.\u0275cmp=n.Pb({type:t,selectors:[["app-home"]],decls:60,vars:17,consts:[["id","hero",1,"d-flex","align-items-center"],[1,"container"],["href","#about",1,"btn-get-started","scrollto"],["id","counts",1,"counts"],[1,"row"],[1,"itemss"],["dynamicHeight","","mat-align-tabs","center"],[3,"label"],[1,"example-small-box","mat-elevation-z4"],["id","carouselExampleCaptions","data-bs-ride","carousel",1,"carousel","slide"],[1,"carousel-inner"],["class","carousel-item active",3,"id","ngClass",4,"ngFor","ngForOf"],["label","Patient"],["id","departments",1,"departments"],[1,"contact-info","d-flex","align-items-center"],[1,"section-title"],["src","../../../assets/img/rgbd.JPG"],[2,"font-weight","bold","font-size","110%"],["href","#",1,"instagram"],[1,"bi","bi-envelope-fill"],[1,"bi","bi-phone-fill",2,"padding-left","12px"],[1,"bi","bi-pin-map-fill",2,"padding-left","12px"],["href","https://www.facebook.com/profile.php?id=100063058550130",1,"instagram"],[1,"bi","bi-facebook",2,"padding-left","12px"],["href","https://www.instagram.com/stimed_france/",1,"instagram"],[1,"bi","bi-instagram",2,"padding-left","12px"],["href","https://www.linkedin.com/company/stimed/",1,"instagram"],[1,"bi","bi-linkedin",2,"padding-left","12px"],["src","../../../assets/img/qrcode.JPG"],[1,"carousel-item","active",3,"id","ngClass"],["width","100%","height","500px","src","https://www.youtube.com/embed/k3p3BdoNvoY","frameborder","0","allowfullscreen",""],[1,"carousel-caption","d-none","d-md-block"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],["width","100%","height","500px","src","https://www.youtube.com/embed/lAIkv8Kd_dc","frameborder","0","allowfullscreen",""]],template:function(t,c){1&t&&(n.bc(0,"section",0),n.bc(1,"div",1),n.bc(2,"h1"),n.Oc(3),n.nc(4,"translate"),n.ac(),n.bc(5,"h2"),n.Oc(6),n.nc(7,"translate"),n.ac(),n.bc(8,"a",2),n.Oc(9),n.nc(10,"translate"),n.ac(),n.ac(),n.ac(),n.bc(11,"section",3),n.bc(12,"div",4),n.bc(13,"div",1),n.bc(14,"div",5),n.bc(15,"mat-tab-group",6),n.Oc(16,"7 "),n.bc(17,"mat-tab",7),n.nc(18,"translate"),n.bc(19,"div",8),n.bc(20,"div",1),n.bc(21,"div",4),n.bc(22,"div",9),n.bc(23,"div",10),n.Mc(24,p,15,6,"div",11),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.bc(25,"mat-tab",12),n.bc(26,"div",8),n.bc(27,"div",1),n.bc(28,"div",4),n.bc(29,"div",9),n.bc(30,"div",10),n.Mc(31,u,15,6,"div",11),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.bc(32,"section",13),n.bc(33,"div",1),n.Wb(34,"div",14),n.bc(35,"div",15),n.Wb(36,"img",16),n.Wb(37,"br"),n.Wb(38,"br"),n.bc(39,"h2"),n.Oc(40),n.nc(41,"translate"),n.ac(),n.bc(42,"p",17),n.bc(43,"a",18),n.Wb(44,"i",19),n.ac(),n.Oc(45," : contact@stimed.fr "),n.bc(46,"a",18),n.Wb(47,"i",20),n.ac(),n.Oc(48," : +33(0)380801954 "),n.bc(49,"a",18),n.Wb(50,"i",21),n.ac(),n.Oc(51," : 2, route d\xe9partementale 974, 21190 Meursault, France "),n.bc(52,"a",22),n.Wb(53,"i",23),n.ac(),n.bc(54,"a",24),n.Wb(55,"i",25),n.ac(),n.bc(56,"a",26),n.Wb(57,"i",27),n.ac(),n.Wb(58,"br"),n.Wb(59,"img",28),n.ac(),n.ac(),n.ac(),n.ac()),2&t&&(n.Jb(3),n.Pc(n.oc(4,7,"HOMES.PHRASE")),n.Jb(3),n.Pc(n.oc(7,9,"P.PH1")),n.Jb(3),n.Pc(n.oc(10,11,"HOMES.INFO")),n.Jb(8),n.tc("label",n.oc(18,13,"PROFILE.PROF")),n.Jb(7),n.sc("ngForOf",c.dataUrlD),n.Jb(7),n.sc("ngForOf",c.dataUrlP),n.Jb(9),n.Pc(n.oc(41,15,"HOMES.CONT")))},directives:[b.b,b.a,a.l,a.k],pipes:[l.c],styles:[".example-large-box[_ngcontent-%COMP%], .example-small-box[_ngcontent-%COMP%], .example-small-box2[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:16px;border-radius:8px;justify-content:center!important;margin:16px 16px 16px 100px}.example-small-box[_ngcontent-%COMP%]{height:550px;width:900px}.departments[_ngcontent-%COMP%]{width:100%}.example-large-box[_ngcontent-%COMP%]{height:550px;width:900px}"]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=n.Tb({type:t}),t.\u0275inj=n.Sb({factory:function(c){return new(c||t)},imports:[[i.h.forChild(m)],i.h]}),t})(),f=(()=>{class t{}return t.\u0275mod=n.Tb({type:t}),t.\u0275inj=n.Sb({factory:function(c){return new(c||t)},imports:[[a.c,h,b.c,l.b]]}),t})()}}]);