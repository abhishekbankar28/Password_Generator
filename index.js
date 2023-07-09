const capitalCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const smallCharacters = 'abcdefghijklmnopqrstuvwxyz';
const specialcharacters = '!@#$%^&*';

function generatepass() {
  let requeststring = '';
  let PL = document.getElementById('passlength').value;
  console.log(PL);
  let C = document.getElementById('capital').checked;
  console.log(C);
  let S = document.getElementById('small').checked;
  console.log(S);
  let Sc= document.getElementById('special').checked;
  console.log(Sc);
  let N = document.getElementById('numbers').checked;
  console.log(N);


    if ((C || S || Sc || N ) && PL !== '') {
      let generatedpass = generateString(PL);
      function generateString(length) {
        let result = ' ';
        if (C) {
          requeststring += capitalCharacters;
        }
        if (S) {
          requeststring += smallCharacters;
        }
        if(Sc){
            requeststring += specialcharacters;
        }
        if (N) {
          requeststring += numbers;
        }
        const charactersLength = requeststring.length;
        for (let i = 0; i < length; i++) {
          result += requeststring.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      }
      passworddisplay(generatedpass);
    } else {

      if(PL === ''){
        alert('Please enter length of password ⚠️')
      }
      if (!(C || S || Sc || N )) {
        alert('Please select atleast one check box ⚠️')
      }
      
    }
}


function passworddisplay(generatedpass) {

  const div = document.getElementById('containerdata');
  div.innerHTML = `<p>PASSWORD GENERATOR <img src="password.png"></img></p>
 <p>Password Generated</p>
 <p>${generatedpass}</p>
   <button type="submit" onclick="generateanotherpass()">Generate Another Password</button>`

}

function generateanotherpass() {

  const div = document.getElementById('containerdata');
  div.innerHTML = `<p>PASSWORD GENERATOR <img src="password.png"></img></p><form>
  <label >Password Length :<input type="number" id="passlength"></label>
  <label>Capital Alphabet :<input type="checkbox"  value="yes" id="capital"></label>
  <label>Small Alphabet :<input type="checkbox" value="yes" id="small"></label>
  <label>Special Characters :<input type="checkbox" value="yes" id="special"></label>
  <label>Numbers<input type="checkbox"  value="yes" id="numbers"></label>
</form>

<button type="submit" onclick="generatepass()">Generate Password</button>`

}
