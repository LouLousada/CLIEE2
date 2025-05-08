document.querySelectorAll('.folder').forEach(folder => {
    folder.addEventListener('click', () => {
      alert(`Abrindo pasta: ${folder.innerText}`);
    });
  });
  