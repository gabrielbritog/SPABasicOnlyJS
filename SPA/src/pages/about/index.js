export default () =>{
    const container = document.createElement('div');
    const template = `
    <h2>Sobre</h2>
    <p>Lorem ipsum bibendum fames velit volutpat ultricies bibendum faucibus elit, 
    convallis praesent netus tristique congue senectus curabitur libero, suscipit id 
    at mollis fames aenean cras imperdiet. suspendisse platea bibendum donec egestas metus
     pulvinar id sit amet, mattis est vehicula aliquam ante etiam facilisis aliquet aptent </p>
     <p>Teste SPA</p>
    `;
    container.innerHTML = template;
    return container;   
}
