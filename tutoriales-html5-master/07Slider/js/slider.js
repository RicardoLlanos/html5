var agente = navigator.userAgent.toLowerCase()

function carruselImagenes()
{
	var slider = document.querySelector('.slider'),
		n = 0,
		imagenes = new Array(
			'img/Offline_Storage.png',
			'img/Device_Access.png',
			'img/Connectivity.png',
			'img/Multimedia.png',
			'img/3D_Effects.png',
			'img/Performance.png',
			'img/Styling.png',
			'img/Semantics.png'
		)

		function opacidad(valor)
		{
			slider.style.opacity = valor/100
			console.log(slider.style.opacity)
		}

		function fadeIn()
		{
			for(var i=0; i <= 100; i++)
			{
				setTimeout((function (i){
					return function (){
						opacidad(i)
					}
				})(i), i*10)
			}
		}

		function fadeOut(callback)
		{
			for(var i=100; i>0; i--)
			{
				setTimeout((function (i){
					return function (){
						opacidad(i)
						if(i==0)
						{
							slider.style.backgroundImage = 'url(' + imagenes[n] + ')'
							n++

							if(n==imagenes.length)
							{
								n=0
							}

							callback()
						}
					}
				})(100-i), i*10)
			}
		}

		reproducirSlider = function () { fadeOut(fadeIn) }

		setInterval(reproducirSlider, 3000)
}

if(agente.search(/edge|msie|firefox/) > -1)
{
	carruselImagenes()
	alert('No estoy en Chrome')
}
else
{
	alert('Estoy en Chrome')	
}