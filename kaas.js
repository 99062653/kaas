//ricks game
var vraag;
function stelVraag(v){  
    vraag = prompt(v);
    return vraag;
}

stelVraag("Is de kaas geel?");
if(vraag == "ja"){
    stelVraag("Heeft de kaas gaten?");
    if(vraag == "ja"){
        stelVraag("Is de kaas belachelijk duur?")
            if(vraag == "ja"){
                document.write("De kaas is Emmenthaler");        
            }else{
                document.write("Je kaas is Leerdammer")
            }
    }else{
        stelVraag("Is de kaas hard als steen?");
        if(vraag == "ja"){
            document.write("De kaas die je hebt is Pamigiano Reggiano");
        }else{
            document.write("De kaas die je hebt is Goudse kaas")
        }


        }
}else{
    stelVraag("Heeft de kaas blauwe schimmel?");
    if(vraag == "ja"){
        stelVraag("Heeft de kaas een korst?");
        if(vraag == "ja"){
            document.write("Je hebt Blue de Rochbaron");
        }else{
            document.write("Je hebt Foume d'Ambart");}
        }else{
        stelVraag("Heef de kaas een korst?");
        if(vraag == "ja"){
            document.write("Je hebt Camembert");

        }else{
            document.write("je hebt Mozzarella")
        }
    }
}