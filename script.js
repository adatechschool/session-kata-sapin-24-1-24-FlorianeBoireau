// function afficherPointeSapin(hauteur) {
//     const lignes = " "
//     hauteur = lignes
//     console.log(hauteur)
// }

// afficherPointeSapin(4)

function afficherEtoiles(n) {
    const etoile = "*"
    let result = ""

    // à faire pour chaque n étoile !
    for(let i = 0; i < n; i++) {
        result += etoile 
    }
    console.log(result)
    return result
}


function afficherRectangle(hauteur, largeur) {
    largeur = afficherEtoiles(largeur)
    resultLargeur = ""
    resultHauteur = ""

    for(let i = 0; i < largeur.length; i++) {
        resultLargeur += afficherEtoiles(hauteur)
    }
    console.log(resultLargeur)
    return resultLargeur
    // pour chaque "étage" de la hauteur
    //    appeler printEtoile
}

afficherRectangle(5, 5)