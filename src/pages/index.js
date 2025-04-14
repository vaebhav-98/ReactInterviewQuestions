import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  const authors = [
    { id: 1, name: "J.K. Rowling" },
    { id: 2, name: "George Orwell" },
    { id: 3, name: "Jane Austen" },
    { id: 4, name: "Mark Twain" },
    { id: 5, name: "Ernest Hemingway" },
  ];

  const vehicles = [
    { id: 1, name: "Car" },
    { id: 2, name: "Bike" },
    { id: 3, name: "Truck" },
    { id: 4, name: "Bus" },
    { id: 5, name: "Airplane" },
  ];

  const deleteAuthor = async (author) => {
    try {
      alert(JSON.stringify({ id: author.id, name: author.name }))
      // const response = await fetch(`/api/delete-author`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ id: author.id, name: author.name })
      // });
      // const data = await response.json();
      // console.log("Deleted author:", data);
    } catch (error) {
      console.error("Error deleting author:", error);
    }
  };

  const deleteVehicle = async (vehicle) => {
    try {
      alert(JSON.stringify({ id: vehicle.id, name: vehicle.name }))
      // const response = await fetch(`/api/delete-vehicle`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ id: vehicle.id, name: vehicle.name })
      // });
      // const data = await response.json();
      // console.log("Deleted vehicle:", data);
    } catch (error) {
      console.error("Error deleting vehicle:", error);
    }
  };

  const handleDelete = (e, category) => {
    const target = e.target;
    if (target.tagName === 'LI') {
      const name = target.textContent;
      const item = category === 'authors'
        ? authors.find(author => author.name === name)
        : vehicles.find(vehicle => vehicle.name === name);

      if (item) {
        if (category === 'authors') {
          deleteAuthor(item);
        } else if (category === 'vehicles') {
          deleteVehicle(item);
        }
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-6 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-4 w-80">
          <h2 className="text-xl font-semibold mb-3">Authors</h2>
          <ul
            className="list-disc list-inside"
            onClick={(e) => handleDelete(e, 'authors')}
          >
            {authors.map((author) => (
              <li key={author.id} className="text-gray-700 cursor-pointer">
                {author.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-4 w-80">
          <h2 className="text-xl font-semibold mb-3">Vehicles</h2>
          <ul
            className="list-disc list-inside"
            onClick={(e) => handleDelete(e, 'vehicles')}
          >
            {vehicles.map((vehicle) => (
              <li key={vehicle.id} className="text-gray-700 cursor-pointer">
                {vehicle.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
