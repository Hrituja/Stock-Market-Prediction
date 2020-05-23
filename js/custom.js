var buy1 = ['AAPL', 'IBM','MSFT','MCD','TRV','WMT','XOM'];
var sell1 = ['NKE', 'PFE','DWDP','JNJ','AXP','VZ','JPM'];

var buy2 = ['IBM', 'AAPL','MCD','MSFT','TRV','XOM','WMT'];
var sell2 = ['JNJ', 'VZ','DWDP','NKE','AXP','PFE','JPM'];

var buy3 = ['AAPL', 'XOM','WMT','MCD','TRV','MSFT','IBM'];
var sell3 = ['JPM', 'PFE','NKE','JNJ','AXP','VZ','DWDP'];

var buy4 = ['MCD', 'IBM','MSFT','WMT','TRV','AAPL','XOM'];
var sell4 = ['PFE', 'AXP','DWDP','JNJ','NKE','VZ','JPM'];

var div1 = document.getElementById('algo1');
var div2 = document.getElementById('algo2');
var div3 = document.getElementById('algo3');
var div4 = document.getElementById('algo4');

document.addEventListener("DOMContentLoaded", function(event) {
  populate(buy1,sell1);
});


div1.addEventListener('click', function (event) {
  document.getElementById('algoefficiency').innerHTML = "LSTM-CNN model with Text News Headlines"
  document.getElementById("imggraph").style.marginLeft = "120px";
  document.getElementById("imggraph").src="images/wordCloud-2.png";

  });
div2.addEventListener('click', function (event) {
  document.getElementById('algoefficiency').innerHTML = "LSTM-Model with OHLC data"
  document.getElementById("imggraph").style.marginLeft = "200px";
  document.getElementById("imggraph").src="images/protech2.png";

  });
div3.addEventListener('click', function (event) {
  document.getElementById('algoefficiency').innerHTML = "XAI"
  document.getElementById("imggraph").style.marginLeft = "0px";
  document.getElementById("imggraph").src="images/xaiop1.png";

  });
div4.addEventListener('click', function (event) {

  document.getElementById('algoefficiency').innerHTML = "AR Model Final Graph"
  document.getElementById("buy1").innerHTML = "";
  document.getElementById("sell1").innerHTML = "";
    populate(buy4,sell4);
  });


function populate(buy,sell){
  var list = document.getElementById('buy1');

    for(var i = 0; i < 7; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(buy[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    var list2 = document.getElementById('sell1');

      for(var i = 0; i < 7; i++) {
          // Create the list item:
          var item2 = document.createElement('li');

          // Set its contents:
          item2.appendChild(document.createTextNode(sell[i]));

          // Add it to the list:
          list2.appendChild(item2);
      }

    // Finally, return the constructed list:
}
