const headers = ['home','projects'];
function atClick(id){
  let c_id = '';
  for (let i = headers.length - 1; i >= 0; i--) {
    c_id = document.getElementById(headers[i]);
    if (c_id === null) {
        continue;
    } else {
        if (headers[i] !== id){
        c_id.hidden = true;
        document.getElementsByName(headers[i])[0].classList.remove('active');
        } else {
        c_id.hidden = false;
        document.getElementsByName(headers[i])[0].classList.add('active');
        }
    }
  }
}