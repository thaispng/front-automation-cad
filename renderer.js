document.getElementById('minimize-button').addEventListener('click', () => {
  window.electronAPI.minimizeWindow();
});

document.getElementById('maximize-button').addEventListener('click', () => {
  window.electronAPI.maximizeWindow();
});

document.getElementById('close-button').addEventListener('click', () => {
  window.electronAPI.closeWindow();
});
