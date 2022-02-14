(()=>{"use strict";const t=(()=>{const t=document.querySelector(".P1"),e=document.querySelector(".P2"),a=()=>{e.classList.add("active")};return a(),{init:a,renderGameboard:(a,s,i)=>{const r="P1"===a?t:e;r.classList.add(s),i.forEach((t=>r.appendChild((t=>{const e=document.createElement("div");return e.classList.add("cell"),e.setAttribute("data-coords",`${t.coords.x} ${t.coords.y}`),t.hasShip&&e.classList.add("ship"),(t=>{t.addEventListener("click",(()=>{const e=t.getAttribute("data-coords").split(" "),a={x:+e[0],y:+e[1]};o.playTurn(a)}))})(e),e})(t))))},cellHit:t=>{const e=`${t.x} ${t.y}`;document.querySelector(`.active > [data-coords="${e}"]`).classList.add("hit")},shipSunk:t=>{t.forEach((t=>{document.querySelector(`.active > [data-coords="${t.x} ${t.y}"]`).classList.add("sunk")}))},toggleActiveBoard:()=>{t.classList.toggle("active"),e.classList.toggle("active")}}})(),e=e=>{const a=[],s=(t=>{const e=[];for(let a=0;a<t*t;a++)e.push({coords:{x:a%t,y:Math.floor(a/t)},hasShip:"",isShot:!1});return e})(e),i=t=>s[t.x+t.y*e];return{at:i,isValidAttack:t=>!i(t).isShot,isShipHit:t=>""!==i(t).hasShip,receiveAttack:e=>{const o=i(e);if(o.isShot=!0,t.cellHit(e),o.hasShip){const e=a.find((t=>t.name===o.hasShip));e.hit(),e.isSunk()&&(e=>{console.log(e);const a=s.filter((t=>t.hasShip===e)).map((t=>t.coords));t.shipSunk(a)})(e.name)}},setShip:(t,e,s="x")=>{a.push(t);let o=e;for(let e=0;e<t.getLength();e++)i(o).hasShip=t.name,"x"===s?o.x++:o.y++},getBoard:()=>s}},a=t=>({name:t,gameboard:e(10),isActive:!1}),s=(t,e)=>{const a=t;let s=0;return{name:e,getLength:()=>a,getHits:()=>s,hit:()=>{s++},isSunk:()=>a===s}},i=t=>{const e=t.filter((t=>!t.isShot));return e[Math.floor(Math.random()*e.length)].coords},o=(()=>{const e=a("player"),o=a("enemy"),r=()=>e.isActive?o:e,c=a=>{const s=r().gameboard;s.isValidAttack(a)&&(s.receiveAttack(a),s.isShipHit(a)||(e.isActive=!e.isActive,o.isActive=!o.isActive,t.toggleActiveBoard()),n())},n=async()=>{o.isActive&&(await(300,new Promise((t=>setTimeout(t,300)))),c(i(r().gameboard.getBoard())))};return{init:()=>{(()=>{e.isActive=!0;let a=[s(4,"ak"),s(2,"b")];e.gameboard.setShip(a[0],{x:1,y:2},"x"),e.gameboard.setShip(a[1],{x:2,y:5},"y"),t.renderGameboard("P1",e.name,e.gameboard.getBoard())})(),(()=>{o.isActive=!1;let e=[s(3,"enemya"),s(2,"enemyb")];o.gameboard.setShip(e[0],{x:1,y:1},"x"),o.gameboard.setShip(e[1],{x:2,y:5},"y"),t.renderGameboard("P2",o.name,o.gameboard.getBoard())})()},playTurn:c}})();o.init()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQ2xEaUQsRUFBUVIsVUFBVUwsUUFBUXRCLEVBQU0sR0FBSSxDQUFDZixFQUFHLEVBQUdDLEVBQUcsR0FBSSxLQUNsRCxrQkFBbUIsS0FBTWlELEVBQVFyQixLQUFNcUIsRUFBUVIsVUFBVUQsYUEyQnpEbUIsR0F4QmtCLE1BQ2xCVCxFQUFRUixVQUFXLEVBQ25CLElBQUk1QixFQUFRLENBQUMsRUFBSyxFQUFHLFVBQVcsRUFBSyxFQUFHLFdBQ3hDb0MsRUFBUVQsVUFBVUwsUUFBUXRCLEVBQU0sR0FBSSxDQUFDZixFQUFHLEVBQUdDLEVBQUcsR0FBSSxLQUNsRGtELEVBQVFULFVBQVVMLFFBQVF0QixFQUFNLEdBQUksQ0FBQ2YsRUFBRyxFQUFHQyxFQUFHLEdBQUksS0FDbEQsa0JBQW1CLEtBQU1rRCxFQUFRdEIsS0FBTXNCLEVBQVFULFVBQVVELGFBb0J6RG9CLElBS0FSLFNBQUFBLElBekRtQixHQ0h2QixVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL1VJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRmFjdG9yaWVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0ZhY3Rvcmllcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9GYWN0b3JpZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvQUlQbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XG5cblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuICBjb25zdCAkcDFHYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuUDEnKTtcbiAgY29uc3QgJHAyR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlAyJyk7XG4gIFxuICBjb25zdCBuZXdDZWxsRE9NID0gKGNlbGwpID0+IHtcbiAgICAgIGNvbnN0ICRjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAkY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAkY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRzJywgYCR7Y2VsbC5jb29yZHMueH0gJHtjZWxsLmNvb3Jkcy55fWApO1xuICAgICAgaWYgKGNlbGwuaGFzU2hpcCkgJGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgYWRkQ2VsbExpc3RlbmVyKCRjZWxsKTtcbiAgICAgIHJldHVybiAkY2VsbDtcbiAgfVxuXG4gIGNvbnN0IGFkZENlbGxMaXN0ZW5lciA9ICgkY2VsbCkgPT4ge1xuICAgICRjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY29vcmRzQXJyYXkgPSAkY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRzJykuc3BsaXQoJyAnKTtcbiAgICAgIGNvbnN0IGNvb3JkcyA9IHt4OiArY29vcmRzQXJyYXlbMF0sIHk6ICtjb29yZHNBcnJheVsxXX07XG4gICAgICBHYW1lQ29udHJvbGxlci5wbGF5VHVybihjb29yZHMpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY2VsbEhpdCA9IChjb29yZHMpID0+IHtcbiAgICBjb25zdCBlbmNvZGVkQ29vcmRzID0gYCR7Y29vcmRzLnh9ICR7Y29vcmRzLnl9YDtcbiAgICBjb25zdCAkY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5hY3RpdmUgPiBbZGF0YS1jb29yZHM9XCIke2VuY29kZWRDb29yZHN9XCJdYCk7XG4gICAgJGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gIH1cblxuICBjb25zdCB0b2dnbGVBY3RpdmVCb2FyZCA9ICgpID0+IHtcbiAgICAkcDFHYW1lYm9hcmQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgJHAyR2FtZWJvYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICB9XG5cbiAgY29uc3Qgc2hpcFN1bmsgPSAoY29vcmRzQXJyYXkpID0+IHtcbiAgICBjb29yZHNBcnJheS5mb3JFYWNoKGNvb3JkcyA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWN0aXZlID4gW2RhdGEtY29vcmRzPVwiJHtjb29yZHMueH0gJHtjb29yZHMueX1cIl1gKS5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHJlbmRlckdhbWVib2FyZCA9IChwbGF5ZXIsIHBsYXllck5hbWUsIGJvYXJkKSA9PiB7XG4gICAgY29uc3QgJGJvYXJkID0gcGxheWVyID09PSAnUDEnID8gJHAxR2FtZWJvYXJkIDogJHAyR2FtZWJvYXJkO1xuICAgICRib2FyZC5jbGFzc0xpc3QuYWRkKHBsYXllck5hbWUpO1xuICAgIGJvYXJkLmZvckVhY2goY2VsbCA9PiAkYm9hcmQuYXBwZW5kQ2hpbGQobmV3Q2VsbERPTShjZWxsKSkpO1xuICB9XG5cbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAkcDJHYW1lYm9hcmQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH1cblxuICBpbml0KCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICAgIHJlbmRlckdhbWVib2FyZCxcbiAgICBjZWxsSGl0LFxuICAgIHNoaXBTdW5rLFxuICAgIHRvZ2dsZUFjdGl2ZUJvYXJkLFxuICB9O1xuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBVSTsiLCJpbXBvcnQgVUkgZnJvbSBcIi4uL01vZHVsZXMvVUlcIjtcblxuY29uc3QgR2FtZWJvYXJkID0gKHNpemUpID0+IHtcblxuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGNvbnN0IGNlbGwgPSAoeCwgeSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBjb29yZHM6IHt4LCB5fSxcbiAgICAgIGhhc1NoaXA6ICcnLFxuICAgICAgaXNTaG90OiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjb25zdCBfbWFrZUdyaWQgPSAoc2l6ZSkgPT4ge1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZSAqIHNpemU7IGkrKykge1xuICAgICAgYXJyLnB1c2goY2VsbChpICUgc2l6ZSwgTWF0aC5mbG9vcihpIC8gc2l6ZSkpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGNvbnN0IGJvYXJkID0gX21ha2VHcmlkKHNpemUpO1xuICBjb25zdCBhdCA9IChjb29yZHMpID0+IGJvYXJkW2Nvb3Jkcy54ICsgY29vcmRzLnkgKiBzaXplXTtcblxuICBjb25zdCBpc1ZhbGlkQXR0YWNrID0gKGNvb3JkcykgPT4ge1xuICAgIHJldHVybiAhYXQoY29vcmRzKS5pc1Nob3Q7XG4gIH1cblxuICBjb25zdCBpc1NoaXBIaXQgPSAoY29vcmRzKSA9PiB7XG4gICAgcmV0dXJuIGF0KGNvb3JkcykuaGFzU2hpcCAhPT0gJyc7XG4gIH1cblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkcykgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBhdChjb29yZHMpO1xuICAgIGNlbGwuaXNTaG90ID0gdHJ1ZTtcbiAgICBVSS5jZWxsSGl0KGNvb3Jkcyk7XG4gICAgaWYgKGNlbGwuaGFzU2hpcCkge1xuICAgICAgY29uc3Qgc2hpcCA9IHNoaXBzLmZpbmQoc2hpcCA9PiBzaGlwLm5hbWUgPT09IGNlbGwuaGFzU2hpcCk7XG4gICAgICBzaGlwLmhpdCgpO1xuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHNoaXBTdW5rKHNoaXAubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2V0U2hpcCA9IChzaGlwLCBjb29yZHMsIGF4aXMgPSAneCcpID0+IHtcbiAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIGxldCBuZXdDb29yZHMgPSBjb29yZHM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgIGF0KG5ld0Nvb3JkcykuaGFzU2hpcCA9IHNoaXAubmFtZTtcbiAgICAgIGF4aXMgPT09ICd4JyA/IG5ld0Nvb3Jkcy54Kys6IG5ld0Nvb3Jkcy55Kys7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hpcFN1bmsgPSAoc2hpcE5hbWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzaGlwTmFtZSk7XG4gICAgY29uc3QgY29vcmRzQXJyYXkgPSBib2FyZC5maWx0ZXIoY2VsbCA9PiBjZWxsLmhhc1NoaXAgPT09IHNoaXBOYW1lKS5tYXAoY2VsbCA9PiBjZWxsLmNvb3Jkcyk7XG4gICAgVUkuc2hpcFN1bmsoY29vcmRzQXJyYXkpO1xuICB9XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcblxuICByZXR1cm4ge1xuICAgIGF0LFxuICAgIGlzVmFsaWRBdHRhY2ssXG4gICAgaXNTaGlwSGl0LFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgc2V0U2hpcCxcbiAgICBnZXRCb2FyZCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCJcblxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIGdhbWVib2FyZDogR2FtZWJvYXJkKDEwKSxcbiAgICBpc0FjdGl2ZTogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjb25zdCBTaGlwID0gKGxlbmd0aCwgbmFtZSkgPT4ge1xuICBjb25zdCBzaGlwTGVuZ3RoID0gbGVuZ3RoO1xuICBsZXQgaGl0Q291bnQgPSAwO1xuXG4gIC8vIEdldHRlcnNcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gc2hpcExlbmd0aDtcbiAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IGhpdENvdW50O1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRDb3VudCsrO1xuICB9XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwTGVuZ3RoID09PSBoaXRDb3VudDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBnZXRMZW5ndGgsXG4gICAgZ2V0SGl0cyxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsImNvbnN0IEFJID0gKCgpID0+IHtcblxuICBjb25zdCBnZXRDb29yZHMgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCB2YWxpZENlbGxzID0gYm9hcmQuZmlsdGVyKGNlbGwgPT4gIWNlbGwuaXNTaG90KTtcbiAgICBjb25zdCBjb29yZHMgPSB2YWxpZENlbGxzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbGlkQ2VsbHMubGVuZ3RoKV0uY29vcmRzO1xuICAgIHJldHVybiBjb29yZHM7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRDb29yZHMsXG4gIH07XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFJOyIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL0ZhY3Rvcmllcy9QbGF5ZXJcIlxuaW1wb3J0IFNoaXAgZnJvbSBcIi4uL0ZhY3Rvcmllcy9TaGlwXCI7XG5pbXBvcnQgVUkgZnJvbSBcIi4vVUlcIjtcbmltcG9ydCBBSSBmcm9tIFwiLi9BSVBsYXllclwiO1xuXG5jb25zdCBHYW1lQ29udHJvbGxlciA9ICgoKSA9PiB7XG5cbiAgY29uc3QgcGxheWVyMSA9IFBsYXllcigncGxheWVyJyk7XG4gIGNvbnN0IHBsYXllcjIgPSBQbGF5ZXIoJ2VuZW15Jyk7XG5cbiAgZnVuY3Rpb24gc2xlZXAobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gIH0gXG5cbiAgY29uc3Qgb3Bwb25lbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBsYXllcjEuaXNBY3RpdmUgPyBwbGF5ZXIyOiBwbGF5ZXIxO1xuICB9XG5cbiAgY29uc3QgdG9nZ2xlQWN0aXZlUGxheWVyID0gKCkgPT4ge1xuICAgIHBsYXllcjEuaXNBY3RpdmUgPSAhcGxheWVyMS5pc0FjdGl2ZTtcbiAgICBwbGF5ZXIyLmlzQWN0aXZlID0gIXBsYXllcjIuaXNBY3RpdmU7XG4gICAgVUkudG9nZ2xlQWN0aXZlQm9hcmQoKTtcbiAgfVxuXG4gIGNvbnN0IGluaXRQbGF5ZXIxID0gKCkgPT4ge1xuICAgIHBsYXllcjEuaXNBY3RpdmUgPSB0cnVlO1xuICAgIGxldCBzaGlwcyA9IFtTaGlwKDQsICdhaycpLCBTaGlwKDIsICdiJyldO1xuICAgIHBsYXllcjEuZ2FtZWJvYXJkLnNldFNoaXAoc2hpcHNbMF0sIHt4OiAxLCB5OiAyfSwgJ3gnKTtcbiAgICBwbGF5ZXIxLmdhbWVib2FyZC5zZXRTaGlwKHNoaXBzWzFdLCB7eDogMiwgeTogNX0sICd5Jyk7XG4gICAgVUkucmVuZGVyR2FtZWJvYXJkKCdQMScsIHBsYXllcjEubmFtZSwgcGxheWVyMS5nYW1lYm9hcmQuZ2V0Qm9hcmQoKSk7XG4gIH1cblxuICBjb25zdCBpbml0UGxheWVyMiA9ICgpID0+IHtcbiAgICBwbGF5ZXIyLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgbGV0IHNoaXBzID0gW1NoaXAoMywgJ2VuZW15YScpLCBTaGlwKDIsICdlbmVteWInKV07XG4gICAgcGxheWVyMi5nYW1lYm9hcmQuc2V0U2hpcChzaGlwc1swXSwge3g6IDEsIHk6IDF9LCAneCcpO1xuICAgIHBsYXllcjIuZ2FtZWJvYXJkLnNldFNoaXAoc2hpcHNbMV0sIHt4OiAyLCB5OiA1fSwgJ3knKTtcbiAgICBVSS5yZW5kZXJHYW1lYm9hcmQoJ1AyJywgcGxheWVyMi5uYW1lLCBwbGF5ZXIyLmdhbWVib2FyZC5nZXRCb2FyZCgpKTtcbiAgfVxuXG4gIGNvbnN0IHBsYXlUdXJuID0gKGNvb3JkcykgPT4ge1xuICAgIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBvcHBvbmVudCgpLmdhbWVib2FyZDtcbiAgICBpZiAoIW9wcG9uZW50Qm9hcmQuaXNWYWxpZEF0dGFjayhjb29yZHMpKSByZXR1cm47XG4gICAgb3Bwb25lbnRCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgaWYgKCFvcHBvbmVudEJvYXJkLmlzU2hpcEhpdChjb29yZHMpKSB0b2dnbGVBY3RpdmVQbGF5ZXIoKTtcbiAgICBwbGF5R2FtZSgpO1xuICB9XG5cbiAgY29uc3QgcGxheUdhbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHBsYXllcjIuaXNBY3RpdmUpIHtcbiAgICAgIGF3YWl0IHNsZWVwKDMwMCk7XG4gICAgICBwbGF5VHVybihBSS5nZXRDb29yZHMob3Bwb25lbnQoKS5nYW1lYm9hcmQuZ2V0Qm9hcmQoKSkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgaW5pdFBsYXllcjEoKTtcbiAgICBpbml0UGxheWVyMigpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICBwbGF5VHVybixcbiAgfTtcblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbnRyb2xsZXI7IiwiaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuL01vZHVsZXMvR2FtZUNvbnRyb2xsZXJcIjtcblxuR2FtZUNvbnRyb2xsZXIuaW5pdCgpOyJdLCJuYW1lcyI6WyIkcDFHYW1lYm9hcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkcDJHYW1lYm9hcmQiLCJpbml0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVuZGVyR2FtZWJvYXJkIiwicGxheWVyIiwicGxheWVyTmFtZSIsImJvYXJkIiwiJGJvYXJkIiwiZm9yRWFjaCIsImNlbGwiLCJhcHBlbmRDaGlsZCIsIiRjZWxsIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNvb3JkcyIsIngiLCJ5IiwiaGFzU2hpcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb29yZHNBcnJheSIsImdldEF0dHJpYnV0ZSIsInNwbGl0IiwiYWRkQ2VsbExpc3RlbmVyIiwibmV3Q2VsbERPTSIsImNlbGxIaXQiLCJlbmNvZGVkQ29vcmRzIiwic2hpcFN1bmsiLCJ0b2dnbGVBY3RpdmVCb2FyZCIsInRvZ2dsZSIsInNpemUiLCJzaGlwcyIsImFyciIsImkiLCJwdXNoIiwiTWF0aCIsImZsb29yIiwiaXNTaG90IiwiX21ha2VHcmlkIiwiYXQiLCJpc1ZhbGlkQXR0YWNrIiwiaXNTaGlwSGl0IiwicmVjZWl2ZUF0dGFjayIsInNoaXAiLCJmaW5kIiwibmFtZSIsImhpdCIsImlzU3VuayIsInNoaXBOYW1lIiwiY29uc29sZSIsImxvZyIsImZpbHRlciIsIm1hcCIsInNldFNoaXAiLCJheGlzIiwibmV3Q29vcmRzIiwiZ2V0TGVuZ3RoIiwiZ2V0Qm9hcmQiLCJnYW1lYm9hcmQiLCJpc0FjdGl2ZSIsImxlbmd0aCIsInNoaXBMZW5ndGgiLCJoaXRDb3VudCIsImdldEhpdHMiLCJ2YWxpZENlbGxzIiwicmFuZG9tIiwicGxheWVyMSIsInBsYXllcjIiLCJvcHBvbmVudCIsInBsYXlUdXJuIiwib3Bwb25lbnRCb2FyZCIsInBsYXlHYW1lIiwiYXN5bmMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJpbml0UGxheWVyMSIsImluaXRQbGF5ZXIyIl0sInNvdXJjZVJvb3QiOiIifQ==