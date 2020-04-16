(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(1),i=n(2),s=n(4),u=n(3),l=n(0),o=n.n(l),c=n(6),h=n.n(c);n(14);function m(e){return o.a.createElement("button",{className:"square",onClick:e.onClick,style:e.style},e.value)}var p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"renderSquare",value:function(e,t){var n=this;return o.a.createElement(m,{value:this.props.squares[e],onClick:function(){return n.props.onClick(e)},style:t})}},{key:"createBox",value:function(){for(var e=[],t={},n={background:"grey"},r=0;r<3;++r){for(var a=[],i=0;i<3;++i){for(var s=t,u=0;u<3;++u)this.props.winning_path&&i+3*r==this.props.winning_path[u]&&(s=n);a.push(this.renderSquare(i+3*r,s))}e.push(o.a.createElement("div",null,a))}return e}},{key:"render",value:function(){return this.createBox()}}]),n}(o.a.Component),v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={history:[{squares:Array(9).fill(null),clicked:null}],stepNumber:0,xIsNext:!0,historyReverseOrder:!1},r}return Object(i.a)(n,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();f(n)||n[e]||(this.state.xIsNext?n[e]="X":n[e]="O",this.setState({history:t.concat([{squares:n,clicked:e}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"toggleOrder",value:function(){this.setState({historyReverseOrder:!this.state.historyReverseOrder})}},{key:"render",value:function(){var e,t=this,n=this.state.history.slice(0,this.state.stepNumber+1),r=n[this.state.stepNumber],a=f(r.squares),i=n.map((function(e,r){var a,i="("+(a=e.clicked,Math.floor(a/3)+1+", ")+function(e){return e%3+1}(e.clicked)+")",s=r?"Go to move #"+r+" "+i:"Go to game start";return r==n.length-1?o.a.createElement("li",{key:r},o.a.createElement("button",{onClick:function(){return t.jumpTo(r)},style:{fontWeight:"bold"}},s)):o.a.createElement("li",{key:r},o.a.createElement("button",{onClick:function(){return t.jumpTo(r)}},s))}));i=this.state.historyReverseOrder?i.reverse():i,e=a&&a.tie?"Tie":a?"Winner: "+a.winner:"Next player: "+(this.state.xIsNext?"X":"O");var s=null;return a&&(s=a.winning_path),o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement(p,{squares:r.squares,onClick:function(e){return t.handleClick(e)},winning_path:s})),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null,e),o.a.createElement("ol",null,i),o.a.createElement("button",{id:"toggle_order",onClick:function(){return t.toggleOrder()}},"Toggle Order"),o.a.createElement("button",{id:"reset_button",onClick:function(){return t.jumpTo(0)}},"Reset")))}}]),n}(o.a.Component);function f(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=!0,a=0;a<t.length;++a){var i=Object(r.a)(t[a],3),s=i[0],u=i[1],l=i[2];if(e[s]&&e[u]&&e[l]||(n=!1),e[s]&&e[s]===e[u]&&e[s]===e[l])return{winning_path:t[a],winner:e[s],tie:!1}}return n?{winning_path:null,winner:null,tie:!0}:null}h.a.render(o.a.createElement(v,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.dd4c5c67.chunk.js.map