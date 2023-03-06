

function resetkalendara() {
    document.getElementById('title').innerText='';
    document.getElementById('dani').innerHTML='';
}

function popuniKalendar(godina,mesec) {
    resetkalendara();

    let imenaMeseci = ['Januar','Februar','Mart','April','Maj','Jun','Jul',
                       'Avgust','Septembar','Oktobar','Novembar','Decembar'];
    let ovajMesec = imenaMeseci[mesec-1];
    let t = ovajMesec+' '+godina;
    document.getElementById('title').innerText=t;

    let prvi = new Date(godina,mesec-1,1);
    let kraj = new Date(godina,mesec,0);

    let dUNP = prvi.getDay();
    if (dUNP==0) dUNDP=7;
    let dUNK = kraj.getDay();
    if (dUNK==0) dUNK=0;

    let brojDana = kraj.getDate();

    let dani = [];

     for (let i=1; i<dUNP; i++) {
        dani.push('');
     }

     for (let dan=1; dan<=brojDana; dan++) {
        dani.push(dan);

     }

     for (let i=dUNK; i<7;i++) {
        dani.push('');
     }
     
     let nedelje = [];
     while(dani.length>0) {
        let narednaNedelja = dani.splice(0,7);
        nedelje.push(narednaNedelja);
     }
     popuniTeloKalendara(nedelje);
}    

function popuniTeloKalendara(nedelje) {
    for( let nedelja of nedelje) {
        let red = document.createElement('tr');
            
        for (let dan of nedelja) {
            let td = document.createElement('td');
            let datum = new Date();
            let danas = datum.getDate();
            td.innerText = dan;

            if (dan ==danas) {
               
               td.style.background ='darkblue';
               td.style.color = 'white';
               td.style.fontSize = '40px';
               red.appendChild(td);
               
            } else {red.appendChild(td);
               }
        }
        document.getElementById('dani').appendChild(red);

    }

}

window.addEventListener('load', main);

function main()  {
   // popuniKalendar(1987,3); npr. isto i za (1959,3) i za jos koje, interesantno, za vecinu radi ispravno. 
   let sada = new Date();

   popuniKalendar(sada.getFullYear(), sada.getMonth()+1);

}
    
    

   
    
    
