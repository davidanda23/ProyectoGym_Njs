(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{UrDz:function(r,e,t){"use strict";t.r(e),t.d(e,"RegisterModule",(function(){return p}));var o=t("ofXK"),n=t("tyNb"),i=t("mrSG"),s=t("3Pt+"),a=t("N/25"),c=t("fXoL");function b(r,e){1&r&&(c.Qb(0,"div",18),c.Qb(1,"span",19),c.tc(2,"Loading..."),c.Pb(),c.Pb())}function d(r,e){1&r&&(c.Qb(0,"div",20),c.tc(1," Email requerido "),c.Pb())}function l(r,e){1&r&&(c.Qb(0,"div",20),c.tc(1," Formato de correo incorrecto "),c.Pb())}function m(r,e){1&r&&(c.Qb(0,"div",20),c.tc(1," Las contrase\xf1as no coinciden. "),c.Pb())}const u=function(){return["/login"]},f=[{path:"",component:(()=>{class r{constructor(r,e){this.authSvc=r,this.router=e,this.registerForm=new s.d({email:new s.b("",[s.n.required,s.n.minLength(2),s.n.email]),password:new s.b("",s.n.required),confirmPassword:new s.b("",[s.n.required])}),this.bandera=!0,setTimeout(()=>{this.bandera=!1},300)}ngOnInit(){}onRegister(){return Object(i.__awaiter)(this,void 0,void 0,(function*(){const{email:r,password:e,confirmPassword:t}=this.registerForm.value;try{const o=yield this.authSvc.register(r,e);o&&this.checkUserIsVerified(o),e===t?console.log("Contrase\xf1as coinciden"):console.log("Contrase\xf1as no coinciden")}catch(o){console.log(o)}}))}checkUserIsVerified(r){this.router.navigate(r&&r.emailVerified?["/home"]:r?["/verification-email"]:["/register"])}passwordsMatch(r){return r.get("password").value===r.get("confirmPassword").value}}return r.\u0275fac=function(e){return new(e||r)(c.Nb(a.a),c.Nb(n.a))},r.\u0275cmp=c.Hb({type:r,selectors:[["app-register"]],features:[c.Bb([a.a])],decls:30,vars:8,consts:[["class","spinner-border","role","status",4,"ngIf"],[1,"row"],[1,"col-md-6","mx-auto","mt-5"],[1,"card"],[1,"card-body"],[1,"text-center"],["novalidate","",3,"formGroup","ngSubmit"],[1,"form-group"],["for","email"],["type","email","formControlName","email",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["for","password"],["type","password","formControlName","password",1,"form-control"],["for","confirmPassword"],["type","password","formControlName","confirmPassword",1,"form-control"],["type","submit",1,"btn","btn-primary","btn-lg","btn-block",3,"disabled"],[1,"form-group","mt-3"],[3,"routerLink"],["role","status",1,"spinner-border"],[1,"sr-only"],[1,"alert","alert-danger"]],template:function(r,e){1&r&&(c.rc(0,b,3,0,"div",0),c.Qb(1,"div",1),c.Qb(2,"div",2),c.Qb(3,"div",3),c.Qb(4,"div",4),c.Qb(5,"h1",5),c.tc(6,"REGISTER"),c.Pb(),c.Qb(7,"form",6),c.Yb("ngSubmit",(function(){return e.onRegister()})),c.Qb(8,"div",7),c.Qb(9,"label",8),c.tc(10,"Email"),c.Pb(),c.Ob(11,"input",9),c.rc(12,d,2,0,"div",10),c.rc(13,l,2,0,"div",10),c.Pb(),c.Qb(14,"div",7),c.Qb(15,"label",11),c.tc(16,"Password"),c.Pb(),c.Ob(17,"input",12),c.Pb(),c.Qb(18,"div",7),c.Qb(19,"label",13),c.tc(20,"Confirm your password"),c.Pb(),c.Ob(21,"input",14),c.rc(22,m,2,0,"div",10),c.Pb(),c.Qb(23,"button",15),c.tc(24,"Register"),c.Pb(),c.Pb(),c.Qb(25,"div",16),c.Qb(26,"p"),c.tc(27,"Do you have an account? "),c.Qb(28,"a",17),c.tc(29,"Login"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&r&&(c.fc("ngIf",e.bandera),c.Cb(7),c.fc("formGroup",e.registerForm),c.Cb(5),c.fc("ngIf",e.registerForm.get("email").hasError("required")&&e.registerForm.get("email").touched),c.Cb(1),c.fc("ngIf",e.registerForm.get("email").hasError("email")&&e.registerForm.get("email").touched),c.Cb(9),c.fc("ngIf",!e.passwordsMatch(e.registerForm)),c.Cb(1),c.fc("disabled",e.registerForm.invalid),c.Cb(5),c.fc("routerLink",c.gc(7,u)))},directives:[o.j,s.p,s.h,s.e,s.a,s.g,s.c,n.b],styles:[""]}),r})()}];let g=(()=>{class r{}return r.\u0275mod=c.Lb({type:r}),r.\u0275inj=c.Kb({factory:function(e){return new(e||r)},imports:[[n.c.forChild(f)],n.c]}),r})(),p=(()=>{class r{}return r.\u0275mod=c.Lb({type:r}),r.\u0275inj=c.Kb({factory:function(e){return new(e||r)},imports:[[o.c,g,s.l]]}),r})()}}]);