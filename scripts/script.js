// 1) quand l'utilisateur choisi le mode de jeux, la lise s'affiche dans la case 

// 2) quand l'utilisateur tape la réponse et cliquer sur vérifier 
        // comparer avec la reponse 
        // puis changer le score 

// 3) quand l'utilisateur clique sur réviser, on affiche les mots et rep mal répondu 


// définition générales 
let i = 0   // index mot dans la liste 
let i_correction = 0   // index mot dans la liste correction 
let score = 0 
let listeProposition = listeVerbe
let reponseCorrect = listeVerbeRep
let nbMotsTotal = listeProposition.length


// 1) on affiche le la liste des mots dans la zone proposition 
function affichageMots (proposition) {
    let afficherMots = document.querySelector(".zoneProposition")
    afficherMots.innerText = proposition
}

affichageMots(listeProposition[i])


// Vérif si affichageMots fonctionne avec btn vérifier
let BtnVerifierMots = document.getElementById("BtnVerifier")
    BtnVerifierMots.addEventListener("click", ()=>{
        i++
        affichageMots(listeProposition[i])
    })

// changer la liste mots en fonction de choix utilisateur et afficher dans la zone proposition 


