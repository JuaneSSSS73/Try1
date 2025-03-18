function Enviar(){
    Horas=[
        parseInt(document.getElementById("t1").value) ||0,
        parseInt(document.getElementById("t2").value) ||0,
        parseInt(document.getElementById("t3").value) ||0,
        parseInt(document.getElementById("t4").value) ||0,
        parseInt(document.getElementById("t5").value) ||0,
    ]

    Minutos=Horas.map(valor=>valor*60)
    Segundos=Horas.map(valor=>valor*3600)

    document.getElementById("h1").innerHTML=Horas.map((Hora,index)=>`
    <p>
        <span style="color: red;">${Hora} horas</span> =
        <span style="color: blue;">${Minutos[index]} Minutos</span> =
        <span style="color: yellow;">${Segundos[index]} Segundos</span>
    </p>
    `).join('')
}
