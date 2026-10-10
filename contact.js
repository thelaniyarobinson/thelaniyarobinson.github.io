(() => {
 const form=document.querySelector('#terminal-form'), input=document.querySelector('#terminal-input'), output=document.querySelector('#terminal-output');
 const destinations={email:['Email La’Niya','mailto:laniya@laniyadanyelle.com'],linkedin:['Visit LinkedIn','https://www.linkedin.com/in/laniyarobinson/'],github:['Visit GitHub','https://github.com/thelaniyarobinson'],resume:['View my résumé','resume.html'],projects:['Explore projects','index.html#work']};
 function run(value){
  const command=value.trim().toLowerCase();
  if(!command)return;
  if(command==='clear'){output.replaceChildren();input.value='';input.focus();return;}
  const line=document.createElement('p');line.className='command-echo';line.textContent='guest@niya:~$ '+command;output.append(line);
  const response=document.createElement('p');
  if(command==='help'){response.textContent='Commands: email, linkedin, github, resume, projects, clear.';}
  else if(destinations[command]){const [label,url]=destinations[command];const link=document.createElement('a');link.textContent=label+' ↗';link.href=url;if(url.startsWith('https:')){link.target='_blank';link.rel='noopener noreferrer';}response.append(link);}
  else{response.textContent='Command not recognized. Try help.';}
  output.append(response);while(output.children.length>24)output.firstElementChild.remove();output.scrollTop=output.scrollHeight;input.value='';input.focus();
 }
 form.addEventListener('submit',event=>{event.preventDefault();run(input.value);});
 document.querySelectorAll('[data-command]').forEach(button=>button.addEventListener('click',()=>run(button.dataset.command)));
})();
