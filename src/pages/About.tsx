import { logo } from "@/assets"; // Ensure logo is a large transparent PNG or JPG

function Home() {
  return (
    <div className="min-h-[85vh] text-white flex flex-col w-full justify-center items-center relative text-center ">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img
          src={logo}
          alt="Background Logo"
          className="w-[50%] h-[100%]  opacity-20"
        />
        <div className="absolute inset-0  " />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center container mx-auto px-6 py-10 max-w-[1440px] text-black">
        <div className="w-full">
          {/* Contact Info */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold mb-6 ">Contact Information</h2>
            <ul className="space-y-3 text-2xl">
              <li>
                <strong>Location:</strong> Chauthe, Pokhara-14
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:operagroup09@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  operagroup09@gmail.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong> 061-501380, +977 9801935376
              </li>
            </ul>
          </section>

          {/* Manager Info */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold mb-6 ">Manager</h2>
            <ul className="space-y-3 text-2xl">
              <li>
                <strong>Name:</strong> Biben Khatri
              </li>
              <li>
                <strong>Phone:</strong> +977 98560-35374, +977 9801935374
              </li>
            </ul>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-4xl font-bold mb-6 ">Our Services</h2>
            <ul className="list-disc list-inside space-y-3 text-2xl">
              <li>UPVC Sliding Door/Window</li>
              <li>Casement Door/Window</li>
              <li>All kinds of UPVC Partition</li>
              <li>
                Aluminum/Steel Works with world-class quality and finishing
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Home;
