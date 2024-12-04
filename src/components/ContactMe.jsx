import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset any previous errors

    try {
      await emailjs.send(
        "service_g9m7s04",
        "template_h1jis0u",
        {
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.message,
        },
        "b1MLCnexAgiBY96AY"
      );
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Error al enviar el mensaje. Intenta de nuevo más tarde.");
    }
  };

  return (
    <div id="contacto" className="min-h-[800px] bg-[#5438DC] p-8 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="font-zentry text-3xl font-bold text-center mb-6">Contactame</h2>

        {isSent && (
          <p className="text-green-600 text-center mb-4 font-circular-web">
            ¡Mensaje enviado con éxito!
          </p>
        )}

        {error && (
          <p className="text-red-600 text-center mb-4 font-circular-web">{error}</p>
        )}

        <div className="mb-4">
          <label htmlFor="name" className="font-circular-web block text-gray-700 font-bold mb-2">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="font-circular-web block text-gray-700 font-bold mb-2">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="font-circular-web block text-gray-700 font-bold mb-2">
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 border rounded-lg"
          ></textarea>
        </div>

        <button
          type="submit"
          className="font-circular-web w-full bg-[#5438DC] text-soft-white py-2 px-4 rounded-lg hover:opacity-80 transition duration-200"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
