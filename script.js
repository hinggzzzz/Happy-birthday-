getBirthdayMessage();

function getBirthdayMessage() {
    let url = window.location.href;
    let regexName = new RegExp("name" + "(=([^&#]*))");
    let resultsName = regexName.exec(url);
    let regexSeg = new RegExp("seg" + "(=([^&#]*))");
    let resultsSeg = regexSeg.exec(url);

    if (resultsName == null) {
        birthdayName = "Nata";
    } else {
        birthdayName = decodeURIComponent(resultsName[2]);
    }

    if (resultsSeg == null) {
        birthdaySeg = "general";
    } else {
        birthdaySeg = decodeURIComponent(resultsSeg[2]);
    }

    if (birthdaySeg == "fundraisers") {
        document.getElementById('letter').innerHTML = "<div class='center-letter animate-reveal animate-first'> <h1>Happy Birthday!</h1><br><p style='margin: 0 10px; line-height:160%;'>May this year bring you great happiness and personal growth!<br><br>May you continue to improve and be authentic, and may gratitude accompany you every day. Have you ever considered celebrating your birthday by creating an ourHope fundraising page? It's easy, so this birthday, inspire friends and family to contribute and make a difference in the fight against cancer, supporting lifesaving research and care available only here.</p></div><div class='animate-reveal animate-second' style='margin-top: 15px;'> <a href='placeholderlink' style='margin-top: 15px; font-family: Arial; background-color: #f79420; -webkit-border-radius: 4px; border-radius: 4px; color: #ffffff; display: block; margin: 0 auto; font-size: 22px; font-weight: 700; line-height: 36px; text-align: center; text-decoration: none; width: 280px; -webkit-text-size-adjust: none;' target='_blank'>Start Fundraising</a></div>"
    } else {
        document.getElementById('letter').innerHTML = "<div><div id='center-letter' class='center-letter animate-reveal animate-first'> <h1>Happy Birthday Mommy Clyde!</h1><br><p style='margin: 0 10px;'>May this year bring you great happiness!<br><br>Happy Birthday! 🎉 I hope your special day is filled with as much joy and laughter as you bring into our life every single day. Thank you for your endless love, and support mommy clyde!</p></div><div class='animate-reveal animate-second' style='margin-top: 15px;'> <a href='placeholderlink' style='font-family: Arial; background-color: #f79420; -webkit-border-radius: 4px; border-radius: 4px; color: #ffffff; display: block; margin: 0 auto; font-size: 22px; font-weight: 700; line-height: 36px; text-align: center; text-decoration: none; width: 280px; -webkit-text-size-adjust: none;' target='_blank'></div>"
    }
}