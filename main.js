function createGame(group, player1, hour, player2) {
  return `
<li>       
<img src="./assets/${player1}.svg" alt="Bandeira do ${player1}" />
<strong>${hour}</strong>          
<img src="./assets/${player2}.svg" alt="Bandeira do ${player2}" />          
</li>
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
<img src="./assets/copalogo.png" alt="Logo da Copa" />
</header>
<main id="cards">

${createCard("20/11", "Domingo", createGame("A", "qatar", "13:00", "ecuador"))}

${createCard(
  "21/11",
  "Segunda",
  createGame("B", "england", "10:00", "iran") +
    createGame("B", "usa", "16:00", "wales") +
    createGame("A", "senegal", "13:00", "netherlands")
)}

${createCard(
  "22/11",
  "Terça",
  createGame("C", "argentina", "07:00", "saudi arabia") +
    createGame("C", "mexico", "13:00", "poland") +
    createGame("D", "denmark", "10:00", "tunisia") +
    createGame("D", "france", "16:00", "australia")
)}

${createCard(
  "23/11",
  "Quarta",
  createGame("F", "morocco", "07:00", "croatia") +
    createGame("F", "belgium", "16:00", "canada") +
    createGame("E", "germany", "10:00", "japan") +
    createGame("E", "spain", "13:00", "costa rica")
)}

${createCard(
  "24/11",
  "Quinta",
  createGame("G", "switzerland", "07:00", "cameroon") +
    createGame("G", "brazil", "16:00", "serbia") +
    createGame("H", "uruguay", "10:00", "south korea") +
    createGame("H", "portugal", "13:00", "ghana")
)}

${createCard(
  "25/11",
  "Sexta",
  createGame("B", "wales", "07:00", "iran") +
    createGame("B", "england", "16:00", "usa") +
    createGame("A", "qatar", "10:00", "senegal") +
    createGame("A", "netherlands", "13:00", "ecuador")
)}

${createCard(
  "26/11",
  "Sábado",
  createGame("D", "tunisia", "07:00", "australia") +
    createGame("D", "france", "13:00", "denmark") +
    createGame("C", "poland", "10:00", "saudi arabia") +
    createGame("C", "argentina", "16:00", "mexico")
)}

${createCard(
  "27/11",
  "Domingo",
  createGame("E", "japan", "07:00", "costa rica") +
    createGame("E", "spain", "16:00", "germany") +
    createGame("F", "belgium", "10:00", "morocco") +
    createGame("F", "croatia", "13:00", "canada")
)}

${createCard(
  "28/11",
  "Segunda",
  createGame("G", "cameroon", "07:00", "serbia") +
    createGame("G", "brazil", "13:00", "switzerland") +
    createGame("H", "south korea", "10:00", "ghana") +
    createGame("H", "portugal", "16:00", "uruguay")
)}

${createCard(
  "28/11",
  "Segunda",
  createGame("G", "cameroon", "07:00", "serbia") +
    createGame("G", "brazil", "13:00", "switzerland") +
    createGame("H", "south korea", "10:00", "ghana") +
    createGame("H", "portugal", "16:00", "uruguay")
)}

${createCard(
  "29/11",
  "Terça",
  createGame("A", "ecuador", "12:00", "senegal") +
    createGame("A", "netherlands", "12:00", "qatar") +
    createGame("B", "iran", "16:00", "usa") +
    createGame("B", "wales", "16:00", "england")
)}

${createCard(
  "30/11",
  "Quarta",
  createGame("D", "tunisia", "12:00", "france") +
    createGame("D", "australia", "12:00", "denmark") +
    createGame("C", "poland", "16:00", "argentina") +
    createGame("C", "saudi arabia", "16:00", "mexico")
)}

${createCard(
  "01/12",
  "Quinta",
  createGame("F", "croatia", "12:00", "belgium") +
    createGame("F", "canada", "12:00", "morocco") +
    createGame("E", "japan", "16:00", "spain") +
    createGame("E", "costa rica", "16:00", "germany")
)}

${createCard(
  "02/12",
  "Sexta",
  createGame("H", "south korea", "12:00", "portugal") +
    createGame("H", "ghana", "12:00", "uruguay") +
    createGame("G", "serbia", "16:00", "switzerland") +
    createGame("G", "cameroon", "16:00", "brazil")
)}

</main>
`
