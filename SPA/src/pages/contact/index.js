export default () =>{
    const container = document.createElement('div');
    const template = `
    <center><h2>Contatos</h2></center>
    <p>Lorem ipsum bibendum fames velit volutpat ultricies bibendum faucibus elit, 
    convallis praesent netus tristique congue senectus curabitur libero, suscipit id 
    at mollis fames aenean cras imperdiet. suspendisse platea bibendum donec egestas metus
     pulvinar id sit amet, mattis est vehicula aliquam ante etiam facilisis aliquet aptent </p>
     <center><p>Teste SPA</p></center>
    `;
    container.innerHTML = template;
    return container;   
}
