"use strict"


const onStart2 = function() {
  document.getElementById("Answer").style.display = "none";
}

window.onload = onStart2

const conversion = function() {
  var texte = window.location.search

	//Supprimer le premier caractère ? pour obtenir :
	//"question1=Gabriel&question2=Richard&question3=faux"
	var tmp = texte.slice(1,texte.length)

	//Séparer selon le caractère & pour obtenir :
	//infos[0] = "question1=Gabriel"
	//infos[1] = "question2=Richard"
	//infos[2] = "question3=faux"
	var infos = tmp.split("&")

	//Recueillir les réponses avec map et split
	// reponses[0] = "Gabriel"
	// reponses[1] = "Richard"
	// reponses[2] = "faux"

	// Ici, la méthode map est une boucle qui traite chaque élément du Array infos.
	// boucle 1 : element = "question1=Gabriel"
	// boucle 2 : element = "question1=Richard"
	// boucle 3 : element = "question3=faux"

	// La méthode split sépare chaque element x selon le caractère =
	// Nous gardons seulement l'information ayant l'index 1
	// La vidéo explique cette ligne davantage
	var reponses = infos.map((x) => x.split("=")[1])

  var day3 = reponses[0]
  var day2 = reponses[1]
  var day1 = reponses[2]

  var week3 = reponses[3]
  var week2 = reponses[4]
  var week1 = reponses[5]



  var day_perc1 = ((day2 / day1) - 1) * 100
  var day_perc2 = ((day3 / day2) - 1) * 100

  var week_perc1 = ((week2 / week1) - 1) * 100
  var week_perc2 = ((week3 / week2) - 1) * 100

  console.log("day1:" + day_perc1)
  console.log("day2:" + day_perc2)

  console.log("week1:" + week_perc1)
  console.log("week2:" + week_perc2)

  document.getElementById("maxinc").value = Math.round(day_perc1 + 0.5 *100) / 100;
  document.getElementById("mininc").value = Math.round(day_perc1 - 0.5 * 100) / 100;

  document.getElementById("maxinc2").value = Math.round(day_perc2 + 0.5 *100) / 100;
  document.getElementById("mininc2").value = Math.round(day_perc2 - 0.5 * 100) / 100;

  document.getElementById("2maxinc").value = Math.round(week_perc1 + 0.7 * 100) / 100;
  document.getElementById("2mininc").value = Math.round(week_perc1 - 0.7 * 100) / 100;

  document.getElementById("2maxinc2").value = Math.round(week_perc2 + 0.7 * 100) / 100;
  document.getElementById("2mininc2").value = Math.round(week_perc2 - 0.7 * 100) / 100;

}

 const run = function() {


   var yahoo = document.getElementById("yahoo").value
   var maxinc = document.getElementById("maxinc").value
   var mininc = document.getElementById("mininc").value
   var maxinc2 = document.getElementById("maxinc2").value
   var mininc2 = document.getElementById("mininc2").value
   var yahoo_perc = [a,]
   var answer = 0; var answer2 = 0
   var a = 0; var b = 0; var c = 0; var d  = 0; var e = 0; var f = 0
   var prediction = 0
   var average = 0
   var answer3 = 0

   var tmp = yahoo
   var yahoo_values = tmp.split(" ")

   for (let i = 1; i < yahoo_values.length ; i++) {
     var tmp2 = yahoo_values[i] / yahoo_values[i-1]
     var tmp3 = tmp2 - 1
     var tmp4 = tmp3 * 100
     yahoo_perc.push(tmp4)
   }


   console.log(yahoo_perc)

   for (let i = yahoo_perc.length; i > 1; i--) {
     average += yahoo_perc[i - 1]



    if (yahoo_perc[i - 1] >= mininc && yahoo_perc[i - 1] <= maxinc) {
      answer++
        if (yahoo_perc[i] > mininc2 && yahoo_perc[i] < maxinc2) {
        answer2++
        prediction = yahoo_perc[i + 1] + prediction

      }
    }
  }
   for (let i = yahoo_perc.length; i > 1; i--) {

    if (yahoo_perc[i - 1] >= mininc2 && yahoo_perc[i - 1] <= maxinc2) {
      answer3++
    }
  }

  for (let i = yahoo_perc.length - 1; i > -1; i--) {
    if (yahoo_perc[i] < -1) {
      a++
    }
    else if (yahoo_perc[i] > -1 && yahoo_perc[i] < -0.5) {
      b++
    }
    else if (yahoo_perc[i] > -0.5 && yahoo_perc[i] < 0) {
      c++
    }
    else if (yahoo_perc[i] > 0 && yahoo_perc[i] < 0.5) {
      d++
    }
    else if (yahoo_perc[i] > 0.5 && yahoo_perc[i] < 1) {
      e++
    }
    else if (yahoo_perc[i] > 1) {
      f++
    }
}
  document.getElementById("Answer").style.display = "block";
  document.getElementById("Before").style.display = "none";

  document.getElementById("range1").innerHTML = "Max:" + maxinc + "%" + "&nbsp&nbsp" + "Min:" + mininc + "%"
  document.getElementById("range2").innerHTML = "Max:" + maxinc2 + "%" + "&nbsp&nbsp" + "Min:" + mininc2 + "%"

  document.getElementById("answer").innerHTML = answer2 + "("+ Math.round(answer2 / yahoo_values.length * 100 *100) / 100 + "%)"+ "/" + yahoo_values.length

  document.getElementById("a").innerHTML = a + "("+ Math.round(a / yahoo_values.length * 100 *100) / 100 + "%)"
  document.getElementById("b").innerHTML = b + "("+ Math.round(b / yahoo_values.length * 100 *100) / 100 + "%)"
  document.getElementById("c").innerHTML = c + "("+ Math.round(c / yahoo_values.length * 100 *100) / 100 + "%)"
  document.getElementById("d").innerHTML = d + "("+ Math.round(d / yahoo_values.length * 100 *100) / 100 + "%)"
  document.getElementById("e").innerHTML = e + "("+ Math.round(e / yahoo_values.length * 100 *100) / 100 + "%)"
  document.getElementById("f").innerHTML = f + "("+ Math.round(f / yahoo_values.length * 100 *100) / 100 + "%)"

  document.getElementById("prediction").innerHTML = Math.round((prediction / answer2) * 1000)/1000 + "%"

  document.getElementById("average").innerHTML = Math.round((average / yahoo_values.length) * 1000)/1000 + "%"

  document.getElementById("day1").innerHTML = answer
  document.getElementById("day2").innerHTML = answer3


 }

 const run2 = function() {

   var n2yahoo = document.getElementById("yahoo_week").value
   var n2maxinc = document.getElementById("2maxinc").value
   var n2mininc = document.getElementById("2mininc").value
   var n2maxinc2 = document.getElementById("2maxinc2").value
   var n2mininc2 = document.getElementById("2mininc2").value
   var n2yahoo_perc = [a,]
   var n2answer = 0; var n2answer2 = 0
   var n2a = 0; var n2b = 0; var n2c = 0; var n2d  = 0; var n2e = 0; var n2f = 0
   var n2prediction = 0
   var n2average = 0
   var n2answer3 = 0

   var n2tmp = n2yahoo
   var n2yahoo_values = n2tmp.split(" ")


   for (let e = 1; e < n2yahoo_values.length ; e++) {
     var n2tmp2 = n2yahoo_values[e] / n2yahoo_values[e-1]
     var n2tmp3 = n2tmp2 - 1
     var n2tmp4 = n2tmp3 * 100
     n2yahoo_perc.push(n2tmp4)
   }
   //console.log(yahoo_perc)

   for (let e = n2yahoo_perc.length; e > 1; e--) {
     n2average = n2average + n2yahoo_perc[e - 1]


    if (n2yahoo_perc[e - 1] >= n2mininc && n2yahoo_perc[e - 1] <= n2maxinc) {
      n2answer++
        if (n2yahoo_perc[e] > n2mininc2 && n2yahoo_perc[e] < n2maxinc2) {
        n2answer2++
        n2prediction = n2yahoo_perc[e + 1] + n2prediction
      }
    }
  }
   for (let e = n2yahoo_perc.length; e > 1; e--) {

    if (n2yahoo_perc[e - 1] >= n2mininc2 && n2yahoo_perc[e - 1] <= n2maxinc2) {
      n2answer3++
    }
  }

  for (let e = n2yahoo_perc.length - 1; e > -1; e--) {
    if (n2yahoo_perc[e] < -1) {
      n2a++
    }
    else if (n2yahoo_perc[e] > -1 && n2yahoo_perc[e] < -0.5) {
      n2b++
    }
    else if (n2yahoo_perc[e] > -0.5 && n2yahoo_perc[e] < 0) {
      n2c++
    }
    else if (n2yahoo_perc[e] > 0 &&  n2yahoo_perc[e] < 0.5) {
      n2d++
    }
    else if (n2yahoo_perc[e] > 0.5 && n2yahoo_perc[e] < 1) {
      n2e++
    }
    else if (n2yahoo_perc[e] > 1) {
      n2f++
    }
}

  document.getElementById("2range1").innerHTML = "Max:" + n2maxinc + "%" + "&nbsp&nbsp" + "Min:" + n2mininc + "%"
  document.getElementById("2range2").innerHTML = "Max:" + n2maxinc2 + "%" + "&nbsp&nbsp" + "Min:" + n2mininc2 + "%"

  document.getElementById("2answer").innerHTML = n2answer2 + "("+ Math.round(n2answer2 / n2yahoo_values.length * 10000) / 100 + "%)"+ "/" + n2yahoo_values.length

  document.getElementById("2a").innerHTML = n2a + "("+ Math.round(n2a / n2yahoo_values.length * 100 *100) / 100 + "%)"
  document.getElementById("2b").innerHTML = n2b + "("+ Math.round(n2b / n2yahoo_values.length * 100 *100) / 100 + "%)"
  document.getElementById("2c").innerHTML = n2c + "("+ Math.round(n2c / n2yahoo_values.length * 100 *100) / 100 + "%)"
  document.getElementById("2d").innerHTML = n2d + "("+ Math.round(n2d / n2yahoo_values.length * 100 *100) / 100 + "%)"
  document.getElementById("2e").innerHTML = n2e + "("+ Math.round(n2e / n2yahoo_values.length * 100 *100) / 100 + "%)"
  document.getElementById("2f").innerHTML = n2f + "("+ Math.round(n2f / n2yahoo_values.length * 100 *100) / 100 + "%)"

  document.getElementById("2prediction").innerHTML = Math.round(n2prediction / n2answer2 * 1000)/1000 + "%"

  document.getElementById("2average").innerHTML = Math.round(n2average / n2yahoo_values.length * 1000)/1000 + "%"

  document.getElementById("week1").innerHTML = n2answer
  document.getElementById("week2").innerHTML = n2answer3


 }
