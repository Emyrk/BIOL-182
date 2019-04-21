// Left Hand
$("#b18").on('click', hand)
// Right hand
$("#b17").on('click', hand)

// Left Humerous
$("#b12").on('click', humerous)
// Right Humerous
$("#b11").on('click', humerous)

// Radius R/L
$("#b13").on('click', ulna)
$("#b14").on('click', ulna)
// Ulna R/L
$("#b15").on('click', ulna)
$("#b16").on('click', ulna)

// Scapula R/L
$("#b9").on('click', shoulder)
$("#b10").on('click', shoulder)
// CLAVICLE R/L
$("#b7").on('click', shoulder)
$("#b8").on('click', shoulder)

// Pelivs
$("#b4").on('click', function(e){
    show(e, "pelvis")
})

function shoulder(e) {
    show(e, "shoulder")
}

function ulna(e) {
    show(e, "ulna")
}

function humerous(e) {
    show(e, "humerous")
}

function hand(e) {
    show(e, "hand")
}

function show(e, part) {
    $(".part-description").hide()
    $(".part-sources").hide()
    $("#text-"+part).show()
    $("#sources-"+part).show()
}