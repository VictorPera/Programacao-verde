    
    function addNumber()
    {
        var input = document.getElementById('input').value;
        var list = document.getElementById('list');
        var option = document.createElement('OPTION');
        list.options.add(option);
        option.text = input;
    }

    function getStatistics()
    {
        var list = new Array();
        var select = document.getElementById('list');
        for(i = 0; i < select.options.length; i++)
        {
            list[i] = parseInt(select.options[i].text);
        }
        document.getElementById('summation').value =findSum(list);
        document.getElementById('mean').value = findMean(list);
        document.getElementById('median').value = findMedian(list);
        document.getElementById('mode').value = findMode(list);
        document.getElementById('variance').value = findVariance(list);
        document.getElementById('standardDev').value = findStandardDeviation(list);
        document.getElementById('range').value = findRange(list);
        document.getElementById('max').value = findMax(list);
        document.getElementById('min').value = findMin(list);
    }

function findSum(x)
{
	var sum = 0;
	for(i = 0; i < x.length; i++)
	{
		sum = sum + x[i];
	}
	return sum;
};

function findMean(x)
{
return findSum(x) / x.length;
};

function findMedian(x) 
{
    x.sort( function(a,b) {return a - b;} );

    var half = Math.floor(x.length/2);

    if(x.length % 2)
        return x[half];
    else
        return (x[half-1] + x[half]) / 2.0;
}

// Ascending functions for sort
function ascNum(a, b) { return a - b; }

function clip(arg, min, max) {
  return Math.max(min, Math.min(arg, max));
};


function findMode(x) 
{
  var arrLen = x.length;
  var _arr = x.slice().sort(ascNum);
  var count = 1;
  var maxCount = 0;
  var numMaxCount = 0;
  var mode_arr = [];
  var i;

  for (i = 0; i < arrLen; i++) {
    if (_arr[i] === _arr[i + 1]) {
      count++;
    } else {
      if (count > maxCount) {
        mode_arr = [_arr[i]];
        maxCount = count;
        numMaxCount = 0;
      }
      // are there multiple max counts
      else if (count === maxCount) {
        mode_arr.push(_arr[i]);
        numMaxCount++;
      }
      // resetting count for new value in array
      count = 1;
    }
  }

  return numMaxCount === 0 ? mode_arr[0] : mode_arr;
};

function findRange(x)
{
	x.sort( function (a, b) {return a-b;} );
}

function findVariance(x) {
		var mean = findMean(x);
		return findMean(array.map(findSum(sum)) ,{
			return : Math.pow(sum - mean, 2)
		});
	};
	
function findStandardDeviation(x) 
{
		return Math.sqrt(findVariance(x));
};


