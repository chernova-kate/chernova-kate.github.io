"use strict";(self.webpackChunkassignment_frontend=self.webpackChunkassignment_frontend||[]).push([[21],{9021:(M,c,s)=>{s.r(c),s.d(c,{NewTodoModule:()=>k});var u=s(6895),i=s(433),a=s(9199),m=s(7801),o=s(8256),b=s(4824);let p=(()=>{class t{constructor(e){this.control=e,this.focused=!1}onFocus(){this.focused=!0}onFocusOut(){this.focused=!1}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(i.a5))},t.\u0275dir=o.lG2({type:t,selectors:[["","appFormControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("focus",function(){return r.onFocus()})("focusout",function(){return r.onFocusOut()})}}),t})();var g=s(7579),F=s(4482),v=s(5403),y=s(8421),T=s(5032);function w(t,n){if(1&t&&(o.TgZ(0,"span",3),o._uU(1),o.qZA()),2&t){const e=n.$implicit;o.xp6(1),o.Oqu(e)}}function S(t,n){if(1&t&&(o.ynx(0),o.YNc(1,w,2,1,"span",2),o.BQk()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngForOf",e.errorKeys)}}const Z=function(t){return{invalid:t}},N=["*"];let A=(()=>{class t{constructor(e){this.cdr=e,this.showSubmitErrors=!1,this.errorsShownOnSubmit=["required"],this.errorsToShow=[],this.unsubscribe=new g.x}ngAfterContentInit(){this.control?.statusChanges?.pipe(function C(t){return(0,F.e)((n,e)=>{(0,y.Xf)(t).subscribe((0,v.x)(e,()=>e.complete(),T.Z)),!e.closed&&n.subscribe(e)})}(this.unsubscribe)).subscribe(()=>this.cdr.detectChanges())}ngOnDestroy(){this.unsubscribe.next(),this.unsubscribe.complete()}get control(){return this.controlDirective?.control}get errors(){return this.control?.errors||{}}get errorKeys(){return this.errorsToShow}get isErrorVisible(){const e=Object.keys(this.errors);return!!e.length&&(this.showSubmitErrors?(this.errorsToShow=e,!!this.errorsToShow.length):(this.errorsToShow=e.filter(r=>!this.errorsShownOnSubmit.includes(r)),!!this.errorsToShow.length))}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.sBO))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-form-field"]],contentQueries:function(e,r,l){if(1&e&&o.Suo(l,p,5),2&e){let d;o.iGM(d=o.CRH())&&(r.controlDirective=d.first)}},inputs:{showSubmitErrors:"showSubmitErrors",errorsShownOnSubmit:"errorsShownOnSubmit"},ngContentSelectors:N,decls:3,vars:4,consts:[[1,"form-field",3,"ngClass"],[4,"ngIf"],["class","invalid-feedback",4,"ngFor","ngForOf"],[1,"invalid-feedback"]],template:function(e,r){1&e&&(o.F$t(),o.TgZ(0,"div",0),o.Hsn(1),o.qZA(),o.YNc(2,S,2,1,"ng-container",1)),2&e&&(o.Q6J("ngClass",o.VKq(2,Z,r.isErrorVisible)),o.xp6(2),o.Q6J("ngIf",r.isErrorVisible))},dependencies:[u.mk,u.sg,u.O5],styles:[".invalid-feedback[_ngcontent-%COMP%]{display:block}"],changeDetection:0}),t})();const O=[{path:"",component:(()=>{class t{constructor(e,r){this.appService=e,this.router=r,this.isLoading=!1,this.TodoPriority=m.N,this.todoForm=new i.cw({title:new i.NI(null,[i.kI.required,i.kI.maxLength(10)]),date:new i.NI(null,[i.kI.required]),priority:new i.NI(m.N.NORMAL)})}onSubmit(){if(this.todoForm.invalid||this.isLoading)return;this.isLoading=!0;const{title:e,date:r,priority:l}=this.todoForm.value;this.appService.todos.next([...this.appService.todos.value,{title:e,date:+new Date(r),priority:l,done:!1}]),this.router.navigate(["/"]).then(()=>this.isLoading=!1)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(b.z),o.Y36(a.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-new-todo"]],decls:36,vars:10,consts:[[1,"page-header"],[1,"fw-bold"],["routerLink","../","title","Back to the list",1,"btn","btn-secondary","btn-sm","ms-auto"],[3,"formGroup","ngSubmit"],["f","ngForm"],[1,"mb-3"],[3,"showSubmitErrors"],["for","todoTitle",1,"form-label"],["id","todoTitle","appFormControl","","type","text","formControlName","title",1,"form-control"],[1,"row"],[1,"col"],["for","dueDate",1,"form-label"],["id","dueDate","appFormControl","","type","date","formControlName","date",1,"form-control"],[1,"form-label","me-3"],[1,"btn-group"],["appFormControl","","formControlName","priority","type","radio","name","priority","id","btnradio1","autocomplete","off",1,"btn-check",3,"value","checked"],["for","btnradio1",1,"btn","btn-outline-primary"],["appFormControl","","formControlName","priority","type","radio","name","priority","id","btnradio2","autocomplete","off",1,"btn-check",3,"value","checked"],["for","btnradio2",1,"btn","btn-outline-primary"],["appFormControl","","formControlName","priority","type","radio","name","priority","id","btnradio3","autocomplete","off",1,"btn-check",3,"value","checked"],["for","btnradio3",1,"btn","btn-outline-primary"],["type","submit",1,"btn","btn-primary"]],template:function(e,r){if(1&e&&(o.TgZ(0,"div",0)(1,"div",1),o._uU(2,"Add Todo"),o.qZA(),o.TgZ(3,"button",2),o._uU(4," Back "),o.qZA()(),o.TgZ(5,"form",3,4),o.NdJ("ngSubmit",function(){return r.onSubmit()}),o.TgZ(7,"div",5)(8,"app-form-field",6)(9,"label",7),o._uU(10,"Todo title:"),o.qZA(),o._UZ(11,"input",8),o.qZA()(),o.TgZ(12,"div",9)(13,"div",10)(14,"div",5)(15,"app-form-field",6)(16,"label",11),o._uU(17,"Todo due date:"),o.qZA(),o._UZ(18,"input",12),o.qZA()()(),o.TgZ(19,"div",10)(20,"div",5)(21,"app-form-field",6)(22,"label",13),o._uU(23,"Todo priority:"),o.qZA(),o.TgZ(24,"div",14),o._UZ(25,"input",15),o.TgZ(26,"label",16),o._uU(27,"Low"),o.qZA(),o._UZ(28,"input",17),o.TgZ(29,"label",18),o._uU(30,"Normal"),o.qZA(),o._UZ(31,"input",19),o.TgZ(32,"label",20),o._uU(33,"High"),o.qZA()()()()()(),o.TgZ(34,"button",21),o._uU(35,"Submit"),o.qZA()()),2&e){const l=o.MAs(6);let d,f,h;o.xp6(5),o.Q6J("formGroup",r.todoForm),o.xp6(3),o.Q6J("showSubmitErrors",l.submitted),o.xp6(7),o.Q6J("showSubmitErrors",l.submitted),o.xp6(6),o.Q6J("showSubmitErrors",l.submitted),o.xp6(4),o.Q6J("value",r.TodoPriority.LOW)("checked",(null==(d=r.todoForm.get("priority"))?null:d.value)===r.TodoPriority.LOW),o.xp6(3),o.Q6J("value",r.TodoPriority.NORMAL)("checked",(null==(f=r.todoForm.get("priority"))?null:f.value)===r.TodoPriority.NORMAL),o.xp6(3),o.Q6J("value",r.TodoPriority.HIGH)("checked",(null==(h=r.todoForm.get("priority"))?null:h.value)===r.TodoPriority.HIGH)}},dependencies:[i._Y,i.Fj,i._,i.JJ,i.JL,i.sg,i.u,p,A,a.rH],changeDetection:0}),t})()}];let J=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[a.Bz.forChild(O),a.Bz]}),t})(),U=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[u.ez]}),t})(),k=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[u.ez,i.UX,U,J]}),t})()}}]);