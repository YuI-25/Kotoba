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
let listeCorrect = listeVerbeRep
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
        affichageMots(listeProposition[i])
    })

// changer la liste mots en fonction de choix utilisateur et afficher dans la zone proposition 
function choixTypeJeu(){
    let choixUtilisateur = document.querySelectorAll(".choixTypeJeu input")

    choixUtilisateur.forEach((input) => {
        input.addEventListener("change", (event)=>{

            let jeuChecked = event.target.value

            switch(jeuChecked){
                case "1":
                    listeProposition = listeVerbe
                    listeCorrect = listeVerbeRep
                    break
                case "2":
                    listeProposition = listeNom
                    listeCorrect = listeNomRep
                    break
                default :
                    listeProposition = listeAdjectif
                    listeCorrect = listeAdjectifRep
            }
        
                affichageMots(listeProposition[i])

        })
    })
}




// 2) quand l'utilisateur tape la réponse et cliquer sur vérifier 
        
// function verifierRep(i_correction){
//     // récupérer les mots tappés
//     let reponseUtilisateur = document.getElementById("inputReponse").value
//     // vérifier si c'est ok ? 
//         if (reponseUtilisateur === reponseCorrect[i_correction]) {
//             score++
//             console.log("bravo")
//         } else {
//             console.log("raté")
//         }
    
//     console.log(score)
    
// }

// verifierRep()

function lancerJeu(){

    choixTypeJeu()
    
    let zoneProposition = document.querySelector(".zoneProposition")

    let BtnVerifierMots = document.getElementById("BtnVerifier")
    BtnVerifierMots.addEventListener("click", () => {

        if (i < listeProposition.length && i_correction < listeCorrect.length){
            zoneProposition.innerText = listeProposition[i]
            
            console.log(listeProposition[i],listeCorrect[i_correction])
            i++
            i_correction++
            // verifierRep(i_correction)
            // afficherScore(i.nbMotsTotal)
        } else{
            zoneProposition.innerText = "Fin de jeu !"
        }
    })
}

lancerJeu()