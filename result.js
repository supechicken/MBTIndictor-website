const params = new URLSearchParams(location.search),
      result = params.get('result');

console.log(result)
document.getElementById('result').innerText = result;

