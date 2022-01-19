"use strict"

const onStart3 = function() {
  document.getElementById("Answer").style.display = "none";
}

window.onload = onStart3

 const run2 = function() {

   var yahoo = document.getElementById("yahoo_week").value
   var maxinc = document.getElementById("2maxinc").value
   var mininc = document.getElementById("2mininc").value
   var maxinc2 = document.getElementById("2maxinc2").value
   var mininc2 = document.getElementById("2mininc2").value
   var yahoo_perc = [a,]
   var answer = 0
   var answer2 = 0
   var a = 0
   var b = 0
   var c = 0
   var d  = 0
   var e = 0
   var f = 0
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
   //console.log(yahoo_perc)

   for (let i = yahoo_perc.length; i > 1; i--) {
     average = average + yahoo_perc[i - 1]


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

  document.getElementById("2range1").innerHTML = "Max:" + maxinc + "&nbsp&nbsp" + "Min:" + mininc
  document.getElementById("2range2").innerHTML = "Max:" + maxinc2 + "&nbsp&nbsp" + "Min:" + mininc2

  document.getElementById("2answer").innerHTML = answer2 + "("+ Math.round(answer2 / yahoo_values.length * 100 *100) / 100 + "%)"+ "/" + yahoo_values.length

  document.getElementById("2a").innerHTML = a + "("+ Math.round(a / yahoo_values.length * 100 *100) / 100 + "%)"
  document.getElementById("2b").innerHTML = b + "("+ Math.round(b / yahoo_values.length * 100 *100) / 100 + "%)"
  document.getElementById("2c").innerHTML = c + "("+ Math.round(c / yahoo_values.length * 100 *100) / 100 + "%)"
  document.getElementById("2d").innerHTML = d + "("+ Math.round(d / yahoo_values.length * 100 *100) / 100 + "%)"
  document.getElementById("2e").innerHTML = e + "("+ Math.round(e / yahoo_values.length * 100 *100) / 100 + "%)"
  document.getElementById("2f").innerHTML = f + "("+ Math.round(f / yahoo_values.length * 100 *100) / 100 + "%)"

  document.getElementById("2prediction").innerHTML = Math.round(prediction / answer2 * 1000)/1000 + "%"

  document.getElementById("2average").innerHTML = Math.round(average / yahoo_values.length * 1000)/1000 + "%"

  document.getElementById("week1").innerHTML = answer
  document.getElementById("week2").innerHTML = answer3


 }
