const puppeteer = require('puppeteer');
async function run(){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.int.simplycreditinc.com/staging/manage/#/signup');
  var selector = [
    '#invite_code',
    '#email',
    '#confirm-email',
    '#password',
    '#confirm-password',
    '#first-name',
    '#last-name',
    '#phone',
    '#street',
    '#city',
    '#zip',
    '#ssn',
    '#income',
    '#mortgage'
  ];
  var dropdowns = [
    '#state',
    '#dob-month',
    '#dob-day',
    '#dob-year'
  ];
  var s_values = [
    'simplylowrates',
    'snehit.86@gmail.com',
    'snehit.86@gmail.com',
    'qwerty123@',
    'qwerty123@',
    'Snehit',
    'Paunikar',
    '98765432',
    'alpha beta 12',
    'Mumbai',
    '890987',
    '1234',
    '12',
    '987'
  ];
  var d_values =[
    'WY',
    'Jan',
    '1',
    '1998'
  ];
  var i;
  for(i=0;i<selector.length;i++)
  {
    await page.click(selector[i]);
    await page.keyboard.type(s_values[i]);
  }
  for(i=0;i<dropdowns.length;i++)
  {
    await page.select(dropdowns[i],d_values[i]);
  }
  const tick='#terms';
  const submit_button = '#signup-submit';
  try {
  await page.click(tick);
  await page.click(submit_button);
   }catch(error) {
  console.log(error);
}finally {
  console.log('form submitted');
}



  browser.close();
}

run();
