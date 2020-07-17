const result = document.getElementById('result');

let approval = 'Not approved!';

function getApproval() {
  return new Promise((resolve, reject) =>{
   setTimeout(() =>{
     resolve('Approved')
   },10000)
  });
}

getApproval().then((resolvedApproval) =>{
  result.textContent = resolvedApproval
});


