function upDate(previewPic) {

    // Vérifier que l'événement se déclenche
    console.log("Événement déclenché");

    // Afficher les informations de l’image
    console.log("Alt :", previewPic.alt);
    console.log("Source :", previewPic.src);

    // Modifier le texte de la div
    document.getElementById("image").innerHTML = previewPic.alt;

    // Modifier l'image de fond
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function unDo() {

    // Réinitialiser l'image de fond
    document.getElementById("image").style.backgroundImage = "url('')";

    // Réinitialiser le texte
    document.getElementById("image").innerHTML =
        "Hover over an image below to display here";
}