let url = new URL(window.location.href);
const id = url.searchParams.get('dataId');

document.getElementById('orderId').innerText=id

localStorage.removeItem('caddy')


