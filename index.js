groups = []

// Disable certain parts
disabledList = [
    "#b6", // Sternum, unkown origin. https://www.britannica.com/science/sternum
    "#b21", "#b22",     // Kneecaps
    "#b33", "#b34",     // Fingers - Phal
    "#b31", "#b32",     // Fingers - Metacarpals
    "#b29", "#b30",     // Fingers - Carpals
    "#b35", "#b36",     // Feet - Cal
    "#b37", "#b38",     // Feet - Talus
    "#b39", "#b40",     // Feet - Tarlsals
    "#b41", "#b42",     // Feet - Meta Tarsals
    "#b43", "#b44"      // Feet - Phals
]

for(i = 0; i < disabledList.length; i++) {
    part = disabledList[i]
    $(part).remove()
}

// Left Hand
$("#b18").on('click', hand)
// Right hand
$("#b17").on('click', hand)
// Feet R/L
$("#b27").on('click', hand)
$("#b28").on('click', hand)
groups.push(["#b17", "#b18", "#b27", "#b28"])

// Left Humerous
$("#b12").on('click', humerous)
// Right Humerous
$("#b11").on('click', humerous)
groups.push(["#b11", "#b12"])

// Radius R/L
$("#b13").on('click', ulna)
$("#b14").on('click', ulna)
// Ulna R/L
$("#b15").on('click', ulna)
$("#b16").on('click', ulna)
groups.push(["#b13", "#b14", "#b15", "#b16"])

// Scapula R/L
$("#b9").on('click', shoulder)
$("#b10").on('click', shoulder)
// CLAVICLE R/L
$("#b7").on('click', shoulder)
$("#b8").on('click', shoulder)
groups.push(["#b9", "#b10", "#b7", "#b8"])

// Pelivs
$("#b4").on('click', function(e){
    show(e, "pelvis")
})

// Skull
$("#b1").on('click', function(e){
    show(e, "skull")
})

// Ribs
$("#b5").on('click', function(e){
    show(e, "ribs")
})

// Sacrum
$("#b3").on('click', function(e){
    show(e, "sacrum")
})

// Spine
$("#b2").on('click', function(e){
    show(e, "spine")
})

// Femur R/L
$("#b19").on('click', femur)
$("#b20").on('click', femur)
groups.push(["#b19", "#b20"])

// Fibula R/L
$("#b25").on('click', fibtib)
$("#b26").on('click', fibtib)
// Tibia R/L
$("#b23").on('click', fibtib)
$("#b24").on('click', fibtib)
groups.push(["#b23", "#b24", "#b25", "#b26"])

count = 0

// Group certain parts
for(i = 0; i < groups.length; i++) {
    for(j = 0; j < groups[i].length; j++) {
        parts = groups[i]
        part = parts[j]
        $(part).attr("i", i)
        $(part).attr("j", j)
    
        $(part).on('custom', function(e, action, secondary) {
            if(!secondary) {
                this_i = $(this).attr("i")
                this_j = $(this).attr("j")
                parts = groups[this_i]
                for(k = 0; k < parts.length; k++) {
                    console.log($(parts[k]).attr("id"))
                    if(k == this_j){
                        continue
                    }
                    $(parts[k]).attr("secondary", true)
                    $(parts[k]).trigger("custom", [action, true])
                    $(parts[k]).attr("secondary", false)
                }
            } else {
                $(this).trigger(action)
            }
        })

        $(part).on('mouseover', function(e, param2) {
            if($(this).attr("secondary") != "true"){
                $(this).trigger("custom", ["mouseover", false])
            }
        })

        $(part).on('mouseout', function() {
            if($(this).attr("secondary") != "true"){
                $(this).trigger("custom", ["mouseout", false])
            }
        })
    }
}

function fibtib(e) {
    show(e, "fibtib")
}

function femur(e) {
    show(e, "femur")
}

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
    show(e, "hands")
}

function feet(e) {
    show(e, "hands")
}

function show(e, part) {
    $(".part-description").hide()
    $(".part-sources").hide()
    $("#text-"+part).show()
    $("#sources-"+part).show()
}