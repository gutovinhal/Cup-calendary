function createGame(player1, hour, player2, group) {
  let player1alt = player1.slice(-1) === "a" ? "da" : "do"
  let player2alt = player2.slice(-1) === "a" ? "da" : "do"

  return `

<li>
<p> Grupo ${group} </p>
</li>

<li> 
<img src="./assets/paises/${player1}.svg" alt="Bandeira do ${player1}" />
<strong>${hour}</strong>          
<img src="./assets/paises/${player2}.svg" alt="Bandeira do ${player2}" />          
</li>

<div class="nome-times">
<h1>${player1}</h1>
<h1>${player2}</h1>
</div>

`
}

function createCard(date, day, games) {
  
return `
<div class="card">
<h2> ${date} <span> ${day} </span></h2>

<ul>
${games}
</ul>
</div>
`
}

document.querySelector("#app").innerHTML = `

<header>
<img src="./assets/logo/copalogo.png" alt="Logo da Copa" />
</header>
<main id="cards">

${createCard("20/11", "Domingo", createGame("qatar", "13:00", "ecuador", "A"))}

${createCard(
  "21/11",
  "Segunda",
  createGame("england", "10:00", "iran", "B") +
    createGame("usa", "16:00", "wales", "B") +
    createGame("senegal", "13:00", "netherlands", "A")
)}

${createCard(
  "22/11",
  "Terça",
  createGame("argentina", "07:00", "saudi arabia", "C") +
    createGame("mexico", "13:00", "poland", "C") +
    createGame("denmark", "10:00", "tunisia", "D") +
    createGame("france", "16:00", "australia", "D")
)}

${createCard(
  "23/11",
  "Quarta",
  createGame("morocco", "07:00", "croatia", "F") +
    createGame("belgium", "16:00", "canada", "F") +
    createGame("germany", "10:00", "japan", "E") +
    createGame("spain", "13:00", "costa rica", "E")
)}

${createCard(
  "24/11",
  "Quinta",
  createGame("switzerland", "07:00", "cameroon", "G") +
    createGame("brazil", "16:00", "serbia", "G") +
    createGame("uruguay", "10:00", "south korea", "H") +
    createGame("portugal", "13:00", "ghana", "H")
)}

${createCard(
  "25/11",
  "Sexta",
  createGame("wales", "07:00", "iran", "B") +
    createGame("england", "16:00", "usa", "B") +
    createGame("qatar", "10:00", "senegal", "A") +
    createGame("netherlands", "13:00", "ecuador", "A")
)}

${createCard(
  "26/11",
  "Sábado",
  createGame("tunisia", "07:00", "australia", "D") +
    createGame("france", "13:00", "denmark", "D") +
    createGame("poland", "10:00", "saudi arabia", "C") +
    createGame("argentina", "16:00", "mexico", "C")
)}

${createCard(
  "27/11",
  "Domingo",
  createGame("japan", "07:00", "costa rica", "E") +
    createGame("spain", "16:00", "germany", "E") +
    createGame("belgium", "10:00", "morocco", "F") +
    createGame("croatia", "13:00", "canada", "F")
)}

${createCard(
  "28/11",
  "Segunda",
  createGame("cameroon", "07:00", "serbia", "G") +
    createGame("brazil", "13:00", "switzerland", "G") +
    createGame("south korea", "10:00", "ghana", "H") +
    createGame("portugal", "16:00", "uruguay", "H")
)}

${createCard(
  "28/11",
  "Segunda",
  createGame("cameroon", "07:00", "serbia", "G") +
    createGame("brazil", "13:00", "switzerland", "G") +
    createGame("south korea", "10:00", "ghana", "H") +
    createGame("portugal", "16:00", "uruguay", "H")
)}

${createCard(
  "29/11",
  "Terça",
  createGame("ecuador", "12:00", "senegal", "A") +
    createGame("netherlands", "12:00", "qatar", "A") +
    createGame("iran", "16:00", "usa", "B") +
    createGame("wales", "16:00", "england", "B")
)}

${createCard(
  "30/11",
  "Quarta",
  createGame("tunisia", "12:00", "france", "D") +
    createGame("australia", "12:00", "denmark", "D") +
    createGame("poland", "16:00", "argentina", "C") +
    createGame("saudi arabia", "16:00", "mexico", "C")
)}

${createCard(
  "01/12",
  "Quinta",
  createGame("croatia", "12:00", "belgium", "F") +
    createGame("canada", "12:00", "morocco", "F") +
    createGame("japan", "16:00", "spain", "E") +
    createGame("costa rica", "16:00", "germany", "E")
)}

${createCard(
  "02/12",
  "Sexta",
  createGame("south korea", "12:00", "portugal", "H") +
    createGame("ghana", "12:00", "uruguay", "H") +
    createGame("serbia", "16:00", "switzerland", "G") +
    createGame("cameroon", "16:00", "brazil", "G")
)}

</main>
`
