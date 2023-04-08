import background from "./dash.jpg";
function Dashboard() {
  return (
    <>
      <div
        className="flex bg-origin-content bg-cover bg-center bg-fixed h-96 rounded-b-lg border-b-2 "
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="w-40 mx-auto h-auto self-center">
            <p className="text-white font-serif font-semibold ">Mi nombre es Billy y soy programador.</p>
        </div>
      </div>
      <div className="w-40 p-2 flex mx-auto ">
        <button className="transition duration-150 ease-out py-2 px-4 border-2 border-greens text-black font-medium hover:-translate-y-1 bg-green hover:text-gray-50  ">
          Explorar
        </button>
      </div>
    </>
  );
}

export default Dashboard;
