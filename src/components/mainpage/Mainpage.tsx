import './Mainpage.css'

export default function Mainpage(){
    return(
        <>
        <div className='tituloMain'> 
        <h1>SEJA BEM VINDO A MARINE CYCLE</h1>

        </div>
        <div className='div-main'>
        <div className='div-texto-main'>
            <p>
                A MarineCycle é uma startup dedicada a transformar o mundo em um lugar mais limpo e sustentável. Seu objetivo é incentivar tanto pessoas quanto empresas a reciclar plásticos, ajudando a reduzir significativamente a quantidade de resíduos plásticos que poluem os oceanos. Reconhecendo a gravidade do problema, a MarineCycle criou uma solução prática e acessível que une conscientização ambiental e benefícios econômicos para todos os envolvidos.
            </p>
        </div>
            <img className='imagemLogo' src='../../../img/logo2.jpeg'/> 
        </div>

        <div className='equipe'>
            <p> Thiago Melo Carrillo  
            </p>
            <a href="https://www.linkedin.com/in/thiago-carrillo/">LINKEDIN</a> 
            <p> RM 553565</p>
         </div>
        </>
    )
}