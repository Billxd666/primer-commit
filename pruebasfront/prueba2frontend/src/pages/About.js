import background from "../icons/agujeronegro.webp";
function About() {
  return (
    /* Header */
    <div >
      <div class="flex items-center h-64">
        <p class="text-7xl mx-auto font-bold">Hola.</p>
      </div>
      {/* Description */}
      <div class="flex  ">
        <div
          class="flex-none w-1/3 h-96 bg-contain 1 "
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div class="flex flex-col w-auto pl-5 pr-5 text-3xl text-justify font-thin ">
          <div class="content-center mt-auto mb-auto">
            <p class=" mb-5">
              Soy Billy, un desarrollador web backend y frontend, soy un
              apasionado de la tecnologia y siempre estoy actualizandome para
              pensar fuera de la caja
            </p>

            <p class="mb-5">
              Cuento con conocimientos en javascript, typescript, html, css,
              tailwind css, sass, node js y git.
            </p>

            <p class="mb-5">
              Actualmente me estoy especializando en frameworks como React en el
              frontend, y typescript para node js y express en el backend.
            </p>

            <p class="text-left">
              Mi enfoque es escribir codigo simple y limpio para problemas
              complejos con un alto rendimiento.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col mx-auto w-1/2 mt-7">
        <h2 class="font-semibold text-2xl  mb-7">Trabajo</h2>
        <p class="text-justify text-xl mb-7">
          Actualmente trabajo de freelance y estoy disponible para cualquier
          proyecto que tengas en mente
        </p>

        <h2 class="font-semibold text-2xl mb-7">Blog </h2>
        <p class="text-justify text-xl mb-7">
          Me gusta escribir acerca de las tecnologias que voy aprendiendo con el
          tiempo o en las que voy mejorando o descubriendo formas para mejorar
          en el desarrollo de software, asi que estoy trabajando en un blog que
          estara disponible proximamente.
        </p>
      </div>
    </div>
  );
}

export default About;
