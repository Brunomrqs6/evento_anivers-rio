AOS.init();

const dataEvento = new Date ("Apr 20, 2024");
const timeStampEvento = dataEvento.getTime();

const calculaData = setInterval(function()  {
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const distanciaAteOevento = timeStampEvento - timeStampAgora;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOevento = Math.floor(distanciaAteOevento / diasEmMs);
    const horasAteOevento = Math.floor((distanciaAteOevento % diasEmMs) / horasEmMs);
    const minutosAteOevento = Math.floor((distanciaAteOevento % horasEmMs) / minutosEmMs);
    const segundosAteOevento = Math.floor((distanciaAteOevento % minutosEmMs) / 1000);

    document.getElementById('data').innerHTML = `${diasAteOevento} dias, ${horasAteOevento} horas, ${minutosAteOevento} minutos e ${segundosAteOevento} segundos`
}, 1000);