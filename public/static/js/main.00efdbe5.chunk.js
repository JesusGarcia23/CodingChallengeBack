(this.webpackJsonptrimfront=this.webpackJsonptrimfront||[]).push([[0],{19:function(e,t,n){e.exports=n(43)},24:function(e,t,n){},25:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(12),u=n.n(r),i=(n(24),n(2)),o=n(13),m=n(14),c=n(17),s=n(15),p=n(18),d=(n(25),function(e){var t=e.allInfo,n=t.fullName,a=t.email,r=t.projectRepo,u=t.projectUrl,i=t.bestpracticeOOP,o=t.modularDevelopment,m=t.fulWorkUnderstanding,c=t.testing,s=t.databaseKnowledge,p=t.debugging,d=t.probSolvingSkills,E=t.javascript,f=t.html,v=t.css,b=t.workingTeam,g=t.selfMotivation,h=t.communicationSkills,I=t.ownEnergyLvl,N=t.intAptitude;return l.a.createElement("form",{className:"the-form",onSubmit:function(t){return e.handleSubmit(t)}},l.a.createElement("div",{className:"user-info"},l.a.createElement("input",{type:"text",name:"fullName",required:!0,value:n,onChange:function(t){return e.updateInput(t)},placeholder:"FULL NAME"}),l.a.createElement("input",{type:"email",name:"email",required:!0,value:a,onChange:function(t){return e.updateInput(t)},placeholder:"EMAIL"}),l.a.createElement("input",{type:"text",name:"projectRepo",required:!0,value:r,onChange:function(t){return e.updateInput(t)},placeholder:"PROJECT REPO"}),l.a.createElement("input",{type:"text",name:"projectUrl",required:!0,value:u,onChange:function(t){return e.updateInput(t)},placeholder:"PROJECT URL"})),l.a.createElement("div",{className:"skills-form"},l.a.createElement("div",{className:"form-skill"},l.a.createElement("label",null,"USING BEST PRACTICES FOR OOP:"),l.a.createElement("input",{type:"number",name:"bestpracticeOOP",min:0,value:i,onChange:function(t){return e.updateInput(t)}})),l.a.createElement("div",{className:"form-skill"},l.a.createElement("label",null,"MODULAR DEVELOPMENT:"),l.a.createElement("input",{type:"number",name:"modularDevelopment",min:0,value:o,onChange:function(t){return e.updateInput(t)}})),l.a.createElement("div",{className:"form-skill"},l.a.createElement("label",null,"FULL STACK WORKFLOW UNDERSTANDING:"),l.a.createElement("input",{type:"number",name:"fulWorkUnderstanding",min:0,value:m,onChange:function(t){return e.updateInput(t)}})),l.a.createElement("div",{className:"form-skill"},l.a.createElement("label",null,"TESTING:"),l.a.createElement("input",{type:"number",name:"testing",min:0,value:c,onChange:function(t){return e.updateInput(t)}})),l.a.createElement("div",{className:"form-skill"},l.a.createElement("label",null,"DATABASE KNOWLEDGE:"),l.a.createElement("input",{type:"number",name:"databaseKnowledge",min:0,value:s,onChange:function(t){return e.updateInput(t)}})),l.a.createElement("div",{className:"form-skill"},l.a.createElement("label",null,"DEBUGGING:"),l.a.createElement("input",{type:"number",name:"debugging",min:0,value:p,onChange:function(t){return e.updateInput(t)}})),l.a.createElement("div",{className:"form-skill"},l.a.createElement("label",null,"PROBLEM SOLVING SKILLS:"),l.a.createElement("input",{type:"number",name:"probSolvingSkills",min:0,value:d,onChange:function(t){return e.updateInput(t)}})),l.a.createElement("div",{className:"form-skill"},l.a.createElement("label",null,"JAVASCRIPT:"),l.a.createElement("input",{type:"number",name:"javascript",min:0,value:E,onChange:function(t){return e.updateInput(t)}})),l.a.createElement("div",{className:"form-skill"},l.a.createElement("label",null,"HTML:"),l.a.createElement("input",{type:"number",name:"html",min:0,value:f,onChange:function(t){return e.updateInput(t)}})),l.a.createElement("div",{className:"form-skill"},l.a.createElement("label",null,"CSS:"),l.a.createElement("input",{type:"number",name:"css",min:0,value:v,onChange:function(t){return e.updateInput(t)}})),l.a.createElement("div",{className:"form-skill"},l.a.createElement("label",null,"WORKING ON A TEAM:"),l.a.createElement("input",{type:"number",name:"workingTeam",min:0,value:b,onChange:function(t){return e.updateInput(t)}})),l.a.createElement("div",{className:"form-skill"},l.a.createElement("label",null,"SELF MOTIVATION:"),l.a.createElement("input",{type:"number",name:"selfMotivation",min:0,value:g,onChange:function(t){return e.updateInput(t)}})),l.a.createElement("div",{className:"form-skill"},l.a.createElement("label",null,"COMMUNICATIONS SKILLS:"),l.a.createElement("input",{type:"number",name:"communicationSkills",min:0,value:h,onChange:function(t){return e.updateInput(t)}})),l.a.createElement("div",{className:"form-skill"},l.a.createElement("label",null,"YOUR OWN ENERGY LEVEL:"),l.a.createElement("input",{type:"number",name:"ownEnergyLvl",min:0,value:I,onChange:function(t){return e.updateInput(t)}})),l.a.createElement("div",{className:"form-skill"},l.a.createElement("label",null,"INTELLIGENCE / APTITUDE:"),l.a.createElement("input",{type:"number",name:"intAptitude",min:0,value:N,onChange:function(t){return e.updateInput(t)}}))),l.a.createElement("button",null,"SUBMIT"))}),E=n(16),f=n.n(E),v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),f.a.post("".concat("https://devquestionnaire.herokuapp.com","/submitForm"),n.state).then((function(e){200!==e.status||e.data.errors?console.log(e.data.errors):n.setState({fullName:"",email:"",projectRepo:"",projectUrl:"",bestpracticeOOP:0,modularDevelopment:0,fulWorkUnderstanding:0,testing:0,databaseKnowledge:0,debugging:0,probSolvingSkills:0,javascript:0,html:0,css:0,workingTeam:0,selfMotivation:0,communicationSkills:0,ownEnergyLvl:0,intAptitude:0,totalPoint:0},(function(){alert("THANK YOU! YOUR APPLICATION WAS SUCCESSFULLY SUBMITED!"),window.scrollTo(0,0)}))})).catch((function(e){return console.log(e)}))},n.updateInput=function(e){e.preventDefault();var t=e.target,a=t.name,l=t.value,r=t.type,u=Number(l);if("number"!==r)n.setState(Object(i.a)({},a,l));else{var o=n.state;50===n.state.totalPoint&&u>o[a]&&(u-=1),n.state.totalPoint<n.state.maxPoint&&(o[a]=u);var m,c=0;for(var s in n.state)"number"===typeof n.state[s]&&"maxPoint"!==s&&"totalPoint"!==s&&(c+=o[s]);if(c<n.state.maxPoint)n.setState((m={},Object(i.a)(m,a,u),Object(i.a)(m,"totalPoint",c),m))}},n.state={fullName:"",email:"",projectRepo:"",projectUrl:"",bestpracticeOOP:0,modularDevelopment:0,fulWorkUnderstanding:0,testing:0,databaseKnowledge:0,debugging:0,probSolvingSkills:0,javascript:0,html:0,css:0,workingTeam:0,selfMotivation:0,communicationSkills:0,ownEnergyLvl:0,intAptitude:0,maxPoint:51,totalPoint:0},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{allInfo:this.state,updateInput:this.updateInput,handleSubmit:this.handleSubmit}))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.00efdbe5.chunk.js.map