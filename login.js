

buttonNext = document.getElementById("btn_next");
errorMessage = document.getElementById("error_mess")

buttonNext.addEventListener("click",()=>
{
    var validEmails = [
        "cedric.ketels@talent-it.be",
        "Christophe.Orens@talent-it.be",
        "Anouck.VanDenKieboom@talent-it.be",
        "Anne.Vanthillo@talent-it.be",
        "david.makuila@talent-it.be",
        "dirk.vangrunderbeek@talent-it.be",
        "India.Hasim@talent-it.be",
        "jasna.pozna@talent-it.be",
        "Laura.Burm@talent-it.be",
        "Leen.VanHoof@talent-it.be",
        "Lotte.vanMaaren@talent-it.be",
        "Patrick.Mortier@HarveyNash.com",
        "Shannen.VanLandeghem@talent-it.be",
        "merijn.hillewaert@talent-it.be",
        "laurine.cools@talent-it.be",
        "kristien.lanhove@talent-it.be",
        "bart.vanherck@team4talent.be",
        "heleen.bruyninckx@team4talent.be",
        "judith.eulaers@team4talent.be",
        "lukas.wellens@team4talent.be",
        "yati.campers@team4talent.be",
        "Ellyne.Demolder@talent-it.be",
        "dorine.malfliet@talent-it.be",
        "Arno.leboy@talent-it.be",
        "dennis.konings@team4talent.be",
        "kevin.leysen@team4talent.be",
        "joeri.jans@team4talent.be",
        "nina.stas@talent-it.be",
        "jelle.vermeyen@talent-it.be",
        "kathleen.ribbens@team4talent.be",
        "axel.byl@team4talent.be",
        "stijn.lekens@talent2test.be",
        "franz.hegemann@flexhuisglobal.com",
        "Phaedra.Schollaert@talent2test.be",
        "shima.salehi@team4talent.be",
        "jeroen.fries@talent-it.be",
        "ruud.reusens@talent-it.be",
        "leila.alsulaiman@talent-it.be",
        "Maxime.Vanbavel@talent-it.be",
        "lotte.vancoppenolle@talent-it.be"
    ];
    emailInput = document.getElementById("email_input")
    let enteredEmail = emailInput.value.toLowerCase();
    document.cookie = `email=${enteredEmail}`

    if (validEmails.includes(enteredEmail)) {
        window.location.href = "password.html";
    } else {
        errorMessage.style.display = "block";
    }
})