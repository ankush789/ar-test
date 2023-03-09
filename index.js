const button = document.querySelector('#button');
console.log('working');
button.addEventListener('click', () => {
  console.log('clicked');
  console.log(navigator);
  navigator.bluetooth
    .requestDevice({ filters: [{ services: ['battery_service'] }] })
    .then((device) => {
      console.log(`Name: ${device.name}`);
      // Do something with the device.
    })
    .catch((error) => console.error(`Something went wrong. ${error}`));
});
