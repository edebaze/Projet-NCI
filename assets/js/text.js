$(function() {
    var parag = ' Professionnel du câblage réseau informatique depuis 1991, NCI conçoit,réalise et maintient les infrastructures des réseaux d\'immeubles tertiaires' +
        '                        (plateaux), de sites industriels, de sites hospitaliers et de sites portuaires en' +
        '                        France et en Europe.'

    var line = '';
    var maxLine = 31;
    var width = 40;

    parag = parag.split('')

    for(let i=0; i<parag.length; i++) {
        line = line + parag[i];

        if(line.length > maxLine) {
            $('.firstParag').append('<a style="width: ' + width + '%">' + line + '</a> <br>');
            maxLine = line.length + 1;
            line = '';
            width = width + 1;

        }
    }


})